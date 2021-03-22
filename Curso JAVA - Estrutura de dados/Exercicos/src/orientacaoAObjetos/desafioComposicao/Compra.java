package orientacaoAObjetos.desafioComposicao;

import java.util.ArrayList;

public class Compra {
    
    ArrayList<Item> items = new ArrayList<>();
    
    void adicionarItem(Item item){
        this.items.add(item);
    }
    
    void removerItem(Item item){
        this.items.remove(item);
    }
    
    double valorCompra(){
        double valorTotal = 0;
        for(Item item: this.items){
            valorTotal += item.precoItem();
        }
        return valorTotal;
    }
}
