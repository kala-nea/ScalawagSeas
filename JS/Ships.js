

let pieceStorage = document.getElementById("PieceStorage");
let PieceInfo = document.getElementById("PieceInfo");
class Ship{
    constructor(x = 0,y = 0,team = 0, movePower = 6){
        x=parseInt(x);
        y=parseInt(y);
        this.ship;
        this.shipx = x;
        this.shipy = y;
        //0=top,1=topright 2=bottomright etc until 5
        this.rotation = 0;
        this.team = team 
        this.shipNum = ships.length;
        this.id = `Ship${ships.length}`
        this.makeShip();
        this.movePower = [movePower,movePower*1.5,movePower*2];
        this.moveLeft = movePower;
        this.exhausted = false;
        this.crowsNest = false;
        
        
        this.name = this.id;
        this.tonnage = 75;
        this.weightclass = "feather";
        if(this.tonnage<40){
            this.turnCost = 0;
        }else if(this.tonnage<60){
            this.turnCost = 1;
        }else if(this.tonnage<80){
            this.turnCost = 2;
        }else {
            this.turnCost = 3;
        }
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= [[["Cannon",8,3,3]],[["Cannon",8,3,3]],[["Cannon",8,3,3]]];
        //[type,max,ammountLeft]
        this.ammo=[["Round Shot",100,50],["Grapeshot",20,10]];
        this.captanSkill = 4;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = [[10,5,0],[10,5,0],[10,5,0],[10,5,0],[10,5,0],[10,5,0],[10,5,0],[10,5,0]];

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
        this.ship.addEventListener("click",(e) => displayAShipsStats(e.target.id.split("Ship").pop()));
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = document.getElementById(`col${this.shipx}row${this.shipy}`).getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.zIndex = "5"
        this.identifier = document.createElement("p");
        this.identifier.setAttribute("id",`IdentifierFor${this.id}`);
        this.identifier.setAttribute("class",`Identifier`);
        this.identifier.innerText = `Team${this.team+1} Boat ${teams[this.team].ships.length}`;
        this.identifier.style.width = `${Math.max(desiredHex.width,75)}px`;
        this.identifier.style.left = `${desiredPos.left+desiredHex.width/2-Math.max(desiredHex.width/2,37.5)}px`;
        //this.identifier.style.height = `${desiredHex.height}px`;
        //this.identifier.style.width = `${desiredHex.width}px`;
        this.identifier.style.zIndex = "7"
        pieceStorage.append(this.identifier);
        this.identifier.style.top = `${desiredPos.top-desiredHex.height/1.8-this.identifier.getBoundingClientRect().height/2}px`;   //dooo the off set for 20x40
    }
    
    
    moveShip(x,y){
        x=parseInt(x);
        y=parseInt(y);
        if(this.moveLeft>0){
            this.shipx = x;
            this.shipy = y;
            this.moveLeft--;
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
        this.ship.style.filter = "brightness(100%)";
    }

    displayStats(){
        PieceInfo = document.getElementById("PieceInfo");
        PieceInfo.innerText=`
        Name:${this.name}
        Tonnage:${this.tonnage}
        Weight Class:${this.weightclass}
        Captain Skill:${this.captanSkill}
      
        Movement Points:
            Crusing:${this.movePower[0]}
            Full Steam:${this.movePower[1]}
            Flanking:${this.movePower[2]}

        Weapons:
          `;
        if(this.Weapons[0].length>0){
        PieceInfo.innerText+=`Bow:
        `;
        }
        for(let i=0;i<this.Weapons[0].length;i++){
        PieceInfo.innerText+=`${this.Weapons[0][i][2]}x ${this.Weapons[0][i][1]}lb ${this.Weapons[0][i][0]}
        `;
        }
        if(this.Weapons[1].length>0){
        PieceInfo.innerText+=`Port:
        `;
        }
        for(let i=0;i<this.Weapons[1].length;i++){
        PieceInfo.innerText+=`${this.Weapons[1][i][2]}x ${this.Weapons[1][i][1]}lb ${this.Weapons[1][i][0]}
        `;
        }
        if(this.Weapons[2].length>0){
        PieceInfo.innerText+=`Starboard:
        `;
        }
        for(let i=0;i<this.Weapons[2].length;i++){
        PieceInfo.innerText+=`${this.Weapons[2][i][2]}x ${this.Weapons[2][i][1]}lb ${this.Weapons[2][i][0]}
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
            PieceInfo.innerText+=`${shipParts[i]}: ${this.hitpoints[i][1]}/${this.hitpoints[i][0]}
            `;
        }
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
    }
}

function moveShip(x,y,shipNum){
    ships[shipNum].moveShip(x,y);
}

function makeBoats(){
    for(let i = 0;i<parseInt(document.getElementById("teams").value);i++){
        let teamPlaceHoler = new Team();
        for(let j = 0;j<parseInt(document.getElementById("boatCountPer").value);j++){
            let shipPlaceHolder = new Ship(i*7,j*3,i);
            teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
        }
    }
    removeBoatMake();
    addStart();
}

function displayAShipsStats(shipsNum){
    ships[shipsNum].displayStats();
}