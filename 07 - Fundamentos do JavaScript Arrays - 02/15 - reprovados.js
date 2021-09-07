const nomes = ['Joao', 'Juliana', 'Ana', 'Caio']

const notas = [10, 4.5, 8, 7.5]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
console.log(`repovados: ${reprovados}`)