let activeTeam = 0;
let activeBoat=0;


function startGame(){
    if(shipsAreSelected()){
        setAllStats();
        removeStart();
        startMovePhase();
    }else{
        alert("Please select valid ships");
    }
}

function shipsAreSelected(){
    let selectedAll = true;
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            let isValid = false
            for(let k = 0;k<parseInt(window.localStorage.getItem('numberOfShips'));k++){
                if(document.getElementById(`Player${i}ShipSelect${j}`).value == JSON.parse(window.localStorage.getItem(`ship${k}`)).name){
                    isValid = true
                }
            }
            if(!isValid){
                selectedAll=false;
            }
        }
    }
    return selectedAll;
}

function updateMove(){
    try{
        teams[activeTeam].ships[activeBoat].deselectColor();
        // if(teams[activeTeam].ships[activeBoat].moveLeft==0){
        //     activeBoat++;
        // }
        // if(activeBoat>teams[activeTeam].ships.length-1){
        //     activeTeam++;
        //     activeBoat = 0;
        // }
        
        teams[activeTeam].ships[activeBoat].selectColor();
        repositionArrows()
        setPhase("move");
        setTeam(activeTeam);
        setBoat(activeBoat);
        setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
        if(teams[activeTeam].ships[activeBoat].moveLeft==0){
            moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        }else{
            moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        }
    }catch{}
}

function nextBoatMove(){
    teams[activeTeam].ships[activeBoat].deselectColor();
    moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    clearPieceInfo();
    clearGameControls();
    teams[activeTeam].ships[activeBoat].exhausted = true;
    activeBoat++;
    if(activeBoat>teams[activeTeam].ships.length-1){
        activeTeam++;
        activeBoat = 0;
    }
    if(activeTeam>=teams.length){
        StartAttackPhase();
    }else{
        setSpeedSelection();
        teams[activeTeam].ships[activeBoat].selectColor();
        teams[activeTeam].ships[activeBoat].moveLeft = 0;
        repositionArrows()
        setPhase("move");
        setTeam(activeTeam);
        setBoat(activeBoat);
        setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
        moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    }
}

function nextBoatAttack(){
    teams[activeTeam].ships[activeBoat].deselectColor();
    moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    clearPieceInfo();
    stopFiring();
    teams[activeTeam].ships[activeBoat].exhausted = true;
    activeBoat++;
    if(activeBoat>teams[activeTeam].ships.length-1){
        activeTeam++;
        activeBoat = 0;
    }
    if(activeTeam>=teams.length){
        startMovePhase();
    }else{
        setAttackButtons();
        teams[activeTeam].ships[activeBoat].selectColor();
        setPhase("attack");
        setTeam(activeTeam);
        setBoat(activeBoat);
    }
}

function setSpeed(speed){
    if(speed == 1){
        teams[activeTeam].ships[activeBoat].moveType = "Full";
    }else if(speed == 2){
        teams[activeTeam].ships[activeBoat].moveType = "Flank";
    }else{
        teams[activeTeam].ships[activeBoat].moveType = "Cruise";
    }
    teams[activeTeam].ships[activeBoat].moveLeft = teams[activeTeam].ships[activeBoat].movePower[speed];
    moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    clearGameControls();
    updateMove();
    repositionArrows();
}

function startMovePhase(){
    clearSidebar();
    clearGameControls()
    damageAll()
    activeTeam = 0;
    activeBoat = 0;
    readyAll();
    teams[activeTeam].ships[activeBoat].selectColor();
    teams[activeTeam].ships[activeBoat].moveLeft = 0;
    addMoveProgress();
    setSpeedSelection();
    repositionArrows();
    setPhase("move");
    setTeam(activeTeam);
    setBoat(activeBoat);
    setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
    moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
}

function StartAttackPhase(){
    //startMovePhase();
    firing = false;
    firingWeapon = "";
    firingSide="";
    selectedAmmo="";
    clearSidebar();
    // readyAll()
    activeTeam = 0;
    activeBoat = 0;
    addAttackProgress();
    setAttackButtons();
    teams[activeTeam].ships[activeBoat].selectColor();
    setPhase("attack");
    setTeam(activeTeam);
    setBoat(activeBoat);
}