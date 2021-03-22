package lambdas; 

import java.util.Arrays;
import java.util.List;

public class Foreach {
    public static void main(String[] args) {
         List<String> aprovados = Arrays.asList("Ana", "Bia", "Lia");
         
         System.out.println("Forma tradicional....");
         for(String aprovado:aprovados){
             System.out.println(aprovado + "?");
         }
         
         System.out.println("Lambda #01");
         aprovados.forEach(nome -> System.out.println(nome + "!!!"));
         
         System.out.println("Method Reference #01");
         aprovados.forEach(System.out::println);
         
         System.out.println("Lambda #02");
         aprovados.forEach(nome -> imprimirNome(nome));
         
         System.out.println("Method Reference #02");
         aprovados.forEach(Foreach::imprimirNome);
    }
    
    private static void imprimirNome(String nome){
        System.out.println("Oi meu nome é " + nome);
    }
}
