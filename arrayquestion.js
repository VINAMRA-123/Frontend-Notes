const characters = [
    {
        name: 'Tarak Mehta',
        height: '172',
        mass: '77',
        eye_color: 'brown',
        gender: 'male',
    },
    {
        name: 'Jethalal',
        height: '145',
        mass: '136',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Babita Ji',
        height: '150',
        mass: '49',
        eye_color: 'grey',
        gender: 'female',
    },
    {
        name: 'Krishnan Iyer',
        height: '168',
        mass: '84',
        eye_color: 'black',
        gender: 'male',
    },
];
// Get an array of all names
const  names =characters.map(ch => ch.name)
console.log(names)
// Get an array of names and hieght
const  names1 =characters.map(ch => {
    return {
        name :ch.name ,
        height :ch.height
    }
    })
console.log(names1)
//  Get the total height of all characters
const h1 = characters.reduce((previous,characters) =>{
    return previous + Number(characters.height);
},0)
console.log(h1)
// Get characters with mass greater than 100
const masss = characters.filter(characters =>characters.mass >100)
console.log(masss)
// Get all male characters
const aadmi = characters.filter(characters =>characters.gender === 'male')
console.log(aadmi)
// sort by gender 
const sortgend = characters.sort((character1,character2)=>{
    if (character1.gender > character2.gender) {
        return -1;
    }
    if (character1.gender < character2.gender) {
        return 1;
    }
    return 0
})
console.log(sortgend);
// SORT BY NAME
const sortByName = characters.sort((character1, character2) => {
    if (character1.name > character2.name) {
        return -1;
    }
    if (character1.name < character2.name) {
        return 1;
    }
    return 0
})
// Does every character have mass more than 40?
console.log(characters.every((character) => character.mass > 40))

// Does every character have blue eyes?
console.log(characters.every((character) => character.eye_color == 'blue'))

// Is there at least one male character?
console.log(characters.some((character) => character.gender))
// Is there at least one character taller than 200?
console.log(characters.some((character) => character.height > 200))
