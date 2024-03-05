(()=>{var e={491:()=>{},936:e=>{e.exports={Movie:class{constructor(e,t,n,r,o,s,i){this.title=e,this.year=t,this.director=n,this.duration=r,this.genre=o,this.rate=s,this.poster=i}}}},128:(e,t,n)=>{const r=n(696),{RepoMovies:o}=n(328),{tempRecomendadas:s}=n(648);e.exports={getFakeStoreProducts:async function(){console.log("Pasando por get Fake Store - antes de axios");try{const e=await r.get("http://127.0.0.1:3000/movies/");console.log("Muestra contenido de res en prmPeliculas :>> ",e.data);const t=e.data.map((e=>({title:e.title,duration:e.duration,year:e.year,director:e.director,genre:e.genre,rate:e.rate,poster:e.poster})));return console.log("Pasando por get Fake Store - después de axios"),t}catch(e){return console.error("Error al obtener datos de la API de Fake Store:",e),s}}}},364:(e,t,n)=>{const r=n(696);e.exports={tstAsyncAwait:async function(){console.log("Entrando en tst Async Await");try{const e="http://127.0.0.1:3000/movies",t=(await r.get(e)).data;console.log("Películas obtenidas:",t)}catch(e){console.error("Error al obtener películas:",e);try{const e="http://127.0.0.1:3000/movies",t=(await r.get(e)).data;console.log("Películas obtenidas (Fallback):",t)}catch(e){console.error("Error al obtener películas de la URL de respaldo:",e)}}console.log("Saliendo de tst Async Await")}}},44:e=>{document.addEventListener("DOMContentLoaded",(function(){})),e.exports={Progreso:class{constructor(e={}){this.id=0,this.referencia=e,this.leyenda=e.descripcion,this.minimo=e.minimo,this.maximo=e.maximo,this.valor=e.valorInicial,this.percent=0}ProgresoSetting(){this.id=1}ProgresoReflejo(e){var t,n;this.valor=e,this.percent=(t=this.minimo,n=this.maximo,((this.valor-t)/(n-t)*100).toFixed(2)),this.leyenda=`${this.referencia.descripcion} ( ${this.percent} % ).`,this.percent<=99&&(this.referencia.progBarPrc.style.width=this.percent+"%"),this.referencia.progBarLey.innerHTML=this.leyenda,this.valor,this.maximo}}}},328:(e,t,n)=>{"use strict";n.r(t),n.d(t,{RepoMovies:()=>o});var r=n(936);class o{constructor(){this.movies=[]}createMovie({title:e,year:t,director:n,duration:o,genre:s,rate:i,poster:a}){const c=new r.Movie(e,t,n,o,s,i,a);this.movies.push(c)}getMovies(){return this.movies}getMoviesCnt(){return this.movies.length}getMovie(e){return this.movies.length>0&&e>=0&&e<this.movies.length?this.movies[e]:[]}setCleanMovies(){this.movies=[]}setArray(e){for(let t=0;t<e.length;t++){const n=e[t];this.createMovie(n)}}limpiarTarjetas(){console.log(this.movies.length),0!=this.movies.length&&(document.querySelector(".cntd-trjs").innerHTML="",repositorio.setCleanMovies(),trjCargadas=0,console.log(this.movies.length))}}},648:e=>{e.exports={tempRecomendadas:[{title:"Guardians of the Galaxy Vol. 2",year:2017,director:"James Gunn",duration:"2h 16min",genre:["Action","Adventure","Comedy"],rate:7.7,poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"},{title:"Star Wars: Episode IV - A New Hope",year:1977,director:"George Lucas",duration:"2h 1min",genre:["Action","Adventure","Fantasy","Sci-Fi"],rate:8.7,poster:"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"}]}},696:(e,t,n)=>{"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined"),f=c("ArrayBuffer"),h=l("string"),p=l("function"),m=l("number"),g=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),E=c("File"),w=c("Blob"),v=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,T=e=>!d(e)&&e!==A,j=(L="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>L&&e instanceof L);var L;const C=c("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),N=c("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},_="abcdefghijklmnopqrstuvwxyz",F="0123456789",B={DIGIT:F,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+F},k=c("AsyncFunction");var U={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=i(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:h,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:g,isPlainObject:y,isUndefined:d,isDate:b,isFile:E,isBlob:w,isRegExp:N,isFunction:p,isStream:e=>g(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:j,isFileList:v,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const s=t&&R(n,o)||o;y(n[s])&&y(r)?n[s]=e(n[s],r):y(r)?n[s]=e({},r):u(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&p(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(g(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:k,isThenable:e=>e&&(g(e)||p(e))&&p(e.then)&&p(e.catch)};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}U.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=D.prototype,I={};function q(e){return U.isPlainObject(e)||U.isArray(e)}function z(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=z(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{I[e]={value:e}})),Object.defineProperties(D,I),Object.defineProperty(M,"isAxiosError",{value:!0}),D.from=(e,t,n,r,o,s)=>{const i=Object.create(M);return U.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),D.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const J=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));function V(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new D("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(q)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=z(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===i?H([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!q(e)||(t.append(H(o,n,s),c(e)),!1)}const u=[],d=Object.assign(J,{defaultVisitor:l,convertValue:c,isVisitable:q});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&o.call(t,n,U.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $(e,t){this._pairs=[],e&&V(e,this,t)}const G=$.prototype;function K(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||K,o=n&&n.serialize;let s;if(s=o?o(t,n):U.isURLSearchParams(t)?t.toString():new $(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Z=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:$,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const ee="undefined"!=typeof window&&"undefined"!=typeof document,te=(ne="undefined"!=typeof navigator&&navigator.product,ee&&["ReactNative","NativeScript","NS"].indexOf(ne)<0);var ne;const re="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var oe={...Object.freeze({__proto__:null,hasBrowserEnv:ee,hasStandardBrowserWebWorkerEnv:re,hasStandardBrowserEnv:te}),...Y};function se(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&U.isArray(r)?r.length:s,a?(U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&U.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ie={transitional:Q,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=U.isObject(e);if(o&&U.isHTMLForm(e)&&(e=new FormData(e)),U.isFormData(e))return r?JSON.stringify(se(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return V(e,new oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return oe.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return V(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(0,JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ie.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw D.from(e,D.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oe.classes.FormData,Blob:oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],(e=>{ie.headers[e]={}}));var ae=ie;const ce=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),le=Symbol("internals");function ue(e){return e&&String(e).trim().toLowerCase()}function de(e){return!1===e||null==e?e:U.isArray(e)?e.map(de):String(e)}function fe(e,t,n,r,o){return U.isFunction(r)?r.call(this,t,n):(o&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}class he{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ue(t);if(!o)throw new Error("header name must be a non-empty string");const s=U.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=de(e))}const s=(e,t)=>U.forEach(e,((e,n)=>o(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ce[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ue(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ue(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!fe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ue(e)){const o=U.findKey(n,e);!o||t&&!fe(0,n[o],o,t)||(delete n[o],r=!0)}}return U.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!fe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,o)=>{const s=U.findKey(n,o);if(s)return t[s]=de(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=de(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[le]=this[le]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ue(e);t[r]||(function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}}he.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.reduceDescriptors(he.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),U.freezeMethods(he);var pe=he;function me(e,t){const n=this||ae,r=t||n,o=pe.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ge(e){return!(!e||!e.__CANCEL__)}function ye(e,t,n){D.call(this,null==e?"canceled":e,D.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(ye,D,{__CANCEL__:!0});var be=oe.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];U.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),U.isString(r)&&i.push("path="+r),U.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ee(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var we=oe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ve(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Oe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=pe.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(U.isFormData(r))if(oe.hasStandardBrowserEnv||oe.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const d=Ee(e.baseURL,e.url);function f(){if(!u)return;const r=pe.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),X(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new D("Request aborted",D.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Q;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new D(t,r.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,u)),u=null},oe.hasStandardBrowserEnv&&(c&&U.isFunction(c)&&(c=c(e)),c||!1!==c&&we(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&be.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&U.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",ve(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new ye(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);h&&-1===oe.protocols.indexOf(h)?n(new D("Unsupported protocol "+h+":",D.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};U.forEach(Oe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Se=e=>`- ${e}`,Re=e=>U.isFunction(e)||null===e||!1===e;var Ae=e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Re(n)&&(r=Oe[(t=String(n)).toLowerCase()],void 0===r))throw new D(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new D("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Se).join("\n"):" "+Se(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ye(null,e)}function je(e){return Te(e),e.headers=pe.from(e.headers),e.data=me.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ae(e.adapter||ae.adapter)(e).then((function(t){return Te(e),t.data=me.call(e,e.transformResponse,t),t.headers=pe.from(t.headers),t}),(function(t){return ge(t)||(Te(e),t&&t.response&&(t.response.data=me.call(e,e.transformResponse,t.response),t.response.headers=pe.from(t.response.headers))),Promise.reject(t)}))}const Le=e=>e instanceof pe?e.toJSON():e;function Ce(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function o(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function i(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Le(e),Le(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);U.isUndefined(i)&&s!==a||(n[r]=i)})),n}const xe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{xe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ne={};xe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new D(r(o," has been removed"+(t?" in "+t:"")),D.ERR_DEPRECATED);return t&&!Ne[o]&&(Ne[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Pe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new D("option "+s+" must be "+n,D.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new D("Unknown option "+s,D.ERR_BAD_OPTION)}},validators:xe};const _e=Pe.validators;class Fe{constructor(e){this.defaults=e,this.interceptors={request:new Z,response:new Z}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ce(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Pe.assertOptions(n,{silentJSONParsing:_e.transitional(_e.boolean),forcedJSONParsing:_e.transitional(_e.boolean),clarifyTimeoutError:_e.transitional(_e.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:Pe.assertOptions(r,{encode:_e.function,serialize:_e.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&U.merge(o.common,o[t.method]);o&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=pe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[je.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=je.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return X(Ee((e=Ce(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],(function(e){Fe.prototype[e]=function(t,n){return this.request(Ce(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ce(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Fe.prototype[e]=t(),Fe.prototype[e+"Form"]=t(!0)}));var Be=Fe;class ke{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ye(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ke((function(t){e=t})),cancel:e}}}var Ue=ke;const De={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(De).forEach((([e,t])=>{De[t]=e}));var Me=De;const Ie=function e(t){const n=new Be(t),o=r(Be.prototype.request,n);return U.extend(o,Be.prototype,n,{allOwnKeys:!0}),U.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Ce(t,n))},o}(ae);Ie.Axios=Be,Ie.CanceledError=ye,Ie.CancelToken=Ue,Ie.isCancel=ge,Ie.VERSION="1.6.7",Ie.toFormData=V,Ie.AxiosError=D,Ie.Cancel=Ie.CanceledError,Ie.all=function(e){return Promise.all(e)},Ie.spread=function(e){return function(t){return e.apply(null,t)}},Ie.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},Ie.mergeConfig=Ce,Ie.AxiosHeaders=pe,Ie.formToJSON=e=>se(U.isHTMLForm(e)?new FormData(e):e),Ie.getAdapter=Ae,Ie.HttpStatusCode=Me,Ie.default=Ie,e.exports=Ie}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{Progreso:e}=n(44),{RepoMovies:t}=n(328),{getFakeStoreProducts:r}=n(128),{tstAynsAwait:o}=n(364),{lsp:s}=n(491),i=document.getElementById("prog-bar-cntd");function a(e,t,n,r){if(e<t.length){const o=t[e];console.log(`Mostrar Peli posicion ${e} , con Titulo ${t[e].title} y con Ratio ${t[e].rate}`),function(e){const t=document.getElementById("cntd-trjs-ind"),n=document.createElement("div");n.classList.add("cntd-trjs-ind");const r=document.createElement("div");r.classList.add("titulo-y-favorito");const o=document.createElement("span");o.classList.add("bi","bi-heart","fs-2","text-danger","float-end","me-5"),o.setAttribute("data-favorito","false"),o.addEventListener("click",(function(){"true"===o.getAttribute("data-favorito")?(o.classList.remove("bi-heart-fill"),o.classList.add("bi-heart"),o.setAttribute("data-favorito","false")):(o.classList.remove("bi-heart"),o.classList.add("bi-heart-fill"),o.setAttribute("data-favorito","true"))})),r.appendChild(o);const s=document.createElement("div");s.classList.add("trj-ind"),s.classList.add("trj-title"),s.innerHTML=`<h5>${e.title}</h5>`,r.appendChild(s),n.appendChild(r);const i=document.createElement("div");i.classList.add("trj-ind"),i.classList.add("trj-imagen"),i.innerHTML=`<img src="${e.poster}" alt="Imagen de ${e.title}">`,n.appendChild(i);const a=document.createElement("div");a.classList.add("contenedor-flex");const c=document.createElement("div");c.classList.add("trj-ind"),c.classList.add("trj-ind-titdet"),c.innerHTML="<h6> director </h6>",a.appendChild(c);const l=document.createElement("div");l.classList.add("trj-ind"),l.classList.add("trj-ind-director"),l.innerHTML=`<h5>${e.director}</h5>`,a.appendChild(l),n.appendChild(a);const u=document.createElement("div");u.classList.add("contenedor-flex");const d=document.createElement("div");d.classList.add("trj-ind"),d.classList.add("trj-ind-titdet"),d.innerHTML="<h6> Calificacion </h6>",u.appendChild(d);const f=document.createElement("div");f.classList.add("trj-ind"),f.classList.add("trj-ind-duration"),f.innerHTML=`<h5>${e.duration}</h5>`,u.appendChild(f),n.appendChild(u);const h=document.createElement("div");h.classList.add("contenedor-flex");const p=document.createElement("div");p.classList.add("trj-ind"),p.classList.add("trj-ind-titdet"),p.innerHTML="<h6> Calificacion </h6>",h.appendChild(p);const m=document.createElement("div");m.classList.add("trj-ind"),m.classList.add("trj-ind-Rate"),m.innerHTML=`<h3>${e.rate}</h3>`,h.appendChild(m),n.appendChild(h),t.appendChild(n)}(o),setTimeout((()=>{a(e+1,t,n,r),n.ProgresoReflejo(e)}),10)}else r.classList.add("hidden")}i.classList.remove("hidden"),r().then((n=>{const r={progBarCntd:document.getElementById("prog-bar-cntd"),progBarFndo:document.getElementById("prog-bar-fndo"),progBarPrc:document.getElementById("prog-bar-prc"),progBarLey:document.getElementById("prog-bar-ley"),descripcion:"Cargando Sitio",minimo:1,maximo:n.length,valorInicial:1},o=new e(r,null,1,n.length);(new t).limpiarTarjetas(),a(0,n,o,i)})).catch((e=>{})),s()})()})();