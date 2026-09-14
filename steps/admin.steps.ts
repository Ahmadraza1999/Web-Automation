import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DasboardPage';
import { AdminPage } from '../pages/AdminPage';
import { loginData } from '../test-data/loginData';
import { AddUser } from '../pages/AddUserPage';

const { Given, When, Then } = createBdd();

Given('I am logged in as an admin', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();

    await loginPage.login(
        loginData.validuser.username,
        loginData.validuser.password
    );

    await dashboardPage.verifyDashboardLoaded();
});

When('I navigate to the Admin page', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.openAdminPage();
});

Then('I should see the Admin User Management page', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.verifyAdminPage();
});
When('I create a new admin user', async ({ page }) => {
    const addUser = new AddUser(page);

    await addUser.createuser();
    await addUser.selectUserRole();
    await addUser.selectStatusDropdown();
    await addUser.selectEmployeeName();
    await addUser.selectUserName();
    await addUser.setPassword();
    await addUser.saveButton();
});

Then('the new user should be successfully created', async ({ page }) => {
    const addUser = new AddUser(page);

    await addUser.verifyUseradded();
});