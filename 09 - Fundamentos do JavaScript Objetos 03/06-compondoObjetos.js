const cliente = {
    nome: 'dudu',
    idade: 34,
    cpf: '34655588877',
    email: 'dudu@email.com',
    fones: ['982606985', '985477877']

}


cliente.dependente = {
    nome: 'Mirella',
    parentesco: 'filha',
    dataNascimento: '22/09/2009'
}


console.log(cliente)

cliente.dependente.nome = 'Mirella Araujo'

console.log(cliente)