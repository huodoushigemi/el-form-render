# element-plus 表单渲染

支持 [`el-form`](https://element-plus.org/zh-CN/component/form.html#form-api) 所有属性

## 导入

```js
import Form from 'el-form-render/vuetify'
```

## 基础用法

```vue preview
<template>
  <Form :model="model" label-width="60px" @_submit="onSubmit" :items="[
    { lp: ['姓名', 'name'] },
    { lp: ['地址', 'address'], required: true },
    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },
    { lp: ['年龄', 'age'], type: 'slider' },
    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },
    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },
    { lp: ['是否', 'is'], type: 'checkbox' },
    { lp: ['在职', 'onjob'], type: 'switch', color: 'primary' },
    { lp: ['标签', 'tags'], type: 'input-tag', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },
    { lp: ['标签', 'tags'], type: 'chips', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },
  ]">
    <div class="space-x-3">
      <v-btn color="primary" variant="elevated" type="submit">Submit</v-btn>
      <v-btn variant="tonal" type="reset">Reset</v-btn>
    </div>

    <br />
    <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render/vuetify'

const model = ref({})

function onSubmit() {
  alert('Success')
}
</script>
```

## Results

::: tip
`lp` 是 `label prop` 的缩写

如果不指定 `type` 则默认为 `input`
:::

<component is="style">{{ css }}</component>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />

<script>
import { getCurrentInstance } from 'vue'
import { useDark } from '@vueuse/core'
import css from 'vuetify/lib/styles/main.css?raw'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ components, directives })

export default {
  data: () => ({
    css,
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })
  }),
  beforeCreate() {
    const app = getCurrentInstance().appContext.app
    app.use(vuetify)
  }
}
</script>