export const inventoryTestData = {
    validItem: {
        item_name: 'Wireless Mouse',
        sku: 'MS-001',
        quantity: 50,
        price: 25.00,
        category_id: 3
    },

    minimumQuantityItem: {
        item_name: 'USB Cable',
        sku: 'USB-001',
        quantity: 1,
        price: 10.00,
        category_id: 3
    },

    missingSkuItem: {
        item_name: 'Wireless Mouse',
        quantity: 50,
        price: 25.00,
        category_id: 3
    },

    invalidCategoryItem: {
        item_name: 'Wireless Mouse',
        sku: 'MS-INVALID',
        quantity: 50,
        price: 25.00,
        category_id: 999999
    }
};