

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
$(document).ready(function(){
    $('#free').click(function(){
        var rndNmb= Math.floor(Math.random() * 12);
        var partiListe = new Array("Alternativet","Dansk Folkeparti","Det Konservative Folkeparti","Enhedslisten","Klaus Riskær Pedersen", "Kristendemokraterne","Liberal Alliance",
        "Nye Borgerlige", "Radikale Venstre", "SF", "Socialdemokratiet", "Stram Kurs", "Venstre");

        this.innerHTML=partiListe[rndNmb];
    
    });
});

