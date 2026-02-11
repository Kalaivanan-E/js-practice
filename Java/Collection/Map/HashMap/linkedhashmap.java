

// linkedhashmap it maintains insertion order and allow null key and null values not synchronized not thread safe

import java.util.*;

class linkedhashmap{
    public static void main(String[] args) {
        Map<Integer, String> map = new LinkedHashMap<>();
        map.put(101, "TVK");
        map.put(104, "DMK");
        map.put(103, "ADMK");
        map.put(106, "BJP");
        System.out.println(map);
    }
}