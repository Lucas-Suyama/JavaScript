const pessoa = {
  nome: "Lucas",
  idade: 24,
  profissao: "Desenvolvedor Front-End"
}

const pessoa2 = {...pessoa}
pessoa2.idade = 25

console.log(pessoa)
console.log(pessoa2)

//spread
pessoa1 = {
  ...pessoa,
  profissao: "Desenvolvedor Back-End",
  tecnologias: ["React", "Node.js", "MongoDB"]
}

console.log(pessoa1)

const {nome, ...resto} = pessoa1
console.log(nome)
console.log(resto)

//ARRAYS
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1, 6, 7, 8, 9, 10]

console.log(arr1)
console.log(arr2)

const [a, b, ...resto2] = arr2
console.log(a)
console.log(b)
console.log(resto2)
