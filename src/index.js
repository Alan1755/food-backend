import express from "express";
import cors from "cors";
import {con} from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get("/olamundo", function(req, res){
    res.status(200).send("ola mundo ! Eu me chamo senhor pipoca ");
});

app.get("/produtos", function(req, res){
        con.query('select * from produto', function(err, result){
        if (err)
            return res.status(500).send("ocorreu um erro: " + err.message);
        else
            return res.status(200).json(result);
        })


});
//levanta o servidor
app.listen(3001, function(){
    console.log("Servidor executando na porta 3001");
});