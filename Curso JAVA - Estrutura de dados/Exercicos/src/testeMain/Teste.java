package testeMain;

import carros.Carro;
import carros.Ferrari;
import carros.Fusca;


public class Teste {
    public static void main(String[] args) {
        Carro corrida = new Carro();
        Carro carro1 = new Ferrari("Relampago Marquinhos");
        Carro carro2 = new Fusca("Herbie");
        
        corrida.comecarCorrida(carro1);
        corrida.comecarCorrida(carro2);
        
        carro2.acelerar();
        carro1.acelerar();
        carro2.acelerar();
        System.out.println("O vencedor é " + corrida.finalizarCorrida());
    }
  
}
