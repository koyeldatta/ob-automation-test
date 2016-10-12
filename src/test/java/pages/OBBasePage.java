package pages;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;


public class OBBasePage {
	public WebDriver driver = new FirefoxDriver();
	
	public void getPage(String url){
		driver.get(url);
	}
	
	//method to verify Insights Link's published date
	public static boolean verifyInsightLinks(List<WebElement> insights,String expectedDate){
		for(WebElement element: insights){
	    	if(element.getText().contains(expectedDate)){
				System.out.println("Matched---------->"+element.getText()+"="+expectedDate);
				continue;
			}
			else{
				System.out.println("Not Matched-------->"+element.getText());
				return false;
			}
		}
		return true;
	}
	
	//method to validate the dropdown options for View/from
	public boolean validateOptions(List<WebElement> dropDownOptions, List<String> testData){
		//counter used to index each options present in the drop down
		int i=0;
		  for (String item : testData) {
			  //comparing test data passed in feature against option coming from drop down box
			  if(item.equals(dropDownOptions.get(i).getText())){
				  System.out.println("Matched pairs : From testdata--> "+item+ ":::: From dropdown--> "+dropDownOptions.get(i).getText());
				  //increment the counter to point to the next option in drop down box
				  i++;
				  //continue loop with the next item
				  continue;
			  }
			  else {
				  System.out.println("UnMatched pair : From testdata--> "+item+ ":::: From dropdown--> "+dropDownOptions.get(i).getText());
				  //any mismatch exit loop and return false
				  return false;
			  }
		  }
		  //to confirm if loop has executed the number of times equal to the number of options present in drop down,
		  //that suggests all option matches with test data so return true
		  if(i==testData.size())
			  return true;
		  else
			  return false;
	}
	
	//method to hightlight a webelement
	public static void fnHighlightMe(WebDriver driver,WebElement element) throws InterruptedException{
		  //Creating JavaScriptExecuter Interface
		   JavascriptExecutor js = (JavascriptExecutor)driver;
		   for (int iCnt = 0; iCnt < 3; iCnt++) {
		      //Execute javascript
		         js.executeScript("arguments[0].style.border='4px groove green'", element);
		         Thread.sleep(1000);
		         js.executeScript("arguments[0].style.border=''", element);
		   }
	}
}


















