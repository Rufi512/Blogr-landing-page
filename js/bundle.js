(()=>{var t={678:t=>{"use strict";let e=0;t.exports={incr:()=>++e,decr:()=>--e,curr:()=>e}},954:t=>{"use strict";t.exports=(t,e,r="")=>{const s=/url\(['"]?#([\w:.-]+)['"]?\)/g,n=/#([\w:.-]+)/g;return e.match(s)&&(e=e.replace(s,(function(e,r){return t[r]?`url(#${t[r]})`:e}))),["href","xlink:href"].includes(r)&&e.match(n)&&(e=e.replace(n,(function(e,r){return t[r]?`#${t[r]}`:e}))),e}},212:t=>{"use strict";t.exports=(t,e,r)=>{const s=new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");return t=t.replace(s,(function(t,s,n){if(s.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))return s+n;const o=s.match(/#(\w+)/);return o&&r[o[1]]&&(s=s.replace(o[0],`#${r[o[1]]}`)),(s=s.replace(/^(\s*)/,"$1"+e+" "))+n}))}},947:function(t,e,r){"use strict";const{get:s,set:n,del:o}=r(175),i=r(212),a=r(954),c=r(678),l=[],u={},d=(t,e,r)=>{const{enableJs:s,disableUniqueIds:n,disableCssScoping:o}=e,d=(new DOMParser).parseFromString(r,"text/html"),p=d.querySelector("svg"),g=(()=>{if(l.length)return l;for(const t in document.head)t.startsWith("on")&&l.push(t);return l})(),h=u[t.getAttribute("data-id")]||new Set,v=t.getAttribute("data-id")||`svg-loader_${c.incr()}`,m={};n||Array.from(d.querySelectorAll("[id]")).forEach((t=>{const e=t.getAttribute("id"),r=`${e}_${c.incr()}`;t.setAttribute("id",r),m[e]=r})),Array.from(d.querySelectorAll("*")).forEach((t=>{if("script"===t.tagName){if(!s)return void t.remove();{const e=document.createElement("script");e.innerHTML=t.innerHTML,document.body.appendChild(e)}}for(let e=0;e<t.attributes.length;e++){const{name:r,value:n}=t.attributes[e],o=a(m,n,r);n!==o&&t.setAttribute(r,o),!g.includes(r.toLowerCase())||s?["href","xlink:href"].includes(r)&&n.startsWith("javascript")&&!s&&t.removeAttribute(r):t.removeAttribute(r)}if("style"===t.tagName&&!o){let e=i(t.innerHTML,`[data-id="${v}"]`,m);e=a(m,e),e!==t.innerHTML&&(t.innerHTML=e)}}));for(let e=0;e<p.attributes.length;e++){const{name:r,value:s}=p.attributes[e];t.getAttribute(r)&&!h.has(r)||(h.add(r),t.setAttribute(r,s))}u[v]=h,t.setAttribute("data-id",v),t.innerHTML=p.innerHTML},p={},g={},h=async t=>{const e=t.getAttribute("data-src"),r=t.getAttribute("data-cache"),i="enabled"===t.getAttribute("data-js"),a="disabled"===t.getAttribute("data-unique-ids"),c="disabled"===t.getAttribute("data-css-scoping"),l=await(async t=>{try{let e=await s(`loader_${t}`);if(!e)return;return e=JSON.parse(e),Date.now()<e.expiry?e.data:void o(`loader_${t}`)}catch(t){return}})(e),u="disabled"!==r,v=d.bind(this,t,{enableJs:i,disableUniqueIds:a,disableCssScoping:c});if(g[e]||u&&l){const t=g[e]||l;v(t)}else{if(p[e])return void setTimeout((()=>h(t)),20);p[e]=!0,fetch(e).then((t=>{if(!t.ok)throw Error(`Request for '${e}' returned ${t.status} (${t.statusText})`);return t.text()})).then((t=>{const s=t.toLowerCase().trim();if(!s.startsWith("<svg")&&!s.startsWith("<?xml"))throw Error(`Resource '${e}' returned an invalid SVG file`);u&&(async(t,e,r)=>{try{const s=parseInt(r,10);await n(`loader_${t}`,JSON.stringify({data:e,expiry:Date.now()+(Number.isNaN(s)?864e5:s)}))}catch(t){console.error(t)}})(e,t,r),g[e]=t,v(t)})).catch((t=>{console.error(t)})).finally((()=>{delete p[e]}))}};if(globalThis.IntersectionObserver){const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(h(e.target),t.unobserve(e.target))}))}),{rootMargin:"1200px"})}const v=[];function m(){Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((t=>{-1===v.indexOf(t)&&(v.push(t),"lazy"===t.getAttribute("data-loading")?undefined.observe(t):h(t))}))}let b=!1;if(globalThis.addEventListener){const t=setInterval((()=>{m()}),100);globalThis.addEventListener("DOMContentLoaded",(()=>{clearInterval(t),m(),(()=>{if(b)return;b=!0,new MutationObserver((t=>{t.some((t=>Array.from(t.addedNodes).some((t=>t.nodeType===Node.ELEMENT_NODE&&(t.getAttribute("data-src")&&!t.getAttribute("data-id")||t.querySelector("svg[data-src]:not([data-id])"))))))&&m(),t.forEach((t=>{"attributes"===t.type&&h(t.target)}))})).observe(document.documentElement,{attributeFilter:["data-src"],attributes:!0,childList:!0,subtree:!0})})()}))}},805:(t,e,r)=>{var s={"./bg-pattern-circles.svg":839,"./bg-pattern-intro-desktop.svg":57,"./bg-pattern-intro-mobile.svg":958,"./icon-arrow-dark.svg":989,"./icon-arrow-light.svg":510,"./icon-close.svg":434,"./icon-hamburger.svg":100,"./illustration-editor-desktop.svg":50,"./illustration-editor-mobile.svg":706,"./illustration-laptop-desktop.svg":666,"./illustration-laptop-mobile.svg":699,"./illustration-phones.svg":773,"./logo.svg":95};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id=805},779:(t,e,r)=>{var s={"./favicon-32x32.png":971};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id=779},839:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/bg-pattern-circles.svg"},57:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/bg-pattern-intro-desktop.svg"},958:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/bg-pattern-intro-mobile.svg"},989:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/icon-arrow-dark.svg"},510:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/icon-arrow-light.svg"},434:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/icon-close.svg"},100:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/icon-hamburger.svg"},50:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/illustration-editor-desktop.svg"},706:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/illustration-editor-mobile.svg"},666:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/illustration-laptop-desktop.svg"},699:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/illustration-laptop-mobile.svg"},773:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/illustration-phones.svg"},95:(t,e,r)=>{"use strict";t.exports=r.p+"/static/icons/logo.svg"},971:(t,e,r)=>{"use strict";t.exports=r.p+"/static/images/favicon-32x32.png"},175:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Store:()=>s,get:()=>i,set:()=>a,del:()=>c,clear:()=>l,keys:()=>u});class s{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise(((r,s)=>{const n=indexedDB.open(t,1);n.onerror=()=>s(n.error),n.onsuccess=()=>r(n.result),n.onupgradeneeded=()=>{n.result.createObjectStore(e)}}))}_withIDBStore(t,e){return this._dbp.then((r=>new Promise(((s,n)=>{const o=r.transaction(this.storeName,t);o.oncomplete=()=>s(),o.onabort=o.onerror=()=>n(o.error),e(o.objectStore(this.storeName))}))))}}let n;function o(){return n||(n=new s),n}function i(t,e=o()){let r;return e._withIDBStore("readonly",(e=>{r=e.get(t)})).then((()=>r.result))}function a(t,e,r=o()){return r._withIDBStore("readwrite",(r=>{r.put(e,t)}))}function c(t,e=o()){return e._withIDBStore("readwrite",(e=>{e.delete(t)}))}function l(t=o()){return t._withIDBStore("readwrite",(t=>{t.clear()}))}function u(t=o()){const e=[];return t._withIDBStore("readonly",(t=>{(t.openKeyCursor||t.openCursor).call(t).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}})).then((()=>e))}}},e={};function r(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../"})(),(()=>{"use strict";r(947);function t(t){return t.keys().map(t)}t(r(779)),t(r(805));var e=null;const s=document.getElementById("active-nav"),n=document.querySelectorAll(".container-elements");window.showOptions=t=>{const r=document.getElementById(`elements-nav-${t}`);if(Array.from(n).map((t=>{t.parentElement.children[0].children[1].classList.remove("active-container-arrow"),t.parentElement.children[0].children[0].classList.remove("show-active-span"),t.classList.remove("show-container-elements","container-elements-active-desktop")})),t&&(r.classList.add("show-container-elements","container-elements-active-desktop"),r.parentElement.children[0].children[0].classList.add("show-active-span"),r.parentElement.children[0].children[1].classList.add("active-container-arrow")),r.classList.contains("show-container-elements")&&r.classList.contains("container-elements-active-desktop")&&e===t)return r.classList.remove("show-container-elements","container-elements-active-desktop"),r.parentElement.children[0].children[0].classList.remove("show-active-span"),r.parentElement.children[0].children[1].classList.remove("active-container-arrow"),e=null;e=t},s.addEventListener("input",(t=>{t.target.checked?document.body.style.overflow="hidden":document.body.style.overflow="auto"})),window.addEventListener("resize",(t=>{t.target.innerWidth>1023&&(s.checked=!1,document.body.style.overflow="auto")}))})()})();