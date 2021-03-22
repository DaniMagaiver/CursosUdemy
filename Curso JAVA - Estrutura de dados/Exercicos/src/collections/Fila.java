package collections;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
    public static void main(String[] args) {
        Queue<String> fila = new LinkedList<>();
        
        fila.add("Ana");
        fila.add("Carlos");
        fila.offer("Filipe");
        fila.offer("Fernando");
        fila.offer("Érica");
        
        System.out.println(fila.element());
        fila.poll();
        System.out.println(fila.peek());
        fila.remove();
        System.out.println(fila.peek());
    }
}
