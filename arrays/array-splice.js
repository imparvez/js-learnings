//Splice use to remove or add elements in the array

var number = [1,2,3,4,5,6,7,8,9];

console.log(number.splice(2,1)); //Remove 1 element from 2nd position i.e ['3'];
//[3]

console.log(number.splice(2,0,'drum')); //Remove 0 element from 2nd position and add 'drum' on that position
//[1, 2, "drum", 4, 5, 6, 7, 8, 9]
