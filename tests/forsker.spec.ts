import { test, expect } from '../fixture'

test.describe('Forskerforbundet', () => {
  test('Home', async ({ axeReporter, page }) => {
    await page.goto('https://www.forskerforbundet.no')

    const locator = page.getByText('Fagforeningen for forskere, kunnskapsarbeidere og studenter')
    await expect(locator).toBeVisible()
    const result = await axeReporter.analyze()

    expect(result.violations).toEqual([])
  })
})
