
import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num1 = sc.nextInt();
        String s = sc.next();
        sc.close();
        
        int max = 0;

        for(int i = 0; i < num1; i ++){
            max += s.charAt(i) - '0';
        }

        System.out.println(max);
    }
}