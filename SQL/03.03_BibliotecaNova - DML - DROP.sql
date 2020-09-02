/* Elimina o Banco de Dados biblioteca */

-- DROP DATABASE bibliotecaNova;

/* Elimina as regras de integridade que prende as tabelas */

ALTER TABLE livros
	DROP CONSTRAINT FK_livros_codigo_editora;

ALTER TABLE livros
	DROP CONSTRAINT FK_livros_codigo_genero;

ALTER TABLE livros
	DROP CONSTRAINT FK_livros_CPF_usuarioReservar; 


ALTER TABLE volumes
	DROP CONSTRAINT FK_volumes_numero_livro;

ALTER TABLE volumes 
	DROP CONSTRAINT FK_volumes_CPF_funcionarioLiberar;

ALTER TABLE volumes
	DROP CONSTRAINT FK_volumes_CPF_usuarioRetirar;

ALTER TABLE livros_autores
	DROP CONSTRAINT FK_livros_autores_numero_livro;

ALTER TABLE livros_autores
	DROP CONSTRAINT FK_livros_autores_codigo_autor; 	

/* Elimina as tabelas do banco de dados biblioteca */ 

DROP TABLE editoras;
DROP TABLE autores;
DROP TABLE generos;
DROP TABLE funcionarios;
DROP TABLE usuarios;
DROP TABLE livros;
DROP TABLE volumes;
DROP TABLE livros_Autores;



