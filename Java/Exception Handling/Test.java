

class Test{
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        // System.out.println(a/b);  // here we get unchecked exception to avoid we use try and catch
        try{
            System.out.println(a/b);
        }catch(ArithmeticException e){
            System.out.println("Cannot divide by zero");
        }
    }
}
class TestOne{
    public static void main(String[] args) {
        int[] arr = {1,2,3};
        // System.out.println(arr[5]);// here we get indexout of bound
        try{
            System.out.println(arr[5]);
        }catch(Exception e){
            System.out.println("Index is invalid");
        }
    }
}

class TestTwo{
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int[] arr = {1,2,3};
        try{
            // int c = a/b;
            System.out.println(arr[5]);
        }catch(ArithmeticException e){
            System.out.println("Arithmetic exception");
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Array issue");
        }catch(Exception e){
            System.out.println("General Exception");
        }finally{
            System.out.println("Always executes");
        }
    }
}