alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    tentativas++;
    if (chute == numeroSecreto) {
        break;
    } else {

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`)
