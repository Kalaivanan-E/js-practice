

class Vehicle{
    public void m1(){
        System.out.println("Vehicle class - m1 methods");
    }
}
class Car extends Vehicle{
    public void m2(){
        System.out.println("car class - m2 methods");
    }
}
class Bike extends Car{
    public void m3(){
        System.out.println("Bike class - m3 methods");
    }
}

class Test{
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();
        v1.m1();
        System.out.println("-----------------------------------------------------------");

        Car c1 = new Car();
        c1.m1();
        c1.m2();
        System.out.println("-----------------------------------------------------------");
        Bike b1 = new Bike();
        b1.m1();
        b1.m2();
        b1.m3();
         System.out.println("-----------------------------------------------------------");

    }
}