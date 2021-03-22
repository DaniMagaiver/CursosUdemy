package lambdas;

import java.util.function.Predicate;

public class Predicado {
    public static void main(String[] args) {
        Predicate<Produtos> isCaro = produto -> produto.preco > 750;
        
        Produtos produto = new Produtos(850, "TV", 0);
        System.out.println(isCaro.test(produto));
    }
}
