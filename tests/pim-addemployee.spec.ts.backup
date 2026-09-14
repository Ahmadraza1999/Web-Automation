import { test, Page } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DasboardPage'
import { SideBar } from '../pages/SideBar.page'
import { loginData } from '../test-data/loginData'
import { Pim } from '../pages/Pim-addemployeePage'

test('user should add a new emplyee', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const sidebar = new SideBar(page);
    const pim = new Pim(page);

    await loginpage.goto();
    await loginpage.login(
        loginData.validuser.username,
        loginData.validuser.password
    );

    await dashboardPage.verifyDashboardLoaded();
    await sidebar.Pim();
    await pim.clickaddbutton();
    await pim.addemployee();
    await pim.createlogindetails();
})
 
