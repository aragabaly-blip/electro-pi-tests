export class InventoryPage {

    constructor(page) {
        this.page = page;

        this.inventoryLink = page.getByRole('link', {
            name: 'Inventory'
        });

        this.productNameInput = page.getByLabel('Product Name');

        this.priceInput = page.getByLabel('Price');

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        this.successToast = page.getByRole('alert');

        // Optional spinner locator.
        // Update the selector if the real application uses
        // a different loading indicator.
        this.spinner = page.locator(
            '[role="progressbar"], .spinner, .loading'
        );
    }

    async openInventory() {

        await this.inventoryLink.click();

        // Wait for the inventory form to become ready.
        await this.productNameInput.waitFor({
            state: 'visible'
        });
    }

    async addProduct(productName, price) {

        await this.productNameInput.fill(productName);

        await this.priceInput.fill(price);

        await this.saveButton.click();

        // If a loading indicator appears, wait for it to disappear.
        // Playwright will continue normally if it does not exist.
        if (await this.spinner.count() > 0) {
            await this.spinner.first().waitFor({
                state: 'hidden'
            });
        }
    }

    async expectSuccessMessage() {

        await this.successToast.waitFor({
            state: 'visible'
        });
    }
}