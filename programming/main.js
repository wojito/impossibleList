import puppeteer from 'puppeteer';

let i;

i = 0;
(async () => {

	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	

	await page.setDefaultTimeout(60000);
  	await page.goto('https://web.whatsapp.com/');
	//await page.waitForSelector('._3j8Pd');
	// Select the user that we want to click on
	const userSelector = '[title="Adam13"]';
	const userElement = await page.waitForSelector(userSelector, {timeout: 60000});

	// Click on the user
	await userElement.click();
	while (i < 30)
	{
		await page.type( 'div[title="Type a message"]', 'yo', {delay: 100}); 
		await page.keyboard.press('Enter');
		i++;
	}
	await browser.close();
})();
