import{c as r,o as e,j as n,t,k as l}from"./chunks/framework.C9-9fwSE.js";const m=`# element-plus 表单渲染\r
\r
支持 [\`el-form\`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性\r
\r
## 安装\r
\r
<small>请确保已安装 \`element-plus\`</small>\r
\r
\`\`\`bash\r
pnpm add el-form-render\r
\`\`\`\r
\r
## 基础用法\r
\r
### 基础用法\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['字段1', 'field1'], required: true },\r
    { lp: ['字段2', 'field2'] },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
    </el-form-item>\r
  </Form>\r
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
### 登录表单\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['账户', 'username'], required: true, el: { placeholder: '用户名 / 邮箱' } },\r
    { lp: ['密码', 'password'], required: true, el: { type: 'password' } },\r
  ]">\r
    <el-form-item>\r
      <el-checkbox>记住我</el-checkbox>\r
      <a class="ml-a" href="#">忘记密码</a>\r
    </el-form-item>\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
    </el-form-item>\r
\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
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
### 评论表单\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['昵称', 'name'], required: true },\r
    { lp: ['内容', 'content'], required: true, el: { type: 'textarea' } },\r
    { lp: ['内容', 'rate'], type: 'rate', required: true },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
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
const model = ref({ rate: 5 })\r
\r
async function onSubmit() {\r
  alert('Success')\r
}\r
<\/script>\r
\`\`\`\r
\r
### 个人信息\r
\r
头像组件 使用了 \`el.is\` 属性自定义 上传组件\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['名称', 'name'], required: true },\r
    { lp: ['头像', 'avatar'], el: { is: Upload } },\r
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女', '其他'] },\r
    { lp: ['生日', 'birthday'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },\r
    { lp: ['标签', 'tags'], type: 'input-tag' },\r
    { lp: ['备注', 'remarks'], el: { type: 'textarea' } },\r
  ]">\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
    </el-form-item>\r
  </Form>\r
</template>\r
\r
<script setup lang='jsx'>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/element-plus'\r
\r
const model = ref({\r
  name: '姬坂乃爱',\r
  avatar: 'http://mms2.baidu.com/it/u=442450315,2839780031&fm=253&app=138&f=JPEG?w=500&h=500',\r
  sex: '女',\r
  birthday: '2012-11-24',\r
  tags: ['天使降临到我身边', '可爱'],\r
  remarks: '多亏我的可爱才成功走过来了吧 ~ !',\r
})\r
\r
// 自定义 上传组件\r
const Upload = ({ modelValue: url }, { emit }) => (\r
  <el-upload\r
    file-list={url ? [{ url }] : []}\r
    onUpdate:fileList={v => emit('update:modelValue', v[0]?.url)}\r
    list-type='picture-card'\r
    limit={1}\r
  />\r
)\r
\r
async function onSubmit(v) {\r
  console.log(v)\r
  alert('Success')\r
}\r
<\/script>\r
\`\`\`\r
\r
## 格式化值\r
\r
通过设置 \`get\` \`set\` 控制组件的值\r
\r
- \`get\`：相当于组件的 \`model-value\` 属性\r
- \`set\`：相当于组件 \`@update:model-value\` 事件\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { lp: ['开关', 'onoff'], type: 'switch', get: v => !!v, set: v => +v },\r
  ]">\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
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
## 组件联动\r
\r
\`vIf\` 控制元素是否渲染\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="auto" :items="[\r
    { lp: ['显示', 'show'], type: 'switch' },\r
    { lp: ['名称', 'name'], vIf: () => model.show }\r
  ]" />\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/element-plus'\r
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
    { lp: ['显示', 'show'], type: 'switch' },\r
    { is: 'p', vIf: () => model.show, children: '😂😂😂😂😂😂😂' },\r
    { lp: ['名称', 'name'] }\r
  ]"/>\r
\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import Form from 'el-form-render/element-plus'\r
\r
const model = ref({ show: true })\r
<\/script>\r
\`\`\`\r
\r
## 自定义组件\r
\r
::: info\r
大部分情况 \`type\` 提供的组件已足够满足需求，但总有需要定制化的场景，这时候 \`el.is\` 属性就派上用场了\r
:::\r
\r
### 接入标准\r
\r
自定义组件接入的关键是在组件内部实现 \`v-model\`\r
\r
- \`props\` 需要接收 \`modelValue\`\r
- 对外触发 \`update:modelValue\` 事件\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[\r
    { is: 'el-divider', children: '自定义组件' },\r
    { lp: ['姓名', 'name'], el: { is: MyInput, placeholder: '这是一个原生输入框' } },\r
    { lp: ['年龄', 'age'], el: { is: MyRange } },\r
    { lp: ['是否', 'is'], el: { is: MyCheckbox } }, \r
    { lp: ['日期', 'date'], el: { is: MyDate } },\r
    \r
    { is: 'el-divider', children: 'element-plus' },\r
    { lp: ['姓名', 'name'] },\r
    { lp: ['年龄', 'age'], type: 'slider' },\r
    { lp: ['是否', 'is'], type: 'checkbox' },\r
    { lp: ['日期', 'date'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },\r
    { is: 'el-divider' },\r
  ]">\r
    <el-form-item>\r
      <el-button type="primary" native-type="submit">提交</el-button>\r
      <el-button native-type="reset">重置</el-button>\r
    </el-form-item>\r
\r
    <el-form-item>\r
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>\r
    </el-form-item>\r
  </Form>\r
</template>\r
\r
<script setup>\r
import { h, ref } from 'vue'\r
import Form from 'el-form-render/element-plus'\r
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
\r
async function onSubmit() {\r
  alert('Success')\r
}\r
<\/script>\r
\r
<style scope>\r
input[type="text"],\r
input[type="range"] {\r
  width: 100%;\r
}\r
</style>\r
\`\`\`\r
\r
## 自定义布局\r
\r
\r
### 3 列布局\r
\r
使用 css 的网格布局实现 3 列布局 \`grid grid-cols-3 gap-x-8\`\r
\r
\`\`\`vue preview\r
<template>\r
  <Form class="grid grid-cols-3 gap-x-8" :items="[\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入' },\r
    { lp: '输入', class: 'col-span-2' },\r
  ]" />\r
</template>\r
\r
<script setup>\r
import Form from 'el-form-render/element-plus'\r
<\/script>\r
\`\`\`\r
\r
### 多列布局\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :items="[\r
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
import Form from 'el-form-render/element-plus'\r
<\/script>\r
\`\`\`\r
\r
### 折叠面板 布局\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :items="[\r
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
import Form from 'el-form-render/element-plus'\r
<\/script>\r
\`\`\`\r
\r
### Tabs 布局\r
\r
\`\`\`vue preview\r
<template>\r
  <Form :items="[\r
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
import Form from 'el-form-render/element-plus'\r
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
<style>\r
h3 {\r
  margin: 1.5em 0 1em 0 !important;\r
  font-size: 14px !important;\r
}\r
</style>`,o={class:"language-markdown"},d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/ui/element-plus.md","filePath":"raw/ui/element-plus.md"}'),p={name:"raw/ui/element-plus.md"},c=Object.assign(p,{setup(i){return(s,a)=>(e(),r("div",null,[n("pre",o,t(l(m)),1)]))}});export{d as __pageData,c as default};
