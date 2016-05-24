const loggerMin = `"use strict";function getType(e){switch(Object.prototype.toString.call(e)){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Null]":return"null";case"[object Number]":return e!==e?"NaN":"number"}return typeof e}function assignTypes(e){return JSON.stringify(e.map(function(e){var t=getType(e);switch(t){case"object":case"array":e=JSON.stringify(e),e=util.inspect(e,inspectOptions),e=e.substring(1,e.length-1);break;case"undefined":case"null":case"NaN":return{type:t}}return{type:t,output:e}}))}var _this=this,util=require("util"),inspectOptions={depth:null};if(console&&console.log){var originalLog_1=console.log;console.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];(new Error).stack;setTimeout(originalLog_1.apply(_this,[assignTypes(e)]))}}`;
export default loggerMin;
