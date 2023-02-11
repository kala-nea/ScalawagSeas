let walkMax = document.getElementById("walkMax");
let tilesWalked = document.getElementById("tilesWalked");
let rotationsWalked = document.getElementById("rotationsWalked");
let LCWalked = document.getElementById("LCWalked");
let HCWalked = document.getElementById("HCWalked");
let altWalked = document.getElementById("altWalked");
let walkCurrent = document.getElementById("walkCurrent");

function setWalk () {
    let var1 = +walkMax.value;
    let var2 = +tilesWalked.value;
    let var3 = +rotationsWalked.value;
    let var4 = +LCWalked.value;
    let var5 = +HCWalked.value;
    let var6 = +altWalked.value;
    let xWalked = var1 - (var2 + var3 + var4 + var6 + (2 * var5));
    
    if (xWalked >= 0) {
        walkCurrent.textContent = xWalked;
    } else {
        walkCurrent.textContent = "Cannot Walk This Far";
    }
}

document.querySelectorAll("#tilesWalked, #rotationsWalked, #LCWalked, #HCWalked, #altWalked")
    .forEach(input => input.addEventListener("change", setWalk));


let runMax = document.getElementById("runMax");
let tilesRan = document.getElementById("tilesRan");
let rotationsRan = document.getElementById("rotationsRan");
let LCRan = document.getElementById("LCRan");
let HCRan = document.getElementById("HCRan");
let altRan = document.getElementById("altRan");
let runCurrent = document.getElementById("runCurrent");

function setRun () {
    let var1 = +runMax.value;
    let var2 = +tilesRan.value;
    let var3 = +rotationsRan.value;
    let var4 = +LCRan.value;
    let var5 = +HCRan.value;
    let var6 = +altRan.value;
    let xRan = var1 - (var2 + var3 + var4 + var6 + (2 * var5));
    
    if (xRan >= 0) {
        runCurrent.textContent = xRan;
    } else {
        runCurrent.textContent = "Cannot Run This Far";
    }
}

document.querySelectorAll("#tilesRan, #rotationsRan, #LCRan,#HCRan, #altRan")
    .forEach(input => input.addEventListener("change", setRun));


let jumpMax = document.getElementById("jumpMax");
let tilesJumped = document.getElementById("tilesJumped");
let jumpCurrent = document.getElementById("jumpCurrent");

function setJump () {
    let var1 = +jumpMax.value;
    let var2 = +tilesJumped.value;
    let xJumped = var1 - var2;
    
    if (xJumped >= 0) {
        jumpCurrent.textContent = xJumped;
    } else {
        jumpCurrent.textContent = "Cannot Jump This Far";
    }
}

document.querySelectorAll("#tilesJumped")
    .forEach(input => input.addEventListener("change", setJump));


let H = document.getElementById("H");
let CT = document.getElementById("CT");
let LT = document.getElementById("LT");
let RT = document.getElementById("RT");
let LA = document.getElementById("LA");
let RA = document.getElementById("RA");
let LL = document.getElementById("LL");
let RL = document.getElementById("RL");

let curH = document.getElementById("curH");
let curCT = document.getElementById("curCT");
let curLT = document.getElementById("curLT");
let curRT = document.getElementById("curRT");
let curLA = document.getElementById("curLA");
let curRA = document.getElementById("curRA");
let curLL = document.getElementById("curLL");
let curRL = document.getElementById("curRL");

function setHealthH (x, y) {
    
}