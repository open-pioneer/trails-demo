import{g as m,f as x,j as a,r as l,H as h,$ as S}from"./734e1b10cfd4.js";var d=m("div");d.displayName="Box";var p=x(function(r,t){const{size:n,centerContent:o=!0,...e}=r,i=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.jsx(d,{ref:t,boxSize:n,__css:{...i,flexShrink:0,flexGrow:0},...e})});p.displayName="Square";var j=x(function(r,t){const{size:n,...o}=r;return a.jsx(p,{size:n,ref:t,borderRadius:"9999px",...o})});j.displayName="Circle";const g=1,c=l.createContext(g);c.displayName="LevelContext";function N(s){const{title:r,children:t}=s,n=l.useContext(c),o=typeof r=="string"?a.jsx(C,{children:r}):r;return a.jsxs(a.Fragment,{children:[o,a.jsx(c.Provider,{value:n+1,children:t})]})}const C=l.forwardRef(function(r,t){const{children:n,...o}=r,e=y(),i=w(e);return a.jsx(h,{as:i,ref:t,...o,children:n})});function y(){const s=l.useContext(c);return Math.min(s,6)}function w(s){return`h${s}`}var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var r={}.hasOwnProperty;function t(){for(var n=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var i=typeof e;if(i==="string"||i==="number")n.push(e);else if(Array.isArray(e)){if(e.length){var f=t.apply(null,e);f&&n.push(f)}}else if(i==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var u in e)r.call(e,u)&&e[u]&&n.push(u)}}}return n.join(" ")}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(v);var E=v.exports;const H=S(E);export{d as B,C as S,N as T,H as c};
