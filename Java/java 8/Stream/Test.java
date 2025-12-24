
// stream is process of collection,
// it is like a pipeline, it doesn't store data

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Test {

    public static void main(String[] args) {

        // 1) From collection, collection in java have stream() method
        List <String> names = Arrays.asList("Adam","Eve","Madhan");
        Stream <String> nameStream = names.stream();
        nameStream.forEach(System.out::println);

        // 2) From Array, Array.stream() to create stream from an array.

        int [] numbers = {2,4,25,98,1};
        IntStream numbStream = Arrays.stream(numbers); 
        numbStream.filter(n -> n%2==0).forEach(System.out::println);

        // 3) using StreamOf(),creates a stream from individual elements or an array

        Stream<String> fruitStream = Stream.of("Apple","Orange", "Blueperry");
        fruitStream.forEach(System.out::println);

        // 4) Generating Stream, Stream.generate() - to create an infinite stream of value

        Stream<String> helloStream = Stream.generate(()->"hello").limit(3);
        helloStream.forEach(System.out::println);
    }
}