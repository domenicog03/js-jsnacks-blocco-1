//snack 3
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

const numeri= [];

for(let i=0; i<6; i++){
    let n= parseInt(prompt('Inserisci un numero:'));

    if(!(n % 2 === 0)){
        numeri.push(n);
    }
}

console.log(numeri);