// 链表的逆置
function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// 找到链表的最后一个节点
function findLastNode(root) {
  if (root.next != null) return findLastNode(root.next);
  else return root;
}
// console.log(findLastNode(node1));

// 遍历链表
function traverse(root) {
  if (root == null) return;
  console.log(root);
  traverse(root.next);
}

// traverse(node1);

/**
  执行流程图解
  假设原链表为：node1 -> node2 -> node3 -> node4 -> null

  递归调用链：nizhi(node1) → nizhi(node2) → nizhi(node3)
  终止条件触发于node3（此时node3.next.next === null）
  回溯过程：
  node4.next = node3 → node3.next = null
  node3.next = node2 → node2.next = null
  node2.next = node1 → node1.next = null
  最终返回node4作为新头节点，链表变为：node4 -> node3 -> node2 -> node1 -> null
  关键技术点
  递归回溯机制：利用函数调用栈保存节点引用，实现从尾到头的指针反转
  环链处理：通过root.next = null避免链表循环引用
  头节点传递：始终返回原链表最后一个节点作为新头节点
  复杂度分析
  时间复杂度：O(n)，需遍历链表所有节点
  空间复杂度：O(n)，递归调用栈深度等于链表长度
 */

function nizhi(root) {
  // 新增边界条件处理
  if (!root || !root.next) return root;
  // 递归终止条件：当前节点是倒数第二个节点
  if (root.next.next == null) {
    console.log("root", root.next);
    // 处理最后两个节点
    root.next.next = root; // 最后一个节点指向倒数第二个节点 ？？？
    return root.next; // 返回最后一个节点作为新头节点
  } else {
    const res = nizhi(root.next); // 递归处理剩余链表
    // 以下代码在回溯过程中执行
    root.next.next = root; // 当前节点的下一个节点指向自己  反转指针指向前一个节点
    root.next = null; // 断开原指针的正向连接 避免循环引用

    return res; // 传递新头节点
  }
}

const newRoot = nizhi(node1);
// traverse(newRoot);
