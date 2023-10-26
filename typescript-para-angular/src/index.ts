type  heroi = {
 nome: string;
 vulgo: string;
}

function valorObjeto(pessoa: heroi){
    console.log(pessoa);
}

valorObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",

})

//genericm
function arrayConcat<t>(... itens: t[]): t[]{
    return new Array().concat(...itens);
}


const numArray = arrayConcat<number[]>([1,5,6], [3,2]);
const stgArray = arrayConcat<string[]>(["Flavia", "Leticia"], ["Eduardo", "Luis", "Lorena"]);

console.log(numArray);
console.log(stgArray);