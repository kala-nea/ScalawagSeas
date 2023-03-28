
let hosting =window.localStorage.getItem('Hosting')=="true"
console.log(`hosting ${hosting}`)



let builtIn = [
    "{\"movePower\":[9,13,18],\"crowsNest\":false,\"sprite\":\"IMG/Sampan.png\",\"name\":\"Kori's Sampan\",\"tonnage\":25,\"turnCost\":0,\"weightclass\":\"Corvette\",\"Weapons\":[[],[[\"Cannon\",8,6]],[[\"Cannon\",8,6]]],\"ammo\":[[\"Round Shot\",50,50],[\"Grape Shot\",10,10],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[13,13,0],[15,15,0],[15,15,0],[19,19,0],[19,19,0],[18,18,0],[13,13,0],[9,9,0]]}",
    "{\"movePower\":[8,12,16],\"crowsNest\":false,\"sprite\":\"IMG/catboat.png\",\"name\":\"Kirk's Catboat\",\"tonnage\":30,\"turnCost\":0,\"weightclass\":\"Corvette\",\"Weapons\":[[],[[\"Cannon\",8,1],[\"Long Nine\",9,2]],[[\"Cannon\",8,1],[\"Long Nine\",9,2]]],\"ammo\":[[\"Round Shot\",10,10],[\"Grape Shot\",20,20],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[18,18,0],[20,20,0],[20,20,0],[24,24,0],[24,24,0],[20,20,0],[18,18,0],[11,11,0]]}",
    "{\"movePower\":[7,11,14],\"crowsNest\":false,\"sprite\":\"IMG/Lugger.png\",\"name\":\"Pettit's Lugger\",\"tonnage\":40,\"turnCost\":1,\"weightclass\":\"Cruiser\",\"Weapons\":[[],[[\"Cannon\",8,2],[\"Long Nine\",8,1],[\"Carronade\",18,1]],[[\"Cannon\",8,2],[\"Long Nine\",8,1],[\"Carronade\",18,1]]],\"ammo\":[[\"Round Shot\",20,20],[\"Grape Shot\",10,10],[\"Chain Shot\",10,10]],\"captainSkill\":3,\"hitpoints\":[[31,31,0],[33,33,0],[33,33,0],[37,37,0],[37,37,0],[36,36,0],[31,31,0],[18,18,0]]}",
    "{\"movePower\":[7,10,14],\"crowsNest\":false,\"sprite\":\"IMG/cutter.png\",\"name\":\"Salam's Cutter\",\"tonnage\":50,\"turnCost\":1,\"weightclass\":\"Cruiser\",\"Weapons\":[[[\"Long Nine\",8,1]],[[\"Carronade\",18,2]],[[\"Carronade\",18,2]]],\"ammo\":[[\"Round Shot\",20,20],[\"Grape Shot\",5,5],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[41,41,0],[43,43,0],[43,43,0],[47,47,0],[47,47,0],[39,39,0],[41,41,0],[22,22,0]]}",
    "{\"movePower\":[6,8,11],\"crowsNest\":false,\"sprite\":\"IMG/galleon.png\",\"name\":\"Stockdale's Galleon\",\"tonnage\":60,\"turnCost\":2,\"weightclass\":\"Destroyer\",\"Weapons\":[[[\"Long Nine\",9,1]],[[\"Carronade\",18,2]],[[\"Carronade\",18,2]]],\"ammo\":[[\"Round Shot\",25,25],[\"Grape Shot\",0,0],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[51,51,0],[53,53,0],[53,53,0],[57,57,0],[57,57,0],[52,52,0],[51,51,0],[26,26,0]]}",
    "{\"movePower\":[6,8,10],\"crowsNest\":false,\"sprite\":\"IMG/schooner.png\",\"name\":\"Olsen's Schooner\",\"tonnage\":65,\"turnCost\":2,\"weightclass\":\"Destroyer\",\"Weapons\":[[[\"Long Nine\",9,1],[\"Cannon\",8,1]],[[\"Cannon\",24,1],[\"Carronade\",24,1]],[[\"Cannon\",24,1],[\"Carronade\",24,1]]],\"ammo\":[[\"Round Shot\",20,20],[\"Grape Shot\",10,10],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[56,56,0],[59,59,0],[59,59,0],[62,62,0],[62,62,0],[53,53,0],[56,56,0],[28,28,0]]}",
    "{\"movePower\":[5,6,8],\"crowsNest\":false,\"sprite\":\"IMG/brig.png\",\"name\":\"Cox's Brig\",\"tonnage\":80,\"turnCost\":3,\"weightclass\":\"Dreadnought\",\"Weapons\":[[[\"Long Nine\",9,2]],[[\"Carronade\",24,2]],[[\"Carronade\",24,2]]],\"ammo\":[[\"Round Shot\",30,30],[\"Grape Shot\",0,0],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[88,88,0],[90,90,0],[90,90,0],[94,94,0],[94,94,0],[81,81,0],[88,88,0],[48,48,0]]}",
    "{\"movePower\":[5,6,9],\"crowsNest\":false,\"sprite\":\"IMG/barque.png\",\"name\":\"Day's Barque\",\"tonnage\":90,\"turnCost\":3,\"weightclass\":\"Dreadnought\",\"Weapons\":[[[\"Long Nine\",9,2]],[[\"Carronade\",18,1],[\"Paixhan\",32,1]],[[\"Carronade\",18,1],[\"Paixhan\",32,1]]],\"ammo\":[[\"Round Shot\",20,20],[\"Grape Shot\",0,0],[\"Chain Shot\",10,10]],\"captainSkill\":3,\"hitpoints\":[[99,99,0],[101,101,0],[101,101,0],[105,105,0],[105,105,0],[86,86,0],[99,99,0],[53,53,0]]}",
    "{\"movePower\":[3,5,6],\"crowsNest\":true,\"sprite\":\"IMG/frigate.png\",\"name\":\"Aguilera's Frigate\",\"tonnage\":130,\"turnCost\":3,\"weightclass\":\"Super Dreadnought\",\"Weapons\":[[[\"Long Nine\",9,2],[\"Cannon\",9,1]],[[\"Carronade\",24,2]],[[\"Carronade\",24,2]]],\"ammo\":[[\"Round Shot\",25,25],[\"Grape Shot\",10,10],[\"Chain Shot\",0,0]],\"captainSkill\":3,\"hitpoints\":[[137,137,0],[139,139,0],[139,139,0],[143,143,0],[143,143,0],[119,119,0],[137,137,0],[70,70,0]]}"
]




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
let resupplyCount =window.localStorage.getItem('ResupplyCount');

window.addEventListener('resize',resizeBoard);
if(hosting){
    setTimeout(MakeBoard,1);
    setTimeout((e) =>makeBoats(),200);
    setTimeout((e) =>AdjustBoard(),200);
    setTimeout((e) =>AdjustBoard(),310);
    setTimeout((e) =>AdjustBoard(),500);
    setTimeout((e) => adjustAll(),300)
    setTimeout((e) => adjustAll(),3000)
}

//creates the board
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
    HexGrid.setAttribute("id","HexGrid");
    HexGrid.style.aspectRatio = `${boardWidth}/${1.16*boardHeight}`
    HexColumn = document.createElement("section");
    HexColumn.setAttribute("class","TileColumn");
    HexColumn.style.width = `${100/parseFloat(boardWidth)*5}%`
    Hex = document.createElement("img");
    Hex.setAttribute("class","Tile");
    Hex.setAttribute("Src","IMG/Hex.png");
    Hex.setAttribute("clip-path", "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
    // Hex.setAttribute("onmouseover","highlight(this.id)");
    // Hex.setAttribute("onmouseleave","unhighlight(this.id)");
    // Hex.addEventListener("mouseenter",(e)=>highlight(e.id));
    // Hex.addEventListener("mouseleave",(e)=>unhighlight(e.id));
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
            SubmitHex.addEventListener("mouseenter",(e)=>highlight(e.target.id));
            SubmitHex.addEventListener("mouseleave",(e)=>unhighlight(e.target.id));
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
    setTimeout((e)=>{Board.addEventListener("click",updateMove);},100);
    setTimeout(spaceify,750);
    function spaceify(){
        HexGrid.style.paddingBlockEnd = `${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        HexGrid.style.maxHeight = `${Board.clientHeight-parseFloat(getComputedStyle(Board).paddingBottom.split("px")[0])}px`
        // Board.style.paddingBlockEnd =`${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        Board.style.paddingBlockEnd =`${(HexGrid.clientHeight)-(Board.clientHeight-parseFloat(getComputedStyle(Board).paddingBottom.split("px")[0]))}px`
        // Board.style.marginBlockEnd =`40px`
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

//adjusts the board in case of screen changes
function AdjustBoard(){
    
    for(let i = 0; i<parseInt(boardWidth);i++){
        let SubmitCol = document.getElementById(`col${i}`);
        for(let j = 0; j<parseInt(boardHeight);j++){
            //{terrain}
            let SubmitHex = document.getElementById(`col${i}row${j}`);
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
        HexGrid.style.maxHeight = `${Board.clientHeight-parseFloat(getComputedStyle(Board).paddingBottom.split("px")[0])}px`
        // Board.style.paddingBlockEnd =`${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        Board.style.paddingBlockEnd =`${(HexGrid.clientHeight)-(Board.clientHeight-parseFloat(getComputedStyle(Board).paddingBottom.split("px")[0]))}px`

        // Board.style.marginBlockEnd =`40px`
        Board.innerHTML ="";
        Board.appendChild(HexGrid);
    }
    setTimeout((e) => adjustAll(),100)
    setTimeout(repositionArrows,1);
}

// TODO: make an input for the island

//creates the diferent types of islands
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
    for(let i = 0;i<rockCount;i++){
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
    for(let i = 0;i<resupplyCount;i++){
        let done = false;
        while(!done){
            x=Math.round(Math.random()*(boardWidth-1));
            y=Math.round(Math.random()*(boardHeight-1));
            Hex = document.getElementById(`col${x}row${y}`);
            // console.log("trying")
            if(Hex.getAttribute("Src") == "IMG/Hex.png"){
                // console.log("succeding");
                Hex.setAttribute("Src","IMG/hex_supply.png");
                done = true
            }
        }
    }
}


//resizes the board and redoes the shading on the tiles
function resizeBoard(){
    if(boardBuilt==true){
        AdjustBoard()
        redoShade();
    }
    
}
//redoes the shading on the tiles
function redoShade(){
    moveShadent(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
    moveShade(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
}

//highlights the tiles you hover over
function highlight(id){
    // console.log(`highlighting: ${id}`)
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

//unhighlights the tiles you hover over
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


// let pastid = "";
// function select(id){
//     if(pastid!=""){
//         let pastloc =pastid.split("col").pop().split("row");
//         moveShadent(parseFloat(pastloc[0]),parseFloat(pastloc[1]));
//     }
//     let location = id.split("col").pop().split("row");
//     // console.log(`row ${location[0]}  col ${location[1]}`)
//     moveShade(parseFloat(location[0]),parseFloat(location[1]));
//     pastid = id;
// }


//shades the hexes that the boat can move to
function moveShade(col,row){
    
    let goal
    if(ships[teams[activeTeam].ships[activeBoat]].rotation==0||ships[teams[activeTeam].ships[activeBoat]].rotation==3){
        
        try{
            goal = document.getElementById(`col${col}row${row+1}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
        }catch{}
        try{
            goal = document.getElementById(`col${col}row${row-1}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
        }catch{}
    }else if(ships[teams[activeTeam].ships[activeBoat]].rotation==1||ships[teams[activeTeam].ships[activeBoat]].rotation==4){
        
        if(col%2==0){
            try{
            goal = document.getElementById(`col${col+1}row${row}`);
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row+1}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row-1}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }
    }else if(ships[teams[activeTeam].ships[activeBoat]].rotation==2||ships[teams[activeTeam].ships[activeBoat]].rotation==5){
        if(col%2==0){
            try{
                goal = document.getElementById(`col${col+1}row${row+1}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row}`);
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row-1}`);
                
                
            let moveCost;
            if(goal.getAttribute("Src") == "IMG/hex_island.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else if(goal.getAttribute("Src") == "IMG/hex_rocks.png"){
                if(ships[teams[activeTeam].ships[activeBoat]].tonnage<40){
                    moveCost = 2;
                }else if(ships[teams[activeTeam].ships[activeBoat]].tonnage<60){
                    moveCost = 3;
                }else{
                    moveCost = 100000;
                }
            }else{
                moveCost = 1;
            }
            if(ships[teams[activeTeam].ships[activeBoat]].moveLeft>=moveCost){
                goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
                goal.style.zIndex = "1"
            }
            }catch{}
        }
    }
    /*
    try{
        goal = document.getElementById(`col${col}row${row+1}`);
        goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
        goal.style.zIndex = "1"

    }catch{}
    try{
        goal = document.getElementById(`col${col}row${row-1}`);
        goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col+1}row${row}`);
        goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col-1}row${row}`);
        goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
        goal.style.zIndex = "1"
    }catch{}
    if(col%2==0){
        try{
            goal = document.getElementById(`col${col+1}row${row+1}`);
            goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row+1}`);
            goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
            goal.style.zIndex = "1"
        }catch{}
    }else{
        try{
            goal = document.getElementById(`col${col+1}row${row-1}`);
            goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row-1}`);
            
            goal.style.filter ="hue-rotate(90deg) brightness(1.5)";
            goal.style.zIndex = "1"
        }catch{}
    }*/
    
}

//removes the shading from hexes that can no longer be moved on
function moveShadent(col,row){
    let goal;
    try{
        goal = document.getElementById(`col${col}row${row+1}`);
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
music.volume = 0.3;

// document.addEventListener("click", (e)=>playlist(pastSongNum));
music.addEventListener("ended", check);
//runs the music through a playlist
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























let pieceStorage = document.getElementById("PieceStorage");
let PieceInfo = document.getElementById("PieceInfo");
//the ship object
class Ship{
    constructor(x = 0,y = 0,team = 0,rotation = 0, movePower = 6){
        x=parseInt(x);
        y=parseInt(y);
        this.ship;
        this.shipx = x;
        this.shipy = y;
        this.prevX = x;
        this.prevY = y;
        //0=top,1=topright 2=bottomright etc until 5
        this.rotation = rotation;
        this.team = team 
        this.shipNum = ships.length;
        this.sprite = "IMG/basic-ship.png";
        this.id = `Ship${ships.length}`
        this.makeShip();
        this.movePower = [movePower,movePower*1.5,movePower*2];
        this.moveLeft = 0;
        this.moveType = "Still";
        this.exhausted = false;
        this.alive = true;
        this.crowsNest = false;

        
        
        this.name = this.id;
        this.tonnage = 45;
        this.weightclass;
        if(this.tonnage<40){
            this.turnCost = 0;
        }else if(this.tonnage<60){
            this.turnCost = 1;
        }else if(this.tonnage<80){
            this.turnCost = 2;
        }else {
            this.turnCost = 3;
        }

        if(this.tonnage<40){
            this.weightclass = "Corvette";
        }else if(this.tonnage<60){
            this.weightclass = "Cruiser";
        }else if(this.tonnage<80){
            this.weightclass = "Destroyer";
        }else if(this.tonnage<100){
            this.weightclass = "Dreadnought";
        }else {
            this.weightclass = "Super Dreadnought";
        }
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= [[["Cannon",8,3,3]],[["Cannon",8,3,3]],[["Cannon",8,3,3]]];
        //[type,max,ammountLeft]
        this.ammo=[["Round Shot",100,50],["Grape Shot",20,1]];
        this.captainSkill = 3;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = [[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0],[10,10,0]];

        ships.push(this);
    }
    
    //pushes itself to the ships array
    pushThis(){
        ships.push(this);
    }

    //creates the ship sprite and related sprites
    makeShip(){
        let shipmake = document.createElement("img");
        // console.log(this.sprite);
        shipmake.setAttribute("src",this.sprite);
        shipmake.setAttribute("class","Ship");
        shipmake.setAttribute("id",this.id);
        pieceStorage.append(shipmake);
        this.ship = document.getElementById(this.id);
        // this.ship.addEventListener("click",(e) => displayAShipsStats(e.target.id.split("Ship").pop()));
        setTimeout((e)=>{
            this.ship.addEventListener("click",(e) => shipClicked(this.shipNum));
        },200)
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = document.getElementById(`col${this.shipx}row${this.shipy}`).getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
        this.ship.style.zIndex = "5"
        this.identifier = document.createElement("p");
        this.identifier.setAttribute("id",`IdentifierFor${this.id}`);
        this.identifier.setAttribute("class",`Identifier`);
        this.identification=`Player ${this.team+1} 
        Boat ${teams[this.team].ships.length+1}`
        this.identifier.innerText = this.identification;
        // this.identifier.style.width = `${Math.max(desiredHex.width,75)}px`;
        this.identifier.style.width = "fit-content"
        this.identifier.style.left = `${desiredPos.left+desiredHex.width/2-Math.max(desiredHex.width/2,37.5)}px`;
        //this.identifier.style.height = `${desiredHex.height}px`;
        //this.identifier.style.width = `${desiredHex.width}px`;
        this.identifier.style.zIndex = "7"
        pieceStorage.append(this.identifier);
        this.identifier.style.top = `${desiredPos.top-desiredHex.height/1.8-this.identifier.getBoundingClientRect().height/2}px`;   //dooo the off set for 20x40
    }

    //set the stats of the ship from a preset
    setStats(shipTemplate){
        
        this.movePower = shipTemplate.movePower;
        this.crowsNest = shipTemplate.crowsNest;
        this.name = shipTemplate.name;
        this.tonnage = shipTemplate.tonnage;
        this.weightclass =shipTemplate.weightclass;
        this.turnCost = shipTemplate.turnCost;
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= shipTemplate.Weapons;
        //[type,max,ammountLeft]
        this.ammo=shipTemplate.ammo;

        this.sprite = ((shipTemplate.sprite == null) ? "IMG/basic-ship.png" : shipTemplate.sprite);
        this.ship.setAttribute("src",this.sprite);
        // this.captainSkill = shipTemplate.captainSkill;
        // if(this.captainSkill==null){
        //     this.captainSkill =4
        // }
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = shipTemplate.hitpoints;
        this.identification=`Player ${this.team+1}
        ${this.name}`
        this.identifier.innerText = this.identification;
        setShip(this);
    }

    setStatsMulti(shipTemplate){
        this.shipx = shipTemplate.shipx;
        this.shipy = shipTemplate.shipy;
        this.prevX = shipTemplate.prevX;
        this.prevY = shipTemplate.prevY;
        this.rotation = shipTemplate.rotation;
        this.team = shipTemplate.team 
        this.id = shipTemplate.id
        this.moveLeft = shipTemplate.moveLeft;
        this.moveType = shipTemplate.moveType;
        this.exhausted = shipTemplate.exhausted;
        this.alive = shipTemplate.alive;


        this.movePower = shipTemplate.movePower;
        this.crowsNest = shipTemplate.crowsNest;
        this.name = shipTemplate.name;
        this.tonnage = shipTemplate.tonnage;
        this.weightclass =shipTemplate.weightclass;
        this.turnCost = shipTemplate.turnCost;
        //bow,port,starboard
        //type,weight,quantity,quantityLeft
        this.Weapons= shipTemplate.Weapons;
        //[type,max,ammountLeft]
        this.ammo=shipTemplate.ammo;

        this.sprite = shipTemplate.sprite;
        this.ship.setAttribute("src",this.sprite);
        this.captainSkill = shipTemplate.captainSkill;
        //bridge,Bow,aft,Port,starboard,bilge,mast,Rudder
        //[max,ammountLeft, incoming]
        this.hitpoints = shipTemplate.hitpoints;
        this.identification=shipTemplate.identification
        this.identifier.innerText = this.identification;
    }
    
    //try and move the ship to the esired hex
    moveShip(x,y){
        x=parseInt(x);
        y=parseInt(y);
        let desiredHex = document.getElementById(`col${x}row${y}`);
        let moveCost;
        if(desiredHex.getAttribute("Src") == "IMG/hex_island.png"){
            if(this.tonnage<40){
                moveCost = 3;
            }else{
                moveCost = 100000;
            }
        }else if(desiredHex.getAttribute("Src") == "IMG/hex_rocks.png"){
            if(this.tonnage<40){
                moveCost = 2;
            }else if(this.tonnage<60){
                moveCost = 3;
            }else{
                moveCost = 100000;
            }
        }else{
            moveCost = 1;
        }
        if(desiredHex.getAttribute("Src") == "IMG/hex_supply.png"){
            this.resupply();
        }
        if(this.moveLeft>=moveCost){
            this.shipx = x;
            this.shipy = y;
            this.moveLeft-=moveCost;
            this.adjustShip();
        }
        setShip(this);
    }
    
    //repositions the ship and its related sprites
    adjustShip(){
        let desiredHex = document.getElementById(`col${this.shipx}row${this.shipy}`);
        let desiredPos = desiredHex.getBoundingClientRect();
        this.ship.style.height = `${desiredHex.height}px`;
        this.ship.style.width = `${desiredHex.width}px`;
        this.ship.style.left = `${desiredPos.left}px`;
        this.ship.style.top = `${desiredPos.top}px`;
        this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
        // this.identifier.style.width = `${Math.max(desiredHex.width,75)}px`;
        this.identifier.style.width = "fit-content";
        this.identifier.style.left = `${desiredPos.left+desiredHex.width/2-this.identifier.getBoundingClientRect().width/2}px`;
        this.identifier.style.top = `${desiredPos.top-desiredHex.height/1.8-this.identifier.getBoundingClientRect().height/2}px`;
        //this.identifier.style.height = `${desiredHex.height}px`;
        //this.identifier.style.width = `${desiredHex.width}px`;
    }
    //rotates the ship
    rotate(rotationAmmount){
        if(this.moveLeft>=this.turnCost){
            this.rotation += rotationAmmount;
            while(this.rotation>5||this.rotation<0){
                if(this.rotation>5){
                    this.rotation -=6
                }else{
                    this.rotation +=6
                }
            }
            this.ship.style.transform = `rotate(${360/6*this.rotation}deg)`
            this.moveLeft -=this.turnCost;
            setMoveLeft(this.moveLeft);
            moveShadent(this.shipx,this.shipy);
            moveShade(this.shipx,this.shipy);
        }
        setShip(this);
    }
    //higlights the ship
    selectColor(){
        this.ship.style.filter = "brightness(150%)";
        setShip(this);
    }
    //unhiglights the ship
    deselectColor(){
        this.ship.style.filter = "brightness(1)";
        setShip(this);
    }
    //either shoots or displays the stats depending on whether or not another boat is attacking upon being clicked
    clicked(){
        if(firing&&this.id!=ships[teams[activeTeam].ships[activeBoat]].id){
            AttackThis(ships[teams[activeTeam].ships[activeBoat]], this)
        }else{
            this.displayStats();
        }
    }
    //refills the ammo
    resupply(){
        for(let ammo of this.ammo){
            console.log(ammo[0]);
            ammo[2]=ammo[1];
        }
        setShip(this);
    }
    //shows the ships stats in the sidebar
    displayStats(){
        PieceInfo = document.getElementById("PieceInfo");
        PieceInfo.innerText=`
        Name:${this.name}
        Tonnage:${this.tonnage}
        Weight Class:${this.weightclass}
        Captain Skill:${this.captainSkill}
        
        Movement Points:
            Cruising:${this.movePower[0]}
            Full Steam:${this.movePower[1]}
            Flanking:${this.movePower[2]}

        Weapons:
        `;
        if(this.Weapons[0].length>0){
        PieceInfo.innerText+=`Bow:
        `;
        }
        for(let i=0;i<this.Weapons[0].length;i++){
        PieceInfo.innerText+=`${this.Weapons[0][i][2]}x ${this.Weapons[0][i][1]}lb ${this.Weapons[0][i][0]}      ${this.Weapons[0][i][3]}/${this.Weapons[0][i][2]}
        `;
        }
        if(this.Weapons[1].length>0){
        PieceInfo.innerText+=`Port:
        `;
        }
        for(let i=0;i<this.Weapons[1].length;i++){
            // console.log(i);
            // console.log(this.Weapons[1]);
        PieceInfo.innerText+=`${this.Weapons[1][i][2]}x ${this.Weapons[1][i][1]}lb ${this.Weapons[1][i][0]}      ${this.Weapons[1][i][3]}/${this.Weapons[1][i][2]}
        `;
        }
        if(this.Weapons[2].length>0){
        PieceInfo.innerText+=`Starboard:
        `;
        }
        for(let i=0;i<this.Weapons[2].length;i++){
        PieceInfo.innerText+=`${this.Weapons[2][i][2]}x ${this.Weapons[2][i][1]}lb ${this.Weapons[2][i][0]}      ${this.Weapons[2][i][3]}/${this.Weapons[2][i][2]}
        `;
        }
        PieceInfo.innerText+=`
        Ammo:
        `;
        for(let i=0;i<this.ammo.length;i++){
            PieceInfo.innerText+=`${this.ammo[i][0]}: ${this.ammo[i][2]}/${this.ammo[i][1]}
            `;
        }
        let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
        PieceInfo.innerText+=`
        Hitpoints:
        `;
        for(let i=0;i<this.hitpoints.length;i++){
            PieceInfo.innerText+=`${shipParts[i]}: ${this.hitpoints[i][1]-this.hitpoints[i][2]}/${this.hitpoints[i][0]}
            `;
        }
        let backButton = document.createElement("button");
        backButton.innerText = "Close"
        backButton.addEventListener("click",clearPieceInfo)
        PieceInfo.append(backButton);
        setTimeout((e) => adjustAll(),100)
    }
}




let ships = []
//let ship1 = new Ship(0,0,1,3)
//let ship2 = new Ship(0,0,2,3)
window.addEventListener('resize',adjustAll);
window.addEventListener("scroll",adjustAll);
setTimeout(adjustAll,100);

//adjusts all ships
function adjustAll(){
    for(let ship of ships){
        ship.adjustShip();
    }
}

//readys up all ships for the next round
function readyAll(){
    for(let ship of ships){
        ship.exhausted = false;
        ship.moveType = "Still";
        ship.prevX = ship.shipx;
        ship.prevY = ship.shipy;
        for(let side of ship.Weapons){
            for(let weapon of side){
                weapon[3]=weapon[2];
            }
        }
    }
}

//applies the dammage that each ship has taken
function damageAll(){
    //damage feed bow>port>bilge<starboard<aft<rudder     mast>bridge
    for(let ship of ships){
        for(let i=0;i<ship.hitpoints.length;i++){
            // console.log(part)
            // console.log(part[2])
            doDamageFeed(i,ship.shipNum)
        }
    }
}

let feedArray=[100,3,4,5,5,100,0,2];
//feeds damage between parts of the ship when one part is destroyed
function doDamageFeed(i,shipNum,additionalDamage=0,destroyAbove=false){
    ships[shipNum].hitpoints[i][1]-=ships[shipNum].hitpoints[i][2]+additionalDamage;
    if(destroyAbove){
        for(let j=0;j<feedArray;j++){
            if(feedArray[j]==i){
                doDamageFeed(feedArray[i],shipNum,0,destroyAbove);
                ships[shipNum].hitpoints[i][1] = 0;
            }
        }
    }else if(ships[shipNum].hitpoints[i][1]<=0){
        if(feedArray[i]==100){
            ships[shipNum].alive=false;
            ships[shipNum].ship.style.visibility = "hidden"
            ships[shipNum].identifier.style.visibility = "hidden"
        }else{
            doDamageFeed(feedArray[i],shipNum,-ships[shipNum].hitpoints[i][1],destroyAbove);
            ships[shipNum].hitpoints[i][1] = 0;
            for(let j=0;j<feedArray;j++){
                if(feedArray[j]==i){
                    doDamageFeed(feedArray[i],shipNum,-ships[shipNum].hitpoints[i][1],destroyAbove);
                }
            }
        }
    }
    ships[shipNum].hitpoints[i][2] = 0;
}
//moves a specific ship
function moveShip(x,y,shipNum){
    ships[shipNum].moveShip(x,y);
}


//creates the ship objects oppon starting the game
function makeBoats(){
    let x = 0;
    let y = 0;
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        let spaceAvailable = true;
        for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
            let done = false;
            while(!done){
                spaceAvailable = true;
                x=Math.round(Math.random()*(boardWidth-2))+1;
                y=Math.round(Math.random()*(boardHeight-2))+1;
                let HexTest = document.getElementById(`col${x}row${y}`);
                if(HexTest.getAttribute("Src") == "IMG/Hex.png"){
                    for(let k = 0;k<ships.length;k++){
                        if(ships[k].shipx==x&&ships[k].shipy==y){
                            spaceAvailable = false;
                        }
                    }
                    if(spaceAvailable){
                        let shipPlaceHolder = new Ship(x,y,i,Math.round(Math.random()*5),6);
                        teams[i].ships.push(shipPlaceHolder.shipNum);
                        done = true
                    }
                }
            }
        }
    }
    addStart();
}

//sets the stats of all ships
function setAllStats(){
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        if(teams[i].hash==selfId){
            for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
                for(let k = -builtIn.length;k<parseInt(window.localStorage.getItem('numberOfShips'));k++){
                    if(document.getElementById(`Player${i}ShipSelect${j}`).value == JSON.parse(window.localStorage.getItem(`ship${k}`)).name){
                        ships[teams[i].ships[j]].setStats(JSON.parse(window.localStorage.getItem(`ship${k}`)))
                    }
                }
            }
        }else{
            sendShipSelect([]);
        }
    }
    // addStart();
}

// function shipFromShipyard(){
//     let shipPlaceHolder = new Ship(x,y,i,Math.round(Math.random()*5),6);
// }

//displays the stats of a ship
function displayAShipsStats(shipsNum){
    ships[shipsNum].displayStats();
}

function shipClicked(num){
    ships[num].clicked()
}



















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

//move a ship to selected hex if the hex is valid
function moveShipClick(id){
    if(document.getElementById(id).style.filter == "hue-rotate(90deg) brightness(1.5)"){
        let location = id.split("col").pop().split("row");
        unhighlight(id)
        moveShadent(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
        moveShip(location[0],location[1],ships[teams[activeTeam].ships[activeBoat]].shipNum)
        setShip(ships[teams[activeTeam].ships[activeBoat]]);
    }
}

//postions the turning arrows
function repositionArrows(){
    // console.log(ships[teams[activeTeam].ships[activeBoat]].moveType);
    if(ships[teams[activeTeam].ships[activeBoat]].moveLeft<ships[teams[activeTeam].ships[activeBoat]].turnCost||ships[teams[activeTeam].ships[activeBoat]].hitpoints[7][1]<0){
        LeftArrow.style.visibility = "hidden";
        RightArrow.style.visibility = "hidden";
    }else if(ships[teams[activeTeam].ships[activeBoat]].moveType != "Flank"){
        LeftArrow.style.visibility = "visible";
        RightArrow.style.visibility = "visible";
        let selectedBoat = document.getElementById(`col${ships[teams[activeTeam].ships[activeBoat]].shipx}row${ships[teams[activeTeam].ships[activeBoat]].shipy}`);
        let selectedBoatPos = document.getElementById(`col${ships[teams[activeTeam].ships[activeBoat]].shipx}row${ships[teams[activeTeam].ships[activeBoat]].shipy}`).getBoundingClientRect();
        let angle = ships[teams[activeTeam].ships[activeBoat]].rotation*60/180*Math.PI;
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

//calls to roatte a ship
function rotateAShip(dir){
    ships[teams[activeTeam].ships[activeBoat]].rotate(dir);
    repositionArrows();
}



















let firing = false;

let firingWeapon;
let firingSide;
let selectedAmmo = "";
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

let weaponDamages=[[5,8,15,20,25,30,35,40,45],[8,15,20,0,0,0,0,0,0],[0,0,0,30,35,40,0,0,0],[0,0,0,0,0,0,60,65,70]];
let weaponTypes=["Cannon","Long Nine","Carronade","Paixhan"];
let ammoRanges=[[[9,18,27],[8,16,24],[7,14,21],[6,12,18],[5,10,15],[4,8,12],[3,6,9],[2,4,6],[1,2,3]],[[9,18,36],[8,16,32],[7,14,28],[6,12,24],[5,10,20],[4,8,16],[3,6,12],[2,4,8],[1,2,4]],[[9,11,13],[8,10,12],[7,9,11],[6,8,10],[5,7,9],[4,6,8],[3,5,7],[2,4,6],[1,3,5]]]
let ammoTypes = ["Round Shot","Grape Shot","Chain Shot"];
let poundages = [6,8,9,12,18,24,32,36,42];

let timeOutToStop;

//select the weapon to fire
function FireWeapon(side,weapon){
    if(firingSide==side&&firingWeapon==weapon&&firing == true){
        stopFiring();
        activeAllAmmo();
    }else if(ships[teams[activeTeam].ships[activeBoat]].Weapons[side][weapon][3]>0){
        firingWeapon = weapon;
        firingSide = side;
        firing = true;
        attacker = ships[teams[activeTeam].ships[activeBoat]];
        anglerIfy();
        setFiringWeapon(firingWeapon,firingSide);

        switch(ships[teams[activeTeam].ships[activeBoat]].Weapons[side][weapon][0]){
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
        // ships[teams[activeTeam].ships[activeBoat]].Weapons[side][weapon][3]--;
        // setAttackButtons();
    }else{
        stopFiring();
        activeAllAmmo();
    }
}

//allows all ammo to be selected
function activeAllAmmo(){
    document.getElementById("SelectAmmoRound Shot").style.visibility = "visible"
    document.getElementById("SelectAmmoGrape Shot").style.visibility = "visible"
    document.getElementById("SelectAmmoChain Shot").style.visibility = "visible"
}

//position and rotate the image that shows firing angles
function adjustAnglePNG(){
    attacker = ships[teams[activeTeam].ships[activeBoat]];
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

//adjusts the cannon flash location and roatation
function adjustFirePNG(){
    attacker = ships[teams[activeTeam].ships[activeBoat]];
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

// positions and rotates the hit/miss marker for the ships
function adjustHitPNG(defender){
    // console.log("placing hit2");
    attacker = ships[teams[activeTeam].ships[activeBoat]];
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    sourcex = defender.ship.getBoundingClientRect().left+defender.ship.getBoundingClientRect().width/2;
    sourcey = defender.ship.getBoundingClientRect().top+defender.ship.getBoundingClientRect().height/2;

    let attackx = attacker.ship.getBoundingClientRect().left+attacker.ship.getBoundingClientRect().width/2;
    let attacky = attacker.ship.getBoundingClientRect().top+attacker.ship.getBoundingClientRect().height/2;

    offsetx = sourcex-attackx
    // console.log("offsetx: ",offsetx);
    offsety = sourcey-attacky
    // rotationHit = angle-30-90-(ships[teams[activeTeam].ships[activeBoat]].rotation*60)
    let rotationHit = Math.atan2(offsety,offsetx)/Math.PI*180+30;
    while(rotationHit>180||rotationHit<-180){
        if(rotationHit>180){
            rotationHit-=360;
        }
        if (rotationHit<-180){
            rotationHit+=360;
        }
    }
    // console.log(`angle: ${rotationHit}`);
    hitAnim.style.left = `${sourcex-hitAnim.width/2}px`;
    hitAnim.style.top = `${sourcey-hitAnim.height/2}px`;
    if(hitAnim.getAttribute("src")=="../IMG/explosion_impact.gif"){
        hitAnim.style.rotate = `${rotationHit}deg`
    }else{
        hitAnim.style.rotate = `${0}deg`
    }
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

// deselect all firing components
function stopFiring(){
    firing = false;
    setFiringWeaponRaw("");
    setFiringAmmo("");
    angler.style.visibility ="hidden";
}

//selects the sprite for the fireing angle image
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

//display the firing animation
function fireIfy(){
    fireAnim.style.visibility ="visible";
    fireAnim.setAttribute("src","../IMG/cannonFlash.gif")
    adjustFirePNG()
}

//hide the firing animation
function fireIfNt(){
    fireAnim.style.visibility ="hidden";
}
//display the hit animation
function hitIfy(defender){
    // console.log("placing hit1");
    hitAnim.style.visibility ="visible";
    hitAnim.setAttribute("src","../IMG/indicator_miss.png")
    adjustHitPNG(defender)
}
//hide the hit animation
function hitIfNt(){
    hitAnim.style.visibility ="hidden";
}

//selects an ammo to fire with
function selectAmmo(ammo){
    selectedAmmo = ammo;
    setFiringAmmo(ammo);
    adjustAnglePNG()
}

//runs the attack calculations
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
    angle += ships[teams[activeTeam].ships[activeBoat]].rotation*60
    // console.log(`*: ${angle}`);

    if(InView(attacker, defender)){
        console.log("ahh")
        // console.log("clicked");
        let ammoRemains = false;
        let damage
        if(selectedAmmo!=""){
            for(let ammo of attacker.ammo){
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
            adjustHitPNG(defender)
            ships[teams[activeTeam].ships[activeBoat]].Weapons[firingSide][firingWeapon][3]--;
                setAttackButtons();
            if(ships[teams[activeTeam].ships[activeBoat]].Weapons[firingSide][firingWeapon][3]<=0){
                firing = false;
                angler.style.visibility ="hidden";
            }
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------You lost The Game
// checks if the opponet is in the angle and range of the selected weapon
function InView(attacker, defender){
    let canHit = true;
    let range;
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
    // console.log(canHit+"1")
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
    // console.log(canHit+"2")
    try{
        if(offset<range){
        }else{
            canHit=false
        }
    }catch{
        canHit=false
    }
    // console.log(canHit+"3")

    return canHit;
}

//calcualtes the chance to hit and then rolls to see if it will
function willItHit(attacker,defender){
    hexRef = document.getElementById("col0row0").getBoundingClientRect();
    // console.log(`team ${activeTeam}`);
    // console.log(`boat ${activeBoat}`);
    // console.log(ships[teams[activeTeam].ships[activeBoat]].captainSkill);
    let ToBeat = attacker.captainSkill;
    for(let i=0;i<ammoTypes.length;i++){
        if(ammoTypes[i]==selectedAmmo){
            for(let j=0;j<poundages.length;j++){
                if(poundages[j]==attacker.Weapons[firingSide][firingWeapon][1]){
                    let range = ammoRanges[i][j];
                    // console.log(`short ${range[0]*((hexRef.height*0.75))}`);
                    // console.log(`med ${range[1]*((hexRef.height*0.75))}`);
                    // console.log(`long ${range[2]*((hexRef.height*0.75))}`);
                    // console.log(`dist: ${offset}`)
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
    // console.log(`move type: ${attacker.moveType}`)
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
    // console.log(`dist traveled: ${distTraveled}`)
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


    let defhex = document.getElementById(`col${defender.shipx}row${defender.shipy}`);
    if(defhex.getAttribute("Src") == "IMG/hex_island.png"){
        ToBeat+=2;
    }else if(defhex.getAttribute("Src") == "IMG/hex_rocks.png"){
        ToBeat+=1;
    }
    // console.log(`Must beat: ${ToBeat}`);
    return ToBeat<Math.round(Math.random()*12);
}

//applies damage to the target
function Hit(damage,clusterSize,target){
    for(let i =0;i<Math.ceil(damage/clusterSize);i++){
        let location = Math.floor(Math.random()*(target.hitpoints.length))
        if(location==6&&selectedAmmo=="Chain Shot"){
            target.hitpoints[location][2] += Math.min(clusterSize,(damage-clusterSize*i)*2.5);
        }else{
            target.hitpoints[location][2] += Math.min(clusterSize,(damage-clusterSize*i));
            console.log(`doing ${Math.min(clusterSize,(damage-clusterSize*i))} to ${location}`)
        }
    }
    setShip(target);
}


















//count the nuber of ships you have
let sidebar = document.getElementById("SideBarContent");
let numberOfShips
if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);


let GameControls;

//adds ship selection and the start button
function addStart(){
    sidebar = document.getElementById("SideBarContent");
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        console.log(teams[i].hash);
        if(teams[i].hash==selfId){
            sidebar.innerHTML+=`<h3>Player ${i+1} Ships</h3>`;
            for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
                sidebar.innerHTML+=`<input list="ShipList" name="Player${i}ShipSelect${j}" id="Player${i}ShipSelect${j}" placeholder="Player ${i+1}: Ship ${j+1}" autocomplete="off">`;
            }
            sidebar.innerHTML+=`<br>`;
        }
    }
    sidebar.innerHTML+=`<datalist id="ShipList">
                    </datalist>`;
    // let startButton = document.createElement('button');
    // startButton.id = `makeBoard`;
    // startButton.innerText = "start";
    // startButton.addEventListener("click",startGame);
    // sidebar.appendChild(startButton);
    if(hosting){
        sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="makeBoard">start</button>\n`);
        setTimeout((e)=>{document.getElementById("makeBoard").addEventListener("click",startGame)},100);
    }
    // console.log(`made button`);
    let ShipList = document.getElementById("ShipList");
    for(let i =0;i<builtIn.length;i++){
        window.localStorage.setItem(`ship${-(i+1)}`,builtIn[i]);
    }
    for(let i = -builtIn.length;i<window.localStorage.getItem('numberOfShips');i++){
        let storedShip = JSON.parse(window.localStorage.getItem(`ship${i}`));
        let shipItem = document.createElement("option");
        shipItem.setAttribute("id",`Ship${i}`);
        shipItem.setAttribute("class","GameListShip");
        // shipItem.innerText = storedShip.name;
        shipItem.value = storedShip.name;
        ShipList.append(shipItem);
    }

}

//ermoves the ship select and start buttons
function removeStart(){
    clearGameControls()
}

//adds the movement phase info
function addMoveProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<div id="phaseDiv"><p id="phase">Phase: Move</p>\n         <img id="phaseIndicator" src="/IMG/indicator_phase_move.png"></div>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n                <p id="Movement left">Movement Left:</p>\n  `);
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="nextBoat">Finish Turn</button>`);
    document.getElementById("nextBoat").addEventListener("click",nextBoatMove);
    if(teams[activeTeam].hash==selfId){
        document.getElementById("nextBoat").style.visibility = "visible";
    }else{
        document.getElementById("nextBoat").style.visibility = "hidden";
    }
}
//adds the attack phase info
function addAttackProgress(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = sidebar.innerHTML.concat(`<div id="phaseDiv"><p id="phase">Phase: Move</p>\n          <img id = "phaseIndicator" src="/IMG/indicator_phase_battle.png"></div>\n                <p id="activeTeam">Active Team:</p>\n                <p id="activeBoat">Active Boat:</p>\n       <p id="firingWeapon">Firing:</p>\n    <p id="firingAmmo">With:</p>\n         `);
    sidebar.innerHTML = sidebar.innerHTML.concat(`<button id="nextBoat">Finish Turn</button>`);
    document.getElementById("nextBoat").addEventListener("click",nextBoatAttack);
    if(teams[activeTeam].hash==selfId){
        document.getElementById("nextBoat").style.visibility = "visible";
    }else{
        document.getElementById("nextBoat").style.visibility = "hidden";
    }
}

//clears the sidebars main section
function clearSidebar(){
    sidebar = document.getElementById("SideBarContent");
    sidebar.innerHTML = "";

}

//adds the movement speed selection buttons
function setSpeedSelection(){
    document.getElementById("nextBoat").style.visibility = "hidden";
    if(teams[activeTeam].hash==selfId){
    document.getElementById("nextBoat").style.visibility = "visible";
        GameControls = document.getElementById("GameControls");
        if(ships[teams[activeTeam].ships[activeBoat]].hitpoints[6][1]>0){
            GameControls.innerHTML = GameControls.innerHTML.concat(`<p>Select movement speed:</p>  <button class="SpeedSet" id = "SpeedCruise" >Cruise</button>
            <button class="SpeedSet" id = "SpeedFullSteam" >Full Steam</button>
            <button class="SpeedSet" id = "SpeedFlank" >Flank</button>`);
            document.getElementById("SpeedCruise").addEventListener("click",(e)=>setSpeed(0))
            document.getElementById("SpeedFullSteam").addEventListener("click",(e)=>setSpeed(1))
            document.getElementById("SpeedFlank").addEventListener("click",(e)=>setSpeed(2))
        }else{
            GameControls.innerHTML = GameControls.innerHTML.concat(`<p>Select movement speed:</p>  <button class="SpeedSet" id = "SpeedCruise" >Cruise</button>`);
            document.getElementById("SpeedCruise").addEventListener("click",(e)=>setSpeed(0))
        }
        setTimeout((e) => adjustAll(),100)
    }
}

//adds the attack buttons for selecting weapons ammo and health
function setAttackButtons(){
    document.getElementById("nextBoat").style.visibility = "hidden";
    if(teams[activeTeam].hash==selfId){
    document.getElementById("nextBoat").style.visibility = "visible";
        GameControls = document.getElementById("GameControls");
        GameControls.innerHTML = GameControls.innerHTML=`<h3>Weapons:</h3>`;
            if(ships[teams[activeTeam].ships[activeBoat]].Weapons[0].length>0&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[1][1]>0){
                GameControls.innerHTML+=`Bow:<hr class ="smallDivider">`;
            }
            for(let i=0;i<ships[teams[activeTeam].ships[activeBoat]].Weapons[0].length&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[1][1]>0;i++){
            GameControls.innerHTML+=`${ships[teams[activeTeam].ships[activeBoat]].Weapons[0][i][2]}x ${ships[teams[activeTeam].ships[activeBoat]].Weapons[0][i][1]}lb ${ships[teams[activeTeam].ships[activeBoat]].Weapons[0][i][0]}      ${ships[teams[activeTeam].ships[activeBoat]].Weapons[0][i][3]}/${ships[teams[activeTeam].ships[activeBoat]].Weapons[0][i][2]}`;
            GameControls.innerHTML+=`<button id="FireSide0Weapon${i}" >Select</button><br>`;
            setTimeout((e)=>{
                document.getElementById(`FireSide0Weapon${i}`).addEventListener("click",(e)=>FireWeapon(0,i));
            },100)
        }
        if(ships[teams[activeTeam].ships[activeBoat]].Weapons[1].length>0&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[3][1]>0){
            GameControls.innerHTML+=`Port:<hr class ="smallDivider">`;
        }
        for(let i=0;i<ships[teams[activeTeam].ships[activeBoat]].Weapons[1].length&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[3][1]>0;i++){
            GameControls.innerHTML+=`${ships[teams[activeTeam].ships[activeBoat]].Weapons[1][i][2]}x ${ships[teams[activeTeam].ships[activeBoat]].Weapons[1][i][1]}lb ${ships[teams[activeTeam].ships[activeBoat]].Weapons[1][i][0]}      ${ships[teams[activeTeam].ships[activeBoat]].Weapons[1][i][3]}/${ships[teams[activeTeam].ships[activeBoat]].Weapons[1][i][2]}`;
            GameControls.innerHTML+=`<button id="FireSide1Weapon${i}" >Select</button><br>`;
            setTimeout((e)=>{
                document.getElementById(`FireSide1Weapon${i}`).addEventListener("click",(e)=>FireWeapon(1,i));
            },100)
        }
        if(ships[teams[activeTeam].ships[activeBoat]].Weapons[2].length>0&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[4][1]>0){
            GameControls.innerHTML+=`<br>Starboard:<hr class ="smallDivider">`;
        }
        for(let i=0;i<ships[teams[activeTeam].ships[activeBoat]].Weapons[2].length&&ships[teams[activeTeam].ships[activeBoat]].hitpoints[4][1]>0;i++){
            GameControls.innerHTML+=`${ships[teams[activeTeam].ships[activeBoat]].Weapons[2][i][2]}x ${ships[teams[activeTeam].ships[activeBoat]].Weapons[2][i][1]}lb ${ships[teams[activeTeam].ships[activeBoat]].Weapons[2][i][0]}      ${ships[teams[activeTeam].ships[activeBoat]].Weapons[2][i][3]}/${ships[teams[activeTeam].ships[activeBoat]].Weapons[2][i][2]}`;
            GameControls.innerHTML+=`<button id="FireSide2Weapon${i}" >Select</button><br>`;
            setTimeout((e)=>{
                document.getElementById(`FireSide2Weapon${i}`).addEventListener("click",(e)=>FireWeapon(2,i));
            },100)
        }
        GameControls.innerHTML+=`<hr class="bigDivider">`;
        GameControls.innerHTML+=`<h3>Ammo:</h3>`;
        for(let i=0;i<ships[teams[activeTeam].ships[activeBoat]].ammo.length;i++){
            GameControls.innerHTML+=`${ships[teams[activeTeam].ships[activeBoat]].ammo[i][0]}: ${ships[teams[activeTeam].ships[activeBoat]].ammo[i][2]}/${ships[teams[activeTeam].ships[activeBoat]].ammo[i][1]}`;
            GameControls.innerHTML+=`<button id="SelectAmmo${ships[teams[activeTeam].ships[activeBoat]].ammo[i][0]}" >Select</button><br>`;
            setTimeout((e)=>{
                document.getElementById(`SelectAmmo${ships[teams[activeTeam].ships[activeBoat]].ammo[i][0]}`).addEventListener("click",(e)=>selectAmmo(ships[teams[activeTeam].ships[activeBoat]].ammo[i][0]));
            },100)
        }
        GameControls.innerHTML+=`<hr class="bigDivider">`;
        let shipParts = ["Bridge","Bow","Aft","Port","Starboard","Bilge","Mast","Rudder"]
        GameControls.innerHTML+=`<h3>Hitpoints:</h3>`;
        for(let i=0;i<ships[teams[activeTeam].ships[activeBoat]].hitpoints.length;i++){
            GameControls.innerHTML+=`${shipParts[i]}: ${ships[teams[activeTeam].ships[activeBoat]].hitpoints[i][1]}/${ships[teams[activeTeam].ships[activeBoat]].hitpoints[i][0]}<br>`;
        }
        setTimeout((e) => adjustAll(),100)
    }
}
    
//clear the controll section of the sidebar 
function clearGameControls(){
    GameControls = document.getElementById("GameControls")
    GameControls.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

//clear the piece info section of the sidebar
function clearPieceInfo(){
    PieceInfo = document.getElementById("PieceInfo")
    PieceInfo.innerHTML = "";
    setTimeout((e) => adjustAll(),100)
}

//sets the phase on the sidebar
function setPhase(input){
    document.getElementById("phase").innerText = `Phase: ${input}`;
    switch(input){
        case "Attack":
            
        break;
        case "Move":

        break;
    }
}

//sets the team on the sidebar
function setTeam(input){
    document.getElementById("activeTeam").innerText = `Active Team: ${input+1}`;
}

//sets the boat on the sidebar
function setBoat(input){
    document.getElementById("activeBoat").innerText = `Active Boat: ${input+1}`;
}

//sets the move left on the sidebar
function setMoveLeft(input){
    document.getElementById("Movement left").innerText = `Movement Left: ${input}`;
}

let sides = ["Bow","Port","Starboard"]

//sets the firing weapon on the sidebar
function setFiringWeapon(input,input2){
    document.getElementById("firingWeapon").innerText = `Firing:${ships[teams[activeTeam].ships[activeBoat]].Weapons[input2][input][1]}lb ${ships[teams[activeTeam].ships[activeBoat]].Weapons[input2][input][0]} on ${sides[input2]}`;
}

//sets the firing weapon on the sidebar to a raw value
function setFiringWeaponRaw(input){
    document.getElementById("firingWeapon").innerText = `Firing:${input}`;
}

//sets the ammo on the sidebar
function setFiringAmmo(input){
    document.getElementById("firingAmmo").innerText = `With:${input}`;
}












let teams = [];

//object for a team
class Team{
    constructor(ships = [],teamNum){
     this.ships = ships;
     this.teamNum = teamNum;
     this.hash = null;
     teams.push(this); 
    }
}

//shuffles the teams for random initative
function shuffleTeams(){
    for (var i = teams.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = teams[i];
        teams[i] = teams[j];
        teams[j] = temp;
    }
    var temp = teams[0];
    teams[0] = teams[teams.length - 1];
    teams[teams.length - 1] = temp;
}

function setTeamhash(teamNum,hash){
    teams[teamNum].hash=hash
}

for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
    let teamPlaceHoler = new Team([],i);
}












let activeTeam = 0;
let activeBoat=0;
let selectedShipsValid = []
var foo = [];

for (var i = 1; i <= parseInt(window.localStorage.getItem('PlayerCount')); i++) {
   selectedShipsValid.push(false);
}
let selectedAll = true;

//starts the game
function startGame(){
    // console.log("starting")
    if(myShipsAreSelected()){
        selectedShipsValid[0] = myShipsAreSelected();
        shipsAreSelected();
        setTimeout(
            ()=>{
                selectedAll = true;
                for(let shipvalidity of selectedShipsValid){
                    if(shipvalidity!=true){
                        selectedAll = false;
                    }
                }
                if(selectedAll){
                    setAllStats();
                    setTimeout(
                        ()=>{

                            removeStart();
                            startMovePhase();
                            sendStart(true);
                        },300
                    );
                }else{
                    alert("Please have other players select valid ships");
                }
            },1000
        )
    }else{
        alert("Please select valid ships");
    }
}

// makes sure that the players select actual ships when selecting from their custom ships
function shipsAreSelected(){
    let selectedAll = false;
    sendSelectedQuery(true);
}

// makes sure that the players select actual ships when selecting from their custom ships
function myShipsAreSelected(){
    let selected = true;
    for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
        if(teams[i].hash==selfId){
            for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
                let isValid = false
                for(let k = -builtIn.length;k<parseInt(window.localStorage.getItem('numberOfShips'));k++){
                    if(document.getElementById(`Player${i}ShipSelect${j}`).value == JSON.parse(window.localStorage.getItem(`ship${k}`)).name){
                        isValid = true
                    }
                }
                if(!isValid){
                    selected=false;
                }
            }
        }
    }
    return selected;
}

//Updates the board during the move phase
function updateMove(){
    try{

        ships[teams[activeTeam].ships[activeBoat]].deselectColor();
        
        ships[teams[activeTeam].ships[activeBoat]].selectColor();
        repositionArrows()
        setPhase("Move");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
        setMoveLeft(ships[teams[activeTeam].ships[activeBoat]].moveLeft);
        if(ships[teams[activeTeam].ships[activeBoat]].moveLeft==0){
            moveShadent(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
        }else{
            moveShade(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
        }
    }catch{}
}

// selects the next boat during the move phase
function nextBoatMove(){
    if(teams[activeTeam].hash==selfId){
        sendNextBoat(true);
    }
    console.log("next move")
    ships[teams[activeTeam].ships[activeBoat]].deselectColor();
    moveShadent(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
    clearPieceInfo();
    clearGameControls();
    ships[teams[activeTeam].ships[activeBoat]].exhausted = true;
    activeBoat++;
    if(activeBoat>teams[activeTeam].ships.length-1){
        activeTeam++;
        activeBoat = 0;
    }
    if(activeTeam>=teams.length){
        StartAttackPhase();
    }else{
        if(ships[teams[activeTeam].ships[activeBoat]].alive==false){
            nextBoatMove()
        }else{
            setSpeedSelection();
            ships[teams[activeTeam].ships[activeBoat]].selectColor();
            ships[teams[activeTeam].ships[activeBoat]].moveLeft = 0;
            repositionArrows()
            setPhase("Move");
            setTeam(teams[activeTeam].teamNum);
            setBoat(activeBoat);
            setMoveLeft(ships[teams[activeTeam].ships[activeBoat]].moveLeft);
            moveShade(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
        }
    }
}

// selects the next boat during the attack phase
function nextBoatAttack(){
    if(teams[activeTeam].hash==selfId){
        sendNextBoat(true);
    }
    console.log("next attack")
    ships[teams[activeTeam].ships[activeBoat]].deselectColor();
    moveShadent(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
    clearPieceInfo();
    stopFiring();
    ships[teams[activeTeam].ships[activeBoat]].exhausted = true;
    activeBoat++;
    selectedAmmo = "";
    if(activeBoat>teams[activeTeam].ships.length-1){
        activeTeam++;
        activeBoat = 0;
    }
    if(activeTeam>=teams.length){
        startMovePhase();
    }else{
        if(ships[teams[activeTeam].ships[activeBoat]].alive==false){
            nextBoatAttack()
        }else{
            setAttackButtons();
            ships[teams[activeTeam].ships[activeBoat]].selectColor();
            setPhase("Attack");
            setTeam(teams[activeTeam].teamNum);
            setBoat(activeBoat);
        }
    }

}

// selects the speed of the boat during the move phase
function setSpeed(speed){
    if(speed == 1){
        ships[teams[activeTeam].ships[activeBoat]].moveType = "Full";
    }else if(speed == 2){
        ships[teams[activeTeam].ships[activeBoat]].moveType = "Flank";
    }else{
        ships[teams[activeTeam].ships[activeBoat]].moveType = "Cruise";
    }
    ships[teams[activeTeam].ships[activeBoat]].moveLeft = ships[teams[activeTeam].ships[activeBoat]].movePower[speed];
    moveShade(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
    clearGameControls();
    updateMove();
    repositionArrows();
}

// starts the movement phase
function startMovePhase(){
    shuffleTeams();
    sendTeams(teams);
    setTimeout(
        ()=>{
            sendTeams(teams);
        },100
    )
    console.log(teams);
    clearSidebar();
    clearGameControls()
    damageAll()
    activeTeam = 0;
    activeBoat = 0;
    readyAll();
    addMoveProgress();
    if(ships[teams[activeTeam].ships[activeBoat]].alive==false){
        nextBoatMove()
    }else{
        setSpeedSelection();
        ships[teams[activeTeam].ships[activeBoat]].selectColor();
        ships[teams[activeTeam].ships[activeBoat]].moveLeft = 0;
        repositionArrows()
        setPhase("Move");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
        setMoveLeft(ships[teams[activeTeam].ships[activeBoat]].moveLeft);
        moveShade(ships[teams[activeTeam].ships[activeBoat]].shipx,ships[teams[activeTeam].ships[activeBoat]].shipy);
    }
    
}

// starts the attack phase
function StartAttackPhase(){
    //startMovePhase();
    firing = false;
    firingWeapon = "";
    firingSide="";
    selectedAmmo="";
    LeftArrow.style.visibility = "hidden";
    RightArrow.style.visibility = "hidden";
    clearSidebar();
    // readyAll()
    activeTeam = 0;
    activeBoat = 0;
    addAttackProgress();
    if(ships[teams[activeTeam].ships[activeBoat]].alive==false){
        nextBoatAttack()
    }else{
        setAttackButtons();
        ships[teams[activeTeam].ships[activeBoat]].selectColor();
        setPhase("Attack");
        setTeam(teams[activeTeam].teamNum);
        setBoat(activeBoat);
    }
}










































import { joinRoom, selfId } from 'https://cdn.skypack.dev/trystero/ipfs';
const config = {appId: 'ScalawagSeas'};
let room
if(hosting){
    console.log(`Match${selfId}`);
    console.log(`hosting`)
    room = joinRoom(config, `Match${selfId}`);
    document.getElementById("CodeDisHer").innerText = `Join Code: ${selfId}`
}else{
    console.log(`Match${window.localStorage.getItem('savedJoinCode')}`);
    console.log(`hostint`)
    room = joinRoom(config, `Match${window.localStorage.getItem('savedJoinCode')}`);
    document.getElementById("CodeDisHer").innerText = `Join Code: ${window.localStorage.getItem('savedJoinCode')}`
}
const [sendName, getName] = room.makeAction('name');
const [sendMsg, getMsg] = room.makeAction('message');
const [sendShip, getShip] = room.makeAction('ShipUpdate');
const [sendTeamsH, getTeamsH] = room.makeAction('TeamHash');
const [sendTeams, getTeams] = room.makeAction('Team');
const [sendBoard, getBoard] = room.makeAction('Board');
const [sendSelectedQuery, getSelectedQuery] = room.makeAction('SelectedQue');
const [sendShipSelect, getShipSelect] = room.makeAction('ShipSelect');
const [sendLocalStore, getLocalStore] = room.makeAction('LocalStore');
const [sendStart, getStart] = room.makeAction('Start');
const [sendNextBoat, getNextBoat] = room.makeAction('NextBoat');

const idsToNames = {}; // map of peer ids to names
// const nameInput = document.getElementById('nameInput');
// const nameButton = document.getElementById('nameButton');

let myName = `Anonymouse`; // name based on peer id
// nameInput.placeholder = `${myName} #${selfId.substring(0, 4)}`; // update placeholder
console.log(`My peer id is ${selfId} and my name is ${myName}`);


// random hash generator for future use
function randomHash() {
  return Math.random().toString(36).substring(2, 15);
}


setTimeout(
    ()=>{
        if(hosting){
            teams[0].hash=selfId;
        }
    },10
);

// listen to peer activity
room.onPeerJoin( (peerId) => {
    console.log(`${peerId} joined`);
    sendName(`${myName} #${selfId.substring(0, 4)}`, peerId); // tell newcomers our name
    if(hosting){
        sendLocalStore([window.localStorage.getItem('BoatCount'),window.localStorage.getItem('PlayerCount')],peerId);
        let freeTeam = -1;
        for(let i=0;i<teams.length&&freeTeam==-1;i++){
            if(teams[i].hash==null){
                freeTeam=i
            }
        }
        if(freeTeam!=-1){
            teams[freeTeam].hash=peerId.toString();
        }
        // console.log("new hash: ");
        // console.log(teams[freeTeam].hash.toString());
        sendTeamsH(teams);
        // console.log('sending teams: ');
        // console.log(teams);
        sendBoard([Board.innerHTML,boardHeight,boardWidth],peerId);
        setTimeout(
            ()=>{

                for(let ship of ships){
                    setShip(ship);
                }
            },500
        )
    }
    //appendMessage('', peerId);
});

room.onPeerLeave( (peerId) => {
    console.log(`${idsToNames[peerId] || 'a weird stranger'} left`);
    // updatePeers(); // update peer list
    for(let i = 0;i<teams.length;i++){
        if(teams[i].hash==peerId){
            teams[i].hash==null;
        }
    }
});

// receive peer names
getName((name, peerId) => {
  (idsToNames[peerId] = name);
  // console.log(
  //   `${peerId} changed name to ${name}`
  //   )
    // appendMessage(`${idsToNames[peerId]} changed name to ${name}.`, peerId);
    // updatePeers(); // update peer list
});

// function updatePeers() { // update peer list
//   const peerList = document.getElementById('peers');
//   const peerCount = document.getElementById('peerCount');
//   peerList.innerHTML = ''; // clear list
//   peerCount.innerHTML = room.getPeers().length; // update count
//   room.getPeers().forEach((peerId) => {
//     const listItem = document.createElement('li');
//     listItem.appendChild(document.createTextNode(idsToNames[peerId] || peerId));
//     peerList.appendChild(listItem);
//   });
// }

// message sending
// const messageInput = document.getElementById('messageInput');
// const messageButton = document.getElementById('messageButton');

// nameButton.addEventListener('click', () => {
//   console.log(`Changing name to ${nameInput.value}`); // log name change
//   myName = nameInput.value; // update name
//   sendName(`${myName} #${selfId.substring(0, 4)}`); // tell everyone our new name
//   nameInput.placeholder = `${myName} #${selfId.substring(0, 4)}`; // update placeholder
//   nameInput.value = ''; // clear input
//   console.log(idsToNames);
// });

// messageButton.addEventListener('click', () => {
//   if(messageInput.value === '') {
//     return // don't send empty messages
//   } else {
//     sendMsg(messageInput.value);
//     appendMessage(messageInput.value, selfId);
//   }
//   messageInput.value = ''; // clear input
// })

// message receiving
// const messageList = document.getElementById('chat');

// function appendMessage(message, peerId) {
//   const listItem = document.createElement('li');
//   let text = '';
//   if(peerId === selfId) { // if message is from self
//     listItem.classList.add('self');
//     text = `Me: ${message}`;
//   } else if(idsToNames[peerId] === undefined) { //a new peer joined
//     listItem.classList.add('join');
//     text = `#${peerId.substring(0,4)} joined the chat.`;
//   } else { // if message is from someone else
//     listItem.classList.add('other');
//     text = `${idsToNames[peerId]}: ${message}`;
//   }
//   listItem.appendChild(document.createTextNode(text));
//   messageList.appendChild(listItem);
// }

getMsg((message, peerId) => {
  // appendMessage(message, peerId);
});


function setShip(ship){
    // console.log(ship);
    sendShip(ship);
}


getShip((ship,peerId) => {
    console.log(ship);
    console.log(ship.shipNum);
    ships[ship.shipNum].setStatsMulti(ship);
    ships[ship.shipNum].adjustShip();
    console.log(ships[ship.shipNum]);
    // console.log(`set to: ${ships[ship.shipNum]}`)
});

getTeamsH(
    (teamsIn,peerId) => {
        teams=teamsIn
        if(!hosting){
            let selected = false;
            for(let i = 0;i<teams.length&&selected==false;i++){
                if(teams[i].hash==selfId){
                    selected = true;
                }
            }
            for(let i = 0;i<teams.length&&selected==false;i++){
                if(teams[i].hash==null){
                    teams[i].hash==selfId
                    sendTeamsH(teams);
                }
            }
        }
    }
)

getTeams(
    (teamsIn,peerId) => {
        for(let i =0;i<teamsIn.length;i++){
            teams[i]=teamsIn[i]
        }
        console.log(teams);
    }
)

getBoard(
    ([boardIn,xIn,yIn],peerId) =>{
        // console.log(boardIn)
        boardHeight = xIn;
        boardWidth = yIn;
        Board.innerHTML = boardIn;
        for(let i = 0; i<parseInt(boardWidth);i++){
            for(let j = 0; j<parseInt(boardHeight);j++){
                let SubmitHex  = document.getElementById(`col${i}row${j}`);
                SubmitHex.addEventListener("click",(e) => moveShipClick(e.target.id));
                SubmitHex.addEventListener("mouseenter",(e)=>highlight(e.target.id));
                SubmitHex.addEventListener("mouseleave",(e)=>unhighlight(e.target.id));
            }
        }
        HexGrid = document.getElementById("HexGrid");
        setTimeout((e)=>{Board.addEventListener("click",updateMove);},100);
        setTimeout((e) =>makeBoats(),200);
        setTimeout((e) =>AdjustBoard(),200);
        setTimeout((e) =>AdjustBoard(),310);
        setTimeout((e) =>AdjustBoard(),500);
        setTimeout((e) => adjustAll(),300)
        setTimeout((e) => adjustAll(),3000)
    }
)

getSelectedQuery(
    (validity,peerId) =>{
        if(hosting){
            for(let i = 0;i<teams.length;i++){
                if(teams[i].hash==peerId){
                    selectedShipsValid[i]=validity
                }
            }
        }else{
            sendSelectedQuery(myShipsAreSelected(),teams[0].peerId)
        }
    }
)

getShipSelect(
    (shipsSet,peerId)=>{
        if(hosting){
            console.log(shipsSet);
            for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
                if(teams[i].hash==peerId){
                    for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
                        ships[teams[i].ships[j]].setStats(shipsSet[j])
                    }
                }
            }
        }else{
            for(let i = 0;i<parseInt(window.localStorage.getItem('PlayerCount'));i++){
                if(teams[i].hash==selfId){
                    let shipsTosend = []
                    for(let j = 0;j<parseInt(window.localStorage.getItem('BoatCount'));j++){
                        for(let k = -builtIn.length;k<parseInt(window.localStorage.getItem('numberOfShips'));k++){
                            if(document.getElementById(`Player${i}ShipSelect${j}`).value == JSON.parse(window.localStorage.getItem(`ship${k}`)).name){
                                shipsTosend.push(JSON.parse(window.localStorage.getItem(`ship${k}`)));
                            }
                        }
                    }
                    sendShipSelect(shipsTosend,peerId)
                }
            }
        }
    }
)

getLocalStore(
    ([shipCount,PlayerCount],peerId)=>{
        window.localStorage.setItem('BoatCount',shipCount)
        window.localStorage.setItem('PlayerCount',PlayerCount)
    }
)

getStart(
    (dummy,peerId)=>{
        removeStart();
        startMovePhase();
    }
)

getNextBoat(
    (dummy,peerId)=>{
        if(document.getElementById("phase").innerText.split("Phase: ")[1]=="Move"){
            nextBoatMove()
        }else{
            nextBoatAttack()
        }
    }
)





