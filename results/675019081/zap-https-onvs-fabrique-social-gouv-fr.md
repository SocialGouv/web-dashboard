
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 07:59:40


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 7 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 7 | 
| Source Code Disclosure - Java | Medium | 1 | 
| X-Frame-Options Header Not Set | Medium | 5 | 
| Absence of Anti-CSRF Tokens | Low | 3 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 6 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 9 | 
| Information Disclosure - Sensitive Information in URL | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 9 | 
| Storable and Cacheable Content | Informational | 10 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 10 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/apropos](https://onvs.fabrique.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/mentions](https://onvs.fabrique.social.gouv.fr/mentions)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Java
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Java</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/index-f1689ef054b0a1e5fc94.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/index-f1689ef054b0a1e5fc94.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `class h{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function d(e,t,l,n,i){return{type:"path",ops:M(e,t,l,n,i)}}function p(e,t,l){const n=(e||[]).length;if(n>2){const i=[];for(let t=0;t<n-1;t++)i.push(...M(e[t][0],e[t][1],e[t+1][0],e[t+1][1],l));return t&&i.push(...M(e[n-1][0],e[n-1][1],e[0][0],e[0][1],l)),{type:"path",ops:i}}return 2===n?d(e[0][0],e[0][1],e[1][0],e[1][1],l):{type:"path",ops:[]}}function m(e,t,l,n,i){return function(e,t){return p(e,!0,t)}([[e,t],[e+l,t],[e+l,t+n],[e,t+n]],i)}function z(e,t,l,n,i){return function(e,t,l,n){const[i,a]=w(n.increment,e,t,n.rx,n.ry,1,n.increment*F(.1,F(.4,1,l),l),l);let c=b(i,null,l);if(!l.disableMultiStroke){const[i]=w(n.increment,e,t,n.rx,n.ry,1.5,0,l),a=b(i,null,l);c=c.concat(a)}return{estimatedPoints:a,opset:{type:"path",ops:c}}}(e,t,i,function(e,t,l){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),i=Math.max(l.curveStepCount,l.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/i;let c=Math.abs(e/2),r=Math.abs(t/2);const o=1-l.curveFitting;return c+=g(c*o,l),r+=g(r*o,l),{increment:a,rx:c,ry:r}}(l,n,i)).opset}function v(e){return e.randomizer||(e.randomizer=new h(e.seed||0)),e.randomizer.next()}function F(e,t,l,n=1){return l.roughness*n*(v(l)*(t-e)+e)}function g(e,t,l=1){return F(-e,e,t,l)}function M(e,t,l,n,i,a=!1){const c=a?i.disableMultiStrokeFill:i.disableMultiStroke,r=y(e,t,l,n,i,!0,!1);if(c)return r;const o=y(e,t,l,n,i,!0,!0);return r.concat(o)}function y(e,t,l,n,i,a,c){const r=Math.pow(e-l,2)+Math.pow(t-n,2),o=Math.sqrt(r);let s=1;s=o<200?1:o>500?.4:-.0016668*o+1.233334;let u=i.maxRandomnessOffset||0;u*u*100>r&&(u=o/10);const f=u/2,h=.2+.2*v(i);let d=i.bowing*i.maxRandomnessOffset*(n-t)/200,p=i.bowing*i.maxRandomnessOffset*(e-l)/200;d=g(d,i,s),p=g(p,i,s);const m=[],z=()=>g(f,i,s),F=()=>g(u,i,s);return a&&(c?m.push({op:"move",data:[e+z(),t+z()]}):m.push({op:"move",data:[e+g(u,i,s),t+g(u,i,s)]})),c?m.push({op:"bcurveTo",data:[d+e+(l-e)*h+z(),p+t+(n-t)*h+z(),d+e+2*(l-e)*h+z(),p+t+2*(n-t)*h+z(),l+z(),n+z()]}):m.push({op:"bcurveTo",data:[d+e+(l-e)*h+F(),p+t+(n-t)*h+F(),d+e+2*(l-e)*h+F(),p+t+2*(n-t)*h+F(),l+F(),n+F()]}),m}function b(e,t,l){const n=e.length,i=[];if(n>3){const a=[],c=1-l.curveTightness;i.push({op:"move",data:[e[1][0],e[1][1]]});for(let t=1;t+2<n;t++){const l=e[t];a[0]=[l[0],l[1]],a[1]=[l[0]+(c*e[t+1][0]-c*e[t-1][0])/6,l[1]+(c*e[t+1][1]-c*e[t-1][1])/6],a[2]=[e[t+1][0]+(c*e[t][0]-c*e[t+2][0])/6,e[t+1][1]+(c*e[t][1]-c*e[t+2][1])/6],a[3]=[e[t+1][0],e[t+1][1]],i.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&2===t.length){const e=l.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+g(e,l),t[1]+g(e,l)]})}}else 3===n?(i.push({op:"move",data:[e[1][0],e[1][1]]}),i.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):2===n&&i.push(...M(e[0][0],e[0][1],e[1][0],e[1][1],l));return i}function w(e,t,l,n,i,a,c,r){const o=[],s=[],u=g(.5,r)-Math.PI/2;s.push([g(a,r)+t+.9*n*Math.cos(u-e),g(a,r)+l+.9*i*Math.sin(u-e)]);for(let f=u;f<2*Math.PI+u-.01;f+=e){const e=[g(a,r)+t+n*Math.cos(f),g(a,r)+l+i*Math.sin(f)];o.push(e),s.push(e)}return s.push([g(a,r)+t+n*Math.cos(u+2*Math.PI+.5*c),g(a,r)+l+i*Math.sin(u+2*Math.PI+.5*c)]),s.push([g(a,r)+t+.98*n*Math.cos(u+c),g(a,r)+l+.98*i*Math.sin(u+c)]),s.push([g(a,r)+t+.9*n*Math.cos(u+.5*c),g(a,r)+l+.9*i*Math.sin(u+.5*c)]),[s,o]}function H(e,t){return{maxRandomnessOffset:2,roughness:"highlight"===e?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==e,disableMultiStrokeFill:!1,seed:t}}function x(e,t,l,n,i,a){const c=[];let r=l.strokeWidth||2;const o=function(e){const t=e.padding;if(t||0===t){if("number"==typeof t)return[t,t,t,t];if(Array.isArray(t)){const e=t;if(e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}}return[5,5,5,5]}(l),s=void 0===l.animate||!!l.animate,u=l.iterations||2,h=H("single",a);switch(l.type){case"underline":{const e=t.y+t.h+o[2];for(let l=0;l<u;l++)l%2?c.push(d(t.x+t.w,e,t.x,e,h)):c.push(d(t.x,e,t.x+t.w,e,h));break}case"strike-through":{const e=t.y+t.h/2;for(let l=0;l<u;l++)l%2?c.push(d(t.x+t.w,e,t.x,e,h)):c.push(d(t.x,e,t.x+t.w,e,h));break}case"box":{const e=t.x-o[3],l=t.y-o[0],n=t.w+(o[1]+o[3]),i=t.h+(o[0]+o[2]);for(let t=0;t<u;t++)c.push(m(e,l,n,i,h));break}case"bracket":{const e=Array.isArray(l.brackets)?l.brackets:l.brackets?[l.brackets]:["right"],n=t.x-2*o[3],i=t.x+t.w+2*o[1],a=t.y-2*o[0],r=t.y+t.h+2*o[2];for(const l of e){let e;switch(l){case"bottom":e=[[n,t.y+t.h],[n,r],[i,r],[i,t.y+t.h]];break;case"top":e=[[n,t.y],[n,a],[i,a],[i,t.y]];break;case"left":e=[[t.x,a],[n,a],[n,r],[t.x,r]];break;case"right":e=[[t.x+t.w,a],[i,a],[i,r],[t.x+t.w,r]]}e&&c.push(p(e,!1,h))}break}case"crossed-off":{const e=t.x,l=t.y,n=e+t.w,i=l+t.h;for(let t=0;t<u;t++)t%2?c.push(d(n,i,e,l,h)):c.push(d(e,l,n,i,h));for(let t=0;t<u;t++)t%2?c.push(d(e,i,n,l,h)):c.push(d(n,l,e,i,h));break}case"circle":{const e=H("double",a),l=t.w+(o[1]+o[3]),n=t.h+(o[0]+o[2]),i=t.x-o[3]+l/2,r=t.y-o[0]+n/2,s=Math.floor(u/2),f=u-2*s;for(let t=0;t<s;t++)c.push(z(i,r,l,n,e));for(let t=0;t<f;t++)c.push(z(i,r,l,n,h));break}case"highlight":{const e=H("highlight",a);r=.95*t.h;const l=t.y+t.h/2;for(let n=0;n<u;n++)n%2?c.push(d(t.x+t.w,l,t.x,l,e)):c.push(d(t.x,l,t.x+t.w,l,e));break}}if(c.length){const t=function(e){const t=[];for(const l of e){let e="";for(const n of l.ops){const l=n.data;switch(n.op){case"move":e.trim()&&t.push(e.trim()),e=`M${l[0]} ${l[1]} `;break;case"bcurveTo":e+=`C${l[0]} ${l[1]}, ${l[2]} ${l[3]}, ${l[4]} ${l[5]} `;break;case"lineTo":e+=`L${l[0]} ${l[1]} `}}e.trim()&&t.push(e.trim())}return t}(c),a=[],o=[];let u=0;const h=(e,t,l)=>e.setAttribute(t,l);for(const n of t){const t=document.createElementNS(f,"path");if(h(t,"d",n),h(t,"fill","none"),h(t,"stroke",l.color||"currentColor"),h(t,"stroke-width",""+r),s){const e=t.getTotalLength();a.push(e),u+=e}e.appendChild(t),o.push(t)}if(s){let e=0;for(let t=0;t<o.length;t++){const l=o[t],c=a[t],r=u?i*(c/u):0,s=n+e,f=l.style;f.strokeDashoffset=""+c,f.strokeDasharray=""+c,f.animation=`rough-notation-dash ${r}ms ease-out ${s}ms forwards`,e+=r}}}}class _{constructor(e,t){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const e=window.__rno_kf_s=document.createElement("style");e.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(e)}}();const e=this._svg=document.createElementNS(f,"svg");e.setAttribute("class","rough-annotation");const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const l="highlight"===this._config.type;if(this._e.insertAdjacentElement(l?"beforebegin":"afterend",e),this._state="not-showing",l){const e=window.getComputedStyle(this._e).position;(!e||"static"===e)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length!==this._lastSizes.length)return!0;for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}return!1}isSameRect(e,t){const l=(e,t)=>Math.round(e)===Math.round(t);return l(e.x,t.x)&&l(e.y,t.y)&&l(e.w,t.w)&&l(e.h,t.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(e,t){let l=this._config;t&&(l=JSON.parse(JSON.stringify(this._config)),l.animate=!1);const n=this.rects();let i=0;n.forEach(e=>i+=e.w);const a=l.animationDuration||800;let c=0;for(let r=0;r<n.length;r++){const t=a*(n[r].w/i);x(e,n[r],l,c+this._animationDelay,t,this._seed),c+=t}this._lastSizes=n,this._state="showing"}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let l=0;l<t.length;l++)e.push(this.svgRect(this._svg,t[l]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const l=e.getBoundingClientRect(),n=t;return{x:(n.x||n.left)-(l.x||l.left),y:(n.y||n.top)-(l.y||l.top),w:n.width,h:n.height}}}var R=a.a.createElement;function O(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}var E=function(e){var t=e.children,l=e.type,n=void 0===l?"highlight":l,a=e.color,c=void 0===a?"orange":a,r=e.animate,o=void 0===r||r,f=e.animationDuration,h=void 0===f?1e3:f,d=Object(u.a)(e,["children","type","color","animate","animationDuration"]),p=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=function(e,t){return new _(e,t)}(p.current,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?O(Object(l),!0).forEach((function(t){Object(s.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):O(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({animate:o,animationDuration:h,color:c,type:n},d));setTimeout((function(){e.show()}),1e3*Math.random())}),[p,n,c,o,h,d]),R("span",{ref:p},t)},C=l("wx14"),S=a.a.createElement;function j(e){return S("svg",Object(C.a)({xmlns:"http://www.w3.org/2000/svg",width:"116",height:"64",viewBox:"0 0 116 64"},e),S("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},S("g",{transform:"translate(-469 -104)"},S("g",{transform:"translate(469 104)"},S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M26 63h-.27c0-7.03-5.7-12.73-12.73-12.73S.27 55.97.27 63H0c0-7.18 5.82-13 13-13s13 5.82 13 13zM116 63h-.27c0-7.03-5.7-12.73-12.73-12.73S90.27 55.97 90.27 63H90c0-7.18 5.82-13 13-13s13 5.82 13 13zM84 33h-.259c0-11.991-9.977-21.747-22.241-21.747S39.259 21.009 39.259 33H39c0-12.13 10.093-22 22.5-22S84 20.87 84 33z"}),S("circle",{cx:"19",cy:"6",r:"6",fill:"#FF6862",fillRule:"nonzero"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M21 40.8563095L29.6381721 30 46.6213625 30 57 40.6681104 56.7903498 40.810368 56.8651976 40.810368 56.8651976 63 21.0118382 63 21.0118382 40.810368z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M26 30H27V39H26z",transform:"rotate(-180 26.5 34.5)"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M29.429646 30L40 43.1177939 40 63 21 63 21 40.6223193z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M34 45H37V48H34z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M34 51H37V54H34z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M34 45H37V48H34z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M34 51H37V54H34z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M28 45H31V48H28z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M28 51H31V54H28z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M28 45H31V48H28z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M28 51H31V54H28z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22 45H25V48H22z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22 51H25V54H22z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M22 45H25V48H22z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M22 51H25V54H22z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M64 7H65V10H64z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M49 11H65V63H49z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M65 11H70V63H65z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 14H53V15H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 14H56V15H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 14H63V15H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 21H53V22H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 21H56V22H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 21H63V22H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 26H53V27H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 26H56V27H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 26H63V27H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 30H53V31H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 30H56V31H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 30H63V31H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 35H53V36H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 35H56V36H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 35H63V36H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 42H53V43H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 42H56V43H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 42H63V43H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M53 46H54V47H53z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 46H56V47H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 46H63V47H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M53 51H54V52H53z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 51H56V52H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 60H56V63H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 51H63V52H62z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M65 7H66V10H65z"}),S("path",{fill:"#6C63FF",fillRule:"nonzero",d:"M83 29H84V31H83z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M68 31H84V64H68z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M85 31H90V64H85z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 35H74V36H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 35H78V36H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 35H81V36H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 42H74V43H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 42H78V43H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 42H81V43H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 46H74V47H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 46H78V47H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 46H81V47H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 51H74V52H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 51H78V52H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 60H78V63H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M82 51H83V52H82z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M85 29H86V31H85z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M0 62.853H116V63.853H0z"}),S("circle",{cx:"95.5",cy:"55.5",r:"4.5",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M99.34 51c.502.812.079 1.755-.999 2.229-1.077.473-2.492.337-3.341-.322.406.656 1.333 1.085 2.365 1.093 1.031.008 1.973-.405 2.4-1.055.428-.65.261-1.412-.425-1.945z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M95 53L95.0093948 53 95.1773273 63 94.8226727 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M95.8230738 58.049676L95.9918394 58.0500651 95.9933095 58.6856057 95.8245439 58.6852166z",transform:"rotate(62.234 95.908 58.368)"}),S("circle",{cx:"107",cy:"50",r:"6",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M111.68 45c1.004 2.435.158 5.267-1.997 6.687-2.155 1.42-4.985 1.01-6.683-.967.811 1.968 2.666 3.255 4.73 3.28 2.063.025 3.946-1.216 4.801-3.165.856-1.948.522-4.237-.851-5.835z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M105.5 49L105.526367 49 106 63 105 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M105.928818 55.6259871L106.185456 55.6265788 106.187692 56.5930311 105.931053 56.5924393z",transform:"rotate(62.234 106.058 56.11)"}),S("circle",{cx:"4.5",cy:"55.5",r:"4.5",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M4.34 51c.502.812.079 1.755-.999 2.229-1.077.473-2.492.337-3.341-.322.406.656 1.333 1.085 2.365 1.093 1.031.008 1.973-.405 2.4-1.055.428-.65.261-1.412-.425-1.945z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M2 53L2.00939483 53 2.17732733 63 1.82267267 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3.70158769 57.9184597L3.8703533 57.9188488 3.8718234 58.5543894 3.7030578 58.5540003z",transform:"rotate(62.234 3.787 58.236)"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M80.198 3.545L81 3.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052L80.604 4a1.054 1.054 0 00-.406-.455zM19.198 9.545L20 9.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM97.198 14.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM29.198 8.545L30 8.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052L29.604 9a1.054 1.054 0 00-.406-.455zM30.198 18.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM78.198 22.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M12 61L3 61 3 61.1904762 4.40356452 61.1904762 4.40356452 63 4.6938871 63 4.6938871 61.1904762 10.1609516 61.1904762 10.1609516 63 10.4512742 63 10.4512742 61.1904762 12 61.1904762z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM52.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM71.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM99.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM113.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M16 53L15 53 15 55.2885914 15.4635625 55.2885914 15.4635625 63 15.5885625 63 15.5885625 55.2885914 16 55.2885914z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 60.869H12V61.869H3z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 60.869H12V61.869H3z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 57.869H12V58.869H3z"}),S("text",{fill:"#FFF",fontFamily:"SourceSansPro-Semibold, Source Sans Pro",fontSize:"7",fontWeight:"500"},S("tspan",{x:"27.69",y:"41"},"H"))))))}var k=a.a.createElement,V=function(){return k("div",{className:"w-full max-w-md px-4 py-2 text-gray-700 transition duration-500 ease-in transform bg-gray-200 border rounded shadow hover:scale-105 hover:border-gray-400"},k(j,{className:"w-auto h-12 mx-auto",alt:"h\xf4pital"}),k(o.p,null,k(E,{type:"highlight",multiline:"true",color:"#bee3f8",show:!1,animate:!0,animationDuration:800},"\xc9tablissement, ordre, f\xe9d\xe9ration, conf\xe9rence")),k(o.m,null,"Connectez-vous \xe0 votre compte"),k("form",{className:"mt-5",action:"#"},k("label",{htmlFor:"email"},"Adresse courriel"),k("div",null,k(o.f,{ariaLabel:"Email address",name:"email",type:"email",required:!0,placeholder:"jeanne.lebrun@yahoo.fr"})),k("div",{className:"mt-3"},k("label",{htmlFor:"password2"},"Mot de passe"),k(o.f,{"aria-label":"Password",name:"password",type:"password",required:!0,placeholder:"Mot de passe"})),k("div",{className:"flex items-center justify-between mt-6"},k("div",{className:"flex items-center"},k(o.a,{id:"rememberMe"}),k("label",{htmlFor:"rememberMe",className:"block ml-2 text-sm leading-5 text-gray-900"},"Se souvenir de moi")),k("div",{className:"text-sm leading-5"},k(r.a,{href:"/"},k("a",{className:"font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"},"Mot de passe oubli\xe9 ?")))),k("div",{className:"mt-6 text-center"},k(o.k,{type:"submit"},"Se connecter"))),k(o.m,null,"Vous n'avez pas encore de compte ?"),k("div",{className:"mt-4 text-center"},k(o.j,null,"Cr\xe9er un compte")))},N=a.a.createElement;var D=function(e){var t=e.className;return N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1538 906",className:t},N("path",{fill:"#fff",d:"M0 0H1538V520H0z"}),N("path",{d:"M1228.2 905.42c-.849-.346-.901-1.272-.188-3.318.903-2.59 1.32-2.793 4.791-2.327 3.149.422 4.075.12 5.39-1.758 2.53-3.612.578-6.217-4.013-5.356-3.52.66-3.576.621-2.897-2.081 2.154-8.583 2.358-8.11-4.06-9.383-7.642-1.516-14.952-5.796-20.568-12.041-8.433-9.379-11.356-18.866-10.516-34.117.428-7.77 1.09-10.798 3.54-16.201 7.496-16.534 24.621-24.966 47.637-23.455 4.984.327 11.311 1.175 14.061 1.885l5 1.291.288 9.25.287 9.25h-3.037c-1.792 0-3.038-.522-3.038-1.272 0-2.598-6.123-8.61-10.454-10.264-5.59-2.135-16.434-1.648-21.866.981-12.416 6.01-18.077 21.61-14.302 39.414 1.754 8.272 4.652 13.821 10.192 19.515 5.251 5.398 10.548 7.577 18.485 7.604 8.394.028 14.271-3.345 17.967-10.312 2.511-4.734 3.407-5.315 5.83-3.78 1.127.715 1.138 2.36.063 9.955l-1.288 9.098-4.563 1.577c-2.51.867-8.276 1.848-12.813 2.179-7.824.57-8.25.723-8.25 2.953 0 1.78.553 2.352 2.277 2.352 3.34 0 6.473 2.586 7.213 5.954.86 3.913-1.925 9.702-5.575 11.59-2.64 1.365-12.927 1.905-15.592.818zm-594.96-4.209c-8.657-2.552-16.123-6.402-25.103-12.945l-7.758-5.652-12-.615c-13.306-.683-17.955-2.168-26.562-8.486-18.961-13.918-19.65-49.337-1.294-66.576 13.818-12.978 38.127-15.66 55.625-6.136 23.622 12.857 26.13 50.785 4.672 70.652-3.33 3.083-6.592 5.607-7.248 5.609-2.044.007 21.457 12.862 28.328 15.496 7.592 2.91 16.462 3.3 22.96 1.007 4.727-1.668 5.535-1.468 6.328 1.565.463 1.772-.345 2.518-5.13 4.733-7.54 3.493-23.342 4.142-32.817 1.348zm-29.323-30.905c16.745-8.747 19.933-36.76 6.22-54.65-12.71-16.579-34.985-14.069-43.357 4.886-7.564 17.124 1.066 43.6 16.498 50.61 6.246 2.836 14.217 2.51 20.64-.845zM78.377 880.67c-4.593-2.004-9.632-8.24-17.595-21.774-12.234-20.792-14.527-23.838-17.942-23.838h-2.963l.02 11.25c.037 20.533 2.102 27.56 8.575 29.184 1.732.435 2.405 1.299 2.405 3.085v2.481h-41v-2.355c0-1.784.764-2.575 3.149-3.259 1.731-.496 4.094-2.17 5.25-3.718 2.05-2.748 2.101-3.748 2.101-41.669s-.05-38.921-2.101-41.668c-1.156-1.548-3.519-3.221-5.25-3.718-2.301-.66-3.149-1.493-3.149-3.097 0-2.186.113-2.198 25.4-2.85 26.912-.692 32.843-.18 40.428 3.493 6.627 3.208 12.151 12.928 12.166 21.409.018 9.71-7.203 20.676-16.73 25.409l-4.988 2.478 11.024 16.522c12.969 19.437 17.042 24.63 20.873 26.61 3.577 1.85 3.92 5.885.577 6.781-4.022 1.078-17.172.586-20.25-.757zm-25.023-55.728c13.406-3.721 17.93-22.35 7.785-32.053-4.77-4.56-9.834-6.216-16.297-5.327l-4.965.683v37.812l4.75-.006c2.612-.003 6.54-.502 8.727-1.11zm230.4 55.735c-5.48-1.958-10.648-5.446-13.384-9.032-4.972-6.519-5.494-9.946-5.555-36.462-.063-27.716-.585-30.761-5.671-33.124-2.044-.95-3.237-2.234-3.25-3.5-.02-1.923.639-2 16.979-2 16.963 0 17 .005 16.999 2.25 0 1.511-.6 2.25-1.826 2.25-1.004 0-2.917 1.16-4.25 2.58l-2.424 2.58v27.17c0 25.57.122 27.403 2.077 31.13 3.05 5.813 9.132 8.803 16.954 8.334 8.416-.504 12.97-3.49 16.33-10.706 2.578-5.538 2.602-5.812 2.62-30.132.016-21.778-.18-24.847-1.744-27.234-.97-1.48-2.882-2.971-4.25-3.315-1.553-.39-2.488-1.334-2.488-2.516 0-1.762.925-1.891 13.5-1.891s13.5.13 13.5 1.891c0 1.178-.932 2.126-2.47 2.512-4.606 1.156-4.973 3.3-5.518 32.172l-.512 27.075-3.01 5.882c-3.553 6.943-9.308 11.743-16.715 13.942-6.248 1.856-20.876 1.938-25.892.145zm390 0c-5.542-1.98-10.657-5.458-13.488-9.169-4.714-6.18-5.39-10.75-5.45-36.859-.064-27.146-.602-30.235-5.673-32.59-2.043-.95-3.236-2.235-3.25-3.5-.02-1.923.64-2 16.98-2 16.802 0 17 .025 16.999 2.18 0 1.465-.706 2.285-2.15 2.5-1.182.175-3.095 1.589-4.25 3.14-1.968 2.644-2.121 4.292-2.43 26.206-.38 26.924.371 32.602 4.933 37.267 8.252 8.441 25.405 6.083 30.266-4.16 3.061-6.452 3.847-14.534 3.47-35.698-.398-22.41-1.067-25.202-6.352-26.53-1.553-.389-2.488-1.334-2.488-2.515 0-1.762.925-1.892 13.5-1.892 12.543 0 13.5.134 13.5 1.88 0 1.133-1.16 2.358-2.928 3.09-1.61.668-3.272 1.96-3.693 2.872-.421.912-1.016 13.843-1.322 28.735l-.557 27.076-3.01 5.88c-3.553 6.942-9.309 11.743-16.715 13.942-6.248 1.855-20.876 1.937-25.892.145zm316.53-.042c-3.997-1.74-8.751-7.666-16.108-20.077-9.5-16.028-10.579-17.474-13.055-17.488-2.214-.012-2.25.187-2.25 12.52 0 14.952 1.248 19.168 5.956 20.11 2.367.473 3.044 1.137 3.044 2.983v2.375h-34v-2.375c0-1.846.677-2.51 3.044-2.984 5.697-1.139 6.1-3.847 5.759-38.656l-.303-30.827-2.424-2.579c-1.334-1.418-3.246-2.579-4.25-2.579-1.132 0-1.826-.727-1.826-1.914 0-1.65 1.015-2.01 7.335-2.602 4.034-.378 15.172-.516 24.75-.306 15.572.342 17.856.615 21.581 2.58 6.617 3.49 10.334 10.297 10.334 18.924 0 8.195-4.698 15.393-13.227 20.264-2.723 1.555-4.482 3.117-3.909 3.47.573.355 4.992 6.594 9.82 13.865 9.478 14.274 14.746 20.72 16.932 20.72 1.928 0 1.757 4.643-.198 5.393-2.838 1.089-13.844.561-17.006-.816zm-18.482-47.042c3.975-2.055 7.878-6.999 8.611-10.906.941-5.016-1.267-11.635-5.083-15.233-3.533-3.332-6.946-4.288-12.854-3.598l-3.604.42v30.782h5.05c2.777 0 6.323-.658 7.88-1.463zm445.12 46.868c-2.996-.805-5.626-1.643-5.846-1.863-.219-.22-.95-4.706-1.625-9.97l-1.226-9.571h2.822c1.552 0 2.821.373 2.821.829 0 2.601 6.563 10.265 10.368 12.107 10.285 4.978 22.637.291 22.63-8.587-.01-5.827-2.836-9.31-12.47-15.35-13.52-8.474-18.74-12.95-21.437-18.374-2.688-5.41-3.168-13.826-1.14-19.974 1.34-4.058 7.622-10.117 12.91-12.452 5.325-2.35 21.989-2.275 28.89.131l5.25 1.83v17.84h-2.89c-2.245 0-3.032-.556-3.515-2.482-1.048-4.176-6.41-9.391-10.896-10.6-12.003-3.232-21.617 9.082-14.082 18.037 1.439 1.71 7.963 6.733 14.498 11.162 12.658 8.579 17.334 13.25 18.9 18.882 3.449 12.39-2.278 23.336-14.627 27.956-6.627 2.48-20.961 2.698-29.333.448zm-1310.1-2.1c0-1.772.56-2.304 2.427-2.304 1.432 0 3.278-1.081 4.5-2.635 1.997-2.539 2.073-3.782 2.073-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.652-1.191-.022-1.75-.83-1.75-2.532v-2.5h60v21.132l-2.625-.317c-1.978-.238-2.903-1.157-3.75-3.722-1.972-5.972-5.264-7.493-17.166-7.934l-10.458-.387v28.484l8.043-.466c8.766-.507 13.181-2.635 13.776-6.641.236-1.586 1.023-2.15 3-2.149l2.68.001V850.056h-2.75c-2.218 0-2.75-.453-2.75-2.345 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.573 17.156 11.26 0 17.13-2.852 20.069-9.75 1.485-3.486 4.948-4.482 6.005-1.727.697 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.463v-2.304zm77 .321c0-1.83.677-2.51 2.946-2.964 5.276-1.055 5.526-2.536 5.865-34.661.352-33.448-.076-36.461-5.54-39-2.278-1.059-3.234-2.19-3.25-3.845l-.021-2.345 22.75.415c24.598.448 26.605.837 33.272 6.447 7.327 6.165 9.226 18.427 4.266 27.54-4.326 7.95-11.806 12.17-23.73 13.393l-6.246.64-3.104-7.745 3.696-.54c4.694-.687 9.792-3.66 12.493-7.286 1.535-2.062 2.085-4.224 2.035-8-.13-9.737-5.603-15.692-15.15-16.484l-5.404-.448.312 33.38c.34 36.402.5 37.425 6.061 38.564 2.07.424 2.75 1.151 2.75 2.939v2.375h-34v-2.375zm166-.365c0-1.55.594-2.26 1.89-2.26 1.038 0 2.95-.86 4.25-1.91l2.36-1.91.303-30.996c.339-34.697-.045-37.317-5.786-39.483-1.8-.68-3.017-1.857-3.017-2.92 0-1.618 1.386-1.803 15.25-2.03 29.183-.479 35.29-.151 40.037 2.146 6.152 2.979 9.027 7.29 9.534 14.301.228 3.152.137 6.836-.203 8.19-.985 3.924-5.646 8.718-10.8 11.105l-4.763 2.207 4.034 1.209c9.641 2.889 15.788 12.97 14.514 23.805-1.074 9.145-4.999 14.288-14.104 18.483-4.781 2.203-6.058 2.304-29.25 2.313l-24.25.01v-2.26zm44.102-7.53c5.097-3.405 7.12-8.041 6.552-15.016-.854-10.492-8.182-16.714-19.686-16.714h-6.112l.322 15.091c.309 14.465.42 15.17 2.683 17 3.454 2.793 11.798 2.608 16.241-.36zm-4.13-41.553c6.14-2.353 9.37-7.16 8.732-12.99-.858-7.834-7.171-12.188-17.672-12.188h-6.032v27l5.25-.054c2.887-.03 7.263-.826 9.722-1.769zm41.028 49.14c0-1.617.689-2.267 2.651-2.5 1.49-.179 3.57-1.553 4.75-3.14 2.025-2.724 2.1-3.906 2.1-33.5 0-24.587-.281-31.174-1.414-33.178-1.766-3.124-4.066-4.927-6.337-4.968-1.139-.02-1.75-.818-1.75-2.282 0-2.25 0-2.25 18-2.25s18 0 18 2.25c0 1.562-.595 2.25-1.944 2.25-1.07 0-3.207 1.086-4.75 2.413l-2.806 2.412-.29 31.538-.29 31.538 2.559 1.677c2.026 1.327 4.191 1.582 10.39 1.223 9.517-.55 13.973-2.906 16.624-8.784 1.764-3.911 3.63-4.861 6.264-3.189.99.628.828 2.476-.756 8.67-1.108 4.33-2.71 8.934-3.56 10.231l-1.545 2.36-55.895-.59v-2.183zm70 .308c0-1.847.678-2.51 3.045-2.984 5.521-1.104 5.956-3.832 5.952-37.36-.003-27.842-.132-29.991-1.97-33.004-1.08-1.773-3.103-3.51-4.496-3.859-1.722-.432-2.53-1.32-2.53-2.776 0-2.105.291-2.142 17-2.142s17 .037 17 2.142c0 1.447-.807 2.344-2.488 2.766-1.368.343-3.28 1.834-4.25 3.313-1.586 2.42-1.763 5.744-1.763 33.234 0 33.953.408 36.676 5.644 37.724 2.18.436 2.856 1.134 2.856 2.946v2.375h-34v-2.375zm239-.181c0-1.645.762-2.347 3.045-2.803 5.523-1.105 5.955-3.824 5.955-37.461 0-29.466-.032-29.932-2.284-33.282-1.256-1.869-3.281-3.542-4.5-3.718-1.592-.23-2.216-1.003-2.216-2.75v-2.43h59v10.5c0 10.403-.022 10.5-2.388 10.5-1.933 0-2.513-.66-3.038-3.459-1.115-5.944-5.2-7.94-17.155-8.382l-10.117-.375-.65 4.748c-.358 2.61-.651 9.023-.651 14.249v9.501l8.507-.53c9.366-.585 13.074-2.233 14.085-6.264.447-1.783 1.302-2.488 3.016-2.488h2.391v26h-2.5c-1.702 0-2.51-.558-2.531-1.75-.09-4.95-4.849-7.25-14.998-7.25h-8.162l.346 14.082c.419 17.058.317 16.918 12.325 16.918 10.598 0 16.11-2.539 18.995-8.75 1.453-3.128 2.56-4.25 4.191-4.25 1.22 0 2.521.492 2.893 1.094.911 1.475-3.525 17.73-5.331 19.537-1.193 1.192-6.27 1.4-29.832 1.222l-28.395-.214v-2.194zm110 .236c0-1.64.932-2.739 3.179-3.75 1.748-.787 4.11-2.701 5.25-4.254 2.009-2.738 2.071-3.967 2.071-40.5 0-42.381-.078-42.892-6.982-45.17-2.736-.903-3.518-1.7-3.518-3.583v-2.423h70v25h-3c-2.443 0-3-.417-3.003-2.25-.006-3.68-3.772-8.755-7.768-10.47-2.365-1.014-7.842-1.77-14.978-2.066l-11.25-.466v34.252l8.25-.056c10.996-.075 14.76-1.44 17.082-6.194 1.494-3.058 2.37-3.75 4.75-3.75h2.917v30.126l-3.21-.313c-2.206-.215-3.38-.94-3.75-2.313-1.587-5.882-7.706-8.5-19.87-8.5H879.6l.407 17.75c.465 20.257 1.317 23.217 7.306 25.383 2.628.95 3.51 1.847 3.51 3.568v2.299h-41v-2.32zm160-.18c0-1.828.535-2.5 1.986-2.5 3.064 0 6.564-6.232 14.17-25.234 10.185-25.445 19.844-51.318 19.844-53.156 0-1.257 1.042-1.606 4.75-1.59l4.75.02 13.488 34.571c14.647 37.541 17.347 43.377 20.762 44.875 1.38.606 2.25 1.863 2.25 3.25 0 2.262-.01 2.263-17 2.263h-17v-2.375c0-1.834.677-2.51 2.974-2.97 4.297-.859 4.556-3.768 1.216-13.654l-2.872-8.5h-23.632l-2.375 7c-2.993 8.82-2.82 14.857.44 15.32 1.629.23 2.25.99 2.25 2.75v2.43h-26v-2.5zm46-35.016c0-1.522-7.346-21.484-7.905-21.484-.365 0-1.384 1.912-2.266 4.25-.881 2.337-2.758 7.287-4.17 11l-2.569 6.75h8.455c4.65 0 8.455-.233 8.455-.516zm43 35.14c0-1.787.68-2.514 2.75-2.938 5.41-1.108 5.653-2.517 6.073-35.219.434-33.736.01-36.573-5.805-38.767-1.8-.68-3.018-1.857-3.018-2.92 0-1.602 1.128-1.78 11.25-1.778l11.25.002 6.5 8.226c3.575 4.525 12.8 15.67 20.5 24.768s15.032 17.883 16.293 19.521l2.294 2.98-.324-22.59c-.354-24.617-.913-27.157-6.275-28.503-1.554-.39-2.488-1.335-2.488-2.516 0-1.762.925-1.891 13.5-1.891 12.671 0 13.5.118 13.5 1.93 0 1.21-.803 2.05-2.15 2.25-1.182.176-3.094 1.59-4.25 3.141-2.03 2.728-2.11 4.044-2.406 39.75l-.307 36.928h-4.36c-3.943 0-4.674-.405-7.665-4.25-2.644-3.398-45.008-55.87-46.626-57.75-.237-.275-.234 10.75.01 24.5.487 27.882 1.096 31.218 5.873 32.173 2.208.442 2.885 1.134 2.885 2.952v2.375h-27v-2.375zm175-.124c0-1.486.573-2.5 1.412-2.5 1.976 0 5.682-4.693 8.33-10.545 3.68-8.14 20.794-52.314 23.73-61.256l2.726-8.301 8.94.602 13.268 34c7.297 18.7 14.068 35.575 15.048 37.5 2.235 4.394 5.49 8 7.22 8 .748 0 1.326 1.09 1.326 2.5v2.5h-34v-2.5c0-1.741.547-2.5 1.8-2.5 4.84 0 5.289-4.226 1.618-15.247l-2.582-7.754h-23.472l-2.128 6.75c-4.02 12.75-3.829 16.25.886 16.25 1.336 0 1.877.721 1.877 2.5v2.5h-26v-2.5zm42.43-44.75c-1.89-5.638-3.705-10.925-4.032-11.75-.356-.896-2.355 2.93-4.966 9.5-2.404 6.05-4.384 11.338-4.401 11.75-.017.412 3.764.75 8.403.75h8.434l-3.438-10.25zm45.57 44.75c0-1.956.51-2.5 2.345-2.5 1.29 0 3.203-.947 4.25-2.104 1.774-1.958 1.926-4.257 2.2-33.25.16-17.13.043-32.147-.263-33.369-.713-2.85-4.383-6.277-6.72-6.277-1.212 0-1.812-.745-1.812-2.25 0-2.246.037-2.25 17-2.25 16.35 0 17 .076 17 2.005 0 1.251-1.09 2.488-2.894 3.287-1.592.705-3.359 2.502-3.926 3.994-1.457 3.833-2.286 35.037-1.379 51.894.634 11.758 1.084 14.535 2.636 16.25 1.03 1.138 2.703 2.07 3.718 2.07 1.3 0 1.845.736 1.845 2.5v2.5h-34v-2.5zm112-.18c0-1.79.555-2.32 2.428-2.32 1.431 0 3.278-1.081 4.5-2.635 1.997-2.539 2.072-3.782 2.072-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.653-1.191-.021-1.75-.83-1.75-2.531v-2.5h60v21.132l-2.625-.317c-1.977-.238-2.903-1.157-3.75-3.723-1.971-5.971-5.263-7.492-17.166-7.933l-10.458-.387v28.226l6.25-.057c8.676-.078 12.907-1.705 14.75-5.672 1.099-2.364 2.17-3.233 4-3.248l2.5-.02v25.998h-2.75c-2.218 0-2.75-.454-2.75-2.346 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.572 17.156 11.26 0 17.13-2.851 20.07-9.75 1.485-3.486 4.947-4.482 6.004-1.727.698 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.43v-2.32zm-1339.9-91.243l-2.444-1.878 5.944-9.084c3.27-4.996 6.583-9.09 7.362-9.1 3.382-.037 14.148 2.277 13.878 2.983-.536 1.406-20.274 18.99-21.296 18.974-.55-.01-2.1-.862-3.444-1.895zM6.862 718.057h1523v9h-1523v-9zm579.64-20.465c-8-2.852-12.498-10.308-11.04-18.3.981-5.386 4.03-9.154 9.428-11.655l4.723-2.188-2.874-1.65c-1.633-.937-2.874-2.499-2.874-3.618 0-1.81 7.333-9.124 9.147-9.124.432 0-.196-1.664-1.395-3.697-5.121-8.68-1.024-21.228 8.537-26.148 5.176-2.664 6.923-2.777 25.048-1.616 10.426.668 10.814.775 10.264 2.828-.315 1.173-.579 2.47-.587 2.883-.008.413-1.77.75-3.918.75h-3.906l.528 5.814c1.15 12.684-7.871 21.371-22.434 21.604-7.565.121-11.226 1.725-8.275 3.626.82.528 5.704 2.324 10.853 3.99 16.556 5.358 19.615 8.054 18.909 16.664-.734 8.942-7.927 16.739-18.332 19.871-5.96 1.793-16.723 1.777-21.801-.033zm22.266-6.174c8.119-4.045 11.635-11.754 7.196-15.772-2.991-2.707-15.981-6.862-19.348-6.19-6.853 1.372-13.255 9.727-12.074 15.759 1.624 8.29 13.788 11.404 24.226 6.203zm2.678-45.247c6.095-3.717 8.449-14.265 4.347-19.479-5.61-7.133-16.29.817-16.389 12.202-.031 3.538.479 4.781 2.768 6.75 3.373 2.902 5.21 3.006 9.274.528zm37.92 23.205c-4.393-.897-6.747-3.83-7.247-9.028-1.278-13.31 9.92-32.817 22.451-39.11 6.514-3.271 19.363-3.601 27.923-.717.768.259.2 3.677-1.778 10.708-3.871 13.75-6.087 27.515-4.814 29.894.835 1.56 1.427 1.668 4.078.744 2.446-.853 3.286-.788 3.977.305 1.44 2.275.565 3.14-5.149 5.094-7.682 2.627-11.199 2.115-12.353-1.799l-.911-3.089-4.095 2.289c-6.912 3.863-16.36 5.878-22.082 4.709zm17.287-8.99c2.907-1.382 5.94-3.51 6.739-4.729 1.335-2.038 5.409-17.039 7-25.776.65-3.58.57-3.703-3.065-4.707-6.716-1.854-13.47 3.044-18.852 13.67-5.645 11.148-7.068 21.078-3.39 23.654 2.497 1.75 4.027 1.47 11.568-2.113zm473.47 8.696c-4.488-1.065-6.071-2.622-7.298-7.178-1.86-6.908 2.444-19.975 9.764-29.641 8.765-11.575 18.507-15.482 32.892-13.191 3.787.603 7.183 1.409 7.547 1.79.364.382-.9 6.77-2.808 14.195-1.908 7.425-3.556 16.425-3.662 20l-.191 6.5 4.25-.19c3.813-.17 4.25.045 4.25 2.092 0 1.91-.94 2.566-5.77 4.028-7.948 2.406-11.636 1.892-12.047-1.68-.174-1.513-.499-2.75-.722-2.75s-2.838 1.076-5.811 2.39c-4.784 2.116-14.533 4.787-16.45 4.507-.386-.056-2.16-.449-3.945-.872zm16.744-8.56c2.475-1.237 5.23-3.085 6.121-4.107 2.213-2.535 6.185-15.587 8.24-27.078.548-3.063.383-3.272-3.404-4.291-3.24-.873-4.63-.764-7.479.588-6.348 3.012-12.648 13.232-15.914 25.817-3.128 12.054.773 14.899 12.436 9.07zm-1084.5 6.285c-.298-1.237 1.484-10.539 3.961-20.671 4.883-19.976 4.842-21.599-.51-20.064-2.647.76-2.948.614-2.948-1.426 0-1.905.93-2.544 5.75-3.951 3.163-.923 7.325-1.782 9.25-1.908 3.295-.216 3.519-.033 3.821 3.124.177 1.845-1.548 10.985-3.833 20.312-2.285 9.327-3.886 17.655-3.56 18.508.474 1.235 1.525 1.41 5.163.865 4.352-.653 4.552-.577 4.238 1.607-.26 1.806-1.493 2.655-5.829 4.012-3.025.946-7.629 1.747-10.23 1.781-4.105.053-4.803-.237-5.273-2.189zm38.445.404l-2.28-1.846 7.747-34.035c4.26-18.72 7.6-35.326 7.419-36.904-.336-2.942-.699-3.094-4.578-1.917-1.919.582-2.25.311-2.25-1.838 0-2.913 3.512-4.32 13.25-5.308 5.579-.567 5.75-.512 5.75 1.84 0 1.332-1.575 9.56-3.5 18.283s-3.5 16.445-3.5 17.16c0 .97 1.1.812 4.341-.622 11.137-4.926 20.845-4.666 24.33.653 3.263 4.98 1.573 17.868-3.727 28.432-2.758 5.497-10.965 14.052-15.422 16.077-5.855 2.66-24.305 2.676-27.58.025zm25.305-6.341c5.013-3.549 10.603-15.54 12.179-26.13 1.579-10.61-5.434-12.725-16.634-5.02-2.366 1.628-4.264 4.051-5.244 6.694-1.813 4.892-5.548 20.856-5.548 23.714 0 4.208 9.682 4.68 15.246.742zm38.19 5.12c-2.708-2.828-2.932-3.625-2.875-10.25.144-16.88 9.74-31.988 22.96-36.146 6.595-2.074 12.398-1.371 16.287 1.974 2.243 1.93 2.692 3.135 2.692 7.226 0 10.295-9.389 18.104-22.9 19.048-3.905.272-7.43.995-7.834 1.605-1.126 1.701-.902 7.482.384 9.926 2.495 4.74 6.075 4.852 14.649.455 5.342-2.74 6.441-3.005 7.235-1.75 1.767 2.794.949 3.672-6.828 7.322-6.476 3.039-8.897 3.657-14.313 3.657-5.97 0-6.766-.258-9.456-3.066zm17.908-24.012c8.507-2.362 14.119-11.457 9.76-15.817-2.75-2.749-5.292-2.659-8.824.314-2.813 2.367-7.385 9.867-8.735 14.333-.57 1.882-.302 2.249 1.637 2.244 1.274-.003 4.047-.486 6.162-1.073zm33.656 26.738c0-.166 1.797-7.92 3.993-17.23s3.997-18.899 4-21.307l.006-4.377-4 .64c-3.545.566-4 .412-4-1.36 0-2.193 3.234-3.872 11.35-5.895 5.553-1.384 7.65-.435 7.65 3.462v2.348l3.55-2.409c6.242-4.236 10.056-5.013 14.587-2.97 2.17.979 3.807 2.265 3.639 2.86-2.715 9.57-4.26 12.58-6.458 12.58-1.965 0-2.317-.513-2.317-3.378 0-7.275-6.329-7.327-10.919-.09-2.86 4.51-5.817 14.765-8.164 28.317-.7 4.042-1.756 7.492-2.345 7.665-1.76.518-10.572 1.472-10.572 1.145zm50.162-.963c-1.104-1.33-.498-4.924 5.22-30.946l2.362-10.75h-3.372c-1.855 0-3.373-.255-3.373-.566 0-1.564 2.24-4.434 3.459-4.434 2.438 0 7.12-4.735 9.084-9.188 2.195-4.977 3.068-5.776 6.332-5.797 2.149-.014 2.313.295 1.724 3.235a222.415 222.415 0 00-1.253 7l-.601 3.75h4.627c4.727 0 5.423.764 4.021 4.418-.436 1.137-1.95 1.582-5.391 1.582-5.56 0-4.647-2-9.082 19.899-3.259 16.087-3.039 17.569 2.376 16.016 4.518-1.296 4.882-1.189 4.524 1.334-.243 1.707-1.527 2.654-5.32 3.92-6.122 2.045-13.857 2.31-15.338.526zm40.337-1.291c-7.319-7.897-2.023-30.354 9.628-40.83 4.754-4.274 12.176-7.575 17.034-7.575 3.075 0 9.85 3.15 10.868 5.054 1.612 3.012 1.11 10.206-.948 13.58-4.216 6.915-13.305 11.366-23.207 11.366h-5.874v5.278c0 10.245 4.258 12.042 15.449 6.523 3.568-1.759 6.684-2.996 6.924-2.75.24.247.592 1.35.782 2.45.277 1.604-1.113 2.74-7.042 5.75-6.42 3.258-8.291 3.75-14.298 3.75-6.155 0-7.174-.285-9.316-2.596zm17.602-24.558c5.284-1.792 8.99-4.82 10.59-8.652 1.348-3.224 1.31-3.717-.463-6.101-2.748-3.696-5.447-3.72-9.589-.083-3.195 2.806-8.64 12.211-8.64 14.926 0 1.395 3.848 1.352 8.102-.09zm375.57 26.486c-1.413-1.412-.497-7.313 4.3-27.711 6.526-27.75 10.033-44.087 10.033-46.736 0-1.896-.41-2.082-3.5-1.58-3.185.517-3.5.352-3.5-1.83 0-2.502 2.495-3.61 12.432-5.519 5.132-.986 6.568-.335 6.568 2.974 0 1.495-3.372 17.31-7.493 35.143-4.121 17.834-7.496 33.95-7.5 35.811l-.007 3.386 4.568-.626c4.295-.589 4.55-.494 4.25 1.583-.246 1.708-1.565 2.599-5.818 3.929-5.618 1.757-13.135 2.374-14.333 1.176zm37.697-.555c-1.227-1.985-.526-6.316 3.733-23.037 2.218-8.708 3.864-16.6 3.658-17.537-.394-1.799-.644-1.84-5.005-.813-2.322.547-2.75.326-2.75-1.423 0-2.384 4.269-4.501 12.045-5.976 5.556-1.054 7.955-.515 7.955 1.788 0 .861-2.037 10.06-4.527 20.444s-4.231 19.358-3.869 19.945c.404.653 2.38.831 5.096.459 4.155-.57 4.417-.468 4.119 1.6-.246 1.708-1.566 2.6-5.819 3.93-6.507 2.035-13.577 2.335-14.637.621zm36.934-.446c-.352-.917-.084-4.18.595-7.25 2.231-10.08 7.107-33.146 7.107-33.62 0-.254-1.383-.462-3.073-.462-4.341 0-3.531-2.795 1.574-5.434 3.04-1.57 4.793-3.566 7.305-8.316 2.86-5.409 3.685-6.25 6.126-6.25h2.82l-1.34 6.25c-.738 3.437-1.357 6.587-1.376 7-.02.412 2.214.75 4.964.75 5.225 0 5.347.105 4.37 3.75-.527 1.965-1.256 2.25-5.778 2.25h-5.174l-3.364 16.876c-1.85 9.281-3.092 17.582-2.76 18.445.486 1.268 1.234 1.388 3.897.624 4.583-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.748 2.174-14.045 2.159-14.887-.036zm41.18-.597c-2.489-2.141-2.92-3.316-3.277-8.917-.801-12.586 4.96-26.796 13.514-33.327 9.445-7.212 19.761-8.17 25.56-2.373 2.688 2.69 2.926 3.448 2.492 7.966-.952 9.905-10.445 17.1-23.434 17.76-8.124.413-8.978 1.39-7.385 8.433 1.735 7.667 4.886 8.454 14.896 3.72 6.63-3.137 8.157-3.135 8.157.01 0 3.196-12.002 8.33-20.577 8.803-6.382.351-7.359.148-9.944-2.076zm21.505-26.726c6.235-3.182 8.912-10.258 5.362-14.18-4.467-4.937-12.737 1.529-16.844 13.167l-1.509 4.276 4.507-.617c2.479-.34 6.296-1.53 8.483-2.647zm239.02 28.622c0-.151 1.797-7.892 3.993-17.203s3.997-18.898 4-21.306l.01-4.378-4 .64c-3.533.565-4 .409-4-1.337 0-2.429 1.76-3.412 9.861-5.511 7.039-1.824 9.14-1.122 9.14 3.056v2.347l3.549-2.408c6.224-4.224 10.059-5.012 14.546-2.989 2.147.969 3.905 2.03 3.905 2.36 0 .328-1.009 3.41-2.241 6.847-1.851 5.161-2.635 6.25-4.5 6.25-1.9 0-2.26-.537-2.26-3.377 0-6.835-5.876-7.345-10.264-.89-3.336 4.907-5.043 10.234-7.778 24.267-1.233 6.325-2.515 11.78-2.85 12.121-.6.613-11.107 2.042-11.107 1.51zm115.34-1.196c-.82-2.138.126-8.297 3.988-25.936l3.285-15-2.805-.313c-3.356-.375-3.923-3.698-.8-4.689 3.515-1.115 7.575-5.239 9.537-9.685 2.196-4.977 3.069-5.777 6.333-5.798 2.148-.013 2.312.295 1.723 3.235a222.473 222.473 0 00-1.253 7l-.6 3.75h4.627c4.727 0 5.423.765 4.02 4.418-.436 1.138-1.95 1.582-5.39 1.582-5.56 0-4.647-2-9.083 19.9-3.258 16.086-3.038 17.568 2.376 16.015 4.519-1.296 4.883-1.189 4.524 1.335-.242 1.707-1.527 2.653-5.32 3.92-6.657 2.223-14.36 2.358-15.162.266zm40.348-1.024c-7.581-7.58-2.34-30.242 9.443-40.837 4.754-4.274 12.176-7.575 17.034-7.575 3.074 0 9.849 3.15 10.868 5.055 1.612 3.011 1.11 10.206-.948 13.58-4.236 6.946-13.305 11.366-23.327 11.366h-5.994l.443 6.134c.705 9.742 4.284 11.072 15.246 5.667 3.568-1.76 6.684-2.997 6.924-2.75.24.247.592 1.349.782 2.449.277 1.605-1.113 2.74-7.041 5.75-6.362 3.23-8.32 3.75-14.114 3.75-5.904 0-7.044-.317-9.316-2.589zm20.964-26.062c6.994-3.476 10.129-11.537 5.768-14.836-2.896-2.191-4.996-1.822-8.841 1.554-3.218 2.825-8.576 12.198-8.576 15.002 0 1.655 6.911.635 11.648-1.72zm30.352 27.79c0-.421 1.826-8.53 4.058-18.02 2.232-9.492 3.92-18.688 3.75-20.438-.29-2.982-.537-3.168-3.953-2.973-2.857.163-3.753-.208-4.147-1.717-.41-1.566.456-2.278 4.644-3.824 2.831-1.044 6.835-2.205 8.898-2.579 3.878-.702 3.812-.756 6.238 5.115.046.111 2.719-1.126 5.939-2.75 6.89-3.476 8.046-3.572 12.235-1.017l3.163 1.928-2.163 6.544c-1.805 5.46-2.536 6.547-4.413 6.568-1.884.02-2.25-.514-2.25-3.276 0-8.714-8.293-6.99-12.832 2.666-1.14 2.427-3.4 10.791-5.02 18.59-1.62 7.797-3.105 14.308-3.297 14.47-.88.738-10.85 1.394-10.85.714zm50 .004c0-.45 1.605-7.079 3.567-14.73 2.143-8.357 3.641-16.709 3.75-20.914l.183-7-3.627.278c-2.85.218-3.731-.126-4.119-1.609-.403-1.541.442-2.17 4.626-3.445 9.092-2.769 11.233-2.968 12.996-1.205.893.893 1.624 2.717 1.624 4.053 0 1.335.184 2.428.41 2.428s3.195-1.317 6.6-2.927c8.06-3.812 18.742-5.811 21.931-4.104 2.081 1.113 2.23 1.688 1.622 6.271-.368 2.775-1.986 10.494-3.596 17.153-1.61 6.66-3.048 13.682-3.197 15.607-.27 3.5-.27 3.5 3.937 3.417 2.876-.057 4.39.392 4.783 1.417.793 2.066-.152 2.74-6.421 4.576-7.112 2.083-13.66 2.099-14.451.036-.328-.855 1.199-9.572 3.393-19.371 4.4-19.647 4.652-21.883 2.562-22.685-2.157-.828-9.808 2.924-14.374 7.05-3.758 3.394-4.239 4.45-6.546 14.362-1.37 5.884-2.809 12.872-3.197 15.528-.389 2.656-1.213 4.98-1.831 5.165-3.033.905-10.624 1.369-10.624.65zm68.587-.779c-.346-.899 1.44-10.163 3.967-20.586 2.526-10.423 4.36-19.563 4.072-20.31-.4-1.04-1.292-1.138-3.817-.414-1.813.52-3.411.946-3.552.946s-.257-1.043-.257-2.318c0-1.927.884-2.584 5.25-3.905 11.848-3.583 15.508-2.975 14.312 2.377-.288 1.29-2.35 9.965-4.58 19.279-2.23 9.313-3.805 17.586-3.499 18.383.425 1.108 1.631 1.303 5.105.827 4.274-.586 4.53-.49 4.23 1.585-.615 4.275-19.747 8.002-21.231 4.137zm37.728.013c-.667-1.738.143-6.512 4.051-23.878 4.321-19.2 4.259-17.5.64-17.5-4.397 0-3.665-2.758 1.441-5.433 2.939-1.539 4.75-3.599 7.095-8.067 2.561-4.878 3.672-6.061 5.944-6.33 3.035-.358 3.057-.104.915 10.58l-.651 3.25h5.232c4.36 0 5.13.264 4.625 1.582-.334.87-.607 2.22-.607 3 0 1.049-1.402 1.418-5.375 1.418h-5.375l-3.302 16.818c-1.816 9.25-3.021 17.55-2.678 18.445.511 1.332 1.225 1.456 3.92.683 4.584-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.67 2.152-14.046 2.156-14.87.01zm41.108-.692c-2.864-2.466-2.923-2.716-2.923-12.405 0-9.425.177-10.247 3.778-17.531 4.417-8.936 9.487-13.77 17.636-16.82 14.195-5.31 24.39 3.712 18.108 16.026-3.552 6.962-13.026 11.988-22.664 12.022-5.79.02-6.18.172-6.802 2.65-.836 3.33.21 8.354 2.21 10.622 2.273 2.578 6.184 2.146 13.16-1.451 5.202-2.683 6.355-2.966 7.125-1.75 1.77 2.8.893 3.876-5.801 7.11-5.154 2.49-8.424 3.354-13.827 3.652-6.417.354-7.35.155-10-2.126zm21.78-26.92c6.758-3.798 9.013-11.267 4.329-14.336-1.847-1.21-3.168-1.385-5.25-.695-3.527 1.17-8.563 7.707-10.645 13.817l-1.607 4.716 4.59-.629c2.525-.346 6.388-1.639 8.583-2.873zm-1512 26.512c.186-.966 1.233-1.92 2.327-2.12 2.97-.545 5.564-3.178 7.59-7.704 2.688-6.003 10.981-47.753 11.205-56.408.191-7.382.162-7.474-3.018-9.5-6.205-3.953-4.547-4.546 12.71-4.546 13.673 0 16 .222 16 1.525 0 .898-1.246 1.774-3.03 2.131-6.377 1.276-8.798 7.57-14.819 38.541-5.626 28.942-5.571 28.382-3.044 30.91 1.92 1.92 2.965 2.085 10.76 1.693 10.485-.528 14.272-2.293 17.934-8.355 2.885-4.776 3-4.857 5.068-3.546 1.148.727 1.105 1.653-.266 5.734-.9 2.677-2.654 6.667-3.9 8.867l-2.266 4-26.795.267c-25.09.25-26.774.155-26.457-1.489zm505.82.304c0-.78 1.688-2.242 3.75-3.25 2.614-1.277 4.415-3.197 5.943-6.332 2.865-5.88 11.526-48.467 11.684-57.456.12-6.793.048-7.004-3.088-9-6.711-4.272-5.194-4.544 25.279-4.544 27.955 0 28.554.042 27.943 1.967-.344 1.082-1.186 5.02-1.872 8.75-1.058 5.753-1.581 6.831-3.443 7.102-1.786.26-2.196-.172-2.196-2.316 0-6.638-3.939-8.503-17.958-8.503h-9.659l-2.773 12.75c-1.526 7.012-2.992 13.538-3.26 14.5-.435 1.571.413 1.748 8.333 1.735 9.958-.017 12.893-1.08 15.815-5.725 2.6-4.135 5.992-4.467 5.204-.51a2669.77 2669.77 0 00-2.319 12c-1.397 7.296-2.126 9.25-3.452 9.25-1.061 0-1.899-1.087-2.27-2.946-.325-1.623-1.616-3.498-2.875-4.175-2.4-1.291-18.125-1.866-19.29-.706-.673.67-3.626 15.083-4.921 24.02-.623 4.295-.464 4.833 1.883 6.37 2.061 1.351 4.274 1.594 11.303 1.24 10.435-.524 14.143-2.189 18.435-8.278 1.856-2.634 3.613-4.152 4.439-3.836 1.945.747 1.715 2.535-1.234 9.59-4.373 10.465-1.882 9.72-32.555 9.72-22.502 0-26.845-.229-26.845-1.417zm508 .02c0-.796 1.463-1.946 3.25-2.555 6.314-2.152 8.4-7.855 14.716-40.224 5.439-27.875 5.305-32.333-1.027-34.343-1.127-.358-1.874-1.175-1.66-1.816.279-.84 8.107-1.239 28.127-1.43 27.267-.262 27.73-.233 27.11 1.717-.346 1.09-1.19 5.035-1.877 8.766-1.058 5.753-1.58 6.83-3.443 7.102-1.853.27-2.195-.16-2.195-2.75 0-6.314-4.877-8.397-18.436-7.875l-7.936.305-2.78 13c-1.53 7.15-2.796 13.562-2.814 14.25-.05 1.846 15.23 1.682 18.875-.203 1.545-.799 3.377-2.824 4.071-4.5.774-1.867 1.99-3.047 3.141-3.047 2.328 0 2.343-.725-.272 12.75-1.834 9.446-2.478 11.25-4.017 11.25-1.107 0-1.832-.722-1.832-1.826 0-4.666-9.349-8.136-17.99-6.676l-3.82.646-2.03 11.178c-3.576 19.712-3.425 21.497 2.007 23.747 5.98 2.477 2.528 3.424-13.5 3.706-13.136.23-15.668.041-15.668-1.173zm-586.61-21.511c-4.472-2.032-8.394-8.31-8.394-13.44 0-7.943 7.022-15.047 14.847-15.02 9.359.034 15.143 5.75 15.15 14.97.01 11.718-10.734 18.426-21.602 13.49zm508.99.472c-1.716-.747-4.4-3.037-5.965-5.089-2.32-3.042-2.832-4.688-2.77-8.923.132-9.187 5.845-14.838 15-14.838 4.537 0 6.048.494 9.146 2.985 6.902 5.552 7.975 14.861 2.467 21.408-4.63 5.502-11.526 7.221-17.878 4.457zm-597.86-35.543c-1.966-2.174-2.108-1.946 9.256-14.886l3.834-4.366 5.696 1.275c3.133.7 5.696 1.576 5.696 1.946 0 .674-21.41 18.01-22.245 18.01-.245 0-1.251-.891-2.237-1.98zm508.75-.001l-2.218-1.797 7.549-8.611c4.152-4.736 7.93-8.611 8.397-8.611 2.44 0 11.011 2.458 10.775 3.09-.248.665-18.879 15.646-21.279 17.111-.553.338-2.003-.195-3.224-1.183zm664.77.009l-2.412-1.82 7.81-8.604c4.297-4.732 8.172-8.604 8.613-8.604 1.978 0 10.948 2.403 10.906 2.922-.045.54-18.928 15.777-21.382 17.252-.617.37-2.207-.145-3.534-1.147zm-1427.1-5.133c-4.063-4.063-.097-11.896 6.024-11.896 4.258 0 6.48 2.234 6.48 6.512 0 6.674-7.839 10.05-12.503 5.384zm674.85.713c-2.457-1.866-2.312-8.046.25-10.608 4.125-4.125 12-1.433 12 4.102 0 5.994-7.604 10.032-12.25 6.506zm664.15-.713c-4.134-4.134-.08-11.896 6.216-11.896 6.281 0 8.973 7.007 4.434 11.545-3.08 3.081-7.765 3.235-10.65.35zm-876.1-28.584c-1.527-1.702-1.163-2.314 6.071-10.182l7.696-8.37 5.719 1.28c3.145.703 5.696 1.545 5.668 1.87-.081.951-20.163 16.334-21.924 16.795-.882.23-2.335-.396-3.23-1.392z"}),N("path",{fill:"#e2011c",d:"M880.1 520l2.333-6.033c3.954-10.9 8.054-19.217 13.971-28.343 6.269-9.667 20.067-23.907 25.807-26.632 7.054-3.35 15.824-4.53 26.67-3.587 9.312.81 37.925 5.489 49.471 8.09 8.788 1.98 21.654 2.17 27.71.408 11.665-3.394 18.576-9.954 21.856-20.747 2.516-8.28 2.492-15.804-.066-20.823-3.436-6.74-2.851-8.494 5.5-16.48 4.125-3.944 7.506-7.59 7.512-8.104.035-2.67-5.68-13.39-7.151-13.414-.902-.015-2.683-.872-3.958-1.906l-2.32-1.879 4.959-2.534c6.77-3.461 11.791-8.843 11.791-12.638 0-1.64-1.426-5.66-3.17-8.933-3.345-6.28-4.24-12.283-2.357-15.805 1.245-2.327 3.391-3.305 13.933-6.352 8.86-2.561 12.062-5.157 13.325-10.8 1.08-4.827.55-7.93-2.349-13.73-2.36-4.722-17.73-28.27-22.208-34.022-6.016-7.731-13.346-21.086-15.514-28.27-2.137-7.081-2.151-7.482-.592-16.635 3.296-19.35 1.369-35.391-8.01-66.67-6.97-23.245-8.841-28.89-11.024-33.238-3.945-7.863-3.418-9.704 4.677-16.331 3.875-3.173 7.475-6.572 8-7.553 2.445-4.57-.287-13.378-4.92-15.858-2.939-1.575-4.576-.494-7.56 4.994-2.262 4.158-3.148 4.945-5.568 4.945-3.94 0-4.63-1.653-2.115-5.058 2.933-3.97 2.701-4.607-1.907-5.225-3.449-.463-5.272-1.811-12.75-9.426-10.025-10.21-16.76-14.914-30.185-21.087-6.154-2.83-8.298-4.17-6.04-3.774 1.925.337 8.731.875 15.125 1.196 18.553.931 23.063-1.52 27.386-14.885 2.936-9.075 4.344-13.271-2.393-19.607L983.245 0h554.75v520h-657.9z"}),N("path",{fill:"#003189",d:"M407.03 520c-4.026-.423-7.517-.606-7.758-.847-.423-.424 4.124-3.347 24.95-16.039 6.679-4.07 9.427-6.253 8.5-6.75-.755-.402-6.585-1.042-12.958-1.42-9.467-.562-12.21-.4-15 .881-1.878.863-9.372 3.133-16.653 5.044-18.06 4.739-24.137 7.993-29.936 16.027l-2.166 3.103H-.001V0h706.34l-13.686 8.934c-7.535 3.74-16.29 8.936-19.458 11.545-10.744 8.85-25.211 28.985-28.824 40.115-1.328 4.09-2.534 5.624-6.608 8.404-6.217 4.243-13.664 12.334-19.83 21.546-8.373 12.508-24.332 40.698-27.468 48.518-4.864 12.131-4.422 21.37 2.757 57.622 3.16 15.961 6.58 32.171 7.6 36.024 1.02 3.853 2.135 10.382 2.479 14.51.615 7.37 1.094 8.966 5.408 18.012 1.182 2.477 2.147 5.288 2.145 6.246-.002.959.897 2.305 1.997 2.993 1.141.712 2 2.333 2 3.772 0 1.734 2.278 5.024 7.28 10.516 11.445 12.567 19.72 24.347 19.72 28.072 0 3.06-4.488 3.85-11.72 2.065-8.452-2.087-15.367-6.595-26.03-16.972-4.537-4.416-8.25-7.384-8.25-6.597 0 .787 3.111 4.893 6.914 9.123 7.562 8.414 8.748 10.709 7.113 13.767-1.43 2.675-4.911 3.454-9.62 2.153-5.434-1.502-8.618.591-7.722 5.075.55 2.751.4 3.075-1.155 2.478-3.072-1.18-9.794-2.53-15.838-3.184-5.552-.6-5.963-.843-9.325-5.525-2.547-3.548-4.529-5.182-7.191-5.93-9.923-2.786-34.604-7.08-51.175-8.905-29.128-3.207-36.144-3.458-50.1-1.798-10.716 1.275-13.63 2.024-19.5 5.008-10.39 5.283-28.4 21.837-28.4 26.104 0 2.002 3.968 1.296 8.5-1.513 13.758-8.524 60.88-20.554 84-21.445 11.458-.442 10.837.107-2.91 2.571-3.8.682-12.8 2.987-20 5.124s-19.614 5.43-27.589 7.317c-7.975 1.888-16.975 4.321-20 5.408l-5.5 1.975 8.5.093c43.31.474 92.681 14.223 112.77 31.408 8.646 7.394 11.811 8.292 24.528 6.952 17.428-1.835 39.985-10.156 49.878-18.397 4.293-3.576 7.825-4.998 7.818-3.148-.01 3.269-5.697 20.84-8.155 25.2-2.74 4.86-2.896 5.559-1.469 6.603.878.642 1.344 1.42 1.036 1.728-.308.308.374.856 1.515 1.219 3.282 1.042 2.456 2.05-2.781 3.393-5.107 1.31-9.143 3.602-9.143 5.193 0 .52.701.944 1.559.944 2.568 0 .652 1.796-2.704 2.533-2.297.505-2.756.918-1.738 1.563.998.633 1.035.881.133.892-.688.008-1.25 1.031-1.25 2.273 0 1.546-.946 2.676-3 3.586-5.007 2.218-3.603 3.415 3.25 2.773 3.437-.322 5.575-.319 4.75.007-.825.326-6.45 2.873-12.5 5.659-6.05 2.786-13.925 6.093-17.5 7.35-4.047 1.421-6.632 2.919-6.85 3.968-.348 1.684 1.53 1.628 6.257-.187.876-.336 1.582-.225 1.568.246-.013.472-10.429 6.487-23.145 13.366-12.716 6.88-24.615 13.972-26.442 15.76s-4.164 3.252-5.194 3.252c-1.036 0-2.391 1.139-3.033 2.55-1.943 4.265-1.54 4.784 3.09 3.988 6.878-1.181 10.03-1.116 10.487.217.247.721-.402 1.25-1.532 1.25-1.079 0-2.5.65-3.157 1.442-.657.793-2.394 1.581-3.859 1.752-1.704.198-3.388 1.456-4.676 3.494-1.108 1.752-2.914 3.416-4.014 3.699s.475.33 3.5.105c44.98-3.348 53.36-5.013 71.5-14.211 15.476-7.847 31.54-19.513 42.97-31.202 3.282-3.358 6.32-6.105 6.75-6.105 1.553 0 .71 5.613-1.584 10.543-3.971 8.533-12.303 16.394-29.428 27.764-8.64 5.735-17.957 11.137-20.707 12.004-8.592 2.707-22.463 5.591-37.004 7.694-47.373 6.85-65.502 12.045-83.46 23.918-3.006 1.987-6.16 3.495-7.011 3.35-.85-.143-3.117 1.081-5.036 2.722-5.397 4.616-1.487 3.835 9.707-1.938 11.471-5.916 16.85-6.848 7.804-1.353C468.261 515.778 459.806 520 451.53 520h-44.498zm-58.846-58.006c1.798-.752 7.746-4.084 13.218-7.405 5.472-3.321 11.974-6.957 14.449-8.08 2.475-1.123 9.45-4.276 15.5-7.007 12.681-5.722 31.29-11.123 32.36-9.39.376.609 3.149 1.28 6.162 1.49 4.217.295 4.96.566 3.228 1.178-1.238.437-2.25 1.192-2.25 1.678 0 1.81 9.359 1.267 13.299-.772 1.545-.799 5.034-1.717 7.755-2.04 3.382-.4 4.946-1.044 4.946-2.035 0-1.131.859-1.304 3.913-.788 4.203.71 13.243-1 37.587-7.11 16.486-4.138 28.973-8.303 39.94-13.322l7.94-3.633-7.94-5.089c-19.352-12.402-38.785-20.018-81.44-31.916-7.425-2.07-13.95-4.213-14.5-4.76-.663-.66-.326-.752 1-.276 4.26 1.528 7.5 1.821 7.5.678 0-1.483-3.22-2.679-9.548-3.545-5.787-.792-9.522-2.52-5.502-2.544 6.222-.04-4.474-3.985-16.45-6.068-8.866-1.542-9.376-1.872-5.673-3.667 3.227-1.564 6.698-7.482 5.785-9.864-.776-2.021-1.742-1.813-6.538 1.41-9.245 6.213-17.725 16.388-22.49 26.986-2.72 6.045-1.778 6.6 12.214 7.198 11.458.49 11.64.534 8.702 2.113-1.65.886-4.96 1.912-7.355 2.28-8.135 1.248-12.654 5.11-8.62 7.369 1.197.67.722 1.236-2.219 2.639-3.296 1.573-3.528 1.906-1.944 2.793.989.554 3.864.842 6.39.641 3.51-.279 5.114.1 6.803 1.605l2.211 1.97-4.436 2.816c-2.44 1.549-5.2 4.26-6.133 6.024-.933 1.764-4.284 5.963-7.447 9.33s-5.75 6.848-5.75 7.737-4.612 5.31-10.25 9.822c-15.16 12.136-21.75 18.806-21.75 22.017 0 1.7-.856 3.23-2.36 4.215-4.732 3.103-7.203 6.688-4.608 6.688.568 0 2.504-.615 4.301-1.366zm116.98-11.692c3.747-.501 8.086-1.663 9.642-2.583l2.83-1.673-9.652-4.812-4.816 1.952a471.849 471.849 0 01-8.152 3.215c-7.377 2.794-8.34 6.549-1.415 5.518a984.68 984.68 0 0111.563-1.617zm-169.31-45.504c22.285-23.316 38.011-37.148 57.972-50.99 6.783-4.704 11.562-7.424 11.798-6.715.648 1.945 3.554 1.373 8.284-1.633 5.436-3.453 8.156-6.948 14.941-19.202 7.04-12.712 9.7-15.889 19.862-23.719a1632.238 1632.238 0 0015.555-12.152c5.479-4.353 6.795-5.04 6.344-3.317-.349 1.336-.108 2.176.624 2.176 2.272 0 12.976-4.572 13.353-5.703.59-1.769-10.287-3.595-18.33-3.078-6.177.396-8.364 1.113-16.028 5.253-18.008 9.728-31.017 20.221-55.857 45.055-17.876 17.872-31.958 29.855-39.076 33.252-2.318 1.106-4.064 3.425-6.876 9.132-5.465 11.093-15.223 27.012-24.485 39.947-8.754 12.225-10.633 16.454-3.83 8.62 2.338-2.691 9.425-10.308 15.75-16.926zm223 109.47c26.764-5.566 29.718-5.98 48.5-6.804 21.09-.924 23.777-1.472 36.464-7.439 4.065-1.911 5.659-2.259 6.224-1.357.983 1.57 7.864-2.18 21.312-11.615 5.5-3.859 13.278-8.79 17.284-10.959 6.036-3.267 7.883-3.83 10.787-3.285 3.1.582 4.018.204 7.978-3.283 10.974-9.666 20.344-14.134 29.702-14.164 2.782-.009 3.75.403 3.75 1.596 0 1.019.55 1.397 1.5 1.033 2.787-1.071 1.525.153-5.645 5.472-8.301 6.158-7.485 8.007.954 2.162 8.17-5.659 8.19-5.667 8.19-3.379 0 1.304-3.075 4.578-8.75 9.315-12.91 10.778-22.052 19.692-35.97 35.073l-12.45 13.361h-158.33l28.5-5.728zm.25-203.7c.962-.252 2.537-.252 3.5 0 .962.252.175.458-1.75.458s-2.713-.206-1.75-.458z"}),N("path",{fill:"#7f7f7f",d:"M985.58 272.52c-4.367-.66-2.114-2.284 3.171-2.284 5.302 0 8.096-2.036 8.096-5.9 0-1.816-.395-2.114-2.089-1.576-1.461.464-2.502.073-3.463-1.3-.898-1.283-3.068-2.188-6.262-2.612-5.704-.757-14.94-6.268-13.285-7.926.566-.566 3.503-1.234 6.526-1.485 5.211-.432 5.556-.632 6.613-3.838.791-2.4 1.892-3.565 3.788-4.01 1.47-.347 3.797-1.667 5.172-2.934 1.375-1.268 5.875-4.508 10-7.2 6.935-4.527 11.231-9.353 9.695-10.89-1.618-1.62-16.634-3.381-23.695-2.78-8.203.697-22.338 3.679-28.25 5.959-6.068 2.34-4.294.302 4.043-4.645 11.255-6.679 32.92-12.905 44.901-12.905 4.649 0 20.203 3.676 22.055 5.212 3.63 3.01-.329 13.574-7.06 18.845l-2.812 2.201 2.311 2.466 2.311 2.466-2.36 1.917c-1.299 1.054-3.077 1.916-3.953 1.916s-3.043 1.407-4.816 3.128c-2.73 2.648-3.083 3.502-2.298 5.569.608 1.6.549 3.15-.173 4.498-.673 1.26-.842 4.123-.435 7.384.831 6.657-.368 9.042-5.226 10.392-3.603 1.001-16.793 1.196-22.505.332z"}))},A=a.a.createElement,T=function(){return A("footer",{className:"py-4 mt-16 text-gray-700 bg-gray-200 body-font"},A("div",{className:"container flex flex-wrap items-center justify-between py-4 mx-auto"},A("div",{className:"w-1/3"},A("div",null,A("a",null,A(D,{className:"w-24"}))),A("div",{className:"my-2 text-xl"},"Observatoire national des violences en sant\xe9.")),A("div",null,A(r.a,{href:"/apropos"},A("a",null,"Qui sommes-nous ?"))),A("div",null,A(r.a,{href:"/mentions"},A("a",null,"Mentions l\xe9gales"))),A("div",null,A("a",{href:"mailto:dgos-onvs@sante.gouv.fr"},"Contactez\u2011nous"))))},L=l("nOHt"),B=a.a.createElement;function P(e){return B("svg",Object(C.a)({xmlns:"http://www.w3.org/2000/svg",width:"186",height:"238",viewBox:"0 0 186 238"},e),B("defs",null,B("linearGradient",{id:"linearGradient-1",x1:"49.978%",x2:"49.978%",y1:"99.992%",y2:"-.014%"},B("stop",{offset:"0%",stopColor:"gray",stopOpacity:"0.25"}),B("stop",{offset:"54%",stopColor:"gray",stopOpacity:"0.12"}),B("stop",{offset:"100%",stopColor:"gray",stopOpacity:"0.1"}))),B("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},B("g",{fillRule:"nonzero",transform:"translate(-885 -277)"},B("g",{transform:"translate(885 277)"},B("path",{fill:"url(#linearGradient-1)",d:"M81.886 85.555s-1.513-.21-1.513-2.413c0-2.201-1.084-6.324-1.084-6.324s-.938-7.174-2.232-8.311c-1.295-1.138-2.96-7.816-2.96-7.816s-.284-3.623-.864-4.403c-.58-.78-1.364-2.69-2.52-5.414-1.157-2.725-5.968-4.592-5.968-4.592s-8.718-5.057-11.189-6.705a3.82 3.82 0 01-.63-.477c-.43-.56-2.306-.572-2.306-.572-.196-1.241-.384-2.663-.445-3.95v-.415a13.295 13.295 0 005.844-7.232c.046-.146.085-.296.127-.445.34-.106.62-.352.768-.677.22-.495.227-1.072.504-1.537.323-.545.937-.837 1.421-1.245 1.222-1.041 1.537-2.79 1.48-4.376-.039-1.291-.246-2.59-.165-3.87 0-.107 0-.215.023-.322a9.21 9.21 0 01.084-.569c.188-.953.6-1.852.83-2.797.23-.946.254-2.01-.284-2.825-.788-1.195-2.429-1.433-3.87-1.537-1.633-.138-3.074.039-4.138-1.317a14.486 14.486 0 00-1.644-1.983c-.216-.2-2.306-1.48-2.306-1.56a9.341 9.341 0 00-6.532-.504c-1.088.315-2.106.83-3.209 1.088-2.366.56-5.095-.046-7.108 1.31-1.122.769-1.794 1.994-2.425 3.182-.512.978-1.032 1.958-1.56 2.94-.853 1.61-1.713 3.246-2.07 5.029-.076.39-.123.783-.143 1.18v.61c0 .131 0 .262.023.385s0 .157.027.238c.027.08.035.261.058.384s.069.342.115.507c0 .073.046.143.07.216.022.073.084.257.134.384s.053.134.084.2c.058.134.127.265.196.384.03.05.054.1.085.15.105.18.223.352.353.515.819 1.026 2.033 1.679 2.928 2.64v.43a13.153 13.153 0 006.025 10.72c0 .146.02.296.027.446.075 1.14.06 2.283-.042 3.42a1.622 1.622 0 00-1.276-.569 1.829 1.829 0 00-.492.042l-.034-.027v.035c-.846.207-1.887 1.087-2.882 3.589 0 0-3.028 3.412-5.334 3.27-2.305-.142-8.142 3.554-8.142 3.554s-5.694 3.693-6.916 7.458a52.138 52.138 0 01-2.456 6.256L1.295 75.826 0 87.354s.719 5.114.576 5.898c-.142.784 2.955 7.815 2.955 7.815s10.233 17.975 14.413 18.898l.3-.208c.18.09.37.16.565.208l.86-.604c.054.676.03 1.355-.069 2.025-.572 1.78.22 13.36 1.226 15.631 1.007 2.271.65 32.05.65 32.05l-.143 2.625s0 .084.035.23l-.035.623.104.054a7.427 7.427 0 01-.104 2.505c-.36 1.153-.507 4.407-.507 4.407s-2.882 18.398-1.514 22.094c1.368 3.697 2.525 7.747 2.525 7.747s1.44 4.61.069 5.379c-1.372.768-5.257 2.133-4.465 4.05.73 1.775 3.5 6.532 3.911 7.228l-.034.384-.565 6.12c.092.81.31 1.598.65 2.337.618 1.337 1.817 2.717 4.107 2.567.384-.027.826-.07 1.26-.127 4.185-.565 9.334-2.432 9.334-2.432a3.681 3.681 0 01-.727-.604 2.11 2.11 0 01-.641-1.536c.061-1.119-2.025-6.425-2.548-7.735l-.119-.292s4.757-4.976 3.966-9.38c0 0-5.265-3.074-3.532-4.764 1.733-1.691 4.83-6.533 4.83-6.533s.142-18.117 0-20.818a22.44 22.44 0 01.265-5.625c.058-.277.127-.55.2-.823 2.399.362 4.821.546 7.247.55.886 0 1.783-.018 2.69-.054 0 .256.011.533.034.83.2 4.488.573 12.361.876 15.285.43 4.189 2.81 15.49 2.81 15.49s-4.539 2.908.79 10.09c0 0 0 2.597-.353 2.977a32.515 32.515 0 00-.91 3.754c-.223 1.35-.315 2.72.046 3.428.864 1.698 6.052 1.56 6.052 1.56a.818.818 0 01.126-.02 7.404 7.404 0 015.491 1.653c1.971 1.583 9.449.891 13.503.384 1.587-.203 2.647-.384 2.647-.384.051-.18.07-.367.054-.553-.042-.996-.822-3.178-6.11-5.126 0 0-4.972-3.343-4.903-6.256H67.204c.362-.011.615-.011.615-.011s-1.948-7.105-1.152-7.685c.795-.58-1.587-8.453-1.587-8.453s-1.364-13.219-1.441-14.14a8.123 8.123 0 01.36-2.345l-.36-7.25s-.07-2.41 0-3.193c-.008-.68-.062-1.36-.162-2.033-.034-.269-.069-.55-.107-.826 1.863-.473 3.074-.907 3.074-.907l-.216-25.226c1.584-3.074 1.876-9.821 1.868-14.601 0-3.074-.138-5.349-.138-5.349l2.163-3.53s.5-4.228-.292-5.154c-.35-.418-.192-.853.096-1.21a4.02 4.02 0 01.48-.338.603.603 0 01-.05-.085 3.82 3.82 0 01.48-.342s-.768-1.19-.08-1.694c.645.438 1.222.788 1.66 1.037-.03.28-.062.442-.062.442l.185-.384.68.384s3.389-6.751 3.316-7.742c-.073-.992 2.305-5.188 2.305-5.188s.289-2.205 1.587-3.127c1.3-.923 1.007-7.605 1.007-7.605s.361-3.48 1.226-4.899c.864-1.418-.773-3.347-.773-3.347zm-64.845-2.962l.066 1.61-.661-1.06.595-.55z"}),B("path",{fill:"#FFF",d:"M73.418 114.543l-.83 3.535s-6.648-3.4-7.843-7.704c-1.195-4.304 2.002-5.944 2.002-5.944l6.198 2.62.473 7.493z"}),B("path",{fill:"#000",d:"M73.418 114.543l-.83 3.535s-6.648-3.4-7.843-7.704c-1.195-4.304 2.002-5.944 2.002-5.944l6.198 2.62.473 7.493z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M36.111 234.854s-6.148 2.26-10.374 2.544c-2.244.15-3.424-1.226-4.031-2.552a7.8 7.8 0 01-.638-2.305l.557-6.09.292-3.24 8.98-2.336 1.272 3.892.12.293c.506 1.302 2.558 6.582 2.497 7.684a2.11 2.11 0 00.626 1.537c.208.22.443.412.7.573zM78.086 231.757c.016.186-.002.374-.054.553 0 0-13.148 2.19-15.838 0a7.12 7.12 0 00-5.518-1.625s-5.087.138-5.936-1.537c-.354-.703-.262-2.067-.043-3.408.224-1.262.522-2.509.892-3.735l.203-.162 1.21-.972 14.172-.419h.107c-.069 2.898 4.807 6.221 4.807 6.221 5.191 1.922 5.956 4.093 5.998 5.084z"}),B("path",{fill:"#000",d:"M78.09 231.757c.014.186-.006.374-.058.553 0 0-13.148 2.19-15.834 0a7.12 7.12 0 00-5.522-1.625s-5.091.138-5.94-1.537c-.35-.703-.262-2.067-.043-3.412 1.96.196 5.053.684 6.267 1.852 1.837 1.767 4.95 3.535 6.855 3.677 1.507.092 10.463.377 14.275.492zM36.111 234.854s-6.148 2.26-10.374 2.544c-2.244.15-3.424-1.226-4.031-2.552 1.568.527 3.739 1.076 4.88.573 1.352-.604 6.148-.988 8.838-1.153.202.225.434.423.687.588z",opacity:"0.1"}),B("path",{fill:"#F2AAB7",d:"M45.233 52.764c-5.072-1.971-11.596-8.484-9.967-11.527a6.89 6.89 0 00.634-2.444c.105-1.15.12-2.306.046-3.458a47.493 47.493 0 00-.68-5.63s15.835.358 14.913 2.69c-.27.688-.316 1.875-.239 3.201.077 1.326.265 2.836.465 4.108.273 1.74.554 3.073.554 3.073s-.973 1.357-1.537 1.43c-.565.073 3.089 11.381-4.189 8.557z"}),B("path",{fill:"#000",d:"M32.273 225.04l-.12.13c-4.733-5.724-10.459 1.415-10.459 1.415l-.084-.154.292-3.239 8.98-2.336 1.272 3.892.119.292zM67.289 220.856s-3.458-.07-5.303 1.56c-1.844 1.63-10.758.35-10.374 0a1.33 1.33 0 00.2-.588l1.21-.972 14.17-.419c.055.269.097.419.097.419z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M38.163 175.895a10.778 10.778 0 00-.584 1.972 22.559 22.559 0 00-.265 5.594c.142 2.69 0 20.715 0 20.715s-3.04 4.807-4.738 6.501c-1.698 1.695 3.459 4.738 3.459 4.738.768 4.384-3.89 9.333-3.89 9.333-4.733-5.725-10.458 1.41-10.458 1.41s-3.113-5.379-3.889-7.3c-.776-1.921 3.04-3.247 4.38-4.03 1.342-.785-.069-5.38-.069-5.38s-1.13-4.031-2.474-7.708c-1.345-3.678 1.483-21.98 1.483-21.98s.146-3.254.496-4.387c.174-.818.21-1.66.104-2.49-.024-.28-.05-.511-.07-.673-.019-.16-.034-.23-.034-.23l.054-.092 1.92-3.581s15.497 5.333 14.575 7.588zM67.289 220.433s-3.458-.073-5.303 1.537c-1.844 1.61-10.758.354-10.374 0 .384-.353.35-2.966.35-2.966-5.23-7.143-.769-10.04-.769-10.04s-2.332-11.24-2.755-15.409c-.296-2.908-.661-10.759-.857-15.204a570.788 570.788 0 01-.134-3.247l4.234-.842.55-.107 10.305-2.071s.284 1.92.476 3.492c.098.671.15 1.348.158 2.025-.065.769 0 3.178 0 3.178l.353 7.209a8.315 8.315 0 00-.353 2.332c.073.922 1.414 14.067 1.414 14.067s2.332 7.846 1.537 8.411c-.795.565 1.168 7.635 1.168 7.635z"}),B("path",{fill:"#000",d:"M50.179 32.407c-.27.688-.316 1.875-.239 3.2a13.16 13.16 0 01-13.994-.26 47.493 47.493 0 00-.68-5.63s15.835.357 14.913 2.69z",opacity:"0.1"}),B("path",{fill:"#F2AAB7",d:"M56.292 23.923c.087 7.26-5.728 13.215-12.988 13.302-7.26.087-13.215-5.728-13.302-12.987v-.315c0-7.262 5.887-13.15 13.149-13.15S56.3 16.662 56.3 23.924h-.008z"}),B("path",{fill:"#000",d:"M45.233 52.764c-5.072-1.971-11.596-8.484-9.967-11.527a6.89 6.89 0 00.634-2.444l6.943 5.71 4.296 3.523 3.266-8.31c.273 1.74.554 3.073.554 3.073s-.973 1.356-1.537 1.43c-.565.072 3.089 11.37-4.189 8.545z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M63.1891004 77.997397L57.3908424 175.40352 49.8288996 175.899196 30.2439288 119.419015 33.4562175 52.364409 34.1363313 38.1972935 42.8433244 45.3480941 47.1391842 48.8716214 50.5013284 40.3144838 56.7529956 45.7630788z"}),B("path",{fill:"#000",d:"M38.163 175.895a10.778 10.778 0 00-.584 1.972 55.716 55.716 0 01-15.87-4.953l-.103-.054.035-.619v-.323l1.92-3.58s15.524 5.302 14.602 7.557zM51.808 177.882a38.92 38.92 0 01-4.25.488 570.783 570.783 0 01-.134-3.247l4.257-.86.127 3.619zM63.028 175.576c-2.732.711-6.955 1.51-10.728 1.011l-.054-2.432 10.305-2.071s.273 1.905.477 3.492z",opacity:"0.1"}),B("path",{fill:"#000",d:"M52.23 177.033c-15.754 2.69-30.182-5.022-30.182-5.022l.138-2.613s.358-29.622-.634-31.893c-.991-2.27-1.763-13.77-1.202-15.527.56-1.756-2.048-28.269-2.048-28.269l-.423-10.759-15.481-6.29 6.916-14.42a52.107 52.107 0 002.405-6.225c1.203-3.747 6.786-7.424 6.786-7.424s5.725-3.673 7.989-3.535c2.263.138 5.23-3.25 5.23-3.25 2.19-5.584 4.172-3.075 4.172-3.075 0 .27 0 0-.107.827-.769 6.128 12.426 25.494 12.614 25.84l1.272 30.609 1.272 38.736 1.283 42.29z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M51.808 177.033c-15.754 2.69-30.187-5.022-30.187-5.022l.143-2.613s.353-29.622-.638-31.893c-.992-2.27-1.764-13.782-1.2-15.554.566-1.771-2.059-28.257-2.059-28.257l-.426-10.76-15.478-6.29 6.917-14.42a52.922 52.922 0 002.405-6.22c1.203-3.736 6.805-7.417 6.805-7.417s5.726-3.673 7.985-3.535c2.26.139 5.241-3.247 5.241-3.247 2.194-5.583 4.61-3.074 4.61-3.074 0 .27-.23.385-.107.827 1.691 5.944 12.004 25.494 12.192 25.84l1.272 30.609 1.245 38.755 1.28 42.27z"}),B("path",{fill:"#000",d:"M47.562 66.263c-1.695-.707-10.67-10.955-10.67-10.955v-2.333c-.327-.768-2.272-.3-3.843.239l.676-14.168.769.638c1.679 5.94 12.883 26.237 13.068 26.579z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M47.988 65.417c-1.698-.71-10.674-10.955-10.674-10.955v-2.336c-.327-.768-2.267-.3-3.842.238l.664-14.151.769.634c1.694 5.932 12.895 26.224 13.083 26.57z"}),B("path",{fill:"#000",d:"M22.048 116.522c.211 0 10.955-1.13 10.955-1.13s6.505 12.795 6.079 15.904c-.427 3.109-1.2 5.867-3.816 5.38-2.617-.489-14.083.384-14.083.384l.865-20.538z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M21.621 115.673c.216 0 10.96-1.13 10.96-1.13s6.5 12.815 6.078 15.888c-.423 3.074-1.203 5.868-3.816 5.38-2.613-.488-14.086.384-14.086.384l.864-20.522z"}),B("path",{fill:"#F2AAB7",d:"M29.718 109.682s9.86 5.303 10.07 6.917c.212 1.613-5.018-.707-6.147-.992-.744-.176-1.501-.295-2.264-.353l-7.535.203 5.876-5.775z"}),B("circle",{cx:"44.807",cy:"65.886",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"44.807",cy:"65.463",r:"1.037",fill:"#3F3D56"}),B("circle",{cx:"46.717",cy:"110.797",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"46.717",cy:"110.37",r:"1.037",fill:"#3F3D56"}),B("circle",{cx:"45.844",cy:"88.341",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"45.844",cy:"87.919",r:"1.037",fill:"#3F3D56"}),B("path",{fill:"#FFF",d:"M69.76 115.039s.707 1.06 0 1.537c-.707.476.069 1.698.069 1.698s-1.764 1.03-.988 1.963c.777.934.285 5.126.285 5.126l-2.121 3.531s.126 2.264.134 5.322c0 4.773-.28 11.482-1.833 14.54l.208 25.095s-7.428 2.717-13.645 1.887l-.922-40.27s1.345-22.835 1.84-27.215a45.59 45.59 0 00.354-6.859s-.211-6.855-.922-10.033c0 0-.769-13.786-.845-17.602-.035-1.825.061-7.15.169-12.215.119-5.537.253-10.759.253-10.759l-1.402-11.1s1.402-.139 1.825.422c.19.177.395.335.615.473 2.424 1.636 10.978 6.67 10.978 6.67s4.733 1.883 5.867 4.58c1.134 2.698 1.921 4.611 2.47 5.38.55.768.85 4.38.85 4.38s1.63 6.648 2.9 7.773c1.273 1.126 2.187 8.273 2.187 8.273l-11.239 8.838s-.987 14.701-1.199 15.27c-.211.568 4.112 13.295 4.112 13.295z"}),B("path",{fill:"#FFF",d:"M70.186 115.039s.703 1.06 0 1.537c-.703.476.066 1.698.066 1.698s-1.764 1.03-.988 1.963c.776.934.284 5.126.284 5.126l-2.113 3.531s.127 2.264.138 5.322c0 4.773-.28 11.482-1.833 14.54l.212 25.095s-7.428 2.717-13.645 1.887l-.918-40.27s1.34-22.835 1.84-27.215c.29-2.274.408-4.567.35-6.859 0 0-.211-6.855-.918-10.033 0 0-.769-13.786-.85-17.602-.034-1.825.062-7.15.17-12.215.119-5.537.253-10.759.253-10.759l-1.852-11.25s1.852 0 2.279.572c.187.179.393.337.615.473 2.42 1.636 10.974 6.67 10.974 6.67s4.722 1.883 5.875 4.58c1.152 2.698 1.92 4.611 2.47 5.38.55.768.85 4.38.85 4.38s1.629 6.648 2.9 7.773c1.273 1.126 2.19 8.273 2.19 8.273l-11.238 8.838s-.988 14.701-1.203 15.27c-.215.568 4.092 13.295 4.092 13.295z"}),B("path",{fill:"#000",d:"M56.726 54.047l1.018 2.96-5.345 5.379c.12-5.537.254-10.76.254-10.76L50.801 40.38s1.852 0 2.279.572c.187.18.393.338.614.473l4.542 13.099-1.51-.477z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M56.292 53.198l1.018 2.955-5.34 5.38c.114-5.537.253-10.76.253-10.76l-1.856-11.25s1.856 0 2.278.572c.189.178.395.337.615.473l4.569 13.11-1.537-.48z"}),B("path",{fill:"#000",d:"M56.292 23.923a13.107 13.107 0 01-.646 4.076.546.546 0 01-.415-.1c-.103-3.458-1.802-6.708-3.896-9.471a10.033 10.033 0 00-2.113-2.19 4.138 4.138 0 00-2.867-.811c-1.152.157-2.17.941-3.335 1.041-1.537.127-2.913-.937-4.438-.987a4.35 4.35 0 00-3.262 1.514 8.9 8.9 0 00-1.749 3.239 18.974 18.974 0 00-.975 5.594c-.02 1.076-.123 2.425-1.122 2.817a5.725 5.725 0 00-1.45-4.38l-.022-.027v-.315c0-7.262 5.887-13.15 13.149-13.15S56.3 16.662 56.3 23.924h-.008z",opacity:"0.1"}),B("path",{fill:"#A96A1D",d:"M48.607 3.047a9.053 9.053 0 00-6.386-.5c-1.065.315-2.067.826-3.147 1.084-2.306.557-4.995-.047-6.974 1.302-1.1.769-1.76 1.983-2.375 3.166l-1.537 2.924c-.837 1.603-1.683 3.232-2.032 4.996-.35 1.763-.139 3.738.98 5.16.81 1.03 2.017 1.68 2.9 2.651a5.764 5.764 0 011.445 4.392c1-.384 1.1-1.74 1.122-2.816.043-1.903.372-3.79.976-5.595a8.9 8.9 0 011.748-3.239 4.353 4.353 0 013.263-1.518c1.537.054 2.916 1.118 4.438.988 1.152-.096 2.175-.88 3.335-1.038a4.12 4.12 0 012.866.811 9.844 9.844 0 012.11 2.19c2.098 2.767 3.8 6.002 3.9 9.472.434.315 1.06-.1 1.276-.592.215-.492.223-1.068.495-1.537.316-.542.919-.834 1.391-1.241 1.2-1.034 1.499-2.774 1.453-4.353-.046-1.58-.354-3.182-.054-4.734.18-.95.588-1.845.81-2.786.224-.942.25-1.998-.276-2.809-.768-1.187-2.386-1.426-3.796-1.537-1.602-.138-3.036.038-4.058-1.31a15.02 15.02 0 00-1.614-1.975c-.211-.204-2.259-1.472-2.259-1.556z"}),B("path",{fill:"#000",d:"M6.832 84.076l-4.012-7.42-1.271 11.45s.707 5.088.564 5.868c-.142.78 2.898 7.774 2.898 7.774s10.04 17.886 14.14 18.805l13.833-9.899-3.674-4.664s-1.272-.496-1.59 0c0 0-6.825-11.735-7.528-12.58-.703-.846-.569-2.548-.569-2.548s-1.06-1.13-.707-2.19c.354-1.06-2.028-4.734-2.028-4.734l2.19-2.048-12.246 2.186z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M3.032 75.807l-1.06.85-1.273 11.45s.707 5.087.565 5.867c-.142.78 2.901 7.774 2.901 7.774s10.037 17.886 14.137 18.805l13.855-9.899-3.677-4.664s-1.272-.496-1.59 0c0 0-6.82-11.735-7.528-12.58-.707-.846-.565-2.548-.565-2.548s-1.06-1.13-.707-2.19c.354-1.06-2.052-4.734-2.052-4.734l2.19-2.048-15.196-6.083z"}),B("path",{fill:"#000",d:"M68.841 120.68c.769.933.285 5.129.285 5.129l-2.121 3.508s.126 2.267.134 5.326l-3.566 1.114a2.121 2.121 0 01-2.75-2.09l.618-19.827 8.319 3.177c-.707.492.069 1.699.069 1.699s-1.764 1.03-.988 1.963z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M69.264 120.257c.769.93.284 5.125.284 5.125l-2.113 3.512s.127 2.264.138 5.322l-3.63 1.134a2.071 2.071 0 01-2.69-2.04l.618-19.897 8.315 3.186c-.71.491.066 1.698.066 1.698s-1.764 1.026-.988 1.96z"}),B("path",{fill:"#F2AAB7",d:"M72.023 110.797s-.565 3.608-1.979 3.819c-1.414.211-2.048 5.837-3.458 5.64-1.41-.195-.477-5.233-.427-6.209.05-.976-1.537-5.018-.353-5.936 1.183-.919 4.949 0 4.949 0l1.268 2.686z"}),B("path",{fill:"#000",d:"M75.012 83.016l2.663-5.38s1.064 4.1 1.064 6.29c0 2.19 1.484 2.406 1.484 2.406s1.625 1.92.768 3.323-1.199 4.876-1.199 4.876.28 6.644-.991 7.562c-1.272.919-1.556 3.113-1.556 3.113s-2.333 4.169-2.26 5.16c.073.992-3.25 7.704-3.25 7.704s1.625-8.342-7.847-11.946c0 0-.073-2.828.634-3.604.707-.776 1.81-1.153 1.119-5.057-.692-3.904-.2-8.61-.2-9.552 0-.941 2.12-6.809 2.12-6.809l7.451 1.914z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M76.196 76.868l2.328.768s1.065 4.1 1.065 6.29c0 2.19 1.483 2.406 1.483 2.406s1.625 1.92.768 3.323-1.202 4.876-1.202 4.876.284 6.644-.988 7.562c-1.272.919-1.537 3.113-1.537 3.113s-2.332 4.169-2.26 5.16c.074.992-3.254 7.704-3.254 7.704s1.626-8.342-7.846-11.946c0 0-.07-2.828.638-3.604.707-.776 1.81-1.153 1.118-5.057-.692-3.904-.2-8.61-.2-9.552 0-.941 2.121-6.809 2.121-6.809l7.766-4.234z"}),B("g",{transform:"translate(54)"},B("path",{fill:"#2F2E41",d:"M57.411 27.443l-24.329 4.12a2.463 2.463 0 01-2.787-1.768c-1.757-6.344-5.432-14.62-1.864-18.774a6.825 6.825 0 017.19-6.108C39.966-1.89 47.205-.869 52.097 3.38c4.924 1.7 6.78 4.718 6.132 8.814 2.127 1.862 3.242 3.96 3.477 6.261a9.042 9.042 0 01-2.474 7.035l-1.822 1.953z"}),B("path",{fill:"#9F616A",d:"M53.629 46.597l-18.86-1.11c1.848-4.242 2.586-8.327 1.848-12.203H50.67c-.032 2.976 1.45 8.124 2.959 13.313z"}),B("path",{fill:"#1D2649",d:"M30.926 220.87l-.773 10.575a3.367 3.367 0 003.56 3.606l5.433-.329a1.717 1.717 0 001.561-2.13l-3.015-12.06-6.766.338zM48.512 220.532l-3.016 12.06a1.717 1.717 0 001.562 2.13l5.432.33a3.367 3.367 0 003.561-3.607l-.773-10.575-6.766-.338z"}),B("path",{fill:"#387CCB",d:"M55.6282566 222.338306L48.2981566 221.60269 41.0002566 143.59474 38.2421733 221.351223 31.0404899 221.09324 18.9022399 113.404556 65.2767566 113.404556z"}),B("circle",{cx:"44.014",cy:"23.767",r:"14.006",fill:"#9F616A"}),B("path",{fill:"#FFF",d:"M53.335 35.005c-6.127 2.549-12.551 2.445-19.239 0 1.946-3.321-.962-5.923-2.456-9.276l24.97-.742c-1.91 2.913-4.727 6.354-3.275 10.018z"}),B("path",{fill:"#387CCB",d:"M17.387 87.645L6.663 80.99l9.146-26.787a12.637 12.637 0 015.524-6.561l3.08-1.784.269 27.023-7.295 14.765z"}),B("path",{fill:"#387CCB",d:"M63.743 100.655l-1.587-13.59c-.084-7.173 1.136-14.109 4.046-20.499l1.48-19.97L51.41 39.94c-.05.332-.093.663-.14.995l-7.626 3.813-7.438-1.69.042-2.378-14.793 6.656c4.892 22.743 2.224 46.36-6.188 74.255l19.487 5.329.162-9.357 17.368-1.24c.179 3.035.323 6.017.406 8.933 9.8 3.608 10.137 3.548 19.066-1.618-3.556-7.476-6.372-15.256-8.013-22.983z"}),B("path",{fill:"#387CCB",d:"M88.7601399 84.3168397L78.7754566 80.9887397 62.8042566 62.395923 67.6810233 46.5968397 89.8695066 77.6606397z"}),B("path",{fill:"#E6E6E6",d:"M57.468 98.711a2.778 2.778 0 003.318 2.093l8.476-1.92-1.225-5.41-8.476 1.92a2.774 2.774 0 00-2.093 3.317z"}),B("path",{fill:"#387CCB",d:"M65.093 92.453l4.807 8.875c8.086-2.255 15.094-9.365 21.819-17.75l-1.85-5.918-11.463 2.959-13.313 11.834z"}),B("path",{fill:"#3F3D56",d:"M.773 64.246a.785.785 0 00-.644 1.216l19.718 29.917c.11.168.28.286.475.332l9.175 2.159a.784.784 0 00.82-1.214L8.667 65.873a.78.78 0 00-.503-.32L.921 64.259a.837.837 0 00-.148-.013z"})),B("g",{transform:"translate(3 1)"},B("ellipse",{cx:"91.849",cy:"228.543",fill:"#08177D",opacity:"0.1",rx:"91.005",ry:"7.419"}),B("path",{fill:"#08177D",d:"M128.432 59.027H139.962V70.557H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 87.466H139.962V98.996H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 115.901H139.962V127.431H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 144.341H139.962V155.871H128.432z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M164.152703 217.917568L163.67027 223.662162 165.287838 223.337838 165.044595 217.106757z"}),B("path",{fill:"#E58687",d:"M127.249 190.642c-1.95 5.554-1.399 13.05-.961 16.69.162 1.346.312 2.165.312 2.165s-2.915 6.64-3.158 6.892c-.243.252-8.578 5.34-8.578 5.34l-5.826 3.4s-5.911-2.59-3.077-3.482a4.301 4.301 0 001.528-1.042c2.838-2.696 6.402-9.397 6.402-9.397s.243-3.401 1.135-5.019c.892-1.617.567-18.616.567-18.616l.07-27.71v-3.612l11.087.081c.07 1.227.23 2.446.478 3.65a55.78 55.78 0 001.545 6.145c1.954 6.32 1.143 16.905-1.524 24.515z"}),B("path",{fill:"#000",d:"M126.6 209.497s-2.915 6.64-3.158 6.892c-.243.252-8.578 5.34-8.578 5.34l-5.826 3.4s-5.911-2.59-3.077-3.482a4.301 4.301 0 001.528-1.042l.252 1.772 1.941-.081 16.622-14.955c.146 1.337.296 2.156.296 2.156z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M126.397 207.718l-16.715 15.056-1.941.081-.406-2.837s-3.397 4.37-10.946 4.127c0 0-4.532 2.996 2.185 3.158 6.718.162 15.296-.244 15.296-.244s5.992-9.324 11.007-8.108v7.042h1.54v-7.107a6.401 6.401 0 002.733-4.216 5.165 5.165 0 00-1.788-4.735 3.053 3.053 0 01-.965-2.217z"}),B("path",{fill:"#E58687",d:"M165.693 199.301c-1.078 3.852-.49 6.02.248 7.184v.024a13.277 13.277 0 011.937 4.732l.065.364-7.605 11.088-4.127 1.622s-6.637-2.266-5.425-2.915c.305-.158.779-1.001 1.322-2.165 1.622-3.507 3.86-9.977 3.86-9.977v-.053c.235-2.671.608-5.335 1.021-7.986.742-4.772-.62-16.484-.62-16.484s-.487-14.242-1.54-17.48a26.728 26.728 0 01-.945-5.044c-.22-2.027-.268-3.697-.268-3.697s4.37-6.082 12.381.486a8.814 8.814 0 011.675 1.816c5.533 7.873 1.078 25.216 1.078 25.216s-1.115 6.309-3.057 13.27z"}),B("path",{fill:"#000",d:"M167.955 211.605l-7.605 11.088-4.127 1.622s-6.637-2.266-5.424-2.915c.304-.158.778-1.001 1.321-2.165 2.81-.024 4.265 2.651 4.265 2.651l3.56-.567s4.694-9.227 5.748-9.79c1.054-.564.162-4.213.162-4.213v-.928c.029.032.053.069.086.101v.025a13.277 13.277 0 011.937 4.73l.077.361z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M156.628 222.126s-2.027-3.722-5.91-2.348c0 0-2.186 4.46-4.37 5.181-2.186.722-1.456 3.155 3.482 2.267 4.938-.888 12.38-1.622 12.38-1.622l.325-4.536 5.02-6.394s2.99-2.712-1.46-8.051v.928s.891 3.649-.163 4.213c-1.054.563-5.732 9.794-5.732 9.794l-3.572.568z"}),B("path",{fill:"#000",d:"M126.762 156.324c.07 1.227.23 2.446.479 3.649-4.565-.669-8.802-.337-11.579-.118v-3.612l11.1.081zM168.122 161.826s-6.487.316-14.222.38a52.799 52.799 0 01-.268-3.697s4.37-6.08 12.382.487a8.814 8.814 0 011.674 1.816c.125.346.27.684.434 1.014z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M168.122 161.096s-28.411 1.374-37.07-1.054c-8.66-2.428-17.243-.324-18.536-.888-1.293-.563-.243-9.39.892-11.574 1.135-2.185 7.362-24.284 7.362-24.284l5.992-31.24 6.312-1.74.446-.125 10.999-3.033 8.06-2.226s16.025 62.567 14.65 67.18c-.498 1.767-.579 3.625-.234 5.429.21 1.231.589 2.427 1.127 3.555z"}),B("path",{fill:"#C7DAF5",d:"M105.876 70.69s-5.676 6.082-1.379 9.47c4.298 3.39 7.123.325 7.123.325l-5.744-9.794z"}),B("path",{fill:"#000",d:"M105.876 70.69s-5.676 6.082-1.379 9.47c4.298 3.39 7.123.325 7.123.325l-5.744-9.794z",opacity:"0.1"}),B("path",{fill:"#E58687",d:"M151.731 30.71s-.665.632-1.666 1.564a228.28 228.28 0 01-5.412 4.918c-2.595 2.258-4.735 3.916-3.97 2.501.767-1.415.621-3.88.24-6.186-.028-.154-.053-.308-.081-.458a42.486 42.486 0 00-1.253-5.011s4.192-5.416 6.511-7.553c.864-.81 1.468-1.143 1.504-.58.04.759.608 2.433 1.314 4.209a100.004 100.004 0 001.532 3.71 144.33 144.33 0 001.281 2.885z"}),B("path",{fill:"#000",d:"M148.982 24.28a12.032 12.032 0 01-8.059 9.227 42.19 42.19 0 00-1.334-5.47s7.893-10.195 8.015-8.132c.028.783.645 2.518 1.378 4.375zM140.136 36.231l1.022-1.44s.677 4.128 3.166 2.308c2.49-1.82 2.611 13.698 2.611 13.698l-2.671 39.945-19.306-1.156.547-19.3 2.186-9.73 5.404-14.145 3.214-4.675 3.827-5.505z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M146.935 51.045l-2.432 36.117-.256 3.827-10.763-.644-.406-.025-8.108-.486.548-19.306 2.185-9.73 5.404-14.144 3.215-4.674 3.827-5.526 1.021-1.435s.677 4.127 3.166 2.307l.053-.037c2.433-1.54 2.546 13.756 2.546 13.756z"}),B("path",{fill:"#FFF",d:"M127.974 57.418s-.969 2.027-2.915 1.698c-1.945-.328-1.941 7.298-1.941 7.298s-1.294 1.216-2.186.162c-.891-1.054-3.243 2.51-3.243 2.51l-14.732.648s6.555 2.996 5.27 12.06c0 0 22.257-1.378 22.987-3.482.73-2.104-3.24-20.894-3.24-20.894z"}),B("path",{fill:"#000",d:"M127.974 57.418s-.969 2.027-2.915 1.698c-1.945-.328-1.941 7.298-1.941 7.298s-1.294 1.216-2.186.162c-.891-1.054-3.243 2.51-3.243 2.51l-14.732.648s6.555 2.996 5.27 12.06c0 0 22.257-1.378 22.987-3.482.73-2.104-3.24-20.894-3.24-20.894z",opacity:"0.03"}),B("path",{fill:"#FFF",d:"M85.1594595 74.4972973L89.0432432 77.8135135 121.013514 84.5310811 117.048649 80.4851351z"}),B("path",{fill:"#FFF",d:"M140.197 37.508c-.53.81-2.051 4.962-3.32 8.587-1.058 3.02-1.942 5.675-1.942 5.675s-2.063 13.435-3.117 15.864c-1.054 2.428-.483 11.898-.483 11.898l-3.928 23.388s-1.78 12.061-4.529 19.265c-2.712 7.09-5.732 10.415-5.825 10.52 1.216-1.646 7.844-34.054 7.844-34.054l2.19-40.873s.32-3.883.644-7.204c.324-3.32 6.892-7.852 6.892-7.852l6.332-9.004c.637.85.211 2.335-.758 3.79z"}),B("path",{fill:"#FFB0B1",d:"M123.685 90.036s-9.324-.405-13.84-5.83c-4.517-5.424 10.439-2.164 10.439-2.164l3.888.892-.487 7.102z"}),B("path",{fill:"#000",d:"M167.23 152.116c-.5 1.767-.58 3.625-.235 5.429-10.172.721-21.053-2.027-21.053-2.027-2.027 1.864-7.366 4.613-7.366 4.613l-2.911-36.081c-1.86-4.865-2.59-30.353-2.59-30.353s.166-1.333.405-3.332c0-.049 0-.101.02-.15.726-5.583 2.165-16.062 2.87-17.477.973-1.946-2.992-7.123-2.992-7.123l1.804-15.385.22-1.857c3.802-1.699 6.717-7.123 6.717-7.123l2.238-3.92c2.432-1.561 2.558 13.735 2.558 13.735l-2.433 36.117 8.06-2.225s16.062 62.546 14.688 67.16z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M177.669 154.61c-11.088 5.505-31.24.405-31.24.405-2.028 1.865-7.367 4.613-7.367 4.613l-2.915-36.08c-1.856-4.866-2.586-30.353-2.586-30.353s2.343-19.018 3.316-20.96c.284-.567.146-1.41-.19-2.319a29.343 29.343 0 01-1.776-13.577l.778-6.612.215-1.853c3.807-1.702 6.722-7.127 6.722-7.127l2.027-3.551 3.73-6.543 1.767-3.098.3.272 2.29 2.076s.974.81 2.433 2.027c3.174 2.675 8.66 7.386 11.49 10.269 2.488 2.537 3.275 12.41 3.502 19.84.15 4.893.06 8.729.06 8.729-2.509 4.13 4.055 37.297 4.055 37.297 1.528 6.41 3.389 46.544 3.389 46.544z"}),B("path",{fill:"#000",d:"M156.385 40.666s-7.61 14.485-6.726 19.99c.884 5.506 3.398 11.737 2.186 13.193a4.48 4.48 0 01-3.564 1.78c-1.216.08-4.46 2.347-4.46 2.59 0 .243-2.995.243-5.675 1.378-2.68 1.135-6.637 1.78-6.637 1.78s-7.702-.243-8.42.487c-.717.73-1.455 5.095.081 8.578 1.537 3.482 3.244 6.081 4.533 6.555 1.289.475 9.47-2.266 16.106-2.915 6.637-.648 13.841-5.906 13.841-5.906s7.934-2.838 9.324-7.61c1.39-4.771-1.698-30.997-1.698-30.997s-2.335-12.223-8.89-8.903z",opacity:"0.03"}),B("path",{fill:"#000",d:"M155.412 39.45s-7.61 14.49-6.717 19.99c.891 5.502 3.397 11.737 2.18 13.196a4.46 4.46 0 01-3.559 1.78c-1.216.081-4.46 2.348-4.46 2.59 0 .244-2.995.244-5.675 1.375-2.68 1.131-6.636 1.78-6.636 1.78s-7.703-.243-8.417.486c-.713.73-1.46 5.1.081 8.579 1.541 3.478 3.244 6.08 4.533 6.555 1.29.474 9.47-2.266 16.107-2.91 6.636-.645 13.84-5.912 13.84-5.912s7.93-2.837 9.304-7.605c1.375-4.768-1.698-31.001-1.698-31.001s-2.327-12.22-8.883-8.903z",opacity:"0.03"}),B("path",{fill:"#FFF",d:"M156.146 39.936s-7.61 14.49-6.718 19.991c.892 5.501 3.398 11.737 2.186 13.192a4.46 4.46 0 01-3.564 1.784c-1.216.08-4.46 2.347-4.46 2.586 0 .24-2.991.243-5.675 1.379-2.684 1.135-6.637 1.78-6.637 1.78s-7.702-.244-8.42.486c-.717.73-1.455 5.1.081 8.578 1.537 3.479 3.243 6.081 4.533 6.556 1.289.474 9.47-2.267 16.106-2.915 6.637-.649 13.84-5.907 13.84-5.907s7.935-2.838 9.325-7.61c1.39-4.771-1.678-30.997-1.678-30.997s-2.368-12.203-8.92-8.903z"}),B("path",{fill:"#000",d:"M155.98 78.799s-6.081-1.217-3.965.81c2.116 2.027 2.104 3.803 4.694 3.722 2.591-.081-.73-4.532-.73-4.532zM166.257 122.412s-2.749 1.861 2.51 6.15c5.257 4.29-2.51-6.15-2.51-6.15zM161.01 137.708c0 .243-.972 8.919 2.668 11.088 3.64 2.169-2.667-11.088-2.667-11.088z",opacity:"0.1"}),B("path",{fill:"#FFB0B1",d:"M103.208 69.714c-2.935.1-9.276.997-5.988 7.13 2.907 5.429 7.792 1.8 10.54-.952a10.358 10.358 0 00-4.552-6.178zM107.797 75.843l.122-.125-.122.125z"}),B("path",{fill:"#000",d:"M155.173 32.177c-3.114 2.128-5.724 3.924-6.235 4.297-1.395 1.034-4.054 7.103-5.77 10.2-1.365 2.494-5.804 3.134-7.479 3.292l.215-1.852c3.807-1.703 6.722-7.128 6.722-7.128l7.524-13.191 2.59 2.355s.974.81 2.433 2.027z",opacity:"0.1"}),B("path",{fill:"#DCE7FF",d:"M155.173 31.934c-3.114 2.128-5.724 3.924-6.235 4.301-1.395 1.03-4.054 7.099-5.77 10.196-1.365 2.493-5.804 3.134-7.479 3.292l.215-1.853c3.807-1.702 6.722-7.127 6.722-7.127l7.524-13.192 2.59 2.348s.974.802 2.433 2.035z"}),B("path",{fill:"#E58687",d:"M149.181 21.604a12.024 12.024 0 11-24.049.004 12.024 12.024 0 0124.05-.004z"}),B("path",{fill:"#000",d:"M170.165 62.043a10.686 10.686 0 01-3.88-4.167c-.677-1.338-1.127-2.883-2.282-3.831-1.042-.852-2.433-1.059-3.73-1.44-4.265-1.26-7.84-5.152-7.974-9.596-.065-2.091.587-4.18.292-6.25a6.924 6.924 0 00-1.355-3.224c-.357-.45-.749-.871-1.171-1.26-.568-.536-1.164-1.055-1.683-1.622a6.296 6.296 0 01-.85-1.156c-.194-.34-.35-.7-.467-1.074-.81-2.481-.073-5.424-.965-7.934l-.049-.138c-.336-.892-1.021-1.783-1.974-1.852-.953-.07-1.768.721-2.676 1.074-1.901.738-3.952-.519-5.537-1.8-1.586-1.281-3.373-2.745-5.388-2.46-1.334.19-2.388 1.098-3.617 1.568-.277.107-.563.19-.855.247a12.02 12.02 0 0123.177 4.48c.001.844-.087 1.685-.263 2.51a100.004 100.004 0 001.532 3.71l2.29 2.075s.974.81 2.433 2.027c3.174 2.675 8.66 7.386 11.49 10.269 2.488 2.546 3.267 12.413 3.502 19.844z",opacity:"0.1"}),B("path",{fill:"#591D4B",d:"M126.718 9.474c.58-1.18.867-2.501 1.56-3.62 1.018-1.622 2.794-2.66 4.618-3.288 4.763-1.642 14.83-4.025 17.838 0 .592.811 1.082 1.711 1.901 2.27.624.426 1.379.609 2.064.929 1.917.9 3.142 2.862 3.794 4.865.653 2.002.848 4.151 1.326 6.215.612 2.647 1.686 5.156 2.757 7.65 1.26 2.943 2.598 5.996 5.03 8.075 3.321 2.838 4.055 6.856 7.136 9.97 3.649 3.696 3.531 9.798 1.65 14.642-.247.637-.527 1.302-.43 1.979.097.677.6 1.293 1.074 1.832l1.995 2.25c-4.719 1.14-10.058-1.325-12.255-5.651-.677-1.338-1.127-2.878-2.287-3.831-1.038-.852-2.432-1.054-3.725-1.435-4.265-1.265-7.841-5.161-7.975-9.604-.065-2.088.588-4.176.292-6.244a6.892 6.892 0 00-1.358-3.243c-1.115-1.455-2.797-2.432-3.705-4.054-1.537-2.712-.37-6.235-1.476-9.146-.34-.892-1.022-1.784-1.974-1.853-.953-.068-1.768.722-2.68 1.075-1.897.738-3.949-.515-5.534-1.8-1.585-1.285-3.373-2.745-5.392-2.457-1.334.186-2.384 1.095-3.612 1.569-.908.349-2.749.66-3.543-.105-1.679-1.545 2.21-5.546 2.91-6.99z"}),B("path",{fill:"#000",d:"M167.903 56.254c-.681-1.338-1.127-2.878-2.287-3.827-1.038-.851-2.432-1.058-3.73-1.44-4.26-1.26-7.836-5.156-7.974-9.6-.065-2.087.588-4.179.296-6.246a6.932 6.932 0 00-1.358-3.223c-1.119-1.456-2.801-2.433-3.705-4.054-1.537-2.709-.37-6.232-1.48-9.146-.337-.888-1.022-1.78-1.97-1.853-.95-.073-1.772.726-2.68 1.078-1.897.738-3.953-.519-5.534-1.8-1.581-1.28-3.377-2.744-5.392-2.46-1.334.19-2.388 1.098-3.612 1.568-.908.349-2.753.665-3.547-.101-1.67-1.622 2.217-5.615 2.915-7.05.58-1.184.867-2.501 1.564-3.62.037-.061.077-.122.118-.183a6.438 6.438 0 00-1.334 1.517c-.693 1.118-.98 2.432-1.56 3.62-.702 1.435-4.59 5.44-2.915 7.05.81.77 2.635.454 3.543.105 1.216-.474 2.278-1.382 3.612-1.569 2.027-.288 3.81 1.176 5.392 2.457 1.58 1.281 3.649 2.538 5.538 1.8.908-.353 1.702-1.147 2.675-1.074.973.073 1.622.96 1.975 1.852 1.106 2.911-.061 6.434 1.475 9.146.908 1.594 2.59 2.59 3.706 4.054a6.892 6.892 0 011.358 3.244c.296 2.067-.357 4.155-.292 6.243.134 4.46 3.71 8.34 7.974 9.604 1.285.381 2.688.584 3.726 1.435 1.164.953 1.622 2.493 2.286 3.831 2.198 4.326 7.537 6.79 12.256 5.652l-.94-1.063c-4.091.061-8.23-2.266-10.1-5.947z",opacity:"0.1"}),B("path",{fill:"#000",d:"M139.954 37.751c-.531.811-2.051 4.963-3.32 8.587-1.188-.462-2.266-3.41-2.266-3.41l6.332-9.008c.649.892.223 2.372-.746 3.831z",opacity:"0.1"}),B("path",{fill:"#DCE7FF",d:"M140.197 37.508c-.53.81-2.051 4.962-3.32 8.587-1.188-.459-2.266-3.41-2.266-3.41l6.332-9.004c.649.888.223 2.372-.746 3.827z"}),B("path",{fill:"#BE8B87",d:"M103.378 78.924l-3.51-11.071a1.034 1.034 0 01.673-1.302c.543-.17 1.122.13 1.297.673l3.51 11.06-.348 2.315-1.622-1.675z"}),B("path",{fill:"#FFF",d:"M100.2 66.88a1.038 1.038 0 011.301.673l3.511 11.06-.263 1.734.255.268.349-2.315-3.531-11.06a1.038 1.038 0 00-1.298-.672c-.22.07-.41.214-.539.405a1.41 1.41 0 01.215-.093z",opacity:"0.1"}),B("path",{fill:"#EFC8C4",d:"M103.378378 78.9243243L105.348649 78.3 105.060811 80.1972973 105 80.6148649 104.424324 80.0148649z"}),B("path",{fill:"#727A9C",d:"M104.424 80.015a.405.405 0 01.126-.106.178.178 0 01.19 0c.028.034.051.07.07.11.054.09.146.152.25.166l-.06.406-.576-.576z"}),B("path",{fill:"#FFB0B1",d:"M99.847 71.785s7.042-.04 5.384 2.956c-1.658 2.995-4.249 3.356-4.249 3.356l-1.135-6.312z"}))))))}var I=a.a.createElement,q=function(){var e=Object(L.useRouter)(),t=function(){return e.push("/declarations/liberal/etape0")};return I("div",{className:"w-full max-w-md px-4 py-2 text-gray-700 transition duration-500 ease-in transform bg-gray-200 border rounded shadow hover:scale-105 hover:border-gray-400",onClick:t,onKeyPress:function(e){return n=t,"Enter"===(l=e).key&&n(l);var l,n},role:"button",tabIndex:"0"},I(o.p,null,"Vous exercez"," ",I(E,{type:"highlight",color:"lightgreen",show:!1,animate:!0},"en lib\xe9ral ?")),I(o.m,null,"Vous n\u2019avez pas besoin de compte ",I("br",null),"pour remonter un signalement de violence."),I(P,{className:"mx-auto mt-5"}),I(o.m,{className:"mt-8"},"Votre d\xe9claration pourra \xeatre effectu\xe9e de mani\xe8re anonyme."),I("div",{className:"my-6 text-center"},I(o.k,{type:"submit"},"D\xe9clarer")))};function W(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}var $=0;function G(){return++$}function J(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){e.current=!1}),[]),e.current}var U,X="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function K(e,t){if(e in t){var l=t[e];return"function"===typeof l?l():l}var n=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}function Z(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,l)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){e.splice(0).forEach((function(e){return e()}))}};return t}function Q(e){for(var t,l=arguments.length,n=new Array(l>1?l-1:0),i=1;i<l;i++)n[i-1]=arguments[i];e&&n.length>0&&(t=e.classList).add.apply(t,n)}function Y(e){for(var t,l=arguments.length,n=new Array(l>1?l-1:0),i=1;i<l;i++)n[i-1]=arguments[i];e&&n.length>0&&(t=e.classList).remove.apply(t,n)}function ee(e,t,l,n,i){var a=Z(),c=void 0!==i?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(i):function(){};return Q.apply(void 0,[e].concat(t,l)),a.nextFrame((function(){Y.apply(void 0,[e].concat(l)),Q.apply(void 0,[e].concat(n)),a.add(function(e,t){var l=Z();if(!e)return l.dispose;var n=getComputedStyle(e),i=[n.transitionDuration,n.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),a=i[0],c=i[1];return 0!==a?l.setTimeout((function(){t(U.Finished)}),a+c):t(U.Finished),l.add((function(){return t(U.Cancelled)})),l.dispose}(e,(function(l){return Y.apply(void 0,[e].concat(n,t)),c(l)})))})),a.add((function(){return Y.apply(void 0,[e].concat(t,l,n))})),a.add((function(){return c(U.Cancelled)})),a.dispose}function te(e){return void 0===e&&(e=""),Object(i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(U||(U={}));var le,ne=Object(i.createContext)(null);!function(e){e.Visible="visible",e.Hidden="hidden"}(le||(le={}));var ie=Object(i.createContext)(null);function ae(e){var t=Object(i.useRef)([]),l=function(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){return function(){e.current=!1}}),[]),e}(),n=Object(i.useCallback)((function(n){var i=t.current.indexOf(n);-1!==i&&(t.current.splice(i,1),t.current.length<=0&&l.current&&(null===e||void 0===e||e()))}),[e,l,t]),a=Object(i.useCallback)((function(e){return t.current.push(e),function(){return n(e)}}),[t,n]);return Object(i.useMemo)((function(){return{children:t,register:a,unregister:n}}),[a,n,t])}function ce(e){var t=e.children,l=e.enter,n=e.enterFrom,a=e.enterTo,c=e.leave,r=e.leaveFrom,o=e.leaveTo,s=W(e,["children","enter","enterFrom","enterTo","leave","leaveFrom","leaveTo"]),u=Object(i.useRef)(null),f=Object(i.useState)(le.Visible),h=f[0],d=f[1],p=function(){var e=Object(i.useContext)(ne);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),m=p.show,z=p.appear,v=function(){var e=Object(i.useContext)(ie);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),F=v.register,g=v.unregister,M=J(),y=Object(i.useState)(G)[0],b=Object(i.useRef)(!1),w=ae(Object(i.useCallback)((function(){b.current||(d(le.Hidden),g(y))}),[y,g,b]));X((function(){return F(y)}),[F,y]);var H=te(l),x=te(n),_=te(a),R=te(c),O=te(r),E=te(o);if(Object(i.useEffect)((function(){if(h===le.Visible&&null===u.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[u,h]),X((function(){var e=u.current;if(e&&(!M||z))return b.current=!0,m?ee(e,H,x,_,(function(){b.current=!1})):ee(e,R,O,E,(function(e){b.current=!1,e===U.Finished&&w.children.current.length<=0&&(d(le.Hidden),g(y))}))}),[y,b,g,w,u,M,z,m,H,x,_,R,O,E]),h===le.Hidden)return null;if("function"===typeof t)return Object(i.createElement)(ie.Provider,{value:w},t(u));var C=s.as,S=void 0===C?"div":C,j=W(s,["as"]);return Object(i.createElement)(ie.Provider,{value:w},Object(i.createElement)(S,Object.assign({},j,{ref:u}),t))}function re(e){var t,l=e.show,n=e.appear,a=void 0!==n&&n,c=W(e,["show","appear"]);if(![!0,!1].includes(l))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var r=Object(i.useState)(l?le.Visible:le.Hidden),o=r[0],s=r[1],u=ae(Object(i.useCallback)((function(){s(le.Hidden)}),[])),f=J(),h=Object(i.useMemo)((function(){return{show:l,appear:a||!f}}),[l,a,f]);return Object(i.useEffect)((function(){l?s(le.Visible):u.children.current.length<=0&&s(le.Hidden)}),[l,u]),Object(i.createElement)(ie.Provider,{value:u},Object(i.createElement)(ne.Provider,{value:h},K(o,((t={})[le.Visible]=function(){return Object(i.createElement)(ce,Object.assign({},c))},t[le.Hidden]=null,t))))}re.Child=ce;var oe=l("Z8x/"),se=a.a.createElement,ue=function(e){var t=e.openModal,l=e.setOpenModal,n=e.title,a=e.content,c=Object(i.useCallback)((function(){return function(e){27!==e.keyCode&&"Esc"!==e.keyCode||l(!1)}}),[l]);Object(i.useEffect)((function(){return document.addEventListener("keydown",c,!1),function(){document.removeEventListener("keydown",c,!1)}}),[t,l,c]);var r=function(){l(!1)};return se(re,{show:t,enter:"transition-opacity duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"},se("div",{className:"fixed inset-0 z-10 overflow-y-auto",onClick:r,onKeyDown:c,role:"button",tabIndex:"0"},se("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},se("div",{className:"fixed inset-0 transition-opacity"},se("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),se("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen"}),"\u200b",se("div",{className:"inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",onClick:function(e){e.stopPropagation()},onKeyPress:function(e){return l=r,"Esc"===(t=e).key&&l(t);var t,l}},se("div",{className:"px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4"},se("div",{className:"sm:flex sm:items-start"},se("div",{className:"flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-200 rounded-full sm:mx-0 sm:h-10 sm:w-10"},se(oe.a,null)),se("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},se("h3",{className:"text-lg font-medium leading-6 text-gray-900",id:"modal-headline"},n),se("div",{className:"mt-2"},se("p",{className:"text-sm leading-5 text-gray-700"},a))))),se("div",{className:"px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"},se("span",{className:"flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"},se("button",{type:"button",className:"inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5",onClick:function(){return l(!1)}},"Annuler")))))))},fe=a.a.createElement;var he=function(){return fe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 120"},fe("path",{fill:"#FFF",d:"M0 64l80-5.3C160 53 320 43 480 53.3 640 64 800 96 960 101.3c160 5.7 320-16.3 400-26.6l80-10.7v256H0z"}))},de=l("bmSn"),pe=a.a.createElement;t.default=function(){var e=Object(n.c)(de.a).action,t=Object(i.useState)(!1),l=t[0],c=t[1];return Object(i.useEffect)((function(){e()}),[e]),pe(a.a.Fragment,null,pe("div",{style:{background:"#387CCB",color:"#FFF",overflow:"hidden",textAlign:"center"},className:"relative"},pe(o.e,null,"Observatoire national des violences en sant\xe9"),pe(ue,{openModal:l,setOpenModal:c,title:"Nom de cat\xe9gorie",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),pe(he,{className:"block"})),pe("div",{className:"flex items-center justify-center w-full"},pe("div",{className:"flex flex-wrap items-stretch justify-center w-full min-h-full py-6 space-x-0 space-y-8 lg:space-y-0 lg:space-x-8"},pe(V,null),pe(q,null))),pe(T,null))}},rePB:function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l.d(t,"a",(function(){return n}))},vlRD:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l("RXBc")}])},wx14:function(e,t,l){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return n}))},zLVn:function(e,t,l){"use strict";function n(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}l.d(t,"a",(function(){return n}))}}`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>class h{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function d(e,t,l,n,i){return{type:"path",ops:M(e,t,l,n,i)}}function p(e,t,l){const n=(e||[]).length;if(n>2){const i=[];for(let t=0;t<n-1;t++)i.push(...M(e[t][0],e[t][1],e[t+1][0],e[t+1][1],l));return t&&i.push(...M(e[n-1][0],e[n-1][1],e[0][0],e[0][1],l)),{type:"path",ops:i}}return 2===n?d(e[0][0],e[0][1],e[1][0],e[1][1],l):{type:"path",ops:[]}}function m(e,t,l,n,i){return function(e,t){return p(e,!0,t)}([[e,t],[e+l,t],[e+l,t+n],[e,t+n]],i)}function z(e,t,l,n,i){return function(e,t,l,n){const[i,a]=w(n.increment,e,t,n.rx,n.ry,1,n.increment*F(.1,F(.4,1,l),l),l);let c=b(i,null,l);if(!l.disableMultiStroke){const[i]=w(n.increment,e,t,n.rx,n.ry,1.5,0,l),a=b(i,null,l);c=c.concat(a)}return{estimatedPoints:a,opset:{type:"path",ops:c}}}(e,t,i,function(e,t,l){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),i=Math.max(l.curveStepCount,l.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/i;let c=Math.abs(e/2),r=Math.abs(t/2);const o=1-l.curveFitting;return c+=g(c*o,l),r+=g(r*o,l),{increment:a,rx:c,ry:r}}(l,n,i)).opset}function v(e){return e.randomizer||(e.randomizer=new h(e.seed||0)),e.randomizer.next()}function F(e,t,l,n=1){return l.roughness*n*(v(l)*(t-e)+e)}function g(e,t,l=1){return F(-e,e,t,l)}function M(e,t,l,n,i,a=!1){const c=a?i.disableMultiStrokeFill:i.disableMultiStroke,r=y(e,t,l,n,i,!0,!1);if(c)return r;const o=y(e,t,l,n,i,!0,!0);return r.concat(o)}function y(e,t,l,n,i,a,c){const r=Math.pow(e-l,2)+Math.pow(t-n,2),o=Math.sqrt(r);let s=1;s=o<200?1:o>500?.4:-.0016668*o+1.233334;let u=i.maxRandomnessOffset||0;u*u*100>r&&(u=o/10);const f=u/2,h=.2+.2*v(i);let d=i.bowing*i.maxRandomnessOffset*(n-t)/200,p=i.bowing*i.maxRandomnessOffset*(e-l)/200;d=g(d,i,s),p=g(p,i,s);const m=[],z=()=>g(f,i,s),F=()=>g(u,i,s);return a&&(c?m.push({op:"move",data:[e+z(),t+z()]}):m.push({op:"move",data:[e+g(u,i,s),t+g(u,i,s)]})),c?m.push({op:"bcurveTo",data:[d+e+(l-e)*h+z(),p+t+(n-t)*h+z(),d+e+2*(l-e)*h+z(),p+t+2*(n-t)*h+z(),l+z(),n+z()]}):m.push({op:"bcurveTo",data:[d+e+(l-e)*h+F(),p+t+(n-t)*h+F(),d+e+2*(l-e)*h+F(),p+t+2*(n-t)*h+F(),l+F(),n+F()]}),m}function b(e,t,l){const n=e.length,i=[];if(n>3){const a=[],c=1-l.curveTightness;i.push({op:"move",data:[e[1][0],e[1][1]]});for(let t=1;t+2<n;t++){const l=e[t];a[0]=[l[0],l[1]],a[1]=[l[0]+(c*e[t+1][0]-c*e[t-1][0])/6,l[1]+(c*e[t+1][1]-c*e[t-1][1])/6],a[2]=[e[t+1][0]+(c*e[t][0]-c*e[t+2][0])/6,e[t+1][1]+(c*e[t][1]-c*e[t+2][1])/6],a[3]=[e[t+1][0],e[t+1][1]],i.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&2===t.length){const e=l.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+g(e,l),t[1]+g(e,l)]})}}else 3===n?(i.push({op:"move",data:[e[1][0],e[1][1]]}),i.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):2===n&&i.push(...M(e[0][0],e[0][1],e[1][0],e[1][1],l));return i}function w(e,t,l,n,i,a,c,r){const o=[],s=[],u=g(.5,r)-Math.PI/2;s.push([g(a,r)+t+.9*n*Math.cos(u-e),g(a,r)+l+.9*i*Math.sin(u-e)]);for(let f=u;f<2*Math.PI+u-.01;f+=e){const e=[g(a,r)+t+n*Math.cos(f),g(a,r)+l+i*Math.sin(f)];o.push(e),s.push(e)}return s.push([g(a,r)+t+n*Math.cos(u+2*Math.PI+.5*c),g(a,r)+l+i*Math.sin(u+2*Math.PI+.5*c)]),s.push([g(a,r)+t+.98*n*Math.cos(u+c),g(a,r)+l+.98*i*Math.sin(u+c)]),s.push([g(a,r)+t+.9*n*Math.cos(u+.5*c),g(a,r)+l+.9*i*Math.sin(u+.5*c)]),[s,o]}function H(e,t){return{maxRandomnessOffset:2,roughness:"highlight"===e?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==e,disableMultiStrokeFill:!1,seed:t}}function x(e,t,l,n,i,a){const c=[];let r=l.strokeWidth||2;const o=function(e){const t=e.padding;if(t||0===t){if("number"==typeof t)return[t,t,t,t];if(Array.isArray(t)){const e=t;if(e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}}return[5,5,5,5]}(l),s=void 0===l.animate||!!l.animate,u=l.iterations||2,h=H("single",a);switch(l.type){case"underline":{const e=t.y+t.h+o[2];for(let l=0;l<u;l++)l%2?c.push(d(t.x+t.w,e,t.x,e,h)):c.push(d(t.x,e,t.x+t.w,e,h));break}case"strike-through":{const e=t.y+t.h/2;for(let l=0;l<u;l++)l%2?c.push(d(t.x+t.w,e,t.x,e,h)):c.push(d(t.x,e,t.x+t.w,e,h));break}case"box":{const e=t.x-o[3],l=t.y-o[0],n=t.w+(o[1]+o[3]),i=t.h+(o[0]+o[2]);for(let t=0;t<u;t++)c.push(m(e,l,n,i,h));break}case"bracket":{const e=Array.isArray(l.brackets)?l.brackets:l.brackets?[l.brackets]:["right"],n=t.x-2*o[3],i=t.x+t.w+2*o[1],a=t.y-2*o[0],r=t.y+t.h+2*o[2];for(const l of e){let e;switch(l){case"bottom":e=[[n,t.y+t.h],[n,r],[i,r],[i,t.y+t.h]];break;case"top":e=[[n,t.y],[n,a],[i,a],[i,t.y]];break;case"left":e=[[t.x,a],[n,a],[n,r],[t.x,r]];break;case"right":e=[[t.x+t.w,a],[i,a],[i,r],[t.x+t.w,r]]}e&&c.push(p(e,!1,h))}break}case"crossed-off":{const e=t.x,l=t.y,n=e+t.w,i=l+t.h;for(let t=0;t<u;t++)t%2?c.push(d(n,i,e,l,h)):c.push(d(e,l,n,i,h));for(let t=0;t<u;t++)t%2?c.push(d(e,i,n,l,h)):c.push(d(n,l,e,i,h));break}case"circle":{const e=H("double",a),l=t.w+(o[1]+o[3]),n=t.h+(o[0]+o[2]),i=t.x-o[3]+l/2,r=t.y-o[0]+n/2,s=Math.floor(u/2),f=u-2*s;for(let t=0;t<s;t++)c.push(z(i,r,l,n,e));for(let t=0;t<f;t++)c.push(z(i,r,l,n,h));break}case"highlight":{const e=H("highlight",a);r=.95*t.h;const l=t.y+t.h/2;for(let n=0;n<u;n++)n%2?c.push(d(t.x+t.w,l,t.x,l,e)):c.push(d(t.x,l,t.x+t.w,l,e));break}}if(c.length){const t=function(e){const t=[];for(const l of e){let e="";for(const n of l.ops){const l=n.data;switch(n.op){case"move":e.trim()&&t.push(e.trim()),e=`M${l[0]} ${l[1]} `;break;case"bcurveTo":e+=`C${l[0]} ${l[1]}, ${l[2]} ${l[3]}, ${l[4]} ${l[5]} `;break;case"lineTo":e+=`L${l[0]} ${l[1]} `}}e.trim()&&t.push(e.trim())}return t}(c),a=[],o=[];let u=0;const h=(e,t,l)=>e.setAttribute(t,l);for(const n of t){const t=document.createElementNS(f,"path");if(h(t,"d",n),h(t,"fill","none"),h(t,"stroke",l.color||"currentColor"),h(t,"stroke-width",""+r),s){const e=t.getTotalLength();a.push(e),u+=e}e.appendChild(t),o.push(t)}if(s){let e=0;for(let t=0;t<o.length;t++){const l=o[t],c=a[t],r=u?i*(c/u):0,s=n+e,f=l.style;f.strokeDashoffset=""+c,f.strokeDasharray=""+c,f.animation=`rough-notation-dash ${r}ms ease-out ${s}ms forwards`,e+=r}}}}class _{constructor(e,t){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const e=window.__rno_kf_s=document.createElement("style");e.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(e)}}();const e=this._svg=document.createElementNS(f,"svg");e.setAttribute("class","rough-annotation");const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const l="highlight"===this._config.type;if(this._e.insertAdjacentElement(l?"beforebegin":"afterend",e),this._state="not-showing",l){const e=window.getComputedStyle(this._e).position;(!e||"static"===e)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length!==this._lastSizes.length)return!0;for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}return!1}isSameRect(e,t){const l=(e,t)=>Math.round(e)===Math.round(t);return l(e.x,t.x)&&l(e.y,t.y)&&l(e.w,t.w)&&l(e.h,t.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(e,t){let l=this._config;t&&(l=JSON.parse(JSON.stringify(this._config)),l.animate=!1);const n=this.rects();let i=0;n.forEach(e=>i+=e.w);const a=l.animationDuration||800;let c=0;for(let r=0;r<n.length;r++){const t=a*(n[r].w/i);x(e,n[r],l,c+this._animationDelay,t,this._seed),c+=t}this._lastSizes=n,this._state="showing"}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let l=0;l<t.length;l++)e.push(this.svgRect(this._svg,t[l]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const l=e.getBoundingClientRect(),n=t;return{x:(n.x||n.left)-(l.x||l.left),y:(n.y||n.top)-(l.y||l.top),w:n.width,h:n.height}}}var R=a.a.createElement;function O(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}var E=function(e){var t=e.children,l=e.type,n=void 0===l?"highlight":l,a=e.color,c=void 0===a?"orange":a,r=e.animate,o=void 0===r||r,f=e.animationDuration,h=void 0===f?1e3:f,d=Object(u.a)(e,["children","type","color","animate","animationDuration"]),p=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=function(e,t){return new _(e,t)}(p.current,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?O(Object(l),!0).forEach((function(t){Object(s.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):O(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({animate:o,animationDuration:h,color:c,type:n},d));setTimeout((function(){e.show()}),1e3*Math.random())}),[p,n,c,o,h,d]),R("span",{ref:p},t)},C=l("wx14"),S=a.a.createElement;function j(e){return S("svg",Object(C.a)({xmlns:"http://www.w3.org/2000/svg",width:"116",height:"64",viewBox:"0 0 116 64"},e),S("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},S("g",{transform:"translate(-469 -104)"},S("g",{transform:"translate(469 104)"},S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M26 63h-.27c0-7.03-5.7-12.73-12.73-12.73S.27 55.97.27 63H0c0-7.18 5.82-13 13-13s13 5.82 13 13zM116 63h-.27c0-7.03-5.7-12.73-12.73-12.73S90.27 55.97 90.27 63H90c0-7.18 5.82-13 13-13s13 5.82 13 13zM84 33h-.259c0-11.991-9.977-21.747-22.241-21.747S39.259 21.009 39.259 33H39c0-12.13 10.093-22 22.5-22S84 20.87 84 33z"}),S("circle",{cx:"19",cy:"6",r:"6",fill:"#FF6862",fillRule:"nonzero"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M21 40.8563095L29.6381721 30 46.6213625 30 57 40.6681104 56.7903498 40.810368 56.8651976 40.810368 56.8651976 63 21.0118382 63 21.0118382 40.810368z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M26 30H27V39H26z",transform:"rotate(-180 26.5 34.5)"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M29.429646 30L40 43.1177939 40 63 21 63 21 40.6223193z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M34 45H37V48H34z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M34 51H37V54H34z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M34 45H37V48H34z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M34 51H37V54H34z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M28 45H31V48H28z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M28 51H31V54H28z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M28 45H31V48H28z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M28 51H31V54H28z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22 45H25V48H22z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22 51H25V54H22z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M22 45H25V48H22z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M22 51H25V54H22z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M64 7H65V10H64z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M49 11H65V63H49z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M65 11H70V63H65z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 14H53V15H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 14H56V15H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 14H63V15H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 21H53V22H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 21H56V22H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 21H63V22H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 26H53V27H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 26H56V27H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 26H63V27H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 30H53V31H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 30H56V31H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 30H63V31H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 35H53V36H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 35H56V36H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 35H63V36H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M52 42H53V43H52z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 42H56V43H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 42H63V43H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M53 46H54V47H53z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 46H56V47H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 46H63V47H62z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M53 51H54V52H53z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 51H56V52H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M55 60H56V63H55z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M62 51H63V52H62z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M65 7H66V10H65z"}),S("path",{fill:"#6C63FF",fillRule:"nonzero",d:"M83 29H84V31H83z"}),S("path",{fill:"#387CCB",fillRule:"nonzero",d:"M68 31H84V64H68z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M85 31H90V64H85z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 35H74V36H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 35H78V36H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 35H81V36H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 42H74V43H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 42H78V43H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 42H81V43H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 46H74V47H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 46H78V47H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M80 46H81V47H80z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M73 51H74V52H73z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 51H78V52H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M77 60H78V63H77z"}),S("path",{fill:"#FFF",fillRule:"nonzero",d:"M82 51H83V52H82z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M85 29H86V31H85z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M0 62.853H116V63.853H0z"}),S("circle",{cx:"95.5",cy:"55.5",r:"4.5",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M99.34 51c.502.812.079 1.755-.999 2.229-1.077.473-2.492.337-3.341-.322.406.656 1.333 1.085 2.365 1.093 1.031.008 1.973-.405 2.4-1.055.428-.65.261-1.412-.425-1.945z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M95 53L95.0093948 53 95.1773273 63 94.8226727 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M95.8230738 58.049676L95.9918394 58.0500651 95.9933095 58.6856057 95.8245439 58.6852166z",transform:"rotate(62.234 95.908 58.368)"}),S("circle",{cx:"107",cy:"50",r:"6",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M111.68 45c1.004 2.435.158 5.267-1.997 6.687-2.155 1.42-4.985 1.01-6.683-.967.811 1.968 2.666 3.255 4.73 3.28 2.063.025 3.946-1.216 4.801-3.165.856-1.948.522-4.237-.851-5.835z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M105.5 49L105.526367 49 106 63 105 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M105.928818 55.6259871L106.185456 55.6265788 106.187692 56.5930311 105.931053 56.5924393z",transform:"rotate(62.234 106.058 56.11)"}),S("circle",{cx:"4.5",cy:"55.5",r:"4.5",fill:"#5FC7AE",fillRule:"nonzero"}),S("path",{fill:"#000",fillRule:"nonzero",d:"M4.34 51c.502.812.079 1.755-.999 2.229-1.077.473-2.492.337-3.341-.322.406.656 1.333 1.085 2.365 1.093 1.031.008 1.973-.405 2.4-1.055.428-.65.261-1.412-.425-1.945z",opacity:"0.2"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M2 53L2.00939483 53 2.17732733 63 1.82267267 63z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3.70158769 57.9184597L3.8703533 57.9188488 3.8718234 58.5543894 3.7030578 58.5540003z",transform:"rotate(62.234 3.787 58.236)"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M80.198 3.545L81 3.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052L80.604 4a1.054 1.054 0 00-.406-.455zM19.198 9.545L20 9.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM97.198 14.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM29.198 8.545L30 8.008c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052L29.604 9a1.054 1.054 0 00-.406-.455zM30.198 18.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455zM78.198 22.545l.802-.537c-.623-.058-.879.226-.984.452-.486-.17-1.016.052-1.016.052l1.604.488a1.054 1.054 0 00-.406-.455z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M12 61L3 61 3 61.1904762 4.40356452 61.1904762 4.40356452 63 4.6938871 63 4.6938871 61.1904762 10.1609516 61.1904762 10.1609516 63 10.4512742 63 10.4512742 61.1904762 12 61.1904762z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M22.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM52.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM71.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM99.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867zM113.482 62.133c-.266 0-.528.043-.758.125-.479-.265-1.167-.332-1.756-.172-.59.16-.969.519-.968.914h5c-.057-.488-.72-.866-1.518-.867z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M16 53L15 53 15 55.2885914 15.4635625 55.2885914 15.4635625 63 15.5885625 63 15.5885625 55.2885914 16 55.2885914z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 60.869H12V61.869H3z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 60.869H12V61.869H3z"}),S("path",{fill:"#3F3D56",fillRule:"nonzero",d:"M3 57.869H12V58.869H3z"}),S("text",{fill:"#FFF",fontFamily:"SourceSansPro-Semibold, Source Sans Pro",fontSize:"7",fontWeight:"500"},S("tspan",{x:"27.69",y:"41"},"H"))))))}var k=a.a.createElement,V=function(){return k("div",{className:"w-full max-w-md px-4 py-2 text-gray-700 transition duration-500 ease-in transform bg-gray-200 border rounded shadow hover:scale-105 hover:border-gray-400"},k(j,{className:"w-auto h-12 mx-auto",alt:"h\xf4pital"}),k(o.p,null,k(E,{type:"highlight",multiline:"true",color:"#bee3f8",show:!1,animate:!0,animationDuration:800},"\xc9tablissement, ordre, f\xe9d\xe9ration, conf\xe9rence")),k(o.m,null,"Connectez-vous \xe0 votre compte"),k("form",{className:"mt-5",action:"#"},k("label",{htmlFor:"email"},"Adresse courriel"),k("div",null,k(o.f,{ariaLabel:"Email address",name:"email",type:"email",required:!0,placeholder:"jeanne.lebrun@yahoo.fr"})),k("div",{className:"mt-3"},k("label",{htmlFor:"password2"},"Mot de passe"),k(o.f,{"aria-label":"Password",name:"password",type:"password",required:!0,placeholder:"Mot de passe"})),k("div",{className:"flex items-center justify-between mt-6"},k("div",{className:"flex items-center"},k(o.a,{id:"rememberMe"}),k("label",{htmlFor:"rememberMe",className:"block ml-2 text-sm leading-5 text-gray-900"},"Se souvenir de moi")),k("div",{className:"text-sm leading-5"},k(r.a,{href:"/"},k("a",{className:"font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"},"Mot de passe oubli\xe9 ?")))),k("div",{className:"mt-6 text-center"},k(o.k,{type:"submit"},"Se connecter"))),k(o.m,null,"Vous n'avez pas encore de compte ?"),k("div",{className:"mt-4 text-center"},k(o.j,null,"Cr\xe9er un compte")))},N=a.a.createElement;var D=function(e){var t=e.className;return N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1538 906",className:t},N("path",{fill:"#fff",d:"M0 0H1538V520H0z"}),N("path",{d:"M1228.2 905.42c-.849-.346-.901-1.272-.188-3.318.903-2.59 1.32-2.793 4.791-2.327 3.149.422 4.075.12 5.39-1.758 2.53-3.612.578-6.217-4.013-5.356-3.52.66-3.576.621-2.897-2.081 2.154-8.583 2.358-8.11-4.06-9.383-7.642-1.516-14.952-5.796-20.568-12.041-8.433-9.379-11.356-18.866-10.516-34.117.428-7.77 1.09-10.798 3.54-16.201 7.496-16.534 24.621-24.966 47.637-23.455 4.984.327 11.311 1.175 14.061 1.885l5 1.291.288 9.25.287 9.25h-3.037c-1.792 0-3.038-.522-3.038-1.272 0-2.598-6.123-8.61-10.454-10.264-5.59-2.135-16.434-1.648-21.866.981-12.416 6.01-18.077 21.61-14.302 39.414 1.754 8.272 4.652 13.821 10.192 19.515 5.251 5.398 10.548 7.577 18.485 7.604 8.394.028 14.271-3.345 17.967-10.312 2.511-4.734 3.407-5.315 5.83-3.78 1.127.715 1.138 2.36.063 9.955l-1.288 9.098-4.563 1.577c-2.51.867-8.276 1.848-12.813 2.179-7.824.57-8.25.723-8.25 2.953 0 1.78.553 2.352 2.277 2.352 3.34 0 6.473 2.586 7.213 5.954.86 3.913-1.925 9.702-5.575 11.59-2.64 1.365-12.927 1.905-15.592.818zm-594.96-4.209c-8.657-2.552-16.123-6.402-25.103-12.945l-7.758-5.652-12-.615c-13.306-.683-17.955-2.168-26.562-8.486-18.961-13.918-19.65-49.337-1.294-66.576 13.818-12.978 38.127-15.66 55.625-6.136 23.622 12.857 26.13 50.785 4.672 70.652-3.33 3.083-6.592 5.607-7.248 5.609-2.044.007 21.457 12.862 28.328 15.496 7.592 2.91 16.462 3.3 22.96 1.007 4.727-1.668 5.535-1.468 6.328 1.565.463 1.772-.345 2.518-5.13 4.733-7.54 3.493-23.342 4.142-32.817 1.348zm-29.323-30.905c16.745-8.747 19.933-36.76 6.22-54.65-12.71-16.579-34.985-14.069-43.357 4.886-7.564 17.124 1.066 43.6 16.498 50.61 6.246 2.836 14.217 2.51 20.64-.845zM78.377 880.67c-4.593-2.004-9.632-8.24-17.595-21.774-12.234-20.792-14.527-23.838-17.942-23.838h-2.963l.02 11.25c.037 20.533 2.102 27.56 8.575 29.184 1.732.435 2.405 1.299 2.405 3.085v2.481h-41v-2.355c0-1.784.764-2.575 3.149-3.259 1.731-.496 4.094-2.17 5.25-3.718 2.05-2.748 2.101-3.748 2.101-41.669s-.05-38.921-2.101-41.668c-1.156-1.548-3.519-3.221-5.25-3.718-2.301-.66-3.149-1.493-3.149-3.097 0-2.186.113-2.198 25.4-2.85 26.912-.692 32.843-.18 40.428 3.493 6.627 3.208 12.151 12.928 12.166 21.409.018 9.71-7.203 20.676-16.73 25.409l-4.988 2.478 11.024 16.522c12.969 19.437 17.042 24.63 20.873 26.61 3.577 1.85 3.92 5.885.577 6.781-4.022 1.078-17.172.586-20.25-.757zm-25.023-55.728c13.406-3.721 17.93-22.35 7.785-32.053-4.77-4.56-9.834-6.216-16.297-5.327l-4.965.683v37.812l4.75-.006c2.612-.003 6.54-.502 8.727-1.11zm230.4 55.735c-5.48-1.958-10.648-5.446-13.384-9.032-4.972-6.519-5.494-9.946-5.555-36.462-.063-27.716-.585-30.761-5.671-33.124-2.044-.95-3.237-2.234-3.25-3.5-.02-1.923.639-2 16.979-2 16.963 0 17 .005 16.999 2.25 0 1.511-.6 2.25-1.826 2.25-1.004 0-2.917 1.16-4.25 2.58l-2.424 2.58v27.17c0 25.57.122 27.403 2.077 31.13 3.05 5.813 9.132 8.803 16.954 8.334 8.416-.504 12.97-3.49 16.33-10.706 2.578-5.538 2.602-5.812 2.62-30.132.016-21.778-.18-24.847-1.744-27.234-.97-1.48-2.882-2.971-4.25-3.315-1.553-.39-2.488-1.334-2.488-2.516 0-1.762.925-1.891 13.5-1.891s13.5.13 13.5 1.891c0 1.178-.932 2.126-2.47 2.512-4.606 1.156-4.973 3.3-5.518 32.172l-.512 27.075-3.01 5.882c-3.553 6.943-9.308 11.743-16.715 13.942-6.248 1.856-20.876 1.938-25.892.145zm390 0c-5.542-1.98-10.657-5.458-13.488-9.169-4.714-6.18-5.39-10.75-5.45-36.859-.064-27.146-.602-30.235-5.673-32.59-2.043-.95-3.236-2.235-3.25-3.5-.02-1.923.64-2 16.98-2 16.802 0 17 .025 16.999 2.18 0 1.465-.706 2.285-2.15 2.5-1.182.175-3.095 1.589-4.25 3.14-1.968 2.644-2.121 4.292-2.43 26.206-.38 26.924.371 32.602 4.933 37.267 8.252 8.441 25.405 6.083 30.266-4.16 3.061-6.452 3.847-14.534 3.47-35.698-.398-22.41-1.067-25.202-6.352-26.53-1.553-.389-2.488-1.334-2.488-2.515 0-1.762.925-1.892 13.5-1.892 12.543 0 13.5.134 13.5 1.88 0 1.133-1.16 2.358-2.928 3.09-1.61.668-3.272 1.96-3.693 2.872-.421.912-1.016 13.843-1.322 28.735l-.557 27.076-3.01 5.88c-3.553 6.942-9.309 11.743-16.715 13.942-6.248 1.855-20.876 1.937-25.892.145zm316.53-.042c-3.997-1.74-8.751-7.666-16.108-20.077-9.5-16.028-10.579-17.474-13.055-17.488-2.214-.012-2.25.187-2.25 12.52 0 14.952 1.248 19.168 5.956 20.11 2.367.473 3.044 1.137 3.044 2.983v2.375h-34v-2.375c0-1.846.677-2.51 3.044-2.984 5.697-1.139 6.1-3.847 5.759-38.656l-.303-30.827-2.424-2.579c-1.334-1.418-3.246-2.579-4.25-2.579-1.132 0-1.826-.727-1.826-1.914 0-1.65 1.015-2.01 7.335-2.602 4.034-.378 15.172-.516 24.75-.306 15.572.342 17.856.615 21.581 2.58 6.617 3.49 10.334 10.297 10.334 18.924 0 8.195-4.698 15.393-13.227 20.264-2.723 1.555-4.482 3.117-3.909 3.47.573.355 4.992 6.594 9.82 13.865 9.478 14.274 14.746 20.72 16.932 20.72 1.928 0 1.757 4.643-.198 5.393-2.838 1.089-13.844.561-17.006-.816zm-18.482-47.042c3.975-2.055 7.878-6.999 8.611-10.906.941-5.016-1.267-11.635-5.083-15.233-3.533-3.332-6.946-4.288-12.854-3.598l-3.604.42v30.782h5.05c2.777 0 6.323-.658 7.88-1.463zm445.12 46.868c-2.996-.805-5.626-1.643-5.846-1.863-.219-.22-.95-4.706-1.625-9.97l-1.226-9.571h2.822c1.552 0 2.821.373 2.821.829 0 2.601 6.563 10.265 10.368 12.107 10.285 4.978 22.637.291 22.63-8.587-.01-5.827-2.836-9.31-12.47-15.35-13.52-8.474-18.74-12.95-21.437-18.374-2.688-5.41-3.168-13.826-1.14-19.974 1.34-4.058 7.622-10.117 12.91-12.452 5.325-2.35 21.989-2.275 28.89.131l5.25 1.83v17.84h-2.89c-2.245 0-3.032-.556-3.515-2.482-1.048-4.176-6.41-9.391-10.896-10.6-12.003-3.232-21.617 9.082-14.082 18.037 1.439 1.71 7.963 6.733 14.498 11.162 12.658 8.579 17.334 13.25 18.9 18.882 3.449 12.39-2.278 23.336-14.627 27.956-6.627 2.48-20.961 2.698-29.333.448zm-1310.1-2.1c0-1.772.56-2.304 2.427-2.304 1.432 0 3.278-1.081 4.5-2.635 1.997-2.539 2.073-3.782 2.073-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.652-1.191-.022-1.75-.83-1.75-2.532v-2.5h60v21.132l-2.625-.317c-1.978-.238-2.903-1.157-3.75-3.722-1.972-5.972-5.264-7.493-17.166-7.934l-10.458-.387v28.484l8.043-.466c8.766-.507 13.181-2.635 13.776-6.641.236-1.586 1.023-2.15 3-2.149l2.68.001V850.056h-2.75c-2.218 0-2.75-.453-2.75-2.345 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.573 17.156 11.26 0 17.13-2.852 20.069-9.75 1.485-3.486 4.948-4.482 6.005-1.727.697 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.463v-2.304zm77 .321c0-1.83.677-2.51 2.946-2.964 5.276-1.055 5.526-2.536 5.865-34.661.352-33.448-.076-36.461-5.54-39-2.278-1.059-3.234-2.19-3.25-3.845l-.021-2.345 22.75.415c24.598.448 26.605.837 33.272 6.447 7.327 6.165 9.226 18.427 4.266 27.54-4.326 7.95-11.806 12.17-23.73 13.393l-6.246.64-3.104-7.745 3.696-.54c4.694-.687 9.792-3.66 12.493-7.286 1.535-2.062 2.085-4.224 2.035-8-.13-9.737-5.603-15.692-15.15-16.484l-5.404-.448.312 33.38c.34 36.402.5 37.425 6.061 38.564 2.07.424 2.75 1.151 2.75 2.939v2.375h-34v-2.375zm166-.365c0-1.55.594-2.26 1.89-2.26 1.038 0 2.95-.86 4.25-1.91l2.36-1.91.303-30.996c.339-34.697-.045-37.317-5.786-39.483-1.8-.68-3.017-1.857-3.017-2.92 0-1.618 1.386-1.803 15.25-2.03 29.183-.479 35.29-.151 40.037 2.146 6.152 2.979 9.027 7.29 9.534 14.301.228 3.152.137 6.836-.203 8.19-.985 3.924-5.646 8.718-10.8 11.105l-4.763 2.207 4.034 1.209c9.641 2.889 15.788 12.97 14.514 23.805-1.074 9.145-4.999 14.288-14.104 18.483-4.781 2.203-6.058 2.304-29.25 2.313l-24.25.01v-2.26zm44.102-7.53c5.097-3.405 7.12-8.041 6.552-15.016-.854-10.492-8.182-16.714-19.686-16.714h-6.112l.322 15.091c.309 14.465.42 15.17 2.683 17 3.454 2.793 11.798 2.608 16.241-.36zm-4.13-41.553c6.14-2.353 9.37-7.16 8.732-12.99-.858-7.834-7.171-12.188-17.672-12.188h-6.032v27l5.25-.054c2.887-.03 7.263-.826 9.722-1.769zm41.028 49.14c0-1.617.689-2.267 2.651-2.5 1.49-.179 3.57-1.553 4.75-3.14 2.025-2.724 2.1-3.906 2.1-33.5 0-24.587-.281-31.174-1.414-33.178-1.766-3.124-4.066-4.927-6.337-4.968-1.139-.02-1.75-.818-1.75-2.282 0-2.25 0-2.25 18-2.25s18 0 18 2.25c0 1.562-.595 2.25-1.944 2.25-1.07 0-3.207 1.086-4.75 2.413l-2.806 2.412-.29 31.538-.29 31.538 2.559 1.677c2.026 1.327 4.191 1.582 10.39 1.223 9.517-.55 13.973-2.906 16.624-8.784 1.764-3.911 3.63-4.861 6.264-3.189.99.628.828 2.476-.756 8.67-1.108 4.33-2.71 8.934-3.56 10.231l-1.545 2.36-55.895-.59v-2.183zm70 .308c0-1.847.678-2.51 3.045-2.984 5.521-1.104 5.956-3.832 5.952-37.36-.003-27.842-.132-29.991-1.97-33.004-1.08-1.773-3.103-3.51-4.496-3.859-1.722-.432-2.53-1.32-2.53-2.776 0-2.105.291-2.142 17-2.142s17 .037 17 2.142c0 1.447-.807 2.344-2.488 2.766-1.368.343-3.28 1.834-4.25 3.313-1.586 2.42-1.763 5.744-1.763 33.234 0 33.953.408 36.676 5.644 37.724 2.18.436 2.856 1.134 2.856 2.946v2.375h-34v-2.375zm239-.181c0-1.645.762-2.347 3.045-2.803 5.523-1.105 5.955-3.824 5.955-37.461 0-29.466-.032-29.932-2.284-33.282-1.256-1.869-3.281-3.542-4.5-3.718-1.592-.23-2.216-1.003-2.216-2.75v-2.43h59v10.5c0 10.403-.022 10.5-2.388 10.5-1.933 0-2.513-.66-3.038-3.459-1.115-5.944-5.2-7.94-17.155-8.382l-10.117-.375-.65 4.748c-.358 2.61-.651 9.023-.651 14.249v9.501l8.507-.53c9.366-.585 13.074-2.233 14.085-6.264.447-1.783 1.302-2.488 3.016-2.488h2.391v26h-2.5c-1.702 0-2.51-.558-2.531-1.75-.09-4.95-4.849-7.25-14.998-7.25h-8.162l.346 14.082c.419 17.058.317 16.918 12.325 16.918 10.598 0 16.11-2.539 18.995-8.75 1.453-3.128 2.56-4.25 4.191-4.25 1.22 0 2.521.492 2.893 1.094.911 1.475-3.525 17.73-5.331 19.537-1.193 1.192-6.27 1.4-29.832 1.222l-28.395-.214v-2.194zm110 .236c0-1.64.932-2.739 3.179-3.75 1.748-.787 4.11-2.701 5.25-4.254 2.009-2.738 2.071-3.967 2.071-40.5 0-42.381-.078-42.892-6.982-45.17-2.736-.903-3.518-1.7-3.518-3.583v-2.423h70v25h-3c-2.443 0-3-.417-3.003-2.25-.006-3.68-3.772-8.755-7.768-10.47-2.365-1.014-7.842-1.77-14.978-2.066l-11.25-.466v34.252l8.25-.056c10.996-.075 14.76-1.44 17.082-6.194 1.494-3.058 2.37-3.75 4.75-3.75h2.917v30.126l-3.21-.313c-2.206-.215-3.38-.94-3.75-2.313-1.587-5.882-7.706-8.5-19.87-8.5H879.6l.407 17.75c.465 20.257 1.317 23.217 7.306 25.383 2.628.95 3.51 1.847 3.51 3.568v2.299h-41v-2.32zm160-.18c0-1.828.535-2.5 1.986-2.5 3.064 0 6.564-6.232 14.17-25.234 10.185-25.445 19.844-51.318 19.844-53.156 0-1.257 1.042-1.606 4.75-1.59l4.75.02 13.488 34.571c14.647 37.541 17.347 43.377 20.762 44.875 1.38.606 2.25 1.863 2.25 3.25 0 2.262-.01 2.263-17 2.263h-17v-2.375c0-1.834.677-2.51 2.974-2.97 4.297-.859 4.556-3.768 1.216-13.654l-2.872-8.5h-23.632l-2.375 7c-2.993 8.82-2.82 14.857.44 15.32 1.629.23 2.25.99 2.25 2.75v2.43h-26v-2.5zm46-35.016c0-1.522-7.346-21.484-7.905-21.484-.365 0-1.384 1.912-2.266 4.25-.881 2.337-2.758 7.287-4.17 11l-2.569 6.75h8.455c4.65 0 8.455-.233 8.455-.516zm43 35.14c0-1.787.68-2.514 2.75-2.938 5.41-1.108 5.653-2.517 6.073-35.219.434-33.736.01-36.573-5.805-38.767-1.8-.68-3.018-1.857-3.018-2.92 0-1.602 1.128-1.78 11.25-1.778l11.25.002 6.5 8.226c3.575 4.525 12.8 15.67 20.5 24.768s15.032 17.883 16.293 19.521l2.294 2.98-.324-22.59c-.354-24.617-.913-27.157-6.275-28.503-1.554-.39-2.488-1.335-2.488-2.516 0-1.762.925-1.891 13.5-1.891 12.671 0 13.5.118 13.5 1.93 0 1.21-.803 2.05-2.15 2.25-1.182.176-3.094 1.59-4.25 3.141-2.03 2.728-2.11 4.044-2.406 39.75l-.307 36.928h-4.36c-3.943 0-4.674-.405-7.665-4.25-2.644-3.398-45.008-55.87-46.626-57.75-.237-.275-.234 10.75.01 24.5.487 27.882 1.096 31.218 5.873 32.173 2.208.442 2.885 1.134 2.885 2.952v2.375h-27v-2.375zm175-.124c0-1.486.573-2.5 1.412-2.5 1.976 0 5.682-4.693 8.33-10.545 3.68-8.14 20.794-52.314 23.73-61.256l2.726-8.301 8.94.602 13.268 34c7.297 18.7 14.068 35.575 15.048 37.5 2.235 4.394 5.49 8 7.22 8 .748 0 1.326 1.09 1.326 2.5v2.5h-34v-2.5c0-1.741.547-2.5 1.8-2.5 4.84 0 5.289-4.226 1.618-15.247l-2.582-7.754h-23.472l-2.128 6.75c-4.02 12.75-3.829 16.25.886 16.25 1.336 0 1.877.721 1.877 2.5v2.5h-26v-2.5zm42.43-44.75c-1.89-5.638-3.705-10.925-4.032-11.75-.356-.896-2.355 2.93-4.966 9.5-2.404 6.05-4.384 11.338-4.401 11.75-.017.412 3.764.75 8.403.75h8.434l-3.438-10.25zm45.57 44.75c0-1.956.51-2.5 2.345-2.5 1.29 0 3.203-.947 4.25-2.104 1.774-1.958 1.926-4.257 2.2-33.25.16-17.13.043-32.147-.263-33.369-.713-2.85-4.383-6.277-6.72-6.277-1.212 0-1.812-.745-1.812-2.25 0-2.246.037-2.25 17-2.25 16.35 0 17 .076 17 2.005 0 1.251-1.09 2.488-2.894 3.287-1.592.705-3.359 2.502-3.926 3.994-1.457 3.833-2.286 35.037-1.379 51.894.634 11.758 1.084 14.535 2.636 16.25 1.03 1.138 2.703 2.07 3.718 2.07 1.3 0 1.845.736 1.845 2.5v2.5h-34v-2.5zm112-.18c0-1.79.555-2.32 2.428-2.32 1.431 0 3.278-1.081 4.5-2.635 1.997-2.539 2.072-3.782 2.072-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.653-1.191-.021-1.75-.83-1.75-2.531v-2.5h60v21.132l-2.625-.317c-1.977-.238-2.903-1.157-3.75-3.723-1.971-5.971-5.263-7.492-17.166-7.933l-10.458-.387v28.226l6.25-.057c8.676-.078 12.907-1.705 14.75-5.672 1.099-2.364 2.17-3.233 4-3.248l2.5-.02v25.998h-2.75c-2.218 0-2.75-.454-2.75-2.346 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.572 17.156 11.26 0 17.13-2.851 20.07-9.75 1.485-3.486 4.947-4.482 6.004-1.727.698 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.43v-2.32zm-1339.9-91.243l-2.444-1.878 5.944-9.084c3.27-4.996 6.583-9.09 7.362-9.1 3.382-.037 14.148 2.277 13.878 2.983-.536 1.406-20.274 18.99-21.296 18.974-.55-.01-2.1-.862-3.444-1.895zM6.862 718.057h1523v9h-1523v-9zm579.64-20.465c-8-2.852-12.498-10.308-11.04-18.3.981-5.386 4.03-9.154 9.428-11.655l4.723-2.188-2.874-1.65c-1.633-.937-2.874-2.499-2.874-3.618 0-1.81 7.333-9.124 9.147-9.124.432 0-.196-1.664-1.395-3.697-5.121-8.68-1.024-21.228 8.537-26.148 5.176-2.664 6.923-2.777 25.048-1.616 10.426.668 10.814.775 10.264 2.828-.315 1.173-.579 2.47-.587 2.883-.008.413-1.77.75-3.918.75h-3.906l.528 5.814c1.15 12.684-7.871 21.371-22.434 21.604-7.565.121-11.226 1.725-8.275 3.626.82.528 5.704 2.324 10.853 3.99 16.556 5.358 19.615 8.054 18.909 16.664-.734 8.942-7.927 16.739-18.332 19.871-5.96 1.793-16.723 1.777-21.801-.033zm22.266-6.174c8.119-4.045 11.635-11.754 7.196-15.772-2.991-2.707-15.981-6.862-19.348-6.19-6.853 1.372-13.255 9.727-12.074 15.759 1.624 8.29 13.788 11.404 24.226 6.203zm2.678-45.247c6.095-3.717 8.449-14.265 4.347-19.479-5.61-7.133-16.29.817-16.389 12.202-.031 3.538.479 4.781 2.768 6.75 3.373 2.902 5.21 3.006 9.274.528zm37.92 23.205c-4.393-.897-6.747-3.83-7.247-9.028-1.278-13.31 9.92-32.817 22.451-39.11 6.514-3.271 19.363-3.601 27.923-.717.768.259.2 3.677-1.778 10.708-3.871 13.75-6.087 27.515-4.814 29.894.835 1.56 1.427 1.668 4.078.744 2.446-.853 3.286-.788 3.977.305 1.44 2.275.565 3.14-5.149 5.094-7.682 2.627-11.199 2.115-12.353-1.799l-.911-3.089-4.095 2.289c-6.912 3.863-16.36 5.878-22.082 4.709zm17.287-8.99c2.907-1.382 5.94-3.51 6.739-4.729 1.335-2.038 5.409-17.039 7-25.776.65-3.58.57-3.703-3.065-4.707-6.716-1.854-13.47 3.044-18.852 13.67-5.645 11.148-7.068 21.078-3.39 23.654 2.497 1.75 4.027 1.47 11.568-2.113zm473.47 8.696c-4.488-1.065-6.071-2.622-7.298-7.178-1.86-6.908 2.444-19.975 9.764-29.641 8.765-11.575 18.507-15.482 32.892-13.191 3.787.603 7.183 1.409 7.547 1.79.364.382-.9 6.77-2.808 14.195-1.908 7.425-3.556 16.425-3.662 20l-.191 6.5 4.25-.19c3.813-.17 4.25.045 4.25 2.092 0 1.91-.94 2.566-5.77 4.028-7.948 2.406-11.636 1.892-12.047-1.68-.174-1.513-.499-2.75-.722-2.75s-2.838 1.076-5.811 2.39c-4.784 2.116-14.533 4.787-16.45 4.507-.386-.056-2.16-.449-3.945-.872zm16.744-8.56c2.475-1.237 5.23-3.085 6.121-4.107 2.213-2.535 6.185-15.587 8.24-27.078.548-3.063.383-3.272-3.404-4.291-3.24-.873-4.63-.764-7.479.588-6.348 3.012-12.648 13.232-15.914 25.817-3.128 12.054.773 14.899 12.436 9.07zm-1084.5 6.285c-.298-1.237 1.484-10.539 3.961-20.671 4.883-19.976 4.842-21.599-.51-20.064-2.647.76-2.948.614-2.948-1.426 0-1.905.93-2.544 5.75-3.951 3.163-.923 7.325-1.782 9.25-1.908 3.295-.216 3.519-.033 3.821 3.124.177 1.845-1.548 10.985-3.833 20.312-2.285 9.327-3.886 17.655-3.56 18.508.474 1.235 1.525 1.41 5.163.865 4.352-.653 4.552-.577 4.238 1.607-.26 1.806-1.493 2.655-5.829 4.012-3.025.946-7.629 1.747-10.23 1.781-4.105.053-4.803-.237-5.273-2.189zm38.445.404l-2.28-1.846 7.747-34.035c4.26-18.72 7.6-35.326 7.419-36.904-.336-2.942-.699-3.094-4.578-1.917-1.919.582-2.25.311-2.25-1.838 0-2.913 3.512-4.32 13.25-5.308 5.579-.567 5.75-.512 5.75 1.84 0 1.332-1.575 9.56-3.5 18.283s-3.5 16.445-3.5 17.16c0 .97 1.1.812 4.341-.622 11.137-4.926 20.845-4.666 24.33.653 3.263 4.98 1.573 17.868-3.727 28.432-2.758 5.497-10.965 14.052-15.422 16.077-5.855 2.66-24.305 2.676-27.58.025zm25.305-6.341c5.013-3.549 10.603-15.54 12.179-26.13 1.579-10.61-5.434-12.725-16.634-5.02-2.366 1.628-4.264 4.051-5.244 6.694-1.813 4.892-5.548 20.856-5.548 23.714 0 4.208 9.682 4.68 15.246.742zm38.19 5.12c-2.708-2.828-2.932-3.625-2.875-10.25.144-16.88 9.74-31.988 22.96-36.146 6.595-2.074 12.398-1.371 16.287 1.974 2.243 1.93 2.692 3.135 2.692 7.226 0 10.295-9.389 18.104-22.9 19.048-3.905.272-7.43.995-7.834 1.605-1.126 1.701-.902 7.482.384 9.926 2.495 4.74 6.075 4.852 14.649.455 5.342-2.74 6.441-3.005 7.235-1.75 1.767 2.794.949 3.672-6.828 7.322-6.476 3.039-8.897 3.657-14.313 3.657-5.97 0-6.766-.258-9.456-3.066zm17.908-24.012c8.507-2.362 14.119-11.457 9.76-15.817-2.75-2.749-5.292-2.659-8.824.314-2.813 2.367-7.385 9.867-8.735 14.333-.57 1.882-.302 2.249 1.637 2.244 1.274-.003 4.047-.486 6.162-1.073zm33.656 26.738c0-.166 1.797-7.92 3.993-17.23s3.997-18.899 4-21.307l.006-4.377-4 .64c-3.545.566-4 .412-4-1.36 0-2.193 3.234-3.872 11.35-5.895 5.553-1.384 7.65-.435 7.65 3.462v2.348l3.55-2.409c6.242-4.236 10.056-5.013 14.587-2.97 2.17.979 3.807 2.265 3.639 2.86-2.715 9.57-4.26 12.58-6.458 12.58-1.965 0-2.317-.513-2.317-3.378 0-7.275-6.329-7.327-10.919-.09-2.86 4.51-5.817 14.765-8.164 28.317-.7 4.042-1.756 7.492-2.345 7.665-1.76.518-10.572 1.472-10.572 1.145zm50.162-.963c-1.104-1.33-.498-4.924 5.22-30.946l2.362-10.75h-3.372c-1.855 0-3.373-.255-3.373-.566 0-1.564 2.24-4.434 3.459-4.434 2.438 0 7.12-4.735 9.084-9.188 2.195-4.977 3.068-5.776 6.332-5.797 2.149-.014 2.313.295 1.724 3.235a222.415 222.415 0 00-1.253 7l-.601 3.75h4.627c4.727 0 5.423.764 4.021 4.418-.436 1.137-1.95 1.582-5.391 1.582-5.56 0-4.647-2-9.082 19.899-3.259 16.087-3.039 17.569 2.376 16.016 4.518-1.296 4.882-1.189 4.524 1.334-.243 1.707-1.527 2.654-5.32 3.92-6.122 2.045-13.857 2.31-15.338.526zm40.337-1.291c-7.319-7.897-2.023-30.354 9.628-40.83 4.754-4.274 12.176-7.575 17.034-7.575 3.075 0 9.85 3.15 10.868 5.054 1.612 3.012 1.11 10.206-.948 13.58-4.216 6.915-13.305 11.366-23.207 11.366h-5.874v5.278c0 10.245 4.258 12.042 15.449 6.523 3.568-1.759 6.684-2.996 6.924-2.75.24.247.592 1.35.782 2.45.277 1.604-1.113 2.74-7.042 5.75-6.42 3.258-8.291 3.75-14.298 3.75-6.155 0-7.174-.285-9.316-2.596zm17.602-24.558c5.284-1.792 8.99-4.82 10.59-8.652 1.348-3.224 1.31-3.717-.463-6.101-2.748-3.696-5.447-3.72-9.589-.083-3.195 2.806-8.64 12.211-8.64 14.926 0 1.395 3.848 1.352 8.102-.09zm375.57 26.486c-1.413-1.412-.497-7.313 4.3-27.711 6.526-27.75 10.033-44.087 10.033-46.736 0-1.896-.41-2.082-3.5-1.58-3.185.517-3.5.352-3.5-1.83 0-2.502 2.495-3.61 12.432-5.519 5.132-.986 6.568-.335 6.568 2.974 0 1.495-3.372 17.31-7.493 35.143-4.121 17.834-7.496 33.95-7.5 35.811l-.007 3.386 4.568-.626c4.295-.589 4.55-.494 4.25 1.583-.246 1.708-1.565 2.599-5.818 3.929-5.618 1.757-13.135 2.374-14.333 1.176zm37.697-.555c-1.227-1.985-.526-6.316 3.733-23.037 2.218-8.708 3.864-16.6 3.658-17.537-.394-1.799-.644-1.84-5.005-.813-2.322.547-2.75.326-2.75-1.423 0-2.384 4.269-4.501 12.045-5.976 5.556-1.054 7.955-.515 7.955 1.788 0 .861-2.037 10.06-4.527 20.444s-4.231 19.358-3.869 19.945c.404.653 2.38.831 5.096.459 4.155-.57 4.417-.468 4.119 1.6-.246 1.708-1.566 2.6-5.819 3.93-6.507 2.035-13.577 2.335-14.637.621zm36.934-.446c-.352-.917-.084-4.18.595-7.25 2.231-10.08 7.107-33.146 7.107-33.62 0-.254-1.383-.462-3.073-.462-4.341 0-3.531-2.795 1.574-5.434 3.04-1.57 4.793-3.566 7.305-8.316 2.86-5.409 3.685-6.25 6.126-6.25h2.82l-1.34 6.25c-.738 3.437-1.357 6.587-1.376 7-.02.412 2.214.75 4.964.75 5.225 0 5.347.105 4.37 3.75-.527 1.965-1.256 2.25-5.778 2.25h-5.174l-3.364 16.876c-1.85 9.281-3.092 17.582-2.76 18.445.486 1.268 1.234 1.388 3.897.624 4.583-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.748 2.174-14.045 2.159-14.887-.036zm41.18-.597c-2.489-2.141-2.92-3.316-3.277-8.917-.801-12.586 4.96-26.796 13.514-33.327 9.445-7.212 19.761-8.17 25.56-2.373 2.688 2.69 2.926 3.448 2.492 7.966-.952 9.905-10.445 17.1-23.434 17.76-8.124.413-8.978 1.39-7.385 8.433 1.735 7.667 4.886 8.454 14.896 3.72 6.63-3.137 8.157-3.135 8.157.01 0 3.196-12.002 8.33-20.577 8.803-6.382.351-7.359.148-9.944-2.076zm21.505-26.726c6.235-3.182 8.912-10.258 5.362-14.18-4.467-4.937-12.737 1.529-16.844 13.167l-1.509 4.276 4.507-.617c2.479-.34 6.296-1.53 8.483-2.647zm239.02 28.622c0-.151 1.797-7.892 3.993-17.203s3.997-18.898 4-21.306l.01-4.378-4 .64c-3.533.565-4 .409-4-1.337 0-2.429 1.76-3.412 9.861-5.511 7.039-1.824 9.14-1.122 9.14 3.056v2.347l3.549-2.408c6.224-4.224 10.059-5.012 14.546-2.989 2.147.969 3.905 2.03 3.905 2.36 0 .328-1.009 3.41-2.241 6.847-1.851 5.161-2.635 6.25-4.5 6.25-1.9 0-2.26-.537-2.26-3.377 0-6.835-5.876-7.345-10.264-.89-3.336 4.907-5.043 10.234-7.778 24.267-1.233 6.325-2.515 11.78-2.85 12.121-.6.613-11.107 2.042-11.107 1.51zm115.34-1.196c-.82-2.138.126-8.297 3.988-25.936l3.285-15-2.805-.313c-3.356-.375-3.923-3.698-.8-4.689 3.515-1.115 7.575-5.239 9.537-9.685 2.196-4.977 3.069-5.777 6.333-5.798 2.148-.013 2.312.295 1.723 3.235a222.473 222.473 0 00-1.253 7l-.6 3.75h4.627c4.727 0 5.423.765 4.02 4.418-.436 1.138-1.95 1.582-5.39 1.582-5.56 0-4.647-2-9.083 19.9-3.258 16.086-3.038 17.568 2.376 16.015 4.519-1.296 4.883-1.189 4.524 1.335-.242 1.707-1.527 2.653-5.32 3.92-6.657 2.223-14.36 2.358-15.162.266zm40.348-1.024c-7.581-7.58-2.34-30.242 9.443-40.837 4.754-4.274 12.176-7.575 17.034-7.575 3.074 0 9.849 3.15 10.868 5.055 1.612 3.011 1.11 10.206-.948 13.58-4.236 6.946-13.305 11.366-23.327 11.366h-5.994l.443 6.134c.705 9.742 4.284 11.072 15.246 5.667 3.568-1.76 6.684-2.997 6.924-2.75.24.247.592 1.349.782 2.449.277 1.605-1.113 2.74-7.041 5.75-6.362 3.23-8.32 3.75-14.114 3.75-5.904 0-7.044-.317-9.316-2.589zm20.964-26.062c6.994-3.476 10.129-11.537 5.768-14.836-2.896-2.191-4.996-1.822-8.841 1.554-3.218 2.825-8.576 12.198-8.576 15.002 0 1.655 6.911.635 11.648-1.72zm30.352 27.79c0-.421 1.826-8.53 4.058-18.02 2.232-9.492 3.92-18.688 3.75-20.438-.29-2.982-.537-3.168-3.953-2.973-2.857.163-3.753-.208-4.147-1.717-.41-1.566.456-2.278 4.644-3.824 2.831-1.044 6.835-2.205 8.898-2.579 3.878-.702 3.812-.756 6.238 5.115.046.111 2.719-1.126 5.939-2.75 6.89-3.476 8.046-3.572 12.235-1.017l3.163 1.928-2.163 6.544c-1.805 5.46-2.536 6.547-4.413 6.568-1.884.02-2.25-.514-2.25-3.276 0-8.714-8.293-6.99-12.832 2.666-1.14 2.427-3.4 10.791-5.02 18.59-1.62 7.797-3.105 14.308-3.297 14.47-.88.738-10.85 1.394-10.85.714zm50 .004c0-.45 1.605-7.079 3.567-14.73 2.143-8.357 3.641-16.709 3.75-20.914l.183-7-3.627.278c-2.85.218-3.731-.126-4.119-1.609-.403-1.541.442-2.17 4.626-3.445 9.092-2.769 11.233-2.968 12.996-1.205.893.893 1.624 2.717 1.624 4.053 0 1.335.184 2.428.41 2.428s3.195-1.317 6.6-2.927c8.06-3.812 18.742-5.811 21.931-4.104 2.081 1.113 2.23 1.688 1.622 6.271-.368 2.775-1.986 10.494-3.596 17.153-1.61 6.66-3.048 13.682-3.197 15.607-.27 3.5-.27 3.5 3.937 3.417 2.876-.057 4.39.392 4.783 1.417.793 2.066-.152 2.74-6.421 4.576-7.112 2.083-13.66 2.099-14.451.036-.328-.855 1.199-9.572 3.393-19.371 4.4-19.647 4.652-21.883 2.562-22.685-2.157-.828-9.808 2.924-14.374 7.05-3.758 3.394-4.239 4.45-6.546 14.362-1.37 5.884-2.809 12.872-3.197 15.528-.389 2.656-1.213 4.98-1.831 5.165-3.033.905-10.624 1.369-10.624.65zm68.587-.779c-.346-.899 1.44-10.163 3.967-20.586 2.526-10.423 4.36-19.563 4.072-20.31-.4-1.04-1.292-1.138-3.817-.414-1.813.52-3.411.946-3.552.946s-.257-1.043-.257-2.318c0-1.927.884-2.584 5.25-3.905 11.848-3.583 15.508-2.975 14.312 2.377-.288 1.29-2.35 9.965-4.58 19.279-2.23 9.313-3.805 17.586-3.499 18.383.425 1.108 1.631 1.303 5.105.827 4.274-.586 4.53-.49 4.23 1.585-.615 4.275-19.747 8.002-21.231 4.137zm37.728.013c-.667-1.738.143-6.512 4.051-23.878 4.321-19.2 4.259-17.5.64-17.5-4.397 0-3.665-2.758 1.441-5.433 2.939-1.539 4.75-3.599 7.095-8.067 2.561-4.878 3.672-6.061 5.944-6.33 3.035-.358 3.057-.104.915 10.58l-.651 3.25h5.232c4.36 0 5.13.264 4.625 1.582-.334.87-.607 2.22-.607 3 0 1.049-1.402 1.418-5.375 1.418h-5.375l-3.302 16.818c-1.816 9.25-3.021 17.55-2.678 18.445.511 1.332 1.225 1.456 3.92.683 4.584-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.67 2.152-14.046 2.156-14.87.01zm41.108-.692c-2.864-2.466-2.923-2.716-2.923-12.405 0-9.425.177-10.247 3.778-17.531 4.417-8.936 9.487-13.77 17.636-16.82 14.195-5.31 24.39 3.712 18.108 16.026-3.552 6.962-13.026 11.988-22.664 12.022-5.79.02-6.18.172-6.802 2.65-.836 3.33.21 8.354 2.21 10.622 2.273 2.578 6.184 2.146 13.16-1.451 5.202-2.683 6.355-2.966 7.125-1.75 1.77 2.8.893 3.876-5.801 7.11-5.154 2.49-8.424 3.354-13.827 3.652-6.417.354-7.35.155-10-2.126zm21.78-26.92c6.758-3.798 9.013-11.267 4.329-14.336-1.847-1.21-3.168-1.385-5.25-.695-3.527 1.17-8.563 7.707-10.645 13.817l-1.607 4.716 4.59-.629c2.525-.346 6.388-1.639 8.583-2.873zm-1512 26.512c.186-.966 1.233-1.92 2.327-2.12 2.97-.545 5.564-3.178 7.59-7.704 2.688-6.003 10.981-47.753 11.205-56.408.191-7.382.162-7.474-3.018-9.5-6.205-3.953-4.547-4.546 12.71-4.546 13.673 0 16 .222 16 1.525 0 .898-1.246 1.774-3.03 2.131-6.377 1.276-8.798 7.57-14.819 38.541-5.626 28.942-5.571 28.382-3.044 30.91 1.92 1.92 2.965 2.085 10.76 1.693 10.485-.528 14.272-2.293 17.934-8.355 2.885-4.776 3-4.857 5.068-3.546 1.148.727 1.105 1.653-.266 5.734-.9 2.677-2.654 6.667-3.9 8.867l-2.266 4-26.795.267c-25.09.25-26.774.155-26.457-1.489zm505.82.304c0-.78 1.688-2.242 3.75-3.25 2.614-1.277 4.415-3.197 5.943-6.332 2.865-5.88 11.526-48.467 11.684-57.456.12-6.793.048-7.004-3.088-9-6.711-4.272-5.194-4.544 25.279-4.544 27.955 0 28.554.042 27.943 1.967-.344 1.082-1.186 5.02-1.872 8.75-1.058 5.753-1.581 6.831-3.443 7.102-1.786.26-2.196-.172-2.196-2.316 0-6.638-3.939-8.503-17.958-8.503h-9.659l-2.773 12.75c-1.526 7.012-2.992 13.538-3.26 14.5-.435 1.571.413 1.748 8.333 1.735 9.958-.017 12.893-1.08 15.815-5.725 2.6-4.135 5.992-4.467 5.204-.51a2669.77 2669.77 0 00-2.319 12c-1.397 7.296-2.126 9.25-3.452 9.25-1.061 0-1.899-1.087-2.27-2.946-.325-1.623-1.616-3.498-2.875-4.175-2.4-1.291-18.125-1.866-19.29-.706-.673.67-3.626 15.083-4.921 24.02-.623 4.295-.464 4.833 1.883 6.37 2.061 1.351 4.274 1.594 11.303 1.24 10.435-.524 14.143-2.189 18.435-8.278 1.856-2.634 3.613-4.152 4.439-3.836 1.945.747 1.715 2.535-1.234 9.59-4.373 10.465-1.882 9.72-32.555 9.72-22.502 0-26.845-.229-26.845-1.417zm508 .02c0-.796 1.463-1.946 3.25-2.555 6.314-2.152 8.4-7.855 14.716-40.224 5.439-27.875 5.305-32.333-1.027-34.343-1.127-.358-1.874-1.175-1.66-1.816.279-.84 8.107-1.239 28.127-1.43 27.267-.262 27.73-.233 27.11 1.717-.346 1.09-1.19 5.035-1.877 8.766-1.058 5.753-1.58 6.83-3.443 7.102-1.853.27-2.195-.16-2.195-2.75 0-6.314-4.877-8.397-18.436-7.875l-7.936.305-2.78 13c-1.53 7.15-2.796 13.562-2.814 14.25-.05 1.846 15.23 1.682 18.875-.203 1.545-.799 3.377-2.824 4.071-4.5.774-1.867 1.99-3.047 3.141-3.047 2.328 0 2.343-.725-.272 12.75-1.834 9.446-2.478 11.25-4.017 11.25-1.107 0-1.832-.722-1.832-1.826 0-4.666-9.349-8.136-17.99-6.676l-3.82.646-2.03 11.178c-3.576 19.712-3.425 21.497 2.007 23.747 5.98 2.477 2.528 3.424-13.5 3.706-13.136.23-15.668.041-15.668-1.173zm-586.61-21.511c-4.472-2.032-8.394-8.31-8.394-13.44 0-7.943 7.022-15.047 14.847-15.02 9.359.034 15.143 5.75 15.15 14.97.01 11.718-10.734 18.426-21.602 13.49zm508.99.472c-1.716-.747-4.4-3.037-5.965-5.089-2.32-3.042-2.832-4.688-2.77-8.923.132-9.187 5.845-14.838 15-14.838 4.537 0 6.048.494 9.146 2.985 6.902 5.552 7.975 14.861 2.467 21.408-4.63 5.502-11.526 7.221-17.878 4.457zm-597.86-35.543c-1.966-2.174-2.108-1.946 9.256-14.886l3.834-4.366 5.696 1.275c3.133.7 5.696 1.576 5.696 1.946 0 .674-21.41 18.01-22.245 18.01-.245 0-1.251-.891-2.237-1.98zm508.75-.001l-2.218-1.797 7.549-8.611c4.152-4.736 7.93-8.611 8.397-8.611 2.44 0 11.011 2.458 10.775 3.09-.248.665-18.879 15.646-21.279 17.111-.553.338-2.003-.195-3.224-1.183zm664.77.009l-2.412-1.82 7.81-8.604c4.297-4.732 8.172-8.604 8.613-8.604 1.978 0 10.948 2.403 10.906 2.922-.045.54-18.928 15.777-21.382 17.252-.617.37-2.207-.145-3.534-1.147zm-1427.1-5.133c-4.063-4.063-.097-11.896 6.024-11.896 4.258 0 6.48 2.234 6.48 6.512 0 6.674-7.839 10.05-12.503 5.384zm674.85.713c-2.457-1.866-2.312-8.046.25-10.608 4.125-4.125 12-1.433 12 4.102 0 5.994-7.604 10.032-12.25 6.506zm664.15-.713c-4.134-4.134-.08-11.896 6.216-11.896 6.281 0 8.973 7.007 4.434 11.545-3.08 3.081-7.765 3.235-10.65.35zm-876.1-28.584c-1.527-1.702-1.163-2.314 6.071-10.182l7.696-8.37 5.719 1.28c3.145.703 5.696 1.545 5.668 1.87-.081.951-20.163 16.334-21.924 16.795-.882.23-2.335-.396-3.23-1.392z"}),N("path",{fill:"#e2011c",d:"M880.1 520l2.333-6.033c3.954-10.9 8.054-19.217 13.971-28.343 6.269-9.667 20.067-23.907 25.807-26.632 7.054-3.35 15.824-4.53 26.67-3.587 9.312.81 37.925 5.489 49.471 8.09 8.788 1.98 21.654 2.17 27.71.408 11.665-3.394 18.576-9.954 21.856-20.747 2.516-8.28 2.492-15.804-.066-20.823-3.436-6.74-2.851-8.494 5.5-16.48 4.125-3.944 7.506-7.59 7.512-8.104.035-2.67-5.68-13.39-7.151-13.414-.902-.015-2.683-.872-3.958-1.906l-2.32-1.879 4.959-2.534c6.77-3.461 11.791-8.843 11.791-12.638 0-1.64-1.426-5.66-3.17-8.933-3.345-6.28-4.24-12.283-2.357-15.805 1.245-2.327 3.391-3.305 13.933-6.352 8.86-2.561 12.062-5.157 13.325-10.8 1.08-4.827.55-7.93-2.349-13.73-2.36-4.722-17.73-28.27-22.208-34.022-6.016-7.731-13.346-21.086-15.514-28.27-2.137-7.081-2.151-7.482-.592-16.635 3.296-19.35 1.369-35.391-8.01-66.67-6.97-23.245-8.841-28.89-11.024-33.238-3.945-7.863-3.418-9.704 4.677-16.331 3.875-3.173 7.475-6.572 8-7.553 2.445-4.57-.287-13.378-4.92-15.858-2.939-1.575-4.576-.494-7.56 4.994-2.262 4.158-3.148 4.945-5.568 4.945-3.94 0-4.63-1.653-2.115-5.058 2.933-3.97 2.701-4.607-1.907-5.225-3.449-.463-5.272-1.811-12.75-9.426-10.025-10.21-16.76-14.914-30.185-21.087-6.154-2.83-8.298-4.17-6.04-3.774 1.925.337 8.731.875 15.125 1.196 18.553.931 23.063-1.52 27.386-14.885 2.936-9.075 4.344-13.271-2.393-19.607L983.245 0h554.75v520h-657.9z"}),N("path",{fill:"#003189",d:"M407.03 520c-4.026-.423-7.517-.606-7.758-.847-.423-.424 4.124-3.347 24.95-16.039 6.679-4.07 9.427-6.253 8.5-6.75-.755-.402-6.585-1.042-12.958-1.42-9.467-.562-12.21-.4-15 .881-1.878.863-9.372 3.133-16.653 5.044-18.06 4.739-24.137 7.993-29.936 16.027l-2.166 3.103H-.001V0h706.34l-13.686 8.934c-7.535 3.74-16.29 8.936-19.458 11.545-10.744 8.85-25.211 28.985-28.824 40.115-1.328 4.09-2.534 5.624-6.608 8.404-6.217 4.243-13.664 12.334-19.83 21.546-8.373 12.508-24.332 40.698-27.468 48.518-4.864 12.131-4.422 21.37 2.757 57.622 3.16 15.961 6.58 32.171 7.6 36.024 1.02 3.853 2.135 10.382 2.479 14.51.615 7.37 1.094 8.966 5.408 18.012 1.182 2.477 2.147 5.288 2.145 6.246-.002.959.897 2.305 1.997 2.993 1.141.712 2 2.333 2 3.772 0 1.734 2.278 5.024 7.28 10.516 11.445 12.567 19.72 24.347 19.72 28.072 0 3.06-4.488 3.85-11.72 2.065-8.452-2.087-15.367-6.595-26.03-16.972-4.537-4.416-8.25-7.384-8.25-6.597 0 .787 3.111 4.893 6.914 9.123 7.562 8.414 8.748 10.709 7.113 13.767-1.43 2.675-4.911 3.454-9.62 2.153-5.434-1.502-8.618.591-7.722 5.075.55 2.751.4 3.075-1.155 2.478-3.072-1.18-9.794-2.53-15.838-3.184-5.552-.6-5.963-.843-9.325-5.525-2.547-3.548-4.529-5.182-7.191-5.93-9.923-2.786-34.604-7.08-51.175-8.905-29.128-3.207-36.144-3.458-50.1-1.798-10.716 1.275-13.63 2.024-19.5 5.008-10.39 5.283-28.4 21.837-28.4 26.104 0 2.002 3.968 1.296 8.5-1.513 13.758-8.524 60.88-20.554 84-21.445 11.458-.442 10.837.107-2.91 2.571-3.8.682-12.8 2.987-20 5.124s-19.614 5.43-27.589 7.317c-7.975 1.888-16.975 4.321-20 5.408l-5.5 1.975 8.5.093c43.31.474 92.681 14.223 112.77 31.408 8.646 7.394 11.811 8.292 24.528 6.952 17.428-1.835 39.985-10.156 49.878-18.397 4.293-3.576 7.825-4.998 7.818-3.148-.01 3.269-5.697 20.84-8.155 25.2-2.74 4.86-2.896 5.559-1.469 6.603.878.642 1.344 1.42 1.036 1.728-.308.308.374.856 1.515 1.219 3.282 1.042 2.456 2.05-2.781 3.393-5.107 1.31-9.143 3.602-9.143 5.193 0 .52.701.944 1.559.944 2.568 0 .652 1.796-2.704 2.533-2.297.505-2.756.918-1.738 1.563.998.633 1.035.881.133.892-.688.008-1.25 1.031-1.25 2.273 0 1.546-.946 2.676-3 3.586-5.007 2.218-3.603 3.415 3.25 2.773 3.437-.322 5.575-.319 4.75.007-.825.326-6.45 2.873-12.5 5.659-6.05 2.786-13.925 6.093-17.5 7.35-4.047 1.421-6.632 2.919-6.85 3.968-.348 1.684 1.53 1.628 6.257-.187.876-.336 1.582-.225 1.568.246-.013.472-10.429 6.487-23.145 13.366-12.716 6.88-24.615 13.972-26.442 15.76s-4.164 3.252-5.194 3.252c-1.036 0-2.391 1.139-3.033 2.55-1.943 4.265-1.54 4.784 3.09 3.988 6.878-1.181 10.03-1.116 10.487.217.247.721-.402 1.25-1.532 1.25-1.079 0-2.5.65-3.157 1.442-.657.793-2.394 1.581-3.859 1.752-1.704.198-3.388 1.456-4.676 3.494-1.108 1.752-2.914 3.416-4.014 3.699s.475.33 3.5.105c44.98-3.348 53.36-5.013 71.5-14.211 15.476-7.847 31.54-19.513 42.97-31.202 3.282-3.358 6.32-6.105 6.75-6.105 1.553 0 .71 5.613-1.584 10.543-3.971 8.533-12.303 16.394-29.428 27.764-8.64 5.735-17.957 11.137-20.707 12.004-8.592 2.707-22.463 5.591-37.004 7.694-47.373 6.85-65.502 12.045-83.46 23.918-3.006 1.987-6.16 3.495-7.011 3.35-.85-.143-3.117 1.081-5.036 2.722-5.397 4.616-1.487 3.835 9.707-1.938 11.471-5.916 16.85-6.848 7.804-1.353C468.261 515.778 459.806 520 451.53 520h-44.498zm-58.846-58.006c1.798-.752 7.746-4.084 13.218-7.405 5.472-3.321 11.974-6.957 14.449-8.08 2.475-1.123 9.45-4.276 15.5-7.007 12.681-5.722 31.29-11.123 32.36-9.39.376.609 3.149 1.28 6.162 1.49 4.217.295 4.96.566 3.228 1.178-1.238.437-2.25 1.192-2.25 1.678 0 1.81 9.359 1.267 13.299-.772 1.545-.799 5.034-1.717 7.755-2.04 3.382-.4 4.946-1.044 4.946-2.035 0-1.131.859-1.304 3.913-.788 4.203.71 13.243-1 37.587-7.11 16.486-4.138 28.973-8.303 39.94-13.322l7.94-3.633-7.94-5.089c-19.352-12.402-38.785-20.018-81.44-31.916-7.425-2.07-13.95-4.213-14.5-4.76-.663-.66-.326-.752 1-.276 4.26 1.528 7.5 1.821 7.5.678 0-1.483-3.22-2.679-9.548-3.545-5.787-.792-9.522-2.52-5.502-2.544 6.222-.04-4.474-3.985-16.45-6.068-8.866-1.542-9.376-1.872-5.673-3.667 3.227-1.564 6.698-7.482 5.785-9.864-.776-2.021-1.742-1.813-6.538 1.41-9.245 6.213-17.725 16.388-22.49 26.986-2.72 6.045-1.778 6.6 12.214 7.198 11.458.49 11.64.534 8.702 2.113-1.65.886-4.96 1.912-7.355 2.28-8.135 1.248-12.654 5.11-8.62 7.369 1.197.67.722 1.236-2.219 2.639-3.296 1.573-3.528 1.906-1.944 2.793.989.554 3.864.842 6.39.641 3.51-.279 5.114.1 6.803 1.605l2.211 1.97-4.436 2.816c-2.44 1.549-5.2 4.26-6.133 6.024-.933 1.764-4.284 5.963-7.447 9.33s-5.75 6.848-5.75 7.737-4.612 5.31-10.25 9.822c-15.16 12.136-21.75 18.806-21.75 22.017 0 1.7-.856 3.23-2.36 4.215-4.732 3.103-7.203 6.688-4.608 6.688.568 0 2.504-.615 4.301-1.366zm116.98-11.692c3.747-.501 8.086-1.663 9.642-2.583l2.83-1.673-9.652-4.812-4.816 1.952a471.849 471.849 0 01-8.152 3.215c-7.377 2.794-8.34 6.549-1.415 5.518a984.68 984.68 0 0111.563-1.617zm-169.31-45.504c22.285-23.316 38.011-37.148 57.972-50.99 6.783-4.704 11.562-7.424 11.798-6.715.648 1.945 3.554 1.373 8.284-1.633 5.436-3.453 8.156-6.948 14.941-19.202 7.04-12.712 9.7-15.889 19.862-23.719a1632.238 1632.238 0 0015.555-12.152c5.479-4.353 6.795-5.04 6.344-3.317-.349 1.336-.108 2.176.624 2.176 2.272 0 12.976-4.572 13.353-5.703.59-1.769-10.287-3.595-18.33-3.078-6.177.396-8.364 1.113-16.028 5.253-18.008 9.728-31.017 20.221-55.857 45.055-17.876 17.872-31.958 29.855-39.076 33.252-2.318 1.106-4.064 3.425-6.876 9.132-5.465 11.093-15.223 27.012-24.485 39.947-8.754 12.225-10.633 16.454-3.83 8.62 2.338-2.691 9.425-10.308 15.75-16.926zm223 109.47c26.764-5.566 29.718-5.98 48.5-6.804 21.09-.924 23.777-1.472 36.464-7.439 4.065-1.911 5.659-2.259 6.224-1.357.983 1.57 7.864-2.18 21.312-11.615 5.5-3.859 13.278-8.79 17.284-10.959 6.036-3.267 7.883-3.83 10.787-3.285 3.1.582 4.018.204 7.978-3.283 10.974-9.666 20.344-14.134 29.702-14.164 2.782-.009 3.75.403 3.75 1.596 0 1.019.55 1.397 1.5 1.033 2.787-1.071 1.525.153-5.645 5.472-8.301 6.158-7.485 8.007.954 2.162 8.17-5.659 8.19-5.667 8.19-3.379 0 1.304-3.075 4.578-8.75 9.315-12.91 10.778-22.052 19.692-35.97 35.073l-12.45 13.361h-158.33l28.5-5.728zm.25-203.7c.962-.252 2.537-.252 3.5 0 .962.252.175.458-1.75.458s-2.713-.206-1.75-.458z"}),N("path",{fill:"#7f7f7f",d:"M985.58 272.52c-4.367-.66-2.114-2.284 3.171-2.284 5.302 0 8.096-2.036 8.096-5.9 0-1.816-.395-2.114-2.089-1.576-1.461.464-2.502.073-3.463-1.3-.898-1.283-3.068-2.188-6.262-2.612-5.704-.757-14.94-6.268-13.285-7.926.566-.566 3.503-1.234 6.526-1.485 5.211-.432 5.556-.632 6.613-3.838.791-2.4 1.892-3.565 3.788-4.01 1.47-.347 3.797-1.667 5.172-2.934 1.375-1.268 5.875-4.508 10-7.2 6.935-4.527 11.231-9.353 9.695-10.89-1.618-1.62-16.634-3.381-23.695-2.78-8.203.697-22.338 3.679-28.25 5.959-6.068 2.34-4.294.302 4.043-4.645 11.255-6.679 32.92-12.905 44.901-12.905 4.649 0 20.203 3.676 22.055 5.212 3.63 3.01-.329 13.574-7.06 18.845l-2.812 2.201 2.311 2.466 2.311 2.466-2.36 1.917c-1.299 1.054-3.077 1.916-3.953 1.916s-3.043 1.407-4.816 3.128c-2.73 2.648-3.083 3.502-2.298 5.569.608 1.6.549 3.15-.173 4.498-.673 1.26-.842 4.123-.435 7.384.831 6.657-.368 9.042-5.226 10.392-3.603 1.001-16.793 1.196-22.505.332z"}))},A=a.a.createElement,T=function(){return A("footer",{className:"py-4 mt-16 text-gray-700 bg-gray-200 body-font"},A("div",{className:"container flex flex-wrap items-center justify-between py-4 mx-auto"},A("div",{className:"w-1/3"},A("div",null,A("a",null,A(D,{className:"w-24"}))),A("div",{className:"my-2 text-xl"},"Observatoire national des violences en sant\xe9.")),A("div",null,A(r.a,{href:"/apropos"},A("a",null,"Qui sommes-nous ?"))),A("div",null,A(r.a,{href:"/mentions"},A("a",null,"Mentions l\xe9gales"))),A("div",null,A("a",{href:"mailto:dgos-onvs@sante.gouv.fr"},"Contactez\u2011nous"))))},L=l("nOHt"),B=a.a.createElement;function P(e){return B("svg",Object(C.a)({xmlns:"http://www.w3.org/2000/svg",width:"186",height:"238",viewBox:"0 0 186 238"},e),B("defs",null,B("linearGradient",{id:"linearGradient-1",x1:"49.978%",x2:"49.978%",y1:"99.992%",y2:"-.014%"},B("stop",{offset:"0%",stopColor:"gray",stopOpacity:"0.25"}),B("stop",{offset:"54%",stopColor:"gray",stopOpacity:"0.12"}),B("stop",{offset:"100%",stopColor:"gray",stopOpacity:"0.1"}))),B("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},B("g",{fillRule:"nonzero",transform:"translate(-885 -277)"},B("g",{transform:"translate(885 277)"},B("path",{fill:"url(#linearGradient-1)",d:"M81.886 85.555s-1.513-.21-1.513-2.413c0-2.201-1.084-6.324-1.084-6.324s-.938-7.174-2.232-8.311c-1.295-1.138-2.96-7.816-2.96-7.816s-.284-3.623-.864-4.403c-.58-.78-1.364-2.69-2.52-5.414-1.157-2.725-5.968-4.592-5.968-4.592s-8.718-5.057-11.189-6.705a3.82 3.82 0 01-.63-.477c-.43-.56-2.306-.572-2.306-.572-.196-1.241-.384-2.663-.445-3.95v-.415a13.295 13.295 0 005.844-7.232c.046-.146.085-.296.127-.445.34-.106.62-.352.768-.677.22-.495.227-1.072.504-1.537.323-.545.937-.837 1.421-1.245 1.222-1.041 1.537-2.79 1.48-4.376-.039-1.291-.246-2.59-.165-3.87 0-.107 0-.215.023-.322a9.21 9.21 0 01.084-.569c.188-.953.6-1.852.83-2.797.23-.946.254-2.01-.284-2.825-.788-1.195-2.429-1.433-3.87-1.537-1.633-.138-3.074.039-4.138-1.317a14.486 14.486 0 00-1.644-1.983c-.216-.2-2.306-1.48-2.306-1.56a9.341 9.341 0 00-6.532-.504c-1.088.315-2.106.83-3.209 1.088-2.366.56-5.095-.046-7.108 1.31-1.122.769-1.794 1.994-2.425 3.182-.512.978-1.032 1.958-1.56 2.94-.853 1.61-1.713 3.246-2.07 5.029-.076.39-.123.783-.143 1.18v.61c0 .131 0 .262.023.385s0 .157.027.238c.027.08.035.261.058.384s.069.342.115.507c0 .073.046.143.07.216.022.073.084.257.134.384s.053.134.084.2c.058.134.127.265.196.384.03.05.054.1.085.15.105.18.223.352.353.515.819 1.026 2.033 1.679 2.928 2.64v.43a13.153 13.153 0 006.025 10.72c0 .146.02.296.027.446.075 1.14.06 2.283-.042 3.42a1.622 1.622 0 00-1.276-.569 1.829 1.829 0 00-.492.042l-.034-.027v.035c-.846.207-1.887 1.087-2.882 3.589 0 0-3.028 3.412-5.334 3.27-2.305-.142-8.142 3.554-8.142 3.554s-5.694 3.693-6.916 7.458a52.138 52.138 0 01-2.456 6.256L1.295 75.826 0 87.354s.719 5.114.576 5.898c-.142.784 2.955 7.815 2.955 7.815s10.233 17.975 14.413 18.898l.3-.208c.18.09.37.16.565.208l.86-.604c.054.676.03 1.355-.069 2.025-.572 1.78.22 13.36 1.226 15.631 1.007 2.271.65 32.05.65 32.05l-.143 2.625s0 .084.035.23l-.035.623.104.054a7.427 7.427 0 01-.104 2.505c-.36 1.153-.507 4.407-.507 4.407s-2.882 18.398-1.514 22.094c1.368 3.697 2.525 7.747 2.525 7.747s1.44 4.61.069 5.379c-1.372.768-5.257 2.133-4.465 4.05.73 1.775 3.5 6.532 3.911 7.228l-.034.384-.565 6.12c.092.81.31 1.598.65 2.337.618 1.337 1.817 2.717 4.107 2.567.384-.027.826-.07 1.26-.127 4.185-.565 9.334-2.432 9.334-2.432a3.681 3.681 0 01-.727-.604 2.11 2.11 0 01-.641-1.536c.061-1.119-2.025-6.425-2.548-7.735l-.119-.292s4.757-4.976 3.966-9.38c0 0-5.265-3.074-3.532-4.764 1.733-1.691 4.83-6.533 4.83-6.533s.142-18.117 0-20.818a22.44 22.44 0 01.265-5.625c.058-.277.127-.55.2-.823 2.399.362 4.821.546 7.247.55.886 0 1.783-.018 2.69-.054 0 .256.011.533.034.83.2 4.488.573 12.361.876 15.285.43 4.189 2.81 15.49 2.81 15.49s-4.539 2.908.79 10.09c0 0 0 2.597-.353 2.977a32.515 32.515 0 00-.91 3.754c-.223 1.35-.315 2.72.046 3.428.864 1.698 6.052 1.56 6.052 1.56a.818.818 0 01.126-.02 7.404 7.404 0 015.491 1.653c1.971 1.583 9.449.891 13.503.384 1.587-.203 2.647-.384 2.647-.384.051-.18.07-.367.054-.553-.042-.996-.822-3.178-6.11-5.126 0 0-4.972-3.343-4.903-6.256H67.204c.362-.011.615-.011.615-.011s-1.948-7.105-1.152-7.685c.795-.58-1.587-8.453-1.587-8.453s-1.364-13.219-1.441-14.14a8.123 8.123 0 01.36-2.345l-.36-7.25s-.07-2.41 0-3.193c-.008-.68-.062-1.36-.162-2.033-.034-.269-.069-.55-.107-.826 1.863-.473 3.074-.907 3.074-.907l-.216-25.226c1.584-3.074 1.876-9.821 1.868-14.601 0-3.074-.138-5.349-.138-5.349l2.163-3.53s.5-4.228-.292-5.154c-.35-.418-.192-.853.096-1.21a4.02 4.02 0 01.48-.338.603.603 0 01-.05-.085 3.82 3.82 0 01.48-.342s-.768-1.19-.08-1.694c.645.438 1.222.788 1.66 1.037-.03.28-.062.442-.062.442l.185-.384.68.384s3.389-6.751 3.316-7.742c-.073-.992 2.305-5.188 2.305-5.188s.289-2.205 1.587-3.127c1.3-.923 1.007-7.605 1.007-7.605s.361-3.48 1.226-4.899c.864-1.418-.773-3.347-.773-3.347zm-64.845-2.962l.066 1.61-.661-1.06.595-.55z"}),B("path",{fill:"#FFF",d:"M73.418 114.543l-.83 3.535s-6.648-3.4-7.843-7.704c-1.195-4.304 2.002-5.944 2.002-5.944l6.198 2.62.473 7.493z"}),B("path",{fill:"#000",d:"M73.418 114.543l-.83 3.535s-6.648-3.4-7.843-7.704c-1.195-4.304 2.002-5.944 2.002-5.944l6.198 2.62.473 7.493z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M36.111 234.854s-6.148 2.26-10.374 2.544c-2.244.15-3.424-1.226-4.031-2.552a7.8 7.8 0 01-.638-2.305l.557-6.09.292-3.24 8.98-2.336 1.272 3.892.12.293c.506 1.302 2.558 6.582 2.497 7.684a2.11 2.11 0 00.626 1.537c.208.22.443.412.7.573zM78.086 231.757c.016.186-.002.374-.054.553 0 0-13.148 2.19-15.838 0a7.12 7.12 0 00-5.518-1.625s-5.087.138-5.936-1.537c-.354-.703-.262-2.067-.043-3.408.224-1.262.522-2.509.892-3.735l.203-.162 1.21-.972 14.172-.419h.107c-.069 2.898 4.807 6.221 4.807 6.221 5.191 1.922 5.956 4.093 5.998 5.084z"}),B("path",{fill:"#000",d:"M78.09 231.757c.014.186-.006.374-.058.553 0 0-13.148 2.19-15.834 0a7.12 7.12 0 00-5.522-1.625s-5.091.138-5.94-1.537c-.35-.703-.262-2.067-.043-3.412 1.96.196 5.053.684 6.267 1.852 1.837 1.767 4.95 3.535 6.855 3.677 1.507.092 10.463.377 14.275.492zM36.111 234.854s-6.148 2.26-10.374 2.544c-2.244.15-3.424-1.226-4.031-2.552 1.568.527 3.739 1.076 4.88.573 1.352-.604 6.148-.988 8.838-1.153.202.225.434.423.687.588z",opacity:"0.1"}),B("path",{fill:"#F2AAB7",d:"M45.233 52.764c-5.072-1.971-11.596-8.484-9.967-11.527a6.89 6.89 0 00.634-2.444c.105-1.15.12-2.306.046-3.458a47.493 47.493 0 00-.68-5.63s15.835.358 14.913 2.69c-.27.688-.316 1.875-.239 3.201.077 1.326.265 2.836.465 4.108.273 1.74.554 3.073.554 3.073s-.973 1.357-1.537 1.43c-.565.073 3.089 11.381-4.189 8.557z"}),B("path",{fill:"#000",d:"M32.273 225.04l-.12.13c-4.733-5.724-10.459 1.415-10.459 1.415l-.084-.154.292-3.239 8.98-2.336 1.272 3.892.119.292zM67.289 220.856s-3.458-.07-5.303 1.56c-1.844 1.63-10.758.35-10.374 0a1.33 1.33 0 00.2-.588l1.21-.972 14.17-.419c.055.269.097.419.097.419z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M38.163 175.895a10.778 10.778 0 00-.584 1.972 22.559 22.559 0 00-.265 5.594c.142 2.69 0 20.715 0 20.715s-3.04 4.807-4.738 6.501c-1.698 1.695 3.459 4.738 3.459 4.738.768 4.384-3.89 9.333-3.89 9.333-4.733-5.725-10.458 1.41-10.458 1.41s-3.113-5.379-3.889-7.3c-.776-1.921 3.04-3.247 4.38-4.03 1.342-.785-.069-5.38-.069-5.38s-1.13-4.031-2.474-7.708c-1.345-3.678 1.483-21.98 1.483-21.98s.146-3.254.496-4.387c.174-.818.21-1.66.104-2.49-.024-.28-.05-.511-.07-.673-.019-.16-.034-.23-.034-.23l.054-.092 1.92-3.581s15.497 5.333 14.575 7.588zM67.289 220.433s-3.458-.073-5.303 1.537c-1.844 1.61-10.758.354-10.374 0 .384-.353.35-2.966.35-2.966-5.23-7.143-.769-10.04-.769-10.04s-2.332-11.24-2.755-15.409c-.296-2.908-.661-10.759-.857-15.204a570.788 570.788 0 01-.134-3.247l4.234-.842.55-.107 10.305-2.071s.284 1.92.476 3.492c.098.671.15 1.348.158 2.025-.065.769 0 3.178 0 3.178l.353 7.209a8.315 8.315 0 00-.353 2.332c.073.922 1.414 14.067 1.414 14.067s2.332 7.846 1.537 8.411c-.795.565 1.168 7.635 1.168 7.635z"}),B("path",{fill:"#000",d:"M50.179 32.407c-.27.688-.316 1.875-.239 3.2a13.16 13.16 0 01-13.994-.26 47.493 47.493 0 00-.68-5.63s15.835.357 14.913 2.69z",opacity:"0.1"}),B("path",{fill:"#F2AAB7",d:"M56.292 23.923c.087 7.26-5.728 13.215-12.988 13.302-7.26.087-13.215-5.728-13.302-12.987v-.315c0-7.262 5.887-13.15 13.149-13.15S56.3 16.662 56.3 23.924h-.008z"}),B("path",{fill:"#000",d:"M45.233 52.764c-5.072-1.971-11.596-8.484-9.967-11.527a6.89 6.89 0 00.634-2.444l6.943 5.71 4.296 3.523 3.266-8.31c.273 1.74.554 3.073.554 3.073s-.973 1.356-1.537 1.43c-.565.072 3.089 11.37-4.189 8.545z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M63.1891004 77.997397L57.3908424 175.40352 49.8288996 175.899196 30.2439288 119.419015 33.4562175 52.364409 34.1363313 38.1972935 42.8433244 45.3480941 47.1391842 48.8716214 50.5013284 40.3144838 56.7529956 45.7630788z"}),B("path",{fill:"#000",d:"M38.163 175.895a10.778 10.778 0 00-.584 1.972 55.716 55.716 0 01-15.87-4.953l-.103-.054.035-.619v-.323l1.92-3.58s15.524 5.302 14.602 7.557zM51.808 177.882a38.92 38.92 0 01-4.25.488 570.783 570.783 0 01-.134-3.247l4.257-.86.127 3.619zM63.028 175.576c-2.732.711-6.955 1.51-10.728 1.011l-.054-2.432 10.305-2.071s.273 1.905.477 3.492z",opacity:"0.1"}),B("path",{fill:"#000",d:"M52.23 177.033c-15.754 2.69-30.182-5.022-30.182-5.022l.138-2.613s.358-29.622-.634-31.893c-.991-2.27-1.763-13.77-1.202-15.527.56-1.756-2.048-28.269-2.048-28.269l-.423-10.759-15.481-6.29 6.916-14.42a52.107 52.107 0 002.405-6.225c1.203-3.747 6.786-7.424 6.786-7.424s5.725-3.673 7.989-3.535c2.263.138 5.23-3.25 5.23-3.25 2.19-5.584 4.172-3.075 4.172-3.075 0 .27 0 0-.107.827-.769 6.128 12.426 25.494 12.614 25.84l1.272 30.609 1.272 38.736 1.283 42.29z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M51.808 177.033c-15.754 2.69-30.187-5.022-30.187-5.022l.143-2.613s.353-29.622-.638-31.893c-.992-2.27-1.764-13.782-1.2-15.554.566-1.771-2.059-28.257-2.059-28.257l-.426-10.76-15.478-6.29 6.917-14.42a52.922 52.922 0 002.405-6.22c1.203-3.736 6.805-7.417 6.805-7.417s5.726-3.673 7.985-3.535c2.26.139 5.241-3.247 5.241-3.247 2.194-5.583 4.61-3.074 4.61-3.074 0 .27-.23.385-.107.827 1.691 5.944 12.004 25.494 12.192 25.84l1.272 30.609 1.245 38.755 1.28 42.27z"}),B("path",{fill:"#000",d:"M47.562 66.263c-1.695-.707-10.67-10.955-10.67-10.955v-2.333c-.327-.768-2.272-.3-3.843.239l.676-14.168.769.638c1.679 5.94 12.883 26.237 13.068 26.579z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M47.988 65.417c-1.698-.71-10.674-10.955-10.674-10.955v-2.336c-.327-.768-2.267-.3-3.842.238l.664-14.151.769.634c1.694 5.932 12.895 26.224 13.083 26.57z"}),B("path",{fill:"#000",d:"M22.048 116.522c.211 0 10.955-1.13 10.955-1.13s6.505 12.795 6.079 15.904c-.427 3.109-1.2 5.867-3.816 5.38-2.617-.489-14.083.384-14.083.384l.865-20.538z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M21.621 115.673c.216 0 10.96-1.13 10.96-1.13s6.5 12.815 6.078 15.888c-.423 3.074-1.203 5.868-3.816 5.38-2.613-.488-14.086.384-14.086.384l.864-20.522z"}),B("path",{fill:"#F2AAB7",d:"M29.718 109.682s9.86 5.303 10.07 6.917c.212 1.613-5.018-.707-6.147-.992-.744-.176-1.501-.295-2.264-.353l-7.535.203 5.876-5.775z"}),B("circle",{cx:"44.807",cy:"65.886",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"44.807",cy:"65.463",r:"1.037",fill:"#3F3D56"}),B("circle",{cx:"46.717",cy:"110.797",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"46.717",cy:"110.37",r:"1.037",fill:"#3F3D56"}),B("circle",{cx:"45.844",cy:"88.341",r:"1.037",fill:"#000",opacity:"0.1"}),B("circle",{cx:"45.844",cy:"87.919",r:"1.037",fill:"#3F3D56"}),B("path",{fill:"#FFF",d:"M69.76 115.039s.707 1.06 0 1.537c-.707.476.069 1.698.069 1.698s-1.764 1.03-.988 1.963c.777.934.285 5.126.285 5.126l-2.121 3.531s.126 2.264.134 5.322c0 4.773-.28 11.482-1.833 14.54l.208 25.095s-7.428 2.717-13.645 1.887l-.922-40.27s1.345-22.835 1.84-27.215a45.59 45.59 0 00.354-6.859s-.211-6.855-.922-10.033c0 0-.769-13.786-.845-17.602-.035-1.825.061-7.15.169-12.215.119-5.537.253-10.759.253-10.759l-1.402-11.1s1.402-.139 1.825.422c.19.177.395.335.615.473 2.424 1.636 10.978 6.67 10.978 6.67s4.733 1.883 5.867 4.58c1.134 2.698 1.921 4.611 2.47 5.38.55.768.85 4.38.85 4.38s1.63 6.648 2.9 7.773c1.273 1.126 2.187 8.273 2.187 8.273l-11.239 8.838s-.987 14.701-1.199 15.27c-.211.568 4.112 13.295 4.112 13.295z"}),B("path",{fill:"#FFF",d:"M70.186 115.039s.703 1.06 0 1.537c-.703.476.066 1.698.066 1.698s-1.764 1.03-.988 1.963c.776.934.284 5.126.284 5.126l-2.113 3.531s.127 2.264.138 5.322c0 4.773-.28 11.482-1.833 14.54l.212 25.095s-7.428 2.717-13.645 1.887l-.918-40.27s1.34-22.835 1.84-27.215c.29-2.274.408-4.567.35-6.859 0 0-.211-6.855-.918-10.033 0 0-.769-13.786-.85-17.602-.034-1.825.062-7.15.17-12.215.119-5.537.253-10.759.253-10.759l-1.852-11.25s1.852 0 2.279.572c.187.179.393.337.615.473 2.42 1.636 10.974 6.67 10.974 6.67s4.722 1.883 5.875 4.58c1.152 2.698 1.92 4.611 2.47 5.38.55.768.85 4.38.85 4.38s1.629 6.648 2.9 7.773c1.273 1.126 2.19 8.273 2.19 8.273l-11.238 8.838s-.988 14.701-1.203 15.27c-.215.568 4.092 13.295 4.092 13.295z"}),B("path",{fill:"#000",d:"M56.726 54.047l1.018 2.96-5.345 5.379c.12-5.537.254-10.76.254-10.76L50.801 40.38s1.852 0 2.279.572c.187.18.393.338.614.473l4.542 13.099-1.51-.477z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M56.292 53.198l1.018 2.955-5.34 5.38c.114-5.537.253-10.76.253-10.76l-1.856-11.25s1.856 0 2.278.572c.189.178.395.337.615.473l4.569 13.11-1.537-.48z"}),B("path",{fill:"#000",d:"M56.292 23.923a13.107 13.107 0 01-.646 4.076.546.546 0 01-.415-.1c-.103-3.458-1.802-6.708-3.896-9.471a10.033 10.033 0 00-2.113-2.19 4.138 4.138 0 00-2.867-.811c-1.152.157-2.17.941-3.335 1.041-1.537.127-2.913-.937-4.438-.987a4.35 4.35 0 00-3.262 1.514 8.9 8.9 0 00-1.749 3.239 18.974 18.974 0 00-.975 5.594c-.02 1.076-.123 2.425-1.122 2.817a5.725 5.725 0 00-1.45-4.38l-.022-.027v-.315c0-7.262 5.887-13.15 13.149-13.15S56.3 16.662 56.3 23.924h-.008z",opacity:"0.1"}),B("path",{fill:"#A96A1D",d:"M48.607 3.047a9.053 9.053 0 00-6.386-.5c-1.065.315-2.067.826-3.147 1.084-2.306.557-4.995-.047-6.974 1.302-1.1.769-1.76 1.983-2.375 3.166l-1.537 2.924c-.837 1.603-1.683 3.232-2.032 4.996-.35 1.763-.139 3.738.98 5.16.81 1.03 2.017 1.68 2.9 2.651a5.764 5.764 0 011.445 4.392c1-.384 1.1-1.74 1.122-2.816.043-1.903.372-3.79.976-5.595a8.9 8.9 0 011.748-3.239 4.353 4.353 0 013.263-1.518c1.537.054 2.916 1.118 4.438.988 1.152-.096 2.175-.88 3.335-1.038a4.12 4.12 0 012.866.811 9.844 9.844 0 012.11 2.19c2.098 2.767 3.8 6.002 3.9 9.472.434.315 1.06-.1 1.276-.592.215-.492.223-1.068.495-1.537.316-.542.919-.834 1.391-1.241 1.2-1.034 1.499-2.774 1.453-4.353-.046-1.58-.354-3.182-.054-4.734.18-.95.588-1.845.81-2.786.224-.942.25-1.998-.276-2.809-.768-1.187-2.386-1.426-3.796-1.537-1.602-.138-3.036.038-4.058-1.31a15.02 15.02 0 00-1.614-1.975c-.211-.204-2.259-1.472-2.259-1.556z"}),B("path",{fill:"#000",d:"M6.832 84.076l-4.012-7.42-1.271 11.45s.707 5.088.564 5.868c-.142.78 2.898 7.774 2.898 7.774s10.04 17.886 14.14 18.805l13.833-9.899-3.674-4.664s-1.272-.496-1.59 0c0 0-6.825-11.735-7.528-12.58-.703-.846-.569-2.548-.569-2.548s-1.06-1.13-.707-2.19c.354-1.06-2.028-4.734-2.028-4.734l2.19-2.048-12.246 2.186z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M3.032 75.807l-1.06.85-1.273 11.45s.707 5.087.565 5.867c-.142.78 2.901 7.774 2.901 7.774s10.037 17.886 14.137 18.805l13.855-9.899-3.677-4.664s-1.272-.496-1.59 0c0 0-6.82-11.735-7.528-12.58-.707-.846-.565-2.548-.565-2.548s-1.06-1.13-.707-2.19c.354-1.06-2.052-4.734-2.052-4.734l2.19-2.048-15.196-6.083z"}),B("path",{fill:"#000",d:"M68.841 120.68c.769.933.285 5.129.285 5.129l-2.121 3.508s.126 2.267.134 5.326l-3.566 1.114a2.121 2.121 0 01-2.75-2.09l.618-19.827 8.319 3.177c-.707.492.069 1.699.069 1.699s-1.764 1.03-.988 1.963z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M69.264 120.257c.769.93.284 5.125.284 5.125l-2.113 3.512s.127 2.264.138 5.322l-3.63 1.134a2.071 2.071 0 01-2.69-2.04l.618-19.897 8.315 3.186c-.71.491.066 1.698.066 1.698s-1.764 1.026-.988 1.96z"}),B("path",{fill:"#F2AAB7",d:"M72.023 110.797s-.565 3.608-1.979 3.819c-1.414.211-2.048 5.837-3.458 5.64-1.41-.195-.477-5.233-.427-6.209.05-.976-1.537-5.018-.353-5.936 1.183-.919 4.949 0 4.949 0l1.268 2.686z"}),B("path",{fill:"#000",d:"M75.012 83.016l2.663-5.38s1.064 4.1 1.064 6.29c0 2.19 1.484 2.406 1.484 2.406s1.625 1.92.768 3.323-1.199 4.876-1.199 4.876.28 6.644-.991 7.562c-1.272.919-1.556 3.113-1.556 3.113s-2.333 4.169-2.26 5.16c.073.992-3.25 7.704-3.25 7.704s1.625-8.342-7.847-11.946c0 0-.073-2.828.634-3.604.707-.776 1.81-1.153 1.119-5.057-.692-3.904-.2-8.61-.2-9.552 0-.941 2.12-6.809 2.12-6.809l7.451 1.914z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M76.196 76.868l2.328.768s1.065 4.1 1.065 6.29c0 2.19 1.483 2.406 1.483 2.406s1.625 1.92.768 3.323-1.202 4.876-1.202 4.876.284 6.644-.988 7.562c-1.272.919-1.537 3.113-1.537 3.113s-2.332 4.169-2.26 5.16c.074.992-3.254 7.704-3.254 7.704s1.626-8.342-7.846-11.946c0 0-.07-2.828.638-3.604.707-.776 1.81-1.153 1.118-5.057-.692-3.904-.2-8.61-.2-9.552 0-.941 2.121-6.809 2.121-6.809l7.766-4.234z"}),B("g",{transform:"translate(54)"},B("path",{fill:"#2F2E41",d:"M57.411 27.443l-24.329 4.12a2.463 2.463 0 01-2.787-1.768c-1.757-6.344-5.432-14.62-1.864-18.774a6.825 6.825 0 017.19-6.108C39.966-1.89 47.205-.869 52.097 3.38c4.924 1.7 6.78 4.718 6.132 8.814 2.127 1.862 3.242 3.96 3.477 6.261a9.042 9.042 0 01-2.474 7.035l-1.822 1.953z"}),B("path",{fill:"#9F616A",d:"M53.629 46.597l-18.86-1.11c1.848-4.242 2.586-8.327 1.848-12.203H50.67c-.032 2.976 1.45 8.124 2.959 13.313z"}),B("path",{fill:"#1D2649",d:"M30.926 220.87l-.773 10.575a3.367 3.367 0 003.56 3.606l5.433-.329a1.717 1.717 0 001.561-2.13l-3.015-12.06-6.766.338zM48.512 220.532l-3.016 12.06a1.717 1.717 0 001.562 2.13l5.432.33a3.367 3.367 0 003.561-3.607l-.773-10.575-6.766-.338z"}),B("path",{fill:"#387CCB",d:"M55.6282566 222.338306L48.2981566 221.60269 41.0002566 143.59474 38.2421733 221.351223 31.0404899 221.09324 18.9022399 113.404556 65.2767566 113.404556z"}),B("circle",{cx:"44.014",cy:"23.767",r:"14.006",fill:"#9F616A"}),B("path",{fill:"#FFF",d:"M53.335 35.005c-6.127 2.549-12.551 2.445-19.239 0 1.946-3.321-.962-5.923-2.456-9.276l24.97-.742c-1.91 2.913-4.727 6.354-3.275 10.018z"}),B("path",{fill:"#387CCB",d:"M17.387 87.645L6.663 80.99l9.146-26.787a12.637 12.637 0 015.524-6.561l3.08-1.784.269 27.023-7.295 14.765z"}),B("path",{fill:"#387CCB",d:"M63.743 100.655l-1.587-13.59c-.084-7.173 1.136-14.109 4.046-20.499l1.48-19.97L51.41 39.94c-.05.332-.093.663-.14.995l-7.626 3.813-7.438-1.69.042-2.378-14.793 6.656c4.892 22.743 2.224 46.36-6.188 74.255l19.487 5.329.162-9.357 17.368-1.24c.179 3.035.323 6.017.406 8.933 9.8 3.608 10.137 3.548 19.066-1.618-3.556-7.476-6.372-15.256-8.013-22.983z"}),B("path",{fill:"#387CCB",d:"M88.7601399 84.3168397L78.7754566 80.9887397 62.8042566 62.395923 67.6810233 46.5968397 89.8695066 77.6606397z"}),B("path",{fill:"#E6E6E6",d:"M57.468 98.711a2.778 2.778 0 003.318 2.093l8.476-1.92-1.225-5.41-8.476 1.92a2.774 2.774 0 00-2.093 3.317z"}),B("path",{fill:"#387CCB",d:"M65.093 92.453l4.807 8.875c8.086-2.255 15.094-9.365 21.819-17.75l-1.85-5.918-11.463 2.959-13.313 11.834z"}),B("path",{fill:"#3F3D56",d:"M.773 64.246a.785.785 0 00-.644 1.216l19.718 29.917c.11.168.28.286.475.332l9.175 2.159a.784.784 0 00.82-1.214L8.667 65.873a.78.78 0 00-.503-.32L.921 64.259a.837.837 0 00-.148-.013z"})),B("g",{transform:"translate(3 1)"},B("ellipse",{cx:"91.849",cy:"228.543",fill:"#08177D",opacity:"0.1",rx:"91.005",ry:"7.419"}),B("path",{fill:"#08177D",d:"M128.432 59.027H139.962V70.557H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 87.466H139.962V98.996H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 115.901H139.962V127.431H128.432z",opacity:"0.1"}),B("path",{fill:"#08177D",d:"M128.432 144.341H139.962V155.871H128.432z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M164.152703 217.917568L163.67027 223.662162 165.287838 223.337838 165.044595 217.106757z"}),B("path",{fill:"#E58687",d:"M127.249 190.642c-1.95 5.554-1.399 13.05-.961 16.69.162 1.346.312 2.165.312 2.165s-2.915 6.64-3.158 6.892c-.243.252-8.578 5.34-8.578 5.34l-5.826 3.4s-5.911-2.59-3.077-3.482a4.301 4.301 0 001.528-1.042c2.838-2.696 6.402-9.397 6.402-9.397s.243-3.401 1.135-5.019c.892-1.617.567-18.616.567-18.616l.07-27.71v-3.612l11.087.081c.07 1.227.23 2.446.478 3.65a55.78 55.78 0 001.545 6.145c1.954 6.32 1.143 16.905-1.524 24.515z"}),B("path",{fill:"#000",d:"M126.6 209.497s-2.915 6.64-3.158 6.892c-.243.252-8.578 5.34-8.578 5.34l-5.826 3.4s-5.911-2.59-3.077-3.482a4.301 4.301 0 001.528-1.042l.252 1.772 1.941-.081 16.622-14.955c.146 1.337.296 2.156.296 2.156z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M126.397 207.718l-16.715 15.056-1.941.081-.406-2.837s-3.397 4.37-10.946 4.127c0 0-4.532 2.996 2.185 3.158 6.718.162 15.296-.244 15.296-.244s5.992-9.324 11.007-8.108v7.042h1.54v-7.107a6.401 6.401 0 002.733-4.216 5.165 5.165 0 00-1.788-4.735 3.053 3.053 0 01-.965-2.217z"}),B("path",{fill:"#E58687",d:"M165.693 199.301c-1.078 3.852-.49 6.02.248 7.184v.024a13.277 13.277 0 011.937 4.732l.065.364-7.605 11.088-4.127 1.622s-6.637-2.266-5.425-2.915c.305-.158.779-1.001 1.322-2.165 1.622-3.507 3.86-9.977 3.86-9.977v-.053c.235-2.671.608-5.335 1.021-7.986.742-4.772-.62-16.484-.62-16.484s-.487-14.242-1.54-17.48a26.728 26.728 0 01-.945-5.044c-.22-2.027-.268-3.697-.268-3.697s4.37-6.082 12.381.486a8.814 8.814 0 011.675 1.816c5.533 7.873 1.078 25.216 1.078 25.216s-1.115 6.309-3.057 13.27z"}),B("path",{fill:"#000",d:"M167.955 211.605l-7.605 11.088-4.127 1.622s-6.637-2.266-5.424-2.915c.304-.158.778-1.001 1.321-2.165 2.81-.024 4.265 2.651 4.265 2.651l3.56-.567s4.694-9.227 5.748-9.79c1.054-.564.162-4.213.162-4.213v-.928c.029.032.053.069.086.101v.025a13.277 13.277 0 011.937 4.73l.077.361z",opacity:"0.1"}),B("path",{fill:"#5FC7AE",d:"M156.628 222.126s-2.027-3.722-5.91-2.348c0 0-2.186 4.46-4.37 5.181-2.186.722-1.456 3.155 3.482 2.267 4.938-.888 12.38-1.622 12.38-1.622l.325-4.536 5.02-6.394s2.99-2.712-1.46-8.051v.928s.891 3.649-.163 4.213c-1.054.563-5.732 9.794-5.732 9.794l-3.572.568z"}),B("path",{fill:"#000",d:"M126.762 156.324c.07 1.227.23 2.446.479 3.649-4.565-.669-8.802-.337-11.579-.118v-3.612l11.1.081zM168.122 161.826s-6.487.316-14.222.38a52.799 52.799 0 01-.268-3.697s4.37-6.08 12.382.487a8.814 8.814 0 011.674 1.816c.125.346.27.684.434 1.014z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M168.122 161.096s-28.411 1.374-37.07-1.054c-8.66-2.428-17.243-.324-18.536-.888-1.293-.563-.243-9.39.892-11.574 1.135-2.185 7.362-24.284 7.362-24.284l5.992-31.24 6.312-1.74.446-.125 10.999-3.033 8.06-2.226s16.025 62.567 14.65 67.18c-.498 1.767-.579 3.625-.234 5.429.21 1.231.589 2.427 1.127 3.555z"}),B("path",{fill:"#C7DAF5",d:"M105.876 70.69s-5.676 6.082-1.379 9.47c4.298 3.39 7.123.325 7.123.325l-5.744-9.794z"}),B("path",{fill:"#000",d:"M105.876 70.69s-5.676 6.082-1.379 9.47c4.298 3.39 7.123.325 7.123.325l-5.744-9.794z",opacity:"0.1"}),B("path",{fill:"#E58687",d:"M151.731 30.71s-.665.632-1.666 1.564a228.28 228.28 0 01-5.412 4.918c-2.595 2.258-4.735 3.916-3.97 2.501.767-1.415.621-3.88.24-6.186-.028-.154-.053-.308-.081-.458a42.486 42.486 0 00-1.253-5.011s4.192-5.416 6.511-7.553c.864-.81 1.468-1.143 1.504-.58.04.759.608 2.433 1.314 4.209a100.004 100.004 0 001.532 3.71 144.33 144.33 0 001.281 2.885z"}),B("path",{fill:"#000",d:"M148.982 24.28a12.032 12.032 0 01-8.059 9.227 42.19 42.19 0 00-1.334-5.47s7.893-10.195 8.015-8.132c.028.783.645 2.518 1.378 4.375zM140.136 36.231l1.022-1.44s.677 4.128 3.166 2.308c2.49-1.82 2.611 13.698 2.611 13.698l-2.671 39.945-19.306-1.156.547-19.3 2.186-9.73 5.404-14.145 3.214-4.675 3.827-5.505z",opacity:"0.1"}),B("path",{fill:"#387CCB",d:"M146.935 51.045l-2.432 36.117-.256 3.827-10.763-.644-.406-.025-8.108-.486.548-19.306 2.185-9.73 5.404-14.144 3.215-4.674 3.827-5.526 1.021-1.435s.677 4.127 3.166 2.307l.053-.037c2.433-1.54 2.546 13.756 2.546 13.756z"}),B("path",{fill:"#FFF",d:"M127.974 57.418s-.969 2.027-2.915 1.698c-1.945-.328-1.941 7.298-1.941 7.298s-1.294 1.216-2.186.162c-.891-1.054-3.243 2.51-3.243 2.51l-14.732.648s6.555 2.996 5.27 12.06c0 0 22.257-1.378 22.987-3.482.73-2.104-3.24-20.894-3.24-20.894z"}),B("path",{fill:"#000",d:"M127.974 57.418s-.969 2.027-2.915 1.698c-1.945-.328-1.941 7.298-1.941 7.298s-1.294 1.216-2.186.162c-.891-1.054-3.243 2.51-3.243 2.51l-14.732.648s6.555 2.996 5.27 12.06c0 0 22.257-1.378 22.987-3.482.73-2.104-3.24-20.894-3.24-20.894z",opacity:"0.03"}),B("path",{fill:"#FFF",d:"M85.1594595 74.4972973L89.0432432 77.8135135 121.013514 84.5310811 117.048649 80.4851351z"}),B("path",{fill:"#FFF",d:"M140.197 37.508c-.53.81-2.051 4.962-3.32 8.587-1.058 3.02-1.942 5.675-1.942 5.675s-2.063 13.435-3.117 15.864c-1.054 2.428-.483 11.898-.483 11.898l-3.928 23.388s-1.78 12.061-4.529 19.265c-2.712 7.09-5.732 10.415-5.825 10.52 1.216-1.646 7.844-34.054 7.844-34.054l2.19-40.873s.32-3.883.644-7.204c.324-3.32 6.892-7.852 6.892-7.852l6.332-9.004c.637.85.211 2.335-.758 3.79z"}),B("path",{fill:"#FFB0B1",d:"M123.685 90.036s-9.324-.405-13.84-5.83c-4.517-5.424 10.439-2.164 10.439-2.164l3.888.892-.487 7.102z"}),B("path",{fill:"#000",d:"M167.23 152.116c-.5 1.767-.58 3.625-.235 5.429-10.172.721-21.053-2.027-21.053-2.027-2.027 1.864-7.366 4.613-7.366 4.613l-2.911-36.081c-1.86-4.865-2.59-30.353-2.59-30.353s.166-1.333.405-3.332c0-.049 0-.101.02-.15.726-5.583 2.165-16.062 2.87-17.477.973-1.946-2.992-7.123-2.992-7.123l1.804-15.385.22-1.857c3.802-1.699 6.717-7.123 6.717-7.123l2.238-3.92c2.432-1.561 2.558 13.735 2.558 13.735l-2.433 36.117 8.06-2.225s16.062 62.546 14.688 67.16z",opacity:"0.1"}),B("path",{fill:"#FFF",d:"M177.669 154.61c-11.088 5.505-31.24.405-31.24.405-2.028 1.865-7.367 4.613-7.367 4.613l-2.915-36.08c-1.856-4.866-2.586-30.353-2.586-30.353s2.343-19.018 3.316-20.96c.284-.567.146-1.41-.19-2.319a29.343 29.343 0 01-1.776-13.577l.778-6.612.215-1.853c3.807-1.702 6.722-7.127 6.722-7.127l2.027-3.551 3.73-6.543 1.767-3.098.3.272 2.29 2.076s.974.81 2.433 2.027c3.174 2.675 8.66 7.386 11.49 10.269 2.488 2.537 3.275 12.41 3.502 19.84.15 4.893.06 8.729.06 8.729-2.509 4.13 4.055 37.297 4.055 37.297 1.528 6.41 3.389 46.544 3.389 46.544z"}),B("path",{fill:"#000",d:"M156.385 40.666s-7.61 14.485-6.726 19.99c.884 5.506 3.398 11.737 2.186 13.193a4.48 4.48 0 01-3.564 1.78c-1.216.08-4.46 2.347-4.46 2.59 0 .243-2.995.243-5.675 1.378-2.68 1.135-6.637 1.78-6.637 1.78s-7.702-.243-8.42.487c-.717.73-1.455 5.095.081 8.578 1.537 3.482 3.244 6.081 4.533 6.555 1.289.475 9.47-2.266 16.106-2.915 6.637-.648 13.841-5.906 13.841-5.906s7.934-2.838 9.324-7.61c1.39-4.771-1.698-30.997-1.698-30.997s-2.335-12.223-8.89-8.903z",opacity:"0.03"}),B("path",{fill:"#000",d:"M155.412 39.45s-7.61 14.49-6.717 19.99c.891 5.502 3.397 11.737 2.18 13.196a4.46 4.46 0 01-3.559 1.78c-1.216.081-4.46 2.348-4.46 2.59 0 .244-2.995.244-5.675 1.375-2.68 1.131-6.636 1.78-6.636 1.78s-7.703-.243-8.417.486c-.713.73-1.46 5.1.081 8.579 1.541 3.478 3.244 6.08 4.533 6.555 1.29.474 9.47-2.266 16.107-2.91 6.636-.645 13.84-5.912 13.84-5.912s7.93-2.837 9.304-7.605c1.375-4.768-1.698-31.001-1.698-31.001s-2.327-12.22-8.883-8.903z",opacity:"0.03"}),B("path",{fill:"#FFF",d:"M156.146 39.936s-7.61 14.49-6.718 19.991c.892 5.501 3.398 11.737 2.186 13.192a4.46 4.46 0 01-3.564 1.784c-1.216.08-4.46 2.347-4.46 2.586 0 .24-2.991.243-5.675 1.379-2.684 1.135-6.637 1.78-6.637 1.78s-7.702-.244-8.42.486c-.717.73-1.455 5.1.081 8.578 1.537 3.479 3.243 6.081 4.533 6.556 1.289.474 9.47-2.267 16.106-2.915 6.637-.649 13.84-5.907 13.84-5.907s7.935-2.838 9.325-7.61c1.39-4.771-1.678-30.997-1.678-30.997s-2.368-12.203-8.92-8.903z"}),B("path",{fill:"#000",d:"M155.98 78.799s-6.081-1.217-3.965.81c2.116 2.027 2.104 3.803 4.694 3.722 2.591-.081-.73-4.532-.73-4.532zM166.257 122.412s-2.749 1.861 2.51 6.15c5.257 4.29-2.51-6.15-2.51-6.15zM161.01 137.708c0 .243-.972 8.919 2.668 11.088 3.64 2.169-2.667-11.088-2.667-11.088z",opacity:"0.1"}),B("path",{fill:"#FFB0B1",d:"M103.208 69.714c-2.935.1-9.276.997-5.988 7.13 2.907 5.429 7.792 1.8 10.54-.952a10.358 10.358 0 00-4.552-6.178zM107.797 75.843l.122-.125-.122.125z"}),B("path",{fill:"#000",d:"M155.173 32.177c-3.114 2.128-5.724 3.924-6.235 4.297-1.395 1.034-4.054 7.103-5.77 10.2-1.365 2.494-5.804 3.134-7.479 3.292l.215-1.852c3.807-1.703 6.722-7.128 6.722-7.128l7.524-13.191 2.59 2.355s.974.81 2.433 2.027z",opacity:"0.1"}),B("path",{fill:"#DCE7FF",d:"M155.173 31.934c-3.114 2.128-5.724 3.924-6.235 4.301-1.395 1.03-4.054 7.099-5.77 10.196-1.365 2.493-5.804 3.134-7.479 3.292l.215-1.853c3.807-1.702 6.722-7.127 6.722-7.127l7.524-13.192 2.59 2.348s.974.802 2.433 2.035z"}),B("path",{fill:"#E58687",d:"M149.181 21.604a12.024 12.024 0 11-24.049.004 12.024 12.024 0 0124.05-.004z"}),B("path",{fill:"#000",d:"M170.165 62.043a10.686 10.686 0 01-3.88-4.167c-.677-1.338-1.127-2.883-2.282-3.831-1.042-.852-2.433-1.059-3.73-1.44-4.265-1.26-7.84-5.152-7.974-9.596-.065-2.091.587-4.18.292-6.25a6.924 6.924 0 00-1.355-3.224c-.357-.45-.749-.871-1.171-1.26-.568-.536-1.164-1.055-1.683-1.622a6.296 6.296 0 01-.85-1.156c-.194-.34-.35-.7-.467-1.074-.81-2.481-.073-5.424-.965-7.934l-.049-.138c-.336-.892-1.021-1.783-1.974-1.852-.953-.07-1.768.721-2.676 1.074-1.901.738-3.952-.519-5.537-1.8-1.586-1.281-3.373-2.745-5.388-2.46-1.334.19-2.388 1.098-3.617 1.568-.277.107-.563.19-.855.247a12.02 12.02 0 0123.177 4.48c.001.844-.087 1.685-.263 2.51a100.004 100.004 0 001.532 3.71l2.29 2.075s.974.81 2.433 2.027c3.174 2.675 8.66 7.386 11.49 10.269 2.488 2.546 3.267 12.413 3.502 19.844z",opacity:"0.1"}),B("path",{fill:"#591D4B",d:"M126.718 9.474c.58-1.18.867-2.501 1.56-3.62 1.018-1.622 2.794-2.66 4.618-3.288 4.763-1.642 14.83-4.025 17.838 0 .592.811 1.082 1.711 1.901 2.27.624.426 1.379.609 2.064.929 1.917.9 3.142 2.862 3.794 4.865.653 2.002.848 4.151 1.326 6.215.612 2.647 1.686 5.156 2.757 7.65 1.26 2.943 2.598 5.996 5.03 8.075 3.321 2.838 4.055 6.856 7.136 9.97 3.649 3.696 3.531 9.798 1.65 14.642-.247.637-.527 1.302-.43 1.979.097.677.6 1.293 1.074 1.832l1.995 2.25c-4.719 1.14-10.058-1.325-12.255-5.651-.677-1.338-1.127-2.878-2.287-3.831-1.038-.852-2.432-1.054-3.725-1.435-4.265-1.265-7.841-5.161-7.975-9.604-.065-2.088.588-4.176.292-6.244a6.892 6.892 0 00-1.358-3.243c-1.115-1.455-2.797-2.432-3.705-4.054-1.537-2.712-.37-6.235-1.476-9.146-.34-.892-1.022-1.784-1.974-1.853-.953-.068-1.768.722-2.68 1.075-1.897.738-3.949-.515-5.534-1.8-1.585-1.285-3.373-2.745-5.392-2.457-1.334.186-2.384 1.095-3.612 1.569-.908.349-2.749.66-3.543-.105-1.679-1.545 2.21-5.546 2.91-6.99z"}),B("path",{fill:"#000",d:"M167.903 56.254c-.681-1.338-1.127-2.878-2.287-3.827-1.038-.851-2.432-1.058-3.73-1.44-4.26-1.26-7.836-5.156-7.974-9.6-.065-2.087.588-4.179.296-6.246a6.932 6.932 0 00-1.358-3.223c-1.119-1.456-2.801-2.433-3.705-4.054-1.537-2.709-.37-6.232-1.48-9.146-.337-.888-1.022-1.78-1.97-1.853-.95-.073-1.772.726-2.68 1.078-1.897.738-3.953-.519-5.534-1.8-1.581-1.28-3.377-2.744-5.392-2.46-1.334.19-2.388 1.098-3.612 1.568-.908.349-2.753.665-3.547-.101-1.67-1.622 2.217-5.615 2.915-7.05.58-1.184.867-2.501 1.564-3.62.037-.061.077-.122.118-.183a6.438 6.438 0 00-1.334 1.517c-.693 1.118-.98 2.432-1.56 3.62-.702 1.435-4.59 5.44-2.915 7.05.81.77 2.635.454 3.543.105 1.216-.474 2.278-1.382 3.612-1.569 2.027-.288 3.81 1.176 5.392 2.457 1.58 1.281 3.649 2.538 5.538 1.8.908-.353 1.702-1.147 2.675-1.074.973.073 1.622.96 1.975 1.852 1.106 2.911-.061 6.434 1.475 9.146.908 1.594 2.59 2.59 3.706 4.054a6.892 6.892 0 011.358 3.244c.296 2.067-.357 4.155-.292 6.243.134 4.46 3.71 8.34 7.974 9.604 1.285.381 2.688.584 3.726 1.435 1.164.953 1.622 2.493 2.286 3.831 2.198 4.326 7.537 6.79 12.256 5.652l-.94-1.063c-4.091.061-8.23-2.266-10.1-5.947z",opacity:"0.1"}),B("path",{fill:"#000",d:"M139.954 37.751c-.531.811-2.051 4.963-3.32 8.587-1.188-.462-2.266-3.41-2.266-3.41l6.332-9.008c.649.892.223 2.372-.746 3.831z",opacity:"0.1"}),B("path",{fill:"#DCE7FF",d:"M140.197 37.508c-.53.81-2.051 4.962-3.32 8.587-1.188-.459-2.266-3.41-2.266-3.41l6.332-9.004c.649.888.223 2.372-.746 3.827z"}),B("path",{fill:"#BE8B87",d:"M103.378 78.924l-3.51-11.071a1.034 1.034 0 01.673-1.302c.543-.17 1.122.13 1.297.673l3.51 11.06-.348 2.315-1.622-1.675z"}),B("path",{fill:"#FFF",d:"M100.2 66.88a1.038 1.038 0 011.301.673l3.511 11.06-.263 1.734.255.268.349-2.315-3.531-11.06a1.038 1.038 0 00-1.298-.672c-.22.07-.41.214-.539.405a1.41 1.41 0 01.215-.093z",opacity:"0.1"}),B("path",{fill:"#EFC8C4",d:"M103.378378 78.9243243L105.348649 78.3 105.060811 80.1972973 105 80.6148649 104.424324 80.0148649z"}),B("path",{fill:"#727A9C",d:"M104.424 80.015a.405.405 0 01.126-.106.178.178 0 01.19 0c.028.034.051.07.07.11.054.09.146.152.25.166l-.06.406-.576-.576z"}),B("path",{fill:"#FFB0B1",d:"M99.847 71.785s7.042-.04 5.384 2.956c-1.658 2.995-4.249 3.356-4.249 3.356l-1.135-6.312z"}))))))}var I=a.a.createElement,q=function(){var e=Object(L.useRouter)(),t=function(){return e.push("/declarations/liberal/etape0")};return I("div",{className:"w-full max-w-md px-4 py-2 text-gray-700 transition duration-500 ease-in transform bg-gray-200 border rounded shadow hover:scale-105 hover:border-gray-400",onClick:t,onKeyPress:function(e){return n=t,"Enter"===(l=e).key&&n(l);var l,n},role:"button",tabIndex:"0"},I(o.p,null,"Vous exercez"," ",I(E,{type:"highlight",color:"lightgreen",show:!1,animate:!0},"en lib\xe9ral ?")),I(o.m,null,"Vous n\u2019avez pas besoin de compte ",I("br",null),"pour remonter un signalement de violence."),I(P,{className:"mx-auto mt-5"}),I(o.m,{className:"mt-8"},"Votre d\xe9claration pourra \xeatre effectu\xe9e de mani\xe8re anonyme."),I("div",{className:"my-6 text-center"},I(o.k,{type:"submit"},"D\xe9clarer")))};function W(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}var $=0;function G(){return++$}function J(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){e.current=!1}),[]),e.current}var U,X="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function K(e,t){if(e in t){var l=t[e];return"function"===typeof l?l():l}var n=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}function Z(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,l)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){e.splice(0).forEach((function(e){return e()}))}};return t}function Q(e){for(var t,l=arguments.length,n=new Array(l>1?l-1:0),i=1;i<l;i++)n[i-1]=arguments[i];e&&n.length>0&&(t=e.classList).add.apply(t,n)}function Y(e){for(var t,l=arguments.length,n=new Array(l>1?l-1:0),i=1;i<l;i++)n[i-1]=arguments[i];e&&n.length>0&&(t=e.classList).remove.apply(t,n)}function ee(e,t,l,n,i){var a=Z(),c=void 0!==i?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(i):function(){};return Q.apply(void 0,[e].concat(t,l)),a.nextFrame((function(){Y.apply(void 0,[e].concat(l)),Q.apply(void 0,[e].concat(n)),a.add(function(e,t){var l=Z();if(!e)return l.dispose;var n=getComputedStyle(e),i=[n.transitionDuration,n.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),a=i[0],c=i[1];return 0!==a?l.setTimeout((function(){t(U.Finished)}),a+c):t(U.Finished),l.add((function(){return t(U.Cancelled)})),l.dispose}(e,(function(l){return Y.apply(void 0,[e].concat(n,t)),c(l)})))})),a.add((function(){return Y.apply(void 0,[e].concat(t,l,n))})),a.add((function(){return c(U.Cancelled)})),a.dispose}function te(e){return void 0===e&&(e=""),Object(i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(U||(U={}));var le,ne=Object(i.createContext)(null);!function(e){e.Visible="visible",e.Hidden="hidden"}(le||(le={}));var ie=Object(i.createContext)(null);function ae(e){var t=Object(i.useRef)([]),l=function(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){return function(){e.current=!1}}),[]),e}(),n=Object(i.useCallback)((function(n){var i=t.current.indexOf(n);-1!==i&&(t.current.splice(i,1),t.current.length<=0&&l.current&&(null===e||void 0===e||e()))}),[e,l,t]),a=Object(i.useCallback)((function(e){return t.current.push(e),function(){return n(e)}}),[t,n]);return Object(i.useMemo)((function(){return{children:t,register:a,unregister:n}}),[a,n,t])}function ce(e){var t=e.children,l=e.enter,n=e.enterFrom,a=e.enterTo,c=e.leave,r=e.leaveFrom,o=e.leaveTo,s=W(e,["children","enter","enterFrom","enterTo","leave","leaveFrom","leaveTo"]),u=Object(i.useRef)(null),f=Object(i.useState)(le.Visible),h=f[0],d=f[1],p=function(){var e=Object(i.useContext)(ne);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),m=p.show,z=p.appear,v=function(){var e=Object(i.useContext)(ie);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition />.");return e}(),F=v.register,g=v.unregister,M=J(),y=Object(i.useState)(G)[0],b=Object(i.useRef)(!1),w=ae(Object(i.useCallback)((function(){b.current||(d(le.Hidden),g(y))}),[y,g,b]));X((function(){return F(y)}),[F,y]);var H=te(l),x=te(n),_=te(a),R=te(c),O=te(r),E=te(o);if(Object(i.useEffect)((function(){if(h===le.Visible&&null===u.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[u,h]),X((function(){var e=u.current;if(e&&(!M||z))return b.current=!0,m?ee(e,H,x,_,(function(){b.current=!1})):ee(e,R,O,E,(function(e){b.current=!1,e===U.Finished&&w.children.current.length<=0&&(d(le.Hidden),g(y))}))}),[y,b,g,w,u,M,z,m,H,x,_,R,O,E]),h===le.Hidden)return null;if("function"===typeof t)return Object(i.createElement)(ie.Provider,{value:w},t(u));var C=s.as,S=void 0===C?"div":C,j=W(s,["as"]);return Object(i.createElement)(ie.Provider,{value:w},Object(i.createElement)(S,Object.assign({},j,{ref:u}),t))}function re(e){var t,l=e.show,n=e.appear,a=void 0!==n&&n,c=W(e,["show","appear"]);if(![!0,!1].includes(l))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var r=Object(i.useState)(l?le.Visible:le.Hidden),o=r[0],s=r[1],u=ae(Object(i.useCallback)((function(){s(le.Hidden)}),[])),f=J(),h=Object(i.useMemo)((function(){return{show:l,appear:a||!f}}),[l,a,f]);return Object(i.useEffect)((function(){l?s(le.Visible):u.children.current.length<=0&&s(le.Hidden)}),[l,u]),Object(i.createElement)(ie.Provider,{value:u},Object(i.createElement)(ne.Provider,{value:h},K(o,((t={})[le.Visible]=function(){return Object(i.createElement)(ce,Object.assign({},c))},t[le.Hidden]=null,t))))}re.Child=ce;var oe=l("Z8x/"),se=a.a.createElement,ue=function(e){var t=e.openModal,l=e.setOpenModal,n=e.title,a=e.content,c=Object(i.useCallback)((function(){return function(e){27!==e.keyCode&&"Esc"!==e.keyCode||l(!1)}}),[l]);Object(i.useEffect)((function(){return document.addEventListener("keydown",c,!1),function(){document.removeEventListener("keydown",c,!1)}}),[t,l,c]);var r=function(){l(!1)};return se(re,{show:t,enter:"transition-opacity duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"},se("div",{className:"fixed inset-0 z-10 overflow-y-auto",onClick:r,onKeyDown:c,role:"button",tabIndex:"0"},se("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},se("div",{className:"fixed inset-0 transition-opacity"},se("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),se("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen"}),"\u200b",se("div",{className:"inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",onClick:function(e){e.stopPropagation()},onKeyPress:function(e){return l=r,"Esc"===(t=e).key&&l(t);var t,l}},se("div",{className:"px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4"},se("div",{className:"sm:flex sm:items-start"},se("div",{className:"flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-200 rounded-full sm:mx-0 sm:h-10 sm:w-10"},se(oe.a,null)),se("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},se("h3",{className:"text-lg font-medium leading-6 text-gray-900",id:"modal-headline"},n),se("div",{className:"mt-2"},se("p",{className:"text-sm leading-5 text-gray-700"},a))))),se("div",{className:"px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"},se("span",{className:"flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"},se("button",{type:"button",className:"inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5",onClick:function(){return l(!1)}},"Annuler")))))))},fe=a.a.createElement;var he=function(){return fe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 120"},fe("path",{fill:"#FFF",d:"M0 64l80-5.3C160 53 320 43 480 53.3 640 64 800 96 960 101.3c160 5.7 320-16.3 400-26.6l80-10.7v256H0z"}))},de=l("bmSn"),pe=a.a.createElement;t.default=function(){var e=Object(n.c)(de.a).action,t=Object(i.useState)(!1),l=t[0],c=t[1];return Object(i.useEffect)((function(){e()}),[e]),pe(a.a.Fragment,null,pe("div",{style:{background:"#387CCB",color:"#FFF",overflow:"hidden",textAlign:"center"},className:"relative"},pe(o.e,null,"Observatoire national des violences en sant\xe9"),pe(ue,{openModal:l,setOpenModal:c,title:"Nom de cat\xe9gorie",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),pe(he,{className:"block"})),pe("div",{className:"flex items-center justify-center w-full"},pe("div",{className:"flex flex-wrap items-stretch justify-center w-full min-h-full py-6 space-x-0 space-y-8 lg:space-y-0 lg:space-x-8"},pe(V,null),pe(q,null))),pe(T,null))}},rePB:function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l.d(t,"a",(function(){return n}))},vlRD:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l("RXBc")}])},wx14:function(e,t,l){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return n}))},zLVn:function(e,t,l){"use strict";function n(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}l.d(t,"a",(function(){return n}))}}</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/apropos](https://onvs.fabrique.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/mentions](https://onvs.fabrique.social.gouv.fr/mentions)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 5
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="mt-5" action="#">`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="mt-5" action="#">`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="mt-5" action="#">`
  
  
  
  
Instances: 3
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "email" "password" "rememberMe" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/tarteaucitron/tarteaucitron.js](https://onvs.fabrique.social.gouv.fr/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 4
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/apropos](https://onvs.fabrique.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css](https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/mentions](https://onvs.fabrique.social.gouv.fr/mentions)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 6
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
##### Low (Medium)
  
  
  
  
#### Description
<p>The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css](https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/favicon.ico](https://onvs.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.</p>
  
### Reference
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css](https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/favicon.ico](https://onvs.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/favicon.ico](https://onvs.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css](https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Evidence: `/_next/static/dnEXy_Ppogrv4QyzOfdW3/_buildManifest`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/mentions-a8efbd04ee11fd16a1ed.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/mentions-a8efbd04ee11fd16a1ed.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/IMG/pdf/protocole_accord_amelioration_securite_es_100610`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `d37-JIil0teLnx/baPRZ1E/1kQ+MehQ`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/mentions](https://onvs.fabrique.social.gouv.fr/mentions)
  
  
  * Method: `GET`
  
  
  * Evidence: `806f-uPIL6tSIbIP30xYKaAKOcIf+3jg`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `d37-JIil0teLnx/baPRZ1E/1kQ+MehQ`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/apropos](https://onvs.fabrique.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Evidence: `2bb6-Y2vwP75fUXyl2serpgcs1H4MS8A`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/apropos-fc6699aa22b254dbd68c.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/apropos-fc6699aa22b254dbd68c.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/IMG/pdf/protocole_accord_amelioration_securite_es_100610`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/_next/static/dnEXy_Ppogrv4QyzOfdW3/_buildManifest`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/_next/static/dnEXy_Ppogrv4QyzOfdW3/_buildManifest`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�����쵫bs�g\x0011|�>� ��\x0010�3�um������\x001a�'޲</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Sensitive Information in URL
##### Informational (Medium)
  
  
  
  
#### Description
<p>The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `password`
  
  
  * Evidence: `password`
  
  
  
  
Instances: 2
  
### Solution
<p>Do not pass sensitive information in URIs.</p>
  
### Other information
<p>The URL contains email address(es).</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.3f856ec1a50516166edb.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/08ba52179d5afc456c1aea2d6087f4c5fb252e45.1680486025384de0203c.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-6bd7c815dbed5b4e81d8.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-6bd7c815dbed5b4e81d8.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/jkW":function(e,t,r){"use strict";t.__esModule=!0,t.isDynamic", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1538 906" class="w-24"><path fill="#fff" d="M0 0H1538V520H0z"></path><path d="M1228.2 905.42c-.849-.346-.901-1.272-.188-3.318.903-2.59 1.32-2.793 4.791-2.327 3.149.422 4.075.12 5.39-1.758 2.53-3.612.578-6.217-4.013-5.356-3.52.66-3.576.621-2.897-2.081 2.154-8.583 2.358-8.11-4.06-9.383-7.642-1.516-14.952-5.796-20.568-12.041-8.433-9.379-11.356-18.866-10.516-34.117.428-7.77 1.09-10.798 3.54-16.201 7.496-16.534 24.621-24.966 47.637-23.455 4.984.327 11.311 1.175 14.061 1.885l5 1.291.288 9.25.287 9.25h-3.037c-1.792 0-3.038-.522-3.038-1.272 0-2.598-6.123-8.61-10.454-10.264-5.59-2.135-16.434-1.648-21.866.981-12.416 6.01-18.077 21.61-14.302 39.414 1.754 8.272 4.652 13.821 10.192 19.515 5.251 5.398 10.548 7.577 18.485 7.604 8.394.028 14.271-3.345 17.967-10.312 2.511-4.734 3.407-5.315 5.83-3.78 1.127.715 1.138 2.36.063 9.955l-1.288 9.098-4.563 1.577c-2.51.867-8.276 1.848-12.813 2.179-7.824.57-8.25.723-8.25 2.953 0 1.78.553 2.352 2.277 2.352 3.34 0 6.473 2.586 7.213 5.954.86 3.913-1.925 9.702-5.575 11.59-2.64 1.365-12.927 1.905-15.592.818zm-594.96-4.209c-8.657-2.552-16.123-6.402-25.103-12.945l-7.758-5.652-12-.615c-13.306-.683-17.955-2.168-26.562-8.486-18.961-13.918-19.65-49.337-1.294-66.576 13.818-12.978 38.127-15.66 55.625-6.136 23.622 12.857 26.13 50.785 4.672 70.652-3.33 3.083-6.592 5.607-7.248 5.609-2.044.007 21.457 12.862 28.328 15.496 7.592 2.91 16.462 3.3 22.96 1.007 4.727-1.668 5.535-1.468 6.328 1.565.463 1.772-.345 2.518-5.13 4.733-7.54 3.493-23.342 4.142-32.817 1.348zm-29.323-30.905c16.745-8.747 19.933-36.76 6.22-54.65-12.71-16.579-34.985-14.069-43.357 4.886-7.564 17.124 1.066 43.6 16.498 50.61 6.246 2.836 14.217 2.51 20.64-.845zM78.377 880.67c-4.593-2.004-9.632-8.24-17.595-21.774-12.234-20.792-14.527-23.838-17.942-23.838h-2.963l.02 11.25c.037 20.533 2.102 27.56 8.575 29.184 1.732.435 2.405 1.299 2.405 3.085v2.481h-41v-2.355c0-1.784.764-2.575 3.149-3.259 1.731-.496 4.094-2.17 5.25-3.718 2.05-2.748 2.101-3.748 2.101-41.669s-.05-38.921-2.101-41.668c-1.156-1.548-3.519-3.221-5.25-3.718-2.301-.66-3.149-1.493-3.149-3.097 0-2.186.113-2.198 25.4-2.85 26.912-.692 32.843-.18 40.428 3.493 6.627 3.208 12.151 12.928 12.166 21.409.018 9.71-7.203 20.676-16.73 25.409l-4.988 2.478 11.024 16.522c12.969 19.437 17.042 24.63 20.873 26.61 3.577 1.85 3.92 5.885.577 6.781-4.022 1.078-17.172.586-20.25-.757zm-25.023-55.728c13.406-3.721 17.93-22.35 7.785-32.053-4.77-4.56-9.834-6.216-16.297-5.327l-4.965.683v37.812l4.75-.006c2.612-.003 6.54-.502 8.727-1.11zm230.4 55.735c-5.48-1.958-10.648-5.446-13.384-9.032-4.972-6.519-5.494-9.946-5.555-36.462-.063-27.716-.585-30.761-5.671-33.124-2.044-.95-3.237-2.234-3.25-3.5-.02-1.923.639-2 16.979-2 16.963 0 17 .005 16.999 2.25 0 1.511-.6 2.25-1.826 2.25-1.004 0-2.917 1.16-4.25 2.58l-2.424 2.58v27.17c0 25.57.122 27.403 2.077 31.13 3.05 5.813 9.132 8.803 16.954 8.334 8.416-.504 12.97-3.49 16.33-10.706 2.578-5.538 2.602-5.812 2.62-30.132.016-21.778-.18-24.847-1.744-27.234-.97-1.48-2.882-2.971-4.25-3.315-1.553-.39-2.488-1.334-2.488-2.516 0-1.762.925-1.891 13.5-1.891s13.5.13 13.5 1.891c0 1.178-.932 2.126-2.47 2.512-4.606 1.156-4.973 3.3-5.518 32.172l-.512 27.075-3.01 5.882c-3.553 6.943-9.308 11.743-16.715 13.942-6.248 1.856-20.876 1.938-25.892.145zm390 0c-5.542-1.98-10.657-5.458-13.488-9.169-4.714-6.18-5.39-10.75-5.45-36.859-.064-27.146-.602-30.235-5.673-32.59-2.043-.95-3.236-2.235-3.25-3.5-.02-1.923.64-2 16.98-2 16.802 0 17 .025 16.999 2.18 0 1.465-.706 2.285-2.15 2.5-1.182.175-3.095 1.589-4.25 3.14-1.968 2.644-2.121 4.292-2.43 26.206-.38 26.924.371 32.602 4.933 37.267 8.252 8.441 25.405 6.083 30.266-4.16 3.061-6.452 3.847-14.534 3.47-35.698-.398-22.41-1.067-25.202-6.352-26.53-1.553-.389-2.488-1.334-2.488-2.515 0-1.762.925-1.892 13.5-1.892 12.543 0 13.5.134 13.5 1.88 0 1.133-1.16 2.358-2.928 3.09-1.61.668-3.272 1.96-3.693 2.872-.421.912-1.016 13.843-1.322 28.735l-.557 27.076-3.01 5.88c-3.553 6.942-9.309 11.743-16.715 13.942-6.248 1.855-20.876 1.937-25.892.145zm316.53-.042c-3.997-1.74-8.751-7.666-16.108-20.077-9.5-16.028-10.579-17.474-13.055-17.488-2.214-.012-2.25.187-2.25 12.52 0 14.952 1.248 19.168 5.956 20.11 2.367.473 3.044 1.137 3.044 2.983v2.375h-34v-2.375c0-1.846.677-2.51 3.044-2.984 5.697-1.139 6.1-3.847 5.759-38.656l-.303-30.827-2.424-2.579c-1.334-1.418-3.246-2.579-4.25-2.579-1.132 0-1.826-.727-1.826-1.914 0-1.65 1.015-2.01 7.335-2.602 4.034-.378 15.172-.516 24.75-.306 15.572.342 17.856.615 21.581 2.58 6.617 3.49 10.334 10.297 10.334 18.924 0 8.195-4.698 15.393-13.227 20.264-2.723 1.555-4.482 3.117-3.909 3.47.573.355 4.992 6.594 9.82 13.865 9.478 14.274 14.746 20.72 16.932 20.72 1.928 0 1.757 4.643-.198 5.393-2.838 1.089-13.844.561-17.006-.816zm-18.482-47.042c3.975-2.055 7.878-6.999 8.611-10.906.941-5.016-1.267-11.635-5.083-15.233-3.533-3.332-6.946-4.288-12.854-3.598l-3.604.42v30.782h5.05c2.777 0 6.323-.658 7.88-1.463zm445.12 46.868c-2.996-.805-5.626-1.643-5.846-1.863-.219-.22-.95-4.706-1.625-9.97l-1.226-9.571h2.822c1.552 0 2.821.373 2.821.829 0 2.601 6.563 10.265 10.368 12.107 10.285 4.978 22.637.291 22.63-8.587-.01-5.827-2.836-9.31-12.47-15.35-13.52-8.474-18.74-12.95-21.437-18.374-2.688-5.41-3.168-13.826-1.14-19.974 1.34-4.058 7.622-10.117 12.91-12.452 5.325-2.35 21.989-2.275 28.89.131l5.25 1.83v17.84h-2.89c-2.245 0-3.032-.556-3.515-2.482-1.048-4.176-6.41-9.391-10.896-10.6-12.003-3.232-21.617 9.082-14.082 18.037 1.439 1.71 7.963 6.733 14.498 11.162 12.658 8.579 17.334 13.25 18.9 18.882 3.449 12.39-2.278 23.336-14.627 27.956-6.627 2.48-20.961 2.698-29.333.448zm-1310.1-2.1c0-1.772.56-2.304 2.427-2.304 1.432 0 3.278-1.081 4.5-2.635 1.997-2.539 2.073-3.782 2.073-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.652-1.191-.022-1.75-.83-1.75-2.532v-2.5h60v21.132l-2.625-.317c-1.978-.238-2.903-1.157-3.75-3.722-1.972-5.972-5.264-7.493-17.166-7.934l-10.458-.387v28.484l8.043-.466c8.766-.507 13.181-2.635 13.776-6.641.236-1.586 1.023-2.15 3-2.149l2.68.001V850.056h-2.75c-2.218 0-2.75-.453-2.75-2.345 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.573 17.156 11.26 0 17.13-2.852 20.069-9.75 1.485-3.486 4.948-4.482 6.005-1.727.697 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.463v-2.304zm77 .321c0-1.83.677-2.51 2.946-2.964 5.276-1.055 5.526-2.536 5.865-34.661.352-33.448-.076-36.461-5.54-39-2.278-1.059-3.234-2.19-3.25-3.845l-.021-2.345 22.75.415c24.598.448 26.605.837 33.272 6.447 7.327 6.165 9.226 18.427 4.266 27.54-4.326 7.95-11.806 12.17-23.73 13.393l-6.246.64-3.104-7.745 3.696-.54c4.694-.687 9.792-3.66 12.493-7.286 1.535-2.062 2.085-4.224 2.035-8-.13-9.737-5.603-15.692-15.15-16.484l-5.404-.448.312 33.38c.34 36.402.5 37.425 6.061 38.564 2.07.424 2.75 1.151 2.75 2.939v2.375h-34v-2.375zm166-.365c0-1.55.594-2.26 1.89-2.26 1.038 0 2.95-.86 4.25-1.91l2.36-1.91.303-30.996c.339-34.697-.045-37.317-5.786-39.483-1.8-.68-3.017-1.857-3.017-2.92 0-1.618 1.386-1.803 15.25-2.03 29.183-.479 35.29-.151 40.037 2.146 6.152 2.979 9.027 7.29 9.534 14.301.228 3.152.137 6.836-.203 8.19-.985 3.924-5.646 8.718-10.8 11.105l-4.763 2.207 4.034 1.209c9.641 2.889 15.788 12.97 14.514 23.805-1.074 9.145-4.999 14.288-14.104 18.483-4.781 2.203-6.058 2.304-29.25 2.313l-24.25.01v-2.26zm44.102-7.53c5.097-3.405 7.12-8.041 6.552-15.016-.854-10.492-8.182-16.714-19.686-16.714h-6.112l.322 15.091c.309 14.465.42 15.17 2.683 17 3.454 2.793 11.798 2.608 16.241-.36zm-4.13-41.553c6.14-2.353 9.37-7.16 8.732-12.99-.858-7.834-7.171-12.188-17.672-12.188h-6.032v27l5.25-.054c2.887-.03 7.263-.826 9.722-1.769zm41.028 49.14c0-1.617.689-2.267 2.651-2.5 1.49-.179 3.57-1.553 4.75-3.14 2.025-2.724 2.1-3.906 2.1-33.5 0-24.587-.281-31.174-1.414-33.178-1.766-3.124-4.066-4.927-6.337-4.968-1.139-.02-1.75-.818-1.75-2.282 0-2.25 0-2.25 18-2.25s18 0 18 2.25c0 1.562-.595 2.25-1.944 2.25-1.07 0-3.207 1.086-4.75 2.413l-2.806 2.412-.29 31.538-.29 31.538 2.559 1.677c2.026 1.327 4.191 1.582 10.39 1.223 9.517-.55 13.973-2.906 16.624-8.784 1.764-3.911 3.63-4.861 6.264-3.189.99.628.828 2.476-.756 8.67-1.108 4.33-2.71 8.934-3.56 10.231l-1.545 2.36-55.895-.59v-2.183zm70 .308c0-1.847.678-2.51 3.045-2.984 5.521-1.104 5.956-3.832 5.952-37.36-.003-27.842-.132-29.991-1.97-33.004-1.08-1.773-3.103-3.51-4.496-3.859-1.722-.432-2.53-1.32-2.53-2.776 0-2.105.291-2.142 17-2.142s17 .037 17 2.142c0 1.447-.807 2.344-2.488 2.766-1.368.343-3.28 1.834-4.25 3.313-1.586 2.42-1.763 5.744-1.763 33.234 0 33.953.408 36.676 5.644 37.724 2.18.436 2.856 1.134 2.856 2.946v2.375h-34v-2.375zm239-.181c0-1.645.762-2.347 3.045-2.803 5.523-1.105 5.955-3.824 5.955-37.461 0-29.466-.032-29.932-2.284-33.282-1.256-1.869-3.281-3.542-4.5-3.718-1.592-.23-2.216-1.003-2.216-2.75v-2.43h59v10.5c0 10.403-.022 10.5-2.388 10.5-1.933 0-2.513-.66-3.038-3.459-1.115-5.944-5.2-7.94-17.155-8.382l-10.117-.375-.65 4.748c-.358 2.61-.651 9.023-.651 14.249v9.501l8.507-.53c9.366-.585 13.074-2.233 14.085-6.264.447-1.783 1.302-2.488 3.016-2.488h2.391v26h-2.5c-1.702 0-2.51-.558-2.531-1.75-.09-4.95-4.849-7.25-14.998-7.25h-8.162l.346 14.082c.419 17.058.317 16.918 12.325 16.918 10.598 0 16.11-2.539 18.995-8.75 1.453-3.128 2.56-4.25 4.191-4.25 1.22 0 2.521.492 2.893 1.094.911 1.475-3.525 17.73-5.331 19.537-1.193 1.192-6.27 1.4-29.832 1.222l-28.395-.214v-2.194zm110 .236c0-1.64.932-2.739 3.179-3.75 1.748-.787 4.11-2.701 5.25-4.254 2.009-2.738 2.071-3.967 2.071-40.5 0-42.381-.078-42.892-6.982-45.17-2.736-.903-3.518-1.7-3.518-3.583v-2.423h70v25h-3c-2.443 0-3-.417-3.003-2.25-.006-3.68-3.772-8.755-7.768-10.47-2.365-1.014-7.842-1.77-14.978-2.066l-11.25-.466v34.252l8.25-.056c10.996-.075 14.76-1.44 17.082-6.194 1.494-3.058 2.37-3.75 4.75-3.75h2.917v30.126l-3.21-.313c-2.206-.215-3.38-.94-3.75-2.313-1.587-5.882-7.706-8.5-19.87-8.5H879.6l.407 17.75c.465 20.257 1.317 23.217 7.306 25.383 2.628.95 3.51 1.847 3.51 3.568v2.299h-41v-2.32zm160-.18c0-1.828.535-2.5 1.986-2.5 3.064 0 6.564-6.232 14.17-25.234 10.185-25.445 19.844-51.318 19.844-53.156 0-1.257 1.042-1.606 4.75-1.59l4.75.02 13.488 34.571c14.647 37.541 17.347 43.377 20.762 44.875 1.38.606 2.25 1.863 2.25 3.25 0 2.262-.01 2.263-17 2.263h-17v-2.375c0-1.834.677-2.51 2.974-2.97 4.297-.859 4.556-3.768 1.216-13.654l-2.872-8.5h-23.632l-2.375 7c-2.993 8.82-2.82 14.857.44 15.32 1.629.23 2.25.99 2.25 2.75v2.43h-26v-2.5zm46-35.016c0-1.522-7.346-21.484-7.905-21.484-.365 0-1.384 1.912-2.266 4.25-.881 2.337-2.758 7.287-4.17 11l-2.569 6.75h8.455c4.65 0 8.455-.233 8.455-.516zm43 35.14c0-1.787.68-2.514 2.75-2.938 5.41-1.108 5.653-2.517 6.073-35.219.434-33.736.01-36.573-5.805-38.767-1.8-.68-3.018-1.857-3.018-2.92 0-1.602 1.128-1.78 11.25-1.778l11.25.002 6.5 8.226c3.575 4.525 12.8 15.67 20.5 24.768s15.032 17.883 16.293 19.521l2.294 2.98-.324-22.59c-.354-24.617-.913-27.157-6.275-28.503-1.554-.39-2.488-1.335-2.488-2.516 0-1.762.925-1.891 13.5-1.891 12.671 0 13.5.118 13.5 1.93 0 1.21-.803 2.05-2.15 2.25-1.182.176-3.094 1.59-4.25 3.141-2.03 2.728-2.11 4.044-2.406 39.75l-.307 36.928h-4.36c-3.943 0-4.674-.405-7.665-4.25-2.644-3.398-45.008-55.87-46.626-57.75-.237-.275-.234 10.75.01 24.5.487 27.882 1.096 31.218 5.873 32.173 2.208.442 2.885 1.134 2.885 2.952v2.375h-27v-2.375zm175-.124c0-1.486.573-2.5 1.412-2.5 1.976 0 5.682-4.693 8.33-10.545 3.68-8.14 20.794-52.314 23.73-61.256l2.726-8.301 8.94.602 13.268 34c7.297 18.7 14.068 35.575 15.048 37.5 2.235 4.394 5.49 8 7.22 8 .748 0 1.326 1.09 1.326 2.5v2.5h-34v-2.5c0-1.741.547-2.5 1.8-2.5 4.84 0 5.289-4.226 1.618-15.247l-2.582-7.754h-23.472l-2.128 6.75c-4.02 12.75-3.829 16.25.886 16.25 1.336 0 1.877.721 1.877 2.5v2.5h-26v-2.5zm42.43-44.75c-1.89-5.638-3.705-10.925-4.032-11.75-.356-.896-2.355 2.93-4.966 9.5-2.404 6.05-4.384 11.338-4.401 11.75-.017.412 3.764.75 8.403.75h8.434l-3.438-10.25zm45.57 44.75c0-1.956.51-2.5 2.345-2.5 1.29 0 3.203-.947 4.25-2.104 1.774-1.958 1.926-4.257 2.2-33.25.16-17.13.043-32.147-.263-33.369-.713-2.85-4.383-6.277-6.72-6.277-1.212 0-1.812-.745-1.812-2.25 0-2.246.037-2.25 17-2.25 16.35 0 17 .076 17 2.005 0 1.251-1.09 2.488-2.894 3.287-1.592.705-3.359 2.502-3.926 3.994-1.457 3.833-2.286 35.037-1.379 51.894.634 11.758 1.084 14.535 2.636 16.25 1.03 1.138 2.703 2.07 3.718 2.07 1.3 0 1.845.736 1.845 2.5v2.5h-34v-2.5zm112-.18c0-1.79.555-2.32 2.428-2.32 1.431 0 3.278-1.081 4.5-2.635 1.997-2.539 2.072-3.782 2.072-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.653-1.191-.021-1.75-.83-1.75-2.531v-2.5h60v21.132l-2.625-.317c-1.977-.238-2.903-1.157-3.75-3.723-1.971-5.971-5.263-7.492-17.166-7.933l-10.458-.387v28.226l6.25-.057c8.676-.078 12.907-1.705 14.75-5.672 1.099-2.364 2.17-3.233 4-3.248l2.5-.02v25.998h-2.75c-2.218 0-2.75-.454-2.75-2.346 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.572 17.156 11.26 0 17.13-2.851 20.07-9.75 1.485-3.486 4.947-4.482 6.004-1.727.698 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.43v-2.32zm-1339.9-91.243l-2.444-1.878 5.944-9.084c3.27-4.996 6.583-9.09 7.362-9.1 3.382-.037 14.148 2.277 13.878 2.983-.536 1.406-20.274 18.99-21.296 18.974-.55-.01-2.1-.862-3.444-1.895zM6.862 718.057h1523v9h-1523v-9zm579.64-20.465c-8-2.852-12.498-10.308-11.04-18.3.981-5.386 4.03-9.154 9.428-11.655l4.723-2.188-2.874-1.65c-1.633-.937-2.874-2.499-2.874-3.618 0-1.81 7.333-9.124 9.147-9.124.432 0-.196-1.664-1.395-3.697-5.121-8.68-1.024-21.228 8.537-26.148 5.176-2.664 6.923-2.777 25.048-1.616 10.426.668 10.814.775 10.264 2.828-.315 1.173-.579 2.47-.587 2.883-.008.413-1.77.75-3.918.75h-3.906l.528 5.814c1.15 12.684-7.871 21.371-22.434 21.604-7.565.121-11.226 1.725-8.275 3.626.82.528 5.704 2.324 10.853 3.99 16.556 5.358 19.615 8.054 18.909 16.664-.734 8.942-7.927 16.739-18.332 19.871-5.96 1.793-16.723 1.777-21.801-.033zm22.266-6.174c8.119-4.045 11.635-11.754 7.196-15.772-2.991-2.707-15.981-6.862-19.348-6.19-6.853 1.372-13.255 9.727-12.074 15.759 1.624 8.29 13.788 11.404 24.226 6.203zm2.678-45.247c6.095-3.717 8.449-14.265 4.347-19.479-5.61-7.133-16.29.817-16.389 12.202-.031 3.538.479 4.781 2.768 6.75 3.373 2.902 5.21 3.006 9.274.528zm37.92 23.205c-4.393-.897-6.747-3.83-7.247-9.028-1.278-13.31 9.92-32.817 22.451-39.11 6.514-3.271 19.363-3.601 27.923-.717.768.259.2 3.677-1.778 10.708-3.871 13.75-6.087 27.515-4.814 29.894.835 1.56 1.427 1.668 4.078.744 2.446-.853 3.286-.788 3.977.305 1.44 2.275.565 3.14-5.149 5.094-7.682 2.627-11.199 2.115-12.353-1.799l-.911-3.089-4.095 2.289c-6.912 3.863-16.36 5.878-22.082 4.709zm17.287-8.99c2.907-1.382 5.94-3.51 6.739-4.729 1.335-2.038 5.409-17.039 7-25.776.65-3.58.57-3.703-3.065-4.707-6.716-1.854-13.47 3.044-18.852 13.67-5.645 11.148-7.068 21.078-3.39 23.654 2.497 1.75 4.027 1.47 11.568-2.113zm473.47 8.696c-4.488-1.065-6.071-2.622-7.298-7.178-1.86-6.908 2.444-19.975 9.764-29.641 8.765-11.575 18.507-15.482 32.892-13.191 3.787.603 7.183 1.409 7.547 1.79.364.382-.9 6.77-2.808 14.195-1.908 7.425-3.556 16.425-3.662 20l-.191 6.5 4.25-.19c3.813-.17 4.25.045 4.25 2.092 0 1.91-.94 2.566-5.77 4.028-7.948 2.406-11.636 1.892-12.047-1.68-.174-1.513-.499-2.75-.722-2.75s-2.838 1.076-5.811 2.39c-4.784 2.116-14.533 4.787-16.45 4.507-.386-.056-2.16-.449-3.945-.872zm16.744-8.56c2.475-1.237 5.23-3.085 6.121-4.107 2.213-2.535 6.185-15.587 8.24-27.078.548-3.063.383-3.272-3.404-4.291-3.24-.873-4.63-.764-7.479.588-6.348 3.012-12.648 13.232-15.914 25.817-3.128 12.054.773 14.899 12.436 9.07zm-1084.5 6.285c-.298-1.237 1.484-10.539 3.961-20.671 4.883-19.976 4.842-21.599-.51-20.064-2.647.76-2.948.614-2.948-1.426 0-1.905.93-2.544 5.75-3.951 3.163-.923 7.325-1.782 9.25-1.908 3.295-.216 3.519-.033 3.821 3.124.177 1.845-1.548 10.985-3.833 20.312-2.285 9.327-3.886 17.655-3.56 18.508.474 1.235 1.525 1.41 5.163.865 4.352-.653 4.552-.577 4.238 1.607-.26 1.806-1.493 2.655-5.829 4.012-3.025.946-7.629 1.747-10.23 1.781-4.105.053-4.803-.237-5.273-2.189zm38.445.404l-2.28-1.846 7.747-34.035c4.26-18.72 7.6-35.326 7.419-36.904-.336-2.942-.699-3.094-4.578-1.917-1.919.582-2.25.311-2.25-1.838 0-2.913 3.512-4.32 13.25-5.308 5.579-.567 5.75-.512 5.75 1.84 0 1.332-1.575 9.56-3.5 18.283s-3.5 16.445-3.5 17.16c0 .97 1.1.812 4.341-.622 11.137-4.926 20.845-4.666 24.33.653 3.263 4.98 1.573 17.868-3.727 28.432-2.758 5.497-10.965 14.052-15.422 16.077-5.855 2.66-24.305 2.676-27.58.025zm25.305-6.341c5.013-3.549 10.603-15.54 12.179-26.13 1.579-10.61-5.434-12.725-16.634-5.02-2.366 1.628-4.264 4.051-5.244 6.694-1.813 4.892-5.548 20.856-5.548 23.714 0 4.208 9.682 4.68 15.246.742zm38.19 5.12c-2.708-2.828-2.932-3.625-2.875-10.25.144-16.88 9.74-31.988 22.96-36.146 6.595-2.074 12.398-1.371 16.287 1.974 2.243 1.93 2.692 3.135 2.692 7.226 0 10.295-9.389 18.104-22.9 19.048-3.905.272-7.43.995-7.834 1.605-1.126 1.701-.902 7.482.384 9.926 2.495 4.74 6.075 4.852 14.649.455 5.342-2.74 6.441-3.005 7.235-1.75 1.767 2.794.949 3.672-6.828 7.322-6.476 3.039-8.897 3.657-14.313 3.657-5.97 0-6.766-.258-9.456-3.066zm17.908-24.012c8.507-2.362 14.119-11.457 9.76-15.817-2.75-2.749-5.292-2.659-8.824.314-2.813 2.367-7.385 9.867-8.735 14.333-.57 1.882-.302 2.249 1.637 2.244 1.274-.003 4.047-.486 6.162-1.073zm33.656 26.738c0-.166 1.797-7.92 3.993-17.23s3.997-18.899 4-21.307l.006-4.377-4 .64c-3.545.566-4 .412-4-1.36 0-2.193 3.234-3.872 11.35-5.895 5.553-1.384 7.65-.435 7.65 3.462v2.348l3.55-2.409c6.242-4.236 10.056-5.013 14.587-2.97 2.17.979 3.807 2.265 3.639 2.86-2.715 9.57-4.26 12.58-6.458 12.58-1.965 0-2.317-.513-2.317-3.378 0-7.275-6.329-7.327-10.919-.09-2.86 4.51-5.817 14.765-8.164 28.317-.7 4.042-1.756 7.492-2.345 7.665-1.76.518-10.572 1.472-10.572 1.145zm50.162-.963c-1.104-1.33-.498-4.924 5.22-30.946l2.362-10.75h-3.372c-1.855 0-3.373-.255-3.373-.566 0-1.564 2.24-4.434 3.459-4.434 2.438 0 7.12-4.735 9.084-9.188 2.195-4.977 3.068-5.776 6.332-5.797 2.149-.014 2.313.295 1.724 3.235a222.415 222.415 0 00-1.253 7l-.601 3.75h4.627c4.727 0 5.423.764 4.021 4.418-.436 1.137-1.95 1.582-5.391 1.582-5.56 0-4.647-2-9.082 19.899-3.259 16.087-3.039 17.569 2.376 16.016 4.518-1.296 4.882-1.189 4.524 1.334-.243 1.707-1.527 2.654-5.32 3.92-6.122 2.045-13.857 2.31-15.338.526zm40.337-1.291c-7.319-7.897-2.023-30.354 9.628-40.83 4.754-4.274 12.176-7.575 17.034-7.575 3.075 0 9.85 3.15 10.868 5.054 1.612 3.012 1.11 10.206-.948 13.58-4.216 6.915-13.305 11.366-23.207 11.366h-5.874v5.278c0 10.245 4.258 12.042 15.449 6.523 3.568-1.759 6.684-2.996 6.924-2.75.24.247.592 1.35.782 2.45.277 1.604-1.113 2.74-7.042 5.75-6.42 3.258-8.291 3.75-14.298 3.75-6.155 0-7.174-.285-9.316-2.596zm17.602-24.558c5.284-1.792 8.99-4.82 10.59-8.652 1.348-3.224 1.31-3.717-.463-6.101-2.748-3.696-5.447-3.72-9.589-.083-3.195 2.806-8.64 12.211-8.64 14.926 0 1.395 3.848 1.352 8.102-.09zm375.57 26.486c-1.413-1.412-.497-7.313 4.3-27.711 6.526-27.75 10.033-44.087 10.033-46.736 0-1.896-.41-2.082-3.5-1.58-3.185.517-3.5.352-3.5-1.83 0-2.502 2.495-3.61 12.432-5.519 5.132-.986 6.568-.335 6.568 2.974 0 1.495-3.372 17.31-7.493 35.143-4.121 17.834-7.496 33.95-7.5 35.811l-.007 3.386 4.568-.626c4.295-.589 4.55-.494 4.25 1.583-.246 1.708-1.565 2.599-5.818 3.929-5.618 1.757-13.135 2.374-14.333 1.176zm37.697-.555c-1.227-1.985-.526-6.316 3.733-23.037 2.218-8.708 3.864-16.6 3.658-17.537-.394-1.799-.644-1.84-5.005-.813-2.322.547-2.75.326-2.75-1.423 0-2.384 4.269-4.501 12.045-5.976 5.556-1.054 7.955-.515 7.955 1.788 0 .861-2.037 10.06-4.527 20.444s-4.231 19.358-3.869 19.945c.404.653 2.38.831 5.096.459 4.155-.57 4.417-.468 4.119 1.6-.246 1.708-1.566 2.6-5.819 3.93-6.507 2.035-13.577 2.335-14.637.621zm36.934-.446c-.352-.917-.084-4.18.595-7.25 2.231-10.08 7.107-33.146 7.107-33.62 0-.254-1.383-.462-3.073-.462-4.341 0-3.531-2.795 1.574-5.434 3.04-1.57 4.793-3.566 7.305-8.316 2.86-5.409 3.685-6.25 6.126-6.25h2.82l-1.34 6.25c-.738 3.437-1.357 6.587-1.376 7-.02.412 2.214.75 4.964.75 5.225 0 5.347.105 4.37 3.75-.527 1.965-1.256 2.25-5.778 2.25h-5.174l-3.364 16.876c-1.85 9.281-3.092 17.582-2.76 18.445.486 1.268 1.234 1.388 3.897.624 4.583-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.748 2.174-14.045 2.159-14.887-.036zm41.18-.597c-2.489-2.141-2.92-3.316-3.277-8.917-.801-12.586 4.96-26.796 13.514-33.327 9.445-7.212 19.761-8.17 25.56-2.373 2.688 2.69 2.926 3.448 2.492 7.966-.952 9.905-10.445 17.1-23.434 17.76-8.124.413-8.978 1.39-7.385 8.433 1.735 7.667 4.886 8.454 14.896 3.72 6.63-3.137 8.157-3.135 8.157.01 0 3.196-12.002 8.33-20.577 8.803-6.382.351-7.359.148-9.944-2.076zm21.505-26.726c6.235-3.182 8.912-10.258 5.362-14.18-4.467-4.937-12.737 1.529-16.844 13.167l-1.509 4.276 4.507-.617c2.479-.34 6.296-1.53 8.483-2.647zm239.02 28.622c0-.151 1.797-7.892 3.993-17.203s3.997-18.898 4-21.306l.01-4.378-4 .64c-3.533.565-4 .409-4-1.337 0-2.429 1.76-3.412 9.861-5.511 7.039-1.824 9.14-1.122 9.14 3.056v2.347l3.549-2.408c6.224-4.224 10.059-5.012 14.546-2.989 2.147.969 3.905 2.03 3.905 2.36 0 .328-1.009 3.41-2.241 6.847-1.851 5.161-2.635 6.25-4.5 6.25-1.9 0-2.26-.537-2.26-3.377 0-6.835-5.876-7.345-10.264-.89-3.336 4.907-5.043 10.234-7.778 24.267-1.233 6.325-2.515 11.78-2.85 12.121-.6.613-11.107 2.042-11.107 1.51zm115.34-1.196c-.82-2.138.126-8.297 3.988-25.936l3.285-15-2.805-.313c-3.356-.375-3.923-3.698-.8-4.689 3.515-1.115 7.575-5.239 9.537-9.685 2.196-4.977 3.069-5.777 6.333-5.798 2.148-.013 2.312.295 1.723 3.235a222.473 222.473 0 00-1.253 7l-.6 3.75h4.627c4.727 0 5.423.765 4.02 4.418-.436 1.138-1.95 1.582-5.39 1.582-5.56 0-4.647-2-9.083 19.9-3.258 16.086-3.038 17.568 2.376 16.015 4.519-1.296 4.883-1.189 4.524 1.335-.242 1.707-1.527 2.653-5.32 3.92-6.657 2.223-14.36 2.358-15.162.266zm40.348-1.024c-7.581-7.58-2.34-30.242 9.443-40.837 4.754-4.274 12.176-7.575 17.034-7.575 3.074 0 9.849 3.15 10.868 5.055 1.612 3.011 1.11 10.206-.948 13.58-4.236 6.946-13.305 11.366-23.327 11.366h-5.994l.443 6.134c.705 9.742 4.284 11.072 15.246 5.667 3.568-1.76 6.684-2.997 6.924-2.75.24.247.592 1.349.782 2.449.277 1.605-1.113 2.74-7.041 5.75-6.362 3.23-8.32 3.75-14.114 3.75-5.904 0-7.044-.317-9.316-2.589zm20.964-26.062c6.994-3.476 10.129-11.537 5.768-14.836-2.896-2.191-4.996-1.822-8.841 1.554-3.218 2.825-8.576 12.198-8.576 15.002 0 1.655 6.911.635 11.648-1.72zm30.352 27.79c0-.421 1.826-8.53 4.058-18.02 2.232-9.492 3.92-18.688 3.75-20.438-.29-2.982-.537-3.168-3.953-2.973-2.857.163-3.753-.208-4.147-1.717-.41-1.566.456-2.278 4.644-3.824 2.831-1.044 6.835-2.205 8.898-2.579 3.878-.702 3.812-.756 6.238 5.115.046.111 2.719-1.126 5.939-2.75 6.89-3.476 8.046-3.572 12.235-1.017l3.163 1.928-2.163 6.544c-1.805 5.46-2.536 6.547-4.413 6.568-1.884.02-2.25-.514-2.25-3.276 0-8.714-8.293-6.99-12.832 2.666-1.14 2.427-3.4 10.791-5.02 18.59-1.62 7.797-3.105 14.308-3.297 14.47-.88.738-10.85 1.394-10.85.714zm50 .004c0-.45 1.605-7.079 3.567-14.73 2.143-8.357 3.641-16.709 3.75-20.914l.183-7-3.627.278c-2.85.218-3.731-.126-4.119-1.609-.403-1.541.442-2.17 4.626-3.445 9.092-2.769 11.233-2.968 12.996-1.205.893.893 1.624 2.717 1.624 4.053 0 1.335.184 2.428.41 2.428s3.195-1.317 6.6-2.927c8.06-3.812 18.742-5.811 21.931-4.104 2.081 1.113 2.23 1.688 1.622 6.271-.368 2.775-1.986 10.494-3.596 17.153-1.61 6.66-3.048 13.682-3.197 15.607-.27 3.5-.27 3.5 3.937 3.417 2.876-.057 4.39.392 4.783 1.417.793 2.066-.152 2.74-6.421 4.576-7.112 2.083-13.66 2.099-14.451.036-.328-.855 1.199-9.572 3.393-19.371 4.4-19.647 4.652-21.883 2.562-22.685-2.157-.828-9.808 2.924-14.374 7.05-3.758 3.394-4.239 4.45-6.546 14.362-1.37 5.884-2.809 12.872-3.197 15.528-.389 2.656-1.213 4.98-1.831 5.165-3.033.905-10.624 1.369-10.624.65zm68.587-.779c-.346-.899 1.44-10.163 3.967-20.586 2.526-10.423 4.36-19.563 4.072-20.31-.4-1.04-1.292-1.138-3.817-.414-1.813.52-3.411.946-3.552.946s-.257-1.043-.257-2.318c0-1.927.884-2.584 5.25-3.905 11.848-3.583 15.508-2.975 14.312 2.377-.288 1.29-2.35 9.965-4.58 19.279-2.23 9.313-3.805 17.586-3.499 18.383.425 1.108 1.631 1.303 5.105.827 4.274-.586 4.53-.49 4.23 1.585-.615 4.275-19.747 8.002-21.231 4.137zm37.728.013c-.667-1.738.143-6.512 4.051-23.878 4.321-19.2 4.259-17.5.64-17.5-4.397 0-3.665-2.758 1.441-5.433 2.939-1.539 4.75-3.599 7.095-8.067 2.561-4.878 3.672-6.061 5.944-6.33 3.035-.358 3.057-.104.915 10.58l-.651 3.25h5.232c4.36 0 5.13.264 4.625 1.582-.334.87-.607 2.22-.607 3 0 1.049-1.402 1.418-5.375 1.418h-5.375l-3.302 16.818c-1.816 9.25-3.021 17.55-2.678 18.445.511 1.332 1.225 1.456 3.92.683 4.584-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.67 2.152-14.046 2.156-14.87.01zm41.108-.692c-2.864-2.466-2.923-2.716-2.923-12.405 0-9.425.177-10.247 3.778-17.531 4.417-8.936 9.487-13.77 17.636-16.82 14.195-5.31 24.39 3.712 18.108 16.026-3.552 6.962-13.026 11.988-22.664 12.022-5.79.02-6.18.172-6.802 2.65-.836 3.33.21 8.354 2.21 10.622 2.273 2.578 6.184 2.146 13.16-1.451 5.202-2.683 6.355-2.966 7.125-1.75 1.77 2.8.893 3.876-5.801 7.11-5.154 2.49-8.424 3.354-13.827 3.652-6.417.354-7.35.155-10-2.126zm21.78-26.92c6.758-3.798 9.013-11.267 4.329-14.336-1.847-1.21-3.168-1.385-5.25-.695-3.527 1.17-8.563 7.707-10.645 13.817l-1.607 4.716 4.59-.629c2.525-.346 6.388-1.639 8.583-2.873zm-1512 26.512c.186-.966 1.233-1.92 2.327-2.12 2.97-.545 5.564-3.178 7.59-7.704 2.688-6.003 10.981-47.753 11.205-56.408.191-7.382.162-7.474-3.018-9.5-6.205-3.953-4.547-4.546 12.71-4.546 13.673 0 16 .222 16 1.525 0 .898-1.246 1.774-3.03 2.131-6.377 1.276-8.798 7.57-14.819 38.541-5.626 28.942-5.571 28.382-3.044 30.91 1.92 1.92 2.965 2.085 10.76 1.693 10.485-.528 14.272-2.293 17.934-8.355 2.885-4.776 3-4.857 5.068-3.546 1.148.727 1.105 1.653-.266 5.734-.9 2.677-2.654 6.667-3.9 8.867l-2.266 4-26.795.267c-25.09.25-26.774.155-26.457-1.489zm505.82.304c0-.78 1.688-2.242 3.75-3.25 2.614-1.277 4.415-3.197 5.943-6.332 2.865-5.88 11.526-48.467 11.684-57.456.12-6.793.048-7.004-3.088-9-6.711-4.272-5.194-4.544 25.279-4.544 27.955 0 28.554.042 27.943 1.967-.344 1.082-1.186 5.02-1.872 8.75-1.058 5.753-1.581 6.831-3.443 7.102-1.786.26-2.196-.172-2.196-2.316 0-6.638-3.939-8.503-17.958-8.503h-9.659l-2.773 12.75c-1.526 7.012-2.992 13.538-3.26 14.5-.435 1.571.413 1.748 8.333 1.735 9.958-.017 12.893-1.08 15.815-5.725 2.6-4.135 5.992-4.467 5.204-.51a2669.77 2669.77 0 00-2.319 12c-1.397 7.296-2.126 9.25-3.452 9.25-1.061 0-1.899-1.087-2.27-2.946-.325-1.623-1.616-3.498-2.875-4.175-2.4-1.291-18.125-1.866-19.29-.706-.673.67-3.626 15.083-4.921 24.02-.623 4.295-.464 4.833 1.883 6.37 2.061 1.351 4.274 1.594 11.303 1.24 10.435-.524 14.143-2.189 18.435-8.278 1.856-2.634 3.613-4.152 4.439-3.836 1.945.747 1.715 2.535-1.234 9.59-4.373 10.465-1.882 9.72-32.555 9.72-22.502 0-26.845-.229-26.845-1.417zm508 .02c0-.796 1.463-1.946 3.25-2.555 6.314-2.152 8.4-7.855 14.716-40.224 5.439-27.875 5.305-32.333-1.027-34.343-1.127-.358-1.874-1.175-1.66-1.816.279-.84 8.107-1.239 28.127-1.43 27.267-.262 27.73-.233 27.11 1.717-.346 1.09-1.19 5.035-1.877 8.766-1.058 5.753-1.58 6.83-3.443 7.102-1.853.27-2.195-.16-2.195-2.75 0-6.314-4.877-8.397-18.436-7.875l-7.936.305-2.78 13c-1.53 7.15-2.796 13.562-2.814 14.25-.05 1.846 15.23 1.682 18.875-.203 1.545-.799 3.377-2.824 4.071-4.5.774-1.867 1.99-3.047 3.141-3.047 2.328 0 2.343-.725-.272 12.75-1.834 9.446-2.478 11.25-4.017 11.25-1.107 0-1.832-.722-1.832-1.826 0-4.666-9.349-8.136-17.99-6.676l-3.82.646-2.03 11.178c-3.576 19.712-3.425 21.497 2.007 23.747 5.98 2.477 2.528 3.424-13.5 3.706-13.136.23-15.668.041-15.668-1.173zm-586.61-21.511c-4.472-2.032-8.394-8.31-8.394-13.44 0-7.943 7.022-15.047 14.847-15.02 9.359.034 15.143 5.75 15.15 14.97.01 11.718-10.734 18.426-21.602 13.49zm508.99.472c-1.716-.747-4.4-3.037-5.965-5.089-2.32-3.042-2.832-4.688-2.77-8.923.132-9.187 5.845-14.838 15-14.838 4.537 0 6.048.494 9.146 2.985 6.902 5.552 7.975 14.861 2.467 21.408-4.63 5.502-11.526 7.221-17.878 4.457zm-597.86-35.543c-1.966-2.174-2.108-1.946 9.256-14.886l3.834-4.366 5.696 1.275c3.133.7 5.696 1.576 5.696 1.946 0 .674-21.41 18.01-22.245 18.01-.245 0-1.251-.891-2.237-1.98zm508.75-.001l-2.218-1.797 7.549-8.611c4.152-4.736 7.93-8.611 8.397-8.611 2.44 0 11.011 2.458 10.775 3.09-.248.665-18.879 15.646-21.279 17.111-.553.338-2.003-.195-3.224-1.183zm664.77.009l-2.412-1.82 7.81-8.604c4.297-4.732 8.172-8.604 8.613-8.604 1.978 0 10.948 2.403 10.906 2.922-.045.54-18.928 15.777-21.382 17.252-.617.37-2.207-.145-3.534-1.147zm-1427.1-5.133c-4.063-4.063-.097-11.896 6.024-11.896 4.258 0 6.48 2.234 6.48 6.512 0 6.674-7.839 10.05-12.503 5.384zm674.85.713c-2.457-1.866-2.312-8.046.25-10.608 4.125-4.125 12-1.433 12 4.102 0 5.994-7.604 10.032-12.25 6.506zm664.15-.713c-4.134-4.134-.08-11.896 6.216-11.896 6.281 0 8.973 7.007 4.434 11.545-3.08 3.081-7.765 3.235-10.65.35zm-876.1-28.584c-1.527-1.702-1.163-2.314 6.071-10.182l7.696-8.37 5.719 1.28c3.145.703 5.696 1.545 5.668 1.87-.081.951-20.163 16.334-21.924 16.795-.882.23-2.335-.396-3.23-1.392z"></path><path fill="#e2011c" d="M880.1 520l2.333-6.033c3.954-10.9 8.054-19.217 13.971-28.343 6.269-9.667 20.067-23.907 25.807-26.632 7.054-3.35 15.824-4.53 26.67-3.587 9.312.81 37.925 5.489 49.471 8.09 8.788 1.98 21.654 2.17 27.71.408 11.665-3.394 18.576-9.954 21.856-20.747 2.516-8.28 2.492-15.804-.066-20.823-3.436-6.74-2.851-8.494 5.5-16.48 4.125-3.944 7.506-7.59 7.512-8.104.035-2.67-5.68-13.39-7.151-13.414-.902-.015-2.683-.872-3.958-1.906l-2.32-1.879 4.959-2.534c6.77-3.461 11.791-8.843 11.791-12.638 0-1.64-1.426-5.66-3.17-8.933-3.345-6.28-4.24-12.283-2.357-15.805 1.245-2.327 3.391-3.305 13.933-6.352 8.86-2.561 12.062-5.157 13.325-10.8 1.08-4.827.55-7.93-2.349-13.73-2.36-4.722-17.73-28.27-22.208-34.022-6.016-7.731-13.346-21.086-15.514-28.27-2.137-7.081-2.151-7.482-.592-16.635 3.296-19.35 1.369-35.391-8.01-66.67-6.97-23.245-8.841-28.89-11.024-33.238-3.945-7.863-3.418-9.704 4.677-16.331 3.875-3.173 7.475-6.572 8-7.553 2.445-4.57-.287-13.378-4.92-15.858-2.939-1.575-4.576-.494-7.56 4.994-2.262 4.158-3.148 4.945-5.568 4.945-3.94 0-4.63-1.653-2.115-5.058 2.933-3.97 2.701-4.607-1.907-5.225-3.449-.463-5.272-1.811-12.75-9.426-10.025-10.21-16.76-14.914-30.185-21.087-6.154-2.83-8.298-4.17-6.04-3.774 1.925.337 8.731.875 15.125 1.196 18.553.931 23.063-1.52 27.386-14.885 2.936-9.075 4.344-13.271-2.393-19.607L983.245 0h554.75v520h-657.9z"></path><path fill="#003189" d="M407.03 520c-4.026-.423-7.517-.606-7.758-.847-.423-.424 4.124-3.347 24.95-16.039 6.679-4.07 9.427-6.253 8.5-6.75-.755-.402-6.585-1.042-12.958-1.42-9.467-.562-12.21-.4-15 .881-1.878.863-9.372 3.133-16.653 5.044-18.06 4.739-24.137 7.993-29.936 16.027l-2.166 3.103H-.001V0h706.34l-13.686 8.934c-7.535 3.74-16.29 8.936-19.458 11.545-10.744 8.85-25.211 28.985-28.824 40.115-1.328 4.09-2.534 5.624-6.608 8.404-6.217 4.243-13.664 12.334-19.83 21.546-8.373 12.508-24.332 40.698-27.468 48.518-4.864 12.131-4.422 21.37 2.757 57.622 3.16 15.961 6.58 32.171 7.6 36.024 1.02 3.853 2.135 10.382 2.479 14.51.615 7.37 1.094 8.966 5.408 18.012 1.182 2.477 2.147 5.288 2.145 6.246-.002.959.897 2.305 1.997 2.993 1.141.712 2 2.333 2 3.772 0 1.734 2.278 5.024 7.28 10.516 11.445 12.567 19.72 24.347 19.72 28.072 0 3.06-4.488 3.85-11.72 2.065-8.452-2.087-15.367-6.595-26.03-16.972-4.537-4.416-8.25-7.384-8.25-6.597 0 .787 3.111 4.893 6.914 9.123 7.562 8.414 8.748 10.709 7.113 13.767-1.43 2.675-4.911 3.454-9.62 2.153-5.434-1.502-8.618.591-7.722 5.075.55 2.751.4 3.075-1.155 2.478-3.072-1.18-9.794-2.53-15.838-3.184-5.552-.6-5.963-.843-9.325-5.525-2.547-3.548-4.529-5.182-7.191-5.93-9.923-2.786-34.604-7.08-51.175-8.905-29.128-3.207-36.144-3.458-50.1-1.798-10.716 1.275-13.63 2.024-19.5 5.008-10.39 5.283-28.4 21.837-28.4 26.104 0 2.002 3.968 1.296 8.5-1.513 13.758-8.524 60.88-20.554 84-21.445 11.458-.442 10.837.107-2.91 2.571-3.8.682-12.8 2.987-20 5.124s-19.614 5.43-27.589 7.317c-7.975 1.888-16.975 4.321-20 5.408l-5.5 1.975 8.5.093c43.31.474 92.681 14.223 112.77 31.408 8.646 7.394 11.811 8.292 24.528 6.952 17.428-1.835 39.985-10.156 49.878-18.397 4.293-3.576 7.825-4.998 7.818-3.148-.01 3.269-5.697 20.84-8.155 25.2-2.74 4.86-2.896 5.559-1.469 6.603.878.642 1.344 1.42 1.036 1.728-.308.308.374.856 1.515 1.219 3.282 1.042 2.456 2.05-2.781 3.393-5.107 1.31-9.143 3.602-9.143 5.193 0 .52.701.944 1.559.944 2.568 0 .652 1.796-2.704 2.533-2.297.505-2.756.918-1.738 1.563.998.633 1.035.881.133.892-.688.008-1.25 1.031-1.25 2.273 0 1.546-.946 2.676-3 3.586-5.007 2.218-3.603 3.415 3.25 2.773 3.437-.322 5.575-.319 4.75.007-.825.326-6.45 2.873-12.5 5.659-6.05 2.786-13.925 6.093-17.5 7.35-4.047 1.421-6.632 2.919-6.85 3.968-.348 1.684 1.53 1.628 6.257-.187.876-.336 1.582-.225 1.568.246-.013.472-10.429 6.487-23.145 13.366-12.716 6.88-24.615 13.972-26.442 15.76s-4.164 3.252-5.194 3.252c-1.036 0-2.391 1.139-3.033 2.55-1.943 4.265-1.54 4.784 3.09 3.988 6.878-1.181 10.03-1.116 10.487.217.247.721-.402 1.25-1.532 1.25-1.079 0-2.5.65-3.157 1.442-.657.793-2.394 1.581-3.859 1.752-1.704.198-3.388 1.456-4.676 3.494-1.108 1.752-2.914 3.416-4.014 3.699s.475.33 3.5.105c44.98-3.348 53.36-5.013 71.5-14.211 15.476-7.847 31.54-19.513 42.97-31.202 3.282-3.358 6.32-6.105 6.75-6.105 1.553 0 .71 5.613-1.584 10.543-3.971 8.533-12.303 16.394-29.428 27.764-8.64 5.735-17.957 11.137-20.707 12.004-8.592 2.707-22.463 5.591-37.004 7.694-47.373 6.85-65.502 12.045-83.46 23.918-3.006 1.987-6.16 3.495-7.011 3.35-.85-.143-3.117 1.081-5.036 2.722-5.397 4.616-1.487 3.835 9.707-1.938 11.471-5.916 16.85-6.848 7.804-1.353C468.261 515.778 459.806 520 451.53 520h-44.498zm-58.846-58.006c1.798-.752 7.746-4.084 13.218-7.405 5.472-3.321 11.974-6.957 14.449-8.08 2.475-1.123 9.45-4.276 15.5-7.007 12.681-5.722 31.29-11.123 32.36-9.39.376.609 3.149 1.28 6.162 1.49 4.217.295 4.96.566 3.228 1.178-1.238.437-2.25 1.192-2.25 1.678 0 1.81 9.359 1.267 13.299-.772 1.545-.799 5.034-1.717 7.755-2.04 3.382-.4 4.946-1.044 4.946-2.035 0-1.131.859-1.304 3.913-.788 4.203.71 13.243-1 37.587-7.11 16.486-4.138 28.973-8.303 39.94-13.322l7.94-3.633-7.94-5.089c-19.352-12.402-38.785-20.018-81.44-31.916-7.425-2.07-13.95-4.213-14.5-4.76-.663-.66-.326-.752 1-.276 4.26 1.528 7.5 1.821 7.5.678 0-1.483-3.22-2.679-9.548-3.545-5.787-.792-9.522-2.52-5.502-2.544 6.222-.04-4.474-3.985-16.45-6.068-8.866-1.542-9.376-1.872-5.673-3.667 3.227-1.564 6.698-7.482 5.785-9.864-.776-2.021-1.742-1.813-6.538 1.41-9.245 6.213-17.725 16.388-22.49 26.986-2.72 6.045-1.778 6.6 12.214 7.198 11.458.49 11.64.534 8.702 2.113-1.65.886-4.96 1.912-7.355 2.28-8.135 1.248-12.654 5.11-8.62 7.369 1.197.67.722 1.236-2.219 2.639-3.296 1.573-3.528 1.906-1.944 2.793.989.554 3.864.842 6.39.641 3.51-.279 5.114.1 6.803 1.605l2.211 1.97-4.436 2.816c-2.44 1.549-5.2 4.26-6.133 6.024-.933 1.764-4.284 5.963-7.447 9.33s-5.75 6.848-5.75 7.737-4.612 5.31-10.25 9.822c-15.16 12.136-21.75 18.806-21.75 22.017 0 1.7-.856 3.23-2.36 4.215-4.732 3.103-7.203 6.688-4.608 6.688.568 0 2.504-.615 4.301-1.366zm116.98-11.692c3.747-.501 8.086-1.663 9.642-2.583l2.83-1.673-9.652-4.812-4.816 1.952a471.849 471.849 0 01-8.152 3.215c-7.377 2.794-8.34 6.549-1.415 5.518a984.68 984.68 0 0111.563-1.617zm-169.31-45.504c22.285-23.316 38.011-37.148 57.972-50.99 6.783-4.704 11.562-7.424 11.798-6.715.648 1.945 3.554 1.373 8.284-1.633 5.436-3.453 8.156-6.948 14.941-19.202 7.04-12.712 9.7-15.889 19.862-23.719a1632.238 1632.238 0 0015.555-12.152c5.479-4.353 6.795-5.04 6.344-3.317-.349 1.336-.108 2.176.624 2.176 2.272 0 12.976-4.572 13.353-5.703.59-1.769-10.287-3.595-18.33-3.078-6.177.396-8.364 1.113-16.028 5.253-18.008 9.728-31.017 20.221-55.857 45.055-17.876 17.872-31.958 29.855-39.076 33.252-2.318 1.106-4.064 3.425-6.876 9.132-5.465 11.093-15.223 27.012-24.485 39.947-8.754 12.225-10.633 16.454-3.83 8.62 2.338-2.691 9.425-10.308 15.75-16.926zm223 109.47c26.764-5.566 29.718-5.98 48.5-6.804 21.09-.924 23.777-1.472 36.464-7.439 4.065-1.911 5.659-2.259 6.224-1.357.983 1.57 7.864-2.18 21.312-11.615 5.5-3.859 13.278-8.79 17.284-10.959 6.036-3.267 7.883-3.83 10.787-3.285 3.1.582 4.018.204 7.978-3.283 10.974-9.666 20.344-14.134 29.702-14.164 2.782-.009 3.75.403 3.75 1.596 0 1.019.55 1.397 1.5 1.033 2.787-1.071 1.525.153-5.645 5.472-8.301 6.158-7.485 8.007.954 2.162 8.17-5.659 8.19-5.667 8.19-3.379 0 1.304-3.075 4.578-8.75 9.315-12.91 10.778-22.052 19.692-35.97 35.073l-12.45 13.361h-158.33l28.5-5.728zm.25-203.7c.962-.252 2.537-.252 3.5 0 .962.252.175.458-1.75.458s-2.713-.206-1.75-.458z"></path><path fill="#7f7f7f" d="M985.58 272.52c-4.367-.66-2.114-2.284 3.171-2.284 5.302 0 8.096-2.036 8.096-5.9 0-1.816-.395-2.114-2.089-1.576-1.461.464-2.502.073-3.463-1.3-.898-1.283-3.068-2.188-6.262-2.612-5.704-.757-14.94-6.268-13.285-7.926.566-.566 3.503-1.234 6.526-1.485 5.211-.432 5.556-.632 6.613-3.838.791-2.4 1.892-3.565 3.788-4.01 1.47-.347 3.797-1.667 5.172-2.934 1.375-1.268 5.875-4.508 10-7.2 6.935-4.527 11.231-9.353 9.695-10.89-1.618-1.62-16.634-3.381-23.695-2.78-8.203.697-22.338 3.679-28.25 5.959-6.068 2.34-4.294.302 4.043-4.645 11.255-6.679 32.92-12.905 44.901-12.905 4.649 0 20.203 3.676 22.055 5.212 3.63 3.01-.329 13.574-7.06 18.845l-2.812 2.201 2.311 2.466 2.311 2.466-2.36 1.917c-1.299 1.054-3.077 1.916-3.953 1.916s-3.043 1.407-4.816 3.128c-2.73 2.648-3.083 3.502-2.298 5.569.608 1.6.549 3.15-.173 4.498-.673 1.26-.842 4.123-.435 7.384.831 6.657-.368 9.042-5.226 10.392-3.603 1.001-16.793 1.196-22.505.332z"></path></svg></a>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/mentions](https://onvs.fabrique.social.gouv.fr/mentions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"><span class="ml-3 text-xl font-bold text-gray-900 font-evolventa">ONVS | Observatoire national des violences en santé</span></a>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1538 906" class="w-24"><path fill="#fff" d="M0 0H1538V520H0z"></path><path d="M1228.2 905.42c-.849-.346-.901-1.272-.188-3.318.903-2.59 1.32-2.793 4.791-2.327 3.149.422 4.075.12 5.39-1.758 2.53-3.612.578-6.217-4.013-5.356-3.52.66-3.576.621-2.897-2.081 2.154-8.583 2.358-8.11-4.06-9.383-7.642-1.516-14.952-5.796-20.568-12.041-8.433-9.379-11.356-18.866-10.516-34.117.428-7.77 1.09-10.798 3.54-16.201 7.496-16.534 24.621-24.966 47.637-23.455 4.984.327 11.311 1.175 14.061 1.885l5 1.291.288 9.25.287 9.25h-3.037c-1.792 0-3.038-.522-3.038-1.272 0-2.598-6.123-8.61-10.454-10.264-5.59-2.135-16.434-1.648-21.866.981-12.416 6.01-18.077 21.61-14.302 39.414 1.754 8.272 4.652 13.821 10.192 19.515 5.251 5.398 10.548 7.577 18.485 7.604 8.394.028 14.271-3.345 17.967-10.312 2.511-4.734 3.407-5.315 5.83-3.78 1.127.715 1.138 2.36.063 9.955l-1.288 9.098-4.563 1.577c-2.51.867-8.276 1.848-12.813 2.179-7.824.57-8.25.723-8.25 2.953 0 1.78.553 2.352 2.277 2.352 3.34 0 6.473 2.586 7.213 5.954.86 3.913-1.925 9.702-5.575 11.59-2.64 1.365-12.927 1.905-15.592.818zm-594.96-4.209c-8.657-2.552-16.123-6.402-25.103-12.945l-7.758-5.652-12-.615c-13.306-.683-17.955-2.168-26.562-8.486-18.961-13.918-19.65-49.337-1.294-66.576 13.818-12.978 38.127-15.66 55.625-6.136 23.622 12.857 26.13 50.785 4.672 70.652-3.33 3.083-6.592 5.607-7.248 5.609-2.044.007 21.457 12.862 28.328 15.496 7.592 2.91 16.462 3.3 22.96 1.007 4.727-1.668 5.535-1.468 6.328 1.565.463 1.772-.345 2.518-5.13 4.733-7.54 3.493-23.342 4.142-32.817 1.348zm-29.323-30.905c16.745-8.747 19.933-36.76 6.22-54.65-12.71-16.579-34.985-14.069-43.357 4.886-7.564 17.124 1.066 43.6 16.498 50.61 6.246 2.836 14.217 2.51 20.64-.845zM78.377 880.67c-4.593-2.004-9.632-8.24-17.595-21.774-12.234-20.792-14.527-23.838-17.942-23.838h-2.963l.02 11.25c.037 20.533 2.102 27.56 8.575 29.184 1.732.435 2.405 1.299 2.405 3.085v2.481h-41v-2.355c0-1.784.764-2.575 3.149-3.259 1.731-.496 4.094-2.17 5.25-3.718 2.05-2.748 2.101-3.748 2.101-41.669s-.05-38.921-2.101-41.668c-1.156-1.548-3.519-3.221-5.25-3.718-2.301-.66-3.149-1.493-3.149-3.097 0-2.186.113-2.198 25.4-2.85 26.912-.692 32.843-.18 40.428 3.493 6.627 3.208 12.151 12.928 12.166 21.409.018 9.71-7.203 20.676-16.73 25.409l-4.988 2.478 11.024 16.522c12.969 19.437 17.042 24.63 20.873 26.61 3.577 1.85 3.92 5.885.577 6.781-4.022 1.078-17.172.586-20.25-.757zm-25.023-55.728c13.406-3.721 17.93-22.35 7.785-32.053-4.77-4.56-9.834-6.216-16.297-5.327l-4.965.683v37.812l4.75-.006c2.612-.003 6.54-.502 8.727-1.11zm230.4 55.735c-5.48-1.958-10.648-5.446-13.384-9.032-4.972-6.519-5.494-9.946-5.555-36.462-.063-27.716-.585-30.761-5.671-33.124-2.044-.95-3.237-2.234-3.25-3.5-.02-1.923.639-2 16.979-2 16.963 0 17 .005 16.999 2.25 0 1.511-.6 2.25-1.826 2.25-1.004 0-2.917 1.16-4.25 2.58l-2.424 2.58v27.17c0 25.57.122 27.403 2.077 31.13 3.05 5.813 9.132 8.803 16.954 8.334 8.416-.504 12.97-3.49 16.33-10.706 2.578-5.538 2.602-5.812 2.62-30.132.016-21.778-.18-24.847-1.744-27.234-.97-1.48-2.882-2.971-4.25-3.315-1.553-.39-2.488-1.334-2.488-2.516 0-1.762.925-1.891 13.5-1.891s13.5.13 13.5 1.891c0 1.178-.932 2.126-2.47 2.512-4.606 1.156-4.973 3.3-5.518 32.172l-.512 27.075-3.01 5.882c-3.553 6.943-9.308 11.743-16.715 13.942-6.248 1.856-20.876 1.938-25.892.145zm390 0c-5.542-1.98-10.657-5.458-13.488-9.169-4.714-6.18-5.39-10.75-5.45-36.859-.064-27.146-.602-30.235-5.673-32.59-2.043-.95-3.236-2.235-3.25-3.5-.02-1.923.64-2 16.98-2 16.802 0 17 .025 16.999 2.18 0 1.465-.706 2.285-2.15 2.5-1.182.175-3.095 1.589-4.25 3.14-1.968 2.644-2.121 4.292-2.43 26.206-.38 26.924.371 32.602 4.933 37.267 8.252 8.441 25.405 6.083 30.266-4.16 3.061-6.452 3.847-14.534 3.47-35.698-.398-22.41-1.067-25.202-6.352-26.53-1.553-.389-2.488-1.334-2.488-2.515 0-1.762.925-1.892 13.5-1.892 12.543 0 13.5.134 13.5 1.88 0 1.133-1.16 2.358-2.928 3.09-1.61.668-3.272 1.96-3.693 2.872-.421.912-1.016 13.843-1.322 28.735l-.557 27.076-3.01 5.88c-3.553 6.942-9.309 11.743-16.715 13.942-6.248 1.855-20.876 1.937-25.892.145zm316.53-.042c-3.997-1.74-8.751-7.666-16.108-20.077-9.5-16.028-10.579-17.474-13.055-17.488-2.214-.012-2.25.187-2.25 12.52 0 14.952 1.248 19.168 5.956 20.11 2.367.473 3.044 1.137 3.044 2.983v2.375h-34v-2.375c0-1.846.677-2.51 3.044-2.984 5.697-1.139 6.1-3.847 5.759-38.656l-.303-30.827-2.424-2.579c-1.334-1.418-3.246-2.579-4.25-2.579-1.132 0-1.826-.727-1.826-1.914 0-1.65 1.015-2.01 7.335-2.602 4.034-.378 15.172-.516 24.75-.306 15.572.342 17.856.615 21.581 2.58 6.617 3.49 10.334 10.297 10.334 18.924 0 8.195-4.698 15.393-13.227 20.264-2.723 1.555-4.482 3.117-3.909 3.47.573.355 4.992 6.594 9.82 13.865 9.478 14.274 14.746 20.72 16.932 20.72 1.928 0 1.757 4.643-.198 5.393-2.838 1.089-13.844.561-17.006-.816zm-18.482-47.042c3.975-2.055 7.878-6.999 8.611-10.906.941-5.016-1.267-11.635-5.083-15.233-3.533-3.332-6.946-4.288-12.854-3.598l-3.604.42v30.782h5.05c2.777 0 6.323-.658 7.88-1.463zm445.12 46.868c-2.996-.805-5.626-1.643-5.846-1.863-.219-.22-.95-4.706-1.625-9.97l-1.226-9.571h2.822c1.552 0 2.821.373 2.821.829 0 2.601 6.563 10.265 10.368 12.107 10.285 4.978 22.637.291 22.63-8.587-.01-5.827-2.836-9.31-12.47-15.35-13.52-8.474-18.74-12.95-21.437-18.374-2.688-5.41-3.168-13.826-1.14-19.974 1.34-4.058 7.622-10.117 12.91-12.452 5.325-2.35 21.989-2.275 28.89.131l5.25 1.83v17.84h-2.89c-2.245 0-3.032-.556-3.515-2.482-1.048-4.176-6.41-9.391-10.896-10.6-12.003-3.232-21.617 9.082-14.082 18.037 1.439 1.71 7.963 6.733 14.498 11.162 12.658 8.579 17.334 13.25 18.9 18.882 3.449 12.39-2.278 23.336-14.627 27.956-6.627 2.48-20.961 2.698-29.333.448zm-1310.1-2.1c0-1.772.56-2.304 2.427-2.304 1.432 0 3.278-1.081 4.5-2.635 1.997-2.539 2.073-3.782 2.073-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.652-1.191-.022-1.75-.83-1.75-2.532v-2.5h60v21.132l-2.625-.317c-1.978-.238-2.903-1.157-3.75-3.722-1.972-5.972-5.264-7.493-17.166-7.934l-10.458-.387v28.484l8.043-.466c8.766-.507 13.181-2.635 13.776-6.641.236-1.586 1.023-2.15 3-2.149l2.68.001V850.056h-2.75c-2.218 0-2.75-.453-2.75-2.345 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.573 17.156 11.26 0 17.13-2.852 20.069-9.75 1.485-3.486 4.948-4.482 6.005-1.727.697 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.463v-2.304zm77 .321c0-1.83.677-2.51 2.946-2.964 5.276-1.055 5.526-2.536 5.865-34.661.352-33.448-.076-36.461-5.54-39-2.278-1.059-3.234-2.19-3.25-3.845l-.021-2.345 22.75.415c24.598.448 26.605.837 33.272 6.447 7.327 6.165 9.226 18.427 4.266 27.54-4.326 7.95-11.806 12.17-23.73 13.393l-6.246.64-3.104-7.745 3.696-.54c4.694-.687 9.792-3.66 12.493-7.286 1.535-2.062 2.085-4.224 2.035-8-.13-9.737-5.603-15.692-15.15-16.484l-5.404-.448.312 33.38c.34 36.402.5 37.425 6.061 38.564 2.07.424 2.75 1.151 2.75 2.939v2.375h-34v-2.375zm166-.365c0-1.55.594-2.26 1.89-2.26 1.038 0 2.95-.86 4.25-1.91l2.36-1.91.303-30.996c.339-34.697-.045-37.317-5.786-39.483-1.8-.68-3.017-1.857-3.017-2.92 0-1.618 1.386-1.803 15.25-2.03 29.183-.479 35.29-.151 40.037 2.146 6.152 2.979 9.027 7.29 9.534 14.301.228 3.152.137 6.836-.203 8.19-.985 3.924-5.646 8.718-10.8 11.105l-4.763 2.207 4.034 1.209c9.641 2.889 15.788 12.97 14.514 23.805-1.074 9.145-4.999 14.288-14.104 18.483-4.781 2.203-6.058 2.304-29.25 2.313l-24.25.01v-2.26zm44.102-7.53c5.097-3.405 7.12-8.041 6.552-15.016-.854-10.492-8.182-16.714-19.686-16.714h-6.112l.322 15.091c.309 14.465.42 15.17 2.683 17 3.454 2.793 11.798 2.608 16.241-.36zm-4.13-41.553c6.14-2.353 9.37-7.16 8.732-12.99-.858-7.834-7.171-12.188-17.672-12.188h-6.032v27l5.25-.054c2.887-.03 7.263-.826 9.722-1.769zm41.028 49.14c0-1.617.689-2.267 2.651-2.5 1.49-.179 3.57-1.553 4.75-3.14 2.025-2.724 2.1-3.906 2.1-33.5 0-24.587-.281-31.174-1.414-33.178-1.766-3.124-4.066-4.927-6.337-4.968-1.139-.02-1.75-.818-1.75-2.282 0-2.25 0-2.25 18-2.25s18 0 18 2.25c0 1.562-.595 2.25-1.944 2.25-1.07 0-3.207 1.086-4.75 2.413l-2.806 2.412-.29 31.538-.29 31.538 2.559 1.677c2.026 1.327 4.191 1.582 10.39 1.223 9.517-.55 13.973-2.906 16.624-8.784 1.764-3.911 3.63-4.861 6.264-3.189.99.628.828 2.476-.756 8.67-1.108 4.33-2.71 8.934-3.56 10.231l-1.545 2.36-55.895-.59v-2.183zm70 .308c0-1.847.678-2.51 3.045-2.984 5.521-1.104 5.956-3.832 5.952-37.36-.003-27.842-.132-29.991-1.97-33.004-1.08-1.773-3.103-3.51-4.496-3.859-1.722-.432-2.53-1.32-2.53-2.776 0-2.105.291-2.142 17-2.142s17 .037 17 2.142c0 1.447-.807 2.344-2.488 2.766-1.368.343-3.28 1.834-4.25 3.313-1.586 2.42-1.763 5.744-1.763 33.234 0 33.953.408 36.676 5.644 37.724 2.18.436 2.856 1.134 2.856 2.946v2.375h-34v-2.375zm239-.181c0-1.645.762-2.347 3.045-2.803 5.523-1.105 5.955-3.824 5.955-37.461 0-29.466-.032-29.932-2.284-33.282-1.256-1.869-3.281-3.542-4.5-3.718-1.592-.23-2.216-1.003-2.216-2.75v-2.43h59v10.5c0 10.403-.022 10.5-2.388 10.5-1.933 0-2.513-.66-3.038-3.459-1.115-5.944-5.2-7.94-17.155-8.382l-10.117-.375-.65 4.748c-.358 2.61-.651 9.023-.651 14.249v9.501l8.507-.53c9.366-.585 13.074-2.233 14.085-6.264.447-1.783 1.302-2.488 3.016-2.488h2.391v26h-2.5c-1.702 0-2.51-.558-2.531-1.75-.09-4.95-4.849-7.25-14.998-7.25h-8.162l.346 14.082c.419 17.058.317 16.918 12.325 16.918 10.598 0 16.11-2.539 18.995-8.75 1.453-3.128 2.56-4.25 4.191-4.25 1.22 0 2.521.492 2.893 1.094.911 1.475-3.525 17.73-5.331 19.537-1.193 1.192-6.27 1.4-29.832 1.222l-28.395-.214v-2.194zm110 .236c0-1.64.932-2.739 3.179-3.75 1.748-.787 4.11-2.701 5.25-4.254 2.009-2.738 2.071-3.967 2.071-40.5 0-42.381-.078-42.892-6.982-45.17-2.736-.903-3.518-1.7-3.518-3.583v-2.423h70v25h-3c-2.443 0-3-.417-3.003-2.25-.006-3.68-3.772-8.755-7.768-10.47-2.365-1.014-7.842-1.77-14.978-2.066l-11.25-.466v34.252l8.25-.056c10.996-.075 14.76-1.44 17.082-6.194 1.494-3.058 2.37-3.75 4.75-3.75h2.917v30.126l-3.21-.313c-2.206-.215-3.38-.94-3.75-2.313-1.587-5.882-7.706-8.5-19.87-8.5H879.6l.407 17.75c.465 20.257 1.317 23.217 7.306 25.383 2.628.95 3.51 1.847 3.51 3.568v2.299h-41v-2.32zm160-.18c0-1.828.535-2.5 1.986-2.5 3.064 0 6.564-6.232 14.17-25.234 10.185-25.445 19.844-51.318 19.844-53.156 0-1.257 1.042-1.606 4.75-1.59l4.75.02 13.488 34.571c14.647 37.541 17.347 43.377 20.762 44.875 1.38.606 2.25 1.863 2.25 3.25 0 2.262-.01 2.263-17 2.263h-17v-2.375c0-1.834.677-2.51 2.974-2.97 4.297-.859 4.556-3.768 1.216-13.654l-2.872-8.5h-23.632l-2.375 7c-2.993 8.82-2.82 14.857.44 15.32 1.629.23 2.25.99 2.25 2.75v2.43h-26v-2.5zm46-35.016c0-1.522-7.346-21.484-7.905-21.484-.365 0-1.384 1.912-2.266 4.25-.881 2.337-2.758 7.287-4.17 11l-2.569 6.75h8.455c4.65 0 8.455-.233 8.455-.516zm43 35.14c0-1.787.68-2.514 2.75-2.938 5.41-1.108 5.653-2.517 6.073-35.219.434-33.736.01-36.573-5.805-38.767-1.8-.68-3.018-1.857-3.018-2.92 0-1.602 1.128-1.78 11.25-1.778l11.25.002 6.5 8.226c3.575 4.525 12.8 15.67 20.5 24.768s15.032 17.883 16.293 19.521l2.294 2.98-.324-22.59c-.354-24.617-.913-27.157-6.275-28.503-1.554-.39-2.488-1.335-2.488-2.516 0-1.762.925-1.891 13.5-1.891 12.671 0 13.5.118 13.5 1.93 0 1.21-.803 2.05-2.15 2.25-1.182.176-3.094 1.59-4.25 3.141-2.03 2.728-2.11 4.044-2.406 39.75l-.307 36.928h-4.36c-3.943 0-4.674-.405-7.665-4.25-2.644-3.398-45.008-55.87-46.626-57.75-.237-.275-.234 10.75.01 24.5.487 27.882 1.096 31.218 5.873 32.173 2.208.442 2.885 1.134 2.885 2.952v2.375h-27v-2.375zm175-.124c0-1.486.573-2.5 1.412-2.5 1.976 0 5.682-4.693 8.33-10.545 3.68-8.14 20.794-52.314 23.73-61.256l2.726-8.301 8.94.602 13.268 34c7.297 18.7 14.068 35.575 15.048 37.5 2.235 4.394 5.49 8 7.22 8 .748 0 1.326 1.09 1.326 2.5v2.5h-34v-2.5c0-1.741.547-2.5 1.8-2.5 4.84 0 5.289-4.226 1.618-15.247l-2.582-7.754h-23.472l-2.128 6.75c-4.02 12.75-3.829 16.25.886 16.25 1.336 0 1.877.721 1.877 2.5v2.5h-26v-2.5zm42.43-44.75c-1.89-5.638-3.705-10.925-4.032-11.75-.356-.896-2.355 2.93-4.966 9.5-2.404 6.05-4.384 11.338-4.401 11.75-.017.412 3.764.75 8.403.75h8.434l-3.438-10.25zm45.57 44.75c0-1.956.51-2.5 2.345-2.5 1.29 0 3.203-.947 4.25-2.104 1.774-1.958 1.926-4.257 2.2-33.25.16-17.13.043-32.147-.263-33.369-.713-2.85-4.383-6.277-6.72-6.277-1.212 0-1.812-.745-1.812-2.25 0-2.246.037-2.25 17-2.25 16.35 0 17 .076 17 2.005 0 1.251-1.09 2.488-2.894 3.287-1.592.705-3.359 2.502-3.926 3.994-1.457 3.833-2.286 35.037-1.379 51.894.634 11.758 1.084 14.535 2.636 16.25 1.03 1.138 2.703 2.07 3.718 2.07 1.3 0 1.845.736 1.845 2.5v2.5h-34v-2.5zm112-.18c0-1.79.555-2.32 2.428-2.32 1.431 0 3.278-1.081 4.5-2.635 1.997-2.539 2.072-3.782 2.072-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.653-1.191-.021-1.75-.83-1.75-2.531v-2.5h60v21.132l-2.625-.317c-1.977-.238-2.903-1.157-3.75-3.723-1.971-5.971-5.263-7.492-17.166-7.933l-10.458-.387v28.226l6.25-.057c8.676-.078 12.907-1.705 14.75-5.672 1.099-2.364 2.17-3.233 4-3.248l2.5-.02v25.998h-2.75c-2.218 0-2.75-.454-2.75-2.346 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.572 17.156 11.26 0 17.13-2.851 20.07-9.75 1.485-3.486 4.947-4.482 6.004-1.727.698 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.43v-2.32zm-1339.9-91.243l-2.444-1.878 5.944-9.084c3.27-4.996 6.583-9.09 7.362-9.1 3.382-.037 14.148 2.277 13.878 2.983-.536 1.406-20.274 18.99-21.296 18.974-.55-.01-2.1-.862-3.444-1.895zM6.862 718.057h1523v9h-1523v-9zm579.64-20.465c-8-2.852-12.498-10.308-11.04-18.3.981-5.386 4.03-9.154 9.428-11.655l4.723-2.188-2.874-1.65c-1.633-.937-2.874-2.499-2.874-3.618 0-1.81 7.333-9.124 9.147-9.124.432 0-.196-1.664-1.395-3.697-5.121-8.68-1.024-21.228 8.537-26.148 5.176-2.664 6.923-2.777 25.048-1.616 10.426.668 10.814.775 10.264 2.828-.315 1.173-.579 2.47-.587 2.883-.008.413-1.77.75-3.918.75h-3.906l.528 5.814c1.15 12.684-7.871 21.371-22.434 21.604-7.565.121-11.226 1.725-8.275 3.626.82.528 5.704 2.324 10.853 3.99 16.556 5.358 19.615 8.054 18.909 16.664-.734 8.942-7.927 16.739-18.332 19.871-5.96 1.793-16.723 1.777-21.801-.033zm22.266-6.174c8.119-4.045 11.635-11.754 7.196-15.772-2.991-2.707-15.981-6.862-19.348-6.19-6.853 1.372-13.255 9.727-12.074 15.759 1.624 8.29 13.788 11.404 24.226 6.203zm2.678-45.247c6.095-3.717 8.449-14.265 4.347-19.479-5.61-7.133-16.29.817-16.389 12.202-.031 3.538.479 4.781 2.768 6.75 3.373 2.902 5.21 3.006 9.274.528zm37.92 23.205c-4.393-.897-6.747-3.83-7.247-9.028-1.278-13.31 9.92-32.817 22.451-39.11 6.514-3.271 19.363-3.601 27.923-.717.768.259.2 3.677-1.778 10.708-3.871 13.75-6.087 27.515-4.814 29.894.835 1.56 1.427 1.668 4.078.744 2.446-.853 3.286-.788 3.977.305 1.44 2.275.565 3.14-5.149 5.094-7.682 2.627-11.199 2.115-12.353-1.799l-.911-3.089-4.095 2.289c-6.912 3.863-16.36 5.878-22.082 4.709zm17.287-8.99c2.907-1.382 5.94-3.51 6.739-4.729 1.335-2.038 5.409-17.039 7-25.776.65-3.58.57-3.703-3.065-4.707-6.716-1.854-13.47 3.044-18.852 13.67-5.645 11.148-7.068 21.078-3.39 23.654 2.497 1.75 4.027 1.47 11.568-2.113zm473.47 8.696c-4.488-1.065-6.071-2.622-7.298-7.178-1.86-6.908 2.444-19.975 9.764-29.641 8.765-11.575 18.507-15.482 32.892-13.191 3.787.603 7.183 1.409 7.547 1.79.364.382-.9 6.77-2.808 14.195-1.908 7.425-3.556 16.425-3.662 20l-.191 6.5 4.25-.19c3.813-.17 4.25.045 4.25 2.092 0 1.91-.94 2.566-5.77 4.028-7.948 2.406-11.636 1.892-12.047-1.68-.174-1.513-.499-2.75-.722-2.75s-2.838 1.076-5.811 2.39c-4.784 2.116-14.533 4.787-16.45 4.507-.386-.056-2.16-.449-3.945-.872zm16.744-8.56c2.475-1.237 5.23-3.085 6.121-4.107 2.213-2.535 6.185-15.587 8.24-27.078.548-3.063.383-3.272-3.404-4.291-3.24-.873-4.63-.764-7.479.588-6.348 3.012-12.648 13.232-15.914 25.817-3.128 12.054.773 14.899 12.436 9.07zm-1084.5 6.285c-.298-1.237 1.484-10.539 3.961-20.671 4.883-19.976 4.842-21.599-.51-20.064-2.647.76-2.948.614-2.948-1.426 0-1.905.93-2.544 5.75-3.951 3.163-.923 7.325-1.782 9.25-1.908 3.295-.216 3.519-.033 3.821 3.124.177 1.845-1.548 10.985-3.833 20.312-2.285 9.327-3.886 17.655-3.56 18.508.474 1.235 1.525 1.41 5.163.865 4.352-.653 4.552-.577 4.238 1.607-.26 1.806-1.493 2.655-5.829 4.012-3.025.946-7.629 1.747-10.23 1.781-4.105.053-4.803-.237-5.273-2.189zm38.445.404l-2.28-1.846 7.747-34.035c4.26-18.72 7.6-35.326 7.419-36.904-.336-2.942-.699-3.094-4.578-1.917-1.919.582-2.25.311-2.25-1.838 0-2.913 3.512-4.32 13.25-5.308 5.579-.567 5.75-.512 5.75 1.84 0 1.332-1.575 9.56-3.5 18.283s-3.5 16.445-3.5 17.16c0 .97 1.1.812 4.341-.622 11.137-4.926 20.845-4.666 24.33.653 3.263 4.98 1.573 17.868-3.727 28.432-2.758 5.497-10.965 14.052-15.422 16.077-5.855 2.66-24.305 2.676-27.58.025zm25.305-6.341c5.013-3.549 10.603-15.54 12.179-26.13 1.579-10.61-5.434-12.725-16.634-5.02-2.366 1.628-4.264 4.051-5.244 6.694-1.813 4.892-5.548 20.856-5.548 23.714 0 4.208 9.682 4.68 15.246.742zm38.19 5.12c-2.708-2.828-2.932-3.625-2.875-10.25.144-16.88 9.74-31.988 22.96-36.146 6.595-2.074 12.398-1.371 16.287 1.974 2.243 1.93 2.692 3.135 2.692 7.226 0 10.295-9.389 18.104-22.9 19.048-3.905.272-7.43.995-7.834 1.605-1.126 1.701-.902 7.482.384 9.926 2.495 4.74 6.075 4.852 14.649.455 5.342-2.74 6.441-3.005 7.235-1.75 1.767 2.794.949 3.672-6.828 7.322-6.476 3.039-8.897 3.657-14.313 3.657-5.97 0-6.766-.258-9.456-3.066zm17.908-24.012c8.507-2.362 14.119-11.457 9.76-15.817-2.75-2.749-5.292-2.659-8.824.314-2.813 2.367-7.385 9.867-8.735 14.333-.57 1.882-.302 2.249 1.637 2.244 1.274-.003 4.047-.486 6.162-1.073zm33.656 26.738c0-.166 1.797-7.92 3.993-17.23s3.997-18.899 4-21.307l.006-4.377-4 .64c-3.545.566-4 .412-4-1.36 0-2.193 3.234-3.872 11.35-5.895 5.553-1.384 7.65-.435 7.65 3.462v2.348l3.55-2.409c6.242-4.236 10.056-5.013 14.587-2.97 2.17.979 3.807 2.265 3.639 2.86-2.715 9.57-4.26 12.58-6.458 12.58-1.965 0-2.317-.513-2.317-3.378 0-7.275-6.329-7.327-10.919-.09-2.86 4.51-5.817 14.765-8.164 28.317-.7 4.042-1.756 7.492-2.345 7.665-1.76.518-10.572 1.472-10.572 1.145zm50.162-.963c-1.104-1.33-.498-4.924 5.22-30.946l2.362-10.75h-3.372c-1.855 0-3.373-.255-3.373-.566 0-1.564 2.24-4.434 3.459-4.434 2.438 0 7.12-4.735 9.084-9.188 2.195-4.977 3.068-5.776 6.332-5.797 2.149-.014 2.313.295 1.724 3.235a222.415 222.415 0 00-1.253 7l-.601 3.75h4.627c4.727 0 5.423.764 4.021 4.418-.436 1.137-1.95 1.582-5.391 1.582-5.56 0-4.647-2-9.082 19.899-3.259 16.087-3.039 17.569 2.376 16.016 4.518-1.296 4.882-1.189 4.524 1.334-.243 1.707-1.527 2.654-5.32 3.92-6.122 2.045-13.857 2.31-15.338.526zm40.337-1.291c-7.319-7.897-2.023-30.354 9.628-40.83 4.754-4.274 12.176-7.575 17.034-7.575 3.075 0 9.85 3.15 10.868 5.054 1.612 3.012 1.11 10.206-.948 13.58-4.216 6.915-13.305 11.366-23.207 11.366h-5.874v5.278c0 10.245 4.258 12.042 15.449 6.523 3.568-1.759 6.684-2.996 6.924-2.75.24.247.592 1.35.782 2.45.277 1.604-1.113 2.74-7.042 5.75-6.42 3.258-8.291 3.75-14.298 3.75-6.155 0-7.174-.285-9.316-2.596zm17.602-24.558c5.284-1.792 8.99-4.82 10.59-8.652 1.348-3.224 1.31-3.717-.463-6.101-2.748-3.696-5.447-3.72-9.589-.083-3.195 2.806-8.64 12.211-8.64 14.926 0 1.395 3.848 1.352 8.102-.09zm375.57 26.486c-1.413-1.412-.497-7.313 4.3-27.711 6.526-27.75 10.033-44.087 10.033-46.736 0-1.896-.41-2.082-3.5-1.58-3.185.517-3.5.352-3.5-1.83 0-2.502 2.495-3.61 12.432-5.519 5.132-.986 6.568-.335 6.568 2.974 0 1.495-3.372 17.31-7.493 35.143-4.121 17.834-7.496 33.95-7.5 35.811l-.007 3.386 4.568-.626c4.295-.589 4.55-.494 4.25 1.583-.246 1.708-1.565 2.599-5.818 3.929-5.618 1.757-13.135 2.374-14.333 1.176zm37.697-.555c-1.227-1.985-.526-6.316 3.733-23.037 2.218-8.708 3.864-16.6 3.658-17.537-.394-1.799-.644-1.84-5.005-.813-2.322.547-2.75.326-2.75-1.423 0-2.384 4.269-4.501 12.045-5.976 5.556-1.054 7.955-.515 7.955 1.788 0 .861-2.037 10.06-4.527 20.444s-4.231 19.358-3.869 19.945c.404.653 2.38.831 5.096.459 4.155-.57 4.417-.468 4.119 1.6-.246 1.708-1.566 2.6-5.819 3.93-6.507 2.035-13.577 2.335-14.637.621zm36.934-.446c-.352-.917-.084-4.18.595-7.25 2.231-10.08 7.107-33.146 7.107-33.62 0-.254-1.383-.462-3.073-.462-4.341 0-3.531-2.795 1.574-5.434 3.04-1.57 4.793-3.566 7.305-8.316 2.86-5.409 3.685-6.25 6.126-6.25h2.82l-1.34 6.25c-.738 3.437-1.357 6.587-1.376 7-.02.412 2.214.75 4.964.75 5.225 0 5.347.105 4.37 3.75-.527 1.965-1.256 2.25-5.778 2.25h-5.174l-3.364 16.876c-1.85 9.281-3.092 17.582-2.76 18.445.486 1.268 1.234 1.388 3.897.624 4.583-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.748 2.174-14.045 2.159-14.887-.036zm41.18-.597c-2.489-2.141-2.92-3.316-3.277-8.917-.801-12.586 4.96-26.796 13.514-33.327 9.445-7.212 19.761-8.17 25.56-2.373 2.688 2.69 2.926 3.448 2.492 7.966-.952 9.905-10.445 17.1-23.434 17.76-8.124.413-8.978 1.39-7.385 8.433 1.735 7.667 4.886 8.454 14.896 3.72 6.63-3.137 8.157-3.135 8.157.01 0 3.196-12.002 8.33-20.577 8.803-6.382.351-7.359.148-9.944-2.076zm21.505-26.726c6.235-3.182 8.912-10.258 5.362-14.18-4.467-4.937-12.737 1.529-16.844 13.167l-1.509 4.276 4.507-.617c2.479-.34 6.296-1.53 8.483-2.647zm239.02 28.622c0-.151 1.797-7.892 3.993-17.203s3.997-18.898 4-21.306l.01-4.378-4 .64c-3.533.565-4 .409-4-1.337 0-2.429 1.76-3.412 9.861-5.511 7.039-1.824 9.14-1.122 9.14 3.056v2.347l3.549-2.408c6.224-4.224 10.059-5.012 14.546-2.989 2.147.969 3.905 2.03 3.905 2.36 0 .328-1.009 3.41-2.241 6.847-1.851 5.161-2.635 6.25-4.5 6.25-1.9 0-2.26-.537-2.26-3.377 0-6.835-5.876-7.345-10.264-.89-3.336 4.907-5.043 10.234-7.778 24.267-1.233 6.325-2.515 11.78-2.85 12.121-.6.613-11.107 2.042-11.107 1.51zm115.34-1.196c-.82-2.138.126-8.297 3.988-25.936l3.285-15-2.805-.313c-3.356-.375-3.923-3.698-.8-4.689 3.515-1.115 7.575-5.239 9.537-9.685 2.196-4.977 3.069-5.777 6.333-5.798 2.148-.013 2.312.295 1.723 3.235a222.473 222.473 0 00-1.253 7l-.6 3.75h4.627c4.727 0 5.423.765 4.02 4.418-.436 1.138-1.95 1.582-5.39 1.582-5.56 0-4.647-2-9.083 19.9-3.258 16.086-3.038 17.568 2.376 16.015 4.519-1.296 4.883-1.189 4.524 1.335-.242 1.707-1.527 2.653-5.32 3.92-6.657 2.223-14.36 2.358-15.162.266zm40.348-1.024c-7.581-7.58-2.34-30.242 9.443-40.837 4.754-4.274 12.176-7.575 17.034-7.575 3.074 0 9.849 3.15 10.868 5.055 1.612 3.011 1.11 10.206-.948 13.58-4.236 6.946-13.305 11.366-23.327 11.366h-5.994l.443 6.134c.705 9.742 4.284 11.072 15.246 5.667 3.568-1.76 6.684-2.997 6.924-2.75.24.247.592 1.349.782 2.449.277 1.605-1.113 2.74-7.041 5.75-6.362 3.23-8.32 3.75-14.114 3.75-5.904 0-7.044-.317-9.316-2.589zm20.964-26.062c6.994-3.476 10.129-11.537 5.768-14.836-2.896-2.191-4.996-1.822-8.841 1.554-3.218 2.825-8.576 12.198-8.576 15.002 0 1.655 6.911.635 11.648-1.72zm30.352 27.79c0-.421 1.826-8.53 4.058-18.02 2.232-9.492 3.92-18.688 3.75-20.438-.29-2.982-.537-3.168-3.953-2.973-2.857.163-3.753-.208-4.147-1.717-.41-1.566.456-2.278 4.644-3.824 2.831-1.044 6.835-2.205 8.898-2.579 3.878-.702 3.812-.756 6.238 5.115.046.111 2.719-1.126 5.939-2.75 6.89-3.476 8.046-3.572 12.235-1.017l3.163 1.928-2.163 6.544c-1.805 5.46-2.536 6.547-4.413 6.568-1.884.02-2.25-.514-2.25-3.276 0-8.714-8.293-6.99-12.832 2.666-1.14 2.427-3.4 10.791-5.02 18.59-1.62 7.797-3.105 14.308-3.297 14.47-.88.738-10.85 1.394-10.85.714zm50 .004c0-.45 1.605-7.079 3.567-14.73 2.143-8.357 3.641-16.709 3.75-20.914l.183-7-3.627.278c-2.85.218-3.731-.126-4.119-1.609-.403-1.541.442-2.17 4.626-3.445 9.092-2.769 11.233-2.968 12.996-1.205.893.893 1.624 2.717 1.624 4.053 0 1.335.184 2.428.41 2.428s3.195-1.317 6.6-2.927c8.06-3.812 18.742-5.811 21.931-4.104 2.081 1.113 2.23 1.688 1.622 6.271-.368 2.775-1.986 10.494-3.596 17.153-1.61 6.66-3.048 13.682-3.197 15.607-.27 3.5-.27 3.5 3.937 3.417 2.876-.057 4.39.392 4.783 1.417.793 2.066-.152 2.74-6.421 4.576-7.112 2.083-13.66 2.099-14.451.036-.328-.855 1.199-9.572 3.393-19.371 4.4-19.647 4.652-21.883 2.562-22.685-2.157-.828-9.808 2.924-14.374 7.05-3.758 3.394-4.239 4.45-6.546 14.362-1.37 5.884-2.809 12.872-3.197 15.528-.389 2.656-1.213 4.98-1.831 5.165-3.033.905-10.624 1.369-10.624.65zm68.587-.779c-.346-.899 1.44-10.163 3.967-20.586 2.526-10.423 4.36-19.563 4.072-20.31-.4-1.04-1.292-1.138-3.817-.414-1.813.52-3.411.946-3.552.946s-.257-1.043-.257-2.318c0-1.927.884-2.584 5.25-3.905 11.848-3.583 15.508-2.975 14.312 2.377-.288 1.29-2.35 9.965-4.58 19.279-2.23 9.313-3.805 17.586-3.499 18.383.425 1.108 1.631 1.303 5.105.827 4.274-.586 4.53-.49 4.23 1.585-.615 4.275-19.747 8.002-21.231 4.137zm37.728.013c-.667-1.738.143-6.512 4.051-23.878 4.321-19.2 4.259-17.5.64-17.5-4.397 0-3.665-2.758 1.441-5.433 2.939-1.539 4.75-3.599 7.095-8.067 2.561-4.878 3.672-6.061 5.944-6.33 3.035-.358 3.057-.104.915 10.58l-.651 3.25h5.232c4.36 0 5.13.264 4.625 1.582-.334.87-.607 2.22-.607 3 0 1.049-1.402 1.418-5.375 1.418h-5.375l-3.302 16.818c-1.816 9.25-3.021 17.55-2.678 18.445.511 1.332 1.225 1.456 3.92.683 4.584-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.67 2.152-14.046 2.156-14.87.01zm41.108-.692c-2.864-2.466-2.923-2.716-2.923-12.405 0-9.425.177-10.247 3.778-17.531 4.417-8.936 9.487-13.77 17.636-16.82 14.195-5.31 24.39 3.712 18.108 16.026-3.552 6.962-13.026 11.988-22.664 12.022-5.79.02-6.18.172-6.802 2.65-.836 3.33.21 8.354 2.21 10.622 2.273 2.578 6.184 2.146 13.16-1.451 5.202-2.683 6.355-2.966 7.125-1.75 1.77 2.8.893 3.876-5.801 7.11-5.154 2.49-8.424 3.354-13.827 3.652-6.417.354-7.35.155-10-2.126zm21.78-26.92c6.758-3.798 9.013-11.267 4.329-14.336-1.847-1.21-3.168-1.385-5.25-.695-3.527 1.17-8.563 7.707-10.645 13.817l-1.607 4.716 4.59-.629c2.525-.346 6.388-1.639 8.583-2.873zm-1512 26.512c.186-.966 1.233-1.92 2.327-2.12 2.97-.545 5.564-3.178 7.59-7.704 2.688-6.003 10.981-47.753 11.205-56.408.191-7.382.162-7.474-3.018-9.5-6.205-3.953-4.547-4.546 12.71-4.546 13.673 0 16 .222 16 1.525 0 .898-1.246 1.774-3.03 2.131-6.377 1.276-8.798 7.57-14.819 38.541-5.626 28.942-5.571 28.382-3.044 30.91 1.92 1.92 2.965 2.085 10.76 1.693 10.485-.528 14.272-2.293 17.934-8.355 2.885-4.776 3-4.857 5.068-3.546 1.148.727 1.105 1.653-.266 5.734-.9 2.677-2.654 6.667-3.9 8.867l-2.266 4-26.795.267c-25.09.25-26.774.155-26.457-1.489zm505.82.304c0-.78 1.688-2.242 3.75-3.25 2.614-1.277 4.415-3.197 5.943-6.332 2.865-5.88 11.526-48.467 11.684-57.456.12-6.793.048-7.004-3.088-9-6.711-4.272-5.194-4.544 25.279-4.544 27.955 0 28.554.042 27.943 1.967-.344 1.082-1.186 5.02-1.872 8.75-1.058 5.753-1.581 6.831-3.443 7.102-1.786.26-2.196-.172-2.196-2.316 0-6.638-3.939-8.503-17.958-8.503h-9.659l-2.773 12.75c-1.526 7.012-2.992 13.538-3.26 14.5-.435 1.571.413 1.748 8.333 1.735 9.958-.017 12.893-1.08 15.815-5.725 2.6-4.135 5.992-4.467 5.204-.51a2669.77 2669.77 0 00-2.319 12c-1.397 7.296-2.126 9.25-3.452 9.25-1.061 0-1.899-1.087-2.27-2.946-.325-1.623-1.616-3.498-2.875-4.175-2.4-1.291-18.125-1.866-19.29-.706-.673.67-3.626 15.083-4.921 24.02-.623 4.295-.464 4.833 1.883 6.37 2.061 1.351 4.274 1.594 11.303 1.24 10.435-.524 14.143-2.189 18.435-8.278 1.856-2.634 3.613-4.152 4.439-3.836 1.945.747 1.715 2.535-1.234 9.59-4.373 10.465-1.882 9.72-32.555 9.72-22.502 0-26.845-.229-26.845-1.417zm508 .02c0-.796 1.463-1.946 3.25-2.555 6.314-2.152 8.4-7.855 14.716-40.224 5.439-27.875 5.305-32.333-1.027-34.343-1.127-.358-1.874-1.175-1.66-1.816.279-.84 8.107-1.239 28.127-1.43 27.267-.262 27.73-.233 27.11 1.717-.346 1.09-1.19 5.035-1.877 8.766-1.058 5.753-1.58 6.83-3.443 7.102-1.853.27-2.195-.16-2.195-2.75 0-6.314-4.877-8.397-18.436-7.875l-7.936.305-2.78 13c-1.53 7.15-2.796 13.562-2.814 14.25-.05 1.846 15.23 1.682 18.875-.203 1.545-.799 3.377-2.824 4.071-4.5.774-1.867 1.99-3.047 3.141-3.047 2.328 0 2.343-.725-.272 12.75-1.834 9.446-2.478 11.25-4.017 11.25-1.107 0-1.832-.722-1.832-1.826 0-4.666-9.349-8.136-17.99-6.676l-3.82.646-2.03 11.178c-3.576 19.712-3.425 21.497 2.007 23.747 5.98 2.477 2.528 3.424-13.5 3.706-13.136.23-15.668.041-15.668-1.173zm-586.61-21.511c-4.472-2.032-8.394-8.31-8.394-13.44 0-7.943 7.022-15.047 14.847-15.02 9.359.034 15.143 5.75 15.15 14.97.01 11.718-10.734 18.426-21.602 13.49zm508.99.472c-1.716-.747-4.4-3.037-5.965-5.089-2.32-3.042-2.832-4.688-2.77-8.923.132-9.187 5.845-14.838 15-14.838 4.537 0 6.048.494 9.146 2.985 6.902 5.552 7.975 14.861 2.467 21.408-4.63 5.502-11.526 7.221-17.878 4.457zm-597.86-35.543c-1.966-2.174-2.108-1.946 9.256-14.886l3.834-4.366 5.696 1.275c3.133.7 5.696 1.576 5.696 1.946 0 .674-21.41 18.01-22.245 18.01-.245 0-1.251-.891-2.237-1.98zm508.75-.001l-2.218-1.797 7.549-8.611c4.152-4.736 7.93-8.611 8.397-8.611 2.44 0 11.011 2.458 10.775 3.09-.248.665-18.879 15.646-21.279 17.111-.553.338-2.003-.195-3.224-1.183zm664.77.009l-2.412-1.82 7.81-8.604c4.297-4.732 8.172-8.604 8.613-8.604 1.978 0 10.948 2.403 10.906 2.922-.045.54-18.928 15.777-21.382 17.252-.617.37-2.207-.145-3.534-1.147zm-1427.1-5.133c-4.063-4.063-.097-11.896 6.024-11.896 4.258 0 6.48 2.234 6.48 6.512 0 6.674-7.839 10.05-12.503 5.384zm674.85.713c-2.457-1.866-2.312-8.046.25-10.608 4.125-4.125 12-1.433 12 4.102 0 5.994-7.604 10.032-12.25 6.506zm664.15-.713c-4.134-4.134-.08-11.896 6.216-11.896 6.281 0 8.973 7.007 4.434 11.545-3.08 3.081-7.765 3.235-10.65.35zm-876.1-28.584c-1.527-1.702-1.163-2.314 6.071-10.182l7.696-8.37 5.719 1.28c3.145.703 5.696 1.545 5.668 1.87-.081.951-20.163 16.334-21.924 16.795-.882.23-2.335-.396-3.23-1.392z"></path><path fill="#e2011c" d="M880.1 520l2.333-6.033c3.954-10.9 8.054-19.217 13.971-28.343 6.269-9.667 20.067-23.907 25.807-26.632 7.054-3.35 15.824-4.53 26.67-3.587 9.312.81 37.925 5.489 49.471 8.09 8.788 1.98 21.654 2.17 27.71.408 11.665-3.394 18.576-9.954 21.856-20.747 2.516-8.28 2.492-15.804-.066-20.823-3.436-6.74-2.851-8.494 5.5-16.48 4.125-3.944 7.506-7.59 7.512-8.104.035-2.67-5.68-13.39-7.151-13.414-.902-.015-2.683-.872-3.958-1.906l-2.32-1.879 4.959-2.534c6.77-3.461 11.791-8.843 11.791-12.638 0-1.64-1.426-5.66-3.17-8.933-3.345-6.28-4.24-12.283-2.357-15.805 1.245-2.327 3.391-3.305 13.933-6.352 8.86-2.561 12.062-5.157 13.325-10.8 1.08-4.827.55-7.93-2.349-13.73-2.36-4.722-17.73-28.27-22.208-34.022-6.016-7.731-13.346-21.086-15.514-28.27-2.137-7.081-2.151-7.482-.592-16.635 3.296-19.35 1.369-35.391-8.01-66.67-6.97-23.245-8.841-28.89-11.024-33.238-3.945-7.863-3.418-9.704 4.677-16.331 3.875-3.173 7.475-6.572 8-7.553 2.445-4.57-.287-13.378-4.92-15.858-2.939-1.575-4.576-.494-7.56 4.994-2.262 4.158-3.148 4.945-5.568 4.945-3.94 0-4.63-1.653-2.115-5.058 2.933-3.97 2.701-4.607-1.907-5.225-3.449-.463-5.272-1.811-12.75-9.426-10.025-10.21-16.76-14.914-30.185-21.087-6.154-2.83-8.298-4.17-6.04-3.774 1.925.337 8.731.875 15.125 1.196 18.553.931 23.063-1.52 27.386-14.885 2.936-9.075 4.344-13.271-2.393-19.607L983.245 0h554.75v520h-657.9z"></path><path fill="#003189" d="M407.03 520c-4.026-.423-7.517-.606-7.758-.847-.423-.424 4.124-3.347 24.95-16.039 6.679-4.07 9.427-6.253 8.5-6.75-.755-.402-6.585-1.042-12.958-1.42-9.467-.562-12.21-.4-15 .881-1.878.863-9.372 3.133-16.653 5.044-18.06 4.739-24.137 7.993-29.936 16.027l-2.166 3.103H-.001V0h706.34l-13.686 8.934c-7.535 3.74-16.29 8.936-19.458 11.545-10.744 8.85-25.211 28.985-28.824 40.115-1.328 4.09-2.534 5.624-6.608 8.404-6.217 4.243-13.664 12.334-19.83 21.546-8.373 12.508-24.332 40.698-27.468 48.518-4.864 12.131-4.422 21.37 2.757 57.622 3.16 15.961 6.58 32.171 7.6 36.024 1.02 3.853 2.135 10.382 2.479 14.51.615 7.37 1.094 8.966 5.408 18.012 1.182 2.477 2.147 5.288 2.145 6.246-.002.959.897 2.305 1.997 2.993 1.141.712 2 2.333 2 3.772 0 1.734 2.278 5.024 7.28 10.516 11.445 12.567 19.72 24.347 19.72 28.072 0 3.06-4.488 3.85-11.72 2.065-8.452-2.087-15.367-6.595-26.03-16.972-4.537-4.416-8.25-7.384-8.25-6.597 0 .787 3.111 4.893 6.914 9.123 7.562 8.414 8.748 10.709 7.113 13.767-1.43 2.675-4.911 3.454-9.62 2.153-5.434-1.502-8.618.591-7.722 5.075.55 2.751.4 3.075-1.155 2.478-3.072-1.18-9.794-2.53-15.838-3.184-5.552-.6-5.963-.843-9.325-5.525-2.547-3.548-4.529-5.182-7.191-5.93-9.923-2.786-34.604-7.08-51.175-8.905-29.128-3.207-36.144-3.458-50.1-1.798-10.716 1.275-13.63 2.024-19.5 5.008-10.39 5.283-28.4 21.837-28.4 26.104 0 2.002 3.968 1.296 8.5-1.513 13.758-8.524 60.88-20.554 84-21.445 11.458-.442 10.837.107-2.91 2.571-3.8.682-12.8 2.987-20 5.124s-19.614 5.43-27.589 7.317c-7.975 1.888-16.975 4.321-20 5.408l-5.5 1.975 8.5.093c43.31.474 92.681 14.223 112.77 31.408 8.646 7.394 11.811 8.292 24.528 6.952 17.428-1.835 39.985-10.156 49.878-18.397 4.293-3.576 7.825-4.998 7.818-3.148-.01 3.269-5.697 20.84-8.155 25.2-2.74 4.86-2.896 5.559-1.469 6.603.878.642 1.344 1.42 1.036 1.728-.308.308.374.856 1.515 1.219 3.282 1.042 2.456 2.05-2.781 3.393-5.107 1.31-9.143 3.602-9.143 5.193 0 .52.701.944 1.559.944 2.568 0 .652 1.796-2.704 2.533-2.297.505-2.756.918-1.738 1.563.998.633 1.035.881.133.892-.688.008-1.25 1.031-1.25 2.273 0 1.546-.946 2.676-3 3.586-5.007 2.218-3.603 3.415 3.25 2.773 3.437-.322 5.575-.319 4.75.007-.825.326-6.45 2.873-12.5 5.659-6.05 2.786-13.925 6.093-17.5 7.35-4.047 1.421-6.632 2.919-6.85 3.968-.348 1.684 1.53 1.628 6.257-.187.876-.336 1.582-.225 1.568.246-.013.472-10.429 6.487-23.145 13.366-12.716 6.88-24.615 13.972-26.442 15.76s-4.164 3.252-5.194 3.252c-1.036 0-2.391 1.139-3.033 2.55-1.943 4.265-1.54 4.784 3.09 3.988 6.878-1.181 10.03-1.116 10.487.217.247.721-.402 1.25-1.532 1.25-1.079 0-2.5.65-3.157 1.442-.657.793-2.394 1.581-3.859 1.752-1.704.198-3.388 1.456-4.676 3.494-1.108 1.752-2.914 3.416-4.014 3.699s.475.33 3.5.105c44.98-3.348 53.36-5.013 71.5-14.211 15.476-7.847 31.54-19.513 42.97-31.202 3.282-3.358 6.32-6.105 6.75-6.105 1.553 0 .71 5.613-1.584 10.543-3.971 8.533-12.303 16.394-29.428 27.764-8.64 5.735-17.957 11.137-20.707 12.004-8.592 2.707-22.463 5.591-37.004 7.694-47.373 6.85-65.502 12.045-83.46 23.918-3.006 1.987-6.16 3.495-7.011 3.35-.85-.143-3.117 1.081-5.036 2.722-5.397 4.616-1.487 3.835 9.707-1.938 11.471-5.916 16.85-6.848 7.804-1.353C468.261 515.778 459.806 520 451.53 520h-44.498zm-58.846-58.006c1.798-.752 7.746-4.084 13.218-7.405 5.472-3.321 11.974-6.957 14.449-8.08 2.475-1.123 9.45-4.276 15.5-7.007 12.681-5.722 31.29-11.123 32.36-9.39.376.609 3.149 1.28 6.162 1.49 4.217.295 4.96.566 3.228 1.178-1.238.437-2.25 1.192-2.25 1.678 0 1.81 9.359 1.267 13.299-.772 1.545-.799 5.034-1.717 7.755-2.04 3.382-.4 4.946-1.044 4.946-2.035 0-1.131.859-1.304 3.913-.788 4.203.71 13.243-1 37.587-7.11 16.486-4.138 28.973-8.303 39.94-13.322l7.94-3.633-7.94-5.089c-19.352-12.402-38.785-20.018-81.44-31.916-7.425-2.07-13.95-4.213-14.5-4.76-.663-.66-.326-.752 1-.276 4.26 1.528 7.5 1.821 7.5.678 0-1.483-3.22-2.679-9.548-3.545-5.787-.792-9.522-2.52-5.502-2.544 6.222-.04-4.474-3.985-16.45-6.068-8.866-1.542-9.376-1.872-5.673-3.667 3.227-1.564 6.698-7.482 5.785-9.864-.776-2.021-1.742-1.813-6.538 1.41-9.245 6.213-17.725 16.388-22.49 26.986-2.72 6.045-1.778 6.6 12.214 7.198 11.458.49 11.64.534 8.702 2.113-1.65.886-4.96 1.912-7.355 2.28-8.135 1.248-12.654 5.11-8.62 7.369 1.197.67.722 1.236-2.219 2.639-3.296 1.573-3.528 1.906-1.944 2.793.989.554 3.864.842 6.39.641 3.51-.279 5.114.1 6.803 1.605l2.211 1.97-4.436 2.816c-2.44 1.549-5.2 4.26-6.133 6.024-.933 1.764-4.284 5.963-7.447 9.33s-5.75 6.848-5.75 7.737-4.612 5.31-10.25 9.822c-15.16 12.136-21.75 18.806-21.75 22.017 0 1.7-.856 3.23-2.36 4.215-4.732 3.103-7.203 6.688-4.608 6.688.568 0 2.504-.615 4.301-1.366zm116.98-11.692c3.747-.501 8.086-1.663 9.642-2.583l2.83-1.673-9.652-4.812-4.816 1.952a471.849 471.849 0 01-8.152 3.215c-7.377 2.794-8.34 6.549-1.415 5.518a984.68 984.68 0 0111.563-1.617zm-169.31-45.504c22.285-23.316 38.011-37.148 57.972-50.99 6.783-4.704 11.562-7.424 11.798-6.715.648 1.945 3.554 1.373 8.284-1.633 5.436-3.453 8.156-6.948 14.941-19.202 7.04-12.712 9.7-15.889 19.862-23.719a1632.238 1632.238 0 0015.555-12.152c5.479-4.353 6.795-5.04 6.344-3.317-.349 1.336-.108 2.176.624 2.176 2.272 0 12.976-4.572 13.353-5.703.59-1.769-10.287-3.595-18.33-3.078-6.177.396-8.364 1.113-16.028 5.253-18.008 9.728-31.017 20.221-55.857 45.055-17.876 17.872-31.958 29.855-39.076 33.252-2.318 1.106-4.064 3.425-6.876 9.132-5.465 11.093-15.223 27.012-24.485 39.947-8.754 12.225-10.633 16.454-3.83 8.62 2.338-2.691 9.425-10.308 15.75-16.926zm223 109.47c26.764-5.566 29.718-5.98 48.5-6.804 21.09-.924 23.777-1.472 36.464-7.439 4.065-1.911 5.659-2.259 6.224-1.357.983 1.57 7.864-2.18 21.312-11.615 5.5-3.859 13.278-8.79 17.284-10.959 6.036-3.267 7.883-3.83 10.787-3.285 3.1.582 4.018.204 7.978-3.283 10.974-9.666 20.344-14.134 29.702-14.164 2.782-.009 3.75.403 3.75 1.596 0 1.019.55 1.397 1.5 1.033 2.787-1.071 1.525.153-5.645 5.472-8.301 6.158-7.485 8.007.954 2.162 8.17-5.659 8.19-5.667 8.19-3.379 0 1.304-3.075 4.578-8.75 9.315-12.91 10.778-22.052 19.692-35.97 35.073l-12.45 13.361h-158.33l28.5-5.728zm.25-203.7c.962-.252 2.537-.252 3.5 0 .962.252.175.458-1.75.458s-2.713-.206-1.75-.458z"></path><path fill="#7f7f7f" d="M985.58 272.52c-4.367-.66-2.114-2.284 3.171-2.284 5.302 0 8.096-2.036 8.096-5.9 0-1.816-.395-2.114-2.089-1.576-1.461.464-2.502.073-3.463-1.3-.898-1.283-3.068-2.188-6.262-2.612-5.704-.757-14.94-6.268-13.285-7.926.566-.566 3.503-1.234 6.526-1.485 5.211-.432 5.556-.632 6.613-3.838.791-2.4 1.892-3.565 3.788-4.01 1.47-.347 3.797-1.667 5.172-2.934 1.375-1.268 5.875-4.508 10-7.2 6.935-4.527 11.231-9.353 9.695-10.89-1.618-1.62-16.634-3.381-23.695-2.78-8.203.697-22.338 3.679-28.25 5.959-6.068 2.34-4.294.302 4.043-4.645 11.255-6.679 32.92-12.905 44.901-12.905 4.649 0 20.203 3.676 22.055 5.212 3.63 3.01-.329 13.574-7.06 18.845l-2.812 2.201 2.311 2.466 2.311 2.466-2.36 1.917c-1.299 1.054-3.077 1.916-3.953 1.916s-3.043 1.407-4.816 3.128c-2.73 2.648-3.083 3.502-2.298 5.569.608 1.6.549 3.15-.173 4.498-.673 1.26-.842 4.123-.435 7.384.831 6.657-.368 9.042-5.226 10.392-3.603 1.001-16.793 1.196-22.505.332z"></path></svg></a>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/tarteaucitron/tarteaucitron.js"></script>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/apropos](https://onvs.fabrique.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"><span class="ml-3 text-xl font-bold text-gray-900 font-evolventa">ONVS | Observatoire national des violences en santé</span></a>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/tarteaucitron/tarteaucitron.js"></script>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/polyfills-8bebc7aacc0076174a73.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/polyfills-8bebc7aacc0076174a73.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP](https://onvs.fabrique.social.gouv.fr/?email=foo-bar%40example.com&password=ZAP)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1538 906" class="w-24"><path fill="#fff" d="M0 0H1538V520H0z"></path><path d="M1228.2 905.42c-.849-.346-.901-1.272-.188-3.318.903-2.59 1.32-2.793 4.791-2.327 3.149.422 4.075.12 5.39-1.758 2.53-3.612.578-6.217-4.013-5.356-3.52.66-3.576.621-2.897-2.081 2.154-8.583 2.358-8.11-4.06-9.383-7.642-1.516-14.952-5.796-20.568-12.041-8.433-9.379-11.356-18.866-10.516-34.117.428-7.77 1.09-10.798 3.54-16.201 7.496-16.534 24.621-24.966 47.637-23.455 4.984.327 11.311 1.175 14.061 1.885l5 1.291.288 9.25.287 9.25h-3.037c-1.792 0-3.038-.522-3.038-1.272 0-2.598-6.123-8.61-10.454-10.264-5.59-2.135-16.434-1.648-21.866.981-12.416 6.01-18.077 21.61-14.302 39.414 1.754 8.272 4.652 13.821 10.192 19.515 5.251 5.398 10.548 7.577 18.485 7.604 8.394.028 14.271-3.345 17.967-10.312 2.511-4.734 3.407-5.315 5.83-3.78 1.127.715 1.138 2.36.063 9.955l-1.288 9.098-4.563 1.577c-2.51.867-8.276 1.848-12.813 2.179-7.824.57-8.25.723-8.25 2.953 0 1.78.553 2.352 2.277 2.352 3.34 0 6.473 2.586 7.213 5.954.86 3.913-1.925 9.702-5.575 11.59-2.64 1.365-12.927 1.905-15.592.818zm-594.96-4.209c-8.657-2.552-16.123-6.402-25.103-12.945l-7.758-5.652-12-.615c-13.306-.683-17.955-2.168-26.562-8.486-18.961-13.918-19.65-49.337-1.294-66.576 13.818-12.978 38.127-15.66 55.625-6.136 23.622 12.857 26.13 50.785 4.672 70.652-3.33 3.083-6.592 5.607-7.248 5.609-2.044.007 21.457 12.862 28.328 15.496 7.592 2.91 16.462 3.3 22.96 1.007 4.727-1.668 5.535-1.468 6.328 1.565.463 1.772-.345 2.518-5.13 4.733-7.54 3.493-23.342 4.142-32.817 1.348zm-29.323-30.905c16.745-8.747 19.933-36.76 6.22-54.65-12.71-16.579-34.985-14.069-43.357 4.886-7.564 17.124 1.066 43.6 16.498 50.61 6.246 2.836 14.217 2.51 20.64-.845zM78.377 880.67c-4.593-2.004-9.632-8.24-17.595-21.774-12.234-20.792-14.527-23.838-17.942-23.838h-2.963l.02 11.25c.037 20.533 2.102 27.56 8.575 29.184 1.732.435 2.405 1.299 2.405 3.085v2.481h-41v-2.355c0-1.784.764-2.575 3.149-3.259 1.731-.496 4.094-2.17 5.25-3.718 2.05-2.748 2.101-3.748 2.101-41.669s-.05-38.921-2.101-41.668c-1.156-1.548-3.519-3.221-5.25-3.718-2.301-.66-3.149-1.493-3.149-3.097 0-2.186.113-2.198 25.4-2.85 26.912-.692 32.843-.18 40.428 3.493 6.627 3.208 12.151 12.928 12.166 21.409.018 9.71-7.203 20.676-16.73 25.409l-4.988 2.478 11.024 16.522c12.969 19.437 17.042 24.63 20.873 26.61 3.577 1.85 3.92 5.885.577 6.781-4.022 1.078-17.172.586-20.25-.757zm-25.023-55.728c13.406-3.721 17.93-22.35 7.785-32.053-4.77-4.56-9.834-6.216-16.297-5.327l-4.965.683v37.812l4.75-.006c2.612-.003 6.54-.502 8.727-1.11zm230.4 55.735c-5.48-1.958-10.648-5.446-13.384-9.032-4.972-6.519-5.494-9.946-5.555-36.462-.063-27.716-.585-30.761-5.671-33.124-2.044-.95-3.237-2.234-3.25-3.5-.02-1.923.639-2 16.979-2 16.963 0 17 .005 16.999 2.25 0 1.511-.6 2.25-1.826 2.25-1.004 0-2.917 1.16-4.25 2.58l-2.424 2.58v27.17c0 25.57.122 27.403 2.077 31.13 3.05 5.813 9.132 8.803 16.954 8.334 8.416-.504 12.97-3.49 16.33-10.706 2.578-5.538 2.602-5.812 2.62-30.132.016-21.778-.18-24.847-1.744-27.234-.97-1.48-2.882-2.971-4.25-3.315-1.553-.39-2.488-1.334-2.488-2.516 0-1.762.925-1.891 13.5-1.891s13.5.13 13.5 1.891c0 1.178-.932 2.126-2.47 2.512-4.606 1.156-4.973 3.3-5.518 32.172l-.512 27.075-3.01 5.882c-3.553 6.943-9.308 11.743-16.715 13.942-6.248 1.856-20.876 1.938-25.892.145zm390 0c-5.542-1.98-10.657-5.458-13.488-9.169-4.714-6.18-5.39-10.75-5.45-36.859-.064-27.146-.602-30.235-5.673-32.59-2.043-.95-3.236-2.235-3.25-3.5-.02-1.923.64-2 16.98-2 16.802 0 17 .025 16.999 2.18 0 1.465-.706 2.285-2.15 2.5-1.182.175-3.095 1.589-4.25 3.14-1.968 2.644-2.121 4.292-2.43 26.206-.38 26.924.371 32.602 4.933 37.267 8.252 8.441 25.405 6.083 30.266-4.16 3.061-6.452 3.847-14.534 3.47-35.698-.398-22.41-1.067-25.202-6.352-26.53-1.553-.389-2.488-1.334-2.488-2.515 0-1.762.925-1.892 13.5-1.892 12.543 0 13.5.134 13.5 1.88 0 1.133-1.16 2.358-2.928 3.09-1.61.668-3.272 1.96-3.693 2.872-.421.912-1.016 13.843-1.322 28.735l-.557 27.076-3.01 5.88c-3.553 6.942-9.309 11.743-16.715 13.942-6.248 1.855-20.876 1.937-25.892.145zm316.53-.042c-3.997-1.74-8.751-7.666-16.108-20.077-9.5-16.028-10.579-17.474-13.055-17.488-2.214-.012-2.25.187-2.25 12.52 0 14.952 1.248 19.168 5.956 20.11 2.367.473 3.044 1.137 3.044 2.983v2.375h-34v-2.375c0-1.846.677-2.51 3.044-2.984 5.697-1.139 6.1-3.847 5.759-38.656l-.303-30.827-2.424-2.579c-1.334-1.418-3.246-2.579-4.25-2.579-1.132 0-1.826-.727-1.826-1.914 0-1.65 1.015-2.01 7.335-2.602 4.034-.378 15.172-.516 24.75-.306 15.572.342 17.856.615 21.581 2.58 6.617 3.49 10.334 10.297 10.334 18.924 0 8.195-4.698 15.393-13.227 20.264-2.723 1.555-4.482 3.117-3.909 3.47.573.355 4.992 6.594 9.82 13.865 9.478 14.274 14.746 20.72 16.932 20.72 1.928 0 1.757 4.643-.198 5.393-2.838 1.089-13.844.561-17.006-.816zm-18.482-47.042c3.975-2.055 7.878-6.999 8.611-10.906.941-5.016-1.267-11.635-5.083-15.233-3.533-3.332-6.946-4.288-12.854-3.598l-3.604.42v30.782h5.05c2.777 0 6.323-.658 7.88-1.463zm445.12 46.868c-2.996-.805-5.626-1.643-5.846-1.863-.219-.22-.95-4.706-1.625-9.97l-1.226-9.571h2.822c1.552 0 2.821.373 2.821.829 0 2.601 6.563 10.265 10.368 12.107 10.285 4.978 22.637.291 22.63-8.587-.01-5.827-2.836-9.31-12.47-15.35-13.52-8.474-18.74-12.95-21.437-18.374-2.688-5.41-3.168-13.826-1.14-19.974 1.34-4.058 7.622-10.117 12.91-12.452 5.325-2.35 21.989-2.275 28.89.131l5.25 1.83v17.84h-2.89c-2.245 0-3.032-.556-3.515-2.482-1.048-4.176-6.41-9.391-10.896-10.6-12.003-3.232-21.617 9.082-14.082 18.037 1.439 1.71 7.963 6.733 14.498 11.162 12.658 8.579 17.334 13.25 18.9 18.882 3.449 12.39-2.278 23.336-14.627 27.956-6.627 2.48-20.961 2.698-29.333.448zm-1310.1-2.1c0-1.772.56-2.304 2.427-2.304 1.432 0 3.278-1.081 4.5-2.635 1.997-2.539 2.073-3.782 2.073-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.652-1.191-.022-1.75-.83-1.75-2.532v-2.5h60v21.132l-2.625-.317c-1.978-.238-2.903-1.157-3.75-3.722-1.972-5.972-5.264-7.493-17.166-7.934l-10.458-.387v28.484l8.043-.466c8.766-.507 13.181-2.635 13.776-6.641.236-1.586 1.023-2.15 3-2.149l2.68.001V850.056h-2.75c-2.218 0-2.75-.453-2.75-2.345 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.573 17.156 11.26 0 17.13-2.852 20.069-9.75 1.485-3.486 4.948-4.482 6.005-1.727.697 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.463v-2.304zm77 .321c0-1.83.677-2.51 2.946-2.964 5.276-1.055 5.526-2.536 5.865-34.661.352-33.448-.076-36.461-5.54-39-2.278-1.059-3.234-2.19-3.25-3.845l-.021-2.345 22.75.415c24.598.448 26.605.837 33.272 6.447 7.327 6.165 9.226 18.427 4.266 27.54-4.326 7.95-11.806 12.17-23.73 13.393l-6.246.64-3.104-7.745 3.696-.54c4.694-.687 9.792-3.66 12.493-7.286 1.535-2.062 2.085-4.224 2.035-8-.13-9.737-5.603-15.692-15.15-16.484l-5.404-.448.312 33.38c.34 36.402.5 37.425 6.061 38.564 2.07.424 2.75 1.151 2.75 2.939v2.375h-34v-2.375zm166-.365c0-1.55.594-2.26 1.89-2.26 1.038 0 2.95-.86 4.25-1.91l2.36-1.91.303-30.996c.339-34.697-.045-37.317-5.786-39.483-1.8-.68-3.017-1.857-3.017-2.92 0-1.618 1.386-1.803 15.25-2.03 29.183-.479 35.29-.151 40.037 2.146 6.152 2.979 9.027 7.29 9.534 14.301.228 3.152.137 6.836-.203 8.19-.985 3.924-5.646 8.718-10.8 11.105l-4.763 2.207 4.034 1.209c9.641 2.889 15.788 12.97 14.514 23.805-1.074 9.145-4.999 14.288-14.104 18.483-4.781 2.203-6.058 2.304-29.25 2.313l-24.25.01v-2.26zm44.102-7.53c5.097-3.405 7.12-8.041 6.552-15.016-.854-10.492-8.182-16.714-19.686-16.714h-6.112l.322 15.091c.309 14.465.42 15.17 2.683 17 3.454 2.793 11.798 2.608 16.241-.36zm-4.13-41.553c6.14-2.353 9.37-7.16 8.732-12.99-.858-7.834-7.171-12.188-17.672-12.188h-6.032v27l5.25-.054c2.887-.03 7.263-.826 9.722-1.769zm41.028 49.14c0-1.617.689-2.267 2.651-2.5 1.49-.179 3.57-1.553 4.75-3.14 2.025-2.724 2.1-3.906 2.1-33.5 0-24.587-.281-31.174-1.414-33.178-1.766-3.124-4.066-4.927-6.337-4.968-1.139-.02-1.75-.818-1.75-2.282 0-2.25 0-2.25 18-2.25s18 0 18 2.25c0 1.562-.595 2.25-1.944 2.25-1.07 0-3.207 1.086-4.75 2.413l-2.806 2.412-.29 31.538-.29 31.538 2.559 1.677c2.026 1.327 4.191 1.582 10.39 1.223 9.517-.55 13.973-2.906 16.624-8.784 1.764-3.911 3.63-4.861 6.264-3.189.99.628.828 2.476-.756 8.67-1.108 4.33-2.71 8.934-3.56 10.231l-1.545 2.36-55.895-.59v-2.183zm70 .308c0-1.847.678-2.51 3.045-2.984 5.521-1.104 5.956-3.832 5.952-37.36-.003-27.842-.132-29.991-1.97-33.004-1.08-1.773-3.103-3.51-4.496-3.859-1.722-.432-2.53-1.32-2.53-2.776 0-2.105.291-2.142 17-2.142s17 .037 17 2.142c0 1.447-.807 2.344-2.488 2.766-1.368.343-3.28 1.834-4.25 3.313-1.586 2.42-1.763 5.744-1.763 33.234 0 33.953.408 36.676 5.644 37.724 2.18.436 2.856 1.134 2.856 2.946v2.375h-34v-2.375zm239-.181c0-1.645.762-2.347 3.045-2.803 5.523-1.105 5.955-3.824 5.955-37.461 0-29.466-.032-29.932-2.284-33.282-1.256-1.869-3.281-3.542-4.5-3.718-1.592-.23-2.216-1.003-2.216-2.75v-2.43h59v10.5c0 10.403-.022 10.5-2.388 10.5-1.933 0-2.513-.66-3.038-3.459-1.115-5.944-5.2-7.94-17.155-8.382l-10.117-.375-.65 4.748c-.358 2.61-.651 9.023-.651 14.249v9.501l8.507-.53c9.366-.585 13.074-2.233 14.085-6.264.447-1.783 1.302-2.488 3.016-2.488h2.391v26h-2.5c-1.702 0-2.51-.558-2.531-1.75-.09-4.95-4.849-7.25-14.998-7.25h-8.162l.346 14.082c.419 17.058.317 16.918 12.325 16.918 10.598 0 16.11-2.539 18.995-8.75 1.453-3.128 2.56-4.25 4.191-4.25 1.22 0 2.521.492 2.893 1.094.911 1.475-3.525 17.73-5.331 19.537-1.193 1.192-6.27 1.4-29.832 1.222l-28.395-.214v-2.194zm110 .236c0-1.64.932-2.739 3.179-3.75 1.748-.787 4.11-2.701 5.25-4.254 2.009-2.738 2.071-3.967 2.071-40.5 0-42.381-.078-42.892-6.982-45.17-2.736-.903-3.518-1.7-3.518-3.583v-2.423h70v25h-3c-2.443 0-3-.417-3.003-2.25-.006-3.68-3.772-8.755-7.768-10.47-2.365-1.014-7.842-1.77-14.978-2.066l-11.25-.466v34.252l8.25-.056c10.996-.075 14.76-1.44 17.082-6.194 1.494-3.058 2.37-3.75 4.75-3.75h2.917v30.126l-3.21-.313c-2.206-.215-3.38-.94-3.75-2.313-1.587-5.882-7.706-8.5-19.87-8.5H879.6l.407 17.75c.465 20.257 1.317 23.217 7.306 25.383 2.628.95 3.51 1.847 3.51 3.568v2.299h-41v-2.32zm160-.18c0-1.828.535-2.5 1.986-2.5 3.064 0 6.564-6.232 14.17-25.234 10.185-25.445 19.844-51.318 19.844-53.156 0-1.257 1.042-1.606 4.75-1.59l4.75.02 13.488 34.571c14.647 37.541 17.347 43.377 20.762 44.875 1.38.606 2.25 1.863 2.25 3.25 0 2.262-.01 2.263-17 2.263h-17v-2.375c0-1.834.677-2.51 2.974-2.97 4.297-.859 4.556-3.768 1.216-13.654l-2.872-8.5h-23.632l-2.375 7c-2.993 8.82-2.82 14.857.44 15.32 1.629.23 2.25.99 2.25 2.75v2.43h-26v-2.5zm46-35.016c0-1.522-7.346-21.484-7.905-21.484-.365 0-1.384 1.912-2.266 4.25-.881 2.337-2.758 7.287-4.17 11l-2.569 6.75h8.455c4.65 0 8.455-.233 8.455-.516zm43 35.14c0-1.787.68-2.514 2.75-2.938 5.41-1.108 5.653-2.517 6.073-35.219.434-33.736.01-36.573-5.805-38.767-1.8-.68-3.018-1.857-3.018-2.92 0-1.602 1.128-1.78 11.25-1.778l11.25.002 6.5 8.226c3.575 4.525 12.8 15.67 20.5 24.768s15.032 17.883 16.293 19.521l2.294 2.98-.324-22.59c-.354-24.617-.913-27.157-6.275-28.503-1.554-.39-2.488-1.335-2.488-2.516 0-1.762.925-1.891 13.5-1.891 12.671 0 13.5.118 13.5 1.93 0 1.21-.803 2.05-2.15 2.25-1.182.176-3.094 1.59-4.25 3.141-2.03 2.728-2.11 4.044-2.406 39.75l-.307 36.928h-4.36c-3.943 0-4.674-.405-7.665-4.25-2.644-3.398-45.008-55.87-46.626-57.75-.237-.275-.234 10.75.01 24.5.487 27.882 1.096 31.218 5.873 32.173 2.208.442 2.885 1.134 2.885 2.952v2.375h-27v-2.375zm175-.124c0-1.486.573-2.5 1.412-2.5 1.976 0 5.682-4.693 8.33-10.545 3.68-8.14 20.794-52.314 23.73-61.256l2.726-8.301 8.94.602 13.268 34c7.297 18.7 14.068 35.575 15.048 37.5 2.235 4.394 5.49 8 7.22 8 .748 0 1.326 1.09 1.326 2.5v2.5h-34v-2.5c0-1.741.547-2.5 1.8-2.5 4.84 0 5.289-4.226 1.618-15.247l-2.582-7.754h-23.472l-2.128 6.75c-4.02 12.75-3.829 16.25.886 16.25 1.336 0 1.877.721 1.877 2.5v2.5h-26v-2.5zm42.43-44.75c-1.89-5.638-3.705-10.925-4.032-11.75-.356-.896-2.355 2.93-4.966 9.5-2.404 6.05-4.384 11.338-4.401 11.75-.017.412 3.764.75 8.403.75h8.434l-3.438-10.25zm45.57 44.75c0-1.956.51-2.5 2.345-2.5 1.29 0 3.203-.947 4.25-2.104 1.774-1.958 1.926-4.257 2.2-33.25.16-17.13.043-32.147-.263-33.369-.713-2.85-4.383-6.277-6.72-6.277-1.212 0-1.812-.745-1.812-2.25 0-2.246.037-2.25 17-2.25 16.35 0 17 .076 17 2.005 0 1.251-1.09 2.488-2.894 3.287-1.592.705-3.359 2.502-3.926 3.994-1.457 3.833-2.286 35.037-1.379 51.894.634 11.758 1.084 14.535 2.636 16.25 1.03 1.138 2.703 2.07 3.718 2.07 1.3 0 1.845.736 1.845 2.5v2.5h-34v-2.5zm112-.18c0-1.79.555-2.32 2.428-2.32 1.431 0 3.278-1.081 4.5-2.635 1.997-2.539 2.072-3.782 2.072-34.066 0-21.978-.35-32.088-1.163-33.615-1.49-2.797-3.864-4.612-6.087-4.653-1.191-.021-1.75-.83-1.75-2.531v-2.5h60v21.132l-2.625-.317c-1.977-.238-2.903-1.157-3.75-3.723-1.971-5.971-5.263-7.492-17.166-7.933l-10.458-.387v28.226l6.25-.057c8.676-.078 12.907-1.705 14.75-5.672 1.099-2.364 2.17-3.233 4-3.248l2.5-.02v25.998h-2.75c-2.218 0-2.75-.454-2.75-2.346 0-4.465-3.334-6.12-13.104-6.504l-8.896-.35V854.9c0 16.926.155 17.156 11.572 17.156 11.26 0 17.13-2.851 20.07-9.75 1.485-3.486 4.947-4.482 6.004-1.727.698 1.818-2.12 13.558-4.237 17.651l-1.498 2.897-57.912-.43v-2.32zm-1339.9-91.243l-2.444-1.878 5.944-9.084c3.27-4.996 6.583-9.09 7.362-9.1 3.382-.037 14.148 2.277 13.878 2.983-.536 1.406-20.274 18.99-21.296 18.974-.55-.01-2.1-.862-3.444-1.895zM6.862 718.057h1523v9h-1523v-9zm579.64-20.465c-8-2.852-12.498-10.308-11.04-18.3.981-5.386 4.03-9.154 9.428-11.655l4.723-2.188-2.874-1.65c-1.633-.937-2.874-2.499-2.874-3.618 0-1.81 7.333-9.124 9.147-9.124.432 0-.196-1.664-1.395-3.697-5.121-8.68-1.024-21.228 8.537-26.148 5.176-2.664 6.923-2.777 25.048-1.616 10.426.668 10.814.775 10.264 2.828-.315 1.173-.579 2.47-.587 2.883-.008.413-1.77.75-3.918.75h-3.906l.528 5.814c1.15 12.684-7.871 21.371-22.434 21.604-7.565.121-11.226 1.725-8.275 3.626.82.528 5.704 2.324 10.853 3.99 16.556 5.358 19.615 8.054 18.909 16.664-.734 8.942-7.927 16.739-18.332 19.871-5.96 1.793-16.723 1.777-21.801-.033zm22.266-6.174c8.119-4.045 11.635-11.754 7.196-15.772-2.991-2.707-15.981-6.862-19.348-6.19-6.853 1.372-13.255 9.727-12.074 15.759 1.624 8.29 13.788 11.404 24.226 6.203zm2.678-45.247c6.095-3.717 8.449-14.265 4.347-19.479-5.61-7.133-16.29.817-16.389 12.202-.031 3.538.479 4.781 2.768 6.75 3.373 2.902 5.21 3.006 9.274.528zm37.92 23.205c-4.393-.897-6.747-3.83-7.247-9.028-1.278-13.31 9.92-32.817 22.451-39.11 6.514-3.271 19.363-3.601 27.923-.717.768.259.2 3.677-1.778 10.708-3.871 13.75-6.087 27.515-4.814 29.894.835 1.56 1.427 1.668 4.078.744 2.446-.853 3.286-.788 3.977.305 1.44 2.275.565 3.14-5.149 5.094-7.682 2.627-11.199 2.115-12.353-1.799l-.911-3.089-4.095 2.289c-6.912 3.863-16.36 5.878-22.082 4.709zm17.287-8.99c2.907-1.382 5.94-3.51 6.739-4.729 1.335-2.038 5.409-17.039 7-25.776.65-3.58.57-3.703-3.065-4.707-6.716-1.854-13.47 3.044-18.852 13.67-5.645 11.148-7.068 21.078-3.39 23.654 2.497 1.75 4.027 1.47 11.568-2.113zm473.47 8.696c-4.488-1.065-6.071-2.622-7.298-7.178-1.86-6.908 2.444-19.975 9.764-29.641 8.765-11.575 18.507-15.482 32.892-13.191 3.787.603 7.183 1.409 7.547 1.79.364.382-.9 6.77-2.808 14.195-1.908 7.425-3.556 16.425-3.662 20l-.191 6.5 4.25-.19c3.813-.17 4.25.045 4.25 2.092 0 1.91-.94 2.566-5.77 4.028-7.948 2.406-11.636 1.892-12.047-1.68-.174-1.513-.499-2.75-.722-2.75s-2.838 1.076-5.811 2.39c-4.784 2.116-14.533 4.787-16.45 4.507-.386-.056-2.16-.449-3.945-.872zm16.744-8.56c2.475-1.237 5.23-3.085 6.121-4.107 2.213-2.535 6.185-15.587 8.24-27.078.548-3.063.383-3.272-3.404-4.291-3.24-.873-4.63-.764-7.479.588-6.348 3.012-12.648 13.232-15.914 25.817-3.128 12.054.773 14.899 12.436 9.07zm-1084.5 6.285c-.298-1.237 1.484-10.539 3.961-20.671 4.883-19.976 4.842-21.599-.51-20.064-2.647.76-2.948.614-2.948-1.426 0-1.905.93-2.544 5.75-3.951 3.163-.923 7.325-1.782 9.25-1.908 3.295-.216 3.519-.033 3.821 3.124.177 1.845-1.548 10.985-3.833 20.312-2.285 9.327-3.886 17.655-3.56 18.508.474 1.235 1.525 1.41 5.163.865 4.352-.653 4.552-.577 4.238 1.607-.26 1.806-1.493 2.655-5.829 4.012-3.025.946-7.629 1.747-10.23 1.781-4.105.053-4.803-.237-5.273-2.189zm38.445.404l-2.28-1.846 7.747-34.035c4.26-18.72 7.6-35.326 7.419-36.904-.336-2.942-.699-3.094-4.578-1.917-1.919.582-2.25.311-2.25-1.838 0-2.913 3.512-4.32 13.25-5.308 5.579-.567 5.75-.512 5.75 1.84 0 1.332-1.575 9.56-3.5 18.283s-3.5 16.445-3.5 17.16c0 .97 1.1.812 4.341-.622 11.137-4.926 20.845-4.666 24.33.653 3.263 4.98 1.573 17.868-3.727 28.432-2.758 5.497-10.965 14.052-15.422 16.077-5.855 2.66-24.305 2.676-27.58.025zm25.305-6.341c5.013-3.549 10.603-15.54 12.179-26.13 1.579-10.61-5.434-12.725-16.634-5.02-2.366 1.628-4.264 4.051-5.244 6.694-1.813 4.892-5.548 20.856-5.548 23.714 0 4.208 9.682 4.68 15.246.742zm38.19 5.12c-2.708-2.828-2.932-3.625-2.875-10.25.144-16.88 9.74-31.988 22.96-36.146 6.595-2.074 12.398-1.371 16.287 1.974 2.243 1.93 2.692 3.135 2.692 7.226 0 10.295-9.389 18.104-22.9 19.048-3.905.272-7.43.995-7.834 1.605-1.126 1.701-.902 7.482.384 9.926 2.495 4.74 6.075 4.852 14.649.455 5.342-2.74 6.441-3.005 7.235-1.75 1.767 2.794.949 3.672-6.828 7.322-6.476 3.039-8.897 3.657-14.313 3.657-5.97 0-6.766-.258-9.456-3.066zm17.908-24.012c8.507-2.362 14.119-11.457 9.76-15.817-2.75-2.749-5.292-2.659-8.824.314-2.813 2.367-7.385 9.867-8.735 14.333-.57 1.882-.302 2.249 1.637 2.244 1.274-.003 4.047-.486 6.162-1.073zm33.656 26.738c0-.166 1.797-7.92 3.993-17.23s3.997-18.899 4-21.307l.006-4.377-4 .64c-3.545.566-4 .412-4-1.36 0-2.193 3.234-3.872 11.35-5.895 5.553-1.384 7.65-.435 7.65 3.462v2.348l3.55-2.409c6.242-4.236 10.056-5.013 14.587-2.97 2.17.979 3.807 2.265 3.639 2.86-2.715 9.57-4.26 12.58-6.458 12.58-1.965 0-2.317-.513-2.317-3.378 0-7.275-6.329-7.327-10.919-.09-2.86 4.51-5.817 14.765-8.164 28.317-.7 4.042-1.756 7.492-2.345 7.665-1.76.518-10.572 1.472-10.572 1.145zm50.162-.963c-1.104-1.33-.498-4.924 5.22-30.946l2.362-10.75h-3.372c-1.855 0-3.373-.255-3.373-.566 0-1.564 2.24-4.434 3.459-4.434 2.438 0 7.12-4.735 9.084-9.188 2.195-4.977 3.068-5.776 6.332-5.797 2.149-.014 2.313.295 1.724 3.235a222.415 222.415 0 00-1.253 7l-.601 3.75h4.627c4.727 0 5.423.764 4.021 4.418-.436 1.137-1.95 1.582-5.391 1.582-5.56 0-4.647-2-9.082 19.899-3.259 16.087-3.039 17.569 2.376 16.016 4.518-1.296 4.882-1.189 4.524 1.334-.243 1.707-1.527 2.654-5.32 3.92-6.122 2.045-13.857 2.31-15.338.526zm40.337-1.291c-7.319-7.897-2.023-30.354 9.628-40.83 4.754-4.274 12.176-7.575 17.034-7.575 3.075 0 9.85 3.15 10.868 5.054 1.612 3.012 1.11 10.206-.948 13.58-4.216 6.915-13.305 11.366-23.207 11.366h-5.874v5.278c0 10.245 4.258 12.042 15.449 6.523 3.568-1.759 6.684-2.996 6.924-2.75.24.247.592 1.35.782 2.45.277 1.604-1.113 2.74-7.042 5.75-6.42 3.258-8.291 3.75-14.298 3.75-6.155 0-7.174-.285-9.316-2.596zm17.602-24.558c5.284-1.792 8.99-4.82 10.59-8.652 1.348-3.224 1.31-3.717-.463-6.101-2.748-3.696-5.447-3.72-9.589-.083-3.195 2.806-8.64 12.211-8.64 14.926 0 1.395 3.848 1.352 8.102-.09zm375.57 26.486c-1.413-1.412-.497-7.313 4.3-27.711 6.526-27.75 10.033-44.087 10.033-46.736 0-1.896-.41-2.082-3.5-1.58-3.185.517-3.5.352-3.5-1.83 0-2.502 2.495-3.61 12.432-5.519 5.132-.986 6.568-.335 6.568 2.974 0 1.495-3.372 17.31-7.493 35.143-4.121 17.834-7.496 33.95-7.5 35.811l-.007 3.386 4.568-.626c4.295-.589 4.55-.494 4.25 1.583-.246 1.708-1.565 2.599-5.818 3.929-5.618 1.757-13.135 2.374-14.333 1.176zm37.697-.555c-1.227-1.985-.526-6.316 3.733-23.037 2.218-8.708 3.864-16.6 3.658-17.537-.394-1.799-.644-1.84-5.005-.813-2.322.547-2.75.326-2.75-1.423 0-2.384 4.269-4.501 12.045-5.976 5.556-1.054 7.955-.515 7.955 1.788 0 .861-2.037 10.06-4.527 20.444s-4.231 19.358-3.869 19.945c.404.653 2.38.831 5.096.459 4.155-.57 4.417-.468 4.119 1.6-.246 1.708-1.566 2.6-5.819 3.93-6.507 2.035-13.577 2.335-14.637.621zm36.934-.446c-.352-.917-.084-4.18.595-7.25 2.231-10.08 7.107-33.146 7.107-33.62 0-.254-1.383-.462-3.073-.462-4.341 0-3.531-2.795 1.574-5.434 3.04-1.57 4.793-3.566 7.305-8.316 2.86-5.409 3.685-6.25 6.126-6.25h2.82l-1.34 6.25c-.738 3.437-1.357 6.587-1.376 7-.02.412 2.214.75 4.964.75 5.225 0 5.347.105 4.37 3.75-.527 1.965-1.256 2.25-5.778 2.25h-5.174l-3.364 16.876c-1.85 9.281-3.092 17.582-2.76 18.445.486 1.268 1.234 1.388 3.897.624 4.583-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.748 2.174-14.045 2.159-14.887-.036zm41.18-.597c-2.489-2.141-2.92-3.316-3.277-8.917-.801-12.586 4.96-26.796 13.514-33.327 9.445-7.212 19.761-8.17 25.56-2.373 2.688 2.69 2.926 3.448 2.492 7.966-.952 9.905-10.445 17.1-23.434 17.76-8.124.413-8.978 1.39-7.385 8.433 1.735 7.667 4.886 8.454 14.896 3.72 6.63-3.137 8.157-3.135 8.157.01 0 3.196-12.002 8.33-20.577 8.803-6.382.351-7.359.148-9.944-2.076zm21.505-26.726c6.235-3.182 8.912-10.258 5.362-14.18-4.467-4.937-12.737 1.529-16.844 13.167l-1.509 4.276 4.507-.617c2.479-.34 6.296-1.53 8.483-2.647zm239.02 28.622c0-.151 1.797-7.892 3.993-17.203s3.997-18.898 4-21.306l.01-4.378-4 .64c-3.533.565-4 .409-4-1.337 0-2.429 1.76-3.412 9.861-5.511 7.039-1.824 9.14-1.122 9.14 3.056v2.347l3.549-2.408c6.224-4.224 10.059-5.012 14.546-2.989 2.147.969 3.905 2.03 3.905 2.36 0 .328-1.009 3.41-2.241 6.847-1.851 5.161-2.635 6.25-4.5 6.25-1.9 0-2.26-.537-2.26-3.377 0-6.835-5.876-7.345-10.264-.89-3.336 4.907-5.043 10.234-7.778 24.267-1.233 6.325-2.515 11.78-2.85 12.121-.6.613-11.107 2.042-11.107 1.51zm115.34-1.196c-.82-2.138.126-8.297 3.988-25.936l3.285-15-2.805-.313c-3.356-.375-3.923-3.698-.8-4.689 3.515-1.115 7.575-5.239 9.537-9.685 2.196-4.977 3.069-5.777 6.333-5.798 2.148-.013 2.312.295 1.723 3.235a222.473 222.473 0 00-1.253 7l-.6 3.75h4.627c4.727 0 5.423.765 4.02 4.418-.436 1.138-1.95 1.582-5.39 1.582-5.56 0-4.647-2-9.083 19.9-3.258 16.086-3.038 17.568 2.376 16.015 4.519-1.296 4.883-1.189 4.524 1.335-.242 1.707-1.527 2.653-5.32 3.92-6.657 2.223-14.36 2.358-15.162.266zm40.348-1.024c-7.581-7.58-2.34-30.242 9.443-40.837 4.754-4.274 12.176-7.575 17.034-7.575 3.074 0 9.849 3.15 10.868 5.055 1.612 3.011 1.11 10.206-.948 13.58-4.236 6.946-13.305 11.366-23.327 11.366h-5.994l.443 6.134c.705 9.742 4.284 11.072 15.246 5.667 3.568-1.76 6.684-2.997 6.924-2.75.24.247.592 1.349.782 2.449.277 1.605-1.113 2.74-7.041 5.75-6.362 3.23-8.32 3.75-14.114 3.75-5.904 0-7.044-.317-9.316-2.589zm20.964-26.062c6.994-3.476 10.129-11.537 5.768-14.836-2.896-2.191-4.996-1.822-8.841 1.554-3.218 2.825-8.576 12.198-8.576 15.002 0 1.655 6.911.635 11.648-1.72zm30.352 27.79c0-.421 1.826-8.53 4.058-18.02 2.232-9.492 3.92-18.688 3.75-20.438-.29-2.982-.537-3.168-3.953-2.973-2.857.163-3.753-.208-4.147-1.717-.41-1.566.456-2.278 4.644-3.824 2.831-1.044 6.835-2.205 8.898-2.579 3.878-.702 3.812-.756 6.238 5.115.046.111 2.719-1.126 5.939-2.75 6.89-3.476 8.046-3.572 12.235-1.017l3.163 1.928-2.163 6.544c-1.805 5.46-2.536 6.547-4.413 6.568-1.884.02-2.25-.514-2.25-3.276 0-8.714-8.293-6.99-12.832 2.666-1.14 2.427-3.4 10.791-5.02 18.59-1.62 7.797-3.105 14.308-3.297 14.47-.88.738-10.85 1.394-10.85.714zm50 .004c0-.45 1.605-7.079 3.567-14.73 2.143-8.357 3.641-16.709 3.75-20.914l.183-7-3.627.278c-2.85.218-3.731-.126-4.119-1.609-.403-1.541.442-2.17 4.626-3.445 9.092-2.769 11.233-2.968 12.996-1.205.893.893 1.624 2.717 1.624 4.053 0 1.335.184 2.428.41 2.428s3.195-1.317 6.6-2.927c8.06-3.812 18.742-5.811 21.931-4.104 2.081 1.113 2.23 1.688 1.622 6.271-.368 2.775-1.986 10.494-3.596 17.153-1.61 6.66-3.048 13.682-3.197 15.607-.27 3.5-.27 3.5 3.937 3.417 2.876-.057 4.39.392 4.783 1.417.793 2.066-.152 2.74-6.421 4.576-7.112 2.083-13.66 2.099-14.451.036-.328-.855 1.199-9.572 3.393-19.371 4.4-19.647 4.652-21.883 2.562-22.685-2.157-.828-9.808 2.924-14.374 7.05-3.758 3.394-4.239 4.45-6.546 14.362-1.37 5.884-2.809 12.872-3.197 15.528-.389 2.656-1.213 4.98-1.831 5.165-3.033.905-10.624 1.369-10.624.65zm68.587-.779c-.346-.899 1.44-10.163 3.967-20.586 2.526-10.423 4.36-19.563 4.072-20.31-.4-1.04-1.292-1.138-3.817-.414-1.813.52-3.411.946-3.552.946s-.257-1.043-.257-2.318c0-1.927.884-2.584 5.25-3.905 11.848-3.583 15.508-2.975 14.312 2.377-.288 1.29-2.35 9.965-4.58 19.279-2.23 9.313-3.805 17.586-3.499 18.383.425 1.108 1.631 1.303 5.105.827 4.274-.586 4.53-.49 4.23 1.585-.615 4.275-19.747 8.002-21.231 4.137zm37.728.013c-.667-1.738.143-6.512 4.051-23.878 4.321-19.2 4.259-17.5.64-17.5-4.397 0-3.665-2.758 1.441-5.433 2.939-1.539 4.75-3.599 7.095-8.067 2.561-4.878 3.672-6.061 5.944-6.33 3.035-.358 3.057-.104.915 10.58l-.651 3.25h5.232c4.36 0 5.13.264 4.625 1.582-.334.87-.607 2.22-.607 3 0 1.049-1.402 1.418-5.375 1.418h-5.375l-3.302 16.818c-1.816 9.25-3.021 17.55-2.678 18.445.511 1.332 1.225 1.456 3.92.683 4.584-1.315 4.81-1.248 4.81 1.423 0 2.032-.825 2.6-5.816 4-7.67 2.152-14.046 2.156-14.87.01zm41.108-.692c-2.864-2.466-2.923-2.716-2.923-12.405 0-9.425.177-10.247 3.778-17.531 4.417-8.936 9.487-13.77 17.636-16.82 14.195-5.31 24.39 3.712 18.108 16.026-3.552 6.962-13.026 11.988-22.664 12.022-5.79.02-6.18.172-6.802 2.65-.836 3.33.21 8.354 2.21 10.622 2.273 2.578 6.184 2.146 13.16-1.451 5.202-2.683 6.355-2.966 7.125-1.75 1.77 2.8.893 3.876-5.801 7.11-5.154 2.49-8.424 3.354-13.827 3.652-6.417.354-7.35.155-10-2.126zm21.78-26.92c6.758-3.798 9.013-11.267 4.329-14.336-1.847-1.21-3.168-1.385-5.25-.695-3.527 1.17-8.563 7.707-10.645 13.817l-1.607 4.716 4.59-.629c2.525-.346 6.388-1.639 8.583-2.873zm-1512 26.512c.186-.966 1.233-1.92 2.327-2.12 2.97-.545 5.564-3.178 7.59-7.704 2.688-6.003 10.981-47.753 11.205-56.408.191-7.382.162-7.474-3.018-9.5-6.205-3.953-4.547-4.546 12.71-4.546 13.673 0 16 .222 16 1.525 0 .898-1.246 1.774-3.03 2.131-6.377 1.276-8.798 7.57-14.819 38.541-5.626 28.942-5.571 28.382-3.044 30.91 1.92 1.92 2.965 2.085 10.76 1.693 10.485-.528 14.272-2.293 17.934-8.355 2.885-4.776 3-4.857 5.068-3.546 1.148.727 1.105 1.653-.266 5.734-.9 2.677-2.654 6.667-3.9 8.867l-2.266 4-26.795.267c-25.09.25-26.774.155-26.457-1.489zm505.82.304c0-.78 1.688-2.242 3.75-3.25 2.614-1.277 4.415-3.197 5.943-6.332 2.865-5.88 11.526-48.467 11.684-57.456.12-6.793.048-7.004-3.088-9-6.711-4.272-5.194-4.544 25.279-4.544 27.955 0 28.554.042 27.943 1.967-.344 1.082-1.186 5.02-1.872 8.75-1.058 5.753-1.581 6.831-3.443 7.102-1.786.26-2.196-.172-2.196-2.316 0-6.638-3.939-8.503-17.958-8.503h-9.659l-2.773 12.75c-1.526 7.012-2.992 13.538-3.26 14.5-.435 1.571.413 1.748 8.333 1.735 9.958-.017 12.893-1.08 15.815-5.725 2.6-4.135 5.992-4.467 5.204-.51a2669.77 2669.77 0 00-2.319 12c-1.397 7.296-2.126 9.25-3.452 9.25-1.061 0-1.899-1.087-2.27-2.946-.325-1.623-1.616-3.498-2.875-4.175-2.4-1.291-18.125-1.866-19.29-.706-.673.67-3.626 15.083-4.921 24.02-.623 4.295-.464 4.833 1.883 6.37 2.061 1.351 4.274 1.594 11.303 1.24 10.435-.524 14.143-2.189 18.435-8.278 1.856-2.634 3.613-4.152 4.439-3.836 1.945.747 1.715 2.535-1.234 9.59-4.373 10.465-1.882 9.72-32.555 9.72-22.502 0-26.845-.229-26.845-1.417zm508 .02c0-.796 1.463-1.946 3.25-2.555 6.314-2.152 8.4-7.855 14.716-40.224 5.439-27.875 5.305-32.333-1.027-34.343-1.127-.358-1.874-1.175-1.66-1.816.279-.84 8.107-1.239 28.127-1.43 27.267-.262 27.73-.233 27.11 1.717-.346 1.09-1.19 5.035-1.877 8.766-1.058 5.753-1.58 6.83-3.443 7.102-1.853.27-2.195-.16-2.195-2.75 0-6.314-4.877-8.397-18.436-7.875l-7.936.305-2.78 13c-1.53 7.15-2.796 13.562-2.814 14.25-.05 1.846 15.23 1.682 18.875-.203 1.545-.799 3.377-2.824 4.071-4.5.774-1.867 1.99-3.047 3.141-3.047 2.328 0 2.343-.725-.272 12.75-1.834 9.446-2.478 11.25-4.017 11.25-1.107 0-1.832-.722-1.832-1.826 0-4.666-9.349-8.136-17.99-6.676l-3.82.646-2.03 11.178c-3.576 19.712-3.425 21.497 2.007 23.747 5.98 2.477 2.528 3.424-13.5 3.706-13.136.23-15.668.041-15.668-1.173zm-586.61-21.511c-4.472-2.032-8.394-8.31-8.394-13.44 0-7.943 7.022-15.047 14.847-15.02 9.359.034 15.143 5.75 15.15 14.97.01 11.718-10.734 18.426-21.602 13.49zm508.99.472c-1.716-.747-4.4-3.037-5.965-5.089-2.32-3.042-2.832-4.688-2.77-8.923.132-9.187 5.845-14.838 15-14.838 4.537 0 6.048.494 9.146 2.985 6.902 5.552 7.975 14.861 2.467 21.408-4.63 5.502-11.526 7.221-17.878 4.457zm-597.86-35.543c-1.966-2.174-2.108-1.946 9.256-14.886l3.834-4.366 5.696 1.275c3.133.7 5.696 1.576 5.696 1.946 0 .674-21.41 18.01-22.245 18.01-.245 0-1.251-.891-2.237-1.98zm508.75-.001l-2.218-1.797 7.549-8.611c4.152-4.736 7.93-8.611 8.397-8.611 2.44 0 11.011 2.458 10.775 3.09-.248.665-18.879 15.646-21.279 17.111-.553.338-2.003-.195-3.224-1.183zm664.77.009l-2.412-1.82 7.81-8.604c4.297-4.732 8.172-8.604 8.613-8.604 1.978 0 10.948 2.403 10.906 2.922-.045.54-18.928 15.777-21.382 17.252-.617.37-2.207-.145-3.534-1.147zm-1427.1-5.133c-4.063-4.063-.097-11.896 6.024-11.896 4.258 0 6.48 2.234 6.48 6.512 0 6.674-7.839 10.05-12.503 5.384zm674.85.713c-2.457-1.866-2.312-8.046.25-10.608 4.125-4.125 12-1.433 12 4.102 0 5.994-7.604 10.032-12.25 6.506zm664.15-.713c-4.134-4.134-.08-11.896 6.216-11.896 6.281 0 8.973 7.007 4.434 11.545-3.08 3.081-7.765 3.235-10.65.35zm-876.1-28.584c-1.527-1.702-1.163-2.314 6.071-10.182l7.696-8.37 5.719 1.28c3.145.703 5.696 1.545 5.668 1.87-.081.951-20.163 16.334-21.924 16.795-.882.23-2.335-.396-3.23-1.392z"></path><path fill="#e2011c" d="M880.1 520l2.333-6.033c3.954-10.9 8.054-19.217 13.971-28.343 6.269-9.667 20.067-23.907 25.807-26.632 7.054-3.35 15.824-4.53 26.67-3.587 9.312.81 37.925 5.489 49.471 8.09 8.788 1.98 21.654 2.17 27.71.408 11.665-3.394 18.576-9.954 21.856-20.747 2.516-8.28 2.492-15.804-.066-20.823-3.436-6.74-2.851-8.494 5.5-16.48 4.125-3.944 7.506-7.59 7.512-8.104.035-2.67-5.68-13.39-7.151-13.414-.902-.015-2.683-.872-3.958-1.906l-2.32-1.879 4.959-2.534c6.77-3.461 11.791-8.843 11.791-12.638 0-1.64-1.426-5.66-3.17-8.933-3.345-6.28-4.24-12.283-2.357-15.805 1.245-2.327 3.391-3.305 13.933-6.352 8.86-2.561 12.062-5.157 13.325-10.8 1.08-4.827.55-7.93-2.349-13.73-2.36-4.722-17.73-28.27-22.208-34.022-6.016-7.731-13.346-21.086-15.514-28.27-2.137-7.081-2.151-7.482-.592-16.635 3.296-19.35 1.369-35.391-8.01-66.67-6.97-23.245-8.841-28.89-11.024-33.238-3.945-7.863-3.418-9.704 4.677-16.331 3.875-3.173 7.475-6.572 8-7.553 2.445-4.57-.287-13.378-4.92-15.858-2.939-1.575-4.576-.494-7.56 4.994-2.262 4.158-3.148 4.945-5.568 4.945-3.94 0-4.63-1.653-2.115-5.058 2.933-3.97 2.701-4.607-1.907-5.225-3.449-.463-5.272-1.811-12.75-9.426-10.025-10.21-16.76-14.914-30.185-21.087-6.154-2.83-8.298-4.17-6.04-3.774 1.925.337 8.731.875 15.125 1.196 18.553.931 23.063-1.52 27.386-14.885 2.936-9.075 4.344-13.271-2.393-19.607L983.245 0h554.75v520h-657.9z"></path><path fill="#003189" d="M407.03 520c-4.026-.423-7.517-.606-7.758-.847-.423-.424 4.124-3.347 24.95-16.039 6.679-4.07 9.427-6.253 8.5-6.75-.755-.402-6.585-1.042-12.958-1.42-9.467-.562-12.21-.4-15 .881-1.878.863-9.372 3.133-16.653 5.044-18.06 4.739-24.137 7.993-29.936 16.027l-2.166 3.103H-.001V0h706.34l-13.686 8.934c-7.535 3.74-16.29 8.936-19.458 11.545-10.744 8.85-25.211 28.985-28.824 40.115-1.328 4.09-2.534 5.624-6.608 8.404-6.217 4.243-13.664 12.334-19.83 21.546-8.373 12.508-24.332 40.698-27.468 48.518-4.864 12.131-4.422 21.37 2.757 57.622 3.16 15.961 6.58 32.171 7.6 36.024 1.02 3.853 2.135 10.382 2.479 14.51.615 7.37 1.094 8.966 5.408 18.012 1.182 2.477 2.147 5.288 2.145 6.246-.002.959.897 2.305 1.997 2.993 1.141.712 2 2.333 2 3.772 0 1.734 2.278 5.024 7.28 10.516 11.445 12.567 19.72 24.347 19.72 28.072 0 3.06-4.488 3.85-11.72 2.065-8.452-2.087-15.367-6.595-26.03-16.972-4.537-4.416-8.25-7.384-8.25-6.597 0 .787 3.111 4.893 6.914 9.123 7.562 8.414 8.748 10.709 7.113 13.767-1.43 2.675-4.911 3.454-9.62 2.153-5.434-1.502-8.618.591-7.722 5.075.55 2.751.4 3.075-1.155 2.478-3.072-1.18-9.794-2.53-15.838-3.184-5.552-.6-5.963-.843-9.325-5.525-2.547-3.548-4.529-5.182-7.191-5.93-9.923-2.786-34.604-7.08-51.175-8.905-29.128-3.207-36.144-3.458-50.1-1.798-10.716 1.275-13.63 2.024-19.5 5.008-10.39 5.283-28.4 21.837-28.4 26.104 0 2.002 3.968 1.296 8.5-1.513 13.758-8.524 60.88-20.554 84-21.445 11.458-.442 10.837.107-2.91 2.571-3.8.682-12.8 2.987-20 5.124s-19.614 5.43-27.589 7.317c-7.975 1.888-16.975 4.321-20 5.408l-5.5 1.975 8.5.093c43.31.474 92.681 14.223 112.77 31.408 8.646 7.394 11.811 8.292 24.528 6.952 17.428-1.835 39.985-10.156 49.878-18.397 4.293-3.576 7.825-4.998 7.818-3.148-.01 3.269-5.697 20.84-8.155 25.2-2.74 4.86-2.896 5.559-1.469 6.603.878.642 1.344 1.42 1.036 1.728-.308.308.374.856 1.515 1.219 3.282 1.042 2.456 2.05-2.781 3.393-5.107 1.31-9.143 3.602-9.143 5.193 0 .52.701.944 1.559.944 2.568 0 .652 1.796-2.704 2.533-2.297.505-2.756.918-1.738 1.563.998.633 1.035.881.133.892-.688.008-1.25 1.031-1.25 2.273 0 1.546-.946 2.676-3 3.586-5.007 2.218-3.603 3.415 3.25 2.773 3.437-.322 5.575-.319 4.75.007-.825.326-6.45 2.873-12.5 5.659-6.05 2.786-13.925 6.093-17.5 7.35-4.047 1.421-6.632 2.919-6.85 3.968-.348 1.684 1.53 1.628 6.257-.187.876-.336 1.582-.225 1.568.246-.013.472-10.429 6.487-23.145 13.366-12.716 6.88-24.615 13.972-26.442 15.76s-4.164 3.252-5.194 3.252c-1.036 0-2.391 1.139-3.033 2.55-1.943 4.265-1.54 4.784 3.09 3.988 6.878-1.181 10.03-1.116 10.487.217.247.721-.402 1.25-1.532 1.25-1.079 0-2.5.65-3.157 1.442-.657.793-2.394 1.581-3.859 1.752-1.704.198-3.388 1.456-4.676 3.494-1.108 1.752-2.914 3.416-4.014 3.699s.475.33 3.5.105c44.98-3.348 53.36-5.013 71.5-14.211 15.476-7.847 31.54-19.513 42.97-31.202 3.282-3.358 6.32-6.105 6.75-6.105 1.553 0 .71 5.613-1.584 10.543-3.971 8.533-12.303 16.394-29.428 27.764-8.64 5.735-17.957 11.137-20.707 12.004-8.592 2.707-22.463 5.591-37.004 7.694-47.373 6.85-65.502 12.045-83.46 23.918-3.006 1.987-6.16 3.495-7.011 3.35-.85-.143-3.117 1.081-5.036 2.722-5.397 4.616-1.487 3.835 9.707-1.938 11.471-5.916 16.85-6.848 7.804-1.353C468.261 515.778 459.806 520 451.53 520h-44.498zm-58.846-58.006c1.798-.752 7.746-4.084 13.218-7.405 5.472-3.321 11.974-6.957 14.449-8.08 2.475-1.123 9.45-4.276 15.5-7.007 12.681-5.722 31.29-11.123 32.36-9.39.376.609 3.149 1.28 6.162 1.49 4.217.295 4.96.566 3.228 1.178-1.238.437-2.25 1.192-2.25 1.678 0 1.81 9.359 1.267 13.299-.772 1.545-.799 5.034-1.717 7.755-2.04 3.382-.4 4.946-1.044 4.946-2.035 0-1.131.859-1.304 3.913-.788 4.203.71 13.243-1 37.587-7.11 16.486-4.138 28.973-8.303 39.94-13.322l7.94-3.633-7.94-5.089c-19.352-12.402-38.785-20.018-81.44-31.916-7.425-2.07-13.95-4.213-14.5-4.76-.663-.66-.326-.752 1-.276 4.26 1.528 7.5 1.821 7.5.678 0-1.483-3.22-2.679-9.548-3.545-5.787-.792-9.522-2.52-5.502-2.544 6.222-.04-4.474-3.985-16.45-6.068-8.866-1.542-9.376-1.872-5.673-3.667 3.227-1.564 6.698-7.482 5.785-9.864-.776-2.021-1.742-1.813-6.538 1.41-9.245 6.213-17.725 16.388-22.49 26.986-2.72 6.045-1.778 6.6 12.214 7.198 11.458.49 11.64.534 8.702 2.113-1.65.886-4.96 1.912-7.355 2.28-8.135 1.248-12.654 5.11-8.62 7.369 1.197.67.722 1.236-2.219 2.639-3.296 1.573-3.528 1.906-1.944 2.793.989.554 3.864.842 6.39.641 3.51-.279 5.114.1 6.803 1.605l2.211 1.97-4.436 2.816c-2.44 1.549-5.2 4.26-6.133 6.024-.933 1.764-4.284 5.963-7.447 9.33s-5.75 6.848-5.75 7.737-4.612 5.31-10.25 9.822c-15.16 12.136-21.75 18.806-21.75 22.017 0 1.7-.856 3.23-2.36 4.215-4.732 3.103-7.203 6.688-4.608 6.688.568 0 2.504-.615 4.301-1.366zm116.98-11.692c3.747-.501 8.086-1.663 9.642-2.583l2.83-1.673-9.652-4.812-4.816 1.952a471.849 471.849 0 01-8.152 3.215c-7.377 2.794-8.34 6.549-1.415 5.518a984.68 984.68 0 0111.563-1.617zm-169.31-45.504c22.285-23.316 38.011-37.148 57.972-50.99 6.783-4.704 11.562-7.424 11.798-6.715.648 1.945 3.554 1.373 8.284-1.633 5.436-3.453 8.156-6.948 14.941-19.202 7.04-12.712 9.7-15.889 19.862-23.719a1632.238 1632.238 0 0015.555-12.152c5.479-4.353 6.795-5.04 6.344-3.317-.349 1.336-.108 2.176.624 2.176 2.272 0 12.976-4.572 13.353-5.703.59-1.769-10.287-3.595-18.33-3.078-6.177.396-8.364 1.113-16.028 5.253-18.008 9.728-31.017 20.221-55.857 45.055-17.876 17.872-31.958 29.855-39.076 33.252-2.318 1.106-4.064 3.425-6.876 9.132-5.465 11.093-15.223 27.012-24.485 39.947-8.754 12.225-10.633 16.454-3.83 8.62 2.338-2.691 9.425-10.308 15.75-16.926zm223 109.47c26.764-5.566 29.718-5.98 48.5-6.804 21.09-.924 23.777-1.472 36.464-7.439 4.065-1.911 5.659-2.259 6.224-1.357.983 1.57 7.864-2.18 21.312-11.615 5.5-3.859 13.278-8.79 17.284-10.959 6.036-3.267 7.883-3.83 10.787-3.285 3.1.582 4.018.204 7.978-3.283 10.974-9.666 20.344-14.134 29.702-14.164 2.782-.009 3.75.403 3.75 1.596 0 1.019.55 1.397 1.5 1.033 2.787-1.071 1.525.153-5.645 5.472-8.301 6.158-7.485 8.007.954 2.162 8.17-5.659 8.19-5.667 8.19-3.379 0 1.304-3.075 4.578-8.75 9.315-12.91 10.778-22.052 19.692-35.97 35.073l-12.45 13.361h-158.33l28.5-5.728zm.25-203.7c.962-.252 2.537-.252 3.5 0 .962.252.175.458-1.75.458s-2.713-.206-1.75-.458z"></path><path fill="#7f7f7f" d="M985.58 272.52c-4.367-.66-2.114-2.284 3.171-2.284 5.302 0 8.096-2.036 8.096-5.9 0-1.816-.395-2.114-2.089-1.576-1.461.464-2.502.073-3.463-1.3-.898-1.283-3.068-2.188-6.262-2.612-5.704-.757-14.94-6.268-13.285-7.926.566-.566 3.503-1.234 6.526-1.485 5.211-.432 5.556-.632 6.613-3.838.791-2.4 1.892-3.565 3.788-4.01 1.47-.347 3.797-1.667 5.172-2.934 1.375-1.268 5.875-4.508 10-7.2 6.935-4.527 11.231-9.353 9.695-10.89-1.618-1.62-16.634-3.381-23.695-2.78-8.203.697-22.338 3.679-28.25 5.959-6.068 2.34-4.294.302 4.043-4.645 11.255-6.679 32.92-12.905 44.901-12.905 4.649 0 20.203 3.676 22.055 5.212 3.63 3.01-.329 13.574-7.06 18.845l-2.812 2.201 2.311 2.466 2.311 2.466-2.36 1.917c-1.299 1.054-3.077 1.916-3.953 1.916s-3.043 1.407-4.816 3.128c-2.73 2.648-3.083 3.502-2.298 5.569.608 1.6.549 3.15-.173 4.498-.673 1.26-.842 4.123-.435 7.384.831 6.657-.368 9.042-5.226 10.392-3.603 1.001-16.793 1.196-22.505.332z"></path></svg></a>`
  
  
  
  
Instances: 9
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/sitemap.xml](https://onvs.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/9d18e4648fcd6fdb5ab98eb5b7bef5f7dbc572dd.e10d1da399469f6d05e5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/da7aaf3ce794b0a2be102171ce0ccd2f04ae8697.900c1821aac641de88a4.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/framework.53cfa66f9846f4090096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css](https://onvs.fabrique.social.gouv.fr/_next/static/css/a9b4c0f94cf60298d58a.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js](https://onvs.fabrique.social.gouv.fr/_next/static/chunks/main-40e0f9aff5dc7c4124d9.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/robots.txt](https://onvs.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/favicon.ico](https://onvs.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17732733`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `00939483`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `70158769`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `00939483`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17732733`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `40356452`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `40356452`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `70158769`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr](https://onvs.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `82267267`
  
  
  
  
* URL: [https://onvs.fabrique.social.gouv.fr/](https://onvs.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `82267267`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>17732733, which evaluates to: 1970-07-25 05:45:33</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
