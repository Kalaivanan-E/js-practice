
// HashMap it store key value pair, does't not allow duplicates key, it allow one null key and many null values
//   not synchronized and not thread safe

import java.util.*;

class hashmap{
    public static void main(String[] args) {
        Map<Integer,String> map = new HashMap<>();  
        map.put(101, "TVK");
        map.put(102, "DMK");
        map.put(103, "ADMK");
        map.put(104, "BJP");

        System.out.println(map.get(101));

        for(Map.Entry<Integer, String> entry : map.entrySet()){
            System.out.println(entry.getKey() + "->" + entry.getValue());
        }
    }
}