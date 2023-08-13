class ContaCorrente3 {

    protected _cpf: string
    protected _saldo: number = 0;

    protected constructor(cpf: string) {
        this._cpf = cpf;
    }

    public operar(valor: number ) : void {
        this._saldo += valor
    }

    public get saldo() : number {
        return this._saldo;
    }
}

class ContaCorrenteItau extends ContaCorrente3 {

    constructor(cpf: string) {
        super(cpf);
    }

    get cpf() : string {
        return this._cpf;
    }
    
    set cpf (value: string) {

        let ehValido = this.ehCpfValido(value);

        if (ehValido == false) {
            throw new Error("CPF Inválido")
        }

        this._cpf = value;
    }

    private ehCpfValido(cpf: string) : boolean {

        if (cpf.length <= 5) {
            return false;
        }

        return true;
    }
}

let cci = new ContaCorrenteItau("wqweqweqwe");

cci.operar(23);
cci.cpf = "123456";

console.log(cci)
