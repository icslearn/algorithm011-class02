/*--------广度优先遍历[to test]--------*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }

    const queue = [root];
    while (queue.length) {
        const currentLevelCount = queue.length;
        for (let i = 0; i < currentLevelCount; i++) {
            result.push(queue[i].val)
            queue[i].left && queue.push(queue[i].left);
            queue[i].right && queue.push(queue[i].right);
        }
        queue.splice(0, currentLevelCount);
    }
    return result;
};


/**
 * 二叉树前序遍历
 * 迭代法
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
// or (上面的方法更优，省去了左子节点入站出站的操作)
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }

    const stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        result.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }
    return result;
};

/**
 * 二叉树中序遍历
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
    while(node !== null || stack.length) {
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

/**
 * 二叉树后序遍历
 * 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const trace = new Map();
    const stack = [];
    let node = root;

    while (node !== null || stack.length) {
        // 将有左子节点的父节点依次押入栈中
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        // 若栈顶节点已被回访过（左子树遍历完后“回访”父节点，继续遍历父节点的右子树。“已被回访过”说明本次访问父节点是从右子树遍历完后回访的）
        // 则该节点为根的子树已遍历结束，弹出栈顶节点
        while (stack.length && trace.has(stack[stack.length - 1])) {
            result.push(stack.pop().val);
        }
        // 此时 node 为 null，继续遍历 node 的父节点（top）的右子树（top.right）
        if (stack.length) {
            const top = stack[stack.length - 1];
            // 将父节点置为“回访”过
            trace.set(top, true);
            // 继续遍历其右子数
            node = top.right;
        }
    }
    return result;
}
// or (使用 lastVisited 代替 trace 来判断右子节点是否访问过，优化了空间复杂度)
/**
 * 参考：https://www.jianshu.com/p/456af5480cee
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const stack = [];
    let lastVisited = root;
    let node = root;

    while (node !== null || stack.length) {
        // 将有左子节点的父节点依次押入栈中
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        const top = stack[stack.length - 1];
        // 如果没有右子节点 或 右子节点已被刚刚弹出（也就是说右子树已被遍历）
        // 则弹出栈顶节点
        if (top.right === null || top.right === lastVisited) {
            stack.pop();
            lastVisited = top;
            result.push(top.val);
        }
        // 否则程序继续处理右子树
        else {
            node = top.right;
        }
    }
    return result;
}