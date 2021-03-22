package collections;

import java.util.HashSet;

public class ConjuntoBaguncado {
    public static void main(String[] args) {
        HashSet conjunto = new HashSet();
        conjunto.add("Teste");
        conjunto.add(2.0);
        conjunto.add(true);
        conjunto.add('x');
        System.out.println(conjunto.contains('x'));
        System.out.println(conjunto.remove(2.0));
        System.out.println(conjunto.size());
        
        HashSet conjunto2 = new HashSet();
        conjunto2.add("Teste");
        conjunto2.add('x');
        conjunto2.add("Hello");
        
        conjunto2.retainAll(conjunto);
        System.out.println(conjunto2);
        
        conjunto2.addAll(conjunto);
        System.out.println(conjunto2);
    }
    
}
