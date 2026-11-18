var Om=Object.defineProperty;var Fm=(r,t,e)=>t in r?Om(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Et=(r,t,e)=>Fm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},Lu,Qe,Ae,jn=1e8,Me=1/jn,pc=Math.PI*2,Bm=pc/4,zm=0,md=Math.sqrt,km=Math.cos,Hm=Math.sin,Ze=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},zi=function(t){return typeof t=="number"},Du=function(t){return typeof t>"u"},yi=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Iu=function(){return typeof window<"u"},Ko=function(t){return Le(t)||Ze(t)},_d=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Vm=/random\([^)]+\)/g,Gm=/,\s*/g,yh=/(?:-?\.?\d|\.)+/gi,gd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vd=/[+-]=-?[.\d]+/,Wm=/[^,'"\[\]\s]+/gi,Xm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,di,mc,Uu,Gn={},$a={},xd,Sd=function(t){return($a=Os(t,Gn))&&Rn},Nu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Lo=function(t,e){return!e&&console.warn(t)},Md=function(t,e){return t&&(Gn[t]=e)&&$a&&($a[t]=e)||Gn},Do=function(){return 0},qm={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},Ym={suppressEvents:!0},Ou={},sr=[],_c={},yd,Nn={},wl={},Eh=30,Ia=[],Fu="",Bu=function(t){var e=t[0],n,i;if(yi(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ia.length;i--&&!Ia[i].targetTest(e););n=Ia[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Wd(t[i],n)))||t.splice(i,1);return t},zr=function(t){return t._gsap||Bu(Jn(t))[0]._gsap},Ed=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():Du(n)&&t.getAttribute&&t.getAttribute(e)||n},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},Re=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$m=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ka=function(){var t=sr.length,e=sr.slice(0),n,i;for(_c={},sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zu=function(t){return!!(t._initted||t._startAt||t.add)},Td=function(t,e,n,i){sr.length&&!Qe&&Ka(),t.render(e,n,!!(Qe&&e<0&&zu(t))),sr.length&&!Qe&&Ka()},bd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Wm).length<2?e:Ze(t)?t.trim():t},wd=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Km=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Os=function(t,e){for(var n in e)t[n]=e[n];return t},Th=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=yi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Za=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},_o=function(t){var e=t.parent||Ce,n=t.keyframes?Km(an(t.keyframes)):Wn;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Zm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ad=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},kr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gc=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(Da):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Jm=function r(t){return!t||t._ts&&r(t.parent)},bh=function(t){return t._repeat?Fs(t._tTime,t=t.duration()+t._rDelay)*t:0},Fs=function(t,e){var n=Math.floor(t=Re(t/e));return t&&n===t?n-1:n},ja=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},dl=function(t){return t._end=Re(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},pl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),dl(t),n._dirty||kr(n,t)),t},Rd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ja(t.rawTime(),e),(!e._dur||Vo(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),kr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},gi=function(t,e,n,i){return e.parent&&ur(e),e._start=Re((zi(n)?n:n||t!==Ce?Yn(t,n,e):t._time)+e._delay),e._end=Re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ad(t,e,"_first","_last",t._sort?"_start":0),vc(e)||(t._recent=e),i||Rd(t,e),t._ts<0&&pl(t,t._tTime),t},Cd=function(t,e){return(Gn.ScrollTrigger||Nu("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},Pd=function(t,e,n,i,s){if(Hu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yd!==Fn.frame)return sr.push(t),t._lazy=[s,i],1},Qm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},vc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},t_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Qm(t)&&!(!t._initted&&vc(t))||(t._ts<0||t._dp._ts<0)&&!vc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Vo(0,t._tDur,e),u=Fs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Fs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Qe||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&Pd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&gc(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ur(t,1),!n&&!Qe&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},e_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Bs=function(t,e,n,i){var s=t._repeat,o=Re(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Re(o*(s+1)+t._rDelay*s):o,a>0&&!i&&pl(t,t._tTime=t._tDur*a),t.parent&&dl(t),n||kr(t.parent,t),t},wh=function(t){return t instanceof Sn?kr(t):Bs(t,t._dur)},n_={_start:0,endTime:Do,totalDuration:Do},Yn=function r(t,e,n){var i=t.labels,s=t._recent||n_,o=t.duration()>=jn?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},go=function(t,e,n){var i=zi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},mr=function(t,e){return t||t===0?e(t):e},Vo=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ze(t)||!(e=Xm.exec(t))?"":e[1]},i_=function(t,e,n){return mr(n,function(i){return Vo(t,e,i)})},xc=[].slice,Ld=function(t,e){return t&&yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&yi(t[0]))&&!t.nodeType&&t!==di},r_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||Ld(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Ze(t)&&!n&&(mc||!zs())?xc.call((e||Uu).querySelectorAll(t),0):an(t)?r_(t,n):Ld(t)?xc.call(t,0):t?[t]:[]},Sc=function(t){return t=Jn(t)[0]||Lo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Jn(e,n.querySelectorAll?n:n===t?Lo("Invalid scope")||Uu.createElement("div"):t)}},Dd=function(t){return t.sort(function(){return .5-Math.random()})},Id=function(t){if(Le(t))return t;var e=yi(t)?t:{each:t},n=Hr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return Ze(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,p=o[g],m,x,S,M,A,b,y,C,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,jn])[1],!L){for(y=-jn;y<(y=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(p=o[g]=[],m=l?Math.min(L,g)*u-.5:i%L,x=L===jn?0:l?g*f/L-.5:i/L|0,y=0,C=jn,b=0;b<g;b++)S=b%L-m,M=x-(b/L|0),p[b]=A=c?Math.abs(c==="y"?M:S):md(S*S+M*M),A>y&&(y=A),A<C&&(C=A);i==="random"&&Dd(p),p.max=y-C,p.min=C,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=sn(e.amount||e.each)||0,n=n&&g<0?g_(n):n}return g=(p[h]-p.min)/p.max||0,Re(p.b+(n?n(g):g)*p.v)+p.u}},Mc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zi(n)?0:sn(n))}},Ud=function(t,e){var n=an(t),i,s;return!n&&yi(t)&&(i=n=t.radius||jn,t.values?(t=Jn(t.values),(s=!zi(t[0]))&&(i*=i)):t=Mc(t.increment)),mr(e,n?Le(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=jn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||zi(o)?u:u+sn(o)}:Mc(t))},Nd=function(t,e,n,i){return mr(an(t)?!e:n===!0?!!(n=0):!i,function(){return an(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},s_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},o_=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},a_=function(t,e,n){return Fd(t,e,0,1,n)},Od=function(t,e,n){return mr(n,function(i){return t[~~e(i)]})},l_=function r(t,e,n){var i=e-t;return an(t)?Od(t,r(0,t.length),e):mr(n,function(s){return(i+(s-t)%i)%i+t})},c_=function r(t,e,n){var i=e-t,s=i*2;return an(t)?Od(t,r(0,t.length-1),e):mr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Io=function(t){return t.replace(Vm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Gm);return Nd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fd=function(t,e,n,i,s){var o=e-t,a=i-n;return mr(s,function(l){return n+((l-t)/o*a||0)})},u_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ze(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Os(an(t)?[]:{},t));if(!u){for(l in e)ku.call(a,t,l,"get",e[l]);s=function(_){return Wu(_,a)||(o?t.p:t)}}}return mr(n,s)},Ah=function(t,e,n){var i=t.labels,s=jn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=Ae,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&sr.length&&Ka(),a&&(Ae=a),u=l?s.apply(c,l):s.call(c),Ae=o,u},oo=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&zn(t,"onInterrupt"),t},Es,Bd=[],zd=function(t){if(t)if(t=!t.name&&t.default||t,Iu()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Do,render:Wu,add:ku,kill:A_,modifier:w_,rawVars:0},o={targetTest:0,get:0,getSetter:Gu,aliases:{},register:0};if(zs(),t!==i){if(Nn[e])return;Wn(i,Wn(Za(t,s),o)),Os(i.prototype,Os(s,Za(t,o))),Nn[i.prop=e]=i,t.targetTest&&(Ia.push(i),Ou[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Md(e,i),t.register&&t.register(Rn,i,En)}else Bd.push(t)},Se=255,ao={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Al=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},kd=function(t,e,n){var i=t?zi(t)?[t>>16,t>>8&Se,t&Se]:0:ao.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ao[t])i=ao[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(yh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Al(l+1/3,s,o),i[1]=Al(l,s,o),i[2]=Al(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(gd),n&&i.length<4&&(i[3]=1),i}else i=t.match(yh)||ao.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Hd=function(t){var e=[],n=[],i=-1;return t.split(or).forEach(function(s){var o=s.match(ys)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Rh=function(t,e,n){var i="",s=(t+i).match(or),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=kd(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Hd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(or,"1").split(ys),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(or),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},or=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ao)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),h_=/hsl[a]?\(/,Vd=function(t){var e=t.join(" "),n;if(or.lastIndex=0,or.test(e))return n=h_.test(e),t[1]=Rh(t[1],n),t[0]=Rh(t[0],n,Hd(t[1])),!0},Uo,Fn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(p){var m=r()-i,x=p===!0,S,M,A,b;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,S=A-o,(S>0||x)&&(b=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=S+(S>=s?4:s-S),M=1),x||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](A,h,b,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){xd&&(!mc&&Iu()&&(di=mc=window,Uu=di.document||{},Gn.gsap=Rn,(di.gsapVersions||(di.gsapVersions=[])).push(Rn.version),Sd($a||di.GreenSockGlobals||!di.gsap&&di||{}),Bd.forEach(zd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Uo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Do},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,x){var S=m?function(M,A,b,y){p(M,A,b,y),f.remove(S)}:p;return f.remove(p),a[x?"unshift":"push"](S),zs(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),zs=function(){return!Uo&&Fn.wake()},le={},f_=/^[\d.\-M][\d.\-,\s]/,d_=/["']/g,p_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(d_,"").trim():+c,i=l.substr(a+1).trim();return e},m_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},__=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[p_(e[1])]:m_(t).split(",").map(bd)):le._CE&&f_.test(t)?le._CE("",t):n},g_=function(t){return function(e){return 1-t(1-e)}},Hr=function(t,e){return t&&(Le(t)?t:le[t]||__(t))||e},Jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return yn(t,function(a){le[a]=Gn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Gd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/pc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Gd(a);return s=pc/s,l.config=function(c,u){return r(t,c,u)},l},Cl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Gd(n);return i.config=function(s){return r(t,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;Jr("Elastic",Rl("in"),Rl("out"),Rl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(md(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-km(r*Bm)+1});Jr("Back",Cl("in"),Cl("out"),Cl());le.SteppedEase=le.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*Vo(0,o,a)|0)+s)*n}}};Po.ease=le["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Fu+=r+","+r+"Params,"});var Wd=function(t,e){this.id=zm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ed,this.set=e?e.getSetter:Gu},No=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bs(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Uo||Fn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pl(this,n),!s._dp||s.parent||Rd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Td(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(Vo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),dl(this),jm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ym);var i=Qe;return Qe=n,zu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Yn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Le(n)?n:wd,l=function(){var u=i.then;i.then=null,s&&s(),Le(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){oo(this)},r}();Wn(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var Sn=function(r){pd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),Ce&&gi(n.parent||Ce,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cd(Li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return go(0,arguments,this),this},e.from=function(i,s,o){return go(1,arguments,this),this},e.fromTo=function(i,s,o,a){return go(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,_o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Yn(this,o),1),this},e.call=function(i,s,o){return gi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new He(i,o,Yn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,_o(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,_o(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Re(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,p,m,x,S,M,A,b,y;if(this!==Ce&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,S=this._ts,m=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Re(u%p),u===l?(g=this._repeat,h=c):(A=Re(u/p),g=~~A,g&&g===A&&(h=c,g--),h>c&&(h=c)),A=Fs(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),b&&g&1&&(h=c-h,y=1),g!==A&&!this._lock){var C=b&&A&1,L=C===(b&&g&1);if(g<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(y?0:Re(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=e_(this,Re(a),Re(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-Me);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||Qe&&zu(d)),h!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=v?-Me:Me);break}}d=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-Me)._zTime=h>=a?1:-1,this._ts))return this._start=M,dl(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(zi(s)||(s=Yn(this,s,i)),!(i instanceof No)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Le(i))i=He.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(i.parent===this&&fl(this,i),i===this._recent&&(this._recent=this._last),kr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Yn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,gi(this,a,Yn(this,i))},e.removePause=function(i){var s=this._first;for(i=Yn(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Jn(i),l=this._first,c=zi(s),u;l;)l instanceof He?$m(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Yn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=He.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Bs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:Yn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ah(this,Yn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ah(this,Yn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Re(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return kr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),kr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=jn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Re(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Bs(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(Td(Ce,ja(i,Ce)),yd=Fn.frame),Fn.frame>=Eh){Eh+=Hn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Hn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},t}(No);Wn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var v_=function(t,e,n,i,s,o,a){var l=new En(this._pt,t,e,0,1,Zd,null,s),c=0,u=0,f,h,d,_,g,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Io(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),h=n.match(bl)||[];f=bl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ws(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(vd.test(i)||m)&&(l.e=0),this._pt=l,l},ku=function(t,e,n,i,s,o,a,l,c,u){Le(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:Le(f)?c?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Le(f)?c?E_:$d:Vu,_;if(Ze(i)&&(~i.indexOf("random(")&&(i=Io(i)),i.charAt(1)==="="&&(_=ws(h,i)+(sn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||yc)return!isNaN(h*i)&&i!==""?(_=new En(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?b_:Kd,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Nu(e,i),v_.call(this,t,e,h,i,d,l||Hn.stringFilter,c))},x_=function(t,e,n,i,s){if(Le(t)&&(t=vo(t,s,e,n,i)),!yi(t)||t.style&&t.nodeType||an(t)||_d(t))return Ze(t)?vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=vo(t[a],s,e,n,i);return o},Xd=function(t,e,n,i,s,o){var a,l,c,u;if(Nn[t]&&(a=new Nn[t]).init(s,a.rawVars?e[t]:x_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Es))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,yc,Hu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!Lu,M=t.timeline,A=i.easeReverse||f,b,y,C,L,v,T,I,B,W,Y,k,q,V;if(M&&(!h||!s)&&(s="none"),t._ease=Hr(s,Po.ease),t._rEase=A&&(Hr(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||h&&!i.stagger){if(B=p[0]?zr(p[0]).harness:0,q=B&&i[B.prop],b=Za(i,Ou),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Da:qm),g._lazy=0),o){if(ur(t._startAt=He.set(p,Wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!a&&!d)&&t._startAt.revert(Da),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),C=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Mn(l),immediateRender:a,stagger:0,parent:m},b),q&&(C[B.prop]=q),ur(t._startAt=He.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(Da):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Mn(l)||l&&!_,y=0;y<p.length;y++){if(v=p[y],I=v._gsap||Bu(p)[y]._gsap,t._ptLookup[y]=Y={},_c[I.id]&&sr.length&&Ka(),k=x===p?y:x.indexOf(v),B&&(W=new B).init(v,q||b,t,k,x)!==!1&&(t._pt=L=new En(t._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(it){Y[it]=L}),W.priority&&(T=1)),!B||q)for(C in b)Nn[C]&&(W=Xd(C,b,t,k,v,x))?W.priority&&(T=1):Y[C]=L=ku.call(t,v,C,"get",b[C],k,x,0,i.stringFilter);t._op&&t._op[y]&&t.kill(v,t._op[y]),S&&t._pt&&(tr=t,Ce.killTweensOf(v,Y,t.globalTime(e)),V=!t.parent,tr=0),t._pt&&l&&(_c[I.id]=1)}T&&jd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&M.render(jn,!0,!0)},S_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return yc=1,t.vars[e]="+=0",Hu(t,a),yc=0,l?Lo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ne(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},M_=function(t,e){var n=t[0]?zr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Os({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},y_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(an(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},vo=function(t,e,n,i,s){return Le(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?Io(t):t},qd=Fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yd={};yn(qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});var He=function(r){pd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:_o(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Ce,x=(an(n)||_d(n)?zi(n[0]):"length"in i)?[n]:Jn(n),S,M,A,b,y,C,L,v;if(a._targets=x.length?Bu(x):Lo("GSAP target "+n+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||Ko(c)||Ko(u)){i=a.vars;var T=i.easeReverse||i.yoyoEase;if(S=a.timeline=new Sn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:x}),S.kill(),S.parent=S._dp=Li(a),S._start=0,h||Ko(c)||Ko(u)){if(b=x.length,L=h&&Id(h),yi(h))for(y in h)~qd.indexOf(y)&&(v||(v={}),v[y]=h[y]);for(M=0;M<b;M++)A=Za(i,Yd),A.stagger=0,T&&(A.easeReverse=T),v&&Os(A,v),C=x[M],A.duration=+vo(c,Li(a),M,C,x),A.delay=(+vo(u,Li(a),M,C,x)||0)-a._delay,!h&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(C,A,L?L(M,C,x):0),S._ease=le.none;S.duration()?c=u=0:a.timeline=0}else if(_){_o(Wn(S.vars.defaults,{ease:"none"})),S._ease=Hr(_.ease||i.ease||"none");var I=0,B,W,Y;if(an(_))_.forEach(function(k){return S.to(x,k,">")}),S.duration();else{A={};for(y in _)y==="ease"||y==="easeEach"||y_(y,_[y],A,_.easeEach);for(y in A)for(B=A[y].sort(function(k,q){return k.t-q.t}),I=0,M=0;M<B.length;M++)W=B[M],Y={ease:W.e,duration:(W.t-(M?B[M-1].t:0))/100*c},Y[y]=W.v,S.to(x,Y,I),I+=Y.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Lu&&(tr=Li(a),Ce.killTweensOf(x),tr=0),gi(m,Li(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Re(m._time)&&Mn(f)&&Jm(Li(a))&&m.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-u)||0)),p&&Cd(Li(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Me&&!u?l:i<Me?0:i,h,d,_,g,p,m,x,S;if(!c)t_(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Re(f%g),f===l?(_=this._repeat,h=c):(p=Re(f/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=Fs(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Re(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Pd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=h<a;if(M!==this._inv){var A=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(h/c);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&gc(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&gc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ur(this,1),!s&&!(u&&!a)&&(f||a||m)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Uo||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hu(this,c),u=this._ease(c/this._dur),S_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(pl(this,0),this.parent||Ad(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||oo(this),this.parent&&o!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Jn(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&Zm(a,l))return s==="all"&&(this._pt=0),oo(this);for(f=this._op=this._op||[],s!=="all"&&(Ze(s)&&(g={},yn(s,function(x){return g[x]=1}),s=g),s=M_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&fl(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&oo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return go(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return go(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(No);Wn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new Sn,e=xc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Vu=function(t,e,n){return t[e]=n},$d=function(t,e,n){return t[e](n)},E_=function(t,e,n,i){return t[e](i.fp,n)},T_=function(t,e,n){return t.setAttribute(e,n)},Gu=function(t,e){return Le(t[e])?$d:Du(t[e])&&t.setAttribute?T_:Vu},Kd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},b_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Wu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},w_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},A_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},R_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},jd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},En=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Kd,this.d=l||this,this.set=c||Vu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=R_,this.m=n,this.mt=s,this.tween=i},r}();yn(Fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ou[r]=1});Gn.TweenMax=Gn.TweenLite=He;Gn.TimelineLite=Gn.TimelineMax=Sn;Ce=new Sn({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=Vd;var Vr=[],Ua={},C_=[],Ch=0,P_=0,Pl=function(t){return(Ua[t]||C_).map(function(e){return e()})},Ec=function(){var t=Date.now(),e=[];t-Ch>2&&(Pl("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Pl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ch=t,Pl("matchMedia"))},Jd=function(){function r(e,n){this.selector=n&&Sc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=P_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Le(n)&&(s=i,i=n,n=Le);var o=this,a=function(){var c=Ae,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Sc(s)),Ae=o,f=i.apply(o,arguments),Le(f)&&o._r.push(f),Ae=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Le?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Vr.length;o--;)Vr[o].id===this.id&&Vr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),L_=function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){yi(n)||(n={matches:n});var o=new Jd(0,s||this.scope),a=o.conditions={},l,c,u;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(Vr.indexOf(o)<0&&Vr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ec):l.addEventListener("change",Ec)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return zd(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=Jn(t)[0]);var s=zr(t||{}).get,o=n?wd:bd;return n==="native"&&(n=""),t&&(e?o((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Jn(t),t.length>1){var i=t.map(function(u){return Rn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Nn[e],a=zr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Es._pt=0,f.init(t,n?u+n:u,Es,0,[t]),f.render(1,f),Es._pt&&Wu(1,Es)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Rn.to(t,Wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Hr(t.ease,Po.ease)),Th(Po,t||{})},config:function(t){return Th(Hn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Gn[a]&&Lo(e+" effect requires "+a+" plugin.")}),wl[e]=function(a,l,c){return n(Jn(a),Wn(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(wl[e](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Hr(e)},parseEase:function(t,e){return arguments.length?Hr(t,e):le},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=Mn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(Ce,n,0),n},context:function(t,e){return t?new Jd(t,e):Ae},matchMedia:function(t){return new L_(t)},matchMediaRefresh:function(){return Vr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ec()},addEventListener:function(t,e){var n=Ua[t]||(Ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:l_,wrapYoyo:c_,distribute:Id,random:Nd,snap:Ud,normalize:a_,getUnit:sn,clamp:i_,splitColor:kd,toArray:Jn,selector:Sc,mapRange:Fd,pipe:s_,unitize:o_,interpolate:u_,shuffle:Dd},install:Sd,effects:wl,ticker:Fn,updateRoot:Sn.updateRoot,plugins:Nn,globalTimeline:Ce,core:{PropTween:En,globals:Md,Tween:He,Timeline:Sn,Animation:No,getCache:zr,_removeLinkedListItem:fl,reverting:function(){return Qe},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Lu=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ja[r]=He[r]});Fn.add(Sn.updateRoot);Es=Ja.to({},{duration:0});var D_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},I_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=D_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ll=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},yn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}I_(a,s)}}}},Rn=Ja.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ll("roundProps",Mc),Ll("modifiers"),Ll("snap",Ud))||Ja;He.version=Sn.version=Rn.version="3.15.0";xd=1;Iu()&&zs();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ph,er,As,Xu,Dr,Lh,qu,U_=function(){return typeof window<"u"},ki={},br=180/Math.PI,Rs=Math.PI/180,ts=Math.atan2,Dh=1e8,Yu=/([A-Z])/g,N_=/(left|right|width|margin|padding|x)/i,O_=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},F_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},B_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},z_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},k_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Qd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},tp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},H_=function(t,e,n){return t.style[e]=n},V_=function(t,e,n){return t.style.setProperty(e,n)},G_=function(t,e,n){return t._gsap[e]=n},W_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},X_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},q_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",Tn=Pe+"Origin",Y_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[t]=o.x?o[t]:Di(i,t),t===Tn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},ep=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!n[Pe]&&(ep(n),i.zOrigin&&n[Tn]&&(n[Tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},np=function(t,e){var n={target:t,props:[],revert:$_,save:Y_};return t._gsap||Rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},ip,bc=function(t,e){var n=er.createElementNS?er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):er.createElement(t);return n&&n.style?n:er.createElement(t)},kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ks(e)||e,1)||""},Ih="O,Moz,ms,Ms,Webkit".split(","),ks=function(t,e,n){var i=e||Dr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ih[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ih[o]:"")+t},wc=function(){U_()&&window.document&&(Ph=window,er=Ph.document,As=er.documentElement,Dr=bc("div")||{style:{}},bc("div"),Pe=ks(Pe),Tn=Pe+"Origin",Dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ip=!!ks("perspective"),qu=Rn.core.reverting,Xu=1)},Uh=function(t){var e=t.ownerSVGElement,n=bc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),As.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),s},Nh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},rp=function(t){var e,n;try{e=t.getBBox()}catch{e=Uh(t),n=1}return e&&(e.width||e.height)||n||(e=Uh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Nh(t,["x","cx","x1"])||0,y:+Nh(t,["y","cy","y1"])||0,width:0,height:0}:e},sp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&rp(t))},hr=function(t,e){if(e){var n=t.style,i;e in ki&&e!==Tn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yu,"-$1").toLowerCase())):n.removeAttribute(e)}},nr=function(t,e,n,i,s,o){var a=new En(t._pt,e,n,0,1,o?tp:Qd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Oh={deg:1,rad:1,turn:1},K_={grid:1,flex:1},fr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Dr.style,l=N_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Oh[i]||Oh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&sp(t),(d||o==="%")&&(ki[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Ne(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===er||!g.appendChild)&&(g=er.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Fn.time&&!p.uncache)return Ne(s/p.width*f);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=f+i,_=t[u],x?t.style[e]=x:hr(t,e)}else(d||o==="%")&&!K_[kn(g,"display")]&&(a.position=kn(t,"position")),g===t&&(a.position="static"),g.appendChild(Dr),_=Dr[u],g.removeChild(Dr),a.position="absolute";return l&&d&&(p=zr(g),p.time=Fn.time,p.width=g[u]),Ne(h?_*s/f:_&&s?f/_*s:0)},Di=function(t,e,n,i){var s;return Xu||wc(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ki[e]&&e!=="transform"?(s=Fo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:tl(kn(t,Tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Qa[e]&&Qa[e](t,e,n)||kn(t,e)||Ed(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,n)+n:s},Z_=function(t,e,n,i){if(!n||n==="none"){var s=ks(e,t,1),o=s&&kn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=kn(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,Zd),l=0,c=0,u,f,h,d,_,g,p,m,x,S,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=kn(t,e)||i,g?t.style[e]=g:hr(t,e)),u=[n,i],Vd(u),n=u[0],i=u[1],h=n.match(ys)||[],A=i.match(ys)||[],A.length){for(;f=ys.exec(i);)p=f[0],x=i.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=ws(d,p)+M),m=parseFloat(p),S=p.substr((m+"").length),l=ys.lastIndex-S.length,S||(S=S||Hn.units[e]||M,l===i.length&&(i+=S,a.e+=S)),M!==S&&(d=fr(t,e,g,S)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?tp:Qd;return vd.test(i)&&(a.e=0),this._pt=a,a},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Fh[n]||n,e[1]=Fh[i]||i,e.join(" ")},J_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ki[a]&&(l=1,a=a==="transformOrigin"?Tn:Pe),hr(n,a);l&&(hr(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fo(n,1),o.uncache=1,ep(i)))}},Qa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,J_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Oo=[1,0,0,1,0,0],op={},ap=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bh=function(t){var e=kn(t,Pe);return ap(e)?Oo:e.substr(7).match(gd).map(Ne)},$u=function(t,e){var n=t._gsap||zr(t),i=t.style,s=Bh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oo:s):(s===Oo&&!t.offsetParent&&t!==As&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,As.appendChild(t)),s=Bh(t),l?i.display=l:hr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(t,e,n,i,s,o){var a=t._gsap,l=s||$u(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],S=e.split(" "),M=parseFloat(S[0])||0,A=parseFloat(S[1])||0,b,y,C,L;n?l!==Oo&&(y=d*p-_*g)&&(C=M*(p/y)+A*(-g/y)+(g*x-p*m)/y,L=M*(-_/y)+A*(d/y)-(d*x-_*m)/y,M=C,A=L):(b=rp(t),M=b.x+(~S[0].indexOf("%")?M/100*b.width:M),A=b.y+(~(S[1]||S[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(m=M-c,x=A-u,a.xOffset=f+(m*d+x*g)-m,a.yOffset=h+(m*_+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Tn]="0px 0px",o&&(nr(o,a,"xOrigin",c,M),nr(o,a,"yOrigin",u,A),nr(o,a,"xOffset",f,a.xOffset),nr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},Fo=function(t,e){var n=t._gsap||new Wd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=kn(t,Tn)||"0",u,f,h,d,_,g,p,m,x,S,M,A,b,y,C,L,v,T,I,B,W,Y,k,q,V,it,P,at,zt,qt,$,Q;return u=f=h=g=p=m=x=S=M=0,d=_=1,n.svg=!!(t.getCTM&&sp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),y=$u(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Ac(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,y)),A=n.xOrigin||0,b=n.yOrigin||0,y!==Oo&&(T=y[0],I=y[1],B=y[2],W=y[3],u=Y=y[4],f=k=y[5],y.length===6?(d=Math.sqrt(T*T+I*I),_=Math.sqrt(W*W+B*B),g=T||I?ts(I,T)*br:0,x=B||W?ts(B,W)*br+g:0,x&&(_*=Math.abs(Math.cos(x*Rs))),n.svg&&(u-=A-(A*T+b*B),f-=b-(A*I+b*W))):(Q=y[6],qt=y[7],P=y[8],at=y[9],zt=y[10],$=y[11],u=y[12],f=y[13],h=y[14],C=ts(Q,zt),p=C*br,C&&(L=Math.cos(-C),v=Math.sin(-C),q=Y*L+P*v,V=k*L+at*v,it=Q*L+zt*v,P=Y*-v+P*L,at=k*-v+at*L,zt=Q*-v+zt*L,$=qt*-v+$*L,Y=q,k=V,Q=it),C=ts(-B,zt),m=C*br,C&&(L=Math.cos(-C),v=Math.sin(-C),q=T*L-P*v,V=I*L-at*v,it=B*L-zt*v,$=W*v+$*L,T=q,I=V,B=it),C=ts(I,T),g=C*br,C&&(L=Math.cos(C),v=Math.sin(C),q=T*L+I*v,V=Y*L+k*v,I=I*L-T*v,k=k*L-Y*v,T=q,Y=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ne(Math.sqrt(T*T+I*I+B*B)),_=Ne(Math.sqrt(k*k+Q*Q)),C=ts(Y,k),x=Math.abs(C)>2e-4?C*br:0,M=$?1/($<0?-$:$):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ap(kn(t,Pe)),q&&t.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ne(d),n.scaleY=Ne(_),n.rotation=Ne(g)+a,n.rotationX=Ne(p)+a,n.rotationY=Ne(m)+a,n.skewX=x+a,n.skewY=S+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Tn]=tl(c)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?tg:ip?lp:Q_,n.uncache=0,n},tl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Dl=function(t,e,n){var i=sn(e);return Ne(parseFloat(e)+parseFloat(fr(t,"x",n+"px",i)))+i},Q_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,lp(t,e)},gr="0deg",Js="0px",vr=") ",lp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,S=n.zOrigin,M="",A=m==="auto"&&t&&t!==1||m===!0;if(S&&(f!==gr||u!==gr)){var b=parseFloat(u)*Rs,y=Math.sin(b),C=Math.cos(b),L;b=parseFloat(f)*Rs,L=Math.cos(b),o=Dl(x,o,y*L*-S),a=Dl(x,a,-Math.sin(b)*-S),l=Dl(x,l,C*L*-S+S)}p!==Js&&(M+="perspective("+p+vr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==Js||a!==Js||l!==Js)&&(M+=l!==Js||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vr),c!==gr&&(M+="rotate("+c+vr),u!==gr&&(M+="rotateY("+u+vr),f!==gr&&(M+="rotateX("+f+vr),(h!==gr||d!==gr)&&(M+="skew("+h+", "+d+vr),(_!==1||g!==1)&&(M+="scale("+_+", "+g+vr),x.style[Pe]=M||"translate(0, 0)"},tg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,S=parseFloat(o),M=parseFloat(a),A,b,y,C,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Rs,c*=Rs,A=Math.cos(l)*f,b=Math.sin(l)*f,y=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Rs,L=Math.tan(c-u),L=Math.sqrt(1+L*L),y*=L,C*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),A*=L,b*=L)),A=Ne(A),b=Ne(b),y=Ne(y),C=Ne(C)):(A=f,C=h,b=y=0),(S&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(S=fr(d,"x",o,"px"),M=fr(d,"y",a,"px")),(_||g||p||m)&&(S=Ne(S+_-(_*A+g*y)+p),M=Ne(M+g-(_*b+g*C)+m)),(i||s)&&(L=d.getBBox(),S=Ne(S+i/100*L.width),M=Ne(M+s/100*L.height)),L="matrix("+A+","+b+","+y+","+C+","+S+","+M+")",d.setAttribute("transform",L),x&&(d.style[Pe]=L)},eg=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?br:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Dh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Dh)%o-~~(c/o)*o)),t._pt=h=new En(t._pt,e,n,i,c,F_),h.e=u,h.u="deg",t._props.push(n),h},zh=function(t,e){for(var n in e)t[n]=e[n];return t},ng=function(t,e,n){var i=zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=Fo(n,1),hr(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=Fo(n,1),o[Pe]=c);for(l in ki)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),_=sn(u),f=d!==_?fr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new En(t._pt,a,l,f,h-f,Tc),t._pt.u=_||0,t._props.push(l));zh(a,i)};yn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Qa[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Di(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var cp={name:"css",register:wc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,x,S,M,A,b,y,C,L;Xu||wc(),this.styles=this.styles||np(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Nn[g]&&Xd(g,e,n,i,t,s)))){if(d=typeof u,_=Qa[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Io(u)),_)_(this,t,g,u,n)&&(y=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(p=sn(c),m=sn(u),m?p!==m&&(c=fr(t,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ze(c)&&~c.indexOf("random(")&&(c=Io(c)),sn(c+"")||c==="auto"||(c+=Hn.units[g]||sn(Di(t,g))||""),(c+"").charAt(1)==="="&&(c=Di(t,g))):c=Di(t,g),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),g in vi&&(g==="autoAlpha"&&(h===1&&Di(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),nr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ki,S){if(this.styles.save(g),L=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=kn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=kn(t,"perspective"),v?t.style.perspective=v:hr(t,"perspective")}f=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||Fo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new En(this._pt,a,Pe,0,1,A.renderTransform,A,0,-1),M.dep=1),g==="scale")this._pt=new En(this._pt,A,"scaleY",A.scaleY,(x?ws(A.scaleY,x+f):f)-A.scaleY||0,Tc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Tn,0,a[Tn]),u=j_(u),A.svg?Ac(t,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&nr(this,A,"zOrigin",A.zOrigin,m),nr(this,a,g,tl(c),tl(u)));continue}else if(g==="svgOrigin"){Ac(t,u,1,b,0,this);continue}else if(g in op){eg(this,A,g,h,x?ws(h,x+u):u);continue}else if(g==="smoothOrigin"){nr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){ng(this,u,t);continue}}else g in a||(g=ks(g)||g);if(S||(f||f===0)&&(h||h===0)&&!O_.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=sn(u)||(g in Hn.units?Hn.units[g]:p),p!==m&&(h=fr(t,g,c,m)),this._pt=new En(this._pt,S?A:a,g,h,(x?ws(h,x+f):f)-h,!S&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?k_:Tc),this._pt.u=m||0,S&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=z_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=B_);else if(g in a)Z_.call(this,t,g,c,x?x+u:u);else if(g in t)this.add(t,g,c||t[g],x?x+u:u,i,s);else if(g!=="parseTransform"){Nu(g,u);continue}S||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),o.push(g)}}y&&jd(this)},render:function(t,e){if(e.tween._time||!qu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Di,aliases:vi,getSetter:function(t,e,n){var i=vi[e];return i&&i.indexOf(",")<0&&(e=i),e in ki&&e!==Tn&&(t._gsap.x||Di(t,"x"))?n&&Lh===n?e==="scale"?W_:G_:(Lh=n||{})&&(e==="scale"?X_:q_):t.style&&!Du(t.style[e])?H_:~e.indexOf("-")?V_:Gu(t,e)},core:{_removeProperty:hr,_getMatrix:$u}};Rn.utils.checkPrefix=ks;Rn.core.getStyleSaver=np;(function(r,t,e,n){var i=yn(r+","+t+","+e,function(s){ki[s]=1});yn(t,function(s){Hn.units[s]="deg",op[s]=1}),vi[i[13]]=r+","+t,yn(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Hn.units[r]="px"});Rn.registerPlugin(cp);var Bt=Rn.registerPlugin(cp)||Rn;Bt.core.Tween;function ig(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function rg(r,t,e){return t&&ig(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Na,Bn,ir,rr,Cs,up,wr,Ps,hp,Ni,ai,fp,dp=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},pp=1,Ts=[],ne=[],Mi=[],xo=Date.now,Rc=function(t,e){return e},sg=function(){var t=Ps.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Mi),ne=n,Mi=i,Rc=function(o,a){return e[o](a)}},ar=function(t,e){return~Mi.indexOf(t)&&Mi[Mi.indexOf(t)+1][e]},So=function(t){return!!~hp.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zo="scrollLeft",jo="scrollTop",Cc=function(){return Ni&&Ni.isPressed||ne.cache++},el=function(t,e){var n=function i(s){if(s||s===0){pp&&(Bn.history.scrollRestoration="manual");var o=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=ne.cache,o&&Rc("ss",s)}else(e||ne.cache!==i.cacheID||Rc("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},vn={s:Zo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:el(function(r){return arguments.length?Bn.scrollTo(r,Ge.sc()):Bn.pageXOffset||ir[Zo]||rr[Zo]||Cs[Zo]||0})},Ge={s:jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:el(function(r){return arguments.length?Bn.scrollTo(vn.sc(),r):Bn.pageYOffset||ir[jo]||rr[jo]||Cs[jo]||0})},xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Je.utils.toArray)(t)[0]||(typeof t=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},og=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},dr=function(t,e){var n=e.s,i=e.sc;So(t)&&(t=ir.scrollingElement||rr);var s=ne.indexOf(t),o=i===Ge.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||un(t,"scroll",Cc);var a=ne[s+o],l=a||(ne[s+o]=el(ar(t,n),!0)||(So(t)?i:el(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Je.getProperty(t,"scrollBehavior")==="smooth"),l},Pc=function(t,e,n){var i=t,s=t,o=xo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=xo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=xo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Qs=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},mp=function(){Ps=Je.core.globals().ScrollTrigger,Ps&&Ps.core&&sg()},_p=function(t){return Je=t||dp(),!Na&&Je&&typeof document<"u"&&document.body&&(Bn=window,ir=document,rr=ir.documentElement,Cs=ir.body,hp=[Bn,ir,rr,Cs],Je.utils.clamp,fp=Je.core.context||function(){},wr="onpointerenter"in Cs?"pointer":"mouse",up=Fe.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Fe.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return pp=0},500),Na=1),Ps||mp(),Na};vn.op=Ge;ne.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Na||_p(Je)||console.warn("Please gsap.registerPlugin(Observer)"),Ps||mp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,S=n.onPress,M=n.onRelease,A=n.onRight,b=n.onLeft,y=n.onUp,C=n.onDown,L=n.onChangeX,v=n.onChangeY,T=n.onChange,I=n.onToggleX,B=n.onToggleY,W=n.onHover,Y=n.onHoverEnd,k=n.onMove,q=n.ignoreCheck,V=n.isNormalizer,it=n.onGestureStart,P=n.onGestureEnd,at=n.onWheel,zt=n.onEnable,qt=n.onDisable,$=n.onClick,Q=n.scrollSpeed,ft=n.capture,ot=n.allowClicks,wt=n.lockAxis,yt=n.onLockAxis;this.target=a=xn(a)||rr,this.vars=n,d&&(d=Je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(Cs).lineHeight)||22);var Xt,Gt,Nt,D,se,Ot,kt,F=this,Jt=0,Lt=0,R=n.passive||!u&&n.passive!==!1,E=dr(a,vn),G=dr(a,Ge),j=E(),et=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ai[0]==="pointerdown",St=So(a),rt=a.ownerDocument||ir,dt=[0,0,0],Vt=[0,0,0],nt=0,vt=function(){return nt=xo()},xt=function(Tt,ce){return(F.event=Tt)&&d&&og(Tt.target,d)||ce&&Z&&Tt.pointerType!=="touch"||q&&q(Tt,ce)},It=function(){F._vx.reset(),F._vy.reset(),Gt.pause(),f&&f(F)},gt=function(){var Tt=F.deltaX=kh(dt),ce=F.deltaY=kh(Vt),pt=Math.abs(Tt)>=i,Dt=Math.abs(ce)>=i;T&&(pt||Dt)&&T(F,Tt,ce,dt,Vt),pt&&(A&&F.deltaX>0&&A(F),b&&F.deltaX<0&&b(F),L&&L(F),I&&F.deltaX<0!=Jt<0&&I(F),Jt=F.deltaX,dt[0]=dt[1]=dt[2]=0),Dt&&(C&&F.deltaY>0&&C(F),y&&F.deltaY<0&&y(F),v&&v(F),B&&F.deltaY<0!=Lt<0&&B(F),Lt=F.deltaY,Vt[0]=Vt[1]=Vt[2]=0),(D||Nt)&&(k&&k(F),Nt&&(p&&Nt===1&&p(F),x&&x(F),Nt=0),D=!1),Ot&&!(Ot=!1)&&yt&&yt(F),se&&(at(F),se=!1),Xt=0},Yt=function(Tt,ce,pt){dt[pt]+=Tt,Vt[pt]+=ce,F._vx.update(Tt),F._vy.update(ce),c?Xt||(Xt=requestAnimationFrame(gt)):gt()},Ft=function(Tt,ce){wt&&!kt&&(F.axis=kt=Math.abs(Tt)>Math.abs(ce)?"x":"y",Ot=!0),kt!=="y"&&(dt[2]+=Tt,F._vx.update(Tt,!0)),kt!=="x"&&(Vt[2]+=ce,F._vy.update(ce,!0)),c?Xt||(Xt=requestAnimationFrame(gt)):gt()},oe=function(Tt){if(!xt(Tt,1)){Tt=Qs(Tt,u);var ce=Tt.clientX,pt=Tt.clientY,Dt=ce-F.x,Ct=pt-F.y,Ht=F.isDragging;F.x=ce,F.y=pt,(Ht||(Dt||Ct)&&(Math.abs(F.startX-ce)>=s||Math.abs(F.startY-pt)>=s))&&(Nt||(Nt=Ht?2:1),Ht||(F.isDragging=!0),Ft(Dt,Ct))}},U=F.onPress=function(Rt){xt(Rt,1)||Rt&&Rt.button||(F.axis=kt=null,Gt.pause(),F.isPressed=!0,Rt=Qs(Rt),Jt=Lt=0,F.startX=F.x=Rt.clientX,F.startY=F.y=Rt.clientY,F._vx.reset(),F._vy.reset(),un(V?a:rt,ai[1],oe,R,!0),F.deltaX=F.deltaY=0,S&&S(F))},tt=F.onRelease=function(Rt){if(!xt(Rt,1)){cn(V?a:rt,ai[1],oe,!0);var Tt=!isNaN(F.y-F.startY),ce=F.isDragging,pt=ce&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Dt=Qs(Rt);!pt&&Tt&&(F._vx.reset(),F._vy.reset(),u&&ot&&Je.delayedCall(.08,function(){if(xo()-nt>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(rt.createEvent){var Ct=rt.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,Bn,1,Dt.screenX,Dt.screenY,Dt.clientX,Dt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Ct)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&ce&&!V&&Gt.restart(!0),Nt&&gt(),m&&ce&&m(F),M&&M(F,pt)}},K=function(Tt){return Tt.touches&&Tt.touches.length>1&&(F.isGesturing=!0)&&it(Tt,F.isDragging)},J=function(){return(F.isGesturing=!1)||P(F)},lt=function(Tt){if(!xt(Tt)){var ce=E(),pt=G();Yt((ce-j)*Q,(pt-et)*Q,1),j=ce,et=pt,f&&Gt.restart(!0)}},ct=function(Tt){if(!xt(Tt)){Tt=Qs(Tt,u),at&&(se=!0);var ce=(Tt.deltaMode===1?l:Tt.deltaMode===2?Bn.innerHeight:1)*_;Yt(Tt.deltaX*ce,Tt.deltaY*ce,0),f&&!V&&Gt.restart(!0)}},$t=function(Tt){if(!xt(Tt)){var ce=Tt.clientX,pt=Tt.clientY,Dt=ce-F.x,Ct=pt-F.y;F.x=ce,F.y=pt,D=!0,f&&Gt.restart(!0),(Dt||Ct)&&Ft(Dt,Ct)}},ve=function(Tt){F.event=Tt,W(F)},be=function(Tt){F.event=Tt,Y(F)},ie=function(Tt){return xt(Tt)||Qs(Tt,u)&&$(F)};Gt=F._dc=Je.delayedCall(h||.25,It).pause(),F.deltaX=F.deltaY=0,F._vx=Pc(0,50,!0),F._vy=Pc(0,50,!0),F.scrollX=E,F.scrollY=G,F.isDragging=F.isGesturing=F.isPressed=!1,fp(this),F.enable=function(Rt){return F.isEnabled||(un(St?rt:a,"scroll",Cc),o.indexOf("scroll")>=0&&un(St?rt:a,"scroll",lt,R,ft),o.indexOf("wheel")>=0&&un(a,"wheel",ct,R,ft),(o.indexOf("touch")>=0&&up||o.indexOf("pointer")>=0)&&(un(a,ai[0],U,R,ft),un(rt,ai[2],tt),un(rt,ai[3],tt),ot&&un(a,"click",vt,!0,!0),$&&un(a,"click",ie),it&&un(rt,"gesturestart",K),P&&un(rt,"gestureend",J),W&&un(a,wr+"enter",ve),Y&&un(a,wr+"leave",be),k&&un(a,wr+"move",$t)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=D=Nt=!1,F._vx.reset(),F._vy.reset(),j=E(),et=G(),Rt&&Rt.type&&U(Rt),zt&&zt(F)),F},F.disable=function(){F.isEnabled&&(Ts.filter(function(Rt){return Rt!==F&&So(Rt.target)}).length||cn(St?rt:a,"scroll",Cc),F.isPressed&&(F._vx.reset(),F._vy.reset(),cn(V?a:rt,ai[1],oe,!0)),cn(St?rt:a,"scroll",lt,ft),cn(a,"wheel",ct,ft),cn(a,ai[0],U,ft),cn(rt,ai[2],tt),cn(rt,ai[3],tt),cn(a,"click",vt,!0),cn(a,"click",ie),cn(rt,"gesturestart",K),cn(rt,"gestureend",J),cn(a,wr+"enter",ve),cn(a,wr+"leave",be),cn(a,wr+"move",$t),F.isEnabled=F.isPressed=F.isDragging=!1,qt&&qt(F))},F.kill=F.revert=function(){F.disable();var Rt=Ts.indexOf(F);Rt>=0&&Ts.splice(Rt,1),Ni===F&&(Ni=0)},Ts.push(F),V&&So(a)&&(Ni=F),F.enable(g)},rg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.15.0";Fe.create=function(r){return new Fe(r)};Fe.register=_p;Fe.getAll=function(){return Ts.slice()};Fe.getById=function(r){return Ts.filter(function(t){return t.vars.id===r})[0]};dp()&&Je.registerPlugin(Fe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,xs,ee,_e,On,fe,Ku,nl,Bo,Mo,lo,Jo,nn,ml,Lc,pn,Hh,Vh,Ss,gp,Il,vp,dn,Dc,xp,Sp,Ji,Ic,Zu,Ls,ju,yo,Uc,Ul,Qo=1,rn=Date.now,Nl=rn(),ei=0,co=0,Gh=function(t,e,n){var i=Un(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Wh=function(t,e){return e&&(!Un(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ag=function r(){return co&&requestAnimationFrame(r)},Xh=function(){return ml=1},qh=function(){return ml=0},pi=function(t){return t},uo=function(t){return Math.round(t*1e5)/1e5||0},Mp=function(){return typeof window<"u"},yp=function(){return Mt||Mp()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},qr=function(t){return!!~Ku.indexOf(t)},Ep=function(t){return(t==="Height"?ju:ee["inner"+t])||On["client"+t]||fe["client"+t]},Tp=function(t){return ar(t,"getBoundingClientRect")||(qr(t)?function(){return ka.width=ee.innerWidth,ka.height=ju,ka}:function(){return Ii(t)})},lg=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ar(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Ep(s):t["client"+s])||0}},cg=function(t,e){return!e||~Mi.indexOf(t)?Tp(t):function(){return ka}},xi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ar(t,n))?o()-Tp(t)()[s]:qr(t)?(On[n]||fe[n])-Ep(i):t[n]-t["offset"+i])},ta=function(t,e){for(var n=0;n<Ss.length;n+=3)(!e||~e.indexOf(Ss[n+1]))&&t(Ss[n],Ss[n+1],Ss[n+2])},Un=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},ho=function(t){return typeof t=="number"},Ar=function(t){return typeof t=="object"},to=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},es=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ns=Math.abs,bp="left",wp="top",Ju="right",Qu="bottom",Gr="width",Wr="height",Eo="Right",To="Left",bo="Top",wo="Bottom",ke="padding",$n="margin",Hs="Width",th="Height",Ve="px",Kn=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ug=function(t){var e=Kn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Yh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ii=function(t,e){var n=e&&Kn(t)[Lc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},il=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ap=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},hg=function(t){return function(e){return Mt.utils.snap(Ap(t),e)}},eh=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},fg=function(t){return function(e,n){return eh(Ap(t))(e,n.direction)}},ea=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},$e=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},na=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$h={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ia={toggleActions:"play",anticipatePin:0},rl={top:0,left:0,center:.5,bottom:1,right:1},Oa=function(t,e){if(Un(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in rl?rl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ra=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=qr(n)||ar(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?fe:n.tagName==="IFRAME"?n.contentDocument.body:n,x=t.indexOf("start")!==-1,S=x?c:u,M="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Ge?Ju:Qu)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=M,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Fa(_,0,i,x),_},Fa=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Hs]=1,s["border"+a+Hs]=0,s[n.p]=e+"px",Mt.set(t,s)},te=[],Nc={},zo,Kh=function(){return rn()-ei>34&&(zo||(zo=requestAnimationFrame(Bi)))},is=function(){(!dn||!dn.isPressed||dn.startX>fe.clientWidth)&&(ne.cache++,dn?zo||(zo=requestAnimationFrame(Bi)):Bi(),ei||$r("scrollStart"),ei=rn())},Ol=function(){Sp=ee.innerWidth,xp=ee.innerHeight},fo=function(t){ne.cache++,(t===!0||!nn&&!vp&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Dc||Sp!==ee.innerWidth||Math.abs(ee.innerHeight-xp)>ee.innerHeight*.25))&&nl.restart(!0)},Yr={},dg=[],Rp=function r(){return $e(Wt,"scrollEnd",r)||Ir(!0)},$r=function(t){return Yr[t]&&Yr[t].map(function(e){return e()})||dg},In=[],Cp=function(t){for(var e=0;e<In.length;e+=5)(!t||In[e+4]&&In[e+4].query===t)&&(In[e].style.cssText=In[e+1],In[e].getBBox&&In[e].setAttribute("transform",In[e+2]||""),In[e+3].uncache=1)},Pp=function(){return ne.forEach(function(t){return on(t)&&++t.cacheID&&(t.rec=t())})},nh=function(t,e){var n;for(pn=0;pn<te.length;pn++)n=te[pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));yo=!0,e&&Cp(e),e||$r("revert")},Lp=function(t,e){ne.cache++,(e||!mn)&&ne.forEach(function(n){return on(n)&&n.cacheID++&&(n.rec=0)}),Un(t)&&(ee.history.scrollRestoration=Zu=t)},mn,Xr=0,Zh,pg=function(){if(Zh!==Xr){var t=Zh=Xr;requestAnimationFrame(function(){return t===Xr&&Ir(!0)})}},Dp=function(){fe.appendChild(Ls),ju=!dn&&Ls.offsetHeight||ee.innerHeight,fe.removeChild(Ls)},jh=function(t){return Bo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ir=function(t,e){if(On=_e.documentElement,fe=_e.body,Ku=[ee,_e,On,fe],ei&&!t&&!yo){Ke(Wt,"scrollEnd",Rp);return}Dp(),mn=Wt.isRefreshing=!0,yo||Pp();var n=$r("refreshInit");gp&&Wt.sort(),e||nh(),ne.forEach(function(i){on(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),yo=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Uc=1,jh(!0),te.forEach(function(i){var s=xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),jh(!1),Uc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){on(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lp(Zu,1),nl.pause(),Xr++,mn=2,Bi(2),te.forEach(function(i){return on(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=Wt.isRefreshing=!1,$r("refresh")},Oc=0,Ba=1,Ao,Bi=function(t){if(t===2||!mn&&!yo){Wt.isUpdating=!0,Ao&&Ao.update(0);var e=te.length,n=rn(),i=n-Nl>=50,s=e&&te[0].scroll();if(Ba=Oc>s?-1:1,mn||(Oc=s),i&&(ei&&!ml&&n-ei>200&&(ei=0,$r("scrollEnd")),lo=Nl,Nl=n),Ba<0){for(pn=e;pn-- >0;)te[pn]&&te[pn].update(0,i);Ba=1}else for(pn=0;pn<e;pn++)te[pn]&&te[pn].update(0,i);Wt.isUpdating=!1}zo=0},Fc=[bp,wp,Qu,Ju,$n+wo,$n+Eo,$n+bo,$n+To,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],za=Fc.concat([Gr,Wr,"boxSizing","max"+Hs,"max"+th,"position",$n,ke,ke+bo,ke+Eo,ke+wo,ke+To]),mg=function(t,e,n){Ds(n);var i=t._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Fl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Fc.length,o=e.style,a=t.style,l;s--;)l=Fc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qu]=a[Ju]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Gr]=il(t,vn)+Ve,o[Wr]=il(t,Ge)+Ve,o[ke]=a[$n]=a[wp]=a[bp]="0",Ds(i),a[Gr]=a["max"+Hs]=n[Gr],a[Wr]=a["max"+th]=n[Wr],a[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},_g=/([A-Z])/g,Ds=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(_g,"-$1").toLowerCase())}},sa=function(t){for(var e=za.length,n=t.style,i=[],s=0;s<e;s++)i.push(za[s],n[za[s]]);return i.t=t,i},gg=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ka={left:0,top:0},Jh=function(t,e,n,i,s,o,a,l,c,u,f,h,d,_){on(t)&&(t=t(l)),Un(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Oa("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(t)||(t=+t),ho(t))d&&(t=Mt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&Fa(a,n,i,!0);else{on(e)&&(e=e(l));var S=(t||"0").split(" "),M,A,b,y;x=xn(e,l)||fe,M=Ii(x)||{},(!M||!M.left&&!M.top)&&Kn(x).display==="none"&&(y=x.style.display,x.style.display="block",M=Ii(x),y?x.style.display=y:x.style.removeProperty("display")),A=Oa(S[0],M[i.d]),b=Oa(S[1]||"0",n),t=M[i.p]-c[i.p]-u+A+s-b,a&&Fa(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var C=t+n,L=o._isStart;p="scroll"+i.d2,Fa(o,C,i,L&&C>20||!L&&(f?Math.max(fe[p],On[p]):o.parentNode[p])<=C+1),f&&(c=Ii(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ve))}return d&&x&&(p=Ii(x),d.seek(h),m=Ii(x),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},vg=/(webkit|moz|length|cssText|inset)/i,Qh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===fe){t._stOrig=s.cssText,a=Kn(t);for(o in a)!+o&&!vg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},Ip=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},oa=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},tf=function(t,e){var n=dr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=Ip(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&Bi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Mt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),Wt.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},Wt=function(){function r(e,n){xs||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ic(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!co){this.update=this.refresh=this.kill=pi;return}n=Yh(Un(n)||ho(n)||n.nodeType?{trigger:n}:n,ia);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,S=s.once,M=s.snap,A=s.pinReparent,b=s.pinSpacer,y=s.containerAnimation,C=s.fastScrollEnd,L=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Ge,T=!f&&f!==0,I=xn(n.scroller||ee),B=Mt.core.getCache(I),W=qr(I),Y=("pinType"in n?n.pinType:ar(I,"pinType")||W&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=T&&n.toggleActions.split(" "),V="markers"in n?n.markers:ia.markers,it=W?0:parseFloat(Kn(I)["border"+v.p2+Hs])||0,P=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(P)},zt=lg(I,W,v),qt=cg(I,W),$=0,Q=0,ft=0,ot=dr(I,v),wt,yt,Xt,Gt,Nt,D,se,Ot,kt,F,Jt,Lt,R,E,G,j,et,Z,St,rt,dt,Vt,nt,vt,xt,It,gt,Yt,Ft,oe,U,tt,K,J,lt,ct,$t,ve,be;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=I,P.scroll=y?y.time.bind(y):ot,Gt=ot(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(gp=1,n.refreshPriority===-9999&&(Ao=P)),B.tweenScroll=B.tweenScroll||{top:tf(I,Ge),left:tf(I,vn)},P.tweenTo=wt=B.tweenScroll[v.p],P.scrubDuration=function(pt){K=ho(pt)&&pt,K?tt?tt.duration(pt):tt=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(P)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),oe=0,l||(l=i.vars.id)),M&&((!Ar(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in fe.style&&Mt.set(W?[fe,On]:I,{scrollBehavior:"auto"}),ne.forEach(function(pt){return on(pt)&&pt.target===(W?_e.scrollingElement||On:I)&&(pt.smooth=!1)}),Xt=on(M.snapTo)?M.snapTo:M.snapTo==="labels"?hg(i):M.snapTo==="labelsDirectional"?fg(i):M.directional!==!1?function(pt,Dt){return eh(M.snapTo)(pt,rn()-Q<500?0:Dt.direction)}:Mt.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=Ar(J)?Mo(J.min,J.max):Mo(J,J),lt=Mt.delayedCall(M.delay||K/2||.1,function(){var pt=ot(),Dt=rn()-Q<500,Ct=wt.tween;if((Dt||Math.abs(P.getVelocity())<10)&&!Ct&&!ml&&$!==pt){var Ht=(pt-D)/E,De=i&&!T?i.totalProgress():Ht,Kt=Dt?0:(De-U)/(rn()-lo)*1e3||0,we=Mt.utils.clamp(-Ht,1-Ht,ns(Kt/2)*Kt/.185),Ie=Ht+(M.inertia===!1?0:we),ye,xe,me=M,Cn=me.onStart,Ee=me.onInterrupt,w=me.onComplete;if(ye=Xt(Ie,P),ho(ye)||(ye=Ie),xe=Math.max(0,Math.round(D+ye*E)),pt<=se&&pt>=D&&xe!==pt){if(Ct&&!Ct._initted&&Ct.data<=ns(xe-pt))return;M.inertia===!1&&(we=ye-Ht),wt(xe,{duration:J(ns(Math.max(ns(Ie-De),ns(ye-De))*.185/Kt/.05||0)),ease:M.ease||"power3",data:ns(xe-pt),onInterrupt:function(){return lt.restart(!0)&&Ee&&es(P,Ee)},onComplete:function(){P.update(),$=ot(),i&&!T&&(tt?tt.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),oe=U=i&&!T?i.totalProgress():P.progress,x&&x(P),w&&es(P,w)}},pt,we*E,xe-pt-we*E),Cn&&es(P,Cn,wt.tween)}}else P.isActive&&$!==pt&&lt.restart(!0)}).pause()),l&&(Nc[l]=P),h=P.trigger=xn(h||d!==!0&&d),be=h&&h._gsap&&h._gsap.stRevert,be&&(be=be(P)),d=d===!0?h:xn(d),Un(a)&&(a={targets:h,className:a}),d&&(_===!1||_===$n||(_=!_&&d.parentNode&&d.parentNode.style&&Kn(d.parentNode).display==="flex"?!1:ke),P.pin=d,yt=Mt.core.getCache(d),yt.spacer?G=yt.pinState:(b&&(b=xn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),yt.spacerIsNative=!!b,b&&(yt.spacerState=sa(b))),yt.spacer=Z=b||_e.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),yt.pinState=G=sa(d)),n.force3D!==!1&&Mt.set(d,{force3D:!0}),P.spacer=Z=yt.spacer,Ft=Kn(d),vt=Ft[_+v.os2],rt=Mt.getProperty(d),dt=Mt.quickSetter(d,v.a,Ve),Fl(d,Z,Ft),et=sa(d)),V){Lt=Ar(V)?Yh(V,$h):$h,F=ra("scroller-start",l,I,v,Lt,0),Jt=ra("scroller-end",l,I,v,Lt,0,F),St=F["offset"+v.op.d2];var ie=xn(ar(I,"content")||I);Ot=this.markerStart=ra("start",l,ie,v,Lt,St,0,y),kt=this.markerEnd=ra("end",l,ie,v,Lt,St,0,y),y&&(ve=Mt.quickSetter([Ot,kt],v.a,Ve)),!Y&&!(Mi.length&&ar(I,"fixedMarkers")===!0)&&(ug(W?fe:I),Mt.set([F,Jt],{force3D:!0}),It=Mt.quickSetter(F,v.a,Ve),Yt=Mt.quickSetter(Jt,v.a,Ve))}if(y){var Rt=y.vars.onUpdate,Tt=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){P.update(0,0,1),Rt&&Rt.apply(y,Tt||[])})}if(P.previous=function(){return te[te.indexOf(P)-1]},P.next=function(){return te[te.indexOf(P)+1]},P.revert=function(pt,Dt){if(!Dt)return P.kill(!0);var Ct=pt!==!1||!P.enabled,Ht=nn;Ct!==P.isReverted&&(Ct&&(ct=Math.max(ot(),P.scroll.rec||0),ft=P.progress,$t=i&&i.progress()),Ot&&[Ot,kt,F,Jt].forEach(function(De){return De.style.display=Ct?"none":"block"}),Ct&&(nn=P,P.update(Ct)),d&&(!A||!P.isActive)&&(Ct?mg(d,Z,G):Fl(d,Z,Kn(d),xt)),Ct||P.update(Ct),nn=Ht,P.isReverted=Ct)},P.refresh=function(pt,Dt,Ct,Ht){if(!((nn||!P.enabled)&&!Dt)){if(d&&pt&&ei){Ke(r,"scrollEnd",Rp);return}!mn&&at&&at(P),nn=P,wt.tween&&!Ct&&(wt.tween.kill(),wt.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qt){return Qt.vars.immediateRender&&Qt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var De=zt(),Kt=qt(),we=y?y.duration():xi(I,v),Ie=E<=.01||!E,ye=0,xe=Ht||0,me=Ar(Ct)?Ct.end:n.end,Cn=n.endTrigger||h,Ee=Ar(Ct)?Ct.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),w=P.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,P),O=h&&Math.max(0,te.indexOf(P))||0,z=O,H,N,st,_t,ht,ut,At,Ut,bt,ae,re,ge,qe;for(V&&Ar(Ct)&&(ge=Mt.getProperty(F,v.p),qe=Mt.getProperty(Jt,v.p));z-- >0;)ut=te[z],ut.end||ut.refresh(0,1)||(nn=P),At=ut.pin,At&&(At===h||At===d||At===w)&&!ut.isReverted&&(ae||(ae=[]),ae.unshift(ut),ut.revert(!0,!0)),ut!==te[z]&&(O--,z--);for(on(Ee)&&(Ee=Ee(P)),Ee=Gh(Ee,"start",P),D=Jh(Ee,h,De,v,ot(),Ot,F,P,Kt,it,Y,we,y,P._startClamp&&"_startClamp")||(d?-.001:0),on(me)&&(me=me(P)),Un(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(Un(Ee)?Ee.split(" ")[0]:"")+me:(ye=Oa(me.substr(2),De),me=Un(Ee)?Ee:(y?Mt.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,D):D)+ye,Cn=h)),me=Gh(me,"end",P),se=Math.max(D,Jh(me||(Cn?"100% 0":we),Cn,De,v,ot()+ye,kt,Jt,P,Kt,it,Y,we,y,P._endClamp&&"_endClamp"))||-.001,ye=0,z=O;z--;)ut=te[z]||{},At=ut.pin,At&&ut.start-ut._pinPush<=D&&!y&&ut.end>0&&(H=ut.end-(P._startClamp?Math.max(0,ut.start):ut.start),(At===h&&ut.start-ut._pinPush<D||At===w)&&isNaN(Ee)&&(ye+=H*(1-ut.progress)),At===d&&(xe+=H));if(D+=ye,se+=ye,P._startClamp&&(P._startClamp+=ye),P._endClamp&&!mn&&(P._endClamp=se||-.001,se=Math.min(se,xi(I,v))),E=se-D||(D-=.01)&&.001,Ie&&(ft=Mt.utils.clamp(0,1,Mt.utils.normalize(D,se,ct))),P._pinPush=xe,Ot&&ye&&(H={},H[v.a]="+="+ye,w&&(H[v.p]="-="+ot()),Mt.set([Ot,kt],H)),d&&!(Uc&&P.end>=xi(I,v)))H=Kn(d),_t=v===Ge,st=ot(),Vt=parseFloat(rt(v.a))+xe,!we&&se>1&&(re=(W?_e.scrollingElement||On:I).style,re={style:re,value:re["overflow"+v.a.toUpperCase()]},W&&Kn(fe)["overflow"+v.a.toUpperCase()]!=="scroll"&&(re.style["overflow"+v.a.toUpperCase()]="scroll")),Fl(d,Z,H),et=sa(d),N=Ii(d,!0),Ut=Y&&dr(I,_t?vn:Ge)(),_?(xt=[_+v.os2,E+xe+Ve],xt.t=Z,z=_===ke?il(d,v)+E+xe:0,z&&(xt.push(v.d,z+Ve),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+Ve)),Ds(xt),w&&te.forEach(function(Qt){Qt.pin===w&&Qt.vars.pinSpacing!==!1&&(Qt._subPinOffset=!0)}),Y&&ot(ct)):(z=il(d,v),z&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+Ve)),Y&&(ht={top:N.top+(_t?st-D:Ut)+Ve,left:N.left+(_t?Ut:st-D)+Ve,boxSizing:"border-box",position:"fixed"},ht[Gr]=ht["max"+Hs]=Math.ceil(N.width)+Ve,ht[Wr]=ht["max"+th]=Math.ceil(N.height)+Ve,ht[$n]=ht[$n+bo]=ht[$n+Eo]=ht[$n+wo]=ht[$n+To]="0",ht[ke]=H[ke],ht[ke+bo]=H[ke+bo],ht[ke+Eo]=H[ke+Eo],ht[ke+wo]=H[ke+wo],ht[ke+To]=H[ke+To],j=gg(G,ht,A),mn&&ot(0)),i?(bt=i._initted,Il(1),i.render(i.duration(),!0,!0),nt=rt(v.a)-Vt+E+xe,gt=Math.abs(E-nt)>1,Y&&gt&&j.splice(j.length-2,2),i.render(0,!0,!0),bt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Il(0)):nt=E,re&&(re.value?re.style["overflow"+v.a.toUpperCase()]=re.value:re.style.removeProperty("overflow-"+v.a));else if(h&&ot()&&!y)for(N=h.parentNode;N&&N!==fe;)N._pinOffset&&(D-=N._pinOffset,se-=N._pinOffset),N=N.parentNode;ae&&ae.forEach(function(Qt){return Qt.revert(!1,!0)}),P.start=D,P.end=se,Gt=Nt=mn?ct:ot(),!y&&!mn&&(Gt<ct&&ot(ct),P.scroll.rec=0),P.revert(!1,!0),Q=rn(),lt&&($=-1,lt.restart(!0)),nn=0,i&&T&&(i._initted||$t)&&i.progress()!==$t&&i.progress($t||0,!0).render(i.time(),!0,!0),(Ie||ft!==P.progress||y||g||i&&!i._initted)&&(i&&!T&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(y&&D<-.001&&!ft?Mt.utils.normalize(D,se,0):ft,!0),P.progress=Ie||(Gt-D)/E===ft?0:ft),d&&_&&(Z._pinOffset=Math.round(P.progress*nt)),tt&&tt.invalidate(),isNaN(ge)||(ge-=Mt.getProperty(F,v.p),qe-=Mt.getProperty(Jt,v.p),oa(F,v,ge),oa(Ot,v,ge-(Ht||0)),oa(Jt,v,qe),oa(kt,v,qe-(Ht||0))),Ie&&!mn&&P.update(),u&&!mn&&!R&&(R=!0,u(P),R=!1)}},P.getVelocity=function(){return(ot()-Nt)/(rn()-lo)*1e3||0},P.endAnimation=function(){to(P.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?T||to(i,P.direction<0,1):to(i,i.reversed()))},P.labelToScroll=function(pt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[pt]/i.duration()*E||0},P.getTrailing=function(pt){var Dt=te.indexOf(P),Ct=P.direction>0?te.slice(0,Dt).reverse():te.slice(Dt+1);return(Un(pt)?Ct.filter(function(Ht){return Ht.vars.preventOverlaps===pt}):Ct).filter(function(Ht){return P.direction>0?Ht.end<=D:Ht.start>=se})},P.update=function(pt,Dt,Ct){if(!(y&&!Ct&&!pt)){var Ht=mn===!0?ct:P.scroll(),De=pt?0:(Ht-D)/E,Kt=De<0?0:De>1?1:De||0,we=P.progress,Ie,ye,xe,me,Cn,Ee,w,O;if(Dt&&(Nt=Gt,Gt=y?ot():Ht,M&&(U=oe,oe=i&&!T?i.totalProgress():Kt)),p&&d&&!nn&&!Qo&&ei&&(!Kt&&D<Ht+(Ht-Nt)/(rn()-lo)*p?Kt=1e-4:Kt===1&&se>Ht+(Ht-Nt)/(rn()-lo)*p&&(Kt=.9999)),Kt!==we&&P.enabled){if(Ie=P.isActive=!!Kt&&Kt<1,ye=!!we&&we<1,Ee=Ie!==ye,Cn=Ee||!!Kt!=!!we,P.direction=Kt>we?1:-1,P.progress=Kt,Cn&&!nn&&(xe=Kt&&!we?0:Kt===1?1:we===1?2:3,T&&(me=!Ee&&q[xe+1]!=="none"&&q[xe+1]||q[xe],O=i&&(me==="complete"||me==="reset"||me in i))),L&&(Ee||O)&&(O||f||!i)&&(on(L)?L(P):P.getTrailing(L).forEach(function(st){return st.endAnimation()})),T||(tt&&!nn&&!Qo?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",Kt,i._tTime/i._tDur):(tt.vars.totalProgress=Kt,tt.invalidate().restart())):i&&i.totalProgress(Kt,!!(nn&&(Q||pt)))),d){if(pt&&_&&(Z.style[_+v.os2]=vt),!Y)dt(uo(Vt+nt*Kt));else if(Cn){if(w=!pt&&Kt>we&&se+1>Ht&&Ht+1>=xi(I,v),A)if(!pt&&(Ie||w)){var z=Ii(d,!0),H=Ht-D;Qh(d,fe,z.top+(v===Ge?H:0)+Ve,z.left+(v===Ge?0:H)+Ve)}else Qh(d,Z);Ds(Ie||w?j:et),gt&&Kt<1&&Ie||dt(Vt+(Kt===1&&!w?nt:0))}}M&&!wt.tween&&!nn&&!Qo&&lt.restart(!0),a&&(Ee||S&&Kt&&(Kt<1||!Ul))&&Bo(a.targets).forEach(function(st){return st.classList[Ie||S?"add":"remove"](a.className)}),o&&!T&&!pt&&o(P),Cn&&!nn?(T&&(O&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(P)),(Ee||!Ul)&&(c&&Ee&&es(P,c),k[xe]&&es(P,k[xe]),S&&(Kt===1?P.kill(!1,1):k[xe]=0),Ee||(xe=Kt===1?1:3,k[xe]&&es(P,k[xe]))),C&&!Ie&&Math.abs(P.getVelocity())>(ho(C)?C:2500)&&(to(P.callbackAnimation),tt?tt.progress(1):to(i,me==="reverse"?1:!Kt,1))):T&&o&&!nn&&o(P)}if(Yt){var N=y?Ht/y.duration()*(y._caScrollDist||0):Ht;It(N+(F._isFlipped?1:0)),Yt(N)}ve&&ve(-Ht/y.duration()*(y._caScrollDist||0))}},P.enable=function(pt,Dt){P.enabled||(P.enabled=!0,Ke(I,"resize",fo),W||Ke(I,"scroll",is),at&&Ke(r,"refreshInit",at),pt!==!1&&(P.progress=ft=0,Gt=Nt=$=ot()),Dt!==!1&&P.refresh())},P.getTween=function(pt){return pt&&wt?wt.tween:tt},P.setPositions=function(pt,Dt,Ct,Ht){if(y){var De=y.scrollTrigger,Kt=y.duration(),we=De.end-De.start;pt=De.start+we*pt/Kt,Dt=De.start+we*Dt/Kt}P.refresh(!1,!1,{start:Wh(pt,Ct&&!!P._startClamp),end:Wh(Dt,Ct&&!!P._endClamp)},Ht),P.update()},P.adjustPinSpacing=function(pt){if(xt&&pt){var Dt=xt.indexOf(v.d)+1;xt[Dt]=parseFloat(xt[Dt])+pt+Ve,xt[1]=parseFloat(xt[1])+pt+Ve,Ds(xt)}},P.disable=function(pt,Dt){if(pt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Dt||tt&&tt.pause(),ct=0,yt&&(yt.uncache=1),at&&$e(r,"refreshInit",at),lt&&(lt.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!W)){for(var Ct=te.length;Ct--;)if(te[Ct].scroller===I&&te[Ct]!==P)return;$e(I,"resize",fo),W||$e(I,"scroll",is)}},P.kill=function(pt,Dt){P.disable(pt,Dt),tt&&!Dt&&tt.kill(),l&&delete Nc[l];var Ct=te.indexOf(P);Ct>=0&&te.splice(Ct,1),Ct===pn&&Ba>0&&pn--,Ct=0,te.forEach(function(Ht){return Ht.scroller===P.scroller&&(Ct=1)}),Ct||mn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Dt||i.kill()),Ot&&[Ot,kt,F,Jt].forEach(function(Ht){return Ht.parentNode&&Ht.parentNode.removeChild(Ht)}),Ao===P&&(Ao=0),d&&(yt&&(yt.uncache=1),Ct=0,te.forEach(function(Ht){return Ht.pin===d&&Ct++}),Ct||(yt.spacer=0)),n.onKill&&n.onKill(P)},te.push(P),P.enable(!1,!1),be&&be(P),i&&i.add&&!E){var ce=P.update;P.update=function(){P.update=ce,ne.cache++,D||se||P.refresh()},Mt.delayedCall(.01,P.update),E=.01,D=se=0}else P.refresh();d&&pg()},r.register=function(n){return xs||(Mt=n||yp(),Mp()&&window.document&&r.enable(),xs=co),xs},r.defaults=function(n){if(n)for(var i in n)ia[i]=n[i];return ia},r.disable=function(n,i){co=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),$e(ee,"wheel",is),$e(_e,"scroll",is),clearInterval(Jo),$e(_e,"touchcancel",pi),$e(fe,"touchstart",pi),ea($e,_e,"pointerdown,touchstart,mousedown",Xh),ea($e,_e,"pointerup,touchend,mouseup",qh),nl.kill(),ta($e);for(var s=0;s<ne.length;s+=3)na($e,ne[s],ne[s+1]),na($e,ne[s],ne[s+2])},r.enable=function(){if(ee=window,_e=document,On=_e.documentElement,fe=_e.body,Mt){if(Bo=Mt.utils.toArray,Mo=Mt.utils.clamp,Ic=Mt.core.context||pi,Il=Mt.core.suppressOverwrites||pi,Zu=ee.history.scrollRestoration||"auto",Oc=ee.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),fe){co=1,Ls=document.createElement("div"),Ls.style.height="100vh",Ls.style.position="absolute",Dp(),ag(),Fe.register(Mt),r.isTouch=Fe.isTouch,Ji=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dc=Fe.isTouch===1,Ke(ee,"wheel",is),Ku=[ee,_e,On,fe],Mt.matchMedia?(r.matchMedia=function(u){var f=Mt.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Mt.addEventListener("matchMediaInit",function(){Pp(),nh()}),Mt.addEventListener("matchMediaRevert",function(){return Cp()}),Mt.addEventListener("matchMedia",function(){Ir(0,1),$r("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return Ol(),Ol})):console.warn("Requires GSAP 3.11.0 or later"),Ol(),Ke(_e,"scroll",is);var n=fe.hasAttribute("style"),i=fe.style,s=i.borderTopStyle,o=Mt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ii(fe),Ge.m=Math.round(a.top+Ge.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(fe.setAttribute("style",""),fe.removeAttribute("style")),Jo=setInterval(Kh,250),Mt.delayedCall(.5,function(){return Qo=0}),Ke(_e,"touchcancel",pi),Ke(fe,"touchstart",pi),ea(Ke,_e,"pointerdown,touchstart,mousedown",Xh),ea(Ke,_e,"pointerup,touchend,mouseup",qh),Lc=Mt.utils.checkPrefix("transform"),za.push(Lc),xs=rn(),nl=Mt.delayedCall(.2,Ir).pause(),Ss=[_e,"visibilitychange",function(){var u=ee.innerWidth,f=ee.innerHeight;_e.hidden?(Hh=u,Vh=f):(Hh!==u||Vh!==f)&&fo()},_e,"DOMContentLoaded",Ir,ee,"load",Ir,ee,"resize",fo],ta(Ke),te.forEach(function(u){return u.enable(0,1)}),l=0;l<ne.length;l+=3)na($e,ne[l],ne[l+1]),na($e,ne[l],ne[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ul=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Jo)||(Jo=i)&&setInterval(Kh,i),"ignoreMobileResize"in n&&(Dc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ta($e)||ta(Ke,n.autoRefreshEvents||"none"),vp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),o=ne.indexOf(s),a=qr(s);~o&&ne.splice(o,a?6:2),i&&(a?Mi.unshift(ee,i,fe,i,On,i):Mi.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Un(n)?xn(n):n).getBoundingClientRect(),a=o[s?Gr:Wr]*i||0;return s?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},r.positionInViewport=function(n,i,s){Un(n)&&(n=xn(n));var o=n.getBoundingClientRect(),a=o[s?Gr:Wr],l=i==null?a/2:i in rl?rl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(s){return s()})}},r}();Wt.version="3.15.0";Wt.saveStyles=function(r){return r?Bo(r).forEach(function(t){if(t&&t.style){var e=In.indexOf(t);e>=0&&In.splice(e,5),In.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),Ic())}}):In};Wt.revert=function(r,t){return nh(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?fo(!0):(xs||Wt.register())&&Ir(!0)};Wt.update=function(r){return++ne.cache&&Bi(r===!0?2:0)};Wt.clearScrollMemory=Lp;Wt.maxScroll=function(r,t){return xi(r,t?vn:Ge)};Wt.getScrollFunc=function(r,t){return dr(xn(r),t?vn:Ge)};Wt.getById=function(r){return Nc[r]};Wt.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!ei};Wt.snapDirectional=eh;Wt.addEventListener=function(r,t){var e=Yr[r]||(Yr[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=Yr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Mt.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&on(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return on(s)&&(s=s(),Ke(Wt,"refresh",function(){return s=t.batchMax()})),Bo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Wt.create(c))}),e};var ef=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Bl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===On&&r(fe,e)},aa={auto:1,scroll:1},xg=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Mt.core.getCache(s),a=rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==fe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(aa[(l=Kn(s)).overflowY]||aa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!qr(s)&&(aa[(l=Kn(s)).overflowY]||aa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Up=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&xg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(_e,Fe.eventTypes[0],rf,!1,!0)},onDisable:function(){return $e(_e,Fe.eventTypes[0],rf,!0)}})},Sg=/(input|label|select|textarea)/i,nf,rf=function(t){var e=Sg.test(t.target.tagName);(e||nf)&&(t._gsapAllow=!0,nf=e)},Mg=function(t){Ar(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=xn(t.target)||On,u=Mt.core.globals().ScrollSmoother,f=u&&u.get(),h=Ji&&(t.content&&xn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=dr(c,Ge),_=dr(c,vn),g=1,p=(Fe.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,m=0,x=on(i)?function(){return i(a)}:function(){return i||2.8},S,M,A=Up(c,t.type,!0,s),b=function(){return M=!1},y=pi,C=pi,L=function(){l=xi(c,Ge),C=Mo(Ji?1:0,l),n&&(y=Mo(0,xi(c,vn))),S=Xr},v=function(){h._gsap.y=uo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},T=function(){if(M){requestAnimationFrame(b);var V=uo(a.deltaY/2),it=C(d.v-V);if(h&&it!==d.v+d.offset){d.offset=it-d.v;var P=uo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=ne.cache,Bi()}return!0}d.offset&&v(),M=!0},I,B,W,Y,k=function(){L(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Mt.set(h,{y:"+=0"}),t.ignoreCheck=function(q){return Ji&&q.type==="touchmove"&&T()||g>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},t.onPress=function(){M=!1;var q=g;g=uo((ee.visualViewport&&ee.visualViewport.scale||1)/p),I.pause(),q!==g&&Bl(c,g>1.01?!0:n?!1:"x"),B=_(),W=d(),L(),S=Xr},t.onRelease=t.onGestureStart=function(q,V){if(d.offset&&v(),!V)Y.restart(!0);else{ne.cache++;var it=x(),P,at;n&&(P=_(),at=P+it*.05*-q.velocityX/.227,it*=ef(_,P,at,xi(c,vn)),I.vars.scrollX=y(at)),P=d(),at=P+it*.05*-q.velocityY/.227,it*=ef(d,P,at,xi(c,Ge)),I.vars.scrollY=C(at),I.invalidate().duration(it).play(.01),(Ji&&I.vars.scrollY>=l||P>=l-1)&&Mt.to({},{onUpdate:k,duration:it})}o&&o(q)},t.onWheel=function(){I._ts&&I.pause(),rn()-m>1e3&&(S=0,m=rn())},t.onChange=function(q,V,it,P,at){if(Xr!==S&&L(),V&&n&&_(y(P[2]===V?B+(q.startX-q.x):_()+V-P[1])),it){d.offset&&v();var zt=at[2]===it,qt=zt?W+q.startY-q.y:d()+it-at[1],$=C(qt);zt&&qt!==$&&(W+=$-qt),d($)}(it||V)&&Bi()},t.onEnable=function(){Bl(c,n?!1:"x"),Wt.addEventListener("refresh",k),Ke(ee,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){Bl(c,!0),$e(ee,"resize",k),Wt.removeEventListener("refresh",k),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=Ji,Ji&&!d()&&d(1),Ji&&Mt.ticker.add(pi),Y=a._dc,I=Mt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ip(d,d(),function(){return I.pause()})},onUpdate:Bi,onComplete:Y.vars.onComplete}),a};Wt.sort=function(r){if(on(r))return te.sort(r);var t=ee.pageYOffset||0;return Wt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new Fe(r)};Wt.normalizeScroll=function(r){if(typeof r>"u")return dn;if(r===!0&&dn)return dn.enable();if(r===!1){dn&&dn.kill(),dn=r;return}var t=r instanceof Fe?r:Mg(r);return dn&&dn.target===t.target&&dn.kill(),qr(t.target)&&(dn=t),t};Wt.core={_getVelocityProp:Pc,_inputObserver:Up,_scrollers:ne,_proxies:Mi,bridge:{ss:function(){ei||$r("scrollStart"),ei=rn()},ref:function(){return nn}}};yp()&&Mt.registerPlugin(Wt);var sf="1.3.27";function Np(r,t,e){return Math.max(r,Math.min(t,e))}function yg(r,t,e){return(1-e)*r+e*t}function Eg(r,t,e,n){return yg(r,t,1-Math.exp(-e*n))}function Tg(r,t){return(r%t+t)%t}var bg=class{constructor(){Et(this,"isRunning",!1);Et(this,"value",0);Et(this,"from",0);Et(this,"to",0);Et(this,"currentTime",0);Et(this,"lerp");Et(this,"duration");Et(this,"easing");Et(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const e=Np(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Eg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function wg(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Ag=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Et(this,"width",0);Et(this,"height",0);Et(this,"scrollHeight",0);Et(this,"scrollWidth",0);Et(this,"debouncedResize");Et(this,"wrapperResizeObserver");Et(this,"contentResizeObserver");Et(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Et(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Et(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=wg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Op=class{constructor(){Et(this,"events",{})}emit(r,...t){const e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}};const Rg=100/6,Xi={passive:!1};function of(r,t){return r===1?Rg:r===2?t:1}var Cg=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Et(this,"touchStart",{x:0,y:0});Et(this,"lastDelta",{x:0,y:0});Et(this,"window",{width:0,height:0});Et(this,"emitter",new Op);Et(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Et(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Et(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Et(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=of(n,this.window.width),s=of(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Et(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Xi),this.element.addEventListener("touchstart",this.onTouchStart,Xi),this.element.addEventListener("touchmove",this.onTouchMove,Xi),this.element.addEventListener("touchend",this.onTouchEnd,Xi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Xi),this.element.removeEventListener("touchstart",this.onTouchStart,Xi),this.element.removeEventListener("touchmove",this.onTouchMove,Xi),this.element.removeEventListener("touchend",this.onTouchEnd,Xi)}};const af=r=>Math.min(1,1.001-2**(-10*r));var Pg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:S=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:y=!1,naiveDimensions:C=y,stopInertiaOnNavigate:L=!1,respectReducedMotion:v=!0}={}){Et(this,"_isScrolling",!1);Et(this,"_isStopped",!1);Et(this,"_isLocked",!1);Et(this,"_preventNextNativeScrollEvent",!1);Et(this,"_resetVelocityTimeout",null);Et(this,"_rafId",null);Et(this,"_isDraggingSelection",!1);Et(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Et(this,"isTouching");Et(this,"isIos");Et(this,"time",0);Et(this,"userData",{});Et(this,"lastVelocity",0);Et(this,"velocity",0);Et(this,"direction",0);Et(this,"options");Et(this,"targetScroll");Et(this,"animatedScroll");Et(this,"animate",new bg);Et(this,"emitter",new Op);Et(this,"dimensions");Et(this,"virtualScroll");Et(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Et(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Et(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Et(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Et(this,"onPointerDown",r=>{r.button===1&&this.reset()});Et(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||i&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Et(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Et(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=sf,window.lenis||(window.lenis={}),window.lenis.version=sf,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=af:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:x,autoRaf:S,anchors:M,autoToggle:A,allowNestedScroll:b,naiveDimensions:C,stopInertiaOnNavigate:L,respectReducedMotion:v},this.dimensions=new Ag(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Cg(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(_=h),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=Np(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=af:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),u=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=f>d,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,x,S,M,A;if(g==="horizontal")p=Math.round(r.scrollLeft),m=f-d,x=t,S=s,M=a,A=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,x=e,S=o,M=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(x>0?p<m:p>0)&&S&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Tg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function e(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=e,DocumentFragment.prototype.replaceWith=e))})();function Lg(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function lf(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function cf(r,t,e){return t&&lf(r.prototype,t),e&&lf(r,e),r}function Dg(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function uf(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,n)}return e}function hf(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(e),!0).forEach(function(n){Dg(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):uf(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function Fp(r,t){return Ug(r)||Og(r,t)||Bp(r,t)||Bg()}function _n(r){return Ig(r)||Ng(r)||Bp(r)||Fg()}function Ig(r){if(Array.isArray(r))return Bc(r)}function Ug(r){if(Array.isArray(r))return r}function Ng(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function Og(r,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return e}}function Bp(r,t){if(r){if(typeof r=="string")return Bc(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Bc(r,t)}}function Bc(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Fg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ur(r,t){return Object.getOwnPropertyNames(Object(r)).reduce(function(e,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(t),n);return Object.defineProperty(e,n,s||i)},{})}function Go(r){return typeof r=="string"}function ih(r){return Array.isArray(r)}function la(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Ur(r),e;return t.types!==void 0?e=t.types:t.split!==void 0&&(e=t.split),e!==void 0&&(t.types=(Go(e)||ih(e)?String(e):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(r.position)),t}function rh(r){var t=Go(r)||ih(r)?String(r):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function _l(r){return r!==null&&typeof r=="object"}function zg(r){return _l(r)&&/^(1|3|11)$/.test(r.nodeType)}function kg(r){return typeof r=="number"&&r>-1&&r%1===0}function Hg(r){return _l(r)&&kg(r.length)}function Kr(r){return ih(r)?r:r==null?[]:Hg(r)?Array.prototype.slice.call(r):[r]}function ff(r){var t=r;return Go(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?t=document.getElementById(r.trim().slice(1)):t=document.querySelectorAll(r)),Kr(t).reduce(function(e,n){return[].concat(_n(e),_n(Kr(n).filter(zg)))},[])}var Vg=Object.entries,sl="_splittype",fi={},Gg=0;function Si(r,t,e){if(!_l(r))return console.warn("[data.set] owner is not an object"),null;var n=r[sl]||(r[sl]=++Gg),i=fi[n]||(fi[n]={});return e===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(fi[n]=hf(hf({},i),t)):t!==void 0&&(i[t]=e),e}function Nr(r,t){var e=_l(r)?r[sl]:null,n=e&&fi[e]||{};return n}function zp(r){var t=r&&r[sl];t&&(delete r[t],delete fi[t])}function Wg(){Object.keys(fi).forEach(function(r){delete fi[r]})}function Xg(){Vg(fi).forEach(function(r){var t=Fp(r,2),e=t[0],n=t[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(fi[e]=null,delete fi[e])})}function qg(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",e=r?String(r):"";return e.trim().replace(/\s+/g," ").split(t)}var sh="\\ud800-\\udfff",kp="\\u0300-\\u036f\\ufe20-\\ufe23",Hp="\\u20d0-\\u20f0",Vp="\\ufe0e\\ufe0f",Yg="[".concat(sh,"]"),zc="[".concat(kp).concat(Hp,"]"),kc="\\ud83c[\\udffb-\\udfff]",$g="(?:".concat(zc,"|").concat(kc,")"),Gp="[^".concat(sh,"]"),Wp="(?:\\ud83c[\\udde6-\\uddff]){2}",Xp="[\\ud800-\\udbff][\\udc00-\\udfff]",qp="\\u200d",Yp="".concat($g,"?"),$p="[".concat(Vp,"]?"),Kg="(?:"+qp+"(?:"+[Gp,Wp,Xp].join("|")+")"+$p+Yp+")*",Zg=$p+Yp+Kg,jg="(?:".concat(["".concat(Gp).concat(zc,"?"),zc,Wp,Xp,Yg].join("|"),`
)`),Jg=RegExp("".concat(kc,"(?=").concat(kc,")|").concat(jg).concat(Zg),"g"),Qg=[qp,sh,kp,Hp,Vp],t0=RegExp("[".concat(Qg.join(""),"]"));function e0(r){return r.split("")}function Kp(r){return t0.test(r)}function n0(r){return r.match(Jg)||[]}function i0(r){return Kp(r)?n0(r):e0(r)}function r0(r){return r==null?"":String(r)}function s0(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=r0(r),r&&Go(r)&&!t&&Kp(r)?i0(r):r.split(t)}function Hc(r,t){var e=document.createElement(r);return t&&Object.keys(t).forEach(function(n){var i=t[n],s=Go(i)?i.trim():i;s===null||s===""||(n==="children"?e.append.apply(e,_n(Kr(s))):e.setAttribute(n,s))}),e}var oh={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function o0(r,t){t=Ur(oh,t);var e=rh(t.types),n=t.tagName,i=r.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=qg(i).reduce(function(l,c,u,f){var h,d;return e.chars&&(d=s0(c).map(function(_){var g=Hc(n,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:_});return Si(g,"isChar",!0),a=[].concat(_n(a),[g]),g})),e.words||e.lines?(h=Hc(n,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(e.words&&t.absolute?"position: relative;":""),children:e.chars?d:c}),Si(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):d.forEach(function(_){s.appendChild(_)}),u<f.length-1&&s.append(" "),e.words?l.concat(h):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:o,chars:a}}function Zp(r,t){var e=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(e))return n;if(e===3&&/\S/.test(r.nodeValue))return o0(r,t);var i=Kr(r.childNodes);if(i.length&&(Si(r,"isSplit",!0),!Nr(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,o=r.previousSibling,a=r.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";Si(r,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,f){var h=Zp(f,t),d=h.words,_=h.chars;return{words:[].concat(_n(u.words),_n(d)),chars:[].concat(_n(u.chars),_n(_))}},n)}function a0(r,t,e,n){if(!e.absolute)return{top:t?r.offsetTop:null};var i=r.offsetParent,s=Fp(n,2),o=s[0],a=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var f=r.getBoundingClientRect(),h=f.width,d=f.height,_=f.x,g=f.y,p=g+a-c,m=_+o-l;return{width:h,height:d,top:p,left:m}}function jp(r){Nr(r).isWord?(zp(r),r.replaceWith.apply(r,_n(r.childNodes))):Kr(r.children).forEach(function(t){return jp(t)})}var l0=function(){return document.createDocumentFragment()};function c0(r,t,e){var n=rh(t.types),i=t.tagName,s=r.getElementsByTagName("*"),o=[],a=[],l=null,c,u,f,h=[],d=r.parentElement,_=r.nextElementSibling,g=l0(),p=window.getComputedStyle(r),m=p.textAlign,x=parseFloat(p.fontSize),S=x*.2;return t.absolute&&(f={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,Si(r,{cssWidth:r.style.width,cssHeight:r.style.height})),Kr(s).forEach(function(M){var A=M.parentElement===r,b=a0(M,A,t,e),y=b.width,C=b.height,L=b.top,v=b.left;/^br$/i.test(M.nodeName)||(n.lines&&A&&((l===null||L-l>=S)&&(l=L,o.push(a=[])),a.push(M)),t.absolute&&Si(M,{top:L,left:v,width:y,height:C}))}),d&&d.removeChild(r),n.lines&&(h=o.map(function(M){var A=Hc(i,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(m,"; width: 100%;")});Si(A,"isLine",!0);var b={height:0,top:1e4};return g.appendChild(A),M.forEach(function(y,C,L){var v=Nr(y),T=v.isWordEnd,I=v.top,B=v.height,W=L[C+1];b.height=Math.max(b.height,B),b.top=Math.min(b.top,I),A.appendChild(y),T&&Nr(W).isWordStart&&A.append(" ")}),t.absolute&&Si(A,{height:b.height,top:b.top}),A}),n.words||jp(g),r.replaceChildren(g)),t.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),Kr(s).forEach(function(M){var A=Nr(M),b=A.isLine,y=A.top,C=A.left,L=A.width,v=A.height,T=Nr(M.parentElement),I=!b&&T.isLine;M.style.top="".concat(I?y-T.top:y,"px"),M.style.left=b?"".concat(f.left,"px"):"".concat(C-(I?f.left:0),"px"),M.style.height="".concat(v,"px"),M.style.width=b?"".concat(f.width,"px"):"".concat(L,"px"),M.style.position="absolute"})),d&&(_?d.insertBefore(r,_):d.appendChild(r)),h}var rs=Ur(oh,{}),Vc=function(){cf(r,null,[{key:"clearData",value:function(){Wg()}},{key:"setDefaults",value:function(e){return rs=Ur(rs,la(e)),oh}},{key:"revert",value:function(e){ff(e).forEach(function(n){var i=Nr(n),s=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",zp(n))})}},{key:"create",value:function(e,n){return new r(e,n)}},{key:"data",get:function(){return fi}},{key:"defaults",get:function(){return rs},set:function(e){rs=Ur(rs,la(e))}}]);function r(t,e){Lg(this,r),this.isSplit=!1,this.settings=Ur(rs,la(e)),this.elements=ff(t),this.split()}return cf(r,[{key:"split",value:function(e){var n=this;this.revert(),this.elements.forEach(function(o){Si(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];e!==void 0&&(this.settings=Ur(this.settings,la(e)));var s=rh(this.settings.types);s.none||(this.elements.forEach(function(o){Si(o,"isRoot",!0);var a=Zp(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(_n(n.words),_n(l)),n.chars=[].concat(_n(n.chars),_n(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=c0(o,n.settings,i);n.lines=[].concat(_n(n.lines),_n(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),Xg())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r}();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="169",u0=0,df=1,h0=2,Jp=1,f0=2,Pi=3,pr=0,bn=1,Ui=2,lr=0,Is=1,pf=2,mf=3,_f=4,d0=5,Pr=100,p0=101,m0=102,_0=103,g0=104,v0=200,x0=201,S0=202,M0=203,Gc=204,Wc=205,y0=206,E0=207,T0=208,b0=209,w0=210,A0=211,R0=212,C0=213,P0=214,Xc=0,qc=1,Yc=2,Vs=3,$c=4,Kc=5,Zc=6,jc=7,Qp=0,L0=1,D0=2,cr=0,I0=1,U0=2,N0=3,O0=4,F0=5,B0=6,z0=7,tm=300,Gs=301,Ws=302,Jc=303,Qc=304,gl=306,tu=1e3,Or=1001,eu=1002,Qn=1003,k0=1004,ca=1005,li=1006,zl=1007,Fr=1008,Hi=1009,em=1010,nm=1011,ko=1012,lh=1013,Zr=1014,Oi=1015,Wo=1016,ch=1017,uh=1018,Xs=1020,im=35902,rm=1021,sm=1022,ui=1023,om=1024,am=1025,Us=1026,qs=1027,lm=1028,hh=1029,cm=1030,fh=1031,dh=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Su=37819,Mu=37820,yu=37821,Xa=36492,Eu=36494,Tu=36495,um=36283,bu=36284,wu=36285,Au=36286,H0=3200,V0=3201,G0=0,W0=1,Qi="",mi="srgb",_r="srgb-linear",ph="display-p3",vl="display-p3-linear",ol="linear",Te="srgb",al="rec709",ll="p3",ss=7680,gf=519,X0=512,q0=513,Y0=514,hm=515,$0=516,K0=517,Z0=518,j0=519,vf=35044,xf="300 es",Fi=2e3,cl=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sf=1234567;const Ro=Math.PI/180,Ho=180/Math.PI;function Ks(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function gn(r,t,e){return Math.max(t,Math.min(e,r))}function mh(r,t){return(r%t+t)%t}function J0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Q0(r,t,e){return r!==t?(e-r)/(t-r):0}function Co(r,t,e){return(1-e)*r+e*t}function tv(r,t,e,n){return Co(r,t,1-Math.exp(-e*n))}function ev(r,t=1){return t-Math.abs(mh(r,t*2)-t)}function nv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function iv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function rv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function sv(r,t){return r+Math.random()*(t-r)}function ov(r){return r*(.5-Math.random())}function av(r){r!==void 0&&(Sf=r);let t=Sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lv(r){return r*Ro}function cv(r){return r*Ho}function uv(r){return(r&r-1)===0&&r!==0}function hv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dv(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),f=s((t-n)/2),h=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ms(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mf={DEG2RAD:Ro,RAD2DEG:Ho,generateUUID:Ks,clamp:gn,euclideanModulo:mh,mapLinear:J0,inverseLerp:Q0,lerp:Co,damp:tv,pingpong:ev,smoothstep:nv,smootherstep:iv,randInt:rv,randFloat:sv,randFloatSpread:ov,seededRandom:av,degToRad:lv,radToDeg:cv,isPowerOfTwo:uv,ceilPowerOfTwo:hv,floorPowerOfTwo:fv,setQuaternionFromProperEuler:dv,normalize:hn,denormalize:Ms};class pe{constructor(t=0,e=0){pe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],x=i[1],S=i[4],M=i[7],A=i[2],b=i[5],y=i[8];return s[0]=o*g+a*x+l*A,s[3]=o*p+a*S+l*b,s[6]=o*m+a*M+l*y,s[1]=c*g+u*x+f*A,s[4]=c*p+u*S+f*b,s[7]=c*m+u*M+f*y,s[2]=h*g+d*x+_*A,s[5]=h*p+d*S+_*b,s[8]=h*m+d*M+_*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new jt;function fm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pv(){const r=ul("canvas");return r.style.display="block",r}const yf={};function qa(r){r in yf||(yf[r]=!0,console.warn(r))}function mv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function _v(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ef=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tf=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[_r]:{transfer:ol,primaries:al,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:Te,primaries:al,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vl]:{transfer:ol,primaries:ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Tf),fromReference:r=>r.applyMatrix3(Ef)},[ph]:{transfer:Te,primaries:ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Tf),fromReference:r=>r.applyMatrix3(Ef).convertLinearToSRGB()}},vv=new Set([_r,vl]),de={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!vv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=eo[t].toReference,i=eo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return eo[r].primaries},getTransfer:function(r){return r===Qi?ol:eo[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(eo[t].luminanceCoefficients)}};function Ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let os;class xv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=ul("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ul("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sv=0;class dm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vl(i[o].image)):s.push(Vl(i[o]))}else s=Vl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class wn extends $s{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=Or,i=Or,s=li,o=Fr,a=ui,l=Hi,c=wn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Ks(),this.name="",this.source=new dm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=tm;wn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(d+1)/2,A=(m+1)/2,b=(u+h)/4,y=(f+g)/4,C=(_+p)/4;return S>M&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=b/n,s=y/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=y/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(f-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yv extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends yv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pm extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ev extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-a;const m=l*h+c*d+u*_+f*g,x=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const A=Math.sqrt(S),b=Math.atan2(A,m*x);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const M=a*x;if(l=l*p+h*M,c=c*p+d*M,u=u*p+_*M,f=f*p+g*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new X,bf=new Xo;class qo{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),ha.subVectors(this.max,no),as.subVectors(t.a,no),ls.subVectors(t.b,no),cs.subVectors(t.c,no),qi.subVectors(ls,as),Yi.subVectors(cs,ls),xr.subVectors(as,cs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-xr.z,xr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,xr.z,0,-xr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-xr.y,xr.x,0];return!Wl(e,as,ls,cs,ha)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,as,ls,cs,ha))?!1:(fa.crossVectors(qi,Yi),e=[fa.x,fa.y,fa.z],Wl(e,as,ls,cs,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new X,new X,new X,new X,new X,new X,new X,new X],ri=new X,ua=new qo,as=new X,ls=new X,cs=new X,qi=new X,Yi=new X,xr=new X,no=new X,ha=new X,fa=new X,Sr=new X;function Wl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Sr.fromArray(r,s);const a=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tv=new qo,io=new X,Xl=new X;class xl{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Xl)),this.expandByPoint(io.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new X,ql=new X,da=new X,$i=new X,Yl=new X,pa=new X,$l=new X;class mm{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ql.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(ql);const s=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=$i.dot(this.direction),l=-$i.dot(da),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ql).addScaledVector(da,h),d}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,i,s){Yl.subVectors(e,t),pa.subVectors(n,t),$l.crossVectors(Yl,pa);let o=this.direction.dot($l),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const l=a*this.direction.dot(pa.crossVectors($i,pa));if(l<0)return null;const c=a*this.direction.dot(Yl.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot($l);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bv,t,wv)}lookAt(t,e,n){const i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ki.crossVectors(n,Ln),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ki.crossVectors(n,Ln)),Ki.normalize(),ma.crossVectors(Ln,Ki),i[0]=Ki.x,i[4]=ma.x,i[8]=Ln.x,i[1]=Ki.y,i[5]=ma.y,i[9]=Ln.y,i[2]=Ki.z,i[6]=ma.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],S=n[7],M=n[11],A=n[15],b=i[0],y=i[4],C=i[8],L=i[12],v=i[1],T=i[5],I=i[9],B=i[13],W=i[2],Y=i[6],k=i[10],q=i[14],V=i[3],it=i[7],P=i[11],at=i[15];return s[0]=o*b+a*v+l*W+c*V,s[4]=o*y+a*T+l*Y+c*it,s[8]=o*C+a*I+l*k+c*P,s[12]=o*L+a*B+l*q+c*at,s[1]=u*b+f*v+h*W+d*V,s[5]=u*y+f*T+h*Y+d*it,s[9]=u*C+f*I+h*k+d*P,s[13]=u*L+f*B+h*q+d*at,s[2]=_*b+g*v+p*W+m*V,s[6]=_*y+g*T+p*Y+m*it,s[10]=_*C+g*I+p*k+m*P,s[14]=_*L+g*B+p*q+m*at,s[3]=x*b+S*v+M*W+A*V,s[7]=x*y+S*T+M*Y+A*it,s[11]=x*C+S*I+M*k+A*P,s[15]=x*L+S*B+M*q+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],x=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,S=_*h*c-u*p*c-_*l*d+o*p*d+u*l*m-o*h*m,M=u*g*c-_*f*c+_*a*d-o*g*d-u*a*m+o*f*m,A=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,b=e*x+n*S+i*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=x*y,t[1]=(g*h*s-f*p*s-g*i*d+n*p*d+f*i*m-n*h*m)*y,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*y,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*y,t[4]=S*y,t[5]=(u*p*s-_*h*s+_*i*d-e*p*d-u*i*m+e*h*m)*y,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*y,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*y,t[8]=M*y,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*m-e*f*m)*y,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*y,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*y,t[12]=A*y,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*p+e*f*p)*y,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*y,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,p=o*f,m=a*f,x=l*c,S=l*u,M=l*f,A=n.x,b=n.y,y=n.z;return i[0]=(1-(g+m))*A,i[1]=(d+M)*A,i[2]=(_-S)*A,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(h+m))*b,i[6]=(p+x)*b,i[7]=0,i[8]=(_+S)*y,i[9]=(p-x)*y,i[10]=(1-(h+g))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],si.copy(this);const c=1/s,u=1/o,f=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,e.setFromRotationMatrix(si),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(a===Fi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Fi){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(a===Fi)_=(o+s)*f,g=-2*f;else if(a===cl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new X,si=new Be,bv=new X(0,0,0),wv=new X(1,1,1),Ki=new X,ma=new X,Ln=new X,wf=new Be,Af=new Xo;class Vi{constructor(t=0,e=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Af.setFromEuler(this),this.setFromQuaternion(Af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class _m{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Av=0;const Rf=new X,hs=new Xo,wi=new Be,_a=new X,ro=new X,Rv=new X,Cv=new Xo,Cf=new X(1,0,0),Pf=new X(0,1,0),Lf=new X(0,0,1),Df={type:"added"},Pv={type:"removed"},fs={type:"childadded",child:null},Kl={type:"childremoved",child:null};class An extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new X,e=new Vi,n=new Xo,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new jt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Pf,t)}rotateZ(t){return this.rotateOnAxis(Lf,t)}translateOnAxis(t,e){return Rf.copy(t).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Pf,t)}translateZ(t){return this.translateOnAxis(Lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ro,_a,this.up):wi.lookAt(_a,ro,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(wi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Df),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pv),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Df),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}An.DEFAULT_UP=new X(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new X,Ai=new X,Zl=new X,Ri=new X,ds=new X,ps=new X,If=new X,jl=new X,Jl=new X,Ql=new X,tc=new Oe,ec=new Oe,nc=new Oe;class ci{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){oi.subVectors(i,e),Ai.subVectors(n,e),Zl.subVectors(t,e);const o=oi.dot(oi),a=oi.dot(Ai),l=oi.dot(Zl),c=Ai.dot(Ai),u=Ai.dot(Zl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(tc,s.x),o.addScaledVector(ec,s.y),o.addScaledVector(nc,s.z),o}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),Ai.subVectors(t,e),oi.cross(Ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),oi.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ds.subVectors(i,n),ps.subVectors(s,n),jl.subVectors(t,n);const l=ds.dot(jl),c=ps.dot(jl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,i);const u=ds.dot(Jl),f=ps.dot(Jl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ds,o);Ql.subVectors(t,s);const d=ds.dot(Ql),_=ps.dot(Ql);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ps,a);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return If.subVectors(s,i),a=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(If,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function ic(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=mh(t,1),e=gn(e,0,1),n=gn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ic(o,s,t+1/3),this.g=ic(o,s,t),this.b=ic(o,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mi){const n=gm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=Hl(t.r),this.g=Hl(t.g),this.b=Hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return de.fromWorkingColorSpace(en.copy(this),t),Math.round(gn(en.r*255,0,255))*65536+Math.round(gn(en.g*255,0,255))*256+Math.round(gn(en.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=mi){de.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==mi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(ga);const n=Co(Zi.h,ga.h,e),i=Co(Zi.s,ga.s,e),s=Co(Zi.l,ga.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ue;ue.NAMES=gm;let Lv=0;class Yo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Is,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hl extends Yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new X,va=new pe;class Vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vf&&(t.usage=this.usage),t}}class vm extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xm extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ln extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dv=0;const qn=new Be,rc=new An,ms=new X,Dn=new qo,so=new qo,Ye=new X;class ni extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fm(t)?xm:vm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Dn.min,so.min),Dn.expandByPoint(Ye),Ye.addVectors(Dn.max,so.max),Dn.expandByPoint(Ye)):(Dn.expandByPoint(so.min),Dn.expandByPoint(so.max))}Dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ye.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Ye.add(ms)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new X,l[C]=new X;const c=new X,u=new X,f=new X,h=new pe,d=new pe,_=new pe,g=new X,p=new X;function m(C,L,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,L),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(T),a[C].add(g),a[L].add(g),a[v].add(g),l[C].add(p),l[L].add(p),l[v].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,L=x.length;C<L;++C){const v=x[C],T=v.start,I=v.count;for(let B=T,W=T+I;B<W;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new X,M=new X,A=new X,b=new X;function y(C){A.fromBufferAttribute(i,C),b.copy(A);const L=a[C];S.copy(L),S.sub(A.multiplyScalar(A.dot(L))).normalize(),M.crossVectors(b,L);const T=M.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,L=x.length;C<L;++C){const v=x[C],T=v.start,I=v.count;for(let B=T,W=T+I;B<W;B+=3)y(t.getX(B+0)),y(t.getX(B+1)),y(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new Vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ni,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uf=new Be,Mr=new mm,xa=new xl,Nf=new X,Sa=new X,Ma=new X,ya=new X,sc=new X,Ea=new X,Of=new X,Ta=new X;class ti extends An{constructor(t=new ni,e=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(sc.fromBufferAttribute(f,t),o?Ea.addScaledVector(sc,u):Ea.addScaledVector(sc.sub(e),u))}e.add(Ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),Mr.copy(t.ray).recast(t.near),!(xa.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(xa,Nf)===null||Mr.origin.distanceToSquared(Nf)>(t.far-t.near)**2))&&(Uf.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=x,A=S;M<A;M+=3){const b=a.getX(M),y=a.getX(M+1),C=a.getX(M+2);i=ba(this,m,t,n,c,u,f,b,y,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);i=ba(this,o,t,n,c,u,f,x,S,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=x,A=S;M<A;M+=3){const b=M,y=M+1,C=M+2;i=ba(this,m,t,n,c,u,f,b,y,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,S=p+1,M=p+2;i=ba(this,o,t,n,c,u,f,x,S,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Iv(r,t,e,n,i,s,o,a){let l;if(t.side===bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===pr,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:r}}function ba(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Sa),r.getVertexPosition(l,Ma),r.getVertexPosition(c,ya);const u=Iv(r,t,e,n,Sa,Ma,ya,Of);if(u){const f=new X;ci.getBarycoord(Of,Sa,Ma,ya,f),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,f,new pe)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,f,new pe)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};ci.getNormal(Sa,Ma,ya,h.normal),u.face=h,u.barycoord=f}return u}class $o extends ni{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function _(g,p,m,x,S,M,A,b,y,C,L){const v=M/y,T=A/C,I=M/2,B=A/2,W=b/2,Y=y+1,k=C+1;let q=0,V=0;const it=new X;for(let P=0;P<k;P++){const at=P*T-B;for(let zt=0;zt<Y;zt++){const qt=zt*v-I;it[g]=qt*x,it[p]=at*S,it[m]=W,c.push(it.x,it.y,it.z),it[g]=0,it[p]=0,it[m]=b>0?1:-1,u.push(it.x,it.y,it.z),f.push(zt/y),f.push(1-P/C),q+=1}}for(let P=0;P<C;P++)for(let at=0;at<y;at++){const zt=h+at+Y*P,qt=h+at+Y*(P+1),$=h+(at+1)+Y*(P+1),Q=h+(at+1)+Y*P;l.push(zt,qt,Q),l.push(qt,$,Q),V+=6}a.addGroup(d,V,L),d+=V,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function fn(r){const t={};for(let e=0;e<r.length;e++){const n=Ys(r[e]);for(const i in n)t[i]=n[i]}return t}function Uv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Sm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Nv={clone:Ys,merge:fn};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mm extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new X,Ff=new pe,Bf=new pe;class Zn extends Mm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Bf),e.subVectors(Bf,Ff)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,gs=1;class Bv extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn(_s,gs,t,e);i.layers=this.layers,this.add(i);const s=new Zn(_s,gs,t,e);s.layers=this.layers,this.add(s);const o=new Zn(_s,gs,t,e);o.layers=this.layers,this.add(o);const a=new Zn(_s,gs,t,e);a.layers=this.layers,this.add(a);const l=new Zn(_s,gs,t,e);l.layers=this.layers,this.add(l);const c=new Zn(_s,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ym extends wn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zv extends jr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ym(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $o(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:lr});s.uniforms.tEquirect.value=e;const o=new ti(i,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=li),new Bv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const oc=new X,kv=new X,Hv=new jt;class Rr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oc.subVectors(n,e).cross(kv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hv.getNormalMatrix(t),i=this.coplanarPoint(oc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new xl,wa=new X;class Em{constructor(t=new Rr,e=new Rr,n=new Rr,i=new Rr,s=new Rr,o=new Rr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],x=i[13],S=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-d,M-m).normalize(),n[1].setComponents(l+s,h+c,p+d,M+m).normalize(),n[2].setComponents(l+o,h+u,p+_,M+x).normalize(),n[3].setComponents(l-o,h-u,p-_,M-x).normalize(),n[4].setComponents(l-a,h-f,p-g,M-S).normalize(),e===Fi)n[5].setComponents(l+a,h+f,p+g,M+S).normalize();else if(e===cl)n[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Vv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Sl extends ni{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const x=m*h-o;for(let S=0;S<c;S++){const M=S*f-s;_.push(M,-x,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const S=x+c*m,M=x+c*(m+1),A=x+1+c*(m+1),b=x+1+c*m;d.push(S,M,b),d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
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
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nx=`#ifdef USE_IRIDESCENCE
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
#endif`,ix=`#ifdef USE_BUMPMAP
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fx=`#define PI 3.141592653589793
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
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,px=`vec3 transformedNormal = objectNormal;
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
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
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
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
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
#endif`,Hx=`struct PhysicalMaterial {
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
}`,Vx=`
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jx=`#if defined( USE_POINTS_UV )
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
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,jS=`#define DISTANCE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,eM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
}`,oM=`#define MATCAP
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
}`,aM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:$v,aomap_fragment:Kv,aomap_pars_fragment:Zv,batching_pars_vertex:jv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:tx,bsdfs:ex,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:fx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:_x,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:Sx,envmap_fragment:Mx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Ex,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Nx,envmap_vertex:bx,fog_vertex:wx,fog_pars_vertex:Ax,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Lx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Ux,lights_toon_fragment:Ox,lights_toon_pars_fragment:Fx,lights_phong_fragment:Bx,lights_phong_pars_fragment:zx,lights_physical_fragment:kx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:$x,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:jx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:tS,morphinstance_vertex:eS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:oS,normal_fragment_maps:aS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:_S,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:xS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:bS,shadowmap_vertex:wS,shadowmask_pars_fragment:AS,skinbase_vertex:RS,skinning_pars_vertex:CS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:NS,transmission_fragment:OS,transmission_pars_fragment:FS,uv_pars_fragment:BS,uv_pars_vertex:zS,uv_vertex:kS,worldpos_vertex:HS,background_vert:VS,background_frag:GS,backgroundCube_vert:WS,backgroundCube_frag:XS,cube_vert:qS,cube_frag:YS,depth_vert:$S,depth_frag:KS,distanceRGBA_vert:ZS,distanceRGBA_frag:jS,equirect_vert:JS,equirect_frag:QS,linedashed_vert:tM,linedashed_frag:eM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:fM,meshphysical_frag:dM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:_M,points_frag:gM,shadow_vert:vM,shadow_frag:xM,sprite_vert:SM,sprite_frag:MM},mt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},_i={basic:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:fn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:fn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:fn([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:fn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:fn([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:fn([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:fn([mt.common,mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:fn([mt.lights,mt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};_i.physical={uniforms:fn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Aa={r:0,b:0,g:0},Er=new Vi,yM=new Be;function EM(r,t,e,n,i,s,o){const a=new ue(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function g(x){let S=!1;const M=_(x);M===null?m(a,l):M&&M.isColor&&(m(M,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,S){const M=_(S);M&&(M.isCubeTexture||M.mapping===gl)?(u===void 0&&(u=new ti(new $o(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ys(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(S.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(Er)),u.material.toneMapped=de.getTransfer(M.colorSpace)!==Te,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ti(new Sl(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ys(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==Te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,S){x.getRGB(Aa,Sm(r)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:g,addToRenderList:p}}function TM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,T,I,B,W){let Y=!1;const k=f(B,I,T);s!==k&&(s=k,c(s.object)),Y=d(v,B,I,W),Y&&_(v,B,I,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(v,T,I,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,T,I){const B=I.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let Y=W[T.id];Y===void 0&&(Y={},W[T.id]=Y);let k=Y[B];return k===void 0&&(k=h(l()),Y[B]=k),k}function h(v){const T=[],I=[],B=[];for(let W=0;W<e;W++)T[W]=0,I[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,T,I,B){const W=s.attributes,Y=T.attributes;let k=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){const P=W[V];let at=Y[V];if(at===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),P===void 0||P.attribute!==at||at&&P.data!==at.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function _(v,T,I,B){const W={},Y=T.attributes;let k=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){let P=Y[V];P===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const at={};at.attribute=P,P&&P.data&&(at.data=P.data),W[V]=at,k++}s.attributes=W,s.attributesNum=k,s.index=B}function g(){const v=s.newAttributes;for(let T=0,I=v.length;T<I;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const I=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;I[v]=1,B[v]===0&&(r.enableVertexAttribArray(v),B[v]=1),W[v]!==T&&(r.vertexAttribDivisor(v,T),W[v]=T)}function x(){const v=s.newAttributes,T=s.enabledAttributes;for(let I=0,B=T.length;I<B;I++)T[I]!==v[I]&&(r.disableVertexAttribArray(I),T[I]=0)}function S(v,T,I,B,W,Y,k){k===!0?r.vertexAttribIPointer(v,T,I,W,Y):r.vertexAttribPointer(v,T,I,B,W,Y)}function M(v,T,I,B){g();const W=B.attributes,Y=I.getAttributes(),k=T.defaultAttributeValues;for(const q in Y){const V=Y[q];if(V.location>=0){let it=W[q];if(it===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const P=it.normalized,at=it.itemSize,zt=t.get(it);if(zt===void 0)continue;const qt=zt.buffer,$=zt.type,Q=zt.bytesPerElement,ft=$===r.INT||$===r.UNSIGNED_INT||it.gpuType===lh;if(it.isInterleavedBufferAttribute){const ot=it.data,wt=ot.stride,yt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)p(V.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let Xt=0;Xt<V.locationSize;Xt++)S(V.location+Xt,at/V.locationSize,$,P,wt*Q,(yt+at/V.locationSize*Xt)*Q,ft)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot,it.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let ot=0;ot<V.locationSize;ot++)S(V.location+ot,at/V.locationSize,$,P,at*Q,at/V.locationSize*ot*Q,ft)}}else if(k!==void 0){const P=k[q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}x()}function A(){C();for(const v in n){const T=n[v];for(const I in T){const B=T[I];for(const W in B)u(B[W].object),delete B[W];delete T[I]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const I in T){const B=T[I];for(const W in B)u(B[W].object),delete B[W];delete T[I]}delete n[v.id]}function y(v){for(const T in n){const I=n[T];if(I[v.id]===void 0)continue;const B=I[v.id];for(const W in B)u(B[W].object),delete B[W];delete I[v.id]}}function C(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function bM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==ui&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const C=y===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Hi&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Oi&&!C)}function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const y=t.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:A,maxSamples:b}}function AM(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Rr,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,S=x*4;let M=m.clippingState||null;l.value=M,M=u(_,h,S,d);for(let A=0;A!==S;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,M=d;S!==g;++S,M+=4)o.copy(f[S]).applyMatrix4(x,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function RM(r){let t=new WeakMap;function e(o,a){return a===Jc?o.mapping=Gs:a===Qc&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zv(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class CM extends Mm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bs=4,zf=[.125,.215,.35,.446,.526,.582],Lr=20,ac=new CM,kf=new ue;let lc=null,cc=0,uc=0,hc=!1;const Cr=(1+Math.sqrt(5))/2,vs=1/Cr,Hf=[new X(-Cr,vs,0),new X(Cr,vs,0),new X(-vs,0,Cr),new X(vs,0,Cr),new X(0,Cr,-vs),new X(0,Cr,vs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Vf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Wo,format:ui,colorSpace:_r,depthBuffer:!1},i=Gf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(s)),this._blurMaterial=LM(s,t,e)}return i}_compileMaterial(t){const e=new ti(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,i){const a=new Zn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(kf),u.toneMapping=cr,u.autoClear=!1;const d=new hl({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new ti(new $o,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(kf),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Ra(i,x*S,m>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hf[(i-s-1)%Hf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ti(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Lr;p>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Lr}`);const m=[];let x=0;for(let y=0;y<Lr;++y){const C=y/g,L=Math.exp(-C*C/2);m.push(L),y===0?x+=L:y<p&&(x+=2*L)}for(let y=0;y<m.length;y++)m[y]=m[y]/x;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const M=this._sizeLods[i],A=3*M*(i>S-bs?i-S+bs:0),b=4*(this._cubeSize-M);Ra(e,A,b,3*M,2*M),l.setRenderTarget(e),l.render(f,ac)}}function PM(r){const t=[],e=[],n=[];let i=r;const s=r-bs+1+zf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-bs?l=zf[o-r+bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),S=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let b=0;b<d;b++){const y=b%3*2/3-1,C=b>2?0:-1,L=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(L,g*_*b),S.set(h,p*_*b);const v=[b,b,b,b,b,b];M.set(v,m*_*b)}const A=new ni;A.setAttribute("position",new Vn(x,g)),A.setAttribute("uv",new Vn(S,p)),A.setAttribute("faceIndex",new Vn(M,m)),t.push(A),i>bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gf(r,t,e){const n=new jr(r,t,e);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function LM(r,t,e){const n=new Float32Array(Lr),i=new X(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_h(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Wf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Xf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function DM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===Qc,u=l===Gs||l===Ws;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Vf(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Vf(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function IM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&qa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function UM(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let S=0,M=x.length;S<M;S+=3){const A=x[S+0],b=x[S+1],y=x[S+2];h.push(A,b,b,y,y,A)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,M=x.length/3-1;S<M;S+=3){const A=S+0,b=S+1,y=S+2;h.push(A,b,b,y,y,A)}}else return;const p=new(fm(h)?xm:vm)(h,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function NM(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function f(h,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x];for(let x=0;x<g.length;x++)e.update(m,n,g[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function OM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function FM(r,t,e){const n=new WeakMap,i=new Oe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const y=new Float32Array(A*b*4*f),C=new pm(y,A,b,f);C.type=Oi,C.needsUpdate=!0;const L=M*4;for(let T=0;T<f;T++){const I=m[T],B=x[T],W=S[T],Y=A*b*4*T;for(let k=0;k<I.count;k++){const q=k*L;_===!0&&(i.fromBufferAttribute(I,k),y[Y+q+0]=i.x,y[Y+q+1]=i.y,y[Y+q+2]=i.z,y[Y+q+3]=0),g===!0&&(i.fromBufferAttribute(B,k),y[Y+q+4]=i.x,y[Y+q+5]=i.y,y[Y+q+6]=i.z,y[Y+q+7]=0),p===!0&&(i.fromBufferAttribute(W,k),y[Y+q+8]=i.x,y[Y+q+9]=i.y,y[Y+q+10]=i.z,y[Y+q+11]=W.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new pe(A,b)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function BM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class bm extends wn{constructor(t,e,n,i,s,o,a,l,c,u=Us){if(u!==Us&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=Zr),n===void 0&&u===qs&&(n=Xs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wm=new wn,qf=new bm(1,1),Am=new pm,Rm=new Ev,Cm=new ym,Yf=[],$f=[],Kf=new Float32Array(16),Zf=new Float32Array(9),jf=new Float32Array(4);function Zs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Yf[i];if(s===void 0&&(s=new Float32Array(i),Yf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ml(r,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function zM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function kM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function HM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function VM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function GM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;jf.set(n),r.uniformMatrix2fv(this.addr,!1,jf),Xe(e,n)}}function WM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Zf.set(n),r.uniformMatrix3fv(this.addr,!1,Zf),Xe(e,n)}}function XM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Kf.set(n),r.uniformMatrix4fv(this.addr,!1,Kf),Xe(e,n)}}function qM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function YM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function $M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function KM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function ZM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function JM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function QM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function ty(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(qf.compareFunction=hm,s=qf):s=wm,e.setTexture2D(t||s,i)}function ey(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rm,i)}function ny(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cm,i)}function iy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Am,i)}function ry(r){switch(r){case 5126:return zM;case 35664:return kM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return jM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function sy(r,t){r.uniform1fv(this.addr,t)}function oy(r,t){const e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function ay(r,t){const e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function ly(r,t){const e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function cy(r,t){const e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function uy(r,t){const e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function hy(r,t){const e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fy(r,t){r.uniform1iv(this.addr,t)}function dy(r,t){r.uniform2iv(this.addr,t)}function py(r,t){r.uniform3iv(this.addr,t)}function my(r,t){r.uniform4iv(this.addr,t)}function _y(r,t){r.uniform1uiv(this.addr,t)}function gy(r,t){r.uniform2uiv(this.addr,t)}function vy(r,t){r.uniform3uiv(this.addr,t)}function xy(r,t){r.uniform4uiv(this.addr,t)}function Sy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||wm,s[o])}function My(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rm,s[o])}function yy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Cm,s[o])}function Ey(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Am,s[o])}function Ty(r){switch(r){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return uy;case 35676:return hy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return _y;case 36294:return gy;case 36295:return vy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Ey}}class by{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ry(e.type)}}class wy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}}class Ay{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Jf(r,t){r.seq.push(t),r.map[t.id]=t}function Ry(r,t,e){const n=r.name,i=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jf(e,c===void 0?new by(a,r,t):new wy(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Ay(a),Jf(e,f)),e=f}}}class Ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ry(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Qf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Cy=37297;let Py=0;function Ly(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Dy(r){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r);let n;switch(t===e?n="":t===ll&&e===al?n="LinearDisplayP3ToLinearSRGB":t===al&&e===ll&&(n="LinearSRGBToLinearDisplayP3"),r){case _r:case vl:return[n,"LinearTransferOETF"];case mi:case ph:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function td(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ly(r.getShaderSource(t),o)}else return i}function Iy(r,t){const e=Dy(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Uy(r,t){let e;switch(t){case I0:e="Linear";break;case U0:e="Reinhard";break;case N0:e="Cineon";break;case O0:e="ACESFilmic";break;case B0:e="AgX";break;case z0:e="Neutral";break;case F0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ca=new X;function Ny(){de.getLuminanceCoefficients(Ca);const r=Ca.x.toFixed(4),t=Ca.y.toFixed(4),e=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function Fy(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function By(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function po(r){return r!==""}function ed(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(r){return r.replace(zy,Hy)}const ky=new Map;function Hy(r,t){let e=Zt[t];if(e===void 0){const n=ky.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ru(e)}const Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(r){return r.replace(Vy,Gy)}function Gy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===f0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Xy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Yy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qp:t="ENVMAP_BLENDING_MULTIPLY";break;case L0:t="ENVMAP_BLENDING_MIX";break;case D0:t="ENVMAP_BLENDING_ADD";break}return t}function $y(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ky(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Wy(e),c=Xy(e),u=qy(e),f=Yy(e),h=$y(e),d=Oy(e),_=Fy(s),g=i.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(po).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(po).join(`
`),m.length>0&&(m+=`
`)):(p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),m=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Zt.tonemapping_pars_fragment:"",e.toneMapping!==cr?Uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Iy("linearToOutputTexel",e.outputColorSpace),Ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(po).join(`
`)),o=Ru(o),o=ed(o,e),o=nd(o,e),a=Ru(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+p+o,M=x+m+a,A=Qf(i,i.VERTEX_SHADER,S),b=Qf(i,i.FRAGMENT_SHADER,M);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function y(T){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(b).trim();let Y=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const q=td(i,A,"vertex"),V=td(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+q+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||W==="")&&(k=!1);k&&(T.diagnostics={runnable:Y,programLog:I,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(A),i.deleteShader(b),C=new Ya(i,g),L=By(i,g)}let C;this.getUniforms=function(){return C===void 0&&y(this),C};let L;this.getAttributes=function(){return L===void 0&&y(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Cy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Py++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let Zy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jy(t),e.set(t,n)),n}}class Jy{constructor(t){this.id=Zy++,this.code=t,this.usedTimes=0}}function Qy(r,t,e,n,i,s,o){const a=new _m,l=new jy,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,I,B,W){const Y=B.fog,k=W.geometry,q=v.isMeshStandardMaterial?B.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),it=V&&V.mapping===gl?V.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,zt=at!==void 0?at.length:0;let qt=0;k.morphAttributes.position!==void 0&&(qt=1),k.morphAttributes.normal!==void 0&&(qt=2),k.morphAttributes.color!==void 0&&(qt=3);let $,Q,ft,ot;if(P){const Rt=_i[P];$=Rt.vertexShader,Q=Rt.fragmentShader}else $=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const wt=r.getRenderTarget(),yt=W.isInstancedMesh===!0,Xt=W.isBatchedMesh===!0,Gt=!!v.map,Nt=!!v.matcap,D=!!V,se=!!v.aoMap,Ot=!!v.lightMap,kt=!!v.bumpMap,F=!!v.normalMap,Jt=!!v.displacementMap,Lt=!!v.emissiveMap,R=!!v.metalnessMap,E=!!v.roughnessMap,G=v.anisotropy>0,j=v.clearcoat>0,et=v.dispersion>0,Z=v.iridescence>0,St=v.sheen>0,rt=v.transmission>0,dt=G&&!!v.anisotropyMap,Vt=j&&!!v.clearcoatMap,nt=j&&!!v.clearcoatNormalMap,vt=j&&!!v.clearcoatRoughnessMap,xt=Z&&!!v.iridescenceMap,It=Z&&!!v.iridescenceThicknessMap,gt=St&&!!v.sheenColorMap,Yt=St&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,oe=!!v.specularColorMap,U=!!v.specularIntensityMap,tt=rt&&!!v.transmissionMap,K=rt&&!!v.thicknessMap,J=!!v.gradientMap,lt=!!v.alphaMap,ct=v.alphaTest>0,$t=!!v.alphaHash,ve=!!v.extensions;let be=cr;v.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(be=r.toneMapping);const ie={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Xt,batchingColor:Xt&&W._colorsTexture!==null,instancing:yt,instancingColor:yt&&W.instanceColor!==null,instancingMorph:yt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:_r,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Nt,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:it,aoMap:se,lightMap:Ot,bumpMap:kt,normalMap:F,displacementMap:d&&Jt,emissiveMap:Lt,normalMapObjectSpace:F&&v.normalMapType===W0,normalMapTangentSpace:F&&v.normalMapType===G0,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:dt,clearcoat:j,clearcoatMap:Vt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:Z,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:St,sheenColorMap:gt,sheenRoughnessMap:Yt,specularMap:Ft,specularColorMap:oe,specularIntensityMap:U,transmission:rt,transmissionMap:tt,thicknessMap:K,gradientMap:J,opaque:v.transparent===!1&&v.blending===Is&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ct,alphaHash:$t,combine:v.combine,mapUv:Gt&&p(v.map.channel),aoMapUv:se&&p(v.aoMap.channel),lightMapUv:Ot&&p(v.lightMap.channel),bumpMapUv:kt&&p(v.bumpMap.channel),normalMapUv:F&&p(v.normalMap.channel),displacementMapUv:Jt&&p(v.displacementMap.channel),emissiveMapUv:Lt&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:E&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Vt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ft&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(F||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(Gt||lt),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:qt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function x(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(S(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){const T=g[v.type];let I;if(T){const B=_i[T];I=Nv.clone(B.uniforms)}else I=v.uniforms;return I}function b(v,T){let I;for(let B=0,W=u.length;B<W;B++){const Y=u[B];if(Y.cacheKey===T){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Ky(r,T,v,s),u.push(I)),I}function y(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:A,acquireProgram:b,releaseProgram:y,releaseShaderCache:C,programs:u,dispose:L}}function tE(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function eE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function sd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function od(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function a(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||eE),n.length>1&&n.sort(h||sd),i.length>1&&i.sort(h||sd)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function nE(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new od,r.set(n,[o])):i>=s.length?(o=new od,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function iE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new ue};break;case"SpotLight":e={position:new X,direction:new X,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function rE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let sE=0;function oE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aE(r){const t=new iE,e=rE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Be,o=new Be;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,x=0,S=0,M=0,A=0,b=0,y=0;c.sort(oE);for(let L=0,v=c.length;L<v;L++){const T=c[L],I=T.color,B=T.intensity,W=T.distance,Y=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*B,f+=I.g*B,h+=I.b*B;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],B);y++}else if(T.isDirectionalLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,V=e.get(T);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=T.shadow.matrix,x++}n.directional[d]=k,d++}else if(T.isSpotLight){const k=t.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(I).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[g]=k;const q=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,q.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[g]=q.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,M++}g++}else if(T.isRectAreaLight){const k=t.get(T);k.color.copy(I).multiplyScalar(B),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=k,p++}else if(T.isPointLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){const q=T.shadow,V=e.get(T);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=T.shadow.matrix,S++}n.point[_]=k,_++}else if(T.isHemisphereLight){const k=t.get(T);k.skyColor.copy(T.color).multiplyScalar(B),k.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==S||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=y,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=S,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=y,n.version=sE++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const S=c[m];if(S.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function ad(r){const t=new aE(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lE(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ad(r),t.set(i,[a])):s>=o.length?(a=new ad(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class cE extends Yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uE extends Yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
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
}`;function dE(r,t,e){let n=new Em;const i=new pe,s=new pe,o=new Oe,a=new cE({depthPacking:V0}),l=new uE,c={},u=e.maxTextureSize,f={[pr]:bn,[bn]:pr,[Ui]:Ui},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:hE,fragmentShader:fE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ti(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let m=this.type;this.render=function(b,y,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(lr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=m!==Pi&&this.type===Pi,W=m===Pi&&this.type!==Pi;for(let Y=0,k=b.length;Y<k;Y++){const q=b[Y],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||B===!0||W===!0){const at=this.type!==Pi?{minFilter:Qn,magFilter:Qn}:{};V.map!==null&&V.map.dispose(),V.map=new jr(i.x,i.y,at),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let at=0;at<P;at++){const zt=V.getViewport(at);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),I.viewport(o),V.updateMatrices(q,at),n=V.getFrustum(),M(y,C,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&x(V,C),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,v,T)};function x(b,y){const C=t.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jr(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(y,null,C,h,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(y,null,C,d,g,null)}function S(b,y,C,L){let v=null;const T=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)v=T;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=v.uuid,B=y.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let Y=W[B];Y===void 0&&(Y=v.clone(),W[B]=Y,y.addEventListener("dispose",A)),v=Y}if(v.visible=y.visible,v.wireframe=y.wireframe,L===Pi?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:f[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=C}return v}function M(b,y,C,L,v){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Pi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const B=t.update(b),W=b.material;if(Array.isArray(W)){const Y=B.groups;for(let k=0,q=Y.length;k<q;k++){const V=Y[k],it=W[V.materialIndex];if(it&&it.visible){const P=S(b,it,L,v);b.onBeforeShadow(r,b,y,C,B,P,V),r.renderBufferDirect(C,null,B,P,b,V),b.onAfterShadow(r,b,y,C,B,P,V)}}}else if(W.visible){const Y=S(b,W,L,v);b.onBeforeShadow(r,b,y,C,B,Y,null),r.renderBufferDirect(C,null,B,Y,b,null),b.onAfterShadow(r,b,y,C,B,Y,null)}}const I=b.children;for(let B=0,W=I.length;B<W;B++)M(I[B],y,C,L,v)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const L=c[C],v=b.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const pE={[Xc]:qc,[Yc]:Zc,[$c]:jc,[Vs]:Kc,[qc]:Xc,[Zc]:Yc,[jc]:$c,[Kc]:Vs};function mE(r){function t(){let U=!1;const tt=new Oe;let K=null;const J=new Oe(0,0,0,0);return{setMask:function(lt){K!==lt&&!U&&(r.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){U=lt},setClear:function(lt,ct,$t,ve,be){be===!0&&(lt*=ve,ct*=ve,$t*=ve),tt.set(lt,ct,$t,ve),J.equals(tt)===!1&&(r.clearColor(lt,ct,$t,ve),J.copy(tt))},reset:function(){U=!1,K=null,J.set(-1,0,0,0)}}}function e(){let U=!1,tt=!1,K=null,J=null,lt=null;return{setReversed:function(ct){tt=ct},setTest:function(ct){ct?ft(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(ct){K!==ct&&!U&&(r.depthMask(ct),K=ct)},setFunc:function(ct){if(tt&&(ct=pE[ct]),J!==ct){switch(ct){case Xc:r.depthFunc(r.NEVER);break;case qc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case Kc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ct}},setLocked:function(ct){U=ct},setClear:function(ct){lt!==ct&&(r.clearDepth(ct),lt=ct)},reset:function(){U=!1,K=null,J=null,lt=null}}}function n(){let U=!1,tt=null,K=null,J=null,lt=null,ct=null,$t=null,ve=null,be=null;return{setTest:function(ie){U||(ie?ft(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ie){tt!==ie&&!U&&(r.stencilMask(ie),tt=ie)},setFunc:function(ie,Rt,Tt){(K!==ie||J!==Rt||lt!==Tt)&&(r.stencilFunc(ie,Rt,Tt),K=ie,J=Rt,lt=Tt)},setOp:function(ie,Rt,Tt){(ct!==ie||$t!==Rt||ve!==Tt)&&(r.stencilOp(ie,Rt,Tt),ct=ie,$t=Rt,ve=Tt)},setLocked:function(ie){U=ie},setClear:function(ie){be!==ie&&(r.clearStencil(ie),be=ie)},reset:function(){U=!1,tt=null,K=null,J=null,lt=null,ct=null,$t=null,ve=null,be=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,x=null,S=null,M=null,A=null,b=new ue(0,0,0),y=0,C=!1,L=null,v=null,T=null,I=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,k=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=k>=2);let V=null,it={};const P=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),zt=new Oe().fromArray(P),qt=new Oe().fromArray(at);function $(U,tt,K,J){const lt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(U,ct),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<K;$t++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(tt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ct}const Q={};Q[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ft(r.DEPTH_TEST),s.setFunc(Vs),Ot(!1),kt(df),ft(r.CULL_FACE),D(lr);function ft(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function ot(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function wt(U,tt){return u[U]!==tt?(r.bindFramebuffer(U,tt),u[U]=tt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function yt(U,tt){let K=h,J=!1;if(U){K=f.get(tt),K===void 0&&(K=[],f.set(tt,K));const lt=U.textures;if(K.length!==lt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,$t=lt.length;ct<$t;ct++)K[ct]=r.COLOR_ATTACHMENT0+ct;K.length=lt.length,J=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,J=!0);J&&r.drawBuffers(K)}function Xt(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const Gt={[Pr]:r.FUNC_ADD,[p0]:r.FUNC_SUBTRACT,[m0]:r.FUNC_REVERSE_SUBTRACT};Gt[_0]=r.MIN,Gt[g0]=r.MAX;const Nt={[v0]:r.ZERO,[x0]:r.ONE,[S0]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[w0]:r.SRC_ALPHA_SATURATE,[T0]:r.DST_COLOR,[y0]:r.DST_ALPHA,[M0]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[b0]:r.ONE_MINUS_DST_COLOR,[E0]:r.ONE_MINUS_DST_ALPHA,[A0]:r.CONSTANT_COLOR,[R0]:r.ONE_MINUS_CONSTANT_COLOR,[C0]:r.CONSTANT_ALPHA,[P0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(U,tt,K,J,lt,ct,$t,ve,be,ie){if(U===lr){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),U!==d0){if(U!==g||ie!==C){if((p!==Pr||S!==Pr)&&(r.blendEquation(r.FUNC_ADD),p=Pr,S=Pr),ie)switch(U){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pf:r.blendFunc(r.ONE,r.ONE);break;case mf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case mf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,x=null,M=null,A=null,b.set(0,0,0),y=0,g=U,C=ie}return}lt=lt||tt,ct=ct||K,$t=$t||J,(tt!==p||lt!==S)&&(r.blendEquationSeparate(Gt[tt],Gt[lt]),p=tt,S=lt),(K!==m||J!==x||ct!==M||$t!==A)&&(r.blendFuncSeparate(Nt[K],Nt[J],Nt[ct],Nt[$t]),m=K,x=J,M=ct,A=$t),(ve.equals(b)===!1||be!==y)&&(r.blendColor(ve.r,ve.g,ve.b,be),b.copy(ve),y=be),g=U,C=!1}function se(U,tt){U.side===Ui?ot(r.CULL_FACE):ft(r.CULL_FACE);let K=U.side===bn;tt&&(K=!K),Ot(K),U.blending===Is&&U.transparent===!1?D(lr):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Jt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){L!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),L=U)}function kt(U){U!==u0?(ft(r.CULL_FACE),U!==v&&(U===df?r.cullFace(r.BACK):U===h0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),v=U}function F(U){U!==T&&(Y&&r.lineWidth(U),T=U)}function Jt(U,tt,K){U?(ft(r.POLYGON_OFFSET_FILL),(I!==tt||B!==K)&&(r.polygonOffset(tt,K),I=tt,B=K)):ot(r.POLYGON_OFFSET_FILL)}function Lt(U){U?ft(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+W-1),V!==U&&(r.activeTexture(U),V=U)}function E(U,tt,K){K===void 0&&(V===null?K=r.TEXTURE0+W-1:K=V);let J=it[K];J===void 0&&(J={type:void 0,texture:void 0},it[K]=J),(J.type!==U||J.texture!==tt)&&(V!==K&&(r.activeTexture(K),V=K),r.bindTexture(U,tt||Q[U]),J.type=U,J.texture=tt)}function G(){const U=it[V];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){zt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function gt(U){qt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),qt.copy(U))}function Yt(U,tt){let K=l.get(tt);K===void 0&&(K=new WeakMap,l.set(tt,K));let J=K.get(U);J===void 0&&(J=r.getUniformBlockIndex(tt,U.name),K.set(U,J))}function Ft(U,tt){const J=l.get(tt).get(U);a.get(tt)!==J&&(r.uniformBlockBinding(tt,J,U.__bindingPointIndex),a.set(tt,J))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,it={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,x=null,S=null,M=null,A=null,b=new ue(0,0,0),y=0,C=!1,L=null,v=null,T=null,I=null,B=null,zt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ft,disable:ot,bindFramebuffer:wt,drawBuffers:yt,useProgram:Xt,setBlending:D,setMaterial:se,setFlipSided:Ot,setCullFace:kt,setLineWidth:F,setPolygonOffset:Jt,setScissorTest:Lt,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:vt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Vt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:It,viewport:gt,reset:oe}}function ld(r,t,e,n){const i=_E(n);switch(e){case rm:return r*t;case om:return r*t;case am:return r*t*2;case lm:return r*t/i.components*i.byteLength;case hh:return r*t/i.components*i.byteLength;case cm:return r*t*2/i.components*i.byteLength;case fh:return r*t*2/i.components*i.byteLength;case sm:return r*t*3/i.components*i.byteLength;case ui:return r*t*4/i.components*i.byteLength;case dh:return r*t*4/i.components*i.byteLength;case Ha:case Va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(t,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(t,8)/2;case ou:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case um:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wu:case Au:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _E(r){switch(r){case Hi:case em:return{byteLength:1,components:1};case ko:case nm:case Wo:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case Zr:case lh:case Oi:return{byteLength:4,components:1};case im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function gE(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return d?new OffscreenCanvas(R,E):ul("canvas")}function g(R,E,G){let j=1;const et=Lt(R);if((et.width>G||et.height>G)&&(j=G/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(j*et.width),St=Math.floor(j*et.height);f===void 0&&(f=_(Z,St));const rt=E?_(Z,St):f;return rt.width=Z,rt.height=St,rt.getContext("2d").drawImage(R,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+St+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Qn&&R.minFilter!==li}function m(R){r.generateMipmap(R)}function x(R,E,G,j,et=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),E===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const St=et?ol:de.getTransfer(j);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=St===Te?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(R,E){let G;return R?E===null||E===Zr||E===Xs?G=r.DEPTH24_STENCIL8:E===Oi?G=r.DEPTH32F_STENCIL8:E===ko&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===Xs?G=r.DEPTH_COMPONENT24:E===Oi?G=r.DEPTH_COMPONENT32F:E===ko&&(G=r.DEPTH_COMPONENT16),G}function M(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qn&&R.minFilter!==li?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),y(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),L(E)}function y(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,j=h.get(G);if(j){const et=j[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&C(R),Object.keys(j).length===0&&h.delete(G)}n.remove(R)}function C(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const G=R.source,j=h.get(G);delete j[E.__cacheKey],o.memory.textures--}function L(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let et=0;et<E.__webglFramebuffer[j].length;et++)r.deleteFramebuffer(E.__webglFramebuffer[j][et]);else r.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)r.deleteFramebuffer(E.__webglFramebuffer[j]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let j=0,et=G.length;j<et;j++){const Z=n.get(G[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(R)}let v=0;function T(){v=0}function I(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function B(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){const G=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(G,R,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){qt(G,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function k(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){qt(G,R,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function q(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const V={[tu]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[eu]:r.MIRRORED_REPEAT},it={[Qn]:r.NEAREST,[k0]:r.NEAREST_MIPMAP_NEAREST,[ca]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[zl]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},P={[X0]:r.NEVER,[j0]:r.ALWAYS,[q0]:r.LESS,[hm]:r.LEQUAL,[Y0]:r.EQUAL,[Z0]:r.GEQUAL,[$0]:r.GREATER,[K0]:r.NOTEQUAL};function at(R,E){if(E.type===Oi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===li||E.magFilter===zl||E.magFilter===ca||E.magFilter===Fr||E.minFilter===li||E.minFilter===zl||E.minFilter===ca||E.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,it[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qn||E.minFilter!==ca&&E.minFilter!==Fr||E.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function zt(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const j=E.source;let et=h.get(j);et===void 0&&(et={},h.set(j,et));const Z=B(E);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[Z].usedTimes++;const St=et[R.__cacheKey];St!==void 0&&(et[R.__cacheKey].usedTimes--,St.usedTimes===0&&C(E)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return G}function qt(R,E,G){let j=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=r.TEXTURE_3D);const et=zt(R,E),Z=E.source;e.bindTexture(j,R.__webglTexture,r.TEXTURE0+G);const St=n.get(Z);if(Z.version!==St.__version||et===!0){e.activeTexture(r.TEXTURE0+G);const rt=de.getPrimaries(de.workingColorSpace),dt=E.colorSpace===Qi?null:de.getPrimaries(E.colorSpace),Vt=E.colorSpace===Qi||rt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let nt=g(E.image,!1,i.maxTextureSize);nt=Jt(E,nt);const vt=s.convert(E.format,E.colorSpace),xt=s.convert(E.type);let It=x(E.internalFormat,vt,xt,E.colorSpace,E.isVideoTexture);at(j,E);let gt;const Yt=E.mipmaps,Ft=E.isVideoTexture!==!0,oe=St.__version===void 0||et===!0,U=Z.dataReady,tt=M(E,nt);if(E.isDepthTexture)It=S(E.format===qs,E.type),oe&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,null));else if(E.isDataTexture)if(Yt.length>0){Ft&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,K,It,gt.width,gt.height,0,vt,xt,gt.data);E.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,xt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,Yt[0].width,Yt[0].height,nt.depth);for(let K=0,J=Yt.length;K<J;K++)if(gt=Yt[K],E.format!==ui)if(vt!==null)if(Ft){if(U)if(E.layerUpdates.size>0){const lt=ld(gt.width,gt.height,E.format,E.type);for(const ct of E.layerUpdates){const $t=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ct,gt.width,gt.height,1,vt,$t,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,nt.depth,vt,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,nt.depth,vt,xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,nt.depth,0,vt,xt,gt.data)}else{Ft&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],E.format!==ui?vt!==null?Ft?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,K,It,gt.width,gt.height,0,vt,xt,gt.data)}else if(E.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,nt.width,nt.height,nt.depth),U)if(E.layerUpdates.size>0){const K=ld(nt.width,nt.height,E.format,E.type);for(const J of E.layerUpdates){const lt=nt.data.subarray(J*K/nt.data.BYTES_PER_ELEMENT,(J+1)*K/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,xt,lt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(E.isData3DTexture)Ft?(oe&&e.texStorage3D(r.TEXTURE_3D,tt,It,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(E.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height);else{let K=nt.width,J=nt.height;for(let lt=0;lt<tt;lt++)e.texImage2D(r.TEXTURE_2D,lt,It,K,J,0,vt,xt,null),K>>=1,J>>=1}}else if(Yt.length>0){if(Ft&&oe){const K=Lt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,tt,It,K.width,K.height)}for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,vt,xt,gt):e.texImage2D(r.TEXTURE_2D,K,It,vt,xt,gt);E.generateMipmaps=!1}else if(Ft){if(oe){const K=Lt(nt);e.texStorage2D(r.TEXTURE_2D,tt,It,K.width,K.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,xt,nt)}else e.texImage2D(r.TEXTURE_2D,0,It,vt,xt,nt);p(E)&&m(j),St.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function $(R,E,G){if(E.image.length!==6)return;const j=zt(R,E),et=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const Z=n.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(r.TEXTURE0+G);const St=de.getPrimaries(de.workingColorSpace),rt=E.colorSpace===Qi?null:de.getPrimaries(E.colorSpace),dt=E.colorSpace===Qi||St===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Vt&&!nt?vt[J]=g(E.image[J],!0,i.maxCubemapSize):vt[J]=nt?E.image[J].image:E.image[J],vt[J]=Jt(E,vt[J]);const xt=vt[0],It=s.convert(E.format,E.colorSpace),gt=s.convert(E.type),Yt=x(E.internalFormat,It,gt,E.colorSpace),Ft=E.isVideoTexture!==!0,oe=Z.__version===void 0||j===!0,U=et.dataReady;let tt=M(E,xt);at(r.TEXTURE_CUBE_MAP,E);let K;if(Vt){Ft&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,xt.width,xt.height);for(let J=0;J<6;J++){K=vt[J].mipmaps;for(let lt=0;lt<K.length;lt++){const ct=K[lt];E.format!==ui?It!==null?Ft?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,gt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,It,gt,ct.data)}}}else{if(K=E.mipmaps,Ft&&oe){K.length>0&&tt++;const J=Lt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,It,gt,vt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,vt[J].width,vt[J].height,0,It,gt,vt[J].data);for(let lt=0;lt<K.length;lt++){const $t=K[lt].image[J].image;Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,$t.width,$t.height,It,gt,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,$t.width,$t.height,0,It,gt,$t.data)}}else{Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,vt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,It,gt,vt[J]);for(let lt=0;lt<K.length;lt++){const ct=K[lt];Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,It,gt,ct.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,It,gt,ct.image[J])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),Z.__version=et.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,G,j,et,Z){const St=s.convert(G.format,G.colorSpace),rt=s.convert(G.type),dt=x(G.internalFormat,St,rt,G.colorSpace);if(!n.get(E).__hasExternalTextures){const nt=Math.max(1,E.width>>Z),vt=Math.max(1,E.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,dt,nt,vt,E.depth,0,St,rt,null):e.texImage2D(et,Z,dt,nt,vt,0,St,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),kt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,et,n.get(G).__webglTexture,0,Ot(E)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,et,n.get(G).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(R,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const j=E.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=S(E.stencilBuffer,et),St=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Ot(E);kt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Z,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,R)}else{const j=E.textures;for(let et=0;et<j.length;et++){const Z=j[et],St=s.convert(Z.format,Z.colorSpace),rt=s.convert(Z.type),dt=x(Z.internalFormat,St,rt,Z.colorSpace),Vt=Ot(E);G&&kt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,dt,E.width,E.height):kt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt,dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const j=n.get(E.depthTexture).__webglTexture,et=Ot(E);if(E.depthTexture.format===Us)kt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(E.depthTexture.format===qs)kt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=r.createRenderbuffer(),ft(E.__webglDepthbuffer[j],R,!1);else{const et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ft(E.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(R,E,G){const j=n.get(R);E!==void 0&&Q(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&wt(R)}function Xt(R){const E=R.texture,G=n.get(R),j=n.get(E);R.addEventListener("dispose",b);const et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[rt]=[];for(let dt=0;dt<E.mipmaps.length;dt++)G.__webglFramebuffer[rt][dt]=r.createFramebuffer()}else G.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)G.__webglFramebuffer[rt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(St)for(let rt=0,dt=et.length;rt<dt;rt++){const Vt=n.get(et[rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&kt(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let rt=0;rt<et.length;rt++){const dt=et[rt];G.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[rt]);const Vt=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),vt=x(dt.internalFormat,Vt,nt,dt.colorSpace,R.isXRRenderTarget===!0),xt=Ot(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,G.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),at(r.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Q(G.__webglFramebuffer[rt][dt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else Q(G.__webglFramebuffer[rt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,dt=et.length;rt<dt;rt++){const Vt=et[rt],nt=n.get(Vt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),at(r.TEXTURE_2D,Vt),Q(G.__webglFramebuffer,R,Vt,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),p(Vt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),at(rt,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Q(G.__webglFramebuffer[dt],R,E,r.COLOR_ATTACHMENT0,rt,dt);else Q(G.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,rt,0);p(E)&&m(rt),e.unbindTexture()}R.depthBuffer&&wt(R)}function Gt(R){const E=R.textures;for(let G=0,j=E.length;G<j;G++){const et=E[G];if(p(et)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(et).__webglTexture;e.bindTexture(Z,St),m(Z),e.unbindTexture()}}}const Nt=[],D=[];function se(R){if(R.samples>0){if(kt(R)===!1){const E=R.textures,G=R.width,j=R.height;let et=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(R),rt=E.length>1;if(rt)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Vt=n.get(E[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,et,r.NEAREST),l===!0&&(Nt.length=0,D.length=0,Nt.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Vt=n.get(E[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ot(R){return Math.min(i.maxSamples,R.samples)}function kt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Jt(R,E){const G=R.colorSpace,j=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==_r&&G!==Qi&&(de.getTransfer(G)===Te?(j!==ui||et!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=yt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=kt}function vE(r,t){function e(n,i=Qi){let s;const o=de.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===im)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===em)return r.BYTE;if(n===nm)return r.SHORT;if(n===ko)return r.UNSIGNED_SHORT;if(n===lh)return r.INT;if(n===Zr)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Wo)return r.HALF_FLOAT;if(n===rm)return r.ALPHA;if(n===sm)return r.RGB;if(n===ui)return r.RGBA;if(n===om)return r.LUMINANCE;if(n===am)return r.LUMINANCE_ALPHA;if(n===Us)return r.DEPTH_COMPONENT;if(n===qs)return r.DEPTH_STENCIL;if(n===lm)return r.RED;if(n===hh)return r.RED_INTEGER;if(n===cm)return r.RG;if(n===fh)return r.RG_INTEGER;if(n===dh)return r.RGBA_INTEGER;if(n===Ha||n===Va||n===Ga||n===Wa)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ou||n===au)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Su)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Eu||n===Tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xa)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===um||n===bu||n===wu||n===Au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class xE extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Br extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
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

}`;class EE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new wn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ei({vertexShader:ME,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ti(new Sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends $s{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new EE,p=e.getContextAttributes();let m=null,x=null;const S=[],M=[],A=new pe;let b=null;const y=new Zn;y.layers.enable(1),y.viewport=new Oe;const C=new Zn;C.layers.enable(2),C.viewport=new Oe;const L=[y,C],v=new xE;v.layers.enable(1),v.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=S[$];return Q===void 0&&(Q=new dc,S[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=S[$];return Q===void 0&&(Q=new dc,S[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=S[$];return Q===void 0&&(Q=new dc,S[$]=Q),Q.getHandSpace()};function B($){const Q=M.indexOf($.inputSource);if(Q===-1)return;const ft=S[Q];ft!==void 0&&(ft.update($.inputSource,$.frame,c||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<S.length;$++){const Q=M[$];Q!==null&&(M[$]=null,S[$].disconnect(Q))}T=null,I=null,g.reset(),t.setRenderTarget(m),d=null,h=null,f=null,i=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new jr(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?qs:Us,ft=p.stencil?Xs:Zr);const wt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(wt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new jr(h.textureWidth,h.textureHeight,{format:ui,type:Hi,depthTexture:new bm(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y($){for(let Q=0;Q<$.removed.length;Q++){const ft=$.removed[Q],ot=M.indexOf(ft);ot>=0&&(M[ot]=null,S[ot].disconnect(ft))}for(let Q=0;Q<$.added.length;Q++){const ft=$.added[Q];let ot=M.indexOf(ft);if(ot===-1){for(let yt=0;yt<S.length;yt++)if(yt>=M.length){M.push(ft),ot=yt;break}else if(M[yt]===null){M[yt]=ft,ot=yt;break}if(ot===-1)break}const wt=S[ot];wt&&wt.connect(ft)}}const k=new X,q=new X;function V($,Q,ft){k.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ft.matrixWorld);const ot=k.distanceTo(q),wt=Q.projectionMatrix.elements,yt=ft.projectionMatrix.elements,Xt=wt[14]/(wt[10]-1),Gt=wt[14]/(wt[10]+1),Nt=(wt[9]+1)/wt[5],D=(wt[9]-1)/wt[5],se=(wt[8]-1)/wt[0],Ot=(yt[8]+1)/yt[0],kt=Xt*se,F=Xt*Ot,Jt=ot/(-se+Ot),Lt=Jt*-se;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(Jt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Xt+Jt,E=Gt+Jt,G=kt-Lt,j=F+(ot-Lt),et=Nt*Gt/E*R,Z=D*Gt/E*R;$.projectionMatrix.makePerspective(G,j,et,Z,R,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ft=$.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=C.near=y.near=Q,v.far=C.far=y.far=ft,(T!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,I=v.far);const ot=$.parent,wt=v.cameras;it(v,ot);for(let yt=0;yt<wt.length;yt++)it(wt[yt],ot);wt.length===2?V(v,y,C):v.projectionMatrix.copy(y.projectionMatrix),P($,v,ot)};function P($,Q,ft){ft===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ho*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let at=null;function zt($,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ot=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let yt=0;yt<ft.length;yt++){const Xt=ft[yt];let Gt=null;if(d!==null)Gt=d.getViewport(Xt);else{const D=f.getViewSubImage(h,Xt);Gt=D.viewport,yt===0&&(t.setRenderTargetTextures(x,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(x))}let Nt=L[yt];Nt===void 0&&(Nt=new Zn,Nt.layers.enable(yt),Nt.viewport=new Oe,L[yt]=Nt),Nt.matrix.fromArray(Xt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Xt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),yt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Nt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const yt=f.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&g.init(t,yt,i.renderState)}}for(let ft=0;ft<S.length;ft++){const ot=M[ft],wt=S[ft];ot!==null&&wt!==void 0&&wt.update(ot,Q,c||o)}at&&at($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const qt=new Tm;qt.setAnimationLoop(zt),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}}const Tr=new Vi,bE=new Be;function wE(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Sm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,S,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),S=x.envMap,M=x.envMapRotation;S&&(p.envMap.value=S,Tr.copy(M),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(Tr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AE(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const M=S.program;n.uniformBlockBinding(x,M)}function c(x,S){let M=i[x.id];M===void 0&&(_(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(x,A);const b=t.render.frame;s[x.id]!==b&&(h(x),s[x.id]=b)}function u(x){const S=f();x.__bindingPointIndex=S;const M=r.createBuffer(),A=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=i[x.id],M=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let b=0,y=M.length;b<y;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let L=0,v=C.length;L<v;L++){const T=C[L];if(d(T,b,L,A)===!0){const I=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let Y=0;Y<B.length;Y++){const k=B[Y],q=g(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+W,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,S,M,A){const b=x.value,y=S+"_"+M;if(A[y]===void 0)return typeof b=="number"||typeof b=="boolean"?A[y]=b:A[y]=b.clone(),!0;{const C=A[y];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[y]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(x){const S=x.uniforms;let M=0;const A=16;for(let y=0,C=S.length;y<C;y++){const L=Array.isArray(S[y])?S[y]:[S[y]];for(let v=0,T=L.length;v<T;v++){const I=L[v],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,Y=B.length;W<Y;W++){const k=B[W],q=g(k),V=M%A,it=V%q.boundary,P=V+it;M+=it,P!==0&&A-P<q.storage&&(M+=A-P),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=q.storage}}}const b=M%A;return b>0&&(M+=A-b),x.__size=M,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class RE{constructor(t={}){const{canvas:e=pv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=cr,this.toneMappingExposure=1;const S=this;let M=!1,A=0,b=0,y=null,C=-1,L=null;const v=new Oe,T=new Oe;let I=null;const B=new ue(0);let W=0,Y=e.width,k=e.height,q=1,V=null,it=null;const P=new Oe(0,0,Y,k),at=new Oe(0,0,Y,k);let zt=!1;const qt=new Em;let $=!1,Q=!1;const ft=new Be,ot=new Be,wt=new X,yt=new Oe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Nt(){return y===null?q:1}let D=n;function se(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const O="webgl2";if(D=se(O,w),D===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,kt,F,Jt,Lt,R,E,G,j,et,Z,St,rt,dt,Vt,nt,vt,xt,It,gt,Yt,Ft,oe,U;function tt(){Ot=new IM(D),Ot.init(),Ft=new vE(D,Ot),kt=new wM(D,Ot,t,Ft),F=new mE(D),kt.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Jt=new OM(D),Lt=new tE,R=new gE(D,Ot,F,Lt,kt,Ft,Jt),E=new RM(S),G=new DM(S),j=new Vv(D),oe=new TM(D,j),et=new UM(D,j,Jt,oe),Z=new BM(D,et,j,Jt),It=new FM(D,kt,R),nt=new AM(Lt),St=new Qy(S,E,G,Ot,kt,oe,nt),rt=new wE(S,Lt),dt=new nE,Vt=new lE(Ot),xt=new EM(S,E,G,F,Z,h,l),vt=new dE(S,Z,kt),U=new AE(D,Jt,kt,F),gt=new bM(D,Ot,Jt),Yt=new NM(D,Ot,Jt),Jt.programs=St.programs,S.capabilities=kt,S.extensions=Ot,S.properties=Lt,S.renderLists=dt,S.shadowMap=vt,S.state=F,S.info=Jt}tt();const K=new TE(S,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Y,k,!1))},this.getSize=function(w){return w.set(Y,k)},this.setSize=function(w,O,z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,k=O,e.width=Math.floor(w*q),e.height=Math.floor(O*q),z===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Y*q,k*q).floor()},this.setDrawingBufferSize=function(w,O,z){Y=w,k=O,q=z,e.width=Math.floor(w*z),e.height=Math.floor(O*z),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,O,z,H){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,z,H),F.viewport(v.copy(P).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,O,z,H){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,z,H),F.scissor(T.copy(at).multiplyScalar(q).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){F.setScissorTest(zt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(w=!0,O=!0,z=!0){let H=0;if(w){let N=!1;if(y!==null){const st=y.texture.format;N=st===dh||st===fh||st===hh}if(N){const st=y.texture.type,_t=st===Hi||st===Zr||st===ko||st===Xs||st===ch||st===uh,ht=xt.getClearColor(),ut=xt.getClearAlpha(),At=ht.r,Ut=ht.g,bt=ht.b;_t?(d[0]=At,d[1]=Ut,d[2]=bt,d[3]=ut,D.clearBufferuiv(D.COLOR,0,d)):(_[0]=At,_[1]=Ut,_[2]=bt,_[3]=ut,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Vt.dispose(),Lt.dispose(),E.dispose(),G.dispose(),Z.dispose(),oe.dispose(),U.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",ce),K.removeEventListener("sessionend",pt),Dt.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Jt.autoReset,O=vt.enabled,z=vt.autoUpdate,H=vt.needsUpdate,N=vt.type;tt(),Jt.autoReset=w,vt.enabled=O,vt.autoUpdate=z,vt.needsUpdate=H,vt.type=N}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $t(w){const O=w.target;O.removeEventListener("dispose",$t),ve(O)}function ve(w){be(w),Lt.remove(w)}function be(w){const O=Lt.get(w).programs;O!==void 0&&(O.forEach(function(z){St.releaseProgram(z)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,z,H,N,st){O===null&&(O=Xt);const _t=N.isMesh&&N.matrixWorld.determinant()<0,ht=me(w,O,z,H,N);F.setMaterial(H,_t);let ut=z.index,At=1;if(H.wireframe===!0){if(ut=et.getWireframeAttribute(z),ut===void 0)return;At=2}const Ut=z.drawRange,bt=z.attributes.position;let ae=Ut.start*At,re=(Ut.start+Ut.count)*At;st!==null&&(ae=Math.max(ae,st.start*At),re=Math.min(re,(st.start+st.count)*At)),ut!==null?(ae=Math.max(ae,0),re=Math.min(re,ut.count)):bt!=null&&(ae=Math.max(ae,0),re=Math.min(re,bt.count));const ge=re-ae;if(ge<0||ge===1/0)return;oe.setup(N,H,ht,z,ut);let qe,Qt=gt;if(ut!==null&&(qe=j.get(ut),Qt=Yt,Qt.setIndex(qe)),N.isMesh)H.wireframe===!0?(F.setLineWidth(H.wireframeLinewidth*Nt()),Qt.setMode(D.LINES)):Qt.setMode(D.TRIANGLES);else if(N.isLine){let Pt=H.linewidth;Pt===void 0&&(Pt=1),F.setLineWidth(Pt*Nt()),N.isLineSegments?Qt.setMode(D.LINES):N.isLineLoop?Qt.setMode(D.LINE_LOOP):Qt.setMode(D.LINE_STRIP)}else N.isPoints?Qt.setMode(D.POINTS):N.isSprite&&Qt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,je=N._multiDrawCounts,he=N._multiDrawCount,ii=ut?j.get(ut).bytesPerElement:1,Qr=Lt.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<he;Pn++)Qr.setValue(D,"_gl_DrawID",Pn),Qt.render(Pt[Pn]/ii,je[Pn])}else if(N.isInstancedMesh)Qt.renderInstances(ae,ge,N.count);else if(z.isInstancedBufferGeometry){const Pt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,je=Math.min(z.instanceCount,Pt);Qt.renderInstances(ae,ge,je)}else Qt.render(ae,ge)};function ie(w,O,z){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,Ie(w,O,z),w.side=pr,w.needsUpdate=!0,Ie(w,O,z),w.side=Ui):Ie(w,O,z)}this.compile=function(w,O,z=null){z===null&&(z=w),p=Vt.get(z),p.init(O),x.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const ht=st[_t];ie(ht,z,N),H.add(ht)}else ie(st,z,N),H.add(st)}),x.pop(),p=null,H},this.compileAsync=function(w,O,z=null){const H=this.compile(w,O,z);return new Promise(N=>{function st(){if(H.forEach(function(_t){Lt.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){N(w);return}setTimeout(st,10)}Ot.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Rt=null;function Tt(w){Rt&&Rt(w)}function ce(){Dt.stop()}function pt(){Dt.start()}const Dt=new Tm;Dt.setAnimationLoop(Tt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(w){Rt=w,K.setAnimationLoop(w),w===null?Dt.stop():Dt.start()},K.addEventListener("sessionstart",ce),K.addEventListener("sessionend",pt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,O,y),p=Vt.get(w,x.length),p.init(O),x.push(p),ot.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),qt.setFromProjectionMatrix(ot),Q=this.localClippingEnabled,$=nt.init(this.clippingPlanes,Q),g=dt.get(w,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Ct(st,O,-1/0,S.sortObjects)}Ct(w,O,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(V,it),Gt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Gt&&xt.addToRenderList(g,w),this.info.render.frame++,$===!0&&nt.beginShadows();const z=p.state.shadowsArray;vt.render(z,w,O),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,N=g.transmissive;if(p.setupLights(),O.isArrayCamera){const st=O.cameras;if(N.length>0)for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];De(H,N,w,ut)}Gt&&xt.render(w);for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];Ht(g,w,ut,ut.viewport)}}else N.length>0&&De(H,N,w,O),Gt&&xt.render(w),Ht(g,w,O);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(S,w,O),oe.resetDefaultState(),C=-1,L=null,x.pop(),x.length>0?(p=x[x.length-1],$===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ct(w,O,z,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||qt.intersectsSprite(w)){H&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const _t=Z.update(w),ht=w.material;ht.visible&&g.push(w,_t,ht,z,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||qt.intersectsObject(w))){const _t=Z.update(w),ht=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),yt.copy(_t.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(ht)){const ut=_t.groups;for(let At=0,Ut=ut.length;At<Ut;At++){const bt=ut[At],ae=ht[bt.materialIndex];ae&&ae.visible&&g.push(w,_t,ae,z,yt.z,bt)}}else ht.visible&&g.push(w,_t,ht,z,yt.z,null)}}const st=w.children;for(let _t=0,ht=st.length;_t<ht;_t++)Ct(st[_t],O,z,H)}function Ht(w,O,z,H){const N=w.opaque,st=w.transmissive,_t=w.transparent;p.setupLightsView(z),$===!0&&nt.setGlobalState(S.clippingPlanes,z),H&&F.viewport(v.copy(H)),N.length>0&&Kt(N,O,z),st.length>0&&Kt(st,O,z),_t.length>0&&Kt(_t,O,z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function De(w,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new jr(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Wo:Hi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const st=p.state.transmissionRenderTarget[H.id],_t=H.viewport||v;st.setSize(_t.z,_t.w);const ht=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&xt.render(z);const ut=S.toneMapping;S.toneMapping=cr;const At=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),$===!0&&nt.setGlobalState(S.clippingPlanes,H),Kt(w,z,H),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let bt=0,ae=O.length;bt<ae;bt++){const re=O[bt],ge=re.object,qe=re.geometry,Qt=re.material,Pt=re.group;if(Qt.side===Ui&&ge.layers.test(H.layers)){const je=Qt.side;Qt.side=bn,Qt.needsUpdate=!0,we(ge,z,H,qe,Qt,Pt),Qt.side=je,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}S.setRenderTarget(ht),S.setClearColor(B,W),At!==void 0&&(H.viewport=At),S.toneMapping=ut}function Kt(w,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let N=0,st=w.length;N<st;N++){const _t=w[N],ht=_t.object,ut=_t.geometry,At=H===null?_t.material:H,Ut=_t.group;ht.layers.test(z.layers)&&we(ht,O,z,ut,At,Ut)}}function we(w,O,z,H,N,st){w.onBeforeRender(S,O,z,H,N,st),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(S,O,z,H,w,st),N.transparent===!0&&N.side===Ui&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,S.renderBufferDirect(z,O,H,N,w,st),N.side=pr,N.needsUpdate=!0,S.renderBufferDirect(z,O,H,N,w,st),N.side=Ui):S.renderBufferDirect(z,O,H,N,w,st),w.onAfterRender(S,O,z,H,N,st)}function Ie(w,O,z){O.isScene!==!0&&(O=Xt);const H=Lt.get(w),N=p.state.lights,st=p.state.shadowsArray,_t=N.state.version,ht=St.getParameters(w,N.state,st,O,z),ut=St.getProgramCacheKey(ht);let At=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",$t),At=new Map,H.programs=At);let Ut=At.get(ut);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===_t)return xe(w,ht),Ut}else ht.uniforms=St.getUniforms(w),w.onBeforeCompile(ht,S),Ut=St.acquireProgram(ht,ut),At.set(ut,Ut),H.uniforms=ht.uniforms;const bt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=nt.uniform),xe(w,ht),H.needsLights=Ee(w),H.lightsStateVersion=_t,H.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function ye(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Ya.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function xe(w,O){const z=Lt.get(w);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function me(w,O,z,H,N){O.isScene!==!0&&(O=Xt),R.resetTextureUnits();const st=O.fog,_t=H.isMeshStandardMaterial?O.environment:null,ht=y===null?S.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:_r,ut=(H.isMeshStandardMaterial?G:E).get(H.envMap||_t),At=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let ge=cr;H.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ge=S.toneMapping);const qe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=qe!==void 0?qe.length:0,Pt=Lt.get(H),je=p.state.lights;if($===!0&&(Q===!0||w!==L)){const Xn=w===L&&H.id===C;nt.setState(H,w,Xn)}let he=!1;H.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==je.state.version||Pt.outputColorSpace!==ht||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==ut||H.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==At||Pt.vertexTangents!==Ut||Pt.morphTargets!==bt||Pt.morphNormals!==ae||Pt.morphColors!==re||Pt.toneMapping!==ge||Pt.morphTargetsCount!==Qt)&&(he=!0):(he=!0,Pt.__version=H.version);let ii=Pt.currentProgram;he===!0&&(ii=Ie(H,O,N));let Qr=!1,Pn=!1,yl=!1;const Ue=ii.getUniforms(),Wi=Pt.uniforms;if(F.useProgram(ii.program)&&(Qr=!0,Pn=!0,yl=!0),H.id!==C&&(C=H.id,Pn=!0),Qr||L!==w){kt.reverseDepthBuffer?(ft.copy(w.projectionMatrix),_v(ft),gv(ft),Ue.setValue(D,"projectionMatrix",ft)):Ue.setValue(D,"projectionMatrix",w.projectionMatrix),Ue.setValue(D,"viewMatrix",w.matrixWorldInverse);const Xn=Ue.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,wt.setFromMatrixPosition(w.matrixWorld)),kt.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Pn=!0,yl=!0)}if(N.isSkinnedMesh){Ue.setOptional(D,N,"bindMatrix"),Ue.setOptional(D,N,"bindMatrixInverse");const Xn=N.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Ue.setValue(D,"boneTexture",Xn.boneTexture,R))}N.isBatchedMesh&&(Ue.setOptional(D,N,"batchingTexture"),Ue.setValue(D,"batchingTexture",N._matricesTexture,R),Ue.setOptional(D,N,"batchingIdTexture"),Ue.setValue(D,"batchingIdTexture",N._indirectTexture,R),Ue.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Ue.setValue(D,"batchingColorTexture",N._colorsTexture,R));const El=z.morphAttributes;if((El.position!==void 0||El.normal!==void 0||El.color!==void 0)&&It.update(N,z,ii),(Pn||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,Ue.setValue(D,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Wi.envMap.value=ut,Wi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Wi.envMapIntensity.value=O.environmentIntensity),Pn&&(Ue.setValue(D,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&Cn(Wi,yl),st&&H.fog===!0&&rt.refreshFogUniforms(Wi,st),rt.refreshMaterialUniforms(Wi,H,q,k,p.state.transmissionRenderTarget[w.id]),Ya.upload(D,ye(Pt),Wi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ya.upload(D,ye(Pt),Wi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ue.setValue(D,"center",N.center),Ue.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ue.setValue(D,"normalMatrix",N.normalMatrix),Ue.setValue(D,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xn=H.uniformsGroups;for(let Tl=0,Nm=Xn.length;Tl<Nm;Tl++){const Mh=Xn[Tl];U.update(Mh,ii),U.bind(Mh,ii)}}return ii}function Cn(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ee(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,O,z){Lt.get(w.texture).__webglTexture=O,Lt.get(w.depthTexture).__webglTexture=z;const H=Lt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const z=Lt.get(w);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,z=0){y=w,A=O,b=z;let H=!0,N=null,st=!1,_t=!1;if(w){const ut=Lt.get(w);if(ut.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ut.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ut.__hasExternalTextures)R.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const bt=w.depthTexture;if(ut.__boundDepthTexture!==bt){if(bt!==null&&Lt.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const Ut=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?N=Ut[O][z]:N=Ut[O],st=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[z]:N=Ut,v.copy(w.viewport),T.copy(w.scissor),I=w.scissorTest}else v.copy(P).multiplyScalar(q).floor(),T.copy(at).multiplyScalar(q).floor(),I=zt;if(F.bindFramebuffer(D.FRAMEBUFFER,N)&&H&&F.drawBuffers(w,N),F.viewport(v),F.scissor(T),F.setScissorTest(I),st){const ut=Lt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ut.__webglTexture,z)}else if(_t){const ut=Lt.get(w.texture),At=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.__webglTexture,z||0,At)}C=-1},this.readRenderTargetPixels=function(w,O,z,H,N,st,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){F.bindFramebuffer(D.FRAMEBUFFER,ht);try{const ut=w.texture,At=ut.format,Ut=ut.type;if(!kt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&z>=0&&z<=w.height-N&&D.readPixels(O,z,H,N,Ft.convert(At),Ft.convert(Ut),st)}finally{const ut=y!==null?Lt.get(y).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(w,O,z,H,N,st,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){const ut=w.texture,At=ut.format,Ut=ut.type;if(!kt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-H&&z>=0&&z<=w.height-N){F.bindFramebuffer(D.FRAMEBUFFER,ht);const bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(O,z,H,N,Ft.convert(At),Ft.convert(Ut),0);const ae=y!==null?Lt.get(y).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,ae);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mv(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(bt),D.deleteSync(re),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,z=0){w.isTexture!==!0&&(qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),N=Math.floor(w.image.width*H),st=Math.floor(w.image.height*H),_t=O!==null?O.x:0,ht=O!==null?O.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,_t,ht,N,st),F.unbindTexture()},this.copyTextureToTexture=function(w,O,z=null,H=null,N=0){w.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],O=arguments[2],N=arguments[3]||0,z=null);let st,_t,ht,ut,At,Ut;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,ht=z.min.x,ut=z.min.y):(st=w.image.width,_t=w.image.height,ht=0,ut=0),H!==null?(At=H.x,Ut=H.y):(At=0,Ut=0);const bt=Ft.convert(O.format),ae=Ft.convert(O.type);R.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const re=D.getParameter(D.UNPACK_ROW_LENGTH),ge=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Qt=D.getParameter(D.UNPACK_SKIP_ROWS),Pt=D.getParameter(D.UNPACK_SKIP_IMAGES),je=w.isCompressedTexture?w.mipmaps[N]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,ut),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,At,Ut,st,_t,bt,ae,je.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,At,Ut,je.width,je.height,bt,je.data):D.texSubImage2D(D.TEXTURE_2D,N,At,Ut,st,_t,bt,ae,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,re),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt),N===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(w,O,z=null,H=null,N=0){w.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],O=arguments[3],N=arguments[4]||0);let st,_t,ht,ut,At,Ut,bt,ae,re;const ge=w.isCompressedTexture?w.mipmaps[N]:w.image;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,ht=z.max.z-z.min.z,ut=z.min.x,At=z.min.y,Ut=z.min.z):(st=ge.width,_t=ge.height,ht=ge.depth,ut=0,At=0,Ut=0),H!==null?(bt=H.x,ae=H.y,re=H.z):(bt=0,ae=0,re=0);const qe=Ft.convert(O.format),Qt=Ft.convert(O.type);let Pt;if(O.isData3DTexture)R.setTexture3D(O,0),Pt=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Pt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ii=D.getParameter(D.UNPACK_SKIP_PIXELS),Qr=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Pt,N,bt,ae,re,st,_t,ht,qe,Qt,ge.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,N,bt,ae,re,st,_t,ht,qe,ge.data):D.texSubImage3D(Pt,N,bt,ae,re,st,_t,ht,qe,Qt,ge),D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),N===0&&O.generateMipmaps&&D.generateMipmap(Pt),F.unbindTexture()},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),F.unbindTexture()},this.resetState=function(){A=0,b=0,y=null,F.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ph?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===vl?"display-p3":"srgb"}}class CE extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class PE extends Yo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cd=new Be,Cu=new mm,Pa=new xl,La=new X;class LE extends An{constructor(t=new ni,e=new PE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;cd.copy(i).invert(),Cu.copy(t.ray).applyMatrix4(cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const p=c.getX(_);La.fromBufferAttribute(f,p),ud(La,p,l,i,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)La.fromBufferAttribute(f,_),ud(La,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ud(r,t,e,n,i,s,o){const a=Cu.distanceSqToPoint(r);if(a<e){const l=new X;Cu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class gh extends ni{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(s.slice(),3)),this.setAttribute("uv",new ln(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const S=new X,M=new X,A=new X;for(let b=0;b<e.length;b+=3)d(e[b+0],S),d(e[b+1],M),d(e[b+2],A),l(S,M,A,x)}function l(x,S,M,A){const b=A+1,y=[];for(let C=0;C<=b;C++){y[C]=[];const L=x.clone().lerp(M,C/b),v=S.clone().lerp(M,C/b),T=b-C;for(let I=0;I<=T;I++)I===0&&C===b?y[C][I]=L:y[C][I]=L.clone().lerp(v,I/T)}for(let C=0;C<b;C++)for(let L=0;L<2*(b-C)-1;L++){const v=Math.floor(L/2);L%2===0?(h(y[C][v+1]),h(y[C+1][v]),h(y[C][v])):(h(y[C][v+1]),h(y[C+1][v+1]),h(y[C+1][v]))}}function c(x){const S=new X;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(x),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}function u(){const x=new X;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const M=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(M,1-A)}_(),f()}function f(){for(let x=0;x<o.length;x+=6){const S=o[x+0],M=o[x+2],A=o[x+4],b=Math.max(S,M,A),y=Math.min(S,M,A);b>.9&&y<.1&&(S<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function d(x,S){const M=x*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function _(){const x=new X,S=new X,M=new X,A=new X,b=new pe,y=new pe,C=new pe;for(let L=0,v=0;L<s.length;L+=9,v+=6){x.set(s[L+0],s[L+1],s[L+2]),S.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),b.set(o[v+0],o[v+1]),y.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),A.copy(x).add(S).add(M).divideScalar(3);const T=p(A);g(b,v+0,x,T),g(y,v+2,S,T),g(C,v+4,M,T)}}function g(x,S,M,A){A<0&&x.x===1&&(o[S]=x.x-1),M.x===0&&M.z===0&&(o[S]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gh(t.vertices,t.indices,t.radius,t.details)}}class vh extends gh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vh(t.radius,t.detail)}}class xh extends ni{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,h=new X,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const x=[],S=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(i+b*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(i+b*s)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(b+M,1-S),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const S=u[m][x+1],M=u[m][x],A=u[m+1][x],b=u[m+1][x+1];(m!==0||o>0)&&d.push(S,M,b),(m!==n-1||l<Math.PI)&&d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sh extends ni{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new X,f=new X,h=new X;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(g),f.y=(t+e*Math.cos(p))*Math.sin(g),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,p=(i+1)*(d-1)+_-1,m=(i+1)*(d-1)+_,x=(i+1)*d+_;o.push(g,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new ln(a,3)),this.setAttribute("normal",new ln(l,3)),this.setAttribute("uv",new ln(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);const DE=`
vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 g0 = vec3(a0.xy, h.x);
  vec3 g1 = vec3(a0.zw, h.y);
  vec3 g2 = vec3(a1.xy, h.z);
  vec3 g3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
  g0 *= norm.x; g1 *= norm.y; g2 *= norm.z; g3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3)));
}
`,IE=`
uniform float uTime;
uniform float uDistort;
uniform float uFreq;
uniform float uPulse;
varying vec3 vNormal;
varying vec3 vViewPos;
varying float vNoise;
${DE}

float field(vec3 p){
  float t = uTime * 0.32;
  float f = uFreq + uPulse * 0.9;
  float n = snoise(p * f + vec3(t, t * 0.6, -t * 0.4));
  n += 0.22 * snoise(p * f * 1.9 - vec3(t * 0.9));
  return n;
}

vec3 orthogonal(vec3 v){
  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
}

void main(){
  float amp = uDistort + uPulse * 0.32;
  vec3 n = normalize(position);
  vec3 t = orthogonal(n);
  vec3 b = normalize(cross(n, t));
  float e = 0.006;

  float f0 = field(position);
  vec3 p0 = position + n * f0 * amp;
  vec3 q1 = position + t * e;
  vec3 q2 = position + b * e;
  vec3 p1 = q1 + normalize(q1) * field(q1) * amp;
  vec3 p2 = q2 + normalize(q2) * field(q2) * amp;

  vNoise = f0;
  vNormal = normalize(normalMatrix * normalize(cross(p1 - p0, p2 - p0)));
  vec4 mv = modelViewMatrix * vec4(p0, 1.0);
  vViewPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,UE=`
uniform float uTime;
uniform vec3 uLight;
uniform vec3 uAccent;
uniform float uAccentAmt;
uniform float uIri;
varying vec3 vNormal;
varying vec3 vViewPos;
varying float vNoise;

vec3 palette(float t){
  return 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67)));
}

void main(){
  vec3 N = normalize(vNormal);
  vec3 V = normalize(-vViewPos);
  vec3 L = normalize(uLight);
  vec3 L2 = normalize(vec3(-0.8, -0.6, 0.4));

  float ndv = max(dot(N, V), 0.0);
  float fres = pow(1.0 - ndv, 2.4);
  float diff = max(dot(N, L), 0.0);
  float wrap = max((dot(N, L) + 0.5) / 1.5, 0.0);
  float back = max(dot(N, L2), 0.0);
  float spec = pow(max(dot(N, normalize(L + V)), 0.0), 70.0);
  float sheen = pow(max(dot(N, normalize(L + V)), 0.0), 8.0);

  // pearl ceramic base
  vec3 shadowCol = vec3(0.55, 0.53, 0.51);
  vec3 litCol = vec3(0.97, 0.955, 0.93);
  vec3 col = mix(shadowCol, litCol, wrap);
  col += vec3(0.08, 0.06, 0.05) * back;

  // thin-film iridescence on the rim
  vec3 iri = palette(fres * 1.15 + vNoise * 0.45 + uTime * 0.04);
  iri = mix(iri, vec3(1.0), 0.25);
  col = mix(col, iri, fres * uIri);

  // warm accent pooling in the noise valleys
  float pool = smoothstep(0.15, 0.85, -vNoise) * (1.0 - fres);
  col = mix(col, uAccent, pool * uAccentAmt * 0.85);

  col += sheen * 0.08 + spec * 0.85;
  gl_FragColor = vec4(col, 1.0);
}
`,NE=`
attribute float aSize;
attribute float aPhase;
uniform float uTime;
uniform float uPR;
void main(){
  vec3 p = position;
  p.y += sin(uTime * 0.5 + aPhase) * 0.12;
  p.x += cos(uTime * 0.35 + aPhase * 1.3) * 0.08;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = aSize * uPR * (7.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,OE=`
uniform vec3 uColor;
uniform float uOpacity;
void main(){
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  gl_FragColor = vec4(uColor, smoothstep(0.5, 0.15, d) * uOpacity);
}
`,Ci=(r,t,e)=>r+(t-r)*e;function FE(r,{reduced:t=!1}={}){const e=window.innerWidth<768,n=new RE({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"}),i=Math.min(window.devicePixelRatio,e?1.5:2);n.setPixelRatio(i),n.setClearColor(0,0);const s=new CE,o=new Zn(32,1,.1,100);o.position.set(0,0,8);const a=new Br,l=new Br;a.add(l),s.add(a);const c={uTime:{value:0},uDistort:{value:.26},uFreq:{value:.78},uPulse:{value:0},uLight:{value:new X(.6,.9,.8)},uAccent:{value:new ue("#FF4D1F")},uAccentAmt:{value:.35},uIri:{value:.9}},u=new ti(new vh(1.2,e?36:64),new Ei({vertexShader:IE,fragmentShader:UE,uniforms:c}));l.add(u);const f=new hl({color:921102,transparent:!0,opacity:.5}),h=[{r:1.85,tube:.0045,rot:[1.25,.15,0],speed:.35,sat:16731423,satSize:.055},{r:2.2,tube:.003,rot:[1,-.55,.35],speed:-.22,sat:921102,satSize:.035},{r:2.6,tube:.0025,rot:[1.45,.5,-.25],speed:.14,sat:16731423,satSize:.03}].map(L=>{const v=new Br;v.rotation.set(...L.rot);const T=new ti(new Sh(L.r,L.tube,8,260),f),I=new ti(new xh(L.satSize,20,20),new hl({color:L.sat}));return v.add(T,I),l.add(v),{...L,pivot:v,sat:I,angle:Math.random()*Math.PI*2}}),d=e?220:480,_=new Float32Array(d*3),g=new Float32Array(d),p=new Float32Array(d);for(let L=0;L<d;L++){const v=2.4+Math.random()*3.2,T=Math.random()*Math.PI*2,I=Math.acos(2*Math.random()-1);_[L*3]=v*Math.sin(I)*Math.cos(T)*1.5,_[L*3+1]=v*Math.sin(I)*Math.sin(T),_[L*3+2]=v*Math.cos(I)*.8,g[L]=2+Math.random()*4,p[L]=Math.random()*10}const m=new ni;m.setAttribute("position",new Vn(_,3)),m.setAttribute("aSize",new Vn(g,1)),m.setAttribute("aPhase",new Vn(p,1));const x={uTime:c.uTime,uPR:{value:i},uColor:{value:new ue("#0E0E0E")},uOpacity:{value:.45}},S=new LE(m,new Ei({vertexShader:NE,fragmentShader:OE,uniforms:x,transparent:!0,depthWrite:!1}));a.add(S);const M={hx:0,hy:0,cx:0,cy:0,scale:1,cScale:.8};function A(){const L=window.innerWidth,v=window.innerHeight;n.setSize(L,v,!1),o.aspect=L/v,o.updateProjectionMatrix();const T=Math.tan(Mf.degToRad(o.fov/2))*o.position.z,I=T*o.aspect;L>900?(M.hx=I*.38,M.hy=T*.12,M.scale=Math.min(1.15,T*.48)):(M.hx=0,M.hy=T*.28,M.scale=Math.min(I*.55,.95)),M.cx=0,M.cy=0,M.cScale=M.scale*.95}A(),window.addEventListener("resize",A);const b={intro:t?1:0,hero:0,heroTarget:0,contact:0,contactTarget:0,pulse:0,mx:0,my:0,tmx:0,tmy:0};Wt.create({trigger:".hero",start:"top top",end:"bottom top",onUpdate:L=>b.heroTarget=L.progress}),Wt.create({trigger:".contact",start:"top 85%",end:"top 10%",onUpdate:L=>b.contactTarget=L.progress}),t||window.addEventListener("pointermove",L=>{b.tmx=L.clientX/window.innerWidth*2-1,b.tmy=L.clientY/window.innerHeight*2-1});let y=t?3:0;function C(L,v){const T=Math.min(v/1e3,.25);t||(y+=Math.min(T,.05));const I=1-Math.pow(.92,T*60),B=1-Math.pow(.95,T*60);b.hero=Ci(b.hero,b.heroTarget,I),b.contact=Ci(b.contact,b.contactTarget,I),b.mx=Ci(b.mx,b.tmx,B),b.my=Ci(b.my,b.tmy,B);const W=b.hero,Y=b.contact,k=Math.max(1-Mf.smoothstep(W,.45,.95),Y)*Math.min(b.intro*1.5,1);if(r.style.opacity=k.toFixed(3),k<.005)return;const q=M.hx-W*M.hx*.6,V=M.hy-W*2.2;a.position.x=Ci(q,M.cx,Y),a.position.y=Ci(V,M.cy,Y);const it=M.scale*Ci(1+W*.55,M.cScale/M.scale,Y)*(.4+.6*b.intro);a.scale.setScalar(it),c.uTime.value=y,c.uPulse.value=b.pulse,c.uDistort.value=Ci(.24+W*.3,.3,Y),c.uAccentAmt.value=Ci(.35+W*.65,.9,Y),c.uLight.value.set(.6+b.mx*1.4,.9-b.my*1.4,.8),l.rotation.y=y*.12+b.mx*.5,l.rotation.x=b.my*.35,l.rotation.z=Math.sin(y*.2)*.08,S.rotation.y=-y*.03+b.mx*.15,S.rotation.x=b.my*.08,h.forEach(P=>{P.angle+=T*P.speed*2,P.sat.position.set(Math.cos(P.angle)*P.r,Math.sin(P.angle)*P.r,0),P.pivot.rotation.z+=T*P.speed*.3}),n.render(s,o)}return Bt.ticker.add(C),{intro(){Bt.to(b,{intro:1,duration:2.2,ease:"expo.out"}),this.pulse(1.2)},pulse(L=1){t||(Bt.killTweensOf(b,"pulse"),Bt.fromTo(b,{pulse:L},{pulse:0,duration:2.2,ease:"elastic.out(1, 0.28)"}))}}}function BE({reduced:r}){const t=document.querySelector(".preloader"),e=t.querySelector(".preloader__word"),n=e.querySelectorAll("span"),i=t.querySelector(".preloader__count"),s=t.querySelector(".preloader__bar i");return new Promise(o=>{if(r){t.remove(),o();return}const a={v:0};Bt.set(e,{opacity:1}),Bt.set(n,{yPercent:115});const l=Bt.timeline({paused:!0,onComplete:()=>t.remove()});l.to(n,{yPercent:0,rotate:0,stagger:.07,duration:1.1,ease:"expo.out"},.1).to(a,{v:100,duration:2.1,ease:"power3.inOut",onUpdate:()=>i.textContent=String(Math.round(a.v)).padStart(3,"0")},0).to(s,{scaleX:1,duration:2.1,ease:"power3.inOut"},0).to(n,{yPercent:-115,stagger:.04,duration:.7,ease:"expo.in"},">-0.15").to(t,{clipPath:"inset(0% 0% 100% 0%)",duration:1.1,ease:"expo.inOut"},">-0.25").add(o,"<0.3");const c=document.fonts?document.fonts.ready:Promise.resolve();Promise.race([c,new Promise(u=>setTimeout(u,1500))]).then(()=>l.play())})}function zE(){const r=document.querySelector(".cursor"),t=document.querySelector(".cursor-dot"),e=r.querySelector(".cursor__label");document.documentElement.classList.add("has-cursor");const n=Bt.quickTo(r,"x",{duration:.5,ease:"power3"}),i=Bt.quickTo(r,"y",{duration:.5,ease:"power3"}),s=Bt.quickTo(t,"x",{duration:.08,ease:"power3"}),o=Bt.quickTo(t,"y",{duration:.08,ease:"power3"});window.addEventListener("pointermove",a=>{n(a.clientX),i(a.clientY),s(a.clientX),o(a.clientY),r.classList.remove("is-out"),t.classList.remove("is-out")}),document.addEventListener("pointerleave",()=>{r.classList.add("is-out"),t.classList.add("is-out")}),document.addEventListener("pointerover",a=>{const l=a.target.closest('[data-cursor="view"]'),c=!l&&a.target.closest("a, button");r.classList.toggle("is-view",!!l),r.classList.toggle("is-hover",!!c),t.classList.toggle("is-hidden",!!l||!!c),l&&(e.textContent=l.dataset.cursorLabel||"View")})}function kE(){document.querySelectorAll("[data-magnetic]").forEach(r=>{const t=parseFloat(r.dataset.magnetic)||.35,e=r.querySelector(".btn__label, .email__text"),n=Bt.quickTo(r,"x",{duration:.8,ease:"elastic.out(1, 0.35)"}),i=Bt.quickTo(r,"y",{duration:.8,ease:"elastic.out(1, 0.35)"}),s=e&&Bt.quickTo(e,"x",{duration:.8,ease:"elastic.out(1, 0.35)"}),o=e&&Bt.quickTo(e,"y",{duration:.8,ease:"elastic.out(1, 0.35)"});r.addEventListener("pointermove",a=>{const l=r.getBoundingClientRect(),c=a.clientX-(l.left+l.width/2),u=a.clientY-(l.top+l.height/2);n(c*t),i(u*t),e&&(s(c*t*.35),o(u*t*.35))}),r.addEventListener("pointerleave",()=>{n(0),i(0),e&&(s(0),o(0))})})}function HE(r,{reduced:t}){const e=[...document.querySelectorAll(".marquee__row")].map((o,a)=>{const l=o.querySelector(".marquee__track");return l.innerHTML+=l.innerHTML,{track:l,x:0,half:0,dir:a%2?1:-1,speed:parseFloat(o.dataset.speed)||1}});if(t)return;const n=()=>e.forEach(o=>o.half=o.track.scrollWidth/2);n(),window.addEventListener("resize",n),document.fonts?.ready.then(n);let i=0,s=1;r?.on("scroll",o=>{i=o.velocity,o.direction&&(s=o.direction)}),Bt.ticker.add((o,a)=>{const l=a/16.67,c=Math.min(Math.abs(i)*.5,22),u=Bt.utils.clamp(-7,7,i*.18);e.forEach(f=>{f.half&&(f.x+=(f.speed*1.1+c)*f.dir*s*l,f.x=Bt.utils.wrap(-f.half,0,f.x),f.track.style.transform=`translate3d(${f.x}px,0,0) skewX(${u*f.dir}deg)`)}),i*=.92})}function VE(r){r.forEach(t=>{const e=document.createElement("span");e.className="mask",t.parentNode.insertBefore(e,t),e.appendChild(t)})}function GE({reduced:r}){if(r)return;document.querySelectorAll('[data-reveal="words"]').forEach(e=>{const{words:n}=new Vc(e,{types:"words"});VE(n),Bt.from(n,{yPercent:115,rotate:4,duration:1.2,stagger:.05,ease:"expo.out",scrollTrigger:{trigger:e,start:"top 85%"}})}),document.querySelectorAll('[data-reveal="fade"]').forEach(e=>{Bt.from(e,{y:50,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:e,start:"top 90%"}})});const t=document.querySelectorAll("[data-reveal-line]");t.length&&Bt.from(t,{yPercent:110,duration:1.4,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:t[0],start:"top 85%"}}),document.querySelectorAll(".sec-head__rule").forEach(e=>{Bt.from(e,{scaleX:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:e,start:"top 90%"}})}),document.querySelectorAll("[data-fill]").forEach(e=>{const{words:n}=new Vc(e,{types:"words"});Bt.fromTo(n,{opacity:.14},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:e,start:"top 78%",end:"bottom 45%",scrub:!0}})})}function WE({reduced:r}){document.querySelectorAll("[data-count]").forEach(t=>{const e=parseFloat(t.dataset.count);if(r){t.textContent=e;return}const n={v:0};Bt.to(n,{v:e,duration:2.2,ease:"expo.out",onUpdate:()=>t.textContent=Math.round(n.v),scrollTrigger:{trigger:t,start:"top 90%"}})})}function XE({reduced:r}){const t=document.querySelector(".work"),e=t.querySelector(".work__track"),n=[...e.querySelectorAll(".card[data-piece]")],i=t.querySelector(".work__progress i"),s=t.querySelector(".work__count b");n.forEach(l=>{const c=l.querySelector(".card__media"),u=l.querySelector(".card__visual");c.tagName==="VIDEO"&&(u.style.backgroundImage=`url("${c.dataset.poster}")`)});const o=new IntersectionObserver(l=>{l.forEach(({target:c,isIntersecting:u})=>{const f=c.querySelector(".card__media");u&&!f.src&&(f.src=f.dataset.src),!(f.tagName!=="VIDEO"||r)&&(u?f.play().catch(()=>{}):f.pause())})},{rootMargin:"0px 25% 0px 25%",threshold:.35});return n.forEach(l=>o.observe(l)),window.matchMedia("(hover: hover)").matches&&!r&&n.forEach(l=>{const c=l.querySelector(".card__visual");Bt.set(c,{transformPerspective:1e3});const u=Bt.quickTo(c,"rotationX",{duration:.6,ease:"power3"}),f=Bt.quickTo(c,"rotationY",{duration:.6,ease:"power3"});l.addEventListener("pointermove",h=>{const d=c.getBoundingClientRect();f(((h.clientX-d.left)/d.width-.5)*12),u(-((h.clientY-d.top)/d.height-.5)*12)}),l.addEventListener("pointerleave",()=>{u(0),f(0)})}),Bt.matchMedia().add("(min-width: 900px) and (prefers-reduced-motion: no-preference)",()=>{const l=()=>e.scrollWidth-window.innerWidth,c=Bt.to(e,{x:()=>-l(),ease:"none",scrollTrigger:{trigger:t,start:"top top",end:()=>"+="+l(),pin:!0,scrub:1,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:u=>{i.style.transform=`scaleX(${u.progress})`;const f=Math.min(n.length,Math.floor(u.progress*n.length)+1);s.textContent=String(f).padStart(2,"0")}}});n.forEach(u=>{Bt.from(u,{yPercent:8,rotate:2,opacity:.4,ease:"none",scrollTrigger:{trigger:u,containerAnimation:c,start:"left 105%",end:"left 70%",scrub:!0}})})}),n}function qE({reduced:r}){if(r)return;const t=Bt.utils.toArray(".service");t.forEach((e,n)=>{const i=t[n+1];i&&Bt.to(e.querySelector(".service__inner"),{scale:.9+n*.015,"--dim":.35,ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"top 20%",scrub:!0}})})}function YE({reduced:r}){if(r)return;const t=document.querySelector(".process"),e=t.querySelector(".process__path"),n=[...t.querySelectorAll(".process__node")],i=[...t.querySelectorAll(".step")],s=[.13,.38,.63,.88];t.classList.add("is-armed");const o=Bt.matchMedia();o.add("(min-width: 761px)",()=>{Bt.fromTo(e,{strokeDashoffset:1},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:t.querySelector(".process__track"),start:"top 75%",end:"bottom 55%",scrub:1,onUpdate:a=>{s.forEach((l,c)=>{const u=a.progress>=l;n[c].classList.toggle("is-active",u),i[c].classList.toggle("is-active",u)})}}})}),o.add("(max-width: 760px)",()=>{i.forEach(a=>{Wt.create({trigger:a,start:"top 75%",onEnter:()=>a.classList.add("is-active"),onLeaveBack:()=>a.classList.remove("is-active")})})})}let hd;function Pu(r){const t=document.querySelector(".toast");t.textContent=r,t.classList.add("is-on"),clearTimeout(hd),hd=setTimeout(()=>t.classList.remove("is-on"),2400)}async function Pm(r){try{return await navigator.clipboard.writeText(r),!0}catch{const t=document.createElement("textarea");t.value=r,t.setAttribute("readonly",""),t.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(t),t.select();let e=!1;try{e=document.execCommand("copy")}catch{}return t.remove(),e}}function $E({reduced:r}){document.querySelectorAll("[data-email]").forEach(i=>{i.addEventListener("click",async()=>{if(await Pm(i.dataset.email)){Pu("Email copied to clipboard");return}const s=document.createRange();s.selectNodeContents(i.querySelector(".email__text"));const o=window.getSelection();o.removeAllRanges(),o.addRange(s),Pu("Press Ctrl+C to copy the address")})});const t=document.querySelector(".footer__word"),e=[...t.querySelectorAll("span")];if(r||(Bt.from(e,{yPercent:100,stagger:.05,duration:1.3,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 95%"}}),!window.matchMedia("(hover: hover)").matches))return;const n=e.map(i=>Bt.quickTo(i,"yPercent",{duration:.6,ease:"power3"}));t.addEventListener("pointermove",i=>{e.forEach((s,o)=>{const a=s.getBoundingClientRect(),l=(i.clientX-(a.left+a.width/2))/a.width;n[o](-16*Math.exp(-l*l*.8))})}),t.addEventListener("pointerleave",()=>n.forEach(i=>i(0)))}const KE=window.location.href.split("#")[0];function ZE(r,{lenis:t,reduced:e}){const n=document.querySelector(".player"),i=n.querySelector(".player__stage"),s=n.querySelector(".player__info"),o=n.querySelector(".player__video"),a=n.querySelector(".player__img"),l=n.querySelector(".player__title"),c=n.querySelector(".player__tag"),u=n.querySelector(".player__count"),f=r.map(x=>({slug:x.dataset.piece,kind:x.dataset.kind,file:x.dataset.file,poster:x.querySelector(".card__media").dataset.poster,title:x.querySelector("h3").textContent,tag:x.querySelector(".card__tag").textContent}));let h=-1,d=null;function _(x){h=(x+f.length)%f.length;const S=f[h];l.textContent=S.title,c.textContent=S.tag,u.textContent=`${String(h+1).padStart(2,"0")} / ${String(f.length).padStart(2,"0")}`,o.pause(),S.kind==="video"?(a.hidden=!0,o.hidden=!1,o.poster=S.poster,o.src=S.file,o.currentTime=0,o.play().catch(()=>{})):(o.hidden=!0,o.removeAttribute("src"),o.load(),a.hidden=!1,a.src=S.file,a.alt=`${S.title} poster`),window.location.hash!==`#${S.slug}`&&history.replaceState(null,"",`#${S.slug}`)}function g(x){const S=!n.hidden;if(_(x),S){Bt.fromTo(i,{opacity:.4,scale:.97},{opacity:1,scale:1,duration:.5,ease:"expo.out"});return}d=document.activeElement,n.hidden=!1,t?.stop(),document.documentElement.style.overflow="hidden",n.querySelector(".player__close").focus({preventScroll:!0}),e||(Bt.fromTo(n.querySelector(".player__backdrop"),{opacity:0},{opacity:1,duration:.5}),Bt.fromTo(i,{y:60,scale:.92,opacity:0},{y:0,scale:1,opacity:1,duration:.9,ease:"expo.out"}),Bt.fromTo(s.children,{y:24,opacity:0},{y:0,opacity:1,duration:.8,stagger:.06,delay:.15,ease:"expo.out"}))}function p(){n.hidden||(o.pause(),n.hidden=!0,t?.start(),document.documentElement.style.overflow="",history.replaceState(null,"",window.location.pathname+window.location.search),d?.focus?.({preventScroll:!0}))}r.forEach((x,S)=>{x.addEventListener("click",M=>{M.preventDefault(),g(S)})}),n.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",p)),n.querySelector("[data-prev]").addEventListener("click",()=>g(h-1)),n.querySelector("[data-next]").addEventListener("click",()=>g(h+1)),n.querySelector("[data-share]").addEventListener("click",async()=>{const x=`${KE}#${f[h].slug}`;Pu(await Pm(x)?"Link copied":x)}),document.addEventListener("keydown",x=>{if(!n.hidden){if(x.key==="Escape")p();else if(x.key==="ArrowRight")g(h+1);else if(x.key==="ArrowLeft")g(h-1);else if(x.key==="Tab"){const S=[...n.querySelectorAll("button, video[controls]:not([hidden])")],M=S[0],A=S[S.length-1];x.shiftKey&&document.activeElement===M?(x.preventDefault(),A.focus()):!x.shiftKey&&document.activeElement===A&&(x.preventDefault(),M.focus())}}});function m(){const x=f.findIndex(S=>`#${S.slug}`===window.location.hash);x>=0&&(n.hidden||x!==h)?g(x):x<0&&p()}return window.addEventListener("hashchange",m),{openFromHash:m}}Bt.registerPlugin(Wt);const js=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Lm=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Gi={reduced:js};let hi=null;js||(hi=new Pg({lerp:.09,wheelMultiplier:1}),hi.on("scroll",Wt.update),Bt.ticker.add(r=>hi.raf(r*1e3)),Bt.ticker.lagSmoothing(0),hi.stop());function Dm(r){hi?hi.scrollTo(r,{duration:1.6,easing:t=>1-Math.pow(1-t,4)}):typeof r=="number"?window.scrollTo(0,r):document.querySelector(r)?.scrollIntoView()}document.querySelectorAll(".btn__label, .roll > span").forEach(r=>{r.innerHTML=`<span class="roll__inner">${r.innerHTML}</span>`});const jE=document.querySelector(".nav");document.querySelectorAll("[data-scroll-to]").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const e=r.getAttribute("href");Dm(e==="#top"?0:e)})});document.querySelector("[data-to-top]").addEventListener("click",()=>Dm(0));const JE=document.querySelector(".progress i");let fd=0;function dd(r){jE.classList.toggle("is-hidden",r>fd&&r>240),fd=r;const t=document.documentElement.scrollHeight-window.innerHeight;JE.style.transform=`scaleX(${t>0?r/t:0})`}hi?hi.on("scroll",({scroll:r})=>dd(r)):window.addEventListener("scroll",()=>dd(window.scrollY),{passive:!0});const QE=XE(Gi),tT=ZE(QE,{lenis:hi,reduced:js}),Im=FE(document.querySelector(".gl"),Gi);Lm&&!js&&zE();Lm&&kE();HE(hi,Gi);GE(Gi);WE(Gi);qE(Gi);YE(Gi);$E(Gi);const Um=document.querySelector(".hero");Um.addEventListener("pointerdown",r=>{r.target.closest("a, button")||Im.pulse(1)});let mo=[];js||(mo=document.querySelectorAll(".hero [data-split]"),mo=[...mo].flatMap(r=>new Vc(r,{types:"chars"}).chars),Bt.set(mo,{yPercent:120,rotate:8}),Bt.set("[data-hero-fade], .hero__meta > *",{y:24,opacity:0}));function eT(){if(js)return;Bt.timeline().to(mo,{yPercent:0,rotate:0,duration:1.4,stagger:.035,ease:"expo.out"},0).to(".hero__meta > *",{y:0,opacity:1,duration:1,stagger:.08,ease:"expo.out"},.3).to("[data-hero-fade]",{y:0,opacity:1,duration:1.2,stagger:.1,ease:"expo.out"},.55),Bt.to(".hero__title",{yPercent:-30,opacity:.15,ease:"none",scrollTrigger:{trigger:Um,start:"top top",end:"bottom top",scrub:!0}})}BE(Gi).then(()=>{document.documentElement.classList.remove("is-loading"),hi?.start(),Im.intro(),eT(),Wt.refresh(),tT.openFromHash()});document.fonts?.ready.then(()=>Wt.refresh());window.addEventListener("load",()=>Wt.refresh());
