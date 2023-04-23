// var time = prompt("enter the time");
// if(time>5 &&time <17){
//     alert("good morning");
// }
// else{
//     alert(" good evening");
// }
// // in this if any null or empty value or if we click cancel then else loop will run.

// // switch
// var language = prompt("konsi sikhu");
// switch (language) {
//     case "python":
//         alert("sikh le");
//         break;
//     case "cpp":
//         alert("dsa ke liye sikh le");
//         break;
//     case "javascript":
//         alert("baad me sikhna");
//     default:
//         console.log(`${language} pehle placement pe focus kar`);// ye imp h.
//         break;
// }
// // for loop 
// for (let i = 0; i < 5; i++) {
//     // const element = array[i];
//     console.log(i);
// }
// let i= 6;
// while (i>5) {
//     console.log(i)
// }
let j =10;
do{
    console.log(j)
    j++;
}
while (j<10) 
// for in
let animal ={
    typename : 'zebra',
    legs : 4
};
for (const key in animal) {
    console.log(animal[key]);
}
// arrays - it provide with index
for (let key in object) {
    console.log(key,object[key])
}
// for..of
for (let iterator of object) {
    console.log(iterator)
}
