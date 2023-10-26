function exibirnome(target: any): void {
   console.log(target);
}

//colocar essa anotacao em cima de qualquer metodo para ultilizar o decorator
@exibirnome
class funcionarios {}

function apiVersion(version: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
  }

@apiVersion("2.0")
class Api {}



const a = new Api();
console.log(a.__version);