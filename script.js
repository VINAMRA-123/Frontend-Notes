let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('enter the name of student');
    namasteBtn.textContent ='enter rollno' + name;
}
// The console.log() method outputs a message to the web console. 
// difference between let and  var
// The variables that are defined with var statement have function scope.
// We can declare a variable again even if it has been defined previously in the same scope.
// The variables that are defined with let statement have block scope.
// We cannot declare a variable more than once if we defined that previously in the same scope.