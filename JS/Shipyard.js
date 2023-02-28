if(window.localStorage.getItem('numberOfShips') == null){
    numberOfShips = 0;
}else{
    numberOfShips = window.localStorage.getItem('numberOfShips');
}
window.localStorage.setItem('numberOfShips', numberOfShips);



function addCustomShip(newShip){
    window.localStorage.setItem(`ship${numberOfShips}`, JSON.stringify(newShip));
    numberOfShips++;
    window.localStorage.setItem('numberOfShips', numberOfShips);
}