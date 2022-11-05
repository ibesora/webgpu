(()=>{"use strict";var e={562:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'.grid {\n  display: grid;\n  height: calc(100vh - 20px);\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 100%;\n}\n.grid1 {\n  display: grid;\n  height: 35px;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 35px;\n}\n.item1 {\n  grid-column: 1/3;\n}\n.item2 {\n  grid-column: 3/9;\n}\n.item3 {\n  grid-column: 1/4;\n}\n.item4 {\n  grid-column: 4/8;\n}\n\nselect,\ninput[type="text"] {\n  width: 100%;\n  height: 22px;\n  box-sizing: border-box;\n}\n',"",{version:3,sources:["webpack://./src/site.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,0BAA0B;EAC1B,qCAAqC;EACrC,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,YAAY;EACZ,qCAAqC;EACrC,wBAAwB;AAC1B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB",sourcesContent:['.grid {\n  display: grid;\n  height: calc(100vh - 20px);\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 100%;\n}\n.grid1 {\n  display: grid;\n  height: 35px;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 35px;\n}\n.item1 {\n  grid-column: 1/3;\n}\n.item2 {\n  grid-column: 3/9;\n}\n.item3 {\n  grid-column: 1/4;\n}\n.item4 {\n  grid-column: 4/8;\n}\n\nselect,\ninput[type="text"] {\n  width: 100%;\n  height: 22px;\n  box-sizing: border-box;\n}\n'],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e,t,n=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const r=e.createBuffer({size:t.byteLength,usage:n,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(t),r.unmap(),r},t=()=>{return e=void 0,t=void 0,r=function*(){var e;const t=(()=>{let e="Great, your current browser supports WebGPU!";navigator.gpu||(e='Your current browser does not support WebGPU! Make sure you are on a system \n                  with WebGPU enabled. Currently, WebGPU is supported in  \n                  <a href="https://www.google.com/chrome/canary/">Chrome canary</a>\n                  with the flag "enable-unsafe-webgpu" enabled. See the \n                  <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> \n                  Implementation Status</a> page for more details.   \n                  You can also use your regular Chrome to try a pre-release version of WebGPU via\n                  <a href="https://developer.chrome.com/origintrials/#/view_trial/118219490218475521">Origin Trial</a>.                \n              ');const t=document.getElementById("canvas-webgpu");if(t){const n=document.getElementsByClassName("item2")[0];function r(){t.width=n.offsetWidth,t.height=n.offsetHeight}t.width=n.offsetWidth,t.height=n.offsetHeight,window.addEventListener("resize",r)}return e})();if(t.includes("Your current browser does not support WebGPU!"))throw console.log(t),"Your current browser does not support WebGPU!";const n=document.getElementById("canvas-webgpu"),r=yield null===(e=navigator.gpu)||void 0===e?void 0:e.requestAdapter(),o=yield null==r?void 0:r.requestDevice(),a=n.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();return a.configure({device:o,format:i,alphaMode:"opaque"}),{device:o,canvas:n,format:i,context:a}},new((n=void 0)||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r},r="// vertext shader\n\nstruct Output {\n    @builtin(position) Position : vec4<f32>,\n    @location(0) vColor : vec4<f32>,\n};\n\n@vertex\nfn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {\n    var output: Output;\n    output.Position = pos;\n    output.vColor = color;\n    return output;\n}\n\n// fragment shader\n\n@fragment\nfn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {\n    return vColor;\n}";var o=n(379),a=n.n(o),i=n(795),s=n.n(i),c=n(569),u=n.n(c),l=n(565),d=n.n(l),p=n(216),f=n.n(p),m=n(589),v=n.n(m),g=n(562),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),a()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const A=()=>{return n=void 0,o=void 0,i=function*(){const n=yield t(),o=n.device,a=new Float32Array([-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5]),i=new Float32Array([1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1]),s=e(o,a),c=e(o,i),u=o.createRenderPipeline({layout:"auto",vertex:{module:o.createShaderModule({code:r}),entryPoint:"vs_main",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,format:"float32x2",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:o.createShaderModule({code:r}),entryPoint:"fs_main",targets:[{format:n.format}]},primitive:{topology:"triangle-list"}}),l=o.createCommandEncoder(),d=n.context.getCurrentTexture().createView(),p=l.beginRenderPass({colorAttachments:[{view:d,clearValue:{r:.2,g:.247,b:.314,a:1},loadOp:"clear",storeOp:"store"}]});p.setPipeline(u),p.setVertexBuffer(0,s),p.setVertexBuffer(1,c),p.draw(6),p.end(),o.queue.submit([l.finish()])},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,s)}c((i=i.apply(n,o||[])).next())}));var n,o,a,i};A(),window.addEventListener("resize",(function(){A()}))})()})();
//# sourceMappingURL=main.bundle.js.map