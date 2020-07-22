function exec(func,numeroA, numeroB){
    func(numeroA, numeroB)
}

const somarNoTerminal = (a, b) => console.log(a + b)
const subtrairNoTerminal = (a, b) => console.log(a - b)

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);