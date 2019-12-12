/**
 * 交换位置
 * @param {*} arr 
 * @param {*} index1 
 * @param {*} index2 
 */
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

/** 选择排序
 * 1) 找出该区域的最小值
2) 将该值与该区域第一个值交换
3) 对下一个区域重复上述过程，直到排序完成
 */
function SelectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    //从i 到 arr.length - 1区间
    var min = arr[i],
      index = i; //记录最小值的坐标,每次假设最小值是第一位
    //遍历，如果有小于最小值的，把该值记录为最小值，并获取该值的下标
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j  //重新记录最小值的位置
        console.log('index', index)
      }
    }
    swap(arr, i, index)

  }
}

// const arr = [3,5,1,2,8,4]
// console.log(arr)
//  SelectionSort(arr)
// console.log(arr)

/** 冒泡排序
 * 1) 将第1位和第2位比较，如果前者比后者大则交换
2) 将第2位和第3位比较，如果前者比后者大则交换
3) 依次类推，直到比较到该区域的最后两位
4) 重复上述过程，直到序列排序完成
 * @param {*} arr 
 */
function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //需要经过arr.length-1次的冒泡
    //i = 0  0 - arr.length - 1
    //i = 1  0 - arr.length - 1 - i
    //第一次i = 0的时候，从j=0第一位两两比较到最后一位，所以最后一位是最大的。
    //第二次i = 1的时候，就不用比较到最后一位，而是 arr.length - i - 1位
    //……以此类推
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {  //每次前面的比较大就交换，保证最后一位是最大值
        swap(arr, j, j + 1)
      }
    }
  }
}

// const arr = [3,5,1,2,8,4]
// console.log(arr)
// BubbleSort(arr)
// console.log(arr)


/**插入排序
 * 将序列分为两个部分，一部分是有序的，一部分是无序的，现在要做的是，就是不断的从无序的部分取出数据，加入到有序的部分，直到整个排序完成
 */
function InsertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //如果第i项比前一项小，让一个变量存储第i项的值
    //从第i项到0，每一个值跟temp比较，如果大于，每一个值往后移动一位
    //否则那一项就是temp用来存放的位置
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i]
      for (let j = i; j >= 0; j--) {
        if (temp < arr[j - 1] && j > 0) {
          arr[j] = arr[j - 1]
        }
        else {
          arr[j] = temp
          break
        }
      }

    }
  }
}

// const arr = [3,5,1,2,8,4]
// console.log(arr)
// InsertionSort(arr)
// console.log(arr)

/**快速排序
 * 选择一个数（比如序列的最后一位）作为基准数，将整个序列排序成两部分，一部分比该数小，另一部分比该数大，基准数在中间，然后对剩余的序列做同样的事情，直到排序完成
 * @param {*} arr 
 */
function quickSort(arr) {
  /**
   * 辅助函数 用来移动指针
   * @param {*} arr 
   * @param {*} start 
   * @param {*} end 
   */

  function _quickSort(arr, start, end) {
    if (start >= end || start > arr.length - 1) return
    let low = start,  //定一个最初的指针
      hight = end,  //定一个末尾的指针
      key = arr[end];   //选择最后一个值作为基准值
    //把小于基准值的数放左边，大的放右边
    while (low < hight) {
      while (low < hight && arr[low] <= key) low++
      arr[hight] = arr[low]
      while (low < hight && arr[hight] >= key) hight--
      arr[low] = arr[hight]
    }
    arr[low] = key
    _quickSort(arr, start, low - 1)
    _quickSort(arr, low + 1, end)
  }
  _quickSort(arr, 0, arr.length - 1)
}

// const arr = [3, 5, 1, 2, 8, 4]
// console.log(arr)
// quickSort(arr)
// console.log(arr)


