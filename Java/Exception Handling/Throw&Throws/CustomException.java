import java.util.Scanner;
class NotValidException extends Exception{
    public NotValidException(String s){
        super(s);
    }
}
class custom{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try{
            int age = sc.nextInt();
            if(age<18){
                throw new NotValidException("Your age should be 18");
            }
        }catch(NotValidException e){
            System.out.println(e);
        }
        catch(Exception e){
            System.out.println(e);
        }
        System.out.println("Program ended");
        

    }
}