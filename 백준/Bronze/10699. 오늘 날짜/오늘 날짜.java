import java.text.SimpleDateFormat;
import java.util.*;
public class Main {

    public static void main(String[] args) {
      Date nowDate = new Date();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String strNowDate = simpleDateFormat.format(nowDate);
        System.out.println(strNowDate);
    }
}