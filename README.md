# done-element

[![Build Status](https://travis-ci.org/donejs/done-element.png?branch=master)](https://travis-ci.org/donejs/done-element) [![Greenkeeper badge](https://badges.greenkeeper.io/donejs/done-element.svg)](https://greenkeeper.io/)

Custom elements for DoneJS projects. This works exactly the same as [can-element](https://github.com/canjs/can-element), but also loads polyfills if needed.

```html
<!doctype html>

<title>Hello world app</title>

<hello-world name="DoneJS"></hello-world>
```

```js
import mixinElement from "done-element";
var defineAttr from "done-element/attributes";
import define from "can-define";

const { Element } = minElement;

const view = stache("Hello {{name}}!");

class HelloWorld extends Element {
	static get view() {
		return view;
	}
}

define(HelloWorld.prototype, {
	name: {
		attribute: true,
		value() {
			return "world";
		}
	}
});
defineAttr(HelloWorld);

customElements.define("hello-world", HelloWorld);
```

Will create **Hello DoneJS!**.

## License

MIT
