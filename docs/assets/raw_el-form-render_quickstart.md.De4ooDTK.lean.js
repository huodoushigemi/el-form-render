import{c as r,o as e,j as n,t,k as o}from"./chunks/framework.aai8Pu2t.js";const a=`# 快速开始\r
\r
本节将介绍如何在项目中使用 \`el-form-render\`\r
\r
## 安装\r
\r
\`\`\`shell\r
pnpm add el-form-render\r
\`\`\`\r
\r
## 使用\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="[\r
    { lp: ['文本', 'text'] },\r
    { lp: ['开关', 'onoff'], type: 'switch' },\r
  ]" />\r
  \r
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({})\r
<\/script>\r
\`\`\``,s={class:"language-markdown"},i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/quickstart.md","filePath":"raw/el-form-render/quickstart.md"}'),l={name:"raw/el-form-render/quickstart.md"},f=Object.assign(l,{setup(m){return(c,d)=>(e(),r("div",null,[n("pre",s,t(o(a)),1)]))}});export{i as __pageData,f as default};
