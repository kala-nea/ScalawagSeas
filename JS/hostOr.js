window.localStorage.setItem('Hosting', false);

let joinCode = document.getElementById("codeArea");

joinCode.value=window.localStorage.getItem('savedJoinCode');

joinCode.addEventListener("change",setCode);

function setCode(){
    console.log("saved code");
    window.localStorage.setItem('Hosting', false);
    window.localStorage.setItem('savedJoinCode',joinCode.value);
}