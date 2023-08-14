
class ContaCorrente2 {

    //Só posso setar valor na primeira vez.
    readonly cpf: string;

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

let cc2 = new ContaCorrente2("1233456");


