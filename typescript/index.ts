console.log('Hello World!');

// Implicit Types
let helloWorld = 'Hello, World!';

// Explicit Types
let firstName: string = 'Parvez Shaikh';
let age: number = 30;
// Any change in the type of the variable will give type error.
// For eg: age = '40' // Type 'string' is not assignable to type 'number'.

// Array
let list: number[] = [1, 2, 3]

// Tuple: It allows to define an array with fixed number of elements whose types are known.
// Declare a tuple type
let x: [string, number]
// Initialize it
x = ['Parvez', 30]
// Accessing value
console.log(x[0]);
console.log(x[1]);

// One more way to define tuple
type stringAndNumber = [string, number]
let y: stringAndNumber = ["Hello", 10];

console.log(y[0]);
console.log(y[1]);

// Interface: it is an another way to name an object type
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: 'Parvez',
    id: 23 // Can't add any more properties like age after id, it will give error.
}

console.log('user ', user); // { name: 'Parvez', id: 23 }

// Unions
type WindowStates = 'opened' | 'closed' | 'minimized';
type LockState = 'locked' | 'unlocked';
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

// Any value other than opened, closed, minimized will give an error
const windowState: WindowStates = 'closed';
// Any value other than 1, 3, 5, 7, 9 will give an error
const odd: OddNumberUnderTen = 9;

const getLength = (param: string | string[]) => {
    return param.length
}

getLength('test'); // 4
getLength(['test', 'test']); // 2
// getLength(5); // Argument of type 'number' is not assignable to parameter of type 'string | string[]'