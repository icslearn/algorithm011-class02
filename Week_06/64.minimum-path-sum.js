/**
 * dp
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const dp = [...grid[rowLen - 1]];
    for(let j = colLen - 2; j >= 0; j--) {
        dp[j] = dp[j + 1] + grid[rowLen - 1][j];
    }
    for (let i = rowLen - 2; i >= 0; i--) {
        dp[colLen - 1] = dp[colLen - 1] + grid[i][colLen - 1];
        for(let j = colLen - 2; j >= 0; j--) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + grid[i][j];
        }
    }
    return dp[0];
};