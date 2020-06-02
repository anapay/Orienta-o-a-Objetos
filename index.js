
console.log("SisterBank")


class Cliente {

    nome;//atributos da minha classe
    cpf; return
}

class ContaCorrente {

    agencia;
    _saldo;

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
}


const cliente1 = new Cliente(); //estanciando cliente a classe
cliente1.nome = "Ana"; //atribuindo valores as propriedades
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Joao";
cliente2.cpf = 12345678911;


const contaCorrenteAna = new ContaCorrente();
contaCorrenteAna._saldo = 0;
contaCorrenteAna.agencia = 13;

contaCorrenteAna.depositar(102000000);
contaCorrenteAna.sacar(1000);

console.log(cliente1);
console.log(contaCorrenteAna);
