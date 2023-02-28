let activeTeam;
let activeBoat


function startGame(){
    startMovePhase()
    removeStart();
    activeTeam = 0;
    activeBoat = 0;
    teams[activeTeam].ships[activeBoat].selectColor();
    addProgress();
    setPhase("move");
    setTeam(activeTeam);
    setBoat(activeBoat);
    setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
    moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
}

function update(){
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
        setPhase("move");
        setTeam(activeTeam);
        setBoat(activeBoat);
        setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
        moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    }catch{}
}

function nextBoat(){
    moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    teams[activeTeam].ships[activeBoat].deselectColor();
    activeBoat++;
    if(activeBoat>teams[activeTeam].ships.length-1){
        activeTeam++;
        activeBoat = 0;
    }
    teams[activeTeam].ships[activeBoat].selectColor();
    setPhase("move");
    setTeam(activeTeam);
    setBoat(activeBoat);
    setMoveLeft(teams[activeTeam].ships[activeBoat].moveLeft);
    moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
}

function startMovePhase(){

}

function StartAttackPhase(){

}