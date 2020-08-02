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
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 单链表
class SingleList {
    constructor() {
        this.size = 0;  // 单链表的长度
        this.head = new Node('head');  // 表头节点
        this.currNode = '';  // 当前节点的指向
    }

    // 判断单链表是否为空
    isEmpty() {
        return this.size === 0;
    }

    // 获取单链表的最后一个节点
    findLast() {
        let currNode = this.head;

        while (currNode.next) {
            currNode = currNode.next;
        }

        return currNode;
    }

    // 单链表的遍历显示
    display() {
        let result = '';
        let currNode = this.head;

        while (currNode) {
            result += currNode.data;
            currNode = currNode.next;
            if(currNode) {
                result += '->';
            }
        }
        console.log(result);
    }

    // 从当前位置向前移动 n 个节点。
    advance(n, currNode = this.head) {
        this.currNode = currNode;

        while ((n--) && this.currNode.next) {
            this.currNode = this.currNode.next;
        }

        return this.currNode;
    }

    // 在单链表中寻找item元素
    find(item) {
        let currNode = this.head;

        while (currNode && (currNode.data !== item)) {
            currNode = currNode.next;
        }

        return currNode;
    }

    // 显示当前节点
    show() {
        console.log(this.currNode.data);
    }

    // 获取单链表的长度
    getLength() {
        return this.size;
    }

    // 向单链表中插入元素
    insert(item, element) {
        let itemNode = this.find(item);

        if(!itemNode) {  // 如果item元素不存在
            return;
        }

        let newNode = new Node(element);

        newNode.next = itemNode.next; // 若currNode为最后一个节点，则currNode.next为空
        itemNode.next = newNode;
       
        this.size++;
    }

    // 在单链表中删除一个节点
    remove(item) {
        if(!this.find(item)) {  // item元素在单链表中不存在时
            return;
        }

        // 企图删除头结点
        if (item === 'head') {
            if (!(this.isEmpty())) {
                return;
            } else {
                this.head.next = null;
                return;
            }
        }

        let currNode = this.head;

        while (currNode.next.data !== item) {
            // 企图删除不存在的节点
            if (!currNode.next) {
                return;
            }
            currNode = currNode.next;
        }


        currNode.next = currNode.next.next;
        this.size--;
    }

    // 在单链表的尾部添加元素
    append(element) {
        let currNode = this.findLast();
        let newNode = new Node(element);

        currNode.next = newNode;
        this.size++;
    }

    // 清空单链表
    clear() {
        this.head.next = null;
        this.size = 0;
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
        return this._queue[0];
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
        this._queue = [];
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