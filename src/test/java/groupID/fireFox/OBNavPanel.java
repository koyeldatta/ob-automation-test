package groupID.fireFox;

import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import pages.OBBasePage;
import cucumber.api.java.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class OBNavPanel extends OBBasePage
{

	//public WebDriver driver = null;

	@Given("^I navigate to Orangebus's site$")
	public void openOBURL() 
	{
		//driver = new FirefoxDriver();
		driver.get("http://www.orangebus.co.uk");
	}

	@When("^I click \"([^\"]*)\" from navigation panel$")
	public void testNavigationLink(String link) throws InterruptedException 
	{
		System.out.println(link);
		driver.manage().window().maximize();
		Thread.sleep(1000);
		driver.findElement(By.linkText(link)).click();
	}

//	@Then("I should be able to view \"([^\"]*)\" page title$")
//	public void validteNavigatePanel(String title) 
//	{
//		String ExpectedTitle = "Orange Bus | " + title;
//		String ActualTitle = driver.getTitle();
//
//		System.out.println("Expected Title --> " + ExpectedTitle);
//		System.out.println("Actual Title   --> " + ActualTitle);
//
//		Assert.assertEquals(ExpectedTitle, ActualTitle);
//		
//	}
//
//	
//	@After("@OBNavPanel")
//	public void wrapUp() 
//	{
//		System.out.println("***OBNavPanel****************");
//		driver.quit();
//	}
	

}
