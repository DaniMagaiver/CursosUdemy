package orientacaoAObjetos.desafioComposicao;

import java.util.ArrayList;

public class Cliente {
    String nomeCliente;
    ArrayList<Compra> compras = new ArrayList<>();
    
    Cliente(String nomeCliente){
        this.nomeCliente = nomeCliente;
    }
    
    void concluirCompra(Compra compra){
        compras.add(compra);
    }
    
    double valorCompras(){
        double valorTotal = 0;
        for(Compra compra:this.compras){
            valorTotal += compra.valorCompra();
        }
        return valorTotal;
    }
}
