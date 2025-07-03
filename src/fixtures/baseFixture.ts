import { test as base } from '@playwright/test';
import { Application } from '../app/application';
import { faker } from '@faker-js/faker';
import Ajv from 'ajv';

type MyFixtures = {
  app: Application;
  faker: typeof faker;
  ajv: Ajv;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    await use(new Application(page));
  },
  faker: async ({}, use) => {
    await use(faker);
  },
  ajv: async ({}, use) => {
    const ajv = new Ajv();
    await use(ajv);
  },
});

export { expect } from '@playwright/test';
