const frutas = ["Banana", "Maçã", "Pera"];
// splice remove elementos de um array a partir de um índice
// primeiro parâmetro é o índice de início
// segundo parâmetro é a quantidade de elementos a serem removidos
frutas.splice(1, 1)

console.log(frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// forEach é um método de array que executa uma função para cada elemento do array
// primeiro parâmetro é a função a ser executada
// segundo parâmetro é o valor inicial do acumulador
// terceiro parâmetro é o índice do elemento atual
// quarto parâmetro é o array original
frutas.forEach((fruta, indice) => {
    console.log(fruta, indice)
})

for (let fruta of frutas) {
    console.log(fruta)
}

const numeros = [1, 2, 3, 4, 5]

// filter é um método de array que retorna um novo array com os elementos que passaram no teste
// primeiro parâmetro é a função de teste
// segundo parâmetro é o valor inicial do acumulador
// terceiro parâmetro é o índice do elemento atual
// quarto parâmetro é o array original
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(numerosPares)

// map é um método de array que retorna um novo array com os elementos transformados
// primeiro parâmetro é a função de transformação
// segundo parâmetro é o valor inicial do acumulador
// terceiro parâmetro é o índice do elemento atual
// quarto parâmetro é o array original
const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})
console.log(numerosDobrados)

