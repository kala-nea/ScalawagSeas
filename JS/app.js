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
    ammo.append(newAmmo);
}

function resetAmmo () {
    let ammoTable = document.getElementById("ammos");
    while (ammoTable.rows.length > 0) {
        ammoTable.deleteRow(0);
    }

    count = 0;

    ammo = [];
}


// Cache frequently accessed DOM elements
let input1 = document.getElementById("skill");
let input2 = document.getElementById("moveCount");
let input3 = document.getElementById("LCCount");
let input4 = document.getElementById("HCCount");
let dropdown1 = document.getElementById("typeM");
let dropdown2 = document.getElementById("typeT");
let dropdown3 = document.getElementById("range");
let sum;
let output = document.getElementById("rtbOutput");

function getRollToBeat() {
    // Get the numerical values of the inputs and dropdowns
    let value1 = Number(input1.value);
    let value2;
    if (input2.value >= 25) {
        value2 = 6;
    } else if (input2.value >= 18) {
        value2 = 5;
    } else if (input2.value >= 10) {
        value2 = 4;
    } else if (input2.value >= 7) {
        value2 = 3;
    } else if (input2.value >= 5) {
        value2 = 2;
    } else if (input2.value >= 3) {
        value2 = 1;
    } else {
        value2 = 0;
    }
    // 25, 18, 10, 7, 5, 3, 0
    let value3 = Number(input3.value);
    let value4 = Number(input4.value);
    let value5 = Number(dropdown1.value);
    let value6 = Number(dropdown2.value);
    let value7 = Number(dropdown3.value);
    // Compute the sum and output text
    sum = value1 + value2 + value3 + 2 * value4 + value5 + value6 + 2 * value7;
    let outputText;
    if (value3 + 2 * value4 - value6 >= 3) {
        outputText = "You cannot see this Mech";
    } else if (sum > 12) {
        outputText = "You cannot hit this Mech";
    } else {
        outputText = "You can hit this Mech with a roll of " + sum + " or higher";
    }
    
    // Output the sum to the console and update the output element
    console.log(sum);
    output.textContent = outputText;
}


let gunInUse = document.getElementById("gunInUse");
let rtbDisplay = document.getElementById("rtbDisplay");
let dmgOutput = document.getElementById("dmgOutput");

rtbDisplay.textContent = sum;
let match = 0;
let ammoOfGun = 0;

function dmgCalc () {
    let gIU = gunInUse.value;
    for (let i = 0; i < guns.length; i++) {
        console.log("Gun Found: " + guns[i][0])
        if (gIU === guns[i][0]) {
            match = i + 1;
            console.log("Gun Matched: " + gIU)
        }
    }

    if (match != 0) {
        for (let i = 0; i < ammo.length; i++) {
            console.log("Ammo Found: " + ammo[i][0]);
            if (gIU === ammo[i][0]) {
                console.log("Ammo Matched: " + gIU);
                if (ammo[i][1] == 0) {
                    dmgOutput.textContent = "You cannot attack with this weapon";
                    return;
                }
                ammo[i][1] = ammo[i][1] - 1;
            }
        }
        let roll = Math.floor(Math.random() * 6) * 2;
        if (roll >= sum) {
            let trueMatch = match - 1;
            if (guns[trueMatch][3] >= 2) {
                let x;
                let newRoll = Math.floor((Math.random() * 6) * 2);
                if (guns[trueMatch][3] == 2) {
                    switch (newRoll) {
                        case 2, 3, 4, 5, 6, 7:
                            x = 1 * guns[trueMatch][2];
                            break;
                        case 8, 9, 10, 11, 12:
                            x = 2 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 4) {
                    switch (newRoll) {
                        case 2:
                            x = 1 * guns[trueMatch][2];
                            break;
                        case 3, 4, 5, 6:
                            x = 2 * guns[trueMatch][2];
                            break;
                        case 7, 8, 9, 10:
                            x = 3 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 4 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 5) {
                    switch (newRoll) {
                        case 2:
                            x = 1 * guns[trueMatch][2];
                            break;
                        case 3, 4:
                            x = 2 * guns[trueMatch][2];
                            break;
                        case 5, 6, 7, 8:
                            x = 3 * guns[trueMatch][2];
                            break;
                        case 9, 10:
                            x = 4 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 5 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 6) {
                    switch (newRoll) {
                        case 2, 3:
                            x = 2 * guns[trueMatch][2];
                            break;
                        case 4, 5:
                            x = 3 * guns[trueMatch][2];
                            break;
                        case 6, 7, 8:
                            x = 4 * guns[trueMatch][2];
                            break;
                        case 9, 10:
                            x = 5 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 6 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 10) {
                    switch (newRoll) {
                        case 2, 3:
                            x = 3 * guns[trueMatch][2];
                            break;
                        case 4:
                            x = 4 * guns[trueMatch][2];
                            break;
                        case 5, 6, 7, 8:
                            x = 6 * guns[trueMatch][2];
                            break;
                        case 9, 10:
                            x = 8 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 10 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 15) {
                    switch (newRoll) {
                        case 2, 3:
                            x = 5 * guns[trueMatch][2];
                            break;
                        case 4:
                            x = 6 * guns[trueMatch][2];
                            break;
                        case 5, 6, 7, 8:
                            x = 9 * guns[trueMatch][2];
                            break;
                        case 9, 12:
                            x = 8 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 15 * guns[trueMatch][2];
                            break;
                    }
                } else if (guns[trueMatch][3] == 20) {
                    switch (newRoll) {
                        case 2, 3:
                            x = 6 * guns[trueMatch][2];
                            break;
                        case 4:
                            x = 9 * guns[trueMatch][2];
                            break;
                        case 5, 6, 7, 8:
                            x = 12 * guns[trueMatch][2];
                            break;
                        case 9, 10:
                            x = 15 * guns[trueMatch][2];
                            break;
                        case 11, 12:
                            x = 20 * guns[trueMatch][2];
                            break;
                    }
                } else {
                    dmgOutput.textContent = "You cannot attack with this weapon";
                    return;
                }
                let y = [0];
                let i = 0;
                while (x > 0) {
                    y[i] = y[i] + 1;
                    x = x - 1;
                    if (y[i] >= 5) {
                        i = i + 1;
                        y[i] = 0;
                    }
                }
                console.log(y);
                function getArea (item) {
                    let diceRoll = Math.floor((Math.random() * 6) * 2);
                    switch (diceRoll) {
                        case 2:
                            console.log(item + " damage dealt to center torso");
                            break;
                        case 3:
                            console.log(item + " damage dealt to center torso");
                            break;
                        case 4:
                            console.log(item + " damage dealt to left torso");
                            break;
                        case 5:
                            console.log(item + " damage dealt to right torso");
                            break;
                        case 6:
                            console.log(item + " damage dealt to right arm");
                            break;
                        case 7:
                            console.log(item + " damage dealt to right arm");
                            break;
                        case 8:
                            console.log(item + " damage dealt to left arm");
                            break;
                        case 9:
                            console.log(item + " damage dealt to left arm");
                            break;
                        case 10:
                            console.log(item + " damage dealt to right leg");
                            break;
                        case 11:
                            console.log(item + " damage dealt to left leg");
                            break;
                        case 12:
                            console.log(item + " damage dealt to head");
                            break;
                    }
                }
                y.forEach(getArea);
            } else if (guns[trueMatch][3] == 1) {
                let finRoll = Math.floor((Math.random() * 6) * 2);
                    switch (finRoll) {
                        case 2:
                            console.log(guns[trueMatch][2] + " damage dealt to center torso");
                            break;
                        case 3:
                            console.log(guns[trueMatch][2] + " damage dealt to center torso");
                            break;
                        case 4:
                            console.log(guns[trueMatch][2] + " damage dealt to left torso");
                            break;
                        case 5:
                            console.log(guns[trueMatch][2] + " damage dealt to right torso");
                            break;
                        case 6:
                            console.log(guns[trueMatch][2] + " damage dealt to right arm");
                            break;
                        case 7:
                            console.log(guns[trueMatch][2] + " damage dealt to right arm");
                            break;
                        case 8:
                            console.log(guns[trueMatch][2] + " damage dealt to left arm");
                            break;
                        case 9:
                            console.log(guns[trueMatch][2] + " damage dealt to left arm");
                            break;
                        case 10:
                            console.log(guns[trueMatch][2] + " damage dealt to right leg");
                            break;
                        case 11:
                            console.log(guns[trueMatch][2] + " damage dealt to left leg");
                            break;
                        case 12:
                            console.log(guns[trueMatch][2] + " damage dealt to head");
                            break;
                    }
            }
        } else {
            dmgOutput.textContent = "You missed";
            return;
        }
    } else {
        dmgOutput.textContent = "You cannot attack with this weapon";
    }
}





let areaHit = document.getElementById("areaHit");
let dmgTaken = document.getElementById("dmgTaken");

let curHealthH = document.getElementById("curH");
let curHealthCT = document.getElementById("curCT");
let curHealthLT = document.getElementById("curLT");
let curHealthRT = document.getElementById("curRT");
let curHealthLA = document.getElementById("curLA");
let curHealthRA = document.getElementById("curRA");
let curHealthLL = document.getElementById("curLL");
let curHealthRL = document.getElementById("curRL");

let dmgToHead;

function takeHealth () {
    switch (areaHit) {
        case "H":
            curHealthH.textContent = parseFloat(curHealthH.value) - parseFloat(dmgTaken);
            break;
        case "CT":
            curHealthCT.textContent = parseFloat(curHealthCT.value) - parseFloat(dmgTaken);
            break;
        case "LT":
            curHealthLT.textContent = parseFloat(curHealthLT.value) - parseFloat(dmgTaken);
            break;
        case "RT":
            curHealthRT.textContent = parseFloat(curHealthRT.value) - parseFloat(dmgTaken);
            break;
        case "LA":
            curHealthLA.textContent = parseFloat(curHealthLA.value) - parseFloat(dmgTaken);
            break;
        case "RA":
            curHealthRA.textContent = parseFloat(curHealthRA.value) - parseFloat(dmgTaken);
            break;
        case "LL":
            curHealthLL.textContent = parseFloat(curHealthLL.value) - parseFloat(dmgTaken);
            break;
        case "RL":
            curHealthRL.textContent = parseFloat(curHealthRL.value) - parseFloat(dmgTaken);
            break;
    }
}