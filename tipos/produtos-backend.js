const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Servir arquivos estáticos

// Classe para gerenciar produtos
class ProdutoController {
    static caminhoArquivo = path.join(__dirname, 'produtos.json');

    static lerProdutos() {
        try {
            const dados = fs.readFileSync(this.caminhoProdutos, 'utf8');
            return JSON.parse(dados);
        } catch (erro) {
            return [];
        }
    }

    static salvarProduto(produto) {
        const produtos = this.lerProdutos();
        produto.id = Date.now(); // ID único
        produtos.push(produto);

        fs.writeFileSync(this.caminhoProdutos, JSON.stringify(produtos, null, 2));
        return produto;
    }
}

// Rotas
app.post('/api/produtos', (req, res) => {
    try {
        const novoProduto = ProdutoController.salvarProduto(req.body);
        res.status(201).json(novoProduto);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao cadastrar produto' });
    }
});

app.get('/api/produtos', (req, res) => {
    const produtos = ProdutoController.lerProdutos();
    res.json(produtos);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
