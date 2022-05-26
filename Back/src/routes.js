import { Router } from "express";
import {  insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controller/Produto.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/Produtos', selectProdutos);
router.get('/Produto', selectProduto);
router.post('/Produto', insertProduto);
router.put('/Produto', updateProduto);
router.delete('/Produto', deleteProduto);

export default router;