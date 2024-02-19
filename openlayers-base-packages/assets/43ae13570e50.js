var pe=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var h=(t,e,n)=>(pe(t,e,"read from private field"),n?n.call(t):e.get(t)),f=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},y=(t,e,n,r)=>(pe(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var D=(t,e,n)=>(pe(t,e,"access private method"),n);import{i as ut,a as ct}from"./3c75eb6dca66.js";import{bw as lt,bl as dt,bx as ht,aQ as De,by as we,b0 as Te,bz as Fe,bA as S,b4 as gt,bB as ft,x as X,w as K,bC as Me,bD as mt,bE as yt,f as pt,p as Se,bF as Ve,au as Be,bG as je,bH as bt,bI as _t,m as Et,W as Ue,u as St,bJ as Rt,bn as At,bK as Lt,bq as Pe,al as It,bL as ae,bM as Ge,d as vt,a as he,bN as We,bO as Ce,bP as Ne,ab as xt,A as Ot,bQ as wt}from"./1b4899316e13.js";import{b as Ze}from"./c34b412998f5.js";import{E as Tt}from"./960f2965a833.js";import{G as T}from"./279b8b7adcbe.js";function qe(t,e){const n=(""+t).split("."),r=(""+e).split(".");for(let i=0;i<Math.max(n.length,r.length);i++){const s=parseInt(n[i]||"0",10),a=parseInt(r[i]||"0",10);if(s>a)return 1;if(a>s)return-1}return 0}function Le(t,e){return $e(t,e,[]).join("")}function $e(t,e,n){if(t.nodeType==Node.CDATA_SECTION_NODE||t.nodeType==Node.TEXT_NODE)e?n.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):n.push(t.nodeValue);else{let r;for(r=t.firstChild;r;r=r.nextSibling)$e(r,e,n)}return n}function Mt(t){return"documentElement"in t}function Pt(t){return new DOMParser().parseFromString(t,"application/xml")}function Ye(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);i!==void 0&&r[r.length-1].push(i)}}function R(t,e,n){return function(r,i){const s=t.call(n!==void 0?n:this,r,i);if(s!==void 0){const a=i[i.length-1],o=e!==void 0?e:r.localName;let c;o in a?c=a[o]:(c=[],a[o]=c),c.push(s)}}}function u(t,e,n){return function(r,i){const s=t.call(n!==void 0?n:this,r,i);if(s!==void 0){const a=i[i.length-1],o=e!==void 0?e:r.localName;a[o]=s}}}function p(t,e,n){n=n!==void 0?n:{};let r,i;for(r=0,i=t.length;r<i;++r)n[t[r]]=e;return n}function Ct(t,e,n,r){let i;for(i=e.firstElementChild;i;i=i.nextElementSibling){const s=t[i.namespaceURI];if(s!==void 0){const a=s[i.localName];a!==void 0&&a.call(r,i,n)}}}function m(t,e,n,r,i){return r.push(t),Ct(e,n,r,i),r.pop()}class Nt{read(e){if(!e)return null;if(typeof e=="string"){const n=Pt(e);return this.readFromDocument(n)}return Mt(e)?this.readFromDocument(e):this.readFromNode(e)}readFromDocument(e){for(let n=e.firstChild;n;n=n.nextSibling)if(n.nodeType==Node.ELEMENT_NODE)return this.readFromNode(n);return null}readFromNode(e){lt()}}const Ht=Nt;function V(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return e[1]!==void 0||!1}function F(t){const e=Le(t,!1);return L(e)}function L(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function be(t){const e=Le(t,!1);return oe(e)}function oe(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function d(t){return Le(t,!1).trim()}const Dt="http://www.w3.org/1999/xlink";function Ie(t){return t.getAttributeNS(Dt,"href")}const b=[null,"http://www.opengis.net/wms"],Ft=p(b,{Service:u(sn),Capability:u(rn)}),Vt=p(b,{Request:u(hn),Exception:u(cn),Layer:u(ln)});class Bt extends Ht{constructor(){super(),this.version=void 0}readFromNode(e){this.version=e.getAttribute("version").trim();const n=m({version:this.version},Ft,e,[]);return n||null}}const jt=p(b,{Name:u(d),Title:u(d),Abstract:u(d),KeywordList:u(Qe),OnlineResource:u(Ie),ContactInformation:u(an),Fees:u(d),AccessConstraints:u(d),LayerLimit:u(be),MaxWidth:u(be),MaxHeight:u(be)}),Ut=p(b,{ContactPersonPrimary:u(on),ContactPosition:u(d),ContactAddress:u(un),ContactVoiceTelephone:u(d),ContactFacsimileTelephone:u(d),ContactElectronicMailAddress:u(d)}),Gt=p(b,{ContactPerson:u(d),ContactOrganization:u(d)}),Wt=p(b,{AddressType:u(d),Address:u(d),City:u(d),StateOrProvince:u(d),PostCode:u(d),Country:u(d)}),Zt=p(b,{Format:Ye(d)}),Xe=p(b,{Name:u(d),Title:u(d),Abstract:u(d),KeywordList:u(Qe),CRS:R(d),EX_GeographicBoundingBox:u(nn),BoundingBox:R(tn),Dimension:R(dn),Attribution:u(en),AuthorityURL:R(mn),Identifier:R(d),MetadataURL:R(yn),DataURL:R(I),FeatureListURL:R(I),Style:R(pn),MinScaleDenominator:u(F),MaxScaleDenominator:u(F),Layer:R(Ke)}),qt=p(b,{Title:u(d),OnlineResource:u(Ie),LogoURL:u(ze)}),$t=p(b,{westBoundLongitude:u(F),eastBoundLongitude:u(F),southBoundLatitude:u(F),northBoundLatitude:u(F)}),Yt=p(b,{GetCapabilities:u(_e),GetMap:u(_e),GetFeatureInfo:u(_e)}),Xt=p(b,{Format:R(d),DCPType:R(gn)}),Kt=p(b,{HTTP:u(fn)}),zt=p(b,{Get:u(I),Post:u(I)}),Qt=p(b,{Name:u(d),Title:u(d),Abstract:u(d),LegendURL:R(ze),StyleSheetURL:u(I),StyleURL:u(I)}),kt=p(b,{Format:u(d),OnlineResource:u(Ie)}),Jt=p(b,{Keyword:Ye(d)});function en(t,e){return m({},qt,t,e)}function tn(t,e){const n=[L(t.getAttribute("minx")),L(t.getAttribute("miny")),L(t.getAttribute("maxx")),L(t.getAttribute("maxy"))],r=[L(t.getAttribute("resx")),L(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS"),extent:n,res:r}}function nn(t,e){const n=m({},$t,t,e);if(!n)return;const r=n.westBoundLongitude,i=n.southBoundLatitude,s=n.eastBoundLongitude,a=n.northBoundLatitude;if(!(r===void 0||i===void 0||s===void 0||a===void 0))return[r,i,s,a]}function rn(t,e){return m({},Vt,t,e)}function sn(t,e){return m({},jt,t,e)}function an(t,e){return m({},Ut,t,e)}function on(t,e){return m({},Gt,t,e)}function un(t,e){return m({},Wt,t,e)}function cn(t,e){return m([],Zt,t,e)}function ln(t,e){const n=m({},Xe,t,e);return n.Layer===void 0?Object.assign(n,Ke(t,e)):n}function Ke(t,e){const n=e[e.length-1],r=m({},Xe,t,e);if(!r)return;let i=V(t.getAttribute("queryable"));i===void 0&&(i=n.queryable),r.queryable=i!==void 0?i:!1;let s=oe(t.getAttribute("cascaded"));s===void 0&&(s=n.cascaded),r.cascaded=s;let a=V(t.getAttribute("opaque"));a===void 0&&(a=n.opaque),r.opaque=a!==void 0?a:!1;let o=V(t.getAttribute("noSubsets"));o===void 0&&(o=n.noSubsets),r.noSubsets=o!==void 0?o:!1;let c=L(t.getAttribute("fixedWidth"));c||(c=n.fixedWidth),r.fixedWidth=c;let l=L(t.getAttribute("fixedHeight"));return l||(l=n.fixedHeight),r.fixedHeight=l,["Style","CRS","AuthorityURL"].forEach(function(E){if(E in n){const v=r[E]||[];r[E]=v.concat(n[E])}}),["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"].forEach(function(E){if(!(E in r)){const v=n[E];r[E]=v}}),r}function dn(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:V(t.getAttribute("multipleValues")),nearestValue:V(t.getAttribute("nearestValue")),current:V(t.getAttribute("current")),values:d(t)}}function I(t,e){return m({},kt,t,e)}function hn(t,e){return m({},Yt,t,e)}function gn(t,e){return m({},Kt,t,e)}function fn(t,e){return m({},zt,t,e)}function _e(t,e){return m({},Xt,t,e)}function ze(t,e){const n=I(t,e);if(n){const r=[oe(t.getAttribute("width")),oe(t.getAttribute("height"))];return n.size=r,n}}function mn(t,e){const n=I(t,e);if(n)return n.name=t.getAttribute("name"),n}function yn(t,e){const n=I(t,e);if(n)return n.type=t.getAttribute("type"),n}function pn(t,e){return m({},Qt,t,e)}function Qe(t,e){return m([],Jt,t,e)}const bn=Bt;class _n extends dt{constructor(e){e=e||{},super(e)}}const En=_n;class Sn extends ht{constructor(e){super(e),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(e){const n=e.layerStatesArray[e.layerIndex],r=e.pixelRatio,i=e.viewState,s=i.resolution,a=this.getLayer().getSource(),o=e.viewHints;let c=e.extent;if(n.extent!==void 0&&(c=De(c,we(n.extent,i.projection))),!o[Te.ANIMATING]&&!o[Te.INTERACTING]&&!Fe(c))if(a){const l=i.projection,g=a.getImage(c,s,r,l);g&&(this.loadImage(g)?this.image_=g:g.getState()===S.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(e){const n=this.frameState;if(!n)return null;const r=this.getLayer(),i=gt(n.pixelToCoordinateTransform,e.slice()),s=r.getExtent();if(s&&!ft(s,i))return null;const a=this.image_.getExtent(),o=this.image_.getImage(),c=X(a),l=Math.floor(o.width*((i[0]-a[0])/c));if(l<0||l>=o.width)return null;const g=K(a),_=Math.floor(o.height*((a[3]-i[1])/g));return _<0||_>=o.height?null:this.getImageData(o,l,_)}renderFrame(e,n){const r=this.image_,i=r.getExtent(),s=r.getResolution(),[a,o]=Array.isArray(s)?s:[s,s],c=r.getPixelRatio(),l=e.layerStatesArray[e.layerIndex],g=e.pixelRatio,_=e.viewState,E=_.center,v=_.resolution,te=g*a/(v*c),ne=g*o/(v*c),M=e.extent,re=_.resolution,ie=_.rotation,W=Math.round(X(M)/re*g),Z=Math.round(K(M)/re*g);Me(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/g,1/g,ie,-W/2,-Z/2),mt(this.inversePixelTransform,this.pixelTransform);const ge=yt(this.pixelTransform);this.useContainer(n,ge,this.getBackground(e));const A=this.context,H=A.canvas;H.width!=W||H.height!=Z?(H.width=W,H.height=Z):this.containerReused||A.clearRect(0,0,W,Z);let fe=!1,me=!0;if(l.extent){const $=we(l.extent,_.projection);me=pt($,e.extent),fe=me&&!Se($,e.extent),fe&&this.clipUnrotated(A,e,$)}const q=r.getImage(),se=Me(this.tempTransform,W/2,Z/2,te,ne,0,c*(i[0]-E[0])/a,c*(E[1]-i[3])/o);this.renderedResolution=o*g/c;const ve=q.width*se[0],xe=q.height*se[3];if(this.getLayer().getSource().getInterpolate()||(A.imageSmoothingEnabled=!1),this.preRender(A,e),me&&ve>=.5&&xe>=.5){const $=se[4],ot=se[5],ye=l.opacity;let Oe;ye!==1&&(Oe=A.globalAlpha,A.globalAlpha=ye),A.drawImage(q,0,0,+q.width,+q.height,$,ot,ve,xe),ye!==1&&(A.globalAlpha=Oe)}return this.postRender(A,e),fe&&A.restore(),A.imageSmoothingEnabled=!0,ge!==H.style.transform&&(H.style.transform=ge),this.container}}const Rn=Sn;class An extends En{constructor(e){super(e)}createRenderer(){return new Rn(this)}getData(e){return super.getData(e)}}const Ln=An;function Re(t){return Array.isArray(t)?Math.min(...t):t}class In extends Ve{constructor(e,n,r,i,s,a,o){let c=e.getExtent();c&&e.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);let l=n.getExtent();l&&n.canWrapX()&&(l=l.slice(),l[0]=-1/0,l[2]=1/0);const g=l?De(r,l):r,_=Be(g),E=je(e,n,_,i),v=Rt,te=new bt(e,n,g,c,E*v,i),ne=te.calculateSourceExtent(),M=Fe(ne)?null:a(ne,E,s),re=M?S.IDLE:S.EMPTY,ie=M?M.getPixelRatio():1;super(r,i,ie,re),this.targetProj_=n,this.maxSourceExtent_=c,this.triangulation_=te,this.targetResolution_=i,this.targetExtent_=r,this.sourceImage_=M,this.sourcePixelRatio_=ie,this.interpolate_=o,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==S.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const e=this.sourceImage_.getState();if(e==S.LOADED){const n=X(this.targetExtent_)/this.targetResolution_,r=K(this.targetExtent_)/this.targetResolution_;this.canvas_=_t(n,r,this.sourcePixelRatio_,Re(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=e,this.changed()}load(){if(this.state==S.IDLE){this.state=S.LOADING,this.changed();const e=this.sourceImage_.getState();e==S.LOADED||e==S.ERROR?this.reproject_():(this.sourceListenerKey_=Et(this.sourceImage_,Ue.CHANGE,function(n){const r=this.sourceImage_.getState();(r==S.LOADED||r==S.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){St(this.sourceListenerKey_),this.sourceListenerKey_=null}}const vn=In,w=4,Ee={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class xn extends vt{constructor(e,n){super(e),this.image=n}}class On extends At{constructor(e){super({attributions:e.attributions,projection:e.projection,state:e.state,interpolate:e.interpolate!==void 0?e.interpolate:!0}),this.on,this.once,this.un,this.loader=e.loader||null,this.resolutions_=e.resolutions!==void 0?e.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=e.loader?e.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(e){this.resolutions_=e}findNearestResolution(e){const n=this.getResolutions();if(n){const r=Lt(n,e,0);e=n[r]}return e}getImage(e,n,r,i){const s=this.getProjection();if(!s||!i||Pe(s,i))return s&&(i=s),this.getImageInternal(e,n,r,i);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Pe(this.reprojectedImage_.getProjection(),i)&&this.reprojectedImage_.getResolution()==n&&It(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new vn(s,i,e,n,r,(a,o,c)=>this.getImageInternal(a,o,c,s),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(e,n,r,i){if(this.loader){const s=ke(e,n,r,1),a=this.findNearestResolution(n);if(this.image&&(this.static_||this.wantedProjection_===i&&(this.wantedExtent_&&Se(this.wantedExtent_,s)||Se(this.image.getExtent(),s))&&(this.wantedResolution_&&Re(this.wantedResolution_)===a||Re(this.image.getResolution())===a)))return this.image;this.wantedProjection_=i,this.wantedExtent_=s,this.wantedResolution_=a,this.image=new Ve(s,a,r,this.loader),this.image.addEventListener(Ue.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(e){const n=e.target;let r;switch(n.getState()){case S.LOADING:this.loading=!0,r=Ee.IMAGELOADSTART;break;case S.LOADED:this.loading=!1,r=Ee.IMAGELOADEND;break;case S.ERROR:this.loading=!1,r=Ee.IMAGELOADERROR;break;default:return}this.hasListener(r)&&this.dispatchEvent(new xn(r,n))}}function wn(t,e){t.getImage().src=e}function ke(t,e,n,r){const i=e/n,s=Be(t),a=ae(X(t)/i,w),o=ae(K(t)/i,w),c=ae((r-1)*a/2,w),l=a+2*c,g=ae((r-1)*o/2,w),_=o+2*g;return Ge(s,i,0,[l,_])}const Tn=On,Je="1.3.0",He=[101,101];function et(t,e,n,r,i){i.WIDTH=n[0],i.HEIGHT=n[1];const s=r.getAxisOrientation();let a;const o=qe(i.VERSION,"1.3")>=0;return i[o?"CRS":"SRS"]=r.getCode(),o&&s.substr(0,2)=="ne"?a=[e[1],e[0],e[3],e[2]]:a=e,i.BBOX=a.join(","),Ze(t,i)}function Mn(t,e,n,r,i,s,a){s=Object.assign({REQUEST:"GetMap"},s);const o=e/n,c=[Ne(X(t)/o,w),Ne(K(t)/o,w)];if(n!=1)switch(a){case"geoserver":const g=90*n+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+g:s.FORMAT_OPTIONS="dpi:"+g;break;case"mapserver":s.MAP_RESOLUTION=90*n;break;case"carmentaserver":case"qgis":s.DPI=90*n;break;default:throw new Error("Unknown `serverType` configured")}return et(i,t,c,r,s)}function tt(t,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:Je,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},t)}function Pn(t){const e=t.hidpi===void 0?!0:t.hidpi,n=he(t.projection||"EPSG:3857"),r=t.ratio||1.5,i=t.load||We;return(s,a,o)=>{s=ke(s,a,o,r),o!=1&&(!e||t.serverType===void 0)&&(o=1);const c=Mn(s,a,o,n,t.url,tt(t.params,"GetMap"),t.serverType),l=new Image;return t.crossOrigin!==null&&(l.crossOrigin=t.crossOrigin),i(l,c).then(g=>({image:g,extent:s,pixelRatio:o}))}}function Cn(t,e,n){if(t.url===void 0)return;const r=he(t.projection||"EPSG:3857"),i=Ge(e,n,0,He),s={QUERY_LAYERS:t.params.LAYERS,INFO_FORMAT:"application/json"};Object.assign(s,tt(t.params,"GetFeatureInfo"),t.params);const a=Ce((e[0]-i[0])/n,w),o=Ce((i[3]-e[1])/n,w),c=qe(s.VERSION,"1.3")>=0;return s[c?"I":"X"]=a,s[c?"J":"Y"]=o,et(t.url,i,He,r,s)}function Nn(t,e){if(t.url===void 0)return;const n={SERVICE:"WMS",VERSION:Je,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(t.params===void 0||t.params.LAYER===void 0){const r=t.params.LAYERS;if(!(!Array.isArray(r)||r.length===1))return;n.LAYER=r}if(e!==void 0){const r=he(t.projection||"EPSG:3857").getMetersPerUnit()||1,i=28e-5;n.SCALE=e*r/i}return Object.assign(n,t.params),Ze(t.url,n)}class Hn extends Tn{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:e.interpolate,projection:e.projection,resolutions:e.resolutions}),this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null,this.url_=e.url,this.imageLoadFunction_=e.imageLoadFunction!==void 0?e.imageLoadFunction:wn,this.params_=e.params,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.renderedRevision_=0,this.ratio_=e.ratio!==void 0?e.ratio:1.5,this.loaderProjection_=null}getFeatureInfoUrl(e,n,r,i){const s=he(r),a=this.getProjection();a&&a!==s&&(n=je(a,s,e,n),e=xt(e,s,a));const o={url:this.url_,params:{...this.params_,...i},projection:a||s};return Cn(o,e,n)}getLegendUrl(e,n){return Nn({url:this.url_,params:{...this.params_,...n}},e)}getParams(){return this.params_}getImageInternal(e,n,r,i){return this.url_===void 0?null:((!this.loader||this.loaderProjection_!==i)&&(this.loaderProjection_=i,this.loader=Pn({crossOrigin:this.crossOrigin_,params:this.params_,projection:i,serverType:this.serverType_,hidpi:this.hidpi_,url:this.url_,ratio:this.ratio_,load:(s,a)=>(this.image.setImage(s),this.imageLoadFunction_(this.image,a),We(s))})),super.getImageInternal(e,n,r,i))}getImageLoadFunction(){return this.imageLoadFunction_}getUrl(){return this.url_}setImageLoadFunction(e){this.imageLoadFunction_=e,this.changed()}setUrl(e){e!=this.url_&&(this.url_=e,this.loader=null,this.changed())}updateParams(e){Object.assign(this.params_,e),this.changed()}changed(){this.image=null,super.changed()}}const Dn=Hn;async function Fn(t,e,n){const r=await e.fetch(t,{signal:n});if(!r.ok)throw new Error("Request failed: "+r.status);return await r.text()}function Vn(t){let e=!1,n=setTimeout(()=>{e=!0,n=void 0,t()});return{reschedule(){return!e},cancel(){n&&clearTimeout(n)}}}var x;class nt extends Tt{constructor(n){super();f(this,x,void 0);y(this,x,n)}destroy(){for(const n of h(this,x))n.destroy();y(this,x,[])}getSublayers(n){return h(this,x).slice()}__getRawSublayers(){return h(this,x)}}x=new WeakMap;const Y=ct("map:WMSLayer");var B,P,j,U,C,z,ue,Q,Ae,ce,rt,le,it,de,st;class Bn extends Ot{constructor(n){const r=new Ln;super({...n,olLayer:r});f(this,Q);f(this,ce);f(this,le);f(this,de);f(this,B,void 0);f(this,P,void 0);f(this,j,void 0);f(this,U,void 0);f(this,C,void 0);f(this,z,void 0);f(this,ue,new AbortController);const i=new Dn({...n.sourceOptions,url:n.url,params:{...n.sourceOptions?.params},imageLoadFunction:(s,a)=>D(this,de,st).call(this,s,a).catch(o=>{Y.error(`Failed to load tile at '${a}'`,o)})});y(this,B,n.url),y(this,C,i),y(this,U,r),y(this,P,new nt(at(n.sublayers))),D(this,Q,Ae).call(this)}get legend(){}get url(){return h(this,B)}get __source(){return h(this,C)}get sublayers(){return h(this,P)}get capabilities(){return h(this,z)}__attach(n){super.__attach(n);for(const s of h(this,P).getSublayers())s.__attach(n,this,this);const r=[],i=(s,a)=>{for(const o of s){const c=o.sublayers.getSublayers();c.length?i(c,a):o.name&&a.push(o)}};D(this,le,it).call(this).then(s=>{const o=new bn().read(s);y(this,z,o),i(h(this,P).getSublayers(),r);for(const c of r){const l=Un(o,c.name);c.legend=l}}).catch(s=>{if(ut(s)){Y.error(`Layer ${this.id} has been destroyed before fetching the data`);return}Y.error(`Failed fetching WMS capabilities for Layer ${this.id}`,s)})}__updateSublayerVisibility(){h(this,j)?.reschedule()||y(this,j,Vn(()=>{try{D(this,Q,Ae).call(this),y(this,j,void 0)}catch(n){Y.error(`Failed to update sublayer visibility on WMS layer '${this.id}'.`,n)}}))}}B=new WeakMap,P=new WeakMap,j=new WeakMap,U=new WeakMap,C=new WeakMap,z=new WeakMap,ue=new WeakMap,Q=new WeakSet,Ae=function(){const n=D(this,ce,rt).call(this);h(this,C).updateParams({LAYERS:n});const r=n.length===0?null:h(this,C);h(this,U).getSource()!==r&&h(this,U).setSource(r)},ce=new WeakSet,rt=function(){const n=[],r=i=>{if(!i.visible)return;const s=i.sublayers.__getRawSublayers();if(s.length)for(const a of s)r(a);else i.name&&n.push(i.name)};for(const i of this.sublayers.__getRawSublayers())r(i);return n},le=new WeakSet,it=async function(){const n=this.map.__sharedDependencies.httpService,r=`${h(this,B)}?LANGUAGE=ger&SERVICE=WMS&REQUEST=GetCapabilities`;return Fn(r,n,h(this,ue).signal)},de=new WeakSet,st=async function(n,r){const i=this.map.__sharedDependencies.httpService,s=n.getImage(),a=await i.fetch(r);if(!a.ok)throw new Error(`Request failed with status ${a.status}.`);const o=await a.blob(),c=URL.createObjectURL(o),l=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",l),s.removeEventListener("error",l)};s.addEventListener("load",l),s.addEventListener("error",l),s.src=c};var N,O,k,J,ee,G;class jn extends wt{constructor(n){super(n);f(this,N,void 0);f(this,O,void 0);f(this,k,void 0);f(this,J,void 0);f(this,ee,void 0);f(this,G,void 0);y(this,k,n.name),y(this,G,n.visible??!0),y(this,ee,new nt(at(n.sublayers)))}get name(){return h(this,k)}get sublayers(){return h(this,ee)}get parent(){const n=h(this,N);if(!n)throw new Error(`WMS sublayer ${this.id} has not been attached to its parent yet.`);return n}get parentLayer(){const n=h(this,O);if(!n)throw new Error(`WMS sublayer ${this.id} has not been attached to its parent yet.`);return n}get legend(){return h(this,J)}set legend(n){y(this,J,n),this.__emitChangeEvent("changed:legend")}__attach(n,r,i){if(super.__attachToMap(n),h(this,N))throw new Error(`WMS sublayer '${this.id}' has already been attached to parent '${h(this,N).id}'`);if(y(this,N,i),h(this,O))throw new Error(`WMS sublayer '${this.id}' has already been attached to parent layer '${h(this,O).id}'`);y(this,O,r);for(const s of this.sublayers.__getRawSublayers())s.__attach(n,r,this)}get visible(){return h(this,G)}setVisible(n){this.visible!==n&&(y(this,G,n),h(this,O)?.__updateSublayerVisibility(),this.__emitChangeEvent("changed:visible"))}}N=new WeakMap,O=new WeakMap,k=new WeakMap,J=new WeakMap,ee=new WeakMap,G=new WeakMap;function at(t=[]){const e=[];try{for(const n of t)e.push(new jn(n));return e}catch(n){for(;e.length;)e.pop()?.destroy();throw new Error("Failed to construct sublayers.",{cause:n})}}function Un(t,e){const r=t?.Capability?.Layer;let i;const s=a=>{for(const o of a)if(o?.Name===e){const l=o.Style;if(!l||!l.length){Y.debug("No style in WMS layer capabilities - giving up.");return}i=l[0].LegendURL?.[0]?.OnlineResource}else o.Layer&&s(o.Layer)};return r&&s(r.Layer),i}const Xn=Bn;function Kn(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,56H60A20,20,0,0,0,40,76V228a12,12,0,0,0,19,9.76l49-35,49,35A12,12,0,0,0,176,228V76A20,20,0,0,0,156,56Zm-4,148.68-37-26.45a12,12,0,0,0-14,0L64,204.68V80h88ZM216,36V188a12,12,0,0,1-24,0V40H92a12,12,0,0,1,0-24H196A20,20,0,0,1,216,36Z"}}]})(t)}function zn(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,40a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,40ZM144,204H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM204,52V72a12,12,0,0,0,24,0V48a20,20,0,0,0-20-20H184a12,12,0,0,0,0,24Zm12,48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM72,28H48A20,20,0,0,0,28,48V72a12,12,0,0,0,24,0V52H72a12,12,0,0,0,0-24ZM240,204H228V192a12,12,0,0,0-24,0v12H192a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V228h12a12,12,0,0,0,0-24Z"}}]})(t)}function Qn(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z"}}]})(t)}function kn(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM70,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v67.57L204.53,110.1a14,14,0,0,0-19.8,0l-21.42,21.41L117.9,86.1a14,14,0,0,0-19.8,0L70,114.2ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H58v82a14,14,0,0,0,14,14H186Zm30-30H72a2,2,0,0,1-2-2V131.17l36.58-36.58a2,2,0,0,1,2.83,0l49.66,49.66a6,6,0,0,0,8.49,0l25.65-25.66a2,2,0,0,1,2.83,0l22,22V168A2,2,0,0,1,216,170ZM162,84a10,10,0,1,1,10,10A10,10,0,0,1,162,84Z"}}]})(t)}function Jn(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}}]})(t)}function er(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M233.91,74.79,181.22,22.1a14,14,0,0,0-19.8,0L22.09,161.41a14,14,0,0,0,0,19.8L74.78,233.9a14,14,0,0,0,19.8,0L233.91,94.59A14,14,0,0,0,233.91,74.79ZM225.42,86.1,86.1,225.41h0a2,2,0,0,1-2.83,0L30.58,172.73a2,2,0,0,1,0-2.83L64,136.48l27.76,27.76a6,6,0,1,0,8.48-8.48L72.48,128,96,104.48l27.76,27.76a6,6,0,0,0,8.48-8.48L104.48,96,128,72.49l27.76,27.75a6,6,0,0,0,8.48-8.48L136.49,64,169.9,30.59a2,2,0,0,1,2.83,0l52.69,52.68A2,2,0,0,1,225.42,86.1Z"}}]})(t)}function tr(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM82,24a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H88A6,6,0,0,1,82,24Z"}}]})(t)}function nr(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"}}]})(t)}export{nr as P,Xn as W,Ht as X,u as a,R as b,Ie as c,Ye as d,be as e,F as f,Fn as g,tr as h,Qn as i,Kn as j,Jn as k,kn as l,p as m,er as n,zn as o,m as p,d as r};
