const p$3=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function a(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerpolicy&&(h.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?h.credentials="include":c.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function i(c){if(c.ep)return;c.ep=!0;const h=a(c);fetch(c.href,h)}};p$3();var react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(e,o,a){this.props=e,this.context=o,this.refs=D$1,this.updater=a||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,o){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,o,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,o,a){this.props=e,this.context=o,this.refs=D$1,this.updater=a||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,o,a){var i,c={},h=null,g=null;if(o!=null)for(i in o.ref!==void 0&&(g=o.ref),o.key!==void 0&&(h=""+o.key),o)J.call(o,i)&&!L$1.hasOwnProperty(i)&&(c[i]=o[i]);var Z=arguments.length-2;if(Z===1)c.children=a;else if(1<Z){for(var $=Array(Z),rn=0;rn<Z;rn++)$[rn]=arguments[rn+2];c.children=$}if(e&&e.defaultProps)for(i in Z=e.defaultProps,Z)c[i]===void 0&&(c[i]=Z[i]);return{$$typeof:l$1,type:e,key:h,ref:g,props:c,_owner:K$1.current}}function N$1(e,o){return{$$typeof:l$1,type:e.type,key:o,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$1}function escape(e){var o={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return o[a]})}var P$1=/\/+/g;function Q$1(e,o){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):o.toString(36)}function R$1(e,o,a,i,c){var h=typeof e;(h==="undefined"||h==="boolean")&&(e=null);var g=!1;if(e===null)g=!0;else switch(h){case"string":case"number":g=!0;break;case"object":switch(e.$$typeof){case l$1:case n$1:g=!0}}if(g)return g=e,c=c(g),e=i===""?"."+Q$1(g,0):i,I$1(c)?(a="",e!=null&&(a=e.replace(P$1,"$&/")+"/"),R$1(c,o,a,"",function(rn){return rn})):c!=null&&(O$1(c)&&(c=N$1(c,a+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+e)),o.push(c)),1;if(g=0,i=i===""?".":i+":",I$1(e))for(var Z=0;Z<e.length;Z++){h=e[Z];var $=i+Q$1(h,Z);g+=R$1(h,o,a,$,c)}else if($=A$1(e),typeof $=="function")for(e=$.call(e),Z=0;!(h=e.next()).done;)h=h.value,$=i+Q$1(h,Z++),g+=R$1(h,o,a,$,c);else if(h==="object")throw o=String(e),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return g}function S$1(e,o,a){if(e==null)return e;var i=[],c=0;return R$1(e,i,"","",function(h){return o.call(a,h,c++)}),i}function T$1(e){if(e._status===-1){var o=e._result;o=o(),o.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=o)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$1,forEach:function(e,o,a){S$1(e,function(){o.apply(this,arguments)},a)},count:function(e){var o=0;return S$1(e,function(){o++}),o},toArray:function(e){return S$1(e,function(o){return o})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.cloneElement=function(e,o,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=C$1({},e.props),c=e.key,h=e.ref,g=e._owner;if(o!=null){if(o.ref!==void 0&&(h=o.ref,g=K$1.current),o.key!==void 0&&(c=""+o.key),e.type&&e.type.defaultProps)var Z=e.type.defaultProps;for($ in o)J.call(o,$)&&!L$1.hasOwnProperty($)&&(i[$]=o[$]===void 0&&Z!==void 0?Z[$]:o[$])}var $=arguments.length-2;if($===1)i.children=a;else if(1<$){Z=Array($);for(var rn=0;rn<$;rn++)Z[rn]=arguments[rn+2];i.children=Z}return{$$typeof:l$1,type:e.type,key:c,ref:h,props:i,_owner:g}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t$1,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var o=M$1.bind(null,e);return o.type=e,o};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,o){return{$$typeof:x,type:e,compare:o===void 0?null:o}};react_production_min.startTransition=function(e){var o=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=o}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function(e,o){return U$1.current.useCallback(e,o)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,o){return U$1.current.useEffect(e,o)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,o,a){return U$1.current.useImperativeHandle(e,o,a)};react_production_min.useInsertionEffect=function(e,o){return U$1.current.useInsertionEffect(e,o)};react_production_min.useLayoutEffect=function(e,o){return U$1.current.useLayoutEffect(e,o)};react_production_min.useMemo=function(e,o){return U$1.current.useMemo(e,o)};react_production_min.useReducer=function(e,o,a){return U$1.current.useReducer(e,o,a)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,o,a){return U$1.current.useSyncExternalStore(e,o,a)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.1.0";react.exports=react_production_min;var React=react.exports,client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function o(Cn,Xn){var zn=Cn.length;Cn.push(Xn);e:for(;0<zn;){var Yn=zn-1>>>1,qn=Cn[Yn];if(0<c(qn,Xn))Cn[Yn]=Xn,Cn[zn]=qn,zn=Yn;else break e}}function a(Cn){return Cn.length===0?null:Cn[0]}function i(Cn){if(Cn.length===0)return null;var Xn=Cn[0],zn=Cn.pop();if(zn!==Xn){Cn[0]=zn;e:for(var Yn=0,qn=Cn.length,pt=qn>>>1;Yn<pt;){var yt=2*(Yn+1)-1,Qt=Cn[yt],Et=yt+1,Ut=Cn[Et];if(0>c(Qt,zn))Et<qn&&0>c(Ut,Qt)?(Cn[Yn]=Ut,Cn[Et]=zn,Yn=Et):(Cn[Yn]=Qt,Cn[yt]=zn,Yn=yt);else if(Et<qn&&0>c(Ut,zn))Cn[Yn]=Ut,Cn[Et]=zn,Yn=Et;else break e}}return Xn}function c(Cn,Xn){var zn=Cn.sortIndex-Xn.sortIndex;return zn!==0?zn:Cn.id-Xn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;e.unstable_now=function(){return h.now()}}else{var g=Date,Z=g.now();e.unstable_now=function(){return g.now()-Z}}var $=[],rn=[],dn=1,mn=null,cn=3,vn=!1,gn=!1,Pn=!1,xn=typeof setTimeout=="function"?setTimeout:null,un=typeof clearTimeout=="function"?clearTimeout:null,ln=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fn(Cn){for(var Xn=a(rn);Xn!==null;){if(Xn.callback===null)i(rn);else if(Xn.startTime<=Cn)i(rn),Xn.sortIndex=Xn.expirationTime,o($,Xn);else break;Xn=a(rn)}}function yn(Cn){if(Pn=!1,fn(Cn),!gn)if(a($)!==null)gn=!0,Nt(Mn);else{var Xn=a(rn);Xn!==null&&Wt(yn,Xn.startTime-Cn)}}function Mn(Cn,Xn){gn=!1,Pn&&(Pn=!1,un(Sn),Sn=-1),vn=!0;var zn=cn;try{for(fn(Xn),mn=a($);mn!==null&&(!(mn.expirationTime>Xn)||Cn&&!Gn());){var Yn=mn.callback;if(typeof Yn=="function"){mn.callback=null,cn=mn.priorityLevel;var qn=Yn(mn.expirationTime<=Xn);Xn=e.unstable_now(),typeof qn=="function"?mn.callback=qn:mn===a($)&&i($),fn(Xn)}else i($);mn=a($)}if(mn!==null)var pt=!0;else{var yt=a(rn);yt!==null&&Wt(yn,yt.startTime-Xn),pt=!1}return pt}finally{mn=null,cn=zn,vn=!1}}var An=!1,Rn=null,Sn=-1,Un=5,on=-1;function Gn(){return!(e.unstable_now()-on<Un)}function rt(){if(Rn!==null){var Cn=e.unstable_now();on=Cn;var Xn=!0;try{Xn=Rn(!0,Cn)}finally{Xn?ot():(An=!1,Rn=null)}}else An=!1}var ot;if(typeof ln=="function")ot=function(){ln(rt)};else if(typeof MessageChannel!="undefined"){var gt=new MessageChannel,ft=gt.port2;gt.port1.onmessage=rt,ot=function(){ft.postMessage(null)}}else ot=function(){xn(rt,0)};function Nt(Cn){Rn=Cn,An||(An=!0,ot())}function Wt(Cn,Xn){Sn=xn(function(){Cn(e.unstable_now())},Xn)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Cn){Cn.callback=null},e.unstable_continueExecution=function(){gn||vn||(gn=!0,Nt(Mn))},e.unstable_forceFrameRate=function(Cn){0>Cn||125<Cn?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<Cn?Math.floor(1e3/Cn):5},e.unstable_getCurrentPriorityLevel=function(){return cn},e.unstable_getFirstCallbackNode=function(){return a($)},e.unstable_next=function(Cn){switch(cn){case 1:case 2:case 3:var Xn=3;break;default:Xn=cn}var zn=cn;cn=Xn;try{return Cn()}finally{cn=zn}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Cn,Xn){switch(Cn){case 1:case 2:case 3:case 4:case 5:break;default:Cn=3}var zn=cn;cn=Cn;try{return Xn()}finally{cn=zn}},e.unstable_scheduleCallback=function(Cn,Xn,zn){var Yn=e.unstable_now();switch(typeof zn=="object"&&zn!==null?(zn=zn.delay,zn=typeof zn=="number"&&0<zn?Yn+zn:Yn):zn=Yn,Cn){case 1:var qn=-1;break;case 2:qn=250;break;case 5:qn=1073741823;break;case 4:qn=1e4;break;default:qn=5e3}return qn=zn+qn,Cn={id:dn++,callback:Xn,priorityLevel:Cn,startTime:zn,expirationTime:qn,sortIndex:-1},zn>Yn?(Cn.sortIndex=zn,o(rn,Cn),a($)===null&&Cn===a(rn)&&(Pn?(un(Sn),Sn=-1):Pn=!0,Wt(yn,zn-Yn))):(Cn.sortIndex=qn,o($,Cn),gn||vn||(gn=!0,Nt(Mn))),Cn},e.unstable_shouldYield=Gn,e.unstable_wrapCallback=function(Cn){var Xn=cn;return function(){var zn=cn;cn=Xn;try{return Cn.apply(this,arguments)}finally{cn=zn}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=react.exports,ba=scheduler.exports;function p$1(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,o){ha(e,o),ha(e+"Capture",o)}function ha(e,o){for(ea[e]=o,e=0;e<o.length;e++)da.add(o[e])}var ia=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function na(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function oa(e,o,a,i){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return i?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pa(e,o,a,i){if(o===null||typeof o=="undefined"||oa(e,o,a,i))return!0;if(i)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function t(e,o,a,i,c,h,g){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=i,this.attributeNamespace=c,this.mustUseProperty=a,this.propertyName=e,this.type=o,this.sanitizeURL=h,this.removeEmptyString=g}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];z[o]=new t(o,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new t(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(qa,ra);z[o]=new t(o,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(qa,ra);z[o]=new t(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(qa,ra);z[o]=new t(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new t(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new t(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,o,a,i){var c=z.hasOwnProperty(o)?z[o]:null;(c!==null?c.type!==0:i||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(pa(o,a,c,i)&&(a=null),i||c===null?na(o)&&(a===null?e.removeAttribute(o):e.setAttribute(o,""+a)):c.mustUseProperty?e[c.propertyName]=a===null?c.type===3?!1:"":a:(o=c.attributeName,i=c.attributeNamespace,a===null?e.removeAttribute(o):(c=c.type,a=c===3||c===4&&a===!0?"":""+a,i?e.setAttributeNS(i,o,a):e.setAttribute(o,a))))}var ta=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),va=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Ba=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),Ga=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function Ja(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,Ka;function La(e){if(Ka===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);Ka=o&&o[1]||""}return`
`+Ka+e}var Ma=!1;function Na(e,o){if(!e||Ma)return"";Ma=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(rn){var i=rn}Reflect.construct(e,[],o)}else{try{o.call()}catch(rn){i=rn}e.call(o.prototype)}else{try{throw Error()}catch(rn){i=rn}e()}}catch(rn){if(rn&&i&&typeof rn.stack=="string"){for(var c=rn.stack.split(`
`),h=i.stack.split(`
`),g=c.length-1,Z=h.length-1;1<=g&&0<=Z&&c[g]!==h[Z];)Z--;for(;1<=g&&0<=Z;g--,Z--)if(c[g]!==h[Z]){if(g!==1||Z!==1)do if(g--,Z--,0>Z||c[g]!==h[Z]){var $=`
`+c[g].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=g&&0<=Z);break}}}finally{Ma=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?La(e):""}function Oa(e){switch(e.tag){case 5:return La(e.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return e=Na(e.type,!1),e;case 11:return e=Na(e.type.render,!1),e;case 1:return e=Na(e.type,!0),e;default:return""}}function Pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wa:return"Fragment";case va:return"Portal";case za:return"Profiler";case xa:return"StrictMode";case Da:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ba:return(e.displayName||"Context")+".Consumer";case Aa:return(e._context.displayName||"Context")+".Provider";case Ca:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fa:return o=e.displayName||null,o!==null?o:Pa(e.type)||"Memo";case Ga:o=e._payload,e=e._init;try{return Pa(e(o))}catch{}}return null}function Qa(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(o);case 8:return o===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ra(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sa(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ta(e){var o=Sa(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),i=""+e[o];if(!e.hasOwnProperty(o)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return c.call(this)},set:function(g){i=""+g,h.call(this,g)}}),Object.defineProperty(e,o,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function Ua(e){e._valueTracker||(e._valueTracker=Ta(e))}function Va(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var a=o.getValue(),i="";return e&&(i=Sa(e)?e.checked?"true":"false":e.value),e=i,e!==a?(o.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,o){var a=o.checked;return A({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a!=null?a:e._wrapperState.initialChecked})}function Ya(e,o){var a=o.defaultValue==null?"":o.defaultValue,i=o.checked!=null?o.checked:o.defaultChecked;a=Ra(o.value!=null?o.value:a),e._wrapperState={initialChecked:i,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Za(e,o){o=o.checked,o!=null&&sa(e,"checked",o,!1)}function $a(e,o){Za(e,o);var a=Ra(o.value),i=o.type;if(a!=null)i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?bb(e,o.type,a):o.hasOwnProperty("defaultValue")&&bb(e,o.type,Ra(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function cb(e,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var i=o.type;if(!(i!=="submit"&&i!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,a||o===e.value||(e.value=o),e.defaultValue=o}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function bb(e,o,a){(o!=="number"||Wa(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var db=Array.isArray;function eb(e,o,a,i){if(e=e.options,o){o={};for(var c=0;c<a.length;c++)o["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=o.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ra(a),o=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}o!==null||e[c].disabled||(o=e[c])}o!==null&&(o.selected=!0)}}function fb(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(p$1(91));return A({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gb(e,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(p$1(92));if(db(a)){if(1<a.length)throw Error(p$1(93));a=a[0]}o=a}o==null&&(o=""),a=o}e._wrapperState={initialValue:Ra(a)}}function hb(e,o){var a=Ra(o.value),i=Ra(o.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),o.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),i!=null&&(e.defaultValue=""+i)}function ib(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function jb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kb(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?jb(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lb,mb=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(o,a,i,c){MSApp.execUnsafeLocalFunction(function(){return e(o,a,i,c)})}:e}(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(lb=lb||document.createElement("div"),lb.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=lb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function nb(e,o){if(o){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=o;return}}e.textContent=o}var ob={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pb=["Webkit","ms","Moz","O"];Object.keys(ob).forEach(function(e){pb.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),ob[o]=ob[e]})});function qb(e,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||ob.hasOwnProperty(e)&&ob[e]?(""+o).trim():o+"px"}function rb(e,o){e=e.style;for(var a in o)if(o.hasOwnProperty(a)){var i=a.indexOf("--")===0,c=qb(a,o[a],i);a==="float"&&(a="cssFloat"),i?e.setProperty(a,c):e[a]=c}}var sb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tb(e,o){if(o){if(sb[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(p$1(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(p$1(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(p$1(61))}if(o.style!=null&&typeof o.style!="object")throw Error(p$1(62))}}function ub(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vb=null;function wb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xb=null,yb=null,zb=null;function Ab(e){if(e=Bb(e)){if(typeof xb!="function")throw Error(p$1(280));var o=e.stateNode;o&&(o=Cb(o),xb(e.stateNode,e.type,o))}}function Db(e){yb?zb?zb.push(e):zb=[e]:yb=e}function Eb(){if(yb){var e=yb,o=zb;if(zb=yb=null,Ab(e),o)for(e=0;e<o.length;e++)Ab(o[e])}}function Fb(e,o){return e(o)}function Gb(){}var Hb=!1;function Ib(e,o,a){if(Hb)return e(o,a);Hb=!0;try{return Fb(e,o,a)}finally{Hb=!1,(yb!==null||zb!==null)&&(Gb(),Eb())}}function Jb(e,o){var a=e.stateNode;if(a===null)return null;var i=Cb(a);if(i===null)return null;a=i[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p$1(231,o,typeof a));return a}var Kb=!1;if(ia)try{var Lb={};Object.defineProperty(Lb,"passive",{get:function(){Kb=!0}}),window.addEventListener("test",Lb,Lb),window.removeEventListener("test",Lb,Lb)}catch{Kb=!1}function Mb(e,o,a,i,c,h,g,Z,$){var rn=Array.prototype.slice.call(arguments,3);try{o.apply(a,rn)}catch(dn){this.onError(dn)}}var Nb=!1,Ob=null,Pb=!1,Qb=null,Rb={onError:function(e){Nb=!0,Ob=e}};function Sb(e,o,a,i,c,h,g,Z,$){Nb=!1,Ob=null,Mb.apply(Rb,arguments)}function Tb(e,o,a,i,c,h,g,Z,$){if(Sb.apply(this,arguments),Nb){if(Nb){var rn=Ob;Nb=!1,Ob=null}else throw Error(p$1(198));Pb||(Pb=!0,Qb=rn)}}function Ub(e){var o=e,a=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,(o.flags&4098)!==0&&(a=o.return),e=o.return;while(e)}return o.tag===3?a:null}function Vb(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function Wb(e){if(Ub(e)!==e)throw Error(p$1(188))}function Xb(e){var o=e.alternate;if(!o){if(o=Ub(e),o===null)throw Error(p$1(188));return o!==e?null:e}for(var a=e,i=o;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(i=c.return,i!==null){a=i;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return Wb(c),e;if(h===i)return Wb(c),o;h=h.sibling}throw Error(p$1(188))}if(a.return!==i.return)a=c,i=h;else{for(var g=!1,Z=c.child;Z;){if(Z===a){g=!0,a=c,i=h;break}if(Z===i){g=!0,i=c,a=h;break}Z=Z.sibling}if(!g){for(Z=h.child;Z;){if(Z===a){g=!0,a=h,i=c;break}if(Z===i){g=!0,i=h,a=c;break}Z=Z.sibling}if(!g)throw Error(p$1(189))}}if(a.alternate!==i)throw Error(p$1(190))}if(a.tag!==3)throw Error(p$1(188));return a.stateNode.current===a?e:o}function Yb(e){return e=Xb(e),e!==null?Zb(e):null}function Zb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=Zb(e);if(o!==null)return o;e=e.sibling}return null}var $b=ba.unstable_scheduleCallback,ac=ba.unstable_cancelCallback,bc=ba.unstable_shouldYield,cc=ba.unstable_requestPaint,B=ba.unstable_now,dc=ba.unstable_getCurrentPriorityLevel,ec=ba.unstable_ImmediatePriority,fc=ba.unstable_UserBlockingPriority,gc=ba.unstable_NormalPriority,hc=ba.unstable_LowPriority,ic=ba.unstable_IdlePriority,jc=null,kc=null;function lc(e){if(kc&&typeof kc.onCommitFiberRoot=="function")try{kc.onCommitFiberRoot(jc,e,void 0,(e.current.flags&128)===128)}catch{}}var nc=Math.clz32?Math.clz32:mc,oc=Math.log,pc=Math.LN2;function mc(e){return e>>>=0,e===0?32:31-(oc(e)/pc|0)|0}var qc=64,rc=4194304;function sc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tc(e,o){var a=e.pendingLanes;if(a===0)return 0;var i=0,c=e.suspendedLanes,h=e.pingedLanes,g=a&268435455;if(g!==0){var Z=g&~c;Z!==0?i=sc(Z):(h&=g,h!==0&&(i=sc(h)))}else g=a&~c,g!==0?i=sc(g):h!==0&&(i=sc(h));if(i===0)return 0;if(o!==0&&o!==i&&(o&c)===0&&(c=i&-i,h=o&-o,c>=h||c===16&&(h&4194240)!==0))return o;if((i&4)!==0&&(i|=a&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=i;0<o;)a=31-nc(o),c=1<<a,i|=e[a],o&=~c;return i}function uc(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(e,o){for(var a=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var g=31-nc(h),Z=1<<g,$=c[g];$===-1?((Z&a)===0||(Z&i)!==0)&&(c[g]=uc(Z,o)):$<=o&&(e.expiredLanes|=Z),h&=~Z}}function wc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xc(){var e=qc;return qc<<=1,(qc&4194240)===0&&(qc=64),e}function yc(e){for(var o=[],a=0;31>a;a++)o.push(e);return o}function zc(e,o,a){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-nc(o),e[o]=a}function Ac(e,o){var a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<a;){var c=31-nc(a),h=1<<c;o[c]=0,i[c]=-1,e[c]=-1,a&=~h}}function Bc(e,o){var a=e.entangledLanes|=o;for(e=e.entanglements;a;){var i=31-nc(a),c=1<<i;c&o|e[i]&o&&(e[i]|=o),a&=~c}}var C=0;function Cc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dc,Ec,Fc,Gc,Hc,Ic=!1,Jc=[],Kc=null,Lc=null,Mc=null,Nc=new Map,Oc=new Map,Pc=[],Qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,o){switch(e){case"focusin":case"focusout":Kc=null;break;case"dragenter":case"dragleave":Lc=null;break;case"mouseover":case"mouseout":Mc=null;break;case"pointerover":case"pointerout":Nc.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(o.pointerId)}}function Sc(e,o,a,i,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:o,domEventName:a,eventSystemFlags:i,nativeEvent:h,targetContainers:[c]},o!==null&&(o=Bb(o),o!==null&&Ec(o)),e):(e.eventSystemFlags|=i,o=e.targetContainers,c!==null&&o.indexOf(c)===-1&&o.push(c),e)}function Tc(e,o,a,i,c){switch(o){case"focusin":return Kc=Sc(Kc,e,o,a,i,c),!0;case"dragenter":return Lc=Sc(Lc,e,o,a,i,c),!0;case"mouseover":return Mc=Sc(Mc,e,o,a,i,c),!0;case"pointerover":var h=c.pointerId;return Nc.set(h,Sc(Nc.get(h)||null,e,o,a,i,c)),!0;case"gotpointercapture":return h=c.pointerId,Oc.set(h,Sc(Oc.get(h)||null,e,o,a,i,c)),!0}return!1}function Uc(e){var o=Vc(e.target);if(o!==null){var a=Ub(o);if(a!==null){if(o=a.tag,o===13){if(o=Vb(a),o!==null){e.blockedOn=o,Hc(e.priority,function(){Fc(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var a=Xc(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);vb=i,a.target.dispatchEvent(i),vb=null}else return o=Bb(a),o!==null&&Ec(o),e.blockedOn=a,!1;o.shift()}return!0}function Yc(e,o,a){Wc(e)&&a.delete(o)}function Zc(){Ic=!1,Kc!==null&&Wc(Kc)&&(Kc=null),Lc!==null&&Wc(Lc)&&(Lc=null),Mc!==null&&Wc(Mc)&&(Mc=null),Nc.forEach(Yc),Oc.forEach(Yc)}function $c(e,o){e.blockedOn===o&&(e.blockedOn=null,Ic||(Ic=!0,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,Zc)))}function ad(e){function o(c){return $c(c,e)}if(0<Jc.length){$c(Jc[0],e);for(var a=1;a<Jc.length;a++){var i=Jc[a];i.blockedOn===e&&(i.blockedOn=null)}}for(Kc!==null&&$c(Kc,e),Lc!==null&&$c(Lc,e),Mc!==null&&$c(Mc,e),Nc.forEach(o),Oc.forEach(o),a=0;a<Pc.length;a++)i=Pc[a],i.blockedOn===e&&(i.blockedOn=null);for(;0<Pc.length&&(a=Pc[0],a.blockedOn===null);)Uc(a),a.blockedOn===null&&Pc.shift()}var bd=ta.ReactCurrentBatchConfig,cd=!0;function dd(e,o,a,i){var c=C,h=bd.transition;bd.transition=null;try{C=1,ed(e,o,a,i)}finally{C=c,bd.transition=h}}function fd(e,o,a,i){var c=C,h=bd.transition;bd.transition=null;try{C=4,ed(e,o,a,i)}finally{C=c,bd.transition=h}}function ed(e,o,a,i){if(cd){var c=Xc(e,o,a,i);if(c===null)gd(e,o,i,hd,a),Rc(e,i);else if(Tc(c,e,o,a,i))i.stopPropagation();else if(Rc(e,i),o&4&&-1<Qc.indexOf(e)){for(;c!==null;){var h=Bb(c);if(h!==null&&Dc(h),h=Xc(e,o,a,i),h===null&&gd(e,o,i,hd,a),h===c)break;c=h}c!==null&&i.stopPropagation()}else gd(e,o,i,null,a)}}var hd=null;function Xc(e,o,a,i){if(hd=null,e=wb(i),e=Vc(e),e!==null)if(o=Ub(e),o===null)e=null;else if(a=o.tag,a===13){if(e=Vb(o),e!==null)return e;e=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return hd=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case ec:return 1;case fc:return 4;case gc:case hc:return 16;case ic:return 536870912;default:return 16}default:return 16}}var jd=null,kd=null,ld=null;function md(){if(ld)return ld;var e,o=kd,a=o.length,i,c="value"in jd?jd.value:jd.textContent,h=c.length;for(e=0;e<a&&o[e]===c[e];e++);var g=a-e;for(i=1;i<=g&&o[a-i]===c[h-i];i++);return ld=c.slice(e,1<i?1-i:void 0)}function nd(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function od(){return!0}function pd(){return!1}function qd(e){function o(a,i,c,h,g){this._reactName=a,this._targetInst=c,this.type=i,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var Z in e)e.hasOwnProperty(Z)&&(a=e[Z],this[Z]=a?a(h):h[Z]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?od:pd,this.isPropagationStopped=pd,this}return A(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=od)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=od)},persist:function(){},isPersistent:od}),o}var rd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=qd(rd),td=A({},rd,{view:0,detail:0}),ud=qd(td),vd,wd,xd,zd=A({},td,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xd&&(xd&&e.type==="mousemove"?(vd=e.screenX-xd.screenX,wd=e.screenY-xd.screenY):wd=vd=0,xd=e),vd)},movementY:function(e){return"movementY"in e?e.movementY:wd}}),Ad=qd(zd),Bd=A({},zd,{dataTransfer:0}),Cd=qd(Bd),Dd=A({},td,{relatedTarget:0}),Ed=qd(Dd),Fd=A({},rd,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=qd(Fd),Hd=A({},rd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Id=qd(Hd),Jd=A({},rd,{data:0}),Kd=qd(Jd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Nd[e])?!!o[e]:!1}function yd(){return Od}var Pd=A({},td,{key:function(e){if(e.key){var o=Ld[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=nd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(e){return e.type==="keypress"?nd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qd=qd(Pd),Rd=A({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=qd(Rd),Td=A({},td,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),Ud=qd(Td),Vd=A({},rd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=qd(Vd),Xd=A({},zd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=qd(Xd),Zd=[9,13,27,32],$d=ia&&"CompositionEvent"in window,ae=null;ia&&"documentMode"in document&&(ae=document.documentMode);var be=ia&&"TextEvent"in window&&!ae,ce=ia&&(!$d||ae&&8<ae&&11>=ae),de=String.fromCharCode(32),ee=!1;function fe(e,o){switch(e){case"keyup":return Zd.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ge(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var he=!1;function ie(e,o){switch(e){case"compositionend":return ge(o);case"keypress":return o.which!==32?null:(ee=!0,de);case"textInput":return e=o.data,e===de&&ee?null:e;default:return null}}function je(e,o){if(he)return e==="compositionend"||!$d&&fe(e,o)?(e=md(),ld=kd=jd=null,he=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return ce&&o.locale!=="ko"?null:o.data;default:return null}}var ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function le(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!ke[e.type]:o==="textarea"}function me(e,o,a,i){Db(i),o=ne(o,"onChange"),0<o.length&&(a=new sd("onChange","change",null,a,i),e.push({event:a,listeners:o}))}var oe=null,pe=null;function qe(e){re(e,0)}function se(e){var o=te(e);if(Va(o))return e}function ue(e,o){if(e==="change")return o}var ve=!1;if(ia){var we;if(ia){var xe="oninput"in document;if(!xe){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),xe=typeof ye.oninput=="function"}we=xe}else we=!1;ve=we&&(!document.documentMode||9<document.documentMode)}function ze(){oe&&(oe.detachEvent("onpropertychange",Ae),pe=oe=null)}function Ae(e){if(e.propertyName==="value"&&se(pe)){var o=[];me(o,pe,e,wb(e)),Ib(qe,o)}}function Be(e,o,a){e==="focusin"?(ze(),oe=o,pe=a,oe.attachEvent("onpropertychange",Ae)):e==="focusout"&&ze()}function Ce(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return se(pe)}function De(e,o){if(e==="click")return se(o)}function Ee(e,o){if(e==="input"||e==="change")return se(o)}function Fe(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var Ge=typeof Object.is=="function"?Object.is:Fe;function He(e,o){if(Ge(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var a=Object.keys(e),i=Object.keys(o);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var c=a[i];if(!ja.call(o,c)||!Ge(e[c],o[c]))return!1}return!0}function Ie(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Je(e,o){var a=Ie(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=o&&i>=o)return{node:a,offset:o-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ie(a)}}function Ke(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?Ke(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function Le(){for(var e=window,o=Wa();o instanceof e.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)e=o.contentWindow;else break;o=Wa(e.document)}return o}function Me(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function Ne(e){var o=Le(),a=e.focusedElem,i=e.selectionRange;if(o!==a&&a&&a.ownerDocument&&Ke(a.ownerDocument.documentElement,a)){if(i!==null&&Me(a)){if(o=i.start,e=i.end,e===void 0&&(e=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(e,a.value.length);else if(e=(o=a.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var c=a.textContent.length,h=Math.min(i.start,c);i=i.end===void 0?h:Math.min(i.end,c),!e.extend&&h>i&&(c=i,i=h,h=c),c=Je(a,h);var g=Je(a,i);c&&g&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(o=o.createRange(),o.setStart(c.node,c.offset),e.removeAllRanges(),h>i?(e.addRange(o),e.extend(g.node,g.offset)):(o.setEnd(g.node,g.offset),e.addRange(o)))}}for(o=[],e=a;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)e=o[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oe=ia&&"documentMode"in document&&11>=document.documentMode,Pe=null,Qe=null,Re=null,Se=!1;function Te(e,o,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Se||Pe==null||Pe!==Wa(i)||(i=Pe,"selectionStart"in i&&Me(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Re&&He(Re,i)||(Re=i,i=ne(Qe,"onSelect"),0<i.length&&(o=new sd("onSelect","select",null,o,a),e.push({event:o,listeners:i}),o.target=Pe)))}function Ue(e,o){var a={};return a[e.toLowerCase()]=o.toLowerCase(),a["Webkit"+e]="webkit"+o,a["Moz"+e]="moz"+o,a}var Ve={animationend:Ue("Animation","AnimationEnd"),animationiteration:Ue("Animation","AnimationIteration"),animationstart:Ue("Animation","AnimationStart"),transitionend:Ue("Transition","TransitionEnd")},We={},Xe={};ia&&(Xe=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);function Ye(e){if(We[e])return We[e];if(!Ve[e])return e;var o=Ve[e],a;for(a in o)if(o.hasOwnProperty(a)&&a in Xe)return We[e]=o[a];return e}var Ze=Ye("animationend"),$e=Ye("animationiteration"),af=Ye("animationstart"),bf=Ye("transitionend"),cf=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ef(e,o){cf.set(e,o),fa(o,[e])}for(var ff=0;ff<df.length;ff++){var gf=df[ff],hf=gf.toLowerCase(),jf=gf[0].toUpperCase()+gf.slice(1);ef(hf,"on"+jf)}ef(Ze,"onAnimationEnd");ef($e,"onAnimationIteration");ef(af,"onAnimationStart");ef("dblclick","onDoubleClick");ef("focusin","onFocus");ef("focusout","onBlur");ef(bf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));function mf(e,o,a){var i=e.type||"unknown-event";e.currentTarget=a,Tb(i,o,void 0,e),e.currentTarget=null}function re(e,o){o=(o&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],c=i.event;i=i.listeners;e:{var h=void 0;if(o)for(var g=i.length-1;0<=g;g--){var Z=i[g],$=Z.instance,rn=Z.currentTarget;if(Z=Z.listener,$!==h&&c.isPropagationStopped())break e;mf(c,Z,rn),h=$}else for(g=0;g<i.length;g++){if(Z=i[g],$=Z.instance,rn=Z.currentTarget,Z=Z.listener,$!==h&&c.isPropagationStopped())break e;mf(c,Z,rn),h=$}}}if(Pb)throw e=Qb,Pb=!1,Qb=null,e}function D(e,o){var a=o[nf];a===void 0&&(a=o[nf]=new Set);var i=e+"__bubble";a.has(i)||(of(o,e,2,!1),a.add(i))}function pf(e,o,a){var i=0;o&&(i|=4),of(a,e,i,o)}var qf="_reactListening"+Math.random().toString(36).slice(2);function rf(e){if(!e[qf]){e[qf]=!0,da.forEach(function(a){a!=="selectionchange"&&(lf.has(a)||pf(a,!1,e),pf(a,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[qf]||(o[qf]=!0,pf("selectionchange",!1,o))}}function of(e,o,a,i){switch(id(o)){case 1:var c=dd;break;case 4:c=fd;break;default:c=ed}a=c.bind(null,o,a,e),c=void 0,!Kb||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(o,a,{capture:!0,passive:c}):e.addEventListener(o,a,!0):c!==void 0?e.addEventListener(o,a,{passive:c}):e.addEventListener(o,a,!1)}function gd(e,o,a,i,c){var h=i;if((o&1)===0&&(o&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var Z=i.stateNode.containerInfo;if(Z===c||Z.nodeType===8&&Z.parentNode===c)break;if(g===4)for(g=i.return;g!==null;){var $=g.tag;if(($===3||$===4)&&($=g.stateNode.containerInfo,$===c||$.nodeType===8&&$.parentNode===c))return;g=g.return}for(;Z!==null;){if(g=Vc(Z),g===null)return;if($=g.tag,$===5||$===6){i=h=g;continue e}Z=Z.parentNode}}i=i.return}Ib(function(){var rn=h,dn=wb(a),mn=[];e:{var cn=cf.get(e);if(cn!==void 0){var vn=sd,gn=e;switch(e){case"keypress":if(nd(a)===0)break e;case"keydown":case"keyup":vn=Qd;break;case"focusin":gn="focus",vn=Ed;break;case"focusout":gn="blur",vn=Ed;break;case"beforeblur":case"afterblur":vn=Ed;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":vn=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":vn=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":vn=Ud;break;case Ze:case $e:case af:vn=Gd;break;case bf:vn=Wd;break;case"scroll":vn=ud;break;case"wheel":vn=Yd;break;case"copy":case"cut":case"paste":vn=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":vn=Sd}var Pn=(o&4)!==0,xn=!Pn&&e==="scroll",un=Pn?cn!==null?cn+"Capture":null:cn;Pn=[];for(var ln=rn,fn;ln!==null;){fn=ln;var yn=fn.stateNode;if(fn.tag===5&&yn!==null&&(fn=yn,un!==null&&(yn=Jb(ln,un),yn!=null&&Pn.push(sf(ln,yn,fn)))),xn)break;ln=ln.return}0<Pn.length&&(cn=new vn(cn,gn,null,a,dn),mn.push({event:cn,listeners:Pn}))}}if((o&7)===0){e:{if(cn=e==="mouseover"||e==="pointerover",vn=e==="mouseout"||e==="pointerout",cn&&a!==vb&&(gn=a.relatedTarget||a.fromElement)&&(Vc(gn)||gn[tf]))break e;if((vn||cn)&&(cn=dn.window===dn?dn:(cn=dn.ownerDocument)?cn.defaultView||cn.parentWindow:window,vn?(gn=a.relatedTarget||a.toElement,vn=rn,gn=gn?Vc(gn):null,gn!==null&&(xn=Ub(gn),gn!==xn||gn.tag!==5&&gn.tag!==6)&&(gn=null)):(vn=null,gn=rn),vn!==gn)){if(Pn=Ad,yn="onMouseLeave",un="onMouseEnter",ln="mouse",(e==="pointerout"||e==="pointerover")&&(Pn=Sd,yn="onPointerLeave",un="onPointerEnter",ln="pointer"),xn=vn==null?cn:te(vn),fn=gn==null?cn:te(gn),cn=new Pn(yn,ln+"leave",vn,a,dn),cn.target=xn,cn.relatedTarget=fn,yn=null,Vc(dn)===rn&&(Pn=new Pn(un,ln+"enter",gn,a,dn),Pn.target=fn,Pn.relatedTarget=xn,yn=Pn),xn=yn,vn&&gn)n:{for(Pn=vn,un=gn,ln=0,fn=Pn;fn;fn=uf(fn))ln++;for(fn=0,yn=un;yn;yn=uf(yn))fn++;for(;0<ln-fn;)Pn=uf(Pn),ln--;for(;0<fn-ln;)un=uf(un),fn--;for(;ln--;){if(Pn===un||un!==null&&Pn===un.alternate)break n;Pn=uf(Pn),un=uf(un)}Pn=null}else Pn=null;vn!==null&&vf(mn,cn,vn,Pn,!1),gn!==null&&xn!==null&&vf(mn,xn,gn,Pn,!0)}}e:{if(cn=rn?te(rn):window,vn=cn.nodeName&&cn.nodeName.toLowerCase(),vn==="select"||vn==="input"&&cn.type==="file")var Mn=ue;else if(le(cn))if(ve)Mn=Ee;else{Mn=Ce;var An=Be}else(vn=cn.nodeName)&&vn.toLowerCase()==="input"&&(cn.type==="checkbox"||cn.type==="radio")&&(Mn=De);if(Mn&&(Mn=Mn(e,rn))){me(mn,Mn,a,dn);break e}An&&An(e,cn,rn),e==="focusout"&&(An=cn._wrapperState)&&An.controlled&&cn.type==="number"&&bb(cn,"number",cn.value)}switch(An=rn?te(rn):window,e){case"focusin":(le(An)||An.contentEditable==="true")&&(Pe=An,Qe=rn,Re=null);break;case"focusout":Re=Qe=Pe=null;break;case"mousedown":Se=!0;break;case"contextmenu":case"mouseup":case"dragend":Se=!1,Te(mn,a,dn);break;case"selectionchange":if(Oe)break;case"keydown":case"keyup":Te(mn,a,dn)}var Rn;if($d)e:{switch(e){case"compositionstart":var Sn="onCompositionStart";break e;case"compositionend":Sn="onCompositionEnd";break e;case"compositionupdate":Sn="onCompositionUpdate";break e}Sn=void 0}else he?fe(e,a)&&(Sn="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Sn="onCompositionStart");Sn&&(ce&&a.locale!=="ko"&&(he||Sn!=="onCompositionStart"?Sn==="onCompositionEnd"&&he&&(Rn=md()):(jd=dn,kd="value"in jd?jd.value:jd.textContent,he=!0)),An=ne(rn,Sn),0<An.length&&(Sn=new Kd(Sn,e,null,a,dn),mn.push({event:Sn,listeners:An}),Rn?Sn.data=Rn:(Rn=ge(a),Rn!==null&&(Sn.data=Rn)))),(Rn=be?ie(e,a):je(e,a))&&(rn=ne(rn,"onBeforeInput"),0<rn.length&&(dn=new Kd("onBeforeInput","beforeinput",null,a,dn),mn.push({event:dn,listeners:rn}),dn.data=Rn))}re(mn,o)})}function sf(e,o,a){return{instance:e,listener:o,currentTarget:a}}function ne(e,o){for(var a=o+"Capture",i=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Jb(e,a),h!=null&&i.unshift(sf(e,h,c)),h=Jb(e,o),h!=null&&i.push(sf(e,h,c))),e=e.return}return i}function uf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vf(e,o,a,i,c){for(var h=o._reactName,g=[];a!==null&&a!==i;){var Z=a,$=Z.alternate,rn=Z.stateNode;if($!==null&&$===i)break;Z.tag===5&&rn!==null&&(Z=rn,c?($=Jb(a,h),$!=null&&g.unshift(sf(a,$,Z))):c||($=Jb(a,h),$!=null&&g.push(sf(a,$,Z)))),a=a.return}g.length!==0&&e.push({event:o,listeners:g})}var wf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(wf,`
`).replace(xf,"")}function zf(e,o,a){if(o=yf(o),yf(e)!==o&&a)throw Error(p$1(425))}function Af(){}var Bf=null,Cf=null;function Df(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf!="undefined"?function(e){return Gf.resolve(null).then(e).catch(Hf)}:Ef;function Hf(e){setTimeout(function(){throw e})}function Jf(e,o){var a=o,i=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(i===0){e.removeChild(c),ad(o);return}i--}else a!=="$"&&a!=="$?"&&a!=="$!"||i++;a=c}while(a);ad(o)}function Kf(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function Lf(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return e;o--}else a==="/$"&&o++}e=e.previousSibling}return null}var Mf=Math.random().toString(36).slice(2),Nf="__reactFiber$"+Mf,Of="__reactProps$"+Mf,tf="__reactContainer$"+Mf,nf="__reactEvents$"+Mf,Pf="__reactListeners$"+Mf,Qf="__reactHandles$"+Mf;function Vc(e){var o=e[Nf];if(o)return o;for(var a=e.parentNode;a;){if(o=a[tf]||a[Nf]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(e=Lf(e);e!==null;){if(a=e[Nf])return a;e=Lf(e)}return o}e=a,a=e.parentNode}return null}function Bb(e){return e=e[Nf]||e[tf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function te(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p$1(33))}function Cb(e){return e[Of]||null}var Rf=[],Sf=-1;function Tf(e){return{current:e}}function E(e){0>Sf||(e.current=Rf[Sf],Rf[Sf]=null,Sf--)}function G(e,o){Sf++,Rf[Sf]=e.current,e.current=o}var Uf={},H=Tf(Uf),Vf=Tf(!1),Wf=Uf;function Xf(e,o){var a=e.type.contextTypes;if(!a)return Uf;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===o)return i.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in a)c[h]=o[h];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),c}function Yf(e){return e=e.childContextTypes,e!=null}function Zf(){E(Vf),E(H)}function $f(e,o,a){if(H.current!==Uf)throw Error(p$1(168));G(H,o),G(Vf,a)}function ag(e,o,a){var i=e.stateNode;if(o=o.childContextTypes,typeof i.getChildContext!="function")return a;i=i.getChildContext();for(var c in i)if(!(c in o))throw Error(p$1(108,Qa(e)||"Unknown",c));return A({},a,i)}function bg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Uf,Wf=H.current,G(H,e),G(Vf,Vf.current),!0}function cg(e,o,a){var i=e.stateNode;if(!i)throw Error(p$1(169));a?(e=ag(e,o,Wf),i.__reactInternalMemoizedMergedChildContext=e,E(Vf),E(H),G(H,e)):E(Vf),G(Vf,a)}var dg=null,eg=!1,fg=!1;function gg(e){dg===null?dg=[e]:dg.push(e)}function hg(e){eg=!0,gg(e)}function ig(){if(!fg&&dg!==null){fg=!0;var e=0,o=C;try{var a=dg;for(C=1;e<a.length;e++){var i=a[e];do i=i(!0);while(i!==null)}dg=null,eg=!1}catch(c){throw dg!==null&&(dg=dg.slice(e+1)),$b(ec,ig),c}finally{C=o,fg=!1}}return null}var jg=ta.ReactCurrentBatchConfig;function kg(e,o){if(e&&e.defaultProps){o=A({},o),e=e.defaultProps;for(var a in e)o[a]===void 0&&(o[a]=e[a]);return o}return o}var lg=Tf(null),mg=null,ng=null,og=null;function pg(){og=ng=mg=null}function qg(e){var o=lg.current;E(lg),e._currentValue=o}function rg(e,o,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,i!==null&&(i.childLanes|=o)):i!==null&&(i.childLanes&o)!==o&&(i.childLanes|=o),e===a)break;e=e.return}}function sg(e,o){mg=e,og=ng=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&o)!==0&&(tg=!0),e.firstContext=null)}function ug(e){var o=e._currentValue;if(og!==e)if(e={context:e,memoizedValue:o,next:null},ng===null){if(mg===null)throw Error(p$1(308));ng=e,mg.dependencies={lanes:0,firstContext:e}}else ng=ng.next=e;return o}var vg=null,wg=!1;function xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zg(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function Ag(e,o){var a=e.updateQueue;a!==null&&(a=a.shared,Bg(e)?(e=a.interleaved,e===null?(o.next=o,vg===null?vg=[a]:vg.push(a)):(o.next=e.next,e.next=o),a.interleaved=o):(e=a.pending,e===null?o.next=o:(o.next=e.next,e.next=o),a.pending=o))}function Cg(e,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var i=o.lanes;i&=e.pendingLanes,a|=i,o.lanes=a,Bc(e,a)}}function Dg(e,o){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?c=h=g:h=h.next=g,a=a.next}while(a!==null);h===null?c=h=o:h=h.next=o}else c=h=o;a={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:i.shared,effects:i.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=o:e.next=o,a.lastBaseUpdate=o}function Eg(e,o,a,i){var c=e.updateQueue;wg=!1;var h=c.firstBaseUpdate,g=c.lastBaseUpdate,Z=c.shared.pending;if(Z!==null){c.shared.pending=null;var $=Z,rn=$.next;$.next=null,g===null?h=rn:g.next=rn,g=$;var dn=e.alternate;dn!==null&&(dn=dn.updateQueue,Z=dn.lastBaseUpdate,Z!==g&&(Z===null?dn.firstBaseUpdate=rn:Z.next=rn,dn.lastBaseUpdate=$))}if(h!==null){var mn=c.baseState;g=0,dn=rn=$=null,Z=h;do{var cn=Z.lane,vn=Z.eventTime;if((i&cn)===cn){dn!==null&&(dn=dn.next={eventTime:vn,lane:0,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null});e:{var gn=e,Pn=Z;switch(cn=o,vn=a,Pn.tag){case 1:if(gn=Pn.payload,typeof gn=="function"){mn=gn.call(vn,mn,cn);break e}mn=gn;break e;case 3:gn.flags=gn.flags&-65537|128;case 0:if(gn=Pn.payload,cn=typeof gn=="function"?gn.call(vn,mn,cn):gn,cn==null)break e;mn=A({},mn,cn);break e;case 2:wg=!0}}Z.callback!==null&&Z.lane!==0&&(e.flags|=64,cn=c.effects,cn===null?c.effects=[Z]:cn.push(Z))}else vn={eventTime:vn,lane:cn,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null},dn===null?(rn=dn=vn,$=mn):dn=dn.next=vn,g|=cn;if(Z=Z.next,Z===null){if(Z=c.shared.pending,Z===null)break;cn=Z,Z=cn.next,cn.next=null,c.lastBaseUpdate=cn,c.shared.pending=null}}while(1);if(dn===null&&($=mn),c.baseState=$,c.firstBaseUpdate=rn,c.lastBaseUpdate=dn,o=c.shared.interleaved,o!==null){c=o;do g|=c.lane,c=c.next;while(c!==o)}else h===null&&(c.shared.lanes=0);Fg|=g,e.lanes=g,e.memoizedState=mn}}function Gg(e,o,a){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var i=e[o],c=i.callback;if(c!==null){if(i.callback=null,i=a,typeof c!="function")throw Error(p$1(191,c));c.call(i)}}}var Hg=new aa.Component().refs;function Ig(e,o,a,i){o=e.memoizedState,a=a(i,o),a=a==null?o:A({},o,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mg={isMounted:function(e){return(e=e._reactInternals)?Ub(e)===e:!1},enqueueSetState:function(e,o,a){e=e._reactInternals;var i=Jg(),c=Kg(e),h=zg(i,c);h.payload=o,a!=null&&(h.callback=a),Ag(e,h),o=Lg(e,c,i),o!==null&&Cg(o,e,c)},enqueueReplaceState:function(e,o,a){e=e._reactInternals;var i=Jg(),c=Kg(e),h=zg(i,c);h.tag=1,h.payload=o,a!=null&&(h.callback=a),Ag(e,h),o=Lg(e,c,i),o!==null&&Cg(o,e,c)},enqueueForceUpdate:function(e,o){e=e._reactInternals;var a=Jg(),i=Kg(e),c=zg(a,i);c.tag=2,o!=null&&(c.callback=o),Ag(e,c),o=Lg(e,i,a),o!==null&&Cg(o,e,i)}};function Ng(e,o,a,i,c,h,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,g):o.prototype&&o.prototype.isPureReactComponent?!He(a,i)||!He(c,h):!0}function Og(e,o,a){var i=!1,c=Uf,h=o.contextType;return typeof h=="object"&&h!==null?h=ug(h):(c=Yf(o)?Wf:H.current,i=o.contextTypes,h=(i=i!=null)?Xf(e,c):Uf),o=new o(a,h),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mg,e.stateNode=o,o._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),o}function Pg(e,o,a,i){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,i),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,i),o.state!==e&&Mg.enqueueReplaceState(o,o.state,null)}function Qg(e,o,a,i){var c=e.stateNode;c.props=a,c.state=e.memoizedState,c.refs=Hg,xg(e);var h=o.contextType;typeof h=="object"&&h!==null?c.context=ug(h):(h=Yf(o)?Wf:H.current,c.context=Xf(e,h)),c.state=e.memoizedState,h=o.getDerivedStateFromProps,typeof h=="function"&&(Ig(e,o,h,a),c.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(o=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),o!==c.state&&Mg.enqueueReplaceState(c,c.state,null),Eg(e,a,c,i),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}var Rg=[],Sg=0,Tg=null,Ug=0,Vg=[],Wg=0,Xg=null,Yg=1,Zg="";function $g(e,o){Rg[Sg++]=Ug,Rg[Sg++]=Tg,Tg=e,Ug=o}function ah(e,o,a){Vg[Wg++]=Yg,Vg[Wg++]=Zg,Vg[Wg++]=Xg,Xg=e;var i=Yg;e=Zg;var c=32-nc(i)-1;i&=~(1<<c),a+=1;var h=32-nc(o)+c;if(30<h){var g=c-c%5;h=(i&(1<<g)-1).toString(32),i>>=g,c-=g,Yg=1<<32-nc(o)+c|a<<c|i,Zg=h+e}else Yg=1<<h|a<<c|i,Zg=e}function bh(e){e.return!==null&&($g(e,1),ah(e,1,0))}function ch(e){for(;e===Tg;)Tg=Rg[--Sg],Rg[Sg]=null,Ug=Rg[--Sg],Rg[Sg]=null;for(;e===Xg;)Xg=Vg[--Wg],Vg[Wg]=null,Zg=Vg[--Wg],Vg[Wg]=null,Yg=Vg[--Wg],Vg[Wg]=null}var dh=null,eh=null,I=!1,fh=null;function gh(e,o){var a=hh(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=e,o=e.deletions,o===null?(e.deletions=[a],e.flags|=16):o.push(a)}function ih(e,o){switch(e.tag){case 5:var a=e.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,dh=e,eh=Kf(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,dh=e,eh=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=Xg!==null?{id:Yg,overflow:Zg}:null,e.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=hh(18,null,null,0),a.stateNode=o,a.return=e,e.child=a,dh=e,eh=null,!0):!1;default:return!1}}function jh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kh(e){if(I){var o=eh;if(o){var a=o;if(!ih(e,o)){if(jh(e))throw Error(p$1(418));o=Kf(a.nextSibling);var i=dh;o&&ih(e,o)?gh(i,a):(e.flags=e.flags&-4097|2,I=!1,dh=e)}}else{if(jh(e))throw Error(p$1(418));e.flags=e.flags&-4097|2,I=!1,dh=e}}}function lh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dh=e}function mh(e){if(e!==dh)return!1;if(!I)return lh(e),I=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!Df(e.type,e.memoizedProps)),o&&(o=eh)){if(jh(e)){for(e=eh;e;)e=Kf(e.nextSibling);throw Error(p$1(418))}for(;o;)gh(e,o),o=Kf(o.nextSibling)}if(lh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p$1(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(o===0){eh=Kf(e.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}e=e.nextSibling}eh=null}}else eh=dh?Kf(e.stateNode.nextSibling):null;return!0}function nh(){eh=dh=null,I=!1}function oh(e){fh===null?fh=[e]:fh.push(e)}function ph(e,o,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p$1(309));var i=a.stateNode}if(!i)throw Error(p$1(147,e));var c=i,h=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===h?o.ref:(o=function(g){var Z=c.refs;Z===Hg&&(Z=c.refs={}),g===null?delete Z[h]:Z[h]=g},o._stringRef=h,o)}if(typeof e!="string")throw Error(p$1(284));if(!a._owner)throw Error(p$1(290,e))}return e}function qh(e,o){throw e=Object.prototype.toString.call(o),Error(p$1(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function rh(e){var o=e._init;return o(e._payload)}function sh(e){function o(un,ln){if(e){var fn=un.deletions;fn===null?(un.deletions=[ln],un.flags|=16):fn.push(ln)}}function a(un,ln){if(!e)return null;for(;ln!==null;)o(un,ln),ln=ln.sibling;return null}function i(un,ln){for(un=new Map;ln!==null;)ln.key!==null?un.set(ln.key,ln):un.set(ln.index,ln),ln=ln.sibling;return un}function c(un,ln){return un=th(un,ln),un.index=0,un.sibling=null,un}function h(un,ln,fn){return un.index=fn,e?(fn=un.alternate,fn!==null?(fn=fn.index,fn<ln?(un.flags|=2,ln):fn):(un.flags|=2,ln)):(un.flags|=1048576,ln)}function g(un){return e&&un.alternate===null&&(un.flags|=2),un}function Z(un,ln,fn,yn){return ln===null||ln.tag!==6?(ln=uh(fn,un.mode,yn),ln.return=un,ln):(ln=c(ln,fn),ln.return=un,ln)}function $(un,ln,fn,yn){var Mn=fn.type;return Mn===wa?dn(un,ln,fn.props.children,yn,fn.key):ln!==null&&(ln.elementType===Mn||typeof Mn=="object"&&Mn!==null&&Mn.$$typeof===Ga&&rh(Mn)===ln.type)?(yn=c(ln,fn.props),yn.ref=ph(un,ln,fn),yn.return=un,yn):(yn=vh(fn.type,fn.key,fn.props,null,un.mode,yn),yn.ref=ph(un,ln,fn),yn.return=un,yn)}function rn(un,ln,fn,yn){return ln===null||ln.tag!==4||ln.stateNode.containerInfo!==fn.containerInfo||ln.stateNode.implementation!==fn.implementation?(ln=wh(fn,un.mode,yn),ln.return=un,ln):(ln=c(ln,fn.children||[]),ln.return=un,ln)}function dn(un,ln,fn,yn,Mn){return ln===null||ln.tag!==7?(ln=xh(fn,un.mode,yn,Mn),ln.return=un,ln):(ln=c(ln,fn),ln.return=un,ln)}function mn(un,ln,fn){if(typeof ln=="string"&&ln!==""||typeof ln=="number")return ln=uh(""+ln,un.mode,fn),ln.return=un,ln;if(typeof ln=="object"&&ln!==null){switch(ln.$$typeof){case ua:return fn=vh(ln.type,ln.key,ln.props,null,un.mode,fn),fn.ref=ph(un,null,ln),fn.return=un,fn;case va:return ln=wh(ln,un.mode,fn),ln.return=un,ln;case Ga:var yn=ln._init;return mn(un,yn(ln._payload),fn)}if(db(ln)||Ja(ln))return ln=xh(ln,un.mode,fn,null),ln.return=un,ln;qh(un,ln)}return null}function cn(un,ln,fn,yn){var Mn=ln!==null?ln.key:null;if(typeof fn=="string"&&fn!==""||typeof fn=="number")return Mn!==null?null:Z(un,ln,""+fn,yn);if(typeof fn=="object"&&fn!==null){switch(fn.$$typeof){case ua:return fn.key===Mn?$(un,ln,fn,yn):null;case va:return fn.key===Mn?rn(un,ln,fn,yn):null;case Ga:return Mn=fn._init,cn(un,ln,Mn(fn._payload),yn)}if(db(fn)||Ja(fn))return Mn!==null?null:dn(un,ln,fn,yn,null);qh(un,fn)}return null}function vn(un,ln,fn,yn,Mn){if(typeof yn=="string"&&yn!==""||typeof yn=="number")return un=un.get(fn)||null,Z(ln,un,""+yn,Mn);if(typeof yn=="object"&&yn!==null){switch(yn.$$typeof){case ua:return un=un.get(yn.key===null?fn:yn.key)||null,$(ln,un,yn,Mn);case va:return un=un.get(yn.key===null?fn:yn.key)||null,rn(ln,un,yn,Mn);case Ga:var An=yn._init;return vn(un,ln,fn,An(yn._payload),Mn)}if(db(yn)||Ja(yn))return un=un.get(fn)||null,dn(ln,un,yn,Mn,null);qh(ln,yn)}return null}function gn(un,ln,fn,yn){for(var Mn=null,An=null,Rn=ln,Sn=ln=0,Un=null;Rn!==null&&Sn<fn.length;Sn++){Rn.index>Sn?(Un=Rn,Rn=null):Un=Rn.sibling;var on=cn(un,Rn,fn[Sn],yn);if(on===null){Rn===null&&(Rn=Un);break}e&&Rn&&on.alternate===null&&o(un,Rn),ln=h(on,ln,Sn),An===null?Mn=on:An.sibling=on,An=on,Rn=Un}if(Sn===fn.length)return a(un,Rn),I&&$g(un,Sn),Mn;if(Rn===null){for(;Sn<fn.length;Sn++)Rn=mn(un,fn[Sn],yn),Rn!==null&&(ln=h(Rn,ln,Sn),An===null?Mn=Rn:An.sibling=Rn,An=Rn);return I&&$g(un,Sn),Mn}for(Rn=i(un,Rn);Sn<fn.length;Sn++)Un=vn(Rn,un,Sn,fn[Sn],yn),Un!==null&&(e&&Un.alternate!==null&&Rn.delete(Un.key===null?Sn:Un.key),ln=h(Un,ln,Sn),An===null?Mn=Un:An.sibling=Un,An=Un);return e&&Rn.forEach(function(Gn){return o(un,Gn)}),I&&$g(un,Sn),Mn}function Pn(un,ln,fn,yn){var Mn=Ja(fn);if(typeof Mn!="function")throw Error(p$1(150));if(fn=Mn.call(fn),fn==null)throw Error(p$1(151));for(var An=Mn=null,Rn=ln,Sn=ln=0,Un=null,on=fn.next();Rn!==null&&!on.done;Sn++,on=fn.next()){Rn.index>Sn?(Un=Rn,Rn=null):Un=Rn.sibling;var Gn=cn(un,Rn,on.value,yn);if(Gn===null){Rn===null&&(Rn=Un);break}e&&Rn&&Gn.alternate===null&&o(un,Rn),ln=h(Gn,ln,Sn),An===null?Mn=Gn:An.sibling=Gn,An=Gn,Rn=Un}if(on.done)return a(un,Rn),I&&$g(un,Sn),Mn;if(Rn===null){for(;!on.done;Sn++,on=fn.next())on=mn(un,on.value,yn),on!==null&&(ln=h(on,ln,Sn),An===null?Mn=on:An.sibling=on,An=on);return I&&$g(un,Sn),Mn}for(Rn=i(un,Rn);!on.done;Sn++,on=fn.next())on=vn(Rn,un,Sn,on.value,yn),on!==null&&(e&&on.alternate!==null&&Rn.delete(on.key===null?Sn:on.key),ln=h(on,ln,Sn),An===null?Mn=on:An.sibling=on,An=on);return e&&Rn.forEach(function(rt){return o(un,rt)}),I&&$g(un,Sn),Mn}function xn(un,ln,fn,yn){if(typeof fn=="object"&&fn!==null&&fn.type===wa&&fn.key===null&&(fn=fn.props.children),typeof fn=="object"&&fn!==null){switch(fn.$$typeof){case ua:e:{for(var Mn=fn.key,An=ln;An!==null;){if(An.key===Mn){if(Mn=fn.type,Mn===wa){if(An.tag===7){a(un,An.sibling),ln=c(An,fn.props.children),ln.return=un,un=ln;break e}}else if(An.elementType===Mn||typeof Mn=="object"&&Mn!==null&&Mn.$$typeof===Ga&&rh(Mn)===An.type){a(un,An.sibling),ln=c(An,fn.props),ln.ref=ph(un,An,fn),ln.return=un,un=ln;break e}a(un,An);break}else o(un,An);An=An.sibling}fn.type===wa?(ln=xh(fn.props.children,un.mode,yn,fn.key),ln.return=un,un=ln):(yn=vh(fn.type,fn.key,fn.props,null,un.mode,yn),yn.ref=ph(un,ln,fn),yn.return=un,un=yn)}return g(un);case va:e:{for(An=fn.key;ln!==null;){if(ln.key===An)if(ln.tag===4&&ln.stateNode.containerInfo===fn.containerInfo&&ln.stateNode.implementation===fn.implementation){a(un,ln.sibling),ln=c(ln,fn.children||[]),ln.return=un,un=ln;break e}else{a(un,ln);break}else o(un,ln);ln=ln.sibling}ln=wh(fn,un.mode,yn),ln.return=un,un=ln}return g(un);case Ga:return An=fn._init,xn(un,ln,An(fn._payload),yn)}if(db(fn))return gn(un,ln,fn,yn);if(Ja(fn))return Pn(un,ln,fn,yn);qh(un,fn)}return typeof fn=="string"&&fn!==""||typeof fn=="number"?(fn=""+fn,ln!==null&&ln.tag===6?(a(un,ln.sibling),ln=c(ln,fn),ln.return=un,un=ln):(a(un,ln),ln=uh(fn,un.mode,yn),ln.return=un,un=ln),g(un)):a(un,ln)}return xn}var yh=sh(!0),zh=sh(!1),Ah={},Bh=Tf(Ah),Ch=Tf(Ah),Dh=Tf(Ah);function Eh(e){if(e===Ah)throw Error(p$1(174));return e}function Fh(e,o){switch(G(Dh,o),G(Ch,e),G(Bh,Ah),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:kb(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=kb(o,e)}E(Bh),G(Bh,o)}function Gh(){E(Bh),E(Ch),E(Dh)}function Hh(e){Eh(Dh.current);var o=Eh(Bh.current),a=kb(o,e.type);o!==a&&(G(Ch,e),G(Bh,a))}function Ih(e){Ch.current===e&&(E(Bh),E(Ch))}var K=Tf(0);function Jh(e){for(var o=e;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Kh=[];function Lh(){for(var e=0;e<Kh.length;e++)Kh[e]._workInProgressVersionPrimary=null;Kh.length=0}var Mh=ta.ReactCurrentDispatcher,Nh=ta.ReactCurrentBatchConfig,Oh=0,L=null,M=null,N=null,Ph=!1,Qh=!1,Rh=0,Sh=0;function O(){throw Error(p$1(321))}function Th(e,o){if(o===null)return!1;for(var a=0;a<o.length&&a<e.length;a++)if(!Ge(e[a],o[a]))return!1;return!0}function Uh(e,o,a,i,c,h){if(Oh=h,L=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Mh.current=e===null||e.memoizedState===null?Vh:Wh,e=a(i,c),Qh){h=0;do{if(Qh=!1,Rh=0,25<=h)throw Error(p$1(301));h+=1,N=M=null,o.updateQueue=null,Mh.current=Xh,e=a(i,c)}while(Qh)}if(Mh.current=Yh,o=M!==null&&M.next!==null,Oh=0,N=M=L=null,Ph=!1,o)throw Error(p$1(300));return e}function Zh(){var e=Rh!==0;return Rh=0,e}function $h(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return N===null?L.memoizedState=N=e:N=N.next=e,N}function ai(){if(M===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=M.next;var o=N===null?L.memoizedState:N.next;if(o!==null)N=o,M=e;else{if(e===null)throw Error(p$1(310));M=e,e={memoizedState:M.memoizedState,baseState:M.baseState,baseQueue:M.baseQueue,queue:M.queue,next:null},N===null?L.memoizedState=N=e:N=N.next=e}return N}function bi(e,o){return typeof o=="function"?o(e):o}function ci(e){var o=ai(),a=o.queue;if(a===null)throw Error(p$1(311));a.lastRenderedReducer=e;var i=M,c=i.baseQueue,h=a.pending;if(h!==null){if(c!==null){var g=c.next;c.next=h.next,h.next=g}i.baseQueue=c=h,a.pending=null}if(c!==null){h=c.next,i=i.baseState;var Z=g=null,$=null,rn=h;do{var dn=rn.lane;if((Oh&dn)===dn)$!==null&&($=$.next={lane:0,action:rn.action,hasEagerState:rn.hasEagerState,eagerState:rn.eagerState,next:null}),i=rn.hasEagerState?rn.eagerState:e(i,rn.action);else{var mn={lane:dn,action:rn.action,hasEagerState:rn.hasEagerState,eagerState:rn.eagerState,next:null};$===null?(Z=$=mn,g=i):$=$.next=mn,L.lanes|=dn,Fg|=dn}rn=rn.next}while(rn!==null&&rn!==h);$===null?g=i:$.next=Z,Ge(i,o.memoizedState)||(tg=!0),o.memoizedState=i,o.baseState=g,o.baseQueue=$,a.lastRenderedState=i}if(e=a.interleaved,e!==null){c=e;do h=c.lane,L.lanes|=h,Fg|=h,c=c.next;while(c!==e)}else c===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function di(e){var o=ai(),a=o.queue;if(a===null)throw Error(p$1(311));a.lastRenderedReducer=e;var i=a.dispatch,c=a.pending,h=o.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do h=e(h,g.action),g=g.next;while(g!==c);Ge(h,o.memoizedState)||(tg=!0),o.memoizedState=h,o.baseQueue===null&&(o.baseState=h),a.lastRenderedState=h}return[h,i]}function ei(){}function fi(e,o){var a=L,i=ai(),c=o(),h=!Ge(i.memoizedState,c);if(h&&(i.memoizedState=c,tg=!0),i=i.queue,gi(hi.bind(null,a,i,e),[e]),i.getSnapshot!==o||h||N!==null&&N.memoizedState.tag&1){if(a.flags|=2048,ii(9,ji.bind(null,a,i,c,o),void 0,null),P===null)throw Error(p$1(349));(Oh&30)!==0||ki(a,o,c)}return c}function ki(e,o,a){e.flags|=16384,e={getSnapshot:o,value:a},o=L.updateQueue,o===null?(o={lastEffect:null,stores:null},L.updateQueue=o,o.stores=[e]):(a=o.stores,a===null?o.stores=[e]:a.push(e))}function ji(e,o,a,i){o.value=a,o.getSnapshot=i,li(o)&&Lg(e,1,-1)}function hi(e,o,a){return a(function(){li(o)&&Lg(e,1,-1)})}function li(e){var o=e.getSnapshot;e=e.value;try{var a=o();return!Ge(e,a)}catch{return!0}}function mi(e){var o=$h();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},o.queue=e,e=e.dispatch=ni.bind(null,L,e),[o.memoizedState,e]}function ii(e,o,a,i){return e={tag:e,create:o,destroy:a,deps:i,next:null},o=L.updateQueue,o===null?(o={lastEffect:null,stores:null},L.updateQueue=o,o.lastEffect=e.next=e):(a=o.lastEffect,a===null?o.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,o.lastEffect=e)),e}function oi(){return ai().memoizedState}function pi(e,o,a,i){var c=$h();L.flags|=e,c.memoizedState=ii(1|o,a,void 0,i===void 0?null:i)}function qi(e,o,a,i){var c=ai();i=i===void 0?null:i;var h=void 0;if(M!==null){var g=M.memoizedState;if(h=g.destroy,i!==null&&Th(i,g.deps)){c.memoizedState=ii(o,a,h,i);return}}L.flags|=e,c.memoizedState=ii(1|o,a,h,i)}function ri(e,o){return pi(8390656,8,e,o)}function gi(e,o){return qi(2048,8,e,o)}function si(e,o){return qi(4,2,e,o)}function ti(e,o){return qi(4,4,e,o)}function ui(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function vi(e,o,a){return a=a!=null?a.concat([e]):null,qi(4,4,ui.bind(null,o,e),a)}function wi(){}function xi(e,o){var a=ai();o=o===void 0?null:o;var i=a.memoizedState;return i!==null&&o!==null&&Th(o,i[1])?i[0]:(a.memoizedState=[e,o],e)}function yi(e,o){var a=ai();o=o===void 0?null:o;var i=a.memoizedState;return i!==null&&o!==null&&Th(o,i[1])?i[0]:(e=e(),a.memoizedState=[e,o],e)}function zi(e,o,a){return(Oh&21)===0?(e.baseState&&(e.baseState=!1,tg=!0),e.memoizedState=a):(Ge(a,o)||(a=xc(),L.lanes|=a,Fg|=a,e.baseState=!0),o)}function Ai(e,o){var a=C;C=a!==0&&4>a?a:4,e(!0);var i=Nh.transition;Nh.transition={};try{e(!1),o()}finally{C=a,Nh.transition=i}}function Bi(){return ai().memoizedState}function Ci(e,o,a){var i=Kg(e);a={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null},Di(e)?Ei(o,a):(Fi(e,o,a),a=Jg(),e=Lg(e,i,a),e!==null&&Gi(e,o,i))}function ni(e,o,a){var i=Kg(e),c={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null};if(Di(e))Ei(o,c);else{Fi(e,o,c);var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=o.lastRenderedReducer,h!==null))try{var g=o.lastRenderedState,Z=h(g,a);if(c.hasEagerState=!0,c.eagerState=Z,Ge(Z,g))return}catch{}finally{}a=Jg(),e=Lg(e,i,a),e!==null&&Gi(e,o,i)}}function Di(e){var o=e.alternate;return e===L||o!==null&&o===L}function Ei(e,o){Qh=Ph=!0;var a=e.pending;a===null?o.next=o:(o.next=a.next,a.next=o),e.pending=o}function Fi(e,o,a){Bg(e)?(e=o.interleaved,e===null?(a.next=a,vg===null?vg=[o]:vg.push(o)):(a.next=e.next,e.next=a),o.interleaved=a):(e=o.pending,e===null?a.next=a:(a.next=e.next,e.next=a),o.pending=a)}function Gi(e,o,a){if((a&4194240)!==0){var i=o.lanes;i&=e.pendingLanes,a|=i,o.lanes=a,Bc(e,a)}}var Yh={readContext:ug,useCallback:O,useContext:O,useEffect:O,useImperativeHandle:O,useInsertionEffect:O,useLayoutEffect:O,useMemo:O,useReducer:O,useRef:O,useState:O,useDebugValue:O,useDeferredValue:O,useTransition:O,useMutableSource:O,useSyncExternalStore:O,useId:O,unstable_isNewReconciler:!1},Vh={readContext:ug,useCallback:function(e,o){return $h().memoizedState=[e,o===void 0?null:o],e},useContext:ug,useEffect:ri,useImperativeHandle:function(e,o,a){return a=a!=null?a.concat([e]):null,pi(4194308,4,ui.bind(null,o,e),a)},useLayoutEffect:function(e,o){return pi(4194308,4,e,o)},useInsertionEffect:function(e,o){return pi(4,2,e,o)},useMemo:function(e,o){var a=$h();return o=o===void 0?null:o,e=e(),a.memoizedState=[e,o],e},useReducer:function(e,o,a){var i=$h();return o=a!==void 0?a(o):o,i.memoizedState=i.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Ci.bind(null,L,e),[i.memoizedState,e]},useRef:function(e){var o=$h();return e={current:e},o.memoizedState=e},useState:mi,useDebugValue:wi,useDeferredValue:function(e){return $h().memoizedState=e},useTransition:function(){var e=mi(!1),o=e[0];return e=Ai.bind(null,e[1]),$h().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,a){var i=L,c=$h();if(I){if(a===void 0)throw Error(p$1(407));a=a()}else{if(a=o(),P===null)throw Error(p$1(349));(Oh&30)!==0||ki(i,o,a)}c.memoizedState=a;var h={value:a,getSnapshot:o};return c.queue=h,ri(hi.bind(null,i,h,e),[e]),i.flags|=2048,ii(9,ji.bind(null,i,h,a,o),void 0,null),a},useId:function(){var e=$h(),o=P.identifierPrefix;if(I){var a=Zg,i=Yg;a=(i&~(1<<32-nc(i)-1)).toString(32)+a,o=":"+o+"R"+a,a=Rh++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Sh++,o=":"+o+"r"+a.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},Wh={readContext:ug,useCallback:xi,useContext:ug,useEffect:gi,useImperativeHandle:vi,useInsertionEffect:si,useLayoutEffect:ti,useMemo:yi,useReducer:ci,useRef:oi,useState:function(){return ci(bi)},useDebugValue:wi,useDeferredValue:function(e){var o=ai();return zi(o,M.memoizedState,e)},useTransition:function(){var e=ci(bi)[0],o=ai().memoizedState;return[e,o]},useMutableSource:ei,useSyncExternalStore:fi,useId:Bi,unstable_isNewReconciler:!1},Xh={readContext:ug,useCallback:xi,useContext:ug,useEffect:gi,useImperativeHandle:vi,useInsertionEffect:si,useLayoutEffect:ti,useMemo:yi,useReducer:di,useRef:oi,useState:function(){return di(bi)},useDebugValue:wi,useDeferredValue:function(e){var o=ai();return M===null?o.memoizedState=e:zi(o,M.memoizedState,e)},useTransition:function(){var e=di(bi)[0],o=ai().memoizedState;return[e,o]},useMutableSource:ei,useSyncExternalStore:fi,useId:Bi,unstable_isNewReconciler:!1};function Hi(e,o){try{var a="",i=o;do a+=Oa(i),i=i.return;while(i);var c=a}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:o,stack:c}}function Ii(e,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var Ji=typeof WeakMap=="function"?WeakMap:Map;function Ki(e,o,a){a=zg(-1,a),a.tag=3,a.payload={element:null};var i=o.value;return a.callback=function(){Li||(Li=!0,Mi=i),Ii(e,o)},a}function Ni(e,o,a){a=zg(-1,a),a.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var c=o.value;a.payload=function(){return i(c)},a.callback=function(){Ii(e,o)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Ii(e,o),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})}),a}function Pi(e,o,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Ji;var c=new Set;i.set(o,c)}else c=i.get(o),c===void 0&&(c=new Set,i.set(o,c));c.has(a)||(c.add(a),e=Qi.bind(null,e,o,a),o.then(e,e))}function Ri(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function Si(e,o,a,i,c){return(e.mode&1)===0?(e===o?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=zg(-1,1),o.tag=2,Ag(a,o))),a.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Ti,Ui,Vi,Wi;Ti=function(e,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Ui=function(){};Vi=function(e,o,a,i){var c=e.memoizedProps;if(c!==i){e=o.stateNode,Eh(Bh.current);var h=null;switch(a){case"input":c=Xa(e,c),i=Xa(e,i),h=[];break;case"select":c=A({},c,{value:void 0}),i=A({},i,{value:void 0}),h=[];break;case"textarea":c=fb(e,c),i=fb(e,i),h=[];break;default:typeof c.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Af)}tb(a,i);var g;a=null;for(rn in c)if(!i.hasOwnProperty(rn)&&c.hasOwnProperty(rn)&&c[rn]!=null)if(rn==="style"){var Z=c[rn];for(g in Z)Z.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else rn!=="dangerouslySetInnerHTML"&&rn!=="children"&&rn!=="suppressContentEditableWarning"&&rn!=="suppressHydrationWarning"&&rn!=="autoFocus"&&(ea.hasOwnProperty(rn)?h||(h=[]):(h=h||[]).push(rn,null));for(rn in i){var $=i[rn];if(Z=c!=null?c[rn]:void 0,i.hasOwnProperty(rn)&&$!==Z&&($!=null||Z!=null))if(rn==="style")if(Z){for(g in Z)!Z.hasOwnProperty(g)||$&&$.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in $)$.hasOwnProperty(g)&&Z[g]!==$[g]&&(a||(a={}),a[g]=$[g])}else a||(h||(h=[]),h.push(rn,a)),a=$;else rn==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,Z=Z?Z.__html:void 0,$!=null&&Z!==$&&(h=h||[]).push(rn,$)):rn==="children"?typeof $!="string"&&typeof $!="number"||(h=h||[]).push(rn,""+$):rn!=="suppressContentEditableWarning"&&rn!=="suppressHydrationWarning"&&(ea.hasOwnProperty(rn)?($!=null&&rn==="onScroll"&&D("scroll",e),h||Z===$||(h=[])):(h=h||[]).push(rn,$))}a&&(h=h||[]).push("style",a);var rn=h;(o.updateQueue=rn)&&(o.flags|=4)}};Wi=function(e,o,a,i){a!==i&&(o.flags|=4)};function Xi(e,o){if(!I)switch(e.tailMode){case"hidden":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Q(e){var o=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(o)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,i|=c.subtreeFlags&14680064,i|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=a,o}function Yi(e,o,a){var i=o.pendingProps;switch(ch(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Q(o),null;case 1:return Yf(o.type)&&Zf(),Q(o),null;case 3:return i=o.stateNode,Gh(),E(Vf),E(H),Lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(mh(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,fh!==null&&(Zi(fh),fh=null))),Ui(e,o),Q(o),null;case 5:Ih(o);var c=Eh(Dh.current);if(a=o.type,e!==null&&o.stateNode!=null)Vi(e,o,a,i,c),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!i){if(o.stateNode===null)throw Error(p$1(166));return Q(o),null}if(e=Eh(Bh.current),mh(o)){i=o.stateNode,a=o.type;var h=o.memoizedProps;switch(i[Nf]=o,i[Of]=h,e=(o.mode&1)!==0,a){case"dialog":D("cancel",i),D("close",i);break;case"iframe":case"object":case"embed":D("load",i);break;case"video":case"audio":for(c=0;c<kf.length;c++)D(kf[c],i);break;case"source":D("error",i);break;case"img":case"image":case"link":D("error",i),D("load",i);break;case"details":D("toggle",i);break;case"input":Ya(i,h),D("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!h.multiple},D("invalid",i);break;case"textarea":gb(i,h),D("invalid",i)}tb(a,h),c=null;for(var g in h)if(h.hasOwnProperty(g)){var Z=h[g];g==="children"?typeof Z=="string"?i.textContent!==Z&&(h.suppressHydrationWarning!==!0&&zf(i.textContent,Z,e),c=["children",Z]):typeof Z=="number"&&i.textContent!==""+Z&&(h.suppressHydrationWarning!==!0&&zf(i.textContent,Z,e),c=["children",""+Z]):ea.hasOwnProperty(g)&&Z!=null&&g==="onScroll"&&D("scroll",i)}switch(a){case"input":Ua(i),cb(i,h,!0);break;case"textarea":Ua(i),ib(i);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(i.onclick=Af)}i=c,o.updateQueue=i,i!==null&&(o.flags|=4)}else{g=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jb(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=g.createElement(a,{is:i.is}):(e=g.createElement(a),a==="select"&&(g=e,i.multiple?g.multiple=!0:i.size&&(g.size=i.size))):e=g.createElementNS(e,a),e[Nf]=o,e[Of]=i,Ti(e,o,!1,!1),o.stateNode=e;e:{switch(g=ub(a,i),a){case"dialog":D("cancel",e),D("close",e),c=i;break;case"iframe":case"object":case"embed":D("load",e),c=i;break;case"video":case"audio":for(c=0;c<kf.length;c++)D(kf[c],e);c=i;break;case"source":D("error",e),c=i;break;case"img":case"image":case"link":D("error",e),D("load",e),c=i;break;case"details":D("toggle",e),c=i;break;case"input":Ya(e,i),c=Xa(e,i),D("invalid",e);break;case"option":c=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},c=A({},i,{value:void 0}),D("invalid",e);break;case"textarea":gb(e,i),c=fb(e,i),D("invalid",e);break;default:c=i}tb(a,c),Z=c;for(h in Z)if(Z.hasOwnProperty(h)){var $=Z[h];h==="style"?rb(e,$):h==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&mb(e,$)):h==="children"?typeof $=="string"?(a!=="textarea"||$!=="")&&nb(e,$):typeof $=="number"&&nb(e,""+$):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ea.hasOwnProperty(h)?$!=null&&h==="onScroll"&&D("scroll",e):$!=null&&sa(e,h,$,g))}switch(a){case"input":Ua(e),cb(e,i,!1);break;case"textarea":Ua(e),ib(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ra(i.value));break;case"select":e.multiple=!!i.multiple,h=i.value,h!=null?eb(e,!!i.multiple,h,!1):i.defaultValue!=null&&eb(e,!!i.multiple,i.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Af)}switch(a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Q(o),null;case 6:if(e&&o.stateNode!=null)Wi(e,o,e.memoizedProps,i);else{if(typeof i!="string"&&o.stateNode===null)throw Error(p$1(166));if(a=Eh(Dh.current),Eh(Bh.current),mh(o)){if(i=o.stateNode,a=o.memoizedProps,i[Nf]=o,(h=i.nodeValue!==a)&&(e=dh,e!==null))switch(e.tag){case 3:zf(i.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zf(i.nodeValue,a,(e.mode&1)!==0)}h&&(o.flags|=4)}else i=(a.nodeType===9?a:a.ownerDocument).createTextNode(i),i[Nf]=o,o.stateNode=i}return Q(o),null;case 13:if(E(K),i=o.memoizedState,I&&eh!==null&&(o.mode&1)!==0&&(o.flags&128)===0){for(i=eh;i;)i=Kf(i.nextSibling);return nh(),o.flags|=98560,o}if(i!==null&&i.dehydrated!==null){if(i=mh(o),e===null){if(!i)throw Error(p$1(318));if(i=o.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p$1(317));i[Nf]=o}else nh(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;return Q(o),null}return fh!==null&&(Zi(fh),fh=null),(o.flags&128)!==0?(o.lanes=a,o):(i=i!==null,a=!1,e===null?mh(o):a=e.memoizedState!==null,i!==a&&i&&(o.child.flags|=8192,(o.mode&1)!==0&&(e===null||(K.current&1)!==0?R===0&&(R=3):$i())),o.updateQueue!==null&&(o.flags|=4),Q(o),null);case 4:return Gh(),Ui(e,o),e===null&&rf(o.stateNode.containerInfo),Q(o),null;case 10:return qg(o.type._context),Q(o),null;case 17:return Yf(o.type)&&Zf(),Q(o),null;case 19:if(E(K),h=o.memoizedState,h===null)return Q(o),null;if(i=(o.flags&128)!==0,g=h.rendering,g===null)if(i)Xi(h,!1);else{if(R!==0||e!==null&&(e.flags&128)!==0)for(e=o.child;e!==null;){if(g=Jh(e),g!==null){for(o.flags|=128,Xi(h,!1),i=g.updateQueue,i!==null&&(o.updateQueue=i,o.flags|=4),o.subtreeFlags=0,i=a,a=o.child;a!==null;)h=a,e=i,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,e=g.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return G(K,K.current&1|2),o.child}e=e.sibling}h.tail!==null&&B()>aj&&(o.flags|=128,i=!0,Xi(h,!1),o.lanes=4194304)}else{if(!i)if(e=Jh(g),e!==null){if(o.flags|=128,i=!0,a=e.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),Xi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!I)return Q(o),null}else 2*B()-h.renderingStartTime>aj&&a!==1073741824&&(o.flags|=128,i=!0,Xi(h,!1),o.lanes=4194304);h.isBackwards?(g.sibling=o.child,o.child=g):(a=h.last,a!==null?a.sibling=g:o.child=g,h.last=g)}return h.tail!==null?(o=h.tail,h.rendering=o,h.tail=o.sibling,h.renderingStartTime=B(),o.sibling=null,a=K.current,G(K,i?a&1|2:a&1),o):(Q(o),null);case 22:case 23:return bj(),i=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(o.flags|=8192),i&&(o.mode&1)!==0?(cj&1073741824)!==0&&(Q(o),o.subtreeFlags&6&&(o.flags|=8192)):Q(o),null;case 24:return null;case 25:return null}throw Error(p$1(156,o.tag))}var dj=ta.ReactCurrentOwner,tg=!1;function ej(e,o,a,i){o.child=e===null?zh(o,null,a,i):yh(o,e.child,a,i)}function fj(e,o,a,i,c){a=a.render;var h=o.ref;return sg(o,c),i=Uh(e,o,a,i,h,c),a=Zh(),e!==null&&!tg?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~c,gj(e,o,c)):(I&&a&&bh(o),o.flags|=1,ej(e,o,i,c),o.child)}function hj(e,o,a,i,c){if(e===null){var h=a.type;return typeof h=="function"&&!ij(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=h,jj(e,o,h,i,c)):(e=vh(a.type,null,i,o,o.mode,c),e.ref=o.ref,e.return=o,o.child=e)}if(h=e.child,(e.lanes&c)===0){var g=h.memoizedProps;if(a=a.compare,a=a!==null?a:He,a(g,i)&&e.ref===o.ref)return gj(e,o,c)}return o.flags|=1,e=th(h,i),e.ref=o.ref,e.return=o,o.child=e}function jj(e,o,a,i,c){if(e!==null){var h=e.memoizedProps;if(He(h,i)&&e.ref===o.ref)if(tg=!1,o.pendingProps=i=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(tg=!0);else return o.lanes=e.lanes,gj(e,o,c)}return kj(e,o,a,i,c)}function lj(e,o,a){var i=o.pendingProps,c=i.children,h=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(mj,cj),cj|=a;else if((a&1073741824)!==0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=h!==null?h.baseLanes:a,G(mj,cj),cj|=i;else return e=h!==null?h.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,G(mj,cj),cj|=e,null;else h!==null?(i=h.baseLanes|a,o.memoizedState=null):i=a,G(mj,cj),cj|=i;return ej(e,o,c,a),o.child}function nj(e,o){var a=o.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function kj(e,o,a,i,c){var h=Yf(a)?Wf:H.current;return h=Xf(o,h),sg(o,c),a=Uh(e,o,a,i,h,c),i=Zh(),e!==null&&!tg?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~c,gj(e,o,c)):(I&&i&&bh(o),o.flags|=1,ej(e,o,a,c),o.child)}function oj(e,o,a,i,c){if(Yf(a)){var h=!0;bg(o)}else h=!1;if(sg(o,c),o.stateNode===null)e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2),Og(o,a,i),Qg(o,a,i,c),i=!0;else if(e===null){var g=o.stateNode,Z=o.memoizedProps;g.props=Z;var $=g.context,rn=a.contextType;typeof rn=="object"&&rn!==null?rn=ug(rn):(rn=Yf(a)?Wf:H.current,rn=Xf(o,rn));var dn=a.getDerivedStateFromProps,mn=typeof dn=="function"||typeof g.getSnapshotBeforeUpdate=="function";mn||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(Z!==i||$!==rn)&&Pg(o,g,i,rn),wg=!1;var cn=o.memoizedState;g.state=cn,Eg(o,i,g,c),$=o.memoizedState,Z!==i||cn!==$||Vf.current||wg?(typeof dn=="function"&&(Ig(o,a,dn,i),$=o.memoizedState),(Z=wg||Ng(o,a,Z,i,cn,$,rn))?(mn||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(o.flags|=4194308)):(typeof g.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=i,o.memoizedState=$),g.props=i,g.state=$,g.context=rn,i=Z):(typeof g.componentDidMount=="function"&&(o.flags|=4194308),i=!1)}else{g=o.stateNode,yg(e,o),Z=o.memoizedProps,rn=o.type===o.elementType?Z:kg(o.type,Z),g.props=rn,mn=o.pendingProps,cn=g.context,$=a.contextType,typeof $=="object"&&$!==null?$=ug($):($=Yf(a)?Wf:H.current,$=Xf(o,$));var vn=a.getDerivedStateFromProps;(dn=typeof vn=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(Z!==mn||cn!==$)&&Pg(o,g,i,$),wg=!1,cn=o.memoizedState,g.state=cn,Eg(o,i,g,c);var gn=o.memoizedState;Z!==mn||cn!==gn||Vf.current||wg?(typeof vn=="function"&&(Ig(o,a,vn,i),gn=o.memoizedState),(rn=wg||Ng(o,a,rn,i,cn,gn,$)||!1)?(dn||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(i,gn,$),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(i,gn,$)),typeof g.componentDidUpdate=="function"&&(o.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof g.componentDidUpdate!="function"||Z===e.memoizedProps&&cn===e.memoizedState||(o.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||Z===e.memoizedProps&&cn===e.memoizedState||(o.flags|=1024),o.memoizedProps=i,o.memoizedState=gn),g.props=i,g.state=gn,g.context=$,i=rn):(typeof g.componentDidUpdate!="function"||Z===e.memoizedProps&&cn===e.memoizedState||(o.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||Z===e.memoizedProps&&cn===e.memoizedState||(o.flags|=1024),i=!1)}return pj(e,o,a,i,h,c)}function pj(e,o,a,i,c,h){nj(e,o);var g=(o.flags&128)!==0;if(!i&&!g)return c&&cg(o,a,!1),gj(e,o,h);i=o.stateNode,dj.current=o;var Z=g&&typeof a.getDerivedStateFromError!="function"?null:i.render();return o.flags|=1,e!==null&&g?(o.child=yh(o,e.child,null,h),o.child=yh(o,null,Z,h)):ej(e,o,Z,h),o.memoizedState=i.state,c&&cg(o,a,!0),o.child}function qj(e){var o=e.stateNode;o.pendingContext?$f(e,o.pendingContext,o.pendingContext!==o.context):o.context&&$f(e,o.context,!1),Fh(e,o.containerInfo)}function rj(e,o,a,i,c){return nh(),oh(c),o.flags|=256,ej(e,o,a,i),o.child}var sj={dehydrated:null,treeContext:null,retryLane:0};function tj(e){return{baseLanes:e,cachePool:null,transitions:null}}function uj(e,o){return{baseLanes:e.baseLanes|o,cachePool:null,transitions:e.transitions}}function vj(e,o,a){var i=o.pendingProps,c=K.current,h=!1,g=(o.flags&128)!==0,Z;if((Z=g)||(Z=e!==null&&e.memoizedState===null?!1:(c&2)!==0),Z?(h=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),G(K,c&1),e===null)return kh(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((o.mode&1)===0?o.lanes=1:e.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(c=i.children,e=i.fallback,h?(i=o.mode,h=o.child,c={mode:"hidden",children:c},(i&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=c):h=wj(c,i,0,null),e=xh(e,i,a,null),h.return=o,e.return=o,h.sibling=e,o.child=h,o.child.memoizedState=tj(a),o.memoizedState=sj,e):xj(o,c));if(c=e.memoizedState,c!==null){if(Z=c.dehydrated,Z!==null){if(g)return o.flags&256?(o.flags&=-257,yj(e,o,a,Error(p$1(422)))):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(h=i.fallback,c=o.mode,i=wj({mode:"visible",children:i.children},c,0,null),h=xh(h,c,a,null),h.flags|=2,i.return=o,h.return=o,i.sibling=h,o.child=i,(o.mode&1)!==0&&yh(o,e.child,null,a),o.child.memoizedState=tj(a),o.memoizedState=sj,h);if((o.mode&1)===0)o=yj(e,o,a,null);else if(Z.data==="$!")o=yj(e,o,a,Error(p$1(419)));else if(i=(a&e.childLanes)!==0,tg||i){if(i=P,i!==null){switch(a&-a){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}i=(h&(i.suspendedLanes|a))!==0?0:h,i!==0&&i!==c.retryLane&&(c.retryLane=i,Lg(e,i,-1))}$i(),o=yj(e,o,a,Error(p$1(421)))}else Z.data==="$?"?(o.flags|=128,o.child=e.child,o=zj.bind(null,e),Z._reactRetry=o,o=null):(a=c.treeContext,eh=Kf(Z.nextSibling),dh=o,I=!0,fh=null,a!==null&&(Vg[Wg++]=Yg,Vg[Wg++]=Zg,Vg[Wg++]=Xg,Yg=a.id,Zg=a.overflow,Xg=o),o=xj(o,o.pendingProps.children),o.flags|=4096);return o}return h?(i=Aj(e,o,i.children,i.fallback,a),h=o.child,c=e.child.memoizedState,h.memoizedState=c===null?tj(a):uj(c,a),h.childLanes=e.childLanes&~a,o.memoizedState=sj,i):(a=Bj(e,o,i.children,a),o.memoizedState=null,a)}return h?(i=Aj(e,o,i.children,i.fallback,a),h=o.child,c=e.child.memoizedState,h.memoizedState=c===null?tj(a):uj(c,a),h.childLanes=e.childLanes&~a,o.memoizedState=sj,i):(a=Bj(e,o,i.children,a),o.memoizedState=null,a)}function xj(e,o){return o=wj({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function Bj(e,o,a,i){var c=e.child;return e=c.sibling,a=th(c,{mode:"visible",children:a}),(o.mode&1)===0&&(a.lanes=i),a.return=o,a.sibling=null,e!==null&&(i=o.deletions,i===null?(o.deletions=[e],o.flags|=16):i.push(e)),o.child=a}function Aj(e,o,a,i,c){var h=o.mode;e=e.child;var g=e.sibling,Z={mode:"hidden",children:a};return(h&1)===0&&o.child!==e?(a=o.child,a.childLanes=0,a.pendingProps=Z,o.deletions=null):(a=th(e,Z),a.subtreeFlags=e.subtreeFlags&14680064),g!==null?i=th(g,i):(i=xh(i,h,c,null),i.flags|=2),i.return=o,a.return=o,a.sibling=i,o.child=a,i}function yj(e,o,a,i){return i!==null&&oh(i),yh(o,e.child,null,a),e=xj(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function Cj(e,o,a){e.lanes|=o;var i=e.alternate;i!==null&&(i.lanes|=o),rg(e.return,o,a)}function Dj(e,o,a,i,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:c}:(h.isBackwards=o,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=a,h.tailMode=c)}function Ej(e,o,a){var i=o.pendingProps,c=i.revealOrder,h=i.tail;if(ej(e,o,i.children,a),i=K.current,(i&2)!==0)i=i&1|2,o.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cj(e,a,o);else if(e.tag===19)Cj(e,a,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(G(K,i),(o.mode&1)===0)o.memoizedState=null;else switch(c){case"forwards":for(a=o.child,c=null;a!==null;)e=a.alternate,e!==null&&Jh(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=o.child,o.child=null):(c=a.sibling,a.sibling=null),Dj(o,!1,c,a,h);break;case"backwards":for(a=null,c=o.child,o.child=null;c!==null;){if(e=c.alternate,e!==null&&Jh(e)===null){o.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Dj(o,!0,a,null,h);break;case"together":Dj(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function gj(e,o,a){if(e!==null&&(o.dependencies=e.dependencies),Fg|=o.lanes,(a&o.childLanes)===0)return null;if(e!==null&&o.child!==e.child)throw Error(p$1(153));if(o.child!==null){for(e=o.child,a=th(e,e.pendingProps),o.child=a,a.return=o;e.sibling!==null;)e=e.sibling,a=a.sibling=th(e,e.pendingProps),a.return=o;a.sibling=null}return o.child}function Fj(e,o,a){switch(o.tag){case 3:qj(o),nh();break;case 5:Hh(o);break;case 1:Yf(o.type)&&bg(o);break;case 4:Fh(o,o.stateNode.containerInfo);break;case 10:var i=o.type._context,c=o.memoizedProps.value;G(lg,i._currentValue),i._currentValue=c;break;case 13:if(i=o.memoizedState,i!==null)return i.dehydrated!==null?(G(K,K.current&1),o.flags|=128,null):(a&o.child.childLanes)!==0?vj(e,o,a):(G(K,K.current&1),e=gj(e,o,a),e!==null?e.sibling:null);G(K,K.current&1);break;case 19:if(i=(a&o.childLanes)!==0,(e.flags&128)!==0){if(i)return Ej(e,o,a);o.flags|=128}if(c=o.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(K,K.current),i)break;return null;case 22:case 23:return o.lanes=0,lj(e,o,a)}return gj(e,o,a)}function Gj(e,o){switch(ch(o),o.tag){case 1:return Yf(o.type)&&Zf(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return Gh(),E(Vf),E(H),Lh(),e=o.flags,(e&65536)!==0&&(e&128)===0?(o.flags=e&-65537|128,o):null;case 5:return Ih(o),null;case 13:if(E(K),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(p$1(340));nh()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return E(K),null;case 4:return Gh(),null;case 10:return qg(o.type._context),null;case 22:case 23:return bj(),null;case 24:return null;default:return null}}var Hj=!1,S=!1,Ij=typeof WeakSet=="function"?WeakSet:Set,T=null;function Jj(e,o){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(i){U(e,o,i)}else a.current=null}function Kj(e,o,a){try{a()}catch(i){U(e,o,i)}}var Lj=!1;function Mj(e,o){if(Bf=cd,e=Le(),Me(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var c=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var g=0,Z=-1,$=-1,rn=0,dn=0,mn=e,cn=null;n:for(;;){for(var vn;mn!==a||c!==0&&mn.nodeType!==3||(Z=g+c),mn!==h||i!==0&&mn.nodeType!==3||($=g+i),mn.nodeType===3&&(g+=mn.nodeValue.length),(vn=mn.firstChild)!==null;)cn=mn,mn=vn;for(;;){if(mn===e)break n;if(cn===a&&++rn===c&&(Z=g),cn===h&&++dn===i&&($=g),(vn=mn.nextSibling)!==null)break;mn=cn,cn=mn.parentNode}mn=vn}a=Z===-1||$===-1?null:{start:Z,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},cd=!1,T=o;T!==null;)if(o=T,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,T=e;else for(;T!==null;){o=T;try{var gn=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(gn!==null){var Pn=gn.memoizedProps,xn=gn.memoizedState,un=o.stateNode,ln=un.getSnapshotBeforeUpdate(o.elementType===o.type?Pn:kg(o.type,Pn),xn);un.__reactInternalSnapshotBeforeUpdate=ln}break;case 3:var fn=o.stateNode.containerInfo;if(fn.nodeType===1)fn.textContent="";else if(fn.nodeType===9){var yn=fn.body;yn!=null&&(yn.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163))}}catch(Mn){U(o,o.return,Mn)}if(e=o.sibling,e!==null){e.return=o.return,T=e;break}T=o.return}return gn=Lj,Lj=!1,gn}function Nj(e,o,a){var i=o.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var c=i=i.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Kj(o,a,h)}c=c.next}while(c!==i)}}function Oj(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var i=a.create;a.destroy=i()}a=a.next}while(a!==o)}}function Pj(e){var o=e.ref;if(o!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof o=="function"?o(e):o.current=e}}function Qj(e){var o=e.alternate;o!==null&&(e.alternate=null,Qj(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[Nf],delete o[Of],delete o[nf],delete o[Pf],delete o[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rj(e){return e.tag===5||e.tag===3||e.tag===4}function Sj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tj(e,o,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(e,o):a.insertBefore(e,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(e,a)):(o=a,o.appendChild(e)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=Af));else if(i!==4&&(e=e.child,e!==null))for(Tj(e,o,a),e=e.sibling;e!==null;)Tj(e,o,a),e=e.sibling}function Uj(e,o,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,o?a.insertBefore(e,o):a.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Uj(e,o,a),e=e.sibling;e!==null;)Uj(e,o,a),e=e.sibling}var V=null,Vj=!1;function Wj(e,o,a){for(a=a.child;a!==null;)Xj(e,o,a),a=a.sibling}function Xj(e,o,a){if(kc&&typeof kc.onCommitFiberUnmount=="function")try{kc.onCommitFiberUnmount(jc,a)}catch{}switch(a.tag){case 5:S||Jj(a,o);case 6:var i=V,c=Vj;V=null,Wj(e,o,a),V=i,Vj=c,V!==null&&(Vj?(e=V,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):V.removeChild(a.stateNode));break;case 18:V!==null&&(Vj?(e=V,a=a.stateNode,e.nodeType===8?Jf(e.parentNode,a):e.nodeType===1&&Jf(e,a),ad(e)):Jf(V,a.stateNode));break;case 4:i=V,c=Vj,V=a.stateNode.containerInfo,Vj=!0,Wj(e,o,a),V=i,Vj=c;break;case 0:case 11:case 14:case 15:if(!S&&(i=a.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){c=i=i.next;do{var h=c,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Kj(a,o,g),c=c.next}while(c!==i)}Wj(e,o,a);break;case 1:if(!S&&(Jj(a,o),i=a.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=a.memoizedProps,i.state=a.memoizedState,i.componentWillUnmount()}catch(Z){U(a,o,Z)}Wj(e,o,a);break;case 21:Wj(e,o,a);break;case 22:a.mode&1?(S=(i=S)||a.memoizedState!==null,Wj(e,o,a),S=i):Wj(e,o,a);break;default:Wj(e,o,a)}}function Yj(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Ij),o.forEach(function(i){var c=Zj.bind(null,e,i);a.has(i)||(a.add(i),i.then(c,c))})}}function ak(e,o){var a=o.deletions;if(a!==null)for(var i=0;i<a.length;i++){var c=a[i];try{var h=e,g=o,Z=g;e:for(;Z!==null;){switch(Z.tag){case 5:V=Z.stateNode,Vj=!1;break e;case 3:V=Z.stateNode.containerInfo,Vj=!0;break e;case 4:V=Z.stateNode.containerInfo,Vj=!0;break e}Z=Z.return}if(V===null)throw Error(p$1(160));Xj(h,g,c),V=null,Vj=!1;var $=c.alternate;$!==null&&($.return=null),c.return=null}catch(rn){U(c,o,rn)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)bk(o,e),o=o.sibling}function bk(e,o){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ak(o,e),ck(e),i&4){try{Nj(3,e,e.return),Oj(3,e)}catch(gn){U(e,e.return,gn)}try{Nj(5,e,e.return)}catch(gn){U(e,e.return,gn)}}break;case 1:ak(o,e),ck(e),i&512&&a!==null&&Jj(a,a.return);break;case 5:if(ak(o,e),ck(e),i&512&&a!==null&&Jj(a,a.return),e.flags&32){var c=e.stateNode;try{nb(c,"")}catch(gn){U(e,e.return,gn)}}if(i&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,g=a!==null?a.memoizedProps:h,Z=e.type,$=e.updateQueue;if(e.updateQueue=null,$!==null)try{Z==="input"&&h.type==="radio"&&h.name!=null&&Za(c,h),ub(Z,g);var rn=ub(Z,h);for(g=0;g<$.length;g+=2){var dn=$[g],mn=$[g+1];dn==="style"?rb(c,mn):dn==="dangerouslySetInnerHTML"?mb(c,mn):dn==="children"?nb(c,mn):sa(c,dn,mn,rn)}switch(Z){case"input":$a(c,h);break;case"textarea":hb(c,h);break;case"select":var cn=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var vn=h.value;vn!=null?eb(c,!!h.multiple,vn,!1):cn!==!!h.multiple&&(h.defaultValue!=null?eb(c,!!h.multiple,h.defaultValue,!0):eb(c,!!h.multiple,h.multiple?[]:"",!1))}c[Of]=h}catch(gn){U(e,e.return,gn)}}break;case 6:if(ak(o,e),ck(e),i&4){if(e.stateNode===null)throw Error(p$1(162));rn=e.stateNode,dn=e.memoizedProps;try{rn.nodeValue=dn}catch(gn){U(e,e.return,gn)}}break;case 3:if(ak(o,e),ck(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ad(o.containerInfo)}catch(gn){U(e,e.return,gn)}break;case 4:ak(o,e),ck(e);break;case 13:ak(o,e),ck(e),rn=e.child,rn.flags&8192&&rn.memoizedState!==null&&(rn.alternate===null||rn.alternate.memoizedState===null)&&(dk=B()),i&4&&Yj(e);break;case 22:if(rn=a!==null&&a.memoizedState!==null,e.mode&1?(S=(dn=S)||rn,ak(o,e),S=dn):ak(o,e),ck(e),i&8192){dn=e.memoizedState!==null;e:for(mn=null,cn=e;;){if(cn.tag===5){if(mn===null){mn=cn;try{c=cn.stateNode,dn?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(Z=cn.stateNode,$=cn.memoizedProps.style,g=$!=null&&$.hasOwnProperty("display")?$.display:null,Z.style.display=qb("display",g))}catch(gn){U(e,e.return,gn)}}}else if(cn.tag===6){if(mn===null)try{cn.stateNode.nodeValue=dn?"":cn.memoizedProps}catch(gn){U(e,e.return,gn)}}else if((cn.tag!==22&&cn.tag!==23||cn.memoizedState===null||cn===e)&&cn.child!==null){cn.child.return=cn,cn=cn.child;continue}if(cn===e)break e;for(;cn.sibling===null;){if(cn.return===null||cn.return===e)break e;mn===cn&&(mn=null),cn=cn.return}mn===cn&&(mn=null),cn.sibling.return=cn.return,cn=cn.sibling}if(dn&&!rn&&(e.mode&1)!==0)for(T=e,e=e.child;e!==null;){for(rn=T=e;T!==null;){switch(dn=T,mn=dn.child,dn.tag){case 0:case 11:case 14:case 15:Nj(4,dn,dn.return);break;case 1:if(Jj(dn,dn.return),h=dn.stateNode,typeof h.componentWillUnmount=="function"){cn=dn,vn=dn.return;try{c=cn,h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(gn){U(cn,vn,gn)}}break;case 5:Jj(dn,dn.return);break;case 22:if(dn.memoizedState!==null){ek(rn);continue}}mn!==null?(mn.return=dn,T=mn):ek(rn)}e=e.sibling}}break;case 19:ak(o,e),ck(e),i&4&&Yj(e);break;case 21:break;default:ak(o,e),ck(e)}}function ck(e){var o=e.flags;if(o&2){try{e:{for(var a=e.return;a!==null;){if(Rj(a)){var i=a;break e}a=a.return}throw Error(p$1(160))}switch(i.tag){case 5:var c=i.stateNode;i.flags&32&&(nb(c,""),i.flags&=-33);var h=Sj(e);Uj(e,h,c);break;case 3:case 4:var g=i.stateNode.containerInfo,Z=Sj(e);Tj(e,Z,g);break;default:throw Error(p$1(161))}}catch($){U(e,e.return,$)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function fk(e,o,a){T=e,gk(e)}function gk(e,o,a){for(var i=(e.mode&1)!==0;T!==null;){var c=T,h=c.child;if(c.tag===22&&i){var g=c.memoizedState!==null||Hj;if(!g){var Z=c.alternate,$=Z!==null&&Z.memoizedState!==null||S;Z=Hj;var rn=S;if(Hj=g,(S=$)&&!rn)for(T=c;T!==null;)g=T,$=g.child,g.tag===22&&g.memoizedState!==null?hk(c):$!==null?($.return=g,T=$):hk(c);for(;h!==null;)T=h,gk(h),h=h.sibling;T=c,Hj=Z,S=rn}ik(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,T=h):ik(e)}}function ik(e){for(;T!==null;){var o=T;if((o.flags&8772)!==0){var a=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:S||Oj(5,o);break;case 1:var i=o.stateNode;if(o.flags&4&&!S)if(a===null)i.componentDidMount();else{var c=o.elementType===o.type?a.memoizedProps:kg(o.type,a.memoizedProps);i.componentDidUpdate(c,a.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var h=o.updateQueue;h!==null&&Gg(o,h,i);break;case 3:var g=o.updateQueue;if(g!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}Gg(o,g,a)}break;case 5:var Z=o.stateNode;if(a===null&&o.flags&4){a=Z;var $=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&a.focus();break;case"img":$.src&&(a.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var rn=o.alternate;if(rn!==null){var dn=rn.memoizedState;if(dn!==null){var mn=dn.dehydrated;mn!==null&&ad(mn)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(p$1(163))}S||o.flags&512&&Pj(o)}catch(cn){U(o,o.return,cn)}}if(o===e){T=null;break}if(a=o.sibling,a!==null){a.return=o.return,T=a;break}T=o.return}}function ek(e){for(;T!==null;){var o=T;if(o===e){T=null;break}var a=o.sibling;if(a!==null){a.return=o.return,T=a;break}T=o.return}}function hk(e){for(;T!==null;){var o=T;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{Oj(4,o)}catch($){U(o,a,$)}break;case 1:var i=o.stateNode;if(typeof i.componentDidMount=="function"){var c=o.return;try{i.componentDidMount()}catch($){U(o,c,$)}}var h=o.return;try{Pj(o)}catch($){U(o,h,$)}break;case 5:var g=o.return;try{Pj(o)}catch($){U(o,g,$)}}}catch($){U(o,o.return,$)}if(o===e){T=null;break}var Z=o.sibling;if(Z!==null){Z.return=o.return,T=Z;break}T=o.return}}var jk=Math.ceil,kk=ta.ReactCurrentDispatcher,lk=ta.ReactCurrentOwner,mk=ta.ReactCurrentBatchConfig,W=0,P=null,X=null,Y=0,cj=0,mj=Tf(0),R=0,nk=null,Fg=0,ok=0,pk=0,qk=null,rk=null,dk=0,aj=1/0,sk=null,Li=!1,Mi=null,Oi=null,tk=!1,uk=null,vk=0,wk=0,xk=null,yk=-1,zk=0;function Jg(){return(W&6)!==0?B():yk!==-1?yk:yk=B()}function Kg(e){return(e.mode&1)===0?1:(W&2)!==0&&Y!==0?Y&-Y:jg.transition!==null?(zk===0&&(zk=xc()),zk):(e=C,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e)}function Lg(e,o,a){if(50<wk)throw wk=0,xk=null,Error(p$1(185));var i=Ak(e,o);return i===null?null:(zc(i,o,a),((W&2)===0||i!==P)&&(i===P&&((W&2)===0&&(ok|=o),R===4&&Bk(i,Y)),Ck(i,a),o===1&&W===0&&(e.mode&1)===0&&(aj=B()+500,eg&&ig())),i)}function Ak(e,o){e.lanes|=o;var a=e.alternate;for(a!==null&&(a.lanes|=o),a=e,e=e.return;e!==null;)e.childLanes|=o,a=e.alternate,a!==null&&(a.childLanes|=o),a=e,e=e.return;return a.tag===3?a.stateNode:null}function Bg(e){return(P!==null||vg!==null)&&(e.mode&1)!==0&&(W&2)===0}function Ck(e,o){var a=e.callbackNode;vc(e,o);var i=tc(e,e===P?Y:0);if(i===0)a!==null&&ac(a),e.callbackNode=null,e.callbackPriority=0;else if(o=i&-i,e.callbackPriority!==o){if(a!=null&&ac(a),o===1)e.tag===0?hg(Dk.bind(null,e)):gg(Dk.bind(null,e)),If(function(){W===0&&ig()}),a=null;else{switch(Cc(i)){case 1:a=ec;break;case 4:a=fc;break;case 16:a=gc;break;case 536870912:a=ic;break;default:a=gc}a=Ek(a,Fk.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}}function Fk(e,o){if(yk=-1,zk=0,(W&6)!==0)throw Error(p$1(327));var a=e.callbackNode;if(Gk()&&e.callbackNode!==a)return null;var i=tc(e,e===P?Y:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||o)o=Hk(e,i);else{o=i;var c=W;W|=2;var h=Ik();(P!==e||Y!==o)&&(sk=null,aj=B()+500,Jk(e,o));do try{Kk();break}catch(Z){Lk(e,Z)}while(1);pg(),kk.current=h,W=c,X!==null?o=0:(P=null,Y=0,o=R)}if(o!==0){if(o===2&&(c=wc(e),c!==0&&(i=c,o=Mk(e,c))),o===1)throw a=nk,Jk(e,0),Bk(e,i),Ck(e,B()),a;if(o===6)Bk(e,i);else{if(c=e.current.alternate,(i&30)===0&&!Nk(c)&&(o=Hk(e,i),o===2&&(h=wc(e),h!==0&&(i=h,o=Mk(e,h))),o===1))throw a=nk,Jk(e,0),Bk(e,i),Ck(e,B()),a;switch(e.finishedWork=c,e.finishedLanes=i,o){case 0:case 1:throw Error(p$1(345));case 2:Ok(e,rk,sk);break;case 3:if(Bk(e,i),(i&130023424)===i&&(o=dk+500-B(),10<o)){if(tc(e,0)!==0)break;if(c=e.suspendedLanes,(c&i)!==i){Jg(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Ef(Ok.bind(null,e,rk,sk),o);break}Ok(e,rk,sk);break;case 4:if(Bk(e,i),(i&4194240)===i)break;for(o=e.eventTimes,c=-1;0<i;){var g=31-nc(i);h=1<<g,g=o[g],g>c&&(c=g),i&=~h}if(i=c,i=B()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jk(i/1960))-i,10<i){e.timeoutHandle=Ef(Ok.bind(null,e,rk,sk),i);break}Ok(e,rk,sk);break;case 5:Ok(e,rk,sk);break;default:throw Error(p$1(329))}}}return Ck(e,B()),e.callbackNode===a?Fk.bind(null,e):null}function Mk(e,o){var a=qk;return e.current.memoizedState.isDehydrated&&(Jk(e,o).flags|=256),e=Hk(e,o),e!==2&&(o=rk,rk=a,o!==null&&Zi(o)),e}function Zi(e){rk===null?rk=e:rk.push.apply(rk,e)}function Nk(e){for(var o=e;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var i=0;i<a.length;i++){var c=a[i],h=c.getSnapshot;c=c.value;try{if(!Ge(h(),c))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Bk(e,o){for(o&=~pk,o&=~ok,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var a=31-nc(o),i=1<<a;e[a]=-1,o&=~i}}function Dk(e){if((W&6)!==0)throw Error(p$1(327));Gk();var o=tc(e,0);if((o&1)===0)return Ck(e,B()),null;var a=Hk(e,o);if(e.tag!==0&&a===2){var i=wc(e);i!==0&&(o=i,a=Mk(e,i))}if(a===1)throw a=nk,Jk(e,0),Bk(e,o),Ck(e,B()),a;if(a===6)throw Error(p$1(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,Ok(e,rk,sk),Ck(e,B()),null}function Pk(e,o){var a=W;W|=1;try{return e(o)}finally{W=a,W===0&&(aj=B()+500,eg&&ig())}}function Qk(e){uk!==null&&uk.tag===0&&(W&6)===0&&Gk();var o=W;W|=1;var a=mk.transition,i=C;try{if(mk.transition=null,C=1,e)return e()}finally{C=i,mk.transition=a,W=o,(W&6)===0&&ig()}}function bj(){cj=mj.current,E(mj)}function Jk(e,o){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Ff(a)),X!==null)for(a=X.return;a!==null;){var i=a;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zf();break;case 3:Gh(),E(Vf),E(H),Lh();break;case 5:Ih(i);break;case 4:Gh();break;case 13:E(K);break;case 19:E(K);break;case 10:qg(i.type._context);break;case 22:case 23:bj()}a=a.return}if(P=e,X=e=th(e.current,null),Y=cj=o,R=0,nk=null,pk=ok=Fg=0,rk=qk=null,vg!==null){for(o=0;o<vg.length;o++)if(a=vg[o],i=a.interleaved,i!==null){a.interleaved=null;var c=i.next,h=a.pending;if(h!==null){var g=h.next;h.next=c,i.next=g}a.pending=i}vg=null}return e}function Lk(e,o){do{var a=X;try{if(pg(),Mh.current=Yh,Ph){for(var i=L.memoizedState;i!==null;){var c=i.queue;c!==null&&(c.pending=null),i=i.next}Ph=!1}if(Oh=0,N=M=L=null,Qh=!1,Rh=0,lk.current=null,a===null||a.return===null){R=1,nk=o,X=null;break}e:{var h=e,g=a.return,Z=a,$=o;if(o=Y,Z.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var rn=$,dn=Z,mn=dn.tag;if((dn.mode&1)===0&&(mn===0||mn===11||mn===15)){var cn=dn.alternate;cn?(dn.updateQueue=cn.updateQueue,dn.memoizedState=cn.memoizedState,dn.lanes=cn.lanes):(dn.updateQueue=null,dn.memoizedState=null)}var vn=Ri(g);if(vn!==null){vn.flags&=-257,Si(vn,g,Z,h,o),vn.mode&1&&Pi(h,rn,o),o=vn,$=rn;var gn=o.updateQueue;if(gn===null){var Pn=new Set;Pn.add($),o.updateQueue=Pn}else gn.add($);break e}else{if((o&1)===0){Pi(h,rn,o),$i();break e}$=Error(p$1(426))}}else if(I&&Z.mode&1){var xn=Ri(g);if(xn!==null){(xn.flags&65536)===0&&(xn.flags|=256),Si(xn,g,Z,h,o),oh($);break e}}h=$,R!==4&&(R=2),qk===null?qk=[h]:qk.push(h),$=Hi($,Z),Z=g;do{switch(Z.tag){case 3:Z.flags|=65536,o&=-o,Z.lanes|=o;var un=Ki(Z,$,o);Dg(Z,un);break e;case 1:h=$;var ln=Z.type,fn=Z.stateNode;if((Z.flags&128)===0&&(typeof ln.getDerivedStateFromError=="function"||fn!==null&&typeof fn.componentDidCatch=="function"&&(Oi===null||!Oi.has(fn)))){Z.flags|=65536,o&=-o,Z.lanes|=o;var yn=Ni(Z,h,o);Dg(Z,yn);break e}}Z=Z.return}while(Z!==null)}Rk(a)}catch(Mn){o=Mn,X===a&&a!==null&&(X=a=a.return);continue}break}while(1)}function Ik(){var e=kk.current;return kk.current=Yh,e===null?Yh:e}function $i(){(R===0||R===3||R===2)&&(R=4),P===null||(Fg&268435455)===0&&(ok&268435455)===0||Bk(P,Y)}function Hk(e,o){var a=W;W|=2;var i=Ik();(P!==e||Y!==o)&&(sk=null,Jk(e,o));do try{Sk();break}catch(c){Lk(e,c)}while(1);if(pg(),W=a,kk.current=i,X!==null)throw Error(p$1(261));return P=null,Y=0,R}function Sk(){for(;X!==null;)Tk(X)}function Kk(){for(;X!==null&&!bc();)Tk(X)}function Tk(e){var o=Uk(e.alternate,e,cj);e.memoizedProps=e.pendingProps,o===null?Rk(e):X=o,lk.current=null}function Rk(e){var o=e;do{var a=o.alternate;if(e=o.return,(o.flags&32768)===0){if(a=Yi(a,o,cj),a!==null){X=a;return}}else{if(a=Gj(a,o),a!==null){a.flags&=32767,X=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{R=6,X=null;return}}if(o=o.sibling,o!==null){X=o;return}X=o=e}while(o!==null);R===0&&(R=5)}function Ok(e,o,a){var i=C,c=mk.transition;try{mk.transition=null,C=1,Vk(e,o,a,i)}finally{mk.transition=c,C=i}return null}function Vk(e,o,a,i){do Gk();while(uk!==null);if((W&6)!==0)throw Error(p$1(327));a=e.finishedWork;var c=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(p$1(177));e.callbackNode=null,e.callbackPriority=0;var h=a.lanes|a.childLanes;if(Ac(e,h),e===P&&(X=P=null,Y=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tk||(tk=!0,Ek(gc,function(){return Gk(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=mk.transition,mk.transition=null;var g=C;C=1;var Z=W;W|=4,lk.current=null,Mj(e,a),bk(a,e),Ne(Cf),cd=!!Bf,Cf=Bf=null,e.current=a,fk(a),cc(),W=Z,C=g,mk.transition=h}else e.current=a;if(tk&&(tk=!1,uk=e,vk=c),h=e.pendingLanes,h===0&&(Oi=null),lc(a.stateNode),Ck(e,B()),o!==null)for(i=e.onRecoverableError,a=0;a<o.length;a++)i(o[a]);if(Li)throw Li=!1,e=Mi,Mi=null,e;return(vk&1)!==0&&e.tag!==0&&Gk(),h=e.pendingLanes,(h&1)!==0?e===xk?wk++:(wk=0,xk=e):wk=0,ig(),null}function Gk(){if(uk!==null){var e=Cc(vk),o=mk.transition,a=C;try{if(mk.transition=null,C=16>e?16:e,uk===null)var i=!1;else{if(e=uk,uk=null,vk=0,(W&6)!==0)throw Error(p$1(331));var c=W;for(W|=4,T=e.current;T!==null;){var h=T,g=h.child;if((T.flags&16)!==0){var Z=h.deletions;if(Z!==null){for(var $=0;$<Z.length;$++){var rn=Z[$];for(T=rn;T!==null;){var dn=T;switch(dn.tag){case 0:case 11:case 15:Nj(8,dn,h)}var mn=dn.child;if(mn!==null)mn.return=dn,T=mn;else for(;T!==null;){dn=T;var cn=dn.sibling,vn=dn.return;if(Qj(dn),dn===rn){T=null;break}if(cn!==null){cn.return=vn,T=cn;break}T=vn}}}var gn=h.alternate;if(gn!==null){var Pn=gn.child;if(Pn!==null){gn.child=null;do{var xn=Pn.sibling;Pn.sibling=null,Pn=xn}while(Pn!==null)}}T=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,T=g;else e:for(;T!==null;){if(h=T,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Nj(9,h,h.return)}var un=h.sibling;if(un!==null){un.return=h.return,T=un;break e}T=h.return}}var ln=e.current;for(T=ln;T!==null;){g=T;var fn=g.child;if((g.subtreeFlags&2064)!==0&&fn!==null)fn.return=g,T=fn;else e:for(g=ln;T!==null;){if(Z=T,(Z.flags&2048)!==0)try{switch(Z.tag){case 0:case 11:case 15:Oj(9,Z)}}catch(Mn){U(Z,Z.return,Mn)}if(Z===g){T=null;break e}var yn=Z.sibling;if(yn!==null){yn.return=Z.return,T=yn;break e}T=Z.return}}if(W=c,ig(),kc&&typeof kc.onPostCommitFiberRoot=="function")try{kc.onPostCommitFiberRoot(jc,e)}catch{}i=!0}return i}finally{C=a,mk.transition=o}}return!1}function Wk(e,o,a){o=Hi(a,o),o=Ki(e,o,1),Ag(e,o),o=Jg(),e=Ak(e,1),e!==null&&(zc(e,1,o),Ck(e,o))}function U(e,o,a){if(e.tag===3)Wk(e,e,a);else for(;o!==null;){if(o.tag===3){Wk(o,e,a);break}else if(o.tag===1){var i=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){e=Hi(a,e),e=Ni(o,e,1),Ag(o,e),e=Jg(),o=Ak(o,1),o!==null&&(zc(o,1,e),Ck(o,e));break}}o=o.return}}function Qi(e,o,a){var i=e.pingCache;i!==null&&i.delete(o),o=Jg(),e.pingedLanes|=e.suspendedLanes&a,P===e&&(Y&a)===a&&(R===4||R===3&&(Y&130023424)===Y&&500>B()-dk?Jk(e,0):pk|=a),Ck(e,o)}function Xk(e,o){o===0&&((e.mode&1)===0?o=1:(o=rc,rc<<=1,(rc&130023424)===0&&(rc=4194304)));var a=Jg();e=Ak(e,o),e!==null&&(zc(e,o,a),Ck(e,a))}function zj(e){var o=e.memoizedState,a=0;o!==null&&(a=o.retryLane),Xk(e,a)}function Zj(e,o){var a=0;switch(e.tag){case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(p$1(314))}i!==null&&i.delete(o),Xk(e,a)}var Uk;Uk=function(e,o,a){if(e!==null)if(e.memoizedProps!==o.pendingProps||Vf.current)tg=!0;else{if((e.lanes&a)===0&&(o.flags&128)===0)return tg=!1,Fj(e,o,a);tg=(e.flags&131072)!==0}else tg=!1,I&&(o.flags&1048576)!==0&&ah(o,Ug,o.index);switch(o.lanes=0,o.tag){case 2:var i=o.type;e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2),e=o.pendingProps;var c=Xf(o,H.current);sg(o,a),c=Uh(null,o,i,e,c,a);var h=Zh();return o.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Yf(i)?(h=!0,bg(o)):h=!1,o.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,xg(o),c.updater=Mg,o.stateNode=c,c._reactInternals=o,Qg(o,i,e,a),o=pj(null,o,i,!0,h,a)):(o.tag=0,I&&h&&bh(o),ej(null,o,c,a),o=o.child),o;case 16:i=o.elementType;e:{switch(e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2),e=o.pendingProps,c=i._init,i=c(i._payload),o.type=i,c=o.tag=Yk(i),e=kg(i,e),c){case 0:o=kj(null,o,i,e,a);break e;case 1:o=oj(null,o,i,e,a);break e;case 11:o=fj(null,o,i,e,a);break e;case 14:o=hj(null,o,i,kg(i.type,e),a);break e}throw Error(p$1(306,i,""))}return o;case 0:return i=o.type,c=o.pendingProps,c=o.elementType===i?c:kg(i,c),kj(e,o,i,c,a);case 1:return i=o.type,c=o.pendingProps,c=o.elementType===i?c:kg(i,c),oj(e,o,i,c,a);case 3:e:{if(qj(o),e===null)throw Error(p$1(387));i=o.pendingProps,h=o.memoizedState,c=h.element,yg(e,o),Eg(o,i,null,a);var g=o.memoizedState;if(i=g.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},o.updateQueue.baseState=h,o.memoizedState=h,o.flags&256){c=Error(p$1(423)),o=rj(e,o,i,a,c);break e}else if(i!==c){c=Error(p$1(424)),o=rj(e,o,i,a,c);break e}else for(eh=Kf(o.stateNode.containerInfo.firstChild),dh=o,I=!0,fh=null,a=zh(o,null,i,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(nh(),i===c){o=gj(e,o,a);break e}ej(e,o,i,a)}o=o.child}return o;case 5:return Hh(o),e===null&&kh(o),i=o.type,c=o.pendingProps,h=e!==null?e.memoizedProps:null,g=c.children,Df(i,c)?g=null:h!==null&&Df(i,h)&&(o.flags|=32),nj(e,o),ej(e,o,g,a),o.child;case 6:return e===null&&kh(o),null;case 13:return vj(e,o,a);case 4:return Fh(o,o.stateNode.containerInfo),i=o.pendingProps,e===null?o.child=yh(o,null,i,a):ej(e,o,i,a),o.child;case 11:return i=o.type,c=o.pendingProps,c=o.elementType===i?c:kg(i,c),fj(e,o,i,c,a);case 7:return ej(e,o,o.pendingProps,a),o.child;case 8:return ej(e,o,o.pendingProps.children,a),o.child;case 12:return ej(e,o,o.pendingProps.children,a),o.child;case 10:e:{if(i=o.type._context,c=o.pendingProps,h=o.memoizedProps,g=c.value,G(lg,i._currentValue),i._currentValue=g,h!==null)if(Ge(h.value,g)){if(h.children===c.children&&!Vf.current){o=gj(e,o,a);break e}}else for(h=o.child,h!==null&&(h.return=o);h!==null;){var Z=h.dependencies;if(Z!==null){g=h.child;for(var $=Z.firstContext;$!==null;){if($.context===i){if(h.tag===1){$=zg(-1,a&-a),$.tag=2;var rn=h.updateQueue;if(rn!==null){rn=rn.shared;var dn=rn.pending;dn===null?$.next=$:($.next=dn.next,dn.next=$),rn.pending=$}}h.lanes|=a,$=h.alternate,$!==null&&($.lanes|=a),rg(h.return,a,o),Z.lanes|=a;break}$=$.next}}else if(h.tag===10)g=h.type===o.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(p$1(341));g.lanes|=a,Z=g.alternate,Z!==null&&(Z.lanes|=a),rg(g,a,o),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===o){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ej(e,o,c.children,a),o=o.child}return o;case 9:return c=o.type,i=o.pendingProps.children,sg(o,a),c=ug(c),i=i(c),o.flags|=1,ej(e,o,i,a),o.child;case 14:return i=o.type,c=kg(i,o.pendingProps),c=kg(i.type,c),hj(e,o,i,c,a);case 15:return jj(e,o,o.type,o.pendingProps,a);case 17:return i=o.type,c=o.pendingProps,c=o.elementType===i?c:kg(i,c),e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2),o.tag=1,Yf(i)?(e=!0,bg(o)):e=!1,sg(o,a),Og(o,i,c),Qg(o,i,c,a),pj(null,o,i,!0,e,a);case 19:return Ej(e,o,a);case 22:return lj(e,o,a)}throw Error(p$1(156,o.tag))};function Ek(e,o){return $b(e,o)}function Zk(e,o,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hh(e,o,a,i){return new Zk(e,o,a,i)}function ij(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yk(e){if(typeof e=="function")return ij(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===Fa)return 14}return 2}function th(e,o){var a=e.alternate;return a===null?(a=hh(e.tag,o,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=o,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,o=e.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function vh(e,o,a,i,c,h){var g=2;if(i=e,typeof e=="function")ij(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case wa:return xh(a.children,c,h,o);case xa:g=8,c|=8;break;case za:return e=hh(12,a,o,c|2),e.elementType=za,e.lanes=h,e;case Da:return e=hh(13,a,o,c),e.elementType=Da,e.lanes=h,e;case Ea:return e=hh(19,a,o,c),e.elementType=Ea,e.lanes=h,e;case Ha:return wj(a,c,h,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Aa:g=10;break e;case Ba:g=9;break e;case Ca:g=11;break e;case Fa:g=14;break e;case Ga:g=16,i=null;break e}throw Error(p$1(130,e==null?e:typeof e,""))}return o=hh(g,a,o,c),o.elementType=e,o.type=i,o.lanes=h,o}function xh(e,o,a,i){return e=hh(7,e,i,o),e.lanes=a,e}function wj(e,o,a,i){return e=hh(22,e,i,o),e.elementType=Ha,e.lanes=a,e.stateNode={},e}function uh(e,o,a){return e=hh(6,e,null,o),e.lanes=a,e}function wh(e,o,a){return o=hh(4,e.children!==null?e.children:[],e.key,o),o.lanes=a,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function $k(e,o,a,i,c){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function al(e,o,a,i,c,h,g,Z,$){return e=new $k(e,o,a,Z,$),o===1?(o=1,h===!0&&(o|=8)):o=0,h=hh(3,null,null,o),e.current=h,h.stateNode=e,h.memoizedState={element:i,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(h),e}function bl(e,o,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:i==null?null:""+i,children:e,containerInfo:o,implementation:a}}function cl(e){if(!e)return Uf;e=e._reactInternals;e:{if(Ub(e)!==e||e.tag!==1)throw Error(p$1(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Yf(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(p$1(171))}if(e.tag===1){var a=e.type;if(Yf(a))return ag(e,a,o)}return o}function dl(e,o,a,i,c,h,g,Z,$){return e=al(a,i,!0,e,c,h,g,Z,$),e.context=cl(null),a=e.current,i=Jg(),c=Kg(a),h=zg(i,c),h.callback=o!=null?o:null,Ag(a,h),e.current.lanes=c,zc(e,c,i),Ck(e,i),e}function el(e,o,a,i){var c=o.current,h=Jg(),g=Kg(c);return a=cl(a),o.context===null?o.context=a:o.pendingContext=a,o=zg(h,g),o.payload={element:e},i=i===void 0?null:i,i!==null&&(o.callback=i),Ag(c,o),e=Lg(c,g,h),e!==null&&Cg(e,c,g),g}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gl(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<o?a:o}}function hl(e,o){gl(e,o),(e=e.alternate)&&gl(e,o)}function il(){return null}var jl=typeof reportError=="function"?reportError:function(e){console.error(e)};function kl(e){this._internalRoot=e}ll.prototype.render=kl.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(p$1(409));el(e,o,null,null)};ll.prototype.unmount=kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;Qk(function(){el(null,e,null,null)}),o[tf]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var o=Gc();e={blockedOn:null,target:e,priority:o};for(var a=0;a<Pc.length&&o!==0&&o<Pc[a].priority;a++);Pc.splice(a,0,e),a===0&&Uc(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ol(){}function pl(e,o,a,i,c){if(c){if(typeof i=="function"){var h=i;i=function(){var rn=fl(g);h.call(rn)}}var g=dl(o,i,e,0,null,!1,!1,"",ol);return e._reactRootContainer=g,e[tf]=g.current,rf(e.nodeType===8?e.parentNode:e),Qk(),g}for(;c=e.lastChild;)e.removeChild(c);if(typeof i=="function"){var Z=i;i=function(){var rn=fl($);Z.call(rn)}}var $=al(e,0,!1,null,null,!1,!1,"",ol);return e._reactRootContainer=$,e[tf]=$.current,rf(e.nodeType===8?e.parentNode:e),Qk(function(){el(o,$,a,i)}),$}function ql(e,o,a,i,c){var h=a._reactRootContainer;if(h){var g=h;if(typeof c=="function"){var Z=c;c=function(){var $=fl(g);Z.call($)}}el(o,g,e,c)}else g=pl(a,o,e,c,i);return fl(g)}Dc=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var a=sc(o.pendingLanes);a!==0&&(Bc(o,a|1),Ck(o,B()),(W&6)===0&&(aj=B()+500,ig()))}break;case 13:var i=Jg();Qk(function(){return Lg(e,1,i)}),hl(e,1)}};Ec=function(e){if(e.tag===13){var o=Jg();Lg(e,134217728,o),hl(e,134217728)}};Fc=function(e){if(e.tag===13){var o=Jg(),a=Kg(e);Lg(e,a,o),hl(e,a)}};Gc=function(){return C};Hc=function(e,o){var a=C;try{return C=e,o()}finally{C=a}};xb=function(e,o,a){switch(o){case"input":if($a(e,a),o=a.name,a.type==="radio"&&o!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var i=a[o];if(i!==e&&i.form===e.form){var c=Cb(i);if(!c)throw Error(p$1(90));Va(i),$a(i,c)}}}break;case"textarea":hb(e,a);break;case"select":o=a.value,o!=null&&eb(e,!!a.multiple,o,!1)}};Fb=Pk;Gb=Qk;var rl={usingClientEntryPoint:!1,Events:[Bb,te,Cb,Db,Eb,Pk]},sl={findFiberByHostInstance:Vc,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},tl={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ta.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yb(e),e===null?null:e.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||il,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{jc=ul.inject(tl),kc=ul}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rl;reactDom_production_min.createPortal=function(e,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(o))throw Error(p$1(200));return bl(e,o,null,a)};reactDom_production_min.createRoot=function(e,o){if(!ml(e))throw Error(p$1(299));var a=!1,i="",c=jl;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(c=o.onRecoverableError)),o=al(e,1,!1,null,null,a,!1,i,c),e[tf]=o.current,rf(e.nodeType===8?e.parentNode:e),new kl(o)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(p$1(188)):(e=Object.keys(e).join(","),Error(p$1(268,e)));return e=Yb(o),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Qk(e)};reactDom_production_min.hydrate=function(e,o,a){if(!nl(o))throw Error(p$1(200));return ql(null,e,o,!0,a)};reactDom_production_min.hydrateRoot=function(e,o,a){if(!ml(e))throw Error(p$1(405));var i=a!=null&&a.hydratedSources||null,c=!1,h="",g=jl;if(a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),o=dl(o,null,e,1,a!=null?a:null,c,!1,h,g),e[tf]=o.current,rf(e),i)for(e=0;e<i.length;e++)a=i[e],c=a._getVersion,c=c(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,c]:o.mutableSourceEagerHydrationData.push(a,c);return new ll(o)};reactDom_production_min.render=function(e,o,a){if(!nl(o))throw Error(p$1(200));return ql(null,e,o,!1,a)};reactDom_production_min.unmountComponentAtNode=function(e){if(!nl(e))throw Error(p$1(40));return e._reactRootContainer?(Qk(function(){ql(null,null,e,!1,function(){e._reactRootContainer=null,e[tf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Pk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,o,a,i){if(!nl(a))throw Error(p$1(200));if(e==null||e._reactInternals===void 0)throw Error(p$1(38));return ql(e,o,a,!1,i)};reactDom_production_min.version="18.1.0-next-22edb9f77-20220426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(e){console.error(e)}}checkDCE(),reactDom.exports=reactDom_production_min;var m$1=reactDom.exports;client.createRoot=m$1.createRoot,client.hydrateRoot=m$1.hydrateRoot;var base="";const main="_main_9u705_1",list="_list_9u705_5",listItem="_listItem_9u705_13",footer="_footer_9u705_17",dspHeader="_dspHeader_9u705_27",dspHeaderTitle="_dspHeaderTitle_9u705_31",dspHeaderBack="_dspHeaderBack_9u705_35",dspType="_dspType_9u705_39",dspPre="_dspPre_9u705_44",dspContent="_dspContent_9u705_48",link="_link_9u705_60";var classes$3={main,list,listItem,footer,dspHeader,dspHeaderTitle,dspHeaderBack,dspType,dspPre,dspContent,link};function isDspLive(e){return e.type==="live"}function isDspOffline(e){return e.type==="offline"}function isDspCallback(e){return e.type==="callback"}var FaustModule=function(){var e=typeof document!="undefined"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename!="undefined"&&(e=e||__filename),function(o){o=o||{};var a=typeof o!="undefined"?o:{};a.expectedDataFileDownloads||(a.expectedDataFileDownloads=0,a.finishedDataFileDownloads=0),a.expectedDataFileDownloads++,function(){var s=function(d){if(typeof window=="object")window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");else if(typeof location!="undefined")encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");else throw"using preloaded data can only be done on a web page or in a web worker";var _="../../lib/libfaust-wasm.data",b="libfaust-wasm.data";typeof a.locateFilePackage=="function"&&!a.locateFile&&(a.locateFile=a.locateFilePackage,un("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var _e=a.locateFile?a.locateFile(b,""):b,en=d.remote_package_size;d.package_uuid;function tn(hn,bn,En,wn){var On=new XMLHttpRequest;On.open("GET",hn,!0),On.responseType="arraybuffer",On.onprogress=function(Nn){var Ln=hn,Bn=bn;if(Nn.total&&(Bn=Nn.total),Nn.loaded){On.addedTotal?a.dataFileDownloads[Ln].loaded=Nn.loaded:(On.addedTotal=!0,a.dataFileDownloads||(a.dataFileDownloads={}),a.dataFileDownloads[Ln]={loaded:Nn.loaded,total:Bn});var Tn=0,Dn=0,jn=0;for(var Hn in a.dataFileDownloads){var $n=a.dataFileDownloads[Hn];Tn+=$n.total,Dn+=$n.loaded,jn++}Tn=Math.ceil(Tn*a.expectedDataFileDownloads/jn),a.setStatus&&a.setStatus("Downloading data... ("+Dn+"/"+Tn+")")}else a.dataFileDownloads||a.setStatus&&a.setStatus("Downloading data...")},On.onerror=function(Nn){throw new Error("NetworkError for: "+hn)},On.onload=function(Nn){if(On.status==200||On.status==304||On.status==206||On.status==0&&On.response){var Ln=On.response;En(Ln)}else throw new Error(On.statusText+" : "+On.responseURL)},On.send(null)}var nn=null,sn=a.getPreloadedPackage?a.getPreloadedPackage(_e,en):null;sn||tn(_e,en,function(hn){nn?(nn(hn),nn=null):sn=hn});function pn(){function hn(Nn,Ln){if(!Nn)throw Ln+new Error().stack}a.FS_createPath("/","libraries",!0,!0);function bn(Nn,Ln,Bn){this.start=Nn,this.end=Ln,this.audio=Bn}bn.prototype={requests:{},open:function(Nn,Ln){this.name=Ln,this.requests[Ln]=this,a.addRunDependency("fp "+this.name)},send:function(){},onload:function(){var Nn=this.byteArray.subarray(this.start,this.end);this.finish(Nn)},finish:function(Nn){var Ln=this;a.FS_createDataFile(this.name,null,Nn,!0,!0,!0),a.removeRunDependency("fp "+Ln.name),this.requests[this.name]=null}};for(var En=d.files,wn=0;wn<En.length;++wn)new bn(En[wn].start,En[wn].end,En[wn].audio).open("GET",En[wn].filename);function On(Nn){a.finishedDataFileDownloads++,hn(Nn,"Loading data file failed."),hn(Nn instanceof ArrayBuffer,"bad input to processPackageData");var Ln=new Uint8Array(Nn);bn.prototype.byteArray=Ln;for(var Bn=d.files,Tn=0;Tn<Bn.length;++Tn)bn.prototype.requests[Bn[Tn].filename].onload();a.removeRunDependency("datafile_../../lib/libfaust-wasm.data")}a.addRunDependency("datafile_../../lib/libfaust-wasm.data"),a.preloadResults||(a.preloadResults={}),a.preloadResults[_]={fromCache:!1},sn?(On(sn),sn=null):nn=On}a.calledRun?pn():(a.preRun||(a.preRun=[]),a.preRun.push(pn))};s({files:[{filename:"/libraries/hoa.lib",start:0,end:13105,audio:0},{filename:"/libraries/compressors.lib",start:13105,end:58859,audio:0},{filename:"/libraries/basics.lib",start:58859,end:110385,audio:0},{filename:"/libraries/dx7.lib",start:110385,end:179488,audio:0},{filename:"/libraries/analyzers.lib",start:179488,end:212357,audio:0},{filename:"/libraries/spats.lib",start:212357,end:217531,audio:0},{filename:"/libraries/envelopes.lib",start:217531,end:228127,audio:0},{filename:"/libraries/oscillators.lib",start:228127,end:275738,audio:0},{filename:"/libraries/mi.lib",start:275738,end:293026,audio:0},{filename:"/libraries/misceffects.lib",start:293026,end:314755,audio:0},{filename:"/libraries/version.lib",start:314755,end:315662,audio:0},{filename:"/libraries/webaudio.lib",start:315662,end:327785,audio:0},{filename:"/libraries/math.lib",start:327785,end:349263,audio:0},{filename:"/libraries/stdfaust.lib",start:349263,end:350533,audio:0},{filename:"/libraries/filter.lib",start:350533,end:415919,audio:0},{filename:"/libraries/delays.lib",start:415919,end:430403,audio:0},{filename:"/libraries/routes.lib",start:430403,end:437029,audio:0},{filename:"/libraries/soundfiles.lib",start:437029,end:446390,audio:0},{filename:"/libraries/tonestacks.lib",start:446390,end:458744,audio:0},{filename:"/libraries/aanl.lib",start:458744,end:484841,audio:0},{filename:"/libraries/wdmodels.lib",start:484841,end:574662,audio:0},{filename:"/libraries/all.lib",start:574662,end:575678,audio:0},{filename:"/libraries/music.lib",start:575678,end:594112,audio:0},{filename:"/libraries/tubes.lib",start:594112,end:943901,audio:0},{filename:"/libraries/effect.lib",start:943901,end:1012931,audio:0},{filename:"/libraries/vaeffects.lib",start:1012931,end:1048800,audio:0},{filename:"/libraries/maxmsp.lib",start:1048800,end:1056659,audio:0},{filename:"/libraries/platform.lib",start:1056659,end:1059739,audio:0},{filename:"/libraries/synths.lib",start:1059739,end:1070990,audio:0},{filename:"/libraries/sf.lib",start:1070990,end:1072056,audio:0},{filename:"/libraries/fds.lib",start:1072056,end:1092602,audio:0},{filename:"/libraries/reducemaps.lib",start:1092602,end:1097438,audio:0},{filename:"/libraries/phaflangers.lib",start:1097438,end:1107359,audio:0},{filename:"/libraries/filters.lib",start:1107359,end:1212987,audio:0},{filename:"/libraries/signals.lib",start:1212987,end:1224932,audio:0},{filename:"/libraries/instruments.lib",start:1224932,end:1234327,audio:0},{filename:"/libraries/quantizers.lib",start:1234327,end:1244180,audio:0},{filename:"/libraries/noises.lib",start:1244180,end:1258842,audio:0},{filename:"/libraries/oscillator.lib",start:1258842,end:1278693,audio:0},{filename:"/libraries/interpolators.lib",start:1278693,end:1301737,audio:0},{filename:"/libraries/demos.lib",start:1301737,end:1364872,audio:0},{filename:"/libraries/reverbs.lib",start:1364872,end:1402697,audio:0},{filename:"/libraries/physmodels.lib",start:1402697,end:1573680,audio:0},{filename:"/libraries/maths.lib",start:1573680,end:1595081,audio:0}],remote_package_size:1595081,package_uuid:"04ea3dc2-3649-4af3-b126-173b06afc41a"})}();var i={},c;for(c in a)a.hasOwnProperty(c)&&(i[c]=a[c]);var h="./this.program",g=!1,Z=!1,$=!1,rn=!1;if(g=typeof window=="object",Z=typeof importScripts=="function",$=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",rn=!g&&!$&&!Z,a.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");var dn="";function mn(s){return a.locateFile?a.locateFile(s,dn):dn+s}var cn,vn,gn,Pn;if($)Z?dn=require("path").dirname(dn)+"/":dn=__dirname+"/",cn=function(d,_){return gn||(gn=require("fs")),Pn||(Pn=require("path")),d=Pn.normalize(d),gn.readFileSync(d,_?null:"utf8")},vn=function(d){var _=cn(d,!0);return _.buffer||(_=new Uint8Array(_)),on(_.buffer),_},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(s){if(!(s instanceof Wu))throw s}),process.on("unhandledRejection",an),a.inspect=function(){return"[Emscripten Module object]"};else if(rn)typeof read!="undefined"&&(cn=function(d){return read(d)}),vn=function(d){var _;return typeof readbuffer=="function"?new Uint8Array(readbuffer(d)):(_=read(d,"binary"),on(typeof _=="object"),_)},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print);else if(g||Z)Z?dn=self.location.href:document.currentScript&&(dn=document.currentScript.src),e&&(dn=e),dn.indexOf("blob:")!==0?dn=dn.substr(0,dn.lastIndexOf("/")+1):dn="",cn=function(d){var _=new XMLHttpRequest;return _.open("GET",d,!1),_.send(null),_.responseText},Z&&(vn=function(d){var _=new XMLHttpRequest;return _.open("GET",d,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)});else throw new Error("environment detection error");var xn=a.print||console.log.bind(console),un=a.printErr||console.warn.bind(console);for(c in i)i.hasOwnProperty(c)&&(a[c]=i[c]);i=null,a.arguments&&a.arguments,Object.getOwnPropertyDescriptor(a,"arguments")||Object.defineProperty(a,"arguments",{configurable:!0,get:function(){an("Module.arguments has been replaced with plain arguments_")}}),a.thisProgram&&(h=a.thisProgram),Object.getOwnPropertyDescriptor(a,"thisProgram")||Object.defineProperty(a,"thisProgram",{configurable:!0,get:function(){an("Module.thisProgram has been replaced with plain thisProgram")}}),a.quit&&a.quit,Object.getOwnPropertyDescriptor(a,"quit")||Object.defineProperty(a,"quit",{configurable:!0,get:function(){an("Module.quit has been replaced with plain quit_")}}),on(typeof a.memoryInitializerPrefixURL=="undefined","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),on(typeof a.pthreadMainPrefixURL=="undefined","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),on(typeof a.cdInitializerPrefixURL=="undefined","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),on(typeof a.filePackagePrefixURL=="undefined","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),on(typeof a.read=="undefined","Module.read option was removed (modify read_ in JS)"),on(typeof a.readAsync=="undefined","Module.readAsync option was removed (modify readAsync in JS)"),on(typeof a.readBinary=="undefined","Module.readBinary option was removed (modify readBinary in JS)"),on(typeof a.setWindowTitle=="undefined","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),on(typeof a.TOTAL_MEMORY=="undefined","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),Object.getOwnPropertyDescriptor(a,"read")||Object.defineProperty(a,"read",{configurable:!0,get:function(){an("Module.read has been replaced with plain read_")}}),Object.getOwnPropertyDescriptor(a,"readAsync")||Object.defineProperty(a,"readAsync",{configurable:!0,get:function(){an("Module.readAsync has been replaced with plain readAsync")}}),Object.getOwnPropertyDescriptor(a,"readBinary")||Object.defineProperty(a,"readBinary",{configurable:!0,get:function(){an("Module.readBinary has been replaced with plain readBinary")}});var Fr,eo,ir;Fr=eo=ir=function(){an("cannot use the stack before compiled code is ready to run, and has provided stack access")};function ln(s){on(cr);var d=_n[cr>>2],_=d+s+15&-16;return on(_<=et.length,"failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly"),_n[cr>>2]=_,d}function fn(s){switch(s){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(s[s.length-1]==="*")return 4;if(s[0]==="i"){var d=Number(s.substr(1));return on(d%8===0,"getNativeTypeSize invalid bits "+d+", type "+s),d/8}else return 0}}}function yn(s){yn.shown||(yn.shown={}),yn.shown[s]||(yn.shown[s]=1,un(s))}var Mn;a.wasmBinary&&(Mn=a.wasmBinary),Object.getOwnPropertyDescriptor(a,"wasmBinary")||Object.defineProperty(a,"wasmBinary",{configurable:!0,get:function(){an("Module.wasmBinary has been replaced with plain wasmBinary")}}),a.noExitRuntime&&a.noExitRuntime,Object.getOwnPropertyDescriptor(a,"noExitRuntime")||Object.defineProperty(a,"noExitRuntime",{configurable:!0,get:function(){an("Module.noExitRuntime has been replaced with plain noExitRuntime")}}),typeof WebAssembly!="object"&&an("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");function An(s,d,_,b){switch(_=_||"i8",_.charAt(_.length-1)==="*"&&(_="i32"),_){case"i1":et[s>>0]=d;break;case"i8":et[s>>0]=d;break;case"i16":lt[s>>1]=d;break;case"i32":_n[s>>2]=d;break;case"i64":mt=[d>>>0,(Zn=d,+pr(Zn)>=1?Zn>0?(_r(+hr(Zn/4294967296),4294967295)|0)>>>0:~~+mr((Zn-+(~~Zn>>>0))/4294967296)>>>0:0)],_n[s>>2]=mt[0],_n[s+4>>2]=mt[1];break;case"float":Ir[s>>2]=d;break;case"double":dr[s>>3]=d;break;default:an("invalid type for setValue: "+_)}}var Rn,Sn=new WebAssembly.Table({initial:2176,maximum:2176+0,element:"anyfunc"}),Un=!1;function on(s,d){s||an("Assertion failed: "+d)}function Gn(s){var d=a["_"+s];return on(d,"Cannot call unknown function "+s+", make sure it is exported"),d}function rt(s,d,_,b,_e){var en={string:function(wn){var On=0;if(wn!=null&&wn!==0){var Nn=(wn.length<<2)+1;On=ir(Nn),qn(wn,On,Nn)}return On},array:function(wn){var On=ir(wn.length);return io(wn,On),On}};function tn(wn){return d==="string"?zn(wn):d==="boolean"?Boolean(wn):wn}var nn=Gn(s),sn=[],pn=0;if(on(d!=="array",'Return type should not be "array".'),b)for(var hn=0;hn<b.length;hn++){var bn=en[_[hn]];bn?(pn===0&&(pn=Fr()),sn[hn]=bn(b[hn])):sn[hn]=b[hn]}var En=nn.apply(null,sn);return En=tn(En),pn!==0&&eo(pn),En}function ot(s,d,_,b){return function(){return rt(s,d,_,arguments)}}var gt=1,ft=3;function Nt(s,d,_,b){var _e,en;typeof s=="number"?(_e=!0,en=s):(_e=!1,en=s.length);var tn=typeof d=="string"?d:null,nn;if(_==ft?nn=b:nn=[_t,ir,ln][_](Math.max(en,tn?1:d.length)),_e){var sn;for(b=nn,on((nn&3)==0),sn=nn+(en&-4);b<sn;b+=4)_n[b>>2]=0;for(sn=nn+en;b<sn;)et[b++>>0]=0;return nn}if(tn==="i8")return s.subarray||s.slice?nt.set(s,nn):nt.set(new Uint8Array(s),nn),nn;for(var pn=0,hn,bn,En;pn<en;){var wn=s[pn];if(hn=tn||d[pn],hn===0){pn++;continue}on(hn,"Must know what type to store in allocate!"),hn=="i64"&&(hn="i32"),An(nn+pn,wn,hn),En!==hn&&(bn=fn(hn),En=hn),pn+=bn}return nn}function Wt(s){return kn?_t(s):ln(s)}var Cn=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function Xn(s,d,_){for(var b=d+_,_e=d;s[_e]&&!(_e>=b);)++_e;if(_e-d>16&&s.subarray&&Cn)return Cn.decode(s.subarray(d,_e));for(var en="";d<_e;){var tn=s[d++];if(!(tn&128)){en+=String.fromCharCode(tn);continue}var nn=s[d++]&63;if((tn&224)==192){en+=String.fromCharCode((tn&31)<<6|nn);continue}var sn=s[d++]&63;if((tn&240)==224?tn=(tn&15)<<12|nn<<6|sn:((tn&248)!=240&&yn("Invalid UTF-8 leading byte 0x"+tn.toString(16)+" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"),tn=(tn&7)<<18|nn<<12|sn<<6|s[d++]&63),tn<65536)en+=String.fromCharCode(tn);else{var pn=tn-65536;en+=String.fromCharCode(55296|pn>>10,56320|pn&1023)}}return en}function zn(s,d){return s?Xn(nt,s,d):""}function Yn(s,d,_,b){if(!(b>0))return 0;for(var _e=_,en=_+b-1,tn=0;tn<s.length;++tn){var nn=s.charCodeAt(tn);if(nn>=55296&&nn<=57343){var sn=s.charCodeAt(++tn);nn=65536+((nn&1023)<<10)|sn&1023}if(nn<=127){if(_>=en)break;d[_++]=nn}else if(nn<=2047){if(_+1>=en)break;d[_++]=192|nn>>6,d[_++]=128|nn&63}else if(nn<=65535){if(_+2>=en)break;d[_++]=224|nn>>12,d[_++]=128|nn>>6&63,d[_++]=128|nn&63}else{if(_+3>=en)break;nn>=2097152&&yn("Invalid Unicode code point 0x"+nn.toString(16)+" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF)."),d[_++]=240|nn>>18,d[_++]=128|nn>>12&63,d[_++]=128|nn>>6&63,d[_++]=128|nn&63}}return d[_]=0,_-_e}function qn(s,d,_){return on(typeof _=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Yn(s,nt,d,_)}function pt(s){for(var d=0,_=0;_<s.length;++_){var b=s.charCodeAt(_);b>=55296&&b<=57343&&(b=65536+((b&1023)<<10)|s.charCodeAt(++_)&1023),b<=127?++d:b<=2047?d+=2:b<=65535?d+=3:d+=4}return d}var yt=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):void 0;function Qt(s){on(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var d=s,_=d>>1;lt[_];)++_;if(d=_<<1,d-s>32&&yt)return yt.decode(nt.subarray(s,d));for(var b=0,_e="";;){var en=lt[s+b*2>>1];if(en==0)return _e;++b,_e+=String.fromCharCode(en)}}function Et(s,d,_){if(on(d%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),on(typeof _=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),_===void 0&&(_=2147483647),_<2)return 0;_-=2;for(var b=d,_e=_<s.length*2?_/2:s.length,en=0;en<_e;++en){var tn=s.charCodeAt(en);lt[d>>1]=tn,d+=2}return lt[d>>1]=0,d-b}function Ut(s){return s.length*2}function zo(s){on(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var d=0,_="";;){var b=_n[s+d*4>>2];if(b==0)return _;if(++d,b>=65536){var _e=b-65536;_+=String.fromCharCode(55296|_e>>10,56320|_e&1023)}else _+=String.fromCharCode(b)}}function Bo(s,d,_){if(on(d%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),on(typeof _=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),_===void 0&&(_=2147483647),_<4)return 0;for(var b=d,_e=b+_-4,en=0;en<s.length;++en){var tn=s.charCodeAt(en);if(tn>=55296&&tn<=57343){var nn=s.charCodeAt(++en);tn=65536+((tn&1023)<<10)|nn&1023}if(_n[d>>2]=tn,d+=4,d+4>_e)break}return _n[d>>2]=0,d-b}function Wo(s){for(var d=0,_=0;_<s.length;++_){var b=s.charCodeAt(_);b>=55296&&b<=57343&&++_,d+=4}return d}function ao(s){var d=pt(s)+1,_=_t(d);return _&&Yn(s,et,_,d),_}function io(s,d){on(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),et.set(s,d)}function Qo(s,d,_){for(var b=0;b<s.length;++b)on(s.charCodeAt(b)===s.charCodeAt(b)&255),et[d++>>0]=s.charCodeAt(b);_||(et[d>>0]=0)}var so=65536;function Vo(s,d){return s%d>0&&(s+=d-s%d),s}var Dt,et,nt,lt,lr,_n,dt,Ir,dr;function uo(s){Dt=s,a.HEAP8=et=new Int8Array(s),a.HEAP16=lt=new Int16Array(s),a.HEAP32=_n=new Int32Array(s),a.HEAPU8=nt=new Uint8Array(s),a.HEAPU16=lr=new Uint16Array(s),a.HEAPU32=dt=new Uint32Array(s),a.HEAPF32=Ir=new Float32Array(s),a.HEAPF64=dr=new Float64Array(s)}var Go=7643408,jt=2400528,lo=7643408,cr=2400368;on(Go%16===0,"stack must start aligned"),on(lo%16===0,"heap must start aligned");var Nr=5242880;a.TOTAL_STACK&&on(Nr===a.TOTAL_STACK,"the stack size can no longer be determined at runtime");var Vt=a.INITIAL_MEMORY||16777216;Object.getOwnPropertyDescriptor(a,"INITIAL_MEMORY")||Object.defineProperty(a,"INITIAL_MEMORY",{configurable:!0,get:function(){an("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY")}}),on(Vt>=Nr,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+Vt+"! (TOTAL_STACK="+Nr+")"),on(typeof Int32Array!="undefined"&&typeof Float64Array!="undefined"&&Int32Array.prototype.subarray!==void 0&&Int32Array.prototype.set!==void 0,"JS engine does not provide full typed array support"),a.wasmMemory?Rn=a.wasmMemory:Rn=new WebAssembly.Memory({initial:Vt/so}),Rn&&(Dt=Rn.buffer),Vt=Dt.byteLength,on(Vt%so===0),uo(Dt),_n[cr>>2]=lo;function co(){on((jt&3)==0),dt[(jt>>2)+1]=34821223,dt[(jt>>2)+2]=2310721022,_n[0]=1668509029}function Gt(){var s=dt[(jt>>2)+1],d=dt[(jt>>2)+2];(s!=34821223||d!=2310721022)&&an("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+d.toString(16)+" "+s.toString(16)),_n[0]!==1668509029&&an("Runtime error: The application has corrupted its heap memory area (address zero)!")}function Yo(s){an("Stack overflow! Attempted to allocate "+s+" bytes on the stack, but stack has only "+(jt-Fr()+s)+" bytes available!")}(function(){var s=new Int16Array(1),d=new Int8Array(s.buffer);if(s[0]=25459,d[0]!==115||d[1]!==99)throw"Runtime error: expected the system to be little-endian!"})();function fr(s){for(;s.length>0;){var d=s.shift();if(typeof d=="function"){d();continue}var _=d.func;typeof _=="number"?d.arg===void 0?a.dynCall_v(_):a.dynCall_vi(_,d.arg):_(d.arg===void 0?null:d.arg)}}var fo=[],po=[],qo=[],mo=[],kn=!1,Fn=!1;function Ko(){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)_a(a.preRun.shift());fr(fo)}function Jo(){Gt(),on(!kn),kn=!0,Jn.root=j.mount(Jn,{},null),!a.noFSInit&&!j.init.initialized&&j.init(),fr(po)}function Zo(){Gt(),j.ignorePermissions=!1,fr(qo)}function ca(){if(Gt(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;)ga(a.postRun.shift());fr(mo)}function _a(s){fo.unshift(s)}function ga(s){mo.unshift(s)}on(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),on(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),on(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),on(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var pr=Math.abs,mr=Math.ceil,hr=Math.floor,_r=Math.min,kt=0,Ft=null,Yt=null,Ht={};function ya(s){for(var d=s;;){if(!Ht[s])return s;s=d+Math.random()}}function Ur(s){kt++,a.monitorRunDependencies&&a.monitorRunDependencies(kt),s?(on(!Ht[s]),Ht[s]=1,Ft===null&&typeof setInterval!="undefined"&&(Ft=setInterval(function(){if(Un){clearInterval(Ft),Ft=null;return}var d=!1;for(var _ in Ht)d||(d=!0,un("still waiting on run dependencies:")),un("dependency: "+_);d&&un("(end of list)")},1e4))):un("warning: run dependency added without ID")}function gr(s){if(kt--,a.monitorRunDependencies&&a.monitorRunDependencies(kt),s?(on(Ht[s]),delete Ht[s]):un("warning: run dependency removed without ID"),kt==0&&(Ft!==null&&(clearInterval(Ft),Ft=null),Yt)){var d=Yt;Yt=null,d()}}a.preloadedImages={},a.preloadedAudios={};function an(s){a.onAbort&&a.onAbort(s),s+="",xn(s),un(s),Un=!0;var d="abort("+s+") at "+vo();throw s=d,new WebAssembly.RuntimeError(s)}var ho="data:application/octet-stream;base64,";function _o(s){return String.prototype.startsWith?s.startsWith(ho):s.indexOf(ho)===0}var bt="libfaust-wasm.wasm";_o(bt)||(bt=mn(bt));function go(){try{if(Mn)return new Uint8Array(Mn);if(vn)return vn(bt);throw"both async and sync fetching of the wasm failed"}catch(s){an(s)}}function _i(){return!Mn&&(g||Z)&&typeof fetch=="function"?fetch(bt,{credentials:"same-origin"}).then(function(s){if(!s.ok)throw"failed to load wasm binary file at '"+bt+"'";return s.arrayBuffer()}).catch(function(){return go()}):new Promise(function(s,d){s(go())})}function es(){var s={env:jo,wasi_snapshot_preview1:jo};function d(nn,sn){var pn=nn.exports;a.asm=pn,gr("wasm-instantiate")}Ur("wasm-instantiate");var _=a;function b(nn){on(a===_,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),_=null,d(nn.instance)}function _e(nn){return _i().then(function(sn){return WebAssembly.instantiate(sn,s)}).then(nn,function(sn){un("failed to asynchronously prepare wasm: "+sn),an(sn)})}function en(){if(!Mn&&typeof WebAssembly.instantiateStreaming=="function"&&!_o(bt)&&typeof fetch=="function")fetch(bt,{credentials:"same-origin"}).then(function(nn){var sn=WebAssembly.instantiateStreaming(nn,s);return sn.then(b,function(pn){un("wasm streaming compile failed: "+pn),un("falling back to ArrayBuffer instantiation"),_e(b)})});else return _e(b)}if(a.instantiateWasm)try{var tn=a.instantiateWasm(s,d);return tn}catch(nn){return un("Module.instantiateWasm callback failed with error: "+nn),!1}return en(),{}}var Zn,mt,ns={299792:function(s){var d="";try{var _=new XMLHttpRequest;_.open("GET",a.UTF8ToString(s),!1),_.send(),_.status==200&&(d=_.responseText)}catch(b){console.log(b)}return Nt(or(d),"i8",gt)},420260:function(s){faust_module.faust.wasm_instance[s]=null},420588:function(s){return faust_module._malloc(s)},420625:function(s){faust_module._free(s)},420653:function(s,d){return faust_module.faust.wasm_instance[s].exports.getNumInputs(d)},420730:function(s,d){return faust_module.faust.wasm_instance[s].exports.getNumOutputs(d)},420805:function(s,d){return faust_module.faust.wasm_instance[s].exports.getSampleRate(d)},420880:function(s,d,_){faust_module.faust.wasm_instance[s].exports.init(d,_)},420947:function(s,d,_){faust_module.faust.wasm_instance[s].exports.instanceInit(d,_)},421018:function(s,d,_){faust_module.faust.wasm_instance[s].exports.instanceConstants(d,_)},421094:function(s,d){faust_module.faust.wasm_instance[s].exports.instanceResetUserInterface(d)},421175:function(s,d){faust_module.faust.wasm_instance[s].exports.instanceClear(d)},421243:function(s,d,_,b,_e){faust_module.faust.wasm_instance[s].exports.compute(d,_,b,_e)}};function ts(s,d,_){var b=Rr(d,_);return ns[s].apply(null,b)}function rs(){faust_module.faust=faust_module.faust||{},faust_module.faust.memory=faust_module.faust.memory||Rn}po.push({func:function(){Xu()}});function os(s){return yn("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),s}function yo(s){var d=/\b_Z[\w\d_]+/g;return s.replace(d,function(_){var b=os(_);return _===b?_:b+" ["+_+"]"})}function as(){var s=new Error;if(!s.stack){try{throw new Error}catch(d){s=d}if(!s.stack)return"(no stack trace available)"}return s.stack.toString()}function vo(){var s=as();return a.extraStackTrace&&(s+=`
`+a.extraStackTrace()),yo(s)}function is(s){return _t(s)}function yr(){return yr.uncaught_exceptions>0}function ss(s,d,_){throw"uncaught_exception"in yr?yr.uncaught_exceptions++:yr.uncaught_exceptions=1,s+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function us(){an("stack overflow")}function qt(s){return a.___errno_location?_n[a.___errno_location()>>2]=s:un("failed to set errno from JS"),s}function ls(s,d){return qt(63),-1}var Qn={splitPath:function(s){var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(s).slice(1)},normalizeArray:function(s,d){for(var _=0,b=s.length-1;b>=0;b--){var _e=s[b];_e==="."?s.splice(b,1):_e===".."?(s.splice(b,1),_++):_&&(s.splice(b,1),_--)}if(d)for(;_;_--)s.unshift("..");return s},normalize:function(s){var d=s.charAt(0)==="/",_=s.substr(-1)==="/";return s=Qn.normalizeArray(s.split("/").filter(function(b){return!!b}),!d).join("/"),!s&&!d&&(s="."),s&&_&&(s+="/"),(d?"/":"")+s},dirname:function(s){var d=Qn.splitPath(s),_=d[0],b=d[1];return!_&&!b?".":(b&&(b=b.substr(0,b.length-1)),_+b)},basename:function(s){if(s==="/")return"/";var d=s.lastIndexOf("/");return d===-1?s:s.substr(d+1)},extname:function(s){return Qn.splitPath(s)[3]},join:function(){var s=Array.prototype.slice.call(arguments,0);return Qn.normalize(s.join("/"))},join2:function(s,d){return Qn.normalize(s+"/"+d)}},vt={resolve:function(){for(var s="",d=!1,_=arguments.length-1;_>=-1&&!d;_--){var b=_>=0?arguments[_]:j.cwd();if(typeof b!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";s=b+"/"+s,d=b.charAt(0)==="/"}return s=Qn.normalizeArray(s.split("/").filter(function(_e){return!!_e}),!d).join("/"),(d?"/":"")+s||"."},relative:function(s,d){s=vt.resolve(s).substr(1),d=vt.resolve(d).substr(1);function _(pn){for(var hn=0;hn<pn.length&&pn[hn]==="";hn++);for(var bn=pn.length-1;bn>=0&&pn[bn]==="";bn--);return hn>bn?[]:pn.slice(hn,bn-hn+1)}for(var b=_(s.split("/")),_e=_(d.split("/")),en=Math.min(b.length,_e.length),tn=en,nn=0;nn<en;nn++)if(b[nn]!==_e[nn]){tn=nn;break}for(var sn=[],nn=tn;nn<b.length;nn++)sn.push("..");return sn=sn.concat(_e.slice(tn)),sn.join("/")}},xt={ttys:[],init:function(){},shutdown:function(){},register:function(s,d){xt.ttys[s]={input:[],output:[],ops:d},j.registerDevice(s,xt.stream_ops)},stream_ops:{open:function(s){var d=xt.ttys[s.node.rdev];if(!d)throw new j.ErrnoError(43);s.tty=d,s.seekable=!1},close:function(s){s.tty.ops.flush(s.tty)},flush:function(s){s.tty.ops.flush(s.tty)},read:function(s,d,_,b,_e){if(!s.tty||!s.tty.ops.get_char)throw new j.ErrnoError(60);for(var en=0,tn=0;tn<b;tn++){var nn;try{nn=s.tty.ops.get_char(s.tty)}catch{throw new j.ErrnoError(29)}if(nn===void 0&&en===0)throw new j.ErrnoError(6);if(nn==null)break;en++,d[_+tn]=nn}return en&&(s.node.timestamp=Date.now()),en},write:function(s,d,_,b,_e){if(!s.tty||!s.tty.ops.put_char)throw new j.ErrnoError(60);try{for(var en=0;en<b;en++)s.tty.ops.put_char(s.tty,d[_+en])}catch{throw new j.ErrnoError(29)}return b&&(s.node.timestamp=Date.now()),en}},default_tty_ops:{get_char:function(s){if(!s.input.length){var d=null;if($){var _=256,b=Buffer.alloc?Buffer.alloc(_):new Buffer(_),_e=0;try{_e=gn.readSync(process.stdin.fd,b,0,_,null)}catch(en){if(en.toString().indexOf("EOF")!=-1)_e=0;else throw en}_e>0?d=b.slice(0,_e).toString("utf-8"):d=null}else typeof window!="undefined"&&typeof window.prompt=="function"?(d=window.prompt("Input: "),d!==null&&(d+=`
`)):typeof readline=="function"&&(d=readline(),d!==null&&(d+=`
`));if(!d)return null;s.input=or(d,!0)}return s.input.shift()},put_char:function(s,d){d===null||d===10?(xn(Xn(s.output,0)),s.output=[]):d!=0&&s.output.push(d)},flush:function(s){s.output&&s.output.length>0&&(xn(Xn(s.output,0)),s.output=[])}},default_tty1_ops:{put_char:function(s,d){d===null||d===10?(un(Xn(s.output,0)),s.output=[]):d!=0&&s.output.push(d)},flush:function(s){s.output&&s.output.length>0&&(un(Xn(s.output,0)),s.output=[])}}},Wn={ops_table:null,mount:function(s){return Wn.createNode(null,"/",16895,0)},createNode:function(s,d,_,b){if(j.isBlkdev(_)||j.isFIFO(_))throw new j.ErrnoError(63);Wn.ops_table||(Wn.ops_table={dir:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr,lookup:Wn.node_ops.lookup,mknod:Wn.node_ops.mknod,rename:Wn.node_ops.rename,unlink:Wn.node_ops.unlink,rmdir:Wn.node_ops.rmdir,readdir:Wn.node_ops.readdir,symlink:Wn.node_ops.symlink},stream:{llseek:Wn.stream_ops.llseek}},file:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr},stream:{llseek:Wn.stream_ops.llseek,read:Wn.stream_ops.read,write:Wn.stream_ops.write,allocate:Wn.stream_ops.allocate,mmap:Wn.stream_ops.mmap,msync:Wn.stream_ops.msync}},link:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr,readlink:Wn.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr},stream:j.chrdev_stream_ops}});var _e=j.createNode(s,d,_,b);return j.isDir(_e.mode)?(_e.node_ops=Wn.ops_table.dir.node,_e.stream_ops=Wn.ops_table.dir.stream,_e.contents={}):j.isFile(_e.mode)?(_e.node_ops=Wn.ops_table.file.node,_e.stream_ops=Wn.ops_table.file.stream,_e.usedBytes=0,_e.contents=null):j.isLink(_e.mode)?(_e.node_ops=Wn.ops_table.link.node,_e.stream_ops=Wn.ops_table.link.stream):j.isChrdev(_e.mode)&&(_e.node_ops=Wn.ops_table.chrdev.node,_e.stream_ops=Wn.ops_table.chrdev.stream),_e.timestamp=Date.now(),s&&(s.contents[d]=_e),_e},getFileDataAsRegularArray:function(s){if(s.contents&&s.contents.subarray){for(var d=[],_=0;_<s.usedBytes;++_)d.push(s.contents[_]);return d}return s.contents},getFileDataAsTypedArray:function(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage:function(s,d){var _=s.contents?s.contents.length:0;if(!(_>=d)){var b=1024*1024;d=Math.max(d,_*(_<b?2:1.125)|0),_!=0&&(d=Math.max(d,256));var _e=s.contents;s.contents=new Uint8Array(d),s.usedBytes>0&&s.contents.set(_e.subarray(0,s.usedBytes),0)}},resizeFileStorage:function(s,d){if(s.usedBytes!=d){if(d==0){s.contents=null,s.usedBytes=0;return}if(!s.contents||s.contents.subarray){var _=s.contents;s.contents=new Uint8Array(d),_&&s.contents.set(_.subarray(0,Math.min(d,s.usedBytes))),s.usedBytes=d;return}if(s.contents||(s.contents=[]),s.contents.length>d)s.contents.length=d;else for(;s.contents.length<d;)s.contents.push(0);s.usedBytes=d}},node_ops:{getattr:function(s){var d={};return d.dev=j.isChrdev(s.mode)?s.id:1,d.ino=s.id,d.mode=s.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=s.rdev,j.isDir(s.mode)?d.size=4096:j.isFile(s.mode)?d.size=s.usedBytes:j.isLink(s.mode)?d.size=s.link.length:d.size=0,d.atime=new Date(s.timestamp),d.mtime=new Date(s.timestamp),d.ctime=new Date(s.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr:function(s,d){d.mode!==void 0&&(s.mode=d.mode),d.timestamp!==void 0&&(s.timestamp=d.timestamp),d.size!==void 0&&Wn.resizeFileStorage(s,d.size)},lookup:function(s,d){throw j.genericErrors[44]},mknod:function(s,d,_,b){return Wn.createNode(s,d,_,b)},rename:function(s,d,_){if(j.isDir(s.mode)){var b;try{b=j.lookupNode(d,_)}catch{}if(b)for(var _e in b.contents)throw new j.ErrnoError(55)}delete s.parent.contents[s.name],s.name=_,d.contents[_]=s,s.parent=d},unlink:function(s,d){delete s.contents[d]},rmdir:function(s,d){var _=j.lookupNode(s,d);for(var b in _.contents)throw new j.ErrnoError(55);delete s.contents[d]},readdir:function(s){var d=[".",".."];for(var _ in s.contents)!s.contents.hasOwnProperty(_)||d.push(_);return d},symlink:function(s,d,_){var b=Wn.createNode(s,d,41471,0);return b.link=_,b},readlink:function(s){if(!j.isLink(s.mode))throw new j.ErrnoError(28);return s.link}},stream_ops:{read:function(s,d,_,b,_e){var en=s.node.contents;if(_e>=s.node.usedBytes)return 0;var tn=Math.min(s.node.usedBytes-_e,b);if(on(tn>=0),tn>8&&en.subarray)d.set(en.subarray(_e,_e+tn),_);else for(var nn=0;nn<tn;nn++)d[_+nn]=en[_e+nn];return tn},write:function(s,d,_,b,_e,en){if(on(!(d instanceof ArrayBuffer)),d.buffer===et.buffer&&(en&&yn("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"),en=!1),!b)return 0;var tn=s.node;if(tn.timestamp=Date.now(),d.subarray&&(!tn.contents||tn.contents.subarray)){if(en)return on(_e===0,"canOwn must imply no weird position inside the file"),tn.contents=d.subarray(_,_+b),tn.usedBytes=b,b;if(tn.usedBytes===0&&_e===0)return tn.contents=d.slice(_,_+b),tn.usedBytes=b,b;if(_e+b<=tn.usedBytes)return tn.contents.set(d.subarray(_,_+b),_e),b}if(Wn.expandFileStorage(tn,_e+b),tn.contents.subarray&&d.subarray)tn.contents.set(d.subarray(_,_+b),_e);else for(var nn=0;nn<b;nn++)tn.contents[_e+nn]=d[_+nn];return tn.usedBytes=Math.max(tn.usedBytes,_e+b),b},llseek:function(s,d,_){var b=d;if(_===1?b+=s.position:_===2&&j.isFile(s.node.mode)&&(b+=s.node.usedBytes),b<0)throw new j.ErrnoError(28);return b},allocate:function(s,d,_){Wn.expandFileStorage(s.node,d+_),s.node.usedBytes=Math.max(s.node.usedBytes,d+_)},mmap:function(s,d,_,b,_e,en,tn){if(on(!(d instanceof ArrayBuffer)),!j.isFile(s.node.mode))throw new j.ErrnoError(43);var nn,sn,pn=s.node.contents;if(!(tn&2)&&pn.buffer===d.buffer)sn=!1,nn=pn.byteOffset;else{(_e>0||_e+b<pn.length)&&(pn.subarray?pn=pn.subarray(_e,_e+b):pn=Array.prototype.slice.call(pn,_e,_e+b)),sn=!0;var hn=d.buffer==et.buffer;if(nn=_t(b),!nn)throw new j.ErrnoError(48);(hn?et:d).set(pn,nn)}return{ptr:nn,allocated:sn}},msync:function(s,d,_,b,_e){if(!j.isFile(s.node.mode))throw new j.ErrnoError(43);return _e&2||Wn.stream_ops.write(s,d,0,b,_,!1),0}}},ds={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},Kn={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},j={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(s){if(!(s instanceof j.ErrnoError))throw s+" : "+vo();return qt(s.errno)},lookupPath:function(s,d){if(s=vt.resolve(j.cwd(),s),d=d||{},!s)return{path:"",node:null};var _={follow_mount:!0,recurse_count:0};for(var b in _)d[b]===void 0&&(d[b]=_[b]);if(d.recurse_count>8)throw new j.ErrnoError(32);for(var _e=Qn.normalizeArray(s.split("/").filter(function(En){return!!En}),!1),en=j.root,tn="/",nn=0;nn<_e.length;nn++){var sn=nn===_e.length-1;if(sn&&d.parent)break;if(en=j.lookupNode(en,_e[nn]),tn=Qn.join2(tn,_e[nn]),j.isMountpoint(en)&&(!sn||sn&&d.follow_mount)&&(en=en.mounted.root),!sn||d.follow)for(var pn=0;j.isLink(en.mode);){var hn=j.readlink(tn);tn=vt.resolve(Qn.dirname(tn),hn);var bn=j.lookupPath(tn,{recurse_count:d.recurse_count});if(en=bn.node,pn++>40)throw new j.ErrnoError(32)}}return{path:tn,node:en}},getPath:function(s){for(var d;;){if(j.isRoot(s)){var _=s.mount.mountpoint;return d?_[_.length-1]!=="/"?_+"/"+d:_+d:_}d=d?s.name+"/"+d:s.name,s=s.parent}},hashName:function(s,d){for(var _=0,b=0;b<d.length;b++)_=(_<<5)-_+d.charCodeAt(b)|0;return(s+_>>>0)%j.nameTable.length},hashAddNode:function(s){var d=j.hashName(s.parent.id,s.name);s.name_next=j.nameTable[d],j.nameTable[d]=s},hashRemoveNode:function(s){var d=j.hashName(s.parent.id,s.name);if(j.nameTable[d]===s)j.nameTable[d]=s.name_next;else for(var _=j.nameTable[d];_;){if(_.name_next===s){_.name_next=s.name_next;break}_=_.name_next}},lookupNode:function(s,d){var _=j.mayLookup(s);if(_)throw new j.ErrnoError(_,s);for(var b=j.hashName(s.id,d),_e=j.nameTable[b];_e;_e=_e.name_next){var en=_e.name;if(_e.parent.id===s.id&&en===d)return _e}return j.lookup(s,d)},createNode:function(s,d,_,b){var _e=new j.FSNode(s,d,_,b);return j.hashAddNode(_e),_e},destroyNode:function(s){j.hashRemoveNode(s)},isRoot:function(s){return s===s.parent},isMountpoint:function(s){return!!s.mounted},isFile:function(s){return(s&61440)===32768},isDir:function(s){return(s&61440)===16384},isLink:function(s){return(s&61440)===40960},isChrdev:function(s){return(s&61440)===8192},isBlkdev:function(s){return(s&61440)===24576},isFIFO:function(s){return(s&61440)===4096},isSocket:function(s){return(s&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(s){var d=j.flagModes[s];if(typeof d=="undefined")throw new Error("Unknown file open mode: "+s);return d},flagsToPermissionString:function(s){var d=["r","w","rw"][s&3];return s&512&&(d+="w"),d},nodePermissions:function(s,d){return j.ignorePermissions?0:d.indexOf("r")!==-1&&!(s.mode&292)||d.indexOf("w")!==-1&&!(s.mode&146)||d.indexOf("x")!==-1&&!(s.mode&73)?2:0},mayLookup:function(s){var d=j.nodePermissions(s,"x");return d||(s.node_ops.lookup?0:2)},mayCreate:function(s,d){try{var _=j.lookupNode(s,d);return 20}catch{}return j.nodePermissions(s,"wx")},mayDelete:function(s,d,_){var b;try{b=j.lookupNode(s,d)}catch(en){return en.errno}var _e=j.nodePermissions(s,"wx");if(_e)return _e;if(_){if(!j.isDir(b.mode))return 54;if(j.isRoot(b)||j.getPath(b)===j.cwd())return 10}else if(j.isDir(b.mode))return 31;return 0},mayOpen:function(s,d){return s?j.isLink(s.mode)?32:j.isDir(s.mode)&&(j.flagsToPermissionString(d)!=="r"||d&512)?31:j.nodePermissions(s,j.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd:function(s,d){s=s||0,d=d||j.MAX_OPEN_FDS;for(var _=s;_<=d;_++)if(!j.streams[_])return _;throw new j.ErrnoError(33)},getStream:function(s){return j.streams[s]},createStream:function(s,d,_){j.FSStream||(j.FSStream=function(){},j.FSStream.prototype={object:{get:function(){return this.node},set:function(tn){this.node=tn}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var b=new j.FSStream;for(var _e in s)b[_e]=s[_e];s=b;var en=j.nextfd(d,_);return s.fd=en,j.streams[en]=s,s},closeStream:function(s){j.streams[s]=null},chrdev_stream_ops:{open:function(s){var d=j.getDevice(s.node.rdev);s.stream_ops=d.stream_ops,s.stream_ops.open&&s.stream_ops.open(s)},llseek:function(){throw new j.ErrnoError(70)}},major:function(s){return s>>8},minor:function(s){return s&255},makedev:function(s,d){return s<<8|d},registerDevice:function(s,d){j.devices[s]={stream_ops:d}},getDevice:function(s){return j.devices[s]},getMounts:function(s){for(var d=[],_=[s];_.length;){var b=_.pop();d.push(b),_.push.apply(_,b.mounts)}return d},syncfs:function(s,d){typeof s=="function"&&(d=s,s=!1),j.syncFSRequests++,j.syncFSRequests>1&&un("warning: "+j.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var _=j.getMounts(j.root.mount),b=0;function _e(tn){return on(j.syncFSRequests>0),j.syncFSRequests--,d(tn)}function en(tn){if(tn)return en.errored?void 0:(en.errored=!0,_e(tn));++b>=_.length&&_e(null)}_.forEach(function(tn){if(!tn.type.syncfs)return en(null);tn.type.syncfs(tn,s,en)})},mount:function(s,d,_){if(typeof s=="string")throw s;var b=_==="/",_e=!_,en;if(b&&j.root)throw new j.ErrnoError(10);if(!b&&!_e){var tn=j.lookupPath(_,{follow_mount:!1});if(_=tn.path,en=tn.node,j.isMountpoint(en))throw new j.ErrnoError(10);if(!j.isDir(en.mode))throw new j.ErrnoError(54)}var nn={type:s,opts:d,mountpoint:_,mounts:[]},sn=s.mount(nn);return sn.mount=nn,nn.root=sn,b?j.root=sn:en&&(en.mounted=nn,en.mount&&en.mount.mounts.push(nn)),sn},unmount:function(s){var d=j.lookupPath(s,{follow_mount:!1});if(!j.isMountpoint(d.node))throw new j.ErrnoError(28);var _=d.node,b=_.mounted,_e=j.getMounts(b);Object.keys(j.nameTable).forEach(function(tn){for(var nn=j.nameTable[tn];nn;){var sn=nn.name_next;_e.indexOf(nn.mount)!==-1&&j.destroyNode(nn),nn=sn}}),_.mounted=null;var en=_.mount.mounts.indexOf(b);on(en!==-1),_.mount.mounts.splice(en,1)},lookup:function(s,d){return s.node_ops.lookup(s,d)},mknod:function(s,d,_){var b=j.lookupPath(s,{parent:!0}),_e=b.node,en=Qn.basename(s);if(!en||en==="."||en==="..")throw new j.ErrnoError(28);var tn=j.mayCreate(_e,en);if(tn)throw new j.ErrnoError(tn);if(!_e.node_ops.mknod)throw new j.ErrnoError(63);return _e.node_ops.mknod(_e,en,d,_)},create:function(s,d){return d=d!==void 0?d:438,d&=4095,d|=32768,j.mknod(s,d,0)},mkdir:function(s,d){return d=d!==void 0?d:511,d&=1023,d|=16384,j.mknod(s,d,0)},mkdirTree:function(s,d){for(var _=s.split("/"),b="",_e=0;_e<_.length;++_e)if(!!_[_e]){b+="/"+_[_e];try{j.mkdir(b,d)}catch(en){if(en.errno!=20)throw en}}},mkdev:function(s,d,_){return typeof _=="undefined"&&(_=d,d=438),d|=8192,j.mknod(s,d,_)},symlink:function(s,d){if(!vt.resolve(s))throw new j.ErrnoError(44);var _=j.lookupPath(d,{parent:!0}),b=_.node;if(!b)throw new j.ErrnoError(44);var _e=Qn.basename(d),en=j.mayCreate(b,_e);if(en)throw new j.ErrnoError(en);if(!b.node_ops.symlink)throw new j.ErrnoError(63);return b.node_ops.symlink(b,_e,s)},rename:function(s,d){var _=Qn.dirname(s),b=Qn.dirname(d),_e=Qn.basename(s),en=Qn.basename(d),tn,nn,sn;try{tn=j.lookupPath(s,{parent:!0}),nn=tn.node,tn=j.lookupPath(d,{parent:!0}),sn=tn.node}catch{throw new j.ErrnoError(10)}if(!nn||!sn)throw new j.ErrnoError(44);if(nn.mount!==sn.mount)throw new j.ErrnoError(75);var pn=j.lookupNode(nn,_e),hn=vt.relative(s,b);if(hn.charAt(0)!==".")throw new j.ErrnoError(28);if(hn=vt.relative(d,_),hn.charAt(0)!==".")throw new j.ErrnoError(55);var bn;try{bn=j.lookupNode(sn,en)}catch{}if(pn!==bn){var En=j.isDir(pn.mode),wn=j.mayDelete(nn,_e,En);if(wn)throw new j.ErrnoError(wn);if(wn=bn?j.mayDelete(sn,en,En):j.mayCreate(sn,en),wn)throw new j.ErrnoError(wn);if(!nn.node_ops.rename)throw new j.ErrnoError(63);if(j.isMountpoint(pn)||bn&&j.isMountpoint(bn))throw new j.ErrnoError(10);if(sn!==nn&&(wn=j.nodePermissions(nn,"w"),wn))throw new j.ErrnoError(wn);try{j.trackingDelegate.willMovePath&&j.trackingDelegate.willMovePath(s,d)}catch(On){un("FS.trackingDelegate['willMovePath']('"+s+"', '"+d+"') threw an exception: "+On.message)}j.hashRemoveNode(pn);try{nn.node_ops.rename(pn,sn,en)}catch(On){throw On}finally{j.hashAddNode(pn)}try{j.trackingDelegate.onMovePath&&j.trackingDelegate.onMovePath(s,d)}catch(On){un("FS.trackingDelegate['onMovePath']('"+s+"', '"+d+"') threw an exception: "+On.message)}}},rmdir:function(s){var d=j.lookupPath(s,{parent:!0}),_=d.node,b=Qn.basename(s),_e=j.lookupNode(_,b),en=j.mayDelete(_,b,!0);if(en)throw new j.ErrnoError(en);if(!_.node_ops.rmdir)throw new j.ErrnoError(63);if(j.isMountpoint(_e))throw new j.ErrnoError(10);try{j.trackingDelegate.willDeletePath&&j.trackingDelegate.willDeletePath(s)}catch(tn){un("FS.trackingDelegate['willDeletePath']('"+s+"') threw an exception: "+tn.message)}_.node_ops.rmdir(_,b),j.destroyNode(_e);try{j.trackingDelegate.onDeletePath&&j.trackingDelegate.onDeletePath(s)}catch(tn){un("FS.trackingDelegate['onDeletePath']('"+s+"') threw an exception: "+tn.message)}},readdir:function(s){var d=j.lookupPath(s,{follow:!0}),_=d.node;if(!_.node_ops.readdir)throw new j.ErrnoError(54);return _.node_ops.readdir(_)},unlink:function(s){var d=j.lookupPath(s,{parent:!0}),_=d.node,b=Qn.basename(s),_e=j.lookupNode(_,b),en=j.mayDelete(_,b,!1);if(en)throw new j.ErrnoError(en);if(!_.node_ops.unlink)throw new j.ErrnoError(63);if(j.isMountpoint(_e))throw new j.ErrnoError(10);try{j.trackingDelegate.willDeletePath&&j.trackingDelegate.willDeletePath(s)}catch(tn){un("FS.trackingDelegate['willDeletePath']('"+s+"') threw an exception: "+tn.message)}_.node_ops.unlink(_,b),j.destroyNode(_e);try{j.trackingDelegate.onDeletePath&&j.trackingDelegate.onDeletePath(s)}catch(tn){un("FS.trackingDelegate['onDeletePath']('"+s+"') threw an exception: "+tn.message)}},readlink:function(s){var d=j.lookupPath(s),_=d.node;if(!_)throw new j.ErrnoError(44);if(!_.node_ops.readlink)throw new j.ErrnoError(28);return vt.resolve(j.getPath(_.parent),_.node_ops.readlink(_))},stat:function(s,d){var _=j.lookupPath(s,{follow:!d}),b=_.node;if(!b)throw new j.ErrnoError(44);if(!b.node_ops.getattr)throw new j.ErrnoError(63);return b.node_ops.getattr(b)},lstat:function(s){return j.stat(s,!0)},chmod:function(s,d,_){var b;if(typeof s=="string"){var _e=j.lookupPath(s,{follow:!_});b=_e.node}else b=s;if(!b.node_ops.setattr)throw new j.ErrnoError(63);b.node_ops.setattr(b,{mode:d&4095|b.mode&-4096,timestamp:Date.now()})},lchmod:function(s,d){j.chmod(s,d,!0)},fchmod:function(s,d){var _=j.getStream(s);if(!_)throw new j.ErrnoError(8);j.chmod(_.node,d)},chown:function(s,d,_,b){var _e;if(typeof s=="string"){var en=j.lookupPath(s,{follow:!b});_e=en.node}else _e=s;if(!_e.node_ops.setattr)throw new j.ErrnoError(63);_e.node_ops.setattr(_e,{timestamp:Date.now()})},lchown:function(s,d,_){j.chown(s,d,_,!0)},fchown:function(s,d,_){var b=j.getStream(s);if(!b)throw new j.ErrnoError(8);j.chown(b.node,d,_)},truncate:function(s,d){if(d<0)throw new j.ErrnoError(28);var _;if(typeof s=="string"){var b=j.lookupPath(s,{follow:!0});_=b.node}else _=s;if(!_.node_ops.setattr)throw new j.ErrnoError(63);if(j.isDir(_.mode))throw new j.ErrnoError(31);if(!j.isFile(_.mode))throw new j.ErrnoError(28);var _e=j.nodePermissions(_,"w");if(_e)throw new j.ErrnoError(_e);_.node_ops.setattr(_,{size:d,timestamp:Date.now()})},ftruncate:function(s,d){var _=j.getStream(s);if(!_)throw new j.ErrnoError(8);if((_.flags&2097155)===0)throw new j.ErrnoError(28);j.truncate(_.node,d)},utime:function(s,d,_){var b=j.lookupPath(s,{follow:!0}),_e=b.node;_e.node_ops.setattr(_e,{timestamp:Math.max(d,_)})},open:function(s,d,_,b,_e){if(s==="")throw new j.ErrnoError(44);d=typeof d=="string"?j.modeStringToFlags(d):d,_=typeof _=="undefined"?438:_,d&64?_=_&4095|32768:_=0;var en;if(typeof s=="object")en=s;else{s=Qn.normalize(s);try{var tn=j.lookupPath(s,{follow:!(d&131072)});en=tn.node}catch{}}var nn=!1;if(d&64)if(en){if(d&128)throw new j.ErrnoError(20)}else en=j.mknod(s,_,0),nn=!0;if(!en)throw new j.ErrnoError(44);if(j.isChrdev(en.mode)&&(d&=-513),d&65536&&!j.isDir(en.mode))throw new j.ErrnoError(54);if(!nn){var sn=j.mayOpen(en,d);if(sn)throw new j.ErrnoError(sn)}d&512&&j.truncate(en,0),d&=-641;var pn=j.createStream({node:en,path:j.getPath(en),flags:d,seekable:!0,position:0,stream_ops:en.stream_ops,ungotten:[],error:!1},b,_e);pn.stream_ops.open&&pn.stream_ops.open(pn),a.logReadFiles&&!(d&1)&&(j.readFiles||(j.readFiles={}),s in j.readFiles||(j.readFiles[s]=1,un("FS.trackingDelegate error on read file: "+s)));try{if(j.trackingDelegate.onOpenFile){var hn=0;(d&2097155)!==1&&(hn|=j.tracking.openFlags.READ),(d&2097155)!==0&&(hn|=j.tracking.openFlags.WRITE),j.trackingDelegate.onOpenFile(s,hn)}}catch(bn){un("FS.trackingDelegate['onOpenFile']('"+s+"', flags) threw an exception: "+bn.message)}return pn},close:function(s){if(j.isClosed(s))throw new j.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(d){throw d}finally{j.closeStream(s.fd)}s.fd=null},isClosed:function(s){return s.fd===null},llseek:function(s,d,_){if(j.isClosed(s))throw new j.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new j.ErrnoError(70);if(_!=0&&_!=1&&_!=2)throw new j.ErrnoError(28);return s.position=s.stream_ops.llseek(s,d,_),s.ungotten=[],s.position},read:function(s,d,_,b,_e){if(b<0||_e<0)throw new j.ErrnoError(28);if(j.isClosed(s))throw new j.ErrnoError(8);if((s.flags&2097155)===1)throw new j.ErrnoError(8);if(j.isDir(s.node.mode))throw new j.ErrnoError(31);if(!s.stream_ops.read)throw new j.ErrnoError(28);var en=typeof _e!="undefined";if(!en)_e=s.position;else if(!s.seekable)throw new j.ErrnoError(70);var tn=s.stream_ops.read(s,d,_,b,_e);return en||(s.position+=tn),tn},write:function(s,d,_,b,_e,en){if(b<0||_e<0)throw new j.ErrnoError(28);if(j.isClosed(s))throw new j.ErrnoError(8);if((s.flags&2097155)===0)throw new j.ErrnoError(8);if(j.isDir(s.node.mode))throw new j.ErrnoError(31);if(!s.stream_ops.write)throw new j.ErrnoError(28);s.flags&1024&&j.llseek(s,0,2);var tn=typeof _e!="undefined";if(!tn)_e=s.position;else if(!s.seekable)throw new j.ErrnoError(70);var nn=s.stream_ops.write(s,d,_,b,_e,en);tn||(s.position+=nn);try{s.path&&j.trackingDelegate.onWriteToFile&&j.trackingDelegate.onWriteToFile(s.path)}catch(sn){un("FS.trackingDelegate['onWriteToFile']('"+s.path+"') threw an exception: "+sn.message)}return nn},allocate:function(s,d,_){if(j.isClosed(s))throw new j.ErrnoError(8);if(d<0||_<=0)throw new j.ErrnoError(28);if((s.flags&2097155)===0)throw new j.ErrnoError(8);if(!j.isFile(s.node.mode)&&!j.isDir(s.node.mode))throw new j.ErrnoError(43);if(!s.stream_ops.allocate)throw new j.ErrnoError(138);s.stream_ops.allocate(s,d,_)},mmap:function(s,d,_,b,_e,en,tn){if((en&2)!==0&&(tn&2)===0&&(s.flags&2097155)!==2)throw new j.ErrnoError(2);if((s.flags&2097155)===1)throw new j.ErrnoError(2);if(!s.stream_ops.mmap)throw new j.ErrnoError(43);return s.stream_ops.mmap(s,d,_,b,_e,en,tn)},msync:function(s,d,_,b,_e){return!s||!s.stream_ops.msync?0:s.stream_ops.msync(s,d,_,b,_e)},munmap:function(s){return 0},ioctl:function(s,d,_){if(!s.stream_ops.ioctl)throw new j.ErrnoError(59);return s.stream_ops.ioctl(s,d,_)},readFile:function(s,d){if(d=d||{},d.flags=d.flags||"r",d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error('Invalid encoding type "'+d.encoding+'"');var _,b=j.open(s,d.flags),_e=j.stat(s),en=_e.size,tn=new Uint8Array(en);return j.read(b,tn,0,en,0),d.encoding==="utf8"?_=Xn(tn,0):d.encoding==="binary"&&(_=tn),j.close(b),_},writeFile:function(s,d,_){_=_||{},_.flags=_.flags||"w";var b=j.open(s,_.flags,_.mode);if(typeof d=="string"){var _e=new Uint8Array(pt(d)+1),en=Yn(d,_e,0,_e.length);j.write(b,_e,0,en,void 0,_.canOwn)}else if(ArrayBuffer.isView(d))j.write(b,d,0,d.byteLength,void 0,_.canOwn);else throw new Error("Unsupported data type");j.close(b)},cwd:function(){return j.currentPath},chdir:function(s){var d=j.lookupPath(s,{follow:!0});if(d.node===null)throw new j.ErrnoError(44);if(!j.isDir(d.node.mode))throw new j.ErrnoError(54);var _=j.nodePermissions(d.node,"x");if(_)throw new j.ErrnoError(_);j.currentPath=d.path},createDefaultDirectories:function(){j.mkdir("/tmp"),j.mkdir("/home"),j.mkdir("/home/web_user")},createDefaultDevices:function(){j.mkdir("/dev"),j.registerDevice(j.makedev(1,3),{read:function(){return 0},write:function(b,_e,en,tn,nn){return tn}}),j.mkdev("/dev/null",j.makedev(1,3)),xt.register(j.makedev(5,0),xt.default_tty_ops),xt.register(j.makedev(6,0),xt.default_tty1_ops),j.mkdev("/dev/tty",j.makedev(5,0)),j.mkdev("/dev/tty1",j.makedev(6,0));var s;if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var d=new Uint8Array(1);s=function(){return crypto.getRandomValues(d),d[0]}}else if($)try{var _=require("crypto");s=function(){return _.randomBytes(1)[0]}}catch{}s||(s=function(){an("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")}),j.createDevice("/dev","random",s),j.createDevice("/dev","urandom",s),j.mkdir("/dev/shm"),j.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){j.mkdir("/proc"),j.mkdir("/proc/self"),j.mkdir("/proc/self/fd"),j.mount({mount:function(){var s=j.createNode("/proc/self","fd",16895,73);return s.node_ops={lookup:function(d,_){var b=+_,_e=j.getStream(b);if(!_e)throw new j.ErrnoError(8);var en={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return _e.path}}};return en.parent=en,en}},s}},{},"/proc/self/fd")},createStandardStreams:function(){a.stdin?j.createDevice("/dev","stdin",a.stdin):j.symlink("/dev/tty","/dev/stdin"),a.stdout?j.createDevice("/dev","stdout",null,a.stdout):j.symlink("/dev/tty","/dev/stdout"),a.stderr?j.createDevice("/dev","stderr",null,a.stderr):j.symlink("/dev/tty1","/dev/stderr");var s=j.open("/dev/stdin","r"),d=j.open("/dev/stdout","w"),_=j.open("/dev/stderr","w");on(s.fd===0,"invalid handle for stdin ("+s.fd+")"),on(d.fd===1,"invalid handle for stdout ("+d.fd+")"),on(_.fd===2,"invalid handle for stderr ("+_.fd+")")},ensureErrnoError:function(){j.ErrnoError||(j.ErrnoError=function(d,_){this.node=_,this.setErrno=function(b){this.errno=b;for(var _e in Kn)if(Kn[_e]===b){this.code=_e;break}},this.setErrno(d),this.message=ds[d],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=yo(this.stack))},j.ErrnoError.prototype=new Error,j.ErrnoError.prototype.constructor=j.ErrnoError,[44].forEach(function(s){j.genericErrors[s]=new j.ErrnoError(s),j.genericErrors[s].stack="<generic error, no stack>"}))},staticInit:function(){j.ensureErrnoError(),j.nameTable=new Array(4096),j.mount(Wn,{},"/"),j.createDefaultDirectories(),j.createDefaultDevices(),j.createSpecialDirectories(),j.filesystems={MEMFS:Wn}},init:function(s,d,_){on(!j.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),j.init.initialized=!0,j.ensureErrnoError(),a.stdin=s||a.stdin,a.stdout=d||a.stdout,a.stderr=_||a.stderr,j.createStandardStreams()},quit:function(){j.init.initialized=!1;var s=a._fflush;s&&s(0);for(var d=0;d<j.streams.length;d++){var _=j.streams[d];!_||j.close(_)}},getMode:function(s,d){var _=0;return s&&(_|=365),d&&(_|=146),_},joinPath:function(s,d){var _=Qn.join.apply(null,s);return d&&_[0]=="/"&&(_=_.substr(1)),_},absolutePath:function(s,d){return vt.resolve(d,s)},standardizePath:function(s){return Qn.normalize(s)},findObject:function(s,d){var _=j.analyzePath(s,d);return _.exists?_.object:(qt(_.error),null)},analyzePath:function(s,d){try{var _=j.lookupPath(s,{follow:!d});s=_.path}catch{}var b={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var _=j.lookupPath(s,{parent:!0});b.parentExists=!0,b.parentPath=_.path,b.parentObject=_.node,b.name=Qn.basename(s),_=j.lookupPath(s,{follow:!d}),b.exists=!0,b.path=_.path,b.object=_.node,b.name=_.node.name,b.isRoot=_.path==="/"}catch(_e){b.error=_e.errno}return b},createFolder:function(s,d,_,b){var _e=Qn.join2(typeof s=="string"?s:j.getPath(s),d),en=j.getMode(_,b);return j.mkdir(_e,en)},createPath:function(s,d,_,b){s=typeof s=="string"?s:j.getPath(s);for(var _e=d.split("/").reverse();_e.length;){var en=_e.pop();if(!!en){var tn=Qn.join2(s,en);try{j.mkdir(tn)}catch{}s=tn}}return tn},createFile:function(s,d,_,b,_e){var en=Qn.join2(typeof s=="string"?s:j.getPath(s),d),tn=j.getMode(b,_e);return j.create(en,tn)},createDataFile:function(s,d,_,b,_e,en){var tn=d?Qn.join2(typeof s=="string"?s:j.getPath(s),d):s,nn=j.getMode(b,_e),sn=j.create(tn,nn);if(_){if(typeof _=="string"){for(var pn=new Array(_.length),hn=0,bn=_.length;hn<bn;++hn)pn[hn]=_.charCodeAt(hn);_=pn}j.chmod(sn,nn|146);var En=j.open(sn,"w");j.write(En,_,0,_.length,0,en),j.close(En),j.chmod(sn,nn)}return sn},createDevice:function(s,d,_,b){var _e=Qn.join2(typeof s=="string"?s:j.getPath(s),d),en=j.getMode(!!_,!!b);j.createDevice.major||(j.createDevice.major=64);var tn=j.makedev(j.createDevice.major++,0);return j.registerDevice(tn,{open:function(nn){nn.seekable=!1},close:function(nn){b&&b.buffer&&b.buffer.length&&b(10)},read:function(nn,sn,pn,hn,bn){for(var En=0,wn=0;wn<hn;wn++){var On;try{On=_()}catch{throw new j.ErrnoError(29)}if(On===void 0&&En===0)throw new j.ErrnoError(6);if(On==null)break;En++,sn[pn+wn]=On}return En&&(nn.node.timestamp=Date.now()),En},write:function(nn,sn,pn,hn,bn){for(var En=0;En<hn;En++)try{b(sn[pn+En])}catch{throw new j.ErrnoError(29)}return hn&&(nn.node.timestamp=Date.now()),En}}),j.mkdev(_e,en,tn)},createLink:function(s,d,_,b,_e){var en=Qn.join2(typeof s=="string"?s:j.getPath(s),d);return j.symlink(_,en)},forceLoadFile:function(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;var d=!0;if(typeof XMLHttpRequest!="undefined")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(cn)try{s.contents=or(cn(s.url),!0),s.usedBytes=s.contents.length}catch{d=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return d||qt(29),d},createLazyFile:function(s,d,_,b,_e){function en(){this.lengthKnown=!1,this.chunks=[]}if(en.prototype.get=function(En){if(!(En>this.length-1||En<0)){var wn=En%this.chunkSize,On=En/this.chunkSize|0;return this.getter(On)[wn]}},en.prototype.setDataGetter=function(En){this.getter=En},en.prototype.cacheLength=function(){var En=new XMLHttpRequest;if(En.open("HEAD",_,!1),En.send(null),!(En.status>=200&&En.status<300||En.status===304))throw new Error("Couldn't load "+_+". Status: "+En.status);var wn=Number(En.getResponseHeader("Content-length")),On,Nn=(On=En.getResponseHeader("Accept-Ranges"))&&On==="bytes",Ln=(On=En.getResponseHeader("Content-Encoding"))&&On==="gzip",Bn=1024*1024;Nn||(Bn=wn);var Tn=function(jn,Hn){if(jn>Hn)throw new Error("invalid range ("+jn+", "+Hn+") or no bytes requested!");if(Hn>wn-1)throw new Error("only "+wn+" bytes available! programmer error!");var $n=new XMLHttpRequest;if($n.open("GET",_,!1),wn!==Bn&&$n.setRequestHeader("Range","bytes="+jn+"-"+Hn),typeof Uint8Array!="undefined"&&($n.responseType="arraybuffer"),$n.overrideMimeType&&$n.overrideMimeType("text/plain; charset=x-user-defined"),$n.send(null),!($n.status>=200&&$n.status<300||$n.status===304))throw new Error("Couldn't load "+_+". Status: "+$n.status);return $n.response!==void 0?new Uint8Array($n.response||[]):or($n.responseText||"",!0)},Dn=this;Dn.setDataGetter(function(jn){var Hn=jn*Bn,$n=(jn+1)*Bn-1;if($n=Math.min($n,wn-1),typeof Dn.chunks[jn]=="undefined"&&(Dn.chunks[jn]=Tn(Hn,$n)),typeof Dn.chunks[jn]=="undefined")throw new Error("doXHR failed!");return Dn.chunks[jn]}),(Ln||!wn)&&(Bn=wn=1,wn=this.getter(0).length,Bn=wn,xn("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=wn,this._chunkSize=Bn,this.lengthKnown=!0},typeof XMLHttpRequest!="undefined"){if(!Z)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var tn=new en;Object.defineProperties(tn,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var nn={isDevice:!1,contents:tn}}else var nn={isDevice:!1,url:_};var sn=j.createFile(s,d,nn,b,_e);nn.contents?sn.contents=nn.contents:nn.url&&(sn.contents=null,sn.url=nn.url),Object.defineProperties(sn,{usedBytes:{get:function(){return this.contents.length}}});var pn={},hn=Object.keys(sn.stream_ops);return hn.forEach(function(bn){var En=sn.stream_ops[bn];pn[bn]=function(){if(!j.forceLoadFile(sn))throw new j.ErrnoError(29);return En.apply(null,arguments)}}),pn.read=function(En,wn,On,Nn,Ln){if(!j.forceLoadFile(sn))throw new j.ErrnoError(29);var Bn=En.node.contents;if(Ln>=Bn.length)return 0;var Tn=Math.min(Bn.length-Ln,Nn);if(on(Tn>=0),Bn.slice)for(var Dn=0;Dn<Tn;Dn++)wn[On+Dn]=Bn[Ln+Dn];else for(var Dn=0;Dn<Tn;Dn++)wn[On+Dn]=Bn.get(Ln+Dn);return Tn},sn.stream_ops=pn,sn},createPreloadedFile:function(s,d,_,b,_e,en,tn,nn,sn,pn){Browser.init();var hn=d?vt.resolve(Qn.join2(s,d)):s,bn=ya("cp "+hn);function En(wn){function On(Ln){pn&&pn(),nn||j.createDataFile(s,d,Ln,b,_e,sn),en&&en(),gr(bn)}var Nn=!1;a.preloadPlugins.forEach(function(Ln){Nn||Ln.canHandle(hn)&&(Ln.handle(wn,hn,On,function(){tn&&tn(),gr(bn)}),Nn=!0)}),Nn||On(wn)}Ur(bn),typeof _=="string"?Browser.asyncLoad(_,function(wn){En(wn)},tn):En(_)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(s,d,_){d=d||function(){},_=_||function(){};var b=j.indexedDB();try{var _e=b.open(j.DB_NAME(),j.DB_VERSION)}catch(en){return _(en)}_e.onupgradeneeded=function(){xn("creating db");var tn=_e.result;tn.createObjectStore(j.DB_STORE_NAME)},_e.onsuccess=function(){var tn=_e.result,nn=tn.transaction([j.DB_STORE_NAME],"readwrite"),sn=nn.objectStore(j.DB_STORE_NAME),pn=0,hn=0,bn=s.length;function En(){hn==0?d():_()}s.forEach(function(wn){var On=sn.put(j.analyzePath(wn).object.contents,wn);On.onsuccess=function(){pn++,pn+hn==bn&&En()},On.onerror=function(){hn++,pn+hn==bn&&En()}}),nn.onerror=_},_e.onerror=_},loadFilesFromDB:function(s,d,_){d=d||function(){},_=_||function(){};var b=j.indexedDB();try{var _e=b.open(j.DB_NAME(),j.DB_VERSION)}catch(en){return _(en)}_e.onupgradeneeded=_,_e.onsuccess=function(){var tn=_e.result;try{var nn=tn.transaction([j.DB_STORE_NAME],"readonly")}catch(wn){_(wn);return}var sn=nn.objectStore(j.DB_STORE_NAME),pn=0,hn=0,bn=s.length;function En(){hn==0?d():_()}s.forEach(function(wn){var On=sn.get(wn);On.onsuccess=function(){j.analyzePath(wn).exists&&j.unlink(wn),j.createDataFile(Qn.dirname(wn),Qn.basename(wn),On.result,!0,!0,!0),pn++,pn+hn==bn&&En()},On.onerror=function(){hn++,pn+hn==bn&&En()}}),nn.onerror=_},_e.onerror=_}},Jn={mount:function(s){return a.websocket=a.websocket&&typeof a.websocket=="object"?a.websocket:{},a.websocket._callbacks={},a.websocket.on=function(d,_){return typeof _=="function"&&(this._callbacks[d]=_),this},a.websocket.emit=function(d,_){typeof this._callbacks[d]=="function"&&this._callbacks[d].call(this,_)},j.createNode(null,"/",16895,0)},createSocket:function(s,d,_){var b=d==1;_&&on(b==(_==6));var _e={family:s,type:d,protocol:_,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:Jn.websocket_sock_ops},en=Jn.nextname(),tn=j.createNode(Jn.root,en,49152,0);tn.sock=_e;var nn=j.createStream({path:en,node:tn,flags:j.modeStringToFlags("r+"),seekable:!1,stream_ops:Jn.stream_ops});return _e.stream=nn,_e},getSocket:function(s){var d=j.getStream(s);return!d||!j.isSocket(d.node.mode)?null:d.node.sock},stream_ops:{poll:function(s){var d=s.node.sock;return d.sock_ops.poll(d)},ioctl:function(s,d,_){var b=s.node.sock;return b.sock_ops.ioctl(b,d,_)},read:function(s,d,_,b,_e){var en=s.node.sock,tn=en.sock_ops.recvmsg(en,b);return tn?(d.set(tn.buffer,_),tn.buffer.length):0},write:function(s,d,_,b,_e){var en=s.node.sock;return en.sock_ops.sendmsg(en,d,_,b)},close:function(s){var d=s.node.sock;d.sock_ops.close(d)}},nextname:function(){return Jn.nextname.current||(Jn.nextname.current=0),"socket["+Jn.nextname.current+++"]"},websocket_sock_ops:{createPeer:function(s,d,_){var b;if(typeof d=="object"&&(b=d,d=null,_=null),b)if(b._socket)d=b._socket.remoteAddress,_=b._socket.remotePort;else{var _e=/ws[s]?:\/\/([^:]+):(\d+)/.exec(b.url);if(!_e)throw new Error("WebSocket URL must be in the format ws(s)://address:port");d=_e[1],_=parseInt(_e[2],10)}else try{var en=a.websocket&&typeof a.websocket=="object",tn="ws:#".replace("#","//");if(en&&typeof a.websocket.url=="string"&&(tn=a.websocket.url),tn==="ws://"||tn==="wss://"){var nn=d.split("/");tn=tn+nn[0]+":"+_+"/"+nn.slice(1).join("/")}var sn="binary";en&&typeof a.websocket.subprotocol=="string"&&(sn=a.websocket.subprotocol);var pn=void 0;sn!=="null"&&(sn=sn.replace(/^ +| +$/g,"").split(/ *, */),pn=$?{protocol:sn.toString()}:sn),en&&a.websocket.subprotocol===null&&(sn="null",pn=void 0);var hn;$?hn=require("ws"):hn=WebSocket,b=new hn(tn,pn),b.binaryType="arraybuffer"}catch{throw new j.ErrnoError(Kn.EHOSTUNREACH)}var bn={addr:d,port:_,socket:b,dgram_send_queue:[]};return Jn.websocket_sock_ops.addPeer(s,bn),Jn.websocket_sock_ops.handlePeerEvents(s,bn),s.type===2&&typeof s.sport!="undefined"&&bn.dgram_send_queue.push(new Uint8Array([255,255,255,255,"p".charCodeAt(0),"o".charCodeAt(0),"r".charCodeAt(0),"t".charCodeAt(0),(s.sport&65280)>>8,s.sport&255])),bn},getPeer:function(s,d,_){return s.peers[d+":"+_]},addPeer:function(s,d){s.peers[d.addr+":"+d.port]=d},removePeer:function(s,d){delete s.peers[d.addr+":"+d.port]},handlePeerEvents:function(s,d){var _=!0,b=function(){a.websocket.emit("open",s.stream.fd);try{for(var en=d.dgram_send_queue.shift();en;)d.socket.send(en),en=d.dgram_send_queue.shift()}catch{d.socket.close()}};function _e(en){if(typeof en=="string"){var tn=new TextEncoder;en=tn.encode(en)}else{if(on(en.byteLength!==void 0),en.byteLength==0)return;en=new Uint8Array(en)}var nn=_;if(_=!1,nn&&en.length===10&&en[0]===255&&en[1]===255&&en[2]===255&&en[3]===255&&en[4]==="p".charCodeAt(0)&&en[5]==="o".charCodeAt(0)&&en[6]==="r".charCodeAt(0)&&en[7]==="t".charCodeAt(0)){var sn=en[8]<<8|en[9];Jn.websocket_sock_ops.removePeer(s,d),d.port=sn,Jn.websocket_sock_ops.addPeer(s,d);return}s.recv_queue.push({addr:d.addr,port:d.port,data:en}),a.websocket.emit("message",s.stream.fd)}$?(d.socket.on("open",b),d.socket.on("message",function(en,tn){!tn.binary||_e(new Uint8Array(en).buffer)}),d.socket.on("close",function(){a.websocket.emit("close",s.stream.fd)}),d.socket.on("error",function(en){s.error=Kn.ECONNREFUSED,a.websocket.emit("error",[s.stream.fd,s.error,"ECONNREFUSED: Connection refused"])})):(d.socket.onopen=b,d.socket.onclose=function(){a.websocket.emit("close",s.stream.fd)},d.socket.onmessage=function(tn){_e(tn.data)},d.socket.onerror=function(en){s.error=Kn.ECONNREFUSED,a.websocket.emit("error",[s.stream.fd,s.error,"ECONNREFUSED: Connection refused"])})},poll:function(s){if(s.type===1&&s.server)return s.pending.length?65:0;var d=0,_=s.type===1?Jn.websocket_sock_ops.getPeer(s,s.daddr,s.dport):null;return(s.recv_queue.length||!_||_&&_.socket.readyState===_.socket.CLOSING||_&&_.socket.readyState===_.socket.CLOSED)&&(d|=65),(!_||_&&_.socket.readyState===_.socket.OPEN)&&(d|=4),(_&&_.socket.readyState===_.socket.CLOSING||_&&_.socket.readyState===_.socket.CLOSED)&&(d|=16),d},ioctl:function(s,d,_){switch(d){case 21531:var b=0;return s.recv_queue.length&&(b=s.recv_queue[0].data.length),_n[_>>2]=b,0;default:return Kn.EINVAL}},close:function(s){if(s.server){try{s.server.close()}catch{}s.server=null}for(var d=Object.keys(s.peers),_=0;_<d.length;_++){var b=s.peers[d[_]];try{b.socket.close()}catch{}Jn.websocket_sock_ops.removePeer(s,b)}return 0},bind:function(s,d,_){if(typeof s.saddr!="undefined"||typeof s.sport!="undefined")throw new j.ErrnoError(Kn.EINVAL);if(s.saddr=d,s.sport=_,s.type===2){s.server&&(s.server.close(),s.server=null);try{s.sock_ops.listen(s,0)}catch(b){if(!(b instanceof j.ErrnoError)||b.errno!==Kn.EOPNOTSUPP)throw b}}},connect:function(s,d,_){if(s.server)throw new j.ErrnoError(Kn.EOPNOTSUPP);if(typeof s.daddr!="undefined"&&typeof s.dport!="undefined"){var b=Jn.websocket_sock_ops.getPeer(s,s.daddr,s.dport);if(b)throw b.socket.readyState===b.socket.CONNECTING?new j.ErrnoError(Kn.EALREADY):new j.ErrnoError(Kn.EISCONN)}var _e=Jn.websocket_sock_ops.createPeer(s,d,_);throw s.daddr=_e.addr,s.dport=_e.port,new j.ErrnoError(Kn.EINPROGRESS)},listen:function(s,d){if(!$)throw new j.ErrnoError(Kn.EOPNOTSUPP);if(s.server)throw new j.ErrnoError(Kn.EINVAL);var _=require("ws").Server,b=s.saddr;s.server=new _({host:b,port:s.sport}),a.websocket.emit("listen",s.stream.fd),s.server.on("connection",function(_e){if(s.type===1){var en=Jn.createSocket(s.family,s.type,s.protocol),tn=Jn.websocket_sock_ops.createPeer(en,_e);en.daddr=tn.addr,en.dport=tn.port,s.pending.push(en),a.websocket.emit("connection",en.stream.fd)}else Jn.websocket_sock_ops.createPeer(s,_e),a.websocket.emit("connection",s.stream.fd)}),s.server.on("closed",function(){a.websocket.emit("close",s.stream.fd),s.server=null}),s.server.on("error",function(_e){s.error=Kn.EHOSTUNREACH,a.websocket.emit("error",[s.stream.fd,s.error,"EHOSTUNREACH: Host is unreachable"])})},accept:function(s){if(!s.server)throw new j.ErrnoError(Kn.EINVAL);var d=s.pending.shift();return d.stream.flags=s.stream.flags,d},getname:function(s,d){var _,b;if(d){if(s.daddr===void 0||s.dport===void 0)throw new j.ErrnoError(Kn.ENOTCONN);_=s.daddr,b=s.dport}else _=s.saddr||0,b=s.sport||0;return{addr:_,port:b}},sendmsg:function(s,d,_,b,_e,en){if(s.type===2){if((_e===void 0||en===void 0)&&(_e=s.daddr,en=s.dport),_e===void 0||en===void 0)throw new j.ErrnoError(Kn.EDESTADDRREQ)}else _e=s.daddr,en=s.dport;var tn=Jn.websocket_sock_ops.getPeer(s,_e,en);if(s.type===1){if(!tn||tn.socket.readyState===tn.socket.CLOSING||tn.socket.readyState===tn.socket.CLOSED)throw new j.ErrnoError(Kn.ENOTCONN);if(tn.socket.readyState===tn.socket.CONNECTING)throw new j.ErrnoError(Kn.EAGAIN)}ArrayBuffer.isView(d)&&(_+=d.byteOffset,d=d.buffer);var nn;if(nn=d.slice(_,_+b),s.type===2&&(!tn||tn.socket.readyState!==tn.socket.OPEN))return(!tn||tn.socket.readyState===tn.socket.CLOSING||tn.socket.readyState===tn.socket.CLOSED)&&(tn=Jn.websocket_sock_ops.createPeer(s,_e,en)),tn.dgram_send_queue.push(nn),b;try{return tn.socket.send(nn),b}catch{throw new j.ErrnoError(Kn.EINVAL)}},recvmsg:function(s,d){if(s.type===1&&s.server)throw new j.ErrnoError(Kn.ENOTCONN);var _=s.recv_queue.shift();if(!_)if(s.type===1){var b=Jn.websocket_sock_ops.getPeer(s,s.daddr,s.dport);if(b){if(b.socket.readyState===b.socket.CLOSING||b.socket.readyState===b.socket.CLOSED)return null;throw new j.ErrnoError(Kn.EAGAIN)}else throw new j.ErrnoError(Kn.ENOTCONN)}else throw new j.ErrnoError(Kn.EAGAIN);var _e=_.data.byteLength||_.data.length,en=_.data.byteOffset||0,tn=_.data.buffer||_.data,nn=Math.min(d,_e),sn={buffer:new Uint8Array(tn,en,nn),addr:_.addr,port:_.port};if(s.type===1&&nn<_e){var pn=_e-nn;_.data=new Uint8Array(tn,en+nn,pn),s.recv_queue.unshift(_)}return sn}}};function jr(s){for(var d=s.split("."),_=0;_<4;_++){var b=Number(d[_]);if(isNaN(b))return null;d[_]=b}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0}function vr(s){return parseInt(s,void 0)}function Eo(s){var d,_,b,_e,en=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,tn=[];if(!en.test(s))return null;if(s==="::")return[0,0,0,0,0,0,0,0];for(s.indexOf("::")===0?s=s.replace("::","Z:"):s=s.replace("::",":Z:"),s.indexOf(".")>0?(s=s.replace(new RegExp("[.]","g"),":"),d=s.split(":"),d[d.length-4]=vr(d[d.length-4])+vr(d[d.length-3])*256,d[d.length-3]=vr(d[d.length-2])+vr(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=s.split(":"),b=0,_e=0,_=0;_<d.length;_++)if(typeof d[_]=="string")if(d[_]==="Z"){for(_e=0;_e<8-d.length+1;_e++)tn[_+_e]=0;b=_e-1}else tn[_+b]=Zr(parseInt(d[_],16));else tn[_+b]=d[_];return[tn[1]<<16|tn[0],tn[3]<<16|tn[2],tn[5]<<16|tn[4],tn[7]<<16|tn[6]]}var it={address_map:{id:1,addrs:{},names:{}},lookup_name:function(s){var d=jr(s);if(d!==null||(d=Eo(s),d!==null))return s;var _;if(it.address_map.addrs[s])_=it.address_map.addrs[s];else{var b=it.address_map.id++;on(b<65535,"exceeded max address mappings of 65535"),_="172.29."+(b&255)+"."+(b&65280),it.address_map.names[_]=s,it.address_map.addrs[s]=_}return _},lookup_addr:function(s){return it.address_map.names[s]?it.address_map.names[s]:null}};function wo(s){return(s&255)+"."+(s>>8&255)+"."+(s>>16&255)+"."+(s>>24&255)}function cs(s){var d="",_=0,b=0,_e=0,en=0,tn=0,nn=0,sn=[s[0]&65535,s[0]>>16,s[1]&65535,s[1]>>16,s[2]&65535,s[2]>>16,s[3]&65535,s[3]>>16],pn=!0,hn="";for(nn=0;nn<5;nn++)if(sn[nn]!==0){pn=!1;break}if(pn){if(hn=wo(sn[6]|sn[7]<<16),sn[5]===-1)return d="::ffff:",d+=hn,d;if(sn[5]===0)return d="::",hn==="0.0.0.0"&&(hn=""),hn==="0.0.0.1"&&(hn="1"),d+=hn,d}for(_=0;_<8;_++)sn[_]===0&&(_-_e>1&&(tn=0),_e=_,tn++),tn>b&&(b=tn,en=_-b+1);for(_=0;_<8;_++){if(b>1&&sn[_]===0&&_>=en&&_<en+b){_===en&&(d+=":",en===0&&(d+=":"));continue}d+=Number(Lo(sn[_]&65535)).toString(16),d+=_<7?":":""}return d}function To(s,d){var _=lt[s>>1],b=Lo(lr[s+2>>1]),_e;switch(_){case 2:if(d!==16)return{errno:28};_e=_n[s+4>>2],_e=wo(_e);break;case 10:if(d!==28)return{errno:28};_e=[_n[s+8>>2],_n[s+12>>2],_n[s+16>>2],_n[s+20>>2]],_e=cs(_e);break;default:return{errno:5}}return{family:_,addr:_e,port:b}}function Kt(s,d,_,b){switch(d){case 2:_=jr(_),lt[s>>1]=d,_n[s+4>>2]=_,lt[s+2>>1]=Zr(b);break;case 10:_=Eo(_),_n[s>>2]=d,_n[s+8>>2]=_[0],_n[s+12>>2]=_[1],_n[s+16>>2]=_[2],_n[s+20>>2]=_[3],lt[s+2>>1]=Zr(b),_n[s+4>>2]=0,_n[s+24>>2]=0;break;default:return{errno:5}}return{}}var In={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(s,d){if(d[0]!=="/"){var _;if(s===-100)_=j.cwd();else{var b=j.getStream(s);if(!b)throw new j.ErrnoError(8);_=b.path}d=Qn.join2(_,d)}return d},doStat:function(s,d,_){try{var b=s(d)}catch(_e){if(_e&&_e.node&&Qn.normalize(d)!==Qn.normalize(j.getPath(_e.node)))return-54;throw _e}return _n[_>>2]=b.dev,_n[_+4>>2]=0,_n[_+8>>2]=b.ino,_n[_+12>>2]=b.mode,_n[_+16>>2]=b.nlink,_n[_+20>>2]=b.uid,_n[_+24>>2]=b.gid,_n[_+28>>2]=b.rdev,_n[_+32>>2]=0,mt=[b.size>>>0,(Zn=b.size,+pr(Zn)>=1?Zn>0?(_r(+hr(Zn/4294967296),4294967295)|0)>>>0:~~+mr((Zn-+(~~Zn>>>0))/4294967296)>>>0:0)],_n[_+40>>2]=mt[0],_n[_+44>>2]=mt[1],_n[_+48>>2]=4096,_n[_+52>>2]=b.blocks,_n[_+56>>2]=b.atime.getTime()/1e3|0,_n[_+60>>2]=0,_n[_+64>>2]=b.mtime.getTime()/1e3|0,_n[_+68>>2]=0,_n[_+72>>2]=b.ctime.getTime()/1e3|0,_n[_+76>>2]=0,mt=[b.ino>>>0,(Zn=b.ino,+pr(Zn)>=1?Zn>0?(_r(+hr(Zn/4294967296),4294967295)|0)>>>0:~~+mr((Zn-+(~~Zn>>>0))/4294967296)>>>0:0)],_n[_+80>>2]=mt[0],_n[_+84>>2]=mt[1],0},doMsync:function(s,d,_,b,_e){var en=nt.slice(s,s+_);j.msync(d,en,_e,_,b)},doMkdir:function(s,d){return s=Qn.normalize(s),s[s.length-1]==="/"&&(s=s.substr(0,s.length-1)),j.mkdir(s,d,0),0},doMknod:function(s,d,_){switch(d&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return j.mknod(s,d,_),0},doReadlink:function(s,d,_){if(_<=0)return-28;var b=j.readlink(s),_e=Math.min(_,pt(b)),en=et[d+_e];return qn(b,d,_+1),et[d+_e]=en,_e},doAccess:function(s,d){if(d&-8)return-28;var _,b=j.lookupPath(s,{follow:!0});if(_=b.node,!_)return-44;var _e="";return d&4&&(_e+="r"),d&2&&(_e+="w"),d&1&&(_e+="x"),_e&&j.nodePermissions(_,_e)?-2:0},doDup:function(s,d,_){var b=j.getStream(_);return b&&j.close(b),j.open(s,d,0,_,_).fd},doReadv:function(s,d,_,b){for(var _e=0,en=0;en<_;en++){var tn=_n[d+en*8>>2],nn=_n[d+(en*8+4)>>2],sn=j.read(s,et,tn,nn,b);if(sn<0)return-1;if(_e+=sn,sn<nn)break}return _e},doWritev:function(s,d,_,b){for(var _e=0,en=0;en<_;en++){var tn=_n[d+en*8>>2],nn=_n[d+(en*8+4)>>2],sn=j.write(s,et,tn,nn,b);if(sn<0)return-1;_e+=sn}return _e},varargs:void 0,get:function(){on(In.varargs!=null),In.varargs+=4;var s=_n[In.varargs-4>>2];return s},getStr:function(s){var d=zn(s);return d},getStreamFromFD:function(s){var d=j.getStream(s);if(!d)throw new j.ErrnoError(8);return d},get64:function(s,d){return s>=0?on(d===0):on(d===-1),s}};function fs(s,d){try{In.varargs=d;var _=function(){var Rt=Jn.getSocket(In.get());if(!Rt)throw new j.ErrnoError(8);return Rt},b=function(Rt){var $o=In.get(),Gu=In.get();if(Rt&&$o===0)return null;var Bt=To($o,Gu);if(Bt.errno)throw new j.ErrnoError(Bt.errno);return Bt.addr=it.lookup_addr(Bt.addr)||Bt.addr,Bt};switch(s){case 1:{var _e=In.get(),en=In.get(),tn=In.get(),nn=Jn.createSocket(_e,en,tn);return on(nn.stream.fd<64),nn.stream.fd}case 2:{var nn=_(),sn=b();return nn.sock_ops.bind(nn,sn.addr,sn.port),0}case 3:{var nn=_(),sn=b();return nn.sock_ops.connect(nn,sn.addr,sn.port),0}case 4:{var nn=_(),pn=In.get();return nn.sock_ops.listen(nn,pn),0}case 5:{var nn=_(),hn=In.get(),bn=In.get(),En=nn.sock_ops.accept(nn);if(hn){var wn=Kt(hn,En.family,it.lookup_name(En.daddr),En.dport);on(!wn.errno)}return En.stream.fd}case 6:{var nn=_(),hn=In.get(),bn=In.get(),wn=Kt(hn,nn.family,it.lookup_name(nn.saddr||"0.0.0.0"),nn.sport);return on(!wn.errno),0}case 7:{var nn=_(),hn=In.get(),bn=In.get();if(!nn.daddr)return-53;var wn=Kt(hn,nn.family,it.lookup_name(nn.daddr),nn.dport);return on(!wn.errno),0}case 11:{var nn=_(),On=In.get(),Nn=In.get(),Ln=In.get(),Bn=b(!0);return Bn?nn.sock_ops.sendmsg(nn,et,On,Nn,Bn.addr,Bn.port):j.write(nn.stream,et,On,Nn)}case 12:{var nn=_(),Tn=In.get(),Dn=In.get(),Ln=In.get(),hn=In.get(),bn=In.get(),jn=nn.sock_ops.recvmsg(nn,Dn);if(!jn)return 0;if(hn){var wn=Kt(hn,nn.family,it.lookup_name(jn.addr),jn.port);on(!wn.errno)}return nt.set(jn.buffer,Tn),jn.buffer.byteLength}case 14:return-50;case 15:{var nn=_(),Hn=In.get(),$n=In.get(),tt=In.get(),ut=In.get();return Hn===1&&$n===4?(_n[tt>>2]=nn.error,_n[ut>>2]=4,nn.error=null,0):-50}case 16:{var nn=_(),On=In.get(),Ln=In.get(),ct=_n[On+8>>2],It=_n[On+12>>2],hn,xr,At=_n[On>>2],Qu=_n[On+4>>2];if(At){var sn=To(At,Qu);if(sn.errno)return-sn.errno;xr=sn.port,hn=it.lookup_addr(sn.addr)||sn.addr}for(var zt=0,at=0;at<It;at++)zt+=_n[ct+(8*at+4)>>2];for(var Xo=new Uint8Array(zt),Vu=0,at=0;at<It;at++)for(var to=_n[ct+(8*at+0)>>2],Cr=_n[ct+(8*at+4)>>2],ro=0;ro<Cr;ro++)Xo[Vu++]=et[to+ro>>0];return nn.sock_ops.sendmsg(nn,Xo,0,zt,hn,xr)}case 17:{for(var nn=_(),On=In.get(),Ln=In.get(),ct=_n[On+8>>2],It=_n[On+12>>2],zt=0,at=0;at<It;at++)zt+=_n[ct+(8*at+4)>>2];var jn=nn.sock_ops.recvmsg(nn,zt);if(!jn)return 0;var At=_n[On>>2];if(At){var wn=Kt(At,nn.family,it.lookup_name(jn.addr),jn.port);on(!wn.errno)}for(var ur=0,oo=jn.buffer.byteLength,at=0;oo>0&&at<It;at++){var to=_n[ct+(8*at+0)>>2],Cr=_n[ct+(8*at+4)>>2];if(!!Cr){var Nn=Math.min(Cr,oo),Tn=jn.buffer.subarray(ur,ur+Nn);nt.set(Tn,to+ur),ur+=Nn,oo-=Nn}}return ur}default:return-52}}catch(Rt){return(typeof j=="undefined"||!(Rt instanceof j.ErrnoError))&&an(Rt),-Rt.errno}}function ps(s){try{return s=In.getStr(s),j.chdir(s),0}catch(d){return(typeof j=="undefined"||!(d instanceof j.ErrnoError))&&an(d),-d.errno}}function ms(s,d,_,b,_e){try{on(s<=64,"nfds must be less than or equal to 64"),on(!b,"exceptfds not supported");for(var en=0,tn=d?_n[d>>2]:0,nn=d?_n[d+4>>2]:0,sn=_?_n[_>>2]:0,pn=_?_n[_+4>>2]:0,hn=b?_n[b>>2]:0,bn=b?_n[b+4>>2]:0,En=0,wn=0,On=0,Nn=0,Ln=0,Bn=0,Tn=(d?_n[d>>2]:0)|(_?_n[_>>2]:0)|(b?_n[b>>2]:0),Dn=(d?_n[d+4>>2]:0)|(_?_n[_+4>>2]:0)|(b?_n[b+4>>2]:0),jn=function(ct,It,xr,At){return ct<32?It&At:xr&At},Hn=0;Hn<s;Hn++){var $n=1<<Hn%32;if(!!jn(Hn,Tn,Dn,$n)){var tt=j.getStream(Hn);if(!tt)throw new j.ErrnoError(8);var ut=In.DEFAULT_POLLMASK;tt.stream_ops.poll&&(ut=tt.stream_ops.poll(tt)),ut&1&&jn(Hn,tn,nn,$n)&&(Hn<32?En=En|$n:wn=wn|$n,en++),ut&4&&jn(Hn,sn,pn,$n)&&(Hn<32?On=On|$n:Nn=Nn|$n,en++),ut&2&&jn(Hn,hn,bn,$n)&&(Hn<32?Ln=Ln|$n:Bn=Bn|$n,en++)}}return d&&(_n[d>>2]=En,_n[d+4>>2]=wn),_&&(_n[_>>2]=On,_n[_+4>>2]=Nn),b&&(_n[b>>2]=Ln,_n[b+4>>2]=Bn),en}catch(ct){return(typeof j=="undefined"||!(ct instanceof j.ErrnoError))&&an(ct),-ct.errno}}function hs(s,d){try{if(d===0)return-28;var _=j.cwd(),b=pt(_);return d<b+1?-68:(qn(_,s,d),s)}catch(_e){return(typeof j=="undefined"||!(_e instanceof j.ErrnoError))&&an(_e),-_e.errno}}function _s(s,d){try{return s=In.getStr(s),In.doStat(j.stat,s,d)}catch(_){return(typeof j=="undefined"||!(_ instanceof j.ErrnoError))&&an(_),-_.errno}}function gs(s,d){try{var _=In.getStreamFromFD(s);return In.doStat(j.stat,_.path,d)}catch(b){return(typeof j=="undefined"||!(b instanceof j.ErrnoError))&&an(b),-b.errno}}function ys(s,d,_){In.varargs=_;try{var b=In.getStreamFromFD(s);switch(d){case 0:{var _e=In.get();if(_e<0)return-28;var en;return en=j.open(b.path,b.flags,0,_e),en.fd}case 1:case 2:return 0;case 3:return b.flags;case 4:{var _e=In.get();return b.flags|=_e,0}case 12:{var _e=In.get(),tn=0;return lt[_e+tn>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return qt(28),-1;default:return-28}}catch(nn){return(typeof j=="undefined"||!(nn instanceof j.ErrnoError))&&an(nn),-nn.errno}}function vs(s,d,_){try{var b=In.getStreamFromFD(s);return j.read(b,et,d,_)}catch(_e){return(typeof j=="undefined"||!(_e instanceof j.ErrnoError))&&an(_e),-_e.errno}}function Es(s,d){try{return s=In.getStr(s),In.doMkdir(s,d)}catch(_){return(typeof j=="undefined"||!(_ instanceof j.ErrnoError))&&an(_),-_.errno}}function ws(s,d,_){In.varargs=_;try{var b=In.getStr(s),_e=In.get(),en=j.open(b,d,_e);return en.fd}catch(tn){return(typeof j=="undefined"||!(tn instanceof j.ErrnoError))&&an(tn),-tn.errno}}function Ts(s,d,_){In.varargs=_;try{var b=In.getStreamFromFD(s);switch(d){case 21509:case 21505:return b.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return b.tty?0:-59;case 21519:{if(!b.tty)return-59;var _e=In.get();return _n[_e>>2]=0,0}case 21520:return b.tty?-28:-59;case 21531:{var _e=In.get();return j.ioctl(b,d,_e)}case 21523:return b.tty?0:-59;case 21524:return b.tty?0:-59;default:an("bad ioctl syscall "+d)}}catch(en){return(typeof j=="undefined"||!(en instanceof j.ErrnoError))&&an(en),-en.errno}}function Ss(s,d,_){try{return s=In.getStr(s),In.doReadlink(s,d,_)}catch(b){return(typeof j=="undefined"||!(b instanceof j.ErrnoError))&&an(b),-b.errno}}function bs(s,d){if(s===-1||d===0)return-28;var _=In.mappings[s];if(!_)return 0;if(d===_.len){var b=j.getStream(_.fd);In.doMsync(s,b,d,_.flags,_.offset),j.munmap(b),In.mappings[s]=null,_.allocated&&St(_.malloc)}return 0}function Os(s,d){try{return bs(s,d)}catch(_){return(typeof j=="undefined"||!(_ instanceof j.ErrnoError))&&an(_),-_.errno}}function Hr(s){switch(s){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+s)}}function Ms(){for(var s=new Array(256),d=0;d<256;++d)s[d]=String.fromCharCode(d);So=s}var So=void 0;function st(s){for(var d="",_=s;nt[_];)d+=So[nt[_++]];return d}var Lt={},Ct={},Er={},Ps=48,As=57;function Lr(s){if(s===void 0)return"_unknown";s=s.replace(/[^a-zA-Z0-9_]/g,"$");var d=s.charCodeAt(0);return d>=Ps&&d<=As?"_"+s:s}function Xr(s,d){return s=Lr(s),new Function("body","return function "+s+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(d)}function $r(s,d){var _=Xr(d,function(b){this.name=d,this.message=b;var _e=new Error(b).stack;_e!==void 0&&(this.stack=this.toString()+`
`+_e.replace(/^Error(:[^\n]*)?\n/,""))});return _.prototype=Object.create(s.prototype),_.prototype.constructor=_,_.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},_}var Xt=void 0;function Vn(s){throw new Xt(s)}var bo=void 0;function wr(s){throw new bo(s)}function Ot(s,d,_){s.forEach(function(nn){Er[nn]=d});function b(nn){var sn=_(nn);sn.length!==s.length&&wr("Mismatched type converter count");for(var pn=0;pn<s.length;++pn)wt(s[pn],sn[pn])}var _e=new Array(d.length),en=[],tn=0;d.forEach(function(nn,sn){Ct.hasOwnProperty(nn)?_e[sn]=Ct[nn]:(en.push(nn),Lt.hasOwnProperty(nn)||(Lt[nn]=[]),Lt[nn].push(function(){_e[sn]=Ct[nn],++tn,tn===en.length&&b(_e)}))}),en.length===0&&b(_e)}function wt(s,d,_){if(_=_||{},!("argPackAdvance"in d))throw new TypeError("registerType registeredInstance requires argPackAdvance");var b=d.name;if(s||Vn('type "'+b+'" must have a positive integer typeid pointer'),Ct.hasOwnProperty(s)){if(_.ignoreDuplicateRegistrations)return;Vn("Cannot register type '"+b+"' twice")}if(Ct[s]=d,delete Er[s],Lt.hasOwnProperty(s)){var _e=Lt[s];delete Lt[s],_e.forEach(function(en){en()})}}function Rs(s,d,_,b,_e){var en=Hr(_);d=st(d),wt(s,{name:d,fromWireType:function(tn){return!!tn},toWireType:function(tn,nn){return nn?b:_e},argPackAdvance:8,readValueFromPointer:function(tn){var nn;if(_===1)nn=et;else if(_===2)nn=lt;else if(_===4)nn=_n;else throw new TypeError("Unknown boolean type size: "+d);return this.fromWireType(nn[tn>>en])},destructorFunction:null})}function Ds(s){if(!(this instanceof Mt)||!(s instanceof Mt))return!1;for(var d=this.$$.ptrType.registeredClass,_=this.$$.ptr,b=s.$$.ptrType.registeredClass,_e=s.$$.ptr;d.baseClass;)_=d.upcast(_),d=d.baseClass;for(;b.baseClass;)_e=b.upcast(_e),b=b.baseClass;return d===b&&_===_e}function ks(s){return{count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}}function zr(s){function d(_){return _.$$.ptrType.registeredClass.name}Vn(d(s)+" instance already deleted")}var Br=!1;function Oo(s){}function Fs(s){s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)}function Mo(s){s.count.value-=1;var d=s.count.value===0;d&&Fs(s)}function Jt(s){return typeof FinalizationGroup=="undefined"?(Jt=function(d){return d},s):(Br=new FinalizationGroup(function(d){for(var _=d.next();!_.done;_=d.next()){var b=_.value;b.ptr?Mo(b):console.warn("object already deleted: "+b.ptr)}}),Jt=function(d){return Br.register(d,d.$$,d.$$),d},Oo=function(d){Br.unregister(d.$$)},Jt(s))}function xs(){if(this.$$.ptr||zr(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var s=Jt(Object.create(Object.getPrototypeOf(this),{$$:{value:ks(this.$$)}}));return s.$$.count.value+=1,s.$$.deleteScheduled=!1,s}function Cs(){this.$$.ptr||zr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Vn("Object already scheduled for deletion"),Oo(this),Mo(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Is(){return!this.$$.ptr}var Zt=void 0,er=[];function Wr(){for(;er.length;){var s=er.pop();s.$$.deleteScheduled=!1,s.delete()}}function Ns(){return this.$$.ptr||zr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Vn("Object already scheduled for deletion"),er.push(this),er.length===1&&Zt&&Zt(Wr),this.$$.deleteScheduled=!0,this}function Us(){Mt.prototype.isAliasOf=Ds,Mt.prototype.clone=xs,Mt.prototype.delete=Cs,Mt.prototype.isDeleted=Is,Mt.prototype.deleteLater=Ns}function Mt(){}var Po={};function Qr(s,d,_){if(s[d].overloadTable===void 0){var b=s[d];s[d]=function(){return s[d].overloadTable.hasOwnProperty(arguments.length)||Vn("Function '"+_+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+s[d].overloadTable+")!"),s[d].overloadTable[arguments.length].apply(this,arguments)},s[d].overloadTable=[],s[d].overloadTable[b.argCount]=b}}function Ao(s,d,_){a.hasOwnProperty(s)?((_===void 0||a[s].overloadTable!==void 0&&a[s].overloadTable[_]!==void 0)&&Vn("Cannot register public name '"+s+"' twice"),Qr(a,s,s),a.hasOwnProperty(_)&&Vn("Cannot register multiple overloads of a function with the same number of arguments ("+_+")!"),a[s].overloadTable[_]=d):(a[s]=d,_!==void 0&&(a[s].numArguments=_))}function js(s,d,_,b,_e,en,tn,nn){this.name=s,this.constructor=d,this.instancePrototype=_,this.rawDestructor=b,this.baseClass=_e,this.getActualType=en,this.upcast=tn,this.downcast=nn,this.pureVirtualFunctions=[]}function Vr(s,d,_){for(;d!==_;)d.upcast||Vn("Expected null or instance of "+_.name+", got an instance of "+d.name),s=d.upcast(s),d=d.baseClass;return s}function Hs(s,d){if(d===null)return this.isReference&&Vn("null is not a valid "+this.name),0;d.$$||Vn('Cannot pass "'+$t(d)+'" as a '+this.name),d.$$.ptr||Vn("Cannot pass deleted object as a pointer of type "+this.name);var _=d.$$.ptrType.registeredClass,b=Vr(d.$$.ptr,_,this.registeredClass);return b}function Ls(s,d){var _;if(d===null)return this.isReference&&Vn("null is not a valid "+this.name),this.isSmartPointer?(_=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,_),_):0;d.$$||Vn('Cannot pass "'+$t(d)+'" as a '+this.name),d.$$.ptr||Vn("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&d.$$.ptrType.isConst&&Vn("Cannot convert argument of type "+(d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name)+" to parameter type "+this.name);var b=d.$$.ptrType.registeredClass;if(_=Vr(d.$$.ptr,b,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&Vn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?_=d.$$.smartPtr:Vn("Cannot convert argument of type "+(d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:_=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)_=d.$$.smartPtr;else{var _e=d.clone();_=this.rawShare(_,qr(function(){_e.delete()})),s!==null&&s.push(this.rawDestructor,_)}break;default:Vn("Unsupporting sharing policy")}return _}function Xs(s,d){if(d===null)return this.isReference&&Vn("null is not a valid "+this.name),0;d.$$||Vn('Cannot pass "'+$t(d)+'" as a '+this.name),d.$$.ptr||Vn("Cannot pass deleted object as a pointer of type "+this.name),d.$$.ptrType.isConst&&Vn("Cannot convert argument of type "+d.$$.ptrType.name+" to parameter type "+this.name);var _=d.$$.ptrType.registeredClass,b=Vr(d.$$.ptr,_,this.registeredClass);return b}function Tr(s){return this.fromWireType(dt[s>>2])}function $s(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s}function zs(s){this.rawDestructor&&this.rawDestructor(s)}function Bs(s){s!==null&&s.delete()}function Ro(s,d,_){if(d===_)return s;if(_.baseClass===void 0)return null;var b=Ro(s,d,_.baseClass);return b===null?null:_.downcast(b)}function Ws(){return Object.keys(nr).length}function Qs(){var s=[];for(var d in nr)nr.hasOwnProperty(d)&&s.push(nr[d]);return s}function Vs(s){Zt=s,er.length&&Zt&&Zt(Wr)}function Gs(){a.getInheritedInstanceCount=Ws,a.getLiveInheritedInstances=Qs,a.flushPendingDeletes=Wr,a.setDelayFunction=Vs}var nr={};function Ys(s,d){for(d===void 0&&Vn("ptr should not be undefined");s.baseClass;)d=s.upcast(d),s=s.baseClass;return d}function qs(s,d){return d=Ys(s,d),nr[d]}function Sr(s,d){(!d.ptrType||!d.ptr)&&wr("makeClassHandle requires ptr and ptrType");var _=!!d.smartPtrType,b=!!d.smartPtr;return _!==b&&wr("Both smartPtrType and smartPtr must be specified"),d.count={value:1},Jt(Object.create(s,{$$:{value:d}}))}function Ks(s){var d=this.getPointee(s);if(!d)return this.destructor(s),null;var _=qs(this.registeredClass,d);if(_!==void 0){if(_.$$.count.value===0)return _.$$.ptr=d,_.$$.smartPtr=s,_.clone();var b=_.clone();return this.destructor(s),b}function _e(){return this.isSmartPointer?Sr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:s}):Sr(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var en=this.registeredClass.getActualType(d),tn=Po[en];if(!tn)return _e.call(this);var nn;this.isConst?nn=tn.constPointerType:nn=tn.pointerType;var sn=Ro(d,this.registeredClass,nn.registeredClass);return sn===null?_e.call(this):this.isSmartPointer?Sr(nn.registeredClass.instancePrototype,{ptrType:nn,ptr:sn,smartPtrType:this,smartPtr:s}):Sr(nn.registeredClass.instancePrototype,{ptrType:nn,ptr:sn})}function Js(){Tt.prototype.getPointee=$s,Tt.prototype.destructor=zs,Tt.prototype.argPackAdvance=8,Tt.prototype.readValueFromPointer=Tr,Tt.prototype.deleteObject=Bs,Tt.prototype.fromWireType=Ks}function Tt(s,d,_,b,_e,en,tn,nn,sn,pn,hn){this.name=s,this.registeredClass=d,this.isReference=_,this.isConst=b,this.isSmartPointer=_e,this.pointeeType=en,this.sharingPolicy=tn,this.rawGetPointee=nn,this.rawConstructor=sn,this.rawShare=pn,this.rawDestructor=hn,!_e&&d.baseClass===void 0?b?(this.toWireType=Hs,this.destructorFunction=null):(this.toWireType=Xs,this.destructorFunction=null):this.toWireType=Ls}function Do(s,d,_){a.hasOwnProperty(s)||wr("Replacing nonexistant public symbol"),a[s].overloadTable!==void 0&&_!==void 0?a[s].overloadTable[_]=d:(a[s]=d,a[s].argCount=_)}function Pt(s,d){s=st(s);function _(en){for(var tn=[],nn=1;nn<s.length;++nn)tn.push("a"+nn);var sn="dynCall_"+s+"_"+d,pn="return function "+sn+"("+tn.join(", ")+`) {
`;return pn+="    return dynCall(rawFunction"+(tn.length?", ":"")+tn.join(", ")+`);
`,pn+=`};
`,new Function("dynCall","rawFunction",pn)(en,d)}var b=a["dynCall_"+s],_e=_(b);return typeof _e!="function"&&Vn("unknown function pointer with signature "+s+": "+d),_e}var ko=void 0;function Fo(s){var d=Bu(s),_=st(d);return St(d),_}function tr(s,d){var _=[],b={};function _e(en){if(!b[en]&&!Ct[en]){if(Er[en]){Er[en].forEach(_e);return}_.push(en),b[en]=!0}}throw d.forEach(_e),new ko(s+": "+_.map(Fo).join([", "]))}function Zs(s,d,_,b,_e,en,tn,nn,sn,pn,hn,bn,En){hn=st(hn),en=Pt(_e,en),nn&&(nn=Pt(tn,nn)),pn&&(pn=Pt(sn,pn)),En=Pt(bn,En);var wn=Lr(hn);Ao(wn,function(){tr("Cannot construct "+hn+" due to unbound types",[b])}),Ot([s,d,_],b?[b]:[],function(On){On=On[0];var Nn,Ln;b?(Nn=On.registeredClass,Ln=Nn.instancePrototype):Ln=Mt.prototype;var Bn=Xr(wn,function(){if(Object.getPrototypeOf(this)!==Tn)throw new Xt("Use 'new' to construct "+hn);if(Dn.constructor_body===void 0)throw new Xt(hn+" has no accessible constructor");var tt=Dn.constructor_body[arguments.length];if(tt===void 0)throw new Xt("Tried to invoke ctor of "+hn+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Dn.constructor_body).toString()+") parameters instead!");return tt.apply(this,arguments)}),Tn=Object.create(Ln,{constructor:{value:Bn}});Bn.prototype=Tn;var Dn=new js(hn,Bn,Tn,En,Nn,en,nn,pn),jn=new Tt(hn,Dn,!0,!1,!1),Hn=new Tt(hn+"*",Dn,!1,!1,!1),$n=new Tt(hn+" const*",Dn,!1,!0,!1);return Po[s]={pointerType:Hn,constPointerType:$n},Do(wn,Bn),[jn,Hn,$n]})}function eu(s,d){if(!(s instanceof Function))throw new TypeError("new_ called with constructor type "+typeof s+" which is not a function");var _=Xr(s.name||"unknownFunctionName",function(){});_.prototype=s.prototype;var b=new _,_e=s.apply(b,d);return _e instanceof Object?_e:b}function xo(s){for(;s.length;){var d=s.pop(),_=s.pop();_(d)}}function Gr(s,d,_,b,_e){var en=d.length;en<2&&Vn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var tn=d[1]!==null&&_!==null,nn=!1,sn=1;sn<d.length;++sn)if(d[sn]!==null&&d[sn].destructorFunction===void 0){nn=!0;break}for(var pn=d[0].name!=="void",hn="",bn="",sn=0;sn<en-2;++sn)hn+=(sn!==0?", ":"")+"arg"+sn,bn+=(sn!==0?", ":"")+"arg"+sn+"Wired";var En="return function "+Lr(s)+"("+hn+`) {
if (arguments.length !== `+(en-2)+`) {
throwBindingError('function `+s+" called with ' + arguments.length + ' arguments, expected "+(en-2)+` args!');
}
`;nn&&(En+=`var destructors = [];
`);var wn=nn?"destructors":"null",On=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Nn=[Vn,b,_e,xo,d[0],d[1]];tn&&(En+="var thisWired = classParam.toWireType("+wn+`, this);
`);for(var sn=0;sn<en-2;++sn)En+="var arg"+sn+"Wired = argType"+sn+".toWireType("+wn+", arg"+sn+"); // "+d[sn+2].name+`
`,On.push("argType"+sn),Nn.push(d[sn+2]);if(tn&&(bn="thisWired"+(bn.length>0?", ":"")+bn),En+=(pn?"var rv = ":"")+"invoker(fn"+(bn.length>0?", ":"")+bn+`);
`,nn)En+=`runDestructors(destructors);
`;else for(var sn=tn?1:2;sn<d.length;++sn){var Ln=sn===1?"thisWired":"arg"+(sn-2)+"Wired";d[sn].destructorFunction!==null&&(En+=Ln+"_dtor("+Ln+"); // "+d[sn].name+`
`,On.push(Ln+"_dtor"),Nn.push(d[sn].destructorFunction))}pn&&(En+=`var ret = retType.fromWireType(rv);
return ret;
`),En+=`}
`,On.push(En);var Bn=eu(Function,On).apply(null,Nn);return Bn}function br(s,d){for(var _=[],b=0;b<s;b++)_.push(_n[(d>>2)+b]);return _}function nu(s,d,_,b,_e,en,tn){var nn=br(_,b);d=st(d),en=Pt(_e,en),Ot([],[s],function(sn){sn=sn[0];var pn=sn.name+"."+d;function hn(){tr("Cannot call "+pn+" due to unbound types",nn)}var bn=sn.registeredClass.constructor;return bn[d]===void 0?(hn.argCount=_-1,bn[d]=hn):(Qr(bn,d,pn),bn[d].overloadTable[_-1]=hn),Ot([],nn,function(En){var wn=[En[0],null].concat(En.slice(1)),On=Gr(pn,wn,null,en,tn);return bn[d].overloadTable===void 0?(On.argCount=_-1,bn[d]=On):bn[d].overloadTable[_-1]=On,[]}),[]})}function tu(s,d,_,b,_e,en){on(d>0);var tn=br(d,_);_e=Pt(b,_e);var nn=[en],sn=[];Ot([],[s],function(pn){pn=pn[0];var hn="constructor "+pn.name;if(pn.registeredClass.constructor_body===void 0&&(pn.registeredClass.constructor_body=[]),pn.registeredClass.constructor_body[d-1]!==void 0)throw new Xt("Cannot register multiple constructors with identical number of parameters ("+(d-1)+") for class '"+pn.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return pn.registeredClass.constructor_body[d-1]=function(){tr("Cannot construct "+pn.name+" due to unbound types",tn)},Ot([],tn,function(bn){return pn.registeredClass.constructor_body[d-1]=function(){arguments.length!==d-1&&Vn(hn+" called with "+arguments.length+" arguments, expected "+(d-1)),sn.length=0,nn.length=d;for(var wn=1;wn<d;++wn)nn[wn]=bn[wn].toWireType(sn,arguments[wn-1]);var On=_e.apply(null,nn);return xo(sn),bn[0].fromWireType(On)},[]}),[]})}function ru(s,d,_,b,_e,en,tn,nn){var sn=br(_,b);d=st(d),en=Pt(_e,en),Ot([],[s],function(pn){pn=pn[0];var hn=pn.name+"."+d;nn&&pn.registeredClass.pureVirtualFunctions.push(d);function bn(){tr("Cannot call "+hn+" due to unbound types",sn)}var En=pn.registeredClass.instancePrototype,wn=En[d];return wn===void 0||wn.overloadTable===void 0&&wn.className!==pn.name&&wn.argCount===_-2?(bn.argCount=_-2,bn.className=pn.name,En[d]=bn):(Qr(En,d,hn),En[d].overloadTable[_-2]=bn),Ot([],sn,function(On){var Nn=Gr(hn,On,pn,en,tn);return En[d].overloadTable===void 0?(Nn.argCount=_-2,En[d]=Nn):En[d].overloadTable[_-2]=Nn,[]}),[]})}var Yr=[],ht=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Co(s){s>4&&--ht[s].refcount===0&&(ht[s]=void 0,Yr.push(s))}function ou(){for(var s=0,d=5;d<ht.length;++d)ht[d]!==void 0&&++s;return s}function au(){for(var s=5;s<ht.length;++s)if(ht[s]!==void 0)return ht[s];return null}function iu(){a.count_emval_handles=ou,a.get_first_emval=au}function qr(s){switch(s){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var d=Yr.length?Yr.pop():ht.length;return ht[d]={refcount:1,value:s},d}}}function su(s,d){d=st(d),wt(s,{name:d,fromWireType:function(_){var b=ht[_].value;return Co(_),b},toWireType:function(_,b){return qr(b)},argPackAdvance:8,readValueFromPointer:Tr,destructorFunction:null})}function $t(s){if(s===null)return"null";var d=typeof s;return d==="object"||d==="array"||d==="function"?s.toString():""+s}function uu(s,d){switch(d){case 2:return function(_){return this.fromWireType(Ir[_>>2])};case 3:return function(_){return this.fromWireType(dr[_>>3])};default:throw new TypeError("Unknown float type: "+s)}}function lu(s,d,_){var b=Hr(_);d=st(d),wt(s,{name:d,fromWireType:function(_e){return _e},toWireType:function(_e,en){if(typeof en!="number"&&typeof en!="boolean")throw new TypeError('Cannot convert "'+$t(en)+'" to '+this.name);return en},argPackAdvance:8,readValueFromPointer:uu(d,b),destructorFunction:null})}function du(s,d,_,b,_e,en){var tn=br(d,_);s=st(s),_e=Pt(b,_e),Ao(s,function(){tr("Cannot call "+s+" due to unbound types",tn)},d-1),Ot([],tn,function(nn){var sn=[nn[0],null].concat(nn.slice(1));return Do(s,Gr(s,sn,null,_e,en),d-1),[]})}function cu(s,d,_){switch(d){case 0:return _?function(_e){return et[_e]}:function(_e){return nt[_e]};case 1:return _?function(_e){return lt[_e>>1]}:function(_e){return lr[_e>>1]};case 2:return _?function(_e){return _n[_e>>2]}:function(_e){return dt[_e>>2]};default:throw new TypeError("Unknown integer type: "+s)}}function fu(s,d,_,b,_e){d=st(d),_e===-1&&(_e=4294967295);var en=Hr(_),tn=function(pn){return pn};if(b===0){var nn=32-8*_;tn=function(pn){return pn<<nn>>>nn}}var sn=d.indexOf("unsigned")!=-1;wt(s,{name:d,fromWireType:tn,toWireType:function(pn,hn){if(typeof hn!="number"&&typeof hn!="boolean")throw new TypeError('Cannot convert "'+$t(hn)+'" to '+this.name);if(hn<b||hn>_e)throw new TypeError('Passing a number "'+$t(hn)+'" from JS side to C/C++ side to an argument of type "'+d+'", which is outside the valid range ['+b+", "+_e+"]!");return sn?hn>>>0:hn|0},argPackAdvance:8,readValueFromPointer:cu(d,en,b!==0),destructorFunction:null})}function pu(s,d,_){var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],_e=b[d];function en(tn){tn=tn>>2;var nn=dt,sn=nn[tn],pn=nn[tn+1];return new _e(Dt,pn,sn)}_=st(_),wt(s,{name:_,fromWireType:en,argPackAdvance:8,readValueFromPointer:en},{ignoreDuplicateRegistrations:!0})}function mu(s,d){d=st(d);var _=d==="std::string";wt(s,{name:d,fromWireType:function(b){var _e=dt[b>>2],en;if(_){var tn=nt[b+4+_e],nn=0;tn!=0&&(nn=tn,nt[b+4+_e]=0);for(var sn=b+4,pn=0;pn<=_e;++pn){var hn=b+4+pn;if(nt[hn]==0){var bn=zn(sn);en===void 0?en=bn:(en+=String.fromCharCode(0),en+=bn),sn=hn+1}}nn!=0&&(nt[b+4+_e]=nn)}else{for(var En=new Array(_e),pn=0;pn<_e;++pn)En[pn]=String.fromCharCode(nt[b+4+pn]);en=En.join("")}return St(b),en},toWireType:function(b,_e){_e instanceof ArrayBuffer&&(_e=new Uint8Array(_e));var en,tn=typeof _e=="string";tn||_e instanceof Uint8Array||_e instanceof Uint8ClampedArray||_e instanceof Int8Array||Vn("Cannot pass non-string to std::string"),_&&tn?en=function(){return pt(_e)}:en=function(){return _e.length};var nn=en(),sn=_t(4+nn+1);if(dt[sn>>2]=nn,_&&tn)qn(_e,sn+4,nn+1);else if(tn)for(var pn=0;pn<nn;++pn){var hn=_e.charCodeAt(pn);hn>255&&(St(sn),Vn("String has UTF-16 code units that do not fit in 8 bits")),nt[sn+4+pn]=hn}else for(var pn=0;pn<nn;++pn)nt[sn+4+pn]=_e[pn];return b!==null&&b.push(St,sn),sn},argPackAdvance:8,readValueFromPointer:Tr,destructorFunction:function(b){St(b)}})}function hu(s,d,_){_=st(_);var b,_e,en,tn,nn;d===2?(b=Qt,_e=Et,tn=Ut,en=function(){return lr},nn=1):d===4&&(b=zo,_e=Bo,tn=Wo,en=function(){return dt},nn=2),wt(s,{name:_,fromWireType:function(sn){var pn=dt[sn>>2],hn=en(),bn,En=hn[sn+4+pn*d>>nn],wn=0;En!=0&&(wn=En,hn[sn+4+pn*d>>nn]=0);for(var On=sn+4,Nn=0;Nn<=pn;++Nn){var Ln=sn+4+Nn*d;if(hn[Ln>>nn]==0){var Bn=b(On);bn===void 0?bn=Bn:(bn+=String.fromCharCode(0),bn+=Bn),On=Ln+d}}return wn!=0&&(hn[sn+4+pn*d>>nn]=wn),St(sn),bn},toWireType:function(sn,pn){typeof pn!="string"&&Vn("Cannot pass non-string to C++ string type "+_);var hn=tn(pn),bn=_t(4+hn+d);return dt[bn>>2]=hn>>nn,_e(pn,bn+4,hn+d),sn!==null&&sn.push(St,bn),bn},argPackAdvance:8,readValueFromPointer:Tr,destructorFunction:function(sn){St(sn)}})}function _u(s,d){d=st(d),wt(s,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:function(){},toWireType:function(_,b){}})}function gu(s){s>4&&(ht[s].refcount+=1)}function yu(s,d){var _=Ct[s];return _===void 0&&Vn(d+" has unknown type "+Fo(s)),_}function vu(s,d){s=yu(s,"_emval_take_value");var _=s.readValueFromPointer(d);return qr(_)}function Eu(){an()}function wu(s,d,_){nt.copyWithin(s,d,d+_)}function Tu(){return nt.length}function Su(s){try{return Rn.grow(s-Dt.byteLength+65535>>16),uo(Rn.buffer),1}catch(d){console.error("emscripten_realloc_buffer: Attempted to grow heap from "+Dt.byteLength+" bytes to "+s+" bytes, but got error: "+d)}}function bu(s){var d=Tu();on(s>d);var _=65536,b=2147483648-_;if(s>b)return un("Cannot enlarge memory, asked to go up to "+s+" bytes, but the limit is "+b+" bytes!"),!1;for(var _e=16777216,en=1;en<=4;en*=2){var tn=d*(1+.2/en);tn=Math.min(tn,s+100663296);var nn=Math.min(b,Vo(Math.max(_e,s,tn),_)),sn=Su(nn);if(sn)return!0}return un("Failed to grow the heap from "+d+" bytes to "+nn+" bytes, not enough memory!"),!1}var Io={};function Ou(){return h||"./this.program"}function rr(){if(!rr.strings){var s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ou()};for(var d in Io)s[d]=Io[d];var _=[];for(var d in s)_.push(d+"="+s[d]);rr.strings=_}return rr.strings}function Mu(s,d){var _=rr(),b=0;return _.forEach(function(_e,en){var tn=d+b;_n[s+en*4>>2]=tn,Qo(_e,tn),b+=_e.length+1}),0}function Pu(s,d){var _=rr();_n[s>>2]=_.length;var b=0;return _.forEach(function(_e){b+=_e.length+1}),_n[d>>2]=b,0}function Au(s){try{var d=In.getStreamFromFD(s);return j.close(d),0}catch(_){return(typeof j=="undefined"||!(_ instanceof j.ErrnoError))&&an(_),_.errno}}function Ru(s,d){try{var _=In.getStreamFromFD(s),b=_.tty?2:j.isDir(_.mode)?3:j.isLink(_.mode)?7:4;return et[d>>0]=b,0}catch(_e){return(typeof j=="undefined"||!(_e instanceof j.ErrnoError))&&an(_e),_e.errno}}function Du(s,d,_,b){try{var _e=In.getStreamFromFD(s),en=In.doReadv(_e,d,_);return _n[b>>2]=en,0}catch(tn){return(typeof j=="undefined"||!(tn instanceof j.ErrnoError))&&an(tn),tn.errno}}function ku(s,d,_,b,_e){try{var en=In.getStreamFromFD(s),tn=4294967296,nn=_*tn+(d>>>0),sn=9007199254740992;return nn<=-sn||nn>=sn?-61:(j.llseek(en,nn,b),mt=[en.position>>>0,(Zn=en.position,+pr(Zn)>=1?Zn>0?(_r(+hr(Zn/4294967296),4294967295)|0)>>>0:~~+mr((Zn-+(~~Zn>>>0))/4294967296)>>>0:0)],_n[_e>>2]=mt[0],_n[_e+4>>2]=mt[1],en.getdents&&nn===0&&b===0&&(en.getdents=null),0)}catch(pn){return(typeof j=="undefined"||!(pn instanceof j.ErrnoError))&&an(pn),pn.errno}}function Fu(s,d,_,b){try{var _e=In.getStreamFromFD(s),en=In.doWritev(_e,d,_);return _n[b>>2]=en,0}catch(tn){return(typeof j=="undefined"||!(tn instanceof j.ErrnoError))&&an(tn),tn.errno}}function xu(s){s=zn(s);var d=_t(20),_=_t(s.length+1);qn(s,_,s.length+1),_n[d>>2]=_;var b=_t(4);_n[b>>2]=0,_n[d+4>>2]=b;var _e=2;_n[d+8>>2]=_e,_n[d+12>>2]=4;var en=_t(12);return _n[en>>2]=en+8,_n[en+4>>2]=0,_n[en+8>>2]=jr(it.lookup_name(s)),_n[d+16>>2]=en,d}function Cu(s){var d=Date.now();return _n[s>>2]=d/1e3|0,_n[s+4>>2]=d%1e3*1e3|0,0}var Iu=2400384;qn("GMT",2400432,4);function Kr(){if(Kr.called)return;Kr.called=!0,_n[zu()>>2]=new Date().getTimezoneOffset()*60;var s=new Date().getFullYear(),d=new Date(s,0,1),_=new Date(s,6,1);_n[$u()>>2]=Number(d.getTimezoneOffset()!=_.getTimezoneOffset());function b(sn){var pn=sn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return pn?pn[1]:"GMT"}var _e=b(d),en=b(_),tn=ao(_e),nn=ao(en);_.getTimezoneOffset()<d.getTimezoneOffset()?(_n[ar()>>2]=tn,_n[ar()+4>>2]=nn):(_n[ar()>>2]=nn,_n[ar()+4>>2]=tn)}function Nu(s,d){Kr();var _=new Date(_n[s>>2]*1e3);_n[d>>2]=_.getSeconds(),_n[d+4>>2]=_.getMinutes(),_n[d+8>>2]=_.getHours(),_n[d+12>>2]=_.getDate(),_n[d+16>>2]=_.getMonth(),_n[d+20>>2]=_.getFullYear()-1900,_n[d+24>>2]=_.getDay();var b=new Date(_.getFullYear(),0,1),_e=(_.getTime()-b.getTime())/(1e3*60*60*24)|0;_n[d+28>>2]=_e,_n[d+36>>2]=-(_.getTimezoneOffset()*60);var en=new Date(_.getFullYear(),6,1).getTimezoneOffset(),tn=b.getTimezoneOffset(),nn=(en!=tn&&_.getTimezoneOffset()==Math.min(tn,en))|0;_n[d+32>>2]=nn;var sn=_n[ar()+(nn?4:0)>>2];return _n[d+40>>2]=sn,d}function Uu(s){return Nu(s,Iu)}function ju(s){}function Or(s){return s%4===0&&(s%100!==0||s%400===0)}function Jr(s,d){for(var _=0,b=0;b<=d;_+=s[b++]);return _}var Mr=[31,29,31,30,31,30,31,31,30,31,30,31],Pr=[31,28,31,30,31,30,31,31,30,31,30,31];function Ar(s,d){for(var _=new Date(s.getTime());d>0;){var b=Or(_.getFullYear()),_e=_.getMonth(),en=(b?Mr:Pr)[_e];if(d>en-_.getDate())d-=en-_.getDate()+1,_.setDate(1),_e<11?_.setMonth(_e+1):(_.setMonth(0),_.setFullYear(_.getFullYear()+1));else return _.setDate(_.getDate()+d),_}return _}function No(s,d,_,b){var _e=_n[b+40>>2],en={tm_sec:_n[b>>2],tm_min:_n[b+4>>2],tm_hour:_n[b+8>>2],tm_mday:_n[b+12>>2],tm_mon:_n[b+16>>2],tm_year:_n[b+20>>2],tm_wday:_n[b+24>>2],tm_yday:_n[b+28>>2],tm_isdst:_n[b+32>>2],tm_gmtoff:_n[b+36>>2],tm_zone:_e?zn(_e):""},tn=zn(_),nn={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var sn in nn)tn=tn.replace(new RegExp(sn,"g"),nn[sn]);var pn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hn=["January","February","March","April","May","June","July","August","September","October","November","December"];function bn(Tn,Dn,jn){for(var Hn=typeof Tn=="number"?Tn.toString():Tn||"";Hn.length<Dn;)Hn=jn[0]+Hn;return Hn}function En(Tn,Dn){return bn(Tn,Dn,"0")}function wn(Tn,Dn){function jn($n){return $n<0?-1:$n>0?1:0}var Hn;return(Hn=jn(Tn.getFullYear()-Dn.getFullYear()))===0&&(Hn=jn(Tn.getMonth()-Dn.getMonth()))===0&&(Hn=jn(Tn.getDate()-Dn.getDate())),Hn}function On(Tn){switch(Tn.getDay()){case 0:return new Date(Tn.getFullYear()-1,11,29);case 1:return Tn;case 2:return new Date(Tn.getFullYear(),0,3);case 3:return new Date(Tn.getFullYear(),0,2);case 4:return new Date(Tn.getFullYear(),0,1);case 5:return new Date(Tn.getFullYear()-1,11,31);case 6:return new Date(Tn.getFullYear()-1,11,30)}}function Nn(Tn){var Dn=Ar(new Date(Tn.tm_year+1900,0,1),Tn.tm_yday),jn=new Date(Dn.getFullYear(),0,4),Hn=new Date(Dn.getFullYear()+1,0,4),$n=On(jn),tt=On(Hn);return wn($n,Dn)<=0?wn(tt,Dn)<=0?Dn.getFullYear()+1:Dn.getFullYear():Dn.getFullYear()-1}var Ln={"%a":function(Tn){return pn[Tn.tm_wday].substring(0,3)},"%A":function(Tn){return pn[Tn.tm_wday]},"%b":function(Tn){return hn[Tn.tm_mon].substring(0,3)},"%B":function(Tn){return hn[Tn.tm_mon]},"%C":function(Tn){var Dn=Tn.tm_year+1900;return En(Dn/100|0,2)},"%d":function(Tn){return En(Tn.tm_mday,2)},"%e":function(Tn){return bn(Tn.tm_mday,2," ")},"%g":function(Tn){return Nn(Tn).toString().substring(2)},"%G":function(Tn){return Nn(Tn)},"%H":function(Tn){return En(Tn.tm_hour,2)},"%I":function(Tn){var Dn=Tn.tm_hour;return Dn==0?Dn=12:Dn>12&&(Dn-=12),En(Dn,2)},"%j":function(Tn){return En(Tn.tm_mday+Jr(Or(Tn.tm_year+1900)?Mr:Pr,Tn.tm_mon-1),3)},"%m":function(Tn){return En(Tn.tm_mon+1,2)},"%M":function(Tn){return En(Tn.tm_min,2)},"%n":function(){return`
`},"%p":function(Tn){return Tn.tm_hour>=0&&Tn.tm_hour<12?"AM":"PM"},"%S":function(Tn){return En(Tn.tm_sec,2)},"%t":function(){return"	"},"%u":function(Tn){return Tn.tm_wday||7},"%U":function(Tn){var Dn=new Date(Tn.tm_year+1900,0,1),jn=Dn.getDay()===0?Dn:Ar(Dn,7-Dn.getDay()),Hn=new Date(Tn.tm_year+1900,Tn.tm_mon,Tn.tm_mday);if(wn(jn,Hn)<0){var $n=Jr(Or(Hn.getFullYear())?Mr:Pr,Hn.getMonth()-1)-31,tt=31-jn.getDate(),ut=tt+$n+Hn.getDate();return En(Math.ceil(ut/7),2)}return wn(jn,Dn)===0?"01":"00"},"%V":function(Tn){var Dn=new Date(Tn.tm_year+1900,0,4),jn=new Date(Tn.tm_year+1901,0,4),Hn=On(Dn),$n=On(jn),tt=Ar(new Date(Tn.tm_year+1900,0,1),Tn.tm_yday);if(wn(tt,Hn)<0)return"53";if(wn($n,tt)<=0)return"01";var ut;return Hn.getFullYear()<Tn.tm_year+1900?ut=Tn.tm_yday+32-Hn.getDate():ut=Tn.tm_yday+1-Hn.getDate(),En(Math.ceil(ut/7),2)},"%w":function(Tn){return Tn.tm_wday},"%W":function(Tn){var Dn=new Date(Tn.tm_year,0,1),jn=Dn.getDay()===1?Dn:Ar(Dn,Dn.getDay()===0?1:7-Dn.getDay()+1),Hn=new Date(Tn.tm_year+1900,Tn.tm_mon,Tn.tm_mday);if(wn(jn,Hn)<0){var $n=Jr(Or(Hn.getFullYear())?Mr:Pr,Hn.getMonth()-1)-31,tt=31-jn.getDate(),ut=tt+$n+Hn.getDate();return En(Math.ceil(ut/7),2)}return wn(jn,Dn)===0?"01":"00"},"%y":function(Tn){return(Tn.tm_year+1900).toString().substring(2)},"%Y":function(Tn){return Tn.tm_year+1900},"%z":function(Tn){var Dn=Tn.tm_gmtoff,jn=Dn>=0;return Dn=Math.abs(Dn)/60,Dn=Dn/60*100+Dn%60,(jn?"+":"-")+String("0000"+Dn).slice(-4)},"%Z":function(Tn){return Tn.tm_zone},"%%":function(){return"%"}};for(var sn in Ln)tn.indexOf(sn)>=0&&(tn=tn.replace(new RegExp(sn,"g"),Ln[sn](en)));var Bn=or(tn,!1);return Bn.length>d?0:(io(Bn,s),Bn.length-1)}function Hu(s,d,_,b){return No(s,d,_,b)}function Lu(s){var d=Date.now()/1e3|0;return s&&(_n[s>>2]=d),d}function Rr(s,d){Rr.array||(Rr.array=[]);var _=Rr.array;_.length=0;for(var b;b=nt[s++];)b===100||b===102?(d=d+7&-8,_.push(dr[d>>3]),d+=8):b===105?(d=d+3&-4,_.push(_n[d>>2]),d+=4):an("unexpected char in asm const signature "+b);return _}var Uo=function(s,d,_,b){s||(s=this),this.parent=s,this.mount=s.mount,this.mounted=null,this.id=j.nextInode++,this.name=d,this.mode=_,this.node_ops={},this.stream_ops={},this.rdev=b},Dr=365,kr=146;Object.defineProperties(Uo.prototype,{read:{get:function(){return(this.mode&Dr)===Dr},set:function(s){s?this.mode|=Dr:this.mode&=~Dr}},write:{get:function(){return(this.mode&kr)===kr},set:function(s){s?this.mode|=kr:this.mode&=~kr}},isFolder:{get:function(){return j.isDir(this.mode)}},isDevice:{get:function(){return j.isChrdev(this.mode)}}}),j.FSNode=Uo,j.staticInit(),a.FS_createFolder=j.createFolder,a.FS_createPath=j.createPath,a.FS_createDataFile=j.createDataFile,a.FS_createPreloadedFile=j.createPreloadedFile,a.FS_createLazyFile=j.createLazyFile,a.FS_createLink=j.createLink,a.FS_createDevice=j.createDevice,a.FS_unlink=j.unlink,Ms(),Xt=a.BindingError=$r(Error,"BindingError"),bo=a.InternalError=$r(Error,"InternalError"),Us(),Js(),Gs(),ko=a.UnboundTypeError=$r(Error,"UnboundTypeError"),iu();function or(s,d,_){var b=_>0?_:pt(s)+1,_e=new Array(b),en=Yn(s,_e,0,_e.length);return d&&(_e.length=en),_e}var jo={__cxa_allocate_exception:is,__cxa_throw:ss,__handle_stack_overflow:us,__map_file:ls,__syscall102:fs,__syscall12:ps,__syscall142:ms,__syscall183:hs,__syscall195:_s,__syscall197:gs,__syscall221:ys,__syscall3:vs,__syscall39:Es,__syscall5:ws,__syscall54:Ts,__syscall85:Ss,__syscall91:Os,_embind_register_bool:Rs,_embind_register_class:Zs,_embind_register_class_class_function:nu,_embind_register_class_constructor:tu,_embind_register_class_function:ru,_embind_register_emval:su,_embind_register_float:lu,_embind_register_function:du,_embind_register_integer:fu,_embind_register_memory_view:pu,_embind_register_std_string:mu,_embind_register_std_wstring:hu,_embind_register_void:_u,_emval_decref:Co,_emval_incref:gu,_emval_take_value:vu,abort:Eu,connectMemory:rs,emscripten_asm_const_iii:ts,emscripten_memcpy_big:wu,emscripten_resize_heap:bu,environ_get:Mu,environ_sizes_get:Pu,fd_close:Au,fd_fdstat_get:Ru,fd_read:Du,fd_seek:ku,fd_write:Fu,gethostbyname:xu,gettimeofday:Cu,localtime:Uu,memory:Rn,setTempRet0:ju,strftime:No,strftime_l:Hu,table:Sn,time:Lu},Ho=es();a.asm=Ho;var Xu=a.___wasm_call_ctors=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__wasm_call_ctors.apply(null,arguments)};a._fflush=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.fflush.apply(null,arguments)},a._expandCDSPFromString=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.expandCDSPFromString.apply(null,arguments)},a._generateCAuxFilesFromString=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.generateCAuxFilesFromString.apply(null,arguments)},a._freeCMemory=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.freeCMemory.apply(null,arguments)};var St=a._free=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.free.apply(null,arguments)};a._getCLibFaustVersion=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.getCLibFaustVersion.apply(null,arguments)},a._getErrorAfterException=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.getErrorAfterException.apply(null,arguments)},a._cleanupAfterException=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.cleanupAfterException.apply(null,arguments)};var _t=a._malloc=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.malloc.apply(null,arguments)};a.___errno_location=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__errno_location.apply(null,arguments)};var Zr=a._htons=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.htons.apply(null,arguments)};a.___em_js__connectMemory=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__em_js__connectMemory.apply(null,arguments)},a._deleteAllWasmCDSPFactories=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.deleteAllWasmCDSPFactories.apply(null,arguments)},a._createWasmCDSPFactoryFromString=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.createWasmCDSPFactoryFromString.apply(null,arguments)},a._getWasmCModule=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.getWasmCModule.apply(null,arguments)},a._getWasmCModuleSize=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.getWasmCModuleSize.apply(null,arguments)},a._getWasmCHelpers=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.getWasmCHelpers.apply(null,arguments)},a._freeWasmCModule=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.freeWasmCModule.apply(null,arguments)};var Lo=a._ntohs=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.ntohs.apply(null,arguments)},ar=a.__get_tzname=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm._get_tzname.apply(null,arguments)},$u=a.__get_daylight=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm._get_daylight.apply(null,arguments)},zu=a.__get_timezone=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm._get_timezone.apply(null,arguments)},Bu=a.___getTypeName=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__getTypeName.apply(null,arguments)};a.___embind_register_native_and_builtin_types=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__embind_register_native_and_builtin_types.apply(null,arguments)},a.___set_stack_limit=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.__set_stack_limit.apply(null,arguments)};var Fr=a.stackSave=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.stackSave.apply(null,arguments)},ir=a.stackAlloc=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.stackAlloc.apply(null,arguments)},eo=a.stackRestore=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.stackRestore.apply(null,arguments)};a.dynCall_ii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_ii.apply(null,arguments)},a.dynCall_vi=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vi.apply(null,arguments)},a.dynCall_vii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vii.apply(null,arguments)},a.dynCall_iiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiii.apply(null,arguments)},a.dynCall_viijii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viijii.apply(null,arguments)},a.dynCall_viiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiii.apply(null,arguments)},a.dynCall_iii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iii.apply(null,arguments)},a.dynCall_iiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiii.apply(null,arguments)},a.dynCall_iiiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiii.apply(null,arguments)},a.dynCall_viddddii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viddddii.apply(null,arguments)},a.dynCall_viddddiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viddddiii.apply(null,arguments)},a.dynCall_viddd=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viddd.apply(null,arguments)},a.dynCall_vidddi=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vidddi.apply(null,arguments)},a.dynCall_vidddd=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vidddd.apply(null,arguments)},a.dynCall_viddii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viddii.apply(null,arguments)},a.dynCall_viddi=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viddi.apply(null,arguments)},a.dynCall_viiiiddd=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiiiddd.apply(null,arguments)},a.dynCall_viii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viii.apply(null,arguments)},a.dynCall_v=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_v.apply(null,arguments)},a.dynCall_viiiffff=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiiffff.apply(null,arguments)},a.dynCall_viiiff=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiiff.apply(null,arguments)},a.dynCall_iiiiiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiiiii.apply(null,arguments)},a.dynCall_iiiiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiiii.apply(null,arguments)},a.dynCall_iiid=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiid.apply(null,arguments)},a.dynCall_viiidddd=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiidddd.apply(null,arguments)},a.dynCall_viiidd=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiidd.apply(null,arguments)},a.dynCall_viiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiiii.apply(null,arguments)},a.dynCall_di=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_di.apply(null,arguments)},a.dynCall_vid=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vid.apply(null,arguments)},a.dynCall_i=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_i.apply(null,arguments)},a.dynCall_viiif=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiif.apply(null,arguments)},a.dynCall_fiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_fiii.apply(null,arguments)},a.dynCall_vidiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_vidiii.apply(null,arguments)},a.dynCall_viif=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viif.apply(null,arguments)},a.dynCall_fii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_fii.apply(null,arguments)},a.dynCall_jiji=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_jiji.apply(null,arguments)},a.dynCall_iidiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iidiiii.apply(null,arguments)},a.dynCall_iiiiiiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiiiiii.apply(null,arguments)},a.dynCall_iiiiij=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiij.apply(null,arguments)},a.dynCall_iiiiid=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiid.apply(null,arguments)},a.dynCall_iiiiijj=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiijj.apply(null,arguments)},a.dynCall_iiiiiijj=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_iiiiiijj.apply(null,arguments)},a.dynCall_viiiiii=function(){return on(kn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),on(!Fn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),a.asm.dynCall_viiiiii.apply(null,arguments)},a.asm=Ho,Object.getOwnPropertyDescriptor(a,"intArrayFromString")||(a.intArrayFromString=function(){an("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"intArrayToString")||(a.intArrayToString=function(){an("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ccall")||(a.ccall=function(){an("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.cwrap=ot,Object.getOwnPropertyDescriptor(a,"setValue")||(a.setValue=function(){an("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getValue")||(a.getValue=function(){an("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"allocate")||(a.allocate=function(){an("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.getMemory=Wt,Object.getOwnPropertyDescriptor(a,"UTF8ArrayToString")||(a.UTF8ArrayToString=function(){an("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.UTF8ToString=zn,Object.getOwnPropertyDescriptor(a,"stringToUTF8Array")||(a.stringToUTF8Array=function(){an("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.stringToUTF8=qn,a.lengthBytesUTF8=pt,Object.getOwnPropertyDescriptor(a,"stackTrace")||(a.stackTrace=function(){an("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addOnPreRun")||(a.addOnPreRun=function(){an("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addOnInit")||(a.addOnInit=function(){an("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addOnPreMain")||(a.addOnPreMain=function(){an("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addOnExit")||(a.addOnExit=function(){an("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addOnPostRun")||(a.addOnPostRun=function(){an("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeStringToMemory")||(a.writeStringToMemory=function(){an("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeArrayToMemory")||(a.writeArrayToMemory=function(){an("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeAsciiToMemory")||(a.writeAsciiToMemory=function(){an("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.addRunDependency=Ur,a.removeRunDependency=gr,a.FS_createFolder=j.createFolder,a.FS_createPath=j.createPath,a.FS_createDataFile=j.createDataFile,a.FS_createPreloadedFile=j.createPreloadedFile,a.FS_createLazyFile=j.createLazyFile,a.FS_createLink=j.createLink,a.FS_createDevice=j.createDevice,a.FS_unlink=j.unlink,Object.getOwnPropertyDescriptor(a,"dynamicAlloc")||(a.dynamicAlloc=function(){an("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"loadDynamicLibrary")||(a.loadDynamicLibrary=function(){an("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"loadWebAssemblyModule")||(a.loadWebAssemblyModule=function(){an("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getLEB")||(a.getLEB=function(){an("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getFunctionTables")||(a.getFunctionTables=function(){an("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"alignFunctionTables")||(a.alignFunctionTables=function(){an("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registerFunctions")||(a.registerFunctions=function(){an("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"addFunction")||(a.addFunction=function(){an("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"removeFunction")||(a.removeFunction=function(){an("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getFuncWrapper")||(a.getFuncWrapper=function(){an("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"prettyPrint")||(a.prettyPrint=function(){an("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"makeBigInt")||(a.makeBigInt=function(){an("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"dynCall")||(a.dynCall=function(){an("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getCompilerSetting")||(a.getCompilerSetting=function(){an("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"print")||(a.print=function(){an("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"printErr")||(a.printErr=function(){an("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getTempRet0")||(a.getTempRet0=function(){an("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"setTempRet0")||(a.setTempRet0=function(){an("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"callMain")||(a.callMain=function(){an("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"abort")||(a.abort=function(){an("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stringToNewUTF8")||(a.stringToNewUTF8=function(){an("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emscripten_realloc_buffer")||(a.emscripten_realloc_buffer=function(){an("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ENV")||(a.ENV=function(){an("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"setjmpId")||(a.setjmpId=function(){an("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ERRNO_CODES")||(a.ERRNO_CODES=function(){an("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ERRNO_MESSAGES")||(a.ERRNO_MESSAGES=function(){an("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"DNS")||(a.DNS=function(){an("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GAI_ERRNO_MESSAGES")||(a.GAI_ERRNO_MESSAGES=function(){an("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"Protocols")||(a.Protocols=function(){an("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"Sockets")||(a.Sockets=function(){an("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"UNWIND_CACHE")||(a.UNWIND_CACHE=function(){an("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"readAsmConstArgs")||(a.readAsmConstArgs=function(){an("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"jstoi_q")||(a.jstoi_q=function(){an("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"jstoi_s")||(a.jstoi_s=function(){an("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"PATH")||(a.PATH=function(){an("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"PATH_FS")||(a.PATH_FS=function(){an("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"SYSCALLS")||(a.SYSCALLS=function(){an("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"syscallMmap2")||(a.syscallMmap2=function(){an("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"syscallMunmap")||(a.syscallMunmap=function(){an("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"JSEvents")||(a.JSEvents=function(){an("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"demangle")||(a.demangle=function(){an("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"demangleAll")||(a.demangleAll=function(){an("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"jsStackTrace")||(a.jsStackTrace=function(){an("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stackTrace")||(a.stackTrace=function(){an("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeI53ToI64")||(a.writeI53ToI64=function(){an("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeI53ToI64Clamped")||(a.writeI53ToI64Clamped=function(){an("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeI53ToI64Signaling")||(a.writeI53ToI64Signaling=function(){an("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeI53ToU64Clamped")||(a.writeI53ToU64Clamped=function(){an("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"writeI53ToU64Signaling")||(a.writeI53ToU64Signaling=function(){an("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"readI53FromI64")||(a.readI53FromI64=function(){an("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"readI53FromU64")||(a.readI53FromU64=function(){an("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"convertI32PairToI53")||(a.convertI32PairToI53=function(){an("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"convertU32PairToI53")||(a.convertU32PairToI53=function(){an("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"Browser")||(a.Browser=function(){an("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.FS=j,Object.getOwnPropertyDescriptor(a,"MEMFS")||(a.MEMFS=function(){an("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"TTY")||(a.TTY=function(){an("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"PIPEFS")||(a.PIPEFS=function(){an("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"SOCKFS")||(a.SOCKFS=function(){an("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GL")||(a.GL=function(){an("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emscriptenWebGLGet")||(a.emscriptenWebGLGet=function(){an("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emscriptenWebGLGetTexPixelData")||(a.emscriptenWebGLGetTexPixelData=function(){an("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emscriptenWebGLGetUniform")||(a.emscriptenWebGLGetUniform=function(){an("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emscriptenWebGLGetVertexAttrib")||(a.emscriptenWebGLGetVertexAttrib=function(){an("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"AL")||(a.AL=function(){an("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"SDL")||(a.SDL=function(){an("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"SDL_gfx")||(a.SDL_gfx=function(){an("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GLUT")||(a.GLUT=function(){an("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"EGL")||(a.EGL=function(){an("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GLFW_Window")||(a.GLFW_Window=function(){an("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GLFW")||(a.GLFW=function(){an("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"GLEW")||(a.GLEW=function(){an("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"IDBStore")||(a.IDBStore=function(){an("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"runAndAbortIfError")||(a.runAndAbortIfError=function(){an("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_handle_array")||(a.emval_handle_array=function(){an("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_free_list")||(a.emval_free_list=function(){an("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_symbols")||(a.emval_symbols=function(){an("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"init_emval")||(a.init_emval=function(){an("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"count_emval_handles")||(a.count_emval_handles=function(){an("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"get_first_emval")||(a.get_first_emval=function(){an("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getStringOrSymbol")||(a.getStringOrSymbol=function(){an("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"requireHandle")||(a.requireHandle=function(){an("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_newers")||(a.emval_newers=function(){an("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"craftEmvalAllocator")||(a.craftEmvalAllocator=function(){an("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_get_global")||(a.emval_get_global=function(){an("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"emval_methodCallers")||(a.emval_methodCallers=function(){an("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"InternalError")||(a.InternalError=function(){an("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"BindingError")||(a.BindingError=function(){an("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"UnboundTypeError")||(a.UnboundTypeError=function(){an("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"PureVirtualError")||(a.PureVirtualError=function(){an("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"init_embind")||(a.init_embind=function(){an("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"throwInternalError")||(a.throwInternalError=function(){an("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"throwBindingError")||(a.throwBindingError=function(){an("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"throwUnboundTypeError")||(a.throwUnboundTypeError=function(){an("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ensureOverloadTable")||(a.ensureOverloadTable=function(){an("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"exposePublicSymbol")||(a.exposePublicSymbol=function(){an("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"replacePublicSymbol")||(a.replacePublicSymbol=function(){an("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"extendError")||(a.extendError=function(){an("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"createNamedFunction")||(a.createNamedFunction=function(){an("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registeredInstances")||(a.registeredInstances=function(){an("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getBasestPointer")||(a.getBasestPointer=function(){an("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registerInheritedInstance")||(a.registerInheritedInstance=function(){an("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"unregisterInheritedInstance")||(a.unregisterInheritedInstance=function(){an("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getInheritedInstance")||(a.getInheritedInstance=function(){an("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getInheritedInstanceCount")||(a.getInheritedInstanceCount=function(){an("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getLiveInheritedInstances")||(a.getLiveInheritedInstances=function(){an("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registeredTypes")||(a.registeredTypes=function(){an("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"awaitingDependencies")||(a.awaitingDependencies=function(){an("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"typeDependencies")||(a.typeDependencies=function(){an("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registeredPointers")||(a.registeredPointers=function(){an("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"registerType")||(a.registerType=function(){an("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"whenDependentTypesAreResolved")||(a.whenDependentTypesAreResolved=function(){an("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"embind_charCodes")||(a.embind_charCodes=function(){an("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"embind_init_charCodes")||(a.embind_init_charCodes=function(){an("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"readLatin1String")||(a.readLatin1String=function(){an("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getTypeName")||(a.getTypeName=function(){an("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"heap32VectorToArray")||(a.heap32VectorToArray=function(){an("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"requireRegisteredType")||(a.requireRegisteredType=function(){an("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"getShiftFromSize")||(a.getShiftFromSize=function(){an("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"integerReadValueFromPointer")||(a.integerReadValueFromPointer=function(){an("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"enumReadValueFromPointer")||(a.enumReadValueFromPointer=function(){an("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"floatReadValueFromPointer")||(a.floatReadValueFromPointer=function(){an("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"simpleReadValueFromPointer")||(a.simpleReadValueFromPointer=function(){an("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"runDestructors")||(a.runDestructors=function(){an("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"new_")||(a.new_=function(){an("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"craftInvokerFunction")||(a.craftInvokerFunction=function(){an("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"embind__requireFunction")||(a.embind__requireFunction=function(){an("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"tupleRegistrations")||(a.tupleRegistrations=function(){an("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"structRegistrations")||(a.structRegistrations=function(){an("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"genericPointerToWireType")||(a.genericPointerToWireType=function(){an("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"constNoSmartPtrRawPointerToWireType")||(a.constNoSmartPtrRawPointerToWireType=function(){an("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"nonConstNoSmartPtrRawPointerToWireType")||(a.nonConstNoSmartPtrRawPointerToWireType=function(){an("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"init_RegisteredPointer")||(a.init_RegisteredPointer=function(){an("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredPointer")||(a.RegisteredPointer=function(){an("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredPointer_getPointee")||(a.RegisteredPointer_getPointee=function(){an("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredPointer_destructor")||(a.RegisteredPointer_destructor=function(){an("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredPointer_deleteObject")||(a.RegisteredPointer_deleteObject=function(){an("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredPointer_fromWireType")||(a.RegisteredPointer_fromWireType=function(){an("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"runDestructor")||(a.runDestructor=function(){an("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"releaseClassHandle")||(a.releaseClassHandle=function(){an("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"finalizationGroup")||(a.finalizationGroup=function(){an("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"detachFinalizer_deps")||(a.detachFinalizer_deps=function(){an("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"detachFinalizer")||(a.detachFinalizer=function(){an("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"attachFinalizer")||(a.attachFinalizer=function(){an("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"makeClassHandle")||(a.makeClassHandle=function(){an("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"init_ClassHandle")||(a.init_ClassHandle=function(){an("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle")||(a.ClassHandle=function(){an("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle_isAliasOf")||(a.ClassHandle_isAliasOf=function(){an("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"throwInstanceAlreadyDeleted")||(a.throwInstanceAlreadyDeleted=function(){an("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle_clone")||(a.ClassHandle_clone=function(){an("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle_delete")||(a.ClassHandle_delete=function(){an("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"deletionQueue")||(a.deletionQueue=function(){an("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle_isDeleted")||(a.ClassHandle_isDeleted=function(){an("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"ClassHandle_deleteLater")||(a.ClassHandle_deleteLater=function(){an("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"flushPendingDeletes")||(a.flushPendingDeletes=function(){an("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"delayFunction")||(a.delayFunction=function(){an("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"setDelayFunction")||(a.setDelayFunction=function(){an("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"RegisteredClass")||(a.RegisteredClass=function(){an("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"shallowCopyInternalPointer")||(a.shallowCopyInternalPointer=function(){an("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"downcastPointer")||(a.downcastPointer=function(){an("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"upcastPointer")||(a.upcastPointer=function(){an("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"validateThis")||(a.validateThis=function(){an("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"char_0")||(a.char_0=function(){an("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"char_9")||(a.char_9=function(){an("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"makeLegalFunctionName")||(a.makeLegalFunctionName=function(){an("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"warnOnce")||(a.warnOnce=function(){an("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stackSave")||(a.stackSave=function(){an("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stackRestore")||(a.stackRestore=function(){an("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stackAlloc")||(a.stackAlloc=function(){an("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"AsciiToString")||(a.AsciiToString=function(){an("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stringToAscii")||(a.stringToAscii=function(){an("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"UTF16ToString")||(a.UTF16ToString=function(){an("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stringToUTF16")||(a.stringToUTF16=function(){an("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"lengthBytesUTF16")||(a.lengthBytesUTF16=function(){an("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"UTF32ToString")||(a.UTF32ToString=function(){an("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"stringToUTF32")||(a.stringToUTF32=function(){an("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"lengthBytesUTF32")||(a.lengthBytesUTF32=function(){an("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"allocateUTF8")||(a.allocateUTF8=function(){an("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(a,"allocateUTF8OnStack")||(a.allocateUTF8OnStack=function(){an("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),a.writeStackCookie=co,a.checkStackCookie=Gt,a.abortStackOverflow=Yo,Object.getOwnPropertyDescriptor(a,"ALLOC_NORMAL")||Object.defineProperty(a,"ALLOC_NORMAL",{configurable:!0,get:function(){an("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(a,"ALLOC_STACK")||Object.defineProperty(a,"ALLOC_STACK",{configurable:!0,get:function(){an("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(a,"ALLOC_DYNAMIC")||Object.defineProperty(a,"ALLOC_DYNAMIC",{configurable:!0,get:function(){an("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(a,"ALLOC_NONE")||Object.defineProperty(a,"ALLOC_NONE",{configurable:!0,get:function(){an("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});var sr;a.then=function(s){if(sr)s(a);else{var d=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){d&&d(),s(a)}}return a};function Wu(s){this.name="ExitStatus",this.message="Program terminated with exit("+s+")",this.status=s}Yt=function s(){sr||no(),sr||(Yt=s)};function no(s){if(kt>0||(co(),Ko(),kt>0))return;function d(){sr||(sr=!0,a.calledRun=!0,!Un&&(Jo(),Zo(),a.onRuntimeInitialized&&a.onRuntimeInitialized(),on(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),ca()))}a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),d()},1)):d(),Gt()}if(a.run=no,a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return no(),o}}(),Sha1={};Sha1.hash=function(e,o){o=typeof o=="undefined"?!0:o,o&&(e=Utf8.encode(e));var a=[1518500249,1859775393,2400959708,3395469782];e+=String.fromCharCode(128);for(var i=e.length/4+2,c=Math.ceil(i/16),h=new Array(c),g=0;g<c;g++){h[g]=new Array(16);for(var Z=0;Z<16;Z++)h[g][Z]=e.charCodeAt(g*64+Z*4)<<24|e.charCodeAt(g*64+Z*4+1)<<16|e.charCodeAt(g*64+Z*4+2)<<8|e.charCodeAt(g*64+Z*4+3)}h[c-1][14]=(e.length-1)*8/Math.pow(2,32),h[c-1][14]=Math.floor(h[c-1][14]),h[c-1][15]=(e.length-1)*8&4294967295;for(var $=1732584193,rn=4023233417,dn=2562383102,mn=271733878,cn=3285377520,vn=new Array(80),gn,Pn,xn,un,ln,g=0;g<c;g++){for(var fn=0;fn<16;fn++)vn[fn]=h[g][fn];for(var fn=16;fn<80;fn++)vn[fn]=Sha1.ROTL(vn[fn-3]^vn[fn-8]^vn[fn-14]^vn[fn-16],1);gn=$,Pn=rn,xn=dn,un=mn,ln=cn;for(var fn=0;fn<80;fn++){var yn=Math.floor(fn/20),Mn=Sha1.ROTL(gn,5)+Sha1.f(yn,Pn,xn,un)+ln+a[yn]+vn[fn]&4294967295;ln=un,un=xn,xn=Sha1.ROTL(Pn,30),Pn=gn,gn=Mn}$=$+gn&4294967295,rn=rn+Pn&4294967295,dn=dn+xn&4294967295,mn=mn+un&4294967295,cn=cn+ln&4294967295}return Sha1.toHexStr($)+Sha1.toHexStr(rn)+Sha1.toHexStr(dn)+Sha1.toHexStr(mn)+Sha1.toHexStr(cn)};Sha1.f=function(e,o,a,i){switch(e){case 0:return o&a^~o&i;case 1:return o^a^i;case 2:return o&a^o&i^a&i;case 3:return o^a^i}};Sha1.ROTL=function(e,o){return e<<o|e>>>32-o};Sha1.toHexStr=function(e){for(var o="",a,i=7;i>=0;i--)a=e>>>i*4&15,o+=a.toString(16);return o};var Utf8={};Utf8.encode=function(e){var o=e.replace(/[\u0080-\u07ff]/g,function(a){var i=a.charCodeAt(0);return String.fromCharCode(192|i>>6,128|i&63)});return o=o.replace(/[\u0800-\uffff]/g,function(a){var i=a.charCodeAt(0);return String.fromCharCode(224|i>>12,128|i>>6&63,128|i&63)}),o};Utf8.decode=function(e){var o=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(a){var i=(a.charCodeAt(0)&15)<<12|(a.charCodeAt(1)&63)<<6|a.charCodeAt(2)&63;return String.fromCharCode(i)});return o=o.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(a){var i=(a.charCodeAt(0)&31)<<6|a.charCodeAt(1)&63;return String.fromCharCode(i)}),o};var readyResolver={current:void 0},readyPromise=new Promise(e=>{readyResolver.current=e}),faust_module$1=FaustModule({onRuntimeInitialized:readyResolver.current});faust_module$1.lengthBytesUTF8=function(e){for(var o=0,a=0;a<e.length;++a){var i=e.charCodeAt(a);i>=55296&&i<=57343&&(i=65536+((i&1023)<<10)|e.charCodeAt(++a)&1023),i<=127?++o:i<=2047?o+=2:i<=65535?o+=3:i<=2097151?o+=4:i<=67108863?o+=5:o+=6}return o};var faust=faust||{};faust.remap=function(e,o,a,i,c){return 1*(e-o)/(a-o)*(c-i)+i};faust.debug=!1;faust.createWasmCDSPFactoryFromString=faust_module$1.cwrap("createWasmCDSPFactoryFromString","number",["number","number","number","number","number","number"]);faust.deleteAllWasmCDSPFactories=faust_module$1.cwrap("deleteAllWasmCDSPFactories",null,[]);faust.expandCDSPFromString=faust_module$1.cwrap("expandCDSPFromString","number",["number","number","number","number","number","number"]);faust.getCLibFaustVersion=faust_module$1.cwrap("getCLibFaustVersion","number",[]);faust.getWasmCModule=faust_module$1.cwrap("getWasmCModule","number",["number"]);faust.getWasmCModuleSize=faust_module$1.cwrap("getWasmCModuleSize","number",["number"]);faust.getWasmCHelpers=faust_module$1.cwrap("getWasmCHelpers","number",["number"]);faust.freeWasmCModule=faust_module$1.cwrap("freeWasmCModule",null,["number"]);faust.freeCMemory=faust_module$1.cwrap("freeCMemory",null,["number"]);faust.cleanupAfterException=faust_module$1.cwrap("cleanupAfterException",null,[]);faust.getErrorAfterException=faust_module$1.cwrap("getErrorAfterException","number",[]);faust.error_msg=null;faust.factory_number=0;faust.factory_table=[];faust.getErrorMessage=function(){return faust.error_msg};faust.getLibFaustVersion=function(){return faust_module$1.UTF8ToString(faust.getCLibFaustVersion())};faust.ab2str=function(e){return e?String.fromCharCode.apply(null,new Uint8Array(e)):null};faust.str2ab=function(e){if(e){for(var o=new ArrayBuffer(e.length),a=new Uint8Array(o),i=0,c=e.length;i<c;i++)a[i]=e.charCodeAt(i);return o}else return null};faust.compileCode=function(e,o,a,i){var c=faust_module$1.lengthBytesUTF8(o)+1,h=faust_module$1._malloc(c),g="FaustDSP",Z=faust_module$1.lengthBytesUTF8(g)+1,$=faust_module$1._malloc(Z),rn=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(g,$,Z),faust_module$1.stringToUTF8(o,h,c);var dn=a===void 0?new Array:a;dn.push("-cn",e);for(var mn=4,cn=faust_module$1._malloc(dn.length*mn),vn=new Int32Array(faust_module$1.HEAP32.buffer,cn,dn.length),gn=0;gn<dn.length;gn++){var Pn=faust_module$1.lengthBytesUTF8(dn[gn])+1,xn=faust_module$1._malloc(Pn);faust_module$1.stringToUTF8(dn[gn],xn,Pn),vn[gn]=xn}try{var un=faust.createWasmCDSPFactoryFromString($,h,dn.length,cn,rn,i);if(faust.error_msg=faust_module$1.UTF8ToString(rn),un===0)return null;for(var ln=faust.getWasmCModule(un),fn=faust.getWasmCModuleSize(un),yn=new Uint8Array(fn),gn=0;gn<fn;gn++)yn[gn]=faust_module$1.HEAP8[ln+gn];var Mn=faust.getWasmCHelpers(un),An=faust_module$1.UTF8ToString(Mn);faust_module$1._free(h),faust_module$1._free($),faust_module$1._free(rn),faust.freeWasmCModule(un),vn=new Int32Array(faust_module$1.HEAP32.buffer,cn,dn.length);for(var gn=0;gn<dn.length;gn++)faust_module$1._free(vn[gn]);return faust_module$1._free(cn),{code:yn,code_source:o,helpers:An}}catch(Rn){return faust.error_msg=faust_module$1.UTF8ToString(faust.getErrorAfterException()),faust.error_msg===""&&(faust.error_msg=Rn),faust.cleanupAfterException(),null}};faust.createDSPFactoryAux=function(e,o,a,i){for(var c="",h=0;h<o.length;h++)c+=o[h];var g=Sha1.hash(e+(a?"internal_memory":"external_memory")+c,!0),Z=faust.factory_table[g];if(Z){i(Z);return}var $="mydsp"+faust.factory_number,rn="effect"+faust.factory_number++,dn="adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";dn=dn.concat(e),dn=dn.concat("};"),dn=dn.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");var mn=faust.compileCode($,e,o,a);if(mn){var cn=faust.compileCode(rn,dn,o,a);cn?faust.readDSPFactoryFromMachineAux($,mn.code,mn.code_source,mn.helpers,rn,cn.code,cn.code_source,cn.helpers,g,i):faust.readDSPFactoryFromMachineAux($,mn.code,mn.code_source,mn.helpers,null,null,null,null,g,i)}else i(null)};faust.createDSPFactory=function(e,o,a){readyPromise.then(()=>{faust.createDSPFactoryAux(e,o,!0,a)})};faust.ready=readyPromise;faust.expandDSP=function(e,o){o.push("-lang"),o.push("wasm");var a=faust_module$1.lengthBytesUTF8(e)+1,i=faust_module$1._malloc(a),c="FaustDSP",h=faust_module$1.lengthBytesUTF8(c)+1,g=faust_module$1._malloc(h),Z=faust_module$1._malloc(64),$=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(c,g,h),faust_module$1.stringToUTF8(e,i,a),o=o===void 0?new Array:o;for(var rn=4,dn=faust_module$1._malloc(o.length*rn),mn=new Int32Array(faust_module$1.HEAP32.buffer,dn,o.length),cn=0;cn<o.length;cn++){var vn=faust_module$1.lengthBytesUTF8(o[cn])+1,gn=faust_module$1._malloc(vn);faust_module$1.stringToUTF8(o[cn],gn,vn),mn[cn]=gn}try{var Pn=faust.expandCDSPFromString(g,i,o.length,dn,Z,$),xn=faust_module$1.UTF8ToString(Pn),un=faust_module$1.UTF8ToString(Z);faust.error_msg=faust_module$1.UTF8ToString($),faust_module$1._free(i),faust_module$1._free(g),faust_module$1._free(Z),faust_module$1._free($),faust.freeCMemory(Pn),mn=new Int32Array(faust_module$1.HEAP32.buffer,dn,o.length);for(var cn=0;cn<o.length;cn++)faust_module$1._free(mn[cn]);return faust_module$1._free(dn),xn}catch(ln){return faust.error_msg=faust_module$1.UTF8ToString(faust.getErrorAfterException()),faust.error_msg===""&&(faust.error_msg=ln),faust.cleanupAfterException(),null}};faust.writeDSPFactoryToMachine=function(e){return{name:e.name,code:faust.ab2str(e.code),code_source:e.code_source,helpers:e.helpers,name_effect:e.name_effect,code_effect:faust.ab2str(e.code_effect),code_source_effect:e.code_source_effect,helpers_effect:e.helpers_effect}};faust.readDSPFactoryFromMachine=function(e,o){var a=Sha1.hash(e.code_source,!0),i=faust.factory_table[a];i?o(i):faust.readDSPFactoryFromMachineAux(e.name,faust.str2ab(e.code),e.code_source,e.helpers,e.name_effect,faust.str2ab(e.code_effect),e.code_source_effect,e.helpers_effect,a,o)};faust.readDSPFactoryFromMachineAux=function(factory_name1,factory_code1,factory_code_source1,helpers_code1,factory_name2,factory_code2,factory_code_source2,helpers_code2,sha_key,callback){WebAssembly.compile(factory_code1).then(module=>{var factory={};factory.polyphony=[],factory.code=factory_code1,factory.code_source=factory_code_source1,factory.helpers=helpers_code1,factory.module=module;var jsToEval=helpers_code1+`
return [getJSON`+factory_name1+", getBase64Code"+factory_name1+"];",evalResult=new Function(jsToEval)();factory.getJSON=evalResult[0],factory.getBase64Code=evalResult[1];try{factory.json_object=JSON.parse(factory.getJSON())}catch(e){throw faust.error_msg="Error in JSON.parse: "+e,callback(null),!0}factory.name=factory_name1,factory.sha_key=sha_key,faust.factory_table[sha_key]=factory,factory_name2?WebAssembly.compile(factory_code2).then(module_effect=>{factory.code_effect=factory_code2,factory.code_source_effect=factory_code_source2,factory.helpers_effect=helpers_code2,factory.module_effect=module_effect,eval(helpers_code2),factory.getJSONeffect=eval("getJSON"+factory_name2),factory.getBase64Codeeffect=eval("getBase64Code"+factory_name2);try{factory.effect_json_object=JSON.parse(factory.getJSONeffect())}catch(e){throw faust.error_msg="Error in JSON.parse: "+e,callback(null),!0}factory.name_effect=factory_name2,callback(factory)}).catch(function(e){faust.error_msg="Faust DSP factory cannot be compiled",callback(null)}):callback(factory)}).catch(function(e){faust.error_msg="Faust DSP factory cannot be compiled",callback(null)})};faust.deleteDSPFactory=function(e){faust.factory_table[e.sha_key]=null};faust.createDSPInstance=function(e,o,a,i){o.resume();var c={env:{memoryBase:0,tableBase:0,_abs:Math.abs,_acosf:Math.acos,_asinf:Math.asin,_atanf:Math.atan,_atan2f:Math.atan2,_ceilf:Math.ceil,_cosf:Math.cos,_expf:Math.exp,_floorf:Math.floor,_fmodf:function(h,g){return h%g},_logf:Math.log,_log10f:Math.log10,_max_f:Math.max,_min_f:Math.min,_remainderf:function(h,g){return h-Math.round(h/g)*g},_powf:Math.pow,_roundf:Math.fround,_sinf:Math.sin,_sqrtf:Math.sqrt,_tanf:Math.tan,_acoshf:Math.acosh,_asinhf:Math.asinh,_atanhf:Math.atanh,_coshf:Math.cosh,_sinhf:Math.sinh,_tanhf:Math.tanh,_isnanf:Number.isNaN,_isinff:function(h){return!isFinite(h)},_copysignf:function(h,g){return Math.sign(h)===Math.sign(g)?h:-h},_acos:Math.acos,_asin:Math.asin,_atan:Math.atan,_atan2:Math.atan2,_ceil:Math.ceil,_cos:Math.cos,_exp:Math.exp,_floor:Math.floor,_fmod:function(h,g){return h%g},_log:Math.log,_log10:Math.log10,_max_:Math.max,_min_:Math.min,_remainder:function(h,g){return h-Math.round(h/g)*g},_pow:Math.pow,_round:Math.fround,_sin:Math.sin,_sqrt:Math.sqrt,_tan:Math.tan,_acosh:Math.acosh,_asinh:Math.asinh,_atanh:Math.atanh,_cosh:Math.cosh,_sinh:Math.sinh,_tanh:Math.tanh,_isnan:Number.isNaN,_isinf:function(h){return!isFinite(h)},_copysign:function(h,g){return Math.sign(h)===Math.sign(g)?h:-h},table:new WebAssembly.Table({initial:0,element:"anyfunc"})}};performance.now(),WebAssembly.instantiate(e.module,c).then(h=>{performance.now();var g;try{g=o.createScriptProcessor(a,h.exports.getNumInputs(0),h.exports.getNumOutputs(0))}catch($){faust.error_msg="Error in createScriptProcessor: "+$,i(null);return}g.output_handler=null,g.ins=null,g.outs=null,g.compute_handler=null,g.dspInChannnels=[],g.dspOutChannnels=[],g.fPitchwheelLabel=[],g.fCtrlLabel=new Array(128);for(var Z=0;Z<g.fCtrlLabel.length;Z++)g.fCtrlLabel[Z]=[];g.outputs_timer=5,g.outputs_items=[],g.inputs_items=[],g.ptr_size=4,g.sample_size=4,g.dsp=0,g.pathTable=[],g.factory=h.exports,g.HEAP=h.exports.memory.buffer,g.HEAP32=new Int32Array(g.HEAP),g.HEAPF32=new Float32Array(g.HEAP),g.numIn=g.factory.getNumInputs(g.dsp),g.numOut=g.factory.getNumOutputs(g.dsp),g.audio_heap_ptr=parseInt(e.json_object.size),g.audio_heap_ptr_inputs=g.audio_heap_ptr,g.audio_heap_ptr_outputs=g.audio_heap_ptr_inputs+g.numIn*g.ptr_size,g.audio_heap_inputs=g.audio_heap_ptr_outputs+g.numOut*g.ptr_size,g.audio_heap_outputs=g.audio_heap_inputs+g.numIn*a*g.sample_size,g.update_outputs=function(){if(g.outputs_items.length>0&&g.output_handler&&g.outputs_timer--===0){g.outputs_timer=5;for(var $=0;$<g.outputs_items.length;$++)g.output_handler(g.outputs_items[$],g.factory.getParamValue(g.dsp,g.pathTable[g.outputs_items[$]]))}},g.compute=function($){var rn;for(rn=0;rn<g.numIn;rn++){var dn=$.inputBuffer.getChannelData(rn),mn=g.dspInChannnels[rn];mn.set(dn)}for(g.compute_handler&&g.compute_handler(a),g.factory.compute(g.dsp,a,g.ins,g.outs),g.update_outputs(),rn=0;rn<g.numOut;rn++){var cn=$.outputBuffer.getChannelData(rn),vn=g.dspOutChannnels[rn];cn.set(vn)}},g.parse_ui=function($){for(var rn=0;rn<$.length;rn++)g.parse_group($[rn])},g.parse_group=function($){$.items&&g.parse_items($.items)},g.parse_items=function($){for(var rn=0;rn<$.length;rn++)g.parse_item($[rn])},g.parse_item=function($){if($.type==="vgroup"||$.type==="hgroup"||$.type==="tgroup")g.parse_items($.items);else if($.type==="hbargraph"||$.type==="vbargraph")g.outputs_items.push($.address),g.pathTable[$.address]=parseInt($.index);else if(($.type==="vslider"||$.type==="hslider"||$.type==="button"||$.type==="checkbox"||$.type==="nentry")&&(g.inputs_items.push($.address),g.pathTable[$.address]=parseInt($.index),$.meta!==void 0))for(var rn=0;rn<$.meta.length;rn++)$.meta[rn].midi!==void 0&&($.meta[rn].midi.trim()==="pitchwheel"?g.fPitchwheelLabel.push({path:$.address,min:parseFloat($.min),max:parseFloat($.max)}):$.meta[rn].midi.trim().split(" ")[0]==="ctrl"&&g.fCtrlLabel[parseInt($.meta[rn].midi.trim().split(" ")[1])].push({path:$.address,min:parseFloat($.min),max:parseFloat($.max)}))},g.initAux=function(){var $;if(g.onaudioprocess=g.compute,g.numIn>0){for(g.ins=g.audio_heap_ptr_inputs,$=0;$<g.numIn;$++)g.HEAP32[(g.ins>>2)+$]=g.audio_heap_inputs+a*g.sample_size*$;var rn=g.HEAP32.subarray(g.ins>>2,g.ins+g.numIn*g.ptr_size>>2);for($=0;$<g.numIn;$++)g.dspInChannnels[$]=g.HEAPF32.subarray(rn[$]>>2,rn[$]+a*g.sample_size>>2)}if(g.numOut>0){for(g.outs=g.audio_heap_ptr_outputs,$=0;$<g.numOut;$++)g.HEAP32[(g.outs>>2)+$]=g.audio_heap_outputs+a*g.sample_size*$;var dn=g.HEAP32.subarray(g.outs>>2,g.outs+g.numOut*g.ptr_size>>2);for($=0;$<g.numOut;$++)g.dspOutChannnels[$]=g.HEAPF32.subarray(dn[$]>>2,dn[$]+a*g.sample_size>>2)}g.parse_ui(e.json_object.ui),g.factory.init(g.dsp,o.sampleRate)},g.destroy=function(){},g.getSampleRate=function(){return o.sampleRate},g.getNumInputs=function(){return g.factory.getNumInputs(g.dsp)},g.getNumOutputs=function(){return g.factory.getNumOutputs(g.dsp)},g.init=function($){g.factory.init(g.dsp,$)},g.instanceInit=function($){g.factory.instanceInit(g.dsp,$)},g.instanceConstants=function($){g.factory.instanceConstants(g.dsp,$)},g.instanceResetUserInterface=function(){g.factory.instanceResetUserInterface(g.dsp)},g.instanceClear=function(){g.factory.instanceClear(g.dsp)},g.metadata=function($){e.json_object.meta&&e.json_object.meta.forEach(function(rn){$.declare(Object.keys(rn)[0],Object.values(rn)[0])})},g.setOutputParamHandler=function($){g.output_handler=$},g.getOutputParamHandler=function(){return g.output_handler},g.ctrlChange=function($,rn,dn){for(var mn=0;mn<g.fCtrlLabel[rn].length;mn++){var cn=g.fCtrlLabel[rn][mn].path;g.setParamValue(cn,faust.remap(dn,0,127,g.fCtrlLabel[rn][mn].min,g.fCtrlLabel[rn][mn].max)),g.output_handler&&g.output_handler(cn,g.getParamValue(cn))}},g.pitchWheel=function($,rn){for(var dn=0;dn<g.fPitchwheelLabel.length;dn++){var mn=g.fPitchwheelLabel[dn];g.setParamValue(mn.path,faust.remap(rn,0,16383,mn.min,mn.max)),g.output_handler&&g.output_handler(mn.path,g.getParamValue(mn.path))}},g.setParamValue=function($,rn){return g.factory.setParamValue(g.dsp,g.pathTable[$],rn)},g.getParamValue=function($){return g.factory.getParamValue(g.dsp,g.pathTable[$])},g.getParams=function(){return g.inputs_items},g.getJSON=function(){return e.getJSON()},g.initAux(),i(g)}).catch(function(h){faust.error_msg="Faust DSP cannot be instantiated",i(null)})};faust.deleteDSPInstance=function(e){};var mydspProcessorString=`

    'use strict';

    function getJSONmydsp() { return \`GETJSON\`; }
    function getBase64Codemydsp() { return \`GETBASE64CODE\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
`;faust.createDSPWorkletInstanceAux=function(e,o,a){o.resume().catch(()=>{});var i=new AudioWorkletNode(o,e.name,{numberOfInputs:parseInt(e.json_object.inputs)>0?1:0,numberOfOutputs:parseInt(e.json_object.outputs)>0?1:0,channelCount:Math.max(1,parseInt(e.json_object.inputs)),outputChannelCount:[parseInt(e.json_object.outputs)],channelCountMode:"explicit",channelInterpretation:"speakers"});i.onprocessorerror=()=>{console.log("An error from mydspProcessor was detected.")},i.handleMessage=function(c){var h=c.data;this.output_handler&&this.output_handler(h.path,h.value)},i.init=function(){this.parse_ui=function(h,g){for(var Z=0;Z<h.length;Z++)this.parse_group(h[Z],g)},this.parse_group=function(h,g){h.items&&this.parse_items(h.items,g)},this.parse_items=function(h,g){for(var Z=0;Z<h.length;Z++)this.parse_item(h[Z],g)},this.parse_item=function(h,g){if(h.type==="vgroup"||h.type==="hgroup"||h.type==="tgroup")this.parse_items(h.items,g);else if(h.type==="hbargraph"||h.type==="vbargraph")g.outputs_items.push(h.address);else if((h.type==="vslider"||h.type==="hslider"||h.type==="button"||h.type==="checkbox"||h.type==="nentry")&&(g.inputs_items.push(h.address),h.meta!==void 0))for(var Z=0;Z<h.meta.length;Z++)h.meta[Z].midi!==void 0&&(h.meta[Z].midi.trim()==="pitchwheel"?g.fPitchwheelLabel.push({path:h.address,min:parseFloat(h.min),max:parseFloat(h.max)}):h.meta[Z].midi.trim().split(" ")[0]==="ctrl"&&g.fCtrlLabel[parseInt(h.meta[Z].midi.trim().split(" ")[1])].push({path:h.address,min:parseFloat(h.min),max:parseFloat(h.max)}))},this.output_handler=null,this.json_object=e.json_object,this.inputs_items=[],this.outputs_items=[],this.fPitchwheelLabel=[],this.fCtrlLabel=new Array(128);for(var c=0;c<this.fCtrlLabel.length;c++)this.fCtrlLabel[c]=[];this.parse_ui(this.json_object.ui,this),this.port.onmessage=this.handleMessage.bind(this)},i.init(),i.destroy=function(){this.port.postMessage({type:"destroy"}),this.port.close()},i.getJSON=function(){return e.getJSON()},i.setParamValue=function(c,h){this.parameters.get(c).setValueAtTime(h,0)},i.getParamValue=function(c){return this.parameters.get(c).value},i.setOutputParamHandler=function(c){this.output_handler=c},i.getOutputParamHandler=function(){return this.output_handler},i.getNumInputs=function(){return parseInt(e.json_object.inputs)},i.getNumOutputs=function(){return parseInt(e.json_object.outputs)},i.inputChannelCount=function(){return parseInt(e.json_object.inputs)},i.outputChannelCount=function(){return parseInt(e.json_object.outputs)},i.getParams=function(){return this.inputs_items},i.getDescriptor=function(){return this.inputs_items},i.ctrlChange=function(c,h,g){for(var Z=0;Z<this.fCtrlLabel[h].length;Z++){var $=this.fCtrlLabel[h][Z].path;this.setParamValue($,i.remap(g,0,127,this.fCtrlLabel[h][Z].min,this.fCtrlLabel[h][Z].max)),this.output_handler&&this.output_handler($,this.getParamValue($))}},i.pitchWheel=function(c,h){for(var g=0;g<this.fPitchwheelLabel.length;g++){var Z=this.fPitchwheelLabel[g];this.setParamValue(Z.path,i.remap(h,0,16383,Z.min,Z.max)),this.output_handler&&this.output_handler(Z.path,this.getParamValue(Z.path))}},i.midiMessage=function(c){var h=c[0]>>4,g=c[0]&15,Z=c[1],$=c[2];g!==9&&(h===11?this.ctrlChange(g,Z,$):h===14&&this.pitchWheel(g,$*128+Z))},i.onMidi=function(c){this.midiMessage(c)},i.getState=async function(){var c=new Object;for(let h=0;h<this.getDescriptor().length;h++)Object.assign(c,{[this.getDescriptor()[h]]:`${this.getParam(this.getDescriptor()[h])}`});return new Promise(h=>{h(c)})},i.setState=async function(c){return new Promise(h=>{for(const g in c)c.hasOwnProperty(g)&&this.setParam(g,c[g]);try{this.gui.setAttribute("state",JSON.stringify(c))}catch(g){console.warn("Plugin without gui or GUI not defined",g)}h(c)})},i.setPatch=function(c){this.setState(this.presets[c])},i.metadata=function(c){},i.remap=function(c,h,g,Z,$){return 1*(c-h)/(g-h)*($-Z)+Z},a(i)};faust.createDSPWorkletInstance=function(e,o,a){var i=/mydsp/g,c=/GETJSON/g,h=/GETBASE64CODE/g,g=mydspProcessorString.replace(i,e.name),Z=g.replace(c,e.getJSON()),$=Z.replace(h,e.getBase64Code()),rn=window.URL.createObjectURL(new Blob([$],{type:"text/javascript"}));o.audioWorklet.addModule(rn).then(function(){faust.createDSPWorkletInstanceAux(e,o,a)}).catch(function(dn){alert(dn)})};faust.deleteDSPWorkletInstance=function(e){};faust.ready;function isUItemGroup(e){return["hgroup","vgroup","tgroup"].includes(e.type)}function isUItemNumber(e){return["hslider","vslider","nentry"].includes(e.type)}function isUItemBoolean(e){return["button","checkbox"].includes(e.type)}function isUItemBarGraph(e){return["vbargraph","hbargraph"].includes(e.type)}const factoryCache=new Map;async function compile(e,o){const a=["-ftz","2","-I","http://127.0.0.1:8000/../../libraries/"];let i=factoryCache.get(o);i||(i=new Promise(Z=>faust.createDSPFactory(o,a,Z)),factoryCache.set(o,i));const c=await i;if(!c)throw new Error(faust.error_msg);const h=await new Promise(Z=>faust.createDSPWorkletInstance(c,e,Z));if(!h)throw new Error(faust.error_msg);h.ui=JSON.parse(h.getJSON()).ui;const g=new Map;return h.setOutputParamHandler((Z,$)=>{g.set(Z,$)}),h.getOutputValue=Z=>{var $;return($=g.get(Z))!=null?$:0},h}async function audioSource(e){const o=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1}});return e.createMediaStreamSource(o)}function useFaustLivePlayer(e,o){const a=react.exports.useRef(0),i=react.exports.useRef(),[c,h]=react.exports.useState();return react.exports.useEffect(()=>{if(!isDspLive(o))return;const g=++a.current;return compile(e,o.dsp).then(async Z=>{if(a.current!==g)return;let $;Z.numberOfInputs>0&&($=await audioSource(e),$.connect(Z)),Z.connect(e.destination),i.current=Z,h({ui:Z.ui,params:Z.getParams(),node:Z,source:$,audioContext:e})}),()=>{i.current&&(i.current.disconnect(),i.current.destroy())}},[o]),c}function audioBufferToWav$2(e,o){o=o||{};var a=e.numberOfChannels,i=e.sampleRate,c=o.float32?3:1,h=c===3?32:16,g;return a===2?g=interleave$2(e.getChannelData(0),e.getChannelData(1)):g=e.getChannelData(0),encodeWAV$2(g,c,i,a,h)}function encodeWAV$2(e,o,a,i,c){var h=c/8,g=i*h,Z=new ArrayBuffer(44+e.length*h),$=new DataView(Z);return writeString$2($,0,"RIFF"),$.setUint32(4,36+e.length*h,!0),writeString$2($,8,"WAVE"),writeString$2($,12,"fmt "),$.setUint32(16,16,!0),$.setUint16(20,o,!0),$.setUint16(22,i,!0),$.setUint32(24,a,!0),$.setUint32(28,a*g,!0),$.setUint16(32,g,!0),$.setUint16(34,c,!0),writeString$2($,36,"data"),$.setUint32(40,e.length*h,!0),o===1?floatTo16BitPCM$2($,44,e):writeFloat32$2($,44,e),Z}function interleave$2(e,o){for(var a=e.length+o.length,i=new Float32Array(a),c=0,h=0;c<a;)i[c++]=e[h],i[c++]=o[h],h++;return i}function writeFloat32$2(e,o,a){for(var i=0;i<a.length;i++,o+=4)e.setFloat32(o,a[i],!0)}function floatTo16BitPCM$2(e,o,a){for(var i=0;i<a.length;i++,o+=2){var c=Math.max(-1,Math.min(1,a[i]));e.setInt16(o,c<0?c*32768:c*32767,!0)}}function writeString$2(e,o,a){for(var i=0;i<a.length;i++)e.setUint8(o+i,a.charCodeAt(i))}function isObjectType$2(e,o){return Object.prototype.toString.call(o)===`[object ${e}]`}function isAudioArray$2(e){return Array.isArray(e)&&e.length>0&&Array.isArray(e[0])}function isFloat32AudioArray$2(e){return Array.isArray(e)&&e.length>0&&isObjectType$2("Float32Array",e[0])}function isAudioBuffer$2(e){return isObjectType$2("AudioBuffer",e)}function isArrayBuffer$2(e){return isObjectType$2("ArrayBuffer",e)}function audioArrayToAudioBuffer$2(e,o){const a=o.createBuffer(e.length,e[0].length,o.sampleRate);for(let i=0;i<a.numberOfChannels;i++){const c=a.getChannelData(i);for(let h=0;h<a.length;h++)c[h]=e[i][h]}return a}function audioBufferToFloat32AudioArray$2(e){const o=[];for(let a=0;a<e.numberOfChannels;a++)o.push(e.getChannelData(a));return o}function arrayToFloat32AudioArray$2(e){return e.map(o=>new Float32Array(o))}function float32ArrayToAudioArray(e){return e.map(o=>Array.from(o))}async function arrayBufferToAudioBuffer$2(e,o){return await new Promise(a=>o.decodeAudioData(e,a))}function arrayBufferToWavBlob(e){return new Blob([new DataView(e)],{type:"audio/wav"})}function toAudioArray(e){if(isAudioBuffer$2(e)&&(e=audioBufferToFloat32AudioArray$2(e)),isFloat32AudioArray$2(e))return float32ArrayToAudioArray(e);if(isAudioArray$2(e))return e;throw new Error(`toArray: unconvertible input type: ${e}`)}function toFloat32AudioArray$2(e){if(isFloat32AudioArray$2(e))return e;if(isAudioArray$2(e))return arrayToFloat32AudioArray$2(e);if(isAudioBuffer$2(e))return audioBufferToFloat32AudioArray$2(e);throw new Error(`toFloat32AudioArray: unconvertible input type: ${e}`)}async function toAudioBuffer$2(e,o=new AudioContext){if(isAudioBuffer$2(e))return e;if(isArrayBuffer$2(e))return arrayBufferToAudioBuffer$2(e,o);if(isAudioArray$2(e)||isFloat32AudioArray$2(e))return audioArrayToAudioBuffer$2(e,o);throw new Error(`toAudioBuffer: unconvertible input type: ${e}`)}async function toArrayBuffer$2(e,o=new AudioContext){if(isArrayBuffer$2(e))return e;const a=await toAudioBuffer$2(e,o);return audioBufferToWav$2(a,{float32:!0})}async function toWavBlob(e){const o=await toArrayBuffer$2(e);return arrayBufferToWavBlob(o)}async function downloadWav(e,o){const a=await toWavBlob(e);downloadBlob(a,`${o}.wav`)}function downloadBlob(e,o){const a=URL.createObjectURL(e),i=document.createElement("a");document.body.appendChild(i),i.href=a,i.download=o,i.click(),i.remove(),URL.revokeObjectURL(a)}function logChannels(e,o){e.forEach(a=>o(Array.from(a)))}const cache=new Map;async function faustOfflineRender(e){const o=cache.get(e);if(o)return o;const{outputLength:a,sampleRate:i,channels:c,dsp:h,inputFile:g,output:Z=["process"],expect:$}=e;let{input:rn=[]}=e;const dn=await Promise.all(Z.map(async mn=>{var yn,Mn;let cn=h;if(mn!=="process"){const An=h.split(`
`),Rn=An.findIndex(Sn=>Sn.startsWith(`${mn} `));cn=[...An.slice(0,Rn+1),`process = ${mn};`].join(`
`)}const vn=(Mn=(yn=rn[0])==null?void 0:yn.length)!=null?Mn:0,gn=new OfflineAudioContext(c,a!=null?a:vn,i);if(g){const An=await fetch(g);if(!An.ok)throw new Error(`Could not load sound file "${rn}"`);const Rn=await An.arrayBuffer(),Sn=await toAudioBuffer$2(Rn,gn);rn=toAudioArray(Sn)}console.log("input:"),logChannels(rn!=null?rn:[],console.log);const Pn=await compile(gn,cn);if(rn.length===0)Pn.connect(gn.destination);else{const An=gn.createBufferSource();An.buffer=await toAudioBuffer$2(rn,gn),An.connect(Pn),Pn.connect(gn.destination),An.start()}const xn=await gn.startRendering(),un=toFloat32AudioArray$2(xn),ln=$?toFloat32AudioArray$2($[mn]):void 0;let fn=!0;return $&&(fn=JSON.stringify(un)===JSON.stringify(ln)),Pn.destroy(),{name:mn,output:un,expected:ln,passed:fn}},Promise.resolve({})));return cache.set(e,dn),dn}function useFaustOfflineRenderer(e){const[o,a]=react.exports.useState(void 0),i=react.exports.useRef(!1);return react.exports.useEffect(()=>{i.current||!isDspOffline(e)||(i.current=!0,faustOfflineRender(e).then(c=>{c.forEach(h=>{console.log(`${h.name}:`),logChannels(h.output,console.log),h.expected&&!h.passed&&(console.warn("incorrect output - expected:"),logChannels(h.expected,console.warn))}),a(c)}))},[e]),o}function useDspCallback(e,o){react.exports.useEffect(()=>{if(!isDspCallback(e))return;const a=e.callback(o);return()=>{(async()=>(await a)())()}},[e,o])}const dsp$b=`
import("stdfaust.lib");
process = os.osc(440.0);
`,dspDefinition$f={id:"sine-wave",name:"Sine wave",description:"Makes a sine wave at 440Hz",dsp:dsp$b,type:"offline",outputLength:1e3,sampleRate:44100,channels:1},dsp$a=`
import("stdfaust.lib");
process = *(0.5),*(0.25);
`,dspDefinition$e={id:"attenuator",name:"Attenuator",description:"Makes an input signal quieter",dsp:dsp$a,type:"offline",input:[[4,3,2,1,2,3,4,5,5,5,5,5,5,5,5],[4,3,2,1,2,3,4,5,5,5,5,5,5,5,5]],channels:2,sampleRate:44100},dsp$9=`
import("stdfaust.lib");
N = 3;
scan = ba.selectn(N, ba.period(N));

find_by_index(op, n, x) = compute ~ (_,_,_,_) : (!,!,!,_)
  with {
    compute(acc, index, count, val) =
      ba.if(count<n, ba.if(op(acc,x), acc, x), x), // new acc
      ba.if(count<n, ba.if(op(acc,x), index, count), 0), // new index
      ba.if(count<n, count+1, 1), // new count
      ba.if(count<n, val, index); // new val
  };

process = scan : find_by_index(>, N);
`,dspDefinition$d={id:"block-max",name:"Block max",description:"Finds the max value from a set of N parallel channels per N ticks",dsp:dsp$9,type:"offline",sampleRate:44100,channels:1,input:[[4,1,2,9,1,2,0,0,0,1,2,1,10,10,10],[3,4,5,3,4,3,0,1,0,3,4,4,11,11,11],[0,0,0,3,4,3,0,0,0,0,4,5,10,10,10]],output:["scan","process"],outputLength:18,expect:{scan:[[4,4,0,9,4,3,0,1,0,1,4,5,10,11,10,0,0,0]],process:[[0,0,0,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1]]}},dsp$8=`
import("stdfaust.lib");

tune1 = waveform{69,-1,73,-1,71,73,71,0};
tune2 = waveform{73,-1,76,-1,74,76,74,0};
tune3 = waveform{45,-1,0,0,40,-1,0,0};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

process = voice1 + voice2 + voice3 <: _,_;
`,dspDefinition$c={id:"live-tune",name:"Live tune",description:"Makes a live tune",dsp:dsp$8,type:"live"},dsp$7=`
import("stdfaust.lib");
process = os.osc(440.0) <: ;
`,dspDefinition$b={id:"syntax-error",name:"Syntax error",description:"Shows what happens if the dsp contains a syntax error.",dsp:dsp$7,type:"offline",outputLength:10,sampleRate:44100,channels:1},dsp$6=`
import("stdfaust.lib");

// osc
gate = button("gate");
pitch = hslider("pitch", 69, 0, 128, 0.0001) : si.smoo;

// env
volA = hslider("attack",0.01,0.01,4,0.01);
volD = hslider("decay",2.6,0.01,8,0.01);
volS = hslider("sustain",0.2,0,1,0.01);
volR = hslider("release",2.0,0.01,8,0.01);

// osc
pmGain = hslider("pm_gain",500.0,0.0,1000.0,1.0) : si.smoo;
pmMulti = hslider("pm_multi",10.0,1.0,24.0,1.0) : si.smoo;
pmDenom = hslider("pm_denom",2.0,1.0,24.0,1.0) : si.smoo;

envelop = hgroup("group", en.adsre(volA,volD,volS,volR,gate));
vol = envelop;

osc(f) = os.osc(f + (pmGain * envelop * os.osc(f * pmMulti / pmDenom))) : fi.dcblocker;

fx = osc(pitch : ba.midikey2hz) * vol * 0.3;

process = fx <: _,_;
`,dspDefinition$a={id:"pm-synth",name:"PM synth",description:"Phase modulation synth",dsp:dsp$6,type:"live"},dsp$5=`
import("stdfaust.lib");

changed(x) = x != x';

layerIsAwake(l,x,t) = return with {
    layerChange = l : changed;
    startPos = x : ba.sAndH(layerChange);
    nudged = abs(x - startPos) > t;
    return = layerChange,nudged : ba.on_and_off : _ == 0;
};

layerValue(l,i,x) = return with {
    return = x : ba.sAndH((l == i) & layerIsAwake(l,knob,0.1));
};

layer = hslider("layer", 0.0, 0.0, 2.0, 1.0);
knob = hslider("knob", 0.0, 0.0, 1.0, 0.001);

layerOutput(i) = layerValue(layer,i,knob): hbargraph("value %i", 0.0, 1.0);

process = par(i, 3, layerOutput(i));
`,dspDefinition$9={id:"param-layers",name:"Param layers",description:"Control multiples variables via a single slider and a layer selector",dsp:dsp$5,type:"live"},dsp$4=`
import("stdfaust.lib");
process = _;
`,dspDefinition$8={id:"passthrough-mono",name:"Passthrough mono",description:"Passes through a single mono signal",dsp:dsp$4,type:"live"},dsp$3=`
import("stdfaust.lib");
process = _,_;
`,dspDefinition$7={id:"passthrough-stereo",name:"Passthrough stereo",description:"Passes through a stereo signal",dsp:dsp$3,type:"live"};async function callback$3(e){const o=await audioSource(e);return o.connect(e.destination),()=>{o.disconnect(e.destination)}}const dspDefinition$6={id:"record-line-in",name:"Record line-in",description:"Records a line-in signal into a buffer and plays it back.",type:"callback",callback:callback$3};var runInIframeInnerStringified$2=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (message.source !== window.parent || message.origin !== window.location.origin) {
        return;
      }
      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);
  });
}
async function sendResult(result, transferrables) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}
async function runInIframeInner(callback) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
exports.runInIframeInner = runInIframeInner;
`;async function runInIframe$2(e){const{functionString:o,params:a,transferrables:i=[]}=e,c=document.createElement("iframe");c.style.display="none",document.body.append(c);const{contentWindow:h}=c;if(!h)throw new Error("contentWindow not available on iframe");return h.document.write(`<script>
      var exports = {};
      ${o}
      ${runInIframeInnerStringified$2}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(g=>{const Z=$=>{$.source===h&&(window.removeEventListener("message",Z),c.remove(),g($.data))};window.addEventListener("message",Z),h.postMessage(a,window.location.origin,i)})}async function callback$2(){console.log("go");const e=await runInIframe$2({functionString:`
    exports.run = async function run(params) {
      const audioArray = [[params.foo,1,2,3,4,5,6,7,8,9,10]];
      return [{audioArray}];
    };
  `,params:{foo:9}});return console.log("result",e),()=>{}}const dspDefinition$5={id:"iframe-render-test",name:"Iframe render test",description:"Try to render data in an iframe",type:"callback",callback:callback$2},dsp$2=`
import("stdfaust.lib");
input = _,_;
louder = *(4.0);
process = input : louder,louder;
`,dspDefinition$4={id:"sample-input-offline",name:"Sample input",description:"Pipes a sample into an offline render",dsp:dsp$2,type:"offline",inputFile:"/audio/tonejs-instruments/harp/B5.wav",output:["input","process"],outputLength:44100,sampleRate:44100,channels:1},dsp$1=`
import("stdfaust.lib");

//
// consts
//

bands = 12;

//
// input tune
//

tune1 = waveform{69,-1,74,73,71,78,76,73};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,0.5)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(5.0) * 0.2);

synth(gate) = vibrato : -(24.0) : ba.midikey2hz : os.sawtooth : *(gate : si.smoo) : *(0.1);
tune = tunePlayer(tune1) : synth;

//
// find by index
//

scan = ba.selectn(bands, ba.period(bands));

find_by_index(op, n, x) = compute ~ (_,_,_,_) : (!,!,!,_)
  with {
    compute(acc, index, count, val) =
      ba.if(count<n, ba.if(op(acc,x), acc, x), x), // new acc
      ba.if(count<n, ba.if(op(acc,x), index, count), 0), // new index
      ba.if(count<n, count+1, 1), // new count
      ba.if(count<n, val, index); // new val
  };

//
// wet dry
//

wet_dry(fn) = _ <: _ * 0.2,fn;

//
// controls
//

note = hslider("note", 45.0, 20.0, 128.0, 1.0);
q = hslider("q", 5.0, 0.1, 200.0, 0.1);
gain = hslider("gain", 0.5, 0.0, 1.0, 0.1);
follower_release = hslider("follower release", 0.01, 0.0, 0.5, 0.001);

//
// detector
//

notelane(hz) = fi.resonbp(hz,q,gain) : *(0.1) : an.amp_follower(follower_release);
each(i) = notelane(ba.midikey2hz(note + i)) : hbargraph("%i level", 0.0, 1.0);

detect_levels = _ <: par(i,bands,each(i));
levels_to_note = scan : find_by_index(>, bands) : +(note) <: attach(_, hbargraph("detected", 0.0, bands));
play_note(n) = os.square(ba.midikey2hz(n)) : *(0.1);

process = tune : wet_dry(detect_levels : levels_to_note : play_note) : _,_;
`,dspDefinition$3={id:"partial-detector",name:"Partial detector",description:"A filter to isolate narrow bands of frequency content",dsp:dsp$1,type:"live"},dsp=`
import("stdfaust.lib");

//
// input tune
//

tune1 = waveform{69,-1,73,-1,71,73,71,0};
tune2 = waveform{73,-1,76,-1,74,76,74,0};
tune3 = waveform{45,-1,0,0,40,-1,0,0};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

input = voice1 + voice2 + voice3;

//
// pitch down
//

tablesize = 100000;
bypass_fade_time = 0.005;

trigger = button("trigger");
speed = hslider("speed",0.95,0.0,1.0,0.0001) : si.smoo;

sweep_at_speed(period,run,speed) = period,run : %(int(*:max(1)))~+(speed);

trigger_with_tail = en.asr(0,1.0,bypass_fade_time,trigger) <: attach(_, hbargraph("trigger out", 0, 1)) : _ > 0;
read_index = sweep_at_speed(tablesize, trigger_with_tail, speed) <: attach(_, hbargraph("read", 0, tablesize));
write_index = ba.sweep(tablesize, trigger) <: attach(_, hbargraph("write", 0, tablesize));
table = _ <: it.frwtable(2,tablesize,0.0,write_index,_,read_index);

bypass_fade_time_samples = bypass_fade_time * ma.SR : int;
process = input : ba.bypass_fade(bypass_fade_time_samples, trigger == 0, table) <: _,_;
`,dspDefinition$2={id:"pitch-down",name:"Pitch down",description:"Captures live input and plays it back slightly slower on a trigger",dsp,type:"live"};var offlineRenderInnerStringified$1=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function audioBufferToWav(buffer, opt) {
  opt = opt || {};
  var numChannels = buffer.numberOfChannels;
  var sampleRate = buffer.sampleRate;
  var format = opt.float32 ? 3 : 1;
  var bitDepth = format === 3 ? 32 : 16;
  var result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }
  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}
function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8;
  var blockAlign = numChannels * bytesPerSample;
  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  var view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }
  return buffer;
}
function interleave(inputL, inputR) {
  var length = inputL.length + inputR.length;
  var result = new Float32Array(length);
  var index = 0;
  var inputIndex = 0;
  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}
function writeFloat32(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}
function floatTo16BitPCM(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
  }
}
function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
function isObjectType(type, value) {
  return Object.prototype.toString.call(value) === \`[object \${type}]\`;
}
function isAudioArray(value) {
  return Array.isArray(value) && value.length > 0 && Array.isArray(value[0]);
}
function isFloat32AudioArray(value) {
  return Array.isArray(value) && value.length > 0 && isObjectType("Float32Array", value[0]);
}
function isAudioBuffer(value) {
  return isObjectType("AudioBuffer", value);
}
function isArrayBuffer(value) {
  return isObjectType("ArrayBuffer", value);
}
function audioArrayToAudioBuffer(channels, audioCtx) {
  const buffer = audioCtx.createBuffer(channels.length, channels[0].length, audioCtx.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}
async function arrayBufferToAudioBuffer(arrayBuffer, audioCtx) {
  return await new Promise((resolve) => audioCtx.decodeAudioData(arrayBuffer, resolve));
}
async function toAudioBuffer(input, audioCtx = new AudioContext()) {
  if (isAudioBuffer(input)) {
    return input;
  }
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtx = new AudioContext()) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const buffer = await toAudioBuffer(input, audioCtx);
  return audioBufferToWav(buffer, { float32: true });
}
function offlineRenderInner(callback) {
  return async (params) => {
    const { channels, length, sampleRate, inputArrayBuffer, props } = params;
    const offlineContext = new OfflineAudioContext(channels, length, sampleRate);
    let source;
    if (inputArrayBuffer) {
      source = offlineContext.createBufferSource();
      source.buffer = await toAudioBuffer(inputArrayBuffer, offlineContext);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav$1(e,o){o=o||{};var a=e.numberOfChannels,i=e.sampleRate,c=o.float32?3:1,h=c===3?32:16,g;return a===2?g=interleave$1(e.getChannelData(0),e.getChannelData(1)):g=e.getChannelData(0),encodeWAV$1(g,c,i,a,h)}function encodeWAV$1(e,o,a,i,c){var h=c/8,g=i*h,Z=new ArrayBuffer(44+e.length*h),$=new DataView(Z);return writeString$1($,0,"RIFF"),$.setUint32(4,36+e.length*h,!0),writeString$1($,8,"WAVE"),writeString$1($,12,"fmt "),$.setUint32(16,16,!0),$.setUint16(20,o,!0),$.setUint16(22,i,!0),$.setUint32(24,a,!0),$.setUint32(28,a*g,!0),$.setUint16(32,g,!0),$.setUint16(34,c,!0),writeString$1($,36,"data"),$.setUint32(40,e.length*h,!0),o===1?floatTo16BitPCM$1($,44,e):writeFloat32$1($,44,e),Z}function interleave$1(e,o){for(var a=e.length+o.length,i=new Float32Array(a),c=0,h=0;c<a;)i[c++]=e[h],i[c++]=o[h],h++;return i}function writeFloat32$1(e,o,a){for(var i=0;i<a.length;i++,o+=4)e.setFloat32(o,a[i],!0)}function floatTo16BitPCM$1(e,o,a){for(var i=0;i<a.length;i++,o+=2){var c=Math.max(-1,Math.min(1,a[i]));e.setInt16(o,c<0?c*32768:c*32767,!0)}}function writeString$1(e,o,a){for(var i=0;i<a.length;i++)e.setUint8(o+i,a.charCodeAt(i))}function isObjectType$1(e,o){return Object.prototype.toString.call(o)===`[object ${e}]`}function isAudioArray$1(e){return Array.isArray(e)&&e.length>0&&Array.isArray(e[0])}function isFloat32AudioArray$1(e){return Array.isArray(e)&&e.length>0&&isObjectType$1("Float32Array",e[0])}function isAudioBuffer$1(e){return isObjectType$1("AudioBuffer",e)}function isArrayBuffer$1(e){return isObjectType$1("ArrayBuffer",e)}function audioArrayToAudioBuffer$1(e,o){const a=o.createBuffer(e.length,e[0].length,o.sampleRate);for(let i=0;i<a.numberOfChannels;i++){const c=a.getChannelData(i);for(let h=0;h<a.length;h++)c[h]=e[i][h]}return a}function audioBufferToFloat32AudioArray$1(e){const o=[];for(let a=0;a<e.numberOfChannels;a++)o.push(e.getChannelData(a));return o}function arrayToFloat32AudioArray$1(e){return e.map(o=>new Float32Array(o))}async function arrayBufferToAudioBuffer$1(e,o){return await new Promise(a=>o.decodeAudioData(e,a))}function toFloat32AudioArray$1(e){if(isFloat32AudioArray$1(e))return e;if(isAudioArray$1(e))return arrayToFloat32AudioArray$1(e);if(isAudioBuffer$1(e))return audioBufferToFloat32AudioArray$1(e);throw new Error(`toFloat32AudioArray: unconvertible input type: ${e}`)}async function toAudioBuffer$1(e,o=new AudioContext){if(isAudioBuffer$1(e))return e;if(isArrayBuffer$1(e))return arrayBufferToAudioBuffer$1(e,o);if(isAudioArray$1(e)||isFloat32AudioArray$1(e))return audioArrayToAudioBuffer$1(e,o);throw new Error(`toAudioBuffer: unconvertible input type: ${e}`)}async function toArrayBuffer$1(e,o=new AudioContext){if(isArrayBuffer$1(e))return e;const a=await toAudioBuffer$1(e,o);return audioBufferToWav$1(a,{float32:!0})}var runInIframeInnerStringified$1=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (message.source !== window.parent || message.origin !== window.location.origin) {
        return;
      }
      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);
  });
}
async function sendResult(result, transferrables) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}
async function runInIframeInner(callback) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
exports.runInIframeInner = runInIframeInner;
`;async function runInIframe$1(e){const{functionString:o,params:a,transferrables:i=[]}=e,c=document.createElement("iframe");c.style.display="none",document.body.append(c);const{contentWindow:h}=c;if(!h)throw new Error("contentWindow not available on iframe");return h.document.write(`<script>
      var exports = {};
      ${o}
      ${runInIframeInnerStringified$1}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(g=>{const Z=$=>{$.source===h&&(window.removeEventListener("message",Z),c.remove(),g($.data))};window.addEventListener("message",Z),h.postMessage(a,window.location.origin,i)})}async function offlineRender$1(e){var mn,cn;const{functionString:o="",channels:a,sampleRate:i,input:c,props:h}=e;let{length:g}=e,Z,$=[];c&&(Z=await toArrayBuffer$1(c),$=[Z],g===void 0&&(g=(cn=(mn=toFloat32AudioArray$1(c)[0])==null?void 0:mn.length)!=null?cn:0));const rn=await runInIframe$1({functionString:`
      ${offlineRenderInnerStringified$1}
      ${o}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:a,sampleRate:i,inputArrayBuffer:Z,length:g!=null?g:0,props:h},transferrables:$}),dn=await toAudioBuffer$1(rn);return toFloat32AudioArray$1(dn)}async function callback$1(){return console.log("go"),console.log("result",await offlineRender$1({channels:2,sampleRate:48e3,length:5,input:[[1,.5,0,3],[1,.5,0,3]],functionString:`exports.buildContext = async function buildContext(offlineCtx, source) {
      source.connect(offlineCtx.destination);
    };`})),()=>{}}const dspDefinition$1={id:"offline-render-test",name:"Offline render test",description:"Try to render audio offline",type:"callback",callback:callback$1};var offlineRenderDspInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaustModule = function() {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  if (typeof __filename !== "undefined")
    _scriptDir = _scriptDir || __filename;
  return function(FaustModule2) {
    FaustModule2 = FaustModule2 || {};
    var Module = typeof FaustModule2 !== "undefined" ? FaustModule2 : {};
    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;
    (function() {
      var loadPackage = function(metadata) {
        if (typeof window === "object") {
          window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/");
        } else if (typeof location !== "undefined") {
          encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
        } else {
          throw "using preloaded data can only be done on a web page or in a web worker";
        }
        var PACKAGE_NAME = "../../lib/libfaust-wasm.data";
        var REMOTE_PACKAGE_BASE = "libfaust-wasm.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
          Module["locateFile"] = Module["locateFilePackage"];
          err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)");
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];
        metadata["package_uuid"];
        function fetchRemotePackage(packageName, packageSize, callback2, errback) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", packageName, true);
          xhr.responseType = "arraybuffer";
          xhr.onprogress = function(event) {
            var url = packageName;
            var size = packageSize;
            if (event.total)
              size = event.total;
            if (event.loaded) {
              if (!xhr.addedTotal) {
                xhr.addedTotal = true;
                if (!Module.dataFileDownloads)
                  Module.dataFileDownloads = {};
                Module.dataFileDownloads[url] = {
                  loaded: event.loaded,
                  total: size
                };
              } else {
                Module.dataFileDownloads[url].loaded = event.loaded;
              }
              var total = 0;
              var loaded = 0;
              var num = 0;
              for (var download in Module.dataFileDownloads) {
                var data = Module.dataFileDownloads[download];
                total += data.total;
                loaded += data.loaded;
                num++;
              }
              total = Math.ceil(total * Module.expectedDataFileDownloads / num);
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data... (" + loaded + "/" + total + ")");
            } else if (!Module.dataFileDownloads) {
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data...");
            }
          };
          xhr.onerror = function(event) {
            throw new Error("NetworkError for: " + packageName);
          };
          xhr.onload = function(event) {
            if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
              var packageData = xhr.response;
              callback2(packageData);
            } else {
              throw new Error(xhr.statusText + " : " + xhr.responseURL);
            }
          };
          xhr.send(null);
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched)
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
            if (fetchedCallback) {
              fetchedCallback(data);
              fetchedCallback = null;
            } else {
              fetched = data;
            }
          });
        function runWithFS() {
          function assert2(check, msg) {
            if (!check)
              throw msg + new Error().stack;
          }
          Module["FS_createPath"]("/", "libraries", true, true);
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module["addRunDependency"]("fp " + this.name);
            },
            send: function() {
            },
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
              Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
              Module["removeRunDependency"]("fp " + that.name);
              this.requests[this.name] = null;
            }
          };
          var files = metadata["files"];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"]).open("GET", files[i]["filename"]);
          }
          function processPackageData(arrayBuffer) {
            Module.finishedDataFileDownloads++;
            assert2(arrayBuffer, "Loading data file failed.");
            assert2(arrayBuffer instanceof ArrayBuffer, "bad input to processPackageData");
            var byteArray = new Uint8Array(arrayBuffer);
            DataRequest.prototype.byteArray = byteArray;
            var files2 = metadata["files"];
            for (var i2 = 0; i2 < files2.length; ++i2) {
              DataRequest.prototype.requests[files2[i2].filename].onload();
            }
            Module["removeRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          }
          Module["addRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          if (!Module.preloadResults)
            Module.preloadResults = {};
          Module.preloadResults[PACKAGE_NAME] = { fromCache: false };
          if (fetched) {
            processPackageData(fetched);
            fetched = null;
          } else {
            fetchedCallback = processPackageData;
          }
        }
        if (Module["calledRun"]) {
          runWithFS();
        } else {
          if (!Module["preRun"])
            Module["preRun"] = [];
          Module["preRun"].push(runWithFS);
        }
      };
      loadPackage({
        files: [
          { filename: "/libraries/hoa.lib", start: 0, end: 13105, audio: 0 },
          {
            filename: "/libraries/compressors.lib",
            start: 13105,
            end: 58859,
            audio: 0
          },
          {
            filename: "/libraries/basics.lib",
            start: 58859,
            end: 110385,
            audio: 0
          },
          {
            filename: "/libraries/dx7.lib",
            start: 110385,
            end: 179488,
            audio: 0
          },
          {
            filename: "/libraries/analyzers.lib",
            start: 179488,
            end: 212357,
            audio: 0
          },
          {
            filename: "/libraries/spats.lib",
            start: 212357,
            end: 217531,
            audio: 0
          },
          {
            filename: "/libraries/envelopes.lib",
            start: 217531,
            end: 228127,
            audio: 0
          },
          {
            filename: "/libraries/oscillators.lib",
            start: 228127,
            end: 275738,
            audio: 0
          },
          {
            filename: "/libraries/mi.lib",
            start: 275738,
            end: 293026,
            audio: 0
          },
          {
            filename: "/libraries/misceffects.lib",
            start: 293026,
            end: 314755,
            audio: 0
          },
          {
            filename: "/libraries/version.lib",
            start: 314755,
            end: 315662,
            audio: 0
          },
          {
            filename: "/libraries/webaudio.lib",
            start: 315662,
            end: 327785,
            audio: 0
          },
          {
            filename: "/libraries/math.lib",
            start: 327785,
            end: 349263,
            audio: 0
          },
          {
            filename: "/libraries/stdfaust.lib",
            start: 349263,
            end: 350533,
            audio: 0
          },
          {
            filename: "/libraries/filter.lib",
            start: 350533,
            end: 415919,
            audio: 0
          },
          {
            filename: "/libraries/delays.lib",
            start: 415919,
            end: 430403,
            audio: 0
          },
          {
            filename: "/libraries/routes.lib",
            start: 430403,
            end: 437029,
            audio: 0
          },
          {
            filename: "/libraries/soundfiles.lib",
            start: 437029,
            end: 446390,
            audio: 0
          },
          {
            filename: "/libraries/tonestacks.lib",
            start: 446390,
            end: 458744,
            audio: 0
          },
          {
            filename: "/libraries/aanl.lib",
            start: 458744,
            end: 484841,
            audio: 0
          },
          {
            filename: "/libraries/wdmodels.lib",
            start: 484841,
            end: 574662,
            audio: 0
          },
          {
            filename: "/libraries/all.lib",
            start: 574662,
            end: 575678,
            audio: 0
          },
          {
            filename: "/libraries/music.lib",
            start: 575678,
            end: 594112,
            audio: 0
          },
          {
            filename: "/libraries/tubes.lib",
            start: 594112,
            end: 943901,
            audio: 0
          },
          {
            filename: "/libraries/effect.lib",
            start: 943901,
            end: 1012931,
            audio: 0
          },
          {
            filename: "/libraries/vaeffects.lib",
            start: 1012931,
            end: 1048800,
            audio: 0
          },
          {
            filename: "/libraries/maxmsp.lib",
            start: 1048800,
            end: 1056659,
            audio: 0
          },
          {
            filename: "/libraries/platform.lib",
            start: 1056659,
            end: 1059739,
            audio: 0
          },
          {
            filename: "/libraries/synths.lib",
            start: 1059739,
            end: 1070990,
            audio: 0
          },
          {
            filename: "/libraries/sf.lib",
            start: 1070990,
            end: 1072056,
            audio: 0
          },
          {
            filename: "/libraries/fds.lib",
            start: 1072056,
            end: 1092602,
            audio: 0
          },
          {
            filename: "/libraries/reducemaps.lib",
            start: 1092602,
            end: 1097438,
            audio: 0
          },
          {
            filename: "/libraries/phaflangers.lib",
            start: 1097438,
            end: 1107359,
            audio: 0
          },
          {
            filename: "/libraries/filters.lib",
            start: 1107359,
            end: 1212987,
            audio: 0
          },
          {
            filename: "/libraries/signals.lib",
            start: 1212987,
            end: 1224932,
            audio: 0
          },
          {
            filename: "/libraries/instruments.lib",
            start: 1224932,
            end: 1234327,
            audio: 0
          },
          {
            filename: "/libraries/quantizers.lib",
            start: 1234327,
            end: 1244180,
            audio: 0
          },
          {
            filename: "/libraries/noises.lib",
            start: 1244180,
            end: 1258842,
            audio: 0
          },
          {
            filename: "/libraries/oscillator.lib",
            start: 1258842,
            end: 1278693,
            audio: 0
          },
          {
            filename: "/libraries/interpolators.lib",
            start: 1278693,
            end: 1301737,
            audio: 0
          },
          {
            filename: "/libraries/demos.lib",
            start: 1301737,
            end: 1364872,
            audio: 0
          },
          {
            filename: "/libraries/reverbs.lib",
            start: 1364872,
            end: 1402697,
            audio: 0
          },
          {
            filename: "/libraries/physmodels.lib",
            start: 1402697,
            end: 1573680,
            audio: 0
          },
          {
            filename: "/libraries/maths.lib",
            start: 1573680,
            end: 1595081,
            audio: 0
          }
        ],
        remote_package_size: 1595081,
        package_uuid: "04ea3dc2-3649-4af3-b126-173b06afc41a"
      });
    })();
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var thisProgram = "./this.program";
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module["ENVIRONMENT"]) {
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
    }
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readBinary;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS)
          nodeFS = require("fs");
        if (!nodePath)
          nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\\\/g, "/");
      }
      process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        scriptArgs;
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined")
          console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function shell_read(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary2(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
      }
    } else {
      throw new Error("environment detection error");
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"])
      Module["arguments"];
    if (!Object.getOwnPropertyDescriptor(Module, "arguments"))
      Object.defineProperty(Module, "arguments", {
        configurable: true,
        get: function() {
          abort("Module.arguments has been replaced with plain arguments_");
        }
      });
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (!Object.getOwnPropertyDescriptor(Module, "thisProgram"))
      Object.defineProperty(Module, "thisProgram", {
        configurable: true,
        get: function() {
          abort("Module.thisProgram has been replaced with plain thisProgram");
        }
      });
    if (Module["quit"])
      Module["quit"];
    if (!Object.getOwnPropertyDescriptor(Module, "quit"))
      Object.defineProperty(Module, "quit", {
        configurable: true,
        get: function() {
          abort("Module.quit has been replaced with plain quit_");
        }
      });
    assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");
    assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
    assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    if (!Object.getOwnPropertyDescriptor(Module, "read"))
      Object.defineProperty(Module, "read", {
        configurable: true,
        get: function() {
          abort("Module.read has been replaced with plain read_");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readAsync"))
      Object.defineProperty(Module, "readAsync", {
        configurable: true,
        get: function() {
          abort("Module.readAsync has been replaced with plain readAsync");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readBinary"))
      Object.defineProperty(Module, "readBinary", {
        configurable: true,
        get: function() {
          abort("Module.readBinary has been replaced with plain readBinary");
        }
      });
    var stackSave;
    var stackRestore;
    var stackAlloc;
    stackSave = stackRestore = stackAlloc = function() {
      abort("cannot use the stack before compiled code is ready to run, and has provided stack access");
    };
    function dynamicAlloc(size) {
      assert(DYNAMICTOP_PTR);
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = ret + size + 15 & -16;
      assert(end <= HEAP8.length, "failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly");
      HEAP32[DYNAMICTOP_PTR >> 2] = end;
      return ret;
    }
    function getNativeTypeSize(type) {
      switch (type) {
        case "i1":
        case "i8":
          return 1;
        case "i16":
          return 2;
        case "i32":
          return 4;
        case "i64":
          return 8;
        case "float":
          return 4;
        case "double":
          return 8;
        default: {
          if (type[type.length - 1] === "*") {
            return 4;
          } else if (type[0] === "i") {
            var bits = Number(type.substr(1));
            assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
            return bits / 8;
          } else {
            return 0;
          }
        }
      }
    }
    function warnOnce(text) {
      if (!warnOnce.shown)
        warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary"))
      Object.defineProperty(Module, "wasmBinary", {
        configurable: true,
        get: function() {
          abort("Module.wasmBinary has been replaced with plain wasmBinary");
        }
      });
    if (Module["noExitRuntime"])
      Module["noExitRuntime"];
    if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime"))
      Object.defineProperty(Module, "noExitRuntime", {
        configurable: true,
        get: function() {
          abort("Module.noExitRuntime has been replaced with plain noExitRuntime");
        }
      });
    if (typeof WebAssembly !== "object") {
      abort("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
    }
    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*")
        type = "i32";
      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;
        case "i8":
          HEAP8[ptr >> 0] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          tempI64 = [
            value >>> 0,
            (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
          ], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        default:
          abort("invalid type for setValue: " + type);
      }
    }
    var wasmMemory;
    var wasmTable = new WebAssembly.Table({
      initial: 2176,
      maximum: 2176 + 0,
      element: "anyfunc"
    });
    var ABORT = false;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        string: function(str) {
          var ret2 = 0;
          if (str !== null && str !== void 0 && str !== 0) {
            var len = (str.length << 2) + 1;
            ret2 = stackAlloc(len);
            stringToUTF8(str, ret2, len);
          }
          return ret2;
        },
        array: function(arr) {
          var ret2 = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret2);
          return ret2;
        }
      };
      function convertReturnValue(ret2) {
        if (returnType === "string")
          return UTF8ToString(ret2);
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0)
        stackRestore(stack);
      return ret;
    }
    function cwrap(ident, returnType, argTypes, opts) {
      return function() {
        return ccall(ident, returnType, argTypes, arguments);
      };
    }
    var ALLOC_STACK = 1;
    var ALLOC_NONE = 3;
    function allocate(slab, types, allocator, ptr) {
      var zeroinit, size;
      if (typeof slab === "number") {
        zeroinit = true;
        size = slab;
      } else {
        zeroinit = false;
        size = slab.length;
      }
      var singleType = typeof types === "string" ? types : null;
      var ret;
      if (allocator == ALLOC_NONE) {
        ret = ptr;
      } else {
        ret = [_malloc, stackAlloc, dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
      }
      if (zeroinit) {
        var stop;
        ptr = ret;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
          HEAP32[ptr >> 2] = 0;
        }
        stop = ret + size;
        while (ptr < stop) {
          HEAP8[ptr++ >> 0] = 0;
        }
        return ret;
      }
      if (singleType === "i8") {
        if (slab.subarray || slab.slice) {
          HEAPU8.set(slab, ret);
        } else {
          HEAPU8.set(new Uint8Array(slab), ret);
        }
        return ret;
      }
      var i = 0, type, typeSize, previousType;
      while (i < size) {
        var curr = slab[i];
        type = singleType || types[i];
        if (type === 0) {
          i++;
          continue;
        }
        assert(type, "Must know what type to store in allocate!");
        if (type == "i64")
          type = "i32";
        setValue(ret + i, curr, type);
        if (previousType !== type) {
          typeSize = getNativeTypeSize(type);
          previousType = type;
        }
        i += typeSize;
      }
      return ret;
    }
    function getMemory(size) {
      if (!runtimeInitialized)
        return dynamicAlloc(size);
      return _malloc(size);
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = u8Array[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            if ((u0 & 248) != 240)
              warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!");
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          if (u >= 2097152)
            warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4;
      }
      return len;
    }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
    function UTF16ToString(ptr) {
      assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
      var endPtr = ptr;
      var idx = endPtr >> 1;
      while (HEAP16[idx])
        ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var i = 0;
        var str = "";
        while (1) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0)
            return str;
          ++i;
          str += String.fromCharCode(codeUnit);
        }
      }
    }
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 2)
        return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF16(str) {
      return str.length * 2;
    }
    function UTF32ToString(ptr) {
      assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
      var i = 0;
      var str = "";
      while (1) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0)
          return str;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        } else {
          str += String.fromCharCode(utf32);
        }
      }
    }
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 4)
        return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
          break;
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
          ++i;
        len += 4;
      }
      return len;
    }
    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret)
        stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }
    function writeArrayToMemory(array, buffer2) {
      assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
      HEAP8.set(array, buffer2);
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >> 0] = 0;
    }
    var WASM_PAGE_SIZE = 65536;
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var STACK_BASE = 7643408, STACK_MAX = 2400528, DYNAMIC_BASE = 7643408, DYNAMICTOP_PTR = 2400368;
    assert(STACK_BASE % 16 === 0, "stack must start aligned");
    assert(DYNAMIC_BASE % 16 === 0, "heap must start aligned");
    var TOTAL_STACK = 5242880;
    if (Module["TOTAL_STACK"])
      assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
    var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY"))
      Object.defineProperty(Module, "INITIAL_MEMORY", {
        configurable: true,
        get: function() {
          abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
        }
      });
    assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
    assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== void 0 && Int32Array.prototype.set !== void 0, "JS engine does not provide full typed array support");
    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      wasmMemory = new WebAssembly.Memory({
        initial: INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      });
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_INITIAL_MEMORY = buffer.byteLength;
    assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    function writeStackCookie() {
      assert((STACK_MAX & 3) == 0);
      HEAPU32[(STACK_MAX >> 2) + 1] = 34821223;
      HEAPU32[(STACK_MAX >> 2) + 2] = 2310721022;
      HEAP32[0] = 1668509029;
    }
    function checkStackCookie() {
      var cookie1 = HEAPU32[(STACK_MAX >> 2) + 1];
      var cookie2 = HEAPU32[(STACK_MAX >> 2) + 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
      }
      if (HEAP32[0] !== 1668509029)
        abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
    function abortStackOverflow(allocSize) {
      abort("Stack overflow! Attempted to allocate " + allocSize + " bytes on the stack, but stack has only " + (STACK_MAX - stackSave() + allocSize) + " bytes available!");
    }
    (function() {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99)
        throw "Runtime error: expected the system to be little-endian!";
    })();
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback2 = callbacks.shift();
        if (typeof callback2 == "function") {
          callback2();
          continue;
        }
        var func = callback2.func;
        if (typeof func === "number") {
          if (callback2.arg === void 0) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback2.arg);
          }
        } else {
          func(callback2.arg === void 0 ? null : callback2.arg);
        }
      }
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      SOCKFS.root = FS.mount(SOCKFS, {}, null);
      if (!Module["noFSInit"] && !FS.init.initialized)
        FS.init();
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie();
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATMAIN__);
    }
    function postRun() {
      checkStackCookie();
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function getUniqueRunDependency(id) {
      var orig = id;
      while (1) {
        if (!runDependencyTracking[id])
          return id;
        id = orig + Math.random();
      }
    }
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
          runDependencyWatcher = setInterval(function() {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:");
              }
              err("dependency: " + dep);
            }
            if (shown) {
              err("(end of list)");
            }
          }, 1e4);
        }
      } else {
        err("warning: run dependency added without ID");
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err("warning: run dependency removed without ID");
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback2 = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback2();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      out(what);
      err(what);
      ABORT = true;
      var output = "abort(" + what + ") at " + stackTrace();
      what = output;
      throw new WebAssembly.RuntimeError(what);
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }
    var wasmBinaryFile = "libfaust-wasm.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(wasmBinaryFile);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        }).catch(function() {
          return getBinary();
        });
      }
      return new Promise(function(resolve, reject) {
        resolve(getBinary());
      });
    }
    function createWasm() {
      var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports22 = instance.exports;
        Module["asm"] = exports22;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      var trueModule = Module;
      function receiveInstantiatedSource(output) {
        assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
        trueModule = null;
        receiveInstance(output["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
          fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync();
      return {};
    }
    var tempDouble;
    var tempI64;
    var ASM_CONSTS = {
      299792: function($0) {
        var dsp_code = "";
        try {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", Module.UTF8ToString($0), false);
          xmlhttp.send();
          if (xmlhttp.status == 200) {
            dsp_code = xmlhttp.responseText;
          }
        } catch (e) {
          console.log(e);
        }
        return allocate(intArrayFromString(dsp_code), "i8", ALLOC_STACK);
      },
      420260: function($0) {
        faust_module.faust.wasm_instance[$0] = null;
      },
      420588: function($0) {
        return faust_module._malloc($0);
      },
      420625: function($0) {
        faust_module._free($0);
      },
      420653: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumInputs($1);
      },
      420730: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumOutputs($1);
      },
      420805: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getSampleRate($1);
      },
      420880: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.init($1, $2);
      },
      420947: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceInit($1, $2);
      },
      421018: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceConstants($1, $2);
      },
      421094: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceResetUserInterface($1);
      },
      421175: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceClear($1);
      },
      421243: function($0, $1, $2, $3, $4) {
        faust_module.faust.wasm_instance[$0].exports.compute($1, $2, $3, $4);
      }
    };
    function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
    function connectMemory() {
      faust_module.faust = faust_module.faust || {};
      faust_module.faust.memory = faust_module.faust.memory || wasmMemory;
    }
    __ATINIT__.push({
      func: function() {
        ___wasm_call_ctors();
      }
    });
    function demangle(func) {
      warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return func;
    }
    function demangleAll(text) {
      var regex = /\\b_Z[\\w\\d_]+/g;
      return text.replace(regex, function(x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }
    function jsStackTrace() {
      var err2 = new Error();
      if (!err2.stack) {
        try {
          throw new Error();
        } catch (e) {
          err2 = e;
        }
        if (!err2.stack) {
          return "(no stack trace available)";
        }
      }
      return err2.stack.toString();
    }
    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"])
        js += "\\n" + Module["extraStackTrace"]();
      return demangleAll(js);
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
    function __ZSt18uncaught_exceptionv() {
      return __ZSt18uncaught_exceptionv.uncaught_exceptions > 0;
    }
    function ___cxa_throw(ptr, type, destructor) {
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
      }
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }
    function ___handle_stack_overflow() {
      abort("stack overflow");
    }
    function ___setErrNo(value) {
      if (Module["___errno_location"])
        HEAP32[Module["___errno_location"]() >> 2] = value;
      else
        err("failed to set errno from JS");
      return value;
    }
    function ___map_file(pathname, size) {
      ___setErrNo(63);
      return -1;
    }
    var PATH = {
      splitPath: function(filename) {
        var splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function(parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: function(path) {
        var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: function(path) {
        var result = PATH.splitPath(path), root = result[0], dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function(path) {
        if (path === "/")
          return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1)
          return path;
        return path.substr(lastSlash + 1);
      },
      extname: function(path) {
        return PATH.splitPath(path)[3];
      },
      join: function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2: function(l, r) {
        return PATH.normalize(l + "/" + r);
      }
    };
    var PATH_FS = {
      resolve: function() {
        var resolvedPath = "", resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? arguments[i] : FS.cwd();
          if (typeof path !== "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charAt(0) === "/";
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "")
              break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "")
              break;
          }
          if (start > end)
            return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var TTY = {
      ttys: [],
      init: function() {
      },
      shutdown: function() {
      },
      register: function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        flush: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        read: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0)
              break;
            bytesRead++;
            buffer2[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer2[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch (e) {
                if (e.toString().indexOf("EOF") != -1)
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      }
    };
    var MEMFS = {
      ops_table: null,
      mount: function(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0);
      },
      createNode: function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: { llseek: MEMFS.stream_ops.llseek }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      getFileDataAsRegularArray: function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i)
            arr.push(node.contents[i]);
          return arr;
        }
        return node.contents;
      },
      getFileDataAsTypedArray: function(node) {
        if (!node.contents)
          return new Uint8Array(0);
        if (node.contents.subarray)
          return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage: function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity)
          return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) | 0);
        if (prevCapacity != 0)
          newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0)
          node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        return;
      },
      resizeFileStorage: function(node, newSize) {
        if (node.usedBytes == newSize)
          return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
          return;
        }
        if (!node.contents)
          node.contents = [];
        if (node.contents.length > newSize)
          node.contents.length = newSize;
        else
          while (node.contents.length < newSize)
            node.contents.push(0);
        node.usedBytes = newSize;
      },
      node_ops: {
        getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup: function(parent, name) {
          throw FS.genericErrors[44];
        },
        mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },
        unlink: function(parent, name) {
          delete parent.contents[name];
        },
        rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },
        readdir: function(node) {
          var entries = [".", ".."];
          for (var key2 in node.contents) {
            if (!node.contents.hasOwnProperty(key2)) {
              continue;
            }
            entries.push(key2);
          }
          return entries;
        },
        symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }
      },
      stream_ops: {
        read: function(stream, buffer2, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes)
            return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer2.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer2[offset + i] = contents[position + i];
          }
          return size;
        },
        write: function(stream, buffer2, offset, length, position, canOwn) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (buffer2.buffer === HEAP8.buffer) {
            if (canOwn) {
              warnOnce("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)");
            }
            canOwn = false;
          }
          if (!length)
            return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer2.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, "canOwn must imply no weird position inside the file");
              node.contents = buffer2.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer2.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer2.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer2.subarray)
            node.contents.set(buffer2.subarray(offset, offset + length), position);
          else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer2[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap: function(stream, buffer2, offset, length, position, prot, flags) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === buffer2.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            var fromHeap = buffer2.buffer == HEAP8.buffer;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            (fromHeap ? HEAP8 : buffer2).set(contents, ptr);
          }
          return { ptr, allocated };
        },
        msync: function(stream, buffer2, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          MEMFS.stream_ops.write(stream, buffer2, 0, length, offset, false);
          return 0;
        }
      }
    };
    var ERRNO_MESSAGES = {
      0: "Success",
      1: "Arg list too long",
      2: "Permission denied",
      3: "Address already in use",
      4: "Address not available",
      5: "Address family not supported by protocol family",
      6: "No more processes",
      7: "Socket already connected",
      8: "Bad file number",
      9: "Trying to read unreadable message",
      10: "Mount device busy",
      11: "Operation canceled",
      12: "No children",
      13: "Connection aborted",
      14: "Connection refused",
      15: "Connection reset by peer",
      16: "File locking deadlock error",
      17: "Destination address required",
      18: "Math arg out of domain of func",
      19: "Quota exceeded",
      20: "File exists",
      21: "Bad address",
      22: "File too large",
      23: "Host is unreachable",
      24: "Identifier removed",
      25: "Illegal byte sequence",
      26: "Connection already in progress",
      27: "Interrupted system call",
      28: "Invalid argument",
      29: "I/O error",
      30: "Socket is already connected",
      31: "Is a directory",
      32: "Too many symbolic links",
      33: "Too many open files",
      34: "Too many links",
      35: "Message too long",
      36: "Multihop attempted",
      37: "File or path name too long",
      38: "Network interface is not configured",
      39: "Connection reset by network",
      40: "Network is unreachable",
      41: "Too many open files in system",
      42: "No buffer space available",
      43: "No such device",
      44: "No such file or directory",
      45: "Exec format error",
      46: "No record locks available",
      47: "The link has been severed",
      48: "Not enough core",
      49: "No message of desired type",
      50: "Protocol not available",
      51: "No space left on device",
      52: "Function not implemented",
      53: "Socket is not connected",
      54: "Not a directory",
      55: "Directory not empty",
      56: "State not recoverable",
      57: "Socket operation on non-socket",
      59: "Not a typewriter",
      60: "No such device or address",
      61: "Value too large for defined data type",
      62: "Previous owner died",
      63: "Not super-user",
      64: "Broken pipe",
      65: "Protocol error",
      66: "Unknown protocol",
      67: "Protocol wrong type for socket",
      68: "Math result not representable",
      69: "Read only file system",
      70: "Illegal seek",
      71: "No such process",
      72: "Stale file handle",
      73: "Connection timed out",
      74: "Text file busy",
      75: "Cross-device link",
      100: "Device not a stream",
      101: "Bad font file fmt",
      102: "Invalid slot",
      103: "Invalid request code",
      104: "No anode",
      105: "Block device required",
      106: "Channel number out of range",
      107: "Level 3 halted",
      108: "Level 3 reset",
      109: "Link number out of range",
      110: "Protocol driver not attached",
      111: "No CSI structure available",
      112: "Level 2 halted",
      113: "Invalid exchange",
      114: "Invalid request descriptor",
      115: "Exchange full",
      116: "No data (for no delay io)",
      117: "Timer expired",
      118: "Out of streams resources",
      119: "Machine is not on the network",
      120: "Package not installed",
      121: "The object is remote",
      122: "Advertise error",
      123: "Srmount error",
      124: "Communication error on send",
      125: "Cross mount point (not really error)",
      126: "Given log. name not unique",
      127: "f.d. invalid for this operation",
      128: "Remote address changed",
      129: "Can   access a needed shared lib",
      130: "Accessing a corrupted shared lib",
      131: ".lib section in a.out corrupted",
      132: "Attempting to link in too many libs",
      133: "Attempting to exec a shared library",
      135: "Streams pipe error",
      136: "Too many users",
      137: "Socket type not supported",
      138: "Not supported",
      139: "Protocol family not supported",
      140: "Can't send after socket shutdown",
      141: "Too many references",
      142: "Host is down",
      148: "No medium (in tape drive)",
      156: "Level 2 not synchronized"
    };
    var ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      trackingDelegate: {},
      tracking: { openFlags: { READ: 1, WRITE: 2 } },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      handleFSError: function(e) {
        if (!(e instanceof FS.ErrnoError))
          throw e + " : " + stackTrace();
        return ___setErrNo(e.errno);
      },
      lookupPath: function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path)
          return { path: "", node: null };
        var defaults = { follow_mount: true, recurse_count: 0 };
        for (var key2 in defaults) {
          if (opts[key2] === void 0) {
            opts[key2] = defaults[key2];
          }
        }
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(32);
        }
        var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || islast && opts.follow_mount) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, {
                recurse_count: opts.recurse_count
              });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath: function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path)
              return mount;
            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
          }
          path = path ? node.name + "/" + path : node.name;
          node = node.parent;
        }
      },
      hashName: function(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
        }
        return (parentid + hash >>> 0) % FS.nameTable.length;
      },
      hashAddNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode: function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode: function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode: function(node) {
        FS.hashRemoveNode(node);
      },
      isRoot: function(node) {
        return node === node.parent;
      },
      isMountpoint: function(node) {
        return !!node.mounted;
      },
      isFile: function(mode) {
        return (mode & 61440) === 32768;
      },
      isDir: function(mode) {
        return (mode & 61440) === 16384;
      },
      isLink: function(mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev: function(mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev: function(mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO: function(mode) {
        return (mode & 61440) === 4096;
      },
      isSocket: function(mode) {
        return (mode & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        rs: 1052672,
        "r+": 2,
        w: 577,
        wx: 705,
        xw: 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        a: 1089,
        ax: 1217,
        xa: 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
      },
      modeStringToFlags: function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === "undefined") {
          throw new Error("Unknown file open mode: " + str);
        }
        return flags;
      },
      flagsToPermissionString: function(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions: function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: function(dir) {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode)
          return errCode;
        if (!dir.node_ops.lookup)
          return 2;
        return 0;
      },
      mayCreate: function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete: function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen: function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStream: function(fd) {
        return FS.streams[fd];
      },
      createStream: function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function() {
          };
          FS.FSStream.prototype = {
            object: {
              get: function() {
                return this.node;
              },
              set: function(val) {
                this.node = val;
              }
            },
            isRead: {
              get: function() {
                return (this.flags & 2097155) !== 1;
              }
            },
            isWrite: {
              get: function() {
                return (this.flags & 2097155) !== 0;
              }
            },
            isAppend: {
              get: function() {
                return this.flags & 1024;
              }
            }
          };
        }
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream: function(fd) {
        FS.streams[fd] = null;
      },
      chrdev_stream_ops: {
        open: function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
        llseek: function() {
          throw new FS.ErrnoError(70);
        }
      },
      major: function(dev) {
        return dev >> 8;
      },
      minor: function(dev) {
        return dev & 255;
      },
      makedev: function(ma, mi) {
        return ma << 8 | mi;
      },
      registerDevice: function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: function(dev) {
        return FS.devices[dev];
      },
      getMounts: function(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push.apply(check, m.mounts);
        }
        return mounts;
      },
      syncfs: function(populate, callback2) {
        if (typeof populate === "function") {
          callback2 = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback2(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach(function(mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount: function(type, opts, mountpoint) {
        if (typeof type === "string") {
          throw type;
        }
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount: function(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function(hash) {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup: function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod: function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create: function(path, mode) {
        mode = mode !== void 0 ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir: function(path, mode) {
        mode = mode !== void 0 ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree: function(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i])
            continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20)
              throw e;
          }
        }
      },
      mkdev: function(path, mode, dev) {
        if (typeof dev === "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink: function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename: function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir)
          throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate["willMovePath"]) {
            FS.trackingDelegate["willMovePath"](old_path, new_path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate["onMovePath"])
            FS.trackingDelegate["onMovePath"](old_path, new_path);
        } catch (e) {
          err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
      },
      rmdir: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readlink: function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat: function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat: function(path) {
        return FS.stat(path, true);
      },
      chmod: function(path, mode, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: mode & 4095 | node.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: function(path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod: function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },
      chown: function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown: function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown: function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },
      truncate: function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate: function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime: function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
      },
      open: function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === "undefined" ? 438 : mode;
        if (flags & 64) {
          mode = mode & 4095 | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === "object") {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
            node = lookup.node;
          } catch (e) {
          }
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512);
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!FS.readFiles)
            FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate["onOpenFile"]) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate["onOpenFile"](path, trackingFlags);
          }
        } catch (e) {
          err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
        }
        return stream;
      },
      close: function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents)
          stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed: function(stream) {
        return stream.fd === null;
      },
      llseek: function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read: function(stream, buffer2, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer2, offset, length, position);
        if (!seeking)
          stream.position += bytesRead;
        return bytesRead;
      },
      write: function(stream, buffer2, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer2, offset, length, position, canOwn);
        if (!seeking)
          stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate["onWriteToFile"])
            FS.trackingDelegate["onWriteToFile"](stream.path);
        } catch (e) {
          err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
        }
        return bytesWritten;
      },
      allocate: function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap: function(stream, buffer2, offset, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, buffer2, offset, length, position, prot, flags);
      },
      msync: function(stream, buffer2, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer2, offset, length, mmapFlags);
      },
      munmap: function(stream) {
        return 0;
      },
      ioctl: function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile: function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "r";
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile: function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "w";
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: function() {
        return FS.currentPath;
      },
      chdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories: function() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices: function() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() {
            return 0;
          },
          write: function(stream, buffer2, offset, length, pos) {
            return length;
          }
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device;
        if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
          var randomBuffer = new Uint8Array(1);
          random_device = function() {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0];
          };
        } else if (ENVIRONMENT_IS_NODE) {
          try {
            var crypto_module = require("crypto");
            random_device = function() {
              return crypto_module["randomBytes"](1)[0];
            };
          } catch (e) {
          }
        } else
          ;
        if (!random_device) {
          random_device = function() {
            abort("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
          };
        }
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: function() {
        FS.mkdir("/proc");
        FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
          mount: function() {
            var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream)
                  throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: "fake" },
                  node_ops: {
                    readlink: function() {
                      return stream.path;
                    }
                  }
                };
                ret.parent = ret;
                return ret;
              }
            };
            return node;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: function() {
        if (Module["stdin"]) {
          FS.createDevice("/dev", "stdin", Module["stdin"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (Module["stdout"]) {
          FS.createDevice("/dev", "stdout", null, Module["stdout"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (Module["stderr"]) {
          FS.createDevice("/dev", "stderr", null, Module["stderr"]);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        var stdin = FS.open("/dev/stdin", "r");
        var stdout = FS.open("/dev/stdout", "w");
        var stderr = FS.open("/dev/stderr", "w");
        assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
        assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
        assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
      },
      ensureErrnoError: function() {
        if (FS.ErrnoError)
          return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = function(errno2) {
            this.errno = errno2;
            for (var key2 in ERRNO_CODES) {
              if (ERRNO_CODES[key2] === errno2) {
                this.code = key2;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) {
            Object.defineProperty(this, "stack", {
              value: new Error().stack,
              writable: true
            });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = "<generic error, no stack>";
        });
      },
      staticInit: function() {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS };
      },
      init: function(input, output, error) {
        assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams();
      },
      quit: function() {
        FS.init.initialized = false;
        var fflush = Module["_fflush"];
        if (fflush)
          fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      getMode: function(canRead, canWrite) {
        var mode = 0;
        if (canRead)
          mode |= 292 | 73;
        if (canWrite)
          mode |= 146;
        return mode;
      },
      joinPath: function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == "/")
          path = path.substr(1);
        return path;
      },
      absolutePath: function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },
      standardizePath: function(path) {
        return PATH.normalize(path);
      },
      findObject: function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },
      analyzePath: function(path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createFolder: function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },
      createPath: function(parent, path, canRead, canWrite) {
        parent = typeof parent === "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part)
            continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
          }
          parent = current;
        }
        return current;
      },
      createFile: function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i)
              arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, "w");
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
      createDevice: function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major)
          FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer2, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0)
                break;
              bytesRead++;
              buffer2[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer2, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer2[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      createLink: function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },
      forceLoadFile: function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
          return true;
        var success = true;
        if (typeof XMLHttpRequest !== "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          try {
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
        if (!success)
          ___setErrNo(29);
        return success;
      },
      createLazyFile: function(parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return void 0;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = idx / this.chunkSize | 0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
          var chunkSize = 1024 * 1024;
          if (!hasByteServing)
            chunkSize = datalength;
          var doXHR = function(from, to) {
            if (from > to)
              throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength - 1)
              throw new Error("only " + datalength + " bytes available! programmer error!");
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url, false);
            if (datalength !== chunkSize)
              xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
            if (typeof Uint8Array != "undefined")
              xhr2.responseType = "arraybuffer";
            if (xhr2.overrideMimeType) {
              xhr2.overrideMimeType("text/plain; charset=x-user-defined");
            }
            xhr2.send(null);
            if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
            if (xhr2.response !== void 0) {
              return new Uint8Array(xhr2.response || []);
            } else {
              return intArrayFromString(xhr2.responseText || "", true);
            }
          };
          var lazyArray2 = this;
          lazyArray2.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray2.chunks[chunkNum] === "undefined") {
              lazyArray2.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray2.chunks[chunkNum] === "undefined")
              throw new Error("doXHR failed!");
            return lazyArray2.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== "undefined") {
          if (!ENVIRONMENT_IS_WORKER)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key2) {
          var fn = node.stream_ops[key2];
          stream_ops[key2] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        stream_ops.read = function stream_ops_read(stream, buffer2, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },
      createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init();
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);
        function processData(byteArray) {
          function finish(byteArray2) {
            if (preFinish)
              preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
            }
            if (onload)
              onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module["preloadPlugins"].forEach(function(plugin) {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, function() {
                if (onerror)
                  onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled)
            finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == "string") {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },
      indexedDB: function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: function() {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out("creating db");
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() {
              ok++;
              if (ok + fail == total)
                finish();
            };
            putRequest.onerror = function putRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      loadFilesFromDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
          } catch (e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total)
                finish();
            };
            getRequest.onerror = function getRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }
    };
    var SOCKFS = {
      mount: function(mount) {
        Module["websocket"] = Module["websocket"] && typeof Module["websocket"] === "object" ? Module["websocket"] : {};
        Module["websocket"]._callbacks = {};
        Module["websocket"]["on"] = function(event, callback2) {
          if (typeof callback2 === "function") {
            this._callbacks[event] = callback2;
          }
          return this;
        };
        Module["websocket"].emit = function(event, param) {
          if (typeof this._callbacks[event] === "function") {
            this._callbacks[event].call(this, param);
          }
        };
        return FS.createNode(null, "/", 16384 | 511, 0);
      },
      createSocket: function(family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6));
        }
        var sock = {
          family,
          type,
          protocol,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        var stream = FS.createStream({
          path: name,
          node,
          flags: FS.modeStringToFlags("r+"),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        sock.stream = stream;
        return sock;
      },
      getSocket: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },
      stream_ops: {
        poll: function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },
        ioctl: function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },
        read: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            return 0;
          }
          buffer2.set(msg.buffer, offset);
          return msg.buffer.length;
        },
        write: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer2, offset, length);
        },
        close: function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }
      },
      nextname: function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return "socket[" + SOCKFS.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function(sock, addr, port) {
          var ws;
          if (typeof addr === "object") {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            } else {
              var result = /ws[s]?:\\/\\/([^:]+):(\\d+)/.exec(ws.url);
              if (!result) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            try {
              var runtimeConfig = Module["websocket"] && typeof Module["websocket"] === "object";
              var url = "ws:#".replace("#", "//");
              if (runtimeConfig) {
                if (typeof Module["websocket"]["url"] === "string") {
                  url = Module["websocket"]["url"];
                }
              }
              if (url === "ws://" || url === "wss://") {
                var parts = addr.split("/");
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
              }
              var subProtocols = "binary";
              if (runtimeConfig) {
                if (typeof Module["websocket"]["subprotocol"] === "string") {
                  subProtocols = Module["websocket"]["subprotocol"];
                }
              }
              var opts = void 0;
              if (subProtocols !== "null") {
                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                opts = ENVIRONMENT_IS_NODE ? { protocol: subProtocols.toString() } : subProtocols;
              }
              if (runtimeConfig && Module["websocket"]["subprotocol"] === null) {
                subProtocols = "null";
                opts = void 0;
              }
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = require("ws");
              } else {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = "arraybuffer";
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr,
            port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          if (sock.type === 2 && typeof sock.sport !== "undefined") {
            peer.dgram_send_queue.push(new Uint8Array([
              255,
              255,
              255,
              255,
              "p".charCodeAt(0),
              "o".charCodeAt(0),
              "r".charCodeAt(0),
              "t".charCodeAt(0),
              (sock.sport & 65280) >> 8,
              sock.sport & 255
            ]));
          }
          return peer;
        },
        getPeer: function(sock, addr, port) {
          return sock.peers[addr + ":" + port];
        },
        addPeer: function(sock, peer) {
          sock.peers[peer.addr + ":" + peer.port] = peer;
        },
        removePeer: function(sock, peer) {
          delete sock.peers[peer.addr + ":" + peer.port];
        },
        handlePeerEvents: function(sock, peer) {
          var first = true;
          var handleOpen = function() {
            Module["websocket"].emit("open", sock.stream.fd);
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            if (typeof data === "string") {
              var encoder = new TextEncoder();
              data = encoder.encode(data);
            } else {
              assert(data.byteLength !== void 0);
              if (data.byteLength == 0) {
                return;
              } else {
                data = new Uint8Array(data);
              }
            }
            var wasfirst = first;
            first = false;
            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
              var newport = data[8] << 8 | data[9];
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({
              addr: peer.addr,
              port: peer.port,
              data
            });
            Module["websocket"].emit("message", sock.stream.fd);
          }
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on("open", handleOpen);
            peer.socket.on("message", function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage(new Uint8Array(data).buffer);
            });
            peer.socket.on("close", function() {
              Module["websocket"].emit("close", sock.stream.fd);
            });
            peer.socket.on("error", function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module["websocket"].emit("close", sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            };
          }
        },
        poll: function(sock) {
          if (sock.type === 1 && sock.server) {
            return sock.pending.length ? 64 | 1 : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
          if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 64 | 1;
          }
          if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
            mask |= 4;
          }
          if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 16;
          }
          return mask;
        },
        ioctl: function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[arg >> 2] = bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },
        close: function(sock) {
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },
        bind: function(sock, addr, port) {
          if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          sock.saddr = addr;
          sock.sport = port;
          if (sock.type === 2) {
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError))
                throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP)
                throw e;
            }
          }
        },
        connect: function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },
        listen: function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var WebSocketServer = require("ws").Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({ host, port: sock.sport });
          Module["websocket"].emit("listen", sock.stream.fd);
          sock.server.on("connection", function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              sock.pending.push(newsock);
              Module["websocket"].emit("connection", newsock.stream.fd);
            } else {
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module["websocket"].emit("connection", sock.stream.fd);
            }
          });
          sock.server.on("closed", function() {
            Module["websocket"].emit("close", sock.stream.fd);
            sock.server = null;
          });
          sock.server.on("error", function(error) {
            sock.error = ERRNO_CODES.EHOSTUNREACH;
            Module["websocket"].emit("error", [
              sock.stream.fd,
              sock.error,
              "EHOSTUNREACH: Host is unreachable"
            ]);
          });
        },
        accept: function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },
        getname: function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === void 0 || sock.dport === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr, port };
        },
        sendmsg: function(sock, buffer2, offset, length, addr, port) {
          if (sock.type === 2) {
            if (addr === void 0 || port === void 0) {
              addr = sock.daddr;
              port = sock.dport;
            }
            if (addr === void 0 || port === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            addr = sock.daddr;
            port = sock.dport;
          }
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          if (ArrayBuffer.isView(buffer2)) {
            offset += buffer2.byteOffset;
            buffer2 = buffer2.buffer;
          }
          var data;
          data = buffer2.slice(offset, offset + length);
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },
        recvmsg: function(sock, length) {
          if (sock.type === 1 && sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                return null;
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }
      }
    };
    function __inet_pton4_raw(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
          return null;
        b[i] = tmp;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str, void 0);
    }
    function __inet_pton6_raw(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [
        parts[1] << 16 | parts[0],
        parts[3] << 16 | parts[2],
        parts[5] << 16 | parts[4],
        parts[7] << 16 | parts[6]
      ];
    }
    var DNS = {
      address_map: { id: 1, addrs: {}, names: {} },
      lookup_name: function(name) {
        var res = __inet_pton4_raw(name);
        if (res !== null) {
          return name;
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
          return name;
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, "exceeded max address mappings of 65535");
          addr = "172.29." + (id & 255) + "." + (id & 65280);
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
        return addr;
      },
      lookup_addr: function(addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
        return null;
      }
    };
    function __inet_ntop4_raw(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function __inet_ntop6_raw(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 65535,
        ints[0] >> 16,
        ints[1] & 65535,
        ints[1] >> 16,
        ints[2] & 65535,
        ints[2] >> 16,
        ints[3] & 65535,
        ints[3] >> 16
      ];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = __inet_ntop4_raw(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function __read_sockaddr(sa, salen) {
      var family = HEAP16[sa >> 1];
      var port = _ntohs(HEAPU16[sa + 2 >> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >> 2];
          addr = __inet_ntop4_raw(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[sa + 8 >> 2],
            HEAP32[sa + 12 >> 2],
            HEAP32[sa + 16 >> 2],
            HEAP32[sa + 20 >> 2]
          ];
          addr = __inet_ntop6_raw(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function __write_sockaddr(sa, family, addr, port) {
      switch (family) {
        case 2:
          addr = __inet_pton4_raw(addr);
          HEAP16[sa >> 1] = family;
          HEAP32[sa + 4 >> 2] = addr;
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        case 10:
          addr = __inet_pton6_raw(addr);
          HEAP32[sa >> 2] = family;
          HEAP32[sa + 8 >> 2] = addr[0];
          HEAP32[sa + 12 >> 2] = addr[1];
          HEAP32[sa + 16 >> 2] = addr[2];
          HEAP32[sa + 20 >> 2] = addr[3];
          HEAP16[sa + 2 >> 1] = _htons(port);
          HEAP32[sa + 4 >> 2] = 0;
          HEAP32[sa + 24 >> 2] = 0;
          break;
        default:
          return { errno: 5 };
      }
      return {};
    }
    var SYSCALLS = {
      mappings: {},
      DEFAULT_POLLMASK: 5,
      umask: 511,
      calculateAt: function(dirfd, path) {
        if (path[0] !== "/") {
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream)
              throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },
      doStat: function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            return -54;
          }
          throw e;
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = 0;
        HEAP32[buf + 8 >> 2] = stat.ino;
        HEAP32[buf + 12 >> 2] = stat.mode;
        HEAP32[buf + 16 >> 2] = stat.nlink;
        HEAP32[buf + 20 >> 2] = stat.uid;
        HEAP32[buf + 24 >> 2] = stat.gid;
        HEAP32[buf + 28 >> 2] = stat.rdev;
        HEAP32[buf + 32 >> 2] = 0;
        tempI64 = [
          stat.size >>> 0,
          (tempDouble = stat.size, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAP32[buf + 48 >> 2] = 4096;
        HEAP32[buf + 52 >> 2] = stat.blocks;
        HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
        HEAP32[buf + 60 >> 2] = 0;
        HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
        HEAP32[buf + 68 >> 2] = 0;
        HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
        HEAP32[buf + 76 >> 2] = 0;
        tempI64 = [
          stat.ino >>> 0,
          (tempDouble = stat.ino, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
        return 0;
      },
      doMsync: function(addr, stream, len, flags, offset) {
        var buffer2 = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer2, offset, len, flags);
      },
      doMkdir: function(path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/")
          path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0;
      },
      doMknod: function(path, mode, dev) {
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },
      doReadlink: function(path, buf, bufsize) {
        if (bufsize <= 0)
          return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len;
      },
      doAccess: function(path, amode) {
        if (amode & ~7) {
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = "";
        if (amode & 4)
          perms += "r";
        if (amode & 2)
          perms += "w";
        if (amode & 1)
          perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },
      doDup: function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest)
          FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },
      doReadv: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.read(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
          if (curr < len)
            break;
        }
        return ret;
      },
      doWritev: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.write(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
        }
        return ret;
      },
      varargs: void 0,
      get: function() {
        assert(SYSCALLS.varargs != void 0);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret;
      },
      getStr: function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
      getStreamFromFD: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream)
          throw new FS.ErrnoError(8);
        return stream;
      },
      get64: function(low, high) {
        if (low >= 0)
          assert(high === 0);
        else
          assert(high === -1);
        return low;
      }
    };
    function ___syscall102(call, socketvararg) {
      try {
        SYSCALLS.varargs = socketvararg;
        var getSocketFromFD = function() {
          var socket = SOCKFS.getSocket(SYSCALLS.get());
          if (!socket)
            throw new FS.ErrnoError(8);
          return socket;
        };
        var getSocketAddress = function(allowNull) {
          var addrp = SYSCALLS.get(), addrlen2 = SYSCALLS.get();
          if (allowNull && addrp === 0)
            return null;
          var info2 = __read_sockaddr(addrp, addrlen2);
          if (info2.errno)
            throw new FS.ErrnoError(info2.errno);
          info2.addr = DNS.lookup_addr(info2.addr) || info2.addr;
          return info2;
        };
        switch (call) {
          case 1: {
            var domain = SYSCALLS.get(), type = SYSCALLS.get(), protocol = SYSCALLS.get();
            var sock = SOCKFS.createSocket(domain, type, protocol);
            assert(sock.stream.fd < 64);
            return sock.stream.fd;
          }
          case 2: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.bind(sock, info.addr, info.port);
            return 0;
          }
          case 3: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.connect(sock, info.addr, info.port);
            return 0;
          }
          case 4: {
            var sock = getSocketFromFD(), backlog = SYSCALLS.get();
            sock.sock_ops.listen(sock, backlog);
            return 0;
          }
          case 5: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var newsock = sock.sock_ops.accept(sock);
            if (addr) {
              var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
              assert(!res.errno);
            }
            return newsock.stream.fd;
          }
          case 6: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport);
            assert(!res.errno);
            return 0;
          }
          case 7: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            if (!sock.daddr) {
              return -53;
            }
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
            assert(!res.errno);
            return 0;
          }
          case 11: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), length = SYSCALLS.get(), flags = SYSCALLS.get(), dest = getSocketAddress(true);
            if (!dest) {
              return FS.write(sock.stream, HEAP8, message, length);
            } else {
              return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
            }
          }
          case 12: {
            var sock = getSocketFromFD(), buf = SYSCALLS.get(), len = SYSCALLS.get(), flags = SYSCALLS.get(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var msg = sock.sock_ops.recvmsg(sock, len);
            if (!msg)
              return 0;
            if (addr) {
              var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            HEAPU8.set(msg.buffer, buf);
            return msg.buffer.byteLength;
          }
          case 14: {
            return -50;
          }
          case 15: {
            var sock = getSocketFromFD(), level = SYSCALLS.get(), optname = SYSCALLS.get(), optval = SYSCALLS.get(), optlen = SYSCALLS.get();
            if (level === 1) {
              if (optname === 4) {
                HEAP32[optval >> 2] = sock.error;
                HEAP32[optlen >> 2] = 4;
                sock.error = null;
                return 0;
              }
            }
            return -50;
          }
          case 16: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var addr, port;
            var name = HEAP32[message >> 2];
            var namelen = HEAP32[message + 4 >> 2];
            if (name) {
              var info = __read_sockaddr(name, namelen);
              if (info.errno)
                return -info.errno;
              port = info.port;
              addr = DNS.lookup_addr(info.addr) || info.addr;
            }
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var view = new Uint8Array(total);
            var offset = 0;
            for (var i = 0; i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              for (var j = 0; j < iovlen; j++) {
                view[offset++] = HEAP8[iovbase + j >> 0];
              }
            }
            return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
          }
          case 17: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var msg = sock.sock_ops.recvmsg(sock, total);
            if (!msg)
              return 0;
            var name = HEAP32[message >> 2];
            if (name) {
              var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            var bytesRead = 0;
            var bytesRemaining = msg.buffer.byteLength;
            for (var i = 0; bytesRemaining > 0 && i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              if (!iovlen) {
                continue;
              }
              var length = Math.min(iovlen, bytesRemaining);
              var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
              HEAPU8.set(buf, iovbase + bytesRead);
              bytesRead += length;
              bytesRemaining -= length;
            }
            return bytesRead;
          }
          default: {
            return -52;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall12(path) {
      try {
        path = SYSCALLS.getStr(path);
        FS.chdir(path);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall142(nfds, readfds, writefds, exceptfds, timeout) {
      try {
        assert(nfds <= 64, "nfds must be less than or equal to 64");
        assert(!exceptfds, "exceptfds not supported");
        var total = 0;
        var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
        var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
        var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
        var dstReadLow = 0, dstReadHigh = 0;
        var dstWriteLow = 0, dstWriteHigh = 0;
        var dstExceptLow = 0, dstExceptHigh = 0;
        var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
        var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
        var check = function(fd2, low, high, val) {
          return fd2 < 32 ? low & val : high & val;
        };
        for (var fd = 0; fd < nfds; fd++) {
          var mask = 1 << fd % 32;
          if (!check(fd, allLow, allHigh, mask)) {
            continue;
          }
          var stream = FS.getStream(fd);
          if (!stream)
            throw new FS.ErrnoError(8);
          var flags = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            flags = stream.stream_ops.poll(stream);
          }
          if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
            fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
            total++;
          }
          if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
            fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
            total++;
          }
          if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
            fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
            total++;
          }
        }
        if (readfds) {
          HEAP32[readfds >> 2] = dstReadLow;
          HEAP32[readfds + 4 >> 2] = dstReadHigh;
        }
        if (writefds) {
          HEAP32[writefds >> 2] = dstWriteLow;
          HEAP32[writefds + 4 >> 2] = dstWriteHigh;
        }
        if (exceptfds) {
          HEAP32[exceptfds >> 2] = dstExceptLow;
          HEAP32[exceptfds + 4 >> 2] = dstExceptHigh;
        }
        return total;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall183(buf, size) {
      try {
        if (size === 0)
          return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd);
        if (size < cwdLengthInBytes + 1)
          return -68;
        stringToUTF8(cwd, buf, size);
        return buf;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall195(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall197(fd, buf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall221(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -28;
            }
            var newStream;
            newStream = FS.open(stream.path, stream.flags, 0, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = SYSCALLS.get();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            ___setErrNo(28);
            return -1;
          default: {
            return -28;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall3(fd, buf, count) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return FS.read(stream, HEAP8, buf, count);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall39(path, mode) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doMkdir(path, mode);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall5(path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(path);
        var mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall54(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21519: {
            if (!stream.tty)
              return -59;
            var argp = SYSCALLS.get();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty)
              return -59;
            return -28;
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21524: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          default:
            abort("bad ioctl syscall " + op);
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall85(path, buf, bufsize) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doReadlink(path, buf, bufsize);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function syscallMunmap(addr, len) {
      if (addr === -1 || len === 0) {
        return -28;
      }
      var info = SYSCALLS.mappings[addr];
      if (!info)
        return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
    function ___syscall91(addr, len) {
      try {
        return syscallMunmap(addr, len);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + size);
      }
    }
    function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
    var embind_charCodes = void 0;
    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;
    function makeLegalFunctionName(name) {
      if (name === void 0) {
        return "_unknown";
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return "_" + name;
      } else {
        return name;
      }
    }
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function("body", "return function " + name + '() {\\n    "use strict";    return body.apply(this, arguments);\\n};\\n')(body);
    }
    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack = this.toString() + "\\n" + stack.replace(/^Error(:[^\\n]*)?\\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
        if (this.message === void 0) {
          return this.name;
        } else {
          return this.name + ": " + this.message;
        }
      };
      return errorClass;
    }
    var BindingError = void 0;
    function throwBindingError(message) {
      throw new BindingError(message);
    }
    var InternalError = void 0;
    function throwInternalError(message) {
      throw new InternalError(message);
    }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters2) {
        var myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(function() {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (unregisteredTypes.length === 0) {
        onComplete(typeConverters);
      }
    }
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function(cb) {
          cb();
        });
      }
    }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(wt) {
          return !!wt;
        },
        toWireType: function(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: 8,
        readValueFromPointer: function(pointer) {
          var heap;
          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError("Unknown boolean type size: " + name);
          }
          return this["fromWireType"](heap[pointer >> shift]);
        },
        destructorFunction: null
      });
    }
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }
      if (!(other instanceof ClassHandle)) {
        return false;
      }
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }
      return leftClass === rightClass && left === right;
    }
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
    }
    var finalizationGroup = false;
    function detachFinalizer(handle) {
    }
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = $$.count.value === 0;
      if (toDelete) {
        runDestructor($$);
      }
    }
    function attachFinalizer(handle) {
      if (typeof FinalizationGroup === "undefined") {
        attachFinalizer = function(handle2) {
          return handle2;
        };
        return handle;
      }
      finalizationGroup = new FinalizationGroup(function(iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;
          if (!$$.ptr) {
            console.warn("object already deleted: " + $$.ptr);
          } else {
            releaseClassHandle($$);
          }
        }
      });
      attachFinalizer = function(handle2) {
        finalizationGroup.register(handle2, handle2.$$, handle2.$$);
        return handle2;
      };
      detachFinalizer = function(handle2) {
        finalizationGroup.unregister(handle2.$$);
      };
      return attachFinalizer(handle);
    }
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: { value: shallowCopyInternalPointer(this.$$) }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = void 0;
        this.$$.ptr = void 0;
      }
    }
    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
    var delayFunction = void 0;
    var deletionQueue = [];
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]();
      }
    }
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
    function init_ClassHandle() {
      ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
      ClassHandle.prototype["clone"] = ClassHandle_clone;
      ClassHandle.prototype["delete"] = ClassHandle_delete;
      ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
      ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
    }
    function ClassHandle() {
    }
    var registeredPointers = {};
    function ensureOverloadTable(proto, methodName, humanName) {
      if (proto[methodName].overloadTable === void 0) {
        var prevFunc = proto[methodName];
        proto[methodName] = function() {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (numArguments === void 0 || Module[name].overloadTable !== void 0 && Module[name].overloadTable[numArguments] !== void 0) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        if (numArguments !== void 0) {
          Module[name].numArguments = numArguments;
        }
      }
    }
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (handle.$$.smartPtr === void 0) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(ptr, __emval_register(function() {
                clonedHandle["delete"]();
              }));
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle["delete"]();
      }
    }
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (desiredClass.baseClass === void 0) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    }
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
    function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    }
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }
    function init_embind() {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction;
    }
    var registeredInstances = {};
    function getBasestPointer(class_, ptr) {
      if (ptr === void 0) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    }
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
    }
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (registeredInstance !== void 0) {
        if (registeredInstance.$$.count.value === 0) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr
          });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype["argPackAdvance"] = 8;
      RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
      RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
    }
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === void 0) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }
      if (Module[name].overloadTable !== void 0 && numArguments !== void 0) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller(dynCall) {
        var args = [];
        for (var i = 1; i < signature.length; ++i) {
          args.push("a" + i);
        }
        var name = "dynCall_" + signature + "_" + rawFunction;
        var body = "return function " + name + "(" + args.join(", ") + ") {\\n";
        body += "    return dynCall(rawFunction" + (args.length ? ", " : "") + args.join(", ") + ");\\n";
        body += "};\\n";
        return new Function("dynCall", "rawFunction", body)(dynCall, rawFunction);
      }
      var dc = Module["dynCall_" + signature];
      var fp = makeDynCaller(dc);
      if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
    var UnboundTypeError = void 0;
    function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
    }
    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function() {
        throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
        base = base[0];
        var baseClass;
        var basePrototype;
        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }
        var constructor = createNamedFunction(legalFunctionName, function() {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name);
          }
          if (registeredClass.constructor_body === void 0) {
            throw new BindingError(name + " has no accessible constructor");
          }
          var body = registeredClass.constructor_body[arguments.length];
          if (body === void 0) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
          }
          return body.apply(this, arguments);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: { value: constructor }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      });
    }
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
      }
      var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
      });
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          needsDestructorStack = true;
          break;
        }
      }
      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
      }
      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\\nif (arguments.length !== " + (argCount - 2) + ") {\\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\\n}\\n";
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\\n";
      }
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = [
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam"
      ];
      var args2 = [
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1]
      ];
      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\\n";
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
      }
      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\\n";
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\\nreturn ret;\\n";
      }
      invokerFnBody += "}\\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
    function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
    function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.constructor;
        if (proto[methodName] === void 0) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
          var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
          if (proto[methodName].overloadTable === void 0) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = "constructor " + classType.name;
        if (classType.registeredClass.constructor_body === void 0) {
          classType.registeredClass.constructor_body = [];
        }
        if (classType.registeredClass.constructor_body[argCount - 1] !== void 0) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
        };
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
            }
            destructors.length = 0;
            args.length = argCount;
            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
            }
            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]["fromWireType"](ptr);
          };
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (method === void 0 || method.overloadTable === void 0 && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
          if (proto[methodName].overloadTable === void 0) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    }
    var emval_free_list = [];
    var emval_handle_array = [
      {},
      { value: void 0 },
      { value: null },
      { value: true },
      { value: false }
    ];
    function __emval_decref(handle) {
      if (handle > 4 && --emval_handle_array[handle].refcount === 0) {
        emval_handle_array[handle] = void 0;
        emval_free_list.push(handle);
      }
    }
    function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          ++count;
        }
      }
      return count;
    }
    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          return emval_handle_array[i];
        }
      }
      return null;
    }
    function init_emval() {
      Module["count_emval_handles"] = count_emval_handles;
      Module["get_first_emval"] = get_first_emval;
    }
    function __emval_register(value) {
      switch (value) {
        case void 0: {
          return 1;
        }
        case null: {
          return 2;
        }
        case true: {
          return 3;
        }
        case false: {
          return 4;
        }
        default: {
          var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = { refcount: 1, value };
          return handle;
        }
      }
    }
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(handle) {
          var rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv;
        },
        toWireType: function(destructors, value) {
          return __emval_register(value);
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null
      });
    }
    function _embind_repr(v) {
      if (v === null) {
        return "null";
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    }
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function(pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 3:
          return function(pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + name);
      }
    }
    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          return value;
        },
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          return value;
        },
        argPackAdvance: 8,
        readValueFromPointer: floatReadValueFromPointer(name, shift),
        destructorFunction: null
      });
    }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(name, function() {
        throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
      }, argCount - 1);
      whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
        var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return [];
      });
    }
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + name);
      }
    }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      var shift = getShiftFromSize(size);
      var fromWireType = function(value) {
        return value;
      };
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function(value) {
          return value << bitshift >>> bitshift;
        };
      }
      var isUnsignedType = name.indexOf("unsigned") != -1;
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
          }
          return isUnsignedType ? value >>> 0 : value | 0;
        },
        argPackAdvance: 8,
        readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
      });
    }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: decodeMemoryView,
        argPackAdvance: 8,
        readValueFromPointer: decodeMemoryView
      }, { ignoreDuplicateRegistrations: true });
    }
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var str;
          if (stdStringIsUTF8) {
            var endChar = HEAPU8[value + 4 + length];
            var endCharSwap = 0;
            if (endChar != 0) {
              endCharSwap = endChar;
              HEAPU8[value + 4 + length] = 0;
            }
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;
              if (HEAPU8[currentBytePtr] == 0) {
                var stringSegment = UTF8ToString(decodeStartPtr);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
            if (endCharSwap != 0) {
              HEAPU8[value + 4 + length] = endCharSwap;
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }
            str = a.join("");
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var getLength;
          var valueIsOfTypeString = typeof value === "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function() {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function() {
              return value.length;
            };
          }
          var length = getLength();
          var ptr = _malloc(4 + length + 1);
          HEAPU32[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                }
                HEAPU8[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function() {
          return HEAPU16;
        };
        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function() {
          return HEAPU32;
        };
        shift = 2;
      }
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var endChar = HEAP[value + 4 + length * charSize >> shift];
          var endCharSwap = 0;
          if (endChar != 0) {
            endCharSwap = endChar;
            HEAP[value + 4 + length * charSize >> shift] = 0;
          }
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (HEAP[currentBytePtr >> shift] == 0) {
              var stringSegment = decodeString(decodeStartPtr);
              if (str === void 0) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          if (endCharSwap != 0) {
            HEAP[value + 4 + length * charSize >> shift] = endCharSwap;
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name);
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType: function() {
          return void 0;
        },
        toWireType: function(destructors, o) {
          return void 0;
        }
      });
    }
    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }
    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (impl === void 0) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }
    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, "_emval_take_value");
      var v = type["readValueFromPointer"](argv);
      return __emval_register(v);
    }
    function _abort() {
      abort();
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();
      assert(requestedSize > oldSize);
      var PAGE_MULTIPLE = 65536;
      var maxHeapSize = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > maxHeapSize) {
        err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
      return false;
    }
    var ENV = {};
    function __getExecutableName() {
      return thisProgram || "./this.program";
    }
    function _emscripten_get_environ() {
      if (!_emscripten_get_environ.strings) {
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: __getExecutableName()
        };
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        _emscripten_get_environ.strings = strings;
      }
      return _emscripten_get_environ.strings;
    }
    function _environ_get(__environ, environ_buf) {
      var strings = _emscripten_get_environ();
      var bufSize = 0;
      strings.forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = _emscripten_get_environ();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_fdstat_get(fd, pbuf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
        HEAP8[pbuf >> 0] = type;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var HIGH_OFFSET = 4294967296;
        var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
        var DOUBLE_LIMIT = 9007199254740992;
        if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
          return -61;
        }
        FS.llseek(stream, offset, whence);
        tempI64 = [
          stream.position >>> 0,
          (tempDouble = stream.position, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0)
          stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doWritev(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _gethostbyname(name) {
      name = UTF8ToString(name);
      var ret = _malloc(20);
      var nameBuf = _malloc(name.length + 1);
      stringToUTF8(name, nameBuf, name.length + 1);
      HEAP32[ret >> 2] = nameBuf;
      var aliasesBuf = _malloc(4);
      HEAP32[aliasesBuf >> 2] = 0;
      HEAP32[ret + 4 >> 2] = aliasesBuf;
      var afinet = 2;
      HEAP32[ret + 8 >> 2] = afinet;
      HEAP32[ret + 12 >> 2] = 4;
      var addrListBuf = _malloc(12);
      HEAP32[addrListBuf >> 2] = addrListBuf + 8;
      HEAP32[addrListBuf + 4 >> 2] = 0;
      HEAP32[addrListBuf + 8 >> 2] = __inet_pton4_raw(DNS.lookup_name(name));
      HEAP32[ret + 16 >> 2] = addrListBuf;
      return ret;
    }
    function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[ptr >> 2] = now / 1e3 | 0;
      HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
      return 0;
    }
    var ___tm_current = 2400384;
    stringToUTF8("GMT", 2400432, 4), 2400432;
    function _tzset() {
      if (_tzset.called)
        return;
      _tzset.called = true;
      HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
      function extractZone(date) {
        var match = date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);
        return match ? match[1] : "GMT";
      }
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
      } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
      }
    }
    function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
      var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
      HEAP32[tmPtr + 40 >> 2] = zonePtr;
      return tmPtr;
    }
    function _localtime(time) {
      return _localtime_r(time, ___tm_current);
    }
    function _setTempRet0($i) {
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function(date2) {
          return WEEKDAYS[date2.tm_wday].substring(0, 3);
        },
        "%A": function(date2) {
          return WEEKDAYS[date2.tm_wday];
        },
        "%b": function(date2) {
          return MONTHS[date2.tm_mon].substring(0, 3);
        },
        "%B": function(date2) {
          return MONTHS[date2.tm_mon];
        },
        "%C": function(date2) {
          var year = date2.tm_year + 1900;
          return leadingNulls(year / 100 | 0, 2);
        },
        "%d": function(date2) {
          return leadingNulls(date2.tm_mday, 2);
        },
        "%e": function(date2) {
          return leadingSomething(date2.tm_mday, 2, " ");
        },
        "%g": function(date2) {
          return getWeekBasedYear(date2).toString().substring(2);
        },
        "%G": function(date2) {
          return getWeekBasedYear(date2);
        },
        "%H": function(date2) {
          return leadingNulls(date2.tm_hour, 2);
        },
        "%I": function(date2) {
          var twelveHour = date2.tm_hour;
          if (twelveHour == 0)
            twelveHour = 12;
          else if (twelveHour > 12)
            twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": function(date2) {
          return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
        },
        "%m": function(date2) {
          return leadingNulls(date2.tm_mon + 1, 2);
        },
        "%M": function(date2) {
          return leadingNulls(date2.tm_min, 2);
        },
        "%n": function() {
          return "\\n";
        },
        "%p": function(date2) {
          if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function(date2) {
          return leadingNulls(date2.tm_sec, 2);
        },
        "%t": function() {
          return "	";
        },
        "%u": function(date2) {
          return date2.tm_wday || 7;
        },
        "%U": function(date2) {
          var janFirst = new Date(date2.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
        },
        "%V": function(date2) {
          var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53";
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01";
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
            daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        "%w": function(date2) {
          return date2.tm_wday;
        },
        "%W": function(date2) {
          var janFirst = new Date(date2.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
        },
        "%y": function(date2) {
          return (date2.tm_year + 1900).toString().substring(2);
        },
        "%Y": function(date2) {
          return date2.tm_year + 1900;
        },
        "%z": function(date2) {
          var off = date2.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = off / 60 * 100 + off % 60;
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": function(date2) {
          return date2.tm_zone;
        },
        "%%": function() {
          return "%";
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function _time(ptr) {
      var ret = Date.now() / 1e3 | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret;
      }
      return ret;
    }
    function readAsmConstArgs(sigPtr, buf) {
      if (!readAsmConstArgs.array) {
        readAsmConstArgs.array = [];
      }
      var args = readAsmConstArgs.array;
      args.length = 0;
      var ch;
      while (ch = HEAPU8[sigPtr++]) {
        if (ch === 100 || ch === 102) {
          buf = buf + 7 & ~7;
          args.push(HEAPF64[buf >> 3]);
          buf += 8;
        } else if (ch === 105) {
          buf = buf + 3 & ~3;
          args.push(HEAP32[buf >> 2]);
          buf += 4;
        } else
          abort("unexpected char in asm const signature " + ch);
      }
      return args;
    }
    var FSNode = function(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
    };
    var readMode = 292 | 73;
    var writeMode = 146;
    Object.defineProperties(FSNode.prototype, {
      read: {
        get: function() {
          return (this.mode & readMode) === readMode;
        },
        set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        }
      },
      write: {
        get: function() {
          return (this.mode & writeMode) === writeMode;
        },
        set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        }
      },
      isFolder: {
        get: function() {
          return FS.isDir(this.mode);
        }
      },
      isDevice: {
        get: function() {
          return FS.isChrdev(this.mode);
        }
      }
    });
    FS.FSNode = FSNode;
    FS.staticInit();
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    embind_init_charCodes();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    init_emval();
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = {
      __cxa_allocate_exception: ___cxa_allocate_exception,
      __cxa_throw: ___cxa_throw,
      __handle_stack_overflow: ___handle_stack_overflow,
      __map_file: ___map_file,
      __syscall102: ___syscall102,
      __syscall12: ___syscall12,
      __syscall142: ___syscall142,
      __syscall183: ___syscall183,
      __syscall195: ___syscall195,
      __syscall197: ___syscall197,
      __syscall221: ___syscall221,
      __syscall3: ___syscall3,
      __syscall39: ___syscall39,
      __syscall5: ___syscall5,
      __syscall54: ___syscall54,
      __syscall85: ___syscall85,
      __syscall91: ___syscall91,
      _embind_register_bool: __embind_register_bool,
      _embind_register_class: __embind_register_class,
      _embind_register_class_class_function: __embind_register_class_class_function,
      _embind_register_class_constructor: __embind_register_class_constructor,
      _embind_register_class_function: __embind_register_class_function,
      _embind_register_emval: __embind_register_emval,
      _embind_register_float: __embind_register_float,
      _embind_register_function: __embind_register_function,
      _embind_register_integer: __embind_register_integer,
      _embind_register_memory_view: __embind_register_memory_view,
      _embind_register_std_string: __embind_register_std_string,
      _embind_register_std_wstring: __embind_register_std_wstring,
      _embind_register_void: __embind_register_void,
      _emval_decref: __emval_decref,
      _emval_incref: __emval_incref,
      _emval_take_value: __emval_take_value,
      abort: _abort,
      connectMemory,
      emscripten_asm_const_iii: _emscripten_asm_const_iii,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_resize_heap: _emscripten_resize_heap,
      environ_get: _environ_get,
      environ_sizes_get: _environ_sizes_get,
      fd_close: _fd_close,
      fd_fdstat_get: _fd_fdstat_get,
      fd_read: _fd_read,
      fd_seek: _fd_seek,
      fd_write: _fd_write,
      gethostbyname: _gethostbyname,
      gettimeofday: _gettimeofday,
      localtime: _localtime,
      memory: wasmMemory,
      setTempRet0: _setTempRet0,
      strftime: _strftime,
      strftime_l: _strftime_l,
      table: wasmTable,
      time: _time
    };
    var asm = createWasm();
    Module["asm"] = asm;
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__wasm_call_ctors"].apply(null, arguments);
    };
    Module["_fflush"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["fflush"].apply(null, arguments);
    };
    Module["_expandCDSPFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["expandCDSPFromString"].apply(null, arguments);
    };
    Module["_generateCAuxFilesFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["generateCAuxFilesFromString"].apply(null, arguments);
    };
    Module["_freeCMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeCMemory"].apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["free"].apply(null, arguments);
    };
    Module["_getCLibFaustVersion"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getCLibFaustVersion"].apply(null, arguments);
    };
    Module["_getErrorAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getErrorAfterException"].apply(null, arguments);
    };
    Module["_cleanupAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["cleanupAfterException"].apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["malloc"].apply(null, arguments);
    };
    Module["___errno_location"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__errno_location"].apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["htons"].apply(null, arguments);
    };
    Module["___em_js__connectMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__em_js__connectMemory"].apply(null, arguments);
    };
    Module["_deleteAllWasmCDSPFactories"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["deleteAllWasmCDSPFactories"].apply(null, arguments);
    };
    Module["_createWasmCDSPFactoryFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["createWasmCDSPFactoryFromString"].apply(null, arguments);
    };
    Module["_getWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModule"].apply(null, arguments);
    };
    Module["_getWasmCModuleSize"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModuleSize"].apply(null, arguments);
    };
    Module["_getWasmCHelpers"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCHelpers"].apply(null, arguments);
    };
    Module["_freeWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeWasmCModule"].apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["ntohs"].apply(null, arguments);
    };
    var __get_tzname = Module["__get_tzname"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_tzname"].apply(null, arguments);
    };
    var __get_daylight = Module["__get_daylight"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_daylight"].apply(null, arguments);
    };
    var __get_timezone = Module["__get_timezone"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_timezone"].apply(null, arguments);
    };
    var ___getTypeName = Module["___getTypeName"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__getTypeName"].apply(null, arguments);
    };
    Module["___embind_register_native_and_builtin_types"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__embind_register_native_and_builtin_types"].apply(null, arguments);
    };
    Module["___set_stack_limit"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__set_stack_limit"].apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackSave"].apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackAlloc"].apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackRestore"].apply(null, arguments);
    };
    Module["dynCall_ii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_ii"].apply(null, arguments);
    };
    Module["dynCall_vi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vi"].apply(null, arguments);
    };
    Module["dynCall_vii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vii"].apply(null, arguments);
    };
    Module["dynCall_iiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiii"].apply(null, arguments);
    };
    Module["dynCall_viijii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viijii"].apply(null, arguments);
    };
    Module["dynCall_viiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiii"].apply(null, arguments);
    };
    Module["dynCall_iii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iii"].apply(null, arguments);
    };
    Module["dynCall_iiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiii"].apply(null, arguments);
    };
    Module["dynCall_viddddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddii"].apply(null, arguments);
    };
    Module["dynCall_viddddiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddiii"].apply(null, arguments);
    };
    Module["dynCall_viddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddd"].apply(null, arguments);
    };
    Module["dynCall_vidddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddi"].apply(null, arguments);
    };
    Module["dynCall_vidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddd"].apply(null, arguments);
    };
    Module["dynCall_viddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddii"].apply(null, arguments);
    };
    Module["dynCall_viddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddi"].apply(null, arguments);
    };
    Module["dynCall_viiiiddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiddd"].apply(null, arguments);
    };
    Module["dynCall_viii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viii"].apply(null, arguments);
    };
    Module["dynCall_v"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_v"].apply(null, arguments);
    };
    Module["dynCall_viiiffff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiffff"].apply(null, arguments);
    };
    Module["dynCall_viiiff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiff"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiid"].apply(null, arguments);
    };
    Module["dynCall_viiidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidddd"].apply(null, arguments);
    };
    Module["dynCall_viiidd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidd"].apply(null, arguments);
    };
    Module["dynCall_viiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiii"].apply(null, arguments);
    };
    Module["dynCall_di"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_di"].apply(null, arguments);
    };
    Module["dynCall_vid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vid"].apply(null, arguments);
    };
    Module["dynCall_i"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_i"].apply(null, arguments);
    };
    Module["dynCall_viiif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiif"].apply(null, arguments);
    };
    Module["dynCall_fiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fiii"].apply(null, arguments);
    };
    Module["dynCall_vidiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidiii"].apply(null, arguments);
    };
    Module["dynCall_viif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viif"].apply(null, arguments);
    };
    Module["dynCall_fii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fii"].apply(null, arguments);
    };
    Module["dynCall_jiji"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_jiji"].apply(null, arguments);
    };
    Module["dynCall_iidiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iidiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiij"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiij"].apply(null, arguments);
    };
    Module["dynCall_iiiiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiid"].apply(null, arguments);
    };
    Module["dynCall_iiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiijj"].apply(null, arguments);
    };
    Module["dynCall_iiiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiijj"].apply(null, arguments);
    };
    Module["dynCall_viiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiii"].apply(null, arguments);
    };
    Module["asm"] = asm;
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
      Module["intArrayFromString"] = function() {
        abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
      Module["intArrayToString"] = function() {
        abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ccall"))
      Module["ccall"] = function() {
        abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["cwrap"] = cwrap;
    if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
      Module["setValue"] = function() {
        abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getValue"))
      Module["getValue"] = function() {
        abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
      Module["allocate"] = function() {
        abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["getMemory"] = getMemory;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
      Module["UTF8ArrayToString"] = function() {
        abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["UTF8ToString"] = UTF8ToString;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
      Module["stringToUTF8Array"] = function() {
        abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["stringToUTF8"] = stringToUTF8;
    Module["lengthBytesUTF8"] = lengthBytesUTF8;
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
      Module["addOnPreRun"] = function() {
        abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
      Module["addOnInit"] = function() {
        abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
      Module["addOnPreMain"] = function() {
        abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
      Module["addOnExit"] = function() {
        abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
      Module["addOnPostRun"] = function() {
        abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
      Module["writeStringToMemory"] = function() {
        abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory"))
      Module["writeArrayToMemory"] = function() {
        abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
      Module["writeAsciiToMemory"] = function() {
        abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["addRunDependency"] = addRunDependency;
    Module["removeRunDependency"] = removeRunDependency;
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc"))
      Module["dynamicAlloc"] = function() {
        abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary"))
      Module["loadDynamicLibrary"] = function() {
        abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule"))
      Module["loadWebAssemblyModule"] = function() {
        abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
      Module["getLEB"] = function() {
        abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
      Module["getFunctionTables"] = function() {
        abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
      Module["alignFunctionTables"] = function() {
        abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
      Module["registerFunctions"] = function() {
        abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
      Module["addFunction"] = function() {
        abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
      Module["removeFunction"] = function() {
        abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
      Module["getFuncWrapper"] = function() {
        abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
      Module["prettyPrint"] = function() {
        abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt"))
      Module["makeBigInt"] = function() {
        abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
      Module["dynCall"] = function() {
        abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
      Module["getCompilerSetting"] = function() {
        abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "print"))
      Module["print"] = function() {
        abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
      Module["printErr"] = function() {
        abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
      Module["getTempRet0"] = function() {
        abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
      Module["setTempRet0"] = function() {
        abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
      Module["callMain"] = function() {
        abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "abort"))
      Module["abort"] = function() {
        abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
      Module["stringToNewUTF8"] = function() {
        abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer"))
      Module["emscripten_realloc_buffer"] = function() {
        abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
      Module["ENV"] = function() {
        abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setjmpId"))
      Module["setjmpId"] = function() {
        abort("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
      Module["ERRNO_CODES"] = function() {
        abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
      Module["ERRNO_MESSAGES"] = function() {
        abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
      Module["DNS"] = function() {
        abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
      Module["GAI_ERRNO_MESSAGES"] = function() {
        abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
      Module["Protocols"] = function() {
        abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
      Module["Sockets"] = function() {
        abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
      Module["UNWIND_CACHE"] = function() {
        abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
      Module["readAsmConstArgs"] = function() {
        abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
      Module["jstoi_q"] = function() {
        abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
      Module["jstoi_s"] = function() {
        abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
      Module["PATH"] = function() {
        abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
      Module["PATH_FS"] = function() {
        abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
      Module["SYSCALLS"] = function() {
        abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
      Module["syscallMmap2"] = function() {
        abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
      Module["syscallMunmap"] = function() {
        abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
      Module["JSEvents"] = function() {
        abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
      Module["demangle"] = function() {
        abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
      Module["demangleAll"] = function() {
        abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
      Module["jsStackTrace"] = function() {
        abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
      Module["writeI53ToI64"] = function() {
        abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
      Module["writeI53ToI64Clamped"] = function() {
        abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
      Module["writeI53ToI64Signaling"] = function() {
        abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
      Module["writeI53ToU64Clamped"] = function() {
        abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
      Module["writeI53ToU64Signaling"] = function() {
        abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
      Module["readI53FromI64"] = function() {
        abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
      Module["readI53FromU64"] = function() {
        abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
      Module["convertI32PairToI53"] = function() {
        abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
      Module["convertU32PairToI53"] = function() {
        abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
      Module["Browser"] = function() {
        abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["FS"] = FS;
    if (!Object.getOwnPropertyDescriptor(Module, "MEMFS"))
      Module["MEMFS"] = function() {
        abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "TTY"))
      Module["TTY"] = function() {
        abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS"))
      Module["PIPEFS"] = function() {
        abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS"))
      Module["SOCKFS"] = function() {
        abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GL"))
      Module["GL"] = function() {
        abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet"))
      Module["emscriptenWebGLGet"] = function() {
        abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData"))
      Module["emscriptenWebGLGetTexPixelData"] = function() {
        abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform"))
      Module["emscriptenWebGLGetUniform"] = function() {
        abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib"))
      Module["emscriptenWebGLGetVertexAttrib"] = function() {
        abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AL"))
      Module["AL"] = function() {
        abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL"))
      Module["SDL"] = function() {
        abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx"))
      Module["SDL_gfx"] = function() {
        abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLUT"))
      Module["GLUT"] = function() {
        abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "EGL"))
      Module["EGL"] = function() {
        abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window"))
      Module["GLFW_Window"] = function() {
        abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW"))
      Module["GLFW"] = function() {
        abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLEW"))
      Module["GLEW"] = function() {
        abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "IDBStore"))
      Module["IDBStore"] = function() {
        abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError"))
      Module["runAndAbortIfError"] = function() {
        abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
      Module["emval_handle_array"] = function() {
        abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
      Module["emval_free_list"] = function() {
        abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
      Module["emval_symbols"] = function() {
        abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
      Module["init_emval"] = function() {
        abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
      Module["count_emval_handles"] = function() {
        abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
      Module["get_first_emval"] = function() {
        abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
      Module["getStringOrSymbol"] = function() {
        abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireHandle"))
      Module["requireHandle"] = function() {
        abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
      Module["emval_newers"] = function() {
        abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
      Module["craftEmvalAllocator"] = function() {
        abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
      Module["emval_get_global"] = function() {
        abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
      Module["emval_methodCallers"] = function() {
        abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
      Module["InternalError"] = function() {
        abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
      Module["BindingError"] = function() {
        abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
      Module["UnboundTypeError"] = function() {
        abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
      Module["PureVirtualError"] = function() {
        abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
      Module["init_embind"] = function() {
        abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
      Module["throwInternalError"] = function() {
        abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
      Module["throwBindingError"] = function() {
        abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
      Module["throwUnboundTypeError"] = function() {
        abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
      Module["ensureOverloadTable"] = function() {
        abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
      Module["exposePublicSymbol"] = function() {
        abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
      Module["replacePublicSymbol"] = function() {
        abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
      Module["extendError"] = function() {
        abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
      Module["createNamedFunction"] = function() {
        abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
      Module["registeredInstances"] = function() {
        abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
      Module["getBasestPointer"] = function() {
        abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance"))
      Module["registerInheritedInstance"] = function() {
        abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance"))
      Module["unregisterInheritedInstance"] = function() {
        abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
      Module["getInheritedInstance"] = function() {
        abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount"))
      Module["getInheritedInstanceCount"] = function() {
        abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances"))
      Module["getLiveInheritedInstances"] = function() {
        abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
      Module["registeredTypes"] = function() {
        abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
      Module["awaitingDependencies"] = function() {
        abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
      Module["typeDependencies"] = function() {
        abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
      Module["registeredPointers"] = function() {
        abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
      Module["registerType"] = function() {
        abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved"))
      Module["whenDependentTypesAreResolved"] = function() {
        abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
      Module["embind_charCodes"] = function() {
        abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
      Module["embind_init_charCodes"] = function() {
        abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
      Module["readLatin1String"] = function() {
        abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
      Module["getTypeName"] = function() {
        abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
      Module["heap32VectorToArray"] = function() {
        abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
      Module["requireRegisteredType"] = function() {
        abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
      Module["getShiftFromSize"] = function() {
        abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer"))
      Module["integerReadValueFromPointer"] = function() {
        abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer"))
      Module["enumReadValueFromPointer"] = function() {
        abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer"))
      Module["floatReadValueFromPointer"] = function() {
        abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer"))
      Module["simpleReadValueFromPointer"] = function() {
        abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
      Module["runDestructors"] = function() {
        abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "new_"))
      Module["new_"] = function() {
        abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
      Module["craftInvokerFunction"] = function() {
        abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
      Module["embind__requireFunction"] = function() {
        abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
      Module["tupleRegistrations"] = function() {
        abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
      Module["structRegistrations"] = function() {
        abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType"))
      Module["genericPointerToWireType"] = function() {
        abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType"))
      Module["constNoSmartPtrRawPointerToWireType"] = function() {
        abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType"))
      Module["nonConstNoSmartPtrRawPointerToWireType"] = function() {
        abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
      Module["init_RegisteredPointer"] = function() {
        abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
      Module["RegisteredPointer"] = function() {
        abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee"))
      Module["RegisteredPointer_getPointee"] = function() {
        abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor"))
      Module["RegisteredPointer_destructor"] = function() {
        abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject"))
      Module["RegisteredPointer_deleteObject"] = function() {
        abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType"))
      Module["RegisteredPointer_fromWireType"] = function() {
        abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
      Module["runDestructor"] = function() {
        abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
      Module["releaseClassHandle"] = function() {
        abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
      Module["finalizationGroup"] = function() {
        abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
      Module["detachFinalizer_deps"] = function() {
        abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
      Module["detachFinalizer"] = function() {
        abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
      Module["attachFinalizer"] = function() {
        abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
      Module["makeClassHandle"] = function() {
        abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
      Module["init_ClassHandle"] = function() {
        abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
      Module["ClassHandle"] = function() {
        abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
      Module["ClassHandle_isAliasOf"] = function() {
        abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted"))
      Module["throwInstanceAlreadyDeleted"] = function() {
        abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
      Module["ClassHandle_clone"] = function() {
        abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
      Module["ClassHandle_delete"] = function() {
        abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
      Module["deletionQueue"] = function() {
        abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
      Module["ClassHandle_isDeleted"] = function() {
        abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
      Module["ClassHandle_deleteLater"] = function() {
        abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
      Module["flushPendingDeletes"] = function() {
        abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
      Module["delayFunction"] = function() {
        abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
      Module["setDelayFunction"] = function() {
        abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
      Module["RegisteredClass"] = function() {
        abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer"))
      Module["shallowCopyInternalPointer"] = function() {
        abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
      Module["downcastPointer"] = function() {
        abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
      Module["upcastPointer"] = function() {
        abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
      Module["validateThis"] = function() {
        abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
      Module["char_0"] = function() {
        abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
      Module["char_9"] = function() {
        abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
      Module["makeLegalFunctionName"] = function() {
        abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
      Module["warnOnce"] = function() {
        abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
      Module["stackSave"] = function() {
        abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
      Module["stackRestore"] = function() {
        abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
      Module["stackAlloc"] = function() {
        abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
      Module["AsciiToString"] = function() {
        abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
      Module["stringToAscii"] = function() {
        abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
      Module["UTF16ToString"] = function() {
        abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
      Module["stringToUTF16"] = function() {
        abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
      Module["lengthBytesUTF16"] = function() {
        abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
      Module["UTF32ToString"] = function() {
        abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
      Module["stringToUTF32"] = function() {
        abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
      Module["lengthBytesUTF32"] = function() {
        abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
      Module["allocateUTF8"] = function() {
        abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
      Module["allocateUTF8OnStack"] = function() {
        abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["writeStackCookie"] = writeStackCookie;
    Module["checkStackCookie"] = checkStackCookie;
    Module["abortStackOverflow"] = abortStackOverflow;
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
      Object.defineProperty(Module, "ALLOC_NORMAL", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
      Object.defineProperty(Module, "ALLOC_STACK", {
        configurable: true,
        get: function() {
          abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC"))
      Object.defineProperty(Module, "ALLOC_DYNAMIC", {
        configurable: true,
        get: function() {
          abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE"))
      Object.defineProperty(Module, "ALLOC_NONE", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    var calledRun;
    Module["then"] = function(func) {
      if (calledRun) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function() {
          if (old)
            old();
          func(Module);
        };
      }
      return Module;
    };
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function run(args) {
      if (runDependencies > 0) {
        return;
      }
      writeStackCookie();
      preRun();
      if (runDependencies > 0)
        return;
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    Module["run"] = run;
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    return FaustModule2;
  };
}();
var Sha1 = {};
Sha1.hash = function(msg, utf8encode) {
  utf8encode = typeof utf8encode == "undefined" ? true : utf8encode;
  if (utf8encode)
    msg = Utf8.encode(msg);
  var K = [1518500249, 1859775393, 2400959708, 3395469782];
  msg += String.fromCharCode(128);
  var l = msg.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);
    for (var j = 0; j < 16; j++) {
      M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3);
    }
  }
  M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (msg.length - 1) * 8 & 4294967295;
  var H0 = 1732584193;
  var H1 = 4023233417;
  var H2 = 2562383102;
  var H3 = 271733878;
  var H4 = 3285377520;
  var W = new Array(80);
  var a, b, c, d, e;
  for (var i = 0; i < N; i++) {
    for (var t = 0; t < 16; t++)
      W[t] = M[i][t];
    for (var t = 16; t < 80; t++)
      W[t] = Sha1.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    a = H0;
    b = H1;
    c = H2;
    d = H3;
    e = H4;
    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t] & 4294967295;
      e = d;
      d = c;
      c = Sha1.ROTL(b, 30);
      b = a;
      a = T;
    }
    H0 = H0 + a & 4294967295;
    H1 = H1 + b & 4294967295;
    H2 = H2 + c & 4294967295;
    H3 = H3 + d & 4294967295;
    H4 = H4 + e & 4294967295;
  }
  return Sha1.toHexStr(H0) + Sha1.toHexStr(H1) + Sha1.toHexStr(H2) + Sha1.toHexStr(H3) + Sha1.toHexStr(H4);
};
Sha1.f = function(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
};
Sha1.ROTL = function(x, n) {
  return x << n | x >>> 32 - n;
};
Sha1.toHexStr = function(n) {
  var s = "", v;
  for (var i = 7; i >= 0; i--) {
    v = n >>> i * 4 & 15;
    s += v.toString(16);
  }
  return s;
};
var Utf8 = {};
Utf8.encode = function(strUni) {
  var strUtf = strUni.replace(/[\\u0080-\\u07ff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
  });
  strUtf = strUtf.replace(/[\\u0800-\\uffff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | cc & 63);
  });
  return strUtf;
};
Utf8.decode = function(strUtf) {
  var strUni = strUtf.replace(/[\\u00e0-\\u00ef][\\u0080-\\u00bf][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 15) << 12 | (c.charCodeAt(1) & 63) << 6 | c.charCodeAt(2) & 63;
    return String.fromCharCode(cc);
  });
  strUni = strUni.replace(/[\\u00c0-\\u00df][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
    return String.fromCharCode(cc);
  });
  return strUni;
};
var readyResolver = {
  current: void 0
};
var readyPromise = new Promise((resolve) => {
  readyResolver.current = resolve;
});
var faust_module$1 = FaustModule({
  onRuntimeInitialized: readyResolver.current
});
faust_module$1.lengthBytesUTF8 = function(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343)
      u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
    if (u <= 127) {
      ++len;
    } else if (u <= 2047) {
      len += 2;
    } else if (u <= 65535) {
      len += 3;
    } else if (u <= 2097151) {
      len += 4;
    } else if (u <= 67108863) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
};
var faust = faust || {};
faust.remap = function(v, mn0, mx0, mn1, mx1) {
  return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
};
faust.debug = false;
faust.createWasmCDSPFactoryFromString = faust_module$1.cwrap("createWasmCDSPFactoryFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.deleteAllWasmCDSPFactories = faust_module$1.cwrap("deleteAllWasmCDSPFactories", null, []);
faust.expandCDSPFromString = faust_module$1.cwrap("expandCDSPFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.getCLibFaustVersion = faust_module$1.cwrap("getCLibFaustVersion", "number", []);
faust.getWasmCModule = faust_module$1.cwrap("getWasmCModule", "number", [
  "number"
]);
faust.getWasmCModuleSize = faust_module$1.cwrap("getWasmCModuleSize", "number", [
  "number"
]);
faust.getWasmCHelpers = faust_module$1.cwrap("getWasmCHelpers", "number", [
  "number"
]);
faust.freeWasmCModule = faust_module$1.cwrap("freeWasmCModule", null, ["number"]);
faust.freeCMemory = faust_module$1.cwrap("freeCMemory", null, ["number"]);
faust.cleanupAfterException = faust_module$1.cwrap("cleanupAfterException", null, []);
faust.getErrorAfterException = faust_module$1.cwrap("getErrorAfterException", "number", []);
faust.error_msg = null;
faust.factory_number = 0;
faust.factory_table = [];
faust.getErrorMessage = function() {
  return faust.error_msg;
};
faust.getLibFaustVersion = function() {
  return faust_module$1.UTF8ToString(faust.getCLibFaustVersion());
};
faust.ab2str = function(buf) {
  if (buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  } else {
    return null;
  }
};
faust.str2ab = function(str) {
  if (str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  } else {
    return null;
  }
};
faust.compileCode = function(factory_name, code, argv, internal_memory) {
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  var argv_aux = argv === void 0 ? new Array() : argv;
  argv_aux.push("-cn", factory_name);
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv_aux.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
  for (var i = 0; i < argv_aux.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv_aux[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv_aux[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var module_code_ptr = faust.createWasmCDSPFactoryFromString(name_ptr, code_ptr, argv_aux.length, argv_ptr, error_msg_ptr, internal_memory);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    if (module_code_ptr === 0) {
      return null;
    } else {
      var factory_code_ptr = faust.getWasmCModule(module_code_ptr);
      var factory_code_size = faust.getWasmCModuleSize(module_code_ptr);
      var factory_code = new Uint8Array(factory_code_size);
      for (var i = 0; i < factory_code_size; i++) {
        factory_code[i] = faust_module$1.HEAP8[factory_code_ptr + i];
      }
      var helpers_code_ptr = faust.getWasmCHelpers(module_code_ptr);
      var helpers_code = faust_module$1.UTF8ToString(helpers_code_ptr);
      faust_module$1._free(code_ptr);
      faust_module$1._free(name_ptr);
      faust_module$1._free(error_msg_ptr);
      faust.freeWasmCModule(module_code_ptr);
      argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
      for (var i = 0; i < argv_aux.length; i++) {
        faust_module$1._free(argv_ptr_buffer[i]);
      }
      faust_module$1._free(argv_ptr);
      return { code: factory_code, code_source: code, helpers: helpers_code };
    }
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.createDSPFactoryAux = function(code, argv, internal_memory, callback2) {
  var argv_str = "";
  for (var i = 0; i < argv.length; i++) {
    argv_str += argv[i];
  }
  var sha_key2 = Sha1.hash(code + (internal_memory ? "internal_memory" : "external_memory") + argv_str, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
    return;
  }
  var factory_name12 = "mydsp" + faust.factory_number;
  var factory_name22 = "effect" + faust.factory_number++;
  var code_effect = "adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";
  code_effect = code_effect.concat(code);
  code_effect = code_effect.concat("};");
  code_effect = code_effect.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");
  var res1 = faust.compileCode(factory_name12, code, argv, internal_memory);
  if (res1) {
    var res2 = faust.compileCode(factory_name22, code_effect, argv, internal_memory);
    if (res2) {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, factory_name22, res2.code, res2.code_source, res2.helpers, sha_key2, callback2);
    } else {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, null, null, null, null, sha_key2, callback2);
    }
  } else {
    callback2(null);
  }
};
faust.createDSPFactory = function(code, argv, callback2) {
  readyPromise.then(() => {
    faust.createDSPFactoryAux(code, argv, true, callback2);
  });
};
faust.ready = readyPromise;
faust.expandDSP = function(code, argv) {
  argv.push("-lang");
  argv.push("wasm");
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var sha_key_ptr = faust_module$1._malloc(64);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  argv = argv === void 0 ? new Array() : argv;
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
  for (var i = 0; i < argv.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var expand_dsp_ptr = faust.expandCDSPFromString(name_ptr, code_ptr, argv.length, argv_ptr, sha_key_ptr, error_msg_ptr);
    var expand_dsp = faust_module$1.UTF8ToString(expand_dsp_ptr);
    var sha_key2 = faust_module$1.UTF8ToString(sha_key_ptr);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    faust_module$1._free(code_ptr);
    faust_module$1._free(name_ptr);
    faust_module$1._free(sha_key_ptr);
    faust_module$1._free(error_msg_ptr);
    faust.freeCMemory(expand_dsp_ptr);
    argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
    for (var i = 0; i < argv.length; i++) {
      faust_module$1._free(argv_ptr_buffer[i]);
    }
    faust_module$1._free(argv_ptr);
    return expand_dsp;
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.writeDSPFactoryToMachine = function(factory2) {
  return {
    name: factory2.name,
    code: faust.ab2str(factory2.code),
    code_source: factory2.code_source,
    helpers: factory2.helpers,
    name_effect: factory2.name_effect,
    code_effect: faust.ab2str(factory2.code_effect),
    code_source_effect: factory2.code_source_effect,
    helpers_effect: factory2.helpers_effect
  };
};
faust.readDSPFactoryFromMachine = function(machine, callback2) {
  var sha_key2 = Sha1.hash(machine.code_source, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
  } else {
    faust.readDSPFactoryFromMachineAux(machine.name, faust.str2ab(machine.code), machine.code_source, machine.helpers, machine.name_effect, faust.str2ab(machine.code_effect), machine.code_source_effect, machine.helpers_effect, sha_key2, callback2);
  }
};
faust.readDSPFactoryFromMachineAux = function(factory_name1, factory_code1, factory_code_source1, helpers_code1, factory_name2, factory_code2, factory_code_source2, helpers_code2, sha_key, callback) {
  WebAssembly.compile(factory_code1).then((module) => {
    var factory = {};
    factory.polyphony = [];
    factory.code = factory_code1;
    factory.code_source = factory_code_source1;
    factory.helpers = helpers_code1;
    factory.module = module;
    var jsToEval = helpers_code1 + "\\nreturn [getJSON" + factory_name1 + ", getBase64Code" + factory_name1 + "];";
    var evalResult = new Function(jsToEval)();
    factory.getJSON = evalResult[0];
    factory.getBase64Code = evalResult[1];
    try {
      factory.json_object = JSON.parse(factory.getJSON());
    } catch (e) {
      faust.error_msg = "Error in JSON.parse: " + e;
      callback(null);
      throw true;
    }
    factory.name = factory_name1;
    factory.sha_key = sha_key;
    faust.factory_table[sha_key] = factory;
    if (factory_name2) {
      WebAssembly.compile(factory_code2).then((module_effect) => {
        factory.code_effect = factory_code2;
        factory.code_source_effect = factory_code_source2;
        factory.helpers_effect = helpers_code2;
        factory.module_effect = module_effect;
        eval(helpers_code2);
        factory.getJSONeffect = eval("getJSON" + factory_name2);
        factory.getBase64Codeeffect = eval("getBase64Code" + factory_name2);
        try {
          factory.effect_json_object = JSON.parse(factory.getJSONeffect());
        } catch (e) {
          faust.error_msg = "Error in JSON.parse: " + e;
          callback(null);
          throw true;
        }
        factory.name_effect = factory_name2;
        callback(factory);
      }).catch(function(error) {
        faust.error_msg = "Faust DSP factory cannot be compiled";
        callback(null);
      });
    } else {
      callback(factory);
    }
  }).catch(function(error) {
    faust.error_msg = "Faust DSP factory cannot be compiled";
    callback(null);
  });
};
faust.deleteDSPFactory = function(factory2) {
  faust.factory_table[factory2.sha_key] = null;
};
faust.createDSPInstance = function(factory2, context, buffer_size, callback2) {
  context.resume();
  var importObject = {
    env: {
      memoryBase: 0,
      tableBase: 0,
      _abs: Math.abs,
      _acosf: Math.acos,
      _asinf: Math.asin,
      _atanf: Math.atan,
      _atan2f: Math.atan2,
      _ceilf: Math.ceil,
      _cosf: Math.cos,
      _expf: Math.exp,
      _floorf: Math.floor,
      _fmodf: function(x, y) {
        return x % y;
      },
      _logf: Math.log,
      _log10f: Math.log10,
      _max_f: Math.max,
      _min_f: Math.min,
      _remainderf: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _powf: Math.pow,
      _roundf: Math.fround,
      _sinf: Math.sin,
      _sqrtf: Math.sqrt,
      _tanf: Math.tan,
      _acoshf: Math.acosh,
      _asinhf: Math.asinh,
      _atanhf: Math.atanh,
      _coshf: Math.cosh,
      _sinhf: Math.sinh,
      _tanhf: Math.tanh,
      _isnanf: Number.isNaN,
      _isinff: function(x) {
        return !isFinite(x);
      },
      _copysignf: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      _acos: Math.acos,
      _asin: Math.asin,
      _atan: Math.atan,
      _atan2: Math.atan2,
      _ceil: Math.ceil,
      _cos: Math.cos,
      _exp: Math.exp,
      _floor: Math.floor,
      _fmod: function(x, y) {
        return x % y;
      },
      _log: Math.log,
      _log10: Math.log10,
      _max_: Math.max,
      _min_: Math.min,
      _remainder: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _pow: Math.pow,
      _round: Math.fround,
      _sin: Math.sin,
      _sqrt: Math.sqrt,
      _tan: Math.tan,
      _acosh: Math.acosh,
      _asinh: Math.asinh,
      _atanh: Math.atanh,
      _cosh: Math.cosh,
      _sinh: Math.sinh,
      _tanh: Math.tanh,
      _isnan: Number.isNaN,
      _isinf: function(x) {
        return !isFinite(x);
      },
      _copysign: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
    }
  };
  performance.now();
  WebAssembly.instantiate(factory2.module, importObject).then((dsp_instance) => {
    performance.now();
    var sp;
    try {
      sp = context.createScriptProcessor(buffer_size, dsp_instance.exports.getNumInputs(0), dsp_instance.exports.getNumOutputs(0));
    } catch (e) {
      faust.error_msg = "Error in createScriptProcessor: " + e;
      callback2(null);
      return;
    }
    sp.output_handler = null;
    sp.ins = null;
    sp.outs = null;
    sp.compute_handler = null;
    sp.dspInChannnels = [];
    sp.dspOutChannnels = [];
    sp.fPitchwheelLabel = [];
    sp.fCtrlLabel = new Array(128);
    for (var i = 0; i < sp.fCtrlLabel.length; i++) {
      sp.fCtrlLabel[i] = [];
    }
    sp.outputs_timer = 5;
    sp.outputs_items = [];
    sp.inputs_items = [];
    sp.ptr_size = 4;
    sp.sample_size = 4;
    sp.dsp = 0;
    sp.pathTable = [];
    sp.factory = dsp_instance.exports;
    sp.HEAP = dsp_instance.exports.memory.buffer;
    sp.HEAP32 = new Int32Array(sp.HEAP);
    sp.HEAPF32 = new Float32Array(sp.HEAP);
    sp.numIn = sp.factory.getNumInputs(sp.dsp);
    sp.numOut = sp.factory.getNumOutputs(sp.dsp);
    sp.audio_heap_ptr = parseInt(factory2.json_object.size);
    sp.audio_heap_ptr_inputs = sp.audio_heap_ptr;
    sp.audio_heap_ptr_outputs = sp.audio_heap_ptr_inputs + sp.numIn * sp.ptr_size;
    sp.audio_heap_inputs = sp.audio_heap_ptr_outputs + sp.numOut * sp.ptr_size;
    sp.audio_heap_outputs = sp.audio_heap_inputs + sp.numIn * buffer_size * sp.sample_size;
    sp.update_outputs = function() {
      if (sp.outputs_items.length > 0 && sp.output_handler && sp.outputs_timer-- === 0) {
        sp.outputs_timer = 5;
        for (var i2 = 0; i2 < sp.outputs_items.length; i2++) {
          sp.output_handler(sp.outputs_items[i2], sp.factory.getParamValue(sp.dsp, sp.pathTable[sp.outputs_items[i2]]));
        }
      }
    };
    sp.compute = function(e) {
      var i2;
      for (i2 = 0; i2 < sp.numIn; i2++) {
        var input = e.inputBuffer.getChannelData(i2);
        var dspInput = sp.dspInChannnels[i2];
        dspInput.set(input);
      }
      if (sp.compute_handler) {
        sp.compute_handler(buffer_size);
      }
      sp.factory.compute(sp.dsp, buffer_size, sp.ins, sp.outs);
      sp.update_outputs();
      for (i2 = 0; i2 < sp.numOut; i2++) {
        var output = e.outputBuffer.getChannelData(i2);
        var dspOutput = sp.dspOutChannnels[i2];
        output.set(dspOutput);
      }
    };
    sp.parse_ui = function(ui) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        sp.parse_group(ui[i2]);
      }
    };
    sp.parse_group = function(group) {
      if (group.items) {
        sp.parse_items(group.items);
      }
    };
    sp.parse_items = function(items) {
      for (var i2 = 0; i2 < items.length; i2++) {
        sp.parse_item(items[i2]);
      }
    };
    sp.parse_item = function(item) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        sp.parse_items(item.items);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        sp.outputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        sp.inputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                sp.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                sp.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    sp.initAux = function() {
      var i2;
      sp.onaudioprocess = sp.compute;
      if (sp.numIn > 0) {
        sp.ins = sp.audio_heap_ptr_inputs;
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.HEAP32[(sp.ins >> 2) + i2] = sp.audio_heap_inputs + buffer_size * sp.sample_size * i2;
        }
        var dspInChans = sp.HEAP32.subarray(sp.ins >> 2, sp.ins + sp.numIn * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.dspInChannnels[i2] = sp.HEAPF32.subarray(dspInChans[i2] >> 2, dspInChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      if (sp.numOut > 0) {
        sp.outs = sp.audio_heap_ptr_outputs;
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.HEAP32[(sp.outs >> 2) + i2] = sp.audio_heap_outputs + buffer_size * sp.sample_size * i2;
        }
        var dspOutChans = sp.HEAP32.subarray(sp.outs >> 2, sp.outs + sp.numOut * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.dspOutChannnels[i2] = sp.HEAPF32.subarray(dspOutChans[i2] >> 2, dspOutChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      sp.parse_ui(factory2.json_object.ui);
      sp.factory.init(sp.dsp, context.sampleRate);
    };
    sp.destroy = function() {
    };
    sp.getSampleRate = function() {
      return context.sampleRate;
    };
    sp.getNumInputs = function() {
      return sp.factory.getNumInputs(sp.dsp);
    };
    sp.getNumOutputs = function() {
      return sp.factory.getNumOutputs(sp.dsp);
    };
    sp.init = function(sample_rate) {
      sp.factory.init(sp.dsp, sample_rate);
    };
    sp.instanceInit = function(sample_rate) {
      sp.factory.instanceInit(sp.dsp, sample_rate);
    };
    sp.instanceConstants = function(sample_rate) {
      sp.factory.instanceConstants(sp.dsp, sample_rate);
    };
    sp.instanceResetUserInterface = function() {
      sp.factory.instanceResetUserInterface(sp.dsp);
    };
    sp.instanceClear = function() {
      sp.factory.instanceClear(sp.dsp);
    };
    sp.metadata = function(handler) {
      if (factory2.json_object.meta) {
        factory2.json_object.meta.forEach(function(meta) {
          handler.declare(Object.keys(meta)[0], Object.values(meta)[0]);
        });
      }
    };
    sp.setOutputParamHandler = function(handler) {
      sp.output_handler = handler;
    };
    sp.getOutputParamHandler = function() {
      return sp.output_handler;
    };
    sp.ctrlChange = function(channel, ctrl, value) {
      for (var i2 = 0; i2 < sp.fCtrlLabel[ctrl].length; i2++) {
        var path = sp.fCtrlLabel[ctrl][i2].path;
        sp.setParamValue(path, faust.remap(value, 0, 127, sp.fCtrlLabel[ctrl][i2].min, sp.fCtrlLabel[ctrl][i2].max));
        if (sp.output_handler) {
          sp.output_handler(path, sp.getParamValue(path));
        }
      }
    };
    sp.pitchWheel = function(channel, wheel) {
      for (var i2 = 0; i2 < sp.fPitchwheelLabel.length; i2++) {
        var pw = sp.fPitchwheelLabel[i2];
        sp.setParamValue(pw.path, faust.remap(wheel, 0, 16383, pw.min, pw.max));
        if (sp.output_handler) {
          sp.output_handler(pw.path, sp.getParamValue(pw.path));
        }
      }
    };
    sp.setParamValue = function(path, val) {
      return sp.factory.setParamValue(sp.dsp, sp.pathTable[path], val);
    };
    sp.getParamValue = function(path) {
      return sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);
    };
    sp.getParams = function() {
      return sp.inputs_items;
    };
    sp.getJSON = function() {
      return factory2.getJSON();
    };
    sp.initAux();
    callback2(sp);
  }).catch(function(error) {
    faust.error_msg = "Faust DSP cannot be instantiated";
    callback2(null);
  });
};
faust.deleteDSPInstance = function(dsp) {
};
var mydspProcessorString = \`

    'use strict';

    function getJSONmydsp() { return \\\`GETJSON\\\`; }
    function getBase64Codemydsp() { return \\\`GETBASE64CODE\\\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
\`;
faust.createDSPWorkletInstanceAux = function(factory2, context, callback2) {
  context.resume().catch(() => {
  });
  var audio_node = new AudioWorkletNode(context, factory2.name, {
    numberOfInputs: parseInt(factory2.json_object.inputs) > 0 ? 1 : 0,
    numberOfOutputs: parseInt(factory2.json_object.outputs) > 0 ? 1 : 0,
    channelCount: Math.max(1, parseInt(factory2.json_object.inputs)),
    outputChannelCount: [parseInt(factory2.json_object.outputs)],
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  });
  audio_node.onprocessorerror = () => {
    console.log("An error from mydspProcessor was detected.");
  };
  audio_node.handleMessage = function(event) {
    var msg = event.data;
    if (this.output_handler) {
      this.output_handler(msg.path, msg.value);
    }
  };
  audio_node.init = function() {
    this.parse_ui = function(ui, obj) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        this.parse_group(ui[i2], obj);
      }
    };
    this.parse_group = function(group, obj) {
      if (group.items) {
        this.parse_items(group.items, obj);
      }
    };
    this.parse_items = function(items, obj) {
      for (var i2 = 0; i2 < items.length; i2++) {
        this.parse_item(items[i2], obj);
      }
    };
    this.parse_item = function(item, obj) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        this.parse_items(item.items, obj);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        obj.outputs_items.push(item.address);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        obj.inputs_items.push(item.address);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                obj.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                obj.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    this.output_handler = null;
    this.json_object = factory2.json_object;
    this.inputs_items = [];
    this.outputs_items = [];
    this.fPitchwheelLabel = [];
    this.fCtrlLabel = new Array(128);
    for (var i = 0; i < this.fCtrlLabel.length; i++) {
      this.fCtrlLabel[i] = [];
    }
    this.parse_ui(this.json_object.ui, this);
    this.port.onmessage = this.handleMessage.bind(this);
  };
  audio_node.init();
  audio_node.destroy = function() {
    this.port.postMessage({ type: "destroy" });
    this.port.close();
  };
  audio_node.getJSON = function() {
    return factory2.getJSON();
  };
  audio_node.setParamValue = function(path, val) {
    this.parameters.get(path).setValueAtTime(val, 0);
  };
  audio_node.getParamValue = function(path) {
    return this.parameters.get(path).value;
  };
  audio_node.setOutputParamHandler = function(handler) {
    this.output_handler = handler;
  };
  audio_node.getOutputParamHandler = function() {
    return this.output_handler;
  };
  audio_node.getNumInputs = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.getNumOutputs = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.inputChannelCount = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.outputChannelCount = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.getParams = function() {
    return this.inputs_items;
  };
  audio_node.getDescriptor = function() {
    return this.inputs_items;
  };
  audio_node.ctrlChange = function(channel, ctrl, value) {
    for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
      var path = this.fCtrlLabel[ctrl][i].path;
      this.setParamValue(path, audio_node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
      if (this.output_handler) {
        this.output_handler(path, this.getParamValue(path));
      }
    }
  };
  audio_node.pitchWheel = function(channel, wheel) {
    for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
      var pw = this.fPitchwheelLabel[i];
      this.setParamValue(pw.path, audio_node.remap(wheel, 0, 16383, pw.min, pw.max));
      if (this.output_handler) {
        this.output_handler(pw.path, this.getParamValue(pw.path));
      }
    }
  };
  audio_node.midiMessage = function(data) {
    var cmd = data[0] >> 4;
    var channel = data[0] & 15;
    var data1 = data[1];
    var data2 = data[2];
    if (channel === 9) {
      return;
    } else if (cmd === 11) {
      this.ctrlChange(channel, data1, data2);
    } else if (cmd === 14) {
      this.pitchWheel(channel, data2 * 128 + data1);
    }
  };
  audio_node.onMidi = function(data) {
    this.midiMessage(data);
  };
  audio_node.getState = async function() {
    var params = new Object();
    for (let i = 0; i < this.getDescriptor().length; i++) {
      Object.assign(params, {
        [this.getDescriptor()[i]]: \`\${this.getParam(this.getDescriptor()[i])}\`
      });
    }
    return new Promise((resolve) => {
      resolve(params);
    });
  };
  audio_node.setState = async function(state) {
    return new Promise((resolve) => {
      for (const param in state) {
        if (state.hasOwnProperty(param))
          this.setParam(param, state[param]);
      }
      try {
        this.gui.setAttribute("state", JSON.stringify(state));
      } catch (error) {
        console.warn("Plugin without gui or GUI not defined", error);
      }
      resolve(state);
    });
  };
  audio_node.setPatch = function(patch) {
    this.setState(this.presets[patch]);
  };
  audio_node.metadata = function(handler) {
  };
  audio_node.remap = function(v, mn0, mx0, mn1, mx1) {
    return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
  };
  callback2(audio_node);
};
faust.createDSPWorkletInstance = function(factory2, context, callback2) {
  var re1 = /mydsp/g;
  var re2 = /GETJSON/g;
  var re3 = /GETBASE64CODE/g;
  var mydspProcessorString1 = mydspProcessorString.replace(re1, factory2.name);
  var mydspProcessorString2 = mydspProcessorString1.replace(re2, factory2.getJSON());
  var mydspProcessorString3 = mydspProcessorString2.replace(re3, factory2.getBase64Code());
  var url = window.URL.createObjectURL(new Blob([mydspProcessorString3], { type: "text/javascript" }));
  context.audioWorklet.addModule(url).then(function() {
    faust.createDSPWorkletInstanceAux(factory2, context, callback2);
  }).catch(function(error) {
    alert(error);
  });
};
faust.deleteDSPWorkletInstance = function(dsp) {
};
faust.ready;
const factoryCache = /* @__PURE__ */ new Map();
async function compile(audioContext, dsp) {
  const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];
  let factoryPromise = factoryCache.get(dsp);
  if (!factoryPromise) {
    factoryPromise = new Promise((resolve) => faust.createDSPFactory(dsp, argv, resolve));
    factoryCache.set(dsp, factoryPromise);
  }
  const factory2 = await factoryPromise;
  if (!factory2) {
    throw new Error(faust.error_msg);
  }
  const node = await new Promise((resolve) => faust.createDSPWorkletInstance(factory2, audioContext, resolve));
  if (!node) {
    throw new Error(faust.error_msg);
  }
  node.ui = JSON.parse(node.getJSON()).ui;
  const outputValues = /* @__PURE__ */ new Map();
  node.setOutputParamHandler((path, value) => {
    outputValues.set(path, value);
  });
  node.getOutputValue = (path) => {
    return outputValues.get(path) ?? 0;
  };
  return node;
}
async function offlineRenderDspInner(offlineCtx, source, props) {
  const node = await compile(offlineCtx, props.dsp);
  source.connect(node);
  node.connect(offlineCtx.destination);
}
exports.offlineRenderDspInner = offlineRenderDspInner;
`,offlineRenderInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function audioBufferToWav(buffer, opt) {
  opt = opt || {};
  var numChannels = buffer.numberOfChannels;
  var sampleRate = buffer.sampleRate;
  var format = opt.float32 ? 3 : 1;
  var bitDepth = format === 3 ? 32 : 16;
  var result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }
  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}
function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8;
  var blockAlign = numChannels * bytesPerSample;
  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  var view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }
  return buffer;
}
function interleave(inputL, inputR) {
  var length = inputL.length + inputR.length;
  var result = new Float32Array(length);
  var index = 0;
  var inputIndex = 0;
  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}
function writeFloat32(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}
function floatTo16BitPCM(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
  }
}
function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
function isObjectType(type, value) {
  return Object.prototype.toString.call(value) === \`[object \${type}]\`;
}
function isAudioArray(value) {
  return Array.isArray(value) && value.length > 0 && Array.isArray(value[0]);
}
function isFloat32AudioArray(value) {
  return Array.isArray(value) && value.length > 0 && isObjectType("Float32Array", value[0]);
}
function isAudioBuffer(value) {
  return isObjectType("AudioBuffer", value);
}
function isArrayBuffer(value) {
  return isObjectType("ArrayBuffer", value);
}
function audioArrayToAudioBuffer(channels, audioCtx) {
  const buffer = audioCtx.createBuffer(channels.length, channels[0].length, audioCtx.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}
async function arrayBufferToAudioBuffer(arrayBuffer, audioCtx) {
  return await new Promise((resolve) => audioCtx.decodeAudioData(arrayBuffer, resolve));
}
async function toAudioBuffer(input, audioCtx = new AudioContext()) {
  if (isAudioBuffer(input)) {
    return input;
  }
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtx = new AudioContext()) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const buffer = await toAudioBuffer(input, audioCtx);
  return audioBufferToWav(buffer, { float32: true });
}
function offlineRenderInner(callback) {
  return async (params) => {
    const { channels, length, sampleRate, inputArrayBuffer, props } = params;
    const offlineContext = new OfflineAudioContext(channels, length, sampleRate);
    let source;
    if (inputArrayBuffer) {
      source = offlineContext.createBufferSource();
      source.buffer = await toAudioBuffer(inputArrayBuffer, offlineContext);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav(e,o){o=o||{};var a=e.numberOfChannels,i=e.sampleRate,c=o.float32?3:1,h=c===3?32:16,g;return a===2?g=interleave(e.getChannelData(0),e.getChannelData(1)):g=e.getChannelData(0),encodeWAV(g,c,i,a,h)}function encodeWAV(e,o,a,i,c){var h=c/8,g=i*h,Z=new ArrayBuffer(44+e.length*h),$=new DataView(Z);return writeString($,0,"RIFF"),$.setUint32(4,36+e.length*h,!0),writeString($,8,"WAVE"),writeString($,12,"fmt "),$.setUint32(16,16,!0),$.setUint16(20,o,!0),$.setUint16(22,i,!0),$.setUint32(24,a,!0),$.setUint32(28,a*g,!0),$.setUint16(32,g,!0),$.setUint16(34,c,!0),writeString($,36,"data"),$.setUint32(40,e.length*h,!0),o===1?floatTo16BitPCM($,44,e):writeFloat32($,44,e),Z}function interleave(e,o){for(var a=e.length+o.length,i=new Float32Array(a),c=0,h=0;c<a;)i[c++]=e[h],i[c++]=o[h],h++;return i}function writeFloat32(e,o,a){for(var i=0;i<a.length;i++,o+=4)e.setFloat32(o,a[i],!0)}function floatTo16BitPCM(e,o,a){for(var i=0;i<a.length;i++,o+=2){var c=Math.max(-1,Math.min(1,a[i]));e.setInt16(o,c<0?c*32768:c*32767,!0)}}function writeString(e,o,a){for(var i=0;i<a.length;i++)e.setUint8(o+i,a.charCodeAt(i))}function isObjectType(e,o){return Object.prototype.toString.call(o)===`[object ${e}]`}function isAudioArray(e){return Array.isArray(e)&&e.length>0&&Array.isArray(e[0])}function isFloat32AudioArray(e){return Array.isArray(e)&&e.length>0&&isObjectType("Float32Array",e[0])}function isAudioBuffer(e){return isObjectType("AudioBuffer",e)}function isArrayBuffer(e){return isObjectType("ArrayBuffer",e)}function audioArrayToAudioBuffer(e,o){const a=o.createBuffer(e.length,e[0].length,o.sampleRate);for(let i=0;i<a.numberOfChannels;i++){const c=a.getChannelData(i);for(let h=0;h<a.length;h++)c[h]=e[i][h]}return a}function audioBufferToFloat32AudioArray(e){const o=[];for(let a=0;a<e.numberOfChannels;a++)o.push(e.getChannelData(a));return o}function arrayToFloat32AudioArray(e){return e.map(o=>new Float32Array(o))}async function arrayBufferToAudioBuffer(e,o){return await new Promise(a=>o.decodeAudioData(e,a))}function toFloat32AudioArray(e){if(isFloat32AudioArray(e))return e;if(isAudioArray(e))return arrayToFloat32AudioArray(e);if(isAudioBuffer(e))return audioBufferToFloat32AudioArray(e);throw new Error(`toFloat32AudioArray: unconvertible input type: ${e}`)}async function toAudioBuffer(e,o=new AudioContext){if(isAudioBuffer(e))return e;if(isArrayBuffer(e))return arrayBufferToAudioBuffer(e,o);if(isAudioArray(e)||isFloat32AudioArray(e))return audioArrayToAudioBuffer(e,o);throw new Error(`toAudioBuffer: unconvertible input type: ${e}`)}async function toArrayBuffer(e,o=new AudioContext){if(isArrayBuffer(e))return e;const a=await toAudioBuffer(e,o);return audioBufferToWav(a,{float32:!0})}var runInIframeInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (message.source !== window.parent || message.origin !== window.location.origin) {
        return;
      }
      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);
  });
}
async function sendResult(result, transferrables) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}
async function runInIframeInner(callback) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
exports.runInIframeInner = runInIframeInner;
`;async function runInIframe(e){const{functionString:o,params:a,transferrables:i=[]}=e,c=document.createElement("iframe");c.style.display="none",document.body.append(c);const{contentWindow:h}=c;if(!h)throw new Error("contentWindow not available on iframe");return h.document.write(`<script>
      var exports = {};
      ${o}
      ${runInIframeInnerStringified}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(g=>{const Z=$=>{$.source===h&&(window.removeEventListener("message",Z),c.remove(),g($.data))};window.addEventListener("message",Z),h.postMessage(a,window.location.origin,i)})}async function offlineRender(e){var mn,cn;const{functionString:o="",channels:a,sampleRate:i,input:c,props:h}=e;let{length:g}=e,Z,$=[];c&&(Z=await toArrayBuffer(c),$=[Z],g===void 0&&(g=(cn=(mn=toFloat32AudioArray(c)[0])==null?void 0:mn.length)!=null?cn:0));const rn=await runInIframe({functionString:`
      ${offlineRenderInnerStringified}
      ${o}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:a,sampleRate:i,inputArrayBuffer:Z,length:g!=null?g:0,props:h},transferrables:$}),dn=await toAudioBuffer(rn);return toFloat32AudioArray(dn)}async function offlineRenderDsp(e){const{dsp:o,...a}=e;return offlineRender({functionString:`
      ${offlineRenderDspInnerStringified}
      exports.buildContext = exports.offlineRenderDspInner;
    `,props:{dsp:o},...a})}async function callback(){console.log("go");const e={channels:2,sampleRate:48e3,input:[[1,2,3,0,5,6,7,8,9,10],[1,2,3,0,5,6,7,8,9,10]],dsp:`import("stdfaust.lib");
    process = *(0.5),*(2);`};for(let o=0;o<3;o++)console.log("result",await offlineRenderDsp(e));return()=>{}}const dspDefinition={id:"offline-render-dsp-test",name:"Offline render DSP test",description:"Try to render Faust DSP offline",type:"callback",callback},all=[dspDefinition$f,dspDefinition$e,dspDefinition$d,dspDefinition$c,dspDefinition$b,dspDefinition$a,dspDefinition$9,dspDefinition$8,dspDefinition$7,dspDefinition$6,dspDefinition$5,dspDefinition$4,dspDefinition$3,dspDefinition$2,dspDefinition$1,dspDefinition],control="_control_sxngc_1",value="_value_sxngc_8",button="_button_sxngc_12",inputContainer="_inputContainer_sxngc_16",inputRange="_inputRange_sxngc_20";var classes$2={control,value,button,inputContainer,inputRange};const useAnimationFrame=(e,o)=>{const a=react.exports.useRef(0),i=react.exports.useRef(performance.now()),c=react.exports.useRef(performance.now()),h=()=>{const g=performance.now(),Z=(g-c.current)/1e3,$=(g-i.current)/1e3;e(Z,$),i.current=g,a.current=requestAnimationFrame(h)};react.exports.useEffect(()=>(a.current=requestAnimationFrame(h),()=>cancelAnimationFrame(a.current)),o)};var jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=react.exports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(e,o,a){var i,c={},h=null,g=null;a!==void 0&&(h=""+a),o.key!==void 0&&(h=""+o.key),o.ref!==void 0&&(g=o.ref);for(i in o)m.call(o,i)&&!p.hasOwnProperty(i)&&(c[i]=o[i]);if(e&&e.defaultProps)for(i in o=e.defaultProps,o)c[i]===void 0&&(c[i]=o[i]);return{$$typeof:k,type:e,key:h,ref:g,props:c,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;const jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs,Fragment=jsxRuntime.exports.Fragment;function Controls(e){const{items:o,node:a}=e;return jsx(Fragment,{children:o.map(i=>jsx(Control,{item:i,node:a},i.label))})}function Control(e){const{item:o,node:a}=e;if(isUItemGroup(o))return jsxs("div",{className:classes$2.control,children:[jsx("div",{children:o.label}),jsx("div",{children:jsx(Controls,{items:o.items,node:a})})]});if(isUItemNumber(o)){const[i,c]=react.exports.useState(()=>{const g=a.getParamValue(o.address);return Math.round(g/o.step)*o.step}),h=g=>{const Z=Number(g.target.value);c(Z),a.setParamValue(o.address,Z)};return jsx("div",{className:classes$2.control,children:jsxs("div",{children:[o.label," ",jsxs("span",{className:classes$2.value,children:["[",i,"]"]}),jsxs("div",{className:classes$2.inputContainer,children:[jsx("input",{className:classes$2.inputRange,type:"range",value:i,onChange:h,min:o.min,max:o.max,step:o.step}),jsx("input",{type:"number",value:i,onChange:h,min:o.min,max:o.max,step:o.step})]})]})})}if(isUItemBoolean(o)){const[i,c]=react.exports.useState(()=>a.getParamValue(o.address)),h=Z=>{c(Z),a.setParamValue(o.address,Z)},g=o.type==="button"?{onPointerDown:()=>h(1),onPointerUp:()=>h(0)}:{onClick:()=>h(i?0:1)};return jsx("div",{className:classes$2.control,children:jsxs("div",{children:[o.label," ",jsxs("span",{className:classes$2.value,children:["[",i,"]"]}),jsx("div",{children:jsx("button",{...g,className:classes$2.button,children:o.label})})]})})}if(isUItemBarGraph(o)){const[i,c]=react.exports.useState(0);return useAnimationFrame(()=>{const h=a.getOutputValue(o.address);c(h)},[a,o]),jsx("div",{className:classes$2.control,children:jsxs("div",{children:[o.label," ",jsxs("span",{className:classes$2.value,children:["[",i,"]"]}),jsxs("div",{className:classes$2.inputContainer,children:[jsx("input",{className:classes$2.inputRange,type:"range",value:i,min:o.min,max:o.max,step:1e-4,disabled:!0}),jsx("input",{type:"text",value:i,disabled:!0})]})]})})}return null}const oscopePanel="_oscopePanel_1pkvp_1",oscope="_oscope_1pkvp_1";var classes$1={oscopePanel,oscope};const OSCOPE_PANEL_VIEW_TYPES=["oscope","spectro","off"];function OscopePanel(e){const{source:o,audioContext:a,label:i}=e,{channelCount:c}=o,[h,g]=react.exports.useState(0),Z=OSCOPE_PANEL_VIEW_TYPES[h],$=()=>g(dn=>(dn+1)%3),rn=[];for(let dn=0;dn<c;dn++)rn.push(jsx(Oscope,{source:o,audioContext:a,spectro:Z==="spectro",width:200,height:100},dn));return jsxs("div",{className:classes$1.oscopePanel,onClick:$,children:[jsx("div",{children:i}),Z==="off"?jsx("div",{style:{height:100},className:classes$1.oscope}):rn]})}function Oscope(e){const{source:o,audioContext:a,width:i,height:c,spectro:h}=e,g=react.exports.useRef(),Z=react.exports.useRef(null);return react.exports.useEffect(()=>{const $=new AnalyserNode(a);return o.connect($),g.current=$,()=>{try{o.disconnect($)}catch{}}},[o,a]),useAnimationFrame(()=>{const $=Z.current,rn=$==null?void 0:$.getContext("2d"),dn=g.current;if(rn&&dn){let mn=new Uint8Array(0);h?(mn=new Uint8Array(dn.frequencyBinCount),dn.getByteFrequencyData(mn)):(dn.fftSize=8192,mn=new Uint8Array(dn.fftSize),dn.getByteTimeDomainData(mn));const cn=i/mn.length,vn=Math.log2(mn.length);rn.clearRect(0,0,i,c);for(let gn=0;gn<mn.length;gn++){const xn=mn[gn]/256,un=c*xn,ln=c-un-1,fn=h?Math.log(gn)/vn*i:gn*cn;rn.fillStyle="white",rn.fillRect(fn,ln,1,1)}}},[o,i,c,h]),jsx("canvas",{className:classes$1.oscope,width:i,height:c,ref:Z})}const plot="_plot_1x4id_1",plotHeader="_plotHeader_1x4id_6",plotHeaderLeft="_plotHeaderLeft_1x4id_10",plotHeaderRight="_plotHeaderRight_1x4id_14",plotHeaderLink="_plotHeaderLink_1x4id_18",plotHighlightMeta="_plotHighlightMeta_1x4id_23";var classes={plot,plotHeader,plotHeaderLeft,plotHeaderRight,plotHeaderLink,plotHighlightMeta},_populated=!1,_ie,_firefox,_opera,_webkit,_chrome,_ie_real_version,_osx,_windows,_linux,_android,_win64,_iphone,_ipad,_native,_mobile;function _populate(){if(!_populated){_populated=!0;var e=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),a=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(_iphone=/\b(iPhone|iP[ao]d)/.exec(e),_ipad=/\b(iP[ao]d)/.exec(e),_android=/Android/i.exec(e),_native=/FBAN\/\w+;/i.exec(e),_mobile=/Mobile/i.exec(e),_win64=!!/Win64/.exec(e),o){_ie=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,_ie&&document&&document.documentMode&&(_ie=document.documentMode);var i=/(?:Trident\/(\d+.\d+))/.exec(e);_ie_real_version=i?parseFloat(i[1])+4:_ie,_firefox=o[2]?parseFloat(o[2]):NaN,_opera=o[3]?parseFloat(o[3]):NaN,_webkit=o[4]?parseFloat(o[4]):NaN,_webkit?(o=/(?:Chrome\/(\d+\.\d+))/.exec(e),_chrome=o&&o[1]?parseFloat(o[1]):NaN):_chrome=NaN}else _ie=_firefox=_opera=_chrome=_webkit=NaN;if(a){if(a[1]){var c=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);_osx=c?parseFloat(c[1].replace("_",".")):!0}else _osx=!1;_windows=!!a[2],_linux=!!a[3]}else _osx=_windows=_linux=!1}}var UserAgent_DEPRECATED$1={ie:function(){return _populate()||_ie},ieCompatibilityMode:function(){return _populate()||_ie_real_version>_ie},ie64:function(){return UserAgent_DEPRECATED$1.ie()&&_win64},firefox:function(){return _populate()||_firefox},opera:function(){return _populate()||_opera},webkit:function(){return _populate()||_webkit},safari:function(){return UserAgent_DEPRECATED$1.webkit()},chrome:function(){return _populate()||_chrome},windows:function(){return _populate()||_windows},osx:function(){return _populate()||_osx},linux:function(){return _populate()||_linux},iphone:function(){return _populate()||_iphone},mobile:function(){return _populate()||_iphone||_ipad||_android||_mobile},nativeApp:function(){return _populate()||_native},android:function(){return _populate()||_android},ipad:function(){return _populate()||_ipad}},UserAgent_DEPRECATED_1=UserAgent_DEPRECATED$1,canUseDOM=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ExecutionEnvironment$1={canUseDOM,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM},ExecutionEnvironment_1=ExecutionEnvironment$1,ExecutionEnvironment=ExecutionEnvironment_1,useHasFeature;ExecutionEnvironment.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported$1(e,o){if(!ExecutionEnvironment.canUseDOM||o&&!("addEventListener"in document))return!1;var a="on"+e,i=a in document;if(!i){var c=document.createElement("div");c.setAttribute(a,"return;"),i=typeof c[a]=="function"}return!i&&useHasFeature&&e==="wheel"&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var isEventSupported_1=isEventSupported$1,UserAgent_DEPRECATED=UserAgent_DEPRECATED_1,isEventSupported=isEventSupported_1,PIXEL_STEP=10,LINE_HEIGHT=40,PAGE_HEIGHT=800;function normalizeWheel$1(e){var o=0,a=0,i=0,c=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(o=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(o=a,a=0),i=o*PIXEL_STEP,c=a*PIXEL_STEP,"deltaY"in e&&(c=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||c)&&e.deltaMode&&(e.deltaMode==1?(i*=LINE_HEIGHT,c*=LINE_HEIGHT):(i*=PAGE_HEIGHT,c*=PAGE_HEIGHT)),i&&!o&&(o=i<1?-1:1),c&&!a&&(a=c<1?-1:1),{spinX:o,spinY:a,pixelX:i,pixelY:c}}normalizeWheel$1.getEventType=function(){return UserAgent_DEPRECATED.firefox()?"DOMMouseScroll":isEventSupported("wheel")?"wheel":"mousewheel"};var normalizeWheel_1=normalizeWheel$1,normalizeWheel=normalizeWheel_1;const setHighlight=e=>([o,a])=>[o,a,e];function PlotPanel(e){const{name:o,offlineResult:a,width:i,height:c,liveAudioContext:h}=e,[[g,Z,$],rn]=react.exports.useState([0,8,-1]);return jsxs(Fragment,{children:[a.map((dn,mn)=>{let cn=jsx("span",{});$!==-1&&(cn=jsxs("span",{className:classes.plotHighlightMeta,children:["[",$,"]: ",dn.output[0][$]]}));const vn=async Pn=>{Pn.preventDefault();const xn=h.createBufferSource();xn.buffer=await toAudioBuffer$2(dn.output,h),xn.connect(h.destination),xn.start()},gn=Pn=>{Pn.preventDefault();const un=`${o.replace(/ /g,"-").toLowerCase()}-${dn.name}`;downloadWav(dn.output,un)};return jsxs("div",{className:classes.plot,children:[jsxs("div",{className:classes.plotHeader,children:[jsxs("div",{className:classes.plotHeaderLeft,children:[dn.name," ",cn]}),jsx("div",{className:classes.plotHeaderRight,children:jsx("a",{href:"#",className:classes.plotHeaderLink,onClick:vn,children:"play"})}),jsx("div",{className:classes.plotHeaderRight,children:jsx("a",{href:"#",className:classes.plotHeaderLink,onClick:gn,children:"download"})})]}),jsx(Plot,{output:dn,width:i,height:c,pan:g,zoomWidth:Z,highlight:$,setPlotState:rn})]},mn)}),jsxs("span",{className:classes.plotHighlightMeta,children:["range ",Math.round(g)," - ",Math.round(g+i/Z)]})]})}function getZoomHeight(e){let o=0,a=0;for(let i=0;i<e.length;i++)for(let c=0;c<e[i].length;c++){const h=e[i][c];h<o&&(o=h),h>a&&(a=h)}return 1/Math.max(Math.abs(o),Math.abs(a))}function Plot(e){const{output:o,width:a,height:i,pan:c,zoomWidth:h,highlight:g,setPlotState:Z}=e,$=react.exports.useRef(null),rn=react.exports.useRef(void 0),dn=react.exports.useRef(void 0),mn=()=>{Z(setHighlight(-1))},cn=xn=>{var yn,Mn;const un=(Mn=(yn=$.current)==null?void 0:yn.offsetLeft)!=null?Mn:0,ln=(xn.clientX-un)/h,fn=ln+c;if(Z(setHighlight(Math.floor(fn))),rn.current!==void 0&&dn.current!==void 0){const An=dn.current-(ln-rn.current);Z(([,Rn,Sn])=>[An,Rn,Sn])}},vn=xn=>{var ln,fn;const un=(fn=(ln=$.current)==null?void 0:ln.offsetLeft)!=null?fn:0;rn.current=(xn.clientX-un)/h,dn.current=c},gn=xn=>{const{pixelY:un}=normalizeWheel(xn),ln=un<0?2:.5;Z(([fn,yn,Mn])=>{var Un,on;const An=(on=(Un=$.current)==null?void 0:Un.offsetLeft)!=null?on:0,Rn=(xn.clientX-An)/h;return[fn+Rn-1/ln*Rn,yn*ln,Mn]})};react.exports.useEffect(()=>{const xn=()=>{rn.current=void 0,dn.current=void 0};return window.addEventListener("pointerup",xn),()=>{window.removeEventListener("pointerup",xn)}},[h]);const Pn=react.exports.useMemo(()=>getZoomHeight(o.output),[o.output]);return react.exports.useEffect(()=>{const xn=$.current,un=xn==null?void 0:xn.getContext("2d");if(un){un.clearRect(0,0,a,i);const ln=Math.min(a,o.output[0].length)/h;for(let fn=0;fn<ln;fn++){const yn=fn+Math.floor(c),An=o.output[0][yn]*Pn*i*-.48+i*.5,Rn=Math.floor(fn*h),Sn=Math.ceil(h);un.fillStyle="white",g===yn&&(un.fillStyle="rgb(34, 206, 206)",un.fillRect(Rn,0,Sn,i),un.fillStyle="black"),un.fillRect(Rn,Math.round(An),Sn,1)}}},[o,a,i,g,c,h,Pn]),jsx("canvas",{width:a,height:i,ref:$,onPointerDown:vn,onPointerMove:cn,onPointerOut:mn,onWheel:gn})}function useWindowSize(){const[e,o]=react.exports.useState({width:0,height:0});return react.exports.useEffect(()=>{function a(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)},[]),e}function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},_extends$1.apply(this,arguments)}var Action;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Action||(Action={}));var readOnly=function(e){return e},BeforeUnloadEventType="beforeunload",HashChangeEventType="hashchange",PopStateEventType="popstate";function createHashHistory(e){e===void 0&&(e={});var o=e,a=o.window,i=a===void 0?document.defaultView:a,c=i.history;function h(){var Sn=parsePath(i.location.hash.substr(1)),Un=Sn.pathname,on=Un===void 0?"/":Un,Gn=Sn.search,rt=Gn===void 0?"":Gn,ot=Sn.hash,gt=ot===void 0?"":ot,ft=c.state||{};return[ft.idx,readOnly({pathname:on,search:rt,hash:gt,state:ft.usr||null,key:ft.key||"default"})]}var g=null;function Z(){if(g)vn.call(g),g=null;else{var Sn=Action.Pop,Un=h(),on=Un[0],Gn=Un[1];if(vn.length){if(on!=null){var rt=dn-on;rt&&(g={action:Sn,location:Gn,retry:function(){An(rt*-1)}},An(rt))}}else fn(Sn)}}i.addEventListener(PopStateEventType,Z),i.addEventListener(HashChangeEventType,function(){var Sn=h(),Un=Sn[1];createPath(Un)!==createPath(mn)&&Z()});var $=Action.Pop,rn=h(),dn=rn[0],mn=rn[1],cn=createEvents(),vn=createEvents();dn==null&&(dn=0,c.replaceState(_extends$1({},c.state,{idx:dn}),""));function gn(){var Sn=document.querySelector("base"),Un="";if(Sn&&Sn.getAttribute("href")){var on=i.location.href,Gn=on.indexOf("#");Un=Gn===-1?on:on.slice(0,Gn)}return Un}function Pn(Sn){return gn()+"#"+(typeof Sn=="string"?Sn:createPath(Sn))}function xn(Sn,Un){return Un===void 0&&(Un=null),readOnly(_extends$1({pathname:mn.pathname,hash:"",search:""},typeof Sn=="string"?parsePath(Sn):Sn,{state:Un,key:createKey()}))}function un(Sn,Un){return[{usr:Sn.state,key:Sn.key,idx:Un},Pn(Sn)]}function ln(Sn,Un,on){return!vn.length||(vn.call({action:Sn,location:Un,retry:on}),!1)}function fn(Sn){$=Sn;var Un=h();dn=Un[0],mn=Un[1],cn.call({action:$,location:mn})}function yn(Sn,Un){var on=Action.Push,Gn=xn(Sn,Un);function rt(){yn(Sn,Un)}if(ln(on,Gn,rt)){var ot=un(Gn,dn+1),gt=ot[0],ft=ot[1];try{c.pushState(gt,"",ft)}catch{i.location.assign(ft)}fn(on)}}function Mn(Sn,Un){var on=Action.Replace,Gn=xn(Sn,Un);function rt(){Mn(Sn,Un)}if(ln(on,Gn,rt)){var ot=un(Gn,dn),gt=ot[0],ft=ot[1];c.replaceState(gt,"",ft),fn(on)}}function An(Sn){c.go(Sn)}var Rn={get action(){return $},get location(){return mn},createHref:Pn,push:yn,replace:Mn,go:An,back:function(){An(-1)},forward:function(){An(1)},listen:function(Un){return cn.push(Un)},block:function(Un){var on=vn.push(Un);return vn.length===1&&i.addEventListener(BeforeUnloadEventType,promptBeforeUnload),function(){on(),vn.length||i.removeEventListener(BeforeUnloadEventType,promptBeforeUnload)}}};return Rn}function promptBeforeUnload(e){e.preventDefault(),e.returnValue=""}function createEvents(){var e=[];return{get length(){return e.length},push:function(a){return e.push(a),function(){e=e.filter(function(i){return i!==a})}},call:function(a){e.forEach(function(i){return i&&i(a)})}}}function createKey(){return Math.random().toString(36).substr(2,8)}function createPath(e){var o=e.pathname,a=o===void 0?"/":o,i=e.search,c=i===void 0?"":i,h=e.hash,g=h===void 0?"":h;return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),g&&g!=="#"&&(a+=g.charAt(0)==="#"?g:"#"+g),a}function parsePath(e){var o={};if(e){var a=e.indexOf("#");a>=0&&(o.hash=e.substr(a),e=e.substr(0,a));var i=e.indexOf("?");i>=0&&(o.search=e.substr(i),e=e.substr(0,i)),e&&(o.pathname=e)}return o}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const NavigationContext=react.exports.createContext(null),LocationContext=react.exports.createContext(null),RouteContext=react.exports.createContext({outlet:null,matches:[]});function invariant(e,o){if(!e)throw new Error(o)}function matchRoutes(e,o,a){a===void 0&&(a="/");let i=typeof o=="string"?parsePath(o):o,c=stripBasename(i.pathname||"/",a);if(c==null)return null;let h=flattenRoutes(e);rankRouteBranches(h);let g=null;for(let Z=0;g==null&&Z<h.length;++Z)g=matchRouteBranch(h[Z],c);return g}function flattenRoutes(e,o,a,i){return o===void 0&&(o=[]),a===void 0&&(a=[]),i===void 0&&(i=""),e.forEach((c,h)=>{let g={relativePath:c.path||"",caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};g.relativePath.startsWith("/")&&(g.relativePath.startsWith(i)||invariant(!1),g.relativePath=g.relativePath.slice(i.length));let Z=joinPaths([i,g.relativePath]),$=a.concat(g);c.children&&c.children.length>0&&(c.index===!0&&invariant(!1),flattenRoutes(c.children,o,$,Z)),!(c.path==null&&!c.index)&&o.push({path:Z,score:computeScore(Z,c.index),routesMeta:$})}),o}function rankRouteBranches(e){e.sort((o,a)=>o.score!==a.score?a.score-o.score:compareIndexes(o.routesMeta.map(i=>i.childrenIndex),a.routesMeta.map(i=>i.childrenIndex)))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=e=>e==="*";function computeScore(e,o){let a=e.split("/"),i=a.length;return a.some(isSplat)&&(i+=splatPenalty),o&&(i+=indexRouteValue),a.filter(c=>!isSplat(c)).reduce((c,h)=>c+(paramRe.test(h)?dynamicSegmentValue:h===""?emptySegmentValue:staticSegmentValue),i)}function compareIndexes(e,o){return e.length===o.length&&e.slice(0,-1).every((i,c)=>i===o[c])?e[e.length-1]-o[o.length-1]:0}function matchRouteBranch(e,o){let{routesMeta:a}=e,i={},c="/",h=[];for(let g=0;g<a.length;++g){let Z=a[g],$=g===a.length-1,rn=c==="/"?o:o.slice(c.length)||"/",dn=matchPath({path:Z.relativePath,caseSensitive:Z.caseSensitive,end:$},rn);if(!dn)return null;Object.assign(i,dn.params);let mn=Z.route;h.push({params:i,pathname:joinPaths([c,dn.pathname]),pathnameBase:normalizePathname(joinPaths([c,dn.pathnameBase])),route:mn}),dn.pathnameBase!=="/"&&(c=joinPaths([c,dn.pathnameBase]))}return h}function matchPath(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,i]=compilePath(e.path,e.caseSensitive,e.end),c=o.match(a);if(!c)return null;let h=c[0],g=h.replace(/(.)\/+$/,"$1"),Z=c.slice(1);return{params:i.reduce((rn,dn,mn)=>{if(dn==="*"){let cn=Z[mn]||"";g=h.slice(0,h.length-cn.length).replace(/(.)\/+$/,"$1")}return rn[dn]=safelyDecodeURIComponent(Z[mn]||""),rn},{}),pathname:h,pathnameBase:g,pattern:e}}function compilePath(e,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0);let i=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(g,Z)=>(i.push(Z),"([^\\/]+)"));return e.endsWith("*")?(i.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=a?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),i]}function safelyDecodeURIComponent(e,o){try{return decodeURIComponent(e)}catch{return e}}function resolvePath(e,o){o===void 0&&(o="/");let{pathname:a,search:i="",hash:c=""}=typeof e=="string"?parsePath(e):e;return{pathname:a?a.startsWith("/")?a:resolvePathname(a,o):o,search:normalizeSearch(i),hash:normalizeHash(c)}}function resolvePathname(e,o){let a=o.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function resolveTo(e,o,a){let i=typeof e=="string"?parsePath(e):e,c=e===""||i.pathname===""?"/":i.pathname,h;if(c==null)h=a;else{let Z=o.length-1;if(c.startsWith("..")){let $=c.split("/");for(;$[0]==="..";)$.shift(),Z-=1;i.pathname=$.join("/")}h=Z>=0?o[Z]:"/"}let g=resolvePath(i,h);return c&&c!=="/"&&c.endsWith("/")&&!g.pathname.endsWith("/")&&(g.pathname+="/"),g}function getToPathname(e){return e===""||e.pathname===""?"/":typeof e=="string"?parsePath(e).pathname:e.pathname}function stripBasename(e,o){if(o==="/")return e;if(!e.toLowerCase().startsWith(o.toLowerCase()))return null;let a=e.charAt(o.length);return a&&a!=="/"?null:e.slice(o.length)||"/"}const joinPaths=e=>e.join("/").replace(/\/\/+/g,"/"),normalizePathname=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,normalizeHash=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function useHref(e){useInRouterContext()||invariant(!1);let{basename:o,navigator:a}=react.exports.useContext(NavigationContext),{hash:i,pathname:c,search:h}=useResolvedPath(e),g=c;if(o!=="/"){let Z=getToPathname(e),$=Z!=null&&Z.endsWith("/");g=c==="/"?o+($?"/":""):joinPaths([o,c])}return a.createHref({pathname:g,search:h,hash:i})}function useInRouterContext(){return react.exports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),react.exports.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||invariant(!1);let{basename:e,navigator:o}=react.exports.useContext(NavigationContext),{matches:a}=react.exports.useContext(RouteContext),{pathname:i}=useLocation(),c=JSON.stringify(a.map(Z=>Z.pathnameBase)),h=react.exports.useRef(!1);return react.exports.useEffect(()=>{h.current=!0}),react.exports.useCallback(function(Z,$){if($===void 0&&($={}),!h.current)return;if(typeof Z=="number"){o.go(Z);return}let rn=resolveTo(Z,JSON.parse(c),i);e!=="/"&&(rn.pathname=joinPaths([e,rn.pathname])),($.replace?o.replace:o.push)(rn,$.state)},[e,o,c,i])}const OutletContext=react.exports.createContext(null);function useOutlet(e){let o=react.exports.useContext(RouteContext).outlet;return o&&react.exports.createElement(OutletContext.Provider,{value:e},o)}function useParams(){let{matches:e}=react.exports.useContext(RouteContext),o=e[e.length-1];return o?o.params:{}}function useResolvedPath(e){let{matches:o}=react.exports.useContext(RouteContext),{pathname:a}=useLocation(),i=JSON.stringify(o.map(c=>c.pathnameBase));return react.exports.useMemo(()=>resolveTo(e,JSON.parse(i),a),[e,i,a])}function useRoutes(e,o){useInRouterContext()||invariant(!1);let{matches:a}=react.exports.useContext(RouteContext),i=a[a.length-1],c=i?i.params:{};i&&i.pathname;let h=i?i.pathnameBase:"/";i&&i.route;let g=useLocation(),Z;if(o){var $;let cn=typeof o=="string"?parsePath(o):o;h==="/"||(($=cn.pathname)==null?void 0:$.startsWith(h))||invariant(!1),Z=cn}else Z=g;let rn=Z.pathname||"/",dn=h==="/"?rn:rn.slice(h.length)||"/",mn=matchRoutes(e,{pathname:dn});return _renderMatches(mn&&mn.map(cn=>Object.assign({},cn,{params:Object.assign({},c,cn.params),pathname:joinPaths([h,cn.pathname]),pathnameBase:cn.pathnameBase==="/"?h:joinPaths([h,cn.pathnameBase])})),a)}function _renderMatches(e,o){return o===void 0&&(o=[]),e==null?null:e.reduceRight((a,i,c)=>react.exports.createElement(RouteContext.Provider,{children:i.route.element!==void 0?i.route.element:a,value:{outlet:a,matches:o.concat(e.slice(0,c+1))}}),null)}function Outlet(e){return useOutlet(e.context)}function Route(e){invariant(!1)}function Router(e){let{basename:o="/",children:a=null,location:i,navigationType:c=Action.Pop,navigator:h,static:g=!1}=e;useInRouterContext()&&invariant(!1);let Z=normalizePathname(o),$=react.exports.useMemo(()=>({basename:Z,navigator:h,static:g}),[Z,h,g]);typeof i=="string"&&(i=parsePath(i));let{pathname:rn="/",search:dn="",hash:mn="",state:cn=null,key:vn="default"}=i,gn=react.exports.useMemo(()=>{let Pn=stripBasename(rn,Z);return Pn==null?null:{pathname:Pn,search:dn,hash:mn,state:cn,key:vn}},[Z,rn,dn,mn,cn,vn]);return gn==null?null:react.exports.createElement(NavigationContext.Provider,{value:$},react.exports.createElement(LocationContext.Provider,{children:a,value:{location:gn,navigationType:c}}))}function Routes(e){let{children:o,location:a}=e;return useRoutes(createRoutesFromChildren(o),a)}function createRoutesFromChildren(e){let o=[];return react.exports.Children.forEach(e,a=>{if(!react.exports.isValidElement(a))return;if(a.type===react.exports.Fragment){o.push.apply(o,createRoutesFromChildren(a.props.children));return}a.type!==Route&&invariant(!1);let i={caseSensitive:a.props.caseSensitive,element:a.props.element,index:a.props.index,path:a.props.path};a.props.children&&(i.children=createRoutesFromChildren(a.props.children)),o.push(i)}),o}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(e,o){if(e==null)return{};var a={},i=Object.keys(e),c,h;for(h=0;h<i.length;h++)c=i[h],!(o.indexOf(c)>=0)&&(a[c]=e[c]);return a}const _excluded=["onClick","reloadDocument","replace","state","target","to"];function HashRouter(e){let{basename:o,children:a,window:i}=e,c=react.exports.useRef();c.current==null&&(c.current=createHashHistory({window:i}));let h=c.current,[g,Z]=react.exports.useState({action:h.action,location:h.location});return react.exports.useLayoutEffect(()=>h.listen(Z),[h]),react.exports.createElement(Router,{basename:o,children:a,location:g.location,navigationType:g.action,navigator:h})}function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Link=react.exports.forwardRef(function e(o,a){let{onClick:i,reloadDocument:c,replace:h=!1,state:g,target:Z,to:$}=o,rn=_objectWithoutPropertiesLoose(o,_excluded),dn=useHref($),mn=useLinkClickHandler($,{replace:h,state:g,target:Z});function cn(vn){i&&i(vn),!vn.defaultPrevented&&!c&&mn(vn)}return react.exports.createElement("a",_extends({},rn,{href:dn,onClick:cn,ref:a,target:Z}))});function useLinkClickHandler(e,o){let{target:a,replace:i,state:c}=o===void 0?{}:o,h=useNavigate(),g=useLocation(),Z=useResolvedPath(e);return react.exports.useCallback($=>{if($.button===0&&(!a||a==="_self")&&!isModifiedEvent($)){$.preventDefault();let rn=!!i||createPath(g)===createPath(Z);h(e,{replace:rn,state:c})}},[g,h,Z,i,c,a,e])}function touchStart(e){if(e.state!=="suspended")return;const o=document.body,a=["touchstart","touchend","mousedown","keydown"],i=()=>a.forEach(h=>o.removeEventListener(h,c)),c=()=>e.resume().then(i);a.forEach(h=>o.addEventListener(h,c,!1))}const liveAudioContext=new window.AudioContext;touchStart(liveAudioContext);client.createRoot(document.getElementById("root")).render(jsx(React.StrictMode,{children:jsx(HashRouter,{children:jsx(Routes,{children:jsxs(Route,{path:"/",element:jsx(Main,{}),children:[jsx(Route,{index:!0,element:jsx(List,{})}),jsx(Route,{path:":id",element:jsx(DspRoute,{})})]})})})}));function Main(){return jsxs("div",{className:classes$3.main,children:[jsx(Outlet,{}),jsxs("div",{className:classes$3.footer,children:[jsx(FooterLink,{href:"https://faustdoc.grame.fr/manual/syntax/",children:"Faust syntax"}),jsx(FooterLink,{href:"https://faustlibraries.grame.fr/",children:"Faust libraries"}),jsx(FooterLink,{href:"https://faustide.grame.fr/",children:"Faust IDE"}),jsx(FooterLink,{href:"https://www.rebeltech.org/patch-library/patches/my-patches/",children:"OWL patches"}),jsx(FooterLink,{href:"https://www.openwarelab.org/Tools/firmware.html",children:"OWL Firmware"})]})]})}function FooterLink(e){return jsx("a",{className:classes$3.link,target:"_blank",...e})}function List(){return jsxs(Fragment,{children:[jsxs(ListHeader,{children:["Faust sketches -"," ",jsx("a",{className:classes$3.link,href:"https://github.com/dxinteractive/mosfez-faust",children:"github repo"})]}),jsx("ol",{className:classes$3.list,children:all.map(e=>jsx("li",{className:classes$3.listItem,children:jsx(Link,{to:`/${e.id}`,children:e.name})},e.id))})]})}function ListHeader(e){return jsx("header",{className:classes$3.dspHeader,children:jsx("div",{className:classes$3.dspHeaderTitle,children:e.children})})}function DspRoute(){const{id:e}=useParams(),o=all.find(a=>a.id===e);return o?jsx(Dsp,{dspDefinition:o}):jsxs(DspHeader,{children:['Dsp "',e,'" not found']})}const TYPE_DESCS={offline:"open your browser console to see DSP output",live:"DSP will play sound once successfully compiled",component:"",callback:""};function Dsp(e){const{dspDefinition:o}=e,{name:a,description:i}=o,c=o.dsp,h=useFaustLivePlayer(liveAudioContext,o),g=useFaustOfflineRenderer(o);useDspCallback(o,liveAudioContext);const{width:Z}=useWindowSize();let $=TYPE_DESCS[o.type];return $&&($=` - ${$}`),jsxs(Fragment,{children:[jsxs(DspHeader,{children:[jsx("strong",{children:a})," - ",i]}),jsxs("div",{className:classes$3.dspType,children:["type: ",o.type,$]}),h&&h.params.length>0&&jsx("div",{className:classes$3.dspContent,children:jsx(Controls,{items:h.ui,node:h.node})}),h&&h.audioContext&&jsxs("div",{className:classes$3.dspContent,children:[h.source&&jsx(OscopePanel,{label:"in",source:h.source,audioContext:h.audioContext}),h.node&&jsx(OscopePanel,{label:"out",source:h.node,audioContext:h.audioContext})]}),g&&jsx("div",{className:classes$3.dspContent,children:jsx(PlotPanel,{name:a,offlineResult:g,width:Z-36,height:200,liveAudioContext})}),jsx("div",{className:classes$3.dspContent,children:c&&jsx("pre",{className:classes$3.dspPre,children:c})})]})}function DspHeader(e){return jsxs("header",{className:classes$3.dspHeader,children:[jsx("div",{className:classes$3.dspHeaderTitle,children:e.children}),jsx("div",{className:classes$3.dspHeaderBack,children:jsx(Link,{to:"/",children:"back"})})]})}
