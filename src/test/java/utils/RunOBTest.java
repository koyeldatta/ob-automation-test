package utils;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/resources"},
		glue = {"groupID.fireFox"},
		plugin = {"pretty", "html:target/html/"},
		tags = {"@testOBInsightBody"}
		)
public class RunOBTest {

}
