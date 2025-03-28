# 组件联动

本章介绍 `vIf` 属性实现组件联动

## 显示 / 隐藏

`vIf` 控制元素是否渲染

```vue preview
<template>
  <Form :model="model" label-width="auto" :items="[
    { lp: 'show', type: 'switch' },
    { lp: 'name', vIf: () => model.show }
  ]"/>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({ show: true })
</script>
```

`vIf` 可以控制任何元素

```vue preview
<template>
  <Form :model="model" label-width="auto" :items="[
    { lp: 'show', type: 'switch' },
    { is: 'p', vIf: () => model.show, children: '😂😂😂😂😂😂😂' },
    { lp: 'name' }
  ]"/>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({ show: true })
</script>
```