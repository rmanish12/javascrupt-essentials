function maxSubarraySum(arr, length){
  // add whatever parameters you deem necessary - good luck!
  let maxSum=0;
  let tempSum=0;
  if (length>arr.length) return null;
  for(let i=0; i<length; i++) {
      maxSum+=arr[i];
  }
  tempSum=maxSum;
  for(let j=length; j<arr.length; j++) {
      tempSum=tempSum+arr[j]-arr[j-length];
      maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null