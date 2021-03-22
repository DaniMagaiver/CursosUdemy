/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fundamentos;

/**
 *
 * @author DaniloSilvaFernandes
 */
public class TiposPrimitivos {
    public static void main(String[] args) {
        // Informações do funcionário
        // Tipos numéricos inteiros
        byte anosDeEmpresa = 23;
        short numeroDeVoos = 542;
        int id = 56789;
        long pontosAcumulados = 3_234_845_223L;
        
        //Tipos numéricos reais
        float salario = 11_445.44F;
        double vendasAcumuladas = 2_991_797_103.01;
        
        //Tipo booleano
        boolean estaDeFerias = false; //true
        
        //Tipo caracteres
        char status = 'A'; //ativo
        
        //Dias de empresa
        System.out.println(anosDeEmpresa * 365);
        
        //Número de viagens
        System.out.println(numeroDeVoos / 2);
        
        //Pontos por real
        System.out.println(pontosAcumulados / vendasAcumuladas);
    
        //Férias?
        System.out.println(id + ": ganha -> " + salario);
        System.out.println("Férias? " + estaDeFerias);
        System.out.println("Status: " + status);
    }
}
