window.alert('Seja Bem-vindo:)');

document.title = 123;
console.log(document.title);

const sec = document.createElement('section');
document.body.appendChild(sec);

const h = document.createElement('h1');
h.innerHTML = 'toy Story';
sec.appendChild(h);

const p1 = document.createElement('p');
p1.innerHTML =
    ' Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS.';
sec.appendChild(p1);

const art = document.createElement('article');
document.body.appendChild(art);

const h2 = document.createElement('h1');
h2.innerHTML = 'Carros 2';
art.appendChild(h2);

const p2 = document.createElement('p');
p2.innerHTML =
    'Através do objeto document pode-se ter acesso a um grande número de propriedades. Segue abaixo algumas propriedades que podem ser utilizadas com o objeto document:';
art.appendChild(p2)