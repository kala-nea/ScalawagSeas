document.addEventListener("click", playMusic);


function playMusic () {
    let audio = document.getElementById("music");
    audio.volume = 0.3;
    audio.play();
}