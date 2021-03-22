
package fundamentos;

public class Data {
    int dia;
    int mes;
    int ano;
    
    Data(int dia, int mes, int ano){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    
    Data(){
        this.dia = 01;
        this.mes = 01;
        this.ano = 2001;
    }
    
    String retornaData(){
        return this.dia + "/" + this.mes + "/" + this.ano;
    }
    
    String retornaData(String dia, String mes, String ano){
        return dia + "/" + mes + "/" + ano;
    }
}
