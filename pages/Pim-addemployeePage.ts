import { Page, expect } from '@playwright/test'
import { pimlocators } from '../locators/pim-addemployee.locators'
import { addemployee } from '../test-data/addemployee.Data';

export class Pim {
   constructor(private page: Page) {
   }

   async clickaddbutton() {
      await this.page.getByRole("button", { name: pimlocators.addButton }).click();
   }
   async addemployee() {
      await this.page.locator(pimlocators.image).setInputFiles('/Users/mac/Desktop/employee.png');
      await this.page.getByPlaceholder(pimlocators.firstName).fill(addemployee.personaldetails.firstName);
      await this.page.getByPlaceholder(pimlocators.lastName).fill(addemployee.personaldetails.lastName);
      await this.page.getByRole('textbox').nth(4).fill(addemployee.personaldetails.employeeId);

   }

   async createlogindetails() {
      const toggle = this.page.locator(pimlocators.checkbox);
      const isEnabled = await toggle.getAttribute('checked');
      if (!isEnabled) {
         await toggle.click();
      }


      await this.page.locator(pimlocators.username).nth(0).fill(addemployee.logindetails.username);
      await this.page.getByText("Enabled").click();
       
      
      await this.page.locator(pimlocators.password).first().fill(addemployee.logindetails.password);
      await this.page.locator(pimlocators.confirmpassword).nth(1).fill(addemployee.logindetails.password);
   }

}
