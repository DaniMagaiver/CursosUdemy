/*CREATE DATABASE IF NOT EXISTS lab_01;

USE lab_01;

CREATE TABLE IF NOT EXISTS Fatura(
	numfatura integer primary key,
	codCliente integer
);

CREATE TABLE IF NOT EXISTS Produto(
	codProduto integer primary key,
	descricao varchar(30)
);

CREATE TABLE IF NOT EXISTS Cliente(
	codCliente integer primary key,
	nome varchar(30),
    endereco varchar(50),
    credito float,
    tipo varchar(10),
    cpf varchar(12)
);

CREATE TABLE IF NOT EXISTS ItensFatura(
	numFatura integer,
    codProduto integer,
    quantidade integer,
    valor float
);

ALTER TABLE Fatura RENAME TO Pedidos;

ALTER TABLE Cliente ADD COLUMN historico varchar(50);

ALTER TABLE Cliente MODIFY COLUMN nome varchar(30); 

ALTER TABLE Pedidos ADD COLUMN dataPed date;

ALTER TABLE Produto ADD COLUMN PrecoCompra float;

ALTER TABLE Produto MODIFY COLUMN descricao varchar(25); */

ALTER TABLE Pedidos MODIFY COLUMN numfatura integer primary key not null;




