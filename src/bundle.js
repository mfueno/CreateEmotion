/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license\nPapa Parse\nv5.4.1\nhttps://github.com/mholt/PapaParse\nLicense: MIT\n*/\n!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){\"use strict\";var f=\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=f.IS_PAPA_WORKER||!1,a={},u=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;J(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!J(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob([\"var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; \",\"(\",i,\")();\"],{type:\"text/javascript\"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=u++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=J(t.step),t.chunk=J(t.chunk),t.complete=J(t.complete),t.error=J(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,\"string\"==typeof e?(e=function(e){if(65279===e.charCodeAt(0))return e.slice(1);return e}(e),n=t.download?new l(t):new p(t)):!0===e.readable&&J(e.read)&&J(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=\",\",y=\"\\r\\n\",s='\"',a=s+s,r=!1,i=null,o=!1;!function(){if(\"object\"!=typeof t)return;\"string\"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);(\"boolean\"==typeof t.quotes||\"function\"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);\"boolean\"!=typeof t.skipEmptyLines&&\"string\"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);\"string\"==typeof t.newline&&(y=t.newline);\"string\"==typeof t.quoteChar&&(s=t.quoteChar);\"boolean\"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error(\"Option columns is empty\");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);(\"boolean\"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\\-@\\t\\r].*$/)}();var u=new RegExp(Q(s),\"g\");\"string\"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,r);if(\"object\"==typeof e[0])return h(i||Object.keys(e[0]),e,r)}else if(\"object\"==typeof e)return\"string\"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||i),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:\"object\"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||\"object\"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],r);throw new Error(\"Unable to serialize unrecognized input\");function h(e,t,r){var i=\"\";\"string\"==typeof e&&(e=JSON.parse(e)),\"string\"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var u=n?e.length:t[o].length,h=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(h=\"greedy\"===r?\"\"===t[o].join(\"\").trim():1===t[o].length&&0===t[o][0].length),\"greedy\"===r&&n){for(var d=[],l=0;l<u;l++){var c=s?e[l]:l;d.push(t[o][c])}h=\"\"===d.join(\"\").trim()}if(!h){for(var p=0;p<u;p++){0<p&&!f&&(i+=m);var g=n&&s?e[p]:p;i+=v(t[o][g],p)}o<t.length-1&&(!r||0<u&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return\"\";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;o&&\"string\"==typeof e&&o.test(e)&&(e=\"'\"+e,r=!0);var i=e.toString().replace(u,a);return(r=r||!0===n||\"function\"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||\" \"===i.charAt(0)||\" \"===i.charAt(i.length-1))?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK=\"\\ufeff\",b.BAD_DELIMITERS=[\"\\r\",\"\\n\",'\"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=\",\",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},u=[];return this.each(function(e){if(!(\"INPUT\"===d(this).prop(\"tagName\").toUpperCase()&&\"file\"===d(this).attr(\"type\").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)u.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==u.length){var e,t,r,i,n=u[0];if(J(o.before)){var s=o.before(n.file,n.inputElem);if(\"object\"==typeof s){if(\"abort\"===s.action)return e=\"AbortError\",t=n.file,r=n.inputElem,i=s.reason,void(J(o.error)&&o.error({name:e},t,r,i));if(\"skip\"===s.action)return void h();\"object\"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if(\"skip\"===s)return void h()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){J(a)&&a(e,n.file,n.inputElem),h()},b.parse(n.file,n.instanceConfig)}else J(o.complete)&&o.complete()}function h(){u.splice(0,1),e()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=\"\",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&J(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine=\"\";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(J(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!J(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){J(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)),i.open(this._config.downloadRequestBody?\"POST\":\"GET\",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader(\"Range\",\"bytes=\"+this._start+\"-\"+r)}try{i.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader(\"Content-Range\");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf(\"/\")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),h.call(this,e);var s=\"undefined\"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;h.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=r.substring(0,t),r=r.substring(t)):(e=r,r=\"\"),this._finished=!r,this.parseChunk(e)}}}function g(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(\"data\",this._streamData),this._input.on(\"end\",this._streamEnd),this._input.on(\"error\",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push(\"string\"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),i=!0,this._streamData(\"\")},this),this._streamCleanUp=v(function(){this._input.removeListener(\"data\",this._streamData),this._input.removeListener(\"end\",this._streamEnd),this._input.removeListener(\"error\",this._streamError)},this)}function r(m){var a,o,u,i=Math.pow(2,53),n=-i,s=/^\\s*-?(\\d+\\.?|\\.\\d+|\\d+\\.\\d+)([eE][-+]?\\d+)?\\s*$/,h=/^((\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z))|(\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z))|(\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)))$/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(J(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;r+=e.data.length,m.preview&&r>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return\"greedy\"===m.skipEmptyLines?\"\"===e.join(\"\").trim():1===e.length&&0===e[0].length}function g(){return c&&u&&(k(\"Delimiter\",\"UndetectableDelimiter\",\"Unable to auto-detect delimiting character; defaulted to '\"+b.DefaultDelimiter+\"'\"),u=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){J(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var r,i=m.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];m.header&&(n=r>=l.length?\"__parsed_extra\":l[r]),m.transform&&(s=m.transform(s,n)),s=v(n,s),\"__parsed_extra\"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>l.length?k(\"FieldMismatch\",\"TooManyFields\",\"Too many fields: expected \"+l.length+\" fields but parsed \"+r,f+t):r<l.length&&k(\"FieldMismatch\",\"TooFewFields\",\"Too few fields: expected \"+l.length+\" fields but parsed \"+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return r=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[r]&&(m.dynamicTyping[r]=m.dynamicTypingFunction(r)),!0===(m.dynamicTyping[r]||m.dynamicTyping)?\"true\"===t||\"TRUE\"===t||\"false\"!==t&&\"FALSE\"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):h.test(t)?new Date(t):\"\"===t?null:t):t;var r}function k(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(e,t,r){var i=m.quoteChar||'\"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(Q(t)+\"([^]*?)\"+Q(t),\"gm\"),i=(e=e.replace(r,\"\")).split(\"\\r\"),n=e.split(\"\\n\"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return\"\\n\";for(var a=0,o=0;o<i.length;o++)\"\\n\"===i[o][0]&&a++;return a>=i.length/2?\"\\r\\n\":\"\\r\"}(e,i)),u=!1,m.delimiter)J(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,u;n=n||[\",\",\"\\t\",\"|\",\";\",b.RECORD_SEP,b.UNIT_SEP];for(var h=0;h<n.length;h++){var f=n[h],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(r&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===u||u<l)&&1.99<l&&(a=d,s=f,u=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(u=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=J(m.chunk)?\"\":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,J(m.complete)&&m.complete(c),a=\"\"}}function Q(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function E(j){var z,M=(j=j||{}).delimiter,P=j.newline,U=j.comments,q=j.step,N=j.preview,B=j.fastMode,K=z=void 0===j.quoteChar||null===j.quoteChar?'\"':j.quoteChar;if(void 0!==j.escapeChar&&(K=j.escapeChar),(\"string\"!=typeof M||-1<b.BAD_DELIMITERS.indexOf(M))&&(M=\",\"),U===M)throw new Error(\"Comment character same as delimiter\");!0===U?U=\"#\":(\"string\"!=typeof U||-1<b.BAD_DELIMITERS.indexOf(U))&&(U=!1),\"\\n\"!==P&&\"\\r\"!==P&&\"\\r\\n\"!==P&&(P=\"\\n\");var W=0,H=!1;this.parse=function(i,t,r){if(\"string\"!=typeof i)throw new Error(\"Input must be a string\");var n=i.length,e=M.length,s=P.length,a=U.length,o=J(q),u=[],h=[],f=[],d=W=0;if(!i)return L();if(j.header&&!t){var l=i.split(P)[0].split(M),c=[],p={},g=!1;for(var _ in l){var m=l[_];J(j.transformHeader)&&(m=j.transformHeader(m,_));var y=m,v=p[m]||0;for(0<v&&(g=!0,y=m+\"_\"+v),p[m]=v+1;c.includes(y);)y=y+\"_\"+v;c.push(y)}if(g){var k=i.split(P);k[0]=c.join(M),i=k.join(P)}}if(B||!1!==B&&-1===i.indexOf(z)){for(var b=i.split(P),E=0;E<b.length;E++){if(f=b[E],W+=f.length,E!==b.length-1)W+=P.length;else if(r)return L();if(!U||f.substring(0,a)!==U){if(o){if(u=[],I(f.split(M)),F(),H)return L()}else I(f.split(M));if(N&&N<=E)return u=u.slice(0,N),L(!0)}}return L()}for(var w=i.indexOf(M,W),R=i.indexOf(P,W),C=new RegExp(Q(K)+Q(z),\"g\"),S=i.indexOf(z,W);;)if(i[W]!==z)if(U&&0===f.length&&i.substring(W,W+a)===U){if(-1===R)return L();W=R+s,R=i.indexOf(P,W),w=i.indexOf(M,W)}else if(-1!==w&&(w<R||-1===R))f.push(i.substring(W,w)),W=w+e,w=i.indexOf(M,W);else{if(-1===R)break;if(f.push(i.substring(W,R)),D(R+s),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0)}else for(S=W,W++;;){if(-1===(S=i.indexOf(z,S+1)))return r||h.push({type:\"Quotes\",code:\"MissingQuotes\",message:\"Quoted field unterminated\",row:u.length,index:W}),T();if(S===n-1)return T(i.substring(W,S).replace(C,z));if(z!==K||i[S+1]!==K){if(z===K||0===S||i[S-1]!==K){-1!==w&&w<S+1&&(w=i.indexOf(M,S+1)),-1!==R&&R<S+1&&(R=i.indexOf(P,S+1));var O=A(-1===R?w:Math.min(w,R));if(i.substr(S+1+O,e)===M){f.push(i.substring(W,S).replace(C,z)),i[W=S+1+O+e]!==z&&(S=i.indexOf(z,W)),w=i.indexOf(M,W),R=i.indexOf(P,W);break}var x=A(R);if(i.substring(S+1+x,S+1+x+s)===P){if(f.push(i.substring(W,S).replace(C,z)),D(S+1+x+s),w=i.indexOf(M,W),S=i.indexOf(z,W),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0);break}h.push({type:\"Quotes\",code:\"InvalidQuotes\",message:\"Trailing quote on quoted field is malformed\",row:u.length,index:W}),S++}}else S++}return T();function I(e){u.push(e),d=W}function A(e){var t=0;if(-1!==e){var r=i.substring(S+1,e);r&&\"\"===r.trim()&&(t=r.length)}return t}function T(e){return r||(void 0===e&&(e=i.substring(W)),f.push(e),W=n,I(f),o&&F()),L()}function D(e){W=e,I(f),f=[],R=i.indexOf(P,W)}function L(e){return{data:u,errors:h,meta:{delimiter:M,linebreak:P,aborted:H,truncated:!!e,cursor:d+(t||0)}}}function F(){q(L()),u=[],h=[]}},this.abort=function(){H=!0},this.getCharIndex=function(){return W}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(J(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else J(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=a[e];J(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function y(){throw new Error(\"Not implemented.\")}function w(e){if(\"object\"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function J(e){return\"function\"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if(\"string\"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(h.prototype)).constructor=g,b});\n\n//# sourceURL=webpack:///./node_modules/papaparse/papaparse.min.js?");

/***/ }),

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Card = /** @class */ (function () {\n    function Card(cardId, option, clickCallback) {\n        var _this = this;\n        this.cardElement = document.createElement('div');\n        this.cardElement.id = \"card\".concat(cardId);\n        this.cardElement.classList.add('card');\n        this.clickCallback = clickCallback;\n        this.cardElement.onclick = function () { return _this.handleCardClick(cardId); };\n        this.cardElement.innerHTML = \"\\n      <div class=\\\"title\\\">\\n        \".concat(option.title, \"\\n      </div>\\n      <div class=\\\"text\\\">\\n        \").concat(option.text, \"\\n      </div>\\n    \");\n    }\n    Card.prototype.getCardElement = function () {\n        return this.cardElement;\n    };\n    Card.prototype.handleCardClick = function (cardId) {\n        // Card がクリックされたときの処理\n        if (this.clickCallback) {\n            this.clickCallback(cardId);\n        }\n    };\n    return Card;\n}());\nexports[\"default\"] = Card;\n\n\n//# sourceURL=webpack:///./src/Card.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/Card.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar dialog_1 = __webpack_require__(/*! ./dialog */ \"./src/dialog.ts\");\nvar csvLoader_1 = __webpack_require__(/*! ./csvLoader */ \"./src/csvLoader.ts\");\n/// <reference types=\"bootstrap\" />\nvar inLab = true;\nvar count = 0;\nvar senseOfValues = [];\nfunction updateHeader() {\n    var headerElement = document.getElementById('header');\n    if (headerElement) {\n        count += 1;\n        var headerText = \"\".concat(inLab ? '実験室' : '社会', \" - (\").concat(count, \"/5)\");\n        headerElement.textContent = headerText;\n    }\n}\nfunction addEmotion(emotion) {\n    var index = senseOfValues.findIndex(function (i) { return i.emotion.id === emotion.id; });\n    if (index === -1) {\n        senseOfValues.push({ emotion: emotion, count: 1 });\n    }\n    else {\n        var newCount = senseOfValues[index].count + 1;\n        senseOfValues[index] = { emotion: emotion, count: newCount };\n    }\n}\nfunction removeEmotion(id) {\n    var index = senseOfValues.findIndex(function (i) { return i.emotion.id === id; });\n    if (index !== -1) {\n        var currentCount = senseOfValues[index].count;\n        if (currentCount === 1) {\n            senseOfValues.splice(index, 1);\n        }\n        else {\n            senseOfValues[index].count += 1;\n        }\n    }\n}\nfunction updateSenseOfValues(option) {\n    var get = (0, utils_1.getEmotion)(option.emotions.get);\n    if (get) {\n        addEmotion(get);\n    }\n    var lost = option.emotions.lost;\n    if (lost !== '') {\n        removeEmotion(lost);\n    }\n    displaySenseOfValues();\n}\nfunction displaySenseOfValues() {\n    var chipContainer = document.getElementById('chipContainer');\n    if (chipContainer) {\n        chipContainer.innerHTML = senseOfValues\n            .map(function (i) {\n            return \"<div class=\\\"chip\".concat(i.count < 3 ? i.count : 3, \"\\\">\").concat(i.emotion.name, \" \").concat(i.count > 1 ? \"+\".concat(i.count - 1) : '', \"</div>\");\n        })\n            .join('');\n    }\n}\nfunction updateEvent(event) {\n    var eventElement = document.getElementById('event');\n    if (eventElement) {\n        eventElement.dataset.eventId = event.id;\n        var eventTitleElement = eventElement.querySelector('.eventTitle');\n        if (eventTitleElement) {\n            eventTitleElement.textContent = event.title;\n        }\n        var eventTextElement = eventElement.querySelector('.eventText');\n        if (eventTextElement) {\n            eventTextElement.textContent = event.text;\n        }\n    }\n}\nfunction updateCards(event) {\n    var newOptions = (0, utils_1.getOptions)(event);\n    var cardContainer = document.getElementById('cardContainer');\n    if (cardContainer) {\n        cardContainer.innerHTML = '';\n    }\n    newOptions.map(function (option) {\n        var card = new Card_1.default(option.id, option, handleCardClick);\n        var cardContainer = document.getElementById('cardContainer');\n        if (cardContainer) {\n            cardContainer.appendChild(card.getCardElement());\n        }\n    });\n}\nfunction handleCardClick(optionId) {\n    var cardElement = document.getElementById(\"card\".concat(optionId));\n    if (cardElement) {\n        var selectedOption = csvLoader_1.options.find(function (option) { return option.id === optionId; });\n        var resultText = selectedOption.reslutText;\n        var resultEmotion = (0, utils_1.getEmotion)(selectedOption.emotions.get);\n        (0, dialog_1.showResultDialog)(resultText, resultEmotion);\n        var eventType = inLab ? '1' : '2';\n        var newEvent = (0, utils_1.getRandomEvent)(eventType);\n        updateSenseOfValues(csvLoader_1.options.find(function (option) { return option.id === optionId; }));\n        updateHeader();\n        updateEvent(newEvent);\n        updateCards(newEvent);\n    }\n}\nfunction initialize() {\n    var event = (0, utils_1.getRandomEvent)('1');\n    updateHeader();\n    updateEvent(event);\n    updateCards(event);\n    senseOfValues = [];\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0, csvLoader_1.readCsvFiles)();\n    initialize();\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/csvLoader.ts":
/*!**************************!*\
  !*** ./src/csvLoader.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.readCsvFiles = exports.emotions = exports.options = exports.events = void 0;\nvar csv_1 = __webpack_require__(/*! ./static/csv */ \"./src/static/csv.ts\");\nvar Papa = __importStar(__webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\"));\nexports.events = [];\nexports.options = [];\nexports.emotions = [];\nvar readCsvFiles = function () {\n    // event.csvの読み込み\n    Papa.parse(csv_1.eventCsvData, {\n        skipEmptyLines: true,\n        complete: function (result) {\n            result.data.forEach(function (row) {\n                var id = row[0];\n                var type = row[1];\n                var title = row[2];\n                var text = row[3];\n                var options = [row[4], row[6], row[8]];\n                var event = { id: id, type: type, title: title, text: text, options: options };\n                exports.events.push(event);\n            });\n        },\n        error: function (error) {\n            console.error('event.csvの読み込みでエラーが発生しました:', error.message);\n        }\n    });\n    // option.csvの読み込み\n    Papa.parse(csv_1.optionCsvData, {\n        skipEmptyLines: true,\n        complete: function (result) {\n            result.data.forEach(function (row) {\n                var id = row[0];\n                var title = row[1];\n                var text = row[2];\n                var reslutText = row[3];\n                var emotions = {\n                    need: row[4],\n                    get: row[6],\n                    lost: row[8]\n                };\n                var option = { id: id, title: title, text: text, reslutText: reslutText, emotions: emotions };\n                exports.options.push(option);\n            });\n        },\n        error: function (error) {\n            console.error('option.csvの読み込みでエラーが発生しました:', error.message);\n        }\n    });\n    // emotion.csvの読み込み\n    Papa.parse(csv_1.emotionCsvData, {\n        skipEmptyLines: true,\n        complete: function (result) {\n            result.data.forEach(function (row) {\n                var id = row[0];\n                var name = row[1];\n                var emotion = { id: id, name: name };\n                exports.emotions.push(emotion);\n            });\n        },\n        error: function (error) {\n            console.error('emotion.csvの読み込みでエラーが発生しました:', error.message);\n        }\n    });\n};\nexports.readCsvFiles = readCsvFiles;\n\n\n//# sourceURL=webpack:///./src/csvLoader.ts?");

/***/ }),

/***/ "./src/dialog.ts":
/*!***********************!*\
  !*** ./src/dialog.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showResultDialog = void 0;\n// ダイアログを表示する関数\nfunction showResultDialog(message, emotion) {\n    var _a;\n    // Bootstrap Modalをトリガー\n    $('#resultDialog').modal('show');\n    // モーダル内のメッセージを設定\n    $('#resultMessage').text(message);\n    $('#resultEmotion').text((_a = emotion === null || emotion === void 0 ? void 0 : emotion.name) !== null && _a !== void 0 ? _a : '');\n    $('#resultEmotionMessage').text(emotion ? 'を獲得した！' : '何も獲得できなかった');\n}\nexports.showResultDialog = showResultDialog;\n\n\n//# sourceURL=webpack:///./src/dialog.ts?");

/***/ }),

/***/ "./src/static/csv.ts":
/*!***************************!*\
  !*** ./src/static/csv.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n// Remark: ヘッダ行は手で削除する\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.emotionCsvData = exports.optionCsvData = exports.eventCsvData = void 0;\nexports.eventCsvData = \"1,1,\\u86C7\\u306B\\u51FA\\u4F1A\\u3046,\\u76EE\\u306E\\u524D\\u306B\\u86C7\\u304C\\u73FE\\u308C\\u305F\\uFF01,1,\\u4F55\\u3082\\u3057\\u306A\\u3044,2,\\u9003\\u3052\\u308B,3,\\u3064\\u3064\\u3044\\u3066\\u307F\\u308B\";\nexports.optionCsvData = \"1,\\u4F55\\u3082\\u3057\\u306A\\u3044,\\u86C7\\u306F\\u52D5\\u7269\\u3002\\u732B\\u3082\\u52D5\\u7269\\u3002,\\u86C7\\u306F\\u3042\\u306A\\u305F\\u306B\\u5DFB\\u304D\\u4ED8\\u3044\\u3066\\u304D\\u305F\\u3002\\u304A\\u305E\\u307E\\u3057\\u3044\\u611F\\u899A\\u3060\\u3002,,,2,\\u6050\\u6016,,\\n2,\\u9003\\u3052\\u308B,\\u6016\\u3044\\uFF01\\u9003\\u3052\\u3088\\u3046\\uFF01,\\u5371\\u6A5F\\u306F\\u53BB\\u3063\\u305F\\u3002\\u3053\\u308C\\u3067\\u5B89\\u5FC3\\u3060\\u3002,2,\\u6050\\u6016,5,\\u5B89\\u5FC3\\u611F,,\\n3,\\u3064\\u3064\\u3044\\u3066\\u307F\\u308B,\\u5909\\u308F\\u3063\\u305F\\u5F62\\u72B6\\u306E\\u751F\\u304D\\u7269\\u3060\\u3002,\\u86C7\\u306F\\u3042\\u306A\\u305F\\u306B\\u565B\\u307F\\u3064\\u3044\\u305F\\uFF01\\u3053\\u3093\\u3061\\u304F\\u3057\\u3087\\u3046\\uFF01,3,\\u597D\\u5947\\u5FC3,6,\\u6012\\u308A,,\";\nexports.emotionCsvData = \"1,\\u60B2\\u3057\\u3055\\n2,\\u6050\\u6016\\n3,\\u597D\\u5947\\u5FC3\\n4,\\u697D\\u3057\\u3055\\n5,\\u5B89\\u5FC3\\u611F\\n6,\\u6012\\u308A\\n7,\\n8,\\n9,\\n10,\\n11,\\n12,\\n13,\\n14,\\n15,\\n16,\\n17,\\n18,\\n19,\\n20,\\n21,\\n22,\";\n\n\n//# sourceURL=webpack:///./src/static/csv.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getEmotion = exports.getOptions = exports.getRandomEvent = void 0;\nvar csvLoader_1 = __webpack_require__(/*! ./csvLoader */ \"./src/csvLoader.ts\");\nfunction getRandomEvent(type) {\n    var selectedEvents = csvLoader_1.events.filter(function (event) { return event.type === type; });\n    var randomIndex = Math.floor(Math.random() * selectedEvents.length);\n    return selectedEvents[randomIndex];\n}\nexports.getRandomEvent = getRandomEvent;\nfunction getOptions(event) {\n    return csvLoader_1.options.filter(function (option) { return event.options.includes(option.id); });\n}\nexports.getOptions = getOptions;\nfunction getEmotion(id) {\n    return csvLoader_1.emotions.find(function (emotion) { return emotion.id === id; });\n}\nexports.getEmotion = getEmotion;\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;