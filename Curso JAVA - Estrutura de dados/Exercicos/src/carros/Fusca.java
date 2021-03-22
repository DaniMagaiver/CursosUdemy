package carros;

public class Fusca extends Carro{
    private final String nome;
    
   public Fusca(){
        super(12);
        this.nome = "Fusca";
    }
    
    public Fusca(int aceleracao){
        super(aceleracao);
        this.nome = "Fusca";
    }
    
    public Fusca(String nome){
        super(12);
        this.nome = nome;
    }
    
    @Override
    public String toString(){
        return this.nome;
    }
    
    //Não é necessário sobrescrever o método de aceleracao já que 
    //definimos uma velocidade padrão para o fusca;
    
}
