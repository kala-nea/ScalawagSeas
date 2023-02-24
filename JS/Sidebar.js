let sidebar = document.getElementById("SideBar");

function removeBoardMake(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.replace(`<input type="number" id="BoardX" value="20">\n                <input type="number" id="BoardY" value="7">\n                <button id="makeBoard" onclick="MakeBoard()">Build board</button>\n  `,``);
}

function addBoatMake(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<input type="number" id="teams" placeholder="teams" value="2">\n                <input type="number" id="boatCountPer" placeholder="boats per team" value="3">\n                <input type="number" id="movePer" placeholder="move per boat" value="5">\n                <button id="makeBoard" onclick="makeBoats()">Build boats</button>\n`);
}

function removeBoatMake(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.replace(`<input type="number" id="teams" placeholder="teams" value="2">\n                <input type="number" id="boatCountPer" placeholder="boats per team" value="3">\n                <input type="number" id="movePer" placeholder="move per boat" value="5">\n                <button id="makeBoard" onclick="makeBoats()">Build boats</button>\n`,``);
}

function addStart(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="makeBoard" onclick="startGame()">start</button>\n`);
}

function removeStart(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.replace(`<button id="makeBoard" onclick="startGame()">start</button>\n`,``);
}

function addProgress(){
    sidebar = document.getElementById("SideBar");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<p id="phase">Phase:move</p>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                <p id="Movement left">Movement Left:</p>\n  <button id="nextBoat" onClick="nextBoat()">Next Boat</button>`);
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