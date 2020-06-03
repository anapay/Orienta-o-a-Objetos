import { Cliente } from "./ACliente.js";

export class ContaCorrente {

    agencia;
    _cliente;
    _saldo = 0; //atributos privados


    set cliente(novoValor) { //não é um método é um acessor especial da nossa classe
        if (novoValor instanceof Cliente) {//se esse novo valor for uma estancia da minha classse cliente faça a atribuição se não for não faça nada se não etaremos atribuindo um valor errado
            this._cliente = novoValor

        }// o set serve alteramos a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código

    }
    get cliente() {
        return this._cliente//o get serve para retornar valores
    }
    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
     
    }

    sacar(valor) {//adicionando comportamento aos objetos chamdos de métodos. Dentro das chaves eu vou definir o que essa operação vai fazer.
        if (this._saldo >= valor) { //this diz dessa conta corrente eu quero ver o saldo, ou valor seja qual for o parametro passado.
            this._saldo -= valor
            return valor //essa função devolve o valor pra quem chamou o metodo
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;

    }
    trasferir(valor, conta) {//aqui estou fazendo uma trasferencia desse valor para essa conta vou sacar esse valor da minha conta e vou depositar nessa outra conta
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
