import java.util.HashSet;
import java.util.Set;


// approach 1
class removeDuplicates{
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,1,2,5,2,1};
        Set<Integer> set = new HashSet<>();
        for(int i=0; i<=arr.length-1; i++){
            int num = arr[i];
            set.add(num);
        }
        System.out.println("After removing duplicates:"+set);
        System.out.println(set.size());
    }
}
//approach 2

class removeDuplicates1{
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,1,2,5,2,1};
        for(int i =0; i<arr.length; i++){
            boolean isDuplicates = false;
            for(int j=0; j<i; j++){
                if(arr[i] == arr[j]){
                    isDuplicates = true;
                    break;
                }
            }
            if(!isDuplicates){
                System.err.print(arr[i] + " ");
            }
        }
    }
}