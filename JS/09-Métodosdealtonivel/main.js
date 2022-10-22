var Frutas = ['Banana', 'Maça', 'kiwi', 'Melancia'];

Frutas.forEach(minhaFunção);

function minhaFunção(_Valor, _indice) {
    console.log('O Valor é ${valor}');
    console.log('O indice é ${indice}' [0]);
}

const aluno = [
    {
        id: 1,
        nome: 'Marcelo',
        passou: 'true',
    },

    {
        id: 1,
        nome: 'Agatha',
        passou: 'false',
    },

    {
        id: 1,
        nome: 'Vitor',
        passou: 'false',
    },
];

aluno.forEach((aprovados) => console.log(aprovados.passou));

const numeros = [2, 7, 8, 50, 34];
const novosNumeros = numeros.map(Math.sqrt);

console.log(novosNumeros);

console.clear();

const cachorro = [
    {
        id: '1',
        nome: 'bololinho',
        idade: 11,
    },

    {
        id: '2',
        nome: 'Toby',
        idade: 7,
    },

    {
        id: '3',
        nome: 'Pingo',
        idade: 6,
    },
];

const mapCachorro = cachorro.map((nomeDog)=> {
    return nomeDog.nome
})

console.log(cachorro)
console.log(mapCachorro)


console.clear()

const idade = [5, 9, 10, 15, 25, 35, 45, 89,]

var filtraIdade = idade.filter((idade) => {
    return idade < 30 
})

console.log(filtraIdade)

console.clear()

console.log(
    cachorro.find((procurarNome) => { 
    return procurarNome.nome === 'bololinho';
    })

)

