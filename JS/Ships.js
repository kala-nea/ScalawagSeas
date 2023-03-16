

let pieceStorage = document.getElementById("PieceStorage");
let PieceInfo = document.getElementById("PieceInfo");
class Ship{
    constructor(x = 0,y = 0,team = 0,rotation = 0, movePower = 6){
        x=parseInt(x);
        y=parseInt(y);
        this.ship;
        this.shipx = x;
        this.shipy = y;
        this.prevX = x;
        this.prevY = y;
        //0=top,1=topright 2=bottomright etc until 5
        this.rotation = rotation;
        this.team = team 
        this.shipNum = ships.length;
        this.id = `Ship${ships.length}`
        this.makeShip();
        this.movePower = [movePower,movePower*1.5,movePower*2];
        this.moveLeft = 0;
        this.moveType = "Cruise";
        this.exhausted = false;
        this.crowsNest = false;
        
        
        this.name = this.id;
        this.tonnage = 45;
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
        this.Weapons= [[["Cannon",8,3,3]],[["Cannon",8,3,3]],[["Cannon",8,3,3]]];
        //[type,max,ammountLeft]
        this.ammo=[["Round Shot",100,50],["Grape Shot",20,1]];
        this.captanSkill = 4;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = [[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0]];

        ships.push(this);
    }
    
    pushThis(){
        ships.push(this);
    }

    makeShip(){
        let shipmake = document.createElement("img");
        shipmake.setAttribute("src","IMG/basic-ship.png");
        shipmake.setAttribute("class","Ship");
        shipmake.setAttribute("id",this.id);
        pieceStorage.append(shipmake);
        this.ship = document.getElementById(this.id);
        // this.ship.addEventListener("click",(e) => displayAShipsStats(e.target.id.split("Ship").pop()));
        this.ship.addEventListener("click",(e) => this.clicked());
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = document.getElementById(`col${this.shipx}row${this.shipy}`).getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
        this.ship.style.zIndex = "5"
        this.identifier = document.createElement("p");
        this.identifier.setAttribute("id",`IdentifierFor${this.id}`);
        this.identifier.setAttribute("class",`Identifier`);
        this.identifier.innerText = `Player ${this.team+1} Boat ${teams[this.team].ships.length+1}`;
        this.identifier.style.width = `${Math.max(desiredHex.width,75)}px`;
        this.identifier.style.left = `${desiredPos.left+desiredHex.width/2-Math.max(desiredHex.width/2,37.5)}px`;
        //this.identifier.style.height = `${desiredHex.height}px`;
        //this.identifier.style.width = `${desiredHex.width}px`;
        this.identifier.style.zIndex = "7"
        pieceStorage.append(this.identifier);
        this.identifier.style.top = `${desiredPos.top-desiredHex.height/1.8-this.identifier.getBoundingClientRect().height/2}px`;   //dooo the off set for 20x40
    }

    setStats(shipTemplate){
        this.movePower = shipTemplate.movePower;
        this.crowsNest = shipTemplate.crowsNest;
        this.name = shipTemplate.name;
        this.tonnage = shipTemplate.tonnage;
        this.weightclass =shipTemplate.weightclass;
        this.turnCost = shipTemplate.turnCost;
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= shipTemplate.Weapons;
        //[type,max,ammountLeft]
        this.ammo=shipTemplate.ammo;
        this.captanSkill = shipTemplate.captanSkill;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = shipTemplate.hitpoints;
    }
    
    
    moveShip(x,y){
        x=parseInt(x);
        y=parseInt(y);
        let desiredHex = document.getElementById(`col${x}row${y}`);
        let moveCost;
        if(desiredHex.getAttribute("Src") == "IMG/hex_island.png"){
            if(this.tonnage<40){
                moveCost = 3;
            }else{
                moveCost = 100000;
            }
        }else if(desiredHex.getAttribute("Src") == "IMG/hex_rocks.png"){
            if(this.tonnage<40){
                moveCost = 2;
            }else if(this.tonnage<60){
                moveCost = 3;
            }else{
                moveCost = 100000;
            }
        }else{
            moveCost = 1;
        }
        if(desiredHex.getAttribute("Src") == "IMG/hex_suply.png"){
            this.resuply();
        }
        if(this.moveLeft>=moveCost){
            this.shipx = x;
            this.shipy = y;
            this.moveLeft-=moveCost;
            this.adjustShip();
        }
    }
    
    
    adjustShip(){
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = desiredHex.getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.identifier.style.width = `${Math.max(desiredHex.width,75)}px`;
        this.identifier.style.left = `${desiredPos.left+desiredHex.width/2-Math.max(desiredHex.width/2,37.5)}px`;
        this.identifier.style.top = `${desiredPos.top-desiredHex.height/1.8-this.identifier.getBoundingClientRect().height/2}px`;
        //this.identifier.style.height = `${desiredHex.height}px`;
        //this.identifier.style.width = `${desiredHex.width}px`;
    }

    rotate(rotationAmmount){
        if(this.moveLeft>=this.turnCost){
            this.rotation += rotationAmmount;
            while(this.rotation>5||this.rotation<0){
                if(this.rotation>5){
                    this.rotation -=6
                }else{
                    this.rotation +=6
                }
            }
            this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
            this.moveLeft -=this.turnCost;
            setMoveLeft(this.moveLeft);
            moveShadent(this.shipx,this.shipy);
            moveShade(this.shipx,this.shipy);
        }
    }

    selectColor(){
        this.ship.style.filter = "brightness(150%)";
    }
    deselectColor(){
        this.ship.style.filter = "brightness(1)";
    }

    clicked(){
        if(firing&&this.id!=teams[activeTeam].ships[activeBoat].id){
            AttackThis(teams[activeTeam].ships[activeBoat], this)
        }else{
            this.displayStats();
        }
    }

    resuply(){
        for(let ammo of this.ammo){
            ammo[3]=ammo[2];
        }
    }

    displayStats(){
        PieceInfo = document.getElementById("PieceInfo");
        PieceInfo.innerText=`
        Name:${this.name}
        Tonnage:${this.tonnage}
        Weight Class:${this.weightclass}
        Captain Skill:${this.captanSkill}
        
        Movement Points:
            Cruising:${this.movePower[0]}
            Full Steam:${this.movePower[1]}
            Flanking:${this.movePower[2]}

        Weapons:
        `;
        if(this.Weapons[0].length>0){
        PieceInfo.innerText+=`Bow:
        `;
        }
        for(let i=0;i<this.Weapons[0].length;i++){
        PieceInfo.innerText+=`${this.Weapons[0][i][2]}x ${this.Weapons[0][i][1]}lb ${this.Weapons[0][i][0]}      ${this.Weapons[0][i][3]}/${this.Weapons[0][i][2]}
        `;
        }
        if(this.Weapons[1].length>0){
        PieceInfo.innerText+=`Port:
        `;
        }
        for(let i=0;i<this.Weapons[1].length;i++){
            // console.log(i);
            console.log(this.Weapons[1]);
        PieceInfo.innerText+=`${this.Weapons[1][i][2]}x ${this.Weapons[1][i][1]}lb ${this.Weapons[1][i][0]}      ${this.Weapons[1][i][3]}/${this.Weapons[1][i][2]}
        `;
        }
        if(this.Weapons[2].length>0){
        PieceInfo.innerText+=`Starboard:
        `;
        }
        for(let i=0;i<this.Weapons[2].length;i++){
        PieceInfo.innerText+=`${this.Weapons[2][i][2]}x ${this.Weapons[2][i][1]}lb ${this.Weapons[2][i][0]}      ${this.Weapons[2][i][3]}/${this.Weapons[2][i][2]}
        `;
        }
        PieceInfo.innerText+=`
        Ammo:
        `;
        for(let i=0;i<this.ammo.length;i++){
            PieceInfo.innerText+=`${this.ammo[i][0]}: ${this.ammo[i][2]}/${this.ammo[i][1]}
            `;
        }
        let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
        PieceInfo.innerText+=`
        Hitpoints:
        `;
        for(let i=0;i<this.hitpoints.length;i++){
            PieceInfo.innerText+=`${shipParts[i]}: ${this.hitpoints[i][1]-this.hitpoints[i][2]}/${this.hitpoints[i][0]}
            `;
        }
        let backButton = document.createElement("button");
        backButton.innerText = "Close"
        backButton.setAttribute("onClick", "clearPieceInfo()")
        PieceInfo.append(backButton);
        setTimeout((e) => adjustAll(),100)
    }
}




let ships = []
//let ship1 = new Ship(0,0,1,3)
//let ship2 = new Ship(0,0,2,3)
window.addEventListener('resize',adjustAll);
window.addEventListener("scroll",adjustAll);
setTimeout(adjustAll,100);


function adjustAll(){
    for(let ship of ships){
        ship.adjustShip();
    }
}

function readyAll(){
    for(let ship of ships){
        ship.exhausted = false;
        ship.prevX = ship.shipx;
        ship.prevY = ship.shipxy;
        for(side of ship.Weapons){
            for(weapon of side){
                weapon[3]=weapon[2];
            }
        }
    }
}

function damageAll(){
    for(let ship of ships){
        for(let part of ship.hitpoints){
            // console.log(part)
            // console.log(part[2])
            part[1]-=part[2];
            part[2] = 0;
        }
    }
}

function moveShip(x,y,shipNum){
    ships[shipNum].moveShip(x,y);
}

// function makeBoats(){
//     let x = 0;
//     let y = 0;
//     for(let i = 0;i<parseInt(document.getElementById("teams").value);i++){
//         let spaceAvailable = true;
//         let teamPlaceHoler = new Team();
//         for(let j = 0;j<parseInt(document.getElementById("boatCountPer").value);j++){
//             let done = false;
//             while(!done){
//                 spaceAvailable = true;
//                 x=Math.round(Math.random()*(boardWidth-1));
//                 y=Math.round(Math.random()*(boardHeight-1));
//                 HexTest = document.getElementById(`col${x}row${y}`);
//                 if(HexTest.getAttribute("Src") == "IMG/Hex.png"){
//                     for(let k = 0;k<ships.length;k++){
//                         if(ships[k].shipx==x&&ships[k].shipy==y){
//                             spaceAvailable = false;
//                         }
//                     }
//                     if(spaceAvailable){
//                         let shipPlaceHolder = new Ship(x,y,i,6,Math.round(Math.random()*5));
//                         teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
//                         done = true
//                     }
//                 }
//             }
//         }
//     }
//     // for(let i = 0;i<parseInt(document.getElementById("teams").value);i++){
//     //     let teamPlaceHoler = new Team();
//     //     for(let j = 0;j<parseInt(document.getElementById("boatCountPer").value);j++){
//     //         let shipPlaceHolder = new Ship(i*7,j*3,i);
//     //         teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
//     //     }
//     // }
//     removeBoatMake();
//     addStart();
// }

function makeBoats(){
    let x = 0;
    let y = 0;
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        let spaceAvailable = true;
        let teamPlaceHoler = new Team();
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            let done = false;
            while(!done){
                spaceAvailable = true;
                x=Math.round(Math.random()*(boardWidth-1));
                y=Math.round(Math.random()*(boardHeight-1));
                HexTest = document.getElementById(`col${x}row${y}`);
                if(HexTest.getAttribute("Src") == "IMG/Hex.png"){
                    for(let k = 0;k<ships.length;k++){
                        if(ships[k].shipx==x&&ships[k].shipy==y){
                            spaceAvailable = false;
                        }
                    }
                    if(spaceAvailable){
                        let shipPlaceHolder = new Ship(x,y,i,Math.round(Math.random()*5),6);
                        teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
                        done = true
                    }
                }
            }
        }
    }
    addStart();
}

function setAllStats(){
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            for(let k = 0;k<parseInt(window.localStorage.getItem('numberOfShips'));k++){
                if(document.getElementById(`Player${i}ShipSelect${j}`).value == JSON.parse(window.localStorage.getItem(`ship${k}`)).name){
                    teams[i].ships[j].setStats(JSON.parse(window.localStorage.getItem(`ship${k}`)))
                }
            }
        }
    }
    addStart();
}

function shipFromShipyard(){
    let shipPlaceHolder = new Ship(x,y,i,Math.round(Math.random()*5),6);
}

function displayAShipsStats(shipsNum){
    ships[shipsNum].displayStats();
}