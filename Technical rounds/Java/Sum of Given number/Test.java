
class Test{
    public static void main(String[] args) {
        int num = 7;
        int sum = 0;
        for(int i =0; i<=num; i++){
            sum = sum + i;
        }
        System.out.println("The sum of given number is  : "+ sum);
    }
}

// another way to solve 
// by using formula n*(n+1)/2
class Test1{
    public static void main(String[] args) {
        int number = 7;
        int sum1 = number*(number+1)/2;
        System.out.println("The sum of given number is: "+ sum1);
    }
}