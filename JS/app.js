
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

    [80,  "Dreadnought",       43, 45, 45, 49, 49, 32, 43, 3, 212, 6, 12, 12, 5,  6,  8],
    [85,  "Dreadnought",       46, 48, 48, 52, 52, 34, 46, 3, 226, 6, 12, 12, 5,  7,  9],
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

// daniel says hi :>


// updates base healths, armor limit, weapon limits, and resets armor and weapons when tonnage is changed
tonnageTable.addEventListener("change", setValues);
tonnageTable.addEventListener("change", getArmorOptions);
tonnageTable.addEventListener("change", getWeaponOptions);
tonnageTable.addEventListener("change", getWeaponSpecs);
// tonnageTable.addEventListener("change", getWeaponOptionsP1);
// tonnageTable.addEventListener("change", getWeaponOptionsP2);
// tonnageTable.addEventListener("change", getWeaponOptionsS1);
// tonnageTable.addEventListener("change", getWeaponOptionsS2);

// gets the html elements for each stat display
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

// declares variables used to update stats
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

// waits for rest of values to load before attempting to call them
setTimeout(setValues,1)
setTimeout(getArmorOptions,1)
setTimeout(getWeaponOptions,1)
setTimeout(getWeaponSpecs,1)

// sets the base health values based on the selected tonnage
function setValues () {
    // declares variables that hold stats
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
    weaponsRemaining = [weaponsRemainingB,weaponsRemainingP,weaponsRemainingS]

    // sets display areas to base values
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

    alDisplay.textContent = armorRemaining + " points remaining";
    wlDisplayB.textContent = weaponsRemainingB + " points remaining";
    wlDisplayP.textContent = weaponsRemainingP + " points remaining";
    wlDisplayS.textContent = weaponsRemainingS + " points remaining";
}

// gets html elements for armor placement and type respectively
let armorArea = document.getElementById("armorArea");
let armorType = document.getElementById("armorType");

// decides which armor types can be added to a ship, then updates the type dropdown to only disply armor types that can be afforded
function getArmorOptions () {
    // clears dropdown to avoid doubling up on values
    armorType.replaceChildren('');

    // creates each potential option with each value
    let newRow1 = document.createElement("option");
    newRow1.setAttribute("value", 0);
    newRow1.textContent = "Wood - 1pt, 1x value";
    let newRow2 = document.createElement("option");
    newRow2.setAttribute("value", 1);
    newRow2.textContent = "Ceramic - 5pt, 1.25x value";
    let newRow3 = document.createElement("option");
    newRow3.setAttribute("value", 2);
    newRow3.textContent = "Iron - 10pt, 1.5x value";
    let newRow4 = document.createElement("option");
    newRow4.setAttribute("value", 3);
    newRow4.textContent = "Compound - 25pt, 1.75x value";
    let newRow5 = document.createElement("option");
    newRow5.setAttribute("value", 4);
    newRow5.textContent = "Synthetic - 50pt, 2x value";

    // determines whether each armor type can be added
    if (armorRemaining >= 50) {
        // adds all types of armor if >=50 armor points
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
        armorType.appendChild(newRow4);
        armorType.appendChild(newRow5);
    } else if (armorRemaining >= 25) {
        // adds only wood, ceramic, iron, compound if >=25 armor points
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
        armorType.appendChild(newRow4);
    } else if (armorRemaining >= 10) {
        // adds only wood, ceramic, iron if >=10 armor points
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
        armorType.appendChild(newRow3);
    } else if (armorRemaining >= 5) {
        // adds only wood, ceramic if >=5 armor points
        armorType.appendChild(newRow1);
        armorType.appendChild(newRow2);
    } else if (armorRemaining >= 1) {
        // adds only wood if >=1 armor points
        armorType.appendChild(newRow1);
    }
    // dropdown is blank when no armor points
}

// gets html element for button to add armor
let addArmorButton = document.getElementById("addArmorButton");

// adds points to healt hbased on armor and area value chosen
function addArmor () {
    // combines armor type and area choice to make comparison simpler
    switch (armorType.value + "-" + armorArea.value) {
        // adds wood to bridge
        case "0-0":
            armorRemaining = armorRemaining - 1;
            brHP = brHP + 1;
            break;
        // adds wood to bow
        case "0-1":
            armorRemaining = armorRemaining - 1;
            boHP = boHP + 1;
            break;
        // adds wood to aft
        case "0-2":
            armorRemaining = armorRemaining - 1;
            aHP = aHP + 1;
            break;
        // adds wood to port
        case "0-3":
            armorRemaining = armorRemaining - 1;
            pHP = pHP + 1;
            break;
        // adds wood to starboard
        case "0-4":
            armorRemaining = armorRemaining - 1;
            sHP = sHP + 1;
            break;
        // adds wood to bilge
        case "0-5":
            armorRemaining = armorRemaining - 1;
            biHP = biHP + 1;
            break;
        // adds wood to mast
        case "0-6":
            armorRemaining = armorRemaining - 1;
            mHP = mHP + 1;
            break;
        // adds wood to rudder
        case "0-7":
            armorRemaining = armorRemaining - 1;
            rHP = rHP + 1;
            break;
        
        // adds ceramic to bridge
        case "1-0":
            armorRemaining = armorRemaining - 5;
            brHP = brHP + 6;
            break;
        // adds ceramic to bow
        case "1-1":
            armorRemaining = armorRemaining - 5;
            boHP = boHP + 6;
            break;
        // adds ceramic to aft
        case "1-2":
            armorRemaining = armorRemaining - 5;
            aHP = aHP + 6;
            break;
        // adds ceramic to port
        case "1-3":
            armorRemaining = armorRemaining - 5;
            pHP = pHP + 6;
            break;
        // adds ceramic to startboard
        case "1-4":
            armorRemaining = armorRemaining - 5;
            sHP = sHP + 6;
            break;
        // adds ceramic to bilge
        case "1-5":
            armorRemaining = armorRemaining - 5;
            biHP = biHP + 6;
            break;
        // adds ceramic to mast
        case "1-6":
            armorRemaining = armorRemaining - 5;
            mHP = mHP + 6;
            break;
        // adds ceramic to rudder
        case "1-7":
            armorRemaining = armorRemaining - 5;
            rHP = rHP + 6;
            break;
        
        // IRON
        case "2-0":
            // bridge
            armorRemaining = armorRemaining - 10;
            brHP = brHP + 15;
            break;
        case "2-1":
            // bow
            armorRemaining = armorRemaining - 10;
            boHP = boHP + 15;
            break;
        case "2-2":
            // aft
            armorRemaining = armorRemaining - 10;
            aHP = aHP + 15;
            break;
        case "2-3":
            // port
            armorRemaining = armorRemaining - 10;
            pHP = pHP + 15;
            break;
        case "2-4":
            // starboard
            armorRemaining = armorRemaining - 10;
            sHP = sHP + 15;
            break;
        case "2-5":
            // bilge
            armorRemaining = armorRemaining - 10;
            biHP = biHP + 15;
            break;
        case "2-6":
            // mast
            armorRemaining = armorRemaining - 10;
            mHP = mHP + 15;
            break; 
        case "2-7":
            //rudder
            armorRemaining = armorRemaining - 10;
            rHP = rHP + 15;
            break;
        
        // COMPOUND
        case "3-0":
            // bridge
            armorRemaining = armorRemaining - 25;
            brHP = brHP + 44;
            break;
        case "3-1":
            // bow
            armorRemaining = armorRemaining - 25;
            boHP = boHP + 44;
            break;
        case "3-2":
            // aft
            armorRemaining = armorRemaining - 25;
            aHP = aHP + 44;
            break;
        case "3-3":
            // port
            armorRemaining = armorRemaining - 25;
            pHP = pHP + 44;
            break;
        case "3-4":
            // starboard
            armorRemaining = armorRemaining - 25;
            sHP = sHP + 44;
            break;
        case "3-5":
            // bilge
            armorRemaining = armorRemaining - 25;
            biHP = biHP + 44;
            break;
        case "3-6":
            // mast
            armorRemaining = armorRemaining - 25;
            mHP = mHP + 44;
            break; 
        case "3-7":
            // rudder
            armorRemaining = armorRemaining - 25;
            rHP = rHP + 44;
            break;
        
        // SYNTHETIC
        case "4-0":
            // bridge 
            armorRemaining = armorRemaining - 50;
            brHP = brHP + 100;
            break;
        case "4-1":
            // bow
            armorRemaining = armorRemaining - 50;
            boHP = boHP + 100;
            break;
        case "4-2":
            // aft
            armorRemaining = armorRemaining - 50;
            aHP = aHP + 100;
            break;
        case "4-3":
            // port
            armorRemaining = armorRemaining - 50;
            pHP = pHP + 100;
            break;
        case "4-4":
            // starboard
            armorRemaining = armorRemaining - 50;
            sHP = sHP + 100;
            break;
        case "4-5":
            // bilge
            armorRemaining = armorRemaining - 50;
            biHP = biHP + 100;
            break;
        case "4-6":
            // mast
            armorRemaining = armorRemaining - 50;
            mHP = mHP + 100;
            break; 
        case "4-7":
            // rudder
            armorRemaining = armorRemaining - 50;
            rHP = rHP + 100;
            break;
    }

    // sets updated values of each health display
    bridgeHP.textContent = brHP;
    bowHP.textContent = boHP;
    aftHP.textContent = aHP;
    portHP.textContent = pHP;
    starboardHP.textContent = sHP;
    bilgeHP.textContent = biHP;
    mastHP.textContent = mHP;
    rudderHP.textContent = rHP;
    alDisplay.textContent = armorRemaining + " points remaining";
}

// gives functions to armor add button
addArmorButton.addEventListener("click", addArmor);
addArmorButton.addEventListener("click", getArmorOptions);

// declares variables for adding weapons to areas
let names = ["Bow","Port","Starboard"]
let ids = ["weaponTypeB","weaponTypeP","weaponTypeS"];
let idsLb = ["weaponLbB","weaponLbP","weaponLbS"];
let idsAmmo = ["weaponAmmoB","weaponAmmoP","weaponAmmoS"];
let idsAdd = ["addWeaponButtonB","addWeaponButtonP","addWeaponButtonS"]
let wlDisplays = [wlDisplayB,wlDisplayP,wlDisplayS];
let weaponsRemaining = [weaponsRemainingB,weaponsRemainingP,weaponsRemainingS]

// sets each button to add weapons to the correct side
function setupAddWeaponButtons(){
    for(let i = 0;i<ids.length;i++){
        let addWeaponButton = document.getElementById(idsAdd[i]);
        addWeaponButton.addEventListener("click", (e) => addWeapon(i));
    }
}
// runs button setup beforehand to make sure weapons add buttons work
setupAddWeaponButtons();

// 
function getWeaponOptions() {
    for(let i = 0;i<ids.length;i++){
        let weaponType = document.getElementById(ids[i]);
        weaponType.addEventListener("change", getWeaponSpecs);
        weaponType.replaceChildren('');

        let newRow1 = document.createElement("option");
        newRow1.setAttribute("value", "Cannon");
        newRow1.textContent = "Cannon - -1pt";
        let newRow2 = document.createElement("option");
        newRow2.setAttribute("value", "Long Nine");
        newRow2.textContent = "Long Nine - +0pt";
        let newRow3 = document.createElement("option");
        newRow3.setAttribute("value", "Carronade");
        newRow3.textContent = "Carronade - +0pt";
        let newRow4 = document.createElement("option");
        newRow4.setAttribute("value", "Paixhan");
        newRow4.textContent = "Paixhan - +1pt";

        if (weaponsRemaining[i] >= 8) {
            weaponType.appendChild(newRow1);
            weaponType.appendChild(newRow2);
            weaponType.appendChild(newRow3);
            weaponType.appendChild(newRow4);
        } else if (weaponsRemaining[i] >= 4) {
            weaponType.appendChild(newRow1);
            weaponType.appendChild(newRow2);
            weaponType.appendChild(newRow3);
        } else if (weaponsRemaining[i] > 0) {
            weaponType.appendChild(newRow1);
            weaponType.appendChild(newRow2);
        }

    }
}

function getWeaponSpecs () {
    for(let i = 0;i<ids.length;i++){
        let weaponType = document.getElementById(ids[i]);
        let weaponLb = document.getElementById(idsLb[i]);
        let weaponAmmo = document.getElementById(idsAmmo[i]);
        weaponLb.replaceChildren('');
        weaponAmmo.replaceChildren('');

        let newPound1 = document.createElement("option");
        newPound1.setAttribute("value", "6lb");
        newPound1.textContent = "6lb - +1pt";
        let newPound2 = document.createElement("option");
        newPound2.setAttribute("value", "8lb");
        newPound2.textContent = "8lb - +2pt";
        let newPound3 = document.createElement("option");
        newPound3.setAttribute("value", "9lb");
        newPound3.textContent = "9lb - +3pt";
        let newPound4 = document.createElement("option");
        newPound4.setAttribute("value", "12lb");
        newPound4.textContent = "12lb - +4pt";
        let newPound5 = document.createElement("option");
        newPound5.setAttribute("value", "18lb");
        newPound5.textContent = "18lb - +5pt";
        let newPound6 = document.createElement("option");
        newPound6.setAttribute("value", "24lb");
        newPound6.textContent = "24lb - +6pt";
        let newPound7 = document.createElement("option");
        newPound7.setAttribute("value", "32lb");
        newPound7.textContent = "32lb - +7pt";
        let newPound8 = document.createElement("option");
        newPound8.setAttribute("value", "36lb");
        newPound8.textContent = "36lb - +8pt";
        let newPound9 = document.createElement("option");
        newPound9.setAttribute("value", "42lb");
        newPound9.textContent = "42lb - +9pt";

        if (weaponType.value == "Cannon") {
            if (weaponsRemaining[i] >= 8) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
                weaponLb.appendChild(newPound6);
                weaponLb.appendChild(newPound7);
                weaponLb.appendChild(newPound8);
                weaponLb.appendChild(newPound9);
            } else if (weaponsRemaining[i] >= 7) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
                weaponLb.appendChild(newPound6);
                weaponLb.appendChild(newPound7);
                weaponLb.appendChild(newPound8);
            } else if (weaponsRemaining[i] >= 6) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
                weaponLb.appendChild(newPound6);
                weaponLb.appendChild(newPound7);
            } else if (weaponsRemaining[i] >= 5) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
                weaponLb.appendChild(newPound6);
            } else if (weaponsRemaining[i] >= 4) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
            } else if (weaponsRemaining[i] >= 3) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
                weaponLb.appendChild(newPound4);
            } else if (weaponsRemaining[i] >= 2) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
            } else if (weaponsRemaining[i] >= 1) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
            }
        } else if (weaponType.value == "Long Nine") {
            if (weaponsRemaining[i] >= 3) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
                weaponLb.appendChild(newPound3);
            } else if (weaponsRemaining[i] >= 2) {
                weaponLb.appendChild(newPound1);
                weaponLb.appendChild(newPound2);
            } else if (weaponsRemaining[i] >= 1) {
                weaponLb.appendChild(newPound1);
            }
        } else if (weaponType.value == "Carronade") {
            if (weaponsRemaining[i] >= 6) {
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
                weaponLb.appendChild(newPound6);
            } else if (weaponsRemaining[i] >= 5) {
                weaponLb.appendChild(newPound4);
                weaponLb.appendChild(newPound5);
            } else if (weaponsRemaining[i] >= 4) {
                weaponLb.appendChild(newPound4);
            }
        } else if (weaponType.value == "Paixhan") {
            if (weaponsRemaining[i] >= 10) {
                weaponLb.appendChild(newPound7);
                weaponLb.appendChild(newPound8);
                weaponLb.appendChild(newPound9);
            } else if (weaponsRemaining[i] >= 9) {
                weaponLb.appendChild(newPound7);
                weaponLb.appendChild(newPound8);
            } else if (weaponsRemaining[i] >= 8) {
                weaponLb.appendChild(newPound7);
            }
        }

        let newAmmo1 = document.createElement("option");
        newAmmo1.setAttribute("value", 0);
        newAmmo1.textContent = "Round Shot - 5 shots";
        let newAmmo2 = document.createElement("option");
        newAmmo2.setAttribute("value", 1);
        newAmmo2.textContent = "Grapeshot - 5 shots";
        let newAmmo3 = document.createElement("option");
        newAmmo3.setAttribute("value", 2);
        newAmmo3.textContent = "Chain Shot - 5 shots";

        if (weaponType.value == "Cannon") {
            weaponAmmo.appendChild(newAmmo1);
            weaponAmmo.appendChild(newAmmo2);
            weaponAmmo.appendChild(newAmmo3);
        } else if (weaponType.value == "Long Nine") {
            weaponAmmo.appendChild(newAmmo1);
            weaponAmmo.appendChild(newAmmo2);
        } else if (weaponType.value == "Carronade") {
            weaponAmmo.appendChild(newAmmo1);
            weaponAmmo.appendChild(newAmmo3);
        } else if (weaponType.value == "Paixhan") {
            weaponAmmo.appendChild(newAmmo1);
        }
    }
}


let weaponsArray = [
    [],
    [],
    []
];
let ammo = [0, 0, 0];

let addWeaponButtonB = document.getElementById("addWeaponButtonB");
let addWeaponButtonP = document.getElementById("addWeaponButtonP");
let addWeaponButtonS = document.getElementById("addWeaponButtonS");
let bowWeaponTable = document.getElementById("bowWeaponTable");
let portWeaponTable = document.getElementById("portWeaponTable");
let starboardWeaponTable = document.getElementById("starboardWeaponTable");
let WeaponTables = [bowWeaponTable,portWeaponTable,starboardWeaponTable];

let ammoTable = document.getElementById("ammoTable");
let roundDisplay = document.getElementById("roundDisplay");
let grapeDisplay = document.getElementById("grapeDisplay");
let chainDisplay = document.getElementById("chainDisplay");

let Poundages = ["6lb","8lb","9lb","12lb","18lb","24lb","32lb","36lb","42lb"]
let PoundageCost = [0,1,2,3,4,5,6,7,8]

function addWeapon (section) {

    let weaponType = document.getElementById(ids[section]);
    let weaponLb = document.getElementById(idsLb[section]);

    let PrevWeaponCount = weaponsRemaining[section];
    let wpnLmts = [
        3, 6, 6
    ]
    console.log(`sectio: ${section}`);
    

    for(let i = 0;i<PoundageCost.length;i++){
        if(weaponLb.value == Poundages[i]){
            if(weaponType.value == "Long Nine"||weaponType.value == "Carronade"){
                weaponsRemaining[section]-=PoundageCost[i]+1;
            }else if(weaponType.value == "Paixhan"){
                weaponsRemaining[section]-=PoundageCost[i]+2;
            }else{
                weaponsRemaining[section]-=Math.max(1,PoundageCost[i]);
            }
        }
    }

    if(weaponsRemaining[section]<0){
        weaponsRemaining[section] = PrevWeaponCount;
    }else{
        
        // console.log("works");
        let DesiredWeapon = [weaponType.value,parseInt(weaponLb.value.split("lb")[0])];
        let newWeapon = true;
        let weaponCountInSect = 0;
        for(let i = 0;i<weaponsArray[section].length;i++){
            weaponCountInSect += weaponsArray[section][i][2]
        }
        if (weaponCountInSect<wpnLmts[section]) {
            getAmmo(section)
            for(let i = 0;i<weaponsArray[section].length&&newWeapon;i++){
                if(weaponsArray[section][i][0] == DesiredWeapon[0]&&weaponsArray[section][i][1] == DesiredWeapon[1]){
                    let oldLine1 = document.getElementById(`${names[section]}${weaponsArray[section][i][1]}lb${weaponsArray[section][i][0]}`);
                    weaponsArray[section][i][2]++;
                    newWeapon=false;
                    oldLine1.innerText =`${weaponsArray[section][i][1]}lb ${weaponsArray[section][i][0]} x${weaponsArray[section][i][2]}`;
                }
            }
            if(newWeapon){
                weaponsArray[section].push([DesiredWeapon[0],DesiredWeapon[1],1]);
                let newLine1 = document.createElement("p");
                newLine1.setAttribute("id",`${names[section]}${weaponsArray[section][weaponsArray[section].length-1][1]}lb${weaponsArray[section][weaponsArray[section].length-1][0]}`);
                newLine1.innerText = `${weaponsArray[section][weaponsArray[section].length-1][1]}lb ${weaponsArray[section][weaponsArray[section].length-1][0]} x${weaponsArray[section][weaponsArray[section].length-1][2]}`;
                WeaponTables[section].appendChild(newLine1);
            }
        }else{
            alert("There are too many weapons on this area");
            weaponsRemaining[section] = PrevWeaponCount;
        }
            
    }

    wlDisplays[section].textContent = weaponsRemaining[section] + " points remaining";
}

function getAmmo(section) {
    // console.log("works");
    switch (document.getElementById(idsAmmo[section]).value) {
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

// document.getElementById(idsAdd[0]).addEventListener("click", (e) => getAmmo(0));
// document.getElementById(idsAdd[1]).addEventListener("click", (e) => getAmmo(1));
// document.getElementById(idsAdd[2]).addEventListener("click", (e) => getAmmo(2));


function armorReset () {
    brHP = statsByTon[parseInt(tonnageTable.value)][2];
    boHP = statsByTon[parseInt(tonnageTable.value)][3];
    aHP = statsByTon[parseInt(tonnageTable.value)][4];
    pHP = statsByTon[parseInt(tonnageTable.value)][5];
    sHP = statsByTon[parseInt(tonnageTable.value)][6];
    biHP = statsByTon[parseInt(tonnageTable.value)][7];
    mHP = statsByTon[parseInt(tonnageTable.value)][8];
    rHP = statsByTon[parseInt(tonnageTable.value)][9];
    armorRemaining = statsByTon[parseInt(tonnageTable.value)][10];bridgeHP.textContent = brHP;
    bowHP.textContent = boHP;
    aftHP.textContent = aHP;
    portHP.textContent = pHP;
    starboardHP.textContent = sHP;
    bilgeHP.textContent = biHP;
    mastHP.textContent = mHP;
    rudderHP.textContent = rHP;
    alDisplay.textContent = armorRemaining;
}

function resetWeapons () {
    weaponsRemaining[0] = statsByTon[parseInt(tonnageTable.value)][11];
    weaponsRemaining[1] = statsByTon[parseInt(tonnageTable.value)][12];
    weaponsRemaining[2] = statsByTon[parseInt(tonnageTable.value)][13];
    wlDisplayB.textContent = weaponsRemaining[0] + " points remaining";
    wlDisplayP.textContent = weaponsRemaining[1] + " points remaining";
    wlDisplayS.textContent = weaponsRemaining[2] + " points remaining";
    bowWeaponTable.replaceChildren('');
    portWeaponTable.replaceChildren('');
    starboardWeaponTable.replaceChildren('');
    weaponsArray = [
        [],
        [],
        []
    ];
    ammo = [0, 0, 0];
    roundDisplay.textContent = ammo[0];
    grapeDisplay.textContent = ammo[1];
    chainDisplay.textContent = ammo[2];
}

let cnDisplay = document.getElementById("cnDisplay");
let CNPresent = false;

function addCrowsNest () {
    if (CNPresent == false && weaponsRemaining[1] >= 2 && weaponsRemaining[2] >= 2) {
        CNPresent = true;
        weaponsRemaining[1] = weaponsRemaining[1] - 2;
        weaponsRemaining[2] = weaponsRemaining[2] - 2;
        wlDisplayP.textContent = weaponsRemaining[1] + " points remaining";
        wlDisplayS.textContent = weaponsRemaining[2] + " points remaining";
        cnDisplay.textContent = "Present";
    }
}

let addCNButton = document.getElementById("addCNButton");
addCNButton.addEventListener("click", addCrowsNest);

function CNReset () {
    if (CNPresent == true) {
        CNPresent = false;
        weaponsRemaining[1] = weaponsRemaining[1] + 2;
        weaponsRemaining[2] = weaponsRemaining[2] + 2;
        wlDisplayP.textContent = weaponsRemaining[1] + " points remaining";
        wlDisplayS.textContent = weaponsRemaining[2] + " points remaining";
        cnDisplay.textContent = "Absent";
    }
    
}

let shipName = document.getElementById("shipName");

// let ship = [
//     shipName.value,
//     statsByTon[parseInt(tonnageTable.value)][0],
//     statsByTon[parseInt(tonnageTable.value)][1],
//     weaponsArray,
//     ammo,
//     Math.floor(Math.random() * 3) + 2,
//     [
//         [brHP, brHP],
//         [boHP, boHP],
//         [aHP, aHP],
//         [pHP, pHP],
//         [sHP, sHP],
//         [biHP, biHP],
//         [mHP, mHP],
//         [rHP, rHP],
//     ],

// ]

class ShipStats{
    constructor(name,tonnage, cruise,full,flank,weaponsArray,ammo,captainSkill,health){
        //0=top,1=topright 2=bottomright etc until 5
        this.movePower = [cruise,full,flank];
        this.crowsNest = CNPresent;
        
        // Add ship sprite
        this.sprite = document.getElementById("iconPreview").getAttribute("src").split("../")[1];

        this.name = name;
        this.tonnage = tonnage;
        if (tonnage == 0 || tonnage == null) {
            // Set tonnage to 20 if null
            this.tonnage = 20;
            setValues();
        }

        // Set turning cost
        this.weightclass;
        if(this.tonnage<40){
            this.turnCost = 0;
        }else if(this.tonnage<60){
            this.turnCost = 1;
        }else if(this.tonnage<80){
            this.turnCost = 2;
        }else {
            this.turnCost = 3;
        }

        // Determine weight class
        if(this.tonnage<40){
            this.weightclass = "Corvette";
        }else if(this.tonnage<60){
            this.weightclass = "Cruiser";
        }else if(this.tonnage<80){
            this.weightclass = "Destroyer";
        }else if(this.tonnage<100){
            this.weightclass = "Dreadnought";
        }else {
            this.weightclass = "Super Dreadnought";
        }
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= weaponsArray;
        //[type,max,ammountLeft]
        this.ammo=[];
        this.ammo.push(["Round Shot",ammo[0],ammo[0]]);
        this.ammo.push(["Grape Shot",ammo[1],ammo[1]]);
        this.ammo.push(["Chain Shot",ammo[2],ammo[2]]);
        this.captainSkill = captainSkill;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = [[health[0][0],health[0][1],0],[health[1][0],health[1][1],0],[health[2][0],health[2][1],0],[health[3][0],health[3][1],0],[health[4][0],health[4][1],0],[health[5][0],health[5][1],0],[health[6][0],health[6][1],0],[health[7][0],health[7][1],0]];

    }
}

// Saving the custom ship to a local JSON file
function saveBoatToLocal(){
    if(window.localStorage.getItem('numberOfShips') == null||window.localStorage.getItem('numberOfShips') == NaN){
        numberOfShips = 0;
    }else{
        numberOfShips = window.localStorage.getItem('numberOfShips');
    }
    window.localStorage.setItem('numberOfShips', numberOfShips);
    let preixisting = false;
    for(let i =-builtIn.length;i<numberOfShips;i++){
        if(JSON.parse(window.localStorage.getItem(`ship${i}`)).name==shipName.value){
            preixisting=true;
        }
    }

    if (shipName.value == null || shipName.value == "") {
        // Add unnamed ship error
        alert("Cannot save an unnamed ship");
    } else if (preixisting) {
        // Add pre-existing ship error
        alert("Cannot save a ship with a prexisting name");
    } else {
        window.localStorage.setItem(`ship${numberOfShips}`, JSON.stringify(new ShipStats(shipName.value,
        statsByTon[parseInt(tonnageTable.value)][0],
        statsByTon[parseInt(tonnageTable.value)][14],
        statsByTon[parseInt(tonnageTable.value)][15],
        statsByTon[parseInt(tonnageTable.value)][16],
        weaponsArray,
        ammo,
        3,
        [
            [brHP, brHP],
            [boHP, boHP],
            [aHP, aHP],
            [pHP, pHP],
            [sHP, sHP],
            [biHP, biHP],
            [mHP, mHP],
            [rHP, rHP],
        ])));
        numberOfShips++;
        window.localStorage.setItem('numberOfShips', numberOfShips);
        alert("Your ship has been saved!");
    }
    
}

let iconPreview = document.getElementById("iconPreview");
let iconSelect = document.getElementById("iconSelect");
let icon;

// Ship sprites
function getIcon () {
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

// Deletes all ships
function clearAllShipsForcefully(){
    for(let i = 0;i<100;i++){
        window.localStorage.setItem(`ship${i}`,null)
    }
    window.localStorage.setItem('numberOfShips',0)
}

iconSelect.addEventListener("change", getIcon);