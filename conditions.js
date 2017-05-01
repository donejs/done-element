exports.ce = exports.shim = !(typeof customElements === "object" && typeof customElements.define === "function");
exports.shadow = !(typeof document.createElement("div").attachShadow === "function");
