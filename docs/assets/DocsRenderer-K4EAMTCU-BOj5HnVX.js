const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DmW5CwA5.js","./index-C46ZOhF5.js","./index-pyznVGBr.js","./iframe-DSoALkhD.js","./_commonjsHelpers-Cpj98o6Y.js","./index-D-8MO0q_.js","./index-Dv1YWgiV.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./iframe-DSoALkhD.js";import{r as h,R as o,e as i,f as E,A as R,H as x,D as y}from"./index-pyznVGBr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";var u={},m=h;u.createRoot=m.createRoot,u.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},v=async(e,t,r)=>{let s=await _(t,r);return new Promise(a=>{s.render(o.createElement(D,{callback:()=>a(null)},e))})},w=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async(e,t)=>{let r=n.get(e);return r||(r=u.createRoot(e,t),n.set(e,r)),r},f={code:E,a:R,...x},g=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},a=y;return new Promise((p,l)=>{d(async()=>{const{MDXProvider:c}=await import("./index-DmW5CwA5.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:c})=>v(o.createElement(g,{showException:l,key:Math.random()},o.createElement(c,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>p())})},this.unmount=e=>{w(e)}}};export{S as DocsRenderer,f as defaultComponents};
