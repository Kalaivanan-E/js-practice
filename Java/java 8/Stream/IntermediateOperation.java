import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class IntermediateOperation {
    public static void main(String[] args) {
        
        // 1) filter, for every elements performs some operation based on condition and
        //  stored in another collection 

        List<String> names = Arrays.asList("Rahul","Sonia","Rajini","Ram","Sankar");
        List<String> filterNames = names.stream().filter(name -> name.startsWith("R")).collect(Collectors.toList());
        System.out.println(filterNames);

        //2) map, for every element performs some operation and stored in another collection

        List<String> listNames = Arrays.asList("Rahul","Sonia","Rajini","Ram","Sankar");   
        List<String> upperCaseNames = listNames.stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println(upperCaseNames);  
        
        // 3) sorted() - sorts elements in natural order or using comparator

        List<Integer> numbers = Arrays.asList(2,7,9,5,4,1,8,8,9);
        List <Integer> sortedNumbers = numbers.stream().sorted().collect(Collectors.toList());
        System.out.println(sortedNumbers); 

        //4) distinct() - to remove duplicate elements from the stream

        List<Integer> distinctNumbers = numbers.stream().distinct().collect(Collectors.toList());
        System.out.println(distinctNumbers);
    }
}
