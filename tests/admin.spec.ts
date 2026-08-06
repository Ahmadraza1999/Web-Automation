import { test, expect, } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DasboardPage"
import { loginData } from "../test-data/loginData";
import { AdminPage } from "../pages/AdminPage";
import { AddUser } from "../pages/AddUserPage";
import { userData } from "../test-data/adduserData";

test("user should naviagate to the Admin Page", async ({ page }) => {

    const loginpage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminpage = new AdminPage(page)
    const adduser = new AddUser(page)

    await loginpage.goto();
    await loginpage.login(
        loginData.validuser.username,
        loginData.validuser.password
    );
    await dashboardPage.verifyDashboardLoaded();

    await adminpage.openadminpage();

    await adminpage.verifyadminpage();

    await adduser.createuser();
    await adduser.selectUserRole();
    await adduser.selectStatusDropdown();
    await adduser.selectEmployeeName();
    await adduser.selectUserName();
    await adduser.setPassword();
    await adduser.saveButton();
    await adduser.verifyUseradded();


})
