console.log('\nTrabalhando com Condicionais')

const listaDeDestinos = new Array(
    `Salvador `,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'Rio de Janeiro'

console.log('\n Destinos Possiveis: ')
console.log(listaDeDestinos)


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0;
let destinoExiste = false
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}  
console.log("Destino existe: ", destinoExiste);

