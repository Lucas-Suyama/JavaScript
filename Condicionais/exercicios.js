const num1 = 2
const num2 = 4
const operacao = 'soma'

if (operacao === 'soma') {
  console.log(num1 + num2)
} else if (operacao === 'subtracao') {
  console.log(num1 - num2)
} else if (operacao === 'multiplicacao') {
  console.log(num1 * num2)
} else if (operacao === 'divisao') {
  console.log(num1 / num2)
} else {
  console.log('Operação inválida')
}