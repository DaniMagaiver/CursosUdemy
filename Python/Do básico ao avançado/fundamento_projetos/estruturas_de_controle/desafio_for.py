#!python3
from random import randint 

def sortear_dado():
    return randint(1,6)

for numero in range(1, 7):
    if numero % 2 != 0:
        continue
    elif numero == sortear_dado():
        print('Acertou!')
        break
else:
    print('Não acertou o número!')
