

//1) print each word of a sentence in a separate line

class question1{
    public static void main(String[] args) {
        String w ="";
        String sen = "In The Box";
        for(int i=0; i<sen.length(); i++){
            char ch = sen.charAt(i);
            if(ch !=' '){
                w+=ch;
            }else{
                System.out.println(w);
                w="";
            }
        }
    }
}