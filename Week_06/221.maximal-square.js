
/**
 * 输入 m * n 矩阵
 * 空间复杂度 O(m * n)
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0
    }
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    const dp = Array.from(new Array(rowLen + 1), () => new Array(colLen + 1).fill(0));
    let max = 0;
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            dp[i + 1][j + 1] = +matrix[i][j] && Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
            max = Math.max(dp[i + 1][j + 1], max);
        }
    }
    return max * max
};

/**
 * 输入 m * n 矩阵
 * 空间复杂度 O(2m)
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0
    }
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let dp = new Array(colLen + 1).fill(0);
    let tmp;
    let max = 0;
    for (let i = 0; i < rowLen; i++) {
        tmp = [...dp];
        for (let j = 0; j < colLen; j++) {
            dp[j + 1] = +matrix[i][j] && Math.min(tmp[j], tmp[j + 1], dp[j]) + 1;
            max = Math.max(dp[j + 1], max);
        }
    }
    return max * max
};

/**
 * 输入 m * n 矩阵
 * 空间复杂度 O(m)
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0
    }
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let dp = new Array(colLen + 1).fill(0);
    let northwest = 0;
    let max = 0;
    for (let i = 0; i < rowLen; i++) {
        northwest = 0;
        for (let j = 0; j < colLen; j++) {
            const nextNorthwest = dp[j + 1];
            dp[j + 1] = +matrix[i][j] && Math.min(northwest, dp[j + 1], dp[j]) + 1;
            northwest = nextNorthwest;
            max = Math.max(dp[j + 1], max);
        }
    }
    return max * max
};