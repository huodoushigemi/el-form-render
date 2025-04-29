<n-config-provider :theme="isDark ? darkTheme : undefined">

# naive-ui 表单渲染

支持 [`n-form`](https://www.naiveui.com/en-US/os-theme/components/form#API) 所有属性

## 导入

```js
import Form from 'el-form-render/naive-ui'
```

## 基础用法

```vue preview
<template>
  <Form :model="model" label-placement="left" label-width="auto" :items="[
    { lp: ['姓名', 'name'] },
    { lp: ['地址', 'address'], rule: { required: true } },
    { lp: ['年龄', 'age'], type: 'slider' },
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },
  ]">
    <n-form-item label=' '>
      <n-button type="primary" @click="$refs.form.validate()">Submit</n-button>
    </n-form-item>

    <n-form-item label=' '>
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </n-form-item>
  </Form>
  
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/naive-ui'

const model = ref({})
</script>
```

## Results

::: tip
`lp` 是 `label  path` 的缩写

如果不指定 `type` 则默认为 `input`
:::

</n-config-provider>

<script>
import { getCurrentInstance } from 'vue'
import { useDark } from '@vueuse/core'
import Naive, { darkTheme } from 'naive-ui'

export default {
  data: () => ({
    darkTheme,
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })
  }),
  beforeCreate() {
    const app = getCurrentInstance().appContext.app
    app.use(Naive)
  }
}
</script>