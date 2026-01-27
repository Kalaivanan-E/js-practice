import java.util.*;

public class Test2 {

    public static void main(String[] args) {
        
        ArrayList<Integer> arr = new ArrayList<>();
        
        arr.add(101);
        arr.add(102);
        arr.add(103);
        arr.add(104);
        arr.add(105);
        // print arraylist
        for(int ar: arr){
            System.out.println(ar);
        }

        arr.add(102);
        arr.add(103);

        //after adding duplicates values
        System.out.println(arr);
        // Store duplicate values in a Set and print them.
        Set<Integer> set = new HashSet<>();
        for(int a: arr){
            
            set.add(a);
        }
        System.out.println("After removing duplicates :" + set);
        // Store roll number and name using Map and print them.
        Map<Integer,String> studentDetails = new HashMap<>();
        studentDetails.put(101, "Kalaivanan");
        studentDetails.put(102, "Rahul");

        System.out.println(studentDetails);
        // get only key

        for(Integer key:studentDetails.keySet()){
            System.out.println(key);
        }

        // get only value

        for(String value: studentDetails.values()){
            System.out.println(value);
        }
    }
    
}
