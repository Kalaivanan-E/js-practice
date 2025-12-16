
//Write a program to check whether a given year is a leap year.
class Test{
    public static void main(String[] args) {
        int year = 1900;
        if((year%4 == 0 && year%100 !=0)|| (year%400 == 0) ){
            System.out.println("The given year is leap year");
        }else{
            System.out.println("The given year is not a leap year");
        }
    }
}

class Testtwo{
    public static void main(String[] args) {
        int i = 0;
        while (i++ < 5) {
            System.out.print( i + " "); // 1 2 3 4 5  
        }
        for(int j = 1; j<5; j++){
            if(j == 3){
                continue;
            }
            System.out.println(j + "  ");
        }
    }
}

//Write a program using if–else to find the largest of three numbers.

class Testthree{
    public static void main(String[] args) {
        int num1 = 100;
        int num2 = 2000;
        int num3 = 300;
        if(num1 > num2 && num1> num3){
            System.out.println("The largest number is :"+ num1);
        }else if (num2 > num1 && num2 > num3) {
            System.out.println("The largest number is :"+ num2);          
        }else{
            System.out.println("The largest number is : " + num3);
        }
    }
}
// Check whether a number is even or odd without using % operator.

class Testfour{
    public static void main(String[] args) {
        int num = 21;
        if((num /2)*2 == num){
            System.out.println("The given number is Even");
        }else{
            System.out.println("The given number is odd");
        }


        
        int x = 5;
        if(x++ > 5)
            System.out.println("True");
        else
            System.out.println("False");
        System.out.println(x);

    }
}