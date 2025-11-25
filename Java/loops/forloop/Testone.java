
// Print number from 1 to 100 using a loop

import java.util.*;
class Test{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scan.nextInt();
        for (int i =1; i<=num ; i++){
            System.out.println(i);
        }
    }
}
// Print all even numbers between 1 and 50.
class Testtwo{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nums = in.nextInt();
        for (int i =1; i<=nums; i++){
            if(i %2 == 0){
                System.out.println(i);
            }
        }
    }
}
// Print the multiplication table of any number (like 5).

class Testthree{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nums = in.nextInt();
        for (int i=1; i<=nums; i++){
            System.out.println("2 x" + i + "=" + 2 *i);
        }
    }
}
// Print the sum of first 10 natural numbers.

class Testfour{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nums = in.nextInt();
         int count =0;
        for (int i=1; i<=nums; i++){
           
            count = count + i;
        }
        System.out.print(count);
    }
}

//Print the numbers from 10 to 1 (reverse loop).

class Testfive{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scan.nextInt();
        for (int i =num; i>=1 ; i--){
            System.out.println(i);
        }
    }
}

// Print the factorial of a number (e.g., 5 → 120).

class Testsix{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nums = in.nextInt();
         int count =1;
        for (int i=1; i<=nums; i++){
           
            count = count * i;
        }
        System.out.print(count);
    }
}

//Count how many digits are in a number (e.g., 1234 → 4 digits).


class Testseven{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int nums = in.nextInt();
         int count =0;
        while (nums >0){
           nums = nums /10;
            count ++;
        }
        System.out.print(count);
    }
}

// print each character of a string using a loop

class Testeight{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter your name:");
        String name = in.nextLine();
        
        for (int i =0; i<name.length(); i++){
            System.out.println(name.charAt(i));
        }
    }
}

//Calculate the sum of digits of a number (e.g., 123 → 1+2+3 = 6).