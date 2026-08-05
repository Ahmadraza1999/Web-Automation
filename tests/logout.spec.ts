import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DasboardPage"
import { loginData } from "../test-data/loginData";
import { loginLocators } from "../locators/login.locators";


test("User should logout", async ({page})=>{

        const loginpage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
    
        await loginpage.goto();
        await loginpage.login(
            loginData.validuser.username,
            loginData.validuser.password
        );
        await dashboardPage.verifyDashboardLoaded();
        await dashboardPage.logout();
        await expect(page.getByRole("button", {name: loginLocators.loginButton})).toBeVisible();
});