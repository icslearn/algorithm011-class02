/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let n = nums.length;
    let c = new Array(n + 1).fill(0);
    let count = 0;
    let lowbit = (x) => {
        return x&(-x);
    }
    let getSum = (x) => {
        let sum = 0;
        while(x <= n){
            sum += c[x];
            x += lowbit(x);
        }
        return sum;
    }
    let update = (x) => {
        while(x){
            c[x] += 1;
            x -= lowbit(x);
        }
    }
    let count_i = (val) => {
        let l = 0,r = sortArr.length - 1,m = 0;
        while(l <= r){
            m = l + ((r - l) >> 1);
            if(sortArr[m] >= val){
                r = m - 1;
            }else{
                l = m + 1;
            }
        }
        return l + 1;
    }
    let sortArr = nums.slice().sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i++){
        count += getSum(count_i(2 * nums[i] + 1));
        update(count_i(nums[i]));
    }
    return count;
};
// todo