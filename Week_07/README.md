## 字典树

### 基本性质

* 结点本身不存完整单词;
* 从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的 字符串;
* 每个结点的所有子结点路径代表的字符都不相同。

###  核心思想

* Trie 树的核心思想是空间换时间。
* 利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

### 代码模版

```python
class Trie(object):
    def __init__(self):
        self.root = {}
        self.end_of_word = "#"

    def insert(self, word):
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node[self.end_of_word] = self.end_of_word

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node:
                return False
            node = node[char]
        return self.end_of_word in node

    def startsWith(self, prefix): node = self.root
        for char in prefix:
            if char not in node:
                return False
            node = node[char]
        return True
```

## 并查集


### 基本操作

* makeSet(s):建立一个新的并查集，其中包含 s 个单元素集合。
* unionSet(x, y):把元素 x 和元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并。
* find(x):找到元素 x 所在的集合的代表，该操作也可以用于判断两个元 素是否位于同一个集合，只要将它们各自的代表比较一下就可以了。

### 实现

```java
class UnionFind {
    private int count = 0;
    private int[] parent;
    public UnionFind(int n) {
        count = n;
        parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    public int find(int p) {
        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    public void union(int p, int q) {
        int rootP = find(p);
        int rootQ = find(q);
        if (rootP == rootQ) return;
        parent[rootP] = rootQ;
        count--; 
    }
}
 
```

## ALU

1. 平衡二叉搜索树
2. 每个结点存balancefactor={-1,0,1}
3. 四种旋转操作

不足: 结点需要存储额外信息、且调整次数频繁



