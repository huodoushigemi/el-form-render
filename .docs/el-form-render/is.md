# ElFormRender 表单渲染

::: info
`el-form-render` 的 `type` 有限, 默认只能渲染普通的表单项, 假如现在要渲染一个上传组件, `type` 就不够用了, 那怎么办呢? 这时候 `el.is` 选项就派上用场了
:::

本章介绍 `el.is` 属性自定义组件的使用

## 接入标准

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

## 关于 `el.is` 属性的更多用法详见 [`<component>`](https://vuejs.org/api/built-in-special-elements.html#component)