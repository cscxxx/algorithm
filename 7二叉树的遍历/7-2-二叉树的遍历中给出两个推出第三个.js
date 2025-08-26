/*
 * 
    1.给出二叉树，写出前序、中序、后序遍历的结果
    2.写出前序、中序、后序遍历的代码
    3.给出前序、中序，还原二叉树，写出后序遍历
    4.给出后序、中序，还原二叉树，写出前序遍历
 */

// 给一个前序和中序的数组，还原二叉树 ,并写出后序遍历
const qianOrder = ["a", "c", "f", "g", "b", "d", "e"];
const zhongOrder = ["f", "c", "g", "a", "d", "b", "e"];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function f1(qianOrder, zhongOrder) {
  // 增强参数校验
  if (
    !Array.isArray(qianOrder) ||
    !Array.isArray(zhongOrder) ||
    qianOrder.length !== zhongOrder.length
  ) {
    throw new Error("前序与中序数组不匹配");
  }
  if (qianOrder.length === 0) return null;

  // 正确创建节点
  const root = new Node(qianOrder[0]);

  // 获取正确的中序索引
  const index = zhongOrder.indexOf(root.value);

  // 修正数组切割
  const leftZhong = zhongOrder.slice(0, index);
  const rightZhong = zhongOrder.slice(index + 1);
  const leftQian = qianOrder.slice(1, index + 1); // 关键修正
  const rightQian = qianOrder.slice(index + 1);

  root.left = f1(leftQian, leftZhong);
  root.right = f1(rightQian, rightZhong);
  return root;
}

const root1 = f1(qianOrder, zhongOrder);
// 后序遍历
function postOrder(node) {
  if (!node) return;
  console.log("后序遍历", node.value);
  postOrder(node.left);
  postOrder(node.right);
}
postOrder(root1); // acfgbde

// -----------------------------------------------------------------------------

// 给一个后序中和序的数组，还原二叉树 ,并写出前序遍历
const zhong = ["f", "c", "g", "a", "d", "b", "e"];
const hou = ["f", "g", "c", "d", "e", "b", "a"];
function Node2(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function f2(zhong, hou) {
  // 参数校验增强
  if (
    !Array.isArray(hou) ||
    !Array.isArray(zhong) ||
    hou.length !== zhong.length
  ) {
    throw new Error("中序与后序数组不匹配");
  }
  if (hou.length === 0) return null;

  // 正确创建根节点
  const rootVal = hou[hou.length - 1];
  const root = new Node2(rootVal);

  const index = zhong.indexOf(rootVal);

  // 修正数组切割
  const leftZhong = zhong.slice(0, index);
  const rightZhong = zhong.slice(index + 1);
  const leftHou = hou.slice(0, index);
  const rightHou = hou.slice(index, -1); // 关键修正点

  root.left = f2(leftZhong, leftHou);
  root.right = f2(rightZhong, rightHou);
  return root;
}
const root2 = f2(zhong, hou);

// 前序遍历
function preOrder(node) {
  if (!node) return;
  console.log("前序遍历", node.value);
  preOrder(node.left);
  preOrder(node.right);
}
preOrder(root2); // acfgbde
