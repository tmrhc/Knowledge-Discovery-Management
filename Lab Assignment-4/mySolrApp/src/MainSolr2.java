
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
 
public class MainSolr2 {
	public static void main(String[] args) {
        try {
            URL solr = new URL("http://192.168.232.128:8983/solr/collection1_shard1_replica1/select?q=*%3A*&wt=json&indent=true");
            BufferedReader in = new BufferedReader(new InputStreamReader(solr.openStream()));
            String inputLine; 
 
            while ((inputLine = in.readLine()) != null) {
                // Process each line.
                System.out.println(inputLine);
            }
            in.close(); 
 
        } catch (MalformedURLException me) {
            System.out.println(me); 
 
        } catch (IOException ioe) {
            System.out.println(ioe);
        }
    }//end main
}
