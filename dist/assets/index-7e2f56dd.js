var h=Object.defineProperty;var u=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var s=(r,e,o)=>(u(r,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();class n{static init(){this.canvas=document.querySelector("canvas"),this.ctx=this.canvas.getContext("2d")}}s(n,"canvas"),s(n,"ctx");class m{constructor(e){s(this,"url","");s(this,"isLoaded",!1);s(this,"domImg");s(this,"width",0);s(this,"height",0);s(this,"x",0);s(this,"y",0);this.url=e,this.domImg=document.createElement("img"),this.load()}load(){this.domImg.src=this.url,this.domImg.onload=()=>{this.isLoaded=!0,this.width=this.domImg.width,this.height=this.domImg.height}}draw(){this.isLoaded&&n.ctx.drawImage(this.domImg,(n.canvas.width-this.width)/2,(n.canvas.height-this.height)/2)}}const f="/assets/logo-93fb6484.png";console.log("main.ts run");n.init();let d=new m(f);d.draw();function l(){d.draw(),requestAnimationFrame(l)}l();
