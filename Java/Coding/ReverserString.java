
class ReverseString{
    public static void main(String[] args) {
        String inputvalue = "uniq";
        String ouptvalue = " ";
        for(int i = inputvalue.length()-1; i>=0; i--){
            ouptvalue = ouptvalue + inputvalue.charAt(i);
        }
        System.out.println(ouptvalue);
    }
}