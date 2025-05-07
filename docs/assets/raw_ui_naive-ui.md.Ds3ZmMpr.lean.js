import{c as r,o as e,j as n,t,k as a}from"./chunks/framework.aai8Pu2t.js";const o=`<n-config-provider :theme="isDark ? darkTheme : undefined">\r
\r
# naive-ui 表单渲染\r
\r
支持 [\`n-form\`](https://www.naiveui.com/en-US/os-theme/components/form#API) 所有属性\r
\r
## 导入\r
\r
\`\`\`js\r
import Form from 'el-form-render/naive-ui'\r
\`\`\`\r
\r
## 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form ref="form" :model="model" label-placement="left" label-width="auto" :items="[\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['地址', 'address'], rule: { required: true } },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },\r
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },\r
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },\r
  ]">\r
    <n-form-item label=' '>\r
      <n-button type="primary" @click="$refs.form.validate()">Submit</n-button>\r
    </n-form-item>\r
\r
    <n-form-item label=' '>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </n-form-item>\r
  </Form>\r
  \r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/naive-ui'\r
\r
const model = ref({})\r
<\/script>\r
\`\`\`\r
\r
## Results\r
\r
::: tip\r
\`lp\` 是 \`label  path\` 的缩写\r
\r
如果不指定 \`type\` 则默认为 \`input\`\r
:::\r
\r
</n-config-provider>\r
\r
<script>\r
import { getCurrentInstance } from 'vue'\r
import { useDark } from '@vueuse/core'\r
import Naive, { darkTheme } from 'naive-ui'\r
\r
export default {\r
  data: () => ({\r
    darkTheme,\r
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })\r
  }),\r
  beforeCreate() {\r
    const app = getCurrentInstance().appContext.app\r
    app.use(Naive)\r
  }\r
}\r
<\/script>`,i={class:"language-markdown"},c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/naive-ui.md","filePath":"raw/ui/naive-ui.md"}'),p={name:"raw/ui/naive-ui.md"},d=Object.assign(p,{setup(m){return(s,l)=>(e(),r("div",null,[n("pre",i,t(a(o)),1)]))}});export{c as __pageData,d as default};
