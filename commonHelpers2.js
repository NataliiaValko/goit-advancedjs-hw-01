import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as a}from"./assets/vendor-78be7656.js";const i=document.querySelector("iframe"),e=new r(i),t="videoKey";e.on("timeupdate",a(({seconds:o})=>localStorage.setItem(t,JSON.stringify(o)),1e3));e.setCurrentTime(JSON.parse(localStorage.getItem(t))||0);
//# sourceMappingURL=commonHelpers2.js.map
