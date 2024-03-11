// snack 1 
// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

const numeri=[];

for(let i=0; i<5; i++){
    let numberprov= parseInt(prompt('Inserisci numero:'));
    if(!numeri.includes(numberprov)){
        numeri.push(numberprov);
    }
}

console.log(numeri);
