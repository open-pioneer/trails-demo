import{f as R,r as l,j as e,B as y,a3 as B,n as _,F as S,C as T,s as N}from"./a804c6ae25fd.js";import{t as F}from"./86b0ef7fa05f.js";import{S as q,T as H,O as D,a2 as V,a1 as Z,a3 as $,aa as v,q as x,a5 as W,ac as G,ad as U,ao as K,ap as J}from"./889696c2fca9.js";import{_ as Q}from"./a419295615be.js";import{c as P}from"./14997e1cc74a.js";import{S as z}from"./a80ff04620c9.js";import{e as X}from"./4533599bd8ef.js";function Y(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var ee=Y(),w=R((r,n)=>{const{icon:t,children:p,isRound:s,"aria-label":c,...i}=r,a=t||p,u=l.isValidElement(a)?l.cloneElement(a,{"aria-hidden":!0,focusable:!1}):null;return e.jsx(y,{padding:"0",borderRadius:s?"full":void 0,ref:n,"aria-label":c,...i,children:u})});w.displayName="IconButton";var oe=ee?l.useLayoutEffect:l.useEffect;function I(r,n=[]){const t=l.useRef(r);return oe(()=>{t.current=r}),l.useCallback((...p)=>{var s;return(s=t.current)==null?void 0:s.call(t,...p)},n)}function re(r,n){const t=l.useId();return l.useMemo(()=>r||[n,t].filter(Boolean).join("-"),[r,n,t])}function te(r,n){const t=r!==void 0;return[t,t&&typeof r<"u"?r:n]}function M(r={}){const{onClose:n,onOpen:t,isOpen:p,id:s}=r,c=I(t),i=I(n),[a,u]=l.useState(r.defaultIsOpen||!1),[d,b]=te(p,a),m=re(s,"disclosure"),g=l.useCallback(()=>{d||u(!1),i?.()},[d,i]),h=l.useCallback(()=>{d||u(!0),c?.()},[d,c]),f=l.useCallback(()=>{(b?g:h)()},[b,h,g]);return{isOpen:!!b,onOpen:h,onClose:g,onToggle:f,isControlled:d,getButtonProps:(o={})=>({...o,"aria-expanded":b,"aria-controls":m,onClick:B(o.onClick,f)}),getDisclosureProps:(o={})=>({...o,hidden:!b,id:m})}}var ae=P({displayName:"ArrowLeftIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),e.jsx("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})}),ne=P({displayName:"ArrowRightIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),e.jsx("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})});const k="main";class le{mapId=k;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new q({title:"OSM",isBaseLayer:!0,olLayer:new H({source:new D})})]}}}const ie={"sidebar-app":{name:"sidebar-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:le,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/experimental-layout-sidebar":{name:"@open-pioneer/experimental-layout-sidebar",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:V,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:Z,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},se=`.layout-sidebar{z-index:99}:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.layout-sidebar{height:100%;position:absolute;top:0}.layout-sidebar[data-theme=light]{background-color:var(--chakra-colors-whiteAlpha-700)}.layout-sidebar[data-theme=dark]{background-color:var(--chakra-colors-blackAlpha-700)}.layout-sidebar .layout-sidebar-main{transition:width .3s ease-out 0s;border-right:1px solid var(--chakra-colors-chakra-border-color)}.layout-sidebar .layout-sidebar-content{overflow:auto;transition:width .3s ease-out 0s}.layout-sidebar .layout-sidebar-content .content-section .content-header{font-size:1.5em;background-color:var(--chakra-colors-blackAlpha-500);padding:.5rem 1rem}.layout-sidebar .layout-sidebar-content .content-section .content-body{padding:1rem}
`,ce=["en"];function pe(r){switch(r){case"en":return Q(()=>import("./ddb5877018b4.js"),[],import.meta.url).then(n=>n.default)}throw new Error(`Unsupported locale: '${r}'`)}const de=_(se),ue=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:pe,locales:ce,packages:ie,styles:de},Symbol.toStringTag,{value:"Module"})),be="@open-pioneer/experimental-layout-sidebar",me=$.bind(void 0,be),A=60,E=180,O=300;function ge({defaultExpanded:r,expandedChanged:n,sidebarWidthChanged:t,items:p}){const s=me(),[c,{toggle:i}]=he(p),{isOpen:a,onToggle:u}=M({defaultIsOpen:r,onOpen(){n?.(!0)},onClose(){n?.(!1)}}),{isOpen:d,onToggle:b}=M(),m=c.size>0;l.useEffect(()=>{m&&!d&&b(),!m&&d&&b()},[m]),l.useEffect(()=>{if(t){let o=A;a&&(o=E),d&&(o+=O),t(o)}},[a,d]);const g=p?.map((o,L)=>{const C="white",j=c.has(o.id)?"outline":"ghost";return e.jsx("div",{children:a?e.jsx(y,{leftIcon:o.icon,variant:j,colorScheme:C,onClick:()=>i(o),children:o.label},o.id):e.jsx(S,{hasArrow:!0,label:o.label,placement:"right",children:e.jsx(w,{"aria-label":o.label,variant:j,colorScheme:C,icon:o.icon,onClick:()=>i(o)})},o.id)},L)}),h=p?.filter(o=>c.has(o.id)).map(o=>e.jsxs("div",{className:"content-section",children:[e.jsxs(v,{className:"content-header",alignItems:"center",children:[e.jsx(x,{children:o.label}),e.jsx(z,{}),e.jsx(T,{onClick:()=>i(o)})]}),e.jsx("div",{className:"content-body",children:o.content})]},o.id)),f=s.formatMessage({id:a?"toggle.collapse":"toggle.expand"});return e.jsxs(v,{className:"layout-sidebar",children:[e.jsxs(x,{className:"layout-sidebar-main",display:"flex",flexDirection:"column",width:a?`${E}px`:`${A}px`,padding:"10px",gap:"10px",children:[g,e.jsx(z,{}),e.jsx(S,{label:f,hasArrow:!0,placement:"right",children:e.jsx(w,{"aria-label":f,variant:"ghost",icon:a?e.jsx(ae,{}):e.jsx(ne,{}),onClick:u})})]}),e.jsx(x,{className:"layout-sidebar-content",width:d?`${O}px`:"0px",children:h})]})}function he(r){const[n,t]=l.useReducer((s,c)=>{switch(c.type){case"toggle":{const i=new Set(s);return i.has(c.id)?i.delete(c.id):i.add(c.id),i}case"retain":{const i=new Set(c.ids),a=new Set(s);for(const u of a)i.has(u)||a.delete(u);return a}}},void 0,()=>new Set),p=l.useCallback(s=>{t({type:"toggle",id:s.id})},[t]);return l.useEffect(()=>{t({type:"retain",ids:r?.map(s=>s.id)??[]})},[r,t]),[n,{toggle:p}]}const fe=[796987,5827477,796987,5827477];function xe(){const[r,n]=l.useState(),[t,p]=l.useState(!0),s=W(k),c=()=>{const a=s.map?.olMap;a&&a?.getView().fit(fe,{maxZoom:13})},i=[{id:"sandbox",icon:e.jsx(X,{}),label:"Sandbox",content:e.jsx(y,{onClick:c,children:"Center Berlin"})}];return e.jsx(v,{height:"100%",direction:"column",overflow:"hidden",children:e.jsx(G,{title:e.jsx(x,{textAlign:"center",py:1,px:1,children:e.jsx(U,{size:"md",children:"Sidebar sample"})}),children:e.jsxs(v,{flex:"1",direction:"column",position:"relative",children:[e.jsx(ge,{defaultExpanded:t,expandedChanged:a=>p(a),sidebarWidthChanged:a=>n({left:a}),items:i}),e.jsx(K,{mapId:k,viewPadding:r,viewPaddingChangeBehavior:"preserve-extent",children:e.jsx(J,{position:"top-left",horizontalGap:10,verticalGap:10,children:e.jsx(x,{backgroundColor:"whiteAlpha.800",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:"This is a sample for a sidebar component."})})})]})})})}const ve=N({component:xe,theme:F,appMetadata:ue});customElements.define("sidebar-app",ve);
