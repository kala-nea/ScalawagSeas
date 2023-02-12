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


let healthElements = document.querySelectorAll("#H, #CT, #LT, #RT, #LA, #RA, #LL, #RL");
let curHealthElements = document.querySelectorAll("#curH, #curCT, #curLT, #curRT, #curLA, #curRA, #curLL, #curRL");

function setHealth(event) {
    let id = event.target.id;
    let index = id.indexOf("_") + 1;
    let target = id.slice(index);
    let value = event.target.value;
    document.getElementById("cur" + target).textContent = value;
}

healthElements.forEach((element) => {
element.addEventListener("change", setHealth);
});


let gunAmount = document.getElementById("numG");
let gunName = document.getElementById("typeG");
let gunDmg = document.getElementById("dmg");
let gunCluster = document.getElementById("cluster");
let guns = [];

function addGun () {
    // get the input values as an array
    
    let newGun = [gunAmount.value, gunName.value, gunDmg.value, gunCluster.value];

    // get the table body element
    let tableBody = document.getElementById("guns");

    // create a new row element
    let newRow = document.createElement("tr");

    // loop through the input values and create a cell for each one
    for (value of newGun) {
        let newCell = document.createElement("td");
        let cellText = document.createElement("p");
        cellText.textContent = value;
        newCell.appendChild(cellText);
        newRow.appendChild(newCell);
    }

    // append the new row to the table body
    tableBody.appendChild(newRow);

    // add the input values to a 2D array
    guns.append(newGun);
}

function resetGuns () {
    let gunTable = document.getElementById("guns");
    while (gunTable.rows.length > 0) {
        gunTable.deleteRow(0);
    }

    guns = [];
}


let ammoName = document.getElementById("typeA");
let ammoCount = document.getElementById("numA");
let ammo = [];
let count = 0;

function addAmmo () {
    // get the input values as an array
    
    let newAmmo = [ammoName.value, ammoCount.value];

    // get the table body element
    let tableBodyA = document.getElementById("ammos");

    // create a new row element
    let newRowA = document.createElement("tr");

    // loop through the input values and create a cell for each one
    for (value of newAmmo) {
        let newCellA = document.createElement("td");
        let cellTextA = document.createElement("p");
        cellTextA.textContent = value;
        newCellA.appendChild(cellTextA);
        newRowA.appendChild(newCellA);
    }

    let newCellB = document.createElement("td");
    let cellTextB = document.createElement("p");
    cellTextB.setAttribute("id", "gun" + count);
    count = count + 1;
    newCellB.appendChild(cellTextB);
    newRowA.appendChild(newCellB);

    // append the new row to the table body
    tableBodyA.appendChild(newRowA);

    // add the input values to a 2D array
    guns.append(newAmmo);
}

function resetAmmo () {
    let ammoTable = document.getElementById("ammos");
    while (ammoTable.rows.length > 0) {
        ammoTable.deleteRow(0);
    }

    count = 0;

    ammo = [];
}


let skill = document.getElementById("skill");
let typeM = document.getElementById("typeM");
let moveCount = document.getElementById("moveCount");
let typeT = document.getElementById("typeT");
let LCCount = document.getElementById("LCCount");
let HCCount = document.getElementById("HCCount");
let range = document.getElementById("range");
let output = document.getElementById("rtbOutput");

function getRollToBeat () {
    let rollToBeat;

    let skillVal = skill.value;
    let moveVal;
    switch (typeM.value) {
        case 0:
            moveVal = 0;
            break;
        case 1:
            moveVal = 1;
            break;
        case 2:
            moveVal = 2;
            break;
    }
    let mCountVal;
    switch (true) {
        case (moveCount.value >= 25):
            mCountVal = 6;
            break;
        case (moveCount.value >= 18):
            mCountVal = 5;
            break;
        case (moveCount.value >= 10):
            mCountVal = 4;
            break;
        case (moveCount.value >= 7):
            mCountVal = 3;
            break;
        case (moveCount.value >= 5):
            mCountVal = 2;
            break;
        case (moveCount.value >= 3):
            mCountVal = 1;
            break;
        case (moveCount.value >= 0):
            mCountVal = 0;
            break;
    }
    let tileVal;
    switch (typeT.value) {
        case 0:
            tileVal = 0;
            break;
        case 1:
            tileVal = 1;
            break;
        case 2:
            tileVal = 2;
            break;
    }
    let lcCountVal = LCCount.value;
    let hcCountVal = 2 * HCCount.value;
    let rangeVal;
    switch (range.value) {
        case 0:
            rangeVal = 0;
            break;
        case 1:
            rangeVal = 1;
            break;
        case 2:
            rangeVal = 2;
            break;
    }

    rollToBeat = skillVal + moveVal + mCountVal + tileVal + lcCountVal + hcCountVal + rangeVal;
    if (LCCount.value + HCCount.value - typeTSelected >= 3) {
        output.innerText = "You cannot see this Mech";
    } else if (rollToBeat > 12) {
        output.innerText = "You cannot attack this Mech";
    } else {
        output.innerText = "You can hit this Mech with a roll of " + rollToBeat + " or higher";
    }
}