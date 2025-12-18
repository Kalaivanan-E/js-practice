
class Train{
    private int trainNo;
    private int totalSeats;
    private int sleeper;
   
    
    Train(int trainNo, int totalSeats, int sleeper){
        this.trainNo = trainNo;
        this.totalSeats = totalSeats;
        this.sleeper = sleeper;
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
   
    
}