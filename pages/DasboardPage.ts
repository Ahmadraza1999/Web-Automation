import { Page, expect } from '@playwright/test'
import { dashboardLocators } from '../locators/dashboard.locators'
export class DashboardPage {
    constructor(private page: Page) {
    }

    async verifyDashboardLoaded() {
        await expect
            (this.page.getByRole("heading", { name: dashboardLocators.dashboardHeading }
            )).toBeVisible();


    }
    async logout() {
        await this.page.locator(dashboardLocators.menu).click()
        await this.page.getByRole("menuitem", { name: dashboardLocators.logout }).click();
    }
}