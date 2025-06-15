import { defineComponent, provide } from 'vue'
import { createJSF, fromSchema } from '../jsf/jsf'
import { get, set } from 'es-toolkit/compat'

const SubTable = defineComponent({
  props: ['model', 'label', 'prop', 'modelValue', 'schema', 'min', 'max', 'rules'],
  setup(props, { attrs, slots }) {
    provide('form-item', { noLabel: true })

    function add() {
      if (!get(props.model, props.prop)) set(props.model, props.prop, [])
      const val = get(props.model, props.prop)
      val.push({})
    }
    
    return () => {
      const cols = Object.entries(props.schema.items.properties)
      return (
        <el-card header={props.label} style='margin-bottom: 16px'>
          <div style={`display: grid; column-gap: 16px; grid-template-columns: ${' minmax(0,1fr)'.repeat(cols.length)} 40px`}>
            {/* Header */}
            {cols.map(([prop, { title }]) => <div>{title}</div>)}
            <div style='margin-bottom: 16px'>操作</div>
            {(slots.default()?.flatMap((e, i) => [...e.children, <el-button style='margin-rop: 4px' type='danger' size='small' circle onClick={() => props.modelValue.splice(i, 1)}>x</el-button>]))}
          </div>
          <el-button style='display: block; width: 100%' type='primary' plain={true} onClick={add}>添加</el-button>
        </el-card>
      )
    }
  }
})

const SubForm = ({ label, ...props }, { slots }) => (
  <el-card header={label} style='margin-bottom: 16px' {...props}>{slots}</el-card>
)

export const schema2items = createJSF({
  SubForm,
  SubTable
})
