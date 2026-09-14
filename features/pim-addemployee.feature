Feature: Add Employee

  Scenario: Add a new employee
    Given I am logged in as an admin
    When I navigate to the PIM page
    And I click on Add Employee
    And I add a new employee
    And I create login details for the employee
    Then the employee should be successfully added