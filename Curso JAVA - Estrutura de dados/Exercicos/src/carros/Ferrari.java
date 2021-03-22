
package carros;

public class Ferrari extends Carro{
    private final String nome;
    
    public Ferrari(){
        super(15);
        this.nome = "Ferrari";
    }
    
    public Ferrari(String nome){
        super(15);
        this.nome = nome;
    }
    
    @Override
    public int acelerar(){
        return this.velocidadeAtual += this.aceleracao;
    }
    
    @Override
    public String toString(){
        return this.nome;
    }
    
    
}
