// snack 4
//- Calcola la somma e la media dei primi 10 numeri.

const numeri =[1,2,3,4,5,6,7,8,9,10];

let somma=0;
let media=0;

for(let i=0; i<= numeri.length-1; i++){
    somma=somma+numeri[i];
    console.log(somma);
}

media=somma/numeri.length;

console.log('la somma dei primi dieci numeri è: ' + somma);

console.log('la media dei primi dieci numeri è : ' + media);
