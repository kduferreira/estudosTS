type viagens = {

    destino: string;
    preco: number;
    dataPartida: Date;
    dataRetorno: Date;
    companhiaAerea: string;
    classe: "Econômica" | "Executiva" | "Primeira Classe";
    passageiros: number;
    seguroViagem: boolean;
}


interface viagens2 {
    destino: string;
    preco: number;
    dataPartida: Date;
    dataRetorno: Date;
    companhiaAerea: string;
    classe: "Econômica" | "Executiva" | "Primeira Classe";
    passageiros: number;
    seguroViagem: boolean;
}


const trivago: viagens ={
    destino: "Miami",
    preco: 500,
    dataPartida: new Date("2023-04-09 "),
    dataRetorno: new Date("2023-05-25"),
    companhiaAerea: "trivago",
    classe: "Primeira Classe",
    passageiros: 20,
    seguroViagem: true
}

const decolar: viagens ={
    destino: "tokyo",
    preco: 900,
    dataPartida: new Date("2023-07-19 "),
    dataRetorno: new Date("2023-08-05"),
    companhiaAerea: "decolar",
    classe: "Executiva",
    passageiros: 10,
    seguroViagem: true
}



console.log(decolar);
console.log(trivago );


class Pessoa implements viagens2{
    destino: string;
    preco: number;
    dataPartida: Date;
    dataRetorno: Date;
    companhiaAerea: string;
    classe: "Econômica" | "Executiva" | "Primeira Classe";
    passageiros: number;
    seguroViagem: boolean;

    constructor(destino: string, preco: number, dataPartida: Date, dataRetorno: Date, companhiaAerea: string, classe: "Econômica" | "Executiva" | "Primeira Classe", passageiros: number, seguroViagem:boolean){
      this.destino = destino;
      this.preco = preco
      this.dataPartida =dataPartida
      this.dataRetorno =dataRetorno
      this.companhiaAerea =companhiaAerea
      this.classe =classe
      this.passageiros =passageiros
      this.seguroViagem =seguroViagem
    }

}

const p = new Pessoa("milao", 500, new Date("2022-05-05"), new Date("2022-06-01"), "gol", "Econômica", 20, true)
console.log(p);