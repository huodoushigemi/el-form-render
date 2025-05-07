import{c as r,o as e,j as n,t,k as o}from"./chunks/framework.aai8Pu2t.js";const a=`# 组件联动\r
\r
本章介绍 \`vIf\` 属性实现组件联动\r
\r
## 显示 / 隐藏\r
\r
\`vIf\` 控制元素是否渲染\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="auto" :items="[\r
    { lp: 'show', type: 'switch' },\r
    { lp: 'name', vIf: () => model.show }\r
  ]"/>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({ show: true })\r
<\/script>\r
\`\`\`\r
\r
\`vIf\` 可以控制任何元素\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="auto" :items="[\r
    { lp: 'show', type: 'switch' },\r
    { is: 'p', vIf: () => model.show, children: '😂😂😂😂😂😂😂' },\r
    { lp: 'name' }\r
  ]"/>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({ show: true })\r
<\/script>\r
\`\`\``,m={class:"language-markdown"},c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/linkage.md","filePath":"raw/el-form-render/linkage.md"}'),s={name:"raw/el-form-render/linkage.md"},f=Object.assign(s,{setup(l){return(p,i)=>(e(),r("div",null,[n("pre",m,t(o(a)),1)]))}});export{c as __pageData,f as default};
