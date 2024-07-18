import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int sum = a * b * c;

        String resultStr = Integer.toString(sum);

        int [] count = new int[10];

        for(int i = 0; i < resultStr.length(); i++){
            char digit = resultStr.charAt(i);
            count[digit - '0'] ++;
        }

        for(int i = 0; i < count.length; i++){
            System.out.println(count[i]);
        }
    }
}
