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
public class Temperatura {
    public static void main(String[] args) {
        //(F - 32) * 4/9 = C
        final double fator = 5.0/9.0;
        final double ajuste = 32.0;
        double temp1 = 0;
        double temp2;
        double result = (temp1 - ajuste) * fator;
        System.out.println("Resultado: " + result);
    }
}
