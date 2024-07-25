
import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num1 = sc.nextInt();
        int[] numbers = new int[num1];

        for(int i = 0; i<num1; i++){
            numbers[i] = sc.nextInt();
        }

        int min = numbers[0];
        int max = numbers[0];

        for(int i = 1; i < num1; i++){
            if(numbers[i] < min){
                min = numbers[i];
            }
            if(numbers[i] > max) {
                max = numbers[i];
            }
        }

        System.out.println(min + " " + max);
    }
}