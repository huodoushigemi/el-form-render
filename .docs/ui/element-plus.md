# element-plus 表单渲染

支持 [`el-form`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性

## 导入

```js
import Form from 'el-form-render/element-plus'
```

## 基础用法

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['姓名', 'name'] },
    { lp: ['地址', 'address'], required: true },
    { lp: ['年龄', 'age'], type: 'slider' },
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },
    { lp: ['是否', 'is'], type: 'checkbox' },
  ]">
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
import Form from 'el-form-render/element-plus'

const model = ref({})

async function onSubmit() {
  alert('Success')
}
</script>
```

## Results

::: tip
`lp` 是 `label prop` 的缩写

如果不指定 `type` 则默认为 `input`
:::
