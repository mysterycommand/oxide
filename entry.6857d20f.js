parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PsEZ":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e,n){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,n))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(t=>(console.warn(s,t),i(e,n))):i(e,n)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"i9ER":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=f,exports.default=q,exports.__wbindgen_throw=exports.__wbg_log_cc6b9ddc6ca5449d=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_object_drop_ref=exports.__wbindgen_string_new=void 0;var e=require("./wasm-loader.js");let n;const t="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let r=new t("utf-8",{ignoreBOM:!0,fatal:!0});r.decode();let o=null;function _(){return null!==o&&o.buffer===n.memory.buffer||(o=new Uint8Array(n.memory.buffer)),o}function c(e,n){return r.decode(_().subarray(e,e+n))}const u=new Array(32).fill(void 0);u.push(void 0,null,!0,!1);let d=u.length;function i(e){d===u.length&&u.push(u.length+1);const n=d;return d=u[n],u[n]=e,n}function s(e){return u[e]}function b(e){e<36||(u[e]=d,d=e)}function l(e){const n=s(e);return b(e),n}function f(){n.run()}let w=0;const g="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let a=new g("utf-8");const p="function"==typeof a.encodeInto?function(e,n){return a.encodeInto(e,n)}:function(e,n){const t=a.encode(e);return n.set(t),{read:e.length,written:t.length}};function x(e,n,t){if(void 0===t){const t=a.encode(e),r=n(t.length);return _().subarray(r,r+t.length).set(t),w=t.length,r}let r=e.length,o=n(r);const c=_();let u=0;for(;u<r;u++){const n=e.charCodeAt(u);if(n>127)break;c[o+u]=n}if(u!==r){0!==u&&(e=e.slice(u)),o=t(o,r,r=u+3*e.length);const n=_().subarray(o+u,o+r);u+=p(e,n).written}return w=u,o}let h=null;function y(){return null!==h&&h.buffer===n.memory.buffer||(h=new Int32Array(n.memory.buffer)),h}const m=function(e,n){return i(c(e,n))};exports.__wbindgen_string_new=m;const v=function(e){l(e)};exports.__wbindgen_object_drop_ref=v;const j=function(){return i(new Error)};exports.__wbg_new_59cb74e423758ede=j;const T=function(e,t){var r=x(s(t).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),o=w;y()[e/4+1]=o,y()[e/4+0]=r};exports.__wbg_stack_558ba5917b466edd=T;const k=function(e,t){try{console.error(c(e,t))}finally{n.__wbindgen_free(e,t)}};exports.__wbg_error_4bb6c2a97407129a=k;const E=function(e){console.log(s(e))};exports.__wbg_log_cc6b9ddc6ca5449d=E;const A=function(e,n){throw new Error(c(e,n))};function q(t){return(0,e.load)(t,{"./ferric_bg.js":{__wbindgen_string_new:m,__wbindgen_object_drop_ref:v,__wbg_new_59cb74e423758ede:j,__wbg_stack_558ba5917b466edd:T,__wbg_error_4bb6c2a97407129a:k,__wbg_log_cc6b9ddc6ca5449d:E,__wbindgen_throw:A}}).then(e=>(n=e,{run:f}))}exports.__wbindgen_throw=A;
},{"./wasm-loader.js":"PsEZ"}],"ga2y":[function(require,module,exports) {
module.exports="ferric_bg.f90bd797.wasm";
},{}],"jBO1":[function(require,module,exports) {
"use strict";var e=r(require("../pkg/ferric_bg.js"));function r(e){return e&&e.__esModule?e:{default:e}}module.exports=(0,e.default)(require("../pkg/ferric_bg.wasm"));
},{"../pkg/wasm-loader.js":"PsEZ","../pkg/ferric_bg.js":"i9ER","../pkg/ferric_bg.wasm":"ga2y"}],"iMte":[function(require,module,exports) {

},{}],"QAnz":[function(require,module,exports) {
"use strict";var r=require("./lib.rs");require("./style.css"),(0,r.run)();
},{"./lib.rs":"jBO1","./style.css":"iMte"}],0:[function(require,module,exports) {
function cacheReplace(id, mod) {
  // replace the entry in the cache with the loaded wasm module
  module.bundle.cache[id] = null;
  module.bundle.register(id, mod);
}

Promise.all([
  require("./lib.rs").then(wasm => cacheReplace("jBO1", wasm))
]).then(() => {
  require("./entry.ts");
});

},{"./lib.rs":"jBO1","./entry.ts":"QAnz"}]},{},[0], null)
//# sourceMappingURL=entry.6857d20f.js.map