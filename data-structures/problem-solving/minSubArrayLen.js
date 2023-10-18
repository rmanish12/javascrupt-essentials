function minSubArrayLen(arr, sum) {
  let tempArr=[];
  let newArr=[];
  let i=0;
  let j=i+1;
  let tempSum = arr[i] + arr[j];

  while(j<arr.length) {
    if (arr[i] >= sum) return 1;
    if (tempSum < sum) {
      j++;
      tempSum+=arr[j]
    } else {
        tempArr = arr.slice(i, j+1);
        i++;
        j=i+1;
        tempSum = arr[i] + arr[j]

        if (newArr.length===0 || newArr.length > tempArr.length) {
            newArr = tempArr;
        }
    }
  }
  return newArr.length;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 [4,3]
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 [5,4]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 [62]