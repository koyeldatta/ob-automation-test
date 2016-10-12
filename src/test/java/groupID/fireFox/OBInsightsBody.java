package groupID.fireFox;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;



import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import pages.OBBasePage;
import utils.OBmessages;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OBInsightsBody extends OBBasePage implements OBmessages{
	
	@When("^I am on Insights Page$")
	public void i_am_on_Insights_Page() throws Throwable {
		getPage(homePageUrl);
		driver.manage().window().maximize();
		driver.findElement(By.linkText("Insights")).click();
	}

	@When("^I select View as \"([^\"]*)\"$")
	public void i_select_View_as(String topic) throws Throwable {
		System.out.println("================= currentUrl =============="+driver.getCurrentUrl());
		Assert.assertTrue(driver.getCurrentUrl().contentEquals("http://orangebus.co.uk/insights"));
		Select viewDropDown = new Select(driver.findElement(By.id("base_2_relatedtags"))); 
	    viewDropDown.selectByVisibleText(topic);	
		}

	@When("^I select from as \"([^\"]*)\"$")
	public void i_select_from_as(String date) throws Throwable {
		Select fromDropDown = new Select(driver.findElement(By.id("base_2_relateddates"))); 
        fromDropDown.selectByValue(date);
        Thread.sleep(10000);
		}
	 
	
	@Then("^Insight page is returned with expected \"([^\"]*)\"$")
	public void insight_page_is_returned_with_expected(String publishDate) throws Throwable {
		List<WebElement> insightLinks= driver.findElement(By.id("base_2_BlogUpdatePanel")).findElements(By.tagName("p"));
		Assert.assertTrue(verifyInsightLinks(insightLinks,publishDate));
	    }
	
	@Then("^Insight page has expected message as \"([^\"]*)\"$")
	public void insight_page_has_expected_message_as(String msg) throws Throwable {
	    boolean passed = false;
		String actualMsg = driver.findElement(By.className("search-no-results")).getText();
		System.out.println("Actual Message --------> "+actualMsg);
	    if(actualMsg.contains(msg))
	    	passed = true;
	    Assert.assertTrue(passed);
	}
	
	@Then("^The banner is displayed as \"([^\"]*)\"$")
	public void the_banner_is_displayed_as(String bannerTitle) throws Throwable {
		boolean passed = false;
		String actualtitle = driver.findElement(By.className("primary")).getText();
		System.out.println("Actual BannerTitle --------> "+actualtitle);
	    if(actualtitle.contains(bannerTitle))
	    	passed = true;
	    Assert.assertTrue(passed);
	}
	

	@Then("^I validate viewDropDown against available options$")
	public void i_validate_viewDropDown_against_available_options(DataTable dataTable) throws Throwable {
		Select viewDropDown = new Select(driver.findElement(By.id(viewDropDownID)));
		List<WebElement> dropDownOptions=viewDropDown.getOptions();
		List<String> testData = dataTable.asList(String.class);
		Assert.assertTrue(validateOptions(dropDownOptions,testData));
	}
	
//	@Then("^I validate fromDropDown against available options$")
//	public void i_validate_fromDropDown_against_available_options(DataTable dataTable) throws Throwable {
//		Select fromDropDown = new Select(driver.findElement(By.id(fromDropDownID)));
//		List<WebElement> dropDownOptions=fromDropDown.getOptions();
//		List<String> testData = dataTable.asList(String.class);
//		Assert.assertTrue(validateOptions(dropDownOptions,testData));
//	}
	
	@Then("^I validate the below \"([^\"]*)\" with below \"([^\"]*)\"$")
	public void i_validate_the_below_with_below(String expectedContentName, String Locator) throws Throwable {
	    
		WebElement element = driver.findElement(By.id(Locator));
		fnHighlightMe(driver,element);
		String actualContentName = driver.findElement(By.id(Locator)).getText();
	    Assert.assertEquals("Expected and Actual contents did not match",expectedContentName, actualContentName);
	    System.out.println("actualContentName ---------> "+actualContentName);
	    System.out.println("expectedContentName -------> "+expectedContentName);
	}
	
	@After("@testOBInsightBody")
	public void wrapUp() 
	{
		System.out.println("****************OBInsightsBody****************");
		driver.quit();
	}

}















