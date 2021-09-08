const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0



//callback
//notas.forEach(nota => {
//    somaDasNotas += nota
//})

notas.forEach(function (notas) {
    somaDasNotas += notas
})

let media = somaDasNotas / notas.length

console.log(media)