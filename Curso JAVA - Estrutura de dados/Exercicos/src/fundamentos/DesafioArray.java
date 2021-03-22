package fundamentos;

import java.util.Arrays;
import java.util.Scanner;

public class DesafioArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Quantas notas gostaria de calcular? ");
        final int quantidade = Integer.parseInt(scanner.nextLine());
        double[] notas = new double[quantidade];
        double media = 0;
        for(int i = 0; i < quantidade; i++){
            System.out.println("Nota " + (i + 1) + " ");
            notas[i] = Double.parseDouble(scanner.nextLine());
        }
        System.out.println("Notas " + Arrays.toString(notas));
        for(double nota:notas){
            media += nota;
        }
        System.out.printf("A média é %.2f\n", (media / quantidade));
    }
}
