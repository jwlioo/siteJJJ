
document.getElementById("Cep").addEventListener("imput", async function(){
	const Cep = this.value.replace(/\D/g, "");
	
	if(Cep.lenght === 8){
		try{
			const response = await fetch ('https://viacep.com.br/ws/${Cep}/json/');
			
			if(!response.ok) throw new("Erro ao buscar CEP");
			
			const dados = await response.json();
			
			if(dados.erro ){
				alert("CEP nao Encontrado.")
				return;
			}
			document.getElementById("Rua").value = dados.logradouro;
			document.getElementById("Bairro").value = dados.bairro;
			document.getElementById("Cidade").value = dados.cidade;
			document.getElementById("Estado").value = dados.estado;
				
		} catch(error){
			alert("Erro ao buscar o endereco: " + error.message);
		}
	}
})




	document.getElementById("cadastroEnderecoForm").addEventListener("submit", async (event) => {
		event.preventDefault();



		const rua = document.getElementById("Rua").value;
		const cep = document.getElementById("Cep").value;	
        const bairro = document.getElementById("Bairro").value;
		const estado = document.getElementById("Estado").value;
		const cidade = document.getElementById("Cidade").value;
        const complemento = document.getElementById("Complemento").value;


		try {


			const response = await fetch("http://localhost:8080/enderecos", {
				method: "POST",
				headers: {  
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					rua,
					cep,
					bairro,
					estado,
					cidade,
                    complemento
				}),
			});


			
				
				
				
				if (response.ok) {
								window.location.href = "cadastroEndereco.html";
								
							} else {
								window.location.href ="sucessoCadastro.html";
							}
						} catch (error) {
							alert(error.message);
						}
		


	});

 