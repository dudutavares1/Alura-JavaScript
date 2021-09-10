function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}
const dudu = new Cliente("dudu", "55588844477711", "ju@email.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const mirella = new ClientePoupanca("mirella", "55588844477711", "ju@email.com", 100, 200)

console.log(mirella)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

mirella.depositarPoup(30)

console.log(mirella.saldoPoup)
console.log(dudu.saldoPoup)