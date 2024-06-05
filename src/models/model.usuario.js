import { con } from "../config/database.js";

class UsuarioModel {

 // Metodo para obter os usuarios
    static getAllUsuarios(callback) {
        let sql = `select * from usuario`;

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);

        });
    }
  //metodo pra criar um novo usuario
        static createUsuario(nome, email, senha, callback) {
            let sql= `insert into usuario (nome, email, senha) values (?, ?, ?)`;

        con.query(sql, [nome, email, senha], function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
        }
        // metodo para editar um usuario existente
        static editUsuario(id, nome, email, callback) {
            let sql= `update usuari set nome=?, email=? where id_usuario`;

            con.query(sql, [nome, email, id], function(err, result) {
                if (err)
                    callback(err, null);
                else
                    callback(null, result)
            });
        }

        // Método para remover um usuário
        static removeUsuario(id, callback){
            let sql = `delete from usuario where id_usuario=?`;

                con.query(sql, [id], function(err, result){
                    if (err) 
                        callback(err, null)
                    else
                        callback(null, result)
                        
                    
                });
        }
}

export default UsuarioModel;