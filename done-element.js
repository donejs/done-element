// Load the custom elements polyfill, if needed
require("@webcomponents/custom-elements/custom-elements.min#?done-element/conditions.ce");

// Load the shadow dom polyfill, if needed
require("cloudydom/cloudydom.min#?done-element/conditions.shadow");

// Re-export can-element
module.exports = require("can-element");
