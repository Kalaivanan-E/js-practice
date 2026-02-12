

class Vehicle{
    int maxspeed = 200;
    public static void drive(){
        System.out.println("Driving vehicle");
    }
    public void race(){
        System.out.println("driving at speed : " + maxspeed);
    }
}
class Car extends Vehicle{
    int maxspeed = 300;
    public static void drive(){
        System.out.println("Driving car");
    }
    public void race(){
        System.out.println("Driving car at speed : "+ maxspeed);
    }
    public static void main(String[] args) {
        Vehicle V = new Car();
        V.drive(); // here it will called parent class methodd because static method can't override
        V.race(); // here child class method
        System.out.println(V.maxspeed);
    }
}

class Question2{
    public static void main(String[] args) {
        // System.out.println(fun());/
    }
    // static int fun(){
        // static int x = 0;  // here we will compile time error because inside the we only use local variable
        // return ++x;
    }


class Question3{
    static int i= 10;
    public static void main(String[] args) {
        changevalue(i);
        System.out.println(i);   // 10
    }
    static void changevalue(int i){
        i=50;     // this is a local variable we can't use outside the method
    }  
}

class Question4{
    public static void main(String[] args) {
        String str1 ="hello", str2 = "java";
        int i=10, j = 20;  
        System.out.println(i+j); // 30
        System.out.println("i" + "j"); //ij
        System.out.println(str1 + i);  //hello10
        System.out.println(str1 + i + j); // hello1020
        System.out.println(i + j + str1); // 30hello
        System.out.println(str1 + i* j); // hello200
        // System.out.println(str1 + i - j); // compile time error
        System.out.println(str1 + i + j + str2);  // hello1020java
    }
}

class Question5{
    static int i;
    public static void main(String[] args) {
        int i;
        // System.out.println(i);// here it will take local variable & it must initialized
    }
}

class Question6{
    public static void main(String[] args) {
        String s1 = "Stay safe";
        String s2 = "Stay safe";
        boolean result = s1 == s2;

        switch (result) {  // switch state will not support boolean value so it will compile time error
            case true:
                System.out.println("I am safe");
                break;
            case false:
                System.out.println("I am Not safe");
            default:
                System.out.println("i am not sure");
                break;
        }
    }
}