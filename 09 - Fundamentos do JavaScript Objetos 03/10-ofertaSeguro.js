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



function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes('dependentes'))
    { 
        console.log(`Oferta de Seguro de Vida para ${obj.nome}`)
    }

}


console.log(Object.entries(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)


