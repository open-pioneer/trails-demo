import{r as t,P as c,E as i,b as u}from"./CustomElement-9eefe5ab.js";class g{constructor({properties:e}){const r=e.logLevel;console.debug("Log Service created with log level",r)}destroy(){console.debug("Log Service destroyed")}log(e){console.info("LOG: "+e)}}function v(o,e,r){const s=t.useContext(c);return t.useMemo(()=>n("useService",s).getService(o,e,r??{}),[s,o,e,r])}function d(o){const e=t.useContext(c);return n("useProperties",e).getProperties(o)}function n(o,e){if(!e)throw new i(u.INTERNAL,`"Failed to access package context from '${o}': react integration was not set up properly.`);return e}export{g as L,d as a,v as u};
