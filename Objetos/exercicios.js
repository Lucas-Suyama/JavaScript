const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

//imprima no terminal o nome da pessoa e um dos troféus
const {nome, trofeus} = pessoa;
console.log(nome)
console.log(trofeus[0])

//Exclua uma propriedade do objeto
delete pessoa.pontuacao;
console.log(pessoa)

//Criar uma função para iterar os troféus
function exibeTrofeu(trofeu) {
  for(trofeu of trofeus) {
    console.log(trofeu)
  }
}
exibeTrofeu(trofeus)

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};
user.calculaIdade = function() {
  const dataNascimento = new Date(this.nascimento);
  const anoNascimento = parseInt(dataNascimento.getFullYear());
  const anoAtual = new Date().getFullYear();
  return `${anoAtual - anoNascimento} anos`;
}
console.log(user.calculaIdade())