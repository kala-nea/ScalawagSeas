let teams = [];


class Team{
    constructor(ships = [],teamNum){
     this.ships = ships;
     this.teamNum = teamNum;
     teams.push(this); 
    }
}

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