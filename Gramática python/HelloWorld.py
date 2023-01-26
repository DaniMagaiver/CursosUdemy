import time
import calendar

# Para executar um arquivo utilizamos 'python arquivo.py'
if True:
    print("This is a " +
          "multiline code!")

# Usamos """ para criar strings com quebra de linha
    print("""This is a string
    with breakline""")
    # value = input("Isto vai ser imprimido. >> ")
    # print(value)

# Atribuição de múltiplas variáveis em uma única linha
    a, b, c = 1, 2, "John"

# A conversão de int para string não é implícita
    print("Valor variável a -> " + str(a))
    print("Valor variável b -> " + str(b))
    print("Valor variável c -> " + c)
# Variáveis possuem tipagem fraca
    a = "Maria"
    print(a)

# É possível apagar variáveis em memória utilizando o comando del
    del a
    novaString = "\nIsto é uma cadeia de caracteres"
# Strings comportam-se como um array de caracteres
    print(novaString[0:17])

# Multiplicação de strings
    print(novaString * 2)

# É possível utilizar índices negativos para ler uma array da direita para esquerda
    lista = ["Maria", "João", "Gilberto"]
    tupla = ("Ovo", "Carne", "Leite")
    print(lista[-2])
    print(tupla[1])

# Os elementos dentro de uma tupla são imutáveis
    lista[1] = "Mario"
    #tupla[1] = "Jiló"

# Dicionários são elementos não ordenados com chave e valor
    dicionario = {'um': 1, 'dois': 2, 'tres': 3}
    print(dicionario["um"])
    
# É possível adicionar elementos em um dicionário
    dicionario["quatro"] = 4
    print(dicionario["quatro"]) 

# É possível acessar a lista de chaves e valores
    print(list(dicionario.keys()))
    print(list(dicionario.values()))

# Cópias de variáveis são feitas por valor e não por referência
    copiaDicionario = dicionario["dois"]
    copiaDicionario = "quatro"
    print(dicionario["dois"] == 2)

    copiaLista = lista[0]
    copiaLista = "Otávio"
    print(lista[0])
    
#Cópias de objetos inteiros, como listas, tuplas e dicionários são feitas por referência
    lista2 = lista
    lista[0] = "Otávio"
    print("Lista 2 -> ", lista2)
    

# Oparador de membros, é possível verificar se um elemento pertence a um conjunto
    print("Existe Maria na lista? " + str("Maria" in lista))
    print("Existe Maria na tupla? " + str("Maria" in tupla))
    print("Existe 2 no dicionário? " + str(2 in dicionario))

# Para dicionários o operar in verifica chaves
    print("Existe 'dois' no dicionário? " + str("dois" in dicionario))

# O operador '==' trabalha com comparação de valores, já o operador 'is' utiliza referência de memória
    identidade1 = [10]
    identidade2 = [10]
    print(identidade1 == identidade2)
    print(identidade1 is identidade2)

# Laços de repetição
    for letter in "Python":
        print('Letter: ', letter)
    a = 0
    while a != 3:
        a = a + 1
        print('Número ' + str(a))

# É possível fazer concatenação de strings de uma forma mais simples
    print("Meu nome é %s e tenho %d anos" % ("Danilo", 28))
    
# Concatenação de listas usando operador +
    frutas = ["Pêra", "Uva", "Laranja"]
    outros = ["Arroz", "Feijão", "Carne"]
    compras = frutas + outros
    print(compras)

# Manipulação de datas
    localTime = time.localtime()
    print("%d/%d/%d" % (localTime.tm_mday, localTime.tm_mon, localTime.tm_year))
    print(time.asctime(localTime))
    
# Calendário
    print('\n' + calendar.month(2023, 1))
    
# Podemos criar funções em Python utilizando a palavra reservada def
    def primeiraFuncao(argumento1, argumento2):
        "Pode-se utilizar uma string no início da função para documentá-la"
        argumento2 = "Modificado"
        print(argumento1, argumento2)
        # A palavra return ainda que não retorne nada precisa ser usada para definir o fim da função
        return
    
# Argumentos em funções são passados por referência
    parametro = "Criado"
    
    primeiraFuncao("primeiro parâmetro", parametro)
    
# É possível alterar a ordem dos parâmetros utilizando os seus nomes para passar valores
    primeiraFuncao(argumento2="novo", argumento1="parâmetro invertido")
    
# Funções podem ser passadas para variáveis, mas apenas depois de serem definidas
    
    novaFuncao = primeiraFuncao
    
    novaFuncao("ok", "teste")
    
else:
    print("False")
