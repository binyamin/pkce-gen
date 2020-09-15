/**
 * Creates a code verifier & code challenge
 * @param {object} [options={}]
 * @param {boolean} [options.hasState=false] - Also return random string for state (default: false)
 * @returns {{code_challenge: string, code_verifier: string, state?: string}}
 */
export function create(options?: {
    hasState: boolean;
}): {
    code_challenge: string;
    code_verifier: string;
    state?: string;
};
