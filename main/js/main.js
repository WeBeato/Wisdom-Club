
// Menu Button
const navMenu = document.querySelector(".nav-menu");
const navBtn = document.querySelector(".nav__btn");
const navBtnLine = document.querySelector(".nav__btn-line");
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navMenu.classList.remove("nav-menu--open")
        navBtnLine.classList.remove("nav__btn-line--close")
        navOpen = false
    } else {
        navMenu.classList.add("nav-menu--open")
        navBtnLine.classList.add("nav__btn-line--close")
        navOpen = true
    }
})


// Minimize Logo
const heroImage = document.querySelector(".hero__banner");
const heroContent = document.querySelector(".hero__content");
window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 85 && !heroImage.classList.contains('hero__banner--compressed')) {
        heroImage.classList.remove('hero__banner--compressed-exit');
        heroImage.classList.add('hero__banner--compressed');

        heroContent.classList.add('hero__content--matgin-cut');
    }

    if (scrollTop <= 85 && heroImage.classList.contains('hero__banner--compressed')) {
        heroImage.classList.remove('hero__banner--compressed');
        heroImage.classList.add('hero__banner--compressed-exit');

        heroContent.classList.remove('hero__content--matgin-cut');
    }
});

// Show Panel Button
const isAdmin = localStorage.getItem("isAdmin");
const panel = document.getElementById("panel");
if (isAdmin) {
    panel.style.display = "flex";
} else {
    panel.style.display = "none";
}

// Click Panel Button And Redirect To Admin Panel
document.getElementById("panel").addEventListener("click", () => {
    window.location.href = "/admin/panel.html";
});


