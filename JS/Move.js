

function moveShipClick(id){
    if(document.getElementById(id).style.filter == "brightness(0.5)"){
        let location = id.split("col").pop().split("row");
        unhighlight(id)
        moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        moveShip(location[0],location[1],teams[activeTeam].ships[activeBoat].shipNum)
    }
}