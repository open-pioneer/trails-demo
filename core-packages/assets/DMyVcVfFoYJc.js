import{ab as n,I as l,ac as u,ad as d,ae as p,r as m}from"./D2oXSZAF25Nh.js";function g(r,a){const s=r??"bottom";return{"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[s]?.[a]??s}function f(r,a){const s=o=>({...a,...o,position:g(o?.position??a?.position,r)}),t=o=>{const e=s(o),c=u(e);return n.notify(c,e)};return t.update=(o,e)=>{n.update(o,s(e))},t.promise=(o,e)=>{const c=t({...e.loading,status:"loading",duration:null});o.then(i=>t.update(c,{status:"success",duration:5e3,...l(e.success,i)})).catch(i=>t.update(c,{status:"error",duration:5e3,...l(e.error,i)}))},t.closeAll=n.closeAll,t.close=n.close,t.isActive=n.isActive,t}function h(r){const{theme:a}=d(),s=p();return m.useMemo(()=>f(a.direction,{...s,...r}),[r,a.direction,s])}export{h as u};
