
// LinearSearch =  is algorthim where we check the each element in array untill we found the element

class LinearSearch{
    public static void main(String[] args) {
        int arr[] = {54,1,4524,0,78,16};
        int n = arr.length;
        int index =-1;
        boolean found = false;
        int target = 0;
        for(int i=0; i<n; i++){
            if(arr[i] == target){
                found = true;
                index = i;
                break;
            }
        }
        if(found){
            System.out.println("Element found in index of : " + index);
        }else{
            System.out.println("Element not found in the array");
        }
    }
}