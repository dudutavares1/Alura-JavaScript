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

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca

    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }


}


const dudu = new ClientePoupanca('nome', 'dudu@email.com', ' 34655587788', 100, 200)


dudu.depositar(500)
dudu.depositarPoupanca(1000)



console.log(dudu)

