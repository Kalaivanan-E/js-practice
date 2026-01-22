import java.util.HashSet;
import java.util.Set;

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