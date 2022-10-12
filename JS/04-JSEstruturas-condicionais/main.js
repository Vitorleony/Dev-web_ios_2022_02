console.clear();
const num1 = 10;
const num2 = 50;
const num3 = 3;

if(num1>num2){
if(num1>num3){
console.log("10 é o menor!");
}else
console.log("50 é o menor!");
}else if(num2>num1){
if(num1>num3){
console.log("3 é o menor!");
}else
console.log("3 é o menor!");
}

//exercicio 2

var n1 = parseFloat(prompt("Digite um número:"));
var n2 = parseFloat(prompt("Digite um número:"));
var n3 = parseFloat(prompt("Digite um número:"));

var numbers = [n1, n2, n3];

var sorted_arr = numbers.sort();  
var results = [];
for (var i = 0; i < numbers.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
var repetido = (results[0]);

if (results!=""){
  console.log(repetido);
}else{
  console.log(Math.max(n1, n2, n3));
}