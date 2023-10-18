function productOfArray(arr) {
  let product = 1;
  for (let i=0; i<arr.length; i++) {
      product*=arr[i]
  }
  return product;
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60