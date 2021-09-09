const cliente = {
    nome: 'dudu',
    idade: 34,
    cpf: '34655588877',
    email: 'dudu@email.com',
    fones: ['982606985', '985477877'],
    dependentes: [
        {
            nome: 'Mirella Araujo',
            parentesco: 'filha',
            dataNasc: '22/09/2009',
        },

        {
            nome: 'Isis Maia',
            parentesco: 'filha',
            dataNasc: '23/12/2017',
        },

    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    }
}


let relatorio = ''

for (let info in cliente) {

relatorio += `${info}`
}

console.log(relatorio)