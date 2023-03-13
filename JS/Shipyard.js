if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);

ShipList = document.getElementById("ShipList");
for(let i =0;i<numberOfShips;i++){
    let storedShip = JSON.parse(window.localStorage.getItem(`ship${i}`));
    let shipItem = document.createElement("li");
    shipItem.setAttribute("id",`Ship${i}`);
    shipItem.setAttribute("class","ShipyardListShip");
    shipItem.innerText = storedShip.name;
    shipItem.addEventListener("click",(e) =>displayStats(`Ship${i}`));
    console.log(storedShip.name);
    ShipList.append(shipItem);
}



function displayStats(id){
    let PieceInfo = document.getElementById("ShipInfo");
    let shipNum = id.split("Ship").pop();
    let storedShip = JSON.parse(window.localStorage.getItem(`ship${shipNum}`));
    PieceInfo.innerText=`
    Name:${storedShip.name}
    Tonnage:${storedShip.tonnage}
    Weight Class:${storedShip.weightclass}
    Captain Skill:${storedShip.captanSkill}
  
    Movement Points:
        Crusing:${storedShip.movePower[0]}
        Full Steam:${storedShip.movePower[1]}
        Flanking:${storedShip.movePower[2]}

    Weapons:
      `;
    if(storedShip.Weapons[0].length>0){
    PieceInfo.innerText+=`Bow:
    `;
    }
    for(let i=0;i<storedShip.Weapons[0].length;i++){
    PieceInfo.innerText+=`${storedShip.Weapons[0][i][2]}x ${storedShip.Weapons[0][i][1]}lb ${storedShip.Weapons[0][i][0]}
    `;
    }
    if(storedShip.Weapons[1].length>0){
    PieceInfo.innerText+=`Port:
    `;
    }
    for(let i=0;i<storedShip.Weapons[1].length;i++){
    PieceInfo.innerText+=`${storedShip.Weapons[1][i][2]}x ${storedShip.Weapons[1][i][1]}lb ${storedShip.Weapons[1][i][0]}
    `;
    }
    if(storedShip.Weapons[2].length>0){
    PieceInfo.innerText+=`Starboard:
    `;
    }
    for(let i=0;i<storedShip.Weapons[2].length;i++){
    PieceInfo.innerText+=`${storedShip.Weapons[2][i][2]}x ${storedShip.Weapons[2][i][1]}lb ${storedShip.Weapons[2][i][0]}
    `;
    }
    PieceInfo.innerText+=`
    Ammo:
    `;
    for(let i=0;i<storedShip.ammo.length;i++){
        PieceInfo.innerText+=`${storedShip.ammo[i][0]}: ${storedShip.ammo[i][2]}/${storedShip.ammo[i][1]}
        `;
    }
    let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
    PieceInfo.innerText+=`
    Hitpoints:
    `;
    for(let i=0;i<storedShip.hitpoints.length;i++){
        PieceInfo.innerText+=`${shipParts[i]}: ${storedShip.hitpoints[i][1]}/${storedShip.hitpoints[i][0]}
        `;
    }
}