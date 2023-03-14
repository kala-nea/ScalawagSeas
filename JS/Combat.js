let fireing = false;





function FireWeapon(side,weapon){
    if(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]>0){
        console.log("bang");
        teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]--;
        setAttackButtons();
    }
}


function InView(attacker, defender, side){
    let canHit = false;
    let sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    console.log("sourcex: ",sourcex);
    let sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;
    let targetx = defender.ship.getBoundingClientRect().left+defender.ship.getBoundingClientRect().width/2;
    console.log("targetx: ",targetx);
    let targety = defender.ship.getBoundingClientRect().top+defender.ship.getBoundingClientRect().height/2;
    let offsetx = targetx-sourcex
    console.log("offsetx: ",offsetx);
    let offsety = targety-sourcey
    console.log("offsety: ",offsety);
    if(side==2){
        console.log("mustBeat: ",-offsetx*1/1.5);
        if(Math.abs(offsety)<offsetx*1/1.5){
            canHit=true;
        }else{
            canHit=false
        }
    }
    if(side==1){
        console.log("mustBeat: ",-offsetx*1/1.5);
        if(Math.abs(offsety)<-offsetx*1/1.5){
            canHit=true;
        }else{
            canHit=false
        }
    }
    return canHit;
}