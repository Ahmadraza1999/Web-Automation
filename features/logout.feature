Feature: User Logout

  Scenario: User should logout successfully
    Given I am logged in as an admin
    When I logout from the application
    Then I should see the login button