import{s as C,n as v,e as P}from"../chunks/scheduler.e108d1fd.js";import{S as k,i as A,g,s as x,m,h as b,y as I,c as _,n as d,a as h,f as r,A as $,j as B,k as O,x as R}from"../chunks/index.06801730.js";import{p as q}from"../chunks/stores.be71dbe8.js";function S(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const z=!1,F=Object.freeze(Object.defineProperty({__proto__:null,prerender:z},Symbol.toStringTag,{value:"Module"}));function j(s,i,f){const o=s.slice();return o[4]=i[f].text,o[5]=i[f].url,o[7]=f,o}function y(s){let i=s[4]+"",f,o,n,p=s[5]+"",u,c,t;return{c(){f=m(i),o=m(": "),n=g("a"),u=m(p),c=x(),t=g("br"),this.h()},l(e){f=d(e,i),o=d(e,": "),n=b(e,"A",{href:!0});var l=B(n);u=d(l,p),l.forEach(r),c=_(e),t=b(e,"BR",{}),this.h()},h(){O(n,"href",s[4])},m(e,l){h(e,f,l),h(e,o,l),h(e,n,l),R(n,u),h(e,c,l),h(e,t,l)},p:v,d(e){e&&(r(f),r(o),r(n),r(c),r(t))}}}function E(s){let i,f="I will list here some useful links for interacting with people. In case I get the feeling someone wastes my or even their own time with useless stuff.",o,n,p,u,c=S(s[0]),t=[];for(let e=0;e<c.length;e+=1)t[e]=y(j(s,c,e));return{c(){i=g("p"),i.textContent=f,o=x();for(let e=0;e<t.length;e+=1)t[e].c();n=x(),p=g("br"),u=m(" how to use: /redirect?name")},l(e){i=b(e,"P",{"data-svelte-h":!0}),I(i)!=="svelte-1jvi2fc"&&(i.textContent=f),o=_(e);for(let l=0;l<t.length;l+=1)t[l].l(e);n=_(e),p=b(e,"BR",{}),u=d(e," how to use: /redirect?name")},m(e,l){h(e,i,l),h(e,o,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,l);h(e,n,l),h(e,p,l),h(e,u,l)},p(e,[l]){if(l&1){c=S(e[0]);let a;for(a=0;a<c.length;a+=1){const w=j(e,c,a);t[a]?t[a].p(w,l):(t[a]=y(w),t[a].c(),t[a].m(n.parentNode,n))}for(;a<t.length;a+=1)t[a].d(1);t.length=c.length}},i:v,o:v,d(e){e&&(r(i),r(o),r(n),r(p),r(u)),$(t,e)}}}function M(s,i,f){let o;P(s,q,c=>f(1,o=c));let n=[{text:"ask",url:"https://dontasktoask.com"},{text:"hello",url:"https://nohello.net/en/"},{text:"try",url:"https://tryitands.ee"}];const u=o.url.searchParams.toString().slice(0,-1);for(const c in n)if(n[c].text==u){window.location.href=n[c].url;break}return[n]}class G extends k{constructor(i){super(),A(this,i,M,E,C,{})}}export{G as component,F as universal};
