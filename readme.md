# PKCE Generator
[![npm bundle size](https://img.shields.io/bundlephobia/min/pkce-gen)](https://npmjs.com/package/pkce-gen)
[![CI](https://github.com/binyamin/pkce-gen/workflows/Test/badge.svg)](https://github.com/binyamin/pkce-gen/actions)

> Generate code challenge & code verifier for PKCE (zero-dependencies)

**Note**: If you want something, just open an issue.

## Install
```sh
npm install --save pkce-gen
```

## Usage
```js
const pkce = require("pkce-gen");

pkce.create();
// => {code_verifier, code_challenge}

pkce.create({ hasState: true })
// => {...state}
```

## Related
- [bukalapak/pkce-npm](https://github.com/bukalapak/pkce-npm) - Same goal as here, and a bit bulkier, but (ostensibly) works in the browser as well.
- [aaronpk/pkce-vanilla-js](https://github.com/aaronpk/pkce-vanilla-js) - Aaron Parecki's demo for doing this in the browser.

## License
MIT ©️ [Binyamin Green](https://binyam.in)

Crypto-related logic is from [this article](https://www.loginradius.com/engineering/blog/pkce/).
