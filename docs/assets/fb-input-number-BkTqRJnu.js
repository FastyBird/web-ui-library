import{j as e}from"./jsx-runtime-Cwi7KSeA.js";import{u as t}from"./index-BtdslvUy.js";import{M as r,C as s}from"./index-BwNQZ7yn.js";import{I as l,B as c,D as h,S as o,a as x,P as j,b as a,C as u}from"./fb-input-number.stories-DLzdlgwk.js";import"./iframe-C6g2oLdd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-DEpQrfwO.js";import"./web-ui-components.es-nLJZCm2K.js";import"./web-ui-constants.es-Bfh99ZXh.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"input-number",children:"Input Number"}),`
`,e.jsxs(n.p,{children:["Allow users to input numerical values within a customizable range using the ",e.jsx(n.code,{children:"min"})," and ",e.jsx(n.code,{children:"max"}),` properties of the input component. These properties define
the minimum and maximum values allowed for input, enabling users to specify values within the specified range.`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"TIP:"}),`
If an invalid string is entered into the input box, the input value will emit `,e.jsx(n.code,{children:"NaN"})," to the upper layer as a result of the error."]}),`
`]}),`
`,e.jsx(s,{withToolbar:!0,of:c}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"disabled"})," property accepts a ",e.jsx(n.code,{children:"boolean"}),". If set to ",e.jsx(n.code,{children:"true"}),", the component is disabled. To control the value within a range, you can use the ",e.jsx(n.code,{children:"min"}),`
property to set the minimum value and `,e.jsx(n.code,{children:"max"})," to set the maximum value. By default, the minimum value is ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(s,{withToolbar:!0,of:h}),`
`,e.jsx(n.h2,{id:"steps",children:"Steps"}),`
`,e.jsxs(n.p,{children:["You can define incremental steps by adding the ",e.jsx(n.code,{children:"step"})," property and setting the desired step value."]}),`
`,e.jsx(s,{withToolbar:!0,of:o}),`
`,e.jsx(n.h2,{id:"step-strictly",children:"Step Strictly"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"step-strictly"})," property accepts a boolean value. When set to true, the input value can only be a multiple of the step value."]}),`
`,e.jsx(s,{withToolbar:!0,of:x}),`
`,e.jsx(n.h2,{id:"precision",children:"Precision"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"precision"})," property allows you to specify the precision of the input value."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"TIP:"}),`
The value of precision must be a non-negative integer and should not be less than the number of decimal places in the step.`]}),`
`]}),`
`,e.jsx(s,{withToolbar:!0,of:j}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"size"})," property to adjust the size of the input field. Possible values include ",e.jsx(n.code,{children:"large"})," or ",e.jsx(n.code,{children:"small"}),"."]}),`
`,e.jsx(s,{withToolbar:!0,of:a}),`
`,e.jsx(n.h2,{id:"controls-position",children:"Controls Position"}),`
`,e.jsxs(n.p,{children:["You can specify the position of control buttons using the ",e.jsx(n.code,{children:"controls-position"})," property."]}),`
`,e.jsx(s,{withToolbar:!0,of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"input-number-api",children:"Input Number API"}),`
`,e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(n.h3,{id:"attributes",children:"Attributes"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"model-value / v-model"}),e.jsx(n.td,{children:"binding value"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"min"}),e.jsx(n.td,{children:"the minimum allowed value"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"-Infinity"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"max"}),e.jsx(n.td,{children:"the maximum allowed value"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Infinity"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"step"}),e.jsx(n.td,{children:"incremental step"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"step-strictly"}),e.jsx(n.td,{children:"whether input value can only be multiple of step"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"precision"}),e.jsx(n.td,{children:"precision of input value"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"size"}),e.jsx(n.td,{children:"size of the component"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"large"})," | ",e.jsx(n.code,{children:"default"})," | ",e.jsx(n.code,{children:"small"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"default"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"readonly ^(2.2.16)"}),e.jsxs(n.td,{children:["same as ",e.jsx(n.code,{children:"readonly"})," in native input"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"disabled"}),e.jsx(n.td,{children:"whether the component is disabled"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"controls"}),e.jsx(n.td,{children:"whether to enable the control buttons"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"true"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"controls-position"}),e.jsx(n.td,{children:"position of the control buttons"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"left"})," | ",e.jsx(n.code,{children:"right"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"left"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"name"}),e.jsxs(n.td,{children:["same as ",e.jsx(n.code,{children:"name"})," in native input"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"label"}),e.jsxs(n.td,{children:["same as ",e.jsx(n.code,{children:"label"})," in native input"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"placeholder"}),e.jsxs(n.td,{children:["same as ",e.jsx(n.code,{children:"placeholder"})," in native input"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsxs(n.td,{children:["same as ",e.jsx(n.code,{children:"id"})," in native input"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"value-on-clear"}),e.jsx(n.td,{children:"value should be set when input box is cleared"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"number"})," | ",e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"(min | max)"})]}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"validate-event"}),e.jsx(n.td,{children:"whether to trigger form validation"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"true"})]})]})]}),e.jsx(n.h3,{id:"events",children:"Events"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"change"}),e.jsx(n.td,{children:"triggers when the value changes"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(currentValue: number | undefined, oldValue: number | undefined) => void"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"blur"}),e.jsx(n.td,{children:"triggers when Input blurs"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(event: FocusEvent) => void"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"focus"}),e.jsx(n.td,{children:"triggers when Input focuses"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(event: FocusEvent) => void"})})]})]})]}),e.jsx(n.h3,{id:"exposes",children:"Exposes"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"focus"}),e.jsx(n.td,{children:"get focus the input component"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"blur"}),e.jsx(n.td,{children:"remove focus the input component"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})})]})]})]})]})]})}function z(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{z as default};
