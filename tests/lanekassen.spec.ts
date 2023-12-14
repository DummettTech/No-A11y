import { test, expect } from '../fixture'

test.describe('Lanekassen', () => {
  test('Home', async ({ axeReporter, page }) => {
    await page.goto('https://www.lanekassen.no')

    const result = await axeReporter.analyze()

    expect(result.violations).toEqual([])
  })
})
