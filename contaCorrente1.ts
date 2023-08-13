
class ContaCorrente1 {

    public cpf: string
    private saldo: number = 0;

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    public operar(valor: number ) : void {
        this.saldo += valor
    }

    public getSaldo() : number {
        return this.saldo;
    }
}





