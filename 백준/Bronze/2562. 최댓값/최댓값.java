import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numbers = new int[9];

        for(int i = 0; i < 9; i++){
            numbers[i] = sc.nextInt();
        }

        int max = numbers[0];
        int maxIndex = 0;

        for(int i = 1; i < 9; i++){
            if(numbers[i] > max) {
                max = numbers[i];
                maxIndex = i;
            }
        }
        System.out.println(max);
        System.out.println(maxIndex +1);
    }
}
