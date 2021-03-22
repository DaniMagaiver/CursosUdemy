package lambdas;

public class Calcular {
    public static void main(String[] args) {
        Calculo calc = (double x, double y) -> x + y;
        System.out.println(calc.executar(2, 4)); 
    }
}
