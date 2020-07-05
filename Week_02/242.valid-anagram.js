/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) map[s[i]] = 0;
        if (map[t[i]] === undefined) map[t[i]] = 0;
        map[s[i]]++;
        map[t[i]]--;
    }
    for(let k in map) {
        if (map[k] !== 0) {
            return false;
        }
    }
    return true;
};