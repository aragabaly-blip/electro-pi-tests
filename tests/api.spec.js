import { test, expect } from '@playwright/test';
import { inventoryTestData } from '../utils/testData.js';
import { getAuthToken } from '../utils/auth.js';

const apiBaseUrl =
    process.env.API_BASE_URL ||
    'https://your-electro-pi-url.com/api/v1';

test.describe('Inventory API', () => {

    let token;

    test.beforeAll(async ({ request }) => {
        token = await getAuthToken(request, apiBaseUrl);
    });

    test('API-01 - Create inventory item with valid data', async ({
        request
    }) => {

        const response = await request.post(
            `${apiBaseUrl}/inventory/items`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: inventoryTestData.validItem
            }
        );

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.sku).toBe(
            inventoryTestData.validItem.sku
        );
    });

    test('API-02 - Create inventory item with minimum valid quantity', async ({
        request
    }) => {

        const response = await request.post(
            `${apiBaseUrl}/inventory/items`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: inventoryTestData.minimumQuantityItem
            }
        );

        expect(response.status()).toBe(201);
    });

    test('API-03 - Create inventory item without SKU', async ({
        request
    }) => {

        const response = await request.post(
            `${apiBaseUrl}/inventory/items`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: inventoryTestData.missingSkuItem
            }
        );

        expect(response.status()).toBe(400);
    });

    test('API-04 - Create inventory item with invalid category', async ({
        request
    }) => {

        const response = await request.post(
            `${apiBaseUrl}/inventory/items`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: inventoryTestData.invalidCategoryItem
            }
        );

        // Expected status depends on the actual API contract.
        expect([400, 404]).toContain(
            response.status()
        );
    });

    test('API-05 - Create inventory item without authorization', async ({
        request
    }) => {

        const response = await request.post(
            `${apiBaseUrl}/inventory/items`,
            {
                data: inventoryTestData.validItem
            }
        );

        expect(response.status()).toBe(401);
    });

});