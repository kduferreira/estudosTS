
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];


        const getter = () => _value;
        const setter =(value: string) =>{
            if (value.length < length) {
                throw new Error(`o tamanho minimo é ${length}`);
            };

            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
            });
        }
    }
}


class Mercadinho {
    @minLength(3)
    nome: string;


    constructor(nome: string) {
        this.nome = nome;
    }
}


const m = new Mercadinho("produto")
console.log(m.nome);