

// What is exception? it's a event which occur at the time of execution which disturb the normal flow of the program
// without exception 

import java.util.Scanner;

class Test{
    public static void main(String[] args) {
        int n = 10/0;
        System.out.println("program ended");
    }
}
// exception handled by using try and catch
class Test1{
    public static void main(String[] args) {
        try{
        int n = 10/0;
        }
        catch(Exception e){
            System.out.println(e);
        }
        System.out.println("program ended");
    }
}

class Test2{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c =0;
        try{
            c = a/b;
        }catch(Exception e){
            System.out.println(e);
        }   
        System.out.println("The Result of a/b : "+c);
    }
}