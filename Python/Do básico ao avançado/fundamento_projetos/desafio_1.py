#! python3
# O código abaixo permite definir o encoding do código, necessário no python 2
# -*- coding: utf-8 -*-

# import math
from _typeshed import Self
from math import pi
from sys import argv, exit
from errno import EPERM


class TerminalColor:
    ERRO = '\33[31m'
    NORMAL = '\033[0m'
    WARNING = '\33[33m'
    def printError(erro):
        print(TerminalColor.ERRO, erro, TerminalColor.NORMAL)

    def printWarning(warning):
        print(TerminalColor.WARNING, warning, TerminalColor.NORMAL)


def circulo(raio):
    return pi * (float(raio) ** 2)


def help():
    splitChar = "\\"
    TerminalColor.printWarning("É necessário informar o raio do círculo.")
    TerminalColor.printWarning(
        f'Sintaxe: { argv[0].split(splitChar)[-1] } <raio>')


if __name__ == '__main__':
    # raio = input('Informe o raio: ')
    if len(argv) < 2:
        help()
        # EPERM -> Código para operação não permitida
        exit(EPERM)
    elif not argv[1].isnumeric():
        help()
        TerminalColor.printError("O raio deve ser um valor numérico")
    else:
        raio = argv[1]
        area = circulo(raio)
        print(f'Área da circunferência: { pi } * { raio } ^ 2 = { area }')
