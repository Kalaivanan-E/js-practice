
// BubbleSort => we repeately swap the adjacent element is the it is wrong order

import java.util.Arrays;
// Sort the array in ascending order
class BubbleSort{
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        int n = arr.length;
        for(int i=0; i<n-1; i++){
            for(int j=0; j<n-i-1; j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
// sort the array in descending array
// Count Number of Swaps
class BubbleSort1{
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        int n = arr.length;
        int swap =0;
        for(int i=0; i<n-1; i++){
            for(int j=0; j<n-i-1; j++){
                if(arr[j]<arr[j+1]){
                    swap++;
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr) + "  total swaps :  " + swap);
    }
}

//Q5. Find Largest Element Using One Bubble Pass
class BubbleSort2{
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        for(int i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        System.out.println("Largest : " + arr[arr.length-1]);
    }
}

// Q7. Sort Only Even Numbers

class BubbleSort3{
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        int n = arr.length;
        for(int i=0; i<n-1; i++){
            for(int j=0; j<n-i-1; j++){
                if(arr[j]%2==0 && arr[j+1]%2==0 && arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}

// Q8. Find Second Largest After Sorting

class BubbleSort4{
    public static void main(String[] args) {
        int arr[] = {5,1,3,4,8,0};
        int n= arr.length;
        for(int i=0; i<n-1;i++){
            for(int j=0; j<n-i-1; j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        } 
        System.out.println("Second Largest : " + arr[arr.length-2]);
    }
}