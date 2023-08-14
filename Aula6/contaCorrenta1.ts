
class ContaCorrente1 {

    cpf: string;

    //O saldo não pode ser publico
    //porque alguém pode informar de forma errada o valor
    private _saldo: number = 0; // quando seto = 0; 

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    //cria encapsulamento, para definir como calcular o saldo
    public operar(valor: number) {

        if (this._saldo + valor < 0) {
            throw new Error("Saldo insuficiente");
        }

        this._saldo = this._saldo + valor; 
    }

    // quando coloco um get em metodo, eu consigo recuperar o valor diretamente
    get saldo(): number {
        return this._saldo;
    }
}

let cc1 = new ContaCorrente1("123456");

cc1.operar(23);
let novoSaldo1: number = cc1.saldo;

console.log(cc1);
console.log(novoSaldo1)