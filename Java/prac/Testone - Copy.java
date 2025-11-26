import java.util.Scanner;
public class Testone {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter any number");
        int num = in.nextInt();
        if(num % 7 == 0){
            System.out.println("The given number is divisible by 7");
        }
        else{
            System.out.println("The given no is not divisible by 7");
        }
    }
}

