interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // colocar uma variavel como opcional adicionando "?" antes dos dois ":"
}


const pessoa: Pessoa = {
    nome: 'Rafaela',
    idade: 21

} 
const outraPessoa: Pessoa = {
    nome: 'Carlos Eduardo',
    idade: 29,
    profissao: 'Desenvolvedor'
}



const arrayPessoas: Array<Pessoa> = [
pessoa,
outraPessoa
]

const arrayNum: number[] = [
    1,2,3
]


const arrayString: Array<string> = [
    'Corinthians', 'kaneki', 'Jesus'
]