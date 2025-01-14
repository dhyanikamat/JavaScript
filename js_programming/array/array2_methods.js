/*  Alphabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects    */

// 1. Array sort()  => The sort() method sorts elements of an array in place and returns the sorted array. By default, it converts elements to strings and sorts them lexicographically. For numbers or custom sorting, a comparison function is used.

// Example 1: Alphabetical sort
let arr1 = ["banana", "apple", "cherry"];
console.log(arr1.sort()); // Output: ["apple", "banana", "cherry"]

// Example 2: Numerical sort (ascending)
let arr2 = [30, 10, 50, 20];
console.log(arr2.sort((a, b) => a - b)); // Output: [10, 20, 30, 50]

// Example 3: Numerical sort (descending)
let arr3 = [30, 10, 50, 20];
console.log(arr3.sort((a, b) => b - a)); // Output: [50, 30, 20, 10]

// Example 4: Sorting strings with different cases
let arr4 = ["Banana", "apple", "cherry"];
console.log(arr4.sort()); // Output: ["Banana", "apple", "cherry"] (capital letters first)

// Example 5: Sorting by length
let arr5 = ["banana", "apple", "pear"];
console.log(arr5.sort((a, b) => a.length - b.length)); // Output: ["pear", "apple", "banana"]



// 2. Array reverse() => The reverse() method reverses the elements of an array in place.

// Example 1: Basic reversal
let arr11 = [1, 2, 3, 4];
console.log(arr11.reverse()); // Output: [4, 3, 2, 1]

// Example 2: Reversing strings
let arr22 = ["a", "b", "c", "d"];
console.log(arr22.reverse()); // Output: ["d", "c", "b", "a"]

// Example 3: Reversing after sorting
let arr33 = [10, 20, 30];
console.log(arr33.sort().reverse()); // Output: [30, 20, 10]

// Example 4: Reversing mixed values
let arr44 = ["apple", 5, true];
console.log(arr44.reverse()); // Output: [true, 5, "apple"]

// Example 5: Reversing an already reversed array
let arr55 = [1, 2, 3];
arr5.reverse();
console.log(arr55.reverse()); // Output: [1, 2, 3]


//3. Array toSorted() => The toSorted() method creates a new sorted array without modifying the original array. It behaves like sort().

// Example 1: Alphabetical sort
let arr111 = ["banana", "apple", "cherry"];
let sortedArr1 = arr111.toSorted();
console.log(sortedArr1); // Output: ["apple", "banana", "cherry"]
console.log(arr111); // Original remains unchanged: ["banana", "apple", "cherry"]

// Example 2: Numerical sort
let arr222 = [30, 10, 50, 20];
let sortedArr222 = arr222.toSorted((a, b) => a - b);
console.log(sortedArr222); // Output: [10, 20, 30, 50]

// Example 3: Sorting strings with cases
let arr333 = ["Banana", "apple", "cherry"];
let sortedArr3 = arr333.toSorted();
console.log(sortedArr3); // Output: ["Banana", "apple", "cherry"]

// Example 4: Sorting by length
let arr444 = ["banana", "apple", "pear"];
let sortedArr444 = arr444.toSorted((a, b) => a.length - b.length);
console.log(sortedArr444); // Output: ["pear", "apple", "banana"]

// Example 5: Sorting mixed types
let arr555 = [30, "20", "10", 40];
let sortedArr555 = arr555.toSorted();
console.log(sortedArr555); // Output: ["10", "20", 30, 40]



//4. Array toReversed() => The toReversed() method creates a new reversed array without modifying the original array.

// Example 1: Basic reversal
let ar1 = [1, 2, 3, 4];
let reversedAr1 = ar1.toReversed();
console.log(reversedAr1); // Output: [4, 3, 2, 1]
console.log(ar1); // Original remains unchanged: [1, 2, 3, 4]

// Example 2: Reversing strings
let ar2 = ["a", "b", "c"];
let reversedAr2 = ar2.toReversed();
console.log(reversedAr2); // Output: ["c", "b", "a"]

// Example 3: Reversing mixed values
let ar3 = [true, "apple", 10];
let reversedAr3 = ar3.toReversed();
console.log(reversedAr3); // Output: [10, "apple", true]

// Example 4: Reversing a reversed array
let ar4 = [5, 10, 15];
let reversedTwice = ar4.toReversed().toReversed();
console.log(reversedTwice); // Output: [5, 10, 15]

// Example 5: Combining with `toSorted`
let ar5 = [30, 20, 10];
let sortedReversed = ar5.toSorted().toReversed();
console.log(sortedReversed); // Output: [30, 20, 10]




//5. Sorting Objects  => Sorting objects requires specifying a comparator function based on object properties.

// Example 1: Sorting by a number property
let people = [{ age: 30 }, { age: 20 }, { age: 25 }];
people.sort((a, b) => a.age - b.age);
console.log(people); // Output: [{ age: 20 }, { age: 25 }, { age: 30 }]

// Example 2: Sorting by a string property
let fruits = [{ name: "banana" }, { name: "apple" }, { name: "cherry" }];
fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log(fruits); // Output: [{ name: "apple" }, { name: "banana" }, { name: "cherry" }]

// Example 3: Sorting in descending order
let scores = [{ score: 90 }, { score: 70 }, { score: 80 }];
scores.sort((a, b) => b.score - a.score);
console.log(scores); // Output: [{ score: 90 }, { score: 80 }, { score: 70 }]

// Example 4: Sorting by length of a property
let words = [{ word: "banana" }, { word: "apple" }, { word: "kiwi" }];
words.sort((a, b) => a.word.length - b.word.length);
console.log(words); // Output: [{ word: "kiwi" }, { word: "apple" }, { word: "banana" }]

// Example 5: Sorting with mixed criteria
let items = [
  { name: "banana", quantity: 5 },
  { name: "apple", quantity: 10 },
  { name: "cherry", quantity: 5 },
];
items.sort((a, b) => a.quantity - b.quantity || a.name.localeCompare(b.name));
console.log(items);
// Output: [
//   { name: "banana", quantity: 5 },
//   { name: "cherry", quantity: 5 },
//   { name: "apple", quantity: 10 }
// ]
