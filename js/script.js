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
    if (!listaNum.includes(randomNum)) {  // se il numero random non è nell'array del pc, pushalo
        listaNum.push(randomNum);
    }
}

alert(" Ecco i tuoi 5 numeri casuali, memorizzali  :  " +   listaNum);
console.log(listaNum);
 // PARTE TIMER DI 30 SECONDI. DOPO I QUALI, L'UTENTE DEVE INSERIRE UNO ALLA VOLTA, 
 // I NUMERI CHE HA VISTO PRIMA, TRAMITE IL PROMPT

 var listaUser = [];
 var finalList = [];
 var score = 0;
 console.log(finalList);

 setTimeout(function() {
   
    while(listaUser.length < 5 ) {
        var userNumb = parseInt(prompt('Inserisci un numero!'));
        listaUser.push(userNumb)    //inserisci il numero dell'utente nel suo array
    
    
        if(listaNum.includes(userNumb)){ //se il numero utente è nell'array del pc 
            finalList.push(userNumb);       // allora pushalo nell'array finale
            score += 1;
        }
    }
        //quanti e quali  dei numeri da indovinare sono stati individuati
     document.getElementById("output").innerText = "I numeri da te inseriti sono: " + listaUser  + "\n I numeri indovinati sono:" + finalList + " \n Il tuo punteggio è " + score;
 }, 3000)

 

