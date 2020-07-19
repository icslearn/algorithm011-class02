/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const gl = g.length, sl = s.length;
    let gi = 0, si = 0;
    while(gi < gl && si < sl) {
        if (s[si] >= g[gi]) {
            gi++;
        }
        si++;
    }
    return gi;
};