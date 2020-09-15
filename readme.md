# PKCE Generator
[![npm bundle size](https://img.shields.io/bundlephobia/min/pkce-gen)](https://npmjs.com/package/pkce-gen)
> Generate code challenge & code verifier for PKCE (zero-dependencies)

**Note**: If you want something, just open an issue.

## Install
```sh
npm install --save pkce-gen
```

## Usage
```js
const {create} = require("pkce-gen");

create();
// => {code_verifier, code_challenge}

create(true)
// => {...state}
```

## License
MIT ©️ [Binyamin Green](https://binyam.in)

Crypto-related logic is from [this article](https://www.loginradius.com/engineering/blog/pkce/).
