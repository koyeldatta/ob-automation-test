 @OBNavPanel
 Feature: Validate Orangebus's Home page and it's contents

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Home" from navigation panel
    Then I should be able to view "Home" page title
    

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Work" from navigation panel
    Then I should be able to view "Work" page title

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Services" from navigation panel
    Then I should be able to view "Services" page title

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "About" from navigation panel
    Then I should be able to view "About" page title

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Careers" from navigation panel
    Then I should be able to view "Careers" page title

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Insights" from navigation panel
    Then I should be able to view "Insights" page title

  Scenario: Check OB's navigation panel
    Given I navigate to Orangebus's site
    When I click "Contact" from navigation panel
    Then I should be able to view "Contact" page title

    