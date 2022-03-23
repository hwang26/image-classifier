(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7404)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,o=Promise,(null!=o&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](a):a instanceof o)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=s({},r,e));var a,o;var u=r=s({},r,t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return n(u);r.loadableGenerated&&delete(r=s({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};a(n(7294));var i=a(n(4302));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=s},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},o=n(7161),u=n(6319);var c=[],d=[],f=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,s;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var s=this;this._timeout=setTimeout((function(){s._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),s&&r(t,s),e}();function b(e){return function(e,t){var n=function(){if(!s){var t=new p(e,r);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=l.default.lazy(r.loader));var s=null;if(!f&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&d.push((function(e){var t=!0,r=!1,s=void 0;try{for(var i,l=a[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return n()}}catch(u){r=!0,s=u}finally{try{t||null==l.return||l.return()}finally{if(r)throw s}}}))}var c=r.suspense?function(e,t){return l.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=l.default.useContext(u.LoadableContext),a=o.useSubscription(s);return l.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:s.retry}):a.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",l.default.forwardRef(c)}(h,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};m(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var _=b;t.default=_},7404:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return O},default:function(){return C}});var r=n(5893),s=n(9008),i=n(4865),a=n.n(i),l=n(7294),o=n(3445),u=n.n(o),c=n(7437),d=n.n(c),f=function(e){return!0===e.refresh?(0,r.jsx)("a",{href:".",children:(0,r.jsx)("button",{className:d().button,children:(0,r.jsx)("p",{children:e.buttonLabel})})}):(0,r.jsx)("button",{className:d().button,children:(0,r.jsx)("p",{children:e.buttonLabel})})},h=n(9028),p=n.n(h),b=function(e){return null===e.ml5Results?(0,r.jsxs)("div",{className:p().judges,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Alice: "}),"I like it! Looks % like X"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Bob: "}),"I don't know...its really giving me Y vibes. % Y is my guess."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Eve: "}),"What the...% Z for me."]})]}):(0,r.jsxs)("div",{className:p().judges,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Alice: "}),"I like it! Looks ",Math.round(100*e.ml5Results[0].confidence),"% like ",e.ml5Results[0].label.replaceAll("_"," ")]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Bob: "}),"I don't know...its really giving me ",e.ml5Results[1].label.replaceAll("_"," ")," vibes. ",Math.round(100*e.ml5Results[1].confidence),"%  ",e.ml5Results[1].label.replaceAll("_"," ")," is my guess."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Eve: "}),"What the...",Math.round(100*e.ml5Results[2].confidence),"%  ",e.ml5Results[2].label.replaceAll("_"," ")," for me."]})]})},m=(0,n(5152).default)((function(){return Promise.all([n.e(257),n.e(243),n.e(201)]).then(n.bind(n,8201))}),{loadableGenerated:{webpack:function(){return[8201]}},ssr:!1}),_=function(){var e=(0,l.useState)(null),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:u().paneAndSidebar,children:[(0,r.jsx)(m,{ml5Results:t,setMl5:n}),(0,r.jsxs)("div",{className:u().sideBarContainer,children:[(0,r.jsxs)("div",{className:u().sideBarButtons,children:[(0,r.jsx)(f,{buttonLabel:"Clear"}),(0,r.jsx)(f,{buttonLabel:"Refresh",refresh:!0})]}),(0,r.jsx)("p",{className:u().judgesFlavorText,children:"What do the judges say..."}),(0,r.jsx)(b,{ml5Results:t})]})]})},v=n(3333),y=n.n(v),j=function(e){var t=e.categories,n="";null!==t&&(n=(n=t[Math.floor(Math.random()*t.length)]).toUpperCase().replaceAll("_"," "));return(0,r.jsxs)("div",{className:y().prompt,children:[(0,r.jsx)("h1",{children:"Sketch It!"}),(0,r.jsx)("h2",{children:n})]})},g="/image-classifier/_next/static/media/info-icon.e88bfe11.svg",x=n(523),w=n.n(x),k=function(){return(0,r.jsxs)("div",{className:w().info,children:[(0,r.jsx)("img",{src:g}),(0,r.jsx)("p",{children:"Sketch It! uses the DoodleNet classifier. The doodles are crowdsourced from visitor contributions as they play Google's Quick, Draw! Game, and are publicly available to download."})]})},O=!0;function C(e){var t=e.data.split("\n");return t.pop(),(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Image Classifier"}),(0,r.jsx)("meta",{name:"description",content:"Demo of a deployed Next JS React App using DoodleNet image classifier through ml5js and p5js"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Coiny&family=Comic+Neue&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)(j,{categories:t}),(0,r.jsx)(k,{}),(0,r.jsx)(_,{})]})]})}},7437:function(e){e.exports={button:"Button_button__PjVhE"}},523:function(e){e.exports={info:"Info_info__P6w8S"}},9028:function(e){e.exports={judges:"Judges_judges__Y2UVo"}},3333:function(e){e.exports={prompt:"Prompt_prompt__jhFPX"}},3445:function(e){e.exports={paneAndSidebar:"Sidebar_paneAndSidebar__w8q_s",sideBarContainer:"Sidebar_sideBarContainer__CD2lY",sideBarButtons:"Sidebar_sideBarButtons__gEeNP",judgesFlavorText:"Sidebar_judgesFlavorText__b1_Qe"}},4865:function(e){e.exports={main:"Home_main__zgAJj"}},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},8217:function(e,t,n){"use strict";var r=n(6086),s=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=s.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var a=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),a({getCurrentValue:t,subscribe:n,value:i})),s.useDebugValue(i),s.useEffect((function(){function e(){if(!s){var e=t();a((function(s){return s.getCurrentValue!==t||s.subscribe!==n||s.value===e?s:r({},s,{value:e})}))}}var s=!1,i=n(e);return e(),function(){s=!0,i()}}),[t,n]),i}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);