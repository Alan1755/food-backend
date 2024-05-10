import { Router } from "express";
import { con, query } from "../config/database.js";

const routeProduto = Router();

//rotas

routeProduto.get("/produtos", function(req, res){
        con.query('select * from produto', function(err, result){
        if (err)
            return res.status(500).send("ocorreu um erro: " + err.message);
        else
            return res.status(200).json(result);
        })
    });

export default routeProduto;