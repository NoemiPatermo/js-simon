//Un alert() espone 5 numeri generati casualmente.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*document.addEventListener('DOMContentLoaded', function(){    DOCUMENT READY
    DENTRO METTI IL CODICE, MA LO SCRIPT VA SOTTO IL TITOLO
});*/



// GENERA 5 NUMERI CASUALI                                  ED ESPONILI IN UN ALERT
// FUNZIONE PER GENERARE NUMERI RANDOM
var min = 1;
var max = 100;
var listaNum = [];

function getRandomNumber(min, max){
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}
while (listaNum.length < 5){
    var randomNum = getRandomNumber(1, 100);
    if (!listaNum.includes(randomNum)) {
        listaNum.push(randomNum);
    }
}

alert("Numeri casuali (da 1 a 5) :  " +   listaNum);

 // PARTE TIMER DI 30 SECONDI. DOPO I QUALI, L'UTENTE DEVE INSERIRE UNO ALLA VOLTA, 
 // I NUMERI CHE HA VISTO PRIMA, TRAMITE IL PROMPT

