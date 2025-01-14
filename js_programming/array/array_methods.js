/* 
Basic Array Methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift() 
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()    */

// 1: Array length() => The length property returns the number of elements in an array. 
// Example 1
let arr1 = [1, 2, 3,];
console.log(arr1);    // Output: [1, 2, 3]
console.log(arr1.length);  // Output: 3

//Example 2
let arrayName = ['a', 'b', 'c', 'd']
console.log(arrayName);   // Output: ['a', 'b', 'c', 'd']
console.log(arrayName.length);  // Output: 4

// Example 3
let array = [];
console.log(array);   
console.log(array.length);  // Output: 0

// Example 4
let array2 = [true, false, true, false];
console.log(array2.length);  // Output: 4

// Example 5
let array3 = [7, "dk", true, 3.14, null, undefined]; 
console.log(array3);     // Output: [ 7, 'dk', true, 3.14, null, undefined ]
console.log(array3.length);  // Output: 6


// 2 The toString() => method converts an array into a comma-separated string.

// Example 1
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);    // Output: [ 'apple', 'banana', 'cherry' ]
console.log(fruits.toString());   // Output: apple,banana,cherry

// Example 2
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());  // Output: 1,2,3,4,5

// Example 3
let mixed = [1, 'a', true, 3.14, null, undefined];
console.log(mixed);  // [ 1, 'a', true, 3.14, null, undefined ]
console.log(mixed.toString());  // Output:  1,a,true,3.14,null,undefined

// Example 4
let empty = [];
console.log(empty.toString());  // Output: []

// Example 5
let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.toString());  // Output: 1,2,3,4,5,6

// 3. array at() => The at() method returns the element at a specific index, supporting negative indexing.

// Example 1
let number = [10, 20, 30, 40, 50, 60];
console.log(number.at(0));  // Output: 10
console.log(number.at(5));  // Output: 60
console.log(number.at(-1));  // Output: 60
console.log(number.at(-5));  // Output: 20
console.log(number.at(1));  // Output: 20

// 4. array join()  => The join() method joins all elements into a single string, separated by a specified delimiter.

// Example 1
let colors = ['red', 'green', 'blue'];
console.log(colors);  // Output: [ 'red', 'green', 'blue' ]
console.log(colors.join());  // Output: red,green,blue
console.log(colors.join(','));  // Output: red,green,blue
console.log(colors.join('-'));  // Output: red-green-blue
console.log(colors.join(` @ `));  //  Output: red @ green @ blue

// Example 2
let num = [1, 2, 3, 4, 5];
console.log(num.join());  // Output: 1,2,3,4,5
console.log(num.join(','));  // Output: 1,2,3,4,5
console.log(num.join('-'));  // Output: 1-2-3-4-5
console.log(num.join('*'));  // Output:  1*2*3*4*5


// 5. array pop()  => The pop() method removes the last element from an array and returns it.

// Example 1
let laptop = ['Dell', 'HP', 'Apple'];
console.log(laptop);  // Output: [ 'Dell', 'HP', 'Apple']
console.log(laptop.pop());  // Output: Apple
console.log(laptop);  // Output: [ 'Dell', 'HP' ]
console.log(laptop.pop()); // Output: HP
console.log(laptop);  // Output: [ 'Dell' ]
console.log(laptop.pop()); // Output: Dell
console.log(laptop);  // Output: []


// 6. array push() => The push() method adds one or more elements to the end of the array and returns the new length.

// Example 1
let mobiles = ['Samsung', 'Apple', 'Redmi'];
console.log(mobiles);  // Output: [ 'Samsung', 'Apple', 'Redmi' ]
console.log(mobiles.push('OnePlus'));  // Output:  4
console.log(mobiles);  // Output: [ 'Samsung', 'Apple', 'Redmi', 'OnePlus' ]
console.log(mobiles.push('Vivo'));  // Output: 5
console.log(mobiles);  // Output:  [ 'Samsung', 'Apple', 'Redmi', 'OnePlus', 'Vivo' ]

// 7. array shift()  => The shift() method removes the first element from an array and returns it.

// Example 1
let car = ['Tesla', 'BMW', 'TATA'];
console.log(car);  // Output: [ 'Tesla', 'BMW', 'TATA' ]
console.log(car.shift());  // Output: Tesla
console.log(car);  // Output: [ 'BMW', 'TATA' ]
console.log(car.shift());  // Output: BMW
console.log(car);  // Output: [ 'TATA' ]
console.log(car.shift());  // Output: TATA
console.log(car);  // Output: []


// 8. array unshift()  => The unshift() method adds one or more elements to the beginning of the array and returns the new length.

// Example 1
let bike = ['Honda', 'Yamaha'];
console.log(bike);  // Output: [ 'Honda', 'Yamaha' ]
console.log(bike.unshift('Pulsar'));  // Output: 3
console.log(bike);  // Output:  [ 'Pulsar', 'Honda', 'Yamaha' ]

console.log(bike.unshift('KTM'));  // Output: 4
console.log(bike);  // Output:  [ 'KTM', 'Pulsar', 'Honda', 'Yamaha' ]


// 9. array delete =>  The delete operator removes an element from an array but does not reindex it, leaving an empty spot (undefined).

// Example 1
let watch = ['Casio', 'Rolax', 'boot'];
console.log(watch);   // Output: [ 'Casio', 'Rolax', 'boot' ]
console.log(delete watch[1]);   // Output: true
console.log(watch);   // Output: [ 'Casio', <1 empty item>, 'boot' ]
console.log(delete watch[2]);   // Output: true
console.log(watch);   // Output: [ 'Casio', <2 empty items> ]


// 10. array concat() => The concat() method combines two or more arrays into one new array.

// Example 1
let laptop1 = ['Dell', 'Lenovo'];
let laptop2 = ['HP', 'Apple'];
let laptop3 = ['msi']
console.log(laptop1.concat(laptop2));  // Output: [ 'Dell', 'Lenovo', 'HP', 'Apple' ]
console.log(laptop1.concat(laptop3));  // Output: [ 'Dell', 'Lenovo', 'msi' ]
console.log(laptop1.concat(laptop2,laptop3));  // Output: [ 'Dell', 'Lenovo', 'HP', 'Apple', 'msi' ]

// 11. Array copyWithin() => The copyWithin() method copies part of an array to another location within the array. It does not change the array's length.

// Example 1
let phone = [1, 2, 3, 4, 5];
console.log(phone);  // Output: [ 1, 2, 3, 4, 5 ]
console.log(phone.copyWithin(0,3));  // Output: [ 4, 2, 3, 4, 5 ]


// 12. Array flat() => The flat() method flattens a nested array by the specified depth (default is 1).
let arrays = [1, 2, [5, 7, [9, 11]]];
console.log(arrays.flat());  // Output: [ 1, 2, 5, 7, [ 9, 11 ] ]
console.log(arrays.flat(2));  // Output: [ 1, 2, 5, 7, 9, 11 ]


// 13. Array splice() => The splice() method changes an array by adding, removing, or replacing elements.

// Example 1
let arr11 = [1, 2, 3, 4];
console.log(arr11.splice(1, 2)); // Removes 2 and 3
console.log(arr11); // Output: [1, 4]

let arr22 = [10, 20, 30, 40];
console,log(arr22.splice(2, 0, 25)); // Inserts 25 at index 2
console.log(arr22); // Output: [10, 20, 25, 30, 40]

let arr33 = ["a", "b", "c", "d"];
console.log(arr33.splice(1, 1, "x", "y")); // Replaces "b" with "x" and "y"
console.log(arr33); // Output: ["a", "x", "y", "c", "d"]

let arr44 = [1, 2, 3];
console.log(arr44.splice(0, 0, 0)); // Adds 0 at the beginning
console.log(arr44); // Output: [0, 1, 2, 3]

let arr55 = [1, 2, 3, 4];
console.log(arr55.splice(-2, 1)); // Removes 3 (second last element)
console.log(arr55); // Output: [1, 2, 4]


// 14. Array toSpliced() => The toSpliced() method creates a new array, leaving the original unmodified. It behaves like splice().

// Example 1
let ar1 = [1, 2, 3, 4];
let result1 = ar1.toSpliced(1, 2); // Removes 2 and 3
console.log(result1); // Output: [1, 4]
console.log(ar1);    // Original: [1, 2, 3, 4]

let ar2 = [10, 20, 30];
let result2 = ar2.toSpliced(1, 0, 25); // Adds 25 at index 1
console.log(result2); // Output: [10, 25, 20, 30]

let ar3 = ["a", "b", "c"];
let result3 = ar3.toSpliced(0, 1, "x"); // Replaces "a" with "x"
console.log(result3); // Output: ["x", "b", "c"]

let ar4 = [1, 2, 3];
let result4 = ar4.toSpliced(-1, 1); // Removes last element
console.log(result4); // Output: [1, 2]

let ar5 = ["x", "y"];
let result5 = ar5.toSpliced(1, 0, "z"); // Inserts "z" at index 1
console.log(result5); // Output: ["x", "z", "y"]

// Array slice() => The slice() method creates a shallow copy of a portion of an array, leaving the original unchanged.

// Example 1
let arr1 = [1, 2, 3, 4, 5];
let sliced1 = arr1.slice(1, 3);
console.log(sliced1); // Output: [2, 3]

let arr2 = ["a", "b", "c", "d"];
let sliced2 = arr2.slice(2);
console.log(sliced2); // Output: ["c", "d"]

let arr3 = [10, 20, 30, 40];
let sliced3 = arr3.slice(-2);
console.log(sliced3); // Output: [30, 40]

let arr4 = [1, 2, 3];
let sliced4 = arr4.slice(0, 1);
console.log(sliced4); // Output: [1]

let arr5 = [true, false, true];
let sliced5 = arr5.slice(1, -1);
console.log(sliced5); // Output: [false]
