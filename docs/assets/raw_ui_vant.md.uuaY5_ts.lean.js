import{c as r,o as n,j as e,t,k as a}from"./chunks/framework.aai8Pu2t.js";const o=`<van-config-provider :theme="isDark ? 'dark' : ''">\r
\r
# vant 表单渲染\r
\r
支持 [\`van-form\`](https://vant-ui.github.io/vant/#/zh-CN/form#api) 所有属性\r
\r
## 导入\r
\r
\`\`\`js\r
import Form from 'el-form-render/vant'\r
\`\`\`\r
\r
## 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form class="max-w[350px] bg-#909090 p1" :model="model" @submit="onFinish" :items="[\r
    { is: 'van-cell-group', class: 'mt-4!', inset: true, children: [\r
      { lp: ['开关', 'onoff'], type: 'switch' },\r
      { lp: ['是否', 'is'], type: 'checkbox', el: { shape: 'square' } },\r
      { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'], el: { direction: 'horizontal', shape: 'square' } },\r
      { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'], el: { direction: 'horizontal' } },\r
      { lp: ['步进器', 'stepper'], type: 'stepper' },\r
      { lp: ['评分', 'rate'], type: 'rate' },\r
      { lp: ['滑块', 'slider'], type: 'slider' },\r
      { lp: ['文本', 'text'], el: { placeholder: '请输入文本' } },\r
    ] }\r
  ]">\r
    <div class="m4">\r
      <van-button round block type="primary" native-type="submit">Submit</van-button>\r
    </div>\r
  </Form>\r
  \r
  <br />\r
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form, { Item } from 'el-form-render/vant'\r
\r
const model = ref({\r
  slider: 50,\r
  rate: 3,\r
  sex: '男'\r
})\r
\r
function onFinish() {\r
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
如果不指定 \`type\` 则默认为 \`field\`\r
:::\r
\r
</van-config-provider>\r
\r
<component is="style">{{ css }}</component>\r
\r
<script>\r
import { getCurrentInstance } from 'vue'\r
import { useDark } from '@vueuse/core'\r
import Vant from 'vant'\r
import css from 'vant/lib/index.css?raw'\r
\r
export default {\r
  data: () => ({\r
    css,\r
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })\r
  }),\r
  beforeCreate() {\r
    const app = getCurrentInstance().appContext.app\r
    app.use(Vant)\r
  }\r
}\r
<\/script>`,s={class:"language-markdown"},d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/vant.md","filePath":"raw/ui/vant.md"}'),p={name:"raw/ui/vant.md"},u=Object.assign(p,{setup(i){return(l,c)=>(n(),r("div",null,[e("pre",s,t(a(o)),1)]))}});export{d as __pageData,u as default};
