(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function mx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mm={exports:{}},Nl={},gm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),gx=Symbol.for("react.portal"),xx=Symbol.for("react.fragment"),vx=Symbol.for("react.strict_mode"),_x=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),Sx=Symbol.for("react.context"),Mx=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),th=Symbol.iterator;function Tx(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,_m={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||xm}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ym(){}ym.prototype=Ps.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||xm}var zd=Bd.prototype=new ym;zd.constructor=Bd;vm(zd,Ps.prototype);zd.isPureReactComponent=!0;var nh=Array.isArray,Sm=Object.prototype.hasOwnProperty,jd={current:null},Mm={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Sm.call(e,i)&&!Mm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:jd.current}}function Ax(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function Cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ih=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cx(""+t.key):e.toString(36)}function Fo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case gx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ec(a,0):i,nh(r)?(n="",t!=null&&(n=t.replace(ih,"$&/")+"/"),Fo(r,e,n,"",function(u){return u})):r!=null&&(Hd(r)&&(r=Ax(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ih,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",nh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+ec(s,o);a+=Fo(s,e,n,c,r)}else if(c=Tx(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+ec(s,o++),a+=Fo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return Fo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Oo={transition:null},Nx={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:jd};function bm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Ps;Ge.Fragment=xx;Ge.Profiler=_x;Ge.PureComponent=Bd;Ge.StrictMode=vx;Ge.Suspense=wx;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;Ge.act=bm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Sm.call(e,c)&&!Mm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:Sx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yx,_context:t},t.Consumer=t};Ge.createElement=wm;Ge.createFactory=function(t){var e=wm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Mx,render:t}};Ge.isValidElement=Hd;Ge.lazy=function(t){return{$$typeof:Ex,_payload:{_status:-1,_result:t},_init:Rx}};Ge.memo=function(t,e){return{$$typeof:bx,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Oo.transition;Oo.transition={};try{t()}finally{Oo.transition=e}};Ge.unstable_act=bm;Ge.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Ge.useContext=function(t){return Xt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Ge.useId=function(){return Xt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Xt.current.useRef(t)};Ge.useState=function(t){return Xt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Xt.current.useTransition()};Ge.version="18.3.1";gm.exports=Ge;var ve=gm.exports;const Vd=mx(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=ve,Lx=Symbol.for("react.element"),Dx=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Ux=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kx={key:!0,ref:!0,__self:!0,__source:!0};function Em(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ix.call(e,i)&&!kx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lx,type:t,key:s,ref:a,props:r,_owner:Ux.current}}Nl.Fragment=Dx;Nl.jsx=Em;Nl.jsxs=Em;mm.exports=Nl;var l=mm.exports,iu={},Tm={exports:{}},hn={},Am={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,$){var N=U.length;U.push($);e:for(;0<N;){var C=N-1>>>1,Z=U[C];if(0<r(Z,$))U[C]=$,U[N]=Z,N=C;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],N=U.pop();if(N!==$){U[0]=N;e:for(var C=0,Z=U.length,ce=Z>>>1;C<ce;){var B=2*(C+1)-1,X=U[B],re=B+1,Y=U[re];if(0>r(X,N))re<Z&&0>r(Y,X)?(U[C]=Y,U[re]=N,C=re):(U[C]=X,U[B]=N,C=B);else if(re<Z&&0>r(Y,N))U[C]=Y,U[re]=N,C=re;else break e}}return $}function r(U,$){var N=U.sortIndex-$.sortIndex;return N!==0?N:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,f=3,m=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=U)i(u),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(u)}}function y(U){if(S=!1,v(U),!_)if(n(c)!==null)_=!0,K(L);else{var $=n(u);$!==null&&ie(y,$.startTime-U)}}function L(U,$){_=!1,S&&(S=!1,d(P),P=-1),m=!0;var N=f;try{for(v($),p=n(c);p!==null&&(!(p.expirationTime>$)||U&&!D());){var C=p.callback;if(typeof C=="function"){p.callback=null,f=p.priorityLevel;var Z=C(p.expirationTime<=$);$=t.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&i(c),v($)}else i(c);p=n(c)}if(p!==null)var ce=!0;else{var B=n(u);B!==null&&ie(y,B.startTime-$),ce=!1}return ce}finally{p=null,f=N,m=!1}}var T=!1,A=null,P=-1,E=5,M=-1;function D(){return!(t.unstable_now()-M<E)}function W(){if(A!==null){var U=t.unstable_now();M=U;var $=!0;try{$=A(!0,U)}finally{$?G():(T=!1,A=null)}}else T=!1}var G;if(typeof x=="function")G=function(){x(W)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,te=J.port2;J.port1.onmessage=W,G=function(){te.postMessage(null)}}else G=function(){g(W,0)};function K(U){A=U,T||(T=!0,G())}function ie(U,$){P=g(function(){U(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,K(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var N=f;f=$;try{return U()}finally{f=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=f;f=U;try{return $()}finally{f=N}},t.unstable_scheduleCallback=function(U,$,N){var C=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,U={id:h++,callback:$,priorityLevel:U,startTime:N,expirationTime:Z,sortIndex:-1},N>C?(U.sortIndex=N,e(u,U),n(c)===null&&U===n(u)&&(S?(d(P),P=-1):S=!0,ie(y,N-C))):(U.sortIndex=Z,e(c,U),_||m||(_=!0,K(L))),U},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(U){var $=f;return function(){var N=f;f=$;try{return U.apply(this,arguments)}finally{f=N}}}})(Cm);Am.exports=Cm;var Fx=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=ve,fn=Fx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm=new Set,pa={};function Dr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(pa[t]=e,t=0;t<e.length;t++)Rm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,Bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},sh={};function zx(t){return ru.call(sh,t)?!0:ru.call(rh,t)?!1:Bx.test(t)?sh[t]=!0:(rh[t]=!0,!1)}function jx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hx(t,e,n,i){if(e===null||typeof e>"u"||jx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Wd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hx(e,n,r,i)&&(n=null),i||r===null?zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Lm=Symbol.for("react.offscreen"),ah=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,tc;function Js(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function ic(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function Vx(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case su:return"Profiler";case qd:return"StrictMode";case au:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function Gx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wx(t){var e=Dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=Wx(t))}function Im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Um(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function uu(t,e){Um(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?du(t,e.type,n):e.hasOwnProperty("defaultValue")&&du(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function du(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ch(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ea(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function km(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,Om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xx=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){Xx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function Bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function zm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(t,e){if(e){if(qx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xu=null,ds=null,fs=null;function dh(t){if(t=Fa(t)){if(typeof xu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Ul(e),xu(t.stateNode,t.type,e))}}function jm(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Hm(){if(ds){var t=ds,e=fs;if(fs=ds=null,dh(t),e)for(t=0;t<e.length;t++)dh(e[t])}}function Vm(t,e){return t(e)}function Gm(){}var rc=!1;function Wm(t,e,n){if(rc)return t(e,n);rc=!0;try{return Vm(t,e,n)}finally{rc=!1,(ds!==null||fs!==null)&&(Gm(),Hm())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var vu=!1;if(vi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){vu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{vu=!1}function Yx(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var aa=!1,nl=null,il=!1,_u=null,$x={onError:function(t){aa=!0,nl=t}};function Kx(t,e,n,i,r,s,a,o,c){aa=!1,nl=null,Yx.apply($x,arguments)}function Zx(t,e,n,i,r,s,a,o,c){if(Kx.apply(this,arguments),aa){if(aa){var u=nl;aa=!1,nl=null}else throw Error(ae(198));il||(il=!0,_u=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fh(t){if(Ir(t)!==t)throw Error(ae(188))}function Qx(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return fh(r),t;if(s===i)return fh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function qm(t){return t=Qx(t),t!==null?Ym(t):null}function Ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ym(t);if(e!==null)return e;t=t.sibling}return null}var $m=fn.unstable_scheduleCallback,hh=fn.unstable_cancelCallback,Jx=fn.unstable_shouldYield,ev=fn.unstable_requestPaint,yt=fn.unstable_now,tv=fn.unstable_getCurrentPriorityLevel,Zd=fn.unstable_ImmediatePriority,Km=fn.unstable_UserBlockingPriority,rl=fn.unstable_NormalPriority,nv=fn.unstable_LowPriority,Zm=fn.unstable_IdlePriority,Pl=null,Yn=null;function iv(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:av,rv=Math.log,sv=Math.LN2;function av(t){return t>>>=0,t===0?32:31-(rv(t)/sv|0)|0}var Za=64,Qa=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ta(o):(s&=a,s!==0&&(i=ta(s)))}else a=n&~r,a!==0?i=ta(a):s!==0&&(i=ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=ov(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qm(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function cv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,Jd,t0,n0,i0,Su=!1,Ja=[],ji=null,Hi=null,Vi=null,xa=new Map,va=new Map,ki=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dv(t,e,n,i,r){switch(e){case"focusin":return ji=js(ji,t,e,n,i,r),!0;case"dragenter":return Hi=js(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=js(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,js(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,js(va.get(s)||null,t,e,n,i,r)),!0}return!1}function r0(t){var e=xr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Xm(n),e!==null){t.blockedOn=e,i0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gu=i,n.target.dispatchEvent(i),gu=null}else return e=Fa(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function mh(t,e,n){Bo(t)&&n.delete(e)}function fv(){Su=!1,ji!==null&&Bo(ji)&&(ji=null),Hi!==null&&Bo(Hi)&&(Hi=null),Vi!==null&&Bo(Vi)&&(Vi=null),xa.forEach(mh),va.forEach(mh)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,fv)))}function _a(t){function e(r){return Hs(r,t)}if(0<Ja.length){Hs(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&Hs(ji,t),Hi!==null&&Hs(Hi,t),Vi!==null&&Hs(Vi,t),xa.forEach(e),va.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&ki.shift()}var hs=bi.ReactCurrentBatchConfig,al=!0;function hv(t,e,n,i){var r=it,s=hs.transition;hs.transition=null;try{it=1,ef(t,e,n,i)}finally{it=r,hs.transition=s}}function pv(t,e,n,i){var r=it,s=hs.transition;hs.transition=null;try{it=4,ef(t,e,n,i)}finally{it=r,hs.transition=s}}function ef(t,e,n,i){if(al){var r=Mu(t,e,n,i);if(r===null)mc(t,e,i,ol,n),ph(t,i);else if(dv(r,t,e,n,i))i.stopPropagation();else if(ph(t,i),e&4&&-1<uv.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&e0(s),s=Mu(t,e,n,i),s===null&&mc(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mc(t,e,i,null,n)}}var ol=null;function Mu(t,e,n,i){if(ol=null,t=Kd(i),t=xr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tv()){case Zd:return 1;case Km:return 4;case rl:case nv:return 16;case Zm:return 536870912;default:return 16}default:return 16}}var Bi=null,tf=null,zo=null;function a0(){if(zo)return zo;var t,e=tf,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return zo=r.slice(t,1<i?1-i:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function gh(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:gh,this.isPropagationStopped=gh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=pn(Ls),ka=gt({},Ls,{view:0,detail:0}),mv=pn(ka),ac,oc,Vs,Ll=gt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(ac=t.screenX-Vs.screenX,oc=t.screenY-Vs.screenY):oc=ac=0,Vs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),xh=pn(Ll),gv=gt({},Ll,{dataTransfer:0}),xv=pn(gv),vv=gt({},ka,{relatedTarget:0}),lc=pn(vv),_v=gt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=pn(_v),Sv=gt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mv=pn(Sv),wv=gt({},Ls,{data:0}),vh=pn(wv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tv[t])?!!e[t]:!1}function rf(){return Av}var Cv=gt({},ka,{key:function(t){if(t.key){var e=bv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rv=pn(Cv),Nv=gt({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=pn(Nv),Pv=gt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),Lv=pn(Pv),Dv=gt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=pn(Dv),Uv=gt({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=pn(Uv),Fv=[9,13,27,32],sf=vi&&"CompositionEvent"in window,oa=null;vi&&"documentMode"in document&&(oa=document.documentMode);var Ov=vi&&"TextEvent"in window&&!oa,o0=vi&&(!sf||oa&&8<oa&&11>=oa),yh=" ",Sh=!1;function l0(t,e){switch(t){case"keyup":return Fv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Bv(t,e){switch(t){case"compositionend":return c0(e);case"keypress":return e.which!==32?null:(Sh=!0,yh);case"textInput":return t=e.data,t===yh&&Sh?null:t;default:return null}}function zv(t,e){if(Jr)return t==="compositionend"||!sf&&l0(t,e)?(t=a0(),zo=tf=Bi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jv[t.type]:e==="textarea"}function u0(t,e,n,i){jm(i),e=ll(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,ya=null;function Hv(t){S0(t,0)}function Dl(t){var e=ns(t);if(Im(e))return t}function Vv(t,e){if(t==="change")return e}var d0=!1;if(vi){var cc;if(vi){var uc="oninput"in document;if(!uc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),uc=typeof wh.oninput=="function"}cc=uc}else cc=!1;d0=cc&&(!document.documentMode||9<document.documentMode)}function bh(){la&&(la.detachEvent("onpropertychange",f0),ya=la=null)}function f0(t){if(t.propertyName==="value"&&Dl(ya)){var e=[];u0(e,ya,t,Kd(t)),Wm(Hv,e)}}function Gv(t,e,n){t==="focusin"?(bh(),la=e,ya=n,la.attachEvent("onpropertychange",f0)):t==="focusout"&&bh()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(ya)}function Xv(t,e){if(t==="click")return Dl(e)}function qv(t,e){if(t==="input"||t==="change")return Dl(e)}function Yv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Yv;function Sa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ru.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Th(t,e){var n=Eh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $v(t){var e=p0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Th(n,s);var a=Th(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kv=vi&&"documentMode"in document&&11>=document.documentMode,es=null,wu=null,ca=null,bu=!1;function Ah(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||es==null||es!==tl(i)||(i=es,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Sa(ca,i)||(ca=i,i=ll(wu,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function to(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},dc={},m0={};vi&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Il(t){if(dc[t])return dc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return dc[t]=e[n];return t}var g0=Il("animationend"),x0=Il("animationiteration"),v0=Il("animationstart"),_0=Il("transitionend"),y0=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){y0.set(t,e),Dr(e,[t])}for(var fc=0;fc<Ch.length;fc++){var hc=Ch[fc],Zv=hc.toLowerCase(),Qv=hc[0].toUpperCase()+hc.slice(1);tr(Zv,"on"+Qv)}tr(g0,"onAnimationEnd");tr(x0,"onAnimationIteration");tr(v0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(_0,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Rh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Zx(i,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Rh(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Rh(r,o,u),s=c}}}if(il)throw t=_u,il=!1,_u=null,t}function dt(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(M0(e,t,2,!1),n.add(i))}function pc(t,e,n){var i=0;e&&(i|=4),M0(n,t,i,e)}var no="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[no]){t[no]=!0,Rm.forEach(function(n){n!=="selectionchange"&&(Jv.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[no]||(e[no]=!0,pc("selectionchange",!1,e))}}function M0(t,e,n,i){switch(s0(e)){case 1:var r=hv;break;case 4:r=pv;break;default:r=ef}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=xr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Wm(function(){var u=s,h=Kd(n),p=[];e:{var f=y0.get(t);if(f!==void 0){var m=nf,_=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":m=Rv;break;case"focusin":_="focus",m=lc;break;case"focusout":_="blur",m=lc;break;case"beforeblur":case"afterblur":m=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Lv;break;case g0:case x0:case v0:m=yv;break;case _0:m=Iv;break;case"scroll":m=mv;break;case"wheel":m=kv;break;case"copy":case"cut":case"paste":m=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_h}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=ga(x,d),y!=null&&S.push(wa(x,y,v)))),g)break;x=x.return}0<S.length&&(f=new m(f,_,null,n,h),p.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==gu&&(_=n.relatedTarget||n.fromElement)&&(xr(_)||_[_i]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?xr(_):null,_!==null&&(g=Ir(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(S=xh,y="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=_h,y="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:ns(m),v=_==null?f:ns(_),f=new S(y,x+"leave",m,n,h),f.target=g,f.relatedTarget=v,y=null,xr(h)===u&&(S=new S(d,x+"enter",_,n,h),S.target=v,S.relatedTarget=g,y=S),g=y,m&&_)t:{for(S=m,d=_,x=0,v=S;v;v=kr(v))x++;for(v=0,y=d;y;y=kr(y))v++;for(;0<x-v;)S=kr(S),x--;for(;0<v-x;)d=kr(d),v--;for(;x--;){if(S===d||d!==null&&S===d.alternate)break t;S=kr(S),d=kr(d)}S=null}else S=null;m!==null&&Nh(p,f,m,S,!1),_!==null&&g!==null&&Nh(p,g,_,S,!0)}}e:{if(f=u?ns(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var L=Vv;else if(Mh(f))if(d0)L=qv;else{L=Wv;var T=Gv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Xv);if(L&&(L=L(t,u))){u0(p,L,n,h);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&du(f,"number",f.value)}switch(T=u?ns(u):window,t){case"focusin":(Mh(T)||T.contentEditable==="true")&&(es=T,wu=u,ca=null);break;case"focusout":ca=wu=es=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Ah(p,n,h);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Ah(p,n,h)}var A;if(sf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jr?l0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(o0&&n.locale!=="ko"&&(Jr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jr&&(A=a0()):(Bi=h,tf="value"in Bi?Bi.value:Bi.textContent,Jr=!0)),T=ll(u,P),0<T.length&&(P=new vh(P,t,null,n,h),p.push({event:P,listeners:T}),A?P.data=A:(A=c0(n),A!==null&&(P.data=A)))),(A=Ov?Bv(t,n):zv(t,n))&&(u=ll(u,"onBeforeInput"),0<u.length&&(h=new vh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=A))}S0(p,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(wa(t,s,r)),s=ga(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=ga(n,s),c!=null&&a.unshift(wa(n,c,o))):r||(c=ga(n,s),c!=null&&a.push(wa(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var e_=/\r\n?/g,t_=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(e_,`
`).replace(t_,"")}function io(t,e,n){if(e=Ph(e),Ph(t)!==e&&n)throw Error(ae(425))}function cl(){}var Eu=null,Tu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,n_=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,i_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(t){return Lh.resolve(null).then(t).catch(r_)}:Cu;function r_(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ds,ba="__reactProps$"+Ds,_i="__reactContainer$"+Ds,Ru="__reactEvents$"+Ds,s_="__reactListeners$"+Ds,a_="__reactHandles$"+Ds;function xr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[Xn])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[Xn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Ul(t){return t[ba]||null}var Nu=[],is=-1;function nr(t){return{current:t}}function ft(t){0>is||(t.current=Nu[is],Nu[is]=null,is--)}function lt(t,e){is++,Nu[is]=t.current,t.current=e}var Qi={},jt=nr(Qi),en=nr(!1),Er=Qi;function _s(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function ul(){ft(en),ft(jt)}function Ih(t,e,n){if(jt.current!==Qi)throw Error(ae(168));lt(jt,e),lt(en,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Gx(t)||"Unknown",r));return gt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=jt.current,lt(jt,t),lt(en,en.current),!0}function Uh(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=w0(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,ft(en),ft(jt),lt(jt,t)):ft(en),lt(en,n)}var ui=null,kl=!1,xc=!1;function b0(t){ui===null?ui=[t]:ui.push(t)}function o_(t){kl=!0,b0(t)}function ir(){if(!xc&&ui!==null){xc=!0;var t=0,e=it;try{var n=ui;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,kl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),$m(Zd,ir),r}finally{it=e,xc=!1}}return null}var rs=[],ss=0,fl=null,hl=0,vn=[],_n=0,Tr=null,fi=1,hi="";function dr(t,e){rs[ss++]=hl,rs[ss++]=fl,fl=t,hl=e}function E0(t,e,n){vn[_n++]=fi,vn[_n++]=hi,vn[_n++]=Tr,Tr=t;var i=fi;t=hi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,fi=1<<32-On(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function of(t){t.return!==null&&(dr(t,1),E0(t,1,0))}function lf(t){for(;t===fl;)fl=rs[--ss],rs[ss]=null,hl=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=vn[--_n],vn[_n]=null,hi=vn[--_n],vn[_n]=null,fi=vn[--_n],vn[_n]=null}var dn=null,un=null,ht=!1,In=null;function T0(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(ht){var e=un;if(e){var n=e;if(!kh(t,e)){if(Pu(t))throw Error(ae(418));e=Gi(n.nextSibling);var i=dn;e&&kh(t,e)?T0(i,n):(t.flags=t.flags&-4097|2,ht=!1,dn=t)}}else{if(Pu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ht=!1,dn=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function ro(t){if(t!==dn)return!1;if(!ht)return Fh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=un)){if(Pu(t))throw A0(),Error(ae(418));for(;e;)T0(t,e),e=Gi(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Gi(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=un;t;)t=Gi(t.nextSibling)}function ys(){un=dn=null,ht=!1}function cf(t){In===null?In=[t]:In.push(t)}var l_=bi.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function so(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function C0(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Yi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,y){return x===null||x.tag!==6?(x=bc(v,d.mode,y),x.return=d,x):(x=r(x,v),x.return=d,x)}function c(d,x,v,y){var L=v.type;return L===Qr?h(d,x,v.props.children,y,v.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ii&&Oh(L)===x.type)?(y=r(x,v.props),y.ref=Gs(d,x,v),y.return=d,y):(y=Yo(v.type,v.key,v.props,null,d.mode,y),y.ref=Gs(d,x,v),y.return=d,y)}function u(d,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Ec(v,d.mode,y),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function h(d,x,v,y,L){return x===null||x.tag!==7?(x=wr(v,d.mode,y,L),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return v=Yo(x.type,x.key,x.props,null,d.mode,v),v.ref=Gs(d,null,x),v.return=d,v;case Zr:return x=Ec(x,d.mode,v),x.return=d,x;case Ii:var y=x._init;return p(d,y(x._payload),v)}if(ea(x)||Bs(x))return x=wr(x,d.mode,v,null),x.return=d,x;so(d,x)}return null}function f(d,x,v,y){var L=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:o(d,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:return v.key===L?c(d,x,v,y):null;case Zr:return v.key===L?u(d,x,v,y):null;case Ii:return L=v._init,f(d,x,L(v._payload),y)}if(ea(v)||Bs(v))return L!==null?null:h(d,x,v,y,null);so(d,v)}return null}function m(d,x,v,y,L){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,o(x,d,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:return d=d.get(y.key===null?v:y.key)||null,c(x,d,y,L);case Zr:return d=d.get(y.key===null?v:y.key)||null,u(x,d,y,L);case Ii:var T=y._init;return m(d,x,v,T(y._payload),L)}if(ea(y)||Bs(y))return d=d.get(v)||null,h(x,d,y,L,null);so(x,y)}return null}function _(d,x,v,y){for(var L=null,T=null,A=x,P=x=0,E=null;A!==null&&P<v.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var M=f(d,A,v[P],y);if(M===null){A===null&&(A=E);break}t&&A&&M.alternate===null&&e(d,A),x=s(M,x,P),T===null?L=M:T.sibling=M,T=M,A=E}if(P===v.length)return n(d,A),ht&&dr(d,P),L;if(A===null){for(;P<v.length;P++)A=p(d,v[P],y),A!==null&&(x=s(A,x,P),T===null?L=A:T.sibling=A,T=A);return ht&&dr(d,P),L}for(A=i(d,A);P<v.length;P++)E=m(A,d,P,v[P],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),x=s(E,x,P),T===null?L=E:T.sibling=E,T=E);return t&&A.forEach(function(D){return e(d,D)}),ht&&dr(d,P),L}function S(d,x,v,y){var L=Bs(v);if(typeof L!="function")throw Error(ae(150));if(v=L.call(v),v==null)throw Error(ae(151));for(var T=L=null,A=x,P=x=0,E=null,M=v.next();A!==null&&!M.done;P++,M=v.next()){A.index>P?(E=A,A=null):E=A.sibling;var D=f(d,A,M.value,y);if(D===null){A===null&&(A=E);break}t&&A&&D.alternate===null&&e(d,A),x=s(D,x,P),T===null?L=D:T.sibling=D,T=D,A=E}if(M.done)return n(d,A),ht&&dr(d,P),L;if(A===null){for(;!M.done;P++,M=v.next())M=p(d,M.value,y),M!==null&&(x=s(M,x,P),T===null?L=M:T.sibling=M,T=M);return ht&&dr(d,P),L}for(A=i(d,A);!M.done;P++,M=v.next())M=m(A,d,P,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?P:M.key),x=s(M,x,P),T===null?L=M:T.sibling=M,T=M);return t&&A.forEach(function(W){return e(d,W)}),ht&&dr(d,P),L}function g(d,x,v,y){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:e:{for(var L=v.key,T=x;T!==null;){if(T.key===L){if(L=v.type,L===Qr){if(T.tag===7){n(d,T.sibling),x=r(T,v.props.children),x.return=d,d=x;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ii&&Oh(L)===T.type){n(d,T.sibling),x=r(T,v.props),x.ref=Gs(d,T,v),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===Qr?(x=wr(v.props.children,d.mode,y,v.key),x.return=d,d=x):(y=Yo(v.type,v.key,v.props,null,d.mode,y),y.ref=Gs(d,x,v),y.return=d,d=y)}return a(d);case Zr:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Ec(v,d.mode,y),x.return=d,d=x}return a(d);case Ii:return T=v._init,g(d,x,T(v._payload),y)}if(ea(v))return _(d,x,v,y);if(Bs(v))return S(d,x,v,y);so(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=bc(v,d.mode,y),x.return=d,d=x),a(d)):n(d,x)}return g}var Ss=C0(!0),R0=C0(!1),pl=nr(null),ml=null,as=null,uf=null;function df(){uf=as=ml=null}function ff(t){var e=pl.current;ft(pl),t._currentValue=e}function Du(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){ml=t,uf=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(ml===null)throw Error(ae(308));as=t,ml.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var vr=null;function hf(t){vr===null?vr=[t]:vr.push(t)}function N0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}function Bh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=gt({},p,f);break e;case 2:Ui=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=p}}function zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Oa={},$n=nr(Oa),Ea=nr(Oa),Ta=nr(Oa);function _r(t){if(t===Oa)throw Error(ae(174));return t}function mf(t,e){switch(lt(Ta,e),lt(Ea,t),lt($n,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hu(e,t)}ft($n),lt($n,e)}function Ms(){ft($n),ft(Ea),ft(Ta)}function L0(t){_r(Ta.current);var e=_r($n.current),n=hu(e,t.type);e!==n&&(lt(Ea,t),lt($n,n))}function gf(t){Ea.current===t&&(ft($n),ft(Ea))}var pt=nr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function xf(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Vo=bi.ReactCurrentDispatcher,_c=bi.ReactCurrentBatchConfig,Ar=0,mt=null,Et=null,Nt=null,vl=!1,ua=!1,Aa=0,c_=0;function kt(){throw Error(ae(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function _f(t,e,n,i,r,s){if(Ar=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?h_:p_,t=n(i,r),ua){s=0;do{if(ua=!1,Aa=0,25<=s)throw Error(ae(301));s+=1,Nt=Et=null,e.updateQueue=null,Vo.current=m_,t=n(i,r)}while(ua)}if(Vo.current=_l,e=Et!==null&&Et.next!==null,Ar=0,Nt=Et=mt=null,vl=!1,e)throw Error(ae(300));return t}function yf(){var t=Aa!==0;return Aa=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function En(){if(Et===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,Et=t;else{if(t===null)throw Error(ae(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ca(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=En(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Ar&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,mt.lanes|=h,Cr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,jn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=En(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D0(){}function I0(t,e){var n=mt,i=En(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Sf(F0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ra(9,k0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ae(349));Ar&30||U0(n,e,r)}return r}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,i){e.value=n,e.getSnapshot=i,O0(e)&&B0(t)}function F0(t,e,n){return n(function(){O0(e)&&B0(t)})}function O0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function B0(t){var e=yi(t,1);e!==null&&Bn(e,t,1,-1)}function jh(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=f_.bind(null,mt,t),[e.memoizedState,t]}function Ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z0(){return En().memoizedState}function Go(t,e,n,i){var r=Gn();mt.flags|=t,r.memoizedState=Ra(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&vf(i,a.deps)){r.memoizedState=Ra(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ra(1|e,n,s,i)}function Hh(t,e){return Go(8390656,8,t,e)}function Sf(t,e){return Fl(2048,8,t,e)}function j0(t,e){return Fl(4,2,t,e)}function H0(t,e){return Fl(4,4,t,e)}function V0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,V0.bind(null,e,t),n)}function Mf(){}function W0(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return Ar&21?(jn(n,e)||(n=Qm(),mt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function u_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{it=n,_c.transition=i}}function Y0(){return En().memoizedState}function d_(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$0(t))K0(e,n);else if(n=N0(t,e,n,i),n!==null){var r=Gt();Bn(n,t,i,r),Z0(n,e,i)}}function f_(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($0(t))K0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var c=e.interleaved;c===null?(r.next=r,hf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=N0(t,e,r,i),n!==null&&(r=Gt(),Bn(n,t,i,r),Z0(n,e,i))}}function $0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function K0(t,e){ua=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}var _l={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},h_={readContext:bn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:Hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Go(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Go(4194308,4,t,e)},useInsertionEffect:function(t,e){return Go(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=d_.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:jh,useDebugValue:Mf,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=jh(!1),e=t[0];return t=u_.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Gn();if(ht){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Pt===null)throw Error(ae(349));Ar&30||U0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hh(F0.bind(null,i,s,t),[t]),i.flags|=2048,Ra(9,k0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Pt.identifierPrefix;if(ht){var n=hi,i=fi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p_={readContext:bn,useCallback:W0,useContext:bn,useEffect:Sf,useImperativeHandle:G0,useInsertionEffect:j0,useLayoutEffect:H0,useMemo:X0,useReducer:yc,useRef:z0,useState:function(){return yc(Ca)},useDebugValue:Mf,useDeferredValue:function(t){var e=En();return q0(e,Et.memoizedState,t)},useTransition:function(){var t=yc(Ca)[0],e=En().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:I0,useId:Y0,unstable_isNewReconciler:!1},m_={readContext:bn,useCallback:W0,useContext:bn,useEffect:Sf,useImperativeHandle:G0,useInsertionEffect:j0,useLayoutEffect:H0,useMemo:X0,useReducer:Sc,useRef:z0,useState:function(){return Sc(Ca)},useDebugValue:Mf,useDeferredValue:function(t){var e=En();return Et===null?e.memoizedState=t:q0(e,Et.memoizedState,t)},useTransition:function(){var t=Sc(Ca)[0],e=En().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:I0,useId:Y0,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=qi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Bn(e,t,r,i),Ho(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=qi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Bn(e,t,r,i),Ho(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=qi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Bn(e,t,i,n),Ho(e,t,i))}};function Vh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function Q0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=tn(e)?Er:jt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=tn(e)?Er:jt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=Vx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g_=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,Xu=i),ku(t,e)},n}function eg(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Wh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new g_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=N_.bind(null,t,e,n),e.then(t,t))}function Xh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var x_=bi.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,i){e.child=t===null?R0(e,null,n,i):Ss(e,t.child,n,i)}function Yh(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=_f(t,e,n,i,s,r),n=yf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ht&&n&&of(e),e.flags|=1,Vt(t,e,i,r),e.child)}function $h(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tg(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(a,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function tg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Fu(t,e,n,i,r)}function ng(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ls,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(ls,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(ls,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(ls,cn),cn|=i;return Vt(t,e,r,n),e.child}function ig(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=tn(n)?Er:jt.current;return s=_s(e,s),ps(e,r),n=_f(t,e,n,i,s,r),i=yf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ht&&i&&of(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Kh(t,e,n,i,r){if(tn(n)){var s=!0;dl(e)}else s=!1;if(ps(e,r),e.stateNode===null)Wo(t,e),Q0(e,n,i),Uu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=tn(n)?Er:jt.current,u=_s(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Gh(e,a,i,u),Ui=!1;var f=e.memoizedState;a.state=f,gl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||en.current||Ui?(typeof h=="function"&&(Iu(e,n,h,i),c=e.memoizedState),(o=Ui||Vh(e,n,o,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,P0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=bn(c):(c=tn(n)?Er:jt.current,c=_s(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==c)&&Gh(e,a,i,c),Ui=!1,f=e.memoizedState,a.state=f,gl(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||en.current||Ui?(typeof m=="function"&&(Iu(e,n,m,i),_=e.memoizedState),(u=Ui||Vh(e,n,u,i,f,_,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){ig(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Uh(e,n,!1),Si(t,e,s);i=e.stateNode,x_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Uh(e,n,!0),e.child}function rg(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),mf(t,e.containerInfo)}function Zh(t,e,n,i,r){return ys(),cf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function sg(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(pt,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=jl(a,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=Bu,t):wf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return v_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Yi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Yi(o,s):(s=wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Bu,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wf(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ao(t,e,n,i){return i!==null&&cf(i),Ss(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Mc(Error(ae(422))),ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=zu(a),e.memoizedState=Bu,s);if(!(e.mode&1))return ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Mc(s,i,void 0),ao(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Bn(i,t,r,-1))}return Rf(),i=Mc(Error(ae(421))),ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=P_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Gi(r.nextSibling),dn=e,ht=!0,In=null,t!==null&&(vn[_n++]=fi,vn[_n++]=hi,vn[_n++]=Tr,fi=t.id,hi=t.overflow,Tr=e),e=wf(e,i.children),e.flags|=4096,e)}function Qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Du(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ag(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function __(t,e,n){switch(e.tag){case 3:rg(e),ys();break;case 5:L0(e);break;case 1:tn(e.type)&&dl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?sg(t,e,n):(lt(pt,pt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);lt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ag(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,ng(t,e,n)}return Si(t,e,n)}var og,ju,lg,cg;og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r($n.current);var s=null;switch(n){case"input":r=cu(t,r),i=cu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=fu(t,r),i=fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}pu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&dt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function y_(t,e,n){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&ul(),Ft(e),null;case 3:return i=e.stateNode,Ms(),ft(en),ft(jt),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&($u(In),In=null))),ju(t,e),Ft(e),null;case 5:gf(e);var r=_r(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ft(e),null}if(t=_r($n.current),ro(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)dt(na[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":oh(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":ch(i,s),dt("invalid",i)}pu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&io(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&io(i.textContent,o,t),r=["children",""+o]):pa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":$a(i),lh(i,s,!0);break;case"textarea":$a(i),uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[ba]=i,og(t,e,!1,!1),e.stateNode=t;e:{switch(a=mu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)dt(na[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":oh(t,i),r=cu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":ch(t,i),r=fu(t,i),dt("invalid",t);break;default:r=i}pu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?zm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Om(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ma(t,c):typeof c=="number"&&ma(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&dt("scroll",t):c!=null&&Xd(t,s,c,a))}switch(n){case"input":$a(t),lh(t,i,!1);break;case"textarea":$a(t),uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)cg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=_r(Ta.current),_r($n.current),ro(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:io(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&io(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&un!==null&&e.mode&1&&!(e.flags&128))A0(),ys(),e.flags|=98560,s=!1;else if(s=ro(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Xn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else In!==null&&($u(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Tt===0&&(Tt=3):Rf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ms(),ju(t,e),t===null&&Ma(e.stateNode.containerInfo),Ft(e),null;case 10:return ff(e.type._context),Ft(e),null;case 17:return tn(e.type)&&ul(),Ft(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ws(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,Ws(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>bs&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Ft(e),null}else 2*yt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=pt.current,lt(pt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function S_(t,e){switch(lf(e),e.tag){case 1:return tn(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),ft(en),ft(jt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Ms(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var oo=!1,zt=!1,M_=typeof WeakSet=="function"?WeakSet:Set,ye=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Jh=!1;function w_(t,e){if(Eu=al,t=p0(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:t,selectionRange:n},al=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ln(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return _=Jh,Jh=!1,_}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ug(t){var e=t.alternate;e!==null&&(t.alternate=null,ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[ba],delete e[Ru],delete e[s_],delete e[a_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dg(t){return t.tag===5||t.tag===3||t.tag===4}function ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Lt=null,Dn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)fg(t,e,n),n=n.sibling}function fg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:zt||os(n,e);case 6:var i=Lt,r=Dn;Lt=null,Ai(t,e,n),Lt=i,Dn=r,Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),_a(t)):gc(Lt,n.stateNode));break;case 4:i=Lt,r=Dn,Lt=n.stateNode.containerInfo,Dn=!0,Ai(t,e,n),Lt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Hu(n,e,a),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!zt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Ai(t,e,n),zt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new M_),e.forEach(function(i){var r=L_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Dn=!1;break e;case 3:Lt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Lt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Lt===null)throw Error(ae(160));fg(s,a,r),Lt=null,Dn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hg(e,t),e=e.sibling}function hg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{da(3,t,t.return),Bl(3,t)}catch(S){vt(t,t.return,S)}try{da(5,t,t.return)}catch(S){vt(t,t.return,S)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{ma(r,"")}catch(S){vt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Um(r,s),mu(o,a);var u=mu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?zm(r,p):h==="dangerouslySetInnerHTML"?Om(r,p):h==="children"?ma(r,p):Xd(r,h,p,u)}switch(o){case"input":uu(r,s);break;case"textarea":km(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(S){vt(t,t.return,S)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){vt(t,t.return,S)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(S){vt(t,t.return,S)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Tf=yt())),i&4&&tp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||h,Cn(e,t),zt=u):Cn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(p=ye=h;ye!==null;){switch(f=ye,m=f.child,f.tag){case 0:case 11:case 14:case 15:da(4,f,f.return);break;case 1:os(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){vt(i,n,S)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){ip(p);continue}}m!==null?(m.return=f,ye=m):ip(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Bm("display",a))}catch(S){vt(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){vt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&tp(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ma(r,""),i.flags&=-33);var s=ep(t);Wu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ep(t);Gu(t,o,a);break;default:throw Error(ae(161))}}catch(c){vt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b_(t,e,n){ye=t,pg(t)}function pg(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||oo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||zt;o=oo;var u=zt;if(oo=a,(zt=c)&&!u)for(ye=r;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?rp(r):c!==null?(c.return=a,ye=c):rp(r);for(;s!==null;)ye=s,pg(s),s=s.sibling;ye=r,oo=o,zt=u}np(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):np(t)}}function np(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&_a(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}zt||e.flags&512&&Vu(e)}catch(f){vt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ip(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function rp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(c){vt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){vt(e,r,c)}}var s=e.return;try{Vu(e)}catch(c){vt(e,s,c)}break;case 5:var a=e.return;try{Vu(e)}catch(c){vt(e,a,c)}}}catch(c){vt(e,e.return,c)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var E_=Math.ceil,yl=bi.ReactCurrentDispatcher,bf=bi.ReactCurrentOwner,Mn=bi.ReactCurrentBatchConfig,Ke=0,Pt=null,bt=null,Dt=0,cn=0,ls=nr(0),Tt=0,Na=null,Cr=0,zl=0,Ef=0,fa=null,Kt=null,Tf=0,bs=1/0,ci=null,Sl=!1,Xu=null,Xi=null,lo=!1,zi=null,Ml=0,ha=0,qu=null,Xo=-1,qo=0;function Gt(){return Ke&6?yt():Xo!==-1?Xo:Xo=yt()}function qi(t){return t.mode&1?Ke&2&&Dt!==0?Dt&-Dt:l_.transition!==null?(qo===0&&(qo=Qm()),qo):(t=it,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function Bn(t,e,n,i){if(50<ha)throw ha=0,qu=null,Error(ae(185));Ua(t,n,i),(!(Ke&2)||t!==Pt)&&(t===Pt&&(!(Ke&2)&&(zl|=n),Tt===4&&Fi(t,Dt)),nn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(bs=yt()+500,kl&&ir()))}function nn(t,e){var n=t.callbackNode;lv(t,e);var i=sl(t,t===Pt?Dt:0);if(i===0)n!==null&&hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hh(n),e===1)t.tag===0?o_(sp.bind(null,t)):b0(sp.bind(null,t)),i_(function(){!(Ke&6)&&ir()}),n=null;else{switch(Jm(i)){case 1:n=Zd;break;case 4:n=Km;break;case 16:n=rl;break;case 536870912:n=Zm;break;default:n=rl}n=Mg(n,mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mg(t,e){if(Xo=-1,qo=0,Ke&6)throw Error(ae(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=sl(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Ke;Ke|=2;var s=xg();(Pt!==t||Dt!==e)&&(ci=null,bs=yt()+500,Mr(t,e));do try{C_();break}catch(o){gg(t,o)}while(!0);df(),yl.current=s,Ke=r,bt!==null?e=0:(Pt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(r=yu(t),r!==0&&(i=r,e=Yu(t,r))),e===1)throw n=Na,Mr(t,0),Fi(t,i),nn(t,yt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!T_(r)&&(e=wl(t,i),e===2&&(s=yu(t),s!==0&&(i=s,e=Yu(t,s))),e===1))throw n=Na,Mr(t,0),Fi(t,i),nn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:fr(t,Kt,ci);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Tf+500-yt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(fr.bind(null,t,Kt,ci),e);break}fr(t,Kt,ci);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*E_(i/1960))-i,10<i){t.timeoutHandle=Cu(fr.bind(null,t,Kt,ci),i);break}fr(t,Kt,ci);break;case 5:fr(t,Kt,ci);break;default:throw Error(ae(329))}}}return nn(t,yt()),t.callbackNode===n?mg.bind(null,t):null}function Yu(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&$u(e)),t}function $u(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function T_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Ef,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function sp(t){if(Ke&6)throw Error(ae(327));ms();var e=sl(t,0);if(!(e&1))return nn(t,yt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=yu(t);i!==0&&(e=i,n=Yu(t,i))}if(n===1)throw n=Na,Mr(t,0),Fi(t,e),nn(t,yt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Kt,ci),nn(t,yt()),null}function Af(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(bs=yt()+500,kl&&ir())}}function Rr(t){zi!==null&&zi.tag===0&&!(Ke&6)&&ms();var e=Ke;Ke|=1;var n=Mn.transition,i=it;try{if(Mn.transition=null,it=1,t)return t()}finally{it=i,Mn.transition=n,Ke=e,!(Ke&6)&&ir()}}function Cf(){cn=ls.current,ft(ls)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n_(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:Ms(),ft(en),ft(jt),xf();break;case 5:gf(i);break;case 4:Ms();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:ff(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(Pt=t,bt=t=Yi(t.current,null),Dt=cn=e,Tt=0,Na=null,Ef=zl=Cr=0,Kt=fa=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function gg(t,e){do{var n=bt;try{if(df(),Vo.current=_l,vl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(Ar=0,Nt=Et=mt=null,ua=!1,Aa=0,bf.current=null,n===null||n.return===null){Tt=1,Na=e,bt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Dt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Xh(a);if(m!==null){m.flags&=-257,qh(m,a,o,s,e),m.mode&1&&Wh(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var S=new Set;S.add(c),e.updateQueue=S}else _.add(c);break e}else{if(!(e&1)){Wh(s,u,e),Rf();break e}c=Error(ae(426))}}else if(ht&&o.mode&1){var g=Xh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),qh(g,a,o,s,e),cf(ws(c,o));break e}}s=c=ws(c,o),Tt!==4&&(Tt=2),fa===null?fa=[s]:fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=J0(s,c,e);Bh(s,d);break e;case 1:o=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xi===null||!Xi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=eg(s,o,e);Bh(s,y);break e}}s=s.return}while(s!==null)}_g(n)}catch(L){e=L,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function xg(){var t=yl.current;return yl.current=_l,t===null?_l:t}function Rf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Cr&268435455)&&!(zl&268435455)||Fi(Pt,Dt)}function wl(t,e){var n=Ke;Ke|=2;var i=xg();(Pt!==t||Dt!==e)&&(ci=null,Mr(t,e));do try{A_();break}catch(r){gg(t,r)}while(!0);if(df(),Ke=n,yl.current=i,bt!==null)throw Error(ae(261));return Pt=null,Dt=0,Tt}function A_(){for(;bt!==null;)vg(bt)}function C_(){for(;bt!==null&&!Jx();)vg(bt)}function vg(t){var e=Sg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?_g(t):bt=e,bf.current=null}function _g(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S_(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,bt=null;return}}else if(n=y_(n,e,cn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Tt===0&&(Tt=5)}function fr(t,e,n){var i=it,r=Mn.transition;try{Mn.transition=null,it=1,R_(t,e,n,i)}finally{Mn.transition=r,it=i}return null}function R_(t,e,n,i){do ms();while(zi!==null);if(Ke&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cv(t,s),t===Pt&&(bt=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Mg(rl,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=it;it=1;var o=Ke;Ke|=4,bf.current=null,w_(t,n),hg(n,t),$v(Tu),al=!!Eu,Tu=Eu=null,t.current=n,b_(n),ev(),Ke=o,it=a,Mn.transition=s}else t.current=n;if(lo&&(lo=!1,zi=t,Ml=r),s=t.pendingLanes,s===0&&(Xi=null),iv(n.stateNode),nn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=Xu,Xu=null,t;return Ml&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===qu?ha++:(ha=0,qu=t):ha=0,ir(),null}function ms(){if(zi!==null){var t=Jm(Ml),e=Mn.transition,n=it;try{if(Mn.transition=null,it=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Ml=0,Ke&6)throw Error(ae(331));var r=Ke;for(Ke|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(ye=u;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:da(8,h,s)}var p=h.child;if(p!==null)p.return=h,ye=p;else for(;ye!==null;){h=ye;var f=h.sibling,m=h.return;if(ug(h),h===u){ye=null;break}if(f!==null){f.return=m,ye=f;break}ye=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var x=t.current;for(ye=x;ye!==null;){a=ye;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ye=v;else e:for(a=x;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bl(9,o)}}catch(L){vt(o,o.return,L)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(Ke=r,ir(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{it=n,Mn.transition=e}}return!1}function ap(t,e,n){e=ws(n,e),e=J0(t,e,1),t=Wi(t,e,1),e=Gt(),t!==null&&(Ua(t,1,e),nn(t,e))}function vt(t,e,n){if(t.tag===3)ap(t,t,n);else for(;e!==null;){if(e.tag===3){ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=ws(n,t),t=eg(e,t,1),e=Wi(e,t,1),t=Gt(),e!==null&&(Ua(e,1,t),nn(e,t));break}}e=e.return}}function N_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>yt()-Tf?Mr(t,0):Ef|=n),nn(t,e)}function yg(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=Gt();t=yi(t,e),t!==null&&(Ua(t,e,n),nn(t,n))}function P_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yg(t,n)}function L_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),yg(t,n)}var Sg;Sg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,__(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ht&&e.flags&1048576&&E0(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wo(t,e),t=e.pendingProps;var r=_s(e,jt.current);ps(e,n),r=_f(null,e,i,t,r,n);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Uu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&of(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=I_(i),t=Ln(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=Kh(null,e,i,t,n);break e;case 11:e=Yh(null,e,i,t,n);break e;case 14:e=$h(null,e,i,Ln(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Kh(t,e,i,r,n);case 3:e:{if(rg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P0(t,e),gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ae(423)),e),e=Zh(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ae(424)),e),e=Zh(t,e,i,n,r);break e}else for(un=Gi(e.stateNode.containerInfo.firstChild),dn=e,ht=!0,In=null,n=R0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=Si(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return L0(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Au(i,r)?a=null:s!==null&&Au(i,s)&&(e.flags|=32),ig(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return sg(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Yh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(pl,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!en.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=gi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Du(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Du(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=bn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),$h(t,e,i,r,n);case 15:return tg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Wo(t,e),e.tag=1,tn(i)?(t=!0,dl(e)):t=!1,ps(e,n),Q0(e,i,r),Uu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return ag(t,e,n);case 22:return ng(t,e,n)}throw Error(ae(156,e.tag))};function Mg(t,e){return $m(t,e)}function D_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new D_(t,e,n,i)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function I_(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===$d)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Nf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return wr(n.children,r,s,e);case qd:a=8,r|=8;break;case su:return t=Sn(12,n,e,r|2),t.elementType=su,t.lanes=s,t;case au:return t=Sn(13,n,e,r),t.elementType=au,t.lanes=s,t;case ou:return t=Sn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case Lm:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:a=10;break e;case Pm:a=9;break e;case Yd:a=11;break e;case $d:a=14;break e;case Ii:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Sn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Lm,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,i,r,s,a,o,c){return t=new U_(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function k_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wg(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(tn(n))return w0(t,n,e)}return e}function bg(t,e,n,i,r,s,a,o,c){return t=Pf(n,i,!0,t,r,s,a,o,c),t.context=wg(null),n=t.current,i=Gt(),r=qi(n),s=gi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,Ua(t,r,i),nn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=Gt(),a=qi(r);return n=wg(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,a),t!==null&&(Bn(t,r,a,s),Ho(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function F_(){return null}var Eg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Hl(t,e,null,null)};Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Hl(null,t,null,null)}),e[_i]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&r0(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lp(){}function O_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=bl(a);s.call(u)}}var a=bg(e,i,t,0,null,!1,!1,"",lp);return t._reactRootContainer=a,t[_i]=a.current,Ma(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=bl(c);o.call(u)}}var c=Pf(t,0,!1,null,null,!1,!1,"",lp);return t._reactRootContainer=c,t[_i]=c.current,Ma(t.nodeType===8?t.parentNode:t),Rr(function(){Hl(e,c,n,i)}),c}function Wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=bl(a);o.call(c)}}Hl(e,a,t,r)}else a=O_(n,e,t,r,i);return bl(a)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(Qd(e,n|1),nn(e,yt()),!(Ke&6)&&(bs=yt()+500,ir()))}break;case 13:Rr(function(){var i=yi(t,1);if(i!==null){var r=Gt();Bn(i,t,1,r)}}),Lf(t,1)}};Jd=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Gt();Bn(e,t,134217728,n)}Lf(t,134217728)}};t0=function(t){if(t.tag===13){var e=qi(t),n=yi(t,e);if(n!==null){var i=Gt();Bn(n,t,e,i)}Lf(t,e)}};n0=function(){return it};i0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};xu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(ae(90));Im(i),uu(i,r)}}}break;case"textarea":km(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};Vm=Af;Gm=Rr;var B_={usingClientEntryPoint:!1,Events:[Fa,ns,Ul,jm,Hm,Af]},Xs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z_={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qm(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||F_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Pl=co.inject(z_),Yn=co}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(ae(200));return k_(t,e,null,n)};hn.createRoot=function(t,e){if(!If(t))throw Error(ae(299));var n=!1,i="",r=Eg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Ma(t.nodeType===8?t.parentNode:t),new Df(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=qm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Rr(t)};hn.hydrate=function(t,e,n){if(!Gl(e))throw Error(ae(200));return Wl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!If(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Eg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=bg(e,null,t,1,n??null,r,!1,s,a),t[_i]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vl(e)};hn.render=function(t,e,n){if(!Gl(e))throw Error(ae(200));return Wl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(ae(40));return t._reactRootContainer?(Rr(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};hn.unstable_batchedUpdates=Af;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Wl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function Tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg)}catch(t){console.error(t)}}Tg(),Tm.exports=hn;var j_=Tm.exports,cp=j_;iu.createRoot=cp.createRoot,iu.hydrateRoot=cp.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ag=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=ve.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},c)=>ve.createElement("svg",{ref:c,...V_,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ag("lucide",r),...o},[...a.map(([u,h])=>ve.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(t,e)=>{const n=ve.forwardRef(({className:i,...r},s)=>ve.createElement(G_,{ref:s,iconNode:e,className:Ag(`lucide-${H_(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=Xe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=Xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Xe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Xe("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Xe("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Xe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=Xe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Xe("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Xe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Xe("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Xe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Xe("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Xe("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Xe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Xe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Xe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Xe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=Xe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=Xe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Xe("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Xe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Xe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Xe("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Xe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Xe("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Xe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Xe("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Xe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function cy({activePage:t,onNavigate:e}){const[n,i]=ve.useState(!1),r=[{label:"Home",page:"home"},{label:"About",page:"about"},{label:"Services",page:"services"},{label:"Ecosystem",page:"ecosystem"},{label:"Contact",page:"contact"}],s=a=>t===a;return l.jsxs("header",{className:"fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all duration-300",children:[l.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between",children:[l.jsxs("button",{onClick:()=>{e("home"),i(!1)},className:"flex items-center gap-2.5 sm:gap-3 group cursor-pointer flex-shrink-0 select-none text-left focus:outline-none",children:[l.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105",children:l.jsx("img",{src:"/logo.png",alt:"ORBIT Logo",className:"w-full h-full object-contain"})}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"font-extrabold text-[19px] sm:text-[21px] leading-none tracking-tight text-[#1668b5]",children:"ORBIT"}),l.jsx("span",{className:"font-bold text-[8px] sm:text-[9.5px] tracking-[0.2em] uppercase leading-none mt-1 text-[#009fd9]",children:"ENGINEERING SOLUTIONS"})]})]}),l.jsx("nav",{className:"hidden lg:flex items-center",children:l.jsx("div",{className:"relative flex items-center gap-1 p-1 bg-slate-100 rounded-full border border-slate-200/80",children:r.map(({label:a,page:o})=>{const c=s(o);return l.jsx("button",{onClick:()=>e(o),className:`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none ${c?"bg-[#1e60aa] text-white shadow-[0_2px_8px_rgba(30,96,170,0.35)]":"text-slate-600 hover:text-slate-900 hover:bg-white/80"}`,children:a},o)})})}),l.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[l.jsxs("a",{href:"tel:+917024128029",className:"flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#1e60aa] transition-colors py-2 px-3 rounded-xl hover:bg-slate-50",children:[l.jsx(Nr,{className:"w-3.5 h-3.5 text-[#1e60aa]"}),l.jsx("span",{children:"+91 70241 28029"})]}),l.jsx("button",{onClick:()=>e("contact"),className:"px-4.5 py-2 rounded-full bg-[#1e60aa] hover:bg-[#165091] text-white text-xs font-bold shadow-md shadow-[#1e60aa]/20 hover:scale-105 transition-all duration-200 cursor-pointer glow-btn",children:"Enquire Now"})]}),l.jsx("div",{className:"flex items-center gap-2 lg:hidden",children:l.jsx("button",{onClick:()=>i(!n),className:"p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none","aria-label":"Toggle navigation menu",children:n?l.jsx(Lg,{className:"w-5 h-5"}):l.jsx(ty,{className:"w-5 h-5"})})})]}),n&&l.jsxs("div",{className:"lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-4 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto",children:[r.map(({label:a,page:o})=>{const c=s(o);return l.jsxs("button",{onClick:()=>{e(o),i(!1)},className:`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${c?"bg-[#1e60aa] text-white shadow-sm":"text-slate-700 hover:bg-slate-100"}`,children:[l.jsx("span",{children:a}),c&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-pulse"})]},o)}),l.jsxs("div",{className:"pt-3 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2",children:[l.jsxs("a",{href:"tel:+917024128029",className:"flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-50 text-[#1668b5] rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors",children:[l.jsx(Nr,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Call Helpline"})]}),l.jsxs("a",{href:"https://wa.me/919039075048?text=Hello%20Orbit%20Engineering",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors",children:[l.jsx(Zn,{className:"w-3.5 h-3.5 text-emerald-600"}),l.jsx("span",{children:"WhatsApp"})]})]})]})]})}const _t={company:{certifications:[{code:"ISO 9001:2015",title:"Quality Management System (QMS)",desc:"Certified excellence in engineering, supply, installation, and commissioning of water treatment and SCADA automation plants."},{code:"ISO 14001:2015",title:"Environmental Management System (EMS)",desc:"Strict adherence to green standards, resource conservation, and zero-liquid-discharge (ZLD) effluent management."},{code:"ISO 45001:2018",title:"Occupational Health & Safety (OH&S)",desc:"Zero-compromise on-site safety protocols for deep well excavations, electrical high-voltage stations, and pipeline networks."}],offices:[{type:"Working Office",name:"Bhopal Central Operations",address:"Root Space, Char Imli, Manipuram Colony, Bhopal, MP – 462016",phone:"+91 70241 28029",role:"Project Engineering, SCADA Control Systems & Tender Cell"},{type:"Branch Office",name:"Arera Colony Branch",address:"Flat No. 2, Block 12, Shalimar Enclave, E3 Arera Colony, Bhopal, MP – 462016",phone:"+91 9039075049",role:"Technical Support, Field Service Dispatch & Spare Parts"},{type:"Head Office",name:"Corporate Headquarters",address:"E-45, Pride City, Katara Hills, Bhopal, MP – 462043",phone:"+91 9039075048",role:"Executive Board, Strategic Partnerships & Government Liaison"}],contact:{phonePrimary:"+91 70241 28029",phoneSecondary:"+91 9039075049",whatsappLink:"https://wa.me/919039075048?text=Hello%20Orbit%20Engineering%20Solutions,%20I%20am%20interested%20in%20discussing%20a%20project.",emails:["info@orbitengineerings.com","service@orbitengineerings.com","sales@orbitengineerings.com"],indiamart:"https://www.indiamart.com/orbit-engineering-solutions-bhopal/"},leadership:[{name:"Manoj Tiwari",role:"Director & Co-Founder",focus:"Project Management, Business Development & State Water Policy (Jal Jeevan Mission / AMRUT)",experience:"27+ Years Industry Experience",image:"/images/leader_manoj.jpg"},{name:"Vijay Tiwari",role:"Director & Co-Founder",focus:"Technical Operations, Automation Architecture, SCADA Engineering & Embedded IoT Solutions",experience:"25+ Years Automation Experience",image:"/images/leader_vijay.jpg"}],departments:[{name:"Automation & Telemetry Division",desc:"Design and deployment of Siemens/Schneider PLC control panels, SCADA software, and IoT cloud telemetry gateways.",banner:"https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",count:"25+ Engineers"},{name:"Field Engineering & Commissioning",desc:"On-site mechanical erection, electrofusion pipe welding, pump commissioning, and dry/wet hydraulic trials.",banner:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",count:"40+ Field Specialists"},{name:"IT Infrastructure & Cloud Services",desc:"Centralized SCADA server hosting, cloud database synchronization, GIS mapping, and mobile app integration.",banner:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",count:"15+ Tech Specialists"}]},projects:[{id:"gandhisagar-pkg2",name:"Gandhisagar Package 2",category:"Government Schemes",client:"MP Jal Nigam",location:"District Neemuch, Madhya Pradesh",scope:"Multi-village water supply scheme automation, telemetry & flow management under Jal Jeevan Mission",status:"Ongoing",badge:"Mega Scheme",scale:"District Scale (Neemuch)",year:"2023 - Present",metrics:"50+ Villages Covered",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",details:"Comprehensive rural water supply infrastructure providing tap water connections. Features raw water intake pump automation from Gandhisagar reservoir, automated transmission pipelines, and cloud-linked SCADA monitoring.",deliverables:["Electromagnetic Flow Meters (100-600mm)","PLC & RTU Automation Panels","4G Cellular Telemetry Gateway","Submersible Water Quality Monitoring Nodes"]},{id:"beohari-scheme",name:"Beohari Multi-Village Scheme",category:"Government Schemes",client:"MP Jal Nigam",location:"Shahdol District, Madhya Pradesh",scope:"Comprehensive village water distribution management system under Har Ghar Jal initiative",status:"Ongoing",badge:"JJM Scheme",scale:"Multi-Gram Panchayat",year:"2023 - Present",metrics:"35+ Villages Connected",image:"https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80",details:"Turnkey water automation scheme providing reliable drinking water connections. Integrated with solar-assisted pump systems, residual chlorine monitoring, and automatic pressure relief control.",deliverables:["Smart Village Telemetry","Auto-Chlorination Sensors","Pump Station PLC Enclosures","Hydrostatic Level Transmitters"]},{id:"rewa-bansagar",name:"Rewa Bansagar Scheme",category:"Government Schemes",client:"MP Jal Nigam",location:"District Rewa, Madhya Pradesh",scope:"Large-scale water distribution automation & canal linkage from Bansagar Dam",status:"Ongoing",badge:"Mega Scheme",scale:"Regional Network",year:"2022 - Present",metrics:"Bansagar Dam Canal Linkage",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",details:"High-volume regional water distribution network connecting Bansagar Dam reservoirs to rural community tanks. Automated canal intake gates, ultrasonic flow calculation, and centralized command center.",deliverables:["Central SCADA Control Room","Canal Flow Gauging Systems","High-capacity Electromagnetic Meters","Remote Terminal Units (RTU)"]},{id:"pahargarh-scheme",name:"Pahargarh Multi-Village Scheme",category:"Government Schemes",client:"MP Jal Nigam",location:"District Rajgarh, Madhya Pradesh",scope:"Rural water supply automation & booster pump station integration",status:"Ongoing",badge:"JJM Scheme",scale:"Rural Network",year:"2023 - Present",metrics:"25,000+ Population Served",image:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",details:"Rural drinking water network with integrated chlorination, booster pump PLC coordination, and cellular IoT telemetry for zero-downtime operation.",deliverables:["Auto-Chlorinators","PLC Control Panels","Submersible Level Transmitters","Real-time Cloud Dashboard"]},{id:"narmada-gambhir",name:"Narmada Gambhir Multi-Village Scheme",category:"Government Schemes",client:"MP Jal Nigam",location:"District Ujjain, Madhya Pradesh",scope:"Advanced water management connecting Narmada river source to multiple rural clusters",status:"Ongoing",badge:"Mega Scheme",scale:"Multi-Tehsil Project",year:"2022 - Present",metrics:"120+ KM Pipeline Network",image:"https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",details:"High-priority state water infrastructure transferring treated water across Ujjain district. Features District Metered Area (DMA) pressure balancing and NRW leak detection.",deliverables:["District Metered Area (DMA) Setup","Remote Motorized Valve Controllers","Flow & Pressure IoT Nodes","Overhead Tank Sensors"]},{id:"gohad-scheme",name:"Gohad Water Supply Scheme",category:"Urban & Municipal",client:"MPUDCL Bhopal",location:"Bhind / Gwalior Region, Madhya Pradesh",scope:"Modern municipal water supply system with full turnkey automation",status:"Ongoing",badge:"Urban Infra",scale:"Municipal Town Scale",year:"2023 - Present",metrics:"Complete Urban Supply",image:"https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=1000&q=80",details:"Urban development water scheme implementing 24x7 pressurized water delivery, automated pump sequencing, and leak-detection algorithms for urban municipal local bodies.",deliverables:["VFD Pump Panels","Chlorine Dosing System","Township SCADA Workstation","Smart Water Meters"]},{id:"bua-bichhiya",name:"Bua Bichhiya Water Supply Project",category:"Urban & Municipal",client:"UAD AMRUT 2.0",location:"District Mandla, Madhya Pradesh",scope:"AMRUT 2.0 smart urban water management & storage automation",status:"Ongoing",badge:"AMRUT 2.0",scale:"Nagar Parishad",year:"2023 - Present",metrics:"Universal Coverage",image:"https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1000&q=80",details:"Executed under Atal Mission for Rejuvenation and Urban Transformation (AMRUT 2.0) to achieve 100% water security, NRW (Non-Revenue Water) reduction, and smart distribution.",deliverables:["AMRUT-compliant Smart Meters","SCADA Server & Workstation","Electromagnetic Meters (50-300mm)","Cloud Analytics"]},{id:"mohgaon-project",name:"Mohgaon Water Supply Project",category:"Urban & Municipal",client:"UAD AMRUT 2.0",location:"District Chhindwara, Madhya Pradesh",scope:"Modern water supply system with full telemetry and automation",status:"Ongoing",badge:"AMRUT 2.0",scale:"Urban Local Body",year:"2023 - Present",metrics:"Smart City Grade",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",details:"Comprehensive urban water upgrade featuring smart pumping stations, water quality monitoring, and automated reservoir level management.",deliverables:["Automated Reservoir Level Control","Online Turbidity & pH Analyzers","Motor Control Center (MCC)","Operator HMI"]},{id:"kymore-pkg-5d",name:"Kymore & Vijayraghavgarh (Package 5D)",category:"Urban & Municipal",client:"MPUDCL Bhopal",location:"Katni District, Madhya Pradesh",scope:"Turnkey water distribution infrastructure & metering SITC",status:"Completed",badge:"Completed",scale:"Twin Municipality",year:"2022",metrics:"100% Commissioned",image:"https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1000&q=80",details:"Supply, installation, testing, and commissioning (SITC) of water pipeline infrastructure, bulk flow meters, and pump house automation.",deliverables:["Bulk Flow Meters","Butterfly Isolation Valves","Surge Protection","Operation Handover"]},{id:"amarpatan-pkg-7d",name:"Amarpatan & Ramnagar (Package 7D)",category:"Urban & Municipal",client:"MPUDCL Bhopal",location:"Satna District, Madhya Pradesh",scope:"Urban water treatment & distribution automation package",status:"Completed",badge:"Completed",scale:"Sub-division Level",year:"2022",metrics:"Fully Operational",image:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",details:"Package 7D turnkey implementation including raw water intake, WTP instrumentation, and treated water booster stations.",deliverables:["WTP PLC Panel","Pressure Transmitters","Electromagnetic Flow Meters","O&M Support"]},{id:"harpalpur-pkg-6g",name:"Harpalpur & Badagaon (Package 6G)",category:"Urban & Municipal",client:"MPUDCL Bhopal",location:"Chhatarpur & Tikamgarh, Madhya Pradesh",scope:"Turnkey municipal water infrastructure & telemetry network",status:"Completed",badge:"Completed",scale:"Dual Urban Centers",year:"2022",metrics:"100% Operational",image:"https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80",details:"Turnkey delivery of automated distribution nodes with remote monitoring, drastically reducing water losses across both municipalities.",deliverables:["SCADA Gateway","Ultrasonic Level Gauges","Motorized Actuators","Maintenance Protocols"]},{id:"kari-lidhorakhas",name:"KARI & Lidhorakhas Water Meter SITC",category:"Urban & Municipal",client:"Tikamgarh Nagar Parishads",location:"Tikamgarh, Madhya Pradesh",scope:"Supply, installation, testing & commissioning of consumer & bulk meters",status:"Completed",badge:"Completed",scale:"Nagar Parishad",year:"2021",metrics:"10,000+ Meters Installed",image:"https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1000&q=80",details:"Citywide deployment of BIS-certified water meters with digital pulse outputs, enabling transparent municipal volumetric billing.",deliverables:["Domestic Water Meters","Bulk Flanged Meters","Tamper Evident Seals","Billing Software Integration"]},{id:"gangadhar-meher",name:"Gangadhar Meher Lift Irrigation Project",category:"Lift Irrigation",client:"WRD Bhopal / Odisha WRD",location:"Odisha / MP Borders",scope:"Mega lift irrigation automation, pump sequencing & flow metering",status:"Completed",badge:"Irrigation Mega",scale:"Interstate Infrastructure",year:"2021",metrics:"Thousands of Hectares Irrigated",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",details:"High-horsepower lift irrigation system lifting river water for agricultural distribution. Integrated multi-stage pump sequencing with automated surge protection.",deliverables:["Heavy Duty Butterfly Valves (600mm+)","Multi-turn Actuators","Ultrasonic Open Channel Flow Meters","High Voltage Pump Automation"]},{id:"betul-45mld",name:"45 MLD Turnkey Water Automation",category:"Urban & Municipal",client:"Betul-Bazar, Amla & Sarni Nagar Parishads",location:"Betul District, Madhya Pradesh",scope:"45 MLD massive urban water infrastructure & central SCADA",status:"Completed",badge:"45 MLD Scale",scale:"Three Nagar Parishads",year:"2022",metrics:"45 MLD Capacity",image:"https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80",details:"One of Madhya Pradesh's benchmark municipal projects: fully automated 45 MLD treatment and distribution network serving over 150,000 residents across Betul, Amla, and Sarni.",deliverables:["45 MLD WTP Automation","Triple-city Interconnected SCADA","Siemens S7 PLC Architecture","Redundant Fiber Telemetry"]},{id:"gobranawapra-7-6mld",name:"7.6 MLD Sewage Treatment Plant (STP)",category:"Industrial & STP",client:"Gobranawapra Municipal Council",location:"Raipur, Chhattisgarh",scope:"7.6 MLD sewage treatment plant turnkey instrumentation & automation",status:"Completed",badge:"7.6 MLD STP",scale:"City STP",year:"2023",metrics:"CPCB Compliance Guaranteed",image:"https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1000&q=80",details:"Engineered to satisfy stringent Central Pollution Control Board (CPCB) wastewater norms. Features automated dissolved oxygen (DO) control, online BOD/COD analyzers, and sludge dewatering automation.",deliverables:["Online BOD/COD Analyzers","Dissolved Oxygen (DO) Transmitters","Aeration Blowers Automation","CPCB Cloud Data Uplink"]},{id:"bhopal-3mgd-wtp",name:"3 MGD Water Treatment Plant",category:"Urban & Municipal",client:"Bhopal Municipal Corporation",location:"Idgah Hills, Bhopal, Madhya Pradesh",scope:"3 MGD municipal water treatment plant complete turnkey automation",status:"Completed",badge:"Capital City WTP",scale:"Bhopal Capital",year:"2018",metrics:"3 MGD Clean Drinking Water",image:"https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80",details:"Urban capital city WTP providing drinking water to historic Old Bhopal and Idgah Hills. Integrated raw water clariflocculators, sand filters, and chlorination with SCADA control room.",deliverables:["Full WTP Turnkey Automation","Raw & Treated Water Flow Meters","Turbidity & Residual Chlorine Analyzers","Central Operator Console"]},{id:"indore-district-automation",name:"Water Supply Scheme Automation",category:"Government Schemes",client:"Indore District Administration",location:"Betma, Gautampura & Depalpur, Indore, Madhya Pradesh",scope:"Integrated water supply scheme automation across three major growth centers",status:"Completed",badge:"Smart District",scale:"Indore Suburban Hubs",year:"2021",metrics:"3 Key Towns Covered",image:"https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1000&q=80",details:"Fully automated pumping networks with remote GSM telemetry, automated reservoir level shutoff, and energy-efficient motor management.",deliverables:["GSM Remote Terminal Units","Capacitive & Ultrasonic Level Sensors","Automated Star-Delta PLC Panels","Energy Metering"]},{id:"prism-cement-automation",name:"Industrial Humidity & Temperature Control",category:"Industrial Turnkey",client:"Prism Cement Ltd",location:"Satna, Madhya Pradesh",scope:"Turnkey climate regulation & industrial process automation",status:"Completed",badge:"Industrial Automation",scale:"Mega Cement Plant",year:"2015",metrics:"24x7 Process Stability",image:"https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80",details:"Custom engineered heavy-industry climate control system ensuring tight tolerance temperature and humidity parameters for cement curing and laboratory testing.",deliverables:["Industrial Grade Temperature/Humidity Transmitters","Closed-loop PID Controllers","Ruggedized HMI Enclosure","Factory SCADA Interfacing"]},{id:"lupin-ro-automation",name:"Turnkey RO Plant Automation",category:"Industrial Turnkey",client:"Lupin Pharmaceuticals Ltd",location:"Mandideep Industrial Area, Bhopal, Madhya Pradesh",scope:"Turnkey automation project for pharmaceutical RO pure water system",status:"Completed",badge:"Pharma Grade",scale:"Pharma Manufacturing Facility",year:"2016",metrics:"USP Pure Water Compliance",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",details:"Ultra-pure water generation system meeting stringent pharmaceutical standards. Multi-stage reverse osmosis automation with automated membrane cleaning (CIP) sequencing and conductivity tracking.",deliverables:["Pharma-grade Sanitary Flow Meters","Online Conductivity & pH Analyzers","CIP Automated Sequence Controller","Audit Trail & Compliance Logging"]},{id:"vindhyachal-distillery",name:"40 KL Turnkey Automation",category:"Industrial Turnkey",client:"Vindhyachal Distilleries Pvt Ltd",location:"Pilukhedi Industrial Area, Bhopal, Madhya Pradesh",scope:"40 KL turnkey automation & fermentation process control",status:"Completed",badge:"Distillery Turnkey",scale:"Commercial Distillery",year:"2017",metrics:"40 KL Capacity",image:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",details:"Turnkey automation of distillation and fermentation units with automated boiler feed, temperature regulation, and high-accuracy mass flow measurement for alcohol production.",deliverables:["Mass Flow Meters (Coriolis)","Pneumatic Control Valves","Explosion-Proof Level Transmitters","Central SCADA Station"]}],services:[{id:"wtp-stp-ro",title:"Water Treatment Solutions (WTP / STP / RO / ETP)",iconName:"Droplets",tag:"Core Specialty",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",description:"End-to-end design, civil-electro-mechanical engineering, installation, and commissioning of drinking water treatment and effluent recovery facilities.",features:["Municipal & Industrial Water Treatment Plants (WTP) - Multi-MLD Capacity","Sewage Treatment Plants (STP) with MBBR, SBR & MBR technologies","Industrial Effluent Treatment Plants (ETP) with Zero Liquid Discharge (ZLD)","Pharmaceutical & Industrial Reverse Osmosis (RO) plants","Gas Chlorination, Electro-chlorination & Multi-grade filtration units"]},{id:"scada-plc-telemetry",title:"Automation & SCADA Control Systems",iconName:"Cpu",tag:"Industry 4.0",image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",description:"State-of-the-art automation architectures engineered with Siemens, Schneider Electric, ABB, and Rockwell Automation platforms.",features:["Custom PLC & RTU Panel design, wiring, testing, and site commissioning","Central SCADA Command & Control room setup with multi-screen operator consoles","IoT Telemetry via 4G/5G, LoRaWAN, and satellite gateways","District Metered Area (DMA) management and real-time NRW leakage tracking","Mobile App & Cloud Dashboards for municipal engineers and executive reviews"]},{id:"installation-commissioning",title:"Installation & Field Commissioning",iconName:"Wrench",tag:"Execution Excellence",image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",description:"Proven track record of deploying complex water networks across rugged terrains in rural and urban Madhya Pradesh and nationwide.",features:["Heavy pipeline laying & electrofusion jointing (HDPE / DI / MS)","Submersible and vertical turbine pump house mechanical erection","Complete electrical substation, transformers & MCC panel integration","Dry & wet commissioning with comprehensive parameter validation","Formal operator training, safety drills & technical handover"]},{id:"om-amc-support",title:"Operation & Maintenance (O&M) + AMC",iconName:"ShieldCheck",tag:"Lifecycle Reliability",image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",description:"Long-term operation and maintenance services safeguarding project longevity and maximizing uptime for municipal and industrial assets.",features:["Annual Maintenance Contracts (AMC) with guaranteed response times","24/7 dedicated engineering field support across Madhya Pradesh","Preventative maintenance schedules and sensor calibration certificates","Inventory of critical spares, flow meters, sensors, and PLC cards","Water quality testing, sludge management, and CPCB compliance logging"]},{id:"consultancy-engineering",title:"Consultancy, GPS Survey & Design",iconName:"Compass",tag:"Technical Advisory",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",description:"Front-end engineering design (FEED), hydraulic simulations, and detailed project reports (DPR) for government tenders and large contractors.",features:["Comprehensive GPS topography survey & GIS mapping for water schemes","Hydraulic flow modeling & pipeline surge analysis","Detailed BOQ (Bill of Quantities) & tender compliance preparation","Jal Jeevan Mission (JJM) and AMRUT scheme compliance alignment","Energy efficiency audits for pumping stations and treatment plants"]},{id:"solar-clean-energy",title:"Solar Water & Energy Solutions",iconName:"Sun",tag:"Sustainable Power",image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",description:"Renewable energy integration driving off-grid rural water pumps and lowering operational expenditure for industrial treatment units.",features:["Solar-powered submersible pumping stations under PM KUSUM","Floating solar arrays for raw water reservoirs and canals","Grid-tied and hybrid rooftop solar plants for treatment facilities","Solar street lighting for municipal infrastructure complexes","Net metering integration and clean energy carbon reduction"]}],ecosystem:{government:[{name:"MP Jal Nigam Maryadit",tag:"Har Ghar Jal JJM Schemes",logo:"/logos/mp-jal-nigam.svg"},{name:"MPUDCL Bhopal",tag:"Urban Water Development Projects",logo:"/logos/mpudcl.svg"},{name:"Bharat Sarkar - Jal Shakti",tag:"National Water Mission Partner",logo:"/logos/jal-shakti.svg"},{name:"Bhopal Municipal Corporation",tag:"City Water Treatment & SCADA",logo:"/logos/bmc.svg"},{name:"Indore District Administration",tag:"District Water Scheme Automation",logo:"/logos/indore.svg"},{name:"Water Resources Department (WRD)",tag:"Lift Irrigation & Canals",logo:"/logos/wrd.svg"}],industrial:[{name:"Prism Cement Ltd",domain:"Heavy Industry",work:"Turnkey Climate & Temperature Automation System",location:"Satna, MP"},{name:"Lupin Pharmaceuticals Ltd",domain:"Pharmaceutical",work:"Turnkey Pure RO Water Treatment & CIP System",location:"Mandideep, MP"},{name:"Vindhyachal Distilleries Pvt Ltd",domain:"Distillery",work:"40 KL Turnkey Automation & Mass Flow Metering",location:"Pilukhedi, MP"},{name:"Central India Pvt Ltd",domain:"Manufacturing",work:"Industrial Water Filtration & SCADA Uplink",location:"Bhopal, MP"},{name:"Larsen & Toubro (L&T)",domain:"Infrastructure EPC",work:"Instrumentation & Telemetry Contractor Partner",location:"Pan-India"},{name:"BHEL Bhopal",domain:"Public Sector Enterprise",work:"Industrial Instrumentation & Sensor Supply",location:"Bhopal, MP"}]}};function uy({onOpenQuote:t}){const[e,n]=ve.useState(new Date);ve.useEffect(()=>{const a=setInterval(()=>n(new Date),6e4);return()=>clearInterval(a)},[]);const i=()=>{const a=e.getHours(),o=e.getDay();return o>=1&&o<=6&&a>=10&&a<19},r=[{label:"Home",page:"home"},{label:"About Us",page:"about"},{label:"Services",page:"services"},{label:"Ecosystem",page:"ecosystem"},{label:"Contact",page:"contact"}],s=["Water Treatment Plants (WTP)","Intake Wells & Water Abstraction","Overhead Tanks & Reservoirs (OHT/CWR)","High-Capacity Pump Houses","Transmission & Distribution Pipelines","SCADA & Central Command Control","Solar Water Pumping (PM KUSUM)","24/7 O&M Annual Contracts"];return l.jsxs("footer",{id:"contact",className:"relative bg-[#070b14] border-t border-slate-800 text-slate-400 overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1e60aa] via-sky-400 to-emerald-400"}),l.jsx("div",{className:"border-b border-slate-800/80 bg-slate-950/60 py-2.5 overflow-hidden",children:l.jsx("div",{className:"ticker-inner flex items-center gap-10 text-[11px] text-slate-300 uppercase tracking-wider font-semibold",children:["💧 JJM Partner","⚙️ SCADA Systems","🏆 ₹200+ Cr Portfolio","📍 Bhopal, MP","🔬 Triple ISO Certified","☀️ Solar Water Solutions","🌊 WTP / STP / ETP","📡 IoT Telemetry","💧 JJM Partner","⚙️ SCADA Systems","🏆 ₹200+ Cr Portfolio","📍 Bhopal, MP"].map((a,o)=>l.jsx("span",{className:"shrink-0 px-2",children:a},o))})}),l.jsx("div",{className:"border-b border-slate-800 bg-gradient-to-r from-slate-900 via-[#0d172a] to-slate-900 py-6 px-4",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-base font-bold text-white tracking-tight",children:"Ready to start your water infrastructure project?"}),l.jsx("div",{className:"text-xs text-slate-400 mt-0.5",children:"Our engineers in Bhopal will prepare a free technical proposal & DPR estimate"})]}),l.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[l.jsxs("a",{href:_t.company.contact.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm hover:scale-105",children:[l.jsx(Zn,{className:"w-4 h-4"}),"WhatsApp Now"]}),l.jsxs("button",{onClick:t,className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer glow-btn",children:["Get Free Consultation",l.jsx(Kn,{className:"w-3.5 h-3.5"})]})]})]})}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10",children:[l.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e60aa] to-[#009fd9] flex items-center justify-center text-white shadow-lg shadow-[#1e60aa]/30 border border-sky-400/20",children:l.jsx(Xl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsxs("span",{className:"text-xl font-black text-white tracking-tight",children:["ORBIT ",l.jsx("span",{className:"text-[#009fd9]",children:"ENGINEERING"})]}),l.jsx("div",{className:"text-[10px] text-slate-400 font-semibold mt-0.5 uppercase tracking-wider",children:"Solutions — Est. 1998, Bhopal MP"})]})]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"India's premier water infrastructure and turnkey automation enterprise. Trusted JJM, AMRUT & industrial partner for 27+ years across Madhya Pradesh and pan-India."}),l.jsxs("div",{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold border ${i()?"bg-emerald-950/60 border-emerald-800/80 text-emerald-400":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[l.jsx("span",{className:`w-2 h-2 rounded-full ${i()?"bg-emerald-400 animate-pulse":"bg-slate-500"}`}),i()?"Office Open Now (10 AM - 7 PM)":"Closed — Opens Mon 10 AM"]}),l.jsxs("div",{className:"p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs space-y-2 shadow-inner",children:[l.jsxs("div",{className:"font-bold text-sky-400 flex items-center gap-1.5",children:[l.jsx(La,{className:"w-4 h-4 text-emerald-400"}),"Triple ISO Certified Enterprise"]}),l.jsx("div",{className:"flex gap-2 flex-wrap",children:["ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"].map(a=>l.jsx("span",{className:"text-[10px] bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700 font-medium",children:a},a))})]}),l.jsxs("a",{href:_t.company.contact.indiamart,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-bold",children:["⭐ Verified Seller on IndiaMART",l.jsx(Ng,{className:"w-3 h-3"})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider mb-4",children:"Navigation"}),l.jsxs("ul",{className:"space-y-2.5 text-xs",children:[r.map(a=>l.jsx("li",{children:l.jsxs("span",{className:"text-slate-400 hover:text-sky-400 transition-colors cursor-default flex items-center gap-1.5 group font-medium",children:[l.jsx(El,{className:"w-3 h-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"}),a.label]})},a.page)),l.jsx("li",{className:"pt-1",children:l.jsx("button",{onClick:t,className:"text-sky-400 hover:text-sky-300 font-bold transition-colors cursor-pointer flex items-center gap-1",children:"Request Quotation →"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider mb-4",children:"Core Services"}),l.jsx("ul",{className:"space-y-2.5 text-xs text-slate-400",children:s.map(a=>l.jsxs("li",{className:"hover:text-sky-400 transition-colors cursor-default flex items-center gap-1.5 group font-medium",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"}),a]},a))})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider mb-4",children:"HQ Contact"}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("a",{href:`tel:${_t.company.contact.phonePrimary}`,className:"flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group",children:[l.jsx("div",{className:"w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800",children:l.jsx(Nr,{className:"w-3.5 h-3.5 text-sky-400 group-hover:text-white"})}),l.jsx("span",{className:"font-semibold",children:_t.company.contact.phonePrimary})]}),l.jsxs("a",{href:`tel:${_t.company.contact.phoneSecondary}`,className:"flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group",children:[l.jsx("div",{className:"w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800",children:l.jsx(Nr,{className:"w-3.5 h-3.5 text-sky-400 group-hover:text-white"})}),l.jsx("span",{className:"font-semibold",children:_t.company.contact.phoneSecondary})]}),l.jsxs("a",{href:`mailto:${_t.company.contact.emails[0]}`,className:"flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group",children:[l.jsx("div",{className:"w-7 h-7 bg-slate-900 group-hover:bg-[#1e60aa] rounded-lg flex items-center justify-center transition-colors border border-slate-800",children:l.jsx(J_,{className:"w-3.5 h-3.5 text-sky-400 group-hover:text-white"})}),l.jsx("span",{className:"truncate font-semibold",children:_t.company.contact.emails[0]})]}),l.jsxs("div",{className:"flex items-start gap-2 text-slate-400",children:[l.jsx("div",{className:"w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 shrink-0",children:l.jsx(Cg,{className:"w-3.5 h-3.5 text-sky-400"})}),l.jsxs("span",{className:"leading-relaxed",children:["Mon–Sat: 10 AM – 7 PM",l.jsx("br",{}),l.jsx("span",{className:"text-slate-500 font-medium",children:"Sunday Closed"})]})]}),l.jsxs("a",{href:_t.company.contact.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"mt-2 w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all hover:scale-105 shadow-sm",children:[l.jsx(Zn,{className:"w-4 h-4"}),"Chat on WhatsApp"]})]})]})]})}),l.jsx("div",{className:"border-t border-slate-800/80 bg-[#04070d] py-5 px-4",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsxs("span",{className:"font-medium text-slate-400",children:["© ",new Date().getFullYear()," Orbit Engineering Solutions."]}),l.jsx("span",{className:"hidden sm:inline text-slate-700",children:"·"}),l.jsx("span",{children:"Est. 1998, Bhopal, MP"}),l.jsx("span",{className:"hidden sm:inline text-slate-700",children:"·"}),l.jsxs("span",{className:"flex items-center gap-1",children:["All rights reserved ",l.jsx(Q_,{className:"w-3 h-3 text-red-500 inline fill-current"})]})]}),l.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors p-1 group cursor-pointer font-semibold",children:[l.jsx("span",{children:"Back to top"}),l.jsx(X_,{className:"w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"})]})]})})]})}var kf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),C=N.getContext("2d");C.fillRect(0,0,1,1);var Z=N.transferToImageBitmap();C.createPattern(Z,"no-repeat")}catch{return!1}return!0}();function c(){}function u(N){var C=n.exports.Promise,Z=C!==void 0?C:e.Promise;return typeof Z=="function"?new Z(N):(N(c,c),null)}var h=function(N,C){return{transform:function(Z){if(N)return Z;if(C.has(Z))return C.get(Z);var ce=new OffscreenCanvas(Z.width,Z.height),B=ce.getContext("2d");return B.drawImage(Z,0,0),C.set(Z,ce),ce},clear:function(){C.clear()}}}(o,new Map),p=function(){var N=Math.floor(16.666666666666668),C,Z,ce={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(X){var re=Math.random();return ce[re]=requestAnimationFrame(function Y(ue){B===ue||B+N-1<ue?(B=ue,delete ce[re],X()):ce[re]=requestAnimationFrame(Y)}),re},Z=function(X){ce[X]&&cancelAnimationFrame(ce[X])}):(C=function(X){return setTimeout(X,N)},Z=function(X){return clearTimeout(X)}),{frame:C,cancel:Z}}(),f=function(){var N,C,Z={};function ce(B){function X(re,Y){B.postMessage({options:re||{},callback:Y})}B.init=function(Y){var ue=Y.transferControlToOffscreen();B.postMessage({canvas:ue},[ue])},B.fire=function(Y,ue,ge){if(C)return X(Y,null),C;var be=Math.random().toString(36).slice(2);return C=u(function(De){function Ne(Ve){Ve.data.callback===be&&(delete Z[be],B.removeEventListener("message",Ne),C=null,h.clear(),ge(),De())}B.addEventListener("message",Ne),X(Y,be),Z[be]=Ne.bind(null,{data:{callback:be}})}),C},B.reset=function(){B.postMessage({reset:!0});for(var Y in Z)Z[Y](),delete Z[Y]}}return function(){if(N)return N;if(!i&&s){var B=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([B])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}ce(N)}return N}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(N,C){return C?C(N):N}function S(N){return N!=null}function g(N,C,Z){return _(N&&S(N[C])?N[C]:m[C],Z)}function d(N){return N<0?0:Math.floor(N)}function x(N,C){return Math.floor(Math.random()*(C-N))+N}function v(N){return parseInt(N,16)}function y(N){return N.map(L)}function L(N){var C=String(N).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:v(C.substring(0,2)),g:v(C.substring(2,4)),b:v(C.substring(4,6))}}function T(N){var C=g(N,"origin",Object);return C.x=g(C,"x",Number),C.y=g(C,"y",Number),C}function A(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function P(N){var C=N.getBoundingClientRect();N.width=C.width,N.height=C.height}function E(N){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=N,C}function M(N,C,Z,ce,B,X,re,Y,ue){N.save(),N.translate(C,Z),N.rotate(X),N.scale(ce,B),N.arc(0,0,1,re,Y,ue),N.restore()}function D(N){var C=N.angle*(Math.PI/180),Z=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-C+(.5*Z-Math.random()*Z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function W(N,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var Z=C.tick++/C.totalTicks,ce=C.x+C.random*C.tiltCos,B=C.y+C.random*C.tiltSin,X=C.wobbleX+C.random*C.tiltCos,re=C.wobbleY+C.random*C.tiltSin;if(N.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-Z)+")",N.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))N.fill(ie(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(X-ce)*.1,Math.abs(re-B)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var Y=Math.PI/10*C.wobble,ue=Math.abs(X-ce)*.1,ge=Math.abs(re-B)*.1,be=C.shape.bitmap.width*C.scalar,De=C.shape.bitmap.height*C.scalar,Ne=new DOMMatrix([Math.cos(Y)*ue,Math.sin(Y)*ue,-Math.sin(Y)*ge,Math.cos(Y)*ge,C.x,C.y]);Ne.multiplySelf(new DOMMatrix(C.shape.matrix));var Ve=N.createPattern(h.transform(C.shape.bitmap),"no-repeat");Ve.setTransform(Ne),N.globalAlpha=1-Z,N.fillStyle=Ve,N.fillRect(C.x-be/2,C.y-De/2,be,De),N.globalAlpha=1}else if(C.shape==="circle")N.ellipse?N.ellipse(C.x,C.y,Math.abs(X-ce)*C.ovalScalar,Math.abs(re-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):M(N,C.x,C.y,Math.abs(X-ce)*C.ovalScalar,Math.abs(re-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var I=Math.PI/2*3,st=4*C.scalar,Ie=8*C.scalar,Ue=C.x,Ee=C.y,Ye=5,we=Math.PI/Ye;Ye--;)Ue=C.x+Math.cos(I)*Ie,Ee=C.y+Math.sin(I)*Ie,N.lineTo(Ue,Ee),I+=we,Ue=C.x+Math.cos(I)*st,Ee=C.y+Math.sin(I)*st,N.lineTo(Ue,Ee),I+=we;else N.moveTo(Math.floor(C.x),Math.floor(C.y)),N.lineTo(Math.floor(C.wobbleX),Math.floor(B)),N.lineTo(Math.floor(X),Math.floor(re)),N.lineTo(Math.floor(ce),Math.floor(C.wobbleY));return N.closePath(),N.fill(),C.tick<C.totalTicks}function G(N,C,Z,ce,B){var X=C.slice(),re=N.getContext("2d"),Y,ue,ge=u(function(be){function De(){Y=ue=null,re.clearRect(0,0,ce.width,ce.height),h.clear(),B(),be()}function Ne(){i&&!(ce.width===r.width&&ce.height===r.height)&&(ce.width=N.width=r.width,ce.height=N.height=r.height),!ce.width&&!ce.height&&(Z(N),ce.width=N.width,ce.height=N.height),re.clearRect(0,0,ce.width,ce.height),X=X.filter(function(Ve){return W(re,Ve)}),X.length?Y=p.frame(Ne):De()}Y=p.frame(Ne),ue=De});return{addFettis:function(be){return X=X.concat(be),ge},canvas:N,promise:ge,reset:function(){Y&&p.cancel(Y),ue&&ue()}}}function J(N,C){var Z=!N,ce=!!g(C||{},"resize"),B=!1,X=g(C,"disableForReducedMotion",Boolean),re=s&&!!g(C||{},"useWorker"),Y=re?f():null,ue=Z?A:P,ge=N&&Y?!!N.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function Ne(I,st,Ie){for(var Ue=g(I,"particleCount",d),Ee=g(I,"angle",Number),Ye=g(I,"spread",Number),we=g(I,"startVelocity",Number),R=g(I,"decay",Number),w=g(I,"gravity",Number),z=g(I,"drift",Number),ee=g(I,"colors",y),se=g(I,"ticks",Number),Q=g(I,"shapes"),Te=g(I,"scalar"),fe=!!g(I,"flat"),_e=T(I),We=Ue,oe=[],Se=N.width*_e.x,Le=N.height*_e.y;We--;)oe.push(D({x:Se,y:Le,angle:Ee,spread:Ye,startVelocity:we,color:ee[We%ee.length],shape:Q[x(0,Q.length)],ticks:se,decay:R,gravity:w,drift:z,scalar:Te,flat:fe}));return De?De.addFettis(oe):(De=G(N,oe,ue,st,Ie),De.promise)}function Ve(I){var st=X||g(I,"disableForReducedMotion",Boolean),Ie=g(I,"zIndex",Number);if(st&&be)return u(function(we){we()});Z&&De?N=De.canvas:Z&&!N&&(N=E(Ie),document.body.appendChild(N)),ce&&!ge&&ue(N);var Ue={width:N.width,height:N.height};Y&&!ge&&Y.init(N),ge=!0,Y&&(N.__confetti_initialized=!0);function Ee(){if(Y){var we={getBoundingClientRect:function(){if(!Z)return N.getBoundingClientRect()}};ue(we),Y.postMessage({resize:{width:we.width,height:we.height}});return}Ue.width=Ue.height=null}function Ye(){De=null,ce&&(B=!1,e.removeEventListener("resize",Ee)),Z&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,ge=!1)}return ce&&!B&&(B=!0,e.addEventListener("resize",Ee,!1)),Y?Y.fire(I,Ue,Ye):Ne(I,Ue,Ye)}return Ve.reset=function(){Y&&Y.reset(),De&&De.reset()},Ve}var te;function K(){return te||(te=J(null,{useWorker:!0,resize:!0})),te}function ie(N,C,Z,ce,B,X,re){var Y=new Path2D(N),ue=new Path2D;ue.addPath(Y,new DOMMatrix(C));var ge=new Path2D;return ge.addPath(ue,new DOMMatrix([Math.cos(re)*B,Math.sin(re)*B,-Math.sin(re)*X,Math.cos(re)*X,Z,ce])),ge}function U(N){if(!a)throw new Error("path confetti are not supported in this browser");var C,Z;typeof N=="string"?C=N:(C=N.path,Z=N.matrix);var ce=new Path2D(C),B=document.createElement("canvas"),X=B.getContext("2d");if(!Z){for(var re=1e3,Y=re,ue=re,ge=0,be=0,De,Ne,Ve=0;Ve<re;Ve+=2)for(var I=0;I<re;I+=2)X.isPointInPath(ce,Ve,I,"nonzero")&&(Y=Math.min(Y,Ve),ue=Math.min(ue,I),ge=Math.max(ge,Ve),be=Math.max(be,I));De=ge-Y,Ne=be-ue;var st=10,Ie=Math.min(st/De,st/Ne);Z=[Ie,0,0,Ie,-Math.round(De/2+Y)*Ie,-Math.round(Ne/2+ue)*Ie]}return{type:"path",path:C,matrix:Z}}function $(N){var C,Z=1,ce="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?C=N:(C=N.text,Z="scalar"in N?N.scalar:Z,B="fontFamily"in N?N.fontFamily:B,ce="color"in N?N.color:ce);var X=10*Z,re=""+X+"px "+B,Y=new OffscreenCanvas(X,X),ue=Y.getContext("2d");ue.font=re;var ge=ue.measureText(C),be=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),De=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),Ne=2,Ve=ge.actualBoundingBoxLeft+Ne,I=ge.actualBoundingBoxAscent+Ne;be+=Ne+Ne,De+=Ne+Ne,Y=new OffscreenCanvas(be,De),ue=Y.getContext("2d"),ue.font=re,ue.fillStyle=ce,ue.fillText(C,Ve,I);var st=1/Z;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[st,0,0,st,-be*st/2,-De*st/2]}}n.exports=function(){return K().apply(this,arguments)},n.exports.reset=function(){K().reset()},n.exports.create=J,n.exports.shapeFromPath=U,n.exports.shapeFromText=$})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),kf,!1);const Ku=kf.exports;kf.exports.create;function dy({isOpen:t,onClose:e}){if(!t)return null;const[n,i]=ve.useState({name:"",phone:"",email:"",organization:"",serviceType:"Water Treatment Plant (WTP / STP)",message:""}),[r,s]=ve.useState(!1),a=c=>{c.preventDefault(),s(!0);try{Ku({particleCount:80,spread:60,origin:{y:.6}})}catch{}},o=()=>{const c=`Hello Orbit Engineering Solutions,%0A%0AMy Name: ${n.name||"Client"}%0AOrganization: ${n.organization||"N/A"}%0APhone: ${n.phone||"N/A"}%0AInterested In: ${n.serviceType}%0A%0AMessage: ${n.message||"I would like a quote and technical consultation."}`;window.open(`https://wa.me/919039075048?text=${c}`,"_blank")};return l.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200",children:[l.jsx("div",{onClick:e,className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"}),l.jsxs("div",{className:"relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8",children:[l.jsxs("div",{className:"relative bg-gradient-to-r from-orbit-700 via-orbit-600 to-sky-600 p-6 text-white",children:[l.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors","aria-label":"Close modal",children:l.jsx(Lg,{className:"w-5 h-5"})}),l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold mb-2",children:[l.jsx(ql,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"24-Hour Response Guarantee"})]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold font-display",children:"Request Technical Quote & Consultation"}),l.jsx("p",{className:"text-xs text-sky-100 mt-1",children:"Connect directly with Orbit Engineering Bhopal engineering experts for WTP, STP, SCADA or government tender BOQs."})]}),l.jsx("div",{className:"p-6 sm:p-8 max-h-[70vh] overflow-y-auto",children:r?l.jsxs("div",{className:"text-center py-8 space-y-4",children:[l.jsx("div",{className:"w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner",children:l.jsx(Jn,{className:"w-10 h-10"})}),l.jsx("h4",{className:"text-xl font-bold text-slate-900",children:"Inquiry Received Successfully!"}),l.jsxs("p",{className:"text-xs text-slate-600 max-w-sm mx-auto leading-relaxed",children:["Thank you, ",l.jsx("strong",{children:n.name}),". Our senior engineering team in Bhopal will review your requirements and reach out within 24 hours."]}),l.jsxs("div",{className:"pt-4 flex flex-col sm:flex-row items-center justify-center gap-3",children:[l.jsxs("button",{onClick:o,className:"w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[l.jsx(Zn,{className:"w-4 h-4"}),l.jsx("span",{children:"Send via WhatsApp Now"})]}),l.jsx("button",{onClick:e,className:"w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl",children:"Close Window"})]})]}):l.jsxs("form",{onSubmit:a,className:"space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Your Name *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Er. Rajesh Verma",value:n.name,onChange:c=>i({...n,name:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Phone / WhatsApp *"}),l.jsx("input",{type:"tel",required:!0,placeholder:"+91 98765 43210",value:n.phone,onChange:c=>i({...n,phone:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Organization / Department"}),l.jsx("input",{type:"text",placeholder:"e.g. Nagar Parishad / Industry",value:n.organization,onChange:c=>i({...n,organization:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Email Address"}),l.jsx("input",{type:"email",placeholder:"name@company.com",value:n.email,onChange:c=>i({...n,email:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Service / Requirement Category"}),l.jsxs("select",{value:n.serviceType,onChange:c=>i({...n,serviceType:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none bg-white",children:[l.jsx("option",{children:"Water Treatment Plant (WTP / STP / RO / ETP)"}),l.jsx("option",{children:"SCADA & PLC Automation Panels"}),l.jsx("option",{children:"Jal Jeevan Mission (JJM) / AMRUT Instrumentation"}),l.jsx("option",{children:"Flow Meters & Water Quality Analyzers"}),l.jsx("option",{children:"Annual Maintenance Contract (AMC / O&M)"}),l.jsx("option",{children:"Solar Water Pump / PM KUSUM Project"}),l.jsx("option",{children:"Other Engineering Consultation"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"Project Details / Message"}),l.jsx("textarea",{rows:3,placeholder:"Share details like MLD capacity, site location, timeline or equipment needed...",value:n.message,onChange:c=>i({...n,message:c.target.value}),className:"w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-orbit-500 focus:outline-none"})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center gap-3",children:[l.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 text-xs font-bold text-white bg-gradient-to-r from-orbit-600 to-sky-500 hover:from-orbit-700 hover:to-sky-600 rounded-xl shadow-md transition-all hover:scale-[1.02]",children:"Submit Quote Request"}),l.jsxs("button",{type:"button",onClick:o,className:"w-full sm:w-auto px-4 py-3 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center gap-1.5 transition-all",children:[l.jsx(Zn,{className:"w-4 h-4 text-emerald-600"}),l.jsx("span",{children:"Send on WhatsApp"})]})]}),l.jsx("div",{className:"text-[11px] text-slate-500 text-center pt-2",children:"🔒 Your contact info is strictly confidential and used solely for your project consultation."})]})})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="170",fy=0,fp=1,hy=2,Dg=1,py=2,li=3,Ji=0,rn=1,di=2,$i=0,br=1,hp=2,pp=3,mp=4,my=5,mr=100,gy=101,xy=102,vy=103,_y=104,yy=200,Sy=201,My=202,wy=203,Zu=204,Qu=205,by=206,Ey=207,Ty=208,Ay=209,Cy=210,Ry=211,Ny=212,Py=213,Ly=214,Ju=0,ed=1,td=2,Es=3,nd=4,id=5,rd=6,sd=7,Ig=0,Dy=1,Iy=2,Ki=0,Uy=1,ky=2,Fy=3,Oy=4,By=5,zy=6,jy=7,Ug=300,Ts=301,As=302,ad=303,od=304,Yl=306,ld=1e3,yr=1001,cd=1002,zn=1003,Hy=1004,uo=1005,qn=1006,Tc=1007,Sr=1008,Mi=1009,kg=1010,Fg=1011,Da=1012,Of=1013,Pr=1014,pi=1015,Ba=1016,Bf=1017,zf=1018,Cs=1020,Og=35902,Bg=1021,zg=1022,kn=1023,jg=1024,Hg=1025,gs=1026,Rs=1027,Vg=1028,jf=1029,Gg=1030,Hf=1031,Vf=1033,$o=33776,Ko=33777,Zo=33778,Qo=33779,ud=35840,dd=35841,fd=35842,hd=35843,pd=36196,md=37492,gd=37496,xd=37808,vd=37809,_d=37810,yd=37811,Sd=37812,Md=37813,wd=37814,bd=37815,Ed=37816,Td=37817,Ad=37818,Cd=37819,Rd=37820,Nd=37821,Jo=36492,Pd=36494,Ld=36495,Wg=36283,Dd=36284,Id=36285,Ud=36286,Vy=3200,Gy=3201,Wy=0,Xy=1,Oi="",xn="srgb",Is="srgb-linear",$l="linear",rt="srgb",Fr=7680,gp=519,qy=512,Yy=513,$y=514,Xg=515,Ky=516,Zy=517,Qy=518,Jy=519,xp=35044,vp="300 es",mi=2e3,Tl=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,kd=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function e1(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,c,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],S=r[0],g=r[3],d=r[6],x=r[1],v=r[4],y=r[7],L=r[2],T=r[5],A=r[8];return s[0]=a*S+o*x+c*L,s[3]=a*g+o*v+c*T,s[6]=a*d+o*y+c*A,s[1]=u*S+h*x+p*L,s[4]=u*g+h*v+p*T,s[7]=u*d+h*y+p*A,s[2]=f*S+m*x+_*L,s[5]=f*g+m*v+_*T,s[8]=f*d+m*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*u-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*n-r*c)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*c-u*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new ze;function qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function t1(){const t=Al("canvas");return t.style.display="block",t}const _p={};function ia(t){t in _p||(_p[t]=!0,console.warn(t))}function n1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function i1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===rt&&(t.r=xi(t.r),t.g=xi(t.g),t.b=xi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===rt&&(t.r=xs(t.r),t.g=xs(t.g),t.b=xs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Oi?$l:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const yp=[.64,.33,.3,.6,.15,.06],Sp=[.2126,.7152,.0722],Mp=[.3127,.329],wp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Is]:{primaries:yp,whitePoint:Mp,transfer:$l,toXYZ:wp,fromXYZ:bp,luminanceCoefficients:Sp,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:yp,whitePoint:Mp,transfer:rt,toXYZ:wp,fromXYZ:bp,luminanceCoefficients:Sp,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let Or;class s1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Al("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a1=0;class Yg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?s1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o1=0;class Wt extends Us{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=yr,r=yr,s=qn,a=Sr,o=kn,c=Mi,u=Wt.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=za(),this.name="",this.source=new Yg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ug;Wt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],_=c[9],S=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(m+1)/2,L=(d+1)/2,T=(h+f)/4,A=(p+S)/4,P=(_+g)/4;return v>y&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(p-S)/x,this.z=(f-h)/x,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l1 extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Yg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends l1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $g extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(p!==S||c!==f||u!==m||h!==_){let g=1-o;const d=c*f+u*m+h*_+p*S,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const L=Math.sqrt(v),T=Math.atan2(L,d*x);g=Math.sin(g*T)/L,o=Math.sin(o*T)/L}const y=o*x;if(c=c*g+f*y,u=u*g+m*y,h=h*g+_*y,p=p*g+S*y,g===1-o){const L=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=L,u*=L,h*=L,p*=L}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*p+c*m-u*f,e[n+1]=c*_+h*f+u*p-o*m,e[n+2]=u*_+h*m+o*f-c*p,e[n+3]=h*_-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"YZX":this._x=f*h*p+u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p-f*m*_;break;case"XZY":this._x=f*h*p-u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),p=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new j,Ep=new ja;class Ha{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),ho.subVectors(this.max,Ys),Br.subVectors(e.a,Ys),zr.subVectors(e.b,Ys),jr.subVectors(e.c,Ys),Ci.subVectors(zr,Br),Ri.subVectors(jr,zr),sr.subVectors(Br,jr);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-sr.z,sr.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,sr.z,0,-sr.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-sr.y,sr.x,0];return!Lc(n,Br,zr,jr,ho)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Br,zr,jr,ho))?!1:(po.crossVectors(Ci,Ri),n=[po.x,po.y,po.z],Lc(n,Br,zr,jr,ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new j,new j,new j,new j,new j,new j,new j,new j],Rn=new j,fo=new Ha,Br=new j,zr=new j,jr=new j,Ci=new j,Ri=new j,sr=new j,Ys=new j,ho=new j,po=new j,ar=new j;function Lc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=e.dot(ar),u=n.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const u1=new Ha,$s=new j,Dc=new j;class Kl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):u1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Dc)),this.expandByPoint($s.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new j,Ic=new j,mo=new j,Ni=new j,Uc=new j,go=new j,kc=new j;class Kg{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ic.copy(e).add(n).multiplyScalar(.5),mo.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Ic);const s=e.distanceTo(n)*.5,a=-this.direction.dot(mo),o=Ni.dot(this.direction),c=-Ni.dot(mo),u=Ni.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*c-o,f=a*o-c,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ic).addScaledVector(mo,f),m}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Uc.subVectors(n,e),go.subVectors(i,e),kc.crossVectors(Uc,go);let a=this.direction.dot(kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const c=o*this.direction.dot(go.crossVectors(Ni,go));if(c<0)return null;const u=o*this.direction.dot(Uc.cross(Ni));if(u<0||c+u>a)return null;const h=-o*Ni.dot(kc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,a,o,c,u,h,p,f,m,_,S,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,f,m,_,S,g)}set(e,n,i,r,s,a,o,c,u,h,p,f,m,_,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+_*u,n[5]=f-S*u,n[9]=-o*c,n[2]=S-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,_=u*h,S=u*p;n[0]=f+S*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=S+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,_=u*h,S=u*p;n[0]=f-S*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=S-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=o*h,S=o*p;n[0]=c*h,n[4]=_*u-m,n[8]=f*u+S,n[1]=c*p,n[5]=S*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=o*c,S=o*u;n[0]=c*h,n[4]=S-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+_,n[10]=f-S*p}else if(e.order==="XZY"){const f=a*c,m=a*u,_=o*c,S=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+S,n[5]=a*h,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*h,n[10]=S*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,f1)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Pi.crossVectors(i,on),Pi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Pi.crossVectors(i,on)),Pi.normalize(),xo.crossVectors(on,Pi),r[0]=Pi.x,r[4]=xo.x,r[8]=on.x,r[1]=Pi.y,r[5]=xo.y,r[9]=on.y,r[2]=Pi.z,r[6]=xo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],S=i[6],g=i[10],d=i[14],x=i[3],v=i[7],y=i[11],L=i[15],T=r[0],A=r[4],P=r[8],E=r[12],M=r[1],D=r[5],W=r[9],G=r[13],J=r[2],te=r[6],K=r[10],ie=r[14],U=r[3],$=r[7],N=r[11],C=r[15];return s[0]=a*T+o*M+c*J+u*U,s[4]=a*A+o*D+c*te+u*$,s[8]=a*P+o*W+c*K+u*N,s[12]=a*E+o*G+c*ie+u*C,s[1]=h*T+p*M+f*J+m*U,s[5]=h*A+p*D+f*te+m*$,s[9]=h*P+p*W+f*K+m*N,s[13]=h*E+p*G+f*ie+m*C,s[2]=_*T+S*M+g*J+d*U,s[6]=_*A+S*D+g*te+d*$,s[10]=_*P+S*W+g*K+d*N,s[14]=_*E+S*G+g*ie+d*C,s[3]=x*T+v*M+y*J+L*U,s[7]=x*A+v*D+y*te+L*$,s[11]=x*P+v*W+y*K+L*N,s[15]=x*E+v*G+y*ie+L*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],S=e[7],g=e[11],d=e[15];return _*(+s*c*p-r*u*p-s*o*f+i*u*f+r*o*m-i*c*m)+S*(+n*c*m-n*u*f+s*a*f-r*a*m+r*u*h-s*c*h)+g*(+n*u*p-n*o*m-s*a*p+i*a*m+s*o*h-i*u*h)+d*(-r*o*h-n*c*p+n*o*f+r*a*p-i*a*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],S=e[13],g=e[14],d=e[15],x=p*g*u-S*f*u+S*c*m-o*g*m-p*c*d+o*f*d,v=_*f*u-h*g*u-_*c*m+a*g*m+h*c*d-a*f*d,y=h*S*u-_*p*u+_*o*m-a*S*m-h*o*d+a*p*d,L=_*p*c-h*S*c-_*o*f+a*S*f+h*o*g-a*p*g,T=n*x+i*v+r*y+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(S*f*s-p*g*s-S*r*m+i*g*m+p*r*d-i*f*d)*A,e[2]=(o*g*s-S*c*s+S*r*u-i*g*u-o*r*d+i*c*d)*A,e[3]=(p*c*s-o*f*s-p*r*u+i*f*u+o*r*m-i*c*m)*A,e[4]=v*A,e[5]=(h*g*s-_*f*s+_*r*m-n*g*m-h*r*d+n*f*d)*A,e[6]=(_*c*s-a*g*s-_*r*u+n*g*u+a*r*d-n*c*d)*A,e[7]=(a*f*s-h*c*s+h*r*u-n*f*u-a*r*m+n*c*m)*A,e[8]=y*A,e[9]=(_*p*s-h*S*s-_*i*m+n*S*m+h*i*d-n*p*d)*A,e[10]=(a*S*s-_*o*s+_*i*u-n*S*u-a*i*d+n*o*d)*A,e[11]=(h*o*s-a*p*s-h*i*u+n*p*u+a*i*m-n*o*m)*A,e[12]=L*A,e[13]=(h*S*r-_*p*r+_*i*f-n*S*f-h*i*g+n*p*g)*A,e[14]=(_*o*r-a*S*r-_*i*c+n*S*c+a*i*g-n*o*g)*A,e[15]=(a*p*r-h*o*r+h*i*c-n*p*c-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,_=s*p,S=a*h,g=a*p,d=o*p,x=c*u,v=c*h,y=c*p,L=i.x,T=i.y,A=i.z;return r[0]=(1-(S+d))*L,r[1]=(m+y)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+d))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(g-x)*A,r[10]=(1-(f+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,h=1/a,p=1/o;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=mi){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===mi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Tl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=mi){const c=this.elements,u=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*u,m=(i+r)*h;let _,S;if(o===mi)_=(a+s)*p,S=-2*p;else if(o===Tl)_=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=S,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new j,Nn=new Mt,d1=new j(0,0,0),f1=new j(1,1,1),Pi=new j,xo=new j,on=new j,Tp=new Mt,Ap=new ja;class wi{constructor(e=0,n=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const Cp=new j,Vr=new ja,si=new Mt,vo=new j,Ks=new j,p1=new j,m1=new ja,Rp=new j(1,0,0),Np=new j(0,1,0),Pp=new j(0,0,1),Lp={type:"added"},g1={type:"removed"},Gr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class sn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new j,n=new wi,i=new ja,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ks,vo,this.up):si.lookAt(vo,Ks,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(si),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g1),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new j(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new j,ai=new j,Oc=new j,oi=new j,Wr=new j,Xr=new j,Dp=new j,Bc=new j,zc=new j,jc=new j,Hc=new St,Vc=new St,Gc=new St;class Un{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ai.subVectors(i,n),Oc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ai),c=Pn.dot(Oc),u=ai.dot(ai),h=ai.dot(Oc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hc,s.x),a.addScaledVector(Vc,s.y),a.addScaledVector(Gc,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ai.subVectors(e,n),Pn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Pn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Bc.subVectors(e,i);const c=Wr.dot(Bc),u=Xr.dot(Bc);if(c<=0&&u<=0)return n.copy(i);zc.subVectors(e,r);const h=Wr.dot(zc),p=Xr.dot(zc);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Wr,a);jc.subVectors(e,s);const m=Wr.dot(jc),_=Xr.dot(jc);if(_>=0&&m<=_)return n.copy(s);const S=m*u-c*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Xr,o);const g=h*_-m*p;if(g<=0&&p-h>=0&&m-_>=0)return Dp.subVectors(s,r),o=(p-h)/(p-h+(m-_)),n.copy(r).addScaledVector(Dp,o);const d=1/(g+S+f);return a=S*d,o=f*d,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=e1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wc(a,s,e+1/3),this.g=Wc(a,s,e),this.b=Wc(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=Qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return $e.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Zt(Bt.r*255,0,255))*65536+Math.round(Zt(Bt.g*255,0,255))*256+Math.round(Zt(Bt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=xn){$e.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(_o);const i=Cc(Li.h,_o.h,n),r=Cc(Li.s,_o.s,n),s=Cc(Li.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Qe;Qe.NAMES=Qg;let x1=0;class Va extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=za(),this.name="",this.blending=br,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Qu,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cl extends Va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,yo=new tt;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class Jg extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ex extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let v1=0;const gn=new Mt,Xc=new sn,qr=new j,ln=new Ha,Zs=new Ha,Rt=new j;class ei extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?ex:Jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(ln.min,Zs.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,Zs.max),ln.expandByPoint(Rt)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Rt.fromBufferAttribute(o,u),c&&(qr.fromBufferAttribute(e,u),Rt.add(qr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new j,c[P]=new j;const u=new j,h=new j,p=new j,f=new tt,m=new tt,_=new tt,S=new j,g=new j;function d(P,E,M){u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),h.sub(u),p.sub(u),m.sub(f),_.sub(f);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(D),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(D),o[P].add(S),o[E].add(S),o[M].add(S),c[P].add(g),c[E].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,E=x.length;P<E;++P){const M=x[P],D=M.start,W=M.count;for(let G=D,J=D+W;G<J;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new j,y=new j,L=new j,T=new j;function A(P){L.fromBufferAttribute(r,P),T.copy(L);const E=o[P];v.copy(E),v.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(T,E);const D=y.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,E=x.length;P<E;++P){const M=x[P],D=M.start,W=M.count;for(let G=D,J=D+W;G<J;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,h=new j,p=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),o.add(h),c.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h);let m=0,_=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let d=0;d<h;d++)f[_++]=u[m++]}return new wn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new Mt,or=new Kg,So=new Kl,Up=new j,Mo=new j,wo=new j,bo=new j,qc=new j,Eo=new j,kp=new j,To=new j;class Fn extends sn{constructor(e=new ei,n=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(qc.fromBufferAttribute(p,e),a?Eo.addScaledVector(qc,h):Eo.addScaledVector(qc.sub(n),h))}n.add(Eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(So.containsPoint(or.origin)===!1&&(or.intersectSphere(So,Up)===null||or.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),or.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,L=v;y<L;y+=3){const T=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);r=Ao(this,d,e,i,u,h,p,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);r=Ao(this,a,e,i,u,h,p,x,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const g=f[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,L=v;y<L;y+=3){const T=y,A=y+1,P=y+2;r=Ao(this,d,e,i,u,h,p,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const x=g,v=g+1,y=g+2;r=Ao(this,a,e,i,u,h,p,x,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function _1(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ji,o),c===null)return null;To.copy(o),To.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(To);return u<n.near||u>n.far?null:{distance:u,point:To.clone(),object:t}}function Ao(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Mo),t.getVertexPosition(c,wo),t.getVertexPosition(u,bo);const h=_1(t,e,n,i,Mo,wo,bo,kp);if(h){const p=new j;Un.getBarycoord(kp,Mo,wo,bo,p),r&&(h.uv=Un.getInterpolatedAttribute(r,o,c,u,p,new tt)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,c,u,p,new tt)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,c,u,p,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new j,materialIndex:0};Un.getNormal(Mo,wo,bo,f.normal),h.face=f,h.barycoord=p}return h}class Ga extends ei{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(h,3)),this.setAttribute("uv",new Qn(p,2));function _(S,g,d,x,v,y,L,T,A,P,E){const M=y/A,D=L/P,W=y/2,G=L/2,J=T/2,te=A+1,K=P+1;let ie=0,U=0;const $=new j;for(let N=0;N<K;N++){const C=N*D-G;for(let Z=0;Z<te;Z++){const ce=Z*M-W;$[S]=ce*x,$[g]=C*v,$[d]=J,u.push($.x,$.y,$.z),$[S]=0,$[g]=0,$[d]=T>0?1:-1,h.push($.x,$.y,$.z),p.push(Z/A),p.push(1-N/P),ie+=1}}for(let N=0;N<P;N++)for(let C=0;C<A;C++){const Z=f+C+te*N,ce=f+C+te*(N+1),B=f+(C+1)+te*(N+1),X=f+(C+1)+te*N;c.push(Z,ce,X),c.push(ce,B,X),U+=6}o.addGroup(m,U,E),m+=U,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const S1={clone:Ns,merge:Ht};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nx extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new j,Fp=new tt,Op=new tt;class yn extends nx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,Fp,Op),n.subVectors(Op,Fp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class b1 extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new yn(Yr,$r,e,n);s.layers=this.layers,this.add(s);const a=new yn(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new yn(Yr,$r,e,n);o.layers=this.layers,this.add(o);const c=new yn(Yr,$r,e,n);c.layers=this.layers,this.add(c);const u=new yn(Yr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ix extends Wt{constructor(e,n,i,r,s,a,o,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E1 extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ix(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:$i});s.uniforms.tEquirect.value=n;const a=new Fn(r,s),o=n.minFilter;return n.minFilter===Sr&&(n.minFilter=qn),new b1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Yc=new j,T1=new j,A1=new ze;class hr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yc.subVectors(i,n).cross(T1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||A1.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Kl,Co=new j;class rx{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],p=r[6],f=r[7],m=r[8],_=r[9],S=r[10],g=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-s,f-u,g-m,y-d).normalize(),i[1].setComponents(c+s,f+u,g+m,y+d).normalize(),i[2].setComponents(c+a,f+h,g+_,y+x).normalize(),i[3].setComponents(c-a,f-h,g-_,y-x).normalize(),i[4].setComponents(c-o,f-p,g-S,y-v).normalize(),n===mi)i[5].setComponents(c+o,f+p,g+S,y+v).normalize();else if(n===Tl)i[5].setComponents(o,p,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function C1(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];t.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class Zl extends ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=n/c,m=[],_=[],S=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let v=0;v<u;v++){const y=v*p-s;_.push(y,-x,0),S.push(0,0,1),g.push(v/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const v=x+u*d,y=x+u*(d+1),L=x+1+u*(d+1),T=x+1+u*d;m.push(v,y,T),m.push(y,L,T)}this.setIndex(m),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(S,3)),this.setAttribute("uv",new Qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H1=`#ifdef USE_IRIDESCENCE
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
#endif`,V1=`#ifdef USE_BUMPMAP
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,MS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OS=`#if defined( USE_POINTS_UV )
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
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
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
#endif`,WS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
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
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hM=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,vM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
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
}`,UM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kM=`#define DISTANCE
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
}`,FM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
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
}`,jM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,VM=`uniform vec3 diffuse;
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
}`,GM=`#define LAMBERT
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
}`,WM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,XM=`#define MATCAP
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
}`,qM=`#define MATCAP
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
}`,YM=`#define NORMAL
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
}`,$M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
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
}`,ZM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QM=`#define STANDARD
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
}`,JM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ew=`#define TOON
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
}`,tw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nw=`uniform float size;
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,aw=`uniform float rotation;
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
}`,ow=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:R1,alphahash_pars_fragment:N1,alphamap_fragment:P1,alphamap_pars_fragment:L1,alphatest_fragment:D1,alphatest_pars_fragment:I1,aomap_fragment:U1,aomap_pars_fragment:k1,batching_pars_vertex:F1,batching_vertex:O1,begin_vertex:B1,beginnormal_vertex:z1,bsdfs:j1,iridescence_fragment:H1,bumpmap_pars_fragment:V1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:q1,color_fragment:Y1,color_pars_fragment:$1,color_pars_vertex:K1,color_vertex:Z1,common:Q1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:eS,displacementmap_pars_vertex:tS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:rS,colorspace_fragment:sS,colorspace_pars_fragment:aS,envmap_fragment:oS,envmap_common_pars_fragment:lS,envmap_pars_fragment:cS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:SS,envmap_vertex:dS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_pars_fragment:xS,lights_lambert_fragment:vS,lights_lambert_pars_fragment:_S,lights_pars_begin:yS,lights_toon_fragment:MS,lights_toon_pars_fragment:wS,lights_phong_fragment:bS,lights_phong_pars_fragment:ES,lights_physical_fragment:TS,lights_physical_pars_fragment:AS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:NS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:IS,map_fragment:US,map_pars_fragment:kS,map_particle_fragment:FS,map_particle_pars_fragment:OS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:zS,morphinstance_vertex:jS,morphcolor_vertex:HS,morphnormal_vertex:VS,morphtarget_pars_vertex:GS,morphtarget_vertex:WS,normal_fragment_begin:XS,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:$S,normal_vertex:KS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:rM,project_vertex:sM,dithering_fragment:aM,dithering_pars_fragment:oM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:dM,shadowmap_vertex:fM,shadowmask_pars_fragment:hM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:gM,skinnormal_vertex:xM,specularmap_fragment:vM,specularmap_pars_fragment:_M,tonemapping_fragment:yM,tonemapping_pars_fragment:SM,transmission_fragment:MM,transmission_pars_fragment:wM,uv_pars_fragment:bM,uv_pars_vertex:EM,uv_vertex:TM,worldpos_vertex:AM,background_vert:CM,background_frag:RM,backgroundCube_vert:NM,backgroundCube_frag:PM,cube_vert:LM,cube_frag:DM,depth_vert:IM,depth_frag:UM,distanceRGBA_vert:kM,distanceRGBA_frag:FM,equirect_vert:OM,equirect_frag:BM,linedashed_vert:zM,linedashed_frag:jM,meshbasic_vert:HM,meshbasic_frag:VM,meshlambert_vert:GM,meshlambert_frag:WM,meshmatcap_vert:XM,meshmatcap_frag:qM,meshnormal_vert:YM,meshnormal_frag:$M,meshphong_vert:KM,meshphong_frag:ZM,meshphysical_vert:QM,meshphysical_frag:JM,meshtoon_vert:ew,meshtoon_frag:tw,points_vert:nw,points_frag:iw,shadow_vert:rw,shadow_frag:sw,sprite_vert:aw,sprite_frag:ow},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Wn={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Ht([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ro={r:0,b:0,g:0},cr=new wi,lw=new Mt;function cw(t,e,n,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,u,h,p=null,f=0,m=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function S(x){let v=!1;const y=_(x);y===null?d(o,c):y&&y.isColor&&(d(y,1),v=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===Yl)?(h===void 0&&(h=new Fn(new Ga(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Ns(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lw.makeRotationFromEuler(cr)),h.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,(p!==y||f!==y.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Fn(new Zl(2,2),new er({name:"BackgroundMaterial",uniforms:Ns(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||f!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=y,f=y.version,m=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(Ro,tx(t)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:S,addToRenderList:g}}function uw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,D,W,G,J){let te=!1;const K=p(G,W,D);s!==K&&(s=K,u(s.object)),te=m(M,G,W,J),te&&_(M,G,W,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(M,D,W,G),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function p(M,D,W){const G=W.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let te=J[D.id];te===void 0&&(te={},J[D.id]=te);let K=te[G];return K===void 0&&(K=f(c()),te[G]=K),K}function f(M){const D=[],W=[],G=[];for(let J=0;J<n;J++)D[J]=0,W[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,D,W,G){const J=s.attributes,te=D.attributes;let K=0;const ie=W.getAttributes();for(const U in ie)if(ie[U].location>=0){const N=J[U];let C=te[U];if(C===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(C=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(C=M.instanceColor)),N===void 0||N.attribute!==C||C&&N.data!==C.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function _(M,D,W,G){const J={},te=D.attributes;let K=0;const ie=W.getAttributes();for(const U in ie)if(ie[U].location>=0){let N=te[U];N===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));const C={};C.attribute=N,N&&N.data&&(C.data=N.data),J[U]=C,K++}s.attributes=J,s.attributesNum=K,s.index=G}function S(){const M=s.newAttributes;for(let D=0,W=M.length;D<W;D++)M[D]=0}function g(M){d(M,0)}function d(M,D){const W=s.newAttributes,G=s.enabledAttributes,J=s.attributeDivisors;W[M]=1,G[M]===0&&(t.enableVertexAttribArray(M),G[M]=1),J[M]!==D&&(t.vertexAttribDivisor(M,D),J[M]=D)}function x(){const M=s.newAttributes,D=s.enabledAttributes;for(let W=0,G=D.length;W<G;W++)D[W]!==M[W]&&(t.disableVertexAttribArray(W),D[W]=0)}function v(M,D,W,G,J,te,K){K===!0?t.vertexAttribIPointer(M,D,W,J,te):t.vertexAttribPointer(M,D,W,G,J,te)}function y(M,D,W,G){S();const J=G.attributes,te=W.getAttributes(),K=D.defaultAttributeValues;for(const ie in te){const U=te[ie];if(U.location>=0){let $=J[ie];if($===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const N=$.normalized,C=$.itemSize,Z=e.get($);if(Z===void 0)continue;const ce=Z.buffer,B=Z.type,X=Z.bytesPerElement,re=B===t.INT||B===t.UNSIGNED_INT||$.gpuType===Of;if($.isInterleavedBufferAttribute){const Y=$.data,ue=Y.stride,ge=$.offset;if(Y.isInstancedInterleavedBuffer){for(let be=0;be<U.locationSize;be++)d(U.location+be,Y.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let be=0;be<U.locationSize;be++)g(U.location+be);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let be=0;be<U.locationSize;be++)v(U.location+be,C/U.locationSize,B,N,ue*X,(ge+C/U.locationSize*be)*X,re)}else{if($.isInstancedBufferAttribute){for(let Y=0;Y<U.locationSize;Y++)d(U.location+Y,$.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Y=0;Y<U.locationSize;Y++)g(U.location+Y);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let Y=0;Y<U.locationSize;Y++)v(U.location+Y,C/U.locationSize,B,N,C*X,C/U.locationSize*Y*X,re)}}else if(K!==void 0){const N=K[ie];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(U.location,N);break;case 3:t.vertexAttrib3fv(U.location,N);break;case 4:t.vertexAttrib4fv(U.location,N);break;default:t.vertexAttrib1fv(U.location,N)}}}}x()}function L(){P();for(const M in i){const D=i[M];for(const W in D){const G=D[W];for(const J in G)h(G[J].object),delete G[J];delete D[W]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const W in D){const G=D[W];for(const J in G)h(G[J].object),delete G[J];delete D[W]}delete i[M.id]}function A(M){for(const D in i){const W=i[D];if(W[M.id]===void 0)continue;const G=W[M.id];for(const J in G)h(G[J].object),delete G[J];delete W[M.id]}}function P(){E(),a=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:g,disableUnusedAttributes:x}}function dw(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,p){p!==0&&(t.drawArraysInstanced(i,u,h,p),n.update(h,i,p))}function o(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];n.update(m,i,1)}function c(u,h,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S]*f[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!P)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:T}}function hw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?h(null):u();else{const x=s?0:i,v=x*4;let y=d.clippingState||null;c.value=y,y=h(_,f,v,m);for(let L=0;L!==v;++L)y[L]=n[L];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=c.value,_!==!0||g===null){const d=m+S*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=m;v!==S;++v,y+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function pw(t){let e=new WeakMap;function n(a,o){return o===ad?a.mapping=Ts:o===od&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ad||o===od)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new E1(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mw extends nx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,Bp=[.125,.215,.35,.446,.526,.582],gr=20,$c=new mw,zp=new Qe;let Kc=null,Zc=0,Qc=0,Jc=!1;const pr=(1+Math.sqrt(5))/2,Kr=1/pr,jp=[new j(-pr,Kr,0),new j(pr,Kr,0),new j(-Kr,0,pr),new j(Kr,0,pr),new j(0,pr,-Kr),new j(0,pr,Kr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ba,format:kn,colorSpace:Is,depthBuffer:!1},r=Vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gw(s)),this._blurMaterial=xw(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(zp),h.toneMapping=Ki,h.autoClear=!1;const m=new Cl({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Fn(new Ga,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(zp),S=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;No(r,x*v,d>2?v:0,v,v),h.setRenderTarget(r),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;No(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,$c)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jp[(r-s-1)%jp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Fn(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),S=s/_,g=isFinite(s)?1+Math.floor(h*S):gr;g>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gr}`);const d=[];let x=0;for(let A=0;A<gr;++A){const P=A/S,E=Math.exp(-P*P/2);d.push(E),A===0?x+=E:A<g&&(x+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],L=3*y*(r>v-cs?r-v+cs:0),T=4*(this._cubeSize-y);No(n,L,T,3*y,2*y),c.setRenderTarget(n),c.render(p,$c)}}function gw(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+Bp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-cs?c=Bp[a-t+cs-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,S=3,g=2,d=1,x=new Float32Array(S*_*m),v=new Float32Array(g*_*m),y=new Float32Array(d*_*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(E,S*_*T),v.set(f,g*_*T);const M=[T,T,T,T,T,T];y.set(M,d*_*T)}const L=new ei;L.setAttribute("position",new wn(x,S)),L.setAttribute("uv",new wn(v,g)),L.setAttribute("faceIndex",new wn(y,d)),e.push(L),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xw(t,e,n){const i=new Float32Array(gr),r=new j(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gp(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Wp(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gf(){return`

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
	`}function vw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===ad||c===od,h=c===Ts||c===As;if(u||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Hp(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Hp(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _w(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ia("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yw(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let g=0,d=S.length;g<d;g++)e.remove(S[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const S=m[_];for(let g=0,d=S.length;g<d;g++)e.update(S[g],t.ARRAY_BUFFER)}}function u(p){const f=[],m=p.index,_=p.attributes.position;let S=0;if(m!==null){const x=m.array;S=m.version;for(let v=0,y=x.length;v<y;v+=3){const L=x[v+0],T=x[v+1],A=x[v+2];f.push(L,T,T,A,A,L)}}else if(_!==void 0){const x=_.array;S=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const L=v+0,T=v+1,A=v+2;f.push(L,T,T,A,A,L)}}else return;const g=new(qg(f)?ex:Jg)(f,1);g.version=S;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Sw(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}function p(f,m,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)u(f[d]/a,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,S,0,_);let d=0;for(let x=0;x<_;x++)d+=m[x]*S[x];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Mw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ww(t,e,n){const i=new WeakMap,r=new St;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let L=o.attributes.position.count*y,T=1;L>e.maxTextureSize&&(T=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*T*4*p),P=new $g(A,L,T,p);P.type=pi,P.needsUpdate=!0;const E=y*4;for(let D=0;D<p;D++){const W=d[D],G=x[D],J=v[D],te=L*T*4*D;for(let K=0;K<W.count;K++){const ie=K*E;_===!0&&(r.fromBufferAttribute(W,K),A[te+ie+0]=r.x,A[te+ie+1]=r.y,A[te+ie+2]=r.z,A[te+ie+3]=0),S===!0&&(r.fromBufferAttribute(G,K),A[te+ie+4]=r.x,A[te+ie+5]=r.y,A[te+ie+6]=r.z,A[te+ie+7]=0),g===!0&&(r.fromBufferAttribute(J,K),A[te+ie+8]=r.x,A[te+ie+9]=r.y,A[te+ie+10]=r.z,A[te+ie+11]=J.itemSize===4?r.w:1)}}f={count:p,texture:P,size:new tt(L,T)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function bw(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class ax extends Wt{constructor(e,n,i,r,s,a,o,c,u,h=gs){if(h!==gs&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gs&&(i=Pr),i===void 0&&h===Rs&&(i=Cs),super(null,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:zn,this.minFilter=c!==void 0?c:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ox=new Wt,Xp=new ax(1,1),lx=new $g,cx=new c1,ux=new ix,qp=[],Yp=[],$p=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=Yp[e];n===void 0&&(n=new Int32Array(e),Yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function Rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),Ct(n,i)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),Ct(n,i)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;$p.set(i),t.uniformMatrix4fv(this.addr,!1,$p),Ct(n,i)}}function Lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xp.compareFunction=Xg,s=Xp):s=ox,n.setTexture2D(e||s,r)}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cx,r)}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ux,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lx,r)}function Gw(t){switch(t){case 5126:return Ew;case 35664:return Tw;case 35665:return Aw;case 35666:return Cw;case 35674:return Rw;case 35675:return Nw;case 35676:return Pw;case 5124:case 35670:return Lw;case 35667:case 35671:return Dw;case 35668:case 35672:return Iw;case 35669:case 35673:return Uw;case 5125:return kw;case 36294:return Fw;case 36295:return Ow;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}function Ww(t,e){t.uniform1fv(this.addr,e)}function Xw(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function qw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Yw(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function $w(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Kw(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zw(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qw(t,e){t.uniform1iv(this.addr,e)}function Jw(t,e){t.uniform2iv(this.addr,e)}function eb(t,e){t.uniform3iv(this.addr,e)}function tb(t,e){t.uniform4iv(this.addr,e)}function nb(t,e){t.uniform1uiv(this.addr,e)}function ib(t,e){t.uniform2uiv(this.addr,e)}function rb(t,e){t.uniform3uiv(this.addr,e)}function sb(t,e){t.uniform4uiv(this.addr,e)}function ab(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||ox,s[a])}function ob(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||cx,s[a])}function lb(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ux,s[a])}function cb(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||lx,s[a])}function ub(t){switch(t){case 5126:return Ww;case 35664:return Xw;case 35665:return qw;case 35666:return Yw;case 35674:return $w;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return Jw;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Gw(n.type)}}class fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ub(n.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function Qp(t,e){t.seq.push(e),t.map[e.id]=e}function pb(t,e,n){const i=t.name,r=i.length;for(eu.lastIndex=0;;){const s=eu.exec(i),a=eu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Qp(n,u===void 0?new db(o,t,e):new fb(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new hb(o),Qp(n,p)),n=p}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);pb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mb=37297;let gb=0;function xb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const em=new ze;function vb(t){$e._getMatrix(em,$e.workingColorSpace,t);const e=`mat3( ${em.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xb(t.getShaderSource(e),a)}else return r}function _b(t,e){const n=vb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yb(t,e){let n;switch(e){case Uy:n="Linear";break;case ky:n="Reinhard";break;case Fy:n="Cineon";break;case Oy:n="ACESFilmic";break;case zy:n="AgX";break;case jy:n="Neutral";break;case By:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Po=new j;function Sb(){$e.getLuminanceCoefficients(Po);const t=Po.x.toFixed(4),e=Po.y.toFixed(4),n=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ra(t){return t!==""}function nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(Eb,Ab)}const Tb=new Map;function Ab(t,e){let n=He[e];if(n===void 0){const i=Tb.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(t){return t.replace(Cb,Rb)}function Rb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Nb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===py?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Db(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ub(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Nb(n),u=Pb(n),h=Lb(n),p=Db(n),f=Ib(n),m=Mb(n),_=wb(s),S=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ra).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ra).join(`
`),d.length>0&&(d+=`
`)):(g=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),d=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?He.tonemapping_pars_fragment:"",n.toneMapping!==Ki?yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,_b("linearToOutputTexel",n.outputColorSpace),Sb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),a=Fd(a),a=nm(a,n),a=im(a,n),o=Fd(o),o=nm(o,n),o=im(o,n),a=rm(a),o=rm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+a,y=x+d+o,L=Jp(r,r.VERTEX_SHADER,v),T=Jp(r,r.FRAGMENT_SHADER,y);r.attachShader(S,L),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(D){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(S).trim(),G=r.getShaderInfoLog(L).trim(),J=r.getShaderInfoLog(T).trim();let te=!0,K=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,L,T);else{const ie=tm(r,L,"vertex"),U=tm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ie+`
`+U)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||J==="")&&(K=!1);K&&(D.diagnostics={runnable:te,programLog:W,vertexShader:{log:G,prefix:g},fragmentShader:{log:J,prefix:d}})}r.deleteShader(L),r.deleteShader(T),P=new el(r,S),E=bb(r,S)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,mb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=T,this}let kb=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ob(e),n.set(e,i)),i}}class Ob{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}}function Bb(t,e,n,i,r,s,a){const o=new Zg,c=new Fb,u=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return u.add(E),E===0?"uv":`uv${E}`}function g(E,M,D,W,G){const J=W.fog,te=G.geometry,K=E.isMeshStandardMaterial?W.environment:null,ie=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),U=ie&&ie.mapping===Yl?ie.image.height:null,$=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,C=N!==void 0?N.length:0;let Z=0;te.morphAttributes.position!==void 0&&(Z=1),te.morphAttributes.normal!==void 0&&(Z=2),te.morphAttributes.color!==void 0&&(Z=3);let ce,B,X,re;if($){const nt=Wn[$];ce=nt.vertexShader,B=nt.fragmentShader}else ce=E.vertexShader,B=E.fragmentShader,c.update(E),X=c.getVertexShaderID(E),re=c.getFragmentShaderID(E);const Y=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),ge=G.isInstancedMesh===!0,be=G.isBatchedMesh===!0,De=!!E.map,Ne=!!E.matcap,Ve=!!ie,I=!!E.aoMap,st=!!E.lightMap,Ie=!!E.bumpMap,Ue=!!E.normalMap,Ee=!!E.displacementMap,Ye=!!E.emissiveMap,we=!!E.metalnessMap,R=!!E.roughnessMap,w=E.anisotropy>0,z=E.clearcoat>0,ee=E.dispersion>0,se=E.iridescence>0,Q=E.sheen>0,Te=E.transmission>0,fe=w&&!!E.anisotropyMap,_e=z&&!!E.clearcoatMap,We=z&&!!E.clearcoatNormalMap,oe=z&&!!E.clearcoatRoughnessMap,Se=se&&!!E.iridescenceMap,Le=se&&!!E.iridescenceThicknessMap,ke=Q&&!!E.sheenColorMap,Me=Q&&!!E.sheenRoughnessMap,qe=!!E.specularMap,je=!!E.specularColorMap,at=!!E.specularIntensityMap,k=Te&&!!E.transmissionMap,he=Te&&!!E.thicknessMap,q=!!E.gradientMap,ne=!!E.alphaMap,xe=E.alphaTest>0,pe=!!E.alphaHash,Oe=!!E.extensions;let xt=Ki;E.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ut={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:B,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:be,batchingColor:be&&G._colorsTexture!==null,instancing:ge,instancingColor:ge&&G.instanceColor!==null,instancingMorph:ge&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Is,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:Ne,envMap:Ve,envMapMode:Ve&&ie.mapping,envMapCubeUVHeight:U,aoMap:I,lightMap:st,bumpMap:Ie,normalMap:Ue,displacementMap:f&&Ee,emissiveMap:Ye,normalMapObjectSpace:Ue&&E.normalMapType===Xy,normalMapTangentSpace:Ue&&E.normalMapType===Wy,metalnessMap:we,roughnessMap:R,anisotropy:w,anisotropyMap:fe,clearcoat:z,clearcoatMap:_e,clearcoatNormalMap:We,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:se,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:qe,specularColorMap:je,specularIntensityMap:at,transmission:Te,transmissionMap:k,thicknessMap:he,gradientMap:q,opaque:E.transparent===!1&&E.blending===br&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:xe,alphaHash:pe,combine:E.combine,mapUv:De&&S(E.map.channel),aoMapUv:I&&S(E.aoMap.channel),lightMapUv:st&&S(E.lightMap.channel),bumpMapUv:Ie&&S(E.bumpMap.channel),normalMapUv:Ue&&S(E.normalMap.channel),displacementMapUv:Ee&&S(E.displacementMap.channel),emissiveMapUv:Ye&&S(E.emissiveMap.channel),metalnessMapUv:we&&S(E.metalnessMap.channel),roughnessMapUv:R&&S(E.roughnessMap.channel),anisotropyMapUv:fe&&S(E.anisotropyMap.channel),clearcoatMapUv:_e&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&S(E.sheenRoughnessMap.channel),specularMapUv:qe&&S(E.specularMap.channel),specularColorMapUv:je&&S(E.specularColorMap.channel),specularIntensityMapUv:at&&S(E.specularIntensityMap.channel),transmissionMapUv:k&&S(E.transmissionMap.channel),thicknessMapUv:he&&S(E.thicknessMap.channel),alphaMapUv:ne&&S(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ue||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(De||ne),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ue,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:Ye&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Oe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ut.vertexUv1s=u.has(1),Ut.vertexUv2s=u.has(2),Ut.vertexUv3s=u.has(3),u.clear(),Ut}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(M,E),v(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=_[E.type];let D;if(M){const W=Wn[M];D=S1.clone(W.uniforms)}else D=E.uniforms;return D}function L(E,M){let D;for(let W=0,G=h.length;W<G;W++){const J=h[W];if(J.cacheKey===M){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Ub(t,M,E,s),h.push(D)),D}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function zb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,_,S,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:S,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=S,d.group=g),e++,d}function o(p,f,m,_,S,g){const d=a(p,f,m,_,S,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function c(p,f,m,_,S,g){const d=a(p,f,m,_,S,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,f){n.length>1&&n.sort(p||jb),i.length>1&&i.sort(f||am),r.length>1&&r.sort(f||am)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function Hb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new om,t.set(i,[a])):r>=s.length?(a=new om,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Qe};break;case"SpotLight":n={position:new j,direction:new j,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function Gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Wb=0;function Xb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qb(t){const e=new Vb,n=Gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Mt,a=new Mt;function o(u){let h=0,p=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,S=0,g=0,d=0,x=0,v=0,y=0,L=0,T=0,A=0;u.sort(Xb);for(let E=0,M=u.length;E<M;E++){const D=u[E],W=D.color,G=D.intensity,J=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*G,p+=W.g*G,f+=W.b*G;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],G);A++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,U=n.get(D);U.shadowIntensity=ie.intensity,U.shadowBias=ie.bias,U.shadowNormalBias=ie.normalBias,U.shadowRadius=ie.radius,U.shadowMapSize=ie.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=D.shadow.matrix,x++}i.directional[m]=K,m++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(W).multiplyScalar(G),K.distance=J,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[S]=K;const ie=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,ie.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[S]=ie.matrix,D.castShadow){const U=n.get(D);U.shadowIntensity=ie.intensity,U.shadowBias=ie.bias,U.shadowNormalBias=ie.normalBias,U.shadowRadius=ie.radius,U.shadowMapSize=ie.mapSize,i.spotShadow[S]=U,i.spotShadowMap[S]=te,y++}S++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(W).multiplyScalar(G),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=K,g++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ie=D.shadow,U=n.get(D);U.shadowIntensity=ie.intensity,U.shadowBias=ie.bias,U.shadowNormalBias=ie.normalBias,U.shadowRadius=ie.radius,U.shadowMapSize=ie.mapSize,U.shadowCameraNear=ie.camera.near,U.shadowCameraFar=ie.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=K,_++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(G),K.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[d]=K,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==S||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=m,P.pointLength=_,P.spotLength=S,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=A,i.version=Wb++)}function c(u,h){let p=0,f=0,m=0,_=0,S=0;const g=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:i}}function lm(t){const e=new qb(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Yb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new lm(t),e.set(r,[o])):s>=a.length?(o=new lm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class $b extends Va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kb extends Va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jb(t,e,n){let i=new rx;const r=new tt,s=new tt,a=new St,o=new $b({depthPacking:Gy}),c=new Kb,u={},h=n.maxTextureSize,p={[Ji]:rn,[rn]:Ji,[di]:di},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Zb,fragmentShader:Qb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Fn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let d=this.type;this.render=function(T,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),W=t.state;W.setBlending($i),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=d!==li&&this.type===li,J=d===li&&this.type!==li;for(let te=0,K=T.length;te<K;te++){const ie=T[te],U=ie.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||G===!0||J===!0){const C=this.type!==li?{minFilter:zn,magFilter:zn}:{};U.map!==null&&U.map.dispose(),U.map=new Lr(r.x,r.y,C),U.map.texture.name=ie.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const N=U.getViewportCount();for(let C=0;C<N;C++){const Z=U.getViewport(C);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),W.viewport(a),U.updateMatrices(ie,C),i=U.getFrustum(),y(A,P,U.camera,ie,this.type)}U.isPointLightShadow!==!0&&this.type===li&&x(U,P),U.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,D)};function x(T,A){const P=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,f,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,m,S,null)}function v(T,A,P,E){let M=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,G=A.uuid;let J=u[W];J===void 0&&(J={},u[W]=J);let te=J[G];te===void 0&&(te=M.clone(),J[G]=te,A.addEventListener("dispose",L)),M=te}if(M.visible=A.visible,M.wireframe=A.wireframe,E===li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=P}return M}function y(T,A,P,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===li)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const G=e.update(T),J=T.material;if(Array.isArray(J)){const te=G.groups;for(let K=0,ie=te.length;K<ie;K++){const U=te[K],$=J[U.materialIndex];if($&&$.visible){const N=v(T,$,E,M);T.onBeforeShadow(t,T,A,P,G,N,U),t.renderBufferDirect(P,null,G,N,T,U),T.onAfterShadow(t,T,A,P,G,N,U)}}}else if(J.visible){const te=v(T,J,E,M);T.onBeforeShadow(t,T,A,P,G,te,null),t.renderBufferDirect(P,null,G,te,T,null),T.onAfterShadow(t,T,A,P,G,te,null)}}const W=T.children;for(let G=0,J=W.length;G<J;G++)y(W[G],A,P,E,M)}function L(T){T.target.removeEventListener("dispose",L);for(const P in u){const E=u[P],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const eE={[Ju]:ed,[td]:rd,[nd]:sd,[Es]:id,[ed]:Ju,[rd]:td,[sd]:nd,[id]:Es};function tE(t,e){function n(){let k=!1;const he=new St;let q=null;const ne=new St(0,0,0,0);return{setMask:function(xe){q!==xe&&!k&&(t.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){k=xe},setClear:function(xe,pe,Oe,xt,Ut){Ut===!0&&(xe*=xt,pe*=xt,Oe*=xt),he.set(xe,pe,Oe,xt),ne.equals(he)===!1&&(t.clearColor(xe,pe,Oe,xt),ne.copy(he))},reset:function(){k=!1,q=null,ne.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,q=null,ne=null,xe=null;return{setReversed:function(pe){if(he!==pe){const Oe=e.get("EXT_clip_control");he?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const xt=xe;xe=null,this.setClear(xt)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?Y(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(pe){q!==pe&&!k&&(t.depthMask(pe),q=pe)},setFunc:function(pe){if(he&&(pe=eE[pe]),ne!==pe){switch(pe){case Ju:t.depthFunc(t.NEVER);break;case ed:t.depthFunc(t.ALWAYS);break;case td:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case nd:t.depthFunc(t.EQUAL);break;case id:t.depthFunc(t.GEQUAL);break;case rd:t.depthFunc(t.GREATER);break;case sd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=pe}},setLocked:function(pe){k=pe},setClear:function(pe){xe!==pe&&(he&&(pe=1-pe),t.clearDepth(pe),xe=pe)},reset:function(){k=!1,q=null,ne=null,xe=null,he=!1}}}function r(){let k=!1,he=null,q=null,ne=null,xe=null,pe=null,Oe=null,xt=null,Ut=null;return{setTest:function(nt){k||(nt?Y(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(nt){he!==nt&&!k&&(t.stencilMask(nt),he=nt)},setFunc:function(nt,Tn,ti){(q!==nt||ne!==Tn||xe!==ti)&&(t.stencilFunc(nt,Tn,ti),q=nt,ne=Tn,xe=ti)},setOp:function(nt,Tn,ti){(pe!==nt||Oe!==Tn||xt!==ti)&&(t.stencilOp(nt,Tn,ti),pe=nt,Oe=Tn,xt=ti)},setLocked:function(nt){k=nt},setClear:function(nt){Ut!==nt&&(t.clearStencil(nt),Ut=nt)},reset:function(){k=!1,he=null,q=null,ne=null,xe=null,pe=null,Oe=null,xt=null,Ut=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f=new WeakMap,m=[],_=null,S=!1,g=null,d=null,x=null,v=null,y=null,L=null,T=null,A=new Qe(0,0,0),P=0,E=!1,M=null,D=null,W=null,G=null,J=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(U)[1]),K=ie>=1):U.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),K=ie>=2);let $=null,N={};const C=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ce=new St().fromArray(C),B=new St().fromArray(Z);function X(k,he,q,ne){const xe=new Uint8Array(4),pe=t.createTexture();t.bindTexture(k,pe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<q;Oe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(he+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return pe}const re={};re[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(Es),Ie(!1),Ue(fp),Y(t.CULL_FACE),I($i);function Y(k){h[k]!==!0&&(t.enable(k),h[k]=!0)}function ue(k){h[k]!==!1&&(t.disable(k),h[k]=!1)}function ge(k,he){return p[k]!==he?(t.bindFramebuffer(k,he),p[k]=he,k===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=he),k===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=he),!0):!1}function be(k,he){let q=m,ne=!1;if(k){q=f.get(he),q===void 0&&(q=[],f.set(he,q));const xe=k.textures;if(q.length!==xe.length||q[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Oe=xe.length;pe<Oe;pe++)q[pe]=t.COLOR_ATTACHMENT0+pe;q.length=xe.length,ne=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ne=!0);ne&&t.drawBuffers(q)}function De(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const Ne={[mr]:t.FUNC_ADD,[gy]:t.FUNC_SUBTRACT,[xy]:t.FUNC_REVERSE_SUBTRACT};Ne[vy]=t.MIN,Ne[_y]=t.MAX;const Ve={[yy]:t.ZERO,[Sy]:t.ONE,[My]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Ty]:t.DST_COLOR,[by]:t.DST_ALPHA,[wy]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[Ay]:t.ONE_MINUS_DST_COLOR,[Ey]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[Ny]:t.ONE_MINUS_CONSTANT_COLOR,[Py]:t.CONSTANT_ALPHA,[Ly]:t.ONE_MINUS_CONSTANT_ALPHA};function I(k,he,q,ne,xe,pe,Oe,xt,Ut,nt){if(k===$i){S===!0&&(ue(t.BLEND),S=!1);return}if(S===!1&&(Y(t.BLEND),S=!0),k!==my){if(k!==g||nt!==E){if((d!==mr||y!==mr)&&(t.blendEquation(t.FUNC_ADD),d=mr,y=mr),nt)switch(k){case br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hp:t.blendFunc(t.ONE,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,v=null,L=null,T=null,A.set(0,0,0),P=0,g=k,E=nt}return}xe=xe||he,pe=pe||q,Oe=Oe||ne,(he!==d||xe!==y)&&(t.blendEquationSeparate(Ne[he],Ne[xe]),d=he,y=xe),(q!==x||ne!==v||pe!==L||Oe!==T)&&(t.blendFuncSeparate(Ve[q],Ve[ne],Ve[pe],Ve[Oe]),x=q,v=ne,L=pe,T=Oe),(xt.equals(A)===!1||Ut!==P)&&(t.blendColor(xt.r,xt.g,xt.b,Ut),A.copy(xt),P=Ut),g=k,E=!1}function st(k,he){k.side===di?ue(t.CULL_FACE):Y(t.CULL_FACE);let q=k.side===rn;he&&(q=!q),Ie(q),k.blending===br&&k.transparent===!1?I($i):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ne=k.stencilWrite;o.setTest(ne),ne&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(k){M!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),M=k)}function Ue(k){k!==fy?(Y(t.CULL_FACE),k!==D&&(k===fp?t.cullFace(t.BACK):k===hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),D=k}function Ee(k){k!==W&&(K&&t.lineWidth(k),W=k)}function Ye(k,he,q){k?(Y(t.POLYGON_OFFSET_FILL),(G!==he||J!==q)&&(t.polygonOffset(he,q),G=he,J=q)):ue(t.POLYGON_OFFSET_FILL)}function we(k){k?Y(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function R(k){k===void 0&&(k=t.TEXTURE0+te-1),$!==k&&(t.activeTexture(k),$=k)}function w(k,he,q){q===void 0&&($===null?q=t.TEXTURE0+te-1:q=$);let ne=N[q];ne===void 0&&(ne={type:void 0,texture:void 0},N[q]=ne),(ne.type!==k||ne.texture!==he)&&($!==q&&(t.activeTexture(q),$=q),t.bindTexture(k,he||re[k]),ne.type=k,ne.texture=he)}function z(){const k=N[$];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){ce.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function Me(k){B.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),B.copy(k))}function qe(k,he){let q=u.get(he);q===void 0&&(q=new WeakMap,u.set(he,q));let ne=q.get(k);ne===void 0&&(ne=t.getUniformBlockIndex(he,k.name),q.set(k,ne))}function je(k,he){const ne=u.get(he).get(k);c.get(he)!==ne&&(t.uniformBlockBinding(he,ne,k.__bindingPointIndex),c.set(he,ne))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,N={},p={},f=new WeakMap,m=[],_=null,S=!1,g=null,d=null,x=null,v=null,y=null,L=null,T=null,A=new Qe(0,0,0),P=0,E=!1,M=null,D=null,W=null,G=null,J=null,ce.set(0,0,t.canvas.width,t.canvas.height),B.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:ue,bindFramebuffer:ge,drawBuffers:be,useProgram:De,setBlending:I,setMaterial:st,setFlipSided:Ie,setCullFace:Ue,setLineWidth:Ee,setPolygonOffset:Ye,setScissorTest:we,activeTexture:R,bindTexture:w,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Se,texImage3D:Le,updateUBOMapping:qe,uniformBlockBinding:je,texStorage2D:We,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:ke,viewport:Me,reset:at}}function cm(t,e,n,i){const r=nE(i);switch(n){case Bg:return t*e;case jg:return t*e;case Hg:return t*e*2;case Vg:return t*e/r.components*r.byteLength;case jf:return t*e/r.components*r.byteLength;case Gg:return t*e*2/r.components*r.byteLength;case Hf:return t*e*2/r.components*r.byteLength;case zg:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Vf:return t*e*4/r.components*r.byteLength;case $o:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dd:case hd:return Math.max(t,16)*Math.max(e,8)/4;case ud:case fd:return Math.max(t,8)*Math.max(e,8)/2;case pd:case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Pd:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wg:case Dd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Id:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(t){switch(t){case Mi:case kg:return{byteLength:1,components:1};case Da:case Fg:case Ba:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case Pr:case Of:case pi:return{byteLength:4,components:1};case Og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function iE(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return m?new OffscreenCanvas(R,w):Al("canvas")}function S(R,w,z){let ee=1;const se=we(R);if((se.width>z||se.height>z)&&(ee=z/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(ee*se.width),Te=Math.floor(ee*se.height);p===void 0&&(p=_(Q,Te));const fe=w?_(Q,Te):p;return fe.width=Q,fe.height=Te,fe.getContext("2d").drawImage(R,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Te+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function g(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,w,z,ee,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=w;if(w===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),w===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),w===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),w===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),z===t.UNSIGNED_INT&&(Q=t.RGB32UI),z===t.BYTE&&(Q=t.RGB8I),z===t.SHORT&&(Q=t.RGB16I),z===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),z===t.UNSIGNED_INT&&(Q=t.RGBA32UI),z===t.BYTE&&(Q=t.RGBA8I),z===t.SHORT&&(Q=t.RGBA16I),z===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),w===t.RGBA){const Te=se?$l:$e.getTransfer(ee);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(R,w){let z;return R?w===null||w===Pr||w===Cs?z=t.DEPTH24_STENCIL8:w===pi?z=t.DEPTH32F_STENCIL8:w===Da&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pr||w===Cs?z=t.DEPTH_COMPONENT24:w===pi?z=t.DEPTH_COMPONENT32F:w===Da&&(z=t.DEPTH_COMPONENT16),z}function L(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==zn&&R.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){const w=R.target;w.removeEventListener("dispose",T),P(w),w.isVideoTexture&&h.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),M(w)}function P(R){const w=i.get(R);if(w.__webglInit===void 0)return;const z=R.source,ee=f.get(z);if(ee){const se=ee[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(R),Object.keys(ee).length===0&&f.delete(z)}i.remove(R)}function E(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const z=R.source,ee=f.get(z);delete ee[w.__cacheKey],a.memory.textures--}function M(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let se=0;se<w.__webglFramebuffer[ee].length;se++)t.deleteFramebuffer(w.__webglFramebuffer[ee][se]);else t.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[ee]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,se=z.length;ee<se;ee++){const Q=i.get(z[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(z[ee])}i.remove(R)}let D=0;function W(){D=0}function G(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function J(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function te(R,w){const z=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(z,R,w);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+w)}function K(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){B(z,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+w)}function ie(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){B(z,R,w);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+w)}function U(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+w)}const $={[ld]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[cd]:t.MIRRORED_REPEAT},N={[zn]:t.NEAREST,[Hy]:t.NEAREST_MIPMAP_NEAREST,[uo]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[Tc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},C={[qy]:t.NEVER,[Jy]:t.ALWAYS,[Yy]:t.LESS,[Xg]:t.LEQUAL,[$y]:t.EQUAL,[Qy]:t.GEQUAL,[Ky]:t.GREATER,[Zy]:t.NOTEQUAL};function Z(R,w){if(w.type===pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qn||w.magFilter===Tc||w.magFilter===uo||w.magFilter===Sr||w.minFilter===qn||w.minFilter===Tc||w.minFilter===uo||w.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,$[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,$[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,$[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,N[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,C[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zn||w.minFilter!==uo&&w.minFilter!==Sr||w.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ce(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",T));const ee=w.source;let se=f.get(ee);se===void 0&&(se={},f.set(ee,se));const Q=J(w);if(Q!==R.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),se[Q].usedTimes++;const Te=se[R.__cacheKey];Te!==void 0&&(se[R.__cacheKey].usedTimes--,Te.usedTimes===0&&E(w)),R.__cacheKey=Q,R.__webglTexture=se[Q].texture}return z}function B(R,w,z){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const se=ce(R,w),Q=w.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const Te=i.get(Q);if(Q.version!==Te.__version||se===!0){n.activeTexture(t.TEXTURE0+z);const fe=$e.getPrimaries($e.workingColorSpace),_e=w.colorSpace===Oi?null:$e.getPrimaries(w.colorSpace),We=w.colorSpace===Oi||fe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let oe=S(w.image,!1,r.maxTextureSize);oe=Ye(w,oe);const Se=s.convert(w.format,w.colorSpace),Le=s.convert(w.type);let ke=v(w.internalFormat,Se,Le,w.colorSpace,w.isVideoTexture);Z(ee,w);let Me;const qe=w.mipmaps,je=w.isVideoTexture!==!0,at=Te.__version===void 0||se===!0,k=Q.dataReady,he=L(w,oe);if(w.isDepthTexture)ke=y(w.format===Rs,w.type),at&&(je?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,Le,null));else if(w.isDataTexture)if(qe.length>0){je&&at&&n.texStorage2D(t.TEXTURE_2D,he,ke,qe[0].width,qe[0].height);for(let q=0,ne=qe.length;q<ne;q++)Me=qe[q],je?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,Le,Me.data):n.texImage2D(t.TEXTURE_2D,q,ke,Me.width,Me.height,0,Se,Le,Me.data);w.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,he,ke,oe.width,oe.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,Le,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,Le,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,qe[0].width,qe[0].height,oe.depth);for(let q=0,ne=qe.length;q<ne;q++)if(Me=qe[q],w.format!==kn)if(Se!==null)if(je){if(k)if(w.layerUpdates.size>0){const xe=cm(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Oe=Me.data.subarray(pe*xe/Me.data.BYTES_PER_ELEMENT,(pe+1)*xe/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,pe,Me.width,Me.height,1,Se,Oe)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,oe.depth,Se,Me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ke,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,oe.depth,Se,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,ke,Me.width,Me.height,oe.depth,0,Se,Le,Me.data)}else{je&&at&&n.texStorage2D(t.TEXTURE_2D,he,ke,qe[0].width,qe[0].height);for(let q=0,ne=qe.length;q<ne;q++)Me=qe[q],w.format!==kn?Se!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,q,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,Le,Me.data):n.texImage2D(t.TEXTURE_2D,q,ke,Me.width,Me.height,0,Se,Le,Me.data)}else if(w.isDataArrayTexture)if(je){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,oe.width,oe.height,oe.depth),k)if(w.layerUpdates.size>0){const q=cm(oe.width,oe.height,w.format,w.type);for(const ne of w.layerUpdates){const xe=oe.data.subarray(ne*q/oe.data.BYTES_PER_ELEMENT,(ne+1)*q/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Se,Le,xe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Le,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,Se,Le,oe.data);else if(w.isData3DTexture)je?(at&&n.texStorage3D(t.TEXTURE_3D,he,ke,oe.width,oe.height,oe.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Le,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,Se,Le,oe.data);else if(w.isFramebufferTexture){if(at)if(je)n.texStorage2D(t.TEXTURE_2D,he,ke,oe.width,oe.height);else{let q=oe.width,ne=oe.height;for(let xe=0;xe<he;xe++)n.texImage2D(t.TEXTURE_2D,xe,ke,q,ne,0,Se,Le,null),q>>=1,ne>>=1}}else if(qe.length>0){if(je&&at){const q=we(qe[0]);n.texStorage2D(t.TEXTURE_2D,he,ke,q.width,q.height)}for(let q=0,ne=qe.length;q<ne;q++)Me=qe[q],je?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Se,Le,Me):n.texImage2D(t.TEXTURE_2D,q,ke,Se,Le,Me);w.generateMipmaps=!1}else if(je){if(at){const q=we(oe);n.texStorage2D(t.TEXTURE_2D,he,ke,q.width,q.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Le,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,Se,Le,oe);g(w)&&d(ee),Te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,z){if(w.image.length!==6)return;const ee=ce(R,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Q=i.get(se);if(se.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Te=$e.getPrimaries($e.workingColorSpace),fe=w.colorSpace===Oi?null:$e.getPrimaries(w.colorSpace),_e=w.colorSpace===Oi||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let ne=0;ne<6;ne++)!We&&!oe?Se[ne]=S(w.image[ne],!0,r.maxCubemapSize):Se[ne]=oe?w.image[ne].image:w.image[ne],Se[ne]=Ye(w,Se[ne]);const Le=Se[0],ke=s.convert(w.format,w.colorSpace),Me=s.convert(w.type),qe=v(w.internalFormat,ke,Me,w.colorSpace),je=w.isVideoTexture!==!0,at=Q.__version===void 0||ee===!0,k=se.dataReady;let he=L(w,Le);Z(t.TEXTURE_CUBE_MAP,w);let q;if(We){je&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,Le.width,Le.height);for(let ne=0;ne<6;ne++){q=Se[ne].mipmaps;for(let xe=0;xe<q.length;xe++){const pe=q[xe];w.format!==kn?ke!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,pe.width,pe.height,ke,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,pe.width,pe.height,ke,Me,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,qe,pe.width,pe.height,0,ke,Me,pe.data)}}}else{if(q=w.mipmaps,je&&at){q.length>0&&he++;const ne=we(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Se[ne].width,Se[ne].height,ke,Me,Se[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Se[ne].width,Se[ne].height,0,ke,Me,Se[ne].data);for(let xe=0;xe<q.length;xe++){const Oe=q[xe].image[ne].image;je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Oe.width,Oe.height,ke,Me,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,qe,Oe.width,Oe.height,0,ke,Me,Oe.data)}}else{je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ke,Me,Se[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,ke,Me,Se[ne]);for(let xe=0;xe<q.length;xe++){const pe=q[xe];je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,ke,Me,pe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,qe,ke,Me,pe.image[ne])}}}g(w)&&d(t.TEXTURE_CUBE_MAP),Q.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function re(R,w,z,ee,se,Q){const Te=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),_e=v(z.internalFormat,Te,fe,z.colorSpace),We=i.get(w),oe=i.get(z);if(oe.__renderTarget=w,!We.__hasExternalTextures){const Se=Math.max(1,w.width>>Q),Le=Math.max(1,w.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,_e,Se,Le,w.depth,0,Te,fe,null):n.texImage2D(se,Q,_e,Se,Le,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,se,oe.__webglTexture,0,Ie(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,se,oe.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(R,w,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const ee=w.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Q=y(w.stencilBuffer,se),Te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ie(w);Ue(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Q,w.width,w.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const ee=w.textures;for(let se=0;se<ee.length;se++){const Q=ee[se],Te=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),_e=v(Q.internalFormat,Te,fe,Q.colorSpace),We=Ie(w);z&&Ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,_e,w.width,w.height):Ue(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,_e,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,_e,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const se=ee.__webglTexture,Q=Ie(w);if(w.depthTexture.format===gs)Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Rs)Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(R){const w=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ee}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=t.createRenderbuffer(),Y(w.__webglDepthbuffer[ee],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),Y(w.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,w,z){const ee=i.get(R);w!==void 0&&re(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ge(R)}function De(R){const w=R.texture,z=i.get(R),ee=i.get(w);R.addEventListener("dispose",A);const se=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)z.__webglFramebuffer[fe][_e]=t.createFramebuffer()}else z.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)z.__webglFramebuffer[fe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,_e=se.length;fe<_e;fe++){const We=i.get(se[fe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ue(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const _e=se[fe];z.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const We=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),Se=v(_e.internalFormat,We,oe,_e.colorSpace,R.isXRRenderTarget===!0),Le=Ie(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Y(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Z(t.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)re(z.__webglFramebuffer[fe][_e],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else re(z.__webglFramebuffer[fe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,_e=se.length;fe<_e;fe++){const We=se[fe],oe=i.get(We);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Z(t.TEXTURE_2D,We),re(z.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(We)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),Z(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)re(z.__webglFramebuffer[_e],R,w,t.COLOR_ATTACHMENT0,fe,_e);else re(z.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,fe,0);g(w)&&d(fe),n.unbindTexture()}R.depthBuffer&&ge(R)}function Ne(R){const w=R.textures;for(let z=0,ee=w.length;z<ee;z++){const se=w[z];if(g(se)){const Q=x(R),Te=i.get(se).__webglTexture;n.bindTexture(Q,Te),d(Q),n.unbindTexture()}}}const Ve=[],I=[];function st(R){if(R.samples>0){if(Ue(R)===!1){const w=R.textures,z=R.width,ee=R.height;let se=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),fe=w.length>1;if(fe)for(let _e=0;_e<w.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const We=i.get(w[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,se,t.NEAREST),c===!0&&(Ve.length=0,I.length=0,Ve.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(Q),I.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<w.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const We=i.get(w[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function Ue(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Ye(R,w){const z=R.colorSpace,ee=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Is&&z!==Oi&&($e.getTransfer(z)===rt?(ee!==kn||se!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=U,this.rebindTextures=be,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ue}function rE(t,e){function n(i,r=Oi){let s;const a=$e.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Og)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===kg)return t.BYTE;if(i===Fg)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===Of)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===Bg)return t.ALPHA;if(i===zg)return t.RGB;if(i===kn)return t.RGBA;if(i===jg)return t.LUMINANCE;if(i===Hg)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===Vg)return t.RED;if(i===jf)return t.RED_INTEGER;if(i===Gg)return t.RG;if(i===Hf)return t.RG_INTEGER;if(i===Vf)return t.RGBA_INTEGER;if(i===$o||i===Ko||i===Zo||i===Qo)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ud||i===dd||i===fd||i===hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xd||i===vd||i===_d||i===yd||i===Sd||i===Md||i===wd||i===bd||i===Ed||i===Td||i===Ad||i===Cd||i===Rd||i===Nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Md)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ed)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Td)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Pd||i===Ld)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jo)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ld)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wg||i===Dd||i===Id||i===Ud)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ud)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sE extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aE={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(u,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lE=`
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

}`;class cE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:oE,fragmentShader:lE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,_=null;const S=new cE,g=n.getContextAttributes();let d=null,x=null;const v=[],y=[],L=new tt;let T=null;const A=new yn;A.viewport=new St;const P=new yn;P.viewport=new St;const E=[A,P],M=new sE;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=v[B];return X===void 0&&(X=new tu,v[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=v[B];return X===void 0&&(X=new tu,v[B]=X),X.getGripSpace()},this.getHand=function(B){let X=v[B];return X===void 0&&(X=new tu,v[B]=X),X.getHandSpace()};function G(B){const X=y.indexOf(B.inputSource);if(X===-1)return;const re=v[X];re!==void 0&&(re.update(B.inputSource,B.frame,u||a),re.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",te);for(let B=0;B<v.length;B++){const X=y[B];X!==null&&(y[B]=null,v[B].disconnect(X))}D=null,W=null,S.reset(),e.setRenderTarget(d),m=null,f=null,p=null,r=null,x=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Lr(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,re=null,Y=null;g.depth&&(Y=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=g.stencil?Rs:gs,re=g.stencil?Cs:Pr);const ue={colorFormat:n.RGBA8,depthFormat:Y,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Lr(f.textureWidth,f.textureHeight,{format:kn,type:Mi,depthTexture:new ax(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(B){for(let X=0;X<B.removed.length;X++){const re=B.removed[X],Y=y.indexOf(re);Y>=0&&(y[Y]=null,v[Y].disconnect(re))}for(let X=0;X<B.added.length;X++){const re=B.added[X];let Y=y.indexOf(re);if(Y===-1){for(let ge=0;ge<v.length;ge++)if(ge>=y.length){y.push(re),Y=ge;break}else if(y[ge]===null){y[ge]=re,Y=ge;break}if(Y===-1)break}const ue=v[Y];ue&&ue.connect(re)}}const K=new j,ie=new j;function U(B,X,re){K.setFromMatrixPosition(X.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);const Y=K.distanceTo(ie),ue=X.projectionMatrix.elements,ge=re.projectionMatrix.elements,be=ue[14]/(ue[10]-1),De=ue[14]/(ue[10]+1),Ne=(ue[9]+1)/ue[5],Ve=(ue[9]-1)/ue[5],I=(ue[8]-1)/ue[0],st=(ge[8]+1)/ge[0],Ie=be*I,Ue=be*st,Ee=Y/(-I+st),Ye=Ee*-I;if(X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ye),B.translateZ(Ee),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ue[10]===-1)B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const we=be+Ee,R=De+Ee,w=Ie-Ye,z=Ue+(Y-Ye),ee=Ne*De/R*we,se=Ve*De/R*we;B.projectionMatrix.makePerspective(w,z,ee,se,we,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function $(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let X=B.near,re=B.far;S.texture!==null&&(S.depthNear>0&&(X=S.depthNear),S.depthFar>0&&(re=S.depthFar)),M.near=P.near=A.near=X,M.far=P.far=A.far=re,(D!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far),A.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const Y=B.parent,ue=M.cameras;$(M,Y);for(let ge=0;ge<ue.length;ge++)$(ue[ge],Y);ue.length===2?U(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),N(B,M,Y)};function N(B,X,re){re===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(re.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=kd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let C=null;function Z(B,X){if(h=X.getViewerPose(u||a),_=X,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let Y=!1;re.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let ge=0;ge<re.length;ge++){const be=re[ge];let De=null;if(m!==null)De=m.getViewport(be);else{const Ve=p.getViewSubImage(f,be);De=Ve.viewport,ge===0&&(e.setRenderTargetTextures(x,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(x))}let Ne=E[ge];Ne===void 0&&(Ne=new yn,Ne.layers.enable(ge),Ne.viewport=new St,E[ge]=Ne),Ne.matrix.fromArray(be.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(be.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(M.matrix.copy(Ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(Ne)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const ge=p.getDepthInformation(re[0]);ge&&ge.isValid&&ge.texture&&S.init(e,ge,r.renderState)}}for(let re=0;re<v.length;re++){const Y=y[re],ue=v[re];Y!==null&&ue!==void 0&&ue.update(Y,X,u||a)}C&&C(B,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const ce=new sx;ce.setAnimationLoop(Z),this.setAnimationLoop=function(B){C=B},this.dispose=function(){}}}const ur=new wi,dE=new Mt;function fE(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,tx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===rn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===rn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(dE.makeRotationFromEuler(ur)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hE(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=h(x),r[x.id]=y,x.addEventListener("dispose",g));const L=v.program;i.updateUBOMapping(x,L);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function h(x){const v=p();x.__bindingPointIndex=v;const y=t.createBuffer(),L=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,L=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=P.length;E<M;E++){const D=P[E];if(m(D,T,E,L)===!0){const W=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let te=0;te<G.length;te++){const K=G[te],ie=S(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,W+J,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,y,L){const T=x.value,A=v+"_"+y;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(x){const v=x.uniforms;let y=0;const L=16;for(let A=0,P=v.length;A<P;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,D=E.length;M<D;M++){const W=E[M],G=Array.isArray(W.value)?W.value:[W.value];for(let J=0,te=G.length;J<te;J++){const K=G[J],ie=S(K),U=y%L,$=U%ie.boundary,N=U+$;y+=$,N!==0&&L-N<ie.storage&&(y+=L-N),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=ie.storage}}}const T=y%L;return T>0&&(y+=L-T),x.__size=y,x.__cache={},this}function S(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class pE{constructor(e={}){const{canvas:n=t1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),S=new Int32Array(4);let g=null,d=null;const x=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Ki,this.toneMappingExposure=1;const y=this;let L=!1,T=0,A=0,P=null,E=-1,M=null;const D=new St,W=new St;let G=null;const J=new Qe(0);let te=0,K=n.width,ie=n.height,U=1,$=null,N=null;const C=new St(0,0,K,ie),Z=new St(0,0,K,ie);let ce=!1;const B=new rx;let X=!1,re=!1;const Y=new Mt,ue=new Mt,ge=new j,be=new St,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Ve(){return P===null?U:1}let I=i;function st(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",pe,!1),I===null){const F="webgl2";if(I=st(F,b),I===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ie,Ue,Ee,Ye,we,R,w,z,ee,se,Q,Te,fe,_e,We,oe,Se,Le,ke,Me,qe,je,at,k;function he(){Ie=new _w(I),Ie.init(),je=new rE(I,Ie),Ue=new fw(I,Ie,e,je),Ee=new tE(I,Ie),Ue.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),Ye=new Mw(I),we=new zb,R=new iE(I,Ie,Ee,we,Ue,je,Ye),w=new pw(y),z=new vw(y),ee=new C1(I),at=new uw(I,ee),se=new yw(I,ee,Ye,at),Q=new bw(I,se,ee,Ye),ke=new ww(I,Ue,R),oe=new hw(we),Te=new Bb(y,w,z,Ie,Ue,at,oe),fe=new fE(y,we),_e=new Hb,We=new Yb(Ie),Le=new cw(y,w,z,Ee,Q,m,c),Se=new Jb(y,Q,Ue),k=new hE(I,Ye,Ue,Ee),Me=new dw(I,Ie,Ye),qe=new Sw(I,Ie,Ye),Ye.programs=Te.programs,y.capabilities=Ue,y.extensions=Ie,y.properties=we,y.renderLists=_e,y.shadowMap=Se,y.state=Ee,y.info=Ye}he();const q=new uE(y,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(K,ie,!1))},this.getSize=function(b){return b.set(K,ie)},this.setSize=function(b,F,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ie=F,n.width=Math.floor(b*U),n.height=Math.floor(F*U),H===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(K*U,ie*U).floor()},this.setDrawingBufferSize=function(b,F,H){K=b,ie=F,U=H,n.width=Math.floor(b*H),n.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,F,H,V){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,F,H,V),Ee.viewport(D.copy(C).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,F,H,V){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,H,V),Ee.scissor(W.copy(Z).multiplyScalar(U).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){Ee.setScissorTest(ce=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(b=!0,F=!0,H=!0){let V=0;if(b){let O=!1;if(P!==null){const le=P.texture.format;O=le===Vf||le===Hf||le===jf}if(O){const le=P.texture.type,me=le===Mi||le===Pr||le===Da||le===Cs||le===Bf||le===zf,Ae=Le.getClearColor(),Ce=Le.getClearAlpha(),Fe=Ae.r,Be=Ae.g,Re=Ae.b;me?(_[0]=Fe,_[1]=Be,_[2]=Re,_[3]=Ce,I.clearBufferuiv(I.COLOR,0,_)):(S[0]=Fe,S[1]=Be,S[2]=Re,S[3]=Ce,I.clearBufferiv(I.COLOR,0,S))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),We.dispose(),we.dispose(),w.dispose(),z.dispose(),Q.dispose(),at.dispose(),k.dispose(),Te.dispose(),q.dispose(),q.removeEventListener("sessionstart",qf),q.removeEventListener("sessionend",Yf),rr.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Ye.autoReset,F=Se.enabled,H=Se.autoUpdate,V=Se.needsUpdate,O=Se.type;he(),Ye.autoReset=b,Se.enabled=F,Se.autoUpdate=H,Se.needsUpdate=V,Se.type=O}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const F=b.target;F.removeEventListener("dispose",Oe),xt(F)}function xt(b){Ut(b),we.remove(b)}function Ut(b){const F=we.get(b).programs;F!==void 0&&(F.forEach(function(H){Te.releaseProgram(H)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,V,O,le){F===null&&(F=De);const me=O.isMesh&&O.matrixWorld.determinant()<0,Ae=fx(b,F,H,V,O);Ee.setMaterial(V,me);let Ce=H.index,Fe=1;if(V.wireframe===!0){if(Ce=se.getWireframeAttribute(H),Ce===void 0)return;Fe=2}const Be=H.drawRange,Re=H.attributes.position;let Ze=Be.start*Fe,ot=(Be.start+Be.count)*Fe;le!==null&&(Ze=Math.max(Ze,le.start*Fe),ot=Math.min(ot,(le.start+le.count)*Fe)),Ce!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,Ce.count)):Re!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Re.count));const ct=ot-Ze;if(ct<0||ct===1/0)return;at.setup(O,V,Ae,H,Ce);let Yt,Je=Me;if(Ce!==null&&(Yt=ee.get(Ce),Je=qe,Je.setIndex(Yt)),O.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*Ve()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(O.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),Ee.setLineWidth(Pe*Ve()),O.isLineSegments?Je.setMode(I.LINES):O.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else O.isPoints?Je.setMode(I.POINTS):O.isSprite&&Je.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,ni=O._multiDrawCounts,et=O._multiDrawCount,An=Ce?ee.get(Ce).bytesPerElement:1,Ur=we.get(V).currentProgram.getUniforms();for(let an=0;an<et;an++)Ur.setValue(I,"_gl_DrawID",an),Je.render(Pe[an]/An,ni[an])}else if(O.isInstancedMesh)Je.renderInstances(Ze,ct,O.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ni=Math.min(H.instanceCount,Pe);Je.renderInstances(Ze,ct,ni)}else Je.render(Ze,ct)};function nt(b,F,H){b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Xa(b,F,H),b.side=Ji,b.needsUpdate=!0,Xa(b,F,H),b.side=di):Xa(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),d=We.get(H),d.init(F),v.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const V=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Ae=le[me];nt(Ae,H,O),V.add(Ae)}else nt(le,H,O),V.add(le)}),v.pop(),d=null,V},this.compileAsync=function(b,F,H=null){const V=this.compile(b,F,H);return new Promise(O=>{function le(){if(V.forEach(function(me){we.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){O(b);return}setTimeout(le,10)}Ie.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Tn=null;function ti(b){Tn&&Tn(b)}function qf(){rr.stop()}function Yf(){rr.start()}const rr=new sx;rr.setAnimationLoop(ti),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(b){Tn=b,q.setAnimationLoop(b),b===null?rr.stop():rr.start()},q.addEventListener("sessionstart",qf),q.addEventListener("sessionend",Yf),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,P),d=We.get(b,v.length),d.init(F),v.push(d),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(ue),re=this.localClippingEnabled,X=oe.init(this.clippingPlanes,re),g=_e.get(b,x.length),g.init(),x.push(g),q.enabled===!0&&q.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&Jl(le,F,-1/0,y.sortObjects)}Jl(b,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort($,N),Ne=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ne&&Le.addToRenderList(g,b),this.info.render.frame++,X===!0&&oe.beginShadows();const H=d.state.shadowsArray;Se.render(H,b,F),X===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(d.setupLights(),F.isArrayCamera){const le=F.cameras;if(O.length>0)for(let me=0,Ae=le.length;me<Ae;me++){const Ce=le[me];Kf(V,O,b,Ce)}Ne&&Le.render(b);for(let me=0,Ae=le.length;me<Ae;me++){const Ce=le[me];$f(g,b,Ce,Ce.viewport)}}else O.length>0&&Kf(V,O,b,F),Ne&&Le.render(b),$f(g,b,F);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,F),at.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],X===!0&&oe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Jl(b,F,H,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){V&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const me=Q.update(b),Ae=b.material;Ae.visible&&g.push(b,me,Ae,H,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){const me=Q.update(b),Ae=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(Ae)){const Ce=me.groups;for(let Fe=0,Be=Ce.length;Fe<Be;Fe++){const Re=Ce[Fe],Ze=Ae[Re.materialIndex];Ze&&Ze.visible&&g.push(b,me,Ze,H,be.z,Re)}}else Ae.visible&&g.push(b,me,Ae,H,be.z,null)}}const le=b.children;for(let me=0,Ae=le.length;me<Ae;me++)Jl(le[me],F,H,V)}function $f(b,F,H,V){const O=b.opaque,le=b.transmissive,me=b.transparent;d.setupLightsView(H),X===!0&&oe.setGlobalState(y.clippingPlanes,H),V&&Ee.viewport(D.copy(V)),O.length>0&&Wa(O,F,H),le.length>0&&Wa(le,F,H),me.length>0&&Wa(me,F,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Kf(b,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Lr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Ba:Mi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const le=d.state.transmissionRenderTarget[V.id],me=V.viewport||D;le.setSize(me.z,me.w);const Ae=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(J),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Le.render(H);const Ce=y.toneMapping;y.toneMapping=Ki;const Fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),X===!0&&oe.setGlobalState(y.clippingPlanes,V),Wa(b,H,V),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Re=0,Ze=F.length;Re<Ze;Re++){const ot=F[Re],ct=ot.object,Yt=ot.geometry,Je=ot.material,Pe=ot.group;if(Je.side===di&&ct.layers.test(V.layers)){const ni=Je.side;Je.side=rn,Je.needsUpdate=!0,Zf(ct,H,V,Yt,Je,Pe),Je.side=ni,Je.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le))}y.setRenderTarget(Ae),y.setClearColor(J,te),Fe!==void 0&&(V.viewport=Fe),y.toneMapping=Ce}function Wa(b,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=b.length;O<le;O++){const me=b[O],Ae=me.object,Ce=me.geometry,Fe=V===null?me.material:V,Be=me.group;Ae.layers.test(H.layers)&&Zf(Ae,F,H,Ce,Fe,Be)}}function Zf(b,F,H,V,O,le){b.onBeforeRender(y,F,H,V,O,le),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,F,H,V,b,le),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,y.renderBufferDirect(H,F,V,O,b,le),O.side=Ji,O.needsUpdate=!0,y.renderBufferDirect(H,F,V,O,b,le),O.side=di):y.renderBufferDirect(H,F,V,O,b,le),b.onAfterRender(y,F,H,V,O,le)}function Xa(b,F,H){F.isScene!==!0&&(F=De);const V=we.get(b),O=d.state.lights,le=d.state.shadowsArray,me=O.state.version,Ae=Te.getParameters(b,O.state,le,F,H),Ce=Te.getProgramCacheKey(Ae);let Fe=V.programs;V.environment=b.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(b.isMeshStandardMaterial?z:w).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Oe),Fe=new Map,V.programs=Fe);let Be=Fe.get(Ce);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===me)return Jf(b,Ae),Be}else Ae.uniforms=Te.getUniforms(b),b.onBeforeCompile(Ae,y),Be=Te.acquireProgram(Ae,Ce),Fe.set(Ce,Be),V.uniforms=Ae.uniforms;const Re=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Jf(b,Ae),V.needsLights=px(b),V.lightsStateVersion=me,V.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Qf(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=el.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Jf(b,F){const H=we.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function fx(b,F,H,V,O){F.isScene!==!0&&(F=De),R.resetTextureUnits();const le=F.fog,me=V.isMeshStandardMaterial?F.environment:null,Ae=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Is,Ce=(V.isMeshStandardMaterial?z:w).get(V.envMap||me),Fe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let ct=Ki;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=y.toneMapping);const Yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=Yt!==void 0?Yt.length:0,Pe=we.get(V),ni=d.state.lights;if(X===!0&&(re===!0||b!==M)){const mn=b===M&&V.id===E;oe.setState(V,b,mn)}let et=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ni.state.version||Pe.outputColorSpace!==Ae||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Ce||V.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Be||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==ot||Pe.toneMapping!==ct||Pe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Pe.__version=V.version);let An=Pe.currentProgram;et===!0&&(An=Xa(V,F,O));let Ur=!1,an=!1,Fs=!1;const ut=An.getUniforms(),Hn=Pe.uniforms;if(Ee.useProgram(An.program)&&(Ur=!0,an=!0,Fs=!0),V.id!==E&&(E=V.id,an=!0),Ur||M!==b){Ee.buffers.depth.getReversed()?(Y.copy(b.projectionMatrix),i1(Y),r1(Y),ut.setValue(I,"projectionMatrix",Y)):ut.setValue(I,"projectionMatrix",b.projectionMatrix),ut.setValue(I,"viewMatrix",b.matrixWorldInverse);const Ei=ut.map.cameraPosition;Ei!==void 0&&Ei.setValue(I,ge.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,an=!0,Fs=!0)}if(O.isSkinnedMesh){ut.setOptional(I,O,"bindMatrix"),ut.setOptional(I,O,"bindMatrixInverse");const mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ut.setValue(I,"boneTexture",mn.boneTexture,R))}O.isBatchedMesh&&(ut.setOptional(I,O,"batchingTexture"),ut.setValue(I,"batchingTexture",O._matricesTexture,R),ut.setOptional(I,O,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",O._indirectTexture,R),ut.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",O._colorsTexture,R));const Os=H.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&ke.update(O,H,An),(an||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,ut.setValue(I,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Hn.envMap.value=Ce,Hn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(Hn.envMapIntensity.value=F.environmentIntensity),an&&(ut.setValue(I,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&hx(Hn,Fs),le&&V.fog===!0&&fe.refreshFogUniforms(Hn,le),fe.refreshMaterialUniforms(Hn,V,U,ie,d.state.transmissionRenderTarget[b.id]),el.upload(I,Qf(Pe),Hn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(el.upload(I,Qf(Pe),Hn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(I,"center",O.center),ut.setValue(I,"modelViewMatrix",O.modelViewMatrix),ut.setValue(I,"normalMatrix",O.normalMatrix),ut.setValue(I,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const mn=V.uniformsGroups;for(let Ei=0,Ti=mn.length;Ei<Ti;Ei++){const eh=mn[Ei];k.update(eh,An),k.bind(eh,An)}}return An}function hx(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function px(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,H){we.get(b.texture).__webglTexture=F,we.get(b.depthTexture).__webglTexture=H;const V=we.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const H=we.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,H=0){P=b,T=F,A=H;let V=!0,O=null,le=!1,me=!1;if(b){const Ce=we.get(b);if(Ce.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ce.__hasExternalTextures)R.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(Ce.__boundDepthTexture!==Re){if(Re!==null&&we.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Be=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][H]:O=Be[F],le=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?O=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[H]:O=Be,D.copy(b.viewport),W.copy(b.scissor),G=b.scissorTest}else D.copy(C).multiplyScalar(U).floor(),W.copy(Z).multiplyScalar(U).floor(),G=ce;if(Ee.bindFramebuffer(I.FRAMEBUFFER,O)&&V&&Ee.drawBuffers(b,O),Ee.viewport(D),Ee.scissor(W),Ee.setScissorTest(G),le){const Ce=we.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,H)}else if(me){const Ce=we.get(b.texture),Fe=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,H||0,Fe)}E=-1},this.readRenderTargetPixels=function(b,F,H,V,O,le,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){Ee.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Ce=b.texture,Fe=Ce.format,Be=Ce.type;if(!Ue.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&H>=0&&H<=b.height-O&&I.readPixels(F,H,V,O,je.convert(Fe),je.convert(Be),le)}finally{const Ce=P!==null?we.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,F,H,V,O,le,me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){const Ce=b.texture,Fe=Ce.format,Be=Ce.type;if(!Ue.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-V&&H>=0&&H<=b.height-O){Ee.bindFramebuffer(I.FRAMEBUFFER,Ae);const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(F,H,V,O,je.convert(Fe),je.convert(Be),0);const Ze=P!==null?we.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Ze);const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await n1(I,ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Re),I.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,H=0){b.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(b.image.width*V),le=Math.floor(b.image.height*V),me=F!==null?F.x:0,Ae=F!==null?F.y:0;R.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,me,Ae,O,le),Ee.unbindTexture()},this.copyTextureToTexture=function(b,F,H=null,V=null,O=0){b.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let le,me,Ae,Ce,Fe,Be,Re,Ze,ot;const ct=b.isCompressedTexture?b.mipmaps[O]:b.image;H!==null?(le=H.max.x-H.min.x,me=H.max.y-H.min.y,Ae=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Fe=H.min.y,Be=H.isBox3?H.min.z:0):(le=ct.width,me=ct.height,Ae=ct.depth||1,Ce=0,Fe=0,Be=0),V!==null?(Re=V.x,Ze=V.y,ot=V.z):(Re=0,Ze=0,ot=0);const Yt=je.convert(F.format),Je=je.convert(F.type);let Pe;F.isData3DTexture?(R.setTexture3D(F,0),Pe=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Pe=I.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const ni=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),Ur=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be);const Fs=b.isDataArrayTexture||b.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Hn=we.get(b),Os=we.get(F),mn=we.get(Hn.__renderTarget),Ei=we.get(Os.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<Ae;Ti++)Fs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(b).__webglTexture,O,Be+Ti),b.isDepthTexture?(ut&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(F).__webglTexture,O,ot+Ti),I.blitFramebuffer(Ce,Fe,le,me,Re,Ze,le,me,I.DEPTH_BUFFER_BIT,I.NEAREST)):ut?I.copyTexSubImage3D(Pe,O,Re,Ze,ot+Ti,Ce,Fe,le,me):I.copyTexSubImage2D(Pe,O,Re,Ze,ot+Ti,Ce,Fe,le,me);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Pe,O,Re,Ze,ot,le,me,Ae,Yt,Je,ct.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,O,Re,Ze,ot,le,me,Ae,Yt,ct.data):I.texSubImage3D(Pe,O,Re,Ze,ot,le,me,Ae,Yt,Je,ct):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Re,Ze,le,me,Yt,Je,ct.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Re,Ze,ct.width,ct.height,Yt,ct.data):I.texSubImage2D(I.TEXTURE_2D,O,Re,Ze,le,me,Yt,Je,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,ni),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ur),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),O===0&&F.generateMipmaps&&I.generateMipmap(Pe),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,F,H=null,V=null,O=0){return b.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,H,V,O)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,Ee.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}class mE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dx extends Va{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new Mt,Od=new Kg,Do=new Kl,Io=new j;class gE extends sn{constructor(e=new ei,n=new dx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;um.copy(r).invert(),Od.copy(e.ray).applyMatrix4(um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,S=m;_<S;_++){const g=u.getX(_);Io.fromBufferAttribute(p,g),dm(Io,g,c,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=f,S=m;_<S;_++)Io.fromBufferAttribute(p,_),dm(Io,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dm(t,e,n,i,r,s,a){const o=Od.distanceSqToPoint(t);if(o<n){const c=new j;Od.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xE extends Wt{constructor(e,n,i,r,s,a,o,c,u){super(e,n,i,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wf extends ei{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),h(),this.setAttribute("position",new Qn(s,3)),this.setAttribute("normal",new Qn(s.slice(),3)),this.setAttribute("uv",new Qn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new j,y=new j,L=new j;for(let T=0;T<n.length;T+=3)m(n[T+0],v),m(n[T+1],y),m(n[T+2],L),c(v,y,L,x)}function c(x,v,y,L){const T=L+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const E=x.clone().lerp(y,P/T),M=v.clone().lerp(y,P/T),D=T-P;for(let W=0;W<=D;W++)W===0&&P===T?A[P][W]=E:A[P][W]=E.clone().lerp(M,W/D)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function u(x){const v=new j;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const x=new j;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,L=d(x)/Math.PI+.5;a.push(y,1-L)}_(),p()}function p(){for(let x=0;x<a.length;x+=6){const v=a[x+0],y=a[x+2],L=a[x+4],T=Math.max(v,y,L),A=Math.min(v,y,L);T>.9&&A<.1&&(v<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function m(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const x=new j,v=new j,y=new j,L=new j,T=new tt,A=new tt,P=new tt;for(let E=0,M=0;E<s.length;E+=9,M+=6){x.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),L.copy(x).add(v).add(y).divideScalar(3);const D=g(L);S(T,M+0,x,D),S(A,M+2,v,D),S(P,M+4,y,D)}}function S(x,v,y,L){L<0&&x.x===1&&(a[v]=x.x-1),y.x===0&&y.z===0&&(a[v]=L/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.vertices,e.indices,e.radius,e.details)}}class Rl extends Wf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Rl(e.radius,e.detail)}}class vE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);function _E(){const t=ve.useRef(null);return ve.useEffect(()=>{const e=t.current;if(!e)return;const n=new mE,i=new yn(60,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=35,i.position.y=10,i.lookAt(0,0,0);const r=new pE({alpha:!0,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=50,a=70,o=s*a,c=new Float32Array(o*3),u=new Float32Array(o*3),h=new Qe("#0073bc"),p=new Qe("#0ea5e9"),f=new Qe("#38bdf8");let m=0;for(let U=0;U<s;U++)for(let $=0;$<a;$++){const N=($-a/2)*1.6,C=(U-s/2)*1.6,Z=0;c[m*3]=N,c[m*3+1]=Z,c[m*3+2]=C;const ce=h.clone().lerp(p,U/s).lerp(f,$/a*.5);u[m*3]=ce.r,u[m*3+1]=ce.g,u[m*3+2]=ce.b,m++}const _=new ei;_.setAttribute("position",new wn(c,3)),_.setAttribute("color",new wn(u,3));const S=document.createElement("canvas");S.width=32,S.height=32;const g=S.getContext("2d"),d=g.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.3,"rgba(0,115,188,0.8)"),d.addColorStop(1,"rgba(0,115,188,0)"),g.fillStyle=d,g.fillRect(0,0,32,32);const x=new xE(S),v=new dx({size:.9,vertexColors:!0,map:x,transparent:!0,opacity:.45,blending:br,depthWrite:!1}),y=new gE(_,v);y.rotation.x=.4,n.add(y);const L=new Rl(7,1),T=new Cl({color:165063,wireframe:!0,transparent:!0,opacity:.08}),A=new Fn(L,T);A.position.set(22,5,-10),n.add(A);const P=new Fn(new Rl(5,1),new Cl({color:29628,wireframe:!0,transparent:!0,opacity:.06}));P.position.set(-24,8,-5),n.add(P);let E=0,M=0,D=0,W=0;const G=U=>{E=(U.clientX-window.innerWidth/2)*.005,M=(U.clientY-window.innerHeight/2)*.005};window.addEventListener("mousemove",G);const J=()=>{t.current&&(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",J);let te,K=new vE;const ie=()=>{te=requestAnimationFrame(ie);const U=K.getElapsedTime()*.8;D+=(E-D)*.05,W+=(M-W)*.05,i.position.x=D*10,i.position.y=10-W*8,i.lookAt(0,0,0);const $=_.attributes.position.array;let N=0;for(let C=0;C<s;C++)for(let Z=0;Z<a;Z++){const ce=Z/a*Math.PI*4,B=C/s*Math.PI*4;$[N*3+1]=Math.sin(ce+U)*1.8+Math.cos(B+U*.8)*1.8,N++}_.attributes.position.needsUpdate=!0,A.rotation.x+=.003,A.rotation.y+=.004,P.rotation.x-=.002,P.rotation.y+=.003,r.render(n,i)};return ie(),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("resize",J),cancelAnimationFrame(te),e&&r.domElement&&e.removeChild(r.domElement),_.dispose(),v.dispose(),x.dispose()}},[]),l.jsx("div",{ref:t,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true",style:{opacity:.85}})}function yE({onNavigate:t}){const e=ve.useRef(null),[n]=ve.useState("/hero.mp4"),[i,r]=ve.useState(0),[s,a]=ve.useState(45.8);ve.useEffect(()=>{const c=setInterval(()=>{a(u=>parseFloat((u+(Math.random()-.5)*.4).toFixed(1))),r(u=>u+1)},2200);return()=>clearInterval(c)},[]),ve.useEffect(()=>{const c=e.current;if(!c)return;const u=()=>{const f=c.play();f&&f.catch(()=>{c.muted=!0,c.play().catch(()=>{})})},h=()=>{c.currentTime=0,u()},p=()=>{c.duration&&c.currentTime>=c.duration-.15&&(c.currentTime=0,u())};return c.addEventListener("ended",h),c.addEventListener("timeupdate",p),u(),()=>{c.removeEventListener("ended",h),c.removeEventListener("timeupdate",p)}},[n]);const o={background:"linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(0,180,255,0.18) 50%, rgba(255,255,255,0.20) 100%)",backdropFilter:"blur(28px) saturate(1.8)",WebkitBackdropFilter:"blur(28px) saturate(1.8)",border:"1.5px solid rgba(255,255,255,0.72)",boxShadow:"0 8px 32px rgba(0,140,255,0.25), inset 0 2px 3px rgba(255,255,255,0.95)"};return l.jsxs("section",{id:"hero",className:"relative w-full min-h-screen overflow-hidden bg-sky-950 flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-20",children:[l.jsx("video",{ref:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",className:"absolute inset-0 w-full h-full object-cover z-0",src:n,children:l.jsx("source",{src:n,type:"video/mp4"})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/25 to-transparent z-[1] pointer-events-none"}),l.jsx("div",{className:"absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/20 to-transparent z-[1] pointer-events-none"}),l.jsx("div",{className:"absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent z-[1] pointer-events-none"}),l.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full my-auto",children:l.jsxs("div",{className:"max-w-3xl text-left space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full animate-in fade-in slide-in-from-left-6 duration-700",style:{...o,boxShadow:"0 4px 18px rgba(0,140,255,0.3), inset 0 1.5px 2px rgba(255,255,255,0.9)"},children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"})]}),l.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-white",style:{textShadow:"0 0 12px rgba(0,200,255,0.7), 0 1px 4px rgba(0,0,0,0.5)"},children:"India's Premier Water & Automation Enterprise"})]}),l.jsxs("h1",{className:"text-3xl sm:text-5xl md:text-[3.6rem] font-bold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",style:{textShadow:"0 0 40px rgba(0,200,255,0.4), 0 3px 16px rgba(0,0,0,0.6)"},children:["We"," ",l.jsx("span",{className:"font-extrabold",style:{background:"linear-gradient(90deg, #7de8ff, #38bdf8, #60efff, #a5f3fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 20px rgba(0,200,255,0.8))"},children:"engineer & build"}),l.jsx("br",{}),"modern water systems"]}),l.jsx("div",{className:"max-w-xl rounded-2xl px-5 py-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200",style:o,children:l.jsxs("p",{className:"text-sm sm:text-base font-medium leading-relaxed",style:{color:"rgba(255,255,255,0.97)",textShadow:"0 1px 6px rgba(0,0,0,0.5)"},children:["Empowering industries with smart, sustainable, and high-performance water treatment technologies. At"," ",l.jsx("strong",{style:{color:"#7de8ff",textShadow:"0 0 14px rgba(0,220,255,0.8)"},children:"ORBIT Engineering Solutions"}),", we transform complex industrial water challenges into pure, efficient, and reusable resources."]})}),l.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300",children:[l.jsxs("button",{onClick:()=>t==null?void 0:t("contact"),className:"px-7 py-3.5 rounded-full text-white text-sm font-bold flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 glow-btn",style:{background:"linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #38bdf8 100%)",boxShadow:"0 0 30px rgba(0,190,255,0.65), 0 4px 16px rgba(0,0,0,0.2)"},children:["Start a Project ",l.jsx(Kn,{className:"w-4 h-4"})]}),l.jsx("button",{onClick:()=>t==null?void 0:t("services"),className:"px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer",style:{...o,color:"rgba(255,255,255,0.97)",textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Explore Services"})]}),l.jsx("div",{className:"inline-flex flex-wrap items-center gap-6 sm:gap-10 rounded-2xl px-6 py-4 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500",style:o,children:[["₹200+ Cr","Portfolio Delivered"],["150+","Mega Schemes"],["27+ Years","Legacy (Est. 1998)"]].map(([c,u],h,p)=>l.jsxs(Vd.Fragment,{children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xl sm:text-2xl font-black text-white",style:{textShadow:"0 0 20px rgba(0,200,255,0.6), 0 2px 8px rgba(0,0,0,0.5)"},children:c}),l.jsx("div",{className:"text-[11px] font-semibold mt-0.5",style:{color:"rgba(180,235,255,0.85)"},children:u})]}),h<p.length-1&&l.jsx("div",{className:"h-8 w-px hidden sm:block",style:{background:"linear-gradient(to bottom, transparent, rgba(0,200,255,0.5), transparent)"}})]},h))})]})}),l.jsx("div",{className:"hidden md:flex flex-col gap-2.5 absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-12 z-20 pointer-events-auto",style:{width:"330px"},children:l.jsxs("div",{className:"relative rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(2,44,82,0.8) 100%)",backdropFilter:"blur(24px) saturate(1.8)",WebkitBackdropFilter:"blur(24px) saturate(1.8)",border:"1.5px solid rgba(56,189,248,0.4)",boxShadow:"0 16px 40px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.3)"},children:[l.jsx("div",{className:"absolute -top-px inset-x-6 h-[2px] rounded-full pointer-events-none",style:{background:"linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)"}}),l.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"})]}),l.jsx("span",{className:"text-[11px] font-extrabold uppercase tracking-wider text-white",children:"Live SCADA Telemetry"})]}),l.jsx("span",{className:"text-[10px] font-bold text-sky-200 bg-white/20 px-2 py-0.5 rounded-full border border-white/25 backdrop-blur-sm",children:"Active 24/7"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2.5",children:[l.jsxs("div",{className:"bg-white/15 backdrop-blur-md rounded-xl p-2.5 border border-white/20",children:[l.jsxs("div",{className:"text-[10px] font-medium text-slate-100 flex items-center gap-1",children:[l.jsx(Pa,{className:"w-3 h-3 text-sky-300 animate-pulse"}),l.jsx("span",{children:"Real-Time Flow"})]}),l.jsxs("div",{className:"text-base font-black text-white mt-0.5 tabular-nums",children:[s," MLD"]}),l.jsx("div",{className:"text-[9px] text-emerald-300 font-semibold",children:"● Normal Capacity"})]}),l.jsxs("div",{className:"bg-white/15 backdrop-blur-md rounded-xl p-2.5 border border-white/20",children:[l.jsxs("div",{className:"text-[10px] font-medium text-slate-100 flex items-center gap-1",children:[l.jsx(La,{className:"w-3 h-3 text-sky-300"}),l.jsx("span",{children:"Water Quality"})]}),l.jsx("div",{className:"text-base font-black text-white mt-0.5",children:"99.8% BIS"}),l.jsx("div",{className:"text-[9px] text-sky-200 font-semibold",children:"Cl: 0.5 ppm Online"})]})]}),l.jsx("div",{className:"mt-2.5 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 flex items-end gap-0.5 h-10",children:Array.from({length:24},(c,u)=>l.jsx("div",{className:"flex-1 rounded-sm transition-all duration-700",style:{height:`${30+Math.sin((i+u)*.4)*12+Math.random()*6}%`,background:u>20?"#38bdf8":"rgba(255,255,255,0.45)"}},u))}),l.jsxs("div",{className:"mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-slate-300 font-medium",children:[l.jsx(Rg,{className:"w-3.5 h-3.5 text-sky-400"}),l.jsx("span",{children:"150+ IoT Nodes Monitored"})]}),l.jsxs("button",{onClick:()=>t==null?void 0:t("services"),className:"text-sky-300 hover:text-white font-bold flex items-center gap-0.5 transition-colors cursor-pointer",children:[l.jsx("span",{children:"Explore"}),l.jsx(Kn,{className:"w-3 h-3"})]})]})]})})]})}function Qt(t={}){const e=ve.useRef(null),[n,i]=ve.useState(!1);return ve.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),r.classList.add("visible"),s.unobserve(r))},{threshold:t.threshold??.12,rootMargin:t.rootMargin??"0px 0px -60px 0px",...t});return s.observe(r),()=>s.disconnect()},[]),{ref:e,isVisible:n}}function Xf(t,e=1800){const n=ve.useRef(null),[i,r]=ve.useState(0),s=ve.useRef(!1);return ve.useEffect(()=>{const a=n.current;if(!a)return;const o=new IntersectionObserver(([c])=>{if(c.isIntersecting&&!s.current){s.current=!0;const u=performance.now(),h=p=>{const f=p-u,m=Math.min(f/e,1),_=1-Math.pow(1-m,4);r(Math.round(_*t)),m<1&&requestAnimationFrame(h)};requestAnimationFrame(h),o.unobserve(a)}},{threshold:.3});return o.observe(a),()=>o.disconnect()},[t,e]),{ref:n,count:i}}function hm({value:t,suffix:e,label:n,sub:i,color:r,delay:s}){const{ref:a,count:o}=Xf(typeof t=="number"?t:0,2e3),c=Qt();return l.jsxs("div",{ref:u=>{a.current=u,c.ref.current=u},className:`reveal-scale ${s} p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover-lift gradient-border`,children:[l.jsx("div",{className:`text-2xl font-bold ${r}`,children:typeof t=="number"?o+(e||""):t}),l.jsx("div",{className:"text-xs font-semibold text-slate-700 mt-0.5",children:n}),l.jsx("div",{className:"text-[11px] text-slate-500 mt-0.5",children:i})]})}function SE(){const[t,e]=ve.useState("clarifier"),[n,i]=ve.useState("Normal"),[r,s]=ve.useState(85),o={intake:{title:"Raw Water River Intake & Well",status:"Online · 3 Pumps Running",flow:(n==="Peak"?62.4:n==="Backwash"?38:45.8).toFixed(1)+" MLD",pressure:"4.8 Bar",turbidity:"14.2 NTU",power:"185 kW",valves:"Intake Gates: 100% Open",alert:"Normal Intake Velocity",image:"https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80"},clarifier:{title:"Clariflocculator & Coagulation Unit",status:"Active · Alum Dosing 18 ppm",flow:(n==="Peak"?61.8:n==="Backwash"?37.5:45.2).toFixed(1)+" MLD",pressure:"1.2 Bar",turbidity:"3.8 NTU (Post-Coagulation)",power:"45 kW (Flash Mixer)",valves:"Sludge Drain: Auto-Pulse",alert:"Floc Formation Optimal",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"},filters:{title:"Rapid Gravity Sand Filters (RGSF)",status:n==="Backwash"?"⚠️ Bed 3 Backwash Active":"Online · 6 Filter Beds Running",flow:(n==="Peak"?60.5:n==="Backwash"?32:44.9).toFixed(1)+" MLD",pressure:"0.85 Bar (Head Loss: 1.4m)",turbidity:"0.45 NTU (BIS < 1.0)",power:"110 kW Air Blower",valves:n==="Backwash"?"Backwash Valve: 100% OPEN":"Effluent Valve: Regulating",alert:n==="Backwash"?"Air Scouring & Water Flush Active":"Filtration Cycle 18/24 hrs",image:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"},chlorine:{title:"Gas / Electro-Chlorination & Disinfection",status:"Active · Residual Cl Control",flow:(n==="Peak"?60:44.5).toFixed(1)+" MLD",pressure:"3.2 Bar",turbidity:"0.38 NTU",power:"15 kW Electro-Chlorinator",valves:"Dosing Pump 1: 0.8 ppm active",alert:"Residual Chlorine: 0.52 ppm (Compliant)",image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"},scada:{title:"Master SCADA Telemetry & IoT Cloud Node",status:"4G LTE Dual Gateway Linked",flow:(n==="Peak"?60:44.5).toFixed(1)+" MLD Total Outflow",pressure:"Master Header: 6.2 Bar",turbidity:"Quality Index: 99.8%",power:"Full Plant: 355 kW Total",valves:"18 RTU Remote Actuators Synced",alert:"Cloud Latency: 18ms · Zero Alarm Active",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"}}[t];return l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative",children:[l.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#1e60aa]/5 rounded-full blur-3xl pointer-events-none"}),l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider mb-1.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-100",children:[l.jsx(Pa,{className:"w-3.5 h-3.5 animate-pulse text-emerald-500"}),l.jsx("span",{children:"Interactive Industrial SCADA Command Simulation"})]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-slate-900 tracking-tight",children:"50 MLD Turnkey Water Treatment Simulation"})]}),l.jsx("div",{className:"flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200",children:["Normal","Peak Demand","Backwash"].map(c=>l.jsx("button",{onClick:()=>i(c==="Peak Demand"?"Peak":c),className:`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${n==="Peak"&&c==="Peak Demand"||n===c?"bg-[#1e60aa] text-white shadow-sm":"text-slate-600 hover:text-slate-900 hover:bg-white/80"}`,children:c},c))})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 my-5",children:[{id:"intake",label:"1. Raw Intake"},{id:"clarifier",label:"2. Clarifier"},{id:"filters",label:"3. Sand Filters"},{id:"chlorine",label:"4. Chlorination"},{id:"scada",label:"5. Master SCADA"}].map(c=>l.jsxs("button",{onClick:()=>e(c.id),className:`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-left flex items-center justify-between cursor-pointer border ${t===c.id?"bg-[#1e60aa] text-white border-[#1e60aa] shadow-md shadow-[#1e60aa]/20":"bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100"}`,children:[l.jsx("span",{children:c.label}),t===c.id&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-300 animate-ping"})]},c.id))}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[l.jsxs("div",{className:"lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-sm",children:[l.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover opacity-95"}),l.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full w-max mb-1 shadow-sm",children:[l.jsx(Jn,{className:"w-3 h-3"})," ",o.status]}),l.jsx("h4",{className:"text-sm font-bold text-white drop-shadow-sm",children:o.title}),l.jsxs("div",{className:"text-[11px] text-sky-200 font-medium mt-0.5",children:["● ",o.alert]})]})]}),l.jsxs("div",{className:"lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3",children:[l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all",children:[l.jsxs("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(Xl,{className:"w-3.5 h-3.5 text-[#1e60aa]"})," Discharge Flow"]}),l.jsx("div",{className:"text-xl font-semibold text-slate-900 mt-1.5 font-display",children:o.flow}),l.jsx("div",{className:"text-[11px] text-emerald-600 font-semibold mt-0.5",children:"Electromagnetic Online"})]}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all",children:[l.jsxs("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(Z_,{className:"w-3.5 h-3.5 text-[#1e60aa]"})," Header Pressure"]}),l.jsx("div",{className:"text-xl font-semibold text-slate-900 mt-1.5 font-display",children:o.pressure}),l.jsx("div",{className:"text-[11px] text-sky-600 font-semibold mt-0.5",children:"4-20mA Transducer"})]}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all",children:[l.jsxs("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(La,{className:"w-3.5 h-3.5 text-[#1e60aa]"})," Water Quality"]}),l.jsx("div",{className:"text-xl font-semibold text-slate-900 mt-1.5 font-display",children:o.turbidity}),l.jsx("div",{className:"text-[11px] text-emerald-600 font-semibold mt-0.5",children:"CPCB & BIS 10500"})]}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all",children:[l.jsxs("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(Uf,{className:"w-3.5 h-3.5 text-amber-500"})," Connected Power"]}),l.jsx("div",{className:"text-xl font-semibold text-slate-900 mt-1.5 font-display",children:o.power}),l.jsx("div",{className:"text-[11px] text-slate-500 font-semibold mt-0.5",children:"Schneider VFD Drive"})]}),l.jsxs("div",{className:"bg-slate-50 p-4 rounded-2xl border border-slate-200/90 hover:border-[#1e60aa]/40 hover:bg-white hover:shadow-md transition-all sm:col-span-2",children:[l.jsxs("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(Rg,{className:"w-3.5 h-3.5 text-[#1e60aa]"})," Valve & Actuator Telemetry"]}),l.jsx("div",{className:"text-sm font-bold text-slate-800 mt-1.5",children:o.valves}),l.jsx("div",{className:"text-[11px] text-sky-700 font-semibold mt-0.5",children:"Siemens S7-1500 PLC Synced"})]})]})]})]})}function ME({onOpenQuote:t}){const[e,n]=ve.useState(5e4),[i,r]=ve.useState(70),[s,a]=ve.useState("River / Canal"),c=(e*i*1.15/1e6).toFixed(2),u=Math.max(2,Math.ceil(c/5)),h=Math.round(c*40),p=c>20?"700 - 1200 mm":c>5?"350 - 600 mm":"150 - 300 mm";return l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl",children:[l.jsxs("div",{className:"max-w-2xl mb-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1e60aa] border border-blue-100 text-[11px] font-semibold uppercase tracking-wider mb-2",children:[l.jsx(ry,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Instant Engineering Estimator"})]}),l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"Calculate Plant Capacity & Infrastructure Parameters"}),l.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Estimate WTP/STP capacity (MLD), pumping power, filter sizing, and SCADA nodes for your target population."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-6 space-y-5",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-800 mb-2",children:[l.jsx("span",{children:"Target Population Served:"}),l.jsxs("span",{className:"text-[#1e60aa] font-bold text-sm",children:[e.toLocaleString()," People"]})]}),l.jsx("input",{type:"range",min:"5000",max:"500000",step:"5000",value:e,onChange:f=>n(Number(f.target.value)),className:"w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e60aa]"}),l.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 mt-1 font-medium",children:[l.jsx("span",{children:"5,000 (Village)"}),l.jsx("span",{children:"100,000 (Town)"}),l.jsx("span",{children:"500,000 (City)"})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-800 mb-2",children:"Supply Standard (CPHEEO / JJM Guidelines):"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{lpcd:55,label:"55 LPCD",sub:"Jal Jeevan Rural"},{lpcd:70,label:"70 LPCD",sub:"Nagar Parishad"},{lpcd:135,label:"135 LPCD",sub:"AMRUT 2.0 Urban"}].map(f=>l.jsxs("button",{onClick:()=>r(f.lpcd),className:`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${i===f.lpcd?"border-[#1e60aa] bg-blue-50/80 text-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300 text-slate-600"}`,children:[l.jsx("div",{className:"text-xs font-bold",children:f.label}),l.jsx("div",{className:"text-[10px] text-slate-500 mt-0.5",children:f.sub})]},f.lpcd))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-800 mb-2",children:"Raw Water Source:"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["River / Canal","Dam / Reservoir","Deep Borewell"].map(f=>l.jsx("button",{onClick:()=>a(f),className:`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${s===f?"border-[#1e60aa] bg-blue-50 text-[#1e60aa]":"border-slate-200 text-slate-600 hover:border-slate-300"}`,children:f},f))})]})]}),l.jsxs("div",{className:"lg:col-span-6 bg-gradient-to-br from-slate-900 to-[#1e3a5f] rounded-2xl p-6 text-white shadow-xl",children:[l.jsx("div",{className:"text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1",children:"Estimated Engineering Blueprint"}),l.jsxs("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:[c," ",l.jsx("span",{className:"text-xl font-bold text-sky-400",children:"MLD Plant"})]}),l.jsx("div",{className:"text-xs text-slate-300 mt-1",children:"Recommended Turnkey WTP System with automated SCADA"}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 my-5",children:[l.jsxs("div",{className:"bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10",children:[l.jsx("div",{className:"text-[10px] text-sky-200 uppercase font-semibold",children:"Filter Beds"}),l.jsxs("div",{className:"text-base font-bold text-white",children:[u," Gravity Sand Units"]})]}),l.jsxs("div",{className:"bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10",children:[l.jsx("div",{className:"text-[10px] text-sky-200 uppercase font-semibold",children:"Pump Drive Power"}),l.jsxs("div",{className:"text-base font-bold text-white",children:["~",h," HP Total"]})]}),l.jsxs("div",{className:"bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10",children:[l.jsx("div",{className:"text-[10px] text-sky-200 uppercase font-semibold",children:"Header Pipeline"}),l.jsx("div",{className:"text-base font-bold text-white",children:p})]}),l.jsxs("div",{className:"bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10",children:[l.jsx("div",{className:"text-[10px] text-sky-200 uppercase font-semibold",children:"SCADA RTU Nodes"}),l.jsxs("div",{className:"text-base font-bold text-white",children:[Math.max(4,Math.round(c*3))," IoT Gateways"]})]})]}),l.jsxs("button",{onClick:t,className:"w-full py-3 bg-[#009fd9] hover:bg-[#008bc0] text-white font-bold text-xs rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer",children:[l.jsxs("span",{children:["Request Detailed DPR / BOQ for ",c," MLD"]}),l.jsx(Kn,{className:"w-4 h-4"})]})]})]})]})}function wE({onNavigate:t,onSelectProject:e,onOpenQuote:n}){const[i,r]=ve.useState("All"),s=Qt(),a=Qt(),o=Qt();Qt();const c=Qt();return _t.projects.filter(u=>i==="All"?!0:u.category===i).slice(0,6),l.jsxs("div",{className:"w-full bg-[#f8fafc] text-slate-900 overflow-hidden",children:[l.jsx(yE,{onNavigate:t}),l.jsx("section",{className:"py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[l.jsxs("div",{ref:s.ref,className:"reveal-right lg:col-span-6 space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider",children:[l.jsx(ql,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"India's Premier Water & Automation Enterprise"})]}),l.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight",children:["Engineering ",l.jsx("span",{className:"shimmer-text",children:"Clean Water"})," & Smart Telemetry for Millions"]}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed",children:["Since 1998, ",l.jsx("strong",{children:"Orbit Engineering Solutions"})," has delivered 150+ turnkey mega water supply schemes across India. We engineer municipal Water Treatment Plants (WTP), Sewage Treatment (STP), Effluent Treatment (ETP), and integrate state-of-the-art Siemens & Schneider SCADA control systems."]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[l.jsx(hm,{value:150,suffix:"+",label:"Mega Schemes Delivered",sub:"Jal Jeevan Mission & AMRUT",color:"text-[#1e60aa]",delay:"delay-0"}),l.jsx(hm,{value:"Triple ISO",label:"Certified Excellence",sub:"9001, 14001, 45001",color:"text-emerald-600",delay:"delay-100"})]}),l.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-3",children:[l.jsxs("button",{onClick:()=>t("services"),className:"inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs shadow-md transition-all hover:scale-105 cursor-pointer glow-btn",children:[l.jsx("span",{children:"Explore Engineering Services"}),l.jsx(Kn,{className:"w-4 h-4"})]}),l.jsx("button",{onClick:()=>t("about"),className:"inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200 shadow-sm transition-all hover:scale-105 cursor-pointer",children:"27+ Years Legacy (Est. 1998)"})]})]}),l.jsx("div",{className:"reveal-left delay-150 lg:col-span-6 relative",children:l.jsxs("div",{className:"rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d",children:[l.jsx("img",{src:"/images/wtp_hero.jpg",alt:"Water Treatment Plant Architecture",onError:u=>{u.currentTarget.src="https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1200&q=80"},className:"w-full h-[360px] sm:h-[400px] object-cover"}),l.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 bg-[#1e60aa] px-3 py-1 rounded-full text-xs font-semibold w-max mb-1.5",children:[l.jsx(Xl,{className:"w-3.5 h-3.5"})," Turnkey WTP Infrastructure"]}),l.jsx("h3",{className:"text-lg font-bold",children:"50+ MLD Municipal & Industrial Plants"}),l.jsx("p",{className:"text-xs text-slate-300 mt-1",children:"Raw intake pumps, clarifiers, rapid sand filtration, and automated chlorination."})]})]})})]})}),l.jsx("section",{className:"reveal-up py-12 bg-white border-b border-slate-200",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[l.jsxs("div",{className:"reveal-scale delay-75 p-4 rounded-2xl bg-slate-50 border border-slate-100",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display",children:"₹200+ Cr"}),l.jsx("div",{className:"text-xs font-semibold text-slate-600 mt-1",children:"Water Schemes Executed"})]}),l.jsxs("div",{className:"reveal-scale delay-150 p-4 rounded-2xl bg-slate-50 border border-slate-100",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display",children:"150+ Schemes"}),l.jsx("div",{className:"text-xs font-semibold text-slate-600 mt-1",children:"JJM & Municipal Turnkey"})]}),l.jsxs("div",{className:"reveal-scale delay-200 p-4 rounded-2xl bg-slate-50 border border-slate-100",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-[#1e60aa] font-display",children:"27+ Years"}),l.jsx("div",{className:"text-xs font-semibold text-slate-600 mt-1",children:"Industry Leadership (Est. 1998)"})]}),l.jsxs("div",{className:"reveal-scale delay-250 p-4 rounded-2xl bg-slate-50 border border-slate-100",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-emerald-600 font-display",children:"Triple ISO"}),l.jsx("div",{className:"text-xs font-semibold text-slate-600 mt-1",children:"9001, 14001, 45001 Certified"})]})]})})}),l.jsx("section",{ref:a.ref,className:"py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx(SE,{})}),l.jsx("section",{className:"py-16 bg-slate-50/80 border-y border-slate-200 tech-grid-bg",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa] mb-1 flex items-center gap-1.5",children:[l.jsx(ay,{className:"w-3.5 h-3.5 text-amber-500"}),l.jsx("span",{children:"Turnkey Capabilities & Clean Energy"})]}),l.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-slate-900",children:"Engineering Solutions & Services"})]}),l.jsxs("button",{onClick:()=>t("services"),className:"inline-flex items-center gap-1.5 text-xs font-bold text-[#1e60aa] hover:text-[#165091] transition-colors cursor-pointer",children:[l.jsx("span",{children:"View All Services & Blueprint"}),l.jsx(El,{className:"w-4 h-4"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:_t.services.map(u=>l.jsxs("div",{onClick:()=>t("services"),className:"bg-white rounded-3xl p-6 border border-slate-200 shadow-sm card-3d cursor-pointer group hover:border-[#1e60aa] hover:shadow-xl transition-all flex flex-col justify-between gradient-border",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-100",children:[l.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover group-hover:scale-105 transition-all duration-500"}),l.jsx("div",{className:"absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1e60aa] shadow-sm",children:u.tag})]}),l.jsx("h3",{className:"text-base font-bold text-slate-900 group-hover:text-[#1e60aa] transition-colors leading-snug",children:u.title}),l.jsx("p",{className:"text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal",children:u.description}),l.jsx("div",{className:"mt-4 space-y-1.5 border-t border-slate-100 pt-3",children:u.features.slice(0,3).map((h,p)=>l.jsxs("div",{className:"flex items-start gap-1.5 text-xs text-slate-600",children:[l.jsx(Jn,{className:"w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"}),l.jsx("span",{className:"line-clamp-1",children:h})]},p))})]}),l.jsx("div",{className:"mt-5 pt-4 border-t border-slate-100 flex items-center justify-between",children:l.jsxs("span",{className:"text-xs font-bold text-[#1e60aa] flex items-center gap-1 group-hover:gap-2 transition-all",children:[l.jsx("span",{children:"Explore Technical Details"}),l.jsx(El,{className:"w-3.5 h-3.5"})]})})]},u.id))})]})}),l.jsx("section",{ref:o.ref,className:"py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsx(ME,{onOpenQuote:n})}),l.jsx("section",{ref:c.ref,className:"py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/40 text-slate-900 p-8 sm:p-12 relative overflow-hidden shadow-xl border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-8",children:[l.jsxs("div",{className:"max-w-xl space-y-2 relative z-10",children:[l.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-[#1e60aa]",children:"Direct Senior Engineering Access"}),l.jsx("h2",{className:"text-xl sm:text-2xl font-bold leading-tight text-slate-900",children:"Consult with Bhopal HQ for DPR, Tender BOQ or Site Audit"}),l.jsx("p",{className:"text-xs text-slate-600 font-normal",children:"Serving Madhya Pradesh, Uttar Pradesh, Chhattisgarh & nationwide under JJM, AMRUT 2.0 & Industrial norms."})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 shrink-0 relative z-10",children:[l.jsx("button",{onClick:n,className:"px-6 py-3.5 rounded-2xl bg-[#1e60aa] hover:bg-[#165091] text-white font-bold text-xs shadow-md transition-all hover:scale-105 cursor-pointer glow-btn",children:"Request Engineering Quote"}),l.jsx("a",{href:"tel:+917024128029",className:"px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-all text-center shadow-sm",children:"Call: +91 70241 28029"})]})]})})]})}function Uo({end:t,suffix:e,label:n}){const{ref:i,count:r}=Xf(t,2e3);return l.jsxs("div",{ref:i,className:"text-center",children:[l.jsxs("div",{className:"text-3xl sm:text-4xl font-bold text-[#1e60aa] tracking-tight",children:[r,e]}),l.jsx("div",{className:"text-xs text-slate-600 font-medium mt-1",children:n})]})}const bE=[{num:"01",title:"One Accountable Package",desc:"Intake, treatment, transmission, storage, electro-mechanical, instrumentation and SCADA delivered under a single unified engineering contract."},{num:"02",title:"Design-Build Integration",desc:"Hydraulic modelling, structural design, execution and trial runs done by internal teams, preventing costly inter-agency disputes and delays."},{num:"03",title:"Statutory Rigor",desc:"Strict adherence to CPHEEO, BIS 10500, IS 456, IS 3370 and CPCB norms, ensuring 100% statutory acceptance and smooth handover."},{num:"04",title:"Quality & Material Traceability",desc:"Mill test certificates, ultrasonic weld testing, non-destructive concrete testing (NDT), and hydrostatic pressure certification for every joint."},{num:"05",title:"SCADA-Native Engineering",desc:"Every civil sump, pump set and valve is engineered from day one with automated instrumentation ports and IoT communication telemetry."},{num:"06",title:"Guaranteed Commissioning Trials",desc:"Unconditional 72-hour continuous full-load water testing and 30-day performance stabilization before commercial asset handover."},{num:"07",title:"Lifecycle O&M Stewardship",desc:"We stand behind our assets with multi-year comprehensive AMC support, rapid spare parts deployment, and dedicated field engineer teams."}],EE=[{num:"01",title:"Unconditional Accountability",desc:"We operate as a unified design-build engineering entity, taking complete end-to-end responsibility from feasibility to 30-year lifecycle operation.",tag:"Single-Source Delivery"},{num:"02",title:"Engineering Rigor",desc:"Zero tolerance for substandard execution. Every hydraulic formula, structural pour, and weld conforms 100% to CPHEEO and BIS 10500 standards.",tag:"Statutory Excellence"},{num:"03",title:"Technological Innovation",desc:"Pioneering smart water grids across Madhya Pradesh with native Siemens/Schneider PLC panels, 4G cellular RTUs, and DMA leak telemetry.",tag:"SCADA & IoT"},{num:"04",title:"Environmental Stewardship",desc:"Preserving groundwater ecosystems through clean solar water pumping, Zero Liquid Discharge (ZLD) plants, and efficient energy utilization.",tag:"Sustainable Future"}];function TE({onNavigate:t,onOpenQuote:e}){const[n,i]=ve.useState("certifications"),r=Qt(),s=Qt(),a=[{id:"certifications",label:"ISO Certifications"},{id:"leadership",label:"Executive Leadership"},{id:"departments",label:"Departments"},{id:"offices",label:"Offices & Labs"}];return l.jsxs("div",{className:"w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24 selection:bg-[#1e60aa] selection:text-white",children:[l.jsx("div",{className:"fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0"}),l.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20",children:[l.jsxs("div",{ref:r.ref,className:"reveal-up text-center max-w-3xl mx-auto space-y-3",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1e60aa] border border-blue-100 text-xs font-semibold uppercase tracking-wider",children:[l.jsx(up,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Established 1998 in Bhopal, Madhya Pradesh"})]}),l.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight",children:"27+ Years of Engineering Solutions That Protect Lives & Water Resources"}),l.jsx("p",{className:"text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto",children:"From humble beginnings in Bhopal to managing ₹200+ Crore in state-level water infrastructure schemes, municipal WTPs, and smart SCADA grids across India."})]}),l.jsxs("div",{ref:s.ref,className:"reveal-scale rounded-3xl bg-white text-slate-900 p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-200/90",children:[l.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute -bottom-10 left-10 w-60 h-60 rounded-full bg-sky-100/30 blur-2xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center",children:[l.jsx(Uo,{end:27,suffix:"+",label:"Years of Engineering Legacy"}),l.jsx(Uo,{end:150,suffix:"+",label:"Mega Schemes Delivered"}),l.jsx(Uo,{end:200,suffix:" Cr+",label:"Portfolio Value (₹)"}),l.jsx(Uo,{end:80,suffix:"+",label:"Total Team Strength"})]}),l.jsx("div",{className:"relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80",children:[{label:"Government JJM & AMRUT Schemes",pct:70},{label:"Automation & SCADA Integration",pct:85},{label:"ISO Statutory Compliance Score",pct:100}].map((o,c)=>l.jsxs("div",{className:"bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-xs",children:[l.jsxs("div",{className:"flex justify-between text-[11px] text-slate-600 mb-1.5 font-medium",children:[l.jsx("span",{className:"font-semibold text-slate-700",children:o.label}),l.jsxs("span",{className:"font-bold text-[#1e60aa]",children:[o.pct,"%"]})]}),l.jsx("div",{className:"h-2 bg-slate-200/80 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full rounded-full transition-all duration-[1.6s] ease-out",style:{width:`${o.pct}%`,background:"linear-gradient(90deg, #1e60aa, #009fd9)",transitionDelay:`${c*200+400}ms`}})})]},c))})]}),l.jsxs("div",{className:"space-y-10",children:[l.jsxs("div",{className:"text-center space-y-2 max-w-2xl mx-auto",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100",children:[l.jsx(Y_,{className:"w-3.5 h-3.5 text-sky-600"})," Strategic Purpose"]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"Our Mission & Vision"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600",children:"Guided by engineering discipline and social responsibility, we build infrastructure that sustains human life for generations."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"reveal-bounce card-bounce bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden group",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#1e60aa] flex items-center justify-center mb-6 shadow-xs border border-blue-100 group-hover:scale-110 group-hover:bg-[#1e60aa] group-hover:text-white transition-all duration-300",children:l.jsx(oy,{className:"w-7 h-7"})}),l.jsx("div",{className:"text-xs uppercase tracking-[0.2em] font-bold text-[#1e60aa]",children:"Our Mission"}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-slate-900 mt-1 tracking-tight",children:"Engineering Potable Water Security for India"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal",children:"To design, construct, and maintain resilient water infrastructure—from raw river intake wells and turnkey multi-MLD treatment plants to extensive deep distribution pipelines and intelligent SCADA telemetry—ensuring safe, continuous potable water reaches every urban center, rural habitation, and industrial plant with zero-defect execution."}),l.jsxs("div",{className:"mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full",children:"✦ BIS 10500 Compliant"}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full",children:"✦ Zero-Leakage Networks"}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full",children:"✦ Rapid Disaster Response"})]})]}),l.jsxs("div",{className:"reveal-bounce card-bounce delay-150 bg-gradient-to-br from-[#1e60aa] via-[#1a5496] to-[#0f3b70] p-8 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group",children:[l.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none"}),l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-6 shadow-xs border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1e60aa] transition-all duration-300",children:l.jsx($_,{className:"w-7 h-7"})}),l.jsx("div",{className:"text-xs uppercase tracking-[0.2em] font-bold text-sky-300",children:"Our Vision"}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight",children:"The National Benchmark in Water Infrastructure"}),l.jsx("p",{className:"text-xs sm:text-sm text-blue-100 mt-3 leading-relaxed font-normal",children:"To stand as India's most trusted, technologically forward, and accountable water engineering enterprise—advancing smart sustainable water ecosystems through cutting-edge PLC automation, zero-leakage networks, and lifecycle stewardship that preserves precious water resources for future generations."}),l.jsxs("div",{className:"mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full",children:"✦ Pan-India Leadership"}),l.jsx("span",{className:"text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full",children:"✦ IoT & Cloud Telemetry"}),l.jsx("span",{className:"text-[11px] font-semibold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full",children:"✦ Ecological Preservation"})]})]})]}),l.jsxs("div",{className:"pt-4",children:[l.jsx("div",{className:"text-center mb-6",children:l.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:"The Principles That Guide Our Civil & Mechanical Works"})}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:EE.map((o,c)=>l.jsxs("div",{className:`reveal-bounce card-bounce delay-${c*75} bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#1e60aa] group`,children:[l.jsx("div",{className:"text-2xl font-light text-slate-300 font-mono mb-2 group-hover:text-[#1e60aa] transition-colors",children:o.num}),l.jsx("h4",{className:"text-sm font-bold text-slate-900 tracking-tight",children:o.title}),l.jsx("p",{className:"text-xs text-slate-600 mt-2 leading-relaxed",children:o.desc}),l.jsx("div",{className:"mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-[#1e60aa] uppercase tracking-wider",children:o.tag})]},c))})]})]}),l.jsxs("div",{className:"mt-14 space-y-8",children:[l.jsxs("div",{className:"text-center space-y-2 max-w-2xl mx-auto",children:[l.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#1e60aa]",children:"Organizational Structure"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"Credentials, Leadership & Facilities"})]}),l.jsx("div",{className:"flex items-center gap-1.5 p-1.5 bg-slate-200/60 rounded-2xl border border-slate-300/50 max-w-lg mx-auto",children:a.map(o=>l.jsx("button",{onClick:()=>i(o.id),className:`flex-1 px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${n===o.id?"bg-[#1e60aa] text-white shadow-sm font-semibold":"text-slate-600 hover:bg-white/60 font-medium"}`,children:o.label},o.id))}),n==="certifications"&&l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 animate-tab-content",children:_t.company.certifications.map((o,c)=>l.jsxs("div",{className:"card-bounce bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm group hover:border-[#1e60aa]",children:[l.jsx("div",{className:"w-11 h-11 rounded-2xl bg-blue-50 text-[#1e60aa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs",children:l.jsx(K_,{className:"w-5 h-5"})}),l.jsx("div",{className:"text-base font-bold text-slate-900",children:o.code}),l.jsx("div",{className:"text-xs font-semibold text-[#1e60aa] mt-0.5",children:o.title}),l.jsx("p",{className:"text-xs text-slate-600 mt-3 leading-relaxed",children:o.desc}),l.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700",children:[l.jsx(Jn,{className:"w-3.5 h-3.5 text-emerald-600"}),l.jsx("span",{children:"Valid & Active Compliance"})]})]},c))}),n==="leadership"&&l.jsx("div",{id:"leadership-team",className:"scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-tab-content",children:_t.company.leadership.map((o,c)=>l.jsxs("div",{className:"card-bounce bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#1e60aa]",children:[l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("img",{src:o.image,alt:o.name,className:"w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300"}),l.jsx("div",{className:"absolute -bottom-2 -right-2 w-7 h-7 rounded-xl bg-[#1e60aa] flex items-center justify-center shadow-md",children:l.jsx(dp,{className:"w-3.5 h-3.5 text-white"})})]}),l.jsxs("div",{className:"space-y-1 text-center sm:text-left",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-slate-900",children:o.name}),l.jsx("div",{className:"text-xs font-semibold text-[#1e60aa]",children:o.role}),l.jsxs("div",{className:"text-[11px] font-medium text-slate-500 flex items-center gap-1.5 justify-center sm:justify-start",children:[l.jsx(Pa,{className:"w-3 h-3 text-emerald-500"}),o.experience]}),l.jsx("p",{className:"text-xs text-slate-600 pt-2 leading-relaxed",children:o.focus})]})]},c))}),n==="departments"&&l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 animate-tab-content",children:_t.company.departments.map((o,c)=>l.jsxs("div",{className:"card-bounce bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:border-[#1e60aa]",children:[l.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-slate-900",children:[l.jsx("img",{src:o.banner,alt:o.name,onError:u=>{u.currentTarget.src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"},className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"}),l.jsxs("div",{className:"absolute top-3 right-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5",children:[l.jsx(Pg,{className:"w-3 h-3 text-sky-400"}),o.count]}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4",children:l.jsx("h3",{className:"text-white text-sm font-bold",children:o.name})})]}),l.jsxs("div",{className:"p-5",children:[l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:o.desc}),l.jsxs("div",{className:"mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium",children:[l.jsx(Jn,{className:"w-3.5 h-3.5 text-emerald-600"}),"Specialized Division"]})]})]},c))}),n==="offices"&&l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 animate-tab-content",children:_t.company.offices.map((o,c)=>l.jsxs("div",{className:"card-bounce bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm group hover:border-[#1e60aa] transition-all",children:[l.jsx("div",{className:"text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider mb-1",children:o.type}),l.jsx("h3",{className:"text-base font-bold text-slate-900 mb-2",children:o.name}),l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed mb-3",children:o.address}),l.jsx("div",{className:"text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4",children:o.role}),l.jsxs("a",{href:`tel:${o.phone}`,className:"text-[#1e60aa] text-xs font-bold hover:underline flex items-center gap-1.5",children:[l.jsx(Nr,{className:"w-3.5 h-3.5"}),o.phone]})]},c))})]}),l.jsxs("div",{className:"pt-10 space-y-12",children:[l.jsxs("div",{className:"text-center space-y-2 max-w-2xl mx-auto",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100 shadow-xs",children:[l.jsx(ql,{className:"w-3.5 h-3.5 text-sky-500"}),l.jsx("span",{children:"A Legacy of Proven Reliability"})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight",children:"27 Years of Engineering Milestones"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",children:"Tracing our journey from a specialized Bhopal water consultancy to a ₹200+ Crore turnkey water infrastructure enterprise."})]}),l.jsxs("div",{className:"relative max-w-5xl mx-auto",children:[l.jsx("div",{className:"absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#1e60aa] via-sky-400 to-emerald-400 sm:-translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(30,96,170,0.35)]"}),l.jsx("div",{className:"space-y-12 sm:space-y-16",children:[{year:"1998",era:"Founding Inception",title:"Company Founded in Bhopal",desc:"Orbit Engineering Solutions established by Manoj Tiwari and Vijay Tiwari with a focused vision: delivering zero-compromise hydraulic engineering and turnkey water infrastructure across Madhya Pradesh.",tag:"Inception in Bhopal",metric:"Bhopal Headquarters",icon:dp,side:"left"},{year:"2004",era:"Municipal Scale",title:"First Turnkey Municipal WTP",desc:"Engineered and commissioned our first landmark 10 MLD Water Treatment Plant for Nagar Palika, setting benchmark execution in rapid gravity sand filters, chemical dosing, and zero-defect civil basins.",tag:"10 MLD Turnkey WTP",metric:"Municipal Handover",icon:Xl,side:"right"},{year:"2010",era:"Automation & SCADA",title:"SCADA & Automation Division",desc:"Launched specialized control panel assembly and software telemetry division, deploying Siemens S7-1200/1500 & Schneider PLCs with 4G cellular RTUs for real-time remote water distribution control.",tag:"Siemens & Schneider PLCs",metric:"In-House Panel Fabrication",icon:Uf,side:"left"},{year:"2015",era:"National Missions",title:"Jal Jeevan Mission & AMRUT Empanelment",desc:"Officially empanelled as an approved turnkey engineering vendor for the national Har Ghar Jal / Jal Jeevan Mission and AMRUT 2.0 schemes, implementing multi-village piped water supply networks.",tag:"Approved JJM / AMRUT Partner",metric:"Multi-Village Schemes",icon:up,side:"right"},{year:"2020",era:"Statutory Benchmarks",title:"Triple ISO 9001 / 14001 / 45001",desc:"Achieved world-standard triple ISO certification simultaneously for Quality Management, Environmental Preservation, and Occupational Health & Safety, confirming zero-compromise governance.",tag:"Triple ISO Accredited",metric:"100% Quality Audited",icon:La,side:"left"},{year:"2024 - 2026",era:"National Scale & Cloud Telemetry",title:"₹200+ Crore Milestone & Smart Telemetry",desc:"Crossed ₹200+ Crore in cumulative executed schemes and 150+ successfully commissioned projects. Pioneering 24/7 central video wall SCADA command rooms, DMA leak detection, and PM KUSUM solar pumping.",tag:"₹200+ Cr Cumulative Portfolio",metric:"150+ Mega Schemes",icon:Pa,side:"right"}].map((o,c)=>{const u=o.icon,h=o.side==="left";return l.jsxs("div",{className:`reveal-bounce delay-${c*80} relative flex items-center ${h?"sm:flex-row":"sm:flex-row-reverse"} flex-col sm:flex-row pl-16 sm:pl-0 group/item`,children:[l.jsx("div",{className:"absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center",children:l.jsx("div",{className:"w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-sky-400/80 shadow-lg flex items-center justify-center group-hover/item:scale-120 group-hover/item:border-[#1e60aa] group-hover/item:shadow-sky-300/50 transition-all duration-300",children:l.jsx("div",{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#1e60aa] shadow-[0_0_8px_#1e60aa]"})})}),l.jsx("div",{className:`w-full sm:w-[calc(50%-42px)] ${h?"sm:pr-4":"sm:pl-4"}`,children:l.jsxs("div",{className:"bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1e60aa] card-bounce relative group/card",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[l.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#1e60aa] to-sky-500 shadow-xs",children:l.jsx("span",{children:o.year})}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider",children:o.era})]}),l.jsxs("div",{className:"flex items-start gap-3 mt-1",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-50 text-[#1e60aa] flex items-center justify-center shrink-0 border border-blue-100 group-hover/card:bg-[#1e60aa] group-hover/card:text-white transition-colors duration-300",children:l.jsx(u,{className:"w-4 h-4"})}),l.jsx("div",{children:l.jsx("h3",{className:"text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover/card:text-[#1e60aa] transition-colors leading-snug",children:o.title})})]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal",children:o.desc}),l.jsxs("div",{className:"mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs",children:[l.jsxs("span",{className:"text-[11px] font-semibold text-[#1e60aa] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center gap-1",children:[l.jsx(q_,{className:"w-3 h-3 text-emerald-600"}),o.tag]}),l.jsx("span",{className:"text-[11px] font-bold text-slate-700",children:o.metric})]})]})}),l.jsx("div",{className:"hidden sm:block w-[calc(50%-42px)]"})]},c)})})]})]}),l.jsxs("div",{className:"pt-12 space-y-10 border-t border-slate-200",children:[l.jsxs("div",{className:"text-center space-y-2.5 max-w-2xl mx-auto",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100",children:[l.jsx(La,{className:"w-3.5 h-3.5 text-emerald-600"})," Engineering Governance"]}),l.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight",children:"Seven Commitments to Asset Integrity"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",children:"Our engineering governance frameworks guarantee zero-leakage, CPHEEO compliance, and uninterrupted lifecycle performance."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[bE.map((o,c)=>l.jsxs("div",{className:`reveal-bounce card-bounce delay-${c*60} p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#1e60aa] space-y-3 group`,children:[l.jsx("div",{className:"text-3xl font-light text-slate-300 group-hover:text-[#1e60aa] transition-colors font-mono",children:o.num}),l.jsx("h3",{className:"text-base font-bold text-slate-900 tracking-tight",children:o.title}),l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed font-normal",children:o.desc})]},o.num)),l.jsxs("div",{className:"reveal-bounce card-bounce delay-400 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1e60aa] to-[#009fd9] text-white shadow-lg space-y-3 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-3xl font-light text-white/70 font-mono",children:"07"}),l.jsx("h3",{className:"text-base font-bold text-white tracking-tight mt-1",children:"Lifecycle O&M Stewardship"}),l.jsx("p",{className:"text-xs text-blue-50 leading-relaxed mt-2 font-normal",children:"Multi-year comprehensive AMC support, rapid spare parts deployment, and dedicated field engineer teams ready 24/7 across Madhya Pradesh and pan-India."})]}),l.jsxs("button",{onClick:e,className:"inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-[#1e60aa] font-bold text-xs shadow hover:bg-blue-50 transition-colors cursor-pointer",children:[l.jsx("span",{children:"Consult Our Engineering Office"}),l.jsx(Kn,{className:"w-3.5 h-3.5"})]})]})]})]})]})]})}const nu=[{number:"01",id:"wtp",code:"01.1",sector:"01 — Water Supply Infrastructure",title:"Water Treatment Plants",description:"Design support, construction, equipment installation, commissioning assistance and all allied civil works — delivered as one accountable package.",pills:["Design support","Commissioning","Allied civil","Turnkey Multi-MLD"],image:"/images/hero-wtp-BGjLUC-Q.jpg",capacity:"5 to 100+ MLD",standard:"BIS 10500 / CPHEEO",features:["Raw intake channels, flash mixers & clariflocculators","Rapid Gravity Sand Filter (RGSF) beds with auto backwash","Chemical dosing rooms (Alum, Lime, PAC) with safety scrubbers","Chlorine contact tanks & automated electro-chlorination"],highlights:["Zero Liquid Discharge (ZLD) option","SCADA linked backwash cycles","CPCB compliant continuous discharge"]},{number:"02",id:"intake",code:"01.2",sector:"01 — Water Supply Infrastructure",title:"Intake Wells",description:"Construction of intake structures for reliable raw water abstraction from rivers, reservoirs and dams, engineered for seasonal variation and long service life.",pills:["Rivers","Reservoirs","Dams","Jack-wells"],image:"/images/intake-well-BztrG-Xc.jpg",capacity:"Heavy River/Dam Duty",standard:"IS 456 / IRC Water Norms",features:["Reinforced concrete intake wells with jack-well substructures","Connecting gravity conduits and trash rack screen mechanisms","Submersible & vertical turbine pump mounting plinths","Hydraulic protection against seasonal monsoon scour and floods"],highlights:["Silt exclusion bays","Emergency bypass sluice gates","4-season drawdown calculation"]},{number:"03",id:"oht",code:"01.3",sector:"01 — Water Supply Infrastructure",title:"Overhead Tanks",description:"Elevated service reservoirs built to secure uninterrupted distribution and stable pressure across the network they serve.",pills:["Elevated storage","Pressure head","Continuity","IS 3370"],image:"/images/oht-DhEXxxnQ.jpg",capacity:"50 KL to 5000 KL",standard:"IS 3370 Concrete Standards",features:["Watertight underground & ground-level Clear Water Reservoirs","Elevated Service Reservoirs (OHT) with slip-form concrete staging","Waterproofing with food-grade epoxy barrier coatings","Hydrostatic testing for zero-leakage certification"],highlights:["Ultrasonic depth telemetry","Chlorine booster dosing ports","Overflow & wash-out piping"]},{number:"04",id:"pump-house",code:"01.4",sector:"01 — Water Supply Infrastructure",title:"Pump Houses",description:"Civil and electro-mechanical infrastructure for efficient water pumping systems, from foundation to energised plant.",pills:["Civil works","Electro-mech","Efficiency","Gantry cranes"],image:"/images/pump-house-rehbpR99.jpg",capacity:"High-Capacity Pumping",standard:"IS 1710 Pumping Norms",features:["Vibration-damped inertia blocks and equipment foundations","Overhead electric traveling (EOT) crane gantry integration","Ventilated electrical motor control center (MCC) chambers","Acoustic enclosures and anti-surge pressure relief pits"],highlights:["Precision alignment tolerances","Heavy cable trench networks","Dewatering sump integration"]},{number:"05",id:"pipelines",code:"01.5",sector:"01 — Water Supply Infrastructure",title:"Pipeline Networks",description:"Laying, testing, commissioning and maintenance of transmission and distribution pipelines across demanding terrain.",pills:["Laying","Testing","Maintenance","DI / HDPE / MS"],image:"/images/pipeline-3e9YAzse.jpg",capacity:"Dia 100mm to 1600mm",standard:"IS 4984 / IS 8329 (DI/HDPE)",features:["Heavy Ductile Iron (DI K7/K9) and Mild Steel (MS) pipeline laying","High-Density Polyethylene (HDPE) electrofusion & butt jointing","Hydraulic thrust block design and pipeline anchor blocks","Hydrostatic field pressure testing up to 1.5x working pressure"],highlights:["GIS GPS pipeline mapping","Air valve & scour valve chambers","DMA leak management"]},{number:"06",id:"scada",code:"02.2",sector:"02 — Electro-Mechanical Works & SCADA",title:"SCADA & Automation",description:"Siemens & Schneider PLC control panels, cellular 4G RTUs, and central master video wall control rooms with 24/7 cloud telemetry.",pills:["Siemens PLC","4G RTU","DMA Leaks","Cloud Telemetry"],image:"/images/scada-JO4jHDve.jpg",capacity:"Multi-Site Master SCADA",standard:"IEC 61131-3 / Modbus TCP",features:["Custom IP65 PLC panels with Siemens S7-1200/1500 & Schneider M340","Central SCADA video wall command room setup with operator consoles","Remote Terminal Units (RTU) with dual SIM 4G/GSM/LoRa uplink","District Metered Area (DMA) balance & Non-Revenue Water (NRW) leak detection"],highlights:["Cloud dashboard & mobile app","Automated valve actuator control","Zero-latency fail-safe alarms"]},{number:"07",id:"solar",code:"02.5",sector:"02 — Electro-Mechanical Works & SCADA",title:"Solar Pumping & Clean Energy",description:"Turnkey solar photovoltaic submersible pumping arrays under PM KUSUM and floating solar PV arrays with hybrid VFD drives.",pills:["PM KUSUM","Floating Solar","Hybrid VFD","Zero Carbon"],image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",capacity:"3 HP to 50+ HP Pumps",standard:"PM KUSUM Tier-1 / MNRE",features:["Solar-powered submersible pumping stations for rural water supply","Floating solar photovoltaic arrays on raw water reservoirs & canals","High-efficiency MPPT solar VFD drive inverters (> 99.2% efficiency)","Automatic solar-to-grid auto-switch for 24/7 continuous water delivery"],highlights:["Remote solar inverter telemetry","Zero carbon pumping footprint","MNRE approved Tier-1 panels"]},{number:"08",id:"om-amc",code:"02.6",sector:"02 — Electro-Mechanical Works & SCADA",title:"Operation & Maintenance (O&M)",description:"Lifelong preventative maintenance regimes, sensor NABL calibration certificates, critical spares stock, and dedicated engineers.",pills:["24/7 AMC","< 4h Response","NABL Calibration","CPCB Sync"],image:"/images/electro-mech-BjrTidAv.jpg",capacity:"24/7/365 Pan-India",standard:"ISO 9001 / ISO 14001",features:["Annual Maintenance Contracts (AMC) with guaranteed < 4h response in MP","Scheduled preventative pump overhauls, gland packing & bearing lube","Annual sensor NABL recalibration certificates and compliance logs","Real-time CPCB cloud data logging & emergency DG power failover"],highlights:["Dedicated emergency fleet","On-site sensor calibration lab","Pan-MP rapid response"]}],pm=[{code:"01.01",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Water Treatment Plants (WTP)",image:"/images/hero-wtp-BGjLUC-Q.jpg",discId:"wtp"},{code:"01.02",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Intake Well Construction",image:"/images/intake-well-BztrG-Xc.jpg",discId:"intake"},{code:"01.03",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Clear Water Reservoirs (CWR)",image:"/images/reservoir-D5_YW2_r.jpg",discId:"oht"},{code:"01.04",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Pump House Construction",image:"/images/pump-house-rehbpR99.jpg",discId:"pump-house"},{code:"01.05",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Overhead Tank (OHT) Construction",image:"/images/oht-DhEXxxnQ.jpg",discId:"oht"},{code:"01.06",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Water Distribution Networks",image:"/images/network-LUJb9Wxw.jpg",discId:"pipelines"},{code:"01.07",sector:"WATER SUPPLY INFRASTRUCTURE",title:"Rising Main Pipelines",image:"/images/pipeline-3e9YAzse.jpg",discId:"pipelines"},{code:"02.01",sector:"ELECTRO-MECHANICAL WORKS",title:"Pump Installation & Erection",image:"/images/electro-mech-BjrTidAv.jpg",discId:"pump-house"},{code:"02.02",sector:"ELECTRO-MECHANICAL WORKS",title:"SCADA Integration & Command",image:"/images/scada-JO4jHDve.jpg",discId:"scada"},{code:"02.03",sector:"ELECTRO-MECHANICAL WORKS",title:"Flow Meters & Quality Analyzers",image:"/images/flow-meter-DSWy7kTd.jpg",discId:"scada"},{code:"02.04",sector:"ELECTRO-MECHANICAL WORKS",title:"Valves & Hydraulic Surge Control",image:"/images/valves-Cn1fyoyr.jpg",discId:"pipelines"},{code:"02.05",sector:"ELECTRO-MECHANICAL WORKS",title:"Solar Water Pumping (PM KUSUM)",image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",discId:"solar"},{code:"02.06",sector:"ELECTRO-MECHANICAL WORKS",title:"24/7 O&M + Comprehensive AMC",image:"/images/electro-mech-BjrTidAv.jpg",discId:"om-amc"}];function AE(){const[t,e]=ve.useState(50),n=ve.useRef(null),i=ve.useRef(!1),r=a=>{if(!n.current)return;const o=n.current.getBoundingClientRect(),c=Math.max(0,Math.min(a-o.left,o.width));e(c/o.width*100)},s=a=>{a.touches&&a.touches[0]&&r(a.touches[0].clientX)};return l.jsxs("div",{ref:n,onMouseDown:()=>{i.current=!0},onMouseUp:()=>{i.current=!1},onMouseLeave:()=>{i.current=!1},onMouseMove:a=>{i.current&&r(a.clientX)},onTouchMove:s,className:"relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize border border-slate-200/90 shadow-xl bg-slate-900",children:[l.jsx("img",{src:"/images/reservoir-D5_YW2_r.jpg",alt:"After: Architectural Commissioned Reservoir",className:"absolute inset-0 w-full h-full object-cover pointer-events-none"}),l.jsx("div",{className:"absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-md border border-white/20 z-10 pointer-events-none",children:"AFTER"}),l.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{width:`${t}%`},children:[l.jsx("img",{src:"/images/hero-wtp-BGjLUC-Q.jpg",alt:"Before: Commissioned Treatment Facility",className:"absolute inset-0 w-full h-full object-cover max-w-none",style:{width:n.current?`${n.current.clientWidth}px`:"100%"}}),l.jsx("div",{className:"absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-md border border-white/20 z-10 pointer-events-none",children:"BEFORE"})]}),l.jsx("div",{className:"absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] pointer-events-none z-20 flex items-center justify-center",style:{left:`${t}%`},children:l.jsx("div",{className:"w-9 h-9 -ml-[18px] rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-white/80 flex items-center justify-center text-slate-800 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform",children:l.jsx("span",{className:"text-[12px] font-medium text-slate-800 tracking-tighter select-none",children:"‹ ›"})})})]})}function CE({onOpenQuote:t}){const[e,n]=ve.useState(null);return l.jsxs("div",{className:"w-full bg-[#fbfbfb] text-slate-900 font-sans selection:bg-[#1e60aa] selection:text-white",children:[l.jsxs("div",{className:"relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden bg-slate-900 flex items-center justify-center text-center",children:[l.jsx("img",{src:"/images/wtp_hero.jpg",alt:"Water Treatment Plant Infrastructure",onError:i=>{i.currentTarget.src="/images/hero-wtp-BGjLUC-Q.jpg"},className:"absolute inset-0 w-full h-full object-cover opacity-90 scale-102 transition-transform duration-1000"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50"}),l.jsxs("div",{className:"relative z-10 px-4 max-w-4xl mx-auto space-y-3 pt-12",children:[l.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg",children:"Our Services"}),l.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-100 font-medium max-w-2xl mx-auto drop-shadow leading-relaxed",children:"Comprehensive water infrastructure solutions from concept to maintenance"})]})]}),l.jsx("div",{className:"w-full bg-[#1e60aa] border-y border-[#175497] py-3 text-white overflow-hidden shadow-md",children:l.jsx("div",{className:"animate-ribbon-ticker flex items-center whitespace-nowrap select-none font-bold text-xs sm:text-sm tracking-[0.25em] uppercase",children:Array.from({length:4}).map((i,r)=>l.jsxs("span",{className:"flex items-center",children:[l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," EXCELLENCE",l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," RELIABILITY",l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," PRECISION",l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," INNOVATION",l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," SUSTAINABILITY",l.jsx("span",{className:"mx-3 text-sky-300",children:"✦"})," AUTOMATION"]},r))})}),l.jsxs("section",{className:"relative py-16 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.04]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%231e60aa' stroke-width='1.5'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%231e60aa' stroke-width='1.5'/%3E%3C/svg%3E")`,backgroundSize:"56px 100px"}}),l.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#1e60aa] bg-blue-50 border border-blue-100",children:[l.jsx("span",{children:"✦"})," WHAT WE DELIVER"]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight",children:["Engineering ",l.jsx("span",{className:"text-[#009fd9]",children:"Excellence"})]}),l.jsx("p",{className:"max-w-2xl mx-auto text-sm sm:text-base text-slate-600 font-normal leading-relaxed",children:"From multi-MLD turnkey treatment plants and intake jack-wells to deep distribution pipelines and centralized SCADA command rooms, we provide end-to-end accountability across the entire water cycle."}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6",children:[l.jsxs("div",{className:"bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-[#1e60aa]",children:"₹200+ Cr"}),l.jsx("div",{className:"text-xs text-slate-500 font-semibold mt-0.5",children:"Executed Volume"})]}),l.jsxs("div",{className:"bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"8+ Disciplines"}),l.jsx("div",{className:"text-xs text-slate-500 font-semibold mt-0.5",children:"Core Engineering Lines"})]}),l.jsxs("div",{className:"bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-emerald-600",children:"100%"}),l.jsx("div",{className:"text-xs text-slate-500 font-semibold mt-0.5",children:"BIS 10500 Compliant"})]}),l.jsxs("div",{className:"bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center",children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-amber-600",children:"27+ Years"}),l.jsx("div",{className:"text-xs text-slate-500 font-semibold mt-0.5",children:"Legacy Since 1998"})]})]})]})]}),l.jsxs("section",{className:"py-14 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e60aa] bg-blue-50 border border-blue-100 mb-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),l.jsx("span",{children:"LIVE CONTINUOUS CHAIN"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"One continuous chain of custody."}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-500 mt-1 font-medium",children:"The range moves continuously on its own. Tap or hover over any card to pause and inspect technical blueprint."})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 font-semibold bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs",children:[l.jsx("span",{className:"text-sky-600 font-bold",children:"✦ Auto-gliding"}),l.jsx("span",{className:"text-slate-300",children:"|"}),l.jsx("span",{children:"Hover to pause"})]})]}),l.jsxs("div",{className:"relative w-full overflow-hidden select-none py-2 group",children:[l.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-20 pointer-events-none"}),l.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-20 pointer-events-none"}),l.jsx("div",{className:"animate-cards-marquee flex items-center gap-6",children:[...pm,...pm].map((i,r)=>l.jsxs("div",{onClick:()=>{const s=nu.find(a=>a.id===i.discId)||nu[0];n(s)},className:"w-[260px] sm:w-[290px] h-[380px] sm:h-[420px] shrink-0 rounded-2xl overflow-hidden relative group/card cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-slate-200/90 bg-slate-900",children:[l.jsx("img",{src:i.image,alt:i.title,className:"absolute inset-0 w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20"}),l.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-center justify-between z-10",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold text-amber-300/90 tracking-wider bg-slate-950/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10",children:i.code}),l.jsx("div",{className:"w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xs group-hover/card:bg-[#1e60aa] transition-colors",children:l.jsx(ly,{className:"w-3.5 h-3.5"})})]}),l.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-5 z-10 space-y-2.5",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow",children:i.title}),l.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/15 text-[10px] font-semibold text-slate-300 uppercase tracking-wider",children:[l.jsx("span",{children:i.sector}),l.jsx("span",{className:"text-sky-300 text-sm font-bold group-hover/card:translate-x-1 group-hover/card:text-white transition-all",children:"+"})]})]})]},r))})]})]}),l.jsx("section",{className:"py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32",children:nu.map((i,r)=>{const s=r%2===0;return l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center",children:[l.jsx("div",{className:`reveal-scale delay-75 lg:col-span-7 ${s?"lg:order-1":"lg:order-2"}`,children:l.jsxs("div",{onClick:()=>n(i),className:"rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/10] sm:aspect-[16/9] relative group cursor-pointer bg-slate-100",children:[l.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6",children:l.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md",children:[l.jsx("span",{children:"Explore Technical Blueprint"}),l.jsx(W_,{className:"w-3.5 h-3.5 text-[#1e60aa]"})]})})]})}),l.jsxs("div",{className:`reveal-up delay-150 lg:col-span-5 space-y-5 ${s?"lg:order-2":"lg:order-1"}`,children:[l.jsx("div",{className:"text-6xl sm:text-7xl lg:text-8xl font-light text-slate-300 font-display leading-none select-none -mb-2",children:i.number}),l.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight",children:i.title}),l.jsx("p",{className:"text-sm sm:text-base text-slate-600 font-normal leading-relaxed",children:i.description}),l.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:i.pills.map(a=>l.jsx("span",{className:"text-xs font-medium text-slate-600 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-xs hover:border-[#1e60aa] hover:text-[#1e60aa] transition-colors",children:a},a))}),l.jsxs("div",{className:"pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400",children:"Capacity:"})," ",l.jsx("strong",{className:"text-slate-700",children:i.capacity})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400",children:"Standard:"})," ",l.jsx("strong",{className:"text-[#1e60aa]",children:i.standard})]})]}),l.jsx("div",{className:"pt-1",children:l.jsxs("button",{onClick:()=>n(i),className:"inline-flex items-center gap-2 text-xs font-bold text-[#1e60aa] hover:text-[#165091] group cursor-pointer",children:[l.jsx("span",{children:"View Technical Scope & Deliverables"}),l.jsx(Kn,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})})]})]},i.id)})}),l.jsx("section",{className:"py-20 sm:py-28 bg-[#fbfbfb] border-y border-slate-200/80 overflow-hidden",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",children:[l.jsxs("div",{className:"reveal-up delay-75 lg:col-span-5 space-y-4",children:[l.jsx("div",{className:"text-xs uppercase tracking-[0.25em] font-bold text-slate-400",children:"SITE TRANSFORMATION"}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]",children:"From raw ground to a working asset."}),l.jsx("p",{className:"text-sm sm:text-base text-slate-500 font-normal leading-relaxed pt-1",children:"Drag the handle to compare an untouched site condition with a commissioned facility of the type we deliver."})]}),l.jsx("div",{className:"reveal-scale delay-150 lg:col-span-7",children:l.jsx(AE,{})})]})})}),l.jsx("section",{className:"py-14 bg-gradient-to-r from-blue-50/70 via-sky-50/50 to-white border-t border-slate-200",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8",children:[l.jsxs("div",{className:"space-y-3 max-w-2xl text-center lg:text-left",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-center lg:justify-start gap-2",children:[l.jsx("span",{className:"text-[10px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs",children:"MCA Corporate Registered"}),l.jsx("span",{className:"text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200",children:"Triple ISO 9001/14001/45001"}),l.jsx("span",{className:"text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200",children:"IndiaMART Verified Seller"})]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"Ready to submit a DPR, tender or turnkey scheme enquiry?"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed",children:"Our engineering office in Bhopal prepares complete technical scopes, BOM estimates, and execution schedules within 24 hours."})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 shrink-0",children:[l.jsxs("a",{href:_t.company.contact.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all hover:scale-105 w-full sm:w-auto",children:[l.jsx(Zn,{className:"w-4 h-4"}),l.jsx("span",{children:"Direct WhatsApp Discussion"})]}),l.jsxs("button",{onClick:t,className:"inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e60aa] hover:bg-[#165091] text-white font-semibold text-xs rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer glow-btn w-full sm:w-auto",children:[l.jsx("span",{children:"Request Detailed Proposal"}),l.jsx(Kn,{className:"w-4 h-4"})]})]})]})}),e&&l.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in",onClick:()=>n(null),children:l.jsxs("div",{className:"bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8",onClick:i=>i.stopPropagation(),children:[l.jsxs("div",{className:"relative h-48 sm:h-56 bg-slate-900 overflow-hidden",children:[l.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"}),l.jsx("button",{onClick:()=>n(null),className:"absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer",children:"✕"}),l.jsxs("div",{className:"absolute bottom-4 left-6 right-6",children:[l.jsxs("div",{className:"text-[11px] font-bold text-amber-300 uppercase tracking-widest",children:[e.code," · ",e.sector]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mt-0.5",children:e.title})]})]}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto",children:[l.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:e.description}),l.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400 block",children:"Execution Capacity"}),l.jsx("span",{className:"font-bold text-slate-800 text-sm",children:e.capacity})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400 block",children:"Applicable Standard"}),l.jsx("span",{className:"font-bold text-[#1e60aa] text-sm",children:e.standard})]})]}),l.jsxs("div",{className:"space-y-2.5",children:[l.jsx("h4",{className:"text-xs font-bold text-slate-900 uppercase tracking-wider",children:"Technical Specifications & Works Included"}),l.jsx("div",{className:"space-y-2",children:e.features.map((i,r)=>l.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-slate-700",children:[l.jsx(Jn,{className:"w-4 h-4 text-[#1e60aa] shrink-0 mt-0.5"}),l.jsx("span",{children:i})]},r))})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3",children:[l.jsxs("a",{href:`https://wa.me/919425008546?text=${encodeURIComponent(`Hello Orbit Engineering, I am interested in technical scope details for: ${e.title}`)}`,target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-1/2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-all hover:scale-102",children:[l.jsx(Zn,{className:"w-4 h-4"}),l.jsx("span",{children:"Enquire via WhatsApp"})]}),l.jsxs("button",{onClick:()=>{n(null),t()},className:"w-full sm:w-1/2 py-2.5 px-4 bg-[#1e60aa] hover:bg-[#165091] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-all hover:scale-102 cursor-pointer",children:[l.jsx("span",{children:"Request Full DPR Estimate"}),l.jsx(Kn,{className:"w-3.5 h-3.5"})]})]})]})]})})]})}function RE({onOpenQuote:t}){const[e,n]=ve.useState(null),i=Qt(),r=Qt(),s=Qt(),a=[{val:50,suffix:"+",label:"Government Authorities",color:"text-[#1e60aa]",bg:"bg-blue-50",border:"border-blue-100"},{val:30,suffix:"+",label:"Industrial Clients",color:"text-emerald-700",bg:"bg-emerald-50",border:"border-emerald-100"},{val:5,suffix:"M+",label:"People Benefited",color:"text-purple-700",bg:"bg-purple-50",border:"border-purple-100"},{val:12,suffix:"+",label:"Districts Covered",color:"text-amber-700",bg:"bg-amber-50",border:"border-amber-100"}];return l.jsxs("div",{className:"w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24",children:[l.jsx("div",{className:"fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0"}),l.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{ref:i.ref,className:"reveal-up text-center max-w-2xl mx-auto space-y-2.5",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider",children:[l.jsx(ql,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Trusted Partnerships & Proven Track Record"})]}),l.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight",children:"Government & Industry Ecosystem"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",children:"Proudly engineering sustainable water infrastructure for state governments, municipal corporations, and India's largest private manufacturers."})]}),l.jsx("div",{className:"mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4",children:a.map((o,c)=>{const{ref:u,count:h}=Xf(o.val,2e3);return l.jsxs("div",{ref:u,className:`reveal-bounce delay-${c*100} ${o.bg} ${o.border} border rounded-2xl p-5 text-center hover-lift`,children:[l.jsxs("div",{className:`text-2xl font-semibold tracking-tight ${o.color}`,children:[h,o.suffix]}),l.jsx("div",{className:"text-xs text-slate-600 font-medium mt-1",children:o.label})]},c)})}),l.jsxs("div",{ref:r.ref,className:"mt-16",children:[l.jsxs("div",{className:"reveal-right mb-8 flex items-end justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa]",children:"Public Sector Leadership"}),l.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-slate-900 mt-0.5",children:"Government Water Authorities"})]}),l.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-xs text-slate-500",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),l.jsx("span",{className:"font-medium",children:"50+ Active Partnerships"})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:_t.ecosystem.government.map((o,c)=>l.jsxs("div",{onClick:()=>n(e===c?null:c),className:`reveal-bounce card-bounce delay-${Math.min(c*80,500)} bg-white p-5 rounded-3xl border shadow-sm flex items-center gap-4 cursor-pointer transition-all ${e===c?"border-[#1e60aa] shadow-md":"border-slate-200/90 hover:border-[#1e60aa]/50"}`,children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-1",children:l.jsx("img",{src:o.logo,alt:o.name,className:"w-full h-full object-contain",onError:u=>{u.currentTarget.style.display="none"}})}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:o.name}),l.jsx("p",{className:"text-[11px] text-[#1e60aa] font-medium mt-0.5",children:o.tag}),e===c&&l.jsx("div",{className:"mt-2 pt-2 border-t border-slate-100 animate-in fade-in duration-200",children:l.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium",children:[l.jsx(Jn,{className:"w-3.5 h-3.5"}),"Active Engineering Partner"]})})]})]},c))})]}),l.jsxs("div",{ref:s.ref,className:"mt-20",children:[l.jsxs("div",{className:"reveal-left mb-8",children:[l.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-[#1e60aa]",children:"Private Industry Excellence"}),l.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-slate-900 mt-0.5",children:"Industrial & Corporate Clients"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:_t.ecosystem.industrial.map((o,c)=>l.jsxs("div",{className:`reveal-bounce card-bounce delay-${Math.min(c*75,450)} bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#1e60aa] group`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("span",{className:"text-[11px] font-medium text-[#1e60aa] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100",children:o.domain}),l.jsxs("span",{className:"text-[11px] text-slate-400 flex items-center gap-1",children:[l.jsx(ey,{className:"w-3 h-3"}),o.location]})]}),l.jsx("h3",{className:"text-base font-semibold text-slate-900 group-hover:text-[#1e60aa] transition-colors",children:o.name}),l.jsx("p",{className:"text-xs text-slate-600 mt-2 leading-relaxed",children:o.work}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs",children:[l.jsxs("span",{className:"font-medium text-emerald-700 flex items-center gap-1.5",children:[l.jsx(Uf,{className:"w-3.5 h-3.5 text-emerald-500"}),"Turnkey Automation"]}),l.jsx(Jn,{className:"w-4 h-4 text-emerald-500"})]})]},c))})]}),l.jsxs("div",{className:"mt-20 reveal-scale bg-gradient-to-r from-amber-50/80 via-blue-50/50 to-sky-50/60 text-slate-900 rounded-3xl p-8 sm:p-12 shadow-lg border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none"}),l.jsxs("div",{className:"space-y-2.5 max-w-xl relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"}),l.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-700",children:"Verified Marketplace Credential"})]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-slate-900",children:"Trust Certified on IndiaMART"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 font-normal",children:"Orbit Engineering Solutions is a verified supplier on IndiaMART with 150+ 5-star customer ratings across Bhopal, Madhya Pradesh and pan-India."})]}),l.jsxs("a",{href:_t.company.contact.indiamart,target:"_blank",rel:"noopener noreferrer",className:"relative z-10 px-6 py-3.5 rounded-2xl bg-[#1e60aa] text-white font-bold text-xs shadow-md hover:bg-[#165091] transition-all hover:scale-105 flex items-center gap-2 shrink-0 glow-btn",children:[l.jsx("span",{children:"Visit Verified Store"}),l.jsx(Ng,{className:"w-4 h-4"})]})]})]})]})}function NE({texts:t}){const[e,n]=ve.useState(0),[i,r]=ve.useState(""),[s,a]=ve.useState(0),[o,c]=ve.useState(!1);return ve.useEffect(()=>{const u=t[e],p=setTimeout(()=>{!o&&s<u.length?(r(u.slice(0,s+1)),a(f=>f+1)):!o&&s===u.length?setTimeout(()=>c(!0),1400):o&&s>0?(r(u.slice(0,s-1)),a(f=>f-1)):(c(!1),n(f=>(f+1)%t.length))},o?35:65);return()=>clearTimeout(p)},[s,o,e]),l.jsxs("span",{className:"text-[#1e60aa] font-semibold",children:[i,l.jsx("span",{className:"animate-pulse",children:"|"})]})}function PE(){const t=[{icon:"🟢",text:"Engineers Online Now"},{icon:"⚡",text:"Avg. Response: 2 Hours"},{icon:"📍",text:"Serving 12+ Districts in MP"},{icon:"🏆",text:"150+ Projects Completed"}],[e,n]=ve.useState(0);return ve.useEffect(()=>{const i=setInterval(()=>n(r=>(r+1)%t.length),2800);return()=>clearInterval(i)},[]),l.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600 animate-in fade-in duration-300",children:[l.jsx("span",{children:t[e].icon}),l.jsx("span",{className:"font-medium",children:t[e].text})]},e)}function LE(){const t=[{name:"MPUDC",action:"requested BOQ",ago:"3 min ago"},{name:"NPCL",action:"inquired about SCADA",ago:"11 min ago"},{name:"Indore Municipal",action:"viewed WTP services",ago:"28 min ago"}],[e,n]=ve.useState(0),[i,r]=ve.useState(!0);return ve.useEffect(()=>{const s=setInterval(()=>{r(!1),setTimeout(()=>{n(a=>(a+1)%t.length),r(!0)},400)},5e3);return()=>clearInterval(s)},[]),i?l.jsxs("div",{className:"animate-in slide-in-from-left-3 fade-in duration-300 flex items-center gap-3 bg-white border border-slate-200 shadow-md rounded-2xl px-4 py-2.5",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-[#1e60aa] to-sky-400 flex items-center justify-center text-white text-[11px] font-bold shrink-0",children:t[e].name[0]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-900",children:t[e].name}),l.jsxs("div",{className:"text-[11px] text-slate-500",children:[t[e].action," · ",l.jsx("span",{className:"text-[#1e60aa]",children:t[e].ago})]})]})]}):null}const ko=[{id:"wtp",label:"Water Treatment Plant (WTP / STP / RO)",icon:"💧",color:"border-blue-300 bg-blue-50 text-blue-800"},{id:"scada",label:"SCADA & PLC Automation",icon:"⚙️",color:"border-purple-300 bg-purple-50 text-purple-800"},{id:"jjm",label:"JJM / AMRUT Telemetry Scheme",icon:"🏛️",color:"border-emerald-300 bg-emerald-50 text-emerald-800"},{id:"meters",label:"Flow Meters & Water Analyzers",icon:"📊",color:"border-amber-300 bg-amber-50 text-amber-800"},{id:"amc",label:"Annual Maintenance Contract (AMC)",icon:"🔧",color:"border-slate-300 bg-slate-50 text-slate-800"},{id:"solar",label:"Solar Pump System / PM KUSUM",icon:"☀️",color:"border-orange-300 bg-orange-50 text-orange-800"}];function DE(){var x,v,y,L;const[t,e]=ve.useState({name:"",phone:"",email:"",organization:"",serviceType:"Water Treatment Plant (WTP / STP / RO / ETP)",message:"",selectedService:null}),[n,i]=ve.useState(!1),[r,s]=ve.useState(1),[a,o]=ve.useState(null),[c,u]=ve.useState(0),h=Qt(),p=Qt(),f=Qt(),m=T=>{T.preventDefault(),i(!0);try{Ku({particleCount:120,spread:80,origin:{y:.55},colors:["#1e60aa","#38bdf8","#34d399"]}),setTimeout(()=>Ku({particleCount:60,spread:120,origin:{y:.45},angle:60,colors:["#f59e0b","#fff"]}),300)}catch{}},_=()=>{const T=`Hello Orbit Engineering Solutions,%0A%0AName: ${t.name||"Client"}%0AOrg: ${t.organization||"N/A"}%0APhone: ${t.phone||"N/A"}%0AInterest: ${t.serviceType}%0A%0AMessage: ${t.message||"I would like a quotation and technical review."}`;window.open(`https://wa.me/919039075048?text=${T}`,"_blank")},S=()=>{r<3&&s(T=>T+1)},g=()=>{r>1&&s(T=>T-1)},d=()=>r===1?t.selectedService:r===2?t.name&&t.phone:!0;return l.jsxs("div",{className:"w-full bg-[#f8fafc] text-slate-900 pt-28 pb-24",children:[l.jsx("div",{className:"fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0"}),l.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{ref:h.ref,className:"reveal-up text-center max-w-2xl mx-auto space-y-3 mb-12",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbit-50 text-[#1e60aa] border border-orbit-200 text-[11px] font-semibold uppercase tracking-wider",children:[l.jsx(Nr,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Connect with Bhopal Engineering HQ"})]}),l.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight",children:"Get Technical Quotation & Project Consultation"}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-600 font-normal",children:["We specialize in"," ",l.jsx(NE,{texts:["Water Treatment Plants (WTP)","SCADA & PLC Automation","JJM / AMRUT Telemetry","Industrial ETP / ZLD Systems","Solar Pump Schemes"]})]}),l.jsx("div",{className:"flex items-center justify-center gap-4 pt-1",children:l.jsx(PE,{})})]}),l.jsx("div",{className:"flex justify-center mb-8",children:l.jsx(LE,{})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[l.jsx("div",{ref:p.ref,className:"reveal-right lg:col-span-7",children:l.jsx("div",{className:"bg-white rounded-3xl p-7 sm:p-9 shadow-3d-card border border-slate-200 gradient-border",children:n?l.jsxs("div",{className:"text-center py-10 space-y-5 animate-in zoom-in-95 fade-in duration-500",children:[l.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto float-slow",children:l.jsx(Jn,{className:"w-12 h-12"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Inquiry Submitted!"}),l.jsxs("p",{className:"text-xs text-slate-600 max-w-sm mx-auto mt-1.5 leading-relaxed",children:["Thank you, ",l.jsx("strong",{children:t.name}),". Our senior engineers in Bhopal will review your project and respond within ",l.jsx("span",{className:"text-[#1e60aa] font-bold",children:"24 hours"}),"."]})]}),l.jsxs("div",{className:"bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2.5 max-w-sm mx-auto",children:[l.jsx("div",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"What Happens Next"}),[{icon:"📞",text:"Engineer calls within 2 hours"},{icon:"📋",text:"BOQ & proposal prepared in 24h"},{icon:"🚀",text:"Site visit scheduled if needed"}].map((T,A)=>l.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-700",children:[l.jsx("span",{className:"text-base",children:T.icon}),l.jsx("span",{children:T.text})]},A))]}),l.jsxs("button",{onClick:_,className:"inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-2xl shadow transition-all hover:scale-105 cursor-pointer glow-btn",children:[l.jsx(Zn,{className:"w-4 h-4"}),"Connect on WhatsApp Now"]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mb-7",children:l.jsx("div",{className:"flex items-center gap-0 mb-4",children:["Select Service","Your Details","Project Scope"].map((T,A)=>l.jsxs(Vd.Fragment,{children:[l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${r>A+1?"bg-emerald-500 text-white":r===A+1?"bg-[#1e60aa] text-white shadow-md scale-110":"bg-slate-200 text-slate-500"}`,children:r>A+1?"✓":A+1}),l.jsx("div",{className:`text-[10px] font-medium mt-1 ${r===A+1?"text-[#1e60aa]":"text-slate-400"}`,children:T})]}),A<2&&l.jsx("div",{className:`flex-1 h-0.5 mb-5 mx-1 transition-all duration-500 ${r>A+1?"bg-emerald-400":"bg-slate-200"}`})]},A))})}),l.jsxs("form",{onSubmit:m,className:"space-y-5",children:[r===1&&l.jsx("div",{className:"animate-in fade-in slide-in-from-right-4 duration-300 space-y-4",children:l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-bold text-slate-900 mb-1",children:"What can we help you with? *"}),l.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Select the service category that matches your project"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:ko.map(T=>l.jsx("button",{type:"button",onClick:()=>e(A=>({...A,selectedService:T.id,serviceType:T.label})),className:`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${t.selectedService===T.id?"border-[#1e60aa] bg-blue-50 shadow-md scale-[1.02]":"border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`,children:l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"text-xl",children:T.icon}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-900 leading-snug",children:T.label}),t.selectedService===T.id&&l.jsxs("div",{className:"text-[10px] text-[#1e60aa] font-medium mt-0.5 flex items-center gap-1",children:[l.jsx(Jn,{className:"w-3 h-3"})," Selected"]})]})]})},T.id))})]})}),r===2&&l.jsxs("div",{className:"animate-in fade-in slide-in-from-right-4 duration-300 space-y-4",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"Tell us about yourself *"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-semibold text-slate-700 mb-1.5",children:"Full Name *"}),l.jsx("input",{type:"text",required:!0,placeholder:"Er. Rajesh Sharma",value:t.name,onFocus:()=>o("name"),onBlur:()=>o(null),onChange:T=>e(A=>({...A,name:T.target.value})),className:`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${a==="name"?"border-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300"}`})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-semibold text-slate-700 mb-1.5",children:"Phone Number *"}),l.jsx("input",{type:"tel",required:!0,placeholder:"+91 98765 43210",value:t.phone,onFocus:()=>o("phone"),onBlur:()=>o(null),onChange:T=>e(A=>({...A,phone:T.target.value})),className:`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${a==="phone"?"border-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300"}`})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-semibold text-slate-700 mb-1.5",children:"Organization / Authority"}),l.jsx("input",{type:"text",placeholder:"MPUDCL / Nagar Parishad",value:t.organization,onFocus:()=>o("org"),onBlur:()=>o(null),onChange:T=>e(A=>({...A,organization:T.target.value})),className:`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${a==="org"?"border-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300"}`})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-semibold text-slate-700 mb-1.5",children:"Email Address"}),l.jsx("input",{type:"email",placeholder:"name@company.com",value:t.email,onFocus:()=>o("email"),onBlur:()=>o(null),onChange:T=>e(A=>({...A,email:T.target.value})),className:`w-full px-4 py-2.5 text-xs rounded-xl border-2 focus:outline-none transition-all ${a==="email"?"border-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300"}`})]})]}),l.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded-2xl flex items-center gap-3",children:[l.jsx("span",{className:"text-2xl",children:(x=ko.find(T=>T.id===t.selectedService))==null?void 0:x.icon}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] text-[#1e60aa] font-semibold uppercase tracking-wide",children:"Selected Service"}),l.jsx("div",{className:"text-xs font-semibold text-slate-900",children:t.serviceType})]}),l.jsx("button",{type:"button",onClick:()=>s(1),className:"ml-auto text-[11px] text-[#1e60aa] font-semibold hover:underline cursor-pointer",children:"Change"})]})]}),r===3&&l.jsxs("div",{className:"animate-in fade-in slide-in-from-right-4 duration-300 space-y-4",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"Describe your project scope"}),l.jsxs("div",{className:"relative",children:[l.jsx("textarea",{rows:5,placeholder:"Provide: capacity (MLD), site location, current issues, tender specifications, or BOQ requirements...",value:t.message,onFocus:()=>o("msg"),onBlur:()=>o(null),onChange:T=>{e(A=>({...A,message:T.target.value})),u(T.target.value.length)},className:`w-full px-4 py-3 text-xs rounded-2xl border-2 focus:outline-none resize-none transition-all ${a==="msg"?"border-[#1e60aa] shadow-sm":"border-slate-200 hover:border-slate-300"}`}),l.jsxs("div",{className:"absolute bottom-2.5 right-3 text-[10px] text-slate-400",children:[c,"/500"]})]}),l.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[l.jsx("div",{className:"text-[10px] text-slate-500 font-medium w-full mb-0.5",children:"Quick add:"}),["Need BOQ & Tender Docs","Site Inspection Required","10 MLD Capacity","SCADA Integration","24/7 O&M Required"].map(T=>l.jsxs("button",{type:"button",onClick:()=>e(A=>({...A,message:A.message+(A.message?", ":"")+T})),className:"text-[10px] px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-[#1e60aa] border border-slate-200 hover:border-blue-200 rounded-lg transition-all cursor-pointer font-medium",children:["+ ",T]},T))]}),l.jsxs("div",{className:"bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5 text-xs",children:[l.jsx("div",{className:"font-bold text-slate-700 text-[11px] uppercase tracking-wide mb-2",children:"Inquiry Summary"}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Name:"}),l.jsx("span",{className:"font-semibold",children:t.name})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Phone:"}),l.jsx("span",{className:"font-semibold",children:t.phone})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Service:"}),l.jsxs("span",{className:"font-semibold text-[#1e60aa]",children:[(v=ko.find(T=>T.id===t.selectedService))==null?void 0:v.icon," ",(L=(y=ko.find(T=>T.id===t.selectedService))==null?void 0:y.label)==null?void 0:L.split("(")[0]]})]})]})]}),l.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[r>1&&l.jsx("button",{type:"button",onClick:g,className:"px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer",children:"← Back"}),r<3?l.jsxs("button",{type:"button",onClick:S,disabled:!d(),className:`flex-1 py-3 text-xs font-bold text-white rounded-xl transition-all flex items-center justify-center gap-2 ${d()?"bg-[#1e60aa] hover:bg-[#165091] cursor-pointer shadow-md hover:scale-[1.02] glow-btn":"bg-slate-300 cursor-not-allowed"}`,children:["Continue ",l.jsx(El,{className:"w-4 h-4"})]}):l.jsxs("button",{type:"submit",className:"flex-1 py-3 text-xs font-bold text-white bg-[#1e60aa] hover:bg-[#165091] rounded-xl shadow-md hover:scale-[1.02] transition-all cursor-pointer glow-btn flex items-center justify-center gap-2",children:[l.jsx(ny,{className:"w-4 h-4"})," Submit Inquiry"]}),l.jsxs("button",{type:"button",onClick:_,className:"px-4 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer",children:[l.jsx(Zn,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"WhatsApp"})]})]})]})]})})}),l.jsxs("div",{ref:f.ref,className:"reveal-left lg:col-span-5 space-y-5",children:[l.jsxs("div",{className:"bg-white text-slate-900 rounded-3xl p-6 shadow-md border border-slate-200 space-y-5",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider",children:"Direct Contact Channels"}),l.jsx("h3",{className:"text-lg font-bold text-slate-900 mt-0.5",children:"Bhopal HQ & Facilities"})]}),_t.company.offices.map((T,A)=>l.jsxs("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#1e60aa] transition-colors group",children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsx("div",{className:"text-[11px] font-bold text-[#1e60aa] uppercase tracking-wider",children:T.type}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse",title:"Online"})]}),l.jsx("div",{className:"text-xs font-bold text-slate-900 mb-1",children:T.name}),l.jsx("div",{className:"text-[11px] text-slate-600 mb-2.5 leading-relaxed",children:T.address}),l.jsxs("a",{href:`tel:${T.phone}`,className:"inline-flex items-center gap-1.5 text-xs font-bold text-[#1e60aa] hover:text-[#165091] transition-colors",children:[l.jsx(Nr,{className:"w-3.5 h-3.5"})," ",T.phone]})]},A)),l.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100",children:[l.jsx(Cg,{className:"w-3.5 h-3.5 text-[#1e60aa]"}),l.jsx("span",{children:"Mon–Sat: 10:00 AM – 7:00 PM (Sun: Closed)"})]})]}),l.jsxs("div",{className:"bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3",children:[l.jsx("div",{className:"text-[11px] font-bold text-slate-700 uppercase tracking-wider",children:"Why Trust Orbit Engineering"}),[{icon:iy,label:"Triple ISO Certified",sub:"ISO 9001 · 14001 · 45001",color:"text-[#1e60aa]"},{icon:sy,label:"IndiaMART Verified Seller",sub:"150+ 5-Star Ratings",color:"text-amber-600"},{icon:Pg,label:"80+ Qualified Engineers",sub:"27 Years Combined Experience",color:"text-emerald-700"},{icon:Pa,label:"24/7 On-Call Support",sub:"Field Response &lt;4 Hours in MP",color:"text-purple-700"}].map((T,A)=>l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100",children:l.jsx(T.icon,{className:`w-4 h-4 ${T.color}`})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-900",children:T.label}),l.jsx("div",{className:"text-[10px] text-slate-500",dangerouslySetInnerHTML:{__html:T.sub}})]})]},A))]}),l.jsxs("a",{href:_t.company.contact.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md transition-all hover:scale-[1.02] group",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center",children:l.jsx(Zn,{className:"w-5 h-5 text-white"})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-bold",children:"Chat on WhatsApp"}),l.jsx("div",{className:"text-[10px] text-emerald-200",children:"+91 90390 75048 · Usually replies in minutes"})]})]}),l.jsx(Kn,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})]})]})]})}function IE(){const[t,e]=ve.useState(!1),[n,i]=ve.useState(!0);return ve.useEffect(()=>{const r=()=>e(window.scrollY>400);window.addEventListener("scroll",r);const s=setTimeout(()=>i(!1),6e3);return()=>{window.removeEventListener("scroll",r),clearTimeout(s)}},[]),l.jsxs("a",{href:"https://wa.me/919039075048?text=Hello%20Orbit%20Engineering%20Solutions",target:"_blank",rel:"noopener noreferrer",className:`fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-all duration-500 ${t?"opacity-100 scale-100 translate-y-0":"opacity-0 scale-90 translate-y-4 pointer-events-none"} hover:scale-110 cursor-pointer`,title:"Chat on WhatsApp",children:[n&&l.jsx("span",{className:"absolute w-full h-full rounded-full bg-emerald-400/50 animate-ping"}),l.jsx("svg",{viewBox:"0 0 24 24",className:"w-7 h-7 fill-white",children:l.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})]})}function Qs({children:t,pageKey:e}){const[n,i]=ve.useState(!1);return ve.useEffect(()=>{i(!1);const r=setTimeout(()=>i(!0),10);return()=>clearTimeout(r)},[e]),l.jsx("div",{className:"transition-all duration-400",style:{opacity:n?1:0,transform:n?"translateY(0px)":"translateY(18px)",transition:"opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)"},children:t})}function UE({active:t}){const[e,n]=ve.useState(0),[i,r]=ve.useState(!1);return ve.useEffect(()=>{t&&(r(!0),n(0),setTimeout(()=>n(70),50),setTimeout(()=>n(95),300),setTimeout(()=>{n(100),setTimeout(()=>r(!1),300)},600))},[t]),i?l.jsx("div",{className:"fixed top-0 left-0 z-[2000] h-0.5 transition-all duration-500 rounded-r-full",style:{width:`${e}%`,background:"linear-gradient(90deg, #1e60aa, #38bdf8, #34d399)"}}):null}function kE(){const[t,e]=ve.useState("home"),[n,i]=ve.useState(!1),[r,s]=ve.useState(!1),a=o=>{s(!0),setTimeout(()=>s(!1),650),o==="solution"||o==="projects"||o==="products"?(e("services"),window.scrollTo({top:0,behavior:"smooth"})):o==="team"?(e("about"),setTimeout(()=>{const c=document.getElementById("leadership-team");c&&c.scrollIntoView({behavior:"smooth"})},100)):(e(o),window.scrollTo({top:0,behavior:"smooth"}))};return ve.useEffect(()=>{const o=c=>{(c.ctrlKey||c.metaKey)&&c.key==="k"&&(c.preventDefault(),i(!0))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]),ve.useEffect(()=>{const o=()=>{const f=document.querySelectorAll(".reveal-up:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible), .reveal-fade:not(.visible), .reveal-bounce:not(.visible)");if(f.length===0)return null;const m=new IntersectionObserver(_=>{_.forEach(S=>{S.isIntersecting&&(S.target.classList.add("visible"),m.unobserve(S.target))})},{threshold:.08,rootMargin:"0px 0px -30px 0px"});return f.forEach(_=>m.observe(_)),m};let c=o();const u=setTimeout(()=>{c&&c.disconnect(),c=o()},120),h=setTimeout(()=>{c&&c.disconnect(),c=o()},500),p=()=>{o()};return window.addEventListener("scroll",p,{passive:!0}),()=>{clearTimeout(u),clearTimeout(h),window.removeEventListener("scroll",p),c&&c.disconnect()}},[t]),l.jsxs("div",{className:"relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden font-sans selection:bg-[#1e60aa] selection:text-white",children:[l.jsx(UE,{active:r}),l.jsx(_E,{}),l.jsx(cy,{activePage:t,onNavigate:a}),l.jsxs("main",{className:"relative z-10",children:[t==="home"&&l.jsx(Qs,{pageKey:"home",children:l.jsx(wE,{onNavigate:a,onOpenQuote:()=>i(!0)})}),t==="about"&&l.jsx(Qs,{pageKey:"about",children:l.jsx(TE,{onNavigate:a,onOpenQuote:()=>i(!0)})}),t==="services"&&l.jsx(Qs,{pageKey:"services",children:l.jsx(CE,{onOpenQuote:()=>i(!0)})}),t==="ecosystem"&&l.jsx(Qs,{pageKey:"ecosystem",children:l.jsx(RE,{onOpenQuote:()=>i(!0)})}),t==="contact"&&l.jsx(Qs,{pageKey:"contact",children:l.jsx(DE,{})})]}),l.jsx(uy,{onOpenQuote:()=>i(!0)}),l.jsx(dy,{isOpen:n,onClose:()=>i(!1)}),l.jsx(IE,{})]})}iu.createRoot(document.getElementById("root")).render(l.jsx(Vd.StrictMode,{children:l.jsx(kE,{})}));
