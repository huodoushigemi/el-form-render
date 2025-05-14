import{c as r,o as e,j as n,t,k as o}from"./chunks/framework.C9-9fwSE.js";const l=`# 基础使用\r
\r
支持 [\`el-form\`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性\r
\r
## 基础用法\r
\r
::: tip\r
\`lp\` 是 \`label  prop\` 的缩写\r
\r
如果不指定 \`type\` 则默认为 \`input\`\r
:::\r
\r
## 典型表单\r
\r
最基础的表单包括各种输入表单项，比如 \`input\`、\`select\`、\`radio\`、\`checkbox\` 等。\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="120px" @submit.prevent="onSubmit" :items="[\r
    { lp: ['name', 'name'] },\r
    { lp: ['Activity zone', 'region'] },\r
    { lp: ['time', 'date'], type: 'time-picker' },\r
    { lp: ['Instant delivery', 'delivery'], type: 'switch' },\r
    { lp: ['Activity type', 'type'], type: 'checkbox-group', options: ['Online activities', 'Promotion activities', 'Offline activities', 'Simple brand exposure'] },\r
    { lp: ['Resources', 'resource'], type: 'radio-group', options: ['Sponsor', 'Venue'] },\r
    { lp: ['Activity form', 'desc'], el: { type: 'textarea' } },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">Create</el-button>\r
      <el-button>Cancel</el-button>\r
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
import Form from 'el-form-render'\r
\r
const model = ref({})\r
\r
const onSubmit = () => {\r
  alert('submit!')\r
}\r
<\/script>\r
\`\`\`\r
\r
## 表单校验\r
\r
密码的二次验证。\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" label-width="120px" @submit.prevent="onSubmit" @reset="form.resetFields()" :items="items">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">Submit</el-button>\r
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
import Form from 'el-form-render'\r
\r
const form = ref()\r
const model = ref({})\r
\r
const items = [\r
  {\r
    lp: ['Password', 'pass'],\r
    required: true,\r
    el: { type: 'password' }\r
  },\r
  {\r
    lp: ['Confirm', 'checkPass'],\r
    required: true,\r
    rules: { validator: (rule, val, cb) => val != model.value.pass ? cb(\`Two inputs don't match!\`) : null },\r
    el: { type: 'password'  }\r
  },\r
  {\r
    lp: ['Age', 'age'],\r
    rules: { validator: (rule, val, cb) => +val < 18 ? cb('Age must be greater than 18') : null },\r
    el: { type: 'number' }\r
  }\r
]\r
\r
async function onSubmit() {\r
  await form.value.validate()\r
  alert('submit!')\r
}\r
<\/script>\r
\`\`\`\r
\r
## 动态校验\r
\r
性别为 \`男\` 时 \`介绍\` 必填\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" label-width="120px" :items="[\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['性别', 'sex'], type: 'select', options: [{ value: '男' }, { value: '女' }] },\r
    {\r
      lp: ['介绍', 'intro'],\r
      rules: (o) => ({ required: o.sex === '男', message: '必填 ' }),\r
      el: { type: 'textarea' }\r
    },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" @click="$refs.form.validate()">Submit</el-button>\r
      <el-button @click="$refs.form.resetFields()">Reset</el-button>\r
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
import Form from 'el-form-render'\r
\r
const model = ref({})\r
<\/script>\r
\`\`\`\r
\r
## value-format\r
\r
通过设置 \`get\` \`set\` \`out\` 控制值。\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="items" label-width="60" />\r
  \r
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({})\r
\r
const items = [\r
  {\r
    lp: ['range', 'time'],\r
    type: 'date-picker',\r
    el: { type: 'daterange', valueFormat: 'YYYY-MM-DD' },\r
    get: (v, o) => [o.start, o.end],\r
    set: (v, o) => null,\r
    out: (v, o) => ({ start: v?.[0], end: v?.[1] }),\r
  }\r
]\r
<\/script>\r
\`\`\`\r
`,m={class:"language-markdown"},u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/basic.md","filePath":"raw/el-form-render/basic.md"}'),i={name:"raw/el-form-render/basic.md"},d=Object.assign(i,{setup(p){return(s,a)=>(e(),r("div",null,[n("pre",m,t(o(l)),1)]))}});export{u as __pageData,d as default};
