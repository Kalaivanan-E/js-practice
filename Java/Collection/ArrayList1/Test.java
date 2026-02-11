import java.util.ArrayList;
/*
 ArrayList => It is an Implementation class of list,
              In arraylist we can store both homogeneous and heterogeneous
              duplicates objects are allowed, it maintains insertion order, null values are allowed
              arraylist is easy for searching & difficult for manipulating(Inserting and deleteing)
              it stores contiguous memory location.
 */
class arrayList{
    public static void main(String[] args) {
        ArrayList a1 = new ArrayList();
        a1.add(10);
        a1.add(10.12);
        a1.add('a');
        a1.add(null);
        a1.add("hey");
        a1.add(false);
        a1.add("hey");
        System.out.println(a1.size()); // 7
        System.out.println(a1.contains(10.12)); // true
        System.out.println(a1.isEmpty()); // false
        System.out.println(a1.remove("hey"));
        System.out.println(a1.get(0)); // 0
        System.out.println(a1.set(5, true));
        System.out.println(a1.size());
        a1.clear();
        System.out.println(a1.size());
    }
}

// ar1 = [100,'a',200,false,"hi",true]
// print only integer

class arrlist2{
    public static void main(String[] args) {
        ArrayList  a2 = new ArrayList();
        a2.add(100);
        a2.add('a');
        a2.add(200);
        a2.add(false);
        a2.add("Hi");
        a2.add(true);

        for(int i=0; i<a2.size(); i++){
            Object obj = a2.get(i);
            if(obj instanceof Integer){
                System.out.println(obj);
            }
        }

    }
}
