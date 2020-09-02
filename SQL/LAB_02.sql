CREATE DATABASE IF NOT EXISTS lab_02;

USE lab_02;

CREATE TABLE If not exists Cliente(
	cpf varchar(13) primary key,
    nome varchar(30),
    numConta varchar(6),
    telefone varchar(13),
    cidade varchar(25)
);

CREATE TABLE If not exists Carro(
	chassi varchar(20) primary key,
    modelo varchar(15),
    cor varchar(10),
    ano varchar(5),
    valor float
);

CREATE TABLE If not exists Aluguel(
	cpf varchar(13),
    chassi varchar(20),
    dataEntrada date,
    dataSaida date,
    total float
);

INSERT INTO Cliente(cpf, nome, numConta, telefone, cidade)
	VALUES
	('111111', 'Ana', '2317', '019', 'Campinas'),
    ('222222', 'Fábio', '1711', '011', 'Jundiaí'),
    ('121111', 'Maria', '7121', '011', 'São Paulo'),
    ('321222', 'Flávio', '2211', '019', 'Campinas'),
    ('123111', 'Fernando', '1123', '021', 'Rio de Janeiro'),
    ('217222', 'Marta', '3211', '031', 'Belo Horizonte');
    
INSERT INTO Carro(chassi, modelo, cor, ano, valor)
	VALUES
	('A21', 'Uno', 'Prata', '2003', NULL),
    ('2AC', 'Gol', 'Preto', '2004', NULL),
    ('33A', 'Corsa', 'Branco', '2005', NULL),
    ('12C', 'Uno', 'Verde', '2001', NULL),
    ('1C2', 'Astra', 'Prata', '2005', NULL),
    ('22A', 'Gol', 'Prata', '2005', NULL);
    
INSERT INTO Aluguel(cpf, chassi, dataEntrada, dataSaida, total)
	VALUES
	('111111', '33A', '2006-07-21', '2006-08-05', NULL),
    ('222222', '12C', '2006-07-21', NULL, NULL),
    ('222222', '22A', '2006-07-23', '2006-08-06', NULL),
    ('222222', '1C2', '2006-07-24', NULL, NULL);
    
INSERT INTO Cliente(cpf, nome, numConta, telefone, cidade)
	VALUES
	('123456', 'David', '0025', NULL, 'Ribeirão Pires');
    
INSERT INTO Carro(valor,  cor,  ano,  chassi, modelo)
	VALUES
	(15568.68, 'Azul','2015', 'Y02', 'Gol');

INSERT INTO Aluguel(cpf, chassi, dataEntrada, dataSaida, total)
	VALUES
	('777777', '12U', '2006-12-13', '2007-01-01', 5987.23),
    ('888888', '42B', '2015-08-21', '2015-08-25', 5879.56),
    ('999999', '12C', '2020-07-23', '2020-08-22', 125587.7);
    
UPDATE Cliente SET telefone = '019';

SELECT * FROM Cliente;

UPDATE Cliente SET nome = 'André' WHERE nome = 'Ana';

UPDATE Cliente SET cidade = 'Brasilia' WHERE numConta > '2000';

UPDATE Carro SET valor = 20000;

SELECT * FROM Carro;

UPDATE Carro SET cor = 'azul' WHERE modelo = 'Uno' || modelo = 'Corsa';

UPDATE Aluguel SET dataSaida = '2006-08-06' WHERE cpf = '2222';

UPDATE Aluguel SET dataSaida = '0000-00-00';

DELETE FROM Cliente WHERE cidade = 'Campinas';

DELETE FROM Carro WHERE ano = '2003' || ano = '2004';

DELETE FROM Carro WHERE chassi = '22A';

DELETE FROM Aluguel;

SELECT * FROM Aluguel;