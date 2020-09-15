/**
 * Creates a code verifier & code challenge
 * @param {boolean} [hasState=false] - also return random string for state
 */
export function create(hasState?: boolean): {
    code_verifier: string;
    code_challenge: string;
    state?: string;
};
