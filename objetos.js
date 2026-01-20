//objeto o que é?
//objeto é uma coleção de propriedades e métodos
//propriedades são as características do objeto
//métodos são as ações que o objeto pode realizar

const pessoa = {
  nome: "Lucas",
  idade: 24,
  profissao: "Desenvolvedor Front-End"
}

pessoa.sobrenome = "Suyama"

console.log(pessoa)

pessoa.linguagensProgramacao = ["JavaScript", "HTML", "CSS"]

console.log(pessoa)

pessoa.linguagensProgramacao.push("React")

console.log(pessoa)

//for-in - percorre as propriedades de um objeto
for (let propriedade in pessoa) {
    console.log(propriedade, pessoa[propriedade])
}

const chaves  = Object.keys(pessoa)
console.log(chaves)

const valores = Object.values(pessoa)
console.log(valores)

const entradas = Object.entries(pessoa)
console.log(entradas)
