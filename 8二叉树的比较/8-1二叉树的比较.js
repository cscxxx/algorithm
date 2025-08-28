(() => {
  // 二叉树的比较, 左右子树交换时，不是同一棵树
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  const a1 = new Node("a");
  const b1 = new Node("g");
  const c1 = new Node("c");
  const d1 = new Node("d");
  const e1 = new Node("e");
  const f1 = new Node("f");
  const g1 = new Node("g");

  a1.left = c1;
  a1.right = b1;
  b1.left = d1;
  b1.right = e1;
  c1.left = f1;
  c1.right = g1;

  const a2 = new Node("a");
  const b2 = new Node("b");
  const c2 = new Node("c");
  const d2 = new Node("d");
  const e2 = new Node("e");
  const f2 = new Node("f");
  const g2 = new Node("g");

  a2.left = c2;
  a2.right = b2;
  b2.left = d2;
  b2.right = e2;
  c2.left = f2;
  c2.right = g2;

  function compareTree(root1, root2) {
    if (root1 === null && root2 === null) return true; // 都为空树
    if (root1 === null || root2 === null) return false; // 一个为空树
    if (root1 === root2) return true; // 都为同一棵树
    if (root1.value !== root2.value) return false; // 值不相等

    const leftBool = compareTree(root1.left, root2.left);
    const rightBool = compareTree(root1.right, root2.right);

    return leftBool && rightBool;
  }
  //   console.log(compareTree(a1, a2));
})();

(() => {
  // 二叉树的比较, 左右子树交换时，是同一棵树
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  const a1 = new Node("a");
  const b1 = new Node("b");
  const c1 = new Node("c");
  const d1 = new Node("d");
  const e1 = new Node("e");
  const f1 = new Node("f");
  const g1 = new Node("g");

  a1.left = c1;
  a1.right = b1;
  b1.left = d1;
  b1.right = e1;
  c1.left = f1;
  c1.right = g1;

  const a2 = new Node("a");
  const b2 = new Node("b");
  const c2 = new Node("c");
  const d2 = new Node("d");
  const e2 = new Node("e");
  const f2 = new Node("f");
  const g2 = new Node("g");

  a2.left = c2;
  a2.right = b2;
  b2.left = d2;
  b2.right = e2;
  c2.left = f2;
  c2.right = g2;

  function compareTree(root1, root2) {
    if (root1 === null && root2 === null) return true; // 都为空树
    if (root1 === null || root2 === null) return false; // 一个为空树
    if (root1 === root2) return true; // 都为同一棵树
    if (root1.value !== root2.value) return false; // 值不相等

    const left1Left2 = compareTree(root1.left, root2.left);
    const right1Right2 = compareTree(root1.right, root2.right);
    const left1Right2 = compareTree(root1.left, root2.right);
    const right1Left2 = compareTree(root1.right, root2.left);

    return (left1Left2 && right1Right2) || (left1Right2 && right1Left2);
  }
  console.log(compareTree(a1, a2));
})();
