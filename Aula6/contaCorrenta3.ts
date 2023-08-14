
class ContaCorrente3 {

    //Só posso setar valor na primeira vez.
    readonly cpf: string;

    //O saldo não pode ser publico
    //porque alguém pode informar de forma errada o valor
    private _saldo: number = 0; // quando seto = 0; 

    //Protegido => só pode acessar quem herda
    protected constructor(cpf: string) {
        this.cpf = cpf;
    }

    //cria encapsulamento, para definir como calcular o saldo
    operar(valor: number) {

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

class ContaCorrenteBB extends ContaCorrente3 {

    private _apelido: string = "";

    get apelido(): string {
        return this._apelido;
    }

    set apelido(value: string) {
        this._apelido = value;
    }

    // setarApelido(apelido: string) {
    //     this._apelido = apelido;
    // }

    constructor(cpf: string) {

        super(cpf);
        
        if (this.ehCPFValido() == false) {
            throw new Error("Erro ao adicionar CPF");
        }
    }

    selecionarSaldo () {
        return this.saldo;
    }

    private ehCPFValido() : boolean {

        if (this.cpf.length < 3) {
            return false
        }

        return true;
    }
}

let ccBB = new ContaCorrenteBB("1123123123");

let getCpf = ccBB.cpf
console.log(getCpf);

ccBB.operar(100);
ccBB.operar(100);

ccBB.apelido = "Maria";
let getApelido = ccBB.apelido

console.log(getApelido);

