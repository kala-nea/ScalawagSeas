let PlayerCountIn = document.getElementById("PlayerCount");
let BoatCountIn = document.getElementById("BoardCount");


PlayerCountIn.value=window.localStorage.getItem('PlayerCount');
BoatCountIn.value=window.localStorage.getItem('BoatCount');

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

IslandIn.addEventListener("change",setIs);
RocksIn.addEventListener("change",setRk);

function setIs(){
    window.localStorage.setItem('IslandCount',IslandIn.value);
}
function setRk(){
    window.localStorage.setItem('RockCount',RocksIn.value);
}