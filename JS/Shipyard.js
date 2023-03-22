// get the number of ships
if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);

let ShipList = document.getElementById("ShipList");
//create a list of all of the custom ships
listShips();
function listShips(){
    for(let i =0;i<numberOfShips;i++){
        let storedShip = JSON.parse(window.localStorage.getItem(`ship${i}`));
        let shipLi = document.createElement("div");
        let shipItem = document.createElement("li");
        shipItem.setAttribute("id",`Ship${i}`);
        shipItem.setAttribute("class","ShipyardListShip");
        shipItem.innerText = storedShip.name;
        shipItem.addEventListener("click",(e) =>displayStats(`Ship${i}`));
        let shipDelBut = document.createElement("button");
        shipDelBut.innerText = "Delete This Ship";
        shipDelBut.addEventListener("click", (e) =>deleteOneShip(i))
        shipLi.append(shipItem);
        shipLi.append(shipDelBut)
        // console.log(storedShip.name);
        ShipList.append(shipLi);
    }
}


//shows the stats of a ship that is clicked on
function displayStats(id){
    let PieceInfo = document.getElementById("ShipInfo");
    let shipNum = id.split("Ship").pop();
    let storedShip = JSON.parse(window.localStorage.getItem(`ship${shipNum}`));
    PieceInfo.innerHTML=`
    <h3>Name: ${storedShip.name}</h3>
    <p>Tonnage: ${storedShip.tonnage}</p>
    <p>Weight Class: ${storedShip.weightclass}</p>
    <p>Captain Skill: ${storedShip.captainSkill}</p>
    
    <h4>Movement Points:</h4>
        <ul>
            <li>Cruising: ${storedShip.movePower[0]} tiles</li>
            <li>Full Steam: ${storedShip.movePower[1]} tiles</li>
            <li>Flanking: ${storedShip.movePower[2]} tiles</li>

    <h4>Weapons:<h4>`;
    if(storedShip.Weapons[0].length>0){
    PieceInfo.innerHTML+=`<h5>Bow:</h5>\n
    <ul>`;
    }
    for(let i=0;i<storedShip.Weapons[0].length;i++){
    PieceInfo.innerHTML+=`<li>${storedShip.Weapons[0][i][2]}x ${storedShip.Weapons[0][i][1]}lb ${storedShip.Weapons[0][i][0]}</li>`;
    }
    PieceInfo.innerHTML+=`</ul>`
    if(storedShip.Weapons[1].length>0){
    PieceInfo.innerHTML+=`<h5>Port:</h5>\n
    <ul>`;
    }
    for(let i=0;i<storedShip.Weapons[1].length;i++){
    PieceInfo.innerHTML+=`<li>${storedShip.Weapons[1][i][2]}x ${storedShip.Weapons[1][i][1]}lb ${storedShip.Weapons[1][i][0]}</li>`;
    }
    PieceInfo.innerHTML+=`</ul>`
    if(storedShip.Weapons[2].length>0){
    PieceInfo.innerHTML+=`<h5>Starboard:</h5>\n
    <ul>`;
    }
    for(let i=0;i<storedShip.Weapons[2].length;i++){
    PieceInfo.innerHTML+=`<li>${storedShip.Weapons[2][i][2]}x ${storedShip.Weapons[2][i][1]}lb ${storedShip.Weapons[2][i][0]}</li>`;
    }
    PieceInfo.innerHTML+=`</ul>
    <h4>Ammo:</h4>\n
    <ul>`;
    for(let i=0;i<storedShip.ammo.length;i++){
        PieceInfo.innerHTML+=`<li>${storedShip.ammo[i][0]}: ${storedShip.ammo[i][2]}/${storedShip.ammo[i][1]}</li>`;
    }
    let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
    PieceInfo.innerHTML+=`</ul>
    <h4>Hitpoints:</h4>
    <ul>`;
    for(let i=0;i<storedShip.hitpoints.length;i++){
        PieceInfo.innerHTML+=`<li>${shipParts[i]}: ${storedShip.hitpoints[i][1]}/${storedShip.hitpoints[i][0]}</li>`;
    }
    PieceInfo.innerHTML+=`</ul>`
}

//delete all custom ships
function clearAllShipsForcefully(){
    for(let i = 0;i<100;i++){
        window.localStorage.setItem(`ship${i}`,null)
    }
    window.localStorage.setItem('numberOfShips',0)
    numberOfShips=0;
}

let deleteButton = document.getElementById("delBut");
deleteButton.addEventListener("click", clearAllShipsForcefully);
//deletes a single ship
function deleteOneShip (x) {
    for (let i = x; i < numberOfShips - 1; i++) {
        window.localStorage.setItem(`ship${i}`, window.localStorage.getItem(`ship${i+1}`));
    }
    window.localStorage.setItem('numberOfShips', numberOfShips-1);
    recountShips()
    redisplayShips();
}

//recount the number of ships you have
function recountShips(){
    if(window.localStorage.getItem('numberOfShips') == null){
        numberOfShips = 0;
    }else{
        numberOfShips = window.localStorage.getItem('numberOfShips');
    }
    window.localStorage.setItem('numberOfShips', numberOfShips);
}

//re create the list of ships
function redisplayShips(){
    ShipList = document.getElementById("ShipList");
    ShipList.innerHTML = "";
    listShips();
}