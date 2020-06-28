// 环状替换
var rotate = function(nums, k) {
    const l = nums.length;
    let count = 0;
    let active = 0;
    let activeValue = nums[0];
    for (let start = 0; count < l; start++) {
        active = start;
        activeValue = nums[start];
        do {
            const correct = (active + k) % l;
            let tmp = nums[correct];
            nums[correct] = activeValue;
            active = correct;
            activeValue = tmp;
            count++
        } while(start !== active)
    }
};

// 反转数组
var rotate = function(nums, k) {
    const l = nums.length;
    if (l < 2) {
        return ;
    }
    k = k % l;
    function revert(p, q, arr) {
        for (let i = 0; i < (q - p + 1) / 2; i++) {
            const tmp = nums[p + i];
            nums[p + i] = nums[q - i];
            nums[q - i] = tmp;
        }
    }
    revert(0, l - 1, nums);
    revert(0, k - 1, nums);
    revert(k, l - 1, nums);
};