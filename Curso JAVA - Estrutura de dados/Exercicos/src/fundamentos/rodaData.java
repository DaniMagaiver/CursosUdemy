
package fundamentos;

public class rodaData {
    public static void main(String[] args) {
        var data = new Data(5, 12, 2020);
        var data2 = new Data();
        
        System.out.println(data.retornaData());
        System.out.println(data2.retornaData());
    }
}
