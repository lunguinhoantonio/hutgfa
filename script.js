
function somar() {
    let primeiroValor = Number.parseInt(document.querySelector('.primeiro-input').value);
    let segundoValor = Number.parseInt(document.querySelector('.segundo-input').value);
    let operacao = document.querySelector('.operacao').value;

    if (operacao == '+') {
        let resultado = primeiroValor + segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    }
    if (operacao == '-') {
        let resultado = primeiroValor - segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    } 
    if (operacao == '*') {
        let resultado = primeiroValor * segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    }
    if (operacao == '/') {
        let resultado = primeiroValor / segundoValor;
        document.querySelector('.resultado').innerHTML = resultado;
    } else {
        alert(`Operação inválida!
            Digite uma das operações aceitas: +, -, * ou /`);
    }
}