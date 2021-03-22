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
public class NotacaoPonto {
    public static void main(String[] args) {
        double a = 2.3;
        String s = "Bom dia X"
                .replace("X", "Senhora")
                .toUpperCase()
                .concat("!!!");
        System.out.println(s);
    }
}
