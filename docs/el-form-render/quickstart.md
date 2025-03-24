# 快速开始

本节将介绍如何在项目中使用 `el-form-render`

## 安装

```shell
pnpm add el-form-render
```

## 使用

```vue preview
<template>
  <Form :model="model" :items="[
    { lp: ['文本', 'text'] },
    { lp: ['开关', 'onoff'], type: 'switch' },
  ]" />
  
  <code><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { reactive } from 'vue'
import Form from 'el-form-render'

const model = reactive({})
</script>
```