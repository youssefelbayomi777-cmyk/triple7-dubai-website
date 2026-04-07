import { test, expect } from '@playwright/test';

test.describe('Triple 7 Dubai Home Page', () => {
  test('should load the home page and have correct title', async ({ page }) => {
    // Assuming the local server is running on port 8080 during tests
    await page.goto('http://localhost:8080');

    // Check title
    await expect(page).toHaveTitle(/Triple 7 Dubai/);
    
    // Check main hero text
    await expect(page.locator('h1')).toContainText('Where Nostalgia');
    await expect(page.locator('h1')).toContainText('Meets Nightlife');
  });

  test('should navigate to booking section when CTA is clicked', async ({ page }) => {
    await page.goto('http://localhost:8080');

    // Click the hero CTA
    const bookButton = page.locator('a:has-text("Book a Table")').first();
    await bookButton.click();

    // Ensure we jumped to the booking section
    await expect(page.url()).toContain('#booking');
    
    // Ensure booking section shows
    const bookingHeading = page.locator('h2:has-text("Reserve Your")');
    await expect(bookingHeading).toBeVisible();
  });
});
