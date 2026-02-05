
// question 1

class Question1{
    public void sum(int a, int b){
        System.out.println(a +b);
    }
    public int sum(int a, int b){
        return a +  b;
    }
    public static void main(String[] args) {
        Question1 q1 = Question1();  // here we will get compile time, unable to find Question1 method
        q1.sum(10, 20); // ambiguity, java will get confuse that which method to call, changing the data type won't work
        System.out.println(q1.sum(10, 20));
    }
}