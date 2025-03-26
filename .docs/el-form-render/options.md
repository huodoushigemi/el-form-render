# ElFormRender 表单渲染

本章介绍 `options` 属性的使用

---

`options` 属性支持多种类型：
- `Option[]`  
- `() => Option[]`  
- `Promise<Option[]>` 
- `() => Promise<Option[]>` 

```vue preview
<template>
  <Form :model="model" :items="items" label-width="auto" />
  
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const opts = [
  { value: 'man' },
  { value: 'woman' },
]

const model = ref({})

const items = [
  { lp: ['Normal', 'normal'], options: opts },
  { lp: ['Function', 'function'], options: () => opts },
  { lp: ['Promise', 'promise'], options: Promise.resolve(opts) },
  { lp: ['AsynFunction', 'asynFunction'], options: () => Promise.resolve(opts) },
]
</script>
```

```ts
type Option = { label: string, value: string }
```