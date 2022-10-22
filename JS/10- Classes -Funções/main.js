class carro {
    constructor(nome, ano, porta, janelas,){
        this.nome = nome;
        this.ano = ano;
        this.porta = porta;
        this.janelas = janelas;
    }

    // metodo para mostrar a idade
    idedaCarro(anoAtual){
        return anoAtual - this.ano;
    }
}

/* criando de objeto a caracteristicas de class carro */
let carro1 = new carro("celta",2002 , 2, 4)
let carro2 = new carro("velostaer", 2012, 3, 4)

// apresentar os objetos no console.log 
console.log(carro1)
console.log(carro1.nome)


//  pegando o ano atual
let dataHoje = new Date();
let ano = dataHoje.getFullYear();

// apresentado o ano do carro 
console.log(carro1.idedaCarro(ano))

