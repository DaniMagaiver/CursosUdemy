package fundamentos;

public class DesafioLogico {

    public static void main(String[] args) {
        boolean trabalho1 = false;
        boolean trabalho2 = false;
        System.out.println("FxF || ->" + Boolean.toString(trabalho1 || trabalho2));
        System.out.println("FxF & ->" + Boolean.toString(trabalho1 & trabalho2));
        System.out.println("FxF ^ ->" + Boolean.toString(trabalho1 ^ trabalho2));
        trabalho1 = true;
        trabalho2 = false;
        System.out.println("TxF || ->" + Boolean.toString(trabalho1 || trabalho2));
        System.out.println("TxF & ->" + Boolean.toString(trabalho1 & trabalho2));
        System.out.println("TxF ^ ->" + Boolean.toString(trabalho1 ^ trabalho2));
        trabalho1 = true;
        trabalho2 = true;
        System.out.println("TxT || ->" + Boolean.toString(trabalho1 || trabalho2));
        System.out.println("TxT & ->" + Boolean.toString(trabalho1 & trabalho2));
        System.out.println("TxT ^ ->" + Boolean.toString(trabalho1 ^ trabalho2));
        trabalho1 = true;
        trabalho2 = false;
        System.out.println("!T -> " + Boolean.toString(!trabalho1));
        System.out.println("!F -> " + Boolean.toString(!trabalho2));
    }
}
