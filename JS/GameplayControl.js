let activeTeam = 0;
let activeBoat=0;

//starts the game
function startGame(){
    if(shipsAreSelected()){
        setAllStats();
        removeStart();
        startMovePhase();
    }else{
        alert("Please select valid ships");
    }
}

// makes sure that the players select actual ships when selecting from their custom ships
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

//Updates the board during the move phase
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
        setPhase("Move");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
        setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
        if(teams[activeTeam].ships[activeBoat].moveLeft==0){
            moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        }else{
            moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        }
    }catch{}
}

// selects the next boat during the move phase
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
        if(teams[activeTeam].ships[activeBoat].alive==false){
            nextBoatMove()
        }else{
            setSpeedSelection();
            teams[activeTeam].ships[activeBoat].selectColor();
            teams[activeTeam].ships[activeBoat].moveLeft = 0;
            repositionArrows()
            setPhase("Move");
            setTeam(teams[activeTeam].teamNum);
            setBoat(activeBoat);
            setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
            moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        }
    }
}

// selects the next boat during the attack phase
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
        if(teams[activeTeam].ships[activeBoat].alive==false){
            nextBoatAttack()
        }else{
            setAttackButtons();
            teams[activeTeam].ships[activeBoat].selectColor();
            setPhase("Attack");
            setTeam(teams[activeTeam].teamNum);
            setBoat(activeBoat);
        }
    }

}

// selects the speed of the boat during the move phase
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

// starts the movement phase
function startMovePhase(){
    shuffleTeams();
    clearSidebar();
    clearGameControls()
    damageAll()
    activeTeam = 0;
    activeBoat = 0;
    readyAll();
    addMoveProgress();
    if(teams[activeTeam].ships[activeBoat].alive==false){
        nextBoatMove()
    }else{
        setSpeedSelection();
        teams[activeTeam].ships[activeBoat].selectColor();
        teams[activeTeam].ships[activeBoat].moveLeft = 0;
        repositionArrows()
        setPhase("Move");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
        setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
        moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    }
    
}

// starts the attack phase
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
    if(teams[activeTeam].ships[activeBoat].alive==false){
        nextBoatAttack()
    }else{
        setAttackButtons();
        teams[activeTeam].ships[activeBoat].selectColor();
        setPhase("Attack");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
    }
}