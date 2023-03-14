let fireing = false;

let fireingWeapon;
let fireingSide;
let selectedAmmo;
let angler= document.createElement("img")
angler.setAttribute("id", "angler");
angler.setAttribute("src","../IMG/angler.png")
pieceStorage.append(angler)
angler = document.getElementById("angler");
angler.style.visibility ="hidden";

let sourcex
let sourcey 
let targetx 
let targety 
let offsetx 
let offsety 
let offset
let angle 




function FireWeapon(side,weapon){
    if(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]>0&&fireing == false){
        fireingWeapon = weapon;
        fireingSide = side;
        fireing = true;
        attacker = teams[activeTeam].ships[activeBoat];
        sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
        // console.log("sourcex: ",sourcex);
        sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

        angler.style.left = `${sourcex-1250}px`
        angler.style.top = `${sourcey-1250}px`
        angler.style.rotate = `${attacker.rotation*60}deg`
        angler.style.visibility ="visible";
        // console.log("bang");
        // teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]--;
        // setAttackButtons();
    }else{
        fireing = false;
        angler.style.visibility ="hidden";
    }
}

function selectAmmo(ammo){
    selectedAmmo = ammo;
}

let ratio =1.5


function AttackThis(attacker, defender){


    targetx = defender.ship.getBoundingClientRect().left+defender.ship.getBoundingClientRect().width/2;
    // console.log("targetx: ",targetx);
    targety = defender.ship.getBoundingClientRect().top+defender.ship.getBoundingClientRect().height/2;
    offsetx = targetx-sourcex
    // console.log("offsetx: ",offsetx);
    offsety = targety-sourcey
    // console.log("offsety: ",offsety);
    offset = Math.sqrt((offsetx^2)+(offsety^2))
    // console.log("offset: ",offset);
    angle = -Math.atan2(offsety,offsetx)/Math.PI*180;
    angle += teams[activeTeam].ships[activeBoat].rotation*60


    if(InView(attacker, defender)){
        console.log("bang");
        teams[activeTeam].ships[activeBoat].Weapons[fireingSide][fireingWeapon][3]--;
        setAttackButtons();
        if(teams[activeTeam].ships[activeBoat].Weapons[fireingSide][fireingWeapon][3]<=0){
            fireing = false;
            angler.style.visibility ="hidden";
        }
    }
}

function InView(attacker, defender){
    let canHit = false;

    if (angle>180){
        angle-=360;
    }
    if (angle<-180){
        angle+=360;
    }
    // console.log("angle: ",angle);
    if(fireingSide==2){
        if(-35<angle&&angle<35){
            canHit=true;
        }else{
            canHit=false
        }
    }
    if(fireingSide==1){
        if(145<angle||angle<-145){
            canHit=true;
        }else{
            canHit=false
        }
    }
    if(fireingSide==0){
        if(70<angle&&angle<110){
            canHit=true;
        }else{
            canHit=false
        }
    }
    return canHit;
}