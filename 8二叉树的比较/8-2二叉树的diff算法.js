(() => {
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
  const c2 = new Node("88");
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

  // {type: 'add', origin:null,now:c2}
  // {type:'change',origin:c1,now:c2}
  // {type:'remove',origin:c1,now:null}
  function diffTree(root1, root2, diffList) {
    if (root1 === root2) return diffList;
    if (root1 == null && root2 != null) {
      diffList.push({ type: "add", origin: null, now: root2 });
    } else if (root1 != null && root2 == null) {
      diffList.push({ type: "remove", origin: root1, now: null });
    } else if (root1.value !== root2.value) {
      diffList.push({ type: "change", origin: root1, now: root2 });
      diffTree(root1.left, root2.left, diffList);
      diffTree(root1.right, root2.right, diffList);
    } else {
      diffTree(root1.left, root2.left, diffList);
      diffTree(root1.right, root2.right, diffList);
    }
  }

  const diffList = [];
  diffTree(a1, a2, diffList);
  console.log(diffList[0]);
})();
