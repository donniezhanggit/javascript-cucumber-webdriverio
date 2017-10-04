Feature: Demo2
  As a User,
  Google searching should work on all platforms

  @C001 @smokeTest @regression
  Scenario: Google Search - Appium
    Given I am on "http://www.google.com"
    When I search for "appium"
    And select "Appium: Mobile App Automation Made Awesome." in the search results
    Then I am presented with the page "http://appium.io/"

  @C002 @regression
  Scenario: Google Search - cucumber-js
    Given I am on "http://www.google.com"
    When I search for "cucumber-js"
    And select "cucumber-js" in the search results
    Then I am presented with the page "https://github.com/cucumber/cucumber-js"

  @C003 @smokeTest @regression
  Scenario: Google Search - WebdriverIO
    Given I am on "http://www.google.com"
    When I search for "WebdriverIO"
    And select "WebdriverIO" in the search results
    Then I am presented with the page "http://webdriver.io/"

  @C004 @regression
  Scenario: Google Search - WebStorm
    Given I am on "http://www.google.com"
    When I search for "WebStorm"
    And select "WebStorm: The Smartest JavaScript IDE by JetBrains" in the search results
    Then I am presented with the page "https://www.jetbrains.com/webstorm/"