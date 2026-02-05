
// throw , user just throw the exception to the JVM, block level, handled single exception

import java.util.Scanner;

class Test{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try{
        int age = sc.nextInt();
        if(age<1){
            throw new ArithmeticException("Age should greater than 1");
        }
        }catch(Exception e){
            System.out.println(e);
        }
        System.out.println("program ended");
      
    }

}
