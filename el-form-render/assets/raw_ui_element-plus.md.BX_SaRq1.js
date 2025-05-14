import{c as e,o as r,j as n,t,k as o}from"./chunks/framework.C9-9fwSE.js";const l=`# element-plus 表单渲染\r
\r
支持 [\`el-form\`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性\r
\r
## 导入\r
\r
\`\`\`js\r
import Form from 'el-form-render/element-plus'\r
\`\`\`\r
\r
## 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['地址', 'address'], required: true },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },\r
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },\r
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">Submit</el-button>\r
      <el-button native-type="reset">Reset</el-button>\r
    </el-form-item>\r
\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
  \r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/element-plus'\r
\r
const model = ref({})\r
\r
async function onSubmit() {\r
  alert('Success')\r
}\r
<\/script>\r
\`\`\`\r
\r
## Results\r
\r
::: tip\r
\`lp\` 是 \`label prop\` 的缩写\r
\r
如果不指定 \`type\` 则默认为 \`input\`\r
:::\r
`,s={class:"language-markdown"},c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/element-plus.md","filePath":"raw/ui/element-plus.md"}'),m={name:"raw/ui/element-plus.md"},d=Object.assign(m,{setup(p){return(i,a)=>(r(),e("div",null,[n("pre",s,t(o(l)),1)]))}});export{c as __pageData,d as default};
