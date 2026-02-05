
// Number based programs

// 1) check the number is prime or not
class primeornot{
    public static void main(String[] args) {
        int n = 8;
        boolean isprime = true;
        for(int i=2; i<=n/2; i++){
            if(n%i == 0){
                isprime = false;
                break;
            }
        }
        if(isprime){
            System.out.println("prime number");
        }else{
            System.out.println("Not a prime number");
        }
    }
}
// print prime number between 1 to n

class prime{
    public static void main(String[] args) {
        int n = 7;
        for(int num = 2; num <=n; num++){
        boolean isprime = true;
            for(int i=2; i<=Math.sqrt(num); i++){
                if(num%i==0){
                    isprime = false;
                    break;
                }
            }
            if(isprime){
                System.out.println(num);
            }
        }
       
    }
}
//Check Palindrome Number
class palindrome{
    public static void main(String[] args) {
        int num = 121;
        int original = num;
        int reverse = 0;
        while(num>0){
            int digit = num%10;  // to get last digit
            reverse = reverse*10+digit;
            num = num/10;  // to remove last digit
        }
        if(original == reverse){
            System.out.println("Palindrome");
        }else{
            System.out.println("Not Palindrome");
        }
        
    }
}
// reverse a number

class reverse{
    public static void main(String[] args) {
        int num = 123;
        int reverse =0;
        while(num>0){
            int digit = num%10;
            reverse = reverse*10 + digit;
            num = num/10;
        }
        System.out.println("Reversed digit : " + reverse);
    }
}

// Find Factorial (iterative & recursive)

class factorial{
    public static void main(String[] args) {
        int num = 4;
        int fact = 1;
        for(int i=1; i<=num; i++){
            fact = fact*i;
        }
        System.out.println("Factorial of 4:" + fact);
    }

}

//Armstrong Number

class armstrong{
    public static void main(String[] args) {
        int num = 154;
        int original = num;
        int digits = 0;
        int sum = 0;

        // count digits;
        int temp = num;
        while (temp>0) {
            digits++;
            temp = temp/10;            
        }

        //calculate sum of power of digits

        temp = num;
        while(temp>0){
            int digit = temp%10;
            sum += Math.pow(digit, digits);
            temp = temp/10;
        }
        // compare
        if (original == sum) {
            System.out.println("Armstrong number");
        }else{
            System.out.println("Not Armstrong number");
        }
    }
}


//Sum of Digits of a Number

class sumofdigits{
    public static void main(String[] args) {
        int num = 123;
        int sum =0;

        while(num>0){
            int digits = num%10;
            sum = sum+digits;
            num = num/10;
        }
        System.out.println("sum of digits of a number is : " + sum);
    }
}

//Swap Two Numbers

class swaptwono{
    public static void main(String[] args) {
        int a = 10, b = 20;
         System.out.println("before swapping a :" + a +" b :"+ b);    
        a = a +b;
        b = a-b;
        a = a-b;
        System.out.println("After swapping a :" + a +" b :"+ b);
    }
}