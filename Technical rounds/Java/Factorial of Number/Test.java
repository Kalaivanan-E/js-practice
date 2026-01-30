
// factorial of number

import java.util.Scanner;

class factorial{

    static int factorial(int n){
        int res = 1;
        for(int i=1; i<=n; i++){
            res = res*i;
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter any number that you want factorial : ");
        int n = sc.nextInt();
        System.out.println(factorial(n));
    }
}