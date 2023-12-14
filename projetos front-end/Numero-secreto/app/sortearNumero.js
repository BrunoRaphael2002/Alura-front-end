/*A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.*/

const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt( Math.random() * maiorValor + 1);
}

console.log('numero sorteado' , numeroSecreto );

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor

