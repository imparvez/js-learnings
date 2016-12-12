var arr = ['mon','tue','wed','thurs','fri','sat','sun',];

console.log(arr); //["mon", "tue", "wed", "thurs", "fri", "sat", "sun"]

//A function to check whether the elements in the array is of type string or not
function ifStringThenPass(element, index, array) {
  return typeof(element) === 'string'
}

arr.every(ifStringThenPass); // true

var number = [1,2,3,4,5,6];

number.every(ifStringThenPass); // false

