/*Navbar */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

/*Close Navbar when  */
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
});
