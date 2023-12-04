//const {test, expect} = require('@playwright/test');
//another way to import
import {test, expect} from '@playwright/test';

//locating single elements

test ("Finding Locators, Single Element", async ({page})=> {
    //visiting the page
    await page.goto("https://www.demoblaze.com/");

    //clicking on the login button from nav bar - Property as a locator
    await page.locator('id=login2').click();

    //providing username - CSS as a locator
    await page.locator('#loginusername').fill("niaz@94");

    //providing password - custom CSS as a locator
    await page.fill("input[id='loginpassword']", "123456"); //another of way providing value in the input field

    //clicking on the Log In button - Xpath as a locator
    await page.click("//button[contains(text(),'Log in')]");

    //verification or assertion - verify the logout button is visible after login
    const LogoutBtn = await page.locator('#logout2'); //CSS as a locator
    await expect(LogoutBtn).toBeVisible();

    //closing the page
    await page.close();


});