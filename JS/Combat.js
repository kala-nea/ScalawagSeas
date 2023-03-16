let firing = false;

let firingWeapon;
let firingSide;
let selectedAmmo;
let angler= document.createElement("img")
angler.setAttribute("id", "angler");
angler.setAttribute("src","../IMG/angler.png")
pieceStorage.append(angler)
angler = document.getElementById("angler");
angler.style.visibility ="hidden";

window.addEventListener('resize',adjustAnglePNG);

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

function FireWeapon(side,weapon){
    if(firingSide==side&&firing == true){
        stopFiring();
    }else if(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]>0){
        firingWeapon = weapon;
        firingSide = side;
        firing = true;
        attacker = teams[activeTeam].ships[activeBoat];
        adjustAnglePNG();
        anglerIfy();
        setFiringWeapon(firingWeapon,firingSide);
        // console.log("bang");
        // teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]--;
        // setAttackButtons();
    }else{
        stopFiring();
    }
}

function adjustAnglePNG(){
    attacker = teams[activeTeam].ships[activeBoat];
    sourcex = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    sourcey = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

    angler.style.left = `${sourcex-1250}px`
    angler.style.top = `${sourcey-1250}px`
    angler.style.rotate = `${attacker.rotation*60}deg`
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
}


function selectAmmo(ammo){
    selectedAmmo = ammo;
    setFiringAmmo(ammo);
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
        let ammoRemains = false;
        let damage
        for(ammo of attacker.ammo){
            if(ammo[2]>0&&ammo[0]==selectedAmmo){
                ammoRemains = true;
                ammo[2]--;
            }
        }
        if(ammoRemains&&willItHit()){
            console.log("bang");
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
            teams[activeTeam].ships[activeBoat].Weapons[firingSide][firingWeapon][3]--;
            setAttackButtons();
        }
        if(teams[activeTeam].ships[activeBoat].Weapons[firingSide][firingWeapon][3]<=0){
            firing = false;
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
    if(firingSide==2){
        if(-35<angle&&angle<35){
            canHit=true;
        }else{
            canHit=false
        }
    }
    if(firingSide==1){
        if(145<angle||angle<-145){
            canHit=true;
        }else{
            canHit=false
        }
    }
    if(firingSide==0){
        if(70<angle&&angle<110){
            canHit=true;
        }else{
            canHit=false
        }
    }
    return canHit;
}

function willItHit(){
    return true
}

function Hit(damage,clusterSize,target){
    for(let i =0;i<Math.ceil(damage/clusterSize);i++){
        target.hitpoints[Math.floor(Math.random()*(target.hitpoints.length+1))][2] += damage-clusterSize*i;
    }
}