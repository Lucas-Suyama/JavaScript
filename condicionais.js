const idade = 18;

if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

const nota = 8.5;

if (nota >= 9) {
    console.log('Aprovado com nota A');
} else if (nota >= 7) {
    console.log('Aprovado com nota B');
} else if (nota >= 5) {
    console.log('Aprovado com nota C');
} else {
    console.log('Reprovado');
}

//Operador ternário
const mensagem = (idade >= 18) ? 'Você é maior de idade.' : 'Você é menor de idade.';
console.log(mensagem);

//truthy e falsy - valores que são considerados verdadeiros ou falsos em uma condicional
const valor1 = 10;
const valor2 = 0;

if (valor1) {
    console.log('O valor1 é truthy');
} else {
    console.log('O valor1 é falsy');
}

if (valor2) {
    console.log('O valor2 é truthy');
} else {
    console.log('O valor2 é falsy');
}

//switch - 
nota = 7.5;

switch (true) {
    case nota >= 9:
        console.log('Aprovado com nota A');
        break;
    case nota >= 7:
        console.log('Aprovado com nota B');
        break;
    case nota >= 5:
        console.log('Aprovado com nota C');
        break;
    default:
        console.log('Reprovado');
}