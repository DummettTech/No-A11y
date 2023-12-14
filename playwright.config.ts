import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
})
