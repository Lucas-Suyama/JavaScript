const numero1 = 4;
const numero2= 8;

let total = numero1 + numero2;
console.log('O total da soma é: ', total);

total = numero1 - numero2;
console.log('O total da subtração é: ', total);

total = numero1 * numero2;
console.log('O total da multiplicação é: ', total);
  
total = numero1 / numero2;
console.log('O total da divisão é: ', total);

let resto = numero1 % numero2;
console.log('O resto da divisão é: ', resto);

let quadrado = numero1 ** 2;
console.log('O quadrado de', numero1, 'é:', quadrado);

let contador = 5;
contador++;
console.log('Incremento: ', contador);

contador--;
console.log('Decremento: ', contador);

let numero3 = 10;

numero3 += 5;
console.log('Adição: ', numero3);

numero3 -= 3;
console.log('Subtração: ', numero3);

numero3 *= 2;
console.log('Multiplicação: ', numero3);

numero3 /= 4;
console.log('Divisão: ', numero3);

// Operadores de comparação
let maior = numero1 > numero2;
console.log('O número', numero1, 'é maior que', numero2, '?', maior);

let maiorIgual = numero1 >= numero2;
console.log('O número', numero1, 'é maior ou igual a', numero2, '?', maiorIgual);

let menor = numero1 < numero2;
console.log('O número', numero1, 'é menor que', numero2, '?', menor);

let menorIgual = numero1 <= numero2;
console.log('O número', numero1, 'é menor ou igual a', numero2, '?', menorIgual);

let igual = numero1 === numero2;
console.log('O número', numero1, 'é igual a', numero2, '?', igual);

let diferente = numero1 !== numero2;
console.log('O número', numero1, 'é diferente de', numero2, '?', diferente);

// Operadores lógicos
let and = maior && menorIgual;
console.log('AND:', and);

let or = maior || menorIgual;
console.log('OR:', or);

let not = !maior;
console.log('NOT:', not);
