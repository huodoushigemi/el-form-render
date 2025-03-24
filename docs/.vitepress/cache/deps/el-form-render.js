import {
  ElForm,
  ElFormItem,
  formItemProps,
  formProps
} from "./chunk-ADPEXV4P.js";
import {
  camelize,
  createVNode,
  defineComponent,
  hasOwn,
  inject,
  isArray,
  isFunction,
  isHTMLTag,
  isPlainObject,
  isPromise,
  isRef,
  isString,
  isVNode,
  mergeProps,
  provide,
  reactive,
  ref,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toRaw,
  toValue,
  unref
} from "./chunk-UHAIXIZE.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/el-form-render@1.0.5_ekkskty4u4q54x3sqvehg3kaaq/node_modules/el-form-render/index.mjs
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
for (r = 256, n = []; r--; ) n[r] = (r + 256).toString(16).substring(1);
var r;
var n;
function withInstall(comp, arr) {
  comp.install = (app) => {
    app.component(comp.name, comp);
    arr == null ? void 0 : arr.forEach((e) => app.component(e.name, e));
  };
  return comp;
}
var numReg = /^\d+$/;
var ks = (obj) => Object.keys(obj);
var unFn = (fn, ...args) => typeof fn == "function" ? fn(...args) : fn;
function get(obj, path) {
  if (typeof path === "function") return path(obj);
  for (const k of path.split(".")) if (!(obj = obj[k])) break;
  return obj;
}
function set(obj, path, val) {
  return path.split(".").reduce((o, k, i, ks2) => {
    var _a;
    return i == ks2.length - 1 ? o[k] = val : (_a = o[k]) != null ? _a : o[k] = numReg.test(ks2[i + 1]) ? [] : {};
  }, obj);
}
function del(obj, path) {
  var _a;
  const arr = path.split(".");
  if (arr.length > 1) (_a = get(obj, arr.slice(0, -1).join("."))) == null ? true : delete _a[arr[arr.length - 1]];
  else delete obj[arr[0]];
}
var mapValues = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
var solveLP = (lp) => isArray(lp) ? lp : lp ? [lp, camelize(lp)] : [];
var label = (item) => item.label || solveLP(item.lp)[0];
var prop = (item) => item.prop || solveLP(item.lp)[1];
var normalizeItem = (item) => ({
  label: label(item),
  prop: prop(item),
  ...item,
  options: solveOptions(item.options)
});
var waekMap = /* @__PURE__ */ new WeakMap();
var solveOptions = (opts) => {
  if (!opts) return void 0;
  if (waekMap.has(opts)) return waekMap.get(opts).value;
  const ret = ref([]);
  waekMap.set(opts, ret);
  const val = unFn(opts);
  if (isPromise(val)) val.then((val2) => ret.value = val2.map(normalizeOpt));
  else ret.value = val.map(normalizeOpt);
  return ret.value;
};
var showOpt = (opt) => {
  var _a;
  return (_a = opt == null ? void 0 : opt.label) != null ? _a : opt == null ? void 0 : opt.value;
};
var normalizeOpt = (opt) => isString(opt) ? { label: opt, value: opt } : isArray(opt) ? { label: opt[0], value: opt[1] } : opt;
var useTransformer = (_model, _prop, opt = {}) => {
  const ret = {
    get() {
      const model = toValue(_model), prop2 = toValue(_prop);
      if (prop2 == null) return;
      let v = get(opt.untrackedGet ? toRaw(model) : model, prop2);
      if (opt.get) v = opt.get(v, model);
      if (opt.defaultValue !== void 0 && (v === void 0 || v === "")) set(model, prop2, v = unFn(opt.defaultValue));
      if (opt.displayValue !== void 0 && (v === void 0 || v === "")) v = unFn(opt.displayValue);
      return v;
    },
    set(v) {
      const model = toValue(_model), prop2 = toValue(_prop);
      if (prop2 == null) return;
      if (opt.silentSet) set(toRaw(model), prop2, opt.silentSet(v, model));
      else if (opt.set) set(model, prop2, opt.set(v, model));
      else set(model, prop2, v);
      if (opt.out) Object.assign(model, opt.out(v, model));
      v = get(model, prop2);
      if (opt.displayValue !== void 0 && v === unFn(opt.displayValue)) del(toRaw(model), prop2);
    },
    get v() {
      return this.get();
    },
    set v(v) {
      this.set(v);
    },
    get value() {
      return this.get();
    },
    set value(v) {
      this.set(v);
    },
    __v_isRef: true
  };
  return ret;
};
var formItemRenderPropsBase = {
  is: null,
  lp: [String, Array],
  type: String,
  defaultValue: null,
  displayValue: null,
  hide: [Boolean, Function],
  get: Function,
  set: Function,
  out: Function,
  options: [Array, Object, Function],
  rules: null,
  el: Object
};
function createRender({ defaultIs, processProps = (props) => props }) {
  const _h = (e, vars) => isPlainObject(e) ? Render2(e, vars) : e;
  const h = (props, vars) => {
    const { is, vIf, children, ...attrs } = props = processProps(props, vars, {
      provide: (state) => vars = { ...vars, ...state }
    });
    return !hasOwn(props, "vIf") || !!unFn(vIf) ? createVNode(
      resolveDynamicComponent(is || defaultIs),
      attrs,
      isArray(children) ? { default: () => children.map((e) => _h(e, vars)) } : isPlainObject(children) ? mapValues(children, (v) => (scope) => Temp(v, vars, scope)) : isFunction(children) ? { default: () => {
        const ret = children();
        return isArray(ret) ? ret.map((e) => _h(e, vars)) : ret;
      } } : (
        // todo
        children != null && !isHTMLTag(is) ? { default: () => children } : children
      )
    ) : null;
  };
  const Temp = (props, vars, scope) => {
    if (props.scope) {
      if (props.scope[0] == "{") {
        vars = { ...vars };
        for (const k of props.scope.slice(1, -1).split(",")) vars[k.trim()] = scope[k.trim()];
      } else {
        vars = { ...vars, [props.scope]: scope };
      }
    }
    const { vIf, children } = processProps(props, vars, {
      provide: (state) => vars = { ...vars, ...state }
    });
    return !hasOwn(props, "vIf") || !!unFn(vIf) ? isArray(children) ? children.map((e) => _h(e, vars)) : isPlainObject(children) ? Render2(children, vars) : children : null;
  };
  function Render2(props, vars = {}) {
    if (props.vFor) {
      const { vFor } = props;
      const { vFor: _vFor } = processProps({ vFor }, vars, {});
      if (isArray(_vFor)) {
        return _vFor[0].map((item, index) => {
          const for_vars = { [_vFor[1] || "item"]: item, [_vFor[1] || "index"]: index };
          return h(props, { ...vars, ...for_vars });
        });
      }
    } else {
      return h(props, vars);
    }
  }
  return (props) => {
    const vars = inject("vars", void 0);
    return Render2(props, vars);
  };
}
var defaultFields = {
  label: "label",
  prop: "prop",
  modelValue: "modelValue",
  rules: "rules",
  inputSlot: "default"
};
function createFormRender({
  Form,
  formName,
  formProps: formProps2,
  FormItem,
  formItemName,
  formItemProps: formItemProps2,
  Input,
  fields
}) {
  const _fields = {
    ...defaultFields,
    ...fields
  };
  const formItemKs = ks(formItemProps2);
  const formRenderContextKey = Symbol();
  const solveLP2 = (lp) => Array.isArray(lp) ? lp : lp ? [lp, camelize(lp)] : [];
  const _label = (item) => item[_fields.label] || solveLP2(item.lp)[0];
  const _prop = (item) => item[_fields.prop] || solveLP2(item.lp)[1];
  const _rules = (item, val) => unFn(item[_fields.rules], val);
  const formItemRenderProps2 = {
    ...formItemProps2,
    ...formItemRenderPropsBase
  };
  const FormItemRender2 = defineComponent({
    props: formItemRenderProps2,
    name: formItemName,
    setup(props, {
      slots
    }) {
      const form = inject(formRenderContextKey);
      const model = new Proxy({}, {
        get: (t, k) => {
          var _a;
          return (_a = form == null ? void 0 : form.model) == null ? void 0 : _a[k];
        },
        set: (t, k, v) => ((form == null ? void 0 : form.model) && (form.model[k] = v), true)
      });
      const transformer = useTransformer(model, () => _prop(props), props);
      return () => {
        var _a;
        const itemProps = {
          ...objectPick(props, formItemKs),
          [_fields.label]: _label(props),
          [_fields.prop]: _prop(props),
          [_fields.rules]: _rules(props, model),
          ".__transformer": transformer
        };
        const elProps = mergeProps({
          [unFn(_fields.modelValue, props)]: transformer.get(),
          [`onUpdate:${unFn(_fields.modelValue, props)}`]: transformer.set
        }, {
          ...props.el || {},
          disabled: unFn((_a = props.el) == null ? void 0 : _a.disabled, model)
        });
        return !unFn(props.hide, model) ? createVNode(FormItem, itemProps, {
          ...slots,
          default: void 0,
          [_fields.inputSlot]: () => {
            var _a2, _b;
            const vnode = renderSlot(slots, "default");
            if (vnode.children[0]) vnode.children[0].props = Object.assign(elProps, vnode.children[0].props);
            else (_b = (_a2 = vnode.children)[0]) != null ? _b : _a2[0] = Input({
              ...props,
              el: elProps
            });
            return vnode;
          }
        }) : void 0;
      };
    }
  });
  const _formRenderProps = {
    model: Object,
    items: Array
  };
  const formRenderProps2 = {
    ...formProps2,
    ..._formRenderProps
  };
  const FormRender2 = defineComponent({
    name: formName,
    props: formRenderProps2,
    setup(props, {
      attrs,
      slots,
      expose
    }) {
      const _FormItemRender = createRender({
        defaultIs: (item) => createVNode(FormItemRender2, item, {
          default: slots[`$${_prop(item)}`]
        })
      });
      const formRef = ref({});
      expose(toReactive(formRef));
      provide(formRenderContextKey, props);
      return () => createVNode(Form, mergeProps({
        "ref": formRef
      }, {
        ...props,
        ...attrs
      }), {
        default: () => {
          var _a, _b;
          return [(_a = props.items) == null ? void 0 : _a.map((item) => createVNode(_FormItemRender, mergeProps(item, {
            "key": _prop(item)
          }), null)), (_b = slots.default) == null ? void 0 : _b.call(slots)];
        }
      });
    }
  });
  return {
    FormRender: withInstall(FormRender2, [FormItemRender2]),
    formRenderProps: formRenderProps2,
    FormItemRender: FormItemRender2,
    formItemRenderProps: formItemRenderProps2
  };
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var {
  FormRender,
  FormItemRender,
  formRenderProps,
  formItemRenderProps
} = createFormRender({
  Form: ElForm,
  formName: "ElFormRender",
  formProps,
  FormItem: ElFormItem,
  formItemName: "ElFormItemRender",
  formItemProps,
  Input: (item) => {
    const {
      type,
      el
    } = item;
    const is = (el == null ? void 0 : el.is) || `el-${type || "input"}`;
    if (!item.options) {
      return createVNode(resolveDynamicComponent(is), el);
    }
    const options = solveOptions(item.options);
    if (type == "select" || is == "ElSelect" || !el.is && !type) {
      let _slot;
      return createVNode(resolveComponent("el-select"), el, _isSlot(_slot = options.map((opt) => createVNode(resolveComponent("el-option"), opt, null))) ? _slot : {
        default: () => [_slot]
      });
    } else if (type == "checkbox-group" || is == "ElCheckboxGroup") {
      let _slot4;
      return createVNode(resolveComponent("el-checkbox-group"), el, _isSlot(_slot4 = options.map((opt) => {
        let _slot2, _slot3;
        return el.type == "button" ? createVNode(resolveComponent("el-checkbox-button"), mergeProps(opt, {
          "label": opt.value
        }), _isSlot(_slot2 = showOpt(opt)) ? _slot2 : {
          default: () => [_slot2]
        }) : createVNode(resolveComponent("el-checkbox"), mergeProps(opt, {
          "label": opt.value
        }), _isSlot(_slot3 = showOpt(opt)) ? _slot3 : {
          default: () => [_slot3]
        });
      })) ? _slot4 : {
        default: () => [_slot4]
      });
    } else if (type == "radio-group" || is == "ElRadioGroup") {
      let _slot7;
      return createVNode(resolveComponent("el-radio-group"), el, _isSlot(_slot7 = options.map((opt) => {
        let _slot5, _slot6;
        return el.type == "button" ? createVNode(resolveComponent("el-radio-button"), mergeProps(opt, {
          "label": opt.value
        }), _isSlot(_slot5 = showOpt(opt)) ? _slot5 : {
          default: () => [_slot5]
        }) : createVNode(resolveComponent("el-radio"), mergeProps(opt, {
          "label": opt.value
        }), _isSlot(_slot6 = showOpt(opt)) ? _slot6 : {
          default: () => [_slot6]
        });
      })) ? _slot7 : {
        default: () => [_slot7]
      });
    } else {
      return createVNode(resolveDynamicComponent(is), {
        options,
        ...el
      });
    }
  },
  fields: {
    modelValue: (item) => ({
      upload: "fileList"
    })[item.is] || "modelValue"
  }
});
var ElFormRender = FormRender;
var ElFormItemRender = FormItemRender;
export {
  ElFormItemRender,
  ElFormRender,
  ElFormRender as default,
  formItemRenderProps,
  formItemRenderPropsBase,
  formRenderProps,
  label,
  normalizeItem,
  prop,
  showOpt,
  solveOptions,
  useTransformer
};
//# sourceMappingURL=el-form-render.js.map
