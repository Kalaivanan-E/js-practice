import java.util.Arrays;

public class ReverseTheArray {

    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        int n = arr.length;
        int [] arr2 = new int[n];
        int index = 0;
        for(int i=n-1; i>=0; i--){
            arr2[index] = arr[i];
            index++;
        }
        for(int ar : arr2){
            System.out.print(ar);
        }
    }
}

// reverse the array without creating new array

class ReverseArray{
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        int left = 0;
        int right = arr.length-1;
        while (left<right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        System.out.println(Arrays.toString(arr));
    }
}