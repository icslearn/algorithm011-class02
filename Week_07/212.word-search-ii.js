/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const wordTrie = new Trie();
    for (let i = 0; i < words.length; i++) {
        wordTrie.insert(words[i]);
    }

    const res = new Set();
    const neighbors = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const rowLen = board.length;
    const colLen = board[0].length;
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (wordTrie[board[i][j]]) {
                dfs(i, j, wordTrie[board[i][j]]);
            }
        }
    }

    function dfs(row, col, node) {
        if (node.word) {
            res.add(node.word);
        }
        const temp = board[row][col];
        board[row][col] = '#';
        for (let i = 0; i < neighbors.length; i++) {
            const nextRow = row + neighbors[i][0];
            const nextCol = col + neighbors[i][1];
            if (
                nextRow >= 0 &&
                nextRow < rowLen &&
                nextCol >=0 &&
                nextCol < colLen &&
                node[board[nextRow][nextCol]]
            ) {
                dfs(nextRow, nextCol, node[board[nextRow][nextCol]]);
            }
        }
        board[row][col] = temp;
    }
    return Array.from(res);
}

class Trie {
    word = '';
    insert(word) {
        let node = this;
        for (const char of word) {
            if (!node[char]) {
                node[char] = new Trie();
            }
            node = node[char];
        }
        node.word = word;
    }
}