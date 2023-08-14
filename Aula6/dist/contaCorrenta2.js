"use strict";
class ContaCorrente2 {
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
let cc2 = new ContaCorrente2("1233456");
