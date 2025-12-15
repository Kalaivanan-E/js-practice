class A {
    static void display() { System.out.println("A"); }
}
class B extends A {
    static void display() { System.out.println("B"); }
}
public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.display();
    }
}
