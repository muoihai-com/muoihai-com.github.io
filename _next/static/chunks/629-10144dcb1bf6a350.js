(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),l=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,d=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],_=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=x&&r&&u.isLocalURL(p),t="undefined"!==typeof b?b:n&&n.locale,o=s[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(n,p,d,{locale:t})}),[d,p,x,b,r,n]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,p,d,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(p)&&f(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof b?b:n&&n.locale,L=n&&n.isLocaleDomain&&u.getDomainLocale(d,A,n&&n.locales,n&&n.domainLocales);E.href=L||u.addBasePath(u.addLocale(d,A,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=p},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),p=f[0],d=f[1],v=o(a.useState(t?t.current:null),2),y=v[0],h=v[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,p]);return a.useEffect((function(){if(!u&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,p]};var a=r(7294),i=r(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},7964:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),o=r(9008),a=r(7294),i=r(3198),u=r.n(i),l=r(4184),c=r.n(l);var s=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1],o=function(){document.body.scrollTop>window.innerHeight/2?r(!0):r(!1)};(0,a.useEffect)((function(){document.body.addEventListener("scroll",o)}),[]);var i,l,s;return(0,n.jsx)("div",{className:c()(u().top,(i={},l=u().visible,s=t,l in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,i)),onClick:function(){document.body.scrollTo({top:0,behavior:"smooth"})},children:(0,n.jsx)("svg",{width:30,height:30,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"white",d:"M572.235 205.282v600.365a30.118 30.118 0 11-60.235 0V205.282L292.382 438.633a28.913 28.913 0 01-42.646 0 33.43 33.43 0 010-45.236l271.058-288.045a28.913 28.913 0 0142.647 0L834.5 393.397a33.43 33.43 0 010 45.176 28.913 28.913 0 01-42.647 0l-219.618-233.23z"})})})},f="Hungkieu's blog",p=r(9357),d=r.n(p),v=function(e){var t=e.title,r=e.description,a=e.children;return(0,n.jsxs)("div",{className:d().layout,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:t===f?t:"".concat(t," | ").concat(f)}),(0,n.jsx)("meta",{name:"description",content:r})]}),(0,n.jsx)("main",{className:d().main,children:a}),(0,n.jsx)(s,{})]})};v.defaultProps={title:f,description:"100 Push ups. 100 sit ups. And 100 squats. Then a 10 kilometer run. Do it every single day! Oke!"};var y=v},3198:function(e){e.exports={top:"styles_top__yIBNd",visible:"styles_visible__m2ugq"}},9357:function(e){e.exports={layout:"styles_layout__uw121",main:"styles_main__ZTqbU"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);