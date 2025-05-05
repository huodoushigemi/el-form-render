# 基础使用

支持 [`el-form`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性

## 典型表单

```vue preview
<template>
  <Form
    ref="form"
    :model="model"
    :items="items"
    label-width="80px"
    @submit.prevent="$refs.form.validate().then(onSubmit)"
    @reset="$refs.form.resetFields()"
  >
    <el-form-item>
      <el-button type="primary" native-type="submit">Create</el-button>
      <el-button native-type="reset">Reset</el-button>
    </el-form-item>

    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({})

const items = schema2items(model, {
  type: 'object',
  properties: {
    name: { title: '名称', type: 'string' },
    address: { title: '地址', type: 'string' },
    age: { title: '年龄', type: 'number', minimum: 0 },
    area: { title: '区域', enum: ['Beijing', 'Shanghai'] },
    sex: { title: '性别', enum: ['男', '女'], ui: { type: 'radios' } },
    like: { title: '爱好', enum: ['CODE', 'LOL'], ui: { type: 'checks' } },
    is: { title: '是否', type: 'boolean' },
  },
  required: ['name'],
})

const onSubmit = () => {
  alert('submit!')
}
</script>
```

## String

```vue preview
<template>
  <Form ref="form" :model="model" :items="items" label-width="80px" />
</template>

<script setup>
import { ref } from 'vue'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({})

const items = schema2items(model, {
  type: 'object',
  properties: {
    str1: { title: '输入框', type: 'string' },
    str2: { title: '文本域', type: 'string', ui: { el: { type: 'textarea' } } },
    str3: { title: '枚举', type: 'string', enum: ['enum1', 'enum2'] },
    str4: { title: '枚举2', type: 'string', enum: ['enum1', 'enum2'], ui: { type: 'radios' } },
  }
})
</script>
```

## Number

```vue preview
<template>
  <Form ref="form" :model="model" :items="items" label-width="80px" />
</template>

<script setup>
import { ref } from 'vue'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({})

const opts = { enum: [1, 2], enumName: ['num 1', 'num 2'] }

const items = schema2items(model, {
  type: 'object',
  properties: {
    num1: { title: '数字输入', type: 'number' },
    num2: { title: '滑块', type: 'number', ui: { type: 'slider' } },
    num3: { title: '枚举', type: 'number', ...opts },
    num4: { title: '枚举2', type: 'number', ...opts, ui: { type: 'radios' } },
  }
})
</script>
```

## Boolean

```vue preview
<template>
  <Form ref="form" :model="model" :items="items" label-width="80px" />
</template>

<script setup>
import { ref } from 'vue'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({})

const opts = { enum: [true, false], enumName: ['true', 'true'] }

const items = schema2items(model, {
  type: 'object',
  properties: {
    num1: { title: '开关', type: 'boolean' },
    num2: { title: '复选框', type: 'boolean', ui: { type: 'checkbox' } },
    num3: { title: '枚举', type: 'boolean', ...opts },
    num4: { title: '枚举2', type: 'boolean', ...opts, ui: { type: 'radios' } },
  }
})
</script>
```

## Nested Object

```vue preview
<template>
  <Form ref="form" :model="model" :items="items" label-width="auto">
    <el-form-item>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref, h } from 'vue'
import { ElCard } from 'element-plus'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({})

// 自定义布局容器
const Card = ({ label }, { slots }) =>(
  h(ElCard, { header: label, class: 'mb4', bodyClass: 'grid grid-cols-2 gap-x-4 items-start' }, slots)
)

const items = schema2items(model, {
  type: 'object',
  properties: {
    name: { title: '名称', type: 'string' },
    age: { title: '年龄', type: 'number', minimum: 0 },
    like: { title: '爱好', type: 'array', enum: ['Code', 'Game'], ui: { type: 'checks' } },
    resume: { title: '简历', type: 'object', ui: { is: Card }, properties: {
      year: { title: '工龄', type: 'number', minimum: 0 },
      email: { title: '邮件', type: 'string' },
      job: { title: '职位', type: 'string', enum: ['程序员', '设计师', '产品经理'] },
      skill: { title: '技能', type: 'string' },
      home: { title: '首页', type: 'string' },
      remarks: { title: '备注', type: 'string', ui: { el: { type: 'textarea' } } },
    } }
  }
})
</script>
```

## Array

```vue preview
<template>
  <Form ref="form" :model="model" :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import Form, { schema2items } from 'el-form-render/element-plus'

const model = ref({
  str1_arr: ['str 1', 'str 2', 'str 3'],
  str2_arr: ['str 1', 'str 2', 'str 3'],
})

const opts = { enum: [true, false], enumName: ['true', 'true'] }

const items = schema2items(model, {
  type: 'object',
  properties: {
    str1_arr: { type: 'array', items: { type: 'string' } },
    str2_arr: { type: 'array', items: { type: 'string' }, ui: { type: 'select' } },
  }
})

console.log(items)
</script>
```