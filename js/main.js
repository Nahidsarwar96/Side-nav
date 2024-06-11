const sideNav = document.querySelector(".sideNav");
const navIcon = document.querySelector(".navIcon");
const cross = document.querySelector(".cross");


navIcon.addEventListener("click", () => {
    if (sideNav.classList.contains("sideNav")) {
        sideNav.classList.toggle("activeNav")
    }

});

cross.addEventListener("click", () => {
    sideNav.classList.add("activeNav")
})


