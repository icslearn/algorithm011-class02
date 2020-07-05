/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @param {number[]} result
 * @return {number[]}
 */
var preorder = function(root, result = []) {
    if (!root) {
        return result;
    }
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
        preorder(root.children[i], result);
    }
    return result;
};