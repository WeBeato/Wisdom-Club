const formTitle = document.querySelector(".form__title")
let mistake = 3;

async function getAdmin(e) {
    e.preventDefault();

    const formUser = document.querySelector("#user").value;
    const formPass = document.querySelector("#pass").value;

    const res = await fetch("../data/admin.json");
    const data = await res.json();

    let user = data.user;
    let pass = data.pass;


    if (formUser === "" || formPass === "") {
        alert("اطلاعات رو کامل وارد نکردی که😕");
        return;
    } if (formPass === pass && formUser === user) {
        formTitle.textContent = "خوش اومدی پهلوون😎";
        localStorage.setItem("isAdmin", true);
        localStorage.setItem("animation", "notPlay");
        localStorage.removeItem("noAdmin");
        localStorage.removeItem("client");
        setTimeout(() => {
            window.location.replace("../index.html")
        }, 1000);
    } else {
        mistake--;
        if (mistake > 0) {
            alert(`اطلاعات رو اشتباه زدی مشتی😕
            ${mistake} بار بیشتر فرصت اشتباه نداری!`);
        } else {
            formTitle.textContent = "دیگه فرصتت تموم شد 😵 قفل شدی!";
            document.querySelector(".form__btn").disabled = true;
            document.querySelector(".form__btn").classList.add("form__btn--disabled");
            localStorage.setItem("noAdmin", true);
            noAdmin();
        }
    }
};

document.querySelector(".form").addEventListener("submit", getAdmin);


function noAdmin() {
    const noAdmin = localStorage.getItem("noAdmin");
    const overlay = document.getElementById("overlay");
    if (noAdmin) {
        setTimeout(() => {
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.opacity = "1";
            }, 100);
        }, 1000);
    }
    document.querySelector(".overlay__btn").addEventListener("click", () => {
        window.location.replace("../index.html")
    })
}
noAdmin();


const isAdmin = localStorage.getItem("isAdmin")
if (isAdmin) {
    const adminOverlay = document.getElementById("admin-overlay");
    if (noAdmin) {
        setTimeout(() => {
            adminOverlay.style.display = "flex";
            setTimeout(() => {
                adminOverlay.style.opacity = "1";
            }, 100);
        }, 1000);
    }
    document.querySelector(".admin-overlay__btn-main").addEventListener("click", () => {
        window.location.replace("../index.html")
    })
    document.querySelector(".admin-overlay__btn-panel").addEventListener("click", () => {
        window.location.replace("../panel.html")
    })
}

