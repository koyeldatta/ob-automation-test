@testOBInsightBody
Feature: Test and validate the body of the Insights Page

#Check Happy Path
Scenario Outline:
  When I am on Insights Page
  And  I select View as "<topic>"
  And  I select from as "<date>" 
  Then Insight page is returned with expected "<linkdate>" 

    Examples: 
      | topic              | date         | linkdate|
      | All topics         | 201610       | 10/16   |
      | All topics         | 201609       | 09/16   |
      | Account Management | 201609       | 09/16   |   
      | News               | 201608       | 08/16   |
      | Development        | 201402       | 02/14   |
      | UX                 | 201507       | 07/15   |  
      
#Check Unhappy Path
Scenario Outline:
 When I am on Insights Page
 And  I select View as "<topic>"
 And  I select from as "<date>" 
 Then Insight page has expected message as "No posts found"
  
  Examples: 
      | topic              | date         |    
      | Account Management | 201610       | 
 

#Check the Insights Banner Title
Scenario: Validate Insights Banner Title
 When I am on Insights Page
 Then The banner is displayed as "Inside the minds of innovators"

#Check ViewDropDown options 
Scenario: 
 When I am on Insights Page
 Then I validate viewDropDown against available options
 | All topics | Account Management | Agile | Culture | Design | News | Opinion | Development | UX |


#Check FromDropDown options 
#Scenario: 
 #When I am on Insights Page
 #Then I validate fromDropDown against available options
 #| All of time | October 2016 | September 2016 | August 2016 | July 2016 | June 2016 | May 2016 | April 2016 | March 2016 | January 2016 | November 2015 | October 2015 | September 2015 | August 2015 | July 2015 | June 2015 | May 2015 | April 2015 | March 2015 | February 2015 | November 2014 | October 2014 | September 2014 |August 2014 | July 2014 | June 2014 | April 2014 | March 2014 | February 2014 | January 2014 | December 2013 | November 2013 | August 2013| July 2013 | June 2013 | May 2013 | April 2013 | May 2012 |
#
#
 #Contect Check
 Scenario Outline: 
 When I am on Insights Page
 Then I validate the below "<contents>" with below "<locators>"

Examples:
   |contents|locators        |
   #Check Happy Path
   |View    |base_2_lblView1 |
   |from    |base_2_lblFrom  |
   #Check Unhappy Path
   #|view    |base_2_lblView1 |
   #|from    |base_2_lblFrom  |










    