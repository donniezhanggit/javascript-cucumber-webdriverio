Feature: Demo
  As a User,
  Google searching should work on all platforms

  @C001 @smokeTest @regression
  Scenario: Google Search - Appium
    Given I am on "http://www.google.com"
    When I search for "appium"
#    And select "Appium" in the search results
#    Then I am presented with the "http://appium.io/" homepage
#
#  @C002 @regression
#  Scenario: Google Search - cucumber-js
#    Given I am on "http://www.google.com"
#    When I search for "cucumber-js"
#    And select "cucumber-js" in the search results
#    Then I am presented with the "https://github.com/cucumber/cucumber-js" homepage
#
#  @C003 @smokeTest @regression
#  Scenario: Google Search - WebdriverIO
#    Given I am on "http://www.google.com"
#    When I search for "WebdriverIO"
#    And select "WebdriverIO" in the search results
#    Then I am presented with the "http://webdriver.io/" homepage
#
#  @C004 @regression
#  Scenario: Google Search - WebStorm
#    Given I am on "http://www.google.com"
#    When I search for "WebStorm"
#    And select "WebStorm" in the search results
#    Then I am presented with the "https://www.jetbrains.com/webstorm/" homepage