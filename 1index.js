
console.log("SisterBank")
 
import {Cliente} from "./ACliente.js";
import {ContaCorrente} from "./BContaCorrente.js";


const cliente1 = new Cliente("Ana", 12345678910); //estanciando cliente a classe

const cliente2 = new Cliente("Joao", 12345678911); //passando informações pelo constructor

const conta1 = new ContaCorrente(cliente1,1001);
conta1._saldo = 0;
// conta1.depositar(102000000);
// conta1.depositar(102000000);
// conta1.depositar(2000);

const conta2 = new ContaCorrente(cliente2, 1001);

conta2._saldo = 0;
// conta1.trasferir(2000, conta2);
// conta1.trasferir(1000, conta2);


console.log(cliente2);
console.log(conta2);


//para criar esse arquivo utilizamos o comando (npm init)
//arquivo json é um arquivo de marcação e temos algumas chaves e seus respctivos valores  lá vamos adicionar o type (module);