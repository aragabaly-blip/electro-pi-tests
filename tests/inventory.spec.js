import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test.describe('Inventory Management', () => {

    test('Store Admin can add a new inventory item', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // The real Electro Pi application URL was not provided
        // in the assessment.
        await page.goto(
            process.env.BASE_URL || 'https://electro-pi.example.com/login'
        );

        await loginPage.login(
            process.env.STORE_ADMIN_EMAIL,
            process.env.STORE_ADMIN_PASSWORD
        );

        await inventoryPage.openInventory();

        await inventoryPage.addProduct(
            'Wireless Mouse',
            '25.00'
        );

        await inventoryPage.expectSuccessMessage();

await expect(inventoryPage.successToast)
    .toHaveText(/successfully/i);
    });

});