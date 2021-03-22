package fundamentos;

import java.util.Arrays;
import java.util.Scanner;

public class Matriz {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Qual a quantidade de alunos?\n");
        int qtdAlunos = Integer.parseInt(scanner.nextLine());
        System.out.print("Qual a quantidade de notas?\n");
        int qtdNotas = Integer.parseInt(scanner.nextLine());
        
        double[][] sala = new double[qtdAlunos][qtdNotas];
        double total = 0.0;
        
        for(int a = 0; a < sala.length; a++){
            for(int b = 0; b < sala[a].length; b++){
                System.out.printf("Digite a nota do aluno %d da sala %d \n", a, b);
                sala[a][b] = Double.parseDouble(scanner.nextLine());
                total += sala[a][b];
            }
        }
        
        System.out.println("A notas da sala: \n");
        for(double[] alunos:sala){
            System.out.println(Arrays.toString(alunos));
        }
        
        double media = total / (qtdAlunos * qtdNotas);
        System.out.printf("A média da sala é %.2f \n", media);
        scanner.close();
    }
}
