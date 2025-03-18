// Busca automática do endereço ao digitar o CEP
document.getElementById("cep").addEventListener("input", async function () {
    const cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) throw new Error("Erro ao buscar CEP");

            const dados = await response.json();

            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos do formulário com os dados da API
            document.getElementById("rua").value = dados.logradouro || "";
            document.getElementById("bairro").value = dados.bairro || "";
            document.getElementById("cidade").value = dados.localidade || "";
            document.getElementById("estado").value = dados.uf || "";

        } catch (error) {
            alert("Erro ao buscar endereço: " + error.message);
        }
    }
});

// Cadastro do endereço
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroEnderecoForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const cep = document.getElementById("cep").value;
        const rua = document.getElementById("rua").value;
        const bairro = document.getElementById("bairro").value;
        const numero = document.getElementById("numero").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const complemento = document.getElementById("complemento").value;

        try {
            const response = await fetch("http://localhost:8080/cadastroendereco", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cep,
                    rua,
                    bairro,
                    numero,
                    cidade,
                    estado,
                    complemento
                }),
            });

            if (response.ok) {
                setTimeout(function () {
                    window.location.href = "./html/sucessocadastro.html";
                }, 1000);
            } else {
                alert("Erro ao cadastrar o endereço do cliente");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o endereço do cliente", error);
            alert("Ocorreu um erro ao tentar cadastrar o endereço. Tente novamente.");
        }
    });
});
