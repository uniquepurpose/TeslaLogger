define(["react","@grafana/data","@grafana/ui","react-dom"],(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=9)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=r(0)},function(e,t,r){e.exports=r(10)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=u(r(0)),i=r(1),a=u(r(4)),s=u(r(12)),l=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.afterLoad,o=e.beforeLoad,i=e.scrollPosition,a=e.visibleByDefault;return r.state={visible:a},a&&(o(),n()),r.onVisible=r.onVisible.bind(r),r.isScrollTracked=Boolean(i&&Number.isFinite(i.x)&&i.x>=0&&Number.isFinite(i.y)&&i.y>=0),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,t=e.className,r=e.delayMethod,n=e.delayTime,i=e.height,u=e.placeholder,c=e.scrollPosition,p=e.style,f=e.threshold,d=e.useIntersectionObserver,h=e.width;return this.isScrollTracked||d&&(0,l.default)()?o.default.createElement(a.default,{className:t,height:i,onVisible:this.onVisible,placeholder:u,scrollPosition:c,style:p,threshold:f,useIntersectionObserver:d,width:h}):o.default.createElement(s.default,{className:t,delayMethod:r,delayTime:n,height:i,onVisible:this.onVisible,placeholder:u,style:p,threshold:f,width:h})}}]),t}(o.default.Component);c.propTypes={afterLoad:i.PropTypes.func,beforeLoad:i.PropTypes.func,useIntersectionObserver:i.PropTypes.bool,visibleByDefault:i.PropTypes.bool},c.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1},t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=u(r(0)),a=u(r(5)),s=r(1),l=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},p={},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(r.supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&(0,l.default)(),r.supportsObserver){var n=e.threshold;r.observer=function(e){return p[e]=p[e]||new IntersectionObserver(c,{rootMargin:e+"px"}),p[e]}(n)}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=a.default.findDOMNode(this.placeholder).style,n={left:parseInt(r.getPropertyValue("margin-left"),10)||0,top:parseInt(r.getPropertyValue("margin-top"),10)||0};return{bottom:e.y+t.bottom+n.top,left:e.x+t.left+n.left,right:e.x+t.right+n.left,top:e.y+t.top+n.top}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,n=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,i=t.x,a=t.x+window.innerWidth,s=t.y;return Boolean(s-r<=n.bottom&&o+r>=n.top&&i-r<=n.right&&a+r>=n.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,o=t.height,a=t.placeholder,s=t.style,l=t.width;if(a&&"function"!=typeof a.type)return i.default.cloneElement(a,{ref:function(t){return e.placeholder=t}});var u=n({display:"inline-block"},s);return void 0!==l&&(u.width=l),void 0!==o&&(u.height=o),i.default.createElement("span",{className:r,ref:function(t){return e.placeholder=t},style:u},a)}}]),t}(i.default.Component);f.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},f.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0},t.default=f},function(e,t){e.exports=r(4)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r(0)),a=f(r(5)),s=r(1),l=f(r(13)),u=f(r(14)),c=f(r(2)),p=f(r(15));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},m=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};t.default=function(e){var t=function(t){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));if(t.useIntersectionObserver=e.useIntersectionObserver&&(0,c.default)(),t.useIntersectionObserver)return d(t);var n=t.onChangeScroll.bind(t);return"debounce"===e.delayMethod?t.delayedScroll=(0,l.default)(n,e.delayTime):"throttle"===e.delayMethod&&(t.delayedScroll=(0,u.default)(n,e.delayTime)),t.state={scrollPosition:{x:h(),y:m()}},t.baseComponentRef=i.default.createRef(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),o(r,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(0,p.default)(a.default.findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=(0,p.default)(a.default.findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:h(),y:m()}})}},{key:"render",value:function(){var t=this.props,r=(t.delayMethod,t.delayTime,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["delayMethod","delayTime"])),o=this.useIntersectionObserver?null:this.state.scrollPosition;return i.default.createElement(e,n({ref:this.baseComponentRef,scrollPosition:o},r))}}]),r}(i.default.Component);return t.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},t.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},t}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackWindowScroll=t.LazyLoadComponent=t.LazyLoadImage=void 0;var n=a(r(9)),o=a(r(3)),i=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}t.LazyLoadImage=n.default,t.LazyLoadComponent=o.default,t.trackWindowScroll=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=l(r(0)),a=r(1),s=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loaded:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,t=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"]));return i.default.createElement("img",n({onLoad:this.onImageLoad()},t))}},{key:"getLazyLoadImage",value:function(){var e=this.props,t=e.beforeLoad,r=e.className,n=e.delayMethod,o=e.delayTime,a=e.height,l=e.placeholder,u=e.scrollPosition,c=e.style,p=e.threshold,f=e.useIntersectionObserver,d=e.visibleByDefault,h=e.width;return i.default.createElement(s.default,{beforeLoad:t,className:r,delayMethod:n,delayTime:o,height:a,placeholder:l,scrollPosition:u,style:c,threshold:p,useIntersectionObserver:f,visibleByDefault:d,width:h},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var t=this.props,r=t.effect,o=t.height,a=t.placeholderSrc,s=t.width,l=t.wrapperClassName,u=t.wrapperProps,c=this.state.loaded,p=c?" lazy-load-image-loaded":"";return i.default.createElement("span",n({className:l+" lazy-load-image-background "+r+p,style:{backgroundImage:c||!a?"":"url("+a+")",backgroundSize:c||!a?"":"100% 100%",display:"inline-block",height:o,width:s}},u),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,n=e.visibleByDefault,o=e.wrapperClassName,i=e.wrapperProps,a=this.getLazyLoadImage();return(t||r)&&!n||o||i?this.getWrappedLazyLoadImage(a):a}}]),t}(i.default.Component);u.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,delayMethod:a.PropTypes.string,delayTime:a.PropTypes.number,effect:a.PropTypes.string,placeholderSrc:a.PropTypes.string,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool,wrapperClassName:a.PropTypes.string,wrapperProps:a.PropTypes.object},u.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""},t.default=u},function(e,t,r){"use strict";var n=r(11);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=s(r(0)),i=s(r(4)),a=s(r(6));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return o.default.createElement(i.default,this.props)}}]),t}(o.default.Component);t.default=(0,a.default)(l)},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),c=Object.prototype.toString,p=Math.max,f=Math.min,d=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var s=o.test(e);return s||i.test(e)?a(e.slice(2),s?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,s,l,u=0,c=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var r=n,i=o;return n=o=void 0,u=t,a=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||b&&e-u>=i}function A(){var e=d();if(g(e))return w(e);s=setTimeout(A,function(e){var r=t-(e-l);return b?f(r,i-(e-u)):r}(e))}function w(e){return s=void 0,y&&n?v(e):(n=o=void 0,a)}function C(){var e=d(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return u=e,s=setTimeout(A,t),c?v(e):a}(l);if(b)return s=setTimeout(A,t),v(l)}return void 0===s&&(s=setTimeout(A,t)),a}return t=m(t)||0,h(r)&&(c=!!r.leading,i=(b="maxWait"in r)?p(m(r.maxWait)||0,t):i,y="trailing"in r?!!r.trailing:y),C.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=l=o=s=void 0},C.flush=function(){return void 0===s?a:w(d())},C}}).call(this,r(7))},function(e,t,r){(function(t){var r="Expected a function",n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,d=Math.min,h=function(){return c.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?s(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,s,l,u,c=0,p=!1,y=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var r=o,n=i;return o=i=void 0,c=t,s=e.apply(n,r)}function A(e){var r=e-u;return void 0===u||r>=t||r<0||y&&e-c>=a}function w(){var e=h();if(A(e))return C(e);l=setTimeout(w,function(e){var r=t-(e-u);return y?d(r,a-(e-c)):r}(e))}function C(e){return l=void 0,v&&o?g(e):(o=i=void 0,s)}function x(){var e=h(),r=A(e);if(o=arguments,i=this,u=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(w,t),p?g(e):s}(u);if(y)return l=setTimeout(w,t),g(u)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,m(n)&&(p=!!n.leading,a=(y="maxWait"in n)?f(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=i=l=void 0},x.flush=function(){return void 0===l?s:C(h())},x}(e,t,{leading:o,maxWait:t,trailing:i})}}).call(this,r(7))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return"undefined"==typeof getComputedStyle?e.style[t]:getComputedStyle(e,null).getPropertyValue(t)},o=function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window}}])},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){var n=r(6),o=r(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(n(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function s(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],u=r[l]||0,c="".concat(l," ").concat(u);r[l]=u+1;var p=s(c),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:c,updater:b(f,t),references:1}),n.push(c)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function b(e,t){var r,n,o;if(t.singleton){var i=m++;r=h||(h=u(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=s(r[n]);a[o].references--}for(var i=l(e,t),u=0;u<r.length;u++){var c=s(r[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}r=i}}}},function(e,t,r){(t=r(8)(!0)).push([e.i,".flexAddress div{margin-right:12px}.cb{margin-top:5px;margin-bottom:5px;border-left-style:solid;border-left-width:3px;padding:10px;display:flex}.cbd{background-color:#16181c}.cbl{background-color:#fff}.blgr{border-color:#7eb26d}.blrt{border-color:#e24d42}.blbl{border-color:#3e72b1}.blge{border-color:#e3ae32}.blpr{border-color:#a346cc}.blr{border-color:#7eb26d;border-left-style:solid;border-left-width:3px;padding:10px}.flexAddress{display:flex;flex-wrap:wrap;flex-direction:row;align-items:flex-end}.flexColumns{display:flex;flex-wrap:wrap;flex-direction:row;max-width:900px;margin-left:40px}.flexColumns div{margin-right:15px;flex:1 1}.ib1{flex:5 1;vertical-align:top;max-width:900px}.ib2{width:200px;vertical-align:top}.fw{width:100%}@media screen and (max-width: 1230px){.flexAddress{flex:1 0 50%}.flexAddress>div:first-child{flex:0 1 100%}}@media screen and (max-width: 712px){.flexColumns{margin-left:10px}}@media screen and (max-width: 680px){.flexColumns{flex-direction:column}.cb{flex-direction:column}}","",{version:3,sources:["App.css"],names:[],mappings:"AAAA,iBAAiB,iBAAiB,CAAC,IAAI,cAAc,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,qBAAqB,CAAC,YAAY,CAAC,YAAY,CAAC,KAAK,wBAAwB,CAAC,KAAK,qBAAqB,CAAC,MAAM,oBAAoB,CAAC,MAAM,oBAAoB,CAAC,MAAM,oBAAoB,CAAC,MAAM,oBAAoB,CAAC,MAAM,oBAAoB,CAAC,KAAK,oBAAoB,CAAC,uBAAuB,CAAC,qBAAqB,CAAC,YAAY,CAAC,aAAa,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,aAAa,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,iBAAiB,CAAC,QAAM,CAAC,KAAK,QAAM,CAAC,kBAAkB,CAAC,eAAe,CAAC,KAAK,WAAW,CAAC,kBAAkB,CAAC,IAAI,UAAU,CAAC,sCAAsC,aAAa,YAAY,CAAC,6BAA6B,aAAa,CAAC,CAAC,qCAAqC,aAAa,gBAAgB,CAAC,CAAC,qCAAqC,aAAa,qBAAqB,CAAC,IAAI,qBAAqB,CAAC",file:"App.css",sourcesContent:[".flexAddress div{margin-right:12px}.cb{margin-top:5px;margin-bottom:5px;border-left-style:solid;border-left-width:3px;padding:10px;display:flex}.cbd{background-color:#16181c}.cbl{background-color:#fff}.blgr{border-color:#7eb26d}.blrt{border-color:#e24d42}.blbl{border-color:#3e72b1}.blge{border-color:#e3ae32}.blpr{border-color:#a346cc}.blr{border-color:#7eb26d;border-left-style:solid;border-left-width:3px;padding:10px}.flexAddress{display:flex;flex-wrap:wrap;flex-direction:row;align-items:flex-end}.flexColumns{display:flex;flex-wrap:wrap;flex-direction:row;max-width:900px;margin-left:40px}.flexColumns div{margin-right:15px;flex:1}.ib1{flex:5;vertical-align:top;max-width:900px}.ib2{width:200px;vertical-align:top}.fw{width:100%}@media screen and (max-width: 1230px){.flexAddress{flex:1 0 50%}.flexAddress>div:first-child{flex:0 1 100%}}@media screen and (max-width: 712px){.flexColumns{margin-left:10px}}@media screen and (max-width: 680px){.flexColumns{flex-direction:column}.cb{flex-direction:column}}"]}]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),i=r.n(o),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function s(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var l=function(){function e(){}return e.GetUrl=function(e,t,r,n){return"Driving"===e||"Parking"===e?"d/zm7wN6Zgz/verbrauch?from="+t+"&to="+r+"&var-Car="+n:"Charging"===e?"d/BHhxFeZRz/laden?orgId=1&from="+t+"&to="+r+"&var-Car="+n:"#"},e.GetDivClassName=function(e,t){var r=t?"cbl":"cbd";return"Driving"===e?"cb blgr "+r:"Parking"===e?"cb blbl "+r:"Charging"===e?"cb blge "+r:"Missing"===e?"cb blrt "+r:"Update"===e?"cb blpr "+r:"cb"},e.FormatUnixTimestamp=function(e){return new Date(e).toLocaleString()},e.DrawLabelIfnotNull=function(e,t,r){return null!=t?e+t+r:""},e.DrawLabelIfnotNullWithRound=function(e,t,r,n){return null!=t?e+Math.round(t*n)/n+r:""},e}(),u=function(){function e(){}return e.t=function(t){return e.ready||e.LoadTranslationFile(),this.myhash.has(t)?this.myhash.get(t):t},e.LoadTranslationFile=function(){var t=this;e.ready=!0;var r=new XMLHttpRequest;(r.open("GET","public/plugins/teslalogger-timeline-panel/language.txt?_cache="+(new Date).getTime(),!1),r.send(null),200===r.status)&&r.responseText.split("\n").forEach((function(e){var r=e.split("=");if(r.length>1){var n=r[0],o=r[1];t.myhash.set(n,o)}}))},e.ready=!1,e.myhash=new Map,e}(),c=function(){function e(){}return e.Distance=function(t){return e.ready||e.LoadTranslationFile(),this.unit_km?t:.62137119223733*t},e.Temperature=function(t){return e.ready||e.LoadTranslationFile(),this.unit_celsius?t:9*t/5+32},e.km_miles=function(){return this.unit_km?u.t("km"):u.t("miles")},e.celsius_farenheit=function(){return this.unit_celsius?u.t("°C"):u.t("°F")},e.LoadTranslationFile=function(){e.ready=!0;var t=new XMLHttpRequest;if(t.open("GET","public/plugins/teslalogger-timeline-panel/settings.json?_cache="+(new Date).getTime(),!1),t.send(null),200===t.status)try{var r=JSON.parse(t.responseText);"fahrenheit"===r.Temperature&&(this.unit_celsius=!1),"mile"===r.Length&&(this.unit_km=!1),"kw"===r.Power&&(this.unit_ps=!1),r.URL_Admin&&(this.adminurl=r.URL_Admin)}catch(e){}},e.ready=!1,e.unit_km=!0,e.unit_celsius=!0,e.unit_ps=!0,e.adminurl="http://raspberry/admin/",e}(),p=r(2),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){if(!t.setWidthDone){t.setWidthDone=!0;var e=0,r=document.getElementsByClassName("Action");Array.from(r).forEach((function(t){return e=Math.max(e,t.clientWidth)})),Array.from(r).forEach((function(t){return t.style.width=String(e+10)+"px"}))}},t.prototype.render=function(){return i.a.createElement("div",{className:l.GetDivClassName(this.props.action,this.props.isLight)},i.a.createElement("div",{className:"ib1"},i.a.createElement("div",{className:"flexAddress"},i.a.createElement("div",{className:"Action"},i.a.createElement("h1",null,i.a.createElement("a",{href:l.GetUrl(this.props.action,this.props.startDate,this.props.endDate,this.props.carid)},u.t(this.props.action)))),i.a.createElement("div",null,this.DrawStartAddress()),i.a.createElement("div",null,i.a.createElement("h4",null,this.props.endAddress))),i.a.createElement("div",{className:"flexColumns"},i.a.createElement("div",null,u.t("Datum"),": ",l.FormatUnixTimestamp(this.props.startDate),i.a.createElement("br",null),l.DrawLabelIfnotNull(u.t("Dauer")+": ",this.props.minuteDiff," "+u.t("Minuten")),i.a.createElement("br",null),u.t("km Stand"),": ",this.GetOdometer()," ",c.km_miles()),i.a.createElement("div",null,u.t("Verbrauch"),": ",Math.round(10*this.props.kWh)/10,"kWh",i.a.createElement("br",null),u.t("kmDiff"),": ",this.GetRangediff()," ",c.km_miles(),i.a.createElement("br",null),u.t("SOC"),": ",this.props.soc,"% / ",u.t("SOC diff"),": ",this.props.socDiff,"%"),i.a.createElement("div",null,l.DrawLabelIfnotNullWithRound(u.t("Ø Temperatur")+": ",this.GetOutsideTemperature(),c.celsius_farenheit(),10),i.a.createElement("br",null),this.DrawChargingCosts()))),i.a.createElement("div",{className:"ib2"},i.a.createElement("a",{href:l.GetUrl(this.props.action,this.props.startDate,this.props.endDate,this.props.carid)},i.a.createElement(p.LazyLoadImage,{src:this.GetMapImg(),alt:"",width:"200px",height:"150px"}))))},t.prototype.DrawChargingCosts=function(){if("Charging"===this.props.action){var e=c.adminurl+"/chargingcost.php?id="+this.props.csid;return this.props.cost?i.a.createElement("a",{href:e,title:"Set Charging Cost"},l.DrawLabelIfnotNullWithRound(u.t("Cost")+": ",this.props.cost,"Eur",100)):i.a.createElement("a",{href:e,title:"Set Charging Cost"},"Set Costs")}return""},t.prototype.GetOutsideTemperature=function(){if(this.props.outsideTempAvg){var e=c.Temperature(this.props.outsideTempAvg);return Math.round(10*e)/10}return null},t.prototype.GetRangediff=function(){var e=c.Distance(this.props.rangeDiff);return Math.round(10*e)/10},t.prototype.GetOdometer=function(){var e=c.Distance(this.props.odometer);return Math.round(10*e)/10},t.prototype.GetMapImg=function(){return"Charging"===this.props.action?"public/plugins/teslalogger-timeline-panel/maps/C-"+this.props.imgname+".jpg":"Driving"===this.props.action?"public/plugins/teslalogger-timeline-panel/maps/T"+this.props.carid+"-"+this.props.startposid+"-"+this.props.endposid+".jpg":"Parking"===this.props.action?"public/plugins/teslalogger-timeline-panel/maps/P-"+this.props.imgname+".jpg":""},t.prototype.DrawStartAddress=function(){var e=c.adminurl+"/geoadd.php?lat="+this.props.startLat+"&lng="+this.props.startLng;return this.props.endAddress.length>0?i.a.createElement("h4",null,i.a.createElement("a",{href:e,title:"add geofence"},this.props.startAddress)," ➔"):i.a.createElement("h4",null,i.a.createElement("a",{href:e,title:"add geofence"},this.props.startAddress))},t.setWidthDone=!1,t}(o.Component),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:l.GetDivClassName(this.props.action,this.props.isLight)},i.a.createElement("div",{className:"ib1"},i.a.createElement("div",{className:"flexAddress"},i.a.createElement("div",{className:"Action"},i.a.createElement("h1",null,i.a.createElement("a",{href:l.GetUrl(this.props.action,this.props.startDate,this.props.endDate,this.props.carid)},this.props.action))),i.a.createElement("div",null,i.a.createElement("h4",null,this.props.startAddress))),i.a.createElement("div",{className:"flexColumns"},i.a.createElement("div",null,u.t("Datum"),": ",l.FormatUnixTimestamp(this.props.startDate),i.a.createElement("br",null),u.t("km Stand"),": ",this.GetOdometer()," ",c.km_miles(),i.a.createElement("br",null)),i.a.createElement("div",null,u.t("Missing"),": ",this.GetDistance()," ",c.km_miles()),i.a.createElement("div",null))))},t.prototype.GetOdometer=function(){var e=c.Distance(this.props.odometer);return Math.round(10*e)/10},t.prototype.GetDistance=function(){var e=c.Distance(this.props.distance);return Math.round(10*e)/10},t}(o.Component),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:l.GetDivClassName(this.props.action,this.props.isLight)},i.a.createElement("div",{className:"ib1"},i.a.createElement("div",{className:"flexAddress"},i.a.createElement("div",{className:"Action"},i.a.createElement("h1",null,i.a.createElement("a",{href:l.GetUrl(this.props.action,this.props.startDate,this.props.endDate,this.props.carid)},this.props.action))),i.a.createElement("div",null,i.a.createElement("h4",null,this.props.startAddress))),i.a.createElement("div",{className:"flexColumns"},i.a.createElement("div",null,"Date: ",l.FormatUnixTimestamp(this.props.startDate),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("div",null),i.a.createElement("div",null))))},t}(o.Component),m=r(3);function b(e,t,r){return r.series[0].fields.find((function(e){return e.name===t})).values.get(e)}r(5);r.d(t,"plugin",(function(){return y}));var y=new n.PanelPlugin((function(e){e.options;for(var t=e.data,r=(e.width,e.height,e.replaceVariables),n=Object(m.useTheme)().isLight,o=r("$Car"),a=t.series[0].fields[1].values.length,s=[],l=0;l<a;l++){var u=b(l,"Action",t);"Missing"===u?s.push(i.a.createElement(d,{action:u,startDate:b(l,"StartDate",t),endDate:b(l,"EndDate",t),startAddress:b(l,"Start_address",t),odometer:b(l,"odometer",t),distance:b(l,"distance",t),carid:o,isLight:n})):"Update"===u?s.push(i.a.createElement(h,{action:u,startDate:b(l,"StartDate",t),endDate:b(l,"EndDate",t),startAddress:b(l,"Start_address",t),odometer:b(l,"odometer",t),distance:b(l,"distance",t),carid:o,isLight:n})):s.push(i.a.createElement(f,{action:u,startDate:b(l,"StartDate",t),endDate:b(l,"EndDate",t),minuteDiff:b(l,"MinuteDiff",t),startAddress:b(l,"Start_address",t),endAddress:b(l,"End_address",t),kWh:b(l,"kWh",t),odometer:b(l,"odometer",t),rangeDiff:b(l,"RangeDiff",t),soc:b(l,"SOC",t),socDiff:b(l,"SOC_Diff",t),outsideTempAvg:b(l,"outside_temp_avg",t),startposid:b(l,"startposid",t),endposid:b(l,"endposid",t),imgname:b(l,"imgname",t),carid:o,isLight:n,startLat:b(l,"StartLat",t),startLng:b(l,"StartLng",t),cost:b(l,"cost",t),csid:b(l,"csid",t)}))}return i.a.createElement("div",{className:"fw"},s)})).setPanelOptions((function(e){return e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:function(e){return e.showSeriesCount}})}))}])}));
//# sourceMappingURL=module.js.map