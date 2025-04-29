import {
  createVNode,
  inject,
  resolveDynamicComponent
} from "./chunk-6FDXNYMM.js";
import {
  hasOwn,
  isArray,
  isFunction,
  isHTMLTag,
  isPlainObject
} from "./chunk-WOFXIWTL.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@el-lowcode+render@1.0.4_vue@3.5.13_typescript@5.7.3_/node_modules/@el-lowcode/render/index.mjs
for (r = 256, n = []; r--; ) n[r] = (r + 256).toString(16).substring(1);
var r;
var n;
var unFn = (fn, ...args) => typeof fn == "function" ? fn(...args) : fn;
var mapValues = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
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
var Render = createRender({});
export {
  Render,
  createRender,
  Render as default
};
//# sourceMappingURL=@el-lowcode_render.js.map
