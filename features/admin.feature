Feature: Admin User Management

  Scenario: Verify Admin User Management page
    Given I am logged in as an admin
    When I navigate to the Admin page
    Then I should see the Admin User Management page

  Scenario: Create a new admin user
    Given I am logged in as an admin
    When I navigate to the Admin page
    And I create a new admin user
    Then the new user should be successfully created