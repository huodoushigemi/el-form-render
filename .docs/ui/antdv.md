<a-config-provider :theme="{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }">

# ant-design-vue 表单渲染

支持 [`a-form`](https://www.antdv.com/components/form-cn/#api) 所有属性

## 导入

```js
import Form from 'el-form-render/antdv'
```

## 基础用法

```vue preview
<template>
  <Form :model="model" :label-col="{ span: 2 }" @finish="onSubmit" :items="[
    { lp: ['姓名', 'name'] },
    { lp: ['地址', 'address'], required: true },
    { lp: ['年龄', 'age'], type: 'slider' },
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },
    { lp: ['是否', 'is'], type: 'checkbox' },
  ]">
    <a-form-item :wrapper-col="{ offset: 2 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button html-type="reset">Reset</a-button>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 2 }">
      <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
    </a-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/antdv'

const model = ref({})

function onSubmit() {
  alert('Success')
}
</script>
```

## Results

::: tip
`lp` 是 `label  name` 的缩写

如果不指定 `type` 则默认为 `input`
:::

</a-config-provider>

<style>
.ant-btn + .ant-btn {
  margin-left: 10px;
}
</style>

<component is="style">{{ css }}</component>

<script>
import { getCurrentInstance } from 'vue'
import { useDark } from '@vueuse/core'
import Antd, { theme } from 'ant-design-vue'
import css from 'ant-design-vue/dist/reset.css?raw'

export default {
  data: () => ({
    css,
    theme,
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })
  }),
  beforeCreate() {
    const app = getCurrentInstance().appContext.app
    app.use(Antd)
  }
}
</script>