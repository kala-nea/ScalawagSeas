let sidebar = document.getElementById("SideBarContent");

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
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="makeBoard" onclick="startGame()">start</button>\n`);
}

function removeStart(){
    clearSidebar()
}

function addMoveProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<p id="phase">Phase:move</p>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                <p id="Movement left">Movement Left:</p>\n  <button id="nextBoat" onClick="nextBoatMove()">Finish Turn</button>`);
}

function addAttackProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<p id="phase">Phase:move</p>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                  <button id="nextBoat" onClick="nextBoatMove()">Finish Turn</button>   `);
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
}

function setAttackButtons(){
    GameControls = document.getElementById("GameControls");
    GameControls.innerHTML = GameControls.innerHTML=`
    Weapons:
          `;
        if(teams[activeTeam].ships[activeBoat].Weapons[0].length>0){
            GameControls.innerText+=`Bow:
            `;
        }
        for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[0].length;i++){
        GameControls.innerText+=`${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[0][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[0][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[0][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}
        `;
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[1].length>0){
        GameControls.innerText+=`Port:
        `;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[1].length;i++){
        GameControls.innerText+=`${teams[activeTeam].ships[activeBoat].Weapons[1][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[1][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[1][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[0][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}
        `;
    }
    if(teams[activeTeam].ships[activeBoat].Weapons[2].length>0){
        GameControls.innerText+=`Starboard:
        `;
    }
    for(let i=0;i<teams[activeTeam].ships[activeBoat].Weapons[2].length;i++){
        GameControls.innerText+=`${teams[activeTeam].ships[activeBoat].Weapons[2][i][2]}x ${teams[activeTeam].ships[activeBoat].Weapons[2][i][1]}lb ${teams[activeTeam].ships[activeBoat].Weapons[2][i][0]}      ${teams[activeTeam].ships[activeBoat].Weapons[0][i][3]}/${teams[activeTeam].ships[activeBoat].Weapons[0][i][2]}
        `;
    }
    GameControls.innerText+=`
    Ammo:
    `;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].ammo.length;i++){
        GameControls.innerText+=`${teams[activeTeam].ships[activeBoat].ammo[i][0]}: ${teams[activeTeam].ships[activeBoat].ammo[i][2]}/${teams[activeTeam].ships[activeBoat].ammo[i][1]}
        `;
    }
    let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
    GameControls.innerText+=`
    Hitpoints:
    `;
    for(let i=0;i<teams[activeTeam].ships[activeBoat].hitpoints.length;i++){
        GameControls.innerText+=`${shipParts[i]}: ${teams[activeTeam].ships[activeBoat].hitpoints[i][1]}/${teams[activeTeam].ships[activeBoat].hitpoints[i][0]}
        `;
    }
}
    
function clearGameControls(){
    GameControls = document.getElementById("GameControls")
    GameControls.innerHTML = "";
}

function clearPieceInfo(){
    PieceInfo = document.getElementById("PieceInfo")
    PieceInfo.innerHTML = "";
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