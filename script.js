// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }

// // Example usage:
// const year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

//TicketPrice
// function getTicketPrice(age) {
//     if (age <= 12) {
//         return 10;
//     } else if (age >= 13 && age <= 17) {
//         return 15;
//     } else {
//         return 20;
//     }
// }

// // Example usage:
// const age = parseInt(prompt("Enter your age:"));
// const price = getTicketPrice(age);
// console.log(`The price of your ticket is $${price}.`);

//Recursion
// Fibonacci Sequence
// function fibonacci(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// // Example usage:
// const n = parseInt(prompt("Enter the position of the Fibonacci sequence to retrieve:"));
// console.log(`The Fibonacci number at position ${n} is ${fibonacci(n)}.`);

//Palindrome Checker

function isPalindrome(s) {
  // Clean the string: remove non-alphanumeric characters and convert to lower case
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function checkPalindrome(left, right) {
    if (left >= right) {
      return true;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    return checkPalindrome(left + 1, right - 1);
  }

  return checkPalindrome(0, s.length - 1);
}

// Example usage:
const str = prompt("Enter a string to check if it's a palindrome:");
if (isPalindrome(str)) {
  console.log(`'${str}' is a palindrome.`);
} else {
  console.log(`'${str}' is not a palindrome.`);
}
