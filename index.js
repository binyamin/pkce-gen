const crypto = require("crypto");

// Credits for crypto logic: <https://www.loginradius.com/engineering/blog/pkce/>

function create(hasState) {
    const obj = {};

    obj.code_verifier = randomString();
    obj.code_challenge = base64URLEncode(sha256(obj.code_verifier));

    if(hasState === true) {
        obj.state = randomString()
    }

    return obj;
}

/** @returns {string} crypto-generated base64 string */
function randomString() {
    return base64URLEncode(crypto.randomBytes(32))
}

/** @param {string} str */
function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

/** @param {import("crypto").BinaryLike} buffer */
function sha256(buffer) {
    return crypto.createHash("sha256").update(buffer).digest();
}


module.exports = {
    create
}
