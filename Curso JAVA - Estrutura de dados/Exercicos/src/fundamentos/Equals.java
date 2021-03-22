package fundamentos;

public class Equals {
    public static void main(String[] args) {
        Usuario user1 = new Usuario("Danilo", "danilo.silfer@gmail.com");
        Usuario user2 = new Usuario("Danilo", "danilo.silfer@gmail.com");
        
        System.out.println(user1.equals(user2));
    }
}
