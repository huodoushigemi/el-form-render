<van-config-provider :theme="isDark ? 'dark' : ''">

# vant 表单渲染

支持 [`van-form`](https://vant-ui.github.io/vant/#/zh-CN/form#api) 所有属性

## 导入

```js
import Form from 'el-form-render/vant'
```

## 基础用法

```vue preview
<template>
  <Form class="max-w[350px] bg-#909090 p1" :model="model" @submit="onFinish" :items="[
    { is: 'van-cell-group', class: 'mt-4!', inset: true, children: [
      { lp: ['开关', 'onoff'], type: 'switch' },
      { lp: ['是否', 'is'], type: 'checkbox', el: { shape: 'square' } },
      { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'], el: { direction: 'horizontal', shape: 'square' } },
      { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'], el: { direction: 'horizontal' } },
      { lp: ['步进器', 'stepper'], type: 'stepper' },
      { lp: ['评分', 'rate'], type: 'rate' },
      { lp: ['滑块', 'slider'], type: 'slider' },
      { lp: ['文本', 'text'], el: { placeholder: '请输入文本' } },
    ] }
  ]">
    <div class="m4">
      <van-button round block type="primary" native-type="submit">Submit</van-button>
    </div>
  </Form>
  
  <br />
  <code block><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { ref } from 'vue'
import Form, { Item } from 'el-form-render/vant'

const model = ref({
  slider: 50,
  rate: 3,
  sex: '男'
})

function onFinish() {
  alert('Success')
}
</script>
```

## Results

::: tip
`lp` 是 `label  name` 的缩写

如果不指定 `type` 则默认为 `field`
:::

</van-config-provider>

<component is="style">{{ css }}</component>

<script>
import { getCurrentInstance } from 'vue'
import { useDark } from '@vueuse/core'
import Vant from 'vant'
import css from 'vant/lib/index.css?raw'

export default {
  data: () => ({
    css,
    isDark: useDark({ storageKey: 'vitepress-theme-appearance' })
  }),
  beforeCreate() {
    const app = getCurrentInstance().appContext.app
    app.use(Vant)
  }
}
</script>