function Cliente(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    };
}
const dudu = new Cliente('dudu', 'dudu@email.com', '24658879677', 100)

console.log(dudu)