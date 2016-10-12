@GoogleSearch
Feature: Search for Orangebus's site

Scenario: I search for Orangebus on google
Given I visit google
When I search for Orangebus
And I click orangebus's site
Then I should be able to navigate the Orangebus's home page