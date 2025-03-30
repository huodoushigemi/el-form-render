# el-form-render

该文档用于教会 cursor 如何使用 el-form-render

## 介绍

el-form-render 基于 `vue3 + element-plus`。在完全继承 el-form 组件的基础上进行扩展，用户可以使用一段 json 来呈现完整的表单。

## 安装

```shell
pnpm add el-form-render
```

> 请确保已安装 element-plus

## 基础表单

```vue
<template>
  <Form
    ref="form"
    :model="model"
    label-width="auto"
    :items="[
      { lp: ['文本', 'text'] },
      { lp: ['数字', 'number'], type: 'input-number' },
      { lp: ['开关', 'onoff'], type: 'switch' },
      { is: 'el-divider', children: '分割线' },
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }
    ]"
    @submit.prevent="$refs.form.validate()"
    @reset="$refs.form.resetFields()"
  >
    <el-form-item label=" ">
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## 多列布局

多列布局表单，使用原子化 css `grid grid-cols-2 gap-x-4` 实现多列布局

```vue
<template>
  <Form
    ref="form"
    :model="model"
    label-width="auto"
    :items="[
      // 将 is 属性设置为 div 元素
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [
        { lp: ['文本', 'text'] },
        { lp: ['数字', 'number'], type: 'input-number' },
        { lp: ['开关', 'onoff'], type: 'switch' },
        { lp: ['日期', 'date'], type: 'date-picker' }
      ] },
      // 将 is 属性设置为 分割线组件
      { is: 'el-divider' },
      // 将 is 属性设置为 div 元素
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [
        { lp: ['标签', 'tags'], type: 'input-tag' },
        { lp: ['评分', 'rate'], type: 'rate' },
        { lp: ['滑块', 'number'], type: 'slider' },
        { lp: ['颜色', 'color'], type: 'color-picker' }
      ] },
      { is: 'el-divider' },
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }
    ]"
    @submit.prevent="$refs.form.validate()"
    @reset="$refs.form.resetFields()"
  >
    <el-form-item label="ㅤ">
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## 自定义组件

设置 `el.is` 属性自定义表单输入组件

自定义组件接入的关键是在组件内部实现 `v-model`

- `props` 需要接收 `modelValue`
- 对外触发 `update:modelValue` 事件

```vue preview
<template>
  <Form :model="model" :items="[
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
  ]" />
  
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { h, ref } from 'vue'
import Form from 'el-form-render'

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
</script>

<style scope>
input[type="text"],
input[type="range"] {
  width: 100%;
}
</style>
```


## Item 属性

| 属性名       | 类型          | 默认值             | 描述                                                                                                       |
| ------------ | ------------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| lp           | string[]      |                    | `label` `prop` 的缩写                                                                                      |
| type         | string        | `'input'`          | 可选值 `input` `select` `switch` `radio-group`……<br />默认 `input`，如果传入 `options` 属性则默认 `select` |
| options      | any[]         |                    |                                                                                                            |
| get          | (v, o) => any |                    | 对组件接收的值进行格式化                                                                                         |
| set          | (v, o) => any |                    | 对组件输出的值进行格式化                                                                                         |
| el           | object        |                    | 输入组件的属性                                                                                             |
| defaultValue | any           |                    | 默认值                                                                                                     |
| is           | string        | `ElFormItemRender` | 渲染的组件，可以是任何组件                                                                                 |
| vIf          | () => boolean | `true`             | 控制组件是否渲染                                                                                           |

> 其他属性与 `el-form-item` 完全一致