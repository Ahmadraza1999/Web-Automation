import { createBdd } from 'playwright-bdd';
import { DashboardPage } from '../pages/DasboardPage';
import { LoginPage } from '../pages/LoginPage';

const { When, Then } = createBdd();

When('I logout from the application', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.logout();
});

Then('I should see the login button', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.verifyLoginButton();
});