!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i"),i=document.querySelector("button"),u=document.querySelector("form"),c={};u.addEventListener("input",(function(e){c[e.target.name]=Number(e.target.value)})),i.addEventListener("click",(function(e){e.preventDefault();for(var n=0;n<c.amount;n+=1)a(n+1,c.delay).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),c.delay+=c.step}));var a=function(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o&&t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),Number(c.delay))}))}}();
//# sourceMappingURL=03-promises.41dee618.js.map
