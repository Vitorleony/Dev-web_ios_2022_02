 let A = 1;
 while (A <= 50) {
 console.log(` ${A}`);
 A++;
 }


let cont = 10;
 while (cont >= 0) {
console.log(`Valor = ${cont}`);
cont--;
}


let contador = 2;
    while(contador <= 100) {
        console.log(contador);
        contador = contador + 2; // incrementa de dois em dois
    }
    console.log("FIM");

    let result = '';
let i = 0;
do {
  i += 1;
  result += `${i} `;
}
while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);