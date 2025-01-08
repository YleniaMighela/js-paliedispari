// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.







// L’utente sceglie un numero pari o dispari 

let utentePariODispari = prompt ("Scegli un numero pari o dispari");
console.log(utentePariODispari);


// L'utente inserisce un numero da 1 a 5.

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);


// Sommiamo i due numeri

let sommaNumeri = numeroUtente + numRandomPc1to5();
console.log(sommaNumeri);


// FUNZIONI
// Generiamo un numero random (sempre da 1 a 5) per il computer

function numRandomPc1to5() {
    let numeroPc = Math.floor(Math.random() *5) + 1;
    console.log(numeroPc);
    

return numeroPc
    
}



// La somma dei due numeri sarà pari o dispari


// OUTPUT
// Dichiariamo chi ha vinto