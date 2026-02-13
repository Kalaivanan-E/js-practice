


public class CheckSorted {

    public static void main(String[] args) {
        int [] arr = {1,2,0,3,4,5};
        boolean sorted = true;
        for(int i =0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                sorted = false;
                break;
            }
        }
        if(sorted){
            System.out.println("It's already sorted ...............");
        }else{
            System.out.println("Not sorted .....");
        }
    }
}