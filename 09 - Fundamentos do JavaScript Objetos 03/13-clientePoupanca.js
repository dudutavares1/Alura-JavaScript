function Cliente(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    };
}
function ClientePoupanca(nome, email, cpf, saldoPoup) {
    Cliente.call(this, nome, email, cpf, saldo)
    this.saldoPoup = saldoPoup
}


const mirella = new ClientePoupanca('mirella', '36645877789', 'mirella@email.com' 100, 200)

console.log(mirella)