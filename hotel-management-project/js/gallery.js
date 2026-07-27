const buttons =
document.querySelectorAll(".filter-btn");

const items =
document.querySelectorAll(".gallery-item");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>
btn.classList.remove("active"));

button.classList.add("active");

const filter=
button.dataset.filter;

items.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});


const lightbox=
document.getElementById("lightbox");

const lightboxImage=
document.getElementById("lightboxImage");

document.querySelectorAll(".gallery-item img")

.forEach(image=>{

image.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

};

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};