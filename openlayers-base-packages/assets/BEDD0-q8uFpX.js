var Y=Object.defineProperty;var H=(t,e,r)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var q=(t,e,r)=>(H(t,typeof e!="symbol"?e+"":e,r),r),O=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var f=(t,e,r)=>(O(t,e,"read from private field"),r?r.call(t):e.get(t)),p=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},w=(t,e,r,s)=>(O(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r);var A=(t,e,r)=>(O(t,e,"access private method"),r);import{c as Q,q as N,r as E,j as R}from"./BRUkeKPMUtGr.js";import{G as z,T as $}from"./BqHZNTy7UMMQ.js";import{a as W,b2 as X,bz as ee,Y as te,bA as k,a1 as Z,bE as re}from"./CuZfWsxpZb-X.js";import{a as se,b as ae,c as oe}from"./CVL8Edkgx5nO.js";const ne="next";function ce(t,e,r,s){const a=new URL(t),o=a.searchParams;return o.set("bbox",e.join(",")),o.set("bbox-crs",r),o.set("crs",r),o.set("f","json"),s?.(new URL(a))??a}function ie(t,e,r){const s=new URL(t),a=s.searchParams;return a.set("offset",e.toString()),a.set("limit",r.toString()),s.toString()}function _(t){if(!Array.isArray(t))return;const r=t.filter(s=>s.rel===ne);if(r.length===1)return r[0]?.href}async function V(t,e,r,s){let a=[];const o={headers:{Accept:"application/geo+json"},signal:s},n=await r.fetch(t,o);if(n.status!==200)throw new Error(`Failed to query features from service (status code ${n.status})`);const u=await n.json();e&&(a=e.readFeatures(u));const c=_(u.links);return{features:a,numberMatched:u.numberMatched,nextURL:c}}async function ue(t,e){const r={supportsOffsetStrategy:!1},s=new URL(t);s.searchParams.set("limit","1"),s.searchParams.set("f","json");const a=await e.fetch(s.toString(),{headers:{Accept:"application/geo+json"}});if(a.status!==200)throw new Error(`Failed to probe collection information (status code ${a.status})`);const o=await a.json(),n=_(o.links);if(!n)return r;const c=new URL(n).searchParams.has("offset");return r.supportsOffsetStrategy=c,r}async function le(t){const{fullURL:e,featureFormat:r,signal:s,addFeatures:a,queryFeatures:o}=t,n=t.limit,u=t.maxConcurrentRequests;let c=0,l=e;const m=[];let i;for(;l;){let h;i==null?h=u:h=Math.ceil((i-c)/n),h=Math.max(1,Math.min(h,u));const g=[];for(let L=0;L<h;++L)g.push(ie(e,c,n)),c+=n;const x=await G(g,r,t.httpService,s,a,o);m.push(...x.features),l=x.nextURL,x.numberMatched!=null&&(i=x.numberMatched)}return m}const F=Q("ogc-features:OgcFeatureSourceFactory"),fe=5e3,me=6;function he(t,e){return de(t,{httpService:e})}function de(t,e){const r=e.httpService,s=`${t.baseUrl}/collections/${t.collectionId}/items?`,a=new W({format:new z,strategy:X,attributions:t.attributions,...t.additionalOptions}),o=e.queryFeaturesParam??V,n=e.getCollectionInfosParam??ue,u=e.addFeaturesParam||function(i){F.debug(`Adding ${i.length} features`),a.addFeatures(i)};let c,l;const m=async(i,h,g,x,L)=>{l??=n(s,r);let v;try{v=await l}catch(b){F.error("Failed to retrieve collection information",b),L?.(),l=void 0;return}c?.abort("Extent changed"),c=new AbortController;const K=ce(s,i,t.crs,t.rewriteUrl);let C=t?.strategy||(v?.supportsOffsetStrategy?"offset":"next");C==="offset"&&!v?.supportsOffsetStrategy&&(C="next");try{const b=await pe(C,{fullURL:K.toString(),httpService:r,featureFormat:a.getFormat(),queryFeatures:o,addFeatures:u,limit:t.limit??fe,maxConcurrentRequests:t.maxConcurrentRequests??me,signal:c.signal,collectionInfos:v});x?.(b),F.debug("Finished loading features for extent:",i)}catch(b){N(b)?(F.debug("Query-Feature-Request aborted",b),a.removeLoadedExtent(i),L?.()):F.error("Failed to load features",b)}};return a.setLoader(m),a}function pe(t,e){switch(t){case"next":return ge(e);case"offset":return le(e)}}async function ge(t){const e=t.limit;let r=new URL(t.fullURL);r.searchParams.set("limit",e.toString());let s=[];do{const a=await G([r.toString()],t.featureFormat,t.httpService,t.signal,t.addFeatures,t.queryFeatures);if(s=s.concat(a.features),!a.nextURL)break;r=new URL(a.nextURL)}while(!0);return s}async function G(t,e,r,s,a,o=V){const n={nextURL:void 0,numberMatched:void 0,features:[]},u=t.map(async(c,l)=>{const m=l===t.length-1,i=await o(c,e,r,s);a(i.features),F.debug(`NextURL for index = ${l} (isLast = ${m}): ${i.nextURL||"No Next URL"}`),n.features.push(...i.features),m&&(n.numberMatched=i.numberMatched,n.nextURL=i.nextURL)});return await Promise.all(u),n}var d,U,y,S,M,T,j,D;class be{constructor(e,r){p(this,M);p(this,j);q(this,"label");p(this,d,void 0);p(this,U,void 0);p(this,y,void 0);p(this,S,void 0);this.label=e.label,w(this,d,e),w(this,U,r);const{baseUrl:s,params:a}=Re(e.baseUrl);w(this,y,s),w(this,S,a)}async search(e,{mapProjection:r,maxResults:s,signal:a}){const o=A(this,j,D).call(this,e,s),n=new z({dataProjection:"EPSG:4326",featureProjection:r});return(await we(f(this,U),o,a)).features.map(c=>A(this,M,T).call(this,c,n))}}d=new WeakMap,U=new WeakMap,y=new WeakMap,S=new WeakMap,M=new WeakSet,T=function(e,r){const s=f(this,d).renderLabel?.(e),a=e.properties[f(this,d).labelProperty],o=e.properties[f(this,d).searchProperty],n=s||(a!==void 0?String(a):o!==void 0?String(o):"");return{id:e.id??ee(),label:n,geometry:r.readGeometry(e.geometry),properties:e.properties}},j=new WeakSet,D=function(e,r){const s=new URL(`${f(this,y)}/collections/${f(this,d).collectionId}/items`);for(const[a,o]of f(this,S))s.searchParams.append(a,o);return s.searchParams.set(f(this,d).searchProperty,`*${e}*`),s.searchParams.set("limit",String(r)),s.searchParams.set("f","json"),f(this,d).rewriteUrl?.(new URL(s))??s};async function we(t,e,r){try{const s=await t.fetch(e,{signal:r,headers:{Accept:"application/json"}});if(!s.ok)throw new Error("Request failed with status "+s.status);return await s.json()}catch(s){throw N(s)?s:new Error("Failed to search on OGC API Features service",{cause:s})}}function Re(t){const e=new URL(t),r=new URLSearchParams(e.searchParams);return e.search="",{baseUrl:e.href.replace(/\/+$/,""),params:r}}var P;class Ie{constructor({references:e}){p(this,P,void 0);w(this,P,e.httpService)}createVectorSource(e){return he(e,f(this,P))}}P=new WeakMap;var I;class ve{constructor({references:e}){p(this,I,void 0);w(this,I,e.httpService)}createSearchSource(e){return new be(e,f(this,I))}}I=new WeakMap;const xe="@open-pioneer/map-navigation",B=te.bind(void 0,xe),Me=E.forwardRef(function(e,r){const{mapId:s}=e,{containerProps:a}=k("initial-extent",e),{map:o}=Z(s),n=B();function u(){const c=o?.initialExtent,l=o?.olMap;if(c&&l){const m=[c.xMin,c.yMin,c.xMax,c.yMax];l.getView().fit(m,{duration:200})}}return R.jsx($,{ref:r,label:n.formatMessage({id:"initial-extent.title"}),icon:R.jsx(se,{}),onClick:u,...a})}),je=E.forwardRef(function(e,r){return R.jsx(J,{zoomDirection:"in",ref:r,...e})}),Ee=E.forwardRef(function(e,r){return R.jsx(J,{zoomDirection:"out",ref:r,...e})}),J=E.forwardRef(function(e,r){const{mapId:s,zoomDirection:a}=e,{map:o}=Z(s),n=B(),{defaultClassName:u,buttonLabel:c,buttonIcon:l}=Fe(n,a),{containerProps:m}=k(re("zoom",u),e);function i(){const h=o?.olMap.getView();let g=h?.getZoom();h&&g!==void 0&&(a==="in"?++g:--g,h.animate({zoom:g,duration:200}))}return R.jsx($,{ref:r,label:c,icon:l,onClick:i,...m})});function Fe(t,e){switch(e){case"in":return{defaultClassName:"zoom-in",buttonLabel:t.formatMessage({id:"zoom-in.title"}),buttonIcon:R.jsx(oe,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:t.formatMessage({id:"zoom-out.title"}),buttonIcon:R.jsx(ae,{})}}}export{Me as I,ve as S,Ie as V,je as Z,Ee as a};
