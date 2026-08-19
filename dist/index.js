"use strict";var c=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var u=c(function(j,s){
var i=require('@stdlib/array-base-arraylike2object/dist');function l(t,e,a){var r;for(r=0;r<t.length;r++)if(e.call(a,t[r],r,t))return!1;return!0}function f(t,e,a){var r,o,n;for(r=t.data,o=t.accessors[0],n=0;n<r.length;n++)if(e.call(a,o(r,n),n,r))return!1;return!0}function v(t,e,a){var r=i(t);return r.accessorProtocol?f(r,e,a):l(t,e,a)}s.exports=v
});var b=u();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
