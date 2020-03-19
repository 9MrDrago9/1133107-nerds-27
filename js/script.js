var link = document.querySelector(".map__contacts__btn");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
});
