let PlayerCountIn = document.getElementById("PlayerCount");
let BoatCountIn = document.getElementById("BoardCount");


PlayerCountIn.value=window.localStorage.getItem('PlayerCount');
BoatCountIn.value=window.localStorage.getItem('BoatCount');

if (PlayerCountIn.value == 0) {
    PlayerCountIn.value = 2;
}
if (BoatCountIn.value == 0) {
    BoatCountIn.value = 1;
}

PlayerCountIn.addEventListener("change",setPlayers);
BoatCountIn.addEventListener("change",setBoats);

function setPlayers(){
    window.localStorage.setItem('PlayerCount',PlayerCountIn.value);
}
function setBoats(){
    window.localStorage.setItem('BoatCount',BoatCountIn.value);
}

let BoardXIn = document.getElementById("BoardX");
let BoardYIn = document.getElementById("BoardY");


BoardXIn.value=window.localStorage.getItem('BoardX');
BoardYIn.value=window.localStorage.getItem('BoardY');

if (BoardXIn.value == 0) {
    BoardXIn.value = 34;
}
if (BoardYIn.value == 0) {
    BoardYIn.value = 16;
}

BoardXIn.addEventListener("change",setX);
BoardYIn.addEventListener("change",setY);

function setX(){
    window.localStorage.setItem('BoardX',BoardXIn.value);
}
function setY(){
    window.localStorage.setItem('BoardY',BoardYIn.value);
}

let IslandIn = document.getElementById("IslandCount");
let RocksIn = document.getElementById("RockCount");


IslandIn.value=window.localStorage.getItem('IslandCount');
RocksIn.value=window.localStorage.getItem('RockCount');

if (IslandIn.value == 0) {
    IslandIn.value = 2;
}
if (RocksIn.value == 0) {
    RocksIn.value = 1;
}

IslandIn.addEventListener("change",setIs);
RocksIn.addEventListener("change",setRk);

function setIs(){
    window.localStorage.setItem('IslandCount',IslandIn.value);
}
function setRk(){
    window.localStorage.setItem('RockCount',RocksIn.value);
}