package carros;

import java.util.ArrayList;

public class Carro {
   final int aceleracao;
   int velocidadeAtual = 0;
   private ArrayList<Carro> carros = new ArrayList<>();
   
   public Carro(){
       this.aceleracao = 0;
   }
   
   protected Carro(int aceleracao){
       this.aceleracao = aceleracao;
   }
   
   public int acelerar(){
       return this.velocidadeAtual += this.aceleracao;
   }
   
   public int freiar(){
       return this.velocidadeAtual -= 10;
   }
   
   public void comecarCorrida(Carro carro){
       this.carros.add(carro);
   }
   
   public Carro finalizarCorrida(){
       Carro carroVencedor = new Carro(0);
       for(int i = 0; i < this.carros.size() - 1; i++){
           Carro carroAtual = this.carros.get(i);
           Carro proximoCarro = this.carros.get(i + 1);
           carroVencedor = carroAtual.velocidadeAtual > proximoCarro.velocidadeAtual ? carroAtual : proximoCarro;
       }
       
       return carroVencedor;
   }

    @Override
    public String toString() {
        return "A velocidade atual é " + this.velocidadeAtual; //To change body of generated methods, choose Tools | Templates.
    }
   
   
}
