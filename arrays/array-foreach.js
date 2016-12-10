//Perform a providede functions once per each elements

var arr = ['parvez', 'shaikh'];

arr.forEach(function(name){
	console.log(name);
});

function logArrayElements(elements, index, array) {
	console.log('a['+index+'] = '+elements);
}

[12,5,,9].forEach(logArrayElements);

//Example no: 2
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note: this mean reference to counter object
};