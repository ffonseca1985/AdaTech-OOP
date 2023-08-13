class ContaCorrente2 {

    public cpf: string
    private _saldo: number = 0;

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    public operar(valor: number ) : void {
        this._saldo += valor
    }

    public get saldo() : number {
        return this._saldo;
    }
}

let cc2 = new ContaCorrente2("3366958423");
cc2.operar(52)
cc2.operar(-10)

console.log(cc2);