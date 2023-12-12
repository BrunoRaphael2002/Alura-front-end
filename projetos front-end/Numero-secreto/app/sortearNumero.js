/*A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.*/

const numeroSecreto= gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt( Math.random() * 1000);
}

console.log('numero sorteado' , numeroSecreto );