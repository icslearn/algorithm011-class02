/**
 * dp
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const len = s.length;
    const dp = Array.from(new Array(len), () => new Array(len));
    let count = len;
    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = true;
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = j === i + 1 ? true : dp[i + 1][j - 1]
            }
            if (dp[i][j]) {
                count++
            }
        }
    }
    return count
};