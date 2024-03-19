class livro {
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco;
    }
    get Nome() {return this.nome;}
    set Nome(pNome) {return this.nome = pNome;}

    get Preco() {return this.Preco;}
    set Preco(pPreco) {return this.preco = pPreco;}

    
    }

var obj_livro1 = new livro("use a cabeça java", 100)

console.log("nome do livro: " + obj_livro1.nome + " custa " + obj_livro1.preco + " reais ")
