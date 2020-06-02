
console.log("SisterBank")
 
import {Cliente} from "./ACliente.js";
import {ContaCorrente} from "./BContaCorrente.js";


const cliente1 = new Cliente(); //estanciando cliente a classe
cliente1.nome = "Ana"; //atribuindo valores as propriedades
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Joao";
cliente2.cpf = 12345678911;

const contaCorrenteAna = new ContaCorrente();
contaCorrenteAna._saldo = 0;
contaCorrenteAna.agencia = 13;
contaCorrenteAna.cliente = cliente1;
contaCorrenteAna.depositar(102000000);
contaCorrenteAna.depositar(102000000);
contaCorrenteAna.depositar(2000);

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao._saldo = 0;
contaCorrenteJoao.agencia = 1001;
contaCorrenteJoao.cliente = cliente2;

contaCorrenteAna.trasferir(2000, contaCorrenteJoao);
contaCorrenteAna.trasferir(1000, contaCorrenteJoao);


console.log(cliente1);
console.log(contaCorrenteAna);


//para criar esse arquivo utilizamos o comando (npm init)
//arquivo json é um arquivo de marcação e temos algumas chaves e seus respctivos valores  lá vamos adicionar o type (module);