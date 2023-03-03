
let BoardXIn = document.getElementById("BoardX");
let BoardYIn = document.getElementById("BoardY");
let Board = document.getElementById("Board");

let Hex;
let HexColumn;
let HexGrid;

let boardWidth;
let boardHeight;
let boardBuilt = false;

//BoardXIn.addEventListener('change',(e) => MakeBoard());
//BoardYIn.addEventListener('change',(e) => MakeBoard());
makeBoardButton = document.getElementById("makeBoard");

window.addEventListener('resize',resizeBoard);

function MakeBoard(){
    try{
        boardWidth = BoardXIn.value;
    }catch{}
    try{
        boardHeight = BoardYIn.value;
    }catch{}
    Board.innerHTML ="";
    HexGrid = document.createElement("section");
    HexGrid.setAttribute("class","Tiles");
    HexGrid.style.aspectRatio = `${boardWidth}/${1.15470051*boardHeight}`
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
    setTimeout(spaceify,100);
    function spaceify(){
        HexGrid.style.paddingBlockEnd = `${document.getElementById("col0row0").getBoundingClientRect().height/2}px`
        Board.style.paddingBlockEnd =`${document.getElementById("col0row0").getBoundingClientRect().height/2+20}px`
        Board.innerHTML ="";
        Board.appendChild(HexGrid);
    }
    if(!boardBuilt){
        clearSidebar();
        addBoatMake();
    }
    
    boardBuilt = true;
}

function resizeBoard(){
    if(boardBuilt==true){
        MakeBoard()
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
        hex.style.filter ="brightness(0.8)"
        
    }/*else if(hex.style.filter == "brightness(50%)"){
        hex.style.filter ="brightness(65%)"
    }*/
    if(hex.style.zIndex == "0"){

        hex.style.zIndex = "2";
    }
}

function unhighlight(id){
    let hex = document.getElementById(id);
    if(hex.style.filter == "brightness(0.8)"){
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
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
    
        }catch{}
        try{
            goal = document.getElementById(`col${col}row${row-1}`);
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
        }catch{}
    }else if(teams[activeTeam].ships[activeBoat].rotation==1||teams[activeTeam].ships[activeBoat].rotation==4){
        if(col%2==0){
            try{
                goal = document.getElementById(`col${col+1}row${row}`);
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row+1}`);
                
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row-1}`);
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
        }
    }else if(teams[activeTeam].ships[activeBoat].rotation==2||teams[activeTeam].ships[activeBoat].rotation==5){
        if(col%2==0){
            try{
                goal = document.getElementById(`col${col+1}row${row+1}`);
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row}`);
                
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
        }else{
            try{
                goal = document.getElementById(`col${col+1}row${row}`);
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
            try{
                goal = document.getElementById(`col${col-1}row${row-1}`);
                
                goal.style.filter ="brightness(0.5)";
                goal.style.zIndex = "1"
            }catch{}
        }
    }
    /*
    try{
        goal = document.getElementById(`col${col}row${row+1}`);
        goal.style.filter ="brightness(0.5)";
        goal.style.zIndex = "1"

    }catch{}
    try{
        goal = document.getElementById(`col${col}row${row-1}`);
        goal.style.filter ="brightness(0.5)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col+1}row${row}`);
        goal.style.filter ="brightness(0.5)";
        goal.style.zIndex = "1"
    }catch{}
    try{
        goal = document.getElementById(`col${col-1}row${row}`);
        goal.style.filter ="brightness(0.5)";
        goal.style.zIndex = "1"
    }catch{}
    if(col%2==0){
        try{
            goal = document.getElementById(`col${col+1}row${row+1}`);
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row+1}`);
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
        }catch{}
    }else{
        try{
            goal = document.getElementById(`col${col+1}row${row-1}`);
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row-1}`);
            
            goal.style.filter ="brightness(0.5)";
            goal.style.zIndex = "1"
        }catch{}
    }*/
    
}
function moveShadent(col,row){
    try{
        let goal = document.getElementById(`col${col}row${row+1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col}row${row-1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col+1}row${row}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
    }catch{}
    try{
        goal = document.getElementById(`col${col-1}row${row}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
    }catch{}
    if(col%2==0){
        try{
            goal = document.getElementById(`col${col+1}row${row+1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row+1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
        }catch{}
    }else{
        try{
            goal = document.getElementById(`col${col+1}row${row-1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
        }catch{}
        try{
            goal = document.getElementById(`col${col-1}row${row-1}`);
        goal.style.filter ="brightness(100%)";
        goal.style.zIndex = "0"
        }catch{}
    }
    
}
