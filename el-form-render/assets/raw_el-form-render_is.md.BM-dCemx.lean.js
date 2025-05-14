import{c as e,o as r,j as n,t,k as l}from"./chunks/framework.C9-9fwSE.js";const a=`# 自定义组件\r
\r
::: info\r
\`el-form-render\` 的 \`type\` 有限, 默认只能渲染普通的表单项, 假如现在要渲染一个上传组件, \`type\` 就不够用了, 那怎么办呢? 这时候 \`el.is\` 选项就派上用场了\r
:::\r
\r
本章介绍 \`el.is\` 属性自定义组件的使用\r
\r
## 接入标准\r
\r
自定义组件接入的关键是在组件内部实现 \`v-model\`\r
\r
- \`props\` 需要接收 \`modelValue\`\r
- 对外触发 \`update:modelValue\` 事件\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="[\r
    { is: 'el-divider', children: '自定义组件' },\r
    { lp: ['姓名', 'name'], el: { is: MyInput, placeholder: '这是一个原生输入框' } },\r
    { lp: ['年龄', 'age'], el: { is: MyRange } },\r
    { lp: ['是否', 'is'], el: { is: MyCheckbox } }, \r
    { lp: ['日期', 'date'], el: { is: MyDate } },\r
    \r
    { is: 'el-divider', children: 'element-plus' },\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
    { lp: ['日期', 'date'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },\r
    { is: 'el-divider' },\r
  ]" />\r
  \r
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
</template>\r
\r
<script setup>\r
import { h, ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({ age: 26 })\r
\r
// 自定义 input\r
const MyInput = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'text', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })\r
)\r
\r
// 自定义 sider\r
const MyRange = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'range', value: modelValue, onInput: e => emit('update:modelValue', +e.target.value), ...attrs })\r
)\r
\r
// 自定义 checkbox\r
const MyCheckbox = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'checkbox', checked: modelValue, onInput: e => emit('update:modelValue', e.target.checked), ...attrs })\r
)\r
\r
// 自定义 date\r
const MyDate = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'date', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })\r
)\r
<\/script>\r
\r
<style scope>\r
input[type="text"],\r
input[type="range"] {\r
  width: 100%;\r
}\r
</style>\r
\`\`\`\r
\r
## 关于 \`el.is\` 属性的更多用法详见 [\`<component>\`](https://vuejs.org/api/built-in-special-elements.html#component)`,o={class:"language-markdown"},u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/is.md","filePath":"raw/el-form-render/is.md"}'),p={name:"raw/el-form-render/is.md"},c=Object.assign(p,{setup(s){return(i,d)=>(r(),e("div",null,[n("pre",o,t(l(a)),1)]))}});export{u as __pageData,c as default};
