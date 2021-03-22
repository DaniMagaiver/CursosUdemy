package lambdas;

import java.util.function.BiPredicate;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;

public class OperadorBinario {

    public static void main(String[] args) {
        BinaryOperator<Double> calculaPreco = (preco, desconto) -> preco - (desconto * 100);
        BiPredicate<Double, Double> verificaMaximo = (preco, maximo) -> preco >= maximo;
        
        Produtos tv = new Produtos("Televisao",)
        
    }
}
