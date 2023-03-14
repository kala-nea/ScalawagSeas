





function FireWeapon(side,weapon){
    if(teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]>0){
        console.log("bang");
        teams[activeTeam].ships[activeBoat].Weapons[side][weapon][3]--;
        setAttackButtons();
    }
}