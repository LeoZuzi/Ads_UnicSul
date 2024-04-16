const express = require('express')

//rotas (quando o servidor for acessado, pra onde ele vai??)
const router = express.Router();
router.get('/json',(req, res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.json({
        nomeCompleto: nome+' '+sobrenome
    })
});

router.get('/json2',(req, res)=>{
   res.json(req.query);
});
router.get('/sobre',(req,res)=>{
    res.send('Pagina sobre o projeto')
})
router.get('/posts/:id',(req,res)=>{
    let id = req.params.id;
    res.send('Id do post ' + id)
})

module.exports = router; //exportando o app, pois iremos importa-lo no servidor