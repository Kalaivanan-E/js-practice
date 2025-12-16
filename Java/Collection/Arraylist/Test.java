import java.util.ArrayList;

class Test{
    public static void main(String[] args) {
        int a[] = new int[5];  //  fixed size

        ArrayList <Integer> arr = new ArrayList<Integer>(); // flexible 

        for(int i=1; i<10; i++){
            arr.add(i);
        }
        // modify the existing value
        arr.set(0, 100); // update

        arr.remove(8); // remove 

        arr.contains(100);
        System.out.println( arr);
        System.out.println(arr.get(4));
    }
}