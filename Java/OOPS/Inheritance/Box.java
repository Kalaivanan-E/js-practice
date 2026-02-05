

class Box {
    double l;
    double h;
    double w;

    Box(){
        this.l = -1;
        this.h = -1;
        this.w = -1;
    }
    // cube
    Box(double side){
        this.l = side;
        this.h = side;
        this.w = side;
    }
    
    Box (double l, double h, double w){
        this.h = h;
        this.l = l;
        this.w = w;
    }

    Box(Box old){
        this.l = old.l;
        this.h = old.h;
        this.w = old.w;
    }

    public void information(){
        System.out.println("Running the box ......");
    }
}
class Main{
    public static void main(String[] args) {
      Box box = new Box(4);
      System.out.println(box.l + " " + box.h + " "+ box.w);  

      BoxWeight box2 = new BoxWeight();
      System.out.println(box2.h + " "  + box2.weight);

      BoxWeight box3 = new BoxWeight(1,2,4,8); 
    }
}

class BoxWeight extends Box{
    double weight;

    BoxWeight(){
        this.weight = -1;
    }
    BoxWeight (double l, double h, double w, double weight){
        super(l,h,w); // what is this? call the parent class constructor, used to initialize values present in parent class
        this.weight = weight;
    }
}