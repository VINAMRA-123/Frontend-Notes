const arr = [1,3,2,6,8];
console.log(arr)
// for finding last number 
console.log(arr[arr.length-1])
// one more way to declare this is array is
const num = new Array(1,2,3,4,5,6,7);
console.log(num)
// push
console.log(num.push(10))
// unshift -Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.
num.unshift(7);
console.log(num)
// pop
num.pop();
console.log(num)
// shift
console.log(num.shift())
// indexof
const str= ["si","hu","mp","mp"] 
console.log(str.indexOf("mp"))
// includes -Returns true if searchString appears as a substring of the result of converting this object to 
// a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(str.includes("mp")) // it will retrun true
console.log(str.includes("si",2)) // it will retrun false

// find function 
let channels = [
    {
        naam : 'apna clg',
        subscribers : 1
    },{
        naam : 'code with harry',
        subscribers : 3
    },{
        naam : 'coding wallah',
        subscribers : 1
    }
]
console.log(channels.find(function(element){
    return element.naam === 1
}))
// concat
let name1 = ['a','b','c']
let name2 = ['e','f','g']
let name3 = name1.concat(name2)
// another method to concat with spread operator
let nam3 = [...name1,...name2]
// in loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (const iter of arr) {
    console.log(iter)
}
// join 
let student = ['a','d','s','y']
console.log(student.join())
// console.log(student.join(''))
// split 
console.log(student.splice(','))
// diff between finnd and filter function is that we get first condition in find and in filter we get all 
// possible condition as output.
let cities = [
    {name: 'Mumbai', population: 3792621},
    {name: 'Delhi', population: 8175133},
    {name: 'Bangalore', population: 2695598},
    {name: 'Chennai', population: 2099451},
    {name: 'Lucknow', population: 1526006}
];

console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))