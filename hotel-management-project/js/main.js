function saveBooking(e) { e.preventDefault(); let b = { name: name.value, room: room.value }; let a = JSON.parse(localStorage.bookings || '[]'); a.push(b); localStorage.bookings = JSON.stringify(a); alert('Booked'); }
function loadBookings() { let t = document.getElementById('list'); if (!t) return; let a = JSON.parse(localStorage.bookings || '[]'); t.innerHTML = a.map(x => `<li>${x.name}-${x.room}</li>`).join(''); }
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    }

    else {

        navbar.classList.remove("sticky");

    }

});
const menu=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

menu.onclick=()=>{

    navLinks.classList.toggle("active");

}