package fundamentos;

public class TestaProduto {

    public static void main(String[] args) {
        var produto = new Produto("Desodorante", 7.50);
        var produto2 = new Produto("Miojo", 3.00);
        
        System.out.printf("%s : %.2f \n",produto.nome,produto.calculaDesconto());
        System.out.printf("%s : %.2f \n",produto2.nome,produto2.calculaDesconto());

        Produto.desconto = 30;

        System.out.printf("%s : %.2f \n",produto.nome,produto.calculaDesconto());
        System.out.printf("%s : %.2f \n",produto2.nome,produto2.calculaDesconto());
    }
}
