import { Page, expect } from '@playwright/test'
import { loginLocators } from '../locators/login.locators'


export class LoginPage {
    constructor(private page: Page) {

    }


    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder(loginLocators.usernameInput).fill(username);
        await this.page.getByPlaceholder(loginLocators.passwordInput).fill(password);
        await this.page.getByRole('button', { name: loginLocators.loginButton }).click();
    }

    async verifyLoginButton() {
        await expect(
            this.page.getByRole('button', { name: loginLocators.loginButton })
        ).toBeVisible();
    }

}



