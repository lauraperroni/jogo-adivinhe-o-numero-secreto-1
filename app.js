alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute
let tentativas

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        alert(`Isso aí, você descobriu o número secreto que é ${numeroSecreto}!`);
        chute = numeroSecreto;
        break;
    } else {

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

alert('Fim do jogo :)' + chute);

if (tentativas > 1) {
    alert(`Você levou ${tentativas} tentativas para acertar!`)
} else {
    alert('Você descobriu o número secreto com uma tentativa!')
}

