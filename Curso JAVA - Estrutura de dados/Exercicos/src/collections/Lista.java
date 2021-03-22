package collections;

import fundamentos.*;
import java.util.ArrayList;

public class Lista {

    public static void main(String[] args) {
        ArrayList<Usuario> list = new ArrayList<>();
        list.add(new Usuario("Ana", "aninha.com"));
        list.add(new Usuario("Júnior", "juninho.com"));
        list.add(new Usuario("Léo", "leozinho.com"));
        list.add(new Usuario("Maria", "mariazinha.com"));

        System.out.println(list.contains(new Usuario("Ana", "aninha.com")));
        System.out.println(list.get(0));
        System.out.println(list.remove(0));
        System.out.println(list.remove(new Usuario("Júnior", "juninho.com")));
    }
}
