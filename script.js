document.getElementById('button').addEventListener('click', trocarCor);
document.getElementById('reset').addEventListener('click', reset);

const cores = ['#fe4418', '#ebd010', '#09dd4e', '#ee8796'];
const nomes = ['Vermelho', 'Amarelo', 'Verde', 'Rosa']

function trocarCor() {
    let box = document.querySelector('.container');
    let nome = document.querySelector('.nomedacor');

    let indice = Math.floor(Math.random() * cores.length); 

    box.style.backgroundColor = cores[indice]; 
    nome.innerHTML = nomes[indice];

    document.querySelector('.cores').style.display = 'none';

}

function reset() {
    let box = document.querySelector('.container');
    let nome = document.querySelector('.nomedacor');

    box.style.backgroundColor = '#a696aa';
    nome.innerHTML = 'Escolha uma cor';
    document.querySelector('.cores').style.display = 'flex';
}


