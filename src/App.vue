<template>
  <Form
    ref="form"
    :model="model"
    label-width="auto"
    :items="[
      // 将 is 属性设置为 div 元素
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [
        { lp: ['文本', 'text'] },
        { lp: ['数字', 'number'], type: 'input-number' },
        { lp: ['开关', 'onoff'], type: 'switch' },
        { lp: ['日期', 'date'], type: 'date-picker' }
      ] },
      // 将 is 属性设置为 分割线组件
      { is: 'el-divider' },
      // 将 is 属性设置为 div 元素
      { is: 'div', class: 'grid grid-cols-2 gap-x-4', children: [
        { lp: ['标签', 'tags'], type: 'input-tag' },
        { lp: ['评分', 'rate'], type: 'rate' },
        { lp: ['滑块', 'number'], type: 'slider' },
        { lp: ['颜色', 'color'], type: 'color-picker' }
      ] },
      // 将 is 属性设置为 分割线组件
      { is: 'el-divider' },
      { lp: ['备注', 'remark'], el: { type: 'textarea', autosize: { minRows: 2, maxRows: 4 } } }
    ]"
    @submit.prevent="$refs.form.validate()"
    @reset="$refs.form.resetFields()"
  >
    <el-form-item label=" ">
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button native-type="reset">重置</el-button>
    </el-form-item>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import Form from 'el-form-render'

const model = ref({})
</script>