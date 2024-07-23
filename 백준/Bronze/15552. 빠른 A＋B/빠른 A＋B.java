import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        // BufferedReader와 BufferedWriter를 사용하여 빠른 입출력 설정
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        // 테스트 케이스의 개수 T 입력
        int T = Integer.parseInt(br.readLine());

        // 각 테스트 케이스에 대해 A와 B를 입력받고, A+B의 결과를 출력
        for (int i = 0; i < T; i++) {
            String[] input = br.readLine().split(" ");
            int A = Integer.parseInt(input[0]);
            int B = Integer.parseInt(input[1]);

            // A + B 계산 후 출력
            bw.write((A + B) + "\n");
        }

        // 버퍼에 있는 모든 데이터를 출력
        bw.flush();
        // 리소스 해제
        bw.close();
        br.close();
    }
}
