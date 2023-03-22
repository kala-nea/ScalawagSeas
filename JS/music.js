document.addEventListener("click", playMusic);


function playMusic () {
    let audio = document.getElementById("music");
    audio.volume = 0.3;
    audio.play();
}

let titleImg = document.getElementById("title");
let imgDis = true;

function setImage () {
    if (imgDis == true) {
        titleImg.setAttribute("src", "../IMG/logo.png");
        imgDis = false;
    } else {
        titleImg.setAttribute("src", "../IMG/lorenz-sea-of-thieves.gif");
        imgDis = true;
    }
}

titleImg.addEventListener("click", setImage);