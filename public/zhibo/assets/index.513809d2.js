import{d as e,z as t,r,c as o,w as n,S as s,o as a,a as i,b as c,e as l,f as d,g as m,A as u}from"./vendor.1d23b445.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var p=e({data:()=>({locale:t}),name:"App",setup(){}});p.render=function(e,t,c,l,d,m){const u=r("router-view"),p=r("a-config-provider");return a(),o(s,null,{default:n((()=>[i(p,{locale:e.locale},{default:n((()=>[i(u)])),_:1},8,["locale"])])),_:1})};const f={},h=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in f)return;f[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var _=[{path:"/",name:"home",component:()=>h((()=>import("./home.68d9bf3b.js")),["assets/home.68d9bf3b.js","assets/index.a91ec75f.js","assets/vendor.1d23b445.js"])},{path:"/center",name:"center",component:()=>h((()=>import("./center.08652f36.js")),["assets/center.08652f36.js","assets/center.ae3039e6.css","assets/index.a91ec75f.js","assets/vendor.1d23b445.js"])},{path:"/btn",name:"btn",component:()=>h((()=>import("./btn.ae979ec7.js")),["assets/btn.ae979ec7.js","assets/vendor.1d23b445.js"])},{path:"/404",name:"404",component:()=>h((()=>import("./404.efb07715.js")),["assets/404.efb07715.js","assets/vendor.1d23b445.js"])},{path:"/:currentPath(.*)*",redirect:e=>({path:"/404"})}];const v=c({history:l(),routes:_,scrollBehavior:(e,t,r)=>({el:"#app",top:0,behavior:"smooth"})});var y=d({state:{demo:"vuexstore",css:!0},mutations:{setName(e,t){e.demo=t}},actions:{asyncSetName(e,t){setTimeout((()=>{e.commit("setName",t)}),2e3)}},getters:{},modules:{}});const b=m(p);b.use(u),b.use(y),b.use(v),b.mount("#app");
