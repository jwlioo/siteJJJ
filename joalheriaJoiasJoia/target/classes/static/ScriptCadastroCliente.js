document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroClienteForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nomeCliente = document.getElementById("nomeCliente").value;
        const senha = document.getElementById("senha").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const dt_nascimento = new Date(document.getElementById("dt_nascimento").value).toISOString().split('T')[0];

        try {
            const response = await fetch("http://localhost:8080/cadastroCliente", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeCliente,
                    senha,
                    cpf,
                    email,
                    telefone,
                    dt_nascimento
                }),
            });

            if (response.ok) {
                setTimeout(() => {
                    window.location.href = "./cadastroEndereco.html"; // Caminho corrigido
                }, 1000);
            } else {
                const errorData = await response.json();
                alert(`Erro ao cadastrar cliente: ${errorData.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            console.error("Erro ao cadastrar o cliente: ", error);
            alert("Erro de conexão com o servidor. Tente novamente mais tarde.");
        }
    });
});