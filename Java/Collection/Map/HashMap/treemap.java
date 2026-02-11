

// treemap is sorted by key, not allow null key

import java.util.*;

class treemap{
    public static void main(String[] args) {
        Map<Integer, String> map = new TreeMap<>();
        map.put(102, "DMK");
        map.put(100, "TVK");
        map.put(104, "NTK");
        map.put(101, "ADMK");
        map.put(103, "BJP");

        System.out.println(map);
    }
}