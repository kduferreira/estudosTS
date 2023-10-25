"use strict";
//tipos primitivos string, number e boolean
let nome = "eduardo";
let idade = 23;
let altura = 1.92;
let serHumano = true;
//tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes any e void
let retorno;
let retornoView = "carro";
//tipos objeto
let objeto = {
    nome: "dudu",
    cidade: "são luís",
    estado: "maranhao"
};
let filhoDeDeus = {
    nome: "Carlos Eduardo ",
    idade: 23,
    amor: "Jesus Cristo",
    hobby: "Academia",
    feliz: true,
    profissao: "Desenvolvedor Web Java"
};
function valor(filhoDeDeus) {
    console.log(filhoDeDeus);
}
valor(filhoDeDeus);
//array voce pode criar de duas formas. a primeira dizendo qual tipo da array e depois passa o cochete, e a segunda usando o objeto array passando o tipo das variaveis atraves do operador diamante "<>".
let alunos = ["Felipe", "joao", "Ana", "Leticia"];
let alunos2 = ["teresa", "Andre", "brenda", "Carol", "Flavia"];
//existe outra forma de criar array podendo ter mais de um tipo de variavel primitivo dentro do vetor
let infos = ["dudu", 12];
//tupla é um tipo de array que deve passar a sequencia que for apresentada dentro do cochete, se o vetor nao seguir a ordem correta, irar aparecer um erro avisando sobre o problema.
let boleto = ["Conta de luz", 200.0, 45612615156];
//date
let aniversario = new Date("1999-09-04 14:00");
console.log(aniversario.toString());
//funcoes
function calcular(x, y) {
    return x + y;
}
let somar = calcular(5, 5);
function apresentacao(nome) {
    return `Hello , ${nome}`;
}
console.log(apresentacao("dudurama"));
//funcoes com varios tipos 
function hotlineBling(phone) {
    return phone;
}
console.log(hotlineBling(40028922));
