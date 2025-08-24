const arr = [4, 3, 5, 6, 8, 1, 9, 2, 7];

function quickSort(arr) {
  // 新增边界条件处理
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const pivot = arr[0]; // 选择第一个元素作为基准
  const left = []; // 小于基准的元素
  const right = []; // 大于基准的元素

  // 从第二个元素开始遍历数组
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归排序左右子数组并合并
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
