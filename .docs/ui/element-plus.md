# element-plus 表单渲染

支持 [`el-form`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性

## 安装

<small>请确保已安装 `element-plus`</small>

```bash
pnpm add el-form-render
```

## 基础用法

### 基础用法

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['字段1', 'field1'], required: true },
    { lp: ['字段2', 'field2'] },
  ]">
    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({})

async function onSubmit() {
  alert('Success')
}
</script>
```

### 登录表单

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['账户', 'username'], required: true, el: { placeholder: '用户名 / 邮箱' } },
    { lp: ['密码', 'password'], required: true, el: { type: 'password' } },
  ]">
    <el-form-item>
      <el-checkbox>记住我</el-checkbox>
      <a class="ml-a" href="#">忘记密码</a>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({})

async function onSubmit() {
  alert('Success')
}
</script>
```

### 评论表单

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['昵称', 'name'], required: true },
    { lp: ['内容', 'content'], required: true, el: { type: 'textarea' } },
    { lp: ['内容', 'rate'], type: 'rate', required: true },
  ]">
    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
  
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({ rate: 5 })

async function onSubmit() {
  alert('Success')
}
</script>
```

### 个人信息

头像组件 使用了 `el.is` 属性自定义 上传组件

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['名称', 'name'], required: true },
    { lp: ['头像', 'avatar'], el: { is: Upload } },
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女', '其他'] },
    { lp: ['生日', 'birthday'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },
    { lp: ['标签', 'tags'], type: 'input-tag' },
    { lp: ['备注', 'remarks'], el: { type: 'textarea' } },
  ]">
    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
</template>

<script setup lang='jsx'>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({
  name: '姬坂乃爱',
  avatar: 'http://mms2.baidu.com/it/u=442450315,2839780031&fm=253&app=138&f=JPEG?w=500&h=500',
  sex: '女',
  birthday: '2012-11-24',
  tags: ['天使降临到我身边', '可爱'],
  remarks: '多亏我的可爱才成功走过来了吧 ~ !',
})

// 自定义 上传组件
const Upload = ({ modelValue: url }, { emit }) => (
  <el-upload
    file-list={url ? [{ url }] : []}
    onUpdate:fileList={v => emit('update:modelValue', v[0]?.url)}
    list-type='picture-card'
    limit={1}
  />
)

async function onSubmit(v) {
  console.log(v)
  alert('Success')
}
</script>
```

## 格式化值

通过设置 `get` `set` 控制组件的值

- `get`：相当于组件的 `model-value` 属性
- `set`：相当于组件 `@update:model-value` 事件

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['开关', 'onoff'], type: 'switch', get: v => !!v, set: v => +v },
  ]">
    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({})

async function onSubmit() {
  alert('Success')
}
</script>
```

## 组件联动

`vIf` 控制元素是否渲染

```vue preview
<template>
  <Form :model="model" label-width="auto" :items="[
    { lp: ['显示', 'show'], type: 'switch' },
    { lp: ['名称', 'name'], vIf: () => model.show }
  ]" />
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({ show: true })
</script>
```

`vIf` 可以控制任何元素

```vue preview
<template>
  <Form :model="model" label-width="auto" :items="[
    { lp: ['显示', 'show'], type: 'switch' },
    { is: 'p', vIf: () => model.show, children: '😂😂😂😂😂😂😂' },
    { lp: ['名称', 'name'] }
  ]"/>

</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({ show: true })
</script>
```

## 自定义组件

::: info
大部分情况 `type` 提供的组件已足够满足需求，但总有需要定制化的场景，这时候 `el.is` 属性就派上用场了
:::

### 接入标准

自定义组件接入的关键是在组件内部实现 `v-model`

- `props` 需要接收 `modelValue`
- 对外触发 `update:modelValue` 事件

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { is: 'el-divider', children: '自定义组件' },
    { lp: ['姓名', 'name'], el: { is: MyInput, placeholder: '这是一个原生输入框' } },
    { lp: ['年龄', 'age'], el: { is: MyRange } },
    { lp: ['是否', 'is'], el: { is: MyCheckbox } }, 
    { lp: ['日期', 'date'], el: { is: MyDate } },
    
    { is: 'el-divider', children: 'element-plus' },
    { lp: ['姓名', 'name'] },
    { lp: ['年龄', 'age'], type: 'slider' },
    { lp: ['是否', 'is'], type: 'checkbox' },
    { lp: ['日期', 'date'], type: 'date-picker', el: { valueFormat: 'YYYY-MM-DD' } },
    { is: 'el-divider' },
  ]">
    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { h, ref } from 'vue'
import Form from 'el-form-render/element-plus'

const model = ref({ age: 26 })

// 自定义 input
const MyInput = ({ modelValue, ...attrs }, { emit }) => (
  h('input', { type: 'text', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })
)

// 自定义 sider
const MyRange = ({ modelValue, ...attrs }, { emit }) => (
  h('input', { type: 'range', value: modelValue, onInput: e => emit('update:modelValue', +e.target.value), ...attrs })
)

// 自定义 checkbox
const MyCheckbox = ({ modelValue, ...attrs }, { emit }) => (
  h('input', { type: 'checkbox', checked: modelValue, onInput: e => emit('update:modelValue', e.target.checked), ...attrs })
)

// 自定义 date
const MyDate = ({ modelValue, ...attrs }, { emit }) => (
  h('input', { type: 'date', value: modelValue, onInput: e => emit('update:modelValue', e.target.value), ...attrs })
)

async function onSubmit() {
  alert('Success')
}
</script>

<style scope>
input[type="text"],
input[type="range"] {
  width: 100%;
}
</style>
```

## 自定义布局


### 3 列布局

使用 css 的网格布局实现 3 列布局 `grid grid-cols-3 gap-x-8`

```vue preview
<template>
  <Form class="grid grid-cols-3 gap-x-8" :items="[
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入', class: 'col-span-2' },
  ]" />
</template>

<script setup>
import Form from 'el-form-render/element-plus'
</script>
```

### 多列布局

```vue preview
<template>
  <Form :items="[
    { is: 'el-divider', children: '1 列布局' },
    { lp: '输入' },
    { is: 'el-divider', children: '2 列布局' },
    { is: 'div', class: 'grid grid-cols-2 gap-x-8', children: [
      { lp: '输入' },
      { lp: '输入' },
    ] },
    { is: 'el-divider', children: '3 列布局' },
    { is: 'div', class: 'grid grid-cols-3 gap-x-8', children: [
      { lp: '输入' },
      { lp: '输入' },
      { lp: '输入' },
    ] },
    { is: 'el-divider', children: '4 列布局' },
    { is: 'div', class: 'grid grid-cols-4 gap-x-8', children: [
      { lp: '输入' },
      { lp: '输入' },
      { lp: '输入' },
      { lp: '输入' },
    ] },
  ]" />
</template>

<script setup>
import Form from 'el-form-render/element-plus'
</script>
```

### 折叠面板 布局

```vue preview
<template>
  <Form :items="[
    { is: 'el-collapse', children: [
      { is: 'el-collapse-item', title: 'Item 1', children: [
        { lp: '输入 1' },
        { lp: '输入 1' },
        { lp: '输入 1' },
      ] },
      { is: 'el-collapse-item', title: 'Item 2', children: [
        { lp: '输入 2' },
        { lp: '输入 2' },
        { lp: '输入 2' },
      ] }
    ] },
  ]" />
</template>

<script setup>
import Form from 'el-form-render/element-plus'
</script>
```

### Tabs 布局

```vue preview
<template>
  <Form :items="[
    { lp: '输入' },
    { is: 'el-tabs', children: [
      { is: 'el-tab-pane', label: 'Pane 1', children: [
        { lp: '输入 1' },
        { lp: '输入 1' },
        { lp: '输入 1' },
      ] },
      { is: 'el-tab-pane', label: 'Pane 2', children: [
        { lp: '输入 2' },
        { lp: '输入 2' },
        { lp: '输入 2' },
      ] }
    ] },
  ]" />
</template>

<script setup>
import Form from 'el-form-render/element-plus'
</script>
```

## Results

::: tip
`lp` 是 `label prop` 的缩写

如果不指定 `type` 则默认为 `input`
:::

<style>
h3 {
  margin: 1.5em 0 1em 0 !important;
  font-size: 14px !important;
}
</style>