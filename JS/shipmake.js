// List of stats for eah ship tonnage (tonnage, class, health values, armor limit, weaponry limits, speeds)
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

    [80,  "Dreadnought",       43, 45, 45, 49, 49, 32, 43, 3, 212, 6, 12, 12, 5,  7,  9],
    [85,  "Dreadnought",       46, 48, 48, 52, 52, 34, 46, 3, 226, 6, 12, 12, 5,  7,  8],
    [90,  "Dreadnought",       49, 51, 51, 55, 55, 36, 49, 3, 240, 6, 13, 13, 5,  6,  9],
    [95,  "Dreadnought",       52, 54, 54, 58, 58, 38, 52, 3, 254, 7, 13, 13, 4,  6,  8],

    [100, "Super-Dreadnought", 55, 57, 57, 61, 61, 40, 55, 3, 268, 7, 13, 13, 4,  5,  7],
    [130, "Super-Dreadnought", 70, 72, 72, 76, 76, 50, 70, 3, 338, 8, 14, 14, 3,  5,  6],
    [155, "Super-Dreadnought", 85, 87, 87, 91, 91, 60, 85, 3, 408, 9, 15, 15, 2,  3,  4]
]

// sets the options of the tonnage dropdown to those in the stat table
let tonnageTable = document.getElementById("tonnageTable");
for (ton in statsByTon) {
    // creates the option
    let newRow = document.createElement("option")
    // sets the text of the option to the corresponding index
    newRow.setAttribute("value", ton);
    newRow.textContent = statsByTon[ton][0];
    // places option in dropdown
    tonnageTable.appendChild(newRow);
}


// get all the elements that will need to be edited
let wcDisplay = document.getElementById("wcDisplay");

let bowHP = document.getElementById("bowHP");
let aftHP = document.getElementById("aftHP");
let portHP = document.getElementById("portHP");
let sbHP = document.getElementById("starboardHP");

let bridgeHP = document.getElementById("bridgeHP");
let bilgeHP = document.getElementById("bilgeHP");
let mastHP = document.getElementById("mastHP");
let rudderHP = document.getElementById("rudderHP");

let alDisplay = document.getElementById("alDisplay");

let cpDisplay = document.getElementById("cpDisplay");
let fspDisplay = document.getElementById("fspDisplay");
let fpDisplay = document.getElementById("fpDisplay");

let wlDisplayB = document.getElementById("wlDisplayB");
let wlDisplayP = document.getElementById("wlDisplayP");
let wlDisplayS = document.getElementById("wlDisplayS");

let BwpnSlt1 = document.getElementById("BwpnSlt1");
let BwpnSlt2 = document.getElementById("BwpnSlt2");
let BwpnSlt3 = document.getElementById("BwpnSlt3");

let PwpnSlt1 = document.getElementById("PwpnSlt1");
let PwpnSlt2 = document.getElementById("PwpnSlt2");
let PwpnSlt3 = document.getElementById("PwpnSlt3");
let PwpnSlt4 = document.getElementById("PwpnSlt4");
let PwpnSlt5 = document.getElementById("PwpnSlt5");
let PwpnSlt6 = document.getElementById("PwpnSlt6");

let SwpnSlt1 = document.getElementById("SwpnSlt1");
let SwpnSlt2 = document.getElementById("SwpnSlt2");
let SwpnSlt3 = document.getElementById("SwpnSlt3");
let SwpnSlt4 = document.getElementById("SwpnSlt4");
let SwpnSlt5 = document.getElementById("SwpnSlt5");
let SwpnSlt6 = document.getElementById("SwpnSlt6");

let roundDisplay = document.getElementById("roundDisplay");
let grapeDisplay = document.getElementById("grapeDisplay");
let chainDisplay = document.getElementById("chainDisplay");


// get all elements that are to be changed by the user
let shipName = document.getElementById("shipName");

let arType = document.getElementById("armorType");
let arArea = document.getElementById("armorArea");
let addArBut = document.getElementById("addArmorButton");
let rsArBut = document.getElementById("rsArmorButton");

let iconSel = document.getElementById("iconSelect");

let wpnDisB = document.getElementById("wpnDisB");
let wpnDisP = document.getElementById("wpnDisP");
let wpnDisS = document.getElementById("wpnDisS");

let wpnLbB = document.getElementById("weaponLbB");
let wpnTypeB = document.getElementById("weaponTypeB");
let wpnAddB = document.getElementById("addWeaponButtonB");

let wpnLbP = document.getElementById("weaponLbP");
let wpnTypeP = document.getElementById("weaponTypeP");
let wpnAddP = document.getElementById("addWeaponButtonP");

let wpnLbS = document.getElementById("weaponLbS");
let wpnTypeS = document.getElementById("weaponTypeS");
let wpnAddS = document.getElementById("addWeaponButtonS");

let roundAdd = document.getElementById("roundAdd");
let grapeAdd = document.getElementById("grapeAdd");
let chainAdd = document.getElementById("chainAdd");

// declare base stat vars
let wcBase;
let cpBase;
let fspBase;
let fpBase;
let brHPBase;
let boHPBase;
let aHPBase;
let pHPBase;
let sHPBase;
let biHPBase;
let mHPBase;
let rHPBase;
let armorRemainingBase;
let weaponsRemainingBBase;
let weaponsRemainingPBase;
let weaponsRemainingSBase;

// set base values when tonnage changes
function setBaseVals () {
    // set base vars
    wcBase = statsByTon[parseInt(tonnageTable.value)][1];

    cpBase = statsByTon[parseInt(tonnageTable.value)][14];
    fspBase = statsByTon[parseInt(tonnageTable.value)][15];
    fpBase = statsByTon[parseInt(tonnageTable.value)][16];

    brHPBase = statsByTon[parseInt(tonnageTable.value)][2];
    boHPBase = statsByTon[parseInt(tonnageTable.value)][3];
    aHPBase = statsByTon[parseInt(tonnageTable.value)][4];
    pHPBase = statsByTon[parseInt(tonnageTable.value)][5];
    sHPBase = statsByTon[parseInt(tonnageTable.value)][6];
    biHPBase = statsByTon[parseInt(tonnageTable.value)][7];
    mHPBase = statsByTon[parseInt(tonnageTable.value)][8];
    rHPBase = statsByTon[parseInt(tonnageTable.value)][9];

    armorRemainingBase = statsByTon[parseInt(tonnageTable.value)][10];
    weaponsRemainingBBase = statsByTon[parseInt(tonnageTable.value)][11];
    weaponsRemainingPBase = statsByTon[parseInt(tonnageTable.value)][12];
    weaponsRemainingSBase = statsByTon[parseInt(tonnageTable.value)][13];

    // update displays
    update();
}

function update () {
    wcDisplay.textContent = wcBase;

    bowHP.textContent = boHPBase;
    aftHP.textContent = aHPBase;
    portHP.textContent = pHPBase;
    sbHP.textContent = sHPBase;

    bridgeHP.textContent = brHPBase;
    bilgeHP.textContent = biHPBase;
    mastHP.textContent = mHPBase;
    rudderHP.textContent = rHPBase;

    alDisplay.textContent = armorRemainingBase;

    cpDisplay.textContent = cpBase;
    fspDisplay.textContent = fspBase;
    fpDisplay.textContent = fpBase;

    wlDisplayB.textContent = weaponsRemainingBBase;
    wlDisplayP.textContent = weaponsRemainingPBase;
    wlDisplayS.textContent = weaponsRemainingSBase;
}

// set base values of default tonnage
setBaseVals();
// changes base values whenever the tonnage is changed
tonnageTable.addEventListener("change", setBaseVals);

let iconPreview = document.getElementById("iconPreview");
let iconSelect = document.getElementById("iconSelect");
console.log(iconSelect);
let icon;

// Ship sprites
function getIcon () {
    console.log(parseInt(iconSelect.value))
    switch (parseInt(iconSelect.value)) {
        case 0:
            iconPreview.setAttribute("src", "../IMG/Sampan.png");
            icon = 1;
            break;
        case 1:
            iconPreview.setAttribute("src", "../IMG/catboat.png");
            icon = 2;
            break;
        case 2:
            iconPreview.setAttribute("src", "../IMG/Lugger.png");
            icon = 3;
            break;
        case 3:
            iconPreview.setAttribute("src", "../IMG/cutter.png");
            icon = 4;
            break;
        case 4:
            iconPreview.setAttribute("src", "../IMG/galleon.png");
            icon = 5;
            break;
        case 5:
            iconPreview.setAttribute("src", "../IMG/schooner.png");
            icon = 6;
            break;
        case 6:
            iconPreview.setAttribute("src", "../IMG/brig.png");
            icon = 7;
            break;
        case 7:
            iconPreview.setAttribute("src", "../IMG/barque.png");
            icon = 8;
            break;
        case 8:
            iconPreview.setAttribute("src", "../IMG/frigate.png");
            icon = 9;
            break;
    }
}

iconSelect.addEventListener("change", getIcon);

function showArea (input) {
    console.log(input);
    switch (input) {
        case 0:
            console.log(input);
            wpnDisB.style.visibility = "visible";
            wpnDisP.style.visibility = "hidden";
            wpnDisS.style.visibility = "hidden";
            break;
        case 1:
            console.log(input);
            wpnDisB.style.visibility = "hidden";
            wpnDisP.style.visibility = "visible";
            wpnDisS.style.visibility = "hidden";
            break;
        case 2:
            console.log(input);
            wpnDisB.style.visibility = "hidden";
            wpnDisP.style.visibility = "hidden";
            wpnDisS.style.visibility = "visible";
            break;
    }
}

selectToBow.addEventListener("click", (e)=>{
    showArea(0);
});

selectToPort.addEventListener("click", (e)=>{
    showArea(1);
});

selectToSB.addEventListener("click", (e)=>{
    showArea(2);
});

function addArmor () {
    console.log(armorRemainingBase);
    switch (arType.value + "-" + arArea.value) {
        case "1-0":
            if (armorRemainingBase >= 1) {
                brHPBase += 1;
                armorRemainingBase -= 1;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-1":
            if (armorRemainingBase >= 1) {
                boHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-2":
            if (armorRemainingBase >= 1) {
                aHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-3":
            if (armorRemainingBase >= 1) {
                pHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-4":
            if (armorRemainingBase >= 1) {
                sHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-5":
            if (armorRemainingBase >= 1) {
                biHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-6":
            if (armorRemainingBase >= 1) {
               mHPBase += 1;
                armorRemainingBase -= 1;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "1-7":
            if (armorRemainingBase >= 1) {
                rHPBase += 1;
                armorRemainingBase -= 1;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;

        case "5-0":
            if (armorRemainingBase >= 5) {
                brHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-1":
            if (armorRemainingBase >= 5) {
                boHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-2":
            if (armorRemainingBase >= 5) {
                aHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-3":
            if (armorRemainingBase >= 5) {
               pHPBase += 6;
                armorRemainingBase -= 5;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-4":
            if (armorRemainingBase >= 5) {
                sHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-5":
            if (armorRemainingBase >= 5) {
                biHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-6":
            if (armorRemainingBase >= 5) {
                mHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "5-7":
            if (armorRemainingBase >= 5) {
                rHPBase += 6;
                armorRemainingBase -= 5;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;

        case "10-0":
            if (armorRemainingBase >= 10) {
                brHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-1":
            if (armorRemainingBase >= 10) {
                boHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-2":
            if (armorRemainingBase >= 10) {
                aHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-3":
            if (armorRemainingBase >= 10) {
                pHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-4":
            if (armorRemainingBase >= 10) {
               sHPBase += 15;
                armorRemainingBase -= 10;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-5":
            if (armorRemainingBase >= 10) {
                biHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-6":
            if (armorRemainingBase >= 10) {
                mHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "10-7":
            if (armorRemainingBase >= 10) {
                rHPBase += 15;
                armorRemainingBase -= 10;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;

        case "25-0":
            if (armorRemainingBase >= 25) {
                brHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-1":
            if (armorRemainingBase >= 25) {
                boHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-2":
            if (armorRemainingBase >= 25) {
                aHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-3":
            if (armorRemainingBase >= 25) {
                pHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-4":
            if (armorRemainingBase >= 25) {
                sHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-5":
            if (armorRemainingBase >= 25) {
                biHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-6":
            if (armorRemainingBase >= 25) {
                mHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "25-7":
            if (armorRemainingBase >= 25) {
                rHPBase += 44;
                armorRemainingBase -= 25;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;

        case "50-0":
            if (armorRemainingBase >= 50) {
                brHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-1":
            if (armorRemainingBase >= 50) {
                boHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-2":
            if (armorRemainingBase >= 50) {
               aHPBase += 100;
                armorRemainingBase -= 50;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-3":
            if (armorRemainingBase >= 50) {
                pHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-4":
            if (armorRemainingBase >= 50) {
                sHPBase += 100;
                armorRemainingBase -= 50;
                update(); 
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-5":
            if (armorRemainingBase >= 50) {
                biHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-6":
            if (armorRemainingBase >= 50) {
                mHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
        case "50-7":
            if (armorRemainingBase >= 50) {
                rHPBase += 100;
                armorRemainingBase -= 50;
                update();
            } else {
                alert("You cannot add this much armor");
            }
            break;
    }
}

addArBut.addEventListener("click", addArmor);

function rsArmor () {
    brHPBase = statsByTon[parseInt(tonnageTable.value)][2];
    boHPBase = statsByTon[parseInt(tonnageTable.value)][3];
    aHPBase = statsByTon[parseInt(tonnageTable.value)][4];
    pHPBase = statsByTon[parseInt(tonnageTable.value)][5];
    sHPBase = statsByTon[parseInt(tonnageTable.value)][6];
    biHPBase = statsByTon[parseInt(tonnageTable.value)][7];
    mHPBase = statsByTon[parseInt(tonnageTable.value)][8];
    rHPBase = statsByTon[parseInt(tonnageTable.value)][9];

    armorRemainingBase = statsByTon[parseInt(tonnageTable.value)][10];

    update();
}

rsArBut.addEventListener("click", rsArmor);

let slotsB = [BwpnSlt1, BwpnSlt2, BwpnSlt3];
let slotsP = [PwpnSlt1, PwpnSlt2, PwpnSlt3, PwpnSlt4, PwpnSlt5, PwpnSlt6];
let slotsS = [SwpnSlt1, SwpnSlt2, SwpnSlt3, SwpnSlt4, SwpnSlt5, SwpnSlt6];

function addWeapon (ind) {
    switch (ind) {
        case 0:
            // bow
            let x = 0;
            for (let i; i < slotsB.length; i++) {
                if (slotsB[i] == null) {
                    switch (wpnLbB.value + "-" + wpnTypeB.value) {
                        
                    }
                    break;
                } else {
                    x += 1;
                }
            }
            if (x = 3) {
                alert("You may not add any more weapons");
            }
            break;
        case 1:
            // port

            break;
        case 2:
            // starboard

            break;
    }
}