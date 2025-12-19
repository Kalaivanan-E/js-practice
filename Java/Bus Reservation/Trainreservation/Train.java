
class Train{
    private int trainNo;
    private int totalSeats;
    private int sleeper;
    private int normalSeats;
   
    
    Train(int trainNo, int totalSeats, int sleeper, int normalSeats){
        this.trainNo = trainNo;
        this.totalSeats = totalSeats;
        this.sleeper = sleeper;
        this.normalSeats = normalSeats;
    }
    public int getTrainNo() {
        return trainNo;
    }
    public void setTrainNo(int trainNo) {
        this.trainNo = trainNo;
    }
    public int getTotalSeats() {
        return totalSeats;
    }
    public void setTotalSeats(int totalSeats) {
        this.totalSeats = totalSeats;
    }
    public int getSleeper() {
        return sleeper;
    }
    public void setSleeper(int availableSeats) {
        this.sleeper = sleeper;
    }
    public void setnormalSeats(int normalSeats){
        this.normalSeats = normalSeats;
    }
    public int getnormalSeats(){
        return normalSeats;
    }
   
    
}