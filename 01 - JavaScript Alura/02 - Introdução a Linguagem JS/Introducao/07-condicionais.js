const listaDeDestinos = new Array(
    `Salvador `,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false
const temPassagemComprada = true

console.log('Destinos Possiveis: ')
console.log(listaDeDestinos)


/*

if (idadeComprador >= 18) {
    //pessoa Maior de Idade

    console.log('Comprador maior de Idade')
    listaDeDestinos.splice(1, 1);  // removendo item

} else {
    // A pessoa e menor de idade 
    if (estaAcompanhada) {
        console.log('Comprador esta Acompanhado')
        listaDeDestinos.splice(1, 1); // removendo item comando SLICE
    } else {
        console.log('Noa e maior de idade, Noa podemos vender sua passagem ! ')
    }

}

*/


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viajem");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Comprador menor de idade, nao posso vender");
    
}


console.log('Embarcando: ')
if(idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa Viajem !')
} else {
    console.log('Voce nao pode Viajar')
}



/*

O que aprendemos nessa aula:

If e Else

Operadores lógicos

if encadeado

else if

&& e ||


*/


