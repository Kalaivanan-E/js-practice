

class Vechile{
    public void start(){
        System.out.println("Vechile started");
    }
}
class Car extends Vechile{
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.start();
    }
}
class Bike extends Car{
    public static void main(String[] args) {
        Bike b1 = new Bike();
        b1.start();
    }
}