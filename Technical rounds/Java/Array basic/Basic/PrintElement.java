
// print all elements in the array

class Test1{
    public static void main(String[] args) {
        int arrays[] = {10,20,30,40,50,61};
        for(int i=0; i<arrays.length; i++){
            System.out.print(arrays[i] + " ");
        }
        System.out.println();

        // sum of array

        int sum = 0;
        for(int i=0; i<arrays.length; i++){
            sum = sum + arrays[i];
        }
        System.out.println("The sum of array is :" + sum);

        // find maximum number

        int largest = arrays[0];
        for(int i =1; i<arrays.length; i++){
            if(arrays[i]>largest){
                largest = arrays[i];
            }
        }
        System.out.println("the largest number in the array is : "+ largest);

        //count even&odd
        int even =0;
        int odd = 0;
        for(int i=0; i<arrays.length; i++){
            if(arrays[i]%2==0) {
                even++;
            }else{
                odd++;
            }
            
        }
        System.out.println("the number of even number in the array :"+ even);
        System.out.println("the number of odd number in the array :"+ odd);

    }
}
