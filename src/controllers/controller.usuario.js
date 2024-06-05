import { con } from "../config/database.js";
import UsuarioModel from "../models/model.usuario.js";

class UsuarioController {

    static getAllUsuarios(req, res) {
        try {
            UsuarioModel.getAllUsuarios(function (err, result){
                if (err) {
                    console.error(err);
                        return res.status(500).json( { error: "Ocorreu um erro ao buscar o usuario"});
                }

                if (!result[0]){
                    return res.status(404).json( {message: "não foi encontrados os usuarios" } );
                }

                return res.status(200).json(result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "erro interno ao servidor." } );
        }
    }

    static createUsuario(req, res) {
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const senha = p.senha;

        try {
            UsuarioModel.createUsuario(nome, email, senha, function(err, result) {
                    if (err) {
                        console.error("Erro ao cadastrar usuario: ", err);
                        return res.status(500).json ({ error: "ocorreu um erro ao cadastrar o usuario. "});
                    }

                    return res.status(201).json( { message: "usuario inserido com sucesso.",
                        data: {
                            id: result.insertId,
                            nome,
                            email
                        }
                     })
            });

        } catch (error) {
            console.error(error);
            res.status(500).json( {error: "Erro interno do servidor."  } );
        }
    }
    static editUsuario(req, res){
        const id = req.params.id;
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        
        try {
            UsuarioModel.editUsuario(id, nome, email, function(err, result){
                    if (err){
                        console.error("Erro ao editar o usuario: ", err);
                        return res.status(500).json({ error: "Ocorreu um erro ao editar o usuario."});

                    }

                    if (result.affectedRows === 0){
                        return res.status(404).json({ message: "Usuario nao foi encontrado"});

                    } 
                    return res.status(200).json({
                        message: "Usuario editado com sucesso",
                        data: {
                            id, nome, email
                        }
                    })
            });
        } catch (error) {
            console.error(error);
            res.status(500).json ({ error: "erro interno no servidor"});
        }
        

    }
            static removeUsuario(req, res) {
                let id = req.params.id;

                try {
                    UsuarioModel.removeUsuario(id, function(err, result){
                        if (err) {
                            console.error("Erro ao deletar usuario:", err);
                            return res.status(500).json({ error: "Ocorreu um erro ao deletar o Usuario."} );
                        
                        }
                        if (result.affectedRows ===0) {
                            return res.status(404).json({ message: "Usuario não encontrado "})
                            
                        }
                        return res.status(200).json({message: " Usuario deletado com sucesso ", data: {id} } );
                    })
                } catch (error) {
                    console.error(error);
                    res.status(500).json({error: "erro interno no servidor."});
                }
             }
}

export default UsuarioController;