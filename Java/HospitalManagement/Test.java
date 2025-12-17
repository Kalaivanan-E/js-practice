// map is key value pair, key must be unique

import java.util.*;

public class Test {
    public static void main(String[] args) {
        Map<String, Integer> quantity = new HashMap<>();
        quantity.put("Apple", 10); // add
        quantity.put("orange", 20);
        quantity.put("papaya", 30);
        quantity.remove("orange");  // remove
        quantity.put("Apple",quantity.get("Apple")+10); // modify


        for(String key:quantity.keySet()){
            System.out.println(key);
            System.out.println(quantity.get(key));
            
        }
        System.out.println(quantity.containsKey("dragonfruits")); /// to check whether the given key is there or not
    }
}
