/**
 * https://leetcode-cn.com/problems/edit-distance/solution/dong-tai-gui-hua-java-by-liweiwei1419/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const word1L = word1.length;
    const word2L = word2.length;
    const dp = Array.from(new Array(word1L + 1), () => new Array(word2L + 1));
    for (let i = 0; i <= word1L; i++) {
      dp[i][0] = i;
    }
    for (let i = 0; i <= word2L; i++) {
      dp[0][i] = i
    }
  
    for (let i = 0; i < word1L; i++) {
      for (let j = 0; j < word2L; j++) {
        if (word1[i] === word2[j]) {
          dp[i + 1][j + 1] = dp[i][j]
        } else {
          const replace = dp[i][j] + 1;
          const remove = dp[i][j + 1] + 1;
          // word1 插入的字符要与 word2[j + 1] 相等
          // insert = dp[i + 2][j + 1]
          // word1[i + 2] === word2[j + 1]
          // 则：dp[i + 2][j + 1] === dp[i + 1][j]
          const insert = dp[i + 1][j] + 1;
          dp[i + 1][j + 1] =
            Math.min(
              replace,
              remove,
              insert
            );
        }
      }
    }
    return dp[word1L][word2L];
  };
  