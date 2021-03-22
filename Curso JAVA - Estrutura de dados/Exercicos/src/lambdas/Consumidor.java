package lambdas;

import java.util.function.Consumer;

public class Consumidor {
    public static void main(String[] args) {
        Consumer<Produtos> imprimir = (Produtos produto) -> System.out.println(produto.preco);
        Produtos produto = new Produtos(850, "TV", 0);
        
        imprimir.accept(produto);
    }
}
