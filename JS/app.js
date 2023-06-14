let skill = document.getElementById("skill");
let moveCount = document.getElementById("moveCount");
let mc = parseFloat(moveCount.value);
let LCCount = document.getElementById("LCCount");
let HCCount = document.getElementById("HCCount");
let range = document.getElementById("range");
let r = parseFloat(range.value);
let typeM = document.getElementById("typeM");
let tm = parseFloat(typeM.value);
let typeT = document.getElementById("typeT");
let tt = parseFloat(typeT.value);
let output = document.getElementById("rtbOutput");

let moveValues = { 0: 0, 1: 1, 2: 2 };
let moveCountValues = {
  25: 6, 18: 5, 10: 4, 7: 3, 5: 2, 3: 1, 0: 0
};
let tileValues = { 0: 0, 1: 1, 2: 2 };
let rangeValues = { 0: 0, 1: 1, 2: 2 };

function getRollToBeat () {
  let skillVal = parseFloat(skill.value);
  let moveVal = moveValues[tm] || 0;
  let mCountVal = moveCountValues[Math.floor(mc)] || 0;
  let tileVal = tileValues[tt] || 0;
  let lcCountVal = parseFloat(LCCount.value);
  let hcCountVal = 2 * parseFloat(HCCount.value);
  let rangeVal = rangeValues[r] || 0;

  let rollToBeat = skillVal + moveVal + mCountVal + tileVal + lcCountVal + hcCountVal + rangeVal;

  if (lcCountVal + hcCountVal - tileVal >= 3) {
    output.innerText = "You cannot see this Mech";
  } else if (rollToBeat > 12) {
    output.innerText = "You cannot attack this Mech";
  } else {
    output.innerText = "You can hit this Mech with a roll of " + rollToBeat + " or higher";
  }
}
