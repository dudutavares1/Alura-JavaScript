class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const dudu = new Cliente('nome', 'dudu@email.com', '34655587788', 100)


///dudu.exibirSaldo()
console.log(dudu)