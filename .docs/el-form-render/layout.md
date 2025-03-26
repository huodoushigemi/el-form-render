# 复杂布局

## 3 列布局

使用 css 的网格布局实现 3 列布局 `grid grid-cols-3 gap-x-8`

```vue preview
<template>
  <Form class="grid grid-cols-3 gap-x-8" :model="model" :items="[
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入', class: 'col-span-2' },
  ]" />
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## 多列布局

```vue preview
<template>
  <Form :model="model" :items="[
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
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## 折叠面板

```vue preview
<template>
  <Form :model="model" :items="[
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
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## Tabs

```vue preview
<template>
  <Form :model="model" :items="[
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
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```