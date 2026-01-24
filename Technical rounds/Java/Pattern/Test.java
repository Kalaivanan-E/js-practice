/* 
***
***
***
 */

import java.util.Scanner;

class Test1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number:");
        int num = sc.nextInt();
        for(int i=1; i<=num; i++){
            for(int j=1; j<=num; j++){
                System.out.print(" * ");
            }
            System.out.println();
        }
    }
}

// using only one loop 
// Prints num × num stars
// New line after every num stars

class Test2{
    public static void main(String[] args) {
        Scanner sc1 = new Scanner(System.in);
        System.out.println("Enter any number: ");
        int number = sc1.nextInt();

        for(int i=1; i<=number*number; i++){
            System.out.print(" * ");
            if(i%number==0) System.out.println();
        }
    }
}