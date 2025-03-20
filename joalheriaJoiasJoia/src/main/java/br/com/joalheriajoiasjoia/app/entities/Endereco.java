package br.com.joalheriajoiasjoia.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
	@Table(name = "tb_endereco")
	public class Endereco {
		//Atributos
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id_endereco;
		
		@Column(name = "cep", length = 100)
		private String cep;
		
		@Column(name = "rua", length = 100)
		private String rua;
		
		@Column(name = "numero",nullable = false)
		private int numero;
		
		@Column(name = "bairro",length = 100)
		private String bairro;
		
		@Column(name = "cidade", length = 100)
		private String cidade;
		
		@Column(name = "estado", nullable = false, length = 2)
		private String estado;
		
		@Column(name = "complemento", length = 100)
		private String complemento;
		
		@ManyToOne
	    @JoinColumn(name = "CLIENTE_id_cliente")
	    private Cliente cliente;



public Endereco() {

}
public Endereco(Long id, String rua, int numero, String bairro, String cidade, String estado, String cep) {
	this.id_endereco = id;
	this.cep = cep;
	this.rua = rua;
	this.numero = numero;
	this.bairro = bairro;
	this.cidade = cidade;
	this.estado = estado;
}
public Long getId_endereco() {
	return id_endereco;
}
public void setId_endereco(Long id_endereco) {
	this.id_endereco = id_endereco;
}
public String getCep() {
	return cep;
}
public void setCep(String cep) {
	this.cep = cep;
}
public String getRua() {
	return rua;
}
public void setRua(String rua) {
	this.rua = rua;
}
public int getNumero() {
	return numero;
}
public void setNumero(int numero) {
	this.numero = numero;
}
public String getBairro() {
	return bairro;
}
public void setBairro(String bairro) {
	this.bairro = bairro;
}
public String getCidade() {
	return cidade;
}
public void setCidade(String cidade) {
	this.cidade = cidade;
}
public String getEstado() {
	return estado;
}
public void setEstado(String estado) {
	this.estado = estado;
}
public Cliente getCliente() {
	return cliente;
}
public void setCliente(Cliente cliente) {
	this.cliente = cliente;
}
}


