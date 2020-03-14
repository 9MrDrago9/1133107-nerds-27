var link = document.querySelector(".map__contacts__btn");

var link = document.querySelector(".write-us");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
