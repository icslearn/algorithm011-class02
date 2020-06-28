var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    while (i >=0 && j >= 0) {
        if (nums2[j] > nums1[i]) {
            nums1[i + j + 1] = nums2[j];
            j--;
        } else {
            nums1[i + j + 1] = nums1[i];
            i--;
        }
    }
    if (i === -1) {
        for (let index = 0; index <= j; index++) {
            nums1[index] = nums2[index];
        }
    }
    return nums1
};