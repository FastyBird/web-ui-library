import{j as e}from"./jsx-runtime-Cwi7KSeA.js";import{u as i}from"./index-BtdslvUy.js";import{M as n,C as t}from"./index-BwNQZ7yn.js";import{D as c,B as l,N as o,C as h,a,b as x,W as j}from"./fb-drawer.stories-BO2k15Z1.js";import"./iframe-C6g2oLdd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./web-ui-components.es-nLJZCm2K.js";import"./vue.esm-bundler-DEpQrfwO.js";import"./web-ui-constants.es-Bfh99ZXh.js";import"./index-Dg9quNvz.js";function s(d){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:c}),`
`,e.jsx(r.h1,{id:"drawer",children:"Drawer"}),`
`,e.jsx(r.p,{children:`In some cases, Modal might not fully meet our needs, such as when dealing with large forms or displaying content like terms and conditions. The Drawer
component has a similar API to Modal but offers a different user experience.`}),`
`,e.jsx(r.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r.p,{children:"Introducing a temporary drawer that can be called from multiple directions."}),`
`,e.jsxs(r.p,{children:["To control the visibility of the Drawer, you must set the ",e.jsx(r.code,{children:"model-value"}),` property, similar to how it's done with Modal. This property accepts a boolean value.
The Drawer consists of three parts: `,e.jsx(r.code,{children:"title"}),", ",e.jsx(r.code,{children:"body"}),", and ",e.jsx(r.code,{children:"footer"}),". The title can be defined using a named slot or the ",e.jsx(r.code,{children:"title"}),` attribute, which defaults
to an empty string. The body contains the main content of the Drawer.`]}),`
`,e.jsxs(r.p,{children:[`By default, the Drawer expands from the right corner to the left, occupying 30% of the browser window. You can customize this behavior by adjusting
the `,e.jsx(r.code,{children:"direction"})," and ",e.jsx(r.code,{children:"size"})," attributes. Additionally, this example demonstrates how to use the ",e.jsx(r.code,{children:"before-close"})," API. For more details, refer to the Attribute section."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(r.h2,{id:"no-title",children:"No Title"}),`
`,e.jsxs(r.p,{children:["If you want to remove the title from the drawer, you can set the ",e.jsx(r.code,{children:"show-header"})," property to ",e.jsx(r.code,{children:"false"}),`. This will create more space on the screen for
the content of the drawer. However, if you want to ensure accessibility, it's recommended to set the `,e.jsx(r.code,{children:"title"})," attribute."]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(r.h2,{id:"customized-content",children:"Customized Content"}),`
`,e.jsx(r.p,{children:"Similar to Modal, Drawer can be utilized to showcase a wide range of interactions."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(r.h2,{id:"customized-header",children:"Customized Header"}),`
`,e.jsxs(r.p,{children:["You can utilize the ",e.jsx(r.code,{children:"header"})," slot to personalize the section where the title is shown. For accessibility purposes, it's recommended to use the ",e.jsx(r.code,{children:"title"}),`
attribute along with this slot. Alternatively, you can specify the element to be read as the drawer title using the `,e.jsx(r.code,{children:"titleId"})," slot property."]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(r.h2,{id:"nested-drawer",children:"Nested Drawer"}),`
`,e.jsx(r.p,{children:"You can also create multiple layers of Drawers, similar to Modals."}),`
`,e.jsxs(r.p,{children:["To have multiple Drawers in different layers, ensure to set the ",e.jsx(r.code,{children:"append-to-body"})," property to ",e.jsx(r.code,{children:"true"}),"."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(r.h2,{id:"with-description",children:"With Description"}),`
`,e.jsx(r.p,{children:"The Drawer header can be enhanced with additional descriptions, which is useful for more complex scenarios requiring extra information."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"drawer-api",children:"Drawer API"}),`
`,e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(r.h3,{id:"attributes",children:"Attributes"}),e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Description"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"model-value / v-model"}),e.jsx(r.td,{children:"Should Drawer be displayed"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"append-to-body"}),e.jsxs(r.td,{children:["Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to ",e.jsx(r.strong,{children:"true"})]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"lock-scroll"}),e.jsx(r.td,{children:"whether scroll of body is disabled while Drawer is displayed"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"before-close"}),e.jsx(r.td,{children:"If set, closing procedure will be halted"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"(done: (cancel?: boolean) => void) => void"})}),e.jsx(r.td,{children:"—"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"close-on-click-backdrop"}),e.jsx(r.td,{children:"whether the Drawer can be closed by clicking the mask"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"close-on-press-escape"}),e.jsx(r.td,{children:"Indicates whether Drawer can be closed by pressing ESC"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"open-delay"}),e.jsx(r.td,{children:"Time(milliseconds) before open"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"0"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"close-delay"}),e.jsx(r.td,{children:"Time(milliseconds) before close"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"0"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"destroy-on-close"}),e.jsx(r.td,{children:"Indicates whether children should be destroyed after Drawer closed"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"backdrop"}),e.jsx(r.td,{children:"Should show shadowing layer"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"custom-class"}),e.jsx(r.td,{children:"custom class names for backdrop"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"direction"}),e.jsx(r.td,{children:"Drawer's opening direction"}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"rtl"})," | ",e.jsx(r.code,{children:"ltr"})," | ",e.jsx(r.code,{children:"ttb"})," | ",e.jsx(r.code,{children:"btt"})," | ",e.jsx(r.code,{children:"rtl"})]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"rtl"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"show-close"}),e.jsx(r.td,{children:"Should show close button at the top right of Drawer"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"size"}),e.jsxs(r.td,{children:["Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is ",e.jsx(r.code,{children:"number"})," type, it describes the size by unit of pixels; when size is ",e.jsx(r.code,{children:"string"})," type, it should be used with ",e.jsx(r.code,{children:"x%"})," notation, other wise it will be interpreted to pixel unit"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"number"})," | ",e.jsx(r.code,{children:"string"})]}),e.jsx(r.td,{children:"30%"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"title"}),e.jsx(r.td,{children:"Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"show-header"}),e.jsxs(r.td,{children:["Flag that controls the header section's existence, default to true, when withHeader set to false, both ",e.jsx(r.code,{children:"title attribute"})," and ",e.jsx(r.code,{children:"title slot"})," won't work"]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"true"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"backdrop-class"}),e.jsx(r.td,{children:"Extra class names for shadowing layer"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"z-index"}),e.jsx(r.td,{children:"set z-index"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"—"})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["header-aria-level ",e.jsx(r.code,{children:"a11y"})]}),e.jsxs(r.td,{children:["header's ",e.jsx(r.code,{children:"aria-level"})," attribute"]}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"2"})]})]})]}),e.jsx(r.h3,{id:"events",children:"Events"}),e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Description"}),e.jsx(r.th,{children:"Type"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"open"}),e.jsx(r.td,{children:"Triggered before Drawer opening animation begins"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"opened"}),e.jsx(r.td,{children:"Triggered after Drawer opening animation ended"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"close"}),e.jsx(r.td,{children:"Triggered before Drawer closing animation begins"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"closed"}),e.jsx(r.td,{children:"Triggered after Drawer closing animation ended"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"open-auto-focus"}),e.jsx(r.td,{children:"triggers after Drawer opens and content focused"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"close-auto-focus"}),e.jsx(r.td,{children:"triggers after Drawer closed and content focused"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"() => void"})})]})]})]}),e.jsx(r.h3,{id:"slots",children:"Slots"}),e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"content of drawer"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"header"}),e.jsx(r.td,{children:"content of the drawer header for replacing whole drawer header content with custom one"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"footer"}),e.jsx(r.td,{children:"content of the drawer footer for replacing whole drawer footer content with custom one"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"content"}),e.jsx(r.td,{children:"content of the drawer footer for replacing whole drawer content with custom one"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"title"}),e.jsx(r.td,{children:"title of the drawer"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"subtitle"}),e.jsx(r.td,{children:"subtitle of the drawer"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"icon"}),e.jsx(r.td,{children:"drawer header icon"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"left-button"}),e.jsxs(r.td,{children:["slot for using custom left button used as ",e.jsx(r.code,{children:"Close"})," action"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"right-button"}),e.jsxs(r.td,{children:["slot for using custom right button used as ",e.jsx(r.code,{children:"Ok"})," action"]})]})]})]}),e.jsx(r.h3,{id:"exposes",children:"Exposes"}),e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"handleClose"}),e.jsxs(r.td,{children:["In order to close Drawer, this method will call ",e.jsx(r.code,{children:"before-close"}),"."]})]})})]})]})]})}function I(d={}){const{wrapper:r}={...i(),...d.components};return r?e.jsx(r,{...d,children:e.jsx(s,{...d})}):s(d)}export{I as default};
