document.addEventListener("scroll", playMusic);
document.addEventListener("click", playMusic);

function playMusic () {
    let audio = document.getElementById("music");
    audio.volume = 0.3;
    let x = 0;
    if (x == 0) {
        audio.play();
        x = 1;
    }
}

let titleImg = document.getElementById("title");
let imgDis = false;

function setImage () {
    if (imgDis == true) {
        titleImg.setAttribute("src", "../IMG/SSLogo2.png");
        imgDis = false;
    } else {
        titleImg.setAttribute("src", "../IMG/lorenz-sea-of-thieves.gif");
        imgDis = true;
    }
}

titleImg.addEventListener("click", setImage);