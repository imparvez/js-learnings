//find method will return a value of the first element in the array that satisfied the 
//provided test on it

//Example no: 1
var arr = [
	{
		name: 'apples',
		quantity: 2
	},{
		name: 'banana',
		quantity: 4
	},{
		name: 'cherries',
		quantity: 90
	},{
		name: 'guava',
		quantity: 12
	},
];


function findCherries(fruit){
	return fruit.name === 'cherries';
}

var findMyCherries = arr.find(findCherries);

console.log(findMyCherries); //Object {name: "cherries", quantity: 90}