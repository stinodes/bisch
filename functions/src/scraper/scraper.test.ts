import { scrapeClasses } from './classes'

describe('Scraper', () => {
  test('fetches all specs and their metadata', async () => {
    const data = await scrapeClasses()

    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(31)
    expect(data).toMatchSnapshot()
  })
})
