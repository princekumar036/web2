const menuBtn = document.querySelector(".nav-btn");
const hamburger = document.querySelector(".nav-btn-burger");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (showMenu) {
        hamburger.classList.add("open");
        showMenu = false;
    }
    else {
        hamburger.classList.remove("open");
        showMenu = false;
    }
}