(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0B/k":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r("zLVn"),n=r("q1tI"),l=r.n(n),o=["symbol","label"],s=function(e){var t=e.symbol,r=e.label,n=Object(a.a)(e,o);return l.a.createElement("span",Object.assign({role:"img","aria-label":r||"","aria-hidden":!r},n),t)}},Bl7J:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("Wbzz"),o=(r("ogSa"),r("72Yz")),s=r("0B/k"),c=r("ckOl"),i=function(e){return n.a.createElement("label",{className:"toggle-switch","aria-label":"theme toggle"},n.a.createElement("div",{className:"absolute flex justify-between w-full",style:{padding:"3px"}},n.a.createElement(c.a,{name:"moon",className:"text-yellow-500"}),n.a.createElement(c.a,{name:"sun",className:"text-yellow-500"})),n.a.createElement("input",{type:"checkbox",className:"h-0 w-0 appearance-none",checked:e.checked,onChange:function(t){return e.onToggle.call(null,t.target.checked)}}),n.a.createElement("span",{className:"slider round"}))};t.a=function(e){var t=e.children,r=Object(o.b)();Object(l.useStaticQuery)("3649515864");return n.a.createElement("div",{className:"flex min-h-screen flex-col w-full antialiased p-3 md:p-4 lg:p-6"},n.a.createElement("div",{className:"absolute top-0 right-0 text-gray-600 m-4"},n.a.createElement(i,{checked:r.checked,onToggle:r.changeTheme})),n.a.createElement("main",{className:"flex flex-col flex-grow"},t),n.a.createElement("footer",{className:"mt-auto text-gray-600 font-default leading-normal tracking-wide"},"© ",(new Date).getFullYear(),", Built with",n.a.createElement(s.a,{symbol:"❤",label:"heart",className:"text-red-500 mx-1"}),", and"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org",className:"btn-no-uppercase"},"Gatsby")))}},Ykc3:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),l=r("Wbzz"),o=r("Bl7J"),s=r("wEEd");t.default=function(e){var t=e.pageContext,r=e.data,a=t.tag,c=Object(s.b)({to:{opacity:1,transform:"translateX(0)"},from:{opacity:.1,transform:"translateX(-100%)"}}),i=r.allMarkdownRemark.edges;return n.a.createElement(o.a,null,n.a.createElement("article",{className:"flex flex-col w-full md:w-5/12"},n.a.createElement(l.Link,{to:"/all-tags",className:"btn self-start"},"Back"),n.a.createElement(s.a.div,{style:c,className:"mb-10"},n.a.createElement("h1",{className:"font-display text-2xl text-gray-600 leading-normal font-bold my-6"},n.a.createElement("span",{className:"text-3xl text-purple-600"},"#"),a),n.a.createElement("ul",null,i.map((function(e){var t=e.node.frontmatter,r=t.title,a=t.path,o=t.date;return n.a.createElement("li",{key:a},n.a.createElement(l.Link,{to:a,className:"flex flex-col lg:flex-row my-4 lg:items-center"},n.a.createElement("span",{className:"text-sm text-gray-600 font-default order-3 lg:order-1"},o),n.a.createElement("span",{className:"text-gray-600 h-full ml-3 mr-2 lg:border-l-2 lg:border-purple-800 order-1 lg:order-2"}," "),n.a.createElement("h1",{className:"btn-no-uppercase font-bold order-2 lg:order-3"},r)))}))))))}},ckOl:function(e,t,r){"use strict";var a=r("zLVn"),n=r("q1tI"),l=r.n(n),o=(r("E9XD"),r("7O5W")),s=r("17x9"),c=r.n(s);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var g=["style"];function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=d(t.slice(0,a)),l=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[n]=l,e}),{})}var O=!1;try{O=!0}catch(N){}function x(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:o.c.icon?o.c.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var w=["forwardedRef"];function j(e){var t=e.forwardedRef,r=p(e,w),a=r.icon,n=r.mask,l=r.symbol,s=r.className,c=r.title,i=r.titleId,u=x(a),y=v("classes",[].concat(b(function(e){var t,r=e.beat,a=e.fade,n=e.flash,l=e.spin,o=e.spinPulse,s=e.spinReverse,c=e.pulse,i=e.fixedWidth,f=e.inverse,u=e.border,p=e.listItem,b=e.flip,y=e.size,d=e.rotation,g=e.pull,h=(m(t={"fa-beat":r,"fa-fade":a,"fa-flash":n,"fa-spin":l,"fa-spin-reverse":s,"fa-spin-pulse":o,"fa-pulse":c,"fa-fw":i,"fa-inverse":f,"fa-border":u,"fa-li":p,"fa-flip-horizontal":"horizontal"===b||"both"===b,"fa-flip-vertical":"vertical"===b||"both"===b},"fa-".concat(y),null!=y),m(t,"fa-rotate-".concat(d),null!=d&&0!==d),m(t,"fa-pull-".concat(g),null!=g),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(h).map((function(e){return h[e]?e:null})).filter((function(e){return e}))}(r)),b(s.split(" ")))),d=v("transform","string"==typeof r.transform?o.c.transform(r.transform):r.transform),g=v("mask",x(n)),h=Object(o.a)(u,f(f(f(f({},y),d),g),{},{symbol:l,title:c,titleId:i}));if(!h)return function(){var e;!O&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var k=h.abstract,N={ref:t};return Object.keys(r).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(N[e]=r[e])})),E(k[0],N)}j.displayName="FontAwesomeIcon",j.propTypes={beat:c.a.bool,border:c.a.bool,className:c.a.string,fade:c.a.bool,flash:c.a.bool,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([0,90,180,270]),size:c.a.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,spinPulse:c.a.bool,spinReverse:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object]),swapOpacity:c.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=h(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[d(t)]=a}return e}),{attrs:{}}),o=a.style,s=void 0===o?{}:o,c=p(a,g);return l.attrs.style=f(f({},l.attrs.style),s),t.apply(void 0,[r.tag,f(f({},l.attrs),c)].concat(b(n)))}.bind(null,l.a.createElement),k=["name"];t.a=function(e){var t=e.name,r=Object(a.a)(e,k);return l.a.createElement(j,Object.assign({icon:t},r))}},ogSa:function(e,t,r){},zLVn:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-ed86927d3cd758662189.js.map