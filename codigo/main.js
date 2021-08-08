const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  } 

function sendMail(params){
  var tempParams={
    from_name:document.getElementById("fromName").value,
    to_name:document.getElementById("toName").value,
    message:document.getElementById("msg").value,
  };

  emailjs.send('service_j62ce7h','template_kjvapv4',tempParams).then(function(res){
    console.log("success",res.status);
  })
}