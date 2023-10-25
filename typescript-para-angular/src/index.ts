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