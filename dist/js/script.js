const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", function(e) {
  //menuBody.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});

function testWebp(callback) {
  let webp = new Image();
  webp.onload = webp.onerror = function () {
    callback(webp.height == 2);
  };
  webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
  
testWebp(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});