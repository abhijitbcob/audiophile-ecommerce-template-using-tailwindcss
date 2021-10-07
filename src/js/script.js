const header = document.querySelector("header");
const menuToggler = document.querySelector("#menu-toggler");
const body = document.querySelector("body");

menuToggler.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
