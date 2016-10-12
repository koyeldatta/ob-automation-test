//package groupID.fireFox;
//
//import org.junit.AfterClass;
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import cucumber.api.java.After;
//import cucumber.api.java.en.*;
//
//public class OBFooter 
//{
//	public WebDriver driver = null;
//
//	@Given("^I visit the Orangebus's site$")
//	public void visitOB() 
//	{
//		driver = new FirefoxDriver();
//		driver.get("http://www.orangebus.co.uk");
//		// JavascriptExecutor jse = (JavascriptExecutor) driver;
//		// jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
//	}
//
//	@Then("^I should be able to validate Orangebu's logo$")
//	public void validateOBFooterLogo() 
//	{
//		WebElement OBLogo = driver.findElement(By.className("logo"));
//		System.out.println("OBLogo's title ==> " + OBLogo.getAttribute("title"));
//		System.out.println("OBLogo's href  ==> " + OBLogo.getCssValue("href") + "/n");
//
//		WebElement OBLogo2 = driver.findElement(By.xpath("//img[@alt='Orange Bus Logo']"));
//		System.out.println("OBLogo2 title ==> " + OBLogo2.getAttribute("title"));
//		System.out.println("OBLogo2 href  ==> " + OBLogo2.getAttribute("href"));
//		System.out.println("OBLogo2 href  ==> " + OBLogo2.getAttribute("src"));
//
//		OBLogo2.click();
//
//		System.out.println(driver.getTitle());
//
//	}
//
//	@And("^I should be able to validate media icons$")
//	public void validateOBMediaIcons() 
//	{
//		System.out.println("validateOBMediaIcons");
//	}
//
//	@And("^I should be able to validate footer copyright details$")
//	public void validateCopyright() 
//	{
//		System.out.println("validateCopyrigh");
//		
//	}
//
//	@After("@OBFooter")
//	public void wrapUp() 
//	{
//		System.out.println("***OBNavPanel****************");
//		driver.quit();
//	}
//}
