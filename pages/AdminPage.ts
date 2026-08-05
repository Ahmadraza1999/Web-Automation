import { Page, expect } from "@playwright/test"
import { adminlocators } from "../locators/admin.locators"

export class AdminPage {
  constructor(private page: Page) {

  }

  async openadminpage() {
    await this.page.getByRole("link", { name: adminlocators.admin }).click();
  }

  async verifyadminpage() {
    await expect(this.page.locator(adminlocators.adminMenu)).toBeVisible();
  }


}