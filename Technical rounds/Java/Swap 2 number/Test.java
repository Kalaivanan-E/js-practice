

// swap two number

class SwapTwoNumber{
    public static void main(String[] args) {
        int m=9, n=10;
        System.out.println("Before Swapping : M = "+ m + " n = " + n );
        int temp = m;
        m =  n;
        n = temp;
        System.out.println("After Swapping : M = "+ m + " n = "+ n);
    }
}

// swap two number without using third number

class SwapTwoNumber2{
    public static void main(String[] args) {
        int m=9, n=10;
        System.out.println("Before Swapping : M = "+ m + " n= "+n );
        m = m+n;
        n = m-n;
        m = m-n;
        System.out.println("After Swapping : M= "+ m + " n = "+ n);
    }
}