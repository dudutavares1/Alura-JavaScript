console.log('\nTrabalhando com Condicionais')

const listaDeDestinos = new Array(
    `Salvador `,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
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


if (podeComprar && destinoExiste){
    console.log ('Boa viajem')
}else {
    console.log('Desculpe tivemos um erro !s')
}

// <<<<<<<<<< MElhor maneira de executar >>>>>>>>

for (let cont = 0 ;contador < 3 ; cont++){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        ;
    }
    contador += 1;
}  

 /*
 O que aprendemos nessa aula:

While;

Break;

Usando o Debbuger do VS Cde;

Entendendo o fluxo de execução do código;

configurando o debbuger do VSCode;

For Loop;

*/
