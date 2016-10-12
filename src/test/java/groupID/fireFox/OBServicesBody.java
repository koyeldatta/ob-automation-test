package groupID.fireFox;

import org.openqa.selenium.By;

import pages.OBBasePage;
import utils.OBmessages;
import cucumber.api.java.en.When;

public class OBServicesBody extends OBBasePage implements OBmessages{

	@When("^I am on Services Page$")
	public void i_am_on_Services_Page() throws Throwable {
		getPage(homePageUrl);
		driver.manage().window().maximize();
		driver.findElement(By.linkText("Services")).click();
	}
}
