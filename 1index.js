
console.log("SisterBank")
 
import {Cliente} from "./ACliente.js";
import {ContaCorrente} from "./BContaCorrente.js";


const cliente1 = new Cliente(); //estanciando cliente a classe
cliente1.nome = "Ana"; //atribuindo valores as propriedades
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Joao";
cliente2.cpf = 12345678911;

const conta1 = new ContaCorrente();
conta1._saldo = 0;
conta1.agencia = 13;
conta1.cliente = cliente1;
conta1.depositar(102000000);
conta1.depositar(102000000);
conta1.depositar(2000);

const conta2 = new ContaCorrente();

conta2._saldo = 0;
conta2.agencia = 1001;
conta2.cliente = cliente2;

conta1.trasferir(2000, conta2);
conta1.trasferir(1000, conta2);


console.log(cliente1);
console.log(conta1);


//para criar esse arquivo utilizamos o comando (npm init)
//arquivo json é um arquivo de marcação e temos algumas chaves e seus respctivos valores  lá vamos adicionar o type (module);