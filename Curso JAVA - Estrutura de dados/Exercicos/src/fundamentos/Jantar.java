package fundamentos;

public class Jantar {

    public static void main(String[] args) {
        var pessoa = new Pessoa("Danilo", 68);
        var comida = new Comida("Feijoada", 0.500);

        pessoa.Comer(comida);
        System.out.printf("%s comeu %s e engordou %.2f, seu peso agora é %.2f \n", pessoa.nome, comida.nome, comida.peso, pessoa.peso);
    }
}
