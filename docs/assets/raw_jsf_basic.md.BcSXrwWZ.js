import{c as e,o as r,j as t,t as n,k as m}from"./chunks/framework.aai8Pu2t.js";const s=`# 基础使用\r
\r
支持 [\`el-form\`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性\r
\r
## 典型表单\r
\r
\`\`\`vue preview\r
<template>\r
  <Form\r
    ref="form"\r
    :model="model"\r
    :items="items"\r
    label-width="80px"\r
    @submit.prevent="$refs.form.validate().then(onSubmit)"\r
    @reset="$refs.form.resetFields()"\r
  >\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">Create</el-button>\r
      <el-button native-type="reset">Reset</el-button>\r
    </el-form-item>\r
\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    name: { title: '名称', type: 'string' },\r
    address: { title: '地址', type: 'string' },\r
    age: { title: '年龄', type: 'number', minimum: 0 },\r
    area: { title: '区域', enum: ['Beijing', 'Shanghai'] },\r
    sex: { title: '性别', enum: ['男', '女'], ui: { type: 'radios' } },\r
    like: { title: '爱好', enum: ['CODE', 'LOL'], ui: { type: 'checks' } },\r
    is: { title: '是否', type: 'boolean' },\r
  },\r
  required: ['name'],\r
})\r
\r
const onSubmit = () => {\r
  alert('submit!')\r
}\r
<\/script>\r
\`\`\`\r
\r
## String\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" :items="items" label-width="80px" />\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    str1: { title: '输入框', type: 'string' },\r
    str2: { title: '文本域', type: 'string', ui: { el: { type: 'textarea' } } },\r
    str3: { title: '枚举', type: 'string', enum: ['enum1', 'enum2'] },\r
    str4: { title: '枚举2', type: 'string', enum: ['enum1', 'enum2'], ui: { type: 'radios' } },\r
  }\r
})\r
<\/script>\r
\`\`\`\r
\r
## Number\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" :items="items" label-width="80px" />\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
const opts = { enum: [1, 2], enumName: ['num 1', 'num 2'] }\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    num1: { title: '数字输入', type: 'number' },\r
    num2: { title: '滑块', type: 'number', ui: { type: 'slider' } },\r
    num3: { title: '枚举', type: 'number', ...opts },\r
    num4: { title: '枚举2', type: 'number', ...opts, ui: { type: 'radios' } },\r
  }\r
})\r
<\/script>\r
\`\`\`\r
\r
## Boolean\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" :items="items" label-width="80px" />\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
const opts = { enum: [true, false], enumName: ['true', 'true'] }\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    num1: { title: '开关', type: 'boolean' },\r
    num2: { title: '复选框', type: 'boolean', ui: { type: 'checkbox' } },\r
    num3: { title: '枚举', type: 'boolean', ...opts },\r
    num4: { title: '枚举2', type: 'boolean', ...opts, ui: { type: 'radios' } },\r
  }\r
})\r
<\/script>\r
\`\`\`\r
\r
## Nested Object\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" :items="items" label-width="auto">\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { ref, h } from 'vue'\r
import { ElCard } from 'element-plus'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
// 自定义布局容器\r
const Card = ({ label }, { slots }) =>(\r
  h(ElCard, { header: label, class: 'mb4', bodyClass: 'grid grid-cols-2 gap-x-4 items-start' }, slots)\r
)\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    name: { title: '名称', type: 'string' },\r
    age: { title: '年龄', type: 'number', minimum: 0 },\r
    like: { title: '爱好', type: 'array', enum: ['Code', 'Game'], ui: { type: 'checks' } },\r
    resume: { title: '简历', type: 'object', ui: { is: Card }, properties: {\r
      year: { title: '工龄', type: 'number', minimum: 0 },\r
      email: { title: '邮件', type: 'string' },\r
      job: { title: '职位', type: 'string', enum: ['程序员', '设计师', '产品经理'] },\r
      skill: { title: '技能', type: 'string' },\r
      home: { title: '首页', type: 'string' },\r
      remarks: { title: '备注', type: 'string', ui: { el: { type: 'textarea' } } },\r
    } }\r
  }\r
})\r
<\/script>\r
\`\`\`\r
\r
## Array\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" :items="items">\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { schema2items } from 'el-form-render/element-plus'\r
\r
const model = ref({\r
  str1_arr: ['str 1', 'str 2', 'str 3'],\r
  str2_arr: ['str 1', 'str 2', 'str 3'],\r
})\r
\r
const opts = { enum: [true, false], enumName: ['true', 'true'] }\r
\r
const items = schema2items(model, {\r
  type: 'object',\r
  properties: {\r
    str1_arr: { type: 'array', items: { type: 'string' } },\r
    str2_arr: { type: 'array', items: { type: 'string' }, ui: { type: 'input-tag' } },\r
  }\r
})\r
\r
console.log(items)\r
<\/script>\r
\`\`\``,o={class:"language-markdown"},c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/jsf/basic.md","filePath":"raw/jsf/basic.md"}'),i={name:"raw/jsf/basic.md"},d=Object.assign(i,{setup(l){return(p,a)=>(r(),e("div",null,[t("pre",o,n(m(s)),1)]))}});export{c as __pageData,d as default};
