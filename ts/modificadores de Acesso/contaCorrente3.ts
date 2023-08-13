class ContaCorrente3 {

    protected _cpf: string

    // Esta propriedade só pode ser acessada por classes que herdem esta classe, pois, ela esta protegida
    protected _saldo: number = 0;

    protected constructor(cpf: string) {
        this._cpf = cpf;
    }

    public operar(valor: number ) : void {
        this._saldo += valor
    }

    // Podemos usar o método get para acessar um atributo como se fosse uma propriedade 
    public get saldo() : number {
        return this._saldo;
    }
}

class ContaCorrenteItau extends ContaCorrente3 {

    // Propriedades criadas com esse modificador devem ser inicializadas na declaração ou no método construtor
    readonly apelindo: string;

    constructor(cpf: string, apelido : string) {
        super(cpf);
        this.apelindo = apelido
    }

    get cpf() : string {
        return this._cpf;
    }
    
     // Podemos usar o metodo set para atribuir valor a um atributo como se fosse uma atribuição direta (*).
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

let cci = new ContaCorrenteItau("33954258745", "Conta 3");

cci.operar(23);

//(*) Exemplo de atribuição direta
cci.cpf = "123456";

console.log(cci)
console.log(cci.saldo)
console.log(cci.cpf)
console.log(cci.apelindo)
