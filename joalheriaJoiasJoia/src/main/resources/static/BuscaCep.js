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