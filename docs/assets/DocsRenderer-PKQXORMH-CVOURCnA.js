const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-UHjglwKL.js","./index-CgzWCmjo.js","./index-BzRX9e_J.js","./iframe-CnzFZemG.js","./_commonjsHelpers-Cpj98o6Y.js","./index-D-8MO0q_.js","./index-DlJr0YTq.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-CnzFZemG.js";import{aj as d,ah as o,ai as i,ak as E,al as R,am as x,an as y}from"./index-BzRX9e_J.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DlJr0YTq.js";import"./index-DrFu-skq.js";var m={},u=d;m.createRoot=u.createRoot,m.hydrateRoot=u.hydrateRoot;var n=new Map,v=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},w=async(t,e,r)=>{let a=await _(e,r);return new Promise(s=>{a.render(o.createElement(v,{callback:()=>s(null)},t))})},D=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},_=async(t,e)=>{let r=n.get(t);return r||(r=m.createRoot(t,e),n.set(t,r)),r},f={code:E,a:R,...x},g=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:o.createElement(o.Fragment,null,e)}},T=class{constructor(){this.render=async(t,e,r)=>{let a={...f,...e==null?void 0:e.components},s=y;return new Promise((p,l)=>{h(async()=>{const{MDXProvider:c}=await import("./index-UHjglwKL.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:c})=>w(o.createElement(g,{showException:l,key:Math.random()},o.createElement(c,{components:a},o.createElement(s,{context:t,docsParameter:e}))),r)).then(()=>p())})},this.unmount=t=>{D(t)}}};export{T as DocsRenderer,f as defaultComponents};
