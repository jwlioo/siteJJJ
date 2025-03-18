document.addEventListener("DOMContentLoaded", () => {

	const form = document.getElementById("cadastroClienteForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const nomeCliente = document.getElementById("nomeCliente").value;
		const senha = document.getElementById("senha").value;
		const cpf = document.getElementById("cpf").value;
		const email = document.getElementById("email").value;
		const telefone = document.getElementById("telefone").value;
		const dt_nascimento = document.getElementById("dt_nascimento").value;

		try {

			const response = await fetch("http://localhost:8080/cadastrocliente", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nomeCliente,
					senha,
					cpf,
					email,
					telefoneCliente,
					dt_nascimento
				}),
			});

			if (response.ok) {
				setTimeout(() => {
					window.location.href = "./html/cadastroEndereco.html"
				}, 1000);
			} else {
				alert("Erro ao cadastrar cliente");
			}
		} catch (error) {
			console.error("Erro ao cadastrar o cliente: ", error)
		}
	});
});