import ProdutoModel from "../models/model.produto.js";

    class ProdutoController {

            static getAllProdutos(req, res) {
                try {
                    ProdutoModel.getAllProdutos(function(err, result){
                        if (err) {
                            console.error(err);
                            return res.status(500).json( {error: "Ocorreu um erro ao buscar o produto." } );
                        }

                        return res.status(200).json(result);
                    });

                } catch (error) {
                    //captura qualquer conexão
                    console.error(error);
                    //Retornar uma resposta de erro 500
                    res.status(500).json({error: "Erro interno no Servidor"});
                }
            }

    }
export default ProdutoController;