// 二叉树的遍历有 前序遍历 中序遍历 后序遍历 (看根节点最终被访问到的位置)
// 前序遍历： 中左右. 先访问根节点, 再访问左子树, 最后访问右子树 acfgbde
// 中序遍历： 左中右. 先访问左子树, 再访问根节点, 最后访问右子树 fcgadbe
// 后序遍历： 左右中. 先访问左子树, 再访问右子树, 最后访问根节点 fgcdeba

//

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 前序遍历
function preOrder(node) {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}
preOrder(a); // acfgbde
console.log("-------------");

// 中序遍历
function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}
inOrder(a); // fcgadbe
console.log("-------------");
// 后序遍历
function postOrder(node) {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
postOrder(a); // fgcdeba
