//Use to merge two or more array
//Don't affect the existing the array instead returns the new one.

var arr1 = [1,2,3];

var arr2 = [4,5,6];

var arr3 = arr1.concat(arr2);

console.log(arr3); //[1, 2, 3, 4, 5, 6]

//Generalized syntax

// var newArr = old_arr.concat(value1, value2, ..valueN);

// var newArr = old_arr.concat(arr1, arr2, .. arrN);

//Example no: 1

var alpha = ['a','b','c'];

var numeric = [1,2,3];

var alphanumeric = alpha.concat(numeric);

console.log(alphanumeric); //["a", "b", "c", 1, 2, 3]

//Example no: 2
var alphav2 = ['a','b','c'];

var alphanumericv2 = alpha.concat(1,2,3);

console.log(alphanumericv2); //["a", "b", "c", 1, 2, 3]
