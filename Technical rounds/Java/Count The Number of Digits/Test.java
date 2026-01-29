
// count the number of digits

import java.util.Scanner;

class Counter{

    static int counter(int n){
        int count = 0;
        while (n>0) {
            n=n/10;
            count++;            
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter any number : ");
        int n = sc.nextInt();
        System.out.println(counter(n));     
    }
}