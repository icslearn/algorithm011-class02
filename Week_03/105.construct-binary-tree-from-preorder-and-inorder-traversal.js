/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    var helper = function(pres, ins, length) {
        if (length === 0) {
            return null;
        } else if (length === 1) {
            return {
                val: preorder[pres],
                left: null,
                right: null
            }
        }
        var val = preorder[pres];
        var midIndex = map[val];
        var leftpres = pres + 1;
        var leftins = ins;
        var leftlength = midIndex - ins;
        var rightpres = leftpres + leftlength;
        var rightins = midIndex + 1;
        var rightlength = length - leftlength - 1;
        var left = helper(leftpres, leftins, leftlength);
        var right = helper(rightpres, rightins, rightlength);
        return {
            val,
            left,
            right
        }
    };
    return helper(0, 0, preorder.length)
};
// @lc code=end

