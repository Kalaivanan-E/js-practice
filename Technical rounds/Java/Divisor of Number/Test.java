

// write a program to find divisor or factor of given number
// example input =6, output = 1,2,3,6

class Test{
    public static void main(String[] args) {
        int num = 6;

        for(int i=1; i<=num; i++){
            if(num%i ==0){
                System.out.print(i);
            }
        }
    }
}