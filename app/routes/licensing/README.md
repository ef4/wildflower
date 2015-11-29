Every licensing step shares the same route implementation
(`./base.js`). They get registered dynamically via an initializer, so
that we can't accidentally make one different.
