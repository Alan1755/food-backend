import express from "express";
import cors from "cors";
import { log } from "console";

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get("/olamundo", function(req, res){
    res.status(200).send("ola mundo ! Eu me chamo senhor pipoca ");
});

//levanta o servidor
app.listen(3001, function(){
    console,log("Servidor executando na porta 3001");
});