

// selection sort is simple comparsion based sorting algorthim.
//  where we repeatedly find the minimum element in unsorted part and move to the begining of the array

import java.util.Arrays;

class SelectionSort{
    public static void sort(int[] arr){
        for(int i =0; i<arr.length; i++){
            int min = arr[i];
            int index_min = i;
            for(int j = i +1; j <arr.length; j++){
                if(arr[j]<min){
                    min = arr[j];
                    index_min = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[index_min];
            arr[index_min] = temp;
        }
    }
    public static void main(String[] args) {
        int [] arr = {5,2,11,1,7};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

 class Question1{
    public static void main(String[] args) {
        int[] arr = {5,2,11,1,7};
        for(int i=0; i<arr.length; i++){
            int min = i;
            for(int j = i+1; j<arr.length; j++){
                if(arr[j]<arr[min]){
                    min = j;
                }
            }
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        for(int ar : arr){
            System.out.print(ar);
        }
    }
 }