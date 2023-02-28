statsByTon = [
    [20,  "Corvette",          4,  6,  6,  10, 10, 6,  4,  3, 30,  0, 5,  5,  10, 15, 20],
    [25,  "Corvette",          7,  9,  9,  13, 13, 8,  7,  3, 44,  0, 6,  6,  9,  13, 18],
    [30,  "Corvette",          10, 12, 12, 16, 16, 10, 10, 3, 58,  0, 7,  7,  8,  12, 16],
    [35,  "Corvette",          13, 15, 15, 19, 19, 12, 13, 3, 72,  0, 8,  8,  7,  11, 15],

    [40,  "Cruiser",           16, 18, 18, 22, 22, 14, 16, 3, 86,  0, 9,  9,  7,  11, 14],
    [45,  "Cruiser",           19, 21, 21, 25, 25, 16, 19, 3, 100, 0, 9,  9,  7,  10, 15],
    [50,  "Cruiser",           22, 24, 24, 28, 28, 18, 22, 3, 114, 2, 10, 10, 7,  10, 14],
    [55,  "Cruiser",           25, 27, 27, 31, 31, 20, 25, 3, 128, 3, 10, 10, 6,  9,  12],

    [60,  "Destroyer",         28, 30, 30, 34, 34, 22, 28, 3, 142, 3, 10, 10, 6,  8,  11],
    [65,  "Destroyer",         31, 34, 34, 37, 37, 24, 31, 3, 156, 4, 11, 11, 6,  8,  10],
    [70,  "Destroyer",         37, 39, 39, 43, 43, 28, 37, 3, 184, 5, 11, 11, 6,  7,  11],
    [75,  "Destroyer",         40, 42, 42, 46, 46, 30, 40, 3, 198, 5, 12, 12, 6,  7,  10],

    [80,  "Dreadnought",       43, 45, 45, 49, 49, 32, 43, 3, 212, 6, 12, 12, 5,  6,  8],
    [85,  "Dreadnought",       46, 48, 48, 52, 52, 34, 46, 3, 226, 6, 12, 12, 5,  7,  9],
    [90,  "Dreadnought",       49, 51, 51, 55, 55, 36, 49, 3, 240, 6, 13, 13, 5,  6,  9],
    [95,  "Dreadnought",       52, 54, 54, 58, 58, 38, 52, 3, 254, 7, 13, 13, 4,  6,  8],
    [100, "Dreadnought",       55, 57, 57, 61, 61, 40, 55, 3, 268, 7, 13, 13, 4,  5,  7],

    [130, "Super-Dreadnought", 70, 72, 72, 76, 76, 50, 70, 3, 338, 8, 14, 14, 3,  5,  6],
    [155, "Super-Dreadnought", 85, 87, 87, 91, 91, 60, 85, 3, 408, 9, 15, 15, 2,  3,  4]
]

let tonnageTable = document.getElementById("tonnageTable");
for (ton in statsByTon) {
    let newRow = document.createElement("option")
    newRow.setAttribute("value", ton);
    newRow.textContent = statsByTon[ton][0];
    tonnageTable.appendChild(newRow);
}

tonnageTable.addEventListener("change", setValues);
tonnageTable.addEventListener("change", getArmorOptions);

let wcDisplay = document.getElementById("wcDisplay");

let cpDisplay = document.getElementById("cpDisplay");
let fspDisplay = document.getElementById("fspDisplay");
let fpDisplay = document.getElementById("fpDisplay");

let bridgeHP = document.getElementById("bridgeHP");
let bowHP = document.getElementById("bowHP");
let aftHP = document.getElementById("aftHP");
let portHP = document.getElementById("portHP");
let starboardHP = document.getElementById("starboardHP");
let bilgeHP = document.getElementById("bilgeHP");
let mastHP = document.getElementById("mastHP");
let rudderHP = document.getElementById("rudderHP");

let armorRemaining;
let wc;
let cp;
let fsp;
let fp;
let brHP
let boHP;
let aHP;
let pHP;
let sHP;
let biHP;
let mHP;
let rHP;

function setValues () {
    console.log(parseInt(tonnageTable.value));
    wc = statsByTon[parseInt(tonnageTable.value)][1];

    cp = statsByTon[parseInt(tonnageTable.value)][14];
    fsp = statsByTon[parseInt(tonnageTable.value)][15];
    fp = statsByTon[parseInt(tonnageTable.value)][16];

    brHP = statsByTon[parseInt(tonnageTable.value)][2];
    boHP = statsByTon[parseInt(tonnageTable.value)][3];
    aHP = statsByTon[parseInt(tonnageTable.value)][4];
    pHP = statsByTon[parseInt(tonnageTable.value)][5];
    sHP = statsByTon[parseInt(tonnageTable.value)][6];
    biHP = statsByTon[parseInt(tonnageTable.value)][7];
    mHP = statsByTon[parseInt(tonnageTable.value)][8];
    rHP = statsByTon[parseInt(tonnageTable.value)][9];
    armorRemaining = statsByTon[parseInt(tonnageTable.value)][10];

    wcDisplay.textContent = wc;

    cpDisplay.textContent = cp;
    fspDisplay.textContent = fsp;
    fpDisplay.textContent = fp;

    bridgeHP.textContent = brHP;
    bowHP.textContent = boHP;
    aftHP.textContent = aHP;
    portHP.textContent = pHP;
    starboardHP.textContent = sHP;
    bilgeHP.textContent = biHP;
    mastHP.textContent = mHP;
    rudderHP.textContent = rHP;
}

let armorArea = document.getElementById("armorArea");
let armorType = document.getElementById("armorType");

function getArmorOptions () {
    armorType.replaceChildren('');

    let newRow1 = document.createElement("option");
    newRow1.setAttribute("value", 0);
    newRow1.textContent = "Wood";
    let newRow2 = document.createElement("option");
    newRow2.setAttribute("value", 1);
    newRow2.textContent = "Ceramic";
    let newRow3 = document.createElement("option");
    newRow3.setAttribute("value", 2);
    newRow3.textContent = "Iron";
    let newRow4 = document.createElement("option");
    newRow4.setAttribute("value", 3);
    newRow4.textContent = "Compound";
    let newRow5 = document.createElement("option");
    newRow5.setAttribute("value", 4);
    newRow5.textContent = "Synthetic";

    if (armorRemaining >= 50) {
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
        armorType.appendChild(newRow4);
        armorType.appendChild(newRow5);
    } else if (armorRemaining >= 25) {
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
        armorType.appendChild(newRow4);
    } else if (armorRemaining >= 10) {
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
    } else if (armorRemaining >= 5) {
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
    } else if (armorRemaining >= 1) {
        armorType.appendChild(newRow1);
    }
}

let addArmorButton = document.getElementById("addArmorButton");

function addArmor () {
    switch (armorType.value + "-" + armorArea.value) {
        case "0-0":
            armorRemaining = armorRemaining - 1;
            brHP = brHP + 1;
            break;
        case "0-1":
            armorRemaining = armorRemaining - 1;
            boHP = boH + 1;
            break;
        case "0-2":
            armorRemaining = armorRemaining - 1;
            aHP = aHP + 1;
            break;
        case "0-3":
            armorRemaining = armorRemaining - 1;
            pHP = pHP + 1;
            break;
        case "0-4":
            armorRemaining = armorRemaining - 1;
            sHP = sHP + 1;
            break;
        case "0-5":
            armorRemaining = armorRemaining - 1;
            biHP = biHP + 1;
            break;
        case "0-6":
            armorRemaining = armorRemaining - 1;
            mHP = mHP + 1;
            break; 
        case "0-7":
            armorRemaining = armorRemaining - 1;
            rHP = rHP + 1;
            break;
        
        case "1-0":
            armorRemaining = armorRemaining - 5;
            brHP = brHP + 10;
            break;
        case "1-1":
            armorRemaining = armorRemaining - 5;
            boHP = boHP + 10;
            break;
        case "1-2":
            armorRemaining = armorRemaining - 5;
            aHP = aHP + 10;
            break;
        case "1-3":
            armorRemaining = armorRemaining - 5;
            pHP = pHP + 10;
            break;
        case "1-4":
            armorRemaining = armorRemaining - 5;
            sHP = sHP + 10;
            break;
        case "1-5":
            armorRemaining = armorRemaining - 5;
            biHP = biHP + 10;
            break;
        case "1-6":
            armorRemaining = armorRemaining - 5;
            mHP = mHP + 10;
            break; 
        case "1-7":
            armorRemaining = armorRemaining - 5;
            rHP = rHP + 10;
            break;
        
        case "2-0":
            armorRemaining = armorRemaining - 10;
            brHP = brHP + 25;
            break;
        case "2-1":
            armorRemaining = armorRemaining - 10;
            boHP = boHP + 25;
            break;
        case "2-2":
            armorRemaining = armorRemaining - 10;
            aHP = aHP + 25;
            break;
        case "2-3":
            armorRemaining = armorRemaining - 10;
            pHP = pHP + 25;
            break;
        case "2-4":
            armorRemaining = armorRemaining - 10;
            sHP = sHP + 25;
            break;
        case "2-5":
            armorRemaining = armorRemaining - 10;
            biHP = biHP + 25;
            break;
        case "2-6":
            armorRemaining = armorRemaining - 10;
            mHP = mHP + 25;
            break; 
        case "2-7":
            armorRemaining = armorRemaining - 10;
            rHP = rHP + 25;
            break;
        
        case "3-0":
            armorRemaining = armorRemaining - 25;
            brHP = brHP + 75;
            break;
        case "3-1":
            armorRemaining = armorRemaining - 25;
            boHP = boHP + 75;
            break;
        case "3-2":
            armorRemaining = armorRemaining - 25;
            aHP = aHP + 75;
            break;
        case "3-3":
            armorRemaining = armorRemaining - 25;
            pHP = pHP + 75;
            break;
        case "3-4":
            armorRemaining = armorRemaining - 25;
            sHP = sHP + 75;
            break;
        case "3-5":
            armorRemaining = armorRemaining - 25;
            biHP = biHP + 75;
            break;
        case "3-6":
            armorRemaining = armorRemaining - 25;
            mHP = mHP + 75;
            break; 
        case "3-7":
            armorRemaining = armorRemaining - 25;
            rHP = rHP + 75;
            break;
        
        case "4-0":
            armorRemaining = armorRemaining - 50;
            brHP = brHP + 175;
            break;
        case "4-1":
            armorRemaining = armorRemaining - 50;
            boHP = boHP + 175;
            break;
        case "4-2":
            armorRemaining = armorRemaining - 50;
            aHP = aHP + 175;
            break;
        case "4-3":
            armorRemaining = armorRemaining - 50;
            pHP = pHP + 175;
            break;
        case "4-4":
            armorRemaining = armorRemaining - 50;
            sHP = sHP + 175;
            break;
        case "4-5":
            armorRemaining = armorRemaining - 50;
            biHP = biHP + 175;
            break;
        case "4-6":
            armorRemaining = armorRemaining - 50;
            mHP = mHP + 175;
            break; 
        case "4-7":
            armorRemaining = armorRemaining - 50;
            rHP = rHP + 175;
            break;
    }

    bridgeHP.textContent = brHP;
    bowHP.textContent = boHP;
    aftHP.textContent = aHP;
    portHP.textContent = pHP;
    starboardHP.textContent = sHP;
    bilgeHP.textContent = biHP;
    mastHP.textContent = mHP;
    rudderHP.textContent = rHP;
}

addArmorButton.addEventListener("click", addArmor);
addArmorButton.addEventListener("click", getArmorOptions);