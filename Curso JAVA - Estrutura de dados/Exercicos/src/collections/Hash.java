package collections;

import fundamentos.Usuario;
import java.util.HashSet;

public class Hash {
    public static void main(String[] args) {
        HashSet<Usuario> usuarios = new HashSet<>();
        usuarios.add(new Usuario("Pedro", "pedro.com"));
        usuarios.add(new Usuario("Sandra", "sandra.com"));
        usuarios.add(new Usuario("Gustavo", "gustavo.com"));
        
        boolean resultado = usuarios.contains(new Usuario("Pedro", "pedro.com"));
        System.out.println(resultado);
    }
}
