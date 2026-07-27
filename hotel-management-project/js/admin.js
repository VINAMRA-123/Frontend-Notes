let bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

let enquiries =
JSON.parse(localStorage.getItem("enquiries")) || [];

document.getElementById("bookingCount").innerText =
bookings.length;

document.getElementById("enquiryCount").innerText =
enquiries.length;

const table =
document.getElementById("bookingTable");

function loadBookings(data = bookings){

table.innerHTML="";

data.forEach((booking,index)=>{

table.innerHTML += `
<tr>

<td>${booking.id}</td>

<td>${booking.name}</td>

<td>${booking.room}</td>

<td>${booking.checkin}</td>

<td>${booking.checkout}</td>

<td>${booking.total}</td>

<td>

<button onclick="deleteBooking(${index})">

Delete

</button>

</td>

</tr>
`;

});

}

loadBookings();

function deleteBooking(index){

bookings.splice(index,1);

localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);

loadBookings();

document.getElementById("bookingCount").innerText =
bookings.length;

}

document.getElementById("search")

.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=

bookings.filter(b=>

b.name.toLowerCase().includes(value)

);

loadBookings(filtered);

});