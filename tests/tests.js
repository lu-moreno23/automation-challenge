const puppeteer = require('puppeteer')
const describe = require('mocha').describe;

 describe("Execute search that doesnt return results",()=>{
    it("shows a validation message",async()=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.waitForTimeout(1000);
    await page.goto('http://automationpractice.com/index.php');
    const searchBar = await page.waitForXPath('//*[@id="search_query_top"]')
    searchBar.click()
    searchBar.type("im a test")
    await page.waitForTimeout(5000);
    const spotlightIcon = await page.waitForXPath('//*[@id="searchbox"]/button')
    spotlightIcon.click()
    await page.waitForTimeout(5000);
    await page.waitForFunction(
      'document.querySelector("#center_column > p").innerText.includes("No results were found for your search")'
    );
    await page.screenshot({path: 'validationmessage.png'})
    await page.waitForTimeout(5000);
    await browser.close();    
    });
   });

   describe("Execute search that returns multiple results",()=>{
    it("shows all available dresses",async()=>{
      const browser = await puppeteer.launch({headless:false})
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 })
      await page.waitForTimeout(1000);
      await page.goto('http://automationpractice.com/index.php');
      await page.waitForTimeout(1000);
      const searchBar = await page.waitForXPath('//*[@id="search_query_top"]')
      searchBar.click()
      searchBar.type("dress")
      await page.waitForTimeout(5000);
      const spotlightIcon = await page.waitForXPath('//*[@id="searchbox"]/button')
      spotlightIcon.click()
      await page.waitForTimeout(5000);
      await page.waitForXPath('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]/span');
      await page.screenshot({path: 'dressesresults.png'})
      await page.waitForTimeout(5000); 
      await browser.close();    
    });
   });

