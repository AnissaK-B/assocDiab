function togglePopup() {
let popup= document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}
const links = document.querySelectorAll("nav li");

Icon.addEventLister("click", () => {
  nav.classList.toggle("active");
});
