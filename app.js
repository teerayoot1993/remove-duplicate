const removeDuplicates = (arr) =>
  (arr = arr.filter((item, index) => arr.indexOf(item) == index));

let testArr = ['ant', 'ant', 'cat', 'bat', 'bat']
let test = removeDuplicates(testArr);
console.log(test);
