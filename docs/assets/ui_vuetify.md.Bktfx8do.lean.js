import{c as jd,s as Hd}from"./chunks/createFormRender.3NU5S4qc.js";import{F as Wd,V as Yd}from"./chunks/theme.I9pp6g2o.js";import{D as X,F as dn,a2 as dt,s as Mn,a3 as B,aB as $e,k as lt,av as Fl,an as Gd,a0 as Cl,L as Sn,h as y,V as An,p as U,d as Ud,aA as Xt,af as Vl,Y as tt,q as tn,S as Wa,v as it,b6 as st,aq as Pl,ak as Kd,a7 as Xn,aH as Ue,aw as Nn,G as m,aF as br,T as Ut,K as z,ay as Oe,a8 as Rt,a1 as Ei,ap as ma,P as Fn,ah as Tn,aJ as ft,ai as Ft,z as qd,am as Xd,H as Ge,t as $t,aG as Zd,ao as Jd,al as Qd,a as bn,x as nu,aC as tu,Z as Va,aE as eu,C as pt,b as Il,o as Ai,w as Ae,j as O,aL as El,c as au,b0 as bo}from"./chunks/framework.C9-9fwSE.js";function iu(n,e){const t={};for(let a=0;a<e.length;a++){const i=e[a];Object.hasOwn(n,i)&&(t[i]=n[i])}return t}function T(n,e){return t=>Object.keys(n).reduce((a,i)=>{const o=typeof n[i]=="object"&&n[i]!=null&&!Array.isArray(n[i])?n[i]:{type:n[i]};return t&&i in t?a[i]={...o,default:t[i]}:a[i]=o,e&&!a[i].source&&(a[i].source=e),a},{})}const rn=T({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),Cn=typeof window<"u",hr=Cn&&"IntersectionObserver"in window,ru=Cn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),ho=Cn&&"EyeDropper"in window;function yo(n,e,t){ou(n,e),e.set(n,t)}function ou(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ko(n,e,t){return n.set(Al(n,e),t),t}function Tt(n,e){return n.get(Al(n,e))}function Al(n,e,t){if(typeof n=="function"?n===e:n.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function Bl(n,e,t){const a=e.length-1;if(a<0)return n===void 0?t:n;for(let i=0;i<a;i++){if(n==null)return t;n=n[e[i]]}return n==null||n[e[a]]===void 0?t:n[e[a]]}function Jn(n,e){if(n===e)return!0;if(n instanceof Date&&e instanceof Date&&n.getTime()!==e.getTime()||n!==Object(n)||e!==Object(e))return!1;const t=Object.keys(n);return t.length!==Object.keys(e).length?!1:t.every(a=>Jn(n[a],e[a]))}function me(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Bl(n,e.split("."),t))}function jn(n,e,t){if(e===!0)return n===void 0?t:n;if(e==null||typeof e=="boolean")return t;if(n!==Object(n)){if(typeof e!="function")return t;const i=e(n,t);return typeof i>"u"?t:i}if(typeof e=="string")return me(n,e,t);if(Array.isArray(e))return Bl(n,e,t);if(typeof e!="function")return t;const a=e(n,t);return typeof a>"u"?t:a}function Pt(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,a)=>e+a)}function an(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(n==null||n==="")return;const t=Number(n);return isNaN(t)?String(n):isFinite(t)?`${t}${e}`:void 0}function Ke(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function wo(n){let e;return n!==null&&typeof n=="object"&&((e=Object.getPrototypeOf(n))===Object.prototype||e===null)}function yr(n){if(n&&"$el"in n){const e=n.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return n}const So=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Bi=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Dl(n){return Object.keys(n)}function ae(n,e){return e.every(t=>n.hasOwnProperty(t))}function Zt(n,e){const t={};for(const a of e)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}function Di(n,e,t){const a=Object.create(null),i=Object.create(null);for(const r in n)e.some(o=>o instanceof RegExp?o.test(r):o===r)?a[r]=n[r]:i[r]=n[r];return[a,i]}function Rn(n,e){const t={...n};return e.forEach(a=>delete t[a]),t}const _l=/^on[^a-z]/,kr=n=>_l.test(n),lu=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],mu=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function su(n){return n.isComposing&&mu.includes(n.key)}function Jt(n){const[e,t]=Di(n,[_l]),a=Rn(e,lu),[i,r]=Di(t,["class","style","id",/^data-/]);return Object.assign(i,e),Object.assign(r,a),[i,r]}function _n(n){return n==null?[]:Array.isArray(n)?n:[n]}function du(n,e){let t=0;const a=function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];clearTimeout(t),t=setTimeout(()=>n(...r),lt(e))};return a.clear=()=>{clearTimeout(t)},a.immediate=n,a}function Dn(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function Fo(n){const e=n.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0}function Co(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function Vo(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function uu(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let a=0;for(;a<n.length;)t.push(n.substr(a,e)),a+=e;return t}function Po(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(n<e)return`${n} B`;const t=e===1024?["Ki","Mi","Gi"]:["k","M","G"];let a=-1;for(;Math.abs(n)>=e&&a<t.length-1;)n/=e,++a;return`${n.toFixed(1)} ${t[a]}B`}function et(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const a={};for(const i in n)a[i]=n[i];for(const i in e){const r=n[i],o=e[i];if(wo(r)&&wo(o)){a[i]=et(r,o,t);continue}if(t&&Array.isArray(r)&&Array.isArray(o)){a[i]=t(r,o);continue}a[i]=o}return a}function Tl(n){return n.map(e=>e.type===dn?Tl(e.children):e).flat()}function re(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(re.cache.has(n))return re.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return re.cache.set(n,e),e}re.cache=new Map;function Ie(n,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(t=>Ie(n,t)).flat(1);if(e.suspense)return Ie(n,e.ssContent);if(Array.isArray(e.children))return e.children.map(t=>Ie(n,t)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(n))return[e.component];if(e.component.subTree)return Ie(n,e.component.subTree).flat(1)}return[]}var Fe=new WeakMap,te=new WeakMap;class Ml{constructor(e){yo(this,Fe,[]),yo(this,te,0),this.size=e}get isFull(){return Tt(Fe,this).length===this.size}push(e){Tt(Fe,this)[Tt(te,this)]=e,ko(te,this,(Tt(te,this)+1)%this.size)}values(){return Tt(Fe,this).slice(Tt(te,this)).concat(Tt(Fe,this).slice(0,Tt(te,this)))}clear(){Tt(Fe,this).length=0,ko(te,this,0)}}function pu(n){return"touches"in n?{clientX:n.touches[0].clientX,clientY:n.touches[0].clientY}:{clientX:n.clientX,clientY:n.clientY}}function wr(n){const e=dt({});Mn(()=>{const a=n();for(const i in a)e[i]=a[i]},{flush:"sync"});const t={};for(const a in e)t[a]=B(()=>e[a]);return t}function Ma(n,e){return n.includes(e)}function Rl(n){return n[2].toLowerCase()+n.slice(3)}const qn=()=>[Function,Array];function Io(n,e){return e="on"+$e(e),!!(n[e]||n[`${e}Once`]||n[`${e}Capture`]||n[`${e}OnceCapture`]||n[`${e}CaptureOnce`])}function Ya(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];if(Array.isArray(n))for(const i of n)i(...t);else typeof n=="function"&&n(...t)}function qe(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(a=>`${a}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...n.querySelectorAll(t)]}function $l(n,e,t){let a,i=n.indexOf(document.activeElement);const r=e==="next"?1:-1;do i+=r,a=n[i];while((!a||a.offsetParent==null||!((t==null?void 0:t(a))??!0))&&i<n.length&&i>=0);return a}function oe(n,e){var a,i,r,o;const t=qe(n);if(!e)(n===document.activeElement||!n.contains(document.activeElement))&&((a=t[0])==null||a.focus());else if(e==="first")(i=t[0])==null||i.focus();else if(e==="last")(r=t.at(-1))==null||r.focus();else if(typeof e=="number")(o=t[e])==null||o.focus();else{const l=$l(t,e);l?l.focus():oe(n,e==="next"?"first":"last")}}function Pa(n){return n==null||typeof n=="string"&&n.trim()===""}function Ol(){}function Be(n,e){if(!(Cn&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!n&&n.matches(e)}catch{return null}}function Ga(n){return n.some(e=>Fl(e)?e.type===Gd?!1:e.type!==dn||Ga(e.children):!0)?n:null}function cu(n,e){if(!Cn||n===0)return e(),()=>{};const t=window.setTimeout(e,n);return()=>window.clearTimeout(t)}function gu(n,e){const t=n.clientX,a=n.clientY,i=e.getBoundingClientRect(),r=i.left,o=i.top,l=i.right,s=i.bottom;return t>=r&&t<=l&&a>=o&&a<=s}function Ra(){const n=X(),e=t=>{n.value=t};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>n.value,set:t=>n.value=t}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>yr(n.value)}),e}function De(n){const e=n.key.length===1,t=!n.ctrlKey&&!n.metaKey&&!n.altKey;return e&&t}function Ll(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"||typeof n=="bigint"}const zl=["top","bottom"],fu=["start","end","left","right"];function _i(n,e){let[t,a]=n.split(" ");return a||(a=Ma(zl,t)?"start":Ma(fu,t)?"top":"center"),{side:Ti(t,e),align:Ti(a,e)}}function Ti(n,e){return n==="start"?e?"right":"left":n==="end"?e?"left":"right":n}function vi(n){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[n.side],align:n.align}}function bi(n){return{side:n.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[n.align]}}function Eo(n){return{side:n.align,align:n.side}}function Ao(n){return Ma(zl,n.side)?"y":"x"}class Gt{constructor(e){let{x:t,y:a,width:i,height:r}=e;this.x=t,this.y=a,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Bo(n,e){return{x:{before:Math.max(0,e.left-n.left),after:Math.max(0,n.right-e.right)},y:{before:Math.max(0,e.top-n.top),after:Math.max(0,n.bottom-e.bottom)}}}function Nl(n){return Array.isArray(n)?new Gt({x:n[0],y:n[1],width:0,height:0}):n.getBoundingClientRect()}function Sr(n){const e=n.getBoundingClientRect(),t=getComputedStyle(n),a=t.transform;if(a){let i,r,o,l,s;if(a.startsWith("matrix3d("))i=a.slice(9,-1).split(/, /),r=Number(i[0]),o=Number(i[5]),l=Number(i[12]),s=Number(i[13]);else if(a.startsWith("matrix("))i=a.slice(7,-1).split(/, /),r=Number(i[0]),o=Number(i[3]),l=Number(i[4]),s=Number(i[5]);else return new Gt(e);const u=t.transformOrigin,d=e.x-l-(1-r)*parseFloat(u),p=e.y-s-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),f=r?e.width/r:n.offsetWidth+1,c=o?e.height/o:n.offsetHeight+1;return new Gt({x:d,y:p,width:f,height:c})}else return new Gt(e)}function ie(n,e,t){if(typeof n.animate>"u")return{finished:Promise.resolve()};let a;try{a=n.animate(e,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(i=>{a.onfinish=()=>{i(a)}})),a}const Da=new WeakMap;function xu(n,e){Object.keys(e).forEach(t=>{if(kr(t)){const a=Rl(t),i=Da.get(n);if(e[t]==null)i==null||i.forEach(r=>{const[o,l]=r;o===a&&(n.removeEventListener(a,l),i.delete(r))});else if(!i||![...i].some(r=>r[0]===a&&r[1]===e[t])){n.addEventListener(a,e[t]);const r=i||new Set;r.add([a,e[t]]),Da.has(n)||Da.set(n,r)}}else e[t]==null?n.removeAttribute(t):n.setAttribute(t,e[t])})}function vu(n,e){Object.keys(e).forEach(t=>{if(kr(t)){const a=Rl(t),i=Da.get(n);i==null||i.forEach(r=>{const[o,l]=r;o===a&&(n.removeEventListener(a,l),i.delete(r))})}else n.removeAttribute(t)})}const Ce=2.4,Do=.2126729,_o=.7151522,To=.072175,bu=.55,hu=.58,yu=.57,ku=.62,Ia=.03,Mo=1.45,wu=5e-4,Su=1.25,Fu=1.25,Cu=.078,Ro=12.82051282051282,Ea=.06,Vu=.001;function $o(n,e){const t=(n.r/255)**Ce,a=(n.g/255)**Ce,i=(n.b/255)**Ce,r=(e.r/255)**Ce,o=(e.g/255)**Ce,l=(e.b/255)**Ce;let s=t*Do+a*_o+i*To,u=r*Do+o*_o+l*To;if(s<=Ia&&(s+=(Ia-s)**Mo),u<=Ia&&(u+=(Ia-u)**Mo),Math.abs(u-s)<wu)return 0;let d;if(u>s){const p=(u**bu-s**hu)*Su;d=p<Vu?0:p<Cu?p-p*Ro*Ea:p-Ea}else{const p=(u**ku-s**yu)*Fu;d=p>-.001?0:p>-.078?p-p*Ro*Ea:p+Ea}return d*100}function Pu(n,e){e=Array.isArray(e)?e.slice(0,-1).map(t=>`'${t}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const $a=.20689655172413793,Iu=n=>n>$a**3?Math.cbrt(n):n/(3*$a**2)+4/29,Eu=n=>n>$a?n**3:3*$a**2*(n-4/29);function jl(n){const e=Iu,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function Hl(n){const e=Eu,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const Au=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Bu=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,Du=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],_u=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function Wl(n){const e=Array(3),t=Bu,a=Au;for(let i=0;i<3;++i)e[i]=Math.round(Dn(t(a[i][0]*n[0]+a[i][1]*n[1]+a[i][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Fr(n){let{r:e,g:t,b:a}=n;const i=[0,0,0],r=_u,o=Du;e=r(e/255),t=r(t/255),a=r(a/255);for(let l=0;l<3;++l)i[l]=o[l][0]*e+o[l][1]*t+o[l][2]*a;return i}function Mi(n){return!!n&&/^(#|var\(--|(rgb|hsl)a?\()/.test(n)}function Tu(n){return Mi(n)&&!/^((rgb|hsl)a?\()?var\(--/.test(n)}const Oo=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Mu={rgb:(n,e,t,a)=>({r:n,g:e,b:t,a}),rgba:(n,e,t,a)=>({r:n,g:e,b:t,a}),hsl:(n,e,t,a)=>Lo({h:n,s:e,l:t,a}),hsla:(n,e,t,a)=>Lo({h:n,s:e,l:t,a}),hsv:(n,e,t,a)=>It({h:n,s:e,v:t,a}),hsva:(n,e,t,a)=>It({h:n,s:e,v:t,a})};function gt(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&Oo.test(n)){const{groups:e}=n.match(Oo),{fn:t,values:a}=e,i=a.split(/,\s*|\s*\/\s*|\s+/).map((r,o)=>r.endsWith("%")||o>0&&o<3&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(r)/100:parseFloat(r));return Mu[t](...i)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),Kl(e)}else if(typeof n=="object"){if(ae(n,["r","g","b"]))return n;if(ae(n,["h","s","l"]))return It(Cr(n));if(ae(n,["h","s","v"]))return It(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function It(n){const{h:e,s:t,v:a,a:i}=n,r=l=>{const s=(l+e/60)%6;return a-a*t*Math.max(Math.min(s,4-s,1),0)},o=[r(5),r(3),r(1)].map(l=>Math.round(l*255));return{r:o[0],g:o[1],b:o[2],a:i}}function Lo(n){return It(Cr(n))}function sa(n){if(!n)return{h:0,s:1,v:1,a:1};const e=n.r/255,t=n.g/255,a=n.b/255,i=Math.max(e,t,a),r=Math.min(e,t,a);let o=0;i!==r&&(i===e?o=60*(0+(t-a)/(i-r)):i===t?o=60*(2+(a-e)/(i-r)):i===a&&(o=60*(4+(e-t)/(i-r)))),o<0&&(o=o+360);const l=i===0?0:(i-r)/i,s=[o,l,i];return{h:s[0],s:s[1],v:s[2],a:n.a}}function Ri(n){const{h:e,s:t,v:a,a:i}=n,r=a-a*t/2,o=r===1||r===0?0:(a-r)/Math.min(r,1-r);return{h:e,s:o,l:r,a:i}}function Cr(n){const{h:e,s:t,l:a,a:i}=n,r=a+t*Math.min(a,1-a),o=r===0?0:2-2*a/r;return{h:e,s:o,v:r,a:i}}function Yl(n){let{r:e,g:t,b:a,a:i}=n;return i===void 0?`rgb(${e}, ${t}, ${a})`:`rgba(${e}, ${t}, ${a}, ${i})`}function Gl(n){return Yl(It(n))}function Aa(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Ul(n){let{r:e,g:t,b:a,a:i}=n;return`#${[Aa(e),Aa(t),Aa(a),i!==void 0?Aa(Math.round(i*255)):""].join("")}`}function Kl(n){n=$u(n);let[e,t,a,i]=uu(n,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:t,b:a,a:i}}function Ru(n){const e=Kl(n);return sa(e)}function ql(n){return Ul(It(n))}function $u(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=Co(Co(n,6),8,"F")),n}function Ou(n,e){const t=jl(Fr(n));return t[0]=t[0]+e*10,Wl(Hl(t))}function Lu(n,e){const t=jl(Fr(n));return t[0]=t[0]-e*10,Wl(Hl(t))}function $i(n){const e=gt(n);return Fr(e)[1]}function zu(n,e){const t=$i(n),a=$i(e),i=Math.max(t,a),r=Math.min(t,a);return(i+.05)/(r+.05)}function Xl(n){const e=Math.abs($o(gt(0),gt(n)));return Math.abs($o(gt(16777215),gt(n)))>Math.min(e,50)?"#fff":"#000"}function zn(n,e){const t=Cl();if(!t)throw new Error(`[Vuetify] ${n} must be called from inside a setup function`);return t}function At(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=zn(n).type;return re((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}function Nu(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zn("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}const _e=Symbol.for("vuetify:defaults");function ju(n){return U(n)}function Vr(){const n=Sn(_e);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function $n(n,e){const t=Vr(),a=U(n),i=y(()=>{if(lt(e==null?void 0:e.disabled))return t.value;const o=lt(e==null?void 0:e.scoped),l=lt(e==null?void 0:e.reset),s=lt(e==null?void 0:e.root);if(a.value==null&&!(o||l||s))return t.value;let u=et(a.value,{prev:t.value});if(o)return u;if(l||s){const d=Number(l||1/0);for(let p=0;p<=d&&!(!u||!("prev"in u));p++)u=u.prev;return u&&typeof s=="string"&&s in u&&(u=et(et(u,{prev:u}),u[s])),u}return u.prev?et(u.prev,u):u});return An(_e,i),i}function Hu(n,e){return n.props&&(typeof n.props[e]<"u"||typeof n.props[re(e)]<"u")}function Wu(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Vr();const a=zn("useDefaults");if(e=e??a.type.name??a.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const i=y(()=>{var s;return(s=t.value)==null?void 0:s[n._as??e]}),r=new Proxy(n,{get(s,u){var c,g,h,x;const d=Reflect.get(s,u);if(u==="class"||u==="style")return[(c=i.value)==null?void 0:c[u],d].filter(v=>v!=null);if(Hu(a.vnode,u))return d;const p=(g=i.value)==null?void 0:g[u];if(p!==void 0)return p;const f=(x=(h=t.value)==null?void 0:h.global)==null?void 0:x[u];return f!==void 0?f:d}}),o=X();Mn(()=>{if(i.value){const s=Object.entries(i.value).filter(u=>{let[d]=u;return d.startsWith(d[0].toUpperCase())});o.value=s.length?Object.fromEntries(s):void 0}else o.value=void 0});function l(){const s=Nu(_e,a);An(_e,y(()=>o.value?et((s==null?void 0:s.value)??{},o.value):s==null?void 0:s.value))}return{props:r,provideSubDefaults:l}}function xt(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=T(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(a){return Zt(a,e)},n.props._as=String,n.setup=function(a,i){const r=Vr();if(!r.value)return n._setup(a,i);const{props:o,provideSubDefaults:l}=Wu(a,a._as??n.name,r),s=n._setup(o,i);return l(),s}}return n}function L(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?xt:Ud)(e)}function Yu(n,e){return e.props=n,e}function Bt(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return L()({name:t??$e(Vl(n.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...rn()},setup(a,i){let{slots:r}=i;return()=>{var o;return Xt(a.tag,{class:[n,a.class],style:a.style},(o=r.default)==null?void 0:o.call(r))}}})}function Zl(n){if(typeof n.getRootNode!="function"){for(;n.parentNode;)n=n.parentNode;return n!==document?null:document}const e=n.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const Xe="cubic-bezier(0.4, 0, 0.2, 1)",Gu="cubic-bezier(0.0, 0, 0.2, 1)",Uu="cubic-bezier(0.4, 0, 1, 1)";function zo(n,e,t){return Object.keys(n).filter(a=>kr(a)&&a.endsWith(e)).reduce((a,i)=>(a[i.slice(0,-e.length)]=r=>n[i](r,t(r)),a),{})}function Pr(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;n;){if(e?Ku(n):Ir(n))return n;n=n.parentElement}return document.scrollingElement}function Oa(n,e){const t=[];if(e&&n&&!e.contains(n))return t;for(;n&&(Ir(n)&&t.push(n),n!==e);)n=n.parentElement;return t}function Ir(n){if(!n||n.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(n);return e.overflowY==="scroll"||e.overflowY==="auto"&&n.scrollHeight>n.clientHeight}function Ku(n){if(!n||n.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(n);return["scroll","auto"].includes(e.overflowY)}function qu(n){for(;n;){if(window.getComputedStyle(n).position==="fixed")return!0;n=n.offsetParent}return!1}function N(n){const e=zn("useRender");e.render=n}function St(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=Ra(),a=U();if(Cn){const i=new ResizeObserver(r=>{n==null||n(r,i),r.length&&(e==="content"?a.value=r[0].contentRect:a.value=r[0].target.getBoundingClientRect())});tt(()=>{i.disconnect()}),tn(()=>t.el,(r,o)=>{o&&(i.unobserve(o),a.value=void 0),r&&i.observe(r)},{flush:"post"})}return{resizeRef:t,contentRect:Wa(a)}}const Ze=Symbol.for("vuetify:layout"),Jl=Symbol.for("vuetify:layout-item"),No=1e3,Ql=T({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ge=T({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function nm(){const n=Sn(Ze);if(!n)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:n.getLayoutItem,mainRect:n.mainRect,mainStyles:n.mainStyles}}function fe(n){const e=Sn(Ze);if(!e)throw new Error("[Vuetify] Could not find injected layout");const t=n.id??`layout-item-${st()}`,a=zn("useLayoutItem");An(Jl,{id:t});const i=X(!1);Pl(()=>i.value=!0),Kd(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:o}=e.register(a,{...n,active:y(()=>i.value?!1:n.active.value),id:t});return tt(()=>e.unregister(t)),{layoutItemStyles:r,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const Xu=(n,e,t,a)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of n){const l=e.get(o),s=t.get(o),u=a.get(o);if(!l||!s||!u)continue;const d={...i,[l.value]:parseInt(i[l.value],10)+(u.value?parseInt(s.value,10):0)};r.push({id:o,layer:d}),i=d}return r};function tm(n){const e=Sn(Ze,null),t=y(()=>e?e.rootZIndex.value-100:No),a=U([]),i=dt(new Map),r=dt(new Map),o=dt(new Map),l=dt(new Map),s=dt(new Map),{resizeRef:u,contentRect:d}=St(),p=y(()=>{const E=new Map,A=n.overlaps??[];for(const w of A.filter(F=>F.includes(":"))){const[F,_]=w.split(":");if(!a.value.includes(F)||!a.value.includes(_))continue;const V=i.get(F),P=i.get(_),I=r.get(F),M=r.get(_);!V||!P||!I||!M||(E.set(_,{position:V.value,amount:parseInt(I.value,10)}),E.set(F,{position:P.value,amount:-parseInt(M.value,10)}))}return E}),f=y(()=>{const E=[...new Set([...o.values()].map(w=>w.value))].sort((w,F)=>w-F),A=[];for(const w of E){const F=a.value.filter(_=>{var V;return((V=o.get(_))==null?void 0:V.value)===w});A.push(...F)}return Xu(A,i,r,l)}),c=y(()=>!Array.from(s.values()).some(E=>E.value)),g=y(()=>f.value[f.value.length-1].layer),h=B(()=>({"--v-layout-left":an(g.value.left),"--v-layout-right":an(g.value.right),"--v-layout-top":an(g.value.top),"--v-layout-bottom":an(g.value.bottom),...c.value?void 0:{transition:"none"}})),x=y(()=>f.value.slice(1).map((E,A)=>{let{id:w}=E;const{layer:F}=f.value[A],_=r.get(w),V=i.get(w);return{id:w,...F,size:Number(_.value),position:V.value}})),v=E=>x.value.find(A=>A.id===E),b=zn("createLayout"),k=X(!1);it(()=>{k.value=!0}),An(Ze,{register:(E,A)=>{let{id:w,order:F,position:_,layoutSize:V,elementSize:P,active:I,disableTransitions:M,absolute:j}=A;o.set(w,F),i.set(w,_),r.set(w,V),l.set(w,I),M&&s.set(w,M);const nn=Ie(Jl,b==null?void 0:b.vnode).indexOf(E);nn>-1?a.value.splice(nn,0,w):a.value.push(w);const Q=y(()=>x.value.findIndex($=>$.id===w)),G=y(()=>t.value+f.value.length*2-Q.value*2),R=y(()=>{const $=_.value==="left"||_.value==="right",K=_.value==="right",J=_.value==="bottom",ln=P.value??V.value,Z=ln===0?"%":"px",q={[_.value]:0,zIndex:G.value,transform:`translate${$?"X":"Y"}(${(I.value?0:-(ln===0?100:ln))*(K||J?-1:1)}${Z})`,position:j.value||t.value!==No?"absolute":"fixed",...c.value?void 0:{transition:"none"}};if(!k.value)return q;const mn=x.value[Q.value];if(!mn)throw new Error(`[Vuetify] Could not find layout item "${w}"`);const fn=p.value.get(w);return fn&&(mn[fn.position]+=fn.amount),{...q,height:$?`calc(100% - ${mn.top}px - ${mn.bottom}px)`:P.value?`${P.value}px`:void 0,left:K?void 0:`${mn.left}px`,right:K?`${mn.right}px`:void 0,top:_.value!=="bottom"?`${mn.top}px`:void 0,bottom:_.value!=="top"?`${mn.bottom}px`:void 0,width:$?P.value?`${P.value}px`:void 0:`calc(100% - ${mn.left}px - ${mn.right}px)`}}),D=y(()=>({zIndex:G.value-1}));return{layoutItemStyles:R,layoutItemScrimStyles:D,zIndex:G}},unregister:E=>{o.delete(E),i.delete(E),r.delete(E),l.delete(E),s.delete(E),a.value=a.value.filter(A=>A!==E)},mainRect:g,mainStyles:h,getLayoutItem:v,items:x,layoutRect:d,rootZIndex:t});const C=B(()=>["v-layout",{"v-layout--full-height":n.fullHeight}]),S=B(()=>({zIndex:e?t.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:C,layoutStyles:S,getLayoutItem:v,items:x,layoutRect:d,layoutRef:u}}function mt(n,e){let t;function a(){t=Ue(),t.run(()=>e.length?e(()=>{t==null||t.stop(),a()}):e())}tn(n,i=>{i&&!t?a():i||(t==null||t.stop(),t=void 0)},{immediate:!0}),Xn(()=>{t==null||t.stop()})}function sn(n,e,t){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:p=>p,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:p=>p;const r=zn("useProxiedModel"),o=U(n[e]!==void 0?n[e]:t),l=re(e),u=l!==e?y(()=>{var p,f,c,g;return n[e],!!(((p=r.vnode.props)!=null&&p.hasOwnProperty(e)||(f=r.vnode.props)!=null&&f.hasOwnProperty(l))&&((c=r.vnode.props)!=null&&c.hasOwnProperty(`onUpdate:${e}`)||(g=r.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${l}`)))}):y(()=>{var p,f;return n[e],!!((p=r.vnode.props)!=null&&p.hasOwnProperty(e)&&((f=r.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});mt(()=>!u.value,()=>{tn(()=>n[e],p=>{o.value=p})});const d=y({get(){const p=n[e];return a(u.value?p:o.value)},set(p){const f=i(p),c=Nn(u.value?n[e]:o.value);c===f||a(c)===p||(o.value=f,r==null||r.emit(`update:${e}`,f))}});return Object.defineProperty(d,"externalValue",{get:()=>u.value?n[e]:o.value}),d}const Zu={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"},rules:{required:"This field is required",email:"Please enter a valid email",number:"This field can only contain numbers",integer:"This field can only contain integer values",capital:"This field can only contain uppercase letters",maxLength:"You must enter a maximum of {0} characters",minLength:"You must enter a minimum of {0} characters",strictLength:"The length of the entered field is invalid",exclude:"The {0} character is not allowed",notEmpty:"Please choose at least one value",pattern:"Invalid format"}},jo="$vuetify.",Ho=(n,e)=>n.replace(/\{(\d+)\}/g,(t,a)=>String(e[Number(a)])),em=(n,e,t)=>function(a){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!a.startsWith(jo))return Ho(a,r);const l=a.replace(jo,""),s=n.value&&t.value[n.value],u=e.value&&t.value[e.value];let d=me(s,l,null);return d||(`${a}${n.value}`,d=me(u,l,null)),d||(d=a),typeof d!="string"&&(d=a),Ho(d,r)};function am(n,e){return(t,a)=>new Intl.NumberFormat([n.value,e.value],a).format(t)}function hi(n,e,t){const a=sn(n,e,n[e]??t.value);return a.value=n[e]??t.value,tn(t,i=>{n[e]==null&&(a.value=t.value)}),a}function im(n){return e=>{const t=hi(e,"locale",n.current),a=hi(e,"fallback",n.fallback),i=hi(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:a,messages:i,t:em(t,a,i),n:am(t,a),provide:im({current:t,fallback:a,messages:i})}}}function Ju(n){const e=X((n==null?void 0:n.locale)??"en"),t=X((n==null?void 0:n.fallback)??"en"),a=U({en:Zu,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:a,t:em(e,t,a),n:am(e,t),provide:im({current:e,fallback:t,messages:a})}}const Te=Symbol.for("vuetify:locale");function Qu(n){return n.name!=null}function np(n){const e=n!=null&&n.adapter&&Qu(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:Ju(n),t=ap(e,n);return{...e,...t}}function On(){const n=Sn(Te);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");return n}function tp(n){const e=Sn(Te);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");const t=e.provide(n),a=ip(t,e.rtl,n),i={...t,...a};return An(Te,i),i}function ep(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function ap(n,e){const t=U((e==null?void 0:e.rtl)??ep()),a=y(()=>t.value[n.current.value]??!1);return{isRtl:a,rtl:t,rtlClasses:B(()=>`v-locale--is-${a.value?"rtl":"ltr"}`)}}function ip(n,e,t){const a=y(()=>t.rtl??e.value[n.current.value]??!1);return{isRtl:a,rtl:e,rtlClasses:B(()=>`v-locale--is-${a.value?"rtl":"ltr"}`)}}function Hn(){const n=Sn(Te);if(!n)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:n.isRtl,rtlClasses:n.rtlClasses}}const Je=Symbol.for("vuetify:theme"),kn=T({theme:String},"theme");function Wo(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#c8c8c8","on-surface-variant":"#000000",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}},stylesheetId:"vuetify-theme-stylesheet"}}function rp(){var a,i;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wo();const e=Wo();if(!n)return{...e,isDisabled:!0};const t={};for(const[r,o]of Object.entries(n.themes??{})){const l=o.dark||r==="dark"?(a=e.themes)==null?void 0:a.dark:(i=e.themes)==null?void 0:i.light;t[r]=et(l,o)}return et(e,{...n,themes:t})}function ee(n,e,t,a){n.push(`${sp(e,a)} {
`,...t.map(i=>`  ${i};
`),`}
`)}function Yo(n){const e=n.dark?2:1,t=n.dark?1:2,a=[];for(const[i,r]of Object.entries(n.colors)){const o=gt(r);a.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||a.push(`--v-theme-${i}-overlay-multiplier: ${$i(r)>.18?e:t}`)}for(const[i,r]of Object.entries(n.variables)){const o=typeof r=="string"&&r.startsWith("#")?gt(r):void 0,l=o?`${o.r}, ${o.g}, ${o.b}`:void 0;a.push(`--v-${i}: ${l??r}`)}return a}function op(n,e,t){const a={};if(t)for(const i of["lighten","darken"]){const r=i==="lighten"?Ou:Lu;for(const o of Pt(t[i],1))a[`${n}-${i}-${o}`]=Ul(r(gt(e),o))}return a}function lp(n,e){if(!e)return{};let t={};for(const a of e.colors){const i=n[a];i&&(t={...t,...op(a,i,e)})}return t}function mp(n){const e={};for(const t of Object.keys(n)){if(t.startsWith("on-")||n[`on-${t}`])continue;const a=`on-${t}`,i=gt(n[t]);e[a]=Xl(i)}return e}function sp(n,e){if(!e)return n;const t=`:where(${e})`;return n===":root"?t:`${t} ${n}`}function dp(n,e){n&&(n.innerHTML=e)}function up(n,e){if(!Cn)return null;let t=document.getElementById(n);return t||(t=document.createElement("style"),t.id=n,t.type="text/css",e&&t.setAttribute("nonce",e),document.head.appendChild(t)),t}function pp(n){const e=rp(n),t=X(e.defaultTheme),a=U(e.themes),i=y(()=>{const u={};for(const[d,p]of Object.entries(a.value)){const f={...p.colors,...lp(p.colors,e.variations)};u[d]={...p,colors:{...f,...mp(f)}}}return u}),r=B(()=>i.value[t.value]),o=y(()=>{var c;const u=[];(c=r.value)!=null&&c.dark&&ee(u,":root",["color-scheme: dark"],e.scope),ee(u,":root",Yo(r.value),e.scope);for(const[g,h]of Object.entries(i.value))ee(u,`.v-theme--${g}`,[`color-scheme: ${h.dark?"dark":"normal"}`,...Yo(h)],e.scope);const d=[],p=[],f=new Set(Object.values(i.value).flatMap(g=>Object.keys(g.colors)));for(const g of f)g.startsWith("on-")?ee(p,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`],e.scope):(ee(d,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`],e.scope),ee(p,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`],e.scope),ee(p,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`],e.scope));return u.push(...d,...p),u.map((g,h)=>h===0?g:`    ${g}`).join("")});function l(u){if(e.isDisabled)return;const d=u._context.provides.usehead;if(d){let p=function(){return{style:[{textContent:o.value,id:e.stylesheetId,nonce:e.cspNonce||!1}]}};if(d.push){const f=d.push(p);Cn&&tn(o,()=>{f.patch(p)})}else Cn?(d.addHeadObjs(B(p)),Mn(()=>d.updateDOM())):d.addHeadObjs(p())}else{let p=function(){dp(up(e.stylesheetId,e.cspNonce),o.value)};Cn?tn(o,p,{immediate:!0}):p()}}const s=B(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:a,current:r,computedThemes:i,themeClasses:s,styles:o,global:{name:t,current:r}}}function Pn(n){zn("provideTheme");const e=Sn(Je,null);if(!e)throw new Error("Could not find Vuetify theme injection");const t=B(()=>n.theme??e.name.value),a=B(()=>e.themes.value[t.value]),i=B(()=>e.isDisabled?void 0:`v-theme--${t.value}`),r={...e,name:t,current:a,themeClasses:i};return An(Je,r),r}function Er(){zn("useTheme");const n=Sn(Je,null);if(!n)throw new Error("Could not find Vuetify theme injection");return n}const cp=T({...rn(),...Ql({fullHeight:!0}),...kn()},"VApp"),gp=L()({name:"VApp",props:cp(),setup(n,e){let{slots:t}=e;const a=Pn(n),{layoutClasses:i,getLayoutItem:r,items:o,layoutRef:l}=tm(n),{rtlClasses:s}=Hn();return N(()=>{var u;return m("div",{ref:l,class:["v-application",a.themeClasses.value,i.value,s.value,n.class],style:[n.style]},[m("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:r,items:o,theme:a}}}),xn=T({tag:{type:[String,Object,Function],default:"div"}},"tag"),rm=T({text:String,...rn(),...xn()},"VToolbarTitle"),Ar=L()({name:"VToolbarTitle",props:rm(),setup(n,e){let{slots:t}=e;return N(()=>{const a=!!(t.default||t.text||n.text);return m(n.tag,{class:["v-toolbar-title",n.class],style:n.style},{default:()=>{var i;return[a&&m("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():n.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),fp=T({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function vt(n,e,t){return L()({name:n,props:fp({mode:t,origin:e}),setup(a,i){let{slots:r}=i;const o={onBeforeEnter(l){a.origin&&(l.style.transformOrigin=a.origin)},onLeave(l){if(a.leaveAbsolute){const{offsetTop:s,offsetLeft:u,offsetWidth:d,offsetHeight:p}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${s}px`,l.style.left=`${u}px`,l.style.width=`${d}px`,l.style.height=`${p}px`}a.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(a.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:s,top:u,left:d,width:p,height:f}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=s||"",l.style.top=u||"",l.style.left=d||"",l.style.width=p||"",l.style.height=f||""}}};return()=>{const l=a.group?br:Ut;return Xt(l,{name:a.disabled?"":n,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:o},r.default)}}})}function om(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:n,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(a,i){let{slots:r}=i;const o=a.group?br:Ut;return()=>Xt(o,{name:a.disabled?"":n,css:!a.disabled,...a.disabled?{}:e},r.default)}})}function lm(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=Vl(`offset-${t}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[t]:o.style[t]}},onEnter(o){const l=o._initialStyle;if(!l)return;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const s=`${o[a]}px`;o.style[t]="0",o.offsetHeight,o.style.transition=l.transition,n&&o._parent&&o._parent.classList.add(n),requestAnimationFrame(()=>{o.style[t]=s})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[t]:o.style[t]},o.style.overflow="hidden",o.style[t]=`${o[a]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){n&&o._parent&&o._parent.classList.remove(n),r(o)}function r(o){if(!o._initialStyle)return;const l=o._initialStyle[t];o.style.overflow=o._initialStyle.overflow,l!=null&&(o.style[t]=l),delete o._initialStyle}}const xp=T({target:[Object,Array]},"v-dialog-transition"),yi=new WeakMap,Ua=L()({name:"VDialogTransition",props:xp(),setup(n,e){let{slots:t}=e;const a={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,r){var c;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),i.style.visibility="";const o=Uo(n.target,i),{x:l,y:s,sx:u,sy:d,speed:p}=o;yi.set(i,o);const f=ie(i,[{transform:`translate(${l}px, ${s}px) scale(${u}, ${d})`,opacity:0},{}],{duration:225*p,easing:Gu});(c=Go(i))==null||c.forEach(g=>{ie(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*p,easing:Xe})}),f.finished.then(()=>r())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,r){var c;await new Promise(g=>requestAnimationFrame(g));let o;!yi.has(i)||Array.isArray(n.target)||n.target.offsetParent||n.target.getClientRects().length?o=Uo(n.target,i):o=yi.get(i);const{x:l,y:s,sx:u,sy:d,speed:p}=o;ie(i,[{},{transform:`translate(${l}px, ${s}px) scale(${u}, ${d})`,opacity:0}],{duration:125*p,easing:Uu}).finished.then(()=>r()),(c=Go(i))==null||c.forEach(g=>{ie(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*p,easing:Xe})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>n.target?m(Ut,z({name:"dialog-transition"},a,{css:!1}),t):m(Ut,{name:"dialog-transition"},t)}});function Go(n){var t;const e=(t=n.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return e&&[...e]}function Uo(n,e){const t=Nl(n),a=Sr(e),[i,r]=getComputedStyle(e).transformOrigin.split(" ").map(v=>parseFloat(v)),[o,l]=getComputedStyle(e).getPropertyValue("--v-overlay-anchor-origin").split(" ");let s=t.left+t.width/2;o==="left"||l==="left"?s-=t.width/2:(o==="right"||l==="right")&&(s+=t.width/2);let u=t.top+t.height/2;o==="top"||l==="top"?u-=t.height/2:(o==="bottom"||l==="bottom")&&(u+=t.height/2);const d=t.width/a.width,p=t.height/a.height,f=Math.max(1,d,p),c=d/f||0,g=p/f||0,h=a.width*a.height/(window.innerWidth*window.innerHeight),x=h>.12?Math.min(1.5,(h-.12)*10+1):1;return{x:s-(i+a.left),y:u-(r+a.top),sx:c,sy:g,speed:x}}const vp=vt("fab-transition","center center","out-in"),bp=vt("dialog-bottom-transition"),hp=vt("dialog-top-transition"),Qe=vt("fade-transition"),Br=vt("scale-transition"),yp=vt("scroll-x-transition"),kp=vt("scroll-x-reverse-transition"),wp=vt("scroll-y-transition"),Sp=vt("scroll-y-reverse-transition"),Fp=vt("slide-x-transition"),Cp=vt("slide-x-reverse-transition"),Dr=vt("slide-y-transition"),Vp=vt("slide-y-reverse-transition"),Ka=om("expand-transition",lm()),_r=om("expand-x-transition",lm("",!0)),Pp=T({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),vn=L(!1)({name:"VDefaultsProvider",props:Pp(),setup(n,e){let{slots:t}=e;const{defaults:a,disabled:i,reset:r,root:o,scoped:l}=Oe(n);return $n(a,{reset:r,root:o,scoped:l,disabled:i}),()=>{var s;return(s=t.default)==null?void 0:s.call(t)}}}),Wn=T({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Yn(n){return{dimensionStyles:y(()=>{const t={},a=an(n.height),i=an(n.maxHeight),r=an(n.maxWidth),o=an(n.minHeight),l=an(n.minWidth),s=an(n.width);return a!=null&&(t.height=a),i!=null&&(t.maxHeight=i),r!=null&&(t.maxWidth=r),o!=null&&(t.minHeight=o),l!=null&&(t.minWidth=l),s!=null&&(t.width=s),t})}}function Ip(n){return{aspectStyles:y(()=>{const e=Number(n.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const mm=T({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...rn(),...Wn()},"VResponsive"),Oi=L()({name:"VResponsive",props:mm(),setup(n,e){let{slots:t}=e;const{aspectStyles:a}=Ip(n),{dimensionStyles:i}=Yn(n);return N(()=>{var r;return m("div",{class:["v-responsive",{"v-responsive--inline":n.inline},n.class],style:[i.value,n.style]},[m("div",{class:"v-responsive__sizer",style:a.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&m("div",{class:["v-responsive__content",n.contentClass]},[t.default()])])}),{}}});function Tr(n){return wr(()=>{const e=Rt(n),t=[],a={};if(e.background)if(Mi(e.background)){if(a.backgroundColor=e.background,!e.text&&Tu(e.background)){const i=gt(e.background);if(i.a==null||i.a===1){const r=Xl(i);a.color=r,a.caretColor=r}}}else t.push(`bg-${e.background}`);return e.text&&(Mi(e.text)?(a.color=e.text,a.caretColor=e.text):t.push(`text-${e.text}`)),{colorClasses:t,colorStyles:a}})}function Qn(n){const{colorClasses:e,colorStyles:t}=Tr(()=>({text:Rt(n)}));return{textColorClasses:e,textColorStyles:t}}function En(n){const{colorClasses:e,colorStyles:t}=Tr(()=>({background:Rt(n)}));return{backgroundColorClasses:e,backgroundColorStyles:t}}const Bn=T({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ln(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return{roundedClasses:y(()=>{const a=Ei(n)?n.value:n.rounded,i=Ei(n)?n.value:n.tile,r=[];if(a===!0||a==="")r.push(`${e}--rounded`);else if(typeof a=="string"||a===0)for(const o of String(a).split(" "))r.push(`rounded-${o}`);else(i||a===!1)&&r.push("rounded-0");return r})}}const Ct=T({transition:{type:null,default:"fade-transition",validator:n=>n!==!0}},"transition"),at=(n,e)=>{let{slots:t}=e;const{transition:a,disabled:i,group:r,...o}=n,{component:l=r?br:Ut,...s}=Ke(a)?a:{};let u;return Ke(a)?u=z(s,JSON.parse(JSON.stringify({disabled:i,group:r})),o):u=z({name:i||!a?"":a},o),Xt(l,u,t)};function Ep(n,e){if(!hr)return;const t=e.modifiers||{},a=e.value,{handler:i,options:r}=typeof a=="object"?a:{handler:a,options:{}},o=new IntersectionObserver(function(){var p;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;const u=(p=n._observe)==null?void 0:p[e.instance.$.uid];if(!u)return;const d=l.some(f=>f.isIntersecting);i&&(!t.quiet||u.init)&&(!t.once||d||u.init)&&i(d,l,s),d&&t.once?sm(n,e):u.init=!0},r);n._observe=Object(n._observe),n._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(n)}function sm(n,e){var a;const t=(a=n._observe)==null?void 0:a[e.instance.$.uid];t&&(t.observer.unobserve(n),delete n._observe[e.instance.$.uid])}const da={mounted:Ep,unmounted:sm},dm=T({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...mm(),...rn(),...Bn(),...Ct()},"VImg"),Ot=L()({name:"VImg",directives:{intersect:da},props:dm(),emits:{loadstart:n=>!0,load:n=>!0,error:n=>!0},setup(n,e){let{emit:t,slots:a}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.color),{roundedClasses:o}=Ln(n),l=zn("VImg"),s=X(""),u=U(),d=X(n.eager?"loading":"idle"),p=X(),f=X(),c=y(()=>n.src&&typeof n.src=="object"?{src:n.src.src,srcset:n.srcset||n.src.srcset,lazySrc:n.lazySrc||n.src.lazySrc,aspect:Number(n.aspectRatio||n.src.aspect||0)}:{src:n.src,srcset:n.srcset,lazySrc:n.lazySrc,aspect:Number(n.aspectRatio||0)}),g=y(()=>c.value.aspect||p.value/f.value||0);tn(()=>n.src,()=>{h(d.value!=="idle")}),tn(g,(P,I)=>{!P&&I&&u.value&&C(u.value)}),ma(()=>h());function h(P){if(!(n.eager&&P)&&!(hr&&!P&&!n.eager)){if(d.value="loading",c.value.lazySrc){const I=new Image;I.src=c.value.lazySrc,C(I,null)}c.value.src&&Fn(()=>{var I;t("loadstart",((I=u.value)==null?void 0:I.currentSrc)||c.value.src),setTimeout(()=>{var M;if(!l.isUnmounted)if((M=u.value)!=null&&M.complete){if(u.value.naturalWidth||v(),d.value==="error")return;g.value||C(u.value,null),d.value==="loading"&&x()}else g.value||C(u.value),b()})})}}function x(){var P;l.isUnmounted||(b(),C(u.value),d.value="loaded",t("load",((P=u.value)==null?void 0:P.currentSrc)||c.value.src))}function v(){var P;l.isUnmounted||(d.value="error",t("error",((P=u.value)==null?void 0:P.currentSrc)||c.value.src))}function b(){const P=u.value;P&&(s.value=P.currentSrc||P.src)}let k=-1;tt(()=>{clearTimeout(k)});function C(P){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const M=()=>{if(clearTimeout(k),l.isUnmounted)return;const{naturalHeight:j,naturalWidth:W}=P;j||W?(p.value=W,f.value=j):!P.complete&&d.value==="loading"&&I!=null?k=window.setTimeout(M,I):(P.currentSrc.endsWith(".svg")||P.currentSrc.startsWith("data:image/svg+xml"))&&(p.value=1,f.value=1)};M()}const S=B(()=>({"v-img__img--cover":n.cover,"v-img__img--contain":!n.cover})),E=()=>{var M;if(!c.value.src||d.value==="idle")return null;const P=m("img",{class:["v-img__img",S.value],style:{objectPosition:n.position},crossorigin:n.crossorigin,src:c.value.src,srcset:c.value.srcset,alt:n.alt,referrerpolicy:n.referrerpolicy,draggable:n.draggable,sizes:n.sizes,ref:u,onLoad:x,onError:v},null),I=(M=a.sources)==null?void 0:M.call(a);return m(at,{transition:n.transition,appear:!0},{default:()=>[Tn(I?m("picture",{class:"v-img__picture"},[I,P]):P,[[Ft,d.value==="loaded"]])]})},A=()=>m(at,{transition:n.transition},{default:()=>[c.value.lazySrc&&d.value!=="loaded"&&m("img",{class:["v-img__img","v-img__img--preload",S.value],style:{objectPosition:n.position},crossorigin:n.crossorigin,src:c.value.lazySrc,alt:n.alt,referrerpolicy:n.referrerpolicy,draggable:n.draggable},null)]}),w=()=>a.placeholder?m(at,{transition:n.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&m("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,F=()=>a.error?m(at,{transition:n.transition,appear:!0},{default:()=>[d.value==="error"&&m("div",{class:"v-img__error"},[a.error()])]}):null,_=()=>n.gradient?m("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${n.gradient})`}},null):null,V=X(!1);{const P=tn(g,I=>{I&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),P())})}return N(()=>{const P=Oi.filterProps(n);return Tn(m(Oi,z({class:["v-img",{"v-img--absolute":n.absolute,"v-img--booting":!V.value},i.value,o.value,n.class],style:[{width:an(n.width==="auto"?p.value:n.width)},r.value,n.style]},P,{aspectRatio:g.value,"aria-label":n.alt,role:n.alt?"img":void 0}),{additional:()=>m(dn,null,[m(E,null,null),m(A,null,null),m(_,null,null),m(w,null,null),m(F,null,null)]),default:a.default}),[[ft("intersect"),{handler:h,options:n.options},null,{once:!0}]])}),{currentSrc:s,image:u,state:d,naturalWidth:p,naturalHeight:f}}}),ut=T({border:[Boolean,Number,String]},"border");function bt(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return{borderClasses:y(()=>{const a=n.border;return a===!0||a===""?`${e}--border`:typeof a=="string"||a===0?String(a).split(" ").map(i=>`border-${i}`):[]})}}const Gn=T({elevation:{type:[Number,String],validator(n){const e=parseInt(n);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Zn(n){return{elevationClasses:B(()=>{const t=Ei(n)?n.value:n.elevation;return t==null?[]:[`elevation-${t}`]})}}const Ap=[null,"prominent","default","comfortable","compact"],um=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:n=>Ap.includes(n)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ut(),...rn(),...Gn(),...Bn(),...xn({tag:"header"}),...kn()},"VToolbar"),Li=L()({name:"VToolbar",props:um(),setup(n,e){var c;let{slots:t}=e;const{backgroundColorClasses:a,backgroundColorStyles:i}=En(()=>n.color),{borderClasses:r}=bt(n),{elevationClasses:o}=Zn(n),{roundedClasses:l}=Ln(n),{themeClasses:s}=Pn(n),{rtlClasses:u}=Hn(),d=X(!!(n.extended||(c=t.extension)!=null&&c.call(t))),p=y(()=>parseInt(Number(n.height)+(n.density==="prominent"?Number(n.height):0)-(n.density==="comfortable"?8:0)-(n.density==="compact"?16:0),10)),f=y(()=>d.value?parseInt(Number(n.extensionHeight)+(n.density==="prominent"?Number(n.extensionHeight):0)-(n.density==="comfortable"?4:0)-(n.density==="compact"?8:0),10):0);return $n({VBtn:{variant:"text"}}),N(()=>{var v;const g=!!(n.title||t.title),h=!!(t.image||n.image),x=(v=t.extension)==null?void 0:v.call(t);return d.value=!!(n.extended||x),m(n.tag,{class:["v-toolbar",{"v-toolbar--absolute":n.absolute,"v-toolbar--collapse":n.collapse,"v-toolbar--flat":n.flat,"v-toolbar--floating":n.floating,[`v-toolbar--density-${n.density}`]:!0},a.value,r.value,o.value,l.value,s.value,u.value,n.class],style:[i.value,n.style]},{default:()=>[h&&m("div",{key:"image",class:"v-toolbar__image"},[t.image?m(vn,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{cover:!0,src:n.image}}},t.image):m(Ot,{key:"image-img",cover:!0,src:n.image},null)]),m(vn,{defaults:{VTabs:{height:an(p.value)}}},{default:()=>{var b,k,C;return[m("div",{class:"v-toolbar__content",style:{height:an(p.value)}},[t.prepend&&m("div",{class:"v-toolbar__prepend"},[(b=t.prepend)==null?void 0:b.call(t)]),g&&m(Ar,{key:"title",text:n.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&m("div",{class:"v-toolbar__append"},[(C=t.append)==null?void 0:C.call(t)])])]}}),m(vn,{defaults:{VTabs:{height:an(f.value)}}},{default:()=>[m(Ka,null,{default:()=>[d.value&&m("div",{class:"v-toolbar__extension",style:{height:an(f.value)}},[x])]})]})]})}),{contentHeight:p,extensionHeight:f}}}),Bp=T({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Dp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=e;let a=0,i=0;const r=U(null),o=X(0),l=X(0),s=X(0),u=X(!1),d=X(!1),p=y(()=>Number(n.scrollThreshold)),f=y(()=>Dn((p.value-o.value)/p.value||0)),c=()=>{const g=r.value;if(!g||t&&!t.value)return;a=o.value,o.value="window"in g?g.pageYOffset:g.scrollTop;const h=g instanceof Window?document.documentElement.scrollHeight:g.scrollHeight;if(i!==h){i=h;return}d.value=o.value<a,s.value=Math.abs(o.value-p.value)};return tn(d,()=>{l.value=l.value||o.value}),tn(u,()=>{l.value=0}),it(()=>{tn(()=>n.scrollTarget,g=>{var x;const h=g?document.querySelector(g):window;h&&h!==r.value&&((x=r.value)==null||x.removeEventListener("scroll",c),r.value=h,r.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),tt(()=>{var g;(g=r.value)==null||g.removeEventListener("scroll",c)}),t&&tn(t,c,{immediate:!0}),{scrollThreshold:p,currentScroll:o,currentThreshold:s,isScrollActive:u,scrollRatio:f,isScrollingUp:d,savedScroll:l}}function xe(){const n=X(!1);return it(()=>{window.requestAnimationFrame(()=>{n.value=!0})}),{ssrBootStyles:B(()=>n.value?void 0:{transition:"none !important"}),isBooted:Wa(n)}}const _p=T({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:n=>["top","bottom"].includes(n)},...um(),...ge(),...Bp(),height:{type:[Number,String],default:64}},"VAppBar"),Tp=L()({name:"VAppBar",props:_p(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=U(),i=sn(n,"modelValue"),r=y(()=>{var k;const b=new Set(((k=n.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:b.has("hide"),fullyHide:b.has("fully-hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),o=y(()=>{const b=r.value;return b.hide||b.fullyHide||b.inverted||b.collapse||b.elevate||b.fadeImage||!i.value}),{currentScroll:l,scrollThreshold:s,isScrollingUp:u,scrollRatio:d}=Dp(n,{canScroll:o}),p=B(()=>r.value.hide||r.value.fullyHide),f=y(()=>n.collapse||r.value.collapse&&(r.value.inverted?d.value>0:d.value===0)),c=y(()=>n.flat||r.value.fullyHide&&!i.value||r.value.elevate&&(r.value.inverted?l.value>0:l.value===0)),g=y(()=>r.value.fadeImage?r.value.inverted?1-d.value:d.value:void 0),h=y(()=>{var C,S;if(r.value.hide&&r.value.inverted)return 0;const b=((C=a.value)==null?void 0:C.contentHeight)??0,k=((S=a.value)==null?void 0:S.extensionHeight)??0;return p.value?l.value<s.value||r.value.fullyHide?b+k:b:b+k});mt(()=>!!n.scrollBehavior,()=>{Mn(()=>{p.value?r.value.inverted?i.value=l.value>s.value:i.value=u.value||l.value<s.value:i.value=!0})});const{ssrBootStyles:x}=xe(),{layoutItemStyles:v}=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:B(()=>n.location),layoutSize:h,elementSize:X(void 0),active:i,absolute:B(()=>n.absolute)});return N(()=>{const b=Li.filterProps(n);return m(Li,z({ref:a,class:["v-app-bar",{"v-app-bar--bottom":n.location==="bottom"},n.class],style:[{...v.value,"--v-toolbar-image-opacity":g.value,height:void 0,...x.value},n.style]},b,{collapse:f.value,flat:c.value}),t)}),{}}}),Mp=[null,"default","comfortable","compact"],Kn=T({density:{type:String,default:"default",validator:n=>Mp.includes(n)}},"density");function rt(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return{densityClasses:B(()=>`${e}--density-${n.density}`)}}const Rp=["elevated","flat","tonal","outlined","text","plain"];function Qt(n,e){return m(dn,null,[n&&m("span",{key:"overlay",class:`${e}__overlay`},null),m("span",{key:"underlay",class:`${e}__underlay`},null)])}const kt=T({color:String,variant:{type:String,default:"elevated",validator:n=>Rp.includes(n)}},"variant");function ve(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();const t=B(()=>{const{variant:r}=Rt(n);return`${e}--variant-${r}`}),{colorClasses:a,colorStyles:i}=Tr(()=>{const{variant:r,color:o}=Rt(n);return{[["elevated","flat"].includes(r)?"background":"text"]:o}});return{colorClasses:a,colorStyles:i,variantClasses:t}}const pm=T({baseColor:String,divided:Boolean,...ut(),...rn(),...Kn(),...Gn(),...Bn(),...xn(),...kn(),...kt()},"VBtnGroup"),zi=L()({name:"VBtnGroup",props:pm(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{densityClasses:i}=rt(n),{borderClasses:r}=bt(n),{elevationClasses:o}=Zn(n),{roundedClasses:l}=Ln(n);$n({VBtn:{height:"auto",baseColor:B(()=>n.baseColor),color:B(()=>n.color),density:B(()=>n.density),flat:!0,variant:B(()=>n.variant)}}),N(()=>m(n.tag,{class:["v-btn-group",{"v-btn-group--divided":n.divided},a.value,r.value,i.value,o.value,l.value,n.class],style:n.style},t))}}),be=T({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),he=T({value:null,disabled:Boolean,selectedClass:String},"group-item");function ye(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=zn("useGroupItem");if(!a)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=st();An(Symbol.for(`${e.description}:id`),i);const r=Sn(e,null);if(!r){if(!t)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=B(()=>n.value),l=y(()=>!!(r.disabled.value||n.disabled));r.register({id:i,value:o,disabled:l},a),tt(()=>{r.unregister(i)});const s=y(()=>r.isSelected(i)),u=y(()=>r.items.value[0].id===i),d=y(()=>r.items.value[r.items.value.length-1].id===i),p=y(()=>s.value&&[r.selectedClass.value,n.selectedClass]);return tn(s,f=>{a.emit("group:selected",{value:f})},{flush:"sync"}),{id:i,isSelected:s,isFirst:u,isLast:d,toggle:()=>r.select(i,!s.value),select:f=>r.select(i,f),selectedClass:p,value:o,disabled:l,group:r}}function ne(n,e){let t=!1;const a=dt([]),i=sn(n,"modelValue",[],f=>f==null?[]:cm(a,_n(f)),f=>{const c=Op(a,f);return n.multiple?c:c[0]}),r=zn("useGroup");function o(f,c){const g=f,h=Symbol.for(`${e.description}:id`),v=Ie(h,r==null?void 0:r.vnode).indexOf(c);lt(g.value)==null&&(g.value=v,g.useIndexAsValue=!0),v>-1?a.splice(v,0,g):a.push(g)}function l(f){if(t)return;s();const c=a.findIndex(g=>g.id===f);a.splice(c,1)}function s(){const f=a.find(c=>!c.disabled);f&&n.mandatory==="force"&&!i.value.length&&(i.value=[f.id])}it(()=>{s()}),tt(()=>{t=!0}),qd(()=>{for(let f=0;f<a.length;f++)a[f].useIndexAsValue&&(a[f].value=f)});function u(f,c){const g=a.find(h=>h.id===f);if(!(c&&(g!=null&&g.disabled)))if(n.multiple){const h=i.value.slice(),x=h.findIndex(b=>b===f),v=~x;if(c=c??!v,v&&n.mandatory&&h.length<=1||!v&&n.max!=null&&h.length+1>n.max)return;x<0&&c?h.push(f):x>=0&&!c&&h.splice(x,1),i.value=h}else{const h=i.value.includes(f);if(n.mandatory&&h)return;i.value=c??!h?[f]:[]}}function d(f){if(n.multiple,i.value.length){const c=i.value[0],g=a.findIndex(v=>v.id===c);let h=(g+f)%a.length,x=a[h];for(;x.disabled&&h!==g;)h=(h+f)%a.length,x=a[h];if(x.disabled)return;i.value=[a[h].id]}else{const c=a.find(g=>!g.disabled);c&&(i.value=[c.id])}}const p={register:o,unregister:l,selected:i,select:u,disabled:B(()=>n.disabled),prev:()=>d(a.length-1),next:()=>d(1),isSelected:f=>i.value.includes(f),selectedClass:B(()=>n.selectedClass),items:B(()=>a),getItemIndex:f=>$p(a,f)};return An(e,p),p}function $p(n,e){const t=cm(n,[e]);return t.length?n.findIndex(a=>a.id===t[0]):-1}function cm(n,e){const t=[];return e.forEach(a=>{const i=n.find(o=>Jn(a,o.value)),r=n[a];(i==null?void 0:i.value)!=null?t.push(i.id):r!=null&&t.push(r.id)}),t}function Op(n,e){const t=[];return e.forEach(a=>{const i=n.findIndex(r=>r.id===a);if(~i){const r=n[i];t.push(r.value!=null?r.value:i)}}),t}const Mr=Symbol.for("vuetify:v-btn-toggle"),Lp=T({...pm(),...be()},"VBtnToggle"),zp=L()({name:"VBtnToggle",props:Lp(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{isSelected:a,next:i,prev:r,select:o,selected:l}=ne(n,Mr);return N(()=>{const s=zi.filterProps(n);return m(zi,z({class:["v-btn-toggle",n.class]},s,{style:n.style}),{default:()=>{var u;return[(u=t.default)==null?void 0:u.call(t,{isSelected:a,next:i,prev:r,select:o,selected:l})]}})}),{next:i,prev:r,select:o}}}),Np={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},jp={component:n=>Xt($r,{...n,class:"mdi"})},un=[String,Function,Object,Array],Ni=Symbol.for("vuetify:icons"),qa=T({icon:{type:un},tag:{type:[String,Object,Function],required:!0}},"icon"),ji=L()({name:"VComponentIcon",props:qa(),setup(n,e){let{slots:t}=e;return()=>{const a=n.icon;return m(n.tag,null,{default:()=>{var i;return[n.icon?m(a,null,null):(i=t.default)==null?void 0:i.call(t)]}})}}}),Rr=xt({name:"VSvgIcon",inheritAttrs:!1,props:qa(),setup(n,e){let{attrs:t}=e;return()=>m(n.tag,z(t,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(a=>Array.isArray(a)?m("path",{d:a[0],"fill-opacity":a[1]},null):m("path",{d:a},null)):m("path",{d:n.icon},null)])]})}}),Hp=xt({name:"VLigatureIcon",props:qa(),setup(n){return()=>m(n.tag,null,{default:()=>[n.icon]})}}),$r=xt({name:"VClassIcon",props:qa(),setup(n){return()=>m(n.tag,{class:n.icon},null)}});function Wp(){return{svg:{component:Rr},class:{component:$r}}}function Yp(n){const e=Wp(),t=(n==null?void 0:n.defaultSet)??"mdi";return t==="mdi"&&!e.mdi&&(e.mdi=jp),et({defaultSet:t,sets:e,aliases:{...Np,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},n)}const Gp=n=>{const e=Sn(Ni);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:y(()=>{var s;const a=Rt(n);if(!a)return{component:ji};let i=a;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(s=e.aliases)==null?void 0:s[i.slice(1)])),Array.isArray(i))return{component:Rr,icon:i};if(typeof i!="string")return{component:ji,icon:i};const r=Object.keys(e.sets).find(u=>typeof i=="string"&&i.startsWith(`${u}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r??e.defaultSet].component,icon:o}})}},Up=["x-small","small","default","large","x-large"],Dt=T({size:{type:[String,Number],default:"default"}},"size");function Le(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return wr(()=>{const t=n.size;let a,i;return Ma(Up,t)?a=`${e}--size-${t}`:t&&(i={width:an(t),height:an(t)}),{sizeClasses:a,sizeStyles:i}})}const Kp=T({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:un,opacity:[String,Number],...rn(),...Dt(),...xn({tag:"i"}),...kn()},"VIcon"),Vn=L()({name:"VIcon",props:Kp(),setup(n,e){let{attrs:t,slots:a}=e;const i=X(),{themeClasses:r}=Er(),{iconData:o}=Gp(()=>i.value||n.icon),{sizeClasses:l}=Le(n),{textColorClasses:s,textColorStyles:u}=Qn(()=>n.color);return N(()=>{var f,c;const d=(f=a.default)==null?void 0:f.call(a);d&&(i.value=(c=Tl(d).filter(g=>g.type===Xd&&g.children&&typeof g.children=="string")[0])==null?void 0:c.children);const p=!!(t.onClick||t.onClickOnce);return m(o.value.component,{tag:n.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,l.value,s.value,{"v-icon--clickable":p,"v-icon--disabled":n.disabled,"v-icon--start":n.start,"v-icon--end":n.end},n.class],style:[{"--v-icon-opacity":n.opacity},l.value?void 0:{fontSize:an(n.size),height:an(n.size),width:an(n.size)},u.value,n.style],role:p?"button":void 0,"aria-hidden":!p,tabindex:p?n.disabled?-1:0:void 0},{default:()=>[d]})}),{}}});function Xa(n,e){const t=U(),a=X(!1);if(hr){const i=new IntersectionObserver(r=>{a.value=!!r.find(o=>o.isIntersecting)},e);tt(()=>{i.disconnect()}),tn(t,(r,o)=>{o&&(i.unobserve(o),a.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const qp=T({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...rn(),...Dt(),...xn({tag:"div"}),...kn()},"VProgressCircular"),Me=L()({name:"VProgressCircular",props:qp(),setup(n,e){let{slots:t}=e;const a=20,i=2*Math.PI*a,r=U(),{themeClasses:o}=Pn(n),{sizeClasses:l,sizeStyles:s}=Le(n),{textColorClasses:u,textColorStyles:d}=Qn(()=>n.color),{textColorClasses:p,textColorStyles:f}=Qn(()=>n.bgColor),{intersectionRef:c,isIntersecting:g}=Xa(),{resizeRef:h,contentRect:x}=St(),v=B(()=>Math.max(0,Math.min(100,parseFloat(n.modelValue)))),b=B(()=>Number(n.width)),k=B(()=>s.value?Number(n.size):x.value?x.value.width:Math.max(b.value,32)),C=B(()=>a/(1-b.value/k.value)*2),S=B(()=>b.value/k.value*C.value),E=B(()=>an((100-v.value)/100*i));return Mn(()=>{c.value=r.value,h.value=r.value}),N(()=>m(n.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!n.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":n.indeterminate==="disable-shrink"},o.value,l.value,u.value,n.class],style:[s.value,d.value,n.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n.indeterminate?void 0:v.value},{default:()=>[m("svg",{style:{transform:`rotate(calc(-90deg + ${Number(n.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${C.value} ${C.value}`},[m("circle",{class:["v-progress-circular__underlay",p.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":S.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),m("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":S.value,"stroke-dasharray":i,"stroke-dashoffset":E.value},null)]),t.default&&m("div",{class:"v-progress-circular__content"},[t.default({value:v.value})])]})),{}}}),Ko={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},jt=T({location:String},"location");function ke(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Hn();return{locationStyles:y(()=>{if(!n.location)return{};const{side:r,align:o}=_i(n.location.split(" ").length>1?n.location:`${n.location} center`,a.value);function l(u){return t?t(u):0}const s={};return r!=="center"&&(e?s[Ko[r]]=`calc(100% - ${l(r)}px)`:s[r]=0),o!=="center"?e?s[Ko[o]]=`calc(100% - ${l(o)}px)`:s[o]=0:(r==="center"?s.top=s.left="50%":s[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",s.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),s})}}const Xp=T({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...rn(),...jt({location:"top"}),...Bn(),...xn(),...kn()},"VProgressLinear"),Za=L()({name:"VProgressLinear",props:Xp(),emits:{"update:modelValue":n=>!0},setup(n,e){var V;let{slots:t}=e;const a=sn(n,"modelValue"),{isRtl:i,rtlClasses:r}=Hn(),{themeClasses:o}=Pn(n),{locationStyles:l}=ke(n),{textColorClasses:s,textColorStyles:u}=Qn(()=>n.color),{backgroundColorClasses:d,backgroundColorStyles:p}=En(()=>n.bgColor||n.color),{backgroundColorClasses:f,backgroundColorStyles:c}=En(()=>n.bufferColor||n.bgColor||n.color),{backgroundColorClasses:g,backgroundColorStyles:h}=En(()=>n.color),{roundedClasses:x}=Ln(n),{intersectionRef:v,isIntersecting:b}=Xa(),k=y(()=>parseFloat(n.max)),C=y(()=>parseFloat(n.height)),S=y(()=>Dn(parseFloat(n.bufferValue)/k.value*100,0,100)),E=y(()=>Dn(parseFloat(a.value)/k.value*100,0,100)),A=y(()=>i.value!==n.reverse),w=y(()=>n.indeterminate?"fade-transition":"slide-x-transition"),F=Cn&&((V=window.matchMedia)==null?void 0:V.call(window,"(forced-colors: active)").matches);function _(P){if(!v.value)return;const{left:I,right:M,width:j}=v.value.getBoundingClientRect(),W=A.value?j-P.clientX+(M-j):P.clientX-I;a.value=Math.round(W/j*k.value)}return N(()=>m(n.tag,{ref:v,class:["v-progress-linear",{"v-progress-linear--absolute":n.absolute,"v-progress-linear--active":n.active&&b.value,"v-progress-linear--reverse":A.value,"v-progress-linear--rounded":n.rounded,"v-progress-linear--rounded-bar":n.roundedBar,"v-progress-linear--striped":n.striped},x.value,o.value,r.value,n.class],style:[{bottom:n.location==="bottom"?0:void 0,top:n.location==="top"?0:void 0,height:n.active?an(C.value):0,"--v-progress-linear-height":an(C.value),...n.absolute?l.value:{}},n.style],role:"progressbar","aria-hidden":n.active?"false":"true","aria-valuemin":"0","aria-valuemax":n.max,"aria-valuenow":n.indeterminate?void 0:Math.min(parseFloat(a.value),k.value),onClick:n.clickable&&_},{default:()=>[n.stream&&m("div",{key:"stream",class:["v-progress-linear__stream",s.value],style:{...u.value,[A.value?"left":"right"]:an(-C.value),borderTop:`${an(C.value/2)} dotted`,opacity:parseFloat(n.bufferOpacity),top:`calc(50% - ${an(C.value/4)})`,width:an(100-S.value,"%"),"--v-progress-linear-stream-to":an(C.value*(A.value?1:-1))}},null),m("div",{class:["v-progress-linear__background",F?void 0:d.value],style:[p.value,{opacity:parseFloat(n.bgOpacity),width:n.stream?0:void 0}]},null),m("div",{class:["v-progress-linear__buffer",F?void 0:f.value],style:[c.value,{opacity:parseFloat(n.bufferOpacity),width:an(S.value,"%")}]},null),m(Ut,{name:w.value},{default:()=>[n.indeterminate?m("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(P=>m("div",{key:P,class:["v-progress-linear__indeterminate",P,F?void 0:g.value],style:h.value},null))]):m("div",{class:["v-progress-linear__determinate",F?void 0:g.value],style:[h.value,{width:an(E.value,"%")}]},null)]}),t.default&&m("div",{class:"v-progress-linear__content"},[t.default({value:E.value,buffer:S.value})])]})),{}}}),Ja=T({loading:[Boolean,String]},"loader");function ua(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return{loaderClasses:B(()=>({[`${e}--loading`]:n.loading}))}}function pa(n,e){var a;let{slots:t}=e;return m("div",{class:`${n.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:n.color,isActive:n.active}))||m(Za,{absolute:n.absolute,active:n.active,color:n.color,height:"2",indeterminate:!0},null)])}const Zp=["static","relative","fixed","absolute","sticky"],ze=T({position:{type:String,validator:n=>Zp.includes(n)}},"position");function Ne(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();return{positionClasses:B(()=>n.position?`${e}--${n.position}`:void 0)}}function Jp(){const n=zn("useRoute");return y(()=>{var e;return(e=n==null?void 0:n.proxy)==null?void 0:e.$route})}function gm(){var n,e;return(e=(n=zn("useRouter"))==null?void 0:n.proxy)==null?void 0:e.$router}function ca(n,e){var d,p;const t=Ge("RouterLink"),a=B(()=>!!(n.href||n.to)),i=y(()=>(a==null?void 0:a.value)||Io(e,"click")||Io(n,"click"));if(typeof t=="string"||!("useLink"in t)){const f=B(()=>n.href);return{isLink:a,isClickable:i,href:f,linkProps:dt({href:f})}}const r=t.useLink({to:B(()=>n.to||""),replace:B(()=>n.replace)}),o=y(()=>n.to?r:void 0),l=Jp(),s=y(()=>{var f,c,g;return o.value?n.exact?l.value?((g=o.value.isExactActive)==null?void 0:g.value)&&Jn(o.value.route.value.query,l.value.query):((c=o.value.isExactActive)==null?void 0:c.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),u=y(()=>{var f;return n.to?(f=o.value)==null?void 0:f.route.value.href:n.href});return{isLink:a,isClickable:i,isActive:s,route:(d=o.value)==null?void 0:d.route,navigate:(p=o.value)==null?void 0:p.navigate,href:u,linkProps:dt({href:u,"aria-current":B(()=>s.value?"page":void 0)})}}const ga=T({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ki=!1;function Qp(n,e){let t=!1,a,i;Cn&&(n!=null&&n.beforeEach)&&(Fn(()=>{window.addEventListener("popstate",r),a=n.beforeEach((o,l,s)=>{ki?t?e(s):s():setTimeout(()=>t?e(s):s()),ki=!0}),i=n==null?void 0:n.afterEach(()=>{ki=!1})}),Xn(()=>{window.removeEventListener("popstate",r),a==null||a(),i==null||i()}));function r(o){var l;(l=o.state)!=null&&l.replaced||(t=!0,setTimeout(()=>t=!1))}}function nc(n,e){tn(()=>{var t;return(t=n.isActive)==null?void 0:t.value},t=>{n.isLink.value&&t&&e&&Fn(()=>{e(!0)})},{immediate:!0})}const Hi=Symbol("rippleStop"),tc=80;function qo(n,e){n.style.transform=e,n.style.webkitTransform=e}function Wi(n){return n.constructor.name==="TouchEvent"}function fm(n){return n.constructor.name==="KeyboardEvent"}const ec=function(n,e){var p;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,i=0;if(!fm(n)){const f=e.getBoundingClientRect(),c=Wi(n)?n.touches[n.touches.length-1]:n;a=c.clientX-f.left,i=c.clientY-f.top}let r=0,o=.3;(p=e._ripple)!=null&&p.circle?(o=.15,r=e.clientWidth/2,r=t.center?r:r+Math.sqrt((a-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-r*2)/2}px`,s=`${(e.clientHeight-r*2)/2}px`,u=t.center?l:`${a-r}px`,d=t.center?s:`${i-r}px`;return{radius:r,scale:o,x:u,y:d,centerX:l,centerY:s}},La={show(n,e){var c;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=e==null?void 0:e._ripple)!=null&&c.enabled))return;const a=document.createElement("span"),i=document.createElement("span");a.appendChild(i),a.className="v-ripple__container",t.class&&(a.className+=` ${t.class}`);const{radius:r,scale:o,x:l,y:s,centerX:u,centerY:d}=ec(n,e,t),p=`${r*2}px`;i.className="v-ripple__animation",i.style.width=p,i.style.height=p,e.appendChild(a);const f=window.getComputedStyle(e);f&&f.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),qo(i,`translate(${l}, ${s}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),qo(i,`translate(${u}, ${d}) scale3d(1,1,1)`)})})},hide(n){var r;if(!((r=n==null?void 0:n._ripple)!=null&&r.enabled))return;const e=n.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const t=e[e.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const a=performance.now()-Number(t.dataset.activated),i=Math.max(250-a,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;n.getElementsByClassName("v-ripple__animation").length===1&&n.dataset.previousPosition&&(n.style.position=n.dataset.previousPosition,delete n.dataset.previousPosition),((l=t.parentNode)==null?void 0:l.parentNode)===n&&n.removeChild(t.parentNode)},300)},i)}};function xm(n){return typeof n>"u"||!!n}function na(n){const e={},t=n.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||n[Hi])){if(n[Hi]=!0,Wi(n))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(e.center=t._ripple.centered||fm(n),t._ripple.class&&(e.class=t._ripple.class),Wi(n)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{La.show(n,t,e)},t._ripple.showTimer=window.setTimeout(()=>{var a;(a=t==null?void 0:t._ripple)!=null&&a.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},tc)}else La.show(n,t,e)}}function Xo(n){n[Hi]=!0}function ct(n){const e=n.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),n.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{ct(n)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),La.hide(e)}}function vm(n){const e=n.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let ta=!1;function bm(n){!ta&&(n.keyCode===So.enter||n.keyCode===So.space)&&(ta=!0,na(n))}function hm(n){ta=!1,ct(n)}function ym(n){ta&&(ta=!1,ct(n))}function km(n,e,t){const{value:a,modifiers:i}=e,r=xm(a);if(r||La.hide(n),n._ripple=n._ripple??{},n._ripple.enabled=r,n._ripple.centered=i.center,n._ripple.circle=i.circle,Ke(a)&&a.class&&(n._ripple.class=a.class),r&&!t){if(i.stop){n.addEventListener("touchstart",Xo,{passive:!0}),n.addEventListener("mousedown",Xo);return}n.addEventListener("touchstart",na,{passive:!0}),n.addEventListener("touchend",ct,{passive:!0}),n.addEventListener("touchmove",vm,{passive:!0}),n.addEventListener("touchcancel",ct),n.addEventListener("mousedown",na),n.addEventListener("mouseup",ct),n.addEventListener("mouseleave",ct),n.addEventListener("keydown",bm),n.addEventListener("keyup",hm),n.addEventListener("blur",ym),n.addEventListener("dragstart",ct,{passive:!0})}else!r&&t&&wm(n)}function wm(n){n.removeEventListener("mousedown",na),n.removeEventListener("touchstart",na),n.removeEventListener("touchend",ct),n.removeEventListener("touchmove",vm),n.removeEventListener("touchcancel",ct),n.removeEventListener("mouseup",ct),n.removeEventListener("mouseleave",ct),n.removeEventListener("keydown",bm),n.removeEventListener("keyup",hm),n.removeEventListener("dragstart",ct),n.removeEventListener("blur",ym)}function ac(n,e){km(n,e,!1)}function ic(n){delete n._ripple,wm(n)}function rc(n,e){if(e.value===e.oldValue)return;const t=xm(e.oldValue);km(n,e,t)}const Ht={mounted:ac,unmounted:ic,updated:rc},Qa=T({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Mr},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:un,appendIcon:un,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},...ut(),...rn(),...Kn(),...Wn(),...Gn(),...he(),...Ja(),...jt(),...ze(),...Bn(),...ga(),...Dt(),...xn({tag:"button"}),...kn(),...kt({variant:"elevated"})},"VBtn"),wn=L()({name:"VBtn",props:Qa(),emits:{"group:selected":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const{themeClasses:i}=Pn(n),{borderClasses:r}=bt(n),{densityClasses:o}=rt(n),{dimensionStyles:l}=Yn(n),{elevationClasses:s}=Zn(n),{loaderClasses:u}=ua(n),{locationStyles:d}=ke(n),{positionClasses:p}=Ne(n),{roundedClasses:f}=Ln(n),{sizeClasses:c,sizeStyles:g}=Le(n),h=ye(n,n.symbol,!1),x=ca(n,t),v=y(()=>{var V;return n.active!==void 0?n.active:x.isLink.value?(V=x.isActive)==null?void 0:V.value:h==null?void 0:h.isSelected.value}),b=B(()=>v.value?n.activeColor??n.color:n.color),k=y(()=>{var P,I;return{color:(h==null?void 0:h.isSelected.value)&&(!x.isLink.value||((P=x.isActive)==null?void 0:P.value))||!h||((I=x.isActive)==null?void 0:I.value)?b.value??n.baseColor:n.baseColor,variant:n.variant}}),{colorClasses:C,colorStyles:S,variantClasses:E}=ve(k),A=y(()=>(h==null?void 0:h.disabled.value)||n.disabled),w=B(()=>n.variant==="elevated"&&!(n.disabled||n.flat||n.border)),F=y(()=>{if(!(n.value===void 0||typeof n.value=="symbol"))return Object(n.value)===n.value?JSON.stringify(n.value,null,0):n.value});function _(V){var P;A.value||x.isLink.value&&(V.metaKey||V.ctrlKey||V.shiftKey||V.button!==0||t.target==="_blank")||((P=x.navigate)==null||P.call(x,V),h==null||h.toggle())}return nc(x,h==null?void 0:h.select),N(()=>{const V=x.isLink.value?"a":n.tag,P=!!(n.prependIcon||a.prepend),I=!!(n.appendIcon||a.append),M=!!(n.icon&&n.icon!==!0);return Tn(m(V,z({type:V==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":v.value,"v-btn--block":n.block,"v-btn--disabled":A.value,"v-btn--elevated":w.value,"v-btn--flat":n.flat,"v-btn--icon":!!n.icon,"v-btn--loading":n.loading,"v-btn--readonly":n.readonly,"v-btn--slim":n.slim,"v-btn--stacked":n.stacked},i.value,r.value,C.value,o.value,s.value,u.value,p.value,f.value,c.value,E.value,n.class],style:[S.value,l.value,d.value,g.value,n.style],"aria-busy":n.loading?!0:void 0,disabled:A.value||void 0,tabindex:n.loading||n.readonly?-1:void 0,onClick:_,value:F.value},x.linkProps),{default:()=>{var j;return[Qt(!0,"v-btn"),!n.icon&&P&&m("span",{key:"prepend",class:"v-btn__prepend"},[a.prepend?m(vn,{key:"prepend-defaults",disabled:!n.prependIcon,defaults:{VIcon:{icon:n.prependIcon}}},a.prepend):m(Vn,{key:"prepend-icon",icon:n.prependIcon},null)]),m("span",{class:"v-btn__content","data-no-activator":""},[!a.default&&M?m(Vn,{key:"content-icon",icon:n.icon},null):m(vn,{key:"content-defaults",disabled:!M,defaults:{VIcon:{icon:n.icon}}},{default:()=>{var W;return[((W=a.default)==null?void 0:W.call(a))??$t(n.text)]}})]),!n.icon&&I&&m("span",{key:"append",class:"v-btn__append"},[a.append?m(vn,{key:"append-defaults",disabled:!n.appendIcon,defaults:{VIcon:{icon:n.appendIcon}}},a.append):m(Vn,{key:"append-icon",icon:n.appendIcon},null)]),!!n.loading&&m("span",{key:"loader",class:"v-btn__loader"},[((j=a.loader)==null?void 0:j.call(a))??m(Me,{color:typeof n.loading=="boolean"?void 0:n.loading,indeterminate:!0,width:"2"},null)])]}}),[[Ht,!A.value&&n.ripple,"",{center:!!n.icon}]])}),{group:h}}}),oc=T({...Qa({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),lc=L()({name:"VAppBarNavIcon",props:oc(),setup(n,e){let{slots:t}=e;return N(()=>m(wn,z(n,{class:["v-app-bar-nav-icon"]}),t)),{}}}),mc=L()({name:"VAppBarTitle",props:rm(),setup(n,e){let{slots:t}=e;return N(()=>m(Ar,z(n,{class:"v-app-bar-title"}),t)),{}}}),Sm=Bt("v-alert-title"),sc=["success","info","warning","error"],dc=T({border:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["top","end","bottom","start"].includes(n)},borderColor:String,closable:Boolean,closeIcon:{type:un,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:n=>sc.includes(n)},...rn(),...Kn(),...Wn(),...Gn(),...jt(),...ze(),...Bn(),...xn(),...kn(),...kt({variant:"flat"})},"VAlert"),uc=L()({name:"VAlert",props:dc(),emits:{"click:close":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=sn(n,"modelValue"),r=B(()=>{if(n.icon!==!1)return n.type?n.icon??`$${n.type}`:n.icon}),{themeClasses:o}=Pn(n),{colorClasses:l,colorStyles:s,variantClasses:u}=ve(()=>({color:n.color??n.type,variant:n.variant})),{densityClasses:d}=rt(n),{dimensionStyles:p}=Yn(n),{elevationClasses:f}=Zn(n),{locationStyles:c}=ke(n),{positionClasses:g}=Ne(n),{roundedClasses:h}=Ln(n),{textColorClasses:x,textColorStyles:v}=Qn(()=>n.borderColor),{t:b}=On(),k=B(()=>({"aria-label":b(n.closeLabel),onClick(C){i.value=!1,t("click:close",C)}}));return()=>{const C=!!(a.prepend||r.value),S=!!(a.title||n.title),E=!!(a.close||n.closable);return i.value&&m(n.tag,{class:["v-alert",n.border&&{"v-alert--border":!!n.border,[`v-alert--border-${n.border===!0?"start":n.border}`]:!0},{"v-alert--prominent":n.prominent},o.value,l.value,d.value,f.value,g.value,h.value,u.value,n.class],style:[s.value,p.value,c.value,n.style],role:"alert"},{default:()=>{var A,w;return[Qt(!1,"v-alert"),n.border&&m("div",{key:"border",class:["v-alert__border",x.value],style:v.value},null),C&&m("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?m(vn,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:n.density,icon:r.value,size:n.prominent?44:28}}},a.prepend):m(Vn,{key:"prepend-icon",density:n.density,icon:r.value,size:n.prominent?44:28},null)]),m("div",{class:"v-alert__content"},[S&&m(Sm,{key:"title"},{default:()=>{var F;return[((F=a.title)==null?void 0:F.call(a))??n.title]}}),((A=a.text)==null?void 0:A.call(a))??n.text,(w=a.default)==null?void 0:w.call(a)]),a.append&&m("div",{key:"append",class:"v-alert__append"},[a.append()]),E&&m("div",{key:"close",class:"v-alert__close"},[a.close?m(vn,{key:"close-defaults",defaults:{VBtn:{icon:n.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var F;return[(F=a.close)==null?void 0:F.call(a,{props:k.value})]}}):m(wn,z({key:"close-btn",icon:n.closeIcon,size:"x-small",variant:"text"},k.value),null)])]}})}}}),pc=T({start:Boolean,end:Boolean,icon:un,image:String,text:String,...ut(),...rn(),...Kn(),...Bn(),...Dt(),...xn(),...kn(),...kt({variant:"flat"})},"VAvatar"),yt=L()({name:"VAvatar",props:pc(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{borderClasses:i}=bt(n),{colorClasses:r,colorStyles:o,variantClasses:l}=ve(n),{densityClasses:s}=rt(n),{roundedClasses:u}=Ln(n),{sizeClasses:d,sizeStyles:p}=Le(n);return N(()=>m(n.tag,{class:["v-avatar",{"v-avatar--start":n.start,"v-avatar--end":n.end},a.value,i.value,r.value,s.value,u.value,d.value,l.value,n.class],style:[o.value,p.value,n.style]},{default:()=>[t.default?m(vn,{key:"content-defaults",defaults:{VImg:{cover:!0,src:n.image},VIcon:{icon:n.icon}}},{default:()=>[t.default()]}):n.image?m(Ot,{key:"image",src:n.image,alt:"",cover:!0},null):n.icon?m(Vn,{key:"icon",icon:n.icon},null):n.text,Qt(!1,"v-avatar")]})),{}}}),cc=T({text:String,onClick:qn(),...rn(),...kn()},"VLabel"),je=L()({name:"VLabel",props:cc(),setup(n,e){let{slots:t}=e;return N(()=>{var a;return m("label",{class:["v-label",{"v-label--clickable":!!n.onClick},n.class],style:n.style,onClick:n.onClick},[n.text,(a=t.default)==null?void 0:a.call(t)])}),{}}}),Fm=Symbol.for("vuetify:selection-control-group"),Or=T({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:un,trueIcon:un,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Jn},...rn(),...Kn(),...kn()},"SelectionControlGroup"),gc=T({...Or({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Cm=L()({name:"VSelectionControlGroup",props:gc(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),i=st(),r=B(()=>n.id||`v-selection-control-group-${i}`),o=B(()=>n.name||r.value),l=new Set;return An(Fm,{modelValue:a,forceUpdate:()=>{l.forEach(s=>s())},onForceUpdate:s=>{l.add(s),Xn(()=>{l.delete(s)})}}),$n({[n.defaultsTarget]:{color:B(()=>n.color),disabled:B(()=>n.disabled),density:B(()=>n.density),error:B(()=>n.error),inline:B(()=>n.inline),modelValue:a,multiple:B(()=>!!n.multiple||n.multiple==null&&Array.isArray(a.value)),name:o,falseIcon:B(()=>n.falseIcon),trueIcon:B(()=>n.trueIcon),readonly:B(()=>n.readonly),ripple:B(()=>n.ripple),type:B(()=>n.type),valueComparator:B(()=>n.valueComparator)}}),N(()=>{var s;return m("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":n.inline},n.class],style:n.style,role:n.type==="radio"?"radiogroup":void 0},[(s=t.default)==null?void 0:s.call(t)])}),{}}}),ni=T({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...rn(),...Or()},"VSelectionControl");function fc(n){const e=Sn(Fm,void 0),{densityClasses:t}=rt(n),a=sn(n,"modelValue"),i=y(()=>n.trueValue!==void 0?n.trueValue:n.value!==void 0?n.value:!0),r=y(()=>n.falseValue!==void 0?n.falseValue:!1),o=y(()=>!!n.multiple||n.multiple==null&&Array.isArray(a.value)),l=y({get(){const c=e?e.modelValue.value:a.value;return o.value?_n(c).some(g=>n.valueComparator(g,i.value)):n.valueComparator(c,i.value)},set(c){if(n.readonly)return;const g=c?i.value:r.value;let h=g;o.value&&(h=c?[..._n(a.value),g]:_n(a.value).filter(x=>!n.valueComparator(x,i.value))),e?e.modelValue.value=h:a.value=h}}),{textColorClasses:s,textColorStyles:u}=Qn(()=>{if(!(n.error||n.disabled))return l.value?n.color:n.baseColor}),{backgroundColorClasses:d,backgroundColorStyles:p}=En(()=>l.value&&!n.error&&!n.disabled?n.color:n.baseColor),f=y(()=>l.value?n.trueIcon:n.falseIcon);return{group:e,densityClasses:t,trueValue:i,falseValue:r,model:l,textColorClasses:s,textColorStyles:u,backgroundColorClasses:d,backgroundColorStyles:p,icon:f}}const Kt=L()({name:"VSelectionControl",directives:{Ripple:Ht},inheritAttrs:!1,props:ni(),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const{group:i,densityClasses:r,icon:o,model:l,textColorClasses:s,textColorStyles:u,backgroundColorClasses:d,backgroundColorStyles:p,trueValue:f}=fc(n),c=st(),g=X(!1),h=X(!1),x=U(),v=B(()=>n.id||`input-${c}`),b=B(()=>!n.disabled&&!n.readonly);i==null||i.onForceUpdate(()=>{x.value&&(x.value.checked=l.value)});function k(A){b.value&&(g.value=!0,Be(A.target,":focus-visible")!==!1&&(h.value=!0))}function C(){g.value=!1,h.value=!1}function S(A){A.stopPropagation()}function E(A){if(!b.value){x.value&&(x.value.checked=l.value);return}n.readonly&&i&&Fn(()=>i.forceUpdate()),l.value=A.target.checked}return N(()=>{var V,P;const A=a.label?a.label({label:n.label,props:{for:v.value}}):n.label,[w,F]=Jt(t),_=m("input",z({ref:x,checked:l.value,disabled:!!n.disabled,id:v.value,onBlur:C,onFocus:k,onInput:E,"aria-disabled":!!n.disabled,"aria-label":n.label,type:n.type,value:f.value,name:n.name,"aria-checked":n.type==="checkbox"?l.value:void 0},F),null);return m("div",z({class:["v-selection-control",{"v-selection-control--dirty":l.value,"v-selection-control--disabled":n.disabled,"v-selection-control--error":n.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":h.value,"v-selection-control--inline":n.inline},r.value,n.class]},w,{style:n.style}),[m("div",{class:["v-selection-control__wrapper",s.value],style:u.value},[(V=a.default)==null?void 0:V.call(a,{backgroundColorClasses:d,backgroundColorStyles:p}),Tn(m("div",{class:["v-selection-control__input"]},[((P=a.input)==null?void 0:P.call(a,{model:l,textColorClasses:s,textColorStyles:u,backgroundColorClasses:d,backgroundColorStyles:p,inputNode:_,icon:o.value,props:{onFocus:k,onBlur:C,id:v.value}}))??m(dn,null,[o.value&&m(Vn,{key:"icon",icon:o.value},null),_])]),[[ft("ripple"),n.ripple&&[!n.disabled&&!n.readonly,null,["center","circle"]]]])]),A&&m(je,{for:v.value,onClick:S},{default:()=>[A]})])}),{isFocused:g,input:x}}}),Vm=T({indeterminate:Boolean,indeterminateIcon:{type:un,default:"$checkboxIndeterminate"},...ni({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Lt=L()({name:"VCheckboxBtn",props:Vm(),emits:{"update:modelValue":n=>!0,"update:indeterminate":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"indeterminate"),i=sn(n,"modelValue");function r(s){a.value&&(a.value=!1)}const o=B(()=>a.value?n.indeterminateIcon:n.falseIcon),l=B(()=>a.value?n.indeterminateIcon:n.trueIcon);return N(()=>{const s=Rn(Kt.filterProps(n),["modelValue"]);return m(Kt,z(s,{modelValue:i.value,"onUpdate:modelValue":[u=>i.value=u,r],class:["v-checkbox-btn",n.class],style:n.style,type:"checkbox",falseIcon:o.value,trueIcon:l.value,"aria-checked":a.value?"mixed":void 0}),t)}),{}}});function Pm(n){const{t:e}=On();function t(a){let{name:i,color:r}=a;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],l=n[`onClick:${i}`];function s(d){d.key!=="Enter"&&d.key!==" "||(d.preventDefault(),d.stopPropagation(),Ya(l,new PointerEvent("click",d)))}const u=l&&o?e(`$vuetify.input.${o}`,n.label??""):void 0;return m(Vn,{icon:n[`${i}Icon`],"aria-label":u,onClick:l,onKeydown:s,color:r},null)}return{InputIcon:t}}const xc=T({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...rn(),...Ct({transition:{component:Dr,leaveAbsolute:!0,group:!0}})},"VMessages"),Im=L()({name:"VMessages",props:xc(),setup(n,e){let{slots:t}=e;const a=y(()=>_n(n.messages)),{textColorClasses:i,textColorStyles:r}=Qn(()=>n.color);return N(()=>m(at,{transition:n.transition,tag:"div",class:["v-messages",i.value,n.class],style:[r.value,n.style]},{default:()=>[n.active&&a.value.map((o,l)=>m("div",{class:"v-messages__message",key:`${l}-${a.value}`},[t.message?t.message({message:o}):o]))]})),{}}}),fa=T({focused:Boolean,"onUpdate:focused":qn()},"focus");function _t(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();const t=sn(n,"focused"),a=B(()=>({[`${e}--focused`]:t.value}));function i(){t.value=!0}function r(){t.value=!1}return{focusClasses:a,isFocused:t,focus:i,blur:r}}const Em=Symbol.for("vuetify:form"),vc=T({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function bc(n){const e=sn(n,"modelValue"),t=B(()=>n.disabled),a=B(()=>n.readonly),i=X(!1),r=U([]),o=U([]);async function l(){const d=[];let p=!0;o.value=[],i.value=!0;for(const f of r.value){const c=await f.validate();if(c.length>0&&(p=!1,d.push({id:f.id,errorMessages:c})),!p&&n.fastFail)break}return o.value=d,i.value=!1,{valid:p,errors:o.value}}function s(){r.value.forEach(d=>d.reset())}function u(){r.value.forEach(d=>d.resetValidation())}return tn(r,()=>{let d=0,p=0;const f=[];for(const c of r.value)c.isValid===!1?(p++,f.push({id:c.id,errorMessages:c.errorMessages})):c.isValid===!0&&d++;o.value=f,e.value=p>0?!1:d===r.value.length?!0:null},{deep:!0,flush:"post"}),An(Em,{register:d=>{let{id:p,vm:f,validate:c,reset:g,resetValidation:h}=d;r.value.some(x=>x.id===p),r.value.push({id:p,validate:c,reset:g,resetValidation:h,vm:Zd(f),isValid:null,errorMessages:[]})},unregister:d=>{r.value=r.value.filter(p=>p.id!==d)},update:(d,p,f)=>{const c=r.value.find(g=>g.id===d);c&&(c.isValid=p,c.errorMessages=f)},isDisabled:t,isReadonly:a,isValidating:i,isValid:e,items:r,validateOn:B(()=>n.validateOn)}),{errors:o,isDisabled:t,isReadonly:a,isValidating:i,isValid:e,items:r,validate:l,reset:s,resetValidation:u}}function xa(n){const e=Sn(Em,null);return{...e,isReadonly:y(()=>!!((n==null?void 0:n.readonly)??(e==null?void 0:e.isReadonly.value))),isDisabled:y(()=>!!((n==null?void 0:n.disabled)??(e==null?void 0:e.isDisabled.value)))}}const Am=T({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...fa()},"validation");function Bm(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:st();const a=sn(n,"modelValue"),i=y(()=>n.validationValue===void 0?a.value:n.validationValue),r=xa(n),o=U([]),l=X(!0),s=y(()=>!!(_n(a.value===""?null:a.value).length||_n(i.value===""?null:i.value).length)),u=y(()=>{var k;return(k=n.errorMessages)!=null&&k.length?_n(n.errorMessages).concat(o.value).slice(0,Math.max(0,Number(n.maxErrors))):o.value}),d=y(()=>{var S;let k=(n.validateOn??((S=r.validateOn)==null?void 0:S.value))||"input";k==="lazy"&&(k="input lazy"),k==="eager"&&(k="input eager");const C=new Set((k==null?void 0:k.split(" "))??[]);return{input:C.has("input"),blur:C.has("blur")||C.has("input")||C.has("invalid-input"),invalidInput:C.has("invalid-input"),lazy:C.has("lazy"),eager:C.has("eager")}}),p=y(()=>{var k;return n.error||(k=n.errorMessages)!=null&&k.length?!1:n.rules.length?l.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0}),f=X(!1),c=y(()=>({[`${e}--error`]:p.value===!1,[`${e}--dirty`]:s.value,[`${e}--disabled`]:r.isDisabled.value,[`${e}--readonly`]:r.isReadonly.value})),g=zn("validation"),h=y(()=>n.name??lt(t));ma(()=>{var k;(k=r.register)==null||k.call(r,{id:h.value,vm:g,validate:b,reset:x,resetValidation:v})}),tt(()=>{var k;(k=r.unregister)==null||k.call(r,h.value)}),it(async()=>{var k;d.value.lazy||await b(!d.value.eager),(k=r.update)==null||k.call(r,h.value,p.value,u.value)}),mt(()=>d.value.input||d.value.invalidInput&&p.value===!1,()=>{tn(i,()=>{if(i.value!=null)b();else if(n.focused){const k=tn(()=>n.focused,C=>{C||b(),k()})}})}),mt(()=>d.value.blur,()=>{tn(()=>n.focused,k=>{k||b()})}),tn([p,u],()=>{var k;(k=r.update)==null||k.call(r,h.value,p.value,u.value)});async function x(){a.value=null,await Fn(),await v()}async function v(){l.value=!0,d.value.lazy?o.value=[]:await b(!d.value.eager)}async function b(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const C=[];f.value=!0;for(const S of n.rules){if(C.length>=Number(n.maxErrors??1))break;const A=await(typeof S=="function"?S:()=>S)(i.value);if(A!==!0){if(A!==!1&&typeof A!="string"){console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);continue}C.push(A||"")}}return o.value=C,f.value=!1,l.value=k,o.value}return{errorMessages:u,isDirty:s,isDisabled:r.isDisabled,isReadonly:r.isReadonly,isPristine:l,isValid:p,isValidating:f,reset:x,resetValidation:v,validate:b,validationClasses:c}}const Wt=T({id:String,appendIcon:un,baseColor:String,centerAffix:{type:Boolean,default:!0},color:String,glow:Boolean,iconColor:[Boolean,String],prependIcon:un,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:n=>["horizontal","vertical"].includes(n)},"onClick:prepend":qn(),"onClick:append":qn(),...rn(),...Kn(),...Zt(Wn(),["maxWidth","minWidth","width"]),...kn(),...Am()},"VInput"),nt=L()({name:"VInput",props:{...Wt()},emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:a,emit:i}=e;const{densityClasses:r}=rt(n),{dimensionStyles:o}=Yn(n),{themeClasses:l}=Pn(n),{rtlClasses:s}=Hn(),{InputIcon:u}=Pm(n),d=st(),p=y(()=>n.id||`input-${d}`),f=y(()=>`${p.value}-messages`),{errorMessages:c,isDirty:g,isDisabled:h,isReadonly:x,isPristine:v,isValid:b,isValidating:k,reset:C,resetValidation:S,validate:E,validationClasses:A}=Bm(n,"v-input",p),w=y(()=>({id:p,messagesId:f,isDirty:g,isDisabled:h,isReadonly:x,isPristine:v,isValid:b,isValidating:k,reset:C,resetValidation:S,validate:E})),F=B(()=>n.error||n.disabled?void 0:n.focused?n.color:n.baseColor),_=B(()=>{if(n.iconColor)return n.iconColor===!0?F.value:n.iconColor}),V=y(()=>{var P;return(P=n.errorMessages)!=null&&P.length||!v.value&&c.value.length?c.value:n.hint&&(n.persistentHint||n.focused)?n.hint:n.messages});return N(()=>{var W,nn,Q,G;const P=!!(a.prepend||n.prependIcon),I=!!(a.append||n.appendIcon),M=V.value.length>0,j=!n.hideDetails||n.hideDetails==="auto"&&(M||!!a.details);return m("div",{class:["v-input",`v-input--${n.direction}`,{"v-input--center-affix":n.centerAffix,"v-input--focused":n.focused,"v-input--glow":n.glow,"v-input--hide-spin-buttons":n.hideSpinButtons},r.value,l.value,s.value,A.value,n.class],style:[o.value,n.style]},[P&&m("div",{key:"prepend",class:"v-input__prepend"},[(W=a.prepend)==null?void 0:W.call(a,w.value),n.prependIcon&&m(u,{key:"prepend-icon",name:"prepend",color:_.value},null)]),a.default&&m("div",{class:"v-input__control"},[(nn=a.default)==null?void 0:nn.call(a,w.value)]),I&&m("div",{key:"append",class:"v-input__append"},[n.appendIcon&&m(u,{key:"append-icon",name:"append",color:_.value},null),(Q=a.append)==null?void 0:Q.call(a,w.value)]),j&&m("div",{id:f.value,class:"v-input__details",role:"alert","aria-live":"polite"},[m(Im,{active:M,messages:V.value},{message:a.message}),(G=a.details)==null?void 0:G.call(a,w.value)])])}),{reset:C,resetValidation:S,validate:E,isValid:b,errorMessages:c}}}),hc=T({...Wt(),...Rn(Vm(),["inline"])},"VCheckbox"),yc=L()({name:"VCheckbox",inheritAttrs:!1,props:hc(),emits:{"update:modelValue":n=>!0,"update:focused":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const i=sn(n,"modelValue"),{isFocused:r,focus:o,blur:l}=_t(n),s=st();return N(()=>{const[u,d]=Jt(t),p=nt.filterProps(n),f=Lt.filterProps(n);return m(nt,z({class:["v-checkbox",n.class]},u,p,{modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,id:n.id||`checkbox-${s}`,focused:r.value,style:n.style}),{...a,default:c=>{let{id:g,messagesId:h,isDisabled:x,isReadonly:v,isValid:b}=c;return m(Lt,z(f,{id:g.value,"aria-describedby":h.value,disabled:x.value,readonly:v.value},d,{error:b.value===!1,modelValue:i.value,"onUpdate:modelValue":k=>i.value=k,onFocus:o,onBlur:l}),a)}})}),{}}}),ti=["sm","md","lg","xl","xxl"],Yi=Symbol.for("vuetify:display"),Zo={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},kc=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zo;return et(Zo,n)};function Jo(n){return Cn&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function Qo(n){return Cn&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function nl(n){const e=Cn&&!n?window.navigator.userAgent:"ssr";function t(g){return!!e.match(g)}const a=t(/android/i),i=t(/iphone|ipad|ipod/i),r=t(/cordova/i),o=t(/electron/i),l=t(/chrome/i),s=t(/edge/i),u=t(/firefox/i),d=t(/opera/i),p=t(/win/i),f=t(/mac/i),c=t(/linux/i);return{android:a,ios:i,cordova:r,electron:o,chrome:l,edge:s,firefox:u,opera:d,win:p,mac:f,linux:c,touch:ru,ssr:e==="ssr"}}function wc(n,e){const{thresholds:t,mobileBreakpoint:a}=kc(n),i=X(Qo(e)),r=X(nl(e)),o=dt({}),l=X(Jo(e));function s(){i.value=Qo(),l.value=Jo()}function u(){s(),r.value=nl()}return Mn(()=>{const d=l.value<t.sm,p=l.value<t.md&&!d,f=l.value<t.lg&&!(p||d),c=l.value<t.xl&&!(f||p||d),g=l.value<t.xxl&&!(c||f||p||d),h=l.value>=t.xxl,x=d?"xs":p?"sm":f?"md":c?"lg":g?"xl":"xxl",v=typeof a=="number"?a:t[a],b=l.value<v;o.xs=d,o.sm=p,o.md=f,o.lg=c,o.xl=g,o.xxl=h,o.smAndUp=!d,o.mdAndUp=!(d||p),o.lgAndUp=!(d||p||f),o.xlAndUp=!(d||p||f||c),o.smAndDown=!(f||c||g||h),o.mdAndDown=!(c||g||h),o.lgAndDown=!(g||h),o.xlAndDown=!h,o.name=x,o.height=i.value,o.width=l.value,o.mobile=b,o.mobileBreakpoint=a,o.platform=r.value,o.thresholds=t}),Cn&&(window.addEventListener("resize",s,{passive:!0}),Xn(()=>{window.removeEventListener("resize",s)},!0)),{...Oe(o),update:u,ssr:!!e}}const we=T({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function wt(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{mobile:null},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:At();const t=Sn(Yi);if(!t)throw new Error("Could not find Vuetify display injection");const a=y(()=>n.mobile?!0:typeof n.mobileBreakpoint=="number"?t.width.value<n.mobileBreakpoint:n.mobileBreakpoint?t.width.value<t.thresholds.value[n.mobileBreakpoint]:n.mobile===null?t.mobile.value:!1),i=B(()=>e?{[`${e}--mobile`]:a.value}:{});return{...t,displayClasses:i,mobile:a}}const Dm=Symbol.for("vuetify:goto");function _m(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:n=>n,easeInQuad:n=>n**2,easeOutQuad:n=>n*(2-n),easeInOutQuad:n=>n<.5?2*n**2:-1+(4-2*n)*n,easeInCubic:n=>n**3,easeOutCubic:n=>--n**3+1,easeInOutCubic:n=>n<.5?4*n**3:(n-1)*(2*n-2)*(2*n-2)+1,easeInQuart:n=>n**4,easeOutQuart:n=>1- --n**4,easeInOutQuart:n=>n<.5?8*n**4:1-8*--n**4,easeInQuint:n=>n**5,easeOutQuint:n=>1+--n**5,easeInOutQuint:n=>n<.5?16*n**5:1+16*--n**5}}}function Sc(n){return Lr(n)??(document.scrollingElement||document.body)}function Lr(n){return typeof n=="string"?document.querySelector(n):yr(n)}function wi(n,e,t){if(typeof n=="number")return e&&t?-n:n;let a=Lr(n),i=0;for(;a;)i+=e?a.offsetLeft:a.offsetTop,a=a.offsetParent;return i}function Fc(n,e){return{rtl:e.isRtl,options:et(_m(),n)}}async function tl(n,e,t,a){const i=t?"scrollLeft":"scrollTop",r=et((a==null?void 0:a.options)??_m(),e),o=a==null?void 0:a.rtl.value,l=(typeof n=="number"?n:Lr(n))??0,s=r.container==="parent"&&l instanceof HTMLElement?l.parentElement:Sc(r.container),u=typeof r.easing=="function"?r.easing:r.patterns[r.easing];if(!u)throw new TypeError(`Easing function "${r.easing}" not found.`);let d;if(typeof l=="number")d=wi(l,t,o);else if(d=wi(l,t,o)-wi(s,t,o),r.layout){const g=window.getComputedStyle(l).getPropertyValue("--v-layout-top");g&&(d-=parseInt(g,10))}d+=r.offset,d=Vc(s,d,!!o,!!t);const p=s[i]??0;if(d===p)return Promise.resolve(d);const f=performance.now();return new Promise(c=>requestAnimationFrame(function g(h){const v=(h-f)/r.duration,b=Math.floor(p+(d-p)*u(Dn(v,0,1)));if(s[i]=b,v>=1&&Math.abs(b-s[i])<10)return c(d);if(v>2)return c(s[i]);requestAnimationFrame(g)}))}function Cc(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=Sn(Dm),{isRtl:t}=Hn();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const a={...e,rtl:B(()=>e.rtl.value||t.value)};async function i(r,o){return tl(r,et(n,o),!1,a)}return i.horizontal=async(r,o)=>tl(r,et(n,o),!0,a),i}function Vc(n,e,t,a){const{scrollWidth:i,scrollHeight:r}=n,[o,l]=n===document.scrollingElement?[window.innerWidth,window.innerHeight]:[n.offsetWidth,n.offsetHeight];let s,u;return a?t?(s=-(i-o),u=0):(s=0,u=i-o):(s=0,u=r+-l),Math.max(Math.min(e,u),s)}function Pc(n){let{selectedElement:e,containerElement:t,isRtl:a,isHorizontal:i}=n;const r=ea(i,t),o=Tm(i,a,t),l=ea(i,e),s=Mm(i,e),u=l*.4;return o>s?s-u:o+r<s+l?s-r+l+u:o}function Ic(n){let{selectedElement:e,containerElement:t,isHorizontal:a}=n;const i=ea(a,t),r=Mm(a,e),o=ea(a,e);return r-i/2+o/2}function el(n,e){const t=n?"scrollWidth":"scrollHeight";return(e==null?void 0:e[t])||0}function Ec(n,e){const t=n?"clientWidth":"clientHeight";return(e==null?void 0:e[t])||0}function Tm(n,e,t){if(!t)return 0;const{scrollLeft:a,offsetWidth:i,scrollWidth:r}=t;return n?e?r-i+a:a:t.scrollTop}function ea(n,e){const t=n?"offsetWidth":"offsetHeight";return(e==null?void 0:e[t])||0}function Mm(n,e){const t=n?"offsetLeft":"offsetTop";return(e==null?void 0:e[t])||0}const Rm=Symbol.for("vuetify:v-slide-group"),zr=T({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Rm},nextIcon:{type:un,default:"$next"},prevIcon:{type:un,default:"$prev"},showArrows:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["always","desktop","mobile"].includes(n)},...rn(),...we({mobile:null}),...xn(),...be({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),aa=L()({name:"VSlideGroup",props:zr(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{isRtl:a}=Hn(),{displayClasses:i,mobile:r}=wt(n),o=ne(n,n.symbol),l=X(!1),s=X(0),u=X(0),d=X(0),p=y(()=>n.direction==="horizontal"),{resizeRef:f,contentRect:c}=St(),{resizeRef:g,contentRect:h}=St(),x=Cc(),v=y(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),b=y(()=>o.selected.value.length?o.items.value.findIndex(D=>D.id===o.selected.value[0]):-1),k=y(()=>o.selected.value.length?o.items.value.findIndex(D=>D.id===o.selected.value[o.selected.value.length-1]):-1);if(Cn){let D=-1;tn(()=>[o.selected.value,c.value,h.value,p.value],()=>{cancelAnimationFrame(D),D=requestAnimationFrame(()=>{if(c.value&&h.value){const $=p.value?"width":"height";u.value=c.value[$],d.value=h.value[$],l.value=u.value+1<d.value}if(b.value>=0&&g.el){const $=g.el.children[k.value];S($,n.centerActive)}})})}const C=X(!1);function S(D,$){let K=0;$?K=Ic({containerElement:f.el,isHorizontal:p.value,selectedElement:D}):K=Pc({containerElement:f.el,isHorizontal:p.value,isRtl:a.value,selectedElement:D}),E(K)}function E(D){if(!Cn||!f.el)return;const $=ea(p.value,f.el),K=Tm(p.value,a.value,f.el);if(!(el(p.value,f.el)<=$||Math.abs(D-K)<16)){if(p.value&&a.value&&f.el){const{scrollWidth:ln,offsetWidth:Z}=f.el;D=ln-Z-D}p.value?x.horizontal(D,v.value):x(D,v.value)}}function A(D){const{scrollTop:$,scrollLeft:K}=D.target;s.value=p.value?K:$}function w(D){if(C.value=!0,!(!l.value||!g.el)){for(const $ of D.composedPath())for(const K of g.el.children)if(K===$){S(K);return}}}function F(D){C.value=!1}let _=!1;function V(D){var $;!_&&!C.value&&!(D.relatedTarget&&(($=g.el)!=null&&$.contains(D.relatedTarget)))&&j(),_=!1}function P(){_=!0}function I(D){if(!g.el)return;function $(K){D.preventDefault(),j(K)}p.value?D.key==="ArrowRight"?$(a.value?"prev":"next"):D.key==="ArrowLeft"&&$(a.value?"next":"prev"):D.key==="ArrowDown"?$("next"):D.key==="ArrowUp"&&$("prev"),D.key==="Home"?$("first"):D.key==="End"&&$("last")}function M(D,$){if(!D)return;let K=D;do K=K==null?void 0:K[$==="next"?"nextElementSibling":"previousElementSibling"];while(K!=null&&K.hasAttribute("disabled"));return K}function j(D){if(!g.el)return;let $;if(!D)$=qe(g.el)[0];else if(D==="next"){if($=M(g.el.querySelector(":focus"),D),!$)return j("first")}else if(D==="prev"){if($=M(g.el.querySelector(":focus"),D),!$)return j("last")}else D==="first"?($=g.el.firstElementChild,$!=null&&$.hasAttribute("disabled")&&($=M($,"next"))):D==="last"&&($=g.el.lastElementChild,$!=null&&$.hasAttribute("disabled")&&($=M($,"prev")));$&&$.focus({preventScroll:!0})}function W(D){const $=p.value&&a.value?-1:1,K=(D==="prev"?-$:$)*u.value;let J=s.value+K;if(p.value&&a.value&&f.el){const{scrollWidth:ln,offsetWidth:Z}=f.el;J+=ln-Z}E(J)}const nn=y(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),Q=y(()=>{switch(n.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return l.value||Math.abs(s.value)>0;case"mobile":return r.value||l.value||Math.abs(s.value)>0;default:return!r.value&&(l.value||Math.abs(s.value)>0)}}),G=y(()=>Math.abs(s.value)>1),R=y(()=>{if(!f.value)return!1;const D=el(p.value,f.el),$=Ec(p.value,f.el);return D-$-Math.abs(s.value)>1});return N(()=>m(n.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":Q.value,"v-slide-group--is-overflowing":l.value},i.value,n.class],style:n.style,tabindex:C.value||o.selected.value.length?-1:0,onFocus:V},{default:()=>{var D,$,K;return[Q.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!G.value}],onMousedown:P,onClick:()=>G.value&&W("prev")},[((D=t.prev)==null?void 0:D.call(t,nn.value))??m(Qe,null,{default:()=>[m(Vn,{icon:a.value?n.nextIcon:n.prevIcon},null)]})]),m("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:A},[m("div",{ref:g,class:"v-slide-group__content",onFocusin:w,onFocusout:F,onKeydown:I},[($=t.default)==null?void 0:$.call(t,nn.value)])]),Q.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!R.value}],onMousedown:P,onClick:()=>R.value&&W("next")},[((K=t.next)==null?void 0:K.call(t,nn.value))??m(Qe,null,{default:()=>[m(Vn,{icon:a.value?n.prevIcon:n.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:W,scrollOffset:s,focus:j,hasPrev:G,hasNext:R}}}),$m=Symbol.for("vuetify:v-chip-group"),Ac=T({baseColor:String,column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Jn},...zr(),...rn(),...be({selectedClass:"v-chip--selected"}),...xn(),...kn(),...kt({variant:"tonal"})},"VChipGroup"),Bc=L()({name:"VChipGroup",props:Ac(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{isSelected:i,select:r,next:o,prev:l,selected:s}=ne(n,$m);return $n({VChip:{baseColor:B(()=>n.baseColor),color:B(()=>n.color),disabled:B(()=>n.disabled),filter:B(()=>n.filter),variant:B(()=>n.variant)}}),N(()=>{const u=aa.filterProps(n);return m(aa,z(u,{class:["v-chip-group",{"v-chip-group--column":n.column},a.value,n.class],style:n.style}),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{isSelected:i,select:r,next:o,prev:l,selected:s.value})]}})}),{}}}),Dc=T({activeClass:String,appendAvatar:String,appendIcon:un,baseColor:String,closable:Boolean,closeIcon:{type:un,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:un,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:un,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},modelValue:{type:Boolean,default:!0},onClick:qn(),onClickOnce:qn(),...ut(),...rn(),...Kn(),...Gn(),...he(),...Bn(),...ga(),...Dt(),...xn({tag:"span"}),...kn(),...kt({variant:"tonal"})},"VChip"),He=L()({name:"VChip",directives:{Ripple:Ht},props:Dc(),emits:{"click:close":n=>!0,"update:modelValue":n=>!0,"group:selected":n=>!0,click:n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{t:r}=On(),{borderClasses:o}=bt(n),{densityClasses:l}=rt(n),{elevationClasses:s}=Zn(n),{roundedClasses:u}=Ln(n),{sizeClasses:d}=Le(n),{themeClasses:p}=Pn(n),f=sn(n,"modelValue"),c=ye(n,$m,!1),g=ca(n,t),h=B(()=>n.link!==!1&&g.isLink.value),x=y(()=>!n.disabled&&n.link!==!1&&(!!c||n.link||g.isClickable.value)),v=B(()=>({"aria-label":r(n.closeLabel),onClick(A){A.preventDefault(),A.stopPropagation(),f.value=!1,a("click:close",A)}})),{colorClasses:b,colorStyles:k,variantClasses:C}=ve(()=>({color:!c||c.isSelected.value?n.color??n.baseColor:n.baseColor,variant:n.variant}));function S(A){var w;a("click",A),x.value&&((w=g.navigate)==null||w.call(g,A),c==null||c.toggle())}function E(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),S(A))}return()=>{var M;const A=g.isLink.value?"a":n.tag,w=!!(n.appendIcon||n.appendAvatar),F=!!(w||i.append),_=!!(i.close||n.closable),V=!!(i.filter||n.filter)&&c,P=!!(n.prependIcon||n.prependAvatar),I=!!(P||i.prepend);return f.value&&Tn(m(A,z({class:["v-chip",{"v-chip--disabled":n.disabled,"v-chip--label":n.label,"v-chip--link":x.value,"v-chip--filter":V,"v-chip--pill":n.pill,[`${n.activeClass}`]:n.activeClass&&((M=g.isActive)==null?void 0:M.value)},p.value,o.value,b.value,l.value,s.value,u.value,d.value,C.value,c==null?void 0:c.selectedClass.value,n.class],style:[k.value,n.style],disabled:n.disabled||void 0,draggable:n.draggable,tabindex:x.value?0:void 0,onClick:S,onKeydown:x.value&&!h.value&&E},g.linkProps),{default:()=>{var j;return[Qt(x.value,"v-chip"),V&&m(_r,{key:"filter"},{default:()=>[Tn(m("div",{class:"v-chip__filter"},[i.filter?m(vn,{key:"filter-defaults",disabled:!n.filterIcon,defaults:{VIcon:{icon:n.filterIcon}}},i.filter):m(Vn,{key:"filter-icon",icon:n.filterIcon},null)]),[[Ft,c.isSelected.value]])]}),I&&m("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?m(vn,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{image:n.prependAvatar,start:!0},VIcon:{icon:n.prependIcon,start:!0}}},i.prepend):m(dn,null,[n.prependIcon&&m(Vn,{key:"prepend-icon",icon:n.prependIcon,start:!0},null),n.prependAvatar&&m(yt,{key:"prepend-avatar",image:n.prependAvatar,start:!0},null)])]),m("div",{class:"v-chip__content","data-no-activator":""},[((j=i.default)==null?void 0:j.call(i,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:n.disabled}))??$t(n.text)]),F&&m("div",{key:"append",class:"v-chip__append"},[i.append?m(vn,{key:"append-defaults",disabled:!w,defaults:{VAvatar:{end:!0,image:n.appendAvatar},VIcon:{end:!0,icon:n.appendIcon}}},i.append):m(dn,null,[n.appendIcon&&m(Vn,{key:"append-icon",end:!0,icon:n.appendIcon},null),n.appendAvatar&&m(yt,{key:"append-avatar",end:!0,image:n.appendAvatar},null)])]),_&&m("button",z({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},v.value),[i.close?m(vn,{key:"close-defaults",defaults:{VIcon:{icon:n.closeIcon,size:"x-small"}}},i.close):m(Vn,{key:"close-icon",icon:n.closeIcon,size:"x-small"},null)])]}}),[[ft("ripple"),x.value&&n.ripple,null]])}}}),Gi=Symbol.for("vuetify:list");function Om(){const n=Sn(Gi,{hasPrepend:X(!1),updateHasPrepend:()=>null}),e={hasPrepend:X(!1),updateHasPrepend:t=>{t&&(e.hasPrepend.value=t)}};return An(Gi,e),n}function Lm(){return Sn(Gi,null)}const Nr=n=>{const e={activate:t=>{let{id:a,value:i,activated:r}=t;return a=Nn(a),n&&!i&&r.size===1&&r.has(a)||(i?r.add(a):r.delete(a)),r},in:(t,a,i)=>{let r=new Set;if(t!=null)for(const o of _n(t))r=e.activate({id:o,value:!0,activated:new Set(r),children:a,parents:i});return r},out:t=>Array.from(t)};return e},zm=n=>{const e=Nr(n);return{activate:a=>{let{activated:i,id:r,...o}=a;r=Nn(r);const l=i.has(r)?new Set([r]):new Set;return e.activate({...o,id:r,activated:l})},in:(a,i,r)=>{let o=new Set;if(a!=null){const l=_n(a);l.length&&(o=e.in(l.slice(0,1),i,r))}return o},out:(a,i,r)=>e.out(a,i,r)}},_c=n=>{const e=Nr(n);return{activate:a=>{let{id:i,activated:r,children:o,...l}=a;return i=Nn(i),o.has(i)?r:e.activate({id:i,activated:r,children:o,...l})},in:e.in,out:e.out}},Tc=n=>{const e=zm(n);return{activate:a=>{let{id:i,activated:r,children:o,...l}=a;return i=Nn(i),o.has(i)?r:e.activate({id:i,activated:r,children:o,...l})},in:e.in,out:e.out}},Mc={open:n=>{let{id:e,value:t,opened:a,parents:i}=n;if(t){const r=new Set;r.add(e);let o=i.get(e);for(;o!=null;)r.add(o),o=i.get(o);return r}else return a.delete(e),a},select:()=>null},Nm={open:n=>{let{id:e,value:t,opened:a,parents:i}=n;if(t){let r=i.get(e);for(a.add(e);r!=null&&r!==e;)a.add(r),r=i.get(r);return a}else a.delete(e);return a},select:()=>null},Rc={open:Nm.open,select:n=>{let{id:e,value:t,opened:a,parents:i}=n;if(!t)return a;const r=[];let o=i.get(e);for(;o!=null;)r.push(o),o=i.get(o);return new Set(r)}},jr=n=>{const e={select:t=>{let{id:a,value:i,selected:r}=t;if(a=Nn(a),n&&!i){const o=Array.from(r.entries()).reduce((l,s)=>{let[u,d]=s;return d==="on"&&l.push(u),l},[]);if(o.length===1&&o[0]===a)return r}return r.set(a,i?"on":"off"),r},in:(t,a,i)=>{const r=new Map;for(const o of t||[])e.select({id:o,value:!0,selected:r,children:a,parents:i});return r},out:t=>{const a=[];for(const[i,r]of t.entries())r==="on"&&a.push(i);return a}};return e},jm=n=>{const e=jr(n);return{select:a=>{let{selected:i,id:r,...o}=a;r=Nn(r);const l=i.has(r)?new Map([[r,i.get(r)]]):new Map;return e.select({...o,id:r,selected:l})},in:(a,i,r)=>a!=null&&a.length?e.in(a.slice(0,1),i,r):new Map,out:(a,i,r)=>e.out(a,i,r)}},$c=n=>{const e=jr(n);return{select:a=>{let{id:i,selected:r,children:o,...l}=a;return i=Nn(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...l})},in:e.in,out:e.out}},Oc=n=>{const e=jm(n);return{select:a=>{let{id:i,selected:r,children:o,...l}=a;return i=Nn(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...l})},in:e.in,out:e.out}},Hm=n=>{const e={select:t=>{let{id:a,value:i,selected:r,children:o,parents:l}=t;a=Nn(a);const s=new Map(r),u=[a];for(;u.length;){const p=u.shift();r.set(Nn(p),i?"on":"off"),o.has(p)&&u.push(...o.get(p))}let d=Nn(l.get(a));for(;d;){const p=o.get(d),f=p.every(g=>r.get(Nn(g))==="on"),c=p.every(g=>!r.has(Nn(g))||r.get(Nn(g))==="off");r.set(d,f?"on":c?"off":"indeterminate"),d=Nn(l.get(d))}return n&&!i&&Array.from(r.entries()).reduce((f,c)=>{let[g,h]=c;return h==="on"&&f.push(g),f},[]).length===0?s:r},in:(t,a,i)=>{let r=new Map;for(const o of t||[])r=e.select({id:o,value:!0,selected:r,children:a,parents:i});return r},out:(t,a)=>{const i=[];for(const[r,o]of t.entries())o==="on"&&!a.has(r)&&i.push(r);return i}};return e},Lc=n=>{const e=Hm(n);return{select:e.select,in:e.in,out:(a,i,r)=>{const o=[];for(const[l,s]of a.entries())if(s==="on"){if(r.has(l)){const u=r.get(l);if(a.get(u)==="on")continue}o.push(l)}return o}}},ia=Symbol.for("vuetify:nested"),Wm={id:X(),root:{register:()=>null,unregister:()=>null,parents:U(new Map),children:U(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:U(!1),selectable:U(!1),opened:U(new Set),activated:U(new Set),selected:U(new Map),selectedValues:U([]),getPath:()=>[]}},zc=T({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Nc=n=>{let e=!1;const t=U(new Map),a=U(new Map),i=sn(n,"opened",n.opened,g=>new Set(g),g=>[...g.values()]),r=y(()=>{if(typeof n.activeStrategy=="object")return n.activeStrategy;if(typeof n.activeStrategy=="function")return n.activeStrategy(n.mandatory);switch(n.activeStrategy){case"leaf":return _c(n.mandatory);case"single-leaf":return Tc(n.mandatory);case"independent":return Nr(n.mandatory);case"single-independent":default:return zm(n.mandatory)}}),o=y(()=>{if(typeof n.selectStrategy=="object")return n.selectStrategy;if(typeof n.selectStrategy=="function")return n.selectStrategy(n.mandatory);switch(n.selectStrategy){case"single-leaf":return Oc(n.mandatory);case"leaf":return $c(n.mandatory);case"independent":return jr(n.mandatory);case"single-independent":return jm(n.mandatory);case"trunk":return Lc(n.mandatory);case"classic":default:return Hm(n.mandatory)}}),l=y(()=>{if(typeof n.openStrategy=="object")return n.openStrategy;switch(n.openStrategy){case"list":return Rc;case"single":return Mc;case"multiple":default:return Nm}}),s=sn(n,"activated",n.activated,g=>r.value.in(g,t.value,a.value),g=>r.value.out(g,t.value,a.value)),u=sn(n,"selected",n.selected,g=>o.value.in(g,t.value,a.value),g=>o.value.out(g,t.value,a.value));tt(()=>{e=!0});function d(g){const h=[];let x=g;for(;x!=null;)h.unshift(x),x=a.value.get(x);return h}const p=zn("nested"),f=new Set,c={id:X(),root:{opened:i,activatable:B(()=>n.activatable),selectable:B(()=>n.selectable),activated:s,selected:u,selectedValues:y(()=>{const g=[];for(const[h,x]of u.value.entries())x==="on"&&g.push(h);return g}),register:(g,h,x)=>{if(f.has(g)){d(g).map(String).join(" -> "),d(h).concat(g).map(String).join(" -> ");return}else f.add(g);h&&g!==h&&a.value.set(g,h),x&&t.value.set(g,[]),h!=null&&t.value.set(h,[...t.value.get(h)||[],g])},unregister:g=>{if(e)return;f.delete(g),t.value.delete(g);const h=a.value.get(g);if(h){const x=t.value.get(h)??[];t.value.set(h,x.filter(v=>v!==g))}a.value.delete(g)},open:(g,h,x)=>{p.emit("click:open",{id:g,value:h,path:d(g),event:x});const v=l.value.open({id:g,value:h,opened:new Set(i.value),children:t.value,parents:a.value,event:x});v&&(i.value=v)},openOnSelect:(g,h,x)=>{const v=l.value.select({id:g,value:h,selected:new Map(u.value),opened:new Set(i.value),children:t.value,parents:a.value,event:x});v&&(i.value=v)},select:(g,h,x)=>{p.emit("click:select",{id:g,value:h,path:d(g),event:x});const v=o.value.select({id:g,value:h,selected:new Map(u.value),children:t.value,parents:a.value,event:x});v&&(u.value=v),c.root.openOnSelect(g,h,x)},activate:(g,h,x)=>{if(!n.activatable)return c.root.select(g,!0,x);p.emit("click:activate",{id:g,value:h,path:d(g),event:x});const v=r.value.activate({id:g,value:h,activated:new Set(s.value),children:t.value,parents:a.value,event:x});if(v.size!==s.value.size)s.value=v;else{for(const b of v)if(!s.value.has(b)){s.value=v;return}for(const b of s.value)if(!v.has(b)){s.value=v;return}}},children:t,parents:a,getPath:d}};return An(ia,c),c.root},Ym=(n,e)=>{const t=Sn(ia,Wm),a=Symbol("nested item"),i=y(()=>Rt(n)??a),r={...t,id:i,open:(o,l)=>t.root.open(i.value,o,l),openOnSelect:(o,l)=>t.root.openOnSelect(i.value,o,l),isOpen:y(()=>t.root.opened.value.has(i.value)),parent:y(()=>t.root.parents.value.get(i.value)),activate:(o,l)=>t.root.activate(i.value,o,l),isActivated:y(()=>t.root.activated.value.has(Nn(i.value))),select:(o,l)=>t.root.select(i.value,o,l),isSelected:y(()=>t.root.selected.value.get(Nn(i.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(Nn(i.value))==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return ma(()=>{!t.isGroupActivator&&t.root.register(i.value,t.id.value,e)}),tt(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),e&&An(ia,r),r},jc=()=>{const n=Sn(ia,Wm);An(ia,{...n,isGroupActivator:!0})},Hc=xt({name:"VListGroupActivator",setup(n,e){let{slots:t}=e;return jc(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Wc=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:un,default:"$collapse"},expandIcon:{type:un,default:"$expand"},prependIcon:un,appendIcon:un,fluid:Boolean,subgroup:Boolean,title:String,value:null,...rn(),...xn()},"VListGroup"),Ui=L()({name:"VListGroup",props:Wc(),setup(n,e){let{slots:t}=e;const{isOpen:a,open:i,id:r}=Ym(()=>n.value,!0),o=y(()=>`v-list-group--id-${String(r.value)}`),l=Lm(),{isBooted:s}=xe();function u(c){var g;c.stopPropagation(),!["INPUT","TEXTAREA"].includes((g=c.target)==null?void 0:g.tagName)&&i(!a.value,c)}const d=y(()=>({onClick:u,class:"v-list-group__header",id:o.value})),p=y(()=>a.value?n.collapseIcon:n.expandIcon),f=y(()=>({VListItem:{active:a.value,activeColor:n.activeColor,baseColor:n.baseColor,color:n.color,prependIcon:n.prependIcon||n.subgroup&&p.value,appendIcon:n.appendIcon||!n.subgroup&&p.value,title:n.title,value:n.value}}));return N(()=>m(n.tag,{class:["v-list-group",{"v-list-group--prepend":l==null?void 0:l.hasPrepend.value,"v-list-group--fluid":n.fluid,"v-list-group--subgroup":n.subgroup,"v-list-group--open":a.value},n.class],style:n.style},{default:()=>[t.activator&&m(vn,{defaults:f.value},{default:()=>[m(Hc,null,{default:()=>[t.activator({props:d.value,isOpen:a.value})]})]}),m(at,{transition:{component:Ka},disabled:!s.value},{default:()=>{var c;return[Tn(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(c=t.default)==null?void 0:c.call(t)]),[[Ft,a.value]])]}})]})),{isOpen:a}}}),Yc=T({opacity:[Number,String],...rn(),...xn()},"VListItemSubtitle"),Gm=L()({name:"VListItemSubtitle",props:Yc(),setup(n,e){let{slots:t}=e;return N(()=>m(n.tag,{class:["v-list-item-subtitle",n.class],style:[{"--v-list-item-subtitle-opacity":n.opacity},n.style]},t)),{}}}),Um=Bt("v-list-item-title"),Gc=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:un,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:un,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},value:null,onClick:qn(),onClickOnce:qn(),...ut(),...rn(),...Kn(),...Wn(),...Gn(),...Bn(),...ga(),...xn(),...kn(),...kt({variant:"text"})},"VListItem"),zt=L()({name:"VListItem",directives:{Ripple:Ht},props:Gc(),emits:{click:n=>!0},setup(n,e){let{attrs:t,slots:a,emit:i}=e;const r=ca(n,t),o=y(()=>n.value===void 0?r.href.value:n.value),{activate:l,isActivated:s,select:u,isOpen:d,isSelected:p,isIndeterminate:f,isGroupActivator:c,root:g,parent:h,openOnSelect:x,id:v}=Ym(o,!1),b=Lm(),k=y(()=>{var J;return n.active!==!1&&(n.active||((J=r.isActive)==null?void 0:J.value)||(g.activatable.value?s.value:p.value))}),C=B(()=>n.link!==!1&&r.isLink.value),S=y(()=>!!b&&(g.selectable.value||g.activatable.value||n.value!=null)),E=y(()=>!n.disabled&&n.link!==!1&&(n.link||r.isClickable.value||S.value)),A=B(()=>n.rounded||n.nav),w=B(()=>n.color??n.activeColor),F=B(()=>({color:k.value?w.value??n.baseColor:n.baseColor,variant:n.variant}));tn(()=>{var J;return(J=r.isActive)==null?void 0:J.value},J=>{J&&_()}),ma(()=>{var J;(J=r.isActive)!=null&&J.value&&_()});function _(){h.value!=null&&g.open(h.value,!0),x(!0)}const{themeClasses:V}=Pn(n),{borderClasses:P}=bt(n),{colorClasses:I,colorStyles:M,variantClasses:j}=ve(F),{densityClasses:W}=rt(n),{dimensionStyles:nn}=Yn(n),{elevationClasses:Q}=Zn(n),{roundedClasses:G}=Ln(A),R=B(()=>n.lines?`v-list-item--${n.lines}-line`:void 0),D=y(()=>({isActive:k.value,select:u,isOpen:d.value,isSelected:p.value,isIndeterminate:f.value}));function $(J){var ln,Z;i("click",J),!["INPUT","TEXTAREA"].includes((ln=J.target)==null?void 0:ln.tagName)&&E.value&&((Z=r.navigate)==null||Z.call(r,J),!c&&(g.activatable.value?l(!s.value,J):(g.selectable.value||n.value!=null)&&u(!p.value,J)))}function K(J){const ln=J.target;["INPUT","TEXTAREA"].includes(ln.tagName)||(J.key==="Enter"||J.key===" ")&&(J.preventDefault(),J.target.dispatchEvent(new MouseEvent("click",J)))}return N(()=>{const J=C.value?"a":n.tag,ln=a.title||n.title!=null,Z=a.subtitle||n.subtitle!=null,q=!!(n.appendAvatar||n.appendIcon),mn=!!(q||a.append),fn=!!(n.prependAvatar||n.prependIcon),Y=!!(fn||a.prepend);return b==null||b.updateHasPrepend(Y),n.activeColor&&Pu("active-color",["color","base-color"]),Tn(m(J,z({class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":n.disabled,"v-list-item--link":E.value,"v-list-item--nav":n.nav,"v-list-item--prepend":!Y&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":n.slim,[`${n.activeClass}`]:n.activeClass&&k.value},V.value,P.value,I.value,W.value,Q.value,R.value,G.value,j.value,n.class],style:[M.value,nn.value,n.style],tabindex:E.value?b?-2:0:void 0,"aria-selected":S.value?g.activatable.value?s.value:g.selectable.value?p.value:k.value:void 0,onClick:$,onKeydown:E.value&&!C.value&&K},r.linkProps),{default:()=>{var on;return[Qt(E.value||k.value,"v-list-item"),Y&&m("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?m(vn,{key:"prepend-defaults",disabled:!fn,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var H;return[(H=a.prepend)==null?void 0:H.call(a,D.value)]}}):m(dn,null,[n.prependAvatar&&m(yt,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&m(Vn,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[ln&&m(Um,{key:"title"},{default:()=>{var H;return[((H=a.title)==null?void 0:H.call(a,{title:n.title}))??$t(n.title)]}}),Z&&m(Gm,{key:"subtitle"},{default:()=>{var H;return[((H=a.subtitle)==null?void 0:H.call(a,{subtitle:n.subtitle}))??$t(n.subtitle)]}}),(on=a.default)==null?void 0:on.call(a,D.value)]),mn&&m("div",{key:"append",class:"v-list-item__append"},[a.append?m(vn,{key:"append-defaults",disabled:!q,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var H;return[(H=a.append)==null?void 0:H.call(a,D.value)]}}):m(dn,null,[n.appendIcon&&m(Vn,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&m(yt,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[ft("ripple"),E.value&&n.ripple]])}),{activate:l,isActivated:s,isGroupActivator:c,isSelected:p,list:b,select:u,root:g,id:v,link:r}}}),Uc=T({color:String,inset:Boolean,sticky:Boolean,title:String,...rn(),...xn()},"VListSubheader"),Km=L()({name:"VListSubheader",props:Uc(),setup(n,e){let{slots:t}=e;const{textColorClasses:a,textColorStyles:i}=Qn(()=>n.color);return N(()=>{const r=!!(t.default||n.title);return m(n.tag,{class:["v-list-subheader",{"v-list-subheader--inset":n.inset,"v-list-subheader--sticky":n.sticky},a.value,n.class],style:[{textColorStyles:i},n.style]},{default:()=>{var o;return[r&&m("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??n.title])]}})}),{}}}),Kc=T({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...rn(),...kn()},"VDivider"),Mt=L()({name:"VDivider",props:Kc(),setup(n,e){let{attrs:t,slots:a}=e;const{themeClasses:i}=Pn(n),{textColorClasses:r,textColorStyles:o}=Qn(()=>n.color),l=y(()=>{const s={};return n.length&&(s[n.vertical?"height":"width"]=an(n.length)),n.thickness&&(s[n.vertical?"borderRightWidth":"borderTopWidth"]=an(n.thickness)),s});return N(()=>{const s=m("hr",{class:[{"v-divider":!0,"v-divider--inset":n.inset,"v-divider--vertical":n.vertical},i.value,r.value,n.class],style:[l.value,o.value,{"--v-border-opacity":n.opacity},n.style],"aria-orientation":!t.role||t.role==="separator"?n.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return a.default?m("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":n.vertical,"v-divider__wrapper--inset":n.inset}]},[s,m("div",{class:"v-divider__content"},[a.default()]),s]):s}),{}}}),qc=T({items:Array,returnObject:Boolean},"VListChildren"),qm=L()({name:"VListChildren",props:qc(),setup(n,e){let{slots:t}=e;return Om(),()=>{var a,i;return((a=t.default)==null?void 0:a.call(t))??((i=n.items)==null?void 0:i.map(r=>{var f,c;let{children:o,props:l,type:s,raw:u}=r;if(s==="divider")return((f=t.divider)==null?void 0:f.call(t,{props:l}))??m(Mt,l,null);if(s==="subheader")return((c=t.subheader)==null?void 0:c.call(t,{props:l}))??m(Km,l,null);const d={subtitle:t.subtitle?g=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...g,item:u})}:void 0,prepend:t.prepend?g=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...g,item:u})}:void 0,append:t.append?g=>{var h;return(h=t.append)==null?void 0:h.call(t,{...g,item:u})}:void 0,title:t.title?g=>{var h;return(h=t.title)==null?void 0:h.call(t,{...g,item:u})}:void 0},p=Ui.filterProps(l);return o?m(Ui,z({value:l==null?void 0:l.value},p),{activator:g=>{let{props:h}=g;const x={...l,...h,value:n.returnObject?u:l.value};return t.header?t.header({props:x}):m(zt,x,d)},default:()=>m(qm,{items:o,returnObject:n.returnObject},t)}):t.item?t.item({props:l}):m(zt,z(l,{value:n.returnObject?u:l.value}),d)}))}}}),Xm=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function Yt(n,e){const t=jn(e,n.itemTitle,e),a=jn(e,n.itemValue,t),i=jn(e,n.itemChildren),r=n.itemProps===!0?typeof e=="object"&&e!=null&&!Array.isArray(e)?"children"in e?Rn(e,["children"]):e:void 0:jn(e,n.itemProps),o={title:t,value:a,...r};return{title:String(o.title??""),value:o.value,props:o,children:Array.isArray(i)?Zm(n,i):void 0,raw:e}}function Zm(n,e){const t=Zt(n,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),a=[];for(const i of e)a.push(Yt(t,i));return a}function Hr(n){const e=y(()=>Zm(n,n.items)),t=y(()=>e.value.some(l=>l.value===null)),a=X(new Map),i=X([]);Mn(()=>{const l=e.value,s=new Map,u=[];for(let d=0;d<l.length;d++){const p=l[d];if(Ll(p.value)||p.value===null){let f=s.get(p.value);f||(f=[],s.set(p.value,f)),f.push(p)}else u.push(p)}a.value=s,i.value=u});function r(l){const s=a.value,u=e.value,d=i.value,p=t.value,f=n.returnObject,c=!!n.valueComparator,g=n.valueComparator||Jn,h=Zt(n,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),x=[];n:for(const v of l){if(!p&&v===null)continue;if(f&&typeof v=="string"){x.push(Yt(h,v));continue}const b=s.get(v);if(c||!b){for(const k of c?u:d)if(g(v,k.value)){x.push(k);continue n}x.push(Yt(h,v));continue}x.push(...b)}return x}function o(l){return n.returnObject?l.map(s=>{let{raw:u}=s;return u}):l.map(s=>{let{value:u}=s;return u})}return{items:e,transformIn:r,transformOut:o}}function Xc(n,e){const t=jn(e,n.itemType,"item"),a=Ll(e)?e:jn(e,n.itemTitle),i=jn(e,n.itemValue,void 0),r=jn(e,n.itemChildren),o=n.itemProps===!0?Rn(e,["children"]):jn(e,n.itemProps),l={title:a,value:i,...o};return{type:t,title:l.title,value:l.value,props:l,children:t==="item"&&r?Jm(n,r):void 0,raw:e}}function Jm(n,e){const t=[];for(const a of e)t.push(Xc(n,a));return t}function Zc(n){return{items:y(()=>Jm(n,n.items))}}const Jc=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:un,collapseIcon:un,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":qn(),"onClick:select":qn(),"onUpdate:opened":qn(),...zc({selectStrategy:"single-leaf",openStrategy:"list"}),...ut(),...rn(),...Kn(),...Wn(),...Gn(),itemType:{type:String,default:"type"},...Xm(),...Bn(),...xn(),...kn(),...kt({variant:"text"})},"VList"),ei=L()({name:"VList",props:Jc(),emits:{"update:selected":n=>!0,"update:activated":n=>!0,"update:opened":n=>!0,"click:open":n=>!0,"click:activate":n=>!0,"click:select":n=>!0},setup(n,e){let{slots:t}=e;const{items:a}=Zc(n),{themeClasses:i}=Pn(n),{backgroundColorClasses:r,backgroundColorStyles:o}=En(()=>n.bgColor),{borderClasses:l}=bt(n),{densityClasses:s}=rt(n),{dimensionStyles:u}=Yn(n),{elevationClasses:d}=Zn(n),{roundedClasses:p}=Ln(n),{children:f,open:c,parents:g,select:h,getPath:x}=Nc(n),v=B(()=>n.lines?`v-list--${n.lines}-line`:void 0),b=B(()=>n.activeColor),k=B(()=>n.baseColor),C=B(()=>n.color);Om(),$n({VListGroup:{activeColor:b,baseColor:k,color:C,expandIcon:B(()=>n.expandIcon),collapseIcon:B(()=>n.collapseIcon)},VListItem:{activeClass:B(()=>n.activeClass),activeColor:b,baseColor:k,color:C,density:B(()=>n.density),disabled:B(()=>n.disabled),lines:B(()=>n.lines),nav:B(()=>n.nav),slim:B(()=>n.slim),variant:B(()=>n.variant)}});const S=X(!1),E=U();function A(I){S.value=!0}function w(I){S.value=!1}function F(I){var M;!S.value&&!(I.relatedTarget&&((M=E.value)!=null&&M.contains(I.relatedTarget)))&&P()}function _(I){const M=I.target;if(!(!E.value||["INPUT","TEXTAREA"].includes(M.tagName))){if(I.key==="ArrowDown")P("next");else if(I.key==="ArrowUp")P("prev");else if(I.key==="Home")P("first");else if(I.key==="End")P("last");else return;I.preventDefault()}}function V(I){S.value=!0}function P(I){if(E.value)return oe(E.value,I)}return N(()=>m(n.tag,{ref:E,class:["v-list",{"v-list--disabled":n.disabled,"v-list--nav":n.nav,"v-list--slim":n.slim},i.value,r.value,l.value,s.value,d.value,v.value,p.value,n.class],style:[o.value,u.value,n.style],tabindex:n.disabled?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:A,onFocusout:w,onFocus:F,onKeydown:_,onMousedown:V},{default:()=>[m(qm,{items:a.value,returnObject:n.returnObject},t)]})),{open:c,select:h,focus:P,children:f,parents:g,getPath:x}}}),Qc=Bt("v-list-img"),ng=T({start:Boolean,end:Boolean,...rn(),...xn()},"VListItemAction"),tg=L()({name:"VListItemAction",props:ng(),setup(n,e){let{slots:t}=e;return N(()=>m(n.tag,{class:["v-list-item-action",{"v-list-item-action--start":n.start,"v-list-item-action--end":n.end},n.class],style:n.style},t)),{}}}),eg=T({start:Boolean,end:Boolean,...rn(),...xn()},"VListItemMedia"),ag=L()({name:"VListItemMedia",props:eg(),setup(n,e){let{slots:t}=e;return N(()=>m(n.tag,{class:["v-list-item-media",{"v-list-item-media--start":n.start,"v-list-item-media--end":n.end},n.class],style:n.style},t)),{}}});function Si(n,e){return{x:n.x+e.x,y:n.y+e.y}}function ig(n,e){return{x:n.x-e.x,y:n.y-e.y}}function al(n,e){if(n.side==="top"||n.side==="bottom"){const{side:t,align:a}=n,i=a==="left"?0:a==="center"?e.width/2:a==="right"?e.width:a,r=t==="top"?0:t==="bottom"?e.height:t;return Si({x:i,y:r},e)}else if(n.side==="left"||n.side==="right"){const{side:t,align:a}=n,i=t==="left"?0:t==="right"?e.width:t,r=a==="top"?0:a==="center"?e.height/2:a==="bottom"?e.height:a;return Si({x:i,y:r},e)}return Si({x:e.width/2,y:e.height/2},e)}const Qm={static:lg,connected:sg},rg=T({locationStrategy:{type:[String,Function],default:"static",validator:n=>typeof n=="function"||n in Qm},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function og(n,e){const t=U({}),a=U();Cn&&mt(()=>!!(e.isActive.value&&n.locationStrategy),r=>{var o,l;tn(()=>n.locationStrategy,r),Xn(()=>{window.removeEventListener("resize",i),a.value=void 0}),window.addEventListener("resize",i,{passive:!0}),typeof n.locationStrategy=="function"?a.value=(o=n.locationStrategy(e,n,t))==null?void 0:o.updateLocation:a.value=(l=Qm[n.locationStrategy](e,n,t))==null?void 0:l.updateLocation});function i(r){var o;(o=a.value)==null||o.call(a,r)}return{contentStyles:t,updateLocation:a}}function lg(){}function mg(n,e){const t=Sr(n);return e?t.x+=parseFloat(n.style.right||0):t.x-=parseFloat(n.style.left||0),t.y-=parseFloat(n.style.top||0),t}function sg(n,e,t){(Array.isArray(n.target.value)||qu(n.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[n.isRtl.value?"right":"left"]:0});const{preferredAnchor:i,preferredOrigin:r}=wr(()=>{const v=_i(e.location,n.isRtl.value),b=e.origin==="overlap"?v:e.origin==="auto"?vi(v):_i(e.origin,n.isRtl.value);return v.side===b.side&&v.align===bi(b).align?{preferredAnchor:Eo(v),preferredOrigin:Eo(b)}:{preferredAnchor:v,preferredOrigin:b}}),[o,l,s,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>y(()=>{const b=parseFloat(e[v]);return isNaN(b)?1/0:b})),d=y(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const v=e.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let p=!1,f=-1;const c=new Ml(4),g=new ResizeObserver(()=>{if(!p)return;if(requestAnimationFrame(b=>{b!==f&&c.clear(),requestAnimationFrame(k=>{f=k})}),c.isFull){const b=c.values();if(Jn(b.at(-1),b.at(-3)))return}const v=x();v&&c.push(v.flipped)});tn([n.target,n.contentEl],(v,b)=>{let[k,C]=v,[S,E]=b;S&&!Array.isArray(S)&&g.unobserve(S),k&&!Array.isArray(k)&&g.observe(k),E&&g.unobserve(E),C&&g.observe(C)},{immediate:!0}),Xn(()=>{g.disconnect()});let h=new Gt({x:0,y:0,width:0,height:0});function x(){if(p=!1,requestAnimationFrame(()=>p=!0),!n.target.value||!n.contentEl.value)return;(Array.isArray(n.target.value)||n.target.value.offsetParent||n.target.value.getClientRects().length)&&(h=Nl(n.target.value));const v=mg(n.contentEl.value,n.isRtl.value),b=Oa(n.contentEl.value),k=12;b.length||(b.push(document.documentElement),n.contentEl.value.style.top&&n.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=b.reduce((I,M)=>{const j=M.getBoundingClientRect(),W=new Gt({x:M===document.documentElement?0:j.x,y:M===document.documentElement?0:j.y,width:M.clientWidth,height:M.clientHeight});return I?new Gt({x:Math.max(I.left,W.left),y:Math.max(I.top,W.top),width:Math.min(I.right,W.right)-Math.max(I.left,W.left),height:Math.min(I.bottom,W.bottom)-Math.max(I.top,W.top)}):W},void 0);C.x+=k,C.y+=k,C.width-=k*2,C.height-=k*2;let S={anchor:i.value,origin:r.value};function E(I){const M=new Gt(v),j=al(I.anchor,h),W=al(I.origin,M);let{x:nn,y:Q}=ig(j,W);switch(I.anchor.side){case"top":Q-=d.value[0];break;case"bottom":Q+=d.value[0];break;case"left":nn-=d.value[0];break;case"right":nn+=d.value[0];break}switch(I.anchor.align){case"top":Q-=d.value[1];break;case"bottom":Q+=d.value[1];break;case"left":nn-=d.value[1];break;case"right":nn+=d.value[1];break}return M.x+=nn,M.y+=Q,M.width=Math.min(M.width,s.value),M.height=Math.min(M.height,u.value),{overflows:Bo(M,C),x:nn,y:Q}}let A=0,w=0;const F={x:0,y:0},_={x:!1,y:!1};let V=-1;for(;!(V++>10);){const{x:I,y:M,overflows:j}=E(S);A+=I,w+=M,v.x+=I,v.y+=M;{const W=Ao(S.anchor),nn=j.x.before||j.x.after,Q=j.y.before||j.y.after;let G=!1;if(["x","y"].forEach(R=>{if(R==="x"&&nn&&!_.x||R==="y"&&Q&&!_.y){const D={anchor:{...S.anchor},origin:{...S.origin}},$=R==="x"?W==="y"?bi:vi:W==="y"?vi:bi;D.anchor=$(D.anchor),D.origin=$(D.origin);const{overflows:K}=E(D);(K[R].before<=j[R].before&&K[R].after<=j[R].after||K[R].before+K[R].after<(j[R].before+j[R].after)/2)&&(S=D,G=_[R]=!0)}}),G)continue}j.x.before&&(A+=j.x.before,v.x+=j.x.before),j.x.after&&(A-=j.x.after,v.x-=j.x.after),j.y.before&&(w+=j.y.before,v.y+=j.y.before),j.y.after&&(w-=j.y.after,v.y-=j.y.after);{const W=Bo(v,C);F.x=C.width-W.x.before-W.x.after,F.y=C.height-W.y.before-W.y.after,A+=W.x.before,v.x+=W.x.before,w+=W.y.before,v.y+=W.y.before}break}const P=Ao(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:an(Fi(w)),left:n.isRtl.value?void 0:an(Fi(A)),right:n.isRtl.value?an(Fi(-A)):void 0,minWidth:an(P==="y"?Math.min(o.value,h.width):o.value),maxWidth:an(il(Dn(F.x,o.value===1/0?0:o.value,s.value))),maxHeight:an(il(Dn(F.y,l.value===1/0?0:l.value,u.value)))}),{available:F,contentBox:v,flipped:_}}return tn(()=>[i.value,r.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>x()),Fn(()=>{const v=x();if(!v)return;const{available:b,contentBox:k}=v;k.height>b.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function Fi(n){return Math.round(n*devicePixelRatio)/devicePixelRatio}function il(n){return Math.ceil(n*devicePixelRatio)/devicePixelRatio}let Ki=!0;const za=[];function dg(n){!Ki||za.length?(za.push(n),qi()):(Ki=!1,n(),qi())}let rl=-1;function qi(){cancelAnimationFrame(rl),rl=requestAnimationFrame(()=>{const n=za.shift();n&&n(),za.length?qi():Ki=!0})}const _a={none:null,close:cg,block:gg,reposition:fg},ug=T({scrollStrategy:{type:[String,Function],default:"block",validator:n=>typeof n=="function"||n in _a}},"VOverlay-scroll-strategies");function pg(n,e){if(!Cn)return;let t;Mn(async()=>{t==null||t.stop(),e.isActive.value&&n.scrollStrategy&&(t=Ue(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof n.scrollStrategy=="function"?n.scrollStrategy(e,n,t):(a=_a[n.scrollStrategy])==null||a.call(_a,e,n,t)}))}),Xn(()=>{t==null||t.stop()})}function cg(n){function e(t){n.isActive.value=!1}ns(n.targetEl.value??n.contentEl.value,e)}function gg(n,e){var o;const t=(o=n.root.value)==null?void 0:o.offsetParent,a=[...new Set([...Oa(n.targetEl.value,e.contained?t:void 0),...Oa(n.contentEl.value,e.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,r=(l=>Ir(l)&&l)(t||document.documentElement);r&&n.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,s)=>{l.style.setProperty("--v-body-scroll-x",an(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",an(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",an(i)),l.classList.add("v-overlay-scroll-blocked")}),Xn(()=>{a.forEach((l,s)=>{const u=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(l.style.getPropertyValue("--v-body-scroll-y")),p=l.style.scrollBehavior;l.style.scrollBehavior="auto",l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-u,l.scrollTop=-d,l.style.scrollBehavior=p}),r&&n.root.value.classList.remove("v-overlay--scroll-blocked")})}function fg(n,e,t){let a=!1,i=-1,r=-1;function o(l){dg(()=>{var d,p;const s=performance.now();(p=(d=n.updateLocation).value)==null||p.call(d,l),a=(performance.now()-s)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{ns(n.targetEl.value??n.contentEl.value,l=>{a?(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{o(l)})})):o(l)})})}),Xn(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(i)})}function ns(n,e){const t=[document,...Oa(n)];t.forEach(a=>{a.addEventListener("scroll",e,{passive:!0})}),Xn(()=>{t.forEach(a=>{a.removeEventListener("scroll",e)})})}const Xi=Symbol.for("vuetify:v-menu"),Wr=T({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Yr(n,e){let t=()=>{};function a(o){t==null||t();const l=Number(o?n.openDelay:n.closeDelay);return new Promise(s=>{t=cu(l,()=>{e==null||e(o),s(o)})})}function i(){return a(!0)}function r(){return a(!1)}return{clearDelay:t,runOpenDelay:i,runCloseDelay:r}}const xg=T({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Wr()},"VOverlay-activator");function vg(n,e){let{isActive:t,isTop:a,contentEl:i}=e;const r=zn("useActivator"),o=U();let l=!1,s=!1,u=!0;const d=y(()=>n.openOnFocus||n.openOnFocus==null&&n.openOnHover),p=y(()=>n.openOnClick||n.openOnClick==null&&!n.openOnHover&&!d.value),{runOpenDelay:f,runCloseDelay:c}=Yr(n,w=>{w===(n.openOnHover&&l||d.value&&s)&&!(n.openOnHover&&t.value&&!a.value)&&(t.value!==w&&(u=!0),t.value=w)}),g=U(),h={onClick:w=>{w.stopPropagation(),o.value=w.currentTarget||w.target,t.value||(g.value=[w.clientX,w.clientY]),t.value=!t.value},onMouseenter:w=>{var F;(F=w.sourceCapabilities)!=null&&F.firesTouchEvents||(l=!0,o.value=w.currentTarget||w.target,f())},onMouseleave:w=>{l=!1,c()},onFocus:w=>{Be(w.target,":focus-visible")!==!1&&(s=!0,w.stopPropagation(),o.value=w.currentTarget||w.target,f())},onBlur:w=>{s=!1,w.stopPropagation(),c()}},x=y(()=>{const w={};return p.value&&(w.onClick=h.onClick),n.openOnHover&&(w.onMouseenter=h.onMouseenter,w.onMouseleave=h.onMouseleave),d.value&&(w.onFocus=h.onFocus,w.onBlur=h.onBlur),w}),v=y(()=>{const w={};if(n.openOnHover&&(w.onMouseenter=()=>{l=!0,f()},w.onMouseleave=()=>{l=!1,c()}),d.value&&(w.onFocusin=()=>{s=!0,f()},w.onFocusout=()=>{s=!1,c()}),n.closeOnContentClick){const F=Sn(Xi,null);w.onClick=()=>{t.value=!1,F==null||F.closeParents()}}return w}),b=y(()=>{const w={};return n.openOnHover&&(w.onMouseenter=()=>{u&&(l=!0,u=!1,f())},w.onMouseleave=()=>{l=!1,c()}),w});tn(a,w=>{var F;w&&(n.openOnHover&&!l&&(!d.value||!s)||d.value&&!s&&(!n.openOnHover||!l))&&!((F=i.value)!=null&&F.contains(document.activeElement))&&(t.value=!1)}),tn(t,w=>{w||setTimeout(()=>{g.value=void 0})},{flush:"post"});const k=Ra();Mn(()=>{k.value&&Fn(()=>{o.value=k.el})});const C=Ra(),S=y(()=>n.target==="cursor"&&g.value?g.value:C.value?C.el:ts(n.target,r)||o.value),E=y(()=>Array.isArray(S.value)?void 0:S.value);let A;return tn(()=>!!n.activator,w=>{w&&Cn?(A=Ue(),A.run(()=>{bg(n,r,{activatorEl:o,activatorEvents:x})})):A&&A.stop()},{flush:"post",immediate:!0}),Xn(()=>{A==null||A.stop()}),{activatorEl:o,activatorRef:k,target:S,targetEl:E,targetRef:C,activatorEvents:x,contentEvents:v,scrimEvents:b}}function bg(n,e,t){let{activatorEl:a,activatorEvents:i}=t;tn(()=>n.activator,(s,u)=>{if(u&&s!==u){const d=l(u);d&&o(d)}s&&Fn(()=>r())},{immediate:!0}),tn(()=>n.activatorProps,()=>{r()}),Xn(()=>{o()});function r(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.activatorProps;s&&xu(s,z(i.value,u))}function o(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.activatorProps;s&&vu(s,z(i.value,u))}function l(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:n.activator;const u=ts(s,e);return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,a.value}}function ts(n,e){var a,i;if(!n)return;let t;if(n==="parent"){let r=(i=(a=e==null?void 0:e.proxy)==null?void 0:a.$el)==null?void 0:i.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof n=="string"?t=document.querySelector(n):"$el"in n?t=n.$el:t=n;return t}function es(){if(!Cn)return X(!1);const{ssr:n}=wt();if(n){const e=X(!1);return it(()=>{e.value=!0}),e}else return X(!0)}const Gr=T({eager:Boolean},"lazy");function Ur(n,e){const t=X(!1),a=B(()=>t.value||n.eager||e.value);tn(e,()=>t.value=!0);function i(){n.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:i}}function Se(){const e=zn("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const ol=Symbol.for("vuetify:stack"),We=dt([]);function hg(n,e,t){const a=zn("useStack"),i=!t,r=Sn(ol,void 0),o=dt({activeChildren:new Set});An(ol,o);const l=X(Number(Rt(e)));mt(n,()=>{var p;const d=(p=We.at(-1))==null?void 0:p[1];l.value=d?d+10:Number(Rt(e)),i&&We.push([a.uid,l.value]),r==null||r.activeChildren.add(a.uid),Xn(()=>{if(i){const f=Nn(We).findIndex(c=>c[0]===a.uid);We.splice(f,1)}r==null||r.activeChildren.delete(a.uid)})});const s=X(!0);i&&Mn(()=>{var p;const d=((p=We.at(-1))==null?void 0:p[0])===a.uid;setTimeout(()=>s.value=d)});const u=B(()=>!o.activeChildren.size);return{globalTop:Wa(s),localTop:u,stackStyles:B(()=>({zIndex:l.value}))}}function yg(n){return{teleportTarget:y(()=>{const t=n();if(t===!0||!Cn)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let i=[...a.children].find(r=>r.matches(".v-overlay-container"));return i||(i=document.createElement("div"),i.className="v-overlay-container",a.appendChild(i)),i})}}function kg(){return!0}function as(n,e,t){if(!n||is(n,t)===!1)return!1;const a=Zl(e);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===n.target)return!1;const i=(typeof t.value=="object"&&t.value.include||(()=>[]))();return i.push(e),!i.some(r=>r==null?void 0:r.contains(n.target))}function is(n,e){return(typeof e.value=="object"&&e.value.closeConditional||kg)(n)}function wg(n,e,t){const a=typeof t.value=="function"?t.value:t.value.handler;n.shadowTarget=n.target,e._clickOutside.lastMousedownWasOutside&&as(n,e,t)&&setTimeout(()=>{is(n,t)&&a&&a(n)},0)}function ll(n,e){const t=Zl(n);e(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&e(t)}const rs={mounted(n,e){const t=i=>wg(i,n,e),a=i=>{n._clickOutside.lastMousedownWasOutside=as(i,n,e)};ll(n,i=>{i.addEventListener("click",t,!0),i.addEventListener("mousedown",a,!0)}),n._clickOutside||(n._clickOutside={lastMousedownWasOutside:!1}),n._clickOutside[e.instance.$.uid]={onClick:t,onMousedown:a}},beforeUnmount(n,e){n._clickOutside&&(ll(n,t=>{var r;if(!t||!((r=n._clickOutside)!=null&&r[e.instance.$.uid]))return;const{onClick:a,onMousedown:i}=n._clickOutside[e.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",i,!0)}),delete n._clickOutside[e.instance.$.uid])}};function Sg(n){const{modelValue:e,color:t,...a}=n;return m(Ut,{name:"fade-transition",appear:!0},{default:()=>[n.modelValue&&m("div",z({class:["v-overlay__scrim",n.color.backgroundColorClasses.value],style:n.color.backgroundColorStyles.value},a),null)]})}const va=T({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...xg(),...rn(),...Wn(),...Gr(),...rg(),...ug(),...kn(),...Ct()},"VOverlay"),Et=L()({name:"VOverlay",directives:{ClickOutside:rs},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...va()},emits:{"click:outside":n=>!0,"update:modelValue":n=>!0,keydown:n=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(n,e){let{slots:t,attrs:a,emit:i}=e;const r=zn("VOverlay"),o=U(),l=U(),s=U(),u=sn(n,"modelValue"),d=y({get:()=>u.value,set:q=>{q&&n.disabled||(u.value=q)}}),{themeClasses:p}=Pn(n),{rtlClasses:f,isRtl:c}=Hn(),{hasContent:g,onAfterLeave:h}=Ur(n,d),x=En(()=>typeof n.scrim=="string"?n.scrim:null),{globalTop:v,localTop:b,stackStyles:k}=hg(d,()=>n.zIndex,n._disableGlobalStack),{activatorEl:C,activatorRef:S,target:E,targetEl:A,targetRef:w,activatorEvents:F,contentEvents:_,scrimEvents:V}=vg(n,{isActive:d,isTop:b,contentEl:s}),{teleportTarget:P}=yg(()=>{var fn,Y,on;const q=n.attach||n.contained;if(q)return q;const mn=((fn=C==null?void 0:C.value)==null?void 0:fn.getRootNode())||((on=(Y=r.proxy)==null?void 0:Y.$el)==null?void 0:on.getRootNode());return mn instanceof ShadowRoot?mn:!1}),{dimensionStyles:I}=Yn(n),M=es(),{scopeId:j}=Se();tn(()=>n.disabled,q=>{q&&(d.value=!1)});const{contentStyles:W,updateLocation:nn}=og(n,{isRtl:c,contentEl:s,target:E,isActive:d});pg(n,{root:o,contentEl:s,targetEl:A,isActive:d,updateLocation:nn});function Q(q){i("click:outside",q),n.persistent?J():d.value=!1}function G(q){return d.value&&v.value&&(!n.scrim||q.target===l.value||q instanceof MouseEvent&&q.shadowTarget===l.value)}Cn&&tn(d,q=>{q?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),tt(()=>{Cn&&window.removeEventListener("keydown",R)});function R(q){var mn,fn,Y;q.key==="Escape"&&v.value&&((mn=s.value)!=null&&mn.contains(document.activeElement)||i("keydown",q),n.persistent?J():(d.value=!1,(fn=s.value)!=null&&fn.contains(document.activeElement)&&((Y=C.value)==null||Y.focus())))}function D(q){q.key==="Escape"&&!v.value||i("keydown",q)}const $=gm();mt(()=>n.closeOnBack,()=>{Qp($,q=>{v.value&&d.value?(q(!1),n.persistent?J():d.value=!1):q()})});const K=U();tn(()=>d.value&&(n.absolute||n.contained)&&P.value==null,q=>{if(q){const mn=Pr(o.value);mn&&mn!==document.scrollingElement&&(K.value=mn.scrollTop)}});function J(){n.noClickAnimation||s.value&&ie(s.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Xe})}function ln(){i("afterEnter")}function Z(){h(),i("afterLeave")}return N(()=>{var q;return m(dn,null,[(q=t.activator)==null?void 0:q.call(t,{isActive:d.value,targetRef:w,props:z({ref:S},F.value,n.activatorProps)}),M.value&&g.value&&m(Jd,{disabled:!P.value,to:P.value},{default:()=>[m("div",z({class:["v-overlay",{"v-overlay--absolute":n.absolute||n.contained,"v-overlay--active":d.value,"v-overlay--contained":n.contained},p.value,f.value,n.class],style:[k.value,{"--v-overlay-opacity":n.opacity,top:an(K.value)},n.style],ref:o,onKeydown:D},j,a),[m(Sg,z({color:x,modelValue:d.value&&!!n.scrim,ref:l},V.value),null),m(at,{appear:!0,persisted:!0,transition:n.transition,target:E.value,onAfterEnter:ln,onAfterLeave:Z},{default:()=>{var mn;return[Tn(m("div",z({ref:s,class:["v-overlay__content",n.contentClass],style:[I.value,W.value]},_.value,n.contentProps),[(mn=t.default)==null?void 0:mn.call(t,{isActive:d})]),[[Ft,d.value],[ft("click-outside"),{handler:Q,closeConditional:G,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,scrimEl:l,target:E,animateClick:J,contentEl:s,globalTop:v,localTop:b,updateLocation:nn}}}),Ci=Symbol("Forwarded refs");function Vi(n,e){let t=n;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,e);if(a)return a;t=Object.getPrototypeOf(t)}}function ht(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return n[Ci]=t,new Proxy(n,{get(i,r){if(Reflect.has(i,r))return Reflect.get(i,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of t)if(o.value&&Reflect.has(o.value,r)){const l=Reflect.get(o.value,r);return typeof l=="function"?l.bind(o.value):l}}},has(i,r){if(Reflect.has(i,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of t)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(i,r,o){if(Reflect.has(i,r))return Reflect.set(i,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const l of t)if(l.value&&Reflect.has(l.value,r))return Reflect.set(l.value,r,o);return!1},getOwnPropertyDescriptor(i,r){var l;const o=Reflect.getOwnPropertyDescriptor(i,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const s of t){if(!s.value)continue;const u=Vi(s.value,r)??("_"in s.value?Vi((l=s.value._)==null?void 0:l.setupState,r):void 0);if(u)return u}for(const s of t){const u=s.value&&s.value[Ci];if(!u)continue;const d=u.slice();for(;d.length;){const p=d.shift(),f=Vi(p.value,r);if(f)return f;const c=p.value&&p.value[Ci];c&&d.push(...c)}}}}})}const os=T({id:String,submenu:Boolean,...Rn(va({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ua}}),["absolute"])},"VMenu"),Re=L()({name:"VMenu",props:os(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),{scopeId:i}=Se(),{isRtl:r}=Hn(),o=st(),l=B(()=>n.id||`v-menu-${o}`),s=U(),u=Sn(Xi,null),d=X(new Set);An(Xi,{register(){d.value.add(o)},unregister(){d.value.delete(o)},closeParents(x){setTimeout(()=>{var v;!d.value.size&&!n.persistent&&(x==null||(v=s.value)!=null&&v.contentEl&&!gu(x,s.value.contentEl))&&(a.value=!1,u==null||u.closeParents())},40)}}),tt(()=>{u==null||u.unregister(),document.removeEventListener("focusin",p)}),Pl(()=>a.value=!1);async function p(x){var k,C,S;const v=x.relatedTarget,b=x.target;await Fn(),a.value&&v!==b&&((k=s.value)!=null&&k.contentEl)&&((C=s.value)!=null&&C.globalTop)&&![document,s.value.contentEl].includes(b)&&!s.value.contentEl.contains(b)&&((S=qe(s.value.contentEl)[0])==null||S.focus())}tn(a,x=>{x?(u==null||u.register(),Cn&&document.addEventListener("focusin",p,{once:!0})):(u==null||u.unregister(),Cn&&document.removeEventListener("focusin",p))},{immediate:!0});function f(x){u==null||u.closeParents(x)}function c(x){var v,b,k,C,S;if(!n.disabled)if(x.key==="Tab"||x.key==="Enter"&&!n.closeOnContentClick){if(x.key==="Enter"&&(x.target instanceof HTMLTextAreaElement||x.target instanceof HTMLInputElement&&x.target.closest("form")))return;x.key==="Enter"&&x.preventDefault(),$l(qe((v=s.value)==null?void 0:v.contentEl,!1),x.shiftKey?"prev":"next",A=>A.tabIndex>=0)||(a.value=!1,(k=(b=s.value)==null?void 0:b.activatorEl)==null||k.focus())}else n.submenu&&x.key===(r.value?"ArrowRight":"ArrowLeft")&&(a.value=!1,(S=(C=s.value)==null?void 0:C.activatorEl)==null||S.focus())}function g(x){var b;if(n.disabled)return;const v=(b=s.value)==null?void 0:b.contentEl;v&&a.value?x.key==="ArrowDown"?(x.preventDefault(),x.stopImmediatePropagation(),oe(v,"next")):x.key==="ArrowUp"?(x.preventDefault(),x.stopImmediatePropagation(),oe(v,"prev")):n.submenu&&(x.key===(r.value?"ArrowRight":"ArrowLeft")?a.value=!1:x.key===(r.value?"ArrowLeft":"ArrowRight")&&(x.preventDefault(),oe(v,"first"))):(n.submenu?x.key===(r.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(x.key))&&(a.value=!0,x.preventDefault(),setTimeout(()=>setTimeout(()=>g(x))))}const h=y(()=>z({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-controls":l.value,onKeydown:g},n.activatorProps));return N(()=>{const x=Et.filterProps(n);return m(Et,z({ref:s,id:l.value,class:["v-menu",n.class],style:n.style},x,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,absolute:!0,activatorProps:h.value,location:n.location??(n.submenu?"end":"bottom"),"onClick:outside":f,onKeydown:c},i),{activator:t.activator,default:function(){for(var v=arguments.length,b=new Array(v),k=0;k<v;k++)b[k]=arguments[k];return m(vn,{root:"VMenu"},{default:()=>{var C;return[(C=t.default)==null?void 0:C.call(t,...b)]}})}})}),ht({id:l,ΨopenChildren:d},s)}}),Fg=T({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...rn(),...Ct({transition:{component:Dr}})},"VCounter"),ai=L()({name:"VCounter",functional:!0,props:Fg(),setup(n,e){let{slots:t}=e;const a=B(()=>n.max?`${n.value} / ${n.max}`:String(n.value));return N(()=>m(at,{transition:n.transition},{default:()=>[Tn(m("div",{class:["v-counter",{"text-error":n.max&&!n.disabled&&parseFloat(n.value)>parseFloat(n.max)},n.class],style:n.style},[t.default?t.default({counter:a.value,max:n.max,value:n.value}):a.value]),[[Ft,n.active]])]})),{}}}),Cg=T({floating:Boolean,...rn()},"VFieldLabel"),Ye=L()({name:"VFieldLabel",props:Cg(),setup(n,e){let{slots:t}=e;return N(()=>m(je,{class:["v-field-label",{"v-field-label--floating":n.floating},n.class],style:n.style,"aria-hidden":n.floating||void 0},t)),{}}}),Vg=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ba=T({appendInnerIcon:un,bgColor:String,clearable:Boolean,clearIcon:{type:un,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},glow:Boolean,error:Boolean,flat:Boolean,iconColor:[Boolean,String],label:String,persistentClear:Boolean,prependInnerIcon:un,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:n=>Vg.includes(n)},"onClick:clear":qn(),"onClick:appendInner":qn(),"onClick:prependInner":qn(),...rn(),...Ja(),...Bn(),...kn()},"VField"),qt=L()({name:"VField",inheritAttrs:!1,props:{id:String,...fa(),...ba()},emits:{"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{themeClasses:r}=Pn(n),{loaderClasses:o}=ua(n),{focusClasses:l,isFocused:s,focus:u,blur:d}=_t(n),{InputIcon:p}=Pm(n),{roundedClasses:f}=Ln(n),{rtlClasses:c}=Hn(),g=B(()=>n.dirty||n.active),h=B(()=>!!(n.label||i.label)),x=B(()=>!n.singleLine&&h.value),v=st(),b=y(()=>n.id||`input-${v}`),k=B(()=>`${b.value}-messages`),C=U(),S=U(),E=U(),A=y(()=>["plain","underlined"].includes(n.variant)),w=y(()=>n.error||n.disabled?void 0:g.value&&s.value?n.color:n.baseColor),F=y(()=>{if(!(!n.iconColor||n.glow&&!s.value))return n.iconColor===!0?w.value:n.iconColor}),{backgroundColorClasses:_,backgroundColorStyles:V}=En(()=>n.bgColor),{textColorClasses:P,textColorStyles:I}=Qn(w);tn(g,W=>{if(x.value){const nn=C.value.$el,Q=S.value.$el;requestAnimationFrame(()=>{const G=Sr(nn),R=Q.getBoundingClientRect(),D=R.x-G.x,$=R.y-G.y-(G.height/2-R.height/2),K=R.width/.75,J=Math.abs(K-G.width)>1?{maxWidth:an(K)}:void 0,ln=getComputedStyle(nn),Z=getComputedStyle(Q),q=parseFloat(ln.transitionDuration)*1e3||150,mn=parseFloat(Z.getPropertyValue("--v-field-label-scale")),fn=Z.getPropertyValue("color");nn.style.visibility="visible",Q.style.visibility="hidden",ie(nn,{transform:`translate(${D}px, ${$}px) scale(${mn})`,color:fn,...J},{duration:q,easing:Xe,direction:W?"normal":"reverse"}).finished.then(()=>{nn.style.removeProperty("visibility"),Q.style.removeProperty("visibility")})})}},{flush:"post"});const M=y(()=>({isActive:g,isFocused:s,controlRef:E,blur:d,focus:u}));function j(W){W.target!==document.activeElement&&W.preventDefault()}return N(()=>{var D,$,K;const W=n.variant==="outlined",nn=!!(i["prepend-inner"]||n.prependInnerIcon),Q=!!(n.clearable||i.clear)&&!n.disabled,G=!!(i["append-inner"]||n.appendInnerIcon||Q),R=()=>i.label?i.label({...M.value,label:n.label,props:{for:b.value}}):n.label;return m("div",z({class:["v-field",{"v-field--active":g.value,"v-field--appended":G,"v-field--center-affix":n.centerAffix??!A.value,"v-field--disabled":n.disabled,"v-field--dirty":n.dirty,"v-field--error":n.error,"v-field--glow":n.glow,"v-field--flat":n.flat,"v-field--has-background":!!n.bgColor,"v-field--persistent-clear":n.persistentClear,"v-field--prepended":nn,"v-field--reverse":n.reverse,"v-field--single-line":n.singleLine,"v-field--no-label":!R(),[`v-field--variant-${n.variant}`]:!0},r.value,_.value,l.value,o.value,f.value,c.value,n.class],style:[V.value,n.style],onClick:j},t),[m("div",{class:"v-field__overlay"},null),m(pa,{name:"v-field",active:!!n.loading,color:n.error?"error":typeof n.loading=="string"?n.loading:n.color},{default:i.loader}),nn&&m("div",{key:"prepend",class:"v-field__prepend-inner"},[n.prependInnerIcon&&m(p,{key:"prepend-icon",name:"prependInner",color:F.value},null),(D=i["prepend-inner"])==null?void 0:D.call(i,M.value)]),m("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(n.variant)&&x.value&&m(Ye,{key:"floating-label",ref:S,class:[P.value],floating:!0,for:b.value,style:I.value},{default:()=>[R()]}),h.value&&m(Ye,{key:"label",ref:C,for:b.value},{default:()=>[R()]}),(($=i.default)==null?void 0:$.call(i,{...M.value,props:{id:b.value,class:"v-field__input","aria-describedby":k.value},focus:u,blur:d}))??m("div",{id:b.value,class:"v-field__input","aria-describedby":k.value},null)]),Q&&m(_r,{key:"clear"},{default:()=>[Tn(m("div",{class:"v-field__clearable",onMousedown:J=>{J.preventDefault(),J.stopPropagation()}},[m(vn,{defaults:{VIcon:{icon:n.clearIcon}}},{default:()=>[i.clear?i.clear({...M.value,props:{onFocus:u,onBlur:d,onClick:n["onClick:clear"]}}):m(p,{name:"clear",onFocus:u,onBlur:d},null)]})]),[[Ft,n.dirty]])]}),G&&m("div",{key:"append",class:"v-field__append-inner"},[(K=i["append-inner"])==null?void 0:K.call(i,M.value),n.appendInnerIcon&&m(p,{key:"append-icon",name:"appendInner",color:F.value},null)]),m("div",{class:["v-field__outline",P.value],style:I.value},[W&&m(dn,null,[m("div",{class:"v-field__outline__start"},null),x.value&&m("div",{class:"v-field__outline__notch"},[m(Ye,{ref:S,floating:!0,for:b.value},{default:()=>[R()]})]),m("div",{class:"v-field__outline__end"},null)]),A.value&&x.value&&m(Ye,{ref:S,floating:!0,for:b.value},{default:()=>[R()]})])])}),{controlRef:E,fieldIconColor:F}}}),Pg=["color","file","time","date","datetime-local","week","month"],ha=T({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Wt(),...ba()},"VTextField"),Nt=L()({name:"VTextField",directives:{Intersect:da},inheritAttrs:!1,props:ha(),emits:{"click:control":n=>!0,"mousedown:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const r=sn(n,"modelValue"),{isFocused:o,focus:l,blur:s}=_t(n),u=y(()=>typeof n.counterValue=="function"?n.counterValue(r.value):typeof n.counterValue=="number"?n.counterValue:(r.value??"").toString().length),d=y(()=>{if(t.maxlength)return t.maxlength;if(!(!n.counter||typeof n.counter!="number"&&typeof n.counter!="string"))return n.counter}),p=y(()=>["plain","underlined"].includes(n.variant));function f(E,A){var w,F;!n.autofocus||!E||(F=(w=A[0].target)==null?void 0:w.focus)==null||F.call(w)}const c=U(),g=U(),h=U(),x=y(()=>Pg.includes(n.type)||n.persistentPlaceholder||o.value||n.active);function v(){var E;h.value!==document.activeElement&&((E=h.value)==null||E.focus()),o.value||l()}function b(E){a("mousedown:control",E),E.target!==h.value&&(v(),E.preventDefault())}function k(E){v(),a("click:control",E)}function C(E,A){E.stopPropagation(),v(),Fn(()=>{r.value=null,A(),Ya(n["onClick:clear"],E)})}function S(E){var w;const A=E.target;if(r.value=A.value,(w=n.modelModifiers)!=null&&w.trim&&["text","search","password","tel","url"].includes(n.type)){const F=[A.selectionStart,A.selectionEnd];Fn(()=>{A.selectionStart=F[0],A.selectionEnd=F[1]})}}return N(()=>{const E=!!(i.counter||n.counter!==!1&&n.counter!=null),A=!!(E||i.details),[w,F]=Jt(t),{modelValue:_,...V}=nt.filterProps(n),P=qt.filterProps(n);return m(nt,z({ref:c,modelValue:r.value,"onUpdate:modelValue":I=>r.value=I,class:["v-text-field",{"v-text-field--prefixed":n.prefix,"v-text-field--suffixed":n.suffix,"v-input--plain-underlined":p.value},n.class],style:n.style},w,V,{centerAffix:!p.value,focused:o.value}),{...i,default:I=>{let{id:M,isDisabled:j,isDirty:W,isReadonly:nn,isValid:Q,reset:G}=I;return m(qt,z({ref:g,onMousedown:b,onClick:k,"onClick:clear":R=>C(R,G),"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:n.role},P,{id:M.value,active:x.value||W.value,dirty:W.value||n.dirty,disabled:j.value,focused:o.value,error:Q.value===!1}),{...i,default:R=>{let{props:{class:D,...$}}=R;const K=Tn(m("input",z({ref:h,value:r.value,onInput:S,autofocus:n.autofocus,readonly:nn.value,disabled:j.value,name:n.name,placeholder:n.placeholder,size:1,type:n.type,onFocus:v,onBlur:s},$,F),null),[[ft("intersect"),{handler:f},null,{once:!0}]]);return m(dn,null,[n.prefix&&m("span",{class:"v-text-field__prefix"},[m("span",{class:"v-text-field__prefix__text"},[n.prefix])]),i.default?m("div",{class:D,"data-no-activator":""},[i.default(),K]):Qd(K,{class:D}),n.suffix&&m("span",{class:"v-text-field__suffix"},[m("span",{class:"v-text-field__suffix__text"},[n.suffix])])])}})},details:A?I=>{var M;return m(dn,null,[(M=i.details)==null?void 0:M.call(i,I),E&&m(dn,null,[m("span",null,null),m(ai,{active:n.persistentCounter||o.value,value:u.value,max:d.value,disabled:n.disabled},i.counter)])])}:void 0})}),ht({},c,g,h)}}),Ig=T({renderless:Boolean,...rn()},"VVirtualScrollItem"),ls=L()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ig(),emits:{"update:height":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{resizeRef:r,contentRect:o}=St(void 0,"border");tn(()=>{var l;return(l=o.value)==null?void 0:l.height},l=>{l!=null&&a("update:height",l)}),N(()=>{var l,s;return n.renderless?m(dn,null,[(l=i.default)==null?void 0:l.call(i,{itemRef:r})]):m("div",z({ref:r,class:["v-virtual-scroll__item",n.class],style:n.style},t),[(s=i.default)==null?void 0:s.call(i)])})}}),Eg=-1,Ag=1,Pi=100,ms=T({itemHeight:{type:[Number,String],default:null},itemKey:{type:[String,Array,Function],default:null},height:[Number,String]},"virtual");function ss(n,e){const t=wt(),a=X(0);Mn(()=>{a.value=parseFloat(n.itemHeight||0)});const i=X(0),r=X(Math.ceil((parseInt(n.height)||t.height.value)/(a.value||16))||1),o=X(0),l=X(0),s=U(),u=U();let d=0;const{resizeRef:p,contentRect:f}=St();Mn(()=>{p.value=s.value});const c=y(()=>{var R;return s.value===document.documentElement?t.height.value:((R=f.value)==null?void 0:R.height)||parseInt(n.height)||0}),g=y(()=>!!(s.value&&u.value&&c.value&&a.value));let h=Array.from({length:e.value.length}),x=Array.from({length:e.value.length});const v=X(0);let b=-1;function k(R){return h[R]||a.value}const C=du(()=>{const R=performance.now();x[0]=0;const D=e.value.length;for(let $=1;$<=D-1;$++)x[$]=(x[$-1]||0)+k($-1);v.value=Math.max(v.value,performance.now()-R)},v),S=tn(g,R=>{R&&(S(),d=u.value.offsetTop,C.immediate(),W(),~b&&Fn(()=>{Cn&&window.requestAnimationFrame(()=>{Q(b),b=-1})}))});Xn(()=>{C.clear()});function E(R,D){const $=h[R],K=a.value;a.value=K?Math.min(a.value,D):D,($!==D||K!==a.value)&&(h[R]=D,C())}function A(R){return R=Dn(R,0,e.value.length-1),x[R]||0}function w(R){return Bg(x,R)}let F=0,_=0,V=0;tn(c,(R,D)=>{D&&(W(),R<D&&requestAnimationFrame(()=>{_=0,W()}))});let P=-1;function I(){if(!s.value||!u.value)return;const R=s.value.scrollTop,D=performance.now();D-V>500?(_=Math.sign(R-F),d=u.value.offsetTop):_=R-F,F=R,V=D,window.clearTimeout(P),P=window.setTimeout(M,500),W()}function M(){!s.value||!u.value||(_=0,V=0,window.clearTimeout(P),W())}let j=-1;function W(){cancelAnimationFrame(j),j=requestAnimationFrame(nn)}function nn(){if(!s.value||!c.value)return;const R=F-d,D=Math.sign(_),$=Math.max(0,R-Pi),K=Dn(w($),0,e.value.length),J=R+c.value+Pi,ln=Dn(w(J)+1,K+1,e.value.length);if((D!==Eg||K<i.value)&&(D!==Ag||ln>r.value)){const Z=A(i.value)-A(K),q=A(ln)-A(r.value);Math.max(Z,q)>Pi?(i.value=K,r.value=ln):(K<=0&&(i.value=K),ln>=e.value.length&&(r.value=ln))}o.value=A(i.value),l.value=A(e.value.length)-A(r.value)}function Q(R){const D=A(R);!s.value||R&&!D?b=R:s.value.scrollTop=D}const G=y(()=>e.value.slice(i.value,r.value).map((R,D)=>{const $=D+i.value;return{raw:R,index:$,key:jn(R,n.itemKey,$)}}));return tn(e,()=>{h=Array.from({length:e.value.length}),x=Array.from({length:e.value.length}),C.immediate(),W()},{deep:1}),{calculateVisibleItems:W,containerRef:s,markerRef:u,computedItems:G,paddingTop:o,paddingBottom:l,scrollToIndex:Q,handleScroll:I,handleScrollend:M,handleItemResize:E}}function Bg(n,e){let t=n.length-1,a=0,i=0,r=null,o=-1;if(n[t]<e)return t;for(;a<=t;)if(i=a+t>>1,r=n[i],r>e)t=i-1;else if(r<e)o=i,a=i+1;else return r===e?i:a;return o}const Dg=T({items:{type:Array,default:()=>[]},renderless:Boolean,...ms(),...rn(),...Wn()},"VVirtualScroll"),ii=L()({name:"VVirtualScroll",props:Dg(),setup(n,e){let{slots:t}=e;const a=zn("VVirtualScroll"),{dimensionStyles:i}=Yn(n),{calculateVisibleItems:r,containerRef:o,markerRef:l,handleScroll:s,handleScrollend:u,handleItemResize:d,scrollToIndex:p,paddingTop:f,paddingBottom:c,computedItems:g}=ss(n,B(()=>n.items));return mt(()=>n.renderless,()=>{function h(){var b,k;const v=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";o.value===document.documentElement?(document[v]("scroll",s,{passive:!0}),document[v]("scrollend",u)):((b=o.value)==null||b[v]("scroll",s,{passive:!0}),(k=o.value)==null||k[v]("scrollend",u))}it(()=>{o.value=Pr(a.vnode.el,!0),h(!0)}),Xn(h)}),N(()=>{const h=g.value.map(x=>m(ls,{key:x.key,renderless:n.renderless,"onUpdate:height":v=>d(x.index,v)},{default:v=>{var b;return(b=t.default)==null?void 0:b.call(t,{item:x.raw,index:x.index,...v})}}));return n.renderless?m(dn,null,[m("div",{ref:l,class:"v-virtual-scroll__spacer",style:{paddingTop:an(f.value)}},null),h,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:an(c.value)}},null)]):m("div",{ref:o,class:["v-virtual-scroll",n.class],onScrollPassive:s,onScrollend:u,style:[i.value,n.style]},[m("div",{ref:l,class:"v-virtual-scroll__container",style:{paddingTop:an(f.value),paddingBottom:an(c.value)}},[h])])}),{calculateVisibleItems:r,scrollToIndex:p}}});function Kr(n,e){const t=X(!1);let a;function i(l){cancelAnimationFrame(a),t.value=!0,a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{t.value=!1})})}async function r(){await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>{if(t.value){const s=tn(t,()=>{s(),l()})}else l()})}async function o(l){var d,p;if(l.key==="Tab"&&((d=e.value)==null||d.focus()),!["PageDown","PageUp","Home","End"].includes(l.key))return;const s=(p=n.value)==null?void 0:p.$el;if(!s)return;(l.key==="Home"||l.key==="End")&&s.scrollTo({top:l.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await r();const u=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(l.key==="PageDown"||l.key==="Home"){const f=s.getBoundingClientRect().top;for(const c of u)if(c.getBoundingClientRect().top>=f){c.focus();break}}else{const f=s.getBoundingClientRect().bottom;for(const c of[...u].reverse())if(c.getBoundingClientRect().bottom<=f){c.focus();break}}}return{onScrollPassive:i,onKeydown:o}}const qr=T({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:un,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Xm({itemChildren:!1})},"Select"),_g=T({...qr(),...Rn(ha({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ct({transition:{component:Ua}})},"VSelect"),Xr=L()({name:"VSelect",props:_g(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,"update:menu":n=>!0},setup(n,e){let{slots:t}=e;const{t:a}=On(),i=U(),r=U(),o=U(),{items:l,transformIn:s,transformOut:u}=Hr(n),d=sn(n,"modelValue",[],G=>s(G===null?[null]:_n(G)),G=>{const R=u(G);return n.multiple?R:R[0]??null}),p=y(()=>typeof n.counterValue=="function"?n.counterValue(d.value):typeof n.counterValue=="number"?n.counterValue:d.value.length),f=xa(n),c=y(()=>d.value.map(G=>G.value)),g=X(!1);let h="",x;const v=y(()=>n.hideSelected?l.value.filter(G=>!d.value.some(R=>(n.valueComparator||Jn)(R,G))):l.value),b=y(()=>n.hideNoData&&!v.value.length||f.isReadonly.value||f.isDisabled.value),k=sn(n,"menu"),C=y({get:()=>k.value,set:G=>{var R;k.value&&!G&&((R=r.value)!=null&&R.ΨopenChildren.size)||G&&b.value||(k.value=G)}}),S=B(()=>C.value?n.closeText:n.openText),E=y(()=>{var G;return{...n.menuProps,activatorProps:{...((G=n.menuProps)==null?void 0:G.activatorProps)||{},"aria-haspopup":"listbox"}}}),A=U(),w=Kr(A,i);function F(G){n.openOnClear&&(C.value=!0)}function _(){b.value||(C.value=!C.value)}function V(G){De(G)&&P(G)}function P(G){var K,J;if(!G.key||f.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(G.key)&&G.preventDefault(),["Enter","ArrowDown"," "].includes(G.key)&&(C.value=!0),["Escape","Tab"].includes(G.key)&&(C.value=!1),G.key==="Home"?(K=A.value)==null||K.focus("first"):G.key==="End"&&((J=A.value)==null||J.focus("last"));const R=1e3;if(!De(G))return;const D=performance.now();D-x>R&&(h=""),h+=G.key.toLowerCase(),x=D;const $=l.value.find(ln=>ln.title.toLowerCase().startsWith(h));if($!==void 0){d.value=[$];const ln=v.value.indexOf($);Cn&&window.requestAnimationFrame(()=>{var Z;ln>=0&&((Z=o.value)==null||Z.scrollToIndex(ln))})}}function I(G){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!G.props.disabled)if(n.multiple){const D=d.value.findIndex(K=>(n.valueComparator||Jn)(K.value,G.value)),$=R??!~D;if(~D){const K=$?[...d.value,G]:[...d.value];K.splice(D,1),d.value=K}else $&&(d.value=[...d.value,G])}else{const D=R!==!1;d.value=D?[G]:[],Fn(()=>{C.value=!1})}}function M(G){var R;(R=A.value)!=null&&R.$el.contains(G.relatedTarget)||(C.value=!1)}function j(){var G;n.eager&&((G=o.value)==null||G.calculateVisibleItems())}function W(){var G;g.value&&((G=i.value)==null||G.focus())}function nn(G){g.value=!0}function Q(G){if(G==null)d.value=[];else if(Be(i.value,":autofill")||Be(i.value,":-webkit-autofill")){const R=l.value.find(D=>D.title===G);R&&I(R)}else i.value&&(i.value.value="")}return tn(C,()=>{if(!n.hideSelected&&C.value&&d.value.length){const G=v.value.findIndex(R=>d.value.some(D=>(n.valueComparator||Jn)(D.value,R.value)));Cn&&window.requestAnimationFrame(()=>{var R;G>=0&&((R=o.value)==null||R.scrollToIndex(G))})}}),tn(()=>n.items,(G,R)=>{C.value||g.value&&!R.length&&G.length&&(C.value=!0)}),N(()=>{const G=!!(n.chips||t.chip),R=!!(!n.hideNoData||v.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),D=d.value.length>0,$=Nt.filterProps(n),K=D||!g.value&&n.label&&!n.persistentPlaceholder?void 0:n.placeholder;return m(Nt,z({ref:i},$,{modelValue:d.value.map(J=>J.props.value).join(", "),"onUpdate:modelValue":Q,focused:g.value,"onUpdate:focused":J=>g.value=J,validationValue:d.externalValue,counterValue:p.value,dirty:D,class:["v-select",{"v-select--active-menu":C.value,"v-select--chips":!!n.chips,[`v-select--${n.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length,"v-select--selection-slot":!!t.selection},n.class],style:n.style,inputmode:"none",placeholder:K,"onClick:clear":F,"onMousedown:control":_,onBlur:M,onKeydown:P,"aria-label":a(S.value),title:a(S.value)}),{...t,default:()=>m(dn,null,[m(Re,z({ref:r,modelValue:C.value,"onUpdate:modelValue":J=>C.value=J,activator:"parent",contentClass:"v-select__content",disabled:b.value,eager:n.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:n.transition,onAfterEnter:j,onAfterLeave:W},E.value),{default:()=>[R&&m(ei,z({ref:A,selected:c.value,selectStrategy:n.multiple?"independent":"single-independent",onMousedown:J=>J.preventDefault(),onKeydown:V,onFocusin:nn,tabindex:"-1","aria-live":"polite","aria-label":`${n.label}-list`,color:n.itemColor??n.color},w,n.listProps),{default:()=>{var J,ln,Z;return[(J=t["prepend-item"])==null?void 0:J.call(t),!v.value.length&&!n.hideNoData&&(((ln=t["no-data"])==null?void 0:ln.call(t))??m(zt,{key:"no-data",title:a(n.noDataText)},null)),m(ii,{ref:o,renderless:!0,items:v.value,itemKey:"value"},{default:q=>{var H;let{item:mn,index:fn,itemRef:Y}=q;const on=z(mn.props,{ref:Y,key:mn.value,onClick:()=>I(mn,null)});return((H=t.item)==null?void 0:H.call(t,{item:mn,index:fn,props:on}))??m(zt,z(on,{role:"option"}),{prepend:en=>{let{isSelected:cn}=en;return m(dn,null,[n.multiple&&!n.hideSelected?m(Lt,{key:mn.value,modelValue:cn,ripple:!1,tabindex:"-1"},null):void 0,mn.props.prependAvatar&&m(yt,{image:mn.props.prependAvatar},null),mn.props.prependIcon&&m(Vn,{icon:mn.props.prependIcon},null)])}})}}),(Z=t["append-item"])==null?void 0:Z.call(t)]}})]}),d.value.map((J,ln)=>{function Z(Y){Y.stopPropagation(),Y.preventDefault(),I(J,!1)}const q={"onClick:close":Z,onKeydown(Y){Y.key!=="Enter"&&Y.key!==" "||(Y.preventDefault(),Y.stopPropagation(),Z(Y))},onMousedown(Y){Y.preventDefault(),Y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},mn=G?!!t.chip:!!t.selection,fn=mn?Ga(G?t.chip({item:J,index:ln,props:q}):t.selection({item:J,index:ln})):void 0;if(!(mn&&!fn))return m("div",{key:J.value,class:"v-select__selection"},[G?t.chip?m(vn,{key:"chip-defaults",defaults:{VChip:{closable:n.closableChips,size:"small",text:J.title}}},{default:()=>[fn]}):m(He,z({key:"chip",closable:n.closableChips,size:"small",text:J.title,disabled:J.props.disabled},q),null):fn??m("span",{class:"v-select__selection-text"},[J.title,n.multiple&&ln<d.value.length-1&&m("span",{class:"v-select__selection-comma"},[bn(",")])])])})]),"append-inner":function(){var q,mn;for(var J=arguments.length,ln=new Array(J),Z=0;Z<J;Z++)ln[Z]=arguments[Z];return m(dn,null,[(q=t["append-inner"])==null?void 0:q.call(t,...ln),n.menuIcon?m(Vn,{class:"v-select__menu-icon",color:(mn=i.value)==null?void 0:mn.fieldIconColor,icon:n.menuIcon},null):void 0])}})}),ht({isFocused:g,menu:C,select:I},i)}}),Tg=(n,e,t)=>{if(n==null||e==null)return-1;if(!e.length)return 0;n=n.toString().toLocaleLowerCase(),e=e.toString().toLocaleLowerCase();const a=[];let i=n.indexOf(e);for(;~i;)a.push([i,i+e.length]),i=n.indexOf(e,i+e.length);return a.length?a:-1};function Ii(n,e){if(!(n==null||typeof n=="boolean"||n===-1))return typeof n=="number"?[[n,n+e.length]]:Array.isArray(n[0])?n:[n]}const ya=T({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Mg(n,e,t){var l;const a=[],i=(t==null?void 0:t.default)??Tg,r=t!=null&&t.filterKeys?_n(t.filterKeys):!1,o=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(n!=null&&n.length))return a;n:for(let s=0;s<n.length;s++){const[u,d=u]=_n(n[s]),p={},f={};let c=-1;if((e||o>0)&&!(t!=null&&t.noFilter)){if(typeof u=="object"){const x=r||Object.keys(d);for(const v of x){const b=jn(d,v),k=(l=t==null?void 0:t.customKeyFilter)==null?void 0:l[v];if(c=k?k(b,e,u):i(b,e,u),c!==-1&&c!==!1)k?p[v]=Ii(c,e):f[v]=Ii(c,e);else if((t==null?void 0:t.filterMode)==="every")continue n}}else c=i(u,e,u),c!==-1&&c!==!1&&(f.title=Ii(c,e));const g=Object.keys(f).length,h=Object.keys(p).length;if(!g&&!h||(t==null?void 0:t.filterMode)==="union"&&h!==o&&!g||(t==null?void 0:t.filterMode)==="intersection"&&(h!==o||!g))continue}a.push({index:s,matches:{...f,...p}})}return a}function ka(n,e,t,a){const i=X([]),r=X(new Map),o=y(()=>a!=null&&a.transform?lt(e).map(s=>[s,a.transform(s)]):lt(e));Mn(()=>{const s=typeof t=="function"?t():lt(t),u=typeof s!="string"&&typeof s!="number"?"":String(s),d=Mg(o.value,u,{customKeyFilter:{...n.customKeyFilter,...lt(a==null?void 0:a.customKeyFilter)},default:n.customFilter,filterKeys:n.filterKeys,filterMode:n.filterMode,noFilter:n.noFilter}),p=lt(e),f=[],c=new Map;d.forEach(g=>{let{index:h,matches:x}=g;const v=p[h];f.push(v),c.set(v.value,x)}),i.value=f,r.value=c});function l(s){return r.value.get(s.value)}return{filteredItems:i,filteredMatches:r,getMatches:l}}function ds(n,e,t){return t==null||!t.length?e:t.map((a,i)=>{const r=i===0?0:t[i-1][1],o=[m("span",{class:`${n}__unmask`},[e.slice(r,a[0])]),m("span",{class:`${n}__mask`},[e.slice(a[0],a[1])])];return i===t.length-1&&o.push(m("span",{class:`${n}__unmask`},[e.slice(a[1])])),m(dn,null,[o])})}const Rg=T({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...ya({filterKeys:["title"]}),...qr(),...Rn(ha({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ct({transition:!1})},"VAutocomplete"),$g=L()({name:"VAutocomplete",props:Rg(),emits:{"update:focused":n=>!0,"update:search":n=>!0,"update:modelValue":n=>!0,"update:menu":n=>!0},setup(n,e){let{slots:t}=e;const{t:a}=On(),i=U(),r=X(!1),o=X(!0),l=X(!1),s=U(),u=U(),d=X(-1),{items:p,transformIn:f,transformOut:c}=Hr(n),{textColorClasses:g,textColorStyles:h}=Qn(()=>{var Y;return(Y=i.value)==null?void 0:Y.color}),x=sn(n,"search",""),v=sn(n,"modelValue",[],Y=>f(Y===null?[null]:_n(Y)),Y=>{const on=c(Y);return n.multiple?on:on[0]??null}),b=y(()=>typeof n.counterValue=="function"?n.counterValue(v.value):typeof n.counterValue=="number"?n.counterValue:v.value.length),k=xa(n),{filteredItems:C,getMatches:S}=ka(n,p,()=>o.value?"":x.value),E=y(()=>n.hideSelected?C.value.filter(Y=>!v.value.some(on=>on.value===Y.value)):C.value),A=y(()=>!!(n.chips||t.chip)),w=y(()=>A.value||!!t.selection),F=y(()=>v.value.map(Y=>Y.props.value)),_=y(()=>{var on;return(n.autoSelectFirst===!0||n.autoSelectFirst==="exact"&&x.value===((on=E.value[0])==null?void 0:on.title))&&E.value.length>0&&!o.value&&!l.value}),V=y(()=>n.hideNoData&&!E.value.length||k.isReadonly.value||k.isDisabled.value),P=sn(n,"menu"),I=y({get:()=>P.value,set:Y=>{var on;P.value&&!Y&&((on=s.value)!=null&&on.ΨopenChildren.size)||Y&&V.value||(P.value=Y)}}),M=y(()=>I.value?n.closeText:n.openText),j=U(),W=Kr(j,i);function nn(Y){n.openOnClear&&(I.value=!0),x.value=""}function Q(){V.value||(I.value=!0)}function G(Y){V.value||(r.value&&(Y.preventDefault(),Y.stopPropagation()),I.value=!I.value)}function R(Y){var on;Y.key!==" "&&De(Y)&&((on=i.value)==null||on.focus())}function D(Y){var en,cn,pn,hn,yn;if(k.isReadonly.value)return;const on=(en=i.value)==null?void 0:en.selectionStart,H=v.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(Y.key)&&Y.preventDefault(),["Enter","ArrowDown"].includes(Y.key)&&(I.value=!0),["Escape"].includes(Y.key)&&(I.value=!1),_.value&&["Enter","Tab"].includes(Y.key)&&!v.value.some(In=>{let{value:gn}=In;return gn===E.value[0].value})&&fn(E.value[0]),Y.key==="ArrowDown"&&_.value&&((cn=j.value)==null||cn.focus("next")),["Backspace","Delete"].includes(Y.key)){if(!n.multiple&&w.value&&v.value.length>0&&!x.value)return fn(v.value[0],!1);if(~d.value){Y.preventDefault();const In=d.value;fn(v.value[d.value],!1),d.value=In>=H-1?H-2:In}else Y.key==="Backspace"&&!x.value&&(d.value=H-1);return}if(n.multiple)if(Y.key==="ArrowLeft"){if(d.value<0&&on&&on>0)return;const In=d.value>-1?d.value-1:H-1;if(v.value[In])d.value=In;else{const gn=((pn=x.value)==null?void 0:pn.length)??null;d.value=-1,(hn=i.value)==null||hn.setSelectionRange(gn,gn)}}else if(Y.key==="ArrowRight"){if(d.value<0)return;const In=d.value+1;v.value[In]?d.value=In:(d.value=-1,(yn=i.value)==null||yn.setSelectionRange(0,0))}else~d.value&&De(Y)&&(d.value=-1)}function $(Y){if(Be(i.value,":autofill")||Be(i.value,":-webkit-autofill")){const on=p.value.find(H=>H.title===Y.target.value);on&&fn(on)}}function K(){var Y;n.eager&&((Y=u.value)==null||Y.calculateVisibleItems())}function J(){var Y;r.value&&(o.value=!0,(Y=i.value)==null||Y.focus())}function ln(Y){r.value=!0,setTimeout(()=>{l.value=!0})}function Z(Y){l.value=!1}function q(Y){(Y==null||Y===""&&!n.multiple&&!w.value)&&(v.value=[])}const mn=X(!1);function fn(Y){let on=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!Y||Y.props.disabled))if(n.multiple){const H=v.value.findIndex(cn=>(n.valueComparator||Jn)(cn.value,Y.value)),en=on??!~H;if(~H){const cn=en?[...v.value,Y]:[...v.value];cn.splice(H,1),v.value=cn}else en&&(v.value=[...v.value,Y]);n.clearOnSelect&&(x.value="")}else{const H=on!==!1;v.value=H?[Y]:[],x.value=H&&!w.value?Y.title:"",Fn(()=>{I.value=!1,o.value=!0})}}return tn(r,(Y,on)=>{var H;Y!==on&&(Y?(mn.value=!0,x.value=n.multiple||w.value?"":String(((H=v.value.at(-1))==null?void 0:H.props.title)??""),o.value=!0,Fn(()=>mn.value=!1)):(!n.multiple&&x.value==null&&(v.value=[]),I.value=!1,(n.multiple||w.value)&&(x.value=""),d.value=-1))}),tn(x,Y=>{!r.value||mn.value||(Y&&(I.value=!0),o.value=!Y)}),tn(I,()=>{if(!n.hideSelected&&I.value&&v.value.length){const Y=E.value.findIndex(on=>v.value.some(H=>on.value===H.value));Cn&&window.requestAnimationFrame(()=>{var on;Y>=0&&((on=u.value)==null||on.scrollToIndex(Y))})}}),tn(()=>n.items,(Y,on)=>{I.value||r.value&&!on.length&&Y.length&&(I.value=!0)}),tn(v,Y=>{var on;!n.multiple&&!w.value&&(x.value=((on=Y[0])==null?void 0:on.title)??"")}),N(()=>{const Y=!!(!n.hideNoData||E.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),on=v.value.length>0,H=Nt.filterProps(n);return m(Nt,z({ref:i},H,{modelValue:x.value,"onUpdate:modelValue":[en=>x.value=en,q],focused:r.value,"onUpdate:focused":en=>r.value=en,validationValue:v.externalValue,counterValue:b.value,dirty:on,onChange:$,class:["v-autocomplete",`v-autocomplete--${n.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":I.value,"v-autocomplete--chips":!!n.chips,"v-autocomplete--selection-slot":!!w.value,"v-autocomplete--selecting-index":d.value>-1},n.class],style:n.style,readonly:k.isReadonly.value,placeholder:on?void 0:n.placeholder,"onClick:clear":nn,"onMousedown:control":Q,onKeydown:D}),{...t,default:()=>m(dn,null,[m(Re,z({ref:s,modelValue:I.value,"onUpdate:modelValue":en=>I.value=en,activator:"parent",contentClass:"v-autocomplete__content",disabled:V.value,eager:n.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:n.transition,onAfterEnter:K,onAfterLeave:J},n.menuProps),{default:()=>[Y&&m(ei,z({ref:j,selected:F.value,selectStrategy:n.multiple?"independent":"single-independent",onMousedown:en=>en.preventDefault(),onKeydown:R,onFocusin:ln,onFocusout:Z,tabindex:"-1","aria-live":"polite",color:n.itemColor??n.color},W,n.listProps),{default:()=>{var en,cn,pn;return[(en=t["prepend-item"])==null?void 0:en.call(t),!E.value.length&&!n.hideNoData&&(((cn=t["no-data"])==null?void 0:cn.call(t))??m(zt,{key:"no-data",title:a(n.noDataText)},null)),m(ii,{ref:u,renderless:!0,items:E.value,itemKey:"value"},{default:hn=>{var Un;let{item:yn,index:In,itemRef:gn}=hn;const ot=z(yn.props,{ref:gn,key:yn.value,active:_.value&&In===0?!0:void 0,onClick:()=>fn(yn,null)});return((Un=t.item)==null?void 0:Un.call(t,{item:yn,index:In,props:ot}))??m(zt,z(ot,{role:"option"}),{prepend:Vt=>{let{isSelected:Fa}=Vt;return m(dn,null,[n.multiple&&!n.hideSelected?m(Lt,{key:yn.value,modelValue:Fa,ripple:!1,tabindex:"-1"},null):void 0,yn.props.prependAvatar&&m(yt,{image:yn.props.prependAvatar},null),yn.props.prependIcon&&m(Vn,{icon:yn.props.prependIcon},null)])},title:()=>{var Vt;return o.value?yn.title:ds("v-autocomplete",yn.title,(Vt=S(yn))==null?void 0:Vt.title)}})}}),(pn=t["append-item"])==null?void 0:pn.call(t)]}})]}),v.value.map((en,cn)=>{function pn(gn){gn.stopPropagation(),gn.preventDefault(),fn(en,!1)}const hn={"onClick:close":pn,onKeydown(gn){gn.key!=="Enter"&&gn.key!==" "||(gn.preventDefault(),gn.stopPropagation(),pn(gn))},onMousedown(gn){gn.preventDefault(),gn.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},yn=A.value?!!t.chip:!!t.selection,In=yn?Ga(A.value?t.chip({item:en,index:cn,props:hn}):t.selection({item:en,index:cn})):void 0;if(!(yn&&!In))return m("div",{key:en.value,class:["v-autocomplete__selection",cn===d.value&&["v-autocomplete__selection--selected",g.value]],style:cn===d.value?h.value:{}},[A.value?t.chip?m(vn,{key:"chip-defaults",defaults:{VChip:{closable:n.closableChips,size:"small",text:en.title}}},{default:()=>[In]}):m(He,z({key:"chip",closable:n.closableChips,size:"small",text:en.title,disabled:en.props.disabled},hn),null):In??m("span",{class:"v-autocomplete__selection-text"},[en.title,n.multiple&&cn<v.value.length-1&&m("span",{class:"v-autocomplete__selection-comma"},[bn(",")])])])})]),"append-inner":function(){var hn,yn;for(var en=arguments.length,cn=new Array(en),pn=0;pn<en;pn++)cn[pn]=arguments[pn];return m(dn,null,[(hn=t["append-inner"])==null?void 0:hn.call(t,...cn),n.menuIcon?m(Vn,{class:"v-autocomplete__menu-icon",color:(yn=i.value)==null?void 0:yn.fieldIconColor,icon:n.menuIcon,onMousedown:G,onClick:Ol,"aria-label":a(M.value),title:a(M.value),tabindex:"-1"},null):void 0])}})}),ht({isFocused:r,isPristine:o,menu:I,search:x,filteredItems:C,select:fn},i)}}),Og=T({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:un,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...rn(),...jt({location:"top end"}),...Bn(),...xn(),...kn(),...Ct({transition:"scale-rotate-transition"})},"VBadge"),Lg=L()({name:"VBadge",inheritAttrs:!1,props:Og(),setup(n,e){const{backgroundColorClasses:t,backgroundColorStyles:a}=En(()=>n.color),{roundedClasses:i}=Ln(n),{t:r}=On(),{textColorClasses:o,textColorStyles:l}=Qn(()=>n.textColor),{themeClasses:s}=Er(),{locationStyles:u}=ke(n,!0,d=>(n.floating?n.dot?2:4:n.dot?8:12)+(["top","bottom"].includes(d)?Number(n.offsetY??0):["left","right"].includes(d)?Number(n.offsetX??0):0));return N(()=>{const d=Number(n.content),p=!n.max||isNaN(d)?n.content:d<=Number(n.max)?d:`${n.max}+`,[f,c]=Di(e.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return m(n.tag,z({class:["v-badge",{"v-badge--bordered":n.bordered,"v-badge--dot":n.dot,"v-badge--floating":n.floating,"v-badge--inline":n.inline},n.class]},c,{style:n.style}),{default:()=>{var g,h;return[m("div",{class:"v-badge__wrapper"},[(h=(g=e.slots).default)==null?void 0:h.call(g),m(at,{transition:n.transition},{default:()=>{var x,v;return[Tn(m("span",z({class:["v-badge__badge",s.value,t.value,i.value,o.value],style:[a.value,l.value,n.inline?{}:u.value],"aria-atomic":"true","aria-label":r(n.label,d),"aria-live":"polite",role:"status"},f),[n.dot?void 0:e.slots.badge?(v=(x=e.slots).badge)==null?void 0:v.call(x):n.icon?m(Vn,{icon:n.icon},null):p]),[[Ft,n.modelValue]])]}})])]}})}),{}}}),zg=T({color:String,density:String,...rn()},"VBannerActions"),us=L()({name:"VBannerActions",props:zg(),setup(n,e){let{slots:t}=e;return $n({VBtn:{color:n.color,density:n.density,slim:!0,variant:"text"}}),N(()=>{var a;return m("div",{class:["v-banner-actions",n.class],style:n.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ps=Bt("v-banner-text"),Ng=T({avatar:String,bgColor:String,color:String,icon:un,lines:String,stacked:Boolean,sticky:Boolean,text:String,...ut(),...rn(),...Kn(),...Wn(),...we({mobile:null}),...Gn(),...jt(),...ze(),...Bn(),...xn(),...kn()},"VBanner"),jg=L()({name:"VBanner",props:Ng(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:a,backgroundColorStyles:i}=En(()=>n.bgColor),{borderClasses:r}=bt(n),{densityClasses:o}=rt(n),{displayClasses:l,mobile:s}=wt(n),{dimensionStyles:u}=Yn(n),{elevationClasses:d}=Zn(n),{locationStyles:p}=ke(n),{positionClasses:f}=Ne(n),{roundedClasses:c}=Ln(n),{themeClasses:g}=Pn(n),h=B(()=>n.color),x=B(()=>n.density);$n({VBannerActions:{color:h,density:x}}),N(()=>{const v=!!(n.text||t.text),b=!!(n.avatar||n.icon),k=!!(b||t.prepend);return m(n.tag,{class:["v-banner",{"v-banner--stacked":n.stacked||s.value,"v-banner--sticky":n.sticky,[`v-banner--${n.lines}-line`]:!!n.lines},g.value,a.value,r.value,o.value,l.value,d.value,f.value,c.value,n.class],style:[i.value,u.value,p.value,n.style],role:"banner"},{default:()=>{var C;return[k&&m("div",{key:"prepend",class:"v-banner__prepend"},[t.prepend?m(vn,{key:"prepend-defaults",disabled:!b,defaults:{VAvatar:{color:h.value,density:x.value,icon:n.icon,image:n.avatar}}},t.prepend):m(yt,{key:"prepend-avatar",color:h.value,density:x.value,icon:n.icon,image:n.avatar},null)]),m("div",{class:"v-banner__content"},[v&&m(ps,{key:"text"},{default:()=>{var S;return[((S=t.text)==null?void 0:S.call(t))??n.text]}}),(C=t.default)==null?void 0:C.call(t)]),t.actions&&m(us,{key:"actions"},t.actions)]}})})}}),Hg=T({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:n=>!n||["horizontal","shift"].includes(n)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...ut(),...rn(),...Kn(),...Gn(),...Bn(),...ge({name:"bottom-navigation"}),...xn({tag:"header"}),...be({selectedClass:"v-btn--selected"}),...kn()},"VBottomNavigation"),Wg=L()({name:"VBottomNavigation",props:Hg(),emits:{"update:active":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{themeClasses:a}=Er(),{borderClasses:i}=bt(n),{backgroundColorClasses:r,backgroundColorStyles:o}=En(()=>n.bgColor),{densityClasses:l}=rt(n),{elevationClasses:s}=Zn(n),{roundedClasses:u}=Ln(n),{ssrBootStyles:d}=xe(),p=y(()=>Number(n.height)-(n.density==="comfortable"?8:0)-(n.density==="compact"?16:0)),f=sn(n,"active",n.active),{layoutItemStyles:c}=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:B(()=>"bottom"),layoutSize:B(()=>f.value?p.value:0),elementSize:p,active:f,absolute:B(()=>n.absolute)});return ne(n,Mr),$n({VBtn:{baseColor:B(()=>n.baseColor),color:B(()=>n.color),density:B(()=>n.density),stacked:B(()=>n.mode!=="horizontal"),variant:"text"}},{scoped:!0}),N(()=>m(n.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":n.grow,"v-bottom-navigation--shift":n.mode==="shift"},a.value,r.value,i.value,l.value,s.value,u.value,n.class],style:[o.value,c.value,{height:an(p.value)},d.value,n.style]},{default:()=>[t.default&&m("div",{class:"v-bottom-navigation__content"},[t.default()])]})),{}}}),cs=T({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...va({origin:"center center",scrollStrategy:"block",transition:{component:Ua},zIndex:2400})},"VDialog"),Zi=L()({name:"VDialog",props:cs(),emits:{"update:modelValue":n=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=sn(n,"modelValue"),{scopeId:r}=Se(),o=U();function l(d){var c,g;const p=d.relatedTarget,f=d.target;if(p!==f&&((c=o.value)!=null&&c.contentEl)&&((g=o.value)!=null&&g.globalTop)&&![document,o.value.contentEl].includes(f)&&!o.value.contentEl.contains(f)){const h=qe(o.value.contentEl);if(!h.length)return;const x=h[0],v=h[h.length-1];p===x?v.focus():x.focus()}}tt(()=>{document.removeEventListener("focusin",l)}),Cn&&tn(()=>i.value&&n.retainFocus,d=>{d?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0});function s(){var d;t("afterEnter"),(n.scrim||n.retainFocus)&&((d=o.value)!=null&&d.contentEl)&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function u(){t("afterLeave")}return tn(i,async d=>{var p;d||(await Fn(),(p=o.value.activatorEl)==null||p.focus({preventScroll:!0}))}),N(()=>{const d=Et.filterProps(n),p=z({"aria-haspopup":"dialog"},n.activatorProps),f=z({tabindex:-1},n.contentProps);return m(Et,z({ref:o,class:["v-dialog",{"v-dialog--fullscreen":n.fullscreen,"v-dialog--scrollable":n.scrollable},n.class],style:n.style},d,{modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,"aria-modal":"true",activatorProps:p,contentProps:f,height:n.fullscreen?void 0:n.height,width:n.fullscreen?void 0:n.width,maxHeight:n.fullscreen?void 0:n.maxHeight,maxWidth:n.fullscreen?void 0:n.maxWidth,role:"dialog",onAfterEnter:s,onAfterLeave:u},r),{activator:a.activator,default:function(){for(var c=arguments.length,g=new Array(c),h=0;h<c;h++)g[h]=arguments[h];return m(vn,{root:"VDialog"},{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,...g)]}})}})}),ht({},o)}}),Yg=T({inset:Boolean,...cs({transition:"bottom-sheet-transition"})},"VBottomSheet"),Gg=L()({name:"VBottomSheet",props:Yg(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue");return N(()=>{const i=Zi.filterProps(n);return m(Zi,z(i,{contentClass:["v-bottom-sheet__content",n.contentClass],modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-bottom-sheet",{"v-bottom-sheet--inset":n.inset},n.class],style:n.style}),t)}),{}}}),Ug=T({divider:[Number,String],...rn()},"VBreadcrumbsDivider"),gs=L()({name:"VBreadcrumbsDivider",props:Ug(),setup(n,e){let{slots:t}=e;return N(()=>{var a;return m("li",{"aria-hidden":"true",class:["v-breadcrumbs-divider",n.class],style:n.style},[((a=t==null?void 0:t.default)==null?void 0:a.call(t))??n.divider])}),{}}}),Kg=T({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...rn(),...ga(),...xn({tag:"li"})},"VBreadcrumbsItem"),fs=L()({name:"VBreadcrumbsItem",props:Kg(),setup(n,e){let{slots:t,attrs:a}=e;const i=ca(n,a),r=y(()=>{var s;return n.active||((s=i.isActive)==null?void 0:s.value)}),{textColorClasses:o,textColorStyles:l}=Qn(()=>r.value?n.activeColor:n.color);return N(()=>m(n.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":n.disabled,[`${n.activeClass}`]:r.value&&n.activeClass},o.value,n.class],style:[l.value,n.style],"aria-current":r.value?"page":void 0},{default:()=>{var s,u;return[i.isLink.value?m("a",z({class:"v-breadcrumbs-item--link",onClick:i.navigate},i.linkProps),[((u=t.default)==null?void 0:u.call(t))??n.title]):((s=t.default)==null?void 0:s.call(t))??n.title]}})),{}}}),qg=T({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:un,items:{type:Array,default:()=>[]},...rn(),...Kn(),...Bn(),...xn({tag:"ul"})},"VBreadcrumbs"),Xg=L()({name:"VBreadcrumbs",props:qg(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:a,backgroundColorStyles:i}=En(()=>n.bgColor),{densityClasses:r}=rt(n),{roundedClasses:o}=Ln(n);$n({VBreadcrumbsDivider:{divider:B(()=>n.divider)},VBreadcrumbsItem:{activeClass:B(()=>n.activeClass),activeColor:B(()=>n.activeColor),color:B(()=>n.color),disabled:B(()=>n.disabled)}});const l=y(()=>n.items.map(s=>typeof s=="string"?{item:{title:s},raw:s}:{item:s,raw:s}));return N(()=>{const s=!!(t.prepend||n.icon);return m(n.tag,{class:["v-breadcrumbs",a.value,r.value,o.value,n.class],style:[i.value,n.style]},{default:()=>{var u;return[s&&m("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?m(vn,{key:"prepend-defaults",disabled:!n.icon,defaults:{VIcon:{icon:n.icon,start:!0}}},t.prepend):m(Vn,{key:"prepend-icon",start:!0,icon:n.icon},null)]),l.value.map((d,p,f)=>{var h;let{item:c,raw:g}=d;return m(dn,null,[((h=t.item)==null?void 0:h.call(t,{item:c,index:p}))??m(fs,z({key:p,disabled:p>=f.length-1},typeof c=="string"?{title:c}:c),{default:t.title?()=>{var x;return(x=t.title)==null?void 0:x.call(t,{item:c,index:p})}:void 0}),p<f.length-1&&m(gs,null,{default:t.divider?()=>{var x;return(x=t.divider)==null?void 0:x.call(t,{item:g,index:p})}:void 0})])}),(u=t.default)==null?void 0:u.call(t)]}})}),{}}}),xs=L()({name:"VCardActions",props:rn(),setup(n,e){let{slots:t}=e;return $n({VBtn:{slim:!0,variant:"text"}}),N(()=>{var a;return m("div",{class:["v-card-actions",n.class],style:n.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Zg=T({opacity:[Number,String],...rn(),...xn()},"VCardSubtitle"),vs=L()({name:"VCardSubtitle",props:Zg(),setup(n,e){let{slots:t}=e;return N(()=>m(n.tag,{class:["v-card-subtitle",n.class],style:[{"--v-card-subtitle-opacity":n.opacity},n.style]},t)),{}}}),bs=Bt("v-card-title"),Jg=T({appendAvatar:String,appendIcon:un,prependAvatar:String,prependIcon:un,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...rn(),...Kn()},"VCardItem"),hs=L()({name:"VCardItem",props:Jg(),setup(n,e){let{slots:t}=e;return N(()=>{var u;const a=!!(n.prependAvatar||n.prependIcon),i=!!(a||t.prepend),r=!!(n.appendAvatar||n.appendIcon),o=!!(r||t.append),l=!!(n.title!=null||t.title),s=!!(n.subtitle!=null||t.subtitle);return m("div",{class:["v-card-item",n.class],style:n.style},[i&&m("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?m(vn,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon}}},t.prepend):m(dn,null,[n.prependAvatar&&m(yt,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&m(Vn,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)])]),m("div",{class:"v-card-item__content"},[l&&m(bs,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??$t(n.title)]}}),s&&m(vs,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??$t(n.subtitle)]}}),(u=t.default)==null?void 0:u.call(t)]),o&&m("div",{key:"append",class:"v-card-item__append"},[t.append?m(vn,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon}}},t.append):m(dn,null,[n.appendIcon&&m(Vn,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&m(yt,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)])])])}),{}}}),Qg=T({opacity:[Number,String],...rn(),...xn()},"VCardText"),ys=L()({name:"VCardText",props:Qg(),setup(n,e){let{slots:t}=e;return N(()=>m(n.tag,{class:["v-card-text",n.class],style:[{"--v-card-text-opacity":n.opacity},n.style]},t)),{}}}),nf=T({appendAvatar:String,appendIcon:un,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:un,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...ut(),...rn(),...Kn(),...Wn(),...Gn(),...Ja(),...jt(),...ze(),...Bn(),...ga(),...xn(),...kn(),...kt({variant:"elevated"})},"VCard"),tf=L()({name:"VCard",directives:{Ripple:Ht},props:nf(),setup(n,e){let{attrs:t,slots:a}=e;const{themeClasses:i}=Pn(n),{borderClasses:r}=bt(n),{colorClasses:o,colorStyles:l,variantClasses:s}=ve(n),{densityClasses:u}=rt(n),{dimensionStyles:d}=Yn(n),{elevationClasses:p}=Zn(n),{loaderClasses:f}=ua(n),{locationStyles:c}=ke(n),{positionClasses:g}=Ne(n),{roundedClasses:h}=Ln(n),x=ca(n,t);return N(()=>{const v=n.link!==!1&&x.isLink.value,b=!n.disabled&&n.link!==!1&&(n.link||x.isClickable.value),k=v?"a":n.tag,C=!!(a.title||n.title!=null),S=!!(a.subtitle||n.subtitle!=null),E=C||S,A=!!(a.append||n.appendAvatar||n.appendIcon),w=!!(a.prepend||n.prependAvatar||n.prependIcon),F=!!(a.image||n.image),_=E||w||A,V=!!(a.text||n.text!=null);return Tn(m(k,z({class:["v-card",{"v-card--disabled":n.disabled,"v-card--flat":n.flat,"v-card--hover":n.hover&&!(n.disabled||n.flat),"v-card--link":b},i.value,r.value,o.value,u.value,p.value,f.value,g.value,h.value,s.value,n.class],style:[l.value,d.value,c.value,n.style],onClick:b&&x.navigate,tabindex:n.disabled?-1:void 0},x.linkProps),{default:()=>{var P;return[F&&m("div",{key:"image",class:"v-card__image"},[a.image?m(vn,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{cover:!0,src:n.image}}},a.image):m(Ot,{key:"image-img",cover:!0,src:n.image},null)]),m(pa,{name:"v-card",active:!!n.loading,color:typeof n.loading=="boolean"?void 0:n.loading},{default:a.loader}),_&&m(hs,{key:"item",prependAvatar:n.prependAvatar,prependIcon:n.prependIcon,title:n.title,subtitle:n.subtitle,appendAvatar:n.appendAvatar,appendIcon:n.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),V&&m(ys,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??n.text]}}),(P=a.default)==null?void 0:P.call(a),a.actions&&m(xs,null,{default:a.actions}),Qt(b,"v-card")]}}),[[ft("ripple"),b&&n.ripple]])}),{}}}),ef=n=>{const{touchstartX:e,touchendX:t,touchstartY:a,touchendY:i}=n,r=.5,o=16;n.offsetX=t-e,n.offsetY=i-a,Math.abs(n.offsetY)<r*Math.abs(n.offsetX)&&(n.left&&t<e-o&&n.left(n),n.right&&t>e+o&&n.right(n)),Math.abs(n.offsetX)<r*Math.abs(n.offsetY)&&(n.up&&i<a-o&&n.up(n),n.down&&i>a+o&&n.down(n))};function af(n,e){var a;const t=n.changedTouches[0];e.touchstartX=t.clientX,e.touchstartY=t.clientY,(a=e.start)==null||a.call(e,{originalEvent:n,...e})}function rf(n,e){var a;const t=n.changedTouches[0];e.touchendX=t.clientX,e.touchendY=t.clientY,(a=e.end)==null||a.call(e,{originalEvent:n,...e}),ef(e)}function of(n,e){var a;const t=n.changedTouches[0];e.touchmoveX=t.clientX,e.touchmoveY=t.clientY,(a=e.move)==null||a.call(e,{originalEvent:n,...e})}function lf(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:n.left,right:n.right,up:n.up,down:n.down,start:n.start,move:n.move,end:n.end};return{touchstart:t=>af(t,e),touchend:t=>rf(t,e),touchmove:t=>of(t,e)}}function mf(n,e){var l;const t=e.value,a=t!=null&&t.parent?n.parentElement:n,i=(t==null?void 0:t.options)??{passive:!0},r=(l=e.instance)==null?void 0:l.$.uid;if(!a||!r)return;const o=lf(e.value);a._touchHandlers=a._touchHandlers??Object.create(null),a._touchHandlers[r]=o,Dl(o).forEach(s=>{a.addEventListener(s,o[s],i)})}function sf(n,e){var r,o;const t=(r=e.value)!=null&&r.parent?n.parentElement:n,a=(o=e.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const i=t._touchHandlers[a];Dl(i).forEach(l=>{t.removeEventListener(l,i[l])}),delete t._touchHandlers[a]}const Zr={mounted:mf,unmounted:sf},ks=Symbol.for("vuetify:v-window"),ws=Symbol.for("vuetify:v-window-group"),ri=T({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:n=>typeof n=="boolean"||n==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...rn(),...xn(),...kn()},"VWindow"),se=L()({name:"VWindow",directives:{Touch:Zr},props:ri(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{isRtl:i}=Hn(),{t:r}=On(),o=ne(n,ws),l=U(),s=y(()=>i.value?!n.reverse:n.reverse),u=X(!1),d=y(()=>{const C=n.direction==="vertical"?"y":"x",E=(s.value?!u.value:u.value)?"-reverse":"";return`v-window-${C}${E}-transition`}),p=X(0),f=U(void 0),c=y(()=>o.items.value.findIndex(C=>o.selected.value.includes(C.id)));tn(c,(C,S)=>{const E=o.items.value.length,A=E-1;E<=2?u.value=C<S:C===A&&S===0?u.value=!0:C===0&&S===A?u.value=!1:u.value=C<S}),An(ks,{transition:d,isReversed:u,transitionCount:p,transitionHeight:f,rootRef:l});const g=B(()=>n.continuous||c.value!==0),h=B(()=>n.continuous||c.value!==o.items.value.length-1);function x(){g.value&&o.prev()}function v(){h.value&&o.next()}const b=y(()=>{const C=[],S={icon:i.value?n.nextIcon:n.prevIcon,class:`v-window__${s.value?"right":"left"}`,onClick:o.prev,"aria-label":r("$vuetify.carousel.prev")};C.push(g.value?t.prev?t.prev({props:S}):m(wn,S,null):m("div",null,null));const E={icon:i.value?n.prevIcon:n.nextIcon,class:`v-window__${s.value?"left":"right"}`,onClick:o.next,"aria-label":r("$vuetify.carousel.next")};return C.push(h.value?t.next?t.next({props:E}):m(wn,E,null):m("div",null,null)),C}),k=y(()=>n.touch===!1?n.touch:{...{left:()=>{s.value?x():v()},right:()=>{s.value?v():x()},start:S=>{let{originalEvent:E}=S;E.stopPropagation()}},...n.touch===!0?{}:n.touch});return N(()=>Tn(m(n.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":n.showArrows==="hover"},a.value,n.class],style:n.style},{default:()=>{var C,S;return[m("div",{class:"v-window__container",style:{height:f.value}},[(C=t.default)==null?void 0:C.call(t,{group:o}),n.showArrows!==!1&&m("div",{class:"v-window__controls"},[b.value])]),(S=t.additional)==null?void 0:S.call(t,{group:o})]}}),[[ft("touch"),k.value]])),{group:o}}}),df=T({color:String,cycle:Boolean,delimiterIcon:{type:un,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:n=>Number(n)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ri({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),uf=L()({name:"VCarousel",props:df(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),{t:i}=On(),r=U();let o=-1;tn(a,s),tn(()=>n.interval,s),tn(()=>n.cycle,u=>{u?s():window.clearTimeout(o)}),it(l);function l(){!n.cycle||!r.value||(o=window.setTimeout(r.value.group.next,Number(n.interval)>0?Number(n.interval):6e3))}function s(){window.clearTimeout(o),window.requestAnimationFrame(l)}return N(()=>{const u=se.filterProps(n);return m(se,z({ref:r},u,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,class:["v-carousel",{"v-carousel--hide-delimiter-background":n.hideDelimiterBackground,"v-carousel--vertical-delimiters":n.verticalDelimiters},n.class],style:[{height:an(n.height)},n.style]}),{default:t.default,additional:d=>{let{group:p}=d;return m(dn,null,[!n.hideDelimiters&&m("div",{class:"v-carousel__controls",style:{left:n.verticalDelimiters==="left"&&n.verticalDelimiters?0:"auto",right:n.verticalDelimiters==="right"?0:"auto"}},[p.items.value.length>0&&m(vn,{defaults:{VBtn:{color:n.color,icon:n.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[p.items.value.map((f,c)=>{const g={id:`carousel-item-${f.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",c+1,p.items.value.length),class:["v-carousel__controls__item",p.isSelected(f.id)&&"v-btn--active"],onClick:()=>p.select(f.id,!0)};return t.item?t.item({props:g,item:f}):m(wn,z(f,g),null)})]})]),n.progress&&m(Za,{class:"v-carousel__progress",color:typeof n.progress=="string"?n.progress:void 0,modelValue:(p.getItemIndex(a.value)+1)/p.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),oi=T({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...rn(),...he(),...Gr()},"VWindowItem"),de=L()({name:"VWindowItem",directives:{Touch:Zr},props:oi(),emits:{"group:selected":n=>!0},setup(n,e){let{slots:t}=e;const a=Sn(ks),i=ye(n,ws),{isBooted:r}=xe();if(!a||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=X(!1),l=y(()=>r.value&&(a.isReversed.value?n.reverseTransition!==!1:n.transition!==!1));function s(){!o.value||!a||(o.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function u(){var g;o.value||!a||(o.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=an((g=a.rootRef.value)==null?void 0:g.clientHeight)),a.transitionCount.value+=1)}function d(){s()}function p(g){o.value&&Fn(()=>{!l.value||!o.value||!a||(a.transitionHeight.value=an(g.clientHeight))})}const f=y(()=>{const g=a.isReversed.value?n.reverseTransition:n.transition;return l.value?{name:typeof g!="string"?a.transition.value:g,onBeforeEnter:u,onAfterEnter:s,onEnterCancelled:d,onBeforeLeave:u,onAfterLeave:s,onLeaveCancelled:d,onEnter:p}:!1}),{hasContent:c}=Ur(n,i.isSelected);return N(()=>m(at,{transition:f.value,disabled:!r.value},{default:()=>{var g;return[Tn(m("div",{class:["v-window-item",i.selectedClass.value,n.class],style:n.style},[c.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ft,i.isSelected.value]])]}})),{groupItem:i}}}),pf=T({...dm(),...oi()},"VCarouselItem"),cf=L()({name:"VCarouselItem",inheritAttrs:!1,props:pf(),setup(n,e){let{slots:t,attrs:a}=e;N(()=>{const i=Ot.filterProps(n),r=de.filterProps(n);return m(de,z({class:["v-carousel-item",n.class]},r),{default:()=>[m(Ot,z(a,i),t)]})})}}),gf=Bt("v-code","code"),ff=T({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...rn()},"VColorPickerCanvas"),xf=xt({name:"VColorPickerCanvas",props:ff(),emits:{"update:color":n=>!0,"update:position":n=>!0},setup(n,e){let{emit:t}=e;const a=X(!1),i=U(),r=X(parseFloat(n.width)),o=X(parseFloat(n.height)),l=U({x:0,y:0}),s=y({get:()=>l.value,set(x){var k,C;if(!i.value)return;const{x:v,y:b}=x;l.value=x,t("update:color",{h:((k=n.color)==null?void 0:k.h)??0,s:Dn(v,0,r.value)/r.value,v:1-Dn(b,0,o.value)/o.value,a:((C=n.color)==null?void 0:C.a)??1})}}),u=y(()=>{const{x,y:v}=s.value,b=parseInt(n.dotSize,10)/2;return{width:an(n.dotSize),height:an(n.dotSize),transform:`translate(${an(x-b)}, ${an(v-b)})`}}),{resizeRef:d}=St(x=>{var k;if(!((k=d.el)!=null&&k.offsetParent))return;const{width:v,height:b}=x[0].contentRect;r.value=v,o.value=b});function p(x,v,b){const{left:k,top:C,width:S,height:E}=b;s.value={x:Dn(x-k,0,S),y:Dn(v-C,0,E)}}function f(x){x.type==="mousedown"&&x.preventDefault(),!n.disabled&&(c(x),window.addEventListener("mousemove",c),window.addEventListener("mouseup",g),window.addEventListener("touchmove",c),window.addEventListener("touchend",g))}function c(x){if(n.disabled||!i.value)return;a.value=!0;const v=pu(x);p(v.clientX,v.clientY,i.value.getBoundingClientRect())}function g(){window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",g),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",g)}function h(){var C;if(!i.value)return;const x=i.value,v=x.getContext("2d");if(!v)return;const b=v.createLinearGradient(0,0,x.width,0);b.addColorStop(0,"hsla(0, 0%, 100%, 1)"),b.addColorStop(1,`hsla(${((C=n.color)==null?void 0:C.h)??0}, 100%, 50%, 1)`),v.fillStyle=b,v.fillRect(0,0,x.width,x.height);const k=v.createLinearGradient(0,0,0,x.height);k.addColorStop(0,"hsla(0, 0%, 0%, 0)"),k.addColorStop(1,"hsla(0, 0%, 0%, 1)"),v.fillStyle=k,v.fillRect(0,0,x.width,x.height)}return tn(()=>{var x;return(x=n.color)==null?void 0:x.h},h,{immediate:!0}),tn(()=>[r.value,o.value],(x,v)=>{h(),l.value={x:s.value.x*x[0]/v[0],y:s.value.y*x[1]/v[1]}},{flush:"post"}),tn(()=>n.color,()=>{if(a.value){a.value=!1;return}l.value=n.color?{x:n.color.s*r.value,y:(1-n.color.v)*o.value}:{x:0,y:0}},{deep:!0,immediate:!0}),it(()=>h()),N(()=>m("div",{ref:d,class:["v-color-picker-canvas",n.class],style:n.style,onMousedown:f,onTouchstartPassive:f},[m("canvas",{ref:i,width:r.value,height:o.value},null),n.color&&m("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":n.disabled}],style:u.value},null)])),{}}});function vf(n,e){if(e){const{a:t,...a}=n;return a}return n}function bf(n,e){if(e==null||typeof e=="string"){const t=n.a!==1;if(e!=null&&e.startsWith("rgb(")){const{r:i,g:r,b:o,a:l}=It(n);return`rgb(${i} ${r} ${o}`+(t?` / ${l})`:")")}else if(e!=null&&e.startsWith("hsl(")){const{h:i,s:r,l:o,a:l}=Ri(n);return`hsl(${i} ${Math.round(r*100)} ${Math.round(o*100)}`+(t?` / ${l})`:")")}const a=ql(n);return n.a===1?a.slice(0,7):a}if(typeof e=="object"){let t;return ae(e,["r","g","b"])?t=It(n):ae(e,["h","s","l"])?t=Ri(n):ae(e,["h","s","v"])&&(t=n),vf(t,!ae(e,["a"])&&n.a===1)}return n}const Ee={h:0,s:0,v:0,a:1},Ji={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:n=>Math.round(n.r),getColor:(n,e)=>({...n,r:Number(e)})},{label:"G",max:255,step:1,getValue:n=>Math.round(n.g),getColor:(n,e)=>({...n,g:Number(e)})},{label:"B",max:255,step:1,getValue:n=>Math.round(n.b),getColor:(n,e)=>({...n,b:Number(e)})},{label:"A",max:1,step:.01,getValue:n=>{let{a:e}=n;return e!=null?Math.round(e*100)/100:1},getColor:(n,e)=>({...n,a:Number(e)})}],to:It,from:sa};var Sl;const hf={...Ji,inputs:(Sl=Ji.inputs)==null?void 0:Sl.slice(0,3)},Qi={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:n=>Math.round(n.h),getColor:(n,e)=>({...n,h:Number(e)})},{label:"S",max:1,step:.01,getValue:n=>Math.round(n.s*100)/100,getColor:(n,e)=>({...n,s:Number(e)})},{label:"L",max:1,step:.01,getValue:n=>Math.round(n.l*100)/100,getColor:(n,e)=>({...n,l:Number(e)})},{label:"A",max:1,step:.01,getValue:n=>{let{a:e}=n;return e!=null?Math.round(e*100)/100:1},getColor:(n,e)=>({...n,a:Number(e)})}],to:Ri,from:Cr},yf={...Qi,inputs:Qi.inputs.slice(0,3)},Ss={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:n=>n,getColor:(n,e)=>e}],to:ql,from:Ru},kf={...Ss,inputs:[{label:"HEX",getValue:n=>n.slice(0,7),getColor:(n,e)=>e}]},le={rgb:hf,rgba:Ji,hsl:yf,hsla:Qi,hex:kf,hexa:Ss},wf=n=>{let{label:e,...t}=n;return m("div",{class:"v-color-picker-edit__input"},[m("input",t,null),m("span",null,[e])])},Sf=T({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:n=>Object.keys(le).includes(n)},modes:{type:Array,default:()=>Object.keys(le),validator:n=>Array.isArray(n)&&n.every(e=>Object.keys(le).includes(e))},...rn()},"VColorPickerEdit"),Ff=xt({name:"VColorPickerEdit",props:Sf(),emits:{"update:color":n=>!0,"update:mode":n=>!0},setup(n,e){let{emit:t}=e;const a=y(()=>n.modes.map(r=>({...le[r],name:r}))),i=y(()=>{var l;const r=a.value.find(s=>s.name===n.mode);if(!r)return[];const o=n.color?r.to(n.color):null;return(l=r.inputs)==null?void 0:l.map(s=>{let{getValue:u,getColor:d,...p}=s;return{...r.inputProps,...p,disabled:n.disabled,value:o&&u(o),onChange:f=>{const c=f.target;c&&t("update:color",r.from(d(o??r.to(Ee),c.value)))}}})});return N(()=>{var r;return m("div",{class:["v-color-picker-edit",n.class],style:n.style},[(r=i.value)==null?void 0:r.map(o=>m(wf,o,null)),a.value.length>1&&m(wn,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const o=a.value.findIndex(l=>l.name===n.mode);t("update:mode",a.value[(o+1)%a.value.length].name)}},null)])}),{}}}),Jr=Symbol.for("vuetify:v-slider");function nr(n,e,t){const a=t==="vertical",i=e.getBoundingClientRect(),r="touches"in n?n.touches[0]:n;return a?r.clientY-(i.top+i.height/2):r.clientX-(i.left+i.width/2)}function Cf(n,e){return"touches"in n&&n.touches.length?n.touches[0][e]:"changedTouches"in n&&n.changedTouches.length?n.changedTouches[0][e]:n[e]}const Fs=T({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:n=>typeof n=="boolean"||n==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:n=>typeof n=="boolean"||n==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:n=>["vertical","horizontal"].includes(n)},reverse:Boolean,...Bn(),...Gn({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Cs=n=>{const e=y(()=>parseFloat(n.min)),t=y(()=>parseFloat(n.max)),a=y(()=>Number(n.step)>0?parseFloat(n.step):0),i=y(()=>Math.max(Fo(a.value),Fo(e.value)));function r(o){if(o=parseFloat(o),a.value<=0)return o;const l=Dn(o,e.value,t.value),s=e.value%a.value,u=Math.round((l-s)/a.value)*a.value+s;return parseFloat(Math.min(u,t.value).toFixed(i.value))}return{min:e,max:t,step:a,decimals:i,roundValue:r}},Vs=n=>{let{props:e,steps:t,onSliderStart:a,onSliderMove:i,onSliderEnd:r,getActiveThumb:o}=n;const{isRtl:l}=Hn(),s=B(()=>e.reverse),u=y(()=>e.direction==="vertical"),d=y(()=>u.value!==s.value),{min:p,max:f,step:c,decimals:g,roundValue:h}=t,x=y(()=>parseInt(e.thumbSize,10)),v=y(()=>parseInt(e.tickSize,10)),b=y(()=>parseInt(e.trackSize,10)),k=y(()=>(f.value-p.value)/c.value),C=B(()=>e.disabled),S=y(()=>e.error||e.disabled?void 0:e.thumbColor??e.color),E=y(()=>e.error||e.disabled?void 0:e.trackColor??e.color),A=y(()=>e.error||e.disabled?void 0:e.trackFillColor??e.color),w=X(!1),F=X(0),_=U(),V=U();function P(Z){var hn;const q=(hn=_.value)==null?void 0:hn.$el;if(!q)return;const mn=e.direction==="vertical",fn=mn?"top":"left",Y=mn?"height":"width",on=mn?"clientY":"clientX",{[fn]:H,[Y]:en}=q.getBoundingClientRect(),cn=Cf(Z,on);let pn=Math.min(Math.max((cn-H-F.value)/en,0),1)||0;return(mn?d.value:d.value!==l.value)&&(pn=1-pn),h(p.value+pn*(f.value-p.value))}const I=Z=>{const q=P(Z);q!=null&&r({value:q}),w.value=!1,F.value=0},M=Z=>{const q=P(Z);V.value=o(Z),V.value&&(w.value=!0,V.value.contains(Z.target)?F.value=nr(Z,V.value,e.direction):(F.value=0,q!=null&&i({value:q})),q!=null&&a({value:q}),Fn(()=>{var mn;return(mn=V.value)==null?void 0:mn.focus()}))},j={passive:!0,capture:!0};function W(Z){const q=P(Z);q!=null&&i({value:q})}function nn(Z){Z.stopPropagation(),Z.preventDefault(),I(Z),window.removeEventListener("mousemove",W,j),window.removeEventListener("mouseup",nn)}function Q(Z){var q;I(Z),window.removeEventListener("touchmove",W,j),(q=Z.target)==null||q.removeEventListener("touchend",Q)}function G(Z){var q;M(Z),window.addEventListener("touchmove",W,j),(q=Z.target)==null||q.addEventListener("touchend",Q,{passive:!1})}function R(Z){Z.button===0&&(Z.preventDefault(),M(Z),window.addEventListener("mousemove",W,j),window.addEventListener("mouseup",nn,{passive:!1}))}const D=Z=>{const q=(Z-p.value)/(f.value-p.value)*100;return Dn(isNaN(q)?0:q,0,100)},$=B(()=>e.showTicks),K=y(()=>$.value?e.ticks?Array.isArray(e.ticks)?e.ticks.map(Z=>({value:Z,position:D(Z),label:Z.toString()})):Object.keys(e.ticks).map(Z=>({value:parseFloat(Z),position:D(parseFloat(Z)),label:e.ticks[Z]})):k.value!==1/0?Pt(k.value+1).map(Z=>{const q=p.value+Z*c.value;return{value:q,position:D(q)}}):[]:[]),J=y(()=>K.value.some(Z=>{let{label:q}=Z;return!!q})),ln={activeThumbRef:V,color:B(()=>e.color),decimals:g,disabled:C,direction:B(()=>e.direction),elevation:B(()=>e.elevation),hasLabels:J,isReversed:s,indexFromEnd:d,min:p,max:f,mousePressed:w,numTicks:k,onSliderMousedown:R,onSliderTouchstart:G,parsedTicks:K,parseMouseMove:P,position:D,readonly:B(()=>e.readonly),rounded:B(()=>e.rounded),roundValue:h,showTicks:$,startOffset:F,step:c,thumbSize:x,thumbColor:S,thumbLabel:B(()=>e.thumbLabel),ticks:B(()=>e.ticks),tickSize:v,trackColor:E,trackContainerRef:_,trackFillColor:A,trackSize:b,vertical:u};return An(Jr,ln),ln},Vf=T({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...rn()},"VSliderThumb"),tr=L()({name:"VSliderThumb",directives:{Ripple:Ht},props:Vf(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=Sn(Jr),{isRtl:r,rtlClasses:o}=Hn();if(!i)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:l,step:s,disabled:u,thumbSize:d,thumbLabel:p,direction:f,isReversed:c,vertical:g,readonly:h,elevation:x,mousePressed:v,decimals:b,indexFromEnd:k}=i,C=y(()=>u.value?void 0:x.value),{elevationClasses:S}=Zn(C),{textColorClasses:E,textColorStyles:A}=Qn(l),{pageup:w,pagedown:F,end:_,home:V,left:P,right:I,down:M,up:j}=Bi,W=[w,F,_,V,P,I,M,j],nn=y(()=>s.value?[1,2,3]:[1,5,10]);function Q(R,D){if(!W.includes(R.key))return;R.preventDefault();const $=s.value||.1,K=(n.max-n.min)/$;if([P,I,M,j].includes(R.key)){const ln=(g.value?[r.value?P:I,c.value?M:j]:k.value!==r.value?[P,j]:[I,j]).includes(R.key)?1:-1,Z=R.shiftKey?2:R.ctrlKey?1:0;D=D+ln*$*nn.value[Z]}else if(R.key===V)D=n.min;else if(R.key===_)D=n.max;else{const J=R.key===F?1:-1;D=D-J*$*(K>100?K/10:10)}return Math.max(n.min,Math.min(n.max,D))}function G(R){const D=Q(R,n.modelValue);D!=null&&a("update:modelValue",D)}return N(()=>{const R=an(k.value?100-n.position:n.position,"%");return m("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":n.focused,"v-slider-thumb--pressed":n.focused&&v.value},n.class,o.value],style:[{"--v-slider-thumb-position":R,"--v-slider-thumb-size":an(d.value)},n.style],role:"slider",tabindex:u.value?-1:0,"aria-label":n.name,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,"aria-readonly":!!h.value,"aria-orientation":f.value,onKeydown:h.value?void 0:G},[m("div",{class:["v-slider-thumb__surface",E.value,S.value],style:{...A.value}},null),Tn(m("div",{class:["v-slider-thumb__ripple",E.value],style:A.value},null),[[ft("ripple"),n.ripple,null,{circle:!0,center:!0}]]),m(Br,{origin:"bottom center"},{default:()=>{var D;return[Tn(m("div",{class:"v-slider-thumb__label-container"},[m("div",{class:["v-slider-thumb__label"]},[m("div",null,[((D=t["thumb-label"])==null?void 0:D.call(t,{modelValue:n.modelValue}))??n.modelValue.toFixed(s.value?b.value:1)])])]),[[Ft,p.value&&n.focused||p.value==="always"]])]}})])}),{}}}),Pf=T({start:{type:Number,required:!0},stop:{type:Number,required:!0},...rn()},"VSliderTrack"),Ps=L()({name:"VSliderTrack",props:Pf(),emits:{},setup(n,e){let{slots:t}=e;const a=Sn(Jr);if(!a)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:i,parsedTicks:r,rounded:o,showTicks:l,tickSize:s,trackColor:u,trackFillColor:d,trackSize:p,vertical:f,min:c,max:g,indexFromEnd:h}=a,{roundedClasses:x}=Ln(o),{backgroundColorClasses:v,backgroundColorStyles:b}=En(d),{backgroundColorClasses:k,backgroundColorStyles:C}=En(u),S=y(()=>`inset-${f.value?"block":"inline"}-${h.value?"end":"start"}`),E=y(()=>f.value?"height":"width"),A=y(()=>({[S.value]:"0%",[E.value]:"100%"})),w=y(()=>n.stop-n.start),F=y(()=>({[S.value]:an(n.start,"%"),[E.value]:an(w.value,"%")})),_=y(()=>l.value?(f.value?r.value.slice().reverse():r.value).map((P,I)=>{var j;const M=P.value!==c.value&&P.value!==g.value?an(P.position,"%"):void 0;return m("div",{key:P.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":P.position>=n.start&&P.position<=n.stop,"v-slider-track__tick--first":P.value===c.value,"v-slider-track__tick--last":P.value===g.value}],style:{[S.value]:M}},[(P.label||t["tick-label"])&&m("div",{class:"v-slider-track__tick-label"},[((j=t["tick-label"])==null?void 0:j.call(t,{tick:P,index:I}))??P.label])])}):[]);return N(()=>m("div",{class:["v-slider-track",x.value,n.class],style:[{"--v-slider-track-size":an(p.value),"--v-slider-tick-size":an(s.value)},n.style]},[m("div",{class:["v-slider-track__background",k.value,{"v-slider-track__background--opacity":!!i.value||!d.value}],style:{...A.value,...C.value}},null),m("div",{class:["v-slider-track__fill",v.value],style:{...F.value,...b.value}},null),l.value&&m("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":l.value==="always"}]},[_.value])])),{}}}),If=T({...fa(),...Fs(),...Wt(),modelValue:{type:[Number,String],default:0}},"VSlider"),er=L()({name:"VSlider",props:If(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,start:n=>!0,end:n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=U(),{rtlClasses:r}=Hn(),o=Cs(n),l=sn(n,"modelValue",void 0,E=>o.roundValue(E??o.min.value)),{min:s,max:u,mousePressed:d,roundValue:p,onSliderMousedown:f,onSliderTouchstart:c,trackContainerRef:g,position:h,hasLabels:x,readonly:v}=Vs({props:n,steps:o,onSliderStart:()=>{a("start",l.value)},onSliderEnd:E=>{let{value:A}=E;const w=p(A);l.value=w,a("end",w)},onSliderMove:E=>{let{value:A}=E;return l.value=p(A)},getActiveThumb:()=>{var E;return(E=i.value)==null?void 0:E.$el}}),{isFocused:b,focus:k,blur:C}=_t(n),S=y(()=>h(l.value));return N(()=>{const E=nt.filterProps(n),A=!!(n.label||t.label||t.prepend);return m(nt,z({class:["v-slider",{"v-slider--has-labels":!!t["tick-label"]||x.value,"v-slider--focused":b.value,"v-slider--pressed":d.value,"v-slider--disabled":n.disabled},r.value,n.class],style:n.style},E,{focused:b.value}),{...t,prepend:A?w=>{var F,_;return m(dn,null,[((F=t.label)==null?void 0:F.call(t,w))??(n.label?m(je,{id:w.id.value,class:"v-slider__label",text:n.label},null):void 0),(_=t.prepend)==null?void 0:_.call(t,w)])}:void 0,default:w=>{let{id:F,messagesId:_}=w;return m("div",{class:"v-slider__container",onMousedown:v.value?void 0:f,onTouchstartPassive:v.value?void 0:c},[m("input",{id:F.value,name:n.name||F.value,disabled:!!n.disabled,readonly:!!n.readonly,tabindex:"-1",value:l.value},null),m(Ps,{ref:g,start:0,stop:S.value},{"tick-label":t["tick-label"]}),m(tr,{ref:i,"aria-describedby":_.value,focused:b.value,min:s.value,max:u.value,modelValue:l.value,"onUpdate:modelValue":V=>l.value=V,position:S.value,elevation:n.elevation,onFocus:k,onBlur:C,ripple:n.ripple,name:n.name},{"thumb-label":t["thumb-label"]})])}})}),{}}}),Ef=T({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...rn()},"VColorPickerPreview"),Af=xt({name:"VColorPickerPreview",props:Ef(),emits:{"update:color":n=>!0},setup(n,e){let{emit:t}=e;const a=new AbortController;nu(()=>a.abort());async function i(){if(!ho||n.disabled)return;const r=new window.EyeDropper;try{const o=await r.open({signal:a.signal}),l=sa(gt(o.sRGBHex));t("update:color",{...n.color??Ee,...l})}catch{}}return N(()=>{var r,o;return m("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":n.hideAlpha},n.class],style:n.style},[ho&&m("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[m(wn,{density:"comfortable",disabled:n.disabled,icon:"$eyeDropper",variant:"plain",onClick:i},null)]),m("div",{class:"v-color-picker-preview__dot"},[m("div",{style:{background:Gl(n.color??Ee)}},null)]),m("div",{class:"v-color-picker-preview__sliders"},[m(er,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(r=n.color)==null?void 0:r.h,"onUpdate:modelValue":l=>t("update:color",{...n.color??Ee,h:l}),step:0,min:0,max:360,disabled:n.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!n.hideAlpha&&m(er,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((o=n.color)==null?void 0:o.a)??1,"onUpdate:modelValue":l=>t("update:color",{...n.color??Ee,a:l}),step:1/256,min:0,max:1,disabled:n.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}}),Bf={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},Df={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},_f={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},Tf={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},Mf={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},Rf={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},$f={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Of={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},Lf={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},zf={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},Nf={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},jf={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},Hf={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},Wf={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},Yf={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Gf={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},Uf={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},Kf={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},qf={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},Xf={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},Zf={red:Bf,pink:Df,purple:_f,deepPurple:Tf,indigo:Mf,blue:Rf,lightBlue:$f,cyan:Of,teal:Lf,green:zf,lightGreen:Nf,lime:jf,yellow:Hf,amber:Wf,orange:Yf,deepOrange:Gf,brown:Uf,blueGrey:Kf,grey:qf,shades:Xf},Jf=T({swatches:{type:Array,default:()=>Qf(Zf)},disabled:Boolean,color:Object,maxHeight:[Number,String],...rn()},"VColorPickerSwatches");function Qf(n){return Object.keys(n).map(e=>{const t=n[e];return t.base?[t.base,t.darken4,t.darken3,t.darken2,t.darken1,t.lighten1,t.lighten2,t.lighten3,t.lighten4,t.lighten5]:[t.black,t.white,t.transparent]})}const nx=xt({name:"VColorPickerSwatches",props:Jf(),emits:{"update:color":n=>!0},setup(n,e){let{emit:t}=e;return N(()=>m("div",{class:["v-color-picker-swatches",n.class],style:[{maxHeight:an(n.maxHeight)},n.style]},[m("div",null,[n.swatches.map(a=>m("div",{class:"v-color-picker-swatches__swatch"},[a.map(i=>{const r=gt(i),o=sa(r),l=Yl(r);return m("div",{class:"v-color-picker-swatches__color",onClick:()=>o&&t("update:color",o)},[m("div",{style:{background:l}},[n.color&&Jn(n.color,o)?m(Vn,{size:"x-small",icon:"$success",color:zu(i,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),tx=Bt("v-picker-title"),Qr=T({color:String,...ut(),...rn(),...Wn(),...Gn(),...jt(),...ze(),...Bn(),...xn(),...kn()},"VSheet"),ra=L()({name:"VSheet",props:Qr(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.color),{borderClasses:o}=bt(n),{dimensionStyles:l}=Yn(n),{elevationClasses:s}=Zn(n),{locationStyles:u}=ke(n),{positionClasses:d}=Ne(n),{roundedClasses:p}=Ln(n);return N(()=>m(n.tag,{class:["v-sheet",a.value,i.value,o.value,s.value,d.value,p.value,n.class],style:[r.value,l.value,u.value,n.style]},t)),{}}}),no=T({bgColor:String,divided:Boolean,landscape:Boolean,title:String,hideHeader:Boolean,...Qr()},"VPicker"),Na=L()({name:"VPicker",props:no(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:a,backgroundColorStyles:i}=En(()=>n.color);return N(()=>{const r=ra.filterProps(n),o=!!(n.title||t.title);return m(ra,z(r,{color:n.bgColor,class:["v-picker",{"v-picker--divided":n.divided,"v-picker--landscape":n.landscape,"v-picker--with-actions":!!t.actions},n.class],style:n.style}),{default:()=>{var l;return[!n.hideHeader&&m("div",{key:"header",class:[a.value],style:[i.value]},[o&&m(tx,{key:"picker-title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??n.title]}}),t.header&&m("div",{class:"v-picker__header"},[t.header()])]),m("div",{class:"v-picker__body"},[(l=t.default)==null?void 0:l.call(t)]),t.actions&&m(vn,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[m("div",{class:"v-picker__actions"},[t.actions()])]})]}})}),{}}});function wa(n){const e=n.slice(-2).toUpperCase();switch(!0){case n==="GB-alt-variant":return{firstDay:0,firstWeekSize:4};case n==="001":return{firstDay:1,firstWeekSize:1};case`AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(e):return{firstDay:0,firstWeekSize:1};case`AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(e):return{firstDay:1,firstWeekSize:1};case`AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(e):return{firstDay:1,firstWeekSize:4};case"AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(e):return{firstDay:6,firstWeekSize:1};case e==="MV":return{firstDay:5,firstWeekSize:1};case e==="PT":return{firstDay:0,firstWeekSize:4};default:return null}}function ex(n,e,t){var d;const a=[];let i=[];const r=Is(n),o=Es(n),l=t??((d=wa(e))==null?void 0:d.firstDay)??0,s=(r.getDay()-l+7)%7,u=(o.getDay()-l+7)%7;for(let p=0;p<s;p++){const f=new Date(r);f.setDate(f.getDate()-(s-p)),i.push(f)}for(let p=1;p<=o.getDate();p++){const f=new Date(n.getFullYear(),n.getMonth(),p);i.push(f),i.length===7&&(a.push(i),i=[])}for(let p=1;p<7-u;p++){const f=new Date(o);f.setDate(f.getDate()+p),i.push(f)}return i.length>0&&a.push(i),a}function ar(n,e,t){var r;const a=t??((r=wa(e))==null?void 0:r.firstDay)??0,i=new Date(n);for(;i.getDay()!==a;)i.setDate(i.getDate()-1);return i}function ax(n,e){var i;const t=new Date(n),a=((((i=wa(e))==null?void 0:i.firstDay)??0)+6)%7;for(;t.getDay()!==a;)t.setDate(t.getDate()+1);return t}function Is(n){return new Date(n.getFullYear(),n.getMonth(),1)}function Es(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function ix(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const rx=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function As(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(rx.test(n))return ix(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const ml=new Date(2e3,0,2);function ox(n,e){var a;const t=e??((a=wa(n))==null?void 0:a.firstDay)??0;return Pt(7).map(i=>{const r=new Date(ml);return r.setDate(ml.getDate()+t+i),new Intl.DateTimeFormat(n,{weekday:"narrow"}).format(r)})}function lx(n,e,t,a){const i=As(n)??new Date,r=a==null?void 0:a[e];if(typeof r=="function")return r(i,e,t);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const l=i.getDate(),s=new Intl.DateTimeFormat(t,{month:"long"}).format(i);return`${l} ${s}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(t).format(i.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric"};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};break;case"fullDateTime12h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric"},new Intl.DateTimeFormat(t,o).format(i).replace(/, /g," ");case"keyboardDateTime12h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!0},new Intl.DateTimeFormat(t,o).format(i).replace(/, /g," ");case"keyboardDateTime24h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},new Intl.DateTimeFormat(t,o).format(i).replace(/, /g," ");default:o=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,o).format(i)}function mx(n,e){const t=n.toJsDate(e),a=t.getFullYear(),i=Vo(String(t.getMonth()+1),2,"0"),r=Vo(String(t.getDate()),2,"0");return`${a}-${i}-${r}`}function sx(n){const[e,t,a]=n.split("-").map(Number);return new Date(e,t-1,a)}function dx(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function ux(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function Ta(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function px(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function cx(n,e){const t=new Date(n);return t.setDate(1),t.setMonth(t.getMonth()+e),t}function ir(n){return n.getFullYear()}function gx(n){return n.getMonth()}function fx(n,e,t,a){const i=wa(e),r=t??(i==null?void 0:i.firstDay)??0,o=a??(i==null?void 0:i.firstWeekSize)??1;function l(c){const g=new Date(c,0,1);return 7-rr(g,ar(g,e,r),"days")}let s=ir(n);const u=Ta(ar(n,e,r),6);s<ir(u)&&l(s+1)>=o&&s++;const d=new Date(s,0,1),p=l(s),f=p>=o?Ta(d,p-7):Ta(d,p);return 1+rr(n,f,"weeks")}function xx(n){return n.getDate()}function vx(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function bx(n){return new Date(n.getFullYear(),n.getMonth()-1,1)}function hx(n){return n.getHours()}function yx(n){return n.getMinutes()}function kx(n){return new Date(n.getFullYear(),0,1)}function wx(n){return new Date(n.getFullYear(),11,31)}function Sx(n,e){return ja(n,e[0])&&Vx(n,e[1])}function Fx(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function ja(n,e){return n.getTime()>e.getTime()}function Cx(n,e){return ja(or(n),or(e))}function Vx(n,e){return n.getTime()<e.getTime()}function sl(n,e){return n.getTime()===e.getTime()}function Px(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function Ix(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function Ex(n,e){return n.getFullYear()===e.getFullYear()}function rr(n,e,t){const a=new Date(n),i=new Date(e);switch(t){case"years":return a.getFullYear()-i.getFullYear();case"quarters":return Math.floor((a.getMonth()-i.getMonth()+(a.getFullYear()-i.getFullYear())*12)/4);case"months":return a.getMonth()-i.getMonth()+(a.getFullYear()-i.getFullYear())*12;case"weeks":return Math.floor((a.getTime()-i.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((a.getTime()-i.getTime())/(1e3*60*60*24));case"hours":return Math.floor((a.getTime()-i.getTime())/(1e3*60*60));case"minutes":return Math.floor((a.getTime()-i.getTime())/(1e3*60));case"seconds":return Math.floor((a.getTime()-i.getTime())/1e3);default:return a.getTime()-i.getTime()}}function Ax(n,e){const t=new Date(n);return t.setHours(e),t}function Bx(n,e){const t=new Date(n);return t.setMinutes(e),t}function Dx(n,e){const t=new Date(n);return t.setMonth(e),t}function _x(n,e){const t=new Date(n);return t.setDate(e),t}function Tx(n,e){const t=new Date(n);return t.setFullYear(e),t}function or(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0,0)}function Mx(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class Rx{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return As(e)}toJsDate(e){return e}toISO(e){return mx(this,e)}parseISO(e){return sx(e)}addMinutes(e,t){return dx(e,t)}addHours(e,t){return ux(e,t)}addDays(e,t){return Ta(e,t)}addWeeks(e,t){return px(e,t)}addMonths(e,t){return cx(e,t)}getWeekArray(e,t){const a=t!==void 0?Number(t):void 0;return ex(e,this.locale,a)}startOfWeek(e,t){const a=t!==void 0?Number(t):void 0;return ar(e,this.locale,a)}endOfWeek(e){return ax(e,this.locale)}startOfMonth(e){return Is(e)}endOfMonth(e){return Es(e)}format(e,t){return lx(e,t,this.locale,this.formats)}isEqual(e,t){return sl(e,t)}isValid(e){return Fx(e)}isWithinRange(e,t){return Sx(e,t)}isAfter(e,t){return ja(e,t)}isAfterDay(e,t){return Cx(e,t)}isBefore(e,t){return!ja(e,t)&&!sl(e,t)}isSameDay(e,t){return Px(e,t)}isSameMonth(e,t){return Ix(e,t)}isSameYear(e,t){return Ex(e,t)}setMinutes(e,t){return Bx(e,t)}setHours(e,t){return Ax(e,t)}setMonth(e,t){return Dx(e,t)}setDate(e,t){return _x(e,t)}setYear(e,t){return Tx(e,t)}getDiff(e,t,a){return rr(e,t,a)}getWeekdays(e){const t=e!==void 0?Number(e):void 0;return ox(this.locale,t)}getYear(e){return ir(e)}getMonth(e){return gx(e)}getWeek(e,t,a){const i=t!==void 0?Number(t):void 0;return fx(e,this.locale,i,a)}getDate(e){return xx(e)}getNextMonth(e){return vx(e)}getPreviousMonth(e){return bx(e)}getHours(e){return hx(e)}getMinutes(e){return yx(e)}startOfDay(e){return or(e)}endOfDay(e){return Mx(e)}startOfYear(e){return kx(e)}endOfYear(e){return wx(e)}}const Bs=Symbol.for("vuetify:date-options"),dl=Symbol.for("vuetify:date-adapter");function $x(n,e){const t=et({adapter:Rx,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:Ds(t,e)}}function Ds(n,e){const t=dt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return tn(e.current,a=>{t.locale=n.locale[a]??a??t.locale}),t}function Sa(){const n=Sn(Bs);if(!n)throw new Error("[Vuetify] Could not find injected date options");const e=On();return Ds(n,e)}const Ox=T({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:n=>Object.keys(le).includes(n)},modes:{type:Array,default:()=>Object.keys(le),validator:n=>Array.isArray(n)&&n.every(e=>Object.keys(le).includes(e))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...no({hideHeader:!0})},"VColorPicker"),Lx=xt({name:"VColorPicker",props:Ox(),emits:{"update:modelValue":n=>!0,"update:mode":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"mode"),i=U(null),r=sn(n,"modelValue",void 0,d=>{if(d==null||d==="")return null;let p;try{p=sa(gt(d))}catch{return null}return p},d=>d?bf(d,n.modelValue):null),o=y(()=>r.value?{...r.value,h:i.value??r.value.h}:null),{rtlClasses:l}=Hn();let s=!0;tn(r,d=>{if(!s){s=!0;return}d&&(i.value=d.h)},{immediate:!0});const u=d=>{s=!1,i.value=d.h,r.value=d};return ma(()=>{n.modes.includes(a.value)||(a.value=n.modes[0])}),$n({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),N(()=>{const d=Na.filterProps(n);return m(Na,z(d,{class:["v-color-picker",l.value,n.class],style:[{"--v-color-picker-color-hsv":Gl({...o.value??Ee,a:1})},n.style]}),{...t,default:()=>m(dn,null,[!n.hideCanvas&&m(xf,{key:"canvas",color:o.value,"onUpdate:color":u,disabled:n.disabled,dotSize:n.dotSize,width:n.width,height:n.canvasHeight},null),(!n.hideSliders||!n.hideInputs)&&m("div",{key:"controls",class:"v-color-picker__controls"},[!n.hideSliders&&m(Af,{key:"preview",color:o.value,"onUpdate:color":u,hideAlpha:!a.value.endsWith("a"),disabled:n.disabled},null),!n.hideInputs&&m(Ff,{key:"edit",modes:n.modes,mode:a.value,"onUpdate:mode":p=>a.value=p,color:o.value,"onUpdate:color":u,disabled:n.disabled},null)]),n.showSwatches&&m(nx,{key:"swatches",color:o.value,"onUpdate:color":u,maxHeight:n.swatchesMaxHeight,swatches:n.swatches,disabled:n.disabled},null)])})}),{}}}),zx=T({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...ya({filterKeys:["title"]}),...qr({hideNoData:!0,returnObject:!0}),...Rn(ha({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ct({transition:!1})},"VCombobox"),Nx=L()({name:"VCombobox",props:zx(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,"update:search":n=>!0,"update:menu":n=>!0},setup(n,e){var on;let{emit:t,slots:a}=e;const{t:i}=On(),r=U(),o=X(!1),l=X(!0),s=X(!1),u=U(),d=U(),p=X(-1);let f=!1;const{items:c,transformIn:g,transformOut:h}=Hr(n),{textColorClasses:x,textColorStyles:v}=Qn(()=>{var H;return(H=r.value)==null?void 0:H.color}),b=sn(n,"modelValue",[],H=>g(_n(H)),H=>{const en=h(H);return n.multiple?en:en[0]??null}),k=xa(n),C=y(()=>!!(n.chips||a.chip)),S=y(()=>C.value||!!a.selection),E=X(!n.multiple&&!S.value?((on=b.value[0])==null?void 0:on.title)??"":""),A=y({get:()=>E.value,set:H=>{var en;if(E.value=H??"",!n.multiple&&!S.value&&(b.value=[Yt(n,H)]),H&&n.multiple&&((en=n.delimiters)!=null&&en.length)){const cn=H.split(new RegExp(`(?:${n.delimiters.join("|")})+`));cn.length>1&&(cn.forEach(pn=>{pn=pn.trim(),pn&&q(Yt(n,pn))}),E.value="")}H||(p.value=-1),l.value=!H}}),w=y(()=>typeof n.counterValue=="function"?n.counterValue(b.value):typeof n.counterValue=="number"?n.counterValue:n.multiple?b.value.length:A.value.length),{filteredItems:F,getMatches:_}=ka(n,c,()=>l.value?"":A.value),V=y(()=>n.hideSelected?F.value.filter(H=>!b.value.some(en=>en.value===H.value)):F.value),P=y(()=>n.hideNoData&&!V.value.length||k.isReadonly.value||k.isDisabled.value),I=sn(n,"menu"),M=y({get:()=>I.value,set:H=>{var en;I.value&&!H&&((en=u.value)!=null&&en.ΨopenChildren.size)||H&&P.value||(I.value=H)}}),j=B(()=>M.value?n.closeText:n.openText);tn(E,H=>{f?Fn(()=>f=!1):o.value&&!M.value&&(M.value=!0),t("update:search",H)}),tn(b,H=>{var en;!n.multiple&&!S.value&&(E.value=((en=H[0])==null?void 0:en.title)??"")});const W=y(()=>b.value.map(H=>H.value)),nn=y(()=>{var en;return(n.autoSelectFirst===!0||n.autoSelectFirst==="exact"&&A.value===((en=V.value[0])==null?void 0:en.title))&&V.value.length>0&&!l.value&&!s.value}),Q=U(),G=Kr(Q,r);function R(H){f=!0,n.openOnClear&&(M.value=!0)}function D(){P.value||(M.value=!0)}function $(H){P.value||(o.value&&(H.preventDefault(),H.stopPropagation()),M.value=!M.value)}function K(H){var en;H.key!==" "&&De(H)&&((en=r.value)==null||en.focus())}function J(H){var pn,hn,yn,In;if(su(H)||k.isReadonly.value)return;const en=(pn=r.value)==null?void 0:pn.selectionStart,cn=b.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(H.key)&&H.preventDefault(),["Enter","ArrowDown"].includes(H.key)&&(M.value=!0),["Escape"].includes(H.key)&&(M.value=!1),["Enter","Escape","Tab"].includes(H.key)&&(nn.value&&["Enter","Tab"].includes(H.key)&&!b.value.some(gn=>{let{value:ot}=gn;return ot===V.value[0].value})&&q(F.value[0]),l.value=!0),H.key==="ArrowDown"&&nn.value&&((hn=Q.value)==null||hn.focus("next")),H.key==="Enter"&&A.value&&(q(Yt(n,A.value)),S.value&&(E.value="")),["Backspace","Delete"].includes(H.key)){if(!n.multiple&&S.value&&b.value.length>0&&!A.value)return q(b.value[0],!1);if(~p.value){H.preventDefault();const gn=p.value;q(b.value[p.value],!1),p.value=gn>=cn-1?cn-2:gn}else H.key==="Backspace"&&!A.value&&(p.value=cn-1);return}if(n.multiple)if(H.key==="ArrowLeft"){if(p.value<0&&en&&en>0)return;const gn=p.value>-1?p.value-1:cn-1;b.value[gn]?p.value=gn:(p.value=-1,(yn=r.value)==null||yn.setSelectionRange(A.value.length,A.value.length))}else if(H.key==="ArrowRight"){if(p.value<0)return;const gn=p.value+1;b.value[gn]?p.value=gn:(p.value=-1,(In=r.value)==null||In.setSelectionRange(0,0))}else~p.value&&De(H)&&(p.value=-1)}function ln(){var H;n.eager&&((H=d.value)==null||H.calculateVisibleItems())}function Z(){var H;o.value&&(l.value=!0,(H=r.value)==null||H.focus())}function q(H){let en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!H||H.props.disabled))if(n.multiple){const cn=b.value.findIndex(hn=>(n.valueComparator||Jn)(hn.value,H.value)),pn=en??!~cn;if(~cn){const hn=pn?[...b.value,H]:[...b.value];hn.splice(cn,1),b.value=hn}else pn&&(b.value=[...b.value,H]);n.clearOnSelect&&(A.value="")}else{const cn=en!==!1;b.value=cn?[H]:[],E.value=cn&&!S.value?H.title:"",Fn(()=>{M.value=!1,l.value=!0})}}function mn(H){o.value=!0,setTimeout(()=>{s.value=!0})}function fn(H){s.value=!1}function Y(H){(H==null||H===""&&!n.multiple&&!S.value)&&(b.value=[])}return tn(o,(H,en)=>{if(!(H||H===en)&&(p.value=-1,M.value=!1,A.value)){if(n.multiple){q(Yt(n,A.value));return}if(!S.value)return;b.value.some(cn=>{let{title:pn}=cn;return pn===A.value})?E.value="":q(Yt(n,A.value))}}),tn(M,()=>{if(!n.hideSelected&&M.value&&b.value.length){const H=V.value.findIndex(en=>b.value.some(cn=>(n.valueComparator||Jn)(cn.value,en.value)));Cn&&window.requestAnimationFrame(()=>{var en;H>=0&&((en=d.value)==null||en.scrollToIndex(H))})}}),tn(()=>n.items,(H,en)=>{M.value||o.value&&!en.length&&H.length&&(M.value=!0)}),N(()=>{const H=!!(!n.hideNoData||V.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),en=b.value.length>0,cn=Nt.filterProps(n);return m(Nt,z({ref:r},cn,{modelValue:A.value,"onUpdate:modelValue":[pn=>A.value=pn,Y],focused:o.value,"onUpdate:focused":pn=>o.value=pn,validationValue:b.externalValue,counterValue:w.value,dirty:en,class:["v-combobox",{"v-combobox--active-menu":M.value,"v-combobox--chips":!!n.chips,"v-combobox--selection-slot":!!S.value,"v-combobox--selecting-index":p.value>-1,[`v-combobox--${n.multiple?"multiple":"single"}`]:!0},n.class],style:n.style,readonly:k.isReadonly.value,placeholder:en?void 0:n.placeholder,"onClick:clear":R,"onMousedown:control":D,onKeydown:J}),{...a,default:()=>m(dn,null,[m(Re,z({ref:u,modelValue:M.value,"onUpdate:modelValue":pn=>M.value=pn,activator:"parent",contentClass:"v-combobox__content",disabled:P.value,eager:n.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:n.transition,onAfterEnter:ln,onAfterLeave:Z},n.menuProps),{default:()=>[H&&m(ei,z({ref:Q,selected:W.value,selectStrategy:n.multiple?"independent":"single-independent",onMousedown:pn=>pn.preventDefault(),onKeydown:K,onFocusin:mn,onFocusout:fn,tabindex:"-1","aria-live":"polite",color:n.itemColor??n.color},G,n.listProps),{default:()=>{var pn,hn,yn;return[(pn=a["prepend-item"])==null?void 0:pn.call(a),!V.value.length&&!n.hideNoData&&(((hn=a["no-data"])==null?void 0:hn.call(a))??m(zt,{key:"no-data",title:i(n.noDataText)},null)),m(ii,{ref:d,renderless:!0,items:V.value,itemKey:"value"},{default:In=>{var Fa;let{item:gn,index:ot,itemRef:Un}=In;const Vt=z(gn.props,{ref:Un,key:gn.value,active:nn.value&&ot===0?!0:void 0,onClick:()=>q(gn,null)});return((Fa=a.item)==null?void 0:Fa.call(a,{item:gn,index:ot,props:Vt}))??m(zt,z(Vt,{role:"option"}),{prepend:Ca=>{let{isSelected:Nd}=Ca;return m(dn,null,[n.multiple&&!n.hideSelected?m(Lt,{key:gn.value,modelValue:Nd,ripple:!1,tabindex:"-1"},null):void 0,gn.props.prependAvatar&&m(yt,{image:gn.props.prependAvatar},null),gn.props.prependIcon&&m(Vn,{icon:gn.props.prependIcon},null)])},title:()=>{var Ca;return l.value?gn.title:ds("v-combobox",gn.title,(Ca=_(gn))==null?void 0:Ca.title)}})}}),(yn=a["append-item"])==null?void 0:yn.call(a)]}})]}),b.value.map((pn,hn)=>{function yn(Un){Un.stopPropagation(),Un.preventDefault(),q(pn,!1)}const In={"onClick:close":yn,onKeydown(Un){Un.key!=="Enter"&&Un.key!==" "||(Un.preventDefault(),Un.stopPropagation(),yn(Un))},onMousedown(Un){Un.preventDefault(),Un.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},gn=C.value?!!a.chip:!!a.selection,ot=gn?Ga(C.value?a.chip({item:pn,index:hn,props:In}):a.selection({item:pn,index:hn})):void 0;if(!(gn&&!ot))return m("div",{key:pn.value,class:["v-combobox__selection",hn===p.value&&["v-combobox__selection--selected",x.value]],style:hn===p.value?v.value:{}},[C.value?a.chip?m(vn,{key:"chip-defaults",defaults:{VChip:{closable:n.closableChips,size:"small",text:pn.title}}},{default:()=>[ot]}):m(He,z({key:"chip",closable:n.closableChips,size:"small",text:pn.title,disabled:pn.props.disabled},In),null):ot??m("span",{class:"v-combobox__selection-text"},[pn.title,n.multiple&&hn<b.value.length-1&&m("span",{class:"v-combobox__selection-comma"},[bn(",")])])])})]),"append-inner":function(){var In,gn;for(var pn=arguments.length,hn=new Array(pn),yn=0;yn<pn;yn++)hn[yn]=arguments[yn];return m(dn,null,[(In=a["append-inner"])==null?void 0:In.call(a,...hn),(!n.hideNoData||n.items.length)&&n.menuIcon?m(Vn,{class:"v-combobox__menu-icon",color:(gn=r.value)==null?void 0:gn.fieldIconColor,icon:n.menuIcon,onMousedown:$,onClick:Ol,"aria-label":i(j.value),title:i(j.value),tabindex:"-1"},null):void 0])}})}),ht({isFocused:o,isPristine:l,menu:M,search:A,selectionIndex:p,filteredItems:F,select:q},r)}}),jx=T({modelValue:null,color:String,cancelText:{type:String,default:"$vuetify.confirmEdit.cancel"},okText:{type:String,default:"$vuetify.confirmEdit.ok"},disabled:{type:[Boolean,Array],default:void 0},hideActions:Boolean},"VConfirmEdit"),Hx=L()({name:"VConfirmEdit",props:jx(),emits:{cancel:()=>!0,save:n=>!0,"update:modelValue":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=sn(n,"modelValue"),r=U();Mn(()=>{r.value=structuredClone(Nn(i.value))});const{t:o}=On(),l=y(()=>Jn(i.value,r.value));function s(h){return typeof n.disabled=="boolean"?n.disabled:Array.isArray(n.disabled)?n.disabled.includes(h):l.value}const u=y(()=>s("save")),d=y(()=>s("cancel"));function p(){i.value=r.value,t("save",r.value)}function f(){r.value=structuredClone(Nn(i.value)),t("cancel")}function c(h){return m(dn,null,[m(wn,z({disabled:d.value,variant:"text",color:n.color,onClick:f,text:o(n.cancelText)},h),null),m(wn,z({disabled:u.value,variant:"text",color:n.color,onClick:p,text:o(n.okText)},h),null)])}let g=!1;return N(()=>{var h;return m(dn,null,[(h=a.default)==null?void 0:h.call(a,{model:r,save:p,cancel:f,isPristine:l.value,get actions(){return g=!0,c}}),!n.hideActions&&!g&&c()])}),{save:p,cancel:f,isPristine:l}}}),_s=T({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ts=Symbol.for("vuetify:datatable:expanded");function li(n){const e=B(()=>n.expandOnClick),t=sn(n,"expanded",n.expanded,l=>new Set(l),l=>[...l.values()]);function a(l,s){const u=new Set(t.value);s?u.add(l.value):u.delete(l.value),t.value=u}function i(l){return t.value.has(l.value)}function r(l){a(l,!i(l))}const o={expand:a,expanded:t,expandOnClick:e,isExpanded:i,toggleExpand:r};return An(Ts,o),o}function Ms(){const n=Sn(Ts);if(!n)throw new Error("foo");return n}const to=T({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Rs=Symbol.for("vuetify:data-table-group");function eo(n){return{groupBy:sn(n,"groupBy")}}function mi(n){const{disableSort:e,groupBy:t,sortBy:a}=n,i=U(new Set),r=y(()=>t.value.map(d=>({...d,order:d.order??!1})).concat(e!=null&&e.value?[]:a.value));function o(d){return i.value.has(d.id)}function l(d){const p=new Set(i.value);o(d)?p.delete(d.id):p.add(d.id),i.value=p}function s(d){function p(f){const c=[];for(const g of f.items)"type"in g&&g.type==="group"?c.push(...p(g)):c.push(g);return[...new Set(c)]}return p({items:d})}const u={sortByWithGroups:r,toggleGroup:l,opened:i,groupBy:t,extractRows:s,isGroupOpen:o};return An(Rs,u),u}function $s(){const n=Sn(Rs);if(!n)throw new Error("Missing group!");return n}function Wx(n,e){if(!n.length)return[];const t=new Map;for(const a of n){const i=me(a.raw,e);t.has(i)||t.set(i,[]),t.get(i).push(a)}return t}function Os(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!e.length)return[];const i=Wx(n,e[0]),r=[],o=e.slice(1);return i.forEach((l,s)=>{const u=e[0],d=`${a}_${u}_${s}`;r.push({depth:t,id:d,key:u,value:s,items:o.length?Os(l,o,t+1,d):l,type:"group"})}),r}function Ls(n,e){const t=[];for(const a of n)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(e.has(a.id)||a.value==null)&&t.push(...Ls(a.items,e))):t.push(a);return t}function si(n,e,t){return{flatItems:y(()=>{if(!e.value.length)return n.value;const i=Os(n.value,e.value.map(r=>r.key));return Ls(i,t.value)})}}function di(n){let{page:e,itemsPerPage:t,sortBy:a,groupBy:i,search:r}=n;const o=zn("VDataTable"),l=()=>({page:e.value,itemsPerPage:t.value,sortBy:a.value,groupBy:i.value,search:r.value});let s=null;tn(l,u=>{Jn(s,u)||(s&&s.search!==u.search&&(e.value=1),o.emit("update:options",u),s=u)},{deep:!0,immediate:!0})}const ao=T({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),zs=Symbol.for("vuetify:data-table-pagination");function io(n){const e=sn(n,"page",void 0,a=>Number(a??1)),t=sn(n,"itemsPerPage",void 0,a=>Number(a??10));return{page:e,itemsPerPage:t}}function ro(n){const{page:e,itemsPerPage:t,itemsLength:a}=n,i=y(()=>t.value===-1?0:t.value*(e.value-1)),r=y(()=>t.value===-1?a.value:Math.min(a.value,i.value+t.value)),o=y(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));tn([e,o],()=>{e.value>o.value&&(e.value=o.value)});function l(f){t.value=f,e.value=1}function s(){e.value=Dn(e.value+1,1,o.value)}function u(){e.value=Dn(e.value-1,1,o.value)}function d(f){e.value=Dn(f,1,o.value)}const p={page:e,itemsPerPage:t,startIndex:i,stopIndex:r,pageCount:o,itemsLength:a,nextPage:s,prevPage:u,setPage:d,setItemsPerPage:l};return An(zs,p),p}function Yx(){const n=Sn(zs);if(!n)throw new Error("Missing pagination!");return n}function Ns(n){const e=zn("usePaginatedItems"),{items:t,startIndex:a,stopIndex:i,itemsPerPage:r}=n,o=y(()=>r.value<=0?t.value:t.value.slice(a.value,i.value));return tn(o,l=>{e.emit("update:currentItems",l)},{immediate:!0}),{paginatedItems:o}}const Gx={showSelectAll:!1,allSelected:()=>[],select:n=>{var a;let{items:e,value:t}=n;return new Set(t?[(a=e[0])==null?void 0:a.value]:[])},selectAll:n=>{let{selected:e}=n;return e}},js={showSelectAll:!0,allSelected:n=>{let{currentPage:e}=n;return e},select:n=>{let{items:e,value:t,selected:a}=n;for(const i of e)t?a.add(i.value):a.delete(i.value);return a},selectAll:n=>{let{value:e,currentPage:t,selected:a}=n;return js.select({items:t,value:e,selected:a})}},Hs={showSelectAll:!0,allSelected:n=>{let{allItems:e}=n;return e},select:n=>{let{items:e,value:t,selected:a}=n;for(const i of e)t?a.add(i.value):a.delete(i.value);return a},selectAll:n=>{let{value:e,allItems:t,selected:a}=n;return Hs.select({items:t,value:e,selected:a})}},Ws=T({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Jn}},"DataTable-select"),Ys=Symbol.for("vuetify:data-table-selection");function ui(n,e){let{allItems:t,currentPage:a}=e;const i=sn(n,"modelValue",n.modelValue,b=>new Set(_n(b).map(k=>{var C;return((C=t.value.find(S=>n.valueComparator(k,S.value)))==null?void 0:C.value)??k})),b=>[...b.values()]),r=y(()=>t.value.filter(b=>b.selectable)),o=y(()=>a.value.filter(b=>b.selectable)),l=y(()=>{if(typeof n.selectStrategy=="object")return n.selectStrategy;switch(n.selectStrategy){case"single":return Gx;case"all":return Hs;case"page":default:return js}}),s=X(null);function u(b){return _n(b).every(k=>i.value.has(k.value))}function d(b){return _n(b).some(k=>i.value.has(k.value))}function p(b,k){const C=l.value.select({items:b,value:k,selected:new Set(i.value)});i.value=C}function f(b,k,C){const S=[];if(k=k??a.value.findIndex(E=>E.value===b.value),n.selectStrategy!=="single"&&(C!=null&&C.shiftKey)&&s.value!==null){const[E,A]=[s.value,k].sort((w,F)=>w-F);S.push(...a.value.slice(E,A+1).filter(w=>w.selectable))}else S.push(b),s.value=k;p(S,!u([b]))}function c(b){const k=l.value.selectAll({value:b,allItems:r.value,currentPage:o.value,selected:new Set(i.value)});i.value=k}const g=y(()=>i.value.size>0),h=y(()=>{const b=l.value.allSelected({allItems:r.value,currentPage:o.value});return!!b.length&&u(b)}),x=B(()=>l.value.showSelectAll),v={toggleSelect:f,select:p,selectAll:c,isSelected:u,isSomeSelected:d,someSelected:g,allSelected:h,showSelectAll:x,lastSelectedIndex:s,selectStrategy:l};return An(Ys,v),v}function pi(){const n=Sn(Ys);if(!n)throw new Error("Missing selection!");return n}const Gs=T({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Us=Symbol.for("vuetify:data-table-sort");function ci(n){const e=sn(n,"sortBy"),t=B(()=>n.mustSort),a=B(()=>n.multiSort);return{sortBy:e,mustSort:t,multiSort:a}}function gi(n){const{sortBy:e,mustSort:t,multiSort:a,page:i}=n,r=s=>{if(s.key==null)return;let u=e.value.map(p=>({...p}))??[];const d=u.find(p=>p.key===s.key);d?d.order==="desc"?t.value&&u.length===1?d.order="asc":u=u.filter(p=>p.key!==s.key):d.order="desc":a.value?u.push({key:s.key,order:"asc"}):u=[{key:s.key,order:"asc"}],e.value=u,i&&(i.value=1)};function o(s){return!!e.value.find(u=>u.key===s.key)}const l={sortBy:e,toggleSort:r,isSorted:o};return An(Us,l),l}function Ks(){const n=Sn(Us);if(!n)throw new Error("Missing sort!");return n}function oo(n,e,t,a){const i=On();return{sortedItems:y(()=>{var o,l;return t.value.length?Ux(e.value,t.value,i.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...n.customKeySort,...(o=a==null?void 0:a.sortFunctions)==null?void 0:o.value},sortRawFunctions:(l=a==null?void 0:a.sortRawFunctions)==null?void 0:l.value}):e.value})}}function Ux(n,e,t,a){const i=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return n.map(o=>[o,a!=null&&a.transform?a.transform(o):o]).sort((o,l)=>{var s,u;for(let d=0;d<e.length;d++){let p=!1;const f=e[d].key,c=e[d].order??"asc";if(c===!1)continue;let g=me(o[1],f),h=me(l[1],f),x=o[0].raw,v=l[0].raw;if(c==="desc"&&([g,h]=[h,g],[x,v]=[v,x]),(s=a==null?void 0:a.sortRawFunctions)!=null&&s[f]){const b=a.sortRawFunctions[f](x,v);if(b==null)continue;if(p=!0,b)return b}if((u=a==null?void 0:a.sortFunctions)!=null&&u[f]){const b=a.sortFunctions[f](g,h);if(b==null)continue;if(p=!0,b)return b}if(!p){if(g instanceof Date&&h instanceof Date)return g.getTime()-h.getTime();if([g,h]=[g,h].map(b=>b!=null?b.toString().toLocaleLowerCase():b),g!==h)return Pa(g)&&Pa(h)?0:Pa(g)?-1:Pa(h)?1:!isNaN(g)&&!isNaN(h)?Number(g)-Number(h):i.compare(g,h)}}return 0}).map(o=>{let[l]=o;return l})}const Kx=T({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function qx(n,e){const t=n.returnObject?e:jn(e,n.itemValue),a=jn(e,n.itemSelectable,!0);return{type:"item",value:t,selectable:a,raw:e}}function Xx(n,e){const t=[];for(const a of e)t.push(qx(n,a));return t}function Zx(n){return{items:y(()=>Xx(n,n.items))}}const Jx=T({search:String,loading:Boolean,...rn(),...Kx(),...Ws(),...Gs(),...ao({itemsPerPage:5}),..._s(),...to(),...ya(),...xn(),...Ct({transition:{component:Qe,hideOnLeave:!0}})},"VDataIterator"),Qx=L()({name:"VDataIterator",props:Jx(),emits:{"update:modelValue":n=>!0,"update:groupBy":n=>!0,"update:page":n=>!0,"update:itemsPerPage":n=>!0,"update:sortBy":n=>!0,"update:options":n=>!0,"update:expanded":n=>!0,"update:currentItems":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"groupBy"),i=B(()=>n.search),{items:r}=Zx(n),{filteredItems:o}=ka(n,r,i,{transform:D=>D.raw}),{sortBy:l,multiSort:s,mustSort:u}=ci(n),{page:d,itemsPerPage:p}=io(n),{toggleSort:f}=gi({sortBy:l,multiSort:s,mustSort:u,page:d}),{sortByWithGroups:c,opened:g,extractRows:h,isGroupOpen:x,toggleGroup:v}=mi({groupBy:a,sortBy:l}),{sortedItems:b}=oo(n,o,c,{transform:D=>D.raw}),{flatItems:k}=si(b,a,g),C=B(()=>k.value.length),{startIndex:S,stopIndex:E,pageCount:A,prevPage:w,nextPage:F,setItemsPerPage:_,setPage:V}=ro({page:d,itemsPerPage:p,itemsLength:C}),{paginatedItems:P}=Ns({items:k,startIndex:S,stopIndex:E,itemsPerPage:p}),I=y(()=>h(P.value)),{isSelected:M,select:j,selectAll:W,toggleSelect:nn}=ui(n,{allItems:r,currentPage:I}),{isExpanded:Q,toggleExpand:G}=li(n);di({page:d,itemsPerPage:p,sortBy:l,groupBy:a,search:i});const R=y(()=>({page:d.value,itemsPerPage:p.value,sortBy:l.value,pageCount:A.value,toggleSort:f,prevPage:w,nextPage:F,setPage:V,setItemsPerPage:_,isSelected:M,select:j,selectAll:W,toggleSelect:nn,isExpanded:Q,toggleExpand:G,isGroupOpen:x,toggleGroup:v,items:I.value,groupedItems:P.value}));return N(()=>m(n.tag,{class:["v-data-iterator",{"v-data-iterator--loading":n.loading},n.class],style:n.style},{default:()=>{var D,$;return[(D=t.header)==null?void 0:D.call(t,R.value),m(at,{transition:n.transition},{default:()=>{var K,J;return[n.loading?m(pa,{key:"loader",name:"v-data-iterator",active:!0},{default:ln=>{var Z;return(Z=t.loader)==null?void 0:Z.call(t,ln)}}):m("div",{key:"items"},[P.value.length?(J=t.default)==null?void 0:J.call(t,R.value):(K=t["no-data"])==null?void 0:K.call(t)])]}}),($=t.footer)==null?void 0:$.call(t,R.value)]}})),{}}});function nv(){const n=U([]);tu(()=>n.value=[]);function e(t,a){n.value[a]=t}return{refs:n,updateRef:e}}const tv=T({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:n=>n.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:n=>n%1===0},totalVisible:[Number,String],firstIcon:{type:un,default:"$first"},prevIcon:{type:un,default:"$prev"},nextIcon:{type:un,default:"$next"},lastIcon:{type:un,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...ut(),...rn(),...Kn(),...Gn(),...Bn(),...Dt(),...xn({tag:"nav"}),...kn(),...kt({variant:"text"})},"VPagination"),lr=L()({name:"VPagination",props:tv(),emits:{"update:modelValue":n=>!0,first:n=>!0,prev:n=>!0,next:n=>!0,last:n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=sn(n,"modelValue"),{t:r,n:o}=On(),{isRtl:l}=Hn(),{themeClasses:s}=Pn(n),{width:u}=wt(),d=X(-1);$n(void 0,{scoped:!0});const{resizeRef:p}=St(w=>{if(!w.length)return;const{target:F,contentRect:_}=w[0],V=F.querySelector(".v-pagination__list > *");if(!V)return;const P=_.width,I=V.offsetWidth+parseFloat(getComputedStyle(V).marginRight)*2;d.value=h(P,I)}),f=y(()=>parseInt(n.length,10)),c=y(()=>parseInt(n.start,10)),g=y(()=>n.totalVisible!=null?parseInt(n.totalVisible,10):d.value>=0?d.value:h(u.value,58));function h(w,F){const _=n.showFirstLastPage?5:3;return Math.max(0,Math.floor(Number(((w-F*_)/F).toFixed(2))))}const x=y(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(g.value<=0)return[];if(g.value===1)return[i.value];if(f.value<=g.value)return Pt(f.value,c.value);const w=g.value%2===0,F=w?g.value/2:Math.floor(g.value/2),_=w?F:F+1,V=f.value-F;if(_-i.value>=0)return[...Pt(Math.max(1,g.value-1),c.value),n.ellipsis,f.value];if(i.value-V>=(w?1:0)){const P=g.value-1,I=f.value-P+c.value;return[c.value,n.ellipsis,...Pt(P,I)]}else{const P=Math.max(1,g.value-2),I=P===1?i.value:i.value-Math.ceil(P/2)+c.value;return[c.value,n.ellipsis,...Pt(P,I),n.ellipsis,f.value]}});function v(w,F,_){w.preventDefault(),i.value=F,_&&a(_,F)}const{refs:b,updateRef:k}=nv();$n({VPaginationBtn:{color:B(()=>n.color),border:B(()=>n.border),density:B(()=>n.density),size:B(()=>n.size),variant:B(()=>n.variant),rounded:B(()=>n.rounded),elevation:B(()=>n.elevation)}});const C=y(()=>x.value.map((w,F)=>{const _=V=>k(V,F);if(typeof w=="string")return{isActive:!1,key:`ellipsis-${F}`,page:w,props:{ref:_,ellipsis:!0,icon:!0,disabled:!0}};{const V=w===i.value;return{isActive:V,key:w,page:o(w),props:{ref:_,ellipsis:!1,icon:!0,disabled:!!n.disabled||Number(n.length)<2,color:V?n.activeColor:n.color,"aria-current":V,"aria-label":r(V?n.currentPageAriaLabel:n.pageAriaLabel,w),onClick:P=>v(P,w)}}}})),S=y(()=>{const w=!!n.disabled||i.value<=c.value,F=!!n.disabled||i.value>=c.value+f.value-1;return{first:n.showFirstLastPage?{icon:l.value?n.lastIcon:n.firstIcon,onClick:_=>v(_,c.value,"first"),disabled:w,"aria-label":r(n.firstAriaLabel),"aria-disabled":w}:void 0,prev:{icon:l.value?n.nextIcon:n.prevIcon,onClick:_=>v(_,i.value-1,"prev"),disabled:w,"aria-label":r(n.previousAriaLabel),"aria-disabled":w},next:{icon:l.value?n.prevIcon:n.nextIcon,onClick:_=>v(_,i.value+1,"next"),disabled:F,"aria-label":r(n.nextAriaLabel),"aria-disabled":F},last:n.showFirstLastPage?{icon:l.value?n.firstIcon:n.lastIcon,onClick:_=>v(_,c.value+f.value-1,"last"),disabled:F,"aria-label":r(n.lastAriaLabel),"aria-disabled":F}:void 0}});function E(){var F;const w=i.value-c.value;(F=b.value[w])==null||F.$el.focus()}function A(w){w.key===Bi.left&&!n.disabled&&i.value>Number(n.start)?(i.value=i.value-1,Fn(E)):w.key===Bi.right&&!n.disabled&&i.value<c.value+f.value-1&&(i.value=i.value+1,Fn(E))}return N(()=>m(n.tag,{ref:p,class:["v-pagination",s.value,n.class],style:n.style,role:"navigation","aria-label":r(n.ariaLabel),onKeydown:A,"data-test":"v-pagination-root"},{default:()=>[m("ul",{class:"v-pagination__list"},[n.showFirstLastPage&&m("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(S.value.first):m(wn,z({_as:"VPaginationBtn"},S.value.first),null)]),m("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(S.value.prev):m(wn,z({_as:"VPaginationBtn"},S.value.prev),null)]),C.value.map((w,F)=>m("li",{key:w.key,class:["v-pagination__item",{"v-pagination__item--is-active":w.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(w):m(wn,z({_as:"VPaginationBtn"},w.props),{default:()=>[w.page]})])),m("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(S.value.next):m(wn,z({_as:"VPaginationBtn"},S.value.next),null)]),n.showFirstLastPage&&m("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(S.value.last):m(wn,z({_as:"VPaginationBtn"},S.value.last),null)])])]})),{}}}),lo=T({prevIcon:{type:un,default:"$prev"},nextIcon:{type:un,default:"$next"},firstIcon:{type:un,default:"$first"},lastIcon:{type:un,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),oa=L()({name:"VDataTableFooter",props:lo(),setup(n,e){let{slots:t}=e;const{t:a}=On(),{page:i,pageCount:r,startIndex:o,stopIndex:l,itemsLength:s,itemsPerPage:u,setItemsPerPage:d}=Yx(),p=y(()=>n.itemsPerPageOptions.map(f=>typeof f=="number"?{value:f,title:f===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(f)}:{...f,title:isNaN(Number(f.title))?a(f.title):f.title}));return N(()=>{var c;const f=lr.filterProps(n);return m("div",{class:"v-data-table-footer"},[(c=t.prepend)==null?void 0:c.call(t),m("div",{class:"v-data-table-footer__items-per-page"},[m("span",null,[a(n.itemsPerPageText)]),m(Xr,{items:p.value,modelValue:u.value,"onUpdate:modelValue":g=>d(Number(g)),density:"compact",variant:"outlined","hide-details":!0},null)]),m("div",{class:"v-data-table-footer__info"},[m("div",null,[a(n.pageText,s.value?o.value+1:0,l.value,s.value)])]),m("div",{class:"v-data-table-footer__pagination"},[m(lr,z({modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,density:"comfortable","first-aria-label":n.firstPageLabel,"last-aria-label":n.lastPageLabel,length:r.value,"next-aria-label":n.nextPageLabel,"previous-aria-label":n.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":n.showCurrentPage?1:0,variant:"plain"},f),null)])])}),{}}}),Ha=Yu({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(n,e)=>{let{slots:t}=e;const a=n.tag??"td";return m(a,{class:["v-data-table__td",{"v-data-table-column--fixed":n.fixed,"v-data-table-column--last-fixed":n.lastFixed,"v-data-table-column--no-padding":n.noPadding,"v-data-table-column--nowrap":n.nowrap},`v-data-table-column--align-${n.align}`],style:{height:an(n.height),width:an(n.width),maxWidth:an(n.maxWidth),left:an(n.fixedOffset||null)}},{default:()=>{var i;return[(i=t.default)==null?void 0:i.call(t)]}})}),ev=T({headers:Array},"DataTable-header"),qs=Symbol.for("vuetify:data-table-headers"),Xs={title:"",sortable:!1},av={...Xs,width:48};function iv(){const e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let i=!1;for(let r=0;r<e.length;r++)if(e[r].priority>a){e.splice(r,0,{element:t,priority:a}),i=!0;break}i||e.push({element:t,priority:a})},size:()=>e.length,count:()=>{let t=0;if(!e.length)return 0;const a=Math.floor(e[0].priority);for(let i=0;i<e.length;i++)Math.floor(e[i].priority)===a&&(t+=1);return t},dequeue:()=>e.shift()}}function mr(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!n.children)e.push(n);else for(const t of n.children)mr(t,e);return e}function Zs(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of n)t.key&&e.add(t.key),t.children&&Zs(t.children,e);return e}function rv(n){if(n.key){if(n.key==="data-table-group")return Xs;if(["data-table-expand","data-table-select"].includes(n.key))return av}}function mo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.children?Math.max(e,...n.children.map(t=>mo(t,e+1))):e}function ov(n){let e=!1;function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let l=r.children.length-1;l>=0;l--)t(r.children[l],!0);else e?isNaN(Number(r.width))?(`${r.key}`,void 0):r.minWidth=Math.max(Number(r.width)||0,Number(r.minWidth)||0):r.lastFixed=!0,e=!0;else if(r.children)for(let l=r.children.length-1;l>=0;l--)t(r.children[l]);else e=!1}for(let r=n.length-1;r>=0;r--)t(n[r]);function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const l of r.children)o=a(l,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let i=0;for(const r of n)i=a(r,i)}function lv(n,e){const t=[];let a=0;const i=iv(n);for(;i.size()>0;){let o=i.count();const l=[];let s=1;for(;o>0;){const{element:u,priority:d}=i.dequeue(),p=e-a-mo(u);if(l.push({...u,rowspan:p??1,colspan:u.children?mr(u).length:1}),u.children)for(const f of u.children){const c=d%1+s/Math.pow(10,a+2);i.enqueue(f,a+p+c)}s+=1,o-=1}a+=1,t.push(l)}return{columns:n.map(o=>mr(o)).flat(),headers:t}}function Js(n){const e=[];for(const t of n){const a={...rv(t),...t},i=a.key??(typeof a.value=="string"?a.value:null),r=a.value??i??null,o={...a,key:i,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Js(a.children):void 0};e.push(o)}return e}function so(n,e){const t=U([]),a=U([]),i=U({}),r=U({}),o=U({});Mn(()=>{var h,x,v;const u=(n.headers||Object.keys(n.items[0]??{}).map(b=>({key:b,title:$e(b)}))).slice(),d=Zs(u);(h=e==null?void 0:e.groupBy)!=null&&h.value.length&&!d.has("data-table-group")&&u.unshift({key:"data-table-group",title:"Group"}),(x=e==null?void 0:e.showSelect)!=null&&x.value&&!d.has("data-table-select")&&u.unshift({key:"data-table-select"}),(v=e==null?void 0:e.showExpand)!=null&&v.value&&!d.has("data-table-expand")&&u.push({key:"data-table-expand"});const p=Js(u);ov(p);const f=Math.max(...p.map(b=>mo(b)))+1,c=lv(p,f);t.value=c.headers,a.value=c.columns;const g=c.headers.flat(1);for(const b of g)b.key&&(b.sortable&&(b.sort&&(i.value[b.key]=b.sort),b.sortRaw&&(r.value[b.key]=b.sortRaw)),b.filter&&(o.value[b.key]=b.filter))});const l={headers:t,columns:a,sortFunctions:i,sortRawFunctions:r,filterFunctions:o};return An(qs,l),l}function fi(){const n=Sn(qs);if(!n)throw new Error("Missing headers!");return n}const Qs=T({color:String,disableSort:Boolean,fixedHeader:Boolean,multiSort:Boolean,sortAscIcon:{type:un,default:"$sortAsc"},sortDescIcon:{type:un,default:"$sortDesc"},headerProps:{type:Object},sticky:Boolean,...we(),...Ja()},"VDataTableHeaders"),ue=L()({name:"VDataTableHeaders",props:Qs(),setup(n,e){let{slots:t}=e;const{t:a}=On(),{toggleSort:i,sortBy:r,isSorted:o}=Ks(),{someSelected:l,allSelected:s,selectAll:u,showSelectAll:d}=pi(),{columns:p,headers:f}=fi(),{loaderClasses:c}=ua(n);function g(w,F){if(!(!(n.sticky||n.fixedHeader)&&!w.fixed))return{position:"sticky",left:w.fixed?an(w.fixedOffset):void 0,top:n.sticky||n.fixedHeader?`calc(var(--v-table-header-height) * ${F})`:void 0}}function h(w){const F=r.value.find(_=>_.key===w.key);return F?F.order==="asc"?n.sortAscIcon:n.sortDescIcon:n.sortAscIcon}const{backgroundColorClasses:x,backgroundColorStyles:v}=En(()=>n.color),{displayClasses:b,mobile:k}=wt(n),C=y(()=>({headers:f.value,columns:p.value,toggleSort:i,isSorted:o,sortBy:r.value,someSelected:l.value,allSelected:s.value,selectAll:u,getSortIcon:h})),S=y(()=>["v-data-table__th",{"v-data-table__th--sticky":n.sticky||n.fixedHeader},b.value,c.value]),E=w=>{let{column:F,x:_,y:V}=w;const P=F.key==="data-table-select"||F.key==="data-table-expand",I=z(n.headerProps??{},F.headerProps??{});return m(Ha,z({tag:"th",align:F.align,class:[{"v-data-table__th--sortable":F.sortable&&!n.disableSort,"v-data-table__th--sorted":o(F),"v-data-table__th--fixed":F.fixed},...S.value],style:{width:an(F.width),minWidth:an(F.minWidth),maxWidth:an(F.maxWidth),...g(F,V)},colspan:F.colspan,rowspan:F.rowspan,onClick:F.sortable?()=>i(F):void 0,fixed:F.fixed,nowrap:F.nowrap,lastFixed:F.lastFixed,noPadding:P},I),{default:()=>{var W;const M=`header.${F.key}`,j={column:F,selectAll:u,isSorted:o,toggleSort:i,sortBy:r.value,someSelected:l.value,allSelected:s.value,getSortIcon:h};return t[M]?t[M](j):F.key==="data-table-select"?((W=t["header.data-table-select"])==null?void 0:W.call(t,j))??(d.value&&m(Lt,{modelValue:s.value,indeterminate:l.value&&!s.value,"onUpdate:modelValue":u},null)):m("div",{class:"v-data-table-header__content"},[m("span",null,[F.title]),F.sortable&&!n.disableSort&&m(Vn,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(F)},null),n.multiSort&&o(F)&&m("div",{key:"badge",class:["v-data-table-header__sort-badge",...x.value],style:v.value},[r.value.findIndex(nn=>nn.key===F.key)+1])])}})},A=()=>{const w=y(()=>p.value.filter(_=>(_==null?void 0:_.sortable)&&!n.disableSort)),F=y(()=>{if(p.value.find(V=>V.key==="data-table-select")!=null)return s.value?"$checkboxOn":l.value?"$checkboxIndeterminate":"$checkboxOff"});return m(Ha,z({tag:"th",class:[...S.value],colspan:f.value.length+1},n.headerProps),{default:()=>[m("div",{class:"v-data-table-header__content"},[m(Xr,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:w.value,label:a("$vuetify.dataTable.sortBy"),multiple:n.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:F.value,"onClick:append":()=>u(!s.value)},{...t,chip:_=>{var V;return m(He,{onClick:(V=_.item.raw)!=null&&V.sortable?()=>i(_.item.raw):void 0,onMousedown:P=>{P.preventDefault(),P.stopPropagation()}},{default:()=>[_.item.title,m(Vn,{class:["v-data-table__td-sort-icon",o(_.item.raw)&&"v-data-table__td-sort-icon-active"],icon:h(_.item.raw),size:"small"},null)]})}})])]})};N(()=>k.value?m("tr",null,[m(A,null,null)]):m(dn,null,[t.headers?t.headers(C.value):f.value.map((w,F)=>m("tr",null,[w.map((_,V)=>m(E,{column:_,x:V,y:F},null))])),n.loading&&m("tr",{class:"v-data-table-progress"},[m("th",{colspan:p.value.length},[m(pa,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof n.loading=="boolean"?void 0:n.loading,indeterminate:!0},{default:t.loader})])])]))}}),mv=T({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),sv=L()({name:"VDataTableGroupHeaderRow",props:mv(),setup(n,e){let{slots:t}=e;const{isGroupOpen:a,toggleGroup:i,extractRows:r}=$s(),{isSelected:o,isSomeSelected:l,select:s}=pi(),{columns:u}=fi(),d=y(()=>r([n.item]));return()=>m("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":n.item.depth}},[u.value.map(p=>{var f,c;if(p.key==="data-table-group"){const g=a(n.item)?"$expand":"$next",h=()=>i(n.item);return((f=t["data-table-group"])==null?void 0:f.call(t,{item:n.item,count:d.value.length,props:{icon:g,onClick:h}}))??m(Ha,{class:"v-data-table-group-header-row__column"},{default:()=>[m(wn,{size:"small",variant:"text",icon:g,onClick:h},null),m("span",null,[n.item.value]),m("span",null,[bn("("),d.value.length,bn(")")])]})}if(p.key==="data-table-select"){const g=o(d.value),h=l(d.value)&&!g,x=v=>s(d.value,v);return((c=t["data-table-select"])==null?void 0:c.call(t,{props:{modelValue:g,indeterminate:h,"onUpdate:modelValue":x}}))??m("td",null,[m(Lt,{modelValue:g,indeterminate:h,"onUpdate:modelValue":x},null)])}return m("td",null,null)})])}}),dv=T({index:Number,item:Object,cellProps:[Object,Function],onClick:qn(),onContextmenu:qn(),onDblclick:qn(),...we()},"VDataTableRow"),uo=L()({name:"VDataTableRow",props:dv(),setup(n,e){let{slots:t}=e;const{displayClasses:a,mobile:i}=wt(n,"v-data-table__tr"),{isSelected:r,toggleSelect:o,someSelected:l,allSelected:s,selectAll:u}=pi(),{isExpanded:d,toggleExpand:p}=Ms(),{toggleSort:f,sortBy:c,isSorted:g}=Ks(),{columns:h}=fi();N(()=>m("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(n.onClick||n.onContextmenu||n.onDblclick)},a.value],onClick:n.onClick,onContextmenu:n.onContextmenu,onDblclick:n.onDblclick},[n.item&&h.value.map((x,v)=>{const b=n.item,k=`item.${x.key}`,C=`header.${x.key}`,S={index:n.index,item:b.raw,internalItem:b,value:me(b.columns,x.key),column:x,isSelected:r,toggleSelect:o,isExpanded:d,toggleExpand:p},E={column:x,selectAll:u,isSorted:g,toggleSort:f,sortBy:c.value,someSelected:l.value,allSelected:s.value,getSortIcon:()=>""},A=typeof n.cellProps=="function"?n.cellProps({index:S.index,item:S.item,internalItem:S.internalItem,value:S.value,column:x}):n.cellProps,w=typeof x.cellProps=="function"?x.cellProps({index:S.index,item:S.item,internalItem:S.internalItem,value:S.value}):x.cellProps;return m(Ha,z({align:x.align,class:{"v-data-table__td--expanded-row":x.key==="data-table-expand","v-data-table__td--select-row":x.key==="data-table-select"},fixed:x.fixed,fixedOffset:x.fixedOffset,lastFixed:x.lastFixed,maxWidth:i.value?void 0:x.maxWidth,noPadding:x.key==="data-table-select"||x.key==="data-table-expand",nowrap:x.nowrap,width:i.value?void 0:x.width},A,w),{default:()=>{var _,V,P,I;if(x.key==="data-table-select")return((_=t["item.data-table-select"])==null?void 0:_.call(t,{...S,props:{disabled:!b.selectable,modelValue:r([b]),onClick:Va(()=>o(b),["stop"])}}))??m(Lt,{disabled:!b.selectable,modelValue:r([b]),onClick:Va(M=>o(b,n.index,M),["stop"])},null);if(x.key==="data-table-expand")return((V=t["item.data-table-expand"])==null?void 0:V.call(t,{...S,props:{icon:d(b)?"$collapse":"$expand",size:"small",variant:"text",onClick:Va(()=>p(b),["stop"])}}))??m(wn,{icon:d(b)?"$collapse":"$expand",size:"small",variant:"text",onClick:Va(()=>p(b),["stop"])},null);if(t[k]&&!i.value)return t[k](S);const F=$t(S.value);return i.value?m(dn,null,[m("div",{class:"v-data-table__td-title"},[((P=t[C])==null?void 0:P.call(t,E))??x.title]),m("div",{class:"v-data-table__td-value"},[((I=t[k])==null?void 0:I.call(t,S))??F])]):F}})})]))}}),nd=T({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...we()},"VDataTableRows"),pe=L()({name:"VDataTableRows",inheritAttrs:!1,props:nd(),setup(n,e){let{attrs:t,slots:a}=e;const{columns:i}=fi(),{expandOnClick:r,toggleExpand:o,isExpanded:l}=Ms(),{isSelected:s,toggleSelect:u}=pi(),{toggleGroup:d,isGroupOpen:p}=$s(),{t:f}=On(),{mobile:c}=wt(n);return N(()=>{var g,h;return n.loading&&(!n.items.length||a.loading)?m("tr",{class:"v-data-table-rows-loading",key:"loading"},[m("td",{colspan:i.value.length},[((g=a.loading)==null?void 0:g.call(a))??f(n.loadingText)])]):!n.loading&&!n.items.length&&!n.hideNoData?m("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[m("td",{colspan:i.value.length},[((h=a["no-data"])==null?void 0:h.call(a))??f(n.noDataText)])]):m(dn,null,[n.items.map((x,v)=>{var C;if(x.type==="group"){const S={index:v,item:x,columns:i.value,isExpanded:l,toggleExpand:o,isSelected:s,toggleSelect:u,toggleGroup:d,isGroupOpen:p};return a["group-header"]?a["group-header"](S):m(sv,z({key:`group-header_${x.id}`,item:x},zo(t,":group-header",()=>S)),a)}const b={index:v,item:x.raw,internalItem:x,columns:i.value,isExpanded:l,toggleExpand:o,isSelected:s,toggleSelect:u},k={...b,props:z({key:`item_${x.key??x.index}`,onClick:r.value?()=>{o(x)}:void 0,index:v,item:x,cellProps:n.cellProps,mobile:c.value},zo(t,":row",()=>b),typeof n.rowProps=="function"?n.rowProps({item:b.item,index:b.index,internalItem:b.internalItem}):n.rowProps)};return m(dn,{key:k.props.key},[a.item?a.item(k):m(uo,k.props,a),l(x)&&((C=a["expanded-row"])==null?void 0:C.call(a,b))])})])}),{}}}),td=T({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...rn(),...Kn(),...xn(),...kn()},"VTable"),ce=L()({name:"VTable",props:td(),setup(n,e){let{slots:t,emit:a}=e;const{themeClasses:i}=Pn(n),{densityClasses:r}=rt(n);return N(()=>m(n.tag,{class:["v-table",{"v-table--fixed-height":!!n.height,"v-table--fixed-header":n.fixedHeader,"v-table--fixed-footer":n.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":n.hover},i.value,r.value,n.class],style:n.style},{default:()=>{var o,l,s;return[(o=t.top)==null?void 0:o.call(t),t.default?m("div",{class:"v-table__wrapper",style:{height:an(n.height)}},[m("table",null,[t.default()])]):(l=t.wrapper)==null?void 0:l.call(t),(s=t.bottom)==null?void 0:s.call(t)]}})),{}}}),uv=T({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function pv(n,e,t,a){const i=n.returnObject?e:jn(e,n.itemValue),r=jn(e,n.itemSelectable,!0),o=a.reduce((l,s)=>(s.key!=null&&(l[s.key]=jn(e,s.value)),l),{});return{type:"item",key:n.returnObject?jn(e,n.itemValue):i,index:t,value:i,selectable:r,columns:o,raw:e}}function cv(n,e,t){return e.map((a,i)=>pv(n,a,i,t))}function po(n,e){return{items:y(()=>cv(n,n.items,e.value))}}const co=T({...nd(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,..._s(),...to(),...ev(),...uv(),...Ws(),...Gs(),...Qs(),...td()},"DataTable"),gv=T({...ao(),...co(),...ya(),...lo()},"VDataTable"),fv=L()({name:"VDataTable",props:gv(),emits:{"update:modelValue":n=>!0,"update:page":n=>!0,"update:itemsPerPage":n=>!0,"update:sortBy":n=>!0,"update:options":n=>!0,"update:groupBy":n=>!0,"update:expanded":n=>!0,"update:currentItems":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const{groupBy:i}=eo(n),{sortBy:r,multiSort:o,mustSort:l}=ci(n),{page:s,itemsPerPage:u}=io(n),{disableSort:d}=Oe(n),{columns:p,headers:f,sortFunctions:c,sortRawFunctions:g,filterFunctions:h}=so(n,{groupBy:i,showSelect:B(()=>n.showSelect),showExpand:B(()=>n.showExpand)}),{items:x}=po(n,p),v=B(()=>n.search),{filteredItems:b}=ka(n,x,v,{transform:q=>q.columns,customKeyFilter:h}),{toggleSort:k}=gi({sortBy:r,multiSort:o,mustSort:l,page:s}),{sortByWithGroups:C,opened:S,extractRows:E,isGroupOpen:A,toggleGroup:w}=mi({groupBy:i,sortBy:r,disableSort:d}),{sortedItems:F}=oo(n,b,C,{transform:q=>({...q.raw,...q.columns}),sortFunctions:c,sortRawFunctions:g}),{flatItems:_}=si(F,i,S),V=y(()=>_.value.length),{startIndex:P,stopIndex:I,pageCount:M,setItemsPerPage:j}=ro({page:s,itemsPerPage:u,itemsLength:V}),{paginatedItems:W}=Ns({items:_,startIndex:P,stopIndex:I,itemsPerPage:u}),nn=y(()=>E(W.value)),{isSelected:Q,select:G,selectAll:R,toggleSelect:D,someSelected:$,allSelected:K}=ui(n,{allItems:x,currentPage:nn}),{isExpanded:J,toggleExpand:ln}=li(n);di({page:s,itemsPerPage:u,sortBy:r,groupBy:i,search:v}),$n({VDataTableRows:{hideNoData:B(()=>n.hideNoData),noDataText:B(()=>n.noDataText),loading:B(()=>n.loading),loadingText:B(()=>n.loadingText)}});const Z=y(()=>({page:s.value,itemsPerPage:u.value,sortBy:r.value,pageCount:M.value,toggleSort:k,setItemsPerPage:j,someSelected:$.value,allSelected:K.value,isSelected:Q,select:G,selectAll:R,toggleSelect:D,isExpanded:J,toggleExpand:ln,isGroupOpen:A,toggleGroup:w,items:nn.value.map(q=>q.raw),internalItems:nn.value,groupedItems:W.value,columns:p.value,headers:f.value}));return N(()=>{const q=oa.filterProps(n),mn=ue.filterProps(n),fn=pe.filterProps(n),Y=ce.filterProps(n);return m(ce,z({class:["v-data-table",{"v-data-table--show-select":n.showSelect,"v-data-table--loading":n.loading},n.class],style:n.style},Y,{fixedHeader:n.fixedHeader||n.sticky}),{top:()=>{var on;return(on=a.top)==null?void 0:on.call(a,Z.value)},default:()=>{var on,H,en,cn,pn,hn;return a.default?a.default(Z.value):m(dn,null,[(on=a.colgroup)==null?void 0:on.call(a,Z.value),!n.hideDefaultHeader&&m("thead",{key:"thead"},[m(ue,mn,a)]),(H=a.thead)==null?void 0:H.call(a,Z.value),!n.hideDefaultBody&&m("tbody",null,[(en=a["body.prepend"])==null?void 0:en.call(a,Z.value),a.body?a.body(Z.value):m(pe,z(t,fn,{items:W.value}),a),(cn=a["body.append"])==null?void 0:cn.call(a,Z.value)]),(pn=a.tbody)==null?void 0:pn.call(a,Z.value),(hn=a.tfoot)==null?void 0:hn.call(a,Z.value)])},bottom:()=>a.bottom?a.bottom(Z.value):!n.hideDefaultFooter&&m(dn,null,[m(Mt,null,null),m(oa,q,{prepend:a["footer.prepend"]})])})}),{}}}),xv=T({...Rn(co(),["hideDefaultFooter"]),...to(),...ms(),...ya()},"VDataTableVirtual"),vv=L()({name:"VDataTableVirtual",props:xv(),emits:{"update:modelValue":n=>!0,"update:sortBy":n=>!0,"update:options":n=>!0,"update:groupBy":n=>!0,"update:expanded":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const{groupBy:i}=eo(n),{sortBy:r,multiSort:o,mustSort:l}=ci(n),{disableSort:s}=Oe(n),{columns:u,headers:d,filterFunctions:p,sortFunctions:f,sortRawFunctions:c}=so(n,{groupBy:i,showSelect:B(()=>n.showSelect),showExpand:B(()=>n.showExpand)}),{items:g}=po(n,u),h=B(()=>n.search),{filteredItems:x}=ka(n,g,h,{transform:Y=>Y.columns,customKeyFilter:p}),{toggleSort:v}=gi({sortBy:r,multiSort:o,mustSort:l}),{sortByWithGroups:b,opened:k,extractRows:C,isGroupOpen:S,toggleGroup:E}=mi({groupBy:i,sortBy:r,disableSort:s}),{sortedItems:A}=oo(n,x,b,{transform:Y=>({...Y.raw,...Y.columns}),sortFunctions:f,sortRawFunctions:c}),{flatItems:w}=si(A,i,k),F=y(()=>C(w.value)),{isSelected:_,select:V,selectAll:P,toggleSelect:I,someSelected:M,allSelected:j}=ui(n,{allItems:F,currentPage:F}),{isExpanded:W,toggleExpand:nn}=li(n),{containerRef:Q,markerRef:G,paddingTop:R,paddingBottom:D,computedItems:$,handleItemResize:K,handleScroll:J,handleScrollend:ln,calculateVisibleItems:Z,scrollToIndex:q}=ss(n,w),mn=y(()=>$.value.map(Y=>Y.raw));di({sortBy:r,page:X(1),itemsPerPage:X(-1),groupBy:i,search:h}),$n({VDataTableRows:{hideNoData:B(()=>n.hideNoData),noDataText:B(()=>n.noDataText),loading:B(()=>n.loading),loadingText:B(()=>n.loadingText)}});const fn=y(()=>({sortBy:r.value,toggleSort:v,someSelected:M.value,allSelected:j.value,isSelected:_,select:V,selectAll:P,toggleSelect:I,isExpanded:W,toggleExpand:nn,isGroupOpen:S,toggleGroup:E,items:F.value.map(Y=>Y.raw),internalItems:F.value,groupedItems:w.value,columns:u.value,headers:d.value}));return N(()=>{const Y=ue.filterProps(n),on=pe.filterProps(n),H=ce.filterProps(n);return m(ce,z({class:["v-data-table",{"v-data-table--loading":n.loading},n.class],style:n.style},H,{fixedHeader:n.fixedHeader||n.sticky}),{top:()=>{var en;return(en=a.top)==null?void 0:en.call(a,fn.value)},wrapper:()=>{var en,cn,pn,hn,yn,In;return m("div",{ref:Q,onScrollPassive:J,onScrollend:ln,class:"v-table__wrapper",style:{height:an(n.height)}},[m("table",null,[(en=a.colgroup)==null?void 0:en.call(a,fn.value),!n.hideDefaultHeader&&m("thead",{key:"thead"},[m(ue,Y,a)]),(cn=a.thead)==null?void 0:cn.call(a,fn.value),!n.hideDefaultBody&&m("tbody",{key:"tbody"},[m("tr",{ref:G,style:{height:an(R.value),border:0}},[m("td",{colspan:u.value.length,style:{height:0,border:0}},null)]),(pn=a["body.prepend"])==null?void 0:pn.call(a,fn.value),m(pe,z(t,on,{items:mn.value}),{...a,item:gn=>m(ls,{key:gn.internalItem.index,renderless:!0,"onUpdate:height":ot=>K(gn.internalItem.index,ot)},{default:ot=>{var Vt;let{itemRef:Un}=ot;return((Vt=a.item)==null?void 0:Vt.call(a,{...gn,itemRef:Un}))??m(uo,z(gn.props,{ref:Un,key:gn.internalItem.index,index:gn.internalItem.index}),a)}})}),(hn=a["body.append"])==null?void 0:hn.call(a,fn.value),m("tr",{style:{height:an(D.value),border:0}},[m("td",{colspan:u.value.length,style:{height:0,border:0}},null)])]),(yn=a.tbody)==null?void 0:yn.call(a,fn.value),(In=a.tfoot)==null?void 0:In.call(a,fn.value)])])},bottom:()=>{var en;return(en=a.bottom)==null?void 0:en.call(a,fn.value)}})}),{calculateVisibleItems:Z,scrollToIndex:q}}}),bv=T({itemsLength:{type:[Number,String],required:!0},...ao(),...co(),...lo()},"VDataTableServer"),hv=L()({name:"VDataTableServer",props:bv(),emits:{"update:modelValue":n=>!0,"update:page":n=>!0,"update:itemsPerPage":n=>!0,"update:sortBy":n=>!0,"update:options":n=>!0,"update:expanded":n=>!0,"update:groupBy":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const{groupBy:i}=eo(n),{sortBy:r,multiSort:o,mustSort:l}=ci(n),{page:s,itemsPerPage:u}=io(n),{disableSort:d}=Oe(n),p=y(()=>parseInt(n.itemsLength,10)),{columns:f,headers:c}=so(n,{groupBy:i,showSelect:B(()=>n.showSelect),showExpand:B(()=>n.showExpand)}),{items:g}=po(n,f),{toggleSort:h}=gi({sortBy:r,multiSort:o,mustSort:l,page:s}),{opened:x,isGroupOpen:v,toggleGroup:b,extractRows:k}=mi({groupBy:i,sortBy:r,disableSort:d}),{pageCount:C,setItemsPerPage:S}=ro({page:s,itemsPerPage:u,itemsLength:p}),{flatItems:E}=si(g,i,x),{isSelected:A,select:w,selectAll:F,toggleSelect:_,someSelected:V,allSelected:P}=ui(n,{allItems:g,currentPage:g}),{isExpanded:I,toggleExpand:M}=li(n),j=y(()=>k(g.value));di({page:s,itemsPerPage:u,sortBy:r,groupBy:i,search:B(()=>n.search)}),An("v-data-table",{toggleSort:h,sortBy:r}),$n({VDataTableRows:{hideNoData:B(()=>n.hideNoData),noDataText:B(()=>n.noDataText),loading:B(()=>n.loading),loadingText:B(()=>n.loadingText)}});const W=y(()=>({page:s.value,itemsPerPage:u.value,sortBy:r.value,pageCount:C.value,toggleSort:h,setItemsPerPage:S,someSelected:V.value,allSelected:P.value,isSelected:A,select:w,selectAll:F,toggleSelect:_,isExpanded:I,toggleExpand:M,isGroupOpen:v,toggleGroup:b,items:j.value.map(nn=>nn.raw),internalItems:j.value,groupedItems:E.value,columns:f.value,headers:c.value}));N(()=>{const nn=oa.filterProps(n),Q=ue.filterProps(n),G=pe.filterProps(n),R=ce.filterProps(n);return m(ce,z({class:["v-data-table",{"v-data-table--loading":n.loading},n.class],style:n.style},R,{fixedHeader:n.fixedHeader||n.sticky}),{top:()=>{var D;return(D=a.top)==null?void 0:D.call(a,W.value)},default:()=>{var D,$,K,J,ln,Z;return a.default?a.default(W.value):m(dn,null,[(D=a.colgroup)==null?void 0:D.call(a,W.value),!n.hideDefaultHeader&&m("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[m(ue,Q,a)]),($=a.thead)==null?void 0:$.call(a,W.value),!n.hideDefaultBody&&m("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(K=a["body.prepend"])==null?void 0:K.call(a,W.value),a.body?a.body(W.value):m(pe,z(t,G,{items:E.value}),a),(J=a["body.append"])==null?void 0:J.call(a,W.value)]),(ln=a.tbody)==null?void 0:ln.call(a,W.value),(Z=a.tfoot)==null?void 0:Z.call(a,W.value)])},bottom:()=>a.bottom?a.bottom(W.value):!n.hideDefaultFooter&&m(dn,null,[m(Mt,null,null),m(oa,nn,{prepend:a["footer.prepend"]})])})})}}),yv=T({fluid:{type:Boolean,default:!1},...rn(),...Wn(),...xn()},"VContainer"),kv=L()({name:"VContainer",props:yv(),setup(n,e){let{slots:t}=e;const{rtlClasses:a}=Hn(),{dimensionStyles:i}=Yn(n);return N(()=>m(n.tag,{class:["v-container",{"v-container--fluid":n.fluid},a.value,n.class],style:[i.value,n.style]},t)),{}}}),ed=ti.reduce((n,e)=>(n[e]={type:[Boolean,String,Number],default:!1},n),{}),ad=ti.reduce((n,e)=>{const t="offset"+$e(e);return n[t]={type:[String,Number],default:null},n},{}),id=ti.reduce((n,e)=>{const t="order"+$e(e);return n[t]={type:[String,Number],default:null},n},{}),ul={col:Object.keys(ed),offset:Object.keys(ad),order:Object.keys(id)};function wv(n,e,t){let a=n;if(!(t==null||t===!1)){if(e){const i=e.replace(n,"");a+=`-${i}`}return n==="col"&&(a="v-"+a),n==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Sv=["auto","start","end","center","baseline","stretch"],Fv=T({cols:{type:[Boolean,String,Number],default:!1},...ed,offset:{type:[String,Number],default:null},...ad,order:{type:[String,Number],default:null},...id,alignSelf:{type:String,default:null,validator:n=>Sv.includes(n)},...rn(),...xn()},"VCol"),Cv=L()({name:"VCol",props:Fv(),setup(n,e){let{slots:t}=e;const a=y(()=>{const i=[];let r;for(r in ul)ul[r].forEach(l=>{const s=n[l],u=wv(r,l,s);u&&i.push(u)});const o=i.some(l=>l.startsWith("v-col-"));return i.push({"v-col":!o||!n.cols,[`v-col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),i});return()=>{var i;return Xt(n.tag,{class:[a.value,n.class],style:n.style},(i=t.default)==null?void 0:i.call(t))}}}),go=["start","end","center"],rd=["space-between","space-around","space-evenly"];function fo(n,e){return ti.reduce((t,a)=>{const i=n+$e(a);return t[i]=e(),t},{})}const Vv=[...go,"baseline","stretch"],od=n=>Vv.includes(n),ld=fo("align",()=>({type:String,default:null,validator:od})),Pv=[...go,...rd],md=n=>Pv.includes(n),sd=fo("justify",()=>({type:String,default:null,validator:md})),Iv=[...go,...rd,"stretch"],dd=n=>Iv.includes(n),ud=fo("alignContent",()=>({type:String,default:null,validator:dd})),pl={align:Object.keys(ld),justify:Object.keys(sd),alignContent:Object.keys(ud)},Ev={align:"align",justify:"justify",alignContent:"align-content"};function Av(n,e,t){let a=Ev[n];if(t!=null){if(e){const i=e.replace(n,"");a+=`-${i}`}return a+=`-${t}`,a.toLowerCase()}}const Bv=T({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:od},...ld,justify:{type:String,default:null,validator:md},...sd,alignContent:{type:String,default:null,validator:dd},...ud,...rn(),...xn()},"VRow"),Dv=L()({name:"VRow",props:Bv(),setup(n,e){let{slots:t}=e;const a=y(()=>{const i=[];let r;for(r in pl)pl[r].forEach(o=>{const l=n[o],s=Av(r,o,l);s&&i.push(s)});return i.push({"v-row--no-gutters":n.noGutters,"v-row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),i});return()=>{var i;return Xt(n.tag,{class:["v-row",a.value,n.class],style:n.style},(i=t.default)==null?void 0:i.call(t))}}}),pd=Bt("v-spacer","div","VSpacer"),cd=T({active:{type:[String,Array],default:void 0},controlHeight:[Number,String],disabled:{type:[Boolean,String,Array],default:null},nextIcon:{type:un,default:"$next"},prevIcon:{type:un,default:"$prev"},modeIcon:{type:un,default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),sr=L()({name:"VDatePickerControls",props:cd(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(n,e){let{emit:t}=e;const a=y(()=>Array.isArray(n.disabled)?n.disabled.includes("text"):!!n.disabled),i=y(()=>Array.isArray(n.disabled)?n.disabled.includes("mode"):!!n.disabled),r=y(()=>Array.isArray(n.disabled)?n.disabled.includes("prev"):!!n.disabled),o=y(()=>Array.isArray(n.disabled)?n.disabled.includes("next"):!!n.disabled);function l(){t("click:prev")}function s(){t("click:next")}function u(){t("click:year")}function d(){t("click:month")}return N(()=>m("div",{class:["v-date-picker-controls"],style:{"--v-date-picker-controls-height":an(n.controlHeight)}},[m(wn,{class:"v-date-picker-controls__month-btn","data-testid":"month-btn",disabled:a.value,text:n.text,variant:"text",rounded:!0,onClick:d},null),m(wn,{class:"v-date-picker-controls__mode-btn","data-testid":"year-btn",disabled:i.value,density:"comfortable",icon:n.modeIcon,variant:"text",onClick:u},null),m(pd,null,null),m("div",{class:"v-date-picker-controls__month"},[m(wn,{"data-testid":"prev-month",disabled:r.value,density:"comfortable",icon:n.prevIcon,variant:"text",onClick:l},null),m(wn,{"data-testid":"next-month",disabled:o.value,icon:n.nextIcon,density:"comfortable",variant:"text",onClick:s},null)])])),{}}}),_v=T({appendIcon:un,color:String,header:String,transition:String,onClick:qn()},"VDatePickerHeader"),dr=L()({name:"VDatePickerHeader",props:_v(),emits:{click:()=>!0,"click:append":()=>!0},setup(n,e){let{emit:t,slots:a}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.color);function o(){t("click")}function l(){t("click:append")}return N(()=>{const s=!!(a.default||n.header),u=!!(a.append||n.appendIcon);return m("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!n.onClick},i.value],style:r.value,onClick:o},[a.prepend&&m("div",{key:"prepend",class:"v-date-picker-header__prepend"},[a.prepend()]),s&&m(at,{key:"content",name:n.transition},{default:()=>{var d;return[m("div",{key:n.header,class:"v-date-picker-header__content"},[((d=a.default)==null?void 0:d.call(a))??n.header])]}}),u&&m("div",{class:"v-date-picker-header__append"},[a.append?m(vn,{key:"append-defaults",disabled:!n.appendIcon,defaults:{VBtn:{icon:n.appendIcon,variant:"text"}}},{default:()=>{var d;return[(d=a.append)==null?void 0:d.call(a)]}}):m(wn,{key:"append-btn",icon:n.appendIcon,variant:"text",onClick:l},null)])])}),{}}}),Tv=T({allowedDates:[Array,Function],disabled:{type:Boolean,default:null},displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]},weeksInMonth:{type:String,default:"dynamic"},firstDayOfWeek:{type:[Number,String],default:void 0}},"calendar");function Mv(n){const e=Sa(),t=sn(n,"modelValue",[],c=>_n(c).map(g=>e.date(g))),a=y(()=>n.displayValue?e.date(n.displayValue):t.value.length>0?e.date(t.value[0]):n.min?e.date(n.min):Array.isArray(n.allowedDates)?e.date(n.allowedDates[0]):e.date()),i=sn(n,"year",void 0,c=>{const g=c!=null?Number(c):e.getYear(a.value);return e.startOfYear(e.setYear(e.date(),g))},c=>e.getYear(c)),r=sn(n,"month",void 0,c=>{const g=c!=null?Number(c):e.getMonth(a.value),h=e.setYear(e.startOfMonth(e.date()),e.getYear(i.value));return e.setMonth(h,g)},c=>e.getMonth(c)),o=y(()=>{const c=e.toJsDate(e.startOfWeek(e.date(),n.firstDayOfWeek)).getDay();return[0,1,2,3,4,5,6].map(g=>(g+c)%7)}),l=y(()=>{const c=e.getWeekArray(r.value,n.firstDayOfWeek),g=c.flat(),h=6*7;if(n.weeksInMonth==="static"&&g.length<h){const x=g[g.length-1];let v=[];for(let b=1;b<=h-g.length;b++)v.push(e.addDays(x,b)),b%7===0&&(c.push(v),v=[])}return c});function s(c,g){return c.filter(h=>o.value.includes(e.toJsDate(h).getDay())).map((h,x)=>{const v=e.toISO(h),b=!e.isSameMonth(h,r.value),k=e.isSameDay(h,e.startOfMonth(r.value)),C=e.isSameDay(h,e.endOfMonth(r.value)),S=e.isSameDay(h,r.value);return{date:h,formatted:e.format(h,"keyboardDate"),isAdjacent:b,isDisabled:f(h),isEnd:C,isHidden:b&&!n.showAdjacentMonths,isSame:S,isSelected:t.value.some(E=>e.isSameDay(h,E)),isStart:k,isToday:e.isSameDay(h,g),isWeekEnd:x%7===6,isWeekStart:x%7===0,isoDate:v,localized:e.format(h,"dayOfMonth"),month:e.getMonth(h),year:e.getYear(h)}})}const u=y(()=>{const c=e.startOfWeek(a.value,n.firstDayOfWeek),g=[];for(let x=0;x<=6;x++)g.push(e.addDays(c,x));const h=e.date();return s(g,h)}),d=y(()=>{const c=l.value.flat(),g=e.date();return s(c,g)}),p=y(()=>l.value.map(c=>c.length?e.getWeek(c[0],n.firstDayOfWeek):null));function f(c){if(n.disabled)return!0;const g=e.date(c);return n.min&&e.isAfter(e.date(n.min),g)||n.max&&e.isAfter(g,e.date(n.max))?!0:Array.isArray(n.allowedDates)&&n.allowedDates.length>0?!n.allowedDates.some(h=>e.isSameDay(e.date(h),g)):typeof n.allowedDates=="function"?!n.allowedDates(g):!n.weekdays.includes(e.toJsDate(g).getDay())}return{displayValue:a,daysInMonth:d,daysInWeek:u,genDays:s,model:t,weeksInMonth:l,weekDays:o,weekNumbers:p}}const gd=T({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,transition:{type:String,default:"picker-transition"},reverseTransition:{type:String,default:"picker-reverse-transition"},...Rn(Tv(),["displayValue"])},"VDatePickerMonth"),ur=L()({name:"VDatePickerMonth",props:gd(),emits:{"update:modelValue":n=>!0,"update:month":n=>!0,"update:year":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=U(),{daysInMonth:r,model:o,weekNumbers:l}=Mv(n),s=Sa(),u=X(),d=X(),p=X(!1),f=B(()=>p.value?n.reverseTransition:n.transition);n.multiple==="range"&&o.value.length>0&&(u.value=o.value[0],o.value.length>1&&(d.value=o.value[o.value.length-1]));const c=y(()=>{const v=["number","string"].includes(typeof n.multiple)?Number(n.multiple):1/0;return o.value.length>=v});tn(r,(v,b)=>{b&&(p.value=s.isBefore(v[0].date,b[0].date))});function g(v){const b=s.startOfDay(v);if(o.value.length===0?u.value=void 0:o.value.length===1&&(u.value=o.value[0],d.value=void 0),!u.value)u.value=b,o.value=[u.value];else if(d.value)u.value=v,d.value=void 0,o.value=[u.value];else{if(s.isSameDay(b,u.value)){u.value=void 0,o.value=[];return}else s.isBefore(b,u.value)?(d.value=s.endOfDay(u.value),u.value=b):d.value=s.endOfDay(b);const k=s.getDiff(d.value,u.value,"days"),C=[u.value];for(let S=1;S<k;S++){const E=s.addDays(u.value,S);C.push(E)}C.push(d.value),o.value=C}}function h(v){const b=o.value.findIndex(k=>s.isSameDay(k,v));if(b===-1)o.value=[...o.value,v];else{const k=[...o.value];k.splice(b,1),o.value=k}}function x(v){n.multiple==="range"?g(v):n.multiple?h(v):o.value=[v]}N(()=>m("div",{class:"v-date-picker-month"},[n.showWeek&&m("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!n.hideWeekdays&&m("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[bn(" ")]),l.value.map(v=>m("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[v]))]),m(at,{name:f.value},{default:()=>{var v;return[m("div",{ref:i,key:(v=r.value[0].date)==null?void 0:v.toString(),class:"v-date-picker-month__days"},[!n.hideWeekdays&&s.getWeekdays(n.firstDayOfWeek).map(b=>m("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[b])),r.value.map((b,k)=>{var S;const C={props:{class:"v-date-picker-month__day-btn",color:b.isSelected||b.isToday?n.color:void 0,disabled:b.isDisabled,icon:!0,ripple:!1,text:b.localized,variant:b.isSelected?"flat":b.isToday?"outlined":"text",onClick:()=>x(b.date)},item:b,i:k};return c.value&&!b.isSelected&&(b.isDisabled=!0),m("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":b.isAdjacent,"v-date-picker-month__day--hide-adjacent":b.isHidden,"v-date-picker-month__day--selected":b.isSelected,"v-date-picker-month__day--week-end":b.isWeekEnd,"v-date-picker-month__day--week-start":b.isWeekStart}],"data-v-date":b.isDisabled?void 0:b.isoDate},[(n.showAdjacentMonths||!b.isAdjacent)&&(((S=a.day)==null?void 0:S.call(a,C))??m(wn,C.props,null))])})])]}})]))}}),fd=T({color:String,height:[String,Number],min:null,max:null,modelValue:Number,year:Number},"VDatePickerMonths"),pr=L()({name:"VDatePickerMonths",props:fd(),emits:{"update:modelValue":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=Sa(),r=sn(n,"modelValue"),o=y(()=>{let l=i.startOfYear(i.date());return n.year&&(l=i.setYear(l,n.year)),Pt(12).map(s=>{const u=i.format(l,"monthShort"),d=!!(n.min&&i.isAfter(i.startOfMonth(i.date(n.min)),l)||n.max&&i.isAfter(l,i.startOfMonth(i.date(n.max))));return l=i.getNextMonth(l),{isDisabled:d,text:u,value:s}})});return Mn(()=>{r.value=r.value??i.getMonth(i.date())}),N(()=>m("div",{class:"v-date-picker-months",style:{height:an(n.height)}},[m("div",{class:"v-date-picker-months__content"},[o.value.map((l,s)=>{var p;const u={active:r.value===s,color:r.value===s?n.color:void 0,disabled:l.isDisabled,rounded:!0,text:l.text,variant:r.value===l.value?"flat":"text",onClick:()=>d(s)};function d(f){if(r.value===f){t("update:modelValue",r.value);return}r.value=f}return((p=a.month)==null?void 0:p.call(a,{month:l,i:s,props:u}))??m(wn,z({key:"month"},u),null)})])])),{}}}),xd=T({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),cr=L()({name:"VDatePickerYears",props:xd(),emits:{"update:modelValue":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=Sa(),r=sn(n,"modelValue"),o=y(()=>{const s=i.getYear(i.date());let u=s-100,d=s+52;n.min&&(u=i.getYear(i.date(n.min))),n.max&&(d=i.getYear(i.date(n.max)));let p=i.startOfYear(i.date());return p=i.setYear(p,u),Pt(d-u+1,u).map(f=>{const c=i.format(p,"year");return p=i.setYear(p,i.getYear(p)+1),{text:c,value:f}})});Mn(()=>{r.value=r.value??i.getYear(i.date())});const l=Ra();return it(async()=>{var s;await Fn(),(s=l.el)==null||s.scrollIntoView({block:"center"})}),N(()=>m("div",{class:"v-date-picker-years",style:{height:an(n.height)}},[m("div",{class:"v-date-picker-years__content"},[o.value.map((s,u)=>{var p;const d={ref:r.value===s.value?l:void 0,active:r.value===s.value,color:r.value===s.value?n.color:void 0,rounded:!0,text:s.text,variant:r.value===s.value?"flat":"text",onClick:()=>{if(r.value===s.value){t("update:modelValue",r.value);return}r.value=s.value}};return((p=a.year)==null?void 0:p.call(a,{year:s,i:u,props:d}))??m(wn,z({key:"month"},d),null)})])])),{}}}),Rv=T({header:{type:String,default:"$vuetify.datePicker.header"},headerColor:String,...cd(),...gd({weeksInMonth:"static"}),...Rn(fd(),["modelValue"]),...Rn(xd(),["modelValue"]),...no({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),$v=L()({name:"VDatePicker",props:Rv(),emits:{"update:modelValue":n=>!0,"update:month":n=>!0,"update:year":n=>!0,"update:viewMode":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const i=Sa(),{t:r}=On(),{rtlClasses:o}=Hn(),l=sn(n,"modelValue",void 0,V=>_n(V).map(P=>i.date(P)),V=>n.multiple?V:V[0]),s=sn(n,"viewMode"),u=y(()=>{const V=i.date(n.min);return n.min&&i.isValid(V)?V:null}),d=y(()=>{const V=i.date(n.max);return n.max&&i.isValid(V)?V:null}),p=y(()=>{var I;const V=i.date();let P=V;return(I=l.value)!=null&&I[0]?P=i.date(l.value[0]):u.value&&i.isBefore(V,u.value)?P=u.value:d.value&&i.isAfter(V,d.value)&&(P=d.value),P&&i.isValid(P)?P:V}),f=B(()=>n.headerColor??n.color),c=U(Number(n.month??i.getMonth(i.startOfMonth(p.value)))),g=U(Number(n.year??i.getYear(i.startOfYear(i.setMonth(p.value,c.value))))),h=X(!1),x=y(()=>n.multiple&&l.value.length>1?r("$vuetify.datePicker.itemsSelected",l.value.length):l.value[0]&&i.isValid(l.value[0])?i.format(i.date(l.value[0]),"normalDateWithWeekday"):r(n.header)),v=y(()=>{let V=i.date();return V=i.setDate(V,1),V=i.setMonth(V,c.value),V=i.setYear(V,g.value),i.format(V,"monthAndYear")}),b=B(()=>`date-picker-header${h.value?"-reverse":""}-transition`),k=y(()=>{if(n.disabled)return!0;const V=[];if(s.value!=="month")V.push("prev","next");else{let P=i.date();if(P=i.startOfMonth(P),P=i.setMonth(P,c.value),P=i.setYear(P,g.value),u.value){const I=i.addDays(i.startOfMonth(P),-1);i.isAfter(u.value,I)&&V.push("prev")}if(d.value){const I=i.addDays(i.endOfMonth(P),1);i.isAfter(I,d.value)&&V.push("next")}}return V});function C(){c.value<11?c.value++:(g.value++,c.value=0,_(g.value)),F(c.value)}function S(){c.value>0?c.value--:(g.value--,c.value=11,_(g.value)),F(c.value)}function E(){s.value="month"}function A(){s.value=s.value==="months"?"month":"months"}function w(){s.value=s.value==="year"?"month":"year"}function F(V){s.value==="months"&&A(),t("update:month",V)}function _(V){s.value==="year"&&w(),t("update:year",V)}return tn(l,(V,P)=>{const I=_n(P),M=_n(V);if(!M.length)return;const j=i.date(I[I.length-1]),W=i.date(M[M.length-1]),nn=i.getMonth(W),Q=i.getYear(W);nn!==c.value&&(c.value=nn,F(c.value)),Q!==g.value&&(g.value=Q,_(g.value)),h.value=i.isBefore(j,W)}),N(()=>{const V=Na.filterProps(n),P=sr.filterProps(n),I=dr.filterProps(n),M=ur.filterProps(n),j=Rn(pr.filterProps(n),["modelValue"]),W=Rn(cr.filterProps(n),["modelValue"]),nn={color:f.value,header:x.value,transition:b.value};return m(Na,z(V,{color:f.value,class:["v-date-picker",`v-date-picker--${s.value}`,{"v-date-picker--show-week":n.showWeek},o.value,n.class],style:n.style}),{title:()=>{var Q;return((Q=a.title)==null?void 0:Q.call(a))??m("div",{class:"v-date-picker__title"},[r(n.title)])},header:()=>a.header?m(vn,{defaults:{VDatePickerHeader:{...nn}}},{default:()=>{var Q;return[(Q=a.header)==null?void 0:Q.call(a,nn)]}}):m(dr,z({key:"header"},I,nn,{onClick:s.value!=="month"?E:void 0}),{...a,default:void 0}),default:()=>m(dn,null,[m(sr,z(P,{disabled:k.value,text:v.value,"onClick:next":C,"onClick:prev":S,"onClick:month":A,"onClick:year":w}),null),m(Qe,{hideOnLeave:!0},{default:()=>[s.value==="months"?m(pr,z({key:"date-picker-months"},j,{modelValue:c.value,"onUpdate:modelValue":[Q=>c.value=Q,F],min:u.value,max:d.value,year:g.value}),null):s.value==="year"?m(cr,z({key:"date-picker-years"},W,{modelValue:g.value,"onUpdate:modelValue":[Q=>g.value=Q,_],min:u.value,max:d.value}),null):m(ur,z({key:"date-picker-month"},M,{modelValue:l.value,"onUpdate:modelValue":Q=>l.value=Q,month:c.value,"onUpdate:month":[Q=>c.value=Q,F],year:g.value,"onUpdate:year":[Q=>g.value=Q,_],min:u.value,max:d.value}),null)]})]),actions:a.actions})}),{}}}),Ov=T({actionText:String,bgColor:String,color:String,icon:un,image:String,justify:{type:String,default:"center"},headline:String,title:String,text:String,textWidth:{type:[Number,String],default:500},href:String,to:String,...rn(),...Wn(),...Dt({size:void 0}),...kn()},"VEmptyState"),Lv=L()({name:"VEmptyState",props:Ov(),emits:{"click:action":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const{themeClasses:i}=Pn(n),{backgroundColorClasses:r,backgroundColorStyles:o}=En(()=>n.bgColor),{dimensionStyles:l}=Yn(n),{displayClasses:s}=wt();function u(d){t("click:action",d)}return N(()=>{var x,v,b;const d=!!(a.actions||n.actionText),p=!!(a.headline||n.headline),f=!!(a.title||n.title),c=!!(a.text||n.text),g=!!(a.media||n.image||n.icon),h=n.size||(n.image?200:96);return m("div",{class:["v-empty-state",{[`v-empty-state--${n.justify}`]:!0},i.value,r.value,s.value,n.class],style:[o.value,l.value,n.style]},[g&&m("div",{key:"media",class:"v-empty-state__media"},[a.media?m(vn,{key:"media-defaults",defaults:{VImg:{src:n.image,height:h},VIcon:{size:h,icon:n.icon}}},{default:()=>[a.media()]}):m(dn,null,[n.image?m(Ot,{key:"image",src:n.image,height:h},null):n.icon?m(Vn,{key:"icon",color:n.color,size:h,icon:n.icon},null):void 0])]),p&&m("div",{key:"headline",class:"v-empty-state__headline"},[((x=a.headline)==null?void 0:x.call(a))??n.headline]),f&&m("div",{key:"title",class:"v-empty-state__title"},[((v=a.title)==null?void 0:v.call(a))??n.title]),c&&m("div",{key:"text",class:"v-empty-state__text",style:{maxWidth:an(n.textWidth)}},[((b=a.text)==null?void 0:b.call(a))??n.text]),a.default&&m("div",{key:"content",class:"v-empty-state__content"},[a.default()]),d&&m("div",{key:"actions",class:"v-empty-state__actions"},[m(vn,{defaults:{VBtn:{class:"v-empty-state__action-btn",color:n.color??"surface-variant",href:n.href,text:n.actionText,to:n.to}}},{default:()=>{var k;return[((k=a.actions)==null?void 0:k.call(a,{props:{onClick:u}}))??m(wn,{onClick:u},null)]}})])])}),{}}}),la=Symbol.for("vuetify:v-expansion-panel"),vd=T({...rn(),...Gr()},"VExpansionPanelText"),gr=L()({name:"VExpansionPanelText",props:vd(),setup(n,e){let{slots:t}=e;const a=Sn(la);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:r}=Ur(n,a.isSelected);return N(()=>m(Ka,{onAfterLeave:r},{default:()=>{var o;return[Tn(m("div",{class:["v-expansion-panel-text",n.class],style:n.style},[t.default&&i.value&&m("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[Ft,a.isSelected.value]])]}})),{}}}),bd=T({color:String,expandIcon:{type:un,default:"$expand"},collapseIcon:{type:un,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...rn(),...Wn()},"VExpansionPanelTitle"),fr=L()({name:"VExpansionPanelTitle",directives:{Ripple:Ht},props:bd(),setup(n,e){let{slots:t}=e;const a=Sn(la);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.color),{dimensionStyles:o}=Yn(n),l=y(()=>({collapseIcon:n.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:n.expandIcon,readonly:n.readonly})),s=B(()=>a.isSelected.value?n.collapseIcon:n.expandIcon);return N(()=>{var u;return Tn(m("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":n.focusable,"v-expansion-panel-title--static":n.static},i.value,n.class],style:[r.value,o.value,n.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:n.readonly?void 0:a.toggle},[m("span",{class:"v-expansion-panel-title__overlay"},null),(u=t.default)==null?void 0:u.call(t,l.value),!n.hideActions&&m(vn,{defaults:{VIcon:{icon:s.value}}},{default:()=>{var d;return[m("span",{class:"v-expansion-panel-title__icon"},[((d=t.actions)==null?void 0:d.call(t,l.value))??m(Vn,null,null)])]}})]),[[ft("ripple"),n.ripple]])}),{}}}),hd=T({title:String,text:String,bgColor:String,...Gn(),...he(),...Bn(),...xn(),...bd(),...vd()},"VExpansionPanel"),zv=L()({name:"VExpansionPanel",props:hd(),emits:{"group:selected":n=>!0},setup(n,e){let{slots:t}=e;const a=ye(n,la),{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.bgColor),{elevationClasses:o}=Zn(n),{roundedClasses:l}=Ln(n),s=B(()=>(a==null?void 0:a.disabled.value)||n.disabled),u=y(()=>a.group.items.value.reduce((f,c,g)=>(a.group.selected.value.includes(c.id)&&f.push(g),f),[])),d=y(()=>{const f=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&u.value.some(c=>c-f===1)}),p=y(()=>{const f=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&u.value.some(c=>c-f===-1)});return An(la,a),N(()=>{const f=!!(t.text||n.text),c=!!(t.title||n.title),g=fr.filterProps(n),h=gr.filterProps(n);return m(n.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":p.value,"v-expansion-panel--disabled":s.value},l.value,i.value,n.class],style:[r.value,n.style]},{default:()=>[m("div",{class:["v-expansion-panel__shadow",...o.value]},null),m(vn,{defaults:{VExpansionPanelTitle:{...g},VExpansionPanelText:{...h}}},{default:()=>{var x;return[c&&m(fr,{key:"title"},{default:()=>[t.title?t.title():n.title]}),f&&m(gr,{key:"text"},{default:()=>[t.text?t.text():n.text]}),(x=t.default)==null?void 0:x.call(t)]}})]})}),{groupItem:a}}}),Nv=["default","accordion","inset","popout"],jv=T({flat:Boolean,...be(),...Zt(hd(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...kn(),...rn(),...xn(),variant:{type:String,default:"default",validator:n=>Nv.includes(n)}},"VExpansionPanels"),Hv=L()({name:"VExpansionPanels",props:jv(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{next:a,prev:i}=ne(n,la),{themeClasses:r}=Pn(n),o=B(()=>n.variant&&`v-expansion-panels--variant-${n.variant}`);return $n({VExpansionPanel:{bgColor:B(()=>n.bgColor),collapseIcon:B(()=>n.collapseIcon),color:B(()=>n.color),eager:B(()=>n.eager),elevation:B(()=>n.elevation),expandIcon:B(()=>n.expandIcon),focusable:B(()=>n.focusable),hideActions:B(()=>n.hideActions),readonly:B(()=>n.readonly),ripple:B(()=>n.ripple),rounded:B(()=>n.rounded),static:B(()=>n.static)}}),N(()=>m(n.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":n.flat,"v-expansion-panels--tile":n.tile},r.value,o.value,n.class],style:n.style},{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t,{prev:i,next:a})]}})),{next:a,prev:i}}}),Wv=T({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,offset:Boolean,modelValue:{type:Boolean,default:!0},...Rn(Qa({active:!0}),["location"]),...ge(),...jt(),...Ct({transition:"fab-transition"})},"VFab"),Yv=L()({name:"VFab",props:Wv(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),i=X(56),r=U(),{resizeRef:o}=St(p=>{p.length&&(i.value=p[0].target.clientHeight)}),l=B(()=>n.app||n.absolute),s=y(()=>{var p;return l.value?((p=n.location)==null?void 0:p.split(" ").shift())??"bottom":!1}),u=y(()=>{var p;return l.value?((p=n.location)==null?void 0:p.split(" ")[1])??"end":!1});mt(()=>n.app,()=>{const p=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:s,layoutSize:y(()=>n.layout?i.value+24:0),elementSize:y(()=>i.value+24),active:y(()=>n.app&&a.value),absolute:B(()=>n.absolute)});Mn(()=>{r.value=p.layoutItemStyles.value})});const d=U();return N(()=>{const p=wn.filterProps(n);return m("div",{ref:d,class:["v-fab",{"v-fab--absolute":n.absolute,"v-fab--app":!!n.app,"v-fab--extended":n.extended,"v-fab--offset":n.offset,[`v-fab--${s.value}`]:l.value,[`v-fab--${u.value}`]:l.value},n.class],style:[n.app?{...r.value}:{height:n.absolute?"100%":"inherit"},n.style]},[m("div",{class:"v-fab__container"},[m(at,{appear:n.appear,transition:n.transition},{default:()=>[Tn(m(wn,z({ref:o},p,{active:void 0,location:void 0}),t),[[Ft,n.active]])]})])])}),{}}}),Gv=T({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:n=>typeof n=="boolean"||[1e3,1024].includes(Number(n))},...Wt({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:n=>n.multiple?[]:null,validator:n=>_n(n).every(e=>e!=null&&typeof e=="object")},...ba({clearable:!0})},"VFileInput"),Uv=L()({name:"VFileInput",inheritAttrs:!1,props:Gv(),emits:{"click:control":n=>!0,"mousedown:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{t:r}=On(),o=sn(n,"modelValue",n.modelValue,I=>_n(I),I=>!n.multiple&&Array.isArray(I)?I[0]:I),{isFocused:l,focus:s,blur:u}=_t(n),d=y(()=>typeof n.showSize!="boolean"?n.showSize:void 0),p=y(()=>(o.value??[]).reduce((I,M)=>{let{size:j=0}=M;return I+j},0)),f=y(()=>Po(p.value,d.value)),c=y(()=>(o.value??[]).map(I=>{const{name:M="",size:j=0}=I;return n.showSize?`${M} (${Po(j,d.value)})`:M})),g=y(()=>{var M;const I=((M=o.value)==null?void 0:M.length)??0;return n.showSize?r(n.counterSizeString,I,f.value):r(n.counterString,I)}),h=U(),x=U(),v=U(),b=B(()=>l.value||n.active),k=y(()=>["plain","underlined"].includes(n.variant)),C=X(!1);function S(){var I;v.value!==document.activeElement&&((I=v.value)==null||I.focus()),l.value||s()}function E(I){var M;(M=v.value)==null||M.click()}function A(I){a("mousedown:control",I)}function w(I){var M;(M=v.value)==null||M.click(),a("click:control",I)}function F(I){I.stopPropagation(),S(),Fn(()=>{o.value=[],Ya(n["onClick:clear"],I)})}function _(I){I.preventDefault(),I.stopImmediatePropagation(),C.value=!0}function V(I){I.preventDefault(),C.value=!1}function P(I){var j,W;if(I.preventDefault(),I.stopImmediatePropagation(),C.value=!1,!((W=(j=I.dataTransfer)==null?void 0:j.files)!=null&&W.length)||!v.value)return;const M=new DataTransfer;for(const nn of I.dataTransfer.files)M.items.add(nn);v.value.files=M.files,v.value.dispatchEvent(new Event("change",{bubbles:!0}))}return tn(o,I=>{(!Array.isArray(I)||!I.length)&&v.value&&(v.value.value="")}),N(()=>{const I=!!(i.counter||n.counter),M=!!(I||i.details),[j,W]=Jt(t),{modelValue:nn,...Q}=nt.filterProps(n),G=qt.filterProps(n);return m(nt,z({ref:h,modelValue:n.multiple?o.value:o.value[0],class:["v-file-input",{"v-file-input--chips":!!n.chips,"v-file-input--dragging":C.value,"v-file-input--hide":n.hideInput,"v-input--plain-underlined":k.value},n.class],style:n.style,"onClick:prepend":E},j,Q,{centerAffix:!k.value,focused:l.value}),{...i,default:R=>{let{id:D,isDisabled:$,isDirty:K,isReadonly:J,isValid:ln}=R;return m(qt,z({ref:x,"prepend-icon":n.prependIcon,onMousedown:A,onClick:w,"onClick:clear":F,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"]},G,{id:D.value,active:b.value||K.value,dirty:K.value||n.dirty,disabled:$.value,focused:l.value,error:ln.value===!1,onDragover:_,onDrop:P}),{...i,default:Z=>{var fn;let{props:{class:q,...mn}}=Z;return m(dn,null,[m("input",z({ref:v,type:"file",readonly:J.value,disabled:$.value,multiple:n.multiple,name:n.name,onClick:Y=>{Y.stopPropagation(),J.value&&Y.preventDefault(),S()},onChange:Y=>{if(!Y.target)return;const on=Y.target;o.value=[...on.files??[]]},onDragleave:V,onFocus:S,onBlur:u},mn,W),null),m("div",{class:q},[!!((fn=o.value)!=null&&fn.length)&&!n.hideInput&&(i.selection?i.selection({fileNames:c.value,totalBytes:p.value,totalBytesReadable:f.value}):n.chips?c.value.map(Y=>m(He,{key:Y,size:"small",text:Y},null)):c.value.join(", "))])])}})},details:M?R=>{var D,$;return m(dn,null,[(D=i.details)==null?void 0:D.call(i,R),I&&m(dn,null,[m("span",null,null),m(ai,{active:!!(($=o.value)!=null&&$.length),value:g.value,disabled:n.disabled},i.counter)])])}:void 0})}),ht({},h,x,v)}}),Kv=T({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ut(),...rn(),...Gn(),...ge(),...Bn(),...xn({tag:"footer"}),...kn()},"VFooter"),qv=L()({name:"VFooter",props:Kv(),setup(n,e){let{slots:t}=e;const a=U(),{themeClasses:i}=Pn(n),{backgroundColorClasses:r,backgroundColorStyles:o}=En(()=>n.color),{borderClasses:l}=bt(n),{elevationClasses:s}=Zn(n),{roundedClasses:u}=Ln(n),d=X(32),{resizeRef:p}=St(c=>{c.length&&(d.value=c[0].target.clientHeight)}),f=y(()=>n.height==="auto"?d.value:parseInt(n.height,10));return mt(()=>n.app,()=>{const c=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:B(()=>"bottom"),layoutSize:f,elementSize:y(()=>n.height==="auto"?void 0:f.value),active:B(()=>n.app),absolute:B(()=>n.absolute)});Mn(()=>{a.value=c.layoutItemStyles.value})}),N(()=>m(n.tag,{ref:p,class:["v-footer",i.value,r.value,l.value,s.value,u.value,n.class],style:[o.value,n.app?a.value:{height:an(n.height)},n.style]},t)),{}}}),Xv=T({...rn(),...vc()},"VForm"),xr=L()({name:"VForm",props:Xv(),emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=bc(n),r=U();function o(s){s.preventDefault(),i.reset()}function l(s){const u=s,d=i.validate();u.then=d.then.bind(d),u.catch=d.catch.bind(d),u.finally=d.finally.bind(d),a("submit",u),u.defaultPrevented||d.then(p=>{var c;let{valid:f}=p;f&&((c=r.value)==null||c.submit())}),u.preventDefault()}return N(()=>{var s;return m("form",{ref:r,class:["v-form",n.class],style:n.style,novalidate:!0,onReset:o,onSubmit:l},[(s=t.default)==null?void 0:s.call(t,i)])}),ht(i,r)}}),Zv=T({disabled:Boolean,modelValue:{type:Boolean,default:null},...Wr()},"VHover"),Jv=L()({name:"VHover",props:Zv(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),{runOpenDelay:i,runCloseDelay:r}=Yr(n,o=>!n.disabled&&(a.value=o));return()=>{var o;return(o=t.default)==null?void 0:o.call(t,{isHovering:a.value,props:{onMouseenter:i,onMouseleave:r}})}}}),Qv=T({color:String,direction:{type:String,default:"vertical",validator:n=>["vertical","horizontal"].includes(n)},side:{type:String,default:"end",validator:n=>["start","end","both"].includes(n)},mode:{type:String,default:"intersect",validator:n=>["intersect","manual"].includes(n)},margin:[Number,String],loadMoreText:{type:String,default:"$vuetify.infiniteScroll.loadMore"},emptyText:{type:String,default:"$vuetify.infiniteScroll.empty"},...Wn(),...xn()},"VInfiniteScroll"),cl=xt({name:"VInfiniteScrollIntersect",props:{side:{type:String,required:!0},rootMargin:String},emits:{intersect:(n,e)=>!0},setup(n,e){let{emit:t}=e;const{intersectionRef:a,isIntersecting:i}=Xa();return tn(i,async r=>{t("intersect",n.side,r)}),N(()=>m("div",{class:"v-infinite-scroll-intersect",style:{"--v-infinite-margin-size":n.rootMargin},ref:a},[bn(" ")])),{}}}),nb=L()({name:"VInfiniteScroll",props:Qv(),emits:{load:n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=U(),r=X("ok"),o=X("ok"),l=y(()=>an(n.margin)),s=X(!1);function u(S){if(!i.value)return;const E=n.direction==="vertical"?"scrollTop":"scrollLeft";i.value[E]=S}function d(){if(!i.value)return 0;const S=n.direction==="vertical"?"scrollTop":"scrollLeft";return i.value[S]}function p(){if(!i.value)return 0;const S=n.direction==="vertical"?"scrollHeight":"scrollWidth";return i.value[S]}function f(){if(!i.value)return 0;const S=n.direction==="vertical"?"clientHeight":"clientWidth";return i.value[S]}it(()=>{i.value&&(n.side==="start"?u(p()):n.side==="both"&&u(p()/2-f()/2))});function c(S,E){S==="start"?r.value=E:S==="end"&&(o.value=E)}function g(S){return S==="start"?r.value:o.value}let h=0;function x(S,E){s.value=E,s.value&&v(S)}function v(S){if(n.mode!=="manual"&&!s.value)return;const E=g(S);if(!i.value||["empty","loading"].includes(E))return;h=p(),c(S,"loading");function A(w){c(S,w),Fn(()=>{w==="empty"||w==="error"||(w==="ok"&&S==="start"&&u(p()-h+d()),n.mode!=="manual"&&Fn(()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{v(S)})})})}))})}a("load",{side:S,done:A})}const{t:b}=On();function k(S,E){var F,_,V,P,I;if(n.side!==S&&n.side!=="both")return;const A=()=>v(S),w={side:S,props:{onClick:A,color:n.color}};return E==="error"?(F=t.error)==null?void 0:F.call(t,w):E==="empty"?((_=t.empty)==null?void 0:_.call(t,w))??m("div",null,[b(n.emptyText)]):n.mode==="manual"?E==="loading"?((V=t.loading)==null?void 0:V.call(t,w))??m(Me,{indeterminate:!0,color:n.color},null):((P=t["load-more"])==null?void 0:P.call(t,w))??m(wn,{variant:"outlined",color:n.color,onClick:A},{default:()=>[b(n.loadMoreText)]}):((I=t.loading)==null?void 0:I.call(t,w))??m(Me,{indeterminate:!0,color:n.color},null)}const{dimensionStyles:C}=Yn(n);N(()=>{const S=n.tag,E=n.side==="start"||n.side==="both",A=n.side==="end"||n.side==="both",w=n.mode==="intersect";return m(S,{ref:i,class:["v-infinite-scroll",`v-infinite-scroll--${n.direction}`,{"v-infinite-scroll--start":E,"v-infinite-scroll--end":A}],style:C.value},{default:()=>{var F;return[m("div",{class:"v-infinite-scroll__side"},[k("start",r.value)]),E&&w&&m(cl,{key:"start",side:"start",onIntersect:x,rootMargin:l.value},null),(F=t.default)==null?void 0:F.call(t),A&&w&&m(cl,{key:"end",side:"end",onIntersect:x,rootMargin:l.value},null),m("div",{class:"v-infinite-scroll__side"},[k("end",o.value)])]}})})}}),yd=Symbol.for("vuetify:v-item-group"),tb=T({...rn(),...be({selectedClass:"v-item--selected"}),...xn(),...kn()},"VItemGroup"),eb=L()({name:"VItemGroup",props:tb(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{isSelected:i,select:r,next:o,prev:l,selected:s}=ne(n,yd);return()=>m(n.tag,{class:["v-item-group",a.value,n.class],style:n.style},{default:()=>{var u;return[(u=t.default)==null?void 0:u.call(t,{isSelected:i,select:r,next:o,prev:l,selected:s.value})]}})}}),ab=L()({name:"VItem",props:he(),emits:{"group:selected":n=>!0},setup(n,e){let{slots:t}=e;const{isSelected:a,select:i,toggle:r,selectedClass:o,value:l,disabled:s}=ye(n,yd);return()=>{var u;return(u=t.default)==null?void 0:u.call(t,{isSelected:a.value,selectedClass:o.value,select:i,toggle:r,value:l.value,disabled:s.value})}}}),ib=Bt("v-kbd","kbd"),rb=T({...rn(),...Wn(),...Ql()},"VLayout"),ob=L()({name:"VLayout",props:rb(),setup(n,e){let{slots:t}=e;const{layoutClasses:a,layoutStyles:i,getLayoutItem:r,items:o,layoutRef:l}=tm(n),{dimensionStyles:s}=Yn(n);return N(()=>{var u;return m("div",{ref:l,class:[a.value,n.class],style:[s.value,i.value,n.style]},[(u=t.default)==null?void 0:u.call(t)])}),{getLayoutItem:r,items:o}}}),lb=T({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...rn(),...ge()},"VLayoutItem"),mb=L()({name:"VLayoutItem",props:lb(),setup(n,e){let{slots:t}=e;const{layoutItemStyles:a}=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:B(()=>n.position),elementSize:B(()=>n.size),layoutSize:B(()=>n.size),active:B(()=>n.modelValue),absolute:B(()=>n.absolute)});return()=>{var i;return m("div",{class:["v-layout-item",n.class],style:[a.value,n.style]},[(i=t.default)==null?void 0:i.call(t)])}}}),sb=T({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...rn(),...Wn(),...xn(),...Ct({transition:"fade-transition"})},"VLazy"),db=L()({name:"VLazy",directives:{intersect:da},props:sb(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{dimensionStyles:a}=Yn(n),i=sn(n,"modelValue");function r(o){i.value||(i.value=o)}return N(()=>Tn(m(n.tag,{class:["v-lazy",n.class],style:[a.value,n.style]},{default:()=>[i.value&&m(at,{transition:n.transition,appear:!0},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})]}),[[ft("intersect"),{handler:r,options:n.options},null]])),{}}}),ub=T({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...rn()},"VLocaleProvider"),pb=L()({name:"VLocaleProvider",props:ub(),setup(n,e){let{slots:t}=e;const{rtlClasses:a}=tp(n);return N(()=>{var i;return m("div",{class:["v-locale-provider",a.value,n.class],style:n.style},[(i=t.default)==null?void 0:i.call(t)])}),{}}}),cb=T({scrollable:Boolean,...rn(),...Wn(),...xn({tag:"main"})},"VMain"),gb=L()({name:"VMain",props:cb(),setup(n,e){let{slots:t}=e;const{dimensionStyles:a}=Yn(n),{mainStyles:i}=nm(),{ssrBootStyles:r}=xe();return N(()=>m(n.tag,{class:["v-main",{"v-main--scrollable":n.scrollable},n.class],style:[i.value,r.value,a.value,n.style]},{default:()=>{var o,l;return[n.scrollable?m("div",{class:"v-main__scroller"},[(o=t.default)==null?void 0:o.call(t)]):(l=t.default)==null?void 0:l.call(t)]}})),{}}});function fb(n){let{rootEl:e,isSticky:t,layoutItemStyles:a}=n;const i=X(!1),r=X(0),o=y(()=>{const u=typeof i.value=="boolean"?"top":i.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,i.value?{[u]:an(r.value)}:{top:a.value.top}]});it(()=>{tn(t,u=>{u?window.addEventListener("scroll",s,{passive:!0}):window.removeEventListener("scroll",s)},{immediate:!0})}),tt(()=>{window.removeEventListener("scroll",s)});let l=0;function s(){const u=l>window.scrollY?"up":"down",d=e.value.getBoundingClientRect(),p=parseFloat(a.value.top??0),f=window.scrollY-Math.max(0,r.value-p),c=d.height+Math.max(r.value,p)-window.scrollY-window.innerHeight,g=parseFloat(getComputedStyle(e.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-p?(i.value="top",r.value=p):u==="up"&&i.value==="bottom"||u==="down"&&i.value==="top"?(r.value=window.scrollY+d.top-g,i.value=!0):u==="down"&&c<=0?(r.value=0,i.value="bottom"):u==="up"&&f<=0&&(g?i.value!=="top"&&(r.value=-f+g+p,i.value="top"):(r.value=d.top+f,i.value="top")),l=window.scrollY}return{isStuck:i,stickyStyles:o}}const xb=100,vb=20;function gl(n){return(n<0?-1:1)*Math.sqrt(Math.abs(n))*1.41421356237}function fl(n){if(n.length<2)return 0;if(n.length===2)return n[1].t===n[0].t?0:(n[1].d-n[0].d)/(n[1].t-n[0].t);let e=0;for(let t=n.length-1;t>0;t--){if(n[t].t===n[t-1].t)continue;const a=gl(e),i=(n[t].d-n[t-1].d)/(n[t].t-n[t-1].t);e+=(i-a)*Math.abs(i),t===n.length-1&&(e*=.5)}return gl(e)*1e3}function bb(){const n={};function e(i){Array.from(i.changedTouches).forEach(r=>{(n[r.identifier]??(n[r.identifier]=new Ml(vb))).push([i.timeStamp,r])})}function t(i){Array.from(i.changedTouches).forEach(r=>{delete n[r.identifier]})}function a(i){var u;const r=(u=n[i])==null?void 0:u.values().reverse();if(!r)throw new Error(`No samples for touch id ${i}`);const o=r[0],l=[],s=[];for(const d of r){if(o[0]-d[0]>xb)break;l.push({t:d[0],d:d[1].clientX}),s.push({t:d[0],d:d[1].clientY})}return{x:fl(l),y:fl(s),get direction(){const{x:d,y:p}=this,[f,c]=[Math.abs(d),Math.abs(p)];return f>c&&d>=0?"right":f>c&&d<=0?"left":c>f&&p>=0?"down":c>f&&p<=0?"up":hb()}}}return{addMovement:e,endTouch:t,getVelocity:a}}function hb(){throw new Error}function yb(n){let{el:e,isActive:t,isTemporary:a,width:i,touchless:r,position:o}=n;it(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),tt(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",k),window.removeEventListener("touchend",C)});const l=y(()=>["left","right"].includes(o.value)),{addMovement:s,endTouch:u,getVelocity:d}=bb();let p=!1;const f=X(!1),c=X(0),g=X(0);let h;function x(E,A){return(o.value==="left"?E:o.value==="right"?document.documentElement.clientWidth-E:o.value==="top"?E:o.value==="bottom"?document.documentElement.clientHeight-E:Ve())-(A?i.value:0)}function v(E){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const w=o.value==="left"?(E-g.value)/i.value:o.value==="right"?(document.documentElement.clientWidth-E-g.value)/i.value:o.value==="top"?(E-g.value)/i.value:o.value==="bottom"?(document.documentElement.clientHeight-E-g.value)/i.value:Ve();return A?Math.max(0,Math.min(1,w)):w}function b(E){if(r.value)return;const A=E.changedTouches[0].clientX,w=E.changedTouches[0].clientY,F=25,_=o.value==="left"?A<F:o.value==="right"?A>document.documentElement.clientWidth-F:o.value==="top"?w<F:o.value==="bottom"?w>document.documentElement.clientHeight-F:Ve(),V=t.value&&(o.value==="left"?A<i.value:o.value==="right"?A>document.documentElement.clientWidth-i.value:o.value==="top"?w<i.value:o.value==="bottom"?w>document.documentElement.clientHeight-i.value:Ve());(_||V||t.value&&a.value)&&(h=[A,w],g.value=x(l.value?A:w,t.value),c.value=v(l.value?A:w),p=g.value>-20&&g.value<80,u(E),s(E))}function k(E){const A=E.changedTouches[0].clientX,w=E.changedTouches[0].clientY;if(p){if(!E.cancelable){p=!1;return}const _=Math.abs(A-h[0]),V=Math.abs(w-h[1]);(l.value?_>V&&_>3:V>_&&V>3)?(f.value=!0,p=!1):(l.value?V:_)>3&&(p=!1)}if(!f.value)return;E.preventDefault(),s(E);const F=v(l.value?A:w,!1);c.value=Math.max(0,Math.min(1,F)),F>1?g.value=x(l.value?A:w,!0):F<0&&(g.value=x(l.value?A:w,!1))}function C(E){if(p=!1,!f.value)return;s(E),f.value=!1;const A=d(E.changedTouches[0].identifier),w=Math.abs(A.x),F=Math.abs(A.y);(l.value?w>F&&w>400:F>w&&F>3)?t.value=A.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||Ve()):t.value=c.value>.5}const S=y(()=>f.value?{transform:o.value==="left"?`translateX(calc(-100% + ${c.value*i.value}px))`:o.value==="right"?`translateX(calc(100% - ${c.value*i.value}px))`:o.value==="top"?`translateY(calc(-100% + ${c.value*i.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${c.value*i.value}px))`:Ve(),transition:"none"}:void 0);return mt(f,()=>{var w,F;const E=((w=e.value)==null?void 0:w.style.transform)??null,A=((F=e.value)==null?void 0:F.style.transition)??null;Mn(()=>{var _,V,P,I;(V=e.value)==null||V.style.setProperty("transform",((_=S.value)==null?void 0:_.transform)||"none"),(I=e.value)==null||I.style.setProperty("transition",((P=S.value)==null?void 0:P.transition)||null)}),Xn(()=>{var _,V;(_=e.value)==null||_.style.setProperty("transform",E),(V=e.value)==null||V.style.setProperty("transition",A)})}),{isDragging:f,dragProgress:c,dragStyles:S}}function Ve(){throw new Error}const kb=["start","end","left","right","top","bottom"],wb=T({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:n=>kb.includes(n)},sticky:Boolean,...ut(),...rn(),...Wr(),...we({mobile:null}),...Gn(),...ge(),...Bn(),...xn({tag:"nav"}),...kn()},"VNavigationDrawer"),Sb=L()({name:"VNavigationDrawer",props:wb(),emits:{"update:modelValue":n=>!0,"update:rail":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{isRtl:r}=Hn(),{themeClasses:o}=Pn(n),{borderClasses:l}=bt(n),{backgroundColorClasses:s,backgroundColorStyles:u}=En(()=>n.color),{elevationClasses:d}=Zn(n),{displayClasses:p,mobile:f}=wt(n),{roundedClasses:c}=Ln(n),g=gm(),h=sn(n,"modelValue",null,R=>!!R),{ssrBootStyles:x}=xe(),{scopeId:v}=Se(),b=U(),k=X(!1),{runOpenDelay:C,runCloseDelay:S}=Yr(n,R=>{k.value=R}),E=y(()=>n.rail&&n.expandOnHover&&k.value?Number(n.width):Number(n.rail?n.railWidth:n.width)),A=y(()=>Ti(n.location,r.value)),w=B(()=>n.persistent),F=y(()=>!n.permanent&&(f.value||n.temporary)),_=y(()=>n.sticky&&!F.value&&A.value!=="bottom");mt(()=>n.expandOnHover&&n.rail!=null,()=>{tn(k,R=>a("update:rail",!R))}),mt(()=>!n.disableResizeWatcher,()=>{tn(F,R=>!n.permanent&&Fn(()=>h.value=!R))}),mt(()=>!n.disableRouteWatcher&&!!g,()=>{tn(g.currentRoute,()=>F.value&&(h.value=!1))}),tn(()=>n.permanent,R=>{R&&(h.value=!0)}),n.modelValue==null&&!F.value&&(h.value=n.permanent||!f.value);const{isDragging:V,dragProgress:P}=yb({el:b,isActive:h,isTemporary:F,width:E,touchless:B(()=>n.touchless),position:A}),I=y(()=>{const R=F.value?0:n.rail&&n.expandOnHover?Number(n.railWidth):E.value;return V.value?R*P.value:R}),{layoutItemStyles:M,layoutItemScrimStyles:j}=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:A,layoutSize:I,elementSize:E,active:Wa(h),disableTransitions:B(()=>V.value),absolute:y(()=>n.absolute||_.value&&typeof W.value!="string")}),{isStuck:W,stickyStyles:nn}=fb({rootEl:b,isSticky:_,layoutItemStyles:M}),Q=En(()=>typeof n.scrim=="string"?n.scrim:null),G=y(()=>({...V.value?{opacity:P.value*.2,transition:"none"}:void 0,...j.value}));return $n({VList:{bgColor:"transparent"}}),N(()=>{const R=i.image||n.image;return m(dn,null,[m(n.tag,z({ref:b,onMouseenter:C,onMouseleave:S,class:["v-navigation-drawer",`v-navigation-drawer--${A.value}`,{"v-navigation-drawer--expand-on-hover":n.expandOnHover,"v-navigation-drawer--floating":n.floating,"v-navigation-drawer--is-hovering":k.value,"v-navigation-drawer--rail":n.rail,"v-navigation-drawer--temporary":F.value,"v-navigation-drawer--persistent":w.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":_.value},o.value,s.value,l.value,p.value,d.value,c.value,n.class],style:[u.value,M.value,x.value,nn.value,n.style]},v,t),{default:()=>{var D,$,K;return[R&&m("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?m(vn,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:n.image}}},i.image):m(Ot,{key:"image-img",alt:"",cover:!0,height:"inherit",src:n.image},null)]),i.prepend&&m("div",{class:"v-navigation-drawer__prepend"},[(D=i.prepend)==null?void 0:D.call(i)]),m("div",{class:"v-navigation-drawer__content"},[($=i.default)==null?void 0:$.call(i)]),i.append&&m("div",{class:"v-navigation-drawer__append"},[(K=i.append)==null?void 0:K.call(i)])]}}),m(Ut,{name:"fade-transition"},{default:()=>[F.value&&(V.value||h.value)&&!!n.scrim&&m("div",z({class:["v-navigation-drawer__scrim",Q.backgroundColorClasses.value],style:[G.value,Q.backgroundColorStyles.value],onClick:()=>{w.value||(h.value=!1)}},v),null)]})])}),{isStuck:W}}}),Fb=xt({name:"VNoSsr",setup(n,e){let{slots:t}=e;const a=es();return()=>{var i;return a.value&&((i=t.default)==null?void 0:i.call(t))}}}),Cb=50,Vb=500;function Pb(n){let{toggleUpDown:e}=n,t=-1,a=-1;Xn(r);function i(l){r(),o(l),t=window.setTimeout(()=>{a=window.setInterval(()=>o(l),Cb)},Vb)}function r(){window.clearTimeout(t),window.clearInterval(a)}function o(l){e(l==="up")}return{holdStart:i,holdStop:r}}const Ib=T({controlVariant:{type:String,default:"default"},inset:Boolean,hideInput:Boolean,modelValue:{type:Number,default:null},min:{type:Number,default:Number.MIN_SAFE_INTEGER},max:{type:Number,default:Number.MAX_SAFE_INTEGER},step:{type:Number,default:1},precision:{type:Number,default:0},...Rn(ha(),["modelValue","validationValue"])},"VNumberInput"),Eb=L()({name:"VNumberInput",props:{...Ib()},emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=U(),{holdStart:i,holdStop:r}=Pb({toggleUpDown:F}),o=xa(n),l=y(()=>o.isDisabled.value||o.isReadonly.value),{isFocused:s,focus:u,blur:d}=_t(n);function p(D){let $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.precision;const K=$==null?String(D):D.toFixed($);return s.value?Number(K).toString():K}const f=sn(n,"modelValue",null,D=>D??null,D=>D==null?D??null:Dn(Number(D),n.min,n.max)),c=X(null);Mn(()=>{s.value&&!l.value||(f.value==null?c.value=null:isNaN(f.value)||(c.value=p(f.value)))});const g=y({get:()=>c.value,set(D){D===null||D===""?(f.value=null,c.value=null):!isNaN(Number(D))&&Number(D)<=n.max&&Number(D)>=n.min&&(f.value=Number(D),c.value=D)}}),h=y(()=>l.value?!1:(f.value??0)+n.step<=n.max),x=y(()=>l.value?!1:(f.value??0)-n.step>=n.min),v=y(()=>n.hideInput?"stacked":n.controlVariant),b=B(()=>v.value==="split"?"$plus":"$collapse"),k=B(()=>v.value==="split"?"$minus":"$expand"),C=B(()=>v.value==="split"?"default":"small"),S=B(()=>v.value==="stacked"?"auto":"100%"),E={props:{onClick:P,onPointerup:I,onPointerdown:M}},A={props:{onClick:P,onPointerup:I,onPointerdown:j}};tn(()=>n.precision,()=>nn()),it(()=>{W()});function w(D){if(D==null)return 0;const $=D.toString(),K=$.indexOf(".");return~K?$.length-K:0}function F(){let D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(l.value)return;if(f.value==null){g.value=p(Dn(0,n.min,n.max));return}let $=Math.max(w(f.value),w(n.step));n.precision!=null&&($=Math.max($,n.precision)),D?h.value&&(g.value=p(f.value+n.step,$)):x.value&&(g.value=p(f.value-n.step,$))}function _(D){var Z,q,mn,fn;if(!D.data)return;const $=(Z=D.target)==null?void 0:Z.value,K=(q=D.target)==null?void 0:q.selectionStart,J=(mn=D.target)==null?void 0:mn.selectionEnd,ln=$?$.slice(0,K)+D.data+$.slice(J):D.data;/^-?(\d+(\.\d*)?|(\.\d+)|\d*|\.)$/.test(ln)||D.preventDefault(),n.precision!=null&&(((fn=ln.split(".")[1])==null?void 0:fn.length)>n.precision&&D.preventDefault(),n.precision===0&&ln.includes(".")&&D.preventDefault())}async function V(D){["Enter","ArrowLeft","ArrowRight","Backspace","Delete","Tab"].includes(D.key)||D.ctrlKey||["ArrowDown","ArrowUp"].includes(D.key)&&(D.preventDefault(),W(),await Fn(),D.key==="ArrowDown"?F(!1):F())}function P(D){D.stopPropagation()}function I(D){const $=D.currentTarget;$==null||$.releasePointerCapture(D.pointerId),D.preventDefault(),D.stopPropagation(),r()}function M(D){const $=D.currentTarget;$==null||$.setPointerCapture(D.pointerId),D.preventDefault(),D.stopPropagation(),i("up")}function j(D){const $=D.currentTarget;$==null||$.setPointerCapture(D.pointerId),D.preventDefault(),D.stopPropagation(),i("down")}function W(){if(l.value||!a.value)return;const D=a.value.value;D&&!isNaN(Number(D))?g.value=p(Dn(Number(D),n.min,n.max)):g.value=null}function nn(){if(!l.value){if(f.value===null||isNaN(f.value)){g.value=null;return}g.value=n.precision==null?String(f.value):f.value.toFixed(n.precision)}}function Q(){if(!l.value){if(f.value===null||isNaN(f.value)){g.value=null;return}g.value=f.value.toString()}}function G(){u(),Q()}function R(){d(),W()}return N(()=>{const{modelValue:D,...$}=Nt.filterProps(n);function K(){return t.increment?m(vn,{key:"increment-defaults",defaults:{VBtn:{disabled:!h.value,flat:!0,height:S.value,size:C.value,icon:b.value}}},{default:()=>[t.increment(E)]}):m(wn,{disabled:!h.value,flat:!0,key:"increment-btn",height:S.value,"data-testid":"increment","aria-hidden":"true",icon:b.value,onClick:P,onPointerup:I,onPointerdown:M,size:C.value,tabindex:"-1"},null)}function J(){return t.decrement?m(vn,{key:"decrement-defaults",defaults:{VBtn:{disabled:!x.value,flat:!0,height:S.value,size:C.value,icon:k.value}}},{default:()=>[t.decrement(A)]}):m(wn,{disabled:!x.value,flat:!0,key:"decrement-btn",height:S.value,"data-testid":"decrement","aria-hidden":"true",icon:k.value,size:C.value,tabindex:"-1",onClick:P,onPointerup:I,onPointerdown:j},null)}function ln(){return m("div",{class:"v-number-input__control"},[J(),m(Mt,{vertical:v.value!=="stacked"},null),K()])}function Z(){return!n.hideInput&&!n.inset?m(Mt,{vertical:!0},null):void 0}const q=v.value==="split"?m("div",{class:"v-number-input__control"},[m(Mt,{vertical:!0},null),K()]):n.reverse||v.value==="hidden"?void 0:m(dn,null,[Z(),ln()]),mn=t["append-inner"]||q,fn=v.value==="split"?m("div",{class:"v-number-input__control"},[J(),m(Mt,{vertical:!0},null)]):n.reverse&&v.value!=="hidden"?m(dn,null,[ln(),Z()]):void 0,Y=t["prepend-inner"]||fn;return m(Nt,z({ref:a,modelValue:g.value,"onUpdate:modelValue":on=>g.value=on,validationValue:f.value,onBeforeinput:_,onFocus:G,onBlur:R,onKeydown:V,class:["v-number-input",{"v-number-input--default":v.value==="default","v-number-input--hide-input":n.hideInput,"v-number-input--inset":n.inset,"v-number-input--reverse":n.reverse,"v-number-input--split":v.value==="split","v-number-input--stacked":v.value==="stacked"},n.class]},$,{style:n.style,inputmode:"decimal"}),{...t,"append-inner":mn?function(){var cn;for(var on=arguments.length,H=new Array(on),en=0;en<on;en++)H[en]=arguments[en];return m(dn,null,[(cn=t["append-inner"])==null?void 0:cn.call(t,...H),q])}:void 0,"prepend-inner":Y?function(){var cn;for(var on=arguments.length,H=new Array(on),en=0;en<on;en++)H[en]=arguments[en];return m(dn,null,[fn,(cn=t["prepend-inner"])==null?void 0:cn.call(t,...H)])}:void 0})}),ht({},a)}}),Ab=T({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...Wn(),...fa(),...Zt(ba({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),Bb=L()({name:"VOtpInput",props:Ab(),emits:{finish:n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const{dimensionStyles:r}=Yn(n),{isFocused:o,focus:l,blur:s}=_t(n),u=sn(n,"modelValue","",w=>w==null?[]:String(w).split(""),w=>w.join("")),{t:d}=On(),p=y(()=>Number(n.length)),f=y(()=>Array(p.value).fill(0)),c=U(-1),g=U(),h=U([]),x=y(()=>h.value[c.value]);function v(){if(A(x.value.value)){x.value.value="";return}const w=u.value.slice(),F=x.value.value;w[c.value]=F;let _=null;c.value>u.value.length?_=u.value.length+1:c.value+1!==p.value&&(_="next"),u.value=w,_&&oe(g.value,_)}function b(w){const F=u.value.slice(),_=c.value;let V=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(w.key)&&(w.preventDefault(),w.key==="ArrowLeft"?V="prev":w.key==="ArrowRight"?V="next":["Backspace","Delete"].includes(w.key)&&(F[c.value]="",u.value=F,c.value>0&&w.key==="Backspace"?V="prev":requestAnimationFrame(()=>{var P;(P=h.value[_])==null||P.select()})),requestAnimationFrame(()=>{V!=null&&oe(g.value,V)}))}function k(w,F){var V,P;F.preventDefault(),F.stopPropagation();const _=((V=F==null?void 0:F.clipboardData)==null?void 0:V.getData("Text").slice(0,p.value))??"";A(_)||(u.value=_.split(""),(P=h.value)==null||P[w].blur())}function C(){u.value=[]}function S(w,F){l(),c.value=F}function E(){s(),c.value=-1}function A(w){return n.type==="number"&&/[^0-9]/g.test(w)}return $n({VField:{color:B(()=>n.color),bgColor:B(()=>n.color),baseColor:B(()=>n.baseColor),disabled:B(()=>n.disabled),error:B(()=>n.error),variant:B(()=>n.variant)}},{scoped:!0}),tn(u,w=>{w.length===p.value&&a("finish",w.join(""))},{deep:!0}),tn(c,w=>{w<0||Fn(()=>{var F;(F=h.value[w])==null||F.select()})}),N(()=>{var _;const[w,F]=Jt(t);return m("div",z({class:["v-otp-input",{"v-otp-input--divided":!!n.divider},n.class],style:[n.style]},w),[m("div",{ref:g,class:"v-otp-input__content",style:[r.value]},[f.value.map((V,P)=>m(dn,null,[n.divider&&P!==0&&m("span",{class:"v-otp-input__divider"},[n.divider]),m(qt,{focused:o.value&&n.focusAll||c.value===P,key:P},{...i,loader:void 0,default:()=>m("input",{ref:I=>h.value[P]=I,"aria-label":d(n.label,P+1),autofocus:P===0&&n.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:n.disabled,inputmode:n.type==="number"?"numeric":"text",min:n.type==="number"?0:void 0,maxlength:P===0?p.value:"1",placeholder:n.placeholder,type:n.type==="number"?"text":n.type,value:u.value[P],onInput:v,onFocus:I=>S(I,P),onBlur:E,onKeydown:b,onPaste:I=>k(P,I)},null)})])),m("input",z({class:"v-otp-input-input",type:"hidden"},F,{value:u.value.join("")}),null),m(Et,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!n.loading,persistent:!0},{default:()=>{var V;return[((V=i.loader)==null?void 0:V.call(i))??m(Me,{color:typeof n.loading=="boolean"?void 0:n.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(_=i.default)==null?void 0:_.call(i)])])}),{blur:()=>{var w;(w=h.value)==null||w.some(F=>F.blur())},focus:()=>{var w;(w=h.value)==null||w[0].focus()},reset:C,isFocused:o}}});function Db(n){return Math.floor(Math.abs(n))*Math.sign(n)}const _b=T({scale:{type:[Number,String],default:.5},...rn()},"VParallax"),Tb=L()({name:"VParallax",props:_b(),setup(n,e){let{slots:t}=e;const{intersectionRef:a,isIntersecting:i}=Xa(),{resizeRef:r,contentRect:o}=St(),{height:l}=wt(),s=U();Mn(()=>{var c;a.value=r.value=(c=s.value)==null?void 0:c.$el});let u;tn(i,c=>{c?(u=Pr(a.value),u=u===document.scrollingElement?document:u,u.addEventListener("scroll",f,{passive:!0}),f()):u.removeEventListener("scroll",f)}),tt(()=>{u==null||u.removeEventListener("scroll",f)}),tn(l,f),tn(()=>{var c;return(c=o.value)==null?void 0:c.height},f);const d=y(()=>1-Dn(Number(n.scale)));let p=-1;function f(){i.value&&(cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var S;const c=((S=s.value)==null?void 0:S.$el).querySelector(".v-img__img");if(!c)return;const g=u instanceof Document?document.documentElement.clientHeight:u.clientHeight,h=u instanceof Document?window.scrollY:u.scrollTop,x=a.value.getBoundingClientRect().top+h,v=o.value.height,b=x+(v-g)/2,k=Db((h-b)*d.value),C=Math.max(1,(d.value*(g-v)+v)/v);c.style.setProperty("transform",`translateY(${k}px) scale(${C})`)}))}return N(()=>m(Ot,{class:["v-parallax",{"v-parallax--active":i.value},n.class],style:n.style,ref:s,cover:!0,onLoadstart:f,onLoad:f},t)),{}}}),Mb=T({...ni({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Rb=L()({name:"VRadio",props:Mb(),setup(n,e){let{slots:t}=e;return N(()=>{const a=Kt.filterProps(n);return m(Kt,z(a,{class:["v-radio",n.class],style:n.style,type:"radio"}),t)}),{}}}),$b=T({height:{type:[Number,String],default:"auto"},...Wt(),...Rn(Or(),["multiple"]),trueIcon:{type:un,default:"$radioOn"},falseIcon:{type:un,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Ob=L()({name:"VRadioGroup",inheritAttrs:!1,props:$b(),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const i=st(),r=y(()=>n.id||`radio-group-${i}`),o=sn(n,"modelValue");return N(()=>{const[l,s]=Jt(t),u=nt.filterProps(n),d=Kt.filterProps(n),p=a.label?a.label({label:n.label,props:{for:r.value}}):n.label;return m(nt,z({class:["v-radio-group",n.class],style:n.style},l,u,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,id:r.value}),{...a,default:f=>{let{id:c,messagesId:g,isDisabled:h,isReadonly:x}=f;return m(dn,null,[p&&m(je,{id:c.value},{default:()=>[p]}),m(Cm,z(d,{id:c.value,"aria-describedby":g.value,defaultsTarget:"VRadio",trueIcon:n.trueIcon,falseIcon:n.falseIcon,type:n.type,disabled:h.value,readonly:x.value,"aria-labelledby":p?c.value:void 0,multiple:!1},s,{modelValue:o.value,"onUpdate:modelValue":v=>o.value=v}),a)])}})}),{}}}),Lb=T({...fa(),...Wt(),...Fs(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),zb=L()({name:"VRangeSlider",props:Lb(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,end:n=>!0,start:n=>!0},setup(n,e){let{slots:t,emit:a}=e;const i=U(),r=U(),o=U(),{rtlClasses:l}=Hn();function s(_){if(!i.value||!r.value)return;const V=nr(_,i.value.$el,n.direction),P=nr(_,r.value.$el,n.direction),I=Math.abs(V),M=Math.abs(P);return I<M||I===M&&V<0?i.value.$el:r.value.$el}const u=Cs(n),d=sn(n,"modelValue",void 0,_=>_!=null&&_.length?_.map(V=>u.roundValue(V)):[0,0]),{activeThumbRef:p,hasLabels:f,max:c,min:g,mousePressed:h,onSliderMousedown:x,onSliderTouchstart:v,position:b,trackContainerRef:k,readonly:C}=Vs({props:n,steps:u,onSliderStart:()=>{a("start",d.value)},onSliderEnd:_=>{var I;let{value:V}=_;const P=p.value===((I=i.value)==null?void 0:I.$el)?[V,d.value[1]]:[d.value[0],V];!n.strict&&P[0]<P[1]&&(d.value=P),a("end",d.value)},onSliderMove:_=>{var M,j,W,nn;let{value:V}=_;const[P,I]=d.value;!n.strict&&P===I&&P!==g.value&&(p.value=V>P?(M=r.value)==null?void 0:M.$el:(j=i.value)==null?void 0:j.$el,(W=p.value)==null||W.focus()),p.value===((nn=i.value)==null?void 0:nn.$el)?d.value=[Math.min(V,I),I]:d.value=[P,Math.max(P,V)]},getActiveThumb:s}),{isFocused:S,focus:E,blur:A}=_t(n),w=y(()=>b(d.value[0])),F=y(()=>b(d.value[1]));return N(()=>{const _=nt.filterProps(n),V=!!(n.label||t.label||t.prepend);return m(nt,z({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!t["tick-label"]||f.value,"v-slider--focused":S.value,"v-slider--pressed":h.value,"v-slider--disabled":n.disabled},l.value,n.class],style:n.style,ref:o},_,{focused:S.value}),{...t,prepend:V?P=>{var I,M;return m(dn,null,[((I=t.label)==null?void 0:I.call(t,P))??(n.label?m(je,{class:"v-slider__label",text:n.label},null):void 0),(M=t.prepend)==null?void 0:M.call(t,P)])}:void 0,default:P=>{var j,W;let{id:I,messagesId:M}=P;return m("div",{class:"v-slider__container",onMousedown:C.value?void 0:x,onTouchstartPassive:C.value?void 0:v},[m("input",{id:`${I.value}_start`,name:n.name||I.value,disabled:!!n.disabled,readonly:!!n.readonly,tabindex:"-1",value:d.value[0]},null),m("input",{id:`${I.value}_stop`,name:n.name||I.value,disabled:!!n.disabled,readonly:!!n.readonly,tabindex:"-1",value:d.value[1]},null),m(Ps,{ref:k,start:w.value,stop:F.value},{"tick-label":t["tick-label"]}),m(tr,{ref:i,"aria-describedby":M.value,focused:S&&p.value===((j=i.value)==null?void 0:j.$el),modelValue:d.value[0],"onUpdate:modelValue":nn=>d.value=[nn,d.value[1]],onFocus:nn=>{var Q,G,R,D;E(),p.value=(Q=i.value)==null?void 0:Q.$el,c.value!==g.value&&d.value[0]===d.value[1]&&d.value[1]===g.value&&nn.relatedTarget!==((G=r.value)==null?void 0:G.$el)&&((R=i.value)==null||R.$el.blur(),(D=r.value)==null||D.$el.focus())},onBlur:()=>{A(),p.value=void 0},min:g.value,max:d.value[1],position:w.value,ripple:n.ripple},{"thumb-label":t["thumb-label"]}),m(tr,{ref:r,"aria-describedby":M.value,focused:S&&p.value===((W=r.value)==null?void 0:W.$el),modelValue:d.value[1],"onUpdate:modelValue":nn=>d.value=[d.value[0],nn],onFocus:nn=>{var Q,G,R,D;E(),p.value=(Q=r.value)==null?void 0:Q.$el,c.value!==g.value&&d.value[0]===d.value[1]&&d.value[0]===c.value&&nn.relatedTarget!==((G=i.value)==null?void 0:G.$el)&&((R=r.value)==null||R.$el.blur(),(D=i.value)==null||D.$el.focus())},onBlur:()=>{A(),p.value=void 0},min:d.value[0],max:c.value,position:F.value,ripple:n.ripple},{"thumb-label":t["thumb-label"]})])}})}),{}}}),Nb=T({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:un,default:"$ratingEmpty"},fullIcon:{type:un,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:n=>["top","bottom"].includes(n)},ripple:Boolean,...rn(),...Kn(),...Dt(),...xn(),...kn()},"VRating"),jb=L()({name:"VRating",props:Nb(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{t:a}=On(),{themeClasses:i}=Pn(n),r=sn(n,"modelValue"),o=y(()=>Dn(parseFloat(r.value),0,Number(n.length))),l=y(()=>Pt(Number(n.length),1)),s=y(()=>l.value.flatMap(x=>n.halfIncrements?[x-.5,x]:[x])),u=X(-1),d=y(()=>s.value.map(x=>{const v=n.hover&&u.value>-1,b=o.value>=x,k=u.value>=x,S=(v?k:b)?n.fullIcon:n.emptyIcon,E=n.activeColor??n.color,A=b||k?E:n.color;return{isFilled:b,isHovered:k,icon:S,color:A}})),p=y(()=>[0,...s.value].map(x=>{function v(){u.value=x}function b(){u.value=-1}function k(){n.disabled||n.readonly||(r.value=o.value===x&&n.clearable?0:x)}return{onMouseenter:n.hover?v:void 0,onMouseleave:n.hover?b:void 0,onClick:k}})),f=st(),c=y(()=>n.name??`v-rating-${f}`);function g(x){var F,_;let{value:v,index:b,showStar:k=!0}=x;const{onMouseenter:C,onMouseleave:S,onClick:E}=p.value[b+1],A=`${c.value}-${String(v).replace(".","-")}`,w={color:(F=d.value[b])==null?void 0:F.color,density:n.density,disabled:n.disabled,icon:(_=d.value[b])==null?void 0:_.icon,ripple:n.ripple,size:n.size,variant:"plain"};return m(dn,null,[m("label",{for:A,class:{"v-rating__item--half":n.halfIncrements&&v%1>0,"v-rating__item--full":n.halfIncrements&&v%1===0},onMouseenter:C,onMouseleave:S,onClick:E},[m("span",{class:"v-rating__hidden"},[a(n.itemAriaLabel,v,n.length)]),k?t.item?t.item({...d.value[b],props:w,value:v,index:b,rating:o.value}):m(wn,z({"aria-label":a(n.itemAriaLabel,v,n.length)},w),null):void 0]),m("input",{class:"v-rating__hidden",name:c.value,id:A,type:"radio",value:v,checked:o.value===v,tabindex:-1,readonly:n.readonly,disabled:n.disabled},null)])}function h(x){return t["item-label"]?t["item-label"](x):x.label?m("span",null,[x.label]):m("span",null,[bn(" ")])}return N(()=>{var v;const x=!!((v=n.itemLabels)!=null&&v.length)||t["item-label"];return m(n.tag,{class:["v-rating",{"v-rating--hover":n.hover,"v-rating--readonly":n.readonly},i.value,n.class],style:n.style},{default:()=>[m(g,{value:0,index:-1,showStar:!1},null),l.value.map((b,k)=>{var C,S;return m("div",{class:"v-rating__wrapper"},[x&&n.itemLabelPosition==="top"?h({value:b,index:k,label:(C=n.itemLabels)==null?void 0:C[k]}):void 0,m("div",{class:"v-rating__item"},[n.halfIncrements?m(dn,null,[m(g,{value:b-.5,index:k*2},null),m(g,{value:b,index:k*2+1},null)]):m(g,{value:b,index:k},null)]),x&&n.itemLabelPosition==="bottom"?h({value:b,index:k,label:(S=n.itemLabels)==null?void 0:S[k]}):void 0])})]})}),{}}}),Hb={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function Wb(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return m("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${n}`]},[e])}function xl(n){const[e,t]=n.split("@");return Array.from({length:t}).map(()=>xi(e))}function xi(n){let e=[];if(!n)return e;const t=Hb[n];if(n!==t){if(n.includes(","))return vl(n);if(n.includes("@"))return xl(n);t.includes(",")?e=vl(t):t.includes("@")?e=xl(t):t&&e.push(xi(t))}return[Wb(n,e)]}function vl(n){return n.replace(/\s/g,"").split(",").map(xi)}const Yb=T({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...Wn(),...Gn(),...kn()},"VSkeletonLoader"),Gb=L()({name:"VSkeletonLoader",props:Yb(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:a,backgroundColorStyles:i}=En(()=>n.color),{dimensionStyles:r}=Yn(n),{elevationClasses:o}=Zn(n),{themeClasses:l}=Pn(n),{t:s}=On(),u=y(()=>xi(_n(n.type).join(",")));return N(()=>{var f;const d=!t.default||n.loading,p=n.boilerplate||!d?{}:{ariaLive:"polite",ariaLabel:s(n.loadingText),role:"alert"};return m("div",z({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":n.boilerplate},l.value,a.value,o.value],style:[i.value,d?r.value:{}]},p),[d?u.value:(f=t.default)==null?void 0:f.call(t)])}),{}}}),Ub=L()({name:"VSlideGroupItem",props:he(),emits:{"group:selected":n=>!0},setup(n,e){let{slots:t}=e;const a=ye(n,Rm);return()=>{var i;return(i=t.default)==null?void 0:i.call(t,{isSelected:a.isSelected.value,select:a.select,toggle:a.toggle,selectedClass:a.selectedClass.value})}}});function Kb(n){const e=X(n());let t=-1;function a(){clearInterval(t)}function i(){a(),Fn(()=>e.value=n())}function r(o){const l=o?getComputedStyle(o):{transitionDuration:.2},s=parseFloat(l.transitionDuration)*1e3||200;if(a(),e.value<=0)return;const u=performance.now();t=window.setInterval(()=>{const d=performance.now()-u+s;e.value=Math.max(n()-d,0),e.value<=0&&a()},s)}return Xn(a),{clear:a,time:e,start:r,reset:i}}const kd=T({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...jt({location:"bottom"}),...ze(),...Bn(),...kt(),...kn(),...Rn(va({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),vr=L()({name:"VSnackbar",props:kd(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),{positionClasses:i}=Ne(n),{scopeId:r}=Se(),{themeClasses:o}=Pn(n),{colorClasses:l,colorStyles:s,variantClasses:u}=ve(n),{roundedClasses:d}=Ln(n),p=Kb(()=>Number(n.timeout)),f=U(),c=U(),g=X(!1),h=X(0),x=U(),v=Sn(Ze,void 0);mt(()=>!!v,()=>{const V=nm();Mn(()=>{x.value=V.mainStyles.value})}),tn(a,k),tn(()=>n.timeout,k),it(()=>{a.value&&k()});let b=-1;function k(){p.reset(),window.clearTimeout(b);const V=Number(n.timeout);if(!a.value||V===-1)return;const P=yr(c.value);p.start(P),b=window.setTimeout(()=>{a.value=!1},V)}function C(){p.reset(),window.clearTimeout(b)}function S(){g.value=!0,C()}function E(){g.value=!1,k()}function A(V){h.value=V.touches[0].clientY}function w(V){Math.abs(h.value-V.changedTouches[0].clientY)>50&&(a.value=!1)}function F(){g.value&&E()}const _=y(()=>n.location.split(" ").reduce((V,P)=>(V[`v-snackbar--${P}`]=!0,V),{}));return N(()=>{const V=Et.filterProps(n),P=!!(t.default||t.text||n.text);return m(Et,z({ref:f,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":n.multiLine&&!n.vertical,"v-snackbar--timer":!!n.timer,"v-snackbar--vertical":n.vertical},_.value,i.value,n.class],style:[x.value,n.style]},V,{modelValue:a.value,"onUpdate:modelValue":I=>a.value=I,contentProps:z({class:["v-snackbar__wrapper",o.value,l.value,d.value,u.value],style:[s.value],onPointerenter:S,onPointerleave:E},V.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:A,onTouchend:w,onAfterLeave:F},r),{default:()=>{var I,M;return[Qt(!1,"v-snackbar"),n.timer&&!g.value&&m("div",{key:"timer",class:"v-snackbar__timer"},[m(Za,{ref:c,color:typeof n.timer=="string"?n.timer:"info",max:n.timeout,"model-value":p.time.value},null)]),P&&m("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((I=t.text)==null?void 0:I.call(t))??n.text,(M=t.default)==null?void 0:M.call(t)]),t.actions&&m(vn,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[m("div",{class:"v-snackbar__actions"},[t.actions({isActive:a})])]})]},activator:t.activator})}),ht({},f)}}),qb=T({closable:[Boolean,String],closeText:{type:String,default:"$vuetify.dismiss"},modelValue:{type:Array,default:()=>[]},...Rn(kd(),["modelValue"])},"VSnackbarQueue"),Xb=L()({name:"VSnackbarQueue",props:qb(),emits:{"update:modelValue":n=>!0},setup(n,e){let{emit:t,slots:a}=e;const{t:i}=On(),r=X(!1),o=X(!1),l=X();tn(()=>n.modelValue.length,(f,c)=>{!o.value&&f>c&&u()}),tn(r,f=>{f&&(o.value=!0)});function s(){n.modelValue.length?u():(l.value=void 0,o.value=!1)}function u(){const[f,...c]=n.modelValue;t("update:modelValue",c),l.value=typeof f=="string"?{text:f}:f,Fn(()=>{r.value=!0})}function d(){r.value=!1}const p=y(()=>({color:typeof n.closable=="string"?n.closable:void 0,text:i(n.closeText)}));N(()=>{const f=!!(n.closable||a.actions),{modelValue:c,...g}=vr.filterProps(n);return m(dn,null,[o.value&&!!l.value&&(a.default?m(vn,{defaults:{VSnackbar:l.value}},{default:()=>[a.default({item:l.value})]}):m(vr,z(g,l.value,{modelValue:r.value,"onUpdate:modelValue":h=>r.value=h,onAfterLeave:s}),{text:a.text?()=>{var h;return(h=a.text)==null?void 0:h.call(a,{item:l.value})}:void 0,actions:f?()=>m(dn,null,[a.actions?m(vn,{defaults:{VBtn:p.value}},{default:()=>[a.actions({item:l.value,props:{onClick:d}})]}):m(wn,z(p.value,{onClick:d}),null)]):void 0}))])})}}),wd=T({autoDraw:Boolean,autoDrawDuration:[Number,String],autoDrawEasing:{type:String,default:"ease"},color:String,gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:n=>["top","bottom","left","right"].includes(n),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},id:String,itemValue:{type:String,default:"value"},modelValue:{type:Array,default:()=>[]},min:[String,Number],max:[String,Number],padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:[Boolean,String,Number],width:{type:[Number,String],default:300}},"Line"),Sd=T({autoLineWidth:Boolean,...wd()},"VBarline"),bl=L()({name:"VBarline",props:Sd(),setup(n,e){let{slots:t}=e;const a=st(),i=y(()=>n.id||`barline-${a}`),r=y(()=>Number(n.autoDrawDuration)||500),o=y(()=>!!(n.showLabels||n.labels.length>0||t!=null&&t.label)),l=y(()=>parseFloat(n.lineWidth)||4),s=y(()=>Math.max(n.modelValue.length*l.value,Number(n.width))),u=y(()=>({minX:0,maxX:s.value,minY:0,maxY:parseInt(n.height,10)})),d=y(()=>n.modelValue.map(x=>jn(x,n.itemValue,x)));function p(x,v){const{minX:b,maxX:k,minY:C,maxY:S}=v,E=x.length;let A=n.max!=null?Number(n.max):Math.max(...x),w=n.min!=null?Number(n.min):Math.min(...x);w>0&&n.min==null&&(w=0),A<0&&n.max==null&&(A=0);const F=k/E,_=(S-C)/(A-w||1),V=S-Math.abs(w*_);return x.map((P,I)=>{const M=Math.abs(_*P);return{x:b+I*F,y:V-M+ +(P<0)*M,height:M,value:P}})}const f=y(()=>{const x=[],v=p(d.value,u.value),b=v.length;for(let k=0;x.length<b;k++){const C=v[k];let S=n.labels[k];S||(S=typeof C=="object"?C.value:C),x.push({x:C.x,value:String(S)})}return x}),c=y(()=>p(d.value,u.value)),g=y(()=>(Math.abs(c.value[0].x-c.value[1].x)-l.value)/2),h=y(()=>typeof n.smooth=="boolean"?n.smooth?2:0:Number(n.smooth));N(()=>{const x=n.gradient.slice().length?n.gradient.slice().reverse():[""];return m("svg",{display:"block"},[m("defs",null,[m("linearGradient",{id:i.value,gradientUnits:"userSpaceOnUse",x1:n.gradientDirection==="left"?"100%":"0",y1:n.gradientDirection==="top"?"100%":"0",x2:n.gradientDirection==="right"?"100%":"0",y2:n.gradientDirection==="bottom"?"100%":"0"},[x.map((v,b)=>m("stop",{offset:b/Math.max(x.length-1,1),"stop-color":v||"currentColor"},null))])]),m("clipPath",{id:`${i.value}-clip`},[c.value.map(v=>m("rect",{x:v.x+g.value,y:v.y,width:l.value,height:v.height,rx:h.value,ry:h.value},[n.autoDraw&&m(dn,null,[m("animate",{attributeName:"y",from:v.y+v.height,to:v.y,dur:`${r.value}ms`,fill:"freeze"},null),m("animate",{attributeName:"height",from:"0",to:v.height,dur:`${r.value}ms`,fill:"freeze"},null)])]))]),o.value&&m("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[f.value.map((v,b)=>{var k;return m("text",{x:v.x+g.value+l.value/2,y:parseInt(n.height,10)-2+(parseInt(n.labelSize,10)||7*.75),"font-size":Number(n.labelSize)||7},[((k=t.label)==null?void 0:k.call(t,{index:b,value:v.value}))??v.value])})]),m("g",{"clip-path":`url(#${i.value}-clip)`,fill:`url(#${i.value})`},[m("rect",{x:0,y:0,width:Math.max(n.modelValue.length*l.value,Number(n.width)),height:n.height},null)])])})}});function Zb(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:75;if(n.length===0)return"";const i=n.shift(),r=n[n.length-1];return(t?`M${i.x} ${a-i.x+2} L${i.x} ${i.y}`:`M${i.x} ${i.y}`)+n.map((o,l)=>{const s=n[l+1],u=n[l-1]||i,d=s&&Jb(s,o,u);if(!s||d)return`L${o.x} ${o.y}`;const p=Math.min(hl(u,o),hl(s,o)),c=p/2<e?p/2:e,g=yl(u,o,c),h=yl(s,o,c);return`L${g.x} ${g.y}S${o.x} ${o.y} ${h.x} ${h.y}`}).join("")+(t?`L${r.x} ${a-i.x+2} Z`:"")}function Ba(n){return parseInt(n,10)}function Jb(n,e,t){return Ba(n.x+t.x)===Ba(2*e.x)&&Ba(n.y+t.y)===Ba(2*e.y)}function hl(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function yl(n,e,t){const a={x:n.x-e.x,y:n.y-e.y},i=Math.sqrt(a.x*a.x+a.y*a.y),r={x:a.x/i,y:a.y/i};return{x:e.x+r.x*t,y:e.y+r.y*t}}const Fd=T({fill:Boolean,...wd()},"VTrendline"),kl=L()({name:"VTrendline",props:Fd(),setup(n,e){let{slots:t}=e;const a=st(),i=y(()=>n.id||`trendline-${a}`),r=y(()=>Number(n.autoDrawDuration)||(n.fill?500:2e3)),o=U(0),l=U(null);function s(x,v){const{minX:b,maxX:k,minY:C,maxY:S}=v,E=x.length,A=n.max!=null?Number(n.max):Math.max(...x),w=n.min!=null?Number(n.min):Math.min(...x),F=(k-b)/(E-1),_=(S-C)/(A-w||1);return x.map((V,P)=>({x:b+P*F,y:S-(V-w)*_,value:V}))}const u=y(()=>!!(n.showLabels||n.labels.length>0||t!=null&&t.label)),d=y(()=>parseFloat(n.lineWidth)||4),p=y(()=>Number(n.width)),f=y(()=>{const x=Number(n.padding);return{minX:x,maxX:p.value-x,minY:x,maxY:parseInt(n.height,10)-x}}),c=y(()=>n.modelValue.map(x=>jn(x,n.itemValue,x))),g=y(()=>{const x=[],v=s(c.value,f.value),b=v.length;for(let k=0;x.length<b;k++){const C=v[k];let S=n.labels[k];S||(S=typeof C=="object"?C.value:C),x.push({x:C.x,value:String(S)})}return x});tn(()=>n.modelValue,async()=>{if(await Fn(),!n.autoDraw||!l.value)return;const x=l.value,v=x.getTotalLength();n.fill?(x.style.transformOrigin="bottom center",x.style.transition="none",x.style.transform="scaleY(0)",x.getBoundingClientRect(),x.style.transition=`transform ${r.value}ms ${n.autoDrawEasing}`,x.style.transform="scaleY(1)"):(x.style.strokeDasharray=`${v}`,x.style.strokeDashoffset=`${v}`,x.getBoundingClientRect(),x.style.transition=`stroke-dashoffset ${r.value}ms ${n.autoDrawEasing}`,x.style.strokeDashoffset="0"),o.value=v},{immediate:!0});function h(x){const v=typeof n.smooth=="boolean"?n.smooth?8:0:Number(n.smooth);return Zb(s(c.value,f.value),v,x,parseInt(n.height,10))}N(()=>{var v;const x=n.gradient.slice().length?n.gradient.slice().reverse():[""];return m("svg",{display:"block","stroke-width":parseFloat(n.lineWidth)??4},[m("defs",null,[m("linearGradient",{id:i.value,gradientUnits:"userSpaceOnUse",x1:n.gradientDirection==="left"?"100%":"0",y1:n.gradientDirection==="top"?"100%":"0",x2:n.gradientDirection==="right"?"100%":"0",y2:n.gradientDirection==="bottom"?"100%":"0"},[x.map((b,k)=>m("stop",{offset:k/Math.max(x.length-1,1),"stop-color":b||"currentColor"},null))])]),u.value&&m("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[g.value.map((b,k)=>{var C;return m("text",{x:b.x+d.value/2+d.value/2,y:parseInt(n.height,10)-4+(parseInt(n.labelSize,10)||7*.75),"font-size":Number(n.labelSize)||7},[((C=t.label)==null?void 0:C.call(t,{index:k,value:b.value}))??b.value])})]),m("path",{ref:l,d:h(n.fill),fill:n.fill?`url(#${i.value})`:"none",stroke:n.fill?"none":`url(#${i.value})`},null),n.fill&&m("path",{d:h(!1),fill:"none",stroke:n.color??((v=n.gradient)==null?void 0:v[0])},null)])})}}),Qb=T({type:{type:String,default:"trend"},...Sd(),...Fd()},"VSparkline"),nh=L()({name:"VSparkline",props:Qb(),setup(n,e){let{slots:t}=e;const{textColorClasses:a,textColorStyles:i}=Qn(()=>n.color),r=y(()=>!!(n.showLabels||n.labels.length>0||t!=null&&t.label)),o=y(()=>{let l=parseInt(n.height,10);return r.value&&(l+=parseInt(n.labelSize,10)*1.5),l});N(()=>{const l=n.type==="trend"?kl:bl,s=n.type==="trend"?kl.filterProps(n):bl.filterProps(n);return m(l,z({key:n.type,class:a.value,style:i.value,viewBox:`0 0 ${n.width} ${parseInt(o.value,10)}`},s),t)})}}),th=T({...rn(),...os({offset:8,minWidth:0,openDelay:0,closeDelay:100,location:"top center",transition:"scale-transition"})},"VSpeedDial"),eh=L()({name:"VSpeedDial",props:th(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),i=U(),r=y(()=>{var u;const[l,s="center"]=((u=n.location)==null?void 0:u.split(" "))??[];return`${l} ${s}`}),o=y(()=>({[`v-speed-dial__content--${r.value.replace(" ","-")}`]:!0}));return N(()=>{const l=Re.filterProps(n);return m(Re,z(l,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,class:n.class,style:n.style,contentClass:["v-speed-dial__content",o.value,n.contentClass],location:r.value,ref:i,transition:"fade-transition"}),{...t,default:s=>m(vn,{defaults:{VBtn:{size:"small"}}},{default:()=>[m(at,{appear:!0,group:!0,transition:n.transition},{default:()=>{var u;return[(u=t.default)==null?void 0:u.call(t,s)]}})]})})}),{}}}),xo=Symbol.for("vuetify:v-stepper"),Cd=T({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),Vd=L()({name:"VStepperActions",props:Cd(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(n,e){let{emit:t,slots:a}=e;const{t:i}=On();function r(){t("click:prev")}function o(){t("click:next")}return N(()=>{const l={onClick:r},s={onClick:o};return m("div",{class:"v-stepper-actions"},[m(vn,{defaults:{VBtn:{disabled:["prev",!0].includes(n.disabled),text:i(n.prevText),variant:"text"}}},{default:()=>{var u;return[((u=a.prev)==null?void 0:u.call(a,{props:l}))??m(wn,l,null)]}}),m(vn,{defaults:{VBtn:{color:n.color,disabled:["next",!0].includes(n.disabled),text:i(n.nextText),variant:"tonal"}}},{default:()=>{var u;return[((u=a.next)==null?void 0:u.call(a,{props:s}))??m(wn,s,null)]}})])}),{}}}),Pd=Bt("v-stepper-header"),ah=T({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:un,default:"$complete"},editable:Boolean,editIcon:{type:un,default:"$edit"},error:Boolean,errorIcon:{type:un,default:"$error"},icon:un,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),ih=T({...ah(),...he()},"VStepperItem"),Id=L()({name:"VStepperItem",directives:{Ripple:Ht},props:ih(),emits:{"group:selected":n=>!0},setup(n,e){let{slots:t}=e;const a=ye(n,xo,!0),i=y(()=>(a==null?void 0:a.value.value)??n.value),r=y(()=>n.rules.every(f=>f()===!0)),o=y(()=>!n.disabled&&n.editable),l=y(()=>!n.disabled&&n.editable),s=y(()=>n.error||!r.value),u=y(()=>n.complete||n.rules.length>0&&r.value),d=y(()=>s.value?n.errorIcon:u.value?n.completeIcon:a.isSelected.value&&n.editable?n.editIcon:n.icon),p=y(()=>({canEdit:l.value,hasError:s.value,hasCompleted:u.value,title:n.title,subtitle:n.subtitle,step:i.value,value:n.value}));return N(()=>{var x,v,b;const f=(!a||a.isSelected.value||u.value||l.value)&&!s.value&&!n.disabled,c=!!(n.title!=null||t.title),g=!!(n.subtitle!=null||t.subtitle);function h(){a==null||a.toggle()}return Tn(m("button",{class:["v-stepper-item",{"v-stepper-item--complete":u.value,"v-stepper-item--disabled":n.disabled,"v-stepper-item--error":s.value},a==null?void 0:a.selectedClass.value],disabled:!n.editable,type:"button",onClick:h},[o.value&&Qt(!0,"v-stepper-item"),m(yt,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:f?n.color:void 0,size:24},{default:()=>{var k;return[((k=t.icon)==null?void 0:k.call(t,p.value))??(d.value?m(Vn,{icon:d.value},null):i.value)]}}),m("div",{class:"v-stepper-item__content"},[c&&m("div",{key:"title",class:"v-stepper-item__title"},[((x=t.title)==null?void 0:x.call(t,p.value))??n.title]),g&&m("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[((v=t.subtitle)==null?void 0:v.call(t,p.value))??n.subtitle]),(b=t.default)==null?void 0:b.call(t,p.value)])]),[[ft("ripple"),n.ripple&&n.editable,null]])}),{}}}),rh=T({...Rn(ri(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),Ed=L()({name:"VStepperWindow",props:rh(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=Sn(xo,null),i=sn(n,"modelValue"),r=y({get(){var o;return i.value!=null||!a?i.value:(o=a.items.value.find(l=>a.selected.value.includes(l.id)))==null?void 0:o.value},set(o){i.value=o}});return N(()=>{const o=se.filterProps(n);return m(se,z({_as:"VStepperWindow"},o,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l,class:["v-stepper-window",n.class],style:n.style,mandatory:!1,touch:!1}),t)}),{}}}),oh=T({...oi()},"VStepperWindowItem"),Ad=L()({name:"VStepperWindowItem",props:oh(),setup(n,e){let{slots:t}=e;return N(()=>{const a=de.filterProps(n);return m(de,z({_as:"VStepperWindowItem"},a,{class:["v-stepper-window-item",n.class],style:n.style}),t)}),{}}}),lh=T({altLabels:Boolean,bgColor:String,completeIcon:un,editIcon:un,editable:Boolean,errorIcon:un,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...we()},"Stepper"),mh=T({...lh(),...be({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Qr(),...Zt(Cd(),["prevText","nextText"])},"VStepper"),sh=L()({name:"VStepper",props:mh(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{items:a,next:i,prev:r,selected:o}=ne(n,xo),{displayClasses:l,mobile:s}=wt(n),{completeIcon:u,editIcon:d,errorIcon:p,color:f,editable:c,prevText:g,nextText:h}=Oe(n),x=y(()=>n.items.map((k,C)=>{const S=jn(k,n.itemTitle,k),E=jn(k,n.itemValue,C+1);return{title:S,value:E,raw:k}})),v=y(()=>a.value.findIndex(k=>o.value.includes(k.id))),b=y(()=>n.disabled?n.disabled:v.value===0?"prev":v.value===a.value.length-1?"next":!1);return $n({VStepperItem:{editable:c,errorIcon:p,completeIcon:u,editIcon:d,prevText:g,nextText:h},VStepperActions:{color:f,disabled:b,prevText:g,nextText:h}}),N(()=>{const k=ra.filterProps(n),C=!!(t.header||n.items.length),S=n.items.length>0,E=!n.hideActions&&!!(S||t.actions);return m(ra,z(k,{color:n.bgColor,class:["v-stepper",{"v-stepper--alt-labels":n.altLabels,"v-stepper--flat":n.flat,"v-stepper--non-linear":n.nonLinear,"v-stepper--mobile":s.value},l.value,n.class],style:n.style}),{default:()=>{var A,w;return[C&&m(Pd,{key:"stepper-header"},{default:()=>[x.value.map((F,_)=>{let{raw:V,...P}=F;return m(dn,null,[!!_&&m(Mt,null,null),m(Id,P,{default:t[`header-item.${P.value}`]??t.header,icon:t.icon,title:t.title,subtitle:t.subtitle})])})]}),S&&m(Ed,{key:"stepper-window"},{default:()=>[x.value.map(F=>m(Ad,{value:F.value},{default:()=>{var _,V;return((_=t[`item.${F.value}`])==null?void 0:_.call(t,F))??((V=t.item)==null?void 0:V.call(t,F))}}))]}),(A=t.default)==null?void 0:A.call(t,{prev:r,next:i}),E&&(((w=t.actions)==null?void 0:w.call(t,{next:i,prev:r}))??m(Vd,{key:"stepper-actions","onClick:prev":r,"onClick:next":i},t))]}})}),{prev:r,next:i}}}),dh=T({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Wt(),...ni()},"VSwitch"),uh=L()({name:"VSwitch",inheritAttrs:!1,props:dh(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,"update:indeterminate":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const i=sn(n,"indeterminate"),r=sn(n,"modelValue"),{loaderClasses:o}=ua(n),{isFocused:l,focus:s,blur:u}=_t(n),d=U(),p=Cn&&window.matchMedia("(forced-colors: active)").matches,f=B(()=>typeof n.loading=="string"&&n.loading!==""?n.loading:n.color),c=st(),g=B(()=>n.id||`switch-${c}`);function h(){i.value&&(i.value=!1)}function x(v){var b,k;v.stopPropagation(),v.preventDefault(),(k=(b=d.value)==null?void 0:b.input)==null||k.click()}return N(()=>{const[v,b]=Jt(t),k=nt.filterProps(n),C=Kt.filterProps(n);return m(nt,z({class:["v-switch",{"v-switch--flat":n.flat},{"v-switch--inset":n.inset},{"v-switch--indeterminate":i.value},o.value,n.class]},v,k,{modelValue:r.value,"onUpdate:modelValue":S=>r.value=S,id:g.value,focused:l.value,style:n.style}),{...a,default:S=>{let{id:E,messagesId:A,isDisabled:w,isReadonly:F,isValid:_}=S;const V={model:r,isValid:_};return m(Kt,z({ref:d},C,{modelValue:r.value,"onUpdate:modelValue":[P=>r.value=P,h],id:E.value,"aria-describedby":A.value,type:"checkbox","aria-checked":i.value?"mixed":void 0,disabled:w.value,readonly:F.value,onFocus:s,onBlur:u},b),{...a,default:P=>{let{backgroundColorClasses:I,backgroundColorStyles:M}=P;return m("div",{class:["v-switch__track",p?void 0:I.value],style:M.value,onClick:x},[a["track-true"]&&m("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](V)]),a["track-false"]&&m("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](V)])])},input:P=>{let{inputNode:I,icon:M,backgroundColorClasses:j,backgroundColorStyles:W}=P;return m(dn,null,[I,m("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":M||n.loading},n.inset||p?void 0:j.value],style:n.inset?void 0:W.value},[a.thumb?m(vn,{defaults:{VIcon:{icon:M,size:"x-small"}}},{default:()=>[a.thumb({...V,icon:M})]}):m(Br,null,{default:()=>[n.loading?m(pa,{name:"v-switch",active:!0,color:_.value===!1?void 0:f.value},{default:nn=>a.loader?a.loader(nn):m(Me,{active:nn.isActive,color:nn.color,indeterminate:!0,size:"16",width:"2"},null)}):M&&m(Vn,{key:String(M),icon:M,size:"x-small"},null)]})])])}})}})}),{}}}),ph=T({color:String,height:[Number,String],window:Boolean,...rn(),...Gn(),...ge(),...Bn(),...xn(),...kn()},"VSystemBar"),ch=L()({name:"VSystemBar",props:ph(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{backgroundColorClasses:i,backgroundColorStyles:r}=En(()=>n.color),{elevationClasses:o}=Zn(n),{roundedClasses:l}=Ln(n),{ssrBootStyles:s}=xe(),u=y(()=>n.height??(n.window?32:24)),{layoutItemStyles:d}=fe({id:n.name,order:y(()=>parseInt(n.order,10)),position:X("top"),layoutSize:u,elementSize:u,active:y(()=>!0),absolute:B(()=>n.absolute)});return N(()=>m(n.tag,{class:["v-system-bar",{"v-system-bar--window":n.window},a.value,i.value,o.value,l.value,n.class],style:[r.value,d.value,s.value,n.style]},t)),{}}}),vo=Symbol.for("vuetify:v-tabs"),gh=T({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Rn(Qa({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Bd=L()({name:"VTab",props:gh(),setup(n,e){let{slots:t,attrs:a}=e;const{textColorClasses:i,textColorStyles:r}=Qn(()=>n.sliderColor),o=U(),l=U(),s=y(()=>n.direction==="horizontal"),u=y(()=>{var p,f;return((f=(p=o.value)==null?void 0:p.group)==null?void 0:f.isSelected.value)??!1});function d(p){var c,g;let{value:f}=p;if(f){const h=(g=(c=o.value)==null?void 0:c.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),x=l.value;if(!h||!x)return;const v=getComputedStyle(h).color,b=h.getBoundingClientRect(),k=x.getBoundingClientRect(),C=s.value?"x":"y",S=s.value?"X":"Y",E=s.value?"right":"bottom",A=s.value?"width":"height",w=b[C],F=k[C],_=w>F?b[E]-k[E]:b[C]-k[C],V=Math.sign(_)>0?s.value?"right":"bottom":Math.sign(_)<0?s.value?"left":"top":"center",I=(Math.abs(_)+(Math.sign(_)<0?b[A]:k[A]))/Math.max(b[A],k[A])||0,M=b[A]/k[A]||0,j=1.5;ie(x,{backgroundColor:[v,"currentcolor"],transform:[`translate${S}(${_}px) scale${S}(${M})`,`translate${S}(${_/j}px) scale${S}(${(I-1)/j+1})`,"none"],transformOrigin:Array(3).fill(V)},{duration:225,easing:Xe})}}return N(()=>{const p=wn.filterProps(n);return m(wn,z({symbol:vo,ref:o,class:["v-tab",n.class],style:n.style,tabindex:u.value?0:-1,role:"tab","aria-selected":String(u.value),active:!1},p,a,{block:n.fixed,maxWidth:n.fixed?300:void 0,"onGroup:selected":d}),{...t,default:()=>{var f;return m(dn,null,[((f=t.default)==null?void 0:f.call(t))??n.text,!n.hideSlider&&m("div",{ref:l,class:["v-tab__slider",i.value],style:r.value},null)])}})}),ht({},o)}}),fh=T({...Rn(ri(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Dd=L()({name:"VTabsWindow",props:fh(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=Sn(vo,null),i=sn(n,"modelValue"),r=y({get(){var o;return i.value!=null||!a?i.value:(o=a.items.value.find(l=>a.selected.value.includes(l.id)))==null?void 0:o.value},set(o){i.value=o}});return N(()=>{const o=se.filterProps(n);return m(se,z({_as:"VTabsWindow"},o,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l,class:["v-tabs-window",n.class],style:n.style,mandatory:!1,touch:!1}),t)}),{}}}),xh=T({...oi()},"VTabsWindowItem"),_d=L()({name:"VTabsWindowItem",props:xh(),setup(n,e){let{slots:t}=e;return N(()=>{const a=de.filterProps(n);return m(de,z({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",n.class],style:n.style}),t)}),{}}});function vh(n){return n?n.map(e=>Ke(e)?e:{text:e,value:e}):[]}const bh=T({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...zr({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Kn(),...xn()},"VTabs"),hh=L()({name:"VTabs",props:bh(),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:a}=e;const i=sn(n,"modelValue"),r=y(()=>vh(n.items)),{densityClasses:o}=rt(n),{backgroundColorClasses:l,backgroundColorStyles:s}=En(()=>n.bgColor),{scopeId:u}=Se();return $n({VTab:{color:B(()=>n.color),direction:B(()=>n.direction),stacked:B(()=>n.stacked),fixed:B(()=>n.fixedTabs),sliderColor:B(()=>n.sliderColor),hideSlider:B(()=>n.hideSlider)}}),N(()=>{const d=aa.filterProps(n),p=!!(a.window||n.items.length>0);return m(dn,null,[m(aa,z(d,{modelValue:i.value,"onUpdate:modelValue":f=>i.value=f,class:["v-tabs",`v-tabs--${n.direction}`,`v-tabs--align-tabs-${n.alignTabs}`,{"v-tabs--fixed-tabs":n.fixedTabs,"v-tabs--grow":n.grow,"v-tabs--stacked":n.stacked},o.value,l.value,n.class],style:[{"--v-tabs-height":an(n.height)},s.value,n.style],role:"tablist",symbol:vo},u,t),{default:()=>{var f;return[((f=a.default)==null?void 0:f.call(a))??r.value.map(c=>{var g;return((g=a.tab)==null?void 0:g.call(a,{item:c}))??m(Bd,z(c,{key:c.text,value:c.value}),{default:a[`tab.${c.value}`]?()=>{var h;return(h=a[`tab.${c.value}`])==null?void 0:h.call(a,{item:c})}:void 0})})]}}),p&&m(Dd,z({modelValue:i.value,"onUpdate:modelValue":f=>i.value=f,key:"tabs-window"},u),{default:()=>{var f;return[r.value.map(c=>{var g;return((g=a.item)==null?void 0:g.call(a,{item:c}))??m(_d,{value:c.value},{default:()=>{var h;return(h=a[`item.${c.value}`])==null?void 0:h.call(a,{item:c})}})}),(f=a.window)==null?void 0:f.call(a)]}})])}),{}}}),yh=T({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:n=>!isNaN(parseFloat(n))},maxRows:{type:[Number,String],validator:n=>!isNaN(parseFloat(n))},suffix:String,modelModifiers:Object,...Wt(),...ba()},"VTextarea"),kh=L()({name:"VTextarea",directives:{Intersect:da},inheritAttrs:!1,props:yh(),emits:{"click:control":n=>!0,"mousedown:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:a,slots:i}=e;const r=sn(n,"modelValue"),{isFocused:o,focus:l,blur:s}=_t(n),u=y(()=>typeof n.counterValue=="function"?n.counterValue(r.value):(r.value||"").toString().length),d=y(()=>{if(t.maxlength)return t.maxlength;if(!(!n.counter||typeof n.counter!="number"&&typeof n.counter!="string"))return n.counter});function p(V,P){var I,M;!n.autofocus||!V||(M=(I=P[0].target)==null?void 0:I.focus)==null||M.call(I)}const f=U(),c=U(),g=X(""),h=U(),x=y(()=>n.persistentPlaceholder||o.value||n.active);function v(){var V;h.value!==document.activeElement&&((V=h.value)==null||V.focus()),o.value||l()}function b(V){v(),a("click:control",V)}function k(V){a("mousedown:control",V)}function C(V){V.stopPropagation(),v(),Fn(()=>{r.value="",Ya(n["onClick:clear"],V)})}function S(V){var I;const P=V.target;if(r.value=P.value,(I=n.modelModifiers)!=null&&I.trim){const M=[P.selectionStart,P.selectionEnd];Fn(()=>{P.selectionStart=M[0],P.selectionEnd=M[1]})}}const E=U(),A=U(Number(n.rows)),w=y(()=>["plain","underlined"].includes(n.variant));Mn(()=>{n.autoGrow||(A.value=Number(n.rows))});function F(){n.autoGrow&&Fn(()=>{if(!E.value||!c.value)return;const V=getComputedStyle(E.value),P=getComputedStyle(c.value.$el),I=parseFloat(V.getPropertyValue("--v-field-padding-top"))+parseFloat(V.getPropertyValue("--v-input-padding-top"))+parseFloat(V.getPropertyValue("--v-field-padding-bottom")),M=E.value.scrollHeight,j=parseFloat(V.lineHeight),W=Math.max(parseFloat(n.rows)*j+I,parseFloat(P.getPropertyValue("--v-input-control-height"))),nn=parseFloat(n.maxRows)*j+I||1/0,Q=Dn(M??0,W,nn);A.value=Math.floor((Q-I)/j),g.value=an(Q)})}it(F),tn(r,F),tn(()=>n.rows,F),tn(()=>n.maxRows,F),tn(()=>n.density,F);let _;return tn(E,V=>{V?(_=new ResizeObserver(F),_.observe(E.value)):_==null||_.disconnect()}),tt(()=>{_==null||_.disconnect()}),N(()=>{const V=!!(i.counter||n.counter||n.counterValue),P=!!(V||i.details),[I,M]=Jt(t),{modelValue:j,...W}=nt.filterProps(n),nn=qt.filterProps(n);return m(nt,z({ref:f,modelValue:r.value,"onUpdate:modelValue":Q=>r.value=Q,class:["v-textarea v-text-field",{"v-textarea--prefixed":n.prefix,"v-textarea--suffixed":n.suffix,"v-text-field--prefixed":n.prefix,"v-text-field--suffixed":n.suffix,"v-textarea--auto-grow":n.autoGrow,"v-textarea--no-resize":n.noResize||n.autoGrow,"v-input--plain-underlined":w.value},n.class],style:n.style},I,W,{centerAffix:A.value===1&&!w.value,focused:o.value}),{...i,default:Q=>{let{id:G,isDisabled:R,isDirty:D,isReadonly:$,isValid:K}=Q;return m(qt,z({ref:c,style:{"--v-textarea-control-height":g.value},onClick:b,onMousedown:k,"onClick:clear":C,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"]},nn,{id:G.value,active:x.value||D.value,centerAffix:A.value===1&&!w.value,dirty:D.value||n.dirty,disabled:R.value,focused:o.value,error:K.value===!1}),{...i,default:J=>{let{props:{class:ln,...Z}}=J;return m(dn,null,[n.prefix&&m("span",{class:"v-text-field__prefix"},[n.prefix]),Tn(m("textarea",z({ref:h,class:ln,value:r.value,onInput:S,autofocus:n.autofocus,readonly:$.value,disabled:R.value,placeholder:n.placeholder,rows:n.rows,name:n.name,onFocus:v,onBlur:s},Z,M),null),[[ft("intersect"),{handler:p},null,{once:!0}]]),n.autoGrow&&Tn(m("textarea",{class:[ln,"v-textarea__sizer"],id:`${Z.id}-sizer`,"onUpdate:modelValue":q=>r.value=q,ref:E,readonly:!0,"aria-hidden":"true"},null),[[eu,r.value]]),n.suffix&&m("span",{class:"v-text-field__suffix"},[n.suffix])])}})},details:P?Q=>{var G;return m(dn,null,[(G=i.details)==null?void 0:G.call(i,Q),V&&m(dn,null,[m("span",null,null),m(ai,{active:n.persistentCounter||o.value,value:u.value,max:d.value,disabled:n.disabled},i.counter)])])}:void 0})}),ht({},f,c,h)}}),wh=T({withBackground:Boolean,...rn(),...kn(),...xn()},"VThemeProvider"),Sh=L()({name:"VThemeProvider",props:wh(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n);return()=>{var i;return n.withBackground?m(n.tag,{class:["v-theme-provider",a.value,n.class],style:n.style},{default:()=>{var r;return[(r=t.default)==null?void 0:r.call(t)]}}):(i=t.default)==null?void 0:i.call(t)}}}),Fh=T({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:un,iconColor:String,lineColor:String,...rn(),...Bn(),...Dt(),...Gn()},"VTimelineDivider"),Ch=L()({name:"VTimelineDivider",props:Fh(),setup(n,e){let{slots:t}=e;const{sizeClasses:a,sizeStyles:i}=Le(n,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:o}=En(()=>n.dotColor),{roundedClasses:l}=Ln(n,"v-timeline-divider__dot"),{elevationClasses:s}=Zn(n),{backgroundColorClasses:u,backgroundColorStyles:d}=En(()=>n.lineColor);return N(()=>m("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":n.fillDot},n.class],style:n.style},[m("div",{class:["v-timeline-divider__before",u.value],style:d.value},null),!n.hideDot&&m("div",{key:"dot",class:["v-timeline-divider__dot",s.value,l.value,a.value],style:i.value},[m("div",{class:["v-timeline-divider__inner-dot",o.value,l.value],style:r.value},[t.default?m(vn,{key:"icon-defaults",disabled:!n.icon,defaults:{VIcon:{color:n.iconColor,icon:n.icon,size:n.size}}},t.default):m(Vn,{key:"icon",color:n.iconColor,icon:n.icon,size:n.size},null)])]),m("div",{class:["v-timeline-divider__after",u.value],style:d.value},null)])),{}}}),Td=T({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:un,iconColor:String,lineInset:[Number,String],side:{type:String,validator:n=>n==null||["start","end"].includes(n)},...rn(),...Wn(),...Gn(),...Bn(),...Dt(),...xn()},"VTimelineItem"),Vh=L()({name:"VTimelineItem",props:Td(),setup(n,e){let{slots:t}=e;const{dimensionStyles:a}=Yn(n),i=X(0),r=U();return tn(r,o=>{var l;o&&(i.value=((l=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),N(()=>{var o,l;return m("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":n.fillDot,"v-timeline-item--side-start":n.side==="start","v-timeline-item--side-end":n.side==="end"},n.class],style:[{"--v-timeline-dot-size":an(i.value),"--v-timeline-line-inset":n.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${an(n.lineInset)})`:an(0)},n.style]},[m("div",{class:"v-timeline-item__body",style:a.value},[(o=t.default)==null?void 0:o.call(t)]),m(Ch,{ref:r,hideDot:n.hideDot,icon:n.icon,iconColor:n.iconColor,size:n.size,elevation:n.elevation,dotColor:n.dotColor,fillDot:n.fillDot,rounded:n.rounded},{default:t.icon}),n.density!=="compact"&&m("div",{class:"v-timeline-item__opposite"},[!n.hideOpposite&&((l=t.opposite)==null?void 0:l.call(t))])])}),{}}}),Ph=T({align:{type:String,default:"center",validator:n=>["center","start"].includes(n)},direction:{type:String,default:"vertical",validator:n=>["vertical","horizontal"].includes(n)},justify:{type:String,default:"auto",validator:n=>["auto","center"].includes(n)},side:{type:String,validator:n=>n==null||["start","end"].includes(n)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:n=>["start","end","both"].includes(n)},...Zt(Td({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...rn(),...Kn(),...xn(),...kn()},"VTimeline"),Ih=L()({name:"VTimeline",props:Ph(),setup(n,e){let{slots:t}=e;const{themeClasses:a}=Pn(n),{densityClasses:i}=rt(n),{rtlClasses:r}=Hn();$n({VTimelineDivider:{lineColor:B(()=>n.lineColor)},VTimelineItem:{density:B(()=>n.density),dotColor:B(()=>n.dotColor),fillDot:B(()=>n.fillDot),hideOpposite:B(()=>n.hideOpposite),iconColor:B(()=>n.iconColor),lineColor:B(()=>n.lineColor),lineInset:B(()=>n.lineInset),size:B(()=>n.size)}});const o=y(()=>{const s=n.side?n.side:n.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),l=y(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(n.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return N(()=>m(n.tag,{class:["v-timeline",`v-timeline--${n.direction}`,`v-timeline--align-${n.align}`,`v-timeline--justify-${n.justify}`,l.value,{"v-timeline--inset-line":!!n.lineInset},a.value,i.value,o.value,r.value,n.class],style:[{"--v-timeline-line-thickness":an(n.lineThickness)},n.style]},t)),{}}}),Eh=T({...rn(),...kt({variant:"text"})},"VToolbarItems"),Ah=L()({name:"VToolbarItems",props:Eh(),setup(n,e){let{slots:t}=e;return $n({VBtn:{color:B(()=>n.color),height:"inherit",variant:B(()=>n.variant)}}),N(()=>{var a;return m("div",{class:["v-toolbar-items",n.class],style:n.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Bh=T({id:String,interactive:Boolean,text:String,...Rn(va({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:null}),["absolute","persistent"])},"VTooltip"),Md=L()({name:"VTooltip",props:Bh(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=sn(n,"modelValue"),{scopeId:i}=Se(),r=st(),o=B(()=>n.id||`v-tooltip-${r}`),l=U(),s=y(()=>n.location.split(" ").length>1?n.location:n.location+" center"),u=y(()=>n.origin==="auto"||n.origin==="overlap"||n.origin.split(" ").length>1||n.location.split(" ").length>1?n.origin:n.origin+" center"),d=B(()=>n.transition!=null?n.transition:a.value?"scale-transition":"fade-transition"),p=y(()=>z({"aria-describedby":o.value},n.activatorProps));return N(()=>{const f=Et.filterProps(n);return m(Et,z({ref:l,class:["v-tooltip",{"v-tooltip--interactive":n.interactive},n.class],style:n.style,id:o.value},f,{modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,transition:d.value,absolute:!0,location:s.value,origin:u.value,persistent:!0,role:"tooltip",activatorProps:p.value,_disableGlobalStack:!0},i),{activator:t.activator,default:function(){var x;for(var c=arguments.length,g=new Array(c),h=0;h<c;h++)g[h]=arguments[h];return((x=t.default)==null?void 0:x.call(t,...g))??n.text}})}),ht({},l)}}),Dh=L()({name:"VValidation",props:Am(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const a=Bm(n,"validation");return()=>{var i;return(i=t.default)==null?void 0:i.call(t,a)}}}),_h=Object.freeze(Object.defineProperty({__proto__:null,VAlert:uc,VAlertTitle:Sm,VApp:gp,VAppBar:Tp,VAppBarNavIcon:lc,VAppBarTitle:mc,VAutocomplete:$g,VAvatar:yt,VBadge:Lg,VBanner:jg,VBannerActions:us,VBannerText:ps,VBottomNavigation:Wg,VBottomSheet:Gg,VBreadcrumbs:Xg,VBreadcrumbsDivider:gs,VBreadcrumbsItem:fs,VBtn:wn,VBtnGroup:zi,VBtnToggle:zp,VCard:tf,VCardActions:xs,VCardItem:hs,VCardSubtitle:vs,VCardText:ys,VCardTitle:bs,VCarousel:uf,VCarouselItem:cf,VCheckbox:yc,VCheckboxBtn:Lt,VChip:He,VChipGroup:Bc,VClassIcon:$r,VCode:gf,VCol:Cv,VColorPicker:Lx,VCombobox:Nx,VComponentIcon:ji,VConfirmEdit:Hx,VContainer:kv,VCounter:ai,VDataIterator:Qx,VDataTable:fv,VDataTableFooter:oa,VDataTableHeaders:ue,VDataTableRow:uo,VDataTableRows:pe,VDataTableServer:hv,VDataTableVirtual:vv,VDatePicker:$v,VDatePickerControls:sr,VDatePickerHeader:dr,VDatePickerMonth:ur,VDatePickerMonths:pr,VDatePickerYears:cr,VDefaultsProvider:vn,VDialog:Zi,VDialogBottomTransition:bp,VDialogTopTransition:hp,VDialogTransition:Ua,VDivider:Mt,VEmptyState:Lv,VExpandTransition:Ka,VExpandXTransition:_r,VExpansionPanel:zv,VExpansionPanelText:gr,VExpansionPanelTitle:fr,VExpansionPanels:Hv,VFab:Yv,VFabTransition:vp,VFadeTransition:Qe,VField:qt,VFieldLabel:Ye,VFileInput:Uv,VFooter:qv,VForm:xr,VHover:Jv,VIcon:Vn,VImg:Ot,VInfiniteScroll:nb,VInput:nt,VItem:ab,VItemGroup:eb,VKbd:ib,VLabel:je,VLayout:ob,VLayoutItem:mb,VLazy:db,VLigatureIcon:Hp,VList:ei,VListGroup:Ui,VListImg:Qc,VListItem:zt,VListItemAction:tg,VListItemMedia:ag,VListItemSubtitle:Gm,VListItemTitle:Um,VListSubheader:Km,VLocaleProvider:pb,VMain:gb,VMenu:Re,VMessages:Im,VNavigationDrawer:Sb,VNoSsr:Fb,VNumberInput:Eb,VOtpInput:Bb,VOverlay:Et,VPagination:lr,VParallax:Tb,VProgressCircular:Me,VProgressLinear:Za,VRadio:Rb,VRadioGroup:Ob,VRangeSlider:zb,VRating:jb,VResponsive:Oi,VRow:Dv,VScaleTransition:Br,VScrollXReverseTransition:kp,VScrollXTransition:yp,VScrollYReverseTransition:Sp,VScrollYTransition:wp,VSelect:Xr,VSelectionControl:Kt,VSelectionControlGroup:Cm,VSheet:ra,VSkeletonLoader:Gb,VSlideGroup:aa,VSlideGroupItem:Ub,VSlideXReverseTransition:Cp,VSlideXTransition:Fp,VSlideYReverseTransition:Vp,VSlideYTransition:Dr,VSlider:er,VSnackbar:vr,VSnackbarQueue:Xb,VSpacer:pd,VSparkline:nh,VSpeedDial:eh,VStepper:sh,VStepperActions:Vd,VStepperHeader:Pd,VStepperItem:Id,VStepperWindow:Ed,VStepperWindowItem:Ad,VSvgIcon:Rr,VSwitch:uh,VSystemBar:ch,VTab:Bd,VTable:ce,VTabs:hh,VTabsWindow:Dd,VTabsWindowItem:_d,VTextField:Nt,VTextarea:kh,VThemeProvider:Sh,VTimeline:Ih,VTimelineItem:Vh,VToolbar:Li,VToolbarItems:Ah,VToolbarTitle:Ar,VTooltip:Md,VValidation:Dh,VVirtualScroll:ii,VWindow:se,VWindowItem:de},Symbol.toStringTag,{value:"Module"}));function wl(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Fl(n)}const Th={input:"text-field","input-number":"number-input","input-tag":"combobox",checks:"checkbox-group",radios:"radio-group",chips:"chip-group"},{FormRender:Mh}=jd({Form:xr,formName:"VFormRender",formProps:xr.props,FormItem:(n,{slots:e})=>{var t;return(t=e.default)==null?void 0:t.call(e)},formItemName:"VFormItemRender",formItemProps:{},Input:(n,{attrs:e})=>{let{type:t,options:a,el:i,...r}=n;i&&Object.assign(r,e,i),t=Th[t]||t;const o=`v-${t||"text-field"}`;if(!n.options)return m(Ge(o),r);if(a=Hd(a),i!=null&&i.is)return m(Ge(o),{items:a,...r});if(t=="select"||!t)return m(pt("v-select"),z(r,{items:a.map(l=>({...l,title:l.label}))}),null);if(t=="combobox")return m(pt("v-combobox"),z(r,{items:a.map(l=>l.label)}),null);if(t=="checkbox-group")return m(pt("v-input"),z({class:"v-radio-group"},r),{default:()=>[m(pt("v-label"),{text:r.label,style:"margin-inline-start: 16px"},null),m("div",{class:"v-selection-control-group v-selection-control-group--inline",style:["padding-inline-start: 6px; --v-selection-control-size: 40px"]},[a.map(l=>m(pt("v-checkbox"),z({multiple:!0,density:r.density||e.density,style:"--v-input-control-height: 40px"},l,iu(r,["modelValue","onUpdate:modelValue"]),{"hide-details":!0}),null))])]});if(t=="radio-group"){let l;return m(pt("v-radio-group"),z({inline:!0},r),wl(l=a.map(s=>m(pt("v-radio"),s,null)))?l:{default:()=>[l]})}else if(t=="chip-group"){let l;return m(pt("v-input"),z({class:"v-radio-group"},r),{default:()=>[m(pt("v-label"),{text:r.label,style:"margin-inline-start: 16px"},null),m(pt("v-chip-group"),z({style:"padding-inline-start: 6px;"},r),wl(l=a.map(s=>m(pt("v-chip"),z({text:s.label},s,{label:void 0}),null)))?l:{default:()=>[l]})]})}else return m(Ge(o),{items:a,...r})}}),Rh={class:"space-x-3"},$h={block:""},Oh={__name:"vuetify.md.DemoBlockI9275a7c8",setup(n){const e=U({});function t(){alert("Success")}return(a,i)=>{const r=pt("v-btn");return Ai(),Il(lt(Mh),{model:e.value,"label-width":"60px",on_submit:t,items:[{lp:["姓名","name"]},{lp:["地址","address"],required:!0},{lp:["区域","area"],options:["Beijing","Shanghai"]},{lp:["年龄","age"],type:"slider"},{lp:["性别","sex"],type:"radios",options:["男","女"]},{lp:["爱好","like"],type:"checks",options:["CODE","LOL"]},{lp:["是否","is"],type:"checkbox"},{lp:["在职","onjob"],type:"switch",color:"primary"},{lp:["标签","tags"],type:"input-tag",options:["影视","音乐","游戏","书籍类型"],multiple:!0},{lp:["标签","tags"],type:"chips",options:["影视","音乐","游戏","书籍类型"],multiple:!0}]},{default:Ae(()=>[O("div",Rh,[m(r,{color:"primary",variant:"elevated",type:"submit"},{default:Ae(()=>i[0]||(i[0]=[bn("Submit")])),_:1}),m(r,{variant:"tonal",type:"reset"},{default:Ae(()=>i[1]||(i[1]=[bn("Reset")])),_:1})]),i[2]||(i[2]=O("br",null,null,-1)),O("code",$h,[O("pre",null,"model: "+$t(JSON.stringify(e.value,null,"  ")),1)])]),_:1},8,["model"])}}},Rd=`@keyframes v-shake {
  59% {
    margin-left: 0;
  }
  60%, 80% {
    margin-left: 2px;
  }
  70%, 90% {
    margin-left: -2px;
  }
}
.bg-black {
  background-color: #000000 !important;
}
.bg-black {
  color: #FFFFFF !important;
}

.bg-white {
  background-color: #FFFFFF !important;
}
.bg-white {
  color: #000000 !important;
}

.bg-transparent {
  background-color: transparent !important;
}
.bg-transparent {
  color: currentColor !important;
}

.bg-red {
  background-color: #F44336 !important;
}
.bg-red {
  color: #FFFFFF !important;
}

.bg-red-lighten-5 {
  background-color: #FFEBEE !important;
}
.bg-red-lighten-5 {
  color: #000000 !important;
}

.bg-red-lighten-4 {
  background-color: #FFCDD2 !important;
}
.bg-red-lighten-4 {
  color: #000000 !important;
}

.bg-red-lighten-3 {
  background-color: #EF9A9A !important;
}
.bg-red-lighten-3 {
  color: #000000 !important;
}

.bg-red-lighten-2 {
  background-color: #E57373 !important;
}
.bg-red-lighten-2 {
  color: #FFFFFF !important;
}

.bg-red-lighten-1 {
  background-color: #EF5350 !important;
}
.bg-red-lighten-1 {
  color: #FFFFFF !important;
}

.bg-red-darken-1 {
  background-color: #E53935 !important;
}
.bg-red-darken-1 {
  color: #FFFFFF !important;
}

.bg-red-darken-2 {
  background-color: #D32F2F !important;
}
.bg-red-darken-2 {
  color: #FFFFFF !important;
}

.bg-red-darken-3 {
  background-color: #C62828 !important;
}
.bg-red-darken-3 {
  color: #FFFFFF !important;
}

.bg-red-darken-4 {
  background-color: #B71C1C !important;
}
.bg-red-darken-4 {
  color: #FFFFFF !important;
}

.bg-red-accent-1 {
  background-color: #FF8A80 !important;
}
.bg-red-accent-1 {
  color: #000000 !important;
}

.bg-red-accent-2 {
  background-color: #FF5252 !important;
}
.bg-red-accent-2 {
  color: #FFFFFF !important;
}

.bg-red-accent-3 {
  background-color: #FF1744 !important;
}
.bg-red-accent-3 {
  color: #FFFFFF !important;
}

.bg-red-accent-4 {
  background-color: #D50000 !important;
}
.bg-red-accent-4 {
  color: #FFFFFF !important;
}

.bg-pink {
  background-color: #e91e63 !important;
}
.bg-pink {
  color: #FFFFFF !important;
}

.bg-pink-lighten-5 {
  background-color: #fce4ec !important;
}
.bg-pink-lighten-5 {
  color: #000000 !important;
}

.bg-pink-lighten-4 {
  background-color: #f8bbd0 !important;
}
.bg-pink-lighten-4 {
  color: #000000 !important;
}

.bg-pink-lighten-3 {
  background-color: #f48fb1 !important;
}
.bg-pink-lighten-3 {
  color: #000000 !important;
}

.bg-pink-lighten-2 {
  background-color: #f06292 !important;
}
.bg-pink-lighten-2 {
  color: #FFFFFF !important;
}

.bg-pink-lighten-1 {
  background-color: #ec407a !important;
}
.bg-pink-lighten-1 {
  color: #FFFFFF !important;
}

.bg-pink-darken-1 {
  background-color: #d81b60 !important;
}
.bg-pink-darken-1 {
  color: #FFFFFF !important;
}

.bg-pink-darken-2 {
  background-color: #c2185b !important;
}
.bg-pink-darken-2 {
  color: #FFFFFF !important;
}

.bg-pink-darken-3 {
  background-color: #ad1457 !important;
}
.bg-pink-darken-3 {
  color: #FFFFFF !important;
}

.bg-pink-darken-4 {
  background-color: #880e4f !important;
}
.bg-pink-darken-4 {
  color: #FFFFFF !important;
}

.bg-pink-accent-1 {
  background-color: #ff80ab !important;
}
.bg-pink-accent-1 {
  color: #FFFFFF !important;
}

.bg-pink-accent-2 {
  background-color: #ff4081 !important;
}
.bg-pink-accent-2 {
  color: #FFFFFF !important;
}

.bg-pink-accent-3 {
  background-color: #f50057 !important;
}
.bg-pink-accent-3 {
  color: #FFFFFF !important;
}

.bg-pink-accent-4 {
  background-color: #c51162 !important;
}
.bg-pink-accent-4 {
  color: #FFFFFF !important;
}

.bg-purple {
  background-color: #9c27b0 !important;
}
.bg-purple {
  color: #FFFFFF !important;
}

.bg-purple-lighten-5 {
  background-color: #f3e5f5 !important;
}
.bg-purple-lighten-5 {
  color: #000000 !important;
}

.bg-purple-lighten-4 {
  background-color: #e1bee7 !important;
}
.bg-purple-lighten-4 {
  color: #000000 !important;
}

.bg-purple-lighten-3 {
  background-color: #ce93d8 !important;
}
.bg-purple-lighten-3 {
  color: #FFFFFF !important;
}

.bg-purple-lighten-2 {
  background-color: #ba68c8 !important;
}
.bg-purple-lighten-2 {
  color: #FFFFFF !important;
}

.bg-purple-lighten-1 {
  background-color: #ab47bc !important;
}
.bg-purple-lighten-1 {
  color: #FFFFFF !important;
}

.bg-purple-darken-1 {
  background-color: #8e24aa !important;
}
.bg-purple-darken-1 {
  color: #FFFFFF !important;
}

.bg-purple-darken-2 {
  background-color: #7b1fa2 !important;
}
.bg-purple-darken-2 {
  color: #FFFFFF !important;
}

.bg-purple-darken-3 {
  background-color: #6a1b9a !important;
}
.bg-purple-darken-3 {
  color: #FFFFFF !important;
}

.bg-purple-darken-4 {
  background-color: #4a148c !important;
}
.bg-purple-darken-4 {
  color: #FFFFFF !important;
}

.bg-purple-accent-1 {
  background-color: #ea80fc !important;
}
.bg-purple-accent-1 {
  color: #FFFFFF !important;
}

.bg-purple-accent-2 {
  background-color: #e040fb !important;
}
.bg-purple-accent-2 {
  color: #FFFFFF !important;
}

.bg-purple-accent-3 {
  background-color: #d500f9 !important;
}
.bg-purple-accent-3 {
  color: #FFFFFF !important;
}

.bg-purple-accent-4 {
  background-color: #aa00ff !important;
}
.bg-purple-accent-4 {
  color: #FFFFFF !important;
}

.bg-deep-purple {
  background-color: #673ab7 !important;
}
.bg-deep-purple {
  color: #FFFFFF !important;
}

.bg-deep-purple-lighten-5 {
  background-color: #ede7f6 !important;
}
.bg-deep-purple-lighten-5 {
  color: #000000 !important;
}

.bg-deep-purple-lighten-4 {
  background-color: #d1c4e9 !important;
}
.bg-deep-purple-lighten-4 {
  color: #000000 !important;
}

.bg-deep-purple-lighten-3 {
  background-color: #b39ddb !important;
}
.bg-deep-purple-lighten-3 {
  color: #FFFFFF !important;
}

.bg-deep-purple-lighten-2 {
  background-color: #9575cd !important;
}
.bg-deep-purple-lighten-2 {
  color: #FFFFFF !important;
}

.bg-deep-purple-lighten-1 {
  background-color: #7e57c2 !important;
}
.bg-deep-purple-lighten-1 {
  color: #FFFFFF !important;
}

.bg-deep-purple-darken-1 {
  background-color: #5e35b1 !important;
}
.bg-deep-purple-darken-1 {
  color: #FFFFFF !important;
}

.bg-deep-purple-darken-2 {
  background-color: #512da8 !important;
}
.bg-deep-purple-darken-2 {
  color: #FFFFFF !important;
}

.bg-deep-purple-darken-3 {
  background-color: #4527a0 !important;
}
.bg-deep-purple-darken-3 {
  color: #FFFFFF !important;
}

.bg-deep-purple-darken-4 {
  background-color: #311b92 !important;
}
.bg-deep-purple-darken-4 {
  color: #FFFFFF !important;
}

.bg-deep-purple-accent-1 {
  background-color: #b388ff !important;
}
.bg-deep-purple-accent-1 {
  color: #FFFFFF !important;
}

.bg-deep-purple-accent-2 {
  background-color: #7c4dff !important;
}
.bg-deep-purple-accent-2 {
  color: #FFFFFF !important;
}

.bg-deep-purple-accent-3 {
  background-color: #651fff !important;
}
.bg-deep-purple-accent-3 {
  color: #FFFFFF !important;
}

.bg-deep-purple-accent-4 {
  background-color: #6200ea !important;
}
.bg-deep-purple-accent-4 {
  color: #FFFFFF !important;
}

.bg-indigo {
  background-color: #3f51b5 !important;
}
.bg-indigo {
  color: #FFFFFF !important;
}

.bg-indigo-lighten-5 {
  background-color: #e8eaf6 !important;
}
.bg-indigo-lighten-5 {
  color: #000000 !important;
}

.bg-indigo-lighten-4 {
  background-color: #c5cae9 !important;
}
.bg-indigo-lighten-4 {
  color: #000000 !important;
}

.bg-indigo-lighten-3 {
  background-color: #9fa8da !important;
}
.bg-indigo-lighten-3 {
  color: #FFFFFF !important;
}

.bg-indigo-lighten-2 {
  background-color: #7986cb !important;
}
.bg-indigo-lighten-2 {
  color: #FFFFFF !important;
}

.bg-indigo-lighten-1 {
  background-color: #5c6bc0 !important;
}
.bg-indigo-lighten-1 {
  color: #FFFFFF !important;
}

.bg-indigo-darken-1 {
  background-color: #3949ab !important;
}
.bg-indigo-darken-1 {
  color: #FFFFFF !important;
}

.bg-indigo-darken-2 {
  background-color: #303f9f !important;
}
.bg-indigo-darken-2 {
  color: #FFFFFF !important;
}

.bg-indigo-darken-3 {
  background-color: #283593 !important;
}
.bg-indigo-darken-3 {
  color: #FFFFFF !important;
}

.bg-indigo-darken-4 {
  background-color: #1a237e !important;
}
.bg-indigo-darken-4 {
  color: #FFFFFF !important;
}

.bg-indigo-accent-1 {
  background-color: #8c9eff !important;
}
.bg-indigo-accent-1 {
  color: #FFFFFF !important;
}

.bg-indigo-accent-2 {
  background-color: #536dfe !important;
}
.bg-indigo-accent-2 {
  color: #FFFFFF !important;
}

.bg-indigo-accent-3 {
  background-color: #3d5afe !important;
}
.bg-indigo-accent-3 {
  color: #FFFFFF !important;
}

.bg-indigo-accent-4 {
  background-color: #304ffe !important;
}
.bg-indigo-accent-4 {
  color: #FFFFFF !important;
}

.bg-blue {
  background-color: #2196F3 !important;
}
.bg-blue {
  color: #FFFFFF !important;
}

.bg-blue-lighten-5 {
  background-color: #E3F2FD !important;
}
.bg-blue-lighten-5 {
  color: #000000 !important;
}

.bg-blue-lighten-4 {
  background-color: #BBDEFB !important;
}
.bg-blue-lighten-4 {
  color: #000000 !important;
}

.bg-blue-lighten-3 {
  background-color: #90CAF9 !important;
}
.bg-blue-lighten-3 {
  color: #000000 !important;
}

.bg-blue-lighten-2 {
  background-color: #64B5F6 !important;
}
.bg-blue-lighten-2 {
  color: #000000 !important;
}

.bg-blue-lighten-1 {
  background-color: #42A5F5 !important;
}
.bg-blue-lighten-1 {
  color: #FFFFFF !important;
}

.bg-blue-darken-1 {
  background-color: #1E88E5 !important;
}
.bg-blue-darken-1 {
  color: #FFFFFF !important;
}

.bg-blue-darken-2 {
  background-color: #1976D2 !important;
}
.bg-blue-darken-2 {
  color: #FFFFFF !important;
}

.bg-blue-darken-3 {
  background-color: #1565C0 !important;
}
.bg-blue-darken-3 {
  color: #FFFFFF !important;
}

.bg-blue-darken-4 {
  background-color: #0D47A1 !important;
}
.bg-blue-darken-4 {
  color: #FFFFFF !important;
}

.bg-blue-accent-1 {
  background-color: #82B1FF !important;
}
.bg-blue-accent-1 {
  color: #000000 !important;
}

.bg-blue-accent-2 {
  background-color: #448AFF !important;
}
.bg-blue-accent-2 {
  color: #FFFFFF !important;
}

.bg-blue-accent-3 {
  background-color: #2979FF !important;
}
.bg-blue-accent-3 {
  color: #FFFFFF !important;
}

.bg-blue-accent-4 {
  background-color: #2962FF !important;
}
.bg-blue-accent-4 {
  color: #FFFFFF !important;
}

.bg-light-blue {
  background-color: #03a9f4 !important;
}
.bg-light-blue {
  color: #FFFFFF !important;
}

.bg-light-blue-lighten-5 {
  background-color: #e1f5fe !important;
}
.bg-light-blue-lighten-5 {
  color: #000000 !important;
}

.bg-light-blue-lighten-4 {
  background-color: #b3e5fc !important;
}
.bg-light-blue-lighten-4 {
  color: #000000 !important;
}

.bg-light-blue-lighten-3 {
  background-color: #81d4fa !important;
}
.bg-light-blue-lighten-3 {
  color: #000000 !important;
}

.bg-light-blue-lighten-2 {
  background-color: #4fc3f7 !important;
}
.bg-light-blue-lighten-2 {
  color: #000000 !important;
}

.bg-light-blue-lighten-1 {
  background-color: #29b6f6 !important;
}
.bg-light-blue-lighten-1 {
  color: #000000 !important;
}

.bg-light-blue-darken-1 {
  background-color: #039be5 !important;
}
.bg-light-blue-darken-1 {
  color: #FFFFFF !important;
}

.bg-light-blue-darken-2 {
  background-color: #0288d1 !important;
}
.bg-light-blue-darken-2 {
  color: #FFFFFF !important;
}

.bg-light-blue-darken-3 {
  background-color: #0277bd !important;
}
.bg-light-blue-darken-3 {
  color: #FFFFFF !important;
}

.bg-light-blue-darken-4 {
  background-color: #01579b !important;
}
.bg-light-blue-darken-4 {
  color: #FFFFFF !important;
}

.bg-light-blue-accent-1 {
  background-color: #80d8ff !important;
}
.bg-light-blue-accent-1 {
  color: #000000 !important;
}

.bg-light-blue-accent-2 {
  background-color: #40c4ff !important;
}
.bg-light-blue-accent-2 {
  color: #000000 !important;
}

.bg-light-blue-accent-3 {
  background-color: #00b0ff !important;
}
.bg-light-blue-accent-3 {
  color: #FFFFFF !important;
}

.bg-light-blue-accent-4 {
  background-color: #0091ea !important;
}
.bg-light-blue-accent-4 {
  color: #FFFFFF !important;
}

.bg-cyan {
  background-color: #00bcd4 !important;
}
.bg-cyan {
  color: #000000 !important;
}

.bg-cyan-lighten-5 {
  background-color: #e0f7fa !important;
}
.bg-cyan-lighten-5 {
  color: #000000 !important;
}

.bg-cyan-lighten-4 {
  background-color: #b2ebf2 !important;
}
.bg-cyan-lighten-4 {
  color: #000000 !important;
}

.bg-cyan-lighten-3 {
  background-color: #80deea !important;
}
.bg-cyan-lighten-3 {
  color: #000000 !important;
}

.bg-cyan-lighten-2 {
  background-color: #4dd0e1 !important;
}
.bg-cyan-lighten-2 {
  color: #000000 !important;
}

.bg-cyan-lighten-1 {
  background-color: #26c6da !important;
}
.bg-cyan-lighten-1 {
  color: #000000 !important;
}

.bg-cyan-darken-1 {
  background-color: #00acc1 !important;
}
.bg-cyan-darken-1 {
  color: #FFFFFF !important;
}

.bg-cyan-darken-2 {
  background-color: #0097a7 !important;
}
.bg-cyan-darken-2 {
  color: #FFFFFF !important;
}

.bg-cyan-darken-3 {
  background-color: #00838f !important;
}
.bg-cyan-darken-3 {
  color: #FFFFFF !important;
}

.bg-cyan-darken-4 {
  background-color: #006064 !important;
}
.bg-cyan-darken-4 {
  color: #FFFFFF !important;
}

.bg-cyan-accent-1 {
  background-color: #84ffff !important;
}
.bg-cyan-accent-1 {
  color: #000000 !important;
}

.bg-cyan-accent-2 {
  background-color: #18ffff !important;
}
.bg-cyan-accent-2 {
  color: #000000 !important;
}

.bg-cyan-accent-3 {
  background-color: #00e5ff !important;
}
.bg-cyan-accent-3 {
  color: #000000 !important;
}

.bg-cyan-accent-4 {
  background-color: #00b8d4 !important;
}
.bg-cyan-accent-4 {
  color: #FFFFFF !important;
}

.bg-teal {
  background-color: #009688 !important;
}
.bg-teal {
  color: #FFFFFF !important;
}

.bg-teal-lighten-5 {
  background-color: #e0f2f1 !important;
}
.bg-teal-lighten-5 {
  color: #000000 !important;
}

.bg-teal-lighten-4 {
  background-color: #b2dfdb !important;
}
.bg-teal-lighten-4 {
  color: #000000 !important;
}

.bg-teal-lighten-3 {
  background-color: #80cbc4 !important;
}
.bg-teal-lighten-3 {
  color: #000000 !important;
}

.bg-teal-lighten-2 {
  background-color: #4db6ac !important;
}
.bg-teal-lighten-2 {
  color: #FFFFFF !important;
}

.bg-teal-lighten-1 {
  background-color: #26a69a !important;
}
.bg-teal-lighten-1 {
  color: #FFFFFF !important;
}

.bg-teal-darken-1 {
  background-color: #00897b !important;
}
.bg-teal-darken-1 {
  color: #FFFFFF !important;
}

.bg-teal-darken-2 {
  background-color: #00796b !important;
}
.bg-teal-darken-2 {
  color: #FFFFFF !important;
}

.bg-teal-darken-3 {
  background-color: #00695c !important;
}
.bg-teal-darken-3 {
  color: #FFFFFF !important;
}

.bg-teal-darken-4 {
  background-color: #004d40 !important;
}
.bg-teal-darken-4 {
  color: #FFFFFF !important;
}

.bg-teal-accent-1 {
  background-color: #a7ffeb !important;
}
.bg-teal-accent-1 {
  color: #000000 !important;
}

.bg-teal-accent-2 {
  background-color: #64ffda !important;
}
.bg-teal-accent-2 {
  color: #000000 !important;
}

.bg-teal-accent-3 {
  background-color: #1de9b6 !important;
}
.bg-teal-accent-3 {
  color: #000000 !important;
}

.bg-teal-accent-4 {
  background-color: #00bfa5 !important;
}
.bg-teal-accent-4 {
  color: #FFFFFF !important;
}

.bg-green {
  background-color: #4CAF50 !important;
}
.bg-green {
  color: #FFFFFF !important;
}

.bg-green-lighten-5 {
  background-color: #E8F5E9 !important;
}
.bg-green-lighten-5 {
  color: #000000 !important;
}

.bg-green-lighten-4 {
  background-color: #C8E6C9 !important;
}
.bg-green-lighten-4 {
  color: #000000 !important;
}

.bg-green-lighten-3 {
  background-color: #A5D6A7 !important;
}
.bg-green-lighten-3 {
  color: #000000 !important;
}

.bg-green-lighten-2 {
  background-color: #81C784 !important;
}
.bg-green-lighten-2 {
  color: #000000 !important;
}

.bg-green-lighten-1 {
  background-color: #66BB6A !important;
}
.bg-green-lighten-1 {
  color: #FFFFFF !important;
}

.bg-green-darken-1 {
  background-color: #43A047 !important;
}
.bg-green-darken-1 {
  color: #FFFFFF !important;
}

.bg-green-darken-2 {
  background-color: #388E3C !important;
}
.bg-green-darken-2 {
  color: #FFFFFF !important;
}

.bg-green-darken-3 {
  background-color: #2E7D32 !important;
}
.bg-green-darken-3 {
  color: #FFFFFF !important;
}

.bg-green-darken-4 {
  background-color: #1B5E20 !important;
}
.bg-green-darken-4 {
  color: #FFFFFF !important;
}

.bg-green-accent-1 {
  background-color: #B9F6CA !important;
}
.bg-green-accent-1 {
  color: #000000 !important;
}

.bg-green-accent-2 {
  background-color: #69F0AE !important;
}
.bg-green-accent-2 {
  color: #000000 !important;
}

.bg-green-accent-3 {
  background-color: #00E676 !important;
}
.bg-green-accent-3 {
  color: #000000 !important;
}

.bg-green-accent-4 {
  background-color: #00C853 !important;
}
.bg-green-accent-4 {
  color: #000000 !important;
}

.bg-light-green {
  background-color: #8bc34a !important;
}
.bg-light-green {
  color: #000000 !important;
}

.bg-light-green-lighten-5 {
  background-color: #f1f8e9 !important;
}
.bg-light-green-lighten-5 {
  color: #000000 !important;
}

.bg-light-green-lighten-4 {
  background-color: #dcedc8 !important;
}
.bg-light-green-lighten-4 {
  color: #000000 !important;
}

.bg-light-green-lighten-3 {
  background-color: #c5e1a5 !important;
}
.bg-light-green-lighten-3 {
  color: #000000 !important;
}

.bg-light-green-lighten-2 {
  background-color: #aed581 !important;
}
.bg-light-green-lighten-2 {
  color: #000000 !important;
}

.bg-light-green-lighten-1 {
  background-color: #9ccc65 !important;
}
.bg-light-green-lighten-1 {
  color: #000000 !important;
}

.bg-light-green-darken-1 {
  background-color: #7cb342 !important;
}
.bg-light-green-darken-1 {
  color: #FFFFFF !important;
}

.bg-light-green-darken-2 {
  background-color: #689f38 !important;
}
.bg-light-green-darken-2 {
  color: #FFFFFF !important;
}

.bg-light-green-darken-3 {
  background-color: #558b2f !important;
}
.bg-light-green-darken-3 {
  color: #FFFFFF !important;
}

.bg-light-green-darken-4 {
  background-color: #33691e !important;
}
.bg-light-green-darken-4 {
  color: #FFFFFF !important;
}

.bg-light-green-accent-1 {
  background-color: #ccff90 !important;
}
.bg-light-green-accent-1 {
  color: #000000 !important;
}

.bg-light-green-accent-2 {
  background-color: #b2ff59 !important;
}
.bg-light-green-accent-2 {
  color: #000000 !important;
}

.bg-light-green-accent-3 {
  background-color: #76ff03 !important;
}
.bg-light-green-accent-3 {
  color: #000000 !important;
}

.bg-light-green-accent-4 {
  background-color: #64dd17 !important;
}
.bg-light-green-accent-4 {
  color: #000000 !important;
}

.bg-lime {
  background-color: #cddc39 !important;
}
.bg-lime {
  color: #000000 !important;
}

.bg-lime-lighten-5 {
  background-color: #f9fbe7 !important;
}
.bg-lime-lighten-5 {
  color: #000000 !important;
}

.bg-lime-lighten-4 {
  background-color: #f0f4c3 !important;
}
.bg-lime-lighten-4 {
  color: #000000 !important;
}

.bg-lime-lighten-3 {
  background-color: #e6ee9c !important;
}
.bg-lime-lighten-3 {
  color: #000000 !important;
}

.bg-lime-lighten-2 {
  background-color: #dce775 !important;
}
.bg-lime-lighten-2 {
  color: #000000 !important;
}

.bg-lime-lighten-1 {
  background-color: #d4e157 !important;
}
.bg-lime-lighten-1 {
  color: #000000 !important;
}

.bg-lime-darken-1 {
  background-color: #c0ca33 !important;
}
.bg-lime-darken-1 {
  color: #000000 !important;
}

.bg-lime-darken-2 {
  background-color: #afb42b !important;
}
.bg-lime-darken-2 {
  color: #000000 !important;
}

.bg-lime-darken-3 {
  background-color: #9e9d24 !important;
}
.bg-lime-darken-3 {
  color: #FFFFFF !important;
}

.bg-lime-darken-4 {
  background-color: #827717 !important;
}
.bg-lime-darken-4 {
  color: #FFFFFF !important;
}

.bg-lime-accent-1 {
  background-color: #f4ff81 !important;
}
.bg-lime-accent-1 {
  color: #000000 !important;
}

.bg-lime-accent-2 {
  background-color: #eeff41 !important;
}
.bg-lime-accent-2 {
  color: #000000 !important;
}

.bg-lime-accent-3 {
  background-color: #c6ff00 !important;
}
.bg-lime-accent-3 {
  color: #000000 !important;
}

.bg-lime-accent-4 {
  background-color: #aeea00 !important;
}
.bg-lime-accent-4 {
  color: #000000 !important;
}

.bg-yellow {
  background-color: #ffeb3b !important;
}
.bg-yellow {
  color: #000000 !important;
}

.bg-yellow-lighten-5 {
  background-color: #fffde7 !important;
}
.bg-yellow-lighten-5 {
  color: #000000 !important;
}

.bg-yellow-lighten-4 {
  background-color: #fff9c4 !important;
}
.bg-yellow-lighten-4 {
  color: #000000 !important;
}

.bg-yellow-lighten-3 {
  background-color: #fff59d !important;
}
.bg-yellow-lighten-3 {
  color: #000000 !important;
}

.bg-yellow-lighten-2 {
  background-color: #fff176 !important;
}
.bg-yellow-lighten-2 {
  color: #000000 !important;
}

.bg-yellow-lighten-1 {
  background-color: #ffee58 !important;
}
.bg-yellow-lighten-1 {
  color: #000000 !important;
}

.bg-yellow-darken-1 {
  background-color: #fdd835 !important;
}
.bg-yellow-darken-1 {
  color: #000000 !important;
}

.bg-yellow-darken-2 {
  background-color: #fbc02d !important;
}
.bg-yellow-darken-2 {
  color: #000000 !important;
}

.bg-yellow-darken-3 {
  background-color: #f9a825 !important;
}
.bg-yellow-darken-3 {
  color: #000000 !important;
}

.bg-yellow-darken-4 {
  background-color: #f57f17 !important;
}
.bg-yellow-darken-4 {
  color: #FFFFFF !important;
}

.bg-yellow-accent-1 {
  background-color: #ffff8d !important;
}
.bg-yellow-accent-1 {
  color: #000000 !important;
}

.bg-yellow-accent-2 {
  background-color: #ffff00 !important;
}
.bg-yellow-accent-2 {
  color: #000000 !important;
}

.bg-yellow-accent-3 {
  background-color: #ffea00 !important;
}
.bg-yellow-accent-3 {
  color: #000000 !important;
}

.bg-yellow-accent-4 {
  background-color: #ffd600 !important;
}
.bg-yellow-accent-4 {
  color: #000000 !important;
}

.bg-amber {
  background-color: #ffc107 !important;
}
.bg-amber {
  color: #000000 !important;
}

.bg-amber-lighten-5 {
  background-color: #fff8e1 !important;
}
.bg-amber-lighten-5 {
  color: #000000 !important;
}

.bg-amber-lighten-4 {
  background-color: #ffecb3 !important;
}
.bg-amber-lighten-4 {
  color: #000000 !important;
}

.bg-amber-lighten-3 {
  background-color: #ffe082 !important;
}
.bg-amber-lighten-3 {
  color: #000000 !important;
}

.bg-amber-lighten-2 {
  background-color: #ffd54f !important;
}
.bg-amber-lighten-2 {
  color: #000000 !important;
}

.bg-amber-lighten-1 {
  background-color: #ffca28 !important;
}
.bg-amber-lighten-1 {
  color: #000000 !important;
}

.bg-amber-darken-1 {
  background-color: #ffb300 !important;
}
.bg-amber-darken-1 {
  color: #000000 !important;
}

.bg-amber-darken-2 {
  background-color: #ffa000 !important;
}
.bg-amber-darken-2 {
  color: #000000 !important;
}

.bg-amber-darken-3 {
  background-color: #ff8f00 !important;
}
.bg-amber-darken-3 {
  color: #000000 !important;
}

.bg-amber-darken-4 {
  background-color: #ff6f00 !important;
}
.bg-amber-darken-4 {
  color: #FFFFFF !important;
}

.bg-amber-accent-1 {
  background-color: #ffe57f !important;
}
.bg-amber-accent-1 {
  color: #000000 !important;
}

.bg-amber-accent-2 {
  background-color: #ffd740 !important;
}
.bg-amber-accent-2 {
  color: #000000 !important;
}

.bg-amber-accent-3 {
  background-color: #ffc400 !important;
}
.bg-amber-accent-3 {
  color: #000000 !important;
}

.bg-amber-accent-4 {
  background-color: #ffab00 !important;
}
.bg-amber-accent-4 {
  color: #000000 !important;
}

.bg-orange {
  background-color: #ff9800 !important;
}
.bg-orange {
  color: #000000 !important;
}

.bg-orange-lighten-5 {
  background-color: #fff3e0 !important;
}
.bg-orange-lighten-5 {
  color: #000000 !important;
}

.bg-orange-lighten-4 {
  background-color: #ffe0b2 !important;
}
.bg-orange-lighten-4 {
  color: #000000 !important;
}

.bg-orange-lighten-3 {
  background-color: #ffcc80 !important;
}
.bg-orange-lighten-3 {
  color: #000000 !important;
}

.bg-orange-lighten-2 {
  background-color: #ffb74d !important;
}
.bg-orange-lighten-2 {
  color: #000000 !important;
}

.bg-orange-lighten-1 {
  background-color: #ffa726 !important;
}
.bg-orange-lighten-1 {
  color: #000000 !important;
}

.bg-orange-darken-1 {
  background-color: #fb8c00 !important;
}
.bg-orange-darken-1 {
  color: #FFFFFF !important;
}

.bg-orange-darken-2 {
  background-color: #f57c00 !important;
}
.bg-orange-darken-2 {
  color: #FFFFFF !important;
}

.bg-orange-darken-3 {
  background-color: #ef6c00 !important;
}
.bg-orange-darken-3 {
  color: #FFFFFF !important;
}

.bg-orange-darken-4 {
  background-color: #e65100 !important;
}
.bg-orange-darken-4 {
  color: #FFFFFF !important;
}

.bg-orange-accent-1 {
  background-color: #ffd180 !important;
}
.bg-orange-accent-1 {
  color: #000000 !important;
}

.bg-orange-accent-2 {
  background-color: #ffab40 !important;
}
.bg-orange-accent-2 {
  color: #000000 !important;
}

.bg-orange-accent-3 {
  background-color: #ff9100 !important;
}
.bg-orange-accent-3 {
  color: #000000 !important;
}

.bg-orange-accent-4 {
  background-color: #ff6d00 !important;
}
.bg-orange-accent-4 {
  color: #FFFFFF !important;
}

.bg-deep-orange {
  background-color: #ff5722 !important;
}
.bg-deep-orange {
  color: #FFFFFF !important;
}

.bg-deep-orange-lighten-5 {
  background-color: #fbe9e7 !important;
}
.bg-deep-orange-lighten-5 {
  color: #000000 !important;
}

.bg-deep-orange-lighten-4 {
  background-color: #ffccbc !important;
}
.bg-deep-orange-lighten-4 {
  color: #000000 !important;
}

.bg-deep-orange-lighten-3 {
  background-color: #ffab91 !important;
}
.bg-deep-orange-lighten-3 {
  color: #000000 !important;
}

.bg-deep-orange-lighten-2 {
  background-color: #ff8a65 !important;
}
.bg-deep-orange-lighten-2 {
  color: #000000 !important;
}

.bg-deep-orange-lighten-1 {
  background-color: #ff7043 !important;
}
.bg-deep-orange-lighten-1 {
  color: #FFFFFF !important;
}

.bg-deep-orange-darken-1 {
  background-color: #f4511e !important;
}
.bg-deep-orange-darken-1 {
  color: #FFFFFF !important;
}

.bg-deep-orange-darken-2 {
  background-color: #e64a19 !important;
}
.bg-deep-orange-darken-2 {
  color: #FFFFFF !important;
}

.bg-deep-orange-darken-3 {
  background-color: #d84315 !important;
}
.bg-deep-orange-darken-3 {
  color: #FFFFFF !important;
}

.bg-deep-orange-darken-4 {
  background-color: #bf360c !important;
}
.bg-deep-orange-darken-4 {
  color: #FFFFFF !important;
}

.bg-deep-orange-accent-1 {
  background-color: #ff9e80 !important;
}
.bg-deep-orange-accent-1 {
  color: #000000 !important;
}

.bg-deep-orange-accent-2 {
  background-color: #ff6e40 !important;
}
.bg-deep-orange-accent-2 {
  color: #FFFFFF !important;
}

.bg-deep-orange-accent-3 {
  background-color: #ff3d00 !important;
}
.bg-deep-orange-accent-3 {
  color: #FFFFFF !important;
}

.bg-deep-orange-accent-4 {
  background-color: #dd2c00 !important;
}
.bg-deep-orange-accent-4 {
  color: #FFFFFF !important;
}

.bg-brown {
  background-color: #795548 !important;
}
.bg-brown {
  color: #FFFFFF !important;
}

.bg-brown-lighten-5 {
  background-color: #efebe9 !important;
}
.bg-brown-lighten-5 {
  color: #000000 !important;
}

.bg-brown-lighten-4 {
  background-color: #d7ccc8 !important;
}
.bg-brown-lighten-4 {
  color: #000000 !important;
}

.bg-brown-lighten-3 {
  background-color: #bcaaa4 !important;
}
.bg-brown-lighten-3 {
  color: #000000 !important;
}

.bg-brown-lighten-2 {
  background-color: #a1887f !important;
}
.bg-brown-lighten-2 {
  color: #FFFFFF !important;
}

.bg-brown-lighten-1 {
  background-color: #8d6e63 !important;
}
.bg-brown-lighten-1 {
  color: #FFFFFF !important;
}

.bg-brown-darken-1 {
  background-color: #6d4c41 !important;
}
.bg-brown-darken-1 {
  color: #FFFFFF !important;
}

.bg-brown-darken-2 {
  background-color: #5d4037 !important;
}
.bg-brown-darken-2 {
  color: #FFFFFF !important;
}

.bg-brown-darken-3 {
  background-color: #4e342e !important;
}
.bg-brown-darken-3 {
  color: #FFFFFF !important;
}

.bg-brown-darken-4 {
  background-color: #3e2723 !important;
}
.bg-brown-darken-4 {
  color: #FFFFFF !important;
}

.bg-blue-grey {
  background-color: #607d8b !important;
}
.bg-blue-grey {
  color: #FFFFFF !important;
}

.bg-blue-grey-lighten-5 {
  background-color: #eceff1 !important;
}
.bg-blue-grey-lighten-5 {
  color: #000000 !important;
}

.bg-blue-grey-lighten-4 {
  background-color: #cfd8dc !important;
}
.bg-blue-grey-lighten-4 {
  color: #000000 !important;
}

.bg-blue-grey-lighten-3 {
  background-color: #b0bec5 !important;
}
.bg-blue-grey-lighten-3 {
  color: #000000 !important;
}

.bg-blue-grey-lighten-2 {
  background-color: #90a4ae !important;
}
.bg-blue-grey-lighten-2 {
  color: #FFFFFF !important;
}

.bg-blue-grey-lighten-1 {
  background-color: #78909c !important;
}
.bg-blue-grey-lighten-1 {
  color: #FFFFFF !important;
}

.bg-blue-grey-darken-1 {
  background-color: #546e7a !important;
}
.bg-blue-grey-darken-1 {
  color: #FFFFFF !important;
}

.bg-blue-grey-darken-2 {
  background-color: #455a64 !important;
}
.bg-blue-grey-darken-2 {
  color: #FFFFFF !important;
}

.bg-blue-grey-darken-3 {
  background-color: #37474f !important;
}
.bg-blue-grey-darken-3 {
  color: #FFFFFF !important;
}

.bg-blue-grey-darken-4 {
  background-color: #263238 !important;
}
.bg-blue-grey-darken-4 {
  color: #FFFFFF !important;
}

.bg-grey {
  background-color: #9e9e9e !important;
}
.bg-grey {
  color: #FFFFFF !important;
}

.bg-grey-lighten-5 {
  background-color: #fafafa !important;
}
.bg-grey-lighten-5 {
  color: #000000 !important;
}

.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
}
.bg-grey-lighten-4 {
  color: #000000 !important;
}

.bg-grey-lighten-3 {
  background-color: #eeeeee !important;
}
.bg-grey-lighten-3 {
  color: #000000 !important;
}

.bg-grey-lighten-2 {
  background-color: #e0e0e0 !important;
}
.bg-grey-lighten-2 {
  color: #000000 !important;
}

.bg-grey-lighten-1 {
  background-color: #bdbdbd !important;
}
.bg-grey-lighten-1 {
  color: #000000 !important;
}

.bg-grey-darken-1 {
  background-color: #757575 !important;
}
.bg-grey-darken-1 {
  color: #FFFFFF !important;
}

.bg-grey-darken-2 {
  background-color: #616161 !important;
}
.bg-grey-darken-2 {
  color: #FFFFFF !important;
}

.bg-grey-darken-3 {
  background-color: #424242 !important;
}
.bg-grey-darken-3 {
  color: #FFFFFF !important;
}

.bg-grey-darken-4 {
  background-color: #212121 !important;
}
.bg-grey-darken-4 {
  color: #FFFFFF !important;
}

.bg-shades-black {
  background-color: #000000 !important;
}
.bg-shades-black {
  color: #FFFFFF !important;
}

.bg-shades-white {
  background-color: #FFFFFF !important;
}
.bg-shades-white {
  color: #000000 !important;
}

.bg-shades-transparent {
  background-color: transparent !important;
}
.bg-shades-transparent {
  color: currentColor !important;
}

.text-black {
  color: #000000 !important;
}

.text-white {
  color: #FFFFFF !important;
}

.text-transparent {
  color: transparent !important;
}

.text-red {
  color: #F44336 !important;
}

.text-red-lighten-5 {
  color: #FFEBEE !important;
}

.text-red-lighten-4 {
  color: #FFCDD2 !important;
}

.text-red-lighten-3 {
  color: #EF9A9A !important;
}

.text-red-lighten-2 {
  color: #E57373 !important;
}

.text-red-lighten-1 {
  color: #EF5350 !important;
}

.text-red-darken-1 {
  color: #E53935 !important;
}

.text-red-darken-2 {
  color: #D32F2F !important;
}

.text-red-darken-3 {
  color: #C62828 !important;
}

.text-red-darken-4 {
  color: #B71C1C !important;
}

.text-red-accent-1 {
  color: #FF8A80 !important;
}

.text-red-accent-2 {
  color: #FF5252 !important;
}

.text-red-accent-3 {
  color: #FF1744 !important;
}

.text-red-accent-4 {
  color: #D50000 !important;
}

.text-pink {
  color: #e91e63 !important;
}

.text-pink-lighten-5 {
  color: #fce4ec !important;
}

.text-pink-lighten-4 {
  color: #f8bbd0 !important;
}

.text-pink-lighten-3 {
  color: #f48fb1 !important;
}

.text-pink-lighten-2 {
  color: #f06292 !important;
}

.text-pink-lighten-1 {
  color: #ec407a !important;
}

.text-pink-darken-1 {
  color: #d81b60 !important;
}

.text-pink-darken-2 {
  color: #c2185b !important;
}

.text-pink-darken-3 {
  color: #ad1457 !important;
}

.text-pink-darken-4 {
  color: #880e4f !important;
}

.text-pink-accent-1 {
  color: #ff80ab !important;
}

.text-pink-accent-2 {
  color: #ff4081 !important;
}

.text-pink-accent-3 {
  color: #f50057 !important;
}

.text-pink-accent-4 {
  color: #c51162 !important;
}

.text-purple {
  color: #9c27b0 !important;
}

.text-purple-lighten-5 {
  color: #f3e5f5 !important;
}

.text-purple-lighten-4 {
  color: #e1bee7 !important;
}

.text-purple-lighten-3 {
  color: #ce93d8 !important;
}

.text-purple-lighten-2 {
  color: #ba68c8 !important;
}

.text-purple-lighten-1 {
  color: #ab47bc !important;
}

.text-purple-darken-1 {
  color: #8e24aa !important;
}

.text-purple-darken-2 {
  color: #7b1fa2 !important;
}

.text-purple-darken-3 {
  color: #6a1b9a !important;
}

.text-purple-darken-4 {
  color: #4a148c !important;
}

.text-purple-accent-1 {
  color: #ea80fc !important;
}

.text-purple-accent-2 {
  color: #e040fb !important;
}

.text-purple-accent-3 {
  color: #d500f9 !important;
}

.text-purple-accent-4 {
  color: #aa00ff !important;
}

.text-deep-purple {
  color: #673ab7 !important;
}

.text-deep-purple-lighten-5 {
  color: #ede7f6 !important;
}

.text-deep-purple-lighten-4 {
  color: #d1c4e9 !important;
}

.text-deep-purple-lighten-3 {
  color: #b39ddb !important;
}

.text-deep-purple-lighten-2 {
  color: #9575cd !important;
}

.text-deep-purple-lighten-1 {
  color: #7e57c2 !important;
}

.text-deep-purple-darken-1 {
  color: #5e35b1 !important;
}

.text-deep-purple-darken-2 {
  color: #512da8 !important;
}

.text-deep-purple-darken-3 {
  color: #4527a0 !important;
}

.text-deep-purple-darken-4 {
  color: #311b92 !important;
}

.text-deep-purple-accent-1 {
  color: #b388ff !important;
}

.text-deep-purple-accent-2 {
  color: #7c4dff !important;
}

.text-deep-purple-accent-3 {
  color: #651fff !important;
}

.text-deep-purple-accent-4 {
  color: #6200ea !important;
}

.text-indigo {
  color: #3f51b5 !important;
}

.text-indigo-lighten-5 {
  color: #e8eaf6 !important;
}

.text-indigo-lighten-4 {
  color: #c5cae9 !important;
}

.text-indigo-lighten-3 {
  color: #9fa8da !important;
}

.text-indigo-lighten-2 {
  color: #7986cb !important;
}

.text-indigo-lighten-1 {
  color: #5c6bc0 !important;
}

.text-indigo-darken-1 {
  color: #3949ab !important;
}

.text-indigo-darken-2 {
  color: #303f9f !important;
}

.text-indigo-darken-3 {
  color: #283593 !important;
}

.text-indigo-darken-4 {
  color: #1a237e !important;
}

.text-indigo-accent-1 {
  color: #8c9eff !important;
}

.text-indigo-accent-2 {
  color: #536dfe !important;
}

.text-indigo-accent-3 {
  color: #3d5afe !important;
}

.text-indigo-accent-4 {
  color: #304ffe !important;
}

.text-blue {
  color: #2196F3 !important;
}

.text-blue-lighten-5 {
  color: #E3F2FD !important;
}

.text-blue-lighten-4 {
  color: #BBDEFB !important;
}

.text-blue-lighten-3 {
  color: #90CAF9 !important;
}

.text-blue-lighten-2 {
  color: #64B5F6 !important;
}

.text-blue-lighten-1 {
  color: #42A5F5 !important;
}

.text-blue-darken-1 {
  color: #1E88E5 !important;
}

.text-blue-darken-2 {
  color: #1976D2 !important;
}

.text-blue-darken-3 {
  color: #1565C0 !important;
}

.text-blue-darken-4 {
  color: #0D47A1 !important;
}

.text-blue-accent-1 {
  color: #82B1FF !important;
}

.text-blue-accent-2 {
  color: #448AFF !important;
}

.text-blue-accent-3 {
  color: #2979FF !important;
}

.text-blue-accent-4 {
  color: #2962FF !important;
}

.text-light-blue {
  color: #03a9f4 !important;
}

.text-light-blue-lighten-5 {
  color: #e1f5fe !important;
}

.text-light-blue-lighten-4 {
  color: #b3e5fc !important;
}

.text-light-blue-lighten-3 {
  color: #81d4fa !important;
}

.text-light-blue-lighten-2 {
  color: #4fc3f7 !important;
}

.text-light-blue-lighten-1 {
  color: #29b6f6 !important;
}

.text-light-blue-darken-1 {
  color: #039be5 !important;
}

.text-light-blue-darken-2 {
  color: #0288d1 !important;
}

.text-light-blue-darken-3 {
  color: #0277bd !important;
}

.text-light-blue-darken-4 {
  color: #01579b !important;
}

.text-light-blue-accent-1 {
  color: #80d8ff !important;
}

.text-light-blue-accent-2 {
  color: #40c4ff !important;
}

.text-light-blue-accent-3 {
  color: #00b0ff !important;
}

.text-light-blue-accent-4 {
  color: #0091ea !important;
}

.text-cyan {
  color: #00bcd4 !important;
}

.text-cyan-lighten-5 {
  color: #e0f7fa !important;
}

.text-cyan-lighten-4 {
  color: #b2ebf2 !important;
}

.text-cyan-lighten-3 {
  color: #80deea !important;
}

.text-cyan-lighten-2 {
  color: #4dd0e1 !important;
}

.text-cyan-lighten-1 {
  color: #26c6da !important;
}

.text-cyan-darken-1 {
  color: #00acc1 !important;
}

.text-cyan-darken-2 {
  color: #0097a7 !important;
}

.text-cyan-darken-3 {
  color: #00838f !important;
}

.text-cyan-darken-4 {
  color: #006064 !important;
}

.text-cyan-accent-1 {
  color: #84ffff !important;
}

.text-cyan-accent-2 {
  color: #18ffff !important;
}

.text-cyan-accent-3 {
  color: #00e5ff !important;
}

.text-cyan-accent-4 {
  color: #00b8d4 !important;
}

.text-teal {
  color: #009688 !important;
}

.text-teal-lighten-5 {
  color: #e0f2f1 !important;
}

.text-teal-lighten-4 {
  color: #b2dfdb !important;
}

.text-teal-lighten-3 {
  color: #80cbc4 !important;
}

.text-teal-lighten-2 {
  color: #4db6ac !important;
}

.text-teal-lighten-1 {
  color: #26a69a !important;
}

.text-teal-darken-1 {
  color: #00897b !important;
}

.text-teal-darken-2 {
  color: #00796b !important;
}

.text-teal-darken-3 {
  color: #00695c !important;
}

.text-teal-darken-4 {
  color: #004d40 !important;
}

.text-teal-accent-1 {
  color: #a7ffeb !important;
}

.text-teal-accent-2 {
  color: #64ffda !important;
}

.text-teal-accent-3 {
  color: #1de9b6 !important;
}

.text-teal-accent-4 {
  color: #00bfa5 !important;
}

.text-green {
  color: #4CAF50 !important;
}

.text-green-lighten-5 {
  color: #E8F5E9 !important;
}

.text-green-lighten-4 {
  color: #C8E6C9 !important;
}

.text-green-lighten-3 {
  color: #A5D6A7 !important;
}

.text-green-lighten-2 {
  color: #81C784 !important;
}

.text-green-lighten-1 {
  color: #66BB6A !important;
}

.text-green-darken-1 {
  color: #43A047 !important;
}

.text-green-darken-2 {
  color: #388E3C !important;
}

.text-green-darken-3 {
  color: #2E7D32 !important;
}

.text-green-darken-4 {
  color: #1B5E20 !important;
}

.text-green-accent-1 {
  color: #B9F6CA !important;
}

.text-green-accent-2 {
  color: #69F0AE !important;
}

.text-green-accent-3 {
  color: #00E676 !important;
}

.text-green-accent-4 {
  color: #00C853 !important;
}

.text-light-green {
  color: #8bc34a !important;
}

.text-light-green-lighten-5 {
  color: #f1f8e9 !important;
}

.text-light-green-lighten-4 {
  color: #dcedc8 !important;
}

.text-light-green-lighten-3 {
  color: #c5e1a5 !important;
}

.text-light-green-lighten-2 {
  color: #aed581 !important;
}

.text-light-green-lighten-1 {
  color: #9ccc65 !important;
}

.text-light-green-darken-1 {
  color: #7cb342 !important;
}

.text-light-green-darken-2 {
  color: #689f38 !important;
}

.text-light-green-darken-3 {
  color: #558b2f !important;
}

.text-light-green-darken-4 {
  color: #33691e !important;
}

.text-light-green-accent-1 {
  color: #ccff90 !important;
}

.text-light-green-accent-2 {
  color: #b2ff59 !important;
}

.text-light-green-accent-3 {
  color: #76ff03 !important;
}

.text-light-green-accent-4 {
  color: #64dd17 !important;
}

.text-lime {
  color: #cddc39 !important;
}

.text-lime-lighten-5 {
  color: #f9fbe7 !important;
}

.text-lime-lighten-4 {
  color: #f0f4c3 !important;
}

.text-lime-lighten-3 {
  color: #e6ee9c !important;
}

.text-lime-lighten-2 {
  color: #dce775 !important;
}

.text-lime-lighten-1 {
  color: #d4e157 !important;
}

.text-lime-darken-1 {
  color: #c0ca33 !important;
}

.text-lime-darken-2 {
  color: #afb42b !important;
}

.text-lime-darken-3 {
  color: #9e9d24 !important;
}

.text-lime-darken-4 {
  color: #827717 !important;
}

.text-lime-accent-1 {
  color: #f4ff81 !important;
}

.text-lime-accent-2 {
  color: #eeff41 !important;
}

.text-lime-accent-3 {
  color: #c6ff00 !important;
}

.text-lime-accent-4 {
  color: #aeea00 !important;
}

.text-yellow {
  color: #ffeb3b !important;
}

.text-yellow-lighten-5 {
  color: #fffde7 !important;
}

.text-yellow-lighten-4 {
  color: #fff9c4 !important;
}

.text-yellow-lighten-3 {
  color: #fff59d !important;
}

.text-yellow-lighten-2 {
  color: #fff176 !important;
}

.text-yellow-lighten-1 {
  color: #ffee58 !important;
}

.text-yellow-darken-1 {
  color: #fdd835 !important;
}

.text-yellow-darken-2 {
  color: #fbc02d !important;
}

.text-yellow-darken-3 {
  color: #f9a825 !important;
}

.text-yellow-darken-4 {
  color: #f57f17 !important;
}

.text-yellow-accent-1 {
  color: #ffff8d !important;
}

.text-yellow-accent-2 {
  color: #ffff00 !important;
}

.text-yellow-accent-3 {
  color: #ffea00 !important;
}

.text-yellow-accent-4 {
  color: #ffd600 !important;
}

.text-amber {
  color: #ffc107 !important;
}

.text-amber-lighten-5 {
  color: #fff8e1 !important;
}

.text-amber-lighten-4 {
  color: #ffecb3 !important;
}

.text-amber-lighten-3 {
  color: #ffe082 !important;
}

.text-amber-lighten-2 {
  color: #ffd54f !important;
}

.text-amber-lighten-1 {
  color: #ffca28 !important;
}

.text-amber-darken-1 {
  color: #ffb300 !important;
}

.text-amber-darken-2 {
  color: #ffa000 !important;
}

.text-amber-darken-3 {
  color: #ff8f00 !important;
}

.text-amber-darken-4 {
  color: #ff6f00 !important;
}

.text-amber-accent-1 {
  color: #ffe57f !important;
}

.text-amber-accent-2 {
  color: #ffd740 !important;
}

.text-amber-accent-3 {
  color: #ffc400 !important;
}

.text-amber-accent-4 {
  color: #ffab00 !important;
}

.text-orange {
  color: #ff9800 !important;
}

.text-orange-lighten-5 {
  color: #fff3e0 !important;
}

.text-orange-lighten-4 {
  color: #ffe0b2 !important;
}

.text-orange-lighten-3 {
  color: #ffcc80 !important;
}

.text-orange-lighten-2 {
  color: #ffb74d !important;
}

.text-orange-lighten-1 {
  color: #ffa726 !important;
}

.text-orange-darken-1 {
  color: #fb8c00 !important;
}

.text-orange-darken-2 {
  color: #f57c00 !important;
}

.text-orange-darken-3 {
  color: #ef6c00 !important;
}

.text-orange-darken-4 {
  color: #e65100 !important;
}

.text-orange-accent-1 {
  color: #ffd180 !important;
}

.text-orange-accent-2 {
  color: #ffab40 !important;
}

.text-orange-accent-3 {
  color: #ff9100 !important;
}

.text-orange-accent-4 {
  color: #ff6d00 !important;
}

.text-deep-orange {
  color: #ff5722 !important;
}

.text-deep-orange-lighten-5 {
  color: #fbe9e7 !important;
}

.text-deep-orange-lighten-4 {
  color: #ffccbc !important;
}

.text-deep-orange-lighten-3 {
  color: #ffab91 !important;
}

.text-deep-orange-lighten-2 {
  color: #ff8a65 !important;
}

.text-deep-orange-lighten-1 {
  color: #ff7043 !important;
}

.text-deep-orange-darken-1 {
  color: #f4511e !important;
}

.text-deep-orange-darken-2 {
  color: #e64a19 !important;
}

.text-deep-orange-darken-3 {
  color: #d84315 !important;
}

.text-deep-orange-darken-4 {
  color: #bf360c !important;
}

.text-deep-orange-accent-1 {
  color: #ff9e80 !important;
}

.text-deep-orange-accent-2 {
  color: #ff6e40 !important;
}

.text-deep-orange-accent-3 {
  color: #ff3d00 !important;
}

.text-deep-orange-accent-4 {
  color: #dd2c00 !important;
}

.text-brown {
  color: #795548 !important;
}

.text-brown-lighten-5 {
  color: #efebe9 !important;
}

.text-brown-lighten-4 {
  color: #d7ccc8 !important;
}

.text-brown-lighten-3 {
  color: #bcaaa4 !important;
}

.text-brown-lighten-2 {
  color: #a1887f !important;
}

.text-brown-lighten-1 {
  color: #8d6e63 !important;
}

.text-brown-darken-1 {
  color: #6d4c41 !important;
}

.text-brown-darken-2 {
  color: #5d4037 !important;
}

.text-brown-darken-3 {
  color: #4e342e !important;
}

.text-brown-darken-4 {
  color: #3e2723 !important;
}

.text-blue-grey {
  color: #607d8b !important;
}

.text-blue-grey-lighten-5 {
  color: #eceff1 !important;
}

.text-blue-grey-lighten-4 {
  color: #cfd8dc !important;
}

.text-blue-grey-lighten-3 {
  color: #b0bec5 !important;
}

.text-blue-grey-lighten-2 {
  color: #90a4ae !important;
}

.text-blue-grey-lighten-1 {
  color: #78909c !important;
}

.text-blue-grey-darken-1 {
  color: #546e7a !important;
}

.text-blue-grey-darken-2 {
  color: #455a64 !important;
}

.text-blue-grey-darken-3 {
  color: #37474f !important;
}

.text-blue-grey-darken-4 {
  color: #263238 !important;
}

.text-grey {
  color: #9e9e9e !important;
}

.text-grey-lighten-5 {
  color: #fafafa !important;
}

.text-grey-lighten-4 {
  color: #f5f5f5 !important;
}

.text-grey-lighten-3 {
  color: #eeeeee !important;
}

.text-grey-lighten-2 {
  color: #e0e0e0 !important;
}

.text-grey-lighten-1 {
  color: #bdbdbd !important;
}

.text-grey-darken-1 {
  color: #757575 !important;
}

.text-grey-darken-2 {
  color: #616161 !important;
}

.text-grey-darken-3 {
  color: #424242 !important;
}

.text-grey-darken-4 {
  color: #212121 !important;
}

.text-shades-black {
  color: #000000 !important;
}

.text-shades-white {
  color: #FFFFFF !important;
}

.text-shades-transparent {
  color: transparent !important;
}

/*!
 * ress.css • v2.0.4
 * MIT License
 * github.com/filipelinhares/ress
 */
/* # =================================================================
   # Global selectors
   # ================================================================= */
html {
  box-sizing: border-box;
  overflow-y: scroll; /* All browsers without overlaying scrollbars */
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat; /* Set \`background-repeat: no-repeat\` to all elements and pseudo elements */
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0; /* Reset \`padding\` and \`margin\` of all elements */
  margin: 0;
}

/* # =================================================================
   # General elements
   # ================================================================= */
hr {
  overflow: visible; /* Show the overflow in Edge and IE */
  height: 0; /* Add the correct box sizing in Firefox */
}

details,
main {
  display: block; /* Render the \`main\` element consistently in IE. */
}

summary {
  display: list-item; /* Add the correct display in all browsers */
}

small {
  font-size: 80%; /* Set font-size to 80% in \`small\` elements */
}

[hidden] {
  display: none; /* Add the correct display in IE */
}

abbr[title] {
  border-bottom: none; /* Remove the bottom border in Chrome 57 */
  /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
  text-decoration: underline;
  text-decoration: underline dotted;
}

a {
  background-color: transparent; /* Remove the gray background on active links in IE 10 */
}

a:active,
a:hover {
  outline-width: 0; /* Remove the outline when hovering in all browsers */
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* Specify the font family of code elements */
}

pre {
  font-size: 1em; /* Correct the odd \`em\` font sizing in all browsers */
}

b,
strong {
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
}

/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* # =================================================================
   # Forms
   # ================================================================= */
input {
  border-radius: 0;
}

/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
}

[type=search] {
  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px; /* Correct the outline style in Safari */
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
}

textarea {
  overflow: auto; /* Internet Explorer 11+ */
  resize: vertical; /* Specify textarea resizability */
}

button,
input,
optgroup,
select,
textarea {
  font: inherit; /* Specify font inheritance of form elements */
}

optgroup {
  font-weight: bold; /* Restore the font weight unset by the previous rule */
}

button {
  overflow: visible; /* Address \`overflow\` set to \`hidden\` in IE 8/9/10/11 */
}

button,
select {
  text-transform: none; /* Firefox 40+, Internet Explorer 11- */
}

/* Apply cursor pointer to button elements */
button,
[type=button],
[type=reset],
[type=submit],
[role=button] {
  cursor: pointer;
  color: inherit;
}

/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}

button,
html [type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
}

/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
}

/* Style select like a standard input */
select {
  -moz-appearance: none; /* Firefox 36+ */
  -webkit-appearance: none; /* Chrome 41+ */
}

select::-ms-expand {
  display: none; /* Internet Explorer 11+ */
}

select::-ms-value {
  color: currentColor; /* Internet Explorer 11+ */
}

legend {
  border: 0; /* Correct \`color\` not being inherited in IE 8/9/10/11 */
  color: inherit; /* Correct the color inheritance from \`fieldset\` elements in IE */
  display: table; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge and IE */
  white-space: normal; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge 18- and IE */
}

::-webkit-file-upload-button {
  /* Correct the inability to style clickable types in iOS and Safari */
  -webkit-appearance: button;
  color: inherit;
  font: inherit; /* Change font properties to \`inherit\` in Chrome and Safari */
}

::-ms-clear,
::-ms-reveal {
  display: none;
}

/* # =================================================================
   # Specify media element style
   # ================================================================= */
img {
  border-style: none; /* Remove border when inside \`a\` element in IE 8/9/10 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}

/* # =================================================================
   # Accessibility
   # ================================================================= */
/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~=screen] {
    display: inherit;
  }
  [hidden~=screen]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}
/* Specify the progress cursor of updating elements */
[aria-busy=true] {
  cursor: progress;
}

/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}

/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled=true] {
  cursor: default;
}

.dialog-transition-enter-active,
.dialog-bottom-transition-enter-active,
.dialog-top-transition-enter-active {
  transition-duration: 225ms !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
}
.dialog-transition-leave-active,
.dialog-bottom-transition-leave-active,
.dialog-top-transition-leave-active {
  transition-duration: 125ms !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
}
.dialog-transition-enter-active, .dialog-transition-leave-active,
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active,
.dialog-top-transition-enter-active,
.dialog-top-transition-leave-active {
  transition-property: transform, opacity !important;
  pointer-events: none;
}

.dialog-transition-enter-from, .dialog-transition-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.dialog-transition-enter-to, .dialog-transition-leave-from {
  opacity: 1;
}

.dialog-bottom-transition-enter-from, .dialog-bottom-transition-leave-to {
  transform: translateY(calc(50vh + 50%));
}

.dialog-top-transition-enter-from, .dialog-top-transition-leave-to {
  transform: translateY(calc(-50vh - 50%));
}

.picker-transition-enter-active,
.picker-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-leave-active,
.picker-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-move,
.picker-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-enter-from, .picker-transition-leave-to,
.picker-reverse-transition-enter-from,
.picker-reverse-transition-leave-to {
  opacity: 0;
}
.picker-transition-leave-from, .picker-transition-leave-active, .picker-transition-leave-to,
.picker-reverse-transition-leave-from,
.picker-reverse-transition-leave-active,
.picker-reverse-transition-leave-to {
  position: absolute !important;
}
.picker-transition-enter-active, .picker-transition-leave-active,
.picker-reverse-transition-enter-active,
.picker-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.picker-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-transition-enter-from {
  transform: translate(100%, 0);
}
.picker-transition-leave-to {
  transform: translate(-100%, 0);
}

.picker-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.picker-reverse-transition-enter-from {
  transform: translate(-100%, 0);
}
.picker-reverse-transition-leave-to {
  transform: translate(100%, 0);
}

.expand-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-transition-enter-active, .expand-transition-leave-active {
  transition-property: height !important;
}

.expand-x-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-x-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-x-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.expand-x-transition-enter-active, .expand-x-transition-leave-active {
  transition-property: width !important;
}

.scale-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-transition-leave-to {
  opacity: 0;
}
.scale-transition-leave-active {
  transition-duration: 100ms !important;
}
.scale-transition-enter-from {
  opacity: 0;
  transform: scale(0);
}
.scale-transition-enter-active, .scale-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scale-rotate-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-transition-leave-to {
  opacity: 0;
}
.scale-rotate-transition-leave-active {
  transition-duration: 100ms !important;
}
.scale-rotate-transition-enter-from {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
}
.scale-rotate-transition-enter-active, .scale-rotate-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scale-rotate-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scale-rotate-reverse-transition-leave-to {
  opacity: 0;
}
.scale-rotate-reverse-transition-leave-active {
  transition-duration: 100ms !important;
}
.scale-rotate-reverse-transition-enter-from {
  opacity: 0;
  transform: scale(0) rotate(45deg);
}
.scale-rotate-reverse-transition-enter-active, .scale-rotate-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.message-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.message-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.message-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.message-transition-enter-from, .message-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.message-transition-leave-from, .message-transition-leave-active {
  position: absolute;
}
.message-transition-enter-active, .message-transition-leave-active {
  transition-property: transform, opacity !important;
}

.slide-y-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-transition-enter-from, .slide-y-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.slide-y-transition-enter-active, .slide-y-transition-leave-active {
  transition-property: transform, opacity !important;
}

.slide-y-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-y-reverse-transition-enter-from, .slide-y-reverse-transition-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.slide-y-reverse-transition-enter-active, .slide-y-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scroll-y-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-transition-enter-from, .scroll-y-transition-leave-to {
  opacity: 0;
}
.scroll-y-transition-enter-from {
  transform: translateY(-15px);
}
.scroll-y-transition-leave-to {
  transform: translateY(15px);
}
.scroll-y-transition-enter-active, .scroll-y-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scroll-y-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-y-reverse-transition-enter-from, .scroll-y-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-y-reverse-transition-enter-from {
  transform: translateY(15px);
}
.scroll-y-reverse-transition-leave-to {
  transform: translateY(-15px);
}
.scroll-y-reverse-transition-enter-active, .scroll-y-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scroll-x-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-transition-enter-from, .scroll-x-transition-leave-to {
  opacity: 0;
}
.scroll-x-transition-enter-from {
  transform: translateX(-15px);
}
.scroll-x-transition-leave-to {
  transform: translateX(15px);
}
.scroll-x-transition-enter-active, .scroll-x-transition-leave-active {
  transition-property: transform, opacity !important;
}

.scroll-x-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.scroll-x-reverse-transition-enter-from, .scroll-x-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-x-reverse-transition-enter-from {
  transform: translateX(15px);
}
.scroll-x-reverse-transition-leave-to {
  transform: translateX(-15px);
}
.scroll-x-reverse-transition-enter-active, .scroll-x-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.slide-x-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-transition-enter-from, .slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}
.slide-x-transition-enter-active, .slide-x-transition-leave-active {
  transition-property: transform, opacity !important;
}

.slide-x-reverse-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-reverse-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-reverse-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.slide-x-reverse-transition-enter-from, .slide-x-reverse-transition-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
.slide-x-reverse-transition-enter-active, .slide-x-reverse-transition-leave-active {
  transition-property: transform, opacity !important;
}

.fade-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fade-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fade-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fade-transition-enter-from, .fade-transition-leave-to {
  opacity: 0 !important;
}
.fade-transition-enter-active, .fade-transition-leave-active {
  transition-property: opacity !important;
}

.fab-transition-enter-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fab-transition-leave-active {
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fab-transition-move {
  transition-duration: 0.5s !important;
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.fab-transition-enter-from, .fab-transition-leave-to {
  transform: scale(0) rotate(-45deg);
}
.fab-transition-enter-active, .fab-transition-leave-active {
  transition-property: transform !important;
}

.v-locale--is-rtl {
  direction: rtl;
}
.v-locale--is-ltr {
  direction: ltr;
}

.blockquote {
  padding: 16px 0 16px 24px;
  font-size: 18px;
  font-weight: 300;
}

html {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  font-size: 1rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html.overflow-y-hidden {
  overflow-y: hidden !important;
}

:root {
  --v-theme-overlay-multiplier: 1;
  --v-scrollbar-offset: 0px;
}

@supports (-webkit-touch-callout: none) {
  body {
    cursor: pointer;
  }
}
@media only print {
  .hidden-print-only {
    display: none !important;
  }
}

@media only screen {
  .hidden-screen-only {
    display: none !important;
  }
}

@media (max-width: 599.98px) {
  .hidden-xs {
    display: none !important;
  }
}

@media (min-width: 600px) and (max-width: 959.98px) {
  .hidden-sm {
    display: none !important;
  }
}

@media (min-width: 960px) and (max-width: 1279.98px) {
  .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1280px) and (max-width: 1919.98px) {
  .hidden-lg {
    display: none !important;
  }
}

@media (min-width: 1920px) and (max-width: 2559.98px) {
  .hidden-xl {
    display: none !important;
  }
}

@media (min-width: 2560px) {
  .hidden-xxl {
    display: none !important;
  }
}

@media (min-width: 600px) {
  .hidden-sm-and-up {
    display: none !important;
  }
}

@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none !important;
  }
}

@media (min-width: 1280px) {
  .hidden-lg-and-up {
    display: none !important;
  }
}

@media (min-width: 1920px) {
  .hidden-xl-and-up {
    display: none !important;
  }
}

@media (max-width: 959.98px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}

@media (max-width: 1279.98px) {
  .hidden-md-and-down {
    display: none !important;
  }
}

@media (max-width: 1919.98px) {
  .hidden-lg-and-down {
    display: none !important;
  }
}

@media (max-width: 2559.98px) {
  .hidden-xl-and-down {
    display: none !important;
  }
}

.elevation-24 {
  box-shadow: 0px 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 46px 8px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-23 {
  box-shadow: 0px 11px 14px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 23px 36px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 44px 8px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-22 {
  box-shadow: 0px 10px 14px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 22px 35px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 42px 7px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-21 {
  box-shadow: 0px 10px 13px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 21px 33px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 40px 7px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-20 {
  box-shadow: 0px 10px 13px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 20px 31px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 38px 7px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-19 {
  box-shadow: 0px 9px 12px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 19px 29px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 7px 36px 6px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-18 {
  box-shadow: 0px 9px 11px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 18px 28px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 7px 34px 6px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-17 {
  box-shadow: 0px 8px 11px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 17px 26px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 32px 5px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-16 {
  box-shadow: 0px 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 30px 5px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-15 {
  box-shadow: 0px 8px 9px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 15px 22px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 28px 5px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-14 {
  box-shadow: 0px 7px 9px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 14px 21px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 26px 4px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-13 {
  box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 13px 19px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 24px 4px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-12 {
  box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 12px 17px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 22px 4px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-11 {
  box-shadow: 0px 6px 7px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 11px 15px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 4px 20px 3px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-10 {
  box-shadow: 0px 6px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 10px 14px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 4px 18px 3px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-9 {
  box-shadow: 0px 5px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 9px 12px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 16px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-8 {
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-7 {
  box-shadow: 0px 4px 5px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 7px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 2px 16px 1px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-6 {
  box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 6px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 18px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-5 {
  box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 5px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 14px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-4 {
  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-3 {
  box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-2 {
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-1 {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.elevation-0 {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.d-sr-only,
.d-sr-only-focusable:not(:focus) {
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-x-scroll {
  overflow-x: scroll !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.overflow-y-scroll {
  overflow-y: scroll !important;
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.float-none {
  float: none !important;
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.v-locale--is-rtl .float-end {
  float: left !important;
}

.v-locale--is-rtl .float-start {
  float: right !important;
}

.v-locale--is-ltr .float-end {
  float: right !important;
}

.v-locale--is-ltr .float-start {
  float: left !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-1-1 {
  flex: 1 1 auto !important;
}

.flex-1-0 {
  flex: 1 0 auto !important;
}

.flex-0-1 {
  flex: 0 1 auto !important;
}

.flex-0-0 {
  flex: 0 0 auto !important;
}

.flex-1-1-100 {
  flex: 1 1 100% !important;
}

.flex-1-0-100 {
  flex: 1 0 100% !important;
}

.flex-0-1-100 {
  flex: 0 1 100% !important;
}

.flex-0-0-100 {
  flex: 0 0 100% !important;
}

.flex-1-1-0 {
  flex: 1 1 0 !important;
}

.flex-1-0-0 {
  flex: 1 0 0 !important;
}

.flex-0-1-0 {
  flex: 0 1 0 !important;
}

.flex-0-0-0 {
  flex: 0 0 0 !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-start {
  justify-content: flex-start !important;
}

.justify-end {
  justify-content: flex-end !important;
}

.justify-center {
  justify-content: center !important;
}

.justify-space-between {
  justify-content: space-between !important;
}

.justify-space-around {
  justify-content: space-around !important;
}

.justify-space-evenly {
  justify-content: space-evenly !important;
}

.align-start {
  align-items: flex-start !important;
}

.align-end {
  align-items: flex-end !important;
}

.align-center {
  align-items: center !important;
}

.align-baseline {
  align-items: baseline !important;
}

.align-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-space-between {
  align-content: space-between !important;
}

.align-content-space-around {
  align-content: space-around !important;
}

.align-content-space-evenly {
  align-content: space-evenly !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-6 {
  order: 6 !important;
}

.order-7 {
  order: 7 !important;
}

.order-8 {
  order: 8 !important;
}

.order-9 {
  order: 9 !important;
}

.order-10 {
  order: 10 !important;
}

.order-11 {
  order: 11 !important;
}

.order-12 {
  order: 12 !important;
}

.order-last {
  order: 13 !important;
}

.ga-0 {
  gap: 0px !important;
}

.ga-1 {
  gap: 4px !important;
}

.ga-2 {
  gap: 8px !important;
}

.ga-3 {
  gap: 12px !important;
}

.ga-4 {
  gap: 16px !important;
}

.ga-5 {
  gap: 20px !important;
}

.ga-6 {
  gap: 24px !important;
}

.ga-7 {
  gap: 28px !important;
}

.ga-8 {
  gap: 32px !important;
}

.ga-9 {
  gap: 36px !important;
}

.ga-10 {
  gap: 40px !important;
}

.ga-11 {
  gap: 44px !important;
}

.ga-12 {
  gap: 48px !important;
}

.ga-13 {
  gap: 52px !important;
}

.ga-14 {
  gap: 56px !important;
}

.ga-15 {
  gap: 60px !important;
}

.ga-16 {
  gap: 64px !important;
}

.ga-auto {
  gap: auto !important;
}

.gr-0 {
  row-gap: 0px !important;
}

.gr-1 {
  row-gap: 4px !important;
}

.gr-2 {
  row-gap: 8px !important;
}

.gr-3 {
  row-gap: 12px !important;
}

.gr-4 {
  row-gap: 16px !important;
}

.gr-5 {
  row-gap: 20px !important;
}

.gr-6 {
  row-gap: 24px !important;
}

.gr-7 {
  row-gap: 28px !important;
}

.gr-8 {
  row-gap: 32px !important;
}

.gr-9 {
  row-gap: 36px !important;
}

.gr-10 {
  row-gap: 40px !important;
}

.gr-11 {
  row-gap: 44px !important;
}

.gr-12 {
  row-gap: 48px !important;
}

.gr-13 {
  row-gap: 52px !important;
}

.gr-14 {
  row-gap: 56px !important;
}

.gr-15 {
  row-gap: 60px !important;
}

.gr-16 {
  row-gap: 64px !important;
}

.gr-auto {
  row-gap: auto !important;
}

.gc-0 {
  column-gap: 0px !important;
}

.gc-1 {
  column-gap: 4px !important;
}

.gc-2 {
  column-gap: 8px !important;
}

.gc-3 {
  column-gap: 12px !important;
}

.gc-4 {
  column-gap: 16px !important;
}

.gc-5 {
  column-gap: 20px !important;
}

.gc-6 {
  column-gap: 24px !important;
}

.gc-7 {
  column-gap: 28px !important;
}

.gc-8 {
  column-gap: 32px !important;
}

.gc-9 {
  column-gap: 36px !important;
}

.gc-10 {
  column-gap: 40px !important;
}

.gc-11 {
  column-gap: 44px !important;
}

.gc-12 {
  column-gap: 48px !important;
}

.gc-13 {
  column-gap: 52px !important;
}

.gc-14 {
  column-gap: 56px !important;
}

.gc-15 {
  column-gap: 60px !important;
}

.gc-16 {
  column-gap: 64px !important;
}

.gc-auto {
  column-gap: auto !important;
}

.ma-0 {
  margin: 0px !important;
}

.ma-1 {
  margin: 4px !important;
}

.ma-2 {
  margin: 8px !important;
}

.ma-3 {
  margin: 12px !important;
}

.ma-4 {
  margin: 16px !important;
}

.ma-5 {
  margin: 20px !important;
}

.ma-6 {
  margin: 24px !important;
}

.ma-7 {
  margin: 28px !important;
}

.ma-8 {
  margin: 32px !important;
}

.ma-9 {
  margin: 36px !important;
}

.ma-10 {
  margin: 40px !important;
}

.ma-11 {
  margin: 44px !important;
}

.ma-12 {
  margin: 48px !important;
}

.ma-13 {
  margin: 52px !important;
}

.ma-14 {
  margin: 56px !important;
}

.ma-15 {
  margin: 60px !important;
}

.ma-16 {
  margin: 64px !important;
}

.ma-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.mx-1 {
  margin-right: 4px !important;
  margin-left: 4px !important;
}

.mx-2 {
  margin-right: 8px !important;
  margin-left: 8px !important;
}

.mx-3 {
  margin-right: 12px !important;
  margin-left: 12px !important;
}

.mx-4 {
  margin-right: 16px !important;
  margin-left: 16px !important;
}

.mx-5 {
  margin-right: 20px !important;
  margin-left: 20px !important;
}

.mx-6 {
  margin-right: 24px !important;
  margin-left: 24px !important;
}

.mx-7 {
  margin-right: 28px !important;
  margin-left: 28px !important;
}

.mx-8 {
  margin-right: 32px !important;
  margin-left: 32px !important;
}

.mx-9 {
  margin-right: 36px !important;
  margin-left: 36px !important;
}

.mx-10 {
  margin-right: 40px !important;
  margin-left: 40px !important;
}

.mx-11 {
  margin-right: 44px !important;
  margin-left: 44px !important;
}

.mx-12 {
  margin-right: 48px !important;
  margin-left: 48px !important;
}

.mx-13 {
  margin-right: 52px !important;
  margin-left: 52px !important;
}

.mx-14 {
  margin-right: 56px !important;
  margin-left: 56px !important;
}

.mx-15 {
  margin-right: 60px !important;
  margin-left: 60px !important;
}

.mx-16 {
  margin-right: 64px !important;
  margin-left: 64px !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.my-1 {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}

.my-2 {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}

.my-3 {
  margin-top: 12px !important;
  margin-bottom: 12px !important;
}

.my-4 {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
}

.my-5 {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.my-6 {
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}

.my-7 {
  margin-top: 28px !important;
  margin-bottom: 28px !important;
}

.my-8 {
  margin-top: 32px !important;
  margin-bottom: 32px !important;
}

.my-9 {
  margin-top: 36px !important;
  margin-bottom: 36px !important;
}

.my-10 {
  margin-top: 40px !important;
  margin-bottom: 40px !important;
}

.my-11 {
  margin-top: 44px !important;
  margin-bottom: 44px !important;
}

.my-12 {
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}

.my-13 {
  margin-top: 52px !important;
  margin-bottom: 52px !important;
}

.my-14 {
  margin-top: 56px !important;
  margin-bottom: 56px !important;
}

.my-15 {
  margin-top: 60px !important;
  margin-bottom: 60px !important;
}

.my-16 {
  margin-top: 64px !important;
  margin-bottom: 64px !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0px !important;
}

.mt-1 {
  margin-top: 4px !important;
}

.mt-2 {
  margin-top: 8px !important;
}

.mt-3 {
  margin-top: 12px !important;
}

.mt-4 {
  margin-top: 16px !important;
}

.mt-5 {
  margin-top: 20px !important;
}

.mt-6 {
  margin-top: 24px !important;
}

.mt-7 {
  margin-top: 28px !important;
}

.mt-8 {
  margin-top: 32px !important;
}

.mt-9 {
  margin-top: 36px !important;
}

.mt-10 {
  margin-top: 40px !important;
}

.mt-11 {
  margin-top: 44px !important;
}

.mt-12 {
  margin-top: 48px !important;
}

.mt-13 {
  margin-top: 52px !important;
}

.mt-14 {
  margin-top: 56px !important;
}

.mt-15 {
  margin-top: 60px !important;
}

.mt-16 {
  margin-top: 64px !important;
}

.mt-auto {
  margin-top: auto !important;
}

.mr-0 {
  margin-right: 0px !important;
}

.mr-1 {
  margin-right: 4px !important;
}

.mr-2 {
  margin-right: 8px !important;
}

.mr-3 {
  margin-right: 12px !important;
}

.mr-4 {
  margin-right: 16px !important;
}

.mr-5 {
  margin-right: 20px !important;
}

.mr-6 {
  margin-right: 24px !important;
}

.mr-7 {
  margin-right: 28px !important;
}

.mr-8 {
  margin-right: 32px !important;
}

.mr-9 {
  margin-right: 36px !important;
}

.mr-10 {
  margin-right: 40px !important;
}

.mr-11 {
  margin-right: 44px !important;
}

.mr-12 {
  margin-right: 48px !important;
}

.mr-13 {
  margin-right: 52px !important;
}

.mr-14 {
  margin-right: 56px !important;
}

.mr-15 {
  margin-right: 60px !important;
}

.mr-16 {
  margin-right: 64px !important;
}

.mr-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0px !important;
}

.mb-1 {
  margin-bottom: 4px !important;
}

.mb-2 {
  margin-bottom: 8px !important;
}

.mb-3 {
  margin-bottom: 12px !important;
}

.mb-4 {
  margin-bottom: 16px !important;
}

.mb-5 {
  margin-bottom: 20px !important;
}

.mb-6 {
  margin-bottom: 24px !important;
}

.mb-7 {
  margin-bottom: 28px !important;
}

.mb-8 {
  margin-bottom: 32px !important;
}

.mb-9 {
  margin-bottom: 36px !important;
}

.mb-10 {
  margin-bottom: 40px !important;
}

.mb-11 {
  margin-bottom: 44px !important;
}

.mb-12 {
  margin-bottom: 48px !important;
}

.mb-13 {
  margin-bottom: 52px !important;
}

.mb-14 {
  margin-bottom: 56px !important;
}

.mb-15 {
  margin-bottom: 60px !important;
}

.mb-16 {
  margin-bottom: 64px !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ml-0 {
  margin-left: 0px !important;
}

.ml-1 {
  margin-left: 4px !important;
}

.ml-2 {
  margin-left: 8px !important;
}

.ml-3 {
  margin-left: 12px !important;
}

.ml-4 {
  margin-left: 16px !important;
}

.ml-5 {
  margin-left: 20px !important;
}

.ml-6 {
  margin-left: 24px !important;
}

.ml-7 {
  margin-left: 28px !important;
}

.ml-8 {
  margin-left: 32px !important;
}

.ml-9 {
  margin-left: 36px !important;
}

.ml-10 {
  margin-left: 40px !important;
}

.ml-11 {
  margin-left: 44px !important;
}

.ml-12 {
  margin-left: 48px !important;
}

.ml-13 {
  margin-left: 52px !important;
}

.ml-14 {
  margin-left: 56px !important;
}

.ml-15 {
  margin-left: 60px !important;
}

.ml-16 {
  margin-left: 64px !important;
}

.ml-auto {
  margin-left: auto !important;
}

.ms-0 {
  margin-inline-start: 0px !important;
}

.ms-1 {
  margin-inline-start: 4px !important;
}

.ms-2 {
  margin-inline-start: 8px !important;
}

.ms-3 {
  margin-inline-start: 12px !important;
}

.ms-4 {
  margin-inline-start: 16px !important;
}

.ms-5 {
  margin-inline-start: 20px !important;
}

.ms-6 {
  margin-inline-start: 24px !important;
}

.ms-7 {
  margin-inline-start: 28px !important;
}

.ms-8 {
  margin-inline-start: 32px !important;
}

.ms-9 {
  margin-inline-start: 36px !important;
}

.ms-10 {
  margin-inline-start: 40px !important;
}

.ms-11 {
  margin-inline-start: 44px !important;
}

.ms-12 {
  margin-inline-start: 48px !important;
}

.ms-13 {
  margin-inline-start: 52px !important;
}

.ms-14 {
  margin-inline-start: 56px !important;
}

.ms-15 {
  margin-inline-start: 60px !important;
}

.ms-16 {
  margin-inline-start: 64px !important;
}

.ms-auto {
  margin-inline-start: auto !important;
}

.me-0 {
  margin-inline-end: 0px !important;
}

.me-1 {
  margin-inline-end: 4px !important;
}

.me-2 {
  margin-inline-end: 8px !important;
}

.me-3 {
  margin-inline-end: 12px !important;
}

.me-4 {
  margin-inline-end: 16px !important;
}

.me-5 {
  margin-inline-end: 20px !important;
}

.me-6 {
  margin-inline-end: 24px !important;
}

.me-7 {
  margin-inline-end: 28px !important;
}

.me-8 {
  margin-inline-end: 32px !important;
}

.me-9 {
  margin-inline-end: 36px !important;
}

.me-10 {
  margin-inline-end: 40px !important;
}

.me-11 {
  margin-inline-end: 44px !important;
}

.me-12 {
  margin-inline-end: 48px !important;
}

.me-13 {
  margin-inline-end: 52px !important;
}

.me-14 {
  margin-inline-end: 56px !important;
}

.me-15 {
  margin-inline-end: 60px !important;
}

.me-16 {
  margin-inline-end: 64px !important;
}

.me-auto {
  margin-inline-end: auto !important;
}

.ma-n1 {
  margin: -4px !important;
}

.ma-n2 {
  margin: -8px !important;
}

.ma-n3 {
  margin: -12px !important;
}

.ma-n4 {
  margin: -16px !important;
}

.ma-n5 {
  margin: -20px !important;
}

.ma-n6 {
  margin: -24px !important;
}

.ma-n7 {
  margin: -28px !important;
}

.ma-n8 {
  margin: -32px !important;
}

.ma-n9 {
  margin: -36px !important;
}

.ma-n10 {
  margin: -40px !important;
}

.ma-n11 {
  margin: -44px !important;
}

.ma-n12 {
  margin: -48px !important;
}

.ma-n13 {
  margin: -52px !important;
}

.ma-n14 {
  margin: -56px !important;
}

.ma-n15 {
  margin: -60px !important;
}

.ma-n16 {
  margin: -64px !important;
}

.mx-n1 {
  margin-right: -4px !important;
  margin-left: -4px !important;
}

.mx-n2 {
  margin-right: -8px !important;
  margin-left: -8px !important;
}

.mx-n3 {
  margin-right: -12px !important;
  margin-left: -12px !important;
}

.mx-n4 {
  margin-right: -16px !important;
  margin-left: -16px !important;
}

.mx-n5 {
  margin-right: -20px !important;
  margin-left: -20px !important;
}

.mx-n6 {
  margin-right: -24px !important;
  margin-left: -24px !important;
}

.mx-n7 {
  margin-right: -28px !important;
  margin-left: -28px !important;
}

.mx-n8 {
  margin-right: -32px !important;
  margin-left: -32px !important;
}

.mx-n9 {
  margin-right: -36px !important;
  margin-left: -36px !important;
}

.mx-n10 {
  margin-right: -40px !important;
  margin-left: -40px !important;
}

.mx-n11 {
  margin-right: -44px !important;
  margin-left: -44px !important;
}

.mx-n12 {
  margin-right: -48px !important;
  margin-left: -48px !important;
}

.mx-n13 {
  margin-right: -52px !important;
  margin-left: -52px !important;
}

.mx-n14 {
  margin-right: -56px !important;
  margin-left: -56px !important;
}

.mx-n15 {
  margin-right: -60px !important;
  margin-left: -60px !important;
}

.mx-n16 {
  margin-right: -64px !important;
  margin-left: -64px !important;
}

.my-n1 {
  margin-top: -4px !important;
  margin-bottom: -4px !important;
}

.my-n2 {
  margin-top: -8px !important;
  margin-bottom: -8px !important;
}

.my-n3 {
  margin-top: -12px !important;
  margin-bottom: -12px !important;
}

.my-n4 {
  margin-top: -16px !important;
  margin-bottom: -16px !important;
}

.my-n5 {
  margin-top: -20px !important;
  margin-bottom: -20px !important;
}

.my-n6 {
  margin-top: -24px !important;
  margin-bottom: -24px !important;
}

.my-n7 {
  margin-top: -28px !important;
  margin-bottom: -28px !important;
}

.my-n8 {
  margin-top: -32px !important;
  margin-bottom: -32px !important;
}

.my-n9 {
  margin-top: -36px !important;
  margin-bottom: -36px !important;
}

.my-n10 {
  margin-top: -40px !important;
  margin-bottom: -40px !important;
}

.my-n11 {
  margin-top: -44px !important;
  margin-bottom: -44px !important;
}

.my-n12 {
  margin-top: -48px !important;
  margin-bottom: -48px !important;
}

.my-n13 {
  margin-top: -52px !important;
  margin-bottom: -52px !important;
}

.my-n14 {
  margin-top: -56px !important;
  margin-bottom: -56px !important;
}

.my-n15 {
  margin-top: -60px !important;
  margin-bottom: -60px !important;
}

.my-n16 {
  margin-top: -64px !important;
  margin-bottom: -64px !important;
}

.mt-n1 {
  margin-top: -4px !important;
}

.mt-n2 {
  margin-top: -8px !important;
}

.mt-n3 {
  margin-top: -12px !important;
}

.mt-n4 {
  margin-top: -16px !important;
}

.mt-n5 {
  margin-top: -20px !important;
}

.mt-n6 {
  margin-top: -24px !important;
}

.mt-n7 {
  margin-top: -28px !important;
}

.mt-n8 {
  margin-top: -32px !important;
}

.mt-n9 {
  margin-top: -36px !important;
}

.mt-n10 {
  margin-top: -40px !important;
}

.mt-n11 {
  margin-top: -44px !important;
}

.mt-n12 {
  margin-top: -48px !important;
}

.mt-n13 {
  margin-top: -52px !important;
}

.mt-n14 {
  margin-top: -56px !important;
}

.mt-n15 {
  margin-top: -60px !important;
}

.mt-n16 {
  margin-top: -64px !important;
}

.mr-n1 {
  margin-right: -4px !important;
}

.mr-n2 {
  margin-right: -8px !important;
}

.mr-n3 {
  margin-right: -12px !important;
}

.mr-n4 {
  margin-right: -16px !important;
}

.mr-n5 {
  margin-right: -20px !important;
}

.mr-n6 {
  margin-right: -24px !important;
}

.mr-n7 {
  margin-right: -28px !important;
}

.mr-n8 {
  margin-right: -32px !important;
}

.mr-n9 {
  margin-right: -36px !important;
}

.mr-n10 {
  margin-right: -40px !important;
}

.mr-n11 {
  margin-right: -44px !important;
}

.mr-n12 {
  margin-right: -48px !important;
}

.mr-n13 {
  margin-right: -52px !important;
}

.mr-n14 {
  margin-right: -56px !important;
}

.mr-n15 {
  margin-right: -60px !important;
}

.mr-n16 {
  margin-right: -64px !important;
}

.mb-n1 {
  margin-bottom: -4px !important;
}

.mb-n2 {
  margin-bottom: -8px !important;
}

.mb-n3 {
  margin-bottom: -12px !important;
}

.mb-n4 {
  margin-bottom: -16px !important;
}

.mb-n5 {
  margin-bottom: -20px !important;
}

.mb-n6 {
  margin-bottom: -24px !important;
}

.mb-n7 {
  margin-bottom: -28px !important;
}

.mb-n8 {
  margin-bottom: -32px !important;
}

.mb-n9 {
  margin-bottom: -36px !important;
}

.mb-n10 {
  margin-bottom: -40px !important;
}

.mb-n11 {
  margin-bottom: -44px !important;
}

.mb-n12 {
  margin-bottom: -48px !important;
}

.mb-n13 {
  margin-bottom: -52px !important;
}

.mb-n14 {
  margin-bottom: -56px !important;
}

.mb-n15 {
  margin-bottom: -60px !important;
}

.mb-n16 {
  margin-bottom: -64px !important;
}

.ml-n1 {
  margin-left: -4px !important;
}

.ml-n2 {
  margin-left: -8px !important;
}

.ml-n3 {
  margin-left: -12px !important;
}

.ml-n4 {
  margin-left: -16px !important;
}

.ml-n5 {
  margin-left: -20px !important;
}

.ml-n6 {
  margin-left: -24px !important;
}

.ml-n7 {
  margin-left: -28px !important;
}

.ml-n8 {
  margin-left: -32px !important;
}

.ml-n9 {
  margin-left: -36px !important;
}

.ml-n10 {
  margin-left: -40px !important;
}

.ml-n11 {
  margin-left: -44px !important;
}

.ml-n12 {
  margin-left: -48px !important;
}

.ml-n13 {
  margin-left: -52px !important;
}

.ml-n14 {
  margin-left: -56px !important;
}

.ml-n15 {
  margin-left: -60px !important;
}

.ml-n16 {
  margin-left: -64px !important;
}

.ms-n1 {
  margin-inline-start: -4px !important;
}

.ms-n2 {
  margin-inline-start: -8px !important;
}

.ms-n3 {
  margin-inline-start: -12px !important;
}

.ms-n4 {
  margin-inline-start: -16px !important;
}

.ms-n5 {
  margin-inline-start: -20px !important;
}

.ms-n6 {
  margin-inline-start: -24px !important;
}

.ms-n7 {
  margin-inline-start: -28px !important;
}

.ms-n8 {
  margin-inline-start: -32px !important;
}

.ms-n9 {
  margin-inline-start: -36px !important;
}

.ms-n10 {
  margin-inline-start: -40px !important;
}

.ms-n11 {
  margin-inline-start: -44px !important;
}

.ms-n12 {
  margin-inline-start: -48px !important;
}

.ms-n13 {
  margin-inline-start: -52px !important;
}

.ms-n14 {
  margin-inline-start: -56px !important;
}

.ms-n15 {
  margin-inline-start: -60px !important;
}

.ms-n16 {
  margin-inline-start: -64px !important;
}

.me-n1 {
  margin-inline-end: -4px !important;
}

.me-n2 {
  margin-inline-end: -8px !important;
}

.me-n3 {
  margin-inline-end: -12px !important;
}

.me-n4 {
  margin-inline-end: -16px !important;
}

.me-n5 {
  margin-inline-end: -20px !important;
}

.me-n6 {
  margin-inline-end: -24px !important;
}

.me-n7 {
  margin-inline-end: -28px !important;
}

.me-n8 {
  margin-inline-end: -32px !important;
}

.me-n9 {
  margin-inline-end: -36px !important;
}

.me-n10 {
  margin-inline-end: -40px !important;
}

.me-n11 {
  margin-inline-end: -44px !important;
}

.me-n12 {
  margin-inline-end: -48px !important;
}

.me-n13 {
  margin-inline-end: -52px !important;
}

.me-n14 {
  margin-inline-end: -56px !important;
}

.me-n15 {
  margin-inline-end: -60px !important;
}

.me-n16 {
  margin-inline-end: -64px !important;
}

.pa-0 {
  padding: 0px !important;
}

.pa-1 {
  padding: 4px !important;
}

.pa-2 {
  padding: 8px !important;
}

.pa-3 {
  padding: 12px !important;
}

.pa-4 {
  padding: 16px !important;
}

.pa-5 {
  padding: 20px !important;
}

.pa-6 {
  padding: 24px !important;
}

.pa-7 {
  padding: 28px !important;
}

.pa-8 {
  padding: 32px !important;
}

.pa-9 {
  padding: 36px !important;
}

.pa-10 {
  padding: 40px !important;
}

.pa-11 {
  padding: 44px !important;
}

.pa-12 {
  padding: 48px !important;
}

.pa-13 {
  padding: 52px !important;
}

.pa-14 {
  padding: 56px !important;
}

.pa-15 {
  padding: 60px !important;
}

.pa-16 {
  padding: 64px !important;
}

.px-0 {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}

.px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}

.px-3 {
  padding-right: 12px !important;
  padding-left: 12px !important;
}

.px-4 {
  padding-right: 16px !important;
  padding-left: 16px !important;
}

.px-5 {
  padding-right: 20px !important;
  padding-left: 20px !important;
}

.px-6 {
  padding-right: 24px !important;
  padding-left: 24px !important;
}

.px-7 {
  padding-right: 28px !important;
  padding-left: 28px !important;
}

.px-8 {
  padding-right: 32px !important;
  padding-left: 32px !important;
}

.px-9 {
  padding-right: 36px !important;
  padding-left: 36px !important;
}

.px-10 {
  padding-right: 40px !important;
  padding-left: 40px !important;
}

.px-11 {
  padding-right: 44px !important;
  padding-left: 44px !important;
}

.px-12 {
  padding-right: 48px !important;
  padding-left: 48px !important;
}

.px-13 {
  padding-right: 52px !important;
  padding-left: 52px !important;
}

.px-14 {
  padding-right: 56px !important;
  padding-left: 56px !important;
}

.px-15 {
  padding-right: 60px !important;
  padding-left: 60px !important;
}

.px-16 {
  padding-right: 64px !important;
  padding-left: 64px !important;
}

.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}

.py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.py-3 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

.py-4 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}

.py-5 {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

.py-6 {
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}

.py-7 {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}

.py-8 {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}

.py-9 {
  padding-top: 36px !important;
  padding-bottom: 36px !important;
}

.py-10 {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}

.py-11 {
  padding-top: 44px !important;
  padding-bottom: 44px !important;
}

.py-12 {
  padding-top: 48px !important;
  padding-bottom: 48px !important;
}

.py-13 {
  padding-top: 52px !important;
  padding-bottom: 52px !important;
}

.py-14 {
  padding-top: 56px !important;
  padding-bottom: 56px !important;
}

.py-15 {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}

.py-16 {
  padding-top: 64px !important;
  padding-bottom: 64px !important;
}

.pt-0 {
  padding-top: 0px !important;
}

.pt-1 {
  padding-top: 4px !important;
}

.pt-2 {
  padding-top: 8px !important;
}

.pt-3 {
  padding-top: 12px !important;
}

.pt-4 {
  padding-top: 16px !important;
}

.pt-5 {
  padding-top: 20px !important;
}

.pt-6 {
  padding-top: 24px !important;
}

.pt-7 {
  padding-top: 28px !important;
}

.pt-8 {
  padding-top: 32px !important;
}

.pt-9 {
  padding-top: 36px !important;
}

.pt-10 {
  padding-top: 40px !important;
}

.pt-11 {
  padding-top: 44px !important;
}

.pt-12 {
  padding-top: 48px !important;
}

.pt-13 {
  padding-top: 52px !important;
}

.pt-14 {
  padding-top: 56px !important;
}

.pt-15 {
  padding-top: 60px !important;
}

.pt-16 {
  padding-top: 64px !important;
}

.pr-0 {
  padding-right: 0px !important;
}

.pr-1 {
  padding-right: 4px !important;
}

.pr-2 {
  padding-right: 8px !important;
}

.pr-3 {
  padding-right: 12px !important;
}

.pr-4 {
  padding-right: 16px !important;
}

.pr-5 {
  padding-right: 20px !important;
}

.pr-6 {
  padding-right: 24px !important;
}

.pr-7 {
  padding-right: 28px !important;
}

.pr-8 {
  padding-right: 32px !important;
}

.pr-9 {
  padding-right: 36px !important;
}

.pr-10 {
  padding-right: 40px !important;
}

.pr-11 {
  padding-right: 44px !important;
}

.pr-12 {
  padding-right: 48px !important;
}

.pr-13 {
  padding-right: 52px !important;
}

.pr-14 {
  padding-right: 56px !important;
}

.pr-15 {
  padding-right: 60px !important;
}

.pr-16 {
  padding-right: 64px !important;
}

.pb-0 {
  padding-bottom: 0px !important;
}

.pb-1 {
  padding-bottom: 4px !important;
}

.pb-2 {
  padding-bottom: 8px !important;
}

.pb-3 {
  padding-bottom: 12px !important;
}

.pb-4 {
  padding-bottom: 16px !important;
}

.pb-5 {
  padding-bottom: 20px !important;
}

.pb-6 {
  padding-bottom: 24px !important;
}

.pb-7 {
  padding-bottom: 28px !important;
}

.pb-8 {
  padding-bottom: 32px !important;
}

.pb-9 {
  padding-bottom: 36px !important;
}

.pb-10 {
  padding-bottom: 40px !important;
}

.pb-11 {
  padding-bottom: 44px !important;
}

.pb-12 {
  padding-bottom: 48px !important;
}

.pb-13 {
  padding-bottom: 52px !important;
}

.pb-14 {
  padding-bottom: 56px !important;
}

.pb-15 {
  padding-bottom: 60px !important;
}

.pb-16 {
  padding-bottom: 64px !important;
}

.pl-0 {
  padding-left: 0px !important;
}

.pl-1 {
  padding-left: 4px !important;
}

.pl-2 {
  padding-left: 8px !important;
}

.pl-3 {
  padding-left: 12px !important;
}

.pl-4 {
  padding-left: 16px !important;
}

.pl-5 {
  padding-left: 20px !important;
}

.pl-6 {
  padding-left: 24px !important;
}

.pl-7 {
  padding-left: 28px !important;
}

.pl-8 {
  padding-left: 32px !important;
}

.pl-9 {
  padding-left: 36px !important;
}

.pl-10 {
  padding-left: 40px !important;
}

.pl-11 {
  padding-left: 44px !important;
}

.pl-12 {
  padding-left: 48px !important;
}

.pl-13 {
  padding-left: 52px !important;
}

.pl-14 {
  padding-left: 56px !important;
}

.pl-15 {
  padding-left: 60px !important;
}

.pl-16 {
  padding-left: 64px !important;
}

.ps-0 {
  padding-inline-start: 0px !important;
}

.ps-1 {
  padding-inline-start: 4px !important;
}

.ps-2 {
  padding-inline-start: 8px !important;
}

.ps-3 {
  padding-inline-start: 12px !important;
}

.ps-4 {
  padding-inline-start: 16px !important;
}

.ps-5 {
  padding-inline-start: 20px !important;
}

.ps-6 {
  padding-inline-start: 24px !important;
}

.ps-7 {
  padding-inline-start: 28px !important;
}

.ps-8 {
  padding-inline-start: 32px !important;
}

.ps-9 {
  padding-inline-start: 36px !important;
}

.ps-10 {
  padding-inline-start: 40px !important;
}

.ps-11 {
  padding-inline-start: 44px !important;
}

.ps-12 {
  padding-inline-start: 48px !important;
}

.ps-13 {
  padding-inline-start: 52px !important;
}

.ps-14 {
  padding-inline-start: 56px !important;
}

.ps-15 {
  padding-inline-start: 60px !important;
}

.ps-16 {
  padding-inline-start: 64px !important;
}

.pe-0 {
  padding-inline-end: 0px !important;
}

.pe-1 {
  padding-inline-end: 4px !important;
}

.pe-2 {
  padding-inline-end: 8px !important;
}

.pe-3 {
  padding-inline-end: 12px !important;
}

.pe-4 {
  padding-inline-end: 16px !important;
}

.pe-5 {
  padding-inline-end: 20px !important;
}

.pe-6 {
  padding-inline-end: 24px !important;
}

.pe-7 {
  padding-inline-end: 28px !important;
}

.pe-8 {
  padding-inline-end: 32px !important;
}

.pe-9 {
  padding-inline-end: 36px !important;
}

.pe-10 {
  padding-inline-end: 40px !important;
}

.pe-11 {
  padding-inline-end: 44px !important;
}

.pe-12 {
  padding-inline-end: 48px !important;
}

.pe-13 {
  padding-inline-end: 52px !important;
}

.pe-14 {
  padding-inline-end: 56px !important;
}

.pe-15 {
  padding-inline-end: 60px !important;
}

.pe-16 {
  padding-inline-end: 64px !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-sm {
  border-radius: 2px !important;
}

.rounded {
  border-radius: 4px !important;
}

.rounded-lg {
  border-radius: 8px !important;
}

.rounded-xl {
  border-radius: 24px !important;
}

.rounded-pill {
  border-radius: 9999px !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-shaped {
  border-radius: 24px 0 !important;
}

.rounded-t-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-t-sm {
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
}

.rounded-t {
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
}

.rounded-t-lg {
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}

.rounded-t-xl {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 24px !important;
}

.rounded-t-pill {
  border-top-left-radius: 9999px !important;
  border-top-right-radius: 9999px !important;
}

.rounded-t-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-t-shaped {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-e-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-rtl .rounded-e-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.v-locale--is-ltr .rounded-e-sm {
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}

.v-locale--is-rtl .rounded-e-sm {
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
}

.v-locale--is-ltr .rounded-e {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.v-locale--is-rtl .rounded-e {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}

.v-locale--is-ltr .rounded-e-lg {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}

.v-locale--is-rtl .rounded-e-lg {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}

.v-locale--is-ltr .rounded-e-xl {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.v-locale--is-rtl .rounded-e-xl {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.v-locale--is-ltr .rounded-e-pill {
  border-top-right-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-e-pill {
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-e-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.v-locale--is-rtl .rounded-e-circle {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.v-locale--is-ltr .rounded-e-shaped {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-rtl .rounded-e-shaped {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-b-0 {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-b-sm {
  border-bottom-left-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}

.rounded-b {
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.rounded-b-lg {
  border-bottom-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}

.rounded-b-xl {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.rounded-b-pill {
  border-bottom-left-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}

.rounded-b-circle {
  border-bottom-left-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-b-shaped {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-s-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.v-locale--is-rtl .rounded-s-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-s-sm {
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
}

.v-locale--is-rtl .rounded-s-sm {
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}

.v-locale--is-ltr .rounded-s {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}

.v-locale--is-rtl .rounded-s {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.v-locale--is-ltr .rounded-s-lg {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}

.v-locale--is-rtl .rounded-s-lg {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}

.v-locale--is-ltr .rounded-s-xl {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.v-locale--is-rtl .rounded-s-xl {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.v-locale--is-ltr .rounded-s-pill {
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-s-pill {
  border-top-right-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-s-circle {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.v-locale--is-rtl .rounded-s-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.v-locale--is-ltr .rounded-s-shaped {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 0 !important;
}

.v-locale--is-rtl .rounded-s-shaped {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-ts-0 {
  border-top-left-radius: 0 !important;
}

.v-locale--is-rtl .rounded-ts-0 {
  border-top-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-ts-sm {
  border-top-left-radius: 2px !important;
}

.v-locale--is-rtl .rounded-ts-sm {
  border-top-right-radius: 2px !important;
}

.v-locale--is-ltr .rounded-ts {
  border-top-left-radius: 4px !important;
}

.v-locale--is-rtl .rounded-ts {
  border-top-right-radius: 4px !important;
}

.v-locale--is-ltr .rounded-ts-lg {
  border-top-left-radius: 8px !important;
}

.v-locale--is-rtl .rounded-ts-lg {
  border-top-right-radius: 8px !important;
}

.v-locale--is-ltr .rounded-ts-xl {
  border-top-left-radius: 24px !important;
}

.v-locale--is-rtl .rounded-ts-xl {
  border-top-right-radius: 24px !important;
}

.v-locale--is-ltr .rounded-ts-pill {
  border-top-left-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-ts-pill {
  border-top-right-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-ts-circle {
  border-top-left-radius: 50% !important;
}

.v-locale--is-rtl .rounded-ts-circle {
  border-top-right-radius: 50% !important;
}

.v-locale--is-ltr .rounded-ts-shaped {
  border-top-left-radius: 24px 0 !important;
}

.v-locale--is-rtl .rounded-ts-shaped {
  border-top-right-radius: 24px 0 !important;
}

.v-locale--is-ltr .rounded-te-0 {
  border-top-right-radius: 0 !important;
}

.v-locale--is-rtl .rounded-te-0 {
  border-top-left-radius: 0 !important;
}

.v-locale--is-ltr .rounded-te-sm {
  border-top-right-radius: 2px !important;
}

.v-locale--is-rtl .rounded-te-sm {
  border-top-left-radius: 2px !important;
}

.v-locale--is-ltr .rounded-te {
  border-top-right-radius: 4px !important;
}

.v-locale--is-rtl .rounded-te {
  border-top-left-radius: 4px !important;
}

.v-locale--is-ltr .rounded-te-lg {
  border-top-right-radius: 8px !important;
}

.v-locale--is-rtl .rounded-te-lg {
  border-top-left-radius: 8px !important;
}

.v-locale--is-ltr .rounded-te-xl {
  border-top-right-radius: 24px !important;
}

.v-locale--is-rtl .rounded-te-xl {
  border-top-left-radius: 24px !important;
}

.v-locale--is-ltr .rounded-te-pill {
  border-top-right-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-te-pill {
  border-top-left-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-te-circle {
  border-top-right-radius: 50% !important;
}

.v-locale--is-rtl .rounded-te-circle {
  border-top-left-radius: 50% !important;
}

.v-locale--is-ltr .rounded-te-shaped {
  border-top-right-radius: 24px 0 !important;
}

.v-locale--is-rtl .rounded-te-shaped {
  border-top-left-radius: 24px 0 !important;
}

.v-locale--is-ltr .rounded-be-0 {
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-rtl .rounded-be-0 {
  border-bottom-left-radius: 0 !important;
}

.v-locale--is-ltr .rounded-be-sm {
  border-bottom-right-radius: 2px !important;
}

.v-locale--is-rtl .rounded-be-sm {
  border-bottom-left-radius: 2px !important;
}

.v-locale--is-ltr .rounded-be {
  border-bottom-right-radius: 4px !important;
}

.v-locale--is-rtl .rounded-be {
  border-bottom-left-radius: 4px !important;
}

.v-locale--is-ltr .rounded-be-lg {
  border-bottom-right-radius: 8px !important;
}

.v-locale--is-rtl .rounded-be-lg {
  border-bottom-left-radius: 8px !important;
}

.v-locale--is-ltr .rounded-be-xl {
  border-bottom-right-radius: 24px !important;
}

.v-locale--is-rtl .rounded-be-xl {
  border-bottom-left-radius: 24px !important;
}

.v-locale--is-ltr .rounded-be-pill {
  border-bottom-right-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-be-pill {
  border-bottom-left-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-be-circle {
  border-bottom-right-radius: 50% !important;
}

.v-locale--is-rtl .rounded-be-circle {
  border-bottom-left-radius: 50% !important;
}

.v-locale--is-ltr .rounded-be-shaped {
  border-bottom-right-radius: 24px 0 !important;
}

.v-locale--is-rtl .rounded-be-shaped {
  border-bottom-left-radius: 24px 0 !important;
}

.v-locale--is-ltr .rounded-bs-0 {
  border-bottom-left-radius: 0 !important;
}

.v-locale--is-rtl .rounded-bs-0 {
  border-bottom-right-radius: 0 !important;
}

.v-locale--is-ltr .rounded-bs-sm {
  border-bottom-left-radius: 2px !important;
}

.v-locale--is-rtl .rounded-bs-sm {
  border-bottom-right-radius: 2px !important;
}

.v-locale--is-ltr .rounded-bs {
  border-bottom-left-radius: 4px !important;
}

.v-locale--is-rtl .rounded-bs {
  border-bottom-right-radius: 4px !important;
}

.v-locale--is-ltr .rounded-bs-lg {
  border-bottom-left-radius: 8px !important;
}

.v-locale--is-rtl .rounded-bs-lg {
  border-bottom-right-radius: 8px !important;
}

.v-locale--is-ltr .rounded-bs-xl {
  border-bottom-left-radius: 24px !important;
}

.v-locale--is-rtl .rounded-bs-xl {
  border-bottom-right-radius: 24px !important;
}

.v-locale--is-ltr .rounded-bs-pill {
  border-bottom-left-radius: 9999px !important;
}

.v-locale--is-rtl .rounded-bs-pill {
  border-bottom-right-radius: 9999px !important;
}

.v-locale--is-ltr .rounded-bs-circle {
  border-bottom-left-radius: 50% !important;
}

.v-locale--is-rtl .rounded-bs-circle {
  border-bottom-right-radius: 50% !important;
}

.v-locale--is-ltr .rounded-bs-shaped {
  border-bottom-left-radius: 24px 0 !important;
}

.v-locale--is-rtl .rounded-bs-shaped {
  border-bottom-right-radius: 24px 0 !important;
}

.border-0 {
  border-width: 0 !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border {
  border-width: thin !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-thin {
  border-width: thin !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-sm {
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-md {
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-lg {
  border-width: 4px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-xl {
  border-width: 8px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-current {
  border-color: currentColor !important;
}

.border-opacity-0 {
  --v-border-opacity: 0 !important;
}

.border-opacity {
  --v-border-opacity: 0.12 !important;
}

.border-opacity-25 {
  --v-border-opacity: 0.25 !important;
}

.border-opacity-50 {
  --v-border-opacity: 0.5 !important;
}

.border-opacity-75 {
  --v-border-opacity: 0.75 !important;
}

.border-opacity-100 {
  --v-border-opacity: 1 !important;
}

.border-t-0 {
  border-block-start-width: 0 !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t {
  border-block-start-width: thin !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-thin {
  border-block-start-width: thin !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-sm {
  border-block-start-width: 1px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-md {
  border-block-start-width: 2px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-lg {
  border-block-start-width: 4px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-xl {
  border-block-start-width: 8px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-0 {
  border-inline-end-width: 0 !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e {
  border-inline-end-width: thin !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-thin {
  border-inline-end-width: thin !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-sm {
  border-inline-end-width: 1px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-md {
  border-inline-end-width: 2px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-lg {
  border-inline-end-width: 4px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-e-xl {
  border-inline-end-width: 8px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-0 {
  border-block-end-width: 0 !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b {
  border-block-end-width: thin !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-thin {
  border-block-end-width: thin !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-sm {
  border-block-end-width: 1px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-md {
  border-block-end-width: 2px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-lg {
  border-block-end-width: 4px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-xl {
  border-block-end-width: 8px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-0 {
  border-inline-start-width: 0 !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s {
  border-inline-start-width: thin !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-thin {
  border-inline-start-width: thin !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-sm {
  border-inline-start-width: 1px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-md {
  border-inline-start-width: 2px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-lg {
  border-inline-start-width: 4px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-s-xl {
  border-inline-start-width: 8px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-solid {
  border-style: solid !important;
}

.border-dashed {
  border-style: dashed !important;
}

.border-dotted {
  border-style: dotted !important;
}

.border-double {
  border-style: double !important;
}

.border-none {
  border-style: none !important;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-justify {
  text-align: justify !important;
}

.text-start {
  text-align: start !important;
}

.text-end {
  text-align: end !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-overline {
  text-decoration: overline !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-no-wrap {
  white-space: nowrap !important;
}

.text-pre {
  white-space: pre !important;
}

.text-pre-line {
  white-space: pre-line !important;
}

.text-pre-wrap {
  white-space: pre-wrap !important;
}

.text-break {
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}

.opacity-hover {
  opacity: var(--v-hover-opacity) !important;
}

.opacity-focus {
  opacity: var(--v-focus-opacity) !important;
}

.opacity-selected {
  opacity: var(--v-selected-opacity) !important;
}

.opacity-activated {
  opacity: var(--v-activated-opacity) !important;
}

.opacity-pressed {
  opacity: var(--v-pressed-opacity) !important;
}

.opacity-dragged {
  opacity: var(--v-dragged-opacity) !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-10 {
  opacity: 0.1 !important;
}

.opacity-20 {
  opacity: 0.2 !important;
}

.opacity-30 {
  opacity: 0.3 !important;
}

.opacity-40 {
  opacity: 0.4 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-60 {
  opacity: 0.6 !important;
}

.opacity-70 {
  opacity: 0.7 !important;
}

.opacity-80 {
  opacity: 0.8 !important;
}

.opacity-90 {
  opacity: 0.9 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.text-high-emphasis {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)) !important;
}

.text-medium-emphasis {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important;
}

.text-disabled {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity)) !important;
}

.text-truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.text-h1 {
  font-size: 6rem !important;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.015625em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-h2 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.0083333333em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-h3 {
  font-size: 3rem !important;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-h4 {
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 1.175;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-subtitle-1 {
  font-size: 1rem !important;
  font-weight: normal;
  line-height: 1.75;
  letter-spacing: 0.009375em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-subtitle-2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0071428571em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-body-1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.03125em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-body-2 {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.425;
  letter-spacing: 0.0178571429em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-button {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.6;
  letter-spacing: 0.0892857143em !important;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase !important;
}

.text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.667;
  letter-spacing: 0.0333333333em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.text-overline {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2.667;
  letter-spacing: 0.1666666667em !important;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase !important;
}

.text-none {
  text-transform: none !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.font-weight-thin {
  font-weight: 100 !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-regular {
  font-weight: 400 !important;
}

.font-weight-medium {
  font-weight: 500 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-black {
  font-weight: 900 !important;
}

.font-italic {
  font-style: italic !important;
}

.text-mono {
  font-family: monospace !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-fixed {
  position: fixed !important;
}

.position-absolute {
  position: absolute !important;
}

.position-sticky {
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.right-0 {
  right: 0 !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.left-0 {
  left: 0 !important;
}

.cursor-auto {
  cursor: auto !important;
}

.cursor-default {
  cursor: default !important;
}

.cursor-pointer {
  cursor: pointer !important;
}

.cursor-wait {
  cursor: wait !important;
}

.cursor-text {
  cursor: text !important;
}

.cursor-move {
  cursor: move !important;
}

.cursor-help {
  cursor: help !important;
}

.cursor-not-allowed {
  cursor: not-allowed !important;
}

.cursor-progress {
  cursor: progress !important;
}

.cursor-grab {
  cursor: grab !important;
}

.cursor-grabbing {
  cursor: grabbing !important;
}

.cursor-none {
  cursor: none !important;
}

.fill-height {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.h-screen {
  height: 100vh !important;
}

.h-0 {
  height: 0 !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-screen {
  height: 100dvh !important;
}

.w-auto {
  width: auto !important;
}

.w-0 {
  width: 0 !important;
}

.w-25 {
  width: 25% !important;
}

.w-33 {
  width: 33% !important;
}

.w-50 {
  width: 50% !important;
}

.w-66 {
  width: 66% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

@media (min-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-sm-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-sm-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-sm-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-sm-start {
    float: left !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-1-1 {
    flex: 1 1 auto !important;
  }
  .flex-sm-1-0 {
    flex: 1 0 auto !important;
  }
  .flex-sm-0-1 {
    flex: 0 1 auto !important;
  }
  .flex-sm-0-0 {
    flex: 0 0 auto !important;
  }
  .flex-sm-1-1-100 {
    flex: 1 1 100% !important;
  }
  .flex-sm-1-0-100 {
    flex: 1 0 100% !important;
  }
  .flex-sm-0-1-100 {
    flex: 0 1 100% !important;
  }
  .flex-sm-0-0-100 {
    flex: 0 0 100% !important;
  }
  .flex-sm-1-1-0 {
    flex: 1 1 0 !important;
  }
  .flex-sm-1-0-0 {
    flex: 1 0 0 !important;
  }
  .flex-sm-0-1-0 {
    flex: 0 1 0 !important;
  }
  .flex-sm-0-0-0 {
    flex: 0 0 0 !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-sm-start {
    justify-content: flex-start !important;
  }
  .justify-sm-end {
    justify-content: flex-end !important;
  }
  .justify-sm-center {
    justify-content: center !important;
  }
  .justify-sm-space-between {
    justify-content: space-between !important;
  }
  .justify-sm-space-around {
    justify-content: space-around !important;
  }
  .justify-sm-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-sm-start {
    align-items: flex-start !important;
  }
  .align-sm-end {
    align-items: flex-end !important;
  }
  .align-sm-center {
    align-items: center !important;
  }
  .align-sm-baseline {
    align-items: baseline !important;
  }
  .align-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-space-between {
    align-content: space-between !important;
  }
  .align-content-sm-space-around {
    align-content: space-around !important;
  }
  .align-content-sm-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-6 {
    order: 6 !important;
  }
  .order-sm-7 {
    order: 7 !important;
  }
  .order-sm-8 {
    order: 8 !important;
  }
  .order-sm-9 {
    order: 9 !important;
  }
  .order-sm-10 {
    order: 10 !important;
  }
  .order-sm-11 {
    order: 11 !important;
  }
  .order-sm-12 {
    order: 12 !important;
  }
  .order-sm-last {
    order: 13 !important;
  }
  .ga-sm-0 {
    gap: 0px !important;
  }
  .ga-sm-1 {
    gap: 4px !important;
  }
  .ga-sm-2 {
    gap: 8px !important;
  }
  .ga-sm-3 {
    gap: 12px !important;
  }
  .ga-sm-4 {
    gap: 16px !important;
  }
  .ga-sm-5 {
    gap: 20px !important;
  }
  .ga-sm-6 {
    gap: 24px !important;
  }
  .ga-sm-7 {
    gap: 28px !important;
  }
  .ga-sm-8 {
    gap: 32px !important;
  }
  .ga-sm-9 {
    gap: 36px !important;
  }
  .ga-sm-10 {
    gap: 40px !important;
  }
  .ga-sm-11 {
    gap: 44px !important;
  }
  .ga-sm-12 {
    gap: 48px !important;
  }
  .ga-sm-13 {
    gap: 52px !important;
  }
  .ga-sm-14 {
    gap: 56px !important;
  }
  .ga-sm-15 {
    gap: 60px !important;
  }
  .ga-sm-16 {
    gap: 64px !important;
  }
  .ga-sm-auto {
    gap: auto !important;
  }
  .gr-sm-0 {
    row-gap: 0px !important;
  }
  .gr-sm-1 {
    row-gap: 4px !important;
  }
  .gr-sm-2 {
    row-gap: 8px !important;
  }
  .gr-sm-3 {
    row-gap: 12px !important;
  }
  .gr-sm-4 {
    row-gap: 16px !important;
  }
  .gr-sm-5 {
    row-gap: 20px !important;
  }
  .gr-sm-6 {
    row-gap: 24px !important;
  }
  .gr-sm-7 {
    row-gap: 28px !important;
  }
  .gr-sm-8 {
    row-gap: 32px !important;
  }
  .gr-sm-9 {
    row-gap: 36px !important;
  }
  .gr-sm-10 {
    row-gap: 40px !important;
  }
  .gr-sm-11 {
    row-gap: 44px !important;
  }
  .gr-sm-12 {
    row-gap: 48px !important;
  }
  .gr-sm-13 {
    row-gap: 52px !important;
  }
  .gr-sm-14 {
    row-gap: 56px !important;
  }
  .gr-sm-15 {
    row-gap: 60px !important;
  }
  .gr-sm-16 {
    row-gap: 64px !important;
  }
  .gr-sm-auto {
    row-gap: auto !important;
  }
  .gc-sm-0 {
    column-gap: 0px !important;
  }
  .gc-sm-1 {
    column-gap: 4px !important;
  }
  .gc-sm-2 {
    column-gap: 8px !important;
  }
  .gc-sm-3 {
    column-gap: 12px !important;
  }
  .gc-sm-4 {
    column-gap: 16px !important;
  }
  .gc-sm-5 {
    column-gap: 20px !important;
  }
  .gc-sm-6 {
    column-gap: 24px !important;
  }
  .gc-sm-7 {
    column-gap: 28px !important;
  }
  .gc-sm-8 {
    column-gap: 32px !important;
  }
  .gc-sm-9 {
    column-gap: 36px !important;
  }
  .gc-sm-10 {
    column-gap: 40px !important;
  }
  .gc-sm-11 {
    column-gap: 44px !important;
  }
  .gc-sm-12 {
    column-gap: 48px !important;
  }
  .gc-sm-13 {
    column-gap: 52px !important;
  }
  .gc-sm-14 {
    column-gap: 56px !important;
  }
  .gc-sm-15 {
    column-gap: 60px !important;
  }
  .gc-sm-16 {
    column-gap: 64px !important;
  }
  .gc-sm-auto {
    column-gap: auto !important;
  }
  .ma-sm-0 {
    margin: 0px !important;
  }
  .ma-sm-1 {
    margin: 4px !important;
  }
  .ma-sm-2 {
    margin: 8px !important;
  }
  .ma-sm-3 {
    margin: 12px !important;
  }
  .ma-sm-4 {
    margin: 16px !important;
  }
  .ma-sm-5 {
    margin: 20px !important;
  }
  .ma-sm-6 {
    margin: 24px !important;
  }
  .ma-sm-7 {
    margin: 28px !important;
  }
  .ma-sm-8 {
    margin: 32px !important;
  }
  .ma-sm-9 {
    margin: 36px !important;
  }
  .ma-sm-10 {
    margin: 40px !important;
  }
  .ma-sm-11 {
    margin: 44px !important;
  }
  .ma-sm-12 {
    margin: 48px !important;
  }
  .ma-sm-13 {
    margin: 52px !important;
  }
  .ma-sm-14 {
    margin: 56px !important;
  }
  .ma-sm-15 {
    margin: 60px !important;
  }
  .ma-sm-16 {
    margin: 64px !important;
  }
  .ma-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-sm-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-sm-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-sm-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-sm-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-sm-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-sm-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-sm-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-sm-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-sm-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-sm-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-sm-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-sm-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-sm-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-sm-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-sm-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-sm-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-sm-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-sm-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-sm-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-sm-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-sm-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-sm-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-sm-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-sm-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-sm-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-sm-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-sm-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-sm-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-sm-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-sm-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-sm-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-sm-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0px !important;
  }
  .mt-sm-1 {
    margin-top: 4px !important;
  }
  .mt-sm-2 {
    margin-top: 8px !important;
  }
  .mt-sm-3 {
    margin-top: 12px !important;
  }
  .mt-sm-4 {
    margin-top: 16px !important;
  }
  .mt-sm-5 {
    margin-top: 20px !important;
  }
  .mt-sm-6 {
    margin-top: 24px !important;
  }
  .mt-sm-7 {
    margin-top: 28px !important;
  }
  .mt-sm-8 {
    margin-top: 32px !important;
  }
  .mt-sm-9 {
    margin-top: 36px !important;
  }
  .mt-sm-10 {
    margin-top: 40px !important;
  }
  .mt-sm-11 {
    margin-top: 44px !important;
  }
  .mt-sm-12 {
    margin-top: 48px !important;
  }
  .mt-sm-13 {
    margin-top: 52px !important;
  }
  .mt-sm-14 {
    margin-top: 56px !important;
  }
  .mt-sm-15 {
    margin-top: 60px !important;
  }
  .mt-sm-16 {
    margin-top: 64px !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-0 {
    margin-right: 0px !important;
  }
  .mr-sm-1 {
    margin-right: 4px !important;
  }
  .mr-sm-2 {
    margin-right: 8px !important;
  }
  .mr-sm-3 {
    margin-right: 12px !important;
  }
  .mr-sm-4 {
    margin-right: 16px !important;
  }
  .mr-sm-5 {
    margin-right: 20px !important;
  }
  .mr-sm-6 {
    margin-right: 24px !important;
  }
  .mr-sm-7 {
    margin-right: 28px !important;
  }
  .mr-sm-8 {
    margin-right: 32px !important;
  }
  .mr-sm-9 {
    margin-right: 36px !important;
  }
  .mr-sm-10 {
    margin-right: 40px !important;
  }
  .mr-sm-11 {
    margin-right: 44px !important;
  }
  .mr-sm-12 {
    margin-right: 48px !important;
  }
  .mr-sm-13 {
    margin-right: 52px !important;
  }
  .mr-sm-14 {
    margin-right: 56px !important;
  }
  .mr-sm-15 {
    margin-right: 60px !important;
  }
  .mr-sm-16 {
    margin-right: 64px !important;
  }
  .mr-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0px !important;
  }
  .mb-sm-1 {
    margin-bottom: 4px !important;
  }
  .mb-sm-2 {
    margin-bottom: 8px !important;
  }
  .mb-sm-3 {
    margin-bottom: 12px !important;
  }
  .mb-sm-4 {
    margin-bottom: 16px !important;
  }
  .mb-sm-5 {
    margin-bottom: 20px !important;
  }
  .mb-sm-6 {
    margin-bottom: 24px !important;
  }
  .mb-sm-7 {
    margin-bottom: 28px !important;
  }
  .mb-sm-8 {
    margin-bottom: 32px !important;
  }
  .mb-sm-9 {
    margin-bottom: 36px !important;
  }
  .mb-sm-10 {
    margin-bottom: 40px !important;
  }
  .mb-sm-11 {
    margin-bottom: 44px !important;
  }
  .mb-sm-12 {
    margin-bottom: 48px !important;
  }
  .mb-sm-13 {
    margin-bottom: 52px !important;
  }
  .mb-sm-14 {
    margin-bottom: 56px !important;
  }
  .mb-sm-15 {
    margin-bottom: 60px !important;
  }
  .mb-sm-16 {
    margin-bottom: 64px !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-0 {
    margin-left: 0px !important;
  }
  .ml-sm-1 {
    margin-left: 4px !important;
  }
  .ml-sm-2 {
    margin-left: 8px !important;
  }
  .ml-sm-3 {
    margin-left: 12px !important;
  }
  .ml-sm-4 {
    margin-left: 16px !important;
  }
  .ml-sm-5 {
    margin-left: 20px !important;
  }
  .ml-sm-6 {
    margin-left: 24px !important;
  }
  .ml-sm-7 {
    margin-left: 28px !important;
  }
  .ml-sm-8 {
    margin-left: 32px !important;
  }
  .ml-sm-9 {
    margin-left: 36px !important;
  }
  .ml-sm-10 {
    margin-left: 40px !important;
  }
  .ml-sm-11 {
    margin-left: 44px !important;
  }
  .ml-sm-12 {
    margin-left: 48px !important;
  }
  .ml-sm-13 {
    margin-left: 52px !important;
  }
  .ml-sm-14 {
    margin-left: 56px !important;
  }
  .ml-sm-15 {
    margin-left: 60px !important;
  }
  .ml-sm-16 {
    margin-left: 64px !important;
  }
  .ml-sm-auto {
    margin-left: auto !important;
  }
  .ms-sm-0 {
    margin-inline-start: 0px !important;
  }
  .ms-sm-1 {
    margin-inline-start: 4px !important;
  }
  .ms-sm-2 {
    margin-inline-start: 8px !important;
  }
  .ms-sm-3 {
    margin-inline-start: 12px !important;
  }
  .ms-sm-4 {
    margin-inline-start: 16px !important;
  }
  .ms-sm-5 {
    margin-inline-start: 20px !important;
  }
  .ms-sm-6 {
    margin-inline-start: 24px !important;
  }
  .ms-sm-7 {
    margin-inline-start: 28px !important;
  }
  .ms-sm-8 {
    margin-inline-start: 32px !important;
  }
  .ms-sm-9 {
    margin-inline-start: 36px !important;
  }
  .ms-sm-10 {
    margin-inline-start: 40px !important;
  }
  .ms-sm-11 {
    margin-inline-start: 44px !important;
  }
  .ms-sm-12 {
    margin-inline-start: 48px !important;
  }
  .ms-sm-13 {
    margin-inline-start: 52px !important;
  }
  .ms-sm-14 {
    margin-inline-start: 56px !important;
  }
  .ms-sm-15 {
    margin-inline-start: 60px !important;
  }
  .ms-sm-16 {
    margin-inline-start: 64px !important;
  }
  .ms-sm-auto {
    margin-inline-start: auto !important;
  }
  .me-sm-0 {
    margin-inline-end: 0px !important;
  }
  .me-sm-1 {
    margin-inline-end: 4px !important;
  }
  .me-sm-2 {
    margin-inline-end: 8px !important;
  }
  .me-sm-3 {
    margin-inline-end: 12px !important;
  }
  .me-sm-4 {
    margin-inline-end: 16px !important;
  }
  .me-sm-5 {
    margin-inline-end: 20px !important;
  }
  .me-sm-6 {
    margin-inline-end: 24px !important;
  }
  .me-sm-7 {
    margin-inline-end: 28px !important;
  }
  .me-sm-8 {
    margin-inline-end: 32px !important;
  }
  .me-sm-9 {
    margin-inline-end: 36px !important;
  }
  .me-sm-10 {
    margin-inline-end: 40px !important;
  }
  .me-sm-11 {
    margin-inline-end: 44px !important;
  }
  .me-sm-12 {
    margin-inline-end: 48px !important;
  }
  .me-sm-13 {
    margin-inline-end: 52px !important;
  }
  .me-sm-14 {
    margin-inline-end: 56px !important;
  }
  .me-sm-15 {
    margin-inline-end: 60px !important;
  }
  .me-sm-16 {
    margin-inline-end: 64px !important;
  }
  .me-sm-auto {
    margin-inline-end: auto !important;
  }
  .ma-sm-n1 {
    margin: -4px !important;
  }
  .ma-sm-n2 {
    margin: -8px !important;
  }
  .ma-sm-n3 {
    margin: -12px !important;
  }
  .ma-sm-n4 {
    margin: -16px !important;
  }
  .ma-sm-n5 {
    margin: -20px !important;
  }
  .ma-sm-n6 {
    margin: -24px !important;
  }
  .ma-sm-n7 {
    margin: -28px !important;
  }
  .ma-sm-n8 {
    margin: -32px !important;
  }
  .ma-sm-n9 {
    margin: -36px !important;
  }
  .ma-sm-n10 {
    margin: -40px !important;
  }
  .ma-sm-n11 {
    margin: -44px !important;
  }
  .ma-sm-n12 {
    margin: -48px !important;
  }
  .ma-sm-n13 {
    margin: -52px !important;
  }
  .ma-sm-n14 {
    margin: -56px !important;
  }
  .ma-sm-n15 {
    margin: -60px !important;
  }
  .ma-sm-n16 {
    margin: -64px !important;
  }
  .mx-sm-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-sm-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-sm-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-sm-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-sm-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-sm-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-sm-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-sm-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-sm-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-sm-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-sm-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-sm-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-sm-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-sm-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-sm-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-sm-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-sm-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-sm-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-sm-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-sm-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-sm-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-sm-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-sm-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-sm-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-sm-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-sm-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-sm-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-sm-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-sm-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-sm-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-sm-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-sm-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-sm-n1 {
    margin-top: -4px !important;
  }
  .mt-sm-n2 {
    margin-top: -8px !important;
  }
  .mt-sm-n3 {
    margin-top: -12px !important;
  }
  .mt-sm-n4 {
    margin-top: -16px !important;
  }
  .mt-sm-n5 {
    margin-top: -20px !important;
  }
  .mt-sm-n6 {
    margin-top: -24px !important;
  }
  .mt-sm-n7 {
    margin-top: -28px !important;
  }
  .mt-sm-n8 {
    margin-top: -32px !important;
  }
  .mt-sm-n9 {
    margin-top: -36px !important;
  }
  .mt-sm-n10 {
    margin-top: -40px !important;
  }
  .mt-sm-n11 {
    margin-top: -44px !important;
  }
  .mt-sm-n12 {
    margin-top: -48px !important;
  }
  .mt-sm-n13 {
    margin-top: -52px !important;
  }
  .mt-sm-n14 {
    margin-top: -56px !important;
  }
  .mt-sm-n15 {
    margin-top: -60px !important;
  }
  .mt-sm-n16 {
    margin-top: -64px !important;
  }
  .mr-sm-n1 {
    margin-right: -4px !important;
  }
  .mr-sm-n2 {
    margin-right: -8px !important;
  }
  .mr-sm-n3 {
    margin-right: -12px !important;
  }
  .mr-sm-n4 {
    margin-right: -16px !important;
  }
  .mr-sm-n5 {
    margin-right: -20px !important;
  }
  .mr-sm-n6 {
    margin-right: -24px !important;
  }
  .mr-sm-n7 {
    margin-right: -28px !important;
  }
  .mr-sm-n8 {
    margin-right: -32px !important;
  }
  .mr-sm-n9 {
    margin-right: -36px !important;
  }
  .mr-sm-n10 {
    margin-right: -40px !important;
  }
  .mr-sm-n11 {
    margin-right: -44px !important;
  }
  .mr-sm-n12 {
    margin-right: -48px !important;
  }
  .mr-sm-n13 {
    margin-right: -52px !important;
  }
  .mr-sm-n14 {
    margin-right: -56px !important;
  }
  .mr-sm-n15 {
    margin-right: -60px !important;
  }
  .mr-sm-n16 {
    margin-right: -64px !important;
  }
  .mb-sm-n1 {
    margin-bottom: -4px !important;
  }
  .mb-sm-n2 {
    margin-bottom: -8px !important;
  }
  .mb-sm-n3 {
    margin-bottom: -12px !important;
  }
  .mb-sm-n4 {
    margin-bottom: -16px !important;
  }
  .mb-sm-n5 {
    margin-bottom: -20px !important;
  }
  .mb-sm-n6 {
    margin-bottom: -24px !important;
  }
  .mb-sm-n7 {
    margin-bottom: -28px !important;
  }
  .mb-sm-n8 {
    margin-bottom: -32px !important;
  }
  .mb-sm-n9 {
    margin-bottom: -36px !important;
  }
  .mb-sm-n10 {
    margin-bottom: -40px !important;
  }
  .mb-sm-n11 {
    margin-bottom: -44px !important;
  }
  .mb-sm-n12 {
    margin-bottom: -48px !important;
  }
  .mb-sm-n13 {
    margin-bottom: -52px !important;
  }
  .mb-sm-n14 {
    margin-bottom: -56px !important;
  }
  .mb-sm-n15 {
    margin-bottom: -60px !important;
  }
  .mb-sm-n16 {
    margin-bottom: -64px !important;
  }
  .ml-sm-n1 {
    margin-left: -4px !important;
  }
  .ml-sm-n2 {
    margin-left: -8px !important;
  }
  .ml-sm-n3 {
    margin-left: -12px !important;
  }
  .ml-sm-n4 {
    margin-left: -16px !important;
  }
  .ml-sm-n5 {
    margin-left: -20px !important;
  }
  .ml-sm-n6 {
    margin-left: -24px !important;
  }
  .ml-sm-n7 {
    margin-left: -28px !important;
  }
  .ml-sm-n8 {
    margin-left: -32px !important;
  }
  .ml-sm-n9 {
    margin-left: -36px !important;
  }
  .ml-sm-n10 {
    margin-left: -40px !important;
  }
  .ml-sm-n11 {
    margin-left: -44px !important;
  }
  .ml-sm-n12 {
    margin-left: -48px !important;
  }
  .ml-sm-n13 {
    margin-left: -52px !important;
  }
  .ml-sm-n14 {
    margin-left: -56px !important;
  }
  .ml-sm-n15 {
    margin-left: -60px !important;
  }
  .ml-sm-n16 {
    margin-left: -64px !important;
  }
  .ms-sm-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-sm-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-sm-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-sm-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-sm-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-sm-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-sm-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-sm-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-sm-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-sm-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-sm-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-sm-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-sm-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-sm-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-sm-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-sm-n16 {
    margin-inline-start: -64px !important;
  }
  .me-sm-n1 {
    margin-inline-end: -4px !important;
  }
  .me-sm-n2 {
    margin-inline-end: -8px !important;
  }
  .me-sm-n3 {
    margin-inline-end: -12px !important;
  }
  .me-sm-n4 {
    margin-inline-end: -16px !important;
  }
  .me-sm-n5 {
    margin-inline-end: -20px !important;
  }
  .me-sm-n6 {
    margin-inline-end: -24px !important;
  }
  .me-sm-n7 {
    margin-inline-end: -28px !important;
  }
  .me-sm-n8 {
    margin-inline-end: -32px !important;
  }
  .me-sm-n9 {
    margin-inline-end: -36px !important;
  }
  .me-sm-n10 {
    margin-inline-end: -40px !important;
  }
  .me-sm-n11 {
    margin-inline-end: -44px !important;
  }
  .me-sm-n12 {
    margin-inline-end: -48px !important;
  }
  .me-sm-n13 {
    margin-inline-end: -52px !important;
  }
  .me-sm-n14 {
    margin-inline-end: -56px !important;
  }
  .me-sm-n15 {
    margin-inline-end: -60px !important;
  }
  .me-sm-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-sm-0 {
    padding: 0px !important;
  }
  .pa-sm-1 {
    padding: 4px !important;
  }
  .pa-sm-2 {
    padding: 8px !important;
  }
  .pa-sm-3 {
    padding: 12px !important;
  }
  .pa-sm-4 {
    padding: 16px !important;
  }
  .pa-sm-5 {
    padding: 20px !important;
  }
  .pa-sm-6 {
    padding: 24px !important;
  }
  .pa-sm-7 {
    padding: 28px !important;
  }
  .pa-sm-8 {
    padding: 32px !important;
  }
  .pa-sm-9 {
    padding: 36px !important;
  }
  .pa-sm-10 {
    padding: 40px !important;
  }
  .pa-sm-11 {
    padding: 44px !important;
  }
  .pa-sm-12 {
    padding: 48px !important;
  }
  .pa-sm-13 {
    padding: 52px !important;
  }
  .pa-sm-14 {
    padding: 56px !important;
  }
  .pa-sm-15 {
    padding: 60px !important;
  }
  .pa-sm-16 {
    padding: 64px !important;
  }
  .px-sm-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-sm-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-sm-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-sm-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-sm-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-sm-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-sm-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-sm-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-sm-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-sm-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-sm-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-sm-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-sm-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-sm-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-sm-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-sm-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-sm-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-sm-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-sm-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-sm-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-sm-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-sm-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-sm-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-sm-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-sm-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-sm-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-sm-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-sm-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-sm-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-sm-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-sm-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-sm-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-sm-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-sm-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-sm-0 {
    padding-top: 0px !important;
  }
  .pt-sm-1 {
    padding-top: 4px !important;
  }
  .pt-sm-2 {
    padding-top: 8px !important;
  }
  .pt-sm-3 {
    padding-top: 12px !important;
  }
  .pt-sm-4 {
    padding-top: 16px !important;
  }
  .pt-sm-5 {
    padding-top: 20px !important;
  }
  .pt-sm-6 {
    padding-top: 24px !important;
  }
  .pt-sm-7 {
    padding-top: 28px !important;
  }
  .pt-sm-8 {
    padding-top: 32px !important;
  }
  .pt-sm-9 {
    padding-top: 36px !important;
  }
  .pt-sm-10 {
    padding-top: 40px !important;
  }
  .pt-sm-11 {
    padding-top: 44px !important;
  }
  .pt-sm-12 {
    padding-top: 48px !important;
  }
  .pt-sm-13 {
    padding-top: 52px !important;
  }
  .pt-sm-14 {
    padding-top: 56px !important;
  }
  .pt-sm-15 {
    padding-top: 60px !important;
  }
  .pt-sm-16 {
    padding-top: 64px !important;
  }
  .pr-sm-0 {
    padding-right: 0px !important;
  }
  .pr-sm-1 {
    padding-right: 4px !important;
  }
  .pr-sm-2 {
    padding-right: 8px !important;
  }
  .pr-sm-3 {
    padding-right: 12px !important;
  }
  .pr-sm-4 {
    padding-right: 16px !important;
  }
  .pr-sm-5 {
    padding-right: 20px !important;
  }
  .pr-sm-6 {
    padding-right: 24px !important;
  }
  .pr-sm-7 {
    padding-right: 28px !important;
  }
  .pr-sm-8 {
    padding-right: 32px !important;
  }
  .pr-sm-9 {
    padding-right: 36px !important;
  }
  .pr-sm-10 {
    padding-right: 40px !important;
  }
  .pr-sm-11 {
    padding-right: 44px !important;
  }
  .pr-sm-12 {
    padding-right: 48px !important;
  }
  .pr-sm-13 {
    padding-right: 52px !important;
  }
  .pr-sm-14 {
    padding-right: 56px !important;
  }
  .pr-sm-15 {
    padding-right: 60px !important;
  }
  .pr-sm-16 {
    padding-right: 64px !important;
  }
  .pb-sm-0 {
    padding-bottom: 0px !important;
  }
  .pb-sm-1 {
    padding-bottom: 4px !important;
  }
  .pb-sm-2 {
    padding-bottom: 8px !important;
  }
  .pb-sm-3 {
    padding-bottom: 12px !important;
  }
  .pb-sm-4 {
    padding-bottom: 16px !important;
  }
  .pb-sm-5 {
    padding-bottom: 20px !important;
  }
  .pb-sm-6 {
    padding-bottom: 24px !important;
  }
  .pb-sm-7 {
    padding-bottom: 28px !important;
  }
  .pb-sm-8 {
    padding-bottom: 32px !important;
  }
  .pb-sm-9 {
    padding-bottom: 36px !important;
  }
  .pb-sm-10 {
    padding-bottom: 40px !important;
  }
  .pb-sm-11 {
    padding-bottom: 44px !important;
  }
  .pb-sm-12 {
    padding-bottom: 48px !important;
  }
  .pb-sm-13 {
    padding-bottom: 52px !important;
  }
  .pb-sm-14 {
    padding-bottom: 56px !important;
  }
  .pb-sm-15 {
    padding-bottom: 60px !important;
  }
  .pb-sm-16 {
    padding-bottom: 64px !important;
  }
  .pl-sm-0 {
    padding-left: 0px !important;
  }
  .pl-sm-1 {
    padding-left: 4px !important;
  }
  .pl-sm-2 {
    padding-left: 8px !important;
  }
  .pl-sm-3 {
    padding-left: 12px !important;
  }
  .pl-sm-4 {
    padding-left: 16px !important;
  }
  .pl-sm-5 {
    padding-left: 20px !important;
  }
  .pl-sm-6 {
    padding-left: 24px !important;
  }
  .pl-sm-7 {
    padding-left: 28px !important;
  }
  .pl-sm-8 {
    padding-left: 32px !important;
  }
  .pl-sm-9 {
    padding-left: 36px !important;
  }
  .pl-sm-10 {
    padding-left: 40px !important;
  }
  .pl-sm-11 {
    padding-left: 44px !important;
  }
  .pl-sm-12 {
    padding-left: 48px !important;
  }
  .pl-sm-13 {
    padding-left: 52px !important;
  }
  .pl-sm-14 {
    padding-left: 56px !important;
  }
  .pl-sm-15 {
    padding-left: 60px !important;
  }
  .pl-sm-16 {
    padding-left: 64px !important;
  }
  .ps-sm-0 {
    padding-inline-start: 0px !important;
  }
  .ps-sm-1 {
    padding-inline-start: 4px !important;
  }
  .ps-sm-2 {
    padding-inline-start: 8px !important;
  }
  .ps-sm-3 {
    padding-inline-start: 12px !important;
  }
  .ps-sm-4 {
    padding-inline-start: 16px !important;
  }
  .ps-sm-5 {
    padding-inline-start: 20px !important;
  }
  .ps-sm-6 {
    padding-inline-start: 24px !important;
  }
  .ps-sm-7 {
    padding-inline-start: 28px !important;
  }
  .ps-sm-8 {
    padding-inline-start: 32px !important;
  }
  .ps-sm-9 {
    padding-inline-start: 36px !important;
  }
  .ps-sm-10 {
    padding-inline-start: 40px !important;
  }
  .ps-sm-11 {
    padding-inline-start: 44px !important;
  }
  .ps-sm-12 {
    padding-inline-start: 48px !important;
  }
  .ps-sm-13 {
    padding-inline-start: 52px !important;
  }
  .ps-sm-14 {
    padding-inline-start: 56px !important;
  }
  .ps-sm-15 {
    padding-inline-start: 60px !important;
  }
  .ps-sm-16 {
    padding-inline-start: 64px !important;
  }
  .pe-sm-0 {
    padding-inline-end: 0px !important;
  }
  .pe-sm-1 {
    padding-inline-end: 4px !important;
  }
  .pe-sm-2 {
    padding-inline-end: 8px !important;
  }
  .pe-sm-3 {
    padding-inline-end: 12px !important;
  }
  .pe-sm-4 {
    padding-inline-end: 16px !important;
  }
  .pe-sm-5 {
    padding-inline-end: 20px !important;
  }
  .pe-sm-6 {
    padding-inline-end: 24px !important;
  }
  .pe-sm-7 {
    padding-inline-end: 28px !important;
  }
  .pe-sm-8 {
    padding-inline-end: 32px !important;
  }
  .pe-sm-9 {
    padding-inline-end: 36px !important;
  }
  .pe-sm-10 {
    padding-inline-end: 40px !important;
  }
  .pe-sm-11 {
    padding-inline-end: 44px !important;
  }
  .pe-sm-12 {
    padding-inline-end: 48px !important;
  }
  .pe-sm-13 {
    padding-inline-end: 52px !important;
  }
  .pe-sm-14 {
    padding-inline-end: 56px !important;
  }
  .pe-sm-15 {
    padding-inline-end: 60px !important;
  }
  .pe-sm-16 {
    padding-inline-end: 64px !important;
  }
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
  .text-sm-justify {
    text-align: justify !important;
  }
  .text-sm-start {
    text-align: start !important;
  }
  .text-sm-end {
    text-align: end !important;
  }
  .text-sm-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 1.175;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 1.333;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.425;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.6;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .text-sm-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.667;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-sm-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2.667;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .h-sm-auto {
    height: auto !important;
  }
  .h-sm-screen {
    height: 100vh !important;
  }
  .h-sm-0 {
    height: 0 !important;
  }
  .h-sm-25 {
    height: 25% !important;
  }
  .h-sm-50 {
    height: 50% !important;
  }
  .h-sm-75 {
    height: 75% !important;
  }
  .h-sm-100 {
    height: 100% !important;
  }
  .w-sm-auto {
    width: auto !important;
  }
  .w-sm-0 {
    width: 0 !important;
  }
  .w-sm-25 {
    width: 25% !important;
  }
  .w-sm-33 {
    width: 33% !important;
  }
  .w-sm-50 {
    width: 50% !important;
  }
  .w-sm-66 {
    width: 66% !important;
  }
  .w-sm-75 {
    width: 75% !important;
  }
  .w-sm-100 {
    width: 100% !important;
  }
}
@media (min-width: 960px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .float-md-none {
    float: none !important;
  }
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-md-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-md-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-md-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-md-start {
    float: left !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-1-1 {
    flex: 1 1 auto !important;
  }
  .flex-md-1-0 {
    flex: 1 0 auto !important;
  }
  .flex-md-0-1 {
    flex: 0 1 auto !important;
  }
  .flex-md-0-0 {
    flex: 0 0 auto !important;
  }
  .flex-md-1-1-100 {
    flex: 1 1 100% !important;
  }
  .flex-md-1-0-100 {
    flex: 1 0 100% !important;
  }
  .flex-md-0-1-100 {
    flex: 0 1 100% !important;
  }
  .flex-md-0-0-100 {
    flex: 0 0 100% !important;
  }
  .flex-md-1-1-0 {
    flex: 1 1 0 !important;
  }
  .flex-md-1-0-0 {
    flex: 1 0 0 !important;
  }
  .flex-md-0-1-0 {
    flex: 0 1 0 !important;
  }
  .flex-md-0-0-0 {
    flex: 0 0 0 !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-md-start {
    justify-content: flex-start !important;
  }
  .justify-md-end {
    justify-content: flex-end !important;
  }
  .justify-md-center {
    justify-content: center !important;
  }
  .justify-md-space-between {
    justify-content: space-between !important;
  }
  .justify-md-space-around {
    justify-content: space-around !important;
  }
  .justify-md-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-md-start {
    align-items: flex-start !important;
  }
  .align-md-end {
    align-items: flex-end !important;
  }
  .align-md-center {
    align-items: center !important;
  }
  .align-md-baseline {
    align-items: baseline !important;
  }
  .align-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-space-between {
    align-content: space-between !important;
  }
  .align-content-md-space-around {
    align-content: space-around !important;
  }
  .align-content-md-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-6 {
    order: 6 !important;
  }
  .order-md-7 {
    order: 7 !important;
  }
  .order-md-8 {
    order: 8 !important;
  }
  .order-md-9 {
    order: 9 !important;
  }
  .order-md-10 {
    order: 10 !important;
  }
  .order-md-11 {
    order: 11 !important;
  }
  .order-md-12 {
    order: 12 !important;
  }
  .order-md-last {
    order: 13 !important;
  }
  .ga-md-0 {
    gap: 0px !important;
  }
  .ga-md-1 {
    gap: 4px !important;
  }
  .ga-md-2 {
    gap: 8px !important;
  }
  .ga-md-3 {
    gap: 12px !important;
  }
  .ga-md-4 {
    gap: 16px !important;
  }
  .ga-md-5 {
    gap: 20px !important;
  }
  .ga-md-6 {
    gap: 24px !important;
  }
  .ga-md-7 {
    gap: 28px !important;
  }
  .ga-md-8 {
    gap: 32px !important;
  }
  .ga-md-9 {
    gap: 36px !important;
  }
  .ga-md-10 {
    gap: 40px !important;
  }
  .ga-md-11 {
    gap: 44px !important;
  }
  .ga-md-12 {
    gap: 48px !important;
  }
  .ga-md-13 {
    gap: 52px !important;
  }
  .ga-md-14 {
    gap: 56px !important;
  }
  .ga-md-15 {
    gap: 60px !important;
  }
  .ga-md-16 {
    gap: 64px !important;
  }
  .ga-md-auto {
    gap: auto !important;
  }
  .gr-md-0 {
    row-gap: 0px !important;
  }
  .gr-md-1 {
    row-gap: 4px !important;
  }
  .gr-md-2 {
    row-gap: 8px !important;
  }
  .gr-md-3 {
    row-gap: 12px !important;
  }
  .gr-md-4 {
    row-gap: 16px !important;
  }
  .gr-md-5 {
    row-gap: 20px !important;
  }
  .gr-md-6 {
    row-gap: 24px !important;
  }
  .gr-md-7 {
    row-gap: 28px !important;
  }
  .gr-md-8 {
    row-gap: 32px !important;
  }
  .gr-md-9 {
    row-gap: 36px !important;
  }
  .gr-md-10 {
    row-gap: 40px !important;
  }
  .gr-md-11 {
    row-gap: 44px !important;
  }
  .gr-md-12 {
    row-gap: 48px !important;
  }
  .gr-md-13 {
    row-gap: 52px !important;
  }
  .gr-md-14 {
    row-gap: 56px !important;
  }
  .gr-md-15 {
    row-gap: 60px !important;
  }
  .gr-md-16 {
    row-gap: 64px !important;
  }
  .gr-md-auto {
    row-gap: auto !important;
  }
  .gc-md-0 {
    column-gap: 0px !important;
  }
  .gc-md-1 {
    column-gap: 4px !important;
  }
  .gc-md-2 {
    column-gap: 8px !important;
  }
  .gc-md-3 {
    column-gap: 12px !important;
  }
  .gc-md-4 {
    column-gap: 16px !important;
  }
  .gc-md-5 {
    column-gap: 20px !important;
  }
  .gc-md-6 {
    column-gap: 24px !important;
  }
  .gc-md-7 {
    column-gap: 28px !important;
  }
  .gc-md-8 {
    column-gap: 32px !important;
  }
  .gc-md-9 {
    column-gap: 36px !important;
  }
  .gc-md-10 {
    column-gap: 40px !important;
  }
  .gc-md-11 {
    column-gap: 44px !important;
  }
  .gc-md-12 {
    column-gap: 48px !important;
  }
  .gc-md-13 {
    column-gap: 52px !important;
  }
  .gc-md-14 {
    column-gap: 56px !important;
  }
  .gc-md-15 {
    column-gap: 60px !important;
  }
  .gc-md-16 {
    column-gap: 64px !important;
  }
  .gc-md-auto {
    column-gap: auto !important;
  }
  .ma-md-0 {
    margin: 0px !important;
  }
  .ma-md-1 {
    margin: 4px !important;
  }
  .ma-md-2 {
    margin: 8px !important;
  }
  .ma-md-3 {
    margin: 12px !important;
  }
  .ma-md-4 {
    margin: 16px !important;
  }
  .ma-md-5 {
    margin: 20px !important;
  }
  .ma-md-6 {
    margin: 24px !important;
  }
  .ma-md-7 {
    margin: 28px !important;
  }
  .ma-md-8 {
    margin: 32px !important;
  }
  .ma-md-9 {
    margin: 36px !important;
  }
  .ma-md-10 {
    margin: 40px !important;
  }
  .ma-md-11 {
    margin: 44px !important;
  }
  .ma-md-12 {
    margin: 48px !important;
  }
  .ma-md-13 {
    margin: 52px !important;
  }
  .ma-md-14 {
    margin: 56px !important;
  }
  .ma-md-15 {
    margin: 60px !important;
  }
  .ma-md-16 {
    margin: 64px !important;
  }
  .ma-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-md-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-md-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-md-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-md-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-md-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-md-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-md-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-md-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-md-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-md-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-md-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-md-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-md-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-md-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-md-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-md-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-md-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-md-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-md-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-md-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-md-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-md-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-md-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-md-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-md-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-md-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-md-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-md-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-md-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-md-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-md-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-md-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0px !important;
  }
  .mt-md-1 {
    margin-top: 4px !important;
  }
  .mt-md-2 {
    margin-top: 8px !important;
  }
  .mt-md-3 {
    margin-top: 12px !important;
  }
  .mt-md-4 {
    margin-top: 16px !important;
  }
  .mt-md-5 {
    margin-top: 20px !important;
  }
  .mt-md-6 {
    margin-top: 24px !important;
  }
  .mt-md-7 {
    margin-top: 28px !important;
  }
  .mt-md-8 {
    margin-top: 32px !important;
  }
  .mt-md-9 {
    margin-top: 36px !important;
  }
  .mt-md-10 {
    margin-top: 40px !important;
  }
  .mt-md-11 {
    margin-top: 44px !important;
  }
  .mt-md-12 {
    margin-top: 48px !important;
  }
  .mt-md-13 {
    margin-top: 52px !important;
  }
  .mt-md-14 {
    margin-top: 56px !important;
  }
  .mt-md-15 {
    margin-top: 60px !important;
  }
  .mt-md-16 {
    margin-top: 64px !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .mr-md-0 {
    margin-right: 0px !important;
  }
  .mr-md-1 {
    margin-right: 4px !important;
  }
  .mr-md-2 {
    margin-right: 8px !important;
  }
  .mr-md-3 {
    margin-right: 12px !important;
  }
  .mr-md-4 {
    margin-right: 16px !important;
  }
  .mr-md-5 {
    margin-right: 20px !important;
  }
  .mr-md-6 {
    margin-right: 24px !important;
  }
  .mr-md-7 {
    margin-right: 28px !important;
  }
  .mr-md-8 {
    margin-right: 32px !important;
  }
  .mr-md-9 {
    margin-right: 36px !important;
  }
  .mr-md-10 {
    margin-right: 40px !important;
  }
  .mr-md-11 {
    margin-right: 44px !important;
  }
  .mr-md-12 {
    margin-right: 48px !important;
  }
  .mr-md-13 {
    margin-right: 52px !important;
  }
  .mr-md-14 {
    margin-right: 56px !important;
  }
  .mr-md-15 {
    margin-right: 60px !important;
  }
  .mr-md-16 {
    margin-right: 64px !important;
  }
  .mr-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0px !important;
  }
  .mb-md-1 {
    margin-bottom: 4px !important;
  }
  .mb-md-2 {
    margin-bottom: 8px !important;
  }
  .mb-md-3 {
    margin-bottom: 12px !important;
  }
  .mb-md-4 {
    margin-bottom: 16px !important;
  }
  .mb-md-5 {
    margin-bottom: 20px !important;
  }
  .mb-md-6 {
    margin-bottom: 24px !important;
  }
  .mb-md-7 {
    margin-bottom: 28px !important;
  }
  .mb-md-8 {
    margin-bottom: 32px !important;
  }
  .mb-md-9 {
    margin-bottom: 36px !important;
  }
  .mb-md-10 {
    margin-bottom: 40px !important;
  }
  .mb-md-11 {
    margin-bottom: 44px !important;
  }
  .mb-md-12 {
    margin-bottom: 48px !important;
  }
  .mb-md-13 {
    margin-bottom: 52px !important;
  }
  .mb-md-14 {
    margin-bottom: 56px !important;
  }
  .mb-md-15 {
    margin-bottom: 60px !important;
  }
  .mb-md-16 {
    margin-bottom: 64px !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-0 {
    margin-left: 0px !important;
  }
  .ml-md-1 {
    margin-left: 4px !important;
  }
  .ml-md-2 {
    margin-left: 8px !important;
  }
  .ml-md-3 {
    margin-left: 12px !important;
  }
  .ml-md-4 {
    margin-left: 16px !important;
  }
  .ml-md-5 {
    margin-left: 20px !important;
  }
  .ml-md-6 {
    margin-left: 24px !important;
  }
  .ml-md-7 {
    margin-left: 28px !important;
  }
  .ml-md-8 {
    margin-left: 32px !important;
  }
  .ml-md-9 {
    margin-left: 36px !important;
  }
  .ml-md-10 {
    margin-left: 40px !important;
  }
  .ml-md-11 {
    margin-left: 44px !important;
  }
  .ml-md-12 {
    margin-left: 48px !important;
  }
  .ml-md-13 {
    margin-left: 52px !important;
  }
  .ml-md-14 {
    margin-left: 56px !important;
  }
  .ml-md-15 {
    margin-left: 60px !important;
  }
  .ml-md-16 {
    margin-left: 64px !important;
  }
  .ml-md-auto {
    margin-left: auto !important;
  }
  .ms-md-0 {
    margin-inline-start: 0px !important;
  }
  .ms-md-1 {
    margin-inline-start: 4px !important;
  }
  .ms-md-2 {
    margin-inline-start: 8px !important;
  }
  .ms-md-3 {
    margin-inline-start: 12px !important;
  }
  .ms-md-4 {
    margin-inline-start: 16px !important;
  }
  .ms-md-5 {
    margin-inline-start: 20px !important;
  }
  .ms-md-6 {
    margin-inline-start: 24px !important;
  }
  .ms-md-7 {
    margin-inline-start: 28px !important;
  }
  .ms-md-8 {
    margin-inline-start: 32px !important;
  }
  .ms-md-9 {
    margin-inline-start: 36px !important;
  }
  .ms-md-10 {
    margin-inline-start: 40px !important;
  }
  .ms-md-11 {
    margin-inline-start: 44px !important;
  }
  .ms-md-12 {
    margin-inline-start: 48px !important;
  }
  .ms-md-13 {
    margin-inline-start: 52px !important;
  }
  .ms-md-14 {
    margin-inline-start: 56px !important;
  }
  .ms-md-15 {
    margin-inline-start: 60px !important;
  }
  .ms-md-16 {
    margin-inline-start: 64px !important;
  }
  .ms-md-auto {
    margin-inline-start: auto !important;
  }
  .me-md-0 {
    margin-inline-end: 0px !important;
  }
  .me-md-1 {
    margin-inline-end: 4px !important;
  }
  .me-md-2 {
    margin-inline-end: 8px !important;
  }
  .me-md-3 {
    margin-inline-end: 12px !important;
  }
  .me-md-4 {
    margin-inline-end: 16px !important;
  }
  .me-md-5 {
    margin-inline-end: 20px !important;
  }
  .me-md-6 {
    margin-inline-end: 24px !important;
  }
  .me-md-7 {
    margin-inline-end: 28px !important;
  }
  .me-md-8 {
    margin-inline-end: 32px !important;
  }
  .me-md-9 {
    margin-inline-end: 36px !important;
  }
  .me-md-10 {
    margin-inline-end: 40px !important;
  }
  .me-md-11 {
    margin-inline-end: 44px !important;
  }
  .me-md-12 {
    margin-inline-end: 48px !important;
  }
  .me-md-13 {
    margin-inline-end: 52px !important;
  }
  .me-md-14 {
    margin-inline-end: 56px !important;
  }
  .me-md-15 {
    margin-inline-end: 60px !important;
  }
  .me-md-16 {
    margin-inline-end: 64px !important;
  }
  .me-md-auto {
    margin-inline-end: auto !important;
  }
  .ma-md-n1 {
    margin: -4px !important;
  }
  .ma-md-n2 {
    margin: -8px !important;
  }
  .ma-md-n3 {
    margin: -12px !important;
  }
  .ma-md-n4 {
    margin: -16px !important;
  }
  .ma-md-n5 {
    margin: -20px !important;
  }
  .ma-md-n6 {
    margin: -24px !important;
  }
  .ma-md-n7 {
    margin: -28px !important;
  }
  .ma-md-n8 {
    margin: -32px !important;
  }
  .ma-md-n9 {
    margin: -36px !important;
  }
  .ma-md-n10 {
    margin: -40px !important;
  }
  .ma-md-n11 {
    margin: -44px !important;
  }
  .ma-md-n12 {
    margin: -48px !important;
  }
  .ma-md-n13 {
    margin: -52px !important;
  }
  .ma-md-n14 {
    margin: -56px !important;
  }
  .ma-md-n15 {
    margin: -60px !important;
  }
  .ma-md-n16 {
    margin: -64px !important;
  }
  .mx-md-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-md-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-md-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-md-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-md-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-md-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-md-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-md-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-md-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-md-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-md-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-md-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-md-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-md-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-md-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-md-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-md-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-md-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-md-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-md-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-md-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-md-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-md-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-md-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-md-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-md-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-md-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-md-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-md-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-md-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-md-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-md-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-md-n1 {
    margin-top: -4px !important;
  }
  .mt-md-n2 {
    margin-top: -8px !important;
  }
  .mt-md-n3 {
    margin-top: -12px !important;
  }
  .mt-md-n4 {
    margin-top: -16px !important;
  }
  .mt-md-n5 {
    margin-top: -20px !important;
  }
  .mt-md-n6 {
    margin-top: -24px !important;
  }
  .mt-md-n7 {
    margin-top: -28px !important;
  }
  .mt-md-n8 {
    margin-top: -32px !important;
  }
  .mt-md-n9 {
    margin-top: -36px !important;
  }
  .mt-md-n10 {
    margin-top: -40px !important;
  }
  .mt-md-n11 {
    margin-top: -44px !important;
  }
  .mt-md-n12 {
    margin-top: -48px !important;
  }
  .mt-md-n13 {
    margin-top: -52px !important;
  }
  .mt-md-n14 {
    margin-top: -56px !important;
  }
  .mt-md-n15 {
    margin-top: -60px !important;
  }
  .mt-md-n16 {
    margin-top: -64px !important;
  }
  .mr-md-n1 {
    margin-right: -4px !important;
  }
  .mr-md-n2 {
    margin-right: -8px !important;
  }
  .mr-md-n3 {
    margin-right: -12px !important;
  }
  .mr-md-n4 {
    margin-right: -16px !important;
  }
  .mr-md-n5 {
    margin-right: -20px !important;
  }
  .mr-md-n6 {
    margin-right: -24px !important;
  }
  .mr-md-n7 {
    margin-right: -28px !important;
  }
  .mr-md-n8 {
    margin-right: -32px !important;
  }
  .mr-md-n9 {
    margin-right: -36px !important;
  }
  .mr-md-n10 {
    margin-right: -40px !important;
  }
  .mr-md-n11 {
    margin-right: -44px !important;
  }
  .mr-md-n12 {
    margin-right: -48px !important;
  }
  .mr-md-n13 {
    margin-right: -52px !important;
  }
  .mr-md-n14 {
    margin-right: -56px !important;
  }
  .mr-md-n15 {
    margin-right: -60px !important;
  }
  .mr-md-n16 {
    margin-right: -64px !important;
  }
  .mb-md-n1 {
    margin-bottom: -4px !important;
  }
  .mb-md-n2 {
    margin-bottom: -8px !important;
  }
  .mb-md-n3 {
    margin-bottom: -12px !important;
  }
  .mb-md-n4 {
    margin-bottom: -16px !important;
  }
  .mb-md-n5 {
    margin-bottom: -20px !important;
  }
  .mb-md-n6 {
    margin-bottom: -24px !important;
  }
  .mb-md-n7 {
    margin-bottom: -28px !important;
  }
  .mb-md-n8 {
    margin-bottom: -32px !important;
  }
  .mb-md-n9 {
    margin-bottom: -36px !important;
  }
  .mb-md-n10 {
    margin-bottom: -40px !important;
  }
  .mb-md-n11 {
    margin-bottom: -44px !important;
  }
  .mb-md-n12 {
    margin-bottom: -48px !important;
  }
  .mb-md-n13 {
    margin-bottom: -52px !important;
  }
  .mb-md-n14 {
    margin-bottom: -56px !important;
  }
  .mb-md-n15 {
    margin-bottom: -60px !important;
  }
  .mb-md-n16 {
    margin-bottom: -64px !important;
  }
  .ml-md-n1 {
    margin-left: -4px !important;
  }
  .ml-md-n2 {
    margin-left: -8px !important;
  }
  .ml-md-n3 {
    margin-left: -12px !important;
  }
  .ml-md-n4 {
    margin-left: -16px !important;
  }
  .ml-md-n5 {
    margin-left: -20px !important;
  }
  .ml-md-n6 {
    margin-left: -24px !important;
  }
  .ml-md-n7 {
    margin-left: -28px !important;
  }
  .ml-md-n8 {
    margin-left: -32px !important;
  }
  .ml-md-n9 {
    margin-left: -36px !important;
  }
  .ml-md-n10 {
    margin-left: -40px !important;
  }
  .ml-md-n11 {
    margin-left: -44px !important;
  }
  .ml-md-n12 {
    margin-left: -48px !important;
  }
  .ml-md-n13 {
    margin-left: -52px !important;
  }
  .ml-md-n14 {
    margin-left: -56px !important;
  }
  .ml-md-n15 {
    margin-left: -60px !important;
  }
  .ml-md-n16 {
    margin-left: -64px !important;
  }
  .ms-md-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-md-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-md-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-md-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-md-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-md-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-md-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-md-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-md-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-md-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-md-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-md-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-md-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-md-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-md-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-md-n16 {
    margin-inline-start: -64px !important;
  }
  .me-md-n1 {
    margin-inline-end: -4px !important;
  }
  .me-md-n2 {
    margin-inline-end: -8px !important;
  }
  .me-md-n3 {
    margin-inline-end: -12px !important;
  }
  .me-md-n4 {
    margin-inline-end: -16px !important;
  }
  .me-md-n5 {
    margin-inline-end: -20px !important;
  }
  .me-md-n6 {
    margin-inline-end: -24px !important;
  }
  .me-md-n7 {
    margin-inline-end: -28px !important;
  }
  .me-md-n8 {
    margin-inline-end: -32px !important;
  }
  .me-md-n9 {
    margin-inline-end: -36px !important;
  }
  .me-md-n10 {
    margin-inline-end: -40px !important;
  }
  .me-md-n11 {
    margin-inline-end: -44px !important;
  }
  .me-md-n12 {
    margin-inline-end: -48px !important;
  }
  .me-md-n13 {
    margin-inline-end: -52px !important;
  }
  .me-md-n14 {
    margin-inline-end: -56px !important;
  }
  .me-md-n15 {
    margin-inline-end: -60px !important;
  }
  .me-md-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-md-0 {
    padding: 0px !important;
  }
  .pa-md-1 {
    padding: 4px !important;
  }
  .pa-md-2 {
    padding: 8px !important;
  }
  .pa-md-3 {
    padding: 12px !important;
  }
  .pa-md-4 {
    padding: 16px !important;
  }
  .pa-md-5 {
    padding: 20px !important;
  }
  .pa-md-6 {
    padding: 24px !important;
  }
  .pa-md-7 {
    padding: 28px !important;
  }
  .pa-md-8 {
    padding: 32px !important;
  }
  .pa-md-9 {
    padding: 36px !important;
  }
  .pa-md-10 {
    padding: 40px !important;
  }
  .pa-md-11 {
    padding: 44px !important;
  }
  .pa-md-12 {
    padding: 48px !important;
  }
  .pa-md-13 {
    padding: 52px !important;
  }
  .pa-md-14 {
    padding: 56px !important;
  }
  .pa-md-15 {
    padding: 60px !important;
  }
  .pa-md-16 {
    padding: 64px !important;
  }
  .px-md-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-md-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-md-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-md-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-md-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-md-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-md-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-md-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-md-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-md-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-md-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-md-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-md-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-md-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-md-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-md-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-md-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-md-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-md-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-md-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-md-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-md-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-md-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-md-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-md-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-md-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-md-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-md-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-md-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-md-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-md-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-md-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-md-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-md-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-md-0 {
    padding-top: 0px !important;
  }
  .pt-md-1 {
    padding-top: 4px !important;
  }
  .pt-md-2 {
    padding-top: 8px !important;
  }
  .pt-md-3 {
    padding-top: 12px !important;
  }
  .pt-md-4 {
    padding-top: 16px !important;
  }
  .pt-md-5 {
    padding-top: 20px !important;
  }
  .pt-md-6 {
    padding-top: 24px !important;
  }
  .pt-md-7 {
    padding-top: 28px !important;
  }
  .pt-md-8 {
    padding-top: 32px !important;
  }
  .pt-md-9 {
    padding-top: 36px !important;
  }
  .pt-md-10 {
    padding-top: 40px !important;
  }
  .pt-md-11 {
    padding-top: 44px !important;
  }
  .pt-md-12 {
    padding-top: 48px !important;
  }
  .pt-md-13 {
    padding-top: 52px !important;
  }
  .pt-md-14 {
    padding-top: 56px !important;
  }
  .pt-md-15 {
    padding-top: 60px !important;
  }
  .pt-md-16 {
    padding-top: 64px !important;
  }
  .pr-md-0 {
    padding-right: 0px !important;
  }
  .pr-md-1 {
    padding-right: 4px !important;
  }
  .pr-md-2 {
    padding-right: 8px !important;
  }
  .pr-md-3 {
    padding-right: 12px !important;
  }
  .pr-md-4 {
    padding-right: 16px !important;
  }
  .pr-md-5 {
    padding-right: 20px !important;
  }
  .pr-md-6 {
    padding-right: 24px !important;
  }
  .pr-md-7 {
    padding-right: 28px !important;
  }
  .pr-md-8 {
    padding-right: 32px !important;
  }
  .pr-md-9 {
    padding-right: 36px !important;
  }
  .pr-md-10 {
    padding-right: 40px !important;
  }
  .pr-md-11 {
    padding-right: 44px !important;
  }
  .pr-md-12 {
    padding-right: 48px !important;
  }
  .pr-md-13 {
    padding-right: 52px !important;
  }
  .pr-md-14 {
    padding-right: 56px !important;
  }
  .pr-md-15 {
    padding-right: 60px !important;
  }
  .pr-md-16 {
    padding-right: 64px !important;
  }
  .pb-md-0 {
    padding-bottom: 0px !important;
  }
  .pb-md-1 {
    padding-bottom: 4px !important;
  }
  .pb-md-2 {
    padding-bottom: 8px !important;
  }
  .pb-md-3 {
    padding-bottom: 12px !important;
  }
  .pb-md-4 {
    padding-bottom: 16px !important;
  }
  .pb-md-5 {
    padding-bottom: 20px !important;
  }
  .pb-md-6 {
    padding-bottom: 24px !important;
  }
  .pb-md-7 {
    padding-bottom: 28px !important;
  }
  .pb-md-8 {
    padding-bottom: 32px !important;
  }
  .pb-md-9 {
    padding-bottom: 36px !important;
  }
  .pb-md-10 {
    padding-bottom: 40px !important;
  }
  .pb-md-11 {
    padding-bottom: 44px !important;
  }
  .pb-md-12 {
    padding-bottom: 48px !important;
  }
  .pb-md-13 {
    padding-bottom: 52px !important;
  }
  .pb-md-14 {
    padding-bottom: 56px !important;
  }
  .pb-md-15 {
    padding-bottom: 60px !important;
  }
  .pb-md-16 {
    padding-bottom: 64px !important;
  }
  .pl-md-0 {
    padding-left: 0px !important;
  }
  .pl-md-1 {
    padding-left: 4px !important;
  }
  .pl-md-2 {
    padding-left: 8px !important;
  }
  .pl-md-3 {
    padding-left: 12px !important;
  }
  .pl-md-4 {
    padding-left: 16px !important;
  }
  .pl-md-5 {
    padding-left: 20px !important;
  }
  .pl-md-6 {
    padding-left: 24px !important;
  }
  .pl-md-7 {
    padding-left: 28px !important;
  }
  .pl-md-8 {
    padding-left: 32px !important;
  }
  .pl-md-9 {
    padding-left: 36px !important;
  }
  .pl-md-10 {
    padding-left: 40px !important;
  }
  .pl-md-11 {
    padding-left: 44px !important;
  }
  .pl-md-12 {
    padding-left: 48px !important;
  }
  .pl-md-13 {
    padding-left: 52px !important;
  }
  .pl-md-14 {
    padding-left: 56px !important;
  }
  .pl-md-15 {
    padding-left: 60px !important;
  }
  .pl-md-16 {
    padding-left: 64px !important;
  }
  .ps-md-0 {
    padding-inline-start: 0px !important;
  }
  .ps-md-1 {
    padding-inline-start: 4px !important;
  }
  .ps-md-2 {
    padding-inline-start: 8px !important;
  }
  .ps-md-3 {
    padding-inline-start: 12px !important;
  }
  .ps-md-4 {
    padding-inline-start: 16px !important;
  }
  .ps-md-5 {
    padding-inline-start: 20px !important;
  }
  .ps-md-6 {
    padding-inline-start: 24px !important;
  }
  .ps-md-7 {
    padding-inline-start: 28px !important;
  }
  .ps-md-8 {
    padding-inline-start: 32px !important;
  }
  .ps-md-9 {
    padding-inline-start: 36px !important;
  }
  .ps-md-10 {
    padding-inline-start: 40px !important;
  }
  .ps-md-11 {
    padding-inline-start: 44px !important;
  }
  .ps-md-12 {
    padding-inline-start: 48px !important;
  }
  .ps-md-13 {
    padding-inline-start: 52px !important;
  }
  .ps-md-14 {
    padding-inline-start: 56px !important;
  }
  .ps-md-15 {
    padding-inline-start: 60px !important;
  }
  .ps-md-16 {
    padding-inline-start: 64px !important;
  }
  .pe-md-0 {
    padding-inline-end: 0px !important;
  }
  .pe-md-1 {
    padding-inline-end: 4px !important;
  }
  .pe-md-2 {
    padding-inline-end: 8px !important;
  }
  .pe-md-3 {
    padding-inline-end: 12px !important;
  }
  .pe-md-4 {
    padding-inline-end: 16px !important;
  }
  .pe-md-5 {
    padding-inline-end: 20px !important;
  }
  .pe-md-6 {
    padding-inline-end: 24px !important;
  }
  .pe-md-7 {
    padding-inline-end: 28px !important;
  }
  .pe-md-8 {
    padding-inline-end: 32px !important;
  }
  .pe-md-9 {
    padding-inline-end: 36px !important;
  }
  .pe-md-10 {
    padding-inline-end: 40px !important;
  }
  .pe-md-11 {
    padding-inline-end: 44px !important;
  }
  .pe-md-12 {
    padding-inline-end: 48px !important;
  }
  .pe-md-13 {
    padding-inline-end: 52px !important;
  }
  .pe-md-14 {
    padding-inline-end: 56px !important;
  }
  .pe-md-15 {
    padding-inline-end: 60px !important;
  }
  .pe-md-16 {
    padding-inline-end: 64px !important;
  }
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
  .text-md-justify {
    text-align: justify !important;
  }
  .text-md-start {
    text-align: start !important;
  }
  .text-md-end {
    text-align: end !important;
  }
  .text-md-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 1.175;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 1.333;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.425;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.6;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .text-md-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.667;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-md-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2.667;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .h-md-auto {
    height: auto !important;
  }
  .h-md-screen {
    height: 100vh !important;
  }
  .h-md-0 {
    height: 0 !important;
  }
  .h-md-25 {
    height: 25% !important;
  }
  .h-md-50 {
    height: 50% !important;
  }
  .h-md-75 {
    height: 75% !important;
  }
  .h-md-100 {
    height: 100% !important;
  }
  .w-md-auto {
    width: auto !important;
  }
  .w-md-0 {
    width: 0 !important;
  }
  .w-md-25 {
    width: 25% !important;
  }
  .w-md-33 {
    width: 33% !important;
  }
  .w-md-50 {
    width: 50% !important;
  }
  .w-md-66 {
    width: 66% !important;
  }
  .w-md-75 {
    width: 75% !important;
  }
  .w-md-100 {
    width: 100% !important;
  }
}
@media (min-width: 1280px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-lg-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-lg-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-lg-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-lg-start {
    float: left !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-1-1 {
    flex: 1 1 auto !important;
  }
  .flex-lg-1-0 {
    flex: 1 0 auto !important;
  }
  .flex-lg-0-1 {
    flex: 0 1 auto !important;
  }
  .flex-lg-0-0 {
    flex: 0 0 auto !important;
  }
  .flex-lg-1-1-100 {
    flex: 1 1 100% !important;
  }
  .flex-lg-1-0-100 {
    flex: 1 0 100% !important;
  }
  .flex-lg-0-1-100 {
    flex: 0 1 100% !important;
  }
  .flex-lg-0-0-100 {
    flex: 0 0 100% !important;
  }
  .flex-lg-1-1-0 {
    flex: 1 1 0 !important;
  }
  .flex-lg-1-0-0 {
    flex: 1 0 0 !important;
  }
  .flex-lg-0-1-0 {
    flex: 0 1 0 !important;
  }
  .flex-lg-0-0-0 {
    flex: 0 0 0 !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-lg-start {
    justify-content: flex-start !important;
  }
  .justify-lg-end {
    justify-content: flex-end !important;
  }
  .justify-lg-center {
    justify-content: center !important;
  }
  .justify-lg-space-between {
    justify-content: space-between !important;
  }
  .justify-lg-space-around {
    justify-content: space-around !important;
  }
  .justify-lg-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-lg-start {
    align-items: flex-start !important;
  }
  .align-lg-end {
    align-items: flex-end !important;
  }
  .align-lg-center {
    align-items: center !important;
  }
  .align-lg-baseline {
    align-items: baseline !important;
  }
  .align-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-space-between {
    align-content: space-between !important;
  }
  .align-content-lg-space-around {
    align-content: space-around !important;
  }
  .align-content-lg-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-6 {
    order: 6 !important;
  }
  .order-lg-7 {
    order: 7 !important;
  }
  .order-lg-8 {
    order: 8 !important;
  }
  .order-lg-9 {
    order: 9 !important;
  }
  .order-lg-10 {
    order: 10 !important;
  }
  .order-lg-11 {
    order: 11 !important;
  }
  .order-lg-12 {
    order: 12 !important;
  }
  .order-lg-last {
    order: 13 !important;
  }
  .ga-lg-0 {
    gap: 0px !important;
  }
  .ga-lg-1 {
    gap: 4px !important;
  }
  .ga-lg-2 {
    gap: 8px !important;
  }
  .ga-lg-3 {
    gap: 12px !important;
  }
  .ga-lg-4 {
    gap: 16px !important;
  }
  .ga-lg-5 {
    gap: 20px !important;
  }
  .ga-lg-6 {
    gap: 24px !important;
  }
  .ga-lg-7 {
    gap: 28px !important;
  }
  .ga-lg-8 {
    gap: 32px !important;
  }
  .ga-lg-9 {
    gap: 36px !important;
  }
  .ga-lg-10 {
    gap: 40px !important;
  }
  .ga-lg-11 {
    gap: 44px !important;
  }
  .ga-lg-12 {
    gap: 48px !important;
  }
  .ga-lg-13 {
    gap: 52px !important;
  }
  .ga-lg-14 {
    gap: 56px !important;
  }
  .ga-lg-15 {
    gap: 60px !important;
  }
  .ga-lg-16 {
    gap: 64px !important;
  }
  .ga-lg-auto {
    gap: auto !important;
  }
  .gr-lg-0 {
    row-gap: 0px !important;
  }
  .gr-lg-1 {
    row-gap: 4px !important;
  }
  .gr-lg-2 {
    row-gap: 8px !important;
  }
  .gr-lg-3 {
    row-gap: 12px !important;
  }
  .gr-lg-4 {
    row-gap: 16px !important;
  }
  .gr-lg-5 {
    row-gap: 20px !important;
  }
  .gr-lg-6 {
    row-gap: 24px !important;
  }
  .gr-lg-7 {
    row-gap: 28px !important;
  }
  .gr-lg-8 {
    row-gap: 32px !important;
  }
  .gr-lg-9 {
    row-gap: 36px !important;
  }
  .gr-lg-10 {
    row-gap: 40px !important;
  }
  .gr-lg-11 {
    row-gap: 44px !important;
  }
  .gr-lg-12 {
    row-gap: 48px !important;
  }
  .gr-lg-13 {
    row-gap: 52px !important;
  }
  .gr-lg-14 {
    row-gap: 56px !important;
  }
  .gr-lg-15 {
    row-gap: 60px !important;
  }
  .gr-lg-16 {
    row-gap: 64px !important;
  }
  .gr-lg-auto {
    row-gap: auto !important;
  }
  .gc-lg-0 {
    column-gap: 0px !important;
  }
  .gc-lg-1 {
    column-gap: 4px !important;
  }
  .gc-lg-2 {
    column-gap: 8px !important;
  }
  .gc-lg-3 {
    column-gap: 12px !important;
  }
  .gc-lg-4 {
    column-gap: 16px !important;
  }
  .gc-lg-5 {
    column-gap: 20px !important;
  }
  .gc-lg-6 {
    column-gap: 24px !important;
  }
  .gc-lg-7 {
    column-gap: 28px !important;
  }
  .gc-lg-8 {
    column-gap: 32px !important;
  }
  .gc-lg-9 {
    column-gap: 36px !important;
  }
  .gc-lg-10 {
    column-gap: 40px !important;
  }
  .gc-lg-11 {
    column-gap: 44px !important;
  }
  .gc-lg-12 {
    column-gap: 48px !important;
  }
  .gc-lg-13 {
    column-gap: 52px !important;
  }
  .gc-lg-14 {
    column-gap: 56px !important;
  }
  .gc-lg-15 {
    column-gap: 60px !important;
  }
  .gc-lg-16 {
    column-gap: 64px !important;
  }
  .gc-lg-auto {
    column-gap: auto !important;
  }
  .ma-lg-0 {
    margin: 0px !important;
  }
  .ma-lg-1 {
    margin: 4px !important;
  }
  .ma-lg-2 {
    margin: 8px !important;
  }
  .ma-lg-3 {
    margin: 12px !important;
  }
  .ma-lg-4 {
    margin: 16px !important;
  }
  .ma-lg-5 {
    margin: 20px !important;
  }
  .ma-lg-6 {
    margin: 24px !important;
  }
  .ma-lg-7 {
    margin: 28px !important;
  }
  .ma-lg-8 {
    margin: 32px !important;
  }
  .ma-lg-9 {
    margin: 36px !important;
  }
  .ma-lg-10 {
    margin: 40px !important;
  }
  .ma-lg-11 {
    margin: 44px !important;
  }
  .ma-lg-12 {
    margin: 48px !important;
  }
  .ma-lg-13 {
    margin: 52px !important;
  }
  .ma-lg-14 {
    margin: 56px !important;
  }
  .ma-lg-15 {
    margin: 60px !important;
  }
  .ma-lg-16 {
    margin: 64px !important;
  }
  .ma-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-lg-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-lg-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-lg-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-lg-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-lg-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-lg-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-lg-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-lg-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-lg-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-lg-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-lg-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-lg-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-lg-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-lg-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-lg-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-lg-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-lg-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-lg-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-lg-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-lg-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-lg-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-lg-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-lg-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-lg-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-lg-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-lg-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-lg-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-lg-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-lg-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-lg-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-lg-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-lg-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0px !important;
  }
  .mt-lg-1 {
    margin-top: 4px !important;
  }
  .mt-lg-2 {
    margin-top: 8px !important;
  }
  .mt-lg-3 {
    margin-top: 12px !important;
  }
  .mt-lg-4 {
    margin-top: 16px !important;
  }
  .mt-lg-5 {
    margin-top: 20px !important;
  }
  .mt-lg-6 {
    margin-top: 24px !important;
  }
  .mt-lg-7 {
    margin-top: 28px !important;
  }
  .mt-lg-8 {
    margin-top: 32px !important;
  }
  .mt-lg-9 {
    margin-top: 36px !important;
  }
  .mt-lg-10 {
    margin-top: 40px !important;
  }
  .mt-lg-11 {
    margin-top: 44px !important;
  }
  .mt-lg-12 {
    margin-top: 48px !important;
  }
  .mt-lg-13 {
    margin-top: 52px !important;
  }
  .mt-lg-14 {
    margin-top: 56px !important;
  }
  .mt-lg-15 {
    margin-top: 60px !important;
  }
  .mt-lg-16 {
    margin-top: 64px !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-0 {
    margin-right: 0px !important;
  }
  .mr-lg-1 {
    margin-right: 4px !important;
  }
  .mr-lg-2 {
    margin-right: 8px !important;
  }
  .mr-lg-3 {
    margin-right: 12px !important;
  }
  .mr-lg-4 {
    margin-right: 16px !important;
  }
  .mr-lg-5 {
    margin-right: 20px !important;
  }
  .mr-lg-6 {
    margin-right: 24px !important;
  }
  .mr-lg-7 {
    margin-right: 28px !important;
  }
  .mr-lg-8 {
    margin-right: 32px !important;
  }
  .mr-lg-9 {
    margin-right: 36px !important;
  }
  .mr-lg-10 {
    margin-right: 40px !important;
  }
  .mr-lg-11 {
    margin-right: 44px !important;
  }
  .mr-lg-12 {
    margin-right: 48px !important;
  }
  .mr-lg-13 {
    margin-right: 52px !important;
  }
  .mr-lg-14 {
    margin-right: 56px !important;
  }
  .mr-lg-15 {
    margin-right: 60px !important;
  }
  .mr-lg-16 {
    margin-right: 64px !important;
  }
  .mr-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0px !important;
  }
  .mb-lg-1 {
    margin-bottom: 4px !important;
  }
  .mb-lg-2 {
    margin-bottom: 8px !important;
  }
  .mb-lg-3 {
    margin-bottom: 12px !important;
  }
  .mb-lg-4 {
    margin-bottom: 16px !important;
  }
  .mb-lg-5 {
    margin-bottom: 20px !important;
  }
  .mb-lg-6 {
    margin-bottom: 24px !important;
  }
  .mb-lg-7 {
    margin-bottom: 28px !important;
  }
  .mb-lg-8 {
    margin-bottom: 32px !important;
  }
  .mb-lg-9 {
    margin-bottom: 36px !important;
  }
  .mb-lg-10 {
    margin-bottom: 40px !important;
  }
  .mb-lg-11 {
    margin-bottom: 44px !important;
  }
  .mb-lg-12 {
    margin-bottom: 48px !important;
  }
  .mb-lg-13 {
    margin-bottom: 52px !important;
  }
  .mb-lg-14 {
    margin-bottom: 56px !important;
  }
  .mb-lg-15 {
    margin-bottom: 60px !important;
  }
  .mb-lg-16 {
    margin-bottom: 64px !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-0 {
    margin-left: 0px !important;
  }
  .ml-lg-1 {
    margin-left: 4px !important;
  }
  .ml-lg-2 {
    margin-left: 8px !important;
  }
  .ml-lg-3 {
    margin-left: 12px !important;
  }
  .ml-lg-4 {
    margin-left: 16px !important;
  }
  .ml-lg-5 {
    margin-left: 20px !important;
  }
  .ml-lg-6 {
    margin-left: 24px !important;
  }
  .ml-lg-7 {
    margin-left: 28px !important;
  }
  .ml-lg-8 {
    margin-left: 32px !important;
  }
  .ml-lg-9 {
    margin-left: 36px !important;
  }
  .ml-lg-10 {
    margin-left: 40px !important;
  }
  .ml-lg-11 {
    margin-left: 44px !important;
  }
  .ml-lg-12 {
    margin-left: 48px !important;
  }
  .ml-lg-13 {
    margin-left: 52px !important;
  }
  .ml-lg-14 {
    margin-left: 56px !important;
  }
  .ml-lg-15 {
    margin-left: 60px !important;
  }
  .ml-lg-16 {
    margin-left: 64px !important;
  }
  .ml-lg-auto {
    margin-left: auto !important;
  }
  .ms-lg-0 {
    margin-inline-start: 0px !important;
  }
  .ms-lg-1 {
    margin-inline-start: 4px !important;
  }
  .ms-lg-2 {
    margin-inline-start: 8px !important;
  }
  .ms-lg-3 {
    margin-inline-start: 12px !important;
  }
  .ms-lg-4 {
    margin-inline-start: 16px !important;
  }
  .ms-lg-5 {
    margin-inline-start: 20px !important;
  }
  .ms-lg-6 {
    margin-inline-start: 24px !important;
  }
  .ms-lg-7 {
    margin-inline-start: 28px !important;
  }
  .ms-lg-8 {
    margin-inline-start: 32px !important;
  }
  .ms-lg-9 {
    margin-inline-start: 36px !important;
  }
  .ms-lg-10 {
    margin-inline-start: 40px !important;
  }
  .ms-lg-11 {
    margin-inline-start: 44px !important;
  }
  .ms-lg-12 {
    margin-inline-start: 48px !important;
  }
  .ms-lg-13 {
    margin-inline-start: 52px !important;
  }
  .ms-lg-14 {
    margin-inline-start: 56px !important;
  }
  .ms-lg-15 {
    margin-inline-start: 60px !important;
  }
  .ms-lg-16 {
    margin-inline-start: 64px !important;
  }
  .ms-lg-auto {
    margin-inline-start: auto !important;
  }
  .me-lg-0 {
    margin-inline-end: 0px !important;
  }
  .me-lg-1 {
    margin-inline-end: 4px !important;
  }
  .me-lg-2 {
    margin-inline-end: 8px !important;
  }
  .me-lg-3 {
    margin-inline-end: 12px !important;
  }
  .me-lg-4 {
    margin-inline-end: 16px !important;
  }
  .me-lg-5 {
    margin-inline-end: 20px !important;
  }
  .me-lg-6 {
    margin-inline-end: 24px !important;
  }
  .me-lg-7 {
    margin-inline-end: 28px !important;
  }
  .me-lg-8 {
    margin-inline-end: 32px !important;
  }
  .me-lg-9 {
    margin-inline-end: 36px !important;
  }
  .me-lg-10 {
    margin-inline-end: 40px !important;
  }
  .me-lg-11 {
    margin-inline-end: 44px !important;
  }
  .me-lg-12 {
    margin-inline-end: 48px !important;
  }
  .me-lg-13 {
    margin-inline-end: 52px !important;
  }
  .me-lg-14 {
    margin-inline-end: 56px !important;
  }
  .me-lg-15 {
    margin-inline-end: 60px !important;
  }
  .me-lg-16 {
    margin-inline-end: 64px !important;
  }
  .me-lg-auto {
    margin-inline-end: auto !important;
  }
  .ma-lg-n1 {
    margin: -4px !important;
  }
  .ma-lg-n2 {
    margin: -8px !important;
  }
  .ma-lg-n3 {
    margin: -12px !important;
  }
  .ma-lg-n4 {
    margin: -16px !important;
  }
  .ma-lg-n5 {
    margin: -20px !important;
  }
  .ma-lg-n6 {
    margin: -24px !important;
  }
  .ma-lg-n7 {
    margin: -28px !important;
  }
  .ma-lg-n8 {
    margin: -32px !important;
  }
  .ma-lg-n9 {
    margin: -36px !important;
  }
  .ma-lg-n10 {
    margin: -40px !important;
  }
  .ma-lg-n11 {
    margin: -44px !important;
  }
  .ma-lg-n12 {
    margin: -48px !important;
  }
  .ma-lg-n13 {
    margin: -52px !important;
  }
  .ma-lg-n14 {
    margin: -56px !important;
  }
  .ma-lg-n15 {
    margin: -60px !important;
  }
  .ma-lg-n16 {
    margin: -64px !important;
  }
  .mx-lg-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-lg-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-lg-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-lg-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-lg-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-lg-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-lg-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-lg-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-lg-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-lg-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-lg-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-lg-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-lg-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-lg-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-lg-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-lg-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-lg-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-lg-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-lg-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-lg-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-lg-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-lg-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-lg-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-lg-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-lg-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-lg-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-lg-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-lg-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-lg-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-lg-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-lg-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-lg-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-lg-n1 {
    margin-top: -4px !important;
  }
  .mt-lg-n2 {
    margin-top: -8px !important;
  }
  .mt-lg-n3 {
    margin-top: -12px !important;
  }
  .mt-lg-n4 {
    margin-top: -16px !important;
  }
  .mt-lg-n5 {
    margin-top: -20px !important;
  }
  .mt-lg-n6 {
    margin-top: -24px !important;
  }
  .mt-lg-n7 {
    margin-top: -28px !important;
  }
  .mt-lg-n8 {
    margin-top: -32px !important;
  }
  .mt-lg-n9 {
    margin-top: -36px !important;
  }
  .mt-lg-n10 {
    margin-top: -40px !important;
  }
  .mt-lg-n11 {
    margin-top: -44px !important;
  }
  .mt-lg-n12 {
    margin-top: -48px !important;
  }
  .mt-lg-n13 {
    margin-top: -52px !important;
  }
  .mt-lg-n14 {
    margin-top: -56px !important;
  }
  .mt-lg-n15 {
    margin-top: -60px !important;
  }
  .mt-lg-n16 {
    margin-top: -64px !important;
  }
  .mr-lg-n1 {
    margin-right: -4px !important;
  }
  .mr-lg-n2 {
    margin-right: -8px !important;
  }
  .mr-lg-n3 {
    margin-right: -12px !important;
  }
  .mr-lg-n4 {
    margin-right: -16px !important;
  }
  .mr-lg-n5 {
    margin-right: -20px !important;
  }
  .mr-lg-n6 {
    margin-right: -24px !important;
  }
  .mr-lg-n7 {
    margin-right: -28px !important;
  }
  .mr-lg-n8 {
    margin-right: -32px !important;
  }
  .mr-lg-n9 {
    margin-right: -36px !important;
  }
  .mr-lg-n10 {
    margin-right: -40px !important;
  }
  .mr-lg-n11 {
    margin-right: -44px !important;
  }
  .mr-lg-n12 {
    margin-right: -48px !important;
  }
  .mr-lg-n13 {
    margin-right: -52px !important;
  }
  .mr-lg-n14 {
    margin-right: -56px !important;
  }
  .mr-lg-n15 {
    margin-right: -60px !important;
  }
  .mr-lg-n16 {
    margin-right: -64px !important;
  }
  .mb-lg-n1 {
    margin-bottom: -4px !important;
  }
  .mb-lg-n2 {
    margin-bottom: -8px !important;
  }
  .mb-lg-n3 {
    margin-bottom: -12px !important;
  }
  .mb-lg-n4 {
    margin-bottom: -16px !important;
  }
  .mb-lg-n5 {
    margin-bottom: -20px !important;
  }
  .mb-lg-n6 {
    margin-bottom: -24px !important;
  }
  .mb-lg-n7 {
    margin-bottom: -28px !important;
  }
  .mb-lg-n8 {
    margin-bottom: -32px !important;
  }
  .mb-lg-n9 {
    margin-bottom: -36px !important;
  }
  .mb-lg-n10 {
    margin-bottom: -40px !important;
  }
  .mb-lg-n11 {
    margin-bottom: -44px !important;
  }
  .mb-lg-n12 {
    margin-bottom: -48px !important;
  }
  .mb-lg-n13 {
    margin-bottom: -52px !important;
  }
  .mb-lg-n14 {
    margin-bottom: -56px !important;
  }
  .mb-lg-n15 {
    margin-bottom: -60px !important;
  }
  .mb-lg-n16 {
    margin-bottom: -64px !important;
  }
  .ml-lg-n1 {
    margin-left: -4px !important;
  }
  .ml-lg-n2 {
    margin-left: -8px !important;
  }
  .ml-lg-n3 {
    margin-left: -12px !important;
  }
  .ml-lg-n4 {
    margin-left: -16px !important;
  }
  .ml-lg-n5 {
    margin-left: -20px !important;
  }
  .ml-lg-n6 {
    margin-left: -24px !important;
  }
  .ml-lg-n7 {
    margin-left: -28px !important;
  }
  .ml-lg-n8 {
    margin-left: -32px !important;
  }
  .ml-lg-n9 {
    margin-left: -36px !important;
  }
  .ml-lg-n10 {
    margin-left: -40px !important;
  }
  .ml-lg-n11 {
    margin-left: -44px !important;
  }
  .ml-lg-n12 {
    margin-left: -48px !important;
  }
  .ml-lg-n13 {
    margin-left: -52px !important;
  }
  .ml-lg-n14 {
    margin-left: -56px !important;
  }
  .ml-lg-n15 {
    margin-left: -60px !important;
  }
  .ml-lg-n16 {
    margin-left: -64px !important;
  }
  .ms-lg-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-lg-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-lg-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-lg-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-lg-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-lg-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-lg-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-lg-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-lg-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-lg-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-lg-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-lg-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-lg-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-lg-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-lg-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-lg-n16 {
    margin-inline-start: -64px !important;
  }
  .me-lg-n1 {
    margin-inline-end: -4px !important;
  }
  .me-lg-n2 {
    margin-inline-end: -8px !important;
  }
  .me-lg-n3 {
    margin-inline-end: -12px !important;
  }
  .me-lg-n4 {
    margin-inline-end: -16px !important;
  }
  .me-lg-n5 {
    margin-inline-end: -20px !important;
  }
  .me-lg-n6 {
    margin-inline-end: -24px !important;
  }
  .me-lg-n7 {
    margin-inline-end: -28px !important;
  }
  .me-lg-n8 {
    margin-inline-end: -32px !important;
  }
  .me-lg-n9 {
    margin-inline-end: -36px !important;
  }
  .me-lg-n10 {
    margin-inline-end: -40px !important;
  }
  .me-lg-n11 {
    margin-inline-end: -44px !important;
  }
  .me-lg-n12 {
    margin-inline-end: -48px !important;
  }
  .me-lg-n13 {
    margin-inline-end: -52px !important;
  }
  .me-lg-n14 {
    margin-inline-end: -56px !important;
  }
  .me-lg-n15 {
    margin-inline-end: -60px !important;
  }
  .me-lg-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-lg-0 {
    padding: 0px !important;
  }
  .pa-lg-1 {
    padding: 4px !important;
  }
  .pa-lg-2 {
    padding: 8px !important;
  }
  .pa-lg-3 {
    padding: 12px !important;
  }
  .pa-lg-4 {
    padding: 16px !important;
  }
  .pa-lg-5 {
    padding: 20px !important;
  }
  .pa-lg-6 {
    padding: 24px !important;
  }
  .pa-lg-7 {
    padding: 28px !important;
  }
  .pa-lg-8 {
    padding: 32px !important;
  }
  .pa-lg-9 {
    padding: 36px !important;
  }
  .pa-lg-10 {
    padding: 40px !important;
  }
  .pa-lg-11 {
    padding: 44px !important;
  }
  .pa-lg-12 {
    padding: 48px !important;
  }
  .pa-lg-13 {
    padding: 52px !important;
  }
  .pa-lg-14 {
    padding: 56px !important;
  }
  .pa-lg-15 {
    padding: 60px !important;
  }
  .pa-lg-16 {
    padding: 64px !important;
  }
  .px-lg-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-lg-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-lg-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-lg-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-lg-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-lg-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-lg-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-lg-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-lg-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-lg-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-lg-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-lg-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-lg-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-lg-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-lg-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-lg-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-lg-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-lg-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-lg-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-lg-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-lg-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-lg-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-lg-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-lg-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-lg-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-lg-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-lg-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-lg-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-lg-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-lg-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-lg-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-lg-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-lg-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-lg-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-lg-0 {
    padding-top: 0px !important;
  }
  .pt-lg-1 {
    padding-top: 4px !important;
  }
  .pt-lg-2 {
    padding-top: 8px !important;
  }
  .pt-lg-3 {
    padding-top: 12px !important;
  }
  .pt-lg-4 {
    padding-top: 16px !important;
  }
  .pt-lg-5 {
    padding-top: 20px !important;
  }
  .pt-lg-6 {
    padding-top: 24px !important;
  }
  .pt-lg-7 {
    padding-top: 28px !important;
  }
  .pt-lg-8 {
    padding-top: 32px !important;
  }
  .pt-lg-9 {
    padding-top: 36px !important;
  }
  .pt-lg-10 {
    padding-top: 40px !important;
  }
  .pt-lg-11 {
    padding-top: 44px !important;
  }
  .pt-lg-12 {
    padding-top: 48px !important;
  }
  .pt-lg-13 {
    padding-top: 52px !important;
  }
  .pt-lg-14 {
    padding-top: 56px !important;
  }
  .pt-lg-15 {
    padding-top: 60px !important;
  }
  .pt-lg-16 {
    padding-top: 64px !important;
  }
  .pr-lg-0 {
    padding-right: 0px !important;
  }
  .pr-lg-1 {
    padding-right: 4px !important;
  }
  .pr-lg-2 {
    padding-right: 8px !important;
  }
  .pr-lg-3 {
    padding-right: 12px !important;
  }
  .pr-lg-4 {
    padding-right: 16px !important;
  }
  .pr-lg-5 {
    padding-right: 20px !important;
  }
  .pr-lg-6 {
    padding-right: 24px !important;
  }
  .pr-lg-7 {
    padding-right: 28px !important;
  }
  .pr-lg-8 {
    padding-right: 32px !important;
  }
  .pr-lg-9 {
    padding-right: 36px !important;
  }
  .pr-lg-10 {
    padding-right: 40px !important;
  }
  .pr-lg-11 {
    padding-right: 44px !important;
  }
  .pr-lg-12 {
    padding-right: 48px !important;
  }
  .pr-lg-13 {
    padding-right: 52px !important;
  }
  .pr-lg-14 {
    padding-right: 56px !important;
  }
  .pr-lg-15 {
    padding-right: 60px !important;
  }
  .pr-lg-16 {
    padding-right: 64px !important;
  }
  .pb-lg-0 {
    padding-bottom: 0px !important;
  }
  .pb-lg-1 {
    padding-bottom: 4px !important;
  }
  .pb-lg-2 {
    padding-bottom: 8px !important;
  }
  .pb-lg-3 {
    padding-bottom: 12px !important;
  }
  .pb-lg-4 {
    padding-bottom: 16px !important;
  }
  .pb-lg-5 {
    padding-bottom: 20px !important;
  }
  .pb-lg-6 {
    padding-bottom: 24px !important;
  }
  .pb-lg-7 {
    padding-bottom: 28px !important;
  }
  .pb-lg-8 {
    padding-bottom: 32px !important;
  }
  .pb-lg-9 {
    padding-bottom: 36px !important;
  }
  .pb-lg-10 {
    padding-bottom: 40px !important;
  }
  .pb-lg-11 {
    padding-bottom: 44px !important;
  }
  .pb-lg-12 {
    padding-bottom: 48px !important;
  }
  .pb-lg-13 {
    padding-bottom: 52px !important;
  }
  .pb-lg-14 {
    padding-bottom: 56px !important;
  }
  .pb-lg-15 {
    padding-bottom: 60px !important;
  }
  .pb-lg-16 {
    padding-bottom: 64px !important;
  }
  .pl-lg-0 {
    padding-left: 0px !important;
  }
  .pl-lg-1 {
    padding-left: 4px !important;
  }
  .pl-lg-2 {
    padding-left: 8px !important;
  }
  .pl-lg-3 {
    padding-left: 12px !important;
  }
  .pl-lg-4 {
    padding-left: 16px !important;
  }
  .pl-lg-5 {
    padding-left: 20px !important;
  }
  .pl-lg-6 {
    padding-left: 24px !important;
  }
  .pl-lg-7 {
    padding-left: 28px !important;
  }
  .pl-lg-8 {
    padding-left: 32px !important;
  }
  .pl-lg-9 {
    padding-left: 36px !important;
  }
  .pl-lg-10 {
    padding-left: 40px !important;
  }
  .pl-lg-11 {
    padding-left: 44px !important;
  }
  .pl-lg-12 {
    padding-left: 48px !important;
  }
  .pl-lg-13 {
    padding-left: 52px !important;
  }
  .pl-lg-14 {
    padding-left: 56px !important;
  }
  .pl-lg-15 {
    padding-left: 60px !important;
  }
  .pl-lg-16 {
    padding-left: 64px !important;
  }
  .ps-lg-0 {
    padding-inline-start: 0px !important;
  }
  .ps-lg-1 {
    padding-inline-start: 4px !important;
  }
  .ps-lg-2 {
    padding-inline-start: 8px !important;
  }
  .ps-lg-3 {
    padding-inline-start: 12px !important;
  }
  .ps-lg-4 {
    padding-inline-start: 16px !important;
  }
  .ps-lg-5 {
    padding-inline-start: 20px !important;
  }
  .ps-lg-6 {
    padding-inline-start: 24px !important;
  }
  .ps-lg-7 {
    padding-inline-start: 28px !important;
  }
  .ps-lg-8 {
    padding-inline-start: 32px !important;
  }
  .ps-lg-9 {
    padding-inline-start: 36px !important;
  }
  .ps-lg-10 {
    padding-inline-start: 40px !important;
  }
  .ps-lg-11 {
    padding-inline-start: 44px !important;
  }
  .ps-lg-12 {
    padding-inline-start: 48px !important;
  }
  .ps-lg-13 {
    padding-inline-start: 52px !important;
  }
  .ps-lg-14 {
    padding-inline-start: 56px !important;
  }
  .ps-lg-15 {
    padding-inline-start: 60px !important;
  }
  .ps-lg-16 {
    padding-inline-start: 64px !important;
  }
  .pe-lg-0 {
    padding-inline-end: 0px !important;
  }
  .pe-lg-1 {
    padding-inline-end: 4px !important;
  }
  .pe-lg-2 {
    padding-inline-end: 8px !important;
  }
  .pe-lg-3 {
    padding-inline-end: 12px !important;
  }
  .pe-lg-4 {
    padding-inline-end: 16px !important;
  }
  .pe-lg-5 {
    padding-inline-end: 20px !important;
  }
  .pe-lg-6 {
    padding-inline-end: 24px !important;
  }
  .pe-lg-7 {
    padding-inline-end: 28px !important;
  }
  .pe-lg-8 {
    padding-inline-end: 32px !important;
  }
  .pe-lg-9 {
    padding-inline-end: 36px !important;
  }
  .pe-lg-10 {
    padding-inline-end: 40px !important;
  }
  .pe-lg-11 {
    padding-inline-end: 44px !important;
  }
  .pe-lg-12 {
    padding-inline-end: 48px !important;
  }
  .pe-lg-13 {
    padding-inline-end: 52px !important;
  }
  .pe-lg-14 {
    padding-inline-end: 56px !important;
  }
  .pe-lg-15 {
    padding-inline-end: 60px !important;
  }
  .pe-lg-16 {
    padding-inline-end: 64px !important;
  }
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
  .text-lg-justify {
    text-align: justify !important;
  }
  .text-lg-start {
    text-align: start !important;
  }
  .text-lg-end {
    text-align: end !important;
  }
  .text-lg-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 1.175;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 1.333;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.425;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.6;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .text-lg-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.667;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-lg-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2.667;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .h-lg-auto {
    height: auto !important;
  }
  .h-lg-screen {
    height: 100vh !important;
  }
  .h-lg-0 {
    height: 0 !important;
  }
  .h-lg-25 {
    height: 25% !important;
  }
  .h-lg-50 {
    height: 50% !important;
  }
  .h-lg-75 {
    height: 75% !important;
  }
  .h-lg-100 {
    height: 100% !important;
  }
  .w-lg-auto {
    width: auto !important;
  }
  .w-lg-0 {
    width: 0 !important;
  }
  .w-lg-25 {
    width: 25% !important;
  }
  .w-lg-33 {
    width: 33% !important;
  }
  .w-lg-50 {
    width: 50% !important;
  }
  .w-lg-66 {
    width: 66% !important;
  }
  .w-lg-75 {
    width: 75% !important;
  }
  .w-lg-100 {
    width: 100% !important;
  }
}
@media (min-width: 1920px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-xl-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-xl-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-xl-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-xl-start {
    float: left !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-1-1 {
    flex: 1 1 auto !important;
  }
  .flex-xl-1-0 {
    flex: 1 0 auto !important;
  }
  .flex-xl-0-1 {
    flex: 0 1 auto !important;
  }
  .flex-xl-0-0 {
    flex: 0 0 auto !important;
  }
  .flex-xl-1-1-100 {
    flex: 1 1 100% !important;
  }
  .flex-xl-1-0-100 {
    flex: 1 0 100% !important;
  }
  .flex-xl-0-1-100 {
    flex: 0 1 100% !important;
  }
  .flex-xl-0-0-100 {
    flex: 0 0 100% !important;
  }
  .flex-xl-1-1-0 {
    flex: 1 1 0 !important;
  }
  .flex-xl-1-0-0 {
    flex: 1 0 0 !important;
  }
  .flex-xl-0-1-0 {
    flex: 0 1 0 !important;
  }
  .flex-xl-0-0-0 {
    flex: 0 0 0 !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-xl-start {
    justify-content: flex-start !important;
  }
  .justify-xl-end {
    justify-content: flex-end !important;
  }
  .justify-xl-center {
    justify-content: center !important;
  }
  .justify-xl-space-between {
    justify-content: space-between !important;
  }
  .justify-xl-space-around {
    justify-content: space-around !important;
  }
  .justify-xl-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-xl-start {
    align-items: flex-start !important;
  }
  .align-xl-end {
    align-items: flex-end !important;
  }
  .align-xl-center {
    align-items: center !important;
  }
  .align-xl-baseline {
    align-items: baseline !important;
  }
  .align-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-space-between {
    align-content: space-between !important;
  }
  .align-content-xl-space-around {
    align-content: space-around !important;
  }
  .align-content-xl-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-6 {
    order: 6 !important;
  }
  .order-xl-7 {
    order: 7 !important;
  }
  .order-xl-8 {
    order: 8 !important;
  }
  .order-xl-9 {
    order: 9 !important;
  }
  .order-xl-10 {
    order: 10 !important;
  }
  .order-xl-11 {
    order: 11 !important;
  }
  .order-xl-12 {
    order: 12 !important;
  }
  .order-xl-last {
    order: 13 !important;
  }
  .ga-xl-0 {
    gap: 0px !important;
  }
  .ga-xl-1 {
    gap: 4px !important;
  }
  .ga-xl-2 {
    gap: 8px !important;
  }
  .ga-xl-3 {
    gap: 12px !important;
  }
  .ga-xl-4 {
    gap: 16px !important;
  }
  .ga-xl-5 {
    gap: 20px !important;
  }
  .ga-xl-6 {
    gap: 24px !important;
  }
  .ga-xl-7 {
    gap: 28px !important;
  }
  .ga-xl-8 {
    gap: 32px !important;
  }
  .ga-xl-9 {
    gap: 36px !important;
  }
  .ga-xl-10 {
    gap: 40px !important;
  }
  .ga-xl-11 {
    gap: 44px !important;
  }
  .ga-xl-12 {
    gap: 48px !important;
  }
  .ga-xl-13 {
    gap: 52px !important;
  }
  .ga-xl-14 {
    gap: 56px !important;
  }
  .ga-xl-15 {
    gap: 60px !important;
  }
  .ga-xl-16 {
    gap: 64px !important;
  }
  .ga-xl-auto {
    gap: auto !important;
  }
  .gr-xl-0 {
    row-gap: 0px !important;
  }
  .gr-xl-1 {
    row-gap: 4px !important;
  }
  .gr-xl-2 {
    row-gap: 8px !important;
  }
  .gr-xl-3 {
    row-gap: 12px !important;
  }
  .gr-xl-4 {
    row-gap: 16px !important;
  }
  .gr-xl-5 {
    row-gap: 20px !important;
  }
  .gr-xl-6 {
    row-gap: 24px !important;
  }
  .gr-xl-7 {
    row-gap: 28px !important;
  }
  .gr-xl-8 {
    row-gap: 32px !important;
  }
  .gr-xl-9 {
    row-gap: 36px !important;
  }
  .gr-xl-10 {
    row-gap: 40px !important;
  }
  .gr-xl-11 {
    row-gap: 44px !important;
  }
  .gr-xl-12 {
    row-gap: 48px !important;
  }
  .gr-xl-13 {
    row-gap: 52px !important;
  }
  .gr-xl-14 {
    row-gap: 56px !important;
  }
  .gr-xl-15 {
    row-gap: 60px !important;
  }
  .gr-xl-16 {
    row-gap: 64px !important;
  }
  .gr-xl-auto {
    row-gap: auto !important;
  }
  .gc-xl-0 {
    column-gap: 0px !important;
  }
  .gc-xl-1 {
    column-gap: 4px !important;
  }
  .gc-xl-2 {
    column-gap: 8px !important;
  }
  .gc-xl-3 {
    column-gap: 12px !important;
  }
  .gc-xl-4 {
    column-gap: 16px !important;
  }
  .gc-xl-5 {
    column-gap: 20px !important;
  }
  .gc-xl-6 {
    column-gap: 24px !important;
  }
  .gc-xl-7 {
    column-gap: 28px !important;
  }
  .gc-xl-8 {
    column-gap: 32px !important;
  }
  .gc-xl-9 {
    column-gap: 36px !important;
  }
  .gc-xl-10 {
    column-gap: 40px !important;
  }
  .gc-xl-11 {
    column-gap: 44px !important;
  }
  .gc-xl-12 {
    column-gap: 48px !important;
  }
  .gc-xl-13 {
    column-gap: 52px !important;
  }
  .gc-xl-14 {
    column-gap: 56px !important;
  }
  .gc-xl-15 {
    column-gap: 60px !important;
  }
  .gc-xl-16 {
    column-gap: 64px !important;
  }
  .gc-xl-auto {
    column-gap: auto !important;
  }
  .ma-xl-0 {
    margin: 0px !important;
  }
  .ma-xl-1 {
    margin: 4px !important;
  }
  .ma-xl-2 {
    margin: 8px !important;
  }
  .ma-xl-3 {
    margin: 12px !important;
  }
  .ma-xl-4 {
    margin: 16px !important;
  }
  .ma-xl-5 {
    margin: 20px !important;
  }
  .ma-xl-6 {
    margin: 24px !important;
  }
  .ma-xl-7 {
    margin: 28px !important;
  }
  .ma-xl-8 {
    margin: 32px !important;
  }
  .ma-xl-9 {
    margin: 36px !important;
  }
  .ma-xl-10 {
    margin: 40px !important;
  }
  .ma-xl-11 {
    margin: 44px !important;
  }
  .ma-xl-12 {
    margin: 48px !important;
  }
  .ma-xl-13 {
    margin: 52px !important;
  }
  .ma-xl-14 {
    margin: 56px !important;
  }
  .ma-xl-15 {
    margin: 60px !important;
  }
  .ma-xl-16 {
    margin: 64px !important;
  }
  .ma-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-xl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-xl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-xl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-xl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-xl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-xl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-xl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-xl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-xl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-xl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-xl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-xl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-xl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-xl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-xl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-xl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-xl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-xl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-xl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-xl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-xl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-xl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0px !important;
  }
  .mt-xl-1 {
    margin-top: 4px !important;
  }
  .mt-xl-2 {
    margin-top: 8px !important;
  }
  .mt-xl-3 {
    margin-top: 12px !important;
  }
  .mt-xl-4 {
    margin-top: 16px !important;
  }
  .mt-xl-5 {
    margin-top: 20px !important;
  }
  .mt-xl-6 {
    margin-top: 24px !important;
  }
  .mt-xl-7 {
    margin-top: 28px !important;
  }
  .mt-xl-8 {
    margin-top: 32px !important;
  }
  .mt-xl-9 {
    margin-top: 36px !important;
  }
  .mt-xl-10 {
    margin-top: 40px !important;
  }
  .mt-xl-11 {
    margin-top: 44px !important;
  }
  .mt-xl-12 {
    margin-top: 48px !important;
  }
  .mt-xl-13 {
    margin-top: 52px !important;
  }
  .mt-xl-14 {
    margin-top: 56px !important;
  }
  .mt-xl-15 {
    margin-top: 60px !important;
  }
  .mt-xl-16 {
    margin-top: 64px !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-0 {
    margin-right: 0px !important;
  }
  .mr-xl-1 {
    margin-right: 4px !important;
  }
  .mr-xl-2 {
    margin-right: 8px !important;
  }
  .mr-xl-3 {
    margin-right: 12px !important;
  }
  .mr-xl-4 {
    margin-right: 16px !important;
  }
  .mr-xl-5 {
    margin-right: 20px !important;
  }
  .mr-xl-6 {
    margin-right: 24px !important;
  }
  .mr-xl-7 {
    margin-right: 28px !important;
  }
  .mr-xl-8 {
    margin-right: 32px !important;
  }
  .mr-xl-9 {
    margin-right: 36px !important;
  }
  .mr-xl-10 {
    margin-right: 40px !important;
  }
  .mr-xl-11 {
    margin-right: 44px !important;
  }
  .mr-xl-12 {
    margin-right: 48px !important;
  }
  .mr-xl-13 {
    margin-right: 52px !important;
  }
  .mr-xl-14 {
    margin-right: 56px !important;
  }
  .mr-xl-15 {
    margin-right: 60px !important;
  }
  .mr-xl-16 {
    margin-right: 64px !important;
  }
  .mr-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0px !important;
  }
  .mb-xl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xl-3 {
    margin-bottom: 12px !important;
  }
  .mb-xl-4 {
    margin-bottom: 16px !important;
  }
  .mb-xl-5 {
    margin-bottom: 20px !important;
  }
  .mb-xl-6 {
    margin-bottom: 24px !important;
  }
  .mb-xl-7 {
    margin-bottom: 28px !important;
  }
  .mb-xl-8 {
    margin-bottom: 32px !important;
  }
  .mb-xl-9 {
    margin-bottom: 36px !important;
  }
  .mb-xl-10 {
    margin-bottom: 40px !important;
  }
  .mb-xl-11 {
    margin-bottom: 44px !important;
  }
  .mb-xl-12 {
    margin-bottom: 48px !important;
  }
  .mb-xl-13 {
    margin-bottom: 52px !important;
  }
  .mb-xl-14 {
    margin-bottom: 56px !important;
  }
  .mb-xl-15 {
    margin-bottom: 60px !important;
  }
  .mb-xl-16 {
    margin-bottom: 64px !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-0 {
    margin-left: 0px !important;
  }
  .ml-xl-1 {
    margin-left: 4px !important;
  }
  .ml-xl-2 {
    margin-left: 8px !important;
  }
  .ml-xl-3 {
    margin-left: 12px !important;
  }
  .ml-xl-4 {
    margin-left: 16px !important;
  }
  .ml-xl-5 {
    margin-left: 20px !important;
  }
  .ml-xl-6 {
    margin-left: 24px !important;
  }
  .ml-xl-7 {
    margin-left: 28px !important;
  }
  .ml-xl-8 {
    margin-left: 32px !important;
  }
  .ml-xl-9 {
    margin-left: 36px !important;
  }
  .ml-xl-10 {
    margin-left: 40px !important;
  }
  .ml-xl-11 {
    margin-left: 44px !important;
  }
  .ml-xl-12 {
    margin-left: 48px !important;
  }
  .ml-xl-13 {
    margin-left: 52px !important;
  }
  .ml-xl-14 {
    margin-left: 56px !important;
  }
  .ml-xl-15 {
    margin-left: 60px !important;
  }
  .ml-xl-16 {
    margin-left: 64px !important;
  }
  .ml-xl-auto {
    margin-left: auto !important;
  }
  .ms-xl-0 {
    margin-inline-start: 0px !important;
  }
  .ms-xl-1 {
    margin-inline-start: 4px !important;
  }
  .ms-xl-2 {
    margin-inline-start: 8px !important;
  }
  .ms-xl-3 {
    margin-inline-start: 12px !important;
  }
  .ms-xl-4 {
    margin-inline-start: 16px !important;
  }
  .ms-xl-5 {
    margin-inline-start: 20px !important;
  }
  .ms-xl-6 {
    margin-inline-start: 24px !important;
  }
  .ms-xl-7 {
    margin-inline-start: 28px !important;
  }
  .ms-xl-8 {
    margin-inline-start: 32px !important;
  }
  .ms-xl-9 {
    margin-inline-start: 36px !important;
  }
  .ms-xl-10 {
    margin-inline-start: 40px !important;
  }
  .ms-xl-11 {
    margin-inline-start: 44px !important;
  }
  .ms-xl-12 {
    margin-inline-start: 48px !important;
  }
  .ms-xl-13 {
    margin-inline-start: 52px !important;
  }
  .ms-xl-14 {
    margin-inline-start: 56px !important;
  }
  .ms-xl-15 {
    margin-inline-start: 60px !important;
  }
  .ms-xl-16 {
    margin-inline-start: 64px !important;
  }
  .ms-xl-auto {
    margin-inline-start: auto !important;
  }
  .me-xl-0 {
    margin-inline-end: 0px !important;
  }
  .me-xl-1 {
    margin-inline-end: 4px !important;
  }
  .me-xl-2 {
    margin-inline-end: 8px !important;
  }
  .me-xl-3 {
    margin-inline-end: 12px !important;
  }
  .me-xl-4 {
    margin-inline-end: 16px !important;
  }
  .me-xl-5 {
    margin-inline-end: 20px !important;
  }
  .me-xl-6 {
    margin-inline-end: 24px !important;
  }
  .me-xl-7 {
    margin-inline-end: 28px !important;
  }
  .me-xl-8 {
    margin-inline-end: 32px !important;
  }
  .me-xl-9 {
    margin-inline-end: 36px !important;
  }
  .me-xl-10 {
    margin-inline-end: 40px !important;
  }
  .me-xl-11 {
    margin-inline-end: 44px !important;
  }
  .me-xl-12 {
    margin-inline-end: 48px !important;
  }
  .me-xl-13 {
    margin-inline-end: 52px !important;
  }
  .me-xl-14 {
    margin-inline-end: 56px !important;
  }
  .me-xl-15 {
    margin-inline-end: 60px !important;
  }
  .me-xl-16 {
    margin-inline-end: 64px !important;
  }
  .me-xl-auto {
    margin-inline-end: auto !important;
  }
  .ma-xl-n1 {
    margin: -4px !important;
  }
  .ma-xl-n2 {
    margin: -8px !important;
  }
  .ma-xl-n3 {
    margin: -12px !important;
  }
  .ma-xl-n4 {
    margin: -16px !important;
  }
  .ma-xl-n5 {
    margin: -20px !important;
  }
  .ma-xl-n6 {
    margin: -24px !important;
  }
  .ma-xl-n7 {
    margin: -28px !important;
  }
  .ma-xl-n8 {
    margin: -32px !important;
  }
  .ma-xl-n9 {
    margin: -36px !important;
  }
  .ma-xl-n10 {
    margin: -40px !important;
  }
  .ma-xl-n11 {
    margin: -44px !important;
  }
  .ma-xl-n12 {
    margin: -48px !important;
  }
  .ma-xl-n13 {
    margin: -52px !important;
  }
  .ma-xl-n14 {
    margin: -56px !important;
  }
  .ma-xl-n15 {
    margin: -60px !important;
  }
  .ma-xl-n16 {
    margin: -64px !important;
  }
  .mx-xl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-xl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-xl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-xl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-xl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-xl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-xl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-xl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-xl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-xl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-xl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-xl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-xl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-xl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-xl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-xl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-xl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-xl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-xl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-xl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-xl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-xl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-xl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-xl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-xl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-xl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-xl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-xl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-xl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-xl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-xl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-xl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-xl-n1 {
    margin-top: -4px !important;
  }
  .mt-xl-n2 {
    margin-top: -8px !important;
  }
  .mt-xl-n3 {
    margin-top: -12px !important;
  }
  .mt-xl-n4 {
    margin-top: -16px !important;
  }
  .mt-xl-n5 {
    margin-top: -20px !important;
  }
  .mt-xl-n6 {
    margin-top: -24px !important;
  }
  .mt-xl-n7 {
    margin-top: -28px !important;
  }
  .mt-xl-n8 {
    margin-top: -32px !important;
  }
  .mt-xl-n9 {
    margin-top: -36px !important;
  }
  .mt-xl-n10 {
    margin-top: -40px !important;
  }
  .mt-xl-n11 {
    margin-top: -44px !important;
  }
  .mt-xl-n12 {
    margin-top: -48px !important;
  }
  .mt-xl-n13 {
    margin-top: -52px !important;
  }
  .mt-xl-n14 {
    margin-top: -56px !important;
  }
  .mt-xl-n15 {
    margin-top: -60px !important;
  }
  .mt-xl-n16 {
    margin-top: -64px !important;
  }
  .mr-xl-n1 {
    margin-right: -4px !important;
  }
  .mr-xl-n2 {
    margin-right: -8px !important;
  }
  .mr-xl-n3 {
    margin-right: -12px !important;
  }
  .mr-xl-n4 {
    margin-right: -16px !important;
  }
  .mr-xl-n5 {
    margin-right: -20px !important;
  }
  .mr-xl-n6 {
    margin-right: -24px !important;
  }
  .mr-xl-n7 {
    margin-right: -28px !important;
  }
  .mr-xl-n8 {
    margin-right: -32px !important;
  }
  .mr-xl-n9 {
    margin-right: -36px !important;
  }
  .mr-xl-n10 {
    margin-right: -40px !important;
  }
  .mr-xl-n11 {
    margin-right: -44px !important;
  }
  .mr-xl-n12 {
    margin-right: -48px !important;
  }
  .mr-xl-n13 {
    margin-right: -52px !important;
  }
  .mr-xl-n14 {
    margin-right: -56px !important;
  }
  .mr-xl-n15 {
    margin-right: -60px !important;
  }
  .mr-xl-n16 {
    margin-right: -64px !important;
  }
  .mb-xl-n1 {
    margin-bottom: -4px !important;
  }
  .mb-xl-n2 {
    margin-bottom: -8px !important;
  }
  .mb-xl-n3 {
    margin-bottom: -12px !important;
  }
  .mb-xl-n4 {
    margin-bottom: -16px !important;
  }
  .mb-xl-n5 {
    margin-bottom: -20px !important;
  }
  .mb-xl-n6 {
    margin-bottom: -24px !important;
  }
  .mb-xl-n7 {
    margin-bottom: -28px !important;
  }
  .mb-xl-n8 {
    margin-bottom: -32px !important;
  }
  .mb-xl-n9 {
    margin-bottom: -36px !important;
  }
  .mb-xl-n10 {
    margin-bottom: -40px !important;
  }
  .mb-xl-n11 {
    margin-bottom: -44px !important;
  }
  .mb-xl-n12 {
    margin-bottom: -48px !important;
  }
  .mb-xl-n13 {
    margin-bottom: -52px !important;
  }
  .mb-xl-n14 {
    margin-bottom: -56px !important;
  }
  .mb-xl-n15 {
    margin-bottom: -60px !important;
  }
  .mb-xl-n16 {
    margin-bottom: -64px !important;
  }
  .ml-xl-n1 {
    margin-left: -4px !important;
  }
  .ml-xl-n2 {
    margin-left: -8px !important;
  }
  .ml-xl-n3 {
    margin-left: -12px !important;
  }
  .ml-xl-n4 {
    margin-left: -16px !important;
  }
  .ml-xl-n5 {
    margin-left: -20px !important;
  }
  .ml-xl-n6 {
    margin-left: -24px !important;
  }
  .ml-xl-n7 {
    margin-left: -28px !important;
  }
  .ml-xl-n8 {
    margin-left: -32px !important;
  }
  .ml-xl-n9 {
    margin-left: -36px !important;
  }
  .ml-xl-n10 {
    margin-left: -40px !important;
  }
  .ml-xl-n11 {
    margin-left: -44px !important;
  }
  .ml-xl-n12 {
    margin-left: -48px !important;
  }
  .ml-xl-n13 {
    margin-left: -52px !important;
  }
  .ml-xl-n14 {
    margin-left: -56px !important;
  }
  .ml-xl-n15 {
    margin-left: -60px !important;
  }
  .ml-xl-n16 {
    margin-left: -64px !important;
  }
  .ms-xl-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-xl-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-xl-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-xl-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-xl-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-xl-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-xl-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-xl-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-xl-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-xl-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-xl-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-xl-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-xl-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-xl-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-xl-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-xl-n16 {
    margin-inline-start: -64px !important;
  }
  .me-xl-n1 {
    margin-inline-end: -4px !important;
  }
  .me-xl-n2 {
    margin-inline-end: -8px !important;
  }
  .me-xl-n3 {
    margin-inline-end: -12px !important;
  }
  .me-xl-n4 {
    margin-inline-end: -16px !important;
  }
  .me-xl-n5 {
    margin-inline-end: -20px !important;
  }
  .me-xl-n6 {
    margin-inline-end: -24px !important;
  }
  .me-xl-n7 {
    margin-inline-end: -28px !important;
  }
  .me-xl-n8 {
    margin-inline-end: -32px !important;
  }
  .me-xl-n9 {
    margin-inline-end: -36px !important;
  }
  .me-xl-n10 {
    margin-inline-end: -40px !important;
  }
  .me-xl-n11 {
    margin-inline-end: -44px !important;
  }
  .me-xl-n12 {
    margin-inline-end: -48px !important;
  }
  .me-xl-n13 {
    margin-inline-end: -52px !important;
  }
  .me-xl-n14 {
    margin-inline-end: -56px !important;
  }
  .me-xl-n15 {
    margin-inline-end: -60px !important;
  }
  .me-xl-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-xl-0 {
    padding: 0px !important;
  }
  .pa-xl-1 {
    padding: 4px !important;
  }
  .pa-xl-2 {
    padding: 8px !important;
  }
  .pa-xl-3 {
    padding: 12px !important;
  }
  .pa-xl-4 {
    padding: 16px !important;
  }
  .pa-xl-5 {
    padding: 20px !important;
  }
  .pa-xl-6 {
    padding: 24px !important;
  }
  .pa-xl-7 {
    padding: 28px !important;
  }
  .pa-xl-8 {
    padding: 32px !important;
  }
  .pa-xl-9 {
    padding: 36px !important;
  }
  .pa-xl-10 {
    padding: 40px !important;
  }
  .pa-xl-11 {
    padding: 44px !important;
  }
  .pa-xl-12 {
    padding: 48px !important;
  }
  .pa-xl-13 {
    padding: 52px !important;
  }
  .pa-xl-14 {
    padding: 56px !important;
  }
  .pa-xl-15 {
    padding: 60px !important;
  }
  .pa-xl-16 {
    padding: 64px !important;
  }
  .px-xl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-xl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-xl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-xl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-xl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-xl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-xl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-xl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-xl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-xl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-xl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-xl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-xl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-xl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-xl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-xl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-xl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-xl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-xl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-xl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-xl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-xl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-xl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-xl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-xl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-xl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-xl-0 {
    padding-top: 0px !important;
  }
  .pt-xl-1 {
    padding-top: 4px !important;
  }
  .pt-xl-2 {
    padding-top: 8px !important;
  }
  .pt-xl-3 {
    padding-top: 12px !important;
  }
  .pt-xl-4 {
    padding-top: 16px !important;
  }
  .pt-xl-5 {
    padding-top: 20px !important;
  }
  .pt-xl-6 {
    padding-top: 24px !important;
  }
  .pt-xl-7 {
    padding-top: 28px !important;
  }
  .pt-xl-8 {
    padding-top: 32px !important;
  }
  .pt-xl-9 {
    padding-top: 36px !important;
  }
  .pt-xl-10 {
    padding-top: 40px !important;
  }
  .pt-xl-11 {
    padding-top: 44px !important;
  }
  .pt-xl-12 {
    padding-top: 48px !important;
  }
  .pt-xl-13 {
    padding-top: 52px !important;
  }
  .pt-xl-14 {
    padding-top: 56px !important;
  }
  .pt-xl-15 {
    padding-top: 60px !important;
  }
  .pt-xl-16 {
    padding-top: 64px !important;
  }
  .pr-xl-0 {
    padding-right: 0px !important;
  }
  .pr-xl-1 {
    padding-right: 4px !important;
  }
  .pr-xl-2 {
    padding-right: 8px !important;
  }
  .pr-xl-3 {
    padding-right: 12px !important;
  }
  .pr-xl-4 {
    padding-right: 16px !important;
  }
  .pr-xl-5 {
    padding-right: 20px !important;
  }
  .pr-xl-6 {
    padding-right: 24px !important;
  }
  .pr-xl-7 {
    padding-right: 28px !important;
  }
  .pr-xl-8 {
    padding-right: 32px !important;
  }
  .pr-xl-9 {
    padding-right: 36px !important;
  }
  .pr-xl-10 {
    padding-right: 40px !important;
  }
  .pr-xl-11 {
    padding-right: 44px !important;
  }
  .pr-xl-12 {
    padding-right: 48px !important;
  }
  .pr-xl-13 {
    padding-right: 52px !important;
  }
  .pr-xl-14 {
    padding-right: 56px !important;
  }
  .pr-xl-15 {
    padding-right: 60px !important;
  }
  .pr-xl-16 {
    padding-right: 64px !important;
  }
  .pb-xl-0 {
    padding-bottom: 0px !important;
  }
  .pb-xl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xl-3 {
    padding-bottom: 12px !important;
  }
  .pb-xl-4 {
    padding-bottom: 16px !important;
  }
  .pb-xl-5 {
    padding-bottom: 20px !important;
  }
  .pb-xl-6 {
    padding-bottom: 24px !important;
  }
  .pb-xl-7 {
    padding-bottom: 28px !important;
  }
  .pb-xl-8 {
    padding-bottom: 32px !important;
  }
  .pb-xl-9 {
    padding-bottom: 36px !important;
  }
  .pb-xl-10 {
    padding-bottom: 40px !important;
  }
  .pb-xl-11 {
    padding-bottom: 44px !important;
  }
  .pb-xl-12 {
    padding-bottom: 48px !important;
  }
  .pb-xl-13 {
    padding-bottom: 52px !important;
  }
  .pb-xl-14 {
    padding-bottom: 56px !important;
  }
  .pb-xl-15 {
    padding-bottom: 60px !important;
  }
  .pb-xl-16 {
    padding-bottom: 64px !important;
  }
  .pl-xl-0 {
    padding-left: 0px !important;
  }
  .pl-xl-1 {
    padding-left: 4px !important;
  }
  .pl-xl-2 {
    padding-left: 8px !important;
  }
  .pl-xl-3 {
    padding-left: 12px !important;
  }
  .pl-xl-4 {
    padding-left: 16px !important;
  }
  .pl-xl-5 {
    padding-left: 20px !important;
  }
  .pl-xl-6 {
    padding-left: 24px !important;
  }
  .pl-xl-7 {
    padding-left: 28px !important;
  }
  .pl-xl-8 {
    padding-left: 32px !important;
  }
  .pl-xl-9 {
    padding-left: 36px !important;
  }
  .pl-xl-10 {
    padding-left: 40px !important;
  }
  .pl-xl-11 {
    padding-left: 44px !important;
  }
  .pl-xl-12 {
    padding-left: 48px !important;
  }
  .pl-xl-13 {
    padding-left: 52px !important;
  }
  .pl-xl-14 {
    padding-left: 56px !important;
  }
  .pl-xl-15 {
    padding-left: 60px !important;
  }
  .pl-xl-16 {
    padding-left: 64px !important;
  }
  .ps-xl-0 {
    padding-inline-start: 0px !important;
  }
  .ps-xl-1 {
    padding-inline-start: 4px !important;
  }
  .ps-xl-2 {
    padding-inline-start: 8px !important;
  }
  .ps-xl-3 {
    padding-inline-start: 12px !important;
  }
  .ps-xl-4 {
    padding-inline-start: 16px !important;
  }
  .ps-xl-5 {
    padding-inline-start: 20px !important;
  }
  .ps-xl-6 {
    padding-inline-start: 24px !important;
  }
  .ps-xl-7 {
    padding-inline-start: 28px !important;
  }
  .ps-xl-8 {
    padding-inline-start: 32px !important;
  }
  .ps-xl-9 {
    padding-inline-start: 36px !important;
  }
  .ps-xl-10 {
    padding-inline-start: 40px !important;
  }
  .ps-xl-11 {
    padding-inline-start: 44px !important;
  }
  .ps-xl-12 {
    padding-inline-start: 48px !important;
  }
  .ps-xl-13 {
    padding-inline-start: 52px !important;
  }
  .ps-xl-14 {
    padding-inline-start: 56px !important;
  }
  .ps-xl-15 {
    padding-inline-start: 60px !important;
  }
  .ps-xl-16 {
    padding-inline-start: 64px !important;
  }
  .pe-xl-0 {
    padding-inline-end: 0px !important;
  }
  .pe-xl-1 {
    padding-inline-end: 4px !important;
  }
  .pe-xl-2 {
    padding-inline-end: 8px !important;
  }
  .pe-xl-3 {
    padding-inline-end: 12px !important;
  }
  .pe-xl-4 {
    padding-inline-end: 16px !important;
  }
  .pe-xl-5 {
    padding-inline-end: 20px !important;
  }
  .pe-xl-6 {
    padding-inline-end: 24px !important;
  }
  .pe-xl-7 {
    padding-inline-end: 28px !important;
  }
  .pe-xl-8 {
    padding-inline-end: 32px !important;
  }
  .pe-xl-9 {
    padding-inline-end: 36px !important;
  }
  .pe-xl-10 {
    padding-inline-end: 40px !important;
  }
  .pe-xl-11 {
    padding-inline-end: 44px !important;
  }
  .pe-xl-12 {
    padding-inline-end: 48px !important;
  }
  .pe-xl-13 {
    padding-inline-end: 52px !important;
  }
  .pe-xl-14 {
    padding-inline-end: 56px !important;
  }
  .pe-xl-15 {
    padding-inline-end: 60px !important;
  }
  .pe-xl-16 {
    padding-inline-end: 64px !important;
  }
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
  .text-xl-justify {
    text-align: justify !important;
  }
  .text-xl-start {
    text-align: start !important;
  }
  .text-xl-end {
    text-align: end !important;
  }
  .text-xl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 1.175;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 1.333;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.425;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.6;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .text-xl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.667;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2.667;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .h-xl-auto {
    height: auto !important;
  }
  .h-xl-screen {
    height: 100vh !important;
  }
  .h-xl-0 {
    height: 0 !important;
  }
  .h-xl-25 {
    height: 25% !important;
  }
  .h-xl-50 {
    height: 50% !important;
  }
  .h-xl-75 {
    height: 75% !important;
  }
  .h-xl-100 {
    height: 100% !important;
  }
  .w-xl-auto {
    width: auto !important;
  }
  .w-xl-0 {
    width: 0 !important;
  }
  .w-xl-25 {
    width: 25% !important;
  }
  .w-xl-33 {
    width: 33% !important;
  }
  .w-xl-50 {
    width: 50% !important;
  }
  .w-xl-66 {
    width: 66% !important;
  }
  .w-xl-75 {
    width: 75% !important;
  }
  .w-xl-100 {
    width: 100% !important;
  }
}
@media (min-width: 2560px) {
  .d-xxl-none {
    display: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .float-xxl-left {
    float: left !important;
  }
  .float-xxl-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-xxl-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-xxl-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-xxl-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-xxl-start {
    float: left !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-1-1 {
    flex: 1 1 auto !important;
  }
  .flex-xxl-1-0 {
    flex: 1 0 auto !important;
  }
  .flex-xxl-0-1 {
    flex: 0 1 auto !important;
  }
  .flex-xxl-0-0 {
    flex: 0 0 auto !important;
  }
  .flex-xxl-1-1-100 {
    flex: 1 1 100% !important;
  }
  .flex-xxl-1-0-100 {
    flex: 1 0 100% !important;
  }
  .flex-xxl-0-1-100 {
    flex: 0 1 100% !important;
  }
  .flex-xxl-0-0-100 {
    flex: 0 0 100% !important;
  }
  .flex-xxl-1-1-0 {
    flex: 1 1 0 !important;
  }
  .flex-xxl-1-0-0 {
    flex: 1 0 0 !important;
  }
  .flex-xxl-0-1-0 {
    flex: 0 1 0 !important;
  }
  .flex-xxl-0-0-0 {
    flex: 0 0 0 !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-xxl-center {
    justify-content: center !important;
  }
  .justify-xxl-space-between {
    justify-content: space-between !important;
  }
  .justify-xxl-space-around {
    justify-content: space-around !important;
  }
  .justify-xxl-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-xxl-start {
    align-items: flex-start !important;
  }
  .align-xxl-end {
    align-items: flex-end !important;
  }
  .align-xxl-center {
    align-items: center !important;
  }
  .align-xxl-baseline {
    align-items: baseline !important;
  }
  .align-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-space-between {
    align-content: space-between !important;
  }
  .align-content-xxl-space-around {
    align-content: space-around !important;
  }
  .align-content-xxl-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-6 {
    order: 6 !important;
  }
  .order-xxl-7 {
    order: 7 !important;
  }
  .order-xxl-8 {
    order: 8 !important;
  }
  .order-xxl-9 {
    order: 9 !important;
  }
  .order-xxl-10 {
    order: 10 !important;
  }
  .order-xxl-11 {
    order: 11 !important;
  }
  .order-xxl-12 {
    order: 12 !important;
  }
  .order-xxl-last {
    order: 13 !important;
  }
  .ga-xxl-0 {
    gap: 0px !important;
  }
  .ga-xxl-1 {
    gap: 4px !important;
  }
  .ga-xxl-2 {
    gap: 8px !important;
  }
  .ga-xxl-3 {
    gap: 12px !important;
  }
  .ga-xxl-4 {
    gap: 16px !important;
  }
  .ga-xxl-5 {
    gap: 20px !important;
  }
  .ga-xxl-6 {
    gap: 24px !important;
  }
  .ga-xxl-7 {
    gap: 28px !important;
  }
  .ga-xxl-8 {
    gap: 32px !important;
  }
  .ga-xxl-9 {
    gap: 36px !important;
  }
  .ga-xxl-10 {
    gap: 40px !important;
  }
  .ga-xxl-11 {
    gap: 44px !important;
  }
  .ga-xxl-12 {
    gap: 48px !important;
  }
  .ga-xxl-13 {
    gap: 52px !important;
  }
  .ga-xxl-14 {
    gap: 56px !important;
  }
  .ga-xxl-15 {
    gap: 60px !important;
  }
  .ga-xxl-16 {
    gap: 64px !important;
  }
  .ga-xxl-auto {
    gap: auto !important;
  }
  .gr-xxl-0 {
    row-gap: 0px !important;
  }
  .gr-xxl-1 {
    row-gap: 4px !important;
  }
  .gr-xxl-2 {
    row-gap: 8px !important;
  }
  .gr-xxl-3 {
    row-gap: 12px !important;
  }
  .gr-xxl-4 {
    row-gap: 16px !important;
  }
  .gr-xxl-5 {
    row-gap: 20px !important;
  }
  .gr-xxl-6 {
    row-gap: 24px !important;
  }
  .gr-xxl-7 {
    row-gap: 28px !important;
  }
  .gr-xxl-8 {
    row-gap: 32px !important;
  }
  .gr-xxl-9 {
    row-gap: 36px !important;
  }
  .gr-xxl-10 {
    row-gap: 40px !important;
  }
  .gr-xxl-11 {
    row-gap: 44px !important;
  }
  .gr-xxl-12 {
    row-gap: 48px !important;
  }
  .gr-xxl-13 {
    row-gap: 52px !important;
  }
  .gr-xxl-14 {
    row-gap: 56px !important;
  }
  .gr-xxl-15 {
    row-gap: 60px !important;
  }
  .gr-xxl-16 {
    row-gap: 64px !important;
  }
  .gr-xxl-auto {
    row-gap: auto !important;
  }
  .gc-xxl-0 {
    column-gap: 0px !important;
  }
  .gc-xxl-1 {
    column-gap: 4px !important;
  }
  .gc-xxl-2 {
    column-gap: 8px !important;
  }
  .gc-xxl-3 {
    column-gap: 12px !important;
  }
  .gc-xxl-4 {
    column-gap: 16px !important;
  }
  .gc-xxl-5 {
    column-gap: 20px !important;
  }
  .gc-xxl-6 {
    column-gap: 24px !important;
  }
  .gc-xxl-7 {
    column-gap: 28px !important;
  }
  .gc-xxl-8 {
    column-gap: 32px !important;
  }
  .gc-xxl-9 {
    column-gap: 36px !important;
  }
  .gc-xxl-10 {
    column-gap: 40px !important;
  }
  .gc-xxl-11 {
    column-gap: 44px !important;
  }
  .gc-xxl-12 {
    column-gap: 48px !important;
  }
  .gc-xxl-13 {
    column-gap: 52px !important;
  }
  .gc-xxl-14 {
    column-gap: 56px !important;
  }
  .gc-xxl-15 {
    column-gap: 60px !important;
  }
  .gc-xxl-16 {
    column-gap: 64px !important;
  }
  .gc-xxl-auto {
    column-gap: auto !important;
  }
  .ma-xxl-0 {
    margin: 0px !important;
  }
  .ma-xxl-1 {
    margin: 4px !important;
  }
  .ma-xxl-2 {
    margin: 8px !important;
  }
  .ma-xxl-3 {
    margin: 12px !important;
  }
  .ma-xxl-4 {
    margin: 16px !important;
  }
  .ma-xxl-5 {
    margin: 20px !important;
  }
  .ma-xxl-6 {
    margin: 24px !important;
  }
  .ma-xxl-7 {
    margin: 28px !important;
  }
  .ma-xxl-8 {
    margin: 32px !important;
  }
  .ma-xxl-9 {
    margin: 36px !important;
  }
  .ma-xxl-10 {
    margin: 40px !important;
  }
  .ma-xxl-11 {
    margin: 44px !important;
  }
  .ma-xxl-12 {
    margin: 48px !important;
  }
  .ma-xxl-13 {
    margin: 52px !important;
  }
  .ma-xxl-14 {
    margin: 56px !important;
  }
  .ma-xxl-15 {
    margin: 60px !important;
  }
  .ma-xxl-16 {
    margin: 64px !important;
  }
  .ma-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-xxl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xxl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xxl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-xxl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xxl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-xxl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xxl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-xxl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-xxl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-xxl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-xxl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-xxl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xxl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-xxl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-xxl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-xxl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-xxl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xxl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xxl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-xxl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xxl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-xxl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xxl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-xxl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-xxl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-xxl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-xxl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-xxl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xxl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-xxl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-xxl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-xxl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0px !important;
  }
  .mt-xxl-1 {
    margin-top: 4px !important;
  }
  .mt-xxl-2 {
    margin-top: 8px !important;
  }
  .mt-xxl-3 {
    margin-top: 12px !important;
  }
  .mt-xxl-4 {
    margin-top: 16px !important;
  }
  .mt-xxl-5 {
    margin-top: 20px !important;
  }
  .mt-xxl-6 {
    margin-top: 24px !important;
  }
  .mt-xxl-7 {
    margin-top: 28px !important;
  }
  .mt-xxl-8 {
    margin-top: 32px !important;
  }
  .mt-xxl-9 {
    margin-top: 36px !important;
  }
  .mt-xxl-10 {
    margin-top: 40px !important;
  }
  .mt-xxl-11 {
    margin-top: 44px !important;
  }
  .mt-xxl-12 {
    margin-top: 48px !important;
  }
  .mt-xxl-13 {
    margin-top: 52px !important;
  }
  .mt-xxl-14 {
    margin-top: 56px !important;
  }
  .mt-xxl-15 {
    margin-top: 60px !important;
  }
  .mt-xxl-16 {
    margin-top: 64px !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .mr-xxl-0 {
    margin-right: 0px !important;
  }
  .mr-xxl-1 {
    margin-right: 4px !important;
  }
  .mr-xxl-2 {
    margin-right: 8px !important;
  }
  .mr-xxl-3 {
    margin-right: 12px !important;
  }
  .mr-xxl-4 {
    margin-right: 16px !important;
  }
  .mr-xxl-5 {
    margin-right: 20px !important;
  }
  .mr-xxl-6 {
    margin-right: 24px !important;
  }
  .mr-xxl-7 {
    margin-right: 28px !important;
  }
  .mr-xxl-8 {
    margin-right: 32px !important;
  }
  .mr-xxl-9 {
    margin-right: 36px !important;
  }
  .mr-xxl-10 {
    margin-right: 40px !important;
  }
  .mr-xxl-11 {
    margin-right: 44px !important;
  }
  .mr-xxl-12 {
    margin-right: 48px !important;
  }
  .mr-xxl-13 {
    margin-right: 52px !important;
  }
  .mr-xxl-14 {
    margin-right: 56px !important;
  }
  .mr-xxl-15 {
    margin-right: 60px !important;
  }
  .mr-xxl-16 {
    margin-right: 64px !important;
  }
  .mr-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0px !important;
  }
  .mb-xxl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xxl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xxl-3 {
    margin-bottom: 12px !important;
  }
  .mb-xxl-4 {
    margin-bottom: 16px !important;
  }
  .mb-xxl-5 {
    margin-bottom: 20px !important;
  }
  .mb-xxl-6 {
    margin-bottom: 24px !important;
  }
  .mb-xxl-7 {
    margin-bottom: 28px !important;
  }
  .mb-xxl-8 {
    margin-bottom: 32px !important;
  }
  .mb-xxl-9 {
    margin-bottom: 36px !important;
  }
  .mb-xxl-10 {
    margin-bottom: 40px !important;
  }
  .mb-xxl-11 {
    margin-bottom: 44px !important;
  }
  .mb-xxl-12 {
    margin-bottom: 48px !important;
  }
  .mb-xxl-13 {
    margin-bottom: 52px !important;
  }
  .mb-xxl-14 {
    margin-bottom: 56px !important;
  }
  .mb-xxl-15 {
    margin-bottom: 60px !important;
  }
  .mb-xxl-16 {
    margin-bottom: 64px !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ml-xxl-0 {
    margin-left: 0px !important;
  }
  .ml-xxl-1 {
    margin-left: 4px !important;
  }
  .ml-xxl-2 {
    margin-left: 8px !important;
  }
  .ml-xxl-3 {
    margin-left: 12px !important;
  }
  .ml-xxl-4 {
    margin-left: 16px !important;
  }
  .ml-xxl-5 {
    margin-left: 20px !important;
  }
  .ml-xxl-6 {
    margin-left: 24px !important;
  }
  .ml-xxl-7 {
    margin-left: 28px !important;
  }
  .ml-xxl-8 {
    margin-left: 32px !important;
  }
  .ml-xxl-9 {
    margin-left: 36px !important;
  }
  .ml-xxl-10 {
    margin-left: 40px !important;
  }
  .ml-xxl-11 {
    margin-left: 44px !important;
  }
  .ml-xxl-12 {
    margin-left: 48px !important;
  }
  .ml-xxl-13 {
    margin-left: 52px !important;
  }
  .ml-xxl-14 {
    margin-left: 56px !important;
  }
  .ml-xxl-15 {
    margin-left: 60px !important;
  }
  .ml-xxl-16 {
    margin-left: 64px !important;
  }
  .ml-xxl-auto {
    margin-left: auto !important;
  }
  .ms-xxl-0 {
    margin-inline-start: 0px !important;
  }
  .ms-xxl-1 {
    margin-inline-start: 4px !important;
  }
  .ms-xxl-2 {
    margin-inline-start: 8px !important;
  }
  .ms-xxl-3 {
    margin-inline-start: 12px !important;
  }
  .ms-xxl-4 {
    margin-inline-start: 16px !important;
  }
  .ms-xxl-5 {
    margin-inline-start: 20px !important;
  }
  .ms-xxl-6 {
    margin-inline-start: 24px !important;
  }
  .ms-xxl-7 {
    margin-inline-start: 28px !important;
  }
  .ms-xxl-8 {
    margin-inline-start: 32px !important;
  }
  .ms-xxl-9 {
    margin-inline-start: 36px !important;
  }
  .ms-xxl-10 {
    margin-inline-start: 40px !important;
  }
  .ms-xxl-11 {
    margin-inline-start: 44px !important;
  }
  .ms-xxl-12 {
    margin-inline-start: 48px !important;
  }
  .ms-xxl-13 {
    margin-inline-start: 52px !important;
  }
  .ms-xxl-14 {
    margin-inline-start: 56px !important;
  }
  .ms-xxl-15 {
    margin-inline-start: 60px !important;
  }
  .ms-xxl-16 {
    margin-inline-start: 64px !important;
  }
  .ms-xxl-auto {
    margin-inline-start: auto !important;
  }
  .me-xxl-0 {
    margin-inline-end: 0px !important;
  }
  .me-xxl-1 {
    margin-inline-end: 4px !important;
  }
  .me-xxl-2 {
    margin-inline-end: 8px !important;
  }
  .me-xxl-3 {
    margin-inline-end: 12px !important;
  }
  .me-xxl-4 {
    margin-inline-end: 16px !important;
  }
  .me-xxl-5 {
    margin-inline-end: 20px !important;
  }
  .me-xxl-6 {
    margin-inline-end: 24px !important;
  }
  .me-xxl-7 {
    margin-inline-end: 28px !important;
  }
  .me-xxl-8 {
    margin-inline-end: 32px !important;
  }
  .me-xxl-9 {
    margin-inline-end: 36px !important;
  }
  .me-xxl-10 {
    margin-inline-end: 40px !important;
  }
  .me-xxl-11 {
    margin-inline-end: 44px !important;
  }
  .me-xxl-12 {
    margin-inline-end: 48px !important;
  }
  .me-xxl-13 {
    margin-inline-end: 52px !important;
  }
  .me-xxl-14 {
    margin-inline-end: 56px !important;
  }
  .me-xxl-15 {
    margin-inline-end: 60px !important;
  }
  .me-xxl-16 {
    margin-inline-end: 64px !important;
  }
  .me-xxl-auto {
    margin-inline-end: auto !important;
  }
  .ma-xxl-n1 {
    margin: -4px !important;
  }
  .ma-xxl-n2 {
    margin: -8px !important;
  }
  .ma-xxl-n3 {
    margin: -12px !important;
  }
  .ma-xxl-n4 {
    margin: -16px !important;
  }
  .ma-xxl-n5 {
    margin: -20px !important;
  }
  .ma-xxl-n6 {
    margin: -24px !important;
  }
  .ma-xxl-n7 {
    margin: -28px !important;
  }
  .ma-xxl-n8 {
    margin: -32px !important;
  }
  .ma-xxl-n9 {
    margin: -36px !important;
  }
  .ma-xxl-n10 {
    margin: -40px !important;
  }
  .ma-xxl-n11 {
    margin: -44px !important;
  }
  .ma-xxl-n12 {
    margin: -48px !important;
  }
  .ma-xxl-n13 {
    margin: -52px !important;
  }
  .ma-xxl-n14 {
    margin: -56px !important;
  }
  .ma-xxl-n15 {
    margin: -60px !important;
  }
  .ma-xxl-n16 {
    margin: -64px !important;
  }
  .mx-xxl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-xxl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-xxl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-xxl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-xxl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-xxl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-xxl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-xxl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-xxl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-xxl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-xxl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-xxl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-xxl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-xxl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-xxl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-xxl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-xxl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-xxl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-xxl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-xxl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-xxl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-xxl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-xxl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-xxl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-xxl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-xxl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-xxl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-xxl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-xxl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-xxl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-xxl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-xxl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-xxl-n1 {
    margin-top: -4px !important;
  }
  .mt-xxl-n2 {
    margin-top: -8px !important;
  }
  .mt-xxl-n3 {
    margin-top: -12px !important;
  }
  .mt-xxl-n4 {
    margin-top: -16px !important;
  }
  .mt-xxl-n5 {
    margin-top: -20px !important;
  }
  .mt-xxl-n6 {
    margin-top: -24px !important;
  }
  .mt-xxl-n7 {
    margin-top: -28px !important;
  }
  .mt-xxl-n8 {
    margin-top: -32px !important;
  }
  .mt-xxl-n9 {
    margin-top: -36px !important;
  }
  .mt-xxl-n10 {
    margin-top: -40px !important;
  }
  .mt-xxl-n11 {
    margin-top: -44px !important;
  }
  .mt-xxl-n12 {
    margin-top: -48px !important;
  }
  .mt-xxl-n13 {
    margin-top: -52px !important;
  }
  .mt-xxl-n14 {
    margin-top: -56px !important;
  }
  .mt-xxl-n15 {
    margin-top: -60px !important;
  }
  .mt-xxl-n16 {
    margin-top: -64px !important;
  }
  .mr-xxl-n1 {
    margin-right: -4px !important;
  }
  .mr-xxl-n2 {
    margin-right: -8px !important;
  }
  .mr-xxl-n3 {
    margin-right: -12px !important;
  }
  .mr-xxl-n4 {
    margin-right: -16px !important;
  }
  .mr-xxl-n5 {
    margin-right: -20px !important;
  }
  .mr-xxl-n6 {
    margin-right: -24px !important;
  }
  .mr-xxl-n7 {
    margin-right: -28px !important;
  }
  .mr-xxl-n8 {
    margin-right: -32px !important;
  }
  .mr-xxl-n9 {
    margin-right: -36px !important;
  }
  .mr-xxl-n10 {
    margin-right: -40px !important;
  }
  .mr-xxl-n11 {
    margin-right: -44px !important;
  }
  .mr-xxl-n12 {
    margin-right: -48px !important;
  }
  .mr-xxl-n13 {
    margin-right: -52px !important;
  }
  .mr-xxl-n14 {
    margin-right: -56px !important;
  }
  .mr-xxl-n15 {
    margin-right: -60px !important;
  }
  .mr-xxl-n16 {
    margin-right: -64px !important;
  }
  .mb-xxl-n1 {
    margin-bottom: -4px !important;
  }
  .mb-xxl-n2 {
    margin-bottom: -8px !important;
  }
  .mb-xxl-n3 {
    margin-bottom: -12px !important;
  }
  .mb-xxl-n4 {
    margin-bottom: -16px !important;
  }
  .mb-xxl-n5 {
    margin-bottom: -20px !important;
  }
  .mb-xxl-n6 {
    margin-bottom: -24px !important;
  }
  .mb-xxl-n7 {
    margin-bottom: -28px !important;
  }
  .mb-xxl-n8 {
    margin-bottom: -32px !important;
  }
  .mb-xxl-n9 {
    margin-bottom: -36px !important;
  }
  .mb-xxl-n10 {
    margin-bottom: -40px !important;
  }
  .mb-xxl-n11 {
    margin-bottom: -44px !important;
  }
  .mb-xxl-n12 {
    margin-bottom: -48px !important;
  }
  .mb-xxl-n13 {
    margin-bottom: -52px !important;
  }
  .mb-xxl-n14 {
    margin-bottom: -56px !important;
  }
  .mb-xxl-n15 {
    margin-bottom: -60px !important;
  }
  .mb-xxl-n16 {
    margin-bottom: -64px !important;
  }
  .ml-xxl-n1 {
    margin-left: -4px !important;
  }
  .ml-xxl-n2 {
    margin-left: -8px !important;
  }
  .ml-xxl-n3 {
    margin-left: -12px !important;
  }
  .ml-xxl-n4 {
    margin-left: -16px !important;
  }
  .ml-xxl-n5 {
    margin-left: -20px !important;
  }
  .ml-xxl-n6 {
    margin-left: -24px !important;
  }
  .ml-xxl-n7 {
    margin-left: -28px !important;
  }
  .ml-xxl-n8 {
    margin-left: -32px !important;
  }
  .ml-xxl-n9 {
    margin-left: -36px !important;
  }
  .ml-xxl-n10 {
    margin-left: -40px !important;
  }
  .ml-xxl-n11 {
    margin-left: -44px !important;
  }
  .ml-xxl-n12 {
    margin-left: -48px !important;
  }
  .ml-xxl-n13 {
    margin-left: -52px !important;
  }
  .ml-xxl-n14 {
    margin-left: -56px !important;
  }
  .ml-xxl-n15 {
    margin-left: -60px !important;
  }
  .ml-xxl-n16 {
    margin-left: -64px !important;
  }
  .ms-xxl-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-xxl-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-xxl-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-xxl-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-xxl-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-xxl-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-xxl-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-xxl-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-xxl-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-xxl-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-xxl-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-xxl-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-xxl-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-xxl-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-xxl-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-xxl-n16 {
    margin-inline-start: -64px !important;
  }
  .me-xxl-n1 {
    margin-inline-end: -4px !important;
  }
  .me-xxl-n2 {
    margin-inline-end: -8px !important;
  }
  .me-xxl-n3 {
    margin-inline-end: -12px !important;
  }
  .me-xxl-n4 {
    margin-inline-end: -16px !important;
  }
  .me-xxl-n5 {
    margin-inline-end: -20px !important;
  }
  .me-xxl-n6 {
    margin-inline-end: -24px !important;
  }
  .me-xxl-n7 {
    margin-inline-end: -28px !important;
  }
  .me-xxl-n8 {
    margin-inline-end: -32px !important;
  }
  .me-xxl-n9 {
    margin-inline-end: -36px !important;
  }
  .me-xxl-n10 {
    margin-inline-end: -40px !important;
  }
  .me-xxl-n11 {
    margin-inline-end: -44px !important;
  }
  .me-xxl-n12 {
    margin-inline-end: -48px !important;
  }
  .me-xxl-n13 {
    margin-inline-end: -52px !important;
  }
  .me-xxl-n14 {
    margin-inline-end: -56px !important;
  }
  .me-xxl-n15 {
    margin-inline-end: -60px !important;
  }
  .me-xxl-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-xxl-0 {
    padding: 0px !important;
  }
  .pa-xxl-1 {
    padding: 4px !important;
  }
  .pa-xxl-2 {
    padding: 8px !important;
  }
  .pa-xxl-3 {
    padding: 12px !important;
  }
  .pa-xxl-4 {
    padding: 16px !important;
  }
  .pa-xxl-5 {
    padding: 20px !important;
  }
  .pa-xxl-6 {
    padding: 24px !important;
  }
  .pa-xxl-7 {
    padding: 28px !important;
  }
  .pa-xxl-8 {
    padding: 32px !important;
  }
  .pa-xxl-9 {
    padding: 36px !important;
  }
  .pa-xxl-10 {
    padding: 40px !important;
  }
  .pa-xxl-11 {
    padding: 44px !important;
  }
  .pa-xxl-12 {
    padding: 48px !important;
  }
  .pa-xxl-13 {
    padding: 52px !important;
  }
  .pa-xxl-14 {
    padding: 56px !important;
  }
  .pa-xxl-15 {
    padding: 60px !important;
  }
  .pa-xxl-16 {
    padding: 64px !important;
  }
  .px-xxl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-xxl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xxl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xxl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-xxl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xxl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-xxl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xxl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-xxl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-xxl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-xxl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-xxl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-xxl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-xxl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-xxl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-xxl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-xxl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-xxl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-xxl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xxl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xxl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-xxl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xxl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-xxl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xxl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-xxl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-xxl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-xxl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-xxl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-xxl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-xxl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-xxl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-xxl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-xxl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-xxl-0 {
    padding-top: 0px !important;
  }
  .pt-xxl-1 {
    padding-top: 4px !important;
  }
  .pt-xxl-2 {
    padding-top: 8px !important;
  }
  .pt-xxl-3 {
    padding-top: 12px !important;
  }
  .pt-xxl-4 {
    padding-top: 16px !important;
  }
  .pt-xxl-5 {
    padding-top: 20px !important;
  }
  .pt-xxl-6 {
    padding-top: 24px !important;
  }
  .pt-xxl-7 {
    padding-top: 28px !important;
  }
  .pt-xxl-8 {
    padding-top: 32px !important;
  }
  .pt-xxl-9 {
    padding-top: 36px !important;
  }
  .pt-xxl-10 {
    padding-top: 40px !important;
  }
  .pt-xxl-11 {
    padding-top: 44px !important;
  }
  .pt-xxl-12 {
    padding-top: 48px !important;
  }
  .pt-xxl-13 {
    padding-top: 52px !important;
  }
  .pt-xxl-14 {
    padding-top: 56px !important;
  }
  .pt-xxl-15 {
    padding-top: 60px !important;
  }
  .pt-xxl-16 {
    padding-top: 64px !important;
  }
  .pr-xxl-0 {
    padding-right: 0px !important;
  }
  .pr-xxl-1 {
    padding-right: 4px !important;
  }
  .pr-xxl-2 {
    padding-right: 8px !important;
  }
  .pr-xxl-3 {
    padding-right: 12px !important;
  }
  .pr-xxl-4 {
    padding-right: 16px !important;
  }
  .pr-xxl-5 {
    padding-right: 20px !important;
  }
  .pr-xxl-6 {
    padding-right: 24px !important;
  }
  .pr-xxl-7 {
    padding-right: 28px !important;
  }
  .pr-xxl-8 {
    padding-right: 32px !important;
  }
  .pr-xxl-9 {
    padding-right: 36px !important;
  }
  .pr-xxl-10 {
    padding-right: 40px !important;
  }
  .pr-xxl-11 {
    padding-right: 44px !important;
  }
  .pr-xxl-12 {
    padding-right: 48px !important;
  }
  .pr-xxl-13 {
    padding-right: 52px !important;
  }
  .pr-xxl-14 {
    padding-right: 56px !important;
  }
  .pr-xxl-15 {
    padding-right: 60px !important;
  }
  .pr-xxl-16 {
    padding-right: 64px !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0px !important;
  }
  .pb-xxl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xxl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xxl-3 {
    padding-bottom: 12px !important;
  }
  .pb-xxl-4 {
    padding-bottom: 16px !important;
  }
  .pb-xxl-5 {
    padding-bottom: 20px !important;
  }
  .pb-xxl-6 {
    padding-bottom: 24px !important;
  }
  .pb-xxl-7 {
    padding-bottom: 28px !important;
  }
  .pb-xxl-8 {
    padding-bottom: 32px !important;
  }
  .pb-xxl-9 {
    padding-bottom: 36px !important;
  }
  .pb-xxl-10 {
    padding-bottom: 40px !important;
  }
  .pb-xxl-11 {
    padding-bottom: 44px !important;
  }
  .pb-xxl-12 {
    padding-bottom: 48px !important;
  }
  .pb-xxl-13 {
    padding-bottom: 52px !important;
  }
  .pb-xxl-14 {
    padding-bottom: 56px !important;
  }
  .pb-xxl-15 {
    padding-bottom: 60px !important;
  }
  .pb-xxl-16 {
    padding-bottom: 64px !important;
  }
  .pl-xxl-0 {
    padding-left: 0px !important;
  }
  .pl-xxl-1 {
    padding-left: 4px !important;
  }
  .pl-xxl-2 {
    padding-left: 8px !important;
  }
  .pl-xxl-3 {
    padding-left: 12px !important;
  }
  .pl-xxl-4 {
    padding-left: 16px !important;
  }
  .pl-xxl-5 {
    padding-left: 20px !important;
  }
  .pl-xxl-6 {
    padding-left: 24px !important;
  }
  .pl-xxl-7 {
    padding-left: 28px !important;
  }
  .pl-xxl-8 {
    padding-left: 32px !important;
  }
  .pl-xxl-9 {
    padding-left: 36px !important;
  }
  .pl-xxl-10 {
    padding-left: 40px !important;
  }
  .pl-xxl-11 {
    padding-left: 44px !important;
  }
  .pl-xxl-12 {
    padding-left: 48px !important;
  }
  .pl-xxl-13 {
    padding-left: 52px !important;
  }
  .pl-xxl-14 {
    padding-left: 56px !important;
  }
  .pl-xxl-15 {
    padding-left: 60px !important;
  }
  .pl-xxl-16 {
    padding-left: 64px !important;
  }
  .ps-xxl-0 {
    padding-inline-start: 0px !important;
  }
  .ps-xxl-1 {
    padding-inline-start: 4px !important;
  }
  .ps-xxl-2 {
    padding-inline-start: 8px !important;
  }
  .ps-xxl-3 {
    padding-inline-start: 12px !important;
  }
  .ps-xxl-4 {
    padding-inline-start: 16px !important;
  }
  .ps-xxl-5 {
    padding-inline-start: 20px !important;
  }
  .ps-xxl-6 {
    padding-inline-start: 24px !important;
  }
  .ps-xxl-7 {
    padding-inline-start: 28px !important;
  }
  .ps-xxl-8 {
    padding-inline-start: 32px !important;
  }
  .ps-xxl-9 {
    padding-inline-start: 36px !important;
  }
  .ps-xxl-10 {
    padding-inline-start: 40px !important;
  }
  .ps-xxl-11 {
    padding-inline-start: 44px !important;
  }
  .ps-xxl-12 {
    padding-inline-start: 48px !important;
  }
  .ps-xxl-13 {
    padding-inline-start: 52px !important;
  }
  .ps-xxl-14 {
    padding-inline-start: 56px !important;
  }
  .ps-xxl-15 {
    padding-inline-start: 60px !important;
  }
  .ps-xxl-16 {
    padding-inline-start: 64px !important;
  }
  .pe-xxl-0 {
    padding-inline-end: 0px !important;
  }
  .pe-xxl-1 {
    padding-inline-end: 4px !important;
  }
  .pe-xxl-2 {
    padding-inline-end: 8px !important;
  }
  .pe-xxl-3 {
    padding-inline-end: 12px !important;
  }
  .pe-xxl-4 {
    padding-inline-end: 16px !important;
  }
  .pe-xxl-5 {
    padding-inline-end: 20px !important;
  }
  .pe-xxl-6 {
    padding-inline-end: 24px !important;
  }
  .pe-xxl-7 {
    padding-inline-end: 28px !important;
  }
  .pe-xxl-8 {
    padding-inline-end: 32px !important;
  }
  .pe-xxl-9 {
    padding-inline-end: 36px !important;
  }
  .pe-xxl-10 {
    padding-inline-end: 40px !important;
  }
  .pe-xxl-11 {
    padding-inline-end: 44px !important;
  }
  .pe-xxl-12 {
    padding-inline-end: 48px !important;
  }
  .pe-xxl-13 {
    padding-inline-end: 52px !important;
  }
  .pe-xxl-14 {
    padding-inline-end: 56px !important;
  }
  .pe-xxl-15 {
    padding-inline-end: 60px !important;
  }
  .pe-xxl-16 {
    padding-inline-end: 64px !important;
  }
  .text-xxl-left {
    text-align: left !important;
  }
  .text-xxl-right {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
  .text-xxl-justify {
    text-align: justify !important;
  }
  .text-xxl-start {
    text-align: start !important;
  }
  .text-xxl-end {
    text-align: end !important;
  }
  .text-xxl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 1.175;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 1.333;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.425;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.6;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .text-xxl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.667;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif;
    text-transform: none !important;
  }
  .text-xxl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2.667;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase !important;
  }
  .h-xxl-auto {
    height: auto !important;
  }
  .h-xxl-screen {
    height: 100vh !important;
  }
  .h-xxl-0 {
    height: 0 !important;
  }
  .h-xxl-25 {
    height: 25% !important;
  }
  .h-xxl-50 {
    height: 50% !important;
  }
  .h-xxl-75 {
    height: 75% !important;
  }
  .h-xxl-100 {
    height: 100% !important;
  }
  .w-xxl-auto {
    width: auto !important;
  }
  .w-xxl-0 {
    width: 0 !important;
  }
  .w-xxl-25 {
    width: 25% !important;
  }
  .w-xxl-33 {
    width: 33% !important;
  }
  .w-xxl-50 {
    width: 50% !important;
  }
  .w-xxl-66 {
    width: 66% !important;
  }
  .w-xxl-75 {
    width: 75% !important;
  }
  .w-xxl-100 {
    width: 100% !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .float-print-none {
    float: none !important;
  }
  .float-print-left {
    float: left !important;
  }
  .float-print-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-print-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-print-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-print-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-print-start {
    float: left !important;
  }
}`;function Lh(n,e){const t=e.modifiers||{},a=e.value,{once:i,immediate:r,...o}=t,l=!Object.keys(o).length,{handler:s,options:u}=typeof a=="object"?a:{handler:a,options:{attributes:(o==null?void 0:o.attr)??l,characterData:(o==null?void 0:o.char)??l,childList:(o==null?void 0:o.child)??l,subtree:(o==null?void 0:o.sub)??l}},d=new MutationObserver(function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;s==null||s(p,f),i&&$d(n,e)});r&&(s==null||s([],d)),n._mutate=Object(n._mutate),n._mutate[e.instance.$.uid]={observer:d},d.observe(n,u)}function $d(n,e){var t;(t=n._mutate)!=null&&t[e.instance.$.uid]&&(n._mutate[e.instance.$.uid].observer.disconnect(),delete n._mutate[e.instance.$.uid])}const zh={mounted:Lh,unmounted:$d};function Nh(n,e){var i,r;const t=e.value,a={passive:!((i=e.modifiers)!=null&&i.active)};window.addEventListener("resize",t,a),n._onResize=Object(n._onResize),n._onResize[e.instance.$.uid]={handler:t,options:a},(r=e.modifiers)!=null&&r.quiet||t()}function jh(n,e){var i;if(!((i=n._onResize)!=null&&i[e.instance.$.uid]))return;const{handler:t,options:a}=n._onResize[e.instance.$.uid];window.removeEventListener("resize",t,a),delete n._onResize[e.instance.$.uid]}const Hh={mounted:Nh,unmounted:jh};function Od(n,e){const{self:t=!1}=e.modifiers??{},a=e.value,i=typeof a=="object"&&a.options||{passive:!0},r=typeof a=="function"||"handleEvent"in a?a:a.handler,o=t?n:e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",r,i),n._onScroll=Object(n._onScroll),n._onScroll[e.instance.$.uid]={handler:r,options:i,target:t?void 0:o})}function Ld(n,e){var r;if(!((r=n._onScroll)!=null&&r[e.instance.$.uid]))return;const{handler:t,options:a,target:i=n}=n._onScroll[e.instance.$.uid];i.removeEventListener("scroll",t,a),delete n._onScroll[e.instance.$.uid]}function Wh(n,e){e.value!==e.oldValue&&(Ld(n,e),Od(n,e))}const Yh={mounted:Od,unmounted:Ld,updated:Wh};function Gh(n,e){const t=typeof n=="string"?pt(n):n,a=Uh(t,e);return{mounted:a,updated:a,unmounted(i){El(null,i)}}}function Uh(n,e){return function(t,a,i){var p,f,c;const r=typeof e=="function"?e(a):e,o=((p=a.value)==null?void 0:p.text)??a.value??(r==null?void 0:r.text),l=Ke(a.value)?a.value:{},s=()=>o??t.textContent,u=(i.ctx===a.instance.$?(f=Kh(i,a.instance.$))==null?void 0:f.provides:(c=i.ctx)==null?void 0:c.provides)??a.instance.$.provides,d=Xt(n,z(r,l),s);d.appContext=Object.assign(Object.create(null),a.instance.$.appContext,{provides:u}),El(d,t)}}function Kh(n,e){const t=new Set,a=r=>{var o,l;for(const s of r){if(!s)continue;if(s===n||s.el&&n.el&&s.el===n.el)return!0;t.add(s);let u;if(s.suspense?u=a([s.ssContent]):Array.isArray(s.children)?u=a(s.children):(o=s.component)!=null&&o.vnode&&(u=a([(l=s.component)==null?void 0:l.subTree])),u)return u;t.delete(s)}return!1};if(!a([e.subTree]))return e;const i=Array.from(t).reverse();for(const r of i)if(r.component)return r.component;return e}const qh=Gh(Md,n=>{var e;return{activator:"parent",location:(e=n.arg)==null?void 0:e.replace("-"," "),text:typeof n.value=="boolean"?void 0:n.value}}),Xh=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:rs,Intersect:da,Mutate:zh,Resize:Hh,Ripple:Ht,Scroll:Yh,Tooltip:qh,Touch:Zr},Symbol.toStringTag,{value:"Module"}));function zd(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,a=et(e,t),{aliases:i={},components:r={},directives:o={}}=a,l=Ue();return l.run(()=>{const s=ju(a.defaults),u=wc(a.display,a.ssr),d=pp(a.theme),p=Yp(a.icons),f=np(a.locale),c=$x(a.date,f),g=Fc(a.goTo,f);function h(v){for(const k in o)v.directive(k,o[k]);for(const k in r)v.component(k,r[k]);for(const k in i)v.component(k,xt({...i[k],name:k,aliasName:i[k].name}));const b=Ue();if(b.run(()=>{d.install(v)}),v.onUnmount(()=>b.stop()),v.provide(_e,s),v.provide(Yi,u),v.provide(Je,d),v.provide(Ni,p),v.provide(Te,f),v.provide(Bs,c.options),v.provide(dl,c.instance),v.provide(Dm,g),Cn&&a.ssr)if(v.$nuxt)v.$nuxt.hook("app:suspense:resolve",()=>{u.update()});else{const{mount:k}=v;v.mount=function(){const C=k(...arguments);return Fn(()=>u.update()),v.mount=k,C}}v.mixin({computed:{$vuetify(){return dt({defaults:Pe.call(this,_e),display:Pe.call(this,Yi),theme:Pe.call(this,Je),icons:Pe.call(this,Ni),locale:Pe.call(this,Te),date:Pe.call(this,dl)})}}})}function x(){l.stop()}return{install:h,unmount:x,defaults:s,display:u,theme:d,icons:p,locale:f,date:c,goTo:g}})}const Zh="3.8.4";zd.version=Zh;function Pe(n){var a,i;const e=this.$,t=((a=e.parent)==null?void 0:a.provides)??((i=e.vnode.appContext)==null?void 0:i.provides);if(t&&n in t)return t[n]}const Jh=zd({components:_h,directives:Xh}),Qh={data:()=>({css:Rd,isDark:Wd({storageKey:"vitepress-theme-appearance"})}),beforeCreate(){Cl().appContext.app.use(Jh)}},a0=JSON.parse('{"title":"element-plus 表单渲染","description":"","frontmatter":{},"headers":[],"relativePath":"ui/vuetify.md","filePath":"ui/vuetify.md"}'),i0=Object.assign(Qh,{__name:"vuetify",setup(n){return(e,t)=>(Ai(),au("div",null,[t[1]||(t[1]=bo("",5)),m(lt(Yd),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0D%0A%20%20%3CForm%20%3Amodel%3D%22model%22%20label-width%3D%2260px%22%20%40_submit%3D%22onSubmit%22%20%3Aitems%3D%22%5B%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E5%A7%93%E5%90%8D'%2C%20'name'%5D%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E5%9C%B0%E5%9D%80'%2C%20'address'%5D%2C%20required%3A%20true%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E5%8C%BA%E5%9F%9F'%2C%20'area'%5D%2C%20options%3A%20%5B'Beijing'%2C%20'Shanghai'%5D%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E5%B9%B4%E9%BE%84'%2C%20'age'%5D%2C%20type%3A%20'slider'%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E6%80%A7%E5%88%AB'%2C%20'sex'%5D%2C%20type%3A%20'radios'%2C%20options%3A%20%5B'%E7%94%B7'%2C%20'%E5%A5%B3'%5D%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E7%88%B1%E5%A5%BD'%2C%20'like'%5D%2C%20type%3A%20'checks'%2C%20options%3A%20%5B'CODE'%2C%20'LOL'%5D%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E6%98%AF%E5%90%A6'%2C%20'is'%5D%2C%20type%3A%20'checkbox'%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E5%9C%A8%E8%81%8C'%2C%20'onjob'%5D%2C%20type%3A%20'switch'%2C%20color%3A%20'primary'%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E6%A0%87%E7%AD%BE'%2C%20'tags'%5D%2C%20type%3A%20'input-tag'%2C%20options%3A%20%5B'%E5%BD%B1%E8%A7%86'%2C%20'%E9%9F%B3%E4%B9%90'%2C%20'%E6%B8%B8%E6%88%8F'%2C%20'%E4%B9%A6%E7%B1%8D%E7%B1%BB%E5%9E%8B'%5D%2C%20multiple%3A%20true%20%7D%2C%0D%0A%20%20%20%20%7B%20lp%3A%20%5B'%E6%A0%87%E7%AD%BE'%2C%20'tags'%5D%2C%20type%3A%20'chips'%2C%20options%3A%20%5B'%E5%BD%B1%E8%A7%86'%2C%20'%E9%9F%B3%E4%B9%90'%2C%20'%E6%B8%B8%E6%88%8F'%2C%20'%E4%B9%A6%E7%B1%8D%E7%B1%BB%E5%9E%8B'%5D%2C%20multiple%3A%20true%20%7D%2C%0D%0A%20%20%5D%22%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22space-x-3%22%3E%0D%0A%20%20%20%20%20%20%3Cv-btn%20color%3D%22primary%22%20variant%3D%22elevated%22%20type%3D%22submit%22%3ESubmit%3C%2Fv-btn%3E%0D%0A%20%20%20%20%20%20%3Cv-btn%20variant%3D%22tonal%22%20type%3D%22reset%22%3EReset%3C%2Fv-btn%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%3Ccode%20block%3E%3Cpre%3Emodel%3A%20%7B%7B%20JSON.stringify(model%2C%20null%2C%20'%20%20')%20%7D%7D%3C%2Fpre%3E%3C%2Fcode%3E%0D%0A%20%20%3C%2FForm%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20Form%20from%20'el-form-render%2Fvuetify'%0D%0A%0D%0Aconst%20model%20%3D%20ref(%7B%7D)%0D%0A%0D%0Afunction%20onSubmit()%20%7B%0D%0A%20%20alert('Success')%0D%0A%7D%0D%0A%3C%2Fscript%3E",component:"CodePreview"},{code:Ae(()=>t[0]||(t[0]=[O("div",{class:"language-vue vp-adaptive-theme"},[O("button",{title:"Copy Code",class:"copy"}),O("span",{class:"lang"},"vue"),O("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[O("code",null,[O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"Form"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :model"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"model"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," label-width"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"60px"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," @_submit"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"onSubmit"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :items"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"[')]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['姓名', 'name'] },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['地址', 'address'], required: true },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['区域', 'area'], options: ['Beijing', 'Shanghai'] },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['年龄', 'age'], type: 'slider' },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['性别', 'sex'], type: 'radios', options: ['男', '女'] },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['爱好', 'like'], type: 'checks', options: ['CODE', 'LOL'] },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['是否', 'is'], type: 'checkbox' },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['在职', 'onjob'], type: 'switch', color: 'primary' },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['标签', 'tags'], type: 'input-tag', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    { lp: ['标签', 'tags'], type: 'chips', options: ['影视', '音乐', '游戏', '书籍类型'], multiple: true },")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'  ]"'),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"space-x-3"'),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-btn"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," color"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"primary"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," variant"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"elevated"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," type"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"submit"'),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">Submit</"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-btn"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-btn"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," variant"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"tonal"'),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," type"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"reset"'),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">Reset</"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-btn"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"}),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"br"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"code"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," block"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"><"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pre"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">model: {{ JSON.stringify(model, null, '  ') }}</"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"pre"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"code"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"Form"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"}),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Form "),O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'el-form-render/vuetify'")]),bn(`
`),O("span",{class:"line"}),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),O("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," model"),O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({})")]),bn(`
`),O("span",{class:"line"}),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," onSubmit"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  alert"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),O("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Success'"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),bn(`
`),O("span",{class:"line"},[O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),O("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),O("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:Ae(()=>[m(Oh)]),_:1}),t[2]||(t[2]=bo("",2)),(Ai(),Il(Ge("style"),null,{default:Ae(()=>[bn($t(lt(Rd)),1)]),_:1})),t[3]||(t[3]=O("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"},null,-1))]))}});export{a0 as __pageData,i0 as default};
