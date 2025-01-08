// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedere all’utente di inserire una parola

let parolaUtente = prompt ("inserisci una parola");
console.log(parolaUtente);

console.log(parolaPalindroma (parolaUtente));




// FUNZIONE
function parolaPalindroma(parola) {

//  creiamo un ciclo per invertire la parola
let parolaRevertata = "";

for(let i = parola.length - 1; i >= 0; i--){

    let carattereIesimo = parola[i];

    
    parolaRevertata += carattereIesimo;

}
 // stabiliamo se la parola è palindroma

if (parola === parolaRevertata){
    return "é palindroma"
    
} else{
    return "non é palindroma"
    
}
}

