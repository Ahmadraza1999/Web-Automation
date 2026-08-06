import { Page, expect } from "@playwright/test"
import { addUser } from "../locators/adduser.locators";
import { userData } from "../test-data/adduserData";

export class AddUser {
    constructor(private page: Page) {

    }

    async createuser() {
        await this.page.getByRole("button", { name: addUser.addbutton }).click();
    }


    async selectUserRole() {
        await this.page.locator(addUser.userRoleDropdown).nth(0).click();
        const dropDownEntries = this.page.getByRole('option', { name: 'Admin' });
        await dropDownEntries.click();
        await dropDownEntries.waitFor({ state: 'hidden' });

    }
    async selectStatusDropdown() {
        await this.page.locator(addUser.statusDropdown).nth(1).click();
        await this.page.getByRole('option', { name: 'Enabled' }).click();
    }


    async selectEmployeeName() {
        await this.page.getByPlaceholder("Type for hints...").fill(userData.employeeName);
        const employeeName = this.page.getByRole('option', { name: userData.employeeName });
        await employeeName.first().click();
        await employeeName.waitFor({ state: 'hidden' });
    }

    async selectUserName() {
        const usernameField = this.page.locator(addUser.userName).nth(1);

        const currentValue = await usernameField.inputValue();

        const username = `${userData.userName}${Date.now()}`;

        if (currentValue === "") {
            await usernameField.fill(username);
        } else {
            await usernameField.clear();
            await usernameField.fill(username);
         }

    }
    async setPassword() {
        const passwordInput = this.page
            .locator(addUser.passWord);

        await passwordInput.fill(userData.passWord);

        const confirmPasswordInput = this.page
            .locator(addUser.confirmPassword);

        await confirmPasswordInput.fill(userData.passWord);
    }

    async saveButton() {
        await this.page.getByRole('button', { name: addUser.saveButton }).click();
    }

    async verifyUseradded(){
        expect(this.page.getByText("Successfully Saved"));
    }
}


