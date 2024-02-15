"use strict";var c=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var u=c(function(j,s){
var i=require('@stdlib/array-base-arraylike2object/dist');function l(e,t,a){var r;for(r=0;r<e.length;r++)if(t.call(a,e[r],r,e))return!1;return!0}function f(e,t,a){var r,o,n;for(r=e.data,o=e.accessors[0],n=0;n<r.length;n++)if(t.call(a,o(r,n),n,r))return!1;return!0}function v(e,t,a){var r=i(e);return r.accessorProtocol?f(r,t,a):l(e,t,a)}s.exports=v
});var b=u();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
