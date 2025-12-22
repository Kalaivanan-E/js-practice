

class staticBlock{
    static int a = 4;
    static int b;

    // will only run once, when the first object is create i.e. when the class is loaded for the first time
    static{
        System.out.println("I am in Static Block");
        b= a*5;
    }
    public static void main(String[] args) {
        staticBlock obj1 = new staticBlock();
        System.out.println(a + " " + b); 

        staticBlock obj2 = new staticBlock();
        System.err.println(a + " " + b);
    }
}