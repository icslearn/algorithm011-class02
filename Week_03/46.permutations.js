/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    (function backtrack(level, item) {
        if (level === 0) {
            result.push(item.slice());
        }
        for (let i = 0; i < level; i++) {
            swap(nums, i, level - 1);
            backtrack(level - 1, nums);
            swap(nums, i, level - 1);
        }
    })(nums.length, [])
    return result
};

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * 回搠法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var len = nums.length;
    var result = [];
    var used = {};
    (function backtrack(level, item) {
        if (level === len) {
            result.push(item.slice());
        }
        for (let i = 0; i < len; i++) {
            if (used[nums[i]]) {
                continue;
            }
            item.push(nums[i]);
            used[nums[i]] = true;
            backtrack(level + 1, item);
            item.pop();
            used[nums[i]] = false;
        }
    })(0, [])
    return result
};
// @lc code=end

