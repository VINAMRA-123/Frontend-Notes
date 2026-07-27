const prices={

Standard:80,

Deluxe:120,

Suite:200

};

const room=document.getElementById("room");

const checkin=document.getElementById("checkin");

const checkout=document.getElementById("checkout");

const total=document.getElementById("totalPrice");

function calculatePrice(){

if(room.value===""||checkin.value===""||checkout.value===""){

return;

}

const start=new Date(checkin.value);

const end=new Date(checkout.value);

const days=(end-start)/(1000*60*60*24);

if(days<=0){

total.innerHTML="Invalid Dates";

return;

}

const amount=days*prices[room.value];

total.innerHTML=`Total : $${amount}`;

}

room.onchange=calculatePrice;

checkin.onchange=calculatePrice;

checkout.onchange=calculatePrice;

document.getElementById("bookingForm")

.addEventListener("submit",function(e){

e.preventDefault();

const booking={

id:"BK"+Date.now(),

name:name.value,

email:email.value,

phone:phone.value,

room:room.value,

checkin:checkin.value,

checkout:checkout.value,

guests:guests.value,

total:total.innerHTML

};

let bookings=

JSON.parse(localStorage.getItem("bookings"))

||[];

bookings.push(booking);

localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);

alert("Booking Successful");

this.reset();

total.innerHTML="Total : $0";

});