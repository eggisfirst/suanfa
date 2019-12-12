var num = 0;
function interpolationSearch(arr, target) {
  if (arr.length === 0 || target < arr[0] || target > arr[arr.length - 1]) return false;
  var minIndex = 0; //最小下标
  var maxIndex = arr.length - 1; //最大下标
  while (minIndex <= maxIndex) {
      num++;
      var mid = (target - arr[minIndex]) / (arr[maxIndex] - arr[minIndex]) * (maxIndex - minIndex) + minIndex;
      if (arr[mid] === target) {
          return true;
      }
      else if (arr[mid] > target) {
          maxIndex = mid - 1;
      }
      else {
          minIndex = mid + 1;
      }
  }
  return false;
}

var arr = new Array(100000);
for (var i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

var result = interpolationSearch(arr, 1000)
console.log(result, num);