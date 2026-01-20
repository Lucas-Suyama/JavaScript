const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question('Qual é o seu nome? ', (nome) => {
  console.log(`Seu nome é: ${nome}`);
  leitor.close();
});