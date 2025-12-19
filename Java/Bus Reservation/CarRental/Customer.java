

class Customer{

    private String name;
    private int customerId;

    Customer(String name, int customerId){
        this.customerId = customerId;
        this.name = name;
    }

    public int getCustomerId(){
        return customerId;
    }

    public String getName(){
        return name;
    }
}