package polimorfismo;

public class Jantar {
    public static void main(String[] args) {
        Pessoa convidado = new Pessoa(99.65);
        Comida ingrediente1 = new Arroz(0.2);
        Comida ingrediente2 = new Feijao(0.1);
        Comida ingrediente3 = new Arroz(0.2);
        
        System.out.println(convidado.getPeso());
        
        convidado.comer(ingrediente1);
        convidado.comer(ingrediente2);
        
        System.out.println(convidado.getPeso());
        
        convidado.comer(ingrediente3);
        System.out.println(convidado.getPeso());
    }
}
