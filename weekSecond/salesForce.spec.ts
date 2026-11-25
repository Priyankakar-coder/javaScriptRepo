import { test } from "@playwright/test";

test("learn css selectors for Salesforce", async ({ page }) => {

  await page.goto("https://login.salesforce.com/");
  await page.locator('[name="identifier"]').fill("priyanka.1807kar@gmail.com");
  await page.locator('.slds-button.slds-button_brand.slds-button_stretch').click();
  await page.locator('#username').fill("priyanka.1807kar@gmail.com");
  await page.locator('#Login').click();
  await page.locator('#password').fill("TestLeaf@2025");
  await page.locator('#gidr-email-log-in-button').press("Enter");
});