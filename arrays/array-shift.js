//The shift() method removes the first element from an array and returns that element. 
//This method changes the length of the array.

var car = ['lambo', 'ferrari', 'masserati', 'hummer'];

console.log('Car without getting shift: ', car);
//Car without getting shift:  ["lambo", "ferrari", "masserati", "hummer"]

var shifted = car.shift();

console.log('Car after getting shift: ', car);
//Car after getting shift:  ["ferrari", "masserati", "hummer"]

console.log('Shifted element: ', shifted);
//Shifted element:  lambo


