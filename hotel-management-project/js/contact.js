const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const subject=document.getElementById("subject").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""){

alert("Enter Name");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Invalid Email");

return;

}

const phonePattern=/^[0-9]{10}$/;

if(!phonePattern.test(phone)){

alert("Phone must contain exactly 10 digits");

return;

}

if(subject===""){

alert("Enter Subject");

return;

}

if(message.length<10){

alert("Message should contain at least 10 characters");

return;

}

const enquiry={

name,

email,

phone,

subject,

message,

date:new Date().toLocaleString()

};

let enquiries=

JSON.parse(localStorage.getItem("enquiries"))

||[];

enquiries.push(enquiry);

localStorage.setItem(

"enquiries",

JSON.stringify(enquiries)

);

alert("Message Sent Successfully");

form.reset();

});