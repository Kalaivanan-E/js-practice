

// Reverse a String 
// approach 1
class reverseString{
    static String reversString(String name){
        
        String rev = " ";
        for(int i = name.length()-1; i>=0; i--){
            rev = rev + name.charAt(i);
        }
        return rev;
    }
    public static void main(String[] args) {
        String name = "kalaivanan";
        System.out.println(reversString(name));
    }
}

// approach 2

class reverseString1 {
    static String reverse(String name){

        char [] ch = name.toCharArray();
        int left = 0;
        int right = ch.length-1;
        while(left<right){
            char temp = ch[left];
            ch[left] = ch[right];
            ch[right]= temp;
            left++; 
            right --;
        }
        return new String(ch);
    }
    public static void main(String[] args) {
        String name = "kalai";
        System.out.println(reverse(name));
    }
}