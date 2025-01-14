/* Array Find and Search Methods
Array indexOf()
Array lastIndexOf()
Array includes()

Array find()
Array findIndex()
Array findLast()
Array findLastIndex()  */


//1. Array indexOf()  => The indexOf() method returns the first index of a specified value, or -1 if not found.


let arr1 = [10, 20, 30, 40, 50];
console.log(arr1.indexOf(30)); // Output: 2
console.log(arr1.indexOf(60)); // Output: -1
console.log(arr1.indexOf(10)); // Output: 0
console.log(arr1.indexOf(50)); // Output: 4
console.log(arr1.indexOf(20)); // Output: 1

let arr2 = ["a", "b", "c", "d"];
console.log(arr2.indexOf("c")); // Output: 2
console.log(arr2.indexOf("e")); // Output: -1
console.log(arr2.indexOf("a")); // Output: 0
console.log(arr2.indexOf("d")); // Output: 3
console.log(arr2.indexOf("b")); // Output: 1


// 2. Array lastIndexOf()  The lastIndexOf() method returns the last index of a specified value, or -1 if not found.

let arr11 = [10, 20, 30, 20, 10];
console.log(arr11.lastIndexOf(10)); // Output: 4
console.log(arr11.lastIndexOf(20)); // Output: 3
console.log(arr11.lastIndexOf(30)); // Output: 2
console.log(arr11.lastIndexOf(40)); // Output: -1
console.log(arr11.lastIndexOf(10, 2)); // Output: 0 (searches backward)

let arr22 = ["a", "b", "c", "b", "a"];
console.log(arr22.lastIndexOf("b")); // Output: 3
console.log(arr22.lastIndexOf("a")); // Output: 4
console.log(arr22.lastIndexOf("d")); // Output: -1
console.log(arr22.lastIndexOf("c")); // Output: 2
console.log(arr22.lastIndexOf("b", 1)); // Output: 1


//3. Array includes()  The includes() method checks if an array contains a specific value, returning true or false.

let arr111 = [1, 2, 3, 4, 5];
console.log(arr111.includes(3)); // Output: true
console.log(arr111.includes(6)); // Output: false
console.log(arr111.includes(1)); // Output: true
console.log(arr111.includes(5, 4)); // Output: true (search starts at index 4)
console.log(arr1.includes(4, 4)); // Output: false

let arr222 = ["apple", "banana", "cherry"];
console.log(arr222.includes("banana")); // Output: true
console.log(arr222.includes("grape")); // Output: false
console.log(arr222.includes("apple", 1)); // Output: false
console.log(arr222.includes("cherry", -1)); // Output: true
console.log(arr222.includes("banana", -2)); // Output: true



// 4. Array find()  The find() method returns the first element that satisfies the provided testing function.

let arr10 = [5, 10, 15, 20, 25];
console.log(arr10.find(x => x > 10)); // Output: 15
console.log(arr10.find(x => x < 10)); // Output: 5
console.log(arr10.find(x => x % 5 === 0)); // Output: 5
console.log(arr10.find(x => x > 30)); // Output: undefined
console.log(arr10.find(x => x === 20)); // Output: 20

let arr20 = ["apple", "banana", "cherry"];
console.log(arr20.find(word => word.startsWith("b"))); // Output: "banana"
console.log(arr20.find(word => word.length > 6)); // Output: "banana"
console.log(arr20.find(word => word.includes("e"))); // Output: "cherry"
console.log(arr20.find(word => word === "apple")); // Output: "apple"
console.log(arr20.find(word => word === "grape")); // Output: undefined


//5. Array findIndex()  The findIndex() method returns the index of the first element that satisfies the testing function, or -1 if no match is found.

let num1 = [5, 10, 15, 20, 25];
console.log(num1.findIndex(x => x > 10)); // Output: 2
console.log(num1.findIndex(x => x < 10)); // Output: 0
console.log(num1.findIndex(x => x % 5 === 0)); // Output: 0
console.log(num1.findIndex(x => x > 30)); // Output: -1
console.log(num1.findIndex(x => x === 20)); // Output: 3

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.findIndex(word => word.startsWith("b"))); // Output: 1
console.log(fruits.findIndex(word => word.length > 6)); // Output: 1
console.log(fruits.findIndex(word => word.includes("e"))); // Output: 2
console.log(fruits.findIndex(word => word === "apple")); // Output: 0
console.log(fruits.findIndex(word => word === "grape")); // Output: -1


// 6. Array findLast()  The findLast() method returns the last element that satisfies the provided testing function.

let number = [5, 10, 15, 20, 25];
console.log(number.findLast(x => x > 10)); // Output: 25
console.log(number.findLast(x => x < 20)); // Output: 15
console.log(number.findLast(x => x % 5 === 0)); // Output: 25
console.log(number.findLast(x => x > 30)); // Output: undefined
console.log(number.findLast(x => x === 10)); // Output: 10

let fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1.findLast(word => word.startsWith("b"))); // Output: "banana"
console.log(fruits1.findLast(word => word.length > 6)); // Output: "banana"
console.log(fruits1.findLast(word => word.includes("e"))); // Output: "cherry"
console.log(fruits1.findLast(word => word === "apple")); // Output: "apple"
console.log(fruits1.findLast(word => word === "grape")); // Output: undefined



// 7. Array findLastIndex() The findLastIndex() method returns the index of the last element that satisfies the provided testing function, or -1 if no match is found.

let dk = [5, 10, 15, 20, 25];
console.log(dk.findLastIndex(x => x > 10)); // Output: 4
console.log(dk.findLastIndex(x => x < 20)); // Output: 2
console.log(dk.findLastIndex(x => x % 5 === 0)); // Output: 4
console.log(dk.findLastIndex(x => x > 30)); // Output: -1
console.log(dk.findLastIndex(x => x === 10)); // Output: 1

let dk1 = ["apple", "banana", "cherry"];
console.log(dk1.findLastIndex(word => word.startsWith("b"))); // Output: 1
console.log(dk1.findLastIndex(word => word.length > 6)); // Output: 1
console.log(dk1.findLastIndex(word => word.includes("e"))); // Output: 2
console.log(dk1.findLastIndex(word => word === "apple")); // Output: 0
console.log(dk1.findLastIndex(word => word === "grape")); // Output: -1
