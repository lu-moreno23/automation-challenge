const puppeteer = require('puppeteer')
const describe = require('mocha').describe;

describe("Attempt to send message without completing all the required informattion",()=>{
  it("shows a validation message",async()=>{
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.waitForTimeout(1000);
  await page.goto('http://automationpractice.com/index.php');
  const contactLink = await page.waitForXPath('//*[@id="contact-link"]/a')
  contactLink.click()
  await page.waitForTimeout(5000);
  const sendButton = await page.waitForXPath('//*[@id="submitMessage"]/span')
  sendButton.click()
  await page.waitForXPath('//*[@id="center_column"]/div')
  await page.screenshot({path: 'fail.png'})
  await browser.close();    
  });
 });


describe("Send message using the contact form",()=>{
  it("shows a confirmation message",async()=>{
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.waitForTimeout(1000);
  await page.goto('http://automationpractice.com/index.php');
  const contactLink = await page.waitForXPath('//*[@id="contact-link"]/a')
  contactLink.click()
  await page.waitForTimeout(5000);
  const subjectHeading = await page.waitForXPath('//*[@id="id_contact"]')
  subjectHeading.click()
  await page.waitForTimeout(5000);
  const selectCustomerService = await page.$('#id_contact')
  await selectCustomerService.select("2")
  console.log("paso 3")
  const emailField = await page.waitForXPath('//*[@id="email"]')
  emailField.click()
  emailField.type("test@test.com")
  await page.waitForTimeout(5000);
  const orderReferenceField = await page.waitForXPath('//*[@id="id_order"]')
  orderReferenceField.click()
  orderReferenceField.type("AAAA1111")
  await page.waitForTimeout(5000);
  const messageField = await page.waitForXPath('//*[@id="center_column"]/form/fieldset/div[1]/div[2]/div')
  await page.waitForTimeout(5000);
  messageField.click()
  messageField.type("Hello world, this is a test!")
  await page.waitForTimeout(5000);
  const sendButton = await page.waitForXPath('//*[@id="submitMessage"]/span')
  sendButton.click()
  await page.waitForTimeout(5000);
  await page.waitForXPath('//*[@id="center_column"]/p/text()')
  await page.screenshot({path: 'success.png'})
  await browser.close();    
  });
 });

