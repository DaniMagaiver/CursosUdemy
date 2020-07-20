# Um comentário em ruby é feito com hashtag
# 
#

nome = "Danilo" #variáveis em ruby são declaradas como em Python
puts nome

nome = nil #nil = null

puts nome.nil? #todo método com interrogação no final retorna true ou false

texto = '  meu texto completo  ' #remove os espaços do início e do final da string

puts texto.strip #O método utilizado desta forma não faz modificações na variável

puts texto

texto.strip! # para isto utilizamos exclamação (!)

puts texto

preco = 50
preco_unitario = 70 #O padrão de variáveis é snipcase, ou seja, utilizando underline (_)
                    #Outras linguagens podem ser camelCase, ou seja, utilizam a primeira letra em maiúsculo
                    #Mas nada impede de escrever a variável como bem entender

def muda_preco #como a função não possui parâmetros, então não precisa de parênteses
    preco = 100 #Assim como o javascript as variáveis de função possuem escopo interno
    puts preco
end

muda_preco
puts preco

muda_preco()