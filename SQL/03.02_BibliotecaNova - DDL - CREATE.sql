/* Cria o Banco de Dados biblioteca Nova */

CREATE DATABASE If not exists bibliotecaNova;

use bibliotecaNova;

use bibliotecaNova;

/* Criação das Tabelas do banco de dados Biblioteca */ 

CREATE TABLE if not exists funcionarios
(
	CPF char (11) not null,
	nome varchar (40) not null,
	cidade varchar (50) not null,
	telefone char (8) not null, -- sem DDD
	salario decimal (7,2) not null,
	funcao varchar (30),
	dt_nascimento date,
	dt_admissao date,

	PRIMARY KEY (CPF)
);

CREATE TABLE if not exists editoras
(
	codigo int PRIMARY KEY not null,
	nome varchar (40) not null,
	cidade varchar (50) not null,
	tel_contato char (10) -- com DDD 
);

CREATE TABLE if not exists autores
(
	codigo int PRIMARY KEY not null,
	nome varchar (40) not null,
	nacionalidade varchar (20) not null,
	dt_nascimento date 
);

CREATE TABLE if not exists usuarios
(
	CPF char (11) not null,
	nome varchar (50) not null,
	telefone char (8) not null, -- sem DDD
	dt_cadastro date,
	dt_nascimento date not null,
	
	PRIMARY KEY (CPF)
); 

CREATE TABLE if not exists generos
(
	codigo int PRIMARY KEY not null,
	genero varchar (20) not null,
	dias_devolucao tinyint not null
);

CREATE TABLE if not exists livros
(
	numero integer PRIMARY KEY not null,
	titulo varchar (60) not null,
	codigo_genero int,
	ano_publicacao year not null,
	codigo_editora int not null,
	qtde_volumes tinyint,
	CPF_usuarioReservar char (11),

	CONSTRAINT FK_livros_codigo_genero FOREIGN KEY (codigo_genero)
		references generos (codigo) 
		on delete set null
		on update cascade,

 	CONSTRAINT FK_livros_codigo_editora FOREIGN KEY (codigo_editora)
 		references editoras (codigo)
 		on delete restrict
 		on update cascade,

 	CONSTRAINT FK_livros_CPF_usuarioReservar FOREIGN KEY (CPF_usuarioReservar)
 		references usuarios (CPF)
 		on delete set null
 		on update cascade
);

CREATE TABLE if not exists volumes
(
	numero_livro int not null,
	numero_volume tinyint not null,
	edicao tinyint not null,
	dt_aquisicao date,
	CPF_funcionarioLiberar char (11),
	CPF_usuarioRetirar char (11),
	dt_retirada date,
	dt_prevista_devolucao date,

	PRIMARY KEY (numero_livro, numero_volume),

	CONSTRAINT FK_volumes_numero_livro FOREIGN KEY (numero_livro)
		references livros (numero)
		on delete cascade
		on update cascade,

	CONSTRAINT FK_volumes_CPF_funcionarioLiberar FOREIGN KEY (CPF_funcionarioLiberar)
		references funcionarios (CPF)
		on delete  restrict
		on update cascade,

	CONSTRAINT FK_volumes_CPF_usuarioRetirar FOREIGN KEY (CPF_usuarioRetirar)
		references usuarios (CPF)
		on delete  restrict
		on update cascade
);		

CREATE TABLE if not exists livros_autores
(
	numero_livro int not null,
	codigo_autor int not null,
	CONSTRAINT PRIMARY KEY (numero_livro, codigo_autor)
);

ALTER TABLE livros_autores
	add CONSTRAINT FK_livros_autores_numero_livro FOREIGN KEY (numero_livro)
		references livros (numero)
		on delete cascade
		on update cascade;

ALTER TABLE livros_autores
	add CONSTRAINT FK_livros_autores_codigo_autor FOREIGN KEY (codigo_autor)
		references autores (codigo)
		on delete restrict
		on update cascade;		

