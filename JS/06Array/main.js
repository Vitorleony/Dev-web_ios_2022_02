// crindo um array unimentisional

var array1 = ["Marcelo", 15, "Colin" , 47, true]
console.log(array1)
console.log(array1[2])
console.clear()
array1[3] = 80;
console.log(array1)


var array2 = [
    ["pipoca", 10, false], 
    ["string", 20, true],
    ["Margarina", 12, false],
]
console.log(array2)
console.log(array2 [2] [0])
console.clear()
array2[1][0] = "salsicha"
console.log(array2)

console.clear()
// array de objeto carro

var carro = ["Uno", 1997, "0km", false, 4];

var  x  = carro.toString();
console.log(typeof x)
console.log(typeof carro)

console.clear()

var y = carro.join("")


// indsere
console.clear()
var u = carro.push("lego")
console.log(carro)
console.log(u)

// shift() remove o elemento do array
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)

// Adicionando informaçãos no inicio 

console.clear
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

// Apagar um elemento do arraay en uma posição pré selecionada

delete carro[1]
console.log(carro)