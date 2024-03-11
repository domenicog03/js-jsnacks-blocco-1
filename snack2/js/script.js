//snack 2
//- Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let somma=0;

for(let i=0; i<5; i++){
    let n= parseInt(prompt('Insersci il numero:'));
    somma=somma+ n;

}

console.log('la somma dei numeri inseriti è:'+ somma);
