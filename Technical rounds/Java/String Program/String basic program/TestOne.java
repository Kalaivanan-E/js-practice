

//1) print each character of the string in separate line

class TestOne {
    public static void main(String[] args) {
        String s = "Its simple";
        for ( int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            System.out.println(ch);
        }
    }
    
}
// 2) print ASCII code of each character of a string

class Test2{
    public static void main(String[] args) {
        String s = "ITS SIMPLE";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            System.out.println(ch + " " + (int)ch);
        }
    }
}

// 3) print only uppercase character in a string

class Test3{
    public static void main(String[] args) {
        String s = "Its Simple";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            if(Character.isUpperCase(ch)){
                System.out.println(ch);
            }
        }
    }
}

// 4) create a new string with digits first and then characters:

class Test4{
    
    public static void main(String[] args) {
        String d = "", r="";
        String s = "No26 Sound";

        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            if(Character.isDigit(ch)){
                d = d+ch;
            }else{
                r = r+ch;
            }
        }
        String sen = d + r;
        System.out.println(sen);
    }
}

// 5) create a new string after removing all space in a string

class Test5{
    public static void main(String[] args) {
        String d = "";
        String s = "No26 Sound";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            if(!Character.isWhitespace(ch)){
                d = d + ch;
            }
        }
        System.out.println("After removing whitespace : " + d);

    }
}

// 6) write a program to find the reverse of the string

class Test6{
    public static void main(String[] args) {
        String rev = "";
        String s = "No26 Sound";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            rev = ch+ rev;
        }
        System.out.println(rev);
    }
}
// 7) write a program to find if the string is palindrome or not

class Test7{
    public static void main(String[] args) {
        String rev = "";
        String s = "No26 Sound";
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            rev = ch+ rev;
        }
        System.out.println(rev);
        if(s.equalsIgnoreCase(rev)){
            System.out.println("Yes it is");
        }else{
            System.out.println("not it is ");
        }
    }
}

// 8) input = kalaivanan
//    output = KAlaIVanAN

