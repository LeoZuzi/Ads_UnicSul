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
var obj_livro1 = new livro("use a cabeça java", 120)
var obj_livro2 = new livro("use a cabeça java", 120)

var lista = []
lista.push(obj_livro1)
lista.push(obj_livro2)

console.log(lista[0])
console.log(lista[1])