import{M as a,bO as o,bL as r,cg as h,ch as l,ci as d,cj as f,bX as g,bT as C,ck as u,cl as c,cm as p,bZ as m}from"./be414ef48141.js";class s extends a{constructor(t,i){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,i!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(i,t):this.setCoordinates(t,i)}appendCoordinate(t){o(this.flatCoordinates,t),this.changed()}clone(){const t=new s(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,i,n,e){return e<r(this.getExtent(),t,i)?e:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(h(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),l(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,i,n,e))}forEachSegment(t){return d(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,i){return this.layout!="XYM"&&this.layout!="XYZM"?null:(i=i!==void 0?i:!1,f(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i))}getCoordinates(){return g(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,i){return C(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,this.stride)}getLength(){return u(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const i=[];return i.length=c(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new s(i,"XY")}getType(){return"LineString"}intersectsExtent(t){return p(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,i){this.setLayout(i,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=m(this.flatCoordinates,0,t,this.stride),this.changed()}}const _=s;export{_ as L};
