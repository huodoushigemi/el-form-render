import{c as r,o as e,j as n,t,k as s}from"./chunks/framework.C9-9fwSE.js";const o=`# element-plus 表单渲染\r
\r
支持 [\`el-form\`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性\r
\r
## 导入\r
\r
\`\`\`js\r
import Form from 'el-form-render/vuetify'\r
\`\`\`\r
\r
## 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['地址', 'address'], required: true },\r
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },\r
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
    { lp: ['在职', 'onjob'], type: 'switch', color: 'primary' },\r
    { lp: ['标签', 'tags'], type: 'input-tag', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },\r
    { lp: ['标签', 'tags'], type: 'chips', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },\r
  ]">\r
    <div class="space-x-3">\r
      <v-btn color="primary" variant="elevated" type="submit">Submit</v-btn>\r
      <v-btn variant="tonal" type="reset">Reset</v-btn>\r
    </div>\r
\r
    <br />\r
    <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/vuetify'\r
\r
const model = ref({})\r
\r
function onSubmit() {\r
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
\r
<component is="style">{{ css }}</component>\r
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />\r
\r
<script>\r
import { getCurrentInstance } from 'vue'\r
import { useDark } from '@vueuse/core'\r
import css from 'vuetify/lib/styles/main.css?raw'\r
import * as components from 'vuetify/components'\r
import * as directives from 'vuetify/directives'\r
import { createVuetify } from 'vuetify'\r
\r
const vuetify = createVuetify({ components, directives })\r
\r
export default {\r
  data: () => ({\r
    css,\r
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })\r
  }),\r
  beforeCreate() {\r
    const app = getCurrentInstance().appContext.app\r
    app.use(vuetify)\r
  }\r
}\r
<\/script>`,i={class:"language-markdown"},u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/vuetify.md","filePath":"raw/ui/vuetify.md"}'),p={name:"raw/ui/vuetify.md"},f=Object.assign(p,{setup(a){return(m,l)=>(e(),r("div",null,[n("pre",i,t(s(o)),1)]))}});export{u as __pageData,f as default};
