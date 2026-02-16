

// binary searching is a searching algorthim used only if the array is sorted.
// it works by dividing the search space into two half and comparing the middle element with the 
//   target.

public class BinarySearch {

    public static int binarysearch(int[] a, int key){
         int low = 0, high = a.length-1, mid =0;
        while (low<=high) {
            mid = (low + high)/2;
            if(key == a[mid]){
                return mid;
            }else if (key < a[mid]) {
                high = mid -1;
            }else{
                low = mid +1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int [] a = {2,3,4,5,6,7,8,9,10,41};
        int key = 50;
        System.out.println(binarysearch(a, key));

    }
}