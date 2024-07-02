
function somar() {
    let primeiroValor = Number.parseInt(document.querySelector('.primeiro-input').value);
    let segundoValor = Number.parseInt(document.querySelector('.segundo-input').value);
    let operacao = document.querySelector('.operacao').value;

    if (operacao == '+') {
        let resultado = primeiroValor + segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    }
    else if (operacao == '-') {
        let resultado = primeiroValor - segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    } 
    else if (operacao == '*') {
        let resultado = primeiroValor * segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    }
    else if (operacao == '/') {
        let resultado = primeiroValor / segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    } 
    else if (operação != NaN) {
        alert(`Operação inválida!
            Digite uma das operações aceitas: +, -, * ou /`);
    } else {
        alert(`Insira uma operação!
            Digite uma das operações aceitas: +, -, * ou /`)
    }
}
