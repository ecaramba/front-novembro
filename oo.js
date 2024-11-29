// orientação a objetos e JSON

// cabeta bic
// função -> metodo -> escrever papel
// atributo -> cor da tinta

var caneta = {
    cor: "Azul",
    quantTinta: 100,

    escrever: function()
    {
        console.log("escreveu");
    }
};

//chamar metodo
caneta.escrever();

// alterando atributo
caneta.cor = "Preto";

var pessoa = {
    cpf: "123",
    pertences: caneta
}

pessoa.pertences.escrever;
