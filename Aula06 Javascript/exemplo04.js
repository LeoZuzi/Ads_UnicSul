class livro {
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco;
    }
    get Nome() {return this.nome;}
    set Nome(pNome) {return this.nome = pNome;}

    get Preco() {return this.Preco;}
    set Preco(pPreco) {return this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco * pDesconto)/100);
    }
}
var obj_livro1 = new livro("use a cabeça java", 120)
obj_livro1.calcularDesconto(30);
console.log("nome do livro: " + obj_livro1.nome + " custa " + obj_livro1.preco + " reais ")
