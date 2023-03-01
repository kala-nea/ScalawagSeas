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
tonnageTable.addEventListener("change", getWeaponOptionsB1);
tonnageTable.addEventListener("change", getWeaponOptionsB2);
tonnageTable.addEventListener("change", getWeaponOptionsP1);
tonnageTable.addEventListener("change", getWeaponOptionsP2);
tonnageTable.addEventListener("change", getWeaponOptionsS1);
tonnageTable.addEventListener("change", getWeaponOptionsS2);

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

let alDisplay = document.getElementById("alDisplay");
let wlDisplayB = document.getElementById("wlDisplayB");
let wlDisplayP = document.getElementById("wlDisplayP");
let wlDisplayS = document.getElementById("wlDisplayS");

let armorRemaining;
let weaponsRemainingB;
let weaponsRemainingP;
let weaponsRemainingS;
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
    weaponsRemainingB = statsByTon[parseInt(tonnageTable.value)][11];
    weaponsRemainingP = statsByTon[parseInt(tonnageTable.value)][12];
    weaponsRemainingS = statsByTon[parseInt(tonnageTable.value)][13];

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

    alDisplay.textContent = armorRemaining;
    wlDisplayB.textContent = weaponsRemainingB;
    wlDisplayP.textContent = weaponsRemainingP;
    wlDisplayS.textContent = weaponsRemainingS;
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
    alDisplay.textContent = armorRemaining;
}

addArmorButton.addEventListener("click", addArmor);
addArmorButton.addEventListener("click", getArmorOptions);

let weaponLbB = document.getElementById("weaponLbB");
let weaponLbP = document.getElementById("weaponLbP");
let weaponLbS = document.getElementById("weaponLbS");
let weaponTypeB = document.getElementById("weaponTypeB");
let weaponTypeP = document.getElementById("weaponTypeP");
let weaponTypeS = document.getElementById("weaponTypeS");
let weaponAmmoB = document.getElementById("weaponAmmoB");
let weaponAmmoP = document.getElementById("weaponAmmoP");
let weaponAmmoS = document.getElementById("weaponAmmoS");

function getWeaponOptionsB1 () {
    weaponTypeB.replaceChildren('');

    let newRow1 = document.createElement("option");
    newRow1.setAttribute("value", 0);
    newRow1.textContent = "Cannon";
    let newRow2 = document.createElement("option");
    newRow2.setAttribute("value", 1);
    newRow2.textContent = "Long Nine";
    let newRow3 = document.createElement("option");
    newRow3.setAttribute("value", 2);
    newRow3.textContent = "Carronade";
    let newRow4 = document.createElement("option");
    newRow4.setAttribute("value", 3);
    newRow4.textContent = "Paixhan";

    if (weaponsRemainingB >= 8) {
        weaponTypeB.appendChild(newRow1);
        weaponTypeB.appendChild(newRow2);
        weaponTypeB.appendChild(newRow3);
        weaponTypeB.appendChild(newRow4);
    } else if (weaponsRemainingB >= 4) {
        weaponTypeB.appendChild(newRow1);
        weaponTypeB.appendChild(newRow2);
        weaponTypeB.appendChild(newRow3);
    } else if (weaponsRemainingB > 0) {
        weaponTypeB.appendChild(newRow1);
        weaponTypeB.appendChild(newRow2);
    }

    
}

function getWeaponOptionsB2 () {
    weaponLbB.replaceChildren('');
    weaponAmmoB.replaceChildren('');

    let newPound1 = document.createElement("option");
    newPound1.setAttribute("value", 0);
    newPound1.textContent = "6lb";
    let newPound2 = document.createElement("option");
    newPound2.setAttribute("value", 1);
    newPound2.textContent = "8lb";
    let newPound3 = document.createElement("option");
    newPound3.setAttribute("value", 2);
    newPound3.textContent = "9lb";
    let newPound4 = document.createElement("option");
    newPound4.setAttribute("value", 3);
    newPound4.textContent = "12lb";
    let newPound5 = document.createElement("option");
    newPound5.setAttribute("value", 4);
    newPound5.textContent = "18lb";
    let newPound6 = document.createElement("option");
    newPound6.setAttribute("value", 5);
    newPound6.textContent = "24lb";
    let newPound7 = document.createElement("option");
    newPound7.setAttribute("value", 6);
    newPound7.textContent = "32lb";
    let newPound8 = document.createElement("option");
    newPound8.setAttribute("value", 7);
    newPound8.textContent = "36lb";
    let newPound9 = document.createElement("option");
    newPound9.setAttribute("value", 8);
    newPound9.textContent = "42lb";

    if (parseInt(weaponTypeB.value) == 0) {
        if (weaponsRemainingB >= 8) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
            weaponLbB.appendChild(newPound6);
            weaponLbB.appendChild(newPound7);
            weaponLbB.appendChild(newPound8);
            weaponLbB.appendChild(newPound9);
        } else if (weaponsRemainingB >= 7) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
            weaponLbB.appendChild(newPound6);
            weaponLbB.appendChild(newPound7);
            weaponLbB.appendChild(newPound8);
        } else if (weaponsRemainingB >= 6) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
            weaponLbB.appendChild(newPound6);
            weaponLbB.appendChild(newPound7);
        } else if (weaponsRemainingB >= 5) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
            weaponLbB.appendChild(newPound6);
        } else if (weaponsRemainingB >= 4) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
        } else if (weaponsRemainingB >= 3) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
            weaponLbB.appendChild(newPound4);
        } else if (weaponsRemainingB >= 2) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
        } else if (weaponsRemainingB >= 1) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
        }
    } else if (parseInt(weaponTypeB.value) == 1) {
        if (weaponsRemainingB >= 3) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
            weaponLbB.appendChild(newPound3);
        } else if (weaponsRemainingB >= 2) {
            weaponLbB.appendChild(newPound1);
            weaponLbB.appendChild(newPound2);
        } else if (weaponsRemainingB >= 1) {
            weaponLbB.appendChild(newPound1);
        }
    } else if (parseInt(weaponTypeB.value) == 2) {
        if (weaponsRemainingB >= 6) {
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
            weaponLbB.appendChild(newPound6);
        } else if (weaponsRemainingB >= 5) {
            weaponLbB.appendChild(newPound4);
            weaponLbB.appendChild(newPound5);
        } else if (weaponsRemainingB >= 4) {
            weaponLbB.appendChild(newPound4);
        }
    } else if (parseInt(weaponTypeB.value) == 3) {
        if (weaponsRemainingB >= 10) {
            weaponLbB.appendChild(newPound7);
            weaponLbB.appendChild(newPound8);
            weaponLbB.appendChild(newPound9);
        } else if (weaponsRemainingB >= 9) {
            weaponLbB.appendChild(newPound7);
            weaponLbB.appendChild(newPound8);
        } else if (weaponsRemainingB >= 8) {
            weaponLbB.appendChild(newPound7);
        }
    }

    let newAmmo1 = document.createElement("option");
    newAmmo1.setAttribute("value", 0);
    newAmmo1.textContent = "Round Shot";
    let newAmmo2 = document.createElement("option");
    newAmmo2.setAttribute("value", 1);
    newAmmo2.textContent = "Grapeshot";
    let newAmmo3 = document.createElement("option");
    newAmmo3.setAttribute("value", 2);
    newAmmo3.textContent = "Chain Shot";

    if (parseInt(weaponTypeB.value) == 0) {
        weaponAmmoB.appendChild(newAmmo1);
        weaponAmmoB.appendChild(newAmmo2);
        weaponAmmoB.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeB.value) == 1) {
        weaponAmmoB.appendChild(newAmmo1);
        weaponAmmoB.appendChild(newAmmo2);
    } else if (parseInt(weaponTypeB.value) == 2) {
        weaponAmmoB.appendChild(newAmmo1);
        weaponAmmoB.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeB.value) == 3) {
        weaponAmmoB.appendChild(newAmmo1);
    }
}

weaponTypeB.addEventListener("change", getWeaponOptionsB2);

function getWeaponOptionsP1 () {
    weaponTypeP.replaceChildren('');

    let newRow1 = document.createElement("option");
    newRow1.setAttribute("value", 0);
    newRow1.textContent = "Cannon";
    let newRow2 = document.createElement("option");
    newRow2.setAttribute("value", 1);
    newRow2.textContent = "Long Nine";
    let newRow3 = document.createElement("option");
    newRow3.setAttribute("value", 2);
    newRow3.textContent = "Carronade";
    let newRow4 = document.createElement("option");
    newRow4.setAttribute("value", 3);
    newRow4.textContent = "Paixhan";

    if (weaponsRemainingP >= 8) {
        weaponTypeP.appendChild(newRow1);
        weaponTypeP.appendChild(newRow2);
        weaponTypeP.appendChild(newRow3);
        weaponTypeP.appendChild(newRow4);
    } else if (weaponsRemainingP >= 4) {
        weaponTypeP.appendChild(newRow1);
        weaponTypeP.appendChild(newRow2);
        weaponTypeP.appendChild(newRow3);
    } else if (weaponsRemainingP > 0) {
        weaponTypeP.appendChild(newRow1);
        weaponTypeP.appendChild(newRow2);
    }

    
}

function getWeaponOptionsP2 () {
    weaponLbP.replaceChildren('');
    weaponAmmoP.replaceChildren('');

    let newPound1 = document.createElement("option");
    newPound1.setAttribute("value", 0);
    newPound1.textContent = "6lb";
    let newPound2 = document.createElement("option");
    newPound2.setAttribute("value", 1);
    newPound2.textContent = "8lb";
    let newPound3 = document.createElement("option");
    newPound3.setAttribute("value", 2);
    newPound3.textContent = "9lb";
    let newPound4 = document.createElement("option");
    newPound4.setAttribute("value", 3);
    newPound4.textContent = "12lb";
    let newPound5 = document.createElement("option");
    newPound5.setAttribute("value", 4);
    newPound5.textContent = "18lb";
    let newPound6 = document.createElement("option");
    newPound6.setAttribute("value", 5);
    newPound6.textContent = "24lb";
    let newPound7 = document.createElement("option");
    newPound7.setAttribute("value", 6);
    newPound7.textContent = "32lb";
    let newPound8 = document.createElement("option");
    newPound8.setAttribute("value", 7);
    newPound8.textContent = "36lb";
    let newPound9 = document.createElement("option");
    newPound9.setAttribute("value", 8);
    newPound9.textContent = "42lb";

    if (parseInt(weaponTypeP.value) == 0) {
        if (weaponsRemainingP >= 8) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
            weaponLbP.appendChild(newPound6);
            weaponLbP.appendChild(newPound7);
            weaponLbP.appendChild(newPound8);
            weaponLbP.appendChild(newPound9);
        } else if (weaponsRemainingP >= 7) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
            weaponLbP.appendChild(newPound6);
            weaponLbP.appendChild(newPound7);
            weaponLbP.appendChild(newPound8);
        } else if (weaponsRemainingP >= 6) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
            weaponLbP.appendChild(newPound6);
            weaponLbP.appendChild(newPound7);
        } else if (weaponsRemainingP >= 5) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
            weaponLbP.appendChild(newPound6);
        } else if (weaponsRemainingP >= 4) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
        } else if (weaponsRemainingP >= 3) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
            weaponLbP.appendChild(newPound4);
        } else if (weaponsRemainingP >= 2) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
        } else if (weaponsRemainingP >= 1) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
        }
    } else if (parseInt(weaponTypeP.value) == 1) {
        if (weaponsRemainingP >= 3) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
            weaponLbP.appendChild(newPound3);
        } else if (weaponsRemainingP >= 2) {
            weaponLbP.appendChild(newPound1);
            weaponLbP.appendChild(newPound2);
        } else if (weaponsRemainingP >= 1) {
            weaponLbP.appendChild(newPound1);
        }
    } else if (parseInt(weaponTypeP.value) == 2) {
        if (weaponsRemainingP >= 6) {
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
            weaponLbP.appendChild(newPound6);
        } else if (weaponsRemainingP >= 5) {
            weaponLbP.appendChild(newPound4);
            weaponLbP.appendChild(newPound5);
        } else if (weaponsRemainingP >= 4) {
            weaponLbP.appendChild(newPound4);
        }
    } else if (parseInt(weaponTypeP.value) == 3) {
        if (weaponsRemainingP >= 10) {
            weaponLbP.appendChild(newPound7);
            weaponLbP.appendChild(newPound8);
            weaponLbP.appendChild(newPound9);
        } else if (weaponsRemainingP >= 9) {
            weaponLbP.appendChild(newPound7);
            weaponLbP.appendChild(newPound8);
        } else if (weaponsRemainingP >= 8) {
            weaponLbP.appendChild(newPound7);
        }
    }

    let newAmmo1 = document.createElement("option");
    newAmmo1.setAttribute("value", 0);
    newAmmo1.textContent = "Round Shot";
    let newAmmo2 = document.createElement("option");
    newAmmo2.setAttribute("value", 1);
    newAmmo2.textContent = "Grapeshot";
    let newAmmo3 = document.createElement("option");
    newAmmo3.setAttribute("value", 2);
    newAmmo3.textContent = "Chain Shot";

    if (parseInt(weaponTypeP.value) == 0) {
        weaponAmmoP.appendChild(newAmmo1);
        weaponAmmoP.appendChild(newAmmo2);
        weaponAmmoP.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeP.value) == 1) {
        weaponAmmoP.appendChild(newAmmo1);
        weaponAmmoP.appendChild(newAmmo2);
    } else if (parseInt(weaponTypeP.value) == 2) {
        weaponAmmoP.appendChild(newAmmo1);
        weaponAmmoP.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeP.value) == 3) {
        weaponAmmoP.appendChild(newAmmo1);
    }
}

weaponTypeP.addEventListener("change", getWeaponOptionsP2);

function getWeaponOptionsS1 () {
    weaponTypeS.replaceChildren('');

    let newRow1 = document.createElement("option");
    newRow1.setAttribute("value", 0);
    newRow1.textContent = "Cannon";
    let newRow2 = document.createElement("option");
    newRow2.setAttribute("value", 1);
    newRow2.textContent = "Long Nine";
    let newRow3 = document.createElement("option");
    newRow3.setAttribute("value", 2);
    newRow3.textContent = "Carronade";
    let newRow4 = document.createElement("option");
    newRow4.setAttribute("value", 3);
    newRow4.textContent = "Paixhan";

    if (weaponsRemainingS >= 8) {
        weaponTypeS.appendChild(newRow1);
        weaponTypeS.appendChild(newRow2);
        weaponTypeS.appendChild(newRow3);
        weaponTypeS.appendChild(newRow4);
    } else if (weaponsRemainingS >= 4) {
        weaponTypeS.appendChild(newRow1);
        weaponTypeS.appendChild(newRow2);
        weaponTypeS.appendChild(newRow3);
    } else if (weaponsRemainingS > 0) {
        weaponTypeS.appendChild(newRow1);
        weaponTypeS.appendChild(newRow2);
    }

    
}

function getWeaponOptionsS2 () {
    weaponLbS.replaceChildren('');
    weaponAmmoS.replaceChildren('');

    let newPound1 = document.createElement("option");
    newPound1.setAttribute("value", 0);
    newPound1.textContent = "6lb";
    let newPound2 = document.createElement("option");
    newPound2.setAttribute("value", 1);
    newPound2.textContent = "8lb";
    let newPound3 = document.createElement("option");
    newPound3.setAttribute("value", 2);
    newPound3.textContent = "9lb";
    let newPound4 = document.createElement("option");
    newPound4.setAttribute("value", 3);
    newPound4.textContent = "12lb";
    let newPound5 = document.createElement("option");
    newPound5.setAttribute("value", 4);
    newPound5.textContent = "18lb";
    let newPound6 = document.createElement("option");
    newPound6.setAttribute("value", 5);
    newPound6.textContent = "24lb";
    let newPound7 = document.createElement("option");
    newPound7.setAttribute("value", 6);
    newPound7.textContent = "32lb";
    let newPound8 = document.createElement("option");
    newPound8.setAttribute("value", 7);
    newPound8.textContent = "36lb";
    let newPound9 = document.createElement("option");
    newPound9.setAttribute("value", 8);
    newPound9.textContent = "42lb";

    if (parseInt(weaponTypeS.value) == 0) {
        if (weaponsRemainingS >= 8) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
            weaponLbS.appendChild(newPound6);
            weaponLbS.appendChild(newPound7);
            weaponLbS.appendChild(newPound8);
            weaponLbS.appendChild(newPound9);
        } else if (weaponsRemainingS >= 7) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
            weaponLbS.appendChild(newPound6);
            weaponLbS.appendChild(newPound7);
            weaponLbS.appendChild(newPound8);
        } else if (weaponsRemainingS >= 6) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
            weaponLbS.appendChild(newPound6);
            weaponLbS.appendChild(newPound7);
        } else if (weaponsRemainingS >= 5) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
            weaponLbS.appendChild(newPound6);
        } else if (weaponsRemainingS >= 4) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
        } else if (weaponsRemainingS >= 3) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
            weaponLbS.appendChild(newPound4);
        } else if (weaponsRemainingS >= 2) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
        } else if (weaponsRemainingS >= 1) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
        }
    } else if (parseInt(weaponTypeS.value) == 1) {
        if (weaponsRemainingS >= 3) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
            weaponLbS.appendChild(newPound3);
        } else if (weaponsRemainingS >= 2) {
            weaponLbS.appendChild(newPound1);
            weaponLbS.appendChild(newPound2);
        } else if (weaponsRemainingS >= 1) {
            weaponLbS.appendChild(newPound1);
        }
    } else if (parseInt(weaponTypeS.value) == 2) {
        if (weaponsRemainingS >= 6) {
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
            weaponLbS.appendChild(newPound6);
        } else if (weaponsRemainingS >= 5) {
            weaponLbS.appendChild(newPound4);
            weaponLbS.appendChild(newPound5);
        } else if (weaponsRemainingS >= 4) {
            weaponLbS.appendChild(newPound4);
        }
    } else if (parseInt(weaponTypeS.value) == 3) {
        if (weaponsRemainingS >= 10) {
            weaponLbS.appendChild(newPound7);
            weaponLbS.appendChild(newPound8);
            weaponLbS.appendChild(newPound9);
        } else if (weaponsRemainingS >= 9) {
            weaponLbS.appendChild(newPound7);
            weaponLbS.appendChild(newPound8);
        } else if (weaponsRemainingS >= 8) {
            weaponLbS.appendChild(newPound7);
        }
    }

    let newAmmo1 = document.createElement("option");
    newAmmo1.setAttribute("value", 0);
    newAmmo1.textContent = "Round Shot";
    let newAmmo2 = document.createElement("option");
    newAmmo2.setAttribute("value", 1);
    newAmmo2.textContent = "Grapeshot";
    let newAmmo3 = document.createElement("option");
    newAmmo3.setAttribute("value", 2);
    newAmmo3.textContent = "Chain Shot";

    if (parseInt(weaponTypeS.value) == 0) {
        weaponAmmoS.appendChild(newAmmo1);
        weaponAmmoS.appendChild(newAmmo2);
        weaponAmmoS.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeS.value) == 1) {
        weaponAmmoS.appendChild(newAmmo1);
        weaponAmmoS.appendChild(newAmmo2);
    } else if (parseInt(weaponTypeS.value) == 2) {
        weaponAmmoS.appendChild(newAmmo1);
        weaponAmmoS.appendChild(newAmmo3);
    } else if (parseInt(weaponTypeS.value) == 3) {
        weaponAmmoS.appendChild(newAmmo1);
    }
}

weaponTypeS.addEventListener("change", getWeaponOptionsS2);

let ammo = [0, 0, 0]

let addWeaponButtonB = document.getElementById("addWeaponButtonB");
let addWeaponButtonP = document.getElementById("addWeaponButtonP");
let addWeaponButtonS = document.getElementById("addWeaponButtonS");
let bowWeaponTable = document.getElementById("bowWeaponTable");
let portWeaponTable = document.getElementById("portWeaponTable");
let starboardWeaponTable = document.getElementById("starboardWeaponTable");

let ammoTable = document.getElementById("ammoTable");
let roundDisplay = document.getElementById("roundDisplay");
let grapeDisplay = document.getElementById("grapeDisplay");
let chainDisplay = document.getElementById("chainDisplay");

function addWeaponB () {
    console.log("works");
    let newLine1 = document.createElement("p");
    switch (weaponTypeB.value + "-" + weaponLbB.value) {
        case "0-0":
            newLine1.textContent = "6lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 1;
            break;
        case "0-1":
            newLine1.textContent = "8lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 1;
            break;
        case "0-2":
            newLine1.textContent = "9lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 2;
            break;
        case "0-3":
            newLine1.textContent = "12lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 3;
            break;
        case "0-4":
            newLine1.textContent = "18lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 4;
            break;
        case "0-5":
            newLine1.textContent = "24lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 5;
            break;
        case "0-6":
            newLine1.textContent = "32lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 6;
            break;
        case "0-7":
            newLine1.textContent = "36lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 7;
            break;
        case "0-8":
            newLine1.textContent = "42lb Cannon";
            weaponsRemainingB = weaponsRemainingB - 8;
            break;

        case "1-0":
            newLine1.textContent = "6lb Long Nine";
            weaponsRemainingB = weaponsRemainingB - 1;
            break;
        case "1-1":
            newLine1.textContent = "8lb Long Nine";
            weaponsRemainingB = weaponsRemainingB - 2;
            break;
        case "1-2":
            newLine1.textContent = "9lb Long Nine";
            weaponsRemainingB = weaponsRemainingB - 3;
            break;

        case "2-3":
            newLine1.textContent = "12lb Carronade";
            weaponsRemainingB = weaponsRemainingB - 4;
            break;
        case "2-4":
            newLine1.textContent = "18lb Carronade";
            weaponsRemainingB = weaponsRemainingB - 5;
            break;
        case "2-5":
            newLine1.textContent = "24lb Carronade";
            weaponsRemainingB = weaponsRemainingB - 6;
            break;
        
        case "3-6":
            newLine1.textContent = "32lb Paixhan";
            weaponsRemainingB = weaponsRemainingB - 8;
            break;
        case "3-7":
            newLine1.textContent = "36lb Paixhan";
            weaponsRemainingB = weaponsRemainingB - 9;
            break;
        case "3-8":
            newLine1.textContent = "42lb Paixhan";
            weaponsRemainingB = weaponsRemainingB - 10;
            break;
    }
    bowWeaponTable.appendChild(newLine1);
    wlDisplayB.textContent = weaponsRemainingB;
}

function getAmmoB () {
    console.log("works");
    switch (weaponAmmoB.value) {
        case "0":
            ammo[0] = ammo[0] + 5;
            break;
        case "1":
            ammo[1] = ammo[1] + 5;
            break;
        case "2":
            ammo[2] = ammo[2] + 5;
            break;
    }
    roundDisplay.textContent = ammo[0];
    grapeDisplay.textContent = ammo[1];
    chainDisplay.textContent = ammo[2];
}

addWeaponButtonB.addEventListener("click", addWeaponB);
addWeaponButtonB.addEventListener("click", getAmmoB);

function addWeaponP () {
    console.log("works");
    let newLine1 = document.createElement("p");
    switch (weaponTypeP.value + "-" + weaponLbP.value) {
        case "0-0":
            newLine1.textContent = "6lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 1;
            break;
        case "0-1":
            newLine1.textContent = "8lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 1;
            break;
        case "0-2":
            newLine1.textContent = "9lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 2;
            break;
        case "0-3":
            newLine1.textContent = "12lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 3;
            break;
        case "0-4":
            newLine1.textContent = "18lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 4;
            break;
        case "0-5":
            newLine1.textContent = "24lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 5;
            break;
        case "0-6":
            newLine1.textContent = "32lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 6;
            break;
        case "0-7":
            newLine1.textContent = "36lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 7;
            break;
        case "0-8":
            newLine1.textContent = "42lb Cannon";
            weaponsRemainingP = weaponsRemainingP - 8;
            break;

        case "1-0":
            newLine1.textContent = "6lb Long Nine";
            weaponsRemainingP = weaponsRemainingP - 1;
            break;
        case "1-1":
            newLine1.textContent = "8lb Long Nine";
            weaponsRemainingP = weaponsRemainingP - 2;
            break;
        case "1-2":
            newLine1.textContent = "9lb Long Nine";
            weaponsRemainingP = weaponsRemainingP - 3;
            break;

        case "2-3":
            newLine1.textContent = "12lb Carronade";
            weaponsRemainingP = weaponsRemainingP - 4;
            break;
        case "2-4":
            newLine1.textContent = "18lb Carronade";
            weaponsRemainingP = weaponsRemainingP - 5;
            break;
        case "2-5":
            newLine1.textContent = "24lb Carronade";
            weaponsRemainingP = weaponsRemainingP - 6;
            break;
        
        case "3-6":
            newLine1.textContent = "32lb Paixhan";
            weaponsRemainingP = weaponsRemainingP - 8;
            break;
        case "3-7":
            newLine1.textContent = "36lb Paixhan";
            weaponsRemainingP = weaponsRemainingP - 9;
            break;
        case "3-8":
            newLine1.textContent = "42lb Paixhan";
            weaponsRemainingP = weaponsRemainingP - 10;
            break;
    }
    portWeaponTable.appendChild(newLine1);
    wlDisplayP.textContent = weaponsRemainingP;
}

function getAmmoP () {
    console.log("works");
    switch (weaponAmmoP.value) {
        case "0":
            ammo[0] = ammo[0] + 5;
            break;
        case "1":
            ammo[1] = ammo[1] + 5;
            break;
        case "2":
            ammo[2] = ammo[2] + 5;
            break;
    }
    roundDisplay.textContent = ammo[0];
    grapeDisplay.textContent = ammo[1];
    chainDisplay.textContent = ammo[2];
}

addWeaponButtonP.addEventListener("click", addWeaponP);
addWeaponButtonP.addEventListener("click", getAmmoP);

function addWeaponS () {
    console.log("works");
    let newLine1 = document.createElement("p");
    switch (weaponTypeS.value + "-" + weaponLbS.value) {
        case "0-0":
            newLine1.textContent = "6lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 1;
            break;
        case "0-1":
            newLine1.textContent = "8lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 1;
            break;
        case "0-2":
            newLine1.textContent = "9lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 2;
            break;
        case "0-3":
            newLine1.textContent = "12lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 3;
            break;
        case "0-4":
            newLine1.textContent = "18lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 4;
            break;
        case "0-5":
            newLine1.textContent = "24lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 5;
            break;
        case "0-6":
            newLine1.textContent = "32lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 6;
            break;
        case "0-7":
            newLine1.textContent = "36lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 7;
            break;
        case "0-8":
            newLine1.textContent = "42lb Cannon";
            weaponsRemainingS = weaponsRemainingS - 8;
            break;

        case "1-0":
            newLine1.textContent = "6lb Long Nine";
            weaponsRemainingS = weaponsRemainingS - 1;
            break;
        case "1-1":
            newLine1.textContent = "8lb Long Nine";
            weaponsRemainingS = weaponsRemainingS - 2;
            break;
        case "1-2":
            newLine1.textContent = "9lb Long Nine";
            weaponsRemainingS = weaponsRemainingS - 3;
            break;

        case "2-3":
            newLine1.textContent = "12lb Carronade";
            weaponsRemainingS = weaponsRemainingS - 4;
            break;
        case "2-4":
            newLine1.textContent = "18lb Carronade";
            weaponsRemainingS = weaponsRemainingS - 5;
            break;
        case "2-5":
            newLine1.textContent = "24lb Carronade";
            weaponsRemainingS = weaponsRemainingS - 6;
            break;
        
        case "3-6":
            newLine1.textContent = "32lb Paixhan";
            weaponsRemainingS = weaponsRemainingS - 8;
            break;
        case "3-7":
            newLine1.textContent = "36lb Paixhan";
            weaponsRemainingS = weaponsRemainingS - 9;
            break;
        case "3-8":
            newLine1.textContent = "42lb Paixhan";
            weaponsRemainingS = weaponsRemainingS - 10;
            break;
    }
    starboardWeaponTable.appendChild(newLine1);
    wlDisplayS.textContent = weaponsRemainingS;
}

function getAmmoP () {
    console.log("works");
    switch (weaponAmmoS.value) {
        case "0":
            ammo[0] = ammo[0] + 5;
            break;
        case "1":
            ammo[1] = ammo[1] + 5;
            break;
        case "2":
            ammo[2] = ammo[2] + 5;
            break;
    }
    roundDisplay.textContent = ammo[0];
    grapeDisplay.textContent = ammo[1];
    chainDisplay.textContent = ammo[2];
}

addWeaponButtonS.addEventListener("click", addWeaponS);
addWeaponButtonS.addEventListener("click", getAmmoS);