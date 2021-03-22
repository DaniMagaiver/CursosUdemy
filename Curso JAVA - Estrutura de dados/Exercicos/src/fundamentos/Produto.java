package fundamentos;

public class Produto {
    String nome;
    double preco;
    static double desconto = 25;
    
    Produto(String nome, double preco){
        this.nome = nome;
        this.preco = preco;
    }
    
    double calculaDesconto(){
        return (preco - ((preco * desconto) / 100));
    }
}