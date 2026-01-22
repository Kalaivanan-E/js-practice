public class Secondlargest {

    public static void main(String[] args) {
       int arr[] ={31,41,12,3,49};
       int largest = arr[0];
       int Secondlargest = arr[0];

       //find the largest number
       for(int i=0; i<=arr.length-1; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
       }
       //next find the second largest number
       for(int i=0; i<=arr.length-1; i++){
        if(arr[i]>Secondlargest && largest!=arr[i]){
            Secondlargest = arr[i];
        }
       }
       System.out.println("Second Largest Number: "+ Secondlargest);
    }
    
}
