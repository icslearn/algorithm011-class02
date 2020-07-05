/**
 * 递归法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, result = []) {
    if (root === null) {
        return [];
    }
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
    return result;
};

/**
 * 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }
    const stack = [];
    let node = root;
    while(node != null || stack.length) {
        while(node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }
    return result;
};