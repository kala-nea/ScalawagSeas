
// let BoardXIn = document.getElementById("BoardX");
// let BoardYIn = document.getElementById("BoardY");
let BoardXIn = window.localStorage.getItem('BoardX');
let BoardYIn = window.localStorage.getItem('BoardY');
let Board = document.getElementById("Board");

let Hex;
let HexColumn;
let HexGrid;

let boardWidth = null;
let boardHeight= null;
let boardBuilt = false;

let islandCount = window.localStorage.getItem('IslandCount');
let rockCount =window.localStorage.getItem('RockCount');
//BoardXIn.addEventListener('change',(e) => MakeBoard());
//BoardYIn.addEventListener('change',(e) => MakeBoard());
makeBoardButton = document.getElementById("makeBoard");

window.addEventListener('resize',resizeBoard);

setTimeout(MakeBoard,1);
setTimeout((e) =>makeBoats(),200);
setTimeout((e) => adjustAll(),300)
setTimeout((e) => adjustAll(),3000)

function MakeBoard(){
    if(boardHeight==null||boardWidth==null){
        try{
            if(parseInt(BoardXIn)!=(Math.min(Math.max(parseInt(BoardXIn),10),50))){
                boardWidth = (Math.min(Math.max(parseInt(BoardXIn),10),50));
                alert(`Width out of bounds, adjusted to ${boardWidth}`);
            }else{
                boardWidth = BoardXIn;
            }
        }catch{}
        try{
            if(parseInt(BoardYIn)!=(Math.min(Math.max(parseInt(BoardYIn),5),35))){
                boardHeight = (Math.min(Math.max(parseInt(BoardYIn),5),35));
                alert(`height out of bounds, adjusted to ${boardHeight}`);
            }else{
                boardHeight = BoardYIn;
            }
        }catch{}
    }
    Board.innerHTML ="";
    HexGrid = document.createElement("section");
    HexGrid.setAttribute("class","Tiles");
    HexGrid.style.aspectRatio = `${boardWidth}/${1.16*boardHeight}`
    HexColumn = document.createElement("section");
    HexColumn.setAttribute("class","TileColumn");
    HexColumn.style.width = `${100/parseFloat(boardWidth)*5}%`
    Hex = document.createElement("img");
    Hex.setAttribute("class","Tile");
    Hex.setAttribute("Src","IMG/Hex.png");
    Hex.setAttribute("clip-path", "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
    Hex.setAttribute("onmouseover","highlight(this.id)");
    Hex.setAttribute("onmouseleave","unhighlight(this.id)");
    Hex.style.filter ="brightness(1)"
    Hex.style.width="100%"
    Hex.style.zIndex = "0"

    let HexsInfo= [];
    
    for(let i = 0; i<parseInt(boardWidth);i++){
        HexsInfo.push([]);
        let SubmitCol = HexColumn.cloneNode(true)
        SubmitCol.setAttribute(`id`,`col${i}`);
        for(let j = 0; j<parseInt(boardHeight);j++){
            //{terrain}
            HexsInfo[i][j] = [0];
            let SubmitHex = Hex.cloneNode(true);
            SubmitHex.setAttribute(`id`,`col${i}row${j}`);
            SubmitHex.addEventListener("click",(e) => moveShipClick(e.target.id));
            if(i%2==0){
                SubmitHex.style.top = `${100/boardHeight/2}%`;
            }
            SubmitCol.appendChild(SubmitHex);
        }
        //SubmitCol.style.right = `${((i-parseFloat(boardWidth))+1)*100/(parseFloat(boardWidth)*4)}%`;
        //SubmitCol.style.left = `${-(i)*100/(parseFloat(boardWidth)*3.5)}%`;
        if(i!=0){
            SubmitCol.style.marginLeft = `${-100/(parseFloat(boardWidth)*2.85)}%`;  
        }
        HexGrid.appendChild(SubmitCol);
    }
    Board.appendChild(HexGrid);
    setTimeout(spaceify,50);
    function spaceify(){
        HexGrid.style.paddingBlockEnd = `${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        Board.style.paddingBlockEnd =`${document.getElementById("col0row0").getBoundingClientRect().height/2+40}px`
        Board.innerHTML ="";
        Board.appendChild(HexGrid);
    }
    if(!boardBuilt){
        // clearSidebar();
        // addBoatMake();
        islands()
    }
    
    boardBuilt = true;
}

function AdjustBoard(){
    
    for(let i = 0; i<parseInt(boardWidth);i++){
        SubmitCol = document.getElementById(`col${i}`);
        for(let j = 0; j<parseInt(boardHeight);j++){
            //{terrain}
            SubmitHex = document.getElementById(`col${i}row${j}`);
            if(i%2==0){
                SubmitHex.style.top = `${100/boardHeight/2}%`;
            }
        }
        if(i!=0){
            SubmitCol.style.marginLeft = `${-100/(parseFloat(boardWidth)*2.85)}%`;  
        }
    }
    setTimeout(spaceify,50);
    function spaceify(){
        HexGrid.style.paddingBlockEnd = `${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        Board.style.paddingBlockEnd =`${document.getElementById("col0row0").getBoundingClientRect().height/2+40}px`
        Board.innerHTML ="";
        Board.appendChild(HexGrid);
    }
    setTimeout(repositionArrows,1);
}

// TODO: make an input for the island


function islands(){
    let x = 0;
    let y = 0;
    for(let i = 0;i<islandCount;i++){
        let done = false;
        while(!done){
            x=Math.round(Math.random()*(boardWidth-1));
            y=Math.round(Math.random()*(boardHeight-1));
            Hex = document.getElementById(`col${x}row${y}`);
            if(Hex.getAttribute("Src") == "IMG/Hex.png"){
                Hex.setAttribute("Src","IMG/hex_island.png");
                done = true
            }
        }
    }
    for(let i = 0;i<rockCount*2;i++){
        let done = false;
        while(!done){
            x=Math.round(Math.random()*(boardWidth-1));
            y=Math.round(Math.random()*(boardHeight-1));
            Hex = document.getElementById(`col${x}row${y}`);
            if(Hex.getAttribute("Src") == "IMG/Hex.png"){
                Hex.setAttribute("Src","IMG/hex_rocks.png");
                done = true
            }
        }
    }
}



function resizeBoard(){
    if(boardBuilt==true){
        AdjustBoard()
        redoShade();
    }
    
}

function redoShade(){
    moveShadent(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
    moveShade(teams[activeTeam].ships[activeBoat].shipx,teams[activeTeam].ships[activeBoat].shipy);
}

function highlight(id){
    let hex = document.getElementById(id);
    if(hex.style.filter == "brightness(1)"){
        hex.style.filter ="brightness(1.8)"
        
    }/*else if(hex.style.filter == "brightness(50%)"){
        hex.style.filter ="brightness(65%)"
    }*/
    if(hex.style.zIndex == "0"){

        hex.style.zIndex = "2";
    }
}

function unhighlight(id){
    let hex = document.getElementById(id);
    if(hex.style.filter == "brightness(1.8)"){
        hex.style.filter ="brightness(1)"
        
    }/*else if(hex.style.filter == "brightness(65%)"){
        hex.style.filter ="brightness(50%)"
    }*/
    if(hex.style.zIndex == "2"){

        hex.style.zIndex = "0";
    }
}


let pastid = "";
function select(id){
    if(pastid!=""){
        let pastloc =pastid.split("col").pop().split("row");
        moveShadent(parseFloat(pastloc[0]),parseFloat(pastloc[1]));
    }
    let location = id.split("col").pop().split("row");
    console.log(`row ${location[0]}  col ${location[1]}`)
    moveShade(parseFloat(location[0]),parseFloat(location[1]));
    pastid = id;
}

function moveShade(col,row){
    
    let goal
    if(teams[activeTeam].ships[activeBoat].rotation==0||teams[activeTeam].ships[activeBoat].rotation==3){
        
        try{
            goal = document.getElementById(`col${col}row${row+1}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
        }catch{}
        try{
            goal = document.getElementById(`col${col}row${row-1}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
        }catch{}
    }else if(teams[activeTeam].ships[activeBoat].rotation==1||teams[activeTeam].ships[activeBoat].rotation==4){
        
        if(col%2==0){
            try{
            goal = document.getElementById(`col${col+1}row${row}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row+1}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row-1}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }
    }else if(teams[activeTeam].ships[activeBoat].rotation==2||teams[activeTeam].ships[activeBoat].rotation==5){
        if(col%2==0){
            try{
                goal = document.getElementById(`col${col+1}row${row+1}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row-1}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(teams[activeTeam].ships[activeBoat].tonnage<40){
                    moveCost = 2;
                }else if(teams[activeTeam].ships[activeBoat].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(teams[activeTeam].ships[activeBoat].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }
    }
    /*
    try{
        goal = document.getElementById(`col${col}row${row+1}`);
        goal.style.filter ="hue-rotate(90deg)";
        goal.style.zIndex = "1"

    }catch{}
    try{
        goal = document.getElementById(`col${col}row${row-1}`);
        goal.style.filter ="hue-rotate(90deg)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col+1}row${row}`);
        goal.style.filter ="hue-rotate(90deg)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col-1}row${row}`);
        goal.style.filter ="hue-rotate(90deg)";
        goal.style.zIndex = "1"
    }catch{}
    if(col%2==0){
        try{
            goal = document.getElementById(`col${col+1}row${row+1}`);
            goal.style.filter ="hue-rotate(90deg)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row+1}`);
            goal.style.filter ="hue-rotate(90deg)";
            goal.style.zIndex = "1"
        }catch{}
    }else{
        try{
            goal = document.getElementById(`col${col+1}row${row-1}`);
            goal.style.filter ="hue-rotate(90deg)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row-1}`);
            
            goal.style.filter ="hue-rotate(90deg)";
            goal.style.zIndex = "1"
        }catch{}
    }*/
    
}
function moveShadent(col,row){
    try{
        let goal = document.getElementById(`col${col}row${row+1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col}row${row-1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col+1}row${row}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col-1}row${row}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
    }catch{}
    if(col%2==0){
        try{
            goal = document.getElementById(`col${col+1}row${row+1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row+1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
        }catch{}
    }else{
        try{
            goal = document.getElementById(`col${col+1}row${row-1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row-1}`);
        goal.style.filter ="brightness(1)";
        goal.style.zIndex = "0"
        }catch{}
    }
    
}




//  Music

let music = document.getElementById("music");
let songNum = Math.floor(Math.random() * 3);
let pastSongNum = songNum;
let pastDone = 0;
let done = 1;

document.addEventListener("click", (e)=>playlist(pastSongNum));
music.addEventListener("ended", check);

function playlist (x) {
    
    if (done > pastDone) {
        while (songNum == x) {
            songNum = Math.floor(Math.random() * 3);
        }
        switch (songNum) {
            case 0:
                music.src = "css/music/back-when-we-were-young-piano-instrumental-hopeful-adventure-triumph-138353.mp3";
                break;
            case 1:
                music.src = "css/music/battle-ship-111902.mp3";
                break;
            case 2:
                music.src = "css/music/buccaneer-swashbuckler-pirate-instrumental-high-seas-adventure-132858.mp3";
                break;
        }
        pastDone = done;
        music.play();
        pastSongNum = songNum;
    }
}

function check () {
    done += 1;
    playlist(pastSongNum);
}