// there are 2 types of conversion implicit and explicit 
// there are 3 types of conversion - boolean,number ,string
// implicit-in certain situations, JavaScript automatically converts one data type to another (to the right type). 
// Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.
// Boolean conversion
Boolean(2); //explicit
if(2) {} // implicit due to logical operator
!!2 // implicit due to logical operator
2|| true // implicit due to logical operator
Boolean(" ") //false
Boolean(0) //false
Boolean(-0) // false
Boolean(NaN) //false
Boolean(Infinity) // true
Boolean(null) //false
Boolean(undefined) // false

// number conversion

// some tricky questions
true + false // 1
12/'6' // 2
"number" + 15+5 //"number155"
15 +3 +"number" //"18number"
[1]>null // true
"true" == true; //false