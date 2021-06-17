class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "dudu";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 4258789878

cliente2.nome = "Alince";
cliente2.cpf = 35687789547;
cliente2.agencia = 1001;
cliente2.saldo = 0;



console.log(cliente1);
console.log(cliente2);