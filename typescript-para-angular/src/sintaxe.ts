
//tipos primitivos string, number e boolean
let nome: string = "eduardo"
let idade: number = 23
let altura: number = 1.92
let serHumano: boolean = true 

//tipos especiais null, undefined
let nulo: null = null
let indefinido: undefined = undefined

//tipos abrangentes any e void

let retorno: null
let retornoView: any = "carro"


//tipos objeto

let objeto: object = {
    nome: "dudu",
    cidade: "são luís",
    estado: "maranhao"
}

type eduardo = {
    nome: string,
    idade: number,
    amor: string,
    hobby: string,
    feliz: boolean,
    profissao: string
}


let filhoDeDeus: eduardo = {
    nome: "Carlos Eduardo ",
    idade: 23,
    amor: "Jesus Cristo",
    hobby: "Academia",
    feliz: true,
    profissao: "Desenvolvedor Web Java"

}

function valor(filhoDeDeus: eduardo){
console.log(filhoDeDeus);
}

valor(filhoDeDeus)


//array voce pode criar de duas formas. a primeira dizendo qual tipo da array e depois passa o cochete, e a segunda usando o objeto array passando o tipo das variaveis atraves do operador diamante "<>".

let alunos: string[] = ["Felipe", "joao", "Ana", "Leticia"];
let alunos2: Array<String> = ["teresa", "Andre", "brenda", "Carol", "Flavia"];



//existe outra forma de criar array podendo ter mais de um tipo de variavel primitivo dentro do vetor
let infos: (String | number )[] = ["dudu", 12];


//tupla é um tipo de array que deve passar a sequencia que for apresentada dentro do cochete, se o vetor nao seguir a ordem correta, irar aparecer um erro avisando sobre o problema.
let boleto: [string, number, number] = ["Conta de luz", 200.0, 45612615156]


//date
let aniversario: Date = new Date("1999-09-04 14:00")
console.log(aniversario.toString());



//funcoes
function calcular (x: number, y: number): number  {
    return x + y;
}


let somar: number = calcular(5, 5);


function apresentacao(nome: string ) {
    return `Hello , ${nome}`;
}


console.log(apresentacao("dudurama"));


//funcoes com varios tipos 


function hotlineBling(phone: string | number) : string | number{
    return phone;
}



console.log(hotlineBling(40028922));