let firing = false;

let firingWeapon;
let firingSide;
let selectedAmmo;
let attacker;
let hexRef
let angler= document.createElement("img")
angler.setAttribute("id", "angler");
// angler.setAttribute("src","../IMG/angler.png")
pieceStorage.append(angler)
let fireAnim= document.createElement("img")
fireAnim.setAttribute("id", "fireAnim");
fireAnim.setAttribute("src","../IMG/cannonFlash.gif")
pieceStorage.append(fireAnim)

let hitAnim= document.createElement("img")
hitAnim.setAttribute("id", "hitAnim");
hitAnim.setAttribute("src","../IMG/explosion_impact.gif")
pieceStorage.append(hitAnim)

angler = document.getElementById("angler");
fireAnim = document.getElementById("fireAnim");
hitAnim = document.getElementById("hitAnim");
angler.style.visibility ="hidden";

window.addEventListener('resize',adjustAnglePNG);
window.addEventListener('scroll',adjustAnglePNG);

window.addEventListener('resize',adjustFirePNG);
window.addEventListener('scroll',adjustFirePNG);

let sourcex
let sourcey 
let targetx 
let targety 
let offsetx 
let offsety 
let offset
let angle 

let weaponDamages=[[5,10,15,20,25,30,35,40,45],[10,20,30,0,0,0,0,0,0],[0,0,0,25,30,35,0,0,0],[0,0,0,0,0,0,50,55,60]];
let weaponTypes=["Cannon","Long Nine","Carronade","Paixhan"];
let ammoRanges=[[[9,18,27],[8,16,24],[7,14,21],[6,12,18],[5,10,15],[4,8,12],[3,6,9],[2,4,6],[1,2,3]],[[9,18,36],[8,16,32],[7,14,28],[6,12,24],[5,10,20],[4,8,16],[3,6,12],[2,4,8],[1,2,4]],[[9,11,13],[8,10,12],[7,9,11],[6,8,10],[5,7,9],[4,6,8],[3,5,7],[2,4,6],[1,3,5]]]
let ammoTypes = ["Round Shot","Grape Shot","Chain Shot"];
let poundages = [6,8,9,12,18,24,32,36,42];

let timeOutToStop;

function FireWeapon(side,weapon){
    if(firingSide==side&&firingWeapon==weapon&&firing == true){
        stopFiring();
        activeAllAmmo();
    }else if(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]>0){
        firingWeapon = weapon;
        firingSide = side;
        firing = true;
        attacker = teams[activeTeam].ships[activeBoat];
        anglerIfy();
        setFiringWeapon(firingWeapon,firingSide);

        switch(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][0]){
            case "Cannon":
            break;
            case "Long Nine":
                document.getElementById("SelectAmmoChain Shot").style.visibility = "hidden"
                if(selectedAmmo=="Chain Shot"){
                    selectAmmo("");
                }
            break;
            case "Carronade":
                document.getElementById("SelectAmmoGrape Shot").style.visibility = "hidden"
                if(selectedAmmo=="Grape Shot"){
                    selectAmmo("");
                }
            break;
            case "Paixhan":
                document.getElementById("SelectAmmoChain Shot").style.visibility = "hidden"
                document.getElementById("SelectAmmoGrape Shot").style.visibility = "hidden"
                if(selectedAmmo=="Grape Shot"){
                    selectAmmo("");
                }else if(selectedAmmo=="Chain Shot"){
                    selectAmmo("");
                }
            break;
            default:
            break;
        }
        // console.log("bang");
        // teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]--;
        // setAttackButtons();
    }else{
        stopFiring();
        activeAllAmmo();
    }
}

function activeAllAmmo(){
    document.getElementById("SelectAmmoRound Shot").style.visibility = "visible"
    document.getElementById("SelectAmmoGrape Shot").style.visibility = "visible"
    document.getElementById("SelectAmmoChain Shot").style.visibility = "visible"
}

function adjustAnglePNG(){
    attacker = teams[activeTeam].ships[activeBoat];
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

    let range;

    angler.style.left = `${sourcex-1250}px`
    angler.style.top = `${sourcey-1250}px`
    angler.style.rotate = `${attacker.rotation*60}deg`
    try{
        for(let i=0;i<ammoTypes.length;i++){
            if(ammoTypes[i]==selectedAmmo){
                for(let j=0;j<poundages.length;j++){
                    if(poundages[j]==attacker.Weapons[firingSide][firingWeapon][1]){
                        // console.log(`set range: ${ammoRanges[i][j][2]}`)
                        range = ammoRanges[i][j][2];
                    }
                }
            }
        }
        if(range==null){
            range=30;
        }
        // console.log(`range: ${range}`)
        range = range*((hexRef.height*0.75));
        angler.style.width = `${range*2}px`
        angler.style.left = `${sourcex-range}px`
        angler.style.top = `${sourcey-range}px`
    }catch{}
}

function adjustFirePNG(){
    attacker = teams[activeTeam].ships[activeBoat];
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;
    let rotation = (attacker.rotation*60)/180*Math.PI;

    // console.log(attacker.ship.width);
    // fireAnim.style.left = `${sourcex-fireAnim.width/2}px`;
    // fireAnim.style.top = `${sourcey-fireAnim.height/2}px`;
    if(firingSide==1){
        fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(rotation)*(-attacker.ship.width/1.2)+Math.sin(rotation)*(0)}px`
        fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(rotation)*(0)+Math.sin(rotation)*(-attacker.ship.width/1.2)}px`
        fireAnim.style.rotate = `${attacker.rotation*60}deg`
        fireAnim.style.transform = "scaleX(-1)";
    }else if(firingSide==0){
        fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(-rotation)*(0)+Math.sin(-rotation)*(-hexRef.height)}px`
        fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(-rotation)*(-hexRef.height)+Math.sin(-rotation)*(0)}px`
        fireAnim.style.rotate = `${attacker.rotation*60-90}deg`
        fireAnim.style.transform = "scaleX(1)";
    }else{
        fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(rotation)*(attacker.ship.width/1.2)+Math.sin(rotation)*(0)}px`
        fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(rotation)*(0)+Math.sin(rotation)*(attacker.ship.width/1.2)}px`
        fireAnim.style.rotate = `${attacker.rotation*60}deg`
        fireAnim.style.transform = "scaleX(1)";
    }
}

function adjustHitPNG(defender){
    // console.log("placing hit2");
    attacker = teams[activeTeam].ships[activeBoat];
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    sourcex = defender.ship.getBoundingClientRect().left+defender.ship.getBoundingClientRect().width/2;
    sourcey = defender.ship.getBoundingClientRect().top+defender.ship.getBoundingClientRect().height/2;

    attackx = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    attacky = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

    offsetx = sourcex-attackx
    // console.log("offsetx: ",offsetx);
    offsety = sourcey-attacky
    // rotationHit = angle-30-90-(teams[activeTeam].ships[activeBoat].rotation*60)
    rotationHit = Math.atan2(offsety,offsetx)/Math.PI*180+30;
    while(rotationHit>180||rotationHit<-180){
        if(rotationHit>180){
            rotationHit-=360;
        }
        if (rotationHit<-180){
            rotationHit+=360;
        }
    }
    console.log(`angle: ${rotationHit}`);
    hitAnim.style.left = `${sourcex-hitAnim.width/2}px`;
    hitAnim.style.top = `${sourcey-hitAnim.height/2}px`;
    hitAnim.style.rotate = `${rotationHit}deg`
    // if(firingSide==1){
    //     fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(rotation)*(-attacker.ship.width/1.2)+Math.sin(rotation)*(0)}px`
    //     fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(rotation)*(0)+Math.sin(rotation)*(-attacker.ship.width/1.2)}px`
    //     fireAnim.style.rotate = `${attacker.rotation*60}deg`
    //     fireAnim.style.transform = "scaleX(-1)";
    // }else if(firingSide==0){
    //     fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(-rotation)*(0)+Math.sin(-rotation)*(-hexRef.height)}px`
    //     fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(-rotation)*(-hexRef.height)+Math.sin(-rotation)*(0)}px`
    //     fireAnim.style.rotate = `${attacker.rotation*60-90}deg`
    //     fireAnim.style.transform = "scaleX(1)";
    // }else{
    //     fireAnim.style.left = `${sourcex-fireAnim.width/2+Math.cos(rotation)*(attacker.ship.width/1.2)+Math.sin(rotation)*(0)}px`
    //     fireAnim.style.top = `${sourcey-fireAnim.height/2+Math.cos(rotation)*(0)+Math.sin(rotation)*(attacker.ship.width/1.2)}px`
    //     fireAnim.style.rotate = `${attacker.rotation*60}deg`
    //     fireAnim.style.transform = "scaleX(1)";
    // }
}


function stopFiring(){
    firing = false;
    setFiringWeaponRaw("");
    setFiringAmmo("");
    angler.style.visibility ="hidden";
}


function anglerIfy(){
    angler.style.visibility ="visible";
    if(firingSide==0){
        angler.setAttribute("src","../IMG/targetting/target_40.png");
    }else{
        angler.setAttribute("src","../IMG/targetting/target_70.png");
    }

    if(firingSide==1){
        angler.style.transform = "scaleX(-1)";
    }else{
        angler.style.transform = "scaleX(1)";
    }
    adjustAnglePNG()
}

function fireIfy(){
    fireAnim.style.visibility ="visible";
    fireAnim.setAttribute("src","../IMG/cannonFlash.gif")
    adjustFirePNG()
}

function fireIfNt(){
    fireAnim.style.visibility ="hidden";
}

function hitIfy(defender){
    // console.log("placing hit1");
    hitAnim.style.visibility ="visible";
    hitAnim.setAttribute("src","../IMG/indicator_miss.png")
    adjustHitPNG(defender)
}

function hitIfNt(){
    hitAnim.style.visibility ="hidden";
}


function selectAmmo(ammo){
    selectedAmmo = ammo;
    setFiringAmmo(ammo);
    adjustAnglePNG()
}

let ratio =1.5


function AttackThis(attacker, defender){

    targetx = defender.ship.getBoundingClientRect().left+defender.ship.getBoundingClientRect().width/2;
    // console.log("targetx: ",targetx);
    targety = defender.ship.getBoundingClientRect().top+defender.ship.getBoundingClientRect().height/2;

    sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

    offsetx = targetx-sourcex
    // console.log("offsetx: ",offsetx);
    offsety = targety-sourcey
    // console.log("offsety: ",offsety);
    offset = Math.sqrt((offsetx*offsetx)+(offsety*offsety))
    // console.log("sqrtnt",(offsetx*offsetx)+(offsety*offsety))
    // console.log("offset: ",offset);
    angle = -Math.atan2(offsety,offsetx)/Math.PI*180;
    angle += teams[activeTeam].ships[activeBoat].rotation*60
    console.log(`*: ${angle}`);


    if(InView(attacker, defender)){
        console.log("clicked");
        let ammoRemains = false;
        let damage
        for(ammo of attacker.ammo){
            if(ammo[2]>0&&ammo[0]==selectedAmmo){
                ammoRemains = true;
                ammo[2]--;
            }
        }
        console.log("bang");
        clearTimeout(timeOutToStop);
        fireIfy();
        setTimeout(fireIfNt,1000);
        hitIfy(defender);
        timeOutToStop = setTimeout(hitIfNt,1500);
        if(ammoRemains&&willItHit(attacker,defender)){
            // console.log("placing hit0");
            hitAnim.setAttribute("src","../IMG/explosion_impact.gif")
            for(let i=0;i<weaponTypes.length;i++){
                if(weaponTypes[i]==attacker.Weapons[firingSide][firingWeapon][0]){
                    for(let j=0;j<poundages.length;j++){
                        if(poundages[j]==attacker.Weapons[firingSide][firingWeapon][1]){
                            damage = weaponDamages[i][j]
                        }
                    }
                }
            }
            if(selectedAmmo==ammoTypes[1]){
                Hit(damage,5,defender);
            }else if(selectedAmmo==ammoTypes[2]){
                Hit(damage,Math.round(damage/2),defender);
            }else{
                Hit(damage,10000,defender);
            }
        }
        teams[activeTeam].ships[activeBoat].Weapons[firingSide][firingWeapon][3]--;
            setAttackButtons();
        if(teams[activeTeam].ships[activeBoat].Weapons[firingSide][firingWeapon][3]<=0){
            firing = false;
            angler.style.visibility ="hidden";
        }
    }
}

function InView(attacker, defender){
    let canHit = true;
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    if (angle>180){
        angle-=360;
    }
    if (angle<-180){
        angle+=360;
    }
    // console.log("angle: ",angle);
    if(firingSide==2){
        if(-35<angle&&angle<35){
        }else{
            canHit=false
        }
    }
    if(firingSide==1){
        if(145<angle||angle<-145){
        }else{
            canHit=false
        }
    }
    if(firingSide==0){
        if(70<angle&&angle<110){
        }else{
            canHit=false
        }
    }

    try{
        for(let i=0;i<ammoTypes.length;i++){
            if(ammoTypes[i]==selectedAmmo){
                for(let j=0;j<poundages.length;j++){
                    if(poundages[j]==attacker.Weapons[firingSide][firingWeapon][1]){
                        range = ammoRanges[i][j];
                        // console.log(`offset ${offset}`);
                        // console.log(`short ${range[0]*((hexRef.height*0.75))}`);
                        // console.log(`med ${range[1]*((hexRef.height*0.75))}`);
                        // console.log(`long ${range[2]*((hexRef.height*0.75))}`);
                    }
                }
            }
        }
        range = range[2]*((hexRef.height*0.75));
    }catch{}
    try{
        if(offset<range){
        }else{
            canHit=false
        }
    }catch{
        canHit=false
    }

    return canHit;
}

function willItHit(attacker,defender){
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    // console.log(`team ${activeTeam}`);
    // console.log(`boat ${activeBoat}`);
    // console.log(teams[activeTeam].ships[activeBoat].captainSkill);
    let ToBeat = attacker.captainSkill;
    for(let i=0;i<ammoTypes.length;i++){
        if(ammoTypes[i]==selectedAmmo){
            for(let j=0;j<poundages.length;j++){
                if(poundages[j]==attacker.Weapons[firingSide][firingWeapon][1]){
                    range = ammoRanges[i][j];
                    // console.log(`short ${range[0]*((hexRef.height*0.75))}`);
                    // console.log(`med ${range[1]*((hexRef.height*0.75))}`);
                    // console.log(`long ${range[2]*((hexRef.height*0.75))}`);
                    console.log(`dist: ${offset}`)
                    if(offset<range[0]*((hexRef.height*0.75))){
                        ToBeat+=0;
                    }else if(offset<range[1]*((hexRef.height*0.75))){
                        ToBeat+=2;
                    }else if(offset<range[2]*((hexRef.height*0.75))){
                        ToBeat+=4;
                    }else{
                        ToBeat+=8;
                    }
                }
            }
        }
    }
    console.log(`move type: ${attacker.moveType}`)
    if(attacker.moveType == "Flank"){
        ToBeat+=3;
    }else if(attacker.moveType =="Full"){
        ToBeat+=2;
    }else if(attacker.moveType =="Cruise"){
        ToBeat+=1;
    }
    let traveledX = defender.shipx-defender.prevX
    let traveledY = defender.shipy-defender.prevY
    let distTraveled = Math.sqrt(traveledX*traveledX+traveledY*traveledY)
    console.log(`dist traveled: ${distTraveled}`)
    // console.log(distTraveled);
    if(distTraveled>18){
        ToBeat+=6;
    }else if(distTraveled>15){
        ToBeat+=5;
    }else if(distTraveled>12){
        ToBeat+=4;
    }else if(distTraveled>9){
        ToBeat+=3;
    }else if(distTraveled>6){
        ToBeat+=2;
    }else if(distTraveled>3){
        ToBeat+=1;
    }


    defhex = document.getElementById(`col${defender.shipx}row${defender.shipy}`);
    if(defhex.getAttribute("Src") == "IMG/hex_island.png"){
        ToBeat+=2;
    }else if(defhex.getAttribute("Src") == "IMG/hex_rocks.png"){
        ToBeat+=1;
    }
    console.log(`Must beat: ${ToBeat}`);
    return ToBeat<Math.round(Math.random()*12);
}

function Hit(damage,clusterSize,target){
    for(let i =0;i<Math.ceil(damage/clusterSize);i++){
        let location = Math.floor(Math.random()*(target.hitpoints.length))
        if(location==6&&selectedAmmo=="Chain Shot"){
            target.hitpoints[location][2] += (damage-clusterSize*i)*2.5;
        }else{
            target.hitpoints[location][2] += damage-clusterSize*i;
        }
    }
}