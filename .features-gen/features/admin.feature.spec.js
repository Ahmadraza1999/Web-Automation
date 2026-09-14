// Generated from: features/admin.feature
import { test } from "playwright-bdd";

test.describe('Admin User Management', () => {

  test('Verify Admin User Management page', async ({ Given, When, Then, page }) => { 
    await Given('I am logged in as an admin', null, { page }); 
    await When('I navigate to the Admin page', null, { page }); 
    await Then('I should see the Admin User Management page', null, { page }); 
  });

  test('Create a new admin user', async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in as an admin', null, { page }); 
    await When('I navigate to the Admin page', null, { page }); 
    await And('I create a new admin user', null, { page }); 
    await Then('the new user should be successfully created', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/admin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in as an admin","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I navigate to the Admin page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the Admin User Management page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in as an admin","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I navigate to the Admin page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I create a new admin user","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the new user should be successfully created","stepMatchArguments":[]}]},
]; // bdd-data-end