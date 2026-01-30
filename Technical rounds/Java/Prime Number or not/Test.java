
// Find the given number is prime or not
// approach 1 

class Test{
    static boolean isPrime(int n){
        for(int i=2; i<=n/2; i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        int n = 12;
        System.out.println(isPrime(n));
    }
}

// approach 2 

class Test2{
    static boolean isPrime(int n){
        for(int i = 2; i<= Math.sqrt(n); i++){
            if(n%i == 0)
                return false;
        }
        return true;
    }
    public static void main(String[] args) {
        int n = 13;
        System.out.println(isPrime(n));
    }
}

// approach 3 

class Test3{
    static boolean isPrime(int n){
        if(n<=1) return false;

        for(int i =2; i * i<=n; i++){
            if(n%i ==0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        int n = 5;
        System.out.println(isPrime(n));
    }
}