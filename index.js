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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 找到链表的最后一个节点
function findLastNode(root) {
  if (root.next != null) return findLastNode(root.next);
  else return root;
}
// console.log(findLastNode(node1));

// 遍历链表
function traverse(root) {
  if (root == null) return;
  console.log(root.value);
  traverse(root.next);
}

// traverse(node1);

// 链表的逆置
function nizhi(root) {
  // root 是倒数第二个元素时，就得判断出口
  if (root.next.next == null) {
    // 将倒数第二个元素指向
    root.next.next = root;
    return root.next;
  } else {
    var res = nizhi(root.next); // 传入下一个节点
    root.next.next = root;
    root.next = null;
    return res;
  }
}

const newRoot = nizhi(node1);
traverse(newRoot);
