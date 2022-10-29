// querySelector ('p')
// getElementoByID
// getElementoByIDTagName

let paragrafo = document.querySelector('p');
paragrafo.style.backgrond = '#FBBEBA'

let parClass = (document.querySelector('p.exemplo').innerHTML =  "mudei o texto aqui")

let elemento = (document.querySelector('.myClass').style.fontSize = 'x-large')

const Clique = () => {
    document.querySelector("#my-span").style.backgrondColor = '#CEFBBA';
}

 let listaLi = document.querySelectorAll('li');
 for(i = 0; i < listaLi.length; i ++){
     listaLi[i].style.border = '1px solid "#0000ff'
    listaLi[i].style.padding = '3px'
 };

// acessando o array 

let myLi = document.querySelector('#my-li');
myLi.forEach((li) => li.innerHTML = 'Mudou aqui')