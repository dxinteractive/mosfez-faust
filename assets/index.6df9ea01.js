const p=function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))T(D);new MutationObserver(D=>{for(const R of D)if(R.type==="childList")for(const h of R.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&T(h)}).observe(document,{childList:!0,subtree:!0});function s(D){const R={};return D.integrity&&(R.integrity=D.integrity),D.referrerpolicy&&(R.referrerPolicy=D.referrerpolicy),D.crossorigin==="use-credentials"?R.credentials="include":D.crossorigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function T(D){if(D.ep)return;D.ep=!0;const R=s(D);fetch(D.href,R)}};p();var react={exports:{}},react_development={exports:{}};/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(d,g){(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var s="18.1.0",T=!1,D=!1,R=!1,h=!1,U=!1,x=Symbol.for("react.element"),j=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),oe=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),et=Symbol.for("react.offscreen"),$e=Symbol.iterator,it="@@iterator";function Re(w){if(w===null||typeof w!="object")return null;var I=$e&&w[$e]||w[it];return typeof I=="function"?I:null}var Pe={current:null},Le={transition:null},F={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},Ge={current:null},Xt={},We=null;function ut(w){We=w}Xt.setExtraStackFrame=function(w){We=w},Xt.getCurrentStack=null,Xt.getStackAddendum=function(){var w="";We&&(w+=We);var I=Xt.getCurrentStack;return I&&(w+=I()||""),w};var xt={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Le,ReactCurrentOwner:Ge};xt.ReactDebugCurrentFrame=Xt,xt.ReactCurrentActQueue=F;function sn(w){{for(var I=arguments.length,W=new Array(I>1?I-1:0),J=1;J<I;J++)W[J-1]=arguments[J];_n("warn",w,W)}}function at(w){{for(var I=arguments.length,W=new Array(I>1?I-1:0),J=1;J<I;J++)W[J-1]=arguments[J];_n("error",w,W)}}function _n(w,I,W){{var J=xt.ReactDebugCurrentFrame,me=J.getStackAddendum();me!==""&&(I+="%s",W=W.concat([me]));var Ye=W.map(function(xe){return String(xe)});Ye.unshift("Warning: "+I),Function.prototype.apply.call(console[w],console,Ye)}}var Kn={};function En(w,I){{var W=w.constructor,J=W&&(W.displayName||W.name)||"ReactClass",me=J+"."+I;if(Kn[me])return;at("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,J),Kn[me]=!0}}var lr={isMounted:function(w){return!1},enqueueForceUpdate:function(w,I,W){En(w,"forceUpdate")},enqueueReplaceState:function(w,I,W,J){En(w,"replaceState")},enqueueSetState:function(w,I,W,J){En(w,"setState")}},qt=Object.assign,pn={};Object.freeze(pn);function cr(w,I,W){this.props=w,this.context=I,this.refs=pn,this.updater=W||lr}cr.prototype.isReactComponent={},cr.prototype.setState=function(w,I){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,I,"setState")},cr.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};{var ma={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Vr=function(w,I){Object.defineProperty(cr.prototype,w,{get:function(){sn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})};for(var Wr in ma)ma.hasOwnProperty(Wr)&&Vr(Wr,ma[Wr])}function Fr(){}Fr.prototype=cr.prototype;function On(w,I,W){this.props=w,this.context=I,this.refs=pn,this.updater=W||lr}var dr=On.prototype=new Fr;dr.constructor=On,qt(dr,cr.prototype),dr.isPureReactComponent=!0;function fr(){var w={current:null};return Object.seal(w),w}var pr=Array.isArray;function mn(w){return pr(w)}function Dn(w){{var I=typeof Symbol=="function"&&Symbol.toStringTag,W=I&&w[Symbol.toStringTag]||w.constructor.name||"Object";return W}}function bn(w){try{return Kt(w),!1}catch{return!0}}function Kt(w){return""+w}function ot(w){if(bn(w))return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Dn(w)),Kt(w)}function Et(w,I,W){var J=w.displayName;if(J)return J;var me=I.displayName||I.name||"";return me!==""?W+"("+me+")":W}function Jt(w){return w.displayName||"Context"}function Mn(w){if(w==null)return null;if(typeof w.tag=="number"&&at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof w=="function")return w.displayName||w.name||null;if(typeof w=="string")return w;switch(w){case K:return"Fragment";case j:return"Portal";case se:return"Profiler";case G:return"StrictMode";case Ne:return"Suspense";case ge:return"SuspenseList"}if(typeof w=="object")switch(w.$$typeof){case oe:var I=w;return Jt(I)+".Consumer";case ee:var W=w;return Jt(W._context)+".Provider";case Ve:return Et(w,w.render,"ForwardRef");case Be:var J=w.displayName||null;return J!==null?J:Mn(w.type)||"Memo";case _e:{var me=w,Ye=me._payload,xe=me._init;try{return Mn(xe(Ye))}catch{return null}}}return null}var V=Object.prototype.hasOwnProperty,Zt={key:!0,ref:!0,__self:!0,__source:!0},An,Jn,xn;xn={};function Or(w){if(V.call(w,"ref")){var I=Object.getOwnPropertyDescriptor(w,"ref").get;if(I&&I.isReactWarning)return!1}return w.ref!==void 0}function $t(w){if(V.call(w,"key")){var I=Object.getOwnPropertyDescriptor(w,"key").get;if(I&&I.isReactWarning)return!1}return w.key!==void 0}function Dr(w,I){var W=function(){An||(An=!0,at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",I))};W.isReactWarning=!0,Object.defineProperty(w,"key",{get:W,configurable:!0})}function Nr(w,I){var W=function(){Jn||(Jn=!0,at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",I))};W.isReactWarning=!0,Object.defineProperty(w,"ref",{get:W,configurable:!0})}function Qr(w){if(typeof w.ref=="string"&&Ge.current&&w.__self&&Ge.current.stateNode!==w.__self){var I=Mn(Ge.current.type);xn[I]||(at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I,w.ref),xn[I]=!0)}}var ye=function(w,I,W,J,me,Ye,xe){var Qe={$$typeof:x,type:w,key:I,ref:W,props:xe,_owner:Ye};return Qe._store={},Object.defineProperty(Qe._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Qe,"_self",{configurable:!1,enumerable:!1,writable:!1,value:J}),Object.defineProperty(Qe,"_source",{configurable:!1,enumerable:!1,writable:!1,value:me}),Object.freeze&&(Object.freeze(Qe.props),Object.freeze(Qe)),Qe};function ke(w,I,W){var J,me={},Ye=null,xe=null,Qe=null,mt=null;if(I!=null){Or(I)&&(xe=I.ref,Qr(I)),$t(I)&&(ot(I.key),Ye=""+I.key),Qe=I.__self===void 0?null:I.__self,mt=I.__source===void 0?null:I.__source;for(J in I)V.call(I,J)&&!Zt.hasOwnProperty(J)&&(me[J]=I[J])}var Ft=arguments.length-2;if(Ft===1)me.children=W;else if(Ft>1){for(var Bt=Array(Ft),Mt=0;Mt<Ft;Mt++)Bt[Mt]=arguments[Mt+2];Object.freeze&&Object.freeze(Bt),me.children=Bt}if(w&&w.defaultProps){var It=w.defaultProps;for(J in It)me[J]===void 0&&(me[J]=It[J])}if(Ye||xe){var en=typeof w=="function"?w.displayName||w.name||"Unknown":w;Ye&&Dr(me,en),xe&&Nr(me,en)}return ye(w,Ye,xe,Qe,mt,Ge.current,me)}function tt(w,I){var W=ye(w.type,I,w.ref,w._self,w._source,w._owner,w.props);return W}function Ct(w,I,W){if(w==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var J,me=qt({},w.props),Ye=w.key,xe=w.ref,Qe=w._self,mt=w._source,Ft=w._owner;if(I!=null){Or(I)&&(xe=I.ref,Ft=Ge.current),$t(I)&&(ot(I.key),Ye=""+I.key);var Bt;w.type&&w.type.defaultProps&&(Bt=w.type.defaultProps);for(J in I)V.call(I,J)&&!Zt.hasOwnProperty(J)&&(I[J]===void 0&&Bt!==void 0?me[J]=Bt[J]:me[J]=I[J])}var Mt=arguments.length-2;if(Mt===1)me.children=W;else if(Mt>1){for(var It=Array(Mt),en=0;en<Mt;en++)It[en]=arguments[en+2];me.children=It}return ye(w.type,Ye,xe,Qe,mt,Ft,me)}function bt(w){return typeof w=="object"&&w!==null&&w.$$typeof===x}var hn=".",on=":";function mr(w){var I=/[=:]/g,W={"=":"=0",":":"=2"},J=w.replace(I,function(me){return W[me]});return"$"+J}var Lt=!1,he=/\/+/g;function pe(w){return w.replace(he,"$&/")}function Qt(w,I){return typeof w=="object"&&w!==null&&w.key!=null?(ot(w.key),mr(""+w.key)):I.toString(36)}function ha(w,I,W,J,me){var Ye=typeof w;(Ye==="undefined"||Ye==="boolean")&&(w=null);var xe=!1;if(w===null)xe=!0;else switch(Ye){case"string":case"number":xe=!0;break;case"object":switch(w.$$typeof){case x:case j:xe=!0}}if(xe){var Qe=w,mt=me(Qe),Ft=J===""?hn+Qt(Qe,0):J;if(mn(mt)){var Bt="";Ft!=null&&(Bt=pe(Ft)+"/"),ha(mt,I,Bt,"",function(Mu){return Mu})}else mt!=null&&(bt(mt)&&(mt.key&&(!Qe||Qe.key!==mt.key)&&ot(mt.key),mt=tt(mt,W+(mt.key&&(!Qe||Qe.key!==mt.key)?pe(""+mt.key)+"/":"")+Ft)),I.push(mt));return 1}var Mt,It,en=0,Rt=J===""?hn:J+on;if(mn(w))for(var Za=0;Za<w.length;Za++)Mt=w[Za],It=Rt+Qt(Mt,Za),en+=ha(Mt,I,W,It,me);else{var xr=Re(w);if(typeof xr=="function"){var Vi=w;xr===Vi.entries&&(Lt||sn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Lt=!0);for(var Fo=xr.call(Vi),Ea,No=0;!(Ea=Fo.next()).done;)Mt=Ea.value,It=Rt+Qt(Mt,No++),en+=ha(Mt,I,W,It,me)}else if(Ye==="object"){var wi=String(w);throw new Error("Objects are not valid as a React child (found: "+(wi==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":wi)+"). If you meant to render a collection of children, use an array instead.")}}return en}function Yr(w,I,W){if(w==null)return w;var J=[],me=0;return ha(w,J,"","",function(Ye){return I.call(W,Ye,me++)}),J}function vi(w){var I=0;return Yr(w,function(){I++}),I}function zi(w,I,W){Yr(w,function(){I.apply(this,arguments)},W)}function To(w){return Yr(w,function(I){return I})||[]}function va(w){if(!bt(w))throw new Error("React.Children.only expected to receive a single React element child.");return w}function ya(w){var I={$$typeof:oe,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};I.Provider={$$typeof:ee,_context:I};var W=!1,J=!1,me=!1;{var Ye={$$typeof:oe,_context:I};Object.defineProperties(Ye,{Provider:{get:function(){return J||(J=!0,at("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),I.Provider},set:function(xe){I.Provider=xe}},_currentValue:{get:function(){return I._currentValue},set:function(xe){I._currentValue=xe}},_currentValue2:{get:function(){return I._currentValue2},set:function(xe){I._currentValue2=xe}},_threadCount:{get:function(){return I._threadCount},set:function(xe){I._threadCount=xe}},Consumer:{get:function(){return W||(W=!0,at("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),I.Consumer}},displayName:{get:function(){return I.displayName},set:function(xe){me||(sn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",xe),me=!0)}}}),I.Consumer=Ye}return I._currentRenderer=null,I._currentRenderer2=null,I}var kr=-1,Gr=0,hr=1,Xn=2;function k(w){if(w._status===kr){var I=w._result,W=I();if(W.then(function(Ye){if(w._status===Gr||w._status===kr){var xe=w;xe._status=hr,xe._result=Ye}},function(Ye){if(w._status===Gr||w._status===kr){var xe=w;xe._status=Xn,xe._result=Ye}}),w._status===kr){var J=w;J._status=Gr,J._result=W}}if(w._status===hr){var me=w._result;return me===void 0&&at(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,me),"default"in me||at(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,me),me.default}else throw w._result}function ue(w){var I={_status:kr,_result:w},W={$$typeof:_e,_payload:I,_init:k};{var J,me;Object.defineProperties(W,{defaultProps:{configurable:!0,get:function(){return J},set:function(Ye){at("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),J=Ye,Object.defineProperty(W,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return me},set:function(Ye){at("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),me=Ye,Object.defineProperty(W,"propTypes",{enumerable:!0})}}})}return W}function Te(w){w!=null&&w.$$typeof===Be?at("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof w!="function"?at("forwardRef requires a render function but was given %s.",w===null?"null":typeof w):w.length!==0&&w.length!==2&&at("forwardRef render functions accept exactly two parameters: props and ref. %s",w.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),w!=null&&(w.defaultProps!=null||w.propTypes!=null)&&at("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var I={$$typeof:Ve,render:w};{var W;Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return W},set:function(J){W=J,!w.name&&!w.displayName&&(w.displayName=J)}})}return I}var je;je=Symbol.for("react.module.reference");function st(w){return!!(typeof w=="string"||typeof w=="function"||w===K||w===se||U||w===G||w===Ne||w===ge||h||w===et||T||D||R||typeof w=="object"&&w!==null&&(w.$$typeof===_e||w.$$typeof===Be||w.$$typeof===ee||w.$$typeof===oe||w.$$typeof===Ve||w.$$typeof===je||w.getModuleId!==void 0))}function P(w,I){st(w)||at("memo: The first argument must be a component. Instead received: %s",w===null?"null":typeof w);var W={$$typeof:Be,type:w,compare:I===void 0?null:I};{var J;Object.defineProperty(W,"displayName",{enumerable:!1,configurable:!0,get:function(){return J},set:function(me){J=me,!w.name&&!w.displayName&&(w.displayName=me)}})}return W}function Ie(){var w=Pe.current;return w===null&&at(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),w}function nt(w){var I=Ie();if(w._context!==void 0){var W=w._context;W.Consumer===w?at("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):W.Provider===w&&at("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return I.useContext(w)}function kt(w){var I=Ie();return I.useState(w)}function Pt(w,I,W){var J=Ie();return J.useReducer(w,I,W)}function ft(w){var I=Ie();return I.useRef(w)}function Bn(w,I){var W=Ie();return W.useEffect(w,I)}function wt(w,I){var W=Ie();return W.useInsertionEffect(w,I)}function wn(w,I){var W=Ie();return W.useLayoutEffect(w,I)}function Mr(w,I){var W=Ie();return W.useCallback(w,I)}function Ru(w,I){var W=Ie();return W.useMemo(w,I)}function Ou(w,I,W){var J=Ie();return J.useImperativeHandle(w,I,W)}function gs(w,I){{var W=Ie();return W.useDebugValue(w,I)}}function _s(){var w=Ie();return w.useTransition()}function Aa(w){var I=Ie();return I.useDeferredValue(w)}function ct(){var w=Ie();return w.useId()}function yi(w,I,W){var J=Ie();return J.useSyncExternalStore(w,I,W)}var qr=0,So,Ro,xa,Oo,pt,vr,Kr;function Ze(){}Ze.__reactDisabledLog=!0;function Du(){{if(qr===0){So=console.log,Ro=console.info,xa=console.warn,Oo=console.error,pt=console.group,vr=console.groupCollapsed,Kr=console.groupEnd;var w={configurable:!0,enumerable:!0,value:Ze,writable:!0};Object.defineProperties(console,{info:w,log:w,warn:w,error:w,group:w,groupCollapsed:w,groupEnd:w})}qr++}}function Vt(){{if(qr--,qr===0){var w={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:qt({},w,{value:So}),info:qt({},w,{value:Ro}),warn:qt({},w,{value:xa}),error:qt({},w,{value:Oo}),group:qt({},w,{value:pt}),groupCollapsed:qt({},w,{value:vr}),groupEnd:qt({},w,{value:Kr})})}qr<0&&at("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var y=xt.ReactCurrentDispatcher,Tt;function ga(w,I,W){{if(Tt===void 0)try{throw Error()}catch(me){var J=me.stack.trim().match(/\n( *(at )?)/);Tt=J&&J[1]||""}return`
`+Tt+w}}var Jr=!1,gi;{var vn=typeof WeakMap=="function"?WeakMap:Map;gi=new vn}function Do(w,I){if(!w||Jr)return"";{var W=gi.get(w);if(W!==void 0)return W}var J;Jr=!0;var me=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Ye;Ye=y.current,y.current=null,Du();try{if(I){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(Rt){J=Rt}Reflect.construct(w,[],xe)}else{try{xe.call()}catch(Rt){J=Rt}w.call(xe.prototype)}}else{try{throw Error()}catch(Rt){J=Rt}w()}}catch(Rt){if(Rt&&J&&typeof Rt.stack=="string"){for(var Qe=Rt.stack.split(`
`),mt=J.stack.split(`
`),Ft=Qe.length-1,Bt=mt.length-1;Ft>=1&&Bt>=0&&Qe[Ft]!==mt[Bt];)Bt--;for(;Ft>=1&&Bt>=0;Ft--,Bt--)if(Qe[Ft]!==mt[Bt]){if(Ft!==1||Bt!==1)do if(Ft--,Bt--,Bt<0||Qe[Ft]!==mt[Bt]){var Mt=`
`+Qe[Ft].replace(" at new "," at ");return w.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",w.displayName)),typeof w=="function"&&gi.set(w,Mt),Mt}while(Ft>=1&&Bt>=0);break}}}finally{Jr=!1,y.current=Ye,Vt(),Error.prepareStackTrace=me}var It=w?w.displayName||w.name:"",en=It?ga(It):"";return typeof w=="function"&&gi.set(w,en),en}function Mo(w,I,W){return Do(w,!1)}function Es(w){var I=w.prototype;return!!(I&&I.isReactComponent)}function Ir(w,I,W){if(w==null)return"";if(typeof w=="function")return Do(w,Es(w));if(typeof w=="string")return ga(w);switch(w){case Ne:return ga("Suspense");case ge:return ga("SuspenseList")}if(typeof w=="object")switch(w.$$typeof){case Ve:return Mo(w.render);case Be:return Ir(w.type,I,W);case _e:{var J=w,me=J._payload,Ye=J._init;try{return Ir(Ye(me),I,W)}catch{}}}return""}var De={},Ao=xt.ReactDebugCurrentFrame;function Xi(w){if(w){var I=w._owner,W=Ir(w.type,w._source,I?I.type:null);Ao.setExtraStackFrame(W)}else Ao.setExtraStackFrame(null)}function bs(w,I,W,J,me){{var Ye=Function.call.bind(V);for(var xe in w)if(Ye(w,xe)){var Qe=void 0;try{if(typeof w[xe]!="function"){var mt=Error((J||"React class")+": "+W+" type `"+xe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[xe]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw mt.name="Invariant Violation",mt}Qe=w[xe](I,xe,J,W,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Ft){Qe=Ft}Qe&&!(Qe instanceof Error)&&(Xi(me),at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",J||"React class",W,xe,typeof Qe),Xi(null)),Qe instanceof Error&&!(Qe.message in De)&&(De[Qe.message]=!0,Xi(me),at("Failed %s type: %s",W,Qe.message),Xi(null))}}}function St(w){if(w){var I=w._owner,W=Ir(w.type,w._source,I?I.type:null);ut(W)}else ut(null)}var xo;xo=!1;function Co(){if(Ge.current){var w=Mn(Ge.current.type);if(w)return`

Check the render method of \``+w+"`."}return""}function rt(w){if(w!==void 0){var I=w.fileName.replace(/^.*[\\\/]/,""),W=w.lineNumber;return`

Check your code at `+I+":"+W+"."}return""}function ws(w){return w!=null?rt(w.__source):""}var $n={};function _i(w){var I=Co();if(!I){var W=typeof w=="string"?w:w.displayName||w.name;W&&(I=`

Check the top-level render call using <`+W+">.")}return I}function qa(w,I){if(!(!w._store||w._store.validated||w.key!=null)){w._store.validated=!0;var W=_i(I);if(!$n[W]){$n[W]=!0;var J="";w&&w._owner&&w._owner!==Ge.current&&(J=" It was passed a child from "+Mn(w._owner.type)+"."),St(w),at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',W,J),St(null)}}}function Ts(w,I){if(typeof w=="object"){if(mn(w))for(var W=0;W<w.length;W++){var J=w[W];bt(J)&&qa(J,I)}else if(bt(w))w._store&&(w._store.validated=!0);else if(w){var me=Re(w);if(typeof me=="function"&&me!==w.entries)for(var Ye=me.call(w),xe;!(xe=Ye.next()).done;)bt(xe.value)&&qa(xe.value,I)}}}function Tn(w){{var I=w.type;if(I==null||typeof I=="string")return;var W;if(typeof I=="function")W=I.propTypes;else if(typeof I=="object"&&(I.$$typeof===Ve||I.$$typeof===Be))W=I.propTypes;else return;if(W){var J=Mn(I);bs(W,w.props,"prop",J,w)}else if(I.PropTypes!==void 0&&!xo){xo=!0;var me=Mn(I);at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",me||"Unknown")}typeof I.getDefaultProps=="function"&&!I.getDefaultProps.isReactClassApproved&&at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function nn(w){{for(var I=Object.keys(w.props),W=0;W<I.length;W++){var J=I[W];if(J!=="children"&&J!=="key"){St(w),at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",J),St(null);break}}w.ref!==null&&(St(w),at("Invalid attribute `ref` supplied to `React.Fragment`."),St(null))}}function Bi(w,I,W){var J=st(w);if(!J){var me="";(w===void 0||typeof w=="object"&&w!==null&&Object.keys(w).length===0)&&(me+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Ye=ws(I);Ye?me+=Ye:me+=Co();var xe;w===null?xe="null":mn(w)?xe="array":w!==void 0&&w.$$typeof===x?(xe="<"+(Mn(w.type)||"Unknown")+" />",me=" Did you accidentally export a JSX literal instead of a component?"):xe=typeof w,at("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",xe,me)}var Qe=ke.apply(this,arguments);if(Qe==null)return Qe;if(J)for(var mt=2;mt<arguments.length;mt++)Ts(arguments[mt],w);return w===K?nn(Qe):Tn(Qe),Qe}var Ar=!1;function Zn(w){var I=Bi.bind(null,w);return I.type=w,Ar||(Ar=!0,sn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(I,"type",{enumerable:!1,get:function(){return sn("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:w}),w}}),I}function rn(w,I,W){for(var J=Ct.apply(this,arguments),me=2;me<arguments.length;me++)Ts(arguments[me],J.type);return Tn(J),J}function Ka(w,I){var W=Le.transition;Le.transition={};var J=Le.transition;Le.transition._updatedFibers=new Set;try{w()}finally{if(Le.transition=W,W===null&&J._updatedFibers){var me=J._updatedFibers.size;me>10&&sn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),J._updatedFibers.clear()}}}var Ur=!1,_a=null;function Ss(w){if(_a===null)try{var I=("require"+Math.random()).slice(0,7),W=d&&d[I];_a=W.call(d,"timers").setImmediate}catch{_a=function(me){Ur===!1&&(Ur=!0,typeof MessageChannel=="undefined"&&at("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Ye=new MessageChannel;Ye.port1.onmessage=me,Ye.port2.postMessage(void 0)}}return _a(w)}var Ja=0,$i=!1;function Po(w){{var I=Ja;Ja++,F.current===null&&(F.current=[]);var W=F.isBatchingLegacy,J;try{if(F.isBatchingLegacy=!0,J=w(),!W&&F.didScheduleLegacyUpdate){var me=F.current;me!==null&&(F.didScheduleLegacyUpdate=!1,Ei(me))}}catch(It){throw Zr(I),It}finally{F.isBatchingLegacy=W}if(J!==null&&typeof J=="object"&&typeof J.then=="function"){var Ye=J,xe=!1,Qe={then:function(It,en){xe=!0,Ye.then(function(Rt){Zr(I),Ja===0?ea(Rt,It,en):It(Rt)},function(Rt){Zr(I),en(Rt)})}};return!$i&&typeof Promise!="undefined"&&Promise.resolve().then(function(){}).then(function(){xe||($i=!0,at("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Qe}else{var mt=J;if(Zr(I),Ja===0){var Ft=F.current;Ft!==null&&(Ei(Ft),F.current=null);var Bt={then:function(It,en){F.current===null?(F.current=[],ea(mt,It,en)):It(mt)}};return Bt}else{var Mt={then:function(It,en){It(mt)}};return Mt}}}}function Zr(w){w!==Ja-1&&at("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ja=w}function ea(w,I,W){{var J=F.current;if(J!==null)try{Ei(J),Ss(function(){J.length===0?(F.current=null,I(w)):ea(w,I,W)})}catch(me){W(me)}else I(w)}}var dt=!1;function Ei(w){if(!dt){dt=!0;var I=0;try{for(;I<w.length;I++){var W=w[I];do W=W(!0);while(W!==null)}w.length=0}catch(J){throw w=w.slice(I+1),J}finally{dt=!1}}}var bi=Bi,ta=rn,Hr=Zn,Rs={map:Yr,forEach:zi,count:vi,toArray:To,only:va};g.Children=Rs,g.Component=cr,g.Fragment=K,g.Profiler=se,g.PureComponent=On,g.StrictMode=G,g.Suspense=Ne,g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xt,g.cloneElement=ta,g.createContext=ya,g.createElement=bi,g.createFactory=Hr,g.createRef=fr,g.forwardRef=Te,g.isValidElement=bt,g.lazy=ue,g.memo=P,g.startTransition=Ka,g.unstable_act=Po,g.useCallback=Mr,g.useContext=nt,g.useDebugValue=gs,g.useDeferredValue=Aa,g.useEffect=Bn,g.useId=ct,g.useImperativeHandle=Ou,g.useInsertionEffect=wt,g.useLayoutEffect=wn,g.useMemo=Ru,g.useReducer=Pt,g.useRef=ft,g.useState=kt,g.useSyncExternalStore=yi,g.useTransition=_s,g.version=s,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(react_development,react_development.exports);react.exports=react_development.exports;var React=react.exports,client={},reactDom={exports:{}},reactDom_development={},scheduler={exports:{}},scheduler_development={};/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(d){(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var g=!1,s=!1,T=5;function D(ye,ke){var tt=ye.length;ye.push(ke),U(ye,ke,tt)}function R(ye){return ye.length===0?null:ye[0]}function h(ye){if(ye.length===0)return null;var ke=ye[0],tt=ye.pop();return tt!==ke&&(ye[0]=tt,x(ye,tt,0)),ke}function U(ye,ke,tt){for(var Ct=tt;Ct>0;){var bt=Ct-1>>>1,hn=ye[bt];if(j(hn,ke)>0)ye[bt]=ke,ye[Ct]=hn,Ct=bt;else return}}function x(ye,ke,tt){for(var Ct=tt,bt=ye.length,hn=bt>>>1;Ct<hn;){var on=(Ct+1)*2-1,mr=ye[on],Lt=on+1,he=ye[Lt];if(j(mr,ke)<0)Lt<bt&&j(he,mr)<0?(ye[Ct]=he,ye[Lt]=ke,Ct=Lt):(ye[Ct]=mr,ye[on]=ke,Ct=on);else if(Lt<bt&&j(he,ke)<0)ye[Ct]=he,ye[Lt]=ke,Ct=Lt;else return}}function j(ye,ke){var tt=ye.sortIndex-ke.sortIndex;return tt!==0?tt:ye.id-ke.id}var K=1,G=2,se=3,ee=4,oe=5;function Ve(ye,ke){}var Ne=typeof performance=="object"&&typeof performance.now=="function";if(Ne){var ge=performance;d.unstable_now=function(){return ge.now()}}else{var Be=Date,_e=Be.now();d.unstable_now=function(){return Be.now()-_e}}var et=1073741823,$e=-1,it=250,Re=5e3,Pe=1e4,Le=et,F=[],Ge=[],Xt=1,We=null,ut=se,xt=!1,sn=!1,at=!1,_n=typeof setTimeout=="function"?setTimeout:null,Kn=typeof clearTimeout=="function"?clearTimeout:null,En=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function lr(ye){for(var ke=R(Ge);ke!==null;){if(ke.callback===null)h(Ge);else if(ke.startTime<=ye)h(Ge),ke.sortIndex=ke.expirationTime,D(F,ke);else return;ke=R(Ge)}}function qt(ye){if(at=!1,lr(ye),!sn)if(R(F)!==null)sn=!0,Or(pn);else{var ke=R(Ge);ke!==null&&$t(qt,ke.startTime-ye)}}function pn(ye,ke){sn=!1,at&&(at=!1,Dr()),xt=!0;var tt=ut;try{var Ct;if(!s)return cr(ye,ke)}finally{We=null,ut=tt,xt=!1}}function cr(ye,ke){var tt=ke;for(lr(tt),We=R(F);We!==null&&!g&&!(We.expirationTime>tt&&(!ye||Jt()));){var Ct=We.callback;if(typeof Ct=="function"){We.callback=null,ut=We.priorityLevel;var bt=We.expirationTime<=tt,hn=Ct(bt);tt=d.unstable_now(),typeof hn=="function"?We.callback=hn:We===R(F)&&h(F),lr(tt)}else h(F);We=R(F)}if(We!==null)return!0;var on=R(Ge);return on!==null&&$t(qt,on.startTime-tt),!1}function ma(ye,ke){switch(ye){case K:case G:case se:case ee:case oe:break;default:ye=se}var tt=ut;ut=ye;try{return ke()}finally{ut=tt}}function Vr(ye){var ke;switch(ut){case K:case G:case se:ke=se;break;default:ke=ut;break}var tt=ut;ut=ke;try{return ye()}finally{ut=tt}}function Wr(ye){var ke=ut;return function(){var tt=ut;ut=ke;try{return ye.apply(this,arguments)}finally{ut=tt}}}function Fr(ye,ke,tt){var Ct=d.unstable_now(),bt;if(typeof tt=="object"&&tt!==null){var hn=tt.delay;typeof hn=="number"&&hn>0?bt=Ct+hn:bt=Ct}else bt=Ct;var on;switch(ye){case K:on=$e;break;case G:on=it;break;case oe:on=Le;break;case ee:on=Pe;break;case se:default:on=Re;break}var mr=bt+on,Lt={id:Xt++,callback:ke,priorityLevel:ye,startTime:bt,expirationTime:mr,sortIndex:-1};return bt>Ct?(Lt.sortIndex=bt,D(Ge,Lt),R(F)===null&&Lt===R(Ge)&&(at?Dr():at=!0,$t(qt,bt-Ct))):(Lt.sortIndex=mr,D(F,Lt),!sn&&!xt&&(sn=!0,Or(pn))),Lt}function On(){}function dr(){!sn&&!xt&&(sn=!0,Or(pn))}function fr(){return R(F)}function pr(ye){ye.callback=null}function mn(){return ut}var Dn=!1,bn=null,Kt=-1,ot=T,Et=-1;function Jt(){var ye=d.unstable_now()-Et;return!(ye<ot)}function Mn(){}function V(ye){if(ye<0||ye>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}ye>0?ot=Math.floor(1e3/ye):ot=T}var Zt=function(){if(bn!==null){var ye=d.unstable_now();Et=ye;var ke=!0,tt=!0;try{tt=bn(ke,ye)}finally{tt?An():(Dn=!1,bn=null)}}else Dn=!1},An;if(typeof En=="function")An=function(){En(Zt)};else if(typeof MessageChannel!="undefined"){var Jn=new MessageChannel,xn=Jn.port2;Jn.port1.onmessage=Zt,An=function(){xn.postMessage(null)}}else An=function(){_n(Zt,0)};function Or(ye){bn=ye,Dn||(Dn=!0,An())}function $t(ye,ke){Kt=_n(function(){ye(d.unstable_now())},ke)}function Dr(){Kn(Kt),Kt=-1}var Nr=Mn,Qr=null;d.unstable_IdlePriority=oe,d.unstable_ImmediatePriority=K,d.unstable_LowPriority=ee,d.unstable_NormalPriority=se,d.unstable_Profiling=Qr,d.unstable_UserBlockingPriority=G,d.unstable_cancelCallback=pr,d.unstable_continueExecution=dr,d.unstable_forceFrameRate=V,d.unstable_getCurrentPriorityLevel=mn,d.unstable_getFirstCallbackNode=fr,d.unstable_next=Vr,d.unstable_pauseExecution=On,d.unstable_requestPaint=Nr,d.unstable_runWithPriority=ma,d.unstable_scheduleCallback=Fr,d.unstable_shouldYield=Jt,d.unstable_wrapCallback=Wr,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(scheduler_development);scheduler.exports=scheduler_development;/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var d=react.exports,g=scheduler.exports,s=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=!1;function D(e){T=e}function R(e){if(!T){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];U("warn",e,n)}}function h(e){if(!T){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];U("error",e,n)}}function U(e,t,n){{var r=s.ReactDebugCurrentFrame,o=r.getStackAddendum();o!==""&&(t+="%s",n=n.concat([o]));var c=n.map(function(f){return String(f)});c.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,c)}}var x=0,j=1,K=2,G=3,se=4,ee=5,oe=6,Ve=7,Ne=8,ge=9,Be=10,_e=11,et=12,$e=13,it=14,Re=15,Pe=16,Le=17,F=18,Ge=19,Xt=21,We=22,ut=23,xt=24,sn=25,at=!0,_n=!1,Kn=!1,En=!1,lr=!1,qt=!0,pn=!1,cr=!1,ma=!0,Vr=!0,Wr=!0,Fr=new Set,On={},dr={};function fr(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){On[e]&&h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),On[e]=t;{var n=e.toLowerCase();dr[n]=e,e==="onDoubleClick"&&(dr.ondblclick=e)}for(var r=0;r<t.length;r++)Fr.add(t[r])}var mn=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Dn=Object.prototype.hasOwnProperty;function bn(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Kt(e){try{return ot(e),!1}catch{return!0}}function ot(e){return""+e}function Et(e,t){if(Kt(e))return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,bn(e)),ot(e)}function Jt(e){if(Kt(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",bn(e)),ot(e)}function Mn(e,t){if(Kt(e))return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,bn(e)),ot(e)}function V(e,t){if(Kt(e))return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",t,bn(e)),ot(e)}function Zt(e){if(Kt(e))return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",bn(e)),ot(e)}function An(e){if(Kt(e))return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",bn(e)),ot(e)}var Jn=0,xn=1,Or=2,$t=3,Dr=4,Nr=5,Qr=6,ye=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ke=ye+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",tt=new RegExp("^["+ye+"]["+ke+"]*$"),Ct={},bt={};function hn(e){return Dn.call(bt,e)?!0:Dn.call(Ct,e)?!1:tt.test(e)?(bt[e]=!0,!0):(Ct[e]=!0,h("Invalid attribute name: `%s`",e),!1)}function on(e,t,n){return t!==null?t.type===Jn:n?!1:e.length>2&&(e[0]==="o"||e[0]==="O")&&(e[1]==="n"||e[1]==="N")}function mr(e,t,n,r){if(n!==null&&n.type===Jn)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":{if(r)return!1;if(n!==null)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return o!=="data-"&&o!=="aria-"}default:return!1}}function Lt(e,t,n,r){if(t===null||typeof t=="undefined"||mr(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case $t:return!t;case Dr:return t===!1;case Nr:return isNaN(t);case Qr:return isNaN(t)||t<1}return!1}function he(e){return Qt.hasOwnProperty(e)?Qt[e]:null}function pe(e,t,n,r,o,c,f){this.acceptsBooleans=t===Or||t===$t||t===Dr,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=f}var Qt={},ha=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];ha.forEach(function(e){Qt[e]=new pe(e,Jn,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];Qt[t]=new pe(t,xn,!1,n,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qt[e]=new pe(e,Or,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qt[e]=new pe(e,Or,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){Qt[e]=new pe(e,$t,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Qt[e]=new pe(e,$t,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Qt[e]=new pe(e,Dr,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Qt[e]=new pe(e,Qr,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Qt[e]=new pe(e,Nr,!1,e.toLowerCase(),null,!1,!1)});var Yr=/[\-\:]([a-z])/g,vi=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(Yr,vi);Qt[t]=new pe(t,xn,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(Yr,vi);Qt[t]=new pe(t,xn,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yr,vi);Qt[t]=new pe(t,xn,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Qt[e]=new pe(e,xn,!1,e.toLowerCase(),null,!1,!1)});var zi="xlinkHref";Qt[zi]=new pe("xlinkHref",xn,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Qt[e]=new pe(e,xn,!1,e.toLowerCase(),null,!0,!0)});var To=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,va=!1;function ya(e){!va&&To.test(e)&&(va=!0,h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}function kr(e,t,n,r){if(r.mustUseProperty){var o=r.propertyName;return e[o]}else{Et(n,t),r.sanitizeURL&&ya(""+n);var c=r.attributeName,f=null;if(r.type===Dr){if(e.hasAttribute(c)){var _=e.getAttribute(c);return _===""?!0:Lt(t,n,r,!1)?_:_===""+n?n:_}}else if(e.hasAttribute(c)){if(Lt(t,n,r,!1))return e.getAttribute(c);if(r.type===$t)return n;f=e.getAttribute(c)}return Lt(t,n,r,!1)?f===null?n:f:f===""+n?n:f}}function Gr(e,t,n){{if(!hn(t))return;if(!e.hasAttribute(t))return n===void 0?void 0:null;var r=e.getAttribute(t);return Et(n,t),r===""+n?n:r}}function hr(e,t,n,r){var o=he(t);if(!on(t,o,r)){if(Lt(t,n,o,r)&&(n=null),r||o===null){if(hn(t)){var c=t;n===null?e.removeAttribute(c):(Et(n,t),e.setAttribute(c,""+n))}return}var f=o.mustUseProperty;if(f){var _=o.propertyName;if(n===null){var b=o.type;e[_]=b===$t?!1:""}else e[_]=n;return}var O=o.attributeName,C=o.attributeNamespace;if(n===null)e.removeAttribute(O);else{var L=o.type,H;L===$t||L===Dr&&n===!0?H="":(Et(n,O),H=""+n,o.sanitizeURL&&ya(H.toString())),C?e.setAttributeNS(C,O,H):e.setAttribute(O,H)}}}var Xn=Symbol.for("react.element"),k=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),P=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),kt=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Bn=Symbol.for("react.scope"),wt=Symbol.for("react.debug_trace_mode"),wn=Symbol.for("react.offscreen"),Mr=Symbol.for("react.legacy_hidden"),Ru=Symbol.for("react.cache"),Ou=Symbol.for("react.tracing_marker"),gs=Symbol.iterator,_s="@@iterator";function Aa(e){if(e===null||typeof e!="object")return null;var t=gs&&e[gs]||e[_s];return typeof t=="function"?t:null}var ct=Object.assign,yi=0,qr,So,Ro,xa,Oo,pt,vr;function Kr(){}Kr.__reactDisabledLog=!0;function Ze(){{if(yi===0){qr=console.log,So=console.info,Ro=console.warn,xa=console.error,Oo=console.group,pt=console.groupCollapsed,vr=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Kr,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}yi++}}function Du(){{if(yi--,yi===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ct({},e,{value:qr}),info:ct({},e,{value:So}),warn:ct({},e,{value:Ro}),error:ct({},e,{value:xa}),group:ct({},e,{value:Oo}),groupCollapsed:ct({},e,{value:pt}),groupEnd:ct({},e,{value:vr})})}yi<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Vt=s.ReactCurrentDispatcher,y;function Tt(e,t,n){{if(y===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);y=r&&r[1]||""}return`
`+y+e}}var ga=!1,Jr;{var gi=typeof WeakMap=="function"?WeakMap:Map;Jr=new gi}function vn(e,t){if(!e||ga)return"";{var n=Jr.get(e);if(n!==void 0)return n}var r;ga=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=Vt.current,Vt.current=null,Ze();try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(q){r=q}Reflect.construct(e,[],f)}else{try{f.call()}catch(q){r=q}e.call(f.prototype)}}else{try{throw Error()}catch(q){r=q}e()}}catch(q){if(q&&r&&typeof q.stack=="string"){for(var _=q.stack.split(`
`),b=r.stack.split(`
`),O=_.length-1,C=b.length-1;O>=1&&C>=0&&_[O]!==b[C];)C--;for(;O>=1&&C>=0;O--,C--)if(_[O]!==b[C]){if(O!==1||C!==1)do if(O--,C--,C<0||_[O]!==b[C]){var L=`
`+_[O].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&Jr.set(e,L),L}while(O>=1&&C>=0);break}}}finally{ga=!1,Vt.current=c,Du(),Error.prepareStackTrace=o}var H=e?e.displayName||e.name:"",Q=H?Tt(H):"";return typeof e=="function"&&Jr.set(e,Q),Q}function Do(e,t,n){return vn(e,!0)}function Mo(e,t,n){return vn(e,!1)}function Es(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Ir(e,t,n){if(e==null)return"";if(typeof e=="function")return vn(e,Es(e));if(typeof e=="string")return Tt(e);switch(e){case nt:return Tt("Suspense");case kt:return Tt("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Ie:return Mo(e.render);case Pt:return Ir(e.type,t,n);case ft:{var r=e,o=r._payload,c=r._init;try{return Ir(c(o),t,n)}catch{}}}return""}function De(e){switch(e._debugOwner&&e._debugOwner.type,e._debugSource,e.tag){case ee:return Tt(e.type);case Pe:return Tt("Lazy");case $e:return Tt("Suspense");case Ge:return Tt("SuspenseList");case x:case K:case Re:return Mo(e.type);case _e:return Mo(e.type.render);case j:return Do(e.type);default:return""}}function Ao(e){try{var t="",n=e;do t+=De(n),n=n.return;while(n);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Xi(e,t,n){var r=e.displayName;if(r)return r;var o=t.displayName||t.name||"";return o!==""?n+"("+o+")":n}function bs(e){return e.displayName||"Context"}function St(e){if(e==null)return null;if(typeof e.tag=="number"&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case k:return"Portal";case je:return"Profiler";case Te:return"StrictMode";case nt:return"Suspense";case kt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case P:var t=e;return bs(t)+".Consumer";case st:var n=e;return bs(n._context)+".Provider";case Ie:return Xi(e,e.render,"ForwardRef");case Pt:var r=e.displayName||null;return r!==null?r:St(e.type)||"Memo";case ft:{var o=e,c=o._payload,f=o._init;try{return St(f(c))}catch{return null}}}return null}function xo(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(r!==""?n+"("+r+")":n)}function Co(e){return e.displayName||"Context"}function rt(e){var t=e.tag,n=e.type;switch(t){case xt:return"Cache";case ge:var r=n;return Co(r)+".Consumer";case Be:var o=n;return Co(o._context)+".Provider";case F:return"DehydratedFragment";case _e:return xo(n,n.render,"ForwardRef");case Ve:return"Fragment";case ee:return n;case se:return"Portal";case G:return"Root";case oe:return"Text";case Pe:return St(n);case Ne:return n===Te?"StrictMode":"Mode";case We:return"Offscreen";case et:return"Profiler";case Xt:return"Scope";case $e:return"Suspense";case Ge:return"SuspenseList";case sn:return"TracingMarker";case j:case x:case Le:case K:case it:case Re:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break}return null}var ws=s.ReactDebugCurrentFrame,$n=null,_i=!1;function qa(){{if($n===null)return null;var e=$n._debugOwner;if(e!==null&&typeof e!="undefined")return rt(e)}return null}function Ts(){return $n===null?"":Ao($n)}function Tn(){ws.getCurrentStack=null,$n=null,_i=!1}function nn(e){ws.getCurrentStack=e===null?null:Ts,$n=e,_i=!1}function Bi(){return $n}function Ar(e){_i=e}function Zn(e){return""+e}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return An(e),e;default:return""}}var Ka={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function Ur(e,t){Ka[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function _a(e){var t=e.type,n=e.nodeName;return n&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ss(e){return e._valueTracker}function Ja(e){e._valueTracker=null}function $i(e){var t="";return e&&(_a(e)?t=e.checked?"true":"false":t=e.value),t}function Po(e){var t=_a(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);An(e[t]);var r=""+e[t];if(!(e.hasOwnProperty(t)||typeof n=="undefined"||typeof n.get!="function"||typeof n.set!="function")){var o=n.get,c=n.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(_){An(_),r=""+_,c.call(this,_)}}),Object.defineProperty(e,t,{enumerable:n.enumerable});var f={getValue:function(){return r},setValue:function(_){An(_),r=""+_},stopTracking:function(){Ja(e),delete e[t]}};return f}}function Zr(e){Ss(e)||(e._valueTracker=Po(e))}function ea(e){if(!e)return!1;var t=Ss(e);if(!t)return!0;var n=t.getValue(),r=$i(e);return r!==n?(t.setValue(r),!0):!1}function dt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ei=!1,bi=!1,ta=!1,Hr=!1;function Rs(e){var t=e.type==="checkbox"||e.type==="radio";return t?e.checked!=null:e.value!=null}function w(e,t){var n=e,r=t.checked,o=ct({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:n._wrapperState.initialChecked});return o}function I(e,t){Ur("input",t),t.checked!==void 0&&t.defaultChecked!==void 0&&!bi&&(h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component",t.type),bi=!0),t.value!==void 0&&t.defaultValue!==void 0&&!Ei&&(h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component",t.type),Ei=!0);var n=e,r=t.defaultValue==null?"":t.defaultValue;n._wrapperState={initialChecked:t.checked!=null?t.checked:t.defaultChecked,initialValue:rn(t.value!=null?t.value:r),controlled:Rs(t)}}function W(e,t){var n=e,r=t.checked;r!=null&&hr(n,"checked",r,!1)}function J(e,t){var n=e;{var r=Rs(t);!n._wrapperState.controlled&&r&&!Hr&&(h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Hr=!0),n._wrapperState.controlled&&!r&&!ta&&(h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),ta=!0)}W(e,t);var o=rn(t.value),c=t.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=Zn(o)):n.value!==Zn(o)&&(n.value=Zn(o));else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?Qe(n,t.type,o):t.hasOwnProperty("defaultValue")&&Qe(n,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function me(e,t,n){var r=e;if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type,c=o==="submit"||o==="reset";if(c&&(t.value===void 0||t.value===null))return;var f=Zn(r._wrapperState.initialValue);n||f!==r.value&&(r.value=f),r.defaultValue=f}var _=r.name;_!==""&&(r.name=""),r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked,_!==""&&(r.name=_)}function Ye(e,t){var n=e;J(n,t),xe(n,t)}function xe(e,t){var n=t.name;if(t.type==="radio"&&n!=null){for(var r=e;r.parentNode;)r=r.parentNode;Et(n,"name");for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),c=0;c<o.length;c++){var f=o[c];if(!(f===e||f.form!==e.form)){var _=td(f);if(!_)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");ea(f),J(f,_)}}}}function Qe(e,t,n){(t!=="number"||dt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=Zn(e._wrapperState.initialValue):e.defaultValue!==Zn(n)&&(e.defaultValue=Zn(n)))}var mt=!1,Ft=!1,Bt=!1;function Mt(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?d.Children.forEach(t.children,function(n){n!=null&&(typeof n=="string"||typeof n=="number"||Ft||(Ft=!0,h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):t.dangerouslySetInnerHTML!=null&&(Bt||(Bt=!0,h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),t.selected!=null&&!mt&&(h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),mt=!0)}function It(e,t){t.value!=null&&e.setAttribute("value",Zn(rn(t.value)))}var en=Array.isArray;function Rt(e){return en(e)}var Za;Za=!1;function xr(){var e=qa();return e?`

Check the render method of \``+e+"`.":""}var Vi=["value","defaultValue"];function Fo(e){{Ur("select",e);for(var t=0;t<Vi.length;t++){var n=Vi[t];if(e[n]!=null){var r=Rt(e[n]);e.multiple&&!r?h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,xr()):!e.multiple&&r&&h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,xr())}}}}function Ea(e,t,n,r){var o=e.options;if(t){for(var c=n,f={},_=0;_<c.length;_++)f["$"+c[_]]=!0;for(var b=0;b<o.length;b++){var O=f.hasOwnProperty("$"+o[b].value);o[b].selected!==O&&(o[b].selected=O),O&&r&&(o[b].defaultSelected=!0)}}else{for(var C=Zn(rn(n)),L=null,H=0;H<o.length;H++){if(o[H].value===C){o[H].selected=!0,r&&(o[H].defaultSelected=!0);return}L===null&&!o[H].disabled&&(L=o[H])}L!==null&&(L.selected=!0)}}function No(e,t){return ct({},t,{value:void 0})}function wi(e,t){var n=e;Fo(t),n._wrapperState={wasMultiple:!!t.multiple},t.value!==void 0&&t.defaultValue!==void 0&&!Za&&(h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),Za=!0)}function Mu(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;r!=null?Ea(n,!!t.multiple,r,!1):t.defaultValue!=null&&Ea(n,!!t.multiple,t.defaultValue,!0)}function yf(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;o!=null?Ea(n,!!t.multiple,o,!1):r!==!!t.multiple&&(t.defaultValue!=null?Ea(n,!!t.multiple,t.defaultValue,!0):Ea(n,!!t.multiple,t.multiple?[]:"",!1))}function gf(e,t){var n=e,r=t.value;r!=null&&Ea(n,!!t.multiple,r,!1)}var ko=!1;function Au(e,t){var n=e;if(t.dangerouslySetInnerHTML!=null)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");var r=ct({},t,{value:void 0,defaultValue:void 0,children:Zn(n._wrapperState.initialValue)});return r}function oc(e,t){var n=e;Ur("textarea",t),t.value!==void 0&&t.defaultValue!==void 0&&!ko&&(h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component"),ko=!0);var r=t.value;if(r==null){var o=t.children,c=t.defaultValue;if(o!=null){h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(c!=null)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Rt(o)){if(o.length>1)throw new Error("<textarea> can only have at most one child.");o=o[0]}c=o}}c==null&&(c=""),r=c}n._wrapperState={initialValue:rn(r)}}function sc(e,t){var n=e,r=rn(t.value),o=rn(t.defaultValue);if(r!=null){var c=Zn(r);c!==n.value&&(n.value=c),t.defaultValue==null&&n.defaultValue!==c&&(n.defaultValue=c)}o!=null&&(n.defaultValue=Zn(o))}function xu(e,t){var n=e,r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function _f(e,t){sc(e,t)}var Ca="http://www.w3.org/1999/xhtml",Ef="http://www.w3.org/1998/Math/MathML",Cu="http://www.w3.org/2000/svg";function Ti(e){switch(e){case"svg":return Cu;case"math":return Ef;default:return Ca}}function Pu(e,t){return e==null||e===Ca?Ti(t):e===Cu&&t==="foreignObject"?Ca:e}var bf=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e},Si,uc=bf(function(e,t){if(e.namespaceURI===Cu&&!("innerHTML"in e)){Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild);return}e.innerHTML=t}),yr=1,Cn=3,un=8,Vn=9,Os=11,Io=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===Cn){n.nodeValue=t;return}}e.textContent=t},Uo={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function wf(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var lc=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(e){lc.forEach(function(t){Ho[wf(t,e)]=Ho[e]})});function Lo(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(Ho.hasOwnProperty(e)&&Ho[e])?t+"px":(V(t,e),(""+t).trim())}var Ds=/([A-Z])/g,Tf=/^ms-/;function Sf(e){return e.replace(Ds,"-$1").toLowerCase().replace(Tf,"-ms-")}var cc=function(){};{var Fu=/^(?:webkit|moz|o)[A-Z]/,na=/^-ms-/,dc=/-(.)/g,fc=/;\s*$/,Wi={},Nu={},Ms=!1,pc=!1,Qi=function(e){return e.replace(dc,function(t,n){return n.toUpperCase()})},Rf=function(e){Wi.hasOwnProperty(e)&&Wi[e]||(Wi[e]=!0,h("Unsupported style property %s. Did you mean %s?",e,Qi(e.replace(na,"ms-"))))},Of=function(e){Wi.hasOwnProperty(e)&&Wi[e]||(Wi[e]=!0,h("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Df=function(e,t){Nu.hasOwnProperty(t)&&Nu[t]||(Nu[t]=!0,h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,t.replace(fc,"")))},Mf=function(e,t){Ms||(Ms=!0,h("`NaN` is an invalid value for the `%s` css style property.",e))},Af=function(e,t){pc||(pc=!0,h("`Infinity` is an invalid value for the `%s` css style property.",e))};cc=function(e,t){e.indexOf("-")>-1?Rf(e):Fu.test(e)?Of(e):fc.test(t)&&Df(e,t),typeof t=="number"&&(isNaN(t)?Mf(e,t):isFinite(t)||Af(e,t))}}var xf=cc;function Cf(e){{var t="",n="";for(var r in e)if(!!e.hasOwnProperty(r)){var o=e[r];if(o!=null){var c=r.indexOf("--")===0;t+=n+(c?r:Sf(r))+":",t+=Lo(r,o,c),n=";"}}return t||null}}function mc(e,t){var n=e.style;for(var r in t)if(!!t.hasOwnProperty(r)){var o=r.indexOf("--")===0;o||xf(r,t[r]);var c=Lo(r,t[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,c):n[r]=c}}function Pf(e){return e==null||typeof e=="boolean"||e===""}function hc(e){var t={};for(var n in e)for(var r=Uo[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}function Ff(e,t){{if(!t)return;var n=hc(e),r=hc(t),o={};for(var c in n){var f=n[c],_=r[c];if(_&&f!==_){var b=f+","+_;if(o[b])continue;o[b]=!0,h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",Pf(e[f])?"Removing":"Updating",f,_)}}}}var Nf={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},kf=ct({menuitem:!0},Nf),If="__html";function ku(e,t){if(!!t){if(kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(typeof t.dangerouslySetInnerHTML!="object"||!(If in t.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&t.children!=null&&h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),t.style!=null&&typeof t.style!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function Ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Iu={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Yi={},jo=new RegExp("^(aria)-["+ke+"]*$"),Uf=new RegExp("^(aria)[A-Z]["+ke+"]*$");function Hf(e,t){{if(Dn.call(Yi,t)&&Yi[t])return!0;if(Uf.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Iu.hasOwnProperty(n)?n:null;if(r==null)return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Yi[t]=!0,!0;if(t!==r)return h("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),Yi[t]=!0,!0}if(jo.test(t)){var o=t.toLowerCase(),c=Iu.hasOwnProperty(o)?o:null;if(c==null)return Yi[t]=!0,!1;if(t!==c)return h("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,c),Yi[t]=!0,!0}}return!0}function Lf(e,t){{var n=[];for(var r in t){var o=Hf(e,r);o||n.push(r)}var c=n.map(function(f){return"`"+f+"`"}).join(", ");n.length===1?h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e):n.length>1&&h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e)}}function jf(e,t){Ri(e,t)||Lf(e,t)}var vc=!1;function zf(e,t){{if(e!=="input"&&e!=="textarea"&&e!=="select")return;t!=null&&t.value===null&&!vc&&(vc=!0,e==="select"&&t.multiple?h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}var yc=function(){};{var er={},gc=/^on./,Xf=/^on[^A-Z]/,Uu=new RegExp("^(aria)-["+ke+"]*$"),Bf=new RegExp("^(aria)[A-Z]["+ke+"]*$");yc=function(e,t,n,r){if(Dn.call(er,t)&&er[t])return!0;var o=t.toLowerCase();if(o==="onfocusin"||o==="onfocusout")return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),er[t]=!0,!0;if(r!=null){var c=r.registrationNameDependencies,f=r.possibleRegistrationNames;if(c.hasOwnProperty(t))return!0;var _=f.hasOwnProperty(o)?f[o]:null;if(_!=null)return h("Invalid event handler property `%s`. Did you mean `%s`?",t,_),er[t]=!0,!0;if(gc.test(t))return h("Unknown event handler property `%s`. It will be ignored.",t),er[t]=!0,!0}else if(gc.test(t))return Xf.test(t)&&h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),er[t]=!0,!0;if(Uu.test(t)||Bf.test(t))return!0;if(o==="innerhtml")return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),er[t]=!0,!0;if(o==="aria")return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),er[t]=!0,!0;if(o==="is"&&n!==null&&n!==void 0&&typeof n!="string")return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),er[t]=!0,!0;if(typeof n=="number"&&isNaN(n))return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),er[t]=!0,!0;var b=he(t),O=b!==null&&b.type===Jn;if(As.hasOwnProperty(o)){var C=As[o];if(C!==t)return h("Invalid DOM property `%s`. Did you mean `%s`?",t,C),er[t]=!0,!0}else if(!O&&t!==o)return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),er[t]=!0,!0;return typeof n=="boolean"&&mr(t,n,b,!1)?(n?h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),er[t]=!0,!0):O?!0:mr(t,n,b,!1)?(er[t]=!0,!1):((n==="false"||n==="true")&&b!==null&&b.type===$t&&(h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),er[t]=!0),!0)}}var $f=function(e,t,n){{var r=[];for(var o in t){var c=yc(e,o,t[o],n);c||r.push(o)}var f=r.map(function(_){return"`"+_+"`"}).join(", ");r.length===1?h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",f,e):r.length>1&&h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",f,e)}};function Vf(e,t,n){Ri(e,t)||$f(e,t,n)}var zo=1,Xo=1<<1,ei=1<<2,xs=zo|Xo|ei,ti=null;function _c(e){ti!==null&&h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),ti=e}function Wf(){ti===null&&h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),ti=null}function Qf(e){return e===ti}function Gi(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===Cn?t.parentNode:t}var Cs=null,Pa=null,Fa=null;function qi(e){var t=io(e);if(!!t){if(typeof Cs!="function")throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;if(n){var r=td(n);Cs(t.stateNode,t.type,r)}}}function Ec(e){Cs=e}function Hu(e){Pa?Fa?Fa.push(e):Fa=[e]:Pa=e}function Yf(){return Pa!==null||Fa!==null}function ba(){if(!!Pa){var e=Pa,t=Fa;if(Pa=null,Fa=null,qi(e),t)for(var n=0;n<t.length;n++)qi(t[n])}}var Lr=function(e,t){return e(t)},Ps=function(){},Fs=!1;function Bo(){var e=Yf();e&&(Ps(),ba())}function bc(e,t,n){if(Fs)return e(t,n);Fs=!0;try{return Lr(e,t,n)}finally{Fs=!1,Bo()}}function Gf(e,t,n){Lr=e,Ps=n}function qf(e){return e==="button"||e==="input"||e==="select"||e==="textarea"}function Ns(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(n.disabled&&qf(t));default:return!1}}function Na(e,t){var n=e.stateNode;if(n===null)return null;var r=td(n);if(r===null)return null;var o=r[t];if(Ns(t,e.type,r))return null;if(o&&typeof o!="function")throw new Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}var $o=!1;if(mn)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){$o=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{$o=!1}function wc(e,t,n,r,o,c,f,_,b){var O=Array.prototype.slice.call(arguments,3);try{t.apply(n,O)}catch(C){this.onError(C)}}var ks=wc;if(typeof window!="undefined"&&typeof window.dispatchEvent=="function"&&typeof document!="undefined"&&typeof document.createEvent=="function"){var a=document.createElement("react");ks=function(t,n,r,o,c,f,_,b,O){if(typeof document=="undefined"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var C=document.createEvent("Event"),L=!1,H=!0,Q=window.event,q=Object.getOwnPropertyDescriptor(window,"event");function ae(){a.removeEventListener(Z,Ke,!1),typeof window.event!="undefined"&&window.hasOwnProperty("event")&&(window.event=Q)}var Ae=Array.prototype.slice.call(arguments,3);function Ke(){L=!0,ae(),n.apply(r,Ae),H=!1}var He,Ot=!1,Dt=!1;function B(X){if(He=X.error,Ot=!0,He===null&&X.colno===0&&X.lineno===0&&(Dt=!0),X.defaultPrevented&&He!=null&&typeof He=="object")try{He._suppressLogging=!0}catch{}}var Z="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",B),a.addEventListener(Z,Ke,!1),C.initEvent(Z,!1,!1),a.dispatchEvent(C),q&&Object.defineProperty(window,"event",q),L&&H&&(Ot?Dt&&(He=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):He=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(He)),window.removeEventListener("error",B),!L)return ae(),wc.apply(this,arguments)}}var u=ks,l=!1,v=null,E=!1,S=null,A={onError:function(e){l=!0,v=e}};function M(e,t,n,r,o,c,f,_,b){l=!1,v=null,u.apply(A,arguments)}function N(e,t,n,r,o,c,f,_,b){if(M.apply(this,arguments),l){var O=le();E||(E=!0,S=O)}}function z(){if(E){var e=S;throw E=!1,S=null,e}}function $(){return l}function le(){if(l){var e=v;return l=!1,v=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}function te(e){return e._reactInternals}function ie(e){return e._reactInternals!==void 0}function de(e,t){e._reactInternals=t}var ne=0,ze=1,Ce=2,Y=4,ve=16,Ue=32,Xe=64,be=128,Wt=256,ln=512,yn=1024,Pn=2048,jr=4096,gr=8192,Is=16384,Ki=Pn|Y|Xe|ln|yn|Is,Fn=32767,Ji=32768,_r=65536,Vo=131072,Wo=1048576,Qo=2097152,ra=4194304,Yo=8388608,Wn=16777216,Go=33554432,Lu=Y|yn|0,ni=Ce|Y|ve|Ue|ln|jr|gr,ju=Y|Xe|ln|gr,Us=Pn|ve,Oi=ra|Yo|Qo,pb=s.ReactCurrentOwner;function qo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{var r=t;do t=r,(t.flags&(Ce|jr))!==ne&&(n=t.return),r=t.return;while(r)}return t.tag===G?n:null}function Rv(e){if(e.tag===$e){var t=e.memoizedState;if(t===null){var n=e.alternate;n!==null&&(t=n.memoizedState)}if(t!==null)return t.dehydrated}return null}function Ov(e){return e.tag===G?e.stateNode.containerInfo:null}function mb(e){return qo(e)===e}function hb(e){{var t=pb.current;if(t!==null&&t.tag===j){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",rt(n)||"A component"),r._warnedAboutRefsInRender=!0}}var o=te(e);return o?qo(o)===o:!1}function Dv(e){if(qo(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function Mv(e){var t=e.alternate;if(!t){var n=qo(e);if(n===null)throw new Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var r=e,o=t;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){var _=c.return;if(_!==null){r=o=_;continue}break}if(c.child===f.child){for(var b=c.child;b;){if(b===r)return Dv(c),e;if(b===o)return Dv(c),t;b=b.sibling}throw new Error("Unable to find node on an unmounted component.")}if(r.return!==o.return)r=c,o=f;else{for(var O=!1,C=c.child;C;){if(C===r){O=!0,r=c,o=f;break}if(C===o){O=!0,o=c,r=f;break}C=C.sibling}if(!O){for(C=f.child;C;){if(C===r){O=!0,r=f,o=c;break}if(C===o){O=!0,o=f,r=c;break}C=C.sibling}if(!O)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==o)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==G)throw new Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}function Av(e){var t=Mv(e);return t!==null?xv(t):null}function xv(e){if(e.tag===ee||e.tag===oe)return e;for(var t=e.child;t!==null;){var n=xv(t);if(n!==null)return n;t=t.sibling}return null}function vb(e){var t=Mv(e);return t!==null?Cv(t):null}function Cv(e){if(e.tag===ee||e.tag===oe)return e;for(var t=e.child;t!==null;){if(t.tag!==se){var n=Cv(t);if(n!==null)return n}t=t.sibling}return null}var Pv=g.unstable_scheduleCallback,yb=g.unstable_cancelCallback,gb=g.unstable_shouldYield,_b=g.unstable_requestPaint,Qn=g.unstable_now,Eb=g.unstable_getCurrentPriorityLevel,Tc=g.unstable_ImmediatePriority,Kf=g.unstable_UserBlockingPriority,Ko=g.unstable_NormalPriority,bb=g.unstable_LowPriority,Jf=g.unstable_IdlePriority,wb=g.unstable_yieldValue,Tb=g.unstable_setDisableYieldValue,Hs=null,Er=null,Se=null,ri=!1,Ia=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined";function Sb(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{ma&&(e=ct({},e,{getLaneLabelMap:xb,injectProfilingHooks:Ab})),Hs=t.inject(e),Er=t}catch(n){h("React instrumentation encountered an error: %s.",n)}return!!t.checkDCE}function Rb(e,t){if(Er&&typeof Er.onScheduleFiberRoot=="function")try{Er.onScheduleFiberRoot(Hs,e,t)}catch(n){ri||(ri=!0,h("React instrumentation encountered an error: %s",n))}}function Ob(e,t){if(Er&&typeof Er.onCommitFiberRoot=="function")try{var n=(e.current.flags&be)===be;if(Vr){var r;switch(t){case oa:r=Tc;break;case Mi:r=Kf;break;case Ai:r=Ko;break;case xc:r=Jf;break;default:r=Ko;break}Er.onCommitFiberRoot(Hs,e,r,n)}}catch(o){ri||(ri=!0,h("React instrumentation encountered an error: %s",o))}}function Db(e){if(Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(Hs,e)}catch(t){ri||(ri=!0,h("React instrumentation encountered an error: %s",t))}}function Mb(e){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(Hs,e)}catch(t){ri||(ri=!0,h("React instrumentation encountered an error: %s",t))}}function Yn(e){if(typeof wb=="function"&&(Tb(e),D(e)),Er&&typeof Er.setStrictMode=="function")try{Er.setStrictMode(Hs,e)}catch(t){ri||(ri=!0,h("React instrumentation encountered an error: %s",t))}}function Ab(e){Se=e}function xb(){{for(var e=new Map,t=1,n=0;n<ep;n++){var r=qb(t);e.set(t,r),t*=2}return e}}function Cb(e){Se!==null&&typeof Se.markCommitStarted=="function"&&Se.markCommitStarted(e)}function Fv(){Se!==null&&typeof Se.markCommitStopped=="function"&&Se.markCommitStopped()}function zu(e){Se!==null&&typeof Se.markComponentRenderStarted=="function"&&Se.markComponentRenderStarted(e)}function Ls(){Se!==null&&typeof Se.markComponentRenderStopped=="function"&&Se.markComponentRenderStopped()}function Pb(e){Se!==null&&typeof Se.markComponentPassiveEffectMountStarted=="function"&&Se.markComponentPassiveEffectMountStarted(e)}function Fb(){Se!==null&&typeof Se.markComponentPassiveEffectMountStopped=="function"&&Se.markComponentPassiveEffectMountStopped()}function Nb(e){Se!==null&&typeof Se.markComponentPassiveEffectUnmountStarted=="function"&&Se.markComponentPassiveEffectUnmountStarted(e)}function kb(){Se!==null&&typeof Se.markComponentPassiveEffectUnmountStopped=="function"&&Se.markComponentPassiveEffectUnmountStopped()}function Ib(e){Se!==null&&typeof Se.markComponentLayoutEffectMountStarted=="function"&&Se.markComponentLayoutEffectMountStarted(e)}function Ub(){Se!==null&&typeof Se.markComponentLayoutEffectMountStopped=="function"&&Se.markComponentLayoutEffectMountStopped()}function Nv(e){Se!==null&&typeof Se.markComponentLayoutEffectUnmountStarted=="function"&&Se.markComponentLayoutEffectUnmountStarted(e)}function kv(){Se!==null&&typeof Se.markComponentLayoutEffectUnmountStopped=="function"&&Se.markComponentLayoutEffectUnmountStopped()}function Hb(e,t,n){Se!==null&&typeof Se.markComponentErrored=="function"&&Se.markComponentErrored(e,t,n)}function Lb(e,t,n){Se!==null&&typeof Se.markComponentSuspended=="function"&&Se.markComponentSuspended(e,t,n)}function jb(e){Se!==null&&typeof Se.markLayoutEffectsStarted=="function"&&Se.markLayoutEffectsStarted(e)}function zb(){Se!==null&&typeof Se.markLayoutEffectsStopped=="function"&&Se.markLayoutEffectsStopped()}function Xb(e){Se!==null&&typeof Se.markPassiveEffectsStarted=="function"&&Se.markPassiveEffectsStarted(e)}function Bb(){Se!==null&&typeof Se.markPassiveEffectsStopped=="function"&&Se.markPassiveEffectsStopped()}function Iv(e){Se!==null&&typeof Se.markRenderStarted=="function"&&Se.markRenderStarted(e)}function $b(){Se!==null&&typeof Se.markRenderYielded=="function"&&Se.markRenderYielded()}function Uv(){Se!==null&&typeof Se.markRenderStopped=="function"&&Se.markRenderStopped()}function Vb(e){Se!==null&&typeof Se.markRenderScheduled=="function"&&Se.markRenderScheduled(e)}function Wb(e,t){Se!==null&&typeof Se.markForceUpdateScheduled=="function"&&Se.markForceUpdateScheduled(e,t)}function Zf(e,t){Se!==null&&typeof Se.markStateUpdateScheduled=="function"&&Se.markStateUpdateScheduled(e,t)}var qe=0,vt=1,jt=2,Sn=8,ai=16,Hv=Math.clz32?Math.clz32:Gb,Qb=Math.log,Yb=Math.LN2;function Gb(e){var t=e>>>0;return t===0?32:31-(Qb(t)/Yb|0)|0}var ep=31,ce=0,Gn=0,yt=1,js=2,Di=4,Jo=8,ii=16,Xu=32,zs=4194240,Bu=64,tp=128,np=256,rp=512,ap=1024,ip=2048,op=4096,sp=8192,up=16384,lp=32768,cp=65536,dp=131072,fp=262144,pp=524288,mp=1048576,hp=2097152,Sc=130023424,Xs=4194304,vp=8388608,yp=16777216,gp=33554432,_p=67108864,Lv=Xs,$u=134217728,jv=268435455,Vu=268435456,Zo=536870912,aa=1073741824;function qb(e){{if(e&yt)return"Sync";if(e&js)return"InputContinuousHydration";if(e&Di)return"InputContinuous";if(e&Jo)return"DefaultHydration";if(e&ii)return"Default";if(e&Xu)return"TransitionHydration";if(e&zs)return"Transition";if(e&Sc)return"Retry";if(e&$u)return"SelectiveHydration";if(e&Vu)return"IdleHydration";if(e&Zo)return"Idle";if(e&aa)return"Offscreen"}}var tn=-1,Rc=Bu,Oc=Xs;function Wu(e){switch(es(e)){case yt:return yt;case js:return js;case Di:return Di;case Jo:return Jo;case ii:return ii;case Xu:return Xu;case Bu:case tp:case np:case rp:case ap:case ip:case op:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:return e&zs;case Xs:case vp:case yp:case gp:case _p:return e&Sc;case $u:return $u;case Vu:return Vu;case Zo:return Zo;case aa:return aa;default:return h("Should have found matching lanes. This is a bug in React."),e}}function Dc(e,t){var n=e.pendingLanes;if(n===ce)return ce;var r=ce,o=e.suspendedLanes,c=e.pingedLanes,f=n&jv;if(f!==ce){var _=f&~o;if(_!==ce)r=Wu(_);else{var b=f&c;b!==ce&&(r=Wu(b))}}else{var O=n&~o;O!==ce?r=Wu(O):c!==ce&&(r=Wu(c))}if(r===ce)return ce;if(t!==ce&&t!==r&&(t&o)===ce){var C=es(r),L=es(t);if(C>=L||C===ii&&(L&zs)!==ce)return t}(r&Di)!==ce&&(r|=n&ii);var H=e.entangledLanes;if(H!==ce)for(var Q=e.entanglements,q=r&H;q>0;){var ae=ts(q),Ae=1<<ae;r|=Q[ae],q&=~Ae}return r}function Kb(e,t){for(var n=e.eventTimes,r=tn;t>0;){var o=ts(t),c=1<<o,f=n[o];f>r&&(r=f),t&=~c}return r}function Jb(e,t){switch(e){case yt:case js:case Di:return t+250;case Jo:case ii:case Xu:case Bu:case tp:case np:case rp:case ap:case ip:case op:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:return t+5e3;case Xs:case vp:case yp:case gp:case _p:return tn;case $u:case Vu:case Zo:case aa:return tn;default:return h("Should have found matching lanes. This is a bug in React."),tn}}function Zb(e,t){for(var n=e.pendingLanes,r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=n;f>0;){var _=ts(f),b=1<<_,O=c[_];O===tn?((b&r)===ce||(b&o)!==ce)&&(c[_]=Jb(b,t)):O<=t&&(e.expiredLanes|=b),f&=~b}}function ew(e){return Wu(e.pendingLanes)}function Ep(e){var t=e.pendingLanes&~aa;return t!==ce?t:t&aa?aa:ce}function tw(e){return(e&yt)!==ce}function bp(e){return(e&jv)!==ce}function zv(e){return(e&Sc)===e}function nw(e){var t=yt|Di|ii;return(e&t)===ce}function rw(e){return(e&zs)===e}function Mc(e,t){var n=js|Di|Jo|ii;return(t&n)!==ce}function aw(e,t){return(t&e.expiredLanes)!==ce}function Xv(e){return(e&zs)!==ce}function Bv(){var e=Rc;return Rc<<=1,(Rc&zs)===ce&&(Rc=Bu),e}function iw(){var e=Oc;return Oc<<=1,(Oc&Sc)===ce&&(Oc=Xs),e}function es(e){return e&-e}function Qu(e){return es(e)}function ts(e){return 31-Hv(e)}function wp(e){return ts(e)}function ia(e,t){return(e&t)!==ce}function Bs(e,t){return(e&t)===t}function lt(e,t){return e|t}function Ac(e,t){return e&~t}function $v(e,t){return e&t}function h0(e){return e}function ow(e,t){return e!==Gn&&e<t?e:t}function Tp(e){for(var t=[],n=0;n<ep;n++)t.push(e);return t}function Yu(e,t,n){e.pendingLanes|=t,t!==Zo&&(e.suspendedLanes=ce,e.pingedLanes=ce);var r=e.eventTimes,o=wp(t);r[o]=n}function sw(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,r=t;r>0;){var o=ts(r),c=1<<o;n[o]=tn,r&=~c}}function Vv(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function uw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=ce,e.pingedLanes=ce,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,o=e.eventTimes,c=e.expirationTimes,f=n;f>0;){var _=ts(f),b=1<<_;r[_]=ce,o[_]=tn,c[_]=tn,f&=~b}}function Sp(e,t){for(var n=e.entangledLanes|=t,r=e.entanglements,o=n;o;){var c=ts(o),f=1<<c;f&t|r[c]&t&&(r[c]|=t),o&=~f}}function lw(e,t){var n=es(t),r;switch(n){case Di:r=js;break;case ii:r=Jo;break;case Bu:case tp:case np:case rp:case ap:case ip:case op:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:case Xs:case vp:case yp:case gp:case _p:r=Xu;break;case Zo:r=Vu;break;default:r=Gn;break}return(r&(e.suspendedLanes|t))!==Gn?Gn:r}function Wv(e,t,n){if(!!Ia)for(var r=e.pendingUpdatersLaneMap;n>0;){var o=wp(n),c=1<<o,f=r[o];f.add(t),n&=~c}}function Qv(e,t){if(!!Ia)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;t>0;){var o=wp(t),c=1<<o,f=n[o];f.size>0&&(f.forEach(function(_){var b=_.alternate;(b===null||!r.has(b))&&r.add(_)}),f.clear()),t&=~c}}function Yv(e,t){return null}var oa=yt,Mi=Di,Ai=ii,xc=Zo,Gu=Gn;function Ua(){return Gu}function qn(e){Gu=e}function cw(e,t){var n=Gu;try{return Gu=e,t()}finally{Gu=n}}function dw(e,t){return e!==0&&e<t?e:t}function fw(e,t){return e===0||e>t?e:t}function Rp(e,t){return e!==0&&e<t}function Gv(e){var t=es(e);return Rp(oa,t)?Rp(Mi,t)?bp(t)?Ai:xc:Mi:oa}function Cc(e){var t=e.current.memoizedState;return t.isDehydrated}var qv;function pw(e){qv=e}function mw(e){qv(e)}var Op;function hw(e){Op=e}var Kv;function vw(e){Kv=e}var Jv;function yw(e){Jv=e}var Zv;function gw(e){Zv=e}var Dp=!1,Pc=[],Zi=null,eo=null,to=null,qu=new Map,Ku=new Map,no=[],_w=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];function Ew(e){return _w.indexOf(e)>-1}function bw(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]}}function ey(e,t){switch(e){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":{var n=t.pointerId;qu.delete(n);break}case"gotpointercapture":case"lostpointercapture":{var r=t.pointerId;Ku.delete(r);break}}}function Ju(e,t,n,r,o,c){if(e===null||e.nativeEvent!==c){var f=bw(t,n,r,o,c);if(t!==null){var _=io(t);_!==null&&Op(_)}return f}e.eventSystemFlags|=r;var b=e.targetContainers;return o!==null&&b.indexOf(o)===-1&&b.push(o),e}function ww(e,t,n,r,o){switch(t){case"focusin":{var c=o;return Zi=Ju(Zi,e,t,n,r,c),!0}case"dragenter":{var f=o;return eo=Ju(eo,e,t,n,r,f),!0}case"mouseover":{var _=o;return to=Ju(to,e,t,n,r,_),!0}case"pointerover":{var b=o,O=b.pointerId;return qu.set(O,Ju(qu.get(O)||null,e,t,n,r,b)),!0}case"gotpointercapture":{var C=o,L=C.pointerId;return Ku.set(L,Ju(Ku.get(L)||null,e,t,n,r,C)),!0}}return!1}function ty(e){var t=as(e.target);if(t!==null){var n=qo(t);if(n!==null){var r=n.tag;if(r===$e){var o=Rv(n);if(o!==null){e.blockedOn=o,Zv(e.priority,function(){Kv(n)});return}}else if(r===G){var c=n.stateNode;if(Cc(c)){e.blockedOn=Ov(n);return}}}}e.blockedOn=null}function Tw(e){for(var t=Jv(),n={blockedOn:null,target:e,priority:t},r=0;r<no.length&&Rp(t,no[r].priority);r++);no.splice(r,0,n),r===0&&ty(n)}function Fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=xp(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(r===null){var o=e.nativeEvent,c=new o.constructor(o.type,o);_c(c),o.target.dispatchEvent(c),Wf()}else{var f=io(r);return f!==null&&Op(f),e.blockedOn=r,!1}t.shift()}return!0}function ny(e,t,n){Fc(e)&&n.delete(t)}function Sw(){Dp=!1,Zi!==null&&Fc(Zi)&&(Zi=null),eo!==null&&Fc(eo)&&(eo=null),to!==null&&Fc(to)&&(to=null),qu.forEach(ny),Ku.forEach(ny)}function Zu(e,t){e.blockedOn===t&&(e.blockedOn=null,Dp||(Dp=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,Sw)))}function el(e){if(Pc.length>0){Zu(Pc[0],e);for(var t=1;t<Pc.length;t++){var n=Pc[t];n.blockedOn===e&&(n.blockedOn=null)}}Zi!==null&&Zu(Zi,e),eo!==null&&Zu(eo,e),to!==null&&Zu(to,e);var r=function(_){return Zu(_,e)};qu.forEach(r),Ku.forEach(r);for(var o=0;o<no.length;o++){var c=no[o];c.blockedOn===e&&(c.blockedOn=null)}for(;no.length>0;){var f=no[0];if(f.blockedOn!==null)break;ty(f),f.blockedOn===null&&no.shift()}}var $s=s.ReactCurrentBatchConfig,Mp=!0;function ry(e){Mp=!!e}function Rw(){return Mp}function Ow(e,t,n){var r=ay(t),o;switch(r){case oa:o=Dw;break;case Mi:o=Mw;break;case Ai:default:o=Ap;break}return o.bind(null,t,n,e)}function Dw(e,t,n,r){var o=Ua(),c=$s.transition;$s.transition=null;try{qn(oa),Ap(e,t,n,r)}finally{qn(o),$s.transition=c}}function Mw(e,t,n,r){var o=Ua(),c=$s.transition;$s.transition=null;try{qn(Mi),Ap(e,t,n,r)}finally{qn(o),$s.transition=c}}function Ap(e,t,n,r){!Mp||Aw(e,t,n,r)}function Aw(e,t,n,r){var o=xp(e,t,n,r);if(o===null){$p(e,t,r,Nc,n),ey(e,r);return}if(ww(o,e,t,n,r)){r.stopPropagation();return}if(ey(e,r),t&ei&&Ew(e)){for(;o!==null;){var c=io(o);c!==null&&mw(c);var f=xp(e,t,n,r);if(f===null&&$p(e,t,r,Nc,n),f===o)break;o=f}o!==null&&r.stopPropagation();return}$p(e,t,r,null,n)}var Nc=null;function xp(e,t,n,r){Nc=null;var o=Gi(r),c=as(o);if(c!==null){var f=qo(c);if(f===null)c=null;else{var _=f.tag;if(_===$e){var b=Rv(f);if(b!==null)return b;c=null}else if(_===G){var O=f.stateNode;if(Cc(O))return Ov(f);c=null}else f!==c&&(c=null)}}return Nc=c,null}function ay(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return oa;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Mi;case"message":{var t=Eb();switch(t){case Tc:return oa;case Kf:return Mi;case Ko:case bb:return Ai;case Jf:return xc;default:return Ai}}default:return Ai}}function xw(e,t,n){return e.addEventListener(t,n,!1),n}function Cw(e,t,n){return e.addEventListener(t,n,!0),n}function Pw(e,t,n,r){return e.addEventListener(t,n,{capture:!0,passive:r}),n}function Fw(e,t,n,r){return e.addEventListener(t,n,{passive:r}),n}var tl=null,Cp=null,nl=null;function Nw(e){return tl=e,Cp=oy(),!0}function kw(){tl=null,Cp=null,nl=null}function iy(){if(nl)return nl;var e,t=Cp,n=t.length,r,o=oy(),c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var f=n-e;for(r=1;r<=f&&t[n-r]===o[c-r];r++);var _=r>1?1-r:void 0;return nl=o.slice(e,_),nl}function oy(){return"value"in tl?tl.value:tl.textContent}function kc(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),t>=32||t===13?t:0}function Ic(){return!0}function sy(){return!1}function sa(e){function t(n,r,o,c,f){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var _ in e)if(!!e.hasOwnProperty(_)){var b=e[_];b?this[_]=b(c):this[_]=c[_]}var O=c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1;return O?this.isDefaultPrevented=Ic:this.isDefaultPrevented=sy,this.isPropagationStopped=sy,this}return ct(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;!n||(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ic)},stopPropagation:function(){var n=this.nativeEvent;!n||(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ic)},persist:function(){},isPersistent:Ic}),t}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=sa(Vs),rl=ct({},Vs,{view:0,detail:0}),Iw=sa(rl),Fp,Np,al;function Uw(e){e!==al&&(al&&e.type==="mousemove"?(Fp=e.screenX-al.screenX,Np=e.screenY-al.screenY):(Fp=0,Np=0),al=e)}var Uc=ct({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(Uw(e),Fp)},movementY:function(e){return"movementY"in e?e.movementY:Np}}),uy=sa(Uc),Hw=ct({},Uc,{dataTransfer:0}),Lw=sa(Hw),jw=ct({},rl,{relatedTarget:0}),kp=sa(jw),zw=ct({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xw=sa(zw),Bw=ct({},Vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$w=sa(Bw),Vw=ct({},Vs,{data:0}),ly=sa(Vw),Ww=ly,Qw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function Gw(e){if(e.key){var t=Qw[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var n=kc(e);return n===13?"Enter":String.fromCharCode(n)}return e.type==="keydown"||e.type==="keyup"?Yw[e.keyCode]||"Unidentified":""}var qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kw(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=qw[e];return r?!!n[r]:!1}function Ip(e){return Kw}var Jw=ct({},rl,{key:Gw,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?kc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zw=sa(Jw),eT=ct({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=sa(eT),tT=ct({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),nT=sa(tT),rT=ct({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),aT=sa(rT),iT=ct({},Uc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=sa(iT),sT=[9,13,27,32],dy=229,Up=mn&&"CompositionEvent"in window,il=null;mn&&"documentMode"in document&&(il=document.documentMode);var uT=mn&&"TextEvent"in window&&!il,fy=mn&&(!Up||il&&il>8&&il<=11),py=32,my=String.fromCharCode(py);function lT(){fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),fr("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),fr("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}var hy=!1;function cT(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function dT(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}function fT(e,t){return e==="keydown"&&t.keyCode===dy}function vy(e,t){switch(e){case"keyup":return sT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==dy;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(e){var t=e.detail;return typeof t=="object"&&"data"in t?t.data:null}function gy(e){return e.locale==="ko"}var Ws=!1;function pT(e,t,n,r,o){var c,f;if(Up?c=dT(t):Ws?vy(t,r)&&(c="onCompositionEnd"):fT(t,r)&&(c="onCompositionStart"),!c)return null;fy&&!gy(r)&&(!Ws&&c==="onCompositionStart"?Ws=Nw(o):c==="onCompositionEnd"&&Ws&&(f=iy()));var _=Xc(n,c);if(_.length>0){var b=new ly(c,t,null,r,o);if(e.push({event:b,listeners:_}),f)b.data=f;else{var O=yy(r);O!==null&&(b.data=O)}}}function mT(e,t){switch(e){case"compositionend":return yy(t);case"keypress":var n=t.which;return n!==py?null:(hy=!0,my);case"textInput":var r=t.data;return r===my&&hy?null:r;default:return null}}function hT(e,t){if(Ws){if(e==="compositionend"||!Up&&vy(e,t)){var n=iy();return kw(),Ws=!1,n}return null}switch(e){case"paste":return null;case"keypress":if(!cT(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fy&&!gy(t)?null:t.data;default:return null}}function vT(e,t,n,r,o){var c;if(uT?c=mT(t,r):c=hT(t,r),!c)return null;var f=Xc(n,"onBeforeInput");if(f.length>0){var _=new Ww("onBeforeInput","beforeinput",null,r,o);e.push({event:_,listeners:f}),_.data=c}}function yT(e,t,n,r,o,c,f){pT(e,t,n,r,o),vT(e,t,n,r,o)}var gT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _y(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gT[e.type]:t==="textarea"}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function _T(e){if(!mn)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return n}function ET(){fr("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function Ey(e,t,n,r){Hu(r);var o=Xc(t,"onChange");if(o.length>0){var c=new Pp("onChange","change",null,n,r);e.push({event:c,listeners:o})}}var ol=null,sl=null;function bT(e){var t=e.nodeName&&e.nodeName.toLowerCase();return t==="select"||t==="input"&&e.type==="file"}function wT(e){var t=[];Ey(t,sl,e,Gi(e)),bc(TT,t)}function TT(e){Hy(e,0)}function Hc(e){var t=Js(e);if(ea(t))return e}function ST(e,t){if(e==="change")return t}var by=!1;mn&&(by=_T("input")&&(!document.documentMode||document.documentMode>9));function RT(e,t){ol=e,sl=t,ol.attachEvent("onpropertychange",Ty)}function wy(){!ol||(ol.detachEvent("onpropertychange",Ty),ol=null,sl=null)}function Ty(e){e.propertyName==="value"&&Hc(sl)&&wT(e)}function OT(e,t,n){e==="focusin"?(wy(),RT(t,n)):e==="focusout"&&wy()}function DT(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hc(sl)}function MT(e){var t=e.nodeName;return t&&t.toLowerCase()==="input"&&(e.type==="checkbox"||e.type==="radio")}function AT(e,t){if(e==="click")return Hc(t)}function xT(e,t){if(e==="input"||e==="change")return Hc(t)}function CT(e){var t=e._wrapperState;!t||!t.controlled||e.type!=="number"||Qe(e,"number",e.value)}function PT(e,t,n,r,o,c,f){var _=n?Js(n):window,b,O;if(bT(_)?b=ST:_y(_)?by?b=xT:(b=DT,O=OT):MT(_)&&(b=AT),b){var C=b(t,n);if(C){Ey(e,C,r,o);return}}O&&O(t,_,n),t==="focusout"&&CT(_)}function FT(){pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"])}function NT(e,t,n,r,o,c,f){var _=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout";if(_&&!Qf(r)){var O=r.relatedTarget||r.fromElement;if(O&&(as(O)||wl(O)))return}if(!(!b&&!_)){var C;if(o.window===o)C=o;else{var L=o.ownerDocument;L?C=L.defaultView||L.parentWindow:C=window}var H,Q;if(b){var q=r.relatedTarget||r.toElement;if(H=n,Q=q?as(q):null,Q!==null){var ae=qo(Q);(Q!==ae||Q.tag!==ee&&Q.tag!==oe)&&(Q=null)}}else H=null,Q=n;if(H!==Q){var Ae=uy,Ke="onMouseLeave",He="onMouseEnter",Ot="mouse";(t==="pointerout"||t==="pointerover")&&(Ae=cy,Ke="onPointerLeave",He="onPointerEnter",Ot="pointer");var Dt=H==null?C:Js(H),B=Q==null?C:Js(Q),Z=new Ae(Ke,Ot+"leave",H,r,o);Z.target=Dt,Z.relatedTarget=B;var X=null,fe=as(o);if(fe===n){var Ee=new Ae(He,Ot+"enter",Q,r,o);Ee.target=B,Ee.relatedTarget=Dt,X=Ee}aS(e,Z,X,H,Q)}}}function kT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ua=typeof Object.is=="function"?Object.is:kT;function ul(e,t){if(ua(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var c=n[o];if(!Dn.call(t,c)||!ua(e[c],t[c]))return!1}return!0}function Sy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function IT(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function Ry(e,t){for(var n=Sy(e),r=0,o=0;n;){if(n.nodeType===Cn){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=Sy(IT(n))}}function UT(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||r.rangeCount===0)return null;var o=r.anchorNode,c=r.anchorOffset,f=r.focusNode,_=r.focusOffset;try{o.nodeType,f.nodeType}catch{return null}return HT(e,o,c,f,_)}function HT(e,t,n,r,o){var c=0,f=-1,_=-1,b=0,O=0,C=e,L=null;e:for(;;){for(var H=null;C===t&&(n===0||C.nodeType===Cn)&&(f=c+n),C===r&&(o===0||C.nodeType===Cn)&&(_=c+o),C.nodeType===Cn&&(c+=C.nodeValue.length),(H=C.firstChild)!==null;)L=C,C=H;for(;;){if(C===e)break e;if(L===t&&++b===n&&(f=c),L===r&&++O===o&&(_=c),(H=C.nextSibling)!==null)break;C=L,L=C.parentNode}C=H}return f===-1||_===-1?null:{start:f,end:_}}function LT(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;if(!!r.getSelection){var o=r.getSelection(),c=e.textContent.length,f=Math.min(t.start,c),_=t.end===void 0?f:Math.min(t.end,c);if(!o.extend&&f>_){var b=_;_=f,f=b}var O=Ry(e,f),C=Ry(e,_);if(O&&C){if(o.rangeCount===1&&o.anchorNode===O.node&&o.anchorOffset===O.offset&&o.focusNode===C.node&&o.focusOffset===C.offset)return;var L=n.createRange();L.setStart(O.node,O.offset),o.removeAllRanges(),f>_?(o.addRange(L),o.extend(C.node,C.offset)):(L.setEnd(C.node,C.offset),o.addRange(L))}}}function Oy(e){return e&&e.nodeType===Cn}function Dy(e,t){return!e||!t?!1:e===t?!0:Oy(e)?!1:Oy(t)?Dy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1}function jT(e){return e&&e.ownerDocument&&Dy(e.ownerDocument.documentElement,e)}function zT(e){try{return typeof e.contentWindow.location.href=="string"}catch{return!1}}function My(){for(var e=window,t=dt();t instanceof e.HTMLIFrameElement;){if(zT(t))e=t.contentWindow;else return t;t=dt(e.document)}return t}function Hp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function XT(){var e=My();return{focusedElem:e,selectionRange:Hp(e)?$T(e):null}}function BT(e){var t=My(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&jT(n)){r!==null&&Hp(n)&&VT(n,r);for(var o=[],c=n;c=c.parentNode;)c.nodeType===yr&&o.push({element:c,left:c.scrollLeft,top:c.scrollTop});typeof n.focus=="function"&&n.focus();for(var f=0;f<o.length;f++){var _=o[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}}function $T(e){var t;return"selectionStart"in e?t={start:e.selectionStart,end:e.selectionEnd}:t=UT(e),t||{start:0,end:0}}function VT(e,t){var n=t.start,r=t.end;r===void 0&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):LT(e,t)}var WT=mn&&"documentMode"in document&&document.documentMode<=11;function QT(){fr("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}var Qs=null,Lp=null,ll=null,jp=!1;function YT(e){if("selectionStart"in e&&Hp(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,n=t.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function GT(e){return e.window===e?e.document:e.nodeType===Vn?e:e.ownerDocument}function Ay(e,t,n){var r=GT(n);if(!(jp||Qs==null||Qs!==dt(r))){var o=YT(Qs);if(!ll||!ul(ll,o)){ll=o;var c=Xc(Lp,"onSelect");if(c.length>0){var f=new Pp("onSelect","select",null,t,n);e.push({event:f,listeners:c}),f.target=Qs}}}}function qT(e,t,n,r,o,c,f){var _=n?Js(n):window;switch(t){case"focusin":(_y(_)||_.contentEditable==="true")&&(Qs=_,Lp=n,ll=null);break;case"focusout":Qs=null,Lp=null,ll=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,Ay(e,r,o);break;case"selectionchange":if(WT)break;case"keydown":case"keyup":Ay(e,r,o)}}function Lc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ys={animationend:Lc("Animation","AnimationEnd"),animationiteration:Lc("Animation","AnimationIteration"),animationstart:Lc("Animation","AnimationStart"),transitionend:Lc("Transition","TransitionEnd")},zp={},xy={};mn&&(xy=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function jc(e){if(zp[e])return zp[e];if(!Ys[e])return e;var t=Ys[e];for(var n in t)if(t.hasOwnProperty(n)&&n in xy)return zp[e]=t[n];return e}var Cy=jc("animationend"),Py=jc("animationiteration"),Fy=jc("animationstart"),Ny=jc("transitionend"),ky=new Map,Iy=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function ro(e,t){ky.set(e,t),fr(t,[e])}function KT(){for(var e=0;e<Iy.length;e++){var t=Iy[e],n=t.toLowerCase(),r=t[0].toUpperCase()+t.slice(1);ro(n,"on"+r)}ro(Cy,"onAnimationEnd"),ro(Py,"onAnimationIteration"),ro(Fy,"onAnimationStart"),ro("dblclick","onDoubleClick"),ro("focusin","onFocus"),ro("focusout","onBlur"),ro(Ny,"onTransitionEnd")}function JT(e,t,n,r,o,c,f){var _=ky.get(t);if(_!==void 0){var b=Pp,O=t;switch(t){case"keypress":if(kc(r)===0)return;case"keydown":case"keyup":b=Zw;break;case"focusin":O="focus",b=kp;break;case"focusout":O="blur",b=kp;break;case"beforeblur":case"afterblur":b=kp;break;case"click":if(r.button===2)return;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=nT;break;case Cy:case Py:case Fy:b=Xw;break;case Ny:b=aT;break;case"scroll":b=Iw;break;case"wheel":b=oT;break;case"copy":case"cut":case"paste":b=$w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=cy;break}var C=(c&ei)!==0;{var L=!C&&t==="scroll",H=nS(n,_,r.type,C,L);if(H.length>0){var Q=new b(_,O,null,r,o);e.push({event:Q,listeners:H})}}}}KT(),FT(),ET(),QT(),lT();function ZT(e,t,n,r,o,c,f){JT(e,t,n,r,o,c);var _=(c&xs)===0;_&&(NT(e,t,n,r,o),PT(e,t,n,r,o),qT(e,t,n,r,o),yT(e,t,n,r,o))}var cl=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],Xp=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(cl));function Uy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N(r,t,void 0,e),e.currentTarget=null}function eS(e,t,n){var r;if(n)for(var o=t.length-1;o>=0;o--){var c=t[o],f=c.instance,_=c.currentTarget,b=c.listener;if(f!==r&&e.isPropagationStopped())return;Uy(e,b,_),r=f}else for(var O=0;O<t.length;O++){var C=t[O],L=C.instance,H=C.currentTarget,Q=C.listener;if(L!==r&&e.isPropagationStopped())return;Uy(e,Q,H),r=L}}function Hy(e,t){for(var n=(t&ei)!==0,r=0;r<e.length;r++){var o=e[r],c=o.event,f=o.listeners;eS(c,f,n)}z()}function tS(e,t,n,r,o){var c=Gi(n),f=[];ZT(f,e,r,n,c,t),Hy(f,t)}function an(e,t){Xp.has(e)||h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=!1,r=xR(t),o=iS(e,n);r.has(o)||(Ly(t,e,Xo,n),r.add(o))}function Bp(e,t,n){Xp.has(e)&&!t&&h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var r=0;t&&(r|=ei),Ly(n,e,r,t)}var zc="_reactListening"+Math.random().toString(36).slice(2);function dl(e){if(!e[zc]){e[zc]=!0,Fr.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||Bp(n,!1,e),Bp(n,!0,e))});var t=e.nodeType===Vn?e:e.ownerDocument;t!==null&&(t[zc]||(t[zc]=!0,Bp("selectionchange",!1,t)))}}function Ly(e,t,n,r,o){var c=Ow(e,t,n),f=void 0;$o&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(f=!0),e=e,r?f!==void 0?Pw(e,t,c,f):Cw(e,t,c):f!==void 0?Fw(e,t,c,f):xw(e,t,c)}function jy(e,t){return e===t||e.nodeType===un&&e.parentNode===t}function $p(e,t,n,r,o){var c=r;if((t&zo)===0&&(t&Xo)===0){var f=o;if(r!==null){var _=r;e:for(;;){if(_===null)return;var b=_.tag;if(b===G||b===se){var O=_.stateNode.containerInfo;if(jy(O,f))break;if(b===se)for(var C=_.return;C!==null;){var L=C.tag;if(L===G||L===se){var H=C.stateNode.containerInfo;if(jy(H,f))return}C=C.return}for(;O!==null;){var Q=as(O);if(Q===null)return;var q=Q.tag;if(q===ee||q===oe){_=c=Q;continue e}O=O.parentNode}}_=_.return}}}bc(function(){return tS(e,t,n,c)})}function fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nS(e,t,n,r,o,c){for(var f=t!==null?t+"Capture":null,_=r?f:t,b=[],O=e,C=null;O!==null;){var L=O,H=L.stateNode,Q=L.tag;if(Q===ee&&H!==null&&(C=H,_!==null)){var q=Na(O,_);q!=null&&b.push(fl(O,q,C))}if(o)break;O=O.return}return b}function Xc(e,t){for(var n=t+"Capture",r=[],o=e;o!==null;){var c=o,f=c.stateNode,_=c.tag;if(_===ee&&f!==null){var b=f,O=Na(o,n);O!=null&&r.unshift(fl(o,O,b));var C=Na(o,t);C!=null&&r.push(fl(o,C,b))}o=o.return}return r}function Gs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==ee);return e||null}function rS(e,t){for(var n=e,r=t,o=0,c=n;c;c=Gs(c))o++;for(var f=0,_=r;_;_=Gs(_))f++;for(;o-f>0;)n=Gs(n),o--;for(;f-o>0;)r=Gs(r),f--;for(var b=o;b--;){if(n===r||r!==null&&n===r.alternate)return n;n=Gs(n),r=Gs(r)}return null}function zy(e,t,n,r,o){for(var c=t._reactName,f=[],_=n;_!==null&&_!==r;){var b=_,O=b.alternate,C=b.stateNode,L=b.tag;if(O!==null&&O===r)break;if(L===ee&&C!==null){var H=C;if(o){var Q=Na(_,c);Q!=null&&f.unshift(fl(_,Q,H))}else if(!o){var q=Na(_,c);q!=null&&f.push(fl(_,q,H))}}_=_.return}f.length!==0&&e.push({event:t,listeners:f})}function aS(e,t,n,r,o){var c=r&&o?rS(r,o):null;r!==null&&zy(e,t,r,c,!1),o!==null&&n!==null&&zy(e,n,o,c,!0)}function iS(e,t){return e+"__"+(t?"capture":"bubble")}var zr=!1,pl="dangerouslySetInnerHTML",Bc="suppressContentEditableWarning",ao="suppressHydrationWarning",Xy="autoFocus",ns="children",rs="style",$c="__html",Vp,Vc,ml,By,Wc,$y,Vy;Vp={dialog:!0,webview:!0},Vc=function(e,t){jf(e,t),zf(e,t),Vf(e,t,{registrationNameDependencies:On,possibleRegistrationNames:dr})},$y=mn&&!document.documentMode,ml=function(e,t,n){if(!zr){var r=Qc(n),o=Qc(t);o!==r&&(zr=!0,h("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},By=function(e){if(!zr){zr=!0;var t=[];e.forEach(function(n){t.push(n)}),h("Extra attributes from the server: %s",t)}},Wc=function(e,t){t===!1?h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):h("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},Vy=function(e,t){var n=e.namespaceURI===Ca?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};var oS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Qc(e){Zt(e);var t=typeof e=="string"?e:""+e;return t.replace(oS,`
`).replace(sS,"")}function Yc(e,t,n,r){var o=Qc(t),c=Qc(e);if(c!==o&&(r&&(zr||(zr=!0,h('Text content did not match. Server: "%s" Client: "%s"',c,o))),n&&at))throw new Error("Text content does not match server-rendered HTML.")}function Wy(e){return e.nodeType===Vn?e:e.ownerDocument}function uS(){}function Gc(e){e.onclick=uS}function lS(e,t,n,r,o){for(var c in r)if(!!r.hasOwnProperty(c)){var f=r[c];if(c===rs)f&&Object.freeze(f),mc(t,f);else if(c===pl){var _=f?f[$c]:void 0;_!=null&&uc(t,_)}else if(c===ns)if(typeof f=="string"){var b=e!=="textarea"||f!=="";b&&Io(t,f)}else typeof f=="number"&&Io(t,""+f);else c===Bc||c===ao||c===Xy||(On.hasOwnProperty(c)?f!=null&&(typeof f!="function"&&Wc(c,f),c==="onScroll"&&an("scroll",t)):f!=null&&hr(t,c,f,o))}}function cS(e,t,n,r){for(var o=0;o<t.length;o+=2){var c=t[o],f=t[o+1];c===rs?mc(e,f):c===pl?uc(e,f):c===ns?Io(e,f):hr(e,c,f,r)}}function dS(e,t,n,r){var o,c=Wy(n),f,_=r;if(_===Ca&&(_=Ti(e)),_===Ca){if(o=Ri(e,t),!o&&e!==e.toLowerCase()&&h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),e==="script"){var b=c.createElement("div");b.innerHTML="<script><\/script>";var O=b.firstChild;f=b.removeChild(O)}else if(typeof t.is=="string")f=c.createElement(e,{is:t.is});else if(f=c.createElement(e),e==="select"){var C=f;t.multiple?C.multiple=!0:t.size&&(C.size=t.size)}}else f=c.createElementNS(_,e);return _===Ca&&!o&&Object.prototype.toString.call(f)==="[object HTMLUnknownElement]"&&!Dn.call(Vp,e)&&(Vp[e]=!0,h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),f}function fS(e,t){return Wy(t).createTextNode(e)}function pS(e,t,n,r){var o=Ri(t,n);Vc(t,n);var c;switch(t){case"dialog":an("cancel",e),an("close",e),c=n;break;case"iframe":case"object":case"embed":an("load",e),c=n;break;case"video":case"audio":for(var f=0;f<cl.length;f++)an(cl[f],e);c=n;break;case"source":an("error",e),c=n;break;case"img":case"image":case"link":an("error",e),an("load",e),c=n;break;case"details":an("toggle",e),c=n;break;case"input":I(e,n),c=w(e,n),an("invalid",e);break;case"option":Mt(e,n),c=n;break;case"select":wi(e,n),c=No(e,n),an("invalid",e);break;case"textarea":oc(e,n),c=Au(e,n),an("invalid",e);break;default:c=n}switch(ku(t,c),lS(t,e,r,c,o),t){case"input":Zr(e),me(e,n,!1);break;case"textarea":Zr(e),xu(e);break;case"option":It(e,n);break;case"select":Mu(e,n);break;default:typeof c.onClick=="function"&&Gc(e);break}}function mS(e,t,n,r,o){Vc(t,r);var c=null,f,_;switch(t){case"input":f=w(e,n),_=w(e,r),c=[];break;case"select":f=No(e,n),_=No(e,r),c=[];break;case"textarea":f=Au(e,n),_=Au(e,r),c=[];break;default:f=n,_=r,typeof f.onClick!="function"&&typeof _.onClick=="function"&&Gc(e);break}ku(t,_);var b,O,C=null;for(b in f)if(!(_.hasOwnProperty(b)||!f.hasOwnProperty(b)||f[b]==null))if(b===rs){var L=f[b];for(O in L)L.hasOwnProperty(O)&&(C||(C={}),C[O]="")}else b===pl||b===ns||b===Bc||b===ao||b===Xy||(On.hasOwnProperty(b)?c||(c=[]):(c=c||[]).push(b,null));for(b in _){var H=_[b],Q=f!=null?f[b]:void 0;if(!(!_.hasOwnProperty(b)||H===Q||H==null&&Q==null))if(b===rs)if(H&&Object.freeze(H),Q){for(O in Q)Q.hasOwnProperty(O)&&(!H||!H.hasOwnProperty(O))&&(C||(C={}),C[O]="");for(O in H)H.hasOwnProperty(O)&&Q[O]!==H[O]&&(C||(C={}),C[O]=H[O])}else C||(c||(c=[]),c.push(b,C)),C=H;else if(b===pl){var q=H?H[$c]:void 0,ae=Q?Q[$c]:void 0;q!=null&&ae!==q&&(c=c||[]).push(b,q)}else b===ns?(typeof H=="string"||typeof H=="number")&&(c=c||[]).push(b,""+H):b===Bc||b===ao||(On.hasOwnProperty(b)?(H!=null&&(typeof H!="function"&&Wc(b,H),b==="onScroll"&&an("scroll",e)),!c&&Q!==H&&(c=[])):(c=c||[]).push(b,H))}return C&&(Ff(C,_[rs]),(c=c||[]).push(rs,C)),c}function hS(e,t,n,r,o){n==="input"&&o.type==="radio"&&o.name!=null&&W(e,o);var c=Ri(n,r),f=Ri(n,o);switch(cS(e,t,c,f),n){case"input":J(e,o);break;case"textarea":sc(e,o);break;case"select":yf(e,o);break}}function vS(e){{var t=e.toLowerCase();return As.hasOwnProperty(t)&&As[t]||null}}function yS(e,t,n,r,o,c,f){var _,b;switch(_=Ri(t,n),Vc(t,n),t){case"dialog":an("cancel",e),an("close",e);break;case"iframe":case"object":case"embed":an("load",e);break;case"video":case"audio":for(var O=0;O<cl.length;O++)an(cl[O],e);break;case"source":an("error",e);break;case"img":case"image":case"link":an("error",e),an("load",e);break;case"details":an("toggle",e);break;case"input":I(e,n),an("invalid",e);break;case"option":Mt(e,n);break;case"select":wi(e,n),an("invalid",e);break;case"textarea":oc(e,n),an("invalid",e);break}ku(t,n);{b=new Set;for(var C=e.attributes,L=0;L<C.length;L++){var H=C[L].name.toLowerCase();switch(H){case"value":break;case"checked":break;case"selected":break;default:b.add(C[L].name)}}}var Q=null;for(var q in n)if(!!n.hasOwnProperty(q)){var ae=n[q];if(q===ns)typeof ae=="string"?e.textContent!==ae&&(n[ao]!==!0&&Yc(e.textContent,ae,c,f),Q=[ns,ae]):typeof ae=="number"&&e.textContent!==""+ae&&(n[ao]!==!0&&Yc(e.textContent,ae,c,f),Q=[ns,""+ae]);else if(On.hasOwnProperty(q))ae!=null&&(typeof ae!="function"&&Wc(q,ae),q==="onScroll"&&an("scroll",e));else if(f&&!0&&typeof _=="boolean"){var Ae=void 0,Ke=_&&pn?null:he(q);if(n[ao]!==!0){if(!(q===Bc||q===ao||q==="value"||q==="checked"||q==="selected")){if(q===pl){var He=e.innerHTML,Ot=ae?ae[$c]:void 0;if(Ot!=null){var Dt=Vy(e,Ot);Dt!==He&&ml(q,He,Dt)}}else if(q===rs){if(b.delete(q),$y){var B=Cf(ae);Ae=e.getAttribute("style"),B!==Ae&&ml(q,Ae,B)}}else if(_&&!pn)b.delete(q.toLowerCase()),Ae=Gr(e,q,ae),ae!==Ae&&ml(q,Ae,ae);else if(!on(q,Ke,_)&&!Lt(q,ae,Ke,_)){var Z=!1;if(Ke!==null)b.delete(Ke.attributeName),Ae=kr(e,q,ae,Ke);else{var X=r;if(X===Ca&&(X=Ti(t)),X===Ca)b.delete(q.toLowerCase());else{var fe=vS(q);fe!==null&&fe!==q&&(Z=!0,b.delete(fe)),b.delete(q)}Ae=Gr(e,q,ae)}var Ee=pn;!Ee&&ae!==Ae&&!Z&&ml(q,Ae,ae)}}}}}switch(f&&b.size>0&&n[ao]!==!0&&By(b),t){case"input":Zr(e),me(e,n,!0);break;case"textarea":Zr(e),xu(e);break;case"select":case"option":break;default:typeof n.onClick=="function"&&Gc(e);break}return Q}function gS(e,t,n){var r=e.nodeValue!==t;return r}function Wp(e,t){{if(zr)return;zr=!0,h("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function Qp(e,t){{if(zr)return;zr=!0,h('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase())}}function Yp(e,t,n){{if(zr)return;zr=!0,h("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase())}}function Gp(e,t){{if(t===""||zr)return;zr=!0,h('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())}}function _S(e,t,n){switch(t){case"input":Ye(e,n);return;case"textarea":_f(e,n);return;case"select":gf(e,n);return}}var hl=function(){},vl=function(){};{var ES=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],Qy=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],bS=Qy.concat(["button"]),wS=["dd","dt","li","option","optgroup","p","rp","rt"],Yy={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};vl=function(e,t){var n=ct({},e||Yy),r={tag:t};return Qy.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),bS.indexOf(t)!==-1&&(n.pTagInButtonScope=null),ES.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t==="form"&&(n.formTag=r),t==="a"&&(n.aTagInScope=r),t==="button"&&(n.buttonTagInScope=r),t==="nobr"&&(n.nobrTagInScope=r),t==="p"&&(n.pTagInButtonScope=r),t==="li"&&(n.listItemTagAutoclosing=r),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=r),n};var TS=function(e,t){switch(t){case"select":return e==="option"||e==="optgroup"||e==="#text";case"optgroup":return e==="option"||e==="#text";case"option":return e==="#text";case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return wS.indexOf(t)===-1;case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null}return!0},SS=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},Gy={};hl=function(e,t,n){n=n||Yy;var r=n.current,o=r&&r.tag;t!=null&&(e!=null&&h("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var c=TS(e,o)?null:r,f=c?null:SS(e,n),_=c||f;if(!!_){var b=_.tag,O=!!c+"|"+e+"|"+b;if(!Gy[O]){Gy[O]=!0;var C=e,L="";if(e==="#text"?/\S/.test(t)?C="Text nodes":(C="Whitespace text nodes",L=" Make sure you don't have any extra whitespace between tags on each line of your source code."):C="<"+e+">",c){var H="";b==="table"&&e==="tr"&&(H+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",C,b,L,H)}else h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",C,b)}}}}var qc="suppressHydrationWarning",Kc="$",Jc="/$",yl="$?",gl="$!",RS="style",qp=null,Kp=null;function OS(e){var t,n,r=e.nodeType;switch(r){case Vn:case Os:{t=r===Vn?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:Pu(null,"");break}default:{var c=r===un?e.parentNode:e,f=c.namespaceURI||null;t=c.tagName,n=Pu(f,t);break}}{var _=t.toLowerCase(),b=vl(null,_);return{namespace:n,ancestorInfo:b}}}function DS(e,t,n){{var r=e,o=Pu(r.namespace,t),c=vl(r.ancestorInfo,t);return{namespace:o,ancestorInfo:c}}}function v0(e){return e}function MS(e){qp=Rw(),Kp=XT();var t=null;return ry(!1),t}function AS(e){BT(Kp),ry(qp),qp=null,Kp=null}function xS(e,t,n,r,o){var c;{var f=r;if(hl(e,null,f.ancestorInfo),typeof t.children=="string"||typeof t.children=="number"){var _=""+t.children,b=vl(f.ancestorInfo,e);hl(null,_,b)}c=f.namespace}var O=dS(e,t,n,c);return bl(o,O),im(O,t),O}function CS(e,t){e.appendChild(t)}function PS(e,t,n,r,o){switch(pS(e,t,n,r),t){case"button":case"input":case"select":case"textarea":return!!n.autoFocus;case"img":return!0;default:return!1}}function FS(e,t,n,r,o,c){{var f=c;if(typeof r.children!=typeof n.children&&(typeof r.children=="string"||typeof r.children=="number")){var _=""+r.children,b=vl(f.ancestorInfo,t);hl(null,_,b)}}return mS(e,t,n,r)}function Jp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function NS(e,t,n,r){{var o=n;hl(null,e,o.ancestorInfo)}var c=fS(e,t);return bl(r,c),c}function kS(){var e=window.event;return e===void 0?Ai:ay(e.type)}var Zp=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,em=-1,qy=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof qy!="undefined"?function(e){return qy.resolve(null).then(e).catch(HS)}:Zp;function HS(e){setTimeout(function(){throw e})}function LS(e,t,n,r){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();return;case"img":{n.src&&(e.src=n.src);return}}}function jS(e,t,n,r,o,c){hS(e,t,n,r,o),im(e,o)}function Ky(e){Io(e,"")}function zS(e,t,n){e.nodeValue=n}function XS(e,t){e.appendChild(t)}function BS(e,t){var n;e.nodeType===un?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t));var r=e._reactRootContainer;r==null&&n.onclick===null&&Gc(n)}function $S(e,t,n){e.insertBefore(t,n)}function VS(e,t,n){e.nodeType===un?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}function WS(e,t){e.removeChild(t)}function QS(e,t){e.nodeType===un?e.parentNode.removeChild(t):e.removeChild(t)}function tm(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===un){var c=o.data;if(c===Jc)if(r===0){e.removeChild(o),el(t);return}else r--;else(c===Kc||c===yl||c===gl)&&r++}n=o}while(n);el(t)}function YS(e,t){e.nodeType===un?tm(e.parentNode,t):e.nodeType===yr&&tm(e,t),el(e)}function GS(e){e=e;var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}function qS(e){e.nodeValue=""}function KS(e,t){e=e;var n=t[RS],r=n!=null&&n.hasOwnProperty("display")?n.display:null;e.style.display=Lo("display",r)}function JS(e,t){e.nodeValue=t}function ZS(e){if(e.nodeType===yr)e.textContent="";else if(e.nodeType===Vn){var t=e.body;t!=null&&(t.textContent="")}}function eR(e,t,n){return e.nodeType!==yr||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function tR(e,t){return t===""||e.nodeType!==Cn?null:e}function nR(e){return e.nodeType!==un?null:e}function Jy(e){return e.data===yl}function nm(e){return e.data===gl}function rR(e,t){e._reactRetry=t}function Zc(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===yr||t===Cn)break;if(t===un){var n=e.data;if(n===Kc||n===gl||n===yl)break;if(n===Jc)return null}}return e}function _l(e){return Zc(e.nextSibling)}function aR(e){return Zc(e.firstChild)}function iR(e){return Zc(e.firstChild)}function oR(e){return Zc(e.nextSibling)}function sR(e,t,n,r,o,c,f){bl(c,e),im(e,n);var _;{var b=o;_=b.namespace}var O=(c.mode&vt)!==qe;return yS(e,t,n,_,r,O,f)}function uR(e,t,n,r){return bl(n,e),n.mode&vt,gS(e,t)}function lR(e,t){bl(t,e)}function cR(e){for(var t=e.nextSibling,n=0;t;){if(t.nodeType===un){var r=t.data;if(r===Jc){if(n===0)return _l(t);n--}else(r===Kc||r===gl||r===yl)&&n++}t=t.nextSibling}return null}function Zy(e){for(var t=e.previousSibling,n=0;t;){if(t.nodeType===un){var r=t.data;if(r===Kc||r===gl||r===yl){if(n===0)return t;n--}else r===Jc&&n++}t=t.previousSibling}return null}function dR(e){el(e)}function fR(e){el(e)}function pR(e){return e!=="head"&&e!=="body"}function mR(e,t,n,r){var o=!0;Yc(t.nodeValue,n,r,o)}function hR(e,t,n,r,o,c){if(t[qc]!==!0){var f=!0;Yc(r.nodeValue,o,c,f)}}function vR(e,t){t.nodeType===yr?Wp(e,t):t.nodeType===un||Qp(e,t)}function yR(e,t){{var n=e.parentNode;n!==null&&(t.nodeType===yr?Wp(n,t):t.nodeType===un||Qp(n,t))}}function gR(e,t,n,r,o){(o||t[qc]!==!0)&&(r.nodeType===yr?Wp(n,r):r.nodeType===un||Qp(n,r))}function _R(e,t,n){Yp(e,t)}function ER(e,t){Gp(e,t)}function bR(e,t,n){{var r=e.parentNode;r!==null&&Yp(r,t)}}function wR(e,t){{var n=e.parentNode;n!==null&&Gp(n,t)}}function TR(e,t,n,r,o,c){(c||t[qc]!==!0)&&Yp(n,r)}function SR(e,t,n,r,o){(o||t[qc]!==!0)&&Gp(n,r)}function RR(e){h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function OR(e){dl(e)}var qs=Math.random().toString(36).slice(2),Ks="__reactFiber$"+qs,rm="__reactProps$"+qs,El="__reactContainer$"+qs,am="__reactEvents$"+qs,DR="__reactListeners$"+qs,MR="__reactHandles$"+qs;function AR(e){delete e[Ks],delete e[rm],delete e[am],delete e[DR],delete e[MR]}function bl(e,t){t[Ks]=e}function ed(e,t){t[El]=e}function eg(e){e[El]=null}function wl(e){return!!e[El]}function as(e){var t=e[Ks];if(t)return t;for(var n=e.parentNode;n;){if(t=n[El]||n[Ks],t){var r=t.alternate;if(t.child!==null||r!==null&&r.child!==null)for(var o=Zy(e);o!==null;){var c=o[Ks];if(c)return c;o=Zy(o)}return t}e=n,n=e.parentNode}return null}function io(e){var t=e[Ks]||e[El];return t&&(t.tag===ee||t.tag===oe||t.tag===$e||t.tag===G)?t:null}function Js(e){if(e.tag===ee||e.tag===oe)return e.stateNode;throw new Error("getNodeFromInstance: Invalid argument.")}function td(e){return e[rm]||null}function im(e,t){e[rm]=t}function xR(e){var t=e[am];return t===void 0&&(t=e[am]=new Set),t}var tg={},ng=s.ReactDebugCurrentFrame;function nd(e){if(e){var t=e._owner,n=Ir(e.type,e._source,t?t.type:null);ng.setExtraStackFrame(n)}else ng.setExtraStackFrame(null)}function Ha(e,t,n,r,o){{var c=Function.call.bind(Dn);for(var f in e)if(c(e,f)){var _=void 0;try{if(typeof e[f]!="function"){var b=Error((r||"React class")+": "+n+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}_=e[f](t,f,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){_=O}_&&!(_ instanceof Error)&&(nd(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,f,typeof _),nd(null)),_ instanceof Error&&!(_.message in tg)&&(tg[_.message]=!0,nd(o),h("Failed %s type: %s",n,_.message),nd(null))}}}var om=[],rd;rd=[];var xi=-1;function oo(e){return{current:e}}function br(e,t){if(xi<0){h("Unexpected pop.");return}t!==rd[xi]&&h("Unexpected Fiber popped."),e.current=om[xi],om[xi]=null,rd[xi]=null,xi--}function wr(e,t,n){xi++,om[xi]=e.current,rd[xi]=n,e.current=t}var sm;sm={};var la={};Object.freeze(la);var Ci=oo(la),oi=oo(!1),um=la;function Zs(e,t,n){return n&&si(t)?um:Ci.current}function rg(e,t,n){{var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}}function eu(e,t){{var n=e.type,r=n.contextTypes;if(!r)return la;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var c={};for(var f in r)c[f]=t[f];{var _=rt(e)||"Unknown";Ha(r,c,"context",_)}return o&&rg(e,t,c),c}}function ad(){return oi.current}function si(e){{var t=e.childContextTypes;return t!=null}}function id(e){br(oi,e),br(Ci,e)}function lm(e){br(oi,e),br(Ci,e)}function ag(e,t,n){{if(Ci.current!==la)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");wr(Ci,t,e),wr(oi,n,e)}}function ig(e,t,n){{var r=e.stateNode,o=t.childContextTypes;if(typeof r.getChildContext!="function"){{var c=rt(e)||"Unknown";sm[c]||(sm[c]=!0,h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",c,c))}return n}var f=r.getChildContext();for(var _ in f)if(!(_ in o))throw new Error((rt(e)||"Unknown")+'.getChildContext(): key "'+_+'" is not defined in childContextTypes.');{var b=rt(e)||"Unknown";Ha(o,f,"child context",b)}return ct({},n,f)}}function od(e){{var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||la;return um=Ci.current,wr(Ci,n,e),wr(oi,oi.current,e),!0}}function og(e,t,n){{var r=e.stateNode;if(!r)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){var o=ig(e,t,um);r.__reactInternalMemoizedMergedChildContext=o,br(oi,e),br(Ci,e),wr(Ci,o,e),wr(oi,n,e)}else br(oi,e),wr(oi,n,e)}}function CR(e){{if(!mb(e)||e.tag!==j)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case G:return t.stateNode.context;case j:{var n=t.type;if(si(n))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var so=0,sd=1,Pi=null,cm=!1,dm=!1;function sg(e){Pi===null?Pi=[e]:Pi.push(e)}function PR(e){cm=!0,sg(e)}function ug(){cm&&uo()}function uo(){if(!dm&&Pi!==null){dm=!0;var e=0,t=Ua();try{var n=!0,r=Pi;for(qn(oa);e<r.length;e++){var o=r[e];do o=o(n);while(o!==null)}Pi=null,cm=!1}catch(c){throw Pi!==null&&(Pi=Pi.slice(e+1)),Pv(Tc,uo),c}finally{qn(t),dm=!1}}return null}var FR=s.ReactCurrentBatchConfig,NR=null;function kR(){return FR.transition}var La={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var IR=function(e){for(var t=null,n=e;n!==null;)n.mode&Sn&&(t=n),n=n.return;return t},is=function(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")},Tl=[],Sl=[],Rl=[],Ol=[],Dl=[],Ml=[],os=new Set;La.recordUnsafeLifecycleWarnings=function(e,t){os.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&Tl.push(e),e.mode&Sn&&typeof t.UNSAFE_componentWillMount=="function"&&Sl.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&Rl.push(e),e.mode&Sn&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&Ol.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&Dl.push(e),e.mode&Sn&&typeof t.UNSAFE_componentWillUpdate=="function"&&Ml.push(e))},La.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;Tl.length>0&&(Tl.forEach(function(H){e.add(rt(H)||"Component"),os.add(H.type)}),Tl=[]);var t=new Set;Sl.length>0&&(Sl.forEach(function(H){t.add(rt(H)||"Component"),os.add(H.type)}),Sl=[]);var n=new Set;Rl.length>0&&(Rl.forEach(function(H){n.add(rt(H)||"Component"),os.add(H.type)}),Rl=[]);var r=new Set;Ol.length>0&&(Ol.forEach(function(H){r.add(rt(H)||"Component"),os.add(H.type)}),Ol=[]);var o=new Set;Dl.length>0&&(Dl.forEach(function(H){o.add(rt(H)||"Component"),os.add(H.type)}),Dl=[]);var c=new Set;if(Ml.length>0&&(Ml.forEach(function(H){c.add(rt(H)||"Component"),os.add(H.type)}),Ml=[]),t.size>0){var f=is(t);h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,f)}if(r.size>0){var _=is(r);h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,_)}if(c.size>0){var b=is(c);h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,b)}if(e.size>0){var O=is(e);R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,O)}if(n.size>0){var C=is(n);R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,C)}if(o.size>0){var L=is(o);R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,L)}};var ud=new Map,lg=new Set;La.recordLegacyContextWarning=function(e,t){var n=IR(e);if(n===null){h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!lg.has(e.type)){var r=ud.get(n);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(r===void 0&&(r=[],ud.set(n,r)),r.push(e))}},La.flushLegacyContextWarning=function(){ud.forEach(function(e,t){if(e.length!==0){var n=e[0],r=new Set;e.forEach(function(c){r.add(rt(c)||"Component"),lg.add(c.type)});var o=is(r);try{nn(n),h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,o)}finally{Tn()}}})},La.discardPendingWarnings=function(){Tl=[],Sl=[],Rl=[],Ol=[],Dl=[],Ml=[],ud=new Map}}function ja(e,t){if(e&&e.defaultProps){var n=ct({},t),r=e.defaultProps;for(var o in r)n[o]===void 0&&(n[o]=r[o]);return n}return t}var fm=oo(null),pm;pm={};var ld=null,tu=null,mm=null,cd=!1;function dd(){ld=null,tu=null,mm=null,cd=!1}function cg(){cd=!0}function dg(){cd=!1}function fg(e,t,n){wr(fm,t._currentValue,e),t._currentValue=n,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==pm&&h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=pm}function hm(e,t){var n=fm.current;br(fm,t),e._currentValue=n}function vm(e,t,n){for(var r=e;r!==null;){var o=r.alternate;if(Bs(r.childLanes,t)?o!==null&&!Bs(o.childLanes,t)&&(o.childLanes=lt(o.childLanes,t)):(r.childLanes=lt(r.childLanes,t),o!==null&&(o.childLanes=lt(o.childLanes,t))),r===n)break;r=r.return}r!==n&&h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function UR(e,t,n){HR(e,t,n)}function HR(e,t,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=void 0,c=r.dependencies;if(c!==null){o=r.child;for(var f=c.firstContext;f!==null;){if(f.context===t){if(r.tag===j){var _=Qu(n),b=Fi(tn,_);b.tag=fd;var O=r.updateQueue;if(O!==null){var C=O.shared,L=C.pending;L===null?b.next=b:(b.next=L.next,L.next=b),C.pending=b}}r.lanes=lt(r.lanes,n);var H=r.alternate;H!==null&&(H.lanes=lt(H.lanes,n)),vm(r.return,n,e),c.lanes=lt(c.lanes,n);break}f=f.next}}else if(r.tag===Be)o=r.type===e.type?null:r.child;else if(r.tag===F){var Q=r.return;if(Q===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");Q.lanes=lt(Q.lanes,n);var q=Q.alternate;q!==null&&(q.lanes=lt(q.lanes,n)),vm(Q,n,e),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}var ae=o.sibling;if(ae!==null){ae.return=o.return,o=ae;break}o=o.return}r=o}}function nu(e,t){ld=e,tu=null,mm=null;var n=e.dependencies;if(n!==null){var r=n.firstContext;r!==null&&(ia(n.lanes,t)&&$l(),n.firstContext=null)}}function Rn(e){cd&&h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(mm!==e){var n={context:e,memoizedValue:t,next:null};if(tu===null){if(ld===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");tu=n,ld.dependencies={lanes:ce,firstContext:n}}else tu=tu.next=n}return t}var lo=null;function pg(e){lo===null?lo=[e]:lo.push(e)}function LR(){return lo!==null}function jR(){if(lo!==null){for(var e=0;e<lo.length;e++){var t=lo[e],n=t.interleaved;if(n!==null){t.interleaved=null;var r=n.next,o=t.pending;if(o!==null){var c=o.next;o.next=r,n.next=c}t.pending=n}}lo=null}}var mg=0,hg=1,fd=2,ym=3,pd=!1,gm,md;gm=!1,md=null;function _m(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:ce},effects:null};e.updateQueue=t}function vg(e,t){var n=t.updateQueue,r=e.updateQueue;if(n===r){var o={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=o}}function Fi(e,t){var n={eventTime:e,lane:t,tag:mg,payload:null,callback:null,next:null};return n}function co(e,t,n){var r=e.updateQueue;if(r!==null){var o=r.shared;if(hE(e)){var c=o.interleaved;c===null?(t.next=t,pg(o)):(t.next=c.next,c.next=t),o.interleaved=t}else{var f=o.pending;f===null?t.next=t:(t.next=f.next,f.next=t),o.pending=t}md===o&&!gm&&(h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),gm=!0)}}function hd(e,t,n){var r=t.updateQueue;if(r!==null){var o=r.shared;if(Xv(n)){var c=o.lanes;c=$v(c,e.pendingLanes);var f=lt(c,n);o.lanes=f,Sp(e,f)}}}function Em(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null){var o=r.updateQueue;if(n===o){var c=null,f=null,_=n.firstBaseUpdate;if(_!==null){var b=_;do{var O={eventTime:b.eventTime,lane:b.lane,tag:b.tag,payload:b.payload,callback:b.callback,next:null};f===null?c=f=O:(f.next=O,f=O),b=b.next}while(b!==null);f===null?c=f=t:(f.next=t,f=t)}else c=f=t;n={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,effects:o.effects},e.updateQueue=n;return}}var C=n.lastBaseUpdate;C===null?n.firstBaseUpdate=t:C.next=t,n.lastBaseUpdate=t}function zR(e,t,n,r,o,c){switch(n.tag){case hg:{var f=n.payload;if(typeof f=="function"){cg();var _=f.call(c,r,o);{if(e.mode&Sn){Yn(!0);try{f.call(c,r,o)}finally{Yn(!1)}}dg()}return _}return f}case ym:e.flags=e.flags&~_r|be;case mg:{var b=n.payload,O;if(typeof b=="function"){cg(),O=b.call(c,r,o);{if(e.mode&Sn){Yn(!0);try{b.call(c,r,o)}finally{Yn(!1)}}dg()}}else O=b;return O==null?r:ct({},r,O)}case fd:return pd=!0,r}return r}function vd(e,t,n,r){var o=e.updateQueue;pd=!1,md=o.shared;var c=o.firstBaseUpdate,f=o.lastBaseUpdate,_=o.shared.pending;if(_!==null){o.shared.pending=null;var b=_,O=b.next;b.next=null,f===null?c=O:f.next=O,f=b;var C=e.alternate;if(C!==null){var L=C.updateQueue,H=L.lastBaseUpdate;H!==f&&(H===null?L.firstBaseUpdate=O:H.next=O,L.lastBaseUpdate=b)}}if(c!==null){var Q=o.baseState,q=ce,ae=null,Ae=null,Ke=null,He=c;do{var Ot=He.lane,Dt=He.eventTime;if(Bs(r,Ot)){if(Ke!==null){var Z={eventTime:Dt,lane:Gn,tag:He.tag,payload:He.payload,callback:He.callback,next:null};Ke=Ke.next=Z}Q=zR(e,o,He,Q,t,n);var X=He.callback;if(X!==null&&He.lane!==Gn){e.flags|=Xe;var fe=o.effects;fe===null?o.effects=[He]:fe.push(He)}}else{var B={eventTime:Dt,lane:Ot,tag:He.tag,payload:He.payload,callback:He.callback,next:null};Ke===null?(Ae=Ke=B,ae=Q):Ke=Ke.next=B,q=lt(q,Ot)}if(He=He.next,He===null){if(_=o.shared.pending,_===null)break;var Ee=_,Me=Ee.next;Ee.next=null,He=Me,o.lastBaseUpdate=Ee,o.shared.pending=null}}while(!0);Ke===null&&(ae=Q),o.baseState=ae,o.firstBaseUpdate=Ae,o.lastBaseUpdate=Ke;var _t=o.shared.interleaved;if(_t!==null){var Ut=_t;do q=lt(q,Ut.lane),Ut=Ut.next;while(Ut!==_t)}else c===null&&(o.shared.lanes=ce);tc(q),e.lanes=q,e.memoizedState=Q}md=null}function XR(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function yg(){pd=!1}function yd(){return pd}function gg(e,t,n){var r=t.effects;if(t.effects=null,r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=c.callback;f!==null&&(c.callback=null,XR(f,n))}}var bm={},_g=new d.Component().refs,wm,Tm,Sm,Rm,Om,Eg,gd,Dm,Mm,Am;{wm=new Set,Tm=new Set,Sm=new Set,Rm=new Set,Dm=new Set,Om=new Set,Mm=new Set,Am=new Set;var bg=new Set;gd=function(e,t){if(!(e===null||typeof e=="function")){var n=t+"_"+e;bg.has(n)||(bg.add(n),h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},Eg=function(e,t){if(t===void 0){var n=St(e)||"Component";Om.has(n)||(Om.add(n),h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},Object.defineProperty(bm,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(bm)}function xm(e,t,n,r){var o=e.memoizedState,c=n(r,o);{if(e.mode&Sn){Yn(!0);try{c=n(r,o)}finally{Yn(!1)}}Eg(t,c)}var f=c==null?o:ct({},o,c);if(e.memoizedState=f,e.lanes===ce){var _=e.updateQueue;_.baseState=f}}var Cm={isMounted:hb,enqueueSetState:function(e,t,n){var r=te(e),o=Pr(),c=Eo(r),f=Fi(o,c);f.payload=t,n!=null&&(gd(n,"setState"),f.callback=n),co(r,f);var _=zn(r,c,o);_!==null&&hd(_,r,c),Zf(r,c)},enqueueReplaceState:function(e,t,n){var r=te(e),o=Pr(),c=Eo(r),f=Fi(o,c);f.tag=hg,f.payload=t,n!=null&&(gd(n,"replaceState"),f.callback=n),co(r,f);var _=zn(r,c,o);_!==null&&hd(_,r,c),Zf(r,c)},enqueueForceUpdate:function(e,t){var n=te(e),r=Pr(),o=Eo(n),c=Fi(r,o);c.tag=fd,t!=null&&(gd(t,"forceUpdate"),c.callback=t),co(n,c);var f=zn(n,o,r);f!==null&&hd(f,n,o),Wb(n,o)}};function wg(e,t,n,r,o,c,f){var _=e.stateNode;if(typeof _.shouldComponentUpdate=="function"){var b=_.shouldComponentUpdate(r,c,f);{if(e.mode&Sn){Yn(!0);try{b=_.shouldComponentUpdate(r,c,f)}finally{Yn(!1)}}b===void 0&&h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",St(t)||"Component")}return b}return t.prototype&&t.prototype.isPureReactComponent?!ul(n,r)||!ul(o,c):!0}function BR(e,t,n){var r=e.stateNode;{var o=St(t)||"Component",c=r.render;c||(t.prototype&&typeof t.prototype.render=="function"?h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),r.getInitialState&&!r.getInitialState.isReactClassApproved&&!r.state&&h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),r.getDefaultProps&&!r.getDefaultProps.isReactClassApproved&&h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),r.propTypes&&h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),r.contextType&&h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),r.contextTypes&&h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!Mm.has(t)&&(Mm.add(t),h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),typeof r.componentShouldUpdate=="function"&&h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&typeof r.shouldComponentUpdate!="undefined"&&h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",St(t)||"A pure component"),typeof r.componentDidUnmount=="function"&&h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),typeof r.componentDidReceiveProps=="function"&&h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),typeof r.componentWillRecieveProps=="function"&&h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),typeof r.UNSAFE_componentWillRecieveProps=="function"&&h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var f=r.props!==n;r.props!==void 0&&f&&h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),r.defaultProps&&h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),typeof r.getSnapshotBeforeUpdate=="function"&&typeof r.componentDidUpdate!="function"&&!Sm.has(t)&&(Sm.add(t),h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",St(t))),typeof r.getDerivedStateFromProps=="function"&&h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof r.getDerivedStateFromError=="function"&&h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof t.getSnapshotBeforeUpdate=="function"&&h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var _=r.state;_&&(typeof _!="object"||Rt(_))&&h("%s.state: must be set to an object or null",o),typeof r.getChildContext=="function"&&typeof t.childContextTypes!="object"&&h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}}function Tg(e,t){t.updater=Cm,e.stateNode=t,de(t,e),t._reactInternalInstance=bm}function Sg(e,t,n){var r=!1,o=la,c=la,f=t.contextType;if("contextType"in t){var _=f===null||f!==void 0&&f.$$typeof===P&&f._context===void 0;if(!_&&!Am.has(t)){Am.add(t);var b="";f===void 0?b=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof f!="object"?b=" However, it is set to a "+typeof f+".":f.$$typeof===st?b=" Did you accidentally pass the Context.Provider instead?":f._context!==void 0?b=" Did you accidentally pass the Context.Consumer instead?":b=" However, it is set to an object with keys {"+Object.keys(f).join(", ")+"}.",h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",St(t)||"Component",b)}}if(typeof f=="object"&&f!==null)c=Rn(f);else{o=Zs(e,t,!0);var O=t.contextTypes;r=O!=null,c=r?eu(e,o):la}var C=new t(n,c);if(e.mode&Sn){Yn(!0);try{C=new t(n,c)}finally{Yn(!1)}}var L=e.memoizedState=C.state!==null&&C.state!==void 0?C.state:null;Tg(e,C);{if(typeof t.getDerivedStateFromProps=="function"&&L===null){var H=St(t)||"Component";Tm.has(H)||(Tm.add(H),h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",H,C.state===null?"null":"undefined",H))}if(typeof t.getDerivedStateFromProps=="function"||typeof C.getSnapshotBeforeUpdate=="function"){var Q=null,q=null,ae=null;if(typeof C.componentWillMount=="function"&&C.componentWillMount.__suppressDeprecationWarning!==!0?Q="componentWillMount":typeof C.UNSAFE_componentWillMount=="function"&&(Q="UNSAFE_componentWillMount"),typeof C.componentWillReceiveProps=="function"&&C.componentWillReceiveProps.__suppressDeprecationWarning!==!0?q="componentWillReceiveProps":typeof C.UNSAFE_componentWillReceiveProps=="function"&&(q="UNSAFE_componentWillReceiveProps"),typeof C.componentWillUpdate=="function"&&C.componentWillUpdate.__suppressDeprecationWarning!==!0?ae="componentWillUpdate":typeof C.UNSAFE_componentWillUpdate=="function"&&(ae="UNSAFE_componentWillUpdate"),Q!==null||q!==null||ae!==null){var Ae=St(t)||"Component",Ke=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Rm.has(Ae)||(Rm.add(Ae),h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,Ae,Ke,Q!==null?`
  `+Q:"",q!==null?`
  `+q:"",ae!==null?`
  `+ae:""))}}}return r&&rg(e,o,c),C}function $R(e,t){var n=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&(h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",rt(e)||"Component"),Cm.enqueueReplaceState(t,t.state,null))}function Rg(e,t,n,r){var o=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==o){{var c=rt(e)||"Component";wm.has(c)||(wm.add(c),h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",c))}Cm.enqueueReplaceState(t,t.state,null)}}function Pm(e,t,n,r){BR(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=_g,_m(e);var c=t.contextType;if(typeof c=="object"&&c!==null)o.context=Rn(c);else{var f=Zs(e,t,!0);o.context=eu(e,f)}{if(o.state===n){var _=St(t)||"Component";Dm.has(_)||(Dm.add(_),h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",_))}e.mode&Sn&&La.recordLegacyContextWarning(e,o),La.recordUnsafeLifecycleWarnings(e,o)}o.state=e.memoizedState;var b=t.getDerivedStateFromProps;if(typeof b=="function"&&(xm(e,t,b,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof o.getSnapshotBeforeUpdate!="function"&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&($R(e,o),vd(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"){var O=Y;O|=ra,(e.mode&ai)!==qe&&(O|=Wn),e.flags|=O}}function VR(e,t,n,r){var o=e.stateNode,c=e.memoizedProps;o.props=c;var f=o.context,_=t.contextType,b=la;if(typeof _=="object"&&_!==null)b=Rn(_);else{var O=Zs(e,t,!0);b=eu(e,O)}var C=t.getDerivedStateFromProps,L=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function";!L&&(typeof o.UNSAFE_componentWillReceiveProps=="function"||typeof o.componentWillReceiveProps=="function")&&(c!==n||f!==b)&&Rg(e,o,n,b),yg();var H=e.memoizedState,Q=o.state=H;if(vd(e,n,o,r),Q=e.memoizedState,c===n&&H===Q&&!ad()&&!yd()){if(typeof o.componentDidMount=="function"){var q=Y;q|=ra,(e.mode&ai)!==qe&&(q|=Wn),e.flags|=q}return!1}typeof C=="function"&&(xm(e,t,C,n),Q=e.memoizedState);var ae=yd()||wg(e,t,c,n,H,Q,b);if(ae){if(!L&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"){var Ae=Y;Ae|=ra,(e.mode&ai)!==qe&&(Ae|=Wn),e.flags|=Ae}}else{if(typeof o.componentDidMount=="function"){var Ke=Y;Ke|=ra,(e.mode&ai)!==qe&&(Ke|=Wn),e.flags|=Ke}e.memoizedProps=n,e.memoizedState=Q}return o.props=n,o.state=Q,o.context=b,ae}function WR(e,t,n,r,o){var c=t.stateNode;vg(e,t);var f=t.memoizedProps,_=t.type===t.elementType?f:ja(t.type,f);c.props=_;var b=t.pendingProps,O=c.context,C=n.contextType,L=la;if(typeof C=="object"&&C!==null)L=Rn(C);else{var H=Zs(t,n,!0);L=eu(t,H)}var Q=n.getDerivedStateFromProps,q=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function";!q&&(typeof c.UNSAFE_componentWillReceiveProps=="function"||typeof c.componentWillReceiveProps=="function")&&(f!==b||O!==L)&&Rg(t,c,r,L),yg();var ae=t.memoizedState,Ae=c.state=ae;if(vd(t,r,c,o),Ae=t.memoizedState,f===b&&ae===Ae&&!ad()&&!yd()&&!Kn)return typeof c.componentDidUpdate=="function"&&(f!==e.memoizedProps||ae!==e.memoizedState)&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(f!==e.memoizedProps||ae!==e.memoizedState)&&(t.flags|=yn),!1;typeof Q=="function"&&(xm(t,n,Q,r),Ae=t.memoizedState);var Ke=yd()||wg(t,n,_,r,ae,Ae,L)||Kn;return Ke?(!q&&(typeof c.UNSAFE_componentWillUpdate=="function"||typeof c.componentWillUpdate=="function")&&(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,Ae,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,Ae,L)),typeof c.componentDidUpdate=="function"&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=yn)):(typeof c.componentDidUpdate=="function"&&(f!==e.memoizedProps||ae!==e.memoizedState)&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(f!==e.memoizedProps||ae!==e.memoizedState)&&(t.flags|=yn),t.memoizedProps=r,t.memoizedState=Ae),c.props=r,c.state=Ae,c.context=L,Ke}var ru=[],au=0,_d=null,Ed=0,wa=[],Ta=0,ss=null,Ni=1,ki="";function QR(e){return ls(),(e.flags&Wo)!==ne}function YR(e){return ls(),Ed}function GR(){var e=ki,t=Ni,n=t&~qR(t);return n.toString(32)+e}function us(e,t){ls(),ru[au++]=Ed,ru[au++]=_d,_d=e,Ed=t}function Og(e,t,n){ls(),wa[Ta++]=Ni,wa[Ta++]=ki,wa[Ta++]=ss,ss=e;var r=Ni,o=ki,c=bd(r)-1,f=r&~(1<<c),_=n+1,b=bd(t)+c;if(b>30){var O=c-c%5,C=(1<<O)-1,L=(f&C).toString(32),H=f>>O,Q=c-O,q=bd(t)+Q,ae=_<<Q,Ae=ae|H,Ke=L+o;Ni=1<<q|Ae,ki=Ke}else{var He=_<<c,Ot=He|f,Dt=o;Ni=1<<b|Ot,ki=Dt}}function Fm(e){ls();var t=e.return;if(t!==null){var n=1,r=0;us(e,n),Og(e,n,r)}}function bd(e){return 32-Hv(e)}function qR(e){return 1<<bd(e)-1}function Nm(e){for(;e===_d;)_d=ru[--au],ru[au]=null,Ed=ru[--au],ru[au]=null;for(;e===ss;)ss=wa[--Ta],wa[Ta]=null,ki=wa[--Ta],wa[Ta]=null,Ni=wa[--Ta],wa[Ta]=null}function KR(){return ls(),ss!==null?{id:Ni,overflow:ki}:null}function JR(e,t){ls(),wa[Ta++]=Ni,wa[Ta++]=ki,wa[Ta++]=ss,Ni=t.id,ki=t.overflow,ss=e}function ls(){nr()||h("Expected to be hydrating. This is a bug in React. Please file an issue.")}var tr=null,Sa=null,za=!1,iu=!1,fo=null;function ZR(){za&&h("We should not be hydrating here. This is a bug in React. Please file a bug.")}function Dg(){iu=!0}function eO(e){var t=e.stateNode.containerInfo;return Sa=iR(t),tr=e,za=!0,fo=null,iu=!1,!0}function tO(e,t,n){return Sa=oR(t),tr=e,za=!0,fo=null,iu=!1,n!==null&&JR(e,n),!0}function Mg(e,t){switch(e.tag){case G:{vR(e.stateNode.containerInfo,t);break}case ee:{var n=(e.mode&vt)!==qe;gR(e.type,e.memoizedProps,e.stateNode,t,n);break}case $e:{var r=e.memoizedState;r.dehydrated!==null&&yR(r.dehydrated,t);break}}}function Ag(e,t){Mg(e,t);var n=IM();n.stateNode=t,n.return=e;var r=e.deletions;r===null?(e.deletions=[n],e.flags|=ve):r.push(n)}function km(e,t){{if(iu)return;switch(e.tag){case G:{var n=e.stateNode.containerInfo;switch(t.tag){case ee:var r=t.type;t.pendingProps,_R(n,r);break;case oe:var o=t.pendingProps;ER(n,o);break}break}case ee:{var c=e.type,f=e.memoizedProps,_=e.stateNode;switch(t.tag){case ee:{var b=t.type,O=t.pendingProps,C=(e.mode&vt)!==qe;TR(c,f,_,b,O,C);break}case oe:{var L=t.pendingProps,H=(e.mode&vt)!==qe;SR(c,f,_,L,H);break}}break}case $e:{var Q=e.memoizedState,q=Q.dehydrated;if(q!==null)switch(t.tag){case ee:var ae=t.type;t.pendingProps,bR(q,ae);break;case oe:var Ae=t.pendingProps;wR(q,Ae);break}break}default:return}}}function xg(e,t){t.flags=t.flags&~jr|Ce,km(e,t)}function Cg(e,t){switch(e.tag){case ee:{var n=e.type;e.pendingProps;var r=eR(t,n);return r!==null?(e.stateNode=r,tr=e,Sa=aR(r),!0):!1}case oe:{var o=e.pendingProps,c=tR(t,o);return c!==null?(e.stateNode=c,tr=e,Sa=null,!0):!1}case $e:{var f=nR(t);if(f!==null){var _={dehydrated:f,treeContext:KR(),retryLane:aa};e.memoizedState=_;var b=UM(f);return b.return=e,e.child=b,tr=e,Sa=null,!0}return!1}default:return!1}}function Im(e){return(e.mode&vt)!==qe&&(e.flags&be)===ne}function Um(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function Hm(e){if(!!za){var t=Sa;if(!t){Im(e)&&(km(tr,e),Um()),xg(tr,e),za=!1,tr=e;return}var n=t;if(!Cg(e,t)){Im(e)&&(km(tr,e),Um()),t=_l(n);var r=tr;if(!t||!Cg(e,t)){xg(tr,e),za=!1,tr=e;return}Ag(r,n)}}}function nO(e,t,n){var r=e.stateNode,o=!iu,c=sR(r,e.type,e.memoizedProps,t,n,e,o);return e.updateQueue=c,c!==null}function rO(e){var t=e.stateNode,n=e.memoizedProps,r=uR(t,n,e);if(r){var o=tr;if(o!==null)switch(o.tag){case G:{var c=o.stateNode.containerInfo,f=(o.mode&vt)!==qe;mR(c,t,n,f);break}case ee:{var _=o.type,b=o.memoizedProps,O=o.stateNode,C=(o.mode&vt)!==qe;hR(_,b,O,t,n,C);break}}}return r}function aO(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");lR(n,e)}function iO(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return cR(n)}function Pg(e){for(var t=e.return;t!==null&&t.tag!==ee&&t.tag!==G&&t.tag!==$e;)t=t.return;tr=t}function Al(e){if(e!==tr)return!1;if(!za)return Pg(e),za=!0,!1;if(e.tag!==G&&(e.tag!==ee||pR(e.type)&&!Jp(e.type,e.memoizedProps))){var t=Sa;if(t)if(Im(e))Fg(e),Um();else for(;t;)Ag(e,t),t=_l(t)}return Pg(e),e.tag===$e?Sa=iO(e):Sa=tr?_l(e.stateNode):null,!0}function oO(){return za&&Sa!==null}function Fg(e){for(var t=Sa;t;)Mg(e,t),t=_l(t)}function ou(){tr=null,Sa=null,za=!1,iu=!1}function Ng(){fo!==null&&(yE(fo),fo=null)}function nr(){return za}function Lm(e){fo===null?fo=[e]:fo.push(e)}var jm,zm,Xm,Bm,$m,kg=function(e,t){};jm=!1,zm=!1,Xm={},Bm={},$m={},kg=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=rt(t)||"Component";Bm[n]||(Bm[n]=!0,h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function xl(e,t,n){var r=n.ref;if(r!==null&&typeof r!="function"&&typeof r!="object"){if((e.mode&Sn||cr)&&!(n._owner&&n._self&&n._owner.stateNode!==n._self)){var o=rt(e)||"Component";Xm[o]||(h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r),Xm[o]=!0)}if(n._owner){var c=n._owner,f;if(c){var _=c;if(_.tag!==j)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");f=_.stateNode}if(!f)throw new Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var b=f;Mn(r,"ref");var O=""+r;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===O)return t.ref;var C=function(L){var H=b.refs;H===_g&&(H=b.refs={}),L===null?delete H[O]:H[O]=L};return C._stringRef=O,C}else{if(typeof r!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw new Error("Element ref was specified as a string ("+r+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return r}function wd(e,t){var n=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function Td(e){{var t=rt(e)||"Component";if($m[t])return;$m[t]=!0,h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function Ig(e){var t=e._payload,n=e._init;return n(t)}function Ug(e){function t(B,Z){if(!!e){var X=B.deletions;X===null?(B.deletions=[Z],B.flags|=ve):X.push(Z)}}function n(B,Z){if(!e)return null;for(var X=Z;X!==null;)t(B,X),X=X.sibling;return null}function r(B,Z){for(var X=new Map,fe=Z;fe!==null;)fe.key!==null?X.set(fe.key,fe):X.set(fe.index,fe),fe=fe.sibling;return X}function o(B,Z){var X=vs(B,Z);return X.index=0,X.sibling=null,X}function c(B,Z,X){if(B.index=X,!e)return B.flags|=Wo,Z;var fe=B.alternate;if(fe!==null){var Ee=fe.index;return Ee<Z?(B.flags|=Ce,Z):Ee}else return B.flags|=Ce,Z}function f(B){return e&&B.alternate===null&&(B.flags|=Ce),B}function _(B,Z,X,fe){if(Z===null||Z.tag!==oe){var Ee=mv(X,B.mode,fe);return Ee.return=B,Ee}else{var Me=o(Z,X);return Me.return=B,Me}}function b(B,Z,X,fe){var Ee=X.type;if(Ee===ue)return C(B,Z,X.props.children,fe,X.key);if(Z!==null&&(Z.elementType===Ee||FE(Z,X)||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===ft&&Ig(Ee)===Z.type)){var Me=o(Z,X.props);return Me.ref=xl(B,Z,X),Me.return=B,Me._debugSource=X._source,Me._debugOwner=X._owner,Me}var _t=pv(X,B.mode,fe);return _t.ref=xl(B,Z,X),_t.return=B,_t}function O(B,Z,X,fe){if(Z===null||Z.tag!==se||Z.stateNode.containerInfo!==X.containerInfo||Z.stateNode.implementation!==X.implementation){var Ee=hv(X,B.mode,fe);return Ee.return=B,Ee}else{var Me=o(Z,X.children||[]);return Me.return=B,Me}}function C(B,Z,X,fe,Ee){if(Z===null||Z.tag!==Ve){var Me=wo(X,B.mode,fe,Ee);return Me.return=B,Me}else{var _t=o(Z,X);return _t.return=B,_t}}function L(B,Z,X){if(typeof Z=="string"&&Z!==""||typeof Z=="number"){var fe=mv(""+Z,B.mode,X);return fe.return=B,fe}if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Xn:{var Ee=pv(Z,B.mode,X);return Ee.ref=xl(B,null,Z),Ee.return=B,Ee}case k:{var Me=hv(Z,B.mode,X);return Me.return=B,Me}case ft:{var _t=Z._payload,Ut=Z._init;return L(B,Ut(_t),X)}}if(Rt(Z)||Aa(Z)){var Gt=wo(Z,B.mode,X,null);return Gt.return=B,Gt}wd(B,Z)}return typeof Z=="function"&&Td(B),null}function H(B,Z,X,fe){var Ee=Z!==null?Z.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return Ee!==null?null:_(B,Z,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Xn:return X.key===Ee?b(B,Z,X,fe):null;case k:return X.key===Ee?O(B,Z,X,fe):null;case ft:{var Me=X._payload,_t=X._init;return H(B,Z,_t(Me),fe)}}if(Rt(X)||Aa(X))return Ee!==null?null:C(B,Z,X,fe,null);wd(B,X)}return typeof X=="function"&&Td(B),null}function Q(B,Z,X,fe,Ee){if(typeof fe=="string"&&fe!==""||typeof fe=="number"){var Me=B.get(X)||null;return _(Z,Me,""+fe,Ee)}if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case Xn:{var _t=B.get(fe.key===null?X:fe.key)||null;return b(Z,_t,fe,Ee)}case k:{var Ut=B.get(fe.key===null?X:fe.key)||null;return O(Z,Ut,fe,Ee)}case ft:var Gt=fe._payload,Ht=fe._init;return Q(B,Z,X,Ht(Gt),Ee)}if(Rt(fe)||Aa(fe)){var dn=B.get(X)||null;return C(Z,dn,fe,Ee,null)}wd(Z,fe)}return typeof fe=="function"&&Td(Z),null}function q(B,Z,X){{if(typeof B!="object"||B===null)return Z;switch(B.$$typeof){case Xn:case k:kg(B,X);var fe=B.key;if(typeof fe!="string")break;if(Z===null){Z=new Set,Z.add(fe);break}if(!Z.has(fe)){Z.add(fe);break}h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",fe);break;case ft:var Ee=B._payload,Me=B._init;q(Me(Ee),Z,X);break}}return Z}function ae(B,Z,X,fe){for(var Ee=null,Me=0;Me<X.length;Me++){var _t=X[Me];Ee=q(_t,Ee,B)}for(var Ut=null,Gt=null,Ht=Z,dn=0,At=0,ht=null;Ht!==null&&At<X.length;At++){Ht.index>At?(ht=Ht,Ht=null):ht=Ht.sibling;var gn=H(B,Ht,X[At],fe);if(gn===null){Ht===null&&(Ht=ht);break}e&&Ht&&gn.alternate===null&&t(B,Ht),dn=c(gn,dn,At),Gt===null?Ut=gn:Gt.sibling=gn,Gt=gn,Ht=ht}if(At===X.length){if(n(B,Ht),nr()){var fn=At;us(B,fn)}return Ut}if(Ht===null){for(;At<X.length;At++){var Ma=L(B,X[At],fe);Ma!==null&&(dn=c(Ma,dn,At),Gt===null?Ut=Ma:Gt.sibling=Ma,Gt=Ma)}if(nr()){var ur=At;us(B,ur)}return Ut}for(var da=r(B,Ht);At<X.length;At++){var fa=Q(da,B,At,X[At],fe);fa!==null&&(e&&fa.alternate!==null&&da.delete(fa.key===null?At:fa.key),dn=c(fa,dn,At),Gt===null?Ut=fa:Gt.sibling=fa,Gt=fa)}if(e&&da.forEach(function(Tu){return t(B,Tu)}),nr()){var hi=At;us(B,hi)}return Ut}function Ae(B,Z,X,fe){var Ee=Aa(X);if(typeof Ee!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&X[Symbol.toStringTag]==="Generator"&&(zm||h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),zm=!0),X.entries===Ee&&(jm||h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),jm=!0);var Me=Ee.call(X);if(Me)for(var _t=null,Ut=Me.next();!Ut.done;Ut=Me.next()){var Gt=Ut.value;_t=q(Gt,_t,B)}}var Ht=Ee.call(X);if(Ht==null)throw new Error("An iterable object provided no iterator.");for(var dn=null,At=null,ht=Z,gn=0,fn=0,Ma=null,ur=Ht.next();ht!==null&&!ur.done;fn++,ur=Ht.next()){ht.index>fn?(Ma=ht,ht=null):Ma=ht.sibling;var da=H(B,ht,ur.value,fe);if(da===null){ht===null&&(ht=Ma);break}e&&ht&&da.alternate===null&&t(B,ht),gn=c(da,gn,fn),At===null?dn=da:At.sibling=da,At=da,ht=Ma}if(ur.done){if(n(B,ht),nr()){var fa=fn;us(B,fa)}return dn}if(ht===null){for(;!ur.done;fn++,ur=Ht.next()){var hi=L(B,ur.value,fe);hi!==null&&(gn=c(hi,gn,fn),At===null?dn=hi:At.sibling=hi,At=hi)}if(nr()){var Tu=fn;us(B,Tu)}return dn}for(var Su=r(B,ht);!ur.done;fn++,ur=Ht.next()){var pa=Q(Su,B,fn,ur.value,fe);pa!==null&&(e&&pa.alternate!==null&&Su.delete(pa.key===null?fn:pa.key),gn=c(pa,gn,fn),At===null?dn=pa:At.sibling=pa,At=pa)}if(e&&Su.forEach(function(Sv){return t(B,Sv)}),nr()){var ys=fn;us(B,ys)}return dn}function Ke(B,Z,X,fe){if(Z!==null&&Z.tag===oe){n(B,Z.sibling);var Ee=o(Z,X);return Ee.return=B,Ee}n(B,Z);var Me=mv(X,B.mode,fe);return Me.return=B,Me}function He(B,Z,X,fe){for(var Ee=X.key,Me=Z;Me!==null;){if(Me.key===Ee){var _t=X.type;if(_t===ue){if(Me.tag===Ve){n(B,Me.sibling);var Ut=o(Me,X.props.children);return Ut.return=B,Ut._debugSource=X._source,Ut._debugOwner=X._owner,Ut}}else if(Me.elementType===_t||FE(Me,X)||typeof _t=="object"&&_t!==null&&_t.$$typeof===ft&&Ig(_t)===Me.type){n(B,Me.sibling);var Gt=o(Me,X.props);return Gt.ref=xl(B,Me,X),Gt.return=B,Gt._debugSource=X._source,Gt._debugOwner=X._owner,Gt}n(B,Me);break}else t(B,Me);Me=Me.sibling}if(X.type===ue){var Ht=wo(X.props.children,B.mode,fe,X.key);return Ht.return=B,Ht}else{var dn=pv(X,B.mode,fe);return dn.ref=xl(B,Z,X),dn.return=B,dn}}function Ot(B,Z,X,fe){for(var Ee=X.key,Me=Z;Me!==null;){if(Me.key===Ee)if(Me.tag===se&&Me.stateNode.containerInfo===X.containerInfo&&Me.stateNode.implementation===X.implementation){n(B,Me.sibling);var _t=o(Me,X.children||[]);return _t.return=B,_t}else{n(B,Me);break}else t(B,Me);Me=Me.sibling}var Ut=hv(X,B.mode,fe);return Ut.return=B,Ut}function Dt(B,Z,X,fe){var Ee=typeof X=="object"&&X!==null&&X.type===ue&&X.key===null;if(Ee&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case Xn:return f(He(B,Z,X,fe));case k:return f(Ot(B,Z,X,fe));case ft:var Me=X._payload,_t=X._init;return Dt(B,Z,_t(Me),fe)}if(Rt(X))return ae(B,Z,X,fe);if(Aa(X))return Ae(B,Z,X,fe);wd(B,X)}return typeof X=="string"&&X!==""||typeof X=="number"?f(Ke(B,Z,""+X,fe)):(typeof X=="function"&&Td(B),n(B,Z))}return Dt}var su=Ug(!0),Hg=Ug(!1);function sO(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var n=t.child,r=vs(n,n.pendingProps);for(t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=vs(n,n.pendingProps),r.return=t;r.sibling=null}}function uO(e,t){for(var n=e.child;n!==null;)CM(n,t),n=n.sibling}var Cl={},po=oo(Cl),Pl=oo(Cl),Sd=oo(Cl);function Rd(e){if(e===Cl)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function Lg(){var e=Rd(Sd.current);return e}function Vm(e,t){wr(Sd,t,e),wr(Pl,e,e),wr(po,Cl,e);var n=OS(t);br(po,e),wr(po,n,e)}function uu(e){br(po,e),br(Pl,e),br(Sd,e)}function Wm(){var e=Rd(po.current);return e}function jg(e){Rd(Sd.current);var t=Rd(po.current),n=DS(t,e.type);t!==n&&(wr(Pl,e,e),wr(po,n,e))}function Qm(e){Pl.current===e&&(br(po,e),br(Pl,e))}var lO=0,zg=1,Xg=1,Fl=2,Xa=oo(lO);function Ym(e,t){return(e&t)!==0}function lu(e){return e&zg}function Gm(e,t){return e&zg|t}function cO(e,t){return e|t}function mo(e,t){wr(Xa,t,e)}function cu(e){br(Xa,e)}function dO(e,t){var n=e.memoizedState;return n!==null?n.dehydrated!==null:(e.memoizedProps,!0)}function Od(e){for(var t=e;t!==null;){if(t.tag===$e){var n=t.memoizedState;if(n!==null){var r=n.dehydrated;if(r===null||Jy(r)||nm(r))return t}}else if(t.tag===Ge&&t.memoizedProps.revealOrder!==void 0){var o=(t.flags&be)!==ne;if(o)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xr=0,Nn=1,ui=2,kn=4,rr=8,qm=[];function Km(){for(var e=0;e<qm.length;e++){var t=qm[e];t._workInProgressVersionPrimary=null}qm.length=0}function fO(e,t){var n=t._getVersion,r=n(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r)}var Oe=s.ReactCurrentDispatcher,Nl=s.ReactCurrentBatchConfig,Jm,du;Jm=new Set;var cs=ce,zt=null,In=null,Un=null,Dd=!1,kl=!1,Il=0,pO=0,mO=25,re=null,Ra=null,ho=-1,Zm=!1;function Nt(){{var e=re;Ra===null?Ra=[e]:Ra.push(e)}}function we(){{var e=re;Ra!==null&&(ho++,Ra[ho]!==e&&hO(e))}}function fu(e){e!=null&&!Rt(e)&&h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",re,typeof e)}function hO(e){{var t=rt(zt);if(!Jm.has(t)&&(Jm.add(t),Ra!==null)){for(var n="",r=30,o=0;o<=ho;o++){for(var c=Ra[o],f=o===ho?e:c,_=o+1+". "+c;_.length<r;)_+=" ";_+=f+`
`,n+=_}h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function Tr(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function eh(e,t){if(Zm)return!1;if(t===null)return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",re),!1;e.length!==t.length&&h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,re,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!ua(e[n],t[n]))return!1;return!0}function pu(e,t,n,r,o,c){cs=c,zt=t,Ra=e!==null?e._debugHookTypes:null,ho=-1,Zm=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=ce,e!==null&&e.memoizedState!==null?Oe.current=d_:Ra!==null?Oe.current=c_:Oe.current=l_;var f=n(r,o);if(kl){var _=0;do{if(kl=!1,Il=0,_>=mO)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");_+=1,Zm=!1,In=null,Un=null,t.updateQueue=null,ho=-1,Oe.current=f_,f=n(r,o)}while(kl)}Oe.current=jd,t._debugHookTypes=Ra;var b=In!==null&&In.next!==null;if(cs=ce,zt=null,In=null,Un=null,re=null,Ra=null,ho=-1,e!==null&&(e.flags&Oi)!==(t.flags&Oi)&&(e.mode&vt)!==qe&&h("Internal React error: Expected static flag was missing. Please notify the React team."),Dd=!1,b)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return f}function mu(){var e=Il!==0;return Il=0,e}function Bg(e,t,n){t.updateQueue=e.updateQueue,(t.mode&ai)!==qe?t.flags&=~(Go|Wn|Pn|Y):t.flags&=~(Pn|Y),e.lanes=Ac(e.lanes,n)}function $g(){if(Oe.current=jd,Dd){for(var e=zt.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dd=!1}cs=ce,zt=null,In=null,Un=null,Ra=null,ho=-1,re=null,r_=!1,kl=!1,Il=0}function li(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?zt.memoizedState=Un=e:Un=Un.next=e,Un}function Oa(){var e;if(In===null){var t=zt.alternate;t!==null?e=t.memoizedState:e=null}else e=In.next;var n;if(Un===null?n=zt.memoizedState:n=Un.next,n!==null)Un=n,n=Un.next,In=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");In=e;var r={memoizedState:In.memoizedState,baseState:In.baseState,baseQueue:In.baseQueue,queue:In.queue,next:null};Un===null?zt.memoizedState=Un=r:Un=Un.next=r}return Un}function Vg(){return{lastEffect:null,stores:null}}function th(e,t){return typeof t=="function"?t(e):t}function nh(e,t,n){var r=li(),o;n!==void 0?o=n(t):o=t,r.memoizedState=r.baseState=o;var c={pending:null,interleaved:null,lanes:ce,dispatch:null,lastRenderedReducer:e,lastRenderedState:o};r.queue=c;var f=c.dispatch=_O.bind(null,zt,c);return[r.memoizedState,f]}function rh(e,t,n){var r=Oa(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var c=In,f=c.baseQueue,_=o.pending;if(_!==null){if(f!==null){var b=f.next,O=_.next;f.next=O,_.next=b}c.baseQueue!==f&&h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),c.baseQueue=f=_,o.pending=null}if(f!==null){var C=f.next,L=c.baseState,H=null,Q=null,q=null,ae=C;do{var Ae=ae.lane;if(Bs(cs,Ae)){if(q!==null){var He={lane:Gn,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};q=q.next=He}if(ae.hasEagerState)L=ae.eagerState;else{var Ot=ae.action;L=e(L,Ot)}}else{var Ke={lane:Ae,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};q===null?(Q=q=Ke,H=L):q=q.next=Ke,zt.lanes=lt(zt.lanes,Ae),tc(Ae)}ae=ae.next}while(ae!==null&&ae!==C);q===null?H=L:q.next=Q,ua(L,r.memoizedState)||$l(),r.memoizedState=L,r.baseState=H,r.baseQueue=q,o.lastRenderedState=L}var Dt=o.interleaved;if(Dt!==null){var B=Dt;do{var Z=B.lane;zt.lanes=lt(zt.lanes,Z),tc(Z),B=B.next}while(B!==Dt)}else f===null&&(o.lanes=ce);var X=o.dispatch;return[r.memoizedState,X]}function ah(e,t,n){var r=Oa(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var c=o.dispatch,f=o.pending,_=r.memoizedState;if(f!==null){o.pending=null;var b=f.next,O=b;do{var C=O.action;_=e(_,C),O=O.next}while(O!==b);ua(_,r.memoizedState)||$l(),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,c]}function y0(e,t,n){}function g0(e,t,n){}function ih(e,t,n){var r=zt,o=li(),c,f=nr();if(f){if(n===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");c=n(),du||c!==n()&&(h("The result of getServerSnapshot should be cached to avoid an infinite loop"),du=!0)}else{if(c=t(),!du){var _=t();ua(c,_)||(h("The result of getSnapshot should be cached to avoid an infinite loop"),du=!0)}var b=sf();if(b===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Mc(b,cs)||Wg(r,t,c)}o.memoizedState=c;var O={value:c,getSnapshot:t};return o.queue=O,Pd(Yg.bind(null,r,O,e),[e]),r.flags|=Pn,Ul(Nn|rr,Qg.bind(null,r,O,c,t),void 0,null),c}function Md(e,t,n){var r=zt,o=Oa(),c=t();if(!du){var f=t();ua(c,f)||(h("The result of getSnapshot should be cached to avoid an infinite loop"),du=!0)}var _=o.memoizedState,b=!ua(_,c);b&&(o.memoizedState=c,$l());var O=o.queue;if(Ll(Yg.bind(null,r,O,e),[e]),O.getSnapshot!==t||b||Un!==null&&Un.memoizedState.tag&Nn){r.flags|=Pn,Ul(Nn|rr,Qg.bind(null,r,O,c,t),void 0,null);var C=sf();if(C===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Mc(C,cs)||Wg(r,t,c)}return c}function Wg(e,t,n){e.flags|=Is;var r={getSnapshot:t,value:n},o=zt.updateQueue;if(o===null)o=Vg(),zt.updateQueue=o,o.stores=[r];else{var c=o.stores;c===null?o.stores=[r]:c.push(r)}}function Qg(e,t,n,r){t.value=n,t.getSnapshot=r,Gg(t)&&qg(e)}function Yg(e,t,n){var r=function(){Gg(t)&&qg(e)};return n(r)}function Gg(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!ua(n,r)}catch{return!0}}function qg(e){zn(e,yt,tn)}function Ad(e){var t=li();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:ce,dispatch:null,lastRenderedReducer:th,lastRenderedState:e};t.queue=n;var r=n.dispatch=EO.bind(null,zt,n);return[t.memoizedState,r]}function oh(e){return rh(th)}function sh(e){return ah(th)}function Ul(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,next:null},c=zt.updateQueue;if(c===null)c=Vg(),zt.updateQueue=c,c.lastEffect=o.next=o;else{var f=c.lastEffect;if(f===null)c.lastEffect=o.next=o;else{var _=f.next;f.next=o,o.next=_,c.lastEffect=o}}return o}function uh(e){var t=li();{var n={current:e};return t.memoizedState=n,n}}function xd(e){var t=Oa();return t.memoizedState}function Hl(e,t,n,r){var o=li(),c=r===void 0?null:r;zt.flags|=e,o.memoizedState=Ul(Nn|t,n,void 0,c)}function Cd(e,t,n,r){var o=Oa(),c=r===void 0?null:r,f=void 0;if(In!==null){var _=In.memoizedState;if(f=_.destroy,c!==null){var b=_.deps;if(eh(c,b)){o.memoizedState=Ul(t,n,f,c);return}}}zt.flags|=e,o.memoizedState=Ul(Nn|t,n,f,c)}function Pd(e,t){return(zt.mode&ai)!==qe?Hl(Go|Pn|Yo,rr,e,t):Hl(Pn|Yo,rr,e,t)}function Ll(e,t){return Cd(Pn,rr,e,t)}function lh(e,t){return Hl(Y,ui,e,t)}function Fd(e,t){return Cd(Y,ui,e,t)}function ch(e,t){var n=Y;return n|=ra,(zt.mode&ai)!==qe&&(n|=Wn),Hl(n,kn,e,t)}function Nd(e,t){return Cd(Y,kn,e,t)}function Kg(e,t){if(typeof t=="function"){var n=t,r=e();return n(r),function(){n(null)}}else if(t!=null){var o=t;o.hasOwnProperty("current")||h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var c=e();return o.current=c,function(){o.current=null}}}function dh(e,t,n){typeof t!="function"&&h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null,o=Y;return o|=ra,(zt.mode&ai)!==qe&&(o|=Wn),Hl(o,kn,Kg.bind(null,t,e),r)}function kd(e,t,n){typeof t!="function"&&h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null;return Cd(Y,kn,Kg.bind(null,t,e),r)}function vO(e,t){}var Id=vO;function fh(e,t){var n=li(),r=t===void 0?null:t;return n.memoizedState=[e,r],e}function Ud(e,t){var n=Oa(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var c=o[1];if(eh(r,c))return o[0]}return n.memoizedState=[e,r],e}function ph(e,t){var n=li(),r=t===void 0?null:t,o=e();return n.memoizedState=[o,r],o}function Hd(e,t){var n=Oa(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var c=o[1];if(eh(r,c))return o[0]}var f=e();return n.memoizedState=[f,r],f}function mh(e){var t=li();return t.memoizedState=e,e}function Jg(e){var t=Oa(),n=In,r=n.memoizedState;return e_(t,r,e)}function Zg(e){var t=Oa();if(In===null)return t.memoizedState=e,e;var n=In.memoizedState;return e_(t,n,e)}function e_(e,t,n){var r=!nw(cs);if(r){if(!ua(n,t)){var o=Bv();zt.lanes=lt(zt.lanes,o),tc(o),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,$l()),e.memoizedState=n,n}function yO(e,t,n){var r=Ua();qn(dw(r,Mi)),e(!0);var o=Nl.transition;Nl.transition={};var c=Nl.transition;Nl.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(qn(r),Nl.transition=o,o===null&&c._updatedFibers){var f=c._updatedFibers.size;f>10&&R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),c._updatedFibers.clear()}}}function hh(){var e=Ad(!1),t=e[0],n=e[1],r=yO.bind(null,n),o=li();return o.memoizedState=r,[t,r]}function t_(){var e=oh(),t=e[0],n=Oa(),r=n.memoizedState;return[t,r]}function n_(){var e=sh(),t=e[0],n=Oa(),r=n.memoizedState;return[t,r]}var r_=!1;function gO(){return r_}function vh(){var e=li(),t=sf(),n=t.identifierPrefix,r;if(nr()){var o=GR();r=":"+n+"R"+o;var c=Il++;c>0&&(r+="H"+c.toString(32)),r+=":"}else{var f=pO++;r=":"+n+"r"+f.toString(32)+":"}return e.memoizedState=r,r}function Ld(){var e=Oa(),t=e.memoizedState;return t}function _O(e,t,n){typeof arguments[3]=="function"&&h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Eo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(e))i_(t,o);else{o_(e,t,o);var c=Pr(),f=zn(e,r,c);f!==null&&s_(f,t,r)}u_(e,r)}function EO(e,t,n){typeof arguments[3]=="function"&&h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Eo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(e))i_(t,o);else{o_(e,t,o);var c=e.alternate;if(e.lanes===ce&&(c===null||c.lanes===ce)){var f=t.lastRenderedReducer;if(f!==null){var _;_=Oe.current,Oe.current=Ba;try{var b=t.lastRenderedState,O=f(b,n);if(o.hasEagerState=!0,o.eagerState=O,ua(O,b))return}catch{}finally{Oe.current=_}}}var C=Pr(),L=zn(e,r,C);L!==null&&s_(L,t,r)}u_(e,r)}function a_(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function i_(e,t){kl=Dd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function o_(e,t,n,r){if(hE(e)){var o=t.interleaved;o===null?(n.next=n,pg(t)):(n.next=o.next,o.next=n),t.interleaved=n}else{var c=t.pending;c===null?n.next=n:(n.next=c.next,c.next=n),t.pending=n}}function s_(e,t,n){if(Xv(n)){var r=t.lanes;r=$v(r,e.pendingLanes);var o=lt(r,n);t.lanes=o,Sp(e,o)}}function u_(e,t,n){Zf(e,t)}var jd={readContext:Rn,useCallback:Tr,useContext:Tr,useEffect:Tr,useImperativeHandle:Tr,useInsertionEffect:Tr,useLayoutEffect:Tr,useMemo:Tr,useReducer:Tr,useRef:Tr,useState:Tr,useDebugValue:Tr,useDeferredValue:Tr,useTransition:Tr,useMutableSource:Tr,useSyncExternalStore:Tr,useId:Tr,unstable_isNewReconciler:_n},l_=null,c_=null,d_=null,f_=null,ci=null,Ba=null,zd=null;{var yh=function(){h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},Je=function(){h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};l_={readContext:function(e){return Rn(e)},useCallback:function(e,t){return re="useCallback",Nt(),fu(t),fh(e,t)},useContext:function(e){return re="useContext",Nt(),Rn(e)},useEffect:function(e,t){return re="useEffect",Nt(),fu(t),Pd(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",Nt(),fu(n),dh(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",Nt(),fu(t),lh(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",Nt(),fu(t),ch(e,t)},useMemo:function(e,t){re="useMemo",Nt(),fu(t);var n=Oe.current;Oe.current=ci;try{return ph(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",Nt();var r=Oe.current;Oe.current=ci;try{return nh(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",Nt(),uh(e)},useState:function(e){re="useState",Nt();var t=Oe.current;Oe.current=ci;try{return Ad(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",Nt(),void 0},useDeferredValue:function(e){return re="useDeferredValue",Nt(),mh(e)},useTransition:function(){return re="useTransition",Nt(),hh()},useMutableSource:function(e,t,n){return re="useMutableSource",Nt(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",Nt(),ih(e,t,n)},useId:function(){return re="useId",Nt(),vh()},unstable_isNewReconciler:_n},c_={readContext:function(e){return Rn(e)},useCallback:function(e,t){return re="useCallback",we(),fh(e,t)},useContext:function(e){return re="useContext",we(),Rn(e)},useEffect:function(e,t){return re="useEffect",we(),Pd(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",we(),dh(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",we(),lh(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",we(),ch(e,t)},useMemo:function(e,t){re="useMemo",we();var n=Oe.current;Oe.current=ci;try{return ph(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",we();var r=Oe.current;Oe.current=ci;try{return nh(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",we(),uh(e)},useState:function(e){re="useState",we();var t=Oe.current;Oe.current=ci;try{return Ad(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",we(),void 0},useDeferredValue:function(e){return re="useDeferredValue",we(),mh(e)},useTransition:function(){return re="useTransition",we(),hh()},useMutableSource:function(e,t,n){return re="useMutableSource",we(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",we(),ih(e,t,n)},useId:function(){return re="useId",we(),vh()},unstable_isNewReconciler:_n},d_={readContext:function(e){return Rn(e)},useCallback:function(e,t){return re="useCallback",we(),Ud(e,t)},useContext:function(e){return re="useContext",we(),Rn(e)},useEffect:function(e,t){return re="useEffect",we(),Ll(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",we(),kd(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",we(),Fd(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",we(),Nd(e,t)},useMemo:function(e,t){re="useMemo",we();var n=Oe.current;Oe.current=Ba;try{return Hd(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",we();var r=Oe.current;Oe.current=Ba;try{return rh(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",we(),xd()},useState:function(e){re="useState",we();var t=Oe.current;Oe.current=Ba;try{return oh(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",we(),Id()},useDeferredValue:function(e){return re="useDeferredValue",we(),Jg(e)},useTransition:function(){return re="useTransition",we(),t_()},useMutableSource:function(e,t,n){return re="useMutableSource",we(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",we(),Md(e,t)},useId:function(){return re="useId",we(),Ld()},unstable_isNewReconciler:_n},f_={readContext:function(e){return Rn(e)},useCallback:function(e,t){return re="useCallback",we(),Ud(e,t)},useContext:function(e){return re="useContext",we(),Rn(e)},useEffect:function(e,t){return re="useEffect",we(),Ll(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",we(),kd(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",we(),Fd(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",we(),Nd(e,t)},useMemo:function(e,t){re="useMemo",we();var n=Oe.current;Oe.current=zd;try{return Hd(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",we();var r=Oe.current;Oe.current=zd;try{return ah(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",we(),xd()},useState:function(e){re="useState",we();var t=Oe.current;Oe.current=zd;try{return sh(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",we(),Id()},useDeferredValue:function(e){return re="useDeferredValue",we(),Zg(e)},useTransition:function(){return re="useTransition",we(),n_()},useMutableSource:function(e,t,n){return re="useMutableSource",we(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",we(),Md(e,t)},useId:function(){return re="useId",we(),Ld()},unstable_isNewReconciler:_n},ci={readContext:function(e){return yh(),Rn(e)},useCallback:function(e,t){return re="useCallback",Je(),Nt(),fh(e,t)},useContext:function(e){return re="useContext",Je(),Nt(),Rn(e)},useEffect:function(e,t){return re="useEffect",Je(),Nt(),Pd(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",Je(),Nt(),dh(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",Je(),Nt(),lh(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",Je(),Nt(),ch(e,t)},useMemo:function(e,t){re="useMemo",Je(),Nt();var n=Oe.current;Oe.current=ci;try{return ph(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",Je(),Nt();var r=Oe.current;Oe.current=ci;try{return nh(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",Je(),Nt(),uh(e)},useState:function(e){re="useState",Je(),Nt();var t=Oe.current;Oe.current=ci;try{return Ad(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",Je(),Nt(),void 0},useDeferredValue:function(e){return re="useDeferredValue",Je(),Nt(),mh(e)},useTransition:function(){return re="useTransition",Je(),Nt(),hh()},useMutableSource:function(e,t,n){return re="useMutableSource",Je(),Nt(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",Je(),Nt(),ih(e,t,n)},useId:function(){return re="useId",Je(),Nt(),vh()},unstable_isNewReconciler:_n},Ba={readContext:function(e){return yh(),Rn(e)},useCallback:function(e,t){return re="useCallback",Je(),we(),Ud(e,t)},useContext:function(e){return re="useContext",Je(),we(),Rn(e)},useEffect:function(e,t){return re="useEffect",Je(),we(),Ll(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",Je(),we(),kd(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",Je(),we(),Fd(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",Je(),we(),Nd(e,t)},useMemo:function(e,t){re="useMemo",Je(),we();var n=Oe.current;Oe.current=Ba;try{return Hd(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",Je(),we();var r=Oe.current;Oe.current=Ba;try{return rh(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",Je(),we(),xd()},useState:function(e){re="useState",Je(),we();var t=Oe.current;Oe.current=Ba;try{return oh(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",Je(),we(),Id()},useDeferredValue:function(e){return re="useDeferredValue",Je(),we(),Jg(e)},useTransition:function(){return re="useTransition",Je(),we(),t_()},useMutableSource:function(e,t,n){return re="useMutableSource",Je(),we(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",Je(),we(),Md(e,t)},useId:function(){return re="useId",Je(),we(),Ld()},unstable_isNewReconciler:_n},zd={readContext:function(e){return yh(),Rn(e)},useCallback:function(e,t){return re="useCallback",Je(),we(),Ud(e,t)},useContext:function(e){return re="useContext",Je(),we(),Rn(e)},useEffect:function(e,t){return re="useEffect",Je(),we(),Ll(e,t)},useImperativeHandle:function(e,t,n){return re="useImperativeHandle",Je(),we(),kd(e,t,n)},useInsertionEffect:function(e,t){return re="useInsertionEffect",Je(),we(),Fd(e,t)},useLayoutEffect:function(e,t){return re="useLayoutEffect",Je(),we(),Nd(e,t)},useMemo:function(e,t){re="useMemo",Je(),we();var n=Oe.current;Oe.current=Ba;try{return Hd(e,t)}finally{Oe.current=n}},useReducer:function(e,t,n){re="useReducer",Je(),we();var r=Oe.current;Oe.current=Ba;try{return ah(e,t,n)}finally{Oe.current=r}},useRef:function(e){return re="useRef",Je(),we(),xd()},useState:function(e){re="useState",Je(),we();var t=Oe.current;Oe.current=Ba;try{return sh(e)}finally{Oe.current=t}},useDebugValue:function(e,t){return re="useDebugValue",Je(),we(),Id()},useDeferredValue:function(e){return re="useDeferredValue",Je(),we(),Zg(e)},useTransition:function(){return re="useTransition",Je(),we(),n_()},useMutableSource:function(e,t,n){return re="useMutableSource",Je(),we(),void 0},useSyncExternalStore:function(e,t,n){return re="useSyncExternalStore",Je(),we(),Md(e,t)},useId:function(){return re="useId",Je(),we(),Ld()},unstable_isNewReconciler:_n}}var vo=g.unstable_now,p_=0,Xd=-1,jl=-1,Bd=-1,gh=!1,$d=!1;function m_(){return gh}function bO(){$d=!0}function wO(){gh=!1,$d=!1}function TO(){gh=$d,$d=!1}function h_(){return p_}function v_(){p_=vo()}function _h(e){jl=vo(),e.actualStartTime<0&&(e.actualStartTime=vo())}function y_(e){jl=-1}function Vd(e,t){if(jl>=0){var n=vo()-jl;e.actualDuration+=n,t&&(e.selfBaseDuration=n),jl=-1}}function di(e){if(Xd>=0){var t=vo()-Xd;Xd=-1;for(var n=e.return;n!==null;){switch(n.tag){case G:var r=n.stateNode;r.effectDuration+=t;return;case et:var o=n.stateNode;o.effectDuration+=t;return}n=n.return}}}function Eh(e){if(Bd>=0){var t=vo()-Bd;Bd=-1;for(var n=e.return;n!==null;){switch(n.tag){case G:var r=n.stateNode;r!==null&&(r.passiveEffectDuration+=t);return;case et:var o=n.stateNode;o!==null&&(o.passiveEffectDuration+=t);return}n=n.return}}}function fi(){Xd=vo()}function bh(){Bd=vo()}function wh(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function Wd(e,t){return{value:e,source:t,stack:Ao(t)}}function SO(e,t){return!0}function Th(e,t){try{var n=SO(e,t);if(n===!1)return;var r=t.value,o=t.source,c=t.stack,f=c!==null?c:"";if(r!=null&&r._suppressLogging){if(e.tag===j)return;console.error(r)}var _=o?rt(o):null,b=_?"The above error occurred in the <"+_+"> component:":"The above error occurred in one of your React components:",O;if(e.tag===G)O=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var C=rt(e)||"Anonymous";O="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+C+".")}var L=b+`
`+f+`

`+(""+O);console.error(L)}catch(H){setTimeout(function(){throw H})}}var RO=typeof WeakMap=="function"?WeakMap:Map;function g_(e,t,n){var r=Fi(tn,n);r.tag=ym,r.payload={element:null};var o=t.value;return r.callback=function(){dM(o),Th(e,t)},r}function Sh(e,t,n){var r=Fi(tn,n);r.tag=ym;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=t.value;r.payload=function(){return o(c)},r.callback=function(){NE(e),Th(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(r.callback=function(){NE(e),Th(e,t),typeof o!="function"&&lM(this);var b=t.value,O=t.stack;this.componentDidCatch(b,{componentStack:O!==null?O:""}),typeof o!="function"&&(ia(e.lanes,yt)||h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",rt(e)||"Unknown"))}),r}function __(e,t,n){var r=e.pingCache,o;if(r===null?(r=e.pingCache=new RO,o=new Set,r.set(t,o)):(o=r.get(t),o===void 0&&(o=new Set,r.set(t,o))),!o.has(n)){o.add(n);var c=fM.bind(null,e,t,n);Ia&&nc(e,n),t.then(c,c)}}function OO(e,t,n,r){var o=e.updateQueue;if(o===null){var c=new Set;c.add(n),e.updateQueue=c}else o.add(n)}function DO(e,t){var n=e.tag;if((e.mode&vt)===qe&&(n===x||n===_e||n===Re)){var r=e.alternate;r?(e.updateQueue=r.updateQueue,e.memoizedState=r.memoizedState,e.lanes=r.lanes):(e.updateQueue=null,e.memoizedState=null)}}function E_(e){var t=e;do{if(t.tag===$e&&dO(t))return t;t=t.return}while(t!==null);return null}function b_(e,t,n,r,o){if((e.mode&vt)===qe){if(e===t)e.flags|=_r;else{if(e.flags|=be,n.flags|=Vo,n.flags&=~(Ki|Ji),n.tag===j){var c=n.alternate;if(c===null)n.tag=Le;else{var f=Fi(tn,yt);f.tag=fd,co(n,f)}}n.lanes=lt(n.lanes,yt)}return e}return e.flags|=_r,e.lanes=o,e}function MO(e,t,n,r,o){if(n.flags|=Ji,Ia&&nc(e,o),r!==null&&typeof r=="object"&&typeof r.then=="function"){var c=r;DO(n),nr()&&n.mode&vt&&Dg();var f=E_(t);if(f!==null){f.flags&=~Wt,b_(f,t,n,e,o),f.mode&vt&&__(e,c,o),OO(f,e,c);return}else{if(!tw(o)){__(e,c,o),tv();return}var _=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");r=_}}else if(nr()&&n.mode&vt){Dg();var b=E_(t);if(b!==null){(b.flags&_r)===ne&&(b.flags|=Wt),b_(b,t,n,e,o),Lm(r);return}}tM(r),r=Wd(r,n);var O=t;do{switch(O.tag){case G:{var C=r;O.flags|=_r;var L=Qu(o);O.lanes=lt(O.lanes,L);var H=g_(O,C,L);Em(O,H);return}case j:var Q=r,q=O.type,ae=O.stateNode;if((O.flags&be)===ne&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&!RE(ae))){O.flags|=_r;var Ae=Qu(o);O.lanes=lt(O.lanes,Ae);var Ke=Sh(O,Q,Ae);Em(O,Ke);return}break}O=O.return}while(O!==null)}function AO(){return null}function hu(e){e.flags|=Y}function w_(e){e.flags|=ln,e.flags|=Qo}var T_,Rh,S_,R_;T_=function(e,t,n,r){for(var o=t.child;o!==null;){if(o.tag===ee||o.tag===oe)CS(e,o.stateNode);else if(o.tag!==se){if(o.child!==null){o.child.return=o,o=o.child;continue}}if(o===t)return;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Rh=function(e,t){},S_=function(e,t,n,r,o){var c=e.memoizedProps;if(c!==r){var f=t.stateNode,_=Wm(),b=FS(f,n,c,r,o,_);t.updateQueue=b,b&&hu(t)}},R_=function(e,t,n,r){n!==r&&hu(t)};function zl(e,t){if(!nr())switch(e.tailMode){case"hidden":{for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break}case"collapsed":{for(var o=e.tail,c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:c.sibling=null;break}}}function ar(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=ce,r=ne;if(t){if((e.mode&jt)!==qe){for(var b=e.selfBaseDuration,O=e.child;O!==null;)n=lt(n,lt(O.lanes,O.childLanes)),r|=O.subtreeFlags&Oi,r|=O.flags&Oi,b+=O.treeBaseDuration,O=O.sibling;e.treeBaseDuration=b}else for(var C=e.child;C!==null;)n=lt(n,lt(C.lanes,C.childLanes)),r|=C.subtreeFlags&Oi,r|=C.flags&Oi,C.return=e,C=C.sibling;e.subtreeFlags|=r}else{if((e.mode&jt)!==qe){for(var o=e.actualDuration,c=e.selfBaseDuration,f=e.child;f!==null;)n=lt(n,lt(f.lanes,f.childLanes)),r|=f.subtreeFlags,r|=f.flags,o+=f.actualDuration,c+=f.treeBaseDuration,f=f.sibling;e.actualDuration=o,e.treeBaseDuration=c}else for(var _=e.child;_!==null;)n=lt(n,lt(_.lanes,_.childLanes)),r|=_.subtreeFlags,r|=_.flags,_.return=e,_=_.sibling;e.subtreeFlags|=r}return e.childLanes=n,t}function O_(e,t,n){var r=t.pendingProps;switch(Nm(t),t.tag){case K:case Pe:case Re:case x:case _e:case Ve:case Ne:case et:case ge:case it:return ar(t),null;case j:{var o=t.type;return si(o)&&id(t),ar(t),null}case G:{var c=t.stateNode;if(uu(t),lm(t),Km(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),e===null||e.child===null){var f=Al(t);if(f)hu(t);else if(e!==null){var _=e.memoizedState;(!_.isDehydrated||(t.flags&Wt)!==ne)&&(t.flags|=yn,Ng())}}return Rh(e,t),ar(t),null}case ee:{Qm(t);var b=Lg(),O=t.type;if(e!==null&&t.stateNode!=null)S_(e,t,O,r,b),e.ref!==t.ref&&w_(t);else{if(!r){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return ar(t),null}var C=Wm(),L=Al(t);if(L)nO(t,b,C)&&hu(t);else{var H=xS(O,r,b,C,t);T_(H,t,!1,!1),t.stateNode=H,PS(H,O,r,b)&&hu(t)}t.ref!==null&&w_(t)}return ar(t),null}case oe:{var Q=r;if(e&&t.stateNode!=null){var q=e.memoizedProps;R_(e,t,q,Q)}else{if(typeof Q!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var ae=Lg(),Ae=Wm(),Ke=Al(t);Ke?rO(t)&&hu(t):t.stateNode=NS(Q,ae,Ae,t)}return ar(t),null}case $e:{cu(t);var He=t.memoizedState;if(oO()&&(t.mode&vt)!==qe&&(t.flags&be)===ne)return Fg(t),ou(),t.flags|=Wt|Ji|_r,t;if(He!==null&&He.dehydrated!==null){var Ot=Al(t);if(e===null){if(!Ot)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(aO(t),ar(t),(t.mode&jt)!==qe){var Dt=He!==null;if(Dt){var B=t.child;B!==null&&(t.treeBaseDuration-=B.treeBaseDuration)}}return null}else{if(ou(),(t.flags&be)===ne&&(t.memoizedState=null),t.flags|=Y,ar(t),(t.mode&jt)!==qe){var Z=He!==null;if(Z){var X=t.child;X!==null&&(t.treeBaseDuration-=X.treeBaseDuration)}}return null}}if(Ng(),(t.flags&be)!==ne)return t.lanes=n,(t.mode&jt)!==qe&&wh(t),t;var fe=He!==null,Ee=!1;if(e===null)Al(t);else{var Me=e.memoizedState;Ee=Me!==null}if(fe!==Ee&&fe){var _t=t.child;if(_t.flags|=gr,(t.mode&vt)!==qe){var Ut=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!lr);Ut||Ym(Xa.current,Xg)?eM():tv()}}var Gt=t.updateQueue;if(Gt!==null&&(t.flags|=Y),ar(t),(t.mode&jt)!==qe&&fe){var Ht=t.child;Ht!==null&&(t.treeBaseDuration-=Ht.treeBaseDuration)}return null}case se:return uu(t),Rh(e,t),e===null&&OR(t.stateNode.containerInfo),ar(t),null;case Be:var dn=t.type._context;return hm(dn,t),ar(t),null;case Le:{var At=t.type;return si(At)&&id(t),ar(t),null}case Ge:{cu(t);var ht=t.memoizedState;if(ht===null)return ar(t),null;var gn=(t.flags&be)!==ne,fn=ht.rendering;if(fn===null)if(gn)zl(ht,!1);else{var Ma=nM()&&(e===null||(e.flags&be)===ne);if(!Ma)for(var ur=t.child;ur!==null;){var da=Od(ur);if(da!==null){gn=!0,t.flags|=be,zl(ht,!1);var fa=da.updateQueue;return fa!==null&&(t.updateQueue=fa,t.flags|=Y),t.subtreeFlags=ne,uO(t,n),mo(t,Gm(Xa.current,Fl)),t.child}ur=ur.sibling}ht.tail!==null&&Qn()>pE()&&(t.flags|=be,gn=!0,zl(ht,!1),t.lanes=Lv)}else{if(!gn){var hi=Od(fn);if(hi!==null){t.flags|=be,gn=!0;var Tu=hi.updateQueue;if(Tu!==null&&(t.updateQueue=Tu,t.flags|=Y),zl(ht,!0),ht.tail===null&&ht.tailMode==="hidden"&&!fn.alternate&&!nr())return ar(t),null}else Qn()*2-ht.renderingStartTime>pE()&&n!==aa&&(t.flags|=be,gn=!0,zl(ht,!1),t.lanes=Lv)}if(ht.isBackwards)fn.sibling=t.child,t.child=fn;else{var Su=ht.last;Su!==null?Su.sibling=fn:t.child=fn,ht.last=fn}}if(ht.tail!==null){var pa=ht.tail;ht.rendering=pa,ht.tail=pa.sibling,ht.renderingStartTime=Qn(),pa.sibling=null;var ys=Xa.current;return gn?ys=Gm(ys,Fl):ys=lu(ys),mo(t,ys),pa}return ar(t),null}case Xt:break;case We:case ut:{ev(t);var Sv=t.memoizedState,fb=Sv!==null;if(e!==null){var p0=e.memoizedState,m0=p0!==null;m0!==fb&&!En&&(t.flags|=gr)}return!fb||(t.mode&vt)===qe?ar(t):ia(mi,aa)&&(ar(t),t.subtreeFlags&(Ce|Y)&&(t.flags|=gr)),null}case xt:return null;case sn:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}var Xl=s.ReactCurrentOwner,$a=!1,Oh,Bl,Dh,Mh,Ah,ds,xh,Qd;Oh={},Bl={},Dh={},Mh={},Ah={},ds=!1,xh={},Qd={};function Cr(e,t,n,r){e===null?t.child=Hg(t,null,n,r):t.child=su(t,e.child,n,r)}function xO(e,t,n,r){t.child=su(t,e.child,null,r),t.child=su(t,null,n,r)}function D_(e,t,n,r,o){if(t.type!==t.elementType){var c=n.propTypes;c&&Ha(c,r,"prop",St(n))}var f=n.render,_=t.ref,b,O;nu(t,o),zu(t);{if(Xl.current=t,Ar(!0),b=pu(e,t,f,r,_,o),O=mu(),t.mode&Sn){Yn(!0);try{b=pu(e,t,f,r,_,o),O=mu()}finally{Yn(!1)}}Ar(!1)}return Ls(),e!==null&&!$a?(Bg(e,t,o),Ii(e,t,o)):(nr()&&O&&Fm(t),t.flags|=ze,Cr(e,t,b,o),t.child)}function M_(e,t,n,r,o){if(e===null){var c=n.type;if(AM(c)&&n.compare===null&&n.defaultProps===void 0){var f=c;return f=wu(c),t.tag=Re,t.type=f,Fh(t,c),A_(e,t,f,r,o)}{var _=c.propTypes;_&&Ha(_,r,"prop",St(c))}var b=fv(n.type,null,r,t,t.mode,o);return b.ref=t.ref,b.return=t,t.child=b,b}{var O=n.type,C=O.propTypes;C&&Ha(C,r,"prop",St(O))}var L=e.child,H=Uh(e,o);if(!H){var Q=L.memoizedProps,q=n.compare;if(q=q!==null?q:ul,q(Q,r)&&e.ref===t.ref)return Ii(e,t,o)}t.flags|=ze;var ae=vs(L,r);return ae.ref=t.ref,ae.return=t,t.child=ae,ae}function A_(e,t,n,r,o){if(t.type!==t.elementType){var c=t.elementType;if(c.$$typeof===ft){var f=c,_=f._payload,b=f._init;try{c=b(_)}catch{c=null}var O=c&&c.propTypes;O&&Ha(O,r,"prop",St(c))}}if(e!==null){var C=e.memoizedProps;if(ul(C,r)&&e.ref===t.ref&&t.type===e.type)if($a=!1,t.pendingProps=r=C,Uh(e,o))(e.flags&Vo)!==ne&&($a=!0);else return t.lanes=e.lanes,Ii(e,t,o)}return Ch(e,t,n,r,o)}function x_(e,t,n){var r=t.pendingProps,o=r.children,c=e!==null?e.memoizedState:null;if(r.mode==="hidden"||En)if((t.mode&vt)===qe){var f={baseLanes:ce,cachePool:null,transitions:null};t.memoizedState=f,lf(t,n)}else if(ia(n,aa)){var L={baseLanes:ce,cachePool:null,transitions:null};t.memoizedState=L;var H=c!==null?c.baseLanes:n;lf(t,H)}else{var _=null,b;if(c!==null){var O=c.baseLanes;b=lt(O,n)}else b=n;t.lanes=t.childLanes=aa;var C={baseLanes:b,cachePool:_,transitions:null};return t.memoizedState=C,t.updateQueue=null,lf(t,b),null}else{var Q;c!==null?(Q=lt(c.baseLanes,n),t.memoizedState=null):Q=n,lf(t,Q)}return Cr(e,t,o,n),t.child}function CO(e,t,n){var r=t.pendingProps;return Cr(e,t,r,n),t.child}function PO(e,t,n){var r=t.pendingProps.children;return Cr(e,t,r,n),t.child}function FO(e,t,n){{t.flags|=Y;{var r=t.stateNode;r.effectDuration=0,r.passiveEffectDuration=0}}var o=t.pendingProps,c=o.children;return Cr(e,t,c,n),t.child}function C_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=ln,t.flags|=Qo)}function Ch(e,t,n,r,o){if(t.type!==t.elementType){var c=n.propTypes;c&&Ha(c,r,"prop",St(n))}var f;{var _=Zs(t,n,!0);f=eu(t,_)}var b,O;nu(t,o),zu(t);{if(Xl.current=t,Ar(!0),b=pu(e,t,n,r,f,o),O=mu(),t.mode&Sn){Yn(!0);try{b=pu(e,t,n,r,f,o),O=mu()}finally{Yn(!1)}}Ar(!1)}return Ls(),e!==null&&!$a?(Bg(e,t,o),Ii(e,t,o)):(nr()&&O&&Fm(t),t.flags|=ze,Cr(e,t,b,o),t.child)}function P_(e,t,n,r,o){{switch($M(t)){case!1:{var c=t.stateNode,f=t.type,_=new f(t.memoizedProps,c.context),b=_.state;c.updater.enqueueSetState(c,b,null);break}case!0:{t.flags|=be,t.flags|=_r;var O=new Error("Simulated error coming from DevTools"),C=Qu(o);t.lanes=lt(t.lanes,C);var L=Sh(t,Wd(O,t),C);Em(t,L);break}}if(t.type!==t.elementType){var H=n.propTypes;H&&Ha(H,r,"prop",St(n))}}var Q;si(n)?(Q=!0,od(t)):Q=!1,nu(t,o);var q=t.stateNode,ae;q===null?(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ce),Sg(t,n,r),Pm(t,n,r,o),ae=!0):e===null?ae=VR(t,n,r,o):ae=WR(e,t,n,r,o);var Ae=Ph(e,t,n,ae,Q,o);{var Ke=t.stateNode;ae&&Ke.props!==r&&(ds||h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",rt(t)||"a component"),ds=!0)}return Ae}function Ph(e,t,n,r,o,c){C_(e,t);var f=(t.flags&be)!==ne;if(!r&&!f)return o&&og(t,n,!1),Ii(e,t,c);var _=t.stateNode;Xl.current=t;var b;if(f&&typeof n.getDerivedStateFromError!="function")b=null,y_();else{zu(t);{if(Ar(!0),b=_.render(),t.mode&Sn){Yn(!0);try{_.render()}finally{Yn(!1)}}Ar(!1)}Ls()}return t.flags|=ze,e!==null&&f?xO(e,t,b,c):Cr(e,t,b,c),t.memoizedState=_.state,o&&og(t,n,!0),t.child}function F_(e){var t=e.stateNode;t.pendingContext?ag(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ag(e,t.context,!1),Vm(e,t.containerInfo)}function NO(e,t,n){if(F_(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var r=t.pendingProps,o=t.memoizedState,c=o.element;vg(e,t),vd(t,r,null,n);var f=t.memoizedState;t.stateNode;var _=f.element;if(o.isDehydrated){var b={element:_,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},O=t.updateQueue;if(O.baseState=b,t.memoizedState=b,t.flags&Wt){var C=new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");return N_(e,t,_,n,C)}else if(_!==c){var L=new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");return N_(e,t,_,n,L)}else{eO(t);var H=Hg(t,null,_,n);t.child=H;for(var Q=H;Q;)Q.flags=Q.flags&~Ce|jr,Q=Q.sibling}}else{if(ou(),_===c)return Ii(e,t,n);Cr(e,t,_,n)}return t.child}function N_(e,t,n,r,o){return ou(),Lm(o),t.flags|=Wt,Cr(e,t,n,r),t.child}function kO(e,t,n){jg(t),e===null&&Hm(t);var r=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,f=o.children,_=Jp(r,o);return _?f=null:c!==null&&Jp(r,c)&&(t.flags|=Ue),C_(e,t),Cr(e,t,f,n),t.child}function IO(e,t){return e===null&&Hm(t),null}function UO(e,t,n,r){e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ce);var o=t.pendingProps,c=n,f=c._payload,_=c._init,b=_(f);t.type=b;var O=t.tag=xM(b),C=ja(b,o),L;switch(O){case x:return Fh(t,b),t.type=b=wu(b),L=Ch(null,t,b,C,r),L;case j:return t.type=b=ov(b),L=P_(null,t,b,C,r),L;case _e:return t.type=b=sv(b),L=D_(null,t,b,C,r),L;case it:{if(t.type!==t.elementType){var H=b.propTypes;H&&Ha(H,C,"prop",St(b))}return L=M_(null,t,b,ja(b.type,C),r),L}}var Q="";throw b!==null&&typeof b=="object"&&b.$$typeof===ft&&(Q=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+b+". "+("Lazy element type must resolve to a class or function."+Q))}function HO(e,t,n,r,o){e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ce),t.tag=j;var c;return si(n)?(c=!0,od(t)):c=!1,nu(t,o),Sg(t,n,r),Pm(t,n,r,o),Ph(null,t,n,!0,c,o)}function LO(e,t,n,r){e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ce);var o=t.pendingProps,c;{var f=Zs(t,n,!1);c=eu(t,f)}nu(t,r);var _,b;zu(t);{if(n.prototype&&typeof n.prototype.render=="function"){var O=St(n)||"Unknown";Oh[O]||(h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",O,O),Oh[O]=!0)}t.mode&Sn&&La.recordLegacyContextWarning(t,null),Ar(!0),Xl.current=t,_=pu(null,t,n,o,c,r),b=mu(),Ar(!1)}if(Ls(),t.flags|=ze,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0){var C=St(n)||"Unknown";Bl[C]||(h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",C,C,C),Bl[C]=!0)}if(typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0){{var L=St(n)||"Unknown";Bl[L]||(h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",L,L,L),Bl[L]=!0)}t.tag=j,t.memoizedState=null,t.updateQueue=null;var H=!1;return si(n)?(H=!0,od(t)):H=!1,t.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_m(t),Tg(t,_),Pm(t,n,o,r),Ph(null,t,n,!0,H,r)}else{if(t.tag=x,t.mode&Sn){Yn(!0);try{_=pu(null,t,n,o,c,r),b=mu()}finally{Yn(!1)}}return nr()&&b&&Fm(t),Cr(null,t,_,r),Fh(t,n),t.child}}function Fh(e,t){{if(t&&t.childContextTypes&&h("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var n="",r=qa();r&&(n+=`

Check the render method of \``+r+"`.");var o=r||"",c=e._debugSource;c&&(o=c.fileName+":"+c.lineNumber),Ah[o]||(Ah[o]=!0,h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(typeof t.getDerivedStateFromProps=="function"){var f=St(t)||"Unknown";Mh[f]||(h("%s: Function components do not support getDerivedStateFromProps.",f),Mh[f]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var _=St(t)||"Unknown";Dh[_]||(h("%s: Function components do not support contextType.",_),Dh[_]=!0)}}}var Yd={dehydrated:null,treeContext:null,retryLane:Gn};function Gd(e){return{baseLanes:e,cachePool:AO(),transitions:null}}function k_(e,t){var n=null;return{baseLanes:lt(e.baseLanes,t),cachePool:n,transitions:e.transitions}}function jO(e,t,n,r){if(t!==null){var o=t.memoizedState;if(o===null)return!1}return Ym(e,Fl)}function I_(e,t){return Ac(e.childLanes,t)}function U_(e,t,n){var r=t.pendingProps;VM(t)&&(t.flags|=be);var o=Xa.current,c=!1,f=(t.flags&be)!==ne;if(f||jO(o,e)?(c=!0,t.flags&=~be):(e===null||e.memoizedState!==null)&&(o=cO(o,Xg)),o=lu(o),mo(t,o),e===null){Hm(t);var _=t.memoizedState;if(_!==null){var b=_.dehydrated;if(b!==null)return BO(t,b)}var O=r.children,C=r.fallback;if(c){var L=zO(t,O,C,n),H=t.child;return H.memoizedState=Gd(n),t.memoizedState=Yd,L}else return Nh(t,O)}else{var Q=e.memoizedState;if(Q!==null){var q=Q.dehydrated;if(q!==null)if(f){if(t.flags&Wt)return t.flags&=~Wt,qd(e,t,n,new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));if(t.memoizedState!==null)return t.child=e.child,t.flags|=be,null;var ae=r.children,Ae=r.fallback,Ke=XO(e,t,ae,Ae,n),He=t.child;return He.memoizedState=Gd(n),t.memoizedState=Yd,Ke}else return $O(e,t,q,Q,n);if(c){var Ot=r.fallback,Dt=r.children,B=j_(e,t,Dt,Ot,n),Z=t.child,X=e.child.memoizedState;return Z.memoizedState=X===null?Gd(n):k_(X,n),Z.childLanes=I_(e,n),t.memoizedState=Yd,B}else{var fe=r.children,Ee=L_(e,t,fe,n);return t.memoizedState=null,Ee}}else if(c){var Me=r.fallback,_t=r.children,Ut=j_(e,t,_t,Me,n),Gt=t.child,Ht=e.child.memoizedState;return Gt.memoizedState=Ht===null?Gd(n):k_(Ht,n),Gt.childLanes=I_(e,n),t.memoizedState=Yd,Ut}else{var dn=r.children,At=L_(e,t,dn,n);return t.memoizedState=null,At}}}function Nh(e,t,n){var r=e.mode,o={mode:"visible",children:t},c=kh(o,r);return c.return=e,e.child=c,c}function zO(e,t,n,r){var o=e.mode,c=e.child,f={mode:"hidden",children:t},_,b;return(o&vt)===qe&&c!==null?(_=c,_.childLanes=ce,_.pendingProps=f,e.mode&jt&&(_.actualDuration=0,_.actualStartTime=-1,_.selfBaseDuration=0,_.treeBaseDuration=0),b=wo(n,o,r,null)):(_=kh(f,o),b=wo(n,o,r,null)),_.return=e,b.return=e,_.sibling=b,e.child=_,b}function kh(e,t,n){return IE(e,t,ce,null)}function H_(e,t){return vs(e,t)}function L_(e,t,n,r){var o=e.child,c=o.sibling,f=H_(o,{mode:"visible",children:n});if((t.mode&vt)===qe&&(f.lanes=r),f.return=t,f.sibling=null,c!==null){var _=t.deletions;_===null?(t.deletions=[c],t.flags|=ve):_.push(c)}return t.child=f,f}function j_(e,t,n,r,o){var c=t.mode,f=e.child,_=f.sibling,b={mode:"hidden",children:n},O;if((c&vt)===qe&&t.child!==f){var C=t.child;O=C,O.childLanes=ce,O.pendingProps=b,t.mode&jt&&(O.actualDuration=0,O.actualStartTime=-1,O.selfBaseDuration=f.selfBaseDuration,O.treeBaseDuration=f.treeBaseDuration),t.deletions=null}else O=H_(f,b),O.subtreeFlags=f.subtreeFlags&Oi;var L;return _!==null?L=vs(_,r):(L=wo(r,c,o,null),L.flags|=Ce),L.return=t,O.return=t,O.sibling=L,t.child=O,L}function qd(e,t,n,r){r!==null&&Lm(r),su(t,e.child,null,n);var o=t.pendingProps,c=o.children,f=Nh(t,c);return f.flags|=Ce,t.memoizedState=null,f}function XO(e,t,n,r,o){var c=t.mode,f={mode:"visible",children:n},_=kh(f,c),b=wo(r,c,o,null);return b.flags|=Ce,_.return=t,b.return=t,_.sibling=b,t.child=_,(t.mode&vt)!==qe&&su(t,e.child,null,o),b}function BO(e,t,n){return(e.mode&vt)===qe?(h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=yt):nm(t)?e.lanes=Jo:e.lanes=aa,null}function $O(e,t,n,r,o){if(ZR(),(t.mode&vt)===qe)return qd(e,t,o,null);if(nm(n))return qd(e,t,o,new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."));var c=ia(o,e.childLanes);if($a||c){var f=sf();if(f!==null){var _=lw(f,o);if(_!==Gn&&_!==r.retryLane){r.retryLane=_;var b=tn;zn(e,_,b)}}return tv(),qd(e,t,o,new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."))}else if(Jy(n)){t.flags|=be,t.child=e.child;var O=pM.bind(null,e);return rR(n,O),null}else{tO(t,n,r.treeContext);var C=t.pendingProps,L=C.children,H=Nh(t,L);return H.flags|=jr,H}}function z_(e,t,n){e.lanes=lt(e.lanes,t);var r=e.alternate;r!==null&&(r.lanes=lt(r.lanes,t)),vm(e.return,t,n)}function VO(e,t,n){for(var r=t;r!==null;){if(r.tag===$e){var o=r.memoizedState;o!==null&&z_(r,n,e)}else if(r.tag===Ge)z_(r,n,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function WO(e){for(var t=e,n=null;t!==null;){var r=t.alternate;r!==null&&Od(r)===null&&(n=t),t=t.sibling}return n}function QO(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!xh[e])if(xh[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function YO(e,t){e!==void 0&&!Qd[e]&&(e!=="collapsed"&&e!=="hidden"?(Qd[e]=!0,h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Qd[e]=!0,h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function X_(e,t){{var n=Rt(e),r=!n&&typeof Aa(e)=="function";if(n||r){var o=n?"array":"iterable";return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,t,o),!1}}return!0}function GO(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(Rt(e)){for(var n=0;n<e.length;n++)if(!X_(e[n],n))return}else{var r=Aa(e);if(typeof r=="function"){var o=r.call(e);if(o)for(var c=o.next(),f=0;!c.done;c=o.next()){if(!X_(c.value,f))return;f++}}else h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function Ih(e,t,n,r,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=n,c.tailMode=o)}function B_(e,t,n){var r=t.pendingProps,o=r.revealOrder,c=r.tail,f=r.children;QO(o),YO(c,o),GO(f,o),Cr(e,t,f,n);var _=Xa.current,b=Ym(_,Fl);if(b)_=Gm(_,Fl),t.flags|=be;else{var O=e!==null&&(e.flags&be)!==ne;O&&VO(t,t.child,n),_=lu(_)}if(mo(t,_),(t.mode&vt)===qe)t.memoizedState=null;else switch(o){case"forwards":{var C=WO(t.child),L;C===null?(L=t.child,t.child=null):(L=C.sibling,C.sibling=null),Ih(t,!1,L,C,c);break}case"backwards":{var H=null,Q=t.child;for(t.child=null;Q!==null;){var q=Q.alternate;if(q!==null&&Od(q)===null){t.child=Q;break}var ae=Q.sibling;Q.sibling=H,H=Q,Q=ae}Ih(t,!0,H,null,c);break}case"together":{Ih(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function qO(e,t,n){Vm(t,t.stateNode.containerInfo);var r=t.pendingProps;return e===null?t.child=su(t,null,r,n):Cr(e,t,r,n),t.child}var $_=!1;function KO(e,t,n){var r=t.type,o=r._context,c=t.pendingProps,f=t.memoizedProps,_=c.value;{"value"in c||$_||($_=!0,h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var b=t.type.propTypes;b&&Ha(b,c,"prop","Context.Provider")}if(fg(t,o,_),f!==null){var O=f.value;if(ua(O,_)){if(f.children===c.children&&!ad())return Ii(e,t,n)}else UR(t,o,n)}var C=c.children;return Cr(e,t,C,n),t.child}var V_=!1;function JO(e,t,n){var r=t.type;r._context===void 0?r!==r.Consumer&&(V_||(V_=!0,h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,c=o.children;typeof c!="function"&&h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),nu(t,n);var f=Rn(r);zu(t);var _;return Xl.current=t,Ar(!0),_=c(f),Ar(!1),Ls(),t.flags|=ze,Cr(e,t,_,n),t.child}function $l(){$a=!0}function Ii(e,t,n){return e!==null&&(t.dependencies=e.dependencies),y_(),tc(t.lanes),ia(n,t.childLanes)?(sO(e,t),t.child):null}function ZO(e,t,n){{var r=t.return;if(r===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var o=r.child;if(o===null)throw new Error("Expected parent to have a child.");for(;o.sibling!==t;)if(o=o.sibling,o===null)throw new Error("Expected to find the previous sibling.");o.sibling=n}var c=r.deletions;return c===null?(r.deletions=[e],r.flags|=ve):c.push(e),n.flags|=Ce,n}}function Uh(e,t){var n=e.lanes;return!!ia(n,t)}function eD(e,t,n){switch(t.tag){case G:F_(t),t.stateNode,ou();break;case ee:jg(t);break;case j:{var r=t.type;si(r)&&od(t);break}case se:Vm(t,t.stateNode.containerInfo);break;case Be:{var o=t.memoizedProps.value,c=t.type._context;fg(t,c,o);break}case et:{var f=ia(n,t.childLanes);f&&(t.flags|=Y);{var _=t.stateNode;_.effectDuration=0,_.passiveEffectDuration=0}}break;case $e:{var b=t.memoizedState;if(b!==null){if(b.dehydrated!==null)return mo(t,lu(Xa.current)),t.flags|=be,null;var O=t.child,C=O.childLanes;if(ia(n,C))return U_(e,t,n);mo(t,lu(Xa.current));var L=Ii(e,t,n);return L!==null?L.sibling:null}else mo(t,lu(Xa.current));break}case Ge:{var H=(e.flags&be)!==ne,Q=ia(n,t.childLanes);if(H){if(Q)return B_(e,t,n);t.flags|=be}var q=t.memoizedState;if(q!==null&&(q.rendering=null,q.tail=null,q.lastEffect=null),mo(t,Xa.current),Q)break;return null}case We:case ut:return t.lanes=ce,x_(e,t,n)}return Ii(e,t,n)}function W_(e,t,n){if(t._debugNeedsRemount&&e!==null)return ZO(e,t,fv(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var r=e.memoizedProps,o=t.pendingProps;if(r!==o||ad()||t.type!==e.type)$a=!0;else{var c=Uh(e,n);if(!c&&(t.flags&be)===ne)return $a=!1,eD(e,t,n);(e.flags&Vo)!==ne?$a=!0:$a=!1}}else if($a=!1,nr()&&QR(t)){var f=t.index,_=YR();Og(t,_,f)}switch(t.lanes=ce,t.tag){case K:return LO(e,t,t.type,n);case Pe:{var b=t.elementType;return UO(e,t,b,n)}case x:{var O=t.type,C=t.pendingProps,L=t.elementType===O?C:ja(O,C);return Ch(e,t,O,L,n)}case j:{var H=t.type,Q=t.pendingProps,q=t.elementType===H?Q:ja(H,Q);return P_(e,t,H,q,n)}case G:return NO(e,t,n);case ee:return kO(e,t,n);case oe:return IO(e,t);case $e:return U_(e,t,n);case se:return qO(e,t,n);case _e:{var ae=t.type,Ae=t.pendingProps,Ke=t.elementType===ae?Ae:ja(ae,Ae);return D_(e,t,ae,Ke,n)}case Ve:return CO(e,t,n);case Ne:return PO(e,t,n);case et:return FO(e,t,n);case Be:return KO(e,t,n);case ge:return JO(e,t,n);case it:{var He=t.type,Ot=t.pendingProps,Dt=ja(He,Ot);if(t.type!==t.elementType){var B=He.propTypes;B&&Ha(B,Dt,"prop",St(He))}return Dt=ja(He.type,Dt),M_(e,t,He,Dt,n)}case Re:return A_(e,t,t.type,t.pendingProps,n);case Le:{var Z=t.type,X=t.pendingProps,fe=t.elementType===Z?X:ja(Z,X);return HO(e,t,Z,fe,n)}case Ge:return B_(e,t,n);case Xt:break;case We:return x_(e,t,n)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function tD(e,t,n){switch(Nm(t),t.tag){case j:{var r=t.type;si(r)&&id(t);var o=t.flags;return o&_r?(t.flags=o&~_r|be,(t.mode&jt)!==qe&&wh(t),t):null}case G:{t.stateNode,uu(t),lm(t),Km();var c=t.flags;return(c&_r)!==ne&&(c&be)===ne?(t.flags=c&~_r|be,t):null}case ee:return Qm(t),null;case $e:{cu(t);var f=t.memoizedState;if(f!==null&&f.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");ou()}var _=t.flags;return _&_r?(t.flags=_&~_r|be,(t.mode&jt)!==qe&&wh(t),t):null}case Ge:return cu(t),null;case se:return uu(t),null;case Be:var b=t.type._context;return hm(b,t),null;case We:case ut:return ev(t),null;case xt:return null;default:return null}}function Q_(e,t,n){switch(Nm(t),t.tag){case j:{var r=t.type.childContextTypes;r!=null&&id(t);break}case G:{t.stateNode,uu(t),lm(t),Km();break}case ee:{Qm(t);break}case se:uu(t);break;case $e:cu(t);break;case Ge:cu(t);break;case Be:var o=t.type._context;hm(o,t);break;case We:case ut:ev(t);break}}var Y_=null;Y_=new Set;var Kd=!1,ir=!1,nD=typeof WeakSet=="function"?WeakSet:Set,Fe=null,vu=null,yu=null;function rD(e){M(null,function(){throw e}),le()}var aD=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&jt)try{fi(),t.componentWillUnmount()}finally{di(e)}else t.componentWillUnmount()};function G_(e,t){try{yo(kn,e)}catch(n){Yt(e,t,n)}}function Hh(e,t,n){try{aD(e,n)}catch(r){Yt(e,t,r)}}function iD(e,t,n){try{n.componentDidMount()}catch(r){Yt(e,t,r)}}function q_(e,t){try{J_(e)}catch(n){Yt(e,t,n)}}function gu(e,t){var n=e.ref;if(n!==null)if(typeof n=="function"){var r;try{if(Vr&&Wr&&e.mode&jt)try{fi(),r=n(null)}finally{di(e)}else r=n(null)}catch(o){Yt(e,t,o)}typeof r=="function"&&h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",rt(e))}else n.current=null}function Jd(e,t,n){try{n()}catch(r){Yt(e,t,r)}}var K_=!1;function oD(e,t){MS(e.containerInfo),Fe=t,sD();var n=K_;return K_=!1,n}function sD(){for(;Fe!==null;){var e=Fe,t=e.child;(e.subtreeFlags&Lu)!==ne&&t!==null?(t.return=e,Fe=t):uD()}}function uD(){for(;Fe!==null;){var e=Fe;nn(e);try{lD(e)}catch(n){Yt(e,e.return,n)}Tn();var t=e.sibling;if(t!==null){t.return=e.return,Fe=t;return}Fe=e.return}}function lD(e){var t=e.alternate,n=e.flags;if((n&yn)!==ne){switch(nn(e),e.tag){case x:case _e:case Re:break;case j:{if(t!==null){var r=t.memoizedProps,o=t.memoizedState,c=e.stateNode;e.type===e.elementType&&!ds&&(c.props!==e.memoizedProps&&h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",rt(e)||"instance"),c.state!==e.memoizedState&&h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",rt(e)||"instance"));var f=c.getSnapshotBeforeUpdate(e.elementType===e.type?r:ja(e.type,r),o);{var _=Y_;f===void 0&&!_.has(e.type)&&(_.add(e.type),h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",rt(e)))}c.__reactInternalSnapshotBeforeUpdate=f}break}case G:{{var b=e.stateNode;ZS(b.containerInfo)}break}case ee:case oe:case se:case Le:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}Tn()}}function Va(e,t,n){var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next,f=c;do{if((f.tag&e)===e){var _=f.destroy;f.destroy=void 0,_!==void 0&&((e&rr)!==Xr?Nb(t):(e&kn)!==Xr&&Nv(t),(e&ui)!==Xr&&rc(!0),Jd(t,n,_),(e&ui)!==Xr&&rc(!1),(e&rr)!==Xr?kb():(e&kn)!==Xr&&kv())}f=f.next}while(f!==c)}}function yo(e,t){var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next,c=o;do{if((c.tag&e)===e){(e&rr)!==Xr?Pb(t):(e&kn)!==Xr&&Ib(t);var f=c.create;(e&ui)!==Xr&&rc(!0),c.destroy=f(),(e&ui)!==Xr&&rc(!1),(e&rr)!==Xr?Fb():(e&kn)!==Xr&&Ub();{var _=c.destroy;if(_!==void 0&&typeof _!="function"){var b=void 0;(c.tag&kn)!==ne?b="useLayoutEffect":(c.tag&ui)!==ne?b="useInsertionEffect":b="useEffect";var O=void 0;_===null?O=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof _.then=="function"?O=`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:O=" You returned: "+_,h("%s must not return anything besides a function, which is used for clean-up.%s",b,O)}}}c=c.next}while(c!==o)}}function cD(e,t){if((t.flags&Y)!==ne)switch(t.tag){case et:{var n=t.stateNode.passiveEffectDuration,r=t.memoizedProps,o=r.id,c=r.onPostCommit,f=h_(),_=t.alternate===null?"mount":"update";m_()&&(_="nested-update"),typeof c=="function"&&c(o,_,n,f);var b=t.return;e:for(;b!==null;){switch(b.tag){case G:var O=b.stateNode;O.passiveEffectDuration+=n;break e;case et:var C=b.stateNode;C.passiveEffectDuration+=n;break e}b=b.return}break}}}function dD(e,t,n,r){if((n.flags&ju)!==ne)switch(n.tag){case x:case _e:case Re:{if(!ir)if(n.mode&jt)try{fi(),yo(kn|Nn,n)}finally{di(n)}else yo(kn|Nn,n);break}case j:{var o=n.stateNode;if(n.flags&Y&&!ir)if(t===null)if(n.type===n.elementType&&!ds&&(o.props!==n.memoizedProps&&h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",rt(n)||"instance"),o.state!==n.memoizedState&&h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",rt(n)||"instance")),n.mode&jt)try{fi(),o.componentDidMount()}finally{di(n)}else o.componentDidMount();else{var c=n.elementType===n.type?t.memoizedProps:ja(n.type,t.memoizedProps),f=t.memoizedState;if(n.type===n.elementType&&!ds&&(o.props!==n.memoizedProps&&h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",rt(n)||"instance"),o.state!==n.memoizedState&&h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",rt(n)||"instance")),n.mode&jt)try{fi(),o.componentDidUpdate(c,f,o.__reactInternalSnapshotBeforeUpdate)}finally{di(n)}else o.componentDidUpdate(c,f,o.__reactInternalSnapshotBeforeUpdate)}var _=n.updateQueue;_!==null&&(n.type===n.elementType&&!ds&&(o.props!==n.memoizedProps&&h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",rt(n)||"instance"),o.state!==n.memoizedState&&h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",rt(n)||"instance")),gg(n,_,o));break}case G:{var b=n.updateQueue;if(b!==null){var O=null;if(n.child!==null)switch(n.child.tag){case ee:O=n.child.stateNode;break;case j:O=n.child.stateNode;break}gg(n,b,O)}break}case ee:{var C=n.stateNode;if(t===null&&n.flags&Y){var L=n.type,H=n.memoizedProps;LS(C,L,H)}break}case oe:break;case se:break;case et:{{var Q=n.memoizedProps,q=Q.onCommit,ae=Q.onRender,Ae=n.stateNode.effectDuration,Ke=h_(),He=t===null?"mount":"update";m_()&&(He="nested-update"),typeof ae=="function"&&ae(n.memoizedProps.id,He,n.actualDuration,n.treeBaseDuration,n.actualStartTime,Ke);{typeof q=="function"&&q(n.memoizedProps.id,He,Ae,Ke),sM(n);var Ot=n.return;e:for(;Ot!==null;){switch(Ot.tag){case G:var Dt=Ot.stateNode;Dt.effectDuration+=Ae;break e;case et:var B=Ot.stateNode;B.effectDuration+=Ae;break e}Ot=Ot.return}}}break}case $e:{_D(e,n);break}case Ge:case Le:case Xt:case We:case ut:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}ir||n.flags&ln&&J_(n)}function fD(e){switch(e.tag){case x:case _e:case Re:{if(e.mode&jt)try{fi(),G_(e,e.return)}finally{di(e)}else G_(e,e.return);break}case j:{var t=e.stateNode;typeof t.componentDidMount=="function"&&iD(e,e.return,t),q_(e,e.return);break}case ee:{q_(e,e.return);break}}}function pD(e,t){for(var n=null,r=e;;){if(r.tag===ee){if(n===null){n=r;try{var o=r.stateNode;t?GS(o):KS(r.stateNode,r.memoizedProps)}catch(f){Yt(e,e.return,f)}}}else if(r.tag===oe){if(n===null)try{var c=r.stateNode;t?qS(c):JS(c,r.memoizedProps)}catch(f){Yt(e,e.return,f)}}else if(!((r.tag===We||r.tag===ut)&&r.memoizedState!==null&&r!==e)){if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}}function J_(e){var t=e.ref;if(t!==null){var n=e.stateNode,r;switch(e.tag){case ee:r=n;break;default:r=n}if(typeof t=="function"){var o;if(e.mode&jt)try{fi(),o=t(r)}finally{di(e)}else o=t(r);typeof o=="function"&&h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",rt(e))}else t.hasOwnProperty("current")||h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",rt(e)),t.current=r}}function mD(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function Z_(e){var t=e.alternate;t!==null&&(e.alternate=null,Z_(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===ee){var n=e.stateNode;n!==null&&AR(n)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function hD(e){for(var t=e.return;t!==null;){if(eE(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function eE(e){return e.tag===ee||e.tag===G||e.tag===se}function tE(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||eE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==ee&&t.tag!==oe&&t.tag!==F;){if(t.flags&Ce||t.child===null||t.tag===se)continue e;t.child.return=t,t=t.child}if(!(t.flags&Ce))return t.stateNode}}function vD(e){var t=hD(e);switch(t.tag){case ee:{var n=t.stateNode;t.flags&Ue&&(Ky(n),t.flags&=~Ue);var r=tE(e);jh(e,r,n);break}case G:case se:{var o=t.stateNode.containerInfo,c=tE(e);Lh(e,c,o);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Lh(e,t,n){var r=e.tag,o=r===ee||r===oe;if(o){var c=e.stateNode;t?VS(n,c,t):BS(n,c)}else if(r!==se){var f=e.child;if(f!==null){Lh(f,t,n);for(var _=f.sibling;_!==null;)Lh(_,t,n),_=_.sibling}}}function jh(e,t,n){var r=e.tag,o=r===ee||r===oe;if(o){var c=e.stateNode;t?$S(n,c,t):XS(n,c)}else if(r!==se){var f=e.child;if(f!==null){jh(f,t,n);for(var _=f.sibling;_!==null;)jh(_,t,n),_=_.sibling}}}var or=null,Wa=!1;function yD(e,t,n){{var r=t;e:for(;r!==null;){switch(r.tag){case ee:{or=r.stateNode,Wa=!1;break e}case G:{or=r.stateNode.containerInfo,Wa=!0;break e}case se:{or=r.stateNode.containerInfo,Wa=!0;break e}}r=r.return}if(or===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");nE(e,t,n),or=null,Wa=!1}mD(n)}function go(e,t,n){for(var r=n.child;r!==null;)nE(e,t,r),r=r.sibling}function nE(e,t,n){switch(Mb(n),n.tag){case ee:ir||gu(n,t);case oe:{{var r=or,o=Wa;or=null,go(e,t,n),or=r,Wa=o,or!==null&&(Wa?QS(or,n.stateNode):WS(or,n.stateNode))}return}case F:{or!==null&&(Wa?YS(or,n.stateNode):tm(or,n.stateNode));return}case se:{{var c=or,f=Wa;or=n.stateNode.containerInfo,Wa=!0,go(e,t,n),or=c,Wa=f}return}case x:case _e:case it:case Re:{if(!ir){var _=n.updateQueue;if(_!==null){var b=_.lastEffect;if(b!==null){var O=b.next,C=O;do{var L=C,H=L.destroy,Q=L.tag;H!==void 0&&((Q&ui)!==Xr?Jd(n,t,H):(Q&kn)!==Xr&&(Nv(n),n.mode&jt?(fi(),Jd(n,t,H),di(n)):Jd(n,t,H),kv())),C=C.next}while(C!==O)}}}go(e,t,n);return}case j:{if(!ir){gu(n,t);var q=n.stateNode;typeof q.componentWillUnmount=="function"&&Hh(n,t,q)}go(e,t,n);return}case Xt:{go(e,t,n);return}case We:{if(n.mode&vt){var ae=ir;ir=ae||n.memoizedState!==null,go(e,t,n),ir=ae}else go(e,t,n);break}default:{go(e,t,n);return}}}function gD(e){e.memoizedState}function _D(e,t){var n=t.memoizedState;if(n===null){var r=t.alternate;if(r!==null){var o=r.memoizedState;if(o!==null){var c=o.dehydrated;c!==null&&fR(c)}}}}function rE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nD),t.forEach(function(r){var o=mM.bind(null,e,r);if(!n.has(r)){if(n.add(r),Ia)if(vu!==null&&yu!==null)nc(yu,vu);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");r.then(o,o)}})}}function ED(e,t,n){vu=n,yu=e,nn(t),aE(t,e),nn(t),vu=null,yu=null}function Qa(e,t,n){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];try{yD(e,t,c)}catch(b){Yt(c,t,b)}}var f=Bi();if(t.subtreeFlags&ni)for(var _=t.child;_!==null;)nn(_),aE(_,e),_=_.sibling;nn(f)}function aE(e,t,n){var r=e.alternate,o=e.flags;switch(e.tag){case x:case _e:case it:case Re:{if(Qa(t,e),pi(e),o&Y){try{Va(ui|Nn,e,e.return),yo(ui|Nn,e)}catch(Ee){Yt(e,e.return,Ee)}if(e.mode&jt){try{fi(),Va(kn|Nn,e,e.return)}catch(Ee){Yt(e,e.return,Ee)}di(e)}else try{Va(kn|Nn,e,e.return)}catch(Ee){Yt(e,e.return,Ee)}}return}case j:{Qa(t,e),pi(e),o&ln&&r!==null&&gu(r,r.return);return}case ee:{Qa(t,e),pi(e),o&ln&&r!==null&&gu(r,r.return);{if(e.flags&Ue){var c=e.stateNode;try{Ky(c)}catch(Ee){Yt(e,e.return,Ee)}}if(o&Y){var f=e.stateNode;if(f!=null){var _=e.memoizedProps,b=r!==null?r.memoizedProps:_,O=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{jS(f,C,O,b,_,e)}catch(Ee){Yt(e,e.return,Ee)}}}}return}case oe:{if(Qa(t,e),pi(e),o&Y){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var L=e.stateNode,H=e.memoizedProps,Q=r!==null?r.memoizedProps:H;try{zS(L,Q,H)}catch(Ee){Yt(e,e.return,Ee)}}return}case G:{if(Qa(t,e),pi(e),o&Y&&r!==null){var q=r.memoizedState;if(q.isDehydrated)try{dR(t.containerInfo)}catch(Ee){Yt(e,e.return,Ee)}}return}case se:{Qa(t,e),pi(e);return}case $e:{Qa(t,e),pi(e);var ae=e.child;if(ae.flags&gr){var Ae=ae.memoizedState,Ke=Ae!==null;if(Ke){var He=ae.alternate!==null&&ae.alternate.memoizedState!==null;He||ZD()}}if(o&Y){try{gD(e)}catch(Ee){Yt(e,e.return,Ee)}rE(e)}return}case We:{var Ot=r!==null&&r.memoizedState!==null;if(e.mode&vt){var Dt=ir;ir=Dt||Ot,Qa(t,e),ir=Dt}else Qa(t,e);if(pi(e),o&gr){var B=e.memoizedState,Z=B!==null,X=e;if(pD(X,Z),Z&&!Ot&&(X.mode&vt)!==qe){Fe=X;for(var fe=X.child;fe!==null;)Fe=fe,wD(fe),fe=fe.sibling}}return}case Ge:{Qa(t,e),pi(e),o&Y&&rE(e);return}case Xt:return;default:{Qa(t,e),pi(e);return}}}function pi(e){var t=e.flags;if(t&Ce){try{vD(e)}catch(n){Yt(e,e.return,n)}e.flags&=~Ce}t&jr&&(e.flags&=~jr)}function bD(e,t,n){vu=n,yu=t,Fe=e,iE(e,t,n),vu=null,yu=null}function iE(e,t,n){for(var r=(e.mode&vt)!==qe;Fe!==null;){var o=Fe,c=o.child;if(o.tag===We&&r){var f=o.memoizedState!==null,_=f||Kd;if(_){zh(e,t,n);continue}else{var b=o.alternate,O=b!==null&&b.memoizedState!==null,C=O||ir,L=Kd,H=ir;Kd=_,ir=C,ir&&!H&&(Fe=o,TD(o));for(var Q=c;Q!==null;)Fe=Q,iE(Q,t,n),Q=Q.sibling;Fe=o,Kd=L,ir=H,zh(e,t,n);continue}}(o.subtreeFlags&ju)!==ne&&c!==null?(c.return=o,Fe=c):zh(e,t,n)}}function zh(e,t,n){for(;Fe!==null;){var r=Fe;if((r.flags&ju)!==ne){var o=r.alternate;nn(r);try{dD(t,o,r,n)}catch(f){Yt(r,r.return,f)}Tn()}if(r===e){Fe=null;return}var c=r.sibling;if(c!==null){c.return=r.return,Fe=c;return}Fe=r.return}}function wD(e){for(;Fe!==null;){var t=Fe,n=t.child;switch(t.tag){case x:case _e:case it:case Re:{if(t.mode&jt)try{fi(),Va(kn,t,t.return)}finally{di(t)}else Va(kn,t,t.return);break}case j:{gu(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Hh(t,t.return,r);break}case ee:{gu(t,t.return);break}case We:{var o=t.memoizedState!==null;if(o){oE(e);continue}break}}n!==null?(n.return=t,Fe=n):oE(e)}}function oE(e){for(;Fe!==null;){var t=Fe;if(t===e){Fe=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Fe=n;return}Fe=t.return}}function TD(e){for(;Fe!==null;){var t=Fe,n=t.child;if(t.tag===We){var r=t.memoizedState!==null;if(r){sE(e);continue}}n!==null?(n.return=t,Fe=n):sE(e)}}function sE(e){for(;Fe!==null;){var t=Fe;nn(t);try{fD(t)}catch(r){Yt(t,t.return,r)}if(Tn(),t===e){Fe=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Fe=n;return}Fe=t.return}}function SD(e,t,n,r){Fe=t,RD(t,e,n,r)}function RD(e,t,n,r){for(;Fe!==null;){var o=Fe,c=o.child;(o.subtreeFlags&Us)!==ne&&c!==null?(c.return=o,Fe=c):OD(e,t,n,r)}}function OD(e,t,n,r){for(;Fe!==null;){var o=Fe;if((o.flags&Pn)!==ne){nn(o);try{DD(t,o,n,r)}catch(f){Yt(o,o.return,f)}Tn()}if(o===e){Fe=null;return}var c=o.sibling;if(c!==null){c.return=o.return,Fe=c;return}Fe=o.return}}function DD(e,t,n,r){switch(t.tag){case x:case _e:case Re:{if(t.mode&jt){bh();try{yo(rr|Nn,t)}finally{Eh(t)}}else yo(rr|Nn,t);break}}}function MD(e){Fe=e,AD()}function AD(){for(;Fe!==null;){var e=Fe,t=e.child;if((Fe.flags&ve)!==ne){var n=e.deletions;if(n!==null){for(var r=0;r<n.length;r++){var o=n[r];Fe=o,PD(o,e)}{var c=e.alternate;if(c!==null){var f=c.child;if(f!==null){c.child=null;do{var _=f.sibling;f.sibling=null,f=_}while(f!==null)}}}Fe=e}}(e.subtreeFlags&Us)!==ne&&t!==null?(t.return=e,Fe=t):xD()}}function xD(){for(;Fe!==null;){var e=Fe;(e.flags&Pn)!==ne&&(nn(e),CD(e),Tn());var t=e.sibling;if(t!==null){t.return=e.return,Fe=t;return}Fe=e.return}}function CD(e){switch(e.tag){case x:case _e:case Re:{e.mode&jt?(bh(),Va(rr|Nn,e,e.return),Eh(e)):Va(rr|Nn,e,e.return);break}}}function PD(e,t){for(;Fe!==null;){var n=Fe;nn(n),ND(n,t),Tn();var r=n.child;r!==null?(r.return=n,Fe=r):FD(e)}}function FD(e){for(;Fe!==null;){var t=Fe,n=t.sibling,r=t.return;if(Z_(t),t===e){Fe=null;return}if(n!==null){n.return=r,Fe=n;return}Fe=r}}function ND(e,t){switch(e.tag){case x:case _e:case Re:{e.mode&jt?(bh(),Va(rr,e,t),Eh(e)):Va(rr,e,t);break}}}function kD(e){switch(e.tag){case x:case _e:case Re:{try{yo(kn|Nn,e)}catch(n){Yt(e,e.return,n)}break}case j:{var t=e.stateNode;try{t.componentDidMount()}catch(n){Yt(e,e.return,n)}break}}}function ID(e){switch(e.tag){case x:case _e:case Re:{try{yo(rr|Nn,e)}catch(t){Yt(e,e.return,t)}break}}}function UD(e){switch(e.tag){case x:case _e:case Re:{try{Va(kn|Nn,e,e.return)}catch(n){Yt(e,e.return,n)}break}case j:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Hh(e,e.return,t);break}}}function HD(e){switch(e.tag){case x:case _e:case Re:try{Va(rr|Nn,e,e.return)}catch(t){Yt(e,e.return,t)}}}if(typeof Symbol=="function"&&Symbol.for){var Vl=Symbol.for;Vl("selector.component"),Vl("selector.has_pseudo_class"),Vl("selector.role"),Vl("selector.test_id"),Vl("selector.text")}var LD=[];function jD(){LD.forEach(function(e){return e()})}var zD=s.ReactCurrentActQueue;function XD(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT!="undefined"?IS_REACT_ACT_ENVIRONMENT:void 0,n=typeof jest!="undefined";return n&&t!==!1}}function uE(){{var e=typeof IS_REACT_ACT_ENVIRONMENT!="undefined"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&zD.current!==null&&h("The current testing environment is not configured to support act(...)"),e}}var BD=Math.ceil,Xh=s.ReactCurrentDispatcher,Bh=s.ReactCurrentOwner,sr=s.ReactCurrentBatchConfig,Ya=s.ReactCurrentActQueue,Hn=0,lE=1,Sr=2,Ga=4,Ui=0,Wl=1,fs=2,Zd=3,Ql=4,cE=5,$h=6,gt=Hn,Rr=null,cn=null,Ln=ce,mi=ce,Vh=oo(ce),jn=Ui,Yl=null,ef=ce,Gl=ce,tf=ce,ql=null,Br=null,Wh=0,dE=500,fE=1/0,$D=500,Hi=null;function Kl(){fE=Qn()+$D}function pE(){return fE}var nf=!1,Qh=null,_u=null,ps=!1,_o=null,Jl=ce,Yh=[],Gh=null,VD=50,Zl=0,qh=null,Kh=!1,rf=!1,WD=50,Eu=0,af=null,ec=tn,of=ce,mE=!1;function sf(){return Rr}function Pr(){return(gt&(Sr|Ga))!==Hn?Qn():(ec!==tn||(ec=Qn()),ec)}function Eo(e){var t=e.mode;if((t&vt)===qe)return yt;if((gt&Sr)!==Hn&&Ln!==ce)return Qu(Ln);var n=kR()!==NR;if(n){if(sr.transition!==null){var r=sr.transition;r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(e)}return of===Gn&&(of=Bv()),of}var o=Ua();if(o!==Gn)return o;var c=kS();return c}function QD(e){var t=e.mode;return(t&vt)===qe?yt:iw()}function zn(e,t,n){vM(),mE&&h("useInsertionEffect must not schedule updates.");var r=uf(e,t);return r===null?null:(Kh&&(rf=!0),Yu(r,t,n),(gt&Sr)!==ce&&r===Rr?_M(e):(Ia&&Wv(r,e,t),EM(e),r===Rr&&((gt&Sr)===Hn&&(Gl=lt(Gl,t)),jn===Ql&&bo(r,Ln)),$r(r,n),t===yt&&gt===Hn&&(e.mode&vt)===qe&&!Ya.isBatchingLegacy&&(Kl(),ug())),r)}function YD(e,t,n){var r=e.current;r.lanes=t,Yu(e,t,n),$r(e,n)}function uf(e,t){e.lanes=lt(e.lanes,t);var n=e.alternate;n!==null&&(n.lanes=lt(n.lanes,t)),n===null&&(e.flags&(Ce|jr))!==ne&&AE(e);for(var r=e,o=e.return;o!==null;)o.childLanes=lt(o.childLanes,t),n=o.alternate,n!==null?n.childLanes=lt(n.childLanes,t):(o.flags&(Ce|jr))!==ne&&AE(e),r=o,o=o.return;if(r.tag===G){var c=r.stateNode;return c}else return null}function hE(e,t){return(Rr!==null||LR())&&(e.mode&vt)!==qe&&(gt&Sr)===Hn}function $r(e,t){var n=e.callbackNode;Zb(e,t);var r=Dc(e,e===Rr?Ln:ce);if(r===ce){n!==null&&CE(n),e.callbackNode=null,e.callbackPriority=Gn;return}var o=es(r),c=e.callbackPriority;if(c===o&&!(Ya.current!==null&&n!==av)){n==null&&c!==yt&&h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}n!=null&&CE(n);var f;if(o===yt)e.tag===so?(Ya.isBatchingLegacy!==null&&(Ya.didScheduleLegacyUpdate=!0),PR(gE.bind(null,e))):sg(gE.bind(null,e)),Ya.current!==null?Ya.current.push(uo):US(function(){gt===Hn&&uo()}),f=null;else{var _;switch(Gv(r)){case oa:_=Tc;break;case Mi:_=Kf;break;case Ai:_=Ko;break;case xc:_=Jf;break;default:_=Ko;break}f=iv(_,vE.bind(null,e))}e.callbackPriority=o,e.callbackNode=f}function vE(e,t){if(wO(),ec=tn,of=ce,(gt&(Sr|Ga))!==Hn)throw new Error("Should not already be working.");var n=e.callbackNode,r=ji();if(r&&e.callbackNode!==n)return null;var o=Dc(e,e===Rr?Ln:ce);if(o===ce)return null;var c=!Mc(e,o)&&!aw(e,o)&&!t,f=c?aM(e,o):cf(e,o);if(f!==Ui){if(f===fs){var _=Ep(e);_!==ce&&(o=_,f=Jh(e,_))}if(f===Wl){var b=Yl;throw ms(e,ce),bo(e,o),$r(e,Qn()),b}if(f===$h)bo(e,o);else{var O=!Mc(e,o),C=e.current.alternate;if(O&&!qD(C)){if(f=cf(e,o),f===fs){var L=Ep(e);L!==ce&&(o=L,f=Jh(e,L))}if(f===Wl){var H=Yl;throw ms(e,ce),bo(e,o),$r(e,Qn()),H}}e.finishedWork=C,e.finishedLanes=o,GD(e,f,o)}}return $r(e,Qn()),e.callbackNode===n?vE.bind(null,e):null}function Jh(e,t){var n=ql;if(Cc(e)){var r=ms(e,t);r.flags|=Wt,RR(e.containerInfo)}var o=cf(e,t);if(o!==fs){var c=Br;Br=n,c!==null&&yE(c)}return o}function yE(e){Br===null?Br=e:Br.push.apply(Br,e)}function GD(e,t,n){switch(t){case Ui:case Wl:throw new Error("Root did not complete. This is a bug in React.");case fs:{hs(e,Br,Hi);break}case Zd:{if(bo(e,n),zv(n)&&!PE()){var r=Wh+dE-Qn();if(r>10){var o=Dc(e,ce);if(o!==ce)break;var c=e.suspendedLanes;if(!Bs(c,n)){Pr(),Vv(e,c);break}e.timeoutHandle=Zp(hs.bind(null,e,Br,Hi),r);break}}hs(e,Br,Hi);break}case Ql:{if(bo(e,n),rw(n))break;if(!PE()){var f=Kb(e,n),_=f,b=Qn()-_,O=hM(b)-b;if(O>10){e.timeoutHandle=Zp(hs.bind(null,e,Br,Hi),O);break}}hs(e,Br,Hi);break}case cE:{hs(e,Br,Hi);break}default:throw new Error("Unknown root exit status.")}}function qD(e){for(var t=e;;){if(t.flags&Is){var n=t.updateQueue;if(n!==null){var r=n.stores;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot,_=c.value;try{if(!ua(f(),_))return!1}catch{return!1}}}}var b=t.child;if(t.subtreeFlags&Is&&b!==null){b.return=t,t=b;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function bo(e,t){t=Ac(t,tf),t=Ac(t,Gl),sw(e,t)}function gE(e){if(TO(),(gt&(Sr|Ga))!==Hn)throw new Error("Should not already be working.");ji();var t=Dc(e,ce);if(!ia(t,yt))return $r(e,Qn()),null;var n=cf(e,t);if(e.tag!==so&&n===fs){var r=Ep(e);r!==ce&&(t=r,n=Jh(e,r))}if(n===Wl){var o=Yl;throw ms(e,ce),bo(e,t),$r(e,Qn()),o}if(n===$h)throw new Error("Root did not complete. This is a bug in React.");var c=e.current.alternate;return e.finishedWork=c,e.finishedLanes=t,hs(e,Br,Hi),$r(e,Qn()),null}function KD(e,t){t!==ce&&(Sp(e,lt(t,yt)),$r(e,Qn()),(gt&(Sr|Ga))===Hn&&(Kl(),uo()))}function Zh(e,t){var n=gt;gt|=lE;try{return e(t)}finally{gt=n,gt===Hn&&!Ya.isBatchingLegacy&&(Kl(),ug())}}function JD(e,t,n,r,o){var c=Ua(),f=sr.transition;try{return sr.transition=null,qn(oa),e(t,n,r,o)}finally{qn(c),sr.transition=f,gt===Hn&&Kl()}}function Li(e){_o!==null&&_o.tag===so&&(gt&(Sr|Ga))===Hn&&ji();var t=gt;gt|=lE;var n=sr.transition,r=Ua();try{return sr.transition=null,qn(oa),e?e():void 0}finally{qn(r),sr.transition=n,gt=t,(gt&(Sr|Ga))===Hn&&uo()}}function _E(){return(gt&(Sr|Ga))!==Hn}function lf(e,t){wr(Vh,mi,e),mi=lt(mi,t)}function ev(e){mi=Vh.current,br(Vh,e)}function ms(e,t){e.finishedWork=null,e.finishedLanes=ce;var n=e.timeoutHandle;if(n!==em&&(e.timeoutHandle=em,IS(n)),cn!==null)for(var r=cn.return;r!==null;){var o=r.alternate;Q_(o,r),r=r.return}Rr=e;var c=vs(e.current,null);return cn=c,Ln=mi=t,jn=Ui,Yl=null,ef=ce,Gl=ce,tf=ce,ql=null,Br=null,jR(),La.discardPendingWarnings(),c}function EE(e,t){do{var n=cn;try{if(dd(),$g(),Tn(),Bh.current=null,n===null||n.return===null){jn=Wl,Yl=t,cn=null;return}if(Vr&&n.mode&jt&&Vd(n,!0),ma)if(Ls(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var r=t;Lb(n,r,Ln)}else Hb(n,t,Ln);MO(e,n.return,n,t,Ln),SE(n)}catch(o){t=o,cn===n&&n!==null?(n=n.return,cn=n):n=cn;continue}return}while(!0)}function bE(){var e=Xh.current;return Xh.current=jd,e===null?jd:e}function wE(e){Xh.current=e}function ZD(){Wh=Qn()}function tc(e){ef=lt(e,ef)}function eM(){jn===Ui&&(jn=Zd)}function tv(){(jn===Ui||jn===Zd||jn===fs)&&(jn=Ql),Rr!==null&&(bp(ef)||bp(Gl))&&bo(Rr,Ln)}function tM(e){jn!==Ql&&(jn=fs),ql===null?ql=[e]:ql.push(e)}function nM(){return jn===Ui}function cf(e,t){var n=gt;gt|=Sr;var r=bE();if(Rr!==e||Ln!==t){if(Ia){var o=e.memoizedUpdaters;o.size>0&&(nc(e,Ln),o.clear()),Qv(e,t)}Hi=Yv(),ms(e,t)}Iv(t);do try{rM();break}catch(c){EE(e,c)}while(!0);if(dd(),gt=n,wE(r),cn!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return Uv(),Rr=null,Ln=ce,jn}function rM(){for(;cn!==null;)TE(cn)}function aM(e,t){var n=gt;gt|=Sr;var r=bE();if(Rr!==e||Ln!==t){if(Ia){var o=e.memoizedUpdaters;o.size>0&&(nc(e,Ln),o.clear()),Qv(e,t)}Hi=Yv(),Kl(),ms(e,t)}Iv(t);do try{iM();break}catch(c){EE(e,c)}while(!0);return dd(),wE(r),gt=n,cn!==null?($b(),Ui):(Uv(),Rr=null,Ln=ce,jn)}function iM(){for(;cn!==null&&!gb();)TE(cn)}function TE(e){var t=e.alternate;nn(e);var n;(e.mode&jt)!==qe?(_h(e),n=nv(t,e,mi),Vd(e,!0)):n=nv(t,e,mi),Tn(),e.memoizedProps=e.pendingProps,n===null?SE(e):cn=n,Bh.current=null}function SE(e){var t=e;do{var n=t.alternate,r=t.return;if((t.flags&Ji)===ne){nn(t);var o=void 0;if((t.mode&jt)===qe?o=O_(n,t,mi):(_h(t),o=O_(n,t,mi),Vd(t,!1)),Tn(),o!==null){cn=o;return}}else{var c=tD(n,t);if(c!==null){c.flags&=Fn,cn=c;return}if((t.mode&jt)!==qe){Vd(t,!1);for(var f=t.actualDuration,_=t.child;_!==null;)f+=_.actualDuration,_=_.sibling;t.actualDuration=f}if(r!==null)r.flags|=Ji,r.subtreeFlags=ne,r.deletions=null;else{jn=$h,cn=null;return}}var b=t.sibling;if(b!==null){cn=b;return}t=r,cn=t}while(t!==null);jn===Ui&&(jn=cE)}function hs(e,t,n){var r=Ua(),o=sr.transition;try{sr.transition=null,qn(oa),oM(e,t,n,r)}finally{sr.transition=o,qn(r)}return null}function oM(e,t,n,r){do ji();while(_o!==null);if(yM(),(gt&(Sr|Ga))!==Hn)throw new Error("Should not already be working.");var o=e.finishedWork,c=e.finishedLanes;if(Cb(c),o===null)return Fv(),null;if(c===ce&&h("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=ce,o===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=Gn;var f=lt(o.lanes,o.childLanes);uw(e,f),e===Rr&&(Rr=null,cn=null,Ln=ce),((o.subtreeFlags&Us)!==ne||(o.flags&Us)!==ne)&&(ps||(ps=!0,Gh=n,iv(Ko,function(){return ji(),null})));var _=(o.subtreeFlags&(Lu|ni|ju|Us))!==ne,b=(o.flags&(Lu|ni|ju|Us))!==ne;if(_||b){var O=sr.transition;sr.transition=null;var C=Ua();qn(oa);var L=gt;gt|=Ga,Bh.current=null,oD(e,o),v_(),ED(e,o,c),AS(e.containerInfo),e.current=o,jb(c),bD(o,e,c),zb(),_b(),gt=L,qn(C),sr.transition=O}else e.current=o,v_();var H=ps;if(ps?(ps=!1,_o=e,Jl=c):(Eu=0,af=null),f=e.pendingLanes,f===ce&&(_u=null),H||ME(e.current,!1),Ob(o.stateNode,r),Ia&&e.memoizedUpdaters.clear(),jD(),$r(e,Qn()),t!==null)for(var Q=e.onRecoverableError,q=0;q<t.length;q++){var ae=t[q];Q(ae)}if(nf){nf=!1;var Ae=Qh;throw Qh=null,Ae}return ia(Jl,yt)&&e.tag!==so&&ji(),f=e.pendingLanes,ia(f,yt)?(bO(),e===qh?Zl++:(Zl=0,qh=e)):Zl=0,uo(),Fv(),null}function ji(){if(_o!==null){var e=Gv(Jl),t=fw(Ai,e),n=sr.transition,r=Ua();try{return sr.transition=null,qn(t),uM()}finally{qn(r),sr.transition=n}}return!1}function sM(e){Yh.push(e),ps||(ps=!0,iv(Ko,function(){return ji(),null}))}function uM(){if(_o===null)return!1;var e=Gh;Gh=null;var t=_o,n=Jl;if(_o=null,Jl=ce,(gt&(Sr|Ga))!==Hn)throw new Error("Cannot flush passive effects while already rendering.");Kh=!0,rf=!1,Xb(n);var r=gt;gt|=Ga,MD(t.current),SD(t,t.current,n,e);{var o=Yh;Yh=[];for(var c=0;c<o.length;c++){var f=o[c];cD(t,f)}}Bb(),ME(t.current,!0),gt=r,uo(),rf?t===af?Eu++:(Eu=0,af=t):Eu=0,Kh=!1,rf=!1,Db(t);{var _=t.current.stateNode;_.effectDuration=0,_.passiveEffectDuration=0}return!0}function RE(e){return _u!==null&&_u.has(e)}function lM(e){_u===null?_u=new Set([e]):_u.add(e)}function cM(e){nf||(nf=!0,Qh=e)}var dM=cM;function OE(e,t,n){var r=Wd(n,t),o=g_(e,r,yt);co(e,o);var c=Pr(),f=uf(e,yt);f!==null&&(Yu(f,yt,c),$r(f,c))}function Yt(e,t,n){if(rD(n),rc(!1),e.tag===G){OE(e,e,n);return}var r=null;for(r=t;r!==null;){if(r.tag===G){OE(r,e,n);return}else if(r.tag===j){var o=r.type,c=r.stateNode;if(typeof o.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&!RE(c)){var f=Wd(n,e),_=Sh(r,f,yt);co(r,_);var b=Pr(),O=uf(r,yt);O!==null&&(Yu(O,yt,b),$r(O,b));return}}r=r.return}h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}function fM(e,t,n){var r=e.pingCache;r!==null&&r.delete(t);var o=Pr();Vv(e,n),bM(e),Rr===e&&Bs(Ln,n)&&(jn===Ql||jn===Zd&&zv(Ln)&&Qn()-Wh<dE?ms(e,ce):tf=lt(tf,n)),$r(e,o)}function DE(e,t){t===Gn&&(t=QD(e));var n=Pr(),r=uf(e,t);r!==null&&(Yu(r,t,n),$r(r,n))}function pM(e){var t=e.memoizedState,n=Gn;t!==null&&(n=t.retryLane),DE(e,n)}function mM(e,t){var n=Gn,r;switch(e.tag){case $e:r=e.stateNode;var o=e.memoizedState;o!==null&&(n=o.retryLane);break;case Ge:r=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}r!==null&&r.delete(t),DE(e,n)}function hM(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:BD(e/1960)*1960}function vM(){if(Zl>VD)throw Zl=0,qh=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Eu>WD&&(Eu=0,af=null,h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function yM(){La.flushLegacyContextWarning(),La.flushPendingUnsafeLifecycleWarnings()}function ME(e,t){nn(e),df(e,Wn,UD),t&&df(e,Go,HD),df(e,Wn,kD),t&&df(e,Go,ID),Tn()}function df(e,t,n){for(var r=e,o=null;r!==null;){var c=r.subtreeFlags&t;r!==o&&r.child!==null&&c!==ne?r=r.child:((r.flags&t)!==ne&&n(r),r.sibling!==null?r=r.sibling:r=o=r.return)}}var ff=null;function AE(e){{if((gt&Sr)!==Hn||!(e.mode&vt))return;var t=e.tag;if(t!==K&&t!==G&&t!==j&&t!==x&&t!==_e&&t!==it&&t!==Re)return;var n=rt(e)||"ReactComponent";if(ff!==null){if(ff.has(n))return;ff.add(n)}else ff=new Set([n]);var r=$n;try{nn(e),h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?nn(e):Tn()}}}var nv;{var gM=null;nv=function(e,t,n){var r=UE(gM,t);try{return W_(e,t,n)}catch(c){if(c!==null&&typeof c=="object"&&typeof c.then=="function")throw c;if(dd(),$g(),Q_(e,t),UE(t,r),t.mode&jt&&_h(t),M(null,W_,null,e,t,n),$()){var o=le();typeof o=="object"&&o!==null&&o._suppressLogging&&typeof c=="object"&&c!==null&&!c._suppressLogging&&(c._suppressLogging=!0)}throw c}}}var xE=!1,rv;rv=new Set;function _M(e){if(_i&&!gO())switch(e.tag){case x:case _e:case Re:{var t=cn&&rt(cn)||"Unknown",n=t;if(!rv.has(n)){rv.add(n);var r=rt(e)||"Unknown";h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",r,t,t)}break}case j:{xE||(h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),xE=!0);break}}}function nc(e,t){if(Ia){var n=e.memoizedUpdaters;n.forEach(function(r){Wv(e,r,t)})}}var av={};function iv(e,t){{var n=Ya.current;return n!==null?(n.push(t),av):Pv(e,t)}}function CE(e){if(e!==av)return yb(e)}function PE(){return Ya.current!==null}function EM(e){{if(e.mode&vt){if(!uE())return}else if(!XD()||gt!==Hn||e.tag!==x&&e.tag!==_e&&e.tag!==Re)return;if(Ya.current===null){var t=$n;try{nn(e),h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,rt(e))}finally{t?nn(e):Tn()}}}}function bM(e){e.tag!==so&&uE()&&Ya.current===null&&h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function rc(e){mE=e}var Da=null,bu=null,wM=function(e){Da=e};function wu(e){{if(Da===null)return e;var t=Da(e);return t===void 0?e:t.current}}function ov(e){return wu(e)}function sv(e){{if(Da===null)return e;var t=Da(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var n=wu(e.render);if(e.render!==n){var r={$$typeof:Ie,render:n};return e.displayName!==void 0&&(r.displayName=e.displayName),r}}return e}return t.current}}function FE(e,t){{if(Da===null)return!1;var n=e.elementType,r=t.type,o=!1,c=typeof r=="object"&&r!==null?r.$$typeof:null;switch(e.tag){case j:{typeof r=="function"&&(o=!0);break}case x:{(typeof r=="function"||c===ft)&&(o=!0);break}case _e:{(c===Ie||c===ft)&&(o=!0);break}case it:case Re:{(c===Pt||c===ft)&&(o=!0);break}default:return!1}if(o){var f=Da(n);if(f!==void 0&&f===Da(r))return!0}return!1}}function NE(e){{if(Da===null||typeof WeakSet!="function")return;bu===null&&(bu=new WeakSet),bu.add(e)}}var TM=function(e,t){{if(Da===null)return;var n=t.staleFamilies,r=t.updatedFamilies;ji(),Li(function(){uv(e.current,r,n)})}},SM=function(e,t){{if(e.context!==la)return;ji(),Li(function(){ac(t,e,null,null)})}};function uv(e,t,n){{var r=e.alternate,o=e.child,c=e.sibling,f=e.tag,_=e.type,b=null;switch(f){case x:case Re:case j:b=_;break;case _e:b=_.render;break}if(Da===null)throw new Error("Expected resolveFamily to be set during hot reload.");var O=!1,C=!1;if(b!==null){var L=Da(b);L!==void 0&&(n.has(L)?C=!0:t.has(L)&&(f===j?C=!0:O=!0))}bu!==null&&(bu.has(e)||r!==null&&bu.has(r))&&(C=!0),C&&(e._debugNeedsRemount=!0),(C||O)&&zn(e,yt,tn),o!==null&&!C&&uv(o,t,n),c!==null&&uv(c,t,n)}}var RM=function(e,t){{var n=new Set,r=new Set(t.map(function(o){return o.current}));return lv(e.current,r,n),n}};function lv(e,t,n){{var r=e.child,o=e.sibling,c=e.tag,f=e.type,_=null;switch(c){case x:case Re:case j:_=f;break;case _e:_=f.render;break}var b=!1;_!==null&&t.has(_)&&(b=!0),b?OM(e,n):r!==null&&lv(r,t,n),o!==null&&lv(o,t,n)}}function OM(e,t){{var n=DM(e,t);if(n)return;for(var r=e;;){switch(r.tag){case ee:t.add(r.stateNode);return;case se:t.add(r.stateNode.containerInfo);return;case G:t.add(r.stateNode.containerInfo);return}if(r.return===null)throw new Error("Expected to reach root first.");r=r.return}}}function DM(e,t){for(var n=e,r=!1;;){if(n.tag===ee)r=!0,t.add(n.stateNode);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;n.sibling===null;){if(n.return===null||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}var cv;{cv=!1;try{var kE=Object.preventExtensions({})}catch{cv=!0}}function MM(e,t,n,r){this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,this.flags=ne,this.subtreeFlags=ne,this.deletions=null,this.lanes=ce,this.childLanes=ce,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!cv&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var ca=function(e,t,n,r){return new MM(e,t,n,r)};function dv(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function AM(e){return typeof e=="function"&&!dv(e)&&e.defaultProps===void 0}function xM(e){if(typeof e=="function")return dv(e)?j:x;if(e!=null){var t=e.$$typeof;if(t===Ie)return _e;if(t===Pt)return it}return K}function vs(e,t){var n=e.alternate;n===null?(n=ca(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=ne,n.subtreeFlags=ne,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=e.flags&Oi,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;var r=e.dependencies;switch(n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case K:case x:case Re:n.type=wu(e.type);break;case j:n.type=ov(e.type);break;case _e:n.type=sv(e.type);break}return n}function CM(e,t){e.flags&=Oi|Ce;var n=e.alternate;if(n===null)e.childLanes=ce,e.lanes=t,e.child=null,e.subtreeFlags=ne,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=ne,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;var r=n.dependencies;e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function PM(e,t,n){var r;return e===sd?(r=vt,t===!0&&(r|=Sn,r|=ai)):r=qe,Ia&&(r|=jt),ca(G,null,null,r)}function fv(e,t,n,r,o,c){var f=K,_=e;if(typeof e=="function")dv(e)?(f=j,_=ov(_)):_=wu(_);else if(typeof e=="string")f=ee;else{e:switch(e){case ue:return wo(n.children,o,c,t);case Te:f=Ne,o|=Sn,(o&vt)!==qe&&(o|=ai);break;case je:return FM(n,o,c,t);case nt:return NM(n,o,c,t);case kt:return kM(n,o,c,t);case wn:return IE(n,o,c,t);case Mr:case Bn:case Ru:case Ou:case wt:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:f=Be;break e;case P:f=ge;break e;case Ie:f=_e,_=sv(_);break e;case Pt:f=it;break e;case ft:f=Pe,_=null;break e}var b="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=r?rt(r):null;O&&(b+=`

Check the render method of \``+O+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+b))}}}var C=ca(f,n,t,o);return C.elementType=e,C.type=_,C.lanes=c,C._debugOwner=r,C}function pv(e,t,n){var r=null;r=e._owner;var o=e.type,c=e.key,f=e.props,_=fv(o,c,f,r,t,n);return _._debugSource=e._source,_._debugOwner=e._owner,_}function wo(e,t,n,r){var o=ca(Ve,e,r,t);return o.lanes=n,o}function FM(e,t,n,r){typeof e.id!="string"&&h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var o=ca(et,e,r,t|jt);return o.elementType=je,o.lanes=n,o.stateNode={effectDuration:0,passiveEffectDuration:0},o}function NM(e,t,n,r){var o=ca($e,e,r,t);return o.elementType=nt,o.lanes=n,o}function kM(e,t,n,r){var o=ca(Ge,e,r,t);return o.elementType=kt,o.lanes=n,o}function IE(e,t,n,r){var o=ca(We,e,r,t);o.elementType=wn,o.lanes=n;var c={};return o.stateNode=c,o}function mv(e,t,n){var r=ca(oe,e,null,t);return r.lanes=n,r}function IM(){var e=ca(ee,null,null,qe);return e.elementType="DELETED",e}function UM(e){var t=ca(F,null,null,qe);return t.stateNode=e,t}function hv(e,t,n){var r=e.children!==null?e.children:[],o=ca(se,r,e.key,t);return o.lanes=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function UE(e,t){return e===null&&(e=ca(K,null,null,qe)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function HM(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=em,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=Gn,this.eventTimes=Tp(ce),this.expirationTimes=Tp(tn),this.pendingLanes=ce,this.suspendedLanes=ce,this.pingedLanes=ce,this.expiredLanes=ce,this.mutableReadLanes=ce,this.finishedLanes=ce,this.entangledLanes=ce,this.entanglements=Tp(ce),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var c=this.pendingUpdatersLaneMap=[],f=0;f<ep;f++)c.push(new Set)}switch(t){case sd:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case so:this._debugRootType=n?"hydrate()":"render()";break}}function HE(e,t,n,r,o,c,f,_,b,O){var C=new HM(e,t,n,_,b),L=PM(t,c);C.current=L,L.stateNode=C;{var H={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null};L.memoizedState=H}return _m(L),C}var vv="18.1.0";function LM(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return Jt(r),{$$typeof:k,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}var yv,gv;yv=!1,gv={};function LE(e){if(!e)return la;var t=te(e),n=CR(t);if(t.tag===j){var r=t.type;if(si(r))return ig(t,r,n)}return n}function jM(e,t){{var n=te(e);if(n===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var r=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+r)}var o=Av(n);if(o===null)return null;if(o.mode&Sn){var c=rt(n)||"Component";if(!gv[c]){gv[c]=!0;var f=$n;try{nn(o),n.mode&Sn?h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c):h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c)}finally{f?nn(f):Tn()}}}return o.stateNode}}function jE(e,t,n,r,o,c,f,_){var b=!1,O=null;return HE(e,t,b,O,n,r,o,c,f)}function zE(e,t,n,r,o,c,f,_,b,O){var C=!0,L=HE(n,r,C,e,o,c,f,_,b);L.context=LE(null);var H=L.current,Q=Pr(),q=Eo(H),ae=Fi(Q,q);return ae.callback=t!=null?t:null,co(H,ae),YD(L,q,Q),L}function ac(e,t,n,r){Rb(t,e);var o=t.current,c=Pr(),f=Eo(o);Vb(f);var _=LE(n);t.context===null?t.context=_:t.pendingContext=_,_i&&$n!==null&&!yv&&(yv=!0,h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,rt($n)||"Unknown"));var b=Fi(c,f);b.payload={element:e},r=r===void 0?null:r,r!==null&&(typeof r!="function"&&h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),b.callback=r),co(o,b);var O=zn(o,f,c);return O!==null&&hd(O,o,f),f}function pf(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case ee:return t.child.stateNode;default:return t.child.stateNode}}function zM(e){switch(e.tag){case G:var t=e.stateNode;if(Cc(t)){var n=ew(t);KD(t,n)}break;case $e:var r=Pr();Li(function(){return zn(e,yt,r)});var o=yt;_v(e,o);break}}function XE(e,t){var n=e.memoizedState;n!==null&&n.dehydrated!==null&&(n.retryLane=ow(n.retryLane,t))}function _v(e,t){XE(e,t);var n=e.alternate;n&&XE(n,t)}function XM(e){if(e.tag===$e){var t=Pr(),n=$u;zn(e,n,t),_v(e,n)}}function BM(e){if(e.tag===$e){var t=Pr(),n=Eo(e);zn(e,n,t),_v(e,n)}}function BE(e){var t=vb(e);return t===null?null:t.stateNode}var $E=function(e){return null};function $M(e){return $E(e)}var VE=function(e){return!1};function VM(e){return VE(e)}var WE=null,QE=null,YE=null,GE=null,qE=null,KE=null,JE=null,ZE=null,eb=null;{var tb=function(e,t,n){var r=t[n],o=Rt(e)?e.slice():ct({},e);return n+1===t.length?(Rt(o)?o.splice(r,1):delete o[r],o):(o[r]=tb(e[r],t,n+1),o)},nb=function(e,t){return tb(e,t,0)},rb=function(e,t,n,r){var o=t[r],c=Rt(e)?e.slice():ct({},e);if(r+1===t.length){var f=n[r];c[f]=c[o],Rt(c)?c.splice(o,1):delete c[o]}else c[o]=rb(e[o],t,n,r+1);return c},ab=function(e,t,n){if(t.length!==n.length){R("copyWithRename() expects paths of the same length");return}else for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){R("copyWithRename() expects paths to be the same except for the deepest key");return}return rb(e,t,n,0)},ib=function(e,t,n,r){if(n>=t.length)return r;var o=t[n],c=Rt(e)?e.slice():ct({},e);return c[o]=ib(e[o],t,n+1,r),c},ob=function(e,t,n){return ib(e,t,0,n)},Ev=function(e,t){for(var n=e.memoizedState;n!==null&&t>0;)n=n.next,t--;return n};WE=function(e,t,n,r){var o=Ev(e,t);if(o!==null){var c=ob(o.memoizedState,n,r);o.memoizedState=c,o.baseState=c,e.memoizedProps=ct({},e.memoizedProps),zn(e,yt,tn)}},QE=function(e,t,n){var r=Ev(e,t);if(r!==null){var o=nb(r.memoizedState,n);r.memoizedState=o,r.baseState=o,e.memoizedProps=ct({},e.memoizedProps),zn(e,yt,tn)}},YE=function(e,t,n,r){var o=Ev(e,t);if(o!==null){var c=ab(o.memoizedState,n,r);o.memoizedState=c,o.baseState=c,e.memoizedProps=ct({},e.memoizedProps),zn(e,yt,tn)}},GE=function(e,t,n){e.pendingProps=ob(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),zn(e,yt,tn)},qE=function(e,t){e.pendingProps=nb(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps),zn(e,yt,tn)},KE=function(e,t,n){e.pendingProps=ab(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),zn(e,yt,tn)},JE=function(e){zn(e,yt,tn)},ZE=function(e){$E=e},eb=function(e){VE=e}}function WM(e){var t=Av(e);return t===null?null:t.stateNode}function QM(e){return null}function YM(){return $n}function GM(e){var t=e.findFiberByHostInstance,n=s.ReactCurrentDispatcher;return Sb({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:WE,overrideHookStateDeletePath:QE,overrideHookStateRenamePath:YE,overrideProps:GE,overridePropsDeletePath:qE,overridePropsRenamePath:KE,setErrorHandler:ZE,setSuspenseHandler:eb,scheduleUpdate:JE,currentDispatcherRef:n,findHostInstanceByFiber:WM,findFiberByHostInstance:t||QM,findHostInstancesForRefresh:RM,scheduleRefresh:TM,scheduleRoot:SM,setRefreshHandler:wM,getCurrentFiber:YM,reconcilerVersion:vv})}var sb=typeof reportError=="function"?reportError:function(e){console.error(e)};function bv(e){this._internalRoot=e}mf.prototype.render=bv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw new Error("Cannot update an unmounted root.");{typeof arguments[1]=="function"?h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):hf(arguments[1])?h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof arguments[1]!="undefined"&&h("You passed a second argument to root.render(...) but it only accepts one argument.");var n=t.containerInfo;if(n.nodeType!==un){var r=BE(t.current);r&&r.parentNode!==n&&h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}ac(e,t,null,null)},mf.prototype.unmount=bv.prototype.unmount=function(){typeof arguments[0]=="function"&&h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_E()&&h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Li(function(){ac(null,e,null,null)}),eg(t)}};function qM(e,t){if(!hf(e))throw new Error("createRoot(...): Target container is not a DOM element.");ub(e);var n=!1,r=!1,o="",c=sb;t!=null&&(t.hydrate?R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===Xn&&h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.transitionCallbacks!==void 0&&t.transitionCallbacks);var f=jE(e,sd,null,n,r,o,c);ed(f.current,e);var _=e.nodeType===un?e.parentNode:e;return dl(_),new bv(f)}function mf(e){this._internalRoot=e}function KM(e){e&&Tw(e)}mf.prototype.unstable_scheduleHydration=KM;function JM(e,t,n){if(!hf(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");ub(e),t===void 0&&h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var r=n!=null?n:null,o=n!=null&&n.hydratedSources||null,c=!1,f=!1,_="",b=sb;n!=null&&(n.unstable_strictMode===!0&&(c=!0),n.identifierPrefix!==void 0&&(_=n.identifierPrefix),n.onRecoverableError!==void 0&&(b=n.onRecoverableError));var O=zE(t,null,e,sd,r,c,f,_,b);if(ed(O.current,e),dl(e),o)for(var C=0;C<o.length;C++){var L=o[C];fO(O,L)}return new mf(O)}function hf(e){return!!(e&&(e.nodeType===yr||e.nodeType===Vn||e.nodeType===Os||!qt))}function ic(e){return!!(e&&(e.nodeType===yr||e.nodeType===Vn||e.nodeType===Os||e.nodeType===un&&e.nodeValue===" react-mount-point-unstable "))}function ub(e){e.nodeType===yr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),wl(e)&&(e._reactRootContainer?h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}var ZM=s.ReactCurrentOwner,lb;lb=function(e){if(e._reactRootContainer&&e.nodeType!==un){var t=BE(e._reactRootContainer.current);t&&t.parentNode!==e&&h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=wv(e),o=!!(r&&io(r));o&&!n&&h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===yr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};function wv(e){return e?e.nodeType===Vn?e.documentElement:e.firstChild:null}function cb(){}function e0(e,t,n,r,o){if(o){if(typeof r=="function"){var c=r;r=function(){var H=pf(f);c.call(H)}}var f=zE(t,r,e,so,null,!1,!1,"",cb);e._reactRootContainer=f,ed(f.current,e);var _=e.nodeType===un?e.parentNode:e;return dl(_),Li(),f}else{for(var b;b=e.lastChild;)e.removeChild(b);if(typeof r=="function"){var O=r;r=function(){var H=pf(C);O.call(H)}}var C=jE(e,so,null,!1,!1,"",cb);e._reactRootContainer=C,ed(C.current,e);var L=e.nodeType===un?e.parentNode:e;return dl(L),Li(function(){ac(t,C,n,r)}),C}}function t0(e,t){e!==null&&typeof e!="function"&&h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}function vf(e,t,n,r,o){lb(n),t0(o===void 0?null:o,"render");var c=n._reactRootContainer,f;if(!c)f=e0(n,t,e,o,r);else{if(f=c,typeof o=="function"){var _=o;o=function(){var b=pf(f);_.call(b)}}ac(t,f,e,o)}return pf(f)}function n0(e){{var t=ZM.current;if(t!==null&&t.stateNode!==null){var n=t.stateNode._warnedAboutRefsInRender;n||h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",St(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}}return e==null?null:e.nodeType===yr?e:jM(e,"findDOMNode")}function r0(e,t,n){if(h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!ic(t))throw new Error("Target container is not a DOM element.");{var r=wl(t)&&t._reactRootContainer===void 0;r&&h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}return vf(null,e,t,!0,n)}function a0(e,t,n){if(h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!ic(t))throw new Error("Target container is not a DOM element.");{var r=wl(t)&&t._reactRootContainer===void 0;r&&h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return vf(null,e,t,!1,n)}function i0(e,t,n,r){if(h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!ic(n))throw new Error("Target container is not a DOM element.");if(e==null||!ie(e))throw new Error("parentComponent must be a valid React Component");return vf(e,t,n,!1,r)}function o0(e){if(!ic(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var t=wl(e)&&e._reactRootContainer===void 0;t&&h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var n=wv(e),r=n&&!io(n);r&&h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}return Li(function(){vf(null,null,e,!1,function(){e._reactRootContainer=null,eg(e)})}),!0}else{{var o=wv(e),c=!!(o&&io(o)),f=e.nodeType===yr&&ic(e.parentNode)&&!!e.parentNode._reactRootContainer;c&&h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",f?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}}pw(zM),hw(XM),vw(BM),yw(Ua),gw(cw),(typeof Map!="function"||Map.prototype==null||typeof Map.prototype.forEach!="function"||typeof Set!="function"||Set.prototype==null||typeof Set.prototype.clear!="function"||typeof Set.prototype.forEach!="function")&&h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),Ec(_S),Gf(Zh,JD,Li);function s0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!hf(t))throw new Error("Target container is not a DOM element.");return LM(e,t,null,n)}function u0(e,t,n,r){return i0(e,t,n,r)}var Tv={usingClientEntryPoint:!1,Events:[io,Js,td,Hu,ba,Zh]};function l0(e,t){return Tv.usingClientEntryPoint||h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),qM(e,t)}function c0(e,t,n){return Tv.usingClientEntryPoint||h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),JM(e,t,n)}function d0(e){return _E()&&h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),Li(e)}var f0=GM({findFiberByHostInstance:as,bundleType:1,version:vv,rendererPackageName:"react-dom"});if(!f0&&mn&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&navigator.userAgent.indexOf("Edge")===-1||navigator.userAgent.indexOf("Firefox")>-1)){var db=window.location.protocol;/^(https?|file):$/.test(db)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+(db==="file:"?`
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`:""),"font-weight:bold")}reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv,reactDom_development.createPortal=s0,reactDom_development.createRoot=l0,reactDom_development.findDOMNode=n0,reactDom_development.flushSync=d0,reactDom_development.hydrate=r0,reactDom_development.hydrateRoot=c0,reactDom_development.render=a0,reactDom_development.unmountComponentAtNode=o0,reactDom_development.unstable_batchedUpdates=Zh,reactDom_development.unstable_renderSubtreeIntoContainer=u0,reactDom_development.version=vv,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})();reactDom.exports=reactDom_development;var m=reactDom.exports;{var i=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;client.createRoot=function(d,g){i.usingClientEntryPoint=!0;try{return m.createRoot(d,g)}finally{i.usingClientEntryPoint=!1}},client.hydrateRoot=function(d,g,s){i.usingClientEntryPoint=!0;try{return m.hydrateRoot(d,g,s)}finally{i.usingClientEntryPoint=!1}}}var base="";const main="_main_9u705_1",list="_list_9u705_5",listItem="_listItem_9u705_13",footer="_footer_9u705_17",dspHeader="_dspHeader_9u705_27",dspHeaderTitle="_dspHeaderTitle_9u705_31",dspHeaderBack="_dspHeaderBack_9u705_35",dspType="_dspType_9u705_39",dspPre="_dspPre_9u705_44",dspContent="_dspContent_9u705_48",link="_link_9u705_60";var classes$3={main,list,listItem,footer,dspHeader,dspHeaderTitle,dspHeaderBack,dspType,dspPre,dspContent,link};function isDspLive(d){return d.type==="live"}function isDspOffline(d){return d.type==="offline"}function isDspComponent(d){return d.type==="component"}function isDspCallback(d){return d.type==="callback"}var FaustModule=function(){var d=typeof document!="undefined"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename!="undefined"&&(d=d||__filename),function(g){g=g||{};var s=typeof g!="undefined"?g:{};s.expectedDataFileDownloads||(s.expectedDataFileDownloads=0,s.finishedDataFileDownloads=0),s.expectedDataFileDownloads++,function(){var a=function(u){if(typeof window=="object")window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");else if(typeof location!="undefined")encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");else throw"using preloaded data can only be done on a web page or in a web worker";var l="../../lib/libfaust-wasm.data",v="libfaust-wasm.data";typeof s.locateFilePackage=="function"&&!s.locateFile&&(s.locateFile=s.locateFilePackage,ge("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var E=s.locateFile?s.locateFile(v,""):v,S=u.remote_package_size;u.package_uuid;function A($,le,te,ie){var de=new XMLHttpRequest;de.open("GET",$,!0),de.responseType="arraybuffer",de.onprogress=function(ne){var ze=$,Ce=le;if(ne.total&&(Ce=ne.total),ne.loaded){de.addedTotal?s.dataFileDownloads[ze].loaded=ne.loaded:(de.addedTotal=!0,s.dataFileDownloads||(s.dataFileDownloads={}),s.dataFileDownloads[ze]={loaded:ne.loaded,total:Ce});var Y=0,ve=0,Ue=0;for(var Xe in s.dataFileDownloads){var be=s.dataFileDownloads[Xe];Y+=be.total,ve+=be.loaded,Ue++}Y=Math.ceil(Y*s.expectedDataFileDownloads/Ue),s.setStatus&&s.setStatus("Downloading data... ("+ve+"/"+Y+")")}else s.dataFileDownloads||s.setStatus&&s.setStatus("Downloading data...")},de.onerror=function(ne){throw new Error("NetworkError for: "+$)},de.onload=function(ne){if(de.status==200||de.status==304||de.status==206||de.status==0&&de.response){var ze=de.response;te(ze)}else throw new Error(de.statusText+" : "+de.responseURL)},de.send(null)}var M=null,N=s.getPreloadedPackage?s.getPreloadedPackage(E,S):null;N||A(E,S,function($){M?(M($),M=null):N=$});function z(){function $(ne,ze){if(!ne)throw ze+new Error().stack}s.FS_createPath("/","libraries",!0,!0);function le(ne,ze,Ce){this.start=ne,this.end=ze,this.audio=Ce}le.prototype={requests:{},open:function(ne,ze){this.name=ze,this.requests[ze]=this,s.addRunDependency("fp "+this.name)},send:function(){},onload:function(){var ne=this.byteArray.subarray(this.start,this.end);this.finish(ne)},finish:function(ne){var ze=this;s.FS_createDataFile(this.name,null,ne,!0,!0,!0),s.removeRunDependency("fp "+ze.name),this.requests[this.name]=null}};for(var te=u.files,ie=0;ie<te.length;++ie)new le(te[ie].start,te[ie].end,te[ie].audio).open("GET",te[ie].filename);function de(ne){s.finishedDataFileDownloads++,$(ne,"Loading data file failed."),$(ne instanceof ArrayBuffer,"bad input to processPackageData");var ze=new Uint8Array(ne);le.prototype.byteArray=ze;for(var Ce=u.files,Y=0;Y<Ce.length;++Y)le.prototype.requests[Ce[Y].filename].onload();s.removeRunDependency("datafile_../../lib/libfaust-wasm.data")}s.addRunDependency("datafile_../../lib/libfaust-wasm.data"),s.preloadResults||(s.preloadResults={}),s.preloadResults[l]={fromCache:!1},N?(de(N),N=null):M=de}s.calledRun?z():(s.preRun||(s.preRun=[]),s.preRun.push(z))};a({files:[{filename:"/libraries/hoa.lib",start:0,end:13105,audio:0},{filename:"/libraries/compressors.lib",start:13105,end:58859,audio:0},{filename:"/libraries/basics.lib",start:58859,end:110385,audio:0},{filename:"/libraries/dx7.lib",start:110385,end:179488,audio:0},{filename:"/libraries/analyzers.lib",start:179488,end:212357,audio:0},{filename:"/libraries/spats.lib",start:212357,end:217531,audio:0},{filename:"/libraries/envelopes.lib",start:217531,end:228127,audio:0},{filename:"/libraries/oscillators.lib",start:228127,end:275738,audio:0},{filename:"/libraries/mi.lib",start:275738,end:293026,audio:0},{filename:"/libraries/misceffects.lib",start:293026,end:314755,audio:0},{filename:"/libraries/version.lib",start:314755,end:315662,audio:0},{filename:"/libraries/webaudio.lib",start:315662,end:327785,audio:0},{filename:"/libraries/math.lib",start:327785,end:349263,audio:0},{filename:"/libraries/stdfaust.lib",start:349263,end:350533,audio:0},{filename:"/libraries/filter.lib",start:350533,end:415919,audio:0},{filename:"/libraries/delays.lib",start:415919,end:430403,audio:0},{filename:"/libraries/routes.lib",start:430403,end:437029,audio:0},{filename:"/libraries/soundfiles.lib",start:437029,end:446390,audio:0},{filename:"/libraries/tonestacks.lib",start:446390,end:458744,audio:0},{filename:"/libraries/aanl.lib",start:458744,end:484841,audio:0},{filename:"/libraries/wdmodels.lib",start:484841,end:574662,audio:0},{filename:"/libraries/all.lib",start:574662,end:575678,audio:0},{filename:"/libraries/music.lib",start:575678,end:594112,audio:0},{filename:"/libraries/tubes.lib",start:594112,end:943901,audio:0},{filename:"/libraries/effect.lib",start:943901,end:1012931,audio:0},{filename:"/libraries/vaeffects.lib",start:1012931,end:1048800,audio:0},{filename:"/libraries/maxmsp.lib",start:1048800,end:1056659,audio:0},{filename:"/libraries/platform.lib",start:1056659,end:1059739,audio:0},{filename:"/libraries/synths.lib",start:1059739,end:1070990,audio:0},{filename:"/libraries/sf.lib",start:1070990,end:1072056,audio:0},{filename:"/libraries/fds.lib",start:1072056,end:1092602,audio:0},{filename:"/libraries/reducemaps.lib",start:1092602,end:1097438,audio:0},{filename:"/libraries/phaflangers.lib",start:1097438,end:1107359,audio:0},{filename:"/libraries/filters.lib",start:1107359,end:1212987,audio:0},{filename:"/libraries/signals.lib",start:1212987,end:1224932,audio:0},{filename:"/libraries/instruments.lib",start:1224932,end:1234327,audio:0},{filename:"/libraries/quantizers.lib",start:1234327,end:1244180,audio:0},{filename:"/libraries/noises.lib",start:1244180,end:1258842,audio:0},{filename:"/libraries/oscillator.lib",start:1258842,end:1278693,audio:0},{filename:"/libraries/interpolators.lib",start:1278693,end:1301737,audio:0},{filename:"/libraries/demos.lib",start:1301737,end:1364872,audio:0},{filename:"/libraries/reverbs.lib",start:1364872,end:1402697,audio:0},{filename:"/libraries/physmodels.lib",start:1402697,end:1573680,audio:0},{filename:"/libraries/maths.lib",start:1573680,end:1595081,audio:0}],remote_package_size:1595081,package_uuid:"04ea3dc2-3649-4af3-b126-173b06afc41a"})}();var T={},D;for(D in s)s.hasOwnProperty(D)&&(T[D]=s[D]);var R="./this.program",h=!1,U=!1,x=!1,j=!1;if(h=typeof window=="object",U=typeof importScripts=="function",x=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",j=!h&&!x&&!U,s.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");var K="";function G(a){return s.locateFile?s.locateFile(a,K):K+a}var se,ee,oe,Ve;if(x)U?K=require("path").dirname(K)+"/":K=__dirname+"/",se=function(u,l){return oe||(oe=require("fs")),Ve||(Ve=require("path")),u=Ve.normalize(u),oe.readFileSync(u,l?null:"utf8")},ee=function(u){var l=se(u,!0);return l.buffer||(l=new Uint8Array(l)),F(l.buffer),l},process.argv.length>1&&(R=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof wc))throw a}),process.on("unhandledRejection",P),s.inspect=function(){return"[Emscripten Module object]"};else if(j)typeof read!="undefined"&&(se=function(u){return read(u)}),ee=function(u){var l;return typeof readbuffer=="function"?new Uint8Array(readbuffer(u)):(l=read(u,"binary"),F(typeof l=="object"),l)},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print);else if(h||U)U?K=self.location.href:document.currentScript&&(K=document.currentScript.src),d&&(K=d),K.indexOf("blob:")!==0?K=K.substr(0,K.lastIndexOf("/")+1):K="",se=function(u){var l=new XMLHttpRequest;return l.open("GET",u,!1),l.send(null),l.responseText},U&&(ee=function(u){var l=new XMLHttpRequest;return l.open("GET",u,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)});else throw new Error("environment detection error");var Ne=s.print||console.log.bind(console),ge=s.printErr||console.warn.bind(console);for(D in T)T.hasOwnProperty(D)&&(s[D]=T[D]);T=null,s.arguments&&s.arguments,Object.getOwnPropertyDescriptor(s,"arguments")||Object.defineProperty(s,"arguments",{configurable:!0,get:function(){P("Module.arguments has been replaced with plain arguments_")}}),s.thisProgram&&(R=s.thisProgram),Object.getOwnPropertyDescriptor(s,"thisProgram")||Object.defineProperty(s,"thisProgram",{configurable:!0,get:function(){P("Module.thisProgram has been replaced with plain thisProgram")}}),s.quit&&s.quit,Object.getOwnPropertyDescriptor(s,"quit")||Object.defineProperty(s,"quit",{configurable:!0,get:function(){P("Module.quit has been replaced with plain quit_")}}),F(typeof s.memoryInitializerPrefixURL=="undefined","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.pthreadMainPrefixURL=="undefined","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.cdInitializerPrefixURL=="undefined","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.filePackagePrefixURL=="undefined","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),F(typeof s.read=="undefined","Module.read option was removed (modify read_ in JS)"),F(typeof s.readAsync=="undefined","Module.readAsync option was removed (modify readAsync in JS)"),F(typeof s.readBinary=="undefined","Module.readBinary option was removed (modify readBinary in JS)"),F(typeof s.setWindowTitle=="undefined","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),F(typeof s.TOTAL_MEMORY=="undefined","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),Object.getOwnPropertyDescriptor(s,"read")||Object.defineProperty(s,"read",{configurable:!0,get:function(){P("Module.read has been replaced with plain read_")}}),Object.getOwnPropertyDescriptor(s,"readAsync")||Object.defineProperty(s,"readAsync",{configurable:!0,get:function(){P("Module.readAsync has been replaced with plain readAsync")}}),Object.getOwnPropertyDescriptor(s,"readBinary")||Object.defineProperty(s,"readBinary",{configurable:!0,get:function(){P("Module.readBinary has been replaced with plain readBinary")}});var Ns,$o,Na;Ns=$o=Na=function(){P("cannot use the stack before compiled code is ready to run, and has provided stack access")};function Be(a){F(Nr);var u=V[Nr>>2],l=u+a+15&-16;return F(l<=ot.length,"failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly"),V[Nr>>2]=l,u}function _e(a){switch(a){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(a[a.length-1]==="*")return 4;if(a[0]==="i"){var u=Number(a.substr(1));return F(u%8===0,"getNativeTypeSize invalid bits "+u+", type "+a),u/8}else return 0}}}function et(a){et.shown||(et.shown={}),et.shown[a]||(et.shown[a]=1,ge(a))}var $e;s.wasmBinary&&($e=s.wasmBinary),Object.getOwnPropertyDescriptor(s,"wasmBinary")||Object.defineProperty(s,"wasmBinary",{configurable:!0,get:function(){P("Module.wasmBinary has been replaced with plain wasmBinary")}}),s.noExitRuntime&&s.noExitRuntime,Object.getOwnPropertyDescriptor(s,"noExitRuntime")||Object.defineProperty(s,"noExitRuntime",{configurable:!0,get:function(){P("Module.noExitRuntime has been replaced with plain noExitRuntime")}}),typeof WebAssembly!="object"&&P("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");function it(a,u,l,v){switch(l=l||"i8",l.charAt(l.length-1)==="*"&&(l="i32"),l){case"i1":ot[a>>0]=u;break;case"i8":ot[a>>0]=u;break;case"i16":Jt[a>>1]=u;break;case"i32":V[a>>2]=u;break;case"i64":wn=[u>>>0,(wt=u,+va(wt)>=1?wt>0?(Gr(+kr(wt/4294967296),4294967295)|0)>>>0:~~+ya((wt-+(~~wt>>>0))/4294967296)>>>0:0)],V[a>>2]=wn[0],V[a+4>>2]=wn[1];break;case"float":An[a>>2]=u;break;case"double":Jn[a>>3]=u;break;default:P("invalid type for setValue: "+l)}}var Re,Pe=new WebAssembly.Table({initial:2176,maximum:2176+0,element:"anyfunc"}),Le=!1;function F(a,u){a||P("Assertion failed: "+u)}function Ge(a){var u=s["_"+a];return F(u,"Cannot call unknown function "+a+", make sure it is exported"),u}function Xt(a,u,l,v,E){var S={string:function(ie){var de=0;if(ie!=null&&ie!==0){var ne=(ie.length<<2)+1;de=Na(ne),qt(ie,de,ne)}return de},array:function(ie){var de=Na(ie.length);return pr(ie,de),de}};function A(ie){return u==="string"?En(ie):u==="boolean"?Boolean(ie):ie}var M=Ge(a),N=[],z=0;if(F(u!=="array",'Return type should not be "array".'),v)for(var $=0;$<v.length;$++){var le=S[l[$]];le?(z===0&&(z=Ns()),N[$]=le(v[$])):N[$]=v[$]}var te=M.apply(null,N);return te=A(te),z!==0&&$o(z),te}function We(a,u,l,v){return function(){return Xt(a,u,l,arguments)}}var ut=1,xt=3;function sn(a,u,l,v){var E,S;typeof a=="number"?(E=!0,S=a):(E=!1,S=a.length);var A=typeof u=="string"?u:null,M;if(l==xt?M=v:M=[Lr,Na,Be][l](Math.max(S,A?1:u.length)),E){var N;for(v=M,F((M&3)==0),N=M+(S&-4);v<N;v+=4)V[v>>2]=0;for(N=M+S;v<N;)ot[v++>>0]=0;return M}if(A==="i8")return a.subarray||a.slice?Et.set(a,M):Et.set(new Uint8Array(a),M),M;for(var z=0,$,le,te;z<S;){var ie=a[z];if($=A||u[z],$===0){z++;continue}F($,"Must know what type to store in allocate!"),$=="i64"&&($="i32"),it(M+z,ie,$),te!==$&&(le=_e($),te=$),z+=le}return M}function at(a){return he?Lr(a):Be(a)}var _n=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function Kn(a,u,l){for(var v=u+l,E=u;a[E]&&!(E>=v);)++E;if(E-u>16&&a.subarray&&_n)return _n.decode(a.subarray(u,E));for(var S="";u<E;){var A=a[u++];if(!(A&128)){S+=String.fromCharCode(A);continue}var M=a[u++]&63;if((A&224)==192){S+=String.fromCharCode((A&31)<<6|M);continue}var N=a[u++]&63;if((A&240)==224?A=(A&15)<<12|M<<6|N:((A&248)!=240&&et("Invalid UTF-8 leading byte 0x"+A.toString(16)+" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"),A=(A&7)<<18|M<<12|N<<6|a[u++]&63),A<65536)S+=String.fromCharCode(A);else{var z=A-65536;S+=String.fromCharCode(55296|z>>10,56320|z&1023)}}return S}function En(a,u){return a?Kn(Et,a,u):""}function lr(a,u,l,v){if(!(v>0))return 0;for(var E=l,S=l+v-1,A=0;A<a.length;++A){var M=a.charCodeAt(A);if(M>=55296&&M<=57343){var N=a.charCodeAt(++A);M=65536+((M&1023)<<10)|N&1023}if(M<=127){if(l>=S)break;u[l++]=M}else if(M<=2047){if(l+1>=S)break;u[l++]=192|M>>6,u[l++]=128|M&63}else if(M<=65535){if(l+2>=S)break;u[l++]=224|M>>12,u[l++]=128|M>>6&63,u[l++]=128|M&63}else{if(l+3>=S)break;M>=2097152&&et("Invalid Unicode code point 0x"+M.toString(16)+" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF)."),u[l++]=240|M>>18,u[l++]=128|M>>12&63,u[l++]=128|M>>6&63,u[l++]=128|M&63}}return u[l]=0,l-E}function qt(a,u,l){return F(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),lr(a,Et,u,l)}function pn(a){for(var u=0,l=0;l<a.length;++l){var v=a.charCodeAt(l);v>=55296&&v<=57343&&(v=65536+((v&1023)<<10)|a.charCodeAt(++l)&1023),v<=127?++u:v<=2047?u+=2:v<=65535?u+=3:u+=4}return u}var cr=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):void 0;function ma(a){F(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=a,l=u>>1;Jt[l];)++l;if(u=l<<1,u-a>32&&cr)return cr.decode(Et.subarray(a,u));for(var v=0,E="";;){var S=Jt[a+v*2>>1];if(S==0)return E;++v,E+=String.fromCharCode(S)}}function Vr(a,u,l){if(F(u%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),F(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l===void 0&&(l=2147483647),l<2)return 0;l-=2;for(var v=u,E=l<a.length*2?l/2:a.length,S=0;S<E;++S){var A=a.charCodeAt(S);Jt[u>>1]=A,u+=2}return Jt[u>>1]=0,u-v}function Wr(a){return a.length*2}function Fr(a){F(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u=0,l="";;){var v=V[a+u*4>>2];if(v==0)return l;if(++u,v>=65536){var E=v-65536;l+=String.fromCharCode(55296|E>>10,56320|E&1023)}else l+=String.fromCharCode(v)}}function On(a,u,l){if(F(u%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),F(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l===void 0&&(l=2147483647),l<4)return 0;for(var v=u,E=v+l-4,S=0;S<a.length;++S){var A=a.charCodeAt(S);if(A>=55296&&A<=57343){var M=a.charCodeAt(++S);A=65536+((A&1023)<<10)|M&1023}if(V[u>>2]=A,u+=4,u+4>E)break}return V[u>>2]=0,u-v}function dr(a){for(var u=0,l=0;l<a.length;++l){var v=a.charCodeAt(l);v>=55296&&v<=57343&&++l,u+=4}return u}function fr(a){var u=pn(a)+1,l=Lr(u);return l&&lr(a,ot,l,u),l}function pr(a,u){F(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ot.set(a,u)}function mn(a,u,l){for(var v=0;v<a.length;++v)F(a.charCodeAt(v)===a.charCodeAt(v)&255),ot[u++>>0]=a.charCodeAt(v);l||(ot[u>>0]=0)}var Dn=65536;function bn(a,u){return a%u>0&&(a+=u-a%u),a}var Kt,ot,Et,Jt,Mn,V,Zt,An,Jn;function xn(a){Kt=a,s.HEAP8=ot=new Int8Array(a),s.HEAP16=Jt=new Int16Array(a),s.HEAP32=V=new Int32Array(a),s.HEAPU8=Et=new Uint8Array(a),s.HEAPU16=Mn=new Uint16Array(a),s.HEAPU32=Zt=new Uint32Array(a),s.HEAPF32=An=new Float32Array(a),s.HEAPF64=Jn=new Float64Array(a)}var Or=7643408,$t=2400528,Dr=7643408,Nr=2400368;F(Or%16===0,"stack must start aligned"),F(Dr%16===0,"heap must start aligned");var Qr=5242880;s.TOTAL_STACK&&F(Qr===s.TOTAL_STACK,"the stack size can no longer be determined at runtime");var ye=s.INITIAL_MEMORY||16777216;Object.getOwnPropertyDescriptor(s,"INITIAL_MEMORY")||Object.defineProperty(s,"INITIAL_MEMORY",{configurable:!0,get:function(){P("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY")}}),F(ye>=Qr,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+ye+"! (TOTAL_STACK="+Qr+")"),F(typeof Int32Array!="undefined"&&typeof Float64Array!="undefined"&&Int32Array.prototype.subarray!==void 0&&Int32Array.prototype.set!==void 0,"JS engine does not provide full typed array support"),s.wasmMemory?Re=s.wasmMemory:Re=new WebAssembly.Memory({initial:ye/Dn}),Re&&(Kt=Re.buffer),ye=Kt.byteLength,F(ye%Dn===0),xn(Kt),V[Nr>>2]=Dr;function ke(){F(($t&3)==0),Zt[($t>>2)+1]=34821223,Zt[($t>>2)+2]=2310721022,V[0]=1668509029}function tt(){var a=Zt[($t>>2)+1],u=Zt[($t>>2)+2];(a!=34821223||u!=2310721022)&&P("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+u.toString(16)+" "+a.toString(16)),V[0]!==1668509029&&P("Runtime error: The application has corrupted its heap memory area (address zero)!")}function Ct(a){P("Stack overflow! Attempted to allocate "+a+" bytes on the stack, but stack has only "+($t-Ns()+a)+" bytes available!")}(function(){var a=new Int16Array(1),u=new Int8Array(a.buffer);if(a[0]=25459,u[0]!==115||u[1]!==99)throw"Runtime error: expected the system to be little-endian!"})();function bt(a){for(;a.length>0;){var u=a.shift();if(typeof u=="function"){u();continue}var l=u.func;typeof l=="number"?u.arg===void 0?s.dynCall_v(l):s.dynCall_vi(l,u.arg):l(u.arg===void 0?null:u.arg)}}var hn=[],on=[],mr=[],Lt=[],he=!1,pe=!1;function Qt(){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)zi(s.preRun.shift());bt(hn)}function ha(){tt(),F(!he),he=!0,Tt.root=y.mount(Tt,{},null),!s.noFSInit&&!y.init.initialized&&y.init(),bt(on)}function Yr(){tt(),y.ignorePermissions=!1,bt(mr)}function vi(){if(tt(),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;)To(s.postRun.shift());bt(Lt)}function zi(a){hn.unshift(a)}function To(a){Lt.unshift(a)}F(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var va=Math.abs,ya=Math.ceil,kr=Math.floor,Gr=Math.min,hr=0,Xn=null,k=null,ue={};function Te(a){for(var u=a;;){if(!ue[a])return a;a=u+Math.random()}}function je(a){hr++,s.monitorRunDependencies&&s.monitorRunDependencies(hr),a?(F(!ue[a]),ue[a]=1,Xn===null&&typeof setInterval!="undefined"&&(Xn=setInterval(function(){if(Le){clearInterval(Xn),Xn=null;return}var u=!1;for(var l in ue)u||(u=!0,ge("still waiting on run dependencies:")),ge("dependency: "+l);u&&ge("(end of list)")},1e4))):ge("warning: run dependency added without ID")}function st(a){if(hr--,s.monitorRunDependencies&&s.monitorRunDependencies(hr),a?(F(ue[a]),delete ue[a]):ge("warning: run dependency removed without ID"),hr==0&&(Xn!==null&&(clearInterval(Xn),Xn=null),k)){var u=k;k=null,u()}}s.preloadedImages={},s.preloadedAudios={};function P(a){s.onAbort&&s.onAbort(a),a+="",Ne(a),ge(a),Le=!0;var u="abort("+a+") at "+ct();throw a=u,new WebAssembly.RuntimeError(a)}var Ie="data:application/octet-stream;base64,";function nt(a){return String.prototype.startsWith?a.startsWith(Ie):a.indexOf(Ie)===0}var kt="libfaust-wasm.wasm";nt(kt)||(kt=G(kt));function Pt(){try{if($e)return new Uint8Array($e);if(ee)return ee(kt);throw"both async and sync fetching of the wasm failed"}catch(a){P(a)}}function ft(){return!$e&&(h||U)&&typeof fetch=="function"?fetch(kt,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+kt+"'";return a.arrayBuffer()}).catch(function(){return Pt()}):new Promise(function(a,u){a(Pt())})}function Bn(){var a={env:Ec,wasi_snapshot_preview1:Ec};function u(M,N){var z=M.exports;s.asm=z,st("wasm-instantiate")}je("wasm-instantiate");var l=s;function v(M){F(s===l,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),l=null,u(M.instance)}function E(M){return ft().then(function(N){return WebAssembly.instantiate(N,a)}).then(M,function(N){ge("failed to asynchronously prepare wasm: "+N),P(N)})}function S(){if(!$e&&typeof WebAssembly.instantiateStreaming=="function"&&!nt(kt)&&typeof fetch=="function")fetch(kt,{credentials:"same-origin"}).then(function(M){var N=WebAssembly.instantiateStreaming(M,a);return N.then(v,function(z){ge("wasm streaming compile failed: "+z),ge("falling back to ArrayBuffer instantiation"),E(v)})});else return E(v)}if(s.instantiateWasm)try{var A=s.instantiateWasm(a,u);return A}catch(M){return ge("Module.instantiateWasm callback failed with error: "+M),!1}return S(),{}}var wt,wn,Mr={299792:function(a){var u="";try{var l=new XMLHttpRequest;l.open("GET",s.UTF8ToString(a),!1),l.send(),l.status==200&&(u=l.responseText)}catch(v){console.log(v)}return sn(qi(u),"i8",ut)},420260:function(a){faust_module.faust.wasm_instance[a]=null},420588:function(a){return faust_module._malloc(a)},420625:function(a){faust_module._free(a)},420653:function(a,u){return faust_module.faust.wasm_instance[a].exports.getNumInputs(u)},420730:function(a,u){return faust_module.faust.wasm_instance[a].exports.getNumOutputs(u)},420805:function(a,u){return faust_module.faust.wasm_instance[a].exports.getSampleRate(u)},420880:function(a,u,l){faust_module.faust.wasm_instance[a].exports.init(u,l)},420947:function(a,u,l){faust_module.faust.wasm_instance[a].exports.instanceInit(u,l)},421018:function(a,u,l){faust_module.faust.wasm_instance[a].exports.instanceConstants(u,l)},421094:function(a,u){faust_module.faust.wasm_instance[a].exports.instanceResetUserInterface(u)},421175:function(a,u){faust_module.faust.wasm_instance[a].exports.instanceClear(u)},421243:function(a,u,l,v,E){faust_module.faust.wasm_instance[a].exports.compute(u,l,v,E)}};function Ru(a,u,l){var v=Gi(u,l);return Mr[a].apply(null,v)}function Ou(){faust_module.faust=faust_module.faust||{},faust_module.faust.memory=faust_module.faust.memory||Re}on.push({func:function(){Yf()}});function gs(a){return et("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),a}function _s(a){var u=/\b_Z[\w\d_]+/g;return a.replace(u,function(l){var v=gs(l);return l===v?l:v+" ["+l+"]"})}function Aa(){var a=new Error;if(!a.stack){try{throw new Error}catch(u){a=u}if(!a.stack)return"(no stack trace available)"}return a.stack.toString()}function ct(){var a=Aa();return s.extraStackTrace&&(a+=`
`+s.extraStackTrace()),_s(a)}function yi(a){return Lr(a)}function qr(){return qr.uncaught_exceptions>0}function So(a,u,l){throw"uncaught_exception"in qr?qr.uncaught_exceptions++:qr.uncaught_exceptions=1,a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function Ro(){P("stack overflow")}function xa(a){return s.___errno_location?V[s.___errno_location()>>2]=a:ge("failed to set errno from JS"),a}function Oo(a,u){return xa(63),-1}var pt={splitPath:function(a){var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return u.exec(a).slice(1)},normalizeArray:function(a,u){for(var l=0,v=a.length-1;v>=0;v--){var E=a[v];E==="."?a.splice(v,1):E===".."?(a.splice(v,1),l++):l&&(a.splice(v,1),l--)}if(u)for(;l;l--)a.unshift("..");return a},normalize:function(a){var u=a.charAt(0)==="/",l=a.substr(-1)==="/";return a=pt.normalizeArray(a.split("/").filter(function(v){return!!v}),!u).join("/"),!a&&!u&&(a="."),a&&l&&(a+="/"),(u?"/":"")+a},dirname:function(a){var u=pt.splitPath(a),l=u[0],v=u[1];return!l&&!v?".":(v&&(v=v.substr(0,v.length-1)),l+v)},basename:function(a){if(a==="/")return"/";var u=a.lastIndexOf("/");return u===-1?a:a.substr(u+1)},extname:function(a){return pt.splitPath(a)[3]},join:function(){var a=Array.prototype.slice.call(arguments,0);return pt.normalize(a.join("/"))},join2:function(a,u){return pt.normalize(a+"/"+u)}},vr={resolve:function(){for(var a="",u=!1,l=arguments.length-1;l>=-1&&!u;l--){var v=l>=0?arguments[l]:y.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";a=v+"/"+a,u=v.charAt(0)==="/"}return a=pt.normalizeArray(a.split("/").filter(function(E){return!!E}),!u).join("/"),(u?"/":"")+a||"."},relative:function(a,u){a=vr.resolve(a).substr(1),u=vr.resolve(u).substr(1);function l(z){for(var $=0;$<z.length&&z[$]==="";$++);for(var le=z.length-1;le>=0&&z[le]==="";le--);return $>le?[]:z.slice($,le-$+1)}for(var v=l(a.split("/")),E=l(u.split("/")),S=Math.min(v.length,E.length),A=S,M=0;M<S;M++)if(v[M]!==E[M]){A=M;break}for(var N=[],M=A;M<v.length;M++)N.push("..");return N=N.concat(E.slice(A)),N.join("/")}},Kr={ttys:[],init:function(){},shutdown:function(){},register:function(a,u){Kr.ttys[a]={input:[],output:[],ops:u},y.registerDevice(a,Kr.stream_ops)},stream_ops:{open:function(a){var u=Kr.ttys[a.node.rdev];if(!u)throw new y.ErrnoError(43);a.tty=u,a.seekable=!1},close:function(a){a.tty.ops.flush(a.tty)},flush:function(a){a.tty.ops.flush(a.tty)},read:function(a,u,l,v,E){if(!a.tty||!a.tty.ops.get_char)throw new y.ErrnoError(60);for(var S=0,A=0;A<v;A++){var M;try{M=a.tty.ops.get_char(a.tty)}catch{throw new y.ErrnoError(29)}if(M===void 0&&S===0)throw new y.ErrnoError(6);if(M==null)break;S++,u[l+A]=M}return S&&(a.node.timestamp=Date.now()),S},write:function(a,u,l,v,E){if(!a.tty||!a.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var S=0;S<v;S++)a.tty.ops.put_char(a.tty,u[l+S])}catch{throw new y.ErrnoError(29)}return v&&(a.node.timestamp=Date.now()),S}},default_tty_ops:{get_char:function(a){if(!a.input.length){var u=null;if(x){var l=256,v=Buffer.alloc?Buffer.alloc(l):new Buffer(l),E=0;try{E=oe.readSync(process.stdin.fd,v,0,l,null)}catch(S){if(S.toString().indexOf("EOF")!=-1)E=0;else throw S}E>0?u=v.slice(0,E).toString("utf-8"):u=null}else typeof window!="undefined"&&typeof window.prompt=="function"?(u=window.prompt("Input: "),u!==null&&(u+=`
`)):typeof readline=="function"&&(u=readline(),u!==null&&(u+=`
`));if(!u)return null;a.input=qi(u,!0)}return a.input.shift()},put_char:function(a,u){u===null||u===10?(Ne(Kn(a.output,0)),a.output=[]):u!=0&&a.output.push(u)},flush:function(a){a.output&&a.output.length>0&&(Ne(Kn(a.output,0)),a.output=[])}},default_tty1_ops:{put_char:function(a,u){u===null||u===10?(ge(Kn(a.output,0)),a.output=[]):u!=0&&a.output.push(u)},flush:function(a){a.output&&a.output.length>0&&(ge(Kn(a.output,0)),a.output=[])}}},Ze={ops_table:null,mount:function(a){return Ze.createNode(null,"/",16895,0)},createNode:function(a,u,l,v){if(y.isBlkdev(l)||y.isFIFO(l))throw new y.ErrnoError(63);Ze.ops_table||(Ze.ops_table={dir:{node:{getattr:Ze.node_ops.getattr,setattr:Ze.node_ops.setattr,lookup:Ze.node_ops.lookup,mknod:Ze.node_ops.mknod,rename:Ze.node_ops.rename,unlink:Ze.node_ops.unlink,rmdir:Ze.node_ops.rmdir,readdir:Ze.node_ops.readdir,symlink:Ze.node_ops.symlink},stream:{llseek:Ze.stream_ops.llseek}},file:{node:{getattr:Ze.node_ops.getattr,setattr:Ze.node_ops.setattr},stream:{llseek:Ze.stream_ops.llseek,read:Ze.stream_ops.read,write:Ze.stream_ops.write,allocate:Ze.stream_ops.allocate,mmap:Ze.stream_ops.mmap,msync:Ze.stream_ops.msync}},link:{node:{getattr:Ze.node_ops.getattr,setattr:Ze.node_ops.setattr,readlink:Ze.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ze.node_ops.getattr,setattr:Ze.node_ops.setattr},stream:y.chrdev_stream_ops}});var E=y.createNode(a,u,l,v);return y.isDir(E.mode)?(E.node_ops=Ze.ops_table.dir.node,E.stream_ops=Ze.ops_table.dir.stream,E.contents={}):y.isFile(E.mode)?(E.node_ops=Ze.ops_table.file.node,E.stream_ops=Ze.ops_table.file.stream,E.usedBytes=0,E.contents=null):y.isLink(E.mode)?(E.node_ops=Ze.ops_table.link.node,E.stream_ops=Ze.ops_table.link.stream):y.isChrdev(E.mode)&&(E.node_ops=Ze.ops_table.chrdev.node,E.stream_ops=Ze.ops_table.chrdev.stream),E.timestamp=Date.now(),a&&(a.contents[u]=E),E},getFileDataAsRegularArray:function(a){if(a.contents&&a.contents.subarray){for(var u=[],l=0;l<a.usedBytes;++l)u.push(a.contents[l]);return u}return a.contents},getFileDataAsTypedArray:function(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage:function(a,u){var l=a.contents?a.contents.length:0;if(!(l>=u)){var v=1024*1024;u=Math.max(u,l*(l<v?2:1.125)|0),l!=0&&(u=Math.max(u,256));var E=a.contents;a.contents=new Uint8Array(u),a.usedBytes>0&&a.contents.set(E.subarray(0,a.usedBytes),0)}},resizeFileStorage:function(a,u){if(a.usedBytes!=u){if(u==0){a.contents=null,a.usedBytes=0;return}if(!a.contents||a.contents.subarray){var l=a.contents;a.contents=new Uint8Array(u),l&&a.contents.set(l.subarray(0,Math.min(u,a.usedBytes))),a.usedBytes=u;return}if(a.contents||(a.contents=[]),a.contents.length>u)a.contents.length=u;else for(;a.contents.length<u;)a.contents.push(0);a.usedBytes=u}},node_ops:{getattr:function(a){var u={};return u.dev=y.isChrdev(a.mode)?a.id:1,u.ino=a.id,u.mode=a.mode,u.nlink=1,u.uid=0,u.gid=0,u.rdev=a.rdev,y.isDir(a.mode)?u.size=4096:y.isFile(a.mode)?u.size=a.usedBytes:y.isLink(a.mode)?u.size=a.link.length:u.size=0,u.atime=new Date(a.timestamp),u.mtime=new Date(a.timestamp),u.ctime=new Date(a.timestamp),u.blksize=4096,u.blocks=Math.ceil(u.size/u.blksize),u},setattr:function(a,u){u.mode!==void 0&&(a.mode=u.mode),u.timestamp!==void 0&&(a.timestamp=u.timestamp),u.size!==void 0&&Ze.resizeFileStorage(a,u.size)},lookup:function(a,u){throw y.genericErrors[44]},mknod:function(a,u,l,v){return Ze.createNode(a,u,l,v)},rename:function(a,u,l){if(y.isDir(a.mode)){var v;try{v=y.lookupNode(u,l)}catch{}if(v)for(var E in v.contents)throw new y.ErrnoError(55)}delete a.parent.contents[a.name],a.name=l,u.contents[l]=a,a.parent=u},unlink:function(a,u){delete a.contents[u]},rmdir:function(a,u){var l=y.lookupNode(a,u);for(var v in l.contents)throw new y.ErrnoError(55);delete a.contents[u]},readdir:function(a){var u=[".",".."];for(var l in a.contents)!a.contents.hasOwnProperty(l)||u.push(l);return u},symlink:function(a,u,l){var v=Ze.createNode(a,u,41471,0);return v.link=l,v},readlink:function(a){if(!y.isLink(a.mode))throw new y.ErrnoError(28);return a.link}},stream_ops:{read:function(a,u,l,v,E){var S=a.node.contents;if(E>=a.node.usedBytes)return 0;var A=Math.min(a.node.usedBytes-E,v);if(F(A>=0),A>8&&S.subarray)u.set(S.subarray(E,E+A),l);else for(var M=0;M<A;M++)u[l+M]=S[E+M];return A},write:function(a,u,l,v,E,S){if(F(!(u instanceof ArrayBuffer)),u.buffer===ot.buffer&&(S&&et("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"),S=!1),!v)return 0;var A=a.node;if(A.timestamp=Date.now(),u.subarray&&(!A.contents||A.contents.subarray)){if(S)return F(E===0,"canOwn must imply no weird position inside the file"),A.contents=u.subarray(l,l+v),A.usedBytes=v,v;if(A.usedBytes===0&&E===0)return A.contents=u.slice(l,l+v),A.usedBytes=v,v;if(E+v<=A.usedBytes)return A.contents.set(u.subarray(l,l+v),E),v}if(Ze.expandFileStorage(A,E+v),A.contents.subarray&&u.subarray)A.contents.set(u.subarray(l,l+v),E);else for(var M=0;M<v;M++)A.contents[E+M]=u[l+M];return A.usedBytes=Math.max(A.usedBytes,E+v),v},llseek:function(a,u,l){var v=u;if(l===1?v+=a.position:l===2&&y.isFile(a.node.mode)&&(v+=a.node.usedBytes),v<0)throw new y.ErrnoError(28);return v},allocate:function(a,u,l){Ze.expandFileStorage(a.node,u+l),a.node.usedBytes=Math.max(a.node.usedBytes,u+l)},mmap:function(a,u,l,v,E,S,A){if(F(!(u instanceof ArrayBuffer)),!y.isFile(a.node.mode))throw new y.ErrnoError(43);var M,N,z=a.node.contents;if(!(A&2)&&z.buffer===u.buffer)N=!1,M=z.byteOffset;else{(E>0||E+v<z.length)&&(z.subarray?z=z.subarray(E,E+v):z=Array.prototype.slice.call(z,E,E+v)),N=!0;var $=u.buffer==ot.buffer;if(M=Lr(v),!M)throw new y.ErrnoError(48);($?ot:u).set(z,M)}return{ptr:M,allocated:N}},msync:function(a,u,l,v,E){if(!y.isFile(a.node.mode))throw new y.ErrnoError(43);return E&2||Ze.stream_ops.write(a,u,0,v,l,!1),0}}},Du={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},Vt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(a){if(!(a instanceof y.ErrnoError))throw a+" : "+ct();return xa(a.errno)},lookupPath:function(a,u){if(a=vr.resolve(y.cwd(),a),u=u||{},!a)return{path:"",node:null};var l={follow_mount:!0,recurse_count:0};for(var v in l)u[v]===void 0&&(u[v]=l[v]);if(u.recurse_count>8)throw new y.ErrnoError(32);for(var E=pt.normalizeArray(a.split("/").filter(function(te){return!!te}),!1),S=y.root,A="/",M=0;M<E.length;M++){var N=M===E.length-1;if(N&&u.parent)break;if(S=y.lookupNode(S,E[M]),A=pt.join2(A,E[M]),y.isMountpoint(S)&&(!N||N&&u.follow_mount)&&(S=S.mounted.root),!N||u.follow)for(var z=0;y.isLink(S.mode);){var $=y.readlink(A);A=vr.resolve(pt.dirname(A),$);var le=y.lookupPath(A,{recurse_count:u.recurse_count});if(S=le.node,z++>40)throw new y.ErrnoError(32)}}return{path:A,node:S}},getPath:function(a){for(var u;;){if(y.isRoot(a)){var l=a.mount.mountpoint;return u?l[l.length-1]!=="/"?l+"/"+u:l+u:l}u=u?a.name+"/"+u:a.name,a=a.parent}},hashName:function(a,u){for(var l=0,v=0;v<u.length;v++)l=(l<<5)-l+u.charCodeAt(v)|0;return(a+l>>>0)%y.nameTable.length},hashAddNode:function(a){var u=y.hashName(a.parent.id,a.name);a.name_next=y.nameTable[u],y.nameTable[u]=a},hashRemoveNode:function(a){var u=y.hashName(a.parent.id,a.name);if(y.nameTable[u]===a)y.nameTable[u]=a.name_next;else for(var l=y.nameTable[u];l;){if(l.name_next===a){l.name_next=a.name_next;break}l=l.name_next}},lookupNode:function(a,u){var l=y.mayLookup(a);if(l)throw new y.ErrnoError(l,a);for(var v=y.hashName(a.id,u),E=y.nameTable[v];E;E=E.name_next){var S=E.name;if(E.parent.id===a.id&&S===u)return E}return y.lookup(a,u)},createNode:function(a,u,l,v){var E=new y.FSNode(a,u,l,v);return y.hashAddNode(E),E},destroyNode:function(a){y.hashRemoveNode(a)},isRoot:function(a){return a===a.parent},isMountpoint:function(a){return!!a.mounted},isFile:function(a){return(a&61440)===32768},isDir:function(a){return(a&61440)===16384},isLink:function(a){return(a&61440)===40960},isChrdev:function(a){return(a&61440)===8192},isBlkdev:function(a){return(a&61440)===24576},isFIFO:function(a){return(a&61440)===4096},isSocket:function(a){return(a&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(a){var u=y.flagModes[a];if(typeof u=="undefined")throw new Error("Unknown file open mode: "+a);return u},flagsToPermissionString:function(a){var u=["r","w","rw"][a&3];return a&512&&(u+="w"),u},nodePermissions:function(a,u){return y.ignorePermissions?0:u.indexOf("r")!==-1&&!(a.mode&292)||u.indexOf("w")!==-1&&!(a.mode&146)||u.indexOf("x")!==-1&&!(a.mode&73)?2:0},mayLookup:function(a){var u=y.nodePermissions(a,"x");return u||(a.node_ops.lookup?0:2)},mayCreate:function(a,u){try{var l=y.lookupNode(a,u);return 20}catch{}return y.nodePermissions(a,"wx")},mayDelete:function(a,u,l){var v;try{v=y.lookupNode(a,u)}catch(S){return S.errno}var E=y.nodePermissions(a,"wx");if(E)return E;if(l){if(!y.isDir(v.mode))return 54;if(y.isRoot(v)||y.getPath(v)===y.cwd())return 10}else if(y.isDir(v.mode))return 31;return 0},mayOpen:function(a,u){return a?y.isLink(a.mode)?32:y.isDir(a.mode)&&(y.flagsToPermissionString(u)!=="r"||u&512)?31:y.nodePermissions(a,y.flagsToPermissionString(u)):44},MAX_OPEN_FDS:4096,nextfd:function(a,u){a=a||0,u=u||y.MAX_OPEN_FDS;for(var l=a;l<=u;l++)if(!y.streams[l])return l;throw new y.ErrnoError(33)},getStream:function(a){return y.streams[a]},createStream:function(a,u,l){y.FSStream||(y.FSStream=function(){},y.FSStream.prototype={object:{get:function(){return this.node},set:function(A){this.node=A}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var v=new y.FSStream;for(var E in a)v[E]=a[E];a=v;var S=y.nextfd(u,l);return a.fd=S,y.streams[S]=a,a},closeStream:function(a){y.streams[a]=null},chrdev_stream_ops:{open:function(a){var u=y.getDevice(a.node.rdev);a.stream_ops=u.stream_ops,a.stream_ops.open&&a.stream_ops.open(a)},llseek:function(){throw new y.ErrnoError(70)}},major:function(a){return a>>8},minor:function(a){return a&255},makedev:function(a,u){return a<<8|u},registerDevice:function(a,u){y.devices[a]={stream_ops:u}},getDevice:function(a){return y.devices[a]},getMounts:function(a){for(var u=[],l=[a];l.length;){var v=l.pop();u.push(v),l.push.apply(l,v.mounts)}return u},syncfs:function(a,u){typeof a=="function"&&(u=a,a=!1),y.syncFSRequests++,y.syncFSRequests>1&&ge("warning: "+y.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var l=y.getMounts(y.root.mount),v=0;function E(A){return F(y.syncFSRequests>0),y.syncFSRequests--,u(A)}function S(A){if(A)return S.errored?void 0:(S.errored=!0,E(A));++v>=l.length&&E(null)}l.forEach(function(A){if(!A.type.syncfs)return S(null);A.type.syncfs(A,a,S)})},mount:function(a,u,l){if(typeof a=="string")throw a;var v=l==="/",E=!l,S;if(v&&y.root)throw new y.ErrnoError(10);if(!v&&!E){var A=y.lookupPath(l,{follow_mount:!1});if(l=A.path,S=A.node,y.isMountpoint(S))throw new y.ErrnoError(10);if(!y.isDir(S.mode))throw new y.ErrnoError(54)}var M={type:a,opts:u,mountpoint:l,mounts:[]},N=a.mount(M);return N.mount=M,M.root=N,v?y.root=N:S&&(S.mounted=M,S.mount&&S.mount.mounts.push(M)),N},unmount:function(a){var u=y.lookupPath(a,{follow_mount:!1});if(!y.isMountpoint(u.node))throw new y.ErrnoError(28);var l=u.node,v=l.mounted,E=y.getMounts(v);Object.keys(y.nameTable).forEach(function(A){for(var M=y.nameTable[A];M;){var N=M.name_next;E.indexOf(M.mount)!==-1&&y.destroyNode(M),M=N}}),l.mounted=null;var S=l.mount.mounts.indexOf(v);F(S!==-1),l.mount.mounts.splice(S,1)},lookup:function(a,u){return a.node_ops.lookup(a,u)},mknod:function(a,u,l){var v=y.lookupPath(a,{parent:!0}),E=v.node,S=pt.basename(a);if(!S||S==="."||S==="..")throw new y.ErrnoError(28);var A=y.mayCreate(E,S);if(A)throw new y.ErrnoError(A);if(!E.node_ops.mknod)throw new y.ErrnoError(63);return E.node_ops.mknod(E,S,u,l)},create:function(a,u){return u=u!==void 0?u:438,u&=4095,u|=32768,y.mknod(a,u,0)},mkdir:function(a,u){return u=u!==void 0?u:511,u&=1023,u|=16384,y.mknod(a,u,0)},mkdirTree:function(a,u){for(var l=a.split("/"),v="",E=0;E<l.length;++E)if(!!l[E]){v+="/"+l[E];try{y.mkdir(v,u)}catch(S){if(S.errno!=20)throw S}}},mkdev:function(a,u,l){return typeof l=="undefined"&&(l=u,u=438),u|=8192,y.mknod(a,u,l)},symlink:function(a,u){if(!vr.resolve(a))throw new y.ErrnoError(44);var l=y.lookupPath(u,{parent:!0}),v=l.node;if(!v)throw new y.ErrnoError(44);var E=pt.basename(u),S=y.mayCreate(v,E);if(S)throw new y.ErrnoError(S);if(!v.node_ops.symlink)throw new y.ErrnoError(63);return v.node_ops.symlink(v,E,a)},rename:function(a,u){var l=pt.dirname(a),v=pt.dirname(u),E=pt.basename(a),S=pt.basename(u),A,M,N;try{A=y.lookupPath(a,{parent:!0}),M=A.node,A=y.lookupPath(u,{parent:!0}),N=A.node}catch{throw new y.ErrnoError(10)}if(!M||!N)throw new y.ErrnoError(44);if(M.mount!==N.mount)throw new y.ErrnoError(75);var z=y.lookupNode(M,E),$=vr.relative(a,v);if($.charAt(0)!==".")throw new y.ErrnoError(28);if($=vr.relative(u,l),$.charAt(0)!==".")throw new y.ErrnoError(55);var le;try{le=y.lookupNode(N,S)}catch{}if(z!==le){var te=y.isDir(z.mode),ie=y.mayDelete(M,E,te);if(ie)throw new y.ErrnoError(ie);if(ie=le?y.mayDelete(N,S,te):y.mayCreate(N,S),ie)throw new y.ErrnoError(ie);if(!M.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(z)||le&&y.isMountpoint(le))throw new y.ErrnoError(10);if(N!==M&&(ie=y.nodePermissions(M,"w"),ie))throw new y.ErrnoError(ie);try{y.trackingDelegate.willMovePath&&y.trackingDelegate.willMovePath(a,u)}catch(de){ge("FS.trackingDelegate['willMovePath']('"+a+"', '"+u+"') threw an exception: "+de.message)}y.hashRemoveNode(z);try{M.node_ops.rename(z,N,S)}catch(de){throw de}finally{y.hashAddNode(z)}try{y.trackingDelegate.onMovePath&&y.trackingDelegate.onMovePath(a,u)}catch(de){ge("FS.trackingDelegate['onMovePath']('"+a+"', '"+u+"') threw an exception: "+de.message)}}},rmdir:function(a){var u=y.lookupPath(a,{parent:!0}),l=u.node,v=pt.basename(a),E=y.lookupNode(l,v),S=y.mayDelete(l,v,!0);if(S)throw new y.ErrnoError(S);if(!l.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(E))throw new y.ErrnoError(10);try{y.trackingDelegate.willDeletePath&&y.trackingDelegate.willDeletePath(a)}catch(A){ge("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+A.message)}l.node_ops.rmdir(l,v),y.destroyNode(E);try{y.trackingDelegate.onDeletePath&&y.trackingDelegate.onDeletePath(a)}catch(A){ge("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+A.message)}},readdir:function(a){var u=y.lookupPath(a,{follow:!0}),l=u.node;if(!l.node_ops.readdir)throw new y.ErrnoError(54);return l.node_ops.readdir(l)},unlink:function(a){var u=y.lookupPath(a,{parent:!0}),l=u.node,v=pt.basename(a),E=y.lookupNode(l,v),S=y.mayDelete(l,v,!1);if(S)throw new y.ErrnoError(S);if(!l.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(E))throw new y.ErrnoError(10);try{y.trackingDelegate.willDeletePath&&y.trackingDelegate.willDeletePath(a)}catch(A){ge("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+A.message)}l.node_ops.unlink(l,v),y.destroyNode(E);try{y.trackingDelegate.onDeletePath&&y.trackingDelegate.onDeletePath(a)}catch(A){ge("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+A.message)}},readlink:function(a){var u=y.lookupPath(a),l=u.node;if(!l)throw new y.ErrnoError(44);if(!l.node_ops.readlink)throw new y.ErrnoError(28);return vr.resolve(y.getPath(l.parent),l.node_ops.readlink(l))},stat:function(a,u){var l=y.lookupPath(a,{follow:!u}),v=l.node;if(!v)throw new y.ErrnoError(44);if(!v.node_ops.getattr)throw new y.ErrnoError(63);return v.node_ops.getattr(v)},lstat:function(a){return y.stat(a,!0)},chmod:function(a,u,l){var v;if(typeof a=="string"){var E=y.lookupPath(a,{follow:!l});v=E.node}else v=a;if(!v.node_ops.setattr)throw new y.ErrnoError(63);v.node_ops.setattr(v,{mode:u&4095|v.mode&-4096,timestamp:Date.now()})},lchmod:function(a,u){y.chmod(a,u,!0)},fchmod:function(a,u){var l=y.getStream(a);if(!l)throw new y.ErrnoError(8);y.chmod(l.node,u)},chown:function(a,u,l,v){var E;if(typeof a=="string"){var S=y.lookupPath(a,{follow:!v});E=S.node}else E=a;if(!E.node_ops.setattr)throw new y.ErrnoError(63);E.node_ops.setattr(E,{timestamp:Date.now()})},lchown:function(a,u,l){y.chown(a,u,l,!0)},fchown:function(a,u,l){var v=y.getStream(a);if(!v)throw new y.ErrnoError(8);y.chown(v.node,u,l)},truncate:function(a,u){if(u<0)throw new y.ErrnoError(28);var l;if(typeof a=="string"){var v=y.lookupPath(a,{follow:!0});l=v.node}else l=a;if(!l.node_ops.setattr)throw new y.ErrnoError(63);if(y.isDir(l.mode))throw new y.ErrnoError(31);if(!y.isFile(l.mode))throw new y.ErrnoError(28);var E=y.nodePermissions(l,"w");if(E)throw new y.ErrnoError(E);l.node_ops.setattr(l,{size:u,timestamp:Date.now()})},ftruncate:function(a,u){var l=y.getStream(a);if(!l)throw new y.ErrnoError(8);if((l.flags&2097155)===0)throw new y.ErrnoError(28);y.truncate(l.node,u)},utime:function(a,u,l){var v=y.lookupPath(a,{follow:!0}),E=v.node;E.node_ops.setattr(E,{timestamp:Math.max(u,l)})},open:function(a,u,l,v,E){if(a==="")throw new y.ErrnoError(44);u=typeof u=="string"?y.modeStringToFlags(u):u,l=typeof l=="undefined"?438:l,u&64?l=l&4095|32768:l=0;var S;if(typeof a=="object")S=a;else{a=pt.normalize(a);try{var A=y.lookupPath(a,{follow:!(u&131072)});S=A.node}catch{}}var M=!1;if(u&64)if(S){if(u&128)throw new y.ErrnoError(20)}else S=y.mknod(a,l,0),M=!0;if(!S)throw new y.ErrnoError(44);if(y.isChrdev(S.mode)&&(u&=-513),u&65536&&!y.isDir(S.mode))throw new y.ErrnoError(54);if(!M){var N=y.mayOpen(S,u);if(N)throw new y.ErrnoError(N)}u&512&&y.truncate(S,0),u&=-641;var z=y.createStream({node:S,path:y.getPath(S),flags:u,seekable:!0,position:0,stream_ops:S.stream_ops,ungotten:[],error:!1},v,E);z.stream_ops.open&&z.stream_ops.open(z),s.logReadFiles&&!(u&1)&&(y.readFiles||(y.readFiles={}),a in y.readFiles||(y.readFiles[a]=1,ge("FS.trackingDelegate error on read file: "+a)));try{if(y.trackingDelegate.onOpenFile){var $=0;(u&2097155)!==1&&($|=y.tracking.openFlags.READ),(u&2097155)!==0&&($|=y.tracking.openFlags.WRITE),y.trackingDelegate.onOpenFile(a,$)}}catch(le){ge("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+le.message)}return z},close:function(a){if(y.isClosed(a))throw new y.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(u){throw u}finally{y.closeStream(a.fd)}a.fd=null},isClosed:function(a){return a.fd===null},llseek:function(a,u,l){if(y.isClosed(a))throw new y.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new y.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new y.ErrnoError(28);return a.position=a.stream_ops.llseek(a,u,l),a.ungotten=[],a.position},read:function(a,u,l,v,E){if(v<0||E<0)throw new y.ErrnoError(28);if(y.isClosed(a))throw new y.ErrnoError(8);if((a.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(a.node.mode))throw new y.ErrnoError(31);if(!a.stream_ops.read)throw new y.ErrnoError(28);var S=typeof E!="undefined";if(!S)E=a.position;else if(!a.seekable)throw new y.ErrnoError(70);var A=a.stream_ops.read(a,u,l,v,E);return S||(a.position+=A),A},write:function(a,u,l,v,E,S){if(v<0||E<0)throw new y.ErrnoError(28);if(y.isClosed(a))throw new y.ErrnoError(8);if((a.flags&2097155)===0)throw new y.ErrnoError(8);if(y.isDir(a.node.mode))throw new y.ErrnoError(31);if(!a.stream_ops.write)throw new y.ErrnoError(28);a.flags&1024&&y.llseek(a,0,2);var A=typeof E!="undefined";if(!A)E=a.position;else if(!a.seekable)throw new y.ErrnoError(70);var M=a.stream_ops.write(a,u,l,v,E,S);A||(a.position+=M);try{a.path&&y.trackingDelegate.onWriteToFile&&y.trackingDelegate.onWriteToFile(a.path)}catch(N){ge("FS.trackingDelegate['onWriteToFile']('"+a.path+"') threw an exception: "+N.message)}return M},allocate:function(a,u,l){if(y.isClosed(a))throw new y.ErrnoError(8);if(u<0||l<=0)throw new y.ErrnoError(28);if((a.flags&2097155)===0)throw new y.ErrnoError(8);if(!y.isFile(a.node.mode)&&!y.isDir(a.node.mode))throw new y.ErrnoError(43);if(!a.stream_ops.allocate)throw new y.ErrnoError(138);a.stream_ops.allocate(a,u,l)},mmap:function(a,u,l,v,E,S,A){if((S&2)!==0&&(A&2)===0&&(a.flags&2097155)!==2)throw new y.ErrnoError(2);if((a.flags&2097155)===1)throw new y.ErrnoError(2);if(!a.stream_ops.mmap)throw new y.ErrnoError(43);return a.stream_ops.mmap(a,u,l,v,E,S,A)},msync:function(a,u,l,v,E){return!a||!a.stream_ops.msync?0:a.stream_ops.msync(a,u,l,v,E)},munmap:function(a){return 0},ioctl:function(a,u,l){if(!a.stream_ops.ioctl)throw new y.ErrnoError(59);return a.stream_ops.ioctl(a,u,l)},readFile:function(a,u){if(u=u||{},u.flags=u.flags||"r",u.encoding=u.encoding||"binary",u.encoding!=="utf8"&&u.encoding!=="binary")throw new Error('Invalid encoding type "'+u.encoding+'"');var l,v=y.open(a,u.flags),E=y.stat(a),S=E.size,A=new Uint8Array(S);return y.read(v,A,0,S,0),u.encoding==="utf8"?l=Kn(A,0):u.encoding==="binary"&&(l=A),y.close(v),l},writeFile:function(a,u,l){l=l||{},l.flags=l.flags||"w";var v=y.open(a,l.flags,l.mode);if(typeof u=="string"){var E=new Uint8Array(pn(u)+1),S=lr(u,E,0,E.length);y.write(v,E,0,S,void 0,l.canOwn)}else if(ArrayBuffer.isView(u))y.write(v,u,0,u.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");y.close(v)},cwd:function(){return y.currentPath},chdir:function(a){var u=y.lookupPath(a,{follow:!0});if(u.node===null)throw new y.ErrnoError(44);if(!y.isDir(u.node.mode))throw new y.ErrnoError(54);var l=y.nodePermissions(u.node,"x");if(l)throw new y.ErrnoError(l);y.currentPath=u.path},createDefaultDirectories:function(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices:function(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:function(){return 0},write:function(v,E,S,A,M){return A}}),y.mkdev("/dev/null",y.makedev(1,3)),Kr.register(y.makedev(5,0),Kr.default_tty_ops),Kr.register(y.makedev(6,0),Kr.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var a;if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var u=new Uint8Array(1);a=function(){return crypto.getRandomValues(u),u[0]}}else if(x)try{var l=require("crypto");a=function(){return l.randomBytes(1)[0]}}catch{}a||(a=function(){P("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")}),y.createDevice("/dev","random",a),y.createDevice("/dev","urandom",a),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){y.mkdir("/proc"),y.mkdir("/proc/self"),y.mkdir("/proc/self/fd"),y.mount({mount:function(){var a=y.createNode("/proc/self","fd",16895,73);return a.node_ops={lookup:function(u,l){var v=+l,E=y.getStream(v);if(!E)throw new y.ErrnoError(8);var S={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return E.path}}};return S.parent=S,S}},a}},{},"/proc/self/fd")},createStandardStreams:function(){s.stdin?y.createDevice("/dev","stdin",s.stdin):y.symlink("/dev/tty","/dev/stdin"),s.stdout?y.createDevice("/dev","stdout",null,s.stdout):y.symlink("/dev/tty","/dev/stdout"),s.stderr?y.createDevice("/dev","stderr",null,s.stderr):y.symlink("/dev/tty1","/dev/stderr");var a=y.open("/dev/stdin","r"),u=y.open("/dev/stdout","w"),l=y.open("/dev/stderr","w");F(a.fd===0,"invalid handle for stdin ("+a.fd+")"),F(u.fd===1,"invalid handle for stdout ("+u.fd+")"),F(l.fd===2,"invalid handle for stderr ("+l.fd+")")},ensureErrnoError:function(){y.ErrnoError||(y.ErrnoError=function(u,l){this.node=l,this.setErrno=function(v){this.errno=v;for(var E in Vt)if(Vt[E]===v){this.code=E;break}},this.setErrno(u),this.message=Du[u],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=_s(this.stack))},y.ErrnoError.prototype=new Error,y.ErrnoError.prototype.constructor=y.ErrnoError,[44].forEach(function(a){y.genericErrors[a]=new y.ErrnoError(a),y.genericErrors[a].stack="<generic error, no stack>"}))},staticInit:function(){y.ensureErrnoError(),y.nameTable=new Array(4096),y.mount(Ze,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:Ze}},init:function(a,u,l){F(!y.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),y.init.initialized=!0,y.ensureErrnoError(),s.stdin=a||s.stdin,s.stdout=u||s.stdout,s.stderr=l||s.stderr,y.createStandardStreams()},quit:function(){y.init.initialized=!1;var a=s._fflush;a&&a(0);for(var u=0;u<y.streams.length;u++){var l=y.streams[u];!l||y.close(l)}},getMode:function(a,u){var l=0;return a&&(l|=365),u&&(l|=146),l},joinPath:function(a,u){var l=pt.join.apply(null,a);return u&&l[0]=="/"&&(l=l.substr(1)),l},absolutePath:function(a,u){return vr.resolve(u,a)},standardizePath:function(a){return pt.normalize(a)},findObject:function(a,u){var l=y.analyzePath(a,u);return l.exists?l.object:(xa(l.error),null)},analyzePath:function(a,u){try{var l=y.lookupPath(a,{follow:!u});a=l.path}catch{}var v={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=y.lookupPath(a,{parent:!0});v.parentExists=!0,v.parentPath=l.path,v.parentObject=l.node,v.name=pt.basename(a),l=y.lookupPath(a,{follow:!u}),v.exists=!0,v.path=l.path,v.object=l.node,v.name=l.node.name,v.isRoot=l.path==="/"}catch(E){v.error=E.errno}return v},createFolder:function(a,u,l,v){var E=pt.join2(typeof a=="string"?a:y.getPath(a),u),S=y.getMode(l,v);return y.mkdir(E,S)},createPath:function(a,u,l,v){a=typeof a=="string"?a:y.getPath(a);for(var E=u.split("/").reverse();E.length;){var S=E.pop();if(!!S){var A=pt.join2(a,S);try{y.mkdir(A)}catch{}a=A}}return A},createFile:function(a,u,l,v,E){var S=pt.join2(typeof a=="string"?a:y.getPath(a),u),A=y.getMode(v,E);return y.create(S,A)},createDataFile:function(a,u,l,v,E,S){var A=u?pt.join2(typeof a=="string"?a:y.getPath(a),u):a,M=y.getMode(v,E),N=y.create(A,M);if(l){if(typeof l=="string"){for(var z=new Array(l.length),$=0,le=l.length;$<le;++$)z[$]=l.charCodeAt($);l=z}y.chmod(N,M|146);var te=y.open(N,"w");y.write(te,l,0,l.length,0,S),y.close(te),y.chmod(N,M)}return N},createDevice:function(a,u,l,v){var E=pt.join2(typeof a=="string"?a:y.getPath(a),u),S=y.getMode(!!l,!!v);y.createDevice.major||(y.createDevice.major=64);var A=y.makedev(y.createDevice.major++,0);return y.registerDevice(A,{open:function(M){M.seekable=!1},close:function(M){v&&v.buffer&&v.buffer.length&&v(10)},read:function(M,N,z,$,le){for(var te=0,ie=0;ie<$;ie++){var de;try{de=l()}catch{throw new y.ErrnoError(29)}if(de===void 0&&te===0)throw new y.ErrnoError(6);if(de==null)break;te++,N[z+ie]=de}return te&&(M.node.timestamp=Date.now()),te},write:function(M,N,z,$,le){for(var te=0;te<$;te++)try{v(N[z+te])}catch{throw new y.ErrnoError(29)}return $&&(M.node.timestamp=Date.now()),te}}),y.mkdev(E,S,A)},createLink:function(a,u,l,v,E){var S=pt.join2(typeof a=="string"?a:y.getPath(a),u);return y.symlink(l,S)},forceLoadFile:function(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;var u=!0;if(typeof XMLHttpRequest!="undefined")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(se)try{a.contents=qi(se(a.url),!0),a.usedBytes=a.contents.length}catch{u=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return u||xa(29),u},createLazyFile:function(a,u,l,v,E){function S(){this.lengthKnown=!1,this.chunks=[]}if(S.prototype.get=function(te){if(!(te>this.length-1||te<0)){var ie=te%this.chunkSize,de=te/this.chunkSize|0;return this.getter(de)[ie]}},S.prototype.setDataGetter=function(te){this.getter=te},S.prototype.cacheLength=function(){var te=new XMLHttpRequest;if(te.open("HEAD",l,!1),te.send(null),!(te.status>=200&&te.status<300||te.status===304))throw new Error("Couldn't load "+l+". Status: "+te.status);var ie=Number(te.getResponseHeader("Content-length")),de,ne=(de=te.getResponseHeader("Accept-Ranges"))&&de==="bytes",ze=(de=te.getResponseHeader("Content-Encoding"))&&de==="gzip",Ce=1024*1024;ne||(Ce=ie);var Y=function(Ue,Xe){if(Ue>Xe)throw new Error("invalid range ("+Ue+", "+Xe+") or no bytes requested!");if(Xe>ie-1)throw new Error("only "+ie+" bytes available! programmer error!");var be=new XMLHttpRequest;if(be.open("GET",l,!1),ie!==Ce&&be.setRequestHeader("Range","bytes="+Ue+"-"+Xe),typeof Uint8Array!="undefined"&&(be.responseType="arraybuffer"),be.overrideMimeType&&be.overrideMimeType("text/plain; charset=x-user-defined"),be.send(null),!(be.status>=200&&be.status<300||be.status===304))throw new Error("Couldn't load "+l+". Status: "+be.status);return be.response!==void 0?new Uint8Array(be.response||[]):qi(be.responseText||"",!0)},ve=this;ve.setDataGetter(function(Ue){var Xe=Ue*Ce,be=(Ue+1)*Ce-1;if(be=Math.min(be,ie-1),typeof ve.chunks[Ue]=="undefined"&&(ve.chunks[Ue]=Y(Xe,be)),typeof ve.chunks[Ue]=="undefined")throw new Error("doXHR failed!");return ve.chunks[Ue]}),(ze||!ie)&&(Ce=ie=1,ie=this.getter(0).length,Ce=ie,Ne("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ie,this._chunkSize=Ce,this.lengthKnown=!0},typeof XMLHttpRequest!="undefined"){if(!U)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var A=new S;Object.defineProperties(A,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var M={isDevice:!1,contents:A}}else var M={isDevice:!1,url:l};var N=y.createFile(a,u,M,v,E);M.contents?N.contents=M.contents:M.url&&(N.contents=null,N.url=M.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var z={},$=Object.keys(N.stream_ops);return $.forEach(function(le){var te=N.stream_ops[le];z[le]=function(){if(!y.forceLoadFile(N))throw new y.ErrnoError(29);return te.apply(null,arguments)}}),z.read=function(te,ie,de,ne,ze){if(!y.forceLoadFile(N))throw new y.ErrnoError(29);var Ce=te.node.contents;if(ze>=Ce.length)return 0;var Y=Math.min(Ce.length-ze,ne);if(F(Y>=0),Ce.slice)for(var ve=0;ve<Y;ve++)ie[de+ve]=Ce[ze+ve];else for(var ve=0;ve<Y;ve++)ie[de+ve]=Ce.get(ze+ve);return Y},N.stream_ops=z,N},createPreloadedFile:function(a,u,l,v,E,S,A,M,N,z){Browser.init();var $=u?vr.resolve(pt.join2(a,u)):a,le=Te("cp "+$);function te(ie){function de(ze){z&&z(),M||y.createDataFile(a,u,ze,v,E,N),S&&S(),st(le)}var ne=!1;s.preloadPlugins.forEach(function(ze){ne||ze.canHandle($)&&(ze.handle(ie,$,de,function(){A&&A(),st(le)}),ne=!0)}),ne||de(ie)}je(le),typeof l=="string"?Browser.asyncLoad(l,function(ie){te(ie)},A):te(l)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(a,u,l){u=u||function(){},l=l||function(){};var v=y.indexedDB();try{var E=v.open(y.DB_NAME(),y.DB_VERSION)}catch(S){return l(S)}E.onupgradeneeded=function(){Ne("creating db");var A=E.result;A.createObjectStore(y.DB_STORE_NAME)},E.onsuccess=function(){var A=E.result,M=A.transaction([y.DB_STORE_NAME],"readwrite"),N=M.objectStore(y.DB_STORE_NAME),z=0,$=0,le=a.length;function te(){$==0?u():l()}a.forEach(function(ie){var de=N.put(y.analyzePath(ie).object.contents,ie);de.onsuccess=function(){z++,z+$==le&&te()},de.onerror=function(){$++,z+$==le&&te()}}),M.onerror=l},E.onerror=l},loadFilesFromDB:function(a,u,l){u=u||function(){},l=l||function(){};var v=y.indexedDB();try{var E=v.open(y.DB_NAME(),y.DB_VERSION)}catch(S){return l(S)}E.onupgradeneeded=l,E.onsuccess=function(){var A=E.result;try{var M=A.transaction([y.DB_STORE_NAME],"readonly")}catch(ie){l(ie);return}var N=M.objectStore(y.DB_STORE_NAME),z=0,$=0,le=a.length;function te(){$==0?u():l()}a.forEach(function(ie){var de=N.get(ie);de.onsuccess=function(){y.analyzePath(ie).exists&&y.unlink(ie),y.createDataFile(pt.dirname(ie),pt.basename(ie),de.result,!0,!0,!0),z++,z+$==le&&te()},de.onerror=function(){$++,z+$==le&&te()}}),M.onerror=l},E.onerror=l}},Tt={mount:function(a){return s.websocket=s.websocket&&typeof s.websocket=="object"?s.websocket:{},s.websocket._callbacks={},s.websocket.on=function(u,l){return typeof l=="function"&&(this._callbacks[u]=l),this},s.websocket.emit=function(u,l){typeof this._callbacks[u]=="function"&&this._callbacks[u].call(this,l)},y.createNode(null,"/",16895,0)},createSocket:function(a,u,l){var v=u==1;l&&F(v==(l==6));var E={family:a,type:u,protocol:l,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:Tt.websocket_sock_ops},S=Tt.nextname(),A=y.createNode(Tt.root,S,49152,0);A.sock=E;var M=y.createStream({path:S,node:A,flags:y.modeStringToFlags("r+"),seekable:!1,stream_ops:Tt.stream_ops});return E.stream=M,E},getSocket:function(a){var u=y.getStream(a);return!u||!y.isSocket(u.node.mode)?null:u.node.sock},stream_ops:{poll:function(a){var u=a.node.sock;return u.sock_ops.poll(u)},ioctl:function(a,u,l){var v=a.node.sock;return v.sock_ops.ioctl(v,u,l)},read:function(a,u,l,v,E){var S=a.node.sock,A=S.sock_ops.recvmsg(S,v);return A?(u.set(A.buffer,l),A.buffer.length):0},write:function(a,u,l,v,E){var S=a.node.sock;return S.sock_ops.sendmsg(S,u,l,v)},close:function(a){var u=a.node.sock;u.sock_ops.close(u)}},nextname:function(){return Tt.nextname.current||(Tt.nextname.current=0),"socket["+Tt.nextname.current+++"]"},websocket_sock_ops:{createPeer:function(a,u,l){var v;if(typeof u=="object"&&(v=u,u=null,l=null),v)if(v._socket)u=v._socket.remoteAddress,l=v._socket.remotePort;else{var E=/ws[s]?:\/\/([^:]+):(\d+)/.exec(v.url);if(!E)throw new Error("WebSocket URL must be in the format ws(s)://address:port");u=E[1],l=parseInt(E[2],10)}else try{var S=s.websocket&&typeof s.websocket=="object",A="ws:#".replace("#","//");if(S&&typeof s.websocket.url=="string"&&(A=s.websocket.url),A==="ws://"||A==="wss://"){var M=u.split("/");A=A+M[0]+":"+l+"/"+M.slice(1).join("/")}var N="binary";S&&typeof s.websocket.subprotocol=="string"&&(N=s.websocket.subprotocol);var z=void 0;N!=="null"&&(N=N.replace(/^ +| +$/g,"").split(/ *, */),z=x?{protocol:N.toString()}:N),S&&s.websocket.subprotocol===null&&(N="null",z=void 0);var $;x||($=WebSocket),v=new $(A,z),v.binaryType="arraybuffer"}catch{throw new y.ErrnoError(Vt.EHOSTUNREACH)}var le={addr:u,port:l,socket:v,dgram_send_queue:[]};return Tt.websocket_sock_ops.addPeer(a,le),Tt.websocket_sock_ops.handlePeerEvents(a,le),a.type===2&&typeof a.sport!="undefined"&&le.dgram_send_queue.push(new Uint8Array([255,255,255,255,"p".charCodeAt(0),"o".charCodeAt(0),"r".charCodeAt(0),"t".charCodeAt(0),(a.sport&65280)>>8,a.sport&255])),le},getPeer:function(a,u,l){return a.peers[u+":"+l]},addPeer:function(a,u){a.peers[u.addr+":"+u.port]=u},removePeer:function(a,u){delete a.peers[u.addr+":"+u.port]},handlePeerEvents:function(a,u){var l=!0,v=function(){s.websocket.emit("open",a.stream.fd);try{for(var S=u.dgram_send_queue.shift();S;)u.socket.send(S),S=u.dgram_send_queue.shift()}catch{u.socket.close()}};function E(S){if(typeof S=="string"){var A=new TextEncoder;S=A.encode(S)}else{if(F(S.byteLength!==void 0),S.byteLength==0)return;S=new Uint8Array(S)}var M=l;if(l=!1,M&&S.length===10&&S[0]===255&&S[1]===255&&S[2]===255&&S[3]===255&&S[4]==="p".charCodeAt(0)&&S[5]==="o".charCodeAt(0)&&S[6]==="r".charCodeAt(0)&&S[7]==="t".charCodeAt(0)){var N=S[8]<<8|S[9];Tt.websocket_sock_ops.removePeer(a,u),u.port=N,Tt.websocket_sock_ops.addPeer(a,u);return}a.recv_queue.push({addr:u.addr,port:u.port,data:S}),s.websocket.emit("message",a.stream.fd)}x?(u.socket.on("open",v),u.socket.on("message",function(S,A){!A.binary||E(new Uint8Array(S).buffer)}),u.socket.on("close",function(){s.websocket.emit("close",a.stream.fd)}),u.socket.on("error",function(S){a.error=Vt.ECONNREFUSED,s.websocket.emit("error",[a.stream.fd,a.error,"ECONNREFUSED: Connection refused"])})):(u.socket.onopen=v,u.socket.onclose=function(){s.websocket.emit("close",a.stream.fd)},u.socket.onmessage=function(A){E(A.data)},u.socket.onerror=function(S){a.error=Vt.ECONNREFUSED,s.websocket.emit("error",[a.stream.fd,a.error,"ECONNREFUSED: Connection refused"])})},poll:function(a){if(a.type===1&&a.server)return a.pending.length?65:0;var u=0,l=a.type===1?Tt.websocket_sock_ops.getPeer(a,a.daddr,a.dport):null;return(a.recv_queue.length||!l||l&&l.socket.readyState===l.socket.CLOSING||l&&l.socket.readyState===l.socket.CLOSED)&&(u|=65),(!l||l&&l.socket.readyState===l.socket.OPEN)&&(u|=4),(l&&l.socket.readyState===l.socket.CLOSING||l&&l.socket.readyState===l.socket.CLOSED)&&(u|=16),u},ioctl:function(a,u,l){switch(u){case 21531:var v=0;return a.recv_queue.length&&(v=a.recv_queue[0].data.length),V[l>>2]=v,0;default:return Vt.EINVAL}},close:function(a){if(a.server){try{a.server.close()}catch{}a.server=null}for(var u=Object.keys(a.peers),l=0;l<u.length;l++){var v=a.peers[u[l]];try{v.socket.close()}catch{}Tt.websocket_sock_ops.removePeer(a,v)}return 0},bind:function(a,u,l){if(typeof a.saddr!="undefined"||typeof a.sport!="undefined")throw new y.ErrnoError(Vt.EINVAL);if(a.saddr=u,a.sport=l,a.type===2){a.server&&(a.server.close(),a.server=null);try{a.sock_ops.listen(a,0)}catch(v){if(!(v instanceof y.ErrnoError)||v.errno!==Vt.EOPNOTSUPP)throw v}}},connect:function(a,u,l){if(a.server)throw new y.ErrnoError(Vt.EOPNOTSUPP);if(typeof a.daddr!="undefined"&&typeof a.dport!="undefined"){var v=Tt.websocket_sock_ops.getPeer(a,a.daddr,a.dport);if(v)throw v.socket.readyState===v.socket.CONNECTING?new y.ErrnoError(Vt.EALREADY):new y.ErrnoError(Vt.EISCONN)}var E=Tt.websocket_sock_ops.createPeer(a,u,l);throw a.daddr=E.addr,a.dport=E.port,new y.ErrnoError(Vt.EINPROGRESS)},listen:function(a,u){},accept:function(a){if(!a.server)throw new y.ErrnoError(Vt.EINVAL);var u=a.pending.shift();return u.stream.flags=a.stream.flags,u},getname:function(a,u){var l,v;if(u){if(a.daddr===void 0||a.dport===void 0)throw new y.ErrnoError(Vt.ENOTCONN);l=a.daddr,v=a.dport}else l=a.saddr||0,v=a.sport||0;return{addr:l,port:v}},sendmsg:function(a,u,l,v,E,S){if(a.type===2){if((E===void 0||S===void 0)&&(E=a.daddr,S=a.dport),E===void 0||S===void 0)throw new y.ErrnoError(Vt.EDESTADDRREQ)}else E=a.daddr,S=a.dport;var A=Tt.websocket_sock_ops.getPeer(a,E,S);if(a.type===1){if(!A||A.socket.readyState===A.socket.CLOSING||A.socket.readyState===A.socket.CLOSED)throw new y.ErrnoError(Vt.ENOTCONN);if(A.socket.readyState===A.socket.CONNECTING)throw new y.ErrnoError(Vt.EAGAIN)}ArrayBuffer.isView(u)&&(l+=u.byteOffset,u=u.buffer);var M;if(M=u.slice(l,l+v),a.type===2&&(!A||A.socket.readyState!==A.socket.OPEN))return(!A||A.socket.readyState===A.socket.CLOSING||A.socket.readyState===A.socket.CLOSED)&&(A=Tt.websocket_sock_ops.createPeer(a,E,S)),A.dgram_send_queue.push(M),v;try{return A.socket.send(M),v}catch{throw new y.ErrnoError(Vt.EINVAL)}},recvmsg:function(a,u){if(a.type===1&&a.server)throw new y.ErrnoError(Vt.ENOTCONN);var l=a.recv_queue.shift();if(!l)if(a.type===1){var v=Tt.websocket_sock_ops.getPeer(a,a.daddr,a.dport);if(v){if(v.socket.readyState===v.socket.CLOSING||v.socket.readyState===v.socket.CLOSED)return null;throw new y.ErrnoError(Vt.EAGAIN)}else throw new y.ErrnoError(Vt.ENOTCONN)}else throw new y.ErrnoError(Vt.EAGAIN);var E=l.data.byteLength||l.data.length,S=l.data.byteOffset||0,A=l.data.buffer||l.data,M=Math.min(u,E),N={buffer:new Uint8Array(A,S,M),addr:l.addr,port:l.port};if(a.type===1&&M<E){var z=E-M;l.data=new Uint8Array(A,S+M,z),a.recv_queue.unshift(l)}return N}}};function ga(a){for(var u=a.split("."),l=0;l<4;l++){var v=Number(u[l]);if(isNaN(v))return null;u[l]=v}return(u[0]|u[1]<<8|u[2]<<16|u[3]<<24)>>>0}function Jr(a){return parseInt(a,void 0)}function gi(a){var u,l,v,E,S=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,A=[];if(!S.test(a))return null;if(a==="::")return[0,0,0,0,0,0,0,0];for(a.indexOf("::")===0?a=a.replace("::","Z:"):a=a.replace("::",":Z:"),a.indexOf(".")>0?(a=a.replace(new RegExp("[.]","g"),":"),u=a.split(":"),u[u.length-4]=Jr(u[u.length-4])+Jr(u[u.length-3])*256,u[u.length-3]=Jr(u[u.length-2])+Jr(u[u.length-1])*256,u=u.slice(0,u.length-2)):u=a.split(":"),v=0,E=0,l=0;l<u.length;l++)if(typeof u[l]=="string")if(u[l]==="Z"){for(E=0;E<8-u.length+1;E++)A[l+E]=0;v=E-1}else A[l+v]=Ps(parseInt(u[l],16));else A[l+v]=u[l];return[A[1]<<16|A[0],A[3]<<16|A[2],A[5]<<16|A[4],A[7]<<16|A[6]]}var vn={address_map:{id:1,addrs:{},names:{}},lookup_name:function(a){var u=ga(a);if(u!==null||(u=gi(a),u!==null))return a;var l;if(vn.address_map.addrs[a])l=vn.address_map.addrs[a];else{var v=vn.address_map.id++;F(v<65535,"exceeded max address mappings of 65535"),l="172.29."+(v&255)+"."+(v&65280),vn.address_map.names[l]=a,vn.address_map.addrs[a]=l}return l},lookup_addr:function(a){return vn.address_map.names[a]?vn.address_map.names[a]:null}};function Do(a){return(a&255)+"."+(a>>8&255)+"."+(a>>16&255)+"."+(a>>24&255)}function Mo(a){var u="",l=0,v=0,E=0,S=0,A=0,M=0,N=[a[0]&65535,a[0]>>16,a[1]&65535,a[1]>>16,a[2]&65535,a[2]>>16,a[3]&65535,a[3]>>16],z=!0,$="";for(M=0;M<5;M++)if(N[M]!==0){z=!1;break}if(z){if($=Do(N[6]|N[7]<<16),N[5]===-1)return u="::ffff:",u+=$,u;if(N[5]===0)return u="::",$==="0.0.0.0"&&($=""),$==="0.0.0.1"&&($="1"),u+=$,u}for(l=0;l<8;l++)N[l]===0&&(l-E>1&&(A=0),E=l,A++),A>v&&(v=A,S=l-v+1);for(l=0;l<8;l++){if(v>1&&N[l]===0&&l>=S&&l<S+v){l===S&&(u+=":",S===0&&(u+=":"));continue}u+=Number(Fs(N[l]&65535)).toString(16),u+=l<7?":":""}return u}function Es(a,u){var l=Jt[a>>1],v=Fs(Mn[a+2>>1]),E;switch(l){case 2:if(u!==16)return{errno:28};E=V[a+4>>2],E=Do(E);break;case 10:if(u!==28)return{errno:28};E=[V[a+8>>2],V[a+12>>2],V[a+16>>2],V[a+20>>2]],E=Mo(E);break;default:return{errno:5}}return{family:l,addr:E,port:v}}function Ir(a,u,l,v){switch(u){case 2:l=ga(l),Jt[a>>1]=u,V[a+4>>2]=l,Jt[a+2>>1]=Ps(v);break;case 10:l=gi(l),V[a>>2]=u,V[a+8>>2]=l[0],V[a+12>>2]=l[1],V[a+16>>2]=l[2],V[a+20>>2]=l[3],Jt[a+2>>1]=Ps(v),V[a+4>>2]=0,V[a+24>>2]=0;break;default:return{errno:5}}return{}}var De={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(a,u){if(u[0]!=="/"){var l;if(a===-100)l=y.cwd();else{var v=y.getStream(a);if(!v)throw new y.ErrnoError(8);l=v.path}u=pt.join2(l,u)}return u},doStat:function(a,u,l){try{var v=a(u)}catch(E){if(E&&E.node&&pt.normalize(u)!==pt.normalize(y.getPath(E.node)))return-54;throw E}return V[l>>2]=v.dev,V[l+4>>2]=0,V[l+8>>2]=v.ino,V[l+12>>2]=v.mode,V[l+16>>2]=v.nlink,V[l+20>>2]=v.uid,V[l+24>>2]=v.gid,V[l+28>>2]=v.rdev,V[l+32>>2]=0,wn=[v.size>>>0,(wt=v.size,+va(wt)>=1?wt>0?(Gr(+kr(wt/4294967296),4294967295)|0)>>>0:~~+ya((wt-+(~~wt>>>0))/4294967296)>>>0:0)],V[l+40>>2]=wn[0],V[l+44>>2]=wn[1],V[l+48>>2]=4096,V[l+52>>2]=v.blocks,V[l+56>>2]=v.atime.getTime()/1e3|0,V[l+60>>2]=0,V[l+64>>2]=v.mtime.getTime()/1e3|0,V[l+68>>2]=0,V[l+72>>2]=v.ctime.getTime()/1e3|0,V[l+76>>2]=0,wn=[v.ino>>>0,(wt=v.ino,+va(wt)>=1?wt>0?(Gr(+kr(wt/4294967296),4294967295)|0)>>>0:~~+ya((wt-+(~~wt>>>0))/4294967296)>>>0:0)],V[l+80>>2]=wn[0],V[l+84>>2]=wn[1],0},doMsync:function(a,u,l,v,E){var S=Et.slice(a,a+l);y.msync(u,S,E,l,v)},doMkdir:function(a,u){return a=pt.normalize(a),a[a.length-1]==="/"&&(a=a.substr(0,a.length-1)),y.mkdir(a,u,0),0},doMknod:function(a,u,l){switch(u&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return y.mknod(a,u,l),0},doReadlink:function(a,u,l){if(l<=0)return-28;var v=y.readlink(a),E=Math.min(l,pn(v)),S=ot[u+E];return qt(v,u,l+1),ot[u+E]=S,E},doAccess:function(a,u){if(u&-8)return-28;var l,v=y.lookupPath(a,{follow:!0});if(l=v.node,!l)return-44;var E="";return u&4&&(E+="r"),u&2&&(E+="w"),u&1&&(E+="x"),E&&y.nodePermissions(l,E)?-2:0},doDup:function(a,u,l){var v=y.getStream(l);return v&&y.close(v),y.open(a,u,0,l,l).fd},doReadv:function(a,u,l,v){for(var E=0,S=0;S<l;S++){var A=V[u+S*8>>2],M=V[u+(S*8+4)>>2],N=y.read(a,ot,A,M,v);if(N<0)return-1;if(E+=N,N<M)break}return E},doWritev:function(a,u,l,v){for(var E=0,S=0;S<l;S++){var A=V[u+S*8>>2],M=V[u+(S*8+4)>>2],N=y.write(a,ot,A,M,v);if(N<0)return-1;E+=N}return E},varargs:void 0,get:function(){F(De.varargs!=null),De.varargs+=4;var a=V[De.varargs-4>>2];return a},getStr:function(a){var u=En(a);return u},getStreamFromFD:function(a){var u=y.getStream(a);if(!u)throw new y.ErrnoError(8);return u},get64:function(a,u){return a>=0?F(u===0):F(u===-1),a}};function Ao(a,u){try{De.varargs=u;var l=function(){var Wn=Tt.getSocket(De.get());if(!Wn)throw new y.ErrnoError(8);return Wn},v=function(Wn){var Go=De.get(),Lu=De.get();if(Wn&&Go===0)return null;var ni=Es(Go,Lu);if(ni.errno)throw new y.ErrnoError(ni.errno);return ni.addr=vn.lookup_addr(ni.addr)||ni.addr,ni};switch(a){case 1:{var E=De.get(),S=De.get(),A=De.get(),M=Tt.createSocket(E,S,A);return F(M.stream.fd<64),M.stream.fd}case 2:{var M=l(),N=v();return M.sock_ops.bind(M,N.addr,N.port),0}case 3:{var M=l(),N=v();return M.sock_ops.connect(M,N.addr,N.port),0}case 4:{var M=l(),z=De.get();return M.sock_ops.listen(M,z),0}case 5:{var M=l(),$=De.get(),le=De.get(),te=M.sock_ops.accept(M);if($){var ie=Ir($,te.family,vn.lookup_name(te.daddr),te.dport);F(!ie.errno)}return te.stream.fd}case 6:{var M=l(),$=De.get(),le=De.get(),ie=Ir($,M.family,vn.lookup_name(M.saddr||"0.0.0.0"),M.sport);return F(!ie.errno),0}case 7:{var M=l(),$=De.get(),le=De.get();if(!M.daddr)return-53;var ie=Ir($,M.family,vn.lookup_name(M.daddr),M.dport);return F(!ie.errno),0}case 11:{var M=l(),de=De.get(),ne=De.get(),ze=De.get(),Ce=v(!0);return Ce?M.sock_ops.sendmsg(M,ot,de,ne,Ce.addr,Ce.port):y.write(M.stream,ot,de,ne)}case 12:{var M=l(),Y=De.get(),ve=De.get(),ze=De.get(),$=De.get(),le=De.get(),Ue=M.sock_ops.recvmsg(M,ve);if(!Ue)return 0;if($){var ie=Ir($,M.family,vn.lookup_name(Ue.addr),Ue.port);F(!ie.errno)}return Et.set(Ue.buffer,Y),Ue.buffer.byteLength}case 14:return-50;case 15:{var M=l(),Xe=De.get(),be=De.get(),Wt=De.get(),ln=De.get();return Xe===1&&be===4?(V[Wt>>2]=M.error,V[ln>>2]=4,M.error=null,0):-50}case 16:{var M=l(),de=De.get(),ze=De.get(),yn=V[de+8>>2],Pn=V[de+12>>2],$,jr,gr=V[de>>2],Is=V[de+4>>2];if(gr){var N=Es(gr,Is);if(N.errno)return-N.errno;jr=N.port,$=vn.lookup_addr(N.addr)||N.addr}for(var Ki=0,Fn=0;Fn<Pn;Fn++)Ki+=V[yn+(8*Fn+4)>>2];for(var Ji=new Uint8Array(Ki),_r=0,Fn=0;Fn<Pn;Fn++)for(var Vo=V[yn+(8*Fn+0)>>2],Wo=V[yn+(8*Fn+4)>>2],Qo=0;Qo<Wo;Qo++)Ji[_r++]=ot[Vo+Qo>>0];return M.sock_ops.sendmsg(M,Ji,0,Ki,$,jr)}case 17:{for(var M=l(),de=De.get(),ze=De.get(),yn=V[de+8>>2],Pn=V[de+12>>2],Ki=0,Fn=0;Fn<Pn;Fn++)Ki+=V[yn+(8*Fn+4)>>2];var Ue=M.sock_ops.recvmsg(M,Ki);if(!Ue)return 0;var gr=V[de>>2];if(gr){var ie=Ir(gr,M.family,vn.lookup_name(Ue.addr),Ue.port);F(!ie.errno)}for(var ra=0,Yo=Ue.buffer.byteLength,Fn=0;Yo>0&&Fn<Pn;Fn++){var Vo=V[yn+(8*Fn+0)>>2],Wo=V[yn+(8*Fn+4)>>2];if(!!Wo){var ne=Math.min(Wo,Yo),Y=Ue.buffer.subarray(ra,ra+ne);Et.set(Y,Vo+ra),ra+=ne,Yo-=ne}}return ra}default:return-52}}catch(Wn){return(typeof y=="undefined"||!(Wn instanceof y.ErrnoError))&&P(Wn),-Wn.errno}}function Xi(a){try{return a=De.getStr(a),y.chdir(a),0}catch(u){return(typeof y=="undefined"||!(u instanceof y.ErrnoError))&&P(u),-u.errno}}function bs(a,u,l,v,E){try{F(a<=64,"nfds must be less than or equal to 64"),F(!v,"exceptfds not supported");for(var S=0,A=u?V[u>>2]:0,M=u?V[u+4>>2]:0,N=l?V[l>>2]:0,z=l?V[l+4>>2]:0,$=v?V[v>>2]:0,le=v?V[v+4>>2]:0,te=0,ie=0,de=0,ne=0,ze=0,Ce=0,Y=(u?V[u>>2]:0)|(l?V[l>>2]:0)|(v?V[v>>2]:0),ve=(u?V[u+4>>2]:0)|(l?V[l+4>>2]:0)|(v?V[v+4>>2]:0),Ue=function(yn,Pn,jr,gr){return yn<32?Pn&gr:jr&gr},Xe=0;Xe<a;Xe++){var be=1<<Xe%32;if(!!Ue(Xe,Y,ve,be)){var Wt=y.getStream(Xe);if(!Wt)throw new y.ErrnoError(8);var ln=De.DEFAULT_POLLMASK;Wt.stream_ops.poll&&(ln=Wt.stream_ops.poll(Wt)),ln&1&&Ue(Xe,A,M,be)&&(Xe<32?te=te|be:ie=ie|be,S++),ln&4&&Ue(Xe,N,z,be)&&(Xe<32?de=de|be:ne=ne|be,S++),ln&2&&Ue(Xe,$,le,be)&&(Xe<32?ze=ze|be:Ce=Ce|be,S++)}}return u&&(V[u>>2]=te,V[u+4>>2]=ie),l&&(V[l>>2]=de,V[l+4>>2]=ne),v&&(V[v>>2]=ze,V[v+4>>2]=Ce),S}catch(yn){return(typeof y=="undefined"||!(yn instanceof y.ErrnoError))&&P(yn),-yn.errno}}function St(a,u){try{if(u===0)return-28;var l=y.cwd(),v=pn(l);return u<v+1?-68:(qt(l,a,u),a)}catch(E){return(typeof y=="undefined"||!(E instanceof y.ErrnoError))&&P(E),-E.errno}}function xo(a,u){try{return a=De.getStr(a),De.doStat(y.stat,a,u)}catch(l){return(typeof y=="undefined"||!(l instanceof y.ErrnoError))&&P(l),-l.errno}}function Co(a,u){try{var l=De.getStreamFromFD(a);return De.doStat(y.stat,l.path,u)}catch(v){return(typeof y=="undefined"||!(v instanceof y.ErrnoError))&&P(v),-v.errno}}function rt(a,u,l){De.varargs=l;try{var v=De.getStreamFromFD(a);switch(u){case 0:{var E=De.get();if(E<0)return-28;var S;return S=y.open(v.path,v.flags,0,E),S.fd}case 1:case 2:return 0;case 3:return v.flags;case 4:{var E=De.get();return v.flags|=E,0}case 12:{var E=De.get(),A=0;return Jt[E+A>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return xa(28),-1;default:return-28}}catch(M){return(typeof y=="undefined"||!(M instanceof y.ErrnoError))&&P(M),-M.errno}}function ws(a,u,l){try{var v=De.getStreamFromFD(a);return y.read(v,ot,u,l)}catch(E){return(typeof y=="undefined"||!(E instanceof y.ErrnoError))&&P(E),-E.errno}}function $n(a,u){try{return a=De.getStr(a),De.doMkdir(a,u)}catch(l){return(typeof y=="undefined"||!(l instanceof y.ErrnoError))&&P(l),-l.errno}}function _i(a,u,l){De.varargs=l;try{var v=De.getStr(a),E=De.get(),S=y.open(v,u,E);return S.fd}catch(A){return(typeof y=="undefined"||!(A instanceof y.ErrnoError))&&P(A),-A.errno}}function qa(a,u,l){De.varargs=l;try{var v=De.getStreamFromFD(a);switch(u){case 21509:case 21505:return v.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return v.tty?0:-59;case 21519:{if(!v.tty)return-59;var E=De.get();return V[E>>2]=0,0}case 21520:return v.tty?-28:-59;case 21531:{var E=De.get();return y.ioctl(v,u,E)}case 21523:return v.tty?0:-59;case 21524:return v.tty?0:-59;default:P("bad ioctl syscall "+u)}}catch(S){return(typeof y=="undefined"||!(S instanceof y.ErrnoError))&&P(S),-S.errno}}function Ts(a,u,l){try{return a=De.getStr(a),De.doReadlink(a,u,l)}catch(v){return(typeof y=="undefined"||!(v instanceof y.ErrnoError))&&P(v),-v.errno}}function Tn(a,u){if(a===-1||u===0)return-28;var l=De.mappings[a];if(!l)return 0;if(u===l.len){var v=y.getStream(l.fd);De.doMsync(a,v,u,l.flags,l.offset),y.munmap(v),De.mappings[a]=null,l.allocated&&ba(l.malloc)}return 0}function nn(a,u){try{return Tn(a,u)}catch(l){return(typeof y=="undefined"||!(l instanceof y.ErrnoError))&&P(l),-l.errno}}function Bi(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a)}}function Ar(){for(var a=new Array(256),u=0;u<256;++u)a[u]=String.fromCharCode(u);Zn=a}var Zn=void 0;function rn(a){for(var u="",l=a;Et[l];)u+=Zn[Et[l++]];return u}var Ka={},Ur={},_a={},Ss=48,Ja=57;function $i(a){if(a===void 0)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var u=a.charCodeAt(0);return u>=Ss&&u<=Ja?"_"+a:a}function Po(a,u){return a=$i(a),new Function("body","return function "+a+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(u)}function Zr(a,u){var l=Po(u,function(v){this.name=u,this.message=v;var E=new Error(v).stack;E!==void 0&&(this.stack=this.toString()+`
`+E.replace(/^Error(:[^\n]*)?\n/,""))});return l.prototype=Object.create(a.prototype),l.prototype.constructor=l,l.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},l}var ea=void 0;function dt(a){throw new ea(a)}var Ei=void 0;function bi(a){throw new Ei(a)}function ta(a,u,l){a.forEach(function(M){_a[M]=u});function v(M){var N=l(M);N.length!==a.length&&bi("Mismatched type converter count");for(var z=0;z<a.length;++z)Hr(a[z],N[z])}var E=new Array(u.length),S=[],A=0;u.forEach(function(M,N){Ur.hasOwnProperty(M)?E[N]=Ur[M]:(S.push(M),Ka.hasOwnProperty(M)||(Ka[M]=[]),Ka[M].push(function(){E[N]=Ur[M],++A,A===S.length&&v(E)}))}),S.length===0&&v(E)}function Hr(a,u,l){if(l=l||{},!("argPackAdvance"in u))throw new TypeError("registerType registeredInstance requires argPackAdvance");var v=u.name;if(a||dt('type "'+v+'" must have a positive integer typeid pointer'),Ur.hasOwnProperty(a)){if(l.ignoreDuplicateRegistrations)return;dt("Cannot register type '"+v+"' twice")}if(Ur[a]=u,delete _a[a],Ka.hasOwnProperty(a)){var E=Ka[a];delete Ka[a],E.forEach(function(S){S()})}}function Rs(a,u,l,v,E){var S=Bi(l);u=rn(u),Hr(a,{name:u,fromWireType:function(A){return!!A},toWireType:function(A,M){return M?v:E},argPackAdvance:8,readValueFromPointer:function(A){var M;if(l===1)M=ot;else if(l===2)M=Jt;else if(l===4)M=V;else throw new TypeError("Unknown boolean type size: "+u);return this.fromWireType(M[A>>S])},destructorFunction:null})}function w(a){if(!(this instanceof xr)||!(a instanceof xr))return!1;for(var u=this.$$.ptrType.registeredClass,l=this.$$.ptr,v=a.$$.ptrType.registeredClass,E=a.$$.ptr;u.baseClass;)l=u.upcast(l),u=u.baseClass;for(;v.baseClass;)E=v.upcast(E),v=v.baseClass;return u===v&&l===E}function I(a){return{count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}}function W(a){function u(l){return l.$$.ptrType.registeredClass.name}dt(u(a)+" instance already deleted")}var J=!1;function me(a){}function Ye(a){a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)}function xe(a){a.count.value-=1;var u=a.count.value===0;u&&Ye(a)}function Qe(a){return typeof FinalizationGroup=="undefined"?(Qe=function(u){return u},a):(J=new FinalizationGroup(function(u){for(var l=u.next();!l.done;l=u.next()){var v=l.value;v.ptr?xe(v):console.warn("object already deleted: "+v.ptr)}}),Qe=function(u){return J.register(u,u.$$,u.$$),u},me=function(u){J.unregister(u.$$)},Qe(a))}function mt(){if(this.$$.ptr||W(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var a=Qe(Object.create(Object.getPrototypeOf(this),{$$:{value:I(this.$$)}}));return a.$$.count.value+=1,a.$$.deleteScheduled=!1,a}function Ft(){this.$$.ptr||W(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),me(this),xe(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Bt(){return!this.$$.ptr}var Mt=void 0,It=[];function en(){for(;It.length;){var a=It.pop();a.$$.deleteScheduled=!1,a.delete()}}function Rt(){return this.$$.ptr||W(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),It.push(this),It.length===1&&Mt&&Mt(en),this.$$.deleteScheduled=!0,this}function Za(){xr.prototype.isAliasOf=w,xr.prototype.clone=mt,xr.prototype.delete=Ft,xr.prototype.isDeleted=Bt,xr.prototype.deleteLater=Rt}function xr(){}var Vi={};function Fo(a,u,l){if(a[u].overloadTable===void 0){var v=a[u];a[u]=function(){return a[u].overloadTable.hasOwnProperty(arguments.length)||dt("Function '"+l+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[u].overloadTable+")!"),a[u].overloadTable[arguments.length].apply(this,arguments)},a[u].overloadTable=[],a[u].overloadTable[v.argCount]=v}}function Ea(a,u,l){s.hasOwnProperty(a)?((l===void 0||s[a].overloadTable!==void 0&&s[a].overloadTable[l]!==void 0)&&dt("Cannot register public name '"+a+"' twice"),Fo(s,a,a),s.hasOwnProperty(l)&&dt("Cannot register multiple overloads of a function with the same number of arguments ("+l+")!"),s[a].overloadTable[l]=u):(s[a]=u,l!==void 0&&(s[a].numArguments=l))}function No(a,u,l,v,E,S,A,M){this.name=a,this.constructor=u,this.instancePrototype=l,this.rawDestructor=v,this.baseClass=E,this.getActualType=S,this.upcast=A,this.downcast=M,this.pureVirtualFunctions=[]}function wi(a,u,l){for(;u!==l;)u.upcast||dt("Expected null or instance of "+l.name+", got an instance of "+u.name),a=u.upcast(a),u=u.baseClass;return a}function Mu(a,u){if(u===null)return this.isReference&&dt("null is not a valid "+this.name),0;u.$$||dt('Cannot pass "'+Qi(u)+'" as a '+this.name),u.$$.ptr||dt("Cannot pass deleted object as a pointer of type "+this.name);var l=u.$$.ptrType.registeredClass,v=wi(u.$$.ptr,l,this.registeredClass);return v}function yf(a,u){var l;if(u===null)return this.isReference&&dt("null is not a valid "+this.name),this.isSmartPointer?(l=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,l),l):0;u.$$||dt('Cannot pass "'+Qi(u)+'" as a '+this.name),u.$$.ptr||dt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&u.$$.ptrType.isConst&&dt("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);var v=u.$$.ptrType.registeredClass;if(l=wi(u.$$.ptr,v,this.registeredClass),this.isSmartPointer)switch(u.$$.smartPtr===void 0&&dt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:u.$$.smartPtrType===this?l=u.$$.smartPtr:dt("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:l=u.$$.smartPtr;break;case 2:if(u.$$.smartPtrType===this)l=u.$$.smartPtr;else{var E=u.clone();l=this.rawShare(l,Ms(function(){E.delete()})),a!==null&&a.push(this.rawDestructor,l)}break;default:dt("Unsupporting sharing policy")}return l}function gf(a,u){if(u===null)return this.isReference&&dt("null is not a valid "+this.name),0;u.$$||dt('Cannot pass "'+Qi(u)+'" as a '+this.name),u.$$.ptr||dt("Cannot pass deleted object as a pointer of type "+this.name),u.$$.ptrType.isConst&&dt("Cannot convert argument of type "+u.$$.ptrType.name+" to parameter type "+this.name);var l=u.$$.ptrType.registeredClass,v=wi(u.$$.ptr,l,this.registeredClass);return v}function ko(a){return this.fromWireType(Zt[a>>2])}function Au(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a}function oc(a){this.rawDestructor&&this.rawDestructor(a)}function sc(a){a!==null&&a.delete()}function xu(a,u,l){if(u===l)return a;if(l.baseClass===void 0)return null;var v=xu(a,u,l.baseClass);return v===null?null:l.downcast(v)}function _f(){return Object.keys(Ti).length}function Ca(){var a=[];for(var u in Ti)Ti.hasOwnProperty(u)&&a.push(Ti[u]);return a}function Ef(a){Mt=a,It.length&&Mt&&Mt(en)}function Cu(){s.getInheritedInstanceCount=_f,s.getLiveInheritedInstances=Ca,s.flushPendingDeletes=en,s.setDelayFunction=Ef}var Ti={};function Pu(a,u){for(u===void 0&&dt("ptr should not be undefined");a.baseClass;)u=a.upcast(u),a=a.baseClass;return u}function bf(a,u){return u=Pu(a,u),Ti[u]}function Si(a,u){(!u.ptrType||!u.ptr)&&bi("makeClassHandle requires ptr and ptrType");var l=!!u.smartPtrType,v=!!u.smartPtr;return l!==v&&bi("Both smartPtrType and smartPtr must be specified"),u.count={value:1},Qe(Object.create(a,{$$:{value:u}}))}function uc(a){var u=this.getPointee(a);if(!u)return this.destructor(a),null;var l=bf(this.registeredClass,u);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=u,l.$$.smartPtr=a,l.clone();var v=l.clone();return this.destructor(a),v}function E(){return this.isSmartPointer?Si(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:u,smartPtrType:this,smartPtr:a}):Si(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var S=this.registeredClass.getActualType(u),A=Vi[S];if(!A)return E.call(this);var M;this.isConst?M=A.constPointerType:M=A.pointerType;var N=xu(u,this.registeredClass,M.registeredClass);return N===null?E.call(this):this.isSmartPointer?Si(M.registeredClass.instancePrototype,{ptrType:M,ptr:N,smartPtrType:this,smartPtr:a}):Si(M.registeredClass.instancePrototype,{ptrType:M,ptr:N})}function yr(){Cn.prototype.getPointee=Au,Cn.prototype.destructor=oc,Cn.prototype.argPackAdvance=8,Cn.prototype.readValueFromPointer=ko,Cn.prototype.deleteObject=sc,Cn.prototype.fromWireType=uc}function Cn(a,u,l,v,E,S,A,M,N,z,$){this.name=a,this.registeredClass=u,this.isReference=l,this.isConst=v,this.isSmartPointer=E,this.pointeeType=S,this.sharingPolicy=A,this.rawGetPointee=M,this.rawConstructor=N,this.rawShare=z,this.rawDestructor=$,!E&&u.baseClass===void 0?v?(this.toWireType=Mu,this.destructorFunction=null):(this.toWireType=gf,this.destructorFunction=null):this.toWireType=yf}function un(a,u,l){s.hasOwnProperty(a)||bi("Replacing nonexistant public symbol"),s[a].overloadTable!==void 0&&l!==void 0?s[a].overloadTable[l]=u:(s[a]=u,s[a].argCount=l)}function Vn(a,u){a=rn(a);function l(S){for(var A=[],M=1;M<a.length;++M)A.push("a"+M);var N="dynCall_"+a+"_"+u,z="return function "+N+"("+A.join(", ")+`) {
`;return z+="    return dynCall(rawFunction"+(A.length?", ":"")+A.join(", ")+`);
`,z+=`};
`,new Function("dynCall","rawFunction",z)(S,u)}var v=s["dynCall_"+a],E=l(v);return typeof E!="function"&&dt("unknown function pointer with signature "+a+": "+u),E}var Os=void 0;function Io(a){var u=qf(a),l=rn(u);return ba(u),l}function Uo(a,u){var l=[],v={};function E(S){if(!v[S]&&!Ur[S]){if(_a[S]){_a[S].forEach(E);return}l.push(S),v[S]=!0}}throw u.forEach(E),new Os(a+": "+l.map(Io).join([", "]))}function Ho(a,u,l,v,E,S,A,M,N,z,$,le,te){$=rn($),S=Vn(E,S),M&&(M=Vn(A,M)),z&&(z=Vn(N,z)),te=Vn(le,te);var ie=$i($);Ea(ie,function(){Uo("Cannot construct "+$+" due to unbound types",[v])}),ta([a,u,l],v?[v]:[],function(de){de=de[0];var ne,ze;v?(ne=de.registeredClass,ze=ne.instancePrototype):ze=xr.prototype;var Ce=Po(ie,function(){if(Object.getPrototypeOf(this)!==Y)throw new ea("Use 'new' to construct "+$);if(ve.constructor_body===void 0)throw new ea($+" has no accessible constructor");var Wt=ve.constructor_body[arguments.length];if(Wt===void 0)throw new ea("Tried to invoke ctor of "+$+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(ve.constructor_body).toString()+") parameters instead!");return Wt.apply(this,arguments)}),Y=Object.create(ze,{constructor:{value:Ce}});Ce.prototype=Y;var ve=new No($,Ce,Y,te,ne,S,M,z),Ue=new Cn($,ve,!0,!1,!1),Xe=new Cn($+"*",ve,!1,!1,!1),be=new Cn($+" const*",ve,!1,!0,!1);return Vi[a]={pointerType:Xe,constPointerType:be},un(ie,Ce),[Ue,Xe,be]})}function wf(a,u){if(!(a instanceof Function))throw new TypeError("new_ called with constructor type "+typeof a+" which is not a function");var l=Po(a.name||"unknownFunctionName",function(){});l.prototype=a.prototype;var v=new l,E=a.apply(v,u);return E instanceof Object?E:v}function lc(a){for(;a.length;){var u=a.pop(),l=a.pop();l(u)}}function Lo(a,u,l,v,E){var S=u.length;S<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var A=u[1]!==null&&l!==null,M=!1,N=1;N<u.length;++N)if(u[N]!==null&&u[N].destructorFunction===void 0){M=!0;break}for(var z=u[0].name!=="void",$="",le="",N=0;N<S-2;++N)$+=(N!==0?", ":"")+"arg"+N,le+=(N!==0?", ":"")+"arg"+N+"Wired";var te="return function "+$i(a)+"("+$+`) {
if (arguments.length !== `+(S-2)+`) {
throwBindingError('function `+a+" called with ' + arguments.length + ' arguments, expected "+(S-2)+` args!');
}
`;M&&(te+=`var destructors = [];
`);var ie=M?"destructors":"null",de=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],ne=[dt,v,E,lc,u[0],u[1]];A&&(te+="var thisWired = classParam.toWireType("+ie+`, this);
`);for(var N=0;N<S-2;++N)te+="var arg"+N+"Wired = argType"+N+".toWireType("+ie+", arg"+N+"); // "+u[N+2].name+`
`,de.push("argType"+N),ne.push(u[N+2]);if(A&&(le="thisWired"+(le.length>0?", ":"")+le),te+=(z?"var rv = ":"")+"invoker(fn"+(le.length>0?", ":"")+le+`);
`,M)te+=`runDestructors(destructors);
`;else for(var N=A?1:2;N<u.length;++N){var ze=N===1?"thisWired":"arg"+(N-2)+"Wired";u[N].destructorFunction!==null&&(te+=ze+"_dtor("+ze+"); // "+u[N].name+`
`,de.push(ze+"_dtor"),ne.push(u[N].destructorFunction))}z&&(te+=`var ret = retType.fromWireType(rv);
return ret;
`),te+=`}
`,de.push(te);var Ce=wf(Function,de).apply(null,ne);return Ce}function Ds(a,u){for(var l=[],v=0;v<a;v++)l.push(V[(u>>2)+v]);return l}function Tf(a,u,l,v,E,S,A){var M=Ds(l,v);u=rn(u),S=Vn(E,S),ta([],[a],function(N){N=N[0];var z=N.name+"."+u;function $(){Uo("Cannot call "+z+" due to unbound types",M)}var le=N.registeredClass.constructor;return le[u]===void 0?($.argCount=l-1,le[u]=$):(Fo(le,u,z),le[u].overloadTable[l-1]=$),ta([],M,function(te){var ie=[te[0],null].concat(te.slice(1)),de=Lo(z,ie,null,S,A);return le[u].overloadTable===void 0?(de.argCount=l-1,le[u]=de):le[u].overloadTable[l-1]=de,[]}),[]})}function Sf(a,u,l,v,E,S){F(u>0);var A=Ds(u,l);E=Vn(v,E);var M=[S],N=[];ta([],[a],function(z){z=z[0];var $="constructor "+z.name;if(z.registeredClass.constructor_body===void 0&&(z.registeredClass.constructor_body=[]),z.registeredClass.constructor_body[u-1]!==void 0)throw new ea("Cannot register multiple constructors with identical number of parameters ("+(u-1)+") for class '"+z.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return z.registeredClass.constructor_body[u-1]=function(){Uo("Cannot construct "+z.name+" due to unbound types",A)},ta([],A,function(le){return z.registeredClass.constructor_body[u-1]=function(){arguments.length!==u-1&&dt($+" called with "+arguments.length+" arguments, expected "+(u-1)),N.length=0,M.length=u;for(var ie=1;ie<u;++ie)M[ie]=le[ie].toWireType(N,arguments[ie-1]);var de=E.apply(null,M);return lc(N),le[0].fromWireType(de)},[]}),[]})}function cc(a,u,l,v,E,S,A,M){var N=Ds(l,v);u=rn(u),S=Vn(E,S),ta([],[a],function(z){z=z[0];var $=z.name+"."+u;M&&z.registeredClass.pureVirtualFunctions.push(u);function le(){Uo("Cannot call "+$+" due to unbound types",N)}var te=z.registeredClass.instancePrototype,ie=te[u];return ie===void 0||ie.overloadTable===void 0&&ie.className!==z.name&&ie.argCount===l-2?(le.argCount=l-2,le.className=z.name,te[u]=le):(Fo(te,u,$),te[u].overloadTable[l-2]=le),ta([],N,function(de){var ne=Lo($,de,z,S,A);return te[u].overloadTable===void 0?(ne.argCount=l-2,te[u]=ne):te[u].overloadTable[l-2]=ne,[]}),[]})}var Fu=[],na=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function dc(a){a>4&&--na[a].refcount===0&&(na[a]=void 0,Fu.push(a))}function fc(){for(var a=0,u=5;u<na.length;++u)na[u]!==void 0&&++a;return a}function Wi(){for(var a=5;a<na.length;++a)if(na[a]!==void 0)return na[a];return null}function Nu(){s.count_emval_handles=fc,s.get_first_emval=Wi}function Ms(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var u=Fu.length?Fu.pop():na.length;return na[u]={refcount:1,value:a},u}}}function pc(a,u){u=rn(u),Hr(a,{name:u,fromWireType:function(l){var v=na[l].value;return dc(l),v},toWireType:function(l,v){return Ms(v)},argPackAdvance:8,readValueFromPointer:ko,destructorFunction:null})}function Qi(a){if(a===null)return"null";var u=typeof a;return u==="object"||u==="array"||u==="function"?a.toString():""+a}function Rf(a,u){switch(u){case 2:return function(l){return this.fromWireType(An[l>>2])};case 3:return function(l){return this.fromWireType(Jn[l>>3])};default:throw new TypeError("Unknown float type: "+a)}}function Of(a,u,l){var v=Bi(l);u=rn(u),Hr(a,{name:u,fromWireType:function(E){return E},toWireType:function(E,S){if(typeof S!="number"&&typeof S!="boolean")throw new TypeError('Cannot convert "'+Qi(S)+'" to '+this.name);return S},argPackAdvance:8,readValueFromPointer:Rf(u,v),destructorFunction:null})}function Df(a,u,l,v,E,S){var A=Ds(u,l);a=rn(a),E=Vn(v,E),Ea(a,function(){Uo("Cannot call "+a+" due to unbound types",A)},u-1),ta([],A,function(M){var N=[M[0],null].concat(M.slice(1));return un(a,Lo(a,N,null,E,S),u-1),[]})}function Mf(a,u,l){switch(u){case 0:return l?function(E){return ot[E]}:function(E){return Et[E]};case 1:return l?function(E){return Jt[E>>1]}:function(E){return Mn[E>>1]};case 2:return l?function(E){return V[E>>2]}:function(E){return Zt[E>>2]};default:throw new TypeError("Unknown integer type: "+a)}}function Af(a,u,l,v,E){u=rn(u),E===-1&&(E=4294967295);var S=Bi(l),A=function(z){return z};if(v===0){var M=32-8*l;A=function(z){return z<<M>>>M}}var N=u.indexOf("unsigned")!=-1;Hr(a,{name:u,fromWireType:A,toWireType:function(z,$){if(typeof $!="number"&&typeof $!="boolean")throw new TypeError('Cannot convert "'+Qi($)+'" to '+this.name);if($<v||$>E)throw new TypeError('Passing a number "'+Qi($)+'" from JS side to C/C++ side to an argument of type "'+u+'", which is outside the valid range ['+v+", "+E+"]!");return N?$>>>0:$|0},argPackAdvance:8,readValueFromPointer:Mf(u,S,v!==0),destructorFunction:null})}function xf(a,u,l){var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],E=v[u];function S(A){A=A>>2;var M=Zt,N=M[A],z=M[A+1];return new E(Kt,z,N)}l=rn(l),Hr(a,{name:l,fromWireType:S,argPackAdvance:8,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})}function Cf(a,u){u=rn(u);var l=u==="std::string";Hr(a,{name:u,fromWireType:function(v){var E=Zt[v>>2],S;if(l){var A=Et[v+4+E],M=0;A!=0&&(M=A,Et[v+4+E]=0);for(var N=v+4,z=0;z<=E;++z){var $=v+4+z;if(Et[$]==0){var le=En(N);S===void 0?S=le:(S+=String.fromCharCode(0),S+=le),N=$+1}}M!=0&&(Et[v+4+E]=M)}else{for(var te=new Array(E),z=0;z<E;++z)te[z]=String.fromCharCode(Et[v+4+z]);S=te.join("")}return ba(v),S},toWireType:function(v,E){E instanceof ArrayBuffer&&(E=new Uint8Array(E));var S,A=typeof E=="string";A||E instanceof Uint8Array||E instanceof Uint8ClampedArray||E instanceof Int8Array||dt("Cannot pass non-string to std::string"),l&&A?S=function(){return pn(E)}:S=function(){return E.length};var M=S(),N=Lr(4+M+1);if(Zt[N>>2]=M,l&&A)qt(E,N+4,M+1);else if(A)for(var z=0;z<M;++z){var $=E.charCodeAt(z);$>255&&(ba(N),dt("String has UTF-16 code units that do not fit in 8 bits")),Et[N+4+z]=$}else for(var z=0;z<M;++z)Et[N+4+z]=E[z];return v!==null&&v.push(ba,N),N},argPackAdvance:8,readValueFromPointer:ko,destructorFunction:function(v){ba(v)}})}function mc(a,u,l){l=rn(l);var v,E,S,A,M;u===2?(v=ma,E=Vr,A=Wr,S=function(){return Mn},M=1):u===4&&(v=Fr,E=On,A=dr,S=function(){return Zt},M=2),Hr(a,{name:l,fromWireType:function(N){var z=Zt[N>>2],$=S(),le,te=$[N+4+z*u>>M],ie=0;te!=0&&(ie=te,$[N+4+z*u>>M]=0);for(var de=N+4,ne=0;ne<=z;++ne){var ze=N+4+ne*u;if($[ze>>M]==0){var Ce=v(de);le===void 0?le=Ce:(le+=String.fromCharCode(0),le+=Ce),de=ze+u}}return ie!=0&&($[N+4+z*u>>M]=ie),ba(N),le},toWireType:function(N,z){typeof z!="string"&&dt("Cannot pass non-string to C++ string type "+l);var $=A(z),le=Lr(4+$+u);return Zt[le>>2]=$>>M,E(z,le+4,$+u),N!==null&&N.push(ba,le),le},argPackAdvance:8,readValueFromPointer:ko,destructorFunction:function(N){ba(N)}})}function Pf(a,u){u=rn(u),Hr(a,{isVoid:!0,name:u,argPackAdvance:0,fromWireType:function(){},toWireType:function(l,v){}})}function hc(a){a>4&&(na[a].refcount+=1)}function Ff(a,u){var l=Ur[a];return l===void 0&&dt(u+" has unknown type "+Io(a)),l}function Nf(a,u){a=Ff(a,"_emval_take_value");var l=a.readValueFromPointer(u);return Ms(l)}function kf(){P()}function If(a,u,l){Et.copyWithin(a,u,u+l)}function ku(){return Et.length}function Ri(a){try{return Re.grow(a-Kt.byteLength+65535>>16),xn(Re.buffer),1}catch(u){console.error("emscripten_realloc_buffer: Attempted to grow heap from "+Kt.byteLength+" bytes to "+a+" bytes, but got error: "+u)}}function As(a){var u=ku();F(a>u);var l=65536,v=2147483648-l;if(a>v)return ge("Cannot enlarge memory, asked to go up to "+a+" bytes, but the limit is "+v+" bytes!"),!1;for(var E=16777216,S=1;S<=4;S*=2){var A=u*(1+.2/S);A=Math.min(A,a+100663296);var M=Math.min(v,bn(Math.max(E,a,A),l)),N=Ri(M);if(N)return!0}return ge("Failed to grow the heap from "+u+" bytes to "+M+" bytes, not enough memory!"),!1}var Iu={};function Yi(){return R||"./this.program"}function jo(){if(!jo.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Yi()};for(var u in Iu)a[u]=Iu[u];var l=[];for(var u in a)l.push(u+"="+a[u]);jo.strings=l}return jo.strings}function Uf(a,u){var l=jo(),v=0;return l.forEach(function(E,S){var A=u+v;V[a+S*4>>2]=A,mn(E,A),v+=E.length+1}),0}function Hf(a,u){var l=jo();V[a>>2]=l.length;var v=0;return l.forEach(function(E){v+=E.length+1}),V[u>>2]=v,0}function Lf(a){try{var u=De.getStreamFromFD(a);return y.close(u),0}catch(l){return(typeof y=="undefined"||!(l instanceof y.ErrnoError))&&P(l),l.errno}}function jf(a,u){try{var l=De.getStreamFromFD(a),v=l.tty?2:y.isDir(l.mode)?3:y.isLink(l.mode)?7:4;return ot[u>>0]=v,0}catch(E){return(typeof y=="undefined"||!(E instanceof y.ErrnoError))&&P(E),E.errno}}function vc(a,u,l,v){try{var E=De.getStreamFromFD(a),S=De.doReadv(E,u,l);return V[v>>2]=S,0}catch(A){return(typeof y=="undefined"||!(A instanceof y.ErrnoError))&&P(A),A.errno}}function zf(a,u,l,v,E){try{var S=De.getStreamFromFD(a),A=4294967296,M=l*A+(u>>>0),N=9007199254740992;return M<=-N||M>=N?-61:(y.llseek(S,M,v),wn=[S.position>>>0,(wt=S.position,+va(wt)>=1?wt>0?(Gr(+kr(wt/4294967296),4294967295)|0)>>>0:~~+ya((wt-+(~~wt>>>0))/4294967296)>>>0:0)],V[E>>2]=wn[0],V[E+4>>2]=wn[1],S.getdents&&M===0&&v===0&&(S.getdents=null),0)}catch(z){return(typeof y=="undefined"||!(z instanceof y.ErrnoError))&&P(z),z.errno}}function yc(a,u,l,v){try{var E=De.getStreamFromFD(a),S=De.doWritev(E,u,l);return V[v>>2]=S,0}catch(A){return(typeof y=="undefined"||!(A instanceof y.ErrnoError))&&P(A),A.errno}}function er(a){a=En(a);var u=Lr(20),l=Lr(a.length+1);qt(a,l,a.length+1),V[u>>2]=l;var v=Lr(4);V[v>>2]=0,V[u+4>>2]=v;var E=2;V[u+8>>2]=E,V[u+12>>2]=4;var S=Lr(12);return V[S>>2]=S+8,V[S+4>>2]=0,V[S+8>>2]=ga(vn.lookup_name(a)),V[u+16>>2]=S,u}function gc(a){var u=Date.now();return V[a>>2]=u/1e3|0,V[a+4>>2]=u%1e3*1e3|0,0}var Xf=2400384;qt("GMT",2400432,4);function Uu(){if(Uu.called)return;Uu.called=!0,V[Gf()>>2]=new Date().getTimezoneOffset()*60;var a=new Date().getFullYear(),u=new Date(a,0,1),l=new Date(a,6,1);V[bc()>>2]=Number(u.getTimezoneOffset()!=l.getTimezoneOffset());function v(N){var z=N.toTimeString().match(/\(([A-Za-z ]+)\)$/);return z?z[1]:"GMT"}var E=v(u),S=v(l),A=fr(E),M=fr(S);l.getTimezoneOffset()<u.getTimezoneOffset()?(V[Bo()>>2]=A,V[Bo()+4>>2]=M):(V[Bo()>>2]=M,V[Bo()+4>>2]=A)}function Bf(a,u){Uu();var l=new Date(V[a>>2]*1e3);V[u>>2]=l.getSeconds(),V[u+4>>2]=l.getMinutes(),V[u+8>>2]=l.getHours(),V[u+12>>2]=l.getDate(),V[u+16>>2]=l.getMonth(),V[u+20>>2]=l.getFullYear()-1900,V[u+24>>2]=l.getDay();var v=new Date(l.getFullYear(),0,1),E=(l.getTime()-v.getTime())/(1e3*60*60*24)|0;V[u+28>>2]=E,V[u+36>>2]=-(l.getTimezoneOffset()*60);var S=new Date(l.getFullYear(),6,1).getTimezoneOffset(),A=v.getTimezoneOffset(),M=(S!=A&&l.getTimezoneOffset()==Math.min(A,S))|0;V[u+32>>2]=M;var N=V[Bo()+(M?4:0)>>2];return V[u+40>>2]=N,u}function $f(a){return Bf(a,Xf)}function Vf(a){}function zo(a){return a%4===0&&(a%100!==0||a%400===0)}function Xo(a,u){for(var l=0,v=0;v<=u;l+=a[v++]);return l}var ei=[31,29,31,30,31,30,31,31,30,31,30,31],xs=[31,28,31,30,31,30,31,31,30,31,30,31];function ti(a,u){for(var l=new Date(a.getTime());u>0;){var v=zo(l.getFullYear()),E=l.getMonth(),S=(v?ei:xs)[E];if(u>S-l.getDate())u-=S-l.getDate()+1,l.setDate(1),E<11?l.setMonth(E+1):(l.setMonth(0),l.setFullYear(l.getFullYear()+1));else return l.setDate(l.getDate()+u),l}return l}function _c(a,u,l,v){var E=V[v+40>>2],S={tm_sec:V[v>>2],tm_min:V[v+4>>2],tm_hour:V[v+8>>2],tm_mday:V[v+12>>2],tm_mon:V[v+16>>2],tm_year:V[v+20>>2],tm_wday:V[v+24>>2],tm_yday:V[v+28>>2],tm_isdst:V[v+32>>2],tm_gmtoff:V[v+36>>2],tm_zone:E?En(E):""},A=En(l),M={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var N in M)A=A.replace(new RegExp(N,"g"),M[N]);var z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],$=["January","February","March","April","May","June","July","August","September","October","November","December"];function le(Y,ve,Ue){for(var Xe=typeof Y=="number"?Y.toString():Y||"";Xe.length<ve;)Xe=Ue[0]+Xe;return Xe}function te(Y,ve){return le(Y,ve,"0")}function ie(Y,ve){function Ue(be){return be<0?-1:be>0?1:0}var Xe;return(Xe=Ue(Y.getFullYear()-ve.getFullYear()))===0&&(Xe=Ue(Y.getMonth()-ve.getMonth()))===0&&(Xe=Ue(Y.getDate()-ve.getDate())),Xe}function de(Y){switch(Y.getDay()){case 0:return new Date(Y.getFullYear()-1,11,29);case 1:return Y;case 2:return new Date(Y.getFullYear(),0,3);case 3:return new Date(Y.getFullYear(),0,2);case 4:return new Date(Y.getFullYear(),0,1);case 5:return new Date(Y.getFullYear()-1,11,31);case 6:return new Date(Y.getFullYear()-1,11,30)}}function ne(Y){var ve=ti(new Date(Y.tm_year+1900,0,1),Y.tm_yday),Ue=new Date(ve.getFullYear(),0,4),Xe=new Date(ve.getFullYear()+1,0,4),be=de(Ue),Wt=de(Xe);return ie(be,ve)<=0?ie(Wt,ve)<=0?ve.getFullYear()+1:ve.getFullYear():ve.getFullYear()-1}var ze={"%a":function(Y){return z[Y.tm_wday].substring(0,3)},"%A":function(Y){return z[Y.tm_wday]},"%b":function(Y){return $[Y.tm_mon].substring(0,3)},"%B":function(Y){return $[Y.tm_mon]},"%C":function(Y){var ve=Y.tm_year+1900;return te(ve/100|0,2)},"%d":function(Y){return te(Y.tm_mday,2)},"%e":function(Y){return le(Y.tm_mday,2," ")},"%g":function(Y){return ne(Y).toString().substring(2)},"%G":function(Y){return ne(Y)},"%H":function(Y){return te(Y.tm_hour,2)},"%I":function(Y){var ve=Y.tm_hour;return ve==0?ve=12:ve>12&&(ve-=12),te(ve,2)},"%j":function(Y){return te(Y.tm_mday+Xo(zo(Y.tm_year+1900)?ei:xs,Y.tm_mon-1),3)},"%m":function(Y){return te(Y.tm_mon+1,2)},"%M":function(Y){return te(Y.tm_min,2)},"%n":function(){return`
`},"%p":function(Y){return Y.tm_hour>=0&&Y.tm_hour<12?"AM":"PM"},"%S":function(Y){return te(Y.tm_sec,2)},"%t":function(){return"	"},"%u":function(Y){return Y.tm_wday||7},"%U":function(Y){var ve=new Date(Y.tm_year+1900,0,1),Ue=ve.getDay()===0?ve:ti(ve,7-ve.getDay()),Xe=new Date(Y.tm_year+1900,Y.tm_mon,Y.tm_mday);if(ie(Ue,Xe)<0){var be=Xo(zo(Xe.getFullYear())?ei:xs,Xe.getMonth()-1)-31,Wt=31-Ue.getDate(),ln=Wt+be+Xe.getDate();return te(Math.ceil(ln/7),2)}return ie(Ue,ve)===0?"01":"00"},"%V":function(Y){var ve=new Date(Y.tm_year+1900,0,4),Ue=new Date(Y.tm_year+1901,0,4),Xe=de(ve),be=de(Ue),Wt=ti(new Date(Y.tm_year+1900,0,1),Y.tm_yday);if(ie(Wt,Xe)<0)return"53";if(ie(be,Wt)<=0)return"01";var ln;return Xe.getFullYear()<Y.tm_year+1900?ln=Y.tm_yday+32-Xe.getDate():ln=Y.tm_yday+1-Xe.getDate(),te(Math.ceil(ln/7),2)},"%w":function(Y){return Y.tm_wday},"%W":function(Y){var ve=new Date(Y.tm_year,0,1),Ue=ve.getDay()===1?ve:ti(ve,ve.getDay()===0?1:7-ve.getDay()+1),Xe=new Date(Y.tm_year+1900,Y.tm_mon,Y.tm_mday);if(ie(Ue,Xe)<0){var be=Xo(zo(Xe.getFullYear())?ei:xs,Xe.getMonth()-1)-31,Wt=31-Ue.getDate(),ln=Wt+be+Xe.getDate();return te(Math.ceil(ln/7),2)}return ie(Ue,ve)===0?"01":"00"},"%y":function(Y){return(Y.tm_year+1900).toString().substring(2)},"%Y":function(Y){return Y.tm_year+1900},"%z":function(Y){var ve=Y.tm_gmtoff,Ue=ve>=0;return ve=Math.abs(ve)/60,ve=ve/60*100+ve%60,(Ue?"+":"-")+String("0000"+ve).slice(-4)},"%Z":function(Y){return Y.tm_zone},"%%":function(){return"%"}};for(var N in ze)A.indexOf(N)>=0&&(A=A.replace(new RegExp(N,"g"),ze[N](S)));var Ce=qi(A,!1);return Ce.length>u?0:(pr(Ce,a),Ce.length-1)}function Wf(a,u,l,v){return _c(a,u,l,v)}function Qf(a){var u=Date.now()/1e3|0;return a&&(V[a>>2]=u),u}function Gi(a,u){Gi.array||(Gi.array=[]);var l=Gi.array;l.length=0;for(var v;v=Et[a++];)v===100||v===102?(u=u+7&-8,l.push(Jn[u>>3]),u+=8):v===105?(u=u+3&-4,l.push(V[u>>2]),u+=4):P("unexpected char in asm const signature "+v);return l}var Cs=function(a,u,l,v){a||(a=this),this.parent=a,this.mount=a.mount,this.mounted=null,this.id=y.nextInode++,this.name=u,this.mode=l,this.node_ops={},this.stream_ops={},this.rdev=v},Pa=365,Fa=146;Object.defineProperties(Cs.prototype,{read:{get:function(){return(this.mode&Pa)===Pa},set:function(a){a?this.mode|=Pa:this.mode&=~Pa}},write:{get:function(){return(this.mode&Fa)===Fa},set:function(a){a?this.mode|=Fa:this.mode&=~Fa}},isFolder:{get:function(){return y.isDir(this.mode)}},isDevice:{get:function(){return y.isChrdev(this.mode)}}}),y.FSNode=Cs,y.staticInit(),s.FS_createFolder=y.createFolder,s.FS_createPath=y.createPath,s.FS_createDataFile=y.createDataFile,s.FS_createPreloadedFile=y.createPreloadedFile,s.FS_createLazyFile=y.createLazyFile,s.FS_createLink=y.createLink,s.FS_createDevice=y.createDevice,s.FS_unlink=y.unlink,Ar(),ea=s.BindingError=Zr(Error,"BindingError"),Ei=s.InternalError=Zr(Error,"InternalError"),Za(),yr(),Cu(),Os=s.UnboundTypeError=Zr(Error,"UnboundTypeError"),Nu();function qi(a,u,l){var v=l>0?l:pn(a)+1,E=new Array(v),S=lr(a,E,0,E.length);return u&&(E.length=S),E}var Ec={__cxa_allocate_exception:yi,__cxa_throw:So,__handle_stack_overflow:Ro,__map_file:Oo,__syscall102:Ao,__syscall12:Xi,__syscall142:bs,__syscall183:St,__syscall195:xo,__syscall197:Co,__syscall221:rt,__syscall3:ws,__syscall39:$n,__syscall5:_i,__syscall54:qa,__syscall85:Ts,__syscall91:nn,_embind_register_bool:Rs,_embind_register_class:Ho,_embind_register_class_class_function:Tf,_embind_register_class_constructor:Sf,_embind_register_class_function:cc,_embind_register_emval:pc,_embind_register_float:Of,_embind_register_function:Df,_embind_register_integer:Af,_embind_register_memory_view:xf,_embind_register_std_string:Cf,_embind_register_std_wstring:mc,_embind_register_void:Pf,_emval_decref:dc,_emval_incref:hc,_emval_take_value:Nf,abort:kf,connectMemory:Ou,emscripten_asm_const_iii:Ru,emscripten_memcpy_big:If,emscripten_resize_heap:As,environ_get:Uf,environ_sizes_get:Hf,fd_close:Lf,fd_fdstat_get:jf,fd_read:vc,fd_seek:zf,fd_write:yc,gethostbyname:er,gettimeofday:gc,localtime:$f,memory:Re,setTempRet0:Vf,strftime:_c,strftime_l:Wf,table:Pe,time:Qf},Hu=Bn();s.asm=Hu;var Yf=s.___wasm_call_ctors=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__wasm_call_ctors.apply(null,arguments)};s._fflush=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.fflush.apply(null,arguments)},s._expandCDSPFromString=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.expandCDSPFromString.apply(null,arguments)},s._generateCAuxFilesFromString=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.generateCAuxFilesFromString.apply(null,arguments)},s._freeCMemory=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.freeCMemory.apply(null,arguments)};var ba=s._free=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.free.apply(null,arguments)};s._getCLibFaustVersion=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getCLibFaustVersion.apply(null,arguments)},s._getErrorAfterException=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getErrorAfterException.apply(null,arguments)},s._cleanupAfterException=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.cleanupAfterException.apply(null,arguments)};var Lr=s._malloc=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.malloc.apply(null,arguments)};s.___errno_location=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__errno_location.apply(null,arguments)};var Ps=s._htons=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.htons.apply(null,arguments)};s.___em_js__connectMemory=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__em_js__connectMemory.apply(null,arguments)},s._deleteAllWasmCDSPFactories=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.deleteAllWasmCDSPFactories.apply(null,arguments)},s._createWasmCDSPFactoryFromString=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.createWasmCDSPFactoryFromString.apply(null,arguments)},s._getWasmCModule=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCModule.apply(null,arguments)},s._getWasmCModuleSize=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCModuleSize.apply(null,arguments)},s._getWasmCHelpers=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCHelpers.apply(null,arguments)},s._freeWasmCModule=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.freeWasmCModule.apply(null,arguments)};var Fs=s._ntohs=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.ntohs.apply(null,arguments)},Bo=s.__get_tzname=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_tzname.apply(null,arguments)},bc=s.__get_daylight=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_daylight.apply(null,arguments)},Gf=s.__get_timezone=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_timezone.apply(null,arguments)},qf=s.___getTypeName=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__getTypeName.apply(null,arguments)};s.___embind_register_native_and_builtin_types=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__embind_register_native_and_builtin_types.apply(null,arguments)},s.___set_stack_limit=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__set_stack_limit.apply(null,arguments)};var Ns=s.stackSave=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackSave.apply(null,arguments)},Na=s.stackAlloc=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackAlloc.apply(null,arguments)},$o=s.stackRestore=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackRestore.apply(null,arguments)};s.dynCall_ii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_ii.apply(null,arguments)},s.dynCall_vi=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vi.apply(null,arguments)},s.dynCall_vii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vii.apply(null,arguments)},s.dynCall_iiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiii.apply(null,arguments)},s.dynCall_viijii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viijii.apply(null,arguments)},s.dynCall_viiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiii.apply(null,arguments)},s.dynCall_iii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iii.apply(null,arguments)},s.dynCall_iiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiii.apply(null,arguments)},s.dynCall_iiiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiii.apply(null,arguments)},s.dynCall_viddddii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddddii.apply(null,arguments)},s.dynCall_viddddiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddddiii.apply(null,arguments)},s.dynCall_viddd=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddd.apply(null,arguments)},s.dynCall_vidddi=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidddi.apply(null,arguments)},s.dynCall_vidddd=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidddd.apply(null,arguments)},s.dynCall_viddii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddii.apply(null,arguments)},s.dynCall_viddi=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddi.apply(null,arguments)},s.dynCall_viiiiddd=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiiddd.apply(null,arguments)},s.dynCall_viii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viii.apply(null,arguments)},s.dynCall_v=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_v.apply(null,arguments)},s.dynCall_viiiffff=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiffff.apply(null,arguments)},s.dynCall_viiiff=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiff.apply(null,arguments)},s.dynCall_iiiiiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiiii.apply(null,arguments)},s.dynCall_iiiiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiii.apply(null,arguments)},s.dynCall_iiid=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiid.apply(null,arguments)},s.dynCall_viiidddd=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiidddd.apply(null,arguments)},s.dynCall_viiidd=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiidd.apply(null,arguments)},s.dynCall_viiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiii.apply(null,arguments)},s.dynCall_di=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_di.apply(null,arguments)},s.dynCall_vid=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vid.apply(null,arguments)},s.dynCall_i=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_i.apply(null,arguments)},s.dynCall_viiif=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiif.apply(null,arguments)},s.dynCall_fiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_fiii.apply(null,arguments)},s.dynCall_vidiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidiii.apply(null,arguments)},s.dynCall_viif=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viif.apply(null,arguments)},s.dynCall_fii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_fii.apply(null,arguments)},s.dynCall_jiji=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_jiji.apply(null,arguments)},s.dynCall_iidiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iidiiii.apply(null,arguments)},s.dynCall_iiiiiiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiiiii.apply(null,arguments)},s.dynCall_iiiiij=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiij.apply(null,arguments)},s.dynCall_iiiiid=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiid.apply(null,arguments)},s.dynCall_iiiiijj=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiijj.apply(null,arguments)},s.dynCall_iiiiiijj=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiijj.apply(null,arguments)},s.dynCall_viiiiii=function(){return F(he,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!pe,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiiii.apply(null,arguments)},s.asm=Hu,Object.getOwnPropertyDescriptor(s,"intArrayFromString")||(s.intArrayFromString=function(){P("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"intArrayToString")||(s.intArrayToString=function(){P("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ccall")||(s.ccall=function(){P("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.cwrap=We,Object.getOwnPropertyDescriptor(s,"setValue")||(s.setValue=function(){P("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getValue")||(s.getValue=function(){P("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocate")||(s.allocate=function(){P("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.getMemory=at,Object.getOwnPropertyDescriptor(s,"UTF8ArrayToString")||(s.UTF8ArrayToString=function(){P("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.UTF8ToString=En,Object.getOwnPropertyDescriptor(s,"stringToUTF8Array")||(s.stringToUTF8Array=function(){P("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.stringToUTF8=qt,s.lengthBytesUTF8=pn,Object.getOwnPropertyDescriptor(s,"stackTrace")||(s.stackTrace=function(){P("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPreRun")||(s.addOnPreRun=function(){P("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnInit")||(s.addOnInit=function(){P("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPreMain")||(s.addOnPreMain=function(){P("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnExit")||(s.addOnExit=function(){P("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPostRun")||(s.addOnPostRun=function(){P("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeStringToMemory")||(s.writeStringToMemory=function(){P("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeArrayToMemory")||(s.writeArrayToMemory=function(){P("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeAsciiToMemory")||(s.writeAsciiToMemory=function(){P("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.addRunDependency=je,s.removeRunDependency=st,s.FS_createFolder=y.createFolder,s.FS_createPath=y.createPath,s.FS_createDataFile=y.createDataFile,s.FS_createPreloadedFile=y.createPreloadedFile,s.FS_createLazyFile=y.createLazyFile,s.FS_createLink=y.createLink,s.FS_createDevice=y.createDevice,s.FS_unlink=y.unlink,Object.getOwnPropertyDescriptor(s,"dynamicAlloc")||(s.dynamicAlloc=function(){P("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"loadDynamicLibrary")||(s.loadDynamicLibrary=function(){P("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"loadWebAssemblyModule")||(s.loadWebAssemblyModule=function(){P("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getLEB")||(s.getLEB=function(){P("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getFunctionTables")||(s.getFunctionTables=function(){P("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"alignFunctionTables")||(s.alignFunctionTables=function(){P("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerFunctions")||(s.registerFunctions=function(){P("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addFunction")||(s.addFunction=function(){P("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"removeFunction")||(s.removeFunction=function(){P("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getFuncWrapper")||(s.getFuncWrapper=function(){P("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"prettyPrint")||(s.prettyPrint=function(){P("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeBigInt")||(s.makeBigInt=function(){P("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"dynCall")||(s.dynCall=function(){P("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getCompilerSetting")||(s.getCompilerSetting=function(){P("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"print")||(s.print=function(){P("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"printErr")||(s.printErr=function(){P("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getTempRet0")||(s.getTempRet0=function(){P("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setTempRet0")||(s.setTempRet0=function(){P("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"callMain")||(s.callMain=function(){P("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"abort")||(s.abort=function(){P("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToNewUTF8")||(s.stringToNewUTF8=function(){P("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscripten_realloc_buffer")||(s.emscripten_realloc_buffer=function(){P("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ENV")||(s.ENV=function(){P("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setjmpId")||(s.setjmpId=function(){P("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ERRNO_CODES")||(s.ERRNO_CODES=function(){P("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ERRNO_MESSAGES")||(s.ERRNO_MESSAGES=function(){P("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"DNS")||(s.DNS=function(){P("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GAI_ERRNO_MESSAGES")||(s.GAI_ERRNO_MESSAGES=function(){P("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Protocols")||(s.Protocols=function(){P("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Sockets")||(s.Sockets=function(){P("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UNWIND_CACHE")||(s.UNWIND_CACHE=function(){P("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readAsmConstArgs")||(s.readAsmConstArgs=function(){P("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jstoi_q")||(s.jstoi_q=function(){P("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jstoi_s")||(s.jstoi_s=function(){P("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PATH")||(s.PATH=function(){P("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PATH_FS")||(s.PATH_FS=function(){P("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SYSCALLS")||(s.SYSCALLS=function(){P("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"syscallMmap2")||(s.syscallMmap2=function(){P("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"syscallMunmap")||(s.syscallMunmap=function(){P("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"JSEvents")||(s.JSEvents=function(){P("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"demangle")||(s.demangle=function(){P("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"demangleAll")||(s.demangleAll=function(){P("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jsStackTrace")||(s.jsStackTrace=function(){P("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackTrace")||(s.stackTrace=function(){P("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64")||(s.writeI53ToI64=function(){P("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64Clamped")||(s.writeI53ToI64Clamped=function(){P("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64Signaling")||(s.writeI53ToI64Signaling=function(){P("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToU64Clamped")||(s.writeI53ToU64Clamped=function(){P("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToU64Signaling")||(s.writeI53ToU64Signaling=function(){P("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readI53FromI64")||(s.readI53FromI64=function(){P("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readI53FromU64")||(s.readI53FromU64=function(){P("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"convertI32PairToI53")||(s.convertI32PairToI53=function(){P("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"convertU32PairToI53")||(s.convertU32PairToI53=function(){P("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Browser")||(s.Browser=function(){P("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.FS=y,Object.getOwnPropertyDescriptor(s,"MEMFS")||(s.MEMFS=function(){P("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"TTY")||(s.TTY=function(){P("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PIPEFS")||(s.PIPEFS=function(){P("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SOCKFS")||(s.SOCKFS=function(){P("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GL")||(s.GL=function(){P("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGet")||(s.emscriptenWebGLGet=function(){P("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetTexPixelData")||(s.emscriptenWebGLGetTexPixelData=function(){P("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetUniform")||(s.emscriptenWebGLGetUniform=function(){P("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetVertexAttrib")||(s.emscriptenWebGLGetVertexAttrib=function(){P("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"AL")||(s.AL=function(){P("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SDL")||(s.SDL=function(){P("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SDL_gfx")||(s.SDL_gfx=function(){P("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLUT")||(s.GLUT=function(){P("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"EGL")||(s.EGL=function(){P("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLFW_Window")||(s.GLFW_Window=function(){P("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLFW")||(s.GLFW=function(){P("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLEW")||(s.GLEW=function(){P("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"IDBStore")||(s.IDBStore=function(){P("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runAndAbortIfError")||(s.runAndAbortIfError=function(){P("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_handle_array")||(s.emval_handle_array=function(){P("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_free_list")||(s.emval_free_list=function(){P("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_symbols")||(s.emval_symbols=function(){P("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_emval")||(s.init_emval=function(){P("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"count_emval_handles")||(s.count_emval_handles=function(){P("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"get_first_emval")||(s.get_first_emval=function(){P("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getStringOrSymbol")||(s.getStringOrSymbol=function(){P("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"requireHandle")||(s.requireHandle=function(){P("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_newers")||(s.emval_newers=function(){P("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"craftEmvalAllocator")||(s.craftEmvalAllocator=function(){P("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_get_global")||(s.emval_get_global=function(){P("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_methodCallers")||(s.emval_methodCallers=function(){P("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"InternalError")||(s.InternalError=function(){P("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"BindingError")||(s.BindingError=function(){P("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UnboundTypeError")||(s.UnboundTypeError=function(){P("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PureVirtualError")||(s.PureVirtualError=function(){P("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_embind")||(s.init_embind=function(){P("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwInternalError")||(s.throwInternalError=function(){P("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwBindingError")||(s.throwBindingError=function(){P("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwUnboundTypeError")||(s.throwUnboundTypeError=function(){P("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ensureOverloadTable")||(s.ensureOverloadTable=function(){P("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"exposePublicSymbol")||(s.exposePublicSymbol=function(){P("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"replacePublicSymbol")||(s.replacePublicSymbol=function(){P("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"extendError")||(s.extendError=function(){P("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"createNamedFunction")||(s.createNamedFunction=function(){P("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredInstances")||(s.registeredInstances=function(){P("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getBasestPointer")||(s.getBasestPointer=function(){P("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerInheritedInstance")||(s.registerInheritedInstance=function(){P("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"unregisterInheritedInstance")||(s.unregisterInheritedInstance=function(){P("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getInheritedInstance")||(s.getInheritedInstance=function(){P("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getInheritedInstanceCount")||(s.getInheritedInstanceCount=function(){P("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getLiveInheritedInstances")||(s.getLiveInheritedInstances=function(){P("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredTypes")||(s.registeredTypes=function(){P("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"awaitingDependencies")||(s.awaitingDependencies=function(){P("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"typeDependencies")||(s.typeDependencies=function(){P("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredPointers")||(s.registeredPointers=function(){P("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerType")||(s.registerType=function(){P("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"whenDependentTypesAreResolved")||(s.whenDependentTypesAreResolved=function(){P("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind_charCodes")||(s.embind_charCodes=function(){P("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind_init_charCodes")||(s.embind_init_charCodes=function(){P("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readLatin1String")||(s.readLatin1String=function(){P("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getTypeName")||(s.getTypeName=function(){P("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"heap32VectorToArray")||(s.heap32VectorToArray=function(){P("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"requireRegisteredType")||(s.requireRegisteredType=function(){P("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getShiftFromSize")||(s.getShiftFromSize=function(){P("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"integerReadValueFromPointer")||(s.integerReadValueFromPointer=function(){P("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"enumReadValueFromPointer")||(s.enumReadValueFromPointer=function(){P("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"floatReadValueFromPointer")||(s.floatReadValueFromPointer=function(){P("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"simpleReadValueFromPointer")||(s.simpleReadValueFromPointer=function(){P("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runDestructors")||(s.runDestructors=function(){P("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"new_")||(s.new_=function(){P("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"craftInvokerFunction")||(s.craftInvokerFunction=function(){P("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind__requireFunction")||(s.embind__requireFunction=function(){P("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"tupleRegistrations")||(s.tupleRegistrations=function(){P("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"structRegistrations")||(s.structRegistrations=function(){P("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"genericPointerToWireType")||(s.genericPointerToWireType=function(){P("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"constNoSmartPtrRawPointerToWireType")||(s.constNoSmartPtrRawPointerToWireType=function(){P("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"nonConstNoSmartPtrRawPointerToWireType")||(s.nonConstNoSmartPtrRawPointerToWireType=function(){P("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_RegisteredPointer")||(s.init_RegisteredPointer=function(){P("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer")||(s.RegisteredPointer=function(){P("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_getPointee")||(s.RegisteredPointer_getPointee=function(){P("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_destructor")||(s.RegisteredPointer_destructor=function(){P("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_deleteObject")||(s.RegisteredPointer_deleteObject=function(){P("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_fromWireType")||(s.RegisteredPointer_fromWireType=function(){P("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runDestructor")||(s.runDestructor=function(){P("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"releaseClassHandle")||(s.releaseClassHandle=function(){P("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"finalizationGroup")||(s.finalizationGroup=function(){P("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"detachFinalizer_deps")||(s.detachFinalizer_deps=function(){P("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"detachFinalizer")||(s.detachFinalizer=function(){P("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"attachFinalizer")||(s.attachFinalizer=function(){P("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeClassHandle")||(s.makeClassHandle=function(){P("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_ClassHandle")||(s.init_ClassHandle=function(){P("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle")||(s.ClassHandle=function(){P("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_isAliasOf")||(s.ClassHandle_isAliasOf=function(){P("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwInstanceAlreadyDeleted")||(s.throwInstanceAlreadyDeleted=function(){P("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_clone")||(s.ClassHandle_clone=function(){P("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_delete")||(s.ClassHandle_delete=function(){P("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"deletionQueue")||(s.deletionQueue=function(){P("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_isDeleted")||(s.ClassHandle_isDeleted=function(){P("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_deleteLater")||(s.ClassHandle_deleteLater=function(){P("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"flushPendingDeletes")||(s.flushPendingDeletes=function(){P("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"delayFunction")||(s.delayFunction=function(){P("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setDelayFunction")||(s.setDelayFunction=function(){P("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredClass")||(s.RegisteredClass=function(){P("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"shallowCopyInternalPointer")||(s.shallowCopyInternalPointer=function(){P("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"downcastPointer")||(s.downcastPointer=function(){P("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"upcastPointer")||(s.upcastPointer=function(){P("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"validateThis")||(s.validateThis=function(){P("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"char_0")||(s.char_0=function(){P("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"char_9")||(s.char_9=function(){P("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeLegalFunctionName")||(s.makeLegalFunctionName=function(){P("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"warnOnce")||(s.warnOnce=function(){P("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackSave")||(s.stackSave=function(){P("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackRestore")||(s.stackRestore=function(){P("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackAlloc")||(s.stackAlloc=function(){P("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"AsciiToString")||(s.AsciiToString=function(){P("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToAscii")||(s.stringToAscii=function(){P("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UTF16ToString")||(s.UTF16ToString=function(){P("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToUTF16")||(s.stringToUTF16=function(){P("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"lengthBytesUTF16")||(s.lengthBytesUTF16=function(){P("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UTF32ToString")||(s.UTF32ToString=function(){P("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToUTF32")||(s.stringToUTF32=function(){P("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"lengthBytesUTF32")||(s.lengthBytesUTF32=function(){P("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocateUTF8")||(s.allocateUTF8=function(){P("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocateUTF8OnStack")||(s.allocateUTF8OnStack=function(){P("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.writeStackCookie=ke,s.checkStackCookie=tt,s.abortStackOverflow=Ct,Object.getOwnPropertyDescriptor(s,"ALLOC_NORMAL")||Object.defineProperty(s,"ALLOC_NORMAL",{configurable:!0,get:function(){P("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_STACK")||Object.defineProperty(s,"ALLOC_STACK",{configurable:!0,get:function(){P("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_DYNAMIC")||Object.defineProperty(s,"ALLOC_DYNAMIC",{configurable:!0,get:function(){P("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_NONE")||Object.defineProperty(s,"ALLOC_NONE",{configurable:!0,get:function(){P("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});var ka;s.then=function(a){if(ka)a(s);else{var u=s.onRuntimeInitialized;s.onRuntimeInitialized=function(){u&&u(),a(s)}}return s};function wc(a){this.name="ExitStatus",this.message="Program terminated with exit("+a+")",this.status=a}k=function a(){ka||ks(),ka||(k=a)};function ks(a){if(hr>0||(ke(),Qt(),hr>0))return;function u(){ka||(ka=!0,s.calledRun=!0,!Le&&(ha(),Yr(),s.onRuntimeInitialized&&s.onRuntimeInitialized(),F(!s._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),vi()))}s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),u()},1)):u(),tt()}if(s.run=ks,s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();return ks(),g}}(),Sha1={};Sha1.hash=function(d,g){g=typeof g=="undefined"?!0:g,g&&(d=Utf8.encode(d));var s=[1518500249,1859775393,2400959708,3395469782];d+=String.fromCharCode(128);for(var T=d.length/4+2,D=Math.ceil(T/16),R=new Array(D),h=0;h<D;h++){R[h]=new Array(16);for(var U=0;U<16;U++)R[h][U]=d.charCodeAt(h*64+U*4)<<24|d.charCodeAt(h*64+U*4+1)<<16|d.charCodeAt(h*64+U*4+2)<<8|d.charCodeAt(h*64+U*4+3)}R[D-1][14]=(d.length-1)*8/Math.pow(2,32),R[D-1][14]=Math.floor(R[D-1][14]),R[D-1][15]=(d.length-1)*8&4294967295;for(var x=1732584193,j=4023233417,K=2562383102,G=271733878,se=3285377520,ee=new Array(80),oe,Ve,Ne,ge,Be,h=0;h<D;h++){for(var _e=0;_e<16;_e++)ee[_e]=R[h][_e];for(var _e=16;_e<80;_e++)ee[_e]=Sha1.ROTL(ee[_e-3]^ee[_e-8]^ee[_e-14]^ee[_e-16],1);oe=x,Ve=j,Ne=K,ge=G,Be=se;for(var _e=0;_e<80;_e++){var et=Math.floor(_e/20),$e=Sha1.ROTL(oe,5)+Sha1.f(et,Ve,Ne,ge)+Be+s[et]+ee[_e]&4294967295;Be=ge,ge=Ne,Ne=Sha1.ROTL(Ve,30),Ve=oe,oe=$e}x=x+oe&4294967295,j=j+Ve&4294967295,K=K+Ne&4294967295,G=G+ge&4294967295,se=se+Be&4294967295}return Sha1.toHexStr(x)+Sha1.toHexStr(j)+Sha1.toHexStr(K)+Sha1.toHexStr(G)+Sha1.toHexStr(se)};Sha1.f=function(d,g,s,T){switch(d){case 0:return g&s^~g&T;case 1:return g^s^T;case 2:return g&s^g&T^s&T;case 3:return g^s^T}};Sha1.ROTL=function(d,g){return d<<g|d>>>32-g};Sha1.toHexStr=function(d){for(var g="",s,T=7;T>=0;T--)s=d>>>T*4&15,g+=s.toString(16);return g};var Utf8={};Utf8.encode=function(d){var g=d.replace(/[\u0080-\u07ff]/g,function(s){var T=s.charCodeAt(0);return String.fromCharCode(192|T>>6,128|T&63)});return g=g.replace(/[\u0800-\uffff]/g,function(s){var T=s.charCodeAt(0);return String.fromCharCode(224|T>>12,128|T>>6&63,128|T&63)}),g};Utf8.decode=function(d){var g=d.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(s){var T=(s.charCodeAt(0)&15)<<12|(s.charCodeAt(1)&63)<<6|s.charCodeAt(2)&63;return String.fromCharCode(T)});return g=g.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(s){var T=(s.charCodeAt(0)&31)<<6|s.charCodeAt(1)&63;return String.fromCharCode(T)}),g};var readyResolver={current:void 0},readyPromise=new Promise(d=>{readyResolver.current=d}),faust_module$1=FaustModule({onRuntimeInitialized:readyResolver.current});faust_module$1.lengthBytesUTF8=function(d){for(var g=0,s=0;s<d.length;++s){var T=d.charCodeAt(s);T>=55296&&T<=57343&&(T=65536+((T&1023)<<10)|d.charCodeAt(++s)&1023),T<=127?++g:T<=2047?g+=2:T<=65535?g+=3:T<=2097151?g+=4:T<=67108863?g+=5:g+=6}return g};var faust=faust||{};faust.remap=function(d,g,s,T,D){return 1*(d-g)/(s-g)*(D-T)+T};faust.debug=!1;faust.createWasmCDSPFactoryFromString=faust_module$1.cwrap("createWasmCDSPFactoryFromString","number",["number","number","number","number","number","number"]);faust.deleteAllWasmCDSPFactories=faust_module$1.cwrap("deleteAllWasmCDSPFactories",null,[]);faust.expandCDSPFromString=faust_module$1.cwrap("expandCDSPFromString","number",["number","number","number","number","number","number"]);faust.getCLibFaustVersion=faust_module$1.cwrap("getCLibFaustVersion","number",[]);faust.getWasmCModule=faust_module$1.cwrap("getWasmCModule","number",["number"]);faust.getWasmCModuleSize=faust_module$1.cwrap("getWasmCModuleSize","number",["number"]);faust.getWasmCHelpers=faust_module$1.cwrap("getWasmCHelpers","number",["number"]);faust.freeWasmCModule=faust_module$1.cwrap("freeWasmCModule",null,["number"]);faust.freeCMemory=faust_module$1.cwrap("freeCMemory",null,["number"]);faust.cleanupAfterException=faust_module$1.cwrap("cleanupAfterException",null,[]);faust.getErrorAfterException=faust_module$1.cwrap("getErrorAfterException","number",[]);faust.error_msg=null;faust.factory_number=0;faust.factory_table=[];faust.getErrorMessage=function(){return faust.error_msg};faust.getLibFaustVersion=function(){return faust_module$1.UTF8ToString(faust.getCLibFaustVersion())};faust.ab2str=function(d){return d?String.fromCharCode.apply(null,new Uint8Array(d)):null};faust.str2ab=function(d){if(d){for(var g=new ArrayBuffer(d.length),s=new Uint8Array(g),T=0,D=d.length;T<D;T++)s[T]=d.charCodeAt(T);return g}else return null};faust.compileCode=function(d,g,s,T){var D=faust_module$1.lengthBytesUTF8(g)+1,R=faust_module$1._malloc(D),h="FaustDSP",U=faust_module$1.lengthBytesUTF8(h)+1,x=faust_module$1._malloc(U),j=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(h,x,U),faust_module$1.stringToUTF8(g,R,D);var K=s===void 0?new Array:s;K.push("-cn",d);for(var G=4,se=faust_module$1._malloc(K.length*G),ee=new Int32Array(faust_module$1.HEAP32.buffer,se,K.length),oe=0;oe<K.length;oe++){var Ve=faust_module$1.lengthBytesUTF8(K[oe])+1,Ne=faust_module$1._malloc(Ve);faust_module$1.stringToUTF8(K[oe],Ne,Ve),ee[oe]=Ne}try{var ge=faust.createWasmCDSPFactoryFromString(x,R,K.length,se,j,T);if(faust.error_msg=faust_module$1.UTF8ToString(j),ge===0)return null;for(var Be=faust.getWasmCModule(ge),_e=faust.getWasmCModuleSize(ge),et=new Uint8Array(_e),oe=0;oe<_e;oe++)et[oe]=faust_module$1.HEAP8[Be+oe];var $e=faust.getWasmCHelpers(ge),it=faust_module$1.UTF8ToString($e);faust_module$1._free(R),faust_module$1._free(x),faust_module$1._free(j),faust.freeWasmCModule(ge),ee=new Int32Array(faust_module$1.HEAP32.buffer,se,K.length);for(var oe=0;oe<K.length;oe++)faust_module$1._free(ee[oe]);return faust_module$1._free(se),{code:et,code_source:g,helpers:it}}catch(Re){return faust.error_msg=faust_module$1.UTF8ToString(faust.getErrorAfterException()),faust.error_msg===""&&(faust.error_msg=Re),faust.cleanupAfterException(),null}};faust.createDSPFactoryAux=function(d,g,s,T){for(var D="",R=0;R<g.length;R++)D+=g[R];var h=Sha1.hash(d+(s?"internal_memory":"external_memory")+D,!0),U=faust.factory_table[h];if(U){T(U);return}var x="mydsp"+faust.factory_number,j="effect"+faust.factory_number++,K="adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";K=K.concat(d),K=K.concat("};"),K=K.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");var G=faust.compileCode(x,d,g,s);if(G){var se=faust.compileCode(j,K,g,s);se?faust.readDSPFactoryFromMachineAux(x,G.code,G.code_source,G.helpers,j,se.code,se.code_source,se.helpers,h,T):faust.readDSPFactoryFromMachineAux(x,G.code,G.code_source,G.helpers,null,null,null,null,h,T)}else T(null)};faust.createDSPFactory=function(d,g,s){readyPromise.then(()=>{faust.createDSPFactoryAux(d,g,!0,s)})};faust.ready=readyPromise;faust.expandDSP=function(d,g){g.push("-lang"),g.push("wasm");var s=faust_module$1.lengthBytesUTF8(d)+1,T=faust_module$1._malloc(s),D="FaustDSP",R=faust_module$1.lengthBytesUTF8(D)+1,h=faust_module$1._malloc(R),U=faust_module$1._malloc(64),x=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(D,h,R),faust_module$1.stringToUTF8(d,T,s),g=g===void 0?new Array:g;for(var j=4,K=faust_module$1._malloc(g.length*j),G=new Int32Array(faust_module$1.HEAP32.buffer,K,g.length),se=0;se<g.length;se++){var ee=faust_module$1.lengthBytesUTF8(g[se])+1,oe=faust_module$1._malloc(ee);faust_module$1.stringToUTF8(g[se],oe,ee),G[se]=oe}try{var Ve=faust.expandCDSPFromString(h,T,g.length,K,U,x),Ne=faust_module$1.UTF8ToString(Ve),ge=faust_module$1.UTF8ToString(U);faust.error_msg=faust_module$1.UTF8ToString(x),faust_module$1._free(T),faust_module$1._free(h),faust_module$1._free(U),faust_module$1._free(x),faust.freeCMemory(Ve),G=new Int32Array(faust_module$1.HEAP32.buffer,K,g.length);for(var se=0;se<g.length;se++)faust_module$1._free(G[se]);return faust_module$1._free(K),Ne}catch(Be){return faust.error_msg=faust_module$1.UTF8ToString(faust.getErrorAfterException()),faust.error_msg===""&&(faust.error_msg=Be),faust.cleanupAfterException(),null}};faust.writeDSPFactoryToMachine=function(d){return{name:d.name,code:faust.ab2str(d.code),code_source:d.code_source,helpers:d.helpers,name_effect:d.name_effect,code_effect:faust.ab2str(d.code_effect),code_source_effect:d.code_source_effect,helpers_effect:d.helpers_effect}};faust.readDSPFactoryFromMachine=function(d,g){var s=Sha1.hash(d.code_source,!0),T=faust.factory_table[s];T?g(T):faust.readDSPFactoryFromMachineAux(d.name,faust.str2ab(d.code),d.code_source,d.helpers,d.name_effect,faust.str2ab(d.code_effect),d.code_source_effect,d.helpers_effect,s,g)};faust.readDSPFactoryFromMachineAux=function(factory_name1,factory_code1,factory_code_source1,helpers_code1,factory_name2,factory_code2,factory_code_source2,helpers_code2,sha_key,callback){WebAssembly.compile(factory_code1).then(module=>{var factory={};factory.polyphony=[],factory.code=factory_code1,factory.code_source=factory_code_source1,factory.helpers=helpers_code1,factory.module=module;var jsToEval=helpers_code1+`
return [getJSON`+factory_name1+", getBase64Code"+factory_name1+"];",evalResult=new Function(jsToEval)();factory.getJSON=evalResult[0],factory.getBase64Code=evalResult[1];try{factory.json_object=JSON.parse(factory.getJSON())}catch(d){throw faust.error_msg="Error in JSON.parse: "+d,callback(null),!0}factory.name=factory_name1,factory.sha_key=sha_key,faust.factory_table[sha_key]=factory,factory_name2?WebAssembly.compile(factory_code2).then(module_effect=>{factory.code_effect=factory_code2,factory.code_source_effect=factory_code_source2,factory.helpers_effect=helpers_code2,factory.module_effect=module_effect,eval(helpers_code2),factory.getJSONeffect=eval("getJSON"+factory_name2),factory.getBase64Codeeffect=eval("getBase64Code"+factory_name2);try{factory.effect_json_object=JSON.parse(factory.getJSONeffect())}catch(d){throw faust.error_msg="Error in JSON.parse: "+d,callback(null),!0}factory.name_effect=factory_name2,callback(factory)}).catch(function(d){faust.error_msg="Faust DSP factory cannot be compiled",callback(null)}):callback(factory)}).catch(function(d){faust.error_msg="Faust DSP factory cannot be compiled",callback(null)})};faust.deleteDSPFactory=function(d){faust.factory_table[d.sha_key]=null};faust.createDSPInstance=function(d,g,s,T){g.resume();var D={env:{memoryBase:0,tableBase:0,_abs:Math.abs,_acosf:Math.acos,_asinf:Math.asin,_atanf:Math.atan,_atan2f:Math.atan2,_ceilf:Math.ceil,_cosf:Math.cos,_expf:Math.exp,_floorf:Math.floor,_fmodf:function(R,h){return R%h},_logf:Math.log,_log10f:Math.log10,_max_f:Math.max,_min_f:Math.min,_remainderf:function(R,h){return R-Math.round(R/h)*h},_powf:Math.pow,_roundf:Math.fround,_sinf:Math.sin,_sqrtf:Math.sqrt,_tanf:Math.tan,_acoshf:Math.acosh,_asinhf:Math.asinh,_atanhf:Math.atanh,_coshf:Math.cosh,_sinhf:Math.sinh,_tanhf:Math.tanh,_isnanf:Number.isNaN,_isinff:function(R){return!isFinite(R)},_copysignf:function(R,h){return Math.sign(R)===Math.sign(h)?R:-R},_acos:Math.acos,_asin:Math.asin,_atan:Math.atan,_atan2:Math.atan2,_ceil:Math.ceil,_cos:Math.cos,_exp:Math.exp,_floor:Math.floor,_fmod:function(R,h){return R%h},_log:Math.log,_log10:Math.log10,_max_:Math.max,_min_:Math.min,_remainder:function(R,h){return R-Math.round(R/h)*h},_pow:Math.pow,_round:Math.fround,_sin:Math.sin,_sqrt:Math.sqrt,_tan:Math.tan,_acosh:Math.acosh,_asinh:Math.asinh,_atanh:Math.atanh,_cosh:Math.cosh,_sinh:Math.sinh,_tanh:Math.tanh,_isnan:Number.isNaN,_isinf:function(R){return!isFinite(R)},_copysign:function(R,h){return Math.sign(R)===Math.sign(h)?R:-R},table:new WebAssembly.Table({initial:0,element:"anyfunc"})}};performance.now(),WebAssembly.instantiate(d.module,D).then(R=>{performance.now();var h;try{h=g.createScriptProcessor(s,R.exports.getNumInputs(0),R.exports.getNumOutputs(0))}catch(x){faust.error_msg="Error in createScriptProcessor: "+x,T(null);return}h.output_handler=null,h.ins=null,h.outs=null,h.compute_handler=null,h.dspInChannnels=[],h.dspOutChannnels=[],h.fPitchwheelLabel=[],h.fCtrlLabel=new Array(128);for(var U=0;U<h.fCtrlLabel.length;U++)h.fCtrlLabel[U]=[];h.outputs_timer=5,h.outputs_items=[],h.inputs_items=[],h.ptr_size=4,h.sample_size=4,h.dsp=0,h.pathTable=[],h.factory=R.exports,h.HEAP=R.exports.memory.buffer,h.HEAP32=new Int32Array(h.HEAP),h.HEAPF32=new Float32Array(h.HEAP),h.numIn=h.factory.getNumInputs(h.dsp),h.numOut=h.factory.getNumOutputs(h.dsp),h.audio_heap_ptr=parseInt(d.json_object.size),h.audio_heap_ptr_inputs=h.audio_heap_ptr,h.audio_heap_ptr_outputs=h.audio_heap_ptr_inputs+h.numIn*h.ptr_size,h.audio_heap_inputs=h.audio_heap_ptr_outputs+h.numOut*h.ptr_size,h.audio_heap_outputs=h.audio_heap_inputs+h.numIn*s*h.sample_size,h.update_outputs=function(){if(h.outputs_items.length>0&&h.output_handler&&h.outputs_timer--===0){h.outputs_timer=5;for(var x=0;x<h.outputs_items.length;x++)h.output_handler(h.outputs_items[x],h.factory.getParamValue(h.dsp,h.pathTable[h.outputs_items[x]]))}},h.compute=function(x){var j;for(j=0;j<h.numIn;j++){var K=x.inputBuffer.getChannelData(j),G=h.dspInChannnels[j];G.set(K)}for(h.compute_handler&&h.compute_handler(s),h.factory.compute(h.dsp,s,h.ins,h.outs),h.update_outputs(),j=0;j<h.numOut;j++){var se=x.outputBuffer.getChannelData(j),ee=h.dspOutChannnels[j];se.set(ee)}},h.parse_ui=function(x){for(var j=0;j<x.length;j++)h.parse_group(x[j])},h.parse_group=function(x){x.items&&h.parse_items(x.items)},h.parse_items=function(x){for(var j=0;j<x.length;j++)h.parse_item(x[j])},h.parse_item=function(x){if(x.type==="vgroup"||x.type==="hgroup"||x.type==="tgroup")h.parse_items(x.items);else if(x.type==="hbargraph"||x.type==="vbargraph")h.outputs_items.push(x.address),h.pathTable[x.address]=parseInt(x.index);else if((x.type==="vslider"||x.type==="hslider"||x.type==="button"||x.type==="checkbox"||x.type==="nentry")&&(h.inputs_items.push(x.address),h.pathTable[x.address]=parseInt(x.index),x.meta!==void 0))for(var j=0;j<x.meta.length;j++)x.meta[j].midi!==void 0&&(x.meta[j].midi.trim()==="pitchwheel"?h.fPitchwheelLabel.push({path:x.address,min:parseFloat(x.min),max:parseFloat(x.max)}):x.meta[j].midi.trim().split(" ")[0]==="ctrl"&&h.fCtrlLabel[parseInt(x.meta[j].midi.trim().split(" ")[1])].push({path:x.address,min:parseFloat(x.min),max:parseFloat(x.max)}))},h.initAux=function(){var x;if(h.onaudioprocess=h.compute,h.numIn>0){for(h.ins=h.audio_heap_ptr_inputs,x=0;x<h.numIn;x++)h.HEAP32[(h.ins>>2)+x]=h.audio_heap_inputs+s*h.sample_size*x;var j=h.HEAP32.subarray(h.ins>>2,h.ins+h.numIn*h.ptr_size>>2);for(x=0;x<h.numIn;x++)h.dspInChannnels[x]=h.HEAPF32.subarray(j[x]>>2,j[x]+s*h.sample_size>>2)}if(h.numOut>0){for(h.outs=h.audio_heap_ptr_outputs,x=0;x<h.numOut;x++)h.HEAP32[(h.outs>>2)+x]=h.audio_heap_outputs+s*h.sample_size*x;var K=h.HEAP32.subarray(h.outs>>2,h.outs+h.numOut*h.ptr_size>>2);for(x=0;x<h.numOut;x++)h.dspOutChannnels[x]=h.HEAPF32.subarray(K[x]>>2,K[x]+s*h.sample_size>>2)}h.parse_ui(d.json_object.ui),h.factory.init(h.dsp,g.sampleRate)},h.destroy=function(){},h.getSampleRate=function(){return g.sampleRate},h.getNumInputs=function(){return h.factory.getNumInputs(h.dsp)},h.getNumOutputs=function(){return h.factory.getNumOutputs(h.dsp)},h.init=function(x){h.factory.init(h.dsp,x)},h.instanceInit=function(x){h.factory.instanceInit(h.dsp,x)},h.instanceConstants=function(x){h.factory.instanceConstants(h.dsp,x)},h.instanceResetUserInterface=function(){h.factory.instanceResetUserInterface(h.dsp)},h.instanceClear=function(){h.factory.instanceClear(h.dsp)},h.metadata=function(x){d.json_object.meta&&d.json_object.meta.forEach(function(j){x.declare(Object.keys(j)[0],Object.values(j)[0])})},h.setOutputParamHandler=function(x){h.output_handler=x},h.getOutputParamHandler=function(){return h.output_handler},h.ctrlChange=function(x,j,K){for(var G=0;G<h.fCtrlLabel[j].length;G++){var se=h.fCtrlLabel[j][G].path;h.setParamValue(se,faust.remap(K,0,127,h.fCtrlLabel[j][G].min,h.fCtrlLabel[j][G].max)),h.output_handler&&h.output_handler(se,h.getParamValue(se))}},h.pitchWheel=function(x,j){for(var K=0;K<h.fPitchwheelLabel.length;K++){var G=h.fPitchwheelLabel[K];h.setParamValue(G.path,faust.remap(j,0,16383,G.min,G.max)),h.output_handler&&h.output_handler(G.path,h.getParamValue(G.path))}},h.setParamValue=function(x,j){return h.factory.setParamValue(h.dsp,h.pathTable[x],j)},h.getParamValue=function(x){return h.factory.getParamValue(h.dsp,h.pathTable[x])},h.getParams=function(){return h.inputs_items},h.getJSON=function(){return d.getJSON()},h.initAux(),T(h)}).catch(function(R){faust.error_msg="Faust DSP cannot be instantiated",T(null)})};faust.deleteDSPInstance=function(d){};var mydspProcessorString=`

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
`;faust.createDSPWorkletInstanceAux=function(d,g,s){g.resume().catch(()=>{});var T=new AudioWorkletNode(g,d.name,{numberOfInputs:parseInt(d.json_object.inputs)>0?1:0,numberOfOutputs:parseInt(d.json_object.outputs)>0?1:0,channelCount:Math.max(1,parseInt(d.json_object.inputs)),outputChannelCount:[parseInt(d.json_object.outputs)],channelCountMode:"explicit",channelInterpretation:"speakers"});T.onprocessorerror=()=>{console.log("An error from mydspProcessor was detected.")},T.handleMessage=function(D){var R=D.data;this.output_handler&&this.output_handler(R.path,R.value)},T.init=function(){this.parse_ui=function(R,h){for(var U=0;U<R.length;U++)this.parse_group(R[U],h)},this.parse_group=function(R,h){R.items&&this.parse_items(R.items,h)},this.parse_items=function(R,h){for(var U=0;U<R.length;U++)this.parse_item(R[U],h)},this.parse_item=function(R,h){if(R.type==="vgroup"||R.type==="hgroup"||R.type==="tgroup")this.parse_items(R.items,h);else if(R.type==="hbargraph"||R.type==="vbargraph")h.outputs_items.push(R.address);else if((R.type==="vslider"||R.type==="hslider"||R.type==="button"||R.type==="checkbox"||R.type==="nentry")&&(h.inputs_items.push(R.address),R.meta!==void 0))for(var U=0;U<R.meta.length;U++)R.meta[U].midi!==void 0&&(R.meta[U].midi.trim()==="pitchwheel"?h.fPitchwheelLabel.push({path:R.address,min:parseFloat(R.min),max:parseFloat(R.max)}):R.meta[U].midi.trim().split(" ")[0]==="ctrl"&&h.fCtrlLabel[parseInt(R.meta[U].midi.trim().split(" ")[1])].push({path:R.address,min:parseFloat(R.min),max:parseFloat(R.max)}))},this.output_handler=null,this.json_object=d.json_object,this.inputs_items=[],this.outputs_items=[],this.fPitchwheelLabel=[],this.fCtrlLabel=new Array(128);for(var D=0;D<this.fCtrlLabel.length;D++)this.fCtrlLabel[D]=[];this.parse_ui(this.json_object.ui,this),this.port.onmessage=this.handleMessage.bind(this)},T.init(),T.destroy=function(){this.port.postMessage({type:"destroy"}),this.port.close()},T.getJSON=function(){return d.getJSON()},T.setParamValue=function(D,R){this.parameters.get(D).setValueAtTime(R,0)},T.getParamValue=function(D){return this.parameters.get(D).value},T.setOutputParamHandler=function(D){this.output_handler=D},T.getOutputParamHandler=function(){return this.output_handler},T.getNumInputs=function(){return parseInt(d.json_object.inputs)},T.getNumOutputs=function(){return parseInt(d.json_object.outputs)},T.inputChannelCount=function(){return parseInt(d.json_object.inputs)},T.outputChannelCount=function(){return parseInt(d.json_object.outputs)},T.getParams=function(){return this.inputs_items},T.getDescriptor=function(){return this.inputs_items},T.ctrlChange=function(D,R,h){for(var U=0;U<this.fCtrlLabel[R].length;U++){var x=this.fCtrlLabel[R][U].path;this.setParamValue(x,T.remap(h,0,127,this.fCtrlLabel[R][U].min,this.fCtrlLabel[R][U].max)),this.output_handler&&this.output_handler(x,this.getParamValue(x))}},T.pitchWheel=function(D,R){for(var h=0;h<this.fPitchwheelLabel.length;h++){var U=this.fPitchwheelLabel[h];this.setParamValue(U.path,T.remap(R,0,16383,U.min,U.max)),this.output_handler&&this.output_handler(U.path,this.getParamValue(U.path))}},T.midiMessage=function(D){var R=D[0]>>4,h=D[0]&15,U=D[1],x=D[2];h!==9&&(R===11?this.ctrlChange(h,U,x):R===14&&this.pitchWheel(h,x*128+U))},T.onMidi=function(D){this.midiMessage(D)},T.getState=async function(){var D=new Object;for(let R=0;R<this.getDescriptor().length;R++)Object.assign(D,{[this.getDescriptor()[R]]:`${this.getParam(this.getDescriptor()[R])}`});return new Promise(R=>{R(D)})},T.setState=async function(D){return new Promise(R=>{for(const h in D)D.hasOwnProperty(h)&&this.setParam(h,D[h]);try{this.gui.setAttribute("state",JSON.stringify(D))}catch(h){console.warn("Plugin without gui or GUI not defined",h)}R(D)})},T.setPatch=function(D){this.setState(this.presets[D])},T.metadata=function(D){},T.remap=function(D,R,h,U,x){return 1*(D-R)/(h-R)*(x-U)+U},s(T)};faust.createDSPWorkletInstance=function(d,g,s){var T=/mydsp/g,D=/GETJSON/g,R=/GETBASE64CODE/g,h=mydspProcessorString.replace(T,d.name),U=h.replace(D,d.getJSON()),x=U.replace(R,d.getBase64Code()),j=window.URL.createObjectURL(new Blob([x],{type:"text/javascript"}));g.audioWorklet.addModule(j).then(function(){faust.createDSPWorkletInstanceAux(d,g,s)}).catch(function(K){alert(K)})};faust.deleteDSPWorkletInstance=function(d){};faust.ready;function isUItemGroup(d){return["hgroup","vgroup","tgroup"].includes(d.type)}function isUItemNumber(d){return["hslider","vslider","nentry"].includes(d.type)}function isUItemBoolean(d){return["button","checkbox"].includes(d.type)}function isUItemBarGraph(d){return["vbargraph","hbargraph"].includes(d.type)}const factoryCache=new Map;async function compile(d,g){const s=["-ftz","2","-I","http://127.0.0.1:8000/../../libraries/"];let T=factoryCache.get(g);T||(T=new Promise(U=>faust.createDSPFactory(g,s,U)),factoryCache.set(g,T));const D=await T;if(!D)throw new Error(faust.error_msg);const R=await new Promise(U=>faust.createDSPWorkletInstance(D,d,U));if(!R)throw new Error(faust.error_msg);R.ui=JSON.parse(R.getJSON()).ui;const h=new Map;return R.setOutputParamHandler((U,x)=>{h.set(U,x)}),R.getOutputValue=U=>{var x;return(x=h.get(U))!=null?x:0},R}async function audioSource(d){const g=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1}});return d.createMediaStreamSource(g)}function useFaustLivePlayer(d,g){const s=react.exports.useRef(0),T=react.exports.useRef(),[D,R]=react.exports.useState();return react.exports.useEffect(()=>{if(!isDspLive(g))return;const h=++s.current;return compile(d,g.dsp).then(async U=>{if(s.current!==h)return;let x;U.numberOfInputs>0&&(x=await audioSource(d),x.connect(U)),U.connect(d.destination),T.current=U,d.destination.channelCount=d.destination.maxChannelCount,d.destination.channelCountMode="explicit",R({ui:U.ui,params:U.getParams(),node:U,source:x,audioContext:d})}),()=>{T.current&&(T.current.disconnect(),T.current.destroy())}},[g]),D}function playBuffer(d,g){const s=g.createBufferSource();s.buffer=d,s.connect(g.destination),s.addEventListener("ended",()=>{s.disconnect(g.destination)}),s.start()}function audioBufferToWav$2(d,g){g=g||{};var s=d.numberOfChannels,T=d.sampleRate,D=g.float32?3:1,R=D===3?32:16,h;return s===2?h=interleave$2(d.getChannelData(0),d.getChannelData(1)):h=d.getChannelData(0),encodeWAV$2(h,D,T,s,R)}function encodeWAV$2(d,g,s,T,D){var R=D/8,h=T*R,U=new ArrayBuffer(44+d.length*R),x=new DataView(U);return writeString$2(x,0,"RIFF"),x.setUint32(4,36+d.length*R,!0),writeString$2(x,8,"WAVE"),writeString$2(x,12,"fmt "),x.setUint32(16,16,!0),x.setUint16(20,g,!0),x.setUint16(22,T,!0),x.setUint32(24,s,!0),x.setUint32(28,s*h,!0),x.setUint16(32,h,!0),x.setUint16(34,D,!0),writeString$2(x,36,"data"),x.setUint32(40,d.length*R,!0),g===1?floatTo16BitPCM$2(x,44,d):writeFloat32$2(x,44,d),U}function interleave$2(d,g){for(var s=d.length+g.length,T=new Float32Array(s),D=0,R=0;D<s;)T[D++]=d[R],T[D++]=g[R],R++;return T}function writeFloat32$2(d,g,s){for(var T=0;T<s.length;T++,g+=4)d.setFloat32(g,s[T],!0)}function floatTo16BitPCM$2(d,g,s){for(var T=0;T<s.length;T++,g+=2){var D=Math.max(-1,Math.min(1,s[T]));d.setInt16(g,D<0?D*32768:D*32767,!0)}}function writeString$2(d,g,s){for(var T=0;T<s.length;T++)d.setUint8(g+T,s.charCodeAt(T))}function createAudioCtx$2(d){return typeof d=="number"?new AudioContext({sampleRate:d}):d}function isObjectType$2(d,g){return Object.prototype.toString.call(g)===`[object ${d}]`}function isAudioArray$2(d){return Array.isArray(d)&&d.length>0&&Array.isArray(d[0])}function isFloat32AudioArray$2(d){return Array.isArray(d)&&d.length>0&&isObjectType$2("Float32Array",d[0])}function isAudioBuffer$2(d){return isObjectType$2("AudioBuffer",d)}function isArrayBuffer$2(d){return isObjectType$2("ArrayBuffer",d)}function audioArrayToAudioBuffer$2(d,g){const s=g.createBuffer(d.length,d[0].length,g.sampleRate);for(let T=0;T<s.numberOfChannels;T++){const D=s.getChannelData(T);for(let R=0;R<s.length;R++)D[R]=d[T][R]}return s}function audioBufferToFloat32AudioArray$2(d){const g=[];for(let s=0;s<d.numberOfChannels;s++)g.push(d.getChannelData(s));return g}function arrayToFloat32AudioArray$2(d){return d.map(g=>new Float32Array(g))}function float32ArrayToAudioArray(d){return d.map(g=>Array.from(g))}async function arrayBufferToAudioBuffer$2(d,g){return await new Promise(s=>g.decodeAudioData(d,s))}function arrayBufferToWavBlob(d){return new Blob([new DataView(d)],{type:"audio/wav"})}function toAudioArray(d){if(isAudioBuffer$2(d)&&(d=audioBufferToFloat32AudioArray$2(d)),isFloat32AudioArray$2(d))return float32ArrayToAudioArray(d);if(isAudioArray$2(d))return d;throw new Error(`toArray: unconvertible input type: ${d}`)}function toFloat32AudioArray$2(d){if(isFloat32AudioArray$2(d))return d;if(isAudioArray$2(d))return arrayToFloat32AudioArray$2(d);if(isAudioBuffer$2(d))return audioBufferToFloat32AudioArray$2(d);throw new Error(`toFloat32AudioArray: unconvertible input type: ${d}`)}async function toAudioBuffer$2(d,g){if(isAudioBuffer$2(d))return d;const s=createAudioCtx$2(g);if(isArrayBuffer$2(d))return arrayBufferToAudioBuffer$2(d,s);if(isAudioArray$2(d)||isFloat32AudioArray$2(d))return audioArrayToAudioBuffer$2(d,s);throw new Error(`toAudioBuffer: unconvertible input type: ${d}`)}async function toArrayBuffer$2(d,g){if(isArrayBuffer$2(d))return d;const s=createAudioCtx$2(g),T=await toAudioBuffer$2(d,s);return audioBufferToWav$2(T,{float32:!0})}async function toWavBlob(d,g){const s=await toArrayBuffer$2(d,g);return arrayBufferToWavBlob(s)}async function downloadWav(d,g,s){const T=await toWavBlob(d,g);downloadBlob(T,`${s}.wav`)}function downloadBlob(d,g){const s=URL.createObjectURL(d),T=document.createElement("a");document.body.appendChild(T),T.href=s,T.download=g,T.click(),T.remove(),URL.revokeObjectURL(s)}function fetchFile(d){return d=`/mosfez-faust//${d}`,fetch(d)}function logChannels(d,g){d.forEach(s=>g(Array.from(s)))}const cache=new Map;async function faustOfflineRender(d){const g=cache.get(d);if(g)return g;const{outputLength:s,sampleRate:T,channels:D,dsp:R,inputFile:h,output:U=["process"],expect:x}=d;let{input:j=[]}=d;const K=await Promise.all(U.map(async G=>{var et,$e;let se=R;if(G!=="process"){const it=R.split(`
`),Re=it.findIndex(Pe=>Pe.startsWith(`${G} `));se=[...it.slice(0,Re+1),`process = ${G};`].join(`
`)}const ee=($e=(et=j[0])==null?void 0:et.length)!=null?$e:0,oe=new OfflineAudioContext(D,s!=null?s:ee,T);if(h){const it=await fetchFile(h);if(!it.ok)throw new Error(`Could not load sound file "${j}"`);const Re=await it.arrayBuffer(),Pe=await toAudioBuffer$2(Re,oe);j=toAudioArray(Pe)}console.log("input:"),logChannels(j!=null?j:[],console.log);const Ve=await compile(oe,se);j.length===0?Ve.connect(oe.destination):playBuffer(await toAudioBuffer$2(j,oe),oe);const Ne=await oe.startRendering(),ge=toFloat32AudioArray$2(Ne),Be=x?toFloat32AudioArray$2(x[G]):void 0;let _e=!0;return x&&(_e=JSON.stringify(ge)===JSON.stringify(Be)),Ve.destroy(),{name:G,output:ge,expected:Be,passed:_e}},Promise.resolve({})));return cache.set(d,K),K}function useFaustOfflineRenderer(d){const[g,s]=react.exports.useState(void 0),T=react.exports.useRef(!1);return react.exports.useEffect(()=>{T.current||!isDspOffline(d)||(T.current=!0,faustOfflineRender(d).then(D=>{D.forEach(R=>{console.log(`${R.name}:`),logChannels(R.output,console.log),R.expected&&!R.passed&&(console.warn("incorrect output - expected:"),logChannels(R.expected,console.warn))}),s(D)}))},[d]),g}function useDspCallback(d,g){const[s,T]=react.exports.useState([]);return react.exports.useEffect(()=>{if(!isDspCallback(d))return;const D=d.callback(g,T);return()=>{(async()=>(await D)())()}},[d,g]),s}function useDspComponent(d,g){return isDspComponent(d)?d.component(g):null}const dsp$c=`
import("stdfaust.lib");
process = os.osc(440.0);
`,dspDefinition$h={id:"sine-wave",name:"Sine wave",description:"Makes a sine wave at 440Hz",dsp:dsp$c,type:"offline",outputLength:1e3,sampleRate:44100,channels:1},dsp$b=`
import("stdfaust.lib");
process = *(0.5),*(0.25);
`,dspDefinition$g={id:"attenuator",name:"Attenuator",description:"Makes an input signal quieter",dsp:dsp$b,type:"offline",input:[[4,3,2,1,2,3,4,5,5,5,5,5,5,5,5],[4,3,2,1,2,3,4,5,5,5,5,5,5,5,5]],channels:2,sampleRate:44100},dsp$a=`
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
`,dspDefinition$f={id:"block-max",name:"Block max",description:"Finds the max value from a set of N parallel channels per N ticks",dsp:dsp$a,type:"offline",sampleRate:44100,channels:1,input:[[4,1,2,9,1,2,0,0,0,1,2,1,10,10,10],[3,4,5,3,4,3,0,1,0,3,4,4,11,11,11],[0,0,0,3,4,3,0,0,0,0,4,5,10,10,10]],output:["scan","process"],outputLength:18,expect:{scan:[[4,4,0,9,4,3,0,1,0,1,4,5,10,11,10,0,0,0]],process:[[0,0,0,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1]]}},dsp$9=`
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
`,dspDefinition$e={id:"live-tune",name:"Live tune",description:"Makes a live tune",dsp:dsp$9,type:"live"},dsp$8=`
import("stdfaust.lib");
process = os.osc(440.0) <: ;
`,dspDefinition$d={id:"syntax-error",name:"Syntax error",description:"Shows what happens if the dsp contains a syntax error.",dsp:dsp$8,type:"offline",outputLength:10,sampleRate:44100,channels:1},dsp$7=`
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
`,dspDefinition$c={id:"pm-synth",name:"PM synth",description:"Phase modulation synth",dsp:dsp$7,type:"live"},dsp$6=`
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
`,dspDefinition$b={id:"param-layers",name:"Param layers",description:"Control multiples variables via a single slider and a layer selector",dsp:dsp$6,type:"live"},dsp$5=`
import("stdfaust.lib");
process = _;
`,dspDefinition$a={id:"passthrough-mono",name:"Passthrough mono",description:"Passes through a single mono signal",dsp:dsp$5,type:"live"},dsp$4=`
import("stdfaust.lib");
process = _,_;
`,dspDefinition$9={id:"passthrough-stereo",name:"Passthrough stereo",description:"Passes through a stereo signal",dsp:dsp$4,type:"live"};async function callback$3(d){const g=await audioSource(d);return g.connect(d.destination),()=>{g.disconnect(d.destination)}}const dspDefinition$8={id:"record-line-in",name:"Record line-in",description:"Records a line-in signal into a buffer and plays it back.",type:"callback",callback:callback$3};var runInIframeInnerStringified$2=`"use strict";
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
`;async function runInIframe$2(d){const{functionString:g,params:s,transferrables:T=[]}=d,D=document.createElement("iframe");D.style.display="none",document.body.append(D);const{contentWindow:R}=D;if(!R)throw new Error("contentWindow not available on iframe");return R.document.write(`<script>
      var exports = {};
      ${g}
      ${runInIframeInnerStringified$2}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(h=>{const U=x=>{x.source===R&&(window.removeEventListener("message",U),D.remove(),h(x.data))};window.addEventListener("message",U),R.postMessage(s,window.location.origin,T)})}async function callback$2(d,g){console.log("go");const s=await runInIframe$2({functionString:`
    exports.run = async function run(params) {
      const audioArray = [[params.foo,1,2,3,4,5,6,7,8,9,10]];
      return [{audioArray}];
    };
  `,params:{foo:9}});return console.log("result",s),g([{name:"audioArray",output:s.audioArray}]),()=>{}}const dspDefinition$7={id:"iframe-render-test",name:"Iframe render test",description:"Try to render data in an iframe",type:"callback",callback:callback$2},dsp$3=`
import("stdfaust.lib");
input = _,_;
louder = *(4.0);
process = input : louder,louder;
`,dspDefinition$6={id:"sample-input-offline",name:"Sample input",description:"Pipes a sample into an offline render",dsp:dsp$3,type:"offline",inputFile:"/audio/tonejs-instruments/harp/B5.wav",output:["input","process"],outputLength:44100,sampleRate:44100,channels:1},dsp$2=`
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
`,dspDefinition$5={id:"partial-detector",name:"Partial detector",description:"A filter to isolate narrow bands of frequency content",dsp:dsp$2,type:"live"},dsp$1=`
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
`,dspDefinition$4={id:"pitch-down",name:"Pitch down",description:"Captures live input and plays it back slightly slower on a trigger",dsp:dsp$1,type:"live"};var offlineRenderInnerStringified$1=`"use strict";
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
function createAudioCtx(audioCtxOrSampleRate) {
  if (typeof audioCtxOrSampleRate === "number") {
    return new AudioContext({ sampleRate: audioCtxOrSampleRate });
  }
  return audioCtxOrSampleRate;
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
async function toAudioBuffer(input, audioCtxOrSampleRate) {
  if (isAudioBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtxOrSampleRate) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
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
      source.buffer = await toAudioBuffer(inputArrayBuffer, sampleRate);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer, sampleRate);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav$1(d,g){g=g||{};var s=d.numberOfChannels,T=d.sampleRate,D=g.float32?3:1,R=D===3?32:16,h;return s===2?h=interleave$1(d.getChannelData(0),d.getChannelData(1)):h=d.getChannelData(0),encodeWAV$1(h,D,T,s,R)}function encodeWAV$1(d,g,s,T,D){var R=D/8,h=T*R,U=new ArrayBuffer(44+d.length*R),x=new DataView(U);return writeString$1(x,0,"RIFF"),x.setUint32(4,36+d.length*R,!0),writeString$1(x,8,"WAVE"),writeString$1(x,12,"fmt "),x.setUint32(16,16,!0),x.setUint16(20,g,!0),x.setUint16(22,T,!0),x.setUint32(24,s,!0),x.setUint32(28,s*h,!0),x.setUint16(32,h,!0),x.setUint16(34,D,!0),writeString$1(x,36,"data"),x.setUint32(40,d.length*R,!0),g===1?floatTo16BitPCM$1(x,44,d):writeFloat32$1(x,44,d),U}function interleave$1(d,g){for(var s=d.length+g.length,T=new Float32Array(s),D=0,R=0;D<s;)T[D++]=d[R],T[D++]=g[R],R++;return T}function writeFloat32$1(d,g,s){for(var T=0;T<s.length;T++,g+=4)d.setFloat32(g,s[T],!0)}function floatTo16BitPCM$1(d,g,s){for(var T=0;T<s.length;T++,g+=2){var D=Math.max(-1,Math.min(1,s[T]));d.setInt16(g,D<0?D*32768:D*32767,!0)}}function writeString$1(d,g,s){for(var T=0;T<s.length;T++)d.setUint8(g+T,s.charCodeAt(T))}function createAudioCtx$1(d){return typeof d=="number"?new AudioContext({sampleRate:d}):d}function isObjectType$1(d,g){return Object.prototype.toString.call(g)===`[object ${d}]`}function isAudioArray$1(d){return Array.isArray(d)&&d.length>0&&Array.isArray(d[0])}function isFloat32AudioArray$1(d){return Array.isArray(d)&&d.length>0&&isObjectType$1("Float32Array",d[0])}function isAudioBuffer$1(d){return isObjectType$1("AudioBuffer",d)}function isArrayBuffer$1(d){return isObjectType$1("ArrayBuffer",d)}function audioArrayToAudioBuffer$1(d,g){const s=g.createBuffer(d.length,d[0].length,g.sampleRate);for(let T=0;T<s.numberOfChannels;T++){const D=s.getChannelData(T);for(let R=0;R<s.length;R++)D[R]=d[T][R]}return s}function audioBufferToFloat32AudioArray$1(d){const g=[];for(let s=0;s<d.numberOfChannels;s++)g.push(d.getChannelData(s));return g}function arrayToFloat32AudioArray$1(d){return d.map(g=>new Float32Array(g))}async function arrayBufferToAudioBuffer$1(d,g){return await new Promise(s=>g.decodeAudioData(d,s))}function toFloat32AudioArray$1(d){if(isFloat32AudioArray$1(d))return d;if(isAudioArray$1(d))return arrayToFloat32AudioArray$1(d);if(isAudioBuffer$1(d))return audioBufferToFloat32AudioArray$1(d);throw new Error(`toFloat32AudioArray: unconvertible input type: ${d}`)}async function toAudioBuffer$1(d,g){if(isAudioBuffer$1(d))return d;const s=createAudioCtx$1(g);if(isArrayBuffer$1(d))return arrayBufferToAudioBuffer$1(d,s);if(isAudioArray$1(d)||isFloat32AudioArray$1(d))return audioArrayToAudioBuffer$1(d,s);throw new Error(`toAudioBuffer: unconvertible input type: ${d}`)}async function toArrayBuffer$1(d,g){if(isArrayBuffer$1(d))return d;const s=createAudioCtx$1(g),T=await toAudioBuffer$1(d,s);return audioBufferToWav$1(T,{float32:!0})}var runInIframeInnerStringified$1=`"use strict";
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
`;async function runInIframe$1(d){const{functionString:g,params:s,transferrables:T=[]}=d,D=document.createElement("iframe");D.style.display="none",document.body.append(D);const{contentWindow:R}=D;if(!R)throw new Error("contentWindow not available on iframe");return R.document.write(`<script>
      var exports = {};
      ${g}
      ${runInIframeInnerStringified$1}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(h=>{const U=x=>{x.source===R&&(window.removeEventListener("message",U),D.remove(),h(x.data))};window.addEventListener("message",U),R.postMessage(s,window.location.origin,T)})}async function offlineRender$1(d){var G,se;const{functionString:g="",channels:s,sampleRate:T,input:D,props:R}=d;let{length:h}=d,U,x=[];D&&(U=await toArrayBuffer$1(D,T),x=[U],h===void 0&&(h=(se=(G=toFloat32AudioArray$1(D)[0])==null?void 0:G.length)!=null?se:0));const j=await runInIframe$1({functionString:`
      ${offlineRenderInnerStringified$1}
      ${g}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:s,sampleRate:T,inputArrayBuffer:U,length:h!=null?h:0,props:R},transferrables:x}),K=await toAudioBuffer$1(j,T);return toFloat32AudioArray$1(K)}async function callback$1(d,g){console.log("go");const s=[];for(let R=0;R<10;R++)s.push(.2);const D=await offlineRender$1({channels:2,sampleRate:48e3,input:[s,s],functionString:`exports.buildContext = async function buildContext(offlineCtx, source) {
      source.connect(offlineCtx.destination);
    };`});return console.log("result",D),g([{name:"result",output:D}]),()=>{}}const dspDefinition$3={id:"offline-render-test",name:"Offline render test",description:"Try to render audio offline",type:"callback",callback:callback$1};var offlineRenderDspInnerStringified=`"use strict";
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
  source?.connect(node);
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
function createAudioCtx(audioCtxOrSampleRate) {
  if (typeof audioCtxOrSampleRate === "number") {
    return new AudioContext({ sampleRate: audioCtxOrSampleRate });
  }
  return audioCtxOrSampleRate;
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
async function toAudioBuffer(input, audioCtxOrSampleRate) {
  if (isAudioBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtxOrSampleRate) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
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
      source.buffer = await toAudioBuffer(inputArrayBuffer, sampleRate);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer, sampleRate);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav(d,g){g=g||{};var s=d.numberOfChannels,T=d.sampleRate,D=g.float32?3:1,R=D===3?32:16,h;return s===2?h=interleave(d.getChannelData(0),d.getChannelData(1)):h=d.getChannelData(0),encodeWAV(h,D,T,s,R)}function encodeWAV(d,g,s,T,D){var R=D/8,h=T*R,U=new ArrayBuffer(44+d.length*R),x=new DataView(U);return writeString(x,0,"RIFF"),x.setUint32(4,36+d.length*R,!0),writeString(x,8,"WAVE"),writeString(x,12,"fmt "),x.setUint32(16,16,!0),x.setUint16(20,g,!0),x.setUint16(22,T,!0),x.setUint32(24,s,!0),x.setUint32(28,s*h,!0),x.setUint16(32,h,!0),x.setUint16(34,D,!0),writeString(x,36,"data"),x.setUint32(40,d.length*R,!0),g===1?floatTo16BitPCM(x,44,d):writeFloat32(x,44,d),U}function interleave(d,g){for(var s=d.length+g.length,T=new Float32Array(s),D=0,R=0;D<s;)T[D++]=d[R],T[D++]=g[R],R++;return T}function writeFloat32(d,g,s){for(var T=0;T<s.length;T++,g+=4)d.setFloat32(g,s[T],!0)}function floatTo16BitPCM(d,g,s){for(var T=0;T<s.length;T++,g+=2){var D=Math.max(-1,Math.min(1,s[T]));d.setInt16(g,D<0?D*32768:D*32767,!0)}}function writeString(d,g,s){for(var T=0;T<s.length;T++)d.setUint8(g+T,s.charCodeAt(T))}function createAudioCtx(d){return typeof d=="number"?new AudioContext({sampleRate:d}):d}function isObjectType(d,g){return Object.prototype.toString.call(g)===`[object ${d}]`}function isAudioArray(d){return Array.isArray(d)&&d.length>0&&Array.isArray(d[0])}function isFloat32AudioArray(d){return Array.isArray(d)&&d.length>0&&isObjectType("Float32Array",d[0])}function isAudioBuffer(d){return isObjectType("AudioBuffer",d)}function isArrayBuffer(d){return isObjectType("ArrayBuffer",d)}function audioArrayToAudioBuffer(d,g){const s=g.createBuffer(d.length,d[0].length,g.sampleRate);for(let T=0;T<s.numberOfChannels;T++){const D=s.getChannelData(T);for(let R=0;R<s.length;R++)D[R]=d[T][R]}return s}function audioBufferToFloat32AudioArray(d){const g=[];for(let s=0;s<d.numberOfChannels;s++)g.push(d.getChannelData(s));return g}function arrayToFloat32AudioArray(d){return d.map(g=>new Float32Array(g))}async function arrayBufferToAudioBuffer(d,g){return await new Promise(s=>g.decodeAudioData(d,s))}function toFloat32AudioArray(d){if(isFloat32AudioArray(d))return d;if(isAudioArray(d))return arrayToFloat32AudioArray(d);if(isAudioBuffer(d))return audioBufferToFloat32AudioArray(d);throw new Error(`toFloat32AudioArray: unconvertible input type: ${d}`)}async function toAudioBuffer(d,g){if(isAudioBuffer(d))return d;const s=createAudioCtx(g);if(isArrayBuffer(d))return arrayBufferToAudioBuffer(d,s);if(isAudioArray(d)||isFloat32AudioArray(d))return audioArrayToAudioBuffer(d,s);throw new Error(`toAudioBuffer: unconvertible input type: ${d}`)}async function toArrayBuffer(d,g){if(isArrayBuffer(d))return d;const s=createAudioCtx(g),T=await toAudioBuffer(d,s);return audioBufferToWav(T,{float32:!0})}var runInIframeInnerStringified=`"use strict";
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
`;async function runInIframe(d){const{functionString:g,params:s,transferrables:T=[]}=d,D=document.createElement("iframe");D.style.display="none",document.body.append(D);const{contentWindow:R}=D;if(!R)throw new Error("contentWindow not available on iframe");return R.document.write(`<script>
      var exports = {};
      ${g}
      ${runInIframeInnerStringified}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(h=>{const U=x=>{x.source===R&&(window.removeEventListener("message",U),D.remove(),h(x.data))};window.addEventListener("message",U),R.postMessage(s,window.location.origin,T)})}async function offlineRender(d){var G,se;const{functionString:g="",channels:s,sampleRate:T,input:D,props:R}=d;let{length:h}=d,U,x=[];D&&(U=await toArrayBuffer(D,T),x=[U],h===void 0&&(h=(se=(G=toFloat32AudioArray(D)[0])==null?void 0:G.length)!=null?se:0));const j=await runInIframe({functionString:`
      ${offlineRenderInnerStringified}
      ${g}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:s,sampleRate:T,inputArrayBuffer:U,length:h!=null?h:0,props:R},transferrables:x}),K=await toAudioBuffer(j,T);return toFloat32AudioArray(K)}async function offlineRenderDsp(d){const{dsp:g,...s}=d;return offlineRender({functionString:`
      ${offlineRenderDspInnerStringified}
      exports.buildContext = exports.offlineRenderDspInner;
    `,props:{dsp:g},...s})}async function callback(d,g){console.log("go");const s={channels:2,sampleRate:48e3,input:[[1,2,3,0,5,6,7,8,9,10],[1,2,3,0,5,6,7,8,9,10]],dsp:`import("stdfaust.lib");
    process = *(0.5),*(2);`};for(let D=0;D<3;D++)console.log("result",await offlineRenderDsp(s));const T=await offlineRenderDsp(s);return g([{name:"rendered",output:T}]),()=>{}}const dspDefinition$2={id:"offline-render-dsp-test",name:"Offline render DSP test",description:"Try to render Faust DSP offline",type:"callback",callback};var jsxDevRuntime={exports:{}},reactJsxDevRuntime_development={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var d=react.exports,g=!1,s=!1,T=!1,D=!1,R=!1,h=Symbol.for("react.element"),U=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),se=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),_e=Symbol.iterator,et="@@iterator";function $e(k){if(k===null||typeof k!="object")return null;var ue=_e&&k[_e]||k[et];return typeof ue=="function"?ue:null}var it=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Re(k){{for(var ue=arguments.length,Te=new Array(ue>1?ue-1:0),je=1;je<ue;je++)Te[je-1]=arguments[je];Pe("error",k,Te)}}function Pe(k,ue,Te){{var je=it.ReactDebugCurrentFrame,st=je.getStackAddendum();st!==""&&(ue+="%s",Te=Te.concat([st]));var P=Te.map(function(Ie){return String(Ie)});P.unshift("Warning: "+ue),Function.prototype.apply.call(console[k],console,P)}}var Le;Le=Symbol.for("react.module.reference");function F(k){return!!(typeof k=="string"||typeof k=="function"||k===x||k===K||R||k===j||k===oe||k===Ve||D||k===Be||g||s||T||typeof k=="object"&&k!==null&&(k.$$typeof===ge||k.$$typeof===Ne||k.$$typeof===G||k.$$typeof===se||k.$$typeof===ee||k.$$typeof===Le||k.getModuleId!==void 0))}function Ge(k,ue,Te){var je=k.displayName;if(je)return je;var st=ue.displayName||ue.name||"";return st!==""?Te+"("+st+")":Te}function Xt(k){return k.displayName||"Context"}function We(k){if(k==null)return null;if(typeof k.tag=="number"&&Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof k=="function")return k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case x:return"Fragment";case U:return"Portal";case K:return"Profiler";case j:return"StrictMode";case oe:return"Suspense";case Ve:return"SuspenseList"}if(typeof k=="object")switch(k.$$typeof){case se:var ue=k;return Xt(ue)+".Consumer";case G:var Te=k;return Xt(Te._context)+".Provider";case ee:return Ge(k,k.render,"ForwardRef");case Ne:var je=k.displayName||null;return je!==null?je:We(k.type)||"Memo";case ge:{var st=k,P=st._payload,Ie=st._init;try{return We(Ie(P))}catch{return null}}}return null}var ut=Object.assign,xt=0,sn,at,_n,Kn,En,lr,qt;function pn(){}pn.__reactDisabledLog=!0;function cr(){{if(xt===0){sn=console.log,at=console.info,_n=console.warn,Kn=console.error,En=console.group,lr=console.groupCollapsed,qt=console.groupEnd;var k={configurable:!0,enumerable:!0,value:pn,writable:!0};Object.defineProperties(console,{info:k,log:k,warn:k,error:k,group:k,groupCollapsed:k,groupEnd:k})}xt++}}function ma(){{if(xt--,xt===0){var k={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ut({},k,{value:sn}),info:ut({},k,{value:at}),warn:ut({},k,{value:_n}),error:ut({},k,{value:Kn}),group:ut({},k,{value:En}),groupCollapsed:ut({},k,{value:lr}),groupEnd:ut({},k,{value:qt})})}xt<0&&Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Vr=it.ReactCurrentDispatcher,Wr;function Fr(k,ue,Te){{if(Wr===void 0)try{throw Error()}catch(st){var je=st.stack.trim().match(/\n( *(at )?)/);Wr=je&&je[1]||""}return`
`+Wr+k}}var On=!1,dr;{var fr=typeof WeakMap=="function"?WeakMap:Map;dr=new fr}function pr(k,ue){if(!k||On)return"";{var Te=dr.get(k);if(Te!==void 0)return Te}var je;On=!0;var st=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var P;P=Vr.current,Vr.current=null,cr();try{if(ue){var Ie=function(){throw Error()};if(Object.defineProperty(Ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ie,[])}catch(Mr){je=Mr}Reflect.construct(k,[],Ie)}else{try{Ie.call()}catch(Mr){je=Mr}k.call(Ie.prototype)}}else{try{throw Error()}catch(Mr){je=Mr}k()}}catch(Mr){if(Mr&&je&&typeof Mr.stack=="string"){for(var nt=Mr.stack.split(`
`),kt=je.stack.split(`
`),Pt=nt.length-1,ft=kt.length-1;Pt>=1&&ft>=0&&nt[Pt]!==kt[ft];)ft--;for(;Pt>=1&&ft>=0;Pt--,ft--)if(nt[Pt]!==kt[ft]){if(Pt!==1||ft!==1)do if(Pt--,ft--,ft<0||nt[Pt]!==kt[ft]){var Bn=`
`+nt[Pt].replace(" at new "," at ");return k.displayName&&Bn.includes("<anonymous>")&&(Bn=Bn.replace("<anonymous>",k.displayName)),typeof k=="function"&&dr.set(k,Bn),Bn}while(Pt>=1&&ft>=0);break}}}finally{On=!1,Vr.current=P,ma(),Error.prepareStackTrace=st}var wt=k?k.displayName||k.name:"",wn=wt?Fr(wt):"";return typeof k=="function"&&dr.set(k,wn),wn}function mn(k,ue,Te){return pr(k,!1)}function Dn(k){var ue=k.prototype;return!!(ue&&ue.isReactComponent)}function bn(k,ue,Te){if(k==null)return"";if(typeof k=="function")return pr(k,Dn(k));if(typeof k=="string")return Fr(k);switch(k){case oe:return Fr("Suspense");case Ve:return Fr("SuspenseList")}if(typeof k=="object")switch(k.$$typeof){case ee:return mn(k.render);case Ne:return bn(k.type,ue,Te);case ge:{var je=k,st=je._payload,P=je._init;try{return bn(P(st),ue,Te)}catch{}}}return""}var Kt=Object.prototype.hasOwnProperty,ot={},Et=it.ReactDebugCurrentFrame;function Jt(k){if(k){var ue=k._owner,Te=bn(k.type,k._source,ue?ue.type:null);Et.setExtraStackFrame(Te)}else Et.setExtraStackFrame(null)}function Mn(k,ue,Te,je,st){{var P=Function.call.bind(Kt);for(var Ie in k)if(P(k,Ie)){var nt=void 0;try{if(typeof k[Ie]!="function"){var kt=Error((je||"React class")+": "+Te+" type `"+Ie+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[Ie]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw kt.name="Invariant Violation",kt}nt=k[Ie](ue,Ie,je,Te,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Pt){nt=Pt}nt&&!(nt instanceof Error)&&(Jt(st),Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",je||"React class",Te,Ie,typeof nt),Jt(null)),nt instanceof Error&&!(nt.message in ot)&&(ot[nt.message]=!0,Jt(st),Re("Failed %s type: %s",Te,nt.message),Jt(null))}}}var V=Array.isArray;function Zt(k){return V(k)}function An(k){{var ue=typeof Symbol=="function"&&Symbol.toStringTag,Te=ue&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Te}}function Jn(k){try{return xn(k),!1}catch{return!0}}function xn(k){return""+k}function Or(k){if(Jn(k))return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",An(k)),xn(k)}var $t=it.ReactCurrentOwner,Dr={key:!0,ref:!0,__self:!0,__source:!0},Nr,Qr,ye;ye={};function ke(k){if(Kt.call(k,"ref")){var ue=Object.getOwnPropertyDescriptor(k,"ref").get;if(ue&&ue.isReactWarning)return!1}return k.ref!==void 0}function tt(k){if(Kt.call(k,"key")){var ue=Object.getOwnPropertyDescriptor(k,"key").get;if(ue&&ue.isReactWarning)return!1}return k.key!==void 0}function Ct(k,ue){if(typeof k.ref=="string"&&$t.current&&ue&&$t.current.stateNode!==ue){var Te=We($t.current.type);ye[Te]||(Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',We($t.current.type),k.ref),ye[Te]=!0)}}function bt(k,ue){{var Te=function(){Nr||(Nr=!0,Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ue))};Te.isReactWarning=!0,Object.defineProperty(k,"key",{get:Te,configurable:!0})}}function hn(k,ue){{var Te=function(){Qr||(Qr=!0,Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ue))};Te.isReactWarning=!0,Object.defineProperty(k,"ref",{get:Te,configurable:!0})}}var on=function(k,ue,Te,je,st,P,Ie){var nt={$$typeof:h,type:k,key:ue,ref:Te,props:Ie,_owner:P};return nt._store={},Object.defineProperty(nt._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(nt,"_self",{configurable:!1,enumerable:!1,writable:!1,value:je}),Object.defineProperty(nt,"_source",{configurable:!1,enumerable:!1,writable:!1,value:st}),Object.freeze&&(Object.freeze(nt.props),Object.freeze(nt)),nt};function mr(k,ue,Te,je,st){{var P,Ie={},nt=null,kt=null;Te!==void 0&&(Or(Te),nt=""+Te),tt(ue)&&(Or(ue.key),nt=""+ue.key),ke(ue)&&(kt=ue.ref,Ct(ue,st));for(P in ue)Kt.call(ue,P)&&!Dr.hasOwnProperty(P)&&(Ie[P]=ue[P]);if(k&&k.defaultProps){var Pt=k.defaultProps;for(P in Pt)Ie[P]===void 0&&(Ie[P]=Pt[P])}if(nt||kt){var ft=typeof k=="function"?k.displayName||k.name||"Unknown":k;nt&&bt(Ie,ft),kt&&hn(Ie,ft)}return on(k,nt,kt,st,je,$t.current,Ie)}}var Lt=it.ReactCurrentOwner,he=it.ReactDebugCurrentFrame;function pe(k){if(k){var ue=k._owner,Te=bn(k.type,k._source,ue?ue.type:null);he.setExtraStackFrame(Te)}else he.setExtraStackFrame(null)}var Qt;Qt=!1;function ha(k){return typeof k=="object"&&k!==null&&k.$$typeof===h}function Yr(){{if(Lt.current){var k=We(Lt.current.type);if(k)return`

Check the render method of \``+k+"`."}return""}}function vi(k){{if(k!==void 0){var ue=k.fileName.replace(/^.*[\\\/]/,""),Te=k.lineNumber;return`

Check your code at `+ue+":"+Te+"."}return""}}var zi={};function To(k){{var ue=Yr();if(!ue){var Te=typeof k=="string"?k:k.displayName||k.name;Te&&(ue=`

Check the top-level render call using <`+Te+">.")}return ue}}function va(k,ue){{if(!k._store||k._store.validated||k.key!=null)return;k._store.validated=!0;var Te=To(ue);if(zi[Te])return;zi[Te]=!0;var je="";k&&k._owner&&k._owner!==Lt.current&&(je=" It was passed a child from "+We(k._owner.type)+"."),pe(k),Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',Te,je),pe(null)}}function ya(k,ue){{if(typeof k!="object")return;if(Zt(k))for(var Te=0;Te<k.length;Te++){var je=k[Te];ha(je)&&va(je,ue)}else if(ha(k))k._store&&(k._store.validated=!0);else if(k){var st=$e(k);if(typeof st=="function"&&st!==k.entries)for(var P=st.call(k),Ie;!(Ie=P.next()).done;)ha(Ie.value)&&va(Ie.value,ue)}}}function kr(k){{var ue=k.type;if(ue==null||typeof ue=="string")return;var Te;if(typeof ue=="function")Te=ue.propTypes;else if(typeof ue=="object"&&(ue.$$typeof===ee||ue.$$typeof===Ne))Te=ue.propTypes;else return;if(Te){var je=We(ue);Mn(Te,k.props,"prop",je,k)}else if(ue.PropTypes!==void 0&&!Qt){Qt=!0;var st=We(ue);Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",st||"Unknown")}typeof ue.getDefaultProps=="function"&&!ue.getDefaultProps.isReactClassApproved&&Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Gr(k){{for(var ue=Object.keys(k.props),Te=0;Te<ue.length;Te++){var je=ue[Te];if(je!=="children"&&je!=="key"){pe(k),Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",je),pe(null);break}}k.ref!==null&&(pe(k),Re("Invalid attribute `ref` supplied to `React.Fragment`."),pe(null))}}function hr(k,ue,Te,je,st,P){{var Ie=F(k);if(!Ie){var nt="";(k===void 0||typeof k=="object"&&k!==null&&Object.keys(k).length===0)&&(nt+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var kt=vi(st);kt?nt+=kt:nt+=Yr();var Pt;k===null?Pt="null":Zt(k)?Pt="array":k!==void 0&&k.$$typeof===h?(Pt="<"+(We(k.type)||"Unknown")+" />",nt=" Did you accidentally export a JSX literal instead of a component?"):Pt=typeof k,Re("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Pt,nt)}var ft=mr(k,ue,Te,st,P);if(ft==null)return ft;if(Ie){var Bn=ue.children;if(Bn!==void 0)if(je)if(Zt(Bn)){for(var wt=0;wt<Bn.length;wt++)ya(Bn[wt],k);Object.freeze&&Object.freeze(Bn)}else Re("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ya(Bn,k)}return k===x?Gr(ft):kr(ft),ft}}var Xn=hr;reactJsxDevRuntime_development.Fragment=x,reactJsxDevRuntime_development.jsxDEV=Xn})();jsxDevRuntime.exports=reactJsxDevRuntime_development;var _jsxFileName$4="/home/runner/work/mosfez-faust/mosfez-faust/dev/src/dsp-definitions/17-play-buffer.tsx";async function playSounds(d){const g=await fetchFile("/audio/tonejs-instruments/harp/B5.wav");if(!g.ok)throw new Error("Could not load sound file");const s=await g.arrayBuffer(),T=await toAudioBuffer$2(s,d);console.log("play stuff");for(let D=0;D<16;D++)playBuffer(T,d),await new Promise(R=>setTimeout(R,60))}function component(d){const g=()=>playSounds(d);return jsxDevRuntime.exports.jsxDEV("div",{onClick:g,children:"click here to hear loud things"},void 0,!1,{fileName:_jsxFileName$4,lineNumber:23,columnNumber:10},this)}const dspDefinition$1={id:"play-buffer",name:"Play buffer",description:"Tests the playBuffer utility",type:"component",component},{maxChannelCount}=new AudioContext().destination,dsp=`
import("stdfaust.lib");
channels = ${maxChannelCount};
now = int(os.phasor(channels,1.0));
vibrato = +(os.osc(10.0) * 0.2);
tone(i) = ((i * 2) + 49) : vibrato : ba.midikey2hz : os.osc : *(i == now) : *(0.1);
process = par(i,channels,tone(i));
`,dspDefinition={id:"output-channel-test",name:"Output channel test",description:`Puts a test tone out of each of your ${maxChannelCount} output channels`,dsp,type:"live"},all=[dspDefinition$h,dspDefinition$g,dspDefinition$f,dspDefinition$e,dspDefinition$d,dspDefinition$c,dspDefinition$b,dspDefinition$a,dspDefinition$9,dspDefinition$8,dspDefinition$7,dspDefinition$6,dspDefinition$5,dspDefinition$4,dspDefinition$3,dspDefinition$2,dspDefinition$1,dspDefinition],control="_control_sxngc_1",value="_value_sxngc_8",button="_button_sxngc_12",inputContainer="_inputContainer_sxngc_16",inputRange="_inputRange_sxngc_20";var classes$2={control,value,button,inputContainer,inputRange};const useAnimationFrame=(d,g)=>{const s=react.exports.useRef(0),T=react.exports.useRef(performance.now()),D=react.exports.useRef(performance.now()),R=()=>{const h=performance.now(),U=(h-D.current)/1e3,x=(h-T.current)/1e3;d(U,x),T.current=h,s.current=requestAnimationFrame(R)};react.exports.useEffect(()=>(s.current=requestAnimationFrame(R),()=>cancelAnimationFrame(s.current)),g)};var _jsxFileName$3="/home/runner/work/mosfez-faust/mosfez-faust/dev/src/controls.tsx";function Controls(d){const{items:g,node:s}=d;return jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment,{children:g.map(T=>jsxDevRuntime.exports.jsxDEV(Control,{item:T,node:s},T.label,!1,{fileName:_jsxFileName$3,lineNumber:26,columnNumber:9},this))},void 0,!1)}function Control(d){const{item:g,node:s}=d;if(isUItemGroup(g))return jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.control,children:[jsxDevRuntime.exports.jsxDEV("div",{children:g.label},void 0,!1,{fileName:_jsxFileName$3,lineNumber:43,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV("div",{children:jsxDevRuntime.exports.jsxDEV(Controls,{items:g.items,node:s},void 0,!1,{fileName:_jsxFileName$3,lineNumber:45,columnNumber:11},this)},void 0,!1,{fileName:_jsxFileName$3,lineNumber:44,columnNumber:9},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:42,columnNumber:7},this);if(isUItemNumber(g)){const[T,D]=react.exports.useState(()=>{const h=s.getParamValue(g.address);return Math.round(h/g.step)*g.step}),R=h=>{const U=Number(h.target.value);D(U),s.setParamValue(g.address,U)};return jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.control,children:jsxDevRuntime.exports.jsxDEV("div",{children:[g.label," ",jsxDevRuntime.exports.jsxDEV("span",{className:classes$2.value,children:["[",T,"]"]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:66,columnNumber:24},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.inputContainer,children:[jsxDevRuntime.exports.jsxDEV("input",{className:classes$2.inputRange,type:"range",value:T,onChange:R,min:g.min,max:g.max,step:g.step},void 0,!1,{fileName:_jsxFileName$3,lineNumber:68,columnNumber:13},this),jsxDevRuntime.exports.jsxDEV("input",{type:"number",value:T,onChange:R,min:g.min,max:g.max,step:g.step},void 0,!1,{fileName:_jsxFileName$3,lineNumber:77,columnNumber:13},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:67,columnNumber:11},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:65,columnNumber:9},this)},void 0,!1,{fileName:_jsxFileName$3,lineNumber:64,columnNumber:7},this)}if(isUItemBoolean(g)){const[T,D]=react.exports.useState(()=>s.getParamValue(g.address)),R=U=>{D(U),s.setParamValue(g.address,U)},h=g.type==="button"?{onPointerDown:()=>R(1),onPointerUp:()=>R(0)}:{onClick:()=>R(T?0:1)};return jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.control,children:jsxDevRuntime.exports.jsxDEV("div",{children:[g.label," ",jsxDevRuntime.exports.jsxDEV("span",{className:classes$2.value,children:["[",T,"]"]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:114,columnNumber:24},this),jsxDevRuntime.exports.jsxDEV("div",{children:jsxDevRuntime.exports.jsxDEV("button",{...h,className:classes$2.button,children:g.label},void 0,!1,{fileName:_jsxFileName$3,lineNumber:116,columnNumber:13},this)},void 0,!1,{fileName:_jsxFileName$3,lineNumber:115,columnNumber:11},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:113,columnNumber:9},this)},void 0,!1,{fileName:_jsxFileName$3,lineNumber:112,columnNumber:7},this)}if(isUItemBarGraph(g)){const[T,D]=react.exports.useState(0);return useAnimationFrame(()=>{const R=s.getOutputValue(g.address);D(R)},[s,g]),jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.control,children:jsxDevRuntime.exports.jsxDEV("div",{children:[g.label," ",jsxDevRuntime.exports.jsxDEV("span",{className:classes$2.value,children:["[",T,"]"]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:136,columnNumber:24},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$2.inputContainer,children:[jsxDevRuntime.exports.jsxDEV("input",{className:classes$2.inputRange,type:"range",value:T,min:g.min,max:g.max,step:1e-4,disabled:!0},void 0,!1,{fileName:_jsxFileName$3,lineNumber:138,columnNumber:13},this),jsxDevRuntime.exports.jsxDEV("input",{type:"text",value:T,disabled:!0},void 0,!1,{fileName:_jsxFileName$3,lineNumber:147,columnNumber:13},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:137,columnNumber:11},this)]},void 0,!0,{fileName:_jsxFileName$3,lineNumber:135,columnNumber:9},this)},void 0,!1,{fileName:_jsxFileName$3,lineNumber:134,columnNumber:7},this)}return null}const oscopePanel="_oscopePanel_1pkvp_1",oscope="_oscope_1pkvp_1";var classes$1={oscopePanel,oscope},_jsxFileName$2="/home/runner/work/mosfez-faust/mosfez-faust/dev/src/live-visualisations.tsx";const OSCOPE_PANEL_VIEW_TYPES=["oscope","spectro","off"];function OscopePanel(d){const{source:g,audioContext:s,label:T}=d,{channelCount:D}=g,[R,h]=react.exports.useState(0),U=OSCOPE_PANEL_VIEW_TYPES[R],x=()=>h(K=>(K+1)%3),j=[];for(let K=0;K<D;K++)j.push(jsxDevRuntime.exports.jsxDEV(Oscope,{source:g,audioContext:s,spectro:U==="spectro",width:200,height:100},K,!1,{fileName:_jsxFileName$2,lineNumber:30,columnNumber:7},this));return jsxDevRuntime.exports.jsxDEV("div",{className:classes$1.oscopePanel,onClick:x,children:[jsxDevRuntime.exports.jsxDEV("div",{children:T},void 0,!1,{fileName:_jsxFileName$2,lineNumber:43,columnNumber:7},this),U==="off"?jsxDevRuntime.exports.jsxDEV("div",{style:{height:100},className:classes$1.oscope},void 0,!1,{fileName:_jsxFileName$2,lineNumber:45,columnNumber:9},this):j]},void 0,!0,{fileName:_jsxFileName$2,lineNumber:42,columnNumber:5},this)}function Oscope(d){const{source:g,audioContext:s,width:T,height:D,spectro:R}=d,h=react.exports.useRef(),U=react.exports.useRef(null);return react.exports.useEffect(()=>{const x=new AnalyserNode(s);return g.connect(x),h.current=x,()=>{try{g.disconnect(x)}catch{}}},[g,s]),useAnimationFrame(()=>{const x=U.current,j=x==null?void 0:x.getContext("2d"),K=h.current;if(j&&K){let G=new Uint8Array(0);R?(G=new Uint8Array(K.frequencyBinCount),K.getByteFrequencyData(G)):(K.fftSize=8192,G=new Uint8Array(K.fftSize),K.getByteTimeDomainData(G));const se=T/G.length,ee=Math.log2(G.length);j.clearRect(0,0,T,D);for(let oe=0;oe<G.length;oe++){const Ne=G[oe]/256,ge=D*Ne,Be=D-ge-1,_e=R?Math.log(oe)/ee*T:oe*se;j.fillStyle="white",j.fillRect(_e,Be,1,1)}}},[g,T,D,R]),jsxDevRuntime.exports.jsxDEV("canvas",{className:classes$1.oscope,width:T,height:D,ref:U},void 0,!1,{fileName:_jsxFileName$2,lineNumber:114,columnNumber:5},this)}const plot="_plot_1x4id_1",plotHeader="_plotHeader_1x4id_6",plotHeaderLeft="_plotHeaderLeft_1x4id_10",plotHeaderRight="_plotHeaderRight_1x4id_14",plotHeaderLink="_plotHeaderLink_1x4id_18",plotHighlightMeta="_plotHighlightMeta_1x4id_23";var classes={plot,plotHeader,plotHeaderLeft,plotHeaderRight,plotHeaderLink,plotHighlightMeta},_populated=!1,_ie,_firefox,_opera,_webkit,_chrome,_ie_real_version,_osx,_windows,_linux,_android,_win64,_iphone,_ipad,_native,_mobile;function _populate(){if(!_populated){_populated=!0;var d=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(d),s=/(Mac OS X)|(Windows)|(Linux)/.exec(d);if(_iphone=/\b(iPhone|iP[ao]d)/.exec(d),_ipad=/\b(iP[ao]d)/.exec(d),_android=/Android/i.exec(d),_native=/FBAN\/\w+;/i.exec(d),_mobile=/Mobile/i.exec(d),_win64=!!/Win64/.exec(d),g){_ie=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN,_ie&&document&&document.documentMode&&(_ie=document.documentMode);var T=/(?:Trident\/(\d+.\d+))/.exec(d);_ie_real_version=T?parseFloat(T[1])+4:_ie,_firefox=g[2]?parseFloat(g[2]):NaN,_opera=g[3]?parseFloat(g[3]):NaN,_webkit=g[4]?parseFloat(g[4]):NaN,_webkit?(g=/(?:Chrome\/(\d+\.\d+))/.exec(d),_chrome=g&&g[1]?parseFloat(g[1]):NaN):_chrome=NaN}else _ie=_firefox=_opera=_chrome=_webkit=NaN;if(s){if(s[1]){var D=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(d);_osx=D?parseFloat(D[1].replace("_",".")):!0}else _osx=!1;_windows=!!s[2],_linux=!!s[3]}else _osx=_windows=_linux=!1}}var UserAgent_DEPRECATED$1={ie:function(){return _populate()||_ie},ieCompatibilityMode:function(){return _populate()||_ie_real_version>_ie},ie64:function(){return UserAgent_DEPRECATED$1.ie()&&_win64},firefox:function(){return _populate()||_firefox},opera:function(){return _populate()||_opera},webkit:function(){return _populate()||_webkit},safari:function(){return UserAgent_DEPRECATED$1.webkit()},chrome:function(){return _populate()||_chrome},windows:function(){return _populate()||_windows},osx:function(){return _populate()||_osx},linux:function(){return _populate()||_linux},iphone:function(){return _populate()||_iphone},mobile:function(){return _populate()||_iphone||_ipad||_android||_mobile},nativeApp:function(){return _populate()||_native},android:function(){return _populate()||_android},ipad:function(){return _populate()||_ipad}},UserAgent_DEPRECATED_1=UserAgent_DEPRECATED$1,canUseDOM=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ExecutionEnvironment$1={canUseDOM,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM},ExecutionEnvironment_1=ExecutionEnvironment$1,ExecutionEnvironment=ExecutionEnvironment_1,useHasFeature;ExecutionEnvironment.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function isEventSupported$1(d,g){if(!ExecutionEnvironment.canUseDOM||g&&!("addEventListener"in document))return!1;var s="on"+d,T=s in document;if(!T){var D=document.createElement("div");D.setAttribute(s,"return;"),T=typeof D[s]=="function"}return!T&&useHasFeature&&d==="wheel"&&(T=document.implementation.hasFeature("Events.wheel","3.0")),T}var isEventSupported_1=isEventSupported$1,UserAgent_DEPRECATED=UserAgent_DEPRECATED_1,isEventSupported=isEventSupported_1,PIXEL_STEP=10,LINE_HEIGHT=40,PAGE_HEIGHT=800;function normalizeWheel$1(d){var g=0,s=0,T=0,D=0;return"detail"in d&&(s=d.detail),"wheelDelta"in d&&(s=-d.wheelDelta/120),"wheelDeltaY"in d&&(s=-d.wheelDeltaY/120),"wheelDeltaX"in d&&(g=-d.wheelDeltaX/120),"axis"in d&&d.axis===d.HORIZONTAL_AXIS&&(g=s,s=0),T=g*PIXEL_STEP,D=s*PIXEL_STEP,"deltaY"in d&&(D=d.deltaY),"deltaX"in d&&(T=d.deltaX),(T||D)&&d.deltaMode&&(d.deltaMode==1?(T*=LINE_HEIGHT,D*=LINE_HEIGHT):(T*=PAGE_HEIGHT,D*=PAGE_HEIGHT)),T&&!g&&(g=T<1?-1:1),D&&!s&&(s=D<1?-1:1),{spinX:g,spinY:s,pixelX:T,pixelY:D}}normalizeWheel$1.getEventType=function(){return UserAgent_DEPRECATED.firefox()?"DOMMouseScroll":isEventSupported("wheel")?"wheel":"mousewheel"};var normalizeWheel_1=normalizeWheel$1,normalizeWheel=normalizeWheel_1,_jsxFileName$1="/home/runner/work/mosfez-faust/mosfez-faust/dev/src/offline-visualisations.tsx";const setHighlight=d=>([g,s])=>[g,s,d];function PlotPanel(d){const{name:g,offlineResult:s,width:T,height:D,liveAudioContext:R}=d,[[h,U,x],j]=react.exports.useState([0,8,-1]),K=[];return s.forEach(G=>{if(G.output.length===1){K.push(G);return}G.output.forEach((se,ee)=>{K.push({name:`${G.name} #${ee}`,output:[se]})})}),jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment,{children:[K.map((G,se)=>{let ee=jsxDevRuntime.exports.jsxDEV("span",{},void 0,!1,{fileName:_jsxFileName$1,lineNumber:51,columnNumber:30},this);x!==-1&&(ee=jsxDevRuntime.exports.jsxDEV("span",{className:classes.plotHighlightMeta,children:["[",x,"]: ",G.output[0][x]]},void 0,!0,{fileName:_jsxFileName$1,lineNumber:54,columnNumber:13},this));const oe=async Ne=>{Ne.preventDefault(),playBuffer(await toAudioBuffer$2(G.output,R),R)},Ve=Ne=>{Ne.preventDefault();const Be=`${g.replace(/ /g,"-").toLowerCase()}-${G.name}`;downloadWav(G.output,R,Be)};return jsxDevRuntime.exports.jsxDEV("div",{className:classes.plot,children:[jsxDevRuntime.exports.jsxDEV("div",{className:classes.plotHeader,children:[jsxDevRuntime.exports.jsxDEV("div",{className:classes.plotHeaderLeft,children:[G.name," ",ee]},void 0,!0,{fileName:_jsxFileName$1,lineNumber:78,columnNumber:15},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes.plotHeaderRight,children:jsxDevRuntime.exports.jsxDEV("a",{href:"#",className:classes.plotHeaderLink,onClick:oe,children:"play"},void 0,!1,{fileName:_jsxFileName$1,lineNumber:82,columnNumber:17},this)},void 0,!1,{fileName:_jsxFileName$1,lineNumber:81,columnNumber:15},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes.plotHeaderRight,children:jsxDevRuntime.exports.jsxDEV("a",{href:"#",className:classes.plotHeaderLink,onClick:Ve,children:"download"},void 0,!1,{fileName:_jsxFileName$1,lineNumber:91,columnNumber:17},this)},void 0,!1,{fileName:_jsxFileName$1,lineNumber:90,columnNumber:15},this)]},void 0,!0,{fileName:_jsxFileName$1,lineNumber:77,columnNumber:13},this),jsxDevRuntime.exports.jsxDEV(Plot,{output:G,width:T,height:D,pan:h,zoomWidth:U,highlight:x,setPlotState:j},void 0,!1,{fileName:_jsxFileName$1,lineNumber:100,columnNumber:13},this)]},se,!0,{fileName:_jsxFileName$1,lineNumber:76,columnNumber:11},this)}),jsxDevRuntime.exports.jsxDEV("span",{className:classes.plotHighlightMeta,children:["range ",Math.round(h)," - ",Math.round(h+T/U)]},void 0,!0,{fileName:_jsxFileName$1,lineNumber:112,columnNumber:7},this)]},void 0,!0)}function getZoomHeight(d){let g=0,s=0;for(let T=0;T<d.length;T++)for(let D=0;D<d[T].length;D++){const R=d[T][D];R<g&&(g=R),R>s&&(s=R)}return 1/Math.max(Math.abs(g),Math.abs(s))}function Plot(d){const{output:g,width:s,height:T,pan:D,zoomWidth:R,highlight:h,setPlotState:U}=d,x=react.exports.useRef(null),j=react.exports.useRef(void 0),K=react.exports.useRef(void 0),G=()=>{U(setHighlight(-1))},se=Ne=>{var et,$e;const ge=($e=(et=x.current)==null?void 0:et.offsetLeft)!=null?$e:0,Be=(Ne.clientX-ge)/R,_e=Be+D;if(U(setHighlight(Math.floor(_e))),j.current!==void 0&&K.current!==void 0){const it=K.current-(Be-j.current);U(([,Re,Pe])=>[it,Re,Pe])}},ee=Ne=>{var Be,_e;const ge=(_e=(Be=x.current)==null?void 0:Be.offsetLeft)!=null?_e:0;j.current=(Ne.clientX-ge)/R,K.current=D},oe=Ne=>{const{pixelY:ge}=normalizeWheel(Ne),Be=ge<0?2:.5;U(([_e,et,$e])=>{var Le,F;const it=(F=(Le=x.current)==null?void 0:Le.offsetLeft)!=null?F:0,Re=(Ne.clientX-it)/R;return[_e+Re-1/Be*Re,et*Be,$e]})};react.exports.useEffect(()=>{const Ne=()=>{j.current=void 0,K.current=void 0};return window.addEventListener("pointerup",Ne),()=>{window.removeEventListener("pointerup",Ne)}},[R]);const Ve=react.exports.useMemo(()=>getZoomHeight(g.output),[g.output]);return react.exports.useEffect(()=>{const Ne=x.current,ge=Ne==null?void 0:Ne.getContext("2d");if(ge){ge.clearRect(0,0,s,T);const Be=s/R;for(let _e=0;_e<Be;_e++){const et=_e+Math.floor(D),it=g.output[0][et]*Ve*T*-.48+T*.5,Re=Math.floor(_e*R),Pe=Math.ceil(R);ge.fillStyle="white",h===et&&(ge.fillStyle="rgb(34, 206, 206)",ge.fillRect(Re,0,Pe,T),ge.fillStyle="black"),ge.fillRect(Re,Math.round(it),Pe,1)}}},[g,s,T,h,D,R,Ve]),jsxDevRuntime.exports.jsxDEV("canvas",{width:s,height:T,ref:x,onPointerDown:ee,onPointerMove:se,onPointerOut:G,onWheel:oe},void 0,!1,{fileName:_jsxFileName$1,lineNumber:233,columnNumber:5},this)}function useWindowSize(){const[d,g]=react.exports.useState({width:0,height:0});return react.exports.useEffect(()=>{function s(){g({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),d}function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(d){for(var g=1;g<arguments.length;g++){var s=arguments[g];for(var T in s)Object.prototype.hasOwnProperty.call(s,T)&&(d[T]=s[T])}return d},_extends$1.apply(this,arguments)}var Action;(function(d){d.Pop="POP",d.Push="PUSH",d.Replace="REPLACE"})(Action||(Action={}));var readOnly=function(d){return Object.freeze(d)};function warning$1(d,g){if(!d){typeof console!="undefined"&&console.warn(g);try{throw new Error(g)}catch{}}}var BeforeUnloadEventType="beforeunload",HashChangeEventType="hashchange",PopStateEventType="popstate";function createHashHistory(d){d===void 0&&(d={});var g=d,s=g.window,T=s===void 0?document.defaultView:s,D=T.history;function R(){var Pe=parsePath(T.location.hash.substr(1)),Le=Pe.pathname,F=Le===void 0?"/":Le,Ge=Pe.search,Xt=Ge===void 0?"":Ge,We=Pe.hash,ut=We===void 0?"":We,xt=D.state||{};return[xt.idx,readOnly({pathname:F,search:Xt,hash:ut,state:xt.usr||null,key:xt.key||"default"})]}var h=null;function U(){if(h)ee.call(h),h=null;else{var Pe=Action.Pop,Le=R(),F=Le[0],Ge=Le[1];if(ee.length)if(F!=null){var Xt=K-F;Xt&&(h={action:Pe,location:Ge,retry:function(){it(Xt*-1)}},it(Xt))}else warning$1(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");else _e(Pe)}}T.addEventListener(PopStateEventType,U),T.addEventListener(HashChangeEventType,function(){var Pe=R(),Le=Pe[1];createPath(Le)!==createPath(G)&&U()});var x=Action.Pop,j=R(),K=j[0],G=j[1],se=createEvents(),ee=createEvents();K==null&&(K=0,D.replaceState(_extends$1({},D.state,{idx:K}),""));function oe(){var Pe=document.querySelector("base"),Le="";if(Pe&&Pe.getAttribute("href")){var F=T.location.href,Ge=F.indexOf("#");Le=Ge===-1?F:F.slice(0,Ge)}return Le}function Ve(Pe){return oe()+"#"+(typeof Pe=="string"?Pe:createPath(Pe))}function Ne(Pe,Le){return Le===void 0&&(Le=null),readOnly(_extends$1({pathname:G.pathname,hash:"",search:""},typeof Pe=="string"?parsePath(Pe):Pe,{state:Le,key:createKey()}))}function ge(Pe,Le){return[{usr:Pe.state,key:Pe.key,idx:Le},Ve(Pe)]}function Be(Pe,Le,F){return!ee.length||(ee.call({action:Pe,location:Le,retry:F}),!1)}function _e(Pe){x=Pe;var Le=R();K=Le[0],G=Le[1],se.call({action:x,location:G})}function et(Pe,Le){var F=Action.Push,Ge=Ne(Pe,Le);function Xt(){et(Pe,Le)}if(warning$1(Ge.pathname.charAt(0)==="/","Relative pathnames are not supported in hash history.push("+JSON.stringify(Pe)+")"),Be(F,Ge,Xt)){var We=ge(Ge,K+1),ut=We[0],xt=We[1];try{D.pushState(ut,"",xt)}catch{T.location.assign(xt)}_e(F)}}function $e(Pe,Le){var F=Action.Replace,Ge=Ne(Pe,Le);function Xt(){$e(Pe,Le)}if(warning$1(Ge.pathname.charAt(0)==="/","Relative pathnames are not supported in hash history.replace("+JSON.stringify(Pe)+")"),Be(F,Ge,Xt)){var We=ge(Ge,K),ut=We[0],xt=We[1];D.replaceState(ut,"",xt),_e(F)}}function it(Pe){D.go(Pe)}var Re={get action(){return x},get location(){return G},createHref:Ve,push:et,replace:$e,go:it,back:function(){it(-1)},forward:function(){it(1)},listen:function(Le){return se.push(Le)},block:function(Le){var F=ee.push(Le);return ee.length===1&&T.addEventListener(BeforeUnloadEventType,promptBeforeUnload),function(){F(),ee.length||T.removeEventListener(BeforeUnloadEventType,promptBeforeUnload)}}};return Re}function promptBeforeUnload(d){d.preventDefault(),d.returnValue=""}function createEvents(){var d=[];return{get length(){return d.length},push:function(s){return d.push(s),function(){d=d.filter(function(T){return T!==s})}},call:function(s){d.forEach(function(T){return T&&T(s)})}}}function createKey(){return Math.random().toString(36).substr(2,8)}function createPath(d){var g=d.pathname,s=g===void 0?"/":g,T=d.search,D=T===void 0?"":T,R=d.hash,h=R===void 0?"":R;return D&&D!=="?"&&(s+=D.charAt(0)==="?"?D:"?"+D),h&&h!=="#"&&(s+=h.charAt(0)==="#"?h:"#"+h),s}function parsePath(d){var g={};if(d){var s=d.indexOf("#");s>=0&&(g.hash=d.substr(s),d=d.substr(0,s));var T=d.indexOf("?");T>=0&&(g.search=d.substr(T),d=d.substr(0,T)),d&&(g.pathname=d)}return g}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const NavigationContext=react.exports.createContext(null);NavigationContext.displayName="Navigation";const LocationContext=react.exports.createContext(null);LocationContext.displayName="Location";const RouteContext=react.exports.createContext({outlet:null,matches:[]});RouteContext.displayName="Route";function invariant(d,g){if(!d)throw new Error(g)}function warning(d,g){if(!d){typeof console!="undefined"&&console.warn(g);try{throw new Error(g)}catch{}}}const alreadyWarned={};function warningOnce(d,g,s){!g&&!alreadyWarned[d]&&(alreadyWarned[d]=!0,warning(!1,s))}function matchRoutes(d,g,s){s===void 0&&(s="/");let T=typeof g=="string"?parsePath(g):g,D=stripBasename(T.pathname||"/",s);if(D==null)return null;let R=flattenRoutes(d);rankRouteBranches(R);let h=null;for(let U=0;h==null&&U<R.length;++U)h=matchRouteBranch(R[U],D);return h}function flattenRoutes(d,g,s,T){return g===void 0&&(g=[]),s===void 0&&(s=[]),T===void 0&&(T=""),d.forEach((D,R)=>{let h={relativePath:D.path||"",caseSensitive:D.caseSensitive===!0,childrenIndex:R,route:D};h.relativePath.startsWith("/")&&(h.relativePath.startsWith(T)||invariant(!1,'Absolute route path "'+h.relativePath+'" nested under path '+('"'+T+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(T.length));let U=joinPaths([T,h.relativePath]),x=s.concat(h);D.children&&D.children.length>0&&(D.index===!0&&invariant(!1,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+U+'".')),flattenRoutes(D.children,g,x,U)),!(D.path==null&&!D.index)&&g.push({path:U,score:computeScore(U,D.index),routesMeta:x})}),g}function rankRouteBranches(d){d.sort((g,s)=>g.score!==s.score?s.score-g.score:compareIndexes(g.routesMeta.map(T=>T.childrenIndex),s.routesMeta.map(T=>T.childrenIndex)))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=d=>d==="*";function computeScore(d,g){let s=d.split("/"),T=s.length;return s.some(isSplat)&&(T+=splatPenalty),g&&(T+=indexRouteValue),s.filter(D=>!isSplat(D)).reduce((D,R)=>D+(paramRe.test(R)?dynamicSegmentValue:R===""?emptySegmentValue:staticSegmentValue),T)}function compareIndexes(d,g){return d.length===g.length&&d.slice(0,-1).every((T,D)=>T===g[D])?d[d.length-1]-g[g.length-1]:0}function matchRouteBranch(d,g){let{routesMeta:s}=d,T={},D="/",R=[];for(let h=0;h<s.length;++h){let U=s[h],x=h===s.length-1,j=D==="/"?g:g.slice(D.length)||"/",K=matchPath({path:U.relativePath,caseSensitive:U.caseSensitive,end:x},j);if(!K)return null;Object.assign(T,K.params);let G=U.route;R.push({params:T,pathname:joinPaths([D,K.pathname]),pathnameBase:normalizePathname(joinPaths([D,K.pathnameBase])),route:G}),K.pathnameBase!=="/"&&(D=joinPaths([D,K.pathnameBase]))}return R}function matchPath(d,g){typeof d=="string"&&(d={path:d,caseSensitive:!1,end:!0});let[s,T]=compilePath(d.path,d.caseSensitive,d.end),D=g.match(s);if(!D)return null;let R=D[0],h=R.replace(/(.)\/+$/,"$1"),U=D.slice(1);return{params:T.reduce((j,K,G)=>{if(K==="*"){let se=U[G]||"";h=R.slice(0,R.length-se.length).replace(/(.)\/+$/,"$1")}return j[K]=safelyDecodeURIComponent(U[G]||"",K),j},{}),pathname:R,pathnameBase:h,pattern:d}}function compilePath(d,g,s){g===void 0&&(g=!1),s===void 0&&(s=!0),warning(d==="*"||!d.endsWith("*")||d.endsWith("/*"),'Route path "'+d+'" will be treated as if it were '+('"'+d.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+d.replace(/\*$/,"/*")+'".'));let T=[],D="^"+d.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(h,U)=>(T.push(U),"([^\\/]+)"));return d.endsWith("*")?(T.push("*"),D+=d==="*"||d==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):D+=s?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(D,g?void 0:"i"),T]}function safelyDecodeURIComponent(d,g){try{return decodeURIComponent(d)}catch(s){return warning(!1,'The value for the URL param "'+g+'" will not be decoded because'+(' the string "'+d+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+s+").")),d}}function resolvePath(d,g){g===void 0&&(g="/");let{pathname:s,search:T="",hash:D=""}=typeof d=="string"?parsePath(d):d;return{pathname:s?s.startsWith("/")?s:resolvePathname(s,g):g,search:normalizeSearch(T),hash:normalizeHash(D)}}function resolvePathname(d,g){let s=g.replace(/\/+$/,"").split("/");return d.split("/").forEach(D=>{D===".."?s.length>1&&s.pop():D!=="."&&s.push(D)}),s.length>1?s.join("/"):"/"}function resolveTo(d,g,s){let T=typeof d=="string"?parsePath(d):d,D=d===""||T.pathname===""?"/":T.pathname,R;if(D==null)R=s;else{let U=g.length-1;if(D.startsWith("..")){let x=D.split("/");for(;x[0]==="..";)x.shift(),U-=1;T.pathname=x.join("/")}R=U>=0?g[U]:"/"}let h=resolvePath(T,R);return D&&D!=="/"&&D.endsWith("/")&&!h.pathname.endsWith("/")&&(h.pathname+="/"),h}function getToPathname(d){return d===""||d.pathname===""?"/":typeof d=="string"?parsePath(d).pathname:d.pathname}function stripBasename(d,g){if(g==="/")return d;if(!d.toLowerCase().startsWith(g.toLowerCase()))return null;let s=d.charAt(g.length);return s&&s!=="/"?null:d.slice(g.length)||"/"}const joinPaths=d=>d.join("/").replace(/\/\/+/g,"/"),normalizePathname=d=>d.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=d=>!d||d==="?"?"":d.startsWith("?")?d:"?"+d,normalizeHash=d=>!d||d==="#"?"":d.startsWith("#")?d:"#"+d;function useHref(d){useInRouterContext()||invariant(!1,"useHref() may be used only in the context of a <Router> component.");let{basename:g,navigator:s}=react.exports.useContext(NavigationContext),{hash:T,pathname:D,search:R}=useResolvedPath(d),h=D;if(g!=="/"){let U=getToPathname(d),x=U!=null&&U.endsWith("/");h=D==="/"?g+(x?"/":""):joinPaths([g,D])}return s.createHref({pathname:h,search:R,hash:T})}function useInRouterContext(){return react.exports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1,"useLocation() may be used only in the context of a <Router> component."),react.exports.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||invariant(!1,"useNavigate() may be used only in the context of a <Router> component.");let{basename:d,navigator:g}=react.exports.useContext(NavigationContext),{matches:s}=react.exports.useContext(RouteContext),{pathname:T}=useLocation(),D=JSON.stringify(s.map(U=>U.pathnameBase)),R=react.exports.useRef(!1);return react.exports.useEffect(()=>{R.current=!0}),react.exports.useCallback(function(U,x){if(x===void 0&&(x={}),warning(R.current,"You should call navigate() in a React.useEffect(), not when your component is first rendered."),!R.current)return;if(typeof U=="number"){g.go(U);return}let j=resolveTo(U,JSON.parse(D),T);d!=="/"&&(j.pathname=joinPaths([d,j.pathname])),(x.replace?g.replace:g.push)(j,x.state)},[d,g,D,T])}const OutletContext=react.exports.createContext(null);function useOutlet(d){let g=react.exports.useContext(RouteContext).outlet;return g&&react.exports.createElement(OutletContext.Provider,{value:d},g)}function useParams(){let{matches:d}=react.exports.useContext(RouteContext),g=d[d.length-1];return g?g.params:{}}function useResolvedPath(d){let{matches:g}=react.exports.useContext(RouteContext),{pathname:s}=useLocation(),T=JSON.stringify(g.map(D=>D.pathnameBase));return react.exports.useMemo(()=>resolveTo(d,JSON.parse(T),s),[d,T,s])}function useRoutes(d,g){useInRouterContext()||invariant(!1,"useRoutes() may be used only in the context of a <Router> component.");let{matches:s}=react.exports.useContext(RouteContext),T=s[s.length-1],D=T?T.params:{},R=T?T.pathname:"/",h=T?T.pathnameBase:"/",U=T&&T.route;{let oe=U&&U.path||"";warningOnce(R,!U||oe.endsWith("*"),"You rendered descendant <Routes> (or called `useRoutes()`) at "+('"'+R+'" (under <Route path="'+oe+'">) but the ')+`parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

`+('Please change the parent <Route path="'+oe+'"> to <Route ')+('path="'+(oe==="/"?"*":oe+"/*")+'">.'))}let x=useLocation(),j;if(g){var K;let oe=typeof g=="string"?parsePath(g):g;h==="/"||((K=oe.pathname)==null?void 0:K.startsWith(h))||invariant(!1,"When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was "+('matched by all parent routes. The current pathname base is "'+h+'" ')+('but pathname "'+oe.pathname+'" was given in the `location` prop.')),j=oe}else j=x;let G=j.pathname||"/",se=h==="/"?G:G.slice(h.length)||"/",ee=matchRoutes(d,{pathname:se});return warning(U||ee!=null,'No routes matched location "'+j.pathname+j.search+j.hash+'" '),warning(ee==null||ee[ee.length-1].route.element!==void 0,'Matched leaf route at location "'+j.pathname+j.search+j.hash+'" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'),_renderMatches(ee&&ee.map(oe=>Object.assign({},oe,{params:Object.assign({},D,oe.params),pathname:joinPaths([h,oe.pathname]),pathnameBase:oe.pathnameBase==="/"?h:joinPaths([h,oe.pathnameBase])})),s)}function _renderMatches(d,g){return g===void 0&&(g=[]),d==null?null:d.reduceRight((s,T,D)=>react.exports.createElement(RouteContext.Provider,{children:T.route.element!==void 0?T.route.element:s,value:{outlet:s,matches:g.concat(d.slice(0,D+1))}}),null)}function Outlet(d){return useOutlet(d.context)}function Route(d){invariant(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Router(d){let{basename:g="/",children:s=null,location:T,navigationType:D=Action.Pop,navigator:R,static:h=!1}=d;useInRouterContext()&&invariant(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let U=normalizePathname(g),x=react.exports.useMemo(()=>({basename:U,navigator:R,static:h}),[U,R,h]);typeof T=="string"&&(T=parsePath(T));let{pathname:j="/",search:K="",hash:G="",state:se=null,key:ee="default"}=T,oe=react.exports.useMemo(()=>{let Ve=stripBasename(j,U);return Ve==null?null:{pathname:Ve,search:K,hash:G,state:se,key:ee}},[U,j,K,G,se,ee]);return warning(oe!=null,'<Router basename="'+U+'"> is not able to match the URL '+('"'+j+K+G+'" because it does not start with the ')+"basename, so the <Router> won't render anything."),oe==null?null:react.exports.createElement(NavigationContext.Provider,{value:x},react.exports.createElement(LocationContext.Provider,{children:s,value:{location:oe,navigationType:D}}))}function Routes(d){let{children:g,location:s}=d;return useRoutes(createRoutesFromChildren(g),s)}function createRoutesFromChildren(d){let g=[];return react.exports.Children.forEach(d,s=>{if(!react.exports.isValidElement(s))return;if(s.type===react.exports.Fragment){g.push.apply(g,createRoutesFromChildren(s.props.children));return}s.type!==Route&&invariant(!1,"["+(typeof s.type=="string"?s.type:s.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");let T={caseSensitive:s.props.caseSensitive,element:s.props.element,index:s.props.index,path:s.props.path};s.props.children&&(T.children=createRoutesFromChildren(s.props.children)),g.push(T)}),g}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign||function(d){for(var g=1;g<arguments.length;g++){var s=arguments[g];for(var T in s)Object.prototype.hasOwnProperty.call(s,T)&&(d[T]=s[T])}return d},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(d,g){if(d==null)return{};var s={},T=Object.keys(d),D,R;for(R=0;R<T.length;R++)D=T[R],!(g.indexOf(D)>=0)&&(s[D]=d[D]);return s}const _excluded=["onClick","reloadDocument","replace","state","target","to"],_excluded2=["aria-current","caseSensitive","className","end","style","to","children"];function HashRouter(d){let{basename:g,children:s,window:T}=d,D=react.exports.useRef();D.current==null&&(D.current=createHashHistory({window:T}));let R=D.current,[h,U]=react.exports.useState({action:R.action,location:R.location});return react.exports.useLayoutEffect(()=>R.listen(U),[R]),react.exports.createElement(Router,{basename:g,children:s,location:h.location,navigationType:h.action,navigator:R})}function isModifiedEvent(d){return!!(d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)}const Link=react.exports.forwardRef(function d(g,s){let{onClick:T,reloadDocument:D,replace:R=!1,state:h,target:U,to:x}=g,j=_objectWithoutPropertiesLoose(g,_excluded),K=useHref(x),G=useLinkClickHandler(x,{replace:R,state:h,target:U});function se(ee){T&&T(ee),!ee.defaultPrevented&&!D&&G(ee)}return react.exports.createElement("a",_extends({},j,{href:K,onClick:se,ref:s,target:U}))});Link.displayName="Link";const NavLink=react.exports.forwardRef(function d(g,s){let{"aria-current":T="page",caseSensitive:D=!1,className:R="",end:h=!1,style:U,to:x,children:j}=g,K=_objectWithoutPropertiesLoose(g,_excluded2),G=useLocation(),se=useResolvedPath(x),ee=G.pathname,oe=se.pathname;D||(ee=ee.toLowerCase(),oe=oe.toLowerCase());let Ve=ee===oe||!h&&ee.startsWith(oe)&&ee.charAt(oe.length)==="/",Ne=Ve?T:void 0,ge;typeof R=="function"?ge=R({isActive:Ve}):ge=[R,Ve?"active":null].filter(Boolean).join(" ");let Be=typeof U=="function"?U({isActive:Ve}):U;return react.exports.createElement(Link,_extends({},K,{"aria-current":Ne,className:ge,ref:s,style:Be,to:x}),typeof j=="function"?j({isActive:Ve}):j)});NavLink.displayName="NavLink";function useLinkClickHandler(d,g){let{target:s,replace:T,state:D}=g===void 0?{}:g,R=useNavigate(),h=useLocation(),U=useResolvedPath(d);return react.exports.useCallback(x=>{if(x.button===0&&(!s||s==="_self")&&!isModifiedEvent(x)){x.preventDefault();let j=!!T||createPath(h)===createPath(U);R(d,{replace:j,state:D})}},[h,R,U,T,D,s,d])}function touchStart(d){if(d.state!=="suspended")return;const g=document.body,s=["touchstart","touchend","mousedown","keydown"],T=()=>s.forEach(R=>g.removeEventListener(R,D)),D=()=>d.resume().then(T);s.forEach(R=>g.addEventListener(R,D,!1))}var _jsxFileName="/home/runner/work/mosfez-faust/mosfez-faust/dev/src/dev.tsx";const liveAudioContext=new AudioContext;touchStart(liveAudioContext);client.createRoot(document.getElementById("root")).render(jsxDevRuntime.exports.jsxDEV(React.StrictMode,{children:jsxDevRuntime.exports.jsxDEV(HashRouter,{children:jsxDevRuntime.exports.jsxDEV(Routes,{children:jsxDevRuntime.exports.jsxDEV(Route,{path:"/",element:jsxDevRuntime.exports.jsxDEV(Main,{},void 0,!1,{fileName:_jsxFileName,lineNumber:36,columnNumber:34},globalThis),children:[jsxDevRuntime.exports.jsxDEV(Route,{index:!0,element:jsxDevRuntime.exports.jsxDEV(List,{},void 0,!1,{fileName:_jsxFileName,lineNumber:37,columnNumber:33},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:37,columnNumber:11},globalThis),jsxDevRuntime.exports.jsxDEV(Route,{path:":id",element:jsxDevRuntime.exports.jsxDEV(DspRoute,{},void 0,!1,{fileName:_jsxFileName,lineNumber:38,columnNumber:38},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:38,columnNumber:11},globalThis)]},void 0,!0,{fileName:_jsxFileName,lineNumber:36,columnNumber:9},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:35,columnNumber:7},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:34,columnNumber:5},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:33,columnNumber:3},globalThis));function Main(){return jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.main,children:[jsxDevRuntime.exports.jsxDEV(Outlet,{},void 0,!1,{fileName:_jsxFileName,lineNumber:48,columnNumber:7},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.footer,children:[jsxDevRuntime.exports.jsxDEV(FooterLink,{href:"https://faustdoc.grame.fr/manual/syntax/",children:"Faust syntax"},void 0,!1,{fileName:_jsxFileName,lineNumber:50,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV(FooterLink,{href:"https://faustlibraries.grame.fr/",children:"Faust libraries"},void 0,!1,{fileName:_jsxFileName,lineNumber:53,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV(FooterLink,{href:"https://faustide.grame.fr/",children:"Faust IDE"},void 0,!1,{fileName:_jsxFileName,lineNumber:56,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV(FooterLink,{href:"https://www.rebeltech.org/patch-library/patches/my-patches/",children:"OWL patches"},void 0,!1,{fileName:_jsxFileName,lineNumber:57,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV(FooterLink,{href:"https://www.openwarelab.org/Tools/firmware.html",children:"OWL Firmware"},void 0,!1,{fileName:_jsxFileName,lineNumber:60,columnNumber:9},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:49,columnNumber:7},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:47,columnNumber:5},this)}function FooterLink(d){return jsxDevRuntime.exports.jsxDEV("a",{className:classes$3.link,target:"_blank",...d},void 0,!1,{fileName:_jsxFileName,lineNumber:74,columnNumber:10},this)}function List(){return jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment,{children:[jsxDevRuntime.exports.jsxDEV(ListHeader,{children:["Faust and WebAudio API sketches -"," ",jsxDevRuntime.exports.jsxDEV("a",{className:classes$3.link,href:"https://github.com/dxinteractive/mosfez-faust",children:"github repo"},void 0,!1,{fileName:_jsxFileName,lineNumber:82,columnNumber:9},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:80,columnNumber:7},this),jsxDevRuntime.exports.jsxDEV("ol",{className:classes$3.list,children:all.map(d=>jsxDevRuntime.exports.jsxDEV("li",{className:classes$3.listItem,children:jsxDevRuntime.exports.jsxDEV(Link,{to:`/${d.id}`,children:d.name},void 0,!1,{fileName:_jsxFileName,lineNumber:93,columnNumber:15},this)},d.id,!1,{fileName:_jsxFileName,lineNumber:92,columnNumber:13},this))},void 0,!1,{fileName:_jsxFileName,lineNumber:89,columnNumber:7},this)]},void 0,!0)}function ListHeader(d){return jsxDevRuntime.exports.jsxDEV("header",{className:classes$3.dspHeader,children:jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspHeaderTitle,children:d.children},void 0,!1,{fileName:_jsxFileName,lineNumber:109,columnNumber:7},this)},void 0,!1,{fileName:_jsxFileName,lineNumber:108,columnNumber:5},this)}function DspRoute(){const{id:d}=useParams(),g=all.find(s=>s.id===d);return g?jsxDevRuntime.exports.jsxDEV(Dsp,{dspDefinition:g},void 0,!1,{fileName:_jsxFileName,lineNumber:122,columnNumber:10},this):jsxDevRuntime.exports.jsxDEV(DspHeader,{children:['Dsp "',d,'" not found']},void 0,!0,{fileName:_jsxFileName,lineNumber:119,columnNumber:12},this)}const TYPE_DESCS={offline:"see charts below, open your browser console to see DSP values",live:"DSP will play sound once successfully compiled",component:"follow instructions below",callback:"JavaScript will be executed immediately, charts may appear below"};function Dsp(d){const{dspDefinition:g}=d,{name:s,description:T}=g,D=g.dsp,R=useFaustLivePlayer(liveAudioContext,g),h=useFaustOfflineRenderer(g),U=useDspCallback(g,liveAudioContext),x=useDspComponent(g,liveAudioContext),j=h!=null?h:U,{width:K}=useWindowSize();let G=TYPE_DESCS[g.type];return G&&(G=` - ${G}`),jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment,{children:[jsxDevRuntime.exports.jsxDEV(DspHeader,{children:[jsxDevRuntime.exports.jsxDEV("strong",{children:s},void 0,!1,{fileName:_jsxFileName,lineNumber:158,columnNumber:9},this)," - ",T]},void 0,!0,{fileName:_jsxFileName,lineNumber:157,columnNumber:7},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspType,children:["type: ",g.type,G]},void 0,!0,{fileName:_jsxFileName,lineNumber:160,columnNumber:7},this),R&&R.params.length>0&&jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspContent,children:jsxDevRuntime.exports.jsxDEV(Controls,{items:R.ui,node:R.node},void 0,!1,{fileName:_jsxFileName,lineNumber:166,columnNumber:11},this)},void 0,!1,{fileName:_jsxFileName,lineNumber:165,columnNumber:9},this),R&&R.audioContext&&jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspContent,children:[R.source&&jsxDevRuntime.exports.jsxDEV(OscopePanel,{label:"in",source:R.source,audioContext:R.audioContext},void 0,!1,{fileName:_jsxFileName,lineNumber:172,columnNumber:13},this),R.node&&jsxDevRuntime.exports.jsxDEV(OscopePanel,{label:"out",source:R.node,audioContext:R.audioContext},void 0,!1,{fileName:_jsxFileName,lineNumber:179,columnNumber:13},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:170,columnNumber:9},this),j&&j.length>0&&jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspContent,children:jsxDevRuntime.exports.jsxDEV(PlotPanel,{name:s,offlineResult:j,width:K-36,height:200,liveAudioContext},void 0,!1,{fileName:_jsxFileName,lineNumber:189,columnNumber:11},this)},void 0,!1,{fileName:_jsxFileName,lineNumber:188,columnNumber:9},this),x&&jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspContent,children:x},void 0,!1,{fileName:_jsxFileName,lineNumber:199,columnNumber:9},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspContent,children:D&&jsxDevRuntime.exports.jsxDEV("pre",{className:classes$3.dspPre,children:D},void 0,!1,{fileName:_jsxFileName,lineNumber:202,columnNumber:17},this)},void 0,!1,{fileName:_jsxFileName,lineNumber:201,columnNumber:7},this)]},void 0,!0)}function DspHeader(d){return jsxDevRuntime.exports.jsxDEV("header",{className:classes$3.dspHeader,children:[jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspHeaderTitle,children:d.children},void 0,!1,{fileName:_jsxFileName,lineNumber:215,columnNumber:7},this),jsxDevRuntime.exports.jsxDEV("div",{className:classes$3.dspHeaderBack,children:jsxDevRuntime.exports.jsxDEV(Link,{to:"/",children:"back"},void 0,!1,{fileName:_jsxFileName,lineNumber:217,columnNumber:9},this)},void 0,!1,{fileName:_jsxFileName,lineNumber:216,columnNumber:7},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:214,columnNumber:5},this)}
