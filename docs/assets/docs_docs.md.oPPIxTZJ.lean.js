import{c as e,o as r,j as n,t,k as l}from"./chunks/framework.BBFbQ79s.js";const o=`# el-form-render\r
\r
该文档用于教会 cursor 如何使用 el-form-render\r
\r
## 介绍\r
\r
el-form-render 基于 \`vue3 + element-plus\`。在完全继承 el-form 组件的基础上进行扩展，用户可以使用一段 json 来呈现完整的表单。\r
\r
## 安装\r
\r
\`\`\`shell\r
pnpm add el-form-render\r
\`\`\`\r
\r
> 请确保已安装 element-plus\r
\r
## 基础表单\r
\r
\`\`\`vue\r
<template>\r
  <Form\r
    ref="form"\r
    :model="model"\r
    label-width="auto"\r
    :items="[\r
      { lp: ['文本', 'text'] },\r
      { lp: ['数字', 'number'], type: 'input-number' },\r
      { lp: ['开关', 'onoff'], type: 'switch' },\r
      { is: 'el-divider', children: '分割线' },\r
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }\r
    ]"\r
    @submit.prevent="$refs.form.validate()"\r
    @reset="$refs.form.resetFields()"\r
  >\r
    <el-form-item label=" ">\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
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
## 多列布局\r
\r
多列布局表单，使用原子化 css \`grid grid-cols-2 gap-x-4\` 实现多列布局\r
\r
\`\`\`vue\r
<template>\r
  <Form\r
    ref="form"\r
    :model="model"\r
    label-width="auto"\r
    :items="[\r
      // 将 is 属性设置为 div 元素\r
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [\r
        { lp: ['文本', 'text'] },\r
        { lp: ['数字', 'number'], type: 'input-number' },\r
        { lp: ['开关', 'onoff'], type: 'switch' },\r
        { lp: ['日期', 'date'], type: 'date-picker' }\r
      ] },\r
      // 将 is 属性设置为 分割线组件\r
      { is: 'el-divider' },\r
      // 将 is 属性设置为 div 元素\r
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [\r
        { lp: ['标签', 'tags'], type: 'input-tag' },\r
        { lp: ['评分', 'rate'], type: 'rate' },\r
        { lp: ['滑块', 'number'], type: 'slider' },\r
        { lp: ['颜色', 'color'], type: 'color-picker' }\r
      ] },\r
      { is: 'el-divider' },\r
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }\r
    ]"\r
    @submit.prevent="$refs.form.validate()"\r
    @reset="$refs.form.resetFields()"\r
  >\r
    <el-form-item label="ㅤ">\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
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
## 自定义组件\r
\r
设置 \`el.is\` 属性自定义表单输入组件\r
\r
自定义组件接入的关键是在组件内部实现 \`v-model\`\r
\r
- \`props\` 需要接收 \`modelValue\`\r
- 对外触发 \`update:modelValue\` 事件\r
\r
\`\`\`vue\r
<template>\r
  <Form :model="model" :items="[\r
    { is: 'el-divider', children: '自定义组件' },\r
    { lp: ['姓名', 'name'], el: { is: MyInput, placeholder: '这是一个原生输入框' } },\r
    { lp: ['年龄', 'age'], el: { is: MyRange } },\r
    { lp: ['是否', 'is'], el: { is: MyCheckbox } }, \r
    { lp: ['日期', 'date'], el: { is: MyDate } },\r
    { is: 'el-divider', children: 'element-plus' },\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
    { lp: ['日期', 'date'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },\r
    { is: 'el-divider' },\r
  ]" />\r
</template>\r
\r
<script setup>\r
import { h, ref } from 'vue'\r
import Form from 'el-form-render'\r
\r
const model = ref({ age: 26 })\r
\r
// 自定义 input\r
const MyInput = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'text', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })\r
)\r
\r
// 自定义 sider\r
const MyRange = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'range', value: modelValue, onInput: e => emit('update:modelValue', +e.target.value), ...attrs })\r
)\r
\r
// 自定义 checkbox\r
const MyCheckbox = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'checkbox', checked: modelValue, onInput: e => emit('update:modelValue', e.target.checked), ...attrs })\r
)\r
\r
// 自定义 date\r
const MyDate = ({ modelValue, ...attrs }, { emit }) => (\r
  h('input', { type: 'date', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })\r
)\r
<\/script>\r
\`\`\`\r
\r
## Item 属性\r
\r
| 属性名       | 类型          | 默认值             | 描述                                                                                                       |\r
| ------------ | ------------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |\r
| lp           | string[]      |                    | \`label\` \`prop\` 的缩写                                                                                      |\r
| type         | string        | \`'input'\`          | 可选值 \`input\` \`select\` \`switch\` \`radio-group\`……<br />默认 \`input\`，如果传入 \`options\` 属性则默认 \`select\` |\r
| options      | any[]         |                    |                                                                                                            |\r
| get          | (v, o) => any |                    | 对组件接收的值进行格式化                                                                                         |\r
| set          | (v, o) => any |                    | 对组件输出的值进行格式化                                                                                         |\r
| el           | object        |                    | 输入组件的属性                                                                                             |\r
| defaultValue | any           |                    | 默认值                                                                                                     |\r
| is           | string        | \`ElFormItemRender\` | 渲染的组件，可以是任何组件                                                                                 |\r
| vIf          | () => boolean | \`true\`             | 控制组件是否渲染                                                                                           |\r
\r
> 其他属性与 \`el-form-item\` 完全一致`,a={class:"language-markdown"},u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/docs.md","filePath":"docs/docs.md"}'),i={name:"docs/docs.md"},c=Object.assign(i,{setup(s){return(p,m)=>(r(),e("div",null,[n("pre",a,t(l(o)),1)]))}});export{u as __pageData,c as default};
