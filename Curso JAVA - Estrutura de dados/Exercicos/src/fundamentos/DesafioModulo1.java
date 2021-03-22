package fundamentos;

import java.util.Scanner;

public class DesafioModulo1 {
    
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o primeiro valor:");
        int valor1 = input.nextInt();
        System.out.println("Digite o segundo valor:");
        int valor2 = input.nextInt();
        System.out.println("Digite a operação: " + "\n" + "+, -, /, *, %");
        String operacao = input.next();
        int resultado = operacao.equals("+") ? valor1 + valor2 
                : operacao.equals("-") ? valor1 - valor2 
                : operacao.equals("*") ? valor1 * valor2
                : operacao.equals("/") ? valor1 / valor2
                : valor1 % valor2;
        
        System.out.println("O resultado é " + resultado);
    }
}
