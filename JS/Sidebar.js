let sidebar = document.getElementById("SideBarContent");

if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);

function removeBoardMake(){
    clearSidebar()
}

function addBoatMake(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<input type="number" id="teams" placeholder="teams" value="2">\n                <input type="number" id="boatCountPer" placeholder="boats per team" value="3">\n                         <button id="makeBoard" onclick="makeBoats()">Build boats</button>\n`);
}

function removeBoatMake(){
    clearSidebar()
}

function addStart(){
    sidebar = document.getElementById("SideBarContent");
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            sidebar.innerHTML+=`<input list="ShipList" name="Player${i}ShipSelect${j}" id="Player${i}ShipSelect${j}" placeholder=""Player${i} Ship${j}">`;
        }
        sidebar.innerHTML+=`<br>`;
    }
    sidebar.innerHTML+=`<datalist id="ShipList">
                    </datalist>`;
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="makeBoard" onclick="startGame()">start</button>\n`);
    ShipList = document.getElementById("ShipList");
    for(let i = 0;i<window.localStorage.getItem('numberOfShips');i++){
        let storedShip = JSON.parse(window.localStorage.getItem(`ship${i}`));
        let shipItem = document.createElement("option");
        shipItem.setAttribute("id",`Ship${i}`);
        shipItem.setAttribute("class","GameListShip");
        shipItem.innerText = storedShip.name;
        shipItem.value = storedShip
        ShipList.append(shipItem);
    }

}

function removeStart(){
    clearGameControls()
}

function addMoveProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<p id="phase">Phase:move</p>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                <p id="Movement left">Movement Left:</p>\n  <button id="nextBoat" onClick="nextBoatMove()">Finish Turn</button>`);
}

function addAttackProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<p id="phase">Phase:move</p>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n       <p id="firingWeapon">Firing:</p>\n    <p id="firingAmmo">With:</p>\n         <button id="nextBoat" onClick="nextBoatAttack()">Finish Turn</button>   `);
}

function clearSidebar(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = "";

}

function setSpeedSelection(){
    GameControls = document.getElementById("GameControls");
    GameControls.innerHTML = GameControls.innerHTML.concat(`<p>Select movement speed:</p>  <button class="SpeedSet" id = "SpeedCruse" onClick="setSpeed(0)">Cruse</button>
    <button class="SpeedSet" id = "SpeedFullSteam" onClick="setSpeed(1)">Full Steam</button>
    <button class="SpeedSet" id = "SpeedFlank" onClick="setSpeed(2)">Flank</button>`);
    setTimeout((e) => adjustAll(),100)
}

function setAttackButtons(){
    GameControls = document.getElementById("GameControls");
    GameControls.innerHTML = GameControls.innerHTML=`<br>Weapons:<br>`;
        if(teams[activeTeam].ships[activeBoat].Weapons[0].length>0){
            GameControls.innerHTML+=`Bow:<br>`;
        }
        for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[0].length;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[0][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[0][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[0][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide0Weapon${i}" onclick="FireWeapon(0,${i})">Fire</button><br>`;
        
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[1].length>0){
        GameControls.innerHTML+=`Port:<br>`;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[1].length;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[1][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[1][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[1][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[1][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[1][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide1Weapon${i}" onclick="FireWeapon(1,${i})">Fire</button><br>`;
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[2].length>0){
        GameControls.innerHTML+=`Starboard:<br>`;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[2].length;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].Weapons[2][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[2][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[2][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[2][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[2][i][2]}`;
        GameControls.innerHTML+=`<button id="FireSide2Weapon${i}" onclick="FireWeapon(2,${i})">Fire</button><br>`;
    }
    GameControls.innerHTML+=`<br>Ammo:<br>`;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].ammo.length;i++){
        GameControls.innerHTML+=`${teams[activeTeam].ships[activeBoat].ammo[i][0]}: ${teams[activeTeam].ships[activeBoat].ammo[i][2]}/${teams[activeTeam].ships[activeBoat].ammo[i][1]}`;
        GameControls.innerHTML+=`<button id="SelectAmmo${teams[activeTeam].ships[activeBoat].ammo[i][0]}" onclick="selectAmmo('${teams[activeTeam].ships[activeBoat].ammo[i][0]}')">Select</button><br>`;
    }
    let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
    GameControls.innerHTML+=`<br>Hitpoints:<br>`;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].hitpoints.length;i++){
        GameControls.innerHTML+=`${shipParts[i]}: ${teams[activeTeam].ships[activeBoat].hitpoints[i][1]}/${teams[activeTeam].ships[activeBoat].hitpoints[i][0]}<br>`;
    }
    setTimeout((e) => adjustAll(),100)
}
    
function clearGameControls(){
    GameControls = document.getElementById("GameControls")
    GameControls.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

function clearPieceInfo(){
    PieceInfo = document.getElementById("PieceInfo")
    PieceInfo.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

function setPhase(input){
    document.getElementById("phase").innerText = `Phase:${input}`;
}

function setTeam(input){
    document.getElementById("activeTeam").innerText = `Active Team:${input}`;
}

function setBoat(input){
    document.getElementById("activeBoat").innerText = `Active Boat:${input}`;
}

function setMoveLeft(input){
    document.getElementById("Movement left").innerText = `Movement Left:${input}`;
}

let sides = ["Bow","Port","Starboard"]

function setFiringWeapon(input,input2){
    document.getElementById("firingWeapon").innerText = `Firing:${teams[activeTeam].ships[activeBoat].Weapons[input2][input][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[input2][input][0]} on ${sides[input2]}`;
}

function setFiringWeaponRaw(input){
    document.getElementById("firingWeapon").innerText = `Firing:${input}`;
}

function setFiringAmmo(input){
    document.getElementById("firingAmmo").innerText = `With:${input}`;
}