(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{56016:function(e,t,n){Promise.resolve().then(n.t.bind(n,52445,23)),Promise.resolve().then(n.bind(n,87407)),Promise.resolve().then(n.t.bind(n,85935,23)),Promise.resolve().then(n.t.bind(n,86087,23))},87407:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return y}});var r=n(57437),o=n(2265),a=["light","dark"],l="(prefers-color-scheme: dark)",c="undefined"==typeof window,i=o.createContext(void 0),s=e=>o.useContext(i)?e.children:o.createElement(d,{...e}),u=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:c=!0,storageKey:s="theme",themes:d=u,defaultTheme:y=r?"system":"light",attribute:b="data-theme",value:v,children:g,nonce:_}=e,[E,S]=o.useState(()=>m(s,y)),[w,C]=o.useState(()=>m(s)),M=v?Object.values(v):d,I=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=p());let o=v?v[t]:t,l=n?h():null,i=document.documentElement;if("class"===b?(i.classList.remove(...M),o&&i.classList.add(o)):o?i.setAttribute(b,o):i.removeAttribute(b),c){let e=a.includes(y)?y:null,n=a.includes(t)?t:e;i.style.colorScheme=n}null==l||l()},[]),k=o.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),T=o.useCallback(e=>{C(p(e)),"system"===E&&r&&!t&&I("system")},[E,t]);o.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),o.useEffect(()=>{let e=e=>{e.key===s&&k(e.newValue||y)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),o.useEffect(()=>{I(null!=t?t:E)},[t,E]);let L=o.useMemo(()=>({theme:E,setTheme:k,forcedTheme:t,resolvedTheme:"system"===E?w:E,themes:r?[...d,"system"]:d,systemTheme:r?w:void 0}),[E,k,t,w,r,d]);return o.createElement(i.Provider,{value:L},o.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:c,storageKey:s,themes:d,defaultTheme:y,attribute:b,value:v,children:g,attrs:M,nonce:_}),g)},f=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:c,enableColorScheme:i,defaultTheme:s,value:u,attrs:d,nonce:f}=e,m="system"===s,h="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),p=i?(a.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=u?u[e]:e,l=t?e+"|| ''":"'".concat(o,"'"),c="";return i&&n&&!t&&a.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||o?c+="c.add(".concat(l,")"):c+="null":o&&(c+="d[s](n,".concat(l,")")),c},b=t?"!function(){".concat(h).concat(y(t),"}()"):c?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}").concat(m?"":"else{"+y(s,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}else{").concat(y(s,!1,!1),";}").concat(p,"}catch(t){}}();");return o.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:b}})}),m=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");function y(e){let{children:t,...n}=e;return(0,r.jsx)(s,{...n,children:t})}},13313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),c=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var i;(null==n?void 0:null==(i=n.tagName)?void 0:i.toLowerCase())===e&&c.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=c.length;t<n;t++)if(a(c[t],e))return c.splice(t,1),!1;return!0});c.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(l-c.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return b},default:function(){return g}});let r=n(86921),o=n(91884),a=n(57437),l=r._(n(54887)),c=o._(n(2265)),i=n(27484),s=n(13313),u=n(52185),d=new Map,f=new Set,m=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:l="",strategy:c="afterInteractive",onError:i,stylesheets:u}=e,p=n||t;if(p&&f.has(p))return;if(d.has(t)){f.add(p),d.get(t).then(r,i);return}let y=()=>{o&&o(),f.add(p)},b=document.createElement("script"),v=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){i&&i(e)});for(let[n,r]of(a?(b.innerHTML=a.__html||"",y()):l?(b.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(b.src=t,d.set(t,v)),Object.entries(e))){if(void 0===r||m.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===c&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",c),u&&h(u),document.body.appendChild(b)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function b(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:d,stylesheets:m,...h}=e,{updateScripts:y,scripts:b,getIsSsr:v,appDir:g,nonce:_}=(0,c.useContext)(i.HeadManagerContext),E=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||n;E.current||(o&&e&&f.has(e)&&o(),E.current=!0)},[o,t,n]);let S=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{!S.current&&("afterInteractive"===s?p(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),S.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(b[s]=(b[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),y(b)):v&&v()?f.add(t||n):v&&!v()&&p(e)),g){if(m&&m.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52445:function(){},86087:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=56016)}),_N_E=e.O()}]);