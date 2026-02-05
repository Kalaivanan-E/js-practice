
// write the program to find result of the series
// 1/2 + 2/3 + 3/4 + 4/5 + 5/6 + 6/7 + 7/8 + 8/9 + 9/10

class findresultofSeries{
    public static void main(String[] args) {
        double sum =0;
        for(double i = 1; i<=10; i++){
            sum = sum + i/(i+1);
        }
        System.out.println(sum);
    }
}

// find the result of the series
// 1^2 + 2^2 + 3^2 + 4^2 + 5^2

class findresultofSeries2{
    public static void main(String[] args) {
        int sum =0;
        for(int i=0; i<=5; i++){
            sum = sum + i*i;
        }
        System.out.println(sum);
    }
}