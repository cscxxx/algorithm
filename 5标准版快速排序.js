// 左闭右开 [ ) 在边界处，左边可以取到，右边取不到

const arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 交换
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 标准快速排序实现（左闭右开区间）
/**
 * 快速排序函数
 * @param {Array} arr - 待排序数组
 * @param {number} begin - 区间起始索引（包含）
 * @param {number} end - 区间结束索引（不包含）
 * @returns {void} 原地修改数组
 */
function quickSort(arr, begin, end) {
  if (begin >= end - 1) return; // 递归终止条件：区间元素少于2个

  let left = begin;
  let right = end;

  do {
    // 左指针移动：找到第一个大于等于基准的值，大于等于基准的值，左边的指针就停在这里
    do {
      left++;
    } while (left < right && arr[left] < arr[begin]);
    // 右指针移动：找到第一个小于等于基准的值，小于等于基准的值，右边的指针就停在这里
    do {
      right--;
    } while (right > left && arr[right] > arr[begin]);

    // 交换左右指针元素
    if (left < right) swap(arr, left, right);
  } while (left < right);

  // 确定基准点交换位置（修复逻辑错误）
  const swapPoint = arr[right] <= arr[begin] ? right : right - 1;
  swap(arr, begin, swapPoint);

  // 递归排序左右子区间
  quickSort(arr, begin, swapPoint);
  quickSort(arr, swapPoint + 1, end); // 注意右区间起始位置
}

quickSort(arr, 0, arr.length);
console.log(arr);
