
package fundamentos;

import javax.swing.JOptionPane;

public class ConversaoStringNumeros {
    public static void main(String[] args) {
        String valor1 = JOptionPane.showInputDialog("Digite o primeiro número");
        String valor2 = JOptionPane.showInputDialog("Digite o segundo número");
        float convertido1 = Float.parseFloat(valor1.replace(',', '.'));
        float convertido2 = Float.parseFloat(valor2.replace(',', '.'));
        float resultado = convertido1 + convertido2;
        System.out.println("O resultado é " + resultado);
    }
}
