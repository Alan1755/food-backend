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

}

export default UsuarioController;