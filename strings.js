// let name = "vinamra";
// let badstring  = "this is a test case";
// // output = this is a test case
// let badstring1  = "this is a test case';
// // output = syntax error
// let badstring2  = 'it's a test case';
// // output = syntax error
let badstring3  = 'it\'s a test case';
// output = it's a test case
"MY AGE IS" + 21;
let numstr = "123";
Number(numstr);
// output = 123 in integer.
numstr.toString();
// output = "123";
// we can use variables 
`${numstr} is my age`;
// output  = 123 is my age
const str = "life is not about smart work."
console.log(str.length);
// output = 29
var str1 ="vinamra";
var str2 = "gupta";
console.log(str1.concat(" ",str2));
// output = vinamra gupta
const words = "she - hey will you be my boyfriend";
const word = words.split(" ");
console.log(word[7]);
const words1 = "no, cause you are wifey material";
const letter = words1.charAt(6);
console.log(letter);
// output = u
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");
console.log(result);
// output = 36
let result1 = text.indexOf("planet");
console.log(result1);
// output = 6
// for indexing use slice
console.log(text.slice(4,6));
// objects
let animals = {
    names : "cow",
    legs :4
}
console.log(animals.names);
console.log(animals["legs"]);
