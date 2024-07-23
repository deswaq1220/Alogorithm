import java.text.SimpleDateFormat;
import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

       int num1 = sc.nextInt();
       int num2 = sc.nextInt();

       int [] numbers = new int[num1];

       for(int i = 0; i < num1; i++) {
           numbers[i] = sc.nextInt();
       }

       for(int i = 0; i < num1; i++){
           if(numbers[i] < num2){
               System.out.println(numbers[i]);
           }
       }

        sc.close();
    }
}