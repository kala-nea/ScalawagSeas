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

    getJSON('https://opensheet.elk.sh/1WXTuIFPG-pPBPeAwFx7vp5vntdw_3TfwngHbV-wZsvo/FormResponses1',
    function(err, data) {
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        for(review of data){
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
            revRateSect.textContent = revRate + " out of 10";

            // saves the timestamp of the review
            revTS = review.ts;
            revTSSect = document.createElement("p");
            revTSSect.textContent = "On " + revTS;

            // saves the review content
            revExp = review.exp;
            let revExpSect = document.createElement("p");
            revExpSect.textContent = "'" + revExp + "'";

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
        // places table on page
        tableArea.append(revTable);
      }
    });
}


// gets button to load reviews
let loadButton = document.getElementById("loadButton");
// gives load button the function
loadButton.addEventListener("click", loadreviews);