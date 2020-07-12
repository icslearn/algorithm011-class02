## 递归

### 思维要点

1. 不要人肉进行递归(最大误区)
2. 找到最近最简方法，将其拆解成可重复解决的问题(重复子问题)
3. 数学归纳法思维

### 递归通用模版

```js
function recursion(level, param1, param2, ...)
    // recursion terminator
    if level > MAX_LEVEL:
        process_result
        return
    
    // process logic in current level
    process(level, data...)
    
    // drill down
    recursion(level + 1, p1, ...)

    // reverse the current level status if needed
```

### 树的递归模版

```js
var path = []
function preorder(root) {
    if (root) {
        path.push(root.val)
        preorder(root.left);
        preorder(root.right);
    }
}
function postorder(root) {
    if (root) {
        postorder(root.left);
        postorder(root.right);
        path.push(root.val)
    }
}
function inorder(root) {
    if (root) {
        inorder(root.left);
        path.push(root.val)
        inorder(root.right);
    }
}
```


## 分治 & 回朔

### 分治

将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，分而治之。

对于一个规模为n的问题，若该问题可以容易地解决（比如说规模n较小）则直接解决，否则将其分解为k个规模较小的子问题，这些子问题互相独立且与原问题形式相同，递归地解这些子问题，然后将各子问题的解合并得到原问题的解

## 分治代码模版

```js
function divideConquer(problem, param1, param2, ...)
    // recursion terminator
    if (problem == null) {
        print_result
        return
    }
    
    // prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)

    // conquer subproblems
    subresult1 = divideConquer(subproblems[0], p1, ...)
    subresult2 = divideConquer(subproblems[1], p1, ...)
    subresult3 = divideConquer(subproblems[2], p1, ...)
    // ...

    // process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)

    // revert the current level states if needed
```

### 回朔

回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程 中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将 取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问 题的答案。

回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种 情况:
* 找到一个可能存在的正确的答案;
* 在尝试了所有可能的分步方法后宣告该问题没有答案。

在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。