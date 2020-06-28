// 破坏原有数组中的元素
var removeDuplicates = function(nums) {
    let move = 0;
    if (nums.length <= 1) {
        return nums.length;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] === nums[i]) {
            move++;
        } else {
            move && (nums[i - move] = nums[i]);
        }
    }
    return nums.length - move;
}

// 不破坏原有数组中的元素
var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let cursor = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[cursor] !== nums[i]) {
            cursor++
            const tmp = nums[cursor];
            nums[cursor] = nums[i];
            nums[i] = tmp;
        }
    }
    return cursor + 1;
}