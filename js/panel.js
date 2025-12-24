// Click Main Button And Redirect To Main Page
document.getElementById("main").addEventListener("click", () => {
    window.location.href = "../index.html";
});


// No Admin
const isAdmin = localStorage.getItem("isAdmin");
function noAdmin() {
    const noAdmin = localStorage.getItem("noAdmin");
    const overlay = document.getElementById("overlay");
    if (noAdmin || isAdmin == null) {
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


// Intro Text Animation
const introText1 = document.getElementById("introText1");
const introText2 = document.getElementById("introText2");
const intro = document.getElementById("intro");
const panel = document.getElementById("panel");
let animation = localStorage.getItem("animation");
if (isAdmin && animation == "notPlay") {
    window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            introText1.style.animation = "fade-out 1s forwards";
        }, 2500);
        setTimeout(() => {
            introText2.style.animation = "fade-in 1s forwards";
            setTimeout(() => {
                introText2.style.animation = "fade-out 1s forwards";
                setTimeout(() => {
                    intro.style.display = "none";
                    setTimeout(() => {
                        panel.style.display = "block";
                        panel.style.animation = "panel-expend 1s forwards 0.25s"
                        localStorage.setItem("animation", "play")
                    }, 500);
                }, 1000);
            }, 2000);
        }, 2500);
    })
} else {
    intro.style.display = "none";
    panel.style.display = "block";
    panel.style.animation = "panel-expend 1s forwards 0.25s"
}



// Add & Save Posts
const formAddPost = document.querySelector(".add-post");
// let postImage = document.getElementById("post-image");
let postTitle = document.getElementById("post-title");
let postDescribtion = document.getElementById("post-describtion");
let postLink = document.getElementById("post-link");

const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
        id: Date.now(),
        postTitle: postTitle.value,
        postDescribtion: postDescribtion.value,
        postLink: postLink.value
    };

    localStorage.setItem("post",JSON.stringify(post));

    postTitle.value = "";
    postDescribtion.value = "";
    postLink.value = "";
}

formAddPost.addEventListener("submit", handleSubmit);