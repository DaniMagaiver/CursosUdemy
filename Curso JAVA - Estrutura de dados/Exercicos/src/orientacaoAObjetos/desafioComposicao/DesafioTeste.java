package orientacaoAObjetos.desafioComposicao;

public class DesafioTeste {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Condicionador", 4.50);
        Produto produto2 = new Produto("Shampoo", 7.50);
        Produto produto3 = new Produto("Sabonete", 0.30);
        Produto produto4 = new Produto("Perfume", 85.00);
        
        Item item1 = new Item(produto1, 1);
        Item item2 = new Item(produto2, 1);
        Item item3 = new Item(produto3, 5);
        Item item4 = new Item(produto4, 1);
        
        
        Compra compra1 = new Compra();
        compra1.adicionarItem(item1);
        compra1.adicionarItem(item2);
        compra1.adicionarItem(item3);
        System.out.println("Valor Compra 1: " + compra1.valorCompra());
        
        Compra compra2 = new Compra();
        compra2.adicionarItem(item4);
        System.out.println("Valor Compra 2: " + compra2.valorCompra());
        
        Cliente cliente1 = new Cliente("Danilo");
        cliente1.concluirCompra(compra1);
        cliente1.concluirCompra(compra2);
        System.out.println("Valor total cliente: " + cliente1.valorCompras());
    }
}
