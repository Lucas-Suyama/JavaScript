function saudacao(nome){
  if(!nome){
    console.log('Olá! Seja bem-vindo!');
  }else{
    console.log(`Olá, ${nome}!`);
  }
}

saudacao('Lucas Suyama');
saudacao();

//arrow function
const saudacaoArrow = (nome) => {
  if(!nome){
    console.log('Olá! Seja bem-vindo!');
  }else{
    console.log(`Olá, ${nome}!`);
  }
}

saudacaoArrow('Lucas Suyama');
saudacaoArrow();

// HOF -> High Order Function
// Função que recebe outra função como parâmetro ou retorna outra função

// Exemplo de HOF
function operacao(a, b, operacao){
  return operacao(a, b);
}

function soma(a, b){
  return a + b;
}

function subtracao(a, b){
  return a - b;
}

function multiplicacao(a, b){
  return a * b;
}

function divisao(a, b){
  return a / b;
}

console.log(operacao(5, 3, soma)); // Operação é um callback, no caso soma
console.log(operacao(5, 3, subtracao)); // subtração é um callback
console.log(operacao(32, 8, divisao)); // divisão é um callback
