/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];
    (function backtrack(level, item) {
        if (level === 0) {
            result.push(item.slice());
        }
        var usedMap = {};
        for (let i = 0; i < level; i++) {
            var used = usedMap[nums[i]];
            if (used) {
                continue ;
            }
            usedMap[nums[i]] = true;
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
var permuteUnique = function(nums) {
    var len = nums.length;
    var result = [];
    var used = {};
    nums.sort((a, b) => a - b);
    (function backtrack(level, item) {
        if (level === len) {
            return result.push(item.slice());
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) {
                continue;
            }
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }
            item.push(nums[i]);
            used[i] = true;
            backtrack(level + 1, item);
            item.pop();
            used[i] = false;
        }
    })(0, [])
    return result
};
// @lc code=end

