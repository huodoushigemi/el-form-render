import{c as r,o as n,j as e,t as l,k as t}from"./chunks/framework.aai8Pu2t.js";const i=`# 复杂布局\r
\r
## 3 列布局\r
\r
使用 css 的网格布局实现 3 列布局 \`grid grid-cols-3 gap-x-8\`\r
\r
\`\`\`vue preview\r
<template>\r
  <Form class="grid grid-cols-3 gap-x-8" :model="model" :items="[\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入', class: 'col-span-2' },\r
  ]" />\r
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
## 多列布局\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="[\r
    { is: 'el-divider', children: '1 列布局' },\r
    { lp: '输入' },\r
    { is: 'el-divider', children: '2 列布局' },\r
    { is: 'div', class: 'grid grid-cols-2 gap-x-8', children: [\r
      { lp: '输入' },\r
      { lp: '输入' },\r
    ] },\r
    { is: 'el-divider', children: '3 列布局' },\r
    { is: 'div', class: 'grid grid-cols-3 gap-x-8', children: [\r
      { lp: '输入' },\r
      { lp: '输入' },\r
      { lp: '输入' },\r
    ] },\r
    { is: 'el-divider', children: '4 列布局' },\r
    { is: 'div', class: 'grid grid-cols-4 gap-x-8', children: [\r
      { lp: '输入' },\r
      { lp: '输入' },\r
      { lp: '输入' },\r
      { lp: '输入' },\r
    ] },\r
  ]" />\r
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
## 折叠面板\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="[\r
    { is: 'el-collapse', children: [\r
      { is: 'el-collapse-item', title: 'Item 1', children: [\r
        { lp: '输入 1' },\r
        { lp: '输入 1' },\r
        { lp: '输入 1' },\r
      ] },\r
      { is: 'el-collapse-item', title: 'Item 2', children: [\r
        { lp: '输入 2' },\r
        { lp: '输入 2' },\r
        { lp: '输入 2' },\r
      ] }\r
    ] },\r
  ]" />\r
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
## Tabs\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :items="[\r
    { lp: '输入' },\r
    { is: 'el-tabs', children: [\r
      { is: 'el-tab-pane', label: 'Pane 1', children: [\r
        { lp: '输入 1' },\r
        { lp: '输入 1' },\r
        { lp: '输入 1' },\r
      ] },\r
      { is: 'el-tab-pane', label: 'Pane 2', children: [\r
        { lp: '输入 2' },\r
        { lp: '输入 2' },\r
        { lp: '输入 2' },\r
      ] }\r
    ] },\r
  ]" />\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({})\r
<\/script>\r
\`\`\``,p={class:"language-markdown"},c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/el-form-render/layout.md","filePath":"raw/el-form-render/layout.md"}'),s={name:"raw/el-form-render/layout.md"},f=Object.assign(s,{setup(o){return(m,a)=>(n(),r("div",null,[e("pre",p,l(t(i)),1)]))}});export{c as __pageData,f as default};
