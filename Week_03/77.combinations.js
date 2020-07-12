/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n < k) {
        return [];
    } else if (n === k) {
        const res = []
        for (let i = 1; i < n + 1; i++) {
            res.push(i);
        }
        return [res]
    }
    const result = [];
    (function helper(i, j, item, level) {
        if (i === 0 && j === 0) {
            result.push(item.slice());
        }
        if (i > 0) {
            item.push(level);
            helper(i - 1, j, item, level + 1);
            item.pop();
        }
        if (j > 0) {
            helper(i, j - 1, item, level + 1);
        }
    })(k, n - k, [], 1)
    return result;
};
// @lc code=end

