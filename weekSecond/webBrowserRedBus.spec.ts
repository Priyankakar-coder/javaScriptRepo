import { chromium, test, webkit } from "@playwright/test";

test("Red Bus in Edge", async () => {

    // Launch Microsoft Edge
    const edgeBrowser = await chromium.launch({
        channel: "msedge",
        headless: false
    });

    const context = await edgeBrowser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redbus.in/");

    const title = await page.title();
    const url = page.url();

    console.log("===== Red Bus (Edge) =====");
    console.log("Title :", title);
    console.log("URL   :", url);

    await page.waitForTimeout(3000);

    await edgeBrowser.close();
});

test("Flipkart in WebKit", async () => {

    // Launch WebKit
    const browser = await webkit.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");

    const title = await page.title();
    const url = page.url();

    console.log("===== Flipkart (WebKit) =====");
    console.log("Title :", title);
    console.log("URL   :", url);

    await page.waitForTimeout(3000);

    await browser.close();
});