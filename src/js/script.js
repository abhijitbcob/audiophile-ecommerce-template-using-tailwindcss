const header = document.querySelector("header");
const menuToggler = document.querySelector("#menu-toggler");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

menuToggler.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    // overlay.classList.add("z-[-1]");
  } else {
    header.classList.add("open");
    // overlay.classList.remove("z-[-1]");
  }
});
