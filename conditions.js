exports.ce = exports.shim = !(typeof customElements === "object" && typeof customElements.define === "function");

var div = typeof document === "undefined" ? {} : document.createElement("div");
exports.shadow = typeof div.attachShadow === "undefined";
