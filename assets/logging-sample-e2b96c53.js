import"./modulepreload-polyfill-ec808ebb.js";import{c as r,r as g}from"./CustomElement-00e54a38.js";class s{constructor(){console.log("Hello from LogService!!")}log(e){console.info(e)}}class c{constructor(e){e.references.logger.log("Hello from log user!")}}const n={logging:{name:"logging",services:{LogService:{name:"LogService",clazz:s,provides:[{name:"logging.LogService"}],references:{}}}},"log-user":{name:"log-user",services:{LogUser:{name:"LogUser",clazz:c,provides:[],references:{logger:{name:"logging.LogService"}}}}}},l=r({component:()=>g.createElement("span",void 0,"foo"),packages:n});customElements.define("logging-app",l);
