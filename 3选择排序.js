const arr = [4, 3, 5, 6, 8, 1, 9, 2, 7, 10];

function compare(a, b) {
  return a < b;
}

function exchange(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// 选择排序 内层循环，每一圈选出一个最大的，放在后面
/**
 * 选择排序算法实现（降序排列）
 * @param {Array} array - 需要排序的数组（原地修改）
 * @returns {void}
 */
function sort(array) {
  // 参数有效性校验
  if (!Array.isArray(array) || array.length <= 1) return;

  /* 外层循环：控制排序轮数
   * 每轮确定一个最大值的位置
   * 只需进行n-1轮排序（n为数组长度）
   */
  for (let i = 0; i < array.length - 1; i++) {
    // 初始化当前轮次最大值索引为第一个元素。默认第一个元素最大。
    let maxIndex = 0;

    /* 内层循环：遍历未排序部分寻找最大值
     * j从1开始：避免元素与自身比较
     * 终止条件：array.length - i（排除已排序部分）
     */
    for (let j = 1; j < array.length - i; j++) {
      // 使用比较函数判断当前元素是否大于已知最大值
      if (compare(array[j], array[maxIndex])) {
        maxIndex = j; // 更新最大值索引
      }
    }

    /* 将找到的最大值交换到已排序区头部
     * 交换位置：当前最大值索引 ↔ 未排序区末尾索引
     * 未排序区末尾索引计算：array.length - 1 - i
     */
    exchange(array, maxIndex, array.length - 1 - i);
  }
}

sort(arr);
console.log(arr);
