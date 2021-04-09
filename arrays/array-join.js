var arr = ['water', 'wind', 'earth'];

console.log(arr.join()); //water,wind,earth

console.log(arr.join('-')); //water-wind-earth

//Example no: 1
var a = ['Wind', 'Rain', 'Fire'];
a.join();      // 'Wind,Rain,Fire'
a.join(', ');  // 'Wind, Rain, Fire'
a.join(' + '); // 'Wind + Rain + Fire'
a.join('');    // 'WindRainFire'