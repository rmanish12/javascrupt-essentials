// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  let reverseStr='';
  for(let i=str.length-1; i>=0; i--) {
      reverseStr+=str[i]
  }
  return reverseStr === str;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false