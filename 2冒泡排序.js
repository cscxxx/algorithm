const arr = [4, 3, 5, 6, 8, 1, 9, 2, 7];

function getMin(arr) {
  if (!arr || arr.length === 0) return;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[index]);
    if (
      (arr[i] !== null && arr[i] < arr[index]) ||
      (arr[i] !== null && index == -1)
    ) {
      index = i;
    }
  }
  const result = arr[index];
  arr[index] = null;
  return result;
}

// 使用最原始的排序，实用两次for循环
function sort(arr) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = getMin(arr);
  }
  return newArr;
}

// const res = sort(arr);
// console.log(res);

// -------------
// 使用冒泡排序。 比较与交换
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
