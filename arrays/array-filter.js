//This method return a new array once all the elements 
//have passed the test implemented by the function on that same array

//Example no: 1
function isBigValue(value){
	return value >= 10;
}

var biggerThanTen = [12,8,45,98,1,36,4].filter(isBigValue);

console.log(biggerThanTen); //[12, 45, 98, 36]

//filter() does not mutate the array on which it is called.

//Example no: 2

var arr = [
	{id: 150},
	{id: 12.2},
	{id: 45},
	{id: 789},
	{},
	{id: null},
	{id: undefined},
	{id: NaN}
];

console.log(arr);

var invalidEntries = 0;

function filterByID(obj){
	if(obj.id !== 'undefined' && typeof(obj.id) === 'number' && !isNaN(obj.id)){
		return true;
	} else {
		invalidEntries++;
		return false;
	}
}

var filterArr = arr.filter(filterByID);

console.log("FIlter array is:\n ", filterArr);
/*
FIlter array is:
  Array[4]
*/
console.log("Invalid entries:\n ", invalidEntries);
//Invalid entries:
//4