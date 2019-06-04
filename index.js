

window.onload = initAll;
var usedNums = new Array(76);
function initAll() {
    if (document.getElementById) {
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    }

    function newCard() {
        for (var i = 0; i < 24; i++) {
            setSquare(i);
        }
    }
    function anotherCard() {
        for (var i = 1; i < usedNums.length; i++) {
            usedNums[i] = false;
        }
        newCard();
        return false;
    }
    function setSquare(thisSquare) {
        var currSquare = "square" + thisSquare;
        var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
        
        var bingostatements = new Array("Stram kurs får 0 mandater",
            "Stram kurs får 1 mandat",
            "Stram kurs får over 1 mandat :(",
            "DF går mellem 0-5% tilbage",
            "DF går mellem 5-10% tilbage",
            "DF går mellem 10%  eller mere tilbage",
            "Social demokraterne bliver Danmarks største parti",
            "Venstre bliver Danmarks største parti",
            "Radikale venstre bliver Danmarks største parti",
            "Konservative bliver Danmarks største parti",
            "SF bliver Danmarks største parti",
            "Enhedslisten bliver Danmarks største parti",
            "Dansk folkeparti bliver Danmarks største parti",
            "Nye borgerlige bliver Danmarks mindste parti",
            "Klaus Riskær Pedersen bliver Danmarks mindste parti",
            "Kristendemokraterne bliver Danmarks mindste parti",
            "Stram kurs bliver Danmarks mindste parti",
            "Alternativet bliver Danmarks mindste parti",
            "En af værterne har rødt slips på",
            "En af værterne har blåt slips på",
            "En af værterne har grønt slips på",
            "En af værterne har lilla slips på",
            "Værten fucker et navn op",
            "Fuld partileder",
            "Gråd på TV",
            "Exitpolls tager meget fejl(hej DR)",
            "Rød regering",
            "Blå regering",
            "Anden konstalletion end rød eller blå regering");
        var newNum;
        do {
            newNum = Math.floor(Math.random() * 29);
        }
        while (usedNums[newNum]);
        usedNums[newNum] = true;
        document.getElementById(currSquare).innerHTML = bingostatements[newNum];
        document.getElementById(currSquare).className = "";
        document.getElementById(currSquare).onmousedown = toggleColor;
    }
    function toggleColor(evt) {
        if (evt) {
            var thisSquare = evt.target;
        } else {
            var thisSquare = window.event.srcElement;
        }
    
        if (thisSquare.className == "") {
            thisSquare.className = "pickedBG";
        } else {
            thisSquare.className = "";
        }
    
        //checkWin();
    }
}


// window.onload = initAll;
// var usedNums = new Array(76);
// function initAll() {
//     if (document.getElementById) {
//         document.getElementById("reload").onclick = anotherCard;
//         newCard();
//     }
//     else {
//         alert("Sorry, your browser doesn't support this script");
//     }
// }
// function newCard() {
//     for (var i = 0; i < 24; i++) {
//         setSquare(i);
//     }
// }
// function setSquare(thisSquare) {
//     var currSquare = "square" + thisSquare;
//     var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
//     var colBasis = colPlace[thisSquare] * 15;
//     var newNum;
//     do {
//         newNum = colBasis + getNewNum() + 1;
//     }
//     while (usedNums[newNum]);
//     usedNums[newNum] = true;
//     document.getElementById(currSquare).innerHTML = newNum;
//     document.getElementById(currSquare).className = "";
//     document.getElementById(currSquare).onmousedown = toggleColor;
// }
// function getNewNum() {
//     return Math.floor(Math.random() * 15);
// }
// function anotherCard() {
//     for (var i = 1; i < usedNums.length; i++) {
//         usedNums[i] = false;
//     }
//     newCard();
//     return false;
// }

// function toggleColor(evt) {
//     if (evt) {
//         var thisSquare = evt.target;
//     } else {
//         var thisSquare = window.event.srcElement;
//     }

//     if (thisSquare.className == "") {
//         thisSquare.className = "pickedBG";
//     } else {
//         thisSquare.className = "";
//     }

//     checkWin();
// }

// function checkWin() {
//     var winningOption = -1;
//     var setSquares = 0;
//     var winners = new Array(31, 992, 15360, 507904, 541729, 557328, 1083458, 2162820, 4329736, 8519745, 8659472, 16252928);
//     for (var i = 0; i < 24; i++) {
//         var currSquare = "square" + i;
//         if (document.getElementById(currSquare).className != "") {
//             document.getElementById(currSquare).className = "pickedBG";
//             setSquares = setSquares | Math.pow(2, i);
//         }
//     }
//     for (var i = 0; i < winners.length; i++) {
//         if ((winners[i] & setSquares) == winners[i]) {
//             winningOption = i;
//         }
//     }
//     if (winningOption > -1) {
//         for (var i = 0; i < 24; i++) {
//             if (winners[winningOption] & Math.pow(2, i)) {
//                 currSquare = "square" + i;
//                 document.getElementById(currSquare).className = "winningBG";
//             }
//         }
//     }
// }