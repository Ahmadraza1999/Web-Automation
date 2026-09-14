// Generated from: features/logout.feature
import { test } from "playwright-bdd";

test.describe('User Logout', () => {

  test('User should logout successfully', async ({ Given, When, Then, page }) => { 
    await Given('I am logged in as an admin', null, { page }); 
    await When('I logout from the application', null, { page }); 
    await Then('I should see the login button', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in as an admin","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I logout from the application","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the login button","stepMatchArguments":[]}]},
]; // bdd-data-end