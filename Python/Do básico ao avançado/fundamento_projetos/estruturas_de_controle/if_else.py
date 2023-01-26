#! python3

def nota_conceito(nota):
    if nota >= 9.1:
        return "A"
    elif nota >= 8.1:
        return "A-"
    elif nota >= 7.1:
        return "B"
    elif nota >= 6.1:
        return "B-"
    elif nota >= 5.1:
        return "C"
    elif nota >= 4.1:
        return "C-"
    elif nota >= 3.1:
        return "D"
    elif nota >= 2.1:
        return "D-"
    elif nota >= 1.1:
        return "E"
    else:
        return "E-"


if __name__ == '__main__':
    nota = float(input("Digite sua nota: "))
    conceito = nota_conceito(nota)
    print(conceito)
