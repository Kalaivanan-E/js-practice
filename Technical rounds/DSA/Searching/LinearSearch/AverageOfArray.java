

public class AverageOfArray {

    public static void main(String[] args) {
        int arr[] = {12,12,12,12,12,12};
        int n = arr.length;
        int sum =0;
        for(int ar: arr){
            sum+=ar;
        }
        double avg = sum/n;
        System.out.println("The Average of Array is : " + avg);
    }
}