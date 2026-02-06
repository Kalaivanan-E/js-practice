

class Vehicle{
    public void drive(){
        System.out.println("Driving vehicle");
    }
}
class Car extends Vehicle{
    public void drive(){
        System.out.println("Car Driving");
    }
    public void playmusic(){
        System.out.println("playig music in car");
    }
}
class Main{
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.drive(); // car driving
        // v.playmusic();  // here we will get compile time error playmusic is not available in vehicle class
    }
}