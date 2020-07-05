/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return []
    }
    const result = [];
    let level = 0;
    let queue = [root];
    while(queue.length) {
        const currLevelValues = [];
        const currLevelNodeCount = queue.length;
        for (let i = 0; i < currLevelNodeCount; i++) {
            const node = queue[i];
            currLevelValues.push(node.val);
            for (let p = 0; p < node.children.length; p++) {
                queue.push(node.children[p]);
            }
        }
        result[level] = currLevelValues;
        level++;
        queue.splice(0, currLevelNodeCount);
    }
    return result;
};