

// find the second largest element in the array


class SecondLargestElement{
    public static void main(String[] args) {
        int arr[] = {5,8,9,5,3};
        int largest = arr[0];
        for(int i=0; i<arr.length; i++){
            if(arr[i]>largest){
                largest = arr[i];
            }
        }
        int secondlargest = arr[0];
        for(int i=0; i<arr.length; i++){
            if(arr[i]>secondlargest && arr[i]<largest){
                secondlargest = arr[i];
            }
        }
        System.out.println("Largest number in the array :  " + largest);
        System.out.println("Second Largest Number : " + secondlargest);
    }
}