const assert = require("assert");
const lib = require("./index");

// Default
const a = lib.create();

assert(a.code_verifier, "Should return code verifier");
assert(a.code_challenge, "Should return code challenge");
assert(a.state === undefined, "By default, should not return state");

// State enabled
const b = lib.create({hasState: true});
assert(b.state, "When hasState is true, should return state");

// Compare return values
assert.notDeepStrictEqual(a.code_verifier, b.code_verifier, "Should generated verifier");
assert.notDeepStrictEqual(a.code_challenge, b.code_challenge, "Should generated challenge");

console.log("All tests passed!")
