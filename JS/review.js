// https://opensheet.elk.sh/1WXTuIFPG-pPBPeAwFx7vp5vntdw_3TfwngHbV-wZsvo/FormResponses1
function loadreviews () {
    // grabs json of response data
    let getJSON = function(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          let status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };

    // gets section to place reviews in
    let tableArea = document.getElementById("revSect");
    tableArea.replaceChildren('');

    // crates section to store reviews in
    let revTable = document.createElement("article");
    revTable.setAttribute("class", "hi")

    // creates variables to store each separate value of each review
    let revName;
    let revRate;
    let revTS;
    let revExp;

    let rateTotal = 0;
    let revCount = 0;

    getJSON('https://opensheet.elk.sh/1fKstg6LUiDjQxEDib5Im3n_e-4NADRWxv0r7EhZZG60/FormResponses1',
    function(err, data) {
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        for(review of data){
          revCount = revCount + 1;
            // creates the row that a review goes in
            let revRow = document.createElement("section");
            revRow.setAttribute("class", "revRow");
            let revSquare = document.createElement("section");
            revSquare.setAttribute("class", "revSquare");

            // saves the name of the reviewer to be put in the row
            revName = review.name;
            let revNameSect = document.createElement("p");
            revNameSect.textContent = "Review from " + revName;

            // saves the rating made by the reviewer
            revRate = review.rating;
            let revRateSect = document.createElement("p");
            let star = '\u2605';
            let noStar = "\u2606";
            revRateSect.textContent = (star.repeat(parseInt(revRate))) + (noStar.repeat(parseInt(10-revRate)));
            rateTotal = rateTotal + parseInt(revRate);

            // saves the timestamp of the review
            revTS = review.ts;
            revTSSect = document.createElement("p");
            revTSSect.textContent = "On " + revTS;

            // saves the review content
            revExp = review.exp;
            let revExpSect = document.createElement("p");
            revExpSect.textContent = "\u201C" + revExp + "\u201D";

            // place reviewer info in square area
            revSquare.append(revNameSect);
            revSquare.append(revRateSect);
            revSquare.append(revTSSect);
            // place square area and content in row
            revRow.append(revSquare);
            revRow.append(revExpSect);
            // place row in table
            revTable.append(revRow);
        }
        let totalRateRow = document.createElement("p");
        if (rateCount > 0) {
          let remain = 10 - Math.floor(totalRate / revCount);
          totalRateRow.textcontent = "Current Average Rating: " + star.repeat(Math.floor(totalRate / revCount)) + noStar.repeat(remain);
        } else {
          totalRateRow.textcontent = "Current Average Rating: None";
        }
        
        // places table on page
        tableArea.append(totalRateRow);
        tableArea.append(revTable);
      }
    });
}


// gets button to load reviews
let loadButton = document.getElementById("loadButton");
// gives load button the function
loadButton.addEventListener("click", loadreviews);