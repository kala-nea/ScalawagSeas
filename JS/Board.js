
let BoardXIn = document.getElementById("BoardX");
let BoardYIn = document.getElementById("BoardY");
let Board = document.getElementById("Board");

let Hex;
let HexColumn;
let HexGrid;

BoardXIn.addEventListener('change',(e) => MakeBoard());
BoardYIn.addEventListener('change',(e) => MakeBoard());


function MakeBoard(){
    Board.innerHTML ="";
    HexGrid = document.createElement("section");
    HexGrid.setAttribute("class","Tiles");
    HexColumn = document.createElement("section");
    HexColumn.setAttribute("class","TileColumn");
    HexColumn.style.width = `${100/parseFloat(BoardXIn.value)}%`
    Hex = document.createElement("div");
    Hex.setAttribute("class","Tile");
    Hex.style.backgroundImage = "url(IMG/pexels-james-frid-1097016.jpg)";
    Hex.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
    Hex.style.width="100%";
    Hex.style.aspectRatio = `1/1`;
    
    for(let i = 0; i<parseFloat(BoardXIn.value);i++){
        let SubmitCol = HexColumn.cloneNode(true)
        SubmitCol.setAttribute(`id`,`col${i}`);
        for(let j = 0; j<parseFloat(BoardYIn.value);j++){
            let SubmitHex = Hex.cloneNode(true);
            SubmitHex.setAttribute(`id`,`col${i}row${j}`);
            SubmitHex.addEventListener("click",(e) => test(e.target.id));
            SubmitHex.addEventListener("hover",(e) => test(e.target.id));
            if(i%2==0){
                SubmitHex.style.top = `${100/BoardYIn.value/2}%`;
            }
            SubmitCol.appendChild(SubmitHex);
        }
        SubmitCol.style.right = `${((i-parseFloat(BoardXIn.value))+1)*100/(parseFloat(BoardXIn.value)*4)}%`;
        
        HexGrid.appendChild(SubmitCol);
    }
    Board.appendChild(HexGrid);
}

MakeBoard();

function test(text){
    console.log(text);
}