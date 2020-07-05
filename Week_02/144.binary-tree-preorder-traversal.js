/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*----------- 迭代法 ------------*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }

    const stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            result.push(curr.val);
            curr.right && stack.push(curr.right);
            curr = curr.left;
        }
        curr = stack.pop();
    }
    return result;
};

/*------------- 递归法 -------------*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }
    (function helper(node) {
        result.push(node.val);
        node.left && helper(node.left);
        node.right && helper(node.right);
    })(root)
    return result;
};