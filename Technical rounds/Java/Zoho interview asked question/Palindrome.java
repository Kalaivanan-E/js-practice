

// check palindrome or not
// approach 1
class Palindrome{
    public static void main(String[] args) {
        String str = "madam";
        String original = str;
        String rev = "";
        for(int i=0; i<str.length(); i++){
            char ch = str.charAt(i);
            rev = ch + rev;
        }
        if(rev.equals(original)){
            System.out.println("It's palindrome");
        }else{
            System.out.println("Not a palindrome");
        }
    }
}

// approach 2

class Palindrome2{
    public static void main(String[] args) {
        String str = "madam";
        String rev = "";
        for(int i= str.length()-1;i>=0; i--){
            char ch = str.charAt(i);
            rev = rev + ch;
        }
        if(rev.equals(str)){
            System.out.println("It's palindrome");
        }else{
            System.out.println("Not a palindrome");
        }
    }
}

// approach 3

class Palindrome3{
    public static void main(String[] args) {
        String str = "Ma@da#m";
        if(isPalindrome(str)){
            System.out.println("It's Palindrome");
        }else{
            System.out.println("Not a palindrome");
        }
    }
    public static boolean isPalindrome(String str){
        str = str.toLowerCase();
        int left =0;
        int right = str.length()-1;
        while(left<right){
            if(!Character.isAlphabetic(left)){
                left++;
            }
            else if(Character.isAlphabetic(right)){
                right--;
            }
            else if(str.charAt(left)!= str.charAt(right)){
                return false;
            }else{
                left++;
                right--;
            }
        }
        return true;
        
    }
}