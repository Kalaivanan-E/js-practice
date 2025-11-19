class Testone{
    // write a program to check if a number is divisible by 7 or not
    public void m1(){
        int num1 = 8;
        if(num1 % 7 == 0){
            System.out.println("The given number is divisible by 7");
        }
        else{
            System.out.println("The given number is not divisible by 7");
        }
    }
    // write a program to check if a number is divisible by 3 or not
    public void m2(){
        int num2 = 4;
        if(num2 % 3 == 0){
            System.out.println("The given number is divisible by 3");
        }
        else{
            System.out.println("The given number is not divisible by 3");
        }
    }
    // write a program to check the given number is positive or negative
    public void m3(){
        int num3 = -1;
       String result =(num3 >=0)?"The given number is positive": "the given number is negative";
       System.out.println(result);
    }
    public static void main(String[] args) {
        Testone a = new Testone();
        a.m1();
        a.m2();
        a.m3();
    }

}