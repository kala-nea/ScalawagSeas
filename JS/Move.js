
let RightArrow = document.createElement("img");
let LeftArrow = document.createElement("img");
LeftArrow.src = "IMG/TurnArrow.png"
RightArrow.src = "IMG/TurnArrow.png"
LeftArrow.setAttribute("id","LeftArrow");
RightArrow.setAttribute("id","RightArrow");
LeftArrow.setAttribute("class","LeftArrow");
RightArrow.setAttribute("class","RightArrow");
LeftArrow.style.width = "0px"
RightArrow.style.width = "0px"
LeftArrow.style.zIndex = "6";
RightArrow.style.zIndex = "6";

RightArrow.addEventListener("click",(e) => rotateAShip(1))
LeftArrow.addEventListener("click",(e) => rotateAShip(-1))

pieceStorage.append(RightArrow);
pieceStorage.append(LeftArrow);


function moveShipClick(id){
    if(document.getElementById(id).style.filter == "brightness(2)"){
        let location = id.split("col").pop().split("row");
        unhighlight(id)
        moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
        moveShip(location[0],location[1],teams[activeTeam].ships[activeBoat].shipNum)
    }
}

function repositionArrows(){
    if(teams[activeTeam].ships[activeBoat].moveType != "Flank"){
        LeftArrow.style.visibility = "visible";
        RightArrow.style.visibility = "visible";
        let selectedBoat = document.getElementById(`col${teams[activeTeam].ships[activeBoat].shipx}row${teams[activeTeam].ships[activeBoat].shipy}`);
        let selectedBoatPos = document.getElementById(`col${teams[activeTeam].ships[activeBoat].shipx}row${teams[activeTeam].ships[activeBoat].shipy}`).getBoundingClientRect();
        let angle = teams[activeTeam].ships[activeBoat].rotation*60/180*Math.PI;
        LeftArrow.style.height = `${selectedBoat.height/3}px`;
        LeftArrow.style.width = `${selectedBoat.width/3}px`;
        LeftArrow.style.left = `${selectedBoatPos.left+selectedBoat.width/3+Math.cos(angle)*(-selectedBoat.width/4)+Math.sin(angle)*(selectedBoat.height/6+selectedBoat.height/3)}px`;
        LeftArrow.style.top = `${selectedBoatPos.top+selectedBoat.height/3-Math.cos(angle)*(selectedBoat.height/6+selectedBoat.height/3)+Math.sin(angle)*(-selectedBoat.width/4)}px`;
        LeftArrow.style.transform = `rotate(${angle}rad)`
        RightArrow.style.height = `${selectedBoat.height/3}px`;
        RightArrow.style.width = `${selectedBoat.width/3}px`;
        RightArrow.style.left = `${selectedBoatPos.left+selectedBoat.width/3-Math.cos(angle)*(-selectedBoat.width/4)+Math.sin(angle)*(selectedBoat.height/6+selectedBoat.height/3)}px`;
        RightArrow.style.top = `${selectedBoatPos.top+selectedBoat.height/3-Math.cos(angle)*(selectedBoat.height/6+selectedBoat.height/3)-Math.sin(angle)*(-selectedBoat.width/4)}px`;
        RightArrow.style.transform = `rotate(${angle}rad)  scaleX(-1)`
    }else{
        LeftArrow.style.visibility = "hidden";
        RightArrow.style.visibility = "hidden";
    }
}

function rotateAShip(dir){
    teams[activeTeam].ships[activeBoat].rotate(dir);
    repositionArrows();
}