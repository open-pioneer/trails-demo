var pe=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var h=(n,e,t)=>(pe(n,e,"read from private field"),t?t.call(n):e.get(n)),f=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},y=(n,e,t,r)=>(pe(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);var H=(n,e,t)=>(pe(n,e,"access private method"),t);import{i as ut,a as ct}from"./9e25cf6915c1.js";import{bu as lt,bj as dt,bv as ht,aO as He,bw as Te,a_ as we,bx as Fe,by as S,b2 as gt,bz as ft,bA as X,bB as K,bC as Pe,bD as mt,bE as yt,f as pt,p as Se,bF as Ve,aA as je,bG as Be,bH as bt,bI as _t,m as Et,Q as Ue,u as St,bJ as Rt,bl as At,bK as Lt,bo as Me,an as It,bL as ae,bM as Ge,d as vt,a as he,bN as We,bO as Ce,bP as Ne,bQ as Ot,A as xt,bR as Tt}from"./acdbed00dccb.js";import{b as Ze}from"./112cba559865.js";import{E as wt}from"./960f2965a833.js";import{G as N}from"./aa3041179d97.js";function $e(n,e){const t=(""+n).split("."),r=(""+e).split(".");for(let i=0;i<Math.max(t.length,r.length);i++){const s=parseInt(t[i]||"0",10),a=parseInt(r[i]||"0",10);if(s>a)return 1;if(a>s)return-1}return 0}function Le(n,e){return qe(n,e,[]).join("")}function qe(n,e,t){if(n.nodeType==Node.CDATA_SECTION_NODE||n.nodeType==Node.TEXT_NODE)e?t.push(String(n.nodeValue).replace(/(\r\n|\r|\n)/g,"")):t.push(n.nodeValue);else{let r;for(r=n.firstChild;r;r=r.nextSibling)qe(r,e,t)}return t}function Pt(n){return"documentElement"in n}function Mt(n){return new DOMParser().parseFromString(n,"application/xml")}function Ye(n,e){return function(t,r){const i=n.call(e!==void 0?e:this,t,r);i!==void 0&&r[r.length-1].push(i)}}function R(n,e,t){return function(r,i){const s=n.call(t!==void 0?t:this,r,i);if(s!==void 0){const a=i[i.length-1],o=e!==void 0?e:r.localName;let c;o in a?c=a[o]:(c=[],a[o]=c),c.push(s)}}}function u(n,e,t){return function(r,i){const s=n.call(t!==void 0?t:this,r,i);if(s!==void 0){const a=i[i.length-1],o=e!==void 0?e:r.localName;a[o]=s}}}function p(n,e,t){t=t!==void 0?t:{};let r,i;for(r=0,i=n.length;r<i;++r)t[n[r]]=e;return t}function Ct(n,e,t,r){let i;for(i=e.firstElementChild;i;i=i.nextElementSibling){const s=n[i.namespaceURI];if(s!==void 0){const a=s[i.localName];a!==void 0&&a.call(r,i,t)}}}function m(n,e,t,r,i){return r.push(n),Ct(e,t,r,i),r.pop()}class Nt{read(e){if(!e)return null;if(typeof e=="string"){const t=Mt(e);return this.readFromDocument(t)}return Pt(e)?this.readFromDocument(e):this.readFromNode(e)}readFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readFromNode(t);return null}readFromNode(e){lt()}}const Dt=Nt;function V(n){const e=/^\s*(true|1)|(false|0)\s*$/.exec(n);if(e)return e[1]!==void 0||!1}function F(n){const e=Le(n,!1);return L(e)}function L(n){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(n);if(e)return parseFloat(e[1])}function be(n){const e=Le(n,!1);return oe(e)}function oe(n){const e=/^\s*(\d+)\s*$/.exec(n);if(e)return parseInt(e[1],10)}function d(n){return Le(n,!1).trim()}const Ht="http://www.w3.org/1999/xlink";function Ie(n){return n.getAttributeNS(Ht,"href")}const b=[null,"http://www.opengis.net/wms"],Ft=p(b,{Service:u(sn),Capability:u(rn)}),Vt=p(b,{Request:u(hn),Exception:u(cn),Layer:u(ln)});class jt extends Dt{constructor(){super(),this.version=void 0}readFromNode(e){this.version=e.getAttribute("version").trim();const t=m({version:this.version},Ft,e,[]);return t||null}}const Bt=p(b,{Name:u(d),Title:u(d),Abstract:u(d),KeywordList:u(Qe),OnlineResource:u(Ie),ContactInformation:u(an),Fees:u(d),AccessConstraints:u(d),LayerLimit:u(be),MaxWidth:u(be),MaxHeight:u(be)}),Ut=p(b,{ContactPersonPrimary:u(on),ContactPosition:u(d),ContactAddress:u(un),ContactVoiceTelephone:u(d),ContactFacsimileTelephone:u(d),ContactElectronicMailAddress:u(d)}),Gt=p(b,{ContactPerson:u(d),ContactOrganization:u(d)}),Wt=p(b,{AddressType:u(d),Address:u(d),City:u(d),StateOrProvince:u(d),PostCode:u(d),Country:u(d)}),Zt=p(b,{Format:Ye(d)}),Xe=p(b,{Name:u(d),Title:u(d),Abstract:u(d),KeywordList:u(Qe),CRS:R(d),EX_GeographicBoundingBox:u(nn),BoundingBox:R(tn),Dimension:R(dn),Attribution:u(en),AuthorityURL:R(mn),Identifier:R(d),MetadataURL:R(yn),DataURL:R(I),FeatureListURL:R(I),Style:R(pn),MinScaleDenominator:u(F),MaxScaleDenominator:u(F),Layer:R(Ke)}),$t=p(b,{Title:u(d),OnlineResource:u(Ie),LogoURL:u(ze)}),qt=p(b,{westBoundLongitude:u(F),eastBoundLongitude:u(F),southBoundLatitude:u(F),northBoundLatitude:u(F)}),Yt=p(b,{GetCapabilities:u(_e),GetMap:u(_e),GetFeatureInfo:u(_e)}),Xt=p(b,{Format:R(d),DCPType:R(gn)}),Kt=p(b,{HTTP:u(fn)}),zt=p(b,{Get:u(I),Post:u(I)}),Qt=p(b,{Name:u(d),Title:u(d),Abstract:u(d),LegendURL:R(ze),StyleSheetURL:u(I),StyleURL:u(I)}),kt=p(b,{Format:u(d),OnlineResource:u(Ie)}),Jt=p(b,{Keyword:Ye(d)});function en(n,e){return m({},$t,n,e)}function tn(n,e){const t=[L(n.getAttribute("minx")),L(n.getAttribute("miny")),L(n.getAttribute("maxx")),L(n.getAttribute("maxy"))],r=[L(n.getAttribute("resx")),L(n.getAttribute("resy"))];return{crs:n.getAttribute("CRS"),extent:t,res:r}}function nn(n,e){const t=m({},qt,n,e);if(!t)return;const r=t.westBoundLongitude,i=t.southBoundLatitude,s=t.eastBoundLongitude,a=t.northBoundLatitude;if(!(r===void 0||i===void 0||s===void 0||a===void 0))return[r,i,s,a]}function rn(n,e){return m({},Vt,n,e)}function sn(n,e){return m({},Bt,n,e)}function an(n,e){return m({},Ut,n,e)}function on(n,e){return m({},Gt,n,e)}function un(n,e){return m({},Wt,n,e)}function cn(n,e){return m([],Zt,n,e)}function ln(n,e){const t=m({},Xe,n,e);return t.Layer===void 0?Object.assign(t,Ke(n,e)):t}function Ke(n,e){const t=e[e.length-1],r=m({},Xe,n,e);if(!r)return;let i=V(n.getAttribute("queryable"));i===void 0&&(i=t.queryable),r.queryable=i!==void 0?i:!1;let s=oe(n.getAttribute("cascaded"));s===void 0&&(s=t.cascaded),r.cascaded=s;let a=V(n.getAttribute("opaque"));a===void 0&&(a=t.opaque),r.opaque=a!==void 0?a:!1;let o=V(n.getAttribute("noSubsets"));o===void 0&&(o=t.noSubsets),r.noSubsets=o!==void 0?o:!1;let c=L(n.getAttribute("fixedWidth"));c||(c=t.fixedWidth),r.fixedWidth=c;let l=L(n.getAttribute("fixedHeight"));return l||(l=t.fixedHeight),r.fixedHeight=l,["Style","CRS","AuthorityURL"].forEach(function(E){if(E in t){const v=r[E]||[];r[E]=v.concat(t[E])}}),["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"].forEach(function(E){if(!(E in r)){const v=t[E];r[E]=v}}),r}function dn(n,e){return{name:n.getAttribute("name"),units:n.getAttribute("units"),unitSymbol:n.getAttribute("unitSymbol"),default:n.getAttribute("default"),multipleValues:V(n.getAttribute("multipleValues")),nearestValue:V(n.getAttribute("nearestValue")),current:V(n.getAttribute("current")),values:d(n)}}function I(n,e){return m({},kt,n,e)}function hn(n,e){return m({},Yt,n,e)}function gn(n,e){return m({},Kt,n,e)}function fn(n,e){return m({},zt,n,e)}function _e(n,e){return m({},Xt,n,e)}function ze(n,e){const t=I(n,e);if(t){const r=[oe(n.getAttribute("width")),oe(n.getAttribute("height"))];return t.size=r,t}}function mn(n,e){const t=I(n,e);if(t)return t.name=n.getAttribute("name"),t}function yn(n,e){const t=I(n,e);if(t)return t.type=n.getAttribute("type"),t}function pn(n,e){return m({},Qt,n,e)}function Qe(n,e){return m([],Jt,n,e)}const bn=jt;class _n extends dt{constructor(e){e=e||{},super(e)}}const En=_n;class Sn extends ht{constructor(e){super(e),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(e){const t=e.layerStatesArray[e.layerIndex],r=e.pixelRatio,i=e.viewState,s=i.resolution,a=this.getLayer().getSource(),o=e.viewHints;let c=e.extent;if(t.extent!==void 0&&(c=He(c,Te(t.extent,i.projection))),!o[we.ANIMATING]&&!o[we.INTERACTING]&&!Fe(c))if(a){const l=i.projection,g=a.getImage(c,s,r,l);g&&(this.loadImage(g)?this.image_=g:g.getState()===S.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(e){const t=this.frameState;if(!t)return null;const r=this.getLayer(),i=gt(t.pixelToCoordinateTransform,e.slice()),s=r.getExtent();if(s&&!ft(s,i))return null;const a=this.image_.getExtent(),o=this.image_.getImage(),c=X(a),l=Math.floor(o.width*((i[0]-a[0])/c));if(l<0||l>=o.width)return null;const g=K(a),_=Math.floor(o.height*((a[3]-i[1])/g));return _<0||_>=o.height?null:this.getImageData(o,l,_)}renderFrame(e,t){const r=this.image_,i=r.getExtent(),s=r.getResolution(),[a,o]=Array.isArray(s)?s:[s,s],c=r.getPixelRatio(),l=e.layerStatesArray[e.layerIndex],g=e.pixelRatio,_=e.viewState,E=_.center,v=_.resolution,te=g*a/(v*c),ne=g*o/(v*c),w=e.extent,re=_.resolution,ie=_.rotation,W=Math.round(X(w)/re*g),Z=Math.round(K(w)/re*g);Pe(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/g,1/g,ie,-W/2,-Z/2),mt(this.inversePixelTransform,this.pixelTransform);const ge=yt(this.pixelTransform);this.useContainer(t,ge,this.getBackground(e));const A=this.context,D=A.canvas;D.width!=W||D.height!=Z?(D.width=W,D.height=Z):this.containerReused||A.clearRect(0,0,W,Z);let fe=!1,me=!0;if(l.extent){const q=Te(l.extent,_.projection);me=pt(q,e.extent),fe=me&&!Se(q,e.extent),fe&&this.clipUnrotated(A,e,q)}const $=r.getImage(),se=Pe(this.tempTransform,W/2,Z/2,te,ne,0,c*(i[0]-E[0])/a,c*(E[1]-i[3])/o);this.renderedResolution=o*g/c;const ve=$.width*se[0],Oe=$.height*se[3];if(this.getLayer().getSource().getInterpolate()||(A.imageSmoothingEnabled=!1),this.preRender(A,e),me&&ve>=.5&&Oe>=.5){const q=se[4],ot=se[5],ye=l.opacity;let xe;ye!==1&&(xe=A.globalAlpha,A.globalAlpha=ye),A.drawImage($,0,0,+$.width,+$.height,q,ot,ve,Oe),ye!==1&&(A.globalAlpha=xe)}return this.postRender(A,e),fe&&A.restore(),A.imageSmoothingEnabled=!0,ge!==D.style.transform&&(D.style.transform=ge),this.container}}const Rn=Sn;class An extends En{constructor(e){super(e)}createRenderer(){return new Rn(this)}getData(e){return super.getData(e)}}const Ln=An;function Re(n){return Array.isArray(n)?Math.min(...n):n}class In extends Ve{constructor(e,t,r,i,s,a,o){let c=e.getExtent();c&&e.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);let l=t.getExtent();l&&t.canWrapX()&&(l=l.slice(),l[0]=-1/0,l[2]=1/0);const g=l?He(r,l):r,_=je(g),E=Be(e,t,_,i),v=Rt,te=new bt(e,t,g,c,E*v,i),ne=te.calculateSourceExtent(),w=Fe(ne)?null:a(ne,E,s),re=w?S.IDLE:S.EMPTY,ie=w?w.getPixelRatio():1;super(r,i,ie,re),this.targetProj_=t,this.maxSourceExtent_=c,this.triangulation_=te,this.targetResolution_=i,this.targetExtent_=r,this.sourceImage_=w,this.sourcePixelRatio_=ie,this.interpolate_=o,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==S.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const e=this.sourceImage_.getState();if(e==S.LOADED){const t=X(this.targetExtent_)/this.targetResolution_,r=K(this.targetExtent_)/this.targetResolution_;this.canvas_=_t(t,r,this.sourcePixelRatio_,Re(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=e,this.changed()}load(){if(this.state==S.IDLE){this.state=S.LOADING,this.changed();const e=this.sourceImage_.getState();e==S.LOADED||e==S.ERROR?this.reproject_():(this.sourceListenerKey_=Et(this.sourceImage_,Ue.CHANGE,function(t){const r=this.sourceImage_.getState();(r==S.LOADED||r==S.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){St(this.sourceListenerKey_),this.sourceListenerKey_=null}}const vn=In,T=4,Ee={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class On extends vt{constructor(e,t){super(e),this.image=t}}class xn extends At{constructor(e){super({attributions:e.attributions,projection:e.projection,state:e.state,interpolate:e.interpolate!==void 0?e.interpolate:!0}),this.on,this.once,this.un,this.loader=e.loader||null,this.resolutions_=e.resolutions!==void 0?e.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=e.loader?e.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(e){this.resolutions_=e}findNearestResolution(e){const t=this.getResolutions();if(t){const r=Lt(t,e,0);e=t[r]}return e}getImage(e,t,r,i){const s=this.getProjection();if(!s||!i||Me(s,i))return s&&(i=s),this.getImageInternal(e,t,r,i);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Me(this.reprojectedImage_.getProjection(),i)&&this.reprojectedImage_.getResolution()==t&&It(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new vn(s,i,e,t,r,(a,o,c)=>this.getImageInternal(a,o,c,s),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(e,t,r,i){if(this.loader){const s=ke(e,t,r,1),a=this.findNearestResolution(t);if(this.image&&(this.static_||this.wantedProjection_===i&&(this.wantedExtent_&&Se(this.wantedExtent_,s)||Se(this.image.getExtent(),s))&&(this.wantedResolution_&&Re(this.wantedResolution_)===a||Re(this.image.getResolution())===a)))return this.image;this.wantedProjection_=i,this.wantedExtent_=s,this.wantedResolution_=a,this.image=new Ve(s,a,r,this.loader),this.image.addEventListener(Ue.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(e){const t=e.target;let r;switch(t.getState()){case S.LOADING:this.loading=!0,r=Ee.IMAGELOADSTART;break;case S.LOADED:this.loading=!1,r=Ee.IMAGELOADEND;break;case S.ERROR:this.loading=!1,r=Ee.IMAGELOADERROR;break;default:return}this.hasListener(r)&&this.dispatchEvent(new On(r,t))}}function Tn(n,e){n.getImage().src=e}function ke(n,e,t,r){const i=e/t,s=je(n),a=ae(X(n)/i,T),o=ae(K(n)/i,T),c=ae((r-1)*a/2,T),l=a+2*c,g=ae((r-1)*o/2,T),_=o+2*g;return Ge(s,i,0,[l,_])}const wn=xn,Je="1.3.0",De=[101,101];function et(n,e,t,r,i){i.WIDTH=t[0],i.HEIGHT=t[1];const s=r.getAxisOrientation();let a;const o=$e(i.VERSION,"1.3")>=0;return i[o?"CRS":"SRS"]=r.getCode(),o&&s.substr(0,2)=="ne"?a=[e[1],e[0],e[3],e[2]]:a=e,i.BBOX=a.join(","),Ze(n,i)}function Pn(n,e,t,r,i,s,a){s=Object.assign({REQUEST:"GetMap"},s);const o=e/t,c=[Ne(X(n)/o,T),Ne(K(n)/o,T)];if(t!=1)switch(a){case"geoserver":const g=90*t+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+g:s.FORMAT_OPTIONS="dpi:"+g;break;case"mapserver":s.MAP_RESOLUTION=90*t;break;case"carmentaserver":case"qgis":s.DPI=90*t;break;default:throw new Error("Unknown `serverType` configured")}return et(i,n,c,r,s)}function tt(n,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:Je,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},n)}function Mn(n){const e=n.hidpi===void 0?!0:n.hidpi,t=he(n.projection||"EPSG:3857"),r=n.ratio||1.5,i=n.load||We;return(s,a,o)=>{s=ke(s,a,o,r),o!=1&&(!e||n.serverType===void 0)&&(o=1);const c=Pn(s,a,o,t,n.url,tt(n.params,"GetMap"),n.serverType),l=new Image;return n.crossOrigin!==null&&(l.crossOrigin=n.crossOrigin),i(l,c).then(g=>({image:g,extent:s,pixelRatio:o}))}}function Cn(n,e,t){if(n.url===void 0)return;const r=he(n.projection||"EPSG:3857"),i=Ge(e,t,0,De),s={QUERY_LAYERS:n.params.LAYERS,INFO_FORMAT:"application/json"};Object.assign(s,tt(n.params,"GetFeatureInfo"),n.params);const a=Ce((e[0]-i[0])/t,T),o=Ce((i[3]-e[1])/t,T),c=$e(s.VERSION,"1.3")>=0;return s[c?"I":"X"]=a,s[c?"J":"Y"]=o,et(n.url,i,De,r,s)}function Nn(n,e){if(n.url===void 0)return;const t={SERVICE:"WMS",VERSION:Je,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(n.params===void 0||n.params.LAYER===void 0){const r=n.params.LAYERS;if(!(!Array.isArray(r)||r.length===1))return;t.LAYER=r}if(e!==void 0){const r=he(n.projection||"EPSG:3857").getMetersPerUnit()||1,i=28e-5;t.SCALE=e*r/i}return Object.assign(t,n.params),Ze(n.url,t)}class Dn extends wn{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:e.interpolate,projection:e.projection,resolutions:e.resolutions}),this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null,this.url_=e.url,this.imageLoadFunction_=e.imageLoadFunction!==void 0?e.imageLoadFunction:Tn,this.params_=e.params,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.renderedRevision_=0,this.ratio_=e.ratio!==void 0?e.ratio:1.5,this.loaderProjection_=null}getFeatureInfoUrl(e,t,r,i){const s=he(r),a=this.getProjection();a&&a!==s&&(t=Be(a,s,e,t),e=Ot(e,s,a));const o={url:this.url_,params:{...this.params_,...i},projection:a||s};return Cn(o,e,t)}getLegendUrl(e,t){return Nn({url:this.url_,params:{...this.params_,...t}},e)}getParams(){return this.params_}getImageInternal(e,t,r,i){return this.url_===void 0?null:((!this.loader||this.loaderProjection_!==i)&&(this.loaderProjection_=i,this.loader=Mn({crossOrigin:this.crossOrigin_,params:this.params_,projection:i,serverType:this.serverType_,hidpi:this.hidpi_,url:this.url_,ratio:this.ratio_,load:(s,a)=>(this.image.setImage(s),this.imageLoadFunction_(this.image,a),We(s))})),super.getImageInternal(e,t,r,i))}getImageLoadFunction(){return this.imageLoadFunction_}getUrl(){return this.url_}setImageLoadFunction(e){this.imageLoadFunction_=e,this.changed()}setUrl(e){e!=this.url_&&(this.url_=e,this.loader=null,this.changed())}updateParams(e){Object.assign(this.params_,e),this.changed()}changed(){this.image=null,super.changed()}}const Hn=Dn;async function Fn(n,e,t){const r=await e.fetch(n,{signal:t});if(!r.ok)throw new Error("Request failed: "+r.status);return await r.text()}function Vn(n){let e=!1,t=setTimeout(()=>{e=!0,t=void 0,n()});return{reschedule(){return!e},cancel(){t&&clearTimeout(t)}}}var O;class nt extends wt{constructor(t){super();f(this,O,void 0);y(this,O,t)}destroy(){for(const t of h(this,O))t.destroy();y(this,O,[])}getSublayers(t){return h(this,O).slice()}__getRawSublayers(){return h(this,O)}}O=new WeakMap;const Y=ct("map:WMSLayer");var j,P,B,U,M,z,ue,Q,Ae,ce,rt,le,it,de,st;class jn extends xt{constructor(t){const r=new Ln;super({...t,olLayer:r});f(this,Q);f(this,ce);f(this,le);f(this,de);f(this,j,void 0);f(this,P,void 0);f(this,B,void 0);f(this,U,void 0);f(this,M,void 0);f(this,z,void 0);f(this,ue,new AbortController);const i=new Hn({...t.sourceOptions,url:t.url,params:{...t.sourceOptions?.params},imageLoadFunction:(s,a)=>H(this,de,st).call(this,s,a).catch(o=>{Y.error(`Failed to load tile at '${a}'`,o)})});y(this,j,t.url),y(this,M,i),y(this,U,r),y(this,P,new nt(at(t.sublayers))),H(this,Q,Ae).call(this)}get legend(){}get url(){return h(this,j)}get __source(){return h(this,M)}get sublayers(){return h(this,P)}get capabilities(){return h(this,z)}__attach(t){super.__attach(t);for(const s of h(this,P).getSublayers())s.__attach(t,this,this);const r=[],i=(s,a)=>{for(const o of s){const c=o.sublayers.getSublayers();c.length?i(c,a):o.name&&a.push(o)}};H(this,le,it).call(this).then(s=>{const o=new bn().read(s);y(this,z,o),i(h(this,P).getSublayers(),r);for(const c of r){const l=Un(o,c.name);c.legend=l}}).catch(s=>{if(ut(s)){Y.error(`Layer ${this.id} has been destroyed before fetching the data`);return}Y.error(`Failed fetching WMS capabilities for Layer ${this.id}`,s)})}__updateSublayerVisibility(){h(this,B)?.reschedule()||y(this,B,Vn(()=>{try{H(this,Q,Ae).call(this),y(this,B,void 0)}catch(t){Y.error(`Failed to update sublayer visibility on WMS layer '${this.id}'.`,t)}}))}}j=new WeakMap,P=new WeakMap,B=new WeakMap,U=new WeakMap,M=new WeakMap,z=new WeakMap,ue=new WeakMap,Q=new WeakSet,Ae=function(){const t=H(this,ce,rt).call(this);h(this,M).updateParams({LAYERS:t});const r=t.length===0?null:h(this,M);h(this,U).getSource()!==r&&h(this,U).setSource(r)},ce=new WeakSet,rt=function(){const t=[],r=i=>{if(!i.visible)return;const s=i.sublayers.__getRawSublayers();if(s.length)for(const a of s)r(a);else i.name&&t.push(i.name)};for(const i of this.sublayers.__getRawSublayers())r(i);return t},le=new WeakSet,it=async function(){const t=this.map.__sharedDependencies.httpService,r=`${h(this,j)}?LANGUAGE=ger&SERVICE=WMS&REQUEST=GetCapabilities`;return Fn(r,t,h(this,ue).signal)},de=new WeakSet,st=async function(t,r){const i=this.map.__sharedDependencies.httpService,s=t.getImage(),a=await i.fetch(r);if(!a.ok)throw new Error(`Request failed with status ${a.status}.`);const o=await a.blob(),c=URL.createObjectURL(o),l=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",l),s.removeEventListener("error",l)};s.addEventListener("load",l),s.addEventListener("error",l),s.src=c};var C,x,k,J,ee,G;class Bn extends Tt{constructor(t){super(t);f(this,C,void 0);f(this,x,void 0);f(this,k,void 0);f(this,J,void 0);f(this,ee,void 0);f(this,G,void 0);y(this,k,t.name),y(this,G,t.visible??!0),y(this,ee,new nt(at(t.sublayers)))}get name(){return h(this,k)}get sublayers(){return h(this,ee)}get parent(){const t=h(this,C);if(!t)throw new Error(`WMS sublayer ${this.id} has not been attached to its parent yet.`);return t}get parentLayer(){const t=h(this,x);if(!t)throw new Error(`WMS sublayer ${this.id} has not been attached to its parent yet.`);return t}get legend(){return h(this,J)}set legend(t){y(this,J,t),this.__emitChangeEvent("changed:legend")}__attach(t,r,i){if(super.__attachToMap(t),h(this,C))throw new Error(`WMS sublayer '${this.id}' has already been attached to parent '${h(this,C).id}'`);if(y(this,C,i),h(this,x))throw new Error(`WMS sublayer '${this.id}' has already been attached to parent layer '${h(this,x).id}'`);y(this,x,r);for(const s of this.sublayers.__getRawSublayers())s.__attach(t,r,this)}get visible(){return h(this,G)}setVisible(t){this.visible!==t&&(y(this,G,t),h(this,x)?.__updateSublayerVisibility(),this.__emitChangeEvent("changed:visible"))}}C=new WeakMap,x=new WeakMap,k=new WeakMap,J=new WeakMap,ee=new WeakMap,G=new WeakMap;function at(n=[]){const e=[];try{for(const t of n)e.push(new Bn(t));return e}catch(t){for(;e.length;)e.pop()?.destroy();throw new Error("Failed to construct sublayers.",{cause:t})}}function Un(n,e){const r=n?.Capability?.Layer;let i;const s=a=>{for(const o of a)if(o?.Name===e){const l=o.Style;if(!l||!l.length){Y.debug("No style in WMS layer capabilities - giving up.");return}i=l[0].LegendURL?.[0]?.OnlineResource}else o.Layer&&s(o.Layer)};return r&&s(r.Layer),i}const Xn=jn;function Kn(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,56H60A20,20,0,0,0,40,76V228a12,12,0,0,0,19,9.76l49-35,49,35A12,12,0,0,0,176,228V76A20,20,0,0,0,156,56Zm-4,148.68-37-26.45a12,12,0,0,0-14,0L64,204.68V80h88ZM216,36V188a12,12,0,0,1-24,0V40H92a12,12,0,0,1,0-24H196A20,20,0,0,1,216,36Z"}}]})(n)}function zn(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,40a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,40ZM144,204H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM204,52V72a12,12,0,0,0,24,0V48a20,20,0,0,0-20-20H184a12,12,0,0,0,0,24Zm12,48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM72,28H48A20,20,0,0,0,28,48V72a12,12,0,0,0,24,0V52H72a12,12,0,0,0,0-24ZM240,204H228V192a12,12,0,0,0-24,0v12H192a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V228h12a12,12,0,0,0,0-24Z"}}]})(n)}function Qn(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM70,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v67.57L204.53,110.1a14,14,0,0,0-19.8,0l-21.42,21.41L117.9,86.1a14,14,0,0,0-19.8,0L70,114.2ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H58v82a14,14,0,0,0,14,14H186Zm30-30H72a2,2,0,0,1-2-2V131.17l36.58-36.58a2,2,0,0,1,2.83,0l49.66,49.66a6,6,0,0,0,8.49,0l25.65-25.66a2,2,0,0,1,2.83,0l22,22V168A2,2,0,0,1,216,170ZM162,84a10,10,0,1,1,10,10A10,10,0,0,1,162,84Z"}}]})(n)}function kn(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}}]})(n)}function Jn(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M233.91,74.79,181.22,22.1a14,14,0,0,0-19.8,0L22.09,161.41a14,14,0,0,0,0,19.8L74.78,233.9a14,14,0,0,0,19.8,0L233.91,94.59A14,14,0,0,0,233.91,74.79ZM225.42,86.1,86.1,225.41h0a2,2,0,0,1-2.83,0L30.58,172.73a2,2,0,0,1,0-2.83L64,136.48l27.76,27.76a6,6,0,1,0,8.48-8.48L72.48,128,96,104.48l27.76,27.76a6,6,0,0,0,8.48-8.48L104.48,96,128,72.49l27.76,27.75a6,6,0,0,0,8.48-8.48L136.49,64,169.9,30.59a2,2,0,0,1,2.83,0l52.69,52.68A2,2,0,0,1,225.42,86.1Z"}}]})(n)}function er(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM82,24a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H88A6,6,0,0,1,82,24Z"}}]})(n)}function tr(n){return N({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"}}]})(n)}export{tr as P,Xn as W,Dt as X,u as a,R as b,Ie as c,Ye as d,be as e,F as f,Fn as g,er as h,Kn as i,kn as j,Qn as k,Jn as l,p as m,zn as n,m as p,d as r};
