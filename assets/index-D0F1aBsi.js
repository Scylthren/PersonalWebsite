function pS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Eh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p0={exports:{}},Pu={},m0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),mS=Symbol.for("react.portal"),gS=Symbol.for("react.fragment"),vS=Symbol.for("react.strict_mode"),_S=Symbol.for("react.profiler"),xS=Symbol.for("react.provider"),yS=Symbol.for("react.context"),SS=Symbol.for("react.forward_ref"),ES=Symbol.for("react.suspense"),MS=Symbol.for("react.memo"),wS=Symbol.for("react.lazy"),am=Symbol.iterator;function TS(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,_0={};function hs(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||g0}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=hs.prototype;function Mh(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||g0}var wh=Mh.prototype=new x0;wh.constructor=Mh;v0(wh,hs.prototype);wh.isPureReactComponent=!0;var sm=Array.isArray,y0=Object.prototype.hasOwnProperty,Th={current:null},S0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)y0.call(e,i)&&!S0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:To,type:t,key:a,ref:s,props:r,_owner:Th.current}}function bS(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function AS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var om=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AS(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case To:case mS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+sc(s,0):i,sm(r)?(n="",t!=null&&(n=t.replace(om,"$&/")+"/"),Al(r,e,n,"",function(u){return u})):r!=null&&(bh(r)&&(r=bS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(om,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",sm(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+sc(a,o);s+=Al(a,e,n,l,r)}else if(l=TS(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+sc(a,o++),s+=Al(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(a){return e.call(n,a,r++)}),i}function CS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Cl={transition:null},RS={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Th};function M0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=hs;qe.Fragment=gS;qe.Profiler=_S;qe.PureComponent=Mh;qe.StrictMode=vS;qe.Suspense=ES;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RS;qe.act=M0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=v0({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)y0.call(e,l)&&!S0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:To,type:t.type,key:r,ref:a,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:yS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xS,_context:t},t.Consumer=t};qe.createElement=E0;qe.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:SS,render:t}};qe.isValidElement=bh;qe.lazy=function(t){return{$$typeof:wS,_payload:{_status:-1,_result:t},_init:CS}};qe.memo=function(t,e){return{$$typeof:MS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};qe.unstable_act=M0;qe.useCallback=function(t,e){return dn.current.useCallback(t,e)};qe.useContext=function(t){return dn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return dn.current.useEffect(t,e)};qe.useId=function(){return dn.current.useId()};qe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return dn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};qe.useRef=function(t){return dn.current.useRef(t)};qe.useState=function(t){return dn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return dn.current.useTransition()};qe.version="18.3.1";m0.exports=qe;var he=m0.exports;const w0=Eh(he),PS=pS({__proto__:null,default:w0},[he]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=he,LS=Symbol.for("react.element"),DS=Symbol.for("react.fragment"),NS=Object.prototype.hasOwnProperty,US=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FS={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)NS.call(e,i)&&!FS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:LS,type:t,key:a,ref:s,props:r,_owner:US.current}}Pu.Fragment=DS;Pu.jsx=T0;Pu.jsxs=T0;p0.exports=Pu;var ie=p0.exports,wf={},b0={exports:{}},Nn={},A0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,$){var b=B.length;B.push($);e:for(;0<b;){var te=b-1>>>1,oe=B[te];if(0<r(oe,$))B[te]=$,B[b]=oe,b=te;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var $=B[0],b=B.pop();if(b!==$){B[0]=b;e:for(var te=0,oe=B.length,I=oe>>>1;te<I;){var ze=2*(te+1)-1,Be=B[ze],j=ze+1,ue=B[j];if(0>r(Be,b))j<oe&&0>r(ue,Be)?(B[te]=ue,B[j]=b,te=j):(B[te]=Be,B[ze]=b,te=ze);else if(j<oe&&0>r(ue,b))B[te]=ue,B[j]=b,te=j;else break e}}return $}function r(B,$){var b=B.sortIndex-$.sortIndex;return b!==0?b:B.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],c=1,d=null,f=3,h=!1,m=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(B){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=B)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function E(B){if(S=!1,y(B),!m)if(n(l)!==null)m=!0,K(A);else{var $=n(u);$!==null&&V(E,$.startTime-B)}}function A(B,$){m=!1,S&&(S=!1,p(x),x=-1),h=!0;var b=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||B&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var oe=te(d.expirationTime<=$);$=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),y($)}else i(l);d=n(l)}if(d!==null)var I=!0;else{var ze=n(u);ze!==null&&V(E,ze.startTime-$),I=!1}return I}finally{d=null,f=b,h=!1}}var M=!1,C=null,x=-1,R=5,L=-1;function P(){return!(t.unstable_now()-L<R)}function N(){if(C!==null){var B=t.unstable_now();L=B;var $=!0;try{$=C(!0,B)}finally{$?q():(M=!1,C=null)}}else M=!1}var q;if(typeof _=="function")q=function(){_(N)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,F=Q.port2;Q.port1.onmessage=N,q=function(){F.postMessage(null)}}else q=function(){g(N,0)};function K(B){C=B,M||(M=!0,q())}function V(B,$){x=g(function(){B(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,K(A))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var b=f;f=$;try{return B()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var b=f;f=B;try{return $()}finally{f=b}},t.unstable_scheduleCallback=function(B,$,b){var te=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?te+b:te):b=te,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=b+oe,B={id:c++,callback:$,priorityLevel:B,startTime:b,expirationTime:oe,sortIndex:-1},b>te?(B.sortIndex=b,e(u,B),n(l)===null&&B===n(u)&&(S?(p(x),x=-1):S=!0,V(E,b-te))):(B.sortIndex=oe,e(l,B),m||h||(m=!0,K(A))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var $=f;return function(){var b=f;f=$;try{return B.apply(this,arguments)}finally{f=b}}}})(C0);A0.exports=C0;var kS=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=he,Dn=kS;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,no={};function ca(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(no[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,BS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},um={};function zS(t){return Tf.call(um,t)?!0:Tf.call(lm,t)?!1:BS.test(t)?um[t]=!0:(lm[t]=!0,!1)}function VS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HS(t,e,n,i){if(e===null||typeof e>"u"||VS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function Ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,Ch);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,Ch);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,Ch);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HS(e,n,r,i)&&(n=null),i||r===null?zS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),La=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),cm=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,oc;function Os(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function GS(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Da:return"Fragment";case La:return"Portal";case bf:return"Profiler";case Ph:return"StrictMode";case Af:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I0:return(t.displayName||"Context")+".Consumer";case P0:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lh:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function WS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===Ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XS(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=XS(t))}function N0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=D0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U0(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function If(t,e){U0(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lf(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function Xa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Bs(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function F0(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vo,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qS=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){qS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function B0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=B0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var YS=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uf(t,e){if(e){if(YS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function Dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,qa=null,Ya=null;function mm(t){if(t=Co(t)){if(typeof Of!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Uu(e),Of(t.stateNode,t.type,e))}}function V0(t){qa?Ya?Ya.push(t):Ya=[t]:qa=t}function H0(){if(qa){var t=qa,e=Ya;if(Ya=qa=null,mm(t),e)for(t=0;t<e.length;t++)mm(e[t])}}function G0(t,e){return t(e)}function W0(){}var cc=!1;function X0(t,e,n){if(cc)return t(e,n);cc=!0;try{return G0(t,e,n)}finally{cc=!1,(qa!==null||Ya!==null)&&(W0(),H0())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=Uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Bf=!1;if(Gi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Bf=!1}function $S(t,e,n,i,r,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xs=!1,jl=null,Kl=!1,zf=null,jS={onError:function(t){Xs=!0,jl=t}};function KS(t,e,n,i,r,a,s,o,l){Xs=!1,jl=null,$S.apply(jS,arguments)}function ZS(t,e,n,i,r,a,s,o,l){if(KS.apply(this,arguments),Xs){if(Xs){var u=jl;Xs=!1,jl=null}else throw Error(se(198));Kl||(Kl=!0,zf=u)}}function fa(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(fa(t)!==t)throw Error(se(188))}function QS(t){var e=t.alternate;if(!e){if(e=fa(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return gm(r),t;if(a===i)return gm(r),e;a=a.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Y0(t){return t=QS(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var j0=Dn.unstable_scheduleCallback,vm=Dn.unstable_cancelCallback,JS=Dn.unstable_shouldYield,eE=Dn.unstable_requestPaint,Nt=Dn.unstable_now,tE=Dn.unstable_getCurrentPriorityLevel,Nh=Dn.unstable_ImmediatePriority,K0=Dn.unstable_UserBlockingPriority,Zl=Dn.unstable_NormalPriority,nE=Dn.unstable_LowPriority,Z0=Dn.unstable_IdlePriority,Iu=null,xi=null;function iE(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:sE,rE=Math.log,aE=Math.LN2;function sE(t){return t>>>=0,t===0?32:31-(rE(t)/aE|0)|0}var Ho=64,Go=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=zs(o):(a&=s,a!==0&&(i=zs(a)))}else s=n&~r,s!==0?i=zs(s):a!==0&&(i=zs(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function oE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-ii(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=oE(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q0(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function uE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e_,Fh,t_,n_,i_,Hf=!1,Wo=[],vr=null,_r=null,xr=null,ao=new Map,so=new Map,cr=[],cE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function Ms(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fE(t,e,n,i,r){switch(e){case"focusin":return vr=Ms(vr,t,e,n,i,r),!0;case"dragenter":return _r=Ms(_r,t,e,n,i,r),!0;case"mouseover":return xr=Ms(xr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return ao.set(a,Ms(ao.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,so.set(a,Ms(so.get(a)||null,t,e,n,i,r)),!0}return!1}function r_(t){var e=$r(t.target);if(e!==null){var n=fa(e);if(n!==null){if(e=n.tag,e===13){if(e=q0(n),e!==null){t.blockedOn=e,i_(t.priority,function(){t_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);kf=i,n.target.dispatchEvent(i),kf=null}else return e=Co(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Rl(t)&&n.delete(e)}function dE(){Hf=!1,vr!==null&&Rl(vr)&&(vr=null),_r!==null&&Rl(_r)&&(_r=null),xr!==null&&Rl(xr)&&(xr=null),ao.forEach(xm),so.forEach(xm)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,dE)))}function oo(t){function e(r){return ws(r,t)}if(0<Wo.length){ws(Wo[0],t);for(var n=1;n<Wo.length;n++){var i=Wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&ws(vr,t),_r!==null&&ws(_r,t),xr!==null&&ws(xr,t),ao.forEach(e),so.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&cr.shift()}var $a=ji.ReactCurrentBatchConfig,Jl=!0;function hE(t,e,n,i){var r=st,a=$a.transition;$a.transition=null;try{st=1,kh(t,e,n,i)}finally{st=r,$a.transition=a}}function pE(t,e,n,i){var r=st,a=$a.transition;$a.transition=null;try{st=4,kh(t,e,n,i)}finally{st=r,$a.transition=a}}function kh(t,e,n,i){if(Jl){var r=Gf(t,e,n,i);if(r===null)Sc(t,e,i,eu,n),_m(t,i);else if(fE(r,t,e,n,i))i.stopPropagation();else if(_m(t,i),e&4&&-1<cE.indexOf(t)){for(;r!==null;){var a=Co(r);if(a!==null&&e_(a),a=Gf(t,e,n,i),a===null&&Sc(t,e,i,eu,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Sc(t,e,i,null,n)}}var eu=null;function Gf(t,e,n,i){if(eu=null,t=Dh(i),t=$r(t),t!==null)if(e=fa(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tE()){case Nh:return 1;case K0:return 4;case Zl:case nE:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var hr=null,Oh=null,Pl=null;function s_(){if(Pl)return Pl;var t,e=Oh,n=e.length,i,r="value"in hr?hr.value:hr.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function ym(){return!1}function Un(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xo:ym,this.isPropagationStopped=ym,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Un(ps),Ao=Mt({},ps,{view:0,detail:0}),mE=Un(Ao),dc,hc,Ts,Lu=Mt({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(dc=t.screenX-Ts.screenX,hc=t.screenY-Ts.screenY):hc=dc=0,Ts=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Sm=Un(Lu),gE=Mt({},Lu,{dataTransfer:0}),vE=Un(gE),_E=Mt({},Ao,{relatedTarget:0}),pc=Un(_E),xE=Mt({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=Un(xE),SE=Mt({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EE=Un(SE),ME=Mt({},ps,{data:0}),Em=Un(ME),wE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bE[t])?!!e[t]:!1}function zh(){return AE}var CE=Mt({},Ao,{key:function(t){if(t.key){var e=wE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RE=Un(CE),PE=Mt({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Un(PE),IE=Mt({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),LE=Un(IE),DE=Mt({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Un(DE),UE=Mt({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FE=Un(UE),kE=[9,13,27,32],Vh=Gi&&"CompositionEvent"in window,qs=null;Gi&&"documentMode"in document&&(qs=document.documentMode);var OE=Gi&&"TextEvent"in window&&!qs,o_=Gi&&(!Vh||qs&&8<qs&&11>=qs),wm=" ",Tm=!1;function l_(t,e){switch(t){case"keyup":return kE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Na=!1;function BE(t,e){switch(t){case"compositionend":return u_(e);case"keypress":return e.which!==32?null:(Tm=!0,wm);case"textInput":return t=e.data,t===wm&&Tm?null:t;default:return null}}function zE(t,e){if(Na)return t==="compositionend"||!Vh&&l_(t,e)?(t=s_(),Pl=Oh=hr=null,Na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VE[t.type]:e==="textarea"}function c_(t,e,n,i){V0(i),e=tu(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ys=null,lo=null;function HE(t){S_(t,0)}function Du(t){var e=ka(t);if(N0(e))return t}function GE(t,e){if(t==="change")return e}var f_=!1;if(Gi){var mc;if(Gi){var gc="oninput"in document;if(!gc){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),gc=typeof Am.oninput=="function"}mc=gc}else mc=!1;f_=mc&&(!document.documentMode||9<document.documentMode)}function Cm(){Ys&&(Ys.detachEvent("onpropertychange",d_),lo=Ys=null)}function d_(t){if(t.propertyName==="value"&&Du(lo)){var e=[];c_(e,lo,t,Dh(t)),X0(HE,e)}}function WE(t,e,n){t==="focusin"?(Cm(),Ys=e,lo=n,Ys.attachEvent("onpropertychange",d_)):t==="focusout"&&Cm()}function XE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(lo)}function qE(t,e){if(t==="click")return Du(e)}function YE(t,e){if(t==="input"||t==="change")return Du(e)}function $E(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:$E;function uo(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tf.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Rm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p_(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jE(t){var e=p_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(i!==null&&Hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Pm(n,a);var s=Pm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KE=Gi&&"documentMode"in document&&11>=document.documentMode,Ua=null,Wf=null,$s=null,Xf=!1;function Im(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xf||Ua==null||Ua!==$l(i)||(i=Ua,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&uo($s,i)||($s=i,i=tu(Wf,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ua)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fa={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},vc={},m_={};Gi&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Nu(t){if(vc[t])return vc[t];if(!Fa[t])return t;var e=Fa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m_)return vc[t]=e[n];return t}var g_=Nu("animationend"),v_=Nu("animationiteration"),__=Nu("animationstart"),x_=Nu("transitionend"),y_=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){y_.set(t,e),ca(e,[t])}for(var _c=0;_c<Lm.length;_c++){var xc=Lm[_c],ZE=xc.toLowerCase(),QE=xc[0].toUpperCase()+xc.slice(1);Rr(ZE,"on"+QE)}Rr(g_,"onAnimationEnd");Rr(v_,"onAnimationIteration");Rr(__,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(x_,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ca("onBeforeInput",["compositionend","keypress","textInput","paste"]);ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Dm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ZS(i,e,void 0,t),t.currentTarget=null}function S_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Dm(r,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Dm(r,o,u),a=l}}}if(Kl)throw t=zf,Kl=!1,zf=null,t}function mt(t,e){var n=e[Kf];n===void 0&&(n=e[Kf]=new Set);var i=t+"__bubble";n.has(i)||(E_(e,t,2,!1),n.add(i))}function yc(t,e,n){var i=0;e&&(i|=4),E_(n,t,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Yo]){t[Yo]=!0,R0.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||yc(n,!1,t),yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,yc("selectionchange",!1,e))}}function E_(t,e,n,i){switch(a_(e)){case 1:var r=hE;break;case 4:r=pE;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=$r(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}X0(function(){var u=a,c=Dh(n),d=[];e:{var f=y_.get(t);if(f!==void 0){var h=Bh,m=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":h=RE;break;case"focusin":m="focus",h=pc;break;case"focusout":m="blur",h=pc;break;case"beforeblur":case"afterblur":h=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=vE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=LE;break;case g_:case v_:case __:h=yE;break;case x_:h=NE;break;case"scroll":h=mE;break;case"wheel":h=FE;break;case"copy":case"cut":case"paste":h=EE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Mm}var S=(e&4)!==0,g=!S&&t==="scroll",p=S?f!==null?f+"Capture":null:f;S=[];for(var _=u,y;_!==null;){y=_;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=ro(_,p),E!=null&&S.push(fo(_,E,y)))),g)break;_=_.return}0<S.length&&(f=new h(f,m,null,n,c),d.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==kf&&(m=n.relatedTarget||n.fromElement)&&($r(m)||m[Wi]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?$r(m):null,m!==null&&(g=fa(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(S=Sm,E="onMouseLeave",p="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Mm,E="onPointerLeave",p="onPointerEnter",_="pointer"),g=h==null?f:ka(h),y=m==null?f:ka(m),f=new S(E,_+"leave",h,n,c),f.target=g,f.relatedTarget=y,E=null,$r(c)===u&&(S=new S(p,_+"enter",m,n,c),S.target=y,S.relatedTarget=g,E=S),g=E,h&&m)t:{for(S=h,p=m,_=0,y=S;y;y=va(y))_++;for(y=0,E=p;E;E=va(E))y++;for(;0<_-y;)S=va(S),_--;for(;0<y-_;)p=va(p),y--;for(;_--;){if(S===p||p!==null&&S===p.alternate)break t;S=va(S),p=va(p)}S=null}else S=null;h!==null&&Nm(d,f,h,S,!1),m!==null&&g!==null&&Nm(d,g,m,S,!0)}}e:{if(f=u?ka(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=GE;else if(bm(f))if(f_)A=YE;else{A=XE;var M=WE}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=qE);if(A&&(A=A(t,u))){c_(d,A,n,c);break e}M&&M(t,f,u),t==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&Lf(f,"number",f.value)}switch(M=u?ka(u):window,t){case"focusin":(bm(M)||M.contentEditable==="true")&&(Ua=M,Wf=u,$s=null);break;case"focusout":$s=Wf=Ua=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,Im(d,n,c);break;case"selectionchange":if(KE)break;case"keydown":case"keyup":Im(d,n,c)}var C;if(Vh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Na?l_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(o_&&n.locale!=="ko"&&(Na||x!=="onCompositionStart"?x==="onCompositionEnd"&&Na&&(C=s_()):(hr=c,Oh="value"in hr?hr.value:hr.textContent,Na=!0)),M=tu(u,x),0<M.length&&(x=new Em(x,t,null,n,c),d.push({event:x,listeners:M}),C?x.data=C:(C=u_(n),C!==null&&(x.data=C)))),(C=OE?BE(t,n):zE(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(c=new Em("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}S_(d,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ro(t,n),a!=null&&i.unshift(fo(t,a,r)),a=ro(t,e),a!=null&&i.push(fo(t,a,r))),t=t.return}return i}function va(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ro(n,a),l!=null&&s.unshift(fo(n,l,o))):r||(l=ro(n,a),l!=null&&s.push(fo(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var eM=/\r\n?/g,tM=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(eM,`
`).replace(tM,"")}function $o(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(se(425))}function nu(){}var qf=null,Yf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,nM=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,iM=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(rM)}:jf;function rM(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),mi="__reactFiber$"+ms,ho="__reactProps$"+ms,Wi="__reactContainer$"+ms,Kf="__reactEvents$"+ms,aM="__reactListeners$"+ms,sM="__reactHandles$"+ms;function $r(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=km(t);t!==null;){if(n=t[mi])return n;t=km(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[mi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ka(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Uu(t){return t[ho]||null}var Zf=[],Oa=-1;function Pr(t){return{current:t}}function gt(t){0>Oa||(t.current=Zf[Oa],Zf[Oa]=null,Oa--)}function ht(t,e){Oa++,Zf[Oa]=t.current,t.current=e}var Ar={},sn=Pr(Ar),_n=Pr(!1),na=Ar;function ns(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function iu(){gt(_n),gt(sn)}function Om(t,e,n){if(sn.current!==Ar)throw Error(se(168));ht(sn,e),ht(_n,n)}function M_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,WS(t)||"Unknown",r));return Mt({},n,i)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,na=sn.current,ht(sn,t),ht(_n,_n.current),!0}function Bm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=M_(t,e,na),i.__reactInternalMemoizedMergedChildContext=t,gt(_n),gt(sn),ht(sn,t)):gt(_n),ht(_n,n)}var Ni=null,Fu=!1,Mc=!1;function w_(t){Ni===null?Ni=[t]:Ni.push(t)}function oM(t){Fu=!0,w_(t)}function Ir(){if(!Mc&&Ni!==null){Mc=!0;var t=0,e=st;try{var n=Ni;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,Fu=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),j0(Nh,Ir),r}finally{st=e,Mc=!1}}return null}var Ba=[],za=0,au=null,su=0,Bn=[],zn=0,ia=null,Fi=1,ki="";function zr(t,e){Ba[za++]=su,Ba[za++]=au,au=t,su=e}function T_(t,e,n){Bn[zn++]=Fi,Bn[zn++]=ki,Bn[zn++]=ia,ia=t;var i=Fi;t=ki;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var a=32-ii(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Fi=1<<32-ii(e)+r|n<<r|i,ki=a+t}else Fi=1<<a|n<<r|i,ki=t}function Gh(t){t.return!==null&&(zr(t,1),T_(t,1,0))}function Wh(t){for(;t===au;)au=Ba[--za],Ba[za]=null,su=Ba[--za],Ba[za]=null;for(;t===ia;)ia=Bn[--zn],Bn[zn]=null,ki=Bn[--zn],Bn[zn]=null,Fi=Bn[--zn],Bn[zn]=null}var In=null,Rn=null,_t=!1,ei=null;function b_(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Rn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ia!==null?{id:Fi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Rn=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(_t){var e=Rn;if(e){var n=e;if(!zm(t,e)){if(Qf(t))throw Error(se(418));e=yr(n.nextSibling);var i=In;e&&zm(t,e)?b_(i,n):(t.flags=t.flags&-4097|2,_t=!1,In=t)}}else{if(Qf(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,In=t}}}function Vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function jo(t){if(t!==In)return!1;if(!_t)return Vm(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=Rn)){if(Qf(t))throw A_(),Error(se(418));for(;e;)b_(t,e),e=yr(e.nextSibling)}if(Vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=In?yr(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Rn;t;)t=yr(t.nextSibling)}function is(){Rn=In=null,_t=!1}function Xh(t){ei===null?ei=[t]:ei.push(t)}var lM=ji.ReactCurrentBatchConfig;function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function C_(t){function e(p,_){if(t){var y=p.deletions;y===null?(p.deletions=[_],p.flags|=16):y.push(_)}}function n(p,_){if(!t)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p,_){for(p=new Map;_!==null;)_.key!==null?p.set(_.key,_):p.set(_.index,_),_=_.sibling;return p}function r(p,_){return p=wr(p,_),p.index=0,p.sibling=null,p}function a(p,_,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<_?(p.flags|=2,_):y):(p.flags|=2,_)):(p.flags|=1048576,_)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,_,y,E){return _===null||_.tag!==6?(_=Pc(y,p.mode,E),_.return=p,_):(_=r(_,y),_.return=p,_)}function l(p,_,y,E){var A=y.type;return A===Da?c(p,_,y.props.children,E,y.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===lr&&Hm(A)===_.type)?(E=r(_,y.props),E.ref=bs(p,_,y),E.return=p,E):(E=Ol(y.type,y.key,y.props,null,p.mode,E),E.ref=bs(p,_,y),E.return=p,E)}function u(p,_,y,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Ic(y,p.mode,E),_.return=p,_):(_=r(_,y.children||[]),_.return=p,_)}function c(p,_,y,E,A){return _===null||_.tag!==7?(_=ea(y,p.mode,E,A),_.return=p,_):(_=r(_,y),_.return=p,_)}function d(p,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Pc(""+_,p.mode,y),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bo:return y=Ol(_.type,_.key,_.props,null,p.mode,y),y.ref=bs(p,null,_),y.return=p,y;case La:return _=Ic(_,p.mode,y),_.return=p,_;case lr:var E=_._init;return d(p,E(_._payload),y)}if(Bs(_)||Ss(_))return _=ea(_,p.mode,y,null),_.return=p,_;Ko(p,_)}return null}function f(p,_,y,E){var A=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(p,_,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bo:return y.key===A?l(p,_,y,E):null;case La:return y.key===A?u(p,_,y,E):null;case lr:return A=y._init,f(p,_,A(y._payload),E)}if(Bs(y)||Ss(y))return A!==null?null:c(p,_,y,E,null);Ko(p,y)}return null}function h(p,_,y,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,o(_,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Bo:return p=p.get(E.key===null?y:E.key)||null,l(_,p,E,A);case La:return p=p.get(E.key===null?y:E.key)||null,u(_,p,E,A);case lr:var M=E._init;return h(p,_,y,M(E._payload),A)}if(Bs(E)||Ss(E))return p=p.get(y)||null,c(_,p,E,A,null);Ko(_,E)}return null}function m(p,_,y,E){for(var A=null,M=null,C=_,x=_=0,R=null;C!==null&&x<y.length;x++){C.index>x?(R=C,C=null):R=C.sibling;var L=f(p,C,y[x],E);if(L===null){C===null&&(C=R);break}t&&C&&L.alternate===null&&e(p,C),_=a(L,_,x),M===null?A=L:M.sibling=L,M=L,C=R}if(x===y.length)return n(p,C),_t&&zr(p,x),A;if(C===null){for(;x<y.length;x++)C=d(p,y[x],E),C!==null&&(_=a(C,_,x),M===null?A=C:M.sibling=C,M=C);return _t&&zr(p,x),A}for(C=i(p,C);x<y.length;x++)R=h(C,p,x,y[x],E),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?x:R.key),_=a(R,_,x),M===null?A=R:M.sibling=R,M=R);return t&&C.forEach(function(P){return e(p,P)}),_t&&zr(p,x),A}function S(p,_,y,E){var A=Ss(y);if(typeof A!="function")throw Error(se(150));if(y=A.call(y),y==null)throw Error(se(151));for(var M=A=null,C=_,x=_=0,R=null,L=y.next();C!==null&&!L.done;x++,L=y.next()){C.index>x?(R=C,C=null):R=C.sibling;var P=f(p,C,L.value,E);if(P===null){C===null&&(C=R);break}t&&C&&P.alternate===null&&e(p,C),_=a(P,_,x),M===null?A=P:M.sibling=P,M=P,C=R}if(L.done)return n(p,C),_t&&zr(p,x),A;if(C===null){for(;!L.done;x++,L=y.next())L=d(p,L.value,E),L!==null&&(_=a(L,_,x),M===null?A=L:M.sibling=L,M=L);return _t&&zr(p,x),A}for(C=i(p,C);!L.done;x++,L=y.next())L=h(C,p,x,L.value,E),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?x:L.key),_=a(L,_,x),M===null?A=L:M.sibling=L,M=L);return t&&C.forEach(function(N){return e(p,N)}),_t&&zr(p,x),A}function g(p,_,y,E){if(typeof y=="object"&&y!==null&&y.type===Da&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Bo:e:{for(var A=y.key,M=_;M!==null;){if(M.key===A){if(A=y.type,A===Da){if(M.tag===7){n(p,M.sibling),_=r(M,y.props.children),_.return=p,p=_;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===lr&&Hm(A)===M.type){n(p,M.sibling),_=r(M,y.props),_.ref=bs(p,M,y),_.return=p,p=_;break e}n(p,M);break}else e(p,M);M=M.sibling}y.type===Da?(_=ea(y.props.children,p.mode,E,y.key),_.return=p,p=_):(E=Ol(y.type,y.key,y.props,null,p.mode,E),E.ref=bs(p,_,y),E.return=p,p=E)}return s(p);case La:e:{for(M=y.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(p,_.sibling),_=r(_,y.children||[]),_.return=p,p=_;break e}else{n(p,_);break}else e(p,_);_=_.sibling}_=Ic(y,p.mode,E),_.return=p,p=_}return s(p);case lr:return M=y._init,g(p,_,M(y._payload),E)}if(Bs(y))return m(p,_,y,E);if(Ss(y))return S(p,_,y,E);Ko(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(p,_.sibling),_=r(_,y),_.return=p,p=_):(n(p,_),_=Pc(y,p.mode,E),_.return=p,p=_),s(p)):n(p,_)}return g}var rs=C_(!0),R_=C_(!1),ou=Pr(null),lu=null,Va=null,qh=null;function Yh(){qh=Va=lu=null}function $h(t){var e=ou.current;gt(ou),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ja(t,e){lu=t,qh=Va=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},Va===null){if(lu===null)throw Error(se(308));Va=t,lu.dependencies={lanes:0,firstContext:t}}else Va=Va.next=t;return e}var jr=null;function jh(t){jr===null?jr=[t]:jr.push(t)}function P_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}function Gm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,i){var r=t.updateQueue;ur=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;s=0,c=u=l=null,o=a;do{var f=o.lane,h=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,S=o;switch(f=e,h=n,S.tag){case 1:if(m=S.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=Mt({},d,f);break e;case 2:ur=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else h={eventTime:h,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,s|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);aa|=s,t.lanes=s,t.memoizedState=d}}function Wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ro={},yi=Pr(Ro),po=Pr(Ro),mo=Pr(Ro);function Kr(t){if(t===Ro)throw Error(se(174));return t}function Zh(t,e){switch(ht(mo,e),ht(po,t),ht(yi,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nf(e,t)}gt(yi),ht(yi,e)}function as(){gt(yi),gt(po),gt(mo)}function L_(t){Kr(mo.current);var e=Kr(yi.current),n=Nf(e,t.type);e!==n&&(ht(po,t),ht(yi,n))}function Qh(t){po.current===t&&(gt(yi),gt(po))}var St=Pr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function Jh(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var Dl=ji.ReactCurrentDispatcher,Tc=ji.ReactCurrentBatchConfig,ra=0,Et=null,zt=null,Xt=null,fu=!1,js=!1,go=0,uM=0;function Jt(){throw Error(se(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function tp(t,e,n,i,r,a){if(ra=a,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?hM:pM,t=n(i,r),js){a=0;do{if(js=!1,go=0,25<=a)throw Error(se(301));a+=1,Xt=zt=null,e.updateQueue=null,Dl.current=mM,t=n(i,r)}while(js)}if(Dl.current=du,e=zt!==null&&zt.next!==null,ra=0,Xt=zt=Et=null,fu=!1,e)throw Error(se(300));return t}function np(){var t=go!==0;return go=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Yn(){if(zt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Xt===null?Et.memoizedState:Xt.next;if(e!==null)Xt=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function vo(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((ra&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,s=i):l=l.next=d,Et.lanes|=c,aa|=c}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,ai(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,Et.lanes|=a,aa|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);ai(a,e.memoizedState)||(vn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function D_(){}function N_(t,e){var n=Et,i=Yn(),r=e(),a=!ai(i.memoizedState,r);if(a&&(i.memoizedState=r,vn=!0),i=i.queue,ip(k_.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,_o(9,F_.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(se(349));ra&30||U_(n,e,r)}return r}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F_(t,e,n,i){e.value=n,e.getSnapshot=i,O_(e)&&B_(t)}function k_(t,e,n){return n(function(){O_(e)&&B_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function B_(t){var e=Xi(t,1);e!==null&&ri(e,t,1,-1)}function Xm(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=dM.bind(null,Et,t),[e.memoizedState,t]}function _o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z_(){return Yn().memoizedState}function Nl(t,e,n,i){var r=di();Et.flags|=t,r.memoizedState=_o(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=Yn();i=i===void 0?null:i;var a=void 0;if(zt!==null){var s=zt.memoizedState;if(a=s.destroy,i!==null&&ep(i,s.deps)){r.memoizedState=_o(e,n,a,i);return}}Et.flags|=t,r.memoizedState=_o(1|e,n,a,i)}function qm(t,e){return Nl(8390656,8,t,e)}function ip(t,e){return ku(2048,8,t,e)}function V_(t,e){return ku(4,2,t,e)}function H_(t,e){return ku(4,4,t,e)}function G_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,G_.bind(null,e,t),n)}function rp(){}function X_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Y_(t,e,n){return ra&21?(ai(n,e)||(n=Q0(),Et.lanes|=n,aa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function cM(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Tc.transition;Tc.transition={};try{t(!1),e()}finally{st=n,Tc.transition=i}}function $_(){return Yn().memoizedState}function fM(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))K_(e,n);else if(n=P_(t,e,n,i),n!==null){var r=cn();ri(n,t,i,r),Z_(n,e,i)}}function dM(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))K_(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,ai(o,s)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P_(t,e,r,i),n!==null&&(r=cn(),ri(n,t,i,r),Z_(n,e,i))}}function j_(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function K_(t,e){js=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}var du={readContext:qn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},hM={readContext:qn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,G_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=fM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:rp,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=cM.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=di();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),qt===null)throw Error(se(349));ra&30||U_(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,qm(k_.bind(null,i,a,t),[t]),i.flags|=2048,_o(9,F_.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=di(),e=qt.identifierPrefix;if(_t){var n=ki,i=Fi;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pM={readContext:qn,useCallback:X_,useContext:qn,useEffect:ip,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:H_,useMemo:q_,useReducer:bc,useRef:z_,useState:function(){return bc(vo)},useDebugValue:rp,useDeferredValue:function(t){var e=Yn();return Y_(e,zt.memoizedState,t)},useTransition:function(){var t=bc(vo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:$_,unstable_isNewReconciler:!1},mM={readContext:qn,useCallback:X_,useContext:qn,useEffect:ip,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:H_,useMemo:q_,useReducer:Ac,useRef:z_,useState:function(){return Ac(vo)},useDebugValue:rp,useDeferredValue:function(t){var e=Yn();return zt===null?e.memoizedState=t:Y_(e,zt.memoizedState,t)},useTransition:function(){var t=Ac(vo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:$_,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?fa(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Mr(t),a=Bi(i,r);a.payload=e,n!=null&&(a.callback=n),e=Sr(t,a,r),e!==null&&(ri(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Mr(t),a=Bi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Sr(t,a,r),e!==null&&(ri(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=Mr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(ri(e,t,i,n),Ll(e,t,i))}};function Ym(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,a):!0}function Q_(t,e,n){var i=!1,r=Ar,a=e.contextType;return typeof a=="object"&&a!==null?a=qn(a):(r=xn(e)?na:sn.current,i=e.contextTypes,a=(i=i!=null)?ns(t,r):Ar),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function $m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=qn(a):(a=xn(e)?na:sn.current,r.context=ns(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(td(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ou.enqueueReplaceState(r,r.state,null),uu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",i=e;do n+=GS(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gM=typeof WeakMap=="function"?WeakMap:Map;function J_(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pu||(pu=!0,hd=i),id(t,e)},n}function ex(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){id(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function jm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=PM.bind(null,t,e,n),e.then(t,t))}function Km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var vM=ji.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?R_(e,null,n,i):rs(e,t.child,n,i)}function Qm(t,e,n,i,r){n=n.render;var a=e.ref;return ja(e,r),i=tp(t,e,n,i,a,r),n=np(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(_t&&n&&Gh(e),e.flags|=1,un(t,e,i,r),e.child)}function Jm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!dp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,tx(t,e,a,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=wr(a,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(uo(a,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return rd(t,e,n,i,r)}function nx(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ga,Cn),Cn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ga,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,ht(Ga,Cn),Cn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,ht(Ga,Cn),Cn|=i;return un(t,e,r,n),e.child}function ix(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rd(t,e,n,i,r){var a=xn(n)?na:sn.current;return a=ns(e,a),ja(e,r),n=tp(t,e,n,i,a,r),i=np(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(_t&&i&&Gh(e),e.flags|=1,un(t,e,n,r),e.child)}function eg(t,e,n,i,r){if(xn(n)){var a=!0;ru(e)}else a=!1;if(ja(e,r),e.stateNode===null)Ul(t,e),Q_(e,n,i),nd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=xn(n)?na:sn.current,u=ns(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&$m(e,s,i,u),ur=!1;var f=e.memoizedState;s.state=f,uu(e,i,s,r),l=e.memoizedState,o!==i||f!==l||_n.current||ur?(typeof c=="function"&&(td(e,n,c,i),l=e.memoizedState),(o=ur||Ym(e,n,o,i,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,I_(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Qn(e.type,o),s.props=u,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=xn(n)?na:sn.current,l=ns(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==d||f!==l)&&$m(e,s,i,l),ur=!1,f=e.memoizedState,s.state=f,uu(e,i,s,r);var m=e.memoizedState;o!==d||f!==m||_n.current||ur?(typeof h=="function"&&(td(e,n,h,i),m=e.memoizedState),(u=ur||Ym(e,n,u,i,f,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),s.props=i,s.state=m,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,a,r)}function ad(t,e,n,i,r,a){ix(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Bm(e,n,!1),qi(t,e,a);i=e.stateNode,vM.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=rs(e,t.child,null,a),e.child=rs(e,null,o,a)):un(t,e,o,a),e.memoizedState=i.state,r&&Bm(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),Zh(t,e.containerInfo)}function tg(t,e,n,i,r){return is(),Xh(r),e.flags|=256,un(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function ax(t,e,n){var i=e.pendingProps,r=St.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Vu(s,i,0,null),t=ea(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=od(n),e.memoizedState=sd,t):ap(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return _M(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=wr(o,a):(a=ea(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?od(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return a=t.child,t=a.sibling,i=wr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ap(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&Xh(i),rs(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _M(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=Cc(Error(se(422))),Zo(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),a=ea(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&rs(e,t.child,null,s),e.child.memoizedState=od(s),e.memoizedState=sd,a);if(!(e.mode&1))return Zo(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(se(419)),i=Cc(a,i,void 0),Zo(t,e,s,i)}if(o=(s&t.childLanes)!==0,vn||o){if(i=qt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Xi(t,r),ri(i,t,r,-1))}return fp(),i=Cc(Error(se(421))),Zo(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=IM.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,Rn=yr(r.nextSibling),In=e,_t=!0,ei=null,t!==null&&(Bn[zn++]=Fi,Bn[zn++]=ki,Bn[zn++]=ia,Fi=t.id,ki=t.overflow,ia=e),e=ap(e,i.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ed(t.return,e,n)}function Rc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function sx(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(un(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Rc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Rc(e,!0,n,null,a);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),aa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xM(t,e,n){switch(e.tag){case 3:rx(e),is();break;case 5:L_(e);break;case 1:xn(e.type)&&ru(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(ou,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?ax(t,e,n):(ht(St,St.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(t,e,n)}return qi(t,e,n)}var ox,ld,lx,ux;ox=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};lx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(yi.current);var a=null;switch(n){case"input":r=Pf(t,r),i=Pf(t,i),a=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),a=[];break;case"textarea":r=Df(t,r),i=Df(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nu)}Uf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};ux=function(t,e,n,i){n!==i&&(e.flags|=4)};function As(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return xn(e.type)&&iu(),en(e),null;case 3:return i=e.stateNode,as(),gt(_n),gt(sn),Jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(gd(ei),ei=null))),ld(t,e),en(e),null;case 5:Qh(e);var r=Kr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)lx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return en(e),null}if(t=Kr(yi.current),jo(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[mi]=e,i[ho]=a,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Vs.length;r++)mt(Vs[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":fm(i,a),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},mt("invalid",i);break;case"textarea":hm(i,a),mt("invalid",i)}Uf(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&$o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&$o(i.textContent,o,t),r=["children",""+o]):no.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&mt("scroll",i)}switch(n){case"input":zo(i),dm(i,a,!0);break;case"textarea":zo(i),pm(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=nu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[mi]=e,t[ho]=i,ox(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ff(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vs.length;r++)mt(Vs[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":fm(t,i),r=Pf(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":hm(t,i),r=Df(t,i),mt("invalid",t);break;default:r=i}Uf(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?z0(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O0(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(no.hasOwnProperty(a)?l!=null&&a==="onScroll"&&mt("scroll",t):l!=null&&Rh(t,a,l,s))}switch(n){case"input":zo(t),dm(t,i,!1);break;case"textarea":zo(t),pm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Xa(t,!!i.multiple,a,!1):i.defaultValue!=null&&Xa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)ux(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Kr(mo.current),Kr(yi.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(a=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:$o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return en(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))A_(),is(),e.flags|=98560,a=!1;else if(a=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(se(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[mi]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),a=!1}else ei!==null&&(gd(ei),ei=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Vt===0&&(Vt=3):fp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return as(),ld(t,e),t===null&&co(e.stateNode.containerInfo),en(e),null;case 10:return $h(e.type._context),en(e),null;case 17:return xn(e.type)&&iu(),en(e),null;case 19:if(gt(St),a=e.memoizedState,a===null)return en(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)As(a,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cu(t),s!==null){for(e.flags|=128,As(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}a.tail!==null&&Nt()>os&&(e.flags|=128,i=!0,As(a,!1),e.lanes=4194304)}else{if(!i)if(t=cu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!_t)return en(e),null}else 2*Nt()-a.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,i=!0,As(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Nt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return cp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function SM(t,e){switch(Wh(e),e.tag){case 1:return xn(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),gt(_n),gt(sn),Jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return as(),null;case 10:return $h(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var Qo=!1,rn=!1,EM=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ha(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){At(t,e,i)}}var ig=!1;function MM(t,e){if(qf=Jl,t=p_(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(o=s+r),d!==a||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++u===r&&(o=s),f===a&&++c===i&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:t,selectionRange:n},Jl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,g=m.memoizedState,p=e.stateNode,_=p.getSnapshotBeforeUpdate(e.elementType===e.type?S:Qn(e.type,S),g);p.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){At(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return m=ig,ig=!1,m}function Ks(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&ud(e,n,a)}r=r.next}while(r!==i)}}function Bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cx(t){var e=t.alternate;e!==null&&(t.alternate=null,cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ho],delete e[Kf],delete e[aM],delete e[sM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fx(t){return t.tag===5||t.tag===3||t.tag===4}function rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Yt=null,Jn=!1;function er(t,e,n){for(n=n.child;n!==null;)dx(t,e,n),n=n.sibling}function dx(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:rn||Ha(n,e);case 6:var i=Yt,r=Jn;Yt=null,er(t,e,n),Yt=i,Jn=r,Yt!==null&&(Jn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(Jn?(t=Yt,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),oo(t)):Ec(Yt,n.stateNode));break;case 4:i=Yt,r=Jn,Yt=n.stateNode.containerInfo,Jn=!0,er(t,e,n),Yt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&ud(n,e,s),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!rn&&(Ha(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,er(t,e,n),rn=i):er(t,e,n);break;default:er(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EM),e.forEach(function(i){var r=LM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Jn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Jn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(Yt===null)throw Error(se(160));dx(a,s,r),Yt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){At(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hx(e,t),e=e.sibling}function hx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ui(t),i&4){try{Ks(3,t,t.return),Bu(3,t)}catch(S){At(t,t.return,S)}try{Ks(5,t,t.return)}catch(S){At(t,t.return,S)}}break;case 1:$n(e,t),ui(t),i&512&&n!==null&&Ha(n,n.return);break;case 5:if($n(e,t),ui(t),i&512&&n!==null&&Ha(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(S){At(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&U0(r,a),Ff(o,s);var u=Ff(o,a);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?z0(r,d):c==="dangerouslySetInnerHTML"?O0(r,d):c==="children"?io(r,d):Rh(r,c,d,u)}switch(o){case"input":If(r,a);break;case"textarea":F0(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Xa(r,!!a.multiple,h,!1):f!==!!a.multiple&&(a.defaultValue!=null?Xa(r,!!a.multiple,a.defaultValue,!0):Xa(r,!!a.multiple,a.multiple?[]:"",!1))}r[ho]=a}catch(S){At(t,t.return,S)}}break;case 6:if($n(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(S){At(t,t.return,S)}}break;case 3:if($n(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(S){At(t,t.return,S)}break;case 4:$n(e,t),ui(t);break;case 13:$n(e,t),ui(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(lp=Nt())),i&4&&ag(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||c,$n(e,t),rn=u):$n(e,t),ui(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(we=t,c=t.child;c!==null;){for(d=we=c;we!==null;){switch(f=we,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ks(4,f,f.return);break;case 1:Ha(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(S){At(i,n,S)}}break;case 5:Ha(f,f.return);break;case 22:if(f.memoizedState!==null){og(d);continue}}h!==null?(h.return=f,we=h):og(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=B0("display",s))}catch(S){At(t,t.return,S)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){At(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ui(t),i&4&&ag(t);break;case 21:break;default:$n(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var a=rg(t);dd(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=rg(t);fd(t,o,s);break;default:throw Error(se(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wM(t,e,n){we=t,px(t)}function px(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Qo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=Qo;var u=rn;if(Qo=s,(rn=l)&&!u)for(we=r;we!==null;)s=we,l=s.child,s.tag===22&&s.memoizedState!==null?lg(r):l!==null?(l.return=s,we=l):lg(r);for(;a!==null;)we=a,px(a),a=a.sibling;we=r,Qo=o,rn=u}sg(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,we=a):sg(t)}}function sg(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Bu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Wm(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wm(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}rn||e.flags&512&&cd(e)}catch(f){At(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function og(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function lg(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bu(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var a=e.return;try{cd(e)}catch(l){At(e,a,l)}break;case 5:var s=e.return;try{cd(e)}catch(l){At(e,s,l)}}}catch(l){At(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var TM=Math.ceil,hu=ji.ReactCurrentDispatcher,sp=ji.ReactCurrentOwner,Xn=ji.ReactCurrentBatchConfig,Je=0,qt=null,Ot=null,jt=0,Cn=0,Ga=Pr(0),Vt=0,xo=null,aa=0,zu=0,op=0,Zs=null,gn=null,lp=0,os=1/0,Di=null,pu=!1,hd=null,Er=null,Jo=!1,pr=null,mu=0,Qs=0,pd=null,Fl=-1,kl=0;function cn(){return Je&6?Nt():Fl!==-1?Fl:Fl=Nt()}function Mr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:lM.transition!==null?(kl===0&&(kl=Q0()),kl):(t=st,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function ri(t,e,n,i){if(50<Qs)throw Qs=0,pd=null,Error(se(185));bo(t,n,i),(!(Je&2)||t!==qt)&&(t===qt&&(!(Je&2)&&(zu|=n),Vt===4&&fr(t,jt)),yn(t,i),n===1&&Je===0&&!(e.mode&1)&&(os=Nt()+500,Fu&&Ir()))}function yn(t,e){var n=t.callbackNode;lE(t,e);var i=Ql(t,t===qt?jt:0);if(i===0)n!==null&&vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vm(n),e===1)t.tag===0?oM(ug.bind(null,t)):w_(ug.bind(null,t)),iM(function(){!(Je&6)&&Ir()}),n=null;else{switch(J0(i)){case 1:n=Nh;break;case 4:n=K0;break;case 16:n=Zl;break;case 536870912:n=Z0;break;default:n=Zl}n=Ex(n,mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mx(t,e){if(Fl=-1,kl=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(Ka()&&t.callbackNode!==n)return null;var i=Ql(t,t===qt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gu(t,i);else{e=i;var r=Je;Je|=2;var a=vx();(qt!==t||jt!==e)&&(Di=null,os=Nt()+500,Jr(t,e));do try{CM();break}catch(o){gx(t,o)}while(!0);Yh(),hu.current=a,Je=r,Ot!==null?e=0:(qt=null,jt=0,e=Vt)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=md(t,r))),e===1)throw n=xo,Jr(t,0),fr(t,i),yn(t,Nt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!bM(r)&&(e=gu(t,i),e===2&&(a=Vf(t),a!==0&&(i=a,e=md(t,a))),e===1))throw n=xo,Jr(t,0),fr(t,i),yn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Vr(t,gn,Di);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=lp+500-Nt(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jf(Vr.bind(null,t,gn,Di),e);break}Vr(t,gn,Di);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ii(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*TM(i/1960))-i,10<i){t.timeoutHandle=jf(Vr.bind(null,t,gn,Di),i);break}Vr(t,gn,Di);break;case 5:Vr(t,gn,Di);break;default:throw Error(se(329))}}}return yn(t,Nt()),t.callbackNode===n?mx.bind(null,t):null}function md(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=gu(t,e),t!==2&&(e=gn,gn=n,e!==null&&gd(e)),t}function gd(t){gn===null?gn=t:gn.push.apply(gn,t)}function bM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ai(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~op,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function ug(t){if(Je&6)throw Error(se(327));Ka();var e=Ql(t,0);if(!(e&1))return yn(t,Nt()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=md(t,i))}if(n===1)throw n=xo,Jr(t,0),fr(t,e),yn(t,Nt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,gn,Di),yn(t,Nt()),null}function up(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(os=Nt()+500,Fu&&Ir())}}function sa(t){pr!==null&&pr.tag===0&&!(Je&6)&&Ka();var e=Je;Je|=1;var n=Xn.transition,i=st;try{if(Xn.transition=null,st=1,t)return t()}finally{st=i,Xn.transition=n,Je=e,!(Je&6)&&Ir()}}function cp(){Cn=Ga.current,gt(Ga)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nM(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&iu();break;case 3:as(),gt(_n),gt(sn),Jh();break;case 5:Qh(i);break;case 4:as();break;case 13:gt(St);break;case 19:gt(St);break;case 10:$h(i.type._context);break;case 22:case 23:cp()}n=n.return}if(qt=t,Ot=t=wr(t.current,null),jt=Cn=e,Vt=0,xo=null,op=zu=aa=0,gn=Zs=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}jr=null}return t}function gx(t,e){do{var n=Ot;try{if(Yh(),Dl.current=du,fu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fu=!1}if(ra=0,Xt=zt=Et=null,js=!1,go=0,sp.current=null,n===null||n.return===null){Vt=1,xo=e,Ot=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Km(s);if(h!==null){h.flags&=-257,Zm(h,s,o,a,e),h.mode&1&&jm(a,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var S=new Set;S.add(l),e.updateQueue=S}else m.add(l);break e}else{if(!(e&1)){jm(a,u,e),fp();break e}l=Error(se(426))}}else if(_t&&o.mode&1){var g=Km(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Zm(g,s,o,a,e),Xh(ss(l,o));break e}}a=l=ss(l,o),Vt!==4&&(Vt=2),Zs===null?Zs=[a]:Zs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=J_(a,l,e);Gm(a,p);break e;case 1:o=l;var _=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=ex(a,o,e);Gm(a,E);break e}}a=a.return}while(a!==null)}xx(n)}catch(A){e=A,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function vx(){var t=hu.current;return hu.current=du,t===null?du:t}function fp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||!(aa&268435455)&&!(zu&268435455)||fr(qt,jt)}function gu(t,e){var n=Je;Je|=2;var i=vx();(qt!==t||jt!==e)&&(Di=null,Jr(t,e));do try{AM();break}catch(r){gx(t,r)}while(!0);if(Yh(),Je=n,hu.current=i,Ot!==null)throw Error(se(261));return qt=null,jt=0,Vt}function AM(){for(;Ot!==null;)_x(Ot)}function CM(){for(;Ot!==null&&!JS();)_x(Ot)}function _x(t){var e=Sx(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?xx(t):Ot=e,sp.current=null}function xx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SM(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=yM(n,e,Cn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function Vr(t,e,n){var i=st,r=Xn.transition;try{Xn.transition=null,st=1,RM(t,e,n,i)}finally{Xn.transition=r,st=i}return null}function RM(t,e,n,i){do Ka();while(pr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(uE(t,a),t===qt&&(Ot=qt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Ex(Zl,function(){return Ka(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Xn.transition,Xn.transition=null;var s=st;st=1;var o=Je;Je|=4,sp.current=null,MM(t,n),hx(n,t),jE(Yf),Jl=!!qf,Yf=qf=null,t.current=n,wM(n),eE(),Je=o,st=s,Xn.transition=a}else t.current=n;if(Jo&&(Jo=!1,pr=t,mu=r),a=t.pendingLanes,a===0&&(Er=null),iE(n.stateNode),yn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pu)throw pu=!1,t=hd,hd=null,t;return mu&1&&t.tag!==0&&Ka(),a=t.pendingLanes,a&1?t===pd?Qs++:(Qs=0,pd=t):Qs=0,Ir(),null}function Ka(){if(pr!==null){var t=J0(mu),e=Xn.transition,n=st;try{if(Xn.transition=null,st=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,mu=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,we=t.current;we!==null;){var a=we,s=a.child;if(we.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:Ks(8,c,a)}var d=c.child;if(d!==null)d.return=c,we=d;else for(;we!==null;){c=we;var f=c.sibling,h=c.return;if(cx(c),c===u){we=null;break}if(f!==null){f.return=h,we=f;break}we=h}}}var m=a.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}we=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,we=s;else e:for(;we!==null;){if(a=we,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ks(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,we=p;break e}we=a.return}}var _=t.current;for(we=_;we!==null;){s=we;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,we=y;else e:for(s=_;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bu(9,o)}}catch(A){At(o,o.return,A)}if(o===s){we=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,we=E;break e}we=o.return}}if(Je=r,Ir(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{st=n,Xn.transition=e}}return!1}function cg(t,e,n){e=ss(n,e),e=J_(t,e,1),t=Sr(t,e,1),e=cn(),t!==null&&(bo(t,1,e),yn(t,e))}function At(t,e,n){if(t.tag===3)cg(t,t,n);else for(;e!==null;){if(e.tag===3){cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=ss(n,t),t=ex(e,t,1),e=Sr(e,t,1),t=cn(),e!==null&&(bo(e,1,t),yn(e,t));break}}e=e.return}}function PM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(jt&n)===n&&(Vt===4||Vt===3&&(jt&130023424)===jt&&500>Nt()-lp?Jr(t,0):op|=n),yn(t,e)}function yx(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=cn();t=Xi(t,e),t!==null&&(bo(t,e,n),yn(t,n))}function IM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yx(t,n)}function LM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),yx(t,n)}var Sx;Sx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,xM(t,e,n);vn=!!(t.flags&131072)}else vn=!1,_t&&e.flags&1048576&&T_(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=ns(e,sn.current);ja(e,n),r=tp(null,e,i,t,r,n);var a=np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(a=!0,ru(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kh(e),r.updater=Ou,e.stateNode=r,r._reactInternals=e,nd(e,i,t,n),e=ad(null,e,i,!0,a,n)):(e.tag=0,_t&&a&&Gh(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=NM(i),t=Qn(i,t),r){case 0:e=rd(null,e,i,t,n);break e;case 1:e=eg(null,e,i,t,n);break e;case 11:e=Qm(null,e,i,t,n);break e;case 14:e=Jm(null,e,i,Qn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),rd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),eg(t,e,i,r,n);case 3:e:{if(rx(e),t===null)throw Error(se(387));i=e.pendingProps,a=e.memoizedState,r=a.element,I_(t,e),uu(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=ss(Error(se(423)),e),e=tg(t,e,i,n,r);break e}else if(i!==r){r=ss(Error(se(424)),e),e=tg(t,e,i,n,r);break e}else for(Rn=yr(e.stateNode.containerInfo.firstChild),In=e,_t=!0,ei=null,n=R_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),i===r){e=qi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return L_(e),t===null&&Jf(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,$f(i,r)?s=null:a!==null&&$f(i,a)&&(e.flags|=32),ix(t,e),un(t,e,s,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return ax(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=rs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Qm(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,ht(ou,i._currentValue),i._currentValue=s,a!==null)if(ai(a.value,s)){if(a.children===r.children&&!_n.current){e=qi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Bi(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ed(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(se(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ed(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ja(e,n),r=qn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Jm(t,e,i,r,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Ul(t,e),e.tag=1,xn(i)?(t=!0,ru(e)):t=!1,ja(e,n),Q_(e,i,r),nd(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return sx(t,e,n);case 22:return nx(t,e,n)}throw Error(se(156,e.tag))};function Ex(t,e){return j0(t,e)}function DM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new DM(t,e,n,i)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NM(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Lh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")dp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Da:return ea(n.children,r,a,e);case Ph:s=8,r|=8;break;case bf:return t=Wn(12,n,e,r|2),t.elementType=bf,t.lanes=a,t;case Af:return t=Wn(13,n,e,r),t.elementType=Af,t.lanes=a,t;case Cf:return t=Wn(19,n,e,r),t.elementType=Cf,t.lanes=a,t;case L0:return Vu(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P0:s=10;break e;case I0:s=9;break e;case Ih:s=11;break e;case Lh:s=14;break e;case lr:s=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Wn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function ea(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=L0,t.lanes=n,t.stateNode={isHidden:!1},t}function Pc(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,i,r,a,s,o,l){return t=new UM(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Wn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(a),t}function FM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:La,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return Ar;t=t._reactInternals;e:{if(fa(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(xn(n))return M_(t,n,e)}return e}function wx(t,e,n,i,r,a,s,o,l){return t=hp(n,i,!0,t,r,a,s,o,l),t.context=Mx(null),n=t.current,i=cn(),r=Mr(n),a=Bi(i,r),a.callback=e??null,Sr(n,a,r),t.current.lanes=r,bo(t,r,i),yn(t,i),t}function Hu(t,e,n,i){var r=e.current,a=cn(),s=Mr(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,s),t!==null&&(ri(t,r,s,a),Ll(t,r,s)),s}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function kM(){return null}var Tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}Gu.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Hu(t,e,null,null)};Gu.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sa(function(){Hu(null,t,null,null)}),e[Wi]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&r_(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dg(){}function OM(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=vu(s);a.call(u)}}var s=wx(e,i,t,0,null,!1,!1,"",dg);return t._reactRootContainer=s,t[Wi]=s.current,co(t.nodeType===8?t.parentNode:t),sa(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=vu(l);o.call(u)}}var l=hp(t,0,!1,null,null,!1,!1,"",dg);return t._reactRootContainer=l,t[Wi]=l.current,co(t.nodeType===8?t.parentNode:t),sa(function(){Hu(e,l,n,i)}),l}function Xu(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=vu(s);o.call(l)}}Hu(e,s,t,r)}else s=OM(n,e,t,r,i);return vu(s)}e_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(Uh(e,n|1),yn(e,Nt()),!(Je&6)&&(os=Nt()+500,Ir()))}break;case 13:sa(function(){var i=Xi(t,1);if(i!==null){var r=cn();ri(i,t,1,r)}}),pp(t,1)}};Fh=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=cn();ri(e,t,134217728,n)}pp(t,134217728)}};t_=function(t){if(t.tag===13){var e=Mr(t),n=Xi(t,e);if(n!==null){var i=cn();ri(n,t,e,i)}pp(t,e)}};n_=function(){return st};i_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Of=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Uu(i);if(!r)throw Error(se(90));N0(i),If(i,r)}}}break;case"textarea":F0(t,n);break;case"select":e=n.value,e!=null&&Xa(t,!!n.multiple,e,!1)}};G0=up;W0=sa;var BM={usingClientEntryPoint:!1,Events:[Co,ka,Uu,V0,H0,up]},Cs={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zM={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||kM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Iu=el.inject(zM),xi=el}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BM;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(se(200));return FM(t,e,null,n)};Nn.createRoot=function(t,e){if(!gp(t))throw Error(se(299));var n=!1,i="",r=Tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,co(t.nodeType===8?t.parentNode:t),new mp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return sa(t)};Nn.hydrate=function(t,e,n){if(!Wu(e))throw Error(se(200));return Xu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=Tx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=wx(e,null,t,1,n??null,r,!1,a,s),t[Wi]=e.current,co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gu(e)};Nn.render=function(t,e,n){if(!Wu(e))throw Error(se(200));return Xu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(se(40));return t._reactRootContainer?(sa(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Nn.unstable_batchedUpdates=up;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Xu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(t){console.error(t)}}bx(),b0.exports=Nn;var VM=b0.exports,hg=VM;wf.createRoot=hg.createRoot,wf.hydrateRoot=hg.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yo.apply(null,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const pg="popstate";function HM(t){t===void 0&&(t={});function e(r,a){let{pathname:s="/",search:o="",hash:l=""}=da(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),vd("",{pathname:s,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){let s=r.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof a=="string"?a:_u(a))}function i(r,a){vp(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return WM(e,n,i,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GM(){return Math.random().toString(36).substr(2,8)}function mg(t,e){return{usr:t.state,key:t.key,idx:e}}function vd(t,e,n,i){return n===void 0&&(n=null),yo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?da(e):e,{state:n,key:e&&e.key||i||GM()})}function _u(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function da(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function WM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=mr.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(yo({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){o=mr.Pop;let g=c(),p=g==null?null:g-u;u=g,l&&l({action:o,location:S.location,delta:p})}function f(g,p){o=mr.Push;let _=vd(S.location,g,p);n&&n(_,g),u=c()+1;let y=mg(_,u),E=S.createHref(_);try{s.pushState(y,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(E)}a&&l&&l({action:o,location:S.location,delta:1})}function h(g,p){o=mr.Replace;let _=vd(S.location,g,p);n&&n(_,g),u=c();let y=mg(_,u),E=S.createHref(_);s.replaceState(y,"",E),a&&l&&l({action:o,location:S.location,delta:0})}function m(g){let p=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof g=="string"?g:_u(g);return _=_.replace(/ $/,"%20"),Rt(p,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,p)}let S={get action(){return o},get location(){return t(r,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(pg,d),l=g,()=>{r.removeEventListener(pg,d),l=null}},createHref(g){return e(r,g)},createURL:m,encodeLocation(g){let p=m(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:h,go(g){return s.go(g)}};return S}var gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gg||(gg={}));function XM(t,e,n){return n===void 0&&(n="/"),qM(t,e,n)}function qM(t,e,n,i){let r=typeof e=="string"?da(e):e,a=ls(r.pathname||"/",n);if(a==null)return null;let s=Ax(t);YM(s);let o=null,l=rw(a);for(let u=0;o==null&&u<s.length;++u)o=nw(s[u],l);return o}function Ax(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Tr([i,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(Rt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ax(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:ew(u,a.index),routesMeta:c})};return t.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of Cx(a.path))r(a,s,l)}),e}function Cx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=Cx(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function YM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const $M=/^:[\w-]+$/,jM=3,KM=2,ZM=1,QM=10,JM=-2,vg=t=>t==="*";function ew(t,e){let n=t.split("/"),i=n.length;return n.some(vg)&&(i+=JM),e&&(i+=KM),n.filter(r=>!vg(r)).reduce((r,a)=>r+($M.test(a)?jM:a===""?ZM:QM),i)}function tw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function nw(t,e,n){let{routesMeta:i}=t,r={},a="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=a==="/"?e:e.slice(a.length)||"/",d=_d({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:Tr([a,d.pathname]),pathnameBase:ow(Tr([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=Tr([a,d.pathnameBase]))}return s}function _d(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=iw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:f,isOptional:h}=c;if(f==="*"){let S=o[d]||"";s=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const m=o[d];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:t}}function iw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function rw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ls(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function aw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?da(t):t,a;return n?(n=Ix(n),n.startsWith("/")?a=_g(n.substring(1),"/"):a=_g(n,e)):a=e,{pathname:a,search:lw(i),hash:uw(r)}}function _g(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Lc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rx(t,e){let n=sw(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Px(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=da(t):(r=yo({},t),Rt(!r.pathname||!r.pathname.includes("?"),Lc("?","pathname","search",r)),Rt(!r.pathname||!r.pathname.includes("#"),Lc("#","pathname","hash",r)),Rt(!r.search||!r.search.includes("#"),Lc("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=aw(r,o),u=s&&s!=="/"&&s.endsWith("/"),c=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ix=t=>t.replace(/\/\/+/g,"/"),Tr=t=>Ix(t.join("/")),ow=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Lx=["post","put","patch","delete"];new Set(Lx);const fw=["get",...Lx];new Set(fw);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},So.apply(null,arguments)}const qu=he.createContext(null),Dx=he.createContext(null),Lr=he.createContext(null),Yu=he.createContext(null),Dr=he.createContext({outlet:null,matches:[],isDataRoute:!1}),Nx=he.createContext(null);function dw(t,e){let{relative:n}=e===void 0?{}:e;Po()||Rt(!1);let{basename:i,navigator:r}=he.useContext(Lr),{hash:a,pathname:s,search:o}=$u(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Tr([i,s])),r.createHref({pathname:l,search:o,hash:a})}function Po(){return he.useContext(Yu)!=null}function Io(){return Po()||Rt(!1),he.useContext(Yu).location}function Ux(t){he.useContext(Lr).static||he.useLayoutEffect(t)}function hw(){let{isDataRoute:t}=he.useContext(Dr);return t?Aw():pw()}function pw(){Po()||Rt(!1);let t=he.useContext(qu),{basename:e,future:n,navigator:i}=he.useContext(Lr),{matches:r}=he.useContext(Dr),{pathname:a}=Io(),s=JSON.stringify(Rx(r,n.v7_relativeSplatPath)),o=he.useRef(!1);return Ux(()=>{o.current=!0}),he.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let d=Px(u,JSON.parse(s),a,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Tr([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,s,a,t])}function mw(){let{matches:t}=he.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function $u(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=he.useContext(Lr),{matches:r}=he.useContext(Dr),{pathname:a}=Io(),s=JSON.stringify(Rx(r,i.v7_relativeSplatPath));return he.useMemo(()=>Px(t,JSON.parse(s),a,n==="path"),[t,s,a,n])}function gw(t,e){return vw(t,e)}function vw(t,e,n,i){Po()||Rt(!1);let{navigator:r}=he.useContext(Lr),{matches:a}=he.useContext(Dr),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Io(),c;if(e){var d;let g=typeof e=="string"?da(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||Rt(!1),c=g}else c=u;let f=c.pathname||"/",h=f;if(l!=="/"){let g=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(g.length).join("/")}let m=XM(t,{pathname:h}),S=Ew(m&&m.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Tr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Tr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n,i);return e&&S?he.createElement(Yu.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:mr.Pop}},S):S}function _w(){let t=bw(),e=cw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:r},n):null,null)}const xw=he.createElement(_w,null);class yw extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?he.createElement(Dr.Provider,{value:this.props.routeContext},he.createElement(Nx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sw(t){let{routeContext:e,match:n,children:i}=t,r=he.useContext(qu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),he.createElement(Dr.Provider,{value:e},i)}function Ew(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let c=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);c>=0||Rt(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:h}=n,m=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let h,m=!1,S=null,g=null;n&&(h=o&&d.route.id?o[d.route.id]:void 0,S=d.route.errorElement||xw,l&&(u<0&&f===0?(Cw("route-fallback"),m=!0,g=null):u===f&&(m=!0,g=d.route.hydrateFallbackElement||null)));let p=e.concat(s.slice(0,f+1)),_=()=>{let y;return h?y=S:m?y=g:d.route.Component?y=he.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,he.createElement(Sw,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?he.createElement(yw,{location:n.location,revalidation:n.revalidation,component:S,error:h,children:_(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):_()},null)}var Fx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fx||{}),kx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kx||{});function Mw(t){let e=he.useContext(qu);return e||Rt(!1),e}function ww(t){let e=he.useContext(Dx);return e||Rt(!1),e}function Tw(t){let e=he.useContext(Dr);return e||Rt(!1),e}function Ox(t){let e=Tw(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function bw(){var t;let e=he.useContext(Nx),n=ww(),i=Ox();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Aw(){let{router:t}=Mw(Fx.UseNavigateStable),e=Ox(kx.UseNavigateStable),n=he.useRef(!1);return Ux(()=>{n.current=!0}),he.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,So({fromRouteId:e},a)))},[t,e])}const xg={};function Cw(t,e,n){xg[t]||(xg[t]=!0)}function Rw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Hr(t){Rt(!1)}function Pw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=mr.Pop,navigator:a,static:s=!1,future:o}=t;Po()&&Rt(!1);let l=e.replace(/^\/*/,"/"),u=he.useMemo(()=>({basename:l,navigator:a,static:s,future:So({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=da(i));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:m="default"}=i,S=he.useMemo(()=>{let g=ls(c,l);return g==null?null:{location:{pathname:g,search:d,hash:f,state:h,key:m},navigationType:r}},[l,c,d,f,h,m,r]);return S==null?null:he.createElement(Lr.Provider,{value:u},he.createElement(Yu.Provider,{children:n,value:S}))}function Iw(t){let{children:e,location:n}=t;return gw(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return he.Children.forEach(t,(i,r)=>{if(!he.isValidElement(i))return;let a=[...e,r];if(i.type===he.Fragment){n.push.apply(n,xd(i.props.children,a));return}i.type!==Hr&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=xd(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xu.apply(null,arguments)}function Bx(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Lw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Dw(t,e){return t.button===0&&(!e||e==="_self")&&!Lw(t)}const Nw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Uw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Fw="6";try{window.__reactRouterVersion=Fw}catch{}const kw=he.createContext({isTransitioning:!1}),Ow="startTransition",yg=PS[Ow];function Bw(t){let{basename:e,children:n,future:i,window:r}=t,a=he.useRef();a.current==null&&(a.current=HM({window:r,v5Compat:!0}));let s=a.current,[o,l]=he.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},c=he.useCallback(d=>{u&&yg?yg(()=>l(d)):l(d)},[l,u]);return he.useLayoutEffect(()=>s.listen(c),[s,c]),he.useEffect(()=>Rw(i),[i]),he.createElement(Pw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yu=he.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,f=Bx(e,Nw),{basename:h}=he.useContext(Lr),m,S=!1;if(typeof u=="string"&&Vw.test(u)&&(m=u,zw))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),A=ls(E.pathname,h);E.origin===y.origin&&A!=null?u=A+E.search+E.hash:S=!0}catch{}let g=dw(u,{relative:r}),p=Gw(u,{replace:s,state:o,target:l,preventScrollReset:c,relative:r,viewTransition:d});function _(y){i&&i(y),y.defaultPrevented||p(y)}return he.createElement("a",xu({},f,{href:m||g,onClick:S||a?i:_,ref:n,target:l}))}),Sg=he.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:s=!1,style:o,to:l,viewTransition:u,children:c}=e,d=Bx(e,Uw),f=$u(l,{relative:d.relative}),h=Io(),m=he.useContext(Dx),{navigator:S,basename:g}=he.useContext(Lr),p=m!=null&&Ww(f)&&u===!0,_=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,y=h.pathname,E=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(y=y.toLowerCase(),E=E?E.toLowerCase():null,_=_.toLowerCase()),E&&g&&(E=ls(E,g)||E);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let M=y===_||!s&&y.startsWith(_)&&y.charAt(A)==="/",C=E!=null&&(E===_||!s&&E.startsWith(_)&&E.charAt(_.length)==="/"),x={isActive:M,isPending:C,isTransitioning:p},R=M?i:void 0,L;typeof a=="function"?L=a(x):L=[a,M?"active":null,C?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(x):o;return he.createElement(yu,xu({},d,{"aria-current":R,className:L,ref:n,style:P,to:l,viewTransition:u}),typeof c=="function"?c(x):c)});var yd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yd||(yd={}));var Eg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Eg||(Eg={}));function Hw(t){let e=he.useContext(qu);return e||Rt(!1),e}function Gw(t,e){let{target:n,replace:i,state:r,preventScrollReset:a,relative:s,viewTransition:o}=e===void 0?{}:e,l=hw(),u=Io(),c=$u(t,{relative:s});return he.useCallback(d=>{if(Dw(d,n)){d.preventDefault();let f=i!==void 0?i:_u(u)===_u(c);l(t,{replace:f,state:r,preventScrollReset:a,relative:s,viewTransition:o})}},[u,l,c,i,r,n,t,a,s,o])}function Ww(t,e){e===void 0&&(e={});let n=he.useContext(kw);n==null&&Rt(!1);let{basename:i}=Hw(yd.useViewTransitionState),r=$u(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=ls(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=ls(n.nextLocation.pathname,i)||n.nextLocation.pathname;return _d(r.pathname,s)!=null||_d(r.pathname,a)!=null}const Xw=[{to:"/",label:"About"},{to:"/projects",label:"Projects"},{to:"/blog",label:"Blog"},{to:"/playground",label:"Playground"}];function qw(){return ie.jsx("header",{className:"nav",children:ie.jsxs("div",{className:"nav-inner",children:[ie.jsx(Sg,{to:"/",className:"nav-mark",children:"Noah Aguillon"}),ie.jsx("ul",{className:"nav-links",children:Xw.map(t=>ie.jsx("li",{children:ie.jsx(Sg,{to:t.to,end:t.to==="/",className:({isActive:e})=>e?"active":"",children:t.label})},t.to))})]})})}function Wa(t){return"/PersonalWebsite/"+t}function Yw(){return ie.jsxs("div",{className:"wrap",children:[ie.jsx("p",{className:"eyebrow",children:"Hello"}),ie.jsx("h1",{className:"page-title",children:"Hi! I'm Noah Aguillon — I build the occasional project, and like to experiment with new technologies."}),ie.jsx("img",{className:"wrap-image",src:`${Wa("images/noahA.jpeg")}`,alt:"Noah Aguillon"}),ie.jsxs("div",{className:"about-body",children:[ie.jsx("p",{children:"I graduated from the University of Texas at Austin in 2026. During my time in college, I found a passion for building web applications, working with databases, and configuring cloud infrastructure. I've had multiple opportunities to work on projects with peers that have allowed me to develop my skills in team environments, and I look forward to continuing to learn and grow as a developer."}),ie.jsxs("p",{children:["What's on my docket as of late: building a web application that compiles chatlogs to create a storylike representation of the conversations. Check it out on the ",ie.jsx("a",{href:"/projects",children:"projects page"}),"."]})]}),ie.jsxs("div",{className:"about-links",children:[ie.jsx("a",{href:"mailto:noahaguillon03@gmail.com",children:"Email"}),ie.jsx("a",{href:"https://github.com/Scylthren",target:"_blank",rel:"noreferrer",children:"GitHub"}),ie.jsx("a",{href:"https://www.linkedin.com/in/noah-aguillon",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),ie.jsx("a",{href:Wa("public/Noah_Aguillon_Resume.pdf"),download:"Noah_Aguillon_Resume.pdf",target:"_blank",rel:"noreferrer",children:"Resume"})]})]})}const Mg=[{title:"Neurodex",description:"Helped build and deploy a web apllication that allows users to determine what neural networks are best for their use case. Learned about React, Node.js, google cloud platform, and data visualization techniques.",link:"https://gitlab.com/matthewlittle3.14159/cs373-idb/-/tree/642210ebd0816f1b5b378219a011dac460328434/",tags:["React","Node","Google Cloud Platform","D3.js"],date:"2025"},{title:"Duelist",description:"Created a mobile game using Swift and SwiftUI. Learned about game development, user interface design, and mobile app deployment.",link:"https://github.com/Vexivai/Duelist",tags:["Swift","SwiftUI","iOS"],date:"2025"},{title:"D&D book archive",description:"Built a web application that compiles chatlogs to create a storylike representation of the conversations.",link:"https://github.com/Scylthren/FightClub",tags:["React","Node.js","D3.js","three.js"],date:"2026"},{title:"Library Database - WIP",description:"Built a library management system to organize and track books in my own library. Learned about database design, SQL, and user interface development.",link:"https://github.com/Scylthren/LibraryDatabase",tags:["Python","SQL","Tkinter"],date:"2026"},{title:"Personal Website",description:"Created a personal website to showcase my projects and skills. Learned about React, Vite, and deployment techniques.",link:"https://github.com/Scylthren/PersonalWebsite",tags:["React","Vite","Deployment"],date:"2026"}];function $w(){return ie.jsxs("div",{className:"wrap",children:[ie.jsx("p",{className:"eyebrow",children:"Work"}),ie.jsx("h1",{className:"page-title",children:"Projects"}),ie.jsx("p",{className:"lede",children:"A running list of things I've built, roughly newest first."}),ie.jsx("div",{className:"catalog",children:Mg.map((t,e)=>ie.jsxs("div",{className:"catalog-item",children:[ie.jsxs("div",{className:"catalog-num",children:["NO. ",String(Mg.length-e).padStart(3,"0")]}),ie.jsxs("div",{children:[ie.jsx("h2",{className:"catalog-title",children:ie.jsx("a",{className:"catalog-title-link",href:t.link,target:"_blank",rel:"noreferrer",children:t.title})}),ie.jsx("p",{className:"catalog-desc",children:t.description}),ie.jsxs("div",{className:"catalog-meta",children:[t.tags.map(n=>ie.jsx("span",{className:"tag",children:n},n)),ie.jsx("span",{className:"catalog-date",children:t.date})]})]})]},t.title))})]})}const jw=`---
title: I live
date: 2026-08-27
excerpt: Lost Wisdom & Progress
---

Salutations, I have lost all previously gained wisdom as my wisdom teeth have been taken from me. I was recuperating for a few days, which is the reason for my lack of progress. That being said, here's what's new:

# Playground

There are now popups when you click on the buttons on the playground page. Really only for the first button, but that's the first thing I’ve implemented. Along with that, the buttons now display a preview gif on hover if they have one and an image if not. This was real fun to figure out, and I swapped between react-modal and just creating my own popup, which is what I ended up doing.

The first lab (What I’m calling the playground segments) I implemented was a spotlight that follows the mouse, to be used for the movie club website. This was kinda gross at first, as I used the mouse's absolute positions before I discovered useMouse from React, which simplified everything very nicely.

# Going Forward

There will be tiny segments or showcases of what I’m trying in the playground, or just things as fun small projects. Some will be implemented into a future site or are simply projects I don’t deem big enough to have their own space for.

I keep referencing the movie club website, and its ideas are circulating; however, there's a smaller project I would like to complete first that compiles a text log into a book, so I’ve been using pandas and the like for the processing and such. It's of a Dungeons and Dragons chat, so I’ll have to figure out how to progress with that and determine the best way to show it, maybe have some stats, who knows.

# Bug of the day

Bug of the day, everyone's favorite segment, today's showcase:

\`\`\`
import Modal from "react-modal";
modal.setAppElement("#root");
\`\`\`

Not really a bug per se; however, attempting to configure the modal was annoying and failing to pop up like I wanted, so I just scrapped it and made my own popup function.

Going forward, I should save and make a mental note whenever I run into something I deem annoying; good idea, me.`,Kw=`---
title: Books
date: 2026-08-28
excerpt: D&D book archive
---

I know I’ve been talking about the movie club website and all that pizzazz. However, there was a project I’ve had for years that I've always wanted to do, and now that I have some downtime between being employed (unfortunately), I’ve decided to take a crack at it.

# Concept

I have some old chat logs from my D&D group where we talked about an alternate universe of our characters, and we did some roleplaying and just general tomfoolery. While this is extremely nerdy, it was great. From those chat logs, I want to attempt to compile a story in a readable format outside of simple messages.

My sights are set high, and I know it’ll take a bit of understanding pandas a little more to make it work correctly, but I’m excited. I’m doubly excited due to finding three.js, which is a 3d modeling library. This would allow me to create a virtual book that can be read from. It's still getting planned out, but the basics of development have been laid out. I just need to get more comfortable with three.js and hopefully use react-three/fiber in the future, but that's only once I get accustomed. I’m unsure if I would even need the performance boost, but who am I to shy away from learning when able.

# Bug of the day

Not realizing that Vite needs to bind to different ports, still getting used to using it; however, looking back on it, that seems like a trivial thing to know. When trying to test the D&D book website, I broke the website and failed to test it.

### Disclaimer

I know that it seems that I've been putting the movie club website on pause, and I'm just jumping from project to project. It isn't the greatest look, but once I finish this project, I will surely finish the movie club website. That, or whenever I need a break from one project, I switch; also viable. Who knows, really.
`,Zw=`---
title: Databases & More!
date: 2026-08-20
excerpt: Movie Club db
---

During college, a group of friends and I decided to create a movie club, and it was a fun experience, especially during finals season. That being said, the nerd in me decided I would create a website to not only choose what movies we were gonna watch but also to store the stats of the movies we had already seen. I made the Excel spreadsheet before we ended it. However, as movie club lives on in our hearts, I've decided to have a website to look back on the movies we'd seen for ease of access and just a passion project.

On that note, I have been creating a DB for the Excel so I can make it into a CSV and just have that for the backend. Here's my idea so far, which I think and hope is in 3NF.

![Movie_Db](/images/Movie_Club_Db.png)


`,Qw=`---
title: A proper demonstration
date: 2026-08-21
excerpt: Movie Club website
---

I've been continuing to plan and see what kind of construction I'd need to do for the Movie Club website to flow. Quite frankly, I'm unsure how I'd like to proceed. On the one hand, I want to demonstrate I can properly deploy the frontend and backend of a website while showcasing my ability to create a DB and use api's. On the other hand, I would need a service to host said site and would prefer to have a job before I do (looking at Railway). Yet I feel that if I preload the DB into the JSON rather than have a backend to make the site static, it isn't a proper demonstration of my skills. 

Decisions, Decisions.

Afterthought: Shout out to Sean for pointing out some spelling mistakes. I'll actually double-check what I write from here on out. I'm also unsure if I should learn to use Netlify so that I don't continuously need to deploy, or if that's negligible with a site this small.
`,Jw=`---
title: Docs
date: 2026-08-30
excerpt: Reading Documentation
---

All I did today was read three.js documentation and implement some small projects. One of which you can see on the project page. I’m unsure how far I wanna delve into the three.js library on account of I understand the basics since I’ve worked with computer graphics prior, so it's half a refresher, half not having to implement it from scratch.

The main thing I’m focused on understanding is the libraries that abstract away things like the camera and scene and such for a smoother codebase and better performance.

Fun fact: Reading documentation is tedious but definitely rewarding work once you start to understand the principles and can move forward with your own code.

# Bug of the day

I didn’t set a proper pixel height for the spinning cube demo to appear on the popup, so it simply wouldn’t show no matter what I did. Easy fix, but definitely gave me a hiccup.`,e1=`---
title: Hello, world
date: 2026-08-18
excerpt: And so it begins
---

Recently graduated with a Computer Science degree from UT Austin, now looking for a job. 

This blog is mostly here to document my journey, fix up some projects I have left unfinished, and start some new ones.
Hopefully I'll blog about having a job soon enough.        
`,t1=`---
title: Modeling
date: 2026-08-29
excerpt: Three.js
---

I changed a couple of things on the site, such as what projects to display and what order to display them in, and Updated the about page to include my resume for better viewing. Going through this job hunt is teaching me more and more about flaunting what I’ve done and what I’m good at, which is not at all something I’m used to. That being said, I am trying to put myself out there more and more and develop myself to such an extent that I get an offer.

# Learning Three.js

Honestly, this is a pretty daunting task for what I want to implement. Think I’ll create a little tester for the playground to familiarize myself with the library. Shout out to the single computer graphics course I took in college. Hopefully it’ll give me the foundation to create the best product I can.

# Bug of the day

Wasn’t a coding-intensive day as it was an applying-intensive day; however, I did see a spider, so I’ll loosely count that as the bug of the day (Arachnid of the day?)`,n1=`---
title: Mondays
date: 2026-08-24
excerpt: Case of the Mondays 
---

I don’t usually see myself not doing the blog on weekends; however, celebrating my sister's birthday took up most of my time. That being said, we’re back and better than ever.

Concerning my decisions last time, I think I’ll simply create the Movie Club DB and bake it into the website to make it static, mostly because I would like to complete it and have it as a fond memory. That being said, I will explain and demonstrate either in comments or in the read me, how I would’ve gone about it in a front end - back end service. I could also create the front end & back end without actually hosting them, but that feels boring and lame.

On a more exciting note, you might have realized there's a new tab on this website. Playground. ooo ahhh. This is a tab for me to post little bits of code or functionality that don’t feel like a complete project but rather just for fun. Something like making a calculator from year 1 cs class would go here. Obviously much more advanced, hopefully, than that. I will also probably use this to test ideas that I would incorporate into other projects, such as a spotlight, equalizer for music, and more!

While doing all this coding, I was considering posting about a bug of the day since I plan on blogging every day. Unsure if this would showcase my capabilities or my inabilities depending on how trivial the bug is. However, today's bug of the day:

\`\`\`
export function getAssetPath(path) {
return import.meta.env.BASE_URL + path;
}
\`\`\`

You may be thinking, this is completely fine for a helper method. With that, I agree; however, for an embarrassing amount of time I simply forgot to put the function keyword beforehand. Why it slipped my mind is unknown, but it then proceeded to break everything. Was quite the scare.`,i1=Object.assign({"../content/posts/I-live.md":jw,"../content/posts/books.md":Kw,"../content/posts/databases.md":Zw,"../content/posts/demonstration.md":Qw,"../content/posts/docs.md":Jw,"../content/posts/hello-world.md":e1,"../content/posts/modeling.md":t1,"../content/posts/mondays.md":n1});function r1(t){const e=t.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!e)return{meta:{},body:t};const[,n,i]=e,r={};return n.split(`
`).forEach(a=>{const s=a.indexOf(":");if(s===-1)return;const o=a.slice(0,s).trim();let l=a.slice(s+1).trim();(l.startsWith('"')&&l.endsWith('"')||l.startsWith("'")&&l.endsWith("'"))&&(l=l.slice(1,-1)),r[o]=l}),{meta:r,body:i.trim()}}function a1(t){return t.replace(/!\[([^\]]*)\]\(\/(?!\/)/g,"![$1](/PersonalWebsite/")}function wg(t){return t.split("/").pop().replace(/\.md$/,"")}function zx(){return Object.entries(i1).map(([t,e])=>{const{meta:n,body:i}=r1(e);return{slug:wg(t),title:n.title||wg(t),date:n.date||"",excerpt:n.excerpt||"",body:a1(i)}}).sort((t,e)=>t.date<e.date?1:-1)}function s1(t){return zx().find(e=>e.slug===t)}function o1(){const t=zx();return ie.jsxs("div",{className:"wrap",children:[ie.jsx("p",{className:"eyebrow",children:"Writing"}),ie.jsx("h1",{className:"page-title",children:"Blog"}),ie.jsx("p",{className:"lede",children:"Notes, write-ups, and things I've learned."}),ie.jsx("div",{className:"catalog",children:t.map((e,n)=>ie.jsxs("div",{className:"catalog-item",children:[ie.jsxs("div",{className:"catalog-num",children:["NO. ",String(t.length-n).padStart(3,"0")]}),ie.jsxs("div",{children:[ie.jsx("h2",{className:"catalog-title",children:ie.jsx(yu,{className:"catalog-title-link",to:`/blog/${e.slug}`,children:e.title})}),ie.jsx("p",{className:"catalog-desc",children:e.excerpt}),ie.jsx("div",{className:"catalog-meta",children:ie.jsx("span",{className:"catalog-date",children:e.date})})]})]},e.slug))})]})}function l1(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const u1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f1={};function Tg(t,e){return(f1.jsx?c1:u1).test(t)}const d1=/[ \t\n\f\r]/g;function h1(t){return typeof t=="object"?t.type==="text"?bg(t.value):!1:bg(t)}function bg(t){return t.replace(d1,"")===""}class Lo{constructor(e,n,i){this.normal=n,this.property=e,i&&(this.space=i)}}Lo.prototype.normal={};Lo.prototype.property={};Lo.prototype.space=void 0;function Vx(t,e){const n={},i={};for(const r of t)Object.assign(n,r.property),Object.assign(i,r.normal);return new Lo(n,i,e)}function Sd(t){return t.toLowerCase()}class Mn{constructor(e,n){this.attribute=n,this.property=e}}Mn.prototype.attribute="";Mn.prototype.booleanish=!1;Mn.prototype.boolean=!1;Mn.prototype.commaOrSpaceSeparated=!1;Mn.prototype.commaSeparated=!1;Mn.prototype.defined=!1;Mn.prototype.mustUseProperty=!1;Mn.prototype.number=!1;Mn.prototype.overloadedBoolean=!1;Mn.prototype.property="";Mn.prototype.spaceSeparated=!1;Mn.prototype.space=void 0;let p1=0;const ke=ha(),kt=ha(),Ed=ha(),le=ha(),ct=ha(),ta=ha(),An=ha();function ha(){return 2**++p1}const Md=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:kt,commaOrSpaceSeparated:An,commaSeparated:ta,number:le,overloadedBoolean:Ed,spaceSeparated:ct},Symbol.toStringTag,{value:"Module"})),Dc=Object.keys(Md);class _p extends Mn{constructor(e,n,i,r){let a=-1;if(super(e,n),Ag(this,"space",r),typeof i=="number")for(;++a<Dc.length;){const s=Dc[a];Ag(this,Dc[a],(i&Md[s])===Md[s])}}}_p.prototype.defined=!0;function Ag(t,e,n){n&&(t[e]=n)}function gs(t){const e={},n={};for(const[i,r]of Object.entries(t.properties)){const a=new _p(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(a.mustUseProperty=!0),e[i]=a,n[Sd(i)]=i,n[Sd(a.attribute)]=i}return new Lo(e,n,t.space)}const Hx=gs({properties:{ariaActiveDescendant:null,ariaAtomic:kt,ariaAutoComplete:null,ariaBusy:kt,ariaChecked:kt,ariaColCount:le,ariaColIndex:le,ariaColSpan:le,ariaControls:ct,ariaCurrent:null,ariaDescribedBy:ct,ariaDetails:null,ariaDisabled:kt,ariaDropEffect:ct,ariaErrorMessage:null,ariaExpanded:kt,ariaFlowTo:ct,ariaGrabbed:kt,ariaHasPopup:null,ariaHidden:kt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ct,ariaLevel:le,ariaLive:null,ariaModal:kt,ariaMultiLine:kt,ariaMultiSelectable:kt,ariaOrientation:null,ariaOwns:ct,ariaPlaceholder:null,ariaPosInSet:le,ariaPressed:kt,ariaReadOnly:kt,ariaRelevant:null,ariaRequired:kt,ariaRoleDescription:ct,ariaRowCount:le,ariaRowIndex:le,ariaRowSpan:le,ariaSelected:kt,ariaSetSize:le,ariaSort:null,ariaValueMax:le,ariaValueMin:le,ariaValueNow:le,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Gx(t,e){return e in t?t[e]:e}function Wx(t,e){return Gx(t,e.toLowerCase())}const m1=gs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ta,acceptCharset:ct,accessKey:ct,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alpha:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:ct,autoFocus:ke,autoPlay:ke,blocking:ct,capture:null,charSet:null,checked:ke,cite:null,className:ct,closedBy:null,colorSpace:null,cols:le,colSpan:le,command:null,commandFor:null,content:null,contentEditable:kt,controls:ke,controlsList:ct,coords:le|ta,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:Ed,draggable:kt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:ct,height:le,hidden:Ed,high:le,href:null,hrefLang:null,htmlFor:ct,httpEquiv:ct,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:ct,itemRef:ct,itemScope:ke,itemType:ct,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:le,pattern:null,ping:ct,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:ct,required:ke,reversed:ke,rows:le,rowSpan:le,sandbox:ct,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootCustomElementRegistry:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shadowRootSerializable:ke,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:kt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:kt,width:le,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ct,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:kt,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ke,disablePictureInPicture:ke,disableRemotePlayback:ke,exportParts:ta,part:ct,prefix:null,property:null,results:le,security:null,unselectable:null},space:"html",transform:Wx}),g1=gs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:An,accentHeight:le,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:le,amplitude:le,arabicForm:null,ascent:le,attributeName:null,attributeType:null,azimuth:le,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:le,by:null,calcMode:null,capHeight:le,className:ct,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:le,diffuseConstant:le,direction:null,display:null,dur:null,divisor:le,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:le,enableBackground:null,end:null,event:null,exponent:le,externalResourcesRequired:null,fill:null,fillOpacity:le,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ta,g2:ta,glyphName:ta,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:le,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:le,horizOriginX:le,horizOriginY:le,id:null,ideographic:le,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:le,k:le,k1:le,k2:le,k3:le,k4:le,kernelMatrix:An,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:le,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:le,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:le,overlineThickness:le,paintOrder:null,panose1:null,path:null,pathLength:le,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ct,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:le,pointsAtY:le,pointsAtZ:le,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:An,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:An,rev:An,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:An,requiredFeatures:An,requiredFonts:An,requiredFormats:An,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:le,specularExponent:le,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:le,strikethroughThickness:le,string:null,stroke:null,strokeDashArray:An,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:le,strokeOpacity:le,strokeWidth:null,style:null,surfaceScale:le,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:An,tabIndex:le,tableValues:null,target:null,targetX:le,targetY:le,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:An,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:le,underlineThickness:le,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:le,values:null,vAlphabetic:le,vMathematical:le,vectorEffect:null,vHanging:le,vIdeographic:le,version:null,vertAdvY:le,vertOriginX:le,vertOriginY:le,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:le,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Gx}),Xx=gs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),qx=gs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Wx}),Yx=gs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),v1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},_1=/[A-Z]/g,Cg=/-[a-z]/g,x1=/^data[-\w.:]+$/i;function y1(t,e){const n=Sd(e);let i=e,r=Mn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&x1.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(Cg,E1);i="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!Cg.test(a)){let s=a.replace(_1,S1);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=_p}return new r(i,e)}function S1(t){return"-"+t.toLowerCase()}function E1(t){return t.charAt(1).toUpperCase()}const M1=Vx([Hx,m1,Xx,qx,Yx],"html"),xp=Vx([Hx,g1,Xx,qx,Yx],"svg");function w1(t){return t.join(" ").trim()}var yp={},Rg=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,T1=/\n/g,b1=/^\s*/,A1=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,C1=/^:\s*/,R1=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,P1=/^[;\s]*/,I1=/^\s+|\s+$/g,L1=`
`,Pg="/",Ig="*",Xr="",D1="comment",N1="declaration";function U1(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(m){var S=m.match(T1);S&&(n+=S.length);var g=m.lastIndexOf(L1);i=~g?m.length-g:i+m.length}function a(){var m={line:n,column:i};return function(S){return S.position=new s(m),u(),S}}function s(m){this.start=m,this.end={line:n,column:i},this.source=e.source}s.prototype.content=t;function o(m){var S=new Error(e.source+":"+n+":"+i+": "+m);if(S.reason=m,S.filename=e.source,S.line=n,S.column=i,S.source=t,!e.silent)throw S}function l(m){var S=m.exec(t);if(S){var g=S[0];return r(g),t=t.slice(g.length),S}}function u(){l(b1)}function c(m){var S;for(m=m||[];S=d();)S!==!1&&m.push(S);return m}function d(){var m=a();if(!(Pg!=t.charAt(0)||Ig!=t.charAt(1))){for(var S=2;Xr!=t.charAt(S)&&(Ig!=t.charAt(S)||Pg!=t.charAt(S+1));)++S;if(S+=2,Xr===t.charAt(S-1))return o("End of comment missing");var g=t.slice(2,S-2);return i+=2,r(g),t=t.slice(S),i+=2,m({type:D1,comment:g})}}function f(){var m=a(),S=l(A1);if(S){if(d(),!l(C1))return o("property missing ':'");var g=l(R1),p=m({type:N1,property:Lg(S[0].replace(Rg,Xr)),value:g?Lg(g[0].replace(Rg,Xr)):Xr});return l(P1),p}}function h(){var m=[];c(m);for(var S;S=f();)S!==!1&&(m.push(S),c(m));return m}return u(),h()}function Lg(t){return t?t.replace(I1,Xr):Xr}var F1=U1,k1=Yl&&Yl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(yp,"__esModule",{value:!0});yp.default=B1;const O1=k1(F1);function B1(t,e){let n=null;if(!t||typeof t!="string")return n;const i=(0,O1.default)(t),r=typeof e=="function";return i.forEach(a=>{if(a.type!=="declaration")return;const{property:s,value:o}=a;r?e(s,o,a):o&&(n=n||{},n[s]=o)}),n}var ju={};Object.defineProperty(ju,"__esModule",{value:!0});ju.camelCase=void 0;var z1=/^--[a-zA-Z0-9_-]+$/,V1=/-([a-z])/g,H1=/^[^-]+$/,G1=/^-(webkit|moz|ms|o|khtml)-/,W1=/^-(ms)-/,X1=function(t){return!t||H1.test(t)||z1.test(t)},q1=function(t,e){return e.toUpperCase()},Dg=function(t,e){return"".concat(e,"-")},Y1=function(t,e){return e===void 0&&(e={}),X1(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(W1,Dg):t=t.replace(G1,Dg),t.replace(V1,q1))};ju.camelCase=Y1;var $1=Yl&&Yl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},j1=$1(yp),K1=ju;function wd(t,e){var n={};return!t||typeof t!="string"||(0,j1.default)(t,function(i,r){i&&r&&(n[(0,K1.camelCase)(i,e)]=r)}),n}wd.default=wd;var Z1=wd;const Q1=Eh(Z1),$x=jx("end"),Sp=jx("start");function jx(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function J1(t){const e=Sp(t),n=$x(t);if(e&&n)return{start:e,end:n}}function Js(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ng(t.position):"start"in t||"end"in t?Ng(t):"line"in t||"column"in t?Td(t):""}function Td(t){return Ug(t&&t.line)+":"+Ug(t&&t.column)}function Ng(t){return Td(t&&t.start)+"-"+Td(t&&t.end)}function Ug(t){return t&&typeof t=="number"?t:1}class on extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",a={},s=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof e=="string"?r=e:!a.cause&&e&&(s=!0,r=e.message,a.cause=e),!a.ruleId&&!a.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?a.ruleId=i:(a.source=i.slice(0,l),a.ruleId=i.slice(l+1))}if(!a.place&&a.ancestors&&a.ancestors){const l=a.ancestors[a.ancestors.length-1];l&&(a.place=l.position)}const o=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=o?o.line:void 0,this.name=Js(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=s&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}on.prototype.file="";on.prototype.name="";on.prototype.reason="";on.prototype.message="";on.prototype.stack="";on.prototype.column=void 0;on.prototype.line=void 0;on.prototype.ancestors=void 0;on.prototype.cause=void 0;on.prototype.fatal=void 0;on.prototype.place=void 0;on.prototype.ruleId=void 0;on.prototype.source=void 0;const Ep={}.hasOwnProperty,eT=new Map,tT=/[A-Z]/g,nT=new Set(["table","tbody","thead","tfoot","tr"]),iT=new Set(["td","th"]),Kx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function rT(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=dT(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=fT(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?xp:M1,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},a=Zx(r,t,void 0);return a&&typeof a!="string"?a:r.create(t,r.Fragment,{children:a||void 0},void 0)}function Zx(t,e,n){if(e.type==="element")return aT(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return sT(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return lT(t,e,n);if(e.type==="mdxjsEsm")return oT(t,e);if(e.type==="root")return uT(t,e,n);if(e.type==="text")return cT(t,e)}function aT(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=xp,t.schema=r),t.ancestors.push(e);const a=Jx(t,e.tagName,!1),s=hT(t,e);let o=wp(t,e);return nT.has(e.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!h1(l):!0})),Qx(t,s,a,e),Mp(s,o),t.ancestors.pop(),t.schema=i,t.create(e,a,s,n)}function sT(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}Eo(t,e.position)}function oT(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);Eo(t,e.position)}function lT(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=xp,t.schema=r),t.ancestors.push(e);const a=e.name===null?t.Fragment:Jx(t,e.name,!0),s=pT(t,e),o=wp(t,e);return Qx(t,s,a,e),Mp(s,o),t.ancestors.pop(),t.schema=i,t.create(e,a,s,n)}function uT(t,e,n){const i={};return Mp(i,wp(t,e)),t.create(e,t.Fragment,i,n)}function cT(t,e){return e.value}function Qx(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function Mp(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function fT(t,e,n){return i;function i(r,a,s,o){const u=Array.isArray(s.children)?n:e;return o?u(a,s,o):u(a,s)}}function dT(t,e){return n;function n(i,r,a,s){const o=Array.isArray(a.children),l=Sp(i);return e(r,a,s,o,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function hT(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Ep.call(e.properties,r)){const a=mT(t,r,e.properties[r]);if(a){const[s,o]=a;t.tableCellAlignToStyle&&s==="align"&&typeof o=="string"&&iT.has(e.tagName)?i=o:n[s]=o}}if(i){const a=n.style||(n.style={});a[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function pT(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const a=i.data.estree.body[0];a.type;const s=a.expression;s.type;const o=s.properties[0];o.type,Object.assign(n,t.evaluater.evaluateExpression(o.argument))}else Eo(t,e.position);else{const r=i.name;let a;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const o=i.value.data.estree.body[0];o.type,a=t.evaluater.evaluateExpression(o.expression)}else Eo(t,e.position);else a=i.value===null?!0:i.value;n[r]=a}return n}function wp(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:eT;for(;++i<e.children.length;){const a=e.children[i];let s;if(t.passKeys){const l=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(l){const u=r.get(l)||0;s=l+"-"+u,r.set(l,u+1)}}const o=Zx(t,a,s);o!==void 0&&n.push(o)}return n}function mT(t,e,n){const i=y1(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?l1(n):w1(n)),i.property==="style"){let r=typeof n=="object"?n:gT(t,String(n));return t.stylePropertyNameCase==="css"&&(r=vT(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?v1[i.property]||i.property:i.attribute,n]}}function gT(t,e){try{return Q1(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const i=n,r=new on("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=Kx+"#cannot-parse-style-attribute",r}}function Jx(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let a=-1,s;for(;++a<r.length;){const o=Tg(r[a])?{type:"Identifier",name:r[a]}:{type:"Literal",value:r[a]};s=s?{type:"MemberExpression",object:s,property:o,computed:!!(a&&o.type==="Literal"),optional:!1}:o}i=s}else i=Tg(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Ep.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);Eo(t)}function Eo(t,e){const n=new on("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Kx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function vT(t){const e={};let n;for(n in t)Ep.call(t,n)&&(e[_T(n)]=t[n]);return e}function _T(t){let e=t.replace(tT,xT);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function xT(t){return"-"+t.toLowerCase()}const Nc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},yT={};function ST(t,e){const n=yT,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return ey(t,i,r)}function ey(t,e,n){if(ET(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Fg(t.children,e,n)}return Array.isArray(t)?Fg(t,e,n):""}function Fg(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=ey(t[r],e,n);return i.join("")}function ET(t){return!!(t&&typeof t=="object")}const kg=document.createElement("i");function Tp(t){const e="&"+t+";";kg.innerHTML=e;const n=kg.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function wi(t,e,n,i){const r=t.length;let a=0,s;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(e,n),t.splice(...s);else for(n&&t.splice(e,n);a<i.length;)s=i.slice(a,a+1e4),s.unshift(e,0),t.splice(...s),a+=1e4,e+=1e4}function Vn(t,e){return t.length>0?(wi(t,t.length,0,e),t):e}const Og={}.hasOwnProperty;function MT(t){const e={};let n=-1;for(;++n<t.length;)wT(e,t[n]);return e}function wT(t,e){let n;for(n in e){const r=(Og.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n];let s;if(a)for(s in a){Og.call(r,s)||(r[s]=[]);const o=a[s];TT(r[s],Array.isArray(o)?o:o?[o]:[])}}}function TT(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);wi(t,0,0,i)}function ty(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Za(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const gi=Nr(/[A-Za-z]/),Pn=Nr(/[\dA-Za-z]/),bT=Nr(/[#-'*+\--9=?A-Z^-~]/);function bd(t){return t!==null&&(t<32||t===127)}const Ad=Nr(/\d/),AT=Nr(/[\dA-Fa-f]/),CT=Nr(/[!-/:-@[-`{-~]/);function Fe(t){return t!==null&&t<-2}function Sn(t){return t!==null&&(t<0||t===32)}function tt(t){return t===-2||t===-1||t===32}const RT=Nr(new RegExp("\\p{P}|\\p{S}","u")),PT=Nr(/\s/);function Nr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function vs(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const a=t.charCodeAt(n);let s="";if(a===37&&Pn(t.charCodeAt(n+1))&&Pn(t.charCodeAt(n+2)))r=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(s=String.fromCharCode(a));else if(a>55295&&a<57344){const o=t.charCodeAt(n+1);a<56320&&o>56319&&o<57344?(s=String.fromCharCode(a,o),r=1):s="�"}else s=String.fromCharCode(a);s&&(e.push(t.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function pt(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let a=0;return s;function s(l){return tt(l)?(t.enter(n),o(l)):e(l)}function o(l){return tt(l)&&a++<r?(t.consume(l),o):(t.exit(n),e(l))}}const IT={tokenize:LT};function LT(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),pt(t,e,"linePrefix")}function r(o){return t.enter("paragraph"),a(o)}function a(o){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(o)}function s(o){if(o===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(o);return}return Fe(o)?(t.consume(o),t.exit("chunkText"),a):(t.consume(o),s)}}const DT={tokenize:NT},Bg={tokenize:UT};function NT(t){const e=this,n=[];let i=0,r,a,s;return o;function o(y){if(i<n.length){const E=n[i];return e.containerState=E[1],t.attempt(E[0].continuation,l,u)(y)}return u(y)}function l(y){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&_();const E=e.events.length;let A=E,M;for(;A--;)if(e.events[A][0]==="exit"&&e.events[A][1].type==="chunkFlow"){M=e.events[A][1].end;break}p(i);let C=E;for(;C<e.events.length;)e.events[C][1].end={...M},C++;return wi(e.events,A+1,0,e.events.slice(E)),e.events.length=C,u(y)}return o(y)}function u(y){if(i===n.length){if(!r)return f(y);if(r.currentConstruct&&r.currentConstruct.concrete)return m(y);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Bg,c,d)(y)}function c(y){return r&&_(),p(i),f(y)}function d(y){return e.parser.lazy[e.now().line]=i!==n.length,s=e.now().offset,m(y)}function f(y){return e.containerState={},t.attempt(Bg,h,m)(y)}function h(y){return i++,n.push([e.currentConstruct,e.containerState]),f(y)}function m(y){if(y===null){r&&_(),p(0),t.consume(y);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:a}),S(y)}function S(y){if(y===null){g(t.exit("chunkFlow"),!0),p(0),t.consume(y);return}return Fe(y)?(t.consume(y),g(t.exit("chunkFlow")),i=0,e.interrupt=void 0,o):(t.consume(y),S)}function g(y,E){const A=e.sliceStream(y);if(E&&A.push(null),y.previous=a,a&&(a.next=y),a=y,r.defineSkip(y.start),r.write(A),e.parser.lazy[y.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<s&&(!r.events[M][1].end||r.events[M][1].end.offset>s))return;const C=e.events.length;let x=C,R,L;for(;x--;)if(e.events[x][0]==="exit"&&e.events[x][1].type==="chunkFlow"){if(R){L=e.events[x][1].end;break}R=!0}for(p(i),M=C;M<e.events.length;)e.events[M][1].end={...L},M++;wi(e.events,x+1,0,e.events.slice(C)),e.events.length=M}}function p(y){let E=n.length;for(;E-- >y;){const A=n[E];e.containerState=A[1],A[0].exit.call(e,t)}n.length=y}function _(){r.write([null]),a=void 0,r=void 0,e.containerState._closeFlow=void 0}}function UT(t,e,n){return pt(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function zg(t){if(t===null||Sn(t)||PT(t))return 1;if(RT(t))return 2}function bp(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const a=t[r].resolveAll;a&&!i.includes(a)&&(e=a(e,n),i.push(a))}return e}const Cd={name:"attention",resolveAll:FT,tokenize:kT};function FT(t,e){let n=-1,i,r,a,s,o,l,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const d={...t[i][1].end},f={...t[n][1].start};Vg(d,-l),Vg(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...t[i][1].end}},o={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:f},a={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...o.end}},t[i][1].end={...s.start},t[n][1].start={...o.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=Vn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=Vn(u,[["enter",r,e],["enter",s,e],["exit",s,e],["enter",a,e]]),u=Vn(u,bp(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=Vn(u,[["exit",a,e],["enter",o,e],["exit",o,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=Vn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,wi(t,i-1,n-i+3,u),n=i+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function kT(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=zg(i);let a;return s;function s(l){return a=l,t.enter("attentionSequence"),o(l)}function o(l){if(l===a)return t.consume(l),o;const u=t.exit("attentionSequence"),c=zg(l),d=!c||c===2&&r||n.includes(l),f=!r||r===2&&c||n.includes(i);return u._open=!!(a===42?d:d&&(r||!f)),u._close=!!(a===42?f:f&&(c||!d)),e(l)}}function Vg(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const OT={name:"autolink",tokenize:BT};function BT(t,e,n){let i=0;return r;function r(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return gi(h)?(t.consume(h),s):h===64?n(h):u(h)}function s(h){return h===43||h===45||h===46||Pn(h)?(i=1,o(h)):u(h)}function o(h){return h===58?(t.consume(h),i=0,l):(h===43||h===45||h===46||Pn(h))&&i++<32?(t.consume(h),o):(i=0,u(h))}function l(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||bd(h)?n(h):(t.consume(h),l)}function u(h){return h===64?(t.consume(h),c):bT(h)?(t.consume(h),u):n(h)}function c(h){return Pn(h)?d(h):n(h)}function d(h){return h===46?(t.consume(h),i=0,c):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):f(h)}function f(h){if((h===45||Pn(h))&&i++<63){const m=h===45?f:d;return t.consume(h),m}return n(h)}}const Ku={partial:!0,tokenize:zT};function zT(t,e,n){return i;function i(a){return tt(a)?pt(t,r,"linePrefix")(a):r(a)}function r(a){return a===null||Fe(a)?e(a):n(a)}}const ny={continuation:{tokenize:HT},exit:GT,name:"blockQuote",tokenize:VT};function VT(t,e,n){const i=this;return r;function r(s){if(s===62){const o=i.containerState;return o.open||(t.enter("blockQuote",{_container:!0}),o.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(s),t.exit("blockQuoteMarker"),a}return n(s)}function a(s){return tt(s)?(t.enter("blockQuotePrefixWhitespace"),t.consume(s),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(s))}}function HT(t,e,n){const i=this;return r;function r(s){return tt(s)?pt(t,a,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):a(s)}function a(s){return t.attempt(ny,e,n)(s)}}function GT(t){t.exit("blockQuote")}const iy={name:"characterEscape",tokenize:WT};function WT(t,e,n){return i;function i(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),r}function r(a){return CT(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}const ry={name:"characterReference",tokenize:XT};function XT(t,e,n){const i=this;let r=0,a,s;return o;function o(d){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),l}function l(d){return d===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(d),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),a=31,s=Pn,c(d))}function u(d){return d===88||d===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(d),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,s=AT,c):(t.enter("characterReferenceValue"),a=7,s=Ad,c(d))}function c(d){if(d===59&&r){const f=t.exit("characterReferenceValue");return s===Pn&&!Tp(i.sliceSerialize(f))?n(d):(t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return s(d)&&r++<a?(t.consume(d),c):n(d)}}const Hg={partial:!0,tokenize:YT},Gg={concrete:!0,name:"codeFenced",tokenize:qT};function qT(t,e,n){const i=this,r={partial:!0,tokenize:A};let a=0,s=0,o;return l;function l(M){return u(M)}function u(M){const C=i.events[i.events.length-1];return a=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,o=M,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),c(M)}function c(M){return M===o?(s++,t.consume(M),c):s<3?n(M):(t.exit("codeFencedFenceSequence"),tt(M)?pt(t,d,"whitespace")(M):d(M))}function d(M){return M===null||Fe(M)?(t.exit("codeFencedFence"),i.interrupt?e(M):t.check(Hg,S,E)(M)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),f(M))}function f(M){return M===null||Fe(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),d(M)):tt(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),pt(t,h,"whitespace")(M)):M===96&&M===o?n(M):(t.consume(M),f)}function h(M){return M===null||Fe(M)?d(M):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(M))}function m(M){return M===null||Fe(M)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),d(M)):M===96&&M===o?n(M):(t.consume(M),m)}function S(M){return t.attempt(r,E,g)(M)}function g(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),p}function p(M){return a>0&&tt(M)?pt(t,_,"linePrefix",a+1)(M):_(M)}function _(M){return M===null||Fe(M)?t.check(Hg,S,E)(M):(t.enter("codeFlowValue"),y(M))}function y(M){return M===null||Fe(M)?(t.exit("codeFlowValue"),_(M)):(t.consume(M),y)}function E(M){return t.exit("codeFenced"),e(M)}function A(M,C,x){let R=0;return L;function L(F){return M.enter("lineEnding"),M.consume(F),M.exit("lineEnding"),P}function P(F){return M.enter("codeFencedFence"),tt(F)?pt(M,N,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):N(F)}function N(F){return F===o?(M.enter("codeFencedFenceSequence"),q(F)):x(F)}function q(F){return F===o?(R++,M.consume(F),q):R>=s?(M.exit("codeFencedFenceSequence"),tt(F)?pt(M,Q,"whitespace")(F):Q(F)):x(F)}function Q(F){return F===null||Fe(F)?(M.exit("codeFencedFence"),C(F)):x(F)}}}function YT(t,e,n){const i=this;return r;function r(s){return s===null?n(s):(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),a)}function a(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}const Uc={name:"codeIndented",tokenize:jT},$T={partial:!0,tokenize:KT};function jT(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),pt(t,a,"linePrefix",5)(u)}function a(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):Fe(u)?t.attempt($T,s,l)(u):(t.enter("codeFlowValue"),o(u))}function o(u){return u===null||Fe(u)?(t.exit("codeFlowValue"),s(u)):(t.consume(u),o)}function l(u){return t.exit("codeIndented"),e(u)}}function KT(t,e,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):Fe(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r):pt(t,a,"linePrefix",5)(s)}function a(s){const o=i.events[i.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(s):Fe(s)?r(s):n(s)}}const ZT={name:"codeText",previous:JT,resolve:QT,tokenize:eb};function QT(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function JT(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function eb(t,e,n){let i=0,r,a;return s;function s(d){return t.enter("codeText"),t.enter("codeTextSequence"),o(d)}function o(d){return d===96?(t.consume(d),i++,o):(t.exit("codeTextSequence"),l(d))}function l(d){return d===null?n(d):d===32?(t.enter("space"),t.consume(d),t.exit("space"),l):d===96?(a=t.enter("codeTextSequence"),r=0,c(d)):Fe(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||Fe(d)?(t.exit("codeTextData"),l(d)):(t.consume(d),u)}function c(d){return d===96?(t.consume(d),r++,c):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(d)):(a.type="codeTextData",u(d))}}class tb{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const a=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Rs(this.left,i),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Rs(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Rs(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Rs(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Rs(this.left,n.reverse())}}}function Rs(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function ay(t){const e={};let n=-1,i,r,a,s,o,l,u;const c=new tb(t);for(;++n<c.length;){for(;n in e;)n=e[n];if(i=c.get(n),n&&i[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,a=0,a<l.length&&l[a][1].type==="lineEndingBlank"&&(a+=2),a<l.length&&l[a][1].type==="content"))for(;++a<l.length&&l[a][1].type!=="content";)l[a][1].type==="chunkText"&&(l[a][1]._isInFirstContentOfListItem=!0,a++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,nb(c,n)),n=e[n],u=!0);else if(i[1]._container){for(a=n,r=void 0;a--;)if(s=c.get(a),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=a);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;r&&(i[1].end={...c.get(r)[1].start},o=c.slice(r,n),o.unshift(i),c.splice(r,n-r+1,o))}}return wi(t,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function nb(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const a=[];let s=n._tokenizer;s||(s=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const o=s.events,l=[],u={};let c,d,f=-1,h=n,m=0,S=0;const g=[S];for(;h;){for(;t.get(++r)[1]!==h;);a.push(r),h._tokenizer||(c=i.sliceStream(h),h.next||c.push(null),d&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(c),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++f<o.length;)o[f][0]==="exit"&&o[f-1][0]==="enter"&&o[f][1].type===o[f-1][1].type&&o[f][1].start.line!==o[f][1].end.line&&(S=f+1,g.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):g.pop(),f=g.length;f--;){const p=o.slice(g[f],g[f+1]),_=a.pop();l.push([_,_+p.length-1]),t.splice(_,2,p)}for(l.reverse(),f=-1;++f<l.length;)u[m+l[f][0]]=m+l[f][1],m+=l[f][1]-l[f][0]-1;return u}const ib={resolve:ab,tokenize:sb},rb={partial:!0,tokenize:ob};function ab(t){return ay(t),t}function sb(t,e){let n;return i;function i(o){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(o)}function r(o){return o===null?a(o):Fe(o)?t.check(rb,s,a)(o):(t.consume(o),r)}function a(o){return t.exit("chunkContent"),t.exit("content"),e(o)}function s(o){return t.consume(o),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function ob(t,e,n){const i=this;return r;function r(s){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),pt(t,a,"linePrefix")}function a(s){if(s===null||Fe(s))return n(s);const o=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(s):t.interrupt(i.parser.constructs.flow,n,e)(s)}}function sy(t,e,n,i,r,a,s,o,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return d;function d(p){return p===60?(t.enter(i),t.enter(r),t.enter(a),t.consume(p),t.exit(a),f):p===null||p===32||p===41||bd(p)?n(p):(t.enter(i),t.enter(s),t.enter(o),t.enter("chunkString",{contentType:"string"}),S(p))}function f(p){return p===62?(t.enter(a),t.consume(p),t.exit(a),t.exit(r),t.exit(i),e):(t.enter(o),t.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(t.exit("chunkString"),t.exit(o),f(p)):p===null||p===60||Fe(p)?n(p):(t.consume(p),p===92?m:h)}function m(p){return p===60||p===62||p===92?(t.consume(p),h):h(p)}function S(p){return!c&&(p===null||p===41||Sn(p))?(t.exit("chunkString"),t.exit(o),t.exit(s),t.exit(i),e(p)):c<u&&p===40?(t.consume(p),c++,S):p===41?(t.consume(p),c--,S):p===null||p===32||p===40||bd(p)?n(p):(t.consume(p),p===92?g:S)}function g(p){return p===40||p===41||p===92?(t.consume(p),S):S(p)}}function oy(t,e,n,i,r,a){const s=this;let o=0,l;return u;function u(h){return t.enter(i),t.enter(r),t.consume(h),t.exit(r),t.enter(a),c}function c(h){return o>999||h===null||h===91||h===93&&!l||h===94&&!o&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):h===93?(t.exit(a),t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):Fe(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||Fe(h)||o++>999?(t.exit("chunkString"),c(h)):(t.consume(h),l||(l=!tt(h)),h===92?f:d)}function f(h){return h===91||h===92||h===93?(t.consume(h),o++,d):d(h)}}function ly(t,e,n,i,r,a){let s;return o;function o(f){return f===34||f===39||f===40?(t.enter(i),t.enter(r),t.consume(f),t.exit(r),s=f===40?41:f,l):n(f)}function l(f){return f===s?(t.enter(r),t.consume(f),t.exit(r),t.exit(i),e):(t.enter(a),u(f))}function u(f){return f===s?(t.exit(a),l(s)):f===null?n(f):Fe(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),pt(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===s||f===null||Fe(f)?(t.exit("chunkString"),u(f)):(t.consume(f),f===92?d:c)}function d(f){return f===s||f===92?(t.consume(f),c):c(f)}}function eo(t,e){let n;return i;function i(r){return Fe(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):tt(r)?pt(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const lb={name:"definition",tokenize:cb},ub={partial:!0,tokenize:fb};function cb(t,e,n){const i=this;let r;return a;function a(h){return t.enter("definition"),s(h)}function s(h){return oy.call(i,t,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function o(h){return r=Za(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),l):n(h)}function l(h){return Sn(h)?eo(t,u)(h):u(h)}function u(h){return sy(t,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function c(h){return t.attempt(ub,d,d)(h)}function d(h){return tt(h)?pt(t,f,"whitespace")(h):f(h)}function f(h){return h===null||Fe(h)?(t.exit("definition"),i.parser.defined.push(r),e(h)):n(h)}}function fb(t,e,n){return i;function i(o){return Sn(o)?eo(t,r)(o):n(o)}function r(o){return ly(t,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function a(o){return tt(o)?pt(t,s,"whitespace")(o):s(o)}function s(o){return o===null||Fe(o)?e(o):n(o)}}const db={name:"hardBreakEscape",tokenize:hb};function hb(t,e,n){return i;function i(a){return t.enter("hardBreakEscape"),t.consume(a),r}function r(a){return Fe(a)?(t.exit("hardBreakEscape"),e(a)):n(a)}}const pb={name:"headingAtx",resolve:mb,tokenize:gb};function mb(t,e){let n=t.length-2,i=3,r,a;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},a={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},wi(t,i,n-i+1,[["enter",r,e],["enter",a,e],["exit",a,e],["exit",r,e]])),t}function gb(t,e,n){let i=0;return r;function r(c){return t.enter("atxHeading"),a(c)}function a(c){return t.enter("atxHeadingSequence"),s(c)}function s(c){return c===35&&i++<6?(t.consume(c),s):c===null||Sn(c)?(t.exit("atxHeadingSequence"),o(c)):n(c)}function o(c){return c===35?(t.enter("atxHeadingSequence"),l(c)):c===null||Fe(c)?(t.exit("atxHeading"),e(c)):tt(c)?pt(t,o,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function l(c){return c===35?(t.consume(c),l):(t.exit("atxHeadingSequence"),o(c))}function u(c){return c===null||c===35||Sn(c)?(t.exit("atxHeadingText"),o(c)):(t.consume(c),u)}}const vb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wg=["pre","script","style","textarea"],_b={concrete:!0,name:"htmlFlow",resolveTo:Sb,tokenize:Eb},xb={partial:!0,tokenize:wb},yb={partial:!0,tokenize:Mb};function Sb(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function Eb(t,e,n){const i=this;let r,a,s,o,l;return u;function u(I){return c(I)}function c(I){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(I),d}function d(I){return I===33?(t.consume(I),f):I===47?(t.consume(I),a=!0,S):I===63?(t.consume(I),r=3,i.interrupt?e:b):gi(I)?(t.consume(I),s=String.fromCharCode(I),g):n(I)}function f(I){return I===45?(t.consume(I),r=2,h):I===91?(t.consume(I),r=5,o=0,m):gi(I)?(t.consume(I),r=4,i.interrupt?e:b):n(I)}function h(I){return I===45?(t.consume(I),i.interrupt?e:b):n(I)}function m(I){const ze="CDATA[";return I===ze.charCodeAt(o++)?(t.consume(I),o===ze.length?i.interrupt?e:N:m):n(I)}function S(I){return gi(I)?(t.consume(I),s=String.fromCharCode(I),g):n(I)}function g(I){if(I===null||I===47||I===62||Sn(I)){const ze=I===47,Be=s.toLowerCase();return!ze&&!a&&Wg.includes(Be)?(r=1,i.interrupt?e(I):N(I)):vb.includes(s.toLowerCase())?(r=6,ze?(t.consume(I),p):i.interrupt?e(I):N(I)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(I):a?_(I):y(I))}return I===45||Pn(I)?(t.consume(I),s+=String.fromCharCode(I),g):n(I)}function p(I){return I===62?(t.consume(I),i.interrupt?e:N):n(I)}function _(I){return tt(I)?(t.consume(I),_):L(I)}function y(I){return I===47?(t.consume(I),L):I===58||I===95||gi(I)?(t.consume(I),E):tt(I)?(t.consume(I),y):L(I)}function E(I){return I===45||I===46||I===58||I===95||Pn(I)?(t.consume(I),E):A(I)}function A(I){return I===61?(t.consume(I),M):tt(I)?(t.consume(I),A):y(I)}function M(I){return I===null||I===60||I===61||I===62||I===96?n(I):I===34||I===39?(t.consume(I),l=I,C):tt(I)?(t.consume(I),M):x(I)}function C(I){return I===l?(t.consume(I),l=null,R):I===null||Fe(I)?n(I):(t.consume(I),C)}function x(I){return I===null||I===34||I===39||I===47||I===60||I===61||I===62||I===96||Sn(I)?A(I):(t.consume(I),x)}function R(I){return I===47||I===62||tt(I)?y(I):n(I)}function L(I){return I===62?(t.consume(I),P):n(I)}function P(I){return I===null||Fe(I)?N(I):tt(I)?(t.consume(I),P):n(I)}function N(I){return I===45&&r===2?(t.consume(I),K):I===60&&r===1?(t.consume(I),V):I===62&&r===4?(t.consume(I),te):I===63&&r===3?(t.consume(I),b):I===93&&r===5?(t.consume(I),$):Fe(I)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(xb,oe,q)(I)):I===null||Fe(I)?(t.exit("htmlFlowData"),q(I)):(t.consume(I),N)}function q(I){return t.check(yb,Q,oe)(I)}function Q(I){return t.enter("lineEnding"),t.consume(I),t.exit("lineEnding"),F}function F(I){return I===null||Fe(I)?q(I):(t.enter("htmlFlowData"),N(I))}function K(I){return I===45?(t.consume(I),b):N(I)}function V(I){return I===47?(t.consume(I),s="",B):N(I)}function B(I){if(I===62){const ze=s.toLowerCase();return Wg.includes(ze)?(t.consume(I),te):N(I)}return gi(I)&&s.length<8?(t.consume(I),s+=String.fromCharCode(I),B):N(I)}function $(I){return I===93?(t.consume(I),b):N(I)}function b(I){return I===62?(t.consume(I),te):I===45&&r===2?(t.consume(I),b):N(I)}function te(I){return I===null||Fe(I)?(t.exit("htmlFlowData"),oe(I)):(t.consume(I),te)}function oe(I){return t.exit("htmlFlow"),e(I)}}function Mb(t,e,n){const i=this;return r;function r(s){return Fe(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),a):n(s)}function a(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}function wb(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Ku,e,n)}}const Tb={name:"htmlText",tokenize:bb};function bb(t,e,n){const i=this;let r,a,s;return o;function o(b){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(b),l}function l(b){return b===33?(t.consume(b),u):b===47?(t.consume(b),A):b===63?(t.consume(b),y):gi(b)?(t.consume(b),x):n(b)}function u(b){return b===45?(t.consume(b),c):b===91?(t.consume(b),a=0,m):gi(b)?(t.consume(b),_):n(b)}function c(b){return b===45?(t.consume(b),h):n(b)}function d(b){return b===null?n(b):b===45?(t.consume(b),f):Fe(b)?(s=d,V(b)):(t.consume(b),d)}function f(b){return b===45?(t.consume(b),h):d(b)}function h(b){return b===62?K(b):b===45?f(b):d(b)}function m(b){const te="CDATA[";return b===te.charCodeAt(a++)?(t.consume(b),a===te.length?S:m):n(b)}function S(b){return b===null?n(b):b===93?(t.consume(b),g):Fe(b)?(s=S,V(b)):(t.consume(b),S)}function g(b){return b===93?(t.consume(b),p):S(b)}function p(b){return b===62?K(b):b===93?(t.consume(b),p):S(b)}function _(b){return b===null||b===62?K(b):Fe(b)?(s=_,V(b)):(t.consume(b),_)}function y(b){return b===null?n(b):b===63?(t.consume(b),E):Fe(b)?(s=y,V(b)):(t.consume(b),y)}function E(b){return b===62?K(b):y(b)}function A(b){return gi(b)?(t.consume(b),M):n(b)}function M(b){return b===45||Pn(b)?(t.consume(b),M):C(b)}function C(b){return Fe(b)?(s=C,V(b)):tt(b)?(t.consume(b),C):K(b)}function x(b){return b===45||Pn(b)?(t.consume(b),x):b===47||b===62||Sn(b)?R(b):n(b)}function R(b){return b===47?(t.consume(b),K):b===58||b===95||gi(b)?(t.consume(b),L):Fe(b)?(s=R,V(b)):tt(b)?(t.consume(b),R):K(b)}function L(b){return b===45||b===46||b===58||b===95||Pn(b)?(t.consume(b),L):P(b)}function P(b){return b===61?(t.consume(b),N):Fe(b)?(s=P,V(b)):tt(b)?(t.consume(b),P):R(b)}function N(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(t.consume(b),r=b,q):Fe(b)?(s=N,V(b)):tt(b)?(t.consume(b),N):(t.consume(b),Q)}function q(b){return b===r?(t.consume(b),r=void 0,F):b===null?n(b):Fe(b)?(s=q,V(b)):(t.consume(b),q)}function Q(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||Sn(b)?R(b):(t.consume(b),Q)}function F(b){return b===47||b===62||Sn(b)?R(b):n(b)}function K(b){return b===62?(t.consume(b),t.exit("htmlTextData"),t.exit("htmlText"),e):n(b)}function V(b){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),B}function B(b){return tt(b)?pt(t,$,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):$(b)}function $(b){return t.enter("htmlTextData"),s(b)}}const Ap={name:"labelEnd",resolveAll:Pb,resolveTo:Ib,tokenize:Lb},Ab={tokenize:Db},Cb={tokenize:Nb},Rb={tokenize:Ub};function Pb(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&wi(t,0,t.length,n),t}function Ib(t,e){let n=t.length,i=0,r,a,s,o;for(;n--;)if(r=t[n][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:t[a][1].type==="labelLink"?"link":"image",start:{...t[a][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[a][1].start},end:{...t[s][1].end}},c={type:"labelText",start:{...t[a+i+2][1].end},end:{...t[s-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=Vn(o,t.slice(a+1,a+i+3)),o=Vn(o,[["enter",c,e]]),o=Vn(o,bp(e.parser.constructs.insideSpan.null,t.slice(a+i+4,s-3),e)),o=Vn(o,[["exit",c,e],t[s-2],t[s-1],["exit",u,e]]),o=Vn(o,t.slice(s+1)),o=Vn(o,[["exit",l,e]]),wi(t,a,t.length,o),t}function Lb(t,e,n){const i=this;let r=i.events.length,a,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){a=i.events[r][1];break}return o;function o(f){return a?a._inactive?d(f):(s=i.parser.defined.includes(Za(i.sliceSerialize({start:a.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelEnd"),l):n(f)}function l(f){return f===40?t.attempt(Ab,c,s?c:d)(f):f===91?t.attempt(Cb,c,s?u:d)(f):s?c(f):d(f)}function u(f){return t.attempt(Rb,c,d)(f)}function c(f){return e(f)}function d(f){return a._balanced=!0,n(f)}}function Db(t,e,n){return i;function i(d){return t.enter("resource"),t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),r}function r(d){return Sn(d)?eo(t,a)(d):a(d)}function a(d){return d===41?c(d):sy(t,s,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return Sn(d)?eo(t,l)(d):c(d)}function o(d){return n(d)}function l(d){return d===34||d===39||d===40?ly(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return Sn(d)?eo(t,c)(d):c(d)}function c(d){return d===41?(t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),t.exit("resource"),e):n(d)}}function Nb(t,e,n){const i=this;return r;function r(o){return oy.call(i,t,a,s,"reference","referenceMarker","referenceString")(o)}function a(o){return i.parser.defined.includes(Za(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(o):n(o)}function s(o){return n(o)}}function Ub(t,e,n){return i;function i(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),r}function r(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}const Fb={name:"labelStartImage",resolveAll:Ap.resolveAll,tokenize:kb};function kb(t,e,n){const i=this;return r;function r(o){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(o),t.exit("labelImageMarker"),a}function a(o){return o===91?(t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelImage"),s):n(o)}function s(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(o):e(o)}}const Ob={name:"labelStartLink",resolveAll:Ap.resolveAll,tokenize:Bb};function Bb(t,e,n){const i=this;return r;function r(s){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),t.exit("labelLink"),a}function a(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):e(s)}}const Fc={name:"lineEnding",tokenize:zb};function zb(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),pt(t,e,"linePrefix")}}const Bl={name:"thematicBreak",tokenize:Vb};function Vb(t,e,n){let i=0,r;return a;function a(u){return t.enter("thematicBreak"),s(u)}function s(u){return r=u,o(u)}function o(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Fe(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),tt(u)?pt(t,o,"whitespace")(u):o(u))}}const mn={continuation:{tokenize:Xb},exit:Yb,name:"list",tokenize:Wb},Hb={partial:!0,tokenize:$b},Gb={partial:!0,tokenize:qb};function Wb(t,e,n){const i=this,r=i.events[i.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return o;function o(h){const m=i.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||h===i.containerState.marker:Ad(h)){if(i.containerState.type||(i.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(Bl,n,u)(h):u(h);if(!i.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(h)}return n(h)}function l(h){return Ad(h)&&++s<10?(t.consume(h),l):(!i.interrupt||s<2)&&(i.containerState.marker?h===i.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),u(h)):n(h)}function u(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||h,t.check(Ku,i.interrupt?n:c,t.attempt(Hb,f,d))}function c(h){return i.containerState.initialBlankLine=!0,a++,f(h)}function d(h){return tt(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return i.containerState.size=a+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)}}function Xb(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Ku,r,a);function r(o){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,pt(t,e,"listItemIndent",i.containerState.size+1)(o)}function a(o){return i.containerState.furtherBlankLines||!tt(o)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(o)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(Gb,e,s)(o))}function s(o){return i.containerState._closeFlow=!0,i.interrupt=void 0,pt(t,t.attempt(mn,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function qb(t,e,n){const i=this;return pt(t,r,"listItemIndent",i.containerState.size+1);function r(a){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?e(a):n(a)}}function Yb(t){t.exit(this.containerState.type)}function $b(t,e,n){const i=this;return pt(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(a){const s=i.events[i.events.length-1];return!tt(a)&&s&&s[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}const Xg={name:"setextUnderline",resolveTo:jb,tokenize:Kb};function jb(t,e){let n=t.length,i,r,a;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!a&&t[n][1].type==="definition"&&(a=n);const s={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",a?(t.splice(r,0,["enter",s,e]),t.splice(a+1,0,["exit",t[i][1],e]),t[i][1].end={...t[a][1].end}):t[i][1]=s,t.push(["exit",s,e]),t}function Kb(t,e,n){const i=this;let r;return a;function a(u){let c=i.events.length,d;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){d=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||d)?(t.enter("setextHeadingLine"),r=u,s(u)):n(u)}function s(u){return t.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===r?(t.consume(u),o):(t.exit("setextHeadingLineSequence"),tt(u)?pt(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Fe(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const Zb={tokenize:Qb};function Qb(t){const e=this,n=t.attempt(Ku,i,t.attempt(this.parser.constructs.flowInitial,r,pt(t,t.attempt(this.parser.constructs.flow,r,t.attempt(ib,r)),"linePrefix")));return n;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const Jb={resolveAll:cy()},eA=uy("string"),tA=uy("text");function uy(t){return{resolveAll:cy(t==="text"?nA:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],a=n.attempt(r,s,o);return s;function s(c){return u(c)?a(c):o(c)}function o(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),a(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const d=r[c];let f=-1;if(d)for(;++f<d.length;){const h=d[f];if(!h.previous||h.previous.call(i,i.previous))return!0}return!1}}}function cy(t){return e;function e(n,i){let r=-1,a;for(;++r<=n.length;)a===void 0?n[r]&&n[r][1].type==="data"&&(a=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==a+2&&(n[a][1].end=n[r-1][1].end,n.splice(a+2,r-a-2),r=a+2),a=void 0);return t?t(n,i):n}}function nA(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let a=r.length,s=-1,o=0,l;for(;a--;){const u=r[a];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)o++,s--;if(s)break;s=-1}else if(u===-2)l=!0,o++;else if(u!==-1){a++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(o=0),o){const u={type:n===t.length||l||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?s:i.start._bufferIndex+s,_index:i.start._index+a,line:i.end.line,column:i.end.column-o,offset:i.end.offset-o},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const iA={42:mn,43:mn,45:mn,48:mn,49:mn,50:mn,51:mn,52:mn,53:mn,54:mn,55:mn,56:mn,57:mn,62:ny},rA={91:lb},aA={[-2]:Uc,[-1]:Uc,32:Uc},sA={35:pb,42:Bl,45:[Xg,Bl],60:_b,61:Xg,95:Bl,96:Gg,126:Gg},oA={38:ry,92:iy},lA={[-5]:Fc,[-4]:Fc,[-3]:Fc,33:Fb,38:ry,42:Cd,60:[OT,Tb],91:Ob,92:[db,iy],93:Ap,95:Cd,96:ZT},uA={null:[Cd,Jb]},cA={null:[42,95]},fA={null:[]},dA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cA,contentInitial:rA,disable:fA,document:iA,flow:sA,flowInitial:aA,insideSpan:uA,string:oA,text:lA},Symbol.toStringTag,{value:"Module"}));function hA(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},a=[];let s=[],o=[];const l={attempt:C(A),check:C(M),consume:_,enter:y,exit:E,interrupt:C(M,{interrupt:!0})},u={code:null,containerState:{},defineSkip:S,events:[],now:m,parser:t,previous:null,sliceSerialize:f,sliceStream:h,write:d};let c=e.tokenize.call(u,l);return e.resolveAll&&a.push(e),u;function d(P){return s=Vn(s,P),g(),s[s.length-1]!==null?[]:(x(e,0),u.events=bp(a,u.events,u),u.events)}function f(P,N){return mA(h(P),N)}function h(P){return pA(s,P)}function m(){const{_bufferIndex:P,_index:N,line:q,column:Q,offset:F}=i;return{_bufferIndex:P,_index:N,line:q,column:Q,offset:F}}function S(P){r[P.line]=P.column,L()}function g(){let P;for(;i._index<s.length;){const N=s[i._index];if(typeof N=="string")for(P=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===P&&i._bufferIndex<N.length;)p(N.charCodeAt(i._bufferIndex));else p(N)}}function p(P){c=c(P)}function _(P){Fe(P)?(i.line++,i.column=1,i.offset+=P===-3?2:1,L()):P!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=P}function y(P,N){const q=N||{};return q.type=P,q.start=m(),u.events.push(["enter",q,u]),o.push(q),q}function E(P){const N=o.pop();return N.end=m(),u.events.push(["exit",N,u]),N}function A(P,N){x(P,N.from)}function M(P,N){N.restore()}function C(P,N){return q;function q(Q,F,K){let V,B,$,b;return Array.isArray(Q)?oe(Q):"tokenize"in Q?oe([Q]):te(Q);function te(j){return ue;function ue(re){const Le=re!==null&&j[re],Ne=re!==null&&j.null,Pe=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ne)?Ne:Ne?[Ne]:[]];return oe(Pe)(re)}}function oe(j){return V=j,B=0,j.length===0?K:I(j[B])}function I(j){return ue;function ue(re){return b=R(),$=j,j.partial||(u.currentConstruct=j),j.name&&u.parser.constructs.disable.null.includes(j.name)?Be():j.tokenize.call(N?Object.assign(Object.create(u),N):u,l,ze,Be)(re)}}function ze(j){return P($,b),F}function Be(j){return b.restore(),++B<V.length?I(V[B]):K}}}function x(P,N){P.resolveAll&&!a.includes(P)&&a.push(P),P.resolve&&wi(u.events,N,u.events.length-N,P.resolve(u.events.slice(N),u)),P.resolveTo&&(u.events=P.resolveTo(u.events,u))}function R(){const P=m(),N=u.previous,q=u.currentConstruct,Q=u.events.length,F=Array.from(o);return{from:Q,restore:K};function K(){i=P,u.previous=N,u.currentConstruct=q,u.events.length=Q,o=F,L()}}function L(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function pA(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,a=e.end._bufferIndex;let s;if(n===r)s=[t[n].slice(i,a)];else{if(s=t.slice(n,r),i>-1){const o=s[0];typeof o=="string"?s[0]=o.slice(i):s.shift()}a>0&&s.push(t[r].slice(0,a))}return s}function mA(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const a=t[n];let s;if(typeof a=="string")s=a;else switch(a){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&r)continue;s=" ";break}default:s=String.fromCharCode(a)}r=a===-2,i.push(s)}return i.join("")}function gA(t){const i={constructs:MT([dA,...(t||{}).extensions||[]]),content:r(IT),defined:[],document:r(DT),flow:r(Zb),lazy:{},string:r(eA),text:r(tA)};return i;function r(a){return s;function s(o){return hA(i,a,o)}}}function vA(t){for(;!ay(t););return t}const qg=/[\0\t\n\r]/g;function _A(){let t=1,e="",n=!0,i;return r;function r(a,s,o){const l=[];let u,c,d,f,h;for(a=e+(typeof a=="string"?a.toString():new TextDecoder(s||void 0).decode(a)),d=0,e="",n&&(a.charCodeAt(0)===65279&&d++,n=void 0);d<a.length;){if(qg.lastIndex=d,u=qg.exec(a),f=u&&u.index!==void 0?u.index:a.length,h=a.charCodeAt(f),!u){e=a.slice(d);break}if(h===10&&d===f&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),d<f&&(l.push(a.slice(d,f)),t+=f-d),h){case 0:{l.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,l.push(-2);t++<c;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}d=f+1}return o&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const xA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yA(t){return t.replace(xA,SA)}function SA(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),a=r===120||r===88;return ty(n.slice(a?2:1),a?16:10)}return Tp(n)||t}const fy={}.hasOwnProperty;function EA(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),MA(n)(vA(gA(n).document().write(_A()(t,e,!0))))}function MA(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(It),autolinkProtocol:R,autolinkEmail:R,atxHeading:a(Ke),blockQuote:a(Ne),characterEscape:R,characterReference:R,codeFenced:a(Pe),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(Pe,s),codeText:a(xt,s),codeTextData:R,data:R,codeFlowValue:R,definition:a(Xe),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(rt),hardBreakEscape:a(Ye),hardBreakTrailing:a(Ye),htmlFlow:a(yt,s),htmlFlowData:R,htmlText:a(yt,s),htmlTextData:R,image:a(Pt),label:s,link:a(It),listItem:a(vt),listItemValue:f,listOrdered:a(Ut,d),listUnordered:a(Ut),paragraph:a(wt),reference:I,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(Ke),strong:a(k),thematicBreak:a(et)},exit:{atxHeading:l(),atxHeadingSequence:A,autolink:l(),autolinkEmail:Le,autolinkProtocol:re,blockQuote:l(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:Be,characterReferenceMarkerNumeric:Be,characterReferenceValue:j,characterReference:ue,codeFenced:l(g),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:L,codeIndented:l(p),codeText:l(F),codeTextData:L,data:L,definition:l(),definitionDestinationString:E,definitionLabelString:_,definitionTitleString:y,emphasis:l(),hardBreakEscape:l(N),hardBreakTrailing:l(N),htmlFlow:l(q),htmlFlowData:L,htmlText:l(Q),htmlTextData:L,image:l(V),label:$,labelText:B,lineEnding:P,link:l(K),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ze,resourceDestinationString:b,resourceTitleString:te,resource:oe,setextHeading:l(x),setextHeadingLineSequence:C,setextHeadingText:M,strong:l(),thematicBreak:l()}};dy(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(w){let v={type:"root",children:[]};const D={stack:[v],tokenStack:[],config:e,enter:o,exit:u,buffer:s,resume:c,data:n},O=[];let H=-1;for(;++H<w.length;)if(w[H][1].type==="listOrdered"||w[H][1].type==="listUnordered")if(w[H][0]==="enter")O.push(H);else{const ae=O.pop();H=r(w,ae,H)}for(H=-1;++H<w.length;){const ae=e[w[H][0]];fy.call(ae,w[H][1].type)&&ae[w[H][1].type].call(Object.assign({sliceSerialize:w[H][2].sliceSerialize},D),w[H][1])}if(D.tokenStack.length>0){const ae=D.tokenStack[D.tokenStack.length-1];(ae[1]||Yg).call(D,void 0,ae[0])}for(v.position={start:tr(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:tr(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},H=-1;++H<e.transforms.length;)v=e.transforms[H](v)||v;return v}function r(w,v,D){let O=v-1,H=-1,ae=!1,fe,Z,J,de;for(;++O<=D;){const Se=w[O];switch(Se[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Se[0]==="enter"?H++:H--,de=void 0;break}case"lineEndingBlank":{Se[0]==="enter"&&(fe&&!de&&!H&&!J&&(J=O),de=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:de=void 0}if(!H&&Se[0]==="enter"&&Se[1].type==="listItemPrefix"||H===-1&&Se[0]==="exit"&&(Se[1].type==="listUnordered"||Se[1].type==="listOrdered")){if(fe){let pe=O;for(Z=void 0;pe--;){const ce=w[pe];if(ce[1].type==="lineEnding"||ce[1].type==="lineEndingBlank"){if(ce[0]==="exit")continue;Z&&(w[Z][1].type="lineEndingBlank",ae=!0),ce[1].type="lineEnding",Z=pe}else if(!(ce[1].type==="linePrefix"||ce[1].type==="blockQuotePrefix"||ce[1].type==="blockQuotePrefixWhitespace"||ce[1].type==="blockQuoteMarker"||ce[1].type==="listItemIndent"))break}J&&(!Z||J<Z)&&(fe._spread=!0),fe.end=Object.assign({},Z?w[Z][1].start:Se[1].end),w.splice(Z||O,0,["exit",fe,Se[2]]),O++,D++}if(Se[1].type==="listItemPrefix"){const pe={type:"listItem",_spread:!1,start:Object.assign({},Se[1].start),end:void 0};fe=pe,w.splice(O,0,["enter",pe,Se[2]]),O++,D++,J=void 0,de=!0}}}return w[v][1]._spread=ae,D}function a(w,v){return D;function D(O){o.call(this,w(O),O),v&&v.call(this,O)}}function s(){this.stack.push({type:"fragment",children:[]})}function o(w,v,D){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([v,D||void 0]),w.position={start:tr(v.start),end:void 0}}function l(w){return v;function v(D){w&&w.call(this,D),u.call(this,D)}}function u(w,v){const D=this.stack.pop(),O=this.tokenStack.pop();if(O)O[0].type!==w.type&&(v?v.call(this,w,O[0]):(O[1]||Yg).call(this,w,O[0]));else throw new Error("Cannot close `"+w.type+"` ("+Js({start:w.start,end:w.end})+"): it’s not open");D.position.end=tr(w.end)}function c(){return ST(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(w){if(this.data.expectingFirstListItemValue){const v=this.stack[this.stack.length-2];v.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function h(){const w=this.resume(),v=this.stack[this.stack.length-1];v.lang=w}function m(){const w=this.resume(),v=this.stack[this.stack.length-1];v.meta=w}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const w=this.resume(),v=this.stack[this.stack.length-1];v.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const w=this.resume(),v=this.stack[this.stack.length-1];v.value=w.replace(/(\r?\n|\r)$/g,"")}function _(w){const v=this.resume(),D=this.stack[this.stack.length-1];D.label=v,D.identifier=Za(this.sliceSerialize(w)).toLowerCase()}function y(){const w=this.resume(),v=this.stack[this.stack.length-1];v.title=w}function E(){const w=this.resume(),v=this.stack[this.stack.length-1];v.url=w}function A(w){const v=this.stack[this.stack.length-1];if(!v.depth){const D=this.sliceSerialize(w).length;v.depth=D}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function C(w){const v=this.stack[this.stack.length-1];v.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function x(){this.data.setextHeadingSlurpLineEnding=void 0}function R(w){const D=this.stack[this.stack.length-1].children;let O=D[D.length-1];(!O||O.type!=="text")&&(O=Zt(),O.position={start:tr(w.start),end:void 0},D.push(O)),this.stack.push(O)}function L(w){const v=this.stack.pop();v.value+=this.sliceSerialize(w),v.position.end=tr(w.end)}function P(w){const v=this.stack[this.stack.length-1];if(this.data.atHardBreak){const D=v.children[v.children.length-1];D.position.end=tr(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(v.type)&&(R.call(this,w),L.call(this,w))}function N(){this.data.atHardBreak=!0}function q(){const w=this.resume(),v=this.stack[this.stack.length-1];v.value=w}function Q(){const w=this.resume(),v=this.stack[this.stack.length-1];v.value=w}function F(){const w=this.resume(),v=this.stack[this.stack.length-1];v.value=w}function K(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const v=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=v,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function V(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const v=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=v,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function B(w){const v=this.sliceSerialize(w),D=this.stack[this.stack.length-2];D.label=yA(v),D.identifier=Za(v).toLowerCase()}function $(){const w=this.stack[this.stack.length-1],v=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){const O=w.children;D.children=O}else D.alt=v}function b(){const w=this.resume(),v=this.stack[this.stack.length-1];v.url=w}function te(){const w=this.resume(),v=this.stack[this.stack.length-1];v.title=w}function oe(){this.data.inReference=void 0}function I(){this.data.referenceType="collapsed"}function ze(w){const v=this.resume(),D=this.stack[this.stack.length-1];D.label=v,D.identifier=Za(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function Be(w){this.data.characterReferenceType=w.type}function j(w){const v=this.sliceSerialize(w),D=this.data.characterReferenceType;let O;D?(O=ty(v,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):O=Tp(v);const H=this.stack[this.stack.length-1];H.value+=O}function ue(w){const v=this.stack.pop();v.position.end=tr(w.end)}function re(w){L.call(this,w);const v=this.stack[this.stack.length-1];v.url=this.sliceSerialize(w)}function Le(w){L.call(this,w);const v=this.stack[this.stack.length-1];v.url="mailto:"+this.sliceSerialize(w)}function Ne(){return{type:"blockquote",children:[]}}function Pe(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function Xe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function rt(){return{type:"emphasis",children:[]}}function Ke(){return{type:"heading",depth:0,children:[]}}function Ye(){return{type:"break"}}function yt(){return{type:"html",value:""}}function Pt(){return{type:"image",title:null,url:"",alt:null}}function It(){return{type:"link",title:null,url:"",children:[]}}function Ut(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function vt(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function wt(){return{type:"paragraph",children:[]}}function k(){return{type:"strong",children:[]}}function Zt(){return{type:"text",value:""}}function et(){return{type:"thematicBreak"}}}function tr(t){return{line:t.line,column:t.column,offset:t.offset}}function dy(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?dy(t,i):wA(t,i)}}function wA(t,e){let n;for(n in e)if(fy.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Yg(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Js({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Js({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Js({start:e.start,end:e.end})+") is still open")}function TA(t){const e=this;e.parser=n;function n(i){return EA(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function bA(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function AA(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function CA(t,e){const n=e.value?e.value+`
`:"",i={},r=e.lang?e.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let a={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(a.data={meta:e.meta}),t.patch(e,a),a=t.applyData(e,a),a={type:"element",tagName:"pre",properties:{},children:[a]},t.patch(e,a),a}function RA(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function PA(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function IA(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=vs(i.toLowerCase()),a=t.footnoteOrder.indexOf(i);let s,o=t.footnoteCounts.get(i);o===void 0?(o=0,t.footnoteOrder.push(i),s=t.footnoteOrder.length):s=a+1,o+=1,t.footnoteCounts.set(i,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function LA(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function DA(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function hy(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),a=r[0];a&&a.type==="text"?a.value="["+a.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function NA(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return hy(t,e);const r={src:vs(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,a),t.applyData(e,a)}function UA(t,e){const n={src:vs(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function FA(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function kA(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return hy(t,e);const r={href:vs(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,a),t.applyData(e,a)}function OA(t,e){const n={href:vs(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function BA(t,e,n){const i=t.all(e),r=n?zA(n):py(e),a={},s=[];if(typeof e.checked=="boolean"){const c=i[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},i.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let o=-1;for(;++o<i.length;){const c=i[o];(r||o!==0||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!r?s.push(...c.children):s.push(c)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:s};return t.patch(e,u),t.applyData(e,u)}function zA(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=py(n[i])}return e}function py(t){const e=t.spread;return e??t.children.length>1}function VA(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,a),t.applyData(e,a)}function HA(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function GA(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function WA(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function XA(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},o=Sp(e.children[1]),l=$x(e.children[e.children.length-1]);o&&l&&(s.position={start:o,end:l}),r.push(s)}const a={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,a),t.applyData(e,a)}function qA(t,e,n){const i=n?n.children:void 0,a=(i?i.indexOf(e):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,o=s?s.length:e.children.length;let l=-1;const u=[];for(;++l<o;){const d=e.children[l],f={},h=s?s[l]:void 0;h&&(f.align=h);let m={type:"element",tagName:a,properties:f,children:[]};d&&(m.children=t.all(d),t.patch(d,m),m=t.applyData(d,m)),u.push(m)}const c={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,c),t.applyData(e,c)}function YA(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const $g=9,jg=32;function $A(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const a=[];for(;i;)a.push(Kg(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return a.push(Kg(e.slice(r),r>0,!1)),a.join("")}function Kg(t,e,n){let i=0,r=t.length;if(e){let a=t.codePointAt(i);for(;a===$g||a===jg;)i++,a=t.codePointAt(i)}if(n){let a=t.codePointAt(r-1);for(;a===$g||a===jg;)r--,a=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function jA(t,e){const n={type:"text",value:$A(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function KA(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const ZA={blockquote:bA,break:AA,code:CA,delete:RA,emphasis:PA,footnoteReference:IA,heading:LA,html:DA,imageReference:NA,image:UA,inlineCode:FA,linkReference:kA,link:OA,listItem:BA,list:VA,paragraph:HA,root:GA,strong:WA,table:XA,tableCell:YA,tableRow:qA,text:jA,thematicBreak:KA,toml:tl,yaml:tl,definition:tl,footnoteDefinition:tl};function tl(){}const my=-1,Zu=0,to=1,Su=2,Cp=3,Rp=4,Pp=5,Ip=6,gy=7,vy=8,_y=typeof self=="object"?self:globalThis,Zg=(t,e)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new _y[t](e)},QA=(t,e)=>{const n=(r,a)=>(t.set(a,r),r),i=r=>{if(t.has(r))return t.get(r);const[a,s]=e[r];switch(a){case Zu:case my:return n(s,r);case to:{const o=n([],r);for(const l of s)o.push(i(l));return o}case Su:{const o=n({},r);for(const[l,u]of s)o[i(l)]=i(u);return o}case Cp:return n(new Date(s),r);case Rp:{const{source:o,flags:l}=s;return n(new RegExp(o,l),r)}case Pp:{const o=n(new Map,r);for(const[l,u]of s)o.set(i(l),i(u));return o}case Ip:{const o=n(new Set,r);for(const l of s)o.add(i(l));return o}case gy:{const{name:o,message:l}=s;return n(typeof _y[o]=="function"?Zg(o,l):new Error(l),r)}case vy:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:o}=new Uint8Array(s);return n(new DataView(o),s)}}return n(Zg(a,s),r)};return i},Qg=t=>QA(new Map,t)(0),Gr="",{toString:JA}={},{keys:eC}=Object,Ps=t=>{const e=typeof t;if(e!=="object"||!t)return[Zu,e];const n=JA.call(t).slice(8,-1);switch(n){case"Array":return[to,Gr];case"Object":return[Su,Gr];case"Date":return[Cp,Gr];case"RegExp":return[Rp,Gr];case"Map":return[Pp,Gr];case"Set":return[Ip,Gr];case"DataView":return[to,n]}return n.includes("Array")?[to,n]:t instanceof Error?[gy,t.name||"Error"]:[Su,n]},nl=([t,e])=>t===Zu&&(e==="function"||e==="symbol"),tC=(t,e,n,i)=>{const r=(s,o)=>{const l=i.push(s)-1;return n.set(o,l),l},a=s=>{if(n.has(s))return n.get(s);let[o,l]=Ps(s);switch(o){case Zu:{let c=s;switch(l){case"bigint":o=vy,c=s.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);c=null;break;case"undefined":return r([my],s)}return r([o,c],s)}case to:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),r([l,[...f]],s)}const c=[],d=r([o,c],s);for(const f of s)c.push(a(f));return d}case Su:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(e&&"toJSON"in s)return a(s.toJSON());const c=[],d=r([o,c],s);for(const f of eC(s))(t||!nl(Ps(s[f])))&&c.push([a(f),a(s[f])]);return d}case Cp:return r([o,isNaN(s.getTime())?Gr:s.toISOString()],s);case Rp:{const{source:c,flags:d}=s;return r([o,{source:c,flags:d}],s)}case Pp:{const c=[],d=r([o,c],s);for(const[f,h]of s)(t||!(nl(Ps(f))||nl(Ps(h))))&&c.push([a(f),a(h)]);return d}case Ip:{const c=[],d=r([o,c],s);for(const f of s)(t||!nl(Ps(f)))&&c.push(a(f));return d}}const{message:u}=s;return r([o,{name:l,message:u}],s)};return a},Jg=(t,{json:e,lossy:n}={})=>{const i=[];return tC(!(e||n),!!e,new Map,i)(t),i},Eu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?Qg(Jg(t,e)):structuredClone(t):(t,e)=>Qg(Jg(t,e));function nC(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function iC(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function rC(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||nC,i=t.options.footnoteBackLabel||iC,r=t.options.footnoteLabel||"Footnotes",a=t.options.footnoteLabelTagName||"h2",s=t.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const c=t.all(u),d=String(u.identifier).toUpperCase(),f=vs(d.toLowerCase());let h=0;const m=[],S=t.footnoteCounts.get(d);for(;S!==void 0&&++h<=S;){m.length>0&&m.push({type:"text",value:" "});let _=typeof n=="string"?n:n(l,h);typeof _=="string"&&(_={type:"text",value:_}),m.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,h),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const g=c[c.length-1];if(g&&g.type==="element"&&g.tagName==="p"){const _=g.children[g.children.length-1];_&&_.type==="text"?_.value+=" ":g.children.push({type:"text",value:" "}),g.children.push(...m)}else c.push(...m);const p={type:"element",tagName:"li",properties:{id:e+"fn-"+f},children:t.wrap(c,!0)};t.patch(u,p),o.push(p)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Eu(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(o,!0)},{type:"text",value:`
`}]}}const xy=function(t){if(t==null)return lC;if(typeof t=="function")return Qu(t);if(typeof t=="object")return Array.isArray(t)?aC(t):sC(t);if(typeof t=="string")return oC(t);throw new Error("Expected function, string, or object as test")};function aC(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=xy(t[n]);return Qu(i);function i(...r){let a=-1;for(;++a<e.length;)if(e[a].apply(this,r))return!0;return!1}}function sC(t){const e=t;return Qu(n);function n(i){const r=i;let a;for(a in t)if(r[a]!==e[a])return!1;return!0}}function oC(t){return Qu(e);function e(n){return n&&n.type===t}}function Qu(t){return e;function e(n,i,r){return!!(uC(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function lC(){return!0}function uC(t){return t!==null&&typeof t=="object"&&"type"in t}const yy=[],cC=!0,ev=!1,fC="skip";function dC(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const a=xy(r),s=i?-1:1;o(t,void 0,[])();function o(l,u,c){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=yy,m,S,g;if((!e||a(l,u,c[c.length-1]||void 0))&&(h=hC(n(l,c)),h[0]===ev))return h;if("children"in l&&l.children){const p=l;if(p.children&&h[0]!==fC)for(S=(i?p.children.length:-1)+s,g=c.concat(p);S>-1&&S<p.children.length;){const _=p.children[S];if(m=o(_,S,g)(),m[0]===ev)return m;S=typeof m[1]=="number"?m[1]:S+s}}return h}}}function hC(t){return Array.isArray(t)?t:typeof t=="number"?[cC,t]:t==null?yy:[t]}function Sy(t,e,n,i){let r,a,s;typeof e=="function"&&typeof n!="function"?(a=void 0,s=e,r=n):(a=e,s=n,r=i),dC(t,a,o,r);function o(l,u){const c=u[u.length-1],d=c?c.children.indexOf(l):void 0;return s(l,d,c)}}const Rd={}.hasOwnProperty,pC={};function mC(t,e){const n=e||pC,i=new Map,r=new Map,a=new Map,s={...ZA,...n.handlers},o={all:u,applyData:vC,definitionById:i,footnoteById:r,footnoteCounts:a,footnoteOrder:[],handlers:s,one:l,options:n,patch:gC,wrap:xC};return Sy(t,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?i:r,f=String(c.identifier).toUpperCase();d.has(f)||d.set(f,c)}}),o;function l(c,d){const f=c.type,h=o.handlers[f];if(Rd.call(o.handlers,f)&&h)return h(o,c,d);if(o.options.passThrough&&o.options.passThrough.includes(f)){if("children"in c){const{children:S,...g}=c,p=Eu(g);return p.children=o.all(c),p}return Eu(c)}return(o.options.unknownHandler||_C)(o,c,d)}function u(c){const d=[];if("children"in c){const f=c.children;let h=-1;for(;++h<f.length;){const m=o.one(f[h],c);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=tv(m.value)),!Array.isArray(m)&&m.type==="element")){const S=m.children[0];S&&S.type==="text"&&(S.value=tv(S.value))}Array.isArray(m)?d.push(...m):d.push(m)}}}return d}}function gC(t,e){t.position&&(e.position=J1(t))}function vC(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,a=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&a&&Object.assign(n.properties,Eu(a)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function _C(t,e){const n=e.data||{},i="value"in e&&!(Rd.call(n,"hProperties")||Rd.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function xC(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function tv(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function nv(t,e){const n=mC(t,e),i=n.one(t,void 0),r=rC(n),a=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&a.children.push({type:"text",value:`
`},r),a}function yC(t,e){return t&&"run"in t?async function(n,i){const r=nv(n,{file:i,...e});await t.run(r,i)}:function(n,i){return nv(n,{file:i,...t||e})}}function iv(t){if(t)throw t}var zl=Object.prototype.hasOwnProperty,Ey=Object.prototype.toString,rv=Object.defineProperty,av=Object.getOwnPropertyDescriptor,sv=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Ey.call(e)==="[object Array]"},ov=function(e){if(!e||Ey.call(e)!=="[object Object]")return!1;var n=zl.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&zl.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||zl.call(e,r)},lv=function(e,n){rv&&n.name==="__proto__"?rv(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},uv=function(e,n){if(n==="__proto__")if(zl.call(e,n)){if(av)return av(e,n).value}else return;return e[n]},SC=function t(){var e,n,i,r,a,s,o=arguments[0],l=1,u=arguments.length,c=!1;for(typeof o=="boolean"&&(c=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=uv(o,n),r=uv(e,n),o!==r&&(c&&r&&(ov(r)||(a=sv(r)))?(a?(a=!1,s=i&&sv(i)?i:[]):s=i&&ov(i)?i:{},lv(o,{name:n,newValue:t(c,s,r)})):typeof r<"u"&&lv(o,{name:n,newValue:r}));return o};const kc=Eh(SC);function Pd(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function EC(){const t=[],e={run:n,use:i};return e;function n(...r){let a=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);o(null,...r);function o(l,...u){const c=t[++a];let d=-1;if(l){s(l);return}for(;++d<r.length;)(u[d]===null||u[d]===void 0)&&(u[d]=r[d]);r=u,c?MC(c,o)(...u):s(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function MC(t,e){let n;return i;function i(...s){const o=t.length>s.length;let l;o&&s.push(r);try{l=t.apply(this,s)}catch(u){const c=u;if(o&&n)throw c;return r(c)}o||(l&&l.then&&typeof l.then=="function"?l.then(a,r):l instanceof Error?r(l):a(l))}function r(s,...o){n||(n=!0,e(s,...o))}function a(s){r(null,s)}}const hi={basename:wC,dirname:TC,extname:bC,join:AC,sep:"/"};function wC(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Do(t);let n=0,i=-1,r=t.length,a;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(a){n=r+1;break}}else i<0&&(a=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let s=-1,o=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(a){n=r+1;break}}else s<0&&(a=!0,s=r+1),o>-1&&(t.codePointAt(r)===e.codePointAt(o--)?o<0&&(i=r):(o=-1,i=s));return n===i?i=s:i<0&&(i=t.length),t.slice(n,i)}function TC(t){if(Do(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function bC(t){Do(t);let e=t.length,n=-1,i=0,r=-1,a=0,s;for(;e--;){const o=t.codePointAt(e);if(o===47){if(s){i=e+1;break}continue}n<0&&(s=!0,n=e+1),o===46?r<0?r=e:a!==1&&(a=1):r>-1&&(a=-1)}return r<0||n<0||a===0||a===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function AC(...t){let e=-1,n;for(;++e<t.length;)Do(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":CC(n)}function CC(t){Do(t);const e=t.codePointAt(0)===47;let n=RC(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function RC(t,e){let n="",i=0,r=-1,a=0,s=-1,o,l;for(;++s<=t.length;){if(s<t.length)o=t.codePointAt(s);else{if(o===47)break;o=47}if(o===47){if(!(r===s-1||a===1))if(r!==s-1&&a===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,a=0;continue}}else if(n.length>0){n="",i=0,r=s,a=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,s):n=t.slice(r+1,s),i=s-r-1;r=s,a=0}else o===46&&a>-1?a++:a=-1}return n}function Do(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const PC={cwd:IC};function IC(){return"/"}function Id(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function LC(t){if(typeof t=="string")t=new URL(t);else if(!Id(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return DC(t)}function DC(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const Oc=["history","path","basename","stem","extname","dirname"];class My{constructor(e){let n;e?Id(e)?n={path:e}:typeof e=="string"||NC(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":PC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Oc.length;){const a=Oc[i];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let r;for(r in n)Oc.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?hi.basename(this.path):void 0}set basename(e){zc(e,"basename"),Bc(e,"basename"),this.path=hi.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?hi.dirname(this.path):void 0}set dirname(e){cv(this.basename,"dirname"),this.path=hi.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?hi.extname(this.path):void 0}set extname(e){if(Bc(e,"extname"),cv(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hi.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Id(e)&&(e=LC(e)),zc(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?hi.basename(this.path,this.extname):void 0}set stem(e){zc(e,"stem"),Bc(e,"stem"),this.path=hi.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new on(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Bc(t,e){if(t&&t.includes(hi.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+hi.sep+"`")}function zc(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function cv(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function NC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const UC=function(t){const i=this.constructor.prototype,r=i[t],a=function(){return r.apply(a,arguments)};return Object.setPrototypeOf(a,i),a},FC={}.hasOwnProperty;class Lp extends UC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=EC()}copy(){const e=new Lp;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(kc(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Gc("data",this.frozen),this.namespace[e]=n,this):FC.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Gc("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=il(e),i=this.parser||this.Parser;return Vc("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),Vc("process",this.parser||this.Parser),Hc("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(a,s){const o=il(e),l=i.parse(o);i.run(l,o,function(c,d,f){if(c||!d||!f)return u(c);const h=d,m=i.stringify(h,f);BC(m)?f.value=m:f.result=m,u(c,f)});function u(c,d){c||!d?s(c):a?a(d):n(void 0,d)}}}processSync(e){let n=!1,i;return this.freeze(),Vc("processSync",this.parser||this.Parser),Hc("processSync",this.compiler||this.Compiler),this.process(e,r),dv("processSync","process",n),i;function r(a,s){n=!0,iv(a),i=s}}run(e,n,i){fv(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?a(void 0,i):new Promise(a);function a(s,o){const l=il(n);r.run(e,l,u);function u(c,d,f){const h=d||e;c?o(c):s?s(h):i(void 0,h,f)}}}runSync(e,n){let i=!1,r;return this.run(e,n,a),dv("runSync","run",i),r;function a(s,o){iv(s),r=o,i=!0}}stringify(e,n){this.freeze();const i=il(n),r=this.compiler||this.Compiler;return Hc("stringify",r),fv(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Gc("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?o(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function a(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;l(c,d)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(r.settings=kc(!0,r.settings,u.settings))}function o(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];a(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,c){let d=-1,f=-1;for(;++d<i.length;)if(i[d][0]===u){f=d;break}if(f===-1)i.push([u,...c]);else if(c.length>0){let[h,...m]=c;const S=i[f][1];Pd(S)&&Pd(h)&&(h=kc(!0,S,h)),i[f]=[u,h,...m]}}}}const kC=new Lp().freeze();function Vc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Hc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Gc(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function fv(t){if(!Pd(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function dv(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function il(t){return OC(t)?t:new My(t)}function OC(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function BC(t){return typeof t=="string"||zC(t)}function zC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const VC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",hv=[],pv={allowDangerousHtml:!0},HC=/^(https?|ircs?|mailto|xmpp)$/i,GC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function WC(t){const e=XC(t),n=qC(t);return YC(e.runSync(e.parse(n),n),t)}function XC(t){const e=t.rehypePlugins||hv,n=t.remarkPlugins||hv,i=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...pv}:pv;return kC().use(TA).use(n).use(yC,i).use(e)}function qC(t){const e=t.children||"",n=new My;return typeof e=="string"&&(n.value=e),n}function YC(t,e){const n=e.allowedElements,i=e.allowElement,r=e.components,a=e.disallowedElements,s=e.skipHtml,o=e.unwrapDisallowed,l=e.urlTransform||$C;for(const c of GC)Object.hasOwn(e,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+VC+c.id,void 0);return e.className&&(t={type:"element",tagName:"div",properties:{className:e.className},children:t.type==="root"?t.children:[t]}),Sy(t,u),rT(t,{Fragment:ie.Fragment,components:r,ignoreInvalidStyle:!0,jsx:ie.jsx,jsxs:ie.jsxs,passKeys:!0,passNode:!0});function u(c,d,f){if(c.type==="raw"&&f&&typeof d=="number")return s?f.children.splice(d,1):f.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let h;for(h in Nc)if(Object.hasOwn(Nc,h)&&Object.hasOwn(c.properties,h)){const m=c.properties[h],S=Nc[h];(S===null||S.includes(c.tagName))&&(c.properties[h]=l(String(m||""),h,c))}}if(c.type==="element"){let h=n?!n.includes(c.tagName):a?a.includes(c.tagName):!1;if(!h&&i&&typeof d=="number"&&(h=!i(c,d,f)),h&&f&&typeof d=="number")return o&&c.children?f.children.splice(d,1,...c.children):f.children.splice(d,1),d}}}function $C(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e===-1||r!==-1&&e>r||n!==-1&&e>n||i!==-1&&e>i||HC.test(t.slice(0,e))?t:""}function jC(){const{slug:t}=mw(),e=s1(t);return e?ie.jsxs("div",{className:"wrap",children:[ie.jsx("p",{className:"eyebrow",children:e.date}),ie.jsx("h1",{className:"page-title",children:e.title}),ie.jsx("div",{className:"post-body",children:ie.jsx(WC,{children:e.body})}),ie.jsx(yu,{className:"back-link",to:"/blog",children:"← Back to blog"})]}):ie.jsxs("div",{className:"wrap",children:[ie.jsx("h1",{className:"page-title",children:"Post not found"}),ie.jsx(yu,{className:"back-link",to:"/blog",children:"← Back to blog"})]})}function mv({children:t,title:e,image:n,previewGif:i,onClick:r,className:a=""}){const[s,o]=he.useState(!1),l={backgroundImage:`url(${s&&i?i:n})`,backgroundSize:"cover",backgroundPosition:"center"};return ie.jsxs("button",{className:`glass-button ${a}`,onClick:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:l,children:[ie.jsx("div",{className:"glass-overlay"}),ie.jsx("span",{className:"glass-title",children:e||t}),e||t]})}function KC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)}function ZC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}var QC=function(t){he.useEffect(t,[])},JC=function(t){var e=he.useRef(t);e.current=t,QC(function(){return function(){return e.current()}})},eR=function(t){var e=he.useRef(0),n=he.useState(t),i=n[0],r=n[1],a=he.useCallback(function(s){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){r(s)})},[]);return JC(function(){cancelAnimationFrame(e.current)}),[i,a]},tR=function(t){var e=eR({docX:0,docY:0,posX:0,posY:0,elX:0,elY:0,elH:0,elW:0}),n=e[0],i=e[1];return he.useEffect(function(){var r=function(a){if(t&&t.current){var s=t.current.getBoundingClientRect(),o=s.left,l=s.top,u=s.width,c=s.height,d=o+window.pageXOffset,f=l+window.pageYOffset,h=a.pageX-d,m=a.pageY-f;i({docX:a.pageX,docY:a.pageY,posX:d,posY:f,elX:h,elY:m,elH:c,elW:u})}};return KC(document,"mousemove",r),function(){ZC(document,"mousemove",r)}},[t]),n};function nR(){const t=he.useRef(null),{docX:e,docY:n}=tR(t);return ie.jsx("div",{ref:t,className:"mouse-spotlight",style:{"--x":`${e}px`,"--y":`${n}px`}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="185",iR=0,gv=1,rR=2,Vl=1,aR=2,Hs=3,Cr=0,En=1,Ui=2,zi=0,Qa=1,vv=2,_v=3,xv=4,sR=5,qr=100,oR=101,lR=102,uR=103,cR=104,fR=200,dR=201,hR=202,pR=203,Ld=204,Dd=205,mR=206,gR=207,vR=208,_R=209,xR=210,yR=211,SR=212,ER=213,MR=214,Nd=0,Ud=1,Fd=2,us=3,kd=4,Od=5,Bd=6,zd=7,wy=0,wR=1,TR=2,Si=0,Ty=1,by=2,Ay=3,Cy=4,Ry=5,Py=6,Iy=7,Ly=300,oa=301,cs=302,Wc=303,Xc=304,Ju=306,Vd=1e3,Oi=1001,Hd=1002,$t=1003,bR=1004,rl=1005,an=1006,qc=1007,Zr=1008,Gn=1009,Dy=1010,Ny=1011,Mo=1012,Np=1013,Ti=1014,vi=1015,Yi=1016,Up=1017,Fp=1018,wo=1020,Uy=35902,Fy=35899,ky=1021,Oy=1022,ni=1023,$i=1026,Qr=1027,By=1028,kp=1029,la=1030,Op=1031,Bp=1033,Hl=33776,Gl=33777,Wl=33778,Xl=33779,Gd=35840,Wd=35841,Xd=35842,qd=35843,Yd=36196,$d=37492,jd=37496,Kd=37488,Zd=37489,Mu=37490,Qd=37491,Jd=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,ah=37814,sh=37815,oh=37816,lh=37817,uh=37818,ch=37819,fh=37820,dh=37821,hh=36492,ph=36494,mh=36495,gh=36283,vh=36284,wu=36285,_h=36286,AR=3200,yv=0,CR=1,dr="",On="srgb",Tu="srgb-linear",bu="linear",at="srgb",_a=7680,Sv=519,RR=512,PR=513,IR=514,zp=515,LR=516,DR=517,Vp=518,NR=519,Ev=35044,Mv="300 es",_i=2e3,Au=2001;function UR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FR(){const t=Cu("canvas");return t.style.display="block",t}const wv={};function Tv(...t){const e="THREE."+t.shift();console.log(e,...t)}function zy(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=zy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=zy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ja(...t){const e=t.join(" ");e in wv||(wv[e]=!0,Ue(...t))}function kR(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const OR={[Nd]:Ud,[Fd]:Bd,[kd]:zd,[us]:Od,[Ud]:Nd,[Bd]:Fd,[zd]:kd,[Od]:us};class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,xh=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function BR(t,e){return(t%e+e)%e}function $c(t,e,n){return(1-n)*t+n*e}function Is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xp=class Xp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;let nt=Xp;class _s{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=a[s+0],h=a[s+1],m=a[s+2],S=a[s+3];if(d!==S||l!==f||u!==h||c!==m){let g=l*f+u*h+c*m+d*S;g<0&&(f=-f,h=-h,m=-m,S=-S,g=-g);let p=1-o;if(g<.9995){const _=Math.acos(g),y=Math.sin(_);p=Math.sin(p*_)/y,o=Math.sin(o*_)/y,l=l*p+f*o,u=u*p+h*o,c=c*p+m*o,d=d*p+S*o}else{l=l*p+f*o,u=u*p+h*o,c=c*p+m*o,d=d*p+S*o;const _=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=_,u*=_,c*=_,d*=_}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=a[s],f=a[s+1],h=a[s+2],m=a[s+3];return e[n]=o*m+c*d+l*h-u*f,e[n+1]=l*m+c*f+u*d-o*h,e[n+2]=u*m+c*h+o*f-l*d,e[n+3]=c*m-o*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(a/2),f=l(i/2),h=l(r/2),m=l(a/2);switch(s){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(a-u)*h,this._z=(s-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+u)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(a-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(s-r)/h,this._x=(a+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*o+r*u-a*l,this._y=r*c+s*l+a*o-i*u,this._z=a*c+s*u+i*l-r*o,this._w=s*c-i*o-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+a*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+a*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qp=class qp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*r-o*i),c=2*(o*n-a*r),d=2*(a*i-s*n);return this.x=n+l*u+s*d-o*c,this.y=i+l*c+o*u-a*d,this.z=r+l*d+a*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qp.prototype.isVector3=!0;let X=qp;const jc=new X,bv=new _s,Yp=class Yp{constructor(e,n,i,r,a,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u)}set(e,n,i,r,a,s,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],S=r[0],g=r[3],p=r[6],_=r[1],y=r[4],E=r[7],A=r[2],M=r[5],C=r[8];return a[0]=s*S+o*_+l*A,a[3]=s*g+o*y+l*M,a[6]=s*p+o*E+l*C,a[1]=u*S+c*_+d*A,a[4]=u*g+c*y+d*M,a[7]=u*p+c*E+d*C,a[2]=f*S+h*_+m*A,a[5]=f*g+h*y+m*M,a[8]=f*p+h*E+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*o*u-i*a*c+i*o*l+r*a*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*s-o*u,f=o*l-c*a,h=u*a-s*l,m=n*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=d*S,e[1]=(r*u-c*i)*S,e[2]=(o*i-r*s)*S,e[3]=f*S,e[4]=(c*n-r*l)*S,e[5]=(r*a-o*n)*S,e[6]=h*S,e[7]=(i*l-u*n)*S,e[8]=(s*n-i*a)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-r*u,r*l,-r*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return Ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return Ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return Ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yp.prototype.isMatrix3=!0;let Oe=Yp;const Kc=new Oe,Av=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zR(){const t={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===at&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?bu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tu]:{primaries:e,whitePoint:i,transfer:bu,toXYZ:Av,fromXYZ:Cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Av,fromXYZ:Cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const $e=zR();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xa;class VR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xa===void 0&&(xa=Cu("canvas")),xa.width=e.width,xa.height=e.height;const r=xa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xa}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Vi(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HR=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Zc(r[s].image)):a.push(Zc(r[s]))}else a=Zc(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?VR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let GR=0;const Qc=new X;class fn extends pa{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Oi,r=Oi,a=an,s=Zr,o=ni,l=Gn,u=fn.DEFAULT_ANISOTROPY,c=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=No(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ly)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ly;fn.DEFAULT_ANISOTROPY=1;const $p=class $p{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],S=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(h+1)/2,A=(p+1)/2,M=(c+f)/4,C=(d+S)/4,x=(m+g)/4;return y>E&&y>A?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=M/i,a=C/i):E>A?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=M/r,a=x/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=C/a,r=x/a),this.set(i,r,a,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-S)/_,this.z=(f-c)/_,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;let Ct=$p;class WR extends pa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},a=new fn(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends WR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vy extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=class Ru{constructor(e,n,i,r,a,s,o,l,u,c,d,f,h,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u,c,d,f,h,m,S,g)}set(e,n,i,r,a,s,o,l,u,c,d,f,h,m,S,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ya.setFromMatrixColumn(e,0).length(),a=1/ya.setFromMatrixColumn(e,1).length(),s=1/ya.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*c,h=s*d,m=o*c,S=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+m*u,n[5]=f-S*u,n[9]=-o*l,n[2]=S-f*u,n[6]=m+h*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,S=u*d;n[0]=f+S*o,n[4]=m*o-h,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-o,n[2]=h*o-m,n[6]=S+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,S=u*d;n[0]=f-S*o,n[4]=-s*d,n[8]=m+h*o,n[1]=h+m*o,n[5]=s*c,n[9]=S-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,h=s*d,m=o*c,S=o*d;n[0]=l*c,n[4]=m*u-h,n[8]=f*u+S,n[1]=l*d,n[5]=S*u+f,n[9]=h*u-m,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*u,m=o*l,S=o*u;n[0]=l*c,n[4]=S-f*d,n[8]=m*d+h,n[1]=d,n[5]=s*c,n[9]=-o*c,n[2]=-u*c,n[6]=h*d+m,n[10]=f-S*d}else if(e.order==="XZY"){const f=s*l,h=s*u,m=o*l,S=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+S,n[5]=s*c,n[9]=h*d-m,n[2]=m*d-h,n[6]=o*c,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qR,e,YR)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),nr.crossVectors(i,Tn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),nr.crossVectors(i,Tn)),nr.normalize(),al.crossVectors(Tn,nr),r[0]=nr.x,r[4]=al.x,r[8]=Tn.x,r[1]=nr.y,r[5]=al.y,r[9]=Tn.y,r[2]=nr.z,r[6]=al.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],S=i[6],g=i[10],p=i[14],_=i[3],y=i[7],E=i[11],A=i[15],M=r[0],C=r[4],x=r[8],R=r[12],L=r[1],P=r[5],N=r[9],q=r[13],Q=r[2],F=r[6],K=r[10],V=r[14],B=r[3],$=r[7],b=r[11],te=r[15];return a[0]=s*M+o*L+l*Q+u*B,a[4]=s*C+o*P+l*F+u*$,a[8]=s*x+o*N+l*K+u*b,a[12]=s*R+o*q+l*V+u*te,a[1]=c*M+d*L+f*Q+h*B,a[5]=c*C+d*P+f*F+h*$,a[9]=c*x+d*N+f*K+h*b,a[13]=c*R+d*q+f*V+h*te,a[2]=m*M+S*L+g*Q+p*B,a[6]=m*C+S*P+g*F+p*$,a[10]=m*x+S*N+g*K+p*b,a[14]=m*R+S*q+g*V+p*te,a[3]=_*M+y*L+E*Q+A*B,a[7]=_*C+y*P+E*F+A*$,a[11]=_*x+y*N+E*K+A*b,a[15]=_*R+y*q+E*V+A*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],S=e[7],g=e[11],p=e[15],_=l*h-u*f,y=o*h-u*d,E=o*f-l*d,A=s*h-u*c,M=s*f-l*c,C=s*d-o*c;return n*(S*_-g*y+p*E)-i*(m*_-g*A+p*M)+r*(m*y-S*A+p*C)-a*(m*E-S*M+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return n*(s*c-o*u)-i*(a*c-o*l)+r*(a*u-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],S=e[13],g=e[14],p=e[15],_=n*o-i*s,y=n*l-r*s,E=n*u-a*s,A=i*l-r*o,M=i*u-a*o,C=r*u-a*l,x=c*S-d*m,R=c*g-f*m,L=c*p-h*m,P=d*g-f*S,N=d*p-h*S,q=f*p-h*g,Q=_*q-y*N+E*P+A*L-M*R+C*x;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/Q;return e[0]=(o*q-l*N+u*P)*F,e[1]=(r*N-i*q-a*P)*F,e[2]=(S*C-g*M+p*A)*F,e[3]=(f*M-d*C-h*A)*F,e[4]=(l*L-s*q-u*R)*F,e[5]=(n*q-r*L+a*R)*F,e[6]=(g*E-m*C-p*y)*F,e[7]=(c*C-f*E+h*y)*F,e[8]=(s*N-o*L+u*x)*F,e[9]=(i*L-n*N-a*x)*F,e[10]=(m*M-S*E+p*_)*F,e[11]=(d*E-c*M-h*_)*F,e[12]=(o*R-s*P-l*x)*F,e[13]=(n*P-i*R+r*x)*F,e[14]=(S*y-m*A-g*_)*F,e[15]=(c*A-d*y+f*_)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*s,0,u*l-r*o,c*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,u=a+a,c=s+s,d=o+o,f=a*u,h=a*c,m=a*d,S=s*c,g=s*d,p=o*d,_=l*u,y=l*c,E=l*d,A=i.x,M=i.y,C=i.z;return r[0]=(1-(S+p))*A,r[1]=(h+E)*A,r[2]=(m-y)*A,r[3]=0,r[4]=(h-E)*M,r[5]=(1-(f+p))*M,r[6]=(g+_)*M,r[7]=0,r[8]=(m+y)*C,r[9]=(g-_)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let s=ya.set(r[0],r[1],r[2]).length();const o=ya.set(r[4],r[5],r[6]).length(),l=ya.set(r[8],r[9],r[10]).length();a<0&&(s=-s),jn.copy(this);const u=1/s,c=1/o,d=1/l;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,n.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,a,s,o=_i,l=!1){const u=this.elements,c=2*a/(n-e),d=2*a/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,S;if(l)m=a/(s-a),S=s*a/(s-a);else if(o===_i)m=-(s+a)/(s-a),S=-2*s*a/(s-a);else if(o===Au)m=-s/(s-a),S=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=_i,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,S;if(l)m=1/(s-a),S=s/(s-a);else if(o===_i)m=-2/(s-a),S=-(s+a)/(s-a);else if(o===Au)m=-1/(s-a),S=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ru.prototype.isMatrix4=!0;let Bt=Ru;const ya=new X,jn=new Bt,qR=new X(0,0,0),YR=new X(1,1,1),nr=new X,al=new X,Tn=new X,Rv=new Bt,Pv=new _s;class ua{constructor(e=0,n=0,i=0,r=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $R=0;const Iv=new X,Sa=new _s,Ci=new Bt,sl=new X,Ls=new X,jR=new X,KR=new _s,Lv=new X(1,0,0),Dv=new X(0,1,0),Nv=new X(0,0,1),Uv={type:"added"},ZR={type:"removed"},Ea={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Ln extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$R++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new X,n=new ua,i=new _s,r=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Oe}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Sa.setFromAxisAngle(e,n),this.quaternion.multiply(Sa),this}rotateOnWorldAxis(e,n){return Sa.setFromAxisAngle(e,n),this.quaternion.premultiply(Sa),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,n){return Iv.copy(e).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ls,sl,this.up):Ci.lookAt(sl,Ls,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Sa.setFromRotationMatrix(Ci),this.quaternion.premultiply(Sa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZR),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,jR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,KR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*r,a[13]+=i-a[1]*n-a[5]*i-a[9]*r,a[14]+=r-a[2]*n-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new X(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ol extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QR={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),p=this._getHandJoint(u,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QR)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ll={h:0,s:0,l:0};function tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=BR(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=tf(s,a,e+1/3),this.g=tf(s,a,e),this.b=tf(s,a,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(a){a!==void 0&&parseFloat(a)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Gy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return $e.workingToColorSpace(nn.copy(this),e),Math.round(je(nn.r*255,0,255))*65536+Math.round(je(nn.g*255,0,255))*256+Math.round(je(nn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,a=nn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const d=s-o;switch(u=c<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=On){$e.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(ll);const i=$c(ir.h,ll.h,n),r=$c(ir.s,ll.s,n),a=$c(ir.l,ll.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new it;it.NAMES=Gy;class JR extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new X,Ri=new X,nf=new X,Pi=new X,Ma=new X,wa=new X,Fv=new X,rf=new X,af=new X,sf=new X,of=new Ct,lf=new Ct,uf=new Ct;class ti{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Kn.subVectors(r,n),Ri.subVectors(i,n),nf.subVectors(e,n);const s=Kn.dot(Kn),o=Kn.dot(Ri),l=Kn.dot(nf),u=Ri.dot(Ri),c=Ri.dot(nf),d=s*u-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,h=(u*l-o*c)*f,m=(s*c-o*l)*f;return a.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,a,s){return of.setScalar(0),lf.setScalar(0),uf.setScalar(0),of.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,i),uf.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(of,a.x),s.addScaledVector(lf,a.y),s.addScaledVector(uf,a.z),s}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ri.subVectors(e,n),Kn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Ma.subVectors(r,i),wa.subVectors(a,i),rf.subVectors(e,i);const l=Ma.dot(rf),u=wa.dot(rf);if(l<=0&&u<=0)return n.copy(i);af.subVectors(e,r);const c=Ma.dot(af),d=wa.dot(af);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Ma,s);sf.subVectors(e,a);const h=Ma.dot(sf),m=wa.dot(sf);if(m>=0&&h<=m)return n.copy(a);const S=h*u-l*m;if(S<=0&&u>=0&&m<=0)return o=u/(u-m),n.copy(i).addScaledVector(wa,o);const g=c*m-h*d;if(g<=0&&d-c>=0&&h-m>=0)return Fv.subVectors(a,r),o=(d-c)/(d-c+(h-m)),n.copy(r).addScaledVector(Fv,o);const p=1/(g+S+f);return s=S*p,o=f*p,n.copy(i).addScaledVector(Ma,s).addScaledVector(wa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Uo{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zn):Zn.fromBufferAttribute(a,s),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),cl.subVectors(this.max,Ds),Ta.subVectors(e.a,Ds),ba.subVectors(e.b,Ds),Aa.subVectors(e.c,Ds),rr.subVectors(ba,Ta),ar.subVectors(Aa,ba),Fr.subVectors(Ta,Aa);let n=[0,-rr.z,rr.y,0,-ar.z,ar.y,0,-Fr.z,Fr.y,rr.z,0,-rr.x,ar.z,0,-ar.x,Fr.z,0,-Fr.x,-rr.y,rr.x,0,-ar.y,ar.x,0,-Fr.y,Fr.x,0];return!cf(n,Ta,ba,Aa,cl)||(n=[1,0,0,0,1,0,0,0,1],!cf(n,Ta,ba,Aa,cl))?!1:(fl.crossVectors(rr,ar),n=[fl.x,fl.y,fl.z],cf(n,Ta,ba,Aa,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new X,new X,new X,new X,new X,new X,new X,new X],Zn=new X,ul=new Uo,Ta=new X,ba=new X,Aa=new X,rr=new X,ar=new X,Fr=new X,Ds=new X,cl=new X,fl=new X,kr=new X;function cf(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){kr.fromArray(t,a);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),u=n.dot(kr),c=i.dot(kr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Ft=new X,dl=new nt;let eP=0;class Mi extends pa{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ev,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),a=pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ev&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wy extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xy extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hi extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const tP=new Uo,Ns=new X,ff=new X;class Gp{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tP.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ff)),this.expandByPoint(Ns.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nP=0;const kn=new Bt,df=new Ln,Ca=new X,bn=new Uo,Us=new Uo,Wt=new X;class Ki extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nP++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UR(e)?Xy:Wy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Hi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const a=e[r];n.setXYZ(r,a.x,a.y,a.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];bn.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(bn.min,Us.min),bn.expandByPoint(Wt),Wt.addVectors(bn.max,Us.max),bn.expandByPoint(Wt)):(bn.expandByPoint(Us.min),bn.expandByPoint(Us.max))}bn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Wt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Wt.fromBufferAttribute(o,u),l&&(Ca.fromBufferAttribute(e,u),Wt.add(Ca)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new X,l[x]=new X;const u=new X,c=new X,d=new X,f=new nt,h=new nt,m=new nt,S=new X,g=new X;function p(x,R,L){u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,L),f.fromBufferAttribute(a,x),h.fromBufferAttribute(a,R),m.fromBufferAttribute(a,L),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const P=1/(h.x*m.y-m.x*h.y);isFinite(P)&&(S.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(P),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(P),o[x].add(S),o[R].add(S),o[L].add(S),l[x].add(g),l[R].add(g),l[L].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,R=_.length;x<R;++x){const L=_[x],P=L.start,N=L.count;for(let q=P,Q=P+N;q<Q;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new X,E=new X,A=new X,M=new X;function C(x){A.fromBufferAttribute(r,x),M.copy(A);const R=o[x];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(M,R);const P=E.dot(l[x])<0?-1:1;s.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,R=_.length;x<R;++x){const L=_[x],P=L.start,N=L.count;for(let q=P,Q=P+N;q<Q;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new X,a=new X,s=new X,o=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,g),c.subVectors(s,a),d.subVectors(r,a),c.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,a),d.subVectors(r,a),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new Mi(f,c,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ki,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const a=e.morphAttributes;for(const u in a){const c=[],d=a[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iP=0;class ec extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iP++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Qa,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qa&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_a&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_a&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_a&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new X,hf=new X,hl=new X,sr=new X,pf=new X,pl=new X,mf=new X;class rP{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hf.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(hf);const a=e.distanceTo(n)*.5,s=-this.direction.dot(hl),o=sr.dot(this.direction),l=-sr.dot(hl),u=sr.lengthSq(),c=Math.abs(1-s*s);let d,f,h,m;if(c>0)if(d=s*l-o,f=s*o-l,m=a*c,d>=0)if(f>=-m)if(f<=m){const S=1/c;d*=S,f*=S,h=d*(d+s*f+2*o)+f*(s*d+f+2*l)+u}else f=a,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;else f=-a,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-a,-l),a),h=f*(f+2*l)+u):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+u);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hf).addScaledVector(hl,f),h}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(a=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(a=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,a){pf.subVectors(n,e),pl.subVectors(i,e),mf.crossVectors(pf,pl);let s=this.direction.dot(mf),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(pl.crossVectors(sr,pl));if(l<0)return null;const u=o*this.direction.dot(pf.cross(sr));if(u<0||l+u>s)return null;const c=-o*sr.dot(mf);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wp extends ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kv=new Bt,Or=new rP,ml=new Gp,Ov=new X,gl=new X,vl=new X,_l=new X,gf=new X,xl=new X,Bv=new X,yl=new X;class bi extends Ln{constructor(e=new Ki,n=new Wp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){xl.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=o[l],d=a[l];c!==0&&(gf.fromBufferAttribute(d,e),s?xl.addScaledVector(gf,c):xl.addScaledVector(gf.sub(n),c))}n.add(xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(a),Or.copy(e.ray).recast(e.near),!(ml.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ml,Ov)===null||Or.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(kv.copy(a).invert(),Or.copy(e.ray).applyMatrix4(kv),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,d=a.attributes.normal,f=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,S=f.length;m<S;m++){const g=f[m],p=s[g.materialIndex],_=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let E=_,A=y;E<A;E+=3){const M=o.getX(E),C=o.getX(E+1),x=o.getX(E+2);r=Sl(this,p,e,i,u,c,d,M,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let g=m,p=S;g<p;g+=3){const _=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);r=Sl(this,s,e,i,u,c,d,_,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,S=f.length;m<S;m++){const g=f[m],p=s[g.materialIndex],_=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let E=_,A=y;E<A;E+=3){const M=E,C=E+1,x=E+2;r=Sl(this,p,e,i,u,c,d,M,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let g=m,p=S;g<p;g+=3){const _=g,y=g+1,E=g+2;r=Sl(this,s,e,i,u,c,d,_,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function aP(t,e,n,i,r,a,s,o){let l;if(e.side===En?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Cr,o),l===null)return null;yl.copy(o),yl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(yl);return u<n.near||u>n.far?null:{distance:u,point:yl.clone(),object:t}}function Sl(t,e,n,i,r,a,s,o,l,u){t.getVertexPosition(o,gl),t.getVertexPosition(l,vl),t.getVertexPosition(u,_l);const c=aP(t,e,n,i,gl,vl,_l,Bv);if(c){const d=new X;ti.getBarycoord(Bv,gl,vl,_l,d),r&&(c.uv=ti.getInterpolatedAttribute(r,o,l,u,d,new nt)),a&&(c.uv1=ti.getInterpolatedAttribute(a,o,l,u,d,new nt)),s&&(c.normal=ti.getInterpolatedAttribute(s,o,l,u,d,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};ti.getNormal(gl,vl,_l,f.normal),c.face=f,c.barycoord=d}return c}class sP extends fn{constructor(e=null,n=1,i=1,r,a,s,o,l,u=$t,c=$t,d,f){super(null,s,o,l,u,c,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new X,oP=new X,lP=new Oe;class Wr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vf.subVectors(i,n).cross(oP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(vf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lP.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Gp,uP=new nt(.5,.5),El=new X;class qy{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,a=new Wr,s=new Wr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],u=a[3],c=a[4],d=a[5],f=a[6],h=a[7],m=a[8],S=a[9],g=a[10],p=a[11],_=a[12],y=a[13],E=a[14],A=a[15];if(r[0].setComponents(u-s,h-c,p-m,A-_).normalize(),r[1].setComponents(u+s,h+c,p+m,A+_).normalize(),r[2].setComponents(u+o,h+d,p+S,A+y).normalize(),r[3].setComponents(u-o,h-d,p-S,A-y).normalize(),i)r[4].setComponents(l,f,g,E).normalize(),r[5].setComponents(u-l,h-f,p-g,A-E).normalize();else if(r[4].setComponents(u-l,h-f,p-g,A-E).normalize(),n===_i)r[5].setComponents(u+l,h+f,p+g,A+E).normalize();else if(n===Au)r[5].setComponents(l,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=uP.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yy extends fn{constructor(e=[],n=oa,i,r,a,s,o,l,u,c){super(e,n,i,r,a,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fs extends fn{constructor(e,n,i=Ti,r,a,s,o=$t,l=$t,u,c=$i,d=1){if(c!==$i&&c!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,a,s,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cP extends fs{constructor(e,n=Ti,i=oa,r,a,s=$t,o=$t,l,u=$i){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,a,s,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $y extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xs extends Ki{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,n,e,s,a,0),m("z","y","x",1,-1,i,n,-e,s,a,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,a,4),m("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Hi(u,3)),this.setAttribute("normal",new Hi(c,3)),this.setAttribute("uv",new Hi(d,2));function m(S,g,p,_,y,E,A,M,C,x,R){const L=E/C,P=A/x,N=E/2,q=A/2,Q=M/2,F=C+1,K=x+1;let V=0,B=0;const $=new X;for(let b=0;b<K;b++){const te=b*P-q;for(let oe=0;oe<F;oe++){const I=oe*L-N;$[S]=I*_,$[g]=te*y,$[p]=Q,u.push($.x,$.y,$.z),$[S]=0,$[g]=0,$[p]=M>0?1:-1,c.push($.x,$.y,$.z),d.push(oe/C),d.push(1-b/x),V+=1}}for(let b=0;b<x;b++)for(let te=0;te<C;te++){const oe=f+te+F*b,I=f+te+F*(b+1),ze=f+(te+1)+F*(b+1),Be=f+(te+1)+F*b;l.push(oe,I,Be),l.push(I,ze,Be),B+=6}o.addGroup(h,B,R),h+=B,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tc extends Ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=n/l,h=[],m=[],S=[],g=[];for(let p=0;p<c;p++){const _=p*f-s;for(let y=0;y<u;y++){const E=y*d-a;m.push(E,-_,0),S.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+u*p,E=_+u*(p+1),A=_+1+u*(p+1),M=_+1+u*p;h.push(y,E,M),h.push(E,A,M)}this.setIndex(h),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(S,3)),this.setAttribute("uv",new Hi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zv(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zv(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[n][i]=a}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function zv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const dP={clone:ds,merge:ln};var hP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hP,this.fragmentShader=pP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=fP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mP extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gP extends ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vP extends ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ml=new X,wl=new _s,ci=new X;class Ky extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,wl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,wl,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ml,wl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,wl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new X,Vv=new nt,Hv=new nt;class Hn extends Ky{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,Vv,Hv),n.subVectors(Hv,Vv)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Zy extends Ky{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ra=-90,Pa=1;class _P extends Ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Ra,Pa,e,n);r.layers=this.layers,this.add(r);const a=new Hn(Ra,Pa,e,n);a.layers=this.layers,this.add(a);const s=new Hn(Ra,Pa,e,n);s.layers=this.layers,this.add(s);const o=new Hn(Ra,Pa,e,n);o.layers=this.layers,this.add(o);const l=new Hn(Ra,Pa,e,n);l.layers=this.layers,this.add(l);const u=new Hn(Ra,Pa,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class xP extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jp=class jp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const a=this.elements;return a[0]=e,a[2]=n,a[1]=i,a[3]=r,this}};jp.prototype.isMatrix2=!0;let Gv=jp;function Wv(t,e,n,i){const r=yP(i);switch(n){case ky:return t*e;case By:return t*e/r.components*r.byteLength;case kp:return t*e/r.components*r.byteLength;case la:return t*e*2/r.components*r.byteLength;case Op:return t*e*2/r.components*r.byteLength;case Oy:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case Bp:return t*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case qd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case $d:case Kd:case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:case Mu:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gh:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wu:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yP(t){switch(t){case Gn:case Dy:return{byteLength:1,components:1};case Mo:case Ny:case Yi:return{byteLength:2,components:1};case Up:case Fp:return{byteLength:2,components:4};case Ti:case Np:case vi:return{byteLength:4,components:1};case Uy:case Fy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qy(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function SP(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],S=d[h];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++f,d[f]=S)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const S=d[h];t.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:a,update:s}}var EP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$P=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QP="gl_FragColor = linearToOutputTexel( gl_FragColor );",JP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,p3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,T3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_I=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,II=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$I=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:EP,alphahash_pars_fragment:MP,alphamap_fragment:wP,alphamap_pars_fragment:TP,alphatest_fragment:bP,alphatest_pars_fragment:AP,aomap_fragment:CP,aomap_pars_fragment:RP,batching_pars_vertex:PP,batching_vertex:IP,begin_vertex:LP,beginnormal_vertex:DP,bsdfs:NP,iridescence_fragment:UP,bumpmap_pars_fragment:FP,clipping_planes_fragment:kP,clipping_planes_pars_fragment:OP,clipping_planes_pars_vertex:BP,clipping_planes_vertex:zP,color_fragment:VP,color_pars_fragment:HP,color_pars_vertex:GP,color_vertex:WP,common:XP,cube_uv_reflection_fragment:qP,defaultnormal_vertex:YP,displacementmap_pars_vertex:$P,displacementmap_vertex:jP,emissivemap_fragment:KP,emissivemap_pars_fragment:ZP,colorspace_fragment:QP,colorspace_pars_fragment:JP,envmap_fragment:e3,envmap_common_pars_fragment:t3,envmap_pars_fragment:n3,envmap_pars_vertex:i3,envmap_physical_pars_fragment:p3,envmap_vertex:r3,fog_vertex:a3,fog_pars_vertex:s3,fog_fragment:o3,fog_pars_fragment:l3,gradientmap_pars_fragment:u3,lightmap_pars_fragment:c3,lights_lambert_fragment:f3,lights_lambert_pars_fragment:d3,lights_pars_begin:h3,lights_toon_fragment:m3,lights_toon_pars_fragment:g3,lights_phong_fragment:v3,lights_phong_pars_fragment:_3,lights_physical_fragment:x3,lights_physical_pars_fragment:y3,lights_fragment_begin:S3,lights_fragment_maps:E3,lights_fragment_end:M3,lightprobes_pars_fragment:w3,logdepthbuf_fragment:T3,logdepthbuf_pars_fragment:b3,logdepthbuf_pars_vertex:A3,logdepthbuf_vertex:C3,map_fragment:R3,map_pars_fragment:P3,map_particle_fragment:I3,map_particle_pars_fragment:L3,metalnessmap_fragment:D3,metalnessmap_pars_fragment:N3,morphinstance_vertex:U3,morphcolor_vertex:F3,morphnormal_vertex:k3,morphtarget_pars_vertex:O3,morphtarget_vertex:B3,normal_fragment_begin:z3,normal_fragment_maps:V3,normal_pars_fragment:H3,normal_pars_vertex:G3,normal_vertex:W3,normalmap_pars_fragment:X3,clearcoat_normal_fragment_begin:q3,clearcoat_normal_fragment_maps:Y3,clearcoat_pars_fragment:$3,iridescence_pars_fragment:j3,opaque_fragment:K3,packing:Z3,premultiplied_alpha_fragment:Q3,project_vertex:J3,dithering_fragment:eI,dithering_pars_fragment:tI,roughnessmap_fragment:nI,roughnessmap_pars_fragment:iI,shadowmap_pars_fragment:rI,shadowmap_pars_vertex:aI,shadowmap_vertex:sI,shadowmask_pars_fragment:oI,skinbase_vertex:lI,skinning_pars_vertex:uI,skinning_vertex:cI,skinnormal_vertex:fI,specularmap_fragment:dI,specularmap_pars_fragment:hI,tonemapping_fragment:pI,tonemapping_pars_fragment:mI,transmission_fragment:gI,transmission_pars_fragment:vI,uv_pars_fragment:_I,uv_pars_vertex:xI,uv_vertex:yI,worldpos_vertex:SI,background_vert:EI,background_frag:MI,backgroundCube_vert:wI,backgroundCube_frag:TI,cube_vert:bI,cube_frag:AI,depth_vert:CI,depth_frag:RI,distance_vert:PI,distance_frag:II,equirect_vert:LI,equirect_frag:DI,linedashed_vert:NI,linedashed_frag:UI,meshbasic_vert:FI,meshbasic_frag:kI,meshlambert_vert:OI,meshlambert_frag:BI,meshmatcap_vert:zI,meshmatcap_frag:VI,meshnormal_vert:HI,meshnormal_frag:GI,meshphong_vert:WI,meshphong_frag:XI,meshphysical_vert:qI,meshphysical_frag:YI,meshtoon_vert:$I,meshtoon_frag:jI,points_vert:KI,points_frag:ZI,shadow_vert:QI,shadow_frag:JI,sprite_vert:e2,sprite_frag:t2},ve={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},pi={basic:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:ln([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:ln([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:ln([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:ln([ve.common,ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:ln([ve.lights,ve.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pi.physical={uniforms:ln([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Tl={r:0,b:0,g:0},n2=new Bt,Jy=new Oe;Jy.set(-1,0,0,0,1,0,0,0,1);function i2(t,e,n,i,r,a){const s=new it(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function h(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const E=_.backgroundBlurriness>0;y=e.get(y,E)}return y}function m(_){let y=!1;const E=h(_);E===null?g(s,o):E&&E.isColor&&(g(E,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(_,y){const E=h(y);E&&(E.isCubeTexture||E.mapping===Ju)?(u===void 0&&(u=new bi(new xs(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ds(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n2.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Jy),u.material.toneMapped=$e.getTransfer(E.colorSpace)!==at,(c!==E||d!==E.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=E,d=E.version,f=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new bi(new tc(2,2),new Ai({name:"BackgroundMaterial",uniforms:ds(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||d!==E.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=E,d=E.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(Tl,jy(t)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,y,a)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(_,y=1){s.set(_),o=y,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(s,o)},render:m,addToRenderList:S,dispose:p}}function r2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(P,N,q,Q,F){let K=!1;const V=d(P,Q,q,N);a!==V&&(a=V,u(a.object)),K=h(P,Q,q,F),K&&m(P,Q,q,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,E(P,N,q,Q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function d(P,N,q,Q){const F=Q.wireframe===!0;let K=i[N.id];K===void 0&&(K={},i[N.id]=K);const V=P.isInstancedMesh===!0?P.id:0;let B=K[V];B===void 0&&(B={},K[V]=B);let $=B[q.id];$===void 0&&($={},B[q.id]=$);let b=$[F];return b===void 0&&(b=f(l()),$[F]=b),b}function f(P){const N=[],q=[],Q=[];for(let F=0;F<n;F++)N[F]=0,q[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:Q,object:P,attributes:{},index:null}}function h(P,N,q,Q){const F=a.attributes,K=N.attributes;let V=0;const B=q.getAttributes();for(const $ in B)if(B[$].location>=0){const te=F[$];let oe=K[$];if(oe===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;V++}return a.attributesNum!==V||a.index!==Q}function m(P,N,q,Q){const F={},K=N.attributes;let V=0;const B=q.getAttributes();for(const $ in B)if(B[$].location>=0){let te=K[$];te===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),F[$]=oe,V++}a.attributes=F,a.attributesNum=V,a.index=Q}function S(){const P=a.newAttributes;for(let N=0,q=P.length;N<q;N++)P[N]=0}function g(P){p(P,0)}function p(P,N){const q=a.newAttributes,Q=a.enabledAttributes,F=a.attributeDivisors;q[P]=1,Q[P]===0&&(t.enableVertexAttribArray(P),Q[P]=1),F[P]!==N&&(t.vertexAttribDivisor(P,N),F[P]=N)}function _(){const P=a.newAttributes,N=a.enabledAttributes;for(let q=0,Q=N.length;q<Q;q++)N[q]!==P[q]&&(t.disableVertexAttribArray(q),N[q]=0)}function y(P,N,q,Q,F,K,V){V===!0?t.vertexAttribIPointer(P,N,q,F,K):t.vertexAttribPointer(P,N,q,Q,F,K)}function E(P,N,q,Q){S();const F=Q.attributes,K=q.getAttributes(),V=N.defaultAttributeValues;for(const B in K){const $=K[B];if($.location>=0){let b=F[B];if(b===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(b=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(b=P.instanceColor)),b!==void 0){const te=b.normalized,oe=b.itemSize,I=e.get(b);if(I===void 0)continue;const ze=I.buffer,Be=I.type,j=I.bytesPerElement,ue=Be===t.INT||Be===t.UNSIGNED_INT||b.gpuType===Np;if(b.isInterleavedBufferAttribute){const re=b.data,Le=re.stride,Ne=b.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<$.locationSize;Pe++)p($.location+Pe,re.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)g($.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Pe=0;Pe<$.locationSize;Pe++)y($.location+Pe,oe/$.locationSize,Be,te,Le*j,(Ne+oe/$.locationSize*Pe)*j,ue)}else{if(b.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)p($.location+re,b.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let re=0;re<$.locationSize;re++)g($.location+re);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let re=0;re<$.locationSize;re++)y($.location+re,oe/$.locationSize,Be,te,oe*j,oe/$.locationSize*re*j,ue)}}else if(V!==void 0){const te=V[B];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv($.location,te);break;case 3:t.vertexAttrib3fv($.location,te);break;case 4:t.vertexAttrib4fv($.location,te);break;default:t.vertexAttrib1fv($.location,te)}}}}_()}function A(){R();for(const P in i){const N=i[P];for(const q in N){const Q=N[q];for(const F in Q){const K=Q[F];for(const V in K)c(K[V].object),delete K[V];delete Q[F]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const q in N){const Q=N[q];for(const F in Q){const K=Q[F];for(const V in K)c(K[V].object),delete K[V];delete Q[F]}}delete i[P.id]}function C(P){for(const N in i){const q=i[N];for(const Q in q){const F=q[Q];if(F[P.id]===void 0)continue;const K=F[P.id];for(const V in K)c(K[V].object),delete K[V];delete F[P.id]}}}function x(P){for(const N in i){const q=i[N],Q=P.isInstancedMesh===!0?P.id:0,F=q[Q];if(F!==void 0){for(const K in F){const V=F[K];for(const B in V)c(V[B].object),delete V[B];delete F[K]}delete q[Q],Object.keys(q).length===0&&delete i[N]}}}function R(){L(),s=!0,a!==r&&(a=r,u(a.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:_}}function a2(t,e,n){let i;function r(l){i=l}function a(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];n.update(f,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function s2(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==ni&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Ue("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:E,maxSamples:A,samples:M}}function o2(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Wr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||m===null||m.length===0||a&&!g)a?c(null):u();else{const _=a?0:i,y=_*4;let E=p.clippingState||null;l.value=E,E=c(m,f,y,h);for(let A=0;A!==y;++A)E[A]=n[A];p.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,m!==!0||g===null){const p=h+S*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,E=h;y!==S;++y,E+=4)s.copy(d[y]).applyMatrix4(_,o),s.normal.toArray(g,E),g[E+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const gr=4,Xv=[.125,.215,.35,.446,.526,.582],Yr=20,l2=256,Fs=new Zy,qv=new it;let _f=null,xf=0,yf=0,Sf=!1;const u2=new X;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,a={}){const{size:s=256,position:o=u2}=a;_f=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_f,xf,yf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oa||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Yi,format:ni,colorSpace:Tu,depthBuffer:!1},r=$v(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,n,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c2(a)),this._blurMaterial=d2(a,e,n),this._ggxMaterial=f2(a,e,n)}return r}_compileMaterial(e){const n=new bi(new Ki,e);this._renderer.compile(n,Fs)}_sceneToCubeUV(e,n,i,r,a){const l=new Hn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qv),d.toneMapping=Si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new xs,new Wp({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let p=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(qv),p=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,u[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+c[y],a.y,a.z)):E===1?(l.up.set(0,0,u[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+c[y],a.z)):(l.up.set(0,u[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+c[y]));const A=this._cubeSize;Ia(r,E*A,y>2?A:0,A,A),d.setRenderTarget(r),p&&d.render(S,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===oa||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jv());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ia(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Fs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:m}=this,S=this._sizeLods[i],g=3*S*(i>m-gr?i-m+gr:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Ia(a,g,p,3*S,2*S),r.setRenderTarget(a),r.render(o,Fs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-i,Ia(e,g,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Fs)}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Yr-1),S=a/m,g=isFinite(a)?1+Math.floor(c*S):Yr;g>Yr&&Ue(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yr}`);const p=[];let _=0;for(let C=0;C<Yr;++C){const x=C/S,R=Math.exp(-x*x/2);p.push(R),C===0?_+=R:C<g&&(_+=2*R)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const E=this._sizeLods[r],A=3*E*(r>y-gr?r-y+gr:0),M=4*(this._cubeSize-E);Ia(n,A,M,3*E,2*E),l.setRenderTarget(n),l.render(d,Fs)}}function c2(t){const e=[],n=[],i=[];let r=t;const a=t-gr+1+Xv.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>t-gr?l=Xv[s-t+gr-1]:s===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,m=6,S=3,g=2,p=1,_=new Float32Array(S*m*h),y=new Float32Array(g*m*h),E=new Float32Array(p*m*h);for(let M=0;M<h;M++){const C=M%3*2/3-1,x=M>2?0:-1,R=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];_.set(R,S*m*M),y.set(f,g*m*M);const L=[M,M,M,M,M,M];E.set(L,p*m*M)}const A=new Ki;A.setAttribute("position",new Mi(_,S)),A.setAttribute("uv",new Mi(y,g)),A.setAttribute("faceIndex",new Mi(E,p)),i.push(new bi(A,null)),r>gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $v(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=Ju,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f2(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function d2(t,e,n){const i=new Float32Array(Yr),r=new X(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function jv(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Kv(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class eS extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xs(5,5,5),a=new Ai({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:zi});a.uniforms.tEquirect.value=n;const s=new bi(r,a),o=n.minFilter;return n.minFilter===Zr&&(n.minFilter=an),new _P(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}function h2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):a(f)}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Wc||h===Xc)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const S=new eS(m.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",u),o(S.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Wc||h===Xc,S=h===oa||h===cs;if(m||S){let g=n.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Yv(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const _=f.image;return m&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new Yv(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f,h){return h===Wc?f.mapping=oa:h===Xc&&(f.mapping=cs),f}function l(f){let h=0;const m=6;for(let S=0;S<m;S++)f[S]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function p2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("WebGLRenderer: "+i+" extension not supported."),r}}}function m2(t,e,n,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];const h=a.get(f);h&&(e.remove(h),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let S=0;if(m===void 0)return;if(h!==null){const _=h.array;S=h.version;for(let y=0,E=_.length;y<E;y+=3){const A=_[y+0],M=_[y+1],C=_[y+2];f.push(A,M,M,C,C,A)}}else{const _=m.array;S=m.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const A=y+0,M=y+1,C=y+2;f.push(A,M,M,C,C,A)}}const g=new(m.count>=65535?Xy:Wy)(f,1);g.version=S;const p=a.get(d);p&&e.remove(p),a.set(d,g)}function c(d){const f=a.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function g2(t,e,n){let i;function r(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,f){t.drawElements(i,f,a,d*s),n.update(f,i,1)}function u(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,a,d*s,h),n.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,h);let S=0;for(let g=0;g<h;g++)S+=f[g];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function v2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:Qe("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _2(t,e,n){const i=new WeakMap,r=new Ct;function a(s,o,l){const u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var h=L;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),S===!0&&(E=2),g===!0&&(E=3);let A=o.attributes.position.count*E,M=1;A>e.maxTextureSize&&(M=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*M*4*d),x=new Vy(C,A,M,d);x.type=vi,x.needsUpdate=!0;const R=E*4;for(let P=0;P<d;P++){const N=p[P],q=_[P],Q=y[P],F=A*M*4*P;for(let K=0;K<N.count;K++){const V=K*R;m===!0&&(r.fromBufferAttribute(N,K),C[F+V+0]=r.x,C[F+V+1]=r.y,C[F+V+2]=r.z,C[F+V+3]=0),S===!0&&(r.fromBufferAttribute(q,K),C[F+V+4]=r.x,C[F+V+5]=r.y,C[F+V+6]=r.z,C[F+V+7]=0),g===!0&&(r.fromBufferAttribute(Q,K),C[F+V+8]=r.x,C[F+V+9]=r.y,C[F+V+10]=r.z,C[F+V+11]=Q.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new nt(A,M)},i.set(o,f),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const S=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:a}}function x2(t,e,n,i,r){let a=new WeakMap;function s(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),a.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),a.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function o(){a=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const y2={[Ty]:"LINEAR_TONE_MAPPING",[by]:"REINHARD_TONE_MAPPING",[Ay]:"CINEON_TONE_MAPPING",[Cy]:"ACES_FILMIC_TONE_MAPPING",[Py]:"AGX_TONE_MAPPING",[Iy]:"NEUTRAL_TONE_MAPPING",[Ry]:"CUSTOM_TONE_MAPPING"};function S2(t,e,n,i,r,a){const s=new Ei(e,n,{type:t,depthBuffer:r,stencilBuffer:a,samples:i?4:0,depthTexture:r?new fs(e,n):void 0}),o=new Ei(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),l=new Ki;l.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const u=new mP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bi(l,u),d=new Zy(-1,1,1,-1,0,1);let f=null,h=null,m=!1,S,g=null,p=[],_=!1;this.setSize=function(y,E){s.setSize(y,E),o.setSize(y,E);for(let A=0;A<p.length;A++){const M=p[A];M.setSize&&M.setSize(y,E)}},this.setEffects=function(y){p=y,_=p.length>0&&p[0].isRenderPass===!0;const E=s.width,A=s.height;for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(E,A)}},this.begin=function(y,E){if(m||y.toneMapping===Si&&p.length===0)return!1;if(g=E,E!==null){const A=E.width,M=E.height;(s.width!==A||s.height!==M)&&this.setSize(A,M)}return _===!1&&y.setRenderTarget(s),S=y.toneMapping,y.toneMapping=Si,!0},this.hasRenderPass=function(){return _},this.end=function(y,E){y.toneMapping=S,m=!0;let A=s,M=o;for(let C=0;C<p.length;C++){const x=p[C];if(x.enabled!==!1&&(x.render(y,M,A,E),x.needsSwap!==!1)){const R=A;A=M,M=R}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,u.defines={},$e.getTransfer(f)===at&&(u.defines.SRGB_TRANSFER="");const C=y2[h];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(g),y.render(c,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),u.dispose()}}const tS=new fn,yh=new fs(1,1),nS=new Vy,iS=new XR,rS=new Yy,Zv=[],Qv=[],Jv=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Zv[r];if(a===void 0&&(a=new Float32Array(r),Zv[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ic(t,e){let n=Qv[e];n===void 0&&(n=new Int32Array(e),Qv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function E2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function b2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;t0.set(i),t.uniformMatrix2fv(this.addr,!1,t0),Gt(n,i)}}function A2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;e0.set(i),t.uniformMatrix3fv(this.addr,!1,e0),Gt(n,i)}}function C2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Jv.set(i),t.uniformMatrix4fv(this.addr,!1,Jv),Gt(n,i)}}function R2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function D2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function k2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(yh.compareFunction=n.isReversedDepthBuffer()?Vp:zp,a=yh):a=tS,n.setTexture2D(e||a,r)}function O2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iS,r)}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rS,r)}function z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nS,r)}function V2(t){switch(t){case 5126:return E2;case 35664:return M2;case 35665:return w2;case 35666:return T2;case 35674:return b2;case 35675:return A2;case 35676:return C2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return L2;case 5125:return D2;case 36294:return N2;case 36295:return U2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}function H2(t,e){t.uniform1fv(this.addr,e)}function G2(t,e){const n=ys(e,this.size,2);t.uniform2fv(this.addr,n)}function W2(t,e){const n=ys(e,this.size,3);t.uniform3fv(this.addr,n)}function X2(t,e){const n=ys(e,this.size,4);t.uniform4fv(this.addr,n)}function q2(t,e){const n=ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Y2(t,e){const n=ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $2(t,e){const n=ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function j2(t,e){t.uniform1iv(this.addr,e)}function K2(t,e){t.uniform2iv(this.addr,e)}function Z2(t,e){t.uniform3iv(this.addr,e)}function Q2(t,e){t.uniform4iv(this.addr,e)}function J2(t,e){t.uniform1uiv(this.addr,e)}function eL(t,e){t.uniform2uiv(this.addr,e)}function tL(t,e){t.uniform3uiv(this.addr,e)}function nL(t,e){t.uniform4uiv(this.addr,e)}function iL(t,e,n){const i=this.cache,r=e.length,a=ic(n,r);Ht(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));let s;this.type===t.SAMPLER_2D_SHADOW?s=yh:s=tS;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||s,a[o])}function rL(t,e,n){const i=this.cache,r=e.length,a=ic(n,r);Ht(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||iS,a[s])}function aL(t,e,n){const i=this.cache,r=e.length,a=ic(n,r);Ht(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||rS,a[s])}function sL(t,e,n){const i=this.cache,r=e.length,a=ic(n,r);Ht(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||nS,a[s])}function oL(t){switch(t){case 5126:return H2;case 35664:return G2;case 35665:return W2;case 35666:return X2;case 35674:return q2;case 35675:return Y2;case 35676:return $2;case 5124:case 35670:return j2;case 35667:case 35671:return K2;case 35668:case 35672:return Z2;case 35669:case 35673:return Q2;case 5125:return J2;case 36294:return eL;case 36295:return tL;case 36296:return nL;case 35678:case 36198:case 36298:case 36306:case 35682:return iL;case 35679:case 36299:case 36307:return rL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return sL}}class lL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=V2(n.type)}}class uL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oL(n.type)}}class cL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function n0(t,e){t.seq.push(e),t.map[e.id]=e}function fL(t,e,n){const i=t.name,r=i.length;for(Ef.lastIndex=0;;){const a=Ef.exec(i),s=Ef.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===r){n0(n,u===void 0?new lL(o,t,e):new uL(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new cL(o),n0(n,d)),n=d}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);fL(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function i0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dL=37297;let hL=0;function pL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const r0=new Oe;function mL(t){$e._getMatrix(r0,$e.workingColorSpace,t);const e=`mat3( ${r0.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case bu:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+pL(t.getShaderSource(e),o)}else return a}function gL(t,e){const n=mL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vL={[Ty]:"Linear",[by]:"Reinhard",[Ay]:"Cineon",[Cy]:"ACESFilmic",[Py]:"AgX",[Iy]:"Neutral",[Ry]:"Custom"};function _L(t,e){const n=vL[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new X;function xL(){$e.getLuminanceCoefficients(bl);const t=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function SL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Gs(t){return t!==""}function s0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ML=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(t){return t.replace(ML,TL)}const wL=new Map;function TL(t,e){let n=Ge[e];if(n===void 0){const i=wL.get(e);if(i!==void 0)n=Ge[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sh(n)}const bL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(t){return t.replace(bL,AL)}function AL(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function u0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CL={[Vl]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function RL(t){return CL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PL={[oa]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function IL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":PL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LL={[cs]:"ENVMAP_MODE_REFRACTION"};function DL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NL={[wy]:"ENVMAP_BLENDING_MULTIPLY",[wR]:"ENVMAP_BLENDING_MIX",[TR]:"ENVMAP_BLENDING_ADD"};function UL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NL[t.combine]||"ENVMAP_BLENDING_NONE"}function FL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kL(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=RL(n),u=IL(n),c=DL(n),d=UL(n),f=FL(n),h=yL(n),m=SL(a),S=r.createProgram();let g,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(g=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Si?_L("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gL("linearToOutputTexel",n.outputColorSpace),xL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gs).join(`
`)),s=Sh(s),s=s0(s,n),s=o0(s,n),o=Sh(o),o=s0(o,n),o=o0(o,n),s=l0(s),o=l0(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+g+s,E=_+p+o,A=i0(r,r.VERTEX_SHADER,y),M=i0(r,r.FRAGMENT_SHADER,E);r.attachShader(S,A),r.attachShader(S,M),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",q=r.getShaderInfoLog(A)||"",Q=r.getShaderInfoLog(M)||"",F=N.trim(),K=q.trim(),V=Q.trim();let B=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,A,M);else{const b=a0(r,A,"vertex"),te=a0(r,M,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+b+`
`+te)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(K===""||V==="")&&($=!1);$&&(P.diagnostics={runnable:B,programLog:F,vertexShader:{log:K,prefix:g},fragmentShader:{log:V,prefix:p}})}r.deleteShader(A),r.deleteShader(M),x=new ql(r,S),R=EL(r,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(S,dL)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hL++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=M,this}let OL=0;class BL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zL(e),n.set(e,i)),i}}class zL{constructor(e){this.id=OL++,this.code=e,this.usedTimes=0}}function VL(t){return t===la||t===Mu||t===wu}function HL(t,e,n,i,r,a){const s=new Hy,o=new BL,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,R,L,P,N,q){const Q=P.fog,F=N.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||K,V),$=B&&B.mapping===Ju?B.image.height:null,b=h[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=te!==void 0?te.length:0;let I=0;F.morphAttributes.position!==void 0&&(I=1),F.morphAttributes.normal!==void 0&&(I=2),F.morphAttributes.color!==void 0&&(I=3);let ze,Be,j,ue;if(b){const Te=pi[b];ze=Te.vertexShader,Be=Te.fragmentShader}else{ze=x.vertexShader,Be=x.fragmentShader;const Te=o.getVertexShaderStage(x),Tt=o.getFragmentShaderStage(x);o.update(x,Te,Tt),j=Te.id,ue=Tt.id}const re=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,xt=!!x.map,Xe=!!x.matcap,rt=!!B,Ke=!!x.aoMap,Ye=!!x.lightMap,yt=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,It=!!x.displacementMap,Ut=!!x.emissiveMap,vt=!!x.metalnessMap,wt=!!x.roughnessMap,k=x.anisotropy>0,Zt=x.clearcoat>0,et=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,D=x.transmission>0,O=k&&!!x.anisotropyMap,H=Zt&&!!x.clearcoatMap,ae=Zt&&!!x.clearcoatNormalMap,fe=Zt&&!!x.clearcoatRoughnessMap,Z=w&&!!x.iridescenceMap,J=w&&!!x.iridescenceThicknessMap,de=v&&!!x.sheenColorMap,Se=v&&!!x.sheenRoughnessMap,pe=!!x.specularMap,ce=!!x.specularColorMap,Ie=!!x.specularIntensityMap,De=D&&!!x.transmissionMap,Ve=D&&!!x.thicknessMap,U=!!x.gradientMap,me=!!x.alphaMap,ee=x.alphaTest>0,ge=!!x.alphaHash,ye=!!x.extensions;let ne=Si;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ae={shaderID:b,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Be,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:Xe,envMap:rt,envMapMode:rt&&B.mapping,envMapCubeUVHeight:$,aoMap:Ke,lightMap:Ye,bumpMap:yt,normalMap:Pt,displacementMap:It,emissiveMap:Ut,normalMapObjectSpace:Pt&&x.normalMapType===CR,normalMapTangentSpace:Pt&&x.normalMapType===yv,packedNormalMap:Pt&&x.normalMapType===yv&&VL(x.normalMap.format),metalnessMap:vt,roughnessMap:wt,anisotropy:k,anisotropyMap:O,clearcoat:Zt,clearcoatMap:H,clearcoatNormalMap:ae,clearcoatRoughnessMap:fe,dispersion:et,iridescence:w,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:v,sheenColorMap:de,sheenRoughnessMap:Se,specularMap:pe,specularColorMap:ce,specularIntensityMap:Ie,transmission:D,transmissionMap:De,thicknessMap:Ve,gradientMap:U,opaque:x.transparent===!1&&x.blending===Qa&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:ge,combine:x.combine,mapUv:xt&&m(x.map.channel),aoMapUv:Ke&&m(x.aoMap.channel),lightMapUv:Ye&&m(x.lightMap.channel),bumpMapUv:yt&&m(x.bumpMap.channel),normalMapUv:Pt&&m(x.normalMap.channel),displacementMapUv:It&&m(x.displacementMap.channel),emissiveMapUv:Ut&&m(x.emissiveMap.channel),metalnessMapUv:vt&&m(x.metalnessMap.channel),roughnessMapUv:wt&&m(x.roughnessMap.channel),anisotropyMapUv:O&&m(x.anisotropyMap.channel),clearcoatMapUv:H&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(x.sheenRoughnessMap.channel),specularMapUv:pe&&m(x.specularMap.channel),specularColorMapUv:ce&&m(x.specularColorMap.channel),specularIntensityMapUv:Ie&&m(x.specularIntensityMap.channel),transmissionMapUv:De&&m(x.transmissionMap.channel),thicknessMapUv:Ve&&m(x.thicknessMap.channel),alphaMapUv:me&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||k),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(xt||me),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:I,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)R.push(L),R.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(R,x),_(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function _(x,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function y(x){const R=h[x.type];let L;if(R){const P=pi[R];L=dP.clone(P.uniforms)}else L=x.uniforms;return L}function E(x,R){let L=c.get(R);return L!==void 0?++L.usedTimes:(L=new kL(t,R,x,r),u.push(L),c.set(R,L)),L}function A(x){if(--x.usedTimes===0){const R=u.indexOf(x);u[R]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:C}}function GL(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function r(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:a}}function WL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function c0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function f0(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,S,g,p){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,materialVariant:s(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:p},t[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.materialVariant=s(f),_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=g,_.group=p),e++,_}function l(f,h,m,S,g,p){const _=o(f,h,m,S,g,p);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):n.push(_)}function u(f,h,m,S,g,p){const _=o(f,h,m,S,g,p);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):n.unshift(_)}function c(f,h,m){n.length>1&&n.sort(f||WL),i.length>1&&i.sort(h||c0),r.length>1&&r.sort(h||c0),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:l,unshift:u,finish:d,sort:c}}function XL(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new f0,t.set(i,[s])):r>=a.length?(s=new f0,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function qL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new it};break;case"SpotLight":n={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function YL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $L=0;function jL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KL(t){const e=new qL,n=YL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,a=new Bt,s=new Bt;function o(u){let c=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,m=0,S=0,g=0,p=0,_=0,y=0,E=0,A=0,M=0,C=0;u.sort(jL);for(let R=0,L=u.length;R<L;R++){const P=u[R],N=P.color,q=P.intensity,Q=P.distance;let F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===la?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=N.r*q,d+=N.g*q,f+=N.b*q;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],q);C++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,B=n.get(P);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=P.shadow.matrix,_++}i.directional[h]=K,h++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(N).multiplyScalar(q),K.distance=Q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[S]=K;const V=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,V.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[S]=V.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.spotShadow[S]=B,i.spotShadowMap[S]=F,E++}S++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(N).multiplyScalar(q),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=K,g++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const V=P.shadow,B=n.get(P);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=K,m++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(q),K.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[p]=K,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==h||x.pointLength!==m||x.spotLength!==S||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==_||x.numPointShadows!==y||x.numSpotShadows!==E||x.numSpotMaps!==A||x.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=S,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,x.directionalLength=h,x.pointLength=m,x.spotLength=S,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=_,x.numPointShadows=y,x.numSpotShadows=E,x.numSpotMaps=A,x.numLightProbes=C,i.version=$L++)}function l(u,c){let d=0,f=0,h=0,m=0,S=0;const g=c.matrixWorldInverse;for(let p=0,_=u.length;p<_;p++){const y=u[p];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(y.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(y.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),s.identity(),a.copy(y.matrixWorld),a.premultiply(g),s.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),m++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function d0(t){const e=new KL(t),n=[],i=[],r=[];function a(f){d.camera=f,n.length=0,i.length=0,r.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:u,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function ZL(t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new d0(t),e.set(r,[o])):a>=s.length?(o=new d0(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const QL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eD=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],tD=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],h0=new Bt,ks=new X,Mf=new X;function nD(t,e,n){let i=new qy;const r=new nt,a=new nt,s=new Ct,o=new gP,l=new vP,u={},c=n.maxTextureSize,d={[Cr]:En,[En]:Cr,[Ui]:Ui},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:QL,fragmentShader:JL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Ki;m.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new bi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let p=this.type;this.render=function(M,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===aR&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vl);const R=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const q=p!==this.type;q&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(F=>F.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,F=M.length;Q<F;Q++){const K=M[Q],V=K.shadow;if(V===void 0){Ue("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const B=V.getFrameExtents();r.multiply(B),a.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/B.x),r.x=a.x*B.x,V.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/B.y),r.y=a.y*B.y,V.mapSize.y=a.y));const $=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Hs){if(K.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ei(r.x,r.y,{format:la,type:Yi,minFilter:an,magFilter:an,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new fs(r.x,r.y,vi),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=$i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$t,V.map.depthTexture.magFilter=$t}else K.isPointLight?(V.map=new eS(r.x),V.map.depthTexture=new cP(r.x,Ti)):(V.map=new Ei(r.x,r.y),V.map.depthTexture=new fs(r.x,r.y,Ti)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=$i,this.type===Vl?(V.map.depthTexture.compareFunction=$?Vp:zp,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$t,V.map.depthTexture.magFilter=$t);V.camera.updateProjectionMatrix()}const b=V.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<b;te++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,te),t.clear();else{te===0&&(t.setRenderTarget(V.map),t.clear());const oe=V.getViewport(te);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),N.viewport(s)}if(K.isPointLight){const oe=V.camera,I=V.matrix,ze=K.distance||oe.far;ze!==oe.far&&(oe.far=ze,oe.updateProjectionMatrix()),ks.setFromMatrixPosition(K.matrixWorld),oe.position.copy(ks),Mf.copy(oe.position),Mf.add(eD[te]),oe.up.copy(tD[te]),oe.lookAt(Mf),oe.updateMatrixWorld(),I.makeTranslation(-ks.x,-ks.y,-ks.z),h0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(h0,oe.coordinateSystem,oe.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),E(C,x,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Hs&&_(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(R,L,P)};function _(M,C){const x=e.update(S);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ei(r.x,r.y,{format:la,type:Yi})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,S,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,x,h,S,null)}function y(M,C,x,R){let L=null;const P=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)L=P;else if(L=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=L.uuid,q=C.uuid;let Q=u[N];Q===void 0&&(Q={},u[N]=Q);let F=Q[q];F===void 0&&(F=L.clone(),Q[q]=F,C.addEventListener("dispose",A)),L=F}if(L.visible=C.visible,L.wireframe=C.wireframe,R===Hs?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=t.properties.get(L);N.light=x}return L}function E(M,C,x,R,L){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Hs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const q=e.update(M),Q=M.material;if(Array.isArray(Q)){const F=q.groups;for(let K=0,V=F.length;K<V;K++){const B=F[K],$=Q[B.materialIndex];if($&&$.visible){const b=y(M,$,R,L);M.onBeforeShadow(t,M,C,x,q,b,B),t.renderBufferDirect(x,null,q,b,M,B),M.onAfterShadow(t,M,C,x,q,b,B)}}}else if(Q.visible){const F=y(M,Q,R,L);M.onBeforeShadow(t,M,C,x,q,F,null),t.renderBufferDirect(x,null,q,F,M,null),M.onAfterShadow(t,M,C,x,q,F,null)}}const N=M.children;for(let q=0,Q=N.length;q<Q;q++)E(N[q],C,x,R,L)}function A(M){M.target.removeEventListener("dispose",A);for(const x in u){const R=u[x],L=M.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function iD(t,e){function n(){let U=!1;const me=new Ct;let ee=null;const ge=new Ct(0,0,0,0);return{setMask:function(ye){ee!==ye&&!U&&(t.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ne,Ae,Te,Tt){Tt===!0&&(ye*=Te,ne*=Te,Ae*=Te),me.set(ye,ne,Ae,Te),ge.equals(me)===!1&&(t.clearColor(ye,ne,Ae,Te),ge.copy(me))},reset:function(){U=!1,ee=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,me=!1,ee=null,ge=null,ye=null;return{setReversed:function(ne){if(me!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),me=ne;const Te=ye;ye=null,this.setClear(Te)}},getReversed:function(){return me},setTest:function(ne){ne?re(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!U&&(t.depthMask(ne),ee=ne)},setFunc:function(ne){if(me&&(ne=OR[ne]),ge!==ne){switch(ne){case Nd:t.depthFunc(t.NEVER);break;case Ud:t.depthFunc(t.ALWAYS);break;case Fd:t.depthFunc(t.LESS);break;case us:t.depthFunc(t.LEQUAL);break;case kd:t.depthFunc(t.EQUAL);break;case Od:t.depthFunc(t.GEQUAL);break;case Bd:t.depthFunc(t.GREATER);break;case zd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ne}},setLocked:function(ne){U=ne},setClear:function(ne){ye!==ne&&(ye=ne,me&&(ne=1-ne),t.clearDepth(ne))},reset:function(){U=!1,ee=null,ge=null,ye=null,me=!1}}}function r(){let U=!1,me=null,ee=null,ge=null,ye=null,ne=null,Ae=null,Te=null,Tt=null;return{setTest:function(ft){U||(ft?re(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ft){me!==ft&&!U&&(t.stencilMask(ft),me=ft)},setFunc:function(ft,si,oi){(ee!==ft||ge!==si||ye!==oi)&&(t.stencilFunc(ft,si,oi),ee=ft,ge=si,ye=oi)},setOp:function(ft,si,oi){(ne!==ft||Ae!==si||Te!==oi)&&(t.stencilOp(ft,si,oi),ne=ft,Ae=si,Te=oi)},setLocked:function(ft){U=ft},setClear:function(ft){Tt!==ft&&(t.clearStencil(ft),Tt=ft)},reset:function(){U=!1,me=null,ee=null,ge=null,ye=null,ne=null,Ae=null,Te=null,Tt=null}}}const a=new n,s=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,m=[],S=null,g=!1,p=null,_=null,y=null,E=null,A=null,M=null,C=null,x=new it(0,0,0),R=0,L=!1,P=null,N=null,q=null,Q=null,F=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),V=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=B>=2);let b=null,te={};const oe=t.getParameter(t.SCISSOR_BOX),I=t.getParameter(t.VIEWPORT),ze=new Ct().fromArray(oe),Be=new Ct().fromArray(I);function j(U,me,ee,ge){const ye=new Uint8Array(4),ne=t.createTexture();t.bindTexture(U,ne),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<ee;Ae++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(me+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ne}const ue={};ue[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(t.DEPTH_TEST),s.setFunc(us),yt(!1),Pt(gv),re(t.CULL_FACE),Ke(zi);function re(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function Le(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Ne(U,me){return f[U]!==me?(t.bindFramebuffer(U,me),f[U]=me,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=me),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Pe(U,me){let ee=m,ge=!1;if(U){ee=h.get(me),ee===void 0&&(ee=[],h.set(me,ee));const ye=U.textures;if(ee.length!==ye.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ae=ye.length;ne<Ae;ne++)ee[ne]=t.COLOR_ATTACHMENT0+ne;ee.length=ye.length,ge=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ee)}function xt(U){return S!==U?(t.useProgram(U),S=U,!0):!1}const Xe={[qr]:t.FUNC_ADD,[oR]:t.FUNC_SUBTRACT,[lR]:t.FUNC_REVERSE_SUBTRACT};Xe[uR]=t.MIN,Xe[cR]=t.MAX;const rt={[fR]:t.ZERO,[dR]:t.ONE,[hR]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[xR]:t.SRC_ALPHA_SATURATE,[vR]:t.DST_COLOR,[mR]:t.DST_ALPHA,[pR]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[_R]:t.ONE_MINUS_DST_COLOR,[gR]:t.ONE_MINUS_DST_ALPHA,[yR]:t.CONSTANT_COLOR,[SR]:t.ONE_MINUS_CONSTANT_COLOR,[ER]:t.CONSTANT_ALPHA,[MR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(U,me,ee,ge,ye,ne,Ae,Te,Tt,ft){if(U===zi){g===!0&&(Le(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),U!==sR){if(U!==p||ft!==L){if((_!==qr||A!==qr)&&(t.blendEquation(t.FUNC_ADD),_=qr,A=qr),ft)switch(U){case Qa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vv:t.blendFunc(t.ONE,t.ONE);break;case _v:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Qa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _v:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xv:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}y=null,E=null,M=null,C=null,x.set(0,0,0),R=0,p=U,L=ft}return}ye=ye||me,ne=ne||ee,Ae=Ae||ge,(me!==_||ye!==A)&&(t.blendEquationSeparate(Xe[me],Xe[ye]),_=me,A=ye),(ee!==y||ge!==E||ne!==M||Ae!==C)&&(t.blendFuncSeparate(rt[ee],rt[ge],rt[ne],rt[Ae]),y=ee,E=ge,M=ne,C=Ae),(Te.equals(x)===!1||Tt!==R)&&(t.blendColor(Te.r,Te.g,Te.b,Tt),x.copy(Te),R=Tt),p=U,L=!1}function Ye(U,me){U.side===Ui?Le(t.CULL_FACE):re(t.CULL_FACE);let ee=U.side===En;me&&(ee=!ee),yt(ee),U.blending===Qa&&U.transparent===!1?Ke(zi):Ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),a.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function yt(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function Pt(U){U!==iR?(re(t.CULL_FACE),U!==N&&(U===gv?t.cullFace(t.BACK):U===rR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),N=U}function It(U){U!==q&&(V&&t.lineWidth(U),q=U)}function Ut(U,me,ee){U?(re(t.POLYGON_OFFSET_FILL),(Q!==me||F!==ee)&&(Q=me,F=ee,s.getReversed()&&(me=-me),t.polygonOffset(me,ee))):Le(t.POLYGON_OFFSET_FILL)}function vt(U){U?re(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function wt(U){U===void 0&&(U=t.TEXTURE0+K-1),b!==U&&(t.activeTexture(U),b=U)}function k(U,me,ee){ee===void 0&&(b===null?ee=t.TEXTURE0+K-1:ee=b);let ge=te[ee];ge===void 0&&(ge={type:void 0,texture:void 0},te[ee]=ge),(ge.type!==U||ge.texture!==me)&&(b!==ee&&(t.activeTexture(ee),b=ee),t.bindTexture(U,me||ue[U]),ge.type=U,ge.texture=me)}function Zt(){const U=te[b];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function v(){try{t.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function D(){try{t.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function H(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ae(){try{t.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function fe(){try{t.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Z(){try{t.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function J(){try{t.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function de(U){return d[U]!==void 0?d[U]:t.getParameter(U)}function Se(U,me){d[U]!==me&&(t.pixelStorei(U,me),d[U]=me)}function pe(U){ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function ce(U){Be.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Be.copy(U))}function Ie(U,me){let ee=u.get(me);ee===void 0&&(ee=new WeakMap,u.set(me,ee));let ge=ee.get(U);ge===void 0&&(ge=t.getUniformBlockIndex(me,U.name),ee.set(U,ge))}function De(U,me){const ge=u.get(me).get(U);l.get(me)!==ge&&(t.uniformBlockBinding(me,ge,U.__bindingPointIndex),l.set(me,ge))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},b=null,te={},f={},h=new WeakMap,m=[],S=null,g=!1,p=null,_=null,y=null,E=null,A=null,M=null,C=null,x=new it(0,0,0),R=0,L=!1,P=null,N=null,q=null,Q=null,F=null,ze.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:re,disable:Le,bindFramebuffer:Ne,drawBuffers:Pe,useProgram:xt,setBlending:Ke,setMaterial:Ye,setFlipSided:yt,setCullFace:Pt,setLineWidth:It,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:wt,bindTexture:k,unbindTexture:Zt,compressedTexImage2D:et,compressedTexImage3D:w,texImage2D:Z,texImage3D:J,pixelStorei:Se,getParameter:de,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:ae,texStorage3D:fe,texSubImage2D:v,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:H,scissor:pe,viewport:ce,reset:Ve}}function rD(t,e,n,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,v){return m?new OffscreenCanvas(w,v):Cu("canvas")}function g(w,v,D){let O=1;const H=et(w);if((H.width>D||H.height>D)&&(O=D/Math.max(H.width,H.height)),O<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ae=Math.floor(O*H.width),fe=Math.floor(O*H.height);f===void 0&&(f=S(ae,fe));const Z=v?S(ae,fe):f;return Z.width=ae,Z.height=fe,Z.getContext("2d").drawImage(w,0,0,ae,fe),Ue("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ae+"x"+fe+")."),Z}else return"data"in w&&Ue("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),w;return w}function p(w){return w.generateMipmaps}function _(w){t.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(w,v,D,O,H,ae=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;O&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===t.RED&&(D===t.FLOAT&&(Z=t.R32F),D===t.HALF_FLOAT&&(Z=t.R16F),D===t.UNSIGNED_BYTE&&(Z=t.R8),D===t.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),D===t.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),v===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.R8UI),D===t.UNSIGNED_SHORT&&(Z=t.R16UI),D===t.UNSIGNED_INT&&(Z=t.R32UI),D===t.BYTE&&(Z=t.R8I),D===t.SHORT&&(Z=t.R16I),D===t.INT&&(Z=t.R32I)),v===t.RG&&(D===t.FLOAT&&(Z=t.RG32F),D===t.HALF_FLOAT&&(Z=t.RG16F),D===t.UNSIGNED_BYTE&&(Z=t.RG8),D===t.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),D===t.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RG8UI),D===t.UNSIGNED_SHORT&&(Z=t.RG16UI),D===t.UNSIGNED_INT&&(Z=t.RG32UI),D===t.BYTE&&(Z=t.RG8I),D===t.SHORT&&(Z=t.RG16I),D===t.INT&&(Z=t.RG32I)),v===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),D===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),D===t.UNSIGNED_INT&&(Z=t.RGB32UI),D===t.BYTE&&(Z=t.RGB8I),D===t.SHORT&&(Z=t.RGB16I),D===t.INT&&(Z=t.RGB32I)),v===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),D===t.UNSIGNED_INT&&(Z=t.RGBA32UI),D===t.BYTE&&(Z=t.RGBA8I),D===t.SHORT&&(Z=t.RGBA16I),D===t.INT&&(Z=t.RGBA32I)),v===t.RGB&&(D===t.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),D===t.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),D===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),v===t.RGBA){const J=ae?bu:$e.getTransfer(H);D===t.FLOAT&&(Z=t.RGBA32F),D===t.HALF_FLOAT&&(Z=t.RGBA16F),D===t.UNSIGNED_BYTE&&(Z=J===at?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),D===t.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),D===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(w,v){let D;return w?v===null||v===Ti||v===wo?D=t.DEPTH24_STENCIL8:v===vi?D=t.DEPTH32F_STENCIL8:v===Mo&&(D=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ti||v===wo?D=t.DEPTH_COMPONENT24:v===vi?D=t.DEPTH_COMPONENT32F:v===Mo&&(D=t.DEPTH_COMPONENT16),D}function M(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==$t&&w.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),R(v),v.isVideoTexture&&c.delete(v),v.isHTMLTexture&&d.delete(v)}function x(w){const v=w.target;v.removeEventListener("dispose",x),P(v)}function R(w){const v=i.get(w);if(v.__webglInit===void 0)return;const D=w.source,O=h.get(D);if(O){const H=O[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&L(w),Object.keys(O).length===0&&h.delete(D)}i.remove(w)}function L(w){const v=i.get(w);t.deleteTexture(v.__webglTexture);const D=w.source,O=h.get(D);delete O[v.__cacheKey],s.memory.textures--}function P(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let H=0;H<v.__webglFramebuffer[O].length;H++)t.deleteFramebuffer(v.__webglFramebuffer[O][H]);else t.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)t.deleteFramebuffer(v.__webglFramebuffer[O]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=w.textures;for(let O=0,H=D.length;O<H;O++){const ae=i.get(D[O]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),i.remove(D[O])}i.remove(w)}let N=0;function q(){N=0}function Q(){return N}function F(w){N=w}function K(){const w=N;return w>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function B(w,v){const D=i.get(w);if(w.isVideoTexture&&k(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const O=w.image;if(O===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(D,w,v);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+v)}function $(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Le(D,w,v);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+v)}function b(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Le(D,w,v);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+v)}function te(w,v){const D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){Ne(D,w,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+v)}const oe={[Vd]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},I={[$t]:t.NEAREST,[bR]:t.NEAREST_MIPMAP_NEAREST,[rl]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[qc]:t.LINEAR_MIPMAP_NEAREST,[Zr]:t.LINEAR_MIPMAP_LINEAR},ze={[RR]:t.NEVER,[NR]:t.ALWAYS,[PR]:t.LESS,[zp]:t.LEQUAL,[IR]:t.EQUAL,[Vp]:t.GEQUAL,[LR]:t.GREATER,[DR]:t.NOTEQUAL};function Be(w,v){if(v.type===vi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===qc||v.magFilter===rl||v.magFilter===Zr||v.minFilter===an||v.minFilter===qc||v.minFilter===rl||v.minFilter===Zr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,oe[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,oe[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,oe[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,I[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,I[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==rl&&v.minFilter!==Zr||v.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function j(w,v){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const O=v.source;let H=h.get(O);H===void 0&&(H={},h.set(O,H));const ae=V(v);if(ae!==w.__cacheKey){H[ae]===void 0&&(H[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,D=!0),H[ae].usedTimes++;const fe=H[w.__cacheKey];fe!==void 0&&(H[w.__cacheKey].usedTimes--,fe.usedTimes===0&&L(v)),w.__cacheKey=ae,w.__webglTexture=H[ae].texture}return D}function ue(w,v,D){return Math.floor(Math.floor(w/D)/v)}function re(w,v,D,O){const ae=w.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,D,O,v.data);else{ae.sort((Se,pe)=>Se.start-pe.start);let fe=0;for(let Se=1;Se<ae.length;Se++){const pe=ae[fe],ce=ae[Se],Ie=pe.start+pe.count,De=ue(ce.start,v.width,4),Ve=ue(pe.start,v.width,4);ce.start<=Ie+1&&De===Ve&&ue(ce.start+ce.count-1,v.width,4)===De?pe.count=Math.max(pe.count,ce.start+ce.count-pe.start):(++fe,ae[fe]=ce)}ae.length=fe+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Se=0,pe=ae.length;Se<pe;Se++){const ce=ae[Se],Ie=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),Ve=Ie%v.width,U=Math.floor(Ie/v.width),me=De,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ve,U,me,ee,D,O,v.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Le(w,v,D){let O=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=t.TEXTURE_3D);const H=j(w,v),ae=v.source;n.bindTexture(O,w.__webglTexture,t.TEXTURE0+D);const fe=i.get(ae);if(ae.version!==fe.__version||H===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ee=$e.getPrimaries($e.workingColorSpace),ge=v.colorSpace===dr?null:$e.getPrimaries(v.colorSpace),ye=v.colorSpace===dr||ee===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let J=g(v.image,!1,r.maxTextureSize);J=Zt(v,J);const de=a.convert(v.format,v.colorSpace),Se=a.convert(v.type);let pe=E(v.internalFormat,de,Se,v.normalized,v.colorSpace,v.isVideoTexture);Be(O,v);let ce;const Ie=v.mipmaps,De=v.isVideoTexture!==!0,Ve=fe.__version===void 0||H===!0,U=ae.dataReady,me=M(v,J);if(v.isDepthTexture)pe=A(v.format===Qr,v.type),Ve&&(De?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Se,null));else if(v.isDataTexture)if(Ie.length>0){De&&Ve&&n.texStorage2D(t.TEXTURE_2D,me,pe,Ie[0].width,Ie[0].height);for(let ee=0,ge=Ie.length;ee<ge;ee++)ce=Ie[ee],De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Se,ce.data):n.texImage2D(t.TEXTURE_2D,ee,pe,ce.width,ce.height,0,de,Se,ce.data);v.generateMipmaps=!1}else De?(Ve&&n.texStorage2D(t.TEXTURE_2D,me,pe,J.width,J.height),U&&re(v,J,de,Se)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Se,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,pe,Ie[0].width,Ie[0].height,J.depth);for(let ee=0,ge=Ie.length;ee<ge;ee++)if(ce=Ie[ee],v.format!==ni)if(de!==null)if(De){if(U)if(v.layerUpdates.size>0){const ye=Wv(ce.width,ce.height,v.format,v.type);for(const ne of v.layerUpdates){const Ae=ce.data.subarray(ne*ye/ce.data.BYTES_PER_ELEMENT,(ne+1)*ye/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ne,ce.width,ce.height,1,de,Ae)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,J.depth,de,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,ce.width,ce.height,J.depth,0,ce.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,J.depth,de,Se,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,ce.width,ce.height,J.depth,0,de,Se,ce.data)}else{De&&Ve&&n.texStorage2D(t.TEXTURE_2D,me,pe,Ie[0].width,Ie[0].height);for(let ee=0,ge=Ie.length;ee<ge;ee++)ce=Ie[ee],v.format!==ni?de!==null?De?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,ce.width,ce.height,0,ce.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Se,ce.data):n.texImage2D(t.TEXTURE_2D,ee,pe,ce.width,ce.height,0,de,Se,ce.data)}else if(v.isDataArrayTexture)if(De){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,pe,J.width,J.height,J.depth),U)if(v.layerUpdates.size>0){const ee=Wv(J.width,J.height,v.format,v.type);for(const ge of v.layerUpdates){const ye=J.data.subarray(ge*ee/J.data.BYTES_PER_ELEMENT,(ge+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,J.width,J.height,1,de,Se,ye)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,de,Se,J.data);else if(v.isData3DTexture)De?(Ve&&n.texStorage3D(t.TEXTURE_3D,me,pe,J.width,J.height,J.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,de,Se,J.data);else if(v.isFramebufferTexture){if(Ve)if(De)n.texStorage2D(t.TEXTURE_2D,me,pe,J.width,J.height);else{let ee=J.width,ge=J.height;for(let ye=0;ye<me;ye++)n.texImage2D(t.TEXTURE_2D,ye,pe,ee,ge,0,de,Se,null),ee>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),d.add(v),ee.onpaint=ge=>{const ye=ge.changedElements;for(const ne of d)ye.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const ye=t.RGBA,ne=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ne,Ae,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(De&&Ve){const ee=et(Ie[0]);n.texStorage2D(t.TEXTURE_2D,me,pe,ee.width,ee.height)}for(let ee=0,ge=Ie.length;ee<ge;ee++)ce=Ie[ee],De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de,Se,ce):n.texImage2D(t.TEXTURE_2D,ee,pe,de,Se,ce);v.generateMipmaps=!1}else if(De){if(Ve){const ee=et(J);n.texStorage2D(t.TEXTURE_2D,me,pe,ee.width,ee.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,Se,J);p(v)&&_(O),fe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ne(w,v,D){if(v.image.length!==6)return;const O=j(w,v),H=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+D);const ae=i.get(H);if(H.version!==ae.__version||O===!0){n.activeTexture(t.TEXTURE0+D);const fe=$e.getPrimaries($e.workingColorSpace),Z=v.colorSpace===dr?null:$e.getPrimaries(v.colorSpace),J=v.colorSpace===dr||fe===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!de&&!Se?pe[ne]=g(v.image[ne],!0,r.maxCubemapSize):pe[ne]=Se?v.image[ne].image:v.image[ne],pe[ne]=Zt(v,pe[ne]);const ce=pe[0],Ie=a.convert(v.format,v.colorSpace),De=a.convert(v.type),Ve=E(v.internalFormat,Ie,De,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,me=ae.__version===void 0||O===!0,ee=H.dataReady;let ge=M(v,ce);Be(t.TEXTURE_CUBE_MAP,v);let ye;if(de){U&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ve,ce.width,ce.height);for(let ne=0;ne<6;ne++){ye=pe[ne].mipmaps;for(let Ae=0;Ae<ye.length;Ae++){const Te=ye[Ae];v.format!==ni?Ie!==null?U?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Te.width,Te.height,Ie,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ve,Te.width,Te.height,0,Te.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Te.width,Te.height,Ie,De,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ve,Te.width,Te.height,0,Ie,De,Te.data)}}}else{if(ye=v.mipmaps,U&&me){ye.length>0&&ge++;const ne=et(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Se){U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Ie,De,pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,pe[ne].width,pe[ne].height,0,Ie,De,pe[ne].data);for(let Ae=0;Ae<ye.length;Ae++){const Tt=ye[Ae].image[ne].image;U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Tt.width,Tt.height,Ie,De,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ve,Tt.width,Tt.height,0,Ie,De,Tt.data)}}else{U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,De,pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ie,De,pe[ne]);for(let Ae=0;Ae<ye.length;Ae++){const Te=ye[Ae];U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ie,De,Te.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ve,Ie,De,Te.image[ne])}}}p(v)&&_(t.TEXTURE_CUBE_MAP),ae.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Pe(w,v,D,O,H,ae){const fe=a.convert(D.format,D.colorSpace),Z=a.convert(D.type),J=E(D.internalFormat,fe,Z,D.normalized,D.colorSpace),de=i.get(v),Se=i.get(D);if(Se.__renderTarget=v,!de.__hasExternalTextures){const pe=Math.max(1,v.width>>ae),ce=Math.max(1,v.height>>ae);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,ae,J,pe,ce,v.depth,0,fe,Z,null):n.texImage2D(H,ae,J,pe,ce,0,fe,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),wt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,H,Se.__webglTexture,0,vt(v)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,H,Se.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(w,v,D){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){const O=v.depthTexture,H=O&&O.isDepthTexture?O.type:null,ae=A(v.stencilBuffer,H),fe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(v),ae,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(v),ae,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ae,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,w)}else{const O=v.textures;for(let H=0;H<O.length;H++){const ae=O[H],fe=a.convert(ae.format,ae.colorSpace),Z=a.convert(ae.type),J=E(ae.internalFormat,fe,Z,ae.normalized,ae.colorSpace);wt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(v),J,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(v),J,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,J,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(w,v,D){const O=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const H=i.get(v.depthTexture);if(H.__renderTarget=v,(!H.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O){if(H.__webglInit===void 0&&(H.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),H.__webglTexture===void 0){H.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Be(t.TEXTURE_CUBE_MAP,v.depthTexture);const de=a.convert(v.depthTexture.format),Se=a.convert(v.depthTexture.type);let pe;v.depthTexture.format===$i?pe=t.DEPTH_COMPONENT24:v.depthTexture.format===Qr&&(pe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,pe,v.width,v.height,0,de,Se,null)}}else B(v.depthTexture,0);const ae=H.__webglTexture,fe=vt(v),Z=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,J=v.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===$i)wt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,ae,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,ae,0);else if(v.depthTexture.format===Qr)wt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,ae,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(w){const v=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const O=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){const H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",H)};O.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=O}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let O=0;O<6;O++)Xe(v.__webglFramebuffer[O],w,O);else{const O=w.texture.mipmaps;O&&O.length>0?Xe(v.__webglFramebuffer[0],w,0):Xe(v.__webglFramebuffer,w,0)}else if(D){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=t.createRenderbuffer(),xt(v.__webglDepthbuffer[O],w,!1);else{const H=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,ae)}}else{const O=w.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),xt(v.__webglDepthbuffer,w,!1);else{const H=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(w,v,D){const O=i.get(w);v!==void 0&&Pe(O.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&rt(w)}function Ye(w){const v=w.texture,D=i.get(w),O=i.get(v);w.addEventListener("dispose",x);const H=w.textures,ae=w.isWebGLCubeRenderTarget===!0,fe=H.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=v.version,s.memory.textures++),ae){D.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[Z]=[];for(let J=0;J<v.mipmaps.length;J++)D.__webglFramebuffer[Z][J]=t.createFramebuffer()}else D.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)D.__webglFramebuffer[Z]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(fe)for(let Z=0,J=H.length;Z<J;Z++){const de=i.get(H[Z]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&wt(w)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Z=0;Z<H.length;Z++){const J=H[Z];D.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[Z]);const de=a.convert(J.format,J.colorSpace),Se=a.convert(J.type),pe=E(J.internalFormat,de,Se,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),ce=vt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,D.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(D.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),Be(t.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Pe(D.__webglFramebuffer[Z][J],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Pe(D.__webglFramebuffer[Z],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(v)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let Z=0,J=H.length;Z<J;Z++){const de=H[Z],Se=i.get(de);let pe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Se.__webglTexture),Be(pe,de),Pe(D.__webglFramebuffer,w,de,t.COLOR_ATTACHMENT0+Z,pe,0),p(de)&&_(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,O.__webglTexture),Be(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Pe(D.__webglFramebuffer[J],w,v,t.COLOR_ATTACHMENT0,Z,J);else Pe(D.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,Z,0);p(v)&&_(Z),n.unbindTexture()}w.depthBuffer&&rt(w)}function yt(w){const v=w.textures;for(let D=0,O=v.length;D<O;D++){const H=v[D];if(p(H)){const ae=y(w),fe=i.get(H).__webglTexture;n.bindTexture(ae,fe),_(ae),n.unbindTexture()}}}const Pt=[],It=[];function Ut(w){if(w.samples>0){if(wt(w)===!1){const v=w.textures,D=w.width,O=w.height;let H=t.COLOR_BUFFER_BIT;const ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(w),Z=v.length>1;if(Z)for(let de=0;de<v.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<v.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(H|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Se=i.get(v[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,D,O,0,0,D,O,H,t.NEAREST),l===!0&&(Pt.length=0,It.length=0,Pt.push(t.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Pt.push(ae),It.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let de=0;de<v.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Se=i.get(v[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function vt(w){return Math.min(r.maxSamples,w.samples)}function wt(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(w){const v=s.render.frame;c.get(w)!==v&&(c.set(w,v),w.update())}function Zt(w,v){const D=w.colorSpace,O=w.format,H=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Tu&&D!==dr&&($e.getTransfer(D)===at?(O!==ni||H!==Gn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),v}function et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=Q,this.setTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=b,this.setTextureCube=te,this.rebindTextures=Ke,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function aD(t,e){function n(i,r=dr){let a;const s=$e.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===Up)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Uy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dy)return t.BYTE;if(i===Ny)return t.SHORT;if(i===Mo)return t.UNSIGNED_SHORT;if(i===Np)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===ky)return t.ALPHA;if(i===Oy)return t.RGB;if(i===ni)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===By)return t.RED;if(i===kp)return t.RED_INTEGER;if(i===la)return t.RG;if(i===Op)return t.RG_INTEGER;if(i===Bp)return t.RGBA_INTEGER;if(i===Hl||i===Gl||i===Wl||i===Xl)if(s===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Hl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Hl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===Xd||i===qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===$d||i===jd||i===Kd||i===Zd||i===Mu||i===Qd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Yd||i===$d)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return a.COMPRESSED_R11_EAC;if(i===Zd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Mu)return a.COMPRESSED_RG11_EAC;if(i===Qd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===ah||i===sh||i===oh||i===lh||i===uh||i===ch||i===fh||i===dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Jd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===th)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ih)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ah)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hh||i===ph||i===mh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===hh)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gh||i===vh||i===wu||i===_h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===gh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new $y(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:sD,fragmentShader:oD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uD extends pa{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const S=typeof XRWebGLBinding<"u",g=new lD,p={},_=n.getContextAttributes();let y=null,E=null;const A=[],M=[],C=new nt;let x=null;const R=new Hn;R.viewport=new Ct;const L=new Hn;L.viewport=new Ct;const P=[R,L],N=new xP;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=A[j];return ue===void 0&&(ue=new ef,A[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=A[j];return ue===void 0&&(ue=new ef,A[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=A[j];return ue===void 0&&(ue=new ef,A[j]=ue),ue.getHandSpace()};function F(j){const ue=M.indexOf(j.inputSource);if(ue===-1)return;const re=A[ue];re!==void 0&&(re.update(j.inputSource,j.frame,u||s),re.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let j=0;j<A.length;j++){const ue=M[j];ue!==null&&(M[j]=null,A[j].disconnect(ue))}q=null,Q=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(y),h=null,f=null,d=null,r=null,E=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ne=null;_.depth&&(Ne=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=_.stencil?Qr:$i,Le=_.stencil?wo:Ti);const Pe={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ei(f.textureWidth,f.textureHeight,{format:ni,type:Gn,depthTexture:new fs(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Ei(h.framebufferWidth,h.framebufferHeight,{format:ni,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(j){for(let ue=0;ue<j.removed.length;ue++){const re=j.removed[ue],Le=M.indexOf(re);Le>=0&&(M[Le]=null,A[Le].disconnect(re))}for(let ue=0;ue<j.added.length;ue++){const re=j.added[ue];let Le=M.indexOf(re);if(Le===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=M.length){M.push(re),Le=Pe;break}else if(M[Pe]===null){M[Pe]=re,Le=Pe;break}if(Le===-1)break}const Ne=A[Le];Ne&&Ne.connect(re)}}const B=new X,$=new X;function b(j,ue,re){B.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Le=B.distanceTo($),Ne=ue.projectionMatrix.elements,Pe=re.projectionMatrix.elements,xt=Ne[14]/(Ne[10]-1),Xe=Ne[14]/(Ne[10]+1),rt=(Ne[9]+1)/Ne[5],Ke=(Ne[9]-1)/Ne[5],Ye=(Ne[8]-1)/Ne[0],yt=(Pe[8]+1)/Pe[0],Pt=xt*Ye,It=xt*yt,Ut=Le/(-Ye+yt),vt=Ut*-Ye;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ne[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const wt=xt+Ut,k=Xe+Ut,Zt=Pt-vt,et=It+(Le-vt),w=rt*Xe/k*wt,v=Ke*Xe/k*wt;j.projectionMatrix.makePerspective(Zt,et,w,v,wt,k),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ue=j.near,re=j.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(re=g.depthFar)),N.near=L.near=R.near=ue,N.far=L.far=R.far=re,(q!==N.near||Q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),q=N.near,Q=N.far),N.layers.mask=j.layers.mask|6,R.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Le=j.parent,Ne=N.cameras;te(N,Le);for(let Pe=0;Pe<Ne.length;Pe++)te(Ne[Pe],Le);Ne.length===2?b(N,R,L):N.projectionMatrix.copy(R.projectionMatrix),oe(j,N,Le)};function oe(j,ue,re){re===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let I=null;function ze(j,ue){if(c=ue.getViewerPose(u||s),m=ue,c!==null){const re=c.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Le=!1;re.length!==N.cameras.length&&(N.cameras.length=0,Le=!0);for(let Xe=0;Xe<re.length;Xe++){const rt=re[Xe];let Ke=null;if(h!==null)Ke=h.getViewport(rt);else{const yt=d.getViewSubImage(f,rt);Ke=yt.viewport,Xe===0&&(e.setRenderTargetTextures(E,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(E))}let Ye=P[Xe];Ye===void 0&&(Ye=new Hn,Ye.layers.enable(Xe),Ye.viewport=new Ct,P[Xe]=Ye),Ye.matrix.fromArray(rt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(rt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Xe===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Le===!0&&N.cameras.push(Ye)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Xe=d.getDepthInformation(re[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,r.renderState)}if(Ne&&Ne.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<re.length;Xe++){const rt=re[Xe].camera;if(rt){let Ke=p[rt];Ke||(Ke=new $y,p[rt]=Ke);const Ye=d.getCameraImage(rt);Ke.sourceTexture=Ye}}}}for(let re=0;re<A.length;re++){const Le=M[re],Ne=A[re];Le!==null&&Ne!==void 0&&Ne.update(Le,ue,u||s)}I&&I(j,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),m=null}const Be=new Qy;Be.setAnimationLoop(ze),this.setAnimationLoop=function(j){I=j},this.dispose=function(){}}}const cD=new Bt,aS=new Oe;aS.set(-1,0,0,0,1,0,0,0,1);function fD(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,jy(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,y,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,E)):p.isMeshMatcapMaterial?(a(g,p),m(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),S(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===En&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===En&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,E=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(cD.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(aS),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dD(t,e,n,i){let r={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const M=A.program;i.uniformBlockBinding(E,M)}function u(E,A){let M=r[E.id];M===void 0&&(g(E),M=c(E),r[E.id]=M,E.addEventListener("dispose",_));const C=A.program;i.updateUBOMapping(E,C);const x=e.render.frame;a[E.id]!==x&&(f(E),a[E.id]=x)}function c(E){const A=d();E.__bindingPointIndex=A;const M=t.createBuffer(),C=E.__size,x=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,M),M}function d(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const A=r[E.id],M=E.uniforms,C=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=M.length;x<R;x++){const L=M[x];if(Array.isArray(L))for(let P=0,N=L.length;P<N;P++)h(L[P],x,P,C);else h(L,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,A,M,C){if(S(E,A,M,C)===!0){const x=E.__offset,R=E.value;if(Array.isArray(R)){let L=0;for(let P=0;P<R.length;P++){const N=R[P],q=p(N);m(N,E.__data,L),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,E.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,E.__data)}}function m(E,A,M){typeof E=="number"||typeof E=="boolean"?A[0]=E:E.isMatrix3?(A[0]=E.elements[0],A[1]=E.elements[1],A[2]=E.elements[2],A[3]=0,A[4]=E.elements[3],A[5]=E.elements[4],A[6]=E.elements[5],A[7]=0,A[8]=E.elements[6],A[9]=E.elements[7],A[10]=E.elements[8],A[11]=0):ArrayBuffer.isView(E)?A.set(new E.constructor(E.buffer,E.byteOffset,A.length)):E.toArray(A,M)}function S(E,A,M,C){const x=E.value,R=A+"_"+M;if(C[R]===void 0)return typeof x=="number"||typeof x=="boolean"?C[R]=x:ArrayBuffer.isView(x)?C[R]=x.slice():C[R]=x.clone(),!0;{const L=C[R];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return C[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function g(E){const A=E.uniforms;let M=0;const C=16;for(let R=0,L=A.length;R<L;R++){const P=Array.isArray(A[R])?A[R]:[A[R]];for(let N=0,q=P.length;N<q;N++){const Q=P[N],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,V=F.length;K<V;K++){const B=F[K],$=p(B),b=M%C,te=b%$.boundary,oe=b+te;M+=te,oe!==0&&C-oe<$.storage&&(M+=C-oe),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=$.storage}}}const x=M%C;return x>0&&(M+=C-x),E.__size=M,E.__cache={},this}function p(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(A.boundary=16,A.storage=E.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",E),A}function _(E){const A=E.target;A.removeEventListener("dispose",_);const M=s.indexOf(A.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function y(){for(const E in r)t.deleteBuffer(r[E]);s=[],r={},a={}}return{bind:l,update:u,dispose:y}}const hD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function pD(){return fi===null&&(fi=new sP(hD,16,16,la,Yi),fi.name="DFG_LUT",fi.minFilter=an,fi.magFilter=an,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class mD{constructor(e={}){const{canvas:n=FR(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Gn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const S=h,g=new Set([Bp,Op,kp]),p=new Set([Gn,Ti,Mo,wo,Up,Fp]),_=new Uint32Array(4),y=new Int32Array(4),E=new X;let A=null,M=null;const C=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,N=null,q=null,Q=null,F=null;this._outputColorSpace=On;let K=0,V=0,B=null,$=-1,b=null;const te=new Ct,oe=new Ct;let I=null;const ze=new it(0);let Be=0,j=n.width,ue=n.height,re=1,Le=null,Ne=null;const Pe=new Ct(0,0,j,ue),xt=new Ct(0,0,j,ue);let Xe=!1;const rt=new qy;let Ke=!1,Ye=!1;const yt=new Bt,Pt=new X,It=new Ct,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function wt(){return B===null?re:1}let k=i;function Zt(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dp}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",si,!1),k===null){const z="webgl2";if(k=Zt(z,T),k===null)throw Zt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Qe("WebGLRenderer: "+T.message),T}let et,w,v,D,O,H,ae,fe,Z,J,de,Se,pe,ce,Ie,De,Ve,U,me,ee,ge,ye,ne;function Ae(){et=new p2(k),et.init(),ge=new aD(k,et),w=new s2(k,et,e,ge),v=new iD(k,et),w.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),q=k.createFramebuffer(),Q=k.createFramebuffer(),F=k.createFramebuffer(),D=new v2(k),O=new GL,H=new rD(k,et,v,O,w,ge,D),ae=new h2(L),fe=new SP(k),ye=new r2(k,fe),Z=new m2(k,fe,D,ye),J=new x2(k,Z,fe,ye,D),U=new _2(k,w,H),Ie=new o2(O),de=new HL(L,ae,et,w,ye,Ie),Se=new fD(L,O),pe=new XL,ce=new ZL(et),Ve=new i2(L,ae,v,J,m,l),De=new nD(L,J,w),ne=new dD(k,D,w,v),me=new a2(k,et,D),ee=new g2(k,et,D),D.programs=de.programs,L.capabilities=w,L.extensions=et,L.properties=O,L.renderLists=pe,L.shadowMap=De,L.state=v,L.info=D}Ae(),S!==Gn&&(R=new S2(S,n.width,n.height,o,r,a));const Te=new uD(L,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(j,ue,!1))},this.getSize=function(T){return T.set(j,ue)},this.setSize=function(T,z,Y=!0){if(Te.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ue=z,n.width=Math.floor(T*re),n.height=Math.floor(z*re),Y===!0&&(n.style.width=T+"px",n.style.height=z+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(j*re,ue*re).floor()},this.setDrawingBufferSize=function(T,z,Y){j=T,ue=z,re=Y,n.width=Math.floor(T*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(S===Gn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(te)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,z,Y,G){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,z,Y,G),v.viewport(te.copy(Pe).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,z,Y,G){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,z,Y,G),v.scissor(oe.copy(xt).multiplyScalar(re).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){v.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let G=0;if(T){let W=!1;if(B!==null){const xe=B.texture.format;W=g.has(xe)}if(W){const xe=B.texture.type,Me=p.has(xe),_e=Ve.getClearColor(),be=Ve.getClearAlpha(),Ce=_e.r,He=_e.g,We=_e.b;Me?(_[0]=Ce,_[1]=He,_[2]=We,_[3]=be,k.clearBufferuiv(k.COLOR,0,_)):(y[0]=Ce,y[1]=He,y[2]=We,y[3]=be,k.clearBufferiv(k.COLOR,0,y))}else G|=k.COLOR_BUFFER_BIT}z&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",si,!1),Ve.dispose(),pe.dispose(),ce.dispose(),O.dispose(),ae.dispose(),J.dispose(),ye.dispose(),ne.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Zp),Te.removeEventListener("sessionend",Qp),Ur.stop()};function Tt(T){T.preventDefault(),Tv("WebGLRenderer: Context Lost."),P=!0}function ft(){Tv("WebGLRenderer: Context Restored."),P=!1;const T=D.autoReset,z=De.enabled,Y=De.autoUpdate,G=De.needsUpdate,W=De.type;Ae(),D.autoReset=T,De.enabled=z,De.autoUpdate=Y,De.needsUpdate=G,De.type=W}function si(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oi(T){const z=T.target;z.removeEventListener("dispose",oi),oS(z)}function oS(T){lS(T),O.remove(T)}function lS(T){const z=O.get(T).programs;z!==void 0&&(z.forEach(function(Y){de.releaseProgram(Y)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,G,W,xe){z===null&&(z=Ut);const Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,_e=fS(T,z,Y,G,W);v.setMaterial(G,Me);let be=Y.index,Ce=1;if(G.wireframe===!0){if(be=Z.getWireframeAttribute(Y),be===void 0)return;Ce=2}const He=Y.drawRange,We=Y.attributes.position;let Re=He.start*Ce,ot=(He.start+He.count)*Ce;xe!==null&&(Re=Math.max(Re,xe.start*Ce),ot=Math.min(ot,(xe.start+xe.count)*Ce)),be!==null?(Re=Math.max(Re,0),ot=Math.min(ot,be.count)):We!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,We.count));const Lt=ot-Re;if(Lt<0||Lt===1/0)return;ye.setup(W,G,_e,Y,be);let bt,lt=me;if(be!==null&&(bt=fe.get(be),lt=ee,lt.setIndex(bt)),W.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*wt()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(W.isLine){let Qt=G.linewidth;Qt===void 0&&(Qt=1),v.setLineWidth(Qt*wt()),W.isLineSegments?lt.setMode(k.LINES):W.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else W.isPoints?lt.setMode(k.POINTS):W.isSprite&&lt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qt=W._multiDrawStarts,Ee=W._multiDrawCounts,wn=W._multiDrawCount,Ze=be?fe.get(be).bytesPerElement:1,Fn=O.get(G).currentProgram.getUniforms();for(let li=0;li<wn;li++)Fn.setValue(k,"_gl_DrawID",li),lt.render(Qt[li]/Ze,Ee[li])}else if(W.isInstancedMesh)lt.renderInstances(Re,Lt,W.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Qt);lt.renderInstances(Re,Lt,Ee)}else lt.render(Re,Lt)};function Kp(T,z,Y){T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,ko(T,z,Y),T.side=Cr,T.needsUpdate=!0,ko(T,z,Y),T.side=Ui):ko(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),M=ce.get(Y),M.init(z),x.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const _e=xe[Me];Kp(_e,Y,W),G.add(_e)}else Kp(xe,Y,W),G.add(xe)}),M=x.pop(),G},this.compileAsync=function(T,z,Y=null){const G=this.compile(T,z,Y);return new Promise(W=>{function xe(){if(G.forEach(function(Me){O.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){W(T);return}setTimeout(xe,10)}et.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let rc=null;function uS(T){rc&&rc(T)}function Zp(){Ur.stop()}function Qp(){Ur.start()}const Ur=new Qy;Ur.setAnimationLoop(uS),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(T){rc=T,Te.setAnimationLoop(T),T===null?Ur.stop():Ur.start()},Te.addEventListener("sessionstart",Zp),Te.addEventListener("sessionend",Qp),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,z);const Y=Te.enabled===!0&&Te.isPresenting===!0,G=R!==null&&(B===null||Y)&&R.begin(L,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(z),z=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,z,B),M=ce.get(T,x.length),M.init(z),M.state.textureUnits=H.getTextureUnits(),x.push(M),yt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),rt.setFromProjectionMatrix(yt,_i,z.reversedDepth),Ye=this.localClippingEnabled,Ke=Ie.init(this.clippingPlanes,Ye),A=pe.get(T,C.length),A.init(),C.push(A),Te.enabled===!0&&Te.isPresenting===!0){const Me=L.xr.getDepthSensingMesh();Me!==null&&ac(Me,z,-1/0,L.sortObjects)}ac(T,z,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(Le,Ne,z.reversedDepth),vt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,vt&&Ve.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ie.beginShadows();const W=M.state.shadowsArray;if(De.render(W,T,z),Ke===!0&&Ie.endShadows(),(G&&R.hasRenderPass())===!1){const Me=A.opaque,_e=A.transmissive;if(M.setupLights(),z.isArrayCamera){const be=z.cameras;if(_e.length>0)for(let Ce=0,He=be.length;Ce<He;Ce++){const We=be[Ce];em(Me,_e,T,We)}vt&&Ve.render(T);for(let Ce=0,He=be.length;Ce<He;Ce++){const We=be[Ce];Jp(A,T,We,We.viewport)}}else _e.length>0&&em(Me,_e,T,z),vt&&Ve.render(T),Jp(A,T,z)}B!==null&&V===0&&(H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B)),G&&R.end(L),T.isScene===!0&&T.onAfterRender(L,T,z),ye.resetDefaultState(),$=-1,b=null,x.pop(),x.length>0?(M=x[x.length-1],H.setTextureUnits(M.state.textureUnits),Ke===!0&&Ie.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,N!==null&&N.renderEnd()};function ac(T,z,Y,G){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||rt.intersectsSprite(T)){G&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);const Me=J.update(T),_e=T.material;_e.visible&&A.push(T,Me,_e,Y,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||rt.intersectsObject(T))){const Me=J.update(T),_e=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),It.copy(Me.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(_e)){const be=Me.groups;for(let Ce=0,He=be.length;Ce<He;Ce++){const We=be[Ce],Re=_e[We.materialIndex];Re&&Re.visible&&A.push(T,Me,Re,Y,It.z,We)}}else _e.visible&&A.push(T,Me,_e,Y,It.z,null)}}const xe=T.children;for(let Me=0,_e=xe.length;Me<_e;Me++)ac(xe[Me],z,Y,G)}function Jp(T,z,Y,G){const{opaque:W,transmissive:xe,transparent:Me}=T;M.setupLightsView(Y),Ke===!0&&Ie.setGlobalState(L.clippingPlanes,Y),G&&v.viewport(te.copy(G)),W.length>0&&Fo(W,z,Y),xe.length>0&&Fo(xe,z,Y),Me.length>0&&Fo(Me,z,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function em(T,z,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Ei(1,1,{generateMipmaps:!0,type:Re?Yi:Gn,minFilter:Zr,samples:Math.max(4,w.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const xe=M.state.transmissionRenderTarget[G.id],Me=G.viewport||te;xe.setSize(Me.z*L.transmissionResolutionScale,Me.w*L.transmissionResolutionScale);const _e=L.getRenderTarget(),be=L.getActiveCubeFace(),Ce=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(ze),Be=L.getClearAlpha(),Be<1&&L.setClearColor(16777215,.5),L.clear(),vt&&Ve.render(Y);const He=L.toneMapping;L.toneMapping=Si;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),Ke===!0&&Ie.setGlobalState(L.clippingPlanes,G),Fo(T,Y,G),H.updateMultisampleRenderTarget(xe),H.updateRenderTargetMipmap(xe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,Lt=z.length;ot<Lt;ot++){const bt=z[ot],{object:lt,geometry:Qt,material:Ee,group:wn}=bt;if(Ee.side===Ui&&lt.layers.test(G.layers)){const Ze=Ee.side;Ee.side=En,Ee.needsUpdate=!0,tm(lt,Y,G,Qt,Ee,wn),Ee.side=Ze,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(H.updateMultisampleRenderTarget(xe),H.updateRenderTargetMipmap(xe))}L.setRenderTarget(_e,be,Ce),L.setClearColor(ze,Be),We!==void 0&&(G.viewport=We),L.toneMapping=He}function Fo(T,z,Y){const G=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xe=T.length;W<xe;W++){const Me=T[W],{object:_e,geometry:be,group:Ce}=Me;let He=Me.material;He.allowOverride===!0&&G!==null&&(He=G),_e.layers.test(Y.layers)&&tm(_e,z,Y,be,He,Ce)}}function tm(T,z,Y,G,W,xe){T.onBeforeRender(L,z,Y,G,W,xe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(L,z,Y,G,T,xe),W.transparent===!0&&W.side===Ui&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,L.renderBufferDirect(Y,z,G,W,T,xe),W.side=Cr,W.needsUpdate=!0,L.renderBufferDirect(Y,z,G,W,T,xe),W.side=Ui):L.renderBufferDirect(Y,z,G,W,T,xe),T.onAfterRender(L,z,Y,G,W,xe)}function ko(T,z,Y){z.isScene!==!0&&(z=Ut);const G=O.get(T),W=M.state.lights,xe=M.state.shadowsArray,Me=W.state.version,_e=de.getParameters(T,W.state,xe,z,Y,M.state.lightProbeGridArray),be=de.getProgramCacheKey(_e);let Ce=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const He=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ae.get(T.envMap||G.environment,He),G.envMapRotation=G.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",oi),Ce=new Map,G.programs=Ce);let We=Ce.get(be);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Me)return im(T,_e),We}else _e.uniforms=de.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Y,_e),T.onBeforeCompile(_e,L),We=de.acquireProgram(_e,be),Ce.set(be,We),G.uniforms=_e.uniforms;const Re=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=Ie.uniform),im(T,_e),G.needsLights=hS(T),G.lightsStateVersion=Me,G.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function nm(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ql.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function im(T,z){const Y=O.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function cS(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(z.matrixWorld);for(let Y=0,G=T.length;Y<G;Y++){const W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(E))return W}return null}function fS(T,z,Y,G,W){z.isScene!==!0&&(z=Ut),H.resetTextureUnits();const xe=z.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,_e=B===null?L.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$e.workingColorSpace,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ce=ae.get(G.envMap||Me,be),He=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let bt=Si;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(bt=L.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=lt!==void 0?lt.length:0,Ee=O.get(G),wn=M.state.lights;if(Ke===!0&&(Ye===!0||T!==b)){const dt=T===b&&G.id===$;Ie.setState(G,T,dt)}let Ze=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==wn.state.version||Ee.outputColorSpace!==_e||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Ce||G.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ie.numPlanes||Ee.numIntersection!==Ie.numIntersection)||Ee.vertexAlphas!==He||Ee.vertexTangents!==We||Ee.morphTargets!==Re||Ee.morphNormals!==ot||Ee.morphColors!==Lt||Ee.toneMapping!==bt||Ee.morphTargetsCount!==Qt||!!Ee.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Ee.__version=G.version);let Fn=Ee.currentProgram;Ze===!0&&(Fn=ko(G,z,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Fn,Ee));let li=!1,Zi=!1,ma=!1;const ut=Fn.getUniforms(),Dt=Ee.uniforms;if(v.useProgram(Fn.program)&&(li=!0,Zi=!0,ma=!0),G.id!==$&&($=G.id,Zi=!0),Ee.needsLights){const dt=cS(M.state.lightProbeGridArray,W);Ee.lightProbeGrid!==dt&&(Ee.lightProbeGrid=dt,Zi=!0)}if(li||b!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",T.projectionMatrix),ut.setValue(k,"viewMatrix",T.matrixWorldInverse);const Ji=ut.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,Pt.setFromMatrixPosition(T.matrixWorld)),w.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Zi=!0,ma=!0)}if(Ee.needsLights&&(wn.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,H),wn.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",wn.state.spotShadowMap,H),wn.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",wn.state.pointShadowMap,H)),W.isSkinnedMesh){ut.setOptional(k,W,"bindMatrix"),ut.setOptional(k,W,"bindMatrixInverse");const dt=W.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ut.setValue(k,"boneTexture",dt.boneTexture,H))}W.isBatchedMesh&&(ut.setOptional(k,W,"batchingTexture"),ut.setValue(k,"batchingTexture",W._matricesTexture,H),ut.setOptional(k,W,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",W._indirectTexture,H),ut.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",W._colorsTexture,H));const Qi=Y.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&U.update(W,Y,Fn),(Zi||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,ut.setValue(k,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(Dt.envMapIntensity.value=z.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=pD()),Zi){if(ut.setValue(k,"toneMappingExposure",L.toneMappingExposure),Ee.needsLights&&dS(Dt,ma),xe&&G.fog===!0&&Se.refreshFogUniforms(Dt,xe),Se.refreshMaterialUniforms(Dt,G,re,ue,M.state.transmissionRenderTarget[T.id]),Ee.needsLights&&Ee.lightProbeGrid){const dt=Ee.lightProbeGrid;Dt.probesSH.value=dt.texture,Dt.probesMin.value.copy(dt.boundingBox.min),Dt.probesMax.value.copy(dt.boundingBox.max),Dt.probesResolution.value.copy(dt.resolution)}ql.upload(k,nm(Ee),Dt,H)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ql.upload(k,nm(Ee),Dt,H),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(k,"center",W.center),ut.setValue(k,"modelViewMatrix",W.modelViewMatrix),ut.setValue(k,"normalMatrix",W.normalMatrix),ut.setValue(k,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const dt=G.uniformsGroups;for(let Ji=0,ga=dt.length;Ji<ga;Ji++){const rm=dt[Ji];ne.update(rm,Fn),ne.bind(rm,Fn)}}return Fn}function dS(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function hS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,z,Y){const G=O.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),O.get(T.texture).__webglTexture=z,O.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Y=O.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){B=T,K=z,V=Y;let G=null,W=!1,xe=!1;if(T){const _e=O.get(T);if(_e.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),te.copy(T.viewport),oe.copy(T.scissor),I=T.scissorTest,v.viewport(te),v.scissor(oe),v.setScissorTest(I),$=-1;return}else if(_e.__webglFramebuffer===void 0)H.setupRenderTarget(T);else if(_e.__hasExternalTextures)H.rebindTextures(T,O.get(T.texture).__webglTexture,O.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(_e.__boundDepthTexture!==He){if(He!==null&&O.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(xe=!0);const Ce=O.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[z])?G=Ce[z][Y]:G=Ce[z],W=!0):T.samples>0&&H.useMultisampledRTT(T)===!1?G=O.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?G=Ce[Y]:G=Ce,te.copy(T.viewport),oe.copy(T.scissor),I=T.scissorTest}else te.copy(Pe).multiplyScalar(re).floor(),oe.copy(xt).multiplyScalar(re).floor(),I=Xe;if(Y!==0&&(G=q),v.bindFramebuffer(k.FRAMEBUFFER,G)&&v.drawBuffers(T,G),v.viewport(te),v.scissor(oe),v.setScissorTest(I),W){const _e=O.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,Y)}else if(xe){const _e=z;for(let be=0;be<T.textures.length;be++){const Ce=O.get(T.textures[be]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+be,Ce.__webglTexture,Y,_e)}}else if(T!==null&&Y!==0){const _e=O.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(T,z,Y,G,W,xe,Me,_e=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=O.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){v.bindFramebuffer(k.FRAMEBUFFER,be);try{const Ce=T.textures[_e],He=Ce.format,We=Ce.type;if(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!w.textureFormatReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(We)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-G&&Y>=0&&Y<=T.height-W&&k.readPixels(z,Y,G,W,ge.convert(He),ge.convert(We),xe)}finally{const Ce=B!==null?O.get(B).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,G,W,xe,Me,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=O.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(z>=0&&z<=T.width-G&&Y>=0&&Y<=T.height-W){v.bindFramebuffer(k.FRAMEBUFFER,be);const Ce=T.textures[_e],He=Ce.format,We=Ce.type;if(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!w.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(z,Y,G,W,ge.convert(He),ge.convert(We),0);const ot=B!==null?O.get(B).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,ot);const Lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await kR(k,Lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(Re),k.deleteSync(Lt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){const G=Math.pow(2,-Y),W=Math.floor(T.image.width*G),xe=Math.floor(T.image.height*G),Me=z!==null?z.x:0,_e=z!==null?z.y:0;H.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Me,_e,W,xe),v.unbindTexture()},this.copyTextureToTexture=function(T,z,Y=null,G=null,W=0,xe=0){let Me,_e,be,Ce,He,We,Re,ot,Lt;const bt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Y!==null)Me=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,He=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const Dt=Math.pow(2,-W);Me=Math.floor(bt.width*Dt),_e=Math.floor(bt.height*Dt),T.isDataArrayTexture?be=bt.depth:T.isData3DTexture?be=Math.floor(bt.depth*Dt):be=1,Ce=0,He=0,We=0}G!==null?(Re=G.x,ot=G.y,Lt=G.z):(Re=0,ot=0,Lt=0);const lt=ge.convert(z.format),Qt=ge.convert(z.type);let Ee;z.isData3DTexture?(H.setTexture3D(z,0),Ee=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(H.setTexture2DArray(z,0),Ee=k.TEXTURE_2D_ARRAY):(H.setTexture2D(z,0),Ee=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const wn=v.getParameter(k.UNPACK_ROW_LENGTH),Ze=v.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=v.getParameter(k.UNPACK_SKIP_PIXELS),li=v.getParameter(k.UNPACK_SKIP_ROWS),Zi=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),v.pixelStorei(k.UNPACK_SKIP_ROWS,He),v.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const ma=T.isDataArrayTexture||T.isData3DTexture,ut=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Dt=O.get(T),Qi=O.get(z),dt=O.get(Dt.__renderTarget),Ji=O.get(Qi.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,dt.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ga=0;ga<be;ga++)ma&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,O.get(T).__webglTexture,W,We+ga),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,O.get(z).__webglTexture,xe,Lt+ga)),k.blitFramebuffer(Ce,He,Me,_e,Re,ot,Me,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||O.has(T)){const Dt=O.get(T),Qi=O.get(z);v.bindFramebuffer(k.READ_FRAMEBUFFER,Q),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let dt=0;dt<be;dt++)ma?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,W,We+dt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,W),ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,xe,Lt+dt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,xe),W!==0?k.blitFramebuffer(Ce,He,Me,_e,Re,ot,Me,_e,k.COLOR_BUFFER_BIT,k.NEAREST):ut?k.copyTexSubImage3D(Ee,xe,Re,ot,Lt+dt,Ce,He,Me,_e):k.copyTexSubImage2D(Ee,xe,Re,ot,Ce,He,Me,_e);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ut?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ee,xe,Re,ot,Lt,Me,_e,be,lt,Qt,bt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,xe,Re,ot,Lt,Me,_e,be,lt,bt.data):k.texSubImage3D(Ee,xe,Re,ot,Lt,Me,_e,be,lt,Qt,bt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Re,ot,Me,_e,lt,Qt,bt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Re,ot,bt.width,bt.height,lt,bt.data):k.texSubImage2D(k.TEXTURE_2D,xe,Re,ot,Me,_e,lt,Qt,bt);v.pixelStorei(k.UNPACK_ROW_LENGTH,wn),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ze),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),v.pixelStorei(k.UNPACK_SKIP_ROWS,li),v.pixelStorei(k.UNPACK_SKIP_IMAGES,Zi),xe===0&&z.generateMipmaps&&k.generateMipmap(Ee),v.unbindTexture()},this.initRenderTarget=function(T){O.get(T).__webglFramebuffer===void 0&&H.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?H.setTextureCube(T,0):T.isData3DTexture?H.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?H.setTexture2DArray(T,0):H.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){K=0,V=0,B=null,v.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function sS(){const t=he.useRef(null);return he.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new JR,a=new Hn(75,n/i,.1,1e3);a.position.z=5;const s=new mD;s.setSize(n,i),e.appendChild(s.domElement);const o=new xs,l=new Wp({color:65280}),u=new bi(o,l);r.add(u);let c;const d=()=>{u.rotation.x+=.01,u.rotation.y+=.01,s.render(r,a),c=requestAnimationFrame(d)};return d(),()=>{cancelAnimationFrame(c),o.dispose(),l.dispose(),s.dispose(),e.removeChild(s.domElement)}},[]),ie.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})}function gD(){const[t,e]=he.useState(!1),n=({isOpen:i,onClose:r,children:a})=>i?ie.jsx("div",{className:"modal-overlay",onClick:r,children:ie.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[ie.jsx("button",{className:"modal-close",onClick:r,children:"X"}),a]})}):null;return ie.jsxs("div",{className:"playground-wrap",children:[ie.jsx("p",{className:"eyebrow",children:"R&D"}),ie.jsx("h1",{className:"page-title",children:"Playground"}),ie.jsx("p",{className:"lede",children:"Segments of code that I'm experimenting with."}),ie.jsx("div",{className:"Labs",children:ie.jsxs("div",{className:"glass-card",children:[ie.jsx(mv,{className:"glass",title:"Spotlight",image:Wa("gifs/spotlight-preview.png"),previewGif:Wa("gifs/spotlight.gif"),onClick:()=>e(t==="spotlight"?!1:"spotlight"),"aria-label":"Open modal"}),ie.jsxs(n,{isOpen:t==="spotlight",onClose:()=>e(!1),children:[ie.jsx(nR,{}),ie.jsx("h2",{children:"Spotlight following the mouse"}),ie.jsx("p",{children:"To eventually be used as a visual effect in the movie club website."})]}),ie.jsx(mv,{className:"glass",title:"Rotating Cube",image:Wa("gifs/floating-cube-preview.png"),previewGif:Wa("gifs/floating_cube.gif"),onClick:()=>e(t==="cube"?!1:"cube"),"aria-label":"Open modal"}),ie.jsxs(n,{isOpen:t==="cube",onClose:()=>e(!1),children:[ie.jsx("div",{style:{width:"100%",height:"400px"},children:ie.jsx(sS,{})}),ie.jsx("h2",{children:"Rotating Cube"}),ie.jsx("p",{children:"A simple 3D cube that rotates in space."})]})]})})]})}function vD(){return ie.jsx("div",{style:{width:"100%",height:"500px"},children:ie.jsx(sS,{})})}function _D(){return ie.jsxs(Bw,{children:[ie.jsx(qw,{}),ie.jsx("main",{children:ie.jsxs(Iw,{children:[ie.jsx(Hr,{path:"/",element:ie.jsx(Yw,{})}),ie.jsx(Hr,{path:"/projects",element:ie.jsx($w,{})}),ie.jsx(Hr,{path:"/blog",element:ie.jsx(o1,{})}),ie.jsx(Hr,{path:"/blog/:slug",element:ie.jsx(jC,{})}),ie.jsx(Hr,{path:"/playground",element:ie.jsx(gD,{})}),ie.jsx(Hr,{path:"/gif",element:ie.jsx(vD,{})})]})})]})}wf.createRoot(document.getElementById("root")).render(ie.jsx(w0.StrictMode,{children:ie.jsx(_D,{})}));
