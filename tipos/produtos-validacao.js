document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('produto-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Limpar erros anteriores
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');

        // Validações
        let isValid = true;

        // Validação Nome
        const nome = document.getElementById('nome');
        if (nome.value.trim().length < 3) {
            document.getElementById('nome-error').textContent = 'Nome deve ter no mínimo 3 caracteres';
            isValid = false;
        }

        // Validação Descrição
        const descricao = document.getElementById('descricao');
        if (descricao.value.trim().length < 10) {
            document.getElementById('descricao-error').textContent = 'Descrição deve ter no mínimo 10 caracteres';
            isValid = false;
        }

        // Validação Preço
        const preco = document.getElementById('preco');
        if (parseFloat(preco.value) <= 0) {
            document.getElementById('preco-error').textContent = 'Preço deve ser maior que zero';
            isValid = false;
        }

        // Validação Quantidade
        const quantidade = document.getElementById('quantidade');
        if (parseInt(quantidade.value) < 0) {
            document.getElementById('quantidade-error').textContent = 'Quantidade não pode ser negativa';
            isValid = false;
        }

        // Validação Categoria
        const categoria = document.getElementById('categoria');
        if (categoria.value === '') {
            document.getElementById('categoria-error').textContent = 'Selecione uma categoria';
            isValid = false;
        }

        // Se tudo válido, enviar para o backend
        if (isValid) {
            enviarProduto({
                nome: nome.value,
                descricao: descricao.value,
                preco: parseFloat(preco.value),
                quantidade: parseInt(quantidade.value),
                categoria: categoria.value
            });
        }
    });

    function enviarProduto(produto) {
        // Simulação de envio para backend
        fetch('/api/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto)
        })
        .then(response => response.json())
        .then(data => {
            alert('Produto cadastrado com sucesso!');
            form.reset(); // Limpar formulário
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar produto');
        });
    }
});
