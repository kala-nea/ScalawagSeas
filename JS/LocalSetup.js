let PlayerCountIn = document.getElementById("PlayerCount");
let BoatCountIn = document.getElementById("BoatCount");

if (window.localStorage.getItem('PlayerCount') == null||window.localStorage.getItem('PlayerCount') == ""||parseFloat(window.localStorage.getItem('PlayerCount'))<2) {
    window.localStorage.setItem('PlayerCount', 2);
}
if (window.localStorage.getItem('BoatCount') == null||window.localStorage.getItem('BoatCount') == ""||parseFloat(window.localStorage.getItem('BoatCount'))<1) {
    window.localStorage.setItem('BoatCount', 1);
}

PlayerCountIn.value=window.localStorage.getItem('PlayerCount');
BoatCountIn.value=window.localStorage.getItem('BoatCount');
console.log(window.localStorage.getItem('BoatCount'));

PlayerCountIn.addEventListener("change",setPlayers);
BoatCountIn.addEventListener("change",setBoats);

function setPlayers(){
    // window.localStorage.setItem('PlayerCount',Math.abs(PlayerCountIn.value));
    window.localStorage.setItem('PlayerCount',PlayerCountIn.value);
    if (window.localStorage.getItem('PlayerCount') == null||window.localStorage.getItem('PlayerCount') == ""||parseFloat(window.localStorage.getItem('PlayerCount'))<2) {
        window.localStorage.setItem('PlayerCount', 2);
    }
}
function setBoats(){
    // window.localStorage.setItem('BoatCount',Math.abs(BoatCountIn.value));
    window.localStorage.setItem('BoatCount',BoatCountIn.value);
    if (window.localStorage.getItem('BoatCount') == null||window.localStorage.getItem('BoatCount') == ""||parseFloat(window.localStorage.getItem('BoatCount'))<1) {
        window.localStorage.setItem('BoatCount', 1);
    }
}


let BoardXIn = document.getElementById("BoardX");
let BoardYIn = document.getElementById("BoardY");

if (window.localStorage.getItem('BoardX') == null||window.localStorage.getItem('BoardX') == "") {
    window.localStorage.setItem('BoardX', 34);
}
if (window.localStorage.getItem('BoardY') == null||window.localStorage.getItem('BoardY') == "") {
    window.localStorage.setItem('BoardY', 16);
}

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

if (window.localStorage.getItem('IslandCount') == ""||window.localStorage.getItem('IslandCount') == null) {
    window.localStorage.setItem('IslandCount', 8);
}
if (window.localStorage.getItem('RockCount') == ""||window.localStorage.getItem('RockCount') == null) {
    window.localStorage.setItem('RockCount', 16);
}

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


let ResupplyIn = document.getElementById("ResupplyCount");

if (window.localStorage.getItem('ResupplyCount') == ""||window.localStorage.getItem('ResupplyCount') == null) {
    window.localStorage.setItem('ResupplyCount', 3);
}


ResupplyIn.value=window.localStorage.getItem('ResupplyCount');

ResupplyIn.addEventListener("change",setRs);

function setRs(){
    window.localStorage.setItem('ResupplyCount',ResupplyIn.value);
}