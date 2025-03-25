# el-form-render

## 📖 介绍

el-form-render 基于 element-plus，但不限于 element-plus 组件。在完全继承 el-form 属性的基础上，进行扩展。一些非表单组件或自定义组件，例如图片上传和富文本编辑器，也可以集成，因此，用户可以使用一段 json 来呈现完整的表单。

## 🦄 快速开始

```shell
pnpm add el-form-render
```

```vue
<template>
  <Form
    ref="form"
    :model="model"
    label-width="auto"
    :items="[
      { lp: ['文本', 'text'] },
      { lp: ['数字', 'number'], type: 'input-number' },
      { lp: ['开关', 'onoff'], type: 'switch' },
      { is: 'el-divider', children: '分割线' },
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }
    ]"
    @submit.prevent="$refs.form.validate()"
    @reset="$refs.form.resetFields()"
  >
    <el-form-item label="ㅤ">
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
  
  <code><pre>model: {{ JSON.stringify(model, null, '  ') }}</pre></code>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>
```

## Item 属性

| 属性名       | 类型          | 默认值                | 描述                                                                                                                                          |
| ------------ | ------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| lp           | string[]      |                       | `label` `prop` 的缩写                                                                                                                         |
| type         | string        |                       | 可以是 `input` `select` `switch` `radio-group`……<br />默认 `input`，如果传入 `options` 属性则默认 `select` |
| options      | any[]         |                       |                                                                                                                                               |
| get          | (v, o) => any |                       | 格式化组件的输入值                                                                                                                            |
| set          | (v, o) => any |                       | 格式化组件的输出值                                                                                                                            |
| el           | object        |                       | 输入组件的属性                                                                                                                                |
| defaultValue | any           |                       | 默认值                                                                                                                                        |
| is           | string        | `ElFormItemRender` | 渲染的组件，可以是任何组件                                                                                                                |
| vIf          | () => boolean | `true`                | 控制组件是否渲染                                                                                                                              |

> 其他属性与 `el-form-item` 完全一致