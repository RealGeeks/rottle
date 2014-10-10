Rottle
======

Throttle function calls using [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame).

Installation
------------

```bash
npm install rottle
```

Usage
-----

```js
var throttle = require('rottle');

var task = function () {
  console.log('done');
};

var throttledTask = throttle(task);

throttledTask();
throttledTask();

// Will log 'done' only once.

```

