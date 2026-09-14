Feature: User Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should see the dashboard

 