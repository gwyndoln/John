const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", function(e) {
  //menuBody.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
})