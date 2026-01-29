

// Find the Largest of three Numbers

import java.util.ArrayList;
import java.util.Collections;

class largestNumber{
    public static void main(String[] args) {
        int a = 10,b = 201, c = 56;

        if(a>b && a>c){
            System.out.println("The largest of three number is : "+ a);
        } else if (b>a && b>c) {
            System.out.println("The largest of three number is : "+ b);            
        }else{
            System.out.println("The largest of three number is : "+ c);
        }
    }
}

// Approach 2 using collections

class largestNumber2{
    public static void main(String[] args) {
        ArrayList <Integer> arr = new ArrayList<>();
        arr.add(101);
        arr.add(120);
        arr.add(150);

        // printing the largest number
        System.out.println(Collections.max(arr) + " is the largest number");
    }
}