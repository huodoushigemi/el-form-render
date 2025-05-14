import{c as r,o as n,j as e,t,k as a}from"./chunks/framework.C9-9fwSE.js";const o=`<a-config-provider :theme="{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }">\r
\r
# ant-design-vue 表单渲染\r
\r
支持 [\`a-form\`](https://www.antdv.com/components/form-cn/#api) 所有属性\r
\r
## 导入\r
\r
\`\`\`js\r
import Form from 'el-form-render/antdv'\r
\`\`\`\r
\r
## 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" :label-col="{ span: 2 }" @finish="onSubmit" :items="[\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['地址', 'address'], required: true },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },\r
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },\r
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
  ]">\r
    <a-form-item :wrapper-col="{ offset: 2 }">\r
      <a-button type="primary" html-type="submit">Submit</a-button>\r
      <a-button html-type="reset">Reset</a-button>\r
    </a-form-item>\r
\r
    <a-form-item :wrapper-col="{ offset: 2 }">\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </a-form-item>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/antdv'\r
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
\`lp\` 是 \`label  name\` 的缩写\r
\r
如果不指定 \`type\` 则默认为 \`input\`\r
:::\r
\r
</a-config-provider>\r
\r
<style>\r
.ant-btn + .ant-btn {\r
  margin-left: 10px;\r
}\r
</style>\r
\r
<component is="style">{{ css }}</component>\r
\r
<script>\r
import { getCurrentInstance } from 'vue'\r
import { useDark } from '@vueuse/core'\r
import Antd, { theme } from 'ant-design-vue'\r
import css from 'ant-design-vue/dist/reset.css?raw'\r
\r
export default {\r
  data: () => ({\r
    css,\r
    theme,\r
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })\r
  }),\r
  beforeCreate() {\r
    const app = getCurrentInstance().appContext.app\r
    app.use(Antd)\r
  }\r
}\r
<\/script>`,s={class:"language-markdown"},d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/antdv.md","filePath":"raw/ui/antdv.md"}'),p={name:"raw/ui/antdv.md"},u=Object.assign(p,{setup(i){return(m,l)=>(n(),r("div",null,[e("pre",s,t(a(o)),1)]))}});export{d as __pageData,u as default};
