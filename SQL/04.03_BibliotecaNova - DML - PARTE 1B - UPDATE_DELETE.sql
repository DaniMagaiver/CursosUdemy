/* Banco de Dados */

USE bibliotecaNova;

-- atualzação tabela de funcinários
-- atualização dos dados do funcionário "Luiz Henrique Talles"

UPDATE funcionarios
	SET funcao = 'Auxiliar',
		salario = 800
	WHERE CPF = '32361298734';

/*
Error Code: 1175.
You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.
To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
*/

UPDATE funcionarios
	SET funcao = 'Auxiliar';

SELECT * FROM funcionarios;

-- exclusão de um usuário da biblioteca
-- usuária "Maria da Costa"
-- NÃO tem nenhum livro emprestado
-- NÃO tem nenhum livro reservado
-- este comando afetará somente a tabela usuários,
-- eliminando o usuário com o CPF indicado (Raquel)

SELECT COUNT(*) FROM usuarios;

DELETE FROM usuarios
	WHERE CPF = '52963876530';

SELECT * FROM usuarios;

-- exclusão de um usuário da biblioteca
-- usuária "José Francisco de Paula"
-- NÃO tem nenhum livro emprestado
-- SIM tem livro reservado
-- este comando afetará 2 tabelas:
--  1) na tabela usuários eliminará o usuário com o CPF indicado
--  2) na tabela livros vai "nulificar" a coluna CPF_usuarioReservar
--     pois, a usuária "Luiza" tem livro reservado e a regra
--     de integridade foi defina como "ON DELETE SET NULL"

SELECT COUNT(*) FROM usuarios;
SELECT * FROM livros;

DELETE FROM usuarios
	WHERE CPF = '19321122213';

SELECT COUNT(*) FROM usuarios;
SELECT * FROM usuarios;
SELECT * FROM livros;

-- exclusão de um usuário da biblioteca
-- usuária "Luiza Souza Prado"
-- SIM tem livro emprestado
-- SIM tem livro reservado
-- este comando não vai funcionar, pelos seguine motivos:
-- * usuário "Luiza" tem livro(s) emprestado(s)
-- * foi codificado na DML de criação da tabela livro
-- * uma restrição (CONSTRAINT) de integridade referencial
-- * para evitar que usuários sejam excluidos tendo
-- * livros emprestados --> "ON DELETE RESTRICT"  	

DELETE FROM usuarios
	WHERE CPF = '70964411900';

SELECT * FROM usuarios;

