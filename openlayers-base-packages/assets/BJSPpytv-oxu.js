var Y=Object.defineProperty;var H=(t,e,r)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var O=(t,e,r)=>(H(t,typeof e!="symbol"?e+"":e,r),r),C=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var f=(t,e,r)=>(C(t,e,"read from private field"),r?r.call(t):e.get(t)),p=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},w=(t,e,r,s)=>(C(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r);var A=(t,e,r)=>(C(t,e,"access private method"),r);import{c as Q,q,r as j,j as R}from"./DTCJ8zUXYCFK.js";import{G as N}from"./BdajxzNgAYk0.js";import{a as W,b3 as X,bA as ee,Y as te,bB as $,a2 as z,a1 as k,bF as re}from"./1mybnJ7phGO6.js";import{a as se,b as oe,c as ae}from"./CV2vCj2hnT-X.js";const ne="next";function ce(t,e,r){const s=new URL(t),o=s.searchParams;return o.set("bbox",e.join(",")),o.set("bbox-crs",r),o.set("crs",r),o.set("f","json"),s}function ie(t,e,r){const s=new URL(t),o=s.searchParams;return o.set("offset",e.toString()),o.set("limit",r.toString()),s.toString()}function Z(t){if(!Array.isArray(t))return;const r=t.filter(s=>s.rel===ne);if(r.length===1)return r[0]?.href}async function _(t,e,r,s){let o=[];const c={headers:{Accept:"application/geo+json"},signal:s},a=await r.fetch(t,c);if(a.status!==200)throw new Error(`Failed to query features from service (status code ${a.status})`);const u=await a.json();e&&(o=e.readFeatures(u));const n=Z(u.links);return{features:o,numberMatched:u.numberMatched,nextURL:n}}async function ue(t,e){const r={supportsOffsetStrategy:!1},s=new URL(t);s.searchParams.set("limit","1"),s.searchParams.set("f","json");const o=await e.fetch(s.toString(),{headers:{Accept:"application/geo+json"}});if(o.status!==200)throw new Error(`Failed to probe collection information (status code ${o.status})`);const c=await o.json(),a=Z(c.links);if(!a)return r;const n=new URL(a).searchParams.has("offset");return r.supportsOffsetStrategy=n,r}async function le(t){const{fullURL:e,featureFormat:r,signal:s,addFeatures:o,queryFeatures:c}=t,a=t.limit,u=t.maxConcurrentRequests;let n=0,l=e;const m=[];let i;for(;l;){let h;i==null?h=u:h=Math.ceil((i-n)/a),h=Math.max(1,Math.min(h,u));const g=[];for(let L=0;L<h;++L)g.push(ie(e,n,a)),n+=a;const x=await V(g,r,t.httpService,s,o,c);m.push(...x.features),l=x.nextURL,x.numberMatched!=null&&(i=x.numberMatched)}return m}const F=Q("ogc-features:OgcFeatureSourceFactory"),fe=5e3,me=6;function he(t,e){return de(t,{httpService:e})}function de(t,e){const r=e.httpService,s=`${t.baseUrl}/collections/${t.collectionId}/items?`,o=new W({format:new N,strategy:X,attributions:t.attributions,...t.additionalOptions}),c=e.queryFeaturesParam??_,a=e.getCollectionInfosParam??ue,u=e.addFeaturesParam||function(i){F.debug(`Adding ${i.length} features`),o.addFeatures(i)};let n,l;const m=async(i,h,g,x,L)=>{l??=a(s,r);let E;try{E=await l}catch(b){F.error("Failed to retrieve collection information",b),L?.(),l=void 0;return}n?.abort("Extent changed"),n=new AbortController;const J=ce(s,i,t.crs),K=E?.supportsOffsetStrategy?"offset":"next";try{const b=await pe(K,{fullURL:J.toString(),httpService:r,featureFormat:o.getFormat(),queryFeatures:c,addFeatures:u,limit:t.limit??fe,maxConcurrentRequests:t.maxConcurrentRequests??me,signal:n.signal,collectionInfos:E});x?.(b),F.debug("Finished loading features for extent:",i)}catch(b){q(b)?(F.debug("Query-Feature-Request aborted",b),o.removeLoadedExtent(i),L?.()):F.error("Failed to load features",b)}};return o.setLoader(m),o}function pe(t,e){switch(t){case"next":return ge(e);case"offset":return le(e)}}async function ge(t){const e=t.limit;let r=new URL(t.fullURL);r.searchParams.set("limit",e.toString());let s=[];do{const o=await V([r.toString()],t.featureFormat,t.httpService,t.signal,t.addFeatures,t.queryFeatures);if(s=s.concat(o.features),!o.nextURL)break;r=new URL(o.nextURL)}while(!0);return s}async function V(t,e,r,s,o,c=_){const a={nextURL:void 0,numberMatched:void 0,features:[]},u=t.map(async(n,l)=>{const m=l===t.length-1,i=await c(n,e,r,s);o(i.features),F.debug(`NextURL for index = ${l} (isLast = ${m}): ${i.nextURL||"No Next URL"}`),a.features.push(...i.features),m&&(a.numberMatched=i.numberMatched,a.nextURL=i.nextURL)});return await Promise.all(u),a}var d,U,y,S,v,G,M,D;class be{constructor(e,r){p(this,v);p(this,M);O(this,"label");p(this,d,void 0);p(this,U,void 0);p(this,y,void 0);p(this,S,void 0);this.label=e.label,w(this,d,e),w(this,U,r);const{baseUrl:s,params:o}=Re(e.baseUrl);w(this,y,s),w(this,S,o)}async search(e,{mapProjection:r,maxResults:s,signal:o}){const c=A(this,M,D).call(this,e,s),a=new N({dataProjection:"EPSG:4326",featureProjection:r});return(await we(f(this,U),c,o)).features.map(n=>A(this,v,G).call(this,n,a))}}d=new WeakMap,U=new WeakMap,y=new WeakMap,S=new WeakMap,v=new WeakSet,G=function(e,r){const s=f(this,d).renderLabel?.(e),o=e.properties[f(this,d).labelProperty],c=e.properties[f(this,d).searchProperty],a=s||(o!==void 0?String(o):c!==void 0?String(c):"");return{id:e.id??ee(),label:a,geometry:r.readGeometry(e.geometry),properties:e.properties}},M=new WeakSet,D=function(e,r){const s=new URL(`${f(this,y)}/collections/${f(this,d).collectionId}/items`);for(const[o,c]of f(this,S))s.searchParams.append(o,c);return s.searchParams.set(f(this,d).searchProperty,`*${e}*`),s.searchParams.set("limit",String(r)),s.searchParams.set("f","json"),f(this,d).rewriteUrl?.(new URL(s))??s};async function we(t,e,r){try{const s=await t.fetch(e,{signal:r,headers:{Accept:"application/json"}});if(!s.ok)throw new Error("Request failed with status "+s.status);return await s.json()}catch(s){throw q(s)?s:new Error("Failed to search on OGC API Features service",{cause:s})}}function Re(t){const e=new URL(t),r=new URLSearchParams(e.searchParams);return e.search="",{baseUrl:e.href.replace(/\/+$/,""),params:r}}var P;class Ie{constructor({references:e}){p(this,P,void 0);w(this,P,e.httpService)}createVectorSource(e){return he(e,f(this,P))}}P=new WeakMap;var I;class ve{constructor({references:e}){p(this,I,void 0);w(this,I,e.httpService)}createSearchSource(e){return new be(e,f(this,I))}}I=new WeakMap;const xe="@open-pioneer/map-navigation",T=te.bind(void 0,xe),Me=j.forwardRef(function(e,r){const{mapId:s}=e,{containerProps:o}=$("initial-extent",e),{map:c}=z(s),a=T();function u(){const n=c?.initialExtent,l=c?.olMap;if(n&&l){const m=[n.xMin,n.yMin,n.xMax,n.yMax];l.getView().fit(m,{duration:200})}}return R.jsx(k,{ref:r,label:a.formatMessage({id:"initial-extent.title"}),icon:R.jsx(se,{}),onClick:u,...o})}),je=j.forwardRef(function(e,r){return R.jsx(B,{zoomDirection:"in",ref:r,...e})}),Ee=j.forwardRef(function(e,r){return R.jsx(B,{zoomDirection:"out",ref:r,...e})}),B=j.forwardRef(function(e,r){const{mapId:s,zoomDirection:o}=e,{map:c}=z(s),a=T(),{defaultClassName:u,buttonLabel:n,buttonIcon:l}=Fe(a,o),{containerProps:m}=$(re("zoom",u),e);function i(){const h=c?.olMap.getView();let g=h?.getZoom();h&&g!==void 0&&(o==="in"?++g:--g,h.animate({zoom:g,duration:200}))}return R.jsx(k,{ref:r,label:n,icon:l,onClick:i,...m})});function Fe(t,e){switch(e){case"in":return{defaultClassName:"zoom-in",buttonLabel:t.formatMessage({id:"zoom-in.title"}),buttonIcon:R.jsx(ae,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:t.formatMessage({id:"zoom-out.title"}),buttonIcon:R.jsx(oe,{})}}}export{Me as I,ve as S,Ie as V,je as Z,Ee as a};
