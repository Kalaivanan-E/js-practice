/*
Write a program to check whether a string is a palindrome string.
A palindrome means — a word that reads the same forward and backward.
 str.split("") =>converts a string into array of character
 .reverse() => it will reverse the array of character
 .join() => it will join back the array to string.
*/

function isPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed

}
console.log(isPalindrome("GFG"));
