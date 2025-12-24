import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class TerminalOperation {
    public static void main(String[] args) {
            
        // 1) forEach - performs an action on each element

            List<String> names = Arrays.asList("Kishore","Kalai", "Madhan");
            names.stream().forEach(System.out::println);
        
        // 2) collect() - collects element into a collection like a list or set
        
            List<Integer> numbers = Arrays.asList(2,1,4,5,6);
            List<Integer> collectedNumbers =  numbers.stream().collect(Collectors.toList());
            System.out.println(collectedNumbers);

        // 3) count() - Returns the numbers of elements in the stream

            long count = numbers.stream().count();
            System.out.println(count);

        //4) reduce() - Combine element into a single value

            int sum = numbers.stream().reduce(0, Integer::sum);
            System.out.println(sum);
    }
}
