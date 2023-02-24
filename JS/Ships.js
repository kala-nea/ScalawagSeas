
let pieceStorage = document.getElementById("PieceStorage");
class Ship{
    constructor(x = 0,y = 0,team = 0, movePower = 5){
        x=parseInt(x);
        y=parseInt(y);
        this.ship;
        this.shipx = x;
        this.shipy = y;
        this.team = team 
        this.shipNum = ships.length;
        this.id = `Ship${ships.length}`
        this.makeShip();
        this.movePower = movePower;
        this.moveLeft = movePower;
        this.exhausted = false;
        //this.ship.style.cssText = "#theDiv:before {background: black;}"
        ships.push(this);
    }
    
    
    makeShip(){
        let shipmake = document.createElement("img");
        shipmake.setAttribute("src","IMG/wellermanm.png");
        shipmake.setAttribute("class","Ship");
        shipmake.setAttribute("id",this.id);
        pieceStorage.append(shipmake);
        this.ship = document.getElementById(this.id);
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = document.getElementById(`col${this.shipx}row${this.shipy}`).getBoundingClientRect();
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.width = `${desiredHex.width}px`;
    }
    
    
    moveShip(x,y){
        x=parseInt(x);
        y=parseInt(y);
        if(this.moveLeft>0){
            let desiredHex = document.getElementById(`col${x}row${y}`);
            let desiredPos = desiredHex.getBoundingClientRect();
            this.ship.style.left = `${desiredPos.left}px`;
            this.ship.style.top = `${desiredPos.top}px`;
            this.ship.style.width = `${desiredHex.width}px`;
            this.shipx = x;
            this.shipy = y;
            this.moveLeft--;
        }
    }
    
    
    adjustShip(){
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = desiredHex.getBoundingClientRect();
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.width = `${desiredHex.width}px`;
    }

    selectColor(){
        this.ship.style.filter = "brightness(150%)";
    }
    deselectColor(){
        this.ship.style.filter = "brightness(100%)";
    }
}


let ships = []
//let ship1 = new Ship(0,0,1,3)
//let ship2 = new Ship(0,0,2,3)
window.addEventListener('resize',adjustAll);
setTimeout(adjustAll,100);

function adjustAll(){
    for(let ship of ships){
        ship.adjustShip();
    }
}

function moveShip(x,y,shipNum){
    ships[shipNum].moveShip(x,y);
}

function makeBoats(){
    for(let i = 0;i<parseInt(document.getElementById("teams").value);i++){
        let teamPlaceHoler = new Team();
        for(let j = 0;j<parseInt(document.getElementById("boatCountPer").value);j++){
            let shipPlaceHolder = new Ship(i*2,j*2,i,parseInt(document.getElementById("movePer").value));
            teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
        }
    }
    removeBoatMake();
    addStart();
}