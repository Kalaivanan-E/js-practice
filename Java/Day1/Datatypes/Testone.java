
// Data types

public class Testone{
    byte b = 10;
    int a = 100;
    float f = 12.5f;
    double d = 99.99;
    char c = 'A';
    boolean flag = false;
    long l = 999999l;
    short s = 1234;
    public static void main(String[] args) {
        Testone t1 = new Testone();
        System.out.println(t1.b);
        System.out.println(t1.a);
        System.out.println(t1.f);
        System.out.println(t1.d);
        System.out.println(t1.c);
        System.out.println(t1.flag);
        System.out.println(t1.l);
        System.out.println(t1.s);
    }
}
// Add two Numbers
class Testtwo{
    int a = 10;
    int b = 30;
    public static void main(String[] args) {
        Testtwo t2 = new Testtwo();
        int c =  t2.a + t2.b;
        System.out.println(c);
    }
}
// swap two number (using third variable)

class Testthree{
    int a = 10;
    int b = 20;
    public static void main(String[] args) {
        Testthree t3 = new Testthree();
        int temp = t3.a;
         t3.a = t3.b;
        t3.b = temp;
        System.out.println(t3.a);
        System.out.println(t3.b);
    }
}
class Testfour{
    public static void main(String[] args) {
        byte b = 127;
        b=b++;
        System.out.println(b);
        System.out.println(b);
        char c = 'A';
        c=c++;
        c++;
        System.out.println(c);

    }
}