
class ContaCorrente1 {

    // Esta propriedade pode ser acessada fora da classe porque é público
    public cpf: string

    // Esta propriedade não pode ser acessada fora da classe porque é privado
    // ou seja, só pode ser acessada dentro da classe.
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





