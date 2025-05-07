import{c as r,o as n,j as o,t as e,k as t}from"./chunks/framework.aai8Pu2t.js";const s=`# ElFormRender 表单渲染\r
\r
本章介绍 \`options\` 属性的使用\r
\r
---\r
\r
\`options\` 属性支持多种类型：\r
- \`Option[]\`  \r
- \`() => Option[]\`  \r
- \`Promise<Option[]>\` \r
- \`() => Promise<Option[]>\` \r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="items" label-width="auto" />\r
  \r
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const opts = [\r
  { value: 'man' },\r
  { value: 'woman' },\r
]\r
\r
const model = ref({})\r
\r
const items = [\r
  { lp: ['Normal', 'normal'], options: opts },\r
  { lp: ['Function', 'function'], options: () => opts },\r
  { lp: ['Promise', 'promise'], options: Promise.resolve(opts) },\r
  { lp: ['AsynFunction', 'asynFunction'], options: () => Promise.resolve(opts) },\r
]\r
<\/script>\r
\`\`\`\r
\r
\`\`\`ts\r
type Option = { label: string, value: string }\r
\`\`\``,i={class:"language-markdown"},d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/options.md","filePath":"raw/el-form-render/options.md"}'),p={name:"raw/el-form-render/options.md"},u=Object.assign(p,{setup(a){return(l,m)=>(n(),r("div",null,[o("pre",i,e(t(s)),1)]))}});export{d as __pageData,u as default};
