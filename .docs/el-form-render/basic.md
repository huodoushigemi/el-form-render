# 基础使用

支持 [`el-form`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性

## 基础用法

::: tip
`lp` 是 `label  prop` 的缩写

如果不指定 `type` 则默认为 `input`
:::

## 典型表单

最基础的表单包括各种输入表单项，比如 `input`、`select`、`radio`、`checkbox` 等。

```vue preview
<template>
  <Form :model="model" label-width="120px" @submit.prevent="onSubmit" :items="[
    { lp: ['name', 'name'] },
    { lp: ['Activity zone', 'region'] },
    { lp: ['time', 'date'], type: 'time-picker' },
    { lp: ['Instant delivery', 'delivery'], type: 'switch' },
    { lp: ['Activity type', 'type'], type: 'checkbox-group', options: ['Online activities', 'Promotion activities', 'Offline activities', 'Simple brand exposure'] },
    { lp: ['Resources', 'resource'], type: 'radio-group', options: ['Sponsor', 'Venue'] },
    { lp: ['Activity form', 'desc'], el: { type: 'textarea' } },
  ]">
    <el-form-item>
      <el-button type="primary" native-type="submit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})

const onSubmit = () => {
  alert('submit!')
}
</script>
```

## 表单校验

密码的二次验证。

```vue preview
<template>
  <Form ref="form" :model="model" label-width="120px" @submit.prevent="onSubmit" @reset="form.resetFields()" :items="items">
    <el-form-item>
      <el-button type="primary" native-type="submit">Submit</el-button>
      <el-button native-type="reset">Reset</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const form = ref()
const model = ref({})

const items = [
  {
    lp: ['Password', 'pass'],
    required: true,
    el: { type: 'password' }
  },
  {
    lp: ['Confirm', 'checkPass'],
    required: true,
    rules: { validator: (rule, val, cb) => val != model.value.pass ? cb(`Two inputs don't match!`) : null },
    el: { type: 'password'  }
  },
  {
    lp: ['Age', 'age'],
    rules: { validator: (rule, val, cb) => +val < 18 ? cb('Age must be greater than 18') : null },
    el: { type: 'number' }
  }
]

async function onSubmit() {
  await form.value.validate()
  alert('submit!')
}
</script>
```

## 动态校验

性别为 `男` 时 `介绍` 必填

```vue preview
<template>
  <Form ref="form" :model="model" label-width="120px" :items="[
    { lp: ['姓名', 'name'] },
    { lp: ['性别', 'sex'], type: 'select', options: [{ value: '男' }, { value: '女' }] },
    {
      lp: ['介绍', 'intro'],
      rules: (o) => ({ required: o.sex === '男', message: '必填 ' }),
      el: { type: 'textarea' }
    },
  ]">
    <el-form-item>
      <el-button type="primary" @click="$refs.form.validate()">Submit</el-button>
      <el-button @click="$refs.form.resetFields()">Reset</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## value-format

通过设置 `get` `set` `out` 控制值。

```vue preview
<template>
  <Form :model="model" :items="items" label-width="60" />
  
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})

const items = [
  {
    lp: ['range', 'time'],
    type: 'date-picker',
    el: { type: 'daterange', valueFormat: 'YYYY-MM-DD' },
    get: (v, o) => [o.start, o.end],
    set: (v, o) => null,
    out: (v, o) => ({ start: v?.[0], end: v?.[1] }),
  }
]
</script>
```
