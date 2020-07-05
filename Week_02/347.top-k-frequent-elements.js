// 堆排序实现
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // { key: 数字, value: 数字出现的次数 }
    const map = {};
    nums.forEach(function(item) {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    });
    // 将数字出现的次数对应到 数组的下标，
    // 数组的元素为：数字出现次数 === 该下标的所有数字所组成的数组
    // e.g.
    // nums = [1,1,1,1,2,2,3,4,4,5]
    // var mar = {
    //     1: 4,
    //     2: 2,
    //     3: 1
    // }
    // var counter = [
    //     0: empty,
    //     1: [3,5],
    //     2: [2,4],
    //     3: empty,
    //     4: [1]
    // ]
    const counter = [];
    for (const key in map) {
        if (counter[map[key]]) {
            counter[map[key]].push(key);
        } else {
            counter[map[key]] = [key]
        }
    }
    // 将 counter 后 K 个元素（couter 下标越大，频次越高）的值依次拼接到 result 并输出
    let result = [];
    for (let i = counter.length - 1; i >= 0; i--) {
        const element = counter[i];
        if (element) {
            result = result.concat(element);
        }
        if (result.length === k) {
            return result;
        }
    }
};

/*----------------------------------------------*/
// 优先队列实现（最小堆）
var QueueElement  = function(element, priority) {
    this.element = element;
    this.priority = priority;
}

var PriorityQueue = function() {
    this.queue = [];
}

PriorityQueue.prototype.add = function(element, priority) {
    // 新加元素 item -- 游离元素
    const item = new QueueElement(element, priority)
    if (this.queue.length === 0) {
        return this.queue.push(item);
    }
    // 将新加元素放置到树尾
    let index = this.queue.length;
    // 对堆重新排序，将新加元素移至正确位置
    do {
        // 新加元素的父节点
        const fathorIndex = index - 1 >> 1;
        // 新加元素的父节点优先级大于新加元素，则交换父子节点
        if (this.queue[fathorIndex].priority > item.priority) {
            this.queue[index] = this.queue[fathorIndex];
            index = fathorIndex;
            // 这里并没有将子节点放置到父节点，
            // 因为子节点有可能还要与其父父节点进行交换（当子节点优先级大于其父父节点时）
        }
        // 否则，新加元素的下标已为正确位置
        else {
            break;
        }
    } while (index !== 0)
    // 新加元素移动至正确位置
    this.queue[index] = item;
}

PriorityQueue.prototype.poll = function() {
    if (this.queue.length === 1) {
        return this.queue.pop().element;
    }
    // 被移除的堆顶元素
    const removeItem = this.queue[0];
    // 将堆尾元素移至堆顶 -- 游离元素
    let item = this.queue.pop();
    let index = 0;
    // 对堆重新排序，将从堆尾移至堆顶的元素（游离元素）移至正确位置
    while (index < this.queue.length >> 1) {
        // 找到游离元素我的最小子元素
        const childIndex = 
            this.queue[(index << 1) + 2] &&
            this.queue[(index << 1) + 1].priority > this.queue[(index << 1) + 2].priority
                ? (index << 1) + 2
                : (index << 1) + 1;
        // 如果子元素的优先级小于游离元素，则交换父（游离元素）子节点
        if (this.queue[childIndex].priority < item.priority) {
            this.queue[index] = this.queue[childIndex];
            index = childIndex;
        }
        // 否则，游离元素的下标已为正确位置
        else {
            break;
        }
    }
    // 游离元素移动至正确位置
    this.queue[index] = item;
    // 返回原堆顶元素（优先级最小的元素）
    return removeItem.element;
}
PriorityQueue.prototype.size = function() {
    return this.queue.length;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    nums.forEach(function(item) {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    });
    const queue = new PriorityQueue();
    for (const key in map) {
        // 队列已满
        if(k == queue.size()){
            // 新加元素优先级大于堆顶元素时，才需要调整队列，否则，无需任何操作
            if(map[key] > queue.queue[0].priority){
                queue.poll();
                queue.add(key, map[key]);
            }
        }
        // 队列未满，则直接加入队列
        else{
            queue.add(key, map[key]);
        }
    }
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(queue.poll());
    }
    return result;
};