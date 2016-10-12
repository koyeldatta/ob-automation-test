//package groupID.fireFox;
//
//import org.junit.AfterClass;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import cucumber.api.java.After;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class SearchForOB 
//{
//
//	public WebDriver driver;
//
//	@Given("^I visit google$")
//	public void loadGoogle() throws Throwable 
//	{
//		driver = new FirefoxDriver();
//		driver.get("https://www.google.com");
//
//	}
//
//	@When("^I search for Orangebus$")
//	public void searchOrangebus() throws InterruptedException 
//	{
//		driver.findElement(By.id("lst-ib")).sendKeys("test");
//		Thread.sleep(2000);
//		driver.findElement(By.id("lst-ib")).clear();
//		driver.findElement(By.id("lst-ib")).sendKeys("Oranngebus");
//		driver.findElement(By.className("lsb")).click();
//		Thread.sleep(1000);
//	}
//
//	@And("^I click orangebus's site$")
//	public void clickOrangebusURL() throws InterruptedException 
//	{
//		driver.findElement(By.linkText("Orange Bus | Strategic digital agency | Experience - Design ...")).click();
//		Thread.sleep(2000);
//	}
//
//	@Then("^I should be able to navigate the Orangebus's home page$")
//	public void validateOrangebusHomePage() 
//	{
//		System.out.println(driver.getTitle());
//		
//		
//	}
//	
//	@After("@GoogleSearch")
//	public void wrapUp() 
//	{
//		System.out.println("***OBNavPanel****************");
//		driver.quit();
//	}
//	
//}
