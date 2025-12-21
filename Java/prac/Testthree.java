

class A{
    static void show(){
        System.out.println("A");
    }
}
class B extends A{
    static void show(){
        System.out.println("B");
    }
    public static void main(String[] args) {
        A obj1 = new A();
        obj1.show(); // A
        B obj2 = new B();
        obj2.show(); // B
        A obj3 = new B();
        obj3.show();  // A
        System.out.println(null + "Java");
    }
}
class Test{
    public static void main(String[] args) {
        try{
            int a = 10/0;
        } catch(ArithmeticException e){
            System.out.println("Arithmetic");
        }catch(Exception e){
            System.out.println("Exception");
        }
    }
}