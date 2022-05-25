import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Produto ( id INTEGER PRIMARY KEY, nome TEXT, Valor INTEGER )')
    })
}

export async function selectProdutos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Produto')
        .then(Produtos=>  res.json(Produtos))
    });
}

export async function selectProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Produto WHERE id=?', [id])
        .then(Produto=> res.json(Produto) );
    });
}

export async function inserProduto(req, res){
    let Produto = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Produto (nome, Valor) VALUES (?,?)', [Produto.nome, Produto.Valor]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateProduto(req, res){
    let Produto = req.body;
    openDb().then(db=>{
        db.run('UPDATE Produto SET nome=?, Valor=? WHERE id=?', [Produto.nome, Produto.Valor, Produto.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Produto WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}