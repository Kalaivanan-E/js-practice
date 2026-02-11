

// bubble sort is a sorting algorithm that compares adjacent elements and swaps them repeatedly untill the list is sorted.

import java.util.*;
class BubbleSort{

    public static void sort(int[] arr){
        int n = arr.length;
        for(int i=0; i<n-1; i++){
            boolean swap = false;
            for(int j=0; j< n-i-1; j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swap = true;
                }
            }
            if(swap == false){
                break;
            }
        }
    }
    public static void main(String[] args) {
        int arr[] = {5,2,10,4,0};
        int brr[] = {1,2,3,4,5};
        sort(brr);  
        sort(arr);
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(brr));
    }
}
class Main
{
	public static void main(String[] args) {
	    int arr[] = {5,2,7,1,11};
	   int largest = arr[0];
	   int secondlar = arr[0];
	   
	   for(int i =0; i<arr.length; i++){
	       if(arr[i]>largest){
               secondlar = largest;
	           largest = arr[i];
	       }
	       else if(arr[i]>secondlar && arr[i]!= largest){
	           secondlar = arr[i];
	       }
	   }
	   System.out.print("Second largest number : " + secondlar);
	}
}