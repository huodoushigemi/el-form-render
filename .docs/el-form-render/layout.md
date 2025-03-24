# 复杂布局

## 3 列布局

使用 css 的网格布局实现 3 列布局 `grid grid-cols-3 gap-x-8`

```vue preview
<template>
  <el-form-render class="grid grid-cols-3 gap-x-8" :model="model" :items="[
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入' },
    { lp: '输入', class: 'col-span-2' },
  ]" />
</template>

<script setup>
import { reactive } from 'vue'
import ElFormRender from 'el-form-render'

const model = reactive({})
</script>
```

## 

```vue preview
<template>
  <el-form-render :model="model" :items="[
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
import { reactive } from 'vue'
import ElFormRender from 'el-form-render'

const model = reactive({})
</script>
```