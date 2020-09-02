/* Banco de Dados */

USE bibliotecaNova;

/* Carga nas tabelas-Pais */

/* carga tabela editoras */

INSERT INTO editoras (codigo, nome, cidade, tel_contato)
	VALUES 
		(11005, 'Saraiva', 'Sao Paulo', 1130901010),
		(61001, 'Eras', 'Brasilia', 6134201818),
		(41001, 'Summer', 'Curitiba', 4132994040),
		(11004, 'Pontos', 'Sao Paulo', 1154201966),
		(21001, 'Marks', 'Rio de Janeiro', 2159001010),
		(11003, 'Grupo A', 'Sao Paulo', 1135669865),
		(21002, 'Ciência Moderna', 'Rio de Janeiro', 2142002478),
		(11002, 'Cientifica', 'Sao Paulo', 1137201415),
		(11001, 'Planeta', 'Sao Paulo', 1155441881);

SELECT * FROM editoras ORDER BY codigo;

/* carga tabela de autores */

INSERT INTO autores (nome, nacionalidade, dt_nascimento, codigo)
	VALUES
		('Ethevaldo Siqueira', 'Brasileira', '1950-10-04', 1000),
		('Ana Lucia Jankovic Barduchi', 'Brasileira', '1991-03-31', 1001),
		('Adelia Prado', 'Brasileira', '1948-12-20', 1002),
		('Walter Isaacson', 'Americana', '2000-07-07', 1003),
		('Steven J. Scott', 'Americana', '2002-12-16', 1004),
		('C. J. Date', 'Americana', '1950-03-25', 1005),
		('Pedro Felipe', 'Brasileira', '1995-12-18', 1006),
		('Kim Shaolin', 'Chinesa', '1970-04-03', 1007);

SELECT * FROM autores ORDER BY codigo;

INSERT INTO generos (codigo, genero, dias_devolucao)
	VALUES
		(101, 'Infantil', 5),
		(102, 'Romance', 30),
		(103, 'Biografia', 40),
		(104, 'Tecnologia', 15),
		(105, 'Administração', 20),
		(106, 'Poesia', 10);

SELECT * FROM generos ORDER BY codigo;		

/* carga tabela de usuarios */
/* a ordem é establecida pela correspondência dos campos */

INSERT INTO usuarios (CPF, nome, telefone, dt_cadastro, dt_nascimento)
	VALUES
		('10122020232', 'Maria de Lourdes Amaral', 35440089, '2018-05-01', '2003-04-16'),
		('19321122213', 'Jose Francisco de Paula', 27219756, '2009-03-30', '1970-08-01'),
		('70964411900', 'Luiza Souza Prado', 34559087, '2008-10-15', '1977-12-13'),
		('45399109881', 'Raquel Santos', 87603451, '2015-07-05', '2000-02-22'),
		('22539910976', 'Ivete Medina Chernell', 48170352, '2017-07-01', '2003-11-23'),
		('52963876530', 'Maria da Costa', 38926593, '2018-07-01', '1999-08-19'),
		('93543954882', 'Joana da Fonseca', 32867022, '2015-12-18', '1998-09-09'),
		('12345678901', 'Pedro Américo da Silva', 50204589, '2014-04-25', '1988-07-09'),
		('98765432101', 'Clarissa Melo', 32192020, '2015-12-14', '1999-10-25');

SELECT * FROM usuarios ORDER BY cpf;

/* carga tabela funcionarios */

INSERT INTO funcionarios (CPF, nome, cidade, telefone, salario, funcao, dt_admissao, dt_nascimento)
	VALUES
	('30361290876', 'Ademir Jose Silva', 'Campinas', 22317865, 985.00, 'Auxiliar1', '2018-03-14', '1985-10-28'),
	('23161197770', 'Ana Salles Azir', 'São Paulo', 22317865, 1520.00, 'Recepcionista', '2018-08-20', '2000-11-02'),
	('61254590871', 'Lucia Vicentim', 'São Paulo', 21316565, 1520.00, 'Bibliotecaria chefe', '2006-02-16', '1990-08-12'),
	('20321295096', 'Joao Alberto Smith', 'Itatiba', 22447865, 3200.00, NULL, '2014-12-10', '1999-04-07'),
	('32361298734', 'Luis Henrique Talles', 'Campinas', 21531785, 0, NULL,'2020-03-31', '2000-05-29'),
	('45403612087', 'Francisco Jose Almeida', 'Indaiatuba', 38674299, 1260.00, 'Bibliotecario2', '2015-05-14', '1980-10-28'),
	('12345678901', 'Pedro Americo da Silva', 'São Paulo', 50204589, 3680.45, 'Supervisor', '2005-01-15', '1989-07-11'),
	('98765432101', 'Clarissa Melo', 'Campinas', 32192020, 2950.00, 'Bibliotecario3', '2003-10-23', '1991-09-30');

SELECT * FROM funcionarios ORDER BY CPF;

/* carga tabelas de relacionamentos */

/*	carga na tabela livros - possui 4 chaves estrangeiras
	checagem de integridade referencial será feita */

INSERT INTO livros (numero, titulo, codigo_genero,
					ano_publicacao, codigo_editora, qtde_volumes, CPF_usuarioReservar)
	VALUES
		(87659, 'Tecnologias Inovadoras', 104, 2007, 11001, 1, 70964411900),
		(67392, 'Empregabilidade', 105, 1977, 61001, 3, NULL),
		(45112, 'Steve Jobs – a Biografia', 103, 2011, 11003, 2, NULL),
		(77680, 'A Duracao do Dia', 106, 2010, 41001, 1, NULL),
		(32176, 'Salomao – O Homem Mais Rico', 102, 2011, 11005, 2, NULL),
		(67554, 'Bagagem', 106, 1972, 41001, 1, 19321122213),
		(10277, 'O Pelicano', 102, 1984, 41001, 4, NULL);

SELECT * from livros ORDER BY numero;

INSERT INTO volumes (numero_livro, numero_volume, edicao, dt_aquisicao, CPF_funcionarioLiberar,
			CPF_usuarioRetirar, dt_retirada, dt_prevista_devolucao)
	VALUES
		(87659, 1, 1, '2019-01-15', 98765432101, 10122020232, '2020-07-26', '2020-08-26'),
		(67392, 1, 5, '2018-01-15', NULL, NULL, NULL, NULL),
		(67392, 2, 5, '2019-01-15', NULL, NULL, NULL, NULL),
		(67392, 3, 5, '2019-01-15', 98765432101, 22539910976, '2020-07-08', '2020-08-08'),
		(45112, 1, 1, '2015-04-25', 12345678901, 45399109881, '2020-06-20', '2020-07-26'),
		(45112, 2, 1, '2015-04-25', 98765432101, 10122020232, '2020-07-13', '2020-08-13'),
		(67554, 1, 2, '2000-07-04', 12345678901, 98765432101, '2020-07-20', '2020-08-20'),
		(10277, 1, 24, '2019-11-14', 98765432101, 12345678901, '2020-07-05', '2020-08-05'),
		(10277, 2, 24, '2019-11-14', 30361290876, 93543954882, '2020-07-08', '2020-08-08'),
		(10277, 3, 24, '2019-11-14', 23161197770, 70964411900, '2020-07-11', '2020-08-11'),
		(10277, 4, 24, '2019-11-14', NULL, NULL, NULL, NULL),
		(32176, 1, 3, '2004-10-14', 98765432101, 10122020232, '2020-07-20', '2020-08-20'),
		(32176, 2, 5, '2007-09-27', NULL, NULL, NULL, NULL),
		(77680, 1, 7, '2002-03-09', 12345678901, 70964411900, '2020-07-31', '2020-08-30');

SELECT * FROM volumes order by numero_livro, numero_volume;				

/*	carga do relacionamento livros_autores 
	checagem de integridade referencial será feita */

INSERT INTO Livros_autores (numero_livro, codigo_autor)
	VALUES
			(10277, 1002),
			(32176, 1004),
			(45112, 1003),
			(67392, 1001),
			(67554, 1002),
			(77680, 1002),
			(87659, 1000),
			(87659, 1007),
			(67392, 1006);

SELECT * FROM livros_autores ORDER BY numero_livro, codigo_autor;