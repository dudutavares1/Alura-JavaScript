const Livro = {
    nome: "React Native",
    editora: "Casa do Codigo",
    paginas: 185,
    anunciar: function () {
        console.log('A Alura indica o Livro ' + this.nome + '!')
    }
}

Livro.anunciar()