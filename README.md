# Electro Pi | Senior QA Automation Engineer Technical Assessment Solution

## Project Overview

This repository contains the automation solution developed for the Electro Pi Senior QA Automation Engineer technical assessment.

Electro Pi is a multi-tenant, cloud-based Point of Sale (POS) and inventory management web application. The platform relies heavily on REST APIs and dynamic UI components, making accuracy, performance, and stability important quality requirements.

The solution covers UI automation, API testing, Postman automation, database validation, and CI/CD integration.

## Technology Stack

- Playwright
- JavaScript
- Page Object Model (POM)
- Playwright API Testing
- Postman
- SQL
- GitHub Actions
- Node.js
- npm

## Part 1 - UI Test Automation & Architecture

### 1. Framework Choice

Playwright was selected as the automation tool.

The main reasons are:

- Cross-browser support for Chromium, Firefox, and WebKit
- Built-in auto-waiting
- Reliable locator strategies
- Support for dynamic web applications
- API testing capabilities
- Network handling capabilities
- Trace Viewer for debugging
- Screenshots and video on test failure
- Easy CI/CD integration

Compared with Selenium and Cypress, Playwright provides a strong combination of UI automation, API testing, browser support, debugging capabilities, and built-in synchronization.

### 2. Design Pattern

The framework uses the Page Object Model (POM).

The purpose of POM is to separate:

- Page locators
- Page actions
- Test scenarios
- Test data
- Authentication utilities

Current page objects include:

- `LoginPage.js`
- `InventoryPage.js`

This structure improves:

- Maintainability
- Reusability
- Readability
- Scalability
- Debugging

### 3. UI Test Implementation

The implemented test covers the required Store Admin workflow:

1. Navigate to the application login page.
2. Log in using Store Admin credentials.
3. Navigate to Inventory.
4. Enter Product Name.
5. Enter Price.
6. Click Save.
7. Wait for the asynchronous operation to complete.
8. Assert that the success toast is displayed.

The UI implementation uses semantic Playwright locators such as:

- `getByRole()`
- `getByLabel()`

This reduces dependency on fragile CSS selectors or XPath expressions.

### 4. Stability Strategy

The framework avoids hardcoded sleeps such as:

```javascript
await page.waitForTimeout(5000);
## Project Configuration

### Environment Variables

Environment-specific values and credentials are stored outside the source code.

The project uses the following variables:

```text
BASE_URL=https://your-electro-pi-url.com/login
API_BASE_URL=https://your-electro-pi-url.com/api/v1
STORE_ADMIN_EMAIL=your-store-admin-email
STORE_ADMIN_PASSWORD=your-store-admin-password
## Repository Structure

```text
electro-pi-tests/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── InventoryPage.js
│   └── LoginPage.js
├── postman/
│   ├── Electro-Pi-Inventory.postman_collection.json
│   └── Electro-Pi.postman_environment.json
├── tests/
│   ├── api.spec.js
│   └── inventory.spec.js
├── utils/
│   ├── auth.js
│   ├── database-verification.sql
│   └── testData.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
## Security Considerations

Sensitive credentials are not hardcoded into test scripts.

The project uses:

- `.env` for local configuration
- `.env.example` as a safe configuration template
- `.gitignore` to prevent `.env` from being committed
- GitHub Secrets for CI/CD credentials

No real credentials should be committed to the repository.

## GitHub Repository

The complete automation project is available here:

https://github.com/aragabaly-blip/electro-pi-tests

## Conclusion

The Electro Pi automation solution provides a scalable and maintainable test framework covering the major quality layers required by the assessment.

The implementation includes:

- Playwright UI automation
- Page Object Model architecture
- Cross-browser testing
- API automation
- Authentication and token handling
- Positive and negative API scenarios
- Postman automation
- Database validation using SQL
- GitHub Actions CI/CD integration
- Secure environment configuration
- Test reporting and debugging capabilities
The framework is designed so that the missing environment-specific information can be supplied later without requiring a redesign of the automation architecture.