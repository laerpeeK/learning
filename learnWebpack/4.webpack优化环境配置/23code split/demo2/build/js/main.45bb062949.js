!function(e){function n(n){for(var t,c,l=n[0],i=n[1],f=n[2],p=0,s=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(a&&a(n);s.length;)s.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var e,n=0;n<u.length;n++){for(var r=u[n],t=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(t=!1)}t&&(u.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},o={1:0,2:0},u=[];function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var a=i;u.push([2,0]),r()}([,function(e,n,r){"use strict";r.r(n),r.d(n,"mul",(function(){return u})),r.d(n,"count",(function(){return c}));var t=r(0),o=r.n(t);function u(e,n){return e*n}function c(e,n){return e-n}console.log(o.a)},function(e,n,r){"use strict";r.r(n);var t=r(1),o=r(0),u=r.n(o);console.log(Object(t.mul)(2,2)),console.log(function(...e){return e.reduce((e,n)=>e+n,0)}(1,2,3,4,5)),console.log(u.a)}]);