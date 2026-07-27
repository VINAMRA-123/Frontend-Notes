const rooms = [

{

name:"Standard Room",

category:"Standard",

price:"$80 / Night",

image:"images/room1.jpg",

description:"Comfortable room with WiFi and TV."

},

{

name:"Deluxe Room",

category:"Deluxe",

price:"$120 / Night",

image:"images/room2.jpg",

description:"Luxury room with balcony."

},

{

name:"Executive Deluxe",

category:"Deluxe",

price:"$150 / Night",

image:"images/room3.jpg",

description:"Spacious room with city view."

},

{

name:"Luxury Suite",

category:"Suite",

price:"$250 / Night",

image:"images/room4.jpg",

description:"Premium suite with living room."

},

{

name:"Presidential Suite",

category:"Suite",

price:"$400 / Night",

image:"images/room5.jpg",

description:"Best room in the hotel."

}

];

const roomGrid=document.getElementById("roomGrid");

function displayRooms(data){

roomGrid.innerHTML="";

data.forEach(room=>{

roomGrid.innerHTML+=`

<div class="room-card">

<img src="${room.image}">

<h3>${room.name}</h3>

<p>${room.price}</p>

<button onclick='showRoom(${JSON.stringify(room)})'>

View Details

</button>

</div>

`;

});

}

displayRooms(rooms);

const search=document.getElementById("searchRoom");

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

const filtered=rooms.filter(room=>

room.name.toLowerCase().includes(keyword)

);

displayRooms(filtered);

});

const category=document.getElementById("category");

category.addEventListener("change",()=>{

const value=category.value;

if(value==="all"){

displayRooms(rooms);

return;

}

displayRooms(

rooms.filter(room=>room.category===value)

);

});

const modal=document.getElementById("roomModal");

function showRoom(room){

modal.style.display="flex";

modalImage.src=room.image;

modalTitle.innerHTML=room.name;

modalPrice.innerHTML=room.price;

modalDescription.innerHTML=room.description;

favoriteBtn.onclick=()=>saveFavorite(room);

}

closeModal.onclick=()=>{

modal.style.display="none";

}

function saveFavorite(room){

let favorites=

JSON.parse(localStorage.getItem("favorites"))

|| [];

favorites.push(room);

localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);

alert("Added Successfully");

}