(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},_s=[],wn=()=>{},Ud=()=>!1,Ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pc=n=>n.startsWith("onUpdate:"),wt=Object.assign,mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$p=Object.prototype.hasOwnProperty,it=(n,e)=>$p.call(n,e),ze=Array.isArray,vs=n=>Ar(n)==="[object Map]",Nd=n=>Ar(n)==="[object Set]",Jp=n=>Ar(n)==="[object RegExp]",Ve=n=>typeof n=="function",pt=n=>typeof n=="string",yi=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Fd=n=>(ht(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Od=Object.prototype.toString,Ar=n=>Od.call(n),Qp=n=>Ar(n).slice(8,-1),Bd=n=>Ar(n)==="[object Object]",gc=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qs=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},em=/-\w/g,ln=ka(n=>n.replace(em,e=>e.slice(1).toUpperCase())),tm=/\B([A-Z])/g,Ei=ka(n=>n.replace(tm,"-$1").toLowerCase()),Va=ka(n=>n.charAt(0).toUpperCase()+n.slice(1)),oo=ka(n=>n?`on${Va(n)}`:""),gi=(n,e)=>!Object.is(n,e),er=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},nm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},im=n=>{const e=pt(n)?Number(n):NaN;return isNaN(e)?n:e};let $c;const Ga=()=>$c||($c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wa(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=pt(i)?om(i):Wa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(pt(n)||ht(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,am=/\/\*[^]*?\*\//g;function om(n){const e={};return n.replace(am,"").split(sm).forEach(t=>{if(t){const i=t.split(rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xa(n){let e="";if(pt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Xa(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=hc(lm);function Hd(n){return!!n||n===""}const kd=n=>!!(n&&n.__v_isRef===!0),tr=n=>pt(n)?n:n==null?"":ze(n)||ht(n)&&(n.toString===Od||!Ve(n.toString))?kd(n)?tr(n.value):JSON.stringify(n,Vd,2):String(n),Vd=(n,e)=>kd(e)?Vd(n,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[lo(i,r)+" =>"]=s,t),{})}:Nd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>lo(t))}:yi(e)?lo(e):ht(e)&&!ze(e)&&!Bd(e)?String(e):e,lo=(n,e="")=>{var t;return yi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class um{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fm(){return Gt}let ft;const co=new WeakSet;class Gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,co.has(this)&&(co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jc(this),qd(this);const e=ft,t=mn;ft=this,mn=!0;try{return this.fn()}finally{Yd(this),ft=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xc(e);this.deps=this.depsTail=void 0,Jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let Wd=0,nr,ir;function Xd(n,e=!1){if(n.flags|=8,e){n.next=ir,ir=n;return}n.next=nr,nr=n}function _c(){Wd++}function vc(){if(--Wd>0)return;if(ir){let e=ir;for(ir=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;nr;){let e=nr;for(nr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function qd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),xc(i),dm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ol(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Kd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fr)||(n.globalVersion=fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ol(n))))return;n.flags|=2;const e=n.dep,t=ft,i=mn;ft=n,mn=!0;try{qd(n);const s=n.fn(n._value);(e.version===0||gi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,mn=i,Yd(n),n.flags&=-3}}function xc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)xc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function dm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const jd=[];function jn(){jd.push(mn),mn=!1}function Zn(){const n=jd.pop();mn=n===void 0?!0:n}function Jc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let fr=0;class hm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!mn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new hm(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,fr++,this.notify(e)}notify(e){_c();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{vc()}}}function Zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ll=new WeakMap,Gi=Symbol(""),cl=Symbol(""),dr=Symbol("");function Lt(n,e,t){if(mn&&ft){let i=ll.get(n);i||ll.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Sc),s.map=i,s.key=t),s.track()}}function Gn(n,e,t,i,s,r){const a=ll.get(n);if(!a){fr++;return}const o=l=>{l&&l.trigger()};if(_c(),e==="clear")a.forEach(o);else{const l=ze(n),c=l&&gc(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===dr||!yi(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(dr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Gi)),vs(n)&&o(a.get(cl)));break;case"delete":l||(o(a.get(Gi)),vs(n)&&o(a.get(cl)));break;case"set":vs(n)&&o(a.get(Gi));break}}vc()}function ji(n){const e=Qe(n);return e===n?e:(Lt(e,"iterate",dr),on(n)?e:e.map(Ct))}function qa(n){return Lt(n=Qe(n),"iterate",dr),n}const pm={__proto__:null,[Symbol.iterator](){return uo(this,Symbol.iterator,Ct)},concat(...n){return ji(this).concat(...n.map(e=>ze(e)?ji(e):e))},entries(){return uo(this,"entries",n=>(n[1]=Ct(n[1]),n))},every(n,e){return In(this,"every",n,e,void 0,arguments)},filter(n,e){return In(this,"filter",n,e,t=>t.map(Ct),arguments)},find(n,e){return In(this,"find",n,e,Ct,arguments)},findIndex(n,e){return In(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return In(this,"findLast",n,e,Ct,arguments)},findLastIndex(n,e){return In(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return In(this,"forEach",n,e,void 0,arguments)},includes(...n){return fo(this,"includes",n)},indexOf(...n){return fo(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return fo(this,"lastIndexOf",n)},map(n,e){return In(this,"map",n,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...n){return Hs(this,"push",n)},reduce(n,...e){return Qc(this,"reduce",n,e)},reduceRight(n,...e){return Qc(this,"reduceRight",n,e)},shift(){return Hs(this,"shift")},some(n,e){return In(this,"some",n,e,void 0,arguments)},splice(...n){return Hs(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Hs(this,"unshift",n)},values(){return uo(this,"values",Ct)}};function uo(n,e,t){const i=qa(n),s=i[e]();return i!==n&&!on(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const mm=Array.prototype;function In(n,e,t,i,s,r){const a=qa(n),o=a!==n&&!on(n),l=a[e];if(l!==mm[e]){const f=l.apply(n,r);return o?Ct(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Ct(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Qc(n,e,t,i){const s=qa(n);let r=t;return s!==n&&(on(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,Ct(o),l,n)}),s[e](r,...i)}function fo(n,e,t){const i=Qe(n);Lt(i,"iterate",dr);const s=i[e](...t);return(s===-1||s===!1)&&Ec(t[0])?(t[0]=Qe(t[0]),i[e](...t)):s}function Hs(n,e,t=[]){jn(),_c();const i=Qe(n)[e].apply(n,t);return vc(),Zn(),i}const gm=hc("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yi));function _m(n){yi(n)||(n=String(n));const e=Qe(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class Jd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?wm:nh:r?th:eh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!s){let l;if(a&&(l=pm[t]))return l;if(t==="hasOwnProperty")return _m}const o=Reflect.get(e,t,Ut(e)?e:i);return(yi(t)?$d.has(t):gm(t))||(s||Lt(e,"get",t),r)?o:Ut(o)?a&&gc(t)?o:o.value:ht(o)?s?sh(o):Wi(o):o}}class Qd extends Jd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Si(r);if(!on(i)&&!Si(i)&&(r=Qe(r),i=Qe(i)),!ze(e)&&Ut(r)&&!Ut(i))return l||(r.value=i),!0}const a=ze(e)&&gc(t)?Number(t)<e.length:it(e,t),o=Reflect.set(e,t,i,Ut(e)?e:s);return e===Qe(s)&&(a?gi(i,r)&&Gn(e,"set",t,i):Gn(e,"add",t,i)),o}deleteProperty(e,t){const i=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Gn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!yi(t)||!$d.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",ze(e)?"length":Gi),Reflect.ownKeys(e)}}class vm extends Jd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xm=new Qd,Sm=new vm,Mm=new Qd(!0);const ul=n=>n,zr=n=>Reflect.getPrototypeOf(n);function ym(n,e,t){return function(...i){const s=this.__v_raw,r=Qe(s),a=vs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?ul:e?Aa:Ct;return!e&&Lt(r,"iterate",l?cl:Gi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Hr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Em(n,e){const t={get(s){const r=this.__v_raw,a=Qe(r),o=Qe(s);n||(gi(s,o)&&Lt(a,"get",s),Lt(a,"get",o));const{has:l}=zr(a),c=e?ul:n?Aa:Ct;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Lt(Qe(s),"iterate",Gi),s.size},has(s){const r=this.__v_raw,a=Qe(r),o=Qe(s);return n||(gi(s,o)&&Lt(a,"has",s),Lt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Qe(o),c=e?ul:n?Aa:Ct;return!n&&Lt(l,"iterate",Gi),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return wt(t,n?{add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear")}:{add(s){!e&&!on(s)&&!Si(s)&&(s=Qe(s));const r=Qe(this);return zr(r).has.call(r,s)||(r.add(s),Gn(r,"add",s,s)),this},set(s,r){!e&&!on(r)&&!Si(r)&&(r=Qe(r));const a=Qe(this),{has:o,get:l}=zr(a);let c=o.call(a,s);c||(s=Qe(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?gi(r,u)&&Gn(a,"set",s,r):Gn(a,"add",s,r),this},delete(s){const r=Qe(this),{has:a,get:o}=zr(r);let l=a.call(r,s);l||(s=Qe(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Gn(r,"delete",s,void 0),c},clear(){const s=Qe(this),r=s.size!==0,a=s.clear();return r&&Gn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ym(s,n,e)}),t}function Mc(n,e){const t=Em(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(it(t,s)&&s in i?t:i,s,r)}const bm={get:Mc(!1,!1)},Am={get:Mc(!1,!0)},Tm={get:Mc(!0,!1)};const eh=new WeakMap,th=new WeakMap,nh=new WeakMap,wm=new WeakMap;function Cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rm(n){return n.__v_skip||!Object.isExtensible(n)?0:Cm(Qp(n))}function Wi(n){return Si(n)?n:yc(n,!1,xm,bm,eh)}function ih(n){return yc(n,!1,Mm,Am,th)}function sh(n){return yc(n,!0,Sm,Tm,nh)}function yc(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Rm(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function xs(n){return Si(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function Ec(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Pm(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&zd(n,"__v_skip",!0),n}const Ct=n=>ht(n)?Wi(n):n,Aa=n=>ht(n)?sh(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function Tt(n){return rh(n,!1)}function Lm(n){return rh(n,!0)}function rh(n,e){return Ut(n)?n:new Im(n,e)}class Im{constructor(e,t){this.dep=new Sc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:Ct(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||Si(e);e=i?e:Qe(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function qn(n){return Ut(n)?n.value:n}const Dm={get:(n,e,t)=>e==="__v_raw"?n:qn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ah(n){return xs(n)?n:new Proxy(n,Dm)}class Um{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Sc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Xd(this,!0),!0}get value(){const e=this.dep.track();return Kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nm(n,e,t=!1){let i,s;return Ve(n)?i=n:(i=n.get,s=n.set),new Um(i,s,t)}const kr={},Ta=new WeakMap;let Fi;function Fm(n,e=!1,t=Fi){if(t){let i=Ta.get(t);i||Ta.set(t,i=[]),i.push(n)}}function Om(n,e,t=ct){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=S=>s?S:on(S)||s===!1||s===0?Wn(S,1):Wn(S);let u,f,d,h,_=!1,x=!1;if(Ut(n)?(f=()=>n.value,_=on(n)):xs(n)?(f=()=>c(n),_=!0):ze(n)?(x=!0,_=n.some(S=>xs(S)||on(S)),f=()=>n.map(S=>{if(Ut(S))return S.value;if(xs(S))return c(S);if(Ve(S))return l?l(S,2):S()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){jn();try{d()}finally{Zn()}}const S=Fi;Fi=u;try{return l?l(n,3,[h]):n(h)}finally{Fi=S}}:f=wn,e&&s){const S=f,I=s===!0?1/0:s;f=()=>Wn(S(),I)}const m=fm(),p=()=>{u.stop(),m&&m.active&&mc(m.effects,u)};if(r&&e){const S=e;e=(...I)=>{S(...I),p()}}let T=x?new Array(n.length).fill(kr):kr;const A=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(s||_||(x?I.some((R,L)=>gi(R,T[L])):gi(I,T))){d&&d();const R=Fi;Fi=u;try{const L=[I,T===kr?void 0:x&&T[0]===kr?[]:T,h];T=I,l?l(e,3,L):e(...L)}finally{Fi=R}}}else u.run()};return o&&o(A),u=new Gd(f),u.scheduler=a?()=>a(A,!1):A,h=S=>Fm(S,!1,u),d=u.onStop=()=>{const S=Ta.get(u);if(S){if(l)l(S,4);else for(const I of S)I();Ta.delete(u)}},e?i?A(!0):T=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Wn(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))Wn(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(Nd(n)||vs(n))n.forEach(i=>{Wn(i,e,t)});else if(Bd(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tr(n,e,t,i){try{return i?n(...i):n()}catch(s){Ya(s,e,t)}}function _n(n,e,t,i){if(Ve(n)){const s=Tr(n,e,t,i);return s&&Fd(s)&&s.catch(r=>{Ya(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(_n(n[r],e,t,i));return s}}function Ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){jn(),Tr(r,null,10,[n,l,c]),Zn();return}}Bm(n,t,s,i,a)}function Bm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const zt=[];let Sn=-1;const Ss=[];let fi=null,fs=0;const oh=Promise.resolve();let wa=null;function Xi(n){const e=wa||oh;return n?e.then(this?n.bind(this):n):e}function zm(n){let e=Sn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,s=zt[i],r=hr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function bc(n){if(!(n.flags&1)){const e=hr(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=hr(t)?zt.push(n):zt.splice(zm(e),0,n),n.flags|=1,lh()}}function lh(){wa||(wa=oh.then(uh))}function Hm(n){ze(n)?Ss.push(...n):fi&&n.id===-1?fi.splice(fs+1,0,n):n.flags&1||(Ss.push(n),n.flags|=1),lh()}function eu(n,e,t=Sn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ch(n){if(Ss.length){const e=[...new Set(Ss)].sort((t,i)=>hr(t)-hr(i));if(Ss.length=0,fi){fi.push(...e);return}for(fi=e,fs=0;fs<fi.length;fs++){const t=fi[fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}fi=null,fs=0}}const hr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function uh(n){try{for(Sn=0;Sn<zt.length;Sn++){const e=zt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Tr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<zt.length;Sn++){const e=zt[Sn];e&&(e.flags&=-2)}Sn=-1,zt.length=0,ch(),wa=null,(zt.length||Ss.length)&&uh()}}let Zt=null,fh=null;function Ca(n){const e=Zt;return Zt=n,fh=n&&n.type.__scopeId||null,e}function dh(n,e=Zt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Da(-1);const r=Ca(e);let a;try{a=n(...s)}finally{Ca(r),i._d&&Da(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ds(n,e){if(Zt===null)return n;const t=Ja(Zt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=ct]=e[s];r&&(Ve(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ti(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(jn(),_n(l,t,8,[n.el,o,n,e]),Zn())}}const hh=Symbol("_vte"),ph=n=>n.__isTeleport,sr=n=>n&&(n.disabled||n.disabled===""),tu=n=>n&&(n.defer||n.defer===""),nu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,iu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,fl=(n,e)=>{const t=n&&n.to;return pt(t)?e?e(t):null:t},mh={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,a,o,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:_,createText:x,createComment:m}}=c,p=sr(e.props);let{shapeFlag:T,children:A,dynamicChildren:S}=e;if(n==null){const I=e.el=x(""),R=e.anchor=x("");h(I,t,i),h(R,t,i);const L=(y,E)=>{T&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),u(A,y,E,s,r,a,o,l))},z=()=>{const y=e.target=fl(e.props,_),E=gh(y,e,x,h);y&&(a!=="svg"&&nu(y)?a="svg":a!=="mathml"&&iu(y)&&(a="mathml"),p||(L(y,E),ma(e,!1)))};p&&(L(t,R),ma(e,!0)),tu(e.props)?(e.el.__isMounted=!1,Mt(()=>{z(),delete e.el.__isMounted},r)):z()}else{if(tu(e.props)&&n.el.__isMounted===!1){Mt(()=>{mh.process(n,e,t,i,s,r,a,o,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const I=e.anchor=n.anchor,R=e.target=n.target,L=e.targetAnchor=n.targetAnchor,z=sr(n.props),y=z?t:R,E=z?I:L;if(a==="svg"||nu(R)?a="svg":(a==="mathml"||iu(R))&&(a="mathml"),S?(d(n.dynamicChildren,S,y,s,r,a,o),wc(n,e,!0)):l||f(n,e,y,E,s,r,a,o,!1),p)z?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Vr(e,t,I,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const U=e.target=fl(e.props,_);U&&Vr(e,U,null,c,0)}else z&&Vr(e,R,L,c,1);ma(e,p)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(s(c),s(u)),r&&s(l),a&16){const h=r||!sr(d);for(let _=0;_<o.length;_++){const x=o[_];i(x,e,t,h,!!x.dynamicChildren)}}},move:Vr,hydrate:km};function Vr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(a,e,t),(!f||sr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);f&&i(o,e,t)}function km(n,e,t,i,s,r,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},f){function d(x,m,p,T){m.anchor=f(a(x),m,o(x),t,i,s,r),m.targetStart=p,m.targetAnchor=T}const h=e.target=fl(e.props,l),_=sr(e.props);if(h){const x=h._lpa||h.firstChild;if(e.shapeFlag&16)if(_)d(n,e,x,x&&a(x));else{e.anchor=a(n);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&a(e.targetAnchor);break}}m=a(m)}e.targetAnchor||gh(h,e,u,c),f(x&&a(x),e,h,t,i,s,r)}ma(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,a(n));return e.anchor&&a(e.anchor)}const Vm=mh;function ma(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function gh(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[hh]=r,n&&(i(s,n),i(r,n)),r}const Vn=Symbol("_leaveCb"),Gr=Symbol("_enterCb");function Gm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wr(()=>{n.isMounted=!0}),Cr(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],_h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},vh=n=>{const e=n.subTree;return e.component?vh(e.component):e},Wm={name:"BaseTransition",props:_h,setup(n,{slots:e}){const t=Rc(),i=Gm();return()=>{const s=e.default&&Mh(e.default(),!0);if(!s||!s.length)return;const r=xh(s),a=Qe(n),{mode:o}=a;if(i.isLeaving)return ho(r);const l=su(r);if(!l)return ho(r);let c=dl(l,a,i,t,f=>c=f);l.type!==It&&Ts(l,c);let u=t.subTree&&su(t.subTree);if(u&&u.type!==It&&!pi(u,l)&&vh(t).type!==It){let f=dl(u,a,i,t);if(Ts(u,f),o==="out-in"&&l.type!==It)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},ho(r);o==="in-out"&&l.type!==It?f.delayLeave=(d,h,_)=>{const x=Sh(i,u);x[String(u.key)]=u,d[Vn]=()=>{h(),d[Vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function xh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==It){e=t;break}}return e}const Xm=Wm;function Sh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function dl(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:A}=e,S=String(n.key),I=Sh(t,n),R=(y,E)=>{y&&_n(y,i,9,E)},L=(y,E)=>{const U=E[1];R(y,E),ze(y)?y.every(B=>B.length<=1)&&U():y.length<=1&&U()},z={mode:a,persisted:o,beforeEnter(y){let E=l;if(!t.isMounted)if(r)E=m||l;else return;y[Vn]&&y[Vn](!0);const U=I[S];U&&pi(n,U)&&U.el[Vn]&&U.el[Vn](),R(E,[y])},enter(y){let E=c,U=u,B=f;if(!t.isMounted)if(r)E=p||c,U=T||u,B=A||f;else return;let q=!1;const te=y[Gr]=ee=>{q||(q=!0,ee?R(B,[y]):R(U,[y]),z.delayedLeave&&z.delayedLeave(),y[Gr]=void 0)};E?L(E,[y,te]):te()},leave(y,E){const U=String(n.key);if(y[Gr]&&y[Gr](!0),t.isUnmounting)return E();R(d,[y]);let B=!1;const q=y[Vn]=te=>{B||(B=!0,E(),te?R(x,[y]):R(_,[y]),y[Vn]=void 0,I[U]===n&&delete I[U])};I[U]=n,h?L(h,[y,q]):q()},clone(y){const E=dl(y,e,t,i,s);return s&&s(E),E}};return z}function ho(n){if(Ka(n))return n=$n(n),n.children=null,n}function su(n){if(!Ka(n))return ph(n.type)&&n.children?xh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function Ts(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ts(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===Wt?(a.patchFlag&128&&s++,i=i.concat(Mh(a.children,e,o))):(e||a.type!==It)&&i.push(o!=null?$n(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ns(n,e){return Ve(n)?wt({name:n.name},e,{setup:n}):n}function yh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ra=new WeakMap;function rr(n,e,t,i,s=!1){if(ze(n)){n.forEach((_,x)=>rr(_,e&&(ze(e)?e[x]:e),t,i,s));return}if(Ms(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ja(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState,d=Qe(f),h=f===ct?Ud:_=>it(d,_);if(c!=null&&c!==l){if(ru(e),pt(c))u[c]=null,h(c)&&(f[c]=null);else if(Ut(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ve(l))Tr(l,o,12,[a,u]);else{const _=pt(l),x=Ut(l);if(_||x){const m=()=>{if(n.f){const p=_?h(l)?f[l]:u[l]:l.value;if(s)ze(p)&&mc(p,r);else if(ze(p))p.includes(r)||p.push(r);else if(_)u[l]=[r],h(l)&&(f[l]=u[l]);else{const T=[r];l.value=T,n.k&&(u[n.k]=T)}}else _?(u[l]=a,h(l)&&(f[l]=a)):x&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const p=()=>{m(),Ra.delete(n)};p.id=-1,Ra.set(n,p),Mt(p,t)}else ru(n),m()}}}function ru(n){const e=Ra.get(n);e&&(e.flags|=8,Ra.delete(n))}Ga().requestIdleCallback;Ga().cancelIdleCallback;const Ms=n=>!!n.type.__asyncLoader,Ka=n=>n.type.__isKeepAlive,qm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Rc(),i=t.ctx;if(!i.renderer)return()=>{const T=e.default&&e.default();return T&&T.length===1?T[0]:T};const s=new Map,r=new Set;let a=null;const o=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(T,A,S,I,R)=>{const L=T.component;c(T,A,S,0,o),l(L.vnode,T,A,S,L,o,I,T.slotScopeIds,R),Mt(()=>{L.isDeactivated=!1,L.a&&er(L.a);const z=T.props&&T.props.onVnodeMounted;z&&nn(z,L.parent,T)},o)},i.deactivate=T=>{const A=T.component;La(A.m),La(A.a),c(T,d,null,1,o),Mt(()=>{A.da&&er(A.da);const S=T.props&&T.props.onVnodeUnmounted;S&&nn(S,A.parent,T),A.isDeactivated=!0},o)};function h(T){po(T),u(T,t,o,!0)}function _(T){s.forEach((A,S)=>{const I=vl(A.type);I&&!T(I)&&x(S)})}function x(T){const A=s.get(T);A&&(!a||!pi(A,a))?h(A):a&&po(a),s.delete(T),r.delete(T)}_i(()=>[n.include,n.exclude],([T,A])=>{T&&_(S=>Zs(T,S)),A&&_(S=>!Zs(A,S))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(Ia(t.subTree.type)?Mt(()=>{s.set(m,Wr(t.subTree))},t.subTree.suspense):s.set(m,Wr(t.subTree)))};return wr(p),Th(p),Cr(()=>{s.forEach(T=>{const{subTree:A,suspense:S}=t,I=Wr(A);if(T.type===I.type&&T.key===I.key){po(I);const R=I.component.da;R&&Mt(R,S);return}h(T)})}),()=>{if(m=null,!e.default)return a=null;const T=e.default(),A=T[0];if(T.length>1)return a=null,T;if(!ws(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return a=null,A;let S=Wr(A);if(S.type===It)return a=null,S;const I=S.type,R=vl(Ms(S)?S.type.__asyncResolved||{}:I),{include:L,exclude:z,max:y}=n;if(L&&(!R||!Zs(L,R))||z&&R&&Zs(z,R))return S.shapeFlag&=-257,a=S,A;const E=S.key==null?I:S.key,U=s.get(E);return S.el&&(S=$n(S),A.shapeFlag&128&&(A.ssContent=S)),m=E,U?(S.el=U.el,S.component=U.component,S.transition&&Ts(S,S.transition),S.shapeFlag|=512,r.delete(E),r.add(E)):(r.add(E),y&&r.size>parseInt(y,10)&&x(r.values().next().value)),S.shapeFlag|=256,a=S,Ia(A.type)?A:S}}},Ym=qm;function Zs(n,e){return ze(n)?n.some(t=>Zs(t,e)):pt(n)?n.split(",").includes(e):Jp(n)?(n.lastIndex=0,n.test(e)):!1}function Eh(n,e){Ah(n,"a",e)}function bh(n,e){Ah(n,"da",e)}function Ah(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ja(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ka(s.parent.vnode)&&Km(i,e,t,s),s=s.parent}}function Km(n,e,t,i){const s=ja(e,n,i,!0);wh(()=>{mc(i[e],s)},t)}function po(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Wr(n){return n.shapeFlag&128?n.ssContent:n}function ja(n,e,t=Dt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{jn();const o=Rr(t),l=_n(e,t,n,a);return o(),Zn(),l});return i?s.unshift(r):s.push(r),r}}const ti=n=>(e,t=Dt)=>{(!mr||n==="sp")&&ja(n,(...i)=>e(...i),t)},jm=ti("bm"),wr=ti("m"),Zm=ti("bu"),Th=ti("u"),Cr=ti("bum"),wh=ti("um"),$m=ti("sp"),Jm=ti("rtg"),Qm=ti("rtc");function eg(n,e=Dt){ja("ec",n,e)}const Ch="components";function tg(n,e){return Ph(Ch,n,!0,e)||n}const Rh=Symbol.for("v-ndc");function ng(n){return pt(n)?Ph(Ch,n,!1)||n:n||Rh}function Ph(n,e,t=!0,i=!1){const s=Zt||Dt;if(s){const r=s.type;{const o=vl(r,!1);if(o&&(o===e||o===ln(e)||o===Va(ln(e))))return r}const a=au(s[n]||r[n],e)||au(s.appContext[n],e);return!a&&i?r:a}}function au(n,e){return n&&(n[e]||n[ln(e)]||n[Va(ln(e))])}function ig(n,e,t,i){let s;const r=t,a=ze(n);if(a||pt(n)){const o=a&&xs(n);let l=!1,c=!1;o&&(l=!on(n),c=Si(n),n=qa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Aa(Ct(n[u])):Ct(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(ht(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const hl=n=>n?Kh(n)?Ja(n):hl(n.parent):null,ar=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hl(n.parent),$root:n=>hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ih(n),$forceUpdate:n=>n.f||(n.f=()=>{bc(n.update)}),$nextTick:n=>n.n||(n.n=Xi.bind(n.proxy)),$watch:n=>bg.bind(n)}),mo=(n,e)=>n!==ct&&!n.__isScriptSetup&&it(n,e),sg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(mo(i,e))return a[e]=1,i[e];if(s!==ct&&it(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&it(c,e))return a[e]=3,r[e];if(t!==ct&&it(t,e))return a[e]=4,t[e];pl&&(a[e]=0)}}const u=ar[e];let f,d;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==ct&&it(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,it(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return mo(s,e)?(s[e]=t,!0):i!==ct&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r,type:a}},o){let l,c;return!!(t[o]||n!==ct&&o[0]!=="$"&&it(n,o)||mo(e,o)||(l=r[0])&&it(l,o)||it(i,o)||it(ar,o)||it(s.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ou(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let pl=!0;function rg(n){const e=Ih(n),t=n.proxy,i=n.ctx;pl=!1,e.beforeCreate&&lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:A,unmounted:S,render:I,renderTracked:R,renderTriggered:L,errorCaptured:z,serverPrefetch:y,expose:E,inheritAttrs:U,components:B,directives:q,filters:te}=e;if(c&&ag(c,i,null),a)for(const oe in a){const W=a[oe];Ve(W)&&(i[oe]=W.bind(t))}if(s){const oe=s.call(t,t);ht(oe)&&(n.data=Wi(oe))}if(pl=!0,r)for(const oe in r){const W=r[oe],me=Ve(W)?W.bind(t,t):Ve(W.get)?W.get.bind(t,t):wn,ve=!Ve(W)&&Ve(W.set)?W.set.bind(t):wn,Ae=yt({get:me,set:ve});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ne=>Ae.value=Ne})}if(o)for(const oe in o)Lh(o[oe],i,t,oe);if(l){const oe=Ve(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(W=>{ga(W,oe[W])})}u&&lu(u,n,"c");function $(oe,W){ze(W)?W.forEach(me=>oe(me.bind(t))):W&&oe(W.bind(t))}if($(jm,f),$(wr,d),$(Zm,h),$(Th,_),$(Eh,x),$(bh,m),$(eg,z),$(Qm,R),$(Jm,L),$(Cr,T),$(wh,S),$($m,y),ze(E))if(E.length){const oe=n.exposed||(n.exposed={});E.forEach(W=>{Object.defineProperty(oe,W,{get:()=>t[W],set:me=>t[W]=me,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===wn&&(n.render=I),U!=null&&(n.inheritAttrs=U),B&&(n.components=B),q&&(n.directives=q),y&&yh(n)}function ag(n,e,t=wn){ze(n)&&(n=ml(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=Cn(s.from||i,s.default,!0):r=Cn(s.from||i):r=Cn(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function lu(n,e,t){_n(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lh(n,e,t,i){let s=i.includes(".")?Wh(t,i):()=>t[i];if(pt(n)){const r=e[n];Ve(r)&&_i(s,r)}else if(Ve(n))_i(s,n.bind(t));else if(ht(n))if(ze(n))n.forEach(r=>Lh(r,e,t,i));else{const r=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(r)&&_i(s,r,n)}}function Ih(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Pa(l,c,a,!0)),Pa(l,e,a)),ht(e)&&r.set(e,l),l}function Pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Pa(n,r,t,!0),s&&s.forEach(a=>Pa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=og[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const og={data:cu,props:uu,emits:uu,methods:$s,computed:$s,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:$s,directives:$s,watch:cg,provide:cu,inject:lg};function cu(n,e){return e?n?function(){return wt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function lg(n,e){return $s(ml(n),ml(e))}function ml(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function $s(n,e){return n?wt(Object.create(null),n,e):e}function uu(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:wt(Object.create(null),ou(n),ou(e??{})):e}function cg(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Dh(){return{app:null,config:{isNativeTag:Ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ug=0;function fg(n,e){return function(i,s=null){Ve(i)||(i=wt({},i)),s!=null&&!ht(s)&&(s=null);const r=Dh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:ug++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Yg,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ve(u.install)?(a.add(u),u.install(c,...f)):Ve(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Me(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Ja(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(_n(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ys;ys=c;try{return u()}finally{ys=f}}};return c}}let ys=null;function ga(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function Cn(n,e,t=!1){const i=Rc();if(i||ys){let s=ys?ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Uh={},Nh=()=>Object.create(Uh),Fh=n=>Object.getPrototypeOf(n)===Uh;function dg(n,e,t,i=!1){const s={},r=Nh();n.propsDefaults=Object.create(null),Oh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:ih(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function hg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Qe(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Za(n.emitsOptions,d))continue;const h=e[d];if(l)if(it(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const _=ln(d);s[_]=gl(l,o,_,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Oh(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!it(e,f)&&((u=Ei(f))===f||!it(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=gl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!it(e,f))&&(delete r[f],c=!0)}c&&Gn(n.attrs,"set","")}function Oh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Qs(l))continue;const c=e[l];let u;s&&it(s,u=ln(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Qe(t),c=o||ct;for(let u=0;u<r.length;u++){const f=r[u];t[f]=gl(s,l,f,c[f],n,!it(c,f))}}return a}function gl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=it(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Rr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ei(t))&&(i=!0))}return i}const pg=new WeakMap;function Bh(n,e,t=!1){const i=t?pg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[d,h]=Bh(f,e,!0);wt(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ht(n)&&i.set(n,_s),_s;if(ze(r))for(let u=0;u<r.length;u++){const f=ln(r[u]);fu(f)&&(a[f]=ct)}else if(r)for(const u in r){const f=ln(u);if(fu(f)){const d=r[u],h=a[f]=ze(d)||Ve(d)?{type:d}:wt({},d),_=h.type;let x=!1,m=!0;if(ze(_))for(let p=0;p<_.length;++p){const T=_[p],A=Ve(T)&&T.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(m=!1)}else x=Ve(_)&&_.name==="Boolean";h[0]=x,h[1]=m,(x||it(h,"default"))&&o.push(f)}}const c=[a,o];return ht(n)&&i.set(n,c),c}function fu(n){return n[0]!=="$"&&!Qs(n)}const Ac=n=>n==="_"||n==="_ctx"||n==="$stable",Tc=n=>ze(n)?n.map(Mn):[Mn(n)],mg=(n,e,t)=>{if(e._n)return e;const i=dh((...s)=>Tc(e(...s)),t);return i._c=!1,i},zh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ac(s))continue;const r=n[s];if(Ve(r))e[s]=mg(s,r,i);else if(r!=null){const a=Tc(r);e[s]=()=>a}}},Hh=(n,e)=>{const t=Tc(e);n.slots.default=()=>t},kh=(n,e,t)=>{for(const i in e)(t||!Ac(i))&&(n[i]=e[i])},gg=(n,e,t)=>{const i=n.slots=Nh();if(n.vnode.shapeFlag&32){const s=e._;s?(kh(i,e,t),t&&zd(i,"_",s,!0)):zh(e,i)}else e&&Hh(n,e)},_g=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:kh(s,e,t):(r=!e.$stable,zh(e,s)),a=e}else e&&(Hh(n,e),a={default:1});if(r)for(const o in s)!Ac(o)&&a[o]==null&&delete s[o]},Mt=Ig;function vg(n){return xg(n)}function xg(n,e){const t=Ga();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=wn,insertStaticContent:_}=n,x=(C,g,N,w=null,P=null,D=null,j=void 0,V=null,Y=!!g.dynamicChildren)=>{if(C===g)return;C&&!pi(C,g)&&(w=O(C),Ne(C,P,D,!0),C=null),g.patchFlag===-2&&(Y=!1,g.dynamicChildren=null);const{type:ie,ref:fe,shapeFlag:M}=g;switch(ie){case $a:m(C,g,N,w);break;case It:p(C,g,N,w);break;case _o:C==null&&T(g,N,w,j);break;case Wt:B(C,g,N,w,P,D,j,V,Y);break;default:M&1?I(C,g,N,w,P,D,j,V,Y):M&6?q(C,g,N,w,P,D,j,V,Y):(M&64||M&128)&&ie.process(C,g,N,w,P,D,j,V,Y,le)}fe!=null&&P?rr(fe,C&&C.ref,D,g||C,!g):fe==null&&C&&C.ref!=null&&rr(C.ref,null,D,C,!0)},m=(C,g,N,w)=>{if(C==null)i(g.el=o(g.children),N,w);else{const P=g.el=C.el;g.children!==C.children&&c(P,g.children)}},p=(C,g,N,w)=>{C==null?i(g.el=l(g.children||""),N,w):g.el=C.el},T=(C,g,N,w)=>{[C.el,C.anchor]=_(C.children,g,N,w,C.el,C.anchor)},A=({el:C,anchor:g},N,w)=>{let P;for(;C&&C!==g;)P=d(C),i(C,N,w),C=P;i(g,N,w)},S=({el:C,anchor:g})=>{let N;for(;C&&C!==g;)N=d(C),s(C),C=N;s(g)},I=(C,g,N,w,P,D,j,V,Y)=>{g.type==="svg"?j="svg":g.type==="math"&&(j="mathml"),C==null?R(g,N,w,P,D,j,V,Y):y(C,g,P,D,j,V,Y)},R=(C,g,N,w,P,D,j,V)=>{let Y,ie;const{props:fe,shapeFlag:M,transition:v,dirs:F}=C;if(Y=C.el=a(C.type,D,fe&&fe.is,fe),M&8?u(Y,C.children):M&16&&z(C.children,Y,null,w,P,go(C,D),j,V),F&&Ti(C,null,w,"created"),L(Y,C,C.scopeId,j,w),fe){for(const re in fe)re!=="value"&&!Qs(re)&&r(Y,re,null,fe[re],D,w);"value"in fe&&r(Y,"value",null,fe.value,D),(ie=fe.onVnodeBeforeMount)&&nn(ie,w,C)}F&&Ti(C,null,w,"beforeMount");const X=Sg(P,v);X&&v.beforeEnter(Y),i(Y,g,N),((ie=fe&&fe.onVnodeMounted)||X||F)&&Mt(()=>{ie&&nn(ie,w,C),X&&v.enter(Y),F&&Ti(C,null,w,"mounted")},P)},L=(C,g,N,w,P)=>{if(N&&h(C,N),w)for(let D=0;D<w.length;D++)h(C,w[D]);if(P){let D=P.subTree;if(g===D||Ia(D.type)&&(D.ssContent===g||D.ssFallback===g)){const j=P.vnode;L(C,j,j.scopeId,j.slotScopeIds,P.parent)}}},z=(C,g,N,w,P,D,j,V,Y=0)=>{for(let ie=Y;ie<C.length;ie++){const fe=C[ie]=V?di(C[ie]):Mn(C[ie]);x(null,fe,g,N,w,P,D,j,V)}},y=(C,g,N,w,P,D,j)=>{const V=g.el=C.el;let{patchFlag:Y,dynamicChildren:ie,dirs:fe}=g;Y|=C.patchFlag&16;const M=C.props||ct,v=g.props||ct;let F;if(N&&wi(N,!1),(F=v.onVnodeBeforeUpdate)&&nn(F,N,g,C),fe&&Ti(g,C,N,"beforeUpdate"),N&&wi(N,!0),(M.innerHTML&&v.innerHTML==null||M.textContent&&v.textContent==null)&&u(V,""),ie?E(C.dynamicChildren,ie,V,N,w,go(g,P),D):j||W(C,g,V,null,N,w,go(g,P),D,!1),Y>0){if(Y&16)U(V,M,v,N,P);else if(Y&2&&M.class!==v.class&&r(V,"class",null,v.class,P),Y&4&&r(V,"style",M.style,v.style,P),Y&8){const X=g.dynamicProps;for(let re=0;re<X.length;re++){const K=X[re],_e=M[K],ue=v[K];(ue!==_e||K==="value")&&r(V,K,_e,ue,P,N)}}Y&1&&C.children!==g.children&&u(V,g.children)}else!j&&ie==null&&U(V,M,v,N,P);((F=v.onVnodeUpdated)||fe)&&Mt(()=>{F&&nn(F,N,g,C),fe&&Ti(g,C,N,"updated")},w)},E=(C,g,N,w,P,D,j)=>{for(let V=0;V<g.length;V++){const Y=C[V],ie=g[V],fe=Y.el&&(Y.type===Wt||!pi(Y,ie)||Y.shapeFlag&198)?f(Y.el):N;x(Y,ie,fe,null,w,P,D,j,!0)}},U=(C,g,N,w,P)=>{if(g!==N){if(g!==ct)for(const D in g)!Qs(D)&&!(D in N)&&r(C,D,g[D],null,P,w);for(const D in N){if(Qs(D))continue;const j=N[D],V=g[D];j!==V&&D!=="value"&&r(C,D,V,j,P,w)}"value"in N&&r(C,"value",g.value,N.value,P)}},B=(C,g,N,w,P,D,j,V,Y)=>{const ie=g.el=C?C.el:o(""),fe=g.anchor=C?C.anchor:o("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:F}=g;F&&(V=V?V.concat(F):F),C==null?(i(ie,N,w),i(fe,N,w),z(g.children||[],N,fe,P,D,j,V,Y)):M>0&&M&64&&v&&C.dynamicChildren?(E(C.dynamicChildren,v,N,P,D,j,V),(g.key!=null||P&&g===P.subTree)&&wc(C,g,!0)):W(C,g,N,fe,P,D,j,V,Y)},q=(C,g,N,w,P,D,j,V,Y)=>{g.slotScopeIds=V,C==null?g.shapeFlag&512?P.ctx.activate(g,N,w,j,Y):te(g,N,w,P,D,j,Y):ee(C,g,Y)},te=(C,g,N,w,P,D,j)=>{const V=C.component=kg(C,w,P);if(Ka(C)&&(V.ctx.renderer=le),Vg(V,!1,j),V.asyncDep){if(P&&P.registerDep(V,$,j),!C.el){const Y=V.subTree=Me(It);p(null,Y,g,N),C.placeholder=Y.el}}else $(V,C,g,N,P,D,j)},ee=(C,g,N)=>{const w=g.component=C.component;if(Pg(C,g,N))if(w.asyncDep&&!w.asyncResolved){oe(w,g,N);return}else w.next=g,w.update();else g.el=C.el,w.vnode=g},$=(C,g,N,w,P,D,j)=>{const V=()=>{if(C.isMounted){let{next:M,bu:v,u:F,parent:X,vnode:re}=C;{const we=Vh(C);if(we){M&&(M.el=re.el,oe(C,M,j)),we.asyncDep.then(()=>{C.isUnmounted||V()});return}}let K=M,_e;wi(C,!1),M?(M.el=re.el,oe(C,M,j)):M=re,v&&er(v),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&nn(_e,X,M,re),wi(C,!0);const ue=du(C),Te=C.subTree;C.subTree=ue,x(Te,ue,f(Te.el),O(Te),C,P,D),M.el=ue.el,K===null&&Lg(C,ue.el),F&&Mt(F,P),(_e=M.props&&M.props.onVnodeUpdated)&&Mt(()=>nn(_e,X,M,re),P)}else{let M;const{el:v,props:F}=g,{bm:X,m:re,parent:K,root:_e,type:ue}=C,Te=Ms(g);wi(C,!1),X&&er(X),!Te&&(M=F&&F.onVnodeBeforeMount)&&nn(M,K,g),wi(C,!0);{_e.ce&&_e.ce._def.shadowRoot!==!1&&_e.ce._injectChildStyle(ue);const we=C.subTree=du(C);x(null,we,N,w,C,P,D),g.el=we.el}if(re&&Mt(re,P),!Te&&(M=F&&F.onVnodeMounted)){const we=g;Mt(()=>nn(M,K,we),P)}(g.shapeFlag&256||K&&Ms(K.vnode)&&K.vnode.shapeFlag&256)&&C.a&&Mt(C.a,P),C.isMounted=!0,g=N=w=null}};C.scope.on();const Y=C.effect=new Gd(V);C.scope.off();const ie=C.update=Y.run.bind(Y),fe=C.job=Y.runIfDirty.bind(Y);fe.i=C,fe.id=C.uid,Y.scheduler=()=>bc(fe),wi(C,!0),ie()},oe=(C,g,N)=>{g.component=C;const w=C.vnode.props;C.vnode=g,C.next=null,hg(C,g.props,w,N),_g(C,g.children,N),jn(),eu(C),Zn()},W=(C,g,N,w,P,D,j,V,Y=!1)=>{const ie=C&&C.children,fe=C?C.shapeFlag:0,M=g.children,{patchFlag:v,shapeFlag:F}=g;if(v>0){if(v&128){ve(ie,M,N,w,P,D,j,V,Y);return}else if(v&256){me(ie,M,N,w,P,D,j,V,Y);return}}F&8?(fe&16&&se(ie,P,D),M!==ie&&u(N,M)):fe&16?F&16?ve(ie,M,N,w,P,D,j,V,Y):se(ie,P,D,!0):(fe&8&&u(N,""),F&16&&z(M,N,w,P,D,j,V,Y))},me=(C,g,N,w,P,D,j,V,Y)=>{C=C||_s,g=g||_s;const ie=C.length,fe=g.length,M=Math.min(ie,fe);let v;for(v=0;v<M;v++){const F=g[v]=Y?di(g[v]):Mn(g[v]);x(C[v],F,N,null,P,D,j,V,Y)}ie>fe?se(C,P,D,!0,!1,M):z(g,N,w,P,D,j,V,Y,M)},ve=(C,g,N,w,P,D,j,V,Y)=>{let ie=0;const fe=g.length;let M=C.length-1,v=fe-1;for(;ie<=M&&ie<=v;){const F=C[ie],X=g[ie]=Y?di(g[ie]):Mn(g[ie]);if(pi(F,X))x(F,X,N,null,P,D,j,V,Y);else break;ie++}for(;ie<=M&&ie<=v;){const F=C[M],X=g[v]=Y?di(g[v]):Mn(g[v]);if(pi(F,X))x(F,X,N,null,P,D,j,V,Y);else break;M--,v--}if(ie>M){if(ie<=v){const F=v+1,X=F<fe?g[F].el:w;for(;ie<=v;)x(null,g[ie]=Y?di(g[ie]):Mn(g[ie]),N,X,P,D,j,V,Y),ie++}}else if(ie>v)for(;ie<=M;)Ne(C[ie],P,D,!0),ie++;else{const F=ie,X=ie,re=new Map;for(ie=X;ie<=v;ie++){const Ie=g[ie]=Y?di(g[ie]):Mn(g[ie]);Ie.key!=null&&re.set(Ie.key,ie)}let K,_e=0;const ue=v-X+1;let Te=!1,we=0;const de=new Array(ue);for(ie=0;ie<ue;ie++)de[ie]=0;for(ie=F;ie<=M;ie++){const Ie=C[ie];if(_e>=ue){Ne(Ie,P,D,!0);continue}let Ce;if(Ie.key!=null)Ce=re.get(Ie.key);else for(K=X;K<=v;K++)if(de[K-X]===0&&pi(Ie,g[K])){Ce=K;break}Ce===void 0?Ne(Ie,P,D,!0):(de[Ce-X]=ie+1,Ce>=we?we=Ce:Te=!0,x(Ie,g[Ce],N,null,P,D,j,V,Y),_e++)}const Ee=Te?Mg(de):_s;for(K=Ee.length-1,ie=ue-1;ie>=0;ie--){const Ie=X+ie,Ce=g[Ie],Se=g[Ie+1],ke=Ie+1<fe?Se.el||Se.placeholder:w;de[ie]===0?x(null,Ce,N,ke,P,D,j,V,Y):Te&&(K<0||ie!==Ee[K]?Ae(Ce,N,ke,2):K--)}}},Ae=(C,g,N,w,P=null)=>{const{el:D,type:j,transition:V,children:Y,shapeFlag:ie}=C;if(ie&6){Ae(C.component.subTree,g,N,w);return}if(ie&128){C.suspense.move(g,N,w);return}if(ie&64){j.move(C,g,N,le);return}if(j===Wt){i(D,g,N);for(let M=0;M<Y.length;M++)Ae(Y[M],g,N,w);i(C.anchor,g,N);return}if(j===_o){A(C,g,N);return}if(w!==2&&ie&1&&V)if(w===0)V.beforeEnter(D),i(D,g,N),Mt(()=>V.enter(D),P);else{const{leave:M,delayLeave:v,afterLeave:F}=V,X=()=>{C.ctx.isUnmounted?s(D):i(D,g,N)},re=()=>{D._isLeaving&&D[Vn](!0),M(D,()=>{X(),F&&F()})};v?v(D,X,re):re()}else i(D,g,N)},Ne=(C,g,N,w=!1,P=!1)=>{const{type:D,props:j,ref:V,children:Y,dynamicChildren:ie,shapeFlag:fe,patchFlag:M,dirs:v,cacheIndex:F}=C;if(M===-2&&(P=!1),V!=null&&(jn(),rr(V,null,N,C,!0),Zn()),F!=null&&(g.renderCache[F]=void 0),fe&256){g.ctx.deactivate(C);return}const X=fe&1&&v,re=!Ms(C);let K;if(re&&(K=j&&j.onVnodeBeforeUnmount)&&nn(K,g,C),fe&6)Xe(C.component,N,w);else{if(fe&128){C.suspense.unmount(N,w);return}X&&Ti(C,null,g,"beforeUnmount"),fe&64?C.type.remove(C,g,N,le,w):ie&&!ie.hasOnce&&(D!==Wt||M>0&&M&64)?se(ie,g,N,!1,!0):(D===Wt&&M&384||!P&&fe&16)&&se(Y,g,N),w&&Ye(C)}(re&&(K=j&&j.onVnodeUnmounted)||X)&&Mt(()=>{K&&nn(K,g,C),X&&Ti(C,null,g,"unmounted")},N)},Ye=C=>{const{type:g,el:N,anchor:w,transition:P}=C;if(g===Wt){Ke(N,w);return}if(g===_o){S(C);return}const D=()=>{s(N),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(C.shapeFlag&1&&P&&!P.persisted){const{leave:j,delayLeave:V}=P,Y=()=>j(N,D);V?V(C.el,D,Y):Y()}else D()},Ke=(C,g)=>{let N;for(;C!==g;)N=d(C),s(C),C=N;s(g)},Xe=(C,g,N)=>{const{bum:w,scope:P,job:D,subTree:j,um:V,m:Y,a:ie}=C;La(Y),La(ie),w&&er(w),P.stop(),D&&(D.flags|=8,Ne(j,C,g,N)),V&&Mt(V,g),Mt(()=>{C.isUnmounted=!0},g)},se=(C,g,N,w=!1,P=!1,D=0)=>{for(let j=D;j<C.length;j++)Ne(C[j],g,N,w,P)},O=C=>{if(C.shapeFlag&6)return O(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const g=d(C.anchor||C.el),N=g&&g[hh];return N?d(N):g};let ne=!1;const ae=(C,g,N)=>{C==null?g._vnode&&Ne(g._vnode,null,null,!0):x(g._vnode||null,C,g,null,null,null,N),g._vnode=C,ne||(ne=!0,eu(),ch(),ne=!1)},le={p:x,um:Ne,m:Ae,r:Ye,mt:te,mc:z,pc:W,pbc:E,n:O,o:n};return{render:ae,hydrate:void 0,createApp:fg(ae)}}function go({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Sg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wc(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=di(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&wc(a,o)),o.type===$a&&o.patchFlag!==-1&&(o.el=a.el),o.type===It&&!o.el&&(o.el=a.el)}}function Mg(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Vh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vh(e)}function La(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const yg=Symbol.for("v-scx"),Eg=()=>Cn(yg);function _i(n,e,t){return Gh(n,e,t)}function Gh(n,e,t=ct){const{immediate:i,deep:s,flush:r,once:a}=t,o=wt({},t),l=e&&i||!e&&r!=="post";let c;if(mr){if(r==="sync"){const h=Eg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=wn,h.resume=wn,h.pause=wn,h}}const u=Dt;o.call=(h,_,x)=>_n(h,u,_,x);let f=!1;r==="post"?o.scheduler=h=>{Mt(h,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(h,_)=>{_?h():bc(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Om(n,e,o);return mr&&(c?c.push(d):l&&d()),d}function bg(n,e,t){const i=this.proxy,s=pt(n)?n.includes(".")?Wh(i,n):()=>i[n]:n.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,t=e);const a=Rr(this),o=Gh(s,r.bind(i),t);return a(),o}function Wh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Ag=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${Ei(e)}Modifiers`];function Tg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let s=t;const r=e.startsWith("update:"),a=r&&Ag(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>pt(u)?u.trim():u)),a.number&&(s=t.map(nm)));let o,l=i[o=oo(e)]||i[o=oo(ln(e))];!l&&r&&(l=i[o=oo(Ei(e))]),l&&_n(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(c,n,6,s)}}const wg=new WeakMap;function Xh(n,e,t=!1){const i=t?wg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const u=Xh(c,e,!0);u&&(o=!0,wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ht(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>a[l]=null):wt(a,r),ht(n)&&i.set(n,a),a)}function Za(n,e){return!n||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,Ei(e))||it(n,e))}function du(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:x}=n,m=Ca(n);let p,T;try{if(t.shapeFlag&4){const S=s||i,I=S;p=Mn(c.call(I,S,u,f,h,d,_)),T=o}else{const S=e;p=Mn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),T=e.props?o:Cg(o)}}catch(S){or.length=0,Ya(S,n,1),p=Me(It)}let A=p;if(T&&x!==!1){const S=Object.keys(T),{shapeFlag:I}=A;S.length&&I&7&&(r&&S.some(pc)&&(T=Rg(T,r)),A=$n(A,T,!1,!0))}return t.dirs&&(A=$n(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Ts(A,t.transition),p=A,Ca(m),p}const Cg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ha(t))&&((e||(e={}))[t]=n[t]);return e},Rg=(n,e)=>{const t={};for(const i in n)(!pc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Pg(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Za(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hu(i,a,c):!0:!!a;return!1}function hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Za(t,r))return!0}return!1}function Lg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ia=n=>n.__isSuspense;function Ig(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Hm(n)}const Wt=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),or=[];let $t=null;function Rn(n=!1){or.push($t=n?null:[])}function Dg(){or.pop(),$t=or[or.length-1]||null}let pr=1;function Da(n,e=!1){pr+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function qh(n){return n.dynamicChildren=pr>0?$t||_s:null,Dg(),pr>0&&$t&&$t.push(n),n}function Es(n,e,t,i,s,r){return qh(st(n,e,t,i,s,r,!0))}function _a(n,e,t,i,s){return qh(Me(n,e,t,i,s,!0))}function ws(n){return n?n.__v_isVNode===!0:!1}function pi(n,e){return n.type===e.type&&n.key===e.key}const Yh=({key:n})=>n??null,va=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||Ut(n)||Ve(n)?{i:Zt,r:n,k:e,f:!!t}:n:null);function st(n,e=null,t=null,i=0,s=null,r=n===Wt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yh(e),ref:e&&va(e),scopeId:fh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return o?(Cc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),pr>0&&!a&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const Me=Ug;function Ug(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Rh)&&(n=It),ws(n)){const o=$n(n,e,!0);return t&&Cc(o,t),pr>0&&!r&&$t&&(o.shapeFlag&6?$t[$t.indexOf(n)]=o:$t.push(o)),o.patchFlag=-2,o}if(qg(n)&&(n=n.__vccOpts),e){e=Ng(e);let{class:o,style:l}=e;o&&!pt(o)&&(e.class=Xa(o)),ht(l)&&(Ec(l)&&!ze(l)&&(l=wt({},l)),e.style=Wa(l))}const a=pt(n)?1:Ia(n)?128:ph(n)?64:ht(n)?4:Ve(n)?2:0;return st(n,e,t,i,s,a,r,!0)}function Ng(n){return n?Ec(n)||Fh(n)?wt({},n):n:null}function $n(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Bg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yh(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(va(e)):[r,va(e)]:va(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$n(n.ssContent),ssFallback:n.ssFallback&&$n(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ts(u,l.clone(u)),u}function Fg(n=" ",e=0){return Me($a,null,n,e)}function Og(n="",e=!1){return e?(Rn(),_a(It,null,n)):Me(It,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Me(It):ze(n)?Me(Wt,null,n.slice()):ws(n)?di(n):Me($a,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$n(n)}function Cc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Cc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Fh(e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),i&64?(t=16,e=[Fg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Xa([e.class,i.class]));else if(s==="style")e.style=Wa([e.style,i.style]);else if(Ha(s)){const r=e[s],a=i[s];a&&r!==a&&!(ze(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function nn(n,e,t,i=null){_n(n,e,7,[t,i])}const zg=Dh();let Hg=0;function kg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||zg,r={uid:Hg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bh(i,s),emitsOptions:Xh(i,s),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Tg.bind(null,r),n.ce&&n.ce(r),r}let Dt=null;const Rc=()=>Dt||Zt;let Ua,_l;{const n=Ga(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ua=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),_l=e("__VUE_SSR_SETTERS__",t=>mr=t)}const Rr=n=>{const e=Dt;return Ua(n),n.scope.on(),()=>{n.scope.off(),Ua(e)}},pu=()=>{Dt&&Dt.scope.off(),Ua(null)};function Kh(n){return n.vnode.shapeFlag&4}let mr=!1;function Vg(n,e=!1,t=!1){e&&_l(e);const{props:i,children:s}=n.vnode,r=Kh(n);dg(n,i,r,e),gg(n,s,t||e);const a=r?Gg(n,e):void 0;return e&&_l(!1),a}function Gg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sg);const{setup:i}=t;if(i){jn();const s=n.setupContext=i.length>1?Xg(n):null,r=Rr(n),a=Tr(i,n,0,[n.props,s]),o=Fd(a);if(Zn(),r(),(o||n.sp)&&!Ms(n)&&yh(n),o){if(a.then(pu,pu),e)return a.then(l=>{mu(n,l)}).catch(l=>{Ya(l,n,0)});n.asyncDep=a}else mu(n,a)}else jh(n)}function mu(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=ah(e)),jh(n)}function jh(n,e,t){const i=n.type;n.render||(n.render=i.render||wn);{const s=Rr(n);jn();try{rg(n)}finally{Zn(),s()}}}const Wg={get(n,e){return Lt(n,"get",""),n[e]}};function Xg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wg),slots:n.slots,emit:n.emit,expose:e}}function Ja(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ah(Pm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](n)},has(e,t){return t in e||t in ar}})):n.proxy}function vl(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function qg(n){return Ve(n)&&"__vccOpts"in n}const yt=(n,e)=>Nm(n,e,mr);function Pc(n,e,t){const i=(r,a,o)=>{Da(-1);try{return Me(r,a,o)}finally{Da(1)}},s=arguments.length;return s===2?ht(e)&&!ze(e)?ws(e)?i(n,null,[e]):i(n,e):i(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ws(t)&&(t=[t]),i(n,e,t))}const Yg="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xl;const gu=typeof window<"u"&&window.trustedTypes;if(gu)try{xl=gu.createPolicy("vue",{createHTML:n=>n})}catch{}const Zh=xl?n=>xl.createHTML(n):n=>n,Kg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,_u=kn&&kn.createElement("template"),Zg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?kn.createElementNS(Kg,n):e==="mathml"?kn.createElementNS(jg,n):t?kn.createElement(n,{is:t}):kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>kn.createTextNode(n),createComment:n=>kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{_u.innerHTML=Zh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=_u.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ii="transition",ks="animation",gr=Symbol("_vtc"),$h={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$g=wt({},_h,$h),Jg=n=>(n.displayName="Transition",n.props=$g,n),vo=Jg((n,{slots:e})=>Pc(Xm,Qg(n),e)),Ci=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},vu=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Qg(n){const e={};for(const B in n)B in $h||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=e_(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:A,onLeave:S,onLeaveCancelled:I,onBeforeAppear:R=p,onAppear:L=T,onAppearCancelled:z=A}=e,y=(B,q,te,ee)=>{B._enterCancelled=ee,Ri(B,q?u:o),Ri(B,q?c:a),te&&te()},E=(B,q)=>{B._isLeaving=!1,Ri(B,f),Ri(B,h),Ri(B,d),q&&q()},U=B=>(q,te)=>{const ee=B?L:T,$=()=>y(q,B,te);Ci(ee,[q,$]),xu(()=>{Ri(q,B?l:r),Dn(q,B?u:o),vu(ee)||Su(q,i,x,$)})};return wt(e,{onBeforeEnter(B){Ci(p,[B]),Dn(B,r),Dn(B,a)},onBeforeAppear(B){Ci(R,[B]),Dn(B,l),Dn(B,c)},onEnter:U(!1),onAppear:U(!0),onLeave(B,q){B._isLeaving=!0;const te=()=>E(B,q);Dn(B,f),B._enterCancelled?(Dn(B,d),Eu()):(Eu(),Dn(B,d)),xu(()=>{B._isLeaving&&(Ri(B,f),Dn(B,h),vu(S)||Su(B,i,m,te))}),Ci(S,[B,te])},onEnterCancelled(B){y(B,!1,void 0,!0),Ci(A,[B])},onAppearCancelled(B){y(B,!0,void 0,!0),Ci(z,[B])},onLeaveCancelled(B){E(B),Ci(I,[B])}})}function e_(n){if(n==null)return null;if(ht(n))return[xo(n.enter),xo(n.leave)];{const e=xo(n);return[e,e]}}function xo(n){return im(n)}function Dn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[gr]||(n[gr]=new Set)).add(e)}function Ri(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[gr];t&&(t.delete(e),t.size||(n[gr]=void 0))}function xu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let t_=0;function Su(n,e,t,i){const s=n._endId=++t_,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=n_(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,d)}function n_(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${ii}Delay`),r=i(`${ii}Duration`),a=Mu(s,r),o=i(`${ks}Delay`),l=i(`${ks}Duration`),c=Mu(o,l);let u=null,f=0,d=0;e===ii?a>0&&(u=ii,f=a,d=r.length):e===ks?c>0&&(u=ks,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?ii:ks:null,d=u?u===ii?r.length:l.length:0);const h=u===ii&&/\b(?:transform|all)(?:,|$)/.test(i(`${ii}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Mu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>yu(t)+yu(n[i])))}function yu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Eu(){return document.body.offsetHeight}function i_(n,e,t){const i=n[gr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Na=Symbol("_vod"),Jh=Symbol("_vsh"),hs={name:"show",beforeMount(n,{value:e},{transition:t}){n[Na]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Vs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Vs(n,!0),i.enter(n)):i.leave(n,()=>{Vs(n,!1)}):Vs(n,e))},beforeUnmount(n,{value:e}){Vs(n,e)}};function Vs(n,e){n.style.display=e?n[Na]:"none",n[Jh]=!e}const s_=Symbol(""),r_=/(?:^|;)\s*display\s*:/;function a_(n,e,t){const i=n.style,s=pt(t);let r=!1;if(t&&!s){if(e)if(pt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&xa(i,o,"")}else for(const a in e)t[a]==null&&xa(i,a,"");for(const a in t)a==="display"&&(r=!0),xa(i,a,t[a])}else if(s){if(e!==t){const a=i[s_];a&&(t+=";"+a),i.cssText=t,r=r_.test(t)}}else e&&n.removeAttribute("style");Na in n&&(n[Na]=r?i.display:"",n[Jh]&&(i.display="none"))}const bu=/\s*!important$/;function xa(n,e,t){if(ze(t))t.forEach(i=>xa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=o_(n,e);bu.test(t)?n.setProperty(Ei(i),t.replace(bu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],So={};function o_(n,e){const t=So[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return So[e]=i;i=Va(i);for(let s=0;s<Au.length;s++){const r=Au[s]+i;if(r in n)return So[e]=r}return e}const Tu="http://www.w3.org/1999/xlink";function wu(n,e,t,i,s,r=cm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||r&&!Hd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":yi(t)?String(t):t)}function Cu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Hd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function l_(n,e,t,i){n.addEventListener(e,t,i)}function c_(n,e,t,i){n.removeEventListener(e,t,i)}const Ru=Symbol("_vei");function u_(n,e,t,i,s=null){const r=n[Ru]||(n[Ru]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=f_(e);if(i){const c=r[e]=p_(i,s);l_(n,o,c,l)}else a&&(c_(n,o,a,l),r[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function f_(n){let e;if(Pu.test(n)){e={};let i;for(;i=n.match(Pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ei(n.slice(2)),e]}let Mo=0;const d_=Promise.resolve(),h_=()=>Mo||(d_.then(()=>Mo=0),Mo=Date.now());function p_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(m_(i,t.value),e,5,[i])};return t.value=n,t.attached=h_(),t}function m_(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,g_=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?i_(n,i,a):e==="style"?a_(n,t,i):Ha(e)?pc(e)||u_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):__(n,e,i,a))?(Cu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wu(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!pt(i))?Cu(n,ln(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),wu(n,e,i,a))};function __(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lu(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lu(e)&&pt(t)?!1:e in n}const v_=["ctrl","shift","alt","meta"],x_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>v_.some(t=>n[`${t}Key`]&&!e.includes(t))},S_=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=x_[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},M_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},y_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Ei(s.key);if(e.some(a=>a===r||M_[a]===r))return n(s)}))},E_=wt({patchProp:g_},Zg);let Iu;function b_(){return Iu||(Iu=vg(E_))}const A_=((...n)=>{const e=b_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=w_(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,T_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function T_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function w_(n){return pt(n)?document.querySelector(n):n}const C_={__name:"App",setup(n){const e=["HomePage"];return(t,i)=>{const s=tg("router-view");return Rn(),_a(s,null,{default:dh(({Component:r})=>[(Rn(),_a(Ym,{include:e},[(Rn(),_a(ng(r)))],1024))]),_:1})}}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function Qh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function R_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Qh(n.default)}const nt=Object.assign;function yo(n,e){const t={};for(const i in e){const s=e[i];t[i]=vn(s)?s.map(n):n(s)}return t}const lr=()=>{},vn=Array.isArray,ep=/#/g,P_=/&/g,L_=/\//g,I_=/=/g,D_=/\?/g,tp=/\+/g,U_=/%5B/g,N_=/%5D/g,np=/%5E/g,F_=/%60/g,ip=/%7B/g,O_=/%7C/g,sp=/%7D/g,B_=/%20/g;function Lc(n){return encodeURI(""+n).replace(O_,"|").replace(U_,"[").replace(N_,"]")}function z_(n){return Lc(n).replace(ip,"{").replace(sp,"}").replace(np,"^")}function Sl(n){return Lc(n).replace(tp,"%2B").replace(B_,"+").replace(ep,"%23").replace(P_,"%26").replace(F_,"`").replace(ip,"{").replace(sp,"}").replace(np,"^")}function H_(n){return Sl(n).replace(I_,"%3D")}function k_(n){return Lc(n).replace(ep,"%23").replace(D_,"%3F")}function V_(n){return n==null?"":k_(n).replace(L_,"%2F")}function _r(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const G_=/\/$/,W_=n=>n.replace(G_,"");function Eo(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=n(r)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=K_(i??e,t),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:_r(a)}}function X_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Du(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function q_(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Cs(e.matched[i],t.matched[s])&&rp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Cs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function rp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Y_(n[t],e[t]))return!1;return!0}function Y_(n,e){return vn(n)?Uu(n,e):vn(e)?Uu(e,n):n===e}function Uu(n,e){return vn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function K_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vr;(function(n){n.pop="pop",n.push="push"})(vr||(vr={}));var cr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(cr||(cr={}));function j_(n){if(!n)if(ps){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),W_(n)}const Z_=/^[^#]+#/;function $_(n,e){return n.replace(Z_,"#")+e}function J_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function Q_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=J_(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nu(n,e){return(history.state?history.state.position-e:-1)+n}const Ml=new Map;function e0(n,e){Ml.set(n,e)}function t0(n){const e=Ml.get(n);return Ml.delete(n),e}let n0=()=>location.protocol+"//"+location.host;function ap(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Du(l,"")}return Du(t,n)+i+s}function i0(n,e,t,i){let s=[],r=[],a=null;const o=({state:d})=>{const h=ap(n,location),_=t.value,x=e.value;let m=0;if(d){if(t.value=h,e.value=d,a&&a===_){a=null;return}m=x?d.position-x.position:0}else i(h);s.forEach(p=>{p(t.value,_,{delta:m,type:vr.pop,direction:m?m>0?cr.forward:cr.back:cr.unknown})})};function l(){a=t.value}function c(d){s.push(d);const h=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(nt({},d.state,{scroll:Qa()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Fu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Qa():null}}function s0(n){const{history:e,location:t}=window,i={value:ap(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:n0()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function a(l,c){const u=nt({},e.state,Fu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function o(l,c){const u=nt({},s.value,e.state,{forward:l,scroll:Qa()});r(u.current,u,!0);const f=nt({},Fu(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function r0(n){n=j_(n);const e=s0(n),t=i0(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=nt({location:"",base:n,go:i,createHref:$_.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function a0(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),r0(n)}function o0(n){return typeof n=="string"||n&&typeof n=="object"}function op(n){return typeof n=="string"||typeof n=="symbol"}const lp=Symbol("");var Ou;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ou||(Ou={}));function Rs(n,e){return nt(new Error,{type:n,[lp]:!0},e)}function Un(n,e){return n instanceof Error&&lp in n&&(e==null||!!(n.type&e))}const Bu="[^/]+?",l0={sensitive:!1,strict:!1,start:!0,end:!0},c0=/[.+*?^${}()[\]/\\]/g;function u0(n,e){const t=nt({},l0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(c0,"\\$&"),h+=40;else if(d.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=d;r.push({name:_,repeatable:x,optional:m});const T=p||Bu;if(T!==Bu){h+=10;try{new RegExp(`(${T})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+S.message)}}let A=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,h+=20,m&&(h+=-8),x&&(h+=-20),T===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=r[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:x,optional:m}=h,p=_ in c?c[_]:"";if(vn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=vn(p)?p.join("/"):p;if(!T)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=T}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function f0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=f0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(zu(i))return 1;if(zu(s))return-1}return s.length-i.length}function zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const d0={type:0,value:""},h0=/[a-zA-Z0-9_]/;function p0(n){if(!n)return[[]];if(n==="/")return[[d0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:h0.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),s}function m0(n,e,t){const i=u0(p0(n.path),t),s=nt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function g0(n,e){const t=[],i=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,d,h){const _=!h,x=ku(f);x.aliasOf=h&&h.record;const m=Gu(e,f),p=[x];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of S)p.push(ku(nt({},x,{components:h?h.record.components:x.components,path:I,aliasOf:h?h.record:x})))}let T,A;for(const S of p){const{path:I}=S;if(d&&I[0]!=="/"){const R=d.record.path,L=R[R.length-1]==="/"?"":"/";S.path=d.record.path+(I&&L+I)}if(T=m0(S,d,m),h?h.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),_&&f.name&&!Vu(T)&&a(f.name)),up(T)&&l(T),x.children){const R=x.children;for(let L=0;L<R.length;L++)r(R[L],T,h&&h.children[L])}h=h||T}return A?()=>{a(A)}:lr}function a(f){if(op(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=x0(f,t);t.splice(d,0,f),f.record.name&&!Vu(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},x,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Rs(1,{location:f});m=h.record.name,_=nt(Hu(d.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Hu(f.params,h.keys.map(A=>A.name))),x=h.stringify(_)}else if(f.path!=null)x=f.path,h=t.find(A=>A.re.test(x)),h&&(_=h.parse(x),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(A=>A.re.test(d.path)),!h)throw Rs(1,{location:f,currentLocation:d});m=h.record.name,_=nt({},d.params,f.params),x=h.stringify(_)}const p=[];let T=h;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:x,params:_,matched:p,meta:v0(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Hu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function ku(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:_0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Vu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function v0(n){return n.reduce((e,t)=>nt(e,t.meta),{})}function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function x0(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;cp(n,e[r])<0?i=r:t=r+1}const s=S0(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function S0(n){let e=n;for(;e=e.parent;)if(up(e)&&cp(n,e)===0)return e}function up({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function M0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(tp," "),a=r.indexOf("="),o=_r(a<0?r:r.slice(0,a)),l=a<0?null:_r(r.slice(a+1));if(o in e){let c=e[o];vn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Wu(n){let e="";for(let t in n){const i=n[t];if(t=H_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(vn(i)?i.map(r=>r&&Sl(r)):[i&&Sl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function y0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=vn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const E0=Symbol(""),Xu=Symbol(""),eo=Symbol(""),fp=Symbol(""),yl=Symbol("");function Gs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function hi(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(Rs(4,{from:t,to:e})):d instanceof Error?l(d):o0(d)?l(Rs(2,{from:e,to:d})):(a&&i.enterCallbacks[s]===a&&typeof d=="function"&&a.push(d),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function bo(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Qh(l)){const u=(l.__vccOpts||l)[e];u&&r.push(hi(u,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=R_(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&hi(h,t,i,a,o,s)()}))}}return r}function qu(n){const e=Cn(eo),t=Cn(fp),i=yt(()=>{const l=qn(n.to);return e.resolve(l)}),s=yt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(Cs.bind(null,u));if(d>-1)return d;const h=Yu(l[c-2]);return c>1&&Yu(u)===h&&f[f.length-1].path!==h?f.findIndex(Cs.bind(null,l[c-2])):d}),r=yt(()=>s.value>-1&&C0(t.params,i.value.params)),a=yt(()=>s.value>-1&&s.value===t.matched.length-1&&rp(t.params,i.value.params));function o(l={}){if(w0(l)){const c=e[qn(n.replace)?"replace":"push"](qn(n.to)).catch(lr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:yt(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function b0(n){return n.length===1?n[0]:n}const A0=Ns({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:qu,setup(n,{slots:e}){const t=Wi(qu(n)),{options:i}=Cn(eo),s=yt(()=>({[Ku(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ku(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&b0(e.default(t));return n.custom?r:Pc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),T0=A0;function w0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function C0(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!vn(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function Yu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ku=(n,e,t)=>n??e??t,R0=Ns({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Cn(yl),s=yt(()=>n.route||i.value),r=Cn(Xu,0),a=yt(()=>{let c=qn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=yt(()=>s.value.matched[a.value]);ga(Xu,yt(()=>a.value+1)),ga(E0,o),ga(yl,s);const l=Tt();return _i(()=>[l.value,o.value,n.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Cs(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=o.value,d=f&&f.components[u];if(!d)return ju(t.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Pc(d,nt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ju(t.default,{Component:m,route:c})||m}}});function ju(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const P0=R0;function L0(n){const e=g0(n.routes,n),t=n.parseQuery||M0,i=n.stringifyQuery||Wu,s=n.history,r=Gs(),a=Gs(),o=Gs(),l=Lm(si);let c=si;ps&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yo.bind(null,O=>""+O),f=yo.bind(null,V_),d=yo.bind(null,_r);function h(O,ne){let ae,le;return op(O)?(ae=e.getRecordMatcher(O),le=ne):le=O,e.addRoute(le,ae)}function _(O){const ne=e.getRecordMatcher(O);ne&&e.removeRoute(ne)}function x(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,ne){if(ne=nt({},ne||l.value),typeof O=="string"){const N=Eo(t,O,ne.path),w=e.resolve({path:N.path},ne),P=s.createHref(N.fullPath);return nt(N,w,{params:d(w.params),hash:_r(N.hash),redirectedFrom:void 0,href:P})}let ae;if(O.path!=null)ae=nt({},O,{path:Eo(t,O.path,ne.path).path});else{const N=nt({},O.params);for(const w in N)N[w]==null&&delete N[w];ae=nt({},O,{params:f(N)}),ne.params=f(ne.params)}const le=e.resolve(ae,ne),Re=O.hash||"";le.params=u(d(le.params));const C=X_(i,nt({},O,{hash:z_(Re),path:le.path})),g=s.createHref(C);return nt({fullPath:C,hash:Re,query:i===Wu?y0(O.query):O.query||{}},le,{redirectedFrom:void 0,href:g})}function T(O){return typeof O=="string"?Eo(t,O,l.value.path):nt({},O)}function A(O,ne){if(c!==O)return Rs(8,{from:ne,to:O})}function S(O){return L(O)}function I(O){return S(nt(T(O),{replace:!0}))}function R(O){const ne=O.matched[O.matched.length-1];if(ne&&ne.redirect){const{redirect:ae}=ne;let le=typeof ae=="function"?ae(O):ae;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=T(le):{path:le},le.params={}),nt({query:O.query,hash:O.hash,params:le.path!=null?{}:O.params},le)}}function L(O,ne){const ae=c=p(O),le=l.value,Re=O.state,C=O.force,g=O.replace===!0,N=R(ae);if(N)return L(nt(T(N),{state:typeof N=="object"?nt({},Re,N.state):Re,force:C,replace:g}),ne||ae);const w=ae;w.redirectedFrom=ne;let P;return!C&&q_(i,le,ae)&&(P=Rs(16,{to:w,from:le}),Ae(le,le,!0,!1)),(P?Promise.resolve(P):E(w,le)).catch(D=>Un(D)?Un(D,2)?D:ve(D):W(D,w,le)).then(D=>{if(D){if(Un(D,2))return L(nt({replace:g},T(D.to),{state:typeof D.to=="object"?nt({},Re,D.to.state):Re,force:C}),ne||w)}else D=B(w,le,!0,g,Re);return U(w,le,D),D})}function z(O,ne){const ae=A(O,ne);return ae?Promise.reject(ae):Promise.resolve()}function y(O){const ne=Ke.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(O):O()}function E(O,ne){let ae;const[le,Re,C]=I0(O,ne);ae=bo(le.reverse(),"beforeRouteLeave",O,ne);for(const N of le)N.leaveGuards.forEach(w=>{ae.push(hi(w,O,ne))});const g=z.bind(null,O,ne);return ae.push(g),se(ae).then(()=>{ae=[];for(const N of r.list())ae.push(hi(N,O,ne));return ae.push(g),se(ae)}).then(()=>{ae=bo(Re,"beforeRouteUpdate",O,ne);for(const N of Re)N.updateGuards.forEach(w=>{ae.push(hi(w,O,ne))});return ae.push(g),se(ae)}).then(()=>{ae=[];for(const N of C)if(N.beforeEnter)if(vn(N.beforeEnter))for(const w of N.beforeEnter)ae.push(hi(w,O,ne));else ae.push(hi(N.beforeEnter,O,ne));return ae.push(g),se(ae)}).then(()=>(O.matched.forEach(N=>N.enterCallbacks={}),ae=bo(C,"beforeRouteEnter",O,ne,y),ae.push(g),se(ae))).then(()=>{ae=[];for(const N of a.list())ae.push(hi(N,O,ne));return ae.push(g),se(ae)}).catch(N=>Un(N,8)?N:Promise.reject(N))}function U(O,ne,ae){o.list().forEach(le=>y(()=>le(O,ne,ae)))}function B(O,ne,ae,le,Re){const C=A(O,ne);if(C)return C;const g=ne===si,N=ps?history.state:{};ae&&(le||g?s.replace(O.fullPath,nt({scroll:g&&N&&N.scroll},Re)):s.push(O.fullPath,Re)),l.value=O,Ae(O,ne,ae,g),ve()}let q;function te(){q||(q=s.listen((O,ne,ae)=>{if(!Xe.listening)return;const le=p(O),Re=R(le);if(Re){L(nt(Re,{replace:!0,force:!0}),le).catch(lr);return}c=le;const C=l.value;ps&&e0(Nu(C.fullPath,ae.delta),Qa()),E(le,C).catch(g=>Un(g,12)?g:Un(g,2)?(L(nt(T(g.to),{force:!0}),le).then(N=>{Un(N,20)&&!ae.delta&&ae.type===vr.pop&&s.go(-1,!1)}).catch(lr),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),W(g,le,C))).then(g=>{g=g||B(le,C,!1),g&&(ae.delta&&!Un(g,8)?s.go(-ae.delta,!1):ae.type===vr.pop&&Un(g,20)&&s.go(-1,!1)),U(le,C,g)}).catch(lr)}))}let ee=Gs(),$=Gs(),oe;function W(O,ne,ae){ve(O);const le=$.list();return le.length?le.forEach(Re=>Re(O,ne,ae)):console.error(O),Promise.reject(O)}function me(){return oe&&l.value!==si?Promise.resolve():new Promise((O,ne)=>{ee.add([O,ne])})}function ve(O){return oe||(oe=!O,te(),ee.list().forEach(([ne,ae])=>O?ae(O):ne()),ee.reset()),O}function Ae(O,ne,ae,le){const{scrollBehavior:Re}=n;if(!ps||!Re)return Promise.resolve();const C=!ae&&t0(Nu(O.fullPath,0))||(le||!ae)&&history.state&&history.state.scroll||null;return Xi().then(()=>Re(O,ne,C)).then(g=>g&&Q_(g)).catch(g=>W(g,O,ne))}const Ne=O=>s.go(O);let Ye;const Ke=new Set,Xe={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:S,replace:I,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:$.add,isReady:me,install(O){const ne=this;O.component("RouterLink",T0),O.component("RouterView",P0),O.config.globalProperties.$router=ne,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>qn(l)}),ps&&!Ye&&l.value===si&&(Ye=!0,S(s.location).catch(Re=>{}));const ae={};for(const Re in si)Object.defineProperty(ae,Re,{get:()=>l.value[Re],enumerable:!0});O.provide(eo,ne),O.provide(fp,ih(ae)),O.provide(yl,l);const le=O.unmount;Ke.add(O),O.unmount=function(){Ke.delete(O),Ke.size<1&&(c=si,q&&q(),q=null,l.value=si,Ye=!1,oe=!1),le()}}};function se(O){return O.reduce((ne,ae)=>ne.then(()=>y(ae)),Promise.resolve())}return Xe}function I0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>Cs(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Cs(c,l))||s.push(l))}return[t,i,s]}function dp(){return Cn(eo)}const Zu="/Intellectuals-Artificial-Criminals/assets/main-Cs9XujVv.png",$u="/Intellectuals-Artificial-Criminals/assets/main-BOew1blX.png",Ju="/Intellectuals-Artificial-Criminals/assets/main-6dsQo_NM.png",Qu="/Intellectuals-Artificial-Criminals/assets/main-BXz5-tXQ.png",ef="/Intellectuals-Artificial-Criminals/assets/main-7aio8rRT.png",tf="/Intellectuals-Artificial-Criminals/assets/main-DpKay_JU.png",nf="/Intellectuals-Artificial-Criminals/assets/main-H_jEmex-.png",sf="/Intellectuals-Artificial-Criminals/assets/main-ktMHolTJ.png",rf="/Intellectuals-Artificial-Criminals/assets/main-D7u4htCg.png",af="/Intellectuals-Artificial-Criminals/assets/main-D1f_DCh0.png",of="/Intellectuals-Artificial-Criminals/assets/main-X7dAJ8OL.png",lf="/Intellectuals-Artificial-Criminals/assets/main-BkYhBiNJ.png",cf="/Intellectuals-Artificial-Criminals/assets/main-I1_jZpsc.png",uf="/Intellectuals-Artificial-Criminals/assets/main-BTWgAxQf.png",ff="/Intellectuals-Artificial-Criminals/assets/main-ClOrT7TX.png",df="/Intellectuals-Artificial-Criminals/assets/main-D-kHUNp9.png",hf="/Intellectuals-Artificial-Criminals/assets/main-CVy6GavT.png",pf="/Intellectuals-Artificial-Criminals/assets/main-C44tZcbo.png",mf="/Intellectuals-Artificial-Criminals/assets/main-Cp-x3LPW.png",gf="/Intellectuals-Artificial-Criminals/assets/main-3zbWLhSS.png",_f="/Intellectuals-Artificial-Criminals/assets/main-BlcRV1z1.png",vf="/Intellectuals-Artificial-Criminals/assets/main-B5DbmC50.png",xf="/Intellectuals-Artificial-Criminals/assets/main-Dvo_k0y6.png",Sf="/Intellectuals-Artificial-Criminals/assets/main-X5wZs84z.png",Mf="/Intellectuals-Artificial-Criminals/assets/main-BV3fVj--.png",yf="/Intellectuals-Artificial-Criminals/assets/main-Nm5irmdG.png",Ef="/Intellectuals-Artificial-Criminals/assets/main-Cu1t-ec3.png",bf="/Intellectuals-Artificial-Criminals/assets/main-Ci9C1MAC.png",Af="/Intellectuals-Artificial-Criminals/assets/main-BZdNyzSs.png",Tf="/Intellectuals-Artificial-Criminals/assets/main-Bw4WBjuO.png",D0="/Intellectuals-Artificial-Criminals/assets/loading-CX0nHeT-.gif";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="180",U0=0,wf=1,N0=2,hp=1,F0=2,Hn=3,Mi=0,Xt=1,En=2,vi=0,bs=1,Cf=2,Rf=3,Pf=4,O0=5,zi=100,B0=101,z0=102,H0=103,k0=104,V0=200,G0=201,W0=202,X0=203,El=204,bl=205,q0=206,Y0=207,K0=208,j0=209,Z0=210,$0=211,J0=212,Q0=213,ev=214,Al=0,Tl=1,wl=2,Ps=3,Cl=4,Rl=5,Pl=6,Ll=7,pp=0,tv=1,nv=2,xi=0,iv=1,sv=2,rv=3,av=4,ov=5,lv=6,cv=7,mp=300,Ls=301,Is=302,Il=303,Dl=304,to=306,Ul=1e3,ki=1001,Nl=1002,gn=1003,uv=1004,Xr=1005,bn=1006,Ao=1007,Vi=1008,Jn=1009,gp=1010,_p=1011,xr=1012,Dc=1013,qi=1014,Xn=1015,Pr=1016,Uc=1017,Nc=1018,Sr=1020,vp=35902,xp=35899,Sp=1021,Mp=1022,pn=1023,Mr=1026,yr=1027,yp=1028,Fc=1029,Ep=1030,Oc=1031,Bc=1033,Sa=33776,Ma=33777,ya=33778,Ea=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,Hl=36196,kl=37492,Vl=37496,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Kl=37813,jl=37814,Zl=37815,$l=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,ac=36283,oc=36284,lc=36285,cc=36286,fv=3200,dv=3201,hv=0,pv=1,mi="",sn="srgb",Ds="srgb-linear",Fa="linear",ot="srgb",Zi=7680,Lf=519,mv=512,gv=513,_v=514,bp=515,vv=516,xv=517,Sv=518,Mv=519,If=35044,Df="300 es",An=2e3,Oa=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,uc=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function yv(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],h=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==d||c!==h||u!==_){let m=1-o;const p=l*d+c*h+u*_+f*x,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const I=Math.sqrt(A),R=Math.atan2(I,p*T);m=Math.sin(m*R)/I,o=Math.sin(o*R)/I}const S=o*T;if(l=l*m+d*S,c=c*m+h*S,u=u*m+_*S,f=f*m+x*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],h=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),h=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new Z,Uf=new Ir;class We{constructor(e,t,i,s,r,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],x=s[0],m=s[3],p=s[6],T=s[1],A=s[4],S=s[7],I=s[2],R=s[5],L=s[8];return r[0]=a*x+o*T+l*I,r[3]=a*m+o*A+l*R,r[6]=a*p+o*S+l*L,r[1]=c*x+u*T+f*I,r[4]=c*m+u*A+f*R,r[7]=c*p+u*S+f*L,r[2]=d*x+h*T+_*I,r[5]=d*m+h*A+_*R,r[8]=d*p+h*S+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,_=t*f+i*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new We;function Ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ev(){const n=Er("canvas");return n.style.display="block",n}const Nf={};function br(n){n in Nf||(Nf[n]=!0,console.warn(n))}function bv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ff=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Fa,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const Je=Av();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class Tv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=Er("canvas")),$i.width=e.width,$i.height=e.height;const s=$i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wv=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cv=0;const Lo=new Z;class Nt extends Fs{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=ki,s=ki,r=bn,a=Vi,o=pn,l=Jn,c=Nt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Lr(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ul:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ul:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=mp;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,S=(h+1)/2,I=(p+1)/2,R=(u+d)/4,L=(f+x)/4,z=(_+m)/4;return A>S&&A>I?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=L/i):S>I?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=z/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=z/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rv extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Nt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Rv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tp extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Yr.subVectors(this.max,Xs),Ji.subVectors(e.a,Xs),Qi.subVectors(e.b,Xs),es.subVectors(e.c,Xs),ri.subVectors(Qi,Ji),ai.subVectors(es,Qi),Pi.subVectors(Ji,es);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!Io(t,Ji,Qi,es,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Ji,Qi,es,Yr))?!1:(Kr.crossVectors(ri,ai),t=[Kr.x,Kr.y,Kr.z],Io(t,Ji,Qi,es,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],cn=new Z,qr=new Dr,Ji=new Z,Qi=new Z,es=new Z,ri=new Z,ai=new Z,Pi=new Z,Xs=new Z,Yr=new Z,Kr=new Z,Li=new Z;function Io(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lv=new Dr,qs=new Z,Do=new Z;class no{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Do)),this.expandByPoint(qs.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new Z,Uo=new Z,jr=new Z,oi=new Z,No=new Z,Zr=new Z,Fo=new Z;class Hc{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uo.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=oi.dot(this.direction),l=-oi.dot(jr),c=oi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Uo).addScaledVector(jr,d),h}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,s,r){No.subVectors(t,e),Zr.subVectors(i,e),Fo.crossVectors(No,Zr);let a=this.direction.dot(Fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Zr.crossVectors(oi,Zr));if(l<0)return null;const c=o*this.direction.dot(No.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(Fo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,a,o,l,c,u,f,d,h,_,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,h,_,x,m)}set(e,t,i,s,r,a,o,l,c,u,f,d,h,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,x=c*f;t[0]=d+x*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,x=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iv,e,Dv)}lookAt(e,t,i){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),li.crossVectors(i,Kt),li.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),li.crossVectors(i,Kt)),li.normalize(),$r.crossVectors(Kt,li),s[0]=li.x,s[4]=$r.x,s[8]=Kt.x,s[1]=li.y,s[5]=$r.y,s[9]=Kt.y,s[2]=li.z,s[6]=$r.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],x=i[6],m=i[10],p=i[14],T=i[3],A=i[7],S=i[11],I=i[15],R=s[0],L=s[4],z=s[8],y=s[12],E=s[1],U=s[5],B=s[9],q=s[13],te=s[2],ee=s[6],$=s[10],oe=s[14],W=s[3],me=s[7],ve=s[11],Ae=s[15];return r[0]=a*R+o*E+l*te+c*W,r[4]=a*L+o*U+l*ee+c*me,r[8]=a*z+o*B+l*$+c*ve,r[12]=a*y+o*q+l*oe+c*Ae,r[1]=u*R+f*E+d*te+h*W,r[5]=u*L+f*U+d*ee+h*me,r[9]=u*z+f*B+d*$+h*ve,r[13]=u*y+f*q+d*oe+h*Ae,r[2]=_*R+x*E+m*te+p*W,r[6]=_*L+x*U+m*ee+p*me,r[10]=_*z+x*B+m*$+p*ve,r[14]=_*y+x*q+m*oe+p*Ae,r[3]=T*R+A*E+S*te+I*W,r[7]=T*L+A*U+S*ee+I*me,r[11]=T*z+A*B+S*$+I*ve,r[15]=T*y+A*q+S*oe+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*h-i*l*h)+x*(+t*l*h-t*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+m*(+t*c*f-t*o*h-r*a*f+i*a*h+r*o*u-i*c*u)+p*(-s*o*u-t*l*f+t*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],x=e[13],m=e[14],p=e[15],T=f*m*c-x*d*c+x*l*h-o*m*h-f*l*p+o*d*p,A=_*d*c-u*m*c-_*l*h+a*m*h+u*l*p-a*d*p,S=u*x*c-_*f*c+_*o*h-a*x*h-u*o*p+a*f*p,I=_*f*l-u*x*l-_*o*d+a*x*d+u*o*m-a*f*m,R=t*T+i*A+s*S+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=T*L,e[1]=(x*d*r-f*m*r-x*s*h+i*m*h+f*s*p-i*d*p)*L,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*h-i*l*h)*L,e[4]=A*L,e[5]=(u*m*r-_*d*r+_*s*h-t*m*h-u*s*p+t*d*p)*L,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*h+t*l*h)*L,e[8]=S*L,e[9]=(_*f*r-u*x*r-_*i*h+t*x*h+u*i*p-t*f*p)*L,e[10]=(a*x*r-_*o*r+_*i*c-t*x*c-a*i*p+t*o*p)*L,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*h-t*o*h)*L,e[12]=I*L,e[13]=(u*x*s-_*f*s+_*i*d-t*x*d-u*i*m+t*f*m)*L,e[14]=(_*o*s-a*x*s-_*i*l+t*x*l+a*i*m-t*o*m)*L,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,_=r*f,x=a*u,m=a*f,p=o*f,T=l*c,A=l*u,S=l*f,I=i.x,R=i.y,L=i.z;return s[0]=(1-(x+p))*I,s[1]=(h+S)*I,s[2]=(_-A)*I,s[3]=0,s[4]=(h-S)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(_+A)*L,s[9]=(m-T)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,u=1/a,f=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=An,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===An)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Oa)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=An,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===An)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Oa)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new Z,un=new xt,Iv=new Z(0,0,0),Dv=new Z(1,1,1),li=new Z,$r=new Z,Kt=new Z,Bf=new xt,zf=new Ir;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uv=0;const Hf=new Z,ns=new Ir,On=new xt,Jr=new Z,Ys=new Z,Nv=new Z,Fv=new Ir,kf=new Z(1,0,0),Vf=new Z(0,1,0),Gf=new Z(0,0,1),Wf={type:"added"},Ov={type:"removed"},is={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Ht extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new Z,t=new Qn,i=new Ir,s=new Z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ys,Jr,this.up):On.lookAt(Jr,Ys,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(On),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ov),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new Z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new Z,Bn=new Z,Bo=new Z,zn=new Z,ss=new Z,rs=new Z,Xf=new Z,zo=new Z,Ho=new Z,ko=new Z,Vo=new vt,Go=new vt,Wo=new vt;class dn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),Bn.subVectors(i,t),Bo.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Bn),l=fn.dot(Bo),c=Bn.dot(Bn),u=Bn.dot(Bo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-h-_,_,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,i),Wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Go,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),Bn.subVectors(e,t),fn.cross(Bn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,i),rs.subVectors(r,i),zo.subVectors(e,i);const l=ss.dot(zo),c=rs.dot(zo);if(l<=0&&c<=0)return t.copy(i);Ho.subVectors(e,s);const u=ss.dot(Ho),f=rs.dot(Ho);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ss,a);ko.subVectors(e,r);const h=ss.dot(ko),_=rs.dot(ko);if(_>=0&&h<=_)return t.copy(r);const x=h*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(rs,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Xf.subVectors(r,s),o=(f-u)/(f-u+(h-_)),t.copy(s).addScaledVector(Xf,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=yv(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Je.workingToColorSpace(Pt.copy(this),e),Math.round(Ze(Pt.r*255,0,255))*65536+Math.round(Ze(Pt.g*255,0,255))*256+Math.round(Ze(Pt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=sn){Je.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Qr);const i=wo(ci.h,Qr.h,t),s=wo(ci.s,Qr.s,t),r=wo(ci.l,Qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new et;et.NAMES=wp;let Bv=0;class Ur extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=bs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cp extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new Z,ea=new rt;let zv=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=If,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),e}}class Rp extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pp extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kn extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hv=0;const tn=new xt,qo=new Ht,as=new Z,jt=new Dr,Ks=new Dr,At=new Z;class ni extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?Pp:Rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(jt.min,Ks.min),jt.expandByPoint(At),At.addVectors(jt.max,Ks.max),jt.expandByPoint(At)):(jt.expandByPoint(Ks.min),jt.expandByPoint(Ks.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),At.add(as)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new Z,l[z]=new Z;const c=new Z,u=new Z,f=new Z,d=new rt,h=new rt,_=new rt,x=new Z,m=new Z;function p(z,y,E){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),d.fromBufferAttribute(r,z),h.fromBufferAttribute(r,y),_.fromBufferAttribute(r,E),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const U=1/(h.x*_.y-_.x*h.y);isFinite(U)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(U),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(U),o[z].add(x),o[y].add(x),o[E].add(x),l[z].add(m),l[y].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,y=T.length;z<y;++z){const E=T[z],U=E.start,B=E.count;for(let q=U,te=U+B;q<te;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new Z,S=new Z,I=new Z,R=new Z;function L(z){I.fromBufferAttribute(s,z),R.copy(I);const y=o[z];A.copy(y),A.sub(I.multiplyScalar(I.dot(y))).normalize(),S.crossVectors(R,y);const U=S.dot(l[z])<0?-1:1;a.setXYZW(z,A.x,A.y,A.z,U)}for(let z=0,y=T.length;z<y;++z){const E=T[z],U=E.start,B=E.count;for(let q=U,te=U+B;q<te;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qf=new xt,Ii=new Hc,ta=new no,Yf=new Z,na=new Z,ia=new Z,sa=new Z,Yo=new Z,ra=new Z,Kf=new Z,aa=new Z;class Tn extends Ht{constructor(e=new ni,t=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Yo.fromBufferAttribute(f,e),a?ra.addScaledVector(Yo,u):ra.addScaledVector(Yo.sub(t),u))}t.add(ra)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(ta.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ta,Yf)===null||Ii.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(qf),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,I=A;S<I;S+=3){const R=o.getX(S),L=o.getX(S+1),z=o.getX(S+2);s=oa(this,p,e,i,c,u,f,R,L,z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=_,p=x;m<p;m+=3){const T=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=oa(this,a,e,i,c,u,f,T,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,I=A;S<I;S+=3){const R=S,L=S+1,z=S+2;s=oa(this,p,e,i,c,u,f,R,L,z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=_,p=x;m<p;m+=3){const T=m,A=m+1,S=m+2;s=oa(this,a,e,i,c,u,f,T,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function kv(n,e,t,i,s,r,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Mi,o),l===null)return null;aa.copy(o),aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function oa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,na),n.getVertexPosition(l,ia),n.getVertexPosition(c,sa);const u=kv(n,e,t,i,na,ia,sa,Kf);if(u){const f=new Z;dn.getBarycoord(Kf,na,ia,sa,f),s&&(u.uv=dn.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(u.uv1=dn.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Z,materialIndex:0};dn.getNormal(na,ia,sa,d.normal),u.face=d,u.barycoord=f}return u}class Nr extends ni{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(f,2));function _(x,m,p,T,A,S,I,R,L,z,y){const E=S/L,U=I/z,B=S/2,q=I/2,te=R/2,ee=L+1,$=z+1;let oe=0,W=0;const me=new Z;for(let ve=0;ve<$;ve++){const Ae=ve*U-q;for(let Ne=0;Ne<ee;Ne++){const Ye=Ne*E-B;me[x]=Ye*T,me[m]=Ae*A,me[p]=te,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ne/L),f.push(1-ve/z),oe+=1}}for(let ve=0;ve<z;ve++)for(let Ae=0;Ae<L;Ae++){const Ne=d+Ae+ee*ve,Ye=d+Ae+ee*(ve+1),Ke=d+(Ae+1)+ee*(ve+1),Xe=d+(Ae+1)+ee*ve;l.push(Ne,Ye,Xe),l.push(Ye,Ke,Xe),W+=6}o.addGroup(h,W,y),h+=W,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const s in i)e[s]=i[s]}return e}function Vv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Gv={clone:Us,merge:Bt};var Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ip extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new Z,jf=new rt,Zf=new rt;class an extends Ip{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uc*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Zf),t.subVectors(Zf,jf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,ls=1;class qv extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(os,ls,e,t);s.layers=this.layers,this.add(s);const r=new an(os,ls,e,t);r.layers=this.layers,this.add(r);const a=new an(os,ls,e,t);a.layers=this.layers,this.add(a);const o=new an(os,ls,e,t);o.layers=this.layers,this.add(o);const l=new an(os,ls,e,t);l.layers=this.layers,this.add(l);const c=new an(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Dp extends Nt{constructor(e=[],t=Ls,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yv extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:vi});r.uniforms.tEquirect.value=t;const a=new Tn(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=bn),new qv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class la extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jv extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jo=new Z,Zv=new Z,$v=new We;class Oi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=jo.subVectors(i,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$v.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new no,Jv=new rt(.5,.5),ca=new Z;class Up{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],_=r[8],x=r[9],m=r[10],p=r[11],T=r[12],A=r[13],S=r[14],I=r[15];if(s[0].setComponents(c-a,h-u,p-_,I-T).normalize(),s[1].setComponents(c+a,h+u,p+_,I+T).normalize(),s[2].setComponents(c+o,h+f,p+x,I+A).normalize(),s[3].setComponents(c-o,h-f,p-x,I-A).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,p-m,I-S).normalize();else if(s[4].setComponents(c-l,h-d,p-m,I-S).normalize(),t===An)s[5].setComponents(c+l,h+d,p+m,I+S).normalize();else if(t===Oa)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Jv.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Np extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ba=new Z,za=new Z,$f=new xt,js=new Hc,ua=new no,Zo=new Z,Jf=new Z;class Qv extends Ht{constructor(e=new ni,t=new Np){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new Kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;$f.copy(s).invert(),js.copy(e.ray).applyMatrix4($f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=h,m=_-1;x<m;x+=c){const p=u.getX(x),T=u.getX(x+1),A=fa(this,e,js,l,p,T,x);A&&t.push(A)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(h),p=fa(this,e,js,l,x,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=h,m=_-1;x<m;x+=c){const p=fa(this,e,js,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=fa(this,e,js,l,_-1,h,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),t.distanceSqToSegment(Ba,za,Zo,Jf)>i)return;Zo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Zo);if(!(c<e.near||c>e.far))return{distance:c,point:Jf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Qf=new Z,ed=new Z;class ex extends Qv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qf.fromBufferAttribute(t,s),ed.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qf.distanceTo(ed);e.setAttribute("lineDistance",new Kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends Nt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fp extends Nt{constructor(e,t,i=qi,s,r,a,o=gn,l=gn,c,u=Mr,f=1){if(u!==Mr&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Op extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends ni{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const T=p*d-a;for(let A=0;A<c;A++){const S=A*f-r;_.push(S,-T,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const A=T+c*p,S=T+c*(p+1),I=T+1+c*(p+1),R=T+1+c*p;h.push(A,S,R),h.push(S,I,R)}this.setIndex(h),this.setAttribute("position",new Kn(_,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class nx extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $o={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sx{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const rx=new sx;class Vc{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";const cs=new WeakMap;class ax extends Vc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$o.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=cs.get(a);f===void 0&&(f=[],cs.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Er("img");function l(){u(),t&&t(this);const f=cs.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}cs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),$o.remove(`image:${e}`);const d=cs.get(this)||[];for(let h=0;h<d.length;h++){const _=d[h];_.onError&&_.onError(f)}cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$o.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ox extends Vc{constructor(e){super(e)}load(e,t,i,s){const r=new Nt,a=new ax(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class lx extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cx extends Ip{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ux extends lx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fx extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const td=new xt;class dx{constructor(e,t,i=0,s=1/0){this.ray=new Hc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(e,t=!0,i=[]){return fc(e,this,i,t),i.sort(nd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fc(e[s],this,i,t);return i.sort(nd),i}}function nd(n,e){return n.distance-e.distance}function fc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)fc(r[a],e,t,!0)}}function id(n,e,t,i){const s=hx(i);switch(t){case Sp:return n*e;case yp:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case Ep:return n*e*2/s.components*s.byteLength;case Oc:return n*e*2/s.components*s.byteLength;case Mp:return n*e*3/s.components*s.byteLength;case pn:return n*e*4/s.components*s.byteLength;case Bc:return n*e*4/s.components*s.byteLength;case Sa:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ac:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(n){switch(n){case Jn:case gp:return{byteLength:1,components:1};case xr:case _p:case Pr:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case qi:case Dc:case Xn:return{byteLength:4,components:1};case vp:case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function px(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],x=f[h];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef USE_GRADIENTMAP
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
}`,iS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
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
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dS=`PhysicalMaterial material;
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
#endif`,hS=`struct PhysicalMaterial {
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
}`,pS=`
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ES=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bS=`#if defined( USE_POINTS_UV )
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
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`#ifdef USE_MORPHTARGETS
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
#endif`,LS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
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
#endif`,BS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,eM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iM=`#ifdef USE_SKINNING
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
#endif`,sM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mM=`uniform sampler2D t2D;
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
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
}`,MM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,EM=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#define LAMBERT
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
}`,LM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,UM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,FM=`#define PHONG
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
}`,OM=`#define PHONG
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
}`,BM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
}`,HM=`#define TOON
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
}`,kM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#include <common>
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
}`,XM=`uniform vec3 color;
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
}`,qM=`uniform float rotation;
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
}`,YM=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:Sx,aomap_fragment:Mx,aomap_pars_fragment:yx,batching_pars_vertex:Ex,batching_vertex:bx,begin_vertex:Ax,beginnormal_vertex:Tx,bsdfs:wx,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Ux,color_pars_fragment:Nx,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:kx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:jx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:oS,envmap_vertex:$x,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:eS,fog_pars_fragment:tS,gradientmap_pars_fragment:nS,lightmap_pars_fragment:iS,lights_lambert_fragment:sS,lights_lambert_pars_fragment:rS,lights_pars_begin:aS,lights_toon_fragment:lS,lights_toon_pars_fragment:cS,lights_phong_fragment:uS,lights_phong_pars_fragment:fS,lights_physical_fragment:dS,lights_physical_pars_fragment:hS,lights_fragment_begin:pS,lights_fragment_maps:mS,lights_fragment_end:gS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:xS,logdepthbuf_vertex:SS,map_fragment:MS,map_pars_fragment:yS,map_particle_fragment:ES,map_particle_pars_fragment:bS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:TS,morphinstance_vertex:wS,morphcolor_vertex:CS,morphnormal_vertex:RS,morphtarget_pars_vertex:PS,morphtarget_vertex:LS,normal_fragment_begin:IS,normal_fragment_maps:DS,normal_pars_fragment:US,normal_pars_vertex:NS,normal_vertex:FS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:BS,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:kS,opaque_fragment:VS,packing:GS,premultiplied_alpha_fragment:WS,project_vertex:XS,dithering_fragment:qS,dithering_pars_fragment:YS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:$S,shadowmap_vertex:JS,shadowmask_pars_fragment:QS,skinbase_vertex:eM,skinning_pars_vertex:tM,skinning_vertex:nM,skinnormal_vertex:iM,specularmap_fragment:sM,specularmap_pars_fragment:rM,tonemapping_fragment:aM,tonemapping_pars_fragment:oM,transmission_fragment:lM,transmission_pars_fragment:cM,uv_pars_fragment:uM,uv_pars_vertex:fM,uv_vertex:dM,worldpos_vertex:hM,background_vert:pM,background_frag:mM,backgroundCube_vert:gM,backgroundCube_frag:_M,cube_vert:vM,cube_frag:xM,depth_vert:SM,depth_frag:MM,distanceRGBA_vert:yM,distanceRGBA_frag:EM,equirect_vert:bM,equirect_frag:AM,linedashed_vert:TM,linedashed_frag:wM,meshbasic_vert:CM,meshbasic_frag:RM,meshlambert_vert:PM,meshlambert_frag:LM,meshmatcap_vert:IM,meshmatcap_frag:DM,meshnormal_vert:UM,meshnormal_frag:NM,meshphong_vert:FM,meshphong_frag:OM,meshphysical_vert:BM,meshphysical_frag:zM,meshtoon_vert:HM,meshtoon_frag:kM,points_vert:VM,points_frag:GM,shadow_vert:WM,shadow_frag:XM,sprite_vert:qM,sprite_frag:YM},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Bt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Bt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Bt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Bt([ye.common,ye.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Bt([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};yn.physical={uniforms:Bt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const da={r:0,b:0,g:0},Ui=new Qn,KM=new xt;function jM(n,e,t,i,s,r,a){const o=new et(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function _(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function x(A){let S=!1;const I=_(A);I===null?p(o,l):I&&I.isColor&&(p(I,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,S){const I=_(S);I&&(I.isCubeTexture||I.mapping===to)?(u===void 0&&(u=new Tn(new Nr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Us(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(S.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Ui)),u.material.toneMapped=Je.getTransfer(I.colorSpace)!==ot,(f!==I||d!==I.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,d=I.version,h=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Tn(new Fr(2,2),new ei({name:"BackgroundMaterial",uniforms:Us(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(I.colorSpace)!==ot,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,d=I.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,S){A.getRGB(da,Lp(n)),i.buffers.color.setClear(da.r,da.g,da.b,S,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,S=1){o.set(A),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:x,addToRenderList:m,dispose:T}}function ZM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(E,U,B,q,te){let ee=!1;const $=f(q,B,U);r!==$&&(r=$,c(r.object)),ee=h(E,q,B,te),ee&&_(E,q,B,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,S(E,U,B,q),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,U,B){const q=B.wireframe===!0;let te=i[E.id];te===void 0&&(te={},i[E.id]=te);let ee=te[U.id];ee===void 0&&(ee={},te[U.id]=ee);let $=ee[q];return $===void 0&&($=d(l()),ee[q]=$),$}function d(E){const U=[],B=[],q=[];for(let te=0;te<t;te++)U[te]=0,B[te]=0,q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:q,object:E,attributes:{},index:null}}function h(E,U,B,q){const te=r.attributes,ee=U.attributes;let $=0;const oe=B.getAttributes();for(const W in oe)if(oe[W].location>=0){const ve=te[W];let Ae=ee[W];if(Ae===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;$++}return r.attributesNum!==$||r.index!==q}function _(E,U,B,q){const te={},ee=U.attributes;let $=0;const oe=B.getAttributes();for(const W in oe)if(oe[W].location>=0){let ve=ee[W];ve===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),te[W]=Ae,$++}r.attributes=te,r.attributesNum=$,r.index=q}function x(){const E=r.newAttributes;for(let U=0,B=E.length;U<B;U++)E[U]=0}function m(E){p(E,0)}function p(E,U){const B=r.newAttributes,q=r.enabledAttributes,te=r.attributeDivisors;B[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),te[E]!==U&&(n.vertexAttribDivisor(E,U),te[E]=U)}function T(){const E=r.newAttributes,U=r.enabledAttributes;for(let B=0,q=U.length;B<q;B++)U[B]!==E[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function A(E,U,B,q,te,ee,$){$===!0?n.vertexAttribIPointer(E,U,B,te,ee):n.vertexAttribPointer(E,U,B,q,te,ee)}function S(E,U,B,q){x();const te=q.attributes,ee=B.getAttributes(),$=U.defaultAttributeValues;for(const oe in ee){const W=ee[oe];if(W.location>=0){let me=te[oe];if(me===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const ve=me.normalized,Ae=me.itemSize,Ne=e.get(me);if(Ne===void 0)continue;const Ye=Ne.buffer,Ke=Ne.type,Xe=Ne.bytesPerElement,se=Ke===n.INT||Ke===n.UNSIGNED_INT||me.gpuType===Dc;if(me.isInterleavedBufferAttribute){const O=me.data,ne=O.stride,ae=me.offset;if(O.isInstancedInterleavedBuffer){for(let le=0;le<W.locationSize;le++)p(W.location+le,O.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let le=0;le<W.locationSize;le++)A(W.location+le,Ae/W.locationSize,Ke,ve,ne*Xe,(ae+Ae/W.locationSize*le)*Xe,se)}else{if(me.isInstancedBufferAttribute){for(let O=0;O<W.locationSize;O++)p(W.location+O,me.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let O=0;O<W.locationSize;O++)m(W.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let O=0;O<W.locationSize;O++)A(W.location+O,Ae/W.locationSize,Ke,ve,Ae*Xe,Ae/W.locationSize*O*Xe,se)}}else if($!==void 0){const ve=$[oe];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}T()}function I(){z();for(const E in i){const U=i[E];for(const B in U){const q=U[B];for(const te in q)u(q[te].object),delete q[te];delete U[B]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const B in U){const q=U[B];for(const te in q)u(q[te].object),delete q[te];delete U[B]}delete i[E.id]}function L(E){for(const U in i){const B=i[U];if(B[E.id]===void 0)continue;const q=B[E.id];for(const te in q)u(q[te].object),delete q[te];delete B[E.id]}}function z(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function $M(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function JM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==pn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const z=L===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Jn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!z)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:I,maxSamples:R}}function QM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let S=p.clippingState||null;l.value=S,S=u(_,d,A,h);for(let I=0;I!==A;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=h+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=h;A!==x;++A,S+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ey(n){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=Ls:o===Dl&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Il||o===Dl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yv(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const gs=4,sd=[.125,.215,.35,.446,.526,.582],Hi=20,Jo=new cx,rd=new et;let Qo=null,el=0,tl=0,nl=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,ad=[new Z(-Bi,us,0),new Z(Bi,us,0),new Z(-us,0,Bi),new Z(us,0,Bi),new Z(0,Bi,-us),new Z(0,Bi,us),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],ty=new Z;class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=ty}=r;Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Pr,format:pn,colorSpace:Ds,depthBuffer:!1},s=ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(r)),this._blurMaterial=iy(r,e,t)}return s}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,s,r){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(rd),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new Cp({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Tn(new Nr,x);let p=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,p=!0):(x.color.copy(rd),p=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const I=this._cubeSize;ha(s,S*I,A>2?I:0,I,I),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ls||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ad[(s-r-1)%ad.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Tn(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Hi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let T=0;for(let L=0;L<Hi;++L){const z=L/x,y=Math.exp(-z*z/2);p.push(y),L===0?T+=y:L<m&&(T+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const S=this._sizeLods[s],I=3*S*(s>A-gs?s-A+gs:0),R=4*(this._cubeSize-S);ha(t,I,R,3*S,2*S),l.setRenderTarget(t),l.render(f,Jo)}}function ny(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+sd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-gs?l=sd[a-n+gs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,x=3,m=2,p=1,T=new Float32Array(x*_*h),A=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let R=0;R<h;R++){const L=R%3*2/3-1,z=R>2?0:-1,y=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];T.set(y,x*_*R),A.set(d,m*_*R);const E=[R,R,R,R,R,R];S.set(E,p*_*R)}const I=new ni;I.setAttribute("position",new Pn(T,x)),I.setAttribute("uv",new Pn(A,m)),I.setAttribute("faceIndex",new Pn(S,p)),e.push(I),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ld(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iy(n,e,t){const i=new Float32Array(Hi),s=new Z(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function cd(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ud(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function sy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Il||l===Dl,u=l===Ls||l===Is;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new od(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new od(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ry(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ay(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let x=0;if(h!==null){const T=h.array;x=h.version;for(let A=0,S=T.length;A<S;A+=3){const I=T[A+0],R=T[A+1],L=T[A+2];d.push(I,R,R,L,L,I)}}else if(_!==void 0){const T=_.array;x=_.version;for(let A=0,S=T.length/3-1;A<S;A+=3){const I=A+0,R=A+1,L=A+2;d.push(I,R,R,L,L,I)}}else return;const m=new(Ap(d)?Pp:Rp)(d,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function oy(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,_){_!==0&&(n.drawElementsInstanced(i,h,r,d*a,_),t.update(h,i,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,i,1)}function f(d,h,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=h[T]*x[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ly(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cy(n,e,t){const i=new WeakMap,s=new vt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let y=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;h===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let S=o.attributes.position.count*A,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*I*4*f),L=new Tp(R,S,I,f);L.type=Xn,L.needsUpdate=!0;const z=A*4;for(let E=0;E<f;E++){const U=m[E],B=p[E],q=T[E],te=S*I*4*E;for(let ee=0;ee<U.count;ee++){const $=ee*z;h===!0&&(s.fromBufferAttribute(U,ee),R[te+$+0]=s.x,R[te+$+1]=s.y,R[te+$+2]=s.z,R[te+$+3]=0),_===!0&&(s.fromBufferAttribute(B,ee),R[te+$+4]=s.x,R[te+$+5]=s.y,R[te+$+6]=s.z,R[te+$+7]=0),x===!0&&(s.fromBufferAttribute(q,ee),R[te+$+8]=s.x,R[te+$+9]=s.y,R[te+$+10]=s.z,R[te+$+11]=q.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new rt(S,I)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function uy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const zp=new Nt,fd=new Fp(1,1),Hp=new Tp,kp=new Pv,Vp=new Dp,dd=[],hd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function my(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;gd.set(i),n.uniformMatrix2fv(this.addr,!1,gd),bt(t,i)}}function gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;md.set(i),n.uniformMatrix3fv(this.addr,!1,md),bt(t,i)}}function _y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;pd.set(i),n.uniformMatrix4fv(this.addr,!1,pd),bt(t,i)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Ty(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fd.compareFunction=bp,r=fd):r=zp,t.setTexture2D(e||r,s)}function wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kp,s)}function Cy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vp,s)}function Ry(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hp,s)}function Py(n){switch(n){case 5126:return fy;case 35664:return dy;case 35665:return hy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return _y;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return Sy;case 35669:case 35673:return My;case 5125:return yy;case 36294:return Ey;case 36295:return by;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Ry}}function Ly(n,e){n.uniform1fv(this.addr,e)}function Iy(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function Dy(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function Uy(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function Ny(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fy(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Oy(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function By(n,e){n.uniform1iv(this.addr,e)}function zy(n,e){n.uniform2iv(this.addr,e)}function Hy(n,e){n.uniform3iv(this.addr,e)}function ky(n,e){n.uniform4iv(this.addr,e)}function Vy(n,e){n.uniform1uiv(this.addr,e)}function Gy(n,e){n.uniform2uiv(this.addr,e)}function Wy(n,e){n.uniform3uiv(this.addr,e)}function Xy(n,e){n.uniform4uiv(this.addr,e)}function qy(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zp,r[a])}function Yy(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kp,r[a])}function Ky(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vp,r[a])}function jy(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function Zy(n){switch(n){case 5126:return Ly;case 35664:return Iy;case 35665:return Dy;case 35666:return Uy;case 35674:return Ny;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return ky;case 5125:return Vy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}class $y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Py(t.type)}}class Jy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zy(t.type)}}class Qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function _d(n,e){n.seq.push(e),n.map[e.id]=e}function eE(n,e,t){const i=n.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),a=il.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_d(t,c===void 0?new $y(o,n,e):new Jy(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Qy(o),_d(t,f)),t=f}}}class ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);eE(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tE=37297;let nE=0;function iE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xd=new We;function sE(n){Je._getMatrix(xd,Je.workingColorSpace,n);const e=`mat3( ${xd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iE(n.getShaderSource(e),o)}else return r}function rE(n,e){const t=sE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aE(n,e){let t;switch(e){case iv:t="Linear";break;case sv:t="Reinhard";break;case rv:t="Cineon";break;case av:t="ACESFilmic";break;case lv:t="AgX";break;case cv:t="Neutral";break;case ov:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new Z;function oE(){Je.getLuminanceCoefficients(pa);const n=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function cE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Js(n){return n!==""}function Md(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(fE,hE)}const dE=new Map;function hE(n,e){let t=qe[e];if(t===void 0){const i=dE.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(pE,mE)}function mE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function _E(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function xE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pp:e="ENVMAP_BLENDING_MULTIPLY";break;case tv:e="ENVMAP_BLENDING_MIX";break;case nv:e="ENVMAP_BLENDING_ADD";break}return e}function SE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ME(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gE(t),c=_E(t),u=vE(t),f=xE(t),d=SE(t),h=lE(t),_=cE(r),x=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?qe.tonemapping_pars_fragment:"",t.toneMapping!==xi?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=dc(a),a=Md(a,t),a=yd(a,t),o=dc(o),o=Md(o,t),o=yd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+a,S=T+p+o,I=vd(s,s.VERTEX_SHADER,A),R=vd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,I),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(I)||"",te=s.getShaderInfoLog(R)||"",ee=B.trim(),$=q.trim(),oe=te.trim();let W=!0,me=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,R);else{const ve=Sd(s,I,"vertex"),Ae=Sd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ee+`
`+ve+`
`+Ae)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||oe==="")&&(me=!1);me&&(U.diagnostics={runnable:W,programLog:ee,vertexShader:{log:$,prefix:m},fragmentShader:{log:oe,prefix:p}})}s.deleteShader(I),s.deleteShader(R),z=new ba(s,x),y=uE(s,x)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,tE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=R,this}let yE=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bE(e),t.set(e,i)),i}}class bE{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function AE(n,e,t,i,s,r,a){const o=new kc,l=new EE,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,U,B,q){const te=B.fog,ee=q.geometry,$=y.isMeshStandardMaterial?B.environment:null,oe=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),W=oe&&oe.mapping===to?oe.image.height:null,me=_[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ve=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Ne=0;ee.morphAttributes.position!==void 0&&(Ne=1),ee.morphAttributes.normal!==void 0&&(Ne=2),ee.morphAttributes.color!==void 0&&(Ne=3);let Ye,Ke,Xe,se;if(me){const tt=yn[me];Ye=tt.vertexShader,Ke=tt.fragmentShader}else Ye=y.vertexShader,Ke=y.fragmentShader,l.update(y),Xe=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const O=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ae=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,Re=!!y.map,C=!!y.matcap,g=!!oe,N=!!y.aoMap,w=!!y.lightMap,P=!!y.bumpMap,D=!!y.normalMap,j=!!y.displacementMap,V=!!y.emissiveMap,Y=!!y.metalnessMap,ie=!!y.roughnessMap,fe=y.anisotropy>0,M=y.clearcoat>0,v=y.dispersion>0,F=y.iridescence>0,X=y.sheen>0,re=y.transmission>0,K=fe&&!!y.anisotropyMap,_e=M&&!!y.clearcoatMap,ue=M&&!!y.clearcoatNormalMap,Te=M&&!!y.clearcoatRoughnessMap,we=F&&!!y.iridescenceMap,de=F&&!!y.iridescenceThicknessMap,Ee=X&&!!y.sheenColorMap,Ie=X&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Se=!!y.specularColorMap,ke=!!y.specularIntensityMap,H=re&&!!y.transmissionMap,ge=re&&!!y.thicknessMap,xe=!!y.gradientMap,Le=!!y.alphaMap,he=y.alphaTest>0,ce=!!y.alphaHash,Ue=!!y.extensions;let Ge=xi;y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ut={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:Ke,defines:y.defines,customVertexShaderID:Xe,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:ae,instancingColor:ae&&q.instanceColor!==null,instancingMorph:ae&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ds,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:C,envMap:g,envMapMode:g&&oe.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:w,bumpMap:P,normalMap:D,displacementMap:d&&j,emissiveMap:V,normalMapObjectSpace:D&&y.normalMapType===pv,normalMapTangentSpace:D&&y.normalMapType===hv,metalnessMap:Y,roughnessMap:ie,anisotropy:fe,anisotropyMap:K,clearcoat:M,clearcoatMap:_e,clearcoatNormalMap:ue,clearcoatRoughnessMap:Te,dispersion:v,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:de,sheen:X,sheenColorMap:Ee,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:Se,specularIntensityMap:ke,transmission:re,transmissionMap:H,thicknessMap:ge,gradientMap:xe,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:he,alphaHash:ce,combine:y.combine,mapUv:Re&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:w&&x(y.lightMap.channel),bumpMapUv:P&&x(y.bumpMap.channel),normalMapUv:D&&x(y.normalMap.channel),displacementMapUv:j&&x(y.displacementMap.channel),emissiveMapUv:V&&x(y.emissiveMap.channel),metalnessMapUv:Y&&x(y.metalnessMap.channel),roughnessMapUv:ie&&x(y.roughnessMap.channel),anisotropyMapUv:K&&x(y.anisotropyMap.channel),clearcoatMapUv:_e&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:Se&&x(y.specularColorMap.channel),specularIntensityMapUv:ke&&x(y.specularIntensityMap.channel),transmissionMapUv:H&&x(y.transmissionMap.channel),thicknessMapUv:ge&&x(y.thicknessMap.channel),alphaMapUv:Le&&x(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(D||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(Re||Le),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:V&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===En,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(T(E,y),A(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function A(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const E=_[y.type];let U;if(E){const B=yn[E];U=Gv.clone(B.uniforms)}else U=y.uniforms;return U}function I(y,E){let U;for(let B=0,q=u.length;B<q;B++){const te=u[B];if(te.cacheKey===E){U=te,++U.usedTimes;break}}return U===void 0&&(U=new ME(n,E,y,r),u.push(U)),U}function R(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function L(y){l.remove(y)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:I,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:z}}function TE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Td(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,h,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function o(f,d,h,_,x,m){const p=a(f,d,h,_,x,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(f,d,h,_,x,m){const p=a(f,d,h,_,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||wE),i.length>1&&i.sort(d||Ad),s.length>1&&s.sort(d||Ad)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function CE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Td,n.set(i,[a])):s>=r.length?(a=new Td,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function RE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new et};break;case"SpotLight":t={position:new Z,direction:new Z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function PE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LE=0;function IE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DE(n){const e=new RE,t=PE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new xt,a=new xt;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,_=0,x=0,m=0,p=0,T=0,A=0,S=0,I=0,R=0,L=0;c.sort(IE);for(let y=0,E=c.length;y<E;y++){const U=c[y],B=U.color,q=U.intensity,te=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=B.r*q,f+=B.g*q,d+=B.b*q;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],q);L++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const oe=U.shadow,W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,i.directionalShadow[h]=W,i.directionalShadowMap[h]=ee,i.directionalShadowMatrix[h]=U.shadow.matrix,T++}i.directional[h]=$,h++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(B).multiplyScalar(q),$.distance=te,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[x]=$;const oe=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,oe.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[x]=oe.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=ee,S++}x++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(B).multiplyScalar(q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=$,m++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const oe=U.shadow,W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,W.shadowCameraNear=oe.camera.near,W.shadowCameraFar=oe.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=U.shadow.matrix,A++}i.point[_]=$,_++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(q),$.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==h||z.pointLength!==_||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==T||z.numPointShadows!==A||z.numSpotShadows!==S||z.numSpotMaps!==I||z.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,z.directionalLength=h,z.pointLength=_,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=T,z.numPointShadows=A,z.numSpotShadows=S,z.numSpotMaps=I,z.numLightProbes=L,i.version=LE++)}function l(c,u){let f=0,d=0,h=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(A.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function wd(n){const e=new DE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function UE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new wd(n),e.set(s,[o])):r>=a.length?(o=new wd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`;function OE(n,e,t){let i=new Up;const s=new rt,r=new rt,a=new vt,o=new nx({depthPacking:dv}),l=new ix,c={},u=t.maxTextureSize,f={[Mi]:Xt,[Xt]:Mi,[En]:En},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:NE,fragmentShader:FE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let p=this.type;this.render=function(R,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(vi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=p!==Hn&&this.type===Hn,te=p===Hn&&this.type!==Hn;for(let ee=0,$=R.length;ee<$;ee++){const oe=R[ee],W=oe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||q===!0||te===!0){const Ae=this.type!==Hn?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new Yi(s.x,s.y,Ae),W.map.texture.name=oe.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Ne=W.getViewport(Ae);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),B.viewport(a),W.updateMatrices(oe,Ae),i=W.getFrustum(),S(L,z,W.camera,oe,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&T(W,z),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,U)};function T(R,L){const z=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,z,d,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,z,h,x,null)}function A(R,L,z,y){let E=null;const U=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=z.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=E.uuid,q=L.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let ee=te[q];ee===void 0&&(ee=E.clone(),te[q]=ee,L.addEventListener("dispose",I)),E=ee}if(E.visible=L.visible,E.wireframe=L.wireframe,y===Hn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:f[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=n.properties.get(E);B.light=z}return E}function S(R,L,z,y,E){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const q=e.update(R),te=R.material;if(Array.isArray(te)){const ee=q.groups;for(let $=0,oe=ee.length;$<oe;$++){const W=ee[$],me=te[W.materialIndex];if(me&&me.visible){const ve=A(R,me,y,E);R.onBeforeShadow(n,R,L,z,q,ve,W),n.renderBufferDirect(z,null,q,ve,R,W),R.onAfterShadow(n,R,L,z,q,ve,W)}}}else if(te.visible){const ee=A(R,te,y,E);R.onBeforeShadow(n,R,L,z,q,ee,null),n.renderBufferDirect(z,null,q,ee,R,null),R.onAfterShadow(n,R,L,z,q,ee,null)}}const B=R.children;for(let q=0,te=B.length;q<te;q++)S(B[q],L,z,y,E)}function I(R){R.target.removeEventListener("dispose",I);for(const z in c){const y=c[z],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const BE={[Al]:Tl,[wl]:Pl,[Cl]:Ll,[Ps]:Rl,[Tl]:Al,[Pl]:wl,[Ll]:Cl,[Rl]:Ps};function zE(n,e){function t(){let H=!1;const ge=new vt;let xe=null;const Le=new vt(0,0,0,0);return{setMask:function(he){xe!==he&&!H&&(n.colorMask(he,he,he,he),xe=he)},setLocked:function(he){H=he},setClear:function(he,ce,Ue,Ge,ut){ut===!0&&(he*=Ge,ce*=Ge,Ue*=Ge),ge.set(he,ce,Ue,Ge),Le.equals(ge)===!1&&(n.clearColor(he,ce,Ue,Ge),Le.copy(ge))},reset:function(){H=!1,xe=null,Le.set(-1,0,0,0)}}}function i(){let H=!1,ge=!1,xe=null,Le=null,he=null;return{setReversed:function(ce){if(ge!==ce){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ge=ce;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return ge},setTest:function(ce){ce?O(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(ce){xe!==ce&&!H&&(n.depthMask(ce),xe=ce)},setFunc:function(ce){if(ge&&(ce=BE[ce]),Le!==ce){switch(ce){case Al:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=ce}},setLocked:function(ce){H=ce},setClear:function(ce){he!==ce&&(ge&&(ce=1-ce),n.clearDepth(ce),he=ce)},reset:function(){H=!1,xe=null,Le=null,he=null,ge=!1}}}function s(){let H=!1,ge=null,xe=null,Le=null,he=null,ce=null,Ue=null,Ge=null,ut=null;return{setTest:function(tt){H||(tt?O(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!H&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,Ln,xn){(xe!==tt||Le!==Ln||he!==xn)&&(n.stencilFunc(tt,Ln,xn),xe=tt,Le=Ln,he=xn)},setOp:function(tt,Ln,xn){(ce!==tt||Ue!==Ln||Ge!==xn)&&(n.stencilOp(tt,Ln,xn),ce=tt,Ue=Ln,Ge=xn)},setLocked:function(tt){H=tt},setClear:function(tt){ut!==tt&&(n.clearStencil(tt),ut=tt)},reset:function(){H=!1,ge=null,xe=null,Le=null,he=null,ce=null,Ue=null,Ge=null,ut=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,x=!1,m=null,p=null,T=null,A=null,S=null,I=null,R=null,L=new et(0,0,0),z=0,y=!1,E=null,U=null,B=null,q=null,te=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=oe>=2);let me=null,ve={};const Ae=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ye=new vt().fromArray(Ae),Ke=new vt().fromArray(Ne);function Xe(H,ge,xe,Le){const he=new Uint8Array(4),ce=n.createTexture();n.bindTexture(H,ce),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<xe;Ue++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ge+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ce}const se={};se[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(n.DEPTH_TEST),a.setFunc(Ps),P(!1),D(wf),O(n.CULL_FACE),N(vi);function O(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ne(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function ae(H,ge){return f[H]!==ge?(n.bindFramebuffer(H,ge),f[H]=ge,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function le(H,ge){let xe=h,Le=!1;if(H){xe=d.get(ge),xe===void 0&&(xe=[],d.set(ge,xe));const he=H.textures;if(xe.length!==he.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ue=he.length;ce<Ue;ce++)xe[ce]=n.COLOR_ATTACHMENT0+ce;xe.length=he.length,Le=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Le=!0);Le&&n.drawBuffers(xe)}function Re(H){return _!==H?(n.useProgram(H),_=H,!0):!1}const C={[zi]:n.FUNC_ADD,[B0]:n.FUNC_SUBTRACT,[z0]:n.FUNC_REVERSE_SUBTRACT};C[H0]=n.MIN,C[k0]=n.MAX;const g={[V0]:n.ZERO,[G0]:n.ONE,[W0]:n.SRC_COLOR,[El]:n.SRC_ALPHA,[Z0]:n.SRC_ALPHA_SATURATE,[K0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[X0]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[j0]:n.ONE_MINUS_DST_COLOR,[Y0]:n.ONE_MINUS_DST_ALPHA,[$0]:n.CONSTANT_COLOR,[J0]:n.ONE_MINUS_CONSTANT_COLOR,[Q0]:n.CONSTANT_ALPHA,[ev]:n.ONE_MINUS_CONSTANT_ALPHA};function N(H,ge,xe,Le,he,ce,Ue,Ge,ut,tt){if(H===vi){x===!0&&(ne(n.BLEND),x=!1);return}if(x===!1&&(O(n.BLEND),x=!0),H!==O0){if(H!==m||tt!==y){if((p!==zi||S!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,S=zi),tt)switch(H){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFunc(n.ONE,n.ONE);break;case Rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,A=null,I=null,R=null,L.set(0,0,0),z=0,m=H,y=tt}return}he=he||ge,ce=ce||xe,Ue=Ue||Le,(ge!==p||he!==S)&&(n.blendEquationSeparate(C[ge],C[he]),p=ge,S=he),(xe!==T||Le!==A||ce!==I||Ue!==R)&&(n.blendFuncSeparate(g[xe],g[Le],g[ce],g[Ue]),T=xe,A=Le,I=ce,R=Ue),(Ge.equals(L)===!1||ut!==z)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ut),L.copy(Ge),z=ut),m=H,y=!1}function w(H,ge){H.side===En?ne(n.CULL_FACE):O(n.CULL_FACE);let xe=H.side===Xt;ge&&(xe=!xe),P(xe),H.blending===bs&&H.transparent===!1?N(vi):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Le=H.stencilWrite;o.setTest(Le),Le&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function P(H){E!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),E=H)}function D(H){H!==U0?(O(n.CULL_FACE),H!==U&&(H===wf?n.cullFace(n.BACK):H===N0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),U=H}function j(H){H!==B&&($&&n.lineWidth(H),B=H)}function V(H,ge,xe){H?(O(n.POLYGON_OFFSET_FILL),(q!==ge||te!==xe)&&(n.polygonOffset(ge,xe),q=ge,te=xe)):ne(n.POLYGON_OFFSET_FILL)}function Y(H){H?O(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function ie(H){H===void 0&&(H=n.TEXTURE0+ee-1),me!==H&&(n.activeTexture(H),me=H)}function fe(H,ge,xe){xe===void 0&&(me===null?xe=n.TEXTURE0+ee-1:xe=me);let Le=ve[xe];Le===void 0&&(Le={type:void 0,texture:void 0},ve[xe]=Le),(Le.type!==H||Le.texture!==ge)&&(me!==xe&&(n.activeTexture(xe),me=xe),n.bindTexture(H,ge||se[H]),Le.type=H,Le.texture=ge)}function M(){const H=ve[me];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(H){Ye.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ye.copy(H))}function Ie(H){Ke.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ke.copy(H))}function Ce(H,ge){let xe=c.get(ge);xe===void 0&&(xe=new WeakMap,c.set(ge,xe));let Le=xe.get(H);Le===void 0&&(Le=n.getUniformBlockIndex(ge,H.name),xe.set(H,Le))}function Se(H,ge){const Le=c.get(ge).get(H);l.get(ge)!==Le&&(n.uniformBlockBinding(ge,Le,H.__bindingPointIndex),l.set(ge,Le))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,ve={},f={},d=new WeakMap,h=[],_=null,x=!1,m=null,p=null,T=null,A=null,S=null,I=null,R=null,L=new et(0,0,0),z=0,y=!1,E=null,U=null,B=null,q=null,te=null,Ye.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:ne,bindFramebuffer:ae,drawBuffers:le,useProgram:Re,setBlending:N,setMaterial:w,setFlipSided:P,setCullFace:D,setLineWidth:j,setPolygonOffset:V,setScissorTest:Y,activeTexture:ie,bindTexture:fe,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:we,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Se,texStorage2D:ue,texStorage3D:Te,texSubImage2D:X,texSubImage3D:re,compressedTexSubImage2D:K,compressedTexSubImage3D:_e,scissor:Ee,viewport:Ie,reset:ke}}function HE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return h?new OffscreenCanvas(M,v):Er("canvas")}function x(M,v,F){let X=1;const re=fe(M);if((re.width>F||re.height>F)&&(X=F/Math.max(re.width,re.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(X*re.width),_e=Math.floor(X*re.height);f===void 0&&(f=_(K,_e));const ue=v?_(K,_e):f;return ue.width=K,ue.height=_e,ue.getContext("2d").drawImage(M,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+K+"x"+_e+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(M,v,F,X,re=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=v;if(v===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),v===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const _e=re?Fa:Je.getTransfer(X);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=_e===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(M,v){let F;return M?v===null||v===qi||v===Sr?F=n.DEPTH24_STENCIL8:v===Xn?F=n.DEPTH32F_STENCIL8:v===xr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===Sr?F=n.DEPTH_COMPONENT24:v===Xn?F=n.DEPTH_COMPONENT32F:v===xr&&(F=n.DEPTH_COMPONENT16),F}function I(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==gn&&M.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function R(M){const v=M.target;v.removeEventListener("dispose",R),z(v),v.isVideoTexture&&u.delete(v)}function L(M){const v=M.target;v.removeEventListener("dispose",L),E(v)}function z(M){const v=i.get(M);if(v.__webglInit===void 0)return;const F=M.source,X=d.get(F);if(X){const re=X[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(M),Object.keys(X).length===0&&d.delete(F)}i.remove(M)}function y(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const F=M.source,X=d.get(F);delete X[v.__cacheKey],a.memory.textures--}function E(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let re=0;re<v.__webglFramebuffer[X].length;re++)n.deleteFramebuffer(v.__webglFramebuffer[X][re]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=M.textures;for(let X=0,re=F.length;X<re;X++){const K=i.get(F[X]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(F[X])}i.remove(M)}let U=0;function B(){U=0}function q(){const M=U;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),U+=1,M}function te(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ee(M,v){const F=i.get(M);if(M.isVideoTexture&&Y(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,M,v);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function $(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){se(F,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function oe(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){se(F,M,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function W(M,v){const F=i.get(M);if(M.version>0&&F.__version!==M.version){O(F,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const me={[Ul]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Nl]:n.MIRRORED_REPEAT},ve={[gn]:n.NEAREST,[uv]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Ae={[mv]:n.NEVER,[Mv]:n.ALWAYS,[gv]:n.LESS,[bp]:n.LEQUAL,[_v]:n.EQUAL,[Sv]:n.GEQUAL,[vv]:n.GREATER,[xv]:n.NOTEQUAL};function Ne(M,v){if(v.type===Xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===Ao||v.magFilter===Xr||v.magFilter===Vi||v.minFilter===bn||v.minFilter===Ao||v.minFilter===Xr||v.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,me[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===gn||v.minFilter!==Xr&&v.minFilter!==Vi||v.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(M,v){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let re=d.get(X);re===void 0&&(re={},d.set(X,re));const K=te(v);if(K!==M.__cacheKey){re[K]===void 0&&(re[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),re[K].usedTimes++;const _e=re[M.__cacheKey];_e!==void 0&&(re[M.__cacheKey].usedTimes--,_e.usedTimes===0&&y(v)),M.__cacheKey=K,M.__webglTexture=re[K].texture}return F}function Ke(M,v,F){return Math.floor(Math.floor(M/F)/v)}function Xe(M,v,F,X){const K=M.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,X,v.data);else{K.sort((de,Ee)=>de.start-Ee.start);let _e=0;for(let de=1;de<K.length;de++){const Ee=K[_e],Ie=K[de],Ce=Ee.start+Ee.count,Se=Ke(Ie.start,v.width,4),ke=Ke(Ee.start,v.width,4);Ie.start<=Ce+1&&Se===ke&&Ke(Ie.start+Ie.count-1,v.width,4)===Se?Ee.count=Math.max(Ee.count,Ie.start+Ie.count-Ee.start):(++_e,K[_e]=Ie)}K.length=_e+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let de=0,Ee=K.length;de<Ee;de++){const Ie=K[de],Ce=Math.floor(Ie.start/4),Se=Math.ceil(Ie.count/4),ke=Ce%v.width,H=Math.floor(Ce/v.width),ge=Se,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ke,H,ge,xe,F,X,v.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function se(M,v,F){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const re=Ye(M,v),K=v.source;t.bindTexture(X,M.__webglTexture,n.TEXTURE0+F);const _e=i.get(K);if(K.version!==_e.__version||re===!0){t.activeTexture(n.TEXTURE0+F);const ue=Je.getPrimaries(Je.workingColorSpace),Te=v.colorSpace===mi?null:Je.getPrimaries(v.colorSpace),we=v.colorSpace===mi||ue===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let de=x(v.image,!1,s.maxTextureSize);de=ie(v,de);const Ee=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type);let Ce=A(v.internalFormat,Ee,Ie,v.colorSpace,v.isVideoTexture);Ne(X,v);let Se;const ke=v.mipmaps,H=v.isVideoTexture!==!0,ge=_e.__version===void 0||re===!0,xe=K.dataReady,Le=I(v,de);if(v.isDepthTexture)Ce=S(v.format===yr,v.type),ge&&(H?t.texStorage2D(n.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Ee,Ie,null));else if(v.isDataTexture)if(ke.length>0){H&&ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,ke[0].width,ke[0].height);for(let he=0,ce=ke.length;he<ce;he++)Se=ke[he],H?xe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ee,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ce,Se.width,Se.height,0,Ee,Ie,Se.data);v.generateMipmaps=!1}else H?(ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,de.width,de.height),xe&&Xe(v,de,Ee,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Ee,Ie,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ce,ke[0].width,ke[0].height,de.depth);for(let he=0,ce=ke.length;he<ce;he++)if(Se=ke[he],v.format!==pn)if(Ee!==null)if(H){if(xe)if(v.layerUpdates.size>0){const Ue=id(Se.width,Se.height,v.format,v.type);for(const Ge of v.layerUpdates){const ut=Se.data.subarray(Ge*Ue/Se.data.BYTES_PER_ELEMENT,(Ge+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ge,Se.width,Se.height,1,Ee,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,de.depth,Ee,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ce,Se.width,Se.height,de.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,de.depth,Ee,Ie,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ce,Se.width,Se.height,de.depth,0,Ee,Ie,Se.data)}else{H&&ge&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,ke[0].width,ke[0].height);for(let he=0,ce=ke.length;he<ce;he++)Se=ke[he],v.format!==pn?Ee!==null?H?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?xe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ee,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ce,Se.width,Se.height,0,Ee,Ie,Se.data)}else if(v.isDataArrayTexture)if(H){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ce,de.width,de.height,de.depth),xe)if(v.layerUpdates.size>0){const he=id(de.width,de.height,v.format,v.type);for(const ce of v.layerUpdates){const Ue=de.data.subarray(ce*he/de.data.BYTES_PER_ELEMENT,(ce+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,de.width,de.height,1,Ee,Ie,Ue)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Ie,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Ee,Ie,de.data);else if(v.isData3DTexture)H?(ge&&t.texStorage3D(n.TEXTURE_3D,Le,Ce,de.width,de.height,de.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Ie,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Ee,Ie,de.data);else if(v.isFramebufferTexture){if(ge)if(H)t.texStorage2D(n.TEXTURE_2D,Le,Ce,de.width,de.height);else{let he=de.width,ce=de.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ce,he,ce,0,Ee,Ie,null),he>>=1,ce>>=1}}else if(ke.length>0){if(H&&ge){const he=fe(ke[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ce,he.width,he.height)}for(let he=0,ce=ke.length;he<ce;he++)Se=ke[he],H?xe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ee,Ie,Se):t.texImage2D(n.TEXTURE_2D,he,Ce,Ee,Ie,Se);v.generateMipmaps=!1}else if(H){if(ge){const he=fe(de);t.texStorage2D(n.TEXTURE_2D,Le,Ce,he.width,he.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ie,de)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Ee,Ie,de);m(v)&&p(X),_e.__version=K.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function O(M,v,F){if(v.image.length!==6)return;const X=Ye(M,v),re=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);const K=i.get(re);if(re.version!==K.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const _e=Je.getPrimaries(Je.workingColorSpace),ue=v.colorSpace===mi?null:Je.getPrimaries(v.colorSpace),Te=v.colorSpace===mi||_e===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!we&&!de?Ee[ce]=x(v.image[ce],!0,s.maxCubemapSize):Ee[ce]=de?v.image[ce].image:v.image[ce],Ee[ce]=ie(v,Ee[ce]);const Ie=Ee[0],Ce=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),ke=A(v.internalFormat,Ce,Se,v.colorSpace),H=v.isVideoTexture!==!0,ge=K.__version===void 0||X===!0,xe=re.dataReady;let Le=I(v,Ie);Ne(n.TEXTURE_CUBE_MAP,v);let he;if(we){H&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ke,Ie.width,Ie.height);for(let ce=0;ce<6;ce++){he=Ee[ce].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];v.format!==pn?Ce!==null?H?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,ke,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Ge.width,Ge.height,Ce,Se,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,ke,Ge.width,Ge.height,0,Ce,Se,Ge.data)}}}else{if(he=v.mipmaps,H&&ge){he.length>0&&Le++;const ce=fe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ke,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(de){H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Ce,Se,Ee[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ke,Ee[ce].width,Ee[ce].height,0,Ce,Se,Ee[ce].data);for(let Ue=0;Ue<he.length;Ue++){const ut=he[Ue].image[ce].image;H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,ut.width,ut.height,Ce,Se,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,ke,ut.width,ut.height,0,Ce,Se,ut.data)}}else{H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce,Se,Ee[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ke,Ce,Se,Ee[ce]);for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,Ce,Se,Ge.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,ke,Ce,Se,Ge.image[ce])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),K.__version=re.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ne(M,v,F,X,re,K){const _e=r.convert(F.format,F.colorSpace),ue=r.convert(F.type),Te=A(F.internalFormat,_e,ue,F.colorSpace),we=i.get(v),de=i.get(F);if(de.__renderTarget=v,!we.__hasExternalTextures){const Ee=Math.max(1,v.width>>K),Ie=Math.max(1,v.height>>K);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,K,Te,Ee,Ie,v.depth,0,_e,ue,null):t.texImage2D(re,K,Te,Ee,Ie,0,_e,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),V(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,re,de.__webglTexture,0,j(v)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,re,de.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(M,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const X=v.depthTexture,re=X&&X.isDepthTexture?X.type:null,K=S(v.stencilBuffer,re),_e=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=j(v);V(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,K,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,M)}else{const X=v.textures;for(let re=0;re<X.length;re++){const K=X[re],_e=r.convert(K.format,K.colorSpace),ue=r.convert(K.type),Te=A(K.internalFormat,_e,ue,K.colorSpace),we=j(v);F&&V(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Te,v.width,v.height):V(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const re=X.__webglTexture,K=j(v);if(v.depthTexture.format===Mr)V(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(v.depthTexture.format===yr)V(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(M){const v=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const re=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",re)};X.addEventListener("dispose",re),v.__depthDisposeCallback=re}v.__boundDepthTexture=X}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=M.texture.mipmaps;X&&X.length>0?le(v.__webglFramebuffer[0],M):le(v.__webglFramebuffer,M)}else if(F){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),ae(v.__webglDepthbuffer[X],M,!1);else{const re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,K)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ae(v.__webglDepthbuffer,M,!1);else{const re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(M,v,F){const X=i.get(M);v!==void 0&&ne(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Re(M)}function g(M){const v=M.texture,F=i.get(M),X=i.get(v);M.addEventListener("dispose",L);const re=M.textures,K=M.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let Te=0;Te<v.mipmaps.length;Te++)F.__webglFramebuffer[ue][Te]=n.createFramebuffer()}else F.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)F.__webglFramebuffer[ue]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ue=0,Te=re.length;ue<Te;ue++){const we=i.get(re[ue]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&V(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const Te=re[ue];F.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const we=r.convert(Te.format,Te.colorSpace),de=r.convert(Te.type),Ee=A(Te.internalFormat,we,de,Te.colorSpace,M.isXRRenderTarget===!0),Ie=j(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ne(F.__webglFramebuffer[ue][Te],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te);else ne(F.__webglFramebuffer[ue],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ue=0,Te=re.length;ue<Te;ue++){const we=re[ue],de=i.get(we);let Ee=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Ee=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,de.__webglTexture),Ne(Ee,we),ne(F.__webglFramebuffer,M,we,n.COLOR_ATTACHMENT0+ue,Ee,0),m(we)&&p(Ee)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,X.__webglTexture),Ne(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ne(F.__webglFramebuffer[Te],M,v,n.COLOR_ATTACHMENT0,ue,Te);else ne(F.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}M.depthBuffer&&Re(M)}function N(M){const v=M.textures;for(let F=0,X=v.length;F<X;F++){const re=v[F];if(m(re)){const K=T(M),_e=i.get(re).__webglTexture;t.bindTexture(K,_e),p(K),t.unbindTexture()}}}const w=[],P=[];function D(M){if(M.samples>0){if(V(M)===!1){const v=M.textures,F=M.width,X=M.height;let re=n.COLOR_BUFFER_BIT;const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(M),ue=v.length>1;if(ue)for(let we=0;we<v.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<v.length;we++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const de=i.get(v[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,re,n.NEAREST),l===!0&&(w.length=0,P.length=0,w.push(n.COLOR_ATTACHMENT0+we),M.depthBuffer&&M.resolveDepthBuffer===!1&&(w.push(K),P.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<v.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const de=i.get(v[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function j(M){return Math.min(s.maxSamples,M.samples)}function V(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Y(M){const v=a.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function ie(M,v){const F=M.colorSpace,X=M.format,re=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==Ds&&F!==mi&&(Je.getTransfer(F)===ot?(X!==pn||re!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function fe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=oe,this.setTextureCube=W,this.rebindTextures=C,this.setupRenderTarget=g,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=V}function kE(n,e){function t(i,s=mi){let r;const a=Je.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gp)return n.BYTE;if(i===_p)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===Dc)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Pr)return n.HALF_FLOAT;if(i===Sp)return n.ALPHA;if(i===Mp)return n.RGB;if(i===pn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===yp)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===Ep)return n.RG;if(i===Oc)return n.RG_INTEGER;if(i===Bc)return n.RGBA_INTEGER;if(i===Sa||i===Ma||i===ya||i===Ea)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ol||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===kl||i===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===kl)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===Zl||i===$l||i===Jl||i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===oc||i===lc||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const VE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
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

}`;class WE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Op(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:VE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XE extends Fs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const x=typeof XRWebGLBinding<"u",m=new WE,p={},T=t.getContextAttributes();let A=null,S=null;const I=[],R=[],L=new rt;let z=null;const y=new an;y.viewport=new vt;const E=new an;E.viewport=new vt;const U=[y,E],B=new fx;let q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let O=I[se];return O===void 0&&(O=new Ko,I[se]=O),O.getTargetRaySpace()},this.getControllerGrip=function(se){let O=I[se];return O===void 0&&(O=new Ko,I[se]=O),O.getGripSpace()},this.getHand=function(se){let O=I[se];return O===void 0&&(O=new Ko,I[se]=O),O.getHandSpace()};function ee(se){const O=R.indexOf(se.inputSource);if(O===-1)return;const ne=I[O];ne!==void 0&&(ne.update(se.inputSource,se.frame,c||a),ne.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",oe);for(let se=0;se<I.length;se++){const O=R[se];O!==null&&(R[se]=null,I[se].disconnect(O))}q=null,te=null,m.reset();for(const se in p)delete p[se];e.setRenderTarget(A),h=null,d=null,f=null,s=null,S=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",$),s.addEventListener("inputsourceschange",oe),T.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ae=null,le=null;T.depth&&(le=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=T.stencil?yr:Mr,ae=T.stencil?Sr:qi);const Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Yi(d.textureWidth,d.textureHeight,{format:pn,type:Jn,depthTexture:new Fp(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Yi(h.framebufferWidth,h.framebufferHeight,{format:pn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(se){for(let O=0;O<se.removed.length;O++){const ne=se.removed[O],ae=R.indexOf(ne);ae>=0&&(R[ae]=null,I[ae].disconnect(ne))}for(let O=0;O<se.added.length;O++){const ne=se.added[O];let ae=R.indexOf(ne);if(ae===-1){for(let Re=0;Re<I.length;Re++)if(Re>=R.length){R.push(ne),ae=Re;break}else if(R[Re]===null){R[Re]=ne,ae=Re;break}if(ae===-1)break}const le=I[ae];le&&le.connect(ne)}}const W=new Z,me=new Z;function ve(se,O,ne){W.setFromMatrixPosition(O.matrixWorld),me.setFromMatrixPosition(ne.matrixWorld);const ae=W.distanceTo(me),le=O.projectionMatrix.elements,Re=ne.projectionMatrix.elements,C=le[14]/(le[10]-1),g=le[14]/(le[10]+1),N=(le[9]+1)/le[5],w=(le[9]-1)/le[5],P=(le[8]-1)/le[0],D=(Re[8]+1)/Re[0],j=C*P,V=C*D,Y=ae/(-P+D),ie=Y*-P;if(O.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ie),se.translateZ(Y),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),le[10]===-1)se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const fe=C+Y,M=g+Y,v=j-ie,F=V+(ae-ie),X=N*g/M*fe,re=w*g/M*fe;se.projectionMatrix.makePerspective(v,F,X,re,fe,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Ae(se,O){O===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(O.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let O=se.near,ne=se.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),B.near=E.near=y.near=O,B.far=E.far=y.far=ne,(q!==B.near||te!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,te=B.far),B.layers.mask=se.layers.mask|6,y.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const ae=se.parent,le=B.cameras;Ae(B,ae);for(let Re=0;Re<le.length;Re++)Ae(le[Re],ae);le.length===2?ve(B,y,E):B.projectionMatrix.copy(y.projectionMatrix),Ne(se,B,ae)};function Ne(se,O,ne){ne===null?se.matrix.copy(O.matrixWorld):(se.matrix.copy(ne.matrixWorld),se.matrix.invert(),se.matrix.multiply(O.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=uc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(se){return p[se]};let Ye=null;function Ke(se,O){if(u=O.getViewerPose(c||a),_=O,u!==null){const ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ae=!1;ne.length!==B.cameras.length&&(B.cameras.length=0,ae=!0);for(let g=0;g<ne.length;g++){const N=ne[g];let w=null;if(h!==null)w=h.getViewport(N);else{const D=f.getViewSubImage(d,N);w=D.viewport,g===0&&(e.setRenderTargetTextures(S,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(S))}let P=U[g];P===void 0&&(P=new an,P.layers.enable(g),P.viewport=new vt,U[g]=P),P.matrix.fromArray(N.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(N.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(w.x,w.y,w.width,w.height),g===0&&(B.matrix.copy(P.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ae===!0&&B.cameras.push(P)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const g=f.getDepthInformation(ne[0]);g&&g.isValid&&g.texture&&m.init(g,s.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let g=0;g<ne.length;g++){const N=ne[g].camera;if(N){let w=p[N];w||(w=new Op,p[N]=w);const P=f.getCameraImage(N);w.sourceTexture=P}}}}for(let ne=0;ne<I.length;ne++){const ae=R[ne],le=I[ne];ae!==null&&le!==void 0&&le.update(ae,O,c||a)}Ye&&Ye(se,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const Xe=new Bp;Xe.setAnimationLoop(Ke),this.setAnimationLoop=function(se){Ye=se},this.dispose=function(){}}}const Ni=new Qn,qE=new xt;function YE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,S=T.envMapRotation;A&&(m.envMap.value=A,Ni.copy(S),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(qE.makeRotationFromEuler(Ni)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const S=A.program;i.uniformBlockBinding(T,S)}function c(T,A){let S=s[T.id];S===void 0&&(_(T),S=u(T),s[T.id]=S,T.addEventListener("dispose",m));const I=A.program;i.updateUBOMapping(T,I);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){const A=f();T.__bindingPointIndex=A;const S=n.createBuffer(),I=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=s[T.id],S=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,L=S.length;R<L;R++){const z=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,E=z.length;y<E;y++){const U=z[y];if(h(U,R,y,I)===!0){const B=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let te=0;for(let ee=0;ee<q.length;ee++){const $=q[ee],oe=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+te,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,te),te+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,A,S,I){const R=T.value,L=A+"_"+S;if(I[L]===void 0)return typeof R=="number"||typeof R=="boolean"?I[L]=R:I[L]=R.clone(),!0;{const z=I[L];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return I[L]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function _(T){const A=T.uniforms;let S=0;const I=16;for(let L=0,z=A.length;L<z;L++){const y=Array.isArray(A[L])?A[L]:[A[L]];for(let E=0,U=y.length;E<U;E++){const B=y[E],q=Array.isArray(B.value)?B.value:[B.value];for(let te=0,ee=q.length;te<ee;te++){const $=q[te],oe=x($),W=S%I,me=W%oe.boundary,ve=W+me;S+=me,ve!==0&&I-ve<oe.storage&&(S+=I-ve),B.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=oe.storage}}}const R=S%I;return R>0&&(S+=I-R),T.__size=S,T.__cache={},this}function x(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class jE{constructor(e={}){const{canvas:t=Ev(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=sn;let R=0,L=0,z=null,y=-1,E=null;const U=new vt,B=new vt;let q=null;const te=new et(0);let ee=0,$=t.width,oe=t.height,W=1,me=null,ve=null;const Ae=new vt(0,0,$,oe),Ne=new vt(0,0,$,oe);let Ye=!1;const Ke=new Up;let Xe=!1,se=!1;const O=new xt,ne=new Z,ae=new vt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function C(){return z===null?W:1}let g=i;function N(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",he,!1),g===null){const k="webgl2";if(g=N(k,b),g===null)throw N(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let w,P,D,j,V,Y,ie,fe,M,v,F,X,re,K,_e,ue,Te,we,de,Ee,Ie,Ce,Se,ke;function H(){w=new ry(g),w.init(),Ce=new kE(g,w),P=new JM(g,w,e,Ce),D=new zE(g,w),P.reversedDepthBuffer&&d&&D.buffers.depth.setReversed(!0),j=new ly(g),V=new TE,Y=new HE(g,w,D,V,P,Ce,j),ie=new ey(S),fe=new sy(S),M=new px(g),Se=new ZM(g,M),v=new ay(g,M,j,Se),F=new uy(g,v,M,j),de=new cy(g,P,Y),ue=new QM(V),X=new AE(S,ie,fe,w,P,Se,ue),re=new YE(S,V),K=new CE,_e=new UE(w),we=new jM(S,ie,fe,D,F,h,l),Te=new OE(S,F,P),ke=new KE(g,j,P,D),Ee=new $M(g,w,j),Ie=new oy(g,w,j),j.programs=X.programs,S.capabilities=P,S.extensions=w,S.properties=V,S.renderLists=K,S.shadowMap=Te,S.state=D,S.info=j}H();const ge=new XE(S,g);this.xr=ge,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=w.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=w.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize($,oe,!1))},this.getSize=function(b){return b.set($,oe)},this.setSize=function(b,k,J=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,oe=k,t.width=Math.floor(b*W),t.height=Math.floor(k*W),J===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set($*W,oe*W).floor()},this.setDrawingBufferSize=function(b,k,J){$=b,oe=k,W=J,t.width=Math.floor(b*J),t.height=Math.floor(k*J),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,k,J,Q){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,k,J,Q),D.viewport(U.copy(Ae).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,k,J,Q){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,k,J,Q),D.scissor(B.copy(Ne).multiplyScalar(W).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){D.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,J=!0){let Q=0;if(b){let G=!1;if(z!==null){const pe=z.texture.format;G=pe===Bc||pe===Oc||pe===Fc}if(G){const pe=z.texture.type,be=pe===Jn||pe===qi||pe===xr||pe===Sr||pe===Uc||pe===Nc,De=we.getClearColor(),Pe=we.getClearAlpha(),Be=De.r,He=De.g,Fe=De.b;be?(_[0]=Be,_[1]=He,_[2]=Fe,_[3]=Pe,g.clearBufferuiv(g.COLOR,0,_)):(x[0]=Be,x[1]=He,x[2]=Fe,x[3]=Pe,g.clearBufferiv(g.COLOR,0,x))}else Q|=g.COLOR_BUFFER_BIT}k&&(Q|=g.DEPTH_BUFFER_BIT),J&&(Q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),we.dispose(),K.dispose(),_e.dispose(),V.dispose(),ie.dispose(),fe.dispose(),F.dispose(),Se.dispose(),ke.dispose(),X.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",xn),ge.removeEventListener("sessionend",Xc),bi.stop()};function xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=j.autoReset,k=Te.enabled,J=Te.autoUpdate,Q=Te.needsUpdate,G=Te.type;H(),j.autoReset=b,Te.enabled=k,Te.autoUpdate=J,Te.needsUpdate=Q,Te.type=G}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ce(b){const k=b.target;k.removeEventListener("dispose",ce),Ue(k)}function Ue(b){Ge(b),V.remove(b)}function Ge(b){const k=V.get(b).programs;k!==void 0&&(k.forEach(function(J){X.releaseProgram(J)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,J,Q,G,pe){k===null&&(k=le);const be=G.isMesh&&G.matrixWorld.determinant()<0,De=Xp(b,k,J,Q,G);D.setMaterial(Q,be);let Pe=J.index,Be=1;if(Q.wireframe===!0){if(Pe=v.getWireframeAttribute(J),Pe===void 0)return;Be=2}const He=J.drawRange,Fe=J.attributes.position;let je=He.start*Be,at=(He.start+He.count)*Be;pe!==null&&(je=Math.max(je,pe.start*Be),at=Math.min(at,(pe.start+pe.count)*Be)),Pe!==null?(je=Math.max(je,0),at=Math.min(at,Pe.count)):Fe!=null&&(je=Math.max(je,0),at=Math.min(at,Fe.count));const _t=at-je;if(_t<0||_t===1/0)return;Se.setup(G,Q,De,J,Pe);let dt,lt=Ee;if(Pe!==null&&(dt=M.get(Pe),lt=Ie,lt.setIndex(dt)),G.isMesh)Q.wireframe===!0?(D.setLineWidth(Q.wireframeLinewidth*C()),lt.setMode(g.LINES)):lt.setMode(g.TRIANGLES);else if(G.isLine){let Oe=Q.linewidth;Oe===void 0&&(Oe=1),D.setLineWidth(Oe*C()),G.isLineSegments?lt.setMode(g.LINES):G.isLineLoop?lt.setMode(g.LINE_LOOP):lt.setMode(g.LINE_STRIP)}else G.isPoints?lt.setMode(g.POINTS):G.isSprite&&lt.setMode(g.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,mt=G._multiDrawCounts,$e=G._multiDrawCount,qt=Pe?M.get(Pe).bytesPerElement:1,Ki=V.get(Q).currentProgram.getUniforms();for(let Yt=0;Yt<$e;Yt++)Ki.setValue(g,"_gl_DrawID",Yt),lt.render(Oe[Yt]/qt,mt[Yt])}else if(G.isInstancedMesh)lt.renderInstances(je,_t,G.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mt=Math.min(J.instanceCount,Oe);lt.renderInstances(je,_t,mt)}else lt.render(je,_t)};function ut(b,k,J){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,Br(b,k,J),b.side=Mi,b.needsUpdate=!0,Br(b,k,J),b.side=En):Br(b,k,J)}this.compile=function(b,k,J=null){J===null&&(J=b),p=_e.get(J),p.init(k),A.push(p),J.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==J&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Q=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const De=pe[be];ut(De,J,G),Q.add(De)}else ut(pe,J,G),Q.add(pe)}),p=A.pop(),Q},this.compileAsync=function(b,k,J=null){const Q=this.compile(b,k,J);return new Promise(G=>{function pe(){if(Q.forEach(function(be){V.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){G(b);return}setTimeout(pe,10)}w.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function Ln(b){tt&&tt(b)}function xn(){bi.stop()}function Xc(){bi.start()}const bi=new Bp;bi.setAnimationLoop(Ln),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){tt=b,ge.setAnimationLoop(b),b===null?bi.stop():bi.start()},ge.addEventListener("sessionstart",xn),ge.addEventListener("sessionend",Xc),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(k),k=ge.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,k,z),p=_e.get(b,A.length),p.init(k),A.push(p),O.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ke.setFromProjectionMatrix(O,An,k.reversedDepth),se=this.localClippingEnabled,Xe=ue.init(this.clippingPlanes,se),m=K.get(b,T.length),m.init(),T.push(m),ge.enabled===!0&&ge.isPresenting===!0){const pe=S.xr.getDepthSensingMesh();pe!==null&&ro(pe,k,-1/0,S.sortObjects)}ro(b,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(me,ve),Re=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Re&&we.addToRenderList(m,b),this.info.render.frame++,Xe===!0&&ue.beginShadows();const J=p.state.shadowsArray;Te.render(J,b,k),Xe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){const pe=k.cameras;if(G.length>0)for(let be=0,De=pe.length;be<De;be++){const Pe=pe[be];Yc(Q,G,b,Pe)}Re&&we.render(b);for(let be=0,De=pe.length;be<De;be++){const Pe=pe[be];qc(m,b,Pe,Pe.viewport)}}else G.length>0&&Yc(Q,G,b,k),Re&&we.render(b),qc(m,b,k);z!==null&&L===0&&(Y.updateMultisampleRenderTarget(z),Y.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(S,b,k),Se.resetDefaultState(),y=-1,E=null,A.pop(),A.length>0?(p=A[A.length-1],Xe===!0&&ue.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ro(b,k,J,Q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ke.intersectsSprite(b)){Q&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(O);const be=F.update(b),De=b.material;De.visible&&m.push(b,be,De,J,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ke.intersectsObject(b))){const be=F.update(b),De=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ae.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ae.copy(be.boundingSphere.center)),ae.applyMatrix4(b.matrixWorld).applyMatrix4(O)),Array.isArray(De)){const Pe=be.groups;for(let Be=0,He=Pe.length;Be<He;Be++){const Fe=Pe[Be],je=De[Fe.materialIndex];je&&je.visible&&m.push(b,be,je,J,ae.z,Fe)}}else De.visible&&m.push(b,be,De,J,ae.z,null)}}const pe=b.children;for(let be=0,De=pe.length;be<De;be++)ro(pe[be],k,J,Q)}function qc(b,k,J,Q){const G=b.opaque,pe=b.transmissive,be=b.transparent;p.setupLightsView(J),Xe===!0&&ue.setGlobalState(S.clippingPlanes,J),Q&&D.viewport(U.copy(Q)),G.length>0&&Or(G,k,J),pe.length>0&&Or(pe,k,J),be.length>0&&Or(be,k,J),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Yc(b,k,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Yi(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Pr:Jn,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Q.id],be=Q.viewport||U;pe.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const De=S.getRenderTarget(),Pe=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(pe),S.getClearColor(te),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),Re&&we.render(J);const He=S.toneMapping;S.toneMapping=xi;const Fe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Xe===!0&&ue.setGlobalState(S.clippingPlanes,Q),Or(b,J,Q),Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe),w.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let at=0,_t=k.length;at<_t;at++){const dt=k[at],lt=dt.object,Oe=dt.geometry,mt=dt.material,$e=dt.group;if(mt.side===En&&lt.layers.test(Q.layers)){const qt=mt.side;mt.side=Xt,mt.needsUpdate=!0,Kc(lt,J,Q,Oe,mt,$e),mt.side=qt,mt.needsUpdate=!0,je=!0}}je===!0&&(Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe))}S.setRenderTarget(De,Pe,Be),S.setClearColor(te,ee),Fe!==void 0&&(Q.viewport=Fe),S.toneMapping=He}function Or(b,k,J){const Q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){const be=b[G],De=be.object,Pe=be.geometry,Be=be.group;let He=be.material;He.allowOverride===!0&&Q!==null&&(He=Q),De.layers.test(J.layers)&&Kc(De,k,J,Pe,He,Be)}}function Kc(b,k,J,Q,G,pe){b.onBeforeRender(S,k,J,Q,G,pe),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(S,k,J,Q,b,pe),G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=Xt,G.needsUpdate=!0,S.renderBufferDirect(J,k,Q,G,b,pe),G.side=Mi,G.needsUpdate=!0,S.renderBufferDirect(J,k,Q,G,b,pe),G.side=En):S.renderBufferDirect(J,k,Q,G,b,pe),b.onAfterRender(S,k,J,Q,G,pe)}function Br(b,k,J){k.isScene!==!0&&(k=le);const Q=V.get(b),G=p.state.lights,pe=p.state.shadowsArray,be=G.state.version,De=X.getParameters(b,G.state,pe,k,J),Pe=X.getProgramCacheKey(De);let Be=Q.programs;Q.environment=b.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(b.isMeshStandardMaterial?fe:ie).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ce),Be=new Map,Q.programs=Be);let He=Be.get(Pe);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===be)return Zc(b,De),He}else De.uniforms=X.getUniforms(b),b.onBeforeCompile(De,S),He=X.acquireProgram(De,Pe),Be.set(Pe,He),Q.uniforms=De.uniforms;const Fe=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),Zc(b,De),Q.needsLights=Yp(b),Q.lightsStateVersion=be,Q.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function jc(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=ba.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Zc(b,k){const J=V.get(b);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Xp(b,k,J,Q,G){k.isScene!==!0&&(k=le),Y.resetTextureUnits();const pe=k.fog,be=Q.isMeshStandardMaterial?k.environment:null,De=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ds,Pe=(Q.isMeshStandardMaterial?fe:ie).get(Q.envMap||be),Be=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Fe=!!J.morphAttributes.position,je=!!J.morphAttributes.normal,at=!!J.morphAttributes.color;let _t=xi;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_t=S.toneMapping);const dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=dt!==void 0?dt.length:0,Oe=V.get(Q),mt=p.state.lights;if(Xe===!0&&(se===!0||b!==E)){const Ft=b===E&&Q.id===y;ue.setState(Q,b,Ft)}let $e=!1;Q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==mt.state.version||Oe.outputColorSpace!==De||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Pe||Q.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ue.numPlanes||Oe.numIntersection!==ue.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==He||Oe.morphTargets!==Fe||Oe.morphNormals!==je||Oe.morphColors!==at||Oe.toneMapping!==_t||Oe.morphTargetsCount!==lt)&&($e=!0):($e=!0,Oe.__version=Q.version);let qt=Oe.currentProgram;$e===!0&&(qt=Br(Q,k,G));let Ki=!1,Yt=!1,zs=!1;const gt=qt.getUniforms(),Jt=Oe.uniforms;if(D.useProgram(qt.program)&&(Ki=!0,Yt=!0,zs=!0),Q.id!==y&&(y=Q.id,Yt=!0),Ki||E!==b){D.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),gt.setValue(g,"projectionMatrix",b.projectionMatrix),gt.setValue(g,"viewMatrix",b.matrixWorldInverse);const kt=gt.map.cameraPosition;kt!==void 0&&kt.setValue(g,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&gt.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gt.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Yt=!0,zs=!0)}if(G.isSkinnedMesh){gt.setOptional(g,G,"bindMatrix"),gt.setOptional(g,G,"bindMatrixInverse");const Ft=G.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),gt.setValue(g,"boneTexture",Ft.boneTexture,Y))}G.isBatchedMesh&&(gt.setOptional(g,G,"batchingTexture"),gt.setValue(g,"batchingTexture",G._matricesTexture,Y),gt.setOptional(g,G,"batchingIdTexture"),gt.setValue(g,"batchingIdTexture",G._indirectTexture,Y),gt.setOptional(g,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(g,"batchingColorTexture",G._colorsTexture,Y));const Qt=J.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&de.update(G,J,qt),(Yt||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,gt.setValue(g,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jt.envMap.value=Pe,Jt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Yt&&(gt.setValue(g,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&qp(Jt,zs),pe&&Q.fog===!0&&re.refreshFogUniforms(Jt,pe),re.refreshMaterialUniforms(Jt,Q,W,oe,p.state.transmissionRenderTarget[b.id]),ba.upload(g,jc(Oe),Jt,Y)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ba.upload(g,jc(Oe),Jt,Y),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gt.setValue(g,"center",G.center),gt.setValue(g,"modelViewMatrix",G.modelViewMatrix),gt.setValue(g,"normalMatrix",G.normalMatrix),gt.setValue(g,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ft=Q.uniformsGroups;for(let kt=0,ao=Ft.length;kt<ao;kt++){const Ai=Ft[kt];ke.update(Ai,qt),ke.bind(Ai,qt)}}return qt}function qp(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Yp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,k,J){const Q=V.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=k,V.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const J=V.get(b);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const Kp=g.createFramebuffer();this.setRenderTarget=function(b,k=0,J=0){z=b,R=k,L=J;let Q=!0,G=null,pe=!1,be=!1;if(b){const Pe=V.get(b);if(Pe.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(Pe.__hasExternalTextures)Y.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Pe.__boundDepthTexture!==Fe){if(Fe!==null&&V.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const He=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[k])?G=He[k][J]:G=He[k],pe=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?G=V.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[J]:G=He,U.copy(b.viewport),B.copy(b.scissor),q=b.scissorTest}else U.copy(Ae).multiplyScalar(W).floor(),B.copy(Ne).multiplyScalar(W).floor(),q=Ye;if(J!==0&&(G=Kp),D.bindFramebuffer(g.FRAMEBUFFER,G)&&Q&&D.drawBuffers(b,G),D.viewport(U),D.scissor(B),D.setScissorTest(q),pe){const Pe=V.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,J)}else if(be){const Pe=k;for(let Be=0;Be<b.textures.length;Be++){const He=V.get(b.textures[Be]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+Be,He.__webglTexture,J,Pe)}}else if(b!==null&&J!==0){const Pe=V.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Pe.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(b,k,J,Q,G,pe,be,De=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){D.bindFramebuffer(g.FRAMEBUFFER,Pe);try{const Be=b.textures[De],He=Be.format,Fe=Be.type;if(!P.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Q&&J>=0&&J<=b.height-G&&(b.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+De),g.readPixels(k,J,Q,G,Ce.convert(He),Ce.convert(Fe),pe))}finally{const Be=z!==null?V.get(z).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,k,J,Q,G,pe,be,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(k>=0&&k<=b.width-Q&&J>=0&&J<=b.height-G){D.bindFramebuffer(g.FRAMEBUFFER,Pe);const Be=b.textures[De],He=Be.format,Fe=Be.type;if(!P.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,je),g.bufferData(g.PIXEL_PACK_BUFFER,pe.byteLength,g.STREAM_READ),b.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+De),g.readPixels(k,J,Q,G,Ce.convert(He),Ce.convert(Fe),0);const at=z!==null?V.get(z).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,at);const _t=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await bv(g,_t,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,je),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,pe),g.deleteBuffer(je),g.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,J=0){const Q=Math.pow(2,-J),G=Math.floor(b.image.width*Q),pe=Math.floor(b.image.height*Q),be=k!==null?k.x:0,De=k!==null?k.y:0;Y.setTexture2D(b,0),g.copyTexSubImage2D(g.TEXTURE_2D,J,0,0,be,De,G,pe),D.unbindTexture()};const jp=g.createFramebuffer(),Zp=g.createFramebuffer();this.copyTextureToTexture=function(b,k,J=null,Q=null,G=0,pe=null){pe===null&&(G!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let be,De,Pe,Be,He,Fe,je,at,_t;const dt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(J!==null)be=J.max.x-J.min.x,De=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Be=J.min.x,He=J.min.y,Fe=J.isBox3?J.min.z:0;else{const Qt=Math.pow(2,-G);be=Math.floor(dt.width*Qt),De=Math.floor(dt.height*Qt),b.isDataArrayTexture?Pe=dt.depth:b.isData3DTexture?Pe=Math.floor(dt.depth*Qt):Pe=1,Be=0,He=0,Fe=0}Q!==null?(je=Q.x,at=Q.y,_t=Q.z):(je=0,at=0,_t=0);const lt=Ce.convert(k.format),Oe=Ce.convert(k.type);let mt;k.isData3DTexture?(Y.setTexture3D(k,0),mt=g.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Y.setTexture2DArray(k,0),mt=g.TEXTURE_2D_ARRAY):(Y.setTexture2D(k,0),mt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,k.unpackAlignment);const $e=g.getParameter(g.UNPACK_ROW_LENGTH),qt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ki=g.getParameter(g.UNPACK_SKIP_PIXELS),Yt=g.getParameter(g.UNPACK_SKIP_ROWS),zs=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,dt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,dt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Fe);const gt=b.isDataArrayTexture||b.isData3DTexture,Jt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Qt=V.get(b),Ft=V.get(k),kt=V.get(Qt.__renderTarget),ao=V.get(Ft.__renderTarget);D.bindFramebuffer(g.READ_FRAMEBUFFER,kt.__webglFramebuffer),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let Ai=0;Ai<Pe;Ai++)gt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,V.get(b).__webglTexture,G,Fe+Ai),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,V.get(k).__webglTexture,pe,_t+Ai)),g.blitFramebuffer(Be,He,be,De,je,at,be,De,g.DEPTH_BUFFER_BIT,g.NEAREST);D.bindFramebuffer(g.READ_FRAMEBUFFER,null),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||V.has(b)){const Qt=V.get(b),Ft=V.get(k);D.bindFramebuffer(g.READ_FRAMEBUFFER,jp),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,Zp);for(let kt=0;kt<Pe;kt++)gt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Qt.__webglTexture,G,Fe+kt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Qt.__webglTexture,G),Jt?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ft.__webglTexture,pe,_t+kt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Ft.__webglTexture,pe),G!==0?g.blitFramebuffer(Be,He,be,De,je,at,be,De,g.COLOR_BUFFER_BIT,g.NEAREST):Jt?g.copyTexSubImage3D(mt,pe,je,at,_t+kt,Be,He,be,De):g.copyTexSubImage2D(mt,pe,je,at,Be,He,be,De);D.bindFramebuffer(g.READ_FRAMEBUFFER,null),D.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Jt?b.isDataTexture||b.isData3DTexture?g.texSubImage3D(mt,pe,je,at,_t,be,De,Pe,lt,Oe,dt.data):k.isCompressedArrayTexture?g.compressedTexSubImage3D(mt,pe,je,at,_t,be,De,Pe,lt,dt.data):g.texSubImage3D(mt,pe,je,at,_t,be,De,Pe,lt,Oe,dt):b.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,pe,je,at,be,De,lt,Oe,dt.data):b.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,pe,je,at,dt.width,dt.height,lt,dt.data):g.texSubImage2D(g.TEXTURE_2D,pe,je,at,be,De,lt,Oe,dt);g.pixelStorei(g.UNPACK_ROW_LENGTH,$e),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,qt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ki),g.pixelStorei(g.UNPACK_SKIP_ROWS,Yt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,zs),pe===0&&k.generateMipmaps&&g.generateMipmap(mt),D.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),D.unbindTexture()},this.resetState=function(){R=0,L=0,z=null,D.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Gp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},ZE=["src"],$E={id:"loadingOverlay"},JE={class:"loading-text"},QE={key:0},e1={name:"HomePage"},t1=Object.assign(e1,{setup(n){const e=[new URL("/Intellectuals-Artificial-Criminals/assets/J1-CmbhwsQo.mp4",import.meta.url).href,new URL("/Intellectuals-Artificial-Criminals/assets/J2-JXknW-Qh.mp4",import.meta.url).href,new URL("/Intellectuals-Artificial-Criminals/assets/J3-hGU-T6Yf.mp4",import.meta.url).href,new URL("/Intellectuals-Artificial-Criminals/assets/J4-BTByG8d9.mp4",import.meta.url).href,new URL("/Intellectuals-Artificial-Criminals/assets/J5-BkSJNXRg.mp4",import.meta.url).href],t=Tt(),i=dp(),s=Tt(null),r=Tt(null),a=Tt(0);let o,l,c,u=[],f=[],d=!1,h={x:0,y:0},_;const x=[[{src:"1",x:0,y:0},{src:"8",x:-2,y:3.8},{src:"23",x:2.5,y:2.2},{src:"11",x:3,y:1.5},{src:"3",x:-2.5,y:-.5},{src:"19",x:-1,y:1.2},{src:"27",x:3.8,y:-1.8},{src:"5",x:5.2,y:-.3},{src:"12",x:-2.5,y:-2.1},{src:"30",x:.5,y:-3.2},{src:"7",x:4.2,y:-4.1},{src:"14",x:-3.2,y:-3.8}],[{src:"22",x:-8,y:3.2},{src:"4",x:-5.5,y:4.1},{src:"16",x:-2.8,y:2.7},{src:"9",x:-.2,y:4.3},{src:"25",x:3.2,y:3.5},{src:"1",x:6.5,y:4},{src:"18",x:8.8,y:2.1},{src:"13",x:-7.2,y:.8},{src:"29",x:-4.8,y:-1.2},{src:"6",x:-1.5,y:-.8},{src:"21",x:1.8,y:.3},{src:"10",x:5.2,y:-1.5},{src:"26",x:8.1,y:-2.8},{src:"2",x:-6.8,y:-3.5},{src:"17",x:-3.5,y:-2.2},{src:"24",x:2.8,y:-2.8},{src:"20",x:4.8,y:-3.9},{src:"28",x:7.5,y:-4.2}],[{src:"11",x:-9.2,y:4.5},{src:"3",x:-6.8,y:3.8},{src:"15",x:-4.1,y:4.8},{src:"8",x:-1.2,y:3.1},{src:"23",x:1.5,y:4.6},{src:"19",x:4.8,y:3.8},{src:"27",x:7.2,y:4.2},{src:"12",x:9.8,y:3.1},{src:"5",x:-8.5,y:1.5},{src:"30",x:-5.8,y:2.2},{src:"7",x:-2.5,y:1.8},{src:"14",x:.2,y:2.5},{src:"22",x:2.8,y:1.2},{src:"4",x:5.5,y:2.8},{src:"16",x:8.2,y:1.5},{src:"9",x:-7.8,y:-.8},{src:"25",x:-4.2,y:.3},{src:"1",x:-1.8,y:-.5},{src:"18",x:1.2,y:-1.2},{src:"13",x:3.8,y:.2},{src:"29",x:6.5,y:-.8},{src:"6",x:9.1,y:-1.5},{src:"21",x:-8.8,y:-2.8},{src:"10",x:-5.2,y:-3.2},{src:"26",x:-2.8,y:-2.5},{src:"2",x:-.5,y:-3.8},{src:"17",x:2.2,y:-2.8},{src:"24",x:4.5,y:-3.5},{src:"20",x:7.8,y:-2.2},{src:"28",x:9.5,y:-3.8}],[{src:"12",x:-10.5,y:4.8},{src:"7",x:-8.2,y:5.2},{src:"19",x:-5.5,y:5.5},{src:"3",x:-2.8,y:5.1},{src:"25",x:-.2,y:5.8},{src:"11",x:2.5,y:5.2},{src:"16",x:5.2,y:5.6},{src:"28",x:7.8,y:5.1},{src:"4",x:10.2,y:4.8},{src:"22",x:-9.8,y:2.8},{src:"8",x:-7.2,y:3.5},{src:"14",x:-4.5,y:3.2},{src:"30",x:-1.8,y:3.8},{src:"6",x:1.2,y:3.1},{src:"21",x:3.8,y:3.6},{src:"9",x:6.5,y:3.2},{src:"27",x:9.2,y:2.8},{src:"13",x:-10.2,y:.5},{src:"18",x:-7.5,y:1.2},{src:"2",x:-4.8,y:.8},{src:"26",x:-2.2,y:1.5},{src:"15",x:.5,y:.8},{src:"23",x:3.2,y:1.2},{src:"10",x:5.8,y:.5},{src:"29",x:8.5,y:1.8},{src:"1",x:-9.5,y:-1.8},{src:"17",x:-6.8,y:-1.2},{src:"24",x:-4.2,y:-1.8},{src:"5",x:-1.5,y:-1.5},{src:"20",x:1.8,y:-1.2},{src:"7",x:4.2,y:-1.8},{src:"12",x:6.8,y:-1.5},{src:"19",x:9.5,y:-1.2},{src:"11",x:-8.8,y:-3.8},{src:"25",x:-6.2,y:-4.2},{src:"3",x:-3.5,y:-3.5},{src:"16",x:-.8,y:-4.1},{src:"28",x:2.2,y:-3.8},{src:"14",x:4.8,y:-4.5},{src:"22",x:7.5,y:-3.8},{src:"8",x:10.1,y:-4.2},{src:"30",x:-10.8,y:-5.5},{src:"4",x:-7.8,y:-5.8},{src:"21",x:-5.2,y:-5.2},{src:"6",x:-2.5,y:-5.8},{src:"9",x:.2,y:-5.2},{src:"27",x:2.8,y:-5.6},{src:"13",x:5.5,y:-5.1},{src:"18",x:8.2,y:-5.5}]],m=[20,16,12,8,4],p=3,T=.004,A=.3,S={CRITICAL:0,HIGH:1,MEDIUM:2,LOW:3},I=[{images:x[0],priority:S.CRITICAL,z:m[0]},{images:x[1],priority:S.HIGH,z:m[1]},{images:x[2],priority:S.MEDIUM,z:m[2]},{images:x[3],priority:S.LOW,z:m[3]}],R={x:{min:-1.8,max:1},y:{min:-2,max:2},z:{min:9,max:23}};class L{constructor(){this.loader=new ox,this.textureCache=new Map,this.loadQueue=[],this.maxConcurrent=6,this.currentLoading=0}createLowQualityPlaceholder(){const w=document.createElement("canvas");w.width=64,w.height=48;const P=w.getContext("2d"),D=P.createLinearGradient(0,0,64,48);D.addColorStop(0,"#2a2a2a"),D.addColorStop(1,"#1a1a1a"),P.fillStyle=D,P.fillRect(0,0,64,48),P.strokeStyle="#555",P.lineWidth=1,P.strokeRect(2,2,60,44);const j=new tx(w);return j.encoding=void 0,j}loadBatch(w,P,D){const j=new Map;let V=0;const Y=[];if(w.forEach(fe=>{this.textureCache.has(fe)?(j.set(fe,this.textureCache.get(fe)),V++):Y.push(fe)}),Y.length===0){P?.(V,w.length),D?.(j);return}const ie=()=>{for(;this.currentLoading<this.maxConcurrent&&this.loadQueue.length>0;){const{url:fe,resolve:M,reject:v}=this.loadQueue.shift();this.currentLoading++,this.loader.load(fe,F=>{F.encoding=void 0,this.textureCache.set(fe,F),this.currentLoading--,j.set(fe,F),V++,P?.(V,w.length),M(F),ie(),V===w.length&&D?.(j)},void 0,F=>{this.currentLoading--,console.warn(`加载失败: ${fe}`,F);const X=this.createLowQualityPlaceholder();j.set(fe,X),V++,P?.(V,w.length),M(X),ie(),V===w.length&&D?.(j)})}};Y.forEach(fe=>{this.loadQueue.push({url:fe,resolve:M=>j.set(fe,M),reject:M=>console.error(M)})}),V>0&&P?.(V,w.length),ie()}}const z=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
`,y=`
    uniform sampler2D texture1;
    uniform bool highlight;
    varying vec2 vUv;
    void main() {
        vec4 color = texture2D(texture1, vUv);
        if(highlight) color.rgb += 0.3;
        gl_FragColor = color;
    }
`;function E(){if(o.children.filter(P=>P.type==="LineSegments").forEach(P=>{o.remove(P),P.geometry.dispose(),P.material.dispose()}),f.length<2)return;const w=[];for(let P=0;P<f.length;P++)f.map((j,V)=>({pos:j,idx:V,dist:f[P].distanceToSquared(j)})).filter(j=>j.idx!==P).sort((j,V)=>j.dist-V.dist).slice(0,Math.min(p,f.length-1)).forEach(j=>{w.push(f[P],j.pos)});if(f.length>10)for(let P=0;P<3;P++){const D=Math.floor(Math.random()*f.length),j=Math.floor(Math.random()*f.length);D!==j&&w.push(f[D],f[j])}if(w.length>0){const P=new ni().setFromPoints(w),D=new Np({color:10234410,transparent:!0,opacity:.4});o.add(new ex(P,D))}}let U=null;function B(){U=setTimeout(function P(){const D=Math.floor(Math.random()*e.length);t.value=e[D],s.value.style.display="block",setTimeout(()=>{s.value.style.display="none"},15e3),U=setTimeout(P,15e3*2)},15e3)}function q(){U&&(clearTimeout(U),U=null),s.value&&(s.value.style.display="none")}function te(N){const w=[...I].sort((Y,ie)=>Y.priority-ie.priority),P=I.reduce((Y,ie)=>Y+ie.images.length,0);let D=0,j=!1;function V(Y){if(Y>=w.length){setTimeout(()=>{E(),a.value=100,ve()},100);return}const ie=w[Y],fe=ie.images.map(M=>new URL(Object.assign({"../assets/images/detail/1/main.png":Zu,"../assets/images/detail/10/main.png":$u,"../assets/images/detail/11/main.png":Ju,"../assets/images/detail/12/main.png":Qu,"../assets/images/detail/13/main.png":ef,"../assets/images/detail/14/main.png":tf,"../assets/images/detail/15/main.png":nf,"../assets/images/detail/16/main.png":sf,"../assets/images/detail/17/main.png":rf,"../assets/images/detail/18/main.png":af,"../assets/images/detail/19/main.png":of,"../assets/images/detail/2/main.png":lf,"../assets/images/detail/20/main.png":cf,"../assets/images/detail/21/main.png":uf,"../assets/images/detail/22/main.png":ff,"../assets/images/detail/23/main.png":df,"../assets/images/detail/24/main.png":hf,"../assets/images/detail/25/main.png":pf,"../assets/images/detail/26/main.png":mf,"../assets/images/detail/27/main.png":gf,"../assets/images/detail/28/main.png":_f,"../assets/images/detail/29/main.png":vf,"../assets/images/detail/3/main.png":xf,"../assets/images/detail/30/main.png":Sf,"../assets/images/detail/4/main.png":Mf,"../assets/images/detail/5/main.png":yf,"../assets/images/detail/6/main.png":Ef,"../assets/images/detail/7/main.png":bf,"../assets/images/detail/8/main.png":Af,"../assets/images/detail/9/main.png":Tf})[`../assets/images/detail/${M.src}/main.png`],import.meta.url).href);N.loadBatch(fe,(M,v)=>{const F=Math.round((D+M)/P*100);a.value=Math.min(100,F)},M=>{D+=ie.images.length;const v=Math.round(D/P*100);a.value=Math.min(100,v),ie.images.forEach(F=>{const X=M.get(new URL(Object.assign({"../assets/images/detail/1/main.png":Zu,"../assets/images/detail/10/main.png":$u,"../assets/images/detail/11/main.png":Ju,"../assets/images/detail/12/main.png":Qu,"../assets/images/detail/13/main.png":ef,"../assets/images/detail/14/main.png":tf,"../assets/images/detail/15/main.png":nf,"../assets/images/detail/16/main.png":sf,"../assets/images/detail/17/main.png":rf,"../assets/images/detail/18/main.png":af,"../assets/images/detail/19/main.png":of,"../assets/images/detail/2/main.png":lf,"../assets/images/detail/20/main.png":cf,"../assets/images/detail/21/main.png":uf,"../assets/images/detail/22/main.png":ff,"../assets/images/detail/23/main.png":df,"../assets/images/detail/24/main.png":hf,"../assets/images/detail/25/main.png":pf,"../assets/images/detail/26/main.png":mf,"../assets/images/detail/27/main.png":gf,"../assets/images/detail/28/main.png":_f,"../assets/images/detail/29/main.png":vf,"../assets/images/detail/3/main.png":xf,"../assets/images/detail/30/main.png":Sf,"../assets/images/detail/4/main.png":Mf,"../assets/images/detail/5/main.png":yf,"../assets/images/detail/6/main.png":Ef,"../assets/images/detail/7/main.png":bf,"../assets/images/detail/8/main.png":Af,"../assets/images/detail/9/main.png":Tf})[`../assets/images/detail/${F.src}/main.png`],import.meta.url).href),re=new Fr(1,1),K=new ei({side:En,transparent:!0,uniforms:{texture1:{value:X},highlight:{value:!1}},vertexShader:z,fragmentShader:y}),_e=new Tn(re,K),ue=X.image?X.image.width/X.image.height:2;_e.scale.set(ue,1,1),_e.position.set(F.x,F.y,ie.z),_e.userData.url=F.url||F.src,o.add(_e),u.push(_e),f.push(_e.position.clone())}),Y===0&&!j&&(j=!0,r.value&&(r.value.style.display="block")),f.length>5&&E(),V(Y+1)})}V(0)}let ee=null;const $=new dx,oe=new rt;function W(){$.setFromCamera(oe,l),$.near=1,$.far=10}function me(N){if(d)return;oe.x=N.clientX/window.innerWidth*2-1,oe.y=-(N.clientY/window.innerHeight)*2+1,W();const w=$.intersectObjects(u);if(w.length>0){const P=w[0].object;ee!==P&&(ee&&ee.material&&ee.material.uniforms&&(ee.material.uniforms.highlight.value=!1),ee=P,ee.material&&ee.material.uniforms&&(ee.material.uniforms.highlight.value=!0),r.value.style.cursor="pointer")}else ee&&ee.material&&ee.material.uniforms&&(ee.material.uniforms.highlight.value=!1),ee=null,r.value.style.cursor="default"}function ve(){e.forEach(N=>{const w=document.createElement("link");w.rel="prefetch",w.as="video",w.href=N,document.head.appendChild(w)})}const Ae=Tt(!1);function Ne(N){if(window.location.hash.includes("/detail/")||d||a.value<100||s.value.style.display!="none"||!Ae.value)return;oe.x=N.clientX/window.innerWidth*2-1,oe.y=-(N.clientY/window.innerHeight)*2+1,W();const P=$.intersectObjects(u);if(P.length>0){const j=P[0].object.userData.url;sessionStorage.setItem("cameraState",JSON.stringify({x:l.position.x,y:l.position.y,z:l.position.z})),i.push({path:`/detail/${j}`})}}function Ye(N){N.button===0&&(d=!0,h={x:N.clientX,y:N.clientY},r.value.style.cursor="grabbing")}function Ke(N){if(!d){me(N);return}const w=N.clientX-h.x,P=N.clientY-h.y;h={x:N.clientX,y:N.clientY},l.position.x=Math.max(R.x.min,Math.min(R.x.max,l.position.x-w*T)),l.position.y=Math.max(R.y.min,Math.min(R.y.max,l.position.y+P*T))}function Xe(){d&&(d=!1,r.value.style.cursor=ee?"pointer":"default")}function se(N){N.preventDefault(),l.position.z=Math.max(R.z.min,Math.min(R.z.max,l.position.z+N.deltaY*.01*A)),W()}function O(){!l||!c||(l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight))}function ne(){const N=r.value;if(!N)return;o=new jv,o.background=new et(1118481),l=new an(60,window.innerWidth/window.innerHeight,.1,1e3);const w=sessionStorage.getItem("cameraState");if(w)try{const{x:D,y:j,z:V}=JSON.parse(w);l.position.set(D,j,V)}catch{l.position.set(0,.1,m[0]+1.5)}else l.position.set(0,.1,m[0]+1.5);c=new jE({antialias:!0,alpha:!0}),c.setClearColor(1118481,1),c.outputEncoding=void 0,c.setSize(window.innerWidth,window.innerHeight),N.appendChild(c.domElement);const P=new ux(16777215,2);o.add(P)}function ae(){!c||!o||!l||(_=requestAnimationFrame(ae),c.render(o,l))}const le=()=>{sessionStorage.removeItem("cameraState")};let Re=!0;Eh(()=>{Re||B()}),bh(()=>{Re=!1,q()});const C=Tt(!1);function g(){C.value=!0,ne(),requestAnimationFrame(ae);const N=new L;te(N),window.addEventListener("mousedown",Ye),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),window.addEventListener("wheel",se,{passive:!1}),window.addEventListener("resize",O),window.addEventListener("click",Ne),window.addEventListener("beforeunload",le)}return wr(()=>{}),Cr(()=>{_&&cancelAnimationFrame(_),c&&c.dispose(),u.forEach(w=>{w.geometry&&w.geometry.dispose(),w.material&&(w.material.uniforms&&w.material.uniforms.texture1.value&&w.material.uniforms.texture1.value.dispose(),w.material.dispose())}),(o?.children?.filter(w=>w.type==="LineSegments")||[]).forEach(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),window.removeEventListener("mousedown",Ye),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),window.removeEventListener("wheel",se),window.removeEventListener("resize",O),window.removeEventListener("click",Ne),window.removeEventListener("beforeunload",le)}),(N,w)=>(Rn(),Es(Wt,null,[st("div",{class:"video-container",ref_key:"videoContainer",ref:s,style:{display:"none"}},[st("video",{src:t.value,autoplay:"",muted:"",loop:""},null,8,ZE)],512),st("div",{ref_key:"threeContainer",ref:r,class:"three-container",style:{display:"none"}},null,512),ds(st("div",$E,[st("img",{src:D0,alt:"",srcset:"",onLoad:g},null,32),st("div",JE,[a.value<100?(Rn(),Es("span",QE,tr(a.value+"%"),1)):(Rn(),Es("span",{key:1,class:"unfold-text",onClick:w[0]||(w[0]=P=>{Ae.value=!0,B()})},"UNFOLD"))])],512),[[hs,C.value&&!Ae.value]])],64))}}),n1=Gp(t1,[["__scopeId","data-v-9076bc11"]]),i1="/Intellectuals-Artificial-Criminals/assets/bg-DiBbnZBS.png",s1="/Intellectuals-Artificial-Criminals/assets/bg-ByPUWdPk.png",r1="/Intellectuals-Artificial-Criminals/assets/bg-CuyevdZS.png",a1="/Intellectuals-Artificial-Criminals/assets/bg-CRMNdl4_.png",o1="/Intellectuals-Artificial-Criminals/assets/bg-CLdOmBO7.png",l1="/Intellectuals-Artificial-Criminals/assets/bg-xvTg2c41.png",c1="/Intellectuals-Artificial-Criminals/assets/bg-DJcfE9wX.png",u1="/Intellectuals-Artificial-Criminals/assets/bg-BtpcxYWu.png",f1="/Intellectuals-Artificial-Criminals/assets/bg-BiPUD9Ij.png",d1="/Intellectuals-Artificial-Criminals/assets/bg-Cq4_pmJP.png",h1="/Intellectuals-Artificial-Criminals/assets/bg-DeKnG647.png",p1="/Intellectuals-Artificial-Criminals/assets/bg-C7nkN8Qu.png",m1="/Intellectuals-Artificial-Criminals/assets/bg-D9tj_Tzb.png",g1="/Intellectuals-Artificial-Criminals/assets/bg-Bv1KCed0.png",_1="/Intellectuals-Artificial-Criminals/assets/bg-Bk3I5BVa.png",v1="/Intellectuals-Artificial-Criminals/assets/bg-CpAP5bqW.png",x1="/Intellectuals-Artificial-Criminals/assets/bg-CNK2s0bx.png",S1="/Intellectuals-Artificial-Criminals/assets/bg-Dz1oS1eA.png",M1="/Intellectuals-Artificial-Criminals/assets/bg-CC9SqGaw.png",y1="/Intellectuals-Artificial-Criminals/assets/bg-CGAslaDo.png",E1="/Intellectuals-Artificial-Criminals/assets/bg-EWl2rd8g.png",b1="/Intellectuals-Artificial-Criminals/assets/bg-B_V-Uc7b.png",A1="/Intellectuals-Artificial-Criminals/assets/bg-DGt3nX07.png",T1="/Intellectuals-Artificial-Criminals/assets/bg-BWj7D3eH.png",w1="/Intellectuals-Artificial-Criminals/assets/bg-Cb6lx4GF.png",C1="/Intellectuals-Artificial-Criminals/assets/bg-DNSU5FVq.png",R1="/Intellectuals-Artificial-Criminals/assets/bg-BTbn9Mgc.png",P1="/Intellectuals-Artificial-Criminals/assets/bg-3Z5oQXI5.png",L1="/Intellectuals-Artificial-Criminals/assets/bg-BaD0i2Ub.png",I1="/Intellectuals-Artificial-Criminals/assets/bg-CrXuJkjh.png",D1="/Intellectuals-Artificial-Criminals/assets/text-BSjJVeuU.png",U1="/Intellectuals-Artificial-Criminals/assets/text-0nRa29jS.png",N1="/Intellectuals-Artificial-Criminals/assets/text-CS0hhbFb.png",F1="/Intellectuals-Artificial-Criminals/assets/text-C8vne_Js.png",O1="/Intellectuals-Artificial-Criminals/assets/text-CquzptCT.png",B1="/Intellectuals-Artificial-Criminals/assets/text-Cg097cjj.png",z1="/Intellectuals-Artificial-Criminals/assets/text-DMPBHeR-.png",H1="/Intellectuals-Artificial-Criminals/assets/text-BEjTxmNa.png",k1="/Intellectuals-Artificial-Criminals/assets/text-CHK-FJtN.png",V1="/Intellectuals-Artificial-Criminals/assets/text-BSy71pki.png",G1="/Intellectuals-Artificial-Criminals/assets/text-CkIxWVvh.png",W1="/Intellectuals-Artificial-Criminals/assets/text-DamsjQGe.png",X1="/Intellectuals-Artificial-Criminals/assets/text-Bxi6Cclo.png",q1="/Intellectuals-Artificial-Criminals/assets/text-1GsYnedn.png",Y1="/Intellectuals-Artificial-Criminals/assets/text-C7LU_3CE.png",K1="/Intellectuals-Artificial-Criminals/assets/text-CLrHQE61.png",j1="/Intellectuals-Artificial-Criminals/assets/text-BeEdrpnT.png",Z1="/Intellectuals-Artificial-Criminals/assets/text-BXeRwwKT.png",$1="/Intellectuals-Artificial-Criminals/assets/text-BxuAohp7.png",J1="/Intellectuals-Artificial-Criminals/assets/text-CAMX2KVw.png",Q1="/Intellectuals-Artificial-Criminals/assets/text-BsFoa0Wt.png",eb="/Intellectuals-Artificial-Criminals/assets/text-B9NDlFcG.png",tb="/Intellectuals-Artificial-Criminals/assets/text-CICOh_UJ.png",nb="/Intellectuals-Artificial-Criminals/assets/text-GbH_DL-W.png",ib="/Intellectuals-Artificial-Criminals/assets/text-D1vway2M.png",sb="/Intellectuals-Artificial-Criminals/assets/text-Dq4zcl-D.png",rb="/Intellectuals-Artificial-Criminals/assets/text-BEbziuOx.png",ab="/Intellectuals-Artificial-Criminals/assets/text-CbltBLQX.png",ob="/Intellectuals-Artificial-Criminals/assets/text-1VXUVxNI.png",lb="/Intellectuals-Artificial-Criminals/assets/text-DGkEBeUs.png",cb="/Intellectuals-Artificial-Criminals/assets/enlarge-CSD6KcDQ.png",ub="/Intellectuals-Artificial-Criminals/assets/enlarge-BsPQbJDF.png",fb="/Intellectuals-Artificial-Criminals/assets/enlarge-CLhSp_l9.png",db="/Intellectuals-Artificial-Criminals/assets/enlarge-BMurCXoN.png",hb="/Intellectuals-Artificial-Criminals/assets/enlarge-B0bDiTd-.png",pb="/Intellectuals-Artificial-Criminals/assets/enlarge-DMsHcEtz.png",mb="/Intellectuals-Artificial-Criminals/assets/enlarge-B5l-9oQj.png",gb="/Intellectuals-Artificial-Criminals/assets/enlarge-1JrXRbj-.png",_b="/Intellectuals-Artificial-Criminals/assets/enlarge-DaC_gtOc.png",vb="/Intellectuals-Artificial-Criminals/assets/enlarge-BsQQgiOk.png",xb="/Intellectuals-Artificial-Criminals/assets/enlarge-fL8LzinN.png",Sb="/Intellectuals-Artificial-Criminals/assets/enlarge-30YN1zVL.png",Mb="/Intellectuals-Artificial-Criminals/assets/enlarge-CIe_lLQP.png",yb="/Intellectuals-Artificial-Criminals/assets/enlarge-BfEtsxOZ.png",Eb="/Intellectuals-Artificial-Criminals/assets/enlarge-CLzDwCpd.png",bb="/Intellectuals-Artificial-Criminals/assets/enlarge-D8uUQUA3.png",Ab="/Intellectuals-Artificial-Criminals/assets/enlarge-Dp5-9cKY.png",Tb="/Intellectuals-Artificial-Criminals/assets/enlarge-akkndy-O.png",wb="/Intellectuals-Artificial-Criminals/assets/enlarge-DxuONywL.png",Cb="/Intellectuals-Artificial-Criminals/assets/enlarge-C6dd3WYx.png",Rb="/Intellectuals-Artificial-Criminals/assets/enlarge-DK-yT6yd.png",Pb="/Intellectuals-Artificial-Criminals/assets/enlarge-BIEX0-Ud.png",Lb="/Intellectuals-Artificial-Criminals/assets/enlarge-BjbhSNQH.png",Ib="/Intellectuals-Artificial-Criminals/assets/enlarge-D_-QMuyG.png",Db="/Intellectuals-Artificial-Criminals/assets/enlarge-NWO2RnKL.png",Ub="/Intellectuals-Artificial-Criminals/assets/enlarge-lvoqWaK_.png",Nb="/Intellectuals-Artificial-Criminals/assets/enlarge-DbREQIin.png",Fb="/Intellectuals-Artificial-Criminals/assets/enlarge-4Icmoj8N.png",Ob="/Intellectuals-Artificial-Criminals/assets/enlarge-BuqkthQh.png",Bb="/Intellectuals-Artificial-Criminals/assets/enlarge-ByxnEF-o.png",zb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAAD4CAMAAAC33vGvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAJ8oKJ0rK5wqKp0qKpwrK5coKJwqKpwrK58gIJwpKZwqKp0qKpsoKJspKZwoKJ8wMJwpKZwqKpwpKZolJZ0qKpwrK5wrK50oKJwrK50qKpwsLJ0pKZwqKpwpKQAAAJwqKk4VFZIoKEQSEoklJQoCAhQFBWsdHXUgIAoDAxMFBScLCzENDTsPDycKCh0ICFgYGIglJWIaGh0HB2EbG3UfHzEODpInJ2scHDsQEEQTE1gXF38jI6D3eM4AAAAfdFJOUwAgj+9/7yDfXxC/r99AcF8Qb89QMGCfv2DPn2+Pn6+vNqU6AAACt0lEQVR42u3Y2VITURSG0U4whJAgCAg4b5JAEJDJeXj/57JJlVWpUiC/XnizvkdYtfvsc7opVfVG68Pui41Bs1zAFtreW1tdyuyNjk7PziffT+Zu6w+zMVvobDJ3G+4wi0bufNaq9deYRR2/m96vxuxP3a/G7G61vVVmWZPxXaPG7O5z7aaqO2CWj9oqs3DUptXfZZb1tr2tbTILO6x6zOyf0Zgtg7bJLEfbZRajrawyC5tVf8AsvHJMq8ssvdyOF/YAsyWfUQtHGrMlO6khs/zr3GAWXzj6zNKmv95QzJburFYGzOI18IRZPGh9ZvmJtsEsXp3rzNJn57gGzP5qCzBL+jT/OJnlHyez8ONcYxY2qVfMwi5vr7XMsm4PNGZZP9qnALOsm/aGxixdAl1mYV/rNbN4cW4zCztuLxvMwtdTrTBLq2LGjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYMRMzZsyYMRMzZsyYMRMzZsyYMRMzZsyYMRMzZsyYMRMzZsyYMWPGjBkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYiRkzZsyYMWPGjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZszEjBkzZsyYiRkzZsyYiRkzZsyYiRmz/27WqyMOodmoTjmEZsM65xCadWvCITR7Wl84hGZb9dkSCM2a/boAEZo9qo8gQrOtnttGatYO2oxEaNYOmhMtNGsH7drqDM2aZ3XFIjTr9OoQRmbWPgagpWbtkQYtNbtFu7IIMrNmp1fX74lEZk1nVPXBiyAym3+fNfMHMjJrOs9btfHs28Wlo21Zs1btYLv0QM1vdQ5e7o/A3NNPTq/EmwuvHTEAAAAASUVORK5CYII=",Hb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURQAAAJ0qKpwpKZ8gIJwpKZcoKJwrK5wrK5spKZ8oKJ0qKpwqKpsqKp8wMJwsLJwrK5wqKpwqKp0qKp0rK5wqKkc4xBUAAAAUdFJOUwB/bxC/IL/vcCDf74AQb5/fn5+fSYop9gAAAIBJREFUKM91klkSxCAIBRGNJOrs3P+sY9ai4qM/adHyAdFObLmoSnpOZFmyXryMmkUNdT7rTW+047wObD2LjKKu7/wUkHqDQiIxFoEyFokEizepgy8Krlf/8YAF0wOLngm86+OEKJMTO+8DCWNQcLTCZhm+5ge3PeHc20oK8Sj8AY7BImvIxQ1oAAAAAElFTkSuQmCC",kb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXBAMAAADn+kIjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURQAAAM84OM9AQM84OMw6Os05Oc06Oss6Osw4OM04OM46Osw5Ocs4OMo1Ncw5Of3q20UAAAAOdFJOUwBfECDP35+Av38fr0AwrsqN0AAAAElJREFUGNNjYAABzZkz5zLAAJPfu3cJcJ7Ku3fPaCsFA69AUki8fSg8UxQecxwyDyT5RBAChBjAkgVwK0CSzxE8qkladHT0gGgAbCloT/CVUeEAAAAASUVORK5CYII=";function Bs(n,e){e===void 0&&(e={});var t=e.insertAt;if(n&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}}Bs(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}");Bs('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');Bs(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}");Bs(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}");Bs(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}");Bs(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");const rn="vel",hn=Ns({name:"SvgIcon",props:{type:{type:String,default:""}},setup:n=>()=>Me("svg",{class:`${rn}-icon icon`,"aria-hidden":"true"},[Me("use",{"xlink:href":`#icon-${n.type}`},null)])}),so=typeof window<"u",ms=()=>{};let Wp=!1;if(so)try{const n={};Object.defineProperty(n,"passive",{get(){Wp=!0}}),window.addEventListener("test-passive",ms,n)}catch{}const Cd=function(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];so&&n.addEventListener(e,t,!!Wp&&{capture:!1,passive:i})},Rd=(n,e,t)=>{so&&n.removeEventListener(e,t)},Vb=n=>{n.preventDefault()},Gb=Object.prototype.toString,Wc=n=>e=>Gb.call(e).slice(8,-1)===n,Wb=n=>!!n&&Wc("Object")(n),Pd=n=>!!n&&Wc("String")(n);function Xb(n){return n!=null}const qb=Ns({name:"Toolbar",props:{zoomIn:{type:Function,default:ms},zoomOut:{type:Function,default:ms},rotateLeft:{type:Function,default:ms},rotateRight:{type:Function,default:ms},resize:{type:Function,default:ms},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1}},setup:n=>()=>Me("div",{class:`${rn}-toolbar`},[!n.zoomDisabled&&Me(Wt,null,[Me("div",{role:"button","aria-label":"zoom in button",class:"toolbar-btn toolbar-btn__zoomin",onClick:n.zoomIn},[Me(hn,{type:"zoomin"},null)]),Me("div",{role:"button","aria-label":"zoom out button",class:"toolbar-btn toolbar-btn__zoomout",onClick:n.zoomOut},[Me(hn,{type:"zoomout"},null)])]),Me("div",{role:"button","aria-label":"resize image button",class:"toolbar-btn toolbar-btn__resize",onClick:n.resize},[Me(hn,{type:"resize"},null)]),!n.rotateDisabled&&Me(Wt,null,[Me("div",{role:"button","aria-label":"image rotate left button",class:"toolbar-btn toolbar-btn__rotate",onClick:n.rotateLeft},[Me(hn,{type:"rotate-left"},null)]),Me("div",{role:"button","aria-label":"image rotate right button",class:"toolbar-btn toolbar-btn__rotate",onClick:n.rotateRight},[Me(hn,{type:"rotate-right"},null)])])])}),Yb=()=>Me("div",{class:`${rn}-loading`},[Me("div",{class:"ring"},null)]),Kb=()=>Me("div",{class:`${rn}-on-error`},[Me("div",{class:"ring"},null),Me(hn,{type:"img-broken"},null)]),jb=(n,e)=>{let{slots:t}=e;return Me("div",{class:`${rn}-img-title`},[t.default?t.default():""])},Zb=Ns({name:"DefaultIcons",setup:()=>()=>Me("svg",{"aria-hidden":!0,style:"position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;"},[Me("symbol",{id:"icon-rotate-right",viewBox:"0 0 1024 1024"},[Me("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z",fill:""},null)]),Me("symbol",{id:"icon-rotate-left",viewBox:"0 0 1024 1024"},[Me("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z",fill:""},null)]),Me("symbol",{id:"icon-resize",viewBox:"0 0 1024 1024"},[Me("path",{d:"M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"},null)]),Me("symbol",{id:"icon-img-broken",viewBox:"0 0 1024 1024"},[Me("path",{d:"M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"},null)]),Me("symbol",{id:"icon-prev",viewBox:"0 0 1024 1024"},[Me("path",{d:"M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"},null)]),Me("symbol",{id:"icon-next",viewBox:"0 0 1024 1024"},[Me("path",{d:"M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"},null)]),Me("symbol",{id:"icon-zoomin",viewBox:"0 0 1024 1024"},[Me("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),Me("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null),Me("path",{d:"M367.488 238.144h127.104v390.72H367.488z"},null)]),Me("symbol",{id:"icon-close",viewBox:"0 0 1024 1024"},[Me("path",{d:"M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"},null)]),Me("symbol",{id:"icon-zoomout",viewBox:"0 0 1024 1024"},[Me("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),Me("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null)])])}),ur=so?window:global;let Ld=Date.now();function $b(n){const e=Date.now(),t=Math.max(0,16-(e-Ld)),i=setTimeout(n,t);return Ld=e+t,i}function sl(n){return(ur.requestAnimationFrame||$b).call(ur,n)}function Id(n){(ur.cancelAnimationFrame||ur.clearTimeout).call(ur,n)}function Dd(n,e){const t=n.clientX-e.clientX,i=n.clientY-e.clientY;return Math.sqrt(t*t+i*i)}function rl(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!ws(n)}var al=Ns({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},zoomScale:{type:Number,default:.12},maxZoom:{type:Number,default:3},minZoom:{type:Number,default:.1},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1},pinchDisabled:{type:Boolean,default:!1},dblclickDisabled:{type:Boolean,default:!1}},emits:{hide:()=>!0,"on-error":n=>!0,"on-prev":(n,e)=>!0,"on-next":(n,e)=>!0,"on-prev-click":(n,e)=>!0,"on-next-click":(n,e)=>!0,"on-index-change":(n,e)=>!0,"on-rotate":n=>!0},setup(n,e){let{emit:t,slots:i}=e;const{imgRef:s,imgState:r,setImgSize:a}=(()=>{const w=Tt(),P=Wi({width:0,height:0,maxScale:1});return{imgRef:w,imgState:P,setImgSize:()=>{if(w.value){const{width:D,height:j,naturalWidth:V}=w.value;P.maxScale=V/D,P.width=D,P.height=j}}}})(),o=Tt(n.index),l=Tt(""),c=Wi({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),u=Wi({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),f=yt((()=>{return w=n.imgs,Wc("Array")(w)?n.imgs.map((P=>typeof P=="string"?{src:P}:(function(D){return Wb(D)&&Pd(D.src)})(P)?P:void 0)).filter(Xb):Pd(n.imgs)?[{src:n.imgs}]:[];var w})),d=yt((()=>f.value[o.value])),h=yt((()=>f.value[o.value]?.src)),_=yt((()=>f.value[o.value]?.title)),x=yt((()=>f.value[o.value]?.alt)),m=yt((()=>({cursor:u.loadError?"default":n.moveDisabled?u.dragging?"grabbing":"grab":"move",top:`calc(50% + ${c.top}px)`,left:`calc(50% + ${c.left}px)`,transition:u.dragging||u.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${c.scale}) rotate(${c.rotateDeg}deg)`}))),p=()=>{t("hide")},T=()=>{c.scale=1,c.lastScale=1,c.rotateDeg=0,c.top=0,c.left=0,u.loadError=!1,u.dragging=!1,u.loading=!0},A=(w,P)=>{const D=o.value;T(),o.value=w,f.value[o.value]===f.value[w]&&Xi((()=>{u.loading=!1})),n.visible&&D!==w&&(P&&P(D,w),t("on-index-change",D,w))},S=()=>{const w=o.value,P=n.loop?(w+1)%f.value.length:w+1;!n.loop&&P>f.value.length-1||A(P,((D,j)=>{t("on-next",D,j),t("on-next-click",D,j)}))},I=()=>{const w=o.value;let P=w-1;if(w===0){if(!n.loop)return;P=f.value.length-1}A(P,((D,j)=>{t("on-prev",D,j),t("on-prev-click",D,j)}))},R=w=>{Math.abs(1-w)<.05?w=1:Math.abs(r.maxScale-w)<.05&&(w=r.maxScale),c.lastScale=c.scale,c.scale=w},L=()=>{const w=c.scale+n.zoomScale;w<r.maxScale*n.maxZoom&&R(w)},z=()=>{const w=c.scale-n.zoomScale;w>n.minZoom&&R(w)},y=()=>{const w=c.rotateDeg%360;t("on-rotate",Math.abs(w<0?w+360:w))},E=()=>{c.rotateDeg-=90,y()},U=()=>{c.rotateDeg+=90,y()},B=()=>{c.scale=1,c.top=0,c.left=0},q=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return!n.moveDisabled&&w===0},{onMouseDown:te,onMouseMove:ee,onMouseUp:$}=((w,P,D)=>{let j,V=!1;return{onMouseDown:Y=>{w.initX=w.lastX=Y.clientX,w.initY=w.lastY=Y.clientY,P.dragging=!0,V=!1,Y.stopPropagation()},onMouseUp:Y=>{D(Y.button)&&Id(j),P.dragging=!1,V=!1},onMouseMove:Y=>{if(P.dragging)if(D(Y.button)){if(V)return;V=!0,j=sl((()=>{const{top:ie,left:fe,lastY:M,lastX:v}=w;w.top=ie-M+Y.clientY,w.left=fe-v+Y.clientX,w.lastX=Y.clientX,w.lastY=Y.clientY,V=!1}))}else w.lastX=Y.clientX,w.lastY=Y.clientY;Y.stopPropagation()}}})(c,u,q),{onTouchStart:oe,onTouchMove:W,onTouchEnd:me}=((w,P,D,j,V)=>{let Y,ie=!1;return{onTouchStart:fe=>{const{touches:M}=fe;M.length>1&&V()?(D.gesturing=!0,P.touches=M):(P.initX=P.lastX=M[0].clientX,P.initY=P.lastY=M[0].clientY,D.dragging=!0),fe.stopPropagation()},onTouchMove:fe=>{if(ie)return;const{touches:M}=fe,{lastX:v,lastY:F,left:X,top:re,scale:K}=P;if(!D.gesturing&&D.dragging){if(!M[0])return;const{clientX:_e,clientY:ue}=M[0];j()?Y=sl((()=>{P.lastX=_e,P.lastY=ue,P.top=re-F+ue,P.left=X-v+_e,ie=!1})):(P.lastX=_e,P.lastY=ue)}else D.gesturing&&P.touches.length>1&&M.length>1&&V()&&(Y=sl((()=>{const _e=(Dd(P.touches[0],P.touches[1])-Dd(M[0],M[1]))/w.width;P.touches=M;const ue=K-1.3*_e;ue>.5&&ue<1.5*w.maxScale&&(P.scale=ue),ie=!1})))},onTouchEnd:()=>{Id(Y),D.dragging=!1,D.gesturing=!1,ie=!1}}})(r,c,u,q,(()=>!n.pinchDisabled)),ve=()=>{n.dblclickDisabled||(c.scale!==r.maxScale?(c.lastScale=c.scale,c.scale=r.maxScale):c.scale=c.lastScale)},Ae=w=>{u.loadError||u.gesturing||u.loading||u.dragging||u.wheeling||!n.scrollDisabled||n.zoomDisabled||(u.wheeling=!0,setTimeout((()=>{u.wheeling=!1}),80),w.deltaY<0?L():z())},Ne=w=>{const P=w;n.visible&&(!n.escDisabled&&P.key==="Escape"&&n.visible&&p(),P.key==="ArrowLeft"&&(n.rtl?S():I()),P.key==="ArrowRight"&&(n.rtl?I():S()))},Ye=()=>{n.maskClosable&&p()},Ke=()=>{a()},Xe=()=>{u.loading=!1},se=w=>{u.loading=!1,u.loadError=!0,t("on-error",w)},O=()=>{n.visible&&a()};_i((()=>n.index),(w=>{w<0||w>=f.value.length||A(w)})),_i((()=>u.dragging),((w,P)=>{const D=!w&&P;if(!q()&&D){const j=c.lastX-c.initX,V=c.lastY-c.initY,Y=n.swipeTolerance;Math.abs(j)>Math.abs(V)&&(j<-1*Y?S():j>Y&&I())}})),_i((()=>n.visible),(w=>{if(w){T();const P=f.value.length;if(P===0)return o.value=0,u.loading=!1,void Xi((()=>u.loadError=!0));o.value=n.index>=P?P-1:n.index<0?0:n.index,n.scrollDisabled&&ne()}else n.scrollDisabled&&ae()}));const ne=()=>{document&&(l.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},ae=()=>{document&&(document.body.style.overflowY=l.value)};wr((()=>{Cd(document,"keydown",Ne),Cd(window,"resize",O)})),Cr((()=>{Rd(document,"keydown",Ne),Rd(window,"resize",O),n.scrollDisabled&&ae()}));const le=()=>u.loading?i.loading?i.loading({key:"loading"}):Me(Yb,{key:"img-loading"},null):u.loadError?i.onerror?i.onerror({key:"onerror"}):Me(Kb,{key:"img-on-error"},null):Me("div",{class:`${rn}-img-wrapper`,style:m.value,key:"img-wrapper"},[Me("img",{alt:x.value,ref:s,draggable:"false",class:`${rn}-img`,src:h.value,onMousedown:te,onMouseup:$,onMousemove:ee,onTouchstart:oe,onTouchmove:W,onTouchend:me,onLoad:Ke,onDblclick:ve,onDragstart:w=>{w.preventDefault()}},null)]),Re=()=>{if(i["prev-btn"])return i["prev-btn"]({prev:I});if(f.value.length<=1)return;const w=!n.loop&&o.value<=0;return Me("div",{role:"button","aria-label":"previous image button",class:"btn__prev "+(w?"disable":""),onClick:I},[n.rtl?Me(hn,{type:"next"},null):Me(hn,{type:"prev"},null)])},C=()=>{if(i["next-btn"])return i["next-btn"]({next:S});if(f.value.length<=1)return;const w=!n.loop&&o.value>=f.value.length-1;return Me("div",{role:"button","aria-label":"next image button",class:"btn__next "+(w?"disable":""),onClick:S},[n.rtl?Me(hn,{type:"prev"},null):Me(hn,{type:"next"},null)])},g=()=>{if(!(n.titleDisabled||u.loading||u.loadError))return i.title?i.title({currentImg:d.value}):_.value?Me(jb,null,{default:()=>[_.value]}):void 0},N=()=>{let w;if(n.visible)return Me("div",{onTouchmove:Vb,class:[`${rn}-modal`,n.rtl?"is-rtl":""],onClick:S_(Ye,["self"]),onWheel:Ae},[Me(Zb,null,null),Me(vo,{name:`${rn}-fade`,mode:"out-in"},rl(w=le())?w:{default:()=>[w]}),Me("img",{style:"display:none;",src:h.value,onError:se,onLoad:Xe},null),Me("div",{class:`${rn}-btns-wrapper`},[Re(),C(),g(),i["close-btn"]?i["close-btn"]({close:p}):Me("div",{role:"button","aria-label":"close image preview button",class:"btn__close",onClick:p},[Me(hn,{type:"close"},null)]),i.toolbar?i.toolbar({toolbarMethods:{zoomIn:L,zoomOut:z,rotate:E,rotateLeft:E,rotateRight:U,resize:B},zoomIn:L,zoomOut:z,rotate:E,rotateLeft:E,rotateRight:U,resize:B}):Me(qb,{zoomIn:L,zoomOut:z,resize:B,rotateLeft:E,rotateRight:U,rotateDisabled:n.rotateDisabled,zoomDisabled:n.zoomDisabled},null)])])};return()=>{let w;if(n.teleport){let P;return Me(Vm,{to:n.teleport},{default:()=>[Me(vo,{name:`${rn}-fade`},rl(P=N())?P:{default:()=>[P]})]})}return Me(vo,{name:`${rn}-fade`},rl(w=N())?w:{default:()=>[w]})}}});const Jb=Object.assign(al,{install:n=>{n.component(al.name,al)}}),Qb={key:0,class:"detail-container"},eA=["src"],tA={class:"bg-ele"},nA=["src"],iA={class:"chat-list"},sA={class:"chat-list-title"},rA={class:"chat-list-content"},aA={class:"chat-box"},oA={class:"chat-bg"},lA={class:"chat-content"},cA=["src"],uA=["src"],fA={name:"DetailPage"},dA=Object.assign(fA,{props:{id:String},setup(n){const e=n,t=dp(),i=Tt(!0),s=()=>{t.currentRoute.value.name==="DetailPage"&&(window.history.replaceState({},"","/"),Xi(()=>{t.back()})),t.replace({name:"HomePage"})},r=Tt(!1),a=Tt(!1),o=Tt(!1),l=()=>new URL(Object.assign({"../assets/images/detail/1/bg.png":i1,"../assets/images/detail/10/bg.png":s1,"../assets/images/detail/11/bg.png":r1,"../assets/images/detail/12/bg.png":a1,"../assets/images/detail/13/bg.png":o1,"../assets/images/detail/14/bg.png":l1,"../assets/images/detail/15/bg.png":c1,"../assets/images/detail/16/bg.png":u1,"../assets/images/detail/17/bg.png":f1,"../assets/images/detail/18/bg.png":d1,"../assets/images/detail/19/bg.png":h1,"../assets/images/detail/2/bg.png":p1,"../assets/images/detail/20/bg.png":m1,"../assets/images/detail/21/bg.png":g1,"../assets/images/detail/22/bg.png":_1,"../assets/images/detail/23/bg.png":v1,"../assets/images/detail/24/bg.png":x1,"../assets/images/detail/25/bg.png":S1,"../assets/images/detail/26/bg.png":M1,"../assets/images/detail/27/bg.png":y1,"../assets/images/detail/28/bg.png":E1,"../assets/images/detail/29/bg.png":b1,"../assets/images/detail/3/bg.png":A1,"../assets/images/detail/30/bg.png":T1,"../assets/images/detail/4/bg.png":w1,"../assets/images/detail/5/bg.png":C1,"../assets/images/detail/6/bg.png":R1,"../assets/images/detail/7/bg.png":P1,"../assets/images/detail/8/bg.png":L1,"../assets/images/detail/9/bg.png":I1})[`../assets/images/detail/${e.id}/bg.png`],import.meta.url).href,c=()=>new URL(Object.assign({"../assets/images/detail/1/text.png":D1,"../assets/images/detail/10/text.png":U1,"../assets/images/detail/11/text.png":N1,"../assets/images/detail/12/text.png":F1,"../assets/images/detail/13/text.png":O1,"../assets/images/detail/14/text.png":B1,"../assets/images/detail/15/text.png":z1,"../assets/images/detail/16/text.png":H1,"../assets/images/detail/17/text.png":k1,"../assets/images/detail/18/text.png":V1,"../assets/images/detail/19/text.png":G1,"../assets/images/detail/2/text.png":W1,"../assets/images/detail/20/text.png":X1,"../assets/images/detail/21/text.png":q1,"../assets/images/detail/22/text.png":Y1,"../assets/images/detail/23/text.png":K1,"../assets/images/detail/24/text.png":j1,"../assets/images/detail/25/text.png":Z1,"../assets/images/detail/26/text.png":$1,"../assets/images/detail/27/text.png":J1,"../assets/images/detail/28/text.png":Q1,"../assets/images/detail/29/text.png":eb,"../assets/images/detail/3/text.png":tb,"../assets/images/detail/30/text.png":nb,"../assets/images/detail/4/text.png":ib,"../assets/images/detail/5/text.png":sb,"../assets/images/detail/6/text.png":rb,"../assets/images/detail/7/text.png":ab,"../assets/images/detail/8/text.png":ob,"../assets/images/detail/9/text.png":lb})[`../assets/images/detail/${e.id}/text.png`],import.meta.url).href,u=()=>new URL(Object.assign({"../assets/images/detail/1/enlarge.png":cb,"../assets/images/detail/10/enlarge.png":ub,"../assets/images/detail/11/enlarge.png":fb,"../assets/images/detail/12/enlarge.png":db,"../assets/images/detail/13/enlarge.png":hb,"../assets/images/detail/14/enlarge.png":pb,"../assets/images/detail/15/enlarge.png":mb,"../assets/images/detail/16/enlarge.png":gb,"../assets/images/detail/17/enlarge.png":_b,"../assets/images/detail/18/enlarge.png":vb,"../assets/images/detail/19/enlarge.png":xb,"../assets/images/detail/2/enlarge.png":Sb,"../assets/images/detail/20/enlarge.png":Mb,"../assets/images/detail/21/enlarge.png":yb,"../assets/images/detail/22/enlarge.png":Eb,"../assets/images/detail/23/enlarge.png":bb,"../assets/images/detail/24/enlarge.png":Ab,"../assets/images/detail/25/enlarge.png":Tb,"../assets/images/detail/26/enlarge.png":wb,"../assets/images/detail/27/enlarge.png":Cb,"../assets/images/detail/28/enlarge.png":Rb,"../assets/images/detail/29/enlarge.png":Pb,"../assets/images/detail/3/enlarge.png":Lb,"../assets/images/detail/30/enlarge.png":Ib,"../assets/images/detail/4/enlarge.png":Db,"../assets/images/detail/5/enlarge.png":Ub,"../assets/images/detail/6/enlarge.png":Nb,"../assets/images/detail/7/enlarge.png":Fb,"../assets/images/detail/8/enlarge.png":Ob,"../assets/images/detail/9/enlarge.png":Bb})[`../assets/images/detail/${e.id}/enlarge.png`],import.meta.url).href,f=yt(()=>({position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundImage:`url(${u()})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:998})),d=()=>{r.value=!0},h=Tt(null),_=Tt(!1),x=()=>{_.value=!_.value,_.value&&Xi(()=>{h.value?.focus()})},m=Tt(!1),p=yt(()=>_.value?new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAhCAYAAAClWJfKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYkSURBVHgB7VpfTttIGJ8ZQ1UFpE1P0PBQKaStNpygyQkWToBTQqV9Ak4AnID2aSUom+wJgBMQTtBUKkmkPtR7gs1LESLxzP6+Sew69jhOQiig5idFIZ/H4/Fvvv8DYxPgr2w2U8lk0myGAfCkAURaN5Xa5py/wc88UypMYh3XatJ1zzZbrZppjuNczsbX86DM7XTO3n39WmcPHPT+biq1p6Q89d7v4/JyVXB+8rbROAuOjSWzAu1zLasC8gpsdNQ7Uq792Wo5QeHHly/PI/NwbpcvL/9h94CjbLYQlpkUgZRAcX6gFUipWrnZLB69elXgUp7rAZxXre/fd0qO06afwvSww2zWBpGfxiSSkJ8X4ttRLrfHHjC4EOfhj2mcFMLxLZHzAm0CV2rXH6AU84gkRMgkIoQQFYM5j75YxnaPlpe32SPH5pcvNbiw995vblknAQVzYIX7wfFzwR/wBav42o2dHaoOourYJb0bMIFCnPZiEQeHL17UHoNfDEO7OM7zSqk2fOUFE8Lum7qvYOChCvIy4EyPIzfhk0mOVoIAZZ7fEVLab1uti5B8nx4MczjHfZnwTWJu7gBfRfbIgPcp4KsChegJVJQVSPbgHvTfGFXDV8038+7Cgm0iBHCsq6sVA5EaJQQb8eTJCiZ0Ihehudi55+wXga+ZQqktk1bCLxTLASdrQqlebx9ns/uMfG0Uq8Pu1anH4uI6k5LSrox2IZyfdlz3IpwVhO+TqdQqxv6ueiao74U2OWSaiLynwbHXT58OjQGUO3t/KyF+I5eGj6MFnK9GYohSp/21ZhCUtCvTejwQ7gdRLTcaJTYCKvl8GrnjN+NDhUibUiO89DOYym5MsCNSSqaUhYIkSNtKCJIUiXeIVKQ4FSiKzcYBNgf3/hvLTT9VCoo0mTDFLRaIWh7gJwtx5m0CzYOXHHhBEOIwy7INgYo0Z3X4jKwtO52iF8S0Fi8snIyVssHXY8MKk5BpKcWD8YAiu56nv4mwiJ3NZtPnrWfmFJUN4NfXn9kYwE59MMmRtNsGcRKRhHQwiFElEps9kCabfL4QRECNTQBpWVuK3EcPzsbl5Q60vE3BRz+TrIMxn8x+OOImc2mXEnzlrUE+DgsTlkWmVBoWxCo9n7YVvczfI0A+22g0liwplyAIV1VpmoPm9j7GpQSue2OIPH9dUu6RDMH2Qz81PKV4EpojptzDBPCXS2wKiJmfgttSMMgc5nJ57O6nyATwr3iZtMEV1bHGlaBA++6bm/8GRsFvw2rW/PXkcpFYi3mGltalwDrDvz3MsftDNRyt3zUadRBfixAPIpVlfYYPs4PirlJRN3R9nWYiVNghAWe3QJi4UkyW0SMTGbzhWobdJdBpMoqRjqjIUJ4uo7QLyigY8cXFvO5IeekRegMudbai+CntQk2mzs0MWT7Kwfw45SDlanN3vAk6VUGzgUjjpLEkVCrptp9HJjOZC2DNz//BqBYfEfPmlh3dP5VApvNLKXfZA4V2Lsgna6aL4+RmOtqa05apNDrInHl8E4aeUcXztyk/jIvYdw1NpnaoZh+WGbWV1qXOigkxGzUu0KFaN4ipGb1EEZ0qNcpzqWph9wQ/7HHXNXa9qZWWRCg1k2O0xim3WtPqpkcCC6qjUjgjoNRITeC3p9GQ8cncaLWqsREWhCJlqYTb/RQMjiEX5gYH8xLdqcBQh6NZG5F1b24SLcnkBlBy3rqZPZBnWq5b6h9XRKMfcjw80EbC+6N0k5INiaP1KWqlsVzEeg6QQegzJ+/gixmqpDDgMhz2o0zsyeBv8W7UHaIKqL7RbO6wMTGQ3ZLvlEoVvU567GKSzUgfrLHpomqQ6TMnqmhAJFU9iUQS4lwao/dC6anMuWoiImdAVIVAQ1cmjYj9Wrk4rBc5Cfo18SiZgZO09mEu7TYwnk6ShlLjILb5YAL6e9Syo+bAXTRIqAGNTV7jZg3110DNB23GCcAxc5GaLElWOA4S/wmBQA0IONfnpP4DJo4OMw7jHX51dXHnHaYA+udO6/5aaB34jNN7DeLv16/fMNdN6+4Zjndlt+vcZ4o1wwwzPFhwpBUVNsNUQEm7zWaYCubClcAMk+N/PHoiPV15I+sAAAAASUVORK5CYII=",import.meta.url).href:m.value?new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAbCAYAAAAETGM8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWdSURBVHgB7VldVuM2GP1kMrRvzaxgwlvL9IesYGw20LCCCSsAVgCsALoC0hVM2MBEWcGEFuhj3RU0r52C1XtlO3Vk2YkhGYbT3nNyEsuSIl19/xJpiA9h2MGnLf9jBlX3kmRtBsGhMuaNEdlBk0vexBij8e7yO621b47rMOzjT14V29j/W60n8pmD+3+h1An2OMz3dx1Fg5Yx777W+jLv5yXxN0ibUeoCmw1leUwCY/a+0TouNt5G0cidB4vqg8Sf5QnwaxiGbptPAOzhK3WGn20Ikd7WOuLYQKmR7aDU4GOSHHW1nga+wYlSHxoSSOxg3O83YXginzFIgvvx9cP+Y8k0DwIVksANpY5nHZJESKCdszjwZnf3BOxfSFltlwf+CAdxKM8clE5I4Hn+DLLfFQQr/ihymr9r5T9+CcMe9Oy4alLaPnxNoP+WfZ6OqpBWqgGI1M/B7rmgKfsbWsV93omMN0T6kgrVv4JlzADEdcCZ7WdJpAFtYePGP2+Mjv3XWo+d9lN66s1UHTruIIg47Ukkzwz3EIyNVBurAWeTqzCFy/5+AZKMhwih2BrT3R6Nxr65YBPse0ntxxwoqbe7u6/kPwAridD3A58UgqAoN55V4HuI9an39JKkh1OrHEsN+ELkrUnVp2OCYBokyRCvxq6Xd8fh4Hv4+YOi98zGmiSJE4z9Xuthsa8ssPHUqPw3pOorzKEhYjGfYZp6pfEIeQzNmlIcN1Fzbnu+4wAqvC9LwMaT8My+P8Mi2r4QB18vVertShsEKfG9Mfu+0IPODxMcSA0xHH9nzBHJRLRwgc32pQGwrs72+/d/VHGThzyz59swPIDqnXsWElapsQ92HmdjDBOwiH4pXFJqCCJ6C6acguwod05Wauc95EIgbu0n7P8AElWSKPAyys0c1nKu0nna2fMR1mZ5a0ENQrSUJvrLmCtpAJzMT752BNv9UuNiAol20TnZzKGawFg8Nj2hcCilfftbBIw4KPiJGIQdQQummOuEDSCU2mBJDCCaPrWYLrKFK4BdECWeqis1zolhB/odlN5DOmC3X74ejbbwvYVNu1lQG53CbO7Y9x8ZYrcPhOIoX5fJiEOGQkGZgsAh/UU+WPnSMg7kwmQFqJifTmurW3Ae14y5kCm5/Wg/IZFtj8mZYI3dYkNmm/90JhjCtu/ljzdRVBJLzFPp/eh0iut0n4mWPAXgtNyF0PaBcO0STgIRu121Umc0A9vcab9E38RtVGpHHgF3nV1P1NDCCU89NqMja4RhCOFrZ1jhhER0Vq6XtskBwiLm+ZKFOSQrSStNLtZetmvBC8XGE8tRvZqkbbRbd2smPy8CVJTlqrB+EnF6Vz6DgLYf8bU0iSydBWXbx/ErcVBZfHjc3M+uH8FGhWqpBrGVrT/6wg9jVlKAsGpbVRzBf8AMDBBlHKo0g4jlEyNgeqU8RDJGWraklQRB39deZfuaAgH7W0/zhB4enrcLs7PPOJVZhjwBbAECKZK3ypyVtGqJrJGSeFXVa+NxGJC+fddTZnlyRxrisYUSSyJyzIGqVusz2KMLt6zOZ7arirJRHqCuCCXnYDxtvA+SxYg9bY8qIs/iRKR5+5tpsFv2Zgx4YSMRqNrkfpYOVadTkxXfocTiSBjWcwZbbO908gulrDBRD6Um6Dc3Fw78EDFqL6vcTJitSAPMrgeoGiZNZWq9qVmsLrRVe7JK4FLI05re6SADYZbiSwt9uE+SS18798U0syLWrMXcHQvjwqoi6zLIctmoW1MLfAiynHUZT08nGdd1qDNdD0Xpto8EMG+uKgr4wBI5CwmsdKyjcME5rXQjlJGaNWRFgVgWACW+iCV+WVEMqxZ1uE4vY+i9doqqHPDiPr31Gn+Cis8M9l4nrYZ38nXQzjWpfRYBW/gGB9DOihxMO+OmodI/6430ygFCF0UAAAAASUVORK5CYII=",import.meta.url).href:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAbCAYAAAAETGM8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX1SURBVHgB7VlfTttIGJ8Zh6oKSJuegPBQKaStNpygyQkWTkBSQqV9Ak4AnID2aSUom+wJgBMQTtBUKkmkPtR7gs1LESLxzP6+Sex17HEch0SAtj8pSvJ5Zjz++fs/jCXEH7lctpbNZthPeODjLhJZ/XR6l3P+Fn8LTKkgeU1ca0jHudjudBqmNU7z+TK+lv0yp9e7eP/tW5M9ctDzO+n0gZLy3H2+T6urdcH52btW68IdZySxBm1zLKsG0opscjR7Um783unYfuGnV68uQ+twXq5eX//FHgAnuVwxKDMpAL18xfmRVhylGtV2u3Ty+nWRS3mpB3Bet3782KvYdlcEJx/ncmUQ+DkhgYTCghDfT/L5A/aIwYW4DH5M46QQtmd5nBeJfK7UvjdAKUYE0s8REokAIUTNYLaTb5Kx/ZPV1V32xLH99WsDruqD+59b1plPsWxY3aF7LeX+gK2v42s/clWoNAhq4q1o9qHqxShtxc2Pjl++bDwFvxeEdmWcF5RSXfjCKyZEeWjSnmKBhzqIy4IzPU6TSA5U4sGVeV1bSFl+1+lcBeSHdEOo/SXmZYOTRCp1hK8Se2LA8xTxVYMiDAQqzAokB3AD+jdGNfSv/uJi2UQEYFs3N2sGAjUqCCLi2bM1LGSHLkJT8aaW2f8AWhOFUjsmLYTdl6pD5xmFSrPZPc3lDhn50jDWx83VKcTS0iaTktKnrHYVnJ/3HOcqGOWD82Q6vY6xv6qBqem50B6bTBCR9Nw/9vb587E+nnJf97cS4hdyXfjYWsD5eihGKHU+3GsWwabJR8L2KOrVVqvCJkCtUMgg9/tuvJkQGVOKg4d9AZPYjwhiREbFlHpQ8ANZOzHBjyLrHpGJVKUGBSmzJMBLwdy/I7kZpjzuXw6T22G+KOQCfrAYZcYm0Dp4uJEHAxE2s6yyIQCRpqyPX5F1Za9XcoOT1trFxbNEqRd8OV5UcRoSLaW4399TpNbrDF8eLGBvu93WvKXId5nW4be3X1gC4M18NMmRbJcN4jgCCRl/cKLKITIbIM01+XQh6MEbbApIy9pR5CYGsLeur/eg1V0KKvqeZA2MaRIFC2jPEN1KjC+8N8iHYUPCsshkKuOCU23gs3bCl/kHBL4XW63WiiXlCgTBKihDa9Da7se4Fd91dwyR5u1LygOSIYh+HKZ45xQvvPnGsgwT4Q9X2AwQsT4FrRV/8DjO5wtIFT6HFoD/xENkDC6niT2u+QXaN9/d/TMyCn4ZVrLh7SefD8VQrBPZQ6AXWPHtM/ifkGIPg3ow+r5vtZogvBEiHAQqy/oCH1X2i/tKhd3N7W2GiUAli8SZ3QNBwiqGrCGFTZvMNsvmCXR+jGKkFSo0lGeqKMH8MgoyfGmpoDtEbpqD2t2hTlMYc2/bpXRuZcjKUbYVkpRtlGul5ky+TjnQBCCyOGkoCZWKmzZ/EpnJLABrYeE3RrXyhFgwt85o/kwClM4PpdxnjxAC+WDDdCFJbqWjpzn9mEkDgsyWRzdH6B513H+X8ruoCDxPCO0ozT4qO2lLq0+dDhMiXlBSoGO0aRBTE3iFIjRVVpSnUpXBHgA6lHHHMXaZqaUVRyQ1cSO0xK52OrPqXocCBqqZSjDCU4qjpvDL922UaBK3Op16ZMQEkUg9asG2Ojn5U8iFufHA3AR1JjDUyWiShmT9u7tYyzGZO0rDezWRvTzRcpzK8FggHM2Qo+FGZSSq/5VYUrIxcbE5Qy00lnXYzxEyAn2m4x4oMUNVE4Qa+NDsiAz+FM9G3RqqWJpb7fYeSwAvMyXfKJUquZ3rMZvIsvHQB1ZstqgbZPpMhyoQEEhVSiyBBET4i4hL1E6jZkXi5HwkvaeqARq5Nm2EG9aypXG9wGkwrFknifR23N7Hua5pETrtI42kgj6yKWAC+mvUOqOifR6NC2r84uVucLNGenugpgAiuc1igOPaEjU/4qxuUvC4AdQYgONcJjUfMWV0dHGIbfObm6u5d3x8GJ7rbHp7oX3gk6T36cefb968ZY6T0d0sHJPKft9Omir9C3jUGJT5X7aEAAAAAElFTkSuQmCC",import.meta.url).href);function T(){const L="abcdefghijklmnopqrstuvwxyz0123456789";let z="";for(let y=0;y<6;y++)z+=L.charAt(Math.floor(Math.random()*L.length));return"h1*"+z}const A=T(),S=Tt([]),I=()=>{const R=h.value.value.trim();R&&S.value.push(R),h.value.value="",Xi(()=>{const L=document.querySelector(".chat-list");L&&(L.scrollTop=L.scrollHeight)})};return(R,L)=>i.value?(Rn(),Es("div",Qb,[ds(st("div",{class:Xa(["text-ele cursor",{animate:a.value}]),onClick:d},[st("img",{src:c(),alt:"btn",onLoad:L[0]||(L[0]=()=>{o.value=!0,a.value=!0})},null,40,eA)],2),[[hs,o.value]]),st("div",tA,[st("img",{src:l(),alt:"detail-bg"},null,8,nA)]),st("div",iA,[(Rn(!0),Es(Wt,null,ig(S.value,(z,y)=>(Rn(),Es("div",{key:y,class:"chat-item"},[st("div",sA,tr(qn(A)),1),st("div",rA,tr(z),1)]))),128))]),st("div",aA,[ds(st("div",{class:"chat-title"},tr(qn(A)),513),[[hs,_.value]]),ds(st("div",oA,[...L[4]||(L[4]=[st("img",{src:zb,alt:"chat-bg"},null,-1)])],512),[[hs,_.value]]),ds(st("div",lA,[st("textarea",{ref_key:"chatTextarea",ref:h,placeholder:"",onKeyup:y_(I,["enter"])},null,544)],512),[[hs,_.value]]),st("div",{class:"chat-status cursor",onClick:x},[st("img",{src:p.value,alt:"chat-status",onMouseover:L[1]||(L[1]=z=>m.value=!0),onMouseleave:L[2]||(L[2]=z=>m.value=!1)},null,40,cA)]),L[5]||(L[5]=st("div",{class:"chat-dot"},[st("img",{src:Hb,alt:"chat-dot"})],-1))]),st("div",{class:"cursor back-btn",onClick:s},[...L[6]||(L[6]=[st("img",{src:kb,alt:"返回"},null,-1)])]),ds(st("div",{style:Wa(f.value)},null,4),[[hs,r.value]]),st("img",{src:u(),style:{display:"none"},alt:"preload"},null,8,uA),Me(qn(Jb),{visible:r.value,imgs:[c()],onHide:L[3]||(L[3]=z=>r.value=!1)},null,8,["visible","imgs"])])):Og("",!0)}}),hA=Gp(dA,[["__scopeId","data-v-c8e390b4"]]),pA=[{path:"/",name:"HomePage",component:n1},{path:"/detail/:id([^/]+)",name:"DetailPage",component:hA,props:!0}],mA=L0({history:a0("/Intellectuals-Artificial-Criminals/"),routes:pA});A_(C_).use(mA).mount("#app");
