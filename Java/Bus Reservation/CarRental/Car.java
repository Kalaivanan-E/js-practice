

class Car{
    private int carId;
    private String carModel;
    private String carBrand;
    private double basePricePerDay;
    private boolean isAvailable;

    Car(int carId, String carModel, String carBrand, double basePricePerDay){
        this.carId = carId;
        this.carModel = carModel;
        this.carBrand = carBrand;
        this.isAvailable = true;
    }

    public int getCarId(){
        return carId;
    }

    public String getCarModel(){
        return carModel;
    }

    public String getCarBrand(){
        return carBrand;
    }

    public double calculatePrice(int rentalDay){
        return basePricePerDay * rentalDay;
    }

    public boolean isAvailable(){
        return isAvailable;
    }

    public void rent(){
        isAvailable = false;
    }
     public void returnCar(){
        isAvailable = true;
    }

}