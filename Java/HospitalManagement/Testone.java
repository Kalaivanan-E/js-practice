// Count frequency of characters in a String
// Input: "programming"
// Output: {p=1, r=2, o=1, g=2, a=1, m=2, i=1, n=1}

import java.util.*;
class Test{
    public static void main(String[] args) {
        String str = "Programming";
        Map<Character, Integer> map = new HashMap<>();

        for(char ch: str.toCharArray()){
            map.put(ch, map.getOrDefault(ch, 0) +1);
        }
        System.out.println(map);
    }
}

// find the duplicate elements in an array

class Testone{
    public static void main(String[] args) {
        int [] arr = {1,2,3,2,4,1};
        Map <Integer, Integer> map = new HashMap<>();

        for(int num : arr){
            map.put(num, map.getOrDefault(num, 0)+1);
        }
        System.out.println(map);
    }
}