import { Page, expect } from "@playwright/test"
import { adminlocators } from "../locators/admin.locators"

export class AdminPage {
  constructor(private page: Page) {

  }

  async openAdminPage() {
    await this.page.getByRole("link", { name: adminlocators.admin }).click();
  }

  async verifyAdminPage() {
    await expect(this.page.locator(adminlocators.adminMenu)).toBeVisible();
  }


}