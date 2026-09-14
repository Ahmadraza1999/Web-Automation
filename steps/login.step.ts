import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { DashboardPage } from '../pages/DasboardPage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
});

When('I login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
        loginData.validuser.username,
        loginData.validuser.password
    );
});
Then('I should see the dashboard', async ({ page }) => {
    const dasboard = new DashboardPage(page);

    await dasboard.verifyDashboardLoaded();
});
