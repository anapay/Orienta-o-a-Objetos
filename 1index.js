
console.log("SisterBank")
 
import {Cliente} from "./ACliente.js";
import {ContaCorrente} from "./BContaCorrente.js";

const cliente1 = new Cliente("Ana", 12345678910); //estanciando cliente a classe

const cliente2 = new Cliente("Joao", 12345678911); //passando informações pelo constructor

const conta1 = new ContaCorrente(cliente1,1001);
conta1.depositar(102000000);
const conta2 = new ContaCorrente(cliente2, 1001);
let valor = 20000;

conta1.trasferir(valor, conta2)

console.log(cliente1, conta1);



//para criar esse arquivo utilizamos o comando (npm init)
//arquivo json é um arquivo de marcação e temos algumas chaves e seus respctivos valores  lá vamos adicionar o type (module);