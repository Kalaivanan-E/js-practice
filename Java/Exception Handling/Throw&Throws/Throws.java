

// Throws compiler only find the exception might be occur or not, method level


class calc{
    void div() throws Exception{
        int a = 10/0;
    }
    public static void main(String[] args) {
        calc c = new calc();
        try{
        c.div();
        }catch(Exception e){
            System.out.println(e);
        }
    }
}