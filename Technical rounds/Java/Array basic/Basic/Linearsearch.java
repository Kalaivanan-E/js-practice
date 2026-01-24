

class Test1{
    public static void main(String[] args) {
         int arrays[] = {10,25,30,40,50,61};
         int key = 61;
         boolean found =false;

         for(int i = 0; i< arrays.length; i++){
            if(arrays[i]== key){
                found = true;
                System.out.println("Element found at the index : "+ i);
                break;
            }
         }
         if(!found)System.out.println("Element not found");


    }
}