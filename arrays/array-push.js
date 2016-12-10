var sports = ['cricket', 'football'];

console.log(sports); //["cricket", "football"]

sports.push('swimming', 'tennis');

console.log(sports); //["cricket", "football", "swimming", "tennis"]


var vegetable = ['onions', 'potatoes'];

var fruits = ['apple','orange'];

//merge first array into second
Array.prototype.push.apply(vegetable, fruits);

console.log(vegetable); //["onions", "potatoes", "apple", "orange"]

