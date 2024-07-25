import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int n = sc.nextInt();
            if (n == -1) {
                break;
            }

            // 약수를 저장할 리스트
            ArrayList<Integer> divisors = new ArrayList<>();
            int sum = 0;

            // 1부터 n/2까지의 약수를 구함
            for (int i = 1; i <= n / 2; i++) {
                if (n % i == 0) {
                    divisors.add(i);
                    sum += i;
                }
            }

            // 완전수인지 확인
            if (sum == n) {
                System.out.print(n + " = ");
                for (int i = 0; i < divisors.size(); i++) {
                    if (i > 0) {
                        System.out.print(" + ");
                    }
                    System.out.print(divisors.get(i));
                }
                System.out.println();
            } else {
                System.out.println(n + " is NOT perfect.");
            }
        }

        sc.close();
    }
}
