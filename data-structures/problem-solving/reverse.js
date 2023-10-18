// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
  let reverseStr='';
  for(let i=str.length-1; i>=0; i--) {
      reverseStr+=str[i]
  }
  return reverseStr;
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'