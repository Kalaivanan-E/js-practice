

// arraylist 

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

class Test1{
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(101);
        arr.add(102);
        arr.add(103);
        arr.add(104);
        arr.add(104);
        arr.add(105);
        //Add and Print Elements
        for(int ar: arr){
            System.out.println(ar);
        }
        //Find Sum of Elements
        int sum = 0;
        for(int ar: arr){
            sum = sum+ ar;
        }
        System.out.println("sum of : "+ sum);
        //Find Even and Odd Numbers
        for(int ar: arr){
            if(ar%2==0){
                System.out.println("Even no :"+ ar);
            }else{
                System.out.println("Odd no :" + ar);
            }
        }
        //Find Maximum and Minimum
         int max = arr.get(0);
         int min = arr.get(0);
        for(int ar: arr){
            if(ar>max){
                max= ar;
            }
            if(ar<min){
                min =ar;
            }
        }
        System.out.println("maximum :" + max);
        System.out.println("minimum :" + min);
        //Check Element Exists
        int checkno = 105;
        boolean found = false;
        for(int ar: arr){
            if(ar == checkno){
                System.out.println("The given no is in the list");
                found = true;
                break;
            }
        }
        if(!found){
            System.out.println("the given no is not there in the list");
        }
        // Remove Duplicate Elements
        Set<Integer>set = new HashSet<>();
        for(int ar:arr){
            int num = ar;
            set.add(num);
        }
        System.out.println("With duplicates :"+ arr);
        System.out.println("without duplicates : "+set);
        //Reverse a List
        
        Collections.reverse(arr);
        System.out.println(arr);

        //reverse a list without usingn any built function

        int left =0;
        int right = arr.size()-1;
        while(left<right){
            int temp = arr.get(left);
            arr.set(left, arr.get(right));
            arr.set(right, temp);
            left++;
            right--;
        }
        System.out.println(arr);
        
    }
}