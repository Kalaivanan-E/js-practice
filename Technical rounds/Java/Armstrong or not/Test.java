
// write a program to find the given number is armstrong or not
// Armstrong =  the number that is equal to the sum of cubes of its digits
// input = 153, 1^3 + 5^3 + 3^3 = 153  

class Armstrong{
    public static void main(String[] args) {
        int num = 153;
        int sum = 0;
        int temp = num;

        while (num>0) {
            sum = sum + (num%10)*(num%10)*(num%10);
            num = num/10;            
        }
        if(sum == temp){
            System.out.println("The given number is Armstrong number");
        }else{
            System.out.println("The given number is not Armstrong number");
        }
    }
}