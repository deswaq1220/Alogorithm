import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();
        String strip = str.trim();
        
        if (strip.isEmpty()) {
            System.out.print(0);
        } else {
            String[] stChange = strip.split("\\s+");
            System.out.print(stChange.length);
        }
    }

}
