import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numbers = new int[5];
        int sum = 0;

        for(int i = 0; i < 5; i++){
            numbers[i] = sc.nextInt();
            numbers[i] = numbers[i] * numbers[i];
        }
        
        for(int i = 0; i<5; i++) {
            sum += numbers[i];
        }

        int verificationNumber = sum % 10;

        System.out.println(verificationNumber);
    }
}