import { test, expect, Page } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { loginData } from "../test-data/loginData";
import { DashboardPage } from "../pages/DasboardPage";

test('user login with valid credentials', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginpage.goto();
    await loginpage.login(
        loginData.validuser.username,
        loginData.validuser.password
    );
    await dashboardPage.verifyDashboardLoaded();
});

test("Should show an error for an invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(page.getByText("Invalid credentials")).toBeVisible();
});

