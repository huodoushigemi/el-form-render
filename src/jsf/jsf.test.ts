import { expect, test } from 'vitest'
import { z } from 'zod'
import { fromSchema } from './jsf'
import { curry, flowRight } from 'es-toolkit'

const tojs = (zod) => z.toJSONSchema(zod) as any

test('basic type', () => {
  expect(fromSchema({}, tojs(z.object({
    str: z.string(),
    num: z.number().optional(),
    bool: z.boolean(),
    obj: z.object({ a: z.string(), b: z.string() }),
    arr: z.string().array(),
  })))).toMatchObject([
    { lp: ['str', 'str'], type: 'input', required: true },
    { lp: ['num', 'num'], type: 'input-number', required: false },
    { lp: ['bool', 'bool'], type: 'switch', required: true },
    { lp: ['obj', 'obj'], required: true, children: [
      { lp: ['a', 'obj.a'], type: 'input', required: true },
      { lp: ['b', 'obj.b'], type: 'input', required: true },
    ] },
    { lp: ['arr', 'arr'], required: true, children: [] },
  ])
})

test('string', () => {
  expect(fromSchema({}, tojs(z.object({
    str1: z.string().length(5),
    str2: z.string().min(1),
    str3: z.string().max(2),
  })))).toMatchObject([
    { lp: ['str1', 'str1'], type: 'input', rules: [{ type: 'string', min: 5, max: 5 }], el: { minlength: 5, maxlength: 5 } },
    { lp: ['str2', 'str2'], type: 'input', rules: [{ type: 'string', min: 1 }], el: { minlength: 1 } },
    { lp: ['str3', 'str3'], type: 'input', rules: [{ type: 'string', max: 2 }], el: { maxlength: 2 } },
  ])

  // expect(fromSchema({}, tojs(z.object({
  //   start: z.string().startsWith('start'),
  //   end: z.string().endsWith('end'),
  //   includes: z.string().includes('includes'),
  //   regx: z.string().regex(/regx/),
  // }).partial()))).toEqual([
  //   { lp: ['start', 'start'], type: 'input', required: false, rules: [{ type: 'string', pattern: /^start.*/ }], el: { name: 'start' } },
  //   { lp: ['end', 'end'], type: 'input', required: false, rules: [{ type: 'string', pattern: /.*end$/ }], el: { name: 'end' } },
  //   { lp: ['includes', 'includes'], type: 'input', required: false, rules: [{ type: 'string', pattern: /includes/ }], el: { name: 'includes' } },
  //   { lp: ['regx', 'regx'], type: 'input', required: false, rules: [{ type: 'string', pattern: /regx/ }], el: { name: 'regx' } },
  // ])

  expect(flowRight(curry(fromSchema)({}), tojs)(z.object({
    enum: z.enum(['1', '2', '3']),
  }))).toMatchObject([
    { lp: ['enum', 'enum'], type: 'select', options: ['1', '2', '3'] }
  ])
})

test('number', () => {
  expect(fromSchema({}, tojs(z.object({
    min: z.number().min(1),
    max: z.number().max(5),
    multipleOf: z.number().multipleOf(5),
  })))).toMatchObject([
    { lp: ['min', 'min'], type: 'input-number', rules: [{ min: 1 }], el: { min: 1 } },
    { lp: ['max', 'max'], type: 'input-number', rules: [{ max: 5 }], el: { max: 5 } },
    { lp: ['multipleOf', 'multipleOf'], type: 'input-number', el: { step: 5 } },
  ])
})

test('boolean', () => {
  expect(fromSchema({}, tojs(z.object({
    bool: z.boolean(),
  })))).toMatchObject([
    { lp: ['bool', 'bool'], type: 'switch' },
  ])
})

test('object', () => {
  expect(fromSchema({}, tojs(z.object({
    obj1: z.object({
      a: z.string(),
      b: z.object({
        c: z.string()
      })
    }),
  })))).toMatchObject([
    { is: 'div', children: [
      { lp: ['a', 'obj1.a'] },
      { is: 'div', children: [
        { lp: ['c', 'obj1.b.c'] }
      ] },
    ] },
  ])

  expect(fromSchema({}, {
    type: 'object',
    properties: {
      a: { type: 'object' },
      b: { type: 'object', ui: { type: 'select' } },
      c: { type: 'object', 'ui:el': { is: 'el-select' } },
    }
  })).toMatchObject([
    { is: 'div' },
    { type: 'select' },
    { el: { is: 'el-select' } },
  ])

  const depsJSF = {
    type: 'object',
    properties: {
      a: { type: 'string' },
      b: { type: 'string' },
    },
    dependencies: {
      a: ['b']
    }
  }
  expect(fromSchema({}, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: false },
    { lp: ['b', 'b'], vIf: false, required: false },
  ])
  expect(fromSchema({ a: 'xxx' }, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: false },
    { lp: ['b', 'b'], vIf: true, required: true },
  ])
  expect(fromSchema({ b: 'xxx' }, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: false },
    { lp: ['b', 'b'], vIf: false, required: false },
  ])
  expect(fromSchema({ a: '1', b: '1' }, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: false },
    { lp: ['b', 'b'], vIf: true, required: true },
  ])
  depsJSF.dependencies.b = ['a']
  expect(fromSchema({}, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: false },
    { lp: ['b', 'b'], vIf: true, required: false },
  ])
  expect(fromSchema({ b: '1' }, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: true },
    { lp: ['b', 'b'], vIf: true, required: false },
  ])
  expect(fromSchema({ a: '1', b: '1' }, depsJSF)).toMatchObject([
    { lp: ['a', 'a'], vIf: true, required: true },
    { lp: ['b', 'b'], vIf: true, required: true },
  ])
})

test('array', () => {
  expect(fromSchema({ arr: ['', ''] }, tojs(z.object({
    arr: z.array(z.string()),
    min: z.array(z.string()).min(1).max(5),
  })))).toMatchObject([
    {  lp: ['arr', 'arr'], children: [
      { lp: ['0', 'arr.0'], type: 'input' },
      { lp: ['1', 'arr.1'], type: 'input' },
    ] },
    { lp: ['min', 'min'], min: 1, max: 5, rules: [{ min: 1, max: 5 }] }
  ])

  expect(fromSchema({ strs1: ['1', '2'], strs2: ['1', '2'], nums: [1, 2], enums: ['1', '2'], bools: [true], objs: [{}] }, {
    type: 'object',
    properties: {
      strs1: { type: 'array', items: { type: 'string' } },
      strs2: { type: 'array', items: { type: 'string' }, ui: { type: 'input-tag' } },
      nums: tojs(z.number().array()),
      enums: { type: 'array', items: { enum: ['1', '2'] } },
      bools: { type: 'array', items: { type: 'boolean' } },
      objs: { type: 'array', items: { type: 'object', properties: { a: { type: 'string' } } } }
    }
  })).toMatchObject([
    { lp: ['strs1', 'strs1'], children: [{ lp: ['0', 'strs1.0'], type: 'input' }, {}] },
    { lp: ['strs2', 'strs2'], type: 'input-tag' },
    { children: [{ lp: ['0', 'nums.0'], type: 'input-number' }, { lp: ['1', 'nums.1'] }] },
    { children: [{ lp: ['0', 'enums.0'], type: 'select', options: ['1', '2'] }, {}] },
    { children: [{ type: 'switch' }] },
    { children: [{ is: 'div', children: [{ lp: ['a', 'objs.0.a'], type: 'input' }] }] },
  ])
})

test('parse-schema', () => {
  const items = fromSchema({ posts: [{}] }, {
    definitions: {
      User: {
        type: 'object',
        properties: {
          name: { title: '名称', type: 'string' },
          tags: { title: '标签', type: 'array', items: { type: 'string' } },
          posts: { title: '文章列表', type: 'array', items: { $ref: '#/definitions/Post', properties: { title: { maxLength: 10 } } } },
        }
      },
      Post: {
        type: 'object',
        properties: {
          title: { title: '标题', type: 'string', maxLength: 20 },
          content: { title: '内容', type: 'string' },
          date: { title: '日期', type: 'string' },
        }
      },
    },
    $ref: '#/definitions/User'
  })

  expect(items).toMatchObject([
    { lp: ['名称', 'name'] },
    { lp: ['标签', 'tags'] },
    { lp: ['文章列表', 'posts'], children: [
      { is: 'div', lp: ['0', 'posts.0'], model: {}, children: [{ lp: ['标题', 'posts.0.title'], el: { maxlength: 10 } }, {}, {}] }
    ] },
  ])
})