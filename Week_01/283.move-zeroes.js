// 滚雪球
var moveZeroes = function(nums) {
    let zeroHead = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (zeroHead === -1){
                continue
            }
            nums[zeroHead] = nums[i];
            nums[i] = 0;
            zeroHead++
        } else if (zeroHead === -1) {
            zeroHead = i;
        }
    }
    return nums;
};