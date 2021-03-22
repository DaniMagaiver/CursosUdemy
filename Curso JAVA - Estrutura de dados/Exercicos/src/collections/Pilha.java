package collections;

import java.util.ArrayDeque;
import java.util.Deque;

public class Pilha {
    public static void main(String[] args) {
        Deque<String> pilha = new ArrayDeque<>();
        pilha.add("Pequeno príncipe");
        pilha.push("Don Quixote");
        
        System.out.println(pilha);
        
        System.out.println(pilha.peek());
        System.out.println(pilha.element());
        System.out.println(pilha.pop());
        System.out.println(pilha);
        System.out.println(pilha.remove());
        System.out.println(pilha.poll());
    }
}
