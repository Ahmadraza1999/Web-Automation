import { createBdd } from 'playwright-bdd';
import { SideBar } from '../pages/SideBar.page';
import { Pim } from '../pages/Pim-addemployeePage';


const { When, Then } = createBdd();

When('I navigate to the PIM page', async ({ page }) => {
    const sidebar = new SideBar(page)
    await sidebar.Pim();
});

When('I click on Add Employee', async ({ page }) => {
    const pim = new Pim(page);

    await pim.clickaddbutton();
});

When('I add a new employee', async ({ page }) => {
    const pim = new Pim(page);

    await pim.addemployee();
});

When('I create login details for the employee', async ({ page }) => {
    const pim = new Pim(page);

    await pim.createlogindetails();
});

Then('the employee should be successfully added', async ({ page }) => {
    const pim = new Pim(page);

    await pim.verifyEmployeeDetailsPage();
});
Then('I should be navigated to the Personal Details page', async ({ page }) => {
    const pim = new Pim(page);

    await pim.verifyEmployeeDetailsPage();
});

