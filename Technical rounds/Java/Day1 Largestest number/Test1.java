

class largestNumber{
    public static void main(String[] args) {
        int arr[] ={31,4,12,3,49};
        int max= arr[0];
        for(int i=0; i<=arr.length-1;i++){
            if(arr[i]>max){
                max= arr[i];
            }
        } 
        System.out.println("The largest number is :" + max); 
    }
}