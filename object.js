// let title = "welcome to js";
// let sec = 10;
// let lec = 19;
// const course = {
//     title : "welcome to js",
//     sec : 10,
//     lec : 19,
//     notes:{
//         intro : " hi man"
//     },
//     enroll() {
//         console.log('you are sucessfully enrolled');
//     }
// }
// function Course(title){
//     this.title = title;
//     this.enroll = function(){
//         console.log("you are succesfully enrooled");
//     }
// }
let lecture = 10;
let section = 3;
let title = 'Javascript';

const course = {
    lecture: 10,
    section: 3,
    title: 'Javascript',
    notes: {
        introduction: "Welcome to JS course"
    },
    enroll() {
        console.log('you are sucessfully enrolled');
    }
}
// Factory Function

function createCourse(title) {
    return {
        title: title,
        enroll() {
            console.log('you are sucessfully enrolled');
        }
    }
}

const newCourse = createCourse('Javascript');

// Constructor Function

function Course(title) {
    this.title = title,
    this.enroll = function () {
        console.log('you are sucessfully enrolled');
    }
}

// Primitive Datatype
let number = 10;
// Pass by Value
let number_2 = number
number = 15;

// Reference Datatype
let obj = {number : 10};
// Pass by Reference
let obj2 = obj;

// for copy 
const course1 = { ...course}
course1.title = "cpp";

for (let key in course1) {
    console.log(key,course[key]);    
}
for(let value of Object.keys(course)){
    console.log(key,course[key]);
}
// in this we get arrays of keys

// question on objects
let product = {
    itemname : 'flower',
    price : 50,
    discount : 10,
    itemcode : 'f40'
}
// through constructor function 
function factpro(name,amount,conces,code){
    return {
        name : itemname,amount : price  , conces : discount,code : itemcode
    }
}
// through factory function 
function conspro(name,amount,conces,code){
    this.name = itemname; this.amount = price;this.conces = discount;this.code= itemcode;
    this.disval = function(){
        return price*(discount/100);
    }
}
const mobile = new conspro('mi8',10000,10,'sd23')
// in constructor function we use new 
// or discount function can be used
function distot(price,discount){
    price = price - price*(discount/100);
    return price;
}