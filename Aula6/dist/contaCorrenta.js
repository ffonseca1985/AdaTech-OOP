"use strict";
class ContaCorrente {
    constructor(cpf) {
        //O saldo não pode ser publico
        //porque alguém pode informar de forma errada o valor
        this.saldo = 0; // quando seto = 0; 
        this.cpf = cpf;
    }
    //cria encapsulamento, para definir como calcular o saldo
    operar(valor) {
        if (this.saldo + valor < 0) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo = this.saldo + valor;
    }
    selecionarSaldo() {
        return this.saldo;
    }
}
let cc = new ContaCorrente("123456");
cc.cpf = "123123";
//cc.saldo = -1000
cc.operar(100);
cc.operar(100);
cc.operar(300);
let novoSaldo = cc.selecionarSaldo();
console.log(cc);
console.log(novoSaldo);
