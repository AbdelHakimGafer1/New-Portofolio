AOS.init();

var typed = new Typed('#heroText', {
  strings: [
    'Web Developer',
    'Network Engineer',
    'System Administrator',
    'Software Developer',
    'AI Developer',
    'Backend Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'Cloud Engineer',
  ],
  typeSpeed: 50,
});

let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function () {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
  }
  else {
    menuBtn.classList.replace("bx-x", "bx-menu");
  }
})