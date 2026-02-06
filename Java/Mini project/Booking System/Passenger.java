
public class Passenger{
    private static int idInitalizer=0;
    private int id;
    private String passengerName;
    private int age;
    private char gender;
    private char preference;
    private String ticketType;
    private int seatNumber;

    public Passenger(String passengerName, int age, char gender, char preference){
        this.id = ++idInitalizer;
        this.passengerName = passengerName;
        this.age = age;
        this.gender = gender;
        this.preference = preference;
    }
    public int getId(){
        return id;
    }
    public void setId(int id){
        Passenger.idInitalizer = id;
    }
    public String getPassengerName() {
        return passengerName;
    }
    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public char getGender() {
        return gender;
    }
    public void setGender(char gender) {
        this.gender = gender;
    }
    public char getPreference() {
        return preference;
    }
    public void setPreference(char preference) {
        this.preference = preference;
    }
    public String getTicketType() {
        return ticketType;
    }
    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }
    public int getSeatNumber() {
        return seatNumber;
    }
    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }
    @Override
    public String toString(){
        return "Passenger{" + 
                "id= " + id +
                ", passengerName= "+ passengerName + 
                ", age= " + age +
                ", gender= "+ gender +
                ", preference= "+ preference + 
                ", ticketType= "+ ticketType +
                ", seatNumber= "+ seatNumber +
                "}";
    }
    
}