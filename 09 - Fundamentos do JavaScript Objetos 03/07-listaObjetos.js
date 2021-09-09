const cliente = {
    nome: 'dudu',
    idade: 34,
    cpf: '34655588877',
    email: 'dudu@email.com',
    fones: ['982606985', '985477877'],
    dependentes: [{
        nome: 'Mirella',
        parentesco: 'filha',
        dataNascimento: '22/09/2009'
    }]
}

cliente.dependentes.push({
    nome: 'Isis Maia',
    parentesco: 'filha',
    dataNascimento: '23/12/2017'
})

console.log(cliente.dependentes[0])



const filhaMaisNova = cliente.dependentes.filter(pedentente => dataNascimento === '23/12/2017')

console.log(filhaMaisNova[0].nome)