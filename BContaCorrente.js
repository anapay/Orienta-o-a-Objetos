
export class ContaCorrente {

    agencia;
    cliente;




    _saldo; //atributo privado

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
