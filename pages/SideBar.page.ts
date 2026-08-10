import {Page, expect} from '@playwright/test'
import { SideBarlocators } from '../locators/sidebar.locators'

export class SideBar {
    constructor (private page: Page){

    }

    async admin(){
        await this.page.getByRole('link',{name:SideBarlocators.Add}).click();
    }
    async Pim (){
        await this.page.getByRole('link',{name:SideBarlocators.PIM}).click();

    }
}
