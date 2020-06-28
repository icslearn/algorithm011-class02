var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (map[remainder] !== undefined) {
            return [map[remainder], i];
        }
        map[nums[i]] = i;
    }
};