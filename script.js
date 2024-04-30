/* 1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name. */
// Solution
/* let firstName = prompt("Enter your firstName");
let lastName = prompt("Enter your lastName");
let fullName = `${firstName}  ${lastName}`;
document.write(`<h1 style="text-align: center;">Asslamualikum ${fullName} welcome to my website 😍</h1>`) */

/* 2. Writ
e a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */
// Solution
/* let favMobileModal = prompt("Enter your fav mobile modal");
let userLenght = favMobileModal.split("").length;
// console.log(userLenght);
document.write(`My Favorite Phone is: ${favMobileModal} <br> lenght of string: ${userLenght}`); */

/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */
// Solution
/* let country = "Pakistani";
let letterIndex = country.indexOf("n");
document.write(`String : ${country} <br> Index of 'n': ${letterIndex}`); */

/* 4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */
/* let word = "Hello World";
let letterI = word.lastIndexOf("l");
// console.log(letterI);
document.write(
  `String: <b>${word}</b> <br> Last Index of 'l': <b>${letterI}</b>`
); */

/* 5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser. */
/* let country = "Pakistani";
let charAt = country.charAt(3);
document.write(`String: ${country} <br> Character at index 3 :  ${charAt}`); */

/* 7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. */
/* let city = "Hydrabad";
let replaceCity = city.replace("Hydrabad", "Islamabad");
document.write(`City: ${city} <br> After replacing :  ${replaceCity}`);  */

/* 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */
/* let message = "Ali and Sami are best friends. They play cricket and football together.";
let replaceWord = message.replace(/and/g, "&");
document.write(`<b> String: </b> ${message} <br> <b>After replacing:</b>  ${replaceWord}`);  */

/* 9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */
/* let string = "475";
let number = 475;
let convertInNumber = typeof Number(string);
let convertInString = typeof String(number);
document.write(`Value: ${string}<br>Type: ${convertInString} <br> Value: ${number}<br>Type: ${convertInNumber}`) */

/* 10. Write a program that takes user input. Convert and
show the input in capital letters. */
/* let userInput = prompt("Enter a word");
let upperCase = userInput.toUpperCase();
document.write(`User Input: <b> ${userInput} </b> <br> Upper Case: <b>${upperCase}</b>`); */

/* 11. Write a program that takes user input. Convert and
show the input in title case. */
/* let userTitle = prompt("Enter a title");
let firstWC = userTitle.split("")[0].toUpperCase();
document.write(User input: ${userTitle} <br>)
document.write(Title case: ${userTitle.replace(userTitle[0], firstWC)}) */

/* 12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */
/* let num = 35.36;
let string = String(num).replace(".", "");
document.write(Number: ${num} <br> String: ${string}) */

/* 14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example: */
/* let userValue = prompt("Welcome to abc Bakery. What do you want to order sir/ma'am ?").toLowerCase();
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
for (let i = 0; i < bakery.length; i++) {
  if(userValue === bakery[i]){
    document.write(${userValue} is avaible at index ${bakery.indexOf(userValue)} in our bakery);
    break
  }else{
    document.write(We are sorry. ${userValue} is not avaible in our bakery);
  }
} */
