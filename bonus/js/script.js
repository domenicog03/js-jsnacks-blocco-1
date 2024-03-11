//BONUS:
//- Dato un array contenente 10 numeri, stampare in console il numero più grande.

const array10= [];

for(let i =0; i < 10; i++){
    const n=Math.round(Math.random()*100 + 1);
    array10.push(n);
}

console.log(array10);

//calcolo numero più grande

let nmax=0;
for(let i=0; i<10; i ++){
    
    if(i===0) {
        nmax=array10[i];
    }
    if(nmax<array10[i]){
        nmax=array10[i];
    }


}

console.log(' il numero maggiore è: ' + nmax);