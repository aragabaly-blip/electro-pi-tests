import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: true
    },

    projects: [

        // API tests run once
        {
            name: 'api',
            testMatch: '**/api.spec.js',
            use: {}
        },

        // UI tests run on Chromium
        {
            name: 'chromium',
            testIgnore: '**/api.spec.js',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        // UI tests run on Firefox
        {
            name: 'firefox',
            testIgnore: '**/api.spec.js',
            use: {
                ...devices['Desktop Firefox']
            }
        },

        // UI tests run on WebKit
        {
            name: 'webkit',
            testIgnore: '**/api.spec.js',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ]
});