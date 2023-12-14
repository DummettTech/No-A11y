import { test as base } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

interface A11yFixture {
  axeReporter: AxeBuilder
}

export const test = base.extend<A11yFixture>({
  axeReporter: async ({ page }, use) => {
    const reporter = new AxeBuilder({ page })
      .withTags(['wcag2aa', 'wcag21a'])

    await use(reporter)
  }
})

export { expect } from '@playwright/test'
