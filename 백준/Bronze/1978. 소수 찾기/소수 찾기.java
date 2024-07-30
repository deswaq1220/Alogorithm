import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int [] numbers = new int[n];
        int count = 0;

        for(int i = 0; i < n; i++){
            numbers[i] = sc.nextInt();
        }

        for(int num:numbers){
            if(isPrime((num))){
                count++;
            }
        }

        System.out.println(count);

        sc.close();

    }

    public static boolean isPrime(int num){
        if(num < 2) return false;

        for(int i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return  false;
            }
        }
        return true;
    }

}

