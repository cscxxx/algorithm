// 二叉树的搜索
// 广度优先搜索

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
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 对于二叉树来说，广度优先搜索，对应中序遍历
function f1(rootList, target) {
  if (rootList === null || rootList.length === 0) return false;
  const childList = [];
  for (let i = 0; i < rootList.length; i++) {
    if (rootList[i] !== null && rootList[i].value === target) {
      return true;
    } else {
      if (rootList[i] !== null) {
        childList.push(rootList[i].left);
        childList.push(rootList[i].right);
      }
    }
  }
  return f1(childList, target);
}
console.log(f1([a], "f"));
