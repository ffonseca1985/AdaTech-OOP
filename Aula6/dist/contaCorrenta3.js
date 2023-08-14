"use strict";
class ContaCorrente3 {
    //Protegido => só pode acessar quem herda
    constructor(cpf) {
        //O saldo não pode ser publico
        //porque alguém pode informar de forma errada o valor
        this._saldo = 0; // quando seto = 0; 
        this.cpf = cpf;
    }
    //cria encapsulamento, para definir como calcular o saldo
    operar(valor) {
        if (this._saldo + valor < 0) {
            throw new Error("Saldo insuficiente");
        }
        this._saldo = this._saldo + valor;
    }
    // quando coloco um get em metodo, eu consigo recuperar o valor diretamente
    get saldo() {
        return this._saldo;
    }
}
class ContaCorrenteBB extends ContaCorrente3 {
    get apelido() {
        return this._apelido;
    }
    set apelido(value) {
        this._apelido = value;
    }
    // setarApelido(apelido: string) {
    //     this._apelido = apelido;
    // }
    constructor(cpf) {
        super(cpf);
        this._apelido = "";
        if (this.ehCPFValido() == false) {
            throw new Error("Erro ao adicionar CPF");
        }
    }
    selecionarSaldo() {
        return this.saldo;
    }
    ehCPFValido() {
        if (this.cpf.length < 3) {
            return false;
        }
        return true;
    }
}
let ccBB = new ContaCorrenteBB("1");
let getCpf = ccBB.cpf;
console.log(getCpf);
ccBB.operar(100);
ccBB.operar(100);
ccBB.apelido = "Maria";
let getApelido = ccBB.apelido;
console.log(getApelido);
