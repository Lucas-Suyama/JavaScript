//const readline = require('readline');
import {createInterface} from 'readline';
import {soma, subtracao, multiplicacao, divisao} from './calculadora.js';

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question('Digite o primeiro número\n> ', (numero1) => {
  leitor.question('Digite a operação (+, -, *, /)\n> ', (operacao) => {
    leitor.question('Digite o segundo número\n> ', (numero2) => {
      const num1 = Number(numero1)
      const num2 = Number(numero2)
      const resultado = operacao === '+' ? soma(num1, num2) :
                        operacao === '-' ? subtracao(num1, num2) :
                        operacao === '*' ? multiplicacao(num1, num2) :
                        operacao === '/' ? divisao(num1, num2) :
                        'Operação inválida';
      console.log(`O resultado é: ${resultado}`);
      leitor.close();
    });
  });
});