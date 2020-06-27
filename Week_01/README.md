## 一、算法的学习方法

通过这一周的学习，我最大的收获就是找到了在算法方面更有效的学习方法：

1. 不要死磕
2. 过遍数
3. 学习优质题解

同时也发现了自己以前学习算法的误区：只做一遍；死磕。

leetcode 很早之前就接触过了，但平时很少在上面刷题，没有规划和习惯。看完超哥讲的算法学习方法和误区后，我再去看我一年前做过的题，发现确实一点印象都没有了。。。而且以前刷题刻意的挑一些难度为困难的题刷，就想别人能做出来的题我为什么不行？所以经常受挫，刷题的积极性慢慢的就被打消了。对此我自己也进行了深刻的反思：其实不论是在工作还是生活中，绝大部分能力的提示都是考熟能生巧的，谁也不呢能一蹴而就。先踏踏实实的汲取知识，能够举一反三，那就很不错了。我们要认清自己，不要在只习得皮毛的情况下就妄想“举一反百”。

在接下来的时间里，我也要坚持像这周一样，多次重复的观看教学视频，同时在 leetcode 上刷相关的题，刻意练习，让刷题成为一种习惯。

## 二、数组、链表、跳表、队列、栈

1. 数组

* 特点：可随机访问
* 时间复杂度

|操作|复杂度|
|:--:|:--:|
|inset|O(n)|
|delete|O(n)|
|append|O(1)|
|preappend|O(1)|
|lookup|O(n)|

2. 链表

* 工程中的应用：LRU Cache
* 时间复杂度

|操作|复杂度|
|:--:|:--:|
|inset|O(1)|
|delete|O(1)|
|append|O(1)|
|preappend|O(1)|
|lookup|O(n)|


* javascript 实现：
```js
class Node() {
    constructor(element) {
        this.element = element; // 当前节点的元素
        this.next = null; // 下一个节点链接
    }
}
class LinkList {
    head = new Node('head'); // 头节点
    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
    remove(item) {
        var prevNode = this._findPrev(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
    _findPrev(item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
}
```

3. 跳表（只能用于元素有序的情况，对标的是平衡树和二分查找）

* 优势: 是原理简单、容易实现、方便扩展、效率更高
* 工程中的应用：Redis
* 时间复杂度

|操作|复杂度|
|:--:|:--:|
|inset|O(log n)|
|delete|O(log n)|
|append|O(log n)|
|preappend|O(log n)|
|lookup|O(log n)|

4. 队列

* 特点：先进先出
* 时间复杂度

|操作|复杂度|
|:--:|:--:|
|inset|O(1)|
|delete|O(1)|
|lookup|O(n)|

* javascript 实现：
```js
class Queue {
    _queue = [];
    add(para) {
        this._queue.push(para);
    }
    delete() {
        // 从队首移除，即删除的是数组第一位
        this._queue.shift();
    }
    queueFront() {
        return queue[0];
    }
    isEmpty() {
        if (this._queue.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    size() {
        return this._queue.length;
    }
    emptyQueue() {
        queue = [];
    }
}

/**
 * 优先队列
 */
class QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
}

class PriorityQueue {
    _items = [];
    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < this._items.length; i++) {
            if (queueElement.priority < isFinite([i].priority)) {
                this._items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this._items.push(queueElement);
        }
    };
}

```

5. 栈

* 特点：先进后出
* 时间复杂度

|操作|复杂度|
|:--:|:--:|
|inset|O(1)|
|delete|O(1)|
|lookup|O(n)|

* javascript 实现：
```js
class Stack {
    _stack = [];
    add(para) {
        stack.push(para);
    };
    delete() {
        // 删除栈顶元素
        stack.pop(); //删除数组末尾元素，
    }
    size() {
        return stack.length;
    }
    peek() {
        return stack[stack.length - 1];
    }
    isEmpty() {
        if (stack.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    emptyStack() {
        stack = [];
    }
}
```