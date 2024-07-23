import java.text.SimpleDateFormat;
import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int input = sc.nextInt();
        long result = 1l;

        for(int i = 1; i<= input; i++){
            result *= i;
        }
        System.out.println(result);

    }
}