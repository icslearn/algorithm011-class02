/**
 * dp
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s == 0 || s[0] === '0') {
        return 0
    }
    let dp = 1;
    let pre = 1;
    for(let i = 0; i < s.length; i++) {
        const tmp = dp;
        if (s[i] === '0') {
            return 0
        } else if (s[i + 1] === '0') {
            if (s[i] > 2) {
                return 0
            }
            i++
        } else {
            if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] < 7)) {
                dp = pre + dp;
            }
        }
        pre = tmp;
    }
    return dp;
};