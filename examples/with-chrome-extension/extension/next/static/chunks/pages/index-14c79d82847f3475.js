(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4129:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5893);t.default=function(e){var t=e.sprite,n=e.className,a=i(e,["sprite","className"]);return(0,s.jsx)("i",r({className:["icon",t,n].join(" ").trim()},a),void 0)}},7282:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5893);t.default=function(e){var t=e.children,n=e.className,a=e.col,o=e.isFixed,l=i(e,["children","className","col","isFixed"]),c=["aureole",n];return a&&c.push(a),o&&c.push("fixed"),(0,s.jsx)("div",r({className:c.join(" ")},l,{children:t}),void 0)}},5400:function(e,t,n){e.exports=n(7282)},1728:function(e,t,n){e.exports=n(4129)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9561)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,n;var i,{src:s,sizes:g,unoptimized:y=!1,priority:b=!1,loading:x,className:j,quality:w,width:S,height:N,fill:O,style:_,onLoad:E,onLoadingComplete:C,placeholder:k="empty",blurDataURL:P,layout:z,objectFit:A,objectPosition:R,lazyBoundary:I,lazyRoot:D}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=o.useContext(d.ImageConfigContext),B=o.useMemo(()=>{let e=f||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[T]),L=M,W=L.loader||m.default;if(delete L.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error('Image with src "'.concat(s,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=W;W=e=>{let{config:t}=e,n=a(e,["config"]);return U(n)}}if(z){"fill"===z&&(O=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];q&&(_=r({},_,q));let F={responsive:"100vw",fill:"100vw"}[z];F&&!g&&(g=F)}let G="",Z=p(S),V=p(N);if("object"==typeof(i=s)&&(h(i)||void 0!==i.src)){let H=h(s)?s.default:s;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(!H.height||!H.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)));if(t=H.blurWidth,n=H.blurHeight,P=P||H.blurDataURL,G=H.src,!O){if(Z||V){if(Z&&!V){let J=Z/H.width;V=Math.round(H.height*J)}else if(!Z&&V){let X=V/H.height;Z=Math.round(H.width*X)}}else Z=H.width,V=H.height}}let $=!b&&("lazy"===x||void 0===x);((s="string"==typeof s?s:G).startsWith("data:")||s.startsWith("blob:"))&&(y=!0,$=!1),B.unoptimized&&(y=!0);let[K,Q]=o.useState(!1),[Y,ee]=o.useState(!1),et=p(w),en=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:R}:{},Y?{}:{color:"transparent"},_),er="blur"===k&&P&&!K?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:V,blurWidth:t,blurHeight:n,blurDataURL:P}),'")')}:{},ei=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:s,sizes:a,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let s=/(^|\s)(1?\d?\d)vw/g,a=[];for(let o;o=s.exec(n);o)a.push(parseInt(o[2]));if(a.length){let l=.01*Math.min(...a);return{widths:i.filter(e=>e>=r[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,r)=>"".concat(o({config:t,src:n,quality:s,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:o({config:t,src:n,quality:s,width:l[u]})}}({config:B,src:s,unoptimized:y,width:Z,quality:et,sizes:g,loader:W}),es=s,ea={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:L.crossOrigin},eo=o.useRef(E);o.useEffect(()=>{eo.current=E},[E]);let el=o.useRef(C);o.useEffect(()=>{el.current=C},[C]);let ec=r({isLazy:$,imgAttributes:ei,heightInt:V,widthInt:Z,qualityInt:et,className:j,imgStyle:en,blurStyle:er,loading:x,config:B,fill:O,unoptimized:y,placeholder:k,loader:W,srcString:es,onLoadRef:eo,onLoadingCompleteRef:el,setBlurComplete:Q,setShowAltText:ee},L);return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,Object.assign({},ec)),b?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},ea))):null)};var r=n(6495).Z,i=n(2648).Z,s=n(1598).Z,a=n(7273).Z,o=s(n(7294)),l=i(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var m=i(n(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,i,s,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:n,widthInt:i,qualityInt:s,className:l,imgStyle:c,blurStyle:u,isLazy:d,fill:m,placeholder:f,loading:h,srcString:p,config:v,unoptimized:y,loader:b,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:S,onLoad:N,onError:O}=e,_=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},_,t,{width:i,height:n,decoding:"async","data-nimg":m?"fill":"1",className:l,loading:h,style:r({},c,u),ref:o.useCallback(e=>{e&&(O&&(e.src=e.src),e.complete&&g(e,p,f,x,j,w,y))},[p,f,x,j,w,O,y]),onLoad(e){let t=e.currentTarget;g(t,p,f,x,j,w,y)},onError(e){S(!0),"blur"===f&&w(!0),O&&O(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:s}=e,a=r||t,o=i||n,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),i=n(9406),s=n.n(i),a=n(5400),o=n.n(a);n(7294);var l=n(1163),c=n.n(l),u=n(4865),d=n.n(u),m=n(1664),f=n.n(m),h=n(5675),p=n.n(h),g=n(1728),v=n.n(g),y=n(6872),b=n.n(y);let x=e=>{let{text:t}=e;return(0,r.jsxs)("header",{className:"purple aura",children:[(0,r.jsx)("div",{className:"smush wall-pad",children:(0,r.jsxs)("ul",{className:"nav-list",children:[(0,r.jsx)("li",{className:"logo-circle",children:(0,r.jsx)(f(),{href:"/",className:"halo",children:(0,r.jsx)(p(),{src:"/next-assets/logo.png",width:48,height:48,priority:!0,alt:"Logo Aura Design"})})}),(0,r.jsx)("li",{className:"mod",children:(0,r.jsx)(b(),{mode:"link",href:"https://github.com/garitma/aura-design-system/tree/main/examples/next-base",target:"_blank",rel:"noopener",children:(0,r.jsx)(v(),{sprite:"github"})})})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:t&&(0,r.jsx)("h1",{className:"light centertxt mt0 mb0",children:t})})})]})},j=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(s(),{children:(0,r.jsxs)("p",{className:"centertxt",children:["Powered by"," ",(0,r.jsx)("a",{href:"https://auradesigsystem.com",className:"uline",children:"Aura Design System"})," ","brought to you by"," ",(0,r.jsx)("a",{href:"https://garitma.com",className:"uline",children:"Garitma"}),"."]})})});var w=n(9008),S=n.n(w);let N="Aura Design Next Base",O=e=>{let{title:t,excerpt:n,slug:i,image:s}=e;return(0,r.jsxs)(S(),{children:[(0,r.jsx)("meta",{name:"robots",content:"index,follow"}),(0,r.jsx)("meta",{name:"googlebot",content:"index,follow"}),(0,r.jsx)("title",{children:t?"".concat(t," | ").concat(N):N}),(0,r.jsx)("meta",{property:"og:title",content:t?"".concat(t," | ").concat(N):N}),(0,r.jsx)("link",{rel:"canonical",href:"".concat("http://localhost:3000/").concat(i||"")}),(0,r.jsx)("meta",{property:"og:image:alt",content:n||"Open grap de ".concat(N)}),(0,r.jsx)("meta",{property:"og:image:width",content:"1140"}),(0,r.jsx)("meta",{property:"og:image:height",content:"570"})]})};c().events.on("routeChangeStart",()=>{d().start()}),c().events.on("routeChangeComplete",()=>{d().done()}),c().events.on("routeChangeError",()=>{d().done()});let _=e=>{let{children:t,text:n,seo:i}=e;return(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)(O,{...i}),(0,r.jsx)(x,{text:n}),(0,r.jsx)("div",{className:"page-body",children:t}),(0,r.jsx)(j,{})]})})},E=()=>(0,r.jsxs)(_,{text:"Aura Design Next Base",children:[(0,r.jsxs)(s(),{color:"yellow",className:"centertxt",children:[(0,r.jsx)("h2",{children:"Welcome to my imagination"}),(0,r.jsxs)("p",{children:["Get started by editing"," ",(0,r.jsx)("span",{className:"wall-pad info info-text",children:"public/style.css"})]})]}),(0,r.jsx)(s(),{color:"blue",children:(0,r.jsxs)(o(),{col:"two",children:[(0,r.jsx)("a",{href:"https://auradesignsystem.com",target:"_blank",className:"mod",children:(0,r.jsxs)("div",{className:"mod-detail",children:[(0,r.jsxs)("h3",{className:"mod-title mb0",children:["Documentation ",(0,r.jsx)("i",{className:"icon arrowAltRigth"})]}),(0,r.jsx)("p",{children:"Find in-depth information about Aura Design System features."})]})}),(0,r.jsx)("a",{href:"https://github.com/garitma/aura-design-system/tree/main/examples",target:"_blank",className:"mod",children:(0,r.jsxs)("div",{className:"mod-detail",children:[(0,r.jsxs)("h3",{className:"mod-title mb0",children:["Examples ",(0,r.jsx)("i",{className:"icon arrowAltRigth"})]}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Aura Design System projects."})]})}),(0,r.jsx)("a",{href:"https://auradesignsystem.com",target:"_blank",className:"mod",children:(0,r.jsxs)("div",{className:"mod-detail",children:[(0,r.jsxs)("h3",{className:"mod-title mb0",children:["Let's be clear, I don't care about you"," ",(0,r.jsx)("i",{className:"icon arrowAltRigth"})]}),(0,r.jsx)("p",{children:"Aura Design System is built under its own rules, it is very structured and not very flexible, designed to solve my problems. If my problems are yours too, welcome."})]})}),(0,r.jsx)("a",{href:"https://auradesignsystem.com/docs/getting-started",target:"_blank",className:"mod",children:(0,r.jsxs)("div",{className:"mod-detail",children:[(0,r.jsxs)("h3",{className:"mod-title mb0",children:["Before you start - Disclaimer"," ",(0,r.jsx)("i",{className:"icon arrowAltRigth"})]}),(0,r.jsx)("p",{children:"This library is CSS centric with Object-Oriented CSS (OOCSS) and Atomic Desing metodology."})]})})]})})]});var C=E},5675:function(e,t,n){e.exports=n(9749)},4865:function(e,t,n){var r,i;void 0!==(r="function"==typeof(i=function(){var e,t,n,r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(i[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=s(e,i.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(i.barSelector),c=i.speed,u=i.easing;return n.offsetWidth,a(function(t){var s,a;""===i.positionUsing&&(i.positionUsing=r.getPositioningCSS()),o(l,(s=e,(a="translate3d"===i.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+c+"ms "+u,a)),1===e?(o(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){o(n,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},c)},c)):setTimeout(t,c)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=i.template;var n,s,a=t.querySelector(i.barSelector),l=e?"-100":(-1+(r.status||0))*100,u=document.querySelector(i.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),!i.showSpinner&&(s=t.querySelector(i.spinnerSelector))&&m(s),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(t),t},r.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),o=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,i){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+s)in n)return r;return t}(s)),n.style[r]=i}return function(e,t){var r,i,s=arguments;if(2==s.length)for(r in t)void 0!==(i=t[r])&&t.hasOwnProperty(r)&&n(e,r,i);else n(e,s[1],s[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=d(e);l(n,t)||(e.className=(n+t).substring(1))}function u(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?i.call(t,n,t,e):i)&&(e.exports=r)}},function(e){e.O(0,[681,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);