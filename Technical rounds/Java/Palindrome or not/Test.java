

// Palindrome or not

class Palindrome{
    static boolean palindromeOrNot(String str){
        String reversed = "";
        for(int i = str.length()-1; i>=0; i--){
            reversed = reversed+ str.charAt(i);
        }
        if(str.equals(reversed)){
            return true;
        }
        
        return false;
        
    }
    public static void main(String[] args) {
        String str = "madam";
        System.out.println(palindromeOrNot(str));
    }
}