import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 입력 받기
        int N = sc.nextInt();
        int K = sc.nextInt();

        // 약수를 저장할 리스트
        ArrayList<Integer> divisors = new ArrayList<>();

        // N의 약수를 구함
        for (int i = 1; i <= N; i++) {
            if (N % i == 0) {
                divisors.add(i);
            }
        }

        // 약수의 개수가 K보다 적으면 0을 출력
        if (divisors.size() < K) {
            System.out.println(0);
        } else {
            // K번째 약수 출력 (1-indexed)
            System.out.println(divisors.get(K - 1));
        }

        sc.close();
    }
}
