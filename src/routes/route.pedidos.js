import { Router } from "express";
import { con, query } from "../config/database.js";

const routePedido = Router();

routePedido.get("/oedidis", function(req, res) {
    let sql = `select * from pedido`;
        con.query(sql, function(err, result){
    if (err) {
                return res.status(500).send("ocorreu um erro :", err)
     } else {
                return res.status(200).json(result);
     }
        });
    });

routePedido.post("/pedidos", function (req, res){
    let sql = `insert into pedido(id_usuario, nome, email, fone, 
                  end_lougradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total)
                  values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` ;
    

    let p = req.body;

    con.query(sql, [p.id_usuario, p.nome, p.email, p.fone, 
        p.end_lougradouro, p.end_numero, p.end_bairro, p.end_cidade, p.end_uf, p.end_cep, p.total], async function(err, result){
        if(err)
            return res.status(500).send('Ocorreu um erro:'+ err.message);
        else{     
            
            let id_pedido = result.insertId;
            
            // Itens pedido
            for (let item of req.body.itens){
                sql = 'insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitario) values (?, ?, ?, ?)';

                await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);
            }

            return res.status(201).json(result);}

       
    });
});

export default routePedido;