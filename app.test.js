var puppeteer = require("puppeteer")

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()

    await page.goto('http://duckduckgo.com/')
})

afterAll(() =>{
    browser.close();
})

describe('on page load', () => {
    test('text exist', async () => {

        const msg = await page.$eval('div.tag-home__item', e => e.innerHTML)

        expect(msg).toContain("The search engine that doesn't track you.");
    }, 16000)
})