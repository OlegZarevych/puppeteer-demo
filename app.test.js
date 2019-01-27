var puppeteer = require("puppeteer")

describe('on page load', () => {
    test('text exist', async () => {
        let browser = await puppeteer.launch()
        let page = await browser.newPage()

        await page.goto('http://duckduckgo.com/')

        const msg = await page.$eval('div.tag-home__item', e => e.innerHTML)

        expect(msg).toContain("The search engine that doesn't track you.");

        browser.close()
    }, 16000)
})