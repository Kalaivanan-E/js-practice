

class Book{
    String title;
    String author;
    double price;

    Book(String title, String author, double price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
public double discount() {
    double discountAmount = price * 10 / 100;
    return price - discountAmount;
}
    public static void main(String[] args) {
        Book book1 = new Book("java", "James gosling", 600);
        System.out.println("The final price of java book :" + book1.discount());
    }
}