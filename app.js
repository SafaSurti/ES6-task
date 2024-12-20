//                                      ● ES6 TASK  ●

//                                    ● GLOBAL SCOPE  ●
// var varVariable = "safa";
// let letVariable = "Mushtaq";
// const constVariable = "Surti";
// console.log(varVariable,letVariable,constVariable);
// yes they accessible globally

// //                                   ● FUNCTION SCOPE  ●
// function funcScope() {
//     var varVariable = "this is laptop";
//     let letVariable = "this is a book";
//     const constVariable = "this is a car";
// }
// console.log(varVariable) 
// console.log(letVariableariable) :
// console.log(constiable) 
// funcScope()
//  reference arror
//                                ●     Block Scope:  ●

// if (true) {
//     var varInsideBlock = "I am a var";
//     let letInsideBlock = "I am a let";
//     const constInsideBlock = "I am a const";

//   }
//   console.log(varInsideBlock,letInsideBlock,constInsideBlock)
//   ReferenceError: letInsideBlock is not defined

//                                ● Hoisting with var:  ●
// console.log(varVariable)
// var varVariable="this is safa";
//undefined

//                          ●  Hoisting with let and const:  ●
// console.log(letVariable);
// let letVariable = "This is safa"
//  ReferenceError: Cannot access 'letVariable' before initialization
// console.log(constVariable);
// const constVariable = "This is safa"
// ReferenceError: Cannot access 'constVariable' before initialization

//                                 ● Re-declaration:  ●
//  var varVariable = "This is safa"
//  var varVariable = "This is surti"
//  console.log(varVariable,varVariable)
//  its showing the string of second var  for both vars
 
//  let letVariable = "This is safa"
//  let letVariable = "This is surti"
//  console.log(letVariable,letVariable)
//  SyntaxError: Identifier 'letVariable' has already been declared

// const constVariable = "This is safa"
// const constVariable = "This is surti"
// console.log(constVariable,constVariable)
// SyntaxError: Identifier 'constVariable' has already been declared

//                                      ● Re-assignment:  ●

// var first = "SAFA";
// console.log(first); 
// first = "SURTI";
// console.log(first); 
// showing both values

// let first = "SAFA";
//  console.log(first); 
//  first = "SURTI";
//  console.log(first); 
// showing both values

// const first = "SAFA";
//  console.log(first); 
//  first = "SURTI";
//  console.log(first); 
//  TypeError: Assignment to constant variable.

//                               ● Temporal Dead Zone (TDZ):  ●
// {
// console.log(first);
//     let first = "SAFA";
// }
// ReferenceError: Cannot access 'first' before initialization
// {
//     console.log(first);
//     const first = "SAFA";
//     }
// ReferenceError: Cannot access 'first' before initialization

//                              ● When to use var, let, and const:  ●

// function Var() {
//     var number = 10;  
//     console.log(number);  
//     number = 20;  
//     console.log(number); 
//   }
  
//   Var();
  
// function Let() {
//     let count = 5;  
//     console.log(count); 
//     count = 10;  
//     console.log(count);  
//   }
  
//   Let();
  
// function Const() {
//     const name = "SAFA";  
//     console.log(name);  
//   }
  
// Const();
//                         ●   String Interpolation:   ● 
// let firstName = "SAFA";
// let lastName ="SURTI";
// let fullNAme =`${firstName} ${lastName}`
// console.log(fullNAme);

//                         ●   Multi-line Strings:   ● 
// Create a multi-line string using a template literal
// let address = `
// Pakistan
// husaainabad
// Karachi
// `;
// console.log(address);
//                         ● Simple Expressions:  ● 
// let num1 = 50;
// let num2 = 30;
// let result = ` ${num1 + num2}.`;
// console.log(result);

//                           ● Function Calls:  ● 
// function product(num1, num2) {
//     return num1 * num2;
//   }
//   let result = ` product of 10 and 20 is ${product(10, 20)}.`;
//   console.log(result);   

//                           ● Creating a Tagged Template:  ● 

// function myTag(strings) {
//     console.log(strings); 
//   }
//   myTag`This is safa.`;
  
//                           ● Formatting:  ● 
// function toUpperCaseTag(strings) {
//     return strings[0].toUpperCase(); 
//   }
//   let result = toUpperCaseTag`hello, this is a test.`;
//   console.log(result); 
  
  //                           ●  Conditional Logic: ●
// let currentHour = 20;
// let message = `${currentHour < 12 ? "Good morning!" : "Good afternoon!"}`;
// console.log(message); 

  //                           ●    Loops within Template Literals:  ●
// let shoppingList = ["laptop", "mouse", "i-phone"];
// console.log(`
//     <ul>
//     <li>${shoppingList}</li>
//     </ul>`);

  //                           ●  Escaping Backticks:  ●
// let stringWithBacktick = `This is a backtick character: \`this is a safa`;
// console.log(stringWithBacktick);

  //                           ●  Nested Template Literals:  ●
// let table = `
// <table>
//   <tr>
//     <td>${"Row 1, Cell 1"}</td>
//     <td>${"Row 1, Cell 2"}</td>
//   </tr>
//   <tr>
//     <td>${"Row 2, Cell 1"}</td>
//     <td>${"Row 2, Cell 2"}</td>
//   </tr>
//   <tr>
//     <td>${"Row 3, Cell 1"}</td>
//     <td>${"Row 3, Cell 2"}</td>
//   </tr>
// </table>
// `;
// console.log(table);

  //                              ●  Simple Condition:  ●
// let age = 20;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);  

  //                              ● Even or Odd: ●
// let number = 10;
// let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd); 

  //                              ● Grade Evaluation: ●
// let score = 70;
// let grade = score >= 90 ? "A" :
//            score >= 80 ? "B" :
//            score >= 70 ? "C" :
//            score >= 60 ? "D" : "F";
// console.log(grade); 

  //                              ● Login Status: ●
// let isLoggedIn = false;
// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);  

  //                              ● Discount Eligibility: ●
// let isMember = true;
// let purchaseAmount = 150;
// let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;
// console.log(discount);  

  //                              ● Determine Max Value: ●
  
// Function to determine the maximum value using the ternary operator
// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// const result = maxValue(50, 20);
// console.log( result);

  //                              ● Greeting Message: ●
// function greet(name) {
//   return name && name.trim() ? `Hello, ${name}!` : "Hello, guest!";
// }
// console.log(greet("safa"));
// console.log(greet(""));    
// console.log(greet());          

  //                              ● Mapping Values: ●
// const numbers = [1, 2, 3, 4, 5, 6];
// const modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log( modifiedNumbers);

  //                              ● Filtering Values: ●

// const strings = ["cat", "fruit", "dog", "elephant", "bat", "books"];
// const longStrings = strings.filter(str => str.length > 3 ? true : false);
// console.log("Strings with length greater than 3:", longStrings);

  //                              ● Copying an Array: ●
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];
// console.log("Original Array:", originalArray);  
// console.log("Copied Array:", copiedArray);     
// console.log("Are the arrays the same reference?", originalArray === copiedArray); 

  //                              ● Merging Arrays: ●
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log("Merged Array:", mergedArray); 

  //                              ● Adding Elements to an Array: ●
// const numbers = [100,10, 20, 30, 40];
// const updatedNumbers = [60,0, ...numbers, 50,70];
// console.log("Updated Array:", updatedNumbers); 

  //                              ● Copying an Object: ●
// const originalObject = {
//   name: "safa",
//   age: 20,
//   city: "Karachi"
// };
// const copiedObject = { ...originalObject };
// console.log("Original Object:", originalObject); 
// console.log("Copied Object:", copiedObject);    
// console.log("Are the objects the same reference?", originalObject === copiedObject);

  //                              ● Merging Objects: ●
// const object1 = { name: "safa", age: 25, city: "lahore" };
// const object2 = { age: 19, profession: "Engineer", city: "karachi" };
// const mergedObject = { ...object1, ...object2 };
// console.log("Merged Object:", mergedObject);

  //                              ● Updating Object Properties: ●
  // Create an object with properties name, age, and email
// const user = {
//   name: "safa",
//   age: 19,
//   email: "safa@gmail.com"
// };
// const updatedUser = {
//   ...user,
//   email: "surti2GMAIL.COM", 
//   address: "hussainabad karachi" 
// };
// console.log("Updated User:", updatedUser);

  //                              ● Passing Array Elements as Arguments: ●
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [100, 50, 30];
// const result = sum(...numbers);
// console.log("Sum of numbers:", result);  

  //                              ● Combining Multiple Arrays: ●
// function combineArrays(...arrays) {
//   return [].concat(...arrays);  
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const combinedArray = combineArrays(array1, array2, array3);
// console.log("Combined Array:", combinedArray);

  //                              ● Rest Parameter with Spread Operator: ●
// function multiply(num, ...args) {
//   return args.map(arg => num * arg);  
// }
// const result = multiply(2, 3, 4, 5);
// console.log("Multiplication Results:", result);  

  //                              ● Spread Operator with Nested Structures: ●
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const copiedArray = [...nestedArray];
// copiedArray[0][0] = 50;  
// copiedArray[1][1] = 100;  
// console.log("Original Array:", nestedArray);  
// console.log("Copied Array:", copiedArray);   

  //                              ● Sum Function: ●
// function sum(...args) {
//   return args.reduce((acc, curr) => acc + curr, 0);
// }
// const result1 = sum(10, 20, 30);
// const result2 = sum(50, 100, 150, 200);
// const result3 = sum(70, 80);
// console.log("Sum of 10, 20, 30:", result1);  
// console.log("Sum of 50, 100, 150, 200:", result2); 
// console.log("Sum of 70, 80:", result3); 

  //                              ● Average Function: ●
// function average(...args) {
//   const sum = args.reduce((acc, curr) => acc + curr, 0);  
//   return sum / args.length;  
// }
// const result1 = average(1, 2, 3);
// const result2 = average(5, 10, 15, 20);
// const result3 = average(7, 8);
// console.log("Average of 1, 2, 3:", result1); 
// console.log("Average of 5, 10, 15, 20:", result2); 
// console.log("Average of 7, 8:", result3);

  //                              ● First and Rest: ●
// const numbers = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers;
// console.log("First element:", first);  
// console.log("Remaining elements:", rest); 

  //                              ● Skip and Rest: ●
// const colors = ["red", "blue", "green", "yellow", "purple"];
// const [, , ...remainingColors] = colors;
// console.log("Remaining colors:", remainingColors); 

  //                              ● Basic Destructuring: ●
// const person = {
//   name: "safa",
//   age: 20,
//   email: "safa@gmail.com",
//   address: "karachi"
// };
// const { name, email, ...rest } = person;
// console.log("Name:", name);      
// console.log("Email:", email);    
// console.log("Remaining properties:", rest);  

  //                              ● Nested Destructuring: ●
// const student = {
//   id: 100,
//   name: "safa",
//   grades: [90, 85, 88],
//   info: {
//       age: 20,
//       major: "Computer Science"
//   }
// };
// const { id, name, info: { major }, ...rest } = student;
// console.log("ID:", id);         
// console.log("Name:", name);     
// console.log("Major:", major);   
// console.log("Remaining properties:", rest); 

  //                              ● Filter Even Numbers: ●
// function filterEven(...args) {
//   return args.filter(num => num % 2 === 0);  
// }
// const result1 = filterEven(1, 2, 3, 4, 5, 6);
// const result2 = filterEven(10, 15, 20, 25, 30);
// const result3 = filterEven(7, 8, 9, 10);
// console.log("Even numbers from 1, 2, 3, 4, 5, 6:", result1); 
// console.log("Even numbers from 10, 15, 20, 25, 30:", result2);
// console.log("Even numbers from 7, 8, 9, 10:", result3); 

//                               ● Combine and Sort Arrays: ●
// function combineAndSort(...arrays) {
//   return [].concat(...arrays).sort((a, b) => a - b);  
// }
// const result1 = combineAndSort([3, 1, 4], [6, 2], [5]);
// const result2 = combineAndSort([10, 2, 8], [1, 5, 9], [4, 7]);
// const result3 = combineAndSort([15, 3], [20, 8, 10]);
// console.log("Sorted result1:", result1); 
// console.log("Sorted result2:", result2); 
// console.log("Sorted result3:", result3);  

//                               ● Basic Destructuring: ●
// const fruits = ["apple", "banana", "mango"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log("First fruit:", firstFruit);    
// console.log("Second fruit:", secondFruit);  
// console.log("Third fruit:", thirdFruit);    

// //                               ● Skipping Elements: ●
// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log("Primary color:", primaryColor);      
// console.log("Tertiary color:", tertiaryColor); 

//                               ● Rest Operator: ●
// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, ...remainingNumbers] = numbers;
// console.log("First number:", firstNumber);          
// console.log("Remaining numbers:", remainingNumbers);

//                               ● Basic Destructuring: ●
// const person = {
//   name: "safa",
//   age: 20,
//   city: "karachi"
// };
// const { name, age, city } = person;
// console.log("Name:", name);  
// console.log("Age:", age);     
// console.log("City:", city);    

//                               ● Renaming Variables:  ●
// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2010
// };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log("Car Make:", carMake);   
// console.log("Car Model:", carModel); 
// console.log("Car Year:", carYear);   

//                               ● Default Values: ●
// const settings = {
//   theme: "dark",
// };
// const { theme, language = "English" } = settings;
// console.log("Theme:", theme);        
// console.log("Language:", language);   

//                               ● Array of Arrays: ●
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const [[a], [b], [c]] = nestedArray;
// console.log("a:", a); 
// console.log("b:", b); 
// console.log("c:", c); 

//                               ● Array Parameters: ●
// function printCoordinates([x, y]) {
//   console.log("x:", x, "y:", y);
// }
// printCoordinates([10, 20]);  
// printCoordinates([5, 15]);  
// printCoordinates([100, 200]); 

//                               ● Count Properties: ●
// const student = {
//   name: "Safa",
//   age: 18,
//   grade: "A",
//   school: "JP School"
// };
// const numberOfProperties = Object.keys(student).length;
// console.log("Number of properties:", numberOfProperties);  

//                               ● List Property Values:●
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2000,
//   genre: "Sci-Fi"
// };
// const propertyValues = Object.values(movie);
// console.log("Property values:", propertyValues);

//                               ● Iterate Over Values: ●
// const user = {
//   username: "safa",
//   email: "safa@gamil.com",
//   location: "karachi"
// };
// const propertyValues = Object.values(user);
// propertyValues.forEach(value => {
//   console.log(value);
// });

//                               ● Iterate Over Entries: ●
// const settings = {
//   theme: "light",
//   notifications: true,
//   privacy: "high"
// };
// const entries = Object.entries(settings);
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

//                               ● Transform Values: ●
// const temperatures = {
//   morning: 15,  
//   afternoon: 22,
//   evening: 18   
// };
// const fahrenheitTemperatures = Object.fromEntries(
//   Object.entries(temperatures).map(([time, temp]) => [
//       time, 
//       (temp * 9/5) + 32  
//   ])
// );
// console.log(fahrenheitTemperatures);

//                               ● Filter and Map: ●
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterAndMap(array, filterFunc, mapFunc) {
//     return array.filter(filterFunc).map(mapFunc);
// }
// const result = filterAndMap(numbers, num => num % 2 !== 0, num => num * num);
// console.log(result);  

//                               ● Simple Callback: ●
// function greet(name, callback) {
//   const message = `Hello, ${name}!`;
//   callback(message);  
// }
// function printGreeting(message) {
//   console.log(message);
// }
// greet("Safa", printGreeting);  

//                               ● Asynchronous Callback: ●
// function fetchData(callback) {
//   setTimeout(() => {
//       const data = "Server data: Hello, world!";  
//       callback(data); 
//   }, 2000); 
// }
// function displayData(data) {
//   console.log(data);  
// }
// fetchData(displayData); 

//                               ● Simple Arrow Function: ●
// const add = (a, b) => a + b;
// console.log(add(3, 5));  

//                               ● Variable Scope: ●
// function outer() {
//   const x = 30;  
//   function inner() {
//       console.log(x); 
//   }
//   inner();
// }
// outer(); 

//                               ● Default Parameters with Other Arguments:●
// function calculateArea(width = 10, height = 5) {
//   return width * height;  
// }
// console.log(calculateArea(20, 8));  
// console.log(calculateArea());  

//                               ● Convert to Uppercase: ●
// const words = ["apple", "banana", "mango"];
// const uppercasedWords = words.map(word => word.toUpperCase());
// console.log(uppercasedWords); 

//                               ● Filter Long Words: ●
// const words = ["apple", "banana", "mango", "date"];
// const longWords = words.filter(word => word.length > 5);
// console.log(longWords);  

//                               ● Log Word Lengths: ●
// const words = ["apple", "banana", "cherry","mango","pineapple"];
// words.forEach(word => {
//     console.log(word.length);
// });

//                               ● Concatenate Strings: ●
// const words = ["Hello", "world", "this", "is", "ES6","task"];
// const sentence = words.reduce((accumulator, currentWord) => {
//     return accumulator + ' ' + currentWord;
// });
// console.log(sentence);  

//                               ● Check All Even Numbers: ●
// const numbers = [2, 4, 6, 8, 10,12,14];
// const allEven = numbers.every(number => number % 2 === 0);
// console.log(allEven);  

//                               ● Find Index of First Even Number: ●
// const numbers = [1,2, 3, 5, 7, 8];
// const indexOfFirstEven = numbers.findIndex(number => number % 2 === 0);
// console.log(indexOfFirstEven);  

//                               ● Find Index of Long Word: ●
// const words = ["apple","cherry", "banana",  "date"];
// const indexOfLongWord = words.findIndex(word => word.length > 5);
// console.log(indexOfLongWord);  

//                               ● Simple Promise: ●
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
// delay(100).then(() => {
//   console.log("Hello, world!");
// });

//                               ● Promise Chain: ●
// function fetchData() {
//   return new Promise(resolve => {
//     const data = { message: "Data fetched successfully!" }; 
//     setTimeout(() => resolve(data), 1000);  
//   });
// }
// fetchData().then(data => {
//   console.log(data);  
// });

//                               ● Error Handling: ●
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = { name: "John Doe" }; 
//     if (!userData.age) {
//       reject("Error: Age is missing in user data");
//     } else {
//       resolve(userData);
//     }
//   });
// }
// fetchUserData()
//   .then(data => {
//     console.log("User Data:", data); 
//   })
//   .catch(error => {
//     console.log(error); 
//   });

//                               ● Simulate Network Request: ●
// function getWeather(success = true) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         const weatherData = { temperature: 25, condition: "Sunny" };  
//         resolve(weatherData);  
//       } else {
//         reject("Error: Unable to fetch weather data");  
//       }
//     }, 1000);
//   });
// }
// getWeather(true)  
//   .then(data => {
//     console.log("Weather Data:", data);  
//   })
//   .catch(error => {
//     console.log(error);  
//   });
// getWeather(false) 
//   .then(data => {
//     console.log("Weather Data:", data); 
//   })
//   .catch(error => {
//     console.log(error); 
  // });
//                              ● Simple async Function: ●
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
// async function sayHello() {
//   await delay(1000);  
//   console.log("Hello, world!");  
// }
// sayHello();

//                              ● Fetch Data with async/await: ●
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = { name: "safa" }; 
//     if (!userData.age) {
//       reject("Error: Age is missing in user data");
//     } else {
//       resolve(userData);
//     }
//   });
// }
// async function getUserData() {
//   try {
//     const data = await fetchUserData();  
//     console.log("User Data:", data); 
//   } catch (error) {
//     console.log("Error:", error); 
//   }
// }
// getUserData();

//                              ● Fetch and Process Data: ●
// function fetchUser() {
//   return new Promise((resolve) => {
//     const userData = { name: "safa", age: 19 }; 
//     resolve(userData); 
//   });
// }
// function fetchPosts(user) {
//   return new Promise((resolve) => {
//     const posts = [
//       { title: "Post 1", content: "This is the first post." },
//       { title: "Post 2", content: "This is the second post." }
//     ]; 
//     resolve(posts);  
//   });
// }
// async function getUserAndPosts() {
//   try {
//     const user = await fetchUser();  
//     console.log("User Data:", user);  

//     const posts = await fetchPosts(user); 
//     console.log("Posts:", posts); 
//   } catch (error) {
//     console.log("Error:", error);  
//   }
// }
// getUserAndPosts();

//                              ● Error Handling in async/await: ●
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     const userData = null;  

//     if (userData) {
//       resolve(userData);  
//     } else {
//       reject("Error: User data not found");  
//     }
//   });
// }
// async function getUserInfo() {
//   try {
//     const user = await fetchUser();  
//     console.log("User Data:", user);  
//   } catch (error) {
//     console.log(error);  
//   }
// }
// getUserInfo();

//                              ● Simulate API Calls: ●
// function apiCall() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 2000 + 1000;  
//     setTimeout(() => {
//       const success = Math.random() > 0.2; 
//       if (success) {
//         resolve(`Data fetched successfully after ${delay.toFixed(2)}ms`);  
//       } else {
//         reject("Error: Failed to fetch data");  
//       }
//     }, delay);
//   });
// }
// async function getData() {
//   try {
//     const result1 = await apiCall();  
//     console.log(result1); 
//     const result2 = await apiCall();  
//     console.log(result2); 

//     const result3 = await apiCall();  
//     console.log(result3); 
//   } catch (error) {
//     console.log(error);  
//   }
// }
// getData();


//                                             *THE END!*