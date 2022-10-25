import * as puppeteer from 'puppeteer'

export const scrapeClasses = async () => {
  const url = 'https://www.wowhead.com/wotlk/'
  const browser = await puppeteer.launch({
    headless: true,
  })
  const page = await browser.newPage()
  page.on('console', msg => console.log('PAGE LOG:', msg.text()))
  await page.goto(url)

  const el = await page.waitForSelector('#onetrust-consent-sdk')
  if (el) {
    await el.evaluate(el => el.remove())
  }

  const nav = await page.waitForSelector('div.header-nav-features')

  if (!nav) throw new Error('Could not correctly parse Wowhead.')

  const boundingBox = (await nav.boundingBox()) || { x: 0, y: 0 }

  page.mouse.move(boundingBox.x + 10, boundingBox.y + 10)

  await page.waitForSelector('div.menu div.menu-item > a')
  const specs = await page.$$eval('div.menu div.menu-item > a', items => {
    return items
      .map(el => {
        if (!el || el.classList.contains('menu-item-heading')) return null

        const color = getComputedStyle(el).color
        const icon = getComputedStyle(el).backgroundImage.split('"')[1]
        const name = el.textContent?.trim() || ''

        return {
          name,
          slug: name.toLowerCase().replace(' ', '-'),
          color,
          icon,
        }
      })
      .filter(Boolean)
  })
  await browser.close()

  return specs
}
