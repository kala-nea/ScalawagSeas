

let pieceStorage = document.getElementById("PieceStorage");
let PieceInfo = document.getElementById("PieceInfo");
class Ship{
    constructor(x = 0,y = 0,team = 0, movePower = 5){
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
        this.identifier = document.createElement("p");
        this.identifier.innerText = `Team${this.team} Boat`;

        this.name;
        this.tonnage;
        this.weightclass;
        //bow,port,starboard
        this.Weapons= [[],[],[]];
        //[type,max,ammountLeft]
        this.ammo=[[],[]];
        this.captanSkill;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft]
        this.hitpoints = [[],[],[],[],[],[],[],[]];

        ships.push(this);
    }
    
    
    makeShip(){
        let shipmake = document.createElement("img");
        shipmake.setAttribute("src","IMG/basic-ship.png");
        shipmake.setAttribute("class","Ship");
        shipmake.setAttribute("id",this.id);
        pieceStorage.append(shipmake);
        this.ship = document.getElementById(this.id);
        this.ship.addEventListener("click",this.displayStats);
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = document.getElementById(`col${this.shipx}row${this.shipy}`).getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.zIndex = "5"
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
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
    }

    rotate(rotationAmmount){
        this.rotation += rotationAmmount;
        while(this.rotation>5||this.rotation<0){
            if(this.rotation>5){
                this.rotation -=6
            }else{
                this.rotation +=6
            }
        }
        this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
        moveShadent(this.shipx,this.shipy);
        moveShade(this.shipx,this.shipy);
    }

    selectColor(){
        this.ship.style.filter = "brightness(150%)";
    }
    deselectColor(){
        this.ship.style.filter = "brightness(100%)";
    }

    displayStats(){
        PieceInfo = document.getElementById("PieceInfo");
        console.log("doint");
        PieceInfo.innerText=this;
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
            let shipPlaceHolder = new Ship(i*2,j*2,i,parseInt(document.getElementById("movePer").value));
            teams[i].ships.push(ships[shipPlaceHolder.shipNum]);
        }
    }
    removeBoatMake();
    addStart();
}