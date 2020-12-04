window.onscroll = function() {stickyNav()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let inputNav = document.getElementById("input-container-nav");
let inputHeader = document.getElementById("input-container");

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    inputNav.style.display = "block";
    inputHeader.style.display = "none";
  } else {
    navbar.classList.remove("sticky");
    inputNav.style.display = "none";
    inputHeader.style.display = "block";
  }
}
