/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const charCodeBase = 'a'.charCodeAt();
    const map = {}
    for (let i = 0; i < strs.length; i++) {
        const item = strs[i];
        const counter = [];
        for (let p = 0; p < item.length; p++) {
            const index = item[p].charCodeAt() - charCodeBase;
            if (!counter[index]) {
                counter[index] = 0;
            }
            counter[index]++;
        }
        const aaa = counter.join();
        if (!map[aaa]) {
            map[aaa] = [];
        }
        map[aaa].push(strs[i]);
    }
    const result = [];
    for (let k in map) {
        result.push(map[k]);
    }
    return result;
};