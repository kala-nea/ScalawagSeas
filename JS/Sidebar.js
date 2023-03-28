//count the nuber of ships you have
let sidebar = document.getElementById("SideBarContent");

if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);


// function removeBoardMake(){
//     clearSidebar()
// }

// function addBoatMake(){
//     sidebar = document.getElementById("SideBarContent");
//     sidebar.innerHTML = sidebar.innerHTML.concat(`<input type="number" id="teams" placeholder="teams" value="2">\n                <input type="number" id="boatCountPer" placeholder="boats per team" value="3">\n                         <button id="makeBoard" onclick="makeBoats()">Build boats</button>\n`);
// }

// function removeBoatMake(){
//     clearSidebar()
// }


//adds ship selection and the start button
function addStart(){
    sidebar = document.getElementById("SideBarContent");
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        sidebar.innerHTML+=`<h3>Player ${i+1} Ships</h3>`;
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            sidebar.innerHTML+=`<input list="ShipList" name="Player${i}ShipSelect${j}" id="Player${i}ShipSelect${j}" placeholder="Player ${i+1}: Ship ${j+1}" autocomplete="off">`;
        }
        sidebar.innerHTML+=`<br>`;
    }
    sidebar.innerHTML+=`<datalist id="ShipList">
                    </datalist>`;
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="makeBoard" onclick="startGame()">start</button>\n`);
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="multiplayerTest" >multi</button>\n`);
    // console.log(`made button`);
    ShipList = document.getElementById("ShipList");
    for(let i =0;i<builtIn.length;i++){
        window.localStorage.setItem(`ship${-(i+1)}`,builtIn[i]);
    }
    for(let i = -builtIn.length;i<window.localStorage.getItem('numberOfShips');i++){
        let storedShip = JSON.parse(window.localStorage.getItem(`ship${i}`));
        let shipItem = document.createElement("option");
        shipItem.setAttribute("id",`Ship${i}`);
        shipItem.setAttribute("class","GameListShip");
        // shipItem.innerText = storedShip.name;
        shipItem.value = storedShip.name;
        ShipList.append(shipItem);
    }

}

//ermoves the ship select and start buttons
function removeStart(){
    clearGameControls()
}

//adds the movement phase info
function addMoveProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<div id="phaseDiv"><p id="phase">Phase: Move</p>\n         <img id="phaseIndicator" src="/IMG/indicator_phase_move.png"></div>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                <p id="Movement left">Movement Left:</p>\n  <button id="nextBoat" onClick="nextBoatMove()">Finish Turn</button>`);
}
//adds the attack phase info
function addAttackProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<div id="phaseDiv"><p id="phase">Phase: Move</p>\n          <img id = "phaseIndicator" src="/IMG/indicator_phase_battle.png"></div>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n       <p id="firingWeapon">Firing:</p>\n    <p id="firingAmmo">With:</p>\n         <button id="nextBoat" onClick="nextBoatAttack()">Finish Turn</button>   `);
}

//clears the sidebars main section
function clearSidebar(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = "";

}

//adds the movement speed selection buttons
function setSpeedSelection(){
    GameControls = document.getElementById("GameControls");
    if(teams[activeTeam].ships[activeBoat].hitpoints[6][1]>0){
        GameControls.innerHTML = GameControls.innerHTML.concat(`<p>Select movement speed:</p>  <button class="SpeedSet" id = "SpeedCruise" onClick="setSpeed(0)">Cruise</button>
        <button class="SpeedSet" id = "SpeedFullSteam" onClick="setSpeed(1)">Full Steam</button>
        <button class="SpeedSet" id = "SpeedFlank" onClick="setSpeed(2)">Flank</button>`);
    }else{
        GameControls.innerHTML = GameControls.innerHTML.concat(`<p>Select movement speed:</p>  <button class="SpeedSet" id = "SpeedCruise" onClick="setSpeed(0)">Cruise</button>`);
    }
    setTimeout((e) => adjustAll(),100)
}

//adds the attack buttons for selecting weapons ammo and health
function setAttackButtons(){
    GameControls = document.getElementById("GameControls");
    GameControls.innerHTML = GameControls.innerHTML=`<h3>Weapons:</h3>`;
        if(teams[activeTeam].ships[activeBoat].Weapons[0].length>0&&teams[activeTeam].ships[activeBoat].hitpoints[1][1]>0){
            GameControls.innerHTML+=`Bow:<hr class ="smallDivider">`;
        }
        for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[0].length&&teams[activeTeam].ships[activeBoat].hitpoints[1][1]>0;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[0][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[0][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[0][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide0Weapon${i}" onclick="FireWeapon(0,${i})">Select</button><br>`;
        
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[1].length>0&&teams[activeTeam].ships[activeBoat].hitpoints[3][1]>0){
        GameControls.innerHTML+=`Port:<hr class ="smallDivider">`;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[1].length&&teams[activeTeam].ships[activeBoat].hitpoints[3][1]>0;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[1][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[1][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[1][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[1][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[1][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide1Weapon${i}" onclick="FireWeapon(1,${i})">Select</button><br>`;
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[2].length>0&&teams[activeTeam].ships[activeBoat].hitpoints[4][1]>0){
        GameControls.innerHTML+=`<br>Starboard:<hr class ="smallDivider">`;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[2].length&&teams[activeTeam].ships[activeBoat].hitpoints[4][1]>0;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[2][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[2][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[2][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[2][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[2][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide2Weapon${i}" onclick="FireWeapon(2,${i})">Select</button><br>`;
    }
    GameControls.innerHTML+=`<hr class="bigDivider">`;
    GameControls.innerHTML+=`<h3>Ammo:</h3>`;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].ammo.length;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].ammo[i][0]}: ${teams[activeTeam].ships[activeBoat].ammo[i][2]}/${teams[activeTeam].ships[activeBoat].ammo[i][1]}`;
        GameControls.innerHTML+=`<button id="SelectAmmo${teams[activeTeam].ships[activeBoat].ammo[i][0]}" onclick="selectAmmo('${teams[activeTeam].ships[activeBoat].ammo[i][0]}')">Select</button><br>`;
    }
    GameControls.innerHTML+=`<hr class="bigDivider">`;
    let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
    GameControls.innerHTML+=`<h3>Hitpoints:</h3>`;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].hitpoints.length;i++){
        GameControls.innerHTML+=`${shipParts[i]}: ${teams[activeTeam].ships[activeBoat].hitpoints[i][1]}/${teams[activeTeam].ships[activeBoat].hitpoints[i][0]}<br>`;
    }
    setTimeout((e) => adjustAll(),100)
}
    
//clear the controll section of the sidebar 
function clearGameControls(){
    GameControls = document.getElementById("GameControls")
    GameControls.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

//clear the piece info section of the sidebar
function clearPieceInfo(){
    PieceInfo = document.getElementById("PieceInfo")
    PieceInfo.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

//sets the phase on the sidebar
function setPhase(input){
    document.getElementById("phase").innerText = `Phase: ${input}`;
    switch(input){
        case "Attack":
            
        break;
        case "Move":

        break;
    }
}

//sets the team on the sidebar
function setTeam(input){
    document.getElementById("activeTeam").innerText = `Active Team: ${input+1}`;
}

//sets the boat on the sidebar
function setBoat(input){
    document.getElementById("activeBoat").innerText = `Active Boat: ${input+1}`;
}

//sets the move left on the sidebar
function setMoveLeft(input){
    document.getElementById("Movement left").innerText = `Movement Left: ${input}`;
}

let sides = ["Bow","Port","Starboard"]

//sets the firing weapon on the sidebar
function setFiringWeapon(input,input2){
    document.getElementById("firingWeapon").innerText = `Firing:${teams[activeTeam].ships[activeBoat].Weapons[input2][input][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[input2][input][0]} on ${sides[input2]}`;
}

//sets the firing weapon on the sidebar to a raw value
function setFiringWeaponRaw(input){
    document.getElementById("firingWeapon").innerText = `Firing:${input}`;
}

//sets the ammo on the sidebar
function setFiringAmmo(input){
    document.getElementById("firingAmmo").innerText = `With:${input}`;
}