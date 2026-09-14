// Generated from: features/pim-addemployee.feature
import { test } from "playwright-bdd";

test.describe('Add Employee', () => {

  test('Add a new employee', async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in as an admin', null, { page }); 
    await When('I navigate to the PIM page', null, { page }); 
    await And('I click on Add Employee', null, { page }); 
    await And('I add a new employee', null, { page }); 
    await And('I create login details for the employee', null, { page }); 
    await Then('the employee should be successfully added', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/pim-addemployee.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in as an admin","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I navigate to the PIM page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I click on Add Employee","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add a new employee","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I create login details for the employee","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the employee should be successfully added","stepMatchArguments":[]}]},
]; // bdd-data-end