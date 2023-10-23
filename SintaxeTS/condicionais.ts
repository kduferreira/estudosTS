const num: number = 20

if(num > 20){
    console.log('num é maior que 20')
}else if (num === 20){
    console.log('num é igual a 20');
}else{
    console.log('num é menor que 20')
}

const userType = {
    admin: 'Seja bem vindo administrador',
    student: 'Voce é estudante',
    viewer: 'Voce pode visualizar'
}


function validadeUser(user: string) {
    console.log(userType[user as keyof typeof userType]);
}

const usuario = 'admin'
validadeUser(usuario)