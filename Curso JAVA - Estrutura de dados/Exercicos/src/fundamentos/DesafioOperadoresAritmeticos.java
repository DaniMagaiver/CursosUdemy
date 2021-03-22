package fundamentos;

public class DesafioOperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 6;
        int b = 3;
        int c = 2;
        int d = 3;
        int e = 2;
        int f = 1;
        int g = 5;
        int h = 2;
        int i = 7;
        int j = 2;
        int k = 10;
        
        int op1 = (int) Math.pow(a * (b + c), 2);
        int op2 = d * e;
        float res1 = op1 / (float) op2;
        int op3 = (f - g) * (h - i);
        float res2 = (float) Math.pow(op3 / (float) j, 2);
        float res3 = (float) Math.pow(res1 - res2, 3);
        float res4 = res3 / (float) Math.pow(k, 3);
        System.out.println("O resultado é " + res4);
    }
 
}
