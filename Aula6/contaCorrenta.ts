
class ContaCorrente {

    cpf: string;

    //O saldo não pode ser publico
    //porque alguém pode informar de forma errada o valor
    private saldo: number = 0; // quando seto = 0; 

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    //cria encapsulamento, para definir como calcular o saldo
    public operar(valor: number) {

        if (this.saldo + valor < 0) {
            throw new Error("Saldo insuficiente");
        }

        this.saldo = this.saldo + valor; 
    }

    selecionarSaldo(): number {
        return this.saldo;
    }
}

let cc = new ContaCorrente("123456")
cc.cpf = "123123"
//cc.saldo = -1000

cc.operar(100);
cc.operar(100);
cc.operar(300);
let novoSaldo = cc.selecionarSaldo();

console.log(cc);
console.log(novoSaldo)